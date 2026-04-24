import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllCategorySlugs,
  getCategoryBySlug,
  getEntriesForCategory,
  getEntryName,
  getEntrySlug,
  getEntryDescription,
} from "../_data";
import { safeJsonLd, collectionPageSchema } from "@/lib/json-ld";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string; category: string }> };

export function generateStaticParams() {
  return getAllCategorySlugs().map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  const entries = getEntriesForCategory(category);
  return {
    title: `${cat.name} - ${entries.length} Entries | SearchFundMarket Directory`,
    description: cat.ogDescription,
    alternates: {
      canonical: `${BASE}/${locale}/directory/${category}`,
    },
  };
}

function getEntrySubtitle(entry: ReturnType<typeof getEntriesForCategory>[number]): string {
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
      return `${entry.host} · ${entry.language} · ${entry.status}`;
    case "book":
      return `${entry.author} (${entry.year})`;
    case "advisor":
      return `${entry.specialization.join(", ")} · ${entry.country}`;
    default:
      return "";
  }
}

function getEntryTag(entry: ReturnType<typeof getEntriesForCategory>[number]): string | null {
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

export default async function DirectoryCategoryPage({ params }: Props) {
  const { locale, category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const entries = getEntriesForCategory(category);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
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

      <nav className="text-sm text-apple-gray-500 mb-6">
        <Link href={`/${locale}/directory`} className="hover:text-apple-accent">
          Directory
        </Link>
        <span className="mx-2">/</span>
        <span className="text-apple-black">{cat.name}</span>
      </nav>

      <h1 className="text-3xl font-semibold text-apple-black tracking-tight">
        {cat.name}
      </h1>
      <p className="text-apple-gray-500 mt-2 max-w-2xl">
        {entries.length} {entries.length === 1 ? "entry" : "entries"} &mdash;{" "}
        {cat.description}
      </p>

      {cat.introText && (
        <div className="mt-6 text-sm text-apple-gray-700 leading-relaxed max-w-3xl">
          <p>{cat.introText}</p>
        </div>
      )}

      <div className="mt-10 space-y-4">
        {entries.map((entry) => {
          const name = getEntryName(entry);
          const slug = getEntrySlug(entry);
          const desc = getEntryDescription(entry);
          const subtitle = getEntrySubtitle(entry);
          const tag = getEntryTag(entry);

          return (
            <Link
              key={slug}
              href={`/${locale}/directory/${category}/${slug}`}
              className="group block rounded-xl border border-apple-gray-200 p-5 hover:border-apple-gray-400 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h2 className="text-base font-semibold text-apple-black group-hover:text-apple-accent transition-colors truncate">
                    {name}
                  </h2>
                  {subtitle && (
                    <p className="text-xs text-apple-gray-500 mt-0.5 capitalize">
                      {subtitle}
                    </p>
                  )}
                  <p className="text-sm text-apple-gray-700 mt-2 line-clamp-2">
                    {desc}
                  </p>
                </div>
                {tag && (
                  <span className="shrink-0 rounded-full bg-apple-gray-50 px-3 py-1 text-xs text-apple-gray-600 capitalize">
                    {tag}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {entries.length === 0 && (
        <p className="mt-10 text-apple-gray-500 text-sm">
          No entries yet. Check back soon.
        </p>
      )}
    </div>
  );
}
