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
/*  Input components                                                  */
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
  computed,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  computed?: string;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between">
        <span className="text-sm text-apple-gray-500">{label}</span>
        <span className="text-sm font-medium text-apple-black financial">
          {value}
          {suffix ?? ""}
          {computed ? (
            <span className="text-apple-gray-500 font-normal ml-1">
              ({computed})
            </span>
          ) : null}
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
/*  Debt amortization helper                                          */
/* ------------------------------------------------------------------ */

interface DebtScheduleRow {
  year: number;
  beginBalance: number;
  interest: number;
  principal: number;
  totalPayment: number;
  endBalance: number;
}

function amortize(
  principal: number,
  annualRate: number,
  termYears: number,
  holdYears: number,
): DebtScheduleRow[] {
  if (principal <= 0 || termYears <= 0)
    return Array.from({ length: holdYears }, (_, i) => ({
      year: i + 1,
      beginBalance: 0,
      interest: 0,
      principal: 0,
      totalPayment: 0,
      endBalance: 0,
    }));

  const r = annualRate / 100;
  // Fixed annual payment (fully amortizing)
  const annualPayment =
    r > 0
      ? (principal * r * Math.pow(1 + r, termYears)) /
        (Math.pow(1 + r, termYears) - 1)
      : principal / termYears;

  const rows: DebtScheduleRow[] = [];
  let balance = principal;
  for (let y = 1; y <= holdYears; y++) {
    if (balance <= 0) {
      rows.push({
        year: y,
        beginBalance: 0,
        interest: 0,
        principal: 0,
        totalPayment: 0,
        endBalance: 0,
      });
      continue;
    }
    const interest = balance * r;
    const payment = Math.min(annualPayment, balance + interest);
    const princ = payment - interest;
    const endBal = Math.max(0, balance - princ);
    rows.push({
      year: y,
      beginBalance: balance,
      interest,
      principal: princ,
      totalPayment: payment,
      endBalance: endBal,
    });
    balance = endBal;
  }
  return rows;
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export default function LBOWidget() {
  /* ---------- Inputs ---------- */
  const [ev, setEv] = useState(5_000_000);
  const [ebitda, setEbitda] = useState(1_000_000);
  const [seniorDebtPct, setSeniorDebtPct] = useState(40);
  const [sellerNotePct, setSellerNotePct] = useState(15);
  const [seniorRate, setSeniorRate] = useState(6);
  const [seniorTerm, setSeniorTerm] = useState(7);
  const [sellerRate, setSellerRate] = useState(4);
  const [sellerTerm, setSellerTerm] = useState(5);
  const [ebitdaGrowth, setEbitdaGrowth] = useState(5);
  const [capexPct, setCapexPct] = useState(3);
  const [wcPct, setWcPct] = useState(10);
  const [revenue, setRevenue] = useState(5_000_000);
  const [revenueGrowth, setRevenueGrowth] = useState(5);
  const [exitMultiple, setExitMultiple] = useState(6);
  const [holdPeriod, setHoldPeriod] = useState(5);

  /* ---------- Calculations ---------- */
  const results = useMemo(() => {
    // Sources & Uses
    const seniorDebt = ev * (seniorDebtPct / 100);
    const sellerNote = ev * (sellerNotePct / 100);
    const equityPct = 100 - seniorDebtPct - sellerNotePct;
    const equity = ev * (equityPct / 100);

    const entryMultiple = ebitda > 0 ? ev / ebitda : 0;

    // Debt schedules
    const seniorSchedule = amortize(
      seniorDebt,
      seniorRate,
      seniorTerm,
      holdPeriod,
    );
    const sellerSchedule = amortize(
      sellerNote,
      sellerRate,
      sellerTerm,
      holdPeriod,
    );

    // Year-by-year projections
    interface YearRow {
      year: number;
      ebitda: number;
      revenue: number;
      seniorService: number;
      sellerService: number;
      capex: number;
      wcChange: number;
      fcfe: number;
      cumulativeFcfe: number;
    }

    const projections: YearRow[] = [];
    let cumulativeFcfe = 0;
    let prevRevenue = revenue;

    for (let y = 0; y < holdPeriod; y++) {
      const yearEbitda =
        ebitda * Math.pow(1 + ebitdaGrowth / 100, y + 1);
      const yearRevenue =
        revenue * Math.pow(1 + revenueGrowth / 100, y + 1);

      const seniorService = seniorSchedule[y]?.totalPayment ?? 0;
      const sellerService = sellerSchedule[y]?.totalPayment ?? 0;

      const capex = yearRevenue * (capexPct / 100);
      const revenueChange = yearRevenue - prevRevenue;
      const wcChange = revenueChange * (wcPct / 100);

      const fcfe =
        yearEbitda - seniorService - sellerService - capex - wcChange;
      cumulativeFcfe += fcfe;

      projections.push({
        year: y + 1,
        ebitda: yearEbitda,
        revenue: yearRevenue,
        seniorService,
        sellerService,
        capex,
        wcChange,
        fcfe,
        cumulativeFcfe,
      });

      prevRevenue = yearRevenue;
    }

    // Exit analysis
    const exitEbitda = projections[holdPeriod - 1]?.ebitda ?? ebitda;
    const exitEV = exitEbitda * exitMultiple;
    const remainingSenior =
      seniorSchedule[holdPeriod - 1]?.endBalance ?? 0;
    const remainingSeller =
      sellerSchedule[holdPeriod - 1]?.endBalance ?? 0;
    const remainingDebt = remainingSenior + remainingSeller;
    const equityAtExit = exitEV - remainingDebt;

    const totalReturn = equityAtExit + cumulativeFcfe;
    const moic = equity > 0 ? totalReturn / equity : 0;

    // IRR
    const cashFlows = [-equity];
    for (let y = 0; y < holdPeriod - 1; y++) {
      cashFlows.push(projections[y].fcfe);
    }
    // Final year: FCF + exit equity
    cashFlows.push(
      (projections[holdPeriod - 1]?.fcfe ?? 0) + equityAtExit,
    );
    const irr = approximateIRR(cashFlows);

    return {
      seniorDebt,
      sellerNote,
      equity,
      equityPct,
      entryMultiple,
      seniorSchedule,
      sellerSchedule,
      projections,
      exitEbitda,
      exitEV,
      remainingSenior,
      remainingSeller,
      remainingDebt,
      equityAtExit,
      cumulativeFcfe,
      totalReturn,
      moic,
      irr,
    };
  }, [
    ev,
    ebitda,
    seniorDebtPct,
    sellerNotePct,
    seniorRate,
    seniorTerm,
    sellerRate,
    sellerTerm,
    ebitdaGrowth,
    capexPct,
    wcPct,
    revenue,
    revenueGrowth,
    exitMultiple,
    holdPeriod,
  ]);

  /* ---------- Render ---------- */
  return (
    <div className="space-y-8">
      {/* ------- Deal Inputs ------- */}
      <div>
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Deal Parameters
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Field
            label="Enterprise Value"
            value={ev}
            onChange={setEv}
            prefix="$"
            step={250000}
            min={0}
          />
          <Field
            label="EBITDA"
            value={ebitda}
            onChange={setEbitda}
            prefix="$"
            step={50000}
            min={0}
          />
          <Field
            label="Revenue"
            value={revenue}
            onChange={setRevenue}
            prefix="$"
            step={250000}
            min={0}
          />
        </div>
      </div>

      {/* ------- Capital Structure Sliders ------- */}
      <div>
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Capital Structure
        </h3>
        <div className="grid gap-5 sm:grid-cols-2">
          <SliderField
            label="Senior Debt (% of EV)"
            value={seniorDebtPct}
            onChange={(v) => {
              const maxSenior = 70;
              const clamped = Math.min(v, maxSenior);
              if (clamped + sellerNotePct > 100)
                setSellerNotePct(100 - clamped);
              setSeniorDebtPct(clamped);
            }}
            min={0}
            max={70}
            suffix="%"
            computed={fmtDollar(results.seniorDebt)}
          />
          <SliderField
            label="Seller Note (% of EV)"
            value={sellerNotePct}
            onChange={(v) => {
              const maxSeller = 30;
              const clamped = Math.min(v, maxSeller);
              if (seniorDebtPct + clamped > 100)
                setSeniorDebtPct(100 - clamped);
              setSellerNotePct(clamped);
            }}
            min={0}
            max={30}
            suffix="%"
            computed={fmtDollar(results.sellerNote)}
          />
        </div>
        <div className="mt-3 flex items-center gap-3 text-sm">
          <span className="text-apple-gray-500">Equity required:</span>
          <span className="font-semibold text-apple-black financial">
            {fmtPct(results.equityPct)} ({fmtDollar(results.equity)})
          </span>
        </div>
      </div>

      {/* ------- Debt Terms ------- */}
      <div>
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Debt Terms
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Field
            label="Senior interest rate"
            value={seniorRate}
            onChange={setSeniorRate}
            suffix="%"
            step={0.25}
            min={0}
            max={20}
          />
          <Field
            label="Senior term (years)"
            value={seniorTerm}
            onChange={setSeniorTerm}
            min={1}
            max={15}
          />
          <Field
            label="Seller note rate"
            value={sellerRate}
            onChange={setSellerRate}
            suffix="%"
            step={0.25}
            min={0}
            max={15}
          />
          <Field
            label="Seller note term (years)"
            value={sellerTerm}
            onChange={setSellerTerm}
            min={1}
            max={15}
          />
        </div>
      </div>

      {/* ------- Operating Assumptions ------- */}
      <div>
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Operating Assumptions
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Field
            label="Annual EBITDA growth"
            value={ebitdaGrowth}
            onChange={setEbitdaGrowth}
            suffix="%"
            step={0.5}
            min={-20}
            max={50}
          />
          <Field
            label="Revenue growth"
            value={revenueGrowth}
            onChange={setRevenueGrowth}
            suffix="%"
            step={0.5}
            min={-20}
            max={50}
          />
          <Field
            label="CapEx (% of revenue)"
            value={capexPct}
            onChange={setCapexPct}
            suffix="%"
            step={0.5}
            min={0}
            max={20}
          />
          <Field
            label="Working capital (% of revenue change)"
            value={wcPct}
            onChange={setWcPct}
            suffix="%"
            step={1}
            min={0}
            max={50}
          />
          <Field
            label="Exit multiple (EV/EBITDA)"
            value={exitMultiple}
            onChange={setExitMultiple}
            suffix="x"
            step={0.5}
            min={1}
            max={20}
          />
          <Field
            label="Hold period (years)"
            value={holdPeriod}
            onChange={setHoldPeriod}
            min={1}
            max={10}
          />
        </div>
      </div>

      {/* ------- Sources & Uses ------- */}
      <div className="bg-apple-gray-50 rounded-xl p-6">
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Sources &amp; Uses
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Sources */}
          <div>
            <h4 className="text-sm font-semibold text-apple-gray-500 uppercase tracking-wider mb-3">
              Sources
            </h4>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-apple-gray-100">
                <tr>
                  <td className="py-2 text-apple-gray-700">Senior Debt</td>
                  <td className="py-2 text-right font-medium text-apple-black financial">
                    {fmtDollar(results.seniorDebt)}
                  </td>
                  <td className="py-2 text-right text-apple-gray-500 pl-2 financial">
                    {fmtPct(seniorDebtPct)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-apple-gray-700">Seller Note</td>
                  <td className="py-2 text-right font-medium text-apple-black financial">
                    {fmtDollar(results.sellerNote)}
                  </td>
                  <td className="py-2 text-right text-apple-gray-500 pl-2 financial">
                    {fmtPct(sellerNotePct)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-apple-gray-700">Equity</td>
                  <td className="py-2 text-right font-medium text-apple-black financial">
                    {fmtDollar(results.equity)}
                  </td>
                  <td className="py-2 text-right text-apple-gray-500 pl-2 financial">
                    {fmtPct(results.equityPct)}
                  </td>
                </tr>
                <tr className="bg-apple-gray-100/50">
                  <td className="py-2 font-semibold text-apple-black">Total</td>
                  <td className="py-2 text-right font-semibold text-apple-black financial">
                    {fmtDollar(ev)}
                  </td>
                  <td className="py-2 text-right text-apple-gray-500 pl-2 financial">
                    100%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Uses */}
          <div>
            <h4 className="text-sm font-semibold text-apple-gray-500 uppercase tracking-wider mb-3">
              Uses
            </h4>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-apple-gray-100">
                <tr>
                  <td className="py-2 text-apple-gray-700">
                    Acquisition of Business
                  </td>
                  <td className="py-2 text-right font-medium text-apple-black financial">
                    {fmtDollar(ev)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-apple-gray-500 text-xs">
                    Entry multiple: {fmtMultiple(results.entryMultiple)}{" "}
                    EV/EBITDA
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ------- Cash Flow Projection ------- */}
      <div className="bg-apple-gray-50 rounded-xl p-6">
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Cash Flow Projection
        </h3>
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="text-apple-gray-500 text-xs uppercase tracking-wider">
                <th className="py-2 text-left font-medium px-2">Year</th>
                <th className="py-2 text-right font-medium px-2">EBITDA</th>
                <th className="py-2 text-right font-medium px-2">
                  Senior Debt Service
                </th>
                <th className="py-2 text-right font-medium px-2">
                  Seller Note Service
                </th>
                <th className="py-2 text-right font-medium px-2">CapEx</th>
                <th className="py-2 text-right font-medium px-2">WC Change</th>
                <th className="py-2 text-right font-medium px-2">FCFE</th>
                <th className="py-2 text-right font-medium px-2">
                  Cumulative
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
                    {fmtDollar(row.ebitda)}
                  </td>
                  <td className="py-2 px-2 text-right text-apple-black financial">
                    ({fmtDollar(row.seniorService)})
                  </td>
                  <td className="py-2 px-2 text-right text-apple-black financial">
                    ({fmtDollar(row.sellerService)})
                  </td>
                  <td className="py-2 px-2 text-right text-apple-black financial">
                    ({fmtDollar(row.capex)})
                  </td>
                  <td className="py-2 px-2 text-right text-apple-black financial">
                    ({fmtDollar(row.wcChange)})
                  </td>
                  <td
                    className={`py-2 px-2 text-right font-medium financial ${
                      row.fcfe >= 0 ? "text-apple-success" : "text-apple-error"
                    }`}
                  >
                    {fmtDollar(row.fcfe)}
                  </td>
                  <td
                    className={`py-2 px-2 text-right financial ${
                      row.cumulativeFcfe >= 0
                        ? "text-apple-black"
                        : "text-apple-error"
                    }`}
                  >
                    {fmtDollar(row.cumulativeFcfe)}
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
          Exit Analysis (Year {holdPeriod})
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-apple-gray-100">
              <tr>
                <td className="py-2 text-apple-gray-700">
                  Exit EBITDA (Year {holdPeriod})
                </td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(results.exitEbitda)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">
                  Exit EV ({fmtMultiple(exitMultiple)} multiple)
                </td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(results.exitEV)}
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">
                  Less: Remaining Senior Debt
                </td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  ({fmtDollar(results.remainingSenior)})
                </td>
              </tr>
              <tr>
                <td className="py-2 text-apple-gray-700">
                  Less: Remaining Seller Note
                </td>
                <td className="py-2 text-right font-medium text-apple-black financial">
                  ({fmtDollar(results.remainingSeller)})
                </td>
              </tr>
              <tr className="bg-apple-gray-100/50">
                <td className="py-2 font-semibold text-apple-black">
                  Equity Value at Exit
                </td>
                <td className="py-2 text-right font-semibold text-apple-black financial">
                  {fmtDollar(results.equityAtExit)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ------- Returns Summary ------- */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-apple-gray-50 rounded-xl p-6">
          <p className="text-sm text-apple-gray-500">Equity Invested</p>
          <p className="text-2xl font-semibold text-apple-black mt-1 financial">
            {fmtDollar(results.equity)}
          </p>
        </div>

        <div className="bg-apple-gray-50 rounded-xl p-6">
          <p className="text-sm text-apple-gray-500">Total Return</p>
          <p className="text-2xl font-semibold text-apple-black mt-1 financial">
            {fmtDollar(results.totalReturn)}
          </p>
          <p className="text-xs text-apple-gray-500 mt-1">
            Exit equity + cumulative cash flows
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

      {/* ------- Debt Paydown Summary ------- */}
      <div className="bg-apple-gray-50 rounded-xl p-6">
        <h3 className="text-base font-semibold text-apple-black mb-4">
          Debt Paydown Schedule
        </h3>
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm min-w-[540px]">
            <thead>
              <tr className="text-apple-gray-500 text-xs uppercase tracking-wider">
                <th className="py-2 text-left font-medium px-2">Year</th>
                <th className="py-2 text-right font-medium px-2">
                  Senior Balance
                </th>
                <th className="py-2 text-right font-medium px-2">
                  Seller Balance
                </th>
                <th className="py-2 text-right font-medium px-2">
                  Total Debt
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-apple-gray-100">
              <tr>
                <td className="py-2 px-2 text-apple-gray-700 font-medium">0</td>
                <td className="py-2 px-2 text-right text-apple-black financial">
                  {fmtDollar(results.seniorDebt)}
                </td>
                <td className="py-2 px-2 text-right text-apple-black financial">
                  {fmtDollar(results.sellerNote)}
                </td>
                <td className="py-2 px-2 text-right font-medium text-apple-black financial">
                  {fmtDollar(results.seniorDebt + results.sellerNote)}
                </td>
              </tr>
              {results.seniorSchedule.map((sr, i) => {
                const se = results.sellerSchedule[i];
                return (
                  <tr key={sr.year}>
                    <td className="py-2 px-2 text-apple-gray-700 font-medium">
                      {sr.year}
                    </td>
                    <td className="py-2 px-2 text-right text-apple-black financial">
                      {fmtDollar(sr.endBalance)}
                    </td>
                    <td className="py-2 px-2 text-right text-apple-black financial">
                      {fmtDollar(se?.endBalance ?? 0)}
                    </td>
                    <td className="py-2 px-2 text-right font-medium text-apple-black financial">
                      {fmtDollar(sr.endBalance + (se?.endBalance ?? 0))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
