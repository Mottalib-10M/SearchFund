import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";

// POST /api/forum/comments - create a comment on a post
export async function POST(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const postId = typeof body.postId === "string" ? body.postId : "";
  const content = typeof body.content === "string" ? body.content.trim() : "";
  const parentId = typeof body.parentId === "string" ? body.parentId : null;

  if (!postId || !content) {
    return NextResponse.json(
      { error: "postId and content are required" },
      { status: 400 }
    );
  }

  // Verify post exists
  const post = await prisma.forumPost.findUnique({
    where: { id: postId },
    select: { id: true },
  });

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  try {
    const comment = await prisma.forumComment.create({
      data: {
        content,
        authorId: session.id,
        postId,
        parentId,
      },
    });

    return NextResponse.json({ comment }, { status: 201 });
  } catch (err) {
    console.error("Failed to create comment:", err);
    return NextResponse.json({ error: "Failed to create comment" }, { status: 500 });
  }
}
