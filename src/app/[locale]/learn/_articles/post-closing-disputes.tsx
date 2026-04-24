import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function PostClosingDisputesArticle() {
  return (
    <article>
      <h1 className={h1Class}>Post-Closing Disputes: Earn-Outs, Indemnities &amp; Resolution</h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          The signing and closing of an acquisition are often celebrated as the
          finish line, but experienced acquirers know that the post-closing
          period frequently brings its own set of challenges &mdash; including
          disputes. Working capital adjustments, earn-out calculations,
          indemnification claims, and disagreements over{" "}
          <Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">
            representations and warranties
          </Link>{" "}
          are common friction points that can consume significant time, money,
          and management attention if not anticipated and managed properly.
          Post-closing disputes are not a sign that something went wrong in
          the deal process &mdash; they are an inherent feature of complex
          transactions where the interests of buyers and sellers diverge on
          matters of valuation, risk allocation, and performance measurement.
          This guide examines the most common categories of post-closing
          disputes, the resolution mechanisms available, and the strategies
          that experienced acquirers use to prevent disputes from arising in
          the first place.
        </p>

        <h2 className={h2Class}>Working capital adjustment disputes</h2>
        <p>
          Working capital adjustments are one of the most frequent sources
          of post-closing disagreement. In most acquisition agreements, the
          purchase price is set based on a &ldquo;target&rdquo; level of
          net working capital (typically defined as current assets minus
          current liabilities, often with specific inclusions and exclusions).
          The actual net working capital is measured at or near the closing
          date, and the purchase price is adjusted upward or downward based
          on the difference between the target and the actual amount.
        </p>

        <h3 className={h3Class}>Common areas of contention</h3>
        <ul className={ulClass}>
          <li>
            <strong>Classification of items:</strong> Disputes frequently
            arise over whether specific items should be included in or
            excluded from the working capital calculation. Is a particular
            accrual a current liability or a long-term obligation? Should
            deferred revenue be treated as a working capital item? Are
            certain receivables collectible, and should doubtful accounts
            be reserved? These classification questions can swing the
            working capital figure by material amounts, and the answers
            are often genuinely ambiguous. For a deeper understanding of
            these mechanics, see our guide on{" "}
            <Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">
              working capital adjustments
            </Link>.
          </li>
          <li>
            <strong>Accounting policy changes:</strong> If the buyer
            changes accounting policies after closing (or if the seller
            changed policies shortly before closing to inflate working
            capital), disagreements arise over whether the closing working
            capital should be calculated under the historical policies,
            the new policies, or GAAP/IFRS as applied by an independent
            accountant.
          </li>
          <li>
            <strong>Cut-off issues:</strong> The timing of when revenues
            and expenses are recognized around the closing date can
            significantly affect the working capital calculation. Sellers
            may accelerate revenue recognition or defer expenses in the
            weeks leading up to closing to inflate working capital; buyers
            may attempt the reverse after closing to justify a downward
            adjustment.
          </li>
          <li>
            <strong>Seasonal businesses:</strong> For businesses with
            seasonal fluctuations, the working capital target may not
            accurately reflect the normal level of working capital at the
            specific time of year when closing occurs. A target based on
            an annual average may over- or understate the appropriate
            level for a particular closing date.
          </li>
        </ul>

        <h3 className={h3Class}>Best practices for prevention</h3>
        <p>
          The most effective way to prevent working capital disputes is
          precision in the purchase agreement. Define every component of
          the working capital calculation with specificity, including which
          accounts are included and excluded, which accounting policies
          apply, and how cut-off will be handled. Attach a sample working
          capital calculation to the purchase agreement as an exhibit, using
          actual financial data, so that both parties can see exactly how
          the methodology works in practice.
        </p>

        <h2 className={h2Class}>Earn-out disputes</h2>
        <p>
          Earn-out disputes are among the most contentious and litigated
          issues in post-closing M&amp;A practice. An{" "}
          <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
            earn-out
          </Link>{" "}
          ties a portion of the purchase price to the post-closing
          performance of the business, which creates an inherent tension
          between the seller (who wants to maximize the earn-out payment)
          and the buyer (who controls the business and may have different
          priorities than maximizing the earn-out metric).
        </p>

        <h3 className={h3Class}>Metric calculation disputes</h3>
        <p>
          The most common earn-out disputes involve disagreements over how
          the earn-out metric (revenue, EBITDA, gross profit, or another
          measure) is calculated. The buyer may apply accounting treatments,
          allocate corporate overhead, or classify extraordinary items in
          ways that reduce the earn-out metric. The seller may argue that
          these treatments deviate from the methodology contemplated by the
          parties at closing, or that they violate the contractual
          definitions in the purchase agreement. Even when the purchase
          agreement defines the earn-out metric in detail, edge cases
          inevitably arise that the contract does not explicitly address.
        </p>

        <h3 className={h3Class}>Operational conduct disputes</h3>
        <p>
          A second category of earn-out disputes involves allegations that
          the buyer operated the business in ways that undermined the
          seller&apos;s ability to achieve the earn-out targets. Common
          allegations include: the buyer diverted revenue or customers to
          affiliated entities; the buyer reduced sales and marketing
          spending, cutting growth in favor of short-term profitability; the
          buyer changed pricing strategies that reduced revenue; the buyer
          merged the acquired business with other operations, making it
          impossible to track earn-out metrics separately; or the buyer
          terminated key employees whose departure harmed business
          performance.
        </p>
        <p>
          Most purchase agreements include an implied or express covenant
          requiring the buyer to use &ldquo;commercially reasonable
          efforts&rdquo; to achieve the earn-out targets, but the scope
          of this obligation is frequently disputed. Courts have generally
          held that the buyer is not required to subordinate its own
          business judgment to the seller&apos;s earn-out interests, but
          it cannot act in bad faith or deliberately undermine the earn-out.
          The distinction between legitimate business decisions and
          bad-faith conduct is inherently fact-specific and difficult to
          adjudicate.
        </p>

        <h2 className={h2Class}>Indemnification claims</h2>
        <p>
          Indemnification provisions in the purchase agreement allocate
          risk for pre-closing liabilities, breaches of representations
          and warranties, and other specified matters. Post-closing
          indemnification claims are common and can involve significant
          amounts.
        </p>

        <h3 className={h3Class}>Common categories of indemnification claims</h3>
        <ul className={ulClass}>
          <li>
            <strong>Breach of representations and warranties:</strong> The
            seller represented that the financial statements were prepared
            in accordance with GAAP, that there were no undisclosed
            liabilities, that all material contracts were in good standing,
            or that the business was in compliance with all applicable laws.
            Post-closing, the buyer discovers that one or more of these
            representations was inaccurate, and seeks indemnification for
            the resulting losses.
          </li>
          <li>
            <strong>Tax indemnities:</strong> Pre-closing tax liabilities
            that are discovered or assessed after closing are a frequent
            source of indemnification claims. These may include income tax
            deficiencies, sales and use tax exposure, employment tax issues,
            or transfer pricing adjustments. Tax indemnities are often
            subject to special provisions (longer survival periods, higher
            or no caps) because tax assessments can take years to materialize.
          </li>
          <li>
            <strong>Environmental liabilities:</strong> In acquisitions
            of manufacturing, industrial, or real estate businesses,
            pre-closing environmental contamination or non-compliance can
            give rise to substantial remediation costs that the buyer
            seeks to recover through indemnification.
          </li>
          <li>
            <strong>Litigation:</strong> If the business is named in
            litigation or regulatory proceedings that were pending or
            threatened at the time of closing (whether disclosed or
            undisclosed), the buyer may seek indemnification for defense
            costs and any adverse judgments or settlements.
          </li>
          <li>
            <strong>Employee-related claims:</strong> Pre-closing employment
            practices (wage and hour violations, discrimination claims,
            benefit plan issues) can surface after closing, triggering
            indemnification claims against the seller.
          </li>
        </ul>

        <h3 className={h3Class}>Indemnification mechanics</h3>
        <p>
          The effectiveness of indemnification provisions depends on the
          specific mechanics negotiated in the purchase agreement. Key
          elements include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Survival periods:</strong> Representations and warranties
            typically survive for 12 to 24 months after closing, during which
            the buyer must assert any claims. Fundamental representations
            (title, authority, capitalization) and certain special matters
            (tax, environmental) often have longer survival periods, sometimes
            extending to the applicable statute of limitations.
          </li>
          <li>
            <strong>Baskets (deductible or tipping):</strong> A deductible
            basket requires the buyer&apos;s aggregate claims to exceed a
            threshold (typically 0.5% to 1.5% of the purchase price) before
            the seller is liable, and the seller is liable only for amounts
            above the threshold. A tipping basket (also called a
            &ldquo;first dollar&rdquo; basket) requires claims to exceed
            the same threshold, but once the threshold is met, the seller
            is liable for the full amount from the first dollar.
          </li>
          <li>
            <strong>Caps:</strong> The seller&apos;s total indemnification
            liability is typically capped at a percentage of the purchase
            price (commonly 10% to 20% for general representations, with
            higher or no caps for fundamental representations and fraud).
          </li>
          <li>
            <strong>Exclusive remedy:</strong> Most purchase agreements
            provide that indemnification is the buyer&apos;s exclusive
            post-closing remedy for breaches of representations and
            warranties, precluding common law fraud or negligence claims
            (except in cases of intentional fraud). This channeling of
            claims through the indemnification framework provides
            predictability for both parties.
          </li>
        </ul>

        <h2 className={h2Class}>Escrow and holdback provisions</h2>
        <p>
          Escrow and holdback provisions serve as security for the buyer&apos;s
          indemnification claims and other post-closing adjustments. A portion
          of the purchase price (typically 5% to 15%) is either held in escrow
          by an independent escrow agent or retained by the buyer, and is
          released to the seller after a defined period (usually aligned with
          the survival period for representations and warranties) subject to
          reduction for any valid claims.
        </p>

        <h3 className={h3Class}>Escrow vs. holdback</h3>
        <p>
          From the seller&apos;s perspective, escrow is preferable because
          the funds are held by a neutral third party and governed by an
          escrow agreement that specifies the conditions for release.
          Holdbacks are buyer-friendly because the buyer retains direct
          control of the funds, though the buyer is contractually obligated
          to release them according to the purchase agreement terms.
        </p>

        <h3 className={h3Class}>Disputes over escrow release</h3>
        <p>
          Escrow disputes typically arise at the end of the escrow period
          when the buyer seeks to retain some or all of the escrow funds
          to satisfy indemnification claims that the seller contests.
          The escrow agreement should include a clear process for
          resolution: a notice period for the buyer to assert claims,
          a response period for the seller to object, and a mechanism
          for resolving disputed claims (typically the same mechanism
          used for other purchase agreement disputes). Funds that are not
          subject to pending claims should be released promptly at the
          end of the escrow period.
        </p>
        <p>
          The interplay between escrow provisions and the{" "}
          <Link href="/learn/closing-process" className="text-apple-accent hover:underline">
            closing process
          </Link>{" "}
          is critical. Both parties should understand at signing exactly how
          the escrow will function, what triggers release, and what
          happens in the event of disagreement.
        </p>

        <h2 className={h2Class}>Dispute resolution mechanisms</h2>
        <p>
          The choice of dispute resolution mechanism is a critical
          negotiation point in the purchase agreement that is often
          underestimated by parties focused on the commercial terms.
          The three primary mechanisms are mediation, arbitration, and
          litigation, each with distinct advantages and drawbacks.
        </p>

        <h3 className={h3Class}>Mediation</h3>
        <p>
          Mediation is a voluntary, non-binding process in which a neutral
          mediator facilitates negotiation between the parties. Mediation
          is typically the least expensive and most time-efficient dispute
          resolution mechanism, and it preserves the relationship between
          the parties (which may be important if the seller remains involved
          in the business during an earn-out period or transition). Many
          purchase agreements include mediation as a mandatory first step
          before arbitration or litigation, requiring the parties to attempt
          mediation for a defined period (typically 30 to 60 days) before
          escalating.
        </p>

        <h3 className={h3Class}>Arbitration</h3>
        <p>
          Arbitration is a private, binding dispute resolution process
          conducted before one or more arbitrators. The key advantages of
          arbitration over litigation are privacy (arbitration proceedings
          and awards are not public), speed (arbitration typically resolves
          faster than litigation, particularly in jurisdictions with
          congested court dockets), expertise (the parties can select
          arbitrators with relevant subject matter expertise), and
          enforceability (arbitral awards are enforceable in over 170
          countries under the New York Convention, whereas court judgments
          often face enforcement challenges across borders).
        </p>
        <p>
          For cross-border acquisitions, arbitration is generally the
          preferred mechanism because of its international enforceability
          and the ability to select a neutral forum. Major arbitration
          institutions include the International Chamber of Commerce (ICC),
          the London Court of International Arbitration (LCIA), the American
          Arbitration Association (AAA/ICDR), and the Singapore International
          Arbitration Centre (SIAC). The arbitration clause should specify
          the institution, the rules, the number of arbitrators, the seat
          (which determines the procedural law), and the language.
        </p>

        <h3 className={h3Class}>Litigation</h3>
        <p>
          Litigation in national courts remains the default dispute
          resolution mechanism in the absence of a contractual arbitration
          clause. Litigation offers certain advantages: judges are publicly
          appointed and accountable, the right to appeal exists in most
          systems, and the process benefits from established procedural
          rules and precedent. However, litigation is typically slower, more
          expensive, public, and less predictable than arbitration,
          particularly for cross-border disputes where jurisdictional,
          choice-of-law, and enforcement issues add complexity.
        </p>

        <h3 className={h3Class}>Independent accountant for financial disputes</h3>
        <p>
          For disputes that are primarily financial in nature (working
          capital adjustments, earn-out calculations), many purchase
          agreements designate an independent accounting firm to resolve
          the dispute. This is usually faster and less expensive than
          formal arbitration or litigation, and the independent accountant
          brings technical expertise to complex accounting questions. The
          independent accountant&apos;s determination is typically binding
          and non-appealable (subject to challenge only for fraud or
          manifest error).
        </p>

        <h2 className={h2Class}>Limitation periods and procedural requirements</h2>
        <p>
          The enforceability of post-closing claims is constrained by both
          contractual limitation periods (the survival periods for
          representations and warranties discussed above) and statutory
          limitation periods (statutes of limitation that apply regardless
          of what the contract says).
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Contractual survival periods:</strong> Claims must be
            asserted within the contractually specified survival period.
            Claims not asserted within this period are extinguished,
            regardless of merit. Buyers must implement robust post-closing
            monitoring processes to identify and assert claims before
            survival periods expire.
          </li>
          <li>
            <strong>Notice requirements:</strong> Purchase agreements
            typically require the indemnified party to provide written
            notice of a claim to the indemnifying party within a specified
            period (often 30 to 60 days) after becoming aware of the
            facts giving rise to the claim. Failure to comply with notice
            requirements can result in the loss of indemnification rights,
            depending on the jurisdiction and the specific contractual
            language.
          </li>
          <li>
            <strong>Mitigation obligations:</strong> In most jurisdictions,
            the indemnified party has a duty to mitigate its losses.
            A buyer who fails to take reasonable steps to minimize the
            damage caused by a breach of representation may have its
            indemnification recovery reduced by the amount that could
            have been avoided through mitigation.
          </li>
          <li>
            <strong>Statutory limitations:</strong> Some statutory limitation
            periods cannot be shortened by contract (particularly those
            relating to fraud, tax, and certain regulatory matters).
            Parties should be aware of mandatory minimum limitation
            periods in the applicable jurisdictions.
          </li>
        </ul>

        <h2 className={h2Class}>Prevention strategies</h2>
        <p>
          The most effective approach to post-closing disputes is prevention.
          While disputes can never be entirely eliminated, careful deal
          structuring and thorough due diligence significantly reduce their
          frequency and severity.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Invest in thorough due diligence:</strong> The most
            common indemnification claims arise from issues that could have
            been identified during due diligence. A comprehensive{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence process
            </Link>{" "}
            reduces the likelihood of post-closing surprises and gives the
            buyer the information needed to negotiate appropriate
            protections in the purchase agreement.
          </li>
          <li>
            <strong>Draft precise contract language:</strong> Ambiguity in
            the purchase agreement is the root cause of most post-closing
            disputes. Invest the time and legal resources to define every
            key term precisely, attach sample calculations as exhibits, and
            address foreseeable edge cases explicitly. The cost of
            additional drafting is trivial compared to the cost of
            post-closing disputes.
          </li>
          <li>
            <strong>Align incentives:</strong> Where possible, structure the
            deal to align the parties&apos; interests during the post-closing
            period. If the seller will remain involved (through an earn-out,
            consulting agreement, or equity rollover), ensure that the
            structure incentivizes cooperation rather than adversarial
            behavior.
          </li>
          <li>
            <strong>Establish governance mechanisms:</strong> For complex
            earn-out arrangements, establish a joint committee or regular
            reporting mechanism that gives the seller visibility into the
            business&apos;s performance during the earn-out period. Regular
            communication and transparency reduce the suspicion and
            information asymmetry that fuel disputes.
          </li>
          <li>
            <strong>Use representations and warranties insurance (RWI):</strong>
            RWI policies, which have become increasingly common in M&amp;A
            transactions, allow the buyer to recover indemnification claims
            from an insurance policy rather than from the seller. This
            reduces the adversarial dynamic between buyer and seller, as
            the seller&apos;s liability is limited (or eliminated) and
            disputes are resolved with the insurer rather than with the
            counterparty to the transaction.
          </li>
          <li>
            <strong>Plan for{" "}
            <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
              post-acquisition integration
            </Link>{" "}
            carefully:</strong> Many disputes arise from integration
            decisions that were not contemplated or discussed during
            the deal process. Develop a detailed integration plan before
            closing, discuss it with the seller (particularly if the seller
            will remain involved), and ensure that integration activities
            are consistent with the obligations in the purchase agreement.
          </li>
        </ol>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How common are post-closing disputes in M&amp;A transactions?</h3>
        <p>
          Post-closing disputes are remarkably common. According to the American Bar Association&rsquo;s Private Target M&amp;A Deal Points Study, approximately 30&ndash;40% of acquisitions involve some form of post-closing disagreement, with working capital adjustments and earn-out calculations being the most frequent sources of contention. SRS Acquiom&rsquo;s annual M&amp;A Deal Terms Study reports that working capital disputes arise in approximately 20&ndash;25% of transactions with purchase price adjustment mechanisms, and earn-out disputes occur in roughly 30&ndash;35% of deals that include earn-out provisions. The frequency of disputes underscores the importance of precise drafting in the purchase agreement &mdash; ambiguity in contract language is the root cause of most post-closing disagreements, and investing additional time in drafting is far less costly than resolving disputes after closing.
        </p>

        <h3 className={h3Class}>What is the typical cost and duration of resolving a post-closing dispute?</h3>
        <p>
          The cost and duration vary significantly based on the dispute resolution mechanism and the amounts at stake. Working capital disputes resolved through an independent accountant typically cost $25,000&ndash;$75,000 in professional fees and take 2&ndash;4 months to resolve. Earn-out disputes that proceed to arbitration can cost $100,000&ndash;$500,000+ in legal and expert fees and take 6&ndash;18 months, while full litigation may exceed $500,000 and take 12&ndash;36 months. According to Houlihan Lokey&rsquo;s Purchase Agreement Study, the average working capital adjustment dispute involves a contested amount of 2&ndash;5% of the purchase price, while earn-out disputes frequently involve 10&ndash;30% of the total deal consideration. These costs highlight why prevention through precise contract drafting and aligned incentives is far preferable to after-the-fact resolution.
        </p>

        <h3 className={h3Class}>How does representations and warranties insurance reduce post-closing disputes?</h3>
        <p>
          Representations and warranties (R&amp;W) insurance fundamentally changes the post-closing dynamic by shifting indemnification risk from the seller to an insurance carrier. According to Aon&rsquo;s R&amp;W Insurance Market Update, R&amp;W policies are now used in over 50% of North American private M&amp;A transactions above $25 million in enterprise value, and adoption is growing rapidly in smaller deals. The key benefit is that the buyer makes indemnification claims against the insurer rather than the seller, preserving the commercial relationship and eliminating the adversarial tension that characterizes traditional indemnification claims. R&amp;W insurance also allows sellers to limit or eliminate their indemnification escrow (from the typical 10&ndash;15% holdback to as little as 1%), which can be a significant negotiating advantage in competitive deal processes.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>American Bar Association, <em>Model Stock Purchase Agreement with Commentary</em></li>
          <li>American Bar Association, <em>Private Target Mergers &amp; Acquisitions Deal Points Study</em></li>
          <li>SRS Acquiom, <em>M&amp;A Deal Terms Study</em></li>
          <li>Houlihan Lokey, <em>Purchase Agreement Study</em></li>
          <li>International Chamber of Commerce, <em>ICC Arbitration Rules</em></li>
          <li>UNCITRAL, <em>Model Law on International Commercial Arbitration</em></li>
          <li>New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards (1958)</li>
        </ul>

        <h2 className={h2Class}>Related resources</h2>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
              Earn-Outs &amp; Contingent Consideration
            </Link>
          </li>
          <li>
            <Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">
              Representations and Warranties
            </Link>
          </li>
          <li>
            <Link href="/learn/closing-process" className="text-apple-accent hover:underline">
              The Closing Process: From Signing to Completion
            </Link>
          </li>
          <li>
            <Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">
              Working Capital Adjustments
            </Link>
          </li>
          <li>
            <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
              Post-Acquisition Integration
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
