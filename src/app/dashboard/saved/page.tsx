import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { formatCurrency, timeAgo, COUNTRIES } from "@/lib/utils";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Saved Listings — SearchFundMarket",
  description: "Your saved and bookmarked business listings.",
};

export default async function SavedPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/auth/signin");

  const userId = (session.user as Record<string, unknown>).id as string;

  const saved = await prisma.savedListing.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: {
      listing: {
        select: {
          id: true,
          slug: true,
          title: true,
          summary: true,
          sector: true,
          country: true,
          revenue: true,
          ebitda: true,
          ebitdaMargin: true,
          askingMultiple: true,
          sellerFinancing: true,
          publishedAt: true,
          status: true,
        },
      },
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-semibold text-apple-black">
        Saved listings
      </h1>
      <p className="text-apple-gray-500 mt-1">
        Businesses you&apos;ve bookmarked
      </p>

      {saved.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-gray-100">
            <Heart className="h-5 w-5 text-apple-gray-500" />
          </div>
          <p className="mt-4 text-lg font-semibold text-apple-black">
            No saved listings yet
          </p>
          <p className="mt-1 text-sm text-apple-gray-500">
            Browse the marketplace to find opportunities
          </p>
          <Link
            href="/listings"
            className="mt-4 text-sm font-medium text-apple-accent hover:underline"
          >
            Browse listings
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {saved.map((item) => {
            const listing = item.listing;
            const country = COUNTRIES[listing.country];
            return (
              <Link
                key={item.id}
                href={`/listings/${listing.slug}`}
                className="block bg-white border border-apple-gray-100 rounded-xl p-5 hover:border-apple-gray-300 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base font-medium text-apple-black truncate">
                      {listing.title}
                    </h3>
                    <p className="text-sm text-apple-gray-500 mt-1">
                      {listing.sector} &middot;{" "}
                      {country ? `${country.flag} ${country.name}` : listing.country}
                    </p>
                  </div>
                  <Heart size={16} className="fill-red-500 text-red-500 shrink-0 mt-1" />
                </div>
                <p className="text-sm text-apple-gray-700 mt-2 line-clamp-2">
                  {listing.summary}
                </p>
                <div className="mt-3 flex items-center gap-6 text-sm text-apple-gray-500">
                  {listing.revenue != null && (
                    <span>Revenue: {formatCurrency(listing.revenue)}</span>
                  )}
                  {listing.ebitda != null && (
                    <span>EBITDA: {formatCurrency(listing.ebitda)}</span>
                  )}
                  <span>Saved {timeAgo(item.createdAt)}</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
