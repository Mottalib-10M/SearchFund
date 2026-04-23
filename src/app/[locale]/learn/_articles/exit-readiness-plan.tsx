import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ExitReadinessPlanArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Preparing Your Company for Exit: 18-Month Readiness Plan
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          The price you get at exit is largely determined by what you do in
          the 18 months before going to market. Buyers &mdash; whether
          strategic or financial &mdash; pay premiums for businesses that
          are clean, well-documented, growing, and low-risk. This guide
          provides a month-by-month readiness plan for search fund CEOs
          preparing for their{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
            exit
          </Link>.
        </p>

        <h2 className={h2Class}>Months 18&ndash;12: Foundation</h2>

        <h3 className={h3Class}>Financial preparation</h3>
        <ul className={ulClass}>
          <li><strong>Audit-quality financials:</strong> If you don&rsquo;t have audited or reviewed financials, start now. Buyers and their QoE firms will scrutinize every number</li>
          <li><strong>Clean up add-backs:</strong> Eliminate personal expenses, one-time items, and aggressive normalizations. The fewer add-backs, the higher the credibility</li>
          <li><strong>Stabilize EBITDA:</strong> Buyers value predictability. Reduce revenue volatility, stabilize margins, and eliminate one-off costs</li>
          <li><strong>Working capital normalization:</strong> Ensure{" "}
            <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">
              working capital
            </Link>{" "}
            is at sustainable levels. Don&rsquo;t artificially inflate or deplete it</li>
        </ul>

        <h3 className={h3Class}>Operational preparation</h3>
        <ul className={ulClass}>
          <li><strong>Reduce owner dependency:</strong> If you&rsquo;re still the key person for any critical function, fix it now. Hire, train, and delegate. See{" "}
            <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
              owner dependency mitigation
            </Link></li>
          <li><strong>Document processes:</strong> Written SOPs for every major operational function. Buyers value transferable, documented businesses</li>
          <li><strong>Strengthen the management team:</strong> Your direct reports should be capable of running the business without you. If any seat is weak, hire now</li>
          <li><strong>Address deferred maintenance:</strong> Fix equipment, update technology, complete facility improvements. Don&rsquo;t leave visible problems for buyers to discount</li>
        </ul>

        <h2 className={h2Class}>Months 12&ndash;6: Optimization</h2>

        <h3 className={h3Class}>Revenue quality</h3>
        <ul className={ulClass}>
          <li><strong>Diversify revenue:</strong> Reduce{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration
            </Link>.
            Buyers penalize concentration 1&ndash;2x EBITDA turns</li>
          <li><strong>Lock in contracts:</strong> Convert month-to-month customers to annual or multi-year contracts. Contractual recurring revenue commands premium multiples</li>
          <li><strong>Grow the pipeline:</strong> A strong sales pipeline at the time of exit signals future growth. Invest in sales and marketing</li>
          <li><strong>Demonstrate growth trajectory:</strong> Buyers pay for growth. Even modest 5&ndash;10% growth significantly impacts valuation</li>
        </ul>

        <h3 className={h3Class}>Legal and compliance</h3>
        <ul className={ulClass}>
          <li><strong>Contract review:</strong> Ensure all material contracts are current, assignable, and free of change-of-control termination clauses</li>
          <li><strong>Employment law compliance:</strong> Employee handbooks, benefits, classifications, and non-compete agreements should all be current</li>
          <li><strong>IP protection:</strong> Trademarks registered, trade secrets documented, employee invention assignment agreements in place</li>
          <li><strong>Resolve pending issues:</strong> Settle any outstanding disputes, tax issues, or regulatory matters before going to market</li>
        </ul>

        <h2 className={h2Class}>Months 6&ndash;3: Preparation for market</h2>

        <h3 className={h3Class}>Advisory team</h3>
        <ul className={ulClass}>
          <li><strong>Engage an investment banker/M&amp;A advisor:</strong> For businesses above $3M EBITDA, a sell-side advisor typically adds 15&ndash;25% to the sale price (net of fees)</li>
          <li><strong>Sell-side QoE:</strong> Commission your own{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              Quality of Earnings
            </Link>{" "}
            report. This proactively addresses buyer concerns and accelerates due diligence</li>
          <li><strong>Tax planning:</strong> Work with your CPA on{" "}
            <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
              tax optimization
            </Link>{" "}
            for the exit structure (asset vs. stock sale, QSBS eligibility, installment sale treatment)</li>
          <li><strong>Legal preparation:</strong> Your M&amp;A attorney should prepare a data room framework and review all material agreements</li>
        </ul>

        <h3 className={h3Class}>Marketing materials</h3>
        <ul className={ulClass}>
          <li>Confidential Information Memorandum (CIM) &mdash; your advisor will prepare this</li>
          <li>Management presentation with compelling growth story</li>
          <li>Financial model showing historical performance and credible projections</li>
          <li>Virtual data room loaded with organized due diligence documents</li>
        </ul>

        <h2 className={h2Class}>Months 3&ndash;0: Go to market</h2>
        <ul className={ulClass}>
          <li><strong>Buyer identification:</strong> Strategic buyers (competitors, adjacent companies) and financial buyers (PE firms, search funds, family offices)</li>
          <li><strong>Controlled auction:</strong> Your advisor manages a structured process &mdash; teaser → NDA → CIM → management presentations → LOIs → exclusivity → close</li>
          <li><strong>Maintain performance:</strong> Do not take your foot off the gas. Revenue dips during the sale process reduce buyer confidence and offer price</li>
          <li><strong>Manage confidentiality:</strong> Limit who knows about the sale. Employee and customer knowledge of a pending sale creates uncertainty</li>
        </ul>

        <h2 className={h2Class}>Valuation drivers at exit</h2>
        <ul className={ulClass}>
          <li><strong>EBITDA level:</strong> $3M&ndash;$5M+ EBITDA commands significantly higher multiples than $1M&ndash;$2M (PE threshold)</li>
          <li><strong>Growth rate:</strong> Growing businesses sell for 1&ndash;2x higher multiples than flat businesses</li>
          <li><strong>
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              Recurring revenue
            </Link>:
          </strong> Contractual recurring revenue adds 1&ndash;3x to the multiple</li>
          <li><strong>Customer diversification:</strong> No customer above 10% = premium valuation</li>
          <li><strong>Management depth:</strong> A business that doesn&rsquo;t depend on the CEO sells for more</li>
          <li><strong>Clean financials:</strong> Fewer add-backs = higher buyer confidence = higher price</li>
        </ul>

        <p>
          For a complete view of exit options, see our{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
            exit strategies guide
          </Link>{" "}
          and{" "}
          <Link href="/learn/investor-relations" className="text-apple-accent hover:underline">
            investor relations
          </Link>{" "}
          for managing stakeholder expectations during the exit process.
        </p>
      </div>
    </article>
  );
}
