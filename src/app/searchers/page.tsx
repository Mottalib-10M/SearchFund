export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/generated/prisma";
import { COUNTRIES, SECTORS } from "@/lib/utils";
import SearcherCard from "@/components/profiles/SearcherCard";
import type { SearcherWithUser } from "@/lib/types";

export const metadata: Metadata = {
  title: "Search Fund Entrepreneurs — Find Searchers in Europe",
  description:
    "Browse search fund entrepreneurs across Europe. Filter by country, sector, and search type. Connect with qualified acquirers looking for their next acquisition.",
  openGraph: {
    title: "Meet Search Fund Entrepreneurs Looking to Acquire in Europe",
    description:
      "Discover ETA entrepreneurs actively searching for businesses to acquire. Filter by sector, country, and search model.",
  },
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function parseString(val: string | string[] | undefined): string {
  if (Array.isArray(val)) return val[0] ?? "";
  return val ?? "";
}

const SEARCH_STATUS_OPTIONS = [
  { value: "PREPARING", label: "Preparing" },
  { value: "RAISING_CAPITAL", label: "Raising Capital" },
  { value: "ACTIVELY_SEARCHING", label: "Actively Searching" },
  { value: "LOI_SIGNED", label: "LOI Signed" },
  { value: "ACQUIRED", label: "Acquired" },
  { value: "OPERATING", label: "Operating" },
  { value: "EXITED", label: "Exited" },
];

const SEARCH_TYPE_OPTIONS = [
  { value: "TRADITIONAL", label: "Traditional" },
  { value: "SELF_FUNDED", label: "Self-funded" },
  { value: "ACCELERATOR", label: "Accelerator" },
  { value: "INDEPENDENT_SPONSOR", label: "Independent Sponsor" },
];

export default async function SearchersPage({ searchParams }: PageProps) {
  const params = await searchParams;

  const search = parseString(params.search);
  const country = parseString(params.country);
  const sector = parseString(params.sector);
  const searchStatus = parseString(params.searchStatus);
  const searchType = parseString(params.searchType);
  const page = Math.max(1, parseInt(parseString(params.page) || "1", 10));
  const perPage = 18;

  // Build Prisma where clause
  const where: Prisma.SearcherProfileWhereInput = {
    isPublic: true,
  };

  if (search) {
    where.OR = [
      { headline: { contains: search, mode: "insensitive" } },
      { thesisDescription: { contains: search, mode: "insensitive" } },
      { mbaSchool: { contains: search, mode: "insensitive" } },
      { user: { name: { contains: search, mode: "insensitive" } } },
      { user: { bio: { contains: search, mode: "insensitive" } } },
    ];
  }

  if (country) {
    where.targetCountries = { has: country };
  }

  if (sector) {
    where.targetSectors = { has: sector };
  }

  if (searchStatus) {
    where.searchStatus = searchStatus as Prisma.EnumSearchStatusFilter;
  }

  if (searchType) {
    where.searchType = searchType as Prisma.EnumSearchTypeFilter;
  }

  let searchers: SearcherWithUser[] = [];
  let total = 0;
  let error = false;

  try {
    [searchers, total] = await Promise.all([
      prisma.searcherProfile.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
              country: true,
              city: true,
              bio: true,
              verificationStatus: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * perPage,
        take: perPage,
      }),
      prisma.searcherProfile.count({ where }),
    ]);
  } catch {
    error = true;
  }

  // Build filter URL helper
  function filterUrl(overrides: Record<string, string>): string {
    const sp = new URLSearchParams();
    const merged = { search, country, sector, searchStatus, searchType, ...overrides };
    for (const [key, val] of Object.entries(merged)) {
      if (val) sp.set(key, val);
    }
    const qs = sp.toString();
    return `/searchers${qs ? `?${qs}` : ""}`;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        Search Fund Entrepreneurs
      </h1>
      <p className="text-apple-gray-500 mt-2">
        {total} {total === 1 ? "searcher" : "searchers"} across Europe
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
            placeholder="Search by name, school, thesis..."
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

        {/* Search status select */}
        <select
          name="searchStatus"
          defaultValue={searchStatus}
          className="text-sm rounded-lg border border-apple-gray-300 bg-white text-apple-black py-2 px-3 focus:border-apple-accent focus:ring-1 focus:ring-apple-accent"
        >
          <option value="">All statuses</option>
          {SEARCH_STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Search type select */}
        <select
          name="searchType"
          defaultValue={searchType}
          className="text-sm rounded-lg border border-apple-gray-300 bg-white text-apple-black py-2 px-3 focus:border-apple-accent focus:ring-1 focus:ring-apple-accent"
        >
          <option value="">All types</option>
          {SEARCH_TYPE_OPTIONS.map((opt) => (
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

        {(search || country || sector || searchStatus || searchType) && (
          <Link
            href="/searchers"
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
            Unable to load searchers. Please try again later.
          </p>
        </div>
      )}

      {/* Empty state */}
      {!error && searchers.length === 0 && (
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-gray-100">
            <Search className="h-5 w-5 text-apple-gray-500" />
          </div>
          <p className="mt-4 text-lg font-semibold text-apple-black">
            No searchers match your filters
          </p>
          <p className="mt-1 text-sm text-apple-gray-500">
            Try adjusting your search or filters to find what you&apos;re looking for.
          </p>
          <Link
            href="/searchers"
            className="mt-4 text-sm font-medium text-apple-accent hover:underline"
          >
            Clear all filters
          </Link>
        </div>
      )}

      {/* Grid */}
      {!error && searchers.length > 0 && (
        <>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchers.map((searcher) => (
              <SearcherCard key={searcher.id} searcher={searcher} />
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
              if (searchStatus) sp.set("searchStatus", searchStatus);
              if (searchType) sp.set("searchType", searchType);
              sp.set("page", String(p));
              return `/searchers?${sp.toString()}`;
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
