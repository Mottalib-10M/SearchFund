import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SellSideEarnoutArticle() {
  return (
    <article>
      <h1 className={h1Class}>Earnout Structures on the Sell Side: When You&apos;re the Seller</h1>
      <div className={bodyClass}>
        <p>When you exit your search fund acquisition, the buyer may propose an earnout &mdash; a portion of the purchase price contingent on the business meeting certain targets after closing. Having been on the <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">buy side with earnouts</Link>, you now need to protect your interests as the seller. The dynamics flip completely: as a seller, you want earnout metrics you can control, short timelines, and clear definitions.</p>
      </div>

      <h2 className={h2Class}>Why Buyers Propose Earnouts</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Valuation gap:</strong> The buyer&apos;s valuation is lower than yours, and the earnout bridges the difference</li>
          <li><strong>Risk mitigation:</strong> The buyer is uncertain about growth projections, customer retention, or key relationships</li>
          <li><strong>Retention mechanism:</strong> Tying payout to post-closing performance keeps the seller engaged</li>
          <li><strong>Financing constraints:</strong> The buyer may not have enough cash or debt capacity for the full price upfront</li>
        </ul>
      </div>

      <h2 className={h2Class}>Protecting Yourself as the Seller</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Metrics to Accept</h3>
        <ul className={ulClass}>
          <li><strong>Revenue:</strong> Harder for the buyer to manipulate than profit metrics. Preferred if you&apos;re staying on.</li>
          <li><strong>Gross profit:</strong> A reasonable middle ground between revenue and EBITDA</li>
          <li><strong>Customer retention:</strong> Specific, measurable retention rates for key accounts</li>
        </ul>

        <h3 className={h3Class}>Metrics to Avoid</h3>
        <ul className={ulClass}>
          <li><strong>EBITDA:</strong> The buyer controls overhead allocation, management fees, and corporate charges that directly affect EBITDA</li>
          <li><strong>Net income:</strong> Even more subject to manipulation through interest charges, depreciation policies, and tax strategies</li>
          <li><strong>Subjective milestones:</strong> &quot;Integration success&quot; or &quot;customer satisfaction&quot; without precise, measurable definitions</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Negotiation Points</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Duration:</strong> Push for 12&ndash;18 months maximum. Longer earnouts give the buyer more opportunities to undermine targets.</li>
          <li><strong>Control provisions:</strong> Negotiate rights to maintain the business in its current form (no major changes to pricing, personnel, or strategy without your consent)</li>
          <li><strong>Accounting standards:</strong> Specify that earnout calculations follow the same accounting methods used historically (GAAP, same allocation policies)</li>
          <li><strong>Dispute resolution:</strong> Independent accountant to resolve disagreements, not litigation</li>
          <li><strong>Acceleration clauses:</strong> If the buyer sells the business during the earnout period, your full earnout should be paid immediately</li>
          <li><strong>Floor/ceiling:</strong> A minimum payout (floor) protects against buyer manipulation; a maximum (ceiling) limits your upside</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>As a seller, prefer revenue-based earnouts over EBITDA (the buyer controls too many EBITDA inputs)</li>
          <li>Push for short earnout periods (12&ndash;18 months max) with clear, measurable targets</li>
          <li>Negotiate control provisions to prevent the buyer from undermining your targets</li>
          <li>Include acceleration clauses: if the buyer resells, your full earnout pays immediately</li>
          <li>Use independent accountant arbitration for disputes, not litigation</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">Earnout Structures (Buy-Side)</Link></li>
        <li><Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">Exit Strategies for Search Fund CEOs</Link></li>
        <li><Link href="/learn/preparing-company-exit" className="text-apple-accent hover:underline">Preparing Your Company for Exit</Link></li>
        <li><Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">Negotiation Tactics</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>ABA, <em>Earnout Provisions in M&amp;A: A Seller&apos;s Guide</em> (2024)</li>
        <li>Harvard Business Review, <em>Negotiating Earnouts from the Sell Side</em> (2024)</li>
        <li>SRS Acquiom, <em>M&amp;A Deal Terms Study: Earnout Trends</em> (2024)</li>
      </ul>
    </article>
  );
}
