import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { getAuthSession, unauthorized } from "@/lib/api-auth";
import type { Prisma } from "@/generated/prisma";

// ---------------------------------------------------------------------------
// GET /api/listings — list with filters, sort, pagination
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  const url = request.nextUrl;

  const search = url.searchParams.get("search") ?? undefined;
  const country = url.searchParams.get("country") ?? undefined;
  const sector = url.searchParams.get("sector") ?? undefined;
  const ebitdaMin = url.searchParams.get("ebitdaMin");
  const ebitdaMax = url.searchParams.get("ebitdaMax");
  const revenueMin = url.searchParams.get("revenueMin");
  const revenueMax = url.searchParams.get("revenueMax");
  const sort = url.searchParams.get("sort") ?? "recent";
  const page = Math.max(1, parseInt(url.searchParams.get("page") ?? "1", 10));
  const perPage = 20;

  // Build where clause
  const where: Prisma.ListingWhereInput = {
    status: "ACTIVE",
  };

  // Text search
  if (search) {
    where.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { summary: { contains: search, mode: "insensitive" } },
      { sector: { contains: search, mode: "insensitive" } },
      { region: { contains: search, mode: "insensitive" } },
    ];
  }

  // Country filter (comma-separated)
  if (country) {
    const countries = country.split(",").filter(Boolean);
    if (countries.length > 0) {
      where.country = { in: countries };
    }
  }

  // Sector filter (comma-separated)
  if (sector) {
    const sectors = sector.split(",").filter(Boolean);
    if (sectors.length > 0) {
      where.sector = { in: sectors };
    }
  }

  // EBITDA range
  if (ebitdaMin || ebitdaMax) {
    where.ebitda = {};
    if (ebitdaMin) where.ebitda.gte = parseInt(ebitdaMin, 10);
    if (ebitdaMax) where.ebitda.lte = parseInt(ebitdaMax, 10);
  }

  // Revenue range
  if (revenueMin || revenueMax) {
    where.revenue = {};
    if (revenueMin) where.revenue.gte = parseInt(revenueMin, 10);
    if (revenueMax) where.revenue.lte = parseInt(revenueMax, 10);
  }

  // Sort order
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
    case "recent":
    default:
      orderBy = { publishedAt: "desc" };
      break;
  }

  const [listings, total] = await Promise.all([
    prisma.listing.findMany({
      where,
      orderBy,
      skip: (page - 1) * perPage,
      take: perPage,
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
        seller: {
          select: {
            id: true,
            name: true,
            image: true,
            verificationStatus: true,
          },
        },
        _count: {
          select: {
            savedBy: true,
            inquiries: true,
          },
        },
      },
    }),
    prisma.listing.count({ where }),
  ]);

  return NextResponse.json({
    listings,
    pagination: {
      page,
      perPage,
      total,
      totalPages: Math.ceil(total / perPage),
    },
  });
}

// ---------------------------------------------------------------------------
// POST /api/listings — create a new listing (auth required)
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  if (session.role !== "SELLER") {
    return NextResponse.json(
      { error: "Only sellers can create listings" },
      { status: 403 }
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  // Basic validation
  const title = typeof body.title === "string" ? body.title.trim() : "";
  const sector = typeof body.sector === "string" ? body.sector.trim() : "";
  const country = typeof body.country === "string" ? body.country.trim() : "";
  const summary = typeof body.summary === "string" ? body.summary.trim() : "";

  if (!title) {
    return NextResponse.json(
      { error: "Title is required" },
      { status: 400 }
    );
  }
  if (!sector) {
    return NextResponse.json(
      { error: "Sector is required" },
      { status: 400 }
    );
  }
  if (!country) {
    return NextResponse.json(
      { error: "Country is required" },
      { status: 400 }
    );
  }
  if (!summary) {
    return NextResponse.json(
      { error: "Summary is required" },
      { status: 400 }
    );
  }
  if (summary.length > 280) {
    return NextResponse.json(
      { error: "Summary must be 280 characters or less" },
      { status: 400 }
    );
  }

  // Generate unique slug
  let baseSlug = slugify(title);
  if (!baseSlug) baseSlug = "listing";
  let slug = baseSlug;
  let counter = 0;

  // Ensure slug uniqueness
  while (await prisma.listing.findUnique({ where: { slug } })) {
    counter++;
    slug = `${baseSlug}-${counter}`;
  }

  // Parse numeric fields safely
  const toIntOrNull = (val: unknown): number | null => {
    if (val == null) return null;
    const n = typeof val === "string" ? parseInt(val, 10) : Number(val);
    return isNaN(n) ? null : n;
  };
  const toFloatOrNull = (val: unknown): number | null => {
    if (val == null) return null;
    const n = typeof val === "string" ? parseFloat(val) : Number(val);
    return isNaN(n) ? null : n;
  };

  const revenue = toIntOrNull(body.revenue);
  const ebitda = toIntOrNull(body.ebitda);
  const askingPrice = toIntOrNull(body.askingPrice);
  const ebitdaMargin = toFloatOrNull(body.ebitdaMargin);
  const askingMultiple = toFloatOrNull(body.askingMultiple);
  const employeeCount = toIntOrNull(body.employeeCount);
  const yearFounded = toIntOrNull(body.yearFounded);

  const description =
    typeof body.description === "string" ? body.description.trim() || null : null;
  const region =
    typeof body.region === "string" ? body.region.trim() || null : null;
  const reasonForSale =
    typeof body.reasonForSale === "string"
      ? body.reasonForSale.trim() || null
      : null;
  const timeline =
    typeof body.timeline === "string" ? body.timeline.trim() || null : null;
  const sellerFinancing = body.sellerFinancing === true;
  const highlights = Array.isArray(body.highlights)
    ? (body.highlights as unknown[])
        .filter((h): h is string => typeof h === "string" && h.trim() !== "")
        .map((h) => h.trim())
    : [];

  // Determine status — publish directly when submitted
  const statusInput = typeof body.status === "string" ? body.status : "DRAFT";
  const status =
    statusInput === "UNDER_REVIEW" || statusInput === "ACTIVE" ? "ACTIVE" : "DRAFT";

  try {
    const listing = await prisma.listing.create({
      data: {
        sellerId: session.id,
        title,
        slug,
        sector,
        country,
        region,
        currency: "EUR",
        revenue,
        ebitda,
        ebitdaMargin,
        askingPrice,
        askingMultiple,
        employeeCount,
        yearFounded,
        summary,
        description,
        highlights,
        reasonForSale,
        sellerFinancing,
        timeline,
        status,
        publishedAt: status === "ACTIVE" ? new Date() : null,
      },
    });

    return NextResponse.json(
      {
        id: listing.id,
        slug: listing.slug,
        status: listing.status,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Failed to create listing:", err);
    return NextResponse.json(
      { error: "Failed to create listing" },
      { status: 500 }
    );
  }
}
