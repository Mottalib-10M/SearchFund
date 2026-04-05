export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { User, BadgeCheck, MapPin } from "lucide-react";
import BackButton from "@/components/ui/BackButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { COUNTRIES, formatCurrency } from "@/lib/utils";
import ConnectButton from "@/components/profiles/ConnectButton";
import DocumentList from "@/components/profile/DocumentList";

type PageProps = {
  params: Promise<{ slug: string }>;
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

async function getSearcher(slug: string) {
  try {
    const searcher = await prisma.searcherProfile.findUnique({
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
        documents: {
          select: {
            id: true,
            label: true,
            fileName: true,
            fileSize: true,
            visibility: true,
          },
        },
      },
    });
    return searcher;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const searcher = await getSearcher(slug);

  if (!searcher) {
    return { title: "Searcher Not Found \u2014 SearchFundMarket" };
  }

  const name = searcher.user.name ?? "Searcher";
  const description =
    searcher.headline ||
    searcher.thesisDescription?.slice(0, 160) ||
    `${name} is a search fund entrepreneur on SearchFundMarket.`;
  return {
    title: `${name} — Search Fund Entrepreneur | SearchFundMarket`,
    description,
    openGraph: {
      title: `${name} — Search Fund Entrepreneur on SearchFundMarket`,
      description: searcher.headline || `Discover ${name}'s search thesis and acquisition criteria on SearchFundMarket.`,
    },
  };
}

export default async function SearcherProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const searcher = await getSearcher(slug);

  if (!searcher) {
    notFound();
  }

  const { user } = searcher;
  const initials = getInitials(user.name);
  const country = user.country ? COUNTRIES[user.country] : null;
  const statusLabel = SEARCH_STATUS_LABELS[searcher.searchStatus] ?? searcher.searchStatus;
  const typeLabel = SEARCH_TYPE_LABELS[searcher.searchType] ?? searcher.searchType;

  const targetCountryEntries = searcher.targetCountries
    .map((code) => COUNTRIES[code])
    .filter(Boolean);

  const ebitdaRange = formatRange(searcher.targetEbitdaMin, searcher.targetEbitdaMax);
  const revenueRange = formatRange(searcher.targetRevenueMin, searcher.targetRevenueMax);

  // Check connection status and viewer role
  const session = await getServerSession(authOptions);
  const currentUserId = (session?.user as Record<string, unknown> | undefined)?.id as string | undefined;
  const currentUserRole = (session?.user as Record<string, unknown> | undefined)?.role as string | null ?? null;
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

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <BackButton fallbackHref="/searchers" label="Back" />

      {/* Header */}
      <div className="mt-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        {/* Avatar */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full bg-apple-gray-100 flex items-center justify-center">
          {initials ? (
            <span className="text-lg sm:text-xl font-semibold text-apple-gray-700">
              {initials}
            </span>
          ) : (
            <User className="h-8 w-8 text-apple-gray-500" />
          )}
        </div>

        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-semibold text-apple-black tracking-tight">
            {user.name ?? "Anonymous Searcher"}
            {user.verificationStatus === "VERIFIED" && (
              <BadgeCheck className="inline h-5 w-5 text-apple-accent ml-1.5 align-text-bottom" />
            )}
          </h1>

          {searcher.mbaSchool && (
            <p className="text-apple-gray-500 mt-1">{searcher.mbaSchool}</p>
          )}

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

          {/* Status and type badges */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="bg-apple-gray-100 rounded-full px-3 py-1 text-xs font-medium text-apple-gray-700">
              {typeLabel}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                searcher.searchStatus === "ACTIVELY_SEARCHING"
                  ? "bg-apple-success/10 text-apple-success"
                  : "bg-apple-gray-100 text-apple-gray-500"
              }`}
            >
              {statusLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Bio */}
      {user.bio && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-apple-black">About</h2>
          <p className="mt-3 text-apple-gray-700 leading-relaxed whitespace-pre-line">
            {user.bio}
          </p>
        </section>
      )}

      {/* Search Criteria grid */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-apple-black">
          Search Criteria
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-medium text-apple-gray-500">
              Target Sectors
            </p>
            {searcher.targetSectors.length > 0 ? (
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {searcher.targetSectors.map((sector) => (
                  <span
                    key={sector}
                    className="bg-apple-gray-100 rounded-full px-2.5 py-0.5 text-sm text-apple-gray-700"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-1 text-sm text-apple-gray-700">Not specified</p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium text-apple-gray-500">
              Target Countries
            </p>
            {targetCountryEntries.length > 0 ? (
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {targetCountryEntries.map((c) => (
                  <span key={c.name} className="text-sm text-apple-gray-700">
                    {c.flag} {c.name}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-1 text-sm text-apple-gray-700">Not specified</p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium text-apple-gray-500">Target EBITDA</p>
            <p className="mt-1 text-sm text-apple-black font-medium">{ebitdaRange}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-apple-gray-500">Target Revenue</p>
            <p className="mt-1 text-sm text-apple-black font-medium">{revenueRange}</p>
          </div>

          {searcher.acquisitionTimeline && (
            <div>
              <p className="text-sm font-medium text-apple-gray-500">Acquisition Timeline</p>
              <p className="mt-1 text-sm text-apple-gray-700">{searcher.acquisitionTimeline}</p>
            </div>
          )}
        </div>
      </section>

      {/* Seeking Capital */}
      {searcher.seekingCapital && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-apple-black">Seeking Capital</h2>
          <div className="mt-4 rounded-xl bg-apple-gray-100 p-6">
            <p className="text-sm text-apple-gray-700">
              This searcher is currently seeking investment capital.
            </p>
            {searcher.capitalNeeded != null && (
              <p className="mt-2 text-lg font-semibold text-apple-black">
                {formatCurrency(searcher.capitalNeeded)} needed
              </p>
            )}
          </div>
        </section>
      )}

      {/* Documents */}
      <DocumentList
        documents={searcher.documents}
        connectionStatus={connectionStatus}
        isOwner={currentUserId === user.id}
        viewerRole={currentUserRole}
      />

      {/* Contact section */}
      <section className="mt-10 border-t border-apple-gray-300 pt-10">
        <h2 className="text-xl font-semibold text-apple-black">Get in Touch</h2>
        <p className="mt-2 text-sm text-apple-gray-700">
          Interested in connecting with {user.name ?? "this searcher"}?
        </p>
        <div className="mt-4 flex items-center gap-3">
          <ConnectButton
            userId={user.id}
            userName={user.name ?? "Searcher"}
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
