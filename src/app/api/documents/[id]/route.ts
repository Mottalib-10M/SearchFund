import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/api-auth";

type RouteContext = {
  params: Promise<{ id: string }>;
};

const MIME_TYPES: Record<string, string> = {
  pdf: "application/pdf",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

/** Fetch the blob and return it inline (no download prompt). */
async function serveInline(fileUrl: string, fileName: string) {
  try {
    const res = await fetch(fileUrl, {
      headers: {
        Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
      },
    });
    if (!res.ok) {
      return NextResponse.json({ error: "File not accessible", status: res.status }, { status: 502 });
    }

    const ext = fileName.split(".").pop()?.toLowerCase() ?? "";
    const contentType = MIME_TYPES[ext] ?? "application/octet-stream";

    return new NextResponse(res.body, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `inline; filename="${fileName}"`,
        "Cache-Control": "private, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to serve document" }, { status: 500 });
  }
}

// GET /api/documents/[id] — view with access control
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
    return serveInline(doc.fileUrl, doc.fileName);
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
    return serveInline(doc.fileUrl, doc.fileName);
  }

  // PRIVATE — only the owner
  if (doc.visibility === "PRIVATE") {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }

  // CONNECTIONS — owner + accepted investor connections only
  if (doc.visibility === "CONNECTIONS") {
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

    return serveInline(doc.fileUrl, doc.fileName);
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
