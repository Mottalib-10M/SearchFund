import type { Metadata } from "next";
import Link from "next/link";
import { Search, Users, Handshake, ArrowRight } from "lucide-react";
import { COUNTRIES } from "@/lib/utils";

export const metadata: Metadata = {
  title: "TheSearchFund — Acquisition Marketplace for Search Funds",
  description:
    "The marketplace connecting search fund entrepreneurs, investors, and business sellers across Europe. Browse acquisition opportunities, find investors, connect with searchers.",
};

const mockListings = [
  {
    id: "1",
    title: "B2B Industrial Cleaning Services",
    sector: "B2B Services",
    country: "FR",
    revenue: 2100,
    ebitda: 420,
    multiple: 4.5,
    summary:
      "Established commercial cleaning company serving industrial clients across Ile-de-France with long-term contracts and recurring revenue.",
    daysAgo: 2,
  },
  {
    id: "2",
    title: "Healthcare Staffing Agency",
    sector: "Healthcare",
    country: "DE",
    revenue: 3800,
    ebitda: 680,
    multiple: 5.2,
    summary:
      "Leading temporary staffing agency for nurses and medical professionals in Bavaria. Strong relationships with 40+ hospitals.",
    daysAgo: 4,
  },
  {
    id: "3",
    title: "SaaS Platform for Logistics",
    sector: "Technology",
    country: "GB",
    revenue: 1500,
    ebitda: 380,
    multiple: 7.1,
    summary:
      "Cloud-based fleet management and route optimization software with 200+ SME customers and 95% annual retention.",
    daysAgo: 5,
  },
  {
    id: "4",
    title: "Specialty Food Distribution",
    sector: "Food & Beverage",
    country: "ES",
    revenue: 4200,
    ebitda: 520,
    multiple: 4.8,
    summary:
      "Regional distributor of organic and specialty food products to restaurants and retailers across Catalonia and Valencia.",
    daysAgo: 7,
  },
  {
    id: "5",
    title: "Industrial Equipment Maintenance",
    sector: "Manufacturing",
    country: "NL",
    revenue: 2800,
    ebitda: 450,
    multiple: 5.0,
    summary:
      "Preventive maintenance and repair services for manufacturing equipment. Contracted with 60+ industrial plants in Randstad.",
    daysAgo: 9,
  },
  {
    id: "6",
    title: "Private Tutoring Network",
    sector: "Education",
    country: "FR",
    revenue: 1200,
    ebitda: 280,
    multiple: 6.2,
    summary:
      "Network of 150+ qualified tutors offering in-home and online tutoring across major French cities. Asset-light model.",
    daysAgo: 12,
  },
];

const quickLinks = [
  { label: "B2B Services", href: "/listings?sector=B2B+Services" },
  { label: "Healthcare", href: "/listings?sector=Healthcare" },
  { label: "Manufacturing", href: "/listings?sector=Manufacturing" },
  { label: "France", href: "/listings?country=FR" },
  { label: "Germany", href: "/listings?country=DE" },
  { label: "UK", href: "/listings?country=GB" },
];

function formatRevenue(amount: number): string {
  if (amount >= 1000) {
    return `€${(amount / 1000).toFixed(1)}M`;
  }
  return `€${amount}K`;
}

function formatEbitda(amount: number): string {
  return `€${amount}K`;
}

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="py-24 md:py-32 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-semibold text-apple-black tracking-tight">
          Find your next acquisition.
        </h1>
        <p className="text-xl text-apple-gray-700 mt-6 max-w-2xl mx-auto">
          The marketplace connecting search fund entrepreneurs, investors, and
          business sellers across Europe.
        </p>

        {/* Search bar */}
        <div className="mt-10 max-w-xl mx-auto relative">
          <div className="relative">
            <Search
              size={20}
              strokeWidth={1.5}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-apple-gray-500"
            />
            <input
              type="text"
              placeholder="Search by sector, country, or keyword..."
              className="bg-apple-gray-100 rounded-full pl-12 pr-40 py-4 text-base w-full text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent/20 transition-shadow"
            />
            <Link
              href="/listings"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-apple-accent text-white rounded-full px-6 py-2.5 text-sm font-medium transition-colors hover:bg-apple-accent-hover"
            >
              Explore listings &rarr;
            </Link>
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-apple-accent hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── RECENTLY LISTED ── */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-apple-black">
          Recently listed
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {mockListings.map((listing) => (
            <Link
              key={listing.id}
              href={`/listings/${listing.id}`}
              className="bg-white rounded-xl p-6 hover:bg-apple-gray-100/50 transition-colors border border-apple-gray-300/40"
            >
              <span className="text-xs bg-apple-gray-100 text-apple-gray-700 rounded-full px-2.5 py-0.5">
                {listing.sector}
              </span>
              <h3 className="text-base font-semibold text-apple-black mt-2">
                {listing.title}
              </h3>
              <p className="text-sm text-apple-gray-700 mt-1 financial">
                Revenue {formatRevenue(listing.revenue)} &middot; EBITDA{" "}
                {formatEbitda(listing.ebitda)} &middot; {listing.multiple.toFixed(1)}x
              </p>
              <p className="text-sm text-apple-gray-500 mt-1 line-clamp-2">
                {listing.summary}
              </p>
              <p className="text-xs text-apple-gray-500 mt-3">
                {COUNTRIES[listing.country]?.flag}{" "}
                {COUNTRIES[listing.country]?.name} &middot; Listed{" "}
                {listing.daysAgo === 1
                  ? "1 day ago"
                  : `${listing.daysAgo} days ago`}
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
            href="/get-started?role=searcher"
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
            href="/get-started?role=investor"
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
            href="/get-started?role=seller"
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
