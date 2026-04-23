import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function MiddleManagementArticle() {
  return (
    <article>
      <h1 className={h1Class}>Middle Management: Your Secret Weapon Post-Acquisition</h1>
      <div className={bodyClass}>
        <p>In most search fund acquisitions, the business has been run by an owner who managed everything from strategic decisions to daily operations. When you take over, there&apos;s often a missing layer between you (the CEO) and frontline employees: middle management. Developing existing supervisors, team leads, and department heads into effective middle managers is one of the highest-leverage investments you can make as a new CEO.</p>
      </div>

      <h2 className={h2Class}>Why Middle Management Matters</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Execution capacity:</strong> You can&apos;t implement your strategy alone. Middle managers translate vision into daily operations.</li>
          <li><strong>Information flow:</strong> They&apos;re your eyes and ears on the ground, providing real-time intelligence about operations, morale, and customer issues.</li>
          <li><strong>Employee retention:</strong> People don&apos;t leave companies, they leave managers. Strong middle managers retain talent.</li>
          <li><strong>Scalability:</strong> Without a management layer, every decision bottlenecks through you, limiting the company&apos;s growth.</li>
          <li><strong>Institutional knowledge:</strong> They hold decades of operational knowledge that would take years to rebuild.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Identifying Hidden Talent</h2>
      <div className={bodyClass}>
        <p>In owner-operated businesses, potential managers often exist but have never been given the opportunity to lead:</p>
        <ul className={ulClass}>
          <li><strong>The go-to person:</strong> Who do other employees turn to with questions? That&apos;s often your future manager.</li>
          <li><strong>The problem solver:</strong> Who takes initiative to fix issues without being asked?</li>
          <li><strong>The trusted veteran:</strong> Long-tenured employees who are respected by peers often have natural authority.</li>
          <li><strong>The organizer:</strong> Who informally coordinates work, manages schedules, or trains new hires?</li>
        </ul>
        <p>Caution: The best individual contributor is not always the best manager. Technical excellence and management ability are different skills.</p>
      </div>

      <h2 className={h2Class}>Developing Middle Managers</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Training Priorities</h3>
        <ol className={olClass}>
          <li><strong>Delegation:</strong> How to assign work, set expectations, and follow up without micromanaging</li>
          <li><strong>Difficult conversations:</strong> How to give constructive feedback, address underperformance, and resolve conflicts</li>
          <li><strong>Meeting management:</strong> How to run effective team meetings and one-on-ones</li>
          <li><strong>Decision-making authority:</strong> What decisions they can make independently vs. what needs escalation</li>
          <li><strong>KPI ownership:</strong> How to track, analyze, and act on their team&apos;s key metrics</li>
        </ol>

        <h3 className={h3Class}>Support Structures</h3>
        <ul className={ulClass}>
          <li>Weekly one-on-ones between you and each middle manager</li>
          <li>Peer learning: Monthly manager round-table discussions</li>
          <li>External training: Management courses, industry conferences, leadership workshops</li>
          <li>Mentorship: Connect them with your <Link href="/learn/advisory-board" className="text-apple-accent hover:underline">advisory board</Link> members or experienced executives</li>
        </ul>
      </div>

      <h2 className={h2Class}>Common Pitfalls</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Promoting without training:</strong> Giving someone a title without the skills to succeed sets them up for failure</li>
          <li><strong>Bypassing managers:</strong> If you go directly to their team members, you undermine their authority</li>
          <li><strong>Unclear authority:</strong> Without defined decision rights, managers either overstep or under-step</li>
          <li><strong>No feedback loop:</strong> New managers need regular coaching and constructive feedback</li>
          <li><strong>Expecting immediate results:</strong> Management skills develop over 6&ndash;12 months, not overnight</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Middle management is the missing layer in most owner-operated businesses &mdash; building it is a top priority</li>
          <li>Look for natural leaders already in the organization: the go-to people, problem solvers, and organizers</li>
          <li>Invest in training: delegation, difficult conversations, meeting management, and KPI ownership</li>
          <li>Never bypass your middle managers &mdash; it undermines their authority with the team</li>
          <li>Allow 6&ndash;12 months for new managers to develop; provide consistent support throughout</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/hiring-executive-team" className="text-apple-accent hover:underline">Hiring Your First Executive Team</Link></li>
        <li><Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">Employee Retention After Acquisition</Link></li>
        <li><Link href="/learn/building-trust-inherited-teams" className="text-apple-accent hover:underline">Building Trust with Inherited Teams</Link></li>
        <li><Link href="/learn/compensation-incentive-design" className="text-apple-accent hover:underline">Compensation & Incentive Design</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Harvard Business Review, <em>The Critical Role of Middle Management in M&amp;A Integration</em> (2024)</li>
        <li>Gallup, <em>State of the American Manager</em> (2024)</li>
        <li>Stanford GSB, <em>Building the Management Layer in Search Fund Companies</em> (2024)</li>
      </ul>
    </article>
  );
}
