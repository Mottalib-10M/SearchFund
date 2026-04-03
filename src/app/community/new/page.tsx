export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "New post — Community — SearchFundMarket",
};

export default async function NewPostPage() {
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

      <form className="max-w-2xl mx-auto mt-8 space-y-6">
        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-apple-black mb-1.5"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full rounded-lg border border-apple-gray-300 bg-white px-4 py-2.5 text-sm text-apple-black focus:ring-2 focus:ring-apple-accent/20 focus:border-apple-accent transition"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-apple-black mb-1.5"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="What do you want to discuss?"
            className="w-full rounded-lg border border-apple-gray-300 bg-white px-4 py-2.5 text-sm text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent/20 focus:border-apple-accent transition"
          />
        </div>

        {/* Content */}
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-apple-black mb-1.5"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={10}
            placeholder="Share your thoughts, questions, or insights..."
            className="w-full rounded-lg border border-apple-gray-300 bg-white px-4 py-2.5 text-sm text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent/20 focus:border-apple-accent transition min-h-[200px] resize-y"
          />
        </div>

        {/* Sign in notice */}
        <div className="rounded-lg bg-apple-gray-100 p-4 text-sm text-apple-gray-500">
          Sign in required to post.{" "}
          <Link
            href="/auth/signin"
            className="text-apple-accent hover:underline font-medium"
          >
            Sign in now
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled
          className="bg-apple-accent text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-apple-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Publish post
        </button>
      </form>
    </div>
  );
}
