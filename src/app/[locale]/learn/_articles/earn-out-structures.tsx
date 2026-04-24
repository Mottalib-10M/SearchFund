import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function EarnOutStructuresArticle() {
  return (
    <article>
      <h1 className={h1Class}>Earn-Outs &amp; Contingent Consideration</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Earn-outs are one of the most powerful &mdash; and most
          contentious &mdash; tools in acquisition deal structuring.
          When a buyer and seller disagree on the <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">value of a business</Link>,
          an earn-out allows the business itself to resolve the
          disagreement by tying a portion of the purchase price to
          post-closing performance. Done well, earn-outs align
          incentives and create win-win outcomes. Done poorly, they
          breed resentment, litigation, and operational dysfunction.
          This guide covers when earn-outs make sense, how to structure
          them effectively, the accounting and tax implications, and
          the common pitfalls that derail earn-out arrangements. Earn-outs are a key part of <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">acquisition negotiation tactics</Link>.
        </p>

        <h2 className={h2Class}>When earn-outs make sense</h2>
        <p>
          Not every deal needs an earn-out, and using one when it is
          not appropriate can create more problems than it solves.
          Earn-outs are most effective in specific circumstances.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Valuation gap:</strong> The most common use case.
            The seller believes the business is worth &euro;6 million
            based on projected growth; the buyer is willing to pay
            &euro;4.5 million based on trailing performance. An earn-out
            of up to &euro;1.5 million tied to achieving the projected
            growth lets both parties proceed without conceding their
            valuation position.
          </li>
          <li>
            <strong>Performance uncertainty:</strong> When the business
            has significant new contracts, products, or initiatives
            that have not yet generated meaningful revenue, an earn-out
            lets the buyer pay for those opportunities if and when they
            materialize, rather than paying upfront for unrealized
            potential.
          </li>
          <li>
            <strong>Seller transition involvement:</strong> If the
            seller&apos;s continued involvement is critical to the
            business (key customer relationships, specialized knowledge),
            an earn-out incentivizes the seller to remain engaged and
            ensure a successful transition.
          </li>
          <li>
            <strong>Industry-specific risk:</strong> In industries
            with inherent performance volatility (seasonal businesses,
            project-based businesses, businesses dependent on
            government contracts), earn-outs can help manage timing
            risk around revenue recognition.
          </li>
        </ul>
        <p>
          Conversely, earn-outs are generally a poor fit when the seller
          wants a clean break, when the buyer plans significant
          operational changes that would distort earn-out metrics, or
          when the business is mature and stable with highly predictable
          financial performance.
        </p>

        <h2 className={h2Class}>Structuring earn-out metrics</h2>
        <p>
          The choice of earn-out metric is the most critical structural
          decision. The right metric aligns incentives, is objectively
          measurable, and is resistant to manipulation by either party.
        </p>

        <h3 className={h3Class}>EBITDA-based earn-outs</h3>
        <p>
          EBITDA is the most common earn-out metric because it captures
          both revenue growth and operational efficiency. However,
          EBITDA is susceptible to buyer manipulation through
          discretionary expenses &mdash; the buyer could load the
          business with corporate overhead allocations, management fees,
          or accelerated spending that depress EBITDA without reflecting
          genuine business deterioration. If using EBITDA, you must
          include detailed definitions of what is included and excluded
          from the calculation, along with sandbox provisions
          (discussed below).
        </p>

        <h3 className={h3Class}>Revenue-based earn-outs</h3>
        <p>
          Revenue is harder to manipulate than EBITDA because it sits
          at the top of the income statement, above discretionary
          expenses. Revenue-based earn-outs are particularly appropriate
          for businesses in growth mode where the buyer and seller agree
          that revenue growth is the primary value driver. The drawback
          is that revenue-based earn-outs do not incentivize
          profitability &mdash; a seller might push for revenue at any
          cost (discounting, unprofitable contracts) to maximize their
          earn-out.
        </p>

        <h3 className={h3Class}>Gross profit-based earn-outs</h3>
        <p>
          Gross profit strikes a balance between revenue and EBITDA. It
          captures pricing discipline and cost of goods management
          without being distorted by below-the-line expenses that the
          buyer controls. Gross profit works well for distribution,
          manufacturing, and services businesses where the seller has
          direct influence over pricing and direct costs.
        </p>

        <h3 className={h3Class}>Customer-metric earn-outs</h3>
        <p>
          In some situations, financial metrics are less appropriate
          than operational ones. Customer retention rates, new customer
          acquisitions, contract renewals, or recurring revenue metrics
          can serve as earn-out triggers. These work well when the
          seller&apos;s primary contribution to the transition is
          preserving and growing the customer base. They are harder to
          manipulate but can be more subjective and harder to audit.
        </p>

        <h2 className={h2Class}>Measurement periods</h2>
        <p>
          The measurement period defines when and how earn-out
          performance is evaluated.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Duration:</strong> Most earn-outs use measurement
            periods of 1&ndash;3 years, with 2 years being the most
            common. Shorter periods (12 months) are simpler but may
            not capture the full impact of growth initiatives. Longer
            periods (3+ years) increase uncertainty and the
            probability of disputes.
          </li>
          <li>
            <strong>Annual vs cumulative:</strong> Annual earn-outs
            measure performance in each year independently (e.g.,
            &ldquo;seller earns &euro;250K if Year 1 EBITDA exceeds
            &euro;1.5M, and &euro;250K if Year 2 EBITDA exceeds
            &euro;1.75M&rdquo;). Cumulative earn-outs measure total
            performance over the entire period (e.g., &ldquo;seller
            earns &euro;500K if cumulative two-year EBITDA exceeds
            &euro;3.25M&rdquo;). Annual measurement provides more
            frequent payouts and reduces the risk of a single bad
            year wiping out the entire earn-out.
          </li>
          <li>
            <strong>Catch-up provisions:</strong> Some earn-outs
            include &ldquo;catch-up&rdquo; mechanisms where
            underperformance in one period can be offset by
            overperformance in a subsequent period. These are
            seller-friendly provisions that reduce the risk of
            timing-related shortfalls.
          </li>
          <li>
            <strong>Acceleration clauses:</strong> If the buyer sells
            the business or undergoes a change of control during the
            earn-out period, an acceleration clause triggers payment
            of the maximum earn-out amount. This protects the seller
            from a scenario where the buyer flips the business before
            the earn-out is fully measured.
          </li>
        </ul>

        <h2 className={h2Class}>Earn-out calculation mechanics</h2>
        <p>
          The specific mechanics of how the earn-out is calculated must
          be spelled out in granular detail. Ambiguity in calculation
          methodology is the leading cause of earn-out disputes.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Threshold vs tiered structures:</strong> A
            threshold earn-out pays nothing below the target and the
            full amount at or above the target (&ldquo;all or
            nothing&rdquo;). A tiered structure pays proportionally
            based on performance within a range. Tiered structures are
            generally fairer and reduce the incentive for aggressive
            accounting near threshold boundaries.
          </li>
          <li>
            <strong>Cap and floor:</strong> Define the maximum and
            minimum earn-out payments. The cap protects the buyer from
            unexpectedly large payouts. The floor (if any) guarantees
            the seller a minimum payment regardless of performance.
          </li>
          <li>
            <strong>Accounting policies:</strong> Specify which
            accounting standards and policies will govern the earn-out
            calculation. Will the business continue to use the same
            accounting policies as before the acquisition? If the buyer
            changes policies (revenue recognition, depreciation methods,
            inventory valuation), how will the earn-out be adjusted?
          </li>
          <li>
            <strong>Working capital adjustments:</strong> If the
            earn-out is EBITDA-based, address how working capital
            changes will be treated. A buyer who aggressively extends
            payment terms with suppliers could artificially boost
            short-term cash flow and EBITDA.
          </li>
        </ul>

        <h2 className={h2Class}>Sandbox provisions</h2>
        <p>
          Sandbox provisions are contractual protections that govern how
          the buyer must operate the business during the earn-out period.
          They exist to prevent the buyer from taking actions that
          undermine the seller&apos;s ability to achieve the earn-out
          targets. Sandbox provisions are the single most important
          structural protection in any earn-out arrangement.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Ordinary course of business:</strong> The most
            basic sandbox provision requires the buyer to operate the
            business &ldquo;in the ordinary course, consistent with
            past practice.&rdquo; This prevents the buyer from making
            radical changes that would depress earn-out metrics.
          </li>
          <li>
            <strong>Budget and spending commitments:</strong> More
            specific provisions may require the buyer to maintain
            minimum levels of spending on sales and marketing, R&amp;D,
            or other growth-related activities. This prevents the buyer
            from cutting investment to boost short-term EBITDA at the
            expense of revenue growth that drives the earn-out.
          </li>
          <li>
            <strong>Prohibited actions:</strong> Common prohibited
            actions during the earn-out period include merging the
            business with other operations (making financial separation
            impossible), diverting revenue or customers to affiliated
            entities, changing compensation structures for key
            employees, or entering into related-party transactions
            that are not at arm&apos;s length.
          </li>
          <li>
            <strong>Buyer&apos;s perspective:</strong> Buyers should
            resist overly restrictive sandbox provisions that prevent
            them from managing the business effectively. The key is
            finding provisions that protect the earn-out from
            manipulation without handcuffing the buyer&apos;s ability
            to make legitimate operational decisions.
          </li>
        </ul>

        <h2 className={h2Class}>Dispute resolution mechanisms</h2>
        <p>
          Even well-structured earn-outs can generate disagreements
          about calculation methodology, accounting treatment, or
          whether sandbox provisions were violated. A strong dispute
          resolution mechanism is essential.
        </p>

        <h3 className={h3Class}>Independent accountant</h3>
        <p>
          The most common mechanism. The purchase agreement designates
          an independent accounting firm (typically one of the Big Four
          or a reputable regional firm that has no prior relationship
          with either party) to resolve disputed calculations. The
          independent accountant&apos;s determination is typically
          binding and non-appealable. Specify in advance how the
          accountant will be selected, what procedures they will follow,
          and how costs will be allocated (usually split, or borne by
          the party whose position deviates further from the
          accountant&apos;s determination).
        </p>

        <h3 className={h3Class}>Arbitration</h3>
        <p>
          For disputes that go beyond calculation (e.g., allegations
          that the buyer violated sandbox provisions), arbitration
          provides a faster and less expensive resolution than
          litigation. Choose an arbitration institution (ICC for
          international deals, AAA or JAMS in the US, DIS in Germany,
          CMAP in France) and specify the rules, seat, and language.
          Single-arbitrator proceedings are typical for earn-out
          disputes involving amounts under &euro;5 million.
        </p>

        <h3 className={h3Class}>Escalation procedures</h3>
        <p>
          Before engaging an independent accountant or arbitrator,
          require a good-faith negotiation period (typically 30 days)
          where the parties attempt to resolve the disagreement
          directly. Many earn-out disputes are resolved at this stage
          when both parties understand the cost and uncertainty of
          formal proceedings.
        </p>

        <h2 className={h2Class}>Tax treatment of earn-outs</h2>

        <h3 className={h3Class}>US tax treatment</h3>
        <p>
          In the United States, earn-out payments are generally
          treated as additional purchase price and taxed as capital
          gains to the seller, provided the earn-out is properly
          structured as contingent consideration in connection with
          the sale of a business. However, the IRS may recharacterize
          earn-out payments as compensation if the seller continues to
          work in the business and the payments are contingent on
          continued employment. To preserve capital gains treatment,
          clearly separate the earn-out from any employment or
          consulting arrangement, and tie earn-out metrics to business
          performance rather than the seller&apos;s individual
          contribution.
        </p>
        <p>
          Under the installment sale method (IRC Section 453), sellers
          can defer recognition of capital gains on earn-out payments
          until they are received, spreading the tax burden over the
          earn-out period. However, if any portion of the selling price
          constitutes &ldquo;ordinary income property,&rdquo; the
          installment method may not apply to that portion.
        </p>

        <h3 className={h3Class}>European tax treatment</h3>
        <p>
          Tax treatment of earn-outs varies across European
          jurisdictions:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>France:</strong> Earn-out payments (compl&eacute;ment
            de prix) are generally taxed as capital gains at the time
            the right to payment becomes certain (fait g&eacute;n&eacute;rateur).
            The applicable tax rate depends on the seller&apos;s holding
            period and whether the business qualifies for enhanced
            abattements (reduced rates for holdings of 2+ or 8+ years).
            The social charges (pr&eacute;l&egrave;vements sociaux) apply
            in addition to income tax.
          </li>
          <li>
            <strong>Germany:</strong> Earn-out payments are typically
            treated as part of the Kaufpreis (purchase price) and taxed
            as capital gains under the Teileink&uuml;nfteverfahren
            (partial-income method), where only 60% of the gain is
            taxable. However, if the earn-out is structured as
            compensation for post-closing services, it will be taxed
            as ordinary income at marginal rates up to 45%.
          </li>
          <li>
            <strong>United Kingdom:</strong> Earn-outs are treated as
            deferred consideration for capital gains tax purposes. The
            seller must estimate the value of the earn-out right at
            closing and pay CGT on that estimated value. If the actual
            earn-out payments differ from the estimate, adjustments are
            made in subsequent tax years. The Marren v Ingles precedent
            governs the treatment of &ldquo;unascertainable&rdquo;
            consideration.
          </li>
        </ul>

        <h2 className={h2Class}>Accounting implications</h2>

        <h3 className={h3Class}>US GAAP (ASC 805)</h3>
        <p>
          Under ASC 805 (Business Combinations), the buyer must
          recognize the fair value of contingent consideration (including
          earn-outs) at the acquisition date. Subsequent changes in the
          fair value of the earn-out liability are recognized in the
          buyer&apos;s income statement &mdash; creating earnings
          volatility that can be material for smaller acquirers. If
          the earn-out is classified as equity (settled in shares rather
          than cash), it is not remeasured after initial recognition.
          This distinction has important implications for how the
          earn-out is structured.
        </p>

        <h3 className={h3Class}>IFRS 3 (Business Combinations)</h3>
        <p>
          IFRS 3 has a similar framework to ASC 805. The acquirer
          recognizes the fair value of contingent consideration at the
          acquisition date. Contingent consideration classified as a
          financial liability is remeasured at fair value at each
          reporting date, with changes recognized in profit or loss.
          Contingent consideration classified as equity is not
          subsequently remeasured. The key difference from US GAAP is
          that IFRS 3 requires more extensive disclosures about the
          terms of contingent consideration arrangements and the
          range of potential outcomes.
        </p>

        <h2 className={h2Class}>Alternatives to earn-outs</h2>
        <p>
          Earn-outs are not the only tool for bridging valuation gaps or
          managing post-closing risk. Consider these alternatives when
          earn-outs are impractical or undesirable.
        </p>

        <h3 className={h3Class}>Holdbacks</h3>
        <p>
          A portion of the purchase price (typically 10&ndash;15%) is
          held in escrow and released to the seller after a defined
          period (12&ndash;18 months), subject to adjustment for
          indemnification claims or working capital true-ups. Holdbacks
          are simpler than earn-outs because they do not require
          ongoing performance measurement. They protect the buyer
          against post-closing surprises but do not bridge a valuation
          gap in the way an earn-out does.
        </p>

        <h3 className={h3Class}>Escrow arrangements</h3>
        <p>
          Similar to holdbacks but held by an independent escrow agent
          rather than retained by the buyer. Escrow provides the seller
          with greater confidence that the funds exist and will be
          released according to the agreed terms. Escrow agent fees
          are typically $3K&ndash;$10K annually.
        </p>

        <h3 className={h3Class}>Seller notes</h3>
        <p>
          A <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">seller note</Link> (vendor loan) defers a portion of the purchase
          price as debt owed by the buyer to the seller. Unlike an
          earn-out, the seller note amount is fixed and does not depend
          on post-closing performance. The seller takes credit risk on
          the buyer but avoids the uncertainty and potential disputes
          of an earn-out. Seller notes can be combined with earn-outs
          to create layered deal structures.
        </p>

        <h3 className={h3Class}>Equity rollover</h3>
        <p>
          The seller retains a minority equity stake (typically
          10&ndash;25%) in the business post-acquisition. This aligns
          the seller&apos;s interests with the buyer&apos;s long-term
          success and provides the seller with upside participation
          if the business grows. Equity rollover avoids the measurement
          and dispute issues of earn-outs but introduces minority
          shareholder governance considerations.
        </p>

        <h2 className={h2Class}>Common pitfalls and how to avoid them</h2>
        <ol className={olClass}>
          <li>
            <strong>Ambiguous metric definitions:</strong> The number
            one cause of earn-out disputes. Define every term with
            precision. What exactly is included in &ldquo;revenue&rdquo;?
            How is &ldquo;EBITDA&rdquo; calculated? Are extraordinary
            items excluded? Is intercompany revenue included? Attach
            a sample calculation as an exhibit to the purchase agreement.
          </li>
          <li>
            <strong>Misaligned incentives during the earn-out
            period:</strong> If the seller is still involved in the
            business, ensure their compensation (salary, benefits) is
            separate from the earn-out and does not create perverse
            incentives. A seller who earns a large earn-out by
            deferring expenses or accelerating revenue creates
            problems that the buyer inherits after the earn-out period.
          </li>
          <li>
            <strong>Integration conflicts:</strong> The buyer wants to
            integrate the acquired business into their operations, but
            integration activities may distort earn-out metrics. Address
            this upfront: will integration costs be excluded from
            EBITDA? How will shared services be allocated? What happens
            if the buyer merges the business with another entity?
          </li>
          <li>
            <strong>Insufficient sandbox protections:</strong> Without
            adequate sandbox provisions, the buyer has excessive control
            over earn-out outcomes. At minimum, require the buyer to
            operate the business in the ordinary course and prohibit
            actions specifically designed to reduce earn-out payments.
          </li>
          <li>
            <strong>No acceleration on change of control:</strong> If
            the buyer sells the business during the earn-out period,
            the seller may lose their earn-out entirely. Always include
            a change-of-control acceleration clause.
          </li>
          <li>
            <strong>Tax mischaracterization:</strong> Failure to
            properly structure the earn-out can result in the payments
            being taxed as ordinary income rather than capital gains.
            Review our guide on <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">tax optimization</Link>, engage a tax advisor early, and ensure the purchase
            agreement clearly characterizes earn-out payments as
            contingent purchase price.
          </li>
        </ol>

        <h2 className={h2Class}>Real-world structuring examples</h2>

        <h3 className={h3Class}>Growth-stage services business</h3>
        <p>
          A search fund acquires a digital marketing agency for
          &euro;3.5 million. The seller believes the business is worth
          &euro;5 million based on a recently signed enterprise client.
          Structure: &euro;3 million at closing, plus an earn-out of up
          to &euro;1.5 million based on revenue exceeding &euro;4 million
          in Year 1 and &euro;4.8 million in Year 2, paid on a
          pro-rata sliding scale. The metric is revenue (not EBITDA)
          because the new client contract creates revenue certainty but
          the margin profile is unknown. Sandbox provisions require the
          buyer to maintain sales headcount and marketing spend at
          pre-acquisition levels.
        </p>

        <h3 className={h3Class}>Owner-dependent professional practice</h3>
        <p>
          A search fund acquires an accounting firm for &euro;2.2
          million. The founding partner manages 60% of client
          relationships personally. Structure: &euro;1.8 million at
          closing, plus a two-year earn-out of up to &euro;400K based
          on client revenue retention (measured as the percentage of
          Year 0 client revenue still active in Years 1 and 2). The
          founding partner commits to a 24-month transition with a
          structured client introduction schedule. This earn-out
          protects the buyer against client attrition while
          incentivizing the seller to ensure a thorough handover.
        </p>

        <h2 className={h2Class}>The bottom line</h2>
        <p>
          Earn-outs are a powerful tool for bridging valuation gaps and
          managing acquisition risk, but they require careful
          structuring to deliver on their promise. The keys to a
          successful earn-out are choosing an objective, measurable
          metric that both parties can influence fairly; defining
          calculation methodology with surgical precision; including
          sandbox provisions that prevent manipulation; and establishing
          a clear dispute resolution mechanism for the inevitable
          disagreements. When used appropriately and structured
          thoughtfully, earn-outs allow search fund entrepreneurs to
          acquire businesses they might otherwise be unable to afford,
          while giving sellers the opportunity to realize full value
          for what they have built.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What percentage of the purchase price should an earn-out represent?</h3>
        <p>
          According to the American Bar Association's 2024 Private Target M&A Deal Points Study, earn-outs in private company acquisitions typically represent 10-30% of the total purchase price. For search fund acquisitions, the sweet spot is usually 15-25%. An earn-out below 10% often is not meaningful enough to bridge a valuation gap, while one above 35% signals that the buyer and seller have fundamentally different views of the business's value -- a red flag that should prompt deeper analysis of why the gap exists. In IESE's 2024 International Search Fund Study, deals with earn-outs in the 15-25% range had the highest completion rates and lowest post-closing dispute rates.
        </p>

        <h3 className={h3Class}>How often do earn-out disputes end up in litigation?</h3>
        <p>
          Earn-out disputes are disturbingly common. According to research from Shareholder Representative Services (SRS Acquiom), approximately 65-75% of deals with earn-outs experience some level of disagreement over the earn-out calculation or payment. However, only about 10-15% of these disputes escalate to formal arbitration or litigation, with most resolved through negotiation or the independent accountant mechanism specified in the{" "}
          <Link href="/learn/purchase-agreement-apa-vs-spa" className="text-apple-accent hover:underline">purchase agreement</Link>. The most effective way to reduce dispute risk is to attach a sample earn-out calculation as an exhibit to the agreement, define every term with precision, and include clear sandbox provisions governing how the buyer must operate the business during the measurement period.
        </p>

        <h3 className={h3Class}>Should a search fund buyer prefer revenue-based or EBITDA-based earn-outs?</h3>
        <p>
          As a buyer, you generally have more control over revenue-based earn-outs because revenue is harder for either party to manipulate -- it sits at the top of the income statement above discretionary expenses. However, revenue-based earn-outs carry the risk that the seller pushes for revenue at any cost, accepting unprofitable contracts or deep discounts to hit targets. EBITDA-based earn-outs align incentives around profitability but give buyers more levers to manipulate results through overhead allocations, management fees, or accelerated spending. For most search fund deals, the pragmatic choice depends on the seller's post-closing role: if the seller is staying involved, use revenue (harder for the buyer to manipulate); if the seller is departing, use{" "}
          <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">adjusted EBITDA</Link> with strong sandbox provisions.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>American Bar Association, <em>Private Target M&A Deal Points Study</em> (2024)</li>
          <li>SRS Acquiom, <em>M&A Deal Terms Study: Earnout Trends</em> (2024)</li>
          <li>IESE Business School, <em>International Search Fund Study</em> (2024)</li>
        </ul>
      </div>
    </article>
  );
}
