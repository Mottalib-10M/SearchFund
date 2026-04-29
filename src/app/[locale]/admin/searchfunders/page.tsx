import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import { MiniStat } from "../_components/AdminStatCard";
import {
  PROSPECTION_SEARCHFUNDERS,
  SEARCHFUNDER_STATUSES,
  SEARCHFUNDER_COUNTRIES,
  SEARCHFUNDER_MBAS,
} from "../_data/prospection-searchfunders";
import { ExportCSVButton } from "./ExportCSVButton";

export const dynamic = "force-dynamic";

const PER_PAGE = 25;

function SearcherStatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Searching: "bg-amber-100 text-amber-700",
    Acquired: "bg-green-100 text-green-700",
    Exited: "bg-blue-100 text-blue-700",
    Failed: "bg-red-100 text-red-700",
  };
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${colors[status] ?? "bg-apple-gray-100 text-apple-gray-700"}`}
    >
      {status}
    </span>
  );
}

interface Props {
  searchParams: Promise<{
    page?: string;
    q?: string;
    status?: string;
    country?: string;
    mba?: string;
    sort?: string;
    dir?: string;
  }>;
}

export default async function AdminSearchfundersPage({
  searchParams,
}: Props) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) redirect("/admin/login");

  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));
  const query = (params.q ?? "").toLowerCase();
  const statusFilter = params.status ?? "";
  const countryFilter = params.country ?? "";
  const mbaFilter = params.mba ?? "";
  const sortField = params.sort ?? "name";
  const sortDir = (params.dir ?? "asc") as "asc" | "desc";

  // Filter
  let filtered = PROSPECTION_SEARCHFUNDERS;
  if (query) {
    filtered = filtered.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.companyAcquired.toLowerCase().includes(query) ||
        s.mba.toLowerCase().includes(query)
    );
  }
  if (statusFilter) {
    filtered = filtered.filter((s) => s.status === statusFilter);
  }
  if (countryFilter) {
    filtered = filtered.filter((s) => s.country === countryFilter);
  }
  if (mbaFilter) {
    filtered = filtered.filter((s) => s.mba.includes(mbaFilter));
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

  // Stats by status
  const statusCounts = new Map<string, number>();
  for (const s of PROSPECTION_SEARCHFUNDERS) {
    statusCounts.set(s.status, (statusCounts.get(s.status) ?? 0) + 1);
  }

  function sortUrl(field: string) {
    const newDir = sortField === field && sortDir === "asc" ? "desc" : "asc";
    const p = new URLSearchParams();
    if (query) p.set("q", params.q ?? "");
    if (statusFilter) p.set("status", statusFilter);
    if (countryFilter) p.set("country", countryFilter);
    if (mbaFilter) p.set("mba", mbaFilter);
    p.set("sort", field);
    p.set("dir", newDir);
    return `/admin/searchfunders?${p.toString()}`;
  }

  function SortIcon({ field }: { field: string }) {
    if (sortField !== field)
      return <span className="text-apple-gray-300 ml-1">&#8597;</span>;
    return (
      <span className="ml-1">{sortDir === "desc" ? "\u2193" : "\u2191"}</span>
    );
  }

  function pageUrl(p: number) {
    const sp = new URLSearchParams();
    if (query) sp.set("q", params.q ?? "");
    if (statusFilter) sp.set("status", statusFilter);
    if (countryFilter) sp.set("country", countryFilter);
    if (mbaFilter) sp.set("mba", mbaFilter);
    if (sortField !== "name") sp.set("sort", sortField);
    if (sortDir !== "asc") sp.set("dir", sortDir);
    sp.set("page", String(p));
    return `/admin/searchfunders?${sp.toString()}`;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-apple-black">
            Searchfunders
          </h1>
          <p className="text-sm text-apple-gray-500 mt-1">
            {PROSPECTION_SEARCHFUNDERS.length} search fund entrepreneurs
            compiled from web research
          </p>
        </div>
        <ExportCSVButton />
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-3 mb-6">
        <MiniStat label="Total" value={PROSPECTION_SEARCHFUNDERS.length} />
        {[...statusCounts.entries()]
          .sort((a, b) => b[1] - a[1])
          .map(([status, count]) => (
            <MiniStat key={status} label={status} value={count} />
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
              placeholder="Name, company, MBA..."
              className="form-input w-full"
            />
          </div>
          <div>
            <label className="block text-xs text-apple-gray-500 mb-1">
              Status
            </label>
            <select
              name="status"
              defaultValue={statusFilter}
              className="form-input"
            >
              <option value="">All</option>
              {SEARCHFUNDER_STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s}
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
              {SEARCHFUNDER_COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-apple-gray-500 mb-1">
              MBA
            </label>
            <select
              name="mba"
              defaultValue={mbaFilter}
              className="form-input"
            >
              <option value="">All</option>
              {SEARCHFUNDER_MBAS.map((m) => (
                <option key={m} value={m}>
                  {m}
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
          {(query || statusFilter || countryFilter || mbaFilter) && (
            <a
              href="/admin/searchfunders"
              className="px-4 py-2 text-sm text-apple-gray-500 hover:text-apple-black transition"
            >
              Clear
            </a>
          )}
        </form>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm table-fixed">
          <thead>
            <tr className="text-left text-apple-gray-500 border-b border-apple-gray-200">
              <th className="px-3 py-3 font-medium w-[18%]">
                <Link
                  href={sortUrl("name")}
                  className="hover:text-apple-black"
                >
                  Name <SortIcon field="name" />
                </Link>
              </th>
              <th className="px-3 py-3 font-medium w-[8%]">
                <Link
                  href={sortUrl("status")}
                  className="hover:text-apple-black"
                >
                  Status <SortIcon field="status" />
                </Link>
              </th>
              <th className="px-3 py-3 font-medium w-[10%]">
                <Link
                  href={sortUrl("country")}
                  className="hover:text-apple-black"
                >
                  Country <SortIcon field="country" />
                </Link>
              </th>
              <th className="px-3 py-3 font-medium w-[12%]">
                <Link
                  href={sortUrl("mba")}
                  className="hover:text-apple-black"
                >
                  MBA <SortIcon field="mba" />
                </Link>
              </th>
              <th className="px-3 py-3 font-medium w-[14%]">Previous Role</th>
              <th className="px-3 py-3 font-medium w-[14%]">Company Acquired</th>
              <th className="px-3 py-3 font-medium w-[24%]">Description</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((s) => (
              <tr
                key={s.id}
                className="border-b border-apple-gray-100 hover:bg-apple-gray-100/50 transition"
              >
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="font-medium text-apple-black truncate"
                      title={s.name}
                    >
                      {s.name}
                    </span>
                    {s.website && (
                      <a
                        href={s.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-apple-investor hover:text-apple-investor/70 shrink-0"
                      >
                        <ExternalLink size={12} />
                      </a>
                    )}
                    {s.contact && s.contact.includes("@") && (
                      <a
                        href={`mailto:${s.contact}`}
                        className="text-apple-gray-400 hover:text-apple-investor shrink-0"
                      >
                        <Mail size={12} />
                      </a>
                    )}
                  </div>
                </td>
                <td className="px-3 py-2.5">
                  <SearcherStatusBadge status={s.status} />
                </td>
                <td
                  className="px-3 py-2.5 text-apple-gray-700 truncate"
                  title={s.country}
                >
                  {s.country || "\u2014"}
                </td>
                <td
                  className="px-3 py-2.5 text-apple-gray-700 truncate"
                  title={s.mba}
                >
                  {s.mba || "\u2014"}
                </td>
                <td
                  className="px-3 py-2.5 text-apple-gray-700 truncate"
                  title={s.previousRole}
                >
                  {s.previousRole || "\u2014"}
                </td>
                <td
                  className="px-3 py-2.5 text-apple-gray-700 truncate"
                  title={s.companyAcquired ? `${s.companyAcquired} (${s.sector})` : ""}
                >
                  {s.companyAcquired || "\u2014"}
                </td>
                <td
                  className="px-3 py-2.5 text-apple-gray-500 truncate"
                  title={s.description}
                >
                  {s.description || "\u2014"}
                </td>
              </tr>
            ))}
            {paginated.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-3 py-12 text-center text-apple-gray-500"
                >
                  No searchfunders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

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
