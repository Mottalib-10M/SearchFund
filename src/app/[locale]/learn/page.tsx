import type { Metadata } from "next";
import Link from "next/link";
import {
  allArticles,
  categoryMeta,
  categorySlugMap,
  getPhaseForArticle,
  getAudiencesForArticle,
  PHASE_INFO,
  type ArticleCard,
} from "./_articles/article-registry";
import { safeJsonLd, collectionPageSchema } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/meta-snippets";
import LearnHub from "@/components/learn/LearnHub";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata("learn", locale);
}

export default async function LearnPage({ params }: Props) {
  const { locale } = await params;

  // Serialize articles for the client component
  const articles: ArticleCard[] = allArticles.map((a) => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    readTime: a.readTime,
    tag: a.tag,
    category: a.category,
    categorySlug: categorySlugMap[a.category] ?? "",
    phase: getPhaseForArticle(a),
    audiences: getAudiencesForArticle(a),
  }));

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            collectionPageSchema(
              "Learn About ETA",
              `${allArticles.length} guides on Entrepreneurship Through Acquisition`,
              `${BASE}/${locale}/learn`
            )
          ),
        }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        Learn about ETA
      </h1>
      <p className="text-apple-gray-500 mt-2 max-w-2xl">
        {allArticles.length} guides, reports, and resources on Entrepreneurship
        Through Acquisition &mdash; organized by the six phases of the ETA
        journey.
      </p>

      {/* ── Interactive hub (client) ──────────────────────────────────── */}
      <LearnHub
        articles={articles}
        phases={PHASE_INFO}
        categories={categoryMeta}
      />

      {/* ── Glossary Teaser ───────────────────────────────────────────── */}
      <section className="mt-16">
        <Link
          href="/learn/glossary"
          className="block rounded-xl border border-apple-gray-100 bg-gradient-to-r from-apple-gray-100/50 to-white p-8 hover:border-apple-accent/30 transition group"
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-apple-black group-hover:text-apple-accent transition">
                ETA Glossary
              </h2>
              <p className="text-sm text-apple-gray-700 mt-1 max-w-lg">
                EBITDA, ARR, LOI, PPM, QoE, IRR &mdash; searchable A-Z
                dictionary of 60+ ETA and acquisition terms with links to
                detailed guides.
              </p>
            </div>
            <span className="text-apple-gray-400 group-hover:text-apple-accent transition text-lg">
              &rarr;
            </span>
          </div>
        </Link>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────── */}
      <div className="mt-16 pt-8 border-t border-apple-gray-100">
        <p className="text-apple-gray-700">
          Ready to start your search?{" "}
          <Link
            href="/auth/signup"
            className="text-apple-accent font-medium hover:underline"
          >
            Join SearchFundMarket &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
