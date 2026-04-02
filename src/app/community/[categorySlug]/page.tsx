export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pin } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { timeAgo } from "@/lib/utils";

type Props = {
  params: Promise<{ categorySlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { categorySlug } = await params;
    const category = await prisma.forumCategory.findUnique({
      where: { slug: categorySlug },
      select: { name: true },
    });
    if (!category) return { title: "Category not found" };
    return {
      title: `${category.name} — Community — TheSearchFund`,
      description: `Browse posts in ${category.name} on the TheSearchFund community forum.`,
    };
  } catch {
    return { title: "Community — TheSearchFund" };
  }
}

export default async function CategoryPage({ params }: Props) {
  const { categorySlug } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let category: any = null;
  try {
    category = await prisma.forumCategory.findUnique({
      where: { slug: categorySlug },
      include: {
        posts: {
          orderBy: [{ isPinned: "desc" }, { createdAt: "desc" }],
          include: {
            author: {
              select: { name: true, role: true },
            },
            _count: {
              select: { comments: true },
            },
          },
        },
      },
    });
  } catch {
    // DB not available
  }

  if (!category) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-apple-gray-500 mb-6">
        <Link href="/community" className="hover:text-apple-accent transition">
          Community
        </Link>
        <span className="mx-2">/</span>
        <span className="text-apple-black">{category.name}</span>
      </nav>

      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        {category.name}
      </h1>
      {category.description && (
        <p className="text-apple-gray-500 mt-2">{category.description}</p>
      )}

      <div className="mt-6">
        {category.posts.length === 0 && (
          <p className="text-sm text-apple-gray-500 py-8 text-center">
            No posts yet. Be the first to start a discussion.
          </p>
        )}

        {category.posts.map((post: any) => (
          <div
            key={post.id}
            className="py-4 border-b border-apple-gray-100"
          >
            <div className="flex items-center gap-2">
              {post.isPinned && (
                <Pin
                  size={14}
                  strokeWidth={1.5}
                  className="text-apple-accent shrink-0"
                />
              )}
              <Link
                href={`/community/${categorySlug}/${post.slug}`}
                className="text-base font-medium text-apple-black hover:text-apple-accent transition"
              >
                {post.title}
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-1.5 text-sm text-apple-gray-500">
              <span>{post.author.name ?? "Anonymous"}</span>
              <span className="text-xs bg-apple-gray-100 rounded-full px-2 py-0.5 text-apple-gray-500">
                {post.author.role}
              </span>
              <span>&middot;</span>
              <span>
                {post._count.comments}{" "}
                {post._count.comments === 1 ? "comment" : "comments"}
              </span>
              <span>&middot;</span>
              <span>{timeAgo(post.createdAt)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
