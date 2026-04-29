import type { Metadata } from "next";
import Link from "next/link";
import {
  allPrograms,
  getProgramCards,
  hubFAQs,
} from "./_data/program-registry";
import {
  safeJsonLd,
  collectionPageSchema,
  itemListSchema,
  educationalOrganizationSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/json-ld";
import { buildMetadata } from "@/lib/meta-snippets";
import MbaHub from "@/components/mba/MbaHub";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata("mba", locale);
}

export default async function MbaPage({ params }: Props) {
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

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            collectionPageSchema(
              "Best MBA Programs for Search Fund Entrepreneurs",
              `${allPrograms.length} MBA programs reviewed for ETA readiness`,
              `${BASE}/${locale}/mba`,
            ),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            itemListSchema(eduItems, "MBA Programs for Search Funds"),
          ),
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
              { name: "MBA Programs", url: `${BASE}/${locale}/mba` },
            ]),
          ),
        }}
      />

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
          { value: "11", label: "Programs Reviewed" },
          { value: "3", label: "Tiers" },
          { value: "5", label: "Countries" },
          { value: "$82K–$94K", label: "US Tuition Range/yr" },
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
            href="/learn/search-fund-without-mba"
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
