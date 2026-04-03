import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { timeAgo } from "@/lib/utils";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard — SearchFundMarket",
  description: "Your personal dashboard on SearchFundMarket.",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/auth/signin");

  const userId = (session.user as Record<string, unknown>).id as string;
  const userName = session.user.name ?? "there";

  // Fetch real stats
  const [savedCount, connectionCount, listingCount, notifications] =
    await Promise.all([
      prisma.savedListing.count({ where: { userId } }),
      prisma.connection.count({
        where: {
          OR: [
            { requesterId: userId, status: "ACCEPTED" },
            { receiverId: userId, status: "ACCEPTED" },
          ],
        },
      }),
      prisma.listing.count({ where: { sellerId: userId } }),
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

  const pendingConnections = await prisma.connection.count({
    where: { receiverId: userId, status: "PENDING" },
  });

  const stats = [
    {
      label: "My listings",
      value: String(listingCount),
      detail: null,
      href: "/dashboard/my-listings",
    },
    {
      label: "Connections",
      value: String(connectionCount),
      detail: pendingConnections > 0 ? `${pendingConnections} pending` : null,
      href: "/dashboard/connections",
    },
    {
      label: "Saved listings",
      value: String(savedCount),
      detail: null,
      href: "/dashboard/saved",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-apple-black">Dashboard</h1>
      <p className="text-apple-gray-500 mt-1">Welcome back, {userName}</p>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-apple-gray-100 rounded-2xl p-6 hover:bg-apple-gray-100/80 transition-colors"
          >
            <p className="text-sm text-apple-gray-500">{stat.label}</p>
            <p className="text-3xl font-semibold text-apple-black mt-1">
              {stat.value}
            </p>
            {stat.detail && (
              <p className="text-xs text-apple-success mt-2">{stat.detail}</p>
            )}
          </Link>
        ))}
      </div>

      {/* Recent notifications */}
      <section className="mt-12">
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
              <div
                key={n.id}
                className="flex items-start justify-between gap-4 border-b border-apple-gray-100 py-4"
              >
                <div>
                  <p className="text-sm text-apple-gray-700 font-medium">
                    {n.title}
                  </p>
                  <p className="text-sm text-apple-gray-500">{n.message}</p>
                </div>
                <span className="text-xs text-apple-gray-500 whitespace-nowrap shrink-0">
                  {timeAgo(n.createdAt)}
                </span>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
