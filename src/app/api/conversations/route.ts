import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";

// GET /api/conversations — list user's conversations
export async function GET() {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  const conversations = await prisma.conversation.findMany({
    where: {
      OR: [
        { participant1: session.id },
        { participant2: session.id },
      ],
    },
    orderBy: { updatedAt: "desc" },
    include: {
      messages: {
        orderBy: { createdAt: "desc" },
        take: 1,
        select: {
          content: true,
          senderId: true,
          createdAt: true,
          readAt: true,
        },
      },
    },
  });

  // Fetch participant info
  const participantIds = new Set<string>();
  conversations.forEach((c) => {
    participantIds.add(c.participant1);
    participantIds.add(c.participant2);
  });

  const users = await prisma.user.findMany({
    where: { id: { in: Array.from(participantIds) } },
    select: { id: true, name: true, image: true, role: true },
  });

  const userMap = new Map(users.map((u) => [u.id, u]));

  const result = conversations.map((c) => {
    const otherId = c.participant1 === session.id ? c.participant2 : c.participant1;
    const otherUser = userMap.get(otherId);
    const lastMessage = c.messages[0] ?? null;
    const unread = lastMessage && lastMessage.senderId !== session.id && !lastMessage.readAt;

    return {
      id: c.id,
      otherUser: otherUser ?? { id: otherId, name: "Unknown", image: null, role: "SEARCHER" },
      lastMessage,
      unread,
      updatedAt: c.updatedAt,
    };
  });

  return NextResponse.json({ conversations: result });
}

// POST /api/conversations — create or get existing conversation
export async function POST(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const otherUserId = typeof body.otherUserId === "string" ? body.otherUserId : "";
  if (!otherUserId || otherUserId === session.id) {
    return NextResponse.json({ error: "Invalid user" }, { status: 400 });
  }

  // Sort IDs to ensure consistent unique constraint
  const [p1, p2] = [session.id, otherUserId].sort();

  try {
    // Try to find existing conversation
    let conversation = await prisma.conversation.findUnique({
      where: { participant1_participant2: { participant1: p1, participant2: p2 } },
    });

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: { participant1: p1, participant2: p2 },
      });
    }

    return NextResponse.json({ conversation }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create conversation" }, { status: 500 });
  }
}
