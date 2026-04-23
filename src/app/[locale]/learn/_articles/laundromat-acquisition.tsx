import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function LaundromatAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Laundromat or Laundry Services Business</h1>
      <div className={bodyClass}>
        <p>Laundromats and laundry services are classic cash-flow businesses: recession-resistant, semi-passive, and powered by essential customer demand. The US laundry industry generates $15B+ annually, with over 30,000 coin-operated laundromats and thousands of wash-and-fold, pickup/delivery, and commercial laundry operations. For search fund entrepreneurs interested in a scalable, asset-based business with strong unit economics, laundromats offer a compelling entry point.</p>
      </div>

      <h2 className={h2Class}>Types of Laundry Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Self-service laundromat:</strong> Coin-operated or card-operated machines. Semi-passive income. Revenue driven by machine count and turns.</li>
          <li><strong>Wash-and-fold/fluff &amp; fold:</strong> Drop-off laundry services. Higher revenue per pound but requires labor.</li>
          <li><strong>Pickup &amp; delivery:</strong> Modern laundry services with app-based ordering. Growing rapidly in urban markets.</li>
          <li><strong>Commercial laundry:</strong> B2B services for hotels, restaurants, healthcare, salons. Large industrial equipment, recurring contracts.</li>
          <li><strong>Dry cleaning:</strong> Specialty cleaning for garments. Declining in casual segments but stable in professional markets.</li>
          <li><strong>Hybrid models:</strong> Self-service + wash-and-fold + delivery. Multiple revenue streams from one location.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Laundromats Are Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recession-proof:</strong> People always need clean clothes. Demand is fundamentally non-discretionary.</li>
          <li><strong>Semi-passive:</strong> Self-service laundromats require minimal staffing. Attendant hours are optional.</li>
          <li><strong>Cash flow:</strong> Strong cash generation with 20&ndash;35% net operating margins for well-run locations</li>
          <li><strong>Scalable:</strong> Multi-store operators build regional brands with centralized management</li>
          <li><strong>Simple operations:</strong> Limited inventory, no accounts receivable, and straightforward service delivery</li>
          <li><strong>Technology opportunity:</strong> Many laundromats still use coin-operated machines. Card/app payment modernization increases revenue 15&ndash;25%.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Machine inventory:</strong> Age, condition, brand, and remaining useful life. Commercial washers last 10&ndash;15 years. Replacement is expensive.</li>
          <li><strong>Lease terms:</strong> Remaining duration, renewal options, and rent-to-revenue ratio (target under 25%). Lease loss kills laundromats.</li>
          <li><strong>Utility costs:</strong> Water, gas, electric as percentage of revenue. Typically 20&ndash;30%. New machines can cut utility costs 30&ndash;40%.</li>
          <li><strong>Revenue verification:</strong> Cash businesses are hard to verify. Request utility usage trends (water especially) to validate reported revenue.</li>
          <li><strong>Location demographics:</strong> Renter population density, household income, and competition within a 1&ndash;2 mile radius</li>
          <li><strong>Parking &amp; visibility:</strong> Adequate parking, street visibility, and foot traffic. Location is everything in self-service laundry.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Machine upgrade:</strong> Replace aging equipment with high-efficiency machines for lower utility costs and higher vend prices</li>
          <li><strong>Card/app payment:</strong> Eliminate coin dependency. Digital payment increases revenue 15&ndash;25% through dynamic pricing.</li>
          <li><strong>Add wash-and-fold:</strong> Drop-off service generates $1.50&ndash;2.50/lb vs. $0.50&ndash;0.75/lb for self-service</li>
          <li><strong>Pickup &amp; delivery:</strong> Launch delivery service to capture convenience-driven customers willing to pay premium pricing</li>
          <li><strong>Multi-store expansion:</strong> Acquire or build additional locations to create a regional brand</li>
          <li><strong>Retool the space:</strong> Add vending, ATM, drop-off lockers, and Amazon Hub to maximize revenue per square foot</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Laundromats offer recession-proof, semi-passive cash flow with simple operations</li>
          <li>Revenue verification is critical in cash businesses &mdash; use water utility trends to validate reported income</li>
          <li>Machine age and lease terms are the two most important due diligence areas</li>
          <li>Technology modernization (card/app payment, new machines) is the fastest path to revenue growth</li>
          <li>Typical valuations: 3&ndash;5x annual SDE for self-service; 4&ndash;6x for hybrid operations with wash-and-fold and delivery</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/cleaning-business-acquisition" className="text-apple-accent hover:underline">Acquiring a Cleaning Business</Link></li>
        <li><Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">Recurring Revenue Businesses</Link></li>
        <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic Expansion</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Coin Laundry Association, <em>Industry Overview &amp; Statistics</em> (2024)</li>
        <li>IBISWorld, <em>Coin-Operated Laundries in the US</em> (2024)</li>
        <li>Planet Laundry, <em>Laundromat Owner Survey</em> (2024)</li>
      </ul>
    </article>
  );
}
