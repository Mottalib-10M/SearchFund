import type { Metadata } from "next";
import Link from "next/link";
import { newsArticles, newsCategories } from "./_data";
import { safeJsonLd, collectionPageSchema } from "@/lib/json-ld";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "ETA News - Search Fund & Acquisition News | SearchFundMarket",
    description:
      "The latest news on search funds, ETA ecosystem developments, regulation changes, and acquisition trends. Curated by SearchFundMarket.",
    alternates: {
      canonical: `${BASE}/${locale}/news`,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getCategoryLabel(slug: string): string {
  return newsCategories.find((c) => c.slug === slug)?.name ?? slug;
}

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            collectionPageSchema(
              "ETA News",
              "The latest search fund and acquisition news",
              `${BASE}/${locale}/news`,
            ),
          ),
        }}
      />

      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        ETA News
      </h1>
      <p className="text-apple-gray-500 mt-2 max-w-2xl">
        The latest on search funds, acquisitions, and the ETA ecosystem &mdash;
        curated by our editorial team.
      </p>

      <div className="mt-10 space-y-8">
        {newsArticles.map((article) => (
          <article
            key={article.slug}
            className="group border-b border-apple-gray-100 pb-8 last:border-0"
          >
            <div className="flex items-center gap-3 text-xs text-apple-gray-500">
              <span className="rounded-full bg-apple-gray-50 px-2.5 py-0.5 capitalize">
                {getCategoryLabel(article.category)}
              </span>
              <time dateTime={article.datePublished}>
                {formatDate(article.datePublished)}
              </time>
            </div>
            <h2 className="mt-2">
              <Link
                href={`/${locale}/news/${article.slug}`}
                className="text-xl font-semibold text-apple-black group-hover:text-apple-accent transition-colors"
              >
                {article.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm text-apple-gray-700 leading-relaxed line-clamp-3">
              {article.description}
            </p>
            <Link
              href={`/${locale}/news/${article.slug}`}
              className="inline-block mt-3 text-sm text-apple-accent hover:underline"
            >
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>

      {newsArticles.length === 0 && (
        <p className="mt-10 text-apple-gray-500 text-sm">
          No news articles yet. Check back soon.
        </p>
      )}
    </div>
  );
}
