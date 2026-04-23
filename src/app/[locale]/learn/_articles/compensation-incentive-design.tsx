import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function CompensationIncentiveDesignArticle() {
  return (
    <article>
      <h1 className={h1Class}>Compensation & Incentive Design for Acquired Companies</h1>
      <div className={bodyClass}>
        <p>Redesigning compensation and incentive structures is one of the most powerful levers for driving performance and retention in an acquired business. Many search fund targets have outdated or informal comp structures &mdash; the owner set salaries by feel, bonuses were discretionary, and there was no equity participation. Building a modern, performance-oriented compensation framework can transform employee engagement and business results.</p>
      </div>

      <h2 className={h2Class}>Assessing the Current State</h2>
      <div className={bodyClass}>
        <p>Before making changes, understand what exists:</p>
        <ul className={ulClass}>
          <li>Document all current salaries, bonuses, commissions, and benefits</li>
          <li>Benchmark against market data (Salary.com, Bureau of Labor Statistics, industry surveys)</li>
          <li>Identify overpaid and underpaid positions relative to market</li>
          <li>Understand informal comp elements (owner perks, personal expenses through the business)</li>
          <li>Map each role&apos;s compensation to its value contribution</li>
        </ul>
      </div>

      <h2 className={h2Class}>Base Salary Framework</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Market benchmarking:</strong> Set base salaries at 50th percentile for your market and industry</li>
          <li><strong>Pay bands:</strong> Create ranges (min/mid/max) for each role to allow for growth and performance differentiation</li>
          <li><strong>Annual reviews:</strong> Implement structured annual reviews tied to performance and market adjustments</li>
          <li><strong>Compression fixes:</strong> Address situations where new hires earn as much as tenured employees (common in acquired businesses)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Performance Bonuses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Company-wide metrics:</strong> EBITDA, revenue, or profit targets that align individual incentives with company performance</li>
          <li><strong>Individual KPIs:</strong> Role-specific metrics (customer retention, production efficiency, sales targets)</li>
          <li><strong>Bonus pool:</strong> Allocate a percentage of profits (typically 5&ndash;15% of EBITDA) to a bonus pool</li>
          <li><strong>Payout structure:</strong> Threshold/target/stretch framework (e.g., 50% payout at threshold, 100% at target, 150% at stretch)</li>
          <li><strong>Frequency:</strong> Annual bonuses for most; quarterly for sales and operations roles where faster feedback drives results</li>
        </ul>
      </div>

      <h2 className={h2Class}>Sales Compensation</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Commission structure:</strong> Base + commission with 50/50 to 70/30 split depending on role complexity</li>
          <li><strong>Quota setting:</strong> Set realistic quotas based on historical performance plus growth expectations</li>
          <li><strong>Accelerators:</strong> Higher commission rates above quota to reward over-performance</li>
          <li><strong>New vs. existing business:</strong> Different rates for hunting (new customers) vs. farming (existing customers)</li>
          <li><strong>Clawback:</strong> Provisions for commission recovery on churned customers or canceled contracts</li>
        </ul>
      </div>

      <h2 className={h2Class}>Equity & Long-Term Incentives</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong><Link href="/learn/employee-equity-incentives" className="text-apple-accent hover:underline">Phantom equity/SARs:</Link></strong> Cash-settled equity-like instruments that don&apos;t require actual share issuance. Ideal for SMEs.</li>
          <li><strong>Profit-sharing:</strong> Annual distribution of a portion of profits to all eligible employees</li>
          <li><strong>Deferred compensation:</strong> Retention-focused payouts that vest over time</li>
          <li><strong>EMI options (UK):</strong> Tax-efficient share options for key employees</li>
          <li><strong>BSPCE (France):</strong> Tax-advantaged stock options for qualifying companies</li>
        </ul>
      </div>

      <h2 className={h2Class}>Implementation Approach</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Months 1&ndash;3:</strong> Audit current compensation, benchmark, and identify gaps</li>
          <li><strong>Months 3&ndash;6:</strong> Design new framework, get board approval, model cost impact</li>
          <li><strong>Month 6:</strong> Roll out to employees with clear communication about how the new system works</li>
          <li><strong>Year 1 end:</strong> First bonus cycle under the new system</li>
          <li><strong>Year 2:</strong> Refine based on results, adjust metrics and targets</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Benchmark all positions against market data before making any compensation changes</li>
          <li>Tie bonuses to measurable metrics &mdash; both company-wide (EBITDA/revenue) and individual KPIs</li>
          <li>Phantom equity or profit-sharing plans are powerful retention tools for key employees without diluting ownership</li>
          <li>Don&apos;t rush &mdash; audit for 3 months, design for 3 months, implement at month 6</li>
          <li>Communicate clearly: employees need to understand how they can earn more under the new system</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/employee-equity-incentives" className="text-apple-accent hover:underline">Employee Equity & Incentive Plans</Link></li>
        <li><Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">Employee Retention After Acquisition</Link></li>
        <li><Link href="/learn/hiring-executive-team" className="text-apple-accent hover:underline">Hiring Your First Executive Team</Link></li>
        <li><Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI Dashboard Post-Acquisition</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>WorldatWork, <em>Total Rewards Framework for SMEs</em> (2024)</li>
        <li>SHRM, <em>Compensation Design Guide</em> (2024)</li>
        <li>Mercer, <em>Compensation Benchmarking Data for Small and Mid-Size Companies</em> (2024)</li>
        <li>Stanford GSB, <em>Incentive Design in Search Fund Companies</em> (2024)</li>
      </ul>
    </article>
  );
}
