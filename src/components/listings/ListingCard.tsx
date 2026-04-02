import Link from "next/link";
import type { Listing } from "@/generated/prisma";
import {
  formatCurrency,
  formatPercentage,
  formatMultiple,
  timeAgo,
  COUNTRIES,
} from "@/lib/utils";

type ListingCardProps = {
  listing: Pick<
    Listing,
    | "id"
    | "slug"
    | "title"
    | "summary"
    | "sector"
    | "country"
    | "region"
    | "revenue"
    | "ebitda"
    | "ebitdaMargin"
    | "askingPrice"
    | "askingMultiple"
    | "employeeCount"
    | "highlights"
    | "sellerFinancing"
    | "publishedAt"
    | "status"
  >;
};

export default function ListingCard({ listing }: ListingCardProps) {
  const country = COUNTRIES[listing.country];

  return (
    <Link
      href={`/listings/${listing.slug}`}
      className="block border-b border-apple-gray-100 py-6 hover:bg-apple-gray-100/50 transition-colors"
    >
      {/* Top: title + country */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-apple-black">
          {listing.title}
        </h3>
        {country && (
          <span className="shrink-0 text-sm text-apple-gray-700">
            {country.flag} {country.name}
          </span>
        )}
      </div>

      {/* Middle: summary */}
      <p className="text-apple-gray-700 line-clamp-2 text-sm mt-1">
        {listing.summary}
      </p>

      {/* Bottom: financial metrics */}
      <div className="mt-3 flex items-center gap-6 text-sm text-apple-gray-700">
        {listing.revenue != null && (
          <span>
            Revenue{" "}
            <span className="font-medium text-apple-black">
              {formatCurrency(listing.revenue)}
            </span>
          </span>
        )}
        {listing.ebitda != null && (
          <span>
            EBITDA{" "}
            <span className="font-medium text-apple-black">
              {formatCurrency(listing.ebitda)}
            </span>
          </span>
        )}
        {listing.ebitdaMargin != null && (
          <span>
            <span className="font-medium text-apple-black">
              {formatPercentage(listing.ebitdaMargin)}
            </span>{" "}
            margin
          </span>
        )}
        {listing.askingMultiple != null && (
          <span>
            <span className="font-medium text-apple-black">
              {formatMultiple(listing.askingMultiple)}
            </span>
          </span>
        )}
      </div>

      {/* Tags row */}
      <div className="mt-2 flex items-center gap-2">
        <span className="bg-apple-gray-100 text-apple-gray-700 rounded-full px-2.5 py-0.5 text-xs">
          {listing.sector}
        </span>
        {listing.sellerFinancing && (
          <span className="bg-apple-gray-100 text-apple-gray-700 rounded-full px-2.5 py-0.5 text-xs">
            Seller financing
          </span>
        )}
        {listing.publishedAt && (
          <span className="text-xs text-apple-gray-500">
            {timeAgo(listing.publishedAt)}
          </span>
        )}
      </div>
    </Link>
  );
}
