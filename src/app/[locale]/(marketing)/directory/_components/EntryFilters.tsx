"use client";

import { useState, useMemo } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FilterableEntry {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  tag: string | null;
  filters: Record<string, string[]>;
}

interface FilterDef {
  key: string;
  label: string;
}

interface EntryFiltersProps {
  entries: FilterableEntry[];
  filterDefs: FilterDef[];
  locale: string;
  categorySlug: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function EntryFilters({
  entries,
  filterDefs,
  locale,
  categorySlug,
}: EntryFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>(
    {},
  );

  // Build available options per filter
  const filterOptions = useMemo(() => {
    const opts: Record<string, string[]> = {};
    for (const def of filterDefs) {
      const values = new Set<string>();
      for (const entry of entries) {
        const vals = entry.filters[def.key] ?? [];
        for (const v of vals) values.add(v);
      }
      const sorted = Array.from(values).sort((a, b) => a.localeCompare(b));
      opts[def.key] = sorted;
    }
    return opts;
  }, [entries, filterDefs]);

  // Filter entries
  const filtered = useMemo(() => {
    return entries.filter((entry) => {
      for (const key of Object.keys(activeFilters)) {
        const selected = activeFilters[key];
        if (!selected) continue;
        const entryVals = entry.filters[key] ?? [];
        if (!entryVals.includes(selected)) return false;
      }
      return true;
    });
  }, [entries, activeFilters]);

  function toggleFilter(key: string, value: string) {
    setActiveFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? "" : value,
    }));
  }

  return (
    <>
      {/* Filter pills */}
      {filterDefs.length > 0 && (
        <div className="mt-8 space-y-3">
          {filterDefs.map((def) => {
            const options = filterOptions[def.key] ?? [];
            if (options.length <= 1) return null;
            return (
              <div key={def.key}>
                <span className="text-xs font-medium text-apple-gray-500 mr-2">
                  {def.label}:
                </span>
                <div className="inline-flex flex-wrap gap-1.5">
                  {options.map((opt) => {
                    const active = activeFilters[def.key] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => toggleFilter(def.key, opt)}
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-colors capitalize ${
                          active
                            ? "bg-apple-black text-white"
                            : "bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Count */}
      <p className="mt-6 text-xs text-apple-gray-400">
        {filtered.length} of {entries.length}{" "}
        {entries.length === 1 ? "entry" : "entries"}
        {Object.values(activeFilters).some(Boolean) && (
          <button
            onClick={() => setActiveFilters({})}
            className="ml-2 text-apple-accent hover:underline"
          >
            Clear filters
          </button>
        )}
      </p>

      {/* Entry cards — 2-column grid */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {filtered.map((entry) => (
          <Link
            key={entry.slug}
            href={`/${locale}/directory/${categorySlug}/${entry.slug}`}
            className="group flex flex-col justify-between rounded-xl border border-apple-gray-200 p-5 hover:border-apple-accent/30 hover:bg-apple-accent/[0.02] transition-all"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-base font-semibold text-apple-black group-hover:text-apple-accent transition-colors">
                  {entry.name}
                </h2>
                {entry.tag && (
                  <span className="shrink-0 rounded-full bg-apple-gray-100 px-2.5 py-0.5 text-xs text-apple-gray-600 capitalize">
                    {entry.tag}
                  </span>
                )}
              </div>
              {entry.subtitle && (
                <p className="text-xs text-apple-gray-500 mt-1 capitalize">
                  {entry.subtitle}
                </p>
              )}
              <p className="text-sm text-apple-gray-600 mt-2 line-clamp-2">
                {entry.description}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm text-apple-accent mt-4 group-hover:gap-2 transition-all">
              View details <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-apple-gray-500 text-sm text-center">
          No entries match your filters.
        </p>
      )}
    </>
  );
}
