"use client";

import { useState, useMemo } from "react";

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function fmtDollar(n: number): string {
  return "$" + fmt(Math.round(n));
}

function fmtPct(n: number): string {
  return n.toFixed(1) + "%";
}

function fmtMultiple(n: number): string {
  return n.toFixed(2) + "x";
}

/** Approximate IRR using Newton-Raphson on NPV = 0 */
function approximateIRR(
  cashFlows: number[],
  maxIter = 100,
  tol = 1e-6,
): number {
  let rate = 0.15;
  for (let i = 0; i < maxIter; i++) {
    let npv = 0;
    let dNpv = 0;
    for (let t = 0; t < cashFlows.length; t++) {
      const factor = Math.pow(1 + rate, t);
      npv += cashFlows[t] / factor;
      if (t > 0) dNpv -= (t * cashFlows[t]) / Math.pow(1 + rate, t + 1);
    }
    if (Math.abs(dNpv) < 1e-12) break;
    const next = rate - npv / dNpv;
    if (Math.abs(next - rate) < tol) return next;
    rate = next;
  }
  return rate;
}

/* ------------------------------------------------------------------ */
/*  Input field component                                             */
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

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export default function CapTableWidget() {
  /* ---------- Inputs ---------- */
  const [ev, setEv] = useState(10_000_000);
  const [searcherEquity, setSearcherEquity] = useState(50_000);
  const [numInvestors, setNumInvestors] = useState(15);
  const [searchCapPerInvestor, setSearchCapPerInvestor] = useState(35_000);
  const [stepUpMultiple, setStepUpMultiple] = useState(1.5);
  const [searcherBasePct, setSearcherBasePct] = useState(25);
  const [preferredReturn, setPreferredReturn] = useState(8);
  const [exitValue, setExitValue] = useState(25_000_000);
  const [yearsToExit, setYearsToExit] = useState(5);
  const [debtAtAcq, setDebtAtAcq] = useState(4_000_000);

  /* ---------- Calculations ---------- */
  const results = useMemo(() => {
    // Search capital
    const totalSearchCapital = numInvestors * searchCapPerInvestor;

    // Equity at acquisition
    const equityAtAcquisition = ev - debtAtAcq;

    // Investor step-up: search capital converts at step-up multiple
    const investorStepUpValue = totalSearchCapital * stepUpMultiple;

    // Total investor equity invested at acquisition
    // Investors get first right to invest the equity needed for acquisition
    // Their step-up value counts toward their equity investment
    const investorEquityInvested = equityAtAcquisition - searcherEquity;

    // Searcher ownership vesting schedule
    const searcherPct = searcherBasePct / 100;
    const vestingSchedule = [
      { year: 0, label: "At close", cumulative: searcherPct / 3 },
      { year: 2, label: "Year 2", cumulative: (searcherPct * 2) / 3 },
      { year: 4, label: "Year 4", cumulative: searcherPct },
    ];

    // Determine vested percentage at exit
    let vestedSearcherPct = 0;
    for (const v of vestingSchedule) {
      if (yearsToExit >= v.year) vestedSearcherPct = v.cumulative;
    }

    // Remaining debt at exit (simple amortization over 7 years)
    const debtTermYears = 7;
    const annualAmort = debtAtAcq / debtTermYears;
    const yearsAmortized = Math.min(yearsToExit, debtTermYears);
    const remainingDebt = Math.max(0, debtAtAcq - annualAmort * yearsAmortized);

    // Net equity at exit
    const netEquityAtExit = exitValue - remainingDebt;

    // Preferred return (cumulative, compounded annually)
    const preferredRate = preferredReturn / 100;
    const totalPreferred =
      investorEquityInvested *
      (Math.pow(1 + preferredRate, yearsToExit) - 1);

    // Waterfall distribution
    // 1. Preferred return to investors
    const preferredPayout = Math.min(totalPreferred, Math.max(0, netEquityAtExit));

    // 2. Return of capital to investors
    const afterPreferred = Math.max(0, netEquityAtExit - preferredPayout);
    const capitalReturn = Math.min(
      investorEquityInvested,
      afterPreferred,
    );

    // 3. Remaining goes to common equity holders
    const remainingForCommon = Math.max(0, afterPreferred - capitalReturn);

    // Searcher payout from common
    const searcherCommonPayout = remainingForCommon * vestedSearcherPct;

    // Investor common payout (investors also hold common equity)
    const investorCommonPct = 1 - vestedSearcherPct;
    const investorCommonPayout = remainingForCommon * investorCommonPct;

    // Total payouts
    const totalSearcherPayout = searcherCommonPayout;
    const totalInvestorPayout =
      preferredPayout + capitalReturn + investorCommonPayout;

    // Multiples and IRR
    const searcherMultiple =
      searcherEquity > 0 ? totalSearcherPayout / searcherEquity : 0;

    // Investor IRR: cash flows = [-invested, 0, 0, ..., payout at exit]
    const investorCashFlows = [-investorEquityInvested];
    for (let y = 1; y < yearsToExit; y++) investorCashFlows.push(0);
    investorCashFlows.push(totalInvestorPayout);
    const investorIRR = approximateIRR(investorCashFlows);

    const investorMOIC =
      investorEquityInvested > 0
        ? totalInvestorPayout / investorEquityInvested
        : 0;

    return {
      totalSearchCapital,
      equityAtAcquisition,
      investorStepUpValue,
      investorEquityInvested,
      vestingSchedule,
      vestedSearcherPct,
      remainingDebt,
      netEquityAtExit,
      totalPreferred,
      preferredPayout,
      capitalReturn,
      remainingForCommon,
      searcherCommonPayout,
      investorCommonPayout,
      totalSearcherPayout,
      totalInvestorPayout,
      searcherMultiple,
      investorIRR,
      investorMOIC,
    };
  }, [
    ev,
    searcherEquity,
    numInvestors,
    searchCapPerInvestor,
    stepUpMultiple,
    searcherBasePct,
    preferredReturn,
    exitValue,
    yearsToExit,
    debtAtAcq,
  ]);

  /* ---------- Render ---------- */
  return (
    <div className="rounded-2xl border border-apple-gray-200 bg-white p-6 sm:p-8 space-y-8">
      {/* ------- Inputs ------- */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Field
          label="Enterprise Value at acquisition"
          value={ev}
          onChange={setEv}
          prefix="$"
          step={100000}
          min={0}
        />
        <Field
          label="Searcher equity contribution"
          value={searcherEquity}
          onChange={setSearcherEquity}
          prefix="$"
          step={10000}
          min={0}
        />
        <Field
          label="Number of search investors"
          value={numInvestors}
          onChange={setNumInvestors}
          min={1}
          max={50}
        />
        <Field
          label="Search capital per investor"
          value={searchCapPerInvestor}
          onChange={setSearchCapPerInvestor}
          prefix="$"
          step={5000}
          min={0}
        />
        <Field
          label="Investor step-up multiple"
          value={stepUpMultiple}
          onChange={setStepUpMultiple}
          suffix="x"
          step={0.1}
          min={1}
          max={3}
        />
        <Field
          label="Searcher base equity %"
          value={searcherBasePct}
          onChange={setSearcherBasePct}
          suffix="%"
          step={1}
          min={0}
          max={50}
        />
        <Field
          label="Annual preferred return"
          value={preferredReturn}
          onChange={setPreferredReturn}
          suffix="%"
          step={0.5}
          min={0}
          max={20}
        />
        <Field
          label="Exit value"
          value={exitValue}
          onChange={setExitValue}
          prefix="$"
          step={1000000}
          min={0}
        />
        <Field
          label="Years to exit"
          value={yearsToExit}
          onChange={setYearsToExit}
          min={1}
          max={10}
        />
        <Field
          label="Debt at acquisition"
          value={debtAtAcq}
          onChange={setDebtAtAcq}
          prefix="$"
          step={500000}
          min={0}
        />
      </div>

      {/* ------- Capital Structure at Acquisition ------- */}
      <div className="bg-apple-gray-50 rounded-xl p-6">
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Capital Structure at Acquisition
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-apple-gray-100">
              <tr>
                <td className="py-2 text-apple-gray-700">Enterprise Value</td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(ev)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">Debt</td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(debtAtAcq)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">Total Equity Required</td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(results.equityAtAcquisition)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">
                  Total Search Capital Raised ({numInvestors} investors)
                </td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(results.totalSearchCapital)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">
                  Investor Step-up Value ({fmtMultiple(stepUpMultiple)})
                </td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(results.investorStepUpValue)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">Investor Equity Invested</td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(results.investorEquityInvested)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">Searcher Equity Invested</td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(searcherEquity)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ------- Vesting Schedule ------- */}
      <div className="bg-apple-gray-50 rounded-xl p-6">
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Searcher Equity Vesting
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-apple-gray-500 text-left">
                <th className="py-2 font-medium">Milestone</th>
                <th className="py-2 text-right font-medium">Cumulative Ownership</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-apple-gray-100">
              {results.vestingSchedule.map((v) => (
                <tr
                  key={v.label}
                  className={
                    yearsToExit >= v.year
                      ? "text-apple-black"
                      : "text-apple-gray-300"
                  }
                >
                  <td className="py-2">{v.label}</td>
                  <td className="py-2 text-right font-medium financial">
                    {fmtPct(v.cumulative * 100)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-apple-gray-500 mt-3">
          At exit (year {yearsToExit}), searcher has vested{" "}
          <span className="font-medium text-apple-black">
            {fmtPct(results.vestedSearcherPct * 100)}
          </span>{" "}
          of common equity.
        </p>
      </div>

      {/* ------- Exit Waterfall ------- */}
      <div className="bg-apple-gray-50 rounded-xl p-6">
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Exit Analysis (Year {yearsToExit})
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-apple-gray-100">
              <tr>
                <td className="py-2 text-apple-gray-700">Exit Value</td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(exitValue)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">Less: Remaining Debt</td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  ({fmtDollar(results.remainingDebt)})
                </td>
              </tr>
              <tr className="bg-apple-gray-100/50">
                <td className="py-2 font-semibold text-apple-black">
                  Net Equity at Exit
                </td>
                <td className="py-2 text-right font-semibold text-apple-black financial">
                  {fmtDollar(results.netEquityAtExit)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-sm font-semibold text-apple-black mt-6 mb-3">
          Distribution Waterfall
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-apple-gray-100">
              <tr>
                <td className="py-2 text-apple-gray-700">
                  1. Preferred Return to Investors ({fmtPct(preferredReturn)}{" "}
                  compounded, {yearsToExit} yrs)
                </td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(results.preferredPayout)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">
                  2. Return of Capital to Investors
                </td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(results.capitalReturn)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">
                  3. Remaining for Common Equity
                </td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(results.remainingForCommon)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ------- Returns Summary ------- */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Searcher */}
        <div className="bg-apple-gray-50 rounded-xl p-6">
          <h4 className="text-sm font-semibold text-apple-gray-500 uppercase tracking-wider mb-4">
            Searcher Returns
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-apple-gray-500">Capital Invested</p>
              <p className="text-2xl font-semibold text-apple-black financial">
                {fmtDollar(searcherEquity)}
              </p>
            </div>
            <div>
              <p className="text-sm text-apple-gray-500">Total Payout</p>
              <p className="text-2xl font-semibold text-apple-black financial">
                {fmtDollar(results.totalSearcherPayout)}
              </p>
            </div>
            <div>
              <p className="text-sm text-apple-gray-500">
                Multiple on Invested Capital
              </p>
              <p className="text-2xl font-semibold text-apple-accent financial">
                {fmtMultiple(results.searcherMultiple)}
              </p>
            </div>
          </div>
        </div>

        {/* Investors */}
        <div className="bg-apple-gray-50 rounded-xl p-6">
          <h4 className="text-sm font-semibold text-apple-gray-500 uppercase tracking-wider mb-4">
            Investor Returns (Aggregate)
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-apple-gray-500">
                Total Equity Invested
              </p>
              <p className="text-2xl font-semibold text-apple-black financial">
                {fmtDollar(results.investorEquityInvested)}
              </p>
            </div>
            <div>
              <p className="text-sm text-apple-gray-500">Total Payout</p>
              <p className="text-2xl font-semibold text-apple-black financial">
                {fmtDollar(results.totalInvestorPayout)}
              </p>
            </div>
            <div>
              <p className="text-sm text-apple-gray-500">MOIC</p>
              <p className="text-2xl font-semibold text-apple-black financial">
                {fmtMultiple(results.investorMOIC)}
              </p>
            </div>
            <div>
              <p className="text-sm text-apple-gray-500">
                Approximate IRR
              </p>
              <p className="text-2xl font-semibold text-apple-accent financial">
                {isFinite(results.investorIRR)
                  ? fmtPct(results.investorIRR * 100)
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ------- Per-Investor Breakdown ------- */}
      <div className="bg-apple-gray-50 rounded-xl p-6">
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Per-Investor Breakdown
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-apple-gray-100">
              <tr>
                <td className="py-2 text-apple-gray-700">Search Capital Contributed</td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(searchCapPerInvestor)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">
                  Step-up Value ({fmtMultiple(stepUpMultiple)})
                </td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(searchCapPerInvestor * stepUpMultiple)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">
                  Equity Invested at Acquisition (pro rata)
                </td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(results.investorEquityInvested / numInvestors)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">Total Payout at Exit</td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(results.totalInvestorPayout / numInvestors)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
