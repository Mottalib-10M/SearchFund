import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import Link from "next/link";
import { RoleBadge, ConnectionStatusBadge } from "../_components/AdminBadges";
import { formatDate } from "../_components/AdminStatCard";
import { AdminDeleteButton } from "../_components/AdminDeleteButton";

export const dynamic = "force-dynamic";

const PER_PAGE = 25;

interface Props {
  searchParams: Promise<{ page?: string; status?: string }>;
}

export default async function AdminConnectionsPage({ searchParams }: Props) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) redirect("/admin/login");

  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));
  const statusFilter = params.status ?? "";

  const where: Record<string, unknown> = {};
  if (statusFilter) where.status = statusFilter;

  const [connections, totalCount] = await Promise.all([
    prisma.connection.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PER_PAGE,
      take: PER_PAGE,
      include: {
        requester: { select: { id: true, name: true, email: true, role: true } },
        receiver: { select: { id: true, name: true, email: true, role: true } },
      },
    }),
    prisma.connection.count({ where }),
  ]);

  const totalPages = Math.ceil(totalCount / PER_PAGE);

  function pageUrl(p: number) {
    const sp = new URLSearchParams();
    if (statusFilter) sp.set("status", statusFilter);
    sp.set("page", String(p));
    return `/admin/connections?${sp.toString()}`;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-apple-black">Connections</h1>
        <p className="text-sm text-apple-gray-500 mt-1">
          {totalCount} connection{totalCount !== 1 ? "s" : ""} total
        </p>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
        <form className="flex flex-wrap gap-3 items-end">
          <div>
            <label className="block text-xs text-apple-gray-500 mb-1">Status</label>
            <select name="status" defaultValue={statusFilter} className="form-input">
              <option value="">All</option>
              <option value="PENDING">Pending</option>
              <option value="ACCEPTED">Accepted</option>
              <option value="DECLINED">Declined</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-apple-black text-white text-sm rounded-lg hover:bg-apple-gray-900 transition"
          >
            Filter
          </button>
          {statusFilter && (
            <a href="/admin/connections" className="px-4 py-2 text-sm text-apple-gray-500 hover:text-apple-black transition">
              Clear
            </a>
          )}
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
                <th className="px-4 py-3 font-medium">Requester</th>
                <th className="px-4 py-3 font-medium">Role</th>
                <th className="px-4 py-3 font-medium">Receiver</th>
                <th className="px-4 py-3 font-medium">Role</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Message</th>
                <th className="px-4 py-3 font-medium">Created</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {connections.map((conn) => (
                <tr key={conn.id} className="border-b border-apple-gray-100 hover:bg-apple-gray-100/50 transition">
                  <td className="px-4 py-3">
                    <Link href={`/admin/users/${conn.requester.id}`} className="text-apple-black hover:text-apple-accent transition">
                      {conn.requester.name ?? conn.requester.email}
                    </Link>
                  </td>
                  <td className="px-4 py-3"><RoleBadge role={conn.requester.role} /></td>
                  <td className="px-4 py-3">
                    <Link href={`/admin/users/${conn.receiver.id}`} className="text-apple-black hover:text-apple-accent transition">
                      {conn.receiver.name ?? conn.receiver.email}
                    </Link>
                  </td>
                  <td className="px-4 py-3"><RoleBadge role={conn.receiver.role} /></td>
                  <td className="px-4 py-3"><ConnectionStatusBadge status={conn.status} /></td>
                  <td className="px-4 py-3 text-apple-gray-700 max-w-xs truncate">{conn.message ?? "—"}</td>
                  <td className="px-4 py-3 text-apple-gray-500">{formatDate(conn.createdAt)}</td>
                  <td className="px-4 py-3">
                    <AdminDeleteButton resourceId={conn.id} resourceType="connection" compact />
                  </td>
                </tr>
              ))}
              {connections.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-apple-gray-500">
                    No connections found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-apple-gray-200">
            <p className="text-sm text-apple-gray-500">Page {page} of {totalPages}</p>
            <div className="flex gap-2">
              {page > 1 && (
                <Link href={pageUrl(page - 1)} className="px-3 py-1 text-sm rounded-lg bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200 transition">
                  Previous
                </Link>
              )}
              {page < totalPages && (
                <Link href={pageUrl(page + 1)} className="px-3 py-1 text-sm rounded-lg bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200 transition">
                  Next
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
