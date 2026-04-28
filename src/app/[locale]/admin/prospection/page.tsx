import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { InvestorTypeBadge } from "../_components/AdminBadges";
import { MiniStat } from "../_components/AdminStatCard";
import {
  PROSPECTION_INVESTORS,
  INVESTOR_TYPES,
  INVESTOR_COUNTRIES,
} from "../_data/prospection-investors";
import { ExportCSVButton } from "./ExportCSVButton";

export const dynamic = "force-dynamic";

const PER_PAGE = 25;

interface Props {
  searchParams: Promise<{
    page?: string;
    q?: string;
    type?: string;
    country?: string;
    sort?: string;
    dir?: string;
  }>;
}

export default async function AdminProspectionPage({ searchParams }: Props) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) redirect("/admin/login");

  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));
  const query = (params.q ?? "").toLowerCase();
  const typeFilter = params.type ?? "";
  const countryFilter = params.country ?? "";
  const sortField = params.sort ?? "name";
  const sortDir = (params.dir ?? "asc") as "asc" | "desc";

  // Filter
  let filtered = PROSPECTION_INVESTORS;
  if (query) {
    filtered = filtered.filter(
      (inv) =>
        inv.name.toLowerCase().includes(query) ||
        inv.description.toLowerCase().includes(query) ||
        inv.contact.toLowerCase().includes(query)
    );
  }
  if (typeFilter) {
    filtered = filtered.filter((inv) => inv.type === typeFilter);
  }
  if (countryFilter) {
    filtered = filtered.filter((inv) => inv.country === countryFilter);
  }

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    const aVal = a[sortField as keyof typeof a] ?? "";
    const bVal = b[sortField as keyof typeof b] ?? "";
    const cmp = String(aVal).localeCompare(String(bVal));
    return sortDir === "asc" ? cmp : -cmp;
  });

  const totalCount = sorted.length;
  const totalPages = Math.ceil(totalCount / PER_PAGE);
  const paginated = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  // Stats by type
  const typeCounts = new Map<string, number>();
  for (const inv of PROSPECTION_INVESTORS) {
    typeCounts.set(inv.type, (typeCounts.get(inv.type) ?? 0) + 1);
  }

  function sortUrl(field: string) {
    const newDir = sortField === field && sortDir === "asc" ? "desc" : "asc";
    const p = new URLSearchParams();
    if (query) p.set("q", params.q ?? "");
    if (typeFilter) p.set("type", typeFilter);
    if (countryFilter) p.set("country", countryFilter);
    p.set("sort", field);
    p.set("dir", newDir);
    return `/admin/prospection?${p.toString()}`;
  }

  function SortIcon({ field }: { field: string }) {
    if (sortField !== field)
      return <span className="text-apple-gray-300 ml-1">&#8597;</span>;
    return <span className="ml-1">{sortDir === "desc" ? "\u2193" : "\u2191"}</span>;
  }

  function pageUrl(p: number) {
    const sp = new URLSearchParams();
    if (query) sp.set("q", params.q ?? "");
    if (typeFilter) sp.set("type", typeFilter);
    if (countryFilter) sp.set("country", countryFilter);
    if (sortField !== "name") sp.set("sort", sortField);
    if (sortDir !== "asc") sp.set("dir", sortDir);
    sp.set("page", String(p));
    return `/admin/prospection?${sp.toString()}`;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-apple-black">
            Prospection
          </h1>
          <p className="text-sm text-apple-gray-500 mt-1">
            {PROSPECTION_INVESTORS.length} search fund investors compiled from
            web research
          </p>
        </div>
        <ExportCSVButton />
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-3 mb-6">
        <MiniStat label="Total" value={PROSPECTION_INVESTORS.length} />
        {[...typeCounts.entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([type, count]) => (
            <MiniStat key={type} label={type} value={count} />
          ))}
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
              defaultValue={params.q ?? ""}
              placeholder="Name or description..."
              className="form-input w-full"
            />
          </div>
          <div>
            <label className="block text-xs text-apple-gray-500 mb-1">
              Type
            </label>
            <select
              name="type"
              defaultValue={typeFilter}
              className="form-input"
            >
              <option value="">All</option>
              {INVESTOR_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-apple-gray-500 mb-1">
              Country
            </label>
            <select
              name="country"
              defaultValue={countryFilter}
              className="form-input"
            >
              <option value="">All</option>
              {INVESTOR_COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-apple-black text-white text-sm rounded-lg hover:bg-apple-gray-900 transition"
          >
            Filter
          </button>
          {(query || typeFilter || countryFilter) && (
            <a
              href="/admin/prospection"
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
                  <Link
                    href={sortUrl("name")}
                    className="hover:text-apple-black"
                  >
                    Name <SortIcon field="name" />
                  </Link>
                </th>
                <th className="px-4 py-3 font-medium">
                  <Link
                    href={sortUrl("type")}
                    className="hover:text-apple-black"
                  >
                    Type <SortIcon field="type" />
                  </Link>
                </th>
                <th className="px-4 py-3 font-medium">
                  <Link
                    href={sortUrl("country")}
                    className="hover:text-apple-black"
                  >
                    Country <SortIcon field="country" />
                  </Link>
                </th>
                <th className="px-4 py-3 font-medium">Check Size</th>
                <th className="px-4 py-3 font-medium">Description</th>
                <th className="px-4 py-3 font-medium">Website</th>
                <th className="px-4 py-3 font-medium">Contact</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((inv) => (
                <tr
                  key={inv.id}
                  className="border-b border-apple-gray-100 hover:bg-apple-gray-100/50 transition"
                >
                  <td className="px-4 py-3 font-medium text-apple-black whitespace-nowrap">
                    {inv.name}
                  </td>
                  <td className="px-4 py-3">
                    <InvestorTypeBadge type={inv.type} />
                  </td>
                  <td className="px-4 py-3 text-apple-gray-700 whitespace-nowrap">
                    {inv.country || "\u2014"}
                  </td>
                  <td className="px-4 py-3 text-apple-gray-700 whitespace-nowrap">
                    {inv.checkSize || "\u2014"}
                  </td>
                  <td
                    className="px-4 py-3 text-apple-gray-500 max-w-[250px] truncate"
                    title={inv.description}
                  >
                    {inv.description || "\u2014"}
                  </td>
                  <td className="px-4 py-3">
                    {inv.website ? (
                      <a
                        href={inv.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-apple-investor hover:underline"
                      >
                        <ExternalLink size={14} />
                        <span className="sr-only">Website</span>
                      </a>
                    ) : (
                      <span className="text-apple-gray-400">{"\u2014"}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-apple-gray-700">
                    {inv.contact ? (
                      inv.contact.includes("@") ? (
                        <a
                          href={`mailto:${inv.contact}`}
                          className="text-apple-investor hover:underline"
                        >
                          {inv.contact}
                        </a>
                      ) : (
                        <span title={inv.contact} className="max-w-[150px] truncate block">
                          {inv.contact}
                        </span>
                      )
                    ) : (
                      "\u2014"
                    )}
                  </td>
                </tr>
              ))}
              {paginated.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-12 text-center text-apple-gray-500"
                  >
                    No investors found.
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
              Page {page} of {totalPages} ({totalCount} result
              {totalCount !== 1 ? "s" : ""})
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
