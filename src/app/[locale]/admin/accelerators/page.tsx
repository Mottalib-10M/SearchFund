import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import { MiniStat } from "../_components/AdminStatCard";
import {
  PROSPECTION_ACCELERATORS,
  ACCELERATOR_TYPES,
  ACCELERATOR_COUNTRIES,
  ACCELERATOR_REGIONS,
} from "../_data/prospection-accelerators";
import { ExportCSVButton } from "./ExportCSVButton";

export const dynamic = "force-dynamic";

const PER_PAGE = 25;

function TypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    Accelerator: "bg-purple-100 text-purple-700",
    "Fund of Funds": "bg-blue-100 text-blue-700",
    Platform: "bg-amber-100 text-amber-700",
    "Investor Network": "bg-green-100 text-green-700",
    "Academic Program": "bg-rose-100 text-rose-700",
  };
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${colors[type] ?? "bg-apple-gray-100 text-apple-gray-700"}`}
    >
      {type}
    </span>
  );
}

interface Props {
  searchParams: Promise<{
    page?: string;
    q?: string;
    type?: string;
    country?: string;
    region?: string;
    sort?: string;
    dir?: string;
  }>;
}

export default async function AdminAcceleratorsPage({
  searchParams,
}: Props) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) redirect("/admin/login");

  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1"));
  const query = (params.q ?? "").toLowerCase();
  const typeFilter = params.type ?? "";
  const countryFilter = params.country ?? "";
  const regionFilter = params.region ?? "";
  const sortField = params.sort ?? "name";
  const sortDir = (params.dir ?? "asc") as "asc" | "desc";

  // Filter
  let filtered = PROSPECTION_ACCELERATORS;
  if (query) {
    filtered = filtered.filter(
      (a) =>
        a.name.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query) ||
        a.founders.toLowerCase().includes(query) ||
        a.focusRegion.toLowerCase().includes(query)
    );
  }
  if (typeFilter) {
    filtered = filtered.filter((a) => a.type === typeFilter);
  }
  if (countryFilter) {
    filtered = filtered.filter((a) => a.country === countryFilter);
  }
  if (regionFilter) {
    filtered = filtered.filter((a) => a.focusRegion.includes(regionFilter));
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
  for (const a of PROSPECTION_ACCELERATORS) {
    typeCounts.set(a.type, (typeCounts.get(a.type) ?? 0) + 1);
  }

  function sortUrl(field: string) {
    const newDir = sortField === field && sortDir === "asc" ? "desc" : "asc";
    const p = new URLSearchParams();
    if (query) p.set("q", params.q ?? "");
    if (typeFilter) p.set("type", typeFilter);
    if (countryFilter) p.set("country", countryFilter);
    if (regionFilter) p.set("region", regionFilter);
    p.set("sort", field);
    p.set("dir", newDir);
    return `/admin/accelerators?${p.toString()}`;
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
    if (typeFilter) sp.set("type", typeFilter);
    if (countryFilter) sp.set("country", countryFilter);
    if (regionFilter) sp.set("region", regionFilter);
    if (sortField !== "name") sp.set("sort", sortField);
    if (sortDir !== "asc") sp.set("dir", sortDir);
    sp.set("page", String(p));
    return `/admin/accelerators?${sp.toString()}`;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-apple-black">
            Accelerators
          </h1>
          <p className="text-sm text-apple-gray-500 mt-1">
            {PROSPECTION_ACCELERATORS.length} search fund accelerators,
            platforms &amp; programs worldwide
          </p>
        </div>
        <ExportCSVButton />
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-3 mb-6">
        <MiniStat label="Total" value={PROSPECTION_ACCELERATORS.length} />
        {[...typeCounts.entries()]
          .sort((a, b) => b[1] - a[1])
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
              placeholder="Name, founder, region..."
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
              {ACCELERATOR_TYPES.map((t) => (
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
              {ACCELERATOR_COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-apple-gray-500 mb-1">
              Region Focus
            </label>
            <select
              name="region"
              defaultValue={regionFilter}
              className="form-input"
            >
              <option value="">All</option>
              {ACCELERATOR_REGIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
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
          {(query || typeFilter || countryFilter || regionFilter) && (
            <a
              href="/admin/accelerators"
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
              <th className="px-3 py-3 font-medium w-[10%]">
                <Link
                  href={sortUrl("type")}
                  className="hover:text-apple-black"
                >
                  Type <SortIcon field="type" />
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
              <th className="px-3 py-3 font-medium w-[10%]">
                <Link
                  href={sortUrl("focusRegion")}
                  className="hover:text-apple-black"
                >
                  Region <SortIcon field="focusRegion" />
                </Link>
              </th>
              <th className="px-3 py-3 font-medium w-[14%]">Founders</th>
              <th className="px-3 py-3 font-medium w-[6%]">SFs</th>
              <th className="px-3 py-3 font-medium w-[6%]">Deals</th>
              <th className="px-3 py-3 font-medium w-[26%]">Description</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((a) => (
              <tr
                key={a.id}
                className="border-b border-apple-gray-100 hover:bg-apple-gray-100/50 transition"
              >
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="font-medium text-apple-black truncate"
                      title={a.name}
                    >
                      {a.name}
                    </span>
                    {a.website && (
                      <a
                        href={a.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-apple-investor hover:text-apple-investor/70 shrink-0"
                      >
                        <ExternalLink size={12} />
                      </a>
                    )}
                    {a.contact && a.contact.includes("@") && (
                      <a
                        href={`mailto:${a.contact}`}
                        className="text-apple-gray-400 hover:text-apple-investor shrink-0"
                      >
                        <Mail size={12} />
                      </a>
                    )}
                  </div>
                </td>
                <td className="px-3 py-2.5">
                  <TypeBadge type={a.type} />
                </td>
                <td
                  className="px-3 py-2.5 text-apple-gray-700 truncate"
                  title={a.country}
                >
                  {a.country || "\u2014"}
                </td>
                <td
                  className="px-3 py-2.5 text-apple-gray-700 truncate"
                  title={a.focusRegion}
                >
                  {a.focusRegion || "\u2014"}
                </td>
                <td
                  className="px-3 py-2.5 text-apple-gray-700 truncate"
                  title={a.founders}
                >
                  {a.founders || "\u2014"}
                </td>
                <td className="px-3 py-2.5 text-apple-gray-700 text-center">
                  {a.searchersBacked ?? "\u2014"}
                </td>
                <td className="px-3 py-2.5 text-apple-gray-700 text-center">
                  {a.acquisitionsCompleted ?? "\u2014"}
                </td>
                <td
                  className="px-3 py-2.5 text-apple-gray-500 truncate"
                  title={a.description}
                >
                  {a.description || "\u2014"}
                </td>
              </tr>
            ))}
            {paginated.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-3 py-12 text-center text-apple-gray-500"
                >
                  No accelerators found.
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
