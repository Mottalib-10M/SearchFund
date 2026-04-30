"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { ProgramCard, Region, Tier } from "@/app/[locale]/mba/_data/program-registry";

// ---------------------------------------------------------------------------
// Filter labels
// ---------------------------------------------------------------------------

const REGION_FILTERS: { id: Region | "all"; label: string }[] = [
  { id: "all", label: "All Regions" },
  { id: "north-america", label: "North America" },
  { id: "europe", label: "Europe" },
];

const TIER_LABELS: Record<Tier, { label: string; color: string }> = {
  1: { label: "Tier 1", color: "bg-amber-100 text-amber-800" },
  2: { label: "Tier 2", color: "bg-blue-100 text-blue-800" },
  3: { label: "Tier 3", color: "bg-gray-100 text-gray-700" },
};

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface MbaHubProps {
  programs: ProgramCard[];
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function MbaHub({ programs }: MbaHubProps) {
  const [region, setRegion] = useState<Region | "all">("all");

  const filtered = useMemo(() => {
    if (region === "all") return programs;
    return programs.filter((p) => p.region === region);
  }, [programs, region]);

  // Group by tier
  const byTier = useMemo(() => {
    const groups: Record<Tier, ProgramCard[]> = { 1: [], 2: [], 3: [] };
    for (const p of filtered) {
      groups[p.tier].push(p);
    }
    return groups;
  }, [filtered]);

  const tierTitles: Record<Tier, string> = {
    1: "Tier 1: The Pioneers",
    2: "Tier 2: Strong Infrastructure",
    3: "Tier 3: Emerging Programs",
  };

  return (
    <div>
      {/* Region filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {REGION_FILTERS.map((f) => {
          const count =
            f.id === "all"
              ? programs.length
              : programs.filter((p) => p.region === f.id).length;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setRegion(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                region === f.id
                  ? "bg-apple-black text-white"
                  : "bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200"
              }`}
            >
              {f.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Program cards by tier */}
      {([1, 2, 3] as Tier[]).map((tier) => {
        const tierPrograms = byTier[tier];
        if (tierPrograms.length === 0) return null;
        return (
          <section key={tier} className="mb-10">
            <h2 className="text-xl font-semibold text-apple-black mb-4">
              {tierTitles[tier]}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tierPrograms.map((p) => (
                <Link
                  key={p.slug}
                  href={`/mba/${p.slug}`}
                  className="group block rounded-xl border border-apple-gray-300/50 bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-base font-semibold text-apple-black group-hover:text-apple-accent transition-colors">
                      {p.shortName}
                    </h3>
                    <span
                      className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-medium ${TIER_LABELS[p.tier].color}`}
                    >
                      {TIER_LABELS[p.tier].label}
                    </span>
                  </div>
                  <p className="text-xs text-apple-gray-500 mb-2">
                    {p.location}
                  </p>
                  <p className="text-sm text-apple-gray-700 leading-relaxed mb-3">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-apple-gray-500">
                    <span>
                      {p.courseCount > 0
                        ? `${p.courseCount} ETA course${p.courseCount > 1 ? "s" : ""}`
                        : "No dedicated course yet"}
                    </span>
                    {p.isStub && (
                      <span className="px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-700 text-xs">
                        Emerging
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-apple-gray-500">
            No programs match the selected region.
          </p>
          <button
            type="button"
            onClick={() => setRegion("all")}
            className="mt-3 text-sm text-apple-accent hover:underline cursor-pointer"
          >
            Show all programs
          </button>
        </div>
      )}
    </div>
  );
}
