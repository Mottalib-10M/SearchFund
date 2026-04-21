import type { Metadata } from "next";
import Link from "next/link";
import {
  allArticles,
  categoryMeta,
  categorySlugMap,
  readingPaths,
} from "./_articles/article-registry";
import { safeJsonLd, collectionPageSchema } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/meta-snippets";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata("learn", locale);
}

export default async function LearnPage({ params }: Props) {
  const { locale } = await params;
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
        Through Acquisition &mdash; from getting started to country-by-country
        playbooks.
      </p>

      {/* ── Reading Paths ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-apple-black tracking-tight">
          Reading paths
        </h2>
        <p className="text-sm text-apple-gray-500 mt-1">
          Curated article sequences to guide your learning
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {readingPaths.map((path) => (
            <div
              key={path.title}
              className={`rounded-xl p-5 border ${path.color}`}
            >
              <h3 className="text-lg font-semibold text-apple-black">
                {path.title}
              </h3>
              <p className="text-sm text-apple-gray-700 mt-1">
                {path.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {path.slugs.map((slug, i) => {
                  const article = allArticles.find((a) => a.slug === slug);
                  if (!article) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/learn/${slug}`}
                      className="inline-flex items-center text-xs bg-white/80 border border-black/5 rounded-full px-2.5 py-1 text-apple-gray-700 hover:text-apple-accent hover:border-apple-accent/30 transition"
                    >
                      <span className="text-apple-gray-400 mr-1.5 font-medium">
                        {i + 1}.
                      </span>
                      <span className="truncate max-w-[180px]">
                        {article.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Category Grid ─────────────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold text-apple-black tracking-tight">
          Browse by category
        </h2>
        <p className="text-sm text-apple-gray-500 mt-1">
          {categoryMeta.length} topics covering every stage of the search fund
          journey
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryMeta.map((cat) => {
            const count = allArticles.filter(
              (a) => categorySlugMap[a.category] === cat.slug,
            ).length;

            return (
              <Link
                key={cat.slug}
                href={`/learn/category/${cat.slug}`}
                className="bg-white rounded-xl p-5 hover:bg-apple-gray-100/50 transition border border-apple-gray-100 group"
              >
                <h3 className="text-base font-semibold text-apple-black group-hover:text-apple-accent transition">
                  {cat.name}
                </h3>
                <p className="text-sm text-apple-gray-700 mt-1 line-clamp-2">
                  {cat.description}
                </p>
                <p className="text-xs text-apple-gray-400 mt-2">
                  {count} {count === 1 ? "article" : "articles"}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

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
