import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  allArticles,
  articlesMeta,
  articleComponents,
  categorySlugMap,
  getRelatedArticles,
} from "../_articles/article-registry";
import { safeJsonLd, articleSchema, breadcrumbSchema, faqPageSchema } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/meta-snippets";
import ArticleByline from "@/components/seo/ArticleByline";
import ArticleSources from "@/components/seo/ArticleSources";
import ArticleFAQ from "@/components/seo/ArticleFAQ";
import EditorialDisclaimer from "@/components/seo/EditorialDisclaimer";
import AuthorBox from "@/components/seo/AuthorBox";

const BASE = "https://www.searchfundmarket.com";

export function generateStaticParams() {
  return allArticles.map((a) => ({ articleSlug: a.slug }));
}

type Props = {
  params: Promise<{ articleSlug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { articleSlug, locale } = await params;
  const article = articlesMeta[articleSlug];

  if (!article) return { title: "Article not found" };

  return buildMetadata(`learn/${articleSlug}`, locale, {
    openGraph: {
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: ["SearchFundMarket Editorial Team"],
    },
  });
}

export default async function ArticlePage({ params }: Props) {
  const { articleSlug, locale } = await params;
  const meta = articlesMeta[articleSlug];

  if (!meta) notFound();

  const ArticleComponent = articleComponents[articleSlug];
  const articleData = allArticles.find((a) => a.slug === articleSlug);
  const categorySlug = articleData
    ? categorySlugMap[articleData.category]
    : null;
  const related = getRelatedArticles(articleSlug, 3);

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* JSON-LD */}
      {articleData && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: safeJsonLd(articleSchema(articleData, locale)),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: safeJsonLd(
                breadcrumbSchema([
                  { name: "Learn", url: `${BASE}/${locale}/learn` },
                  ...(categorySlug
                    ? [
                        {
                          name: articleData.category,
                          url: `${BASE}/${locale}/learn/category/${categorySlug}`,
                        },
                      ]
                    : []),
                  {
                    name: articleData.title,
                    url: `${BASE}/${locale}/learn/${articleSlug}`,
                  },
                ])
              ),
            }}
          />
          {articleData.faqs && articleData.faqs.length > 0 && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: safeJsonLd(faqPageSchema(articleData.faqs)),
              }}
            />
          )}
        </>
      )}

      {/* Breadcrumb */}
      <nav className="text-sm text-apple-gray-500 mb-8">
        <Link href="/learn" className="hover:text-apple-accent">
          Learn
        </Link>
        {articleData && categorySlug && (
          <>
            <span className="mx-2">/</span>
            <Link
              href={`/learn/category/${categorySlug}`}
              className="hover:text-apple-accent"
            >
              {articleData.category}
            </Link>
          </>
        )}
      </nav>

      {/* Byline */}
      {articleData && (
        <ArticleByline
          datePublished={articleData.datePublished}
          dateModified={articleData.dateModified}
        />
      )}

      {ArticleComponent ? (
        <ArticleComponent />
      ) : (
        <article>
          <h1 className="text-3xl font-semibold text-apple-black tracking-tight">
            {meta.title}
          </h1>
          <div className="mt-8 rounded-xl border border-apple-gray-100 bg-apple-gray-100/50 p-8 text-center">
            <p className="text-apple-gray-500">
              This article is coming soon. Check back later.
            </p>
          </div>
        </article>
      )}

      {/* FAQ */}
      {articleData?.faqs && <ArticleFAQ faqs={articleData.faqs} />}

      {/* Sources */}
      {articleData?.sources && <ArticleSources sources={articleData.sources} />}

      {/* Disclaimer */}
      <EditorialDisclaimer />

      {/* Author Box */}
      <AuthorBox locale={locale} />

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="mt-16 pt-8 border-t border-apple-gray-100">
          <h2 className="text-lg font-semibold text-apple-black">
            Related articles
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/learn/${r.slug}`}
                className="rounded-xl border border-apple-gray-100 p-4 hover:bg-apple-gray-100/50 transition"
              >
                <span className="text-xs bg-apple-gray-100 rounded-full px-2 py-0.5 text-apple-gray-500">
                  {r.tag}
                </span>
                <h3 className="text-sm font-semibold text-apple-black mt-2 line-clamp-2">
                  {r.title}
                </h3>
                <p className="text-xs text-apple-gray-500 mt-1">
                  {r.readTime}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
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
