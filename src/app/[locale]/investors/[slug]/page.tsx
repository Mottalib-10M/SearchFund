export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Building2, BadgeCheck, MapPin, Check } from "lucide-react";
import BackButton from "@/components/ui/BackButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { COUNTRIES } from "@/lib/utils";
import ConnectButton from "@/components/profiles/ConnectButton";

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
            email: true,
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
    if (investor && !investor.isPublic) return null;
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
  const description =
    investor.headline ||
    investor.investmentThesis?.slice(0, 160) ||
    `${name} is a search fund investor on SearchFundMarket.`;
  return {
    title: `${name} - Search Fund Investor | SearchFundMarket`,
    description,
    openGraph: {
      title: `${name} - Search Fund Investor on SearchFundMarket`,
      description: investor.headline || `Explore ${name}'s investment criteria and value-add on SearchFundMarket.`,
    },
  };
}

export default async function InvestorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const investor = await getInvestor(slug);

  if (!investor) {
    notFound();
  }

  const { user } = investor;
  const isSample = user.email?.endsWith("@example.com") ?? false;
  const displayName = investor.firmName || user.name || "Anonymous Investor";
  const initials = getInitials(displayName);
  const country = user.country ? COUNTRIES[user.country] : null;
  const typeLabel = INVESTOR_TYPE_LABELS[investor.investorType] ?? investor.investorType;

  const targetCountryEntries = investor.targetCountries
    .map((code) => COUNTRIES[code])
    .filter(Boolean);

  const ticketRange = formatRange(investor.ticketSizeMin, investor.ticketSizeMax);
  const ebitdaRange = formatRange(investor.preferredEbitdaMin, investor.preferredEbitdaMax);

  // Check connection status
  const session = await getServerSession(authOptions);
  const currentUserId = (session?.user as Record<string, unknown> | undefined)?.id as string | undefined;
  let connectionStatus: "PENDING" | "ACCEPTED" | "DECLINED" | null = null;
  if (currentUserId && currentUserId !== user.id) {
    const conn = await prisma.connection.findFirst({
      where: {
        OR: [
          { requesterId: currentUserId, receiverId: user.id },
          { requesterId: user.id, receiverId: currentUserId },
        ],
      },
      select: { status: true },
    });
    connectionStatus = (conn?.status ?? null) as typeof connectionStatus;
  }

  // Person/Organization JSON-LD for real profiles only
  const profileJsonLd = !isSample && (user.name || investor.firmName) ? {
    "@context": "https://schema.org",
    "@type": investor.firmName ? "Organization" : "Person",
    name: investor.firmName || user.name,
    ...(investor.firmName && user.name ? { founder: { "@type": "Person", name: user.name } } : {}),
    ...(user.linkedinUrl ? { sameAs: [user.linkedinUrl] } : {}),
    ...(investor.firmWebsite ? { url: investor.firmWebsite } : {}),
  } : null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {profileJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />
      )}
      <BackButton fallbackHref="/investors" label="Back" />

      {/* Sample badge */}
      {isSample && (
        <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 px-4 py-2">
          <p className="text-xs text-amber-800">Sample profile - This is a representative example of a search fund investor, not a real individual or firm.</p>
        </div>
      )}

      <div className="mt-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full bg-apple-gray-100 flex items-center justify-center">
          {initials ? (
            <span className="text-lg sm:text-xl font-semibold text-apple-gray-700">{initials}</span>
          ) : (
            <Building2 className="h-8 w-8 text-apple-gray-500" />
          )}
        </div>

        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-semibold text-apple-black tracking-tight">
            {displayName}
            {user.verificationStatus === "VERIFIED" && (
              <BadgeCheck className="inline h-5 w-5 text-apple-accent ml-1.5 align-text-bottom" />
            )}
          </h1>

          {investor.firmName && user.name && (
            <p className="text-apple-gray-700 mt-1">{user.name}</p>
          )}

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
                <span>{country.flag} {country.name}</span>
              )}
            </p>
          )}

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

      {investor.headline && (
        <p className="mt-6 text-lg text-apple-gray-700">{investor.headline}</p>
      )}

      {investor.investmentThesis && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-apple-black">Investment Thesis</h2>
          <p className="mt-3 text-apple-gray-700 leading-relaxed whitespace-pre-line">
            {investor.investmentThesis}
          </p>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-apple-black">Investment Criteria</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-medium text-apple-gray-500">Target Sectors</p>
            {investor.targetSectors.length > 0 ? (
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {investor.targetSectors.map((sector) => (
                  <span key={sector} className="bg-apple-gray-100 rounded-full px-2.5 py-0.5 text-sm text-apple-gray-700">
                    {sector}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-1 text-sm text-apple-gray-700">Sector agnostic</p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium text-apple-gray-500">Target Countries</p>
            {targetCountryEntries.length > 0 ? (
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {targetCountryEntries.map((c) => (
                  <span key={c.name} className="text-sm text-apple-gray-700">
                    {c.flag} {c.name}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-1 text-sm text-apple-gray-700">Geography agnostic</p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium text-apple-gray-500">Preferred EBITDA</p>
            <p className="mt-1 text-sm text-apple-black font-medium">{ebitdaRange}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-apple-gray-500">Ticket Size</p>
            <p className="mt-1 text-sm text-apple-black font-medium">{ticketRange}</p>
          </div>

          {investor.preferredSearchTypes.length > 0 && (
            <div>
              <p className="text-sm font-medium text-apple-gray-500">Preferred Search Types</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {investor.preferredSearchTypes.map((type) => (
                  <span key={type} className="bg-apple-gray-100 rounded-full px-2.5 py-0.5 text-sm text-apple-gray-700">
                    {SEARCH_TYPE_LABELS[type] ?? type}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {investor.totalDealsInvested != null && investor.totalDealsInvested > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-apple-black">Track Record</h2>
          <div className="mt-4 rounded-xl bg-apple-gray-100 p-6">
            <p className="text-3xl font-semibold text-apple-black">{investor.totalDealsInvested}</p>
            <p className="text-sm text-apple-gray-500 mt-1">
              {investor.totalDealsInvested === 1 ? "deal invested" : "deals invested"}
            </p>
          </div>
        </section>
      )}

      {investor.valueAdd.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-apple-black">Value Add</h2>
          <ul className="mt-4 space-y-2">
            {investor.valueAdd.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-apple-gray-700">
                <Check className="h-4 w-4 text-apple-success shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10 border-t border-apple-gray-300 pt-10">
        <h2 className="text-xl font-semibold text-apple-black">Get in Touch</h2>
        <p className="mt-2 text-sm text-apple-gray-700">
          Interested in connecting with {displayName}?
        </p>
        <div className="mt-4 flex items-center gap-3">
          <ConnectButton
            userId={user.id}
            userName={displayName}
            initialStatus={connectionStatus}
          />
          {user.linkedinUrl && (
            <a
              href={user.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-apple-gray-300 text-apple-gray-700 text-sm font-medium rounded-full px-6 py-2.5 hover:bg-apple-gray-100 transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
