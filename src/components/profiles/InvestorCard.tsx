import Link from "next/link";
import { Building2 } from "lucide-react";
import type { InvestorWithUser } from "@/lib/types";
import { COUNTRIES } from "@/lib/utils";

type InvestorCardProps = {
  investor: InvestorWithUser;
};

const INVESTOR_TYPE_LABELS: Record<string, string> = {
  EX_SEARCHER: "Ex-searcher",
  FAMILY_OFFICE: "Family Office",
  INSTITUTIONAL: "Institutional",
  ANGEL: "Angel",
  ACCELERATOR: "Accelerator",
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

export default function InvestorCard({ investor }: InvestorCardProps) {
  const { user } = investor;
  const displayName = investor.firmName || user.name || "Anonymous Investor";
  const initials = getInitials(displayName);
  const typeLabel = INVESTOR_TYPE_LABELS[investor.investorType] ?? investor.investorType;

  const ticketRange =
    investor.ticketSizeMin != null || investor.ticketSizeMax != null
      ? formatRange(investor.ticketSizeMin, investor.ticketSizeMax)
      : null;

  const targetCountryEntries = investor.targetCountries
    .map((code) => COUNTRIES[code])
    .filter(Boolean);

  return (
    <Link
      href={`/investors/${investor.slug}`}
      className="block bg-white rounded-xl p-6 hover:bg-apple-gray-100/50 transition-colors"
    >
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-apple-gray-100 flex items-center justify-center">
        {initials ? (
          <span className="text-sm font-semibold text-apple-gray-700">
            {initials}
          </span>
        ) : (
          <Building2 className="h-5 w-5 text-apple-gray-500" />
        )}
      </div>

      {/* Firm name / user name */}
      <p className="text-base font-semibold text-apple-black mt-3">
        {displayName}
      </p>

      {/* Investor type badge */}
      <span className="inline-block mt-1 bg-apple-gray-100 rounded-full px-2.5 py-0.5 text-xs text-apple-gray-700">
        {typeLabel}
      </span>

      {/* Headline / investment thesis snippet */}
      {(investor.headline || investor.investmentThesis) && (
        <p className="text-sm text-apple-gray-700 mt-2 line-clamp-3">
          {investor.headline || investor.investmentThesis}
        </p>
      )}

      {/* Target countries with flags */}
      {targetCountryEntries.length > 0 && (
        <p className="text-sm text-apple-gray-500 mt-3">
          {targetCountryEntries.map((c) => c.flag).join(" ")}{" "}
          {targetCountryEntries.map((c) => c.name).join(", ")}
        </p>
      )}

      {/* Ticket size */}
      {ticketRange && (
        <p className="text-sm text-apple-gray-700 mt-1">
          Ticket{" "}
          <span className="font-medium text-apple-black">{ticketRange}</span>
        </p>
      )}

      {/* Deals invested */}
      {investor.totalDealsInvested != null && investor.totalDealsInvested > 0 && (
        <p className="text-sm text-apple-gray-500 mt-1">
          {investor.totalDealsInvested}{" "}
          {investor.totalDealsInvested === 1 ? "deal" : "deals"} invested
        </p>
      )}

      {/* Value-add tags */}
      {investor.valueAdd.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {investor.valueAdd.slice(0, 3).map((item) => (
            <span
              key={item}
              className="bg-apple-gray-100 rounded-full px-2.5 py-0.5 text-xs text-apple-gray-700"
            >
              {item}
            </span>
          ))}
          {investor.valueAdd.length > 3 && (
            <span className="text-xs text-apple-gray-500">
              +{investor.valueAdd.length - 3} more
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
