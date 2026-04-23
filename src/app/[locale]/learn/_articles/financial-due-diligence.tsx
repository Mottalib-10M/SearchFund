import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function FinancialDueDiligenceArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Financial Due Diligence: What to Look For
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          Financial due diligence (FDD) is the most critical workstream
          in any acquisition. It validates (or refutes) the seller&rsquo;s
          financial claims, identifies risks, and determines the
          &ldquo;true&rdquo; earnings that form the basis for{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            valuation
          </Link>{" "}
          and{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            financing
          </Link>.
          This guide provides a detailed framework for conducting
          financial DD on an SME acquisition.
        </p>

        <h2 className={h2Class}>Documents to request</h2>
        <ul className={ulClass}>
          <li><strong>Tax returns:</strong> 3&ndash;5 years of federal and state/provincial returns</li>
          <li><strong>Financial statements:</strong> 3&ndash;5 years of P&amp;L, balance sheet, and cash flow statements (monthly if available)</li>
          <li><strong>General ledger:</strong> Detailed transaction-level data for the trailing 12&ndash;24 months</li>
          <li><strong>Bank statements:</strong> 12&ndash;24 months of all business bank accounts</li>
          <li><strong>AR and AP aging reports:</strong> Current and historical aging schedules</li>
          <li><strong>Revenue detail:</strong> Revenue by customer, by product/service, by month</li>
          <li><strong>Payroll records:</strong> Employee compensation, benefits, headcount over time</li>
          <li><strong>Debt schedule:</strong> All outstanding loans, lines of credit, leases, and obligations</li>
          <li><strong>Insurance policies:</strong> All current policies with premiums and coverage</li>
          <li><strong>Budget/forecast:</strong> Current year budget and any management projections</li>
        </ul>

        <h2 className={h2Class}>Revenue analysis</h2>

        <h3 className={h3Class}>Revenue quality</h3>
        <ul className={ulClass}>
          <li>Break revenue into{" "}
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              recurring vs. non-recurring
            </Link>{" "}
            components</li>
          <li>Analyze revenue by customer to assess{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              concentration risk
            </Link></li>
          <li>Calculate year-over-year growth rates (look for trends, not just snapshots)</li>
          <li>Identify any revenue recognition issues (cash vs. accrual timing differences)</li>
          <li>Verify revenue against bank deposits (especially for cash-heavy businesses)</li>
        </ul>

        <h3 className={h3Class}>Revenue sustainability</h3>
        <ul className={ulClass}>
          <li>What percentage of revenue is under contract?</li>
          <li>What are customer retention/churn rates?</li>
          <li>Are there any one-time or non-recurring revenue items in the historical numbers?</li>
          <li>Is recent revenue growth organic or driven by one-time events?</li>
          <li>Are there any customers at risk of leaving during the ownership transition?</li>
        </ul>

        <h2 className={h2Class}>EBITDA and earnings analysis</h2>
        <p>
          See our detailed{" "}
          <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
            adjusted EBITDA guide
          </Link>{" "}
          for a complete treatment of add-backs and normalizations.
          Key FDD tasks:
        </p>
        <ul className={ulClass}>
          <li>Calculate EBITDA independently from raw financial statements</li>
          <li>Evaluate every seller add-back: legitimate, gray-area, or{" "}
            <Link href="/learn/red-flags-due-diligence" className="text-apple-accent hover:underline">
              red flag
            </Link></li>
          <li>Compare adjusted EBITDA to tax return taxable income (material differences need explanation)</li>
          <li>Calculate trailing 12-month EBITDA (not just most recent fiscal year)</li>
          <li>Assess EBITDA margin trends over 3&ndash;5 years</li>
        </ul>

        <h2 className={h2Class}>Working capital analysis</h2>
        <p>
          Working capital is the operating cash the business needs to
          function day-to-day. It&rsquo;s a critical but often
          overlooked element of FDD:
        </p>
        <ul className={ulClass}>
          <li><strong>Net Working Capital (NWC):</strong> Current assets (excluding cash) minus current liabilities (excluding current debt)</li>
          <li><strong>NWC trend:</strong> Is working capital growing, shrinking, or stable?</li>
          <li><strong>Days Sales Outstanding (DSO):</strong> How quickly customers pay. Rising DSO is a cash flow warning sign</li>
          <li><strong>Days Payable Outstanding (DPO):</strong> How slowly the business pays vendors</li>
          <li><strong>Inventory turnover:</strong> For businesses with inventory, is stock moving or accumulating?</li>
          <li><strong>Working capital peg:</strong> Establish a normalized NWC level for the purchase agreement &mdash; any deviation at closing results in a price adjustment</li>
        </ul>

        <h2 className={h2Class}>Cash flow analysis</h2>
        <ul className={ulClass}>
          <li><strong>Free cash flow:</strong> EBITDA minus capex minus working capital changes. This is the cash actually available for debt service and distributions</li>
          <li><strong>Capex requirements:</strong> Maintenance capex (required to sustain operations) vs. growth capex (optional investments)</li>
          <li><strong>Deferred capex:</strong> If the seller has been underinvesting to inflate EBITDA, you&rsquo;ll need to catch up post-close</li>
          <li><strong>Seasonality:</strong> Map monthly cash flow to identify seasonal patterns and working capital peaks/troughs</li>
          <li><strong>Debt service coverage:</strong> Calculate DSCR (free cash flow / annual debt payments). Lenders typically require 1.25x+ coverage</li>
        </ul>

        <h2 className={h2Class}>Balance sheet deep dive</h2>
        <ul className={ulClass}>
          <li><strong>Asset quality:</strong> Verify that reported assets exist and are accurately valued. Physically inspect equipment and inventory</li>
          <li><strong>Accounts receivable quality:</strong> Aging analysis, write-off history, collectability assessment</li>
          <li><strong>Inventory valuation:</strong> FIFO vs. LIFO, obsolescence reserves, physical count vs. book value</li>
          <li><strong>Fixed assets:</strong> Condition, remaining useful life, replacement cost vs. book value</li>
          <li><strong>Off-balance sheet items:</strong> Operating leases, contingent liabilities, unfunded pension obligations, personal guarantees</li>
          <li><strong>Tax liabilities:</strong> Any outstanding tax obligations, audit risk, or aggressive tax positions</li>
        </ul>

        <h2 className={h2Class}>The Quality of Earnings report</h2>
        <p>
          For deals above $1M, a third-party{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
            Quality of Earnings (QoE) report
          </Link>{" "}
          is essential. A QoE firm will independently validate your
          financial analysis, test every add-back, and produce a
          normalized earnings figure that lenders will rely on. Budget
          $20K&ndash;$80K depending on deal complexity. This is not
          optional for serious acquisitions.
        </p>

        <h2 className={h2Class}>Common financial DD pitfalls</h2>
        <ul className={ulClass}>
          <li><strong>Trusting the CIM:</strong> The CIM is a marketing document, not audited financials. Verify everything</li>
          <li><strong>Ignoring monthly trends:</strong> Annual financials can hide monthly volatility and seasonal patterns</li>
          <li><strong>Overlooking working capital:</strong> Many buyers focus on EBITDA but forget that working capital requires additional cash</li>
          <li><strong>Not comparing tax returns to P&amp;L:</strong> This single check catches most financial misrepresentations</li>
          <li><strong>Starting QoE too late:</strong> Engage your QoE provider as soon as the LOI is signed to avoid delays</li>
        </ul>
        <p>
          Financial DD is one component of a comprehensive{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence process
          </Link>.
          For the legal and operational workstreams, see our{" "}
          <Link href="/learn/legal-due-diligence" className="text-apple-accent hover:underline">
            legal DD
          </Link>{" "}
          and{" "}
          <Link href="/learn/operational-due-diligence" className="text-apple-accent hover:underline">
            operational DD
          </Link>{" "}
          guides.
        </p>
      </div>
    </article>
  );
}
