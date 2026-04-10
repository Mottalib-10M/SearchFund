import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categoryMeta,
  categoryBySlug,
  categorySlugMap,
  allArticles,
} from "../../_articles/article-registry";

// Pre-render all category pages at build time (SSG)
export function generateStaticParams() {
  return categoryMeta.map((c) => ({ categorySlug: c.slug }));
}

type Props = {
  params: Promise<{ categorySlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const cat = categoryBySlug[categorySlug];

  if (!cat) return { title: "Category not found" };

  return {
    title: `${cat.name} — ETA Guides & Articles | SearchFundMarket`,
    description: cat.ogDescription,
    openGraph: {
      title: `${cat.name} — ETA Guides & Articles`,
      description: cat.ogDescription,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categorySlug } = await params;
  const cat = categoryBySlug[categorySlug];

  if (!cat) notFound();

  const articles = allArticles.filter(
    (a) => categorySlugMap[a.category] === categorySlug,
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-apple-gray-500 mb-8">
        <Link href="/learn" className="hover:text-apple-accent">
          Learn
        </Link>
        <span className="mx-2">/</span>
        <span className="text-apple-black">{cat.name}</span>
      </nav>

      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        {cat.name}
      </h1>
      <p className="text-apple-gray-500 mt-2 max-w-2xl">{cat.description}</p>
      <p className="text-sm text-apple-gray-400 mt-1">
        {articles.length} {articles.length === 1 ? "article" : "articles"}
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/learn/${article.slug}`}
            className="bg-white rounded-xl p-6 hover:bg-apple-gray-100/50 transition border border-apple-gray-100"
          >
            <span className="text-xs bg-apple-gray-100 rounded-full px-2.5 py-0.5 text-apple-gray-500">
              {article.tag}
            </span>
            <h3 className="text-lg font-semibold text-apple-black mt-3">
              {article.title}
            </h3>
            <p className="text-sm text-apple-gray-700 mt-2 line-clamp-3">
              {article.description}
            </p>
            <p className="text-xs text-apple-gray-500 mt-3">
              {article.readTime}
            </p>
          </Link>
        ))}
      </div>

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
