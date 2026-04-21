import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { timeAgo, formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { FileText, Eye, Pencil } from "lucide-react";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "My Listings — Manage Your Businesses on SearchFundMarket",
  description:
    "Manage your business listings on SearchFundMarket. Edit details, track saves and inquiries, publish updates, and connect with qualified search fund buyers.",
};

const STATUS_STYLES: Record<string, string> = {
  DRAFT: "bg-apple-gray-100 text-apple-gray-700",
  UNDER_REVIEW: "bg-yellow-50 text-yellow-700",
  ACTIVE: "bg-green-50 text-green-700",
  UNDER_LOI: "bg-blue-50 text-blue-700",
  SOLD: "bg-purple-50 text-purple-700",
  WITHDRAWN: "bg-red-50 text-red-700",
};

export default async function MyListingsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/auth/signin");

  const userId = (session.user as Record<string, unknown>).id as string;

  const listings = await prisma.listing.findMany({
    where: { sellerId: userId },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      slug: true,
      title: true,
      sector: true,
      country: true,
      status: true,
      ebitda: true,
      revenue: true,
      createdAt: true,
      _count: {
        select: { savedBy: true, inquiries: true },
      },
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-apple-black">
            My listings
          </h1>
          <p className="text-apple-gray-500 mt-1">
            Manage your business listings
          </p>
        </div>
        <Button href="/listings/new">Create listing</Button>
      </div>

      {listings.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-gray-100">
            <FileText className="h-5 w-5 text-apple-gray-500" />
          </div>
          <p className="mt-4 text-lg font-semibold text-apple-black">
            No listings yet
          </p>
          <p className="mt-1 text-sm text-apple-gray-500">
            Create your first listing to reach qualified buyers
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white border border-apple-gray-100 rounded-xl p-5 hover:border-apple-gray-300 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-base font-medium text-apple-black truncate">
                    {listing.title}
                  </h3>
                  <p className="text-sm text-apple-gray-500 mt-1">
                    {listing.sector} &middot; {listing.country}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      STATUS_STYLES[listing.status] ?? STATUS_STYLES.DRAFT
                    }`}
                  >
                    {listing.status.replace(/_/g, " ")}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-6 text-sm text-apple-gray-500">
                {listing.revenue != null && (
                  <span>Revenue: {formatCurrency(listing.revenue)}</span>
                )}
                {listing.ebitda != null && (
                  <span>EBITDA: {formatCurrency(listing.ebitda)}</span>
                )}
                <span>{listing._count.savedBy} saves</span>
                <span>{listing._count.inquiries} inquiries</span>
                <span>{timeAgo(listing.createdAt)}</span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Link
                  href={`/listings/${listing.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-apple-gray-300 px-4 py-1.5 text-xs font-medium text-apple-gray-700 hover:bg-apple-gray-100 transition-colors"
                >
                  <Eye size={14} />
                  View
                </Link>
                <Link
                  href={`/dashboard/my-listings/${listing.id}/edit`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-apple-accent text-white px-4 py-1.5 text-xs font-medium hover:bg-apple-accent-hover transition-colors"
                >
                  <Pencil size={14} />
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
