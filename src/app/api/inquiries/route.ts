import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";
import { createNotification } from "@/lib/notifications";
import { newInquiryEmail } from "@/lib/emails/new-inquiry";
import { sendEmail } from "@/lib/emails/send";

// POST /api/inquiries - send an inquiry to a seller
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
    select: { id: true, sellerId: true, title: true, seller: { select: { email: true } } },
  });

  if (!listing) {
    return NextResponse.json({ error: "Listing not found" }, { status: 404 });
  }

  try {
    // 1. Create the inquiry record
    const inquiry = await prisma.inquiry.create({
      data: {
        listingId,
        userId: session.id,
        message,
      },
    });

    // 2. Create or find conversation between buyer and seller
    const [p1, p2] = [session.id, listing.sellerId].sort();
    let conversation = await prisma.conversation.findUnique({
      where: { participant1_participant2: { participant1: p1, participant2: p2 } },
    });

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: { participant1: p1, participant2: p2 },
      });
    }

    // 3. Insert the inquiry as the first message in the conversation
    await prisma.message.create({
      data: {
        conversationId: conversation.id,
        senderId: session.id,
        receiverId: listing.sellerId,
        content: `[Inquiry about "${listing.title}"]\n\n${message}`,
      },
    });

    // Update conversation timestamp
    await prisma.conversation.update({
      where: { id: conversation.id },
      data: { updatedAt: new Date() },
    });

    // 4. In-app notification → links to messages
    await createNotification({
      userId: listing.sellerId,
      type: "INQUIRY_RECEIVED",
      title: "New inquiry received",
      message: `${session.name ?? "Someone"} is interested in "${listing.title}"`,
      link: `/dashboard/messages/${conversation.id}`,
    });

    // 5. Email notification to seller (best-effort)
    if (listing.seller.email) {
      const { html, text, subject } = newInquiryEmail({
        listingTitle: listing.title,
        senderName: session.name ?? "A searcher",
        message,
      });
      sendEmail({ to: listing.seller.email, subject, html, text }).catch(() => {});
    }

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
