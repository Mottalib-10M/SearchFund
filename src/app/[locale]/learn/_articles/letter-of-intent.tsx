import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function LetterOfIntentArticle() {
  return (
    <article>
      <h1 className={h1Class}>Letter of Intent (LOI): How to Draft &amp; Negotiate</h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          The Letter of Intent is the pivotal document in any search fund
          acquisition. It marks the transition from the search phase to the deal
          phase and sets the framework for everything that follows &mdash;
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link>, acquisition financing, and the definitive purchase
          agreement. A well-drafted LOI protects the buyer, reassures the
          seller, and establishes the commercial terms that will govern months
          of <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">negotiation</Link>.
        </p>

        <h2 className={h2Class}>What an LOI is and why it matters</h2>
        <p>
          An LOI (also called a term sheet or indication of interest) is a
          document that outlines the proposed terms of an acquisition before
          both parties commit to the expense and effort of full due diligence
          and legal documentation. It is primarily <strong>non-binding</strong>,
          meaning neither party is legally obligated to complete the transaction.
          However, certain provisions &mdash; exclusivity, confidentiality, and
          expense allocation &mdash; are typically binding.
        </p>
        <p>
          The LOI matters for several reasons. First, it forces both parties to
          agree on the material terms before investing significant time and
          money. Second, the exclusivity provision prevents the seller from
          shopping the deal while you conduct diligence. Third, it gives your
          investors and lenders confidence that a deal is progressing, which is
          essential for lining up acquisition financing. Fourth, it establishes
          the negotiating dynamic &mdash; the tone and structure of the LOI
          often set the pattern for the entire deal process.
        </p>

        <h2 className={h2Class}>Key sections of an LOI</h2>

        <h3 className={h3Class}>1. Purchase price and valuation</h3>
        <p>
          State the proposed enterprise value and how you arrived at it (e.g.,
          a multiple of trailing twelve months adjusted EBITDA). See our guide on <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">business valuation</Link> for more on choosing the right methodology. Specify whether
          the price is fixed or subject to a working capital adjustment at
          closing. Many search fund LOIs express the price as a range
          (&ldquo;&euro;5.0M-&euro;5.5M, subject to confirmatory due
          diligence&rdquo;) to preserve negotiating flexibility while giving
          the seller a clear indication.
        </p>

        <h3 className={h3Class}>2. Transaction structure</h3>
        <p>
          Specify whether you are proposing an{" "}
          <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
            asset purchase or a share purchase
          </Link>.
          Asset purchases are more common in the US (favorable tax
          treatment for buyers, ability to select assets and exclude
          liabilities). Share purchases are more common in Europe, particularly
          in France and Germany, where asset transfers can trigger complex
          employment and contract assignment issues. Include the anticipated
          form of consideration: cash at closing, seller notes, earn-outs,
          or a combination.
        </p>

        <h3 className={h3Class}>3. Exclusivity (no-shop period)</h3>
        <p>
          The exclusivity clause is arguably the most important binding
          provision. It prevents the seller from soliciting or entertaining
          competing offers during the due diligence period. Typical exclusivity
          periods range from 60 to 120 days. Push for 90-120 days &mdash;
          search fund acquisitions require extensive diligence, financing
          arrangements, and investor coordination. Include an extension
          mechanism (e.g., automatic 30-day extension if diligence is
          proceeding in good faith) to avoid the pressure of an arbitrary
          deadline.
        </p>

        <h3 className={h3Class}>4. Due diligence</h3>
        <p>
          Outline the scope and process for due diligence. Specify that the
          buyer will have full access to financial records, contracts, employees
          (typically after a certain milestone), customers, and facilities.
          State that the transaction is contingent on satisfactory completion of
          due diligence &mdash; this gives you an exit ramp if you discover
          material issues. Be explicit about what &ldquo;satisfactory&rdquo;
          means: it should be at the buyer&apos;s sole discretion.
        </p>

        <h3 className={h3Class}>5. Conditions to closing</h3>
        <p>
          List the conditions that must be satisfied before the transaction
          can close:
        </p>
        <ul className={ulClass}>
          <li><strong>Financing contingency:</strong> The acquisition is subject to the buyer securing adequate debt and equity financing. This is standard in search fund deals.</li>
          <li><strong>Board/investor approval:</strong> For traditional search funds, the acquisition requires approval from search fund investors.</li>
          <li><strong>Regulatory approvals:</strong> Anti-trust clearance, industry-specific licenses, or foreign investment approvals as applicable.</li>
          <li><strong>No material adverse change:</strong> The business has not suffered a significant deterioration between LOI signing and closing.</li>
          <li><strong>Key employee retention:</strong> Certain critical employees must agree to remain with the business post-closing.</li>
          <li><strong>Seller transition:</strong> The seller agrees to a post-closing transition period (typically 6-12 months).</li>
        </ul>

        <h3 className={h3Class}>6. Seller note and earn-out terms</h3>
        <p>
          If part of the consideration is deferred, specify the terms. For
          seller notes, include the principal amount, interest rate, maturity,
          amortization schedule, and subordination terms (the seller note is
          almost always subordinated to senior bank debt). For earn-outs,
          define the performance metrics (revenue, EBITDA, customer retention),
          measurement period, and payout formula. <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">Earn-outs are notoriously
          difficult to negotiate</Link> &mdash; keep the metrics simple and
          objectively measurable.
        </p>

        <h3 className={h3Class}>7. Confidentiality and announcements</h3>
        <p>
          Both parties agree to keep the transaction confidential until closing.
          No public announcements without mutual consent. This protects the
          business from employee anxiety, customer uncertainty, and competitor
          opportunism during the diligence period.
        </p>

        <h2 className={h2Class}>Binding vs. non-binding provisions</h2>
        <p>
          Understanding this distinction is crucial. The LOI should explicitly
          state which provisions are binding and which are not:
        </p>
        <ul className={ulClass}>
          <li><strong>Typically binding:</strong> Exclusivity, confidentiality, expense allocation (each party bears its own costs), governing law, and dispute resolution.</li>
          <li><strong>Typically non-binding:</strong> Purchase price, transaction structure, closing conditions, representations and warranties, and indemnification terms.</li>
        </ul>
        <p>
          Be cautious about making the purchase price binding. While sellers may
          push for this, a binding price before due diligence is complete
          removes your ability to renegotiate if you discover material issues.
          The standard practice is to keep the price indicative and non-binding,
          with the definitive purchase agreement setting the final terms.
        </p>

        <h3 className={h3Class}>Break-up fees and cost reimbursement</h3>
        <p>
          Some sellers request a break-up fee — a payment the buyer must make
          if the buyer walks away from the deal after signing the LOI. Break-up
          fees are uncommon in search fund transactions but occasionally appear
          in competitive processes where the seller wants compensation for
          taking the company off the market. If you agree to a break-up fee,
          keep it modest (typically 1-2% of the purchase price) and ensure it
          is only triggered by the buyer&apos;s voluntary withdrawal — not by
          a failure to obtain financing or the discovery of material
          misrepresentations during diligence. Cost reimbursement provisions,
          where the withdrawing party reimburses the other side&apos;s
          out-of-pocket expenses, are more common and generally more
          reasonable. These provisions should be capped at a specific dollar
          amount to limit exposure.
        </p>

        <h2 className={h2Class}>Exclusivity period negotiation</h2>
        <p>
          The exclusivity (or &quot;no-shop&quot;) provision is often the most
          negotiated binding term in the LOI. Getting it right protects your
          investment of time and money during the diligence period.
        </p>

        <h3 className={h3Class}>Duration and extensions</h3>
        <p>
          Typical exclusivity periods in search fund acquisitions range from
          60 to 90 days, though complex transactions may warrant 120 days.
          The right duration depends on the complexity of the business, the
          scope of diligence required, and the time needed to arrange
          acquisition financing. Push for the longest period the seller will
          accept — rushing diligence to meet an artificial deadline is one
          of the most common causes of post-acquisition surprises. Include
          an extension mechanism in the LOI, such as an automatic 30-day
          extension if diligence is proceeding in good faith and neither
          party has raised material concerns. This prevents the seller from
          using an expiring exclusivity period as leverage to force premature
          commitment.
        </p>

        <h3 className={h3Class}>What happens when exclusivity expires</h3>
        <p>
          If exclusivity expires without an extension, the seller is free to
          entertain competing offers. This does not necessarily mean the deal
          is dead — many sellers prefer to continue with the existing buyer
          rather than restart the process — but it dramatically weakens your
          negotiating position. You have invested significant time and
          professional fees, and the seller knows you have sunk costs that
          create pressure to close. To avoid this dynamic, monitor your
          exclusivity timeline closely, communicate proactively with the
          seller about diligence progress, and request extensions before
          the deadline arrives rather than after.
        </p>

        <h2 className={h2Class}>Common negotiation points beyond price</h2>
        <p>
          While purchase price gets the most attention, several other LOI
          terms have significant economic and operational impact. Understanding
          these terms before you draft the LOI prevents costly surprises during
          purchase agreement negotiations.
        </p>

        <h3 className={h3Class}>Working capital peg</h3>
        <p>
          The working capital peg (or &quot;target&quot;) is the agreed-upon
          level of net working capital that the seller must deliver at closing.
          If actual working capital at closing falls below the peg, the
          purchase price is reduced dollar-for-dollar; if it exceeds the peg,
          the price increases. The peg is typically set as the trailing
          twelve-month average of net working capital, though seasonal
          businesses may require a different calculation methodology. Getting
          the working capital peg wrong can shift hundreds of thousands of
          dollars between buyer and seller — it deserves careful analysis
          during diligence and explicit treatment in the LOI.
        </p>

        <h3 className={h3Class}>Representations, warranties, and indemnification</h3>
        <p>
          The LOI should outline the expected scope of representations and
          warranties (reps) that the seller will make in the definitive
          purchase agreement. Key reps cover the accuracy of financial
          statements, the absence of undisclosed liabilities, compliance with
          laws, the status of material contracts, and the condition of assets.
          The indemnification provisions determine what happens when a rep
          proves untrue — the seller must compensate the buyer for resulting
          losses. Two critical terms to address at the LOI stage are the
          basket (the minimum threshold of losses before indemnification is
          triggered, typically 0.5-1.0% of the purchase price) and the cap
          (the maximum indemnification liability, typically 10-20% of the
          purchase price for general reps and up to 100% for fundamental reps
          like ownership and authority). An indemnification holdback — a portion
          of the purchase price held in escrow for 12-18 months post-closing —
          provides practical enforcement of these provisions.
        </p>

        <h3 className={h3Class}>Employment and transition agreements</h3>
        <p>
          The LOI should address the post-closing employment arrangements for
          the seller and key employees. For the seller, define the expected
          transition period (typically 6-12 months), compensation during
          transition, and whether the arrangement is as an employee or
          consultant. For key employees whose retention is critical to the
          business, outline retention bonus structures or employment
          agreements that will be executed at closing. Getting these terms
          agreed upon early prevents last-minute holdups when the seller or
          key employees attempt to renegotiate their arrangements with
          closing leverage.
        </p>

        <h2 className={h2Class}>Negotiation strategies</h2>
        <ul className={ulClass}>
          <li><strong>Anchor with a fair offer:</strong> Unlike venture capital, ETA deals involve personal relationships with owner-operators. Lowball offers damage trust. Start with a fair valuation based on comparable transactions and clear methodology.</li>
          <li><strong>Prioritize exclusivity:</strong> Exclusivity is more valuable to you than a slightly lower price. If the seller is reluctant, offer a shorter initial period with extension options tied to milestones.</li>
          <li><strong>Use structure to bridge price gaps:</strong> If the seller&apos;s price expectation exceeds your valuation, bridge the gap with seller notes, earn-outs, or a management consulting agreement during the transition period. These tools reduce your upfront cash outlay and align incentives.</li>
          <li><strong>Keep the LOI simple:</strong> Resist the urge to over-negotiate the LOI. It is a framework, not a definitive agreement. Over-lawyering the LOI signals distrust and can kill deals. Save the detailed provisions for the purchase agreement.</li>
          <li><strong>Protect your exit ramps:</strong> Ensure the due diligence contingency and financing contingency are clearly worded and at your sole discretion. These are your protection against overpaying or acquiring a problematic business.</li>
          <li><strong>Address the seller&apos;s concerns proactively:</strong> Most SME owners care about their employees, their legacy, and certainty of close. Address these directly in the LOI &mdash; commit to employee retention, describe your operating philosophy, and demonstrate that your financing is credible.</li>
        </ul>

        <h2 className={h2Class}>EU-specific formats and considerations</h2>

        <h3 className={h3Class}>France: Lettre d&apos;intention</h3>
        <p>
          In France, the LOI (lettre d&apos;intention) carries particular legal
          significance. French courts have interpreted overly detailed LOIs as
          creating binding obligations, even when labeled as non-binding. Keep
          the language conditional and avoid specific commitments. The LOI
          should reference &ldquo;sous r&eacute;serve de&rdquo; (subject to)
          due diligence and financing. Employee information rights under
          the Hamon Law (for businesses with fewer than 250 employees) must be
          observed &mdash; employees have a right to be informed of a potential
          sale and may make a competing offer.
        </p>

        <h3 className={h3Class}>Germany: Absichtserkl&auml;rung</h3>
        <p>
          German LOIs (Absichtserkl&auml;rung or Letter of Intent) typically
          follow a structure similar to Anglo-Saxon practice. However, German
          law imposes a duty of good faith (Treu und Glauben) during
          negotiations, and breaking off talks without legitimate reason after
          a signed LOI can trigger liability for reliance damages
          (culpa in contrahendo). The share purchase agreement (SPA) for a
          German GmbH acquisition must be notarized by a German notary
          (Notar), which adds time and cost to the process.
        </p>

        <h3 className={h3Class}>Spain and other EU markets</h3>
        <p>
          In Spain, the carta de intenciones follows similar principles. Spanish
          law also recognizes pre-contractual liability, so be careful about
          creating expectations you may not fulfill. In the Netherlands and
          the Nordics, LOI practices closely follow Anglo-Saxon conventions,
          making them generally more familiar to international investors.
        </p>

        <h2 className={h2Class}>From LOI to closing</h2>
        <p>
          Signing the LOI is a milestone, not the finish line. The typical
          path from LOI to closing takes 3-6 months and involves confirmatory
          due diligence, negotiation of the definitive purchase agreement,
          securing acquisition financing, obtaining regulatory approvals,
          and coordinating the closing mechanics. Maintain momentum by setting
          clear deadlines, communicating frequently with the seller, and
          managing your professional advisors (lawyers, accountants, lenders)
          actively. Deals die in the gaps between milestones.
        </p>

        <h3 className={h3Class}>Key milestones from LOI to close</h3>
        <p>
          The post-LOI process typically follows a predictable sequence. In
          weeks one through four, you conduct intensive financial diligence —
          quality of earnings analysis, working capital analysis, and review
          of tax returns and financial statements. In weeks four through eight,
          operational and legal diligence proceeds in parallel: customer and
          vendor interviews, employee assessments, contract review, and
          environmental or regulatory compliance checks. Simultaneously,
          your attorney begins drafting the purchase agreement based on the
          LOI framework. By weeks eight through twelve, the purchase agreement
          should be in advanced negotiation, acquisition financing (SBA loan,
          bank debt, or equity commitment letters from investors) should be
          substantially committed, and remaining diligence items should be
          winding down. The final two to four weeks involve purchase agreement
          execution, funds flow coordination, and closing logistics. Missing
          any of these milestones by more than a week should trigger a
          candid conversation with the seller and a reassessment of the
          timeline.
        </p>

        <h3 className={h3Class}>Why deals fail between LOI and close</h3>
        <p>
          Industry data suggests that approximately 30% of signed LOIs do not
          result in a completed transaction. Understanding the most common
          failure modes helps you avoid them. The leading cause is
          diligence discoveries — material discrepancies between the
          seller&apos;s representations and the actual condition of the
          business, including overstated earnings, undisclosed liabilities,
          customer concentration risk, or pending litigation. The second
          most common cause is financing failure — inability to secure
          adequate debt or equity on acceptable terms, often triggered by
          diligence findings that make lenders uncomfortable. Seller&apos;s
          remorse is the third major cause: the emotional difficulty of
          selling a life&apos;s work causes some sellers to create obstacles,
          become unresponsive, or renegotiate terms late in the process.
          Finally, interpersonal breakdowns between buyer and seller —
          damaged trust from aggressive negotiation tactics, cultural
          mismatches, or communication failures — can kill otherwise viable
          deals. The best protection against all of these risks is a
          well-drafted LOI with clear contingencies, disciplined diligence,
          and consistent, empathetic communication with the seller throughout
          the process.
        </p>

        <h2 className={h2Class}>Multiple LOI strategies</h2>
        <p>
          Searchers sometimes face the question of whether to pursue multiple
          targets simultaneously and how to manage competing LOI processes.
          The right approach depends on where you are in your search timeline
          and how competitive the deal environment is.
        </p>

        <h3 className={h3Class}>Competitive vs. exclusive LOIs</h3>
        <p>
          In a brokered process &mdash; often sourced through{" "}
          <Link href="/learn/working-with-brokers" className="text-apple-accent hover:underline">
            business brokers
          </Link>{" "}
          &mdash; where multiple buyers are bidding, you may
          submit a competitive LOI alongside other bidders. Competitive LOIs
          require sharper pricing (less room for a valuation range), stronger
          certainty-of-close language, and fewer contingencies to stand out.
          In a proprietary deal — one you sourced directly through outreach
          to the owner — you are typically the sole bidder, and the LOI can
          include more buyer-friendly terms like wider price ranges, longer
          exclusivity periods, and broader diligence contingencies. Proprietary
          deals are generally preferable because the relationship dynamic
          is more collaborative, but competitive processes can still produce
          excellent acquisitions if you bring differentiated value beyond
          price (such as industry expertise, a compelling transition plan,
          or strong cultural alignment with the seller&apos;s values).
        </p>

        <h3 className={h3Class}>Managing multiple targets simultaneously</h3>
        <p>
          Some searchers maintain parallel tracks with two or three targets
          before committing to an exclusive LOI with one. This approach
          increases the probability of closing a deal within your search
          timeline but also creates significant complexity. Each target
          requires separate diligence workstreams, legal engagement, and
          relationship management. The risk of reputational damage is real:
          if a seller discovers that you are simultaneously pursuing their
          competitor, trust evaporates. The recommended approach is to
          advance multiple opportunities through initial evaluation and
          management meetings, but sign an exclusive LOI with only one target
          at a time. If that deal falls through, you can quickly pivot to
          your next-best opportunity, which you have already vetted at a
          preliminary level. This disciplined approach balances pipeline
          management with the integrity that the search fund community
          demands. For more on building a healthy pipeline, see our guide on{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing strategies
          </Link>.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>What should the purchase price section of an LOI include?</h3>
        <p>
          The purchase price section should state the proposed enterprise value
          and how you arrived at it (for example, a multiple of trailing twelve
          months adjusted EBITDA). Specify whether the price is fixed or subject
          to a working capital adjustment at closing. Many search fund LOIs
          express the price as a range to preserve negotiating flexibility while
          giving the seller a clear indication. Also clarify the form of
          consideration &mdash; cash at closing, seller notes, earn-outs, or a
          combination.
        </p>

        <h3 className={h3Class}>How long does it take to go from LOI to closing?</h3>
        <p>
          The typical path from a signed LOI to closing takes 3&ndash;6 months.
          The first four weeks focus on intensive financial diligence and a quality
          of earnings analysis. Weeks four through eight cover operational and
          legal diligence plus purchase agreement drafting. Weeks eight through
          twelve involve finalizing the purchase agreement, securing acquisition
          financing, and closing remaining diligence items. Industry data
          suggests approximately 30% of signed LOIs do not result in a completed
          transaction, most commonly due to diligence discoveries, financing
          failures, or seller&rsquo;s remorse.
        </p>

        <h3 className={h3Class}>Can I submit LOIs to multiple sellers at the same time?</h3>
        <p>
          You can advance multiple opportunities through initial evaluation and
          management meetings simultaneously, but you should sign an exclusive
          LOI with only one target at a time. Signing multiple exclusive LOIs
          simultaneously is considered unethical in the search fund community
          and risks reputational damage. If your first deal falls through, you
          can quickly pivot to your next-best opportunity if you have maintained
          a warm pipeline.
        </p>
      </div>
    </article>
  );
}
