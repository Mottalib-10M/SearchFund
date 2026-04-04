import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";
import { createNotification } from "@/lib/notifications";

// GET /api/messages?conversationId=xxx — get messages for a conversation
export async function GET(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  const conversationId = request.nextUrl.searchParams.get("conversationId");
  if (!conversationId) {
    return NextResponse.json({ error: "conversationId is required" }, { status: 400 });
  }

  // Verify user is a participant
  const conversation = await prisma.conversation.findUnique({
    where: { id: conversationId },
  });

  if (
    !conversation ||
    (conversation.participant1 !== session.id && conversation.participant2 !== session.id)
  ) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const messages = await prisma.message.findMany({
    where: { conversationId },
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      content: true,
      senderId: true,
      receiverId: true,
      createdAt: true,
      readAt: true,
    },
  });

  // Mark unread messages as read
  await prisma.message.updateMany({
    where: {
      conversationId,
      receiverId: session.id,
      readAt: null,
    },
    data: { readAt: new Date() },
  });

  return NextResponse.json({ messages });
}

// POST /api/messages — send a message
export async function POST(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const conversationId = typeof body.conversationId === "string" ? body.conversationId : "";
  const content = typeof body.content === "string" ? body.content.trim() : "";

  if (!conversationId || !content) {
    return NextResponse.json(
      { error: "conversationId and content are required" },
      { status: 400 }
    );
  }

  // Verify user is a participant
  const conversation = await prisma.conversation.findUnique({
    where: { id: conversationId },
  });

  if (
    !conversation ||
    (conversation.participant1 !== session.id && conversation.participant2 !== session.id)
  ) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const receiverId =
    conversation.participant1 === session.id
      ? conversation.participant2
      : conversation.participant1;

  // Prevent sending consecutive messages without a reply
  const lastMessage = await prisma.message.findFirst({
    where: { conversationId },
    orderBy: { createdAt: "desc" },
    select: { senderId: true },
  });

  if (lastMessage && lastMessage.senderId === session.id) {
    return NextResponse.json(
      { error: "Please wait for a reply before sending another message" },
      { status: 429 }
    );
  }

  try {
    const message = await prisma.message.create({
      data: {
        conversationId,
        senderId: session.id,
        receiverId,
        content,
      },
    });

    // Update conversation timestamp
    await prisma.conversation.update({
      where: { id: conversationId },
      data: { updatedAt: new Date() },
    });

    await createNotification({
      userId: receiverId,
      type: "NEW_MESSAGE",
      title: "New message",
      message: `${session.name ?? "Someone"} sent you a message`,
      link: `/dashboard/messages/${conversationId}`,
    });

    return NextResponse.json({ message }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
