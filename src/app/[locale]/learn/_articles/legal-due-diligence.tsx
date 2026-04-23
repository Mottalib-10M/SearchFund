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
          <li><strong>Employee classification:</strong> Independent contractor vs. employee (misclassification creates significant liability)</li>
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
          <li><strong>Legal counsel fees:</strong> $15K&ndash;$50K for buyer&rsquo;s counsel to conduct LDD (depends on deal complexity)</li>
          <li><strong>Environmental:</strong> $5K&ndash;$15K for Phase I assessment (if applicable)</li>
          <li><strong>Specialist reviews:</strong> IP counsel, employment counsel, regulatory counsel as needed</li>
        </ul>
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
          </Link>.
        </p>
      </div>
    </article>
  );
}
