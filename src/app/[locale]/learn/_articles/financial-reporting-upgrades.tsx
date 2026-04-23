import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function FinancialReportingUpgradesArticle() {
  return (
    <article>
      <h1 className={h1Class}>Financial Reporting Upgrades: From QuickBooks to Controller-Ready</h1>
      <div className={bodyClass}>
        <p>Most search fund acquisitions come with bare-bones financial reporting: a basic QuickBooks file maintained by a part-time bookkeeper, no monthly close process, no departmental P&amp;L, and financial statements that arrive weeks late. Upgrading financial reporting is one of the first and most important operational improvements you&apos;ll make &mdash; it gives you the visibility to make informed decisions and the reporting your board and investors expect.</p>
      </div>

      <h2 className={h2Class}>Typical State of Acquired Company Financials</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>QuickBooks or Xero with a messy chart of accounts</li>
          <li>No monthly close process &mdash; financial statements produced quarterly or only at tax time</li>
          <li>Heavily intermingled personal and business expenses</li>
          <li>No budget or variance analysis</li>
          <li>Cash-basis accounting (not accrual)</li>
          <li>No AR aging report or systematic collections process</li>
          <li>Bank reconciliation months behind</li>
        </ul>
      </div>

      <h2 className={h2Class}>The Target: Controller-Ready Reporting</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Monthly close by day 15:</strong> Complete financial statements within 15 business days of month end (target: day 10)</li>
          <li><strong>Accrual basis:</strong> Revenue recognized when earned, expenses when incurred</li>
          <li><strong>Clean chart of accounts:</strong> Organized by department and category with consistent naming conventions</li>
          <li><strong>Three-statement model:</strong> Income statement, balance sheet, and cash flow statement</li>
          <li><strong>Budget vs. actual:</strong> Monthly variance analysis with explanations for significant variances</li>
          <li><strong>KPI dashboard:</strong> Key operational and financial metrics tracked alongside financials</li>
          <li><strong>13-week cash flow forecast:</strong> Rolling weekly cash flow projection</li>
        </ul>
      </div>

      <h2 className={h2Class}>Upgrade Roadmap</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Month 1: Clean Up the Foundation</h3>
        <ol className={olClass}>
          <li>Restructure the chart of accounts to align with your reporting needs</li>
          <li>Separate personal expenses from business expenses</li>
          <li>Complete all outstanding bank reconciliations</li>
          <li>Bring all months current (close every open month)</li>
          <li>Switch from cash to accrual basis if not already done</li>
        </ol>

        <h3 className={h3Class}>Month 2: Build the Monthly Close</h3>
        <ol className={olClass}>
          <li>Create a monthly close checklist with deadlines for each step</li>
          <li>Set up recurring journal entries (depreciation, amortization, prepaid expenses)</li>
          <li>Implement an AR aging report and collection process</li>
          <li>Create a standard monthly reporting package</li>
        </ol>

        <h3 className={h3Class}>Month 3: Add Analysis & Forecasting</h3>
        <ol className={olClass}>
          <li>Build an annual budget bottom-up by department</li>
          <li>Implement monthly budget-vs-actual variance analysis</li>
          <li>Create a 13-week cash flow forecast</li>
          <li>Set up a <Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI dashboard</Link> with 5&ndash;10 key metrics</li>
        </ol>
      </div>

      <h2 className={h2Class}>When to Upgrade from QuickBooks</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Stay on QuickBooks/Xero if:</strong> Revenue under $10M, simple business model, fewer than 50 employees. QuickBooks Online Advanced handles most reporting needs.</li>
          <li><strong>Consider mid-market ERP if:</strong> Revenue over $10M, multi-location, complex inventory, or manufacturing. Options include NetSuite, Sage Intacct, or Acumatica.</li>
          <li><strong>Timing:</strong> Don&apos;t upgrade the accounting system in the first 6 months. Stabilize operations first, then consider an <Link href="/learn/erp-implementation-post-acquisition" className="text-apple-accent hover:underline">ERP implementation</Link>.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Most acquired businesses have minimal financial reporting &mdash; upgrading is a top priority</li>
          <li>Target a monthly close within 15 business days, accrual basis, with budget variance analysis</li>
          <li>Clean up the foundation first (chart of accounts, bank recs, accrual conversion) before adding analysis</li>
          <li>Hire a controller or fractional CFO to lead the upgrade &mdash; this is hard to do alone</li>
          <li>Don&apos;t change the accounting software in the first 6 months &mdash; stabilize on what exists first</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI Dashboard Post-Acquisition</Link></li>
        <li><Link href="/learn/erp-implementation-post-acquisition" className="text-apple-accent hover:underline">ERP Implementation Post-Acquisition</Link></li>
        <li><Link href="/learn/hiring-executive-team" className="text-apple-accent hover:underline">Hiring Your First Executive Team</Link></li>
        <li><Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">Working Capital Management</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>AICPA, <em>Financial Reporting Best Practices for Small and Mid-Size Companies</em> (2024)</li>
        <li>QuickBooks, <em>Monthly Close Checklist for Growing Businesses</em> (2024)</li>
        <li>Stanford GSB, <em>Financial Infrastructure in Search Fund Companies</em> (2024)</li>
      </ul>
    </article>
  );
}
