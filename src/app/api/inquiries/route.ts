import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";
import { createNotification } from "@/lib/notifications";

// POST /api/inquiries — send an inquiry to a seller
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
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!listingId || !message) {
    return NextResponse.json(
      { error: "listingId and message are required" },
      { status: 400 }
    );
  }

  // Find the listing to get the seller
  const listing = await prisma.listing.findUnique({
    where: { id: listingId },
    select: { id: true, sellerId: true, title: true },
  });

  if (!listing) {
    return NextResponse.json({ error: "Listing not found" }, { status: 404 });
  }

  try {
    const inquiry = await prisma.inquiry.create({
      data: {
        listingId,
        userId: session.id,
        message,
      },
    });

    await createNotification({
      userId: listing.sellerId,
      type: "INQUIRY_RECEIVED",
      title: "New inquiry received",
      message: `${session.name ?? "Someone"} is interested in "${listing.title}"`,
      link: `/dashboard/my-listings`,
    });

    return NextResponse.json({ inquiry }, { status: 201 });
  } catch (err: any) {
    if (err?.code === "P2002") {
      return NextResponse.json(
        { error: "You have already inquired about this listing" },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: "Failed to send inquiry" }, { status: 500 });
  }
}
