import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SearchFundGovernanceInvestorArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund Governance: An Investor&apos;s Perspective</h1>
      <div className={bodyClass}>
        <p>Governance in search fund-backed companies differs significantly from both traditional startups and PE-backed businesses. Search fund investors typically form a board of 3&ndash;5 members who provide strategic guidance, operational mentorship, and accountability for a first-time CEO. Effective governance is one of the strongest predictors of search fund success, yet many investors struggle to find the right balance between support and interference.</p>
      </div>

      <h2 className={h2Class}>Board Structure</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Board composition:</strong> Typically 3&ndash;5 members: 1&ndash;2 investor representatives, the searcher-CEO, and 1&ndash;2 independent directors with industry expertise.</li>
          <li><strong>Lead investor role:</strong> One investor typically takes the lead board seat, providing primary mentorship and governance oversight.</li>
          <li><strong>Meeting frequency:</strong> Monthly board meetings during the first year, transitioning to quarterly as the CEO gains experience.</li>
          <li><strong>Board compensation:</strong> Independent directors receive modest compensation ($5&ndash;15K/year) or equity. Investor directors typically serve without compensation.</li>
          <li><strong>Observer seats:</strong> Additional investors may receive board observer rights without voting power.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Investor Responsibilities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Strategic guidance:</strong> Help the CEO develop and refine the strategic plan, set priorities, and allocate resources.</li>
          <li><strong>Financial oversight:</strong> Review monthly financials, monitor KPIs, and ensure adequate working capital and covenant compliance.</li>
          <li><strong>CEO development:</strong> Mentor a first-time CEO through leadership challenges, management decisions, and personal development.</li>
          <li><strong>Network access:</strong> Introduce the CEO to potential customers, advisors, acquisition targets, and talent.</li>
          <li><strong>Crisis management:</strong> Provide experienced counsel during operational crises, customer losses, or market disruptions.</li>
          <li><strong>Exit planning:</strong> Guide exit timing, preparation, and process to optimize returns for all stakeholders.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Common Governance Mistakes</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Micro-management:</strong> Investor boards that make operational decisions instead of providing strategic oversight. The CEO must run the business.</li>
          <li><strong>Under-involvement:</strong> Passive boards that only attend quarterly meetings and miss early warning signs of operational issues.</li>
          <li><strong>Too many cooks:</strong> Boards with 5+ investor voices providing conflicting advice. Streamline to 1&ndash;2 active investor mentors.</li>
          <li><strong>Delayed action:</strong> Waiting too long to address CEO performance issues, customer concentration, or market deterioration.</li>
          <li><strong>Misaligned incentives:</strong> Investor pressure for premature exit when the CEO believes continued growth is warranted (or vice versa).</li>
        </ul>
      </div>

      <h2 className={h2Class}>Best Practices</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li>Establish a clear board charter defining roles, responsibilities, meeting cadence, and information requirements</li>
          <li>Designate one lead investor for primary CEO mentorship to avoid conflicting advice from multiple board members</li>
          <li>Require monthly financial reporting with agreed-upon KPIs from day one post-acquisition</li>
          <li>Conduct annual CEO performance reviews with specific, actionable feedback and development goals</li>
          <li>Create a governance calendar with key decision points: annual budget, strategic plan, compensation review, exit readiness</li>
          <li>Build independent board expertise in the company&apos;s industry for domain-specific guidance</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Effective governance is one of the strongest predictors of search fund success &mdash; boards should be active but not micro-managing</li>
          <li>Board composition of 3&ndash;5 members with 1&ndash;2 investor reps, the CEO, and 1&ndash;2 independent directors is the optimal structure</li>
          <li>Designate one lead investor as primary mentor to avoid conflicting advice from multiple board voices</li>
          <li>Monthly meetings in year one, transitioning to quarterly, with consistent financial reporting and KPI tracking</li>
          <li>The board&apos;s primary role is CEO development &mdash; this is often the first CEO role for the searcher-operator</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/board-governance" className="text-apple-accent hover:underline">Board Governance</Link></li>
        <li><Link href="/learn/evaluate-searcher" className="text-apple-accent hover:underline">How to Evaluate a Searcher</Link></li>
        <li><Link href="/learn/risk-factors-search-fund" className="text-apple-accent hover:underline">Risk Factors in Search Fund Investing</Link></li>
        <li><Link href="/learn/investor-relations" className="text-apple-accent hover:underline">Investor Relations</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study: Governance and Board Best Practices</em> (2024)</li>
        <li>IESE Business School, <em>Search Fund Governance Framework</em> (2024)</li>
        <li>National Association of Corporate Directors, <em>Private Company Governance Guide</em> (2024)</li>
      </ul>
    </article>
  );
}
