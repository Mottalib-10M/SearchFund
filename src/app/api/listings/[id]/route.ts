import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";

// GET /api/listings/[id] — fetch a single listing by ID (owner only)
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  const { id } = await params;

  const listing = await prisma.listing.findUnique({
    where: { id, sellerId: session.id },
  });

  if (!listing) {
    return NextResponse.json({ error: "Listing not found" }, { status: 404 });
  }

  return NextResponse.json({ listing });
}

// PUT /api/listings/[id] — update a listing (owner only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  const { id } = await params;

  // Verify ownership
  const existing = await prisma.listing.findUnique({
    where: { id },
    select: { sellerId: true },
  });

  if (!existing || existing.sellerId !== session.id) {
    return NextResponse.json({ error: "Not found or not authorized" }, { status: 404 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const title = typeof body.title === "string" ? body.title.trim() : undefined;
  const sector = typeof body.sector === "string" ? body.sector : undefined;
  const country = typeof body.country === "string" ? body.country : undefined;
  const region = typeof body.region === "string" ? body.region.trim() || null : undefined;
  const summary = typeof body.summary === "string" ? body.summary.trim() : undefined;
  const description = typeof body.description === "string" ? body.description.trim() || null : undefined;
  const highlights = Array.isArray(body.highlights) ? body.highlights.filter((h): h is string => typeof h === "string" && h.trim() !== "") : undefined;
  const reasonForSale = typeof body.reasonForSale === "string" ? body.reasonForSale || null : undefined;
  const timeline = typeof body.timeline === "string" ? body.timeline || null : undefined;
  const sellerFinancing = typeof body.sellerFinancing === "boolean" ? body.sellerFinancing : undefined;
  const yearFounded = typeof body.yearFounded === "number" ? body.yearFounded : undefined;
  const employeeCount = typeof body.employeeCount === "number" ? body.employeeCount : undefined;
  const revenue = typeof body.revenue === "number" ? body.revenue : undefined;
  const ebitda = typeof body.ebitda === "number" ? body.ebitda : undefined;
  const ebitdaMargin = typeof body.ebitdaMargin === "number" ? body.ebitdaMargin : undefined;
  const askingPrice = typeof body.askingPrice === "number" ? body.askingPrice : undefined;
  const askingMultiple = typeof body.askingMultiple === "number" ? body.askingMultiple : undefined;

  try {
    const listing = await prisma.listing.update({
      where: { id },
      data: {
        ...(title !== undefined && { title }),
        ...(sector !== undefined && { sector }),
        ...(country !== undefined && { country }),
        ...(region !== undefined && { region }),
        ...(summary !== undefined && { summary }),
        ...(description !== undefined && { description }),
        ...(highlights !== undefined && { highlights }),
        ...(reasonForSale !== undefined && { reasonForSale }),
        ...(timeline !== undefined && { timeline }),
        ...(sellerFinancing !== undefined && { sellerFinancing }),
        ...(yearFounded !== undefined && { yearFounded }),
        ...(employeeCount !== undefined && { employeeCount }),
        ...(revenue !== undefined && { revenue }),
        ...(ebitda !== undefined && { ebitda }),
        ...(ebitdaMargin !== undefined && { ebitdaMargin }),
        ...(askingPrice !== undefined && { askingPrice }),
        ...(askingMultiple !== undefined && { askingMultiple }),
      },
    });

    return NextResponse.json({ listing });
  } catch (err) {
    console.error("Listing update error:", err);
    return NextResponse.json({ error: "Failed to update listing" }, { status: 500 });
  }
}
