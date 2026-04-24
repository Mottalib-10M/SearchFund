import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";

// GET /api/notifications - get user's notifications
export async function GET(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  const unreadOnly = request.nextUrl.searchParams.get("unread") === "true";

  const notifications = await prisma.notification.findMany({
    where: {
      userId: session.id,
      ...(unreadOnly && { read: false }),
    },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  const unreadCount = await prisma.notification.count({
    where: { userId: session.id, read: false },
  });

  return NextResponse.json({ notifications, unreadCount });
}

// PUT /api/notifications - mark as read
export async function PUT(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const notificationId = typeof body.notificationId === "string" ? body.notificationId : null;
  const markAllRead = body.markAllRead === true;

  if (markAllRead) {
    await prisma.notification.updateMany({
      where: { userId: session.id, read: false },
      data: { read: true },
    });
    return NextResponse.json({ success: true });
  }

  if (notificationId) {
    await prisma.notification.updateMany({
      where: { id: notificationId, userId: session.id },
      data: { read: true },
    });
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "notificationId or markAllRead required" }, { status: 400 });
}
