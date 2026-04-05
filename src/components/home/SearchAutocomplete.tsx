"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";
import { SECTORS, COUNTRIES } from "@/lib/utils";

interface SuggestedListing {
  title: string;
  slug: string;
  sector: string;
  country: string;
}

export default function SearchAutocomplete() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [listings, setListings] = useState<SuggestedListing[]>([]);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedQuery = useDebounce(query.trim(), 300);

  // --- client-side filtering (instant) ---
  const matchedSectors = query.trim()
    ? SECTORS.filter((s) =>
        s.toLowerCase().includes(query.trim().toLowerCase())
      ).slice(0, 3)
    : [];

  const matchedCountries = query.trim()
    ? Object.entries(COUNTRIES)
        .filter(([, { name }]) =>
          name.toLowerCase().includes(query.trim().toLowerCase())
        )
        .slice(0, 3)
    : [];

  // --- fetch listings (debounced) ---
  useEffect(() => {
    if (debouncedQuery.length < 2) {
      setListings([]);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetch(`/api/listings/suggest?q=${encodeURIComponent(debouncedQuery)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setListings(data.listings ?? []);
      })
      .catch(() => {
        if (!cancelled) setListings([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [debouncedQuery]);

  // --- close on click outside ---
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // --- close on Escape ---
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    },
    []
  );

  // --- navigation helpers ---
  const goToSearch = useCallback(
    (value: string) => {
      if (value.trim()) {
        router.push(`/listings?search=${encodeURIComponent(value.trim())}`);
      }
      setOpen(false);
    },
    [router]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    goToSearch(query);
  };

  const hasSuggestions =
    matchedSectors.length > 0 ||
    matchedCountries.length > 0 ||
    listings.length > 0;

  const showDropdown = open && query.trim().length > 0 && hasSuggestions;

  return (
    <div ref={wrapperRef} className="mt-10 max-w-xl mx-auto relative">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search
            size={20}
            strokeWidth={1.5}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-apple-gray-500"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search by sector, country, or keyword..."
            className="bg-apple-gray-100 rounded-full pl-12 pr-40 py-4 text-base w-full text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent/20 transition-shadow"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-apple-accent text-white rounded-full px-6 py-2.5 text-sm font-medium transition-colors hover:bg-apple-accent-hover cursor-pointer"
          >
            Explore listings &rarr;
          </button>
        </div>
      </form>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute z-50 top-full mt-2 w-full bg-white rounded-2xl shadow-lg border border-apple-gray-200 overflow-hidden max-h-[60vh] overflow-y-auto">
          {/* Sectors */}
          {matchedSectors.length > 0 && (
            <div>
              <p className="px-4 pt-3 pb-1 text-xs font-semibold text-apple-gray-500 uppercase tracking-wide">
                Sectors
              </p>
              {matchedSectors.map((sector) => (
                <button
                  key={sector}
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    router.push(
                      `/listings?sector=${encodeURIComponent(sector)}`
                    );
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 hover:bg-apple-gray-100 text-sm text-apple-black transition-colors cursor-pointer"
                >
                  {sector}
                </button>
              ))}
            </div>
          )}

          {/* Countries */}
          {matchedCountries.length > 0 && (
            <div>
              <p className="px-4 pt-3 pb-1 text-xs font-semibold text-apple-gray-500 uppercase tracking-wide">
                Countries
              </p>
              {matchedCountries.map(([code, { name, flag }]) => (
                <button
                  key={code}
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    router.push(`/listings?country=${code}`);
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 hover:bg-apple-gray-100 text-sm text-apple-black transition-colors cursor-pointer"
                >
                  {flag} {name}
                </button>
              ))}
            </div>
          )}

          {/* Listings */}
          {listings.length > 0 && (
            <div>
              <p className="px-4 pt-3 pb-1 text-xs font-semibold text-apple-gray-500 uppercase tracking-wide">
                Listings
              </p>
              {listings.map((listing) => (
                <button
                  key={listing.slug}
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    router.push(`/listings/${listing.slug}`);
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 hover:bg-apple-gray-100 transition-colors cursor-pointer"
                >
                  <span className="text-sm text-apple-black block">
                    {listing.title}
                  </span>
                  <span className="text-xs text-apple-gray-500">
                    {listing.sector}
                    {listing.country && COUNTRIES[listing.country]
                      ? ` · ${COUNTRIES[listing.country].flag} ${COUNTRIES[listing.country].name}`
                      : ""}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Loading indicator for listings */}
          {loading && listings.length === 0 && (
            <p className="px-4 py-3 text-xs text-apple-gray-500">
              Searching listings...
            </p>
          )}
        </div>
      )}
    </div>
  );
}
