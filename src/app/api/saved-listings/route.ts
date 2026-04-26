import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";

// GET /api/saved-listings - get user's saved listings
export async function GET() {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  const saved = await prisma.savedListing.findMany({
    where: { userId: session.id },
    orderBy: { createdAt: "desc" },
    include: {
      listing: {
        select: {
          id: true,
          slug: true,
          title: true,
          summary: true,
          sector: true,
          country: true,
          revenue: true,
          ebitda: true,
          ebitdaMargin: true,
          askingMultiple: true,
          sellerFinancing: true,
          publishedAt: true,
          status: true,
        },
      },
    },
  });

  return NextResponse.json({ saved });
}

// POST /api/saved-listings - save a listing
export async function POST(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const listingId = typeof body.listingId === "string" ? body.listingId : "";
  if (!listingId) {
    return NextResponse.json({ error: "listingId is required" }, { status: 400 });
  }

  try {
    const saved = await prisma.savedListing.create({
      data: {
        userId: session.id,
        listingId,
        note: typeof body.note === "string" ? body.note : null,
      },
    });
    return NextResponse.json({ saved }, { status: 201 });
  } catch (err: any) {
    // Unique constraint violation = already saved
    if (err?.code === "P2002") {
      return NextResponse.json({ error: "Already saved" }, { status: 409 });
    }
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

// DELETE /api/saved-listings - unsave a listing
export async function DELETE(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  const url = request.nextUrl;
  const listingId = url.searchParams.get("listingId");
  if (!listingId) {
    return NextResponse.json({ error: "listingId is required" }, { status: 400 });
  }

  try {
    await prisma.savedListing.delete({
      where: {
        userId_listingId: {
          userId: session.id,
          listingId,
        },
      },
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
