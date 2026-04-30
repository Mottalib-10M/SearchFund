import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  allPrograms,
  programsMeta,
  programComponents,
  type Tier,
} from "../_data/program-registry";
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

export function generateStaticParams() {
  return allPrograms.map((p) => ({ profileSlug: p.slug }));
}

type Props = {
  params: Promise<{ profileSlug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { profileSlug, locale } = await params;
  const program = programsMeta[profileSlug];
  if (!program) return { title: "Program not found" };

  return {
    title: program.ogTitle,
    description: program.ogDescription,
    openGraph: {
      title: program.ogTitle,
      description: program.ogDescription,
    },
    alternates: {
      canonical: `${BASE}/${locale}/mba/${profileSlug}`,
    },
  };
}

export default async function ProfilePage({ params }: Props) {
  const { profileSlug, locale } = await params;
  const program = programsMeta[profileSlug];
  if (!program) notFound();

  const ProfileComponent = programComponents[profileSlug];

  // Find related programs (same tier, excluding self)
  const related = allPrograms
    .filter((p) => p.slug !== profileSlug)
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
              { name: "MBA Programs", url: `${BASE}/${locale}/mba` },
              { name: program.shortName, url: `${BASE}/${locale}/mba/${profileSlug}` },
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
        <Link href="/mba" className="hover:text-apple-accent">
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
              href={`/mba/${p.slug}`}
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
          href="/mba"
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
