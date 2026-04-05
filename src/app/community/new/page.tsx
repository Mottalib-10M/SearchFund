export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import CreatePostForm from "@/components/community/CreatePostForm";

export const metadata: Metadata = {
  title: "Start a Discussion — SearchFundMarket ETA Community",
  description:
    "Start a new discussion in the SearchFundMarket community. Share insights, ask questions, and connect with search fund entrepreneurs and investors in Europe.",
};

export default async function NewPostPage() {
  const session = await getServerSession(authOptions);
  let categories: { id: string; name: string; slug: string }[] = [];

  try {
    categories = await prisma.forumCategory.findMany({
      orderBy: { sortOrder: "asc" },
      select: { id: true, name: true, slug: true },
    });
  } catch {
    // DB not available
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-apple-gray-500 mb-6">
        <Link href="/community" className="hover:text-apple-accent transition">
          Community
        </Link>
        <span className="mx-2">/</span>
        <span className="text-apple-black">New post</span>
      </nav>

      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        New post
      </h1>

      {session?.user ? (
        <CreatePostForm categories={categories} />
      ) : (
        <div className="max-w-2xl mx-auto mt-8">
          <div className="rounded-lg bg-apple-gray-100 p-6 text-center">
            <p className="text-sm text-apple-gray-500">
              You need to sign in to create a post.{" "}
              <Link
                href="/auth/signin"
                className="text-apple-accent hover:underline font-medium"
              >
                Sign in now
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
