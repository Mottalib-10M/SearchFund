"use client";

import { useState, useMemo } from "react";

// ---------------------------------------------------------------------------
// Sector data: slug, label, low multiple, high multiple
// ---------------------------------------------------------------------------

const SECTORS = [
  { slug: "business-services", label: "Business Services", low: 5, high: 8 },
  { slug: "technology-saas", label: "Technology / SaaS", low: 8, high: 15 },
  { slug: "healthcare-services", label: "Healthcare Services", low: 7, high: 10 },
  { slug: "manufacturing", label: "Manufacturing", low: 4, high: 7 },
  { slug: "distribution-logistics", label: "Distribution / Logistics", low: 4, high: 6 },
  { slug: "food-beverage", label: "Food & Beverage", low: 5, high: 8 },
  { slug: "education-training", label: "Education / Training", low: 6, high: 9 },
  { slug: "financial-services", label: "Financial Services", low: 6, high: 10 },
  { slug: "construction-trades", label: "Construction / Trades", low: 3, high: 6 },
  { slug: "retail", label: "Retail", low: 3, high: 5 },
  { slug: "professional-services", label: "Professional Services", low: 4, high: 7 },
] as const;

// ---------------------------------------------------------------------------
// Size adjustments based on company revenue
// ---------------------------------------------------------------------------

const SIZE_ADJUSTMENTS = [
  { slug: "1-5m", label: "$1\u20135M revenue", adjustment: -1 },
  { slug: "5-15m", label: "$5\u201315M revenue", adjustment: 0 },
  { slug: "15-50m", label: "$15\u201350M revenue", adjustment: 1 },
  { slug: "50m-plus", label: "$50M+ revenue", adjustment: 2 },
] as const;

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

function fmtCurrency(n: number): string {
  if (n >= 1_000_000) {
    return `$${(n / 1_000_000).toFixed(1)}M`;
  }
  return `$${n.toLocaleString("en-US")}`;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function EbitdaMultipleWidget() {
  const [sectorIdx, setSectorIdx] = useState(0);
  const [sizeIdx, setSizeIdx] = useState(1); // default to $5-15M (base)
  const [ebitda, setEbitda] = useState(500_000);

  const sector = SECTORS[sectorIdx];
  const size = SIZE_ADJUSTMENTS[sizeIdx];

  const { lowMult, midMult, highMult, lowVal, midVal, highVal } = useMemo(() => {
    const adj = size.adjustment;
    const lo = Math.max(1, sector.low + adj);
    const hi = Math.max(lo, sector.high + adj);
    const mid = (lo + hi) / 2;
    return {
      lowMult: lo,
      midMult: mid,
      highMult: hi,
      lowVal: lo * ebitda,
      midVal: mid * ebitda,
      highVal: hi * ebitda,
    };
  }, [sector, size, ebitda]);

  return (
    <div className="rounded-2xl border border-apple-gray-200 bg-white p-6 sm:p-8">
      <h3 className="text-xl font-semibold text-apple-black">
        EBITDA Multiple Estimator
      </h3>
      <p className="text-sm text-apple-gray-500 mt-1">
        Select a sector, company size, and enter EBITDA to estimate enterprise
        value.
      </p>

      {/* ---- Inputs ---- */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {/* Sector */}
        <div>
          <label
            htmlFor="ebitda-sector"
            className="block text-sm font-medium text-apple-gray-700 mb-1.5"
          >
            Sector
          </label>
          <select
            id="ebitda-sector"
            value={sectorIdx}
            onChange={(e) => setSectorIdx(Number(e.target.value))}
            className="w-full rounded-xl border border-apple-gray-200 bg-apple-gray-50 px-4 py-2.5 text-sm text-apple-black focus:outline-none focus:ring-2 focus:ring-apple-accent/40"
          >
            {SECTORS.map((s, i) => (
              <option key={s.slug} value={i}>
                {s.label} ({s.low}\u2013{s.high}x)
              </option>
            ))}
          </select>
        </div>

        {/* Company size */}
        <div>
          <label
            htmlFor="ebitda-size"
            className="block text-sm font-medium text-apple-gray-700 mb-1.5"
          >
            Company Size (Revenue)
          </label>
          <select
            id="ebitda-size"
            value={sizeIdx}
            onChange={(e) => setSizeIdx(Number(e.target.value))}
            className="w-full rounded-xl border border-apple-gray-200 bg-apple-gray-50 px-4 py-2.5 text-sm text-apple-black focus:outline-none focus:ring-2 focus:ring-apple-accent/40"
          >
            {SIZE_ADJUSTMENTS.map((s, i) => (
              <option key={s.slug} value={i}>
                {s.label} ({s.adjustment >= 0 ? "+" : ""}
                {s.adjustment}x adj.)
              </option>
            ))}
          </select>
        </div>

        {/* EBITDA */}
        <div className="sm:col-span-2">
          <label
            htmlFor="ebitda-amount"
            className="block text-sm font-medium text-apple-gray-700 mb-1.5"
          >
            Annual EBITDA ($)
          </label>
          <input
            id="ebitda-amount"
            type="number"
            min={0}
            step={10000}
            value={ebitda}
            onChange={(e) => setEbitda(Math.max(0, Number(e.target.value)))}
            className="w-full rounded-xl border border-apple-gray-200 bg-apple-gray-50 px-4 py-2.5 text-sm text-apple-black focus:outline-none focus:ring-2 focus:ring-apple-accent/40"
          />
        </div>
      </div>

      {/* ---- Results ---- */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <ResultCard
          label="Low Estimate"
          multiple={`${lowMult.toFixed(1)}x`}
          value={fmtCurrency(lowVal)}
          accent="text-apple-gray-700"
        />
        <ResultCard
          label="Mid Estimate"
          multiple={`${midMult.toFixed(1)}x`}
          value={fmtCurrency(midVal)}
          accent="text-apple-accent"
          highlight
        />
        <ResultCard
          label="High Estimate"
          multiple={`${highMult.toFixed(1)}x`}
          value={fmtCurrency(highVal)}
          accent="text-apple-gray-700"
        />
      </div>

      {/* ---- Disclaimer ---- */}
      <p className="mt-6 text-[11px] leading-relaxed text-apple-gray-500">
        Multiples shown are indicative ranges based on general market data for
        private SME transactions. Actual transaction multiples depend on growth
        rate, customer concentration, margins, recurring revenue, management
        quality, and many other factors. This tool does not constitute financial
        advice. Always engage qualified M&amp;A advisors for valuation work.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Result card sub-component
// ---------------------------------------------------------------------------

function ResultCard({
  label,
  multiple,
  value,
  accent,
  highlight,
}: {
  label: string;
  multiple: string;
  value: string;
  accent: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 text-center ${
        highlight
          ? "border-apple-accent/30 bg-apple-accent/[0.03]"
          : "border-apple-gray-200 bg-apple-gray-50"
      }`}
    >
      <p className="text-xs font-medium text-apple-gray-500 uppercase tracking-wider">
        {label}
      </p>
      <p className={`text-2xl font-bold mt-1 ${accent}`}>{value}</p>
      <p className="text-xs text-apple-gray-500 mt-0.5">{multiple} EBITDA</p>
    </div>
  );
}
