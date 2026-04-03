export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Building2, BadgeCheck, MapPin, ArrowLeft, Check } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { COUNTRIES, formatCurrency } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const INVESTOR_TYPE_LABELS: Record<string, string> = {
  EX_SEARCHER: "Ex-searcher",
  FAMILY_OFFICE: "Family Office",
  INSTITUTIONAL: "Institutional",
  ANGEL: "Angel",
  ACCELERATOR: "Accelerator",
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

function formatRange(
  min: number | null | undefined,
  max: number | null | undefined
): string {
  const fmt = (v: number) => (v >= 1000 ? `\u20AC${(v / 1000).toFixed(1)}M` : `\u20AC${v}K`);
  if (min != null && max != null) return `${fmt(min)} \u2013 ${fmt(max)}`;
  if (min != null) return `${fmt(min)}+`;
  if (max != null) return `Up to ${fmt(max)}`;
  return "N/A";
}

async function getInvestor(slug: string) {
  try {
    const investor = await prisma.investorProfile.findUnique({
      where: { slug },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            country: true,
            city: true,
            bio: true,
            linkedinUrl: true,
            verificationStatus: true,
          },
        },
      },
    });
    return investor;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const investor = await getInvestor(slug);

  if (!investor) {
    return { title: "Investor Not Found \u2014 SearchFundMarket" };
  }

  const name = investor.firmName || investor.user.name || "Investor";
  return {
    title: `${name} \u2014 Search Fund Investor \u2014 SearchFundMarket`,
    description:
      investor.headline ||
      investor.investmentThesis?.slice(0, 160) ||
      `${name} is a search fund investor on SearchFundMarket.`,
  };
}

export default async function InvestorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const investor = await getInvestor(slug);

  if (!investor) {
    notFound();
  }

  const { user } = investor;
  const displayName = investor.firmName || user.name || "Anonymous Investor";
  const initials = getInitials(displayName);
  const country = user.country ? COUNTRIES[user.country] : null;
  const typeLabel = INVESTOR_TYPE_LABELS[investor.investorType] ?? investor.investorType;

  const targetCountryEntries = investor.targetCountries
    .map((code) => COUNTRIES[code])
    .filter(Boolean);

  const ticketRange = formatRange(investor.ticketSizeMin, investor.ticketSizeMax);
  const ebitdaRange = formatRange(investor.preferredEbitdaMin, investor.preferredEbitdaMax);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back link */}
      <Link
        href="/investors"
        className="inline-flex items-center gap-1.5 text-sm text-apple-accent hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        All investors
      </Link>

      {/* Header */}
      <div className="mt-8 flex items-start gap-6">
        {/* Avatar */}
        <div className="w-20 h-20 shrink-0 rounded-full bg-apple-gray-100 flex items-center justify-center">
          {initials ? (
            <span className="text-xl font-semibold text-apple-gray-700">
              {initials}
            </span>
          ) : (
            <Building2 className="h-8 w-8 text-apple-gray-500" />
          )}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-semibold text-apple-black tracking-tight">
              {displayName}
            </h1>
            {user.verificationStatus === "VERIFIED" && (
              <BadgeCheck className="h-5 w-5 text-apple-accent shrink-0" />
            )}
          </div>

          {/* Show user name if firm name is displayed */}
          {investor.firmName && user.name && (
            <p className="text-apple-gray-700 mt-1">{user.name}</p>
          )}

          {/* Investor type badge */}
          <div className="mt-2">
            <span className="inline-block bg-apple-investor/10 text-apple-investor rounded-full px-3 py-1 text-xs font-medium">
              {typeLabel}
            </span>
          </div>

          {(country || user.city) && (
            <p className="flex items-center gap-1.5 text-sm text-apple-gray-500 mt-2">
              <MapPin className="h-4 w-4" />
              {user.city && <span>{user.city}</span>}
              {user.city && country && <span>,</span>}
              {country && (
                <span>
                  {country.flag} {country.name}
                </span>
              )}
            </p>
          )}

          {/* Firm website */}
          {investor.firmWebsite && (
            <a
              href={investor.firmWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-apple-accent hover:underline"
            >
              {investor.firmWebsite.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </a>
          )}
        </div>
      </div>

      {/* Headline */}
      {investor.headline && (
        <p className="mt-6 text-lg text-apple-gray-700">{investor.headline}</p>
      )}

      {/* Investment Thesis */}
      {investor.investmentThesis && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-apple-black">
            Investment Thesis
          </h2>
          <p className="mt-3 text-apple-gray-700 leading-relaxed whitespace-pre-line">
            {investor.investmentThesis}
          </p>
        </section>
      )}

      {/* Investment Criteria grid */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-apple-black">
          Investment Criteria
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Target sectors */}
          <div>
            <p className="text-sm font-medium text-apple-gray-500">
              Target Sectors
            </p>
            {investor.targetSectors.length > 0 ? (
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {investor.targetSectors.map((sector) => (
                  <span
                    key={sector}
                    className="bg-apple-gray-100 rounded-full px-2.5 py-0.5 text-sm text-apple-gray-700"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-1 text-sm text-apple-gray-700">Sector agnostic</p>
            )}
          </div>

          {/* Target countries */}
          <div>
            <p className="text-sm font-medium text-apple-gray-500">
              Target Countries
            </p>
            {targetCountryEntries.length > 0 ? (
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {targetCountryEntries.map((c) => (
                  <span
                    key={c.name}
                    className="text-sm text-apple-gray-700"
                  >
                    {c.flag} {c.name}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-1 text-sm text-apple-gray-700">Geography agnostic</p>
            )}
          </div>

          {/* EBITDA range */}
          <div>
            <p className="text-sm font-medium text-apple-gray-500">
              Preferred EBITDA
            </p>
            <p className="mt-1 text-sm text-apple-black font-medium">
              {ebitdaRange}
            </p>
          </div>

          {/* Ticket size */}
          <div>
            <p className="text-sm font-medium text-apple-gray-500">
              Ticket Size
            </p>
            <p className="mt-1 text-sm text-apple-black font-medium">
              {ticketRange}
            </p>
          </div>

          {/* Preferred search types */}
          {investor.preferredSearchTypes.length > 0 && (
            <div>
              <p className="text-sm font-medium text-apple-gray-500">
                Preferred Search Types
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {investor.preferredSearchTypes.map((type) => (
                  <span
                    key={type}
                    className="bg-apple-gray-100 rounded-full px-2.5 py-0.5 text-sm text-apple-gray-700"
                  >
                    {SEARCH_TYPE_LABELS[type] ?? type}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Track Record */}
      {investor.totalDealsInvested != null && investor.totalDealsInvested > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-apple-black">Track Record</h2>
          <div className="mt-4 rounded-xl bg-apple-gray-100 p-6">
            <p className="text-3xl font-semibold text-apple-black">
              {investor.totalDealsInvested}
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">
              {investor.totalDealsInvested === 1
                ? "deal invested"
                : "deals invested"}
            </p>
          </div>
        </section>
      )}

      {/* Value Add */}
      {investor.valueAdd.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-apple-black">Value Add</h2>
          <ul className="mt-4 space-y-2">
            {investor.valueAdd.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm text-apple-gray-700"
              >
                <Check className="h-4 w-4 text-apple-success shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Contact section */}
      <section className="mt-10 border-t border-apple-gray-300 pt-10">
        <h2 className="text-xl font-semibold text-apple-black">Get in Touch</h2>
        <p className="mt-2 text-sm text-apple-gray-700">
          Interested in connecting with {displayName}? Sign in to send a connection request.
        </p>
        <div className="mt-4 flex items-center gap-3">
          <Link
            href="/auth/signin"
            className="inline-flex items-center justify-center bg-apple-accent text-white text-sm font-medium rounded-full px-6 py-2.5 hover:bg-apple-accent-hover transition-colors"
          >
            Connect with {(investor.firmName || user.name)?.split(" ")[0] ?? "Investor"}
          </Link>
          {user.linkedinUrl && (
            <a
              href={user.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-apple-gray-300 text-apple-gray-700 text-sm font-medium rounded-full px-6 py-2.5 hover:bg-apple-gray-100 transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
