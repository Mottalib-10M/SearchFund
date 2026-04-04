import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/api-auth";

type RouteContext = {
  params: Promise<{ id: string }>;
};

// GET /api/documents/[id] — download with access control
export async function GET(_request: NextRequest, context: RouteContext) {
  const { id } = await context.params;

  const doc = await prisma.searcherDocument.findUnique({
    where: { id },
    include: {
      profile: {
        select: { userId: true },
      },
    },
  });

  if (!doc) {
    return NextResponse.json(
      { error: "Document not found" },
      { status: 404 }
    );
  }

  // PUBLIC documents are accessible by everyone
  if (doc.visibility === "PUBLIC") {
    return NextResponse.redirect(doc.fileUrl);
  }

  // For PRIVATE and CONNECTIONS, authentication is required
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 }
    );
  }

  const ownerId = doc.profile.userId;

  // Owner can always access their own documents
  if (session.id === ownerId) {
    return NextResponse.redirect(doc.fileUrl);
  }

  // PRIVATE — only the owner
  if (doc.visibility === "PRIVATE") {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }

  // CONNECTIONS — owner + accepted investor connections only
  if (doc.visibility === "CONNECTIONS") {
    // Viewer must be an investor
    const viewer = await prisma.user.findUnique({
      where: { id: session.id },
      select: { role: true },
    });

    if (viewer?.role !== "INVESTOR") {
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const connection = await prisma.connection.findFirst({
      where: {
        status: "ACCEPTED",
        OR: [
          { requesterId: session.id, receiverId: ownerId },
          { requesterId: ownerId, receiverId: session.id },
        ],
      },
    });

    if (!connection) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    return NextResponse.redirect(doc.fileUrl);
  }

  return NextResponse.json({ error: "Access denied" }, { status: 403 });
}

// PATCH /api/documents/[id] — update visibility
export async function PATCH(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;

  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 }
    );
  }

  const profile = await prisma.searcherProfile.findUnique({
    where: { userId: session.id },
    select: { id: true },
  });

  if (!profile) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const doc = await prisma.searcherDocument.findFirst({
    where: { id, profileId: profile.id },
  });

  if (!doc) {
    return NextResponse.json(
      { error: "Document not found" },
      { status: 404 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const visibility = body.visibility as string;
  if (!["PRIVATE", "CONNECTIONS", "PUBLIC"].includes(visibility)) {
    return NextResponse.json(
      { error: "Invalid visibility value" },
      { status: 400 }
    );
  }

  const updated = await prisma.searcherDocument.update({
    where: { id },
    data: { visibility: visibility as "PRIVATE" | "CONNECTIONS" | "PUBLIC" },
  });

  return NextResponse.json({ document: updated });
}
