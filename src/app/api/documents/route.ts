import { NextRequest, NextResponse } from "next/server";
import { put, del } from "@vercel/blob";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

const VALID_LABELS = [
  "PPM",
  "Executive Summary",
  "Financial Model",
  "Operating Agreement",
  "Subscription Agreements",
  "Pitch Deck",
];

// POST /api/documents — upload a document
export async function POST(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  const profile = await prisma.searcherProfile.findUnique({
    where: { userId: session.id },
    select: { id: true },
  });

  if (!profile) {
    return NextResponse.json(
      { error: "Searcher profile required" },
      { status: 403 }
    );
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const label = formData.get("label") as string | null;
  const visibility = formData.get("visibility") as string | null;

  if (!file || !label) {
    return NextResponse.json(
      { error: "File and label are required" },
      { status: 400 }
    );
  }

  if (!VALID_LABELS.includes(label)) {
    return NextResponse.json({ error: "Invalid label" }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Only PDF, DOCX, PPTX and XLSX files are allowed" },
      { status: 400 }
    );
  }

  if (file.size > MAX_SIZE) {
    return NextResponse.json(
      { error: "File size must be under 10 MB" },
      { status: 400 }
    );
  }

  const validVisibility = ["PRIVATE", "CONNECTIONS", "PUBLIC"].includes(
    visibility ?? ""
  )
    ? (visibility as "PRIVATE" | "CONNECTIONS" | "PUBLIC")
    : "PRIVATE";

  try {
    // Delete existing blob if replacing
    const existing = await prisma.searcherDocument.findUnique({
      where: { profileId_label: { profileId: profile.id, label } },
    });
    if (existing) {
      await del(existing.fileUrl).catch(() => {});
    }

    // Upload to Vercel Blob (private store)
    const blob = await put(`documents/${profile.id}/${label}/${file.name}`, file, {
      access: "private",
      addRandomSuffix: true,
    });

    // Upsert in DB
    const doc = await prisma.searcherDocument.upsert({
      where: { profileId_label: { profileId: profile.id, label } },
      update: {
        fileName: file.name,
        fileUrl: blob.url,
        fileSize: file.size,
        visibility: validVisibility,
      },
      create: {
        profileId: profile.id,
        label,
        fileName: file.name,
        fileUrl: blob.url,
        fileSize: file.size,
        visibility: validVisibility,
      },
    });

    return NextResponse.json({ document: doc });
  } catch (err) {
    console.error("Document upload error:", err);
    return NextResponse.json(
      { error: "Failed to upload document" },
      { status: 500 }
    );
  }
}

// GET /api/documents — list current user's documents
export async function GET() {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  const profile = await prisma.searcherProfile.findUnique({
    where: { userId: session.id },
    select: { id: true },
  });

  if (!profile) {
    return NextResponse.json({ documents: [] });
  }

  const documents = await prisma.searcherDocument.findMany({
    where: { profileId: profile.id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ documents });
}

// DELETE /api/documents — delete a document by id
export async function DELETE(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  const { searchParams } = new URL(request.url);
  const docId = searchParams.get("id");

  if (!docId) {
    return NextResponse.json(
      { error: "Document id is required" },
      { status: 400 }
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
    where: { id: docId, profileId: profile.id },
  });

  if (!doc) {
    return NextResponse.json(
      { error: "Document not found" },
      { status: 404 }
    );
  }

  try {
    await del(doc.fileUrl).catch(() => {});
    await prisma.searcherDocument.delete({ where: { id: docId } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Document delete error:", err);
    return NextResponse.json(
      { error: "Failed to delete document" },
      { status: 500 }
    );
  }
}
