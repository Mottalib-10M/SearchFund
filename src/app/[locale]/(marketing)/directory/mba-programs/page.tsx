import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import {
  allPrograms,
  getProgramCards,
  hubFAQs,
} from "../_data/program-registry";
import {
  safeJsonLd,
  collectionPageSchema,
  educationalOrganizationSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/json-ld";
import { buildMetadata } from "@/lib/meta-snippets";
import MbaHub from "@/components/mba/MbaHub";
import { getEntriesForCategory, getEntryName, getEntrySlug, getEntryDescription } from "../_data";
import type { MBAProgramEntry } from "../_data";
import EntryFilters from "../_components/EntryFilters";

const BASE = "https://www.searchfundmarket.com";

/** Slugs that have rich profiles in the program registry */
const RICH_SLUGS = new Set(allPrograms.map((p) => p.slug));

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata("directory/mba-programs", locale);
}

export default async function MbaProgramsHubPage({ params }: Props) {
  const { locale } = await params;
  const programs = getProgramCards();

  // JSON-LD: ItemList of EducationalOrganization
  const eduItems = allPrograms.map((p) =>
    educationalOrganizationSchema({
      name: p.name,
      url: p.officialUrl,
      location: p.location,
      description: p.description,
    }),
  );

  // "Other programs" from directory data that are NOT in the rich registry
  const allDirectoryEntries = getEntriesForCategory("mba-programs");
  const otherEntries = allDirectoryEntries.filter(
    (e) => !RICH_SLUGS.has(e.slug),
  );

  const serializedOthers = otherEntries.map((entry) => ({
    slug: getEntrySlug(entry),
    name: getEntryName(entry),
    subtitle:
      entry.kind === "mba-program"
        ? `${(entry as MBAProgramEntry).city}, ${(entry as MBAProgramEntry).country}`
        : "",
    description: getEntryDescription(entry),
    tag:
      entry.kind === "mba-program" ? (entry as MBAProgramEntry).country : null,
    filters:
      entry.kind === "mba-program"
        ? { country: [(entry as MBAProgramEntry).country] }
        : ({} as Record<string, string[]>),
  }));

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            ...collectionPageSchema(
              "Best MBA Programs for Search Fund Entrepreneurs",
              `${allPrograms.length} MBA programs reviewed for ETA readiness`,
              `${BASE}/${locale}/directory/mba-programs`,
            ),
            mainEntity: {
              "@type": "ItemList",
              name: "MBA Programs for Search Funds",
              numberOfItems: eduItems.length,
              itemListElement: eduItems.map((item, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item,
              })),
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(faqPageSchema(hubFAQs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            breadcrumbSchema([
              { name: "Home", url: `${BASE}/${locale}` },
              { name: "Directory", url: `${BASE}/${locale}/directory` },
              {
                name: "MBA Programs",
                url: `${BASE}/${locale}/directory/mba-programs`,
              },
            ]),
          ),
        }}
      />

      {/* Back link */}
      <Link
        href="/directory"
        className="inline-flex items-center gap-1.5 text-sm text-apple-gray-500 hover:text-apple-accent transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        All categories
      </Link>

      {/* Hero */}
      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        Best MBA Programs for Search Fund Entrepreneurs
      </h1>
      <p className="text-apple-gray-500 mt-3 max-w-2xl">
        A data-driven guide to the MBA programs that produce the most successful
        search fund entrepreneurs. Verified faculty, courses, alumni outcomes,
        and tuition for each program.
      </p>

      {/* Quick stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 mb-10">
        {[
          { value: "85%", label: "SF Founders Hold MBA" },
          { value: "11", label: "Programs Ranked" },
          { value: "18+", label: "Dedicated ETA Courses" },
          { value: "$98K–$183K", label: "Total Tuition Range" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-apple-gray-50 rounded-xl p-4 text-center"
          >
            <p className="text-2xl font-semibold text-apple-black">
              {stat.value}
            </p>
            <p className="text-xs text-apple-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Client-side hub with filters */}
      <MbaHub programs={programs} />

      {/* Other programs section */}
      {otherEntries.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-semibold text-apple-black mb-1">
            Other MBA programs with ETA activity
          </h2>
          <p className="text-sm text-apple-gray-500 mb-2">
            {otherEntries.length} additional programs offering ETA-related
            coursework, clubs, or alumni networks.
          </p>
          <EntryFilters
            entries={serializedOthers}
            filterDefs={[{ key: "country", label: "Country" }]}
            locale={locale}
            categorySlug="mba-programs"
          />
        </section>
      )}

      {/* Pillar CTAs */}
      <section className="mt-12 mb-12">
        <h2 className="text-xl font-semibold text-apple-black mb-4">
          Go deeper
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/learn/mba-and-eta"
            className="block rounded-xl border border-apple-gray-300/50 bg-white p-5 hover:shadow-md transition-shadow"
          >
            <p className="font-semibold text-apple-black">
              MBA and ETA: The Complete Guide
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">
              Why MBAs dominate search funds, the history of ETA education, and
              how to evaluate programs.
            </p>
          </Link>
          <Link
            href="/learn/best-mba-for-search-fund"
            className="block rounded-xl border border-apple-gray-300/50 bg-white p-5 hover:shadow-md transition-shadow"
          >
            <p className="font-semibold text-apple-black">
              Best MBA Programs for Search Funds: Full Ranking
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">
              Ranking methodology, tier-by-tier analysis, and comparative data
              across all programs.
            </p>
          </Link>
          <Link
            href="/learn/mba-roi-search-fund-career"
            className="block rounded-xl border border-apple-gray-300/50 bg-white p-5 hover:shadow-md transition-shadow"
          >
            <p className="font-semibold text-apple-black">
              The Real ROI of an MBA for ETA
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">
              Total cost analysis, expected outcomes, opportunity cost, and
              break-even scenarios.
            </p>
          </Link>
          <Link
            href="/learn/eta-without-mba"
            className="block rounded-xl border border-apple-gray-300/50 bg-white p-5 hover:shadow-md transition-shadow"
          >
            <p className="font-semibold text-apple-black">
              Can You Start a Search Fund Without an MBA?
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">
              Data on non-MBA searchers, self-funded paths, and alternative
              routes into ETA.
            </p>
          </Link>
        </div>
      </section>

      {/* FAQ section */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-apple-black mb-6">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {hubFAQs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-apple-black">{faq.question}</h3>
              <p className="text-sm text-apple-gray-700 mt-2 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
