import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function QuickWinsPostAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Quick Wins in the First 90 Days Post-Acquisition
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          Quick wins serve two purposes: they generate measurable
          business improvement, and they build your credibility as the
          new CEO. The best quick wins are visible, low-risk, and
          demonstrate that positive change is coming. This guide
          identifies the most common quick wins across every functional
          area of an acquired SME.
        </p>
        <p>
          The Stanford GSB <em>2024 Search Fund Study</em> found that
          operators who executed 3&ndash;5 identifiable quick wins within
          the first 90 days generated significantly higher employee
          confidence scores and stronger first-year EBITDA performance
          than those who focused solely on long-term strategic
          initiatives. Harvard Business School&apos;s Michael Watkins
          emphasizes in <em>The First 90 Days</em> that early wins
          are not optional &mdash; they are the foundation of a
          successful leadership transition.
        </p>

        <h2 className={h2Class}>Why quick wins matter</h2>
        <ul className={ulClass}>
          <li><strong>Build team confidence:</strong> Employees need to see that the new ownership brings improvement, not just disruption</li>
          <li><strong>Demonstrate competence:</strong> Your{" "}
            <Link href="/learn/board-governance" className="text-apple-accent hover:underline">
              board
            </Link>{" "}
            and investors want to see early wins that validate the acquisition thesis</li>
          <li><strong>Generate cash flow:</strong> Some quick wins directly improve profitability, giving you more room for debt service and growth investment</li>
          <li><strong>Build momentum:</strong> Success breeds success. Early wins create a culture of improvement</li>
        </ul>

        <h2 className={h2Class}>Financial quick wins</h2>

        <h3 className={h3Class}>Pricing (highest impact)</h3>
        <ul className={ulClass}>
          <li><strong>Raise prices 3&ndash;8%:</strong> Most SME owners haven&rsquo;t raised prices in 2&ndash;5 years. A modest increase (below the &ldquo;switching threshold&rdquo;) drops directly to EBITDA</li>
          <li><strong>Eliminate discounts:</strong> Review all standing discounts. Are they contractual or habitual? Habitual discounts can often be reduced or eliminated</li>
          <li><strong>Tiered pricing:</strong> Introduce good/better/best pricing if only one option exists. Customers self-select and average revenue per customer increases</li>
          <li><strong>Impact:</strong> A 5% price increase on a $5M revenue business = $250K incremental revenue, ~$200K+ to EBITDA (90%+ drop-through)</li>
        </ul>
        <p>
          For a detailed framework on <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">pricing optimization</Link>,
          including how to communicate price increases to customers and handle objections,
          see our dedicated guide. The key insight from McKinsey&apos;s pricing research
          is that a 1% price increase yields an average 8&ndash;11% improvement in
          operating profit &mdash; making pricing the single highest-leverage
          financial quick win available.
        </p>

        <h3 className={h3Class}>Cost reduction</h3>
        <ul className={ulClass}>
          <li><strong>Insurance audit:</strong> Re-bid all insurance policies. Most SMEs haven&rsquo;t shopped insurance in years. Savings: 10&ndash;25%</li>
          <li><strong>Vendor renegotiation:</strong> Renegotiate top 5 vendor contracts. New ownership is a natural trigger for pricing discussions</li>
          <li><strong>Eliminate owner perks:</strong> The previous owner&rsquo;s personal expenses (vehicles, travel, club memberships) that ran through the P&amp;L. Remove them on day one</li>
          <li><strong>Telecom and software audit:</strong> Cancel unused subscriptions, renegotiate telecom contracts, consolidate duplicate tools</li>
        </ul>

        <h3 className={h3Class}>Cash management</h3>
        <ul className={ulClass}>
          <li><strong>Accelerate collections:</strong> If DSO (Days Sales Outstanding) is above 45 days, implement a structured collections process. Move to automated invoicing if not already in place</li>
          <li><strong>Deposit policy:</strong> For project-based businesses, require 25&ndash;50% deposits upfront</li>
          <li><strong>Credit card payments:</strong> Accept credit card payments (even with 2&ndash;3% processing fees) to accelerate cash collection</li>
        </ul>

        <h2 className={h2Class}>Operational quick wins</h2>
        <ul className={ulClass}>
          <li><strong>Fix the obvious:</strong> Broken equipment, uncomfortable workspace, outdated signage. These small fixes signal investment in the team</li>
          <li><strong>Implement a KPI dashboard:</strong> Most SMEs don&rsquo;t track metrics. A simple weekly dashboard (revenue, backlog, customer count, employee utilization) creates visibility and accountability</li>
          <li><strong>Standardize scheduling:</strong> Implement scheduling software for service businesses. Reduces missed appointments and improves route density</li>
          <li><strong>Document key processes:</strong> Have your best employees document their top 5 processes. This reduces key-person risk and enables training</li>
          <li><strong>Technology upgrades:</strong> Move to cloud-based accounting (if still on desktop QuickBooks), implement a basic CRM, or upgrade the phone system</li>
        </ul>

        <h2 className={h2Class}>Sales and marketing quick wins</h2>
        <ul className={ulClass}>
          <li><strong>Google Business Profile:</strong> Claim and optimize the Google listing. Respond to all reviews. This is the #1 local SEO lever for service businesses</li>
          <li><strong>Website refresh:</strong> Many SME websites are outdated. A simple redesign with clear calls-to-action can increase lead conversion 20&ndash;50%</li>
          <li><strong>Reactivate dormant customers:</strong> Identify customers who haven&rsquo;t purchased in 6&ndash;12 months. A phone call or email campaign can recover 10&ndash;20% of them</li>
          <li><strong>Implement a referral program:</strong> Happy customers refer new ones. A structured referral program (discount or credit for referrals) accelerates word-of-mouth</li>
          <li><strong>Cross-sell existing customers:</strong> If you offer multiple services, identify customers only using one. Cross-sell is the lowest-cost revenue growth channel</li>
        </ul>

        <h2 className={h2Class}>People quick wins</h2>
        <ul className={ulClass}>
          <li><strong>Fix compensation inequities:</strong> If key employees are underpaid relative to market, correct it immediately. This is the highest-ROI retention spend</li>
          <li><strong>Implement regular 1:1 meetings:</strong> Most SME managers have never had regular check-ins with their team. Weekly or bi-weekly 1:1s transform management quality</li>
          <li><strong>Upgrade benefits:</strong> Many SMEs have minimal benefits. Adding dental coverage, a simple 401(k) match, or PTO flexibility costs relatively little and dramatically improves retention and morale</li>
          <li><strong>Recognize and promote:</strong> Identify your top performers and recognize them publicly. If anyone deserves a promotion or title upgrade, do it early</li>
        </ul>

        <h2 className={h2Class}>What NOT to do in the first 90 days</h2>
        <ul className={ulClass}>
          <li><strong>Don&rsquo;t rebrand:</strong> The business name and brand have equity with customers. Rebranding can wait 12&ndash;24 months (if ever)</li>
          <li><strong>Don&rsquo;t reorganize:</strong> Major org restructuring in the first 90 days signals instability. Observe first</li>
          <li><strong>Don&rsquo;t fire people hastily:</strong> Unless someone is toxic or dishonest, give yourself 90 days to evaluate before personnel decisions</li>
          <li><strong>Don&rsquo;t implement an ERP:</strong> Major system changes require stability. Wait 6&ndash;12 months</li>
          <li><strong>Don&rsquo;t ignore the previous owner&rsquo;s transition:</strong> The seller&rsquo;s knowledge transfer is happening in these 90 days. Prioritize it</li>
        </ul>
        <p>
          The <Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">employee retention</Link> risk
          is highest in the first 90 days. Every change you make is amplified
          through the lens of employee anxiety. When in doubt, err on the
          side of stability and communication rather than speed of execution.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>How many quick wins should I target in the first 90 days?</h3>
        <p>
          Focus on 3&ndash;5 high-impact wins rather than attempting to change everything at once.
          Choose one from each category &mdash; financial (e.g., pricing), operational (e.g., KPI
          dashboard), sales/marketing (e.g., Google Business Profile), and people (e.g., compensation
          fix) &mdash; to demonstrate broad competence without creating change fatigue.
        </p>

        <h3 className={h3Class}>What if raising prices causes customer churn?</h3>
        <p>
          In practice, modest price increases of 3&ndash;8% on a business that has not raised
          prices in years produce negligible churn. Most B2B customers expect annual escalations
          and are below their switching cost threshold. Test on a subset of customers first, measure
          the response over 30 days, and then roll out broadly. The revenue uplift from retained
          customers vastly outweighs the rare losses.
        </p>

        <h3 className={h3Class}>Should I communicate all changes at once or roll them out gradually?</h3>
        <p>
          Gradual rollout is almost always better. Announcing multiple simultaneous changes
          overwhelms employees and creates a perception of instability. Introduce one change at a
          time, communicate the &ldquo;why&rdquo; clearly, let it settle for 1&ndash;2 weeks, and
          then introduce the next. This cadence builds momentum while preserving team trust.
        </p>

        <p>
          Quick wins are part of your broader{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            first 100 days plan
          </Link>.
          For the complete operational playbook, see{" "}
          <Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">
            revenue growth
          </Link>{" "}
          and{" "}
          <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">
            digital transformation
          </Link>.
        </p>
      </div>
    </article>
  );
}
