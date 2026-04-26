import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function FinancialReportingUpgradesArticle() {
  return (
    <article>
      <h1 className={h1Class}>Financial Reporting Upgrades: From QuickBooks to Controller-Ready</h1>
      <div className={bodyClass}>
        <p>Most search fund acquisitions come with bare-bones financial reporting: a basic QuickBooks file maintained by a part-time bookkeeper, no monthly close process, no departmental P&amp;L, and financial statements that arrive weeks late. Upgrading financial reporting is one of the first and most important operational improvements you&apos;ll make, it gives you the visibility to make informed decisions and the reporting your board and investors expect.</p>
      </div>

      <h2 className={h2Class}>Typical State of Acquired Company Financials</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>QuickBooks or Xero with a messy chart of accounts</li>
          <li>No monthly close process, financial statements produced quarterly or only at tax time</li>
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
          <li>Set up a <Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI dashboard</Link> with 5-10 key metrics</li>
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
          <li>Most acquired businesses have minimal financial reporting, upgrading is a top priority</li>
          <li>Target a monthly close within 15 business days, accrual basis, with budget variance analysis</li>
          <li>Clean up the foundation first (chart of accounts, bank recs, accrual conversion) before adding analysis</li>
          <li>Hire a controller or fractional CFO to lead the upgrade, this is hard to do alone</li>
          <li>Don&apos;t change the accounting software in the first 6 months, stabilize on what exists first</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI Dashboard Post-Acquisition</Link></li>
        <li><Link href="/learn/erp-implementation-post-acquisition" className="text-apple-accent hover:underline">ERP Implementation Post-Acquisition</Link></li>
        <li><Link href="/learn/hiring-executive-team" className="text-apple-accent hover:underline">Hiring Your First Executive Team</Link></li>
        <li><Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">Working Capital Management</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>How long does it take to implement a proper monthly close process in an acquired SME?</h3>
      <p className={bodyClass}>
        Most search fund companies can establish a basic monthly close process within 60-90 days of acquisition, with full maturity reached in 4-6 months. The AICPA recommends targeting a &ldquo;day 15&rdquo; close initially (financial statements within 15 business days of month-end), then gradually improving to day 10. The biggest bottleneck is typically cleaning up the chart of accounts and converting from cash to accrual basis, which requires reconciling historical entries. Stanford GSB&rsquo;s research on search fund financial infrastructure found that companies with a formal monthly close process within 90 days of acquisition reported 35% better board satisfaction scores and faster identification of operational issues.
      </p>

      <h3 className={h3Class}>Should I hire a full-time controller or use a fractional CFO after acquiring a small business?</h3>
      <p className={bodyClass}>
        For businesses under $10M in revenue, a fractional CFO (typically $3K-$8K per month for 1-2 days per week) is often the most cost-effective starting point. This provides senior financial leadership without the $120K-$180K annual cost of a full-time CFO. As the business scales past $10M in revenue, hire a full-time controller ($80K-$120K) to manage day-to-day accounting while retaining the fractional CFO for strategic guidance. According to SHRM compensation data, search fund companies that hire a controller as their first executive position report it as the highest-ROI hire, typically paying for itself within 6 months through improved cash management and financial visibility.
      </p>

      <h3 className={h3Class}>When should an acquired business upgrade from QuickBooks to a mid-market ERP like NetSuite?</h3>
      <p className={bodyClass}>
        The general rule is to stabilize operations on the existing accounting system for at least 6-12 months before considering an ERP migration. Consider upgrading when revenue exceeds $10M, you have multi-location operations requiring consolidated reporting, or complex inventory management demands exceed QuickBooks&rsquo; capabilities. ERP implementations typically cost $50K-$200K and take 3-6 months for mid-market solutions like NetSuite or Sage Intacct. QuickBooks Online Advanced handles most reporting needs for sub-$10M businesses at a fraction of the cost. The AICPA advises that premature ERP migration is one of the most common and costly technology mistakes new owners make.
      </p>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>AICPA, <em>Financial Reporting Best Practices for Small and Mid-Size Companies</em> (2024)</li>
        <li>QuickBooks, <em>Monthly Close Checklist for Growing Businesses</em> (2024)</li>
        <li>Stanford GSB, <em>Financial Infrastructure in Search Fund Companies</em> (2024)</li>
      </ul>
    </article>
  );
}
