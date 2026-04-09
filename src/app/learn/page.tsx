import type { Metadata } from "next";
import Link from "next/link";
import { allArticles, categories } from "./_articles/article-registry";

export const metadata: Metadata = {
  title: "Learn About ETA — Guides & Resources for Search Funds",
  description:
    "Comprehensive guides on Entrepreneurship Through Acquisition: search fund models, returns data, due diligence, and European market analysis. Start learning.",
  openGraph: {
    title: "Learn About ETA — Guides, Data & Resources for Search Funds",
    description:
      "From Stanford studies to INSEAD research — explore the definitive collection of guides and resources on Entrepreneurship Through Acquisition.",
  },
};

export default function LearnPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        Learn about ETA
      </h1>
      <p className="text-apple-gray-500 mt-2 max-w-2xl">
        Guides, reports, and resources on Entrepreneurship Through Acquisition
        in Europe
      </p>

      {categories.map((category) => {
        const articles = allArticles.filter((a) => a.category === category);
        if (articles.length === 0) return null;

        return (
          <section key={category} className="mt-12">
            <h2 className="text-xl font-semibold text-apple-black tracking-tight">
              {category}
            </h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </section>
        );
      })}
    </div>
  );
}
