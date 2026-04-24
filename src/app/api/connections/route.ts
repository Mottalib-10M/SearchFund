import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";
import { createNotification } from "@/lib/notifications";

// GET /api/connections - get user's connections
export async function GET() {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  const connections = await prisma.connection.findMany({
    where: {
      OR: [{ requesterId: session.id }, { receiverId: session.id }],
    },
    orderBy: { updatedAt: "desc" },
    include: {
      requester: {
        select: {
          id: true, name: true, image: true, role: true,
          searcherProfile: { select: { slug: true } },
          investorProfile: { select: { slug: true } },
          sellerProfile: { select: { slug: true } },
        },
      },
      receiver: {
        select: {
          id: true, name: true, image: true, role: true,
          searcherProfile: { select: { slug: true } },
          investorProfile: { select: { slug: true } },
          sellerProfile: { select: { slug: true } },
        },
      },
    },
  });

  return NextResponse.json({ connections });
}

// POST /api/connections - send connection request
export async function POST(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const receiverId = typeof body.receiverId === "string" ? body.receiverId : "";
  if (!receiverId) {
    return NextResponse.json({ error: "receiverId is required" }, { status: 400 });
  }

  if (receiverId === session.id) {
    return NextResponse.json({ error: "Cannot connect with yourself" }, { status: 400 });
  }

  try {
    const connection = await prisma.connection.create({
      data: {
        requesterId: session.id,
        receiverId,
        message: typeof body.message === "string" ? body.message : null,
        status: "PENDING",
      },
    });

    await createNotification({
      userId: receiverId,
      type: "CONNECTION_REQUEST",
      title: "New connection request",
      message: `${session.name ?? "Someone"} wants to connect with you`,
      link: "/dashboard/connections",
    });

    return NextResponse.json({ connection }, { status: 201 });
  } catch (err: any) {
    if (err?.code === "P2002") {
      return NextResponse.json({ error: "Connection already exists" }, { status: 409 });
    }
    return NextResponse.json({ error: "Failed to create connection" }, { status: 500 });
  }
}

// PUT /api/connections - accept or decline
export async function PUT(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const connectionId = typeof body.connectionId === "string" ? body.connectionId : "";
  const action = typeof body.action === "string" ? body.action : "";

  if (!connectionId || !["accept", "decline"].includes(action)) {
    return NextResponse.json(
      { error: "connectionId and action (accept/decline) required" },
      { status: 400 }
    );
  }

  const connection = await prisma.connection.findUnique({
    where: { id: connectionId },
  });

  if (!connection || connection.receiverId !== session.id) {
    return NextResponse.json({ error: "Connection not found" }, { status: 404 });
  }

  if (connection.status !== "PENDING") {
    return NextResponse.json({ error: "Already responded" }, { status: 400 });
  }

  const newStatus = action === "accept" ? "ACCEPTED" : "DECLINED";

  const updated = await prisma.connection.update({
    where: { id: connectionId },
    data: { status: newStatus },
  });

  if (newStatus === "ACCEPTED") {
    await createNotification({
      userId: connection.requesterId,
      type: "CONNECTION_ACCEPTED",
      title: "Connection accepted",
      message: `${session.name ?? "Someone"} accepted your connection request`,
      link: "/dashboard/connections",
    });
  }

  return NextResponse.json({ connection: updated });
}
