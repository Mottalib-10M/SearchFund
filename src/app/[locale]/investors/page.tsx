export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/generated/prisma";
import { COUNTRIES, SECTORS } from "@/lib/utils";
import InvestorCard from "@/components/profiles/InvestorCard";
import type { InvestorWithUser } from "@/lib/types";

type MetaProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
  const { locale } = await params;
  const { buildMetadata } = await import("@/lib/meta-snippets");
  return buildMetadata("investors", locale);
}

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function parseString(val: string | string[] | undefined): string {
  if (Array.isArray(val)) return val[0] ?? "";
  return val ?? "";
}

const INVESTOR_TYPE_OPTIONS = [
  { value: "EX_SEARCHER", label: "Ex-searcher" },
  { value: "FAMILY_OFFICE", label: "Family Office" },
  { value: "INSTITUTIONAL", label: "Institutional" },
  { value: "ANGEL", label: "Angel" },
  { value: "ACCELERATOR", label: "Accelerator" },
];

const TICKET_SIZE_OPTIONS = [
  { value: "0-100", label: "Up to \u20AC100K", min: 0, max: 100 },
  { value: "100-250", label: "\u20AC100K \u2013 \u20AC250K", min: 100, max: 250 },
  { value: "250-500", label: "\u20AC250K \u2013 \u20AC500K", min: 250, max: 500 },
  { value: "500-1000", label: "\u20AC500K \u2013 \u20AC1M", min: 500, max: 1000 },
  { value: "1000-2000", label: "\u20AC1M \u2013 \u20AC2M", min: 1000, max: 2000 },
  { value: "2000-999999", label: "\u20AC2M+", min: 2000, max: 999999 },
];

export default async function InvestorsPage({ searchParams }: PageProps) {
  const params = await searchParams;

  const search = parseString(params.search);
  const country = parseString(params.country);
  const sector = parseString(params.sector);
  const investorType = parseString(params.investorType);
  const ticketSize = parseString(params.ticketSize);
  const page = Math.max(1, parseInt(parseString(params.page) || "1", 10));
  const perPage = 18;

  // Build Prisma where clause
  const where: Prisma.InvestorProfileWhereInput = {
    isPublic: true,
  };

  if (search) {
    where.OR = [
      { headline: { contains: search, mode: "insensitive" } },
      { investmentThesis: { contains: search, mode: "insensitive" } },
      { firmName: { contains: search, mode: "insensitive" } },
      { user: { name: { contains: search, mode: "insensitive" } } },
    ];
  }

  if (country) {
    where.targetCountries = { has: country };
  }

  if (sector) {
    where.targetSectors = { has: sector };
  }

  if (investorType) {
    where.investorType = investorType as Prisma.EnumInvestorTypeFilter;
  }

  if (ticketSize) {
    const range = TICKET_SIZE_OPTIONS.find((r) => r.value === ticketSize);
    if (range) {
      where.AND = [
        ...(Array.isArray(where.AND) ? where.AND : []),
        {
          OR: [
            {
              ticketSizeMin: { lte: range.max },
              ticketSizeMax: { gte: range.min },
            },
          ],
        },
      ];
    }
  }

  let investors: InvestorWithUser[] = [];
  let total = 0;
  let error = false;

  try {
    [investors, total] = await Promise.all([
      prisma.investorProfile.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
              country: true,
              city: true,
              verificationStatus: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * perPage,
        take: perPage,
      }),
      prisma.investorProfile.count({ where }),
    ]);
  } catch {
    error = true;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        Search Fund Investors
      </h1>
      <p className="text-apple-gray-500 mt-2">
        {total} {total === 1 ? "investor" : "investors"} worldwide
      </p>

      {/* Filter bar */}
      <form className="mt-8 flex flex-wrap items-center gap-3">
        {/* Search input */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-apple-gray-500" />
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search by name, firm, thesis..."
            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-apple-gray-300 bg-white text-apple-black placeholder:text-apple-gray-500 focus:border-apple-accent focus:ring-1 focus:ring-apple-accent"
          />
        </div>

        {/* Country select */}
        <select
          name="country"
          defaultValue={country}
          className="text-sm rounded-lg border border-apple-gray-300 bg-white text-apple-black py-2 px-3 focus:border-apple-accent focus:ring-1 focus:ring-apple-accent"
        >
          <option value="">All countries</option>
          {Object.entries(COUNTRIES).map(([code, c]) => (
            <option key={code} value={code}>
              {c.flag} {c.name}
            </option>
          ))}
        </select>

        {/* Sector select */}
        <select
          name="sector"
          defaultValue={sector}
          className="text-sm rounded-lg border border-apple-gray-300 bg-white text-apple-black py-2 px-3 focus:border-apple-accent focus:ring-1 focus:ring-apple-accent"
        >
          <option value="">All sectors</option>
          {SECTORS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* Investor type select */}
        <select
          name="investorType"
          defaultValue={investorType}
          className="text-sm rounded-lg border border-apple-gray-300 bg-white text-apple-black py-2 px-3 focus:border-apple-accent focus:ring-1 focus:ring-apple-accent"
        >
          <option value="">All types</option>
          {INVESTOR_TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Ticket size select */}
        <select
          name="ticketSize"
          defaultValue={ticketSize}
          className="text-sm rounded-lg border border-apple-gray-300 bg-white text-apple-black py-2 px-3 focus:border-apple-accent focus:ring-1 focus:ring-apple-accent"
        >
          <option value="">Any ticket size</option>
          {TICKET_SIZE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-apple-accent text-white text-sm font-medium rounded-lg px-4 py-2 hover:bg-apple-accent-hover transition-colors"
        >
          Search
        </button>

        {(search || country || sector || investorType || ticketSize) && (
          <Link
            href="/investors"
            className="text-sm text-apple-accent hover:underline"
          >
            Clear filters
          </Link>
        )}
      </form>

      {/* Error state */}
      {error && (
        <div className="mt-16 flex flex-col items-center text-center">
          <p className="text-apple-gray-700 text-sm">
            Unable to load investors. Please try again later.
          </p>
        </div>
      )}

      {/* Empty state */}
      {!error && investors.length === 0 && (
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-gray-100">
            <Search className="h-5 w-5 text-apple-gray-500" />
          </div>
          <p className="mt-4 text-lg font-semibold text-apple-black">
            No investors match your filters
          </p>
          <p className="mt-1 text-sm text-apple-gray-500">
            Try adjusting your search or filters to find what you&apos;re looking for.
          </p>
          <Link
            href="/investors"
            className="mt-4 text-sm font-medium text-apple-accent hover:underline"
          >
            Clear all filters
          </Link>
        </div>
      )}

      {/* Grid */}
      {!error && investors.length > 0 && (
        <>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investors.map((investor) => (
              <InvestorCard key={investor.id} investor={investor} />
            ))}
          </div>

          {/* Pagination */}
          {(() => {
            const totalPages = Math.ceil(total / perPage);
            if (totalPages <= 1) return null;
            const buildUrl = (p: number) => {
              const sp = new URLSearchParams();
              if (search) sp.set("search", search);
              if (country) sp.set("country", country);
              if (sector) sp.set("sector", sector);
              if (investorType) sp.set("investorType", investorType);
              if (ticketSize) sp.set("ticketSize", ticketSize);
              sp.set("page", String(p));
              return `/investors?${sp.toString()}`;
            };
            return (
              <div className="flex items-center justify-center gap-2 mt-10">
                {page > 1 && (
                  <Link href={buildUrl(page - 1)} className="px-3 py-2 text-sm rounded-lg border border-apple-gray-300 text-apple-gray-700 hover:bg-apple-gray-100">
                    Previous
                  </Link>
                )}
                <span className="text-sm text-apple-gray-500">
                  Page {page} of {totalPages}
                </span>
                {page < totalPages && (
                  <Link href={buildUrl(page + 1)} className="px-3 py-2 text-sm rounded-lg border border-apple-gray-300 text-apple-gray-700 hover:bg-apple-gray-100">
                    Next
                  </Link>
                )}
              </div>
            );
          })()}
        </>
      )}
    </div>
  );
}
