import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function DataPrivacyGDPRArticle() {
  return (
    <article>
      <h1 className={h1Class}>Data Privacy (GDPR/CCPA) Considerations in Acquisitions</h1>
      <div className={bodyClass}>
        <p>Data privacy regulations create specific obligations and risks in business acquisitions. Whether you&apos;re acquiring a business in the EU (GDPR), California (CCPA/CPRA), or other regulated jurisdictions, understanding how customer data, employee data, and consent obligations transfer is essential for avoiding costly regulatory penalties and reputational damage.</p>
      </div>

      <h2 className={h2Class}>GDPR in Acquisitions</h2>
      <div className={bodyClass}>
        <p>The EU General Data Protection Regulation affects acquisitions in several ways:</p>
        <ul className={ulClass}>
          <li><strong>Due diligence data sharing:</strong> The seller must have a lawful basis (legitimate interest) to share personal data during <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link>. Data rooms should use anonymized or pseudonymized data where possible.</li>
          <li><strong>Data processing agreements:</strong> If the buyer accesses personal data pre-closing, a data processing agreement (DPA) may be required.</li>
          <li><strong>Legal basis for continued processing:</strong> Post-acquisition, the buyer must ensure it has a valid legal basis to continue processing the acquired personal data.</li>
          <li><strong>Consent:</strong> If the business relies on consent for marketing, verify that consents cover the post-acquisition use and the new legal entity.</li>
          <li><strong>Privacy notices:</strong> Update privacy notices to reflect the new data controller (buyer entity) post-closing.</li>
          <li><strong>Data Protection Officer:</strong> Determine whether a DPO appointment is required for the acquired business.</li>
        </ul>
      </div>

      <h2 className={h2Class}>CCPA/CPRA in Acquisitions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Business purpose exception:</strong> CCPA allows sharing personal information for due diligence as part of a merger or acquisition transaction.</li>
          <li><strong>Opt-out rights:</strong> Post-acquisition, consumers retain the right to opt out of the sale of their personal information.</li>
          <li><strong>Purpose limitation:</strong> The buyer must use acquired personal data only for purposes compatible with the context in which it was collected.</li>
          <li><strong>Updated disclosures:</strong> Privacy policies must be updated within 90 days post-acquisition.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Data Privacy Due Diligence Checklist</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li>Inventory all personal data collected, processed, and stored by the target</li>
          <li>Review privacy policies, consent mechanisms, and data processing agreements</li>
          <li>Assess compliance history: any data breaches, regulatory investigations, or complaints</li>
          <li>Evaluate data security measures: encryption, access controls, incident response plans</li>
          <li>Check cross-border data transfers: Standard Contractual Clauses, adequacy decisions, Binding Corporate Rules</li>
          <li>Review vendor contracts for data processing terms and subprocessor obligations</li>
          <li>Assess consent quality: was consent freely given, specific, informed, and unambiguous?</li>
          <li>Check for Data Protection Impact Assessments (DPIAs) on high-risk processing activities</li>
        </ol>
      </div>

      <h2 className={h2Class}>Stock vs. Asset Purchase: Data Privacy Impact</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Stock purchase:</strong> The legal entity remains the same data controller. Existing consents and processing bases generally continue. Update privacy notices to reflect ownership change.</li>
          <li><strong>Asset purchase:</strong> Personal data must be actively transferred to the buyer&apos;s entity. This constitutes a new disclosure/sharing of personal data, requiring a lawful basis. Existing consents may not cover the new entity.</li>
          <li><strong>Employee data:</strong> Under GDPR/TUPE, employee data transfers automatically with the undertaking in asset deals. In non-EU asset deals, new consent or notice may be required.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Penalties & Risk Exposure</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>GDPR fines:</strong> Up to &euro;20 million or 4% of annual global turnover (whichever is higher)</li>
          <li><strong>CCPA fines:</strong> Up to $7,500 per intentional violation; $2,500 per unintentional violation</li>
          <li><strong>Class action risk:</strong> Under CCPA, consumers can seek $100&ndash;$750 per consumer per incident for data breaches</li>
          <li><strong>Reputational damage:</strong> Data privacy failures post-acquisition can erode customer trust and brand value</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Use anonymized or pseudonymized data during due diligence to minimize GDPR risk</li>
          <li>Verify that existing consents and privacy notices cover post-acquisition data processing</li>
          <li>Asset deals create more data privacy complexity than stock deals due to the need to transfer data between entities</li>
          <li>Budget for privacy compliance updates (notice changes, DPAs, potential re-consent campaigns) in your post-acquisition plan</li>
          <li>GDPR fines of up to 4% of turnover make privacy due diligence a material financial risk</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">Due Diligence Checklist</Link></li>
        <li><Link href="/learn/cybersecurity-for-acquired-businesses" className="text-apple-accent hover:underline">Cybersecurity for Acquired Companies</Link></li>
        <li><Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">Representations & Warranties in M&A</Link></li>
        <li><Link href="/learn/post-acquisition-technology-audit" className="text-apple-accent hover:underline">Technology Audit Post-Acquisition</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>European Data Protection Board, <em>Guidelines on Data Processing in M&amp;A Transactions</em> (2024)</li>
        <li>California Attorney General, <em>CCPA/CPRA Compliance Guide for M&amp;A</em> (2024)</li>
        <li>ICO (UK), <em>Data Protection and Mergers &amp; Acquisitions</em> (2024)</li>
        <li>IAPP, <em>Privacy in M&amp;A Transactions Guide</em> (2024)</li>
      </ul>
    </article>
  );
}
