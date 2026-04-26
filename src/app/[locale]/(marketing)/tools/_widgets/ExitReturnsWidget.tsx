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

/** Newton-Raphson IRR */
function approximateIRR(cashFlows: number[]): number {
  let rate = 0.15;
  for (let i = 0; i < 100; i++) {
    let npv = 0;
    let dNpv = 0;
    for (let t = 0; t < cashFlows.length; t++) {
      const factor = Math.pow(1 + rate, t);
      npv += cashFlows[t] / factor;
      if (t > 0) dNpv -= (t * cashFlows[t]) / Math.pow(1 + rate, t + 1);
    }
    if (Math.abs(dNpv) < 1e-12) break;
    const next = rate - npv / dNpv;
    if (Math.abs(next - rate) < 1e-6) return next;
    rate = next;
  }
  return rate;
}

/* ------------------------------------------------------------------ */
/*  Input components                                                   */
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

export default function ExitReturnsWidget() {
  /* ---------- Inputs ---------- */
  const [entryEbitda, setEntryEbitda] = useState(1_000_000);
  const [entryMultiple, setEntryMultiple] = useState(5);
  const [debtPct, setDebtPct] = useState(50);
  const [interestRate, setInterestRate] = useState(7);
  const [debtTerm, setDebtTerm] = useState(7);
  const [sellerNotePct, setSellerNotePct] = useState(15);
  const [sellerNoteRate, setSellerNoteRate] = useState(5);
  const [ebitdaGrowth, setEbitdaGrowth] = useState(8);
  const [exitMultiple, setExitMultiple] = useState(6);
  const [holdYears, setHoldYears] = useState(5);
  const [annualDistribution, setAnnualDistribution] = useState(100_000);

  /* ---------- Calculations ---------- */
  const results = useMemo(() => {
    const entryEV = entryEbitda * entryMultiple;
    const seniorDebt = entryEV * (debtPct / 100);
    const sellerNote = entryEV * (sellerNotePct / 100);
    const equity = entryEV - seniorDebt - sellerNote;

    // Amortize senior debt
    const r = interestRate / 100;
    const annualPayment =
      r > 0 && debtTerm > 0
        ? (seniorDebt * r * Math.pow(1 + r, debtTerm)) /
          (Math.pow(1 + r, debtTerm) - 1)
        : seniorDebt / Math.max(1, debtTerm);

    // Seller note: interest-only then bullet at maturity
    const annualSellerInterest = sellerNote * (sellerNoteRate / 100);

    // Year-by-year projections
    interface YearRow {
      year: number;
      ebitda: number;
      debtService: number;
      sellerService: number;
      distribution: number;
      remainingSenior: number;
      remainingSeller: number;
      freeCash: number;
    }

    const projections: YearRow[] = [];
    let seniorBalance = seniorDebt;
    let sellerBalance = sellerNote;
    let cumulativeDistributions = 0;

    for (let y = 1; y <= holdYears; y++) {
      const yearEbitda = entryEbitda * Math.pow(1 + ebitdaGrowth / 100, y);

      // Senior debt service
      let debtService = 0;
      if (seniorBalance > 0) {
        const interest = seniorBalance * r;
        debtService = Math.min(annualPayment, seniorBalance + interest);
        const principal = debtService - interest;
        seniorBalance = Math.max(0, seniorBalance - principal);
      }

      // Seller note: interest-only
      let sellerService = 0;
      if (sellerBalance > 0) {
        sellerService = annualSellerInterest;
      }

      const freeCash = yearEbitda - debtService - sellerService;
      const dist = Math.min(annualDistribution, Math.max(0, freeCash));
      cumulativeDistributions += dist;

      projections.push({
        year: y,
        ebitda: yearEbitda,
        debtService,
        sellerService,
        distribution: dist,
        remainingSenior: seniorBalance,
        remainingSeller: sellerBalance,
        freeCash,
      });
    }

    // Exit
    const exitEbitda = entryEbitda * Math.pow(1 + ebitdaGrowth / 100, holdYears);
    const exitEV = exitEbitda * exitMultiple;
    const remainingDebt = seniorBalance + sellerBalance;
    const exitEquity = exitEV - remainingDebt;
    const totalReturn = exitEquity + cumulativeDistributions;
    const moic = equity > 0 ? totalReturn / equity : 0;

    // IRR
    const cfs = [-equity];
    for (let y = 0; y < holdYears - 1; y++) {
      cfs.push(projections[y].distribution);
    }
    cfs.push(
      (projections[holdYears - 1]?.distribution ?? 0) + exitEquity,
    );
    const irrVal = approximateIRR(cfs);

    // Exit route comparison
    const strategicPremium = 1.25; // 25% premium
    const strategicEV = exitEV * strategicPremium;
    const strategicEquity = strategicEV - remainingDebt;
    const strategicMoic = equity > 0 ? (strategicEquity + cumulativeDistributions) / equity : 0;

    const recapDebt = exitEbitda * 3; // 3x new debt
    const recapDistribution = recapDebt - remainingDebt;
    const recapMoic = equity > 0 ? (recapDistribution + cumulativeDistributions) / equity : 0;

    return {
      entryEV,
      equity,
      seniorDebt,
      sellerNote,
      projections,
      exitEbitda,
      exitEV,
      remainingDebt,
      exitEquity,
      cumulativeDistributions,
      totalReturn,
      moic,
      irr: irrVal,
      strategicEV,
      strategicEquity,
      strategicMoic,
      recapDistribution,
      recapMoic,
    };
  }, [
    entryEbitda,
    entryMultiple,
    debtPct,
    interestRate,
    debtTerm,
    sellerNotePct,
    sellerNoteRate,
    ebitdaGrowth,
    exitMultiple,
    holdYears,
    annualDistribution,
  ]);

  /* ---------- Render ---------- */
  return (
    <div className="rounded-2xl border border-apple-gray-200 bg-white p-6 sm:p-8 space-y-8">
      {/* ------- Entry Parameters ------- */}
      <div>
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Entry Parameters
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Field
            label="Entry EBITDA"
            value={entryEbitda}
            onChange={setEntryEbitda}
            prefix="$"
            step={50000}
            min={0}
          />
          <SliderField
            label="Entry multiple"
            value={entryMultiple}
            onChange={setEntryMultiple}
            min={2}
            max={12}
            step={0.5}
            suffix="x"
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

      {/* ------- Capital Structure ------- */}
      <div>
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Capital Structure
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SliderField
            label="Senior debt (% of EV)"
            value={debtPct}
            onChange={setDebtPct}
            min={0}
            max={70}
            step={5}
            suffix="%"
          />
          <Field
            label="Senior interest rate"
            value={interestRate}
            onChange={setInterestRate}
            suffix="%"
            step={0.25}
            min={0}
            max={15}
          />
          <Field
            label="Debt term (years)"
            value={debtTerm}
            onChange={setDebtTerm}
            min={1}
            max={15}
          />
          <SliderField
            label="Seller note (% of EV)"
            value={sellerNotePct}
            onChange={setSellerNotePct}
            min={0}
            max={30}
            step={5}
            suffix="%"
          />
          <Field
            label="Seller note rate"
            value={sellerNoteRate}
            onChange={setSellerNoteRate}
            suffix="%"
            step={0.5}
            min={0}
            max={10}
          />
        </div>
        <div className="mt-3 flex items-center gap-3 text-sm">
          <span className="text-apple-gray-500">Equity required:</span>
          <span className="font-semibold text-apple-black financial">
            {fmt(results.equity)}
          </span>
        </div>
      </div>

      {/* ------- Operating & Exit ------- */}
      <div>
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Operating &amp; Exit Assumptions
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SliderField
            label="Annual EBITDA growth"
            value={ebitdaGrowth}
            onChange={setEbitdaGrowth}
            min={0}
            max={25}
            step={0.5}
            suffix="%"
          />
          <SliderField
            label="Exit multiple"
            value={exitMultiple}
            onChange={setExitMultiple}
            min={2}
            max={15}
            step={0.5}
            suffix="x"
          />
          <Field
            label="Annual distributions"
            value={annualDistribution}
            onChange={setAnnualDistribution}
            prefix="$"
            step={25000}
            min={0}
          />
        </div>
      </div>

      {/* ------- Cash Flow Projections ------- */}
      <div className="bg-apple-gray-50 rounded-xl p-6">
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Cash Flow Projections
        </h3>
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="text-apple-gray-500 text-xs uppercase tracking-wider">
                <th className="py-2 text-left font-medium px-2">Year</th>
                <th className="py-2 text-right font-medium px-2">EBITDA</th>
                <th className="py-2 text-right font-medium px-2">Debt Service</th>
                <th className="py-2 text-right font-medium px-2">
                  Seller Note
                </th>
                <th className="py-2 text-right font-medium px-2">Free Cash</th>
                <th className="py-2 text-right font-medium px-2">
                  Distribution
                </th>
                <th className="py-2 text-right font-medium px-2">
                  Remaining Debt
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-apple-gray-100">
              {results.projections.map((row) => (
                <tr key={row.year}>
                  <td className="py-2 px-2 text-apple-gray-700 font-medium">
                    {row.year}
                  </td>
                  <td className="py-2 px-2 text-right text-apple-black financial">
                    {fmt(row.ebitda)}
                  </td>
                  <td className="py-2 px-2 text-right text-apple-black financial">
                    ({fmt(row.debtService)})
                  </td>
                  <td className="py-2 px-2 text-right text-apple-black financial">
                    ({fmt(row.sellerService)})
                  </td>
                  <td
                    className={`py-2 px-2 text-right font-medium financial ${
                      row.freeCash >= 0
                        ? "text-apple-success"
                        : "text-apple-error"
                    }`}
                  >
                    {fmt(row.freeCash)}
                  </td>
                  <td className="py-2 px-2 text-right text-apple-accent financial">
                    {fmt(row.distribution)}
                  </td>
                  <td className="py-2 px-2 text-right text-apple-gray-700 financial">
                    {fmt(row.remainingSenior + row.remainingSeller)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ------- Exit Analysis ------- */}
      <div className="bg-apple-gray-50 rounded-xl p-6">
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Exit Analysis (Year {holdYears})
        </h3>
        <table className="w-full text-sm">
          <tbody className="divide-y divide-apple-gray-100">
            <tr>
              <td className="py-2 text-apple-gray-700">Exit EBITDA</td>
              <td className="py-2 text-right font-medium text-apple-black financial">
                {fmt(results.exitEbitda)}
              </td>
            </tr>
            <tr>
              <td className="py-2 text-apple-gray-700">
                Exit EV ({fmtMultiple(exitMultiple)} multiple)
              </td>
              <td className="py-2 text-right font-medium text-apple-black financial">
                {fmt(results.exitEV)}
              </td>
            </tr>
            <tr>
              <td className="py-2 text-apple-gray-700">Less: Remaining Debt</td>
              <td className="py-2 text-right font-medium text-apple-black financial">
                ({fmt(results.remainingDebt)})
              </td>
            </tr>
            <tr className="bg-apple-gray-100/50">
              <td className="py-2 font-semibold text-apple-black">
                Equity Value at Exit
              </td>
              <td className="py-2 text-right font-semibold text-apple-black financial">
                {fmt(results.exitEquity)}
              </td>
            </tr>
            <tr>
              <td className="py-2 text-apple-gray-700">
                + Cumulative Distributions
              </td>
              <td className="py-2 text-right font-medium text-apple-black financial">
                {fmt(results.cumulativeDistributions)}
              </td>
            </tr>
            <tr className="bg-apple-accent/5">
              <td className="py-2 font-semibold text-apple-accent">
                Total Return to Equity
              </td>
              <td className="py-2 text-right font-semibold text-apple-accent financial">
                {fmt(results.totalReturn)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------- Returns Summary ------- */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-apple-gray-50 rounded-xl p-6">
          <p className="text-sm text-apple-gray-500">Equity Invested</p>
          <p className="text-2xl font-semibold text-apple-black mt-1 financial">
            {fmt(results.equity)}
          </p>
        </div>
        <div className="bg-apple-gray-50 rounded-xl p-6">
          <p className="text-sm text-apple-gray-500">Total Return</p>
          <p className="text-2xl font-semibold text-apple-black mt-1 financial">
            {fmt(results.totalReturn)}
          </p>
        </div>
        <div className="bg-apple-gray-50 rounded-xl p-6">
          <p className="text-sm text-apple-gray-500">MOIC</p>
          <p className="text-2xl font-semibold text-apple-accent mt-1 financial">
            {fmtMultiple(results.moic)}
          </p>
        </div>
        <div className="bg-apple-gray-50 rounded-xl p-6">
          <p className="text-sm text-apple-gray-500">IRR</p>
          <p className="text-2xl font-semibold text-apple-accent mt-1 financial">
            {isFinite(results.irr) ? fmtPct(results.irr * 100) : "N/A"}
          </p>
        </div>
      </div>

      {/* ------- Exit Route Comparison ------- */}
      <div className="bg-apple-gray-50 rounded-xl p-6">
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Exit Route Comparison
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-apple-gray-200 bg-white p-4 text-center">
            <p className="text-xs font-medium text-apple-gray-500 uppercase tracking-wider">
              Financial Sale
            </p>
            <p className="text-xl font-semibold text-apple-black mt-2 financial">
              {fmt(results.exitEV)}
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">
              MOIC: {fmtMultiple(results.moic)}
            </p>
          </div>
          <div className="rounded-lg border border-apple-accent/30 bg-apple-accent/5 p-4 text-center">
            <p className="text-xs font-medium text-apple-accent uppercase tracking-wider">
              Strategic Sale (+25%)
            </p>
            <p className="text-xl font-semibold text-apple-black mt-2 financial">
              {fmt(results.strategicEV)}
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">
              MOIC: {fmtMultiple(results.strategicMoic)}
            </p>
          </div>
          <div className="rounded-lg border border-apple-gray-200 bg-white p-4 text-center">
            <p className="text-xs font-medium text-apple-gray-500 uppercase tracking-wider">
              Dividend Recap (3x debt)
            </p>
            <p className="text-xl font-semibold text-apple-black mt-2 financial">
              {fmt(results.recapDistribution)}
            </p>
            <p className="text-sm text-apple-gray-500 mt-1">
              MOIC: {fmtMultiple(results.recapMoic)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
