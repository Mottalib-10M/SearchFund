import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function GoodAcquisitionTargetArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        What Makes a Good Search Fund Acquisition Target?
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Not every business is a good{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            ETA
          </Link>{" "}
          target. The best search fund acquisitions share specific
          characteristics that reduce execution risk and maximize value
          creation potential. This guide defines the ideal acquisition
          profile based on 40 years of search fund data.
        </p>

        <h2 className={h2Class}>The 10 characteristics of an ideal target</h2>

        <h3 className={h3Class}>1. Recurring or repeatable revenue</h3>
        <ul className={ulClass}>
          <li><strong>Ideal:</strong> 70%+ of revenue is recurring (contracts, subscriptions, maintenance agreements)</li>
          <li><strong>Acceptable:</strong> Strong repeat customer base with high retention (&gt;85% annually)</li>
          <li><strong>Avoid:</strong> Project-based businesses where every dollar of revenue must be re-sold</li>
          <li>See{" "}
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              recurring revenue models
            </Link>{" "}
            for why acquirers pay a premium</li>
        </ul>

        <h3 className={h3Class}>2. Low customer concentration</h3>
        <ul className={ulClass}>
          <li><strong>Ideal:</strong> No single customer exceeds 10% of revenue</li>
          <li><strong>Acceptable:</strong> Top customer &lt;20%, top 5 customers &lt;40%</li>
          <li><strong>Avoid:</strong> Any customer &gt;30% of revenue. See{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration risk
            </Link></li>
        </ul>

        <h3 className={h3Class}>3. Defensible market position</h3>
        <ul className={ulClass}>
          <li><strong>Switching costs:</strong> High costs for customers to change providers (embedded software, regulatory compliance, training)</li>
          <li><strong>Relationships:</strong> Long-tenured customer relationships that would be difficult for competitors to replicate</li>
          <li><strong>Niche expertise:</strong> Specialized knowledge or capabilities that aren&rsquo;t commoditized</li>
          <li><strong>Geographic density:</strong> Strong position in a defined geography (service radius, local brand)</li>
        </ul>

        <h3 className={h3Class}>4. Stable or growing EBITDA</h3>
        <ul className={ulClass}>
          <li><strong>Minimum EBITDA:</strong> $750K&ndash;$1M (enough to service debt + pay CEO salary + invest in growth)</li>
          <li><strong>Ideal EBITDA:</strong> $1.5M&ndash;$5M (the{" "}
            <Link href="/learn/what-size-business-buy" className="text-apple-accent hover:underline">
              sweet spot
            </Link>{" "}
            for search funds)</li>
          <li><strong>Trend:</strong> Flat or growing EBITDA over the last 3&ndash;5 years. Declining EBITDA requires a clear, actionable turnaround thesis</li>
          <li><strong>Margins:</strong> 15%+ EBITDA margins provide buffer for mistakes and downturns</li>
        </ul>

        <h3 className={h3Class}>5. Existing management team</h3>
        <ul className={ulClass}>
          <li><strong>Ideal:</strong> At least 2&ndash;3 key managers who can run day-to-day operations without the owner</li>
          <li><strong>Key person risk:</strong> Assess{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              key person risk
            </Link>{" "}
            &mdash; what knowledge and relationships leave when the owner exits?</li>
          <li><strong>Avoid:</strong> Businesses where the owner is the sole salesperson, lead technician, and manager</li>
        </ul>

        <h3 className={h3Class}>6. Limited capital intensity</h3>
        <ul className={ulClass}>
          <li><strong>Ideal:</strong> Asset-light businesses with capex &lt;5% of revenue</li>
          <li><strong>Acceptable:</strong> Moderate capex (5&ndash;10%) with predictable replacement cycles</li>
          <li><strong>Avoid:</strong> Heavy capex businesses that require constant reinvestment to maintain revenue</li>
        </ul>

        <h3 className={h3Class}>7. Fragmented industry</h3>
        <ul className={ulClass}>
          <li><strong>Why it matters:</strong> Fragmented industries offer more targets, less buyer competition, and{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              roll-up opportunities
            </Link></li>
          <li><strong>Ideal:</strong> No single player has &gt;5% market share nationally</li>
          <li>See{" "}
            <Link href="/learn/industry-selection-framework" className="text-apple-accent hover:underline">
              industry selection framework
            </Link>{" "}
            for ranking industries</li>
        </ul>

        <h3 className={h3Class}>8. Succession-driven seller</h3>
        <ul className={ulClass}>
          <li><strong>Best sellers:</strong> Retiring owners (age 60+) with no family successor. See{" "}
            <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
              baby boomer succession crisis
            </Link></li>
          <li><strong>Motivated by:</strong> Legacy preservation, employee welfare, clean exit &mdash; not just maximum price</li>
          <li><strong>Willing to offer:</strong>{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              Seller financing
            </Link>{" "}
            and transition support (6&ndash;12 months)</li>
        </ul>

        <h3 className={h3Class}>9. Growth potential</h3>
        <ul className={ulClass}>
          <li><strong>Under-invested channels:</strong> No digital marketing, no CRM, no systematic sales process</li>
          <li><strong>Pricing upside:</strong>{" "}
            <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">
              Pricing optimization
            </Link>{" "}
            is often the fastest value creation lever</li>
          <li><strong>Adjacent opportunities:</strong> New services, new geographies, or add-on acquisitions</li>
          <li><strong>Technology gap:</strong>{" "}
            <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">
              Digital transformation
            </Link>{" "}
            can improve margins 5&ndash;15%</li>
        </ul>

        <h3 className={h3Class}>10. Reasonable valuation</h3>
        <ul className={ulClass}>
          <li><strong>Target range:</strong> 3&ndash;6x EBITDA for most ETA acquisitions</li>
          <li><strong>Avoid overpaying:</strong> Overpaying is the #1 cause of{" "}
            <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
              search fund failure
            </Link></li>
          <li><strong>Benchmark:</strong> See{" "}
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              EBITDA multiples by industry
            </Link>{" "}
            for current market data</li>
        </ul>

        <h2 className={h2Class}>Red flags to avoid</h2>
        <ul className={ulClass}>
          <li>Revenue declining &gt;5% for 2+ consecutive years</li>
          <li>Single customer &gt;30% of revenue</li>
          <li>Owner is the sole rainmaker with no second-in-command</li>
          <li>Regulatory risk that could fundamentally change the business model</li>
          <li>Technology disruption threatening the core value proposition</li>
          <li>Environmental or legal liabilities (check{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence checklist
            </Link>)</li>
        </ul>

        <p>
          For building your search criteria, see{" "}
          <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
            building your thesis
          </Link>{" "}
          and{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing strategies
          </Link>.
        </p>
      </div>
    </article>
  );
}
