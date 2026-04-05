"use client";

import { useState, useEffect, use } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CreateListingForm from "@/components/listings/CreateListingForm";

export default function EditListingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchListing() {
      try {
        const res = await fetch(`/api/listings/${id}`);
        if (!res.ok) {
          setError("Listing not found");
          return;
        }
        const data = await res.json();
        setListing(data.listing);
      } catch {
        setError("Failed to load listing");
      } finally {
        setLoading(false);
      }
    }
    fetchListing();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto">
        <p className="text-sm text-apple-gray-500">Loading listing...</p>
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div className="max-w-2xl mx-auto">
        <p className="text-sm text-red-500">{error ?? "Listing not found"}</p>
        <Link
          href="/dashboard/my-listings"
          className="text-sm text-apple-accent hover:underline mt-2 inline-block"
        >
          Back to my listings
        </Link>
      </div>
    );
  }

  const initialData = {
    title: (listing.title as string) ?? "",
    sector: (listing.sector as string) ?? "",
    country: (listing.country as string) ?? "",
    region: (listing.region as string) ?? "",
    yearFounded: listing.yearFounded != null ? String(listing.yearFounded) : "",
    employeeCount: listing.employeeCount != null ? String(listing.employeeCount) : "",
    summary: (listing.summary as string) ?? "",
    revenue: listing.revenue != null ? String(listing.revenue) : "",
    ebitda: listing.ebitda != null ? String(listing.ebitda) : "",
    askingPrice: listing.askingPrice != null ? String(listing.askingPrice) : "",
    sellerFinancing: (listing.sellerFinancing as boolean) ?? false,
    description: (listing.description as string) ?? "",
    highlights: Array.isArray(listing.highlights) && listing.highlights.length > 0
      ? (listing.highlights as string[])
      : [""],
    reasonForSale: (listing.reasonForSale as string) ?? "",
    timeline: (listing.timeline as string) ?? "",
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/dashboard/my-listings"
          className="inline-flex items-center gap-2 text-sm text-apple-accent hover:underline"
        >
          <ArrowLeft size={16} />
          Back to my listings
        </Link>
      </div>

      <div className="max-w-2xl mx-auto text-center mb-4 mt-6">
        <h1 className="text-3xl font-semibold text-apple-black">
          Edit listing
        </h1>
        <p className="mt-2 text-apple-gray-700">
          Update your business listing
        </p>
      </div>

      <CreateListingForm initialData={initialData} listingId={id} />
    </div>
  );
}
