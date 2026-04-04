export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, MapPin, ArrowLeft } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { COUNTRIES } from "@/lib/utils";
import ConnectButton from "@/components/profiles/ConnectButton";
import ListingCard from "@/components/listings/ListingCard";

type PageProps = {
  params: Promise<{ slug: string }>;
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

async function getSeller(slug: string) {
  try {
    const seller = await prisma.sellerProfile.findUnique({
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
            listings: {
              where: { status: "ACTIVE" },
              select: {
                id: true,
                slug: true,
                title: true,
                summary: true,
                sector: true,
                country: true,
                region: true,
                revenue: true,
                ebitda: true,
                ebitdaMargin: true,
                askingPrice: true,
                askingMultiple: true,
                employeeCount: true,
                highlights: true,
                sellerFinancing: true,
                publishedAt: true,
                status: true,
              },
              orderBy: { publishedAt: "desc" },
            },
          },
        },
      },
    });
    return seller;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const seller = await getSeller(slug);

  if (!seller || !seller.isPublic) {
    return { title: "Seller Not Found — SearchFundMarket" };
  }

  const name = seller.user.name || "Seller";
  return {
    title: `${name} — Business Seller — SearchFundMarket`,
    description:
      seller.headline ||
      `${name} is a business seller on SearchFundMarket.`,
  };
}

export default async function SellerProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const seller = await getSeller(slug);

  if (!seller || !seller.isPublic) {
    notFound();
  }

  const { user } = seller;
  const displayName = user.name || "Anonymous Seller";
  const initials = getInitials(displayName);
  const country = user.country ? COUNTRIES[user.country] : null;

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

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/listings"
        className="inline-flex items-center gap-1.5 text-sm text-apple-accent hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        All listings
      </Link>

      {/* Header */}
      <div className="mt-8 flex items-start gap-6">
        <div className="w-20 h-20 shrink-0 rounded-full bg-apple-gray-100 flex items-center justify-center overflow-hidden">
          {user.image ? (
            <img
              src={user.image}
              alt={displayName}
              className="w-full h-full object-cover"
            />
          ) : initials ? (
            <span className="text-xl font-semibold text-apple-gray-700">{initials}</span>
          ) : null}
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

          {seller.companyRole && (
            <div className="mt-2">
              <span className="inline-block bg-apple-gray-100 text-apple-gray-700 rounded-full px-3 py-1 text-xs font-medium">
                {seller.companyRole}
              </span>
            </div>
          )}

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
        </div>
      </div>

      {seller.headline && (
        <p className="mt-6 text-lg text-apple-gray-700">{seller.headline}</p>
      )}

      {/* About */}
      {user.bio && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-apple-black">About</h2>
          <p className="mt-3 text-apple-gray-700 leading-relaxed whitespace-pre-line">
            {user.bio}
          </p>
        </section>
      )}

      {/* Active Listings */}
      {user.listings.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-apple-black">
            Active Listings
          </h2>
          <div className="mt-4 divide-y divide-apple-gray-100">
            {user.listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>
      )}

      {/* Get in Touch */}
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
