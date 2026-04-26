"use client";

import { useState, useMemo } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                     */
/* ------------------------------------------------------------------ */

function fmtNum(n: number): string {
  const s = Math.abs(Math.round(n)).toString();
  const parts: string[] = [];
  for (let i = s.length; i > 0; i -= 3) {
    parts.unshift(s.slice(Math.max(0, i - 3), i));
  }
  return (n < 0 ? "-" : "") + parts.join(",");
}

function fmt(n: number): string {
  if (Math.abs(n) >= 1_000_000) return "$" + (n / 1_000_000).toFixed(2) + "M";
  return "$" + fmtNum(n);
}

function fmtPct(n: number): string {
  return n.toFixed(1) + "%";
}

function fmtX(n: number): string {
  return n.toFixed(1) + "x";
}

/** Newton-Raphson IRR */
function irr(cfs: number[], guess = 0.15): number {
  let r = guess;
  for (let i = 0; i < 100; i++) {
    let npv = 0, dNpv = 0;
    for (let t = 0; t < cfs.length; t++) {
      const f = Math.pow(1 + r, t);
      npv += cfs[t] / f;
      if (t > 0) dNpv -= (t * cfs[t]) / Math.pow(1 + r, t + 1);
    }
    if (Math.abs(dNpv) < 1e-12) break;
    const next = r - npv / dNpv;
    if (Math.abs(next - r) < 1e-6) return next;
    r = next;
  }
  return r;
}

/* ------------------------------------------------------------------ */
/*  Shared sub-components                                              */
/* ------------------------------------------------------------------ */

function CalcField({
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
      <span className="text-xs font-medium text-apple-gray-500">{label}</span>
      <div className="relative mt-1">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-apple-gray-400 pointer-events-none">
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
          className={`w-full rounded-lg border border-apple-gray-200 bg-apple-gray-50 px-3 py-2 text-sm text-apple-black focus:ring-2 focus:ring-apple-accent/30 focus:border-apple-accent transition-shadow ${
            prefix ? "pl-7" : ""
          } ${suffix ? "pr-8" : ""}`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-apple-gray-400 pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}

function CalcResult({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="text-center">
      <p className="text-xs text-apple-gray-500">{label}</p>
      <p
        className={`text-lg font-semibold mt-0.5 ${
          highlight ? "text-apple-accent" : "text-apple-black"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function CalcWrapper({
  title,
  color,
  toolSlug,
  children,
}: {
  title: string;
  color: string;
  toolSlug?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="mt-10 rounded-xl border p-6"
      style={{ borderColor: `${color}30`, backgroundColor: `${color}06` }}
    >
      <h3
        className="text-sm font-semibold uppercase tracking-wider mb-5"
        style={{ color }}
      >
        {title}
      </h3>
      {children}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-[10px] text-apple-gray-400 leading-relaxed">
          For illustration only. Not financial advice.
        </p>
        {toolSlug && (
          <Link
            href={`/tools/${toolSlug}`}
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-medium text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: color }}
          >
            Detailed simulator
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  01 PREPARE - Personal Runway Calculator                            */
/* ================================================================== */

export function PrepareCalculator({ color }: { color: string }) {
  const [monthlyExpenses, setMonthlyExpenses] = useState(4000);
  const [searchMonths, setSearchMonths] = useState(20);
  const [monthlySearchCosts, setMonthlySearchCosts] = useState(2000);

  const results = useMemo(() => {
    const personalRunway = monthlyExpenses * searchMonths;
    const searchBudget = monthlySearchCosts * searchMonths;
    const total = personalRunway + searchBudget;
    return { personalRunway, searchBudget, total };
  }, [monthlyExpenses, searchMonths, monthlySearchCosts]);

  return (
    <CalcWrapper title="Runway Calculator" color={color} toolSlug="search-capital-calculator">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <CalcField
          label="Monthly living expenses"
          value={monthlyExpenses}
          onChange={setMonthlyExpenses}
          prefix="$"
          step={500}
          min={0}
        />
        <CalcField
          label="Search duration (months)"
          value={searchMonths}
          onChange={setSearchMonths}
          step={1}
          min={1}
          max={36}
        />
        <CalcField
          label="Monthly search costs"
          value={monthlySearchCosts}
          onChange={setMonthlySearchCosts}
          prefix="$"
          step={500}
          min={0}
        />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 bg-white/60 rounded-lg p-4">
        <CalcResult label="Personal runway" value={fmt(results.personalRunway)} />
        <CalcResult label="Search budget" value={fmt(results.searchBudget)} />
        <CalcResult
          label="Total needed"
          value={fmt(results.total)}
          highlight
        />
      </div>
    </CalcWrapper>
  );
}

/* ================================================================== */
/*  02 FUNDRAISE - Fund Economics Calculator                           */
/* ================================================================== */

export function FundraiseCalculator({ color }: { color: string }) {
  const [numInvestors, setNumInvestors] = useState(15);
  const [capitalPerInvestor, setCapitalPerInvestor] = useState(35000);
  const [monthlySalary, setMonthlySalary] = useState(6000);
  const [searchMonths, setSearchMonths] = useState(20);

  const results = useMemo(() => {
    const totalRaised = numInvestors * capitalPerInvestor;
    const totalSalary = monthlySalary * searchMonths;
    const operatingBudget = totalRaised - totalSalary;
    return { totalRaised, totalSalary, operatingBudget };
  }, [numInvestors, capitalPerInvestor, monthlySalary, searchMonths]);

  return (
    <CalcWrapper title="Fund Economics Calculator" color={color} toolSlug="cap-table-simulator">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <CalcField
          label="Number of investors"
          value={numInvestors}
          onChange={setNumInvestors}
          min={1}
          max={30}
        />
        <CalcField
          label="Capital per investor"
          value={capitalPerInvestor}
          onChange={setCapitalPerInvestor}
          prefix="$"
          step={5000}
          min={0}
        />
        <CalcField
          label="Searcher salary / mo"
          value={monthlySalary}
          onChange={setMonthlySalary}
          prefix="$"
          step={500}
          min={0}
        />
        <CalcField
          label="Search duration (mo)"
          value={searchMonths}
          onChange={setSearchMonths}
          min={1}
          max={36}
        />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 bg-white/60 rounded-lg p-4">
        <CalcResult label="Total raised" value={fmt(results.totalRaised)} highlight />
        <CalcResult
          label="Searcher salary (total)"
          value={fmt(results.totalSalary)}
        />
        <CalcResult
          label="Operating budget"
          value={fmt(results.operatingBudget)}
        />
      </div>
    </CalcWrapper>
  );
}

/* ================================================================== */
/*  03 SEARCH - Deal Funnel Calculator                                 */
/* ================================================================== */

export function SearchCalculator({ color }: { color: string }) {
  const [contactsPerWeek, setContactsPerWeek] = useState(30);
  const [weeks, setWeeks] = useState(60);
  const [responseRate, setResponseRate] = useState(8);
  const [meetingToLoi, setMeetingToLoi] = useState(5);

  const results = useMemo(() => {
    const totalContacts = contactsPerWeek * weeks;
    const meetings = Math.round(totalContacts * (responseRate / 100));
    const lois = Math.round(meetings * (meetingToLoi / 100));
    return { totalContacts, meetings, lois };
  }, [contactsPerWeek, weeks, responseRate, meetingToLoi]);

  return (
    <CalcWrapper title="Deal Funnel Calculator" color={color} toolSlug="ebitda-multiple-estimator">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <CalcField
          label="Contacts / week"
          value={contactsPerWeek}
          onChange={setContactsPerWeek}
          min={1}
          max={100}
        />
        <CalcField
          label="Weeks of search"
          value={weeks}
          onChange={setWeeks}
          min={1}
          max={120}
        />
        <CalcField
          label="Response rate"
          value={responseRate}
          onChange={setResponseRate}
          suffix="%"
          step={1}
          min={1}
          max={50}
        />
        <CalcField
          label="Meeting \u2192 LOI rate"
          value={meetingToLoi}
          onChange={setMeetingToLoi}
          suffix="%"
          step={1}
          min={1}
          max={50}
        />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 bg-white/60 rounded-lg p-4">
        <CalcResult
          label="Total contacted"
          value={fmtNum(results.totalContacts)}
        />
        <CalcResult
          label="Meetings"
          value={fmtNum(results.meetings)}
        />
        <CalcResult
          label="LOIs submitted"
          value={fmtNum(results.lois)}
          highlight
        />
      </div>
    </CalcWrapper>
  );
}

/* ================================================================== */
/*  04 ACQUIRE - Affordability Calculator                              */
/* ================================================================== */

export function AcquireCalculator({ color }: { color: string }) {
  const [purchasePrice, setPurchasePrice] = useState(3000000);
  const [ebitda, setEbitda] = useState(750000);
  const [debtPct, setDebtPct] = useState(50);
  const [interestRate, setInterestRate] = useState(7);
  const [sellerNotePct, setSellerNotePct] = useState(15);

  const results = useMemo(() => {
    const debtAmount = purchasePrice * (debtPct / 100);
    const sellerNote = purchasePrice * (sellerNotePct / 100);
    const equityNeeded = purchasePrice - debtAmount - sellerNote;
    // Approx annual debt service (7-year amortization)
    const r = interestRate / 100;
    const annualDebtService =
      r > 0
        ? (debtAmount * r * Math.pow(1 + r, 7)) / (Math.pow(1 + r, 7) - 1)
        : debtAmount / 7;
    // Seller note: interest-only during hold for simplicity
    const annualSellerService = sellerNote * 0.05;
    const totalService = annualDebtService + annualSellerService;
    const dscr = totalService > 0 ? ebitda / totalService : 0;
    const multiple = ebitda > 0 ? purchasePrice / ebitda : 0;
    return { debtAmount, sellerNote, equityNeeded, totalService, dscr, multiple };
  }, [purchasePrice, ebitda, debtPct, interestRate, sellerNotePct]);

  return (
    <CalcWrapper title="Affordability Calculator" color={color} toolSlug="lbo-simulator">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <CalcField
          label="Purchase price"
          value={purchasePrice}
          onChange={setPurchasePrice}
          prefix="$"
          step={250000}
          min={0}
        />
        <CalcField
          label="EBITDA"
          value={ebitda}
          onChange={setEbitda}
          prefix="$"
          step={50000}
          min={0}
        />
        <CalcField
          label="Senior debt (% of price)"
          value={debtPct}
          onChange={setDebtPct}
          suffix="%"
          step={5}
          min={0}
          max={80}
        />
        <CalcField
          label="Interest rate"
          value={interestRate}
          onChange={setInterestRate}
          suffix="%"
          step={0.5}
          min={0}
          max={15}
        />
        <CalcField
          label="Seller note (%)"
          value={sellerNotePct}
          onChange={setSellerNotePct}
          suffix="%"
          step={5}
          min={0}
          max={30}
        />
      </div>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/60 rounded-lg p-4">
        <CalcResult
          label="Equity needed"
          value={fmt(results.equityNeeded)}
          highlight
        />
        <CalcResult
          label="EV / EBITDA"
          value={fmtX(results.multiple)}
        />
        <CalcResult
          label="Annual debt service"
          value={fmt(results.totalService)}
        />
        <CalcResult
          label="DSCR"
          value={fmtX(results.dscr)}
          highlight
        />
      </div>
    </CalcWrapper>
  );
}

/* ================================================================== */
/*  05 OPERATE - Value Creation Calculator                             */
/* ================================================================== */

export function OperateCalculator({ color }: { color: string }) {
  const [startEbitda, setStartEbitda] = useState(800000);
  const [revenueGrowth, setRevenueGrowth] = useState(8);
  const [marginImprovement, setMarginImprovement] = useState(3);
  const [holdYears, setHoldYears] = useState(5);
  const [entryMultiple, setEntryMultiple] = useState(5);

  const results = useMemo(() => {
    // Simplified: EBITDA grows from revenue growth + margin improvement annually
    const annualGrowth = (revenueGrowth + marginImprovement) / 100;
    const exitEbitda = startEbitda * Math.pow(1 + annualGrowth, holdYears);
    const entryEV = startEbitda * entryMultiple;
    const exitEV = exitEbitda * entryMultiple;
    const valueCreated = exitEV - entryEV;
    return { exitEbitda, entryEV, exitEV, valueCreated };
  }, [startEbitda, revenueGrowth, marginImprovement, holdYears, entryMultiple]);

  return (
    <CalcWrapper title="Value Creation Calculator" color={color} toolSlug="value-creation-simulator">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <CalcField
          label="Starting EBITDA"
          value={startEbitda}
          onChange={setStartEbitda}
          prefix="$"
          step={50000}
          min={0}
        />
        <CalcField
          label="Revenue growth / yr"
          value={revenueGrowth}
          onChange={setRevenueGrowth}
          suffix="%"
          step={1}
          min={0}
          max={30}
        />
        <CalcField
          label="Margin improvement / yr"
          value={marginImprovement}
          onChange={setMarginImprovement}
          suffix="%"
          step={0.5}
          min={0}
          max={10}
        />
        <CalcField
          label="Hold period (years)"
          value={holdYears}
          onChange={setHoldYears}
          min={1}
          max={10}
        />
        <CalcField
          label="EV / EBITDA multiple"
          value={entryMultiple}
          onChange={setEntryMultiple}
          suffix="x"
          step={0.5}
          min={2}
          max={15}
        />
      </div>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/60 rounded-lg p-4">
        <CalcResult label="Entry EV" value={fmt(results.entryEV)} />
        <CalcResult label="Exit EBITDA" value={fmt(results.exitEbitda)} />
        <CalcResult label="Exit EV" value={fmt(results.exitEV)} highlight />
        <CalcResult
          label="Value created"
          value={fmt(results.valueCreated)}
          highlight
        />
      </div>
    </CalcWrapper>
  );
}

/* ================================================================== */
/*  06 EXIT - Return Calculator                                        */
/* ================================================================== */

export function ExitCalculator({ color }: { color: string }) {
  const [entryEquity, setEntryEquity] = useState(2000000);
  const [exitEV, setExitEV] = useState(8000000);
  const [remainingDebt, setRemainingDebt] = useState(800000);
  const [holdYears, setHoldYears] = useState(5);
  const [distributions, setDistributions] = useState(500000);

  const results = useMemo(() => {
    const exitEquity = exitEV - remainingDebt;
    const totalReturn = exitEquity + distributions;
    const moic = entryEquity > 0 ? totalReturn / entryEquity : 0;
    // IRR: invest equity at t=0, get distributions spread evenly, get exit equity at end
    const cfs = [-entryEquity];
    const annualDist = holdYears > 0 ? distributions / holdYears : 0;
    for (let y = 1; y < holdYears; y++) cfs.push(annualDist);
    cfs.push(exitEquity + annualDist);
    const irrVal = irr(cfs);
    return { exitEquity, totalReturn, moic, irr: irrVal };
  }, [entryEquity, exitEV, remainingDebt, holdYears, distributions]);

  return (
    <CalcWrapper title="Exit Returns Calculator" color={color} toolSlug="exit-returns-calculator">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <CalcField
          label="Equity invested"
          value={entryEquity}
          onChange={setEntryEquity}
          prefix="$"
          step={100000}
          min={0}
        />
        <CalcField
          label="Exit enterprise value"
          value={exitEV}
          onChange={setExitEV}
          prefix="$"
          step={500000}
          min={0}
        />
        <CalcField
          label="Remaining debt at exit"
          value={remainingDebt}
          onChange={setRemainingDebt}
          prefix="$"
          step={100000}
          min={0}
        />
        <CalcField
          label="Hold period (years)"
          value={holdYears}
          onChange={setHoldYears}
          min={1}
          max={10}
        />
        <CalcField
          label="Total distributions"
          value={distributions}
          onChange={setDistributions}
          prefix="$"
          step={50000}
          min={0}
        />
      </div>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/60 rounded-lg p-4">
        <CalcResult label="Equity at exit" value={fmt(results.exitEquity)} />
        <CalcResult label="Total return" value={fmt(results.totalReturn)} />
        <CalcResult label="MOIC" value={fmtX(results.moic)} highlight />
        <CalcResult
          label="IRR"
          value={isFinite(results.irr) ? fmtPct(results.irr * 100) : "N/A"}
          highlight
        />
      </div>
    </CalcWrapper>
  );
}

/* ================================================================== */
/*  Calculator map - used by JourneyPhase                              */
/* ================================================================== */

const CALCULATOR_MAP: Record<
  string,
  React.ComponentType<{ color: string }>
> = {
  prepare: PrepareCalculator,
  fundraise: FundraiseCalculator,
  search: SearchCalculator,
  acquire: AcquireCalculator,
  operate: OperateCalculator,
  exit: ExitCalculator,
};

export function PhaseCalculator({
  phaseId,
  color,
}: {
  phaseId: string;
  color: string;
}) {
  const Calc = CALCULATOR_MAP[phaseId];
  if (!Calc) return null;
  return <Calc color={color} />;
}
