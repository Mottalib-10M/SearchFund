import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";
import { slugify } from "@/lib/utils";

// POST /api/forum/posts — create a new forum post
export async function POST(request: NextRequest) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const title = typeof body.title === "string" ? body.title.trim() : "";
  const content = typeof body.content === "string" ? body.content.trim() : "";
  const categoryId = typeof body.categoryId === "string" ? body.categoryId : "";

  if (!title || !content || !categoryId) {
    return NextResponse.json(
      { error: "title, content, and categoryId are required" },
      { status: 400 }
    );
  }

  // Verify category exists
  const category = await prisma.forumCategory.findUnique({
    where: { id: categoryId },
    select: { slug: true },
  });

  if (!category) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  // Generate unique slug
  let baseSlug = slugify(title);
  if (!baseSlug) baseSlug = "post";
  let slug = baseSlug;
  let counter = 0;

  while (await prisma.forumPost.findUnique({ where: { slug } })) {
    counter++;
    slug = `${baseSlug}-${counter}`;
  }

  try {
    const post = await prisma.forumPost.create({
      data: {
        title,
        slug,
        content,
        authorId: session.id,
        categoryId,
      },
    });

    return NextResponse.json(
      {
        post: { id: post.id, slug: post.slug },
        categorySlug: category.slug,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Failed to create post:", err);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
