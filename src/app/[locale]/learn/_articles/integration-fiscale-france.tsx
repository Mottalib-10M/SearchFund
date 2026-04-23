import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function IntegrationFiscaleFranceArticle() {
  return (
    <article>
      <h1 className={h1Class}>Int&eacute;gration Fiscale (France): Tax Consolidation for Acquisitions</h1>
      <div className={bodyClass}>
        <p>Int&eacute;gration fiscale is France&apos;s tax consolidation regime, allowing a parent company and its 95%+ owned subsidiaries to file a single consolidated tax return. For search fund entrepreneurs acquiring businesses through a <Link href="/learn/sas-vs-sarl-france" className="text-apple-accent hover:underline">holding SAS</Link> in <Link href="/learn/eta-france" className="text-apple-accent hover:underline">France</Link>, this regime is essential for making acquisition debt interest tax-deductible against operating profits.</p>
      </div>

      <h2 className={h2Class}>How Int&eacute;gration Fiscale Works</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Ownership threshold:</strong> Parent must hold 95%+ of the subsidiary&apos;s capital and voting rights (directly or indirectly)</li>
          <li><strong>Opt-in regime:</strong> The parent company must elect to form the integrated group (option is irrevocable for 5 years)</li>
          <li><strong>Consolidated result:</strong> All group members&apos; profits and losses are combined into a single taxable result at the parent level</li>
          <li><strong>Tax payment:</strong> The parent company is the sole taxpayer for the entire group</li>
          <li><strong>Intragroup neutralization:</strong> Certain intragroup transactions (dividends, provisions, write-downs on subsidiary shares) are neutralized</li>
        </ul>
      </div>

      <h2 className={h2Class}>The Acquisition Benefit</h2>
      <div className={bodyClass}>
        <p>The core benefit for search fund acquisitions:</p>
        <ol className={olClass}>
          <li>The holding SAS borrows &euro;2M from <Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">Bpifrance</Link> and commercial banks to acquire the target</li>
          <li>The holding SAS has &euro;100K+ in annual interest expenses but no operating income</li>
          <li>The target company generates &euro;400K in annual taxable profit</li>
          <li>Without int&eacute;gration fiscale: the holding has no income against which to deduct its interest; the target pays full tax on &euro;400K</li>
          <li>With int&eacute;gration fiscale: the group&apos;s consolidated result is &euro;400K &minus; &euro;100K = &euro;300K. Tax is paid on &euro;300K only.</li>
          <li>Annual tax savings: approximately &euro;25,000 (at 25% rate on the &euro;100K deduction)</li>
        </ol>
      </div>

      <h2 className={h2Class}>Eligibility Requirements</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Parent must be a French-taxable company (SAS, SA, or SARL subject to IS)</li>
          <li>Parent cannot itself be 95%+ owned by another French company (must be the ultimate French parent)</li>
          <li>Subsidiaries must be French-taxable companies</li>
          <li>All group members must have the same fiscal year-end</li>
          <li>The election must be filed before the start of the first consolidated fiscal year</li>
        </ul>
      </div>

      <h2 className={h2Class}>Amendment Rabot and Limitations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Rabot rule:</strong> A 1% add-back applies to dividends received within the group (effectively, 1% of intragroup dividends is taxable)</li>
          <li><strong>Interest limitation (30% EBITDA):</strong> Even within int&eacute;gration fiscale, interest deduction is capped at 30% of the group&apos;s EBITDA (with a &euro;3M safe harbor)</li>
          <li><strong>Anti-abuse (Amendement Charasse):</strong> If the holding borrows to acquire shares from a related party, the interest may be partially non-deductible</li>
          <li><strong>Entry/exit:</strong> Companies joining or leaving the group trigger specific recapture and adjustment mechanisms</li>
        </ul>
      </div>

      <h2 className={h2Class}>Practical Setup Steps</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li>Create the holding SAS (if not already existing)</li>
          <li>Complete the acquisition of 95%+ of the target&apos;s shares</li>
          <li>File the option for int&eacute;gration fiscale with the tax administration (Direction G&eacute;n&eacute;rale des Finances Publiques)</li>
          <li>Align fiscal year-ends if different</li>
          <li>Implement internal conventions between group members for tax charge allocation</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Int&eacute;gration fiscale enables the holding company&apos;s acquisition debt interest to offset the target&apos;s operating profits</li>
          <li>Requires 95%+ ownership and same fiscal year-end across all group members</li>
          <li>The election is irrevocable for 5 years &mdash; plan carefully before opting in</li>
          <li>Interest deduction is capped at 30% of consolidated EBITDA with a &euro;3M safe harbor</li>
          <li>Work with a French expert-comptable and fiscaliste to set up and maintain the consolidated group</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-france" className="text-apple-accent hover:underline">ETA in France</Link></li>
        <li><Link href="/learn/sas-vs-sarl-france" className="text-apple-accent hover:underline">SAS vs. SARL: French Entity Structures</Link></li>
        <li><Link href="/learn/holding-company-tax" className="text-apple-accent hover:underline">Holding Company Tax Optimization</Link></li>
        <li><Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">Bpifrance Financing</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Code G&eacute;n&eacute;ral des Imp&ocirc;ts, <em>Articles 223 A &agrave; 223 U: R&eacute;gime de l&apos;int&eacute;gration fiscale</em></li>
        <li>DGFiP, <em>Guide Pratique de l&apos;Int&eacute;gration Fiscale</em> (2024)</li>
        <li>Francis Lefebvre, <em>M&eacute;mento Fiscal: Int&eacute;gration Fiscale</em> (2024)</li>
        <li>PwC France, <em>Tax Consolidation Guide for M&amp;A</em> (2024)</li>
      </ul>
    </article>
  );
}
