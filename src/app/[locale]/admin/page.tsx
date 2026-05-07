import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import {
  StatCard,
  MiniStat,
  Section,
  StatCardWithDelta,
  formatCurrency,
  formatRelativeTime,
} from "./_components/AdminStatCard";
import { RoleBadge } from "./_components/AdminBadges";
import { Link } from "@/i18n/navigation";

export const dynamic = "force-dynamic";

/* ------------------------------------------------------------------ */
/*  Date helpers                                                       */
/* ------------------------------------------------------------------ */

function startOfWeek(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay(); // 0=Sun
  d.setDate(d.getDate() - ((day + 6) % 7)); // Monday
  d.setHours(0, 0, 0, 0);
  return d;
}

function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function startOfPreviousWeek(date: Date): Date {
  const s = startOfWeek(date);
  return new Date(s.getTime() - 7 * 24 * 60 * 60 * 1000);
}

function startOfPreviousMonth(date: Date): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() - 1);
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function endOfPreviousMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 0, 23, 59, 59, 999);
}

/* ------------------------------------------------------------------ */
/*  Activity feed types                                                */
/* ------------------------------------------------------------------ */

type FeedItem = {
  id: string;
  type: "signup" | "message" | "connection" | "inquiry";
  description: string;
  userId?: string;
  createdAt: Date;
};

const FEED_ICONS: Record<FeedItem["type"], string> = {
  signup: "👤",
  message: "💬",
  connection: "🤝",
  inquiry: "📩",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function AdminOverviewPage() {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) redirect("/admin/login");

  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const thisWeekStart = startOfWeek(now);
  const lastWeekStart = startOfPreviousWeek(now);
  const thisMonthStart = startOfMonth(now);
  const lastMonthStart = startOfPreviousMonth(now);
  const lastMonthEnd = endOfPreviousMonth(now);

  /* ---- Aggregate counts ---- */
  const [
    totalUsers,
    activeListings,
    totalMessages,
    acceptedConnections,
    totalInquiries,
    /* --- role breakdowns --- */
    searcherCount,
    investorCount,
    sellerCount,
    newSearchers7d,
    newInvestors7d,
    newSellers7d,
    verifiedUsers,
    /* --- listing breakdowns --- */
    draftListings,
    reviewListings,
    activeListingsCount,
    loiListings,
    soldListings,
    withdrawnListings,
    listingStats,
    topSectors,
    topCountries,
    /* --- engagement --- */
    messagesThisWeek,
    totalMessagesWithRead,
    readMessages,
    pendingConnections,
    acceptedConnectionsCount,
    declinedConnections,
    inquiriesThisWeek,
    /* --- forum --- */
    totalPosts,
    totalComments,
    postsThisWeek,
    /* --- weekly deltas (this week) --- */
    signupsThisWeek,
    messagesThisWeekDelta,
    connectionsThisWeek,
    inquiriesThisWeekDelta,
    loginsThisWeek,
    /* --- weekly deltas (last week) --- */
    signupsLastWeek,
    messagesLastWeek,
    connectionsLastWeek,
    inquiriesLastWeek,
    loginsLastWeek,
    /* --- monthly deltas (this month) --- */
    signupsThisMonth,
    messagesThisMonth,
    connectionsThisMonth,
    inquiriesThisMonth,
    loginsThisMonth,
    /* --- monthly deltas (last month) --- */
    signupsLastMonth,
    messagesLastMonth,
    connectionsLastMonth,
    inquiriesLastMonth,
    loginsLastMonth,
    /* --- activity feed raw data --- */
    recentSignups,
    recentMessages,
    recentConnectionsRaw,
    recentInquiries,
    /* --- most active users --- */
    topMessageSenders,
    topConnectionSenders,
  ] = await Promise.all([
    // Totals
    prisma.user.count(),
    prisma.listing.count({ where: { status: "ACTIVE" } }),
    prisma.message.count(),
    prisma.connection.count({ where: { status: "ACCEPTED" } }),
    prisma.inquiry.count(),
    // Role counts
    prisma.user.count({ where: { role: "SEARCHER" } }),
    prisma.user.count({ where: { role: "INVESTOR" } }),
    prisma.user.count({ where: { role: "SELLER" } }),
    prisma.user.count({ where: { role: "SEARCHER", createdAt: { gte: sevenDaysAgo } } }),
    prisma.user.count({ where: { role: "INVESTOR", createdAt: { gte: sevenDaysAgo } } }),
    prisma.user.count({ where: { role: "SELLER", createdAt: { gte: sevenDaysAgo } } }),
    prisma.user.count({ where: { verificationStatus: "VERIFIED" } }),
    // Listing breakdowns
    prisma.listing.count({ where: { status: "DRAFT" } }),
    prisma.listing.count({ where: { status: "UNDER_REVIEW" } }),
    prisma.listing.count({ where: { status: "ACTIVE" } }),
    prisma.listing.count({ where: { status: "UNDER_LOI" } }),
    prisma.listing.count({ where: { status: "SOLD" } }),
    prisma.listing.count({ where: { status: "WITHDRAWN" } }),
    prisma.listing.aggregate({
      where: { status: "ACTIVE" },
      _avg: { ebitda: true, revenue: true },
    }),
    prisma.listing.groupBy({
      by: ["sector"],
      where: { status: "ACTIVE" },
      _count: true,
      orderBy: { _count: { sector: "desc" } },
      take: 5,
    }),
    prisma.listing.groupBy({
      by: ["country"],
      where: { status: "ACTIVE" },
      _count: true,
      orderBy: { _count: { country: "desc" } },
      take: 5,
    }),
    // Engagement
    prisma.message.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
    prisma.message.count(),
    prisma.message.count({ where: { readAt: { not: null } } }),
    prisma.connection.count({ where: { status: "PENDING" } }),
    prisma.connection.count({ where: { status: "ACCEPTED" } }),
    prisma.connection.count({ where: { status: "DECLINED" } }),
    prisma.inquiry.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
    // Forum
    prisma.forumPost.count(),
    prisma.forumComment.count(),
    prisma.forumPost.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
    // Weekly deltas — this week
    prisma.user.count({ where: { createdAt: { gte: thisWeekStart } } }),
    prisma.message.count({ where: { createdAt: { gte: thisWeekStart } } }),
    prisma.connection.count({ where: { createdAt: { gte: thisWeekStart } } }),
    prisma.inquiry.count({ where: { createdAt: { gte: thisWeekStart } } }),
    prisma.user.count({ where: { lastLoginAt: { gte: thisWeekStart } } }),
    // Weekly deltas — last week
    prisma.user.count({ where: { createdAt: { gte: lastWeekStart, lt: thisWeekStart } } }),
    prisma.message.count({ where: { createdAt: { gte: lastWeekStart, lt: thisWeekStart } } }),
    prisma.connection.count({ where: { createdAt: { gte: lastWeekStart, lt: thisWeekStart } } }),
    prisma.inquiry.count({ where: { createdAt: { gte: lastWeekStart, lt: thisWeekStart } } }),
    prisma.user.count({ where: { lastLoginAt: { gte: lastWeekStart, lt: thisWeekStart } } }),
    // Monthly deltas — this month
    prisma.user.count({ where: { createdAt: { gte: thisMonthStart } } }),
    prisma.message.count({ where: { createdAt: { gte: thisMonthStart } } }),
    prisma.connection.count({ where: { createdAt: { gte: thisMonthStart } } }),
    prisma.inquiry.count({ where: { createdAt: { gte: thisMonthStart } } }),
    prisma.user.count({ where: { lastLoginAt: { gte: thisMonthStart } } }),
    // Monthly deltas — last month
    prisma.user.count({ where: { createdAt: { gte: lastMonthStart, lte: lastMonthEnd } } }),
    prisma.message.count({ where: { createdAt: { gte: lastMonthStart, lte: lastMonthEnd } } }),
    prisma.connection.count({ where: { createdAt: { gte: lastMonthStart, lte: lastMonthEnd } } }),
    prisma.inquiry.count({ where: { createdAt: { gte: lastMonthStart, lte: lastMonthEnd } } }),
    prisma.user.count({ where: { lastLoginAt: { gte: lastMonthStart, lte: lastMonthEnd } } }),
    // Activity feed — recent items
    prisma.user.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      select: { id: true, name: true, role: true, createdAt: true },
      orderBy: { createdAt: "desc" },
      take: 20,
    }),
    prisma.message.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      select: {
        id: true,
        createdAt: true,
        sender: { select: { id: true, name: true } },
        receiver: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: "desc" },
      take: 20,
    }),
    prisma.connection.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      select: {
        id: true,
        createdAt: true,
        requester: { select: { id: true, name: true } },
        receiver: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: "desc" },
      take: 20,
    }),
    prisma.inquiry.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      select: {
        id: true,
        createdAt: true,
        user: { select: { id: true, name: true } },
        listing: { select: { title: true } },
      },
      orderBy: { createdAt: "desc" },
      take: 20,
    }),
    // Most active — messages sent (30d)
    prisma.message.groupBy({
      by: ["senderId"],
      where: { createdAt: { gte: thirtyDaysAgo } },
      _count: true,
      orderBy: { _count: { senderId: "desc" } },
      take: 20,
    }),
    // Most active — connections sent (30d)
    prisma.connection.groupBy({
      by: ["requesterId"],
      where: { createdAt: { gte: thirtyDaysAgo } },
      _count: true,
      orderBy: { _count: { requesterId: "desc" } },
      take: 20,
    }),
  ]);

  /* ---- Derived values ---- */
  const avgEbitda = listingStats._avg.ebitda;
  const avgRevenue = listingStats._avg.revenue;
  const readRate =
    totalMessagesWithRead > 0
      ? Math.round((readMessages / totalMessagesWithRead) * 100)
      : 0;
  const verificationRate =
    totalUsers > 0 ? Math.round((verifiedUsers / totalUsers) * 100) : 0;

  /* ---- Build activity feed ---- */
  const feedItems: FeedItem[] = [];

  for (const u of recentSignups) {
    feedItems.push({
      id: `signup-${u.id}`,
      type: "signup",
      description: `${u.name ?? "Unknown"} signed up as ${u.role}`,
      userId: u.id,
      createdAt: u.createdAt,
    });
  }
  for (const m of recentMessages) {
    feedItems.push({
      id: `msg-${m.id}`,
      type: "message",
      description: `${m.sender.name ?? "Unknown"} messaged ${m.receiver.name ?? "Unknown"}`,
      userId: m.sender.id,
      createdAt: m.createdAt,
    });
  }
  for (const c of recentConnectionsRaw) {
    feedItems.push({
      id: `conn-${c.id}`,
      type: "connection",
      description: `${c.requester.name ?? "Unknown"} sent a connection request to ${c.receiver.name ?? "Unknown"}`,
      userId: c.requester.id,
      createdAt: c.createdAt,
    });
  }
  for (const inq of recentInquiries) {
    feedItems.push({
      id: `inq-${inq.id}`,
      type: "inquiry",
      description: `${inq.user.name ?? "Unknown"} inquired about "${inq.listing.title}"`,
      userId: inq.user.id,
      createdAt: inq.createdAt,
    });
  }

  feedItems.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  const activityFeed = feedItems.slice(0, 20);

  /* ---- Build most-active-users table ---- */
  const activityMap = new Map<string, { messages: number; connections: number }>();

  for (const row of topMessageSenders) {
    activityMap.set(row.senderId, {
      messages: row._count,
      connections: 0,
    });
  }
  for (const row of topConnectionSenders) {
    const existing = activityMap.get(row.requesterId);
    if (existing) {
      existing.connections = row._count;
    } else {
      activityMap.set(row.requesterId, {
        messages: 0,
        connections: row._count,
      });
    }
  }

  const sortedActiveIds = [...activityMap.entries()]
    .map(([id, stats]) => ({
      id,
      total: stats.messages + stats.connections,
      messages: stats.messages,
      connections: stats.connections,
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);

  const activeUserIds = sortedActiveIds.map((u) => u.id);
  const activeUsersRaw = activeUserIds.length > 0
    ? await prisma.user.findMany({
        where: { id: { in: activeUserIds } },
        select: { id: true, name: true, role: true, lastLoginAt: true },
      })
    : [];

  const activeUsersMap = new Map(activeUsersRaw.map((u) => [u.id, u]));
  const mostActiveUsers = sortedActiveIds.map((entry) => {
    const user = activeUsersMap.get(entry.id);
    return {
      id: entry.id,
      name: user?.name ?? "Unknown",
      role: user?.role ?? "SEARCHER",
      lastLoginAt: user?.lastLoginAt ?? null,
      messagesSent: entry.messages,
      connectionsSent: entry.connections,
    };
  });

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-apple-black">Overview</h1>
        <p className="text-sm text-apple-gray-500 mt-1">
          SearchFundMarket at a glance
        </p>
      </div>

      {/* Top stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <StatCard label="Total Users" value={totalUsers} />
        <StatCard label="Active Listings" value={activeListings} />
        <StatCard label="Messages Sent" value={totalMessages} />
        <StatCard label="Connections" value={acceptedConnections} />
        <StatCard label="Inquiries" value={totalInquiries} />
      </div>

      {/* Weekly + Monthly comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Section title="This Week vs Last Week">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <StatCardWithDelta label="Signups" current={signupsThisWeek} previous={signupsLastWeek} />
            <StatCardWithDelta label="Messages" current={messagesThisWeekDelta} previous={messagesLastWeek} />
            <StatCardWithDelta label="Connections" current={connectionsThisWeek} previous={connectionsLastWeek} />
            <StatCardWithDelta label="Inquiries" current={inquiriesThisWeekDelta} previous={inquiriesLastWeek} />
            <StatCardWithDelta label="Logins" current={loginsThisWeek} previous={loginsLastWeek} />
          </div>
        </Section>

        <Section title="This Month vs Last Month">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <StatCardWithDelta label="Signups" current={signupsThisMonth} previous={signupsLastMonth} />
            <StatCardWithDelta label="Messages" current={messagesThisMonth} previous={messagesLastMonth} />
            <StatCardWithDelta label="Connections" current={connectionsThisMonth} previous={connectionsLastMonth} />
            <StatCardWithDelta label="Inquiries" current={inquiriesThisMonth} previous={inquiriesLastMonth} />
            <StatCardWithDelta label="Logins" current={loginsThisMonth} previous={loginsLastMonth} />
          </div>
        </Section>
      </div>

      {/* Recent Activity + Most Active Users */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Activity Feed */}
        <Section title="Recent Activity">
          {activityFeed.length === 0 ? (
            <p className="text-sm text-apple-gray-400">No recent activity</p>
          ) : (
            <div className="space-y-3 max-h-[480px] overflow-y-auto">
              {activityFeed.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className="text-base leading-none mt-0.5">
                    {FEED_ICONS[item.type]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-apple-gray-700">
                      {item.userId ? (
                        <Link
                          href={`/admin/users/${item.userId}`}
                          className="font-medium text-apple-black hover:underline"
                        >
                          {item.description.split(" ")[0]}
                        </Link>
                      ) : null}
                      {item.userId
                        ? " " + item.description.split(" ").slice(1).join(" ")
                        : item.description}
                    </p>
                    <p className="text-xs text-apple-gray-400 mt-0.5">
                      {formatRelativeTime(item.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* Most Active Users */}
        <Section title="Most Active Users (30d)">
          {mostActiveUsers.length === 0 ? (
            <p className="text-sm text-apple-gray-400">No data yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-apple-gray-500 uppercase">
                    <th className="pb-2 font-medium">Name</th>
                    <th className="pb-2 font-medium">Role</th>
                    <th className="pb-2 font-medium text-right">Msgs</th>
                    <th className="pb-2 font-medium text-right">Conns</th>
                    <th className="pb-2 font-medium text-right">Last Login</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-apple-gray-200">
                  {mostActiveUsers.map((u) => (
                    <tr key={u.id}>
                      <td className="py-2">
                        <Link
                          href={`/admin/users/${u.id}`}
                          className="font-medium text-apple-black hover:underline"
                        >
                          {u.name}
                        </Link>
                      </td>
                      <td className="py-2">
                        <RoleBadge role={u.role} />
                      </td>
                      <td className="py-2 text-right tabular-nums">
                        {u.messagesSent}
                      </td>
                      <td className="py-2 text-right tabular-nums">
                        {u.connectionsSent}
                      </td>
                      <td className="py-2 text-right text-apple-gray-500">
                        {u.lastLoginAt
                          ? formatRelativeTime(u.lastLoginAt)
                          : "Never"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Section>
      </div>

      {/* Existing sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Users by role */}
        <Section title="Users by Role">
          <div className="space-y-3">
            <RoleRow
              label="Searchers"
              count={searcherCount}
              newCount={newSearchers7d}
              color="bg-apple-searcher"
            />
            <RoleRow
              label="Investors"
              count={investorCount}
              newCount={newInvestors7d}
              color="bg-apple-investor"
            />
            <RoleRow
              label="Sellers"
              count={sellerCount}
              newCount={newSellers7d}
              color="bg-apple-seller"
            />
          </div>
          <div className="mt-4 pt-4 border-t border-apple-gray-300">
            <div className="flex justify-between text-sm">
              <span className="text-apple-gray-500">Verification rate</span>
              <span className="font-medium text-apple-black">
                {verificationRate}% ({verifiedUsers}/{totalUsers})
              </span>
            </div>
          </div>
        </Section>

        {/* Listings */}
        <Section title="Listings">
          <div className="grid grid-cols-3 gap-2 mb-4">
            <MiniStat label="Draft" value={draftListings} />
            <MiniStat label="Review" value={reviewListings} />
            <MiniStat label="Active" value={activeListingsCount} />
            <MiniStat label="Under LOI" value={loiListings} />
            <MiniStat label="Sold" value={soldListings} />
            <MiniStat label="Withdrawn" value={withdrawnListings} />
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-apple-gray-500">Avg EBITDA</span>
              <span className="font-medium text-apple-black">
                {avgEbitda ? formatCurrency(avgEbitda) : "N/A"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-apple-gray-500">Avg Revenue</span>
              <span className="font-medium text-apple-black">
                {avgRevenue ? formatCurrency(avgRevenue) : "N/A"}
              </span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-apple-gray-300 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-medium text-apple-gray-500 uppercase mb-2">
                Top Sectors
              </p>
              {topSectors.map((s) => (
                <div key={s.sector} className="flex justify-between text-sm">
                  <span className="text-apple-gray-700 truncate">
                    {s.sector}
                  </span>
                  <span className="text-apple-black font-medium ml-2">
                    {s._count}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-medium text-apple-gray-500 uppercase mb-2">
                Top Countries
              </p>
              {topCountries.map((c) => (
                <div key={c.country} className="flex justify-between text-sm">
                  <span className="text-apple-gray-700 truncate">
                    {c.country}
                  </span>
                  <span className="text-apple-black font-medium ml-2">
                    {c._count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Engagement */}
        <Section title="Engagement">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <MiniStat label="Messages (7d)" value={messagesThisWeek} />
            <MiniStat label="Read rate" value={`${readRate}%`} />
            <MiniStat label="Inquiries (7d)" value={inquiriesThisWeek} />
          </div>
          <div className="pt-4 border-t border-apple-gray-300">
            <p className="text-xs font-medium text-apple-gray-500 uppercase mb-2">
              Connections
            </p>
            <div className="grid grid-cols-3 gap-2">
              <MiniStat label="Pending" value={pendingConnections} />
              <MiniStat label="Accepted" value={acceptedConnectionsCount} />
              <MiniStat label="Declined" value={declinedConnections} />
            </div>
          </div>
        </Section>

        {/* Forum */}
        <Section title="Forum">
          <div className="grid grid-cols-3 gap-4">
            <MiniStat label="Total Posts" value={totalPosts} />
            <MiniStat label="Total Comments" value={totalComments} />
            <MiniStat label="Posts (7d)" value={postsThisWeek} />
          </div>
        </Section>
      </div>
    </div>
  );
}

function RoleRow({
  label,
  count,
  newCount,
  color,
}: {
  label: string;
  count: number;
  newCount: number;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
        <span className="text-sm text-apple-gray-700">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-apple-black">{count}</span>
        {newCount > 0 && (
          <span className="text-xs text-apple-success font-medium">
            +{newCount} (7d)
          </span>
        )}
      </div>
    </div>
  );
}
