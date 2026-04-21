export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { prisma } from "@/lib/prisma";

type MetaProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
  const { locale } = await params;
  const { buildMetadata } = await import("@/lib/meta-snippets");
  return buildMetadata("community", locale);
}

export default async function CommunityPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let categories: any[] = [];

  try {
    categories = await prisma.forumCategory.findMany({
      orderBy: { sortOrder: "asc" },
      include: {
        _count: {
          select: { posts: true },
        },
      },
    });
  } catch {
    // DB not available
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
            Community
          </h1>
          <p className="text-apple-gray-500 mt-2">
            Discuss deals, strategy, and ETA best practices
          </p>
        </div>
        <Link
          href="/community/new"
          className="bg-apple-accent text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-apple-accent-hover transition-colors"
        >
          New post
        </Link>
      </div>

      <div className="mt-8">
        {categories.length === 0 && (
          <p className="text-sm text-apple-gray-500 py-8 text-center">
            No categories yet. Check back soon.
          </p>
        )}

        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/community/${category.slug}`}
            className="py-5 border-b border-apple-gray-100 flex justify-between items-center hover:bg-apple-gray-100/50 px-4 rounded-lg transition"
          >
            <div>
              <p className="text-base font-semibold text-apple-black">
                {category.name}
              </p>
              {category.description && (
                <p className="text-sm text-apple-gray-500 mt-0.5">
                  {category.description}
                </p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-apple-gray-500">
                {category._count.posts}{" "}
                {category._count.posts === 1 ? "post" : "posts"}
              </span>
              <ChevronRight
                size={16}
                strokeWidth={1.5}
                className="text-apple-gray-500"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
