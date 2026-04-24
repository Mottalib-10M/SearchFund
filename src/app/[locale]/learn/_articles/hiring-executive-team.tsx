import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function HiringExecutiveTeamArticle() {
  return (
    <article>
      <h1 className={h1Class}>Hiring Your First Executive Team Post-Acquisition</h1>
      <div className={bodyClass}>
        <p>Most search fund acquisitions target businesses with revenues of $5&ndash;30M that have never had a formal executive team. The owner managed everything personally, with perhaps a bookkeeper, a sales manager, and operational supervisors. Building a proper management team &mdash; a CFO/controller, a VP of operations, a sales leader &mdash; is one of the most impactful things you can do as a new CEO, but timing and approach matter enormously.</p>
      </div>

      <h2 className={h2Class}>When to Hire (and When Not To)</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Don&apos;t hire in the first 90 days:</strong> Use the <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">first 100 days</Link> to understand the business, assess existing talent, and identify real gaps</li>
          <li><strong>Promote from within first:</strong> Existing employees who know the business may be able to step up with coaching and development</li>
          <li><strong>Hire when the gap is clear:</strong> When you&apos;ve personally done the work long enough to write a real job description and know what good looks like</li>
          <li><strong>Typical timeline:</strong> First executive hire usually happens at months 3&ndash;6; full team build-out over 12&ndash;18 months</li>
        </ul>
      </div>

      <h2 className={h2Class}>Common First Hires</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>1. Controller/CFO</h3>
        <ul className={ulClass}>
          <li>Often the most impactful first hire &mdash; gives you financial visibility and frees your time</li>
          <li>For sub-$10M businesses, a controller is sufficient; CFO at $15M+</li>
          <li>Responsibilities: monthly close, cash flow management, bank relationship, budgeting</li>
          <li>Consider fractional CFO initially to manage cost</li>
        </ul>

        <h3 className={h3Class}>2. Operations Manager/VP Operations</h3>
        <ul className={ulClass}>
          <li>Critical if the departing owner was the primary operations person</li>
          <li>Manages day-to-day delivery while you focus on strategy and growth</li>
          <li>Often the best candidate is already in the business &mdash; look at existing supervisors</li>
        </ul>

        <h3 className={h3Class}>3. Sales/Business Development Leader</h3>
        <ul className={ulClass}>
          <li>Essential for the <Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">revenue growth playbook</Link></li>
          <li>Many acquired businesses have been growing on reputation and referrals with no formal sales function</li>
          <li>A dedicated sales leader can unlock significant growth within 6&ndash;12 months</li>
        </ul>
      </div>

      <h2 className={h2Class}>Where to Find Executive Talent</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Within the company:</strong> Internal promotions build morale and retain institutional knowledge</li>
          <li><strong>Your board and investors:</strong> Search fund investors often have extensive executive networks</li>
          <li><strong>Industry peers:</strong> Networking through trade associations and industry events</li>
          <li><strong>Executive recruiters:</strong> For specialized roles (CFO, VP Sales), a retained recruiter can access passive candidates</li>
          <li><strong>Fractional executives:</strong> Part-time or fractional CFOs, CMOs, and HR leaders provide senior capability at lower cost</li>
          <li><strong>ETA community:</strong> Other search fund CEOs who&apos;ve made similar hires can share candidates and recruiters</li>
        </ul>
      </div>

      <h2 className={h2Class}>Compensation Structures</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Base salary:</strong> Research local market rates using Salary.com, Glassdoor, and recruiter benchmarking</li>
          <li><strong>Performance bonus:</strong> 15&ndash;30% of base, tied to company performance metrics (EBITDA, revenue, customer retention)</li>
          <li><strong>Equity/phantom equity:</strong> <Link href="/learn/employee-equity-incentives" className="text-apple-accent hover:underline">Employee equity plans</Link> are powerful retention tools for key executives</li>
          <li><strong>Total compensation:</strong> Small businesses often can&apos;t match large company salaries, but equity upside, autonomy, and impact can attract strong talent</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Wait at least 90 days before your first executive hire &mdash; understand the business first</li>
          <li>A controller/CFO is typically the highest-impact first hire, providing financial visibility</li>
          <li>Promote from within when possible &mdash; it builds morale and retains institutional knowledge</li>
          <li>Consider fractional executives to get senior capability at a fraction of the cost</li>
          <li>Use equity/phantom equity to attract strong talent when you can&apos;t match large company base salaries</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/first-100-days" className="text-apple-accent hover:underline">First 100 Days Post-Acquisition</Link></li>
        <li><Link href="/learn/employee-equity-incentives" className="text-apple-accent hover:underline">Employee Equity & Incentive Plans</Link></li>
        <li><Link href="/learn/talent-acquisition-post-close" className="text-apple-accent hover:underline">Talent Acquisition Post-Close</Link></li>
        <li><Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">Employee Retention After Acquisition</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>What is the typical cost of hiring a controller or CFO for a search fund company?</h3>
      <p className={bodyClass}>
        For businesses with $5&ndash;15M in revenue, a full-time controller typically costs $80K&ndash;$120K in base salary plus benefits, while a CFO costs $120K&ndash;$180K. Fractional CFOs offer an alternative at $3K&ndash;$8K per month for 1&ndash;2 days per week. According to SHRM&rsquo;s 2024 compensation benchmarking data, total cost (salary, benefits, bonus) for a controller at a small business averages 1.2&ndash;1.5x the base salary. Stanford GSB&rsquo;s search fund research found that the controller hire typically pays for itself within 6 months through improved cash management, better financial visibility, and reduced accounting fees. Start with a fractional CFO if cash is tight, then hire full-time as the business grows.
      </p>

      <h3 className={h3Class}>How do you attract strong executive talent to a small business that can&rsquo;t match corporate salaries?</h3>
      <p className={bodyClass}>
        Small businesses compete for talent on dimensions beyond base salary: equity participation (phantom equity or profit-sharing plans that vest over 3&ndash;5 years), autonomy and impact (the opportunity to build a function from scratch rather than manage an existing bureaucracy), and career development (becoming a true business partner rather than a cog in a large organization). Harvard Business Review&rsquo;s research on executive hiring in acquired companies found that equity participation is the #1 differentiator for executives choosing small companies over large ones. A typical package might include a base salary at the 50th percentile of market, a 20&ndash;30% performance bonus, and 1&ndash;3% phantom equity vesting over 3&ndash;4 years.
      </p>

      <h3 className={h3Class}>Should you promote from within or hire externally for your first executive positions?</h3>
      <p className={bodyClass}>
        Promote from within whenever possible, particularly for operations roles where institutional knowledge is critical. Stanford GSB&rsquo;s Search Fund CEO People Playbook found that internal promotions have a 75% success rate in search fund companies compared to 55% for external hires, largely because internal candidates understand the business, have existing relationships, and face lower cultural adjustment. However, external hiring is often necessary for specialized functions like finance (where the business may lack anyone with controller-level skills) or sales leadership (where a professional sales function may not exist). A common pattern is promoting internally for operations and hiring externally for finance, with the first external hire typically being a controller.
      </p>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund CEO People Playbook</em> (2024)</li>
        <li>Harvard Business Review, <em>Building the Executive Team in a Newly Acquired Company</em> (2024)</li>
        <li>SHRM, <em>Executive Compensation Benchmarking for SMEs</em> (2024)</li>
      </ul>
    </article>
  );
}
