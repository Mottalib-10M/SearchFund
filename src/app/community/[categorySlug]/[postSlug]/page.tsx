export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { timeAgo } from "@/lib/utils";

type Props = {
  params: Promise<{ categorySlug: string; postSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { postSlug } = await params;
    const post = await prisma.forumPost.findUnique({
      where: { slug: postSlug },
      select: { title: true },
    });
    if (!post) return { title: "Post not found" };
    return { title: `${post.title} — Community — SearchFundMarket` };
  } catch {
    return { title: "Community — SearchFundMarket" };
  }
}

export default async function PostPage({ params }: Props) {
  const { categorySlug, postSlug } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let post: any = null;
  try {
    post = await prisma.forumPost.findUnique({
      where: { slug: postSlug },
      include: {
        author: {
          select: { name: true, image: true, role: true },
        },
        category: {
          select: { name: true, slug: true },
        },
        comments: {
          orderBy: { createdAt: "asc" },
          include: {
            author: {
              select: { name: true, role: true },
            },
          },
        },
      },
    });
  } catch {
    // DB not available
  }

  if (!post) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-apple-gray-500 mb-6">
        <Link href="/community" className="hover:text-apple-accent transition">
          Community
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/community/${categorySlug}`}
          className="hover:text-apple-accent transition"
        >
          {post.category.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-apple-black">{post.title}</span>
      </nav>

      {/* Post header */}
      <h1 className="text-2xl font-semibold text-apple-black tracking-tight">
        {post.title}
      </h1>

      <div className="flex items-center gap-3 mt-4">
        {/* Avatar placeholder */}
        <div className="w-9 h-9 rounded-full bg-apple-gray-100 flex items-center justify-center text-sm font-medium text-apple-gray-700 shrink-0">
          {post.author.name?.charAt(0)?.toUpperCase() ?? "?"}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-apple-black">
            {post.author.name ?? "Anonymous"}
          </span>
          <span className="text-xs bg-apple-gray-100 rounded-full px-2 py-0.5 text-apple-gray-500">
            {post.author.role}
          </span>
          <span className="text-apple-gray-500">
            &middot; {timeAgo(post.createdAt)}
          </span>
        </div>
      </div>

      {/* Post content */}
      <div className="mt-6 text-apple-gray-700 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>

      {/* Comments section */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold text-apple-black">
          Comments{" "}
          <span className="text-apple-gray-500 font-normal">
            ({post.comments.length})
          </span>
        </h3>

        {post.comments.length === 0 ? (
          <p className="text-sm text-apple-gray-500 mt-4">
            No comments yet.{" "}
            <Link
              href="/auth/signin"
              className="text-apple-accent hover:underline"
            >
              Sign in
            </Link>{" "}
            to be the first to reply.
          </p>
        ) : (
          <div className="mt-4">
            {post.comments.map((comment: any) => (
              <div
                key={comment.id}
                className="py-4 border-b border-apple-gray-100"
              >
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-apple-black">
                    {comment.author.name ?? "Anonymous"}
                  </span>
                  <span className="text-xs bg-apple-gray-100 rounded-full px-2 py-0.5 text-apple-gray-500">
                    {comment.author.role}
                  </span>
                  <span className="text-apple-gray-500">
                    &middot; {timeAgo(comment.createdAt)}
                  </span>
                </div>
                <p className="text-sm text-apple-gray-700 mt-2">
                  {comment.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Comment form placeholder */}
        <div className="mt-6 rounded-xl border border-apple-gray-300/40 bg-apple-gray-100/50 p-6 text-center">
          <p className="text-sm text-apple-gray-500">
            <Link
              href="/auth/signin"
              className="text-apple-accent hover:underline font-medium"
            >
              Sign in
            </Link>{" "}
            to comment
          </p>
        </div>
      </div>
    </div>
  );
}
