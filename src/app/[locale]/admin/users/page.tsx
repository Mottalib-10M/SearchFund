import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import Link from "next/link";
import { RoleBadge } from "../_components/AdminBadges";
import { formatDate } from "../_components/AdminStatCard";
import { AdminDeleteButton } from "../_components/AdminDeleteButton";
import { AdminDeactivateButton } from "../_components/AdminDeactivateButton";

export const dynamic = "force-dynamic";

const PER_PAGE = 25;

interface Props {
  searchParams: Promise<{
    page?: string;
    q?: string;
    role?: string;
    sort?: string;
    dir?: string;
  }>;
}

export default async function AdminUsersPage({ searchParams }: Props) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) redirect("/admin/login");

  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));
  const query = params.q ?? "";
  const roleFilter = params.role ?? "";
  const sortField = params.sort ?? "createdAt";
  const sortDir = (params.dir ?? "desc") as "asc" | "desc";

  // Build where clause
  const where: Record<string, unknown> = {};
  if (query) {
    where.OR = [
      { name: { contains: query, mode: "insensitive" } },
      { email: { contains: query, mode: "insensitive" } },
    ];
  }
  if (roleFilter) where.role = roleFilter;

  const [users, totalCount] = await Promise.all([
    prisma.user.findMany({
      where,
      orderBy: { [sortField]: sortDir },
      skip: (page - 1) * PER_PAGE,
      take: PER_PAGE,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        country: true,
        createdAt: true,
        lastLoginAt: true,
        _count: {
          select: {
            listings: true,
            sentMessages: true,
            sentConnections: true,
            receivedConnections: true,
          },
        },
      },
    }),
    prisma.user.count({ where }),
  ]);

  const totalPages = Math.ceil(totalCount / PER_PAGE);

  function sortUrl(field: string) {
    const newDir = sortField === field && sortDir === "desc" ? "asc" : "desc";
    const p = new URLSearchParams();
    if (query) p.set("q", query);
    if (roleFilter) p.set("role", roleFilter);
    p.set("sort", field);
    p.set("dir", newDir);
    return `/admin/users?${p.toString()}`;
  }

  function SortIcon({ field }: { field: string }) {
    if (sortField !== field) return <span className="text-apple-gray-300 ml-1">↕</span>;
    return <span className="ml-1">{sortDir === "desc" ? "↓" : "↑"}</span>;
  }

  function pageUrl(p: number) {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (roleFilter) params.set("role", roleFilter);
    if (sortField !== "createdAt") params.set("sort", sortField);
    if (sortDir !== "desc") params.set("dir", sortDir);
    params.set("page", String(p));
    return `/admin/users?${params.toString()}`;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-apple-black">Users</h1>
        <p className="text-sm text-apple-gray-500 mt-1">
          {totalCount} user{totalCount !== 1 ? "s" : ""} total
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
        <form className="flex flex-wrap gap-3 items-end">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs text-apple-gray-500 mb-1">
              Search
            </label>
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Name or email..."
              className="form-input w-full"
            />
          </div>
          <div>
            <label className="block text-xs text-apple-gray-500 mb-1">
              Role
            </label>
            <select name="role" defaultValue={roleFilter} className="form-input">
              <option value="">All</option>
              <option value="SEARCHER">Searcher</option>
              <option value="INVESTOR">Investor</option>
              <option value="SELLER">Seller</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-apple-black text-white text-sm rounded-lg hover:bg-apple-gray-900 transition"
          >
            Filter
          </button>
          {(query || roleFilter) && (
            <a
              href="/admin/users"
              className="px-4 py-2 text-sm text-apple-gray-500 hover:text-apple-black transition"
            >
              Clear
            </a>
          )}
        </form>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
                <th className="px-4 py-3 font-medium">
                  <Link href={sortUrl("name")} className="hover:text-apple-black">
                    Name <SortIcon field="name" />
                  </Link>
                </th>
                <th className="px-4 py-3 font-medium">
                  <Link href={sortUrl("email")} className="hover:text-apple-black">
                    Email <SortIcon field="email" />
                  </Link>
                </th>
                <th className="px-4 py-3 font-medium">Role</th>
                <th className="px-4 py-3 font-medium">
                  <Link href={sortUrl("country")} className="hover:text-apple-black">
                    Country <SortIcon field="country" />
                  </Link>
                </th>
                <th className="px-4 py-3 font-medium">
                  <Link href={sortUrl("createdAt")} className="hover:text-apple-black">
                    Registered <SortIcon field="createdAt" />
                  </Link>
                </th>
                <th className="px-4 py-3 font-medium">
                  <Link href={sortUrl("lastLoginAt")} className="hover:text-apple-black">
                    Last Login <SortIcon field="lastLoginAt" />
                  </Link>
                </th>
                <th className="px-4 py-3 font-medium text-center">Listings</th>
                <th className="px-4 py-3 font-medium text-center">Msgs</th>
                <th className="px-4 py-3 font-medium text-center">Conns</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-apple-gray-100 hover:bg-apple-gray-100/50 transition"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/users/${user.id}`}
                      className="text-apple-black font-medium hover:text-apple-accent transition"
                    >
                      {user.name ?? "—"}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-apple-gray-700">{user.email}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <RoleBadge role={user.role} />
                      {!user.isActive && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-50 text-red-600">
                          INACTIVE
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-apple-gray-700">
                    {user.country ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-apple-gray-500">
                    {formatDate(user.createdAt)}
                  </td>
                  <td className="px-4 py-3 text-apple-gray-500">
                    {formatDate(user.lastLoginAt)}
                  </td>
                  <td className="px-4 py-3 text-center text-apple-gray-700">
                    {user._count.listings}
                  </td>
                  <td className="px-4 py-3 text-center text-apple-gray-700">
                    {user._count.sentMessages}
                  </td>
                  <td className="px-4 py-3 text-center text-apple-gray-700">
                    {user._count.sentConnections + user._count.receivedConnections}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <AdminDeactivateButton userId={user.id} isActive={user.isActive} compact />
                      <AdminDeleteButton resourceId={user.id} resourceType="user" compact />
                    </div>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={10} className="px-4 py-12 text-center text-apple-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-apple-gray-200">
            <p className="text-sm text-apple-gray-500">
              Page {page} of {totalPages}
            </p>
            <div className="flex gap-2">
              {page > 1 && (
                <Link
                  href={pageUrl(page - 1)}
                  className="px-3 py-1 text-sm rounded-lg bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200 transition"
                >
                  Previous
                </Link>
              )}
              {page < totalPages && (
                <Link
                  href={pageUrl(page + 1)}
                  className="px-3 py-1 text-sm rounded-lg bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200 transition"
                >
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
