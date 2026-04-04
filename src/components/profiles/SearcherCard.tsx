import Link from "next/link";
import { User } from "lucide-react";
import type { SearcherWithUser } from "@/lib/types";
import { COUNTRIES } from "@/lib/utils";

type SearcherCardProps = {
  searcher: SearcherWithUser;
};

const SEARCH_STATUS_LABELS: Record<string, string> = {
  PREPARING: "Preparing",
  RAISING_CAPITAL: "Raising Capital",
  ACTIVELY_SEARCHING: "Actively Searching",
  LOI_SIGNED: "LOI Signed",
  ACQUIRED: "Acquired",
  OPERATING: "Operating",
  EXITED: "Exited",
};

const SEARCH_TYPE_LABELS: Record<string, string> = {
  TRADITIONAL: "Traditional",
  SELF_FUNDED: "Self-funded",
  ACCELERATOR: "Accelerator",
  INDEPENDENT_SPONSOR: "Independent Sponsor",
};

function getInitials(name: string | null | undefined): string {
  if (!name) return "";
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function SearcherCard({ searcher }: SearcherCardProps) {
  const { user } = searcher;
  const country = user.country ? COUNTRIES[user.country] : null;
  const initials = getInitials(user.name);
  const statusLabel = SEARCH_STATUS_LABELS[searcher.searchStatus] ?? searcher.searchStatus;
  const typeLabel = SEARCH_TYPE_LABELS[searcher.searchType] ?? searcher.searchType;

  const ebitdaRange =
    searcher.targetEbitdaMin != null || searcher.targetEbitdaMax != null
      ? formatRange(searcher.targetEbitdaMin, searcher.targetEbitdaMax)
      : null;

  return (
    <Link
      href={`/searchers/${searcher.slug}`}
      className="block bg-white rounded-xl p-6 hover:bg-apple-gray-100/50 transition-colors"
    >
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-apple-gray-100 flex items-center justify-center">
        {initials ? (
          <span className="text-sm font-semibold text-apple-gray-700">
            {initials}
          </span>
        ) : (
          <User className="h-5 w-5 text-apple-gray-500" />
        )}
      </div>

      {/* Name */}
      <p className="text-base font-semibold text-apple-black mt-3">
        {user.name ?? "Anonymous Searcher"}
      </p>

      {/* MBA School */}
      {searcher.mbaSchool && (
        <p className="text-sm text-apple-gray-500">{searcher.mbaSchool}</p>
      )}

      {/* Headline / bio snippet */}
      {(searcher.headline || user.bio) && (
        <p className="text-sm text-apple-gray-700 mt-2 line-clamp-3">
          {searcher.headline || user.bio}
        </p>
      )}

      {/* Country */}
      {country && (
        <p className="text-sm text-apple-gray-500 mt-3">
          {country.flag} {country.name}
        </p>
      )}

      {/* EBITDA range */}
      {ebitdaRange && (
        <p className="text-sm text-apple-gray-700 mt-1">
          Target EBITDA{" "}
          <span className="font-medium text-apple-black">{ebitdaRange}</span>
        </p>
      )}

      {/* Badges */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="bg-apple-gray-100 rounded-full px-2.5 py-0.5 text-xs text-apple-gray-700">
          {typeLabel}
        </span>
        <span
          className={`text-xs font-medium ${
            searcher.searchStatus === "ACTIVELY_SEARCHING"
              ? "text-apple-success"
              : "text-apple-gray-500"
          }`}
        >
          {statusLabel}
        </span>
      </div>
    </Link>
  );
}

function formatRange(
  min: number | null | undefined,
  max: number | null | undefined
): string {
  const fmt = (v: number) => (v >= 1000 ? `\u20AC${(v / 1000).toFixed(1)}M` : `\u20AC${v}K`);
  if (min != null && max != null) return `${fmt(min)} \u2013 ${fmt(max)}`;
  if (min != null) return `${fmt(min)}+`;
  if (max != null) return `Up to ${fmt(max)}`;
  return "";
}
