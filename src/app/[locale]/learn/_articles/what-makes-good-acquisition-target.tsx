import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function WhatMakesGoodAcquisitionTargetArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        What Makes a Good Search Fund Acquisition Target?
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          Not every business for sale is a good acquisition target. Search
          fund investors and experienced searchers have refined a set of
          criteria over 40 years and 681+ search funds that define an
          &ldquo;ideal&rdquo; acquisition. This guide covers the essential
          characteristics, common disqualifiers, and how to build a
          systematic screening process. Once you know what to look for, our{" "}
          <Link href="/learn/sme-acquisition-guide" className="text-apple-accent hover:underline">
            SME acquisition guide
          </Link>{" "}
          walks you through the full buying process.
        </p>

        <h2 className={h2Class}>The core criteria: what investors want</h2>
        <p>
          Based on Stanford and IESE research and conversations with dozens
          of{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
            search fund investors
          </Link>,
          the ideal target has:
        </p>

        <h3 className={h3Class}>1. Recurring or highly predictable revenue</h3>
        <ul className={ulClass}>
          <li>Contractual recurring revenue (SaaS, insurance, maintenance contracts) is gold</li>
          <li>Repeat purchase behavior (customers buy every month/quarter) is nearly as good</li>
          <li>Revenue visibility allows confident forecasting and supports use</li>
          <li>See our{" "}
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              recurring revenue models guide
            </Link>{" "}
            for the full spectrum</li>
        </ul>

        <h3 className={h3Class}>2. Fragmented industry with no dominant player</h3>
        <ul className={ulClass}>
          <li>Markets with hundreds of small competitors and no player above 10&ndash;15% market share</li>
          <li>Enables{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              buy-and-build
            </Link>{" "}
            strategies through add-on acquisitions</li>
          <li>Less vulnerable to competitive disruption</li>
          <li>Examples: HVAC, plumbing, insurance brokerages, staffing agencies, pest control</li>
        </ul>

        <h3 className={h3Class}>3. Low customer concentration</h3>
        <ul className={ulClass}>
          <li>No single customer above 10% of revenue (ideal)</li>
          <li>Top 10 customers below 40% of total revenue</li>
          <li>Diversified customer base reduces risk and supports{" "}
            <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
              financing
            </Link></li>
          <li>See our{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration risk
            </Link>{" "}
            guide for thresholds and analysis</li>
        </ul>

        <h3 className={h3Class}>4. Moderate and growing EBITDA</h3>
        <ul className={ulClass}>
          <li><strong>Target range:</strong> $1.5M&ndash;$5M EBITDA for traditional search funds, $750K&ndash;$2M for self-funded</li>
          <li><strong>Margins:</strong> 15&ndash;25% EBITDA margin is typical for service businesses; 10&ndash;20% for manufacturing</li>
          <li><strong>Growth:</strong> 5&ndash;15% annual revenue growth is ideal &mdash; stable enough to finance, growing enough to create value</li>
          <li>Calculate{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              adjusted EBITDA
            </Link>{" "}
            to normalize for owner compensation, one-time expenses, and non-cash items</li>
        </ul>

        <h3 className={h3Class}>5. Management team beyond the owner</h3>
        <ul className={ulClass}>
          <li>At least 1&ndash;2 capable managers who run day-to-day operations</li>
          <li>The business should not collapse if the owner steps away</li>
          <li>Avoid businesses where the owner is the top salesperson, the only customer relationship, or the sole decision-maker</li>
          <li>See our{" "}
            <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
              owner-dependent business
            </Link>{" "}
            guide for assessment frameworks</li>
        </ul>

        <h3 className={h3Class}>6. Defensible competitive position</h3>
        <ul className={ulClass}>
          <li><strong>Switching costs:</strong> Customers find it painful or expensive to leave (data migration, integration, retraining)</li>
          <li><strong>Regulatory moats:</strong> Licenses, certifications, or permits that create barriers to entry</li>
          <li><strong>Network effects:</strong> Value increases with more participants (marketplaces, platforms)</li>
          <li><strong>Brand/reputation:</strong> Local market dominance through years of service quality and trust</li>
          <li><strong>Contracts:</strong> Long-term contracts with automatic renewals</li>
        </ul>

        <h3 className={h3Class}>7. Reasonable valuation</h3>
        <ul className={ulClass}>
          <li>3&ndash;6x EBITDA for most SMEs (varies by{" "}
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              industry
            </Link>)</li>
          <li>Higher multiples (6&ndash;10x) justified for high-growth, high-recurring-revenue businesses</li>
          <li>The deal must support use &mdash; after debt service, there should be meaningful free cash flow</li>
          <li>See our{" "}
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
              business valuation
            </Link>{" "}
            guide for methodology</li>
        </ul>

        <h2 className={h2Class}>Common disqualifiers</h2>

        <h3 className={h3Class}>Hard no&rsquo;s</h3>
        <ul className={ulClass}>
          <li><strong>Declining revenue for 3+ years:</strong> Structural decline is nearly impossible to reverse in an SME</li>
          <li><strong>Single customer &gt;40% of revenue:</strong> This isn&rsquo;t a business, it&rsquo;s a contract</li>
          <li><strong>Owner IS the business:</strong> If customers and employees will leave with the owner, there&rsquo;s nothing to buy</li>
          <li><strong>Pending material litigation:</strong> Unquantifiable legal exposure is a deal-killer</li>
          <li><strong>Regulatory risk:</strong> Industries facing existential regulatory threats (e.g., businesses dependent on expiring regulations)</li>
          <li><strong>No clear path to financing:</strong> If no lender will finance the deal, the risk is too high</li>
        </ul>

        <h3 className={h3Class}>Yellow flags (negotiate, don&rsquo;t walk)</h3>
        <ul className={ulClass}>
          <li><strong>Moderate customer concentration (15&ndash;25%):</strong> Price discount needed, but mitigatable</li>
          <li><strong>Deferred maintenance or capex:</strong> Price adjustment for catch-up investment required</li>
          <li><strong>Flat revenue:</strong> Not growing but not declining &mdash; value creation comes from operational improvements</li>
          <li><strong>Key employee risk:</strong> Manageable with retention agreements and equity incentives</li>
          <li><strong>Below-average margins:</strong> May indicate pricing opportunity or operational inefficiency (upside potential)</li>
          <li><strong>Owner near retirement:</strong> The{" "}
            <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
              baby boomer succession wave
            </Link>{" "}
            creates motivated sellers, but ensure adequate transition planning</li>
        </ul>

        <h2 className={h2Class}>Top industries for search fund targets</h2>
        <p>
          See our detailed{" "}
          <Link href="/learn/best-industries-search-funds" className="text-apple-accent hover:underline">
            best industries for search funds
          </Link>{" "}
          guide. The most popular sectors include:
        </p>
        <ul className={ulClass}>
          <li><strong>Business services:</strong> Staffing, IT services, waste management, janitorial, consulting</li>
          <li><strong>Healthcare services:</strong> Clinics, home health, dental practices, behavioral health</li>
          <li><strong>
            <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">
              Home &amp; field services
            </Link>:
          </strong> HVAC, plumbing, pest control, landscaping, roofing</li>
          <li><strong>Insurance:</strong> Insurance brokerages/agencies with renewal books</li>
          <li><strong>
            <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">
              Software/SaaS
            </Link>:
          </strong> Vertical SaaS with sticky customer bases</li>
          <li><strong>
            <Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">
              Manufacturing
            </Link>:
          </strong> Niche manufacturing with proprietary processes or certifications</li>
        </ul>

        <h2 className={h2Class}>Building a systematic screening process</h2>
        <ul className={ulClass}>
          <li><strong>Tier 1 filter (30 seconds):</strong> Revenue, EBITDA, industry, geography. Pass/fail against your criteria</li>
          <li><strong>Tier 2 filter (15 minutes):</strong> CIM review, customer concentration, owner role, growth trends, asking price vs. EBITDA multiple</li>
          <li><strong>Tier 3 evaluation (2&ndash;5 hours):</strong> Deep financial analysis, management assessment, competitive dynamics, deal modeling</li>
          <li><strong>Tier 4 engagement (1&ndash;2 weeks):</strong> Seller meetings, site visits, LOI development</li>
        </ul>
        <p>
          Expect to screen 100&ndash;200 opportunities, evaluate 20&ndash;40
          deeply, and submit 3&ndash;8 LOIs before closing one deal. Understanding{" "}
          <Link href="/learn/how-much-money-buy-business" className="text-apple-accent hover:underline">
            how much capital you need
          </Link>{" "}
          helps you set realistic size parameters early. See{" "}
          <Link href="/learn/how-long-buy-business" className="text-apple-accent hover:underline">
            how long does it take to buy a business
          </Link>{" "}
          for the full timeline.
        </p>

        <p>
          For the complete search framework, read our{" "}
          <Link href="/learn/how-find-businesses-for-sale" className="text-apple-accent hover:underline">
            how to find businesses for sale
          </Link>{" "}
          guide and{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing strategies
          </Link>.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>What EBITDA range should a first-time buyer target?</h3>
        <p>
          For a traditional search fund, the ideal range is $1.5M&ndash;$5M EBITDA, which supports institutional investor return expectations and professional debt financing. Self-funded searchers typically target $750K&ndash;$2M EBITDA, where SBA loans and seller financing can cover most of the capital structure. Businesses below $500K EBITDA are harder to finance and often too owner-dependent, while those above $5M attract professional private equity competition.
        </p>

        <h3 className={h3Class}>How important is recurring revenue in an acquisition target?</h3>
        <p>
          Recurring revenue is the single most valued characteristic among search fund investors. Contractual recurring revenue (SaaS subscriptions, maintenance contracts, insurance renewals) provides predictable cash flow that supports use and reduces risk. However, &ldquo;repeat purchase&rdquo; behavior where customers buy regularly without formal contracts can be nearly as valuable. Businesses with 70%+ recurring revenue command premium multiples (5&ndash;8x EBITDA vs. 3&ndash;5x for project-based revenue).
        </p>

        <h3 className={h3Class}>What level of customer concentration is acceptable?</h3>
        <p>
          The ideal target has no single customer above 10% of revenue and the top 10 customers below 40% of total revenue. A single customer at 15&ndash;25% is a yellow flag that warrants a price discount and retention analysis, but is not a deal-killer. Any single customer above 40% of revenue is a hard disqualifier for most search fund investors, as losing that customer could collapse the entire business. Lenders also scrutinize customer concentration heavily when underwriting acquisition debt.
        </p>
      </div>
    </article>
  );
}
