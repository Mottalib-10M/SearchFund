"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ChevronDown, Search, X } from "lucide-react";
import {
  COUNTRIES,
  SECTORS,
  EBITDA_RANGES,
  REVENUE_RANGES,
} from "@/lib/utils";

const SORT_OPTIONS = [
  { value: "recent", label: "Most recent" },
  { value: "ebitda_desc", label: "EBITDA: high to low" },
  { value: "ebitda_asc", label: "EBITDA: low to high" },
  { value: "revenue_desc", label: "Revenue: high to low" },
  { value: "price_asc", label: "Price: low to high" },
];

function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void
) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, handler]);
}

// --- Multi-select dropdown ---

function MultiSelectDropdown({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const toggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-apple-gray-300 px-3 py-2 text-sm text-apple-gray-700 hover:border-apple-gray-500 transition-colors"
      >
        {label}
        {selected.length > 0 && (
          <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-apple-accent text-[11px] font-medium text-white">
            {selected.length}
          </span>
        )}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-apple-gray-300 bg-white py-1 shadow-lg">
          {options.map((opt) => (
            <label
              key={opt.value}
              className="flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm text-apple-gray-700 hover:bg-apple-gray-100"
            >
              <input
                type="checkbox"
                checked={selected.includes(opt.value)}
                onChange={() => toggle(opt.value)}
                className="h-3.5 w-3.5 rounded border-apple-gray-300 accent-apple-accent"
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Single-select dropdown ---

function SingleSelectDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const activeLabel = options.find((o) => o.value === value)?.label;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-apple-gray-300 px-3 py-2 text-sm text-apple-gray-700 hover:border-apple-gray-500 transition-colors"
      >
        {activeLabel || label}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-apple-gray-300 bg-white py-1 shadow-lg">
          <button
            type="button"
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
            className={`block w-full px-3 py-1.5 text-left text-sm hover:bg-apple-gray-100 ${
              !value ? "text-apple-accent font-medium" : "text-apple-gray-700"
            }`}
          >
            All
          </button>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`block w-full px-3 py-1.5 text-left text-sm hover:bg-apple-gray-100 ${
                value === opt.value
                  ? "text-apple-accent font-medium"
                  : "text-apple-gray-700"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Main filters component ---

export default function ListingFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Read current filter state from URL
  const search = searchParams.get("search") ?? "";
  const countries = searchParams.get("country")?.split(",").filter(Boolean) ?? [];
  const sectors = searchParams.get("sector")?.split(",").filter(Boolean) ?? [];
  const ebitdaRange = searchParams.get("ebitda") ?? "";
  const revenueRange = searchParams.get("revenue") ?? "";
  const sort = searchParams.get("sort") ?? "";

  const [searchInput, setSearchInput] = useState(search);

  // Sync search input when URL changes externally
  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  // Build new URL and push
  const updateParams = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      // Remove page when filters change
      params.delete("page");
      for (const [key, val] of Object.entries(updates)) {
        if (val) {
          params.set(key, val);
        } else {
          params.delete(key);
        }
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateParams({ search: searchInput });
  };

  const clearAll = () => {
    router.push(pathname);
    setSearchInput("");
  };

  // Determine active filters for pills
  const activeFilters: { key: string; label: string; clear: () => void }[] = [];

  if (search) {
    activeFilters.push({
      key: "search",
      label: `"${search}"`,
      clear: () => {
        updateParams({ search: "" });
        setSearchInput("");
      },
    });
  }
  for (const code of countries) {
    const name = COUNTRIES[code]?.name ?? code;
    activeFilters.push({
      key: `country-${code}`,
      label: name,
      clear: () =>
        updateParams({
          country: countries.filter((c) => c !== code).join(","),
        }),
    });
  }
  for (const s of sectors) {
    activeFilters.push({
      key: `sector-${s}`,
      label: s,
      clear: () =>
        updateParams({
          sector: sectors.filter((x) => x !== s).join(","),
        }),
    });
  }
  if (ebitdaRange) {
    const range = EBITDA_RANGES.find(
      (r) => `${r.min}-${r.max}` === ebitdaRange
    );
    activeFilters.push({
      key: "ebitda",
      label: `EBITDA: ${range?.label ?? ebitdaRange}`,
      clear: () => updateParams({ ebitda: "" }),
    });
  }
  if (revenueRange) {
    const range = REVENUE_RANGES.find(
      (r) => `${r.min}-${r.max}` === revenueRange
    );
    activeFilters.push({
      key: "revenue",
      label: `Revenue: ${range?.label ?? revenueRange}`,
      clear: () => updateParams({ revenue: "" }),
    });
  }

  // Dropdown option arrays
  const countryOptions = Object.entries(COUNTRIES).map(([code, c]) => ({
    value: code,
    label: `${c.flag} ${c.name}`,
  }));

  const sectorOptions = SECTORS.map((s) => ({ value: s, label: s }));

  const ebitdaOptions = EBITDA_RANGES.map((r) => ({
    value: `${r.min}-${r.max}`,
    label: r.label,
  }));

  const revenueOptions = REVENUE_RANGES.map((r) => ({
    value: `${r.min}-${r.max}`,
    label: r.label,
  }));

  const sortOptions = SORT_OPTIONS.map((o) => ({
    value: o.value,
    label: o.label,
  }));

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-apple-gray-100 py-4">
      {/* Filter controls row */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Search input */}
        <form onSubmit={handleSearchSubmit} className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-apple-gray-500" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by sector, country, keyword..."
            className="w-full rounded-lg border border-apple-gray-300 py-2 pl-9 pr-3 text-sm text-apple-black placeholder:text-apple-gray-500 focus:border-apple-accent focus:ring-1 focus:ring-apple-accent transition-colors"
          />
        </form>

        {/* Country multi-select */}
        <MultiSelectDropdown
          label="Country"
          options={countryOptions}
          selected={countries}
          onChange={(vals) => updateParams({ country: vals.join(",") })}
        />

        {/* Sector multi-select */}
        <MultiSelectDropdown
          label="Sector"
          options={sectorOptions}
          selected={sectors}
          onChange={(vals) => updateParams({ sector: vals.join(",") })}
        />

        {/* EBITDA single-select */}
        <SingleSelectDropdown
          label="EBITDA"
          options={ebitdaOptions}
          value={ebitdaRange}
          onChange={(val) => updateParams({ ebitda: val })}
        />

        {/* Revenue single-select */}
        <SingleSelectDropdown
          label="Revenue"
          options={revenueOptions}
          value={revenueRange}
          onChange={(val) => updateParams({ revenue: val })}
        />

        {/* Sort */}
        <SingleSelectDropdown
          label="Sort"
          options={sortOptions}
          value={sort}
          onChange={(val) => updateParams({ sort: val })}
        />
      </div>

      {/* Active filter pills */}
      {activeFilters.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {activeFilters.map((f) => (
            <span
              key={f.key}
              className="inline-flex items-center gap-1 rounded-full bg-apple-gray-100 px-2.5 py-0.5 text-xs text-apple-gray-700"
            >
              {f.label}
              <button
                type="button"
                onClick={f.clear}
                className="ml-0.5 hover:text-apple-black transition-colors"
                aria-label={`Remove ${f.label} filter`}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-apple-accent hover:underline"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}
