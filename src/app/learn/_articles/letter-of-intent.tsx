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
          due diligence, acquisition financing, and the definitive purchase
          agreement. A well-drafted LOI protects the buyer, reassures the
          seller, and establishes the commercial terms that will govern months
          of negotiation.
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
          a multiple of trailing twelve months adjusted EBITDA). Specify whether
          the price is fixed or subject to a working capital adjustment at
          closing. Many search fund LOIs express the price as a range
          (&ldquo;&euro;5.0M-&euro;5.5M, subject to confirmatory due
          diligence&rdquo;) to preserve negotiating flexibility while giving
          the seller a clear indication.
        </p>

        <h3 className={h3Class}>2. Transaction structure</h3>
        <p>
          Specify whether you are proposing an asset purchase or a share
          purchase. Asset purchases are more common in the US (favorable tax
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
          measurement period, and payout formula. Earn-outs are notoriously
          difficult to negotiate &mdash; keep the metrics simple and
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
      </div>
    </article>
  );
}
