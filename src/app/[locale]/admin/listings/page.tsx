import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import Link from "next/link";
import { ListingStatusBadge } from "../_components/AdminBadges";
import { formatDate, formatCurrency } from "../_components/AdminStatCard";
import { AdminDeleteButton } from "../_components/AdminDeleteButton";

export const dynamic = "force-dynamic";

const PER_PAGE = 25;

interface Props {
  searchParams: Promise<{
    page?: string;
    q?: string;
    status?: string;
    sort?: string;
    dir?: string;
  }>;
}

export default async function AdminListingsPage({ searchParams }: Props) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) redirect("/admin/login");

  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));
  const query = params.q ?? "";
  const statusFilter = params.status ?? "";
  const sortField = params.sort ?? "createdAt";
  const sortDir = (params.dir ?? "desc") as "asc" | "desc";

  const where: Record<string, unknown> = {};
  if (query) {
    where.OR = [
      { title: { contains: query, mode: "insensitive" } },
      { sector: { contains: query, mode: "insensitive" } },
      { country: { contains: query, mode: "insensitive" } },
    ];
  }
  if (statusFilter) where.status = statusFilter;

  const [listings, totalCount] = await Promise.all([
    prisma.listing.findMany({
      where,
      orderBy: { [sortField]: sortDir },
      skip: (page - 1) * PER_PAGE,
      take: PER_PAGE,
      select: {
        id: true,
        title: true,
        status: true,
        sector: true,
        country: true,
        revenue: true,
        ebitda: true,
        askingPrice: true,
        createdAt: true,
        publishedAt: true,
        seller: { select: { id: true, name: true, email: true } },
        _count: { select: { savedBy: true, inquiries: true } },
      },
    }),
    prisma.listing.count({ where }),
  ]);

  const totalPages = Math.ceil(totalCount / PER_PAGE);

  function pageUrl(p: number) {
    const sp = new URLSearchParams();
    if (query) sp.set("q", query);
    if (statusFilter) sp.set("status", statusFilter);
    if (sortField !== "createdAt") sp.set("sort", sortField);
    if (sortDir !== "desc") sp.set("dir", sortDir);
    sp.set("page", String(p));
    return `/admin/listings?${sp.toString()}`;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-apple-black">Listings</h1>
        <p className="text-sm text-apple-gray-500 mt-1">
          {totalCount} listing{totalCount !== 1 ? "s" : ""} total
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
        <form className="flex flex-wrap gap-3 items-end">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs text-apple-gray-500 mb-1">Search</label>
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Title, sector, country..."
              className="form-input w-full"
            />
          </div>
          <div>
            <label className="block text-xs text-apple-gray-500 mb-1">Status</label>
            <select name="status" defaultValue={statusFilter} className="form-input">
              <option value="">All</option>
              <option value="DRAFT">Draft</option>
              <option value="UNDER_REVIEW">Under Review</option>
              <option value="ACTIVE">Active</option>
              <option value="UNDER_LOI">Under LOI</option>
              <option value="SOLD">Sold</option>
              <option value="WITHDRAWN">Withdrawn</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-apple-black text-white text-sm rounded-lg hover:bg-apple-gray-900 transition"
          >
            Filter
          </button>
          {(query || statusFilter) && (
            <a href="/admin/listings" className="px-4 py-2 text-sm text-apple-gray-500 hover:text-apple-black transition">
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
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Seller</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Sector</th>
                <th className="px-4 py-3 font-medium">Country</th>
                <th className="px-4 py-3 font-medium">Revenue</th>
                <th className="px-4 py-3 font-medium">EBITDA</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium text-center">Saves</th>
                <th className="px-4 py-3 font-medium text-center">Inq.</th>
                <th className="px-4 py-3 font-medium">Created</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing) => (
                <tr key={listing.id} className="border-b border-apple-gray-100 hover:bg-apple-gray-100/50 transition">
                  <td className="px-4 py-3 font-medium text-apple-black">{listing.title}</td>
                  <td className="px-4 py-3">
                    <Link href={`/admin/users/${listing.seller.id}`} className="text-apple-gray-700 hover:text-apple-accent transition">
                      {listing.seller.name ?? listing.seller.email}
                    </Link>
                  </td>
                  <td className="px-4 py-3"><ListingStatusBadge status={listing.status} /></td>
                  <td className="px-4 py-3 text-apple-gray-700">{listing.sector}</td>
                  <td className="px-4 py-3 text-apple-gray-700">{listing.country}</td>
                  <td className="px-4 py-3 text-apple-gray-700">{listing.revenue ? formatCurrency(listing.revenue) : "—"}</td>
                  <td className="px-4 py-3 text-apple-gray-700">{listing.ebitda ? formatCurrency(listing.ebitda) : "—"}</td>
                  <td className="px-4 py-3 text-apple-gray-700">{listing.askingPrice ? formatCurrency(listing.askingPrice) : "—"}</td>
                  <td className="px-4 py-3 text-center text-apple-gray-700">{listing._count.savedBy}</td>
                  <td className="px-4 py-3 text-center text-apple-gray-700">{listing._count.inquiries}</td>
                  <td className="px-4 py-3 text-apple-gray-500">{formatDate(listing.createdAt)}</td>
                  <td className="px-4 py-3">
                    <AdminDeleteButton resourceId={listing.id} resourceType="listing" compact />
                  </td>
                </tr>
              ))}
              {listings.length === 0 && (
                <tr>
                  <td colSpan={12} className="px-4 py-12 text-center text-apple-gray-500">
                    No listings found.
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
