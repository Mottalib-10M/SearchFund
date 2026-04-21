import type { Metadata } from "next";
import Link from "next/link";
import { Search, Users, Handshake, ArrowRight, TrendingUp, Store, BookOpen } from "lucide-react";
import AnimatedHero from "@/components/home/AnimatedHero";
import { allArticles, categoryMeta } from "./learn/_articles/article-registry";
import { buildMetadata } from "@/lib/meta-snippets";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata("home", locale);
}

// Compute real stats from static article data
const guidesCount = allArticles.length;
const topicsCount = categoryMeta.length;
const countriesCovered = 14; // US, UK, FR, DE, ES, IT, SE, NO, DK, FI, NL, BE, LU, CH

export default function Home() {
  // Get the 3 most recently added articles (last 3 in array)
  const latestArticles = allArticles.slice(-3).reverse();

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
          Whether you&apos;re searching, investing, or selling — SearchFundMarket helps you learn and connect.
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
              From search fund basics to deal execution, due diligence, and post-acquisition operations — everything you need to succeed as a search fund entrepreneur.
            </p>
            <Link
              href="/learn/getting-started"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-apple-searcher text-white text-sm font-medium px-6 py-2.5 hover:opacity-90 transition-opacity"
            >
              Start learning
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
              Learn why search funds deliver exceptional returns, how to evaluate searchers, and what makes a great ETA investment in the European market.
            </p>
            <Link
              href="/learn/why-invest-in-search-funds"
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
              href="/learn/eta-europe"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-apple-seller text-white text-sm font-medium px-6 py-2.5 hover:opacity-90 transition-opacity"
            >
              Learn about ETA
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
                Explore our comprehensive guides on search funds, deal
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
                Our curated marketplace for European SME acquisitions is
                launching in 2026. Join the waitlist to get early access.
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

      {/* ── NUMBERS ── */}
      <section className="py-16 text-center border-t border-apple-gray-100">
        <div className="flex justify-center gap-16 flex-wrap">
          <div>
            <p className="text-4xl font-semibold text-apple-black financial">
              {guidesCount}
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">in-depth guides</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-apple-black financial">
              {countriesCovered}
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">countries covered</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-apple-black financial">
              {topicsCount}
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">ETA topics</p>
          </div>
        </div>
      </section>
    </div>
  );
}
