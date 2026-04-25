import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ForeignInvestmentScreeningArticle() {
  return (
    <article>
      <h1 className={h1Class}>Foreign Investment Screening: FDI Rules by Country</h1>
      <div className={bodyClass}>
        <p>Foreign Direct Investment (FDI) screening regulations have expanded significantly in recent years, particularly in the EU, US, UK, and Australia. For search fund entrepreneurs considering <Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">cross-border acquisitions</Link>, understanding whether your deal triggers FDI review is essential for avoiding delays, conditions, or even prohibition of the transaction.</p>
      </div>

      <h2 className={h2Class}>EU FDI Screening Framework</h2>
      <div className={bodyClass}>
        <p>The EU established a cooperation framework in 2020 (Regulation 2019/452) that coordinates national screening mechanisms:</p>
        <ul className={ulClass}>
          <li><strong>No EU-level veto:</strong> The EU Commission can issue opinions but cannot block a deal. Blocking authority remains with individual member states.</li>
          <li><strong>Sectors of concern:</strong> Critical infrastructure, critical technologies, supply of critical inputs, media, and data processing</li>
          <li><strong>Cross-border notification:</strong> When a deal may affect other EU members&apos; security or public order, the screening state must notify them</li>
          <li><strong>Most EU states:</strong> Now have national FDI screening laws (27 of 27 member states)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Country FDI Rules</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>United States (CFIUS)</h3>
        <ul className={ulClass}>
          <li>The Committee on Foreign Investment in the United States (CFIUS) reviews acquisitions by foreign persons</li>
          <li>Mandatory filing for: deals involving critical technology, critical infrastructure, or sensitive personal data</li>
          <li>Voluntary filing recommended for most other cross-border acquisitions</li>
          <li>CFIUS can impose conditions or block transactions on national security grounds</li>
          <li>Review timeline: 45-day initial review + 45-day investigation if needed</li>
        </ul>

        <h3 className={h3Class}>Germany</h3>
        <ul className={ulClass}>
          <li>Mandatory notification for acquisitions of 10%+ in defense/IT security; 20%+ or 25%+ in other sensitive sectors</li>
          <li>Broad sector coverage: AI, robotics, semiconductors, biotech, telecom, energy, food, media</li>
          <li>Review period: 2-4 months (can be extended)</li>
          <li>The Federal Ministry for Economic Affairs (BMWK) conducts the review</li>
        </ul>

        <h3 className={h3Class}>France</h3>
        <ul className={ulClass}>
          <li>Prior authorization required from the Ministry of Economy for foreign acquisitions in sensitive sectors</li>
          <li>Sectors: defense, energy, telecom, transport, water, health, AI, cybersecurity, media, food security</li>
          <li>Threshold: Acquisition of control (in most sectors) or 25%+ voting rights (for non-EU investors)</li>
          <li>Review period: 30 business days (Phase 1) + 45 business days (Phase 2 if needed)</li>
        </ul>

        <h3 className={h3Class}>United Kingdom (NSI Act)</h3>
        <ul className={ulClass}>
          <li>The National Security and Investment (NSI) Act 2021 requires mandatory notification for 17 sensitive sectors</li>
          <li>Voluntary notification available for acquisitions in other sectors</li>
          <li>Threshold: Acquisition of 25%+, 50%+, or 75%+ of shares or voting rights; or material influence</li>
          <li>Review period: 30 working days (initial) + 30 days (extended assessment) + potential further extension</li>
        </ul>

        <h3 className={h3Class}>Italy</h3>
        <ul className={ulClass}>
          <li>Golden Power rules apply to defense, national security, energy, transport, telecom, 5G, and other strategic sectors</li>
          <li>The Presidency of the Council of Ministers must be notified</li>
          <li>Can impose conditions or block transactions</li>
        </ul>
      </div>

      <h2 className={h2Class}>Practical Implications for Search Funds</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Most SME acquisitions are not affected:</strong> FDI screening primarily targets sensitive sectors and larger deals. Typical search fund targets (services, manufacturing, distribution) usually don&apos;t trigger review.</li>
          <li><strong>Exception sectors:</strong> Healthcare, IT services, defense supply chain, telecom, and data-intensive businesses may trigger review even at smaller sizes.</li>
          <li><strong>Timeline impact:</strong> If FDI review is required, add 2-6 months to your acquisition timeline.</li>
          <li><strong>Conditionality:</strong> Include an FDI approval condition in your <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">LOI</Link> and purchase agreement if there&apos;s any possibility of review.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>FDI screening has expanded significantly since 2020, all EU member states now have screening mechanisms</li>
          <li>Most typical search fund acquisitions (services, manufacturing) do not trigger FDI review</li>
          <li>Healthcare, IT, defense supply chain, telecom, and data businesses may require notification</li>
          <li>If applicable, FDI review adds 2-6 months to the deal timeline, plan accordingly</li>
          <li>Include FDI approval as a closing condition in the purchase agreement when there&apos;s any doubt</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions in Europe</Link></li>
        <li><Link href="/learn/closing-process" className="text-apple-accent hover:underline">The Closing Process</Link></li>
        <li><Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">Letter of Intent</Link></li>
        <li><Link href="/learn/double-taxation-treaties" className="text-apple-accent hover:underline">Double Taxation Treaties</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>Do most search fund acquisitions trigger FDI screening?</h3>
      <p className={bodyClass}>
        No. The vast majority of typical search fund acquisitions, targeting services, manufacturing, and distribution businesses in the $2-15M EBITDA range, do not trigger FDI review. FDI screening primarily targets sensitive sectors (defense, critical infrastructure, telecommunications, healthcare IT, and data-intensive businesses) and typically applies to cross-border transactions where the acquirer is a foreign person or entity. According to the OECD&rsquo;s 2024 analysis of FDI screening policies, fewer than 5% of SME acquisitions in OECD countries were subject to formal FDI review. However, if your target operates in any potentially sensitive sector, consult local legal counsel early in the process.
      </p>

      <h3 className={h3Class}>How long does CFIUS review add to an acquisition timeline?</h3>
      <p className={bodyClass}>
        A CFIUS review in the United States follows a structured timeline: a 45-day initial review period followed by an optional 45-day investigation if the committee identifies national security concerns. In practice, the U.S. Treasury Department&rsquo;s 2024 annual report shows that approximately 60% of voluntarily filed transactions are cleared within the initial 45-day review period. Including pre-filing consultations and document preparation, the total process typically adds 2-4 months to an acquisition timeline. For mandatory filings involving critical technology or sensitive personal data, budget 3-6 months. Include a CFIUS approval condition in your purchase agreement whenever there is any possibility of review.
      </p>

      <h3 className={h3Class}>What happens if an FDI screening authority blocks or conditions a transaction?</h3>
      <p className={bodyClass}>
        If an FDI authority blocks a transaction, the deal cannot proceed in its proposed form. More commonly, authorities impose conditions rather than outright blocking, these may include security clearance requirements, data localization mandates, restrictions on certain business activities, or appointment of government-approved board members. The European Commission&rsquo;s 2024 FDI annual report found that only 2% of reviewed transactions were blocked, while 15% were approved with conditions. If conditionality is imposed, evaluate whether the conditions materially change the economics or operational flexibility of the acquisition before proceeding.
      </p>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>European Commission, <em>EU FDI Screening Regulation (2019/452) Annual Report</em> (2024)</li>
        <li>U.S. Treasury Department, <em>CFIUS Annual Report to Congress</em> (2024)</li>
        <li>UK Cabinet Office, <em>National Security and Investment Act Guidance</em> (2024)</li>
        <li>OECD, <em>FDI Screening Policies in OECD Countries</em> (2024)</li>
      </ul>
    </article>
  );
}
