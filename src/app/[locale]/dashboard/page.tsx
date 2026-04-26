import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { timeAgo } from "@/lib/utils";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Your Dashboard - SearchFundMarket Acquisition Platform",
  description:
    "Your SearchFundMarket dashboard. Track saved listings, manage business listings, monitor messages and connections, and stay updated on ETA opportunities.",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/auth/signin");

  const userId = (session.user as Record<string, unknown>).id as string;
  const userRole = (session.user as Record<string, unknown>).role as string;
  const userName = session.user.name ?? "there";

  // Shared queries
  const [connectionCount, pendingConnections, unreadMessages, notifications] =
    await Promise.all([
      prisma.connection.count({
        where: {
          OR: [
            { requesterId: userId, status: "ACCEPTED" },
            { receiverId: userId, status: "ACCEPTED" },
          ],
        },
      }),
      prisma.connection.count({
        where: { receiverId: userId, status: "PENDING" },
      }),
      prisma.message.count({
        where: { receiverId: userId, readAt: null },
      }),
      prisma.notification.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 5,
        select: {
          id: true,
          title: true,
          message: true,
          link: true,
          read: true,
          createdAt: true,
        },
      }),
    ]);

  // Role-specific queries
  let roleStats: { label: string; value: string; detail: string | null; href: string }[] = [];
  let quickActions: { label: string; description: string; href: string }[] = [];
  let showCreateListingBanner = false;

  if (userRole === "SEARCHER") {
    const [savedCount, searcherProfile] = await Promise.all([
      prisma.savedListing.count({ where: { userId } }),
      prisma.searcherProfile.findUnique({
        where: { userId },
        select: { searchStatus: true, seekingCapital: true, targetSectors: true },
      }),
    ]);

    roleStats = [
      {
        label: "Saved listings",
        value: String(savedCount),
        detail: null,
        href: "/dashboard/saved",
      },
      {
        label: "Connections",
        value: String(connectionCount),
        detail: pendingConnections > 0 ? `${pendingConnections} pending` : null,
        href: "/dashboard/connections",
      },
      {
        label: "Unread messages",
        value: String(unreadMessages),
        detail: null,
        href: "/dashboard/messages",
      },
    ];

    quickActions = [
      { label: "Browse listings", description: "Explore acquisition opportunities", href: "/listings" },
      { label: "Find investors", description: "Connect with search fund investors", href: "/investors" },
      { label: "Edit profile", description: "Update your search criteria", href: "/dashboard/settings/profile" },
    ];

    if (!searcherProfile?.targetSectors?.length) {
      quickActions.unshift({
        label: "Complete your profile",
        description: "Add target sectors to attract investors",
        href: "/dashboard/settings/profile",
      });
    }
  } else if (userRole === "INVESTOR") {
    const [savedCount, investorProfile] = await Promise.all([
      prisma.savedListing.count({ where: { userId } }),
      prisma.investorProfile.findUnique({
        where: { userId },
        select: { targetSectors: true, totalDealsInvested: true },
      }),
    ]);

    roleStats = [
      {
        label: "Saved listings",
        value: String(savedCount),
        detail: null,
        href: "/dashboard/saved",
      },
      {
        label: "Connections",
        value: String(connectionCount),
        detail: pendingConnections > 0 ? `${pendingConnections} pending` : null,
        href: "/dashboard/connections",
      },
      {
        label: "Unread messages",
        value: String(unreadMessages),
        detail: null,
        href: "/dashboard/messages",
      },
    ];

    quickActions = [
      { label: "Browse searchers", description: "Find entrepreneurs to back", href: "/searchers" },
      { label: "Browse listings", description: "Review acquisition opportunities", href: "/listings" },
      { label: "Edit profile", description: "Update your investment criteria", href: "/dashboard/settings/profile" },
    ];

    if (!investorProfile?.targetSectors?.length) {
      quickActions.unshift({
        label: "Complete your profile",
        description: "Add target sectors so searchers can find you",
        href: "/dashboard/settings/profile",
      });
    }
  } else if (userRole === "SELLER") {
    const [listingCount, listings] = await Promise.all([
      prisma.listing.count({ where: { sellerId: userId } }),
      prisma.listing.findMany({
        where: { sellerId: userId },
        select: {
          status: true,
          _count: { select: { inquiries: true, savedBy: true } },
        },
      }),
    ]);

    const totalInquiries = listings.reduce((sum, l) => sum + l._count.inquiries, 0);
    const totalSaves = listings.reduce((sum, l) => sum + l._count.savedBy, 0);
    const activeListings = listings.filter((l) => l.status === "ACTIVE").length;

    roleStats = [
      {
        label: "My listings",
        value: String(listingCount),
        detail: activeListings > 0 ? `${activeListings} active` : null,
        href: "/dashboard/my-listings",
      },
      {
        label: "Inquiries received",
        value: String(totalInquiries),
        detail: totalSaves > 0 ? `${totalSaves} saves` : null,
        href: "/dashboard/my-listings",
      },
      {
        label: "Connections",
        value: String(connectionCount),
        detail: pendingConnections > 0 ? `${pendingConnections} pending` : null,
        href: "/dashboard/connections",
      },
    ];

    quickActions = [
      { label: "Create listing", description: "List a new business for sale", href: "/listings/new" },
      { label: "View my listings", description: "Manage your current listings", href: "/dashboard/my-listings" },
      { label: "Edit profile", description: "Update your seller profile", href: "/dashboard/settings/profile" },
    ];

    if (listingCount === 0) {
      showCreateListingBanner = true;
    }
  } else {
    // Fallback for users without a role yet
    const savedCount = await prisma.savedListing.count({ where: { userId } });
    roleStats = [
      { label: "Saved listings", value: String(savedCount), detail: null, href: "/dashboard/saved" },
      { label: "Connections", value: String(connectionCount), detail: pendingConnections > 0 ? `${pendingConnections} pending` : null, href: "/dashboard/connections" },
      { label: "Unread messages", value: String(unreadMessages), detail: null, href: "/dashboard/messages" },
    ];
    quickActions = [
      { label: "Complete onboarding", description: "Set up your profile to get started", href: "/auth/onboarding" },
    ];
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-apple-black">Dashboard</h1>
      <p className="text-apple-gray-500 mt-1">Welcome back, {userName}</p>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {roleStats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-apple-gray-100 rounded-xl px-4 py-3 hover:bg-apple-gray-100/80 transition-colors flex flex-col justify-between"
          >
            <p className="text-xs text-apple-gray-500">{stat.label}</p>
            <p className="text-xl font-semibold text-apple-black mt-1">
              {stat.value}
            </p>
            {stat.detail && (
              <p className="text-xs text-apple-success mt-1">{stat.detail}</p>
            )}
          </Link>
        ))}
      </div>

      {/* Create listing banner for sellers with no listings */}
      {showCreateListingBanner && (
        <Link
          href="/listings/new"
          className="mt-8 block rounded-2xl bg-gradient-to-r from-apple-seller/10 to-apple-seller/5 border-2 border-apple-seller/30 p-6 hover:border-apple-seller/60 transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-apple-black group-hover:text-apple-seller transition-colors">
                Create your first listing
              </p>
              <p className="text-sm text-apple-gray-500 mt-1">
                You haven&apos;t listed a business yet. Publish your listing to reach qualified buyers and search fund entrepreneurs.
              </p>
            </div>
            <span className="shrink-0 ml-4 bg-apple-seller text-white rounded-full px-5 py-2.5 text-sm font-medium group-hover:bg-apple-seller/90 transition-colors">
              Create listing
            </span>
          </div>
        </Link>
      )}

      {/* Quick actions */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-apple-black">Quick actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="border border-apple-gray-300/40 rounded-xl p-5 hover:border-apple-accent/40 hover:bg-apple-accent/5 transition-all group"
            >
              <p className="text-sm font-medium text-apple-black group-hover:text-apple-accent transition-colors">
                {action.label}
              </p>
              <p className="text-xs text-apple-gray-500 mt-1">
                {action.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent activity */}
      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-apple-black">
            Recent activity
          </h2>
          <Link
            href="/dashboard/notifications"
            className="text-sm text-apple-accent hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-4">
          {notifications.length === 0 ? (
            <p className="text-sm text-apple-gray-500 py-4">
              No recent activity. Start exploring the platform!
            </p>
          ) : (
            notifications.map((n) => (
              <Link
                key={n.id}
                href={n.link ?? "/dashboard/notifications"}
                className="flex items-start justify-between gap-4 border-b border-apple-gray-100 py-4 hover:bg-apple-gray-100/50 -mx-2 px-2 rounded-lg transition-colors"
              >
                <div className="flex items-start gap-3">
                  {!n.read && (
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-apple-accent shrink-0" />
                  )}
                  <div>
                    <p className="text-sm text-apple-gray-700 font-medium">
                      {n.title}
                    </p>
                    <p className="text-sm text-apple-gray-500">{n.message}</p>
                  </div>
                </div>
                <span className="text-xs text-apple-gray-500 whitespace-nowrap shrink-0">
                  {timeAgo(n.createdAt)}
                </span>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
