import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function LegalDueDiligenceArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Legal Due Diligence: Contracts, Litigation &amp; IP
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Legal due diligence (LDD) identifies liabilities, contractual
          risks, and regulatory issues that could affect the acquisition.
          While{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            financial DD
          </Link>{" "}
          tells you what the business earns, legal DD tells you what
          could go wrong. This guide covers the key areas of legal
          review for SME acquisitions.
        </p>

        <h2 className={h2Class}>Corporate and organizational review</h2>
        <ul className={ulClass}>
          <li><strong>Entity formation documents:</strong> Articles of incorporation/organization, bylaws, operating agreements</li>
          <li><strong>Good standing certificates:</strong> Verify the entity is in good standing in its state/jurisdiction of formation and all states where it operates</li>
          <li><strong>Capitalization and ownership:</strong> Confirm who owns what. Are there any minority shareholders, phantom equity, or options outstanding?</li>
          <li><strong>Board minutes:</strong> Review board and shareholder meeting minutes for the past 3&ndash;5 years</li>
          <li><strong>Authority to sell:</strong> Verify that the seller has the legal authority to execute the transaction (shareholder approvals, spousal consent if applicable)</li>
        </ul>

        <h2 className={h2Class}>Contract review</h2>
        <p>
          The most time-intensive part of legal DD. Focus on:
        </p>

        <h3 className={h3Class}>Material contracts</h3>
        <ul className={ulClass}>
          <li><strong>Top customer contracts:</strong> Terms, duration, renewal provisions, termination clauses, and change-of-control provisions</li>
          <li><strong>Top vendor/supplier contracts:</strong> Pricing commitments, exclusivity, minimum purchase obligations</li>
          <li><strong>Lease agreements:</strong> Remaining term, renewal options, rent escalations, assignment/subletting provisions, landlord consent requirements</li>
          <li><strong>Loan and credit agreements:</strong> All debt instruments, covenants, change-of-control triggers, prepayment penalties</li>
          <li><strong>Insurance policies:</strong> Coverage adequacy, claims history, tail coverage for the seller</li>
        </ul>

        <h3 className={h3Class}>Change-of-control provisions</h3>
        <p>
          Identify any contracts that contain change-of-control clauses
          &mdash; these allow the counterparty to terminate or renegotiate
          the agreement upon a change in ownership:
        </p>
        <ul className={ulClass}>
          <li>Key customer contracts with change-of-control termination rights</li>
          <li>Lease agreements requiring landlord consent for ownership changes</li>
          <li>Government contracts with assignment restrictions</li>
          <li>Technology licenses that don&rsquo;t transfer upon sale</li>
        </ul>

        <h2 className={h2Class}>Litigation and disputes</h2>
        <ul className={ulClass}>
          <li><strong>Active litigation:</strong> All pending lawsuits, arbitrations, and administrative proceedings</li>
          <li><strong>Threatened claims:</strong> Demand letters, cease-and-desist notices, regulatory investigations</li>
          <li><strong>Historical litigation:</strong> Review resolved cases from the past 3&ndash;5 years (patterns matter)</li>
          <li><strong>Workers&rsquo; compensation claims:</strong> History and current Experience Modification Rate (EMR)</li>
          <li><strong>Regulatory enforcement:</strong> Any OSHA citations, EPA violations, or industry-specific regulatory actions</li>
        </ul>

        <h2 className={h2Class}>Employment and labor</h2>
        <ul className={ulClass}>
          <li><strong>Employment agreements:</strong> Review all executive and key employee contracts, including compensation, non-competes, and severance provisions</li>
          <li><strong>Non-compete and non-solicit agreements:</strong> Are key employees bound by restrictive covenants? Are these enforceable in the relevant jurisdiction?</li>
          <li><strong>Employee classification:</strong> Independent contractor vs. employee misclassification creates significant liability. According to the American Bar Association M&amp;A Due Diligence Guide, worker classification issues are among the top five legal risks uncovered during acquisition due diligence</li>
          <li><strong>Benefits and pension obligations:</strong> 401(k), health insurance, deferred compensation, unfunded pension liabilities</li>
          <li><strong>WARN Act / TUPE compliance:</strong> In the US, the Worker Adjustment and Retraining Notification Act; in the EU, TUPE transfer of undertakings protections</li>
          <li><strong>Handbook and policies:</strong> Review for compliance with current employment law</li>
        </ul>

        <h2 className={h2Class}>Intellectual property</h2>
        <ul className={ulClass}>
          <li><strong>Trademarks:</strong> Registration status, geographic coverage, any opposition proceedings</li>
          <li><strong>Patents:</strong> Granted patents, pending applications, freedom-to-operate analysis</li>
          <li><strong>Trade secrets:</strong> How are proprietary processes, formulas, and customer lists protected?</li>
          <li><strong>Software and technology:</strong> Ownership of code, licenses, and whether key technology was developed by employees (work-for-hire) or contractors (assignment required)</li>
          <li><strong>Domain names and digital assets:</strong> Ownership and registration details</li>
          <li><strong>IP ownership:</strong> Critical check &mdash; was IP properly assigned from contractors or former employees?</li>
        </ul>

        <h2 className={h2Class}>Real estate and environmental</h2>
        <ul className={ulClass}>
          <li><strong>Owned property:</strong> Title search, liens, encumbrances, zoning compliance</li>
          <li><strong>Leased property:</strong> Lease assignment provisions, landlord consent, rent above/below market</li>
          <li><strong>Environmental:</strong> Phase I Environmental Site Assessment for owned or leased property with industrial/manufacturing use. Budget $5K&ndash;$15K</li>
          <li><strong>Permits and zoning:</strong> All required operating permits, zoning approvals, certificates of occupancy</li>
        </ul>

        <h2 className={h2Class}>Regulatory and compliance</h2>
        <ul className={ulClass}>
          <li><strong>Industry-specific licenses:</strong> Professional licenses, contractor licenses, healthcare certifications. Critical: who holds them (owner personally or the company)?</li>
          <li><strong>Data privacy:</strong> GDPR, CCPA, HIPAA compliance assessment</li>
          <li><strong>Tax compliance:</strong> Sales tax nexus, payroll tax filings, any outstanding tax obligations or audits</li>
          <li><strong>Import/export:</strong> If applicable, customs compliance, trade restrictions</li>
        </ul>

        <h2 className={h2Class}>Asset purchase vs. share purchase implications</h2>
        <p>
          The deal structure affects legal DD scope:
        </p>
        <ul className={ulClass}>
          <li><strong>
            <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
              Asset purchase
            </Link>:
          </strong> You select which assets and liabilities to acquire. Unknown liabilities generally stay with the seller. Contracts must be assigned individually</li>
          <li><strong>Share purchase:</strong> You acquire the entity, including ALL liabilities (known and unknown). Less contract assignment needed but greater liability exposure</li>
          <li>Legal DD scope is broader in share purchases because you inherit the full legal history of the entity</li>
        </ul>

        <h2 className={h2Class}>Legal DD timeline and costs</h2>
        <ul className={ulClass}>
          <li><strong>Timeline:</strong> 3&ndash;6 weeks running in parallel with financial DD</li>
          <li><strong>Legal counsel fees:</strong> $15K&ndash;$50K for buyer&rsquo;s counsel to conduct LDD (depends on deal complexity), according to Stanford GSB acquisition cost benchmarks</li>
          <li><strong>Environmental:</strong> $5K&ndash;$15K for Phase I assessment (if applicable)</li>
          <li><strong>Specialist reviews:</strong> IP counsel, employment counsel, regulatory counsel as needed</li>
        </ul>
        <h2 className={h2Class}>Negotiating legal protections in the purchase agreement</h2>
        <p>
          The findings from legal due diligence directly inform the
          representations and warranties, indemnification provisions, and
          escrow terms in the{" "}
          <Link href="/learn/purchase-agreement-apa-vs-spa" className="text-apple-accent hover:underline">
            purchase agreement
          </Link>. Specific legal risks identified during LDD should be
          addressed through targeted indemnities (seller agrees to cover
          losses from identified risks), escrow holdbacks (a portion of
          the purchase price held in escrow for 12&ndash;18 months), or
          purchase price reductions. The most common negotiated protections
          include indemnities for undisclosed litigation, tax liabilities,
          employee classification issues, and environmental remediation costs.
        </p>
        <p>
          For deal-killing issues discovered during legal DD &mdash; such as
          unresolvable title defects, material pending litigation, or
          regulatory non-compliance that threatens the operating license
          &mdash; the buyer should have a clear termination right in the LOI
          with recovery of any deposited funds and due diligence costs.
        </p>

        <p>
          Legal DD works alongside{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            financial
          </Link>{" "}
          and{" "}
          <Link href="/learn/operational-due-diligence" className="text-apple-accent hover:underline">
            operational DD
          </Link>{" "}
          to form a complete picture. For the master checklist, see our{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence checklist
          </Link>. For specific guidance on contract provisions, see our{" "}
          <Link href="/learn/spa-key-clauses" className="text-apple-accent hover:underline">
            SPA key clauses
          </Link>{" "}
          guide.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What is the most commonly overlooked area of legal due diligence?</h3>
        <p>
          Employee classification (independent contractor vs. employee) is
          the most commonly overlooked legal risk in SME acquisitions. Many
          small businesses misclassify workers to reduce payroll taxes and
          benefits costs. If the IRS or a state agency reclassifies these
          workers post-acquisition, the buyer inherits liability for unpaid
          payroll taxes, benefits, overtime, and penalties. In a share
          purchase, this liability transfers automatically. In an asset
          purchase, successor liability rules may still apply in some
          jurisdictions. Review all 1099 relationships carefully and
          assess each against the IRS common-law test.
        </p>

        <h3 className={h3Class}>How does deal structure affect legal due diligence scope?</h3>
        <p>
          In a share purchase, you acquire the entire legal entity,
          including all known and unknown liabilities. This requires
          more extensive legal DD because you inherit the company&rsquo;s
          full legal history &mdash; every contract, every past dispute,
          every regulatory interaction. In an asset purchase, you select
          specific assets and assume only specified liabilities, reducing
          (but not eliminating) legal risk. However, asset purchases
          require individual assignment of every contract, lease, and
          license, which adds complexity and time. Most SME acquisitions
          structured as asset purchases take 2&ndash;4 weeks longer to
          close due to the consent and assignment process.
        </p>

        <h3 className={h3Class}>When should I walk away from a deal based on legal DD findings?</h3>
        <p>
          Consider walking away when you discover material pending
          litigation with uncertain outcomes that could exceed the
          business&rsquo;s EBITDA, pervasive regulatory non-compliance
          that threatens the operating license, key contracts with
          change-of-control termination rights that counterparties refuse
          to waive, undisclosed tax liabilities that the seller will not
          indemnify, or IP ownership disputes that undermine the core
          business. The cost of walking away from a bad deal is always
          less than the cost of closing one.
        </p>
      </div>
    </article>
  );
}
