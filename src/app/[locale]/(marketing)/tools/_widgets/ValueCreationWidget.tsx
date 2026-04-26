"use client";

import { useState, useMemo } from "react";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function fmt(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function fmtPct(n: number): string {
  return n.toFixed(1) + "%";
}

function fmtMultiple(n: number): string {
  return n.toFixed(2) + "x";
}

/* ------------------------------------------------------------------ */
/*  Input field                                                        */
/* ------------------------------------------------------------------ */

function Field({
  label,
  value,
  onChange,
  prefix,
  suffix,
  step,
  min,
  max,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: number;
  min?: number;
  max?: number;
}) {
  return (
    <label className="block">
      <span className="text-sm text-apple-gray-500">{label}</span>
      <div className="relative mt-1">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-apple-gray-500 pointer-events-none">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          step={step ?? 1}
          min={min}
          max={max}
          className={`w-full rounded-lg border border-apple-gray-200 bg-white px-3 py-2 text-sm text-apple-black focus:ring-2 focus:ring-apple-accent/30 focus:border-apple-accent transition-shadow ${
            prefix ? "pl-7" : ""
          } ${suffix ? "pr-8" : ""}`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-apple-gray-500 pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}

function SliderField({
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
  step?: number;
  suffix?: string;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between">
        <span className="text-sm text-apple-gray-500">{label}</span>
        <span className="text-sm font-medium text-apple-black financial">
          {value}
          {suffix ?? ""}
        </span>
      </div>
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step ?? 1}
        className="w-full mt-1.5 accent-apple-accent"
      />
    </label>
  );
}

/* ------------------------------------------------------------------ */
/*  Main widget                                                        */
/* ------------------------------------------------------------------ */

export default function ValueCreationWidget() {
  /* ---------- Inputs ---------- */
  const [revenue, setRevenue] = useState(5_000_000);
  const [startEbitda, setStartEbitda] = useState(1_000_000);
  const [revenueGrowth, setRevenueGrowth] = useState(8);
  const [marginImprovement, setMarginImprovement] = useState(2);
  const [pricingLift, setPricingLift] = useState(3);
  const [costReduction, setCostReduction] = useState(2);
  const [holdYears, setHoldYears] = useState(5);
  const [entryMultiple, setEntryMultiple] = useState(5);
  const [exitMultiple, setExitMultiple] = useState(6);
  const [boltOnCount, setBoltOnCount] = useState(0);
  const [boltOnEbitda, setBoltOnEbitda] = useState(200_000);
  const [boltOnMultiple, setBoltOnMultiple] = useState(4);

  /* ---------- Calculations ---------- */
  const results = useMemo(() => {
    const startMargin = revenue > 0 ? (startEbitda / revenue) * 100 : 20;

    interface YearRow {
      year: number;
      revenue: number;
      ebitdaMargin: number;
      organicEbitda: number;
      boltOnEbitdaCumulative: number;
      totalEbitda: number;
      ev: number;
    }

    const projections: YearRow[] = [];
    let cumulativeBoltOn = 0;
    let totalBoltOnCost = 0;

    for (let y = 0; y <= holdYears; y++) {
      const yearRevenue = revenue * Math.pow(1 + revenueGrowth / 100, y);

      // Margin improvement: pricing + cost reduction + margin improvement compound
      const totalMarginImprovement =
        (marginImprovement + pricingLift + costReduction) * Math.min(y, holdYears);
      const yearMargin = Math.min(startMargin + totalMarginImprovement, 50);
      const organicEbitda = yearRevenue * (yearMargin / 100);

      // Bolt-on acquisitions: assume evenly spread across hold period
      if (boltOnCount > 0 && y > 0) {
        const boltOnsThisYear =
          y <= boltOnCount ? 1 : 0;
        if (boltOnsThisYear > 0) {
          cumulativeBoltOn += boltOnEbitda;
          totalBoltOnCost += boltOnEbitda * boltOnMultiple;
        }
      }

      // Bolt-on EBITDA also grows
      const boltOnGrown =
        cumulativeBoltOn * Math.pow(1 + revenueGrowth / 100, Math.max(0, y - 1));

      const totalEbitda = organicEbitda + boltOnGrown;
      const mult = y === holdYears ? exitMultiple : entryMultiple;
      const ev = totalEbitda * mult;

      projections.push({
        year: y,
        revenue: yearRevenue,
        ebitdaMargin: yearMargin,
        organicEbitda,
        boltOnEbitdaCumulative: boltOnGrown,
        totalEbitda,
        ev,
      });
    }

    const entryEV = startEbitda * entryMultiple;
    const exitRow = projections[holdYears];
    const exitEV = exitRow.totalEbitda * exitMultiple;
    const valueCreated = exitEV - entryEV - totalBoltOnCost;
    const totalMultiple = entryEV > 0 ? exitEV / entryEV : 0;

    // EBITDA bridge
    const exitOrganic = exitRow.organicEbitda;
    const revenueContribution = exitOrganic - startEbitda;
    const marginContribution =
      exitRow.revenue * ((exitRow.ebitdaMargin - startMargin) / 100);
    const growthContribution = revenueContribution - marginContribution;

    return {
      startMargin,
      projections,
      entryEV,
      exitEV,
      valueCreated,
      totalMultiple,
      totalBoltOnCost,
      exitOrganic,
      growthContribution,
      marginContribution,
      boltOnContribution: exitRow.boltOnEbitdaCumulative,
    };
  }, [
    revenue,
    startEbitda,
    revenueGrowth,
    marginImprovement,
    pricingLift,
    costReduction,
    holdYears,
    entryMultiple,
    exitMultiple,
    boltOnCount,
    boltOnEbitda,
    boltOnMultiple,
  ]);

  /* ---------- Render ---------- */
  return (
    <div className="rounded-2xl border border-apple-gray-200 bg-white p-6 sm:p-8 space-y-8">
      {/* ------- Starting Position ------- */}
      <div>
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Starting Position
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Field
            label="Revenue"
            value={revenue}
            onChange={setRevenue}
            prefix="$"
            step={250000}
            min={0}
          />
          <Field
            label="EBITDA"
            value={startEbitda}
            onChange={setStartEbitda}
            prefix="$"
            step={50000}
            min={0}
          />
          <Field
            label="Hold period (years)"
            value={holdYears}
            onChange={setHoldYears}
            min={1}
            max={10}
          />
        </div>
      </div>

      {/* ------- Growth Levers ------- */}
      <div>
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Value Creation Levers (Annual)
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SliderField
            label="Revenue growth"
            value={revenueGrowth}
            onChange={setRevenueGrowth}
            min={0}
            max={30}
            step={0.5}
            suffix="%"
          />
          <SliderField
            label="Pricing lift"
            value={pricingLift}
            onChange={setPricingLift}
            min={0}
            max={10}
            step={0.5}
            suffix="%"
          />
          <SliderField
            label="Cost reduction"
            value={costReduction}
            onChange={setCostReduction}
            min={0}
            max={10}
            step={0.5}
            suffix="%"
          />
          <SliderField
            label="Margin improvement"
            value={marginImprovement}
            onChange={setMarginImprovement}
            min={0}
            max={10}
            step={0.5}
            suffix="%"
          />
        </div>
      </div>

      {/* ------- Multiple Expansion ------- */}
      <div>
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Multiple Expansion
        </h3>
        <div className="grid gap-5 sm:grid-cols-2">
          <SliderField
            label="Entry multiple (EV/EBITDA)"
            value={entryMultiple}
            onChange={setEntryMultiple}
            min={2}
            max={12}
            step={0.5}
            suffix="x"
          />
          <SliderField
            label="Exit multiple (EV/EBITDA)"
            value={exitMultiple}
            onChange={setExitMultiple}
            min={2}
            max={15}
            step={0.5}
            suffix="x"
          />
        </div>
      </div>

      {/* ------- Bolt-on Acquisitions ------- */}
      <div>
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Bolt-on Acquisitions
        </h3>
        <div className="grid gap-5 sm:grid-cols-3">
          <Field
            label="Number of bolt-ons"
            value={boltOnCount}
            onChange={setBoltOnCount}
            min={0}
            max={5}
          />
          <Field
            label="EBITDA per bolt-on"
            value={boltOnEbitda}
            onChange={setBoltOnEbitda}
            prefix="$"
            step={50000}
            min={0}
          />
          <Field
            label="Bolt-on purchase multiple"
            value={boltOnMultiple}
            onChange={setBoltOnMultiple}
            suffix="x"
            step={0.5}
            min={2}
            max={10}
          />
        </div>
      </div>

      {/* ------- Year-by-Year Projections ------- */}
      <div className="bg-apple-gray-50 rounded-xl p-6">
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Year-by-Year Projections
        </h3>
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="text-apple-gray-500 text-xs uppercase tracking-wider">
                <th className="py-2 text-left font-medium px-2">Year</th>
                <th className="py-2 text-right font-medium px-2">Revenue</th>
                <th className="py-2 text-right font-medium px-2">Margin</th>
                <th className="py-2 text-right font-medium px-2">
                  Organic EBITDA
                </th>
                <th className="py-2 text-right font-medium px-2">
                  Bolt-on EBITDA
                </th>
                <th className="py-2 text-right font-medium px-2">
                  Total EBITDA
                </th>
                <th className="py-2 text-right font-medium px-2">EV</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-apple-gray-100">
              {results.projections.map((row) => (
                <tr
                  key={row.year}
                  className={
                    row.year === holdYears ? "bg-apple-accent/5 font-medium" : ""
                  }
                >
                  <td className="py-2 px-2 text-apple-gray-700">
                    {row.year === 0 ? "Entry" : `Year ${row.year}`}
                  </td>
                  <td className="py-2 px-2 text-right text-apple-black financial">
                    {fmt(row.revenue)}
                  </td>
                  <td className="py-2 px-2 text-right text-apple-black financial">
                    {fmtPct(row.ebitdaMargin)}
                  </td>
                  <td className="py-2 px-2 text-right text-apple-black financial">
                    {fmt(row.organicEbitda)}
                  </td>
                  <td className="py-2 px-2 text-right text-apple-black financial">
                    {fmt(row.boltOnEbitdaCumulative)}
                  </td>
                  <td className="py-2 px-2 text-right font-medium text-apple-black financial">
                    {fmt(row.totalEbitda)}
                  </td>
                  <td className="py-2 px-2 text-right text-apple-accent financial">
                    {fmt(row.ev)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ------- Value Bridge ------- */}
      <div className="bg-apple-gray-50 rounded-xl p-6">
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Value Creation Bridge
        </h3>
        <table className="w-full text-sm">
          <tbody className="divide-y divide-apple-gray-100">
            <tr>
              <td className="py-2 text-apple-gray-700">Entry Enterprise Value</td>
              <td className="py-2 text-right font-medium text-apple-black financial">
                {fmt(results.entryEV)}
              </td>
            </tr>
            <tr>
              <td className="py-2 text-apple-gray-700">
                + Revenue Growth Contribution
              </td>
              <td className="py-2 text-right font-medium text-apple-success financial">
                {fmt(results.growthContribution * exitMultiple)}
              </td>
            </tr>
            <tr>
              <td className="py-2 text-apple-gray-700">
                + Margin Improvement Contribution
              </td>
              <td className="py-2 text-right font-medium text-apple-success financial">
                {fmt(results.marginContribution * exitMultiple)}
              </td>
            </tr>
            {boltOnCount > 0 && (
              <tr>
                <td className="py-2 text-apple-gray-700">
                  + Bolt-on Contribution (net of cost)
                </td>
                <td className="py-2 text-right font-medium text-apple-success financial">
                  {fmt(
                    results.boltOnContribution * exitMultiple -
                      results.totalBoltOnCost,
                  )}
                </td>
              </tr>
            )}
            <tr>
              <td className="py-2 text-apple-gray-700">
                + Multiple Expansion ({fmtMultiple(entryMultiple)} &rarr;{" "}
                {fmtMultiple(exitMultiple)})
              </td>
              <td className="py-2 text-right font-medium text-apple-success financial">
                {fmt(
                  results.projections[holdYears].totalEbitda *
                    (exitMultiple - entryMultiple),
                )}
              </td>
            </tr>
            <tr className="bg-apple-gray-100/50">
              <td className="py-2 font-semibold text-apple-black">
                Exit Enterprise Value
              </td>
              <td className="py-2 text-right font-semibold text-apple-accent financial">
                {fmt(results.exitEV)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------- Summary Cards ------- */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-apple-gray-50 rounded-xl p-6">
          <p className="text-sm text-apple-gray-500">Entry EV</p>
          <p className="text-2xl font-semibold text-apple-black mt-1 financial">
            {fmt(results.entryEV)}
          </p>
        </div>
        <div className="bg-apple-gray-50 rounded-xl p-6">
          <p className="text-sm text-apple-gray-500">Exit EV</p>
          <p className="text-2xl font-semibold text-apple-black mt-1 financial">
            {fmt(results.exitEV)}
          </p>
        </div>
        <div className="bg-apple-gray-50 rounded-xl p-6">
          <p className="text-sm text-apple-gray-500">Value Created</p>
          <p className="text-2xl font-semibold text-apple-accent mt-1 financial">
            {fmt(results.valueCreated)}
          </p>
        </div>
        <div className="bg-apple-gray-50 rounded-xl p-6">
          <p className="text-sm text-apple-gray-500">EV Growth Multiple</p>
          <p className="text-2xl font-semibold text-apple-accent mt-1 financial">
            {fmtMultiple(results.totalMultiple)}
          </p>
        </div>
      </div>
    </div>
  );
}
