import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ClosingProcessArticle() {
  return (
    <article>
      <h1 className={h1Class}>The Closing Process: Timeline, Documents & Wire Transfers</h1>

      <div className={bodyClass}>
        <p>
          After months of searching, negotiating, and due diligence, the closing is where ownership
          actually transfers. Yet many first-time buyers underestimate the complexity of this final
          stage. A well-managed closing process ensures a smooth transition; a poorly managed one
          can delay or even kill an otherwise solid deal.
        </p>
        <p>
          This guide walks through every phase of the closing process — from pre-closing preparation
          through post-closing adjustments — so you know exactly what to expect and how to navigate
          each step.
        </p>
      </div>

      <h2 className={h2Class}>Typical Timeline: LOI to Close</h2>

      <div className={bodyClass}>
        <p>
          For SME acquisitions in the $1M–$20M range, the typical timeline from signed{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            Letter of Intent (LOI)
          </Link>{" "}
          to closing is 60–120 days. Here&apos;s a representative breakdown:
        </p>

        <ul className={ulClass}>
          <li><strong>Days 1–7:</strong> Finalize exclusivity, engage advisors, set up data room access</li>
          <li><strong>Days 7–45:</strong> Due diligence (financial, legal, operational, commercial)</li>
          <li><strong>Days 30–60:</strong> Purchase agreement drafting and negotiation (overlaps with DD)</li>
          <li><strong>Days 30–75:</strong> Financing finalization — lender underwriting, commitment letter, loan docs</li>
          <li><strong>Days 60–80:</strong> Third-party consents (landlord, customers, franchisors)</li>
          <li><strong>Days 75–90:</strong> Pre-closing conditions satisfaction, document execution</li>
          <li><strong>Day 90:</strong> Closing day — document delivery and wire transfers</li>
        </ul>

        <p>
          SBA-financed deals often take 90–120 days due to additional lender requirements. Plan for
          90 days as a baseline and build in 2–3 weeks of buffer for unexpected delays.
        </p>
      </div>

      <h2 className={h2Class}>Pre-Closing Checklist</h2>

      <div className={bodyClass}>
        <p>
          The pre-closing phase (typically 2–4 weeks before target close date) involves
          systematically satisfying all closing conditions and preparing documents for execution.
        </p>
      </div>

      <h3 className={h3Class}>Closing Conditions</h3>

      <div className={bodyClass}>
        <p>
          The purchase agreement specifies conditions that must be met before either party is
          obligated to close. Typical buyer-side closing conditions include:
        </p>

        <ul className={ulClass}>
          <li><strong>Accuracy of representations:</strong> Seller&apos;s{" "}
            <Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">
              representations and warranties
            </Link>{" "}
            remain true as of closing</li>
          <li><strong>Covenant compliance:</strong> Seller has operated the business in ordinary course between signing and closing</li>
          <li><strong>No material adverse change (MAC):</strong> No significant negative change to the business</li>
          <li><strong>Third-party consents:</strong> Required approvals from landlords, key customers, franchisors, licensors</li>
          <li><strong>Regulatory approvals:</strong> Any required government filings or approvals completed</li>
          <li><strong>Financing condition:</strong> Buyer has secured committed financing (if applicable)</li>
          <li><strong>Lien releases:</strong> All existing security interests on business assets released</li>
          <li><strong>Employment agreements:</strong> Key employees have signed new employment or retention agreements</li>
        </ul>
      </div>

      <h3 className={h3Class}>The Closing Checklist</h3>

      <div className={bodyClass}>
        <p>
          Your attorney should maintain a detailed closing checklist tracking every required action
          item, responsible party, and completion status. A typical checklist for an asset purchase includes:
        </p>

        <ol className={olClass}>
          <li>Purchase agreement and all schedules/exhibits — fully executed</li>
          <li>Bill of sale — transferring tangible assets</li>
          <li>Assignment and assumption agreement — transferring contracts and liabilities</li>
          <li>Intellectual property assignment — trademarks, patents, domain names</li>
          <li>Non-compete and non-solicitation agreements — signed by seller</li>
          <li>Employment/consulting agreements — for seller transition and key employees</li>
          <li>Escrow agreement — signed by buyer, seller, and escrow agent</li>
          <li>Promissory note — if seller financing is part of the deal</li>
          <li>Security agreement — securing seller note with business assets</li>
          <li>Bring-down certificates — from both buyer and seller</li>
          <li>Good standing certificates — from state of incorporation</li>
          <li>Board resolutions/member consents — authorizing the transaction</li>
          <li>Third-party consents — landlord, customers, franchisors</li>
          <li>UCC-3 termination statements — releasing existing liens</li>
          <li>Payoff letters — from seller&apos;s existing lenders</li>
          <li>Title insurance/searches — for real property transfers</li>
          <li>Closing statement/settlement sheet — showing all sources and uses of funds</li>
        </ol>
      </div>

      <h2 className={h2Class}>Bring-Down Certificates</h2>

      <div className={bodyClass}>
        <p>
          A bring-down certificate is a document in which the seller (and sometimes the buyer)
          certifies that all representations and warranties made in the purchase agreement remain
          true and accurate as of the closing date. This is important because conditions may change
          between the date the purchase agreement is signed and the actual closing.
        </p>
        <p>
          The seller&apos;s bring-down certificate typically confirms:
        </p>

        <ul className={ulClass}>
          <li>All representations and warranties are true as of closing (or were true as of signing and no material changes have occurred)</li>
          <li>All covenants have been complied with</li>
          <li>No material adverse change has occurred</li>
          <li>All required consents have been obtained</li>
          <li>Attached documents (good standing certificates, board resolutions) are accurate and complete</li>
        </ul>

        <p>
          If the seller cannot deliver a clean bring-down certificate, it signals a potential
          problem that must be resolved before closing — or may give the buyer grounds to terminate.
        </p>
      </div>

      <h2 className={h2Class}>Escrow Arrangements</h2>

      <div className={bodyClass}>
        <p>
          Most acquisitions involve holding back a portion of the purchase price in escrow. The
          escrow protects the buyer against post-closing claims while giving the seller confidence
          that funds will be released on schedule if no issues arise.
        </p>
      </div>

      <h3 className={h3Class}>Types of Escrows</h3>

      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>
            <strong>Indemnification escrow:</strong> The most common type — holds 5–15% of purchase
            price for 12–18 months to cover breaches of{" "}
            <Link href="/learn/indemnification-escrow" className="text-apple-accent hover:underline">
              representations and indemnification
            </Link>{" "}
            claims
          </li>
          <li>
            <strong>Working capital escrow:</strong> Holds funds pending the final{" "}
            <Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">
              working capital adjustment
            </Link>{" "}
            calculation, typically released within 60–90 days
          </li>
          <li><strong>Earnout escrow:</strong> For deals with earnout components, holds funds pending target achievement</li>
          <li><strong>Expense escrow:</strong> Covers anticipated post-closing costs (transfer taxes, lease terminations)</li>
        </ul>
      </div>

      <h3 className={h3Class}>Escrow Agreement Terms</h3>

      <div className={bodyClass}>
        <p>The escrow agreement, signed by buyer, seller, and escrow agent, specifies:</p>

        <ul className={ulClass}>
          <li><strong>Escrow amount and duration</strong></li>
          <li><strong>Investment of funds:</strong> How escrow money is invested (typically low-risk instruments)</li>
          <li><strong>Release schedule:</strong> Often in tranches — e.g., 50% at 12 months, 50% at 18 months</li>
          <li><strong>Claim procedures:</strong> How the buyer submits claims, including notice requirements</li>
          <li><strong>Dispute resolution:</strong> Process if buyer and seller disagree about a claim</li>
          <li><strong>Escrow agent fees:</strong> Typically $2,000–5,000 annually, split between parties</li>
        </ul>
      </div>

      <h2 className={h2Class}>Wire Transfer Procedures</h2>

      <div className={bodyClass}>
        <p>
          The actual movement of funds on closing day requires meticulous attention to security.
          Wire fraud in M&A transactions has increased dramatically, with hackers intercepting
          email communications and sending fraudulent wire instructions.
        </p>
      </div>

      <h3 className={h3Class}>Preparing Wire Instructions</h3>

      <div className={bodyClass}>
        <p>Well before closing, collect and verify wire instructions for all parties:</p>

        <ul className={ulClass}>
          <li><strong>Seller&apos;s account:</strong> Bank name, routing number, account number, account name</li>
          <li><strong>Escrow agent:</strong> For funds being placed in escrow</li>
          <li><strong>Payoff lenders:</strong> For any seller debt being paid off at closing</li>
          <li><strong>Broker/intermediary:</strong> Commission payments due at closing</li>
          <li><strong>Professional fees:</strong> Attorney and accounting fees, if paid from proceeds</li>
        </ul>
      </div>

      <h3 className={h3Class}>Fraud Prevention</h3>

      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Out-of-band verification:</strong> Confirm all wire instructions by phone using a known, pre-verified number — never a number from a recent email</li>
          <li><strong>Change protocols:</strong> If wire instructions change at any point, require verbal confirmation through multiple channels</li>
          <li><strong>Test wires:</strong> For large transactions, send a small test wire ($100) to verify account info</li>
          <li><strong>Same-day confirmation:</strong> Require recipients to confirm receipt on closing day</li>
          <li><strong>Encrypted communications:</strong> Use secure portals for transmitting sensitive financial information</li>
        </ul>
      </div>

      <h3 className={h3Class}>Closing Day Wire Sequence</h3>

      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Lender funds buyer:</strong> If using debt financing, lender wires acquisition loan proceeds</li>
          <li><strong>Buyer funds escrow:</strong> Portion held back for indemnification and working capital escrows</li>
          <li><strong>Buyer pays off seller debt:</strong> Direct wire to seller&apos;s existing lenders per payoff letters</li>
          <li><strong>Buyer pays seller:</strong> Remaining purchase price (net of escrow and debt payoff)</li>
          <li><strong>Transaction expenses:</strong> Legal, accounting, and brokerage fees paid</li>
        </ol>

        <p>
          All parties should have a closing statement (settlement sheet) showing every source
          and use of funds, ensuring complete transparency and reconciliation.
        </p>
      </div>

      <h2 className={h2Class}>The Closing Binder</h2>

      <div className={bodyClass}>
        <p>
          The closing binder is a comprehensive compilation of all executed transaction documents.
          While increasingly maintained electronically, a complete binder includes:
        </p>

        <ul className={ulClass}>
          <li>Purchase agreement with all schedules and exhibits</li>
          <li>All ancillary agreements (employment, non-compete, escrow, promissory note, security agreements)</li>
          <li>Assignment and transfer documents (bill of sale, IP assignments)</li>
          <li>Corporate authorizations (board resolutions, shareholder consents, good standing certificates)</li>
          <li>Officer&apos;s certificates and bring-down certificates</li>
          <li>Third-party consents and regulatory approvals</li>
          <li>Payoff letters and UCC lien releases</li>
          <li>Closing statement with wire confirmations</li>
          <li>Legal opinions (if required by lender or purchase agreement)</li>
        </ul>

        <p>
          Both buyer and seller should receive complete copies. These documents may be needed for
          tax filings, future financings, audits, or post-closing disputes.
        </p>
      </div>

      <h2 className={h2Class}>Post-Closing Adjustments</h2>

      <h3 className={h3Class}>Working Capital True-Up</h3>

      <div className={bodyClass}>
        <p>
          The most common post-closing adjustment involves{" "}
          <Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">
            working capital
          </Link>. The process:
        </p>

        <ol className={olClass}>
          <li><strong>Estimated closing statement:</strong> Prepared 1–3 days before closing with estimated working capital</li>
          <li><strong>Initial payment:</strong> Purchase price paid based on estimated working capital</li>
          <li><strong>Final calculation:</strong> Within 60–90 days, buyer prepares final working capital determination</li>
          <li><strong>Review period:</strong> Seller has 30 days to review and dispute</li>
          <li><strong>True-up payment:</strong> Excess goes to seller; shortfall reimbursed to buyer (often from escrow)</li>
        </ol>
      </div>

      <h3 className={h3Class}>Other Post-Closing Items</h3>

      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Purchase price allocation (IRS Form 8594):</strong> Buyer and seller agree on allocation among asset classes for tax purposes</li>
          <li><strong>Earnout measurements:</strong> Tracking and paying earnout milestones per the agreement</li>
          <li><strong>Escrow releases:</strong> Monitoring release dates and processing claims if needed</li>
          <li><strong>Tax prorations:</strong> Property taxes, sales taxes, and other liabilities prorated to closing date</li>
        </ul>
      </div>

      <h2 className={h2Class}>Common Closing Delays and How to Avoid Them</h2>

      <div className={bodyClass}>
        <p>Understanding common delay causes helps you plan proactively:</p>

        <ul className={ulClass}>
          <li>
            <strong>Third-party consent delays (most common):</strong> Landlords, franchisors, and
            key customers may take weeks to respond. Start the consent process as early as possible —
            ideally as soon as the LOI is signed.
          </li>
          <li>
            <strong>Lender requirements:</strong> Banks and SBA lenders frequently request additional
            documentation or impose unexpected conditions. Maintain close communication with your
            lender throughout and respond to requests within 24 hours.
          </li>
          <li>
            <strong>Late-stage due diligence issues:</strong> Problems emerging late in DD that
            require renegotiation. Address issues as they arise rather than waiting until the end.
          </li>
          <li>
            <strong>Document negotiation deadlocks:</strong> Attorneys disagreeing on provisions.
            Escalate business-level issues to principals promptly and avoid over-lawyering.
          </li>
          <li>
            <strong>Corporate housekeeping:</strong> Missing board resolutions, expired certificates,
            or incomplete records. Prepare corporate documents well in advance.
          </li>
          <li>
            <strong>Working capital disputes:</strong> Disagreements about estimated or target
            working capital levels. Agree on methodology early during DD.
          </li>
          <li>
            <strong>Seller cold feet:</strong> The emotional reality of selling hits late in the
            process. Build a strong relationship with the seller and address concerns promptly.
          </li>
        </ul>

        <p>
          Build at least 2 weeks of buffer into your closing timeline. If your financing has a
          hard deadline, don&apos;t schedule closing for that exact date.
        </p>
      </div>

      <h2 className={h2Class}>In-Person vs. Virtual Closings</h2>

      <div className={bodyClass}>
        <p>
          <strong>In-person closings</strong> involve all parties gathering (typically at the
          buyer&apos;s attorney&apos;s office) to execute documents, deliver certificates, and
          initiate wire transfers simultaneously. This allows real-time problem-solving if
          last-minute issues arise.
        </p>
        <p>
          <strong>Virtual closings</strong> have become increasingly common, using electronic
          signatures (DocuSign, Adobe Sign), secure document sharing, and video conferencing.
          Virtual closings require even more careful coordination — establish a clear schedule
          with designated times for document execution and wire transfers.
        </p>
      </div>

      <h2 className={h2Class}>Immediate Post-Closing Tasks</h2>

      <div className={bodyClass}>
        <p>The work doesn&apos;t end when wires clear. In the first 1–2 weeks after closing:</p>

        <ul className={ulClass}>
          <li><strong>Employee announcement:</strong> Introduce yourself, explain the transition, address concerns</li>
          <li><strong>Customer notification:</strong> Assure continuity of service, ideally with seller&apos;s endorsement</li>
          <li><strong>Vendor/supplier updates:</strong> Inform key vendors and update account information</li>
          <li><strong>Bank account transition:</strong> Open new accounts, transfer payment processing</li>
          <li><strong>Insurance updates:</strong> Update all policies (liability, property, workers&apos; comp) to reflect new ownership</li>
          <li><strong>License and permit transfers:</strong> Complete required government filings</li>
          <li><strong>UCC filings:</strong> File UCC-1 to perfect your security interests; UCC-3 to release old liens</li>
          <li><strong>Tax registrations:</strong> Register for sales tax, payroll tax, and other accounts</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>

      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Start early and stay organized.</strong> Use a comprehensive closing checklist and track every action item</li>
          <li><strong>Build schedule buffer.</strong> Assume delays will occur — budget 2+ weeks of cushion</li>
          <li><strong>Secure consents early.</strong> Third-party consents are the #1 source of delays</li>
          <li><strong>Verify wire instructions rigorously.</strong> Wire fraud is real — use out-of-band verification</li>
          <li><strong>Prepare for post-closing work.</strong> Working capital adjustments, tax filings, and operational transitions continue after the close</li>
          <li><strong>Don&apos;t over-lawyer.</strong> Focus on material issues; excessive negotiation over minor points kills deals</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>

      <ul className={ulClass}>
        <li>
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            Letter of Intent: How to Draft & Negotiate
          </Link>{" "}— The foundation document that sets the stage for closing
        </li>
        <li>
          <Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">
            Representations & Warranties in M&A
          </Link>{" "}— Understanding buyer protections verified at closing
        </li>
        <li>
          <Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">
            Working Capital Adjustments at Closing
          </Link>{" "}— The most common post-closing adjustment
        </li>
        <li>
          <Link href="/learn/indemnification-escrow" className="text-apple-accent hover:underline">
            Indemnification & Escrow Provisions
          </Link>{" "}— How escrows secure post-closing obligations
        </li>
        <li>
          <Link href="/learn/exclusivity-agreement" className="text-apple-accent hover:underline">
            Exclusivity Agreements in M&A
          </Link>{" "}— Protecting the timeline from LOI to close
        </li>
      </ul>

      <h2 className={h2Class}>Sources</h2>

      <ul className={ulClass}>
        <li>American Bar Association, <em>Model Asset Purchase Agreement with Commentary</em> (3rd ed., 2020)</li>
        <li>Practical Law (Thomson Reuters), <em>Closing Mechanics in M&A Transactions</em> (2023)</li>
        <li>SBA Office of Capital Access, <em>SBA 7(a) Loan Closing Procedures — SOP 50 10</em> (2024)</li>
        <li>Timothy E. Powers, &quot;Wire Transfer Fraud Prevention in M&A Transactions,&quot; <em>ABA Business Law Section Newsletter</em> (2023)</li>
        <li>Robert F. Reilly, &quot;Purchase Price Allocations and Post-Closing Adjustments,&quot; <em>Willamette Management Associates Insights</em> (2023)</li>
        <li>National Association of Certified Valuators and Analysts (NACVA), <em>Best Practices for Business Closings</em> (2023)</li>
      </ul>
    </article>
  );
}
