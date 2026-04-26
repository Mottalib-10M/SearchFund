import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  newsArticles,
  getNewsArticleBySlug,
  getAllNewsSlugs,
  newsCategories,
} from "../_data";
import { safeJsonLd } from "@/lib/json-ld";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string; newsSlug: string }> };

export function generateStaticParams() {
  return getAllNewsSlugs().map((newsSlug) => ({ newsSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, newsSlug } = await params;
  const article = getNewsArticleBySlug(newsSlug);
  if (!article) return {};
  return {
    title: `${article.title} | SearchFundMarket News`,
    description: article.description,
    alternates: {
      canonical: `${BASE}/${locale}/news/${newsSlug}`,
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

export default async function NewsArticlePage({ params }: Props) {
  const { locale, newsSlug } = await params;
  const article = getNewsArticleBySlug(newsSlug);
  if (!article) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { "@type": "Organization", name: article.author },
    publisher: {
      "@type": "Organization",
      name: "SearchFundMarket",
      url: BASE,
    },
    mainEntityOfPage: `${BASE}/${locale}/news/${newsSlug}`,
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
      />

      <nav className="text-sm text-apple-gray-500 mb-6">
        <Link href={`/${locale}/news`} className="hover:text-apple-accent">
          News
        </Link>
        <span className="mx-2">/</span>
        <span className="text-apple-black line-clamp-1">{article.title}</span>
      </nav>

      <article>
        <header>
          <div className="flex items-center gap-3 text-xs text-apple-gray-500">
            <span className="rounded-full bg-apple-gray-50 px-2.5 py-0.5 capitalize">
              {getCategoryLabel(article.category)}
            </span>
            <time dateTime={article.datePublished}>
              {formatDate(article.datePublished)}
            </time>
          </div>
          <h1 className="mt-3 text-3xl font-semibold text-apple-black tracking-tight">
            {article.title}
          </h1>
          <p className="mt-2 text-apple-gray-500 text-sm">
            By {article.author}
          </p>
        </header>

        <div
          className="mt-8 prose prose-sm prose-apple max-w-none text-apple-gray-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-apple-black [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_p]:mt-4 [&_li]:text-sm"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {article.sources.length > 0 && (
          <div className="mt-10 pt-6 border-t border-apple-gray-100">
            <h2 className="text-sm font-semibold text-apple-black">Sources</h2>
            <ul className="mt-2 space-y-1 text-xs text-apple-gray-500">
              {article.sources.map((s, i) => (
                <li key={i}>
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-apple-accent hover:underline"
                    >
                      {s.name}
                    </a>
                  ) : (
                    s.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {article.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-apple-gray-50 px-3 py-1 text-xs text-apple-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <div className="mt-8 pt-6 border-t border-apple-gray-100">
            <h2 className="text-sm font-semibold text-apple-black">
              Related Learning Resources
            </h2>
            <ul className="mt-2 space-y-1">
              {article.relatedArticles.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/${locale}/learn/${slug}`}
                    className="text-sm text-apple-accent hover:underline"
                  >
                    /learn/{slug}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </div>
  );
}
