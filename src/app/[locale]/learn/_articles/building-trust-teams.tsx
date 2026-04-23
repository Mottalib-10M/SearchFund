import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function BuildingTrustTeamsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Building Trust with Teams After Acquisition</h1>
      <div className={bodyClass}>
        <p>When a new owner walks through the door after an acquisition, every employee is asking the same question: &ldquo;What does this mean for me?&rdquo; Building trust with an inherited team is the single most important task in the first 100 days of ownership. Trust determines whether key employees stay, whether institutional knowledge transfers, whether customers remain loyal, and ultimately whether the acquisition succeeds. Trust cannot be demanded &mdash; it must be earned through consistent actions over time.</p>
      </div>

      <h2 className={h2Class}>The Trust Deficit</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Uncertainty creates fear:</strong> Employees fear job loss, culture change, benefit cuts, and disruption to their routines.</li>
          <li><strong>Previous owner loyalty:</strong> Long-tenured employees may feel loyalty to the departing owner and view the new owner as an interloper.</li>
          <li><strong>Age/experience gap:</strong> Search fund entrepreneurs are often younger than the team they inherit. Employees question, &ldquo;What can this person teach me?&rdquo;</li>
          <li><strong>MBA skepticism:</strong> Blue-collar and technical teams may distrust MBA-educated owners who &ldquo;haven&apos;t done the work.&rdquo;</li>
          <li><strong>Change fatigue:</strong> If the business has been through previous ownership changes, employees may be cynical about new promises.</li>
        </ul>
      </div>

      <h2 className={h2Class}>First 30 Days: Listen and Learn</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li>Meet every employee individually. Ask about their role, how long they&apos;ve been here, what works well, and what they&apos;d improve.</li>
          <li>Spend time on the front lines. Work alongside operations, customer service, and production teams to understand the business from the inside.</li>
          <li>Make no major changes. Changing things before understanding them signals arrogance and disrespect for what employees have built.</li>
          <li>Identify informal leaders. Every organization has people whose opinions carry weight beyond their title. Win them first.</li>
          <li>Communicate your vision, but frame it as building on what exists, not replacing it.</li>
          <li>Follow through on small commitments. Fix the broken coffee machine. Approve the supply order that&apos;s been pending. Small wins build credibility.</li>
        </ol>
      </div>

      <h2 className={h2Class}>Days 30&ndash;90: Quick Wins</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Solve a pain point:</strong> Fix something employees have been complaining about for years. Broken equipment, outdated software, uncomfortable workspace.</li>
          <li><strong>Improve compensation:</strong> If margins allow, a modest raise or bonus signals that the new ownership values the team. Nothing builds trust faster than money.</li>
          <li><strong>Invest in training:</strong> Send employees to conferences, provide certifications, or bring in training. Investment in development shows long-term commitment.</li>
          <li><strong>Promote from within:</strong> If possible, promote a respected team member early. This signals that career growth is possible under new ownership.</li>
          <li><strong>Transparent communication:</strong> Share financial performance (appropriate level), strategic priorities, and decision-making rationale. Transparency builds trust.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Long-Term Trust Building</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Consistency:</strong> Do what you say you will do. Every time. Inconsistency destroys trust faster than any single negative action.</li>
          <li><strong>Vulnerability:</strong> Admit when you don&apos;t know something. Ask for help. Employees respect leaders who are honest about their limitations.</li>
          <li><strong>Fairness:</strong> Apply rules consistently. Favoritism and inconsistent treatment poison team dynamics.</li>
          <li><strong>Recognition:</strong> Publicly recognize good work. Many small businesses are recognition-starved. Simple acknowledgment is powerful.</li>
          <li><strong>Protect the team:</strong> When problems arise with customers or vendors, stand in front of your team. Show that you will protect them.</li>
          <li><strong>Stay accessible:</strong> Open-door policy. Eat lunch with the team. Attend company events. Physical presence matters.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Building trust is the #1 priority in the first 100 days &mdash; it determines employee retention, knowledge transfer, and acquisition success</li>
          <li>Spend the first 30 days listening, learning, and meeting every employee individually before making any changes</li>
          <li>Quick wins (fixing pain points, modest compensation improvements, investing in training) build credibility early</li>
          <li>Consistency, vulnerability, and transparency are the three pillars of long-term trust with inherited teams</li>
          <li>Trust takes months to build and seconds to destroy &mdash; every interaction matters, especially in the early days</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/first-100-days" className="text-apple-accent hover:underline">First 100 Days</Link></li>
        <li><Link href="/learn/management-transition" className="text-apple-accent hover:underline">Management Transition</Link></li>
        <li><Link href="/learn/culture-integration-after-acquisition" className="text-apple-accent hover:underline">Culture Integration</Link></li>
        <li><Link href="/learn/talent-acquisition-retention" className="text-apple-accent hover:underline">Talent Retention</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Patrick Lencioni, <em>The Five Dysfunctions of a Team</em> (2002)</li>
        <li>Harvard Business Review, <em>The First 90 Days in Leadership Transitions</em> (2024)</li>
        <li>Stanford GSB, <em>Search Fund Operator Best Practices</em> (2024)</li>
      </ul>
    </article>
  );
}
