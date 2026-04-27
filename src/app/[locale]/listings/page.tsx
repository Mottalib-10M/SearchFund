export const dynamic = "force-dynamic";

import { Suspense } from "react";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { buildMetadata } from "@/lib/meta-snippets";
import { getTranslations } from "next-intl/server";
import type { Prisma } from "@/generated/prisma";
import ListingCard from "@/components/listings/ListingCard";
import ListingFilters from "@/components/listings/ListingFilters";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata("listings", locale);
}

const PER_PAGE = 20;

export default async function ListingsPage({ params, searchParams }: Props) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  const t = await getTranslations({ locale, namespace: "listings" });

  // Parse search params
  const search = typeof sp.search === "string" ? sp.search : undefined;
  const country = typeof sp.country === "string" ? sp.country : undefined;
  const sector = typeof sp.sector === "string" ? sp.sector : undefined;
  const ebitda = typeof sp.ebitda === "string" ? sp.ebitda : undefined;
  const revenue = typeof sp.revenue === "string" ? sp.revenue : undefined;
  const sort = typeof sp.sort === "string" ? sp.sort : "recent";
  const page = Math.max(1, parseInt(typeof sp.page === "string" ? sp.page : "1", 10));

  // Build Prisma where clause
  const where: Prisma.ListingWhereInput = { status: "ACTIVE" };

  if (search) {
    where.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { summary: { contains: search, mode: "insensitive" } },
      { sector: { contains: search, mode: "insensitive" } },
      { region: { contains: search, mode: "insensitive" } },
    ];
  }

  if (country) {
    const countries = country.split(",").filter(Boolean);
    if (countries.length > 0) where.country = { in: countries };
  }

  if (sector) {
    const sectors = sector.split(",").filter(Boolean);
    if (sectors.length > 0) where.sector = { in: sectors };
  }

  if (ebitda) {
    const [min, max] = ebitda.split("-").map(Number);
    where.ebitda = {};
    if (min) where.ebitda.gte = min;
    if (max) where.ebitda.lte = max;
  }

  if (revenue) {
    const [min, max] = revenue.split("-").map(Number);
    where.revenue = {};
    if (min) where.revenue.gte = min;
    if (max) where.revenue.lte = max;
  }

  // Sort
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
      break;
  }

  const [listings, total] = await Promise.all([
    prisma.listing.findMany({
      where,
      orderBy,
      skip: (page - 1) * PER_PAGE,
      take: PER_PAGE,
      select: {
        id: true,
        slug: true,
        title: true,
        summary: true,
        sector: true,
        country: true,
        region: true,
        revenue: true,
        ebitda: true,
        ebitdaMargin: true,
        askingPrice: true,
        askingMultiple: true,
        employeeCount: true,
        highlights: true,
        sellerFinancing: true,
        publishedAt: true,
        status: true,
      },
    }),
    prisma.listing.count({ where }),
  ]);

  const totalPages = Math.ceil(total / PER_PAGE);

  // Build pagination URL helper
  function pageUrl(p: number) {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (country) params.set("country", country);
    if (sector) params.set("sector", sector);
    if (ebitda) params.set("ebitda", ebitda);
    if (revenue) params.set("revenue", revenue);
    if (sort !== "recent") params.set("sort", sort);
    if (p > 1) params.set("page", String(p));
    const qs = params.toString();
    return qs ? `?${qs}` : "";
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-semibold text-apple-black tracking-tight">
        {t("title")}
      </h1>
      <p className="text-apple-gray-700 mt-2">
        {t("subtitle")}
      </p>

      {/* Filters */}
      <div className="mt-8">
        <Suspense>
          <ListingFilters />
        </Suspense>
      </div>

      {/* Results count */}
      <div className="mt-6 text-sm text-apple-gray-500">
        {t("showingResults", { count: total })}
      </div>

      {/* Listings */}
      {listings.length > 0 ? (
        <div className="mt-2 divide-y divide-apple-gray-100">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center py-16">
          <p className="text-apple-gray-500">{t("noListings")}</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {page > 1 ? (
            <Link
              href={`/${locale}/listings${pageUrl(page - 1)}`}
              className="inline-flex items-center gap-1 rounded-lg border border-apple-gray-300 px-3 py-2 text-sm text-apple-gray-700 hover:bg-apple-gray-100 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-lg border border-apple-gray-100 px-3 py-2 text-sm text-apple-gray-300">
              <ChevronLeft className="h-4 w-4" />
            </span>
          )}

          <span className="text-sm text-apple-gray-700 px-3">
            {page} / {totalPages}
          </span>

          {page < totalPages ? (
            <Link
              href={`/${locale}/listings${pageUrl(page + 1)}`}
              className="inline-flex items-center gap-1 rounded-lg border border-apple-gray-300 px-3 py-2 text-sm text-apple-gray-700 hover:bg-apple-gray-100 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-lg border border-apple-gray-100 px-3 py-2 text-sm text-apple-gray-300">
              <ChevronRight className="h-4 w-4" />
            </span>
          )}
        </div>
      )}
    </div>
  );
}
