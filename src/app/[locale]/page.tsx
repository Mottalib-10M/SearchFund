import type { Metadata } from "next";
import Link from "next/link";
import { Search, Users, Handshake, ArrowRight, TrendingUp, Store, BookOpen } from "lucide-react";
import AnimatedHero from "@/components/home/AnimatedHero";
import { allArticles } from "./learn/_articles/article-registry";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "SearchFundMarket: Step-by-Step Guides to Master ETA",
    description:
      "62 free guides, financial calculators, and deal templates to master Entrepreneurship Through Acquisition. Start your search fund journey today, all free.",
    openGraph: {
      title: "SearchFundMarket: Step-by-Step Guides to Master ETA",
      description:
        "62 free guides, financial calculators, and deal templates to master Entrepreneurship Through Acquisition. Start your search fund journey today, all free.",
      type: "website",
    },
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: {
        en: `${BASE}/en`,
        fr: `${BASE}/fr`,
        es: `${BASE}/es`,
        it: `${BASE}/it`,
        pt: `${BASE}/pt`,
        "x-default": `${BASE}/en`,
      },
    },
  };
}

export default function Home() {
  // Get the 3 most recently modified articles
  const latestArticles = [...allArticles]
    .sort((a, b) => b.dateModified.localeCompare(a.dateModified) || b.datePublished.localeCompare(a.datePublished))
    .slice(0, 3);

  return (
    <div>
      {/* ── HERO ── */}
      <AnimatedHero />

      {/* ── FOR EACH USER ── */}
      <section className="py-10 md:py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-apple-black text-center">
          Built for every side of the deal
        </h2>
        <p className="text-apple-gray-500 text-center mt-3 max-w-xl mx-auto">
          Whether you&apos;re searching, investing, or selling - SearchFundMarket helps you learn and connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Searchers */}
          <div className="relative rounded-2xl border border-apple-gray-300/50 bg-white p-8 flex flex-col">
            <div className="w-11 h-11 rounded-xl bg-apple-searcher/10 flex items-center justify-center">
              <Search size={22} strokeWidth={1.5} className="text-apple-searcher" />
            </div>
            <p className="text-xs uppercase tracking-wider text-apple-searcher font-semibold mt-5">
              For Searchers
            </p>
            <h3 className="text-lg font-semibold text-apple-black mt-2 leading-snug">
              Learn how to find and acquire your first business
            </h3>
            <p className="text-sm text-apple-gray-700 mt-3 leading-relaxed flex-1">
              From search fund basics to deal execution, due diligence, and post-acquisition operations - everything you need to succeed as a search fund entrepreneur.
            </p>
            <Link
              href="/dashboard/journey"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-apple-searcher text-white text-sm font-medium px-6 py-2.5 hover:opacity-90 transition-opacity"
            >
              Start your journey
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>

          {/* Investors */}
          <div className="relative rounded-2xl border border-apple-gray-300/50 bg-white p-8 flex flex-col">
            <div className="w-11 h-11 rounded-xl bg-apple-investor/10 flex items-center justify-center">
              <TrendingUp size={22} strokeWidth={1.5} className="text-apple-investor" />
            </div>
            <p className="text-xs uppercase tracking-wider text-apple-investor font-semibold mt-5">
              For Investors
            </p>
            <h3 className="text-lg font-semibold text-apple-black mt-2 leading-snug">
              Understand the search fund asset class
            </h3>
            <p className="text-sm text-apple-gray-700 mt-3 leading-relaxed flex-1">
              Learn why search funds deliver exceptional returns, how to evaluate searchers, and what makes a great ETA investment.
            </p>
            <Link
              href="/learn"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-apple-investor text-white text-sm font-medium px-6 py-2.5 hover:opacity-90 transition-opacity"
            >
              Start learning
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>

          {/* Sellers */}
          <div className="relative rounded-2xl border border-apple-gray-300/50 bg-white p-8 flex flex-col">
            <div className="w-11 h-11 rounded-xl bg-apple-seller/10 flex items-center justify-center">
              <Store size={22} strokeWidth={1.5} className="text-apple-seller" />
            </div>
            <p className="text-xs uppercase tracking-wider text-apple-seller font-semibold mt-5">
              For Sellers
            </p>
            <h3 className="text-lg font-semibold text-apple-black mt-2 leading-snug">
              Discover how ETA works for business owners
            </h3>
            <p className="text-sm text-apple-gray-700 mt-3 leading-relaxed flex-1">
              Understand what search fund buyers look for, how deals are structured, and why selling to a searcher can be the best succession option for your business.
            </p>
            <Link
              href="/marketplace"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-apple-seller text-white text-sm font-medium px-6 py-2.5 hover:opacity-90 transition-opacity"
            >
              Browse listings
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-apple-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-apple-black">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div>
              <BookOpen
                size={32}
                strokeWidth={1.5}
                className="w-8 h-8 text-apple-accent mx-auto"
              />
              <h3 className="text-lg font-semibold text-apple-black mt-4">
                Learn the fundamentals
              </h3>
              <p className="text-sm text-apple-gray-700 mt-2">
                Explore our thorough guides on search funds, deal
                execution, fundraising, and post-acquisition operations.
              </p>
            </div>
            <div>
              <Users
                size={32}
                strokeWidth={1.5}
                className="w-8 h-8 text-apple-accent mx-auto"
              />
              <h3 className="text-lg font-semibold text-apple-black mt-4">
                Connect with the community
              </h3>
              <p className="text-sm text-apple-gray-700 mt-2">
                Join discussions with searchers, investors, and operators.
                Share experiences and learn from peers.
              </p>
            </div>
            <div>
              <Handshake
                size={32}
                strokeWidth={1.5}
                className="w-8 h-8 text-apple-accent mx-auto"
              />
              <h3 className="text-lg font-semibold text-apple-black mt-4">
                Find opportunities
              </h3>
              <p className="text-sm text-apple-gray-700 mt-2">
                Browse our curated marketplace of SME acquisition
                opportunities with verified financials and no broker fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST FROM THE LEARNING HUB ── */}
      <section className="py-10 md:py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-apple-black">
          Latest from the Learning Hub
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {latestArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/learn/${article.slug}`}
              className="bg-white rounded-xl p-6 hover:bg-apple-gray-100/50 transition-colors border border-apple-gray-300/40"
            >
              <span className="text-xs bg-apple-gray-100 text-apple-gray-700 rounded-full px-2.5 py-0.5">
                {article.tag}
              </span>
              <h3 className="text-base font-semibold text-apple-black mt-2">
                {article.title}
              </h3>
              <p className="text-sm text-apple-gray-500 mt-1 line-clamp-2">
                {article.description}
              </p>
              <p className="text-xs text-apple-gray-500 mt-3">
                {article.readTime}
              </p>
            </Link>
          ))}
        </div>

        <Link
          href="/learn"
          className="text-apple-accent text-sm font-medium hover:underline mt-8 block"
        >
          Browse all guides &rarr;
        </Link>
      </section>
    </div>
  );
}
