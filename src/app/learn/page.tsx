import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn about ETA — SearchFundMarket",
  description:
    "Guides, reports, and resources on Entrepreneurship Through Acquisition in Europe.",
};

const articles = [
  {
    title: "What is a Search Fund? Complete Guide",
    slug: "getting-started",
    description:
      "Everything you need to know about the search fund model, from fundraising to acquisition to operations.",
    readTime: "12 min read",
    tag: "Guide",
  },
  {
    title: "ETA in France: How to Acquire a Business",
    slug: "eta-france",
    description:
      "A comprehensive guide to acquiring a business in France, covering legal structures, due diligence, and financing.",
    readTime: "15 min read",
    tag: "Guide",
  },
  {
    title: "ETA in Germany: Complete Guide",
    slug: "eta-germany",
    description:
      "Navigate the German Mittelstand: how to find, acquire, and operate SMEs in Europe's largest economy.",
    readTime: "14 min read",
    tag: "Guide",
  },
  {
    title: "How to Find Search Fund Investors",
    slug: "finding-investors",
    description:
      "Strategies for connecting with investors who back search fund entrepreneurs.",
    readTime: "10 min read",
    tag: "Guide",
  },
  {
    title: "Search Fund Returns & Performance Data",
    slug: "search-fund-returns",
    description:
      "Analysis of search fund performance data, IRR benchmarks, and success factors.",
    readTime: "8 min read",
    tag: "Data",
  },
  {
    title: "ETA Due Diligence Checklist",
    slug: "due-diligence-checklist",
    description:
      "A practical checklist covering financial, legal, operational, and commercial due diligence.",
    readTime: "11 min read",
    tag: "Checklist",
  },
];

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

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
}
