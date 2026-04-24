import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SellSideEarnoutArticle() {
  return (
    <article>
      <h1 className={h1Class}>Sell-Side Earnouts in Search Fund Acquisitions: A Seller&apos;s Playbook</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          If you&apos;re selling a business to a search fund acquirer, there is a strong chance an earnout will land on the table. According to SRS Acquiom&apos;s 2024 Deal Terms Study, roughly 63% of private M&amp;A transactions below $100 million include some form of contingent consideration. For sellers, this creates a distinct challenge: a portion of your purchase price &mdash; often 10% to 30% &mdash; hinges on future performance metrics you may no longer control. This guide explains how sell-side earnouts work in search fund deals, what structures protect you, where sellers most often lose money, and how to negotiate terms that reflect your company&apos;s actual value.
        </p>

        <h2 className={h2Class}>What a sell-side earnout is and when to expect one</h2>
        <p>
          An earnout is a contractual mechanism that makes part of the purchase price contingent on the business hitting specified performance targets after closing. The seller receives a base payment at close and additional payments &mdash; typically over one to three years &mdash; if agreed-upon metrics are met.
        </p>
        <p>
          Search fund buyers propose earnouts in predictable scenarios. The most common is a <strong>valuation gap</strong>: you believe your business is worth 5.5x EBITDA based on its growth trajectory, but the buyer&apos;s model supports 4.5x based on historical performance. An earnout structured around revenue growth can bridge that 1x gap without requiring either party to concede. In the search fund world, where acquirers raise finite equity from institutional investors and layer on SBA or bank debt, an earnout also eases financing constraints by deferring a slice of the total consideration.
        </p>
        <p>
          You should also expect earnout proposals when your business has <strong>customer concentration risk</strong> (one client represents 20%+ of revenue), <strong>owner dependence</strong> (key relationships are tied to you personally), or <strong>recent growth inflections</strong> that the buyer views as unproven. These are legitimate concerns, and a well-structured earnout can address them. The danger lies in poorly structured ones.
        </p>

        <h2 className={h2Class}>Typical earnout structures: revenue, EBITDA, and milestones</h2>
        <p>
          Earnouts in search fund deals fall into three categories, each with different risk profiles for the seller. Understanding these structures matters because the metric you agree to will determine how much control you retain over the outcome. For a broader look at how earnouts fit within overall transaction design, see the guide on{" "}
          <Link href="/learn/deal-structure-optimization" className="text-apple-accent hover:underline">deal structure optimization</Link>.
        </p>

        <h3 className={h3Class}>Revenue-based earnouts</h3>
        <p>
          Revenue is the metric most favorable to sellers. It sits at the top of the income statement, is auditable from bank deposits and invoices, and is difficult for a buyer to manipulate without visibly damaging the business. A typical structure might pay the seller an additional $500,000 if trailing twelve-month revenue exceeds $5 million by the first anniversary of close.
        </p>
        <p>
          The main risk is that the buyer shifts revenue recognition timing &mdash; delaying invoicing near the measurement date or reclassifying certain income streams. Protect against this by specifying that revenue is calculated using the same recognition policies the company applied during the two fiscal years before closing.
        </p>

        <h3 className={h3Class}>EBITDA-based earnouts</h3>
        <p>
          EBITDA-based earnouts are the most common in private M&amp;A &mdash; and the most dangerous for sellers. The buyer, who controls the company post-close, has dozens of levers to reduce reported EBITDA: hiring a management company that charges administrative fees, accelerating discretionary spending, allocating shared corporate overhead, changing depreciation schedules, or increasing executive compensation. A 2023 American Bar Association study found that EBITDA-based earnout disputes were three times more likely to result in litigation than revenue-based ones.
        </p>
        <p>
          If you agree to an EBITDA metric, insist on a detailed definition of &ldquo;Adjusted EBITDA&rdquo; in the purchase agreement that mirrors the adjustments used during the{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">quality of earnings</Link>{" "}
          analysis. Specify that management fees, related-party transactions, and any new corporate allocations are added back for earnout calculation purposes.
        </p>

        <h3 className={h3Class}>Milestone-based earnouts</h3>
        <p>
          Milestone earnouts tie payments to specific events: renewing a key customer contract, obtaining a regulatory approval, launching a product line, or retaining a certain percentage of employees. These work well when the valuation gap stems from a single identifiable risk. For example, if a buyer is concerned that your largest client (30% of revenue) may leave after the transition, an earnout that pays $300,000 upon that client&apos;s renewal at the next contract anniversary addresses the concern directly.
        </p>
        <p>
          The pitfall is vague language. &ldquo;Successful integration&rdquo; or &ldquo;customer satisfaction improvement&rdquo; are subjective and unenforceable. Every milestone must be binary &mdash; either it happened or it did not &mdash; with no room for interpretation.
        </p>

        <h2 className={h2Class}>Earnout sizing and duration: what is typical</h2>
        <p>
          In search fund acquisitions, earnouts typically represent <strong>10% to 30% of the total purchase price</strong>. On a $4 million deal valued at 4x EBITDA on a $1 million cash flow business, that means $400,000 to $1.2 million is at risk. The percentage tends to increase when the valuation gap is wider or when the business has identifiable risks the buyer wants the seller to share.
        </p>
        <p>
          Duration matters as much as size. According to SRS Acquiom data, the median earnout period in sub-$100 million deals is 24 months, with a range from 12 to 36 months. As a seller, shorter is better &mdash; every additional month gives the buyer more time to make operational changes that could depress your metrics. Push for <strong>12 to 18 months</strong> with annual or semi-annual measurement dates. If the buyer insists on 24+ months, negotiate for interim payments rather than a single lump-sum at the end.
        </p>
        <p>
          Some sellers negotiate <strong>tiered earnouts</strong> with partial payouts at lower thresholds. For example: 50% of the earnout pays if revenue reaches $4.5 million, 75% at $4.75 million, and 100% at $5 million. This structure reduces the all-or-nothing risk that makes earnouts punitive for sellers who fall just short of a single target.
        </p>

        <h2 className={h2Class}>Seller protection mechanisms</h2>
        <p>
          The core problem with any earnout is that once you close the sale, the buyer controls the business. Your financial outcome depends on someone else&apos;s decisions. The protections below are not optional &mdash; they are the difference between an earnout that pays and one that becomes a litigation expense. These protections should be addressed during the{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">letter of intent</Link>{" "}
          stage, not left for definitive documents.
        </p>

        <h3 className={h3Class}>Reporting rights</h3>
        <p>
          Require monthly or quarterly financial statements prepared using the same accounting policies in effect before close. You should have the right to review these statements within 30 days of each period-end and to request supporting documentation for any line item. Without reporting rights, you are flying blind until the earnout measurement date &mdash; and by then it may be too late to object to changes that reduced your payout.
        </p>

        <h3 className={h3Class}>Operational covenants</h3>
        <p>
          Negotiate specific covenants restricting the buyer from taking actions that would foreseeably reduce earnout metrics. Common provisions include: maintaining historical pricing within a 5% band, not terminating employees who directly generate revenue, continuing to invest in marketing and sales at no less than historical levels, and not diverting revenue opportunities to affiliated entities. These covenants must be specific. A general &ldquo;operate in good faith&rdquo; clause is nearly unenforceable.
        </p>

        <h3 className={h3Class}>Dispute resolution</h3>
        <p>
          Specify that disagreements over earnout calculations are resolved by an independent accounting firm (typically a Big Four or regional firm agreed upon at signing). The independent accountant&apos;s determination should be final and binding. This is faster and cheaper than litigation. Avoid arbitration panels with multiple arbitrators &mdash; they add cost and delay. The purchase agreement should also allocate the cost of the independent accountant based on which party&apos;s position was further from the final determination.
        </p>

        <h3 className={h3Class}>Anti-sandbagging and acceleration</h3>
        <p>
          An <strong>anti-sandbagging clause</strong> prevents the buyer from deliberately depressing performance to avoid earnout payments. While proving intent is difficult, the clause shifts the burden and creates a basis for a claim if the buyer&apos;s post-close actions are inconsistent with how a reasonable operator would manage the business. An <strong>acceleration clause</strong> triggers full payment of the remaining earnout if the buyer sells the company, undergoes a change of control, or materially breaches the operational covenants during the earnout period.
        </p>

        <h2 className={h2Class}>Tax treatment of earnout payments</h2>
        <p>
          The tax consequences of an earnout can materially affect your after-tax proceeds. Under IRC Section 453, sellers have two primary options for reporting earnout income.
        </p>
        <p>
          <strong>Installment method (Section 453):</strong> You report gain proportionally as payments are received. If the earnout has a stated maximum, you allocate your basis and report capital gains as each payment arrives. This defers tax and allows earnout payments to be taxed at long-term capital gains rates (currently 20% federal plus 3.8% net investment income tax for high earners) to the extent they represent gain on the sale of a capital asset.
        </p>
        <p>
          <strong>Open transaction method:</strong> If the earnout has no maximum (uncapped), you may be able to treat it as an open transaction, recovering your full basis first before reporting any gain. The IRS applies this treatment narrowly, and most tax advisors recommend structuring earnouts with a stated maximum to qualify cleanly for installment treatment.
        </p>
        <p>
          One critical distinction: earnout payments attributable to the seller&apos;s <strong>post-closing employment or consulting services</strong> are taxed as ordinary income, not capital gains. If you stay on as a consultant during the earnout period, ensure the purchase agreement clearly separates earnout consideration (capital gains treatment) from compensation for services (ordinary income). Blurring this line can result in the entire earnout being recharacterized as compensation, increasing your effective tax rate by 15 to 20 percentage points. Your tax advisor should review the earnout language before signing the{" "}
          <Link href="/learn/closing-process" className="text-apple-accent hover:underline">closing documents</Link>.
        </p>

        <h2 className={h2Class}>Common pitfalls sellers face</h2>
        <p>
          Understanding how sellers lose money on earnouts is as valuable as knowing how to structure them. These patterns repeat across hundreds of search fund exits.
        </p>

        <h3 className={h3Class}>Buyer manipulation of metrics</h3>
        <p>
          The most frequent complaint in earnout disputes is that the buyer changed how the business operates in ways that reduced the earnout metric. Examples include: loading corporate overhead onto the acquired entity, redirecting sales leads to a sister company, raising prices to increase short-term margin but depressing volume, or accelerating expenses into the earnout measurement period. According to the ABA&apos;s Private Target Mergers and Acquisitions Deal Points Study, 29% of earnout provisions surveyed lacked adequate protections against metric manipulation.
        </p>

        <h3 className={h3Class}>Loss of operational control</h3>
        <p>
          Once the deal closes, you are no longer the CEO. The buyer makes hiring, pricing, capital expenditure, and strategic decisions. If your earnout depends on growth and the buyer cuts the sales team or freezes marketing spend, your targets become unreachable. This is why operational covenants matter more than the earnout percentage itself. A 25% earnout with strong covenants is worth more than a 30% earnout with none. Sellers preparing for this transition should review strategies for{" "}
          <Link href="/learn/preparing-company-exit" className="text-apple-accent hover:underline">preparing their company for exit</Link>{" "}
          to ensure operational continuity post-close.
        </p>

        <h3 className={h3Class}>Measurement date gaming</h3>
        <p>
          Buyers can time major decisions around measurement dates. If the earnout measures trailing twelve-month revenue as of the anniversary date, a buyer might delay a large contract signing until the day after measurement, or pull forward a major expense into the measurement period. Protect against this by using rolling averages, requiring measurement over multiple periods, or specifying that the metric is calculated on both an annual and cumulative basis.
        </p>

        <h2 className={h2Class}>Negotiation strategy: when to accept, counter, or reject</h2>
        <p>
          Not every earnout proposal deserves a counter. Sometimes the right answer is no. Here is a framework for evaluating earnout proposals, informed by the psychology of deal negotiations. For more on the emotional dynamics at play, see the guide on{" "}
          <Link href="/learn/seller-psychology" className="text-apple-accent hover:underline">seller psychology</Link>.
        </p>

        <h3 className={h3Class}>Accept when:</h3>
        <ul className={ulClass}>
          <li>The earnout bridges a genuine valuation gap of 10&ndash;20% and you have high confidence in hitting the targets based on current trajectory</li>
          <li>The metric is revenue-based, the duration is 12&ndash;18 months, and the buyer has agreed to operational covenants and reporting rights</li>
          <li>You are staying on in a management role and will directly influence the metrics being measured</li>
          <li>The base consideration (cash at close) already covers your minimum acceptable price, and the earnout represents upside</li>
        </ul>

        <h3 className={h3Class}>Counter when:</h3>
        <ul className={ulClass}>
          <li>The buyer proposes EBITDA-based metrics &mdash; counter with revenue or gross profit instead</li>
          <li>The duration exceeds 18 months &mdash; counter with a shorter period and interim payment dates</li>
          <li>The earnout exceeds 25% of total consideration &mdash; propose a higher base price with a smaller contingent component</li>
          <li>The proposal lacks operational covenants &mdash; provide a specific list of required protections before discussing the earnout amount</li>
        </ul>

        <h3 className={h3Class}>Reject when:</h3>
        <ul className={ulClass}>
          <li>The earnout exceeds 35% of total consideration, effectively making the buyer&apos;s risk your risk</li>
          <li>The metric is EBITDA or net income and the buyer refuses to add covenant protections</li>
          <li>You are departing immediately after close and will have zero influence over performance</li>
          <li>The buyer has a track record of acquiring companies with earnouts and consistently under-paying (check references from prior sellers)</li>
          <li>You have competing offers with more certain consideration &mdash; a bird in hand is worth more than a contingent payment</li>
        </ul>
        <p>
          Remember that an earnout is not free money for the seller &mdash; it transfers risk from the buyer to you. Every dollar in the earnout is a dollar of uncertainty. Price that uncertainty by discounting the expected earnout value by 25% to 40% when comparing offers, depending on the strength of protections and your confidence in the metrics. If you are evaluating multiple paths, the{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">exit strategies guide</Link>{" "}
          provides a broader framework for weighing your options.
        </p>

        <h2 className={h2Class}>Alternatives to earnouts</h2>
        <p>
          Before accepting an earnout, consider whether alternative deal structures achieve the same goal with less risk. A{" "}
          <Link href="/learn/vendor-take-back-financing" className="text-apple-accent hover:underline">vendor take-back note</Link>{" "}
          (seller financing) gives the buyer deferred payments without tying them to performance metrics &mdash; you get paid as long as the business stays solvent, regardless of whether it hits growth targets. The tradeoff is that seller notes typically carry lower total consideration than an earnout at maximum payout, but the payments are more certain.
        </p>
        <p>
          Other alternatives include{" "}
          <Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">working capital adjustments</Link>{" "}
          that address specific valuation concerns without contingent payments, or an equity rollover where you retain a minority stake in the business and participate in future upside directly. Each has different tax, risk, and liquidity implications. The best deal structures often combine elements: a meaningful cash payment at close, a modest seller note, and a small, well-protected earnout tied to a single clear metric.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What percentage of the purchase price should I accept as an earnout?</h3>
        <p>
          Most M&amp;A advisors recommend keeping the earnout below 20&ndash;25% of total consideration. Above that threshold, you are bearing a disproportionate share of the buyer&apos;s risk. If the buyer insists on 30%+ contingent consideration, push for a higher base price or explore alternative structures like seller financing that provide more payment certainty.
        </p>

        <h3 className={h3Class}>Can a buyer deliberately tank earnout metrics to avoid paying?</h3>
        <p>
          Yes, and it happens. Courts have recognized claims for breach of the implied covenant of good faith when buyers take actions specifically designed to reduce earnout payments. However, litigation is expensive and uncertain. The better protection is contractual: operational covenants, anti-sandbagging clauses, and acceleration triggers written into the purchase agreement before closing.
        </p>

        <h3 className={h3Class}>How are earnout payments taxed if I stay on as a consultant?</h3>
        <p>
          Payments tied to post-closing services are taxed as ordinary income (up to 37% federal rate), while earnout payments for the sale of the business qualify for capital gains treatment (20% federal rate plus 3.8% NIIT). The IRS scrutinizes arrangements where the seller provides services during the earnout period. Keep the earnout consideration and any consulting compensation in separate agreements with distinct payment terms to preserve capital gains treatment on the earnout.
        </p>

        <h3 className={h3Class}>Should I hire my own accountant to verify earnout calculations?</h3>
        <p>
          Absolutely. Your reporting rights are only useful if someone with accounting expertise reviews the statements. Budget $5,000 to $15,000 annually for an independent CPA to review the buyer&apos;s earnout calculations, verify that accounting policies have not changed, and flag any adjustments that deviate from the agreed methodology. This is a small cost relative to the earnout at stake.
        </p>

        <h3 className={h3Class}>What happens to my earnout if the buyer resells the business?</h3>
        <p>
          Without an acceleration clause, you may be left pursuing payment from a new owner who has no contractual obligation to you. Always include a provision that triggers immediate payment of the full remaining earnout upon a change of control, asset sale, or merger of the acquired entity. This is one of the most commonly overlooked protections in small-business M&amp;A.
        </p>
      </div>
    </article>
  );
}
