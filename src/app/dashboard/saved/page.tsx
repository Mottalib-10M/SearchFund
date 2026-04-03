import type { Metadata } from "next";
import Link from "next/link";
import { Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Saved Listings — SearchFundMarket",
  description: "Your saved and bookmarked business listings.",
};

export default function SavedPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-apple-black">
        Saved listings
      </h1>
      <p className="text-apple-gray-500 mt-1">
        Businesses you&apos;ve bookmarked
      </p>

      {/* Empty state */}
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
    </div>
  );
}
