import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allArticles, articlesMeta, articleComponents } from "../_articles/article-registry";

// Pre-render all article pages as static HTML at build time (SSG)
export function generateStaticParams() {
  return allArticles.map((a) => ({ articleSlug: a.slug }));
}

type Props = {
  params: Promise<{ articleSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { articleSlug } = await params;
  const article = articlesMeta[articleSlug];

  if (!article) return { title: "Article not found" };

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.ogTitle,
      description: article.ogDescription,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { articleSlug } = await params;
  const meta = articlesMeta[articleSlug];

  if (!meta) notFound();

  const ArticleComponent = articleComponents[articleSlug];

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Back link */}
      <Link
        href="/learn"
        className="text-apple-accent text-sm hover:underline inline-block mb-8"
      >
        &larr; Back to Learn
      </Link>

      {ArticleComponent ? <ArticleComponent /> : (
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
