import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function MonthlyBoardPackageArticle() {
  return (
    <article>
      <h1 className={h1Class}>Monthly Board Package: Templates &amp; Best Practices</h1>
      <div className={bodyClass}>
        <p>A well-structured monthly board package is the foundation of effective <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board governance</Link> in a search fund company. It keeps your board informed, demonstrates your operational command, and ensures you get the strategic advice you need. The best board packages are concise, data-driven, and focused on what matters &mdash; not 50-page decks that no one reads.</p>
      </div>

      <h2 className={h2Class}>Core Components</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>1. CEO Letter (1 page)</h3>
        <ul className={ulClass}>
          <li>Written narrative of the month: what went well, what didn&apos;t, and what you&apos;re focused on</li>
          <li>Top 3 priorities for the next month</li>
          <li>Any decisions or input you need from the board</li>
          <li>Tone: honest, direct, and forward-looking. Don&apos;t sugarcoat problems.</li>
        </ul>

        <h3 className={h3Class}>2. Financial Summary (2&ndash;3 pages)</h3>
        <ul className={ulClass}>
          <li>P&amp;L: actual vs. budget vs. prior year (month and YTD)</li>
          <li>Balance sheet highlights: cash position, AR/AP aging, working capital</li>
          <li>Cash flow: actual cash flow and 13-week rolling forecast</li>
          <li>Debt: outstanding balances, covenant compliance, and upcoming maturities</li>
          <li>Variance commentary: explain any line item that deviates 10%+ from budget</li>
        </ul>

        <h3 className={h3Class}>3. KPI Dashboard (1 page)</h3>
        <ul className={ulClass}>
          <li>5&ndash;10 operational KPIs specific to your business (e.g., customer count, churn rate, pipeline value, employee count, NPS)</li>
          <li>Trend lines showing 6&ndash;12 months of history</li>
          <li>Color-coded: green/yellow/red for at-a-glance assessment</li>
          <li>Link to your <Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI dashboard</Link> for details</li>
        </ul>

        <h3 className={h3Class}>4. Strategic Initiatives Update (1 page)</h3>
        <ul className={ulClass}>
          <li>Status of each major initiative: on track, at risk, or delayed</li>
          <li>Key milestones achieved and upcoming</li>
          <li>Resource needs or obstacles requiring board input</li>
        </ul>

        <h3 className={h3Class}>5. People Update (optional, quarterly)</h3>
        <ul className={ulClass}>
          <li>Organizational changes: hires, departures, promotions</li>
          <li>Key open positions and recruiting pipeline</li>
          <li>Employee satisfaction or engagement data</li>
        </ul>
      </div>

      <h2 className={h2Class}>Best Practices</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Send 3&ndash;5 days before the board meeting:</strong> Give directors time to read and prepare questions</li>
          <li><strong>Keep it under 10 pages:</strong> Concision forces clarity. Board members won&apos;t read 50 pages.</li>
          <li><strong>Be transparent about problems:</strong> Boards lose trust when they&apos;re surprised. Share bad news early.</li>
          <li><strong>Consistent format:</strong> Use the same template every month so directors can quickly find information</li>
          <li><strong>Ask for input:</strong> Include 2&ndash;3 specific questions where you want board guidance</li>
          <li><strong>Separate from the meeting deck:</strong> The board package is pre-reading; the meeting focuses on discussion, not presentation</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>A great board package has 5 components: CEO letter, financial summary, KPI dashboard, strategic initiatives, and people update</li>
          <li>Keep it under 10 pages and send 3&ndash;5 days before the meeting</li>
          <li>Be transparent about problems &mdash; boards lose trust when surprised</li>
          <li>Include 2&ndash;3 specific questions where you need board input to make the meeting productive</li>
          <li>Consistency is key: use the same format every month so directors can quickly orient</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/board-governance" className="text-apple-accent hover:underline">Board Governance for Search Fund Companies</Link></li>
        <li><Link href="/learn/investor-update-templates" className="text-apple-accent hover:underline">Investor Update Templates</Link></li>
        <li><Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI Dashboard Post-Acquisition</Link></li>
        <li><Link href="/learn/ceo-performance-review" className="text-apple-accent hover:underline">CEO Performance Reviews</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Board Reporting Best Practices for Search Fund Companies</em> (2024)</li>
        <li>NACD, <em>Board Information Packages: A Director&apos;s Guide</em> (2024)</li>
        <li>Harvard Business Review, <em>What the Best Boards Get from CEO Reports</em> (2024)</li>
      </ul>
    </article>
  );
}
