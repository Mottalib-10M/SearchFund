export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/generated/prisma";
import { EBITDA_RANGES, REVENUE_RANGES } from "@/lib/utils";
import ListingCard from "@/components/listings/ListingCard";
import ListingFilters from "@/components/listings/ListingFilters";

export const metadata: Metadata = {
  title: "Acquisition Opportunities \u2014 TheSearchFund",
  description:
    "Browse businesses for sale across Europe. Filter by sector, country, EBITDA, and revenue to find your next acquisition.",
};

const PAGE_SIZE = 20;

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function parseString(val: string | string[] | undefined): string {
  if (Array.isArray(val)) return val[0] ?? "";
  return val ?? "";
}

function parseNumber(val: string | string[] | undefined): number | undefined {
  const s = parseString(val);
  const n = Number(s);
  return Number.isNaN(n) ? undefined : n;
}

export default async function ListingsPage({ searchParams }: PageProps) {
  const params = await searchParams;

  // Parse filters
  const search = parseString(params.search);
  const countries = parseString(params.country)
    .split(",")
    .filter(Boolean);
  const sectors = parseString(params.sector)
    .split(",")
    .filter(Boolean);
  const sort = parseString(params.sort);
  const page = Math.max(1, parseNumber(params.page) ?? 1);

  // Parse EBITDA range
  const ebitdaParam = parseString(params.ebitda);
  let ebitdaMin: number | undefined;
  let ebitdaMax: number | undefined;
  if (ebitdaParam) {
    const range = EBITDA_RANGES.find(
      (r) => `${r.min}-${r.max}` === ebitdaParam
    );
    if (range) {
      ebitdaMin = range.min;
      ebitdaMax = range.max;
    }
  }

  // Parse Revenue range
  const revenueParam = parseString(params.revenue);
  let revenueMin: number | undefined;
  let revenueMax: number | undefined;
  if (revenueParam) {
    const range = REVENUE_RANGES.find(
      (r) => `${r.min}-${r.max}` === revenueParam
    );
    if (range) {
      revenueMin = range.min;
      revenueMax = range.max;
    }
  }

  // Build Prisma where clause
  const where: Prisma.ListingWhereInput = {
    status: "ACTIVE",
  };

  if (search) {
    where.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { summary: { contains: search, mode: "insensitive" } },
      { sector: { contains: search, mode: "insensitive" } },
      { country: { contains: search, mode: "insensitive" } },
    ];
  }

  if (countries.length > 0) {
    where.country = { in: countries };
  }

  if (sectors.length > 0) {
    where.sector = { in: sectors };
  }

  if (ebitdaMin !== undefined || ebitdaMax !== undefined) {
    where.ebitda = {};
    if (ebitdaMin !== undefined) where.ebitda.gte = ebitdaMin;
    if (ebitdaMax !== undefined) where.ebitda.lte = ebitdaMax;
  }

  if (revenueMin !== undefined || revenueMax !== undefined) {
    where.revenue = {};
    if (revenueMin !== undefined) where.revenue.gte = revenueMin;
    if (revenueMax !== undefined) where.revenue.lte = revenueMax;
  }

  // Build order clause
  let orderBy: Prisma.ListingOrderByWithRelationInput;
  switch (sort) {
    case "ebitda_desc":
      orderBy = { ebitda: "desc" };
      break;
    case "ebitda_asc":
      orderBy = { ebitda: "asc" };
      break;
    case "revenue_desc":
      orderBy = { revenue: "desc" };
      break;
    case "price_asc":
      orderBy = { askingPrice: "asc" };
      break;
    default:
      orderBy = { publishedAt: "desc" };
  }

  // Execute query
  let listings: Awaited<ReturnType<typeof prisma.listing.findMany>> = [];
  let total = 0;
  let error = false;

  try {
    [listings, total] = await Promise.all([
      prisma.listing.findMany({
        where,
        orderBy,
        skip: (page - 1) * PAGE_SIZE,
        take: PAGE_SIZE,
      }),
      prisma.listing.count({ where }),
    ]);
  } catch {
    error = true;
  }

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  // Build pagination URL helper
  function pageUrl(p: number): string {
    const sp = new URLSearchParams();
    if (search) sp.set("search", search);
    if (countries.length) sp.set("country", countries.join(","));
    if (sectors.length) sp.set("sector", sectors.join(","));
    if (ebitdaParam) sp.set("ebitda", ebitdaParam);
    if (revenueParam) sp.set("revenue", revenueParam);
    if (sort) sp.set("sort", sort);
    if (p > 1) sp.set("page", String(p));
    const qs = sp.toString();
    return `/listings${qs ? `?${qs}` : ""}`;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        Acquisition opportunities
      </h1>
      <p className="text-apple-gray-500 mt-2">
        {total} {total === 1 ? "business" : "businesses"} for sale across Europe
      </p>

      {/* Filters */}
      <div className="mt-8">
        <ListingFilters />
      </div>

      {/* Error state */}
      {error && (
        <div className="mt-16 flex flex-col items-center text-center">
          <p className="text-apple-gray-700 text-sm">
            Unable to load listings. Please try again later.
          </p>
        </div>
      )}

      {/* Empty state */}
      {!error && listings.length === 0 && (
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-gray-100">
            <Search className="h-5 w-5 text-apple-gray-500" />
          </div>
          <p className="mt-4 text-lg font-semibold text-apple-black">
            No listings match your filters
          </p>
          <p className="mt-1 text-sm text-apple-gray-500">
            Try adjusting your search or filters to find what you&apos;re
            looking for.
          </p>
          <Link
            href="/listings"
            className="mt-4 text-sm font-medium text-apple-accent hover:underline"
          >
            Clear all filters
          </Link>
        </div>
      )}

      {/* Listings list */}
      {!error && listings.length > 0 && (
        <div className="mt-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {!error && totalPages > 1 && (
        <nav className="mt-10 flex items-center justify-center gap-4 text-sm">
          {page > 1 ? (
            <Link
              href={pageUrl(page - 1)}
              className="text-apple-accent hover:underline"
            >
              &larr; Previous
            </Link>
          ) : (
            <span className="text-apple-gray-300">&larr; Previous</span>
          )}
          <span className="text-apple-gray-700">
            Page {page} of {totalPages}
          </span>
          {page < totalPages ? (
            <Link
              href={pageUrl(page + 1)}
              className="text-apple-accent hover:underline"
            >
              Next &rarr;
            </Link>
          ) : (
            <span className="text-apple-gray-300">Next &rarr;</span>
          )}
        </nav>
      )}
    </div>
  );
}
