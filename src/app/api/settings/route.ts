import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";

export async function GET() {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  const user = await prisma.user.findUnique({
    where: { id: session.id },
    select: {
      emailMessages: true,
      emailConnections: true,
      emailListings: true,
      profilePublic: true,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(request: Request) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const data: Record<string, boolean> = {};
  if (typeof body.emailMessages === "boolean") data.emailMessages = body.emailMessages;
  if (typeof body.emailConnections === "boolean") data.emailConnections = body.emailConnections;
  if (typeof body.emailListings === "boolean") data.emailListings = body.emailListings;
  if (typeof body.profilePublic === "boolean") data.profilePublic = body.profilePublic;

  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: "No valid settings provided" }, { status: 400 });
  }

  try {
    await prisma.user.update({
      where: { id: session.id },
      data,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Settings update error:", err);
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
