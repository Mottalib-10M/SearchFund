"use client";

import { useState, useMemo, useCallback, type ChangeEvent } from "react";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Format a number as $X,XXX,XXX */
function fmt(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

/** Format a percentage */
function pct(n: number, decimals = 1): string {
  return n.toFixed(decimals) + "%";
}

/** Format a multiple */
function mult(n: number): string {
  return n.toFixed(1) + "x";
}

/* ------------------------------------------------------------------ */
/*  Shared small components                                            */
/* ------------------------------------------------------------------ */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-sm text-apple-gray-500 mb-1">
      {children}
    </label>
  );
}

function NumberInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}) {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^0-9.\-]/g, "");
      const parsed = parseFloat(raw);
      if (!isNaN(parsed)) onChange(parsed);
      if (raw === "" || raw === "-") onChange(0);
    },
    [onChange],
  );

  return (
    <div>
      <Label>{label}</Label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-apple-gray-500 text-sm pointer-events-none">
            {prefix}
          </span>
        )}
        <input
          type="text"
          inputMode="decimal"
          value={value.toLocaleString("en-US")}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          className={`w-full rounded-lg border border-apple-gray-300 bg-white px-4 py-2.5 text-apple-black text-sm focus:ring-2 focus:ring-apple-accent focus:border-apple-accent outline-none transition-shadow ${prefix ? "pl-7" : ""} ${suffix ? "pr-8" : ""}`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-apple-gray-500 text-sm pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <Label>{label}</Label>
        <span className="text-sm font-medium text-apple-black">
          {value.toFixed(step < 1 ? 1 : 0)}
          {suffix ?? "x"}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full accent-apple-accent h-1.5 rounded-full cursor-pointer"
      />
      <div className="flex justify-between text-xs text-apple-gray-500 mt-0.5">
        <span>
          {min}
          {suffix ?? "x"}
        </span>
        <span>
          {max}
          {suffix ?? "x"}
        </span>
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
  sublabel,
}: {
  label: string;
  value: string;
  sublabel?: string;
}) {
  return (
    <div className="text-center">
      <p className="text-sm text-apple-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-semibold text-apple-black">{value}</p>
      {sublabel && (
        <p className="text-xs text-apple-gray-500 mt-0.5">{sublabel}</p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Tab button                                                         */
/* ------------------------------------------------------------------ */

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all ${
        active
          ? "bg-apple-accent text-white shadow-sm"
          : "text-apple-gray-700 hover:bg-apple-gray-100"
      }`}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Multiples Method                                                   */
/* ------------------------------------------------------------------ */

interface MultiplesInputs {
  ebitda: number;
  revenue: number;
  ebitdaMultiple: number;
  revenueMultiple: number;
}

function useMultiples(inputs: MultiplesInputs) {
  return useMemo(() => {
    const evEbitda = inputs.ebitda * inputs.ebitdaMultiple;
    const evRevenue = inputs.revenue * inputs.revenueMultiple;
    const average = (evEbitda + evRevenue) / 2;
    const impliedEvEbitda =
      inputs.ebitda > 0 ? average / inputs.ebitda : 0;
    const impliedEvRevenue =
      inputs.revenue > 0 ? average / inputs.revenue : 0;

    return { evEbitda, evRevenue, average, impliedEvEbitda, impliedEvRevenue };
  }, [inputs.ebitda, inputs.revenue, inputs.ebitdaMultiple, inputs.revenueMultiple]);
}

function MultiplesPanel({
  inputs,
  setInputs,
}: {
  inputs: MultiplesInputs;
  setInputs: React.Dispatch<React.SetStateAction<MultiplesInputs>>;
}) {
  const results = useMultiples(inputs);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-apple-black mb-4">
          Multiples-Based Valuation
        </h3>
        <p className="text-sm text-apple-gray-500 mb-5">
          Estimate enterprise value using EBITDA and Revenue multiples derived
          from comparable transactions.
        </p>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <NumberInput
          label="EBITDA"
          value={inputs.ebitda}
          onChange={(v) => setInputs((p) => ({ ...p, ebitda: v }))}
          prefix="$"
        />
        <NumberInput
          label="Revenue"
          value={inputs.revenue}
          onChange={(v) => setInputs((p) => ({ ...p, revenue: v }))}
          prefix="$"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SliderInput
          label="EBITDA Multiple"
          value={inputs.ebitdaMultiple}
          onChange={(v) => setInputs((p) => ({ ...p, ebitdaMultiple: v }))}
          min={2}
          max={15}
          step={0.5}
        />
        <SliderInput
          label="Revenue Multiple"
          value={inputs.revenueMultiple}
          onChange={(v) => setInputs((p) => ({ ...p, revenueMultiple: v }))}
          min={0.5}
          max={5}
          step={0.1}
        />
      </div>

      {/* Results */}
      <div className="bg-apple-gray-100 rounded-xl p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <ResultCard
            label="EV (EBITDA Method)"
            value={fmt(results.evEbitda)}
          />
          <ResultCard
            label="EV (Revenue Method)"
            value={fmt(results.evRevenue)}
          />
          <ResultCard
            label="Blended EV"
            value={fmt(results.average)}
            sublabel="Average of both methods"
          />
        </div>

        <div className="border-t border-apple-gray-300 pt-4 grid grid-cols-2 gap-4">
          <ResultCard
            label="Implied EV / EBITDA"
            value={mult(results.impliedEvEbitda)}
          />
          <ResultCard
            label="Implied EV / Revenue"
            value={mult(results.impliedEvRevenue)}
          />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  DCF Method                                                         */
/* ------------------------------------------------------------------ */

interface DCFInputs {
  ebitda: number;
  growthRate: number;
  projectionYears: number;
  discountRate: number;
  terminalGrowth: number;
  capexPct: number;
  wcPct: number;
  revenue: number;
  revenueGrowth: number;
}

interface YearProjection {
  year: number;
  ebitda: number;
  capex: number;
  wcChange: number;
  fcf: number;
  discountedFcf: number;
}

interface DCFResults {
  projections: YearProjection[];
  terminalValue: number;
  discountedTerminal: number;
  enterpriseValue: number;
  sumDiscountedFcf: number;
}

function useDCF(inputs: DCFInputs): DCFResults {
  return useMemo(() => {
    const projections: YearProjection[] = [];
    let prevRevenue = inputs.revenue;
    let sumDiscountedFcf = 0;

    for (let i = 1; i <= inputs.projectionYears; i++) {
      const ebitda =
        inputs.ebitda * Math.pow(1 + inputs.growthRate / 100, i);
      const capex = ebitda * (inputs.capexPct / 100);
      const currentRevenue =
        prevRevenue * (1 + inputs.revenueGrowth / 100);
      const revenueChange = currentRevenue - prevRevenue;
      const wcChange = revenueChange * (inputs.wcPct / 100);
      const fcf = ebitda - capex - wcChange;
      const discountFactor = Math.pow(1 + inputs.discountRate / 100, i);
      const discountedFcf = fcf / discountFactor;

      projections.push({
        year: i,
        ebitda,
        capex,
        wcChange,
        fcf,
        discountedFcf,
      });

      sumDiscountedFcf += discountedFcf;
      prevRevenue = currentRevenue;
    }

    const lastFcf = projections[projections.length - 1]?.fcf ?? 0;
    const terminalValue =
      inputs.discountRate / 100 > inputs.terminalGrowth / 100
        ? (lastFcf * (1 + inputs.terminalGrowth / 100)) /
          (inputs.discountRate / 100 - inputs.terminalGrowth / 100)
        : 0;

    const discountedTerminal =
      terminalValue /
      Math.pow(1 + inputs.discountRate / 100, inputs.projectionYears);

    const enterpriseValue = sumDiscountedFcf + discountedTerminal;

    return {
      projections,
      terminalValue,
      discountedTerminal,
      enterpriseValue,
      sumDiscountedFcf,
    };
  }, [
    inputs.ebitda,
    inputs.growthRate,
    inputs.projectionYears,
    inputs.discountRate,
    inputs.terminalGrowth,
    inputs.capexPct,
    inputs.wcPct,
    inputs.revenue,
    inputs.revenueGrowth,
  ]);
}

function DCFPanel({
  inputs,
  setInputs,
}: {
  inputs: DCFInputs;
  setInputs: React.Dispatch<React.SetStateAction<DCFInputs>>;
}) {
  const results = useDCF(inputs);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-apple-black mb-4">
          Discounted Cash Flow (DCF) Valuation
        </h3>
        <p className="text-sm text-apple-gray-500 mb-5">
          Project future free cash flows and discount them back to present value
          to estimate enterprise value.
        </p>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <NumberInput
          label="Current EBITDA"
          value={inputs.ebitda}
          onChange={(v) => setInputs((p) => ({ ...p, ebitda: v }))}
          prefix="$"
        />
        <NumberInput
          label="Revenue"
          value={inputs.revenue}
          onChange={(v) => setInputs((p) => ({ ...p, revenue: v }))}
          prefix="$"
        />
        <NumberInput
          label="Projection Period (years)"
          value={inputs.projectionYears}
          onChange={(v) =>
            setInputs((p) => ({
              ...p,
              projectionYears: Math.max(1, Math.min(10, Math.round(v))),
            }))
          }
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SliderInput
          label="EBITDA Growth Rate"
          value={inputs.growthRate}
          onChange={(v) => setInputs((p) => ({ ...p, growthRate: v }))}
          min={0}
          max={30}
          step={0.5}
          suffix="%"
        />
        <SliderInput
          label="Revenue Growth Rate"
          value={inputs.revenueGrowth}
          onChange={(v) => setInputs((p) => ({ ...p, revenueGrowth: v }))}
          min={0}
          max={30}
          step={0.5}
          suffix="%"
        />
        <SliderInput
          label="Discount Rate (WACC)"
          value={inputs.discountRate}
          onChange={(v) => setInputs((p) => ({ ...p, discountRate: v }))}
          min={5}
          max={25}
          step={0.5}
          suffix="%"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SliderInput
          label="Terminal Growth Rate"
          value={inputs.terminalGrowth}
          onChange={(v) => setInputs((p) => ({ ...p, terminalGrowth: v }))}
          min={0}
          max={5}
          step={0.5}
          suffix="%"
        />
        <SliderInput
          label="CapEx (% of EBITDA)"
          value={inputs.capexPct}
          onChange={(v) => setInputs((p) => ({ ...p, capexPct: v }))}
          min={0}
          max={40}
          step={1}
          suffix="%"
        />
        <SliderInput
          label="Working Capital (% of Rev. Growth)"
          value={inputs.wcPct}
          onChange={(v) => setInputs((p) => ({ ...p, wcPct: v }))}
          min={0}
          max={30}
          step={1}
          suffix="%"
        />
      </div>

      {/* Projections table */}
      <div className="overflow-x-auto rounded-xl border border-apple-gray-300">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-apple-gray-100 text-apple-gray-700">
              <th className="text-left px-4 py-3 font-medium">Year</th>
              <th className="text-right px-4 py-3 font-medium">EBITDA</th>
              <th className="text-right px-4 py-3 font-medium">CapEx</th>
              <th className="text-right px-4 py-3 font-medium">WC Change</th>
              <th className="text-right px-4 py-3 font-medium">FCF</th>
              <th className="text-right px-4 py-3 font-medium">
                Discounted FCF
              </th>
            </tr>
          </thead>
          <tbody>
            {results.projections.map((row) => (
              <tr
                key={row.year}
                className="border-t border-apple-gray-300 hover:bg-apple-gray-100/50 transition-colors"
              >
                <td className="px-4 py-2.5 text-apple-black font-medium">
                  {row.year}
                </td>
                <td className="px-4 py-2.5 text-right text-apple-black">
                  {fmt(row.ebitda)}
                </td>
                <td className="px-4 py-2.5 text-right text-apple-error">
                  ({fmt(row.capex)})
                </td>
                <td className="px-4 py-2.5 text-right text-apple-error">
                  ({fmt(row.wcChange)})
                </td>
                <td className="px-4 py-2.5 text-right text-apple-black font-medium">
                  {fmt(row.fcf)}
                </td>
                <td className="px-4 py-2.5 text-right text-apple-gray-700">
                  {fmt(row.discountedFcf)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Results */}
      <div className="bg-apple-gray-100 rounded-xl p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <ResultCard
            label="Sum of Discounted FCFs"
            value={fmt(results.sumDiscountedFcf)}
          />
          <ResultCard
            label="Terminal Value"
            value={fmt(results.terminalValue)}
            sublabel={`Discounted: ${fmt(results.discountedTerminal)}`}
          />
          <ResultCard
            label="Enterprise Value (DCF)"
            value={fmt(results.enterpriseValue)}
          />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Comparison section                                                 */
/* ------------------------------------------------------------------ */

function ComparisonSection({
  multiplesEV,
  dcfEV,
}: {
  multiplesEV: number;
  dcfEV: number;
}) {
  const low = Math.min(multiplesEV, dcfEV);
  const high = Math.max(multiplesEV, dcfEV);
  const mid = (multiplesEV + dcfEV) / 2;

  // For the visual bar, normalize values
  const barMin = low * 0.85;
  const barMax = high * 1.15;
  const range = barMax - barMin;
  const lowPct = range > 0 ? ((low - barMin) / range) * 100 : 10;
  const midPct = range > 0 ? ((mid - barMin) / range) * 100 : 50;
  const highPct = range > 0 ? ((high - barMin) / range) * 100 : 90;

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-apple-black">
        Valuation Comparison
      </h3>

      {/* Side-by-side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-apple-gray-100 rounded-xl p-5 text-center">
          <p className="text-sm text-apple-gray-500 mb-1">
            Multiples-Based EV
          </p>
          <p className="text-2xl font-semibold text-apple-black">
            {fmt(multiplesEV)}
          </p>
        </div>
        <div className="bg-apple-gray-100 rounded-xl p-5 text-center">
          <p className="text-sm text-apple-gray-500 mb-1">DCF-Based EV</p>
          <p className="text-2xl font-semibold text-apple-black">
            {fmt(dcfEV)}
          </p>
        </div>
      </div>

      {/* Range summary */}
      <div className="bg-apple-gray-100 rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs text-apple-gray-500 uppercase tracking-wider mb-1">
              Low
            </p>
            <p className="text-xl font-semibold text-apple-black">
              {fmt(low)}
            </p>
          </div>
          <div>
            <p className="text-xs text-apple-accent uppercase tracking-wider font-semibold mb-1">
              Midpoint
            </p>
            <p className="text-2xl font-semibold text-apple-accent">
              {fmt(mid)}
            </p>
          </div>
          <div>
            <p className="text-xs text-apple-gray-500 uppercase tracking-wider mb-1">
              High
            </p>
            <p className="text-xl font-semibold text-apple-black">
              {fmt(high)}
            </p>
          </div>
        </div>

        {/* Visual range bar */}
        <div className="relative mt-4">
          {/* Track */}
          <div className="h-3 bg-apple-gray-300 rounded-full relative overflow-hidden">
            {/* Filled range */}
            <div
              className="absolute h-full bg-apple-accent/30 rounded-full"
              style={{
                left: `${lowPct}%`,
                width: `${highPct - lowPct}%`,
              }}
            />
          </div>

          {/* Low marker */}
          <div
            className="absolute -top-0.5 w-4 h-4 bg-apple-gray-700 rounded-full border-2 border-white shadow-sm"
            style={{ left: `calc(${lowPct}% - 8px)` }}
          />

          {/* Mid marker */}
          <div
            className="absolute -top-1 w-5 h-5 bg-apple-accent rounded-full border-2 border-white shadow"
            style={{ left: `calc(${midPct}% - 10px)` }}
          />

          {/* High marker */}
          <div
            className="absolute -top-0.5 w-4 h-4 bg-apple-gray-700 rounded-full border-2 border-white shadow-sm"
            style={{ left: `calc(${highPct}% - 8px)` }}
          />

          {/* Labels under markers */}
          <div className="flex justify-between text-xs text-apple-gray-500 mt-3">
            <span>{fmt(low)}</span>
            <span className="text-apple-accent font-medium">{fmt(mid)}</span>
            <span>{fmt(high)}</span>
          </div>
        </div>

        {/* Spread info */}
        <p className="text-sm text-apple-gray-500 text-center">
          Valuation range spread:{" "}
          <span className="font-medium text-apple-black">
            {high > 0 ? pct(((high - low) / mid) * 100, 0) : "0%"}
          </span>
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main widget                                                        */
/* ------------------------------------------------------------------ */

type Tab = "multiples" | "dcf" | "compare";

export default function ValuationWidget() {
  const [activeTab, setActiveTab] = useState<Tab>("multiples");

  const [multiplesInputs, setMultiplesInputs] = useState<MultiplesInputs>({
    ebitda: 1_000_000,
    revenue: 5_000_000,
    ebitdaMultiple: 5,
    revenueMultiple: 1,
  });

  const [dcfInputs, setDCFInputs] = useState<DCFInputs>({
    ebitda: 1_000_000,
    growthRate: 5,
    projectionYears: 5,
    discountRate: 12,
    terminalGrowth: 2,
    capexPct: 15,
    wcPct: 10,
    revenue: 5_000_000,
    revenueGrowth: 5,
  });

  const multiplesResults = useMultiples(multiplesInputs);
  const dcfResults = useDCF(dcfInputs);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-apple-black mb-2">
          Business Valuation Calculator
        </h2>
        <p className="text-sm text-apple-gray-500">
          Estimate the enterprise value of a business using two complementary
          methods: comparable multiples and discounted cash flow analysis.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 bg-apple-gray-100 rounded-xl p-1 mb-8">
        <TabButton
          active={activeTab === "multiples"}
          onClick={() => setActiveTab("multiples")}
        >
          Multiples
        </TabButton>
        <TabButton
          active={activeTab === "dcf"}
          onClick={() => setActiveTab("dcf")}
        >
          DCF
        </TabButton>
        <TabButton
          active={activeTab === "compare"}
          onClick={() => setActiveTab("compare")}
        >
          Compare
        </TabButton>
      </div>

      {/* Panels */}
      <div className="min-h-[400px]">
        {activeTab === "multiples" && (
          <MultiplesPanel
            inputs={multiplesInputs}
            setInputs={setMultiplesInputs}
          />
        )}

        {activeTab === "dcf" && (
          <DCFPanel inputs={dcfInputs} setInputs={setDCFInputs} />
        )}

        {activeTab === "compare" && (
          <ComparisonSection
            multiplesEV={multiplesResults.average}
            dcfEV={dcfResults.enterpriseValue}
          />
        )}
      </div>

      {/* Disclaimer */}
      <div className="mt-10 rounded-xl bg-apple-gray-100/50 border border-apple-gray-300 p-5">
        <p className="text-xs font-semibold text-apple-gray-500 uppercase tracking-wider mb-2">
          Disclaimer
        </p>
        <p className="text-sm text-apple-gray-700 leading-relaxed">
          This calculator is provided for educational and informational purposes
          only. It does not constitute financial, investment, legal, or tax
          advice. The valuations produced are simplified estimates based on the
          inputs you provide and may not reflect actual market conditions,
          company-specific risks, or deal dynamics. Always consult qualified
          professional advisors before making investment or acquisition
          decisions.
        </p>
      </div>
    </div>
  );
}
