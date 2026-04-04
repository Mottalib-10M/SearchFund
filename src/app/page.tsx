export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Link from "next/link";
import { Search, Users, Handshake, ArrowRight } from "lucide-react";
import { COUNTRIES, formatCurrency, timeAgo } from "@/lib/utils";
import { prisma } from "@/lib/prisma";
import AnimatedHero from "@/components/home/AnimatedHero";

export const metadata: Metadata = {
  title: "SearchFundMarket — Acquisition Marketplace for Search Funds",
  description:
    "The marketplace connecting search fund entrepreneurs, investors, and business sellers across Europe. Browse acquisition opportunities, find investors, connect with searchers.",
};

export default async function Home() {
  let recentListings: {
    id: string;
    slug: string;
    title: string;
    sector: string;
    country: string;
    revenue: number | null;
    ebitda: number | null;
    askingMultiple: number | null;
    summary: string | null;
    publishedAt: Date | null;
  }[] = [];

  try {
    recentListings = await prisma.listing.findMany({
      where: { status: "ACTIVE" },
      orderBy: { publishedAt: "desc" },
      take: 6,
      select: {
        id: true,
        slug: true,
        title: true,
        sector: true,
        country: true,
        revenue: true,
        ebitda: true,
        askingMultiple: true,
        summary: true,
        publishedAt: true,
      },
    });
  } catch {
    // DB not available — show empty
  }
  return (
    <div>
      {/* ── HERO ── */}
      <AnimatedHero />

      {/* ── RECENTLY LISTED ── */}
      {recentListings.length > 0 && (
        <section className="py-20 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-apple-black">
            Recently listed
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {recentListings.map((listing) => (
              <Link
                key={listing.id}
                href={`/listings/${listing.slug}`}
                className="bg-white rounded-xl p-6 hover:bg-apple-gray-100/50 transition-colors border border-apple-gray-300/40"
              >
                <span className="text-xs bg-apple-gray-100 text-apple-gray-700 rounded-full px-2.5 py-0.5">
                  {listing.sector}
                </span>
                <h3 className="text-base font-semibold text-apple-black mt-2">
                  {listing.title}
                </h3>
                <p className="text-sm text-apple-gray-700 mt-1 financial">
                  {listing.revenue != null && <>Revenue {formatCurrency(listing.revenue)}</>}
                  {listing.revenue != null && listing.ebitda != null && <> &middot; </>}
                  {listing.ebitda != null && <>EBITDA {formatCurrency(listing.ebitda)}</>}
                  {listing.askingMultiple != null && <> &middot; {listing.askingMultiple.toFixed(1)}x</>}
                </p>
                {listing.summary && (
                  <p className="text-sm text-apple-gray-500 mt-1 line-clamp-2">
                    {listing.summary}
                  </p>
                )}
                <p className="text-xs text-apple-gray-500 mt-3">
                  {COUNTRIES[listing.country]?.flag}{" "}
                  {COUNTRIES[listing.country]?.name}
                  {listing.publishedAt && <> &middot; Listed {timeAgo(listing.publishedAt)}</>}
                </p>
              </Link>
            ))}
          </div>

          <Link
            href="/listings"
            className="text-apple-accent text-sm font-medium hover:underline mt-8 block"
          >
            View all listings &rarr;
          </Link>
        </section>
      )}

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-apple-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-apple-black">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div>
              <Search
                size={32}
                strokeWidth={1.5}
                className="w-8 h-8 text-apple-accent mx-auto"
              />
              <h3 className="text-lg font-semibold text-apple-black mt-4">
                List or browse
              </h3>
              <p className="text-sm text-apple-gray-700 mt-2">
                Sellers list their business with key financials. Searchers and
                investors browse opportunities.
              </p>
            </div>
            <div>
              <Users
                size={32}
                strokeWidth={1.5}
                className="w-8 h-8 text-apple-accent mx-auto"
              />
              <h3 className="text-lg font-semibold text-apple-black mt-4">
                Connect directly
              </h3>
              <p className="text-sm text-apple-gray-700 mt-2">
                Reach out to sellers, searchers, or investors. No middleman, no
                broker fees.
              </p>
            </div>
            <div>
              <Handshake
                size={32}
                strokeWidth={1.5}
                className="w-8 h-8 text-apple-accent mx-auto"
              />
              <h3 className="text-lg font-semibold text-apple-black mt-4">
                Close the deal
              </h3>
              <p className="text-sm text-apple-gray-700 mt-2">
                Use your own advisors and structure the deal. We facilitate the
                introduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR EACH USER ── */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        {/* For Searchers */}
        <div className="py-12 border-b border-apple-gray-100">
          <p className="text-xs uppercase tracking-wider text-apple-gray-500">
            For Searchers
          </p>
          <h3 className="text-2xl font-semibold text-apple-black mt-2">
            Browse vetted acquisition opportunities
          </h3>
          <p className="text-apple-gray-700 mt-3 max-w-lg">
            Browse acquisition opportunities across Europe. Filter by sector,
            country, EBITDA range. Connect with sellers directly and find your
            next company to operate.
          </p>
          <Link
            href="/auth/signup"
            className="text-apple-accent text-sm font-medium mt-4 inline-flex items-center gap-1 hover:underline"
          >
            Join as Searcher
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        {/* For Investors */}
        <div className="py-12 border-b border-apple-gray-100">
          <p className="text-xs uppercase tracking-wider text-apple-gray-500">
            For Investors
          </p>
          <h3 className="text-2xl font-semibold text-apple-black mt-2">
            Discover top searchers to back
          </h3>
          <p className="text-apple-gray-700 mt-3 max-w-lg">
            Find search fund entrepreneurs from leading MBA programs. Review
            their acquisition thesis, track record, and co-invest alongside
            other experienced investors.
          </p>
          <Link
            href="/auth/signup"
            className="text-apple-accent text-sm font-medium mt-4 inline-flex items-center gap-1 hover:underline"
          >
            Join as Investor
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        {/* For Sellers */}
        <div className="py-12">
          <p className="text-xs uppercase tracking-wider text-apple-gray-500">
            For Sellers
          </p>
          <h3 className="text-2xl font-semibold text-apple-black mt-2">
            Find the right buyer for your business
          </h3>
          <p className="text-apple-gray-700 mt-3 max-w-lg">
            List your business confidentially. Reach qualified buyers who
            understand your industry and want to preserve your legacy. No broker
            commissions.
          </p>
          <Link
            href="/auth/signup"
            className="text-apple-accent text-sm font-medium mt-4 inline-flex items-center gap-1 hover:underline"
          >
            Join as Seller
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* ── NUMBERS ── */}
      <section className="py-16 text-center border-t border-apple-gray-100">
        <div className="flex justify-center gap-16 flex-wrap">
          <div>
            <p className="text-4xl font-semibold text-apple-black financial">
              247
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">listings</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-apple-black financial">
              18
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">countries</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-apple-black financial">
              &euro;2.1B
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">
              total deal value
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
