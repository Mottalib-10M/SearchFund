import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function AcquisitionTargetScreeningArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquisition Target Screening: Filters, Criteria &amp; Frameworks
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Effective screening is the difference between reviewing 200
          businesses in 18 months and reviewing 50 in 6. A systematic
          screening process eliminates poor fits quickly, letting you spend
          time where it matters &mdash; deep evaluation of the 10&ndash;20%
          of deals that could be your acquisition. This guide provides a
          complete screening framework.
        </p>

        <h2 className={h2Class}>The screening funnel</h2>
        <p>
          The typical search fund funnel:
        </p>
        <ol className={olClass}>
          <li><strong>Universe:</strong> 500&ndash;2,000 businesses identified through sourcing channels</li>
          <li><strong>Tier 1 screen (30 seconds):</strong> 200&ndash;400 pass basic criteria</li>
          <li><strong>Tier 2 screen (15 minutes):</strong> 50&ndash;100 warrant CIM review</li>
          <li><strong>Tier 3 evaluation (2&ndash;5 hours):</strong> 15&ndash;30 deserve deep analysis</li>
          <li><strong>Seller meetings:</strong> 5&ndash;15 in-person meetings</li>
          <li><strong>LOI submissions:</strong> 3&ndash;8 LOIs submitted</li>
          <li><strong>Acquisition:</strong> 1 closed deal</li>
        </ol>

        <h2 className={h2Class}>Tier 1: Instant pass/fail filters</h2>
        <p>
          Apply these in 30 seconds from a teaser or listing:
        </p>
        <ul className={ulClass}>
          <li><strong>Revenue:</strong> Does it meet your minimum threshold? (e.g., $3M+ for traditional search)</li>
          <li><strong>EBITDA/SDE:</strong> Above your floor? (e.g., $1M+ EBITDA)</li>
          <li><strong>Industry:</strong> In one of your{" "}
            <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
              thesis industries
            </Link>?</li>
          <li><strong>Geography:</strong> In a location where you&rsquo;re willing to live?</li>
          <li><strong>Asking price:</strong> Does the implied multiple make sense? (&gt;8x EBITDA = pass for most SMEs)</li>
          <li><strong>Reason for sale:</strong> Retirement/succession (good) vs. distress/regulatory (investigate)</li>
        </ul>

        <h2 className={h2Class}>Tier 2: CIM-level screening</h2>
        <p>
          After signing the NDA and receiving the CIM, spend 15&ndash;30
          minutes on:
        </p>

        <h3 className={h3Class}>Financial quick-check</h3>
        <ul className={ulClass}>
          <li><strong>Revenue trend:</strong> 3&ndash;5 year trajectory. Growing, stable, or declining?</li>
          <li><strong>EBITDA margin:</strong> Is it consistent with industry norms? Volatile margins are a warning sign</li>
          <li><strong>Add-backs:</strong> Are the seller&rsquo;s{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              EBITDA add-backs
            </Link>{" "}
            reasonable or aggressive?</li>
          <li><strong>Capex:</strong> Maintenance capex requirements. Has the seller been underinvesting?</li>
        </ul>

        <h3 className={h3Class}>Structural quick-check</h3>
        <ul className={ulClass}>
          <li><strong>
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              Customer concentration
            </Link>:
          </strong> Top customer &gt;25% of revenue? Flag or pass</li>
          <li><strong>
            <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
              Owner dependency
            </Link>:
          </strong> Is there a management layer? Or does everything run through the owner?</li>
          <li><strong>
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              Revenue model
            </Link>:
          </strong> Recurring, repeat, or one-time? Contract length and renewal rates?</li>
          <li><strong>Employee count:</strong> Too few (&lt;10) may mean owner-operated; too many (&gt;200) may be complex for a first-time CEO</li>
        </ul>

        <h2 className={h2Class}>Tier 3: Deep evaluation</h2>
        <p>
          For the 15&ndash;30 businesses that pass Tier 2, invest 2&ndash;5
          hours per opportunity:
        </p>

        <h3 className={h3Class}>Financial deep dive</h3>
        <ul className={ulClass}>
          <li>Recalculate{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              adjusted EBITDA
            </Link>{" "}
            from raw financials (don&rsquo;t trust the CIM)</li>
          <li>Analyze monthly revenue trends (annual numbers can hide seasonality or decline)</li>
          <li>Model the acquisition: purchase price, debt service, free cash flow to equity</li>
          <li>Estimate returns: can you achieve 25%+ IRR over 5&ndash;7 years with realistic assumptions?</li>
        </ul>

        <h3 className={h3Class}>Business quality assessment</h3>
        <ul className={ulClass}>
          <li>Customer retention and churn analysis</li>
          <li>Competitive landscape: how defensible is the business?</li>
          <li>Growth potential: organic levers and{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              buy-and-build
            </Link>{" "}
            opportunity</li>
          <li>Management team: who stays post-acquisition? Do you need to hire?</li>
          <li>Technology and systems: how modern or legacy is the infrastructure?</li>
        </ul>

        <h3 className={h3Class}>Deal viability</h3>
        <ul className={ulClass}>
          <li>Is the asking price financeable? Can a bank/SBA underwrite this deal?</li>
          <li>Seller motivation: are they serious and ready to transact?</li>
          <li>Timeline: does the seller&rsquo;s preferred timeline match yours?</li>
          <li>Deal-breakers: any{" "}
            <Link href="/learn/red-flags-due-diligence" className="text-apple-accent hover:underline">
              red flags
            </Link>{" "}
            that can&rsquo;t be mitigated?</li>
        </ul>

        <h2 className={h2Class}>Building your screening system</h2>

        <h3 className={h3Class}>Tools</h3>
        <ul className={ulClass}>
          <li><strong>CRM/spreadsheet:</strong> Track every opportunity with key data fields (source, industry, revenue, EBITDA, status, notes)</li>
          <li><strong>Scoring rubric:</strong> 1&ndash;5 score on 8&ndash;10 criteria. Businesses scoring 35+ out of 50 get deep evaluation</li>
          <li><strong>Deal memo template:</strong> One-page summary for promising opportunities (thesis fit, financials, key risks, next steps)</li>
        </ul>

        <h3 className={h3Class}>Cadence</h3>
        <ul className={ulClass}>
          <li><strong>Weekly:</strong> Review all new opportunities from brokers, marketplaces, and outreach. Apply Tier 1 filters</li>
          <li><strong>Bi-weekly:</strong> Deep evaluation sessions for Tier 3 candidates</li>
          <li><strong>Monthly:</strong> Review pipeline metrics: opportunities screened, CIMs reviewed, seller meetings, LOIs submitted</li>
        </ul>

        <h2 className={h2Class}>Common screening mistakes</h2>
        <ul className={ulClass}>
          <li><strong>Analysis paralysis:</strong> Spending 10 hours on every opportunity instead of screening ruthlessly. Use the tiered approach</li>
          <li><strong>Falling for the story:</strong> A compelling CIM doesn&rsquo;t mean good economics. Always check the numbers first</li>
          <li><strong>Ignoring your thesis:</strong> &ldquo;This isn&rsquo;t in my target industry but looks interesting&rdquo; &mdash; stay disciplined</li>
          <li><strong>Not tracking metrics:</strong> If you can&rsquo;t measure your funnel, you can&rsquo;t improve it</li>
          <li><strong>Screening too tightly:</strong> If you pass on everything, your criteria may be unrealistic. Revisit your{" "}
            <Link href="/learn/what-makes-good-acquisition-target" className="text-apple-accent hover:underline">
              target criteria
            </Link></li>
        </ul>

        <p>
          For the complete deal sourcing strategy that feeds your screening
          process, see our{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing
          </Link>{" "}
          and{" "}
          <Link href="/learn/how-find-businesses-for-sale" className="text-apple-accent hover:underline">
            how to find businesses for sale
          </Link>{" "}
          guides.
        </p>
      </div>
    </article>
  );
}
