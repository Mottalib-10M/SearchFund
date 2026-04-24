import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import AdminLogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) redirect("/admin/login");

  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  // Run all queries in parallel
  const [
    totalUsers,
    activeListings,
    totalMessages,
    acceptedConnections,
    totalInquiries,
    // Users by role
    searcherCount,
    investorCount,
    sellerCount,
    newSearchers7d,
    newInvestors7d,
    newSellers7d,
    verifiedUsers,
    // Listings by status
    draftListings,
    reviewListings,
    activeListingsCount,
    loiListings,
    soldListings,
    withdrawnListings,
    listingStats,
    topSectors,
    topCountries,
    // Engagement
    messagesThisWeek,
    totalMessagesWithRead,
    readMessages,
    pendingConnections,
    acceptedConnectionsCount,
    declinedConnections,
    inquiriesThisWeek,
    // Forum
    totalPosts,
    totalComments,
    postsThisWeek,
    // Recent users
    recentUsers,
  ] = await Promise.all([
    // --- Stat cards ---
    prisma.user.count(),
    prisma.listing.count({ where: { status: "ACTIVE" } }),
    prisma.message.count(),
    prisma.connection.count({ where: { status: "ACCEPTED" } }),
    prisma.inquiry.count(),

    // --- Users by role ---
    prisma.user.count({ where: { role: "SEARCHER" } }),
    prisma.user.count({ where: { role: "INVESTOR" } }),
    prisma.user.count({ where: { role: "SELLER" } }),
    prisma.user.count({ where: { role: "SEARCHER", createdAt: { gte: sevenDaysAgo } } }),
    prisma.user.count({ where: { role: "INVESTOR", createdAt: { gte: sevenDaysAgo } } }),
    prisma.user.count({ where: { role: "SELLER", createdAt: { gte: sevenDaysAgo } } }),
    prisma.user.count({ where: { verificationStatus: "VERIFIED" } }),

    // --- Listings by status ---
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

    // --- Engagement ---
    prisma.message.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
    prisma.message.count(),
    prisma.message.count({ where: { readAt: { not: null } } }),
    prisma.connection.count({ where: { status: "PENDING" } }),
    prisma.connection.count({ where: { status: "ACCEPTED" } }),
    prisma.connection.count({ where: { status: "DECLINED" } }),
    prisma.inquiry.count({ where: { createdAt: { gte: sevenDaysAgo } } }),

    // --- Forum ---
    prisma.forumPost.count(),
    prisma.forumComment.count(),
    prisma.forumPost.count({ where: { createdAt: { gte: sevenDaysAgo } } }),

    // --- Recent users ---
    prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        verificationStatus: true,
        createdAt: true,
      },
    }),
  ]);

  const avgEbitda = listingStats._avg.ebitda;
  const avgRevenue = listingStats._avg.revenue;
  const readRate = totalMessagesWithRead > 0
    ? Math.round((readMessages / totalMessagesWithRead) * 100)
    : 0;
  const verificationRate = totalUsers > 0
    ? Math.round((verifiedUsers / totalUsers) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-apple-black">Admin Dashboard</h1>
          <p className="text-sm text-apple-gray-500 mt-1">SearchFundMarket overview</p>
        </div>
        <AdminLogoutButton />
      </div>

      {/* 1. Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <StatCard label="Total Users" value={totalUsers} />
        <StatCard label="Active Listings" value={activeListings} />
        <StatCard label="Messages Sent" value={totalMessages} />
        <StatCard label="Connections Accepted" value={acceptedConnections} />
        <StatCard label="Total Inquiries" value={totalInquiries} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* 2. Users by role */}
        <Section title="Users by Role">
          <div className="space-y-3">
            <RoleRow label="Searchers" count={searcherCount} newCount={newSearchers7d} color="bg-apple-searcher" />
            <RoleRow label="Investors" count={investorCount} newCount={newInvestors7d} color="bg-apple-investor" />
            <RoleRow label="Sellers" count={sellerCount} newCount={newSellers7d} color="bg-apple-seller" />
          </div>
          <div className="mt-4 pt-4 border-t border-apple-gray-300">
            <div className="flex justify-between text-sm">
              <span className="text-apple-gray-500">Verification rate</span>
              <span className="font-medium text-apple-black">{verificationRate}% ({verifiedUsers}/{totalUsers})</span>
            </div>
          </div>
        </Section>

        {/* 3. Listings */}
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
              <span className="font-medium text-apple-black">{avgEbitda ? formatCurrency(avgEbitda) : "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-apple-gray-500">Avg Revenue</span>
              <span className="font-medium text-apple-black">{avgRevenue ? formatCurrency(avgRevenue) : "N/A"}</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-apple-gray-300 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-medium text-apple-gray-500 uppercase mb-2">Top Sectors</p>
              {topSectors.map((s) => (
                <div key={s.sector} className="flex justify-between text-sm">
                  <span className="text-apple-gray-700 truncate">{s.sector}</span>
                  <span className="text-apple-black font-medium ml-2">{s._count}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-medium text-apple-gray-500 uppercase mb-2">Top Countries</p>
              {topCountries.map((c) => (
                <div key={c.country} className="flex justify-between text-sm">
                  <span className="text-apple-gray-700 truncate">{c.country}</span>
                  <span className="text-apple-black font-medium ml-2">{c._count}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 4. Engagement */}
        <Section title="Engagement">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <MiniStat label="Messages (7d)" value={messagesThisWeek} />
            <MiniStat label="Read rate" value={`${readRate}%`} />
            <MiniStat label="Inquiries (7d)" value={inquiriesThisWeek} />
          </div>
          <div className="pt-4 border-t border-apple-gray-300">
            <p className="text-xs font-medium text-apple-gray-500 uppercase mb-2">Connections</p>
            <div className="grid grid-cols-3 gap-2">
              <MiniStat label="Pending" value={pendingConnections} />
              <MiniStat label="Accepted" value={acceptedConnectionsCount} />
              <MiniStat label="Declined" value={declinedConnections} />
            </div>
          </div>
        </Section>

        {/* 5. Forum */}
        <Section title="Forum">
          <div className="grid grid-cols-3 gap-4">
            <MiniStat label="Total Posts" value={totalPosts} />
            <MiniStat label="Total Comments" value={totalComments} />
            <MiniStat label="Posts (7d)" value={postsThisWeek} />
          </div>
        </Section>
      </div>

      {/* 6. Recent signups */}
      <Section title="Recent Signups">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-apple-gray-500 border-b border-apple-gray-300">
                <th className="pb-2 font-medium">Name</th>
                <th className="pb-2 font-medium">Email</th>
                <th className="pb-2 font-medium">Role</th>
                <th className="pb-2 font-medium">Date</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user) => (
                <tr key={user.id} className="border-b border-apple-gray-100">
                  <td className="py-2 text-apple-black font-medium">{user.name ?? " - "}</td>
                  <td className="py-2 text-apple-gray-700">{user.email}</td>
                  <td className="py-2">
                    <RoleBadge role={user.role} />
                  </td>
                  <td className="py-2 text-apple-gray-500">{user.createdAt.toLocaleDateString()}</td>
                  <td className="py-2">
                    <VerificationBadge status={user.verificationStatus} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}

// --- Helper components ---

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <p className="text-sm text-apple-gray-500">{label}</p>
      <p className="text-2xl font-semibold text-apple-black mt-1">{value.toLocaleString()}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-base font-semibold text-apple-black mb-4">{title}</h2>
      {children}
    </div>
  );
}

function RoleRow({ label, count, newCount, color }: { label: string; count: number; newCount: number; color: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
        <span className="text-sm text-apple-gray-700">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-apple-black">{count}</span>
        {newCount > 0 && (
          <span className="text-xs text-apple-success font-medium">+{newCount} (7d)</span>
        )}
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-apple-gray-100 rounded-xl px-3 py-2">
      <p className="text-xs text-apple-gray-500">{label}</p>
      <p className="text-lg font-semibold text-apple-black">{typeof value === "number" ? value.toLocaleString() : value}</p>
    </div>
  );
}

function RoleBadge({ role }: { role: string }) {
  const colors: Record<string, string> = {
    SEARCHER: "bg-apple-searcher/10 text-apple-searcher",
    INVESTOR: "bg-apple-investor/10 text-apple-investor",
    SELLER: "bg-apple-seller/10 text-apple-seller",
    ADMIN: "bg-apple-gray-100 text-apple-gray-700",
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors[role] ?? colors.ADMIN}`}>
      {role}
    </span>
  );
}

function VerificationBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    VERIFIED: "bg-apple-success/10 text-apple-success",
    PENDING: "bg-apple-warning/10 text-apple-warning",
    UNVERIFIED: "bg-apple-gray-100 text-apple-gray-500",
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles[status] ?? styles.UNVERIFIED}`}>
      {status}
    </span>
  );
}

function formatCurrency(value: number): string {
  if (value >= 1_000_000) return `€${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `€${(value / 1_000).toFixed(0)}K`;
  return `€${value.toLocaleString()}`;
}
