import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringInsuranceBrokerageArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring an Insurance Brokerage: The ETA Playbook
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Insurance brokerages are among the most sought-after acquisition
          targets in professional services &mdash; and for good reason.
          High recurring revenue (90%+ renewal rates), minimal capital
          requirements, and proven{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            roll-up economics
          </Link>{" "}
          make insurance brokerages one of the best verticals for
          search fund entrepreneurs.
        </p>

        <h2 className={h2Class}>Why insurance brokerages?</h2>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> 85&ndash;95% of revenue renews annually. Clients rarely switch insurance brokers</li>
          <li><strong>High margins:</strong> 25&ndash;40% EBITDA margins for well-run agencies</li>
          <li><strong>Asset-light:</strong> No inventory, no equipment, no factory. Primary assets are client relationships and commission streams</li>
          <li><strong>Fragmented:</strong> 38,000+ independent agencies in the US. Most are owner-operated with $500K&ndash;$5M revenue</li>
          <li><strong>Succession wave:</strong> Average agency owner is 58+. 30% plan to sell within 5 years</li>
          <li><strong>PE interest:</strong> PE firms have been aggressively acquiring insurance brokerages, proving the roll-up model and providing exit optionality</li>
        </ul>

        <h2 className={h2Class}>Revenue models</h2>
        <ul className={ulClass}>
          <li><strong>Commission income:</strong> 10&ndash;20% of premiums placed (P&amp;C), 3&ndash;6% (life/health). The primary revenue source</li>
          <li><strong>Contingent commissions:</strong> Bonus payments from carriers based on volume and loss ratios. Typically 2&ndash;5% of commissions</li>
          <li><strong>Fee income:</strong> Consulting fees, risk management fees, and administrative fees. Growing in importance</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Small agencies:</strong> 1.5&ndash;2.5x annual revenue (or 6&ndash;10x EBITDA)</li>
          <li><strong>Mid-size agencies:</strong> 2&ndash;3x revenue (8&ndash;12x EBITDA)</li>
          <li><strong>Premium factors:</strong> Commercial P&amp;C focus (highest margins), diversified carrier relationships, young producer bench, technology adoption</li>
          <li><strong>Discount factors:</strong> Personal lines only (lower margins), owner-dependent sales, single carrier concentration, aging book of business</li>
          <li><strong>Note:</strong> Insurance multiples are higher than most industries because of exceptional recurring revenue and margin characteristics</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>
        <ul className={ulClass}>
          <li><strong>Book of business analysis:</strong> Revenue by line (P&amp;C commercial, personal, life, benefits), client size distribution, and retention rates by segment</li>
          <li><strong>Commission schedules:</strong> Review carrier commission rates and any upcoming rate changes. Some carriers are reducing commissions</li>
          <li><strong>Producer analysis:</strong> Revenue by producer. High concentration in one producer (especially the owner) is the biggest risk. See{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              key person risk
            </Link></li>
          <li><strong>Carrier relationships:</strong> Top carrier appointments, production requirements, and contingent commission eligibility</li>
          <li><strong>Licensing:</strong> State insurance licensing requirements for the agency and individual producers</li>
          <li><strong>E&amp;O insurance:</strong> Errors &amp; omissions coverage and claims history. E&amp;O claims are the primary liability</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>Organic growth:</strong> Hire producers, cross-sell commercial lines to personal lines clients, and add group benefits to P&amp;C clients</li>
          <li><strong>Technology:</strong> Modern agency management system (Applied, Vertafore), client portal, and digital marketing. Most agencies are technologically behind</li>
          <li><strong>Roll-up:</strong> Acquire 3&ndash;10 agencies in a region. Consolidate back-office, negotiate better carrier terms, and cross-sell across books</li>
          <li><strong>Niche specialization:</strong> Develop expertise in a specific industry vertical (construction, restaurants, technology) to command higher retention and pricing</li>
          <li><strong>Exit to PE:</strong> PE-backed brokers (Hub International, Acrisure, AssuredPartners) are active acquirers of independent agencies at 10&ndash;15x EBITDA. Build a platform and sell to PE at a premium multiple</li>
        </ul>

        <p>
          For related playbooks, see{" "}
          <Link href="/learn/financial-services-acquisition" className="text-apple-accent hover:underline">
            financial services acquisition
          </Link>{" "}
          and{" "}
          <Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">
            professional services acquisition
          </Link>.
        </p>
      </div>
    </article>
  );
}
