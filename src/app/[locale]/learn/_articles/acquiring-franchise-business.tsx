import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringFranchiseBusinessArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Franchise Business (Multi-Unit)
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Multi-unit franchise acquisitions offer the best of both
          worlds: a proven business system with the scale economics
          of a portfolio. For ETA entrepreneurs, acquiring 3&ndash;10+
          franchise units from an existing franchisee provides
          immediate cash flow, brand recognition, and a clear growth
          path through additional unit development.
        </p>

        <h2 className={h2Class}>Why multi-unit franchise?</h2>
        <ul className={ulClass}>
          <li><strong>Proven system:</strong> Operations manual, training, supply chain, and marketing support from the franchisor</li>
          <li><strong>Brand recognition:</strong> Built-in customer awareness and trust</li>
          <li><strong>Scalable:</strong> Once you master one unit, the playbook repeats across additional locations</li>
          <li><strong>Succession opportunity:</strong> Many multi-unit franchisees built their portfolios 20&ndash;30 years ago and are now retiring</li>
          <li><strong>Financing:</strong>{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA lending
            </Link>{" "}
            is widely available for franchise acquisitions (franchise must be on SBA approved list)</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Single-unit:</strong> 2&ndash;4x EBITDA (varies widely by brand and performance)</li>
          <li><strong>Multi-unit portfolio (5+):</strong> 3&ndash;6x EBITDA (management team premium)</li>
          <li><strong>Premium brands:</strong> Chick-fil-A, McDonald&rsquo;s, In-N-Out trade at higher multiples due to unit economics</li>
          <li><strong>Premium factors:</strong> Strong unit economics (AUV above brand average), prime locations, long remaining franchise term, development rights for new units</li>
          <li><strong>Discount factors:</strong> Below-average unit volumes, franchises near renewal/expiration, deferred maintenance, poor customer reviews</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>

        <h3 className={h3Class}>Franchise agreement</h3>
        <ul className={ulClass}>
          <li><strong>Remaining term:</strong> How many years remain? What are renewal terms?</li>
          <li><strong>Transfer approval:</strong> Franchisor must approve the buyer. Review transfer requirements and fees</li>
          <li><strong>Territory rights:</strong> Exclusive territory? First right of refusal on new units?</li>
          <li><strong>Development agreement:</strong> Are there obligations to open new units on a timeline?</li>
        </ul>

        <h3 className={h3Class}>Unit economics</h3>
        <ul className={ulClass}>
          <li><strong>AUV (Average Unit Volume):</strong> Compare each unit to brand averages disclosed in the FDD (Franchise Disclosure Document, Item 19)</li>
          <li><strong>Four-wall profitability:</strong> Unit-level EBITDA margin by location. Identify underperformers</li>
          <li><strong>Royalty and fees:</strong> Ongoing royalty (typically 4&ndash;8% of revenue), marketing fund (2&ndash;4%), technology fees, and other charges</li>
          <li><strong>Capital requirements:</strong> Remodel obligations, equipment replacement schedules, and franchisor-mandated upgrades</li>
        </ul>

        <h3 className={h3Class}>Operations</h3>
        <ul className={ulClass}>
          <li><strong>General manager quality:</strong> Each unit needs a strong GM. Assess management bench depth</li>
          <li><strong>Employee turnover:</strong> Review by unit. High turnover locations signal management or market issues</li>
          <li><strong>Compliance:</strong> Franchisor audits, health inspections, customer satisfaction scores by unit</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>Operational excellence:</strong> Bring underperforming units to brand standard. Often 10&ndash;20% revenue lift by improving service speed, product quality, and customer experience</li>
          <li><strong>Labor management:</strong> Centralize hiring, training, and scheduling across units. Implement performance management systems</li>
          <li><strong>New unit development:</strong> Open new units in your territory. The marginal cost of each additional unit decreases with scale</li>
          <li><strong>Adjacent brand:</strong> Once you master one franchise system, acquire units of a complementary brand (e.g., breakfast + lunch concepts)</li>
        </ul>

        <h2 className={h2Class}>ETA vs. franchise comparison</h2>
        <ul className={ulClass}>
          <li>For a detailed comparison of buying a franchise vs. acquiring an independent business through ETA, see{" "}
            <Link href="/learn/eta-vs-franchise-comparison" className="text-apple-accent hover:underline">
              ETA vs. Buying a Franchise
            </Link></li>
        </ul>

        <p>
          For related guides, see{" "}
          <Link href="/learn/acquiring-restaurant-business" className="text-apple-accent hover:underline">
            restaurant acquisition
          </Link>{" "}
          and{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            buy-and-build strategy
          </Link>.
        </p>
      </div>
    </article>
  );
}
