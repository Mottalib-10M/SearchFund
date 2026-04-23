import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function QuickWinsFirst90DaysArticle() {
  return (
    <article>
      <h1 className={h1Class}>Quick Wins in the First 90 Days Post-Acquisition</h1>
      <div className={bodyClass}>
        <p>The first 90 days after acquiring a business present a unique window of opportunity. Employees, customers, and stakeholders are watching to see what kind of leader you&apos;ll be. Quick wins &mdash; visible improvements that deliver results fast &mdash; build credibility, energize the team, and create momentum for larger changes ahead. The key is choosing the right quick wins: high impact, low risk, and clearly beneficial to everyone.</p>
      </div>

      <h2 className={h2Class}>What Makes a Good Quick Win?</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Visible:</strong> Everyone can see the change and its impact</li>
          <li><strong>Fast:</strong> Can be implemented within days or weeks, not months</li>
          <li><strong>Low risk:</strong> Minimal disruption and low probability of failure</li>
          <li><strong>Team-positive:</strong> Makes employees&apos; lives better, not harder</li>
          <li><strong>Revenue or cost impacting:</strong> Delivers measurable financial benefit</li>
        </ul>
      </div>

      <h2 className={h2Class}>Financial Quick Wins</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Price increases:</strong> Many owner-operated businesses haven&apos;t raised prices in years. A 3&ndash;5% increase across the board often encounters minimal customer pushback and drops straight to the bottom line.</li>
          <li><strong>Renegotiate vendor contracts:</strong> Insurance, telecom, supplies, and services often have room for 10&ndash;20% savings. Get competitive quotes immediately.</li>
          <li><strong>Collect overdue receivables:</strong> Many acquired businesses have lax collection practices. A focused 30-day collection effort can release significant working capital.</li>
          <li><strong>Eliminate owner add-backs:</strong> Personal expenses, excessive salaries for family members, unused subscriptions &mdash; clean up discretionary spend.</li>
          <li><strong>Cash flow forecasting:</strong> Implement a simple 13-week cash flow forecast. The clarity alone is transformative.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Operational Quick Wins</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Fix the #1 employee complaint:</strong> Ask every employee what frustrates them most. Fix the top issue &mdash; whether it&apos;s a broken piece of equipment, a confusing process, or an outdated policy.</li>
          <li><strong>Upgrade basic technology:</strong> Replace failing computers, add a second monitor for desk workers, upgrade the WiFi, or fix the phone system. Small investments, massive impact on daily productivity.</li>
          <li><strong>Implement weekly team meetings:</strong> If there are no regular meetings, start a short weekly standup. If meetings are endless, make them 30 minutes with a fixed agenda.</li>
          <li><strong>Clean up the workspace:</strong> A fresh coat of paint, better lighting, or a thorough clean of neglected areas signals that you care about the environment.</li>
          <li><strong>Document the top 5 processes:</strong> Start building <Link href="/learn/sop-documentation" className="text-apple-accent hover:underline">standard operating procedures</Link> for the most critical workflows.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Customer-Facing Quick Wins</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Call your top 20 customers:</strong> Introduce yourself, ask what they value, and ask how you can improve. This alone generates loyalty and often surfaces revenue opportunities.</li>
          <li><strong>Improve response times:</strong> If the business is slow to return calls or emails, implement a same-day response policy.</li>
          <li><strong>Upgrade the website:</strong> Many acquired businesses have outdated websites. A refresh improves customer perception and can generate leads immediately.</li>
          <li><strong>Set up Google Business Profile:</strong> If the business doesn&apos;t have one (or it&apos;s outdated), fix it. Free visibility and credibility.</li>
          <li><strong>Implement customer feedback:</strong> Start collecting NPS scores or simple satisfaction surveys to establish a baseline.</li>
        </ul>
      </div>

      <h2 className={h2Class}>People Quick Wins</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recognize good performers:</strong> Publicly acknowledge employees who are doing great work. Many never received recognition from the previous owner.</li>
          <li><strong>Fix compensation inequities:</strong> If benchmarking reveals employees are significantly underpaid, adjust immediately. Don&apos;t wait for the annual review cycle.</li>
          <li><strong>Improve benefits:</strong> Small benefits additions (dental, vision, additional PTO) can have outsized retention impact relative to cost.</li>
          <li><strong>Training opportunities:</strong> Send someone to a certification course or industry conference. It shows investment in their growth.</li>
        </ul>
      </div>

      <h2 className={h2Class}>90-Day Quick Win Timeline</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Days 1&ndash;14:</strong> Listen, observe, and identify opportunities. Call top customers. Fix the #1 employee complaint.</li>
          <li><strong>Days 15&ndash;30:</strong> Implement price increases. Start vendor renegotiations. Launch AR collection effort. Set up cash flow forecast.</li>
          <li><strong>Days 31&ndash;60:</strong> Technology upgrades. Website refresh. Implement weekly meetings and basic KPI tracking.</li>
          <li><strong>Days 61&ndash;90:</strong> Address compensation gaps. Begin SOP documentation. Share results of quick wins with the team.</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Quick wins build credibility and momentum &mdash; start with high-impact, low-risk improvements</li>
          <li>Price increases are often the single highest-ROI quick win in acquired businesses</li>
          <li>Fixing the #1 employee complaint signals that you listen and care about the team</li>
          <li>Customer calls in the first week generate loyalty and surface revenue opportunities</li>
          <li>Share your quick wins openly &mdash; visible progress energizes everyone for larger changes ahead</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/first-100-days" className="text-apple-accent hover:underline">First 100 Days Post-Acquisition</Link></li>
        <li><Link href="/learn/day-one-announcement" className="text-apple-accent hover:underline">Day 1 Announcement: Scripts & Templates</Link></li>
        <li><Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI Dashboard Post-Acquisition</Link></li>
        <li><Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">Pricing Optimization</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Harvard Business Review, <em>The First 90 Days: Proven Strategies for Getting Up to Speed</em> (2024)</li>
        <li>Stanford GSB, <em>Quick Win Strategies for Search Fund CEOs</em> (2024)</li>
        <li>McKinsey, <em>Creating Value in the First 100 Days Post-Acquisition</em> (2024)</li>
      </ul>
    </article>
  );
}
