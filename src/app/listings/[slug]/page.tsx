export const dynamic = 'force-dynamic';

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, BadgeCheck } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  formatCurrency,
  formatPercentage,
  formatMultiple,
  COUNTRIES,
} from "@/lib/utils";
import SaveButton from "@/components/listings/SaveButton";
import InquiryForm from "@/components/listings/InquiryForm";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const listing = await prisma.listing.findUnique({
      where: { slug },
      select: { title: true, summary: true, metaDescription: true, sector: true, country: true },
    });
    if (!listing) return { title: "Listing not found" };
    const country = COUNTRIES[listing.country];
    const description =
      listing.metaDescription || listing.summary || `${listing.title} — ${listing.sector} in ${country?.name ?? listing.country}`;
    return {
      title: `${listing.title} — SearchFundMarket`,
      description,
      openGraph: { title: listing.title, description },
    };
  } catch {
    return { title: "Listing — SearchFundMarket" };
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function ListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let listing: any = null;
  try {
    listing = await prisma.listing.findUnique({
      where: { slug },
      include: {
        seller: {
          select: {
            id: true,
            name: true,
            image: true,
            verificationStatus: true,
            createdAt: true,
            sellerProfile: { select: { slug: true } },
          },
        },
      },
    });
  } catch {
    // DB not available
  }

  if (!listing) notFound();

  // Check if the current user has saved this listing
  const session = await getServerSession(authOptions);
  const userId = (session?.user as Record<string, unknown> | undefined)?.id as string | undefined;
  let isSaved = false;
  if (userId) {
    const saved = await prisma.savedListing.findUnique({
      where: { userId_listingId: { userId, listingId: listing.id } },
    });
    isSaved = !!saved;
  }

  const country = COUNTRIES[listing.country];
  const countryName = country?.name ?? listing.country;
  const countryFlag = country?.flag ?? "";

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* ----------------------------------------------------------------- */}
      {/* Breadcrumb                                                        */}
      {/* ----------------------------------------------------------------- */}
      <nav className="text-sm text-apple-gray-500 flex items-center gap-1.5">
        <Link href="/listings" className="text-apple-accent hover:underline">
          Listings
        </Link>
        <span>/</span>
        <Link
          href={`/listings?sector=${encodeURIComponent(listing.sector)}`}
          className="text-apple-accent hover:underline"
        >
          {listing.sector}
        </Link>
        <span>/</span>
        <Link
          href={`/listings?country=${encodeURIComponent(listing.country)}`}
          className="text-apple-accent hover:underline"
        >
          {countryName}
        </Link>
      </nav>

      {/* ----------------------------------------------------------------- */}
      {/* Title + location + save button                                    */}
      {/* ----------------------------------------------------------------- */}
      <div className="flex items-start justify-between gap-4 mt-4">
        <div>
          <h1 className="text-3xl font-semibold text-apple-black">
            {listing.title}
          </h1>
          <p className="text-apple-gray-700 mt-1">
            {listing.region ? `${listing.region}, ` : ""}
            {countryName} {countryFlag}
          </p>
        </div>
        <SaveButton listingId={listing.id} initialSaved={isSaved} />
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Tags row                                                          */}
      {/* ----------------------------------------------------------------- */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="bg-apple-gray-100 text-apple-gray-700 rounded-full px-3 py-1 text-xs">
          {listing.sector}
        </span>
        {listing.reasonForSale && (
          <span className="bg-apple-gray-100 text-apple-gray-700 rounded-full px-3 py-1 text-xs">
            {listing.reasonForSale}
          </span>
        )}
        {listing.sellerFinancing && (
          <span className="bg-apple-gray-100 text-apple-gray-700 rounded-full px-3 py-1 text-xs">
            Seller financing
          </span>
        )}
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Financial metrics                                                 */}
      {/* ----------------------------------------------------------------- */}
      <div className="mt-8 bg-apple-gray-100 rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <Metric label="Revenue" value={formatCurrency(listing.revenue)} />
          <Metric label="EBITDA" value={formatCurrency(listing.ebitda)} />
          <Metric
            label="EBITDA Margin"
            value={formatPercentage(listing.ebitdaMargin)}
          />
          <Metric
            label="Asking Price"
            value={formatCurrency(listing.askingPrice)}
          />
          <Metric
            label="Multiple"
            value={formatMultiple(listing.askingMultiple)}
          />
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Overview                                                          */}
      {/* ----------------------------------------------------------------- */}
      {listing.description && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-apple-black">Overview</h2>
          <p className="mt-4 text-apple-gray-700 leading-relaxed whitespace-pre-line">
            {listing.description}
          </p>
        </section>
      )}

      {/* ----------------------------------------------------------------- */}
      {/* Key Highlights                                                    */}
      {/* ----------------------------------------------------------------- */}
      {listing.highlights.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-apple-black">
            Key highlights
          </h2>
          <ul className="mt-4 space-y-3">
            {listing.highlights.map((highlight: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-apple-success shrink-0 mt-0.5" />
                <span className="text-apple-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ----------------------------------------------------------------- */}
      {/* Company Details                                                   */}
      {/* ----------------------------------------------------------------- */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-apple-black">
          Company details
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
          {listing.yearFounded && (
            <DetailRow label="Founded" value={String(listing.yearFounded)} />
          )}
          {listing.employeeCount != null && (
            <DetailRow
              label="Employees"
              value={listing.employeeCount.toLocaleString("en-US")}
            />
          )}
          <DetailRow label="Sector" value={listing.sector} />
          <DetailRow
            label="Location"
            value={`${listing.region ? `${listing.region}, ` : ""}${countryName}`}
          />
          {listing.reasonForSale && (
            <DetailRow label="Reason for sale" value={listing.reasonForSale} />
          )}
          {listing.timeline && (
            <DetailRow label="Timeline" value={listing.timeline} />
          )}
          <DetailRow
            label="Seller financing"
            value={listing.sellerFinancing ? "Available" : "Not available"}
          />
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Contact the Seller                                                */}
      {/* ----------------------------------------------------------------- */}
      <section className="mt-12 bg-apple-gray-100 rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-apple-black">
          Interested in this business?
        </h2>
        <div className="mt-4">
          <InquiryForm listingId={listing.id} />
        </div>

        {/* Seller mini card */}
        {(() => {
          const sellerSlug = listing.seller.sellerProfile?.slug;
          const isLoggedIn = !!userId;
          const sellerName = listing.seller.name ?? "Anonymous seller";
          const card = (
            <div className={`mt-8 pt-6 border-t border-apple-gray-300 flex items-center gap-3${isLoggedIn && sellerSlug ? " hover:opacity-80 transition-opacity" : ""}`}>
              {listing.seller.image && isLoggedIn ? (
                <img
                  src={listing.seller.image}
                  alt={sellerName}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-apple-gray-300 flex items-center justify-center text-apple-gray-500 text-sm font-medium">
                  {sellerName.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <div className="flex items-center gap-1.5">
                  {isLoggedIn ? (
                    <span className="text-sm font-medium text-apple-black">
                      {sellerName}
                    </span>
                  ) : (
                    <span className="text-sm font-medium text-apple-black blur-sm select-none" aria-hidden="true">
                      {sellerName}
                    </span>
                  )}
                  {listing.seller.verificationStatus === "VERIFIED" && (
                    <BadgeCheck className="h-4 w-4 text-apple-accent" />
                  )}
                </div>
                <span className="text-xs text-apple-gray-500">
                  Member since{" "}
                  {new Date(listing.seller.createdAt).getFullYear()}
                </span>
              </div>
            </div>
          );
          if (!isLoggedIn) return card;
          return sellerSlug ? (
            <Link href={`/sellers/${sellerSlug}`}>{card}</Link>
          ) : (
            card
          );
        })()}
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-apple-gray-500 uppercase tracking-wider">
        {label}
      </p>
      <p className="text-2xl font-semibold text-apple-black financial mt-1">
        {value}
      </p>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2 border-b border-apple-gray-100">
      <span className="text-sm text-apple-gray-500">{label}</span>
      <span className="text-sm text-apple-black font-medium text-right">
        {value}
      </span>
    </div>
  );
}
