import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function WhatIsMyBusinessWorthArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        What Is My Business Worth? A Seller&rsquo;s Valuation Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          If you are thinking about selling your business, the first
          question is always: &ldquo;What is it worth?&rdquo; The answer
          depends on your industry, size, profitability, growth trajectory,
          and the type of buyer. This guide walks you through the
          valuation methods buyers use, what drives value up or down, and
          how to maximize your selling price.
        </p>

        <h2 className={h2Class}>The quick answer: multiples of earnings</h2>
        <ul className={ulClass}>
          <li><strong>Most common method:</strong> Small businesses are valued as a multiple of annual earnings (EBITDA or SDE)</li>
          <li><strong>Formula:</strong> Business value = Adjusted earnings × Multiple</li>
          <li><strong>Typical range:</strong> 2&ndash;6x EBITDA for businesses with $500K&ndash;$5M in earnings. See{" "}
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              multiples by industry
            </Link></li>
          <li><strong>Smaller businesses:</strong> Businesses under $1M revenue often use SDE (Seller&rsquo;s Discretionary Earnings) and trade at 1.5&ndash;3.5x SDE</li>
        </ul>

        <h2 className={h2Class}>Step 1: Calculate your adjusted earnings</h2>

        <h3 className={h3Class}>EBITDA vs. SDE</h3>
        <ul className={ulClass}>
          <li><strong>EBITDA:</strong> Earnings Before Interest, Taxes, Depreciation &amp; Amortization. Used for businesses with $1M+ in revenue and a management team in place</li>
          <li><strong>SDE:</strong> Adds back the owner&rsquo;s salary, benefits, and perks to EBITDA. Used for owner-operated businesses where the owner is the primary employee</li>
        </ul>

        <h3 className={h3Class}>Common add-backs</h3>
        <ul className={ulClass}>
          <li>Owner salary above market replacement cost</li>
          <li>Personal expenses run through the business (vehicle, insurance, travel, meals)</li>
          <li>One-time or non-recurring expenses (lawsuit, remodel, equipment replacement)</li>
          <li>Above-market rent paid to owner-owned property</li>
          <li>Family member salaries above their market rate</li>
          <li><strong>Warning:</strong> Buyers and their advisors are skeptical of aggressive add-backs. See{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              adjusted EBITDA deep dive
            </Link></li>
        </ul>

        <h2 className={h2Class}>Step 2: Determine your multiple</h2>
        <ul className={ulClass}>
          <li><strong>Industry matters:</strong> SaaS (6&ndash;10x), professional services (3&ndash;5x), manufacturing (3&ndash;5x), restaurants (2&ndash;3x)</li>
          <li><strong>Size matters:</strong> Larger businesses command higher multiples. A $3M EBITDA business gets 5&ndash;6x; a $500K EBITDA business gets 3&ndash;4x</li>
          <li><strong>Growth matters:</strong> A business growing at 20%+ gets a premium over a flat or declining business</li>
          <li><strong>Recurring revenue:</strong>{" "}
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              Subscription or recurring revenue
            </Link>{" "}
            commands 1&ndash;2x higher multiples than project-based revenue</li>
          <li><strong>Country matters:</strong>{" "}
            <Link href="/learn/ebitda-multiples-by-country" className="text-apple-accent hover:underline">
              Multiples vary by country
            </Link>{" "}
            &mdash; US businesses trade higher than comparable European or LATAM businesses</li>
        </ul>

        <h2 className={h2Class}>What drives value UP</h2>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> Contracts, subscriptions, maintenance agreements &mdash; the more predictable, the more valuable</li>
          <li><strong>Diverse customer base:</strong> No single customer &gt;10% of revenue. See{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration risk
            </Link></li>
          <li><strong>Management team in place:</strong> If the business runs without you, it is worth more. See{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              key person risk
            </Link></li>
          <li><strong>Clean financials:</strong> Audited or reviewed financial statements, tax compliance, and clear accounting</li>
          <li><strong>Growth trajectory:</strong> Revenue and profits trending upward over the last 3 years</li>
          <li><strong>Defensible position:</strong> Proprietary technology, exclusive contracts, regulatory licenses, or strong brand</li>
          <li><strong>Low capex requirements:</strong> Asset-light businesses with high free cash flow conversion</li>
        </ul>

        <h2 className={h2Class}>What drives value DOWN</h2>
        <ul className={ulClass}>
          <li><strong>Owner dependence:</strong> If you are the business (key relationships, key skills, key decisions), the value drops significantly</li>
          <li><strong>Customer concentration:</strong> One customer at 30%+ of revenue is a major risk factor</li>
          <li><strong>Declining revenue:</strong> Even if profits are stable, declining top-line signals market or competitive challenges</li>
          <li><strong>Informal practices:</strong> Cash transactions, undocumented processes, verbal contracts</li>
          <li><strong>Deferred maintenance:</strong> Aging equipment, outdated technology, needed renovations</li>
          <li><strong>Pending issues:</strong> Lawsuits, regulatory problems, environmental liabilities, lease expirations</li>
        </ul>

        <h2 className={h2Class}>Other valuation methods</h2>
        <ul className={ulClass}>
          <li><strong>Asset-based:</strong> Value of tangible assets (equipment, inventory, real estate) minus liabilities. Used for asset-heavy businesses or liquidation scenarios</li>
          <li><strong>Revenue multiple:</strong> 0.5&ndash;2x annual revenue. Used for high-growth businesses or businesses with inconsistent profitability. Common in SaaS (3&ndash;8x ARR)</li>
          <li><strong>DCF (Discounted Cash Flow):</strong> Projects future cash flows and discounts them to present value. More common for larger businesses ($5M+ EBITDA)</li>
          <li><strong>Comparable transactions:</strong> What did similar businesses actually sell for? The most reliable method, but data is limited for small businesses</li>
          <li><strong>For more:</strong>{" "}
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
              complete valuation guide
            </Link></li>
        </ul>

        <h2 className={h2Class}>How to maximize your sale price</h2>
        <ul className={ulClass}>
          <li><strong>Start planning early:</strong> 18&ndash;24 months before you want to sell. See{" "}
            <Link href="/learn/exit-readiness-plan" className="text-apple-accent hover:underline">
              exit readiness plan
            </Link></li>
          <li><strong>Reduce owner dependence:</strong> Build a management team, document processes, delegate customer relationships</li>
          <li><strong>Clean up financials:</strong> Eliminate personal expenses, maintain consistent bookkeeping, consider a reviewed financial statement</li>
          <li><strong>Lock in contracts:</strong> Convert verbal agreements to written contracts. Extend key customer and supplier agreements</li>
          <li><strong>Show growth potential:</strong> Identify and document untapped opportunities (new markets, products, geographies) that the buyer can pursue</li>
          <li><strong>Get multiple offers:</strong> Running a competitive process with 3&ndash;5 qualified buyers typically increases the sale price by 10&ndash;20%</li>
        </ul>

        <h2 className={h2Class}>Getting a professional valuation</h2>
        <ul className={ulClass}>
          <li><strong>Business broker:</strong> Free or low-cost estimates, but may inflate to win the listing. Best for initial guidance</li>
          <li><strong>Certified appraiser (ABV, CVA, ASA):</strong> $5K&ndash;$15K for a formal valuation. Recommended for businesses &gt;$1M in value</li>
          <li><strong>M&amp;A advisor:</strong> Provides a valuation range based on market conditions and buyer interest. Recommended for businesses &gt;$5M EBITDA</li>
          <li><strong>Online tools:</strong> Automated calculators give rough estimates but miss nuances. Use only for initial orientation</li>
        </ul>

        <p>
          For more on how{" "}
          <Link href="/learn/selling-to-search-fund" className="text-apple-accent hover:underline">
            search fund buyers value businesses
          </Link>{" "}
          and the{" "}
          <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">
            negotiation process
          </Link>, see our related guides.
        </p>
      </div>
    </article>
  );
}
