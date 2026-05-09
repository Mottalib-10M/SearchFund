import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Info } from "lucide-react";
import {
  allPrograms,
  programsMeta,
  programComponents,
  type Tier,
} from "../../_data/program-registry";
import {
  getEntryBySlug,
  getEntryName,
  getEntriesForCategory,
  getEntrySlug,
} from "../../_data";
import type { MBAProgramEntry } from "../../_data";
import {
  safeJsonLd,
  educationalOrganizationSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/json-ld";

const BASE = "https://www.searchfundmarket.com";

const TIER_LABELS: Record<Tier, { label: string; color: string }> = {
  1: { label: "Tier 1", color: "bg-amber-100 text-amber-800" },
  2: { label: "Tier 2", color: "bg-blue-100 text-blue-800" },
  3: { label: "Tier 3", color: "bg-gray-100 text-gray-700" },
};

/** All slugs: rich profiles + directory-only entries */
export function generateStaticParams() {
  const richSlugs = allPrograms.map((p) => ({ slug: p.slug }));
  const directorySlugs = getEntriesForCategory("mba-programs").map(
    (e) => ({ slug: getEntrySlug(e) }),
  );
  // Merge & deduplicate
  const seen = new Set<string>();
  const all: { slug: string }[] = [];
  for (const item of [...richSlugs, ...directorySlugs]) {
    if (!seen.has(item.slug)) {
      seen.add(item.slug);
      all.push(item);
    }
  }
  return all;
}

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;

  // Rich profile?
  const program = programsMeta[slug];
  if (program) {
    return {
      title: program.ogTitle,
      description: program.ogDescription,
      openGraph: {
        title: program.ogTitle,
        description: program.ogDescription,
      },
      alternates: {
        canonical: `${BASE}/${locale}/directory/mba-programs/${slug}`,
      },
    };
  }

  // Simple directory entry?
  const entry = getEntryBySlug("mba-programs", slug);
  if (entry) {
    const name = getEntryName(entry);
    return {
      title: `${name} | SearchFundMarket Directory`,
      description: entry.description.slice(0, 160),
      alternates: {
        canonical: `${BASE}/${locale}/directory/mba-programs/${slug}`,
      },
    };
  }

  return { title: "Program not found" };
}

export default async function MbaProgramEntryPage({ params }: Props) {
  const { slug, locale } = await params;

  // ── Rich profile path ──────────────────────────────────────────────
  const program = programsMeta[slug];
  if (program) {
    const ProfileComponent = programComponents[slug];
    const related = allPrograms
      .filter((p) => p.slug !== slug)
      .slice(0, 3);

    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              ...educationalOrganizationSchema({
                name: program.name,
                url: program.officialUrl,
                location: program.location,
                description: program.longDescription,
              }),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(
              breadcrumbSchema([
                { name: "Home", url: `${BASE}/${locale}` },
                {
                  name: "Directory",
                  url: `${BASE}/${locale}/directory`,
                },
                {
                  name: "MBA Programs",
                  url: `${BASE}/${locale}/directory/mba-programs`,
                },
                {
                  name: program.shortName,
                  url: `${BASE}/${locale}/directory/mba-programs/${slug}`,
                },
              ]),
            ),
          }}
        />
        {program.faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: safeJsonLd(faqPageSchema(program.faqs)),
            }}
          />
        )}

        {/* Breadcrumb */}
        <nav className="text-sm text-apple-gray-500 mb-6">
          <Link
            href="/directory"
            className="hover:text-apple-accent"
          >
            Directory
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/directory/mba-programs"
            className="hover:text-apple-accent"
          >
            MBA Programs
          </Link>
          <span className="mx-2">/</span>
          <span className="text-apple-black">{program.shortName}</span>
        </nav>

        {/* Header */}
        <div className="flex items-start gap-3 mb-2">
          <span
            className={`shrink-0 mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${TIER_LABELS[program.tier].color}`}
          >
            {TIER_LABELS[program.tier].label}
          </span>
          {program.isStub && (
            <span className="shrink-0 mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700">
              Emerging
            </span>
          )}
        </div>

        {/* Profile content */}
        {ProfileComponent ? (
          <ProfileComponent />
        ) : (
          <div className="mt-8 text-apple-gray-500">
            <h1 className="text-3xl font-semibold text-apple-black tracking-tight">
              {program.name}
            </h1>
            <p className="mt-4">{program.longDescription}</p>
          </div>
        )}

        {/* FAQ section */}
        {program.faqs.length > 0 && (
          <section className="mt-12 pt-8 border-t border-apple-gray-200">
            <h2 className="text-xl font-semibold text-apple-black mb-6">
              Frequently asked questions about {program.shortName}
            </h2>
            <div className="space-y-6">
              {program.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-apple-black">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-apple-gray-700 mt-2 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Compare with other programs */}
        <section className="mt-12 pt-8 border-t border-apple-gray-200">
          <h2 className="text-xl font-semibold text-apple-black mb-4">
            Compare with other programs
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/directory/mba-programs/${p.slug}`}
                className="block rounded-lg border border-apple-gray-300/50 p-3 hover:shadow-sm transition-shadow"
              >
                <p className="text-sm font-semibold text-apple-black">
                  {p.shortName}
                </p>
                <p className="text-xs text-apple-gray-500 mt-0.5">
                  {p.location}
                </p>
              </Link>
            ))}
          </div>
          <Link
            href="/directory/mba-programs"
            className="inline-block mt-4 text-sm text-apple-accent hover:underline"
          >
            View all {allPrograms.length} programs
          </Link>
        </section>

        {/* Pillar CTAs */}
        <section className="mt-8 pt-8 border-t border-apple-gray-200">
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/learn/best-mba-for-search-fund"
              className="block rounded-lg border border-apple-gray-300/50 p-3 hover:shadow-sm transition-shadow"
            >
              <p className="text-sm font-semibold text-apple-black">
                Read full ranking analysis
              </p>
              <p className="text-xs text-apple-gray-500 mt-0.5">
                Methodology, criteria, tier-by-tier comparison
              </p>
            </Link>
            <Link
              href="/learn/mba-roi-search-fund-career"
              className="block rounded-lg border border-apple-gray-300/50 p-3 hover:shadow-sm transition-shadow"
            >
              <p className="text-sm font-semibold text-apple-black">
                MBA ROI for search funds
              </p>
              <p className="text-xs text-apple-gray-500 mt-0.5">
                Cost analysis, outcomes, break-even scenarios
              </p>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // ── Simple directory entry path ────────────────────────────────────
  const entry = getEntryBySlug("mba-programs", slug);
  if (!entry) notFound();

  const name = getEntryName(entry);
  const url = `${BASE}/${locale}/directory/mba-programs/${slug}`;
  const mbaEntry = entry as MBAProgramEntry;
  const websiteUrl = mbaEntry.programUrl ?? mbaEntry.website;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: mbaEntry.schoolName,
            url: mbaEntry.website,
            description: mbaEntry.description,
            address: {
              "@type": "PostalAddress",
              addressLocality: mbaEntry.city,
              addressCountry: mbaEntry.country,
            },
          }),
        }}
      />

      {/* Back link */}
      <Link
        href="/directory/mba-programs"
        className="inline-flex items-center gap-1.5 text-sm text-apple-gray-500 hover:text-apple-accent transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        MBA Programs
      </Link>

      {/* Breadcrumb */}
      <nav className="text-xs text-apple-gray-400 mb-4">
        <Link
          href="/directory"
          className="hover:text-apple-accent"
        >
          Directory
        </Link>
        <span className="mx-1.5">/</span>
        <Link
          href="/directory/mba-programs"
          className="hover:text-apple-accent"
        >
          MBA Programs
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-apple-gray-600">{name}</span>
      </nav>

      <h1 className="text-3xl font-semibold text-apple-black tracking-tight">
        {name}
      </h1>

      {/* Details card */}
      <div className="mt-6 rounded-2xl border border-apple-gray-200 bg-apple-gray-50 p-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div>
            <dt className="text-apple-gray-500">Program</dt>
            <dd className="text-apple-black font-medium">
              {mbaEntry.programName}
            </dd>
          </div>
          <div>
            <dt className="text-apple-gray-500">Location</dt>
            <dd className="text-apple-black font-medium">
              {mbaEntry.city}, {mbaEntry.country}
            </dd>
          </div>
          <div>
            <dt className="text-apple-gray-500">ETA Club</dt>
            <dd className="text-apple-black font-medium">
              {mbaEntry.etaClub ? "Yes" : "No"}
            </dd>
          </div>
          {mbaEntry.ranking && (
            <div>
              <dt className="text-apple-gray-500">Ranking</dt>
              <dd className="text-apple-black font-medium">
                {mbaEntry.ranking}
              </dd>
            </div>
          )}
          {mbaEntry.keyProfessors && mbaEntry.keyProfessors.length > 0 && (
            <div className="sm:col-span-2">
              <dt className="text-apple-gray-500">Key Professors</dt>
              <dd className="text-apple-black font-medium">
                {mbaEntry.keyProfessors.join(", ")}
              </dd>
            </div>
          )}
        </dl>
      </div>

      {/* About section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-apple-black">About</h2>
        <p className="mt-2 text-sm text-apple-gray-700 leading-relaxed">
          {mbaEntry.description}
        </p>
      </div>

      {/* CTA */}
      {websiteUrl && (
        <div className="mt-8">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-apple-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-apple-accent/90 transition-colors"
          >
            Visit Website
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Source & feedback footer */}
      <div className="mt-10 rounded-xl bg-apple-gray-50 p-5 flex items-start gap-3">
        <Info className="w-4 h-4 text-apple-gray-400 mt-0.5 shrink-0" />
        <div className="text-xs text-apple-gray-500 leading-relaxed">
          <p>
            <span className="font-medium text-apple-gray-600">Source:</span>{" "}
            {mbaEntry.source}
          </p>
          <p className="mt-1">
            Information sourced from public records. If you notice an
            inaccuracy, please{" "}
            <a
              href="/contact"
              className="text-apple-accent hover:underline"
            >
              let us know
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
