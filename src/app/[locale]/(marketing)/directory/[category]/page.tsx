import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Users,
  GraduationCap,
  Handshake,
  Calendar,
  Headphones,
  BookOpen,
  Scale,
  Database,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  getAllCategorySlugs,
  getCategoryBySlug,
  getEntriesForCategory,
  getEntryName,
  getEntrySlug,
  getEntryDescription,
} from "../_data";
import type { DirectoryEntry } from "../_data";
import { safeJsonLd, collectionPageSchema } from "@/lib/json-ld";
import EntryFilters from "../_components/EntryFilters";

const BASE = "https://www.searchfundmarket.com";

const iconMap: Record<string, LucideIcon> = {
  Users,
  GraduationCap,
  Handshake,
  Calendar,
  Headphones,
  BookOpen,
  Scale,
};

type Props = { params: Promise<{ locale: string; category: string }> };

export function generateStaticParams() {
  return getAllCategorySlugs()
    .filter((category) => category !== "mba-programs")
    .map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: cat.ogTitle,
    description: cat.ogDescription,
    alternates: {
      canonical: `${BASE}/${locale}/directory/${category}`,
    },
  };
}

// ---------------------------------------------------------------------------
// Per-category helpers: subtitle, tag, and filters
// ---------------------------------------------------------------------------

function getEntrySubtitle(entry: DirectoryEntry): string {
  switch (entry.kind) {
    case "investor":
      return `${entry.type.replace("-", " ")} · ${entry.headquarters}`;
    case "mba-program":
      return `${entry.city}, ${entry.country}`;
    case "broker":
      return `${entry.type} · ${entry.country}`;
    case "conference":
      return `${entry.frequency} · ${entry.location}`;
    case "podcast":
      return `${entry.host} · ${entry.language}`;
    case "book":
      return `${entry.author} (${entry.year})`;
    case "advisor":
      return `${entry.specialization.join(", ")} · ${entry.country}`;
    default:
      return "";
  }
}

function getEntryTag(entry: DirectoryEntry): string | null {
  switch (entry.kind) {
    case "investor":
      return entry.type.replace("-", " ");
    case "broker":
      return entry.country;
    case "mba-program":
      return entry.country;
    case "conference":
      return entry.frequency;
    case "podcast":
      return entry.status;
    case "book":
      return entry.category.replace(/-/g, " ");
    case "advisor":
      return entry.country;
    default:
      return null;
  }
}

function getEntryFilters(entry: DirectoryEntry): Record<string, string[]> {
  switch (entry.kind) {
    case "investor":
      return {
        type: [entry.type.replace("-", " ")],
        geography: entry.geographyFocus,
      };
    case "mba-program":
      return {
        country: [entry.country],
      };
    case "broker":
      return {
        country: [entry.country],
        type: [entry.type],
      };
    case "conference":
      return {
        country: [entry.country],
        frequency: [entry.frequency],
      };
    case "podcast":
      return {
        language: [entry.language],
        status: [entry.status],
      };
    case "book":
      return {
        category: [entry.category.replace(/-/g, " ")],
      };
    case "advisor":
      return {
        country: [entry.country],
      };
    default:
      return {};
  }
}

const filterDefsByCategory: Record<
  string,
  { key: string; label: string }[]
> = {
  investors: [
    { key: "type", label: "Type" },
    { key: "geography", label: "Geography" },
  ],
  "mba-programs": [{ key: "country", label: "Country" }],
  brokers: [
    { key: "country", label: "Country" },
    { key: "type", label: "Type" },
  ],
  conferences: [
    { key: "country", label: "Country" },
    { key: "frequency", label: "Frequency" },
  ],
  podcasts: [
    { key: "language", label: "Language" },
    { key: "status", label: "Status" },
  ],
  books: [{ key: "category", label: "Category" }],
  advisors: [{ key: "country", label: "Country" }],
};

export default async function DirectoryCategoryPage({ params }: Props) {
  const { locale, category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const entries = getEntriesForCategory(category);
  const Icon = iconMap[cat.icon] ?? Database;

  // Serialize entries for the client component
  const serializedEntries = entries.map((entry) => ({
    slug: getEntrySlug(entry),
    name: getEntryName(entry),
    subtitle: getEntrySubtitle(entry),
    description: getEntryDescription(entry),
    tag: getEntryTag(entry),
    filters: getEntryFilters(entry),
  }));

  const filterDefs = filterDefsByCategory[category] ?? [];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            collectionPageSchema(
              cat.name,
              cat.ogDescription,
              `${BASE}/${locale}/directory/${category}`,
            ),
          ),
        }}
      />

      {/* Back link */}
      <Link
        href={`/${locale}/directory`}
        className="inline-flex items-center gap-1.5 text-sm text-apple-gray-500 hover:text-apple-accent transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        All categories
      </Link>

      {/* Hero */}
      <div className="flex items-start gap-4">
        <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-apple-accent/10">
          <Icon className="w-5 h-5 text-apple-accent" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-apple-black tracking-tight">
            {cat.name}
          </h1>
          <p className="text-apple-gray-500 mt-1 max-w-2xl text-sm">
            {cat.description}
          </p>
        </div>
      </div>

      {cat.introText && (
        <details className="mt-6 group">
          <summary className="text-sm text-apple-accent cursor-pointer hover:underline">
            About this section
          </summary>
          <p className="mt-2 text-sm text-apple-gray-600 leading-relaxed max-w-3xl">
            {cat.introText}
          </p>
        </details>
      )}

      {/* Client-side filterable list */}
      <EntryFilters
        entries={serializedEntries}
        filterDefs={filterDefs}
        locale={locale}
        categorySlug={category}
      />
    </div>
  );
}
