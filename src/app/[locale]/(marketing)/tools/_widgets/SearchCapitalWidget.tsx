"use client";

import { useState, useMemo } from "react";

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

function fmtCurrency(n: number): string {
  if (n >= 1_000_000) {
    return `$${(n / 1_000_000).toFixed(2)}M`;
  }
  return `$${n.toLocaleString("en-US")}`;
}

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

const BENCHMARKS = [
  { label: "Traditional Search Fund (median)", amount: 450_000 },
  { label: "Self-Funded Search (typical)", amount: 150_000 },
  { label: "Accelerator-backed (typical)", amount: 350_000 },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function SearchCapitalWidget() {
  const [monthlyExpenses, setMonthlyExpenses] = useState(5_000);
  const [searchMonths, setSearchMonths] = useState(24);
  const [monthlySearchCosts, setMonthlySearchCosts] = useState(3_000);
  const [monthlyLegal, setMonthlyLegal] = useState(1_000);
  const [numLois, setNumLois] = useState(3);
  const [costPerLoi, setCostPerLoi] = useState(15_000);
  const [contingencyPct, setContingencyPct] = useState(15);

  const results = useMemo(() => {
    const personalRunway = monthlyExpenses * searchMonths;
    const searchOps = (monthlySearchCosts + monthlyLegal) * searchMonths;
    const loiCosts = numLois * costPerLoi;
    const subtotal = personalRunway + searchOps + loiCosts;
    const contingency = Math.round(subtotal * (contingencyPct / 100));
    const total = subtotal + contingency;
    return { personalRunway, searchOps, loiCosts, subtotal, contingency, total };
  }, [
    monthlyExpenses,
    searchMonths,
    monthlySearchCosts,
    monthlyLegal,
    numLois,
    costPerLoi,
    contingencyPct,
  ]);

  return (
    <div className="rounded-2xl border border-apple-gray-200 bg-white p-6 sm:p-8">
      {/* ---- Inputs ---- */}
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          id="sc-expenses"
          label="Monthly Personal Expenses ($)"
          value={monthlyExpenses}
          onChange={setMonthlyExpenses}
          step={500}
        />
        <InputField
          id="sc-months"
          label="Search Duration (months)"
          value={searchMonths}
          onChange={setSearchMonths}
          step={1}
          min={1}
          max={60}
        />
        <InputField
          id="sc-search-costs"
          label="Monthly Search Costs ($)"
          helpText="Office, travel, tools, CRM"
          value={monthlySearchCosts}
          onChange={setMonthlySearchCosts}
          step={500}
        />
        <InputField
          id="sc-legal"
          label="Legal/Accounting Retainer ($/mo)"
          value={monthlyLegal}
          onChange={setMonthlyLegal}
          step={500}
        />
        <InputField
          id="sc-lois"
          label="Number of LOIs Expected"
          value={numLois}
          onChange={setNumLois}
          step={1}
          min={0}
          max={20}
        />
        <InputField
          id="sc-loi-cost"
          label="Avg Cost per LOI ($)"
          helpText="Legal fees, due diligence"
          value={costPerLoi}
          onChange={setCostPerLoi}
          step={1000}
        />
        <div className="sm:col-span-2">
          <InputField
            id="sc-contingency"
            label="Contingency (%)"
            value={contingencyPct}
            onChange={setContingencyPct}
            step={5}
            min={0}
            max={50}
          />
        </div>
      </div>

      {/* ---- Results ---- */}
      <div className="mt-8 rounded-xl border border-apple-gray-200 bg-apple-gray-50 overflow-hidden">
        <div className="divide-y divide-apple-gray-200">
          <LineItem label="Personal Runway" sublabel={`${searchMonths} months`} value={results.personalRunway} />
          <LineItem
            label="Search Operating Costs"
            sublabel={`${searchMonths} months`}
            value={results.searchOps}
          />
          <LineItem
            label="LOI / Due Diligence Costs"
            sublabel={`${numLois} LOIs`}
            value={results.loiCosts}
          />
          <LineItem label="Subtotal" value={results.subtotal} bold />
          <LineItem
            label={`Contingency (${contingencyPct}%)`}
            value={results.contingency}
          />
        </div>
        <div className="bg-apple-accent/[0.04] border-t-2 border-apple-accent/30 px-5 py-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-apple-black">
            Total Recommended Raise
          </span>
          <span className="text-2xl font-bold text-apple-accent">
            {fmtCurrency(results.total)}
          </span>
        </div>
      </div>

      {/* ---- Benchmarks ---- */}
      <div className="mt-6">
        <p className="text-xs font-medium text-apple-gray-500 uppercase tracking-wider mb-3">
          Typical Benchmarks
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {BENCHMARKS.map((b) => (
            <div
              key={b.label}
              className="rounded-xl border border-apple-gray-200 bg-white p-3 text-center"
            >
              <p className="text-lg font-semibold text-apple-gray-700">
                {fmtCurrency(b.amount)}
              </p>
              <p className="text-[11px] text-apple-gray-500 mt-0.5">
                {b.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Disclaimer ---- */}
      <p className="mt-6 text-[11px] leading-relaxed text-apple-gray-500">
        These estimates are based on typical ranges observed across traditional
        and self-funded search funds in the US and Europe. Your actual capital
        needs will depend on geography, deal sourcing strategy, personal
        circumstances, and market conditions. This tool does not constitute
        financial advice.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Reusable sub-components
// ---------------------------------------------------------------------------

function InputField({
  id,
  label,
  helpText,
  value,
  onChange,
  step = 1,
  min = 0,
  max,
}: {
  id: string;
  label: string;
  helpText?: string;
  value: number;
  onChange: (v: number) => void;
  step?: number;
  min?: number;
  max?: number;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-apple-gray-700 mb-1.5"
      >
        {label}
      </label>
      {helpText && (
        <p className="text-[11px] text-apple-gray-500 -mt-1 mb-1.5">
          {helpText}
        </p>
      )}
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Math.max(min, Number(e.target.value)))}
        className="w-full rounded-xl border border-apple-gray-200 bg-apple-gray-50 px-4 py-2.5 text-sm text-apple-black focus:outline-none focus:ring-2 focus:ring-apple-accent/40"
      />
    </div>
  );
}

function LineItem({
  label,
  sublabel,
  value,
  bold,
}: {
  label: string;
  sublabel?: string;
  value: number;
  bold?: boolean;
}) {
  return (
    <div className="flex items-center justify-between px-5 py-3">
      <div>
        <span
          className={`text-sm ${bold ? "font-semibold text-apple-black" : "text-apple-gray-700"}`}
        >
          {label}
        </span>
        {sublabel && (
          <span className="text-[11px] text-apple-gray-500 ml-2">
            ({sublabel})
          </span>
        )}
      </div>
      <span
        className={`text-sm tabular-nums ${bold ? "font-semibold text-apple-black" : "text-apple-gray-700"}`}
      >
        {fmtCurrency(value)}
      </span>
    </div>
  );
}
