import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    // Get user's listing IDs for cascading deletes
    const userListings = await prisma.listing.findMany({
      where: { sellerId: id },
      select: { id: true },
    });
    const listingIds = userListings.map((l) => l.id);

    await prisma.$transaction([
      // 1. Forum comments
      prisma.forumComment.deleteMany({ where: { authorId: id } }),
      // 2. Forum posts (comments cascade via onDelete: Cascade)
      prisma.forumPost.deleteMany({ where: { authorId: id } }),
      // 3. Notifications
      prisma.notification.deleteMany({ where: { userId: id } }),
      // 4. Inquiries by user
      prisma.inquiry.deleteMany({ where: { userId: id } }),
      // 5. Saved listings by user
      prisma.savedListing.deleteMany({ where: { userId: id } }),
      // 6. Inquiries on user's listings
      ...(listingIds.length > 0
        ? [prisma.inquiry.deleteMany({ where: { listingId: { in: listingIds } } })]
        : []),
      // 7. Saved listings on user's listings
      ...(listingIds.length > 0
        ? [prisma.savedListing.deleteMany({ where: { listingId: { in: listingIds } } })]
        : []),
      // 8. Listings
      prisma.listing.deleteMany({ where: { sellerId: id } }),
      // 9. Messages
      prisma.message.deleteMany({
        where: { OR: [{ senderId: id }, { receiverId: id }] },
      }),
      // 10. Conversations
      prisma.conversation.deleteMany({
        where: { OR: [{ participant1: id }, { participant2: id }] },
      }),
      // 11. Connections
      prisma.connection.deleteMany({
        where: { OR: [{ requesterId: id }, { receiverId: id }] },
      }),
      // 12. User (CASCADE handles Account, Session, Profiles)
      prisma.user.delete({ where: { id } }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete user:", error);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();

  if (typeof body.isActive !== "boolean") {
    return NextResponse.json({ error: "isActive must be a boolean" }, { status: 400 });
  }

  try {
    await prisma.user.update({
      where: { id },
      data: { isActive: body.isActive },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update user:", error);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}
