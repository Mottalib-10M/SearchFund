import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function IntegrationFiscaleFranceArticle() {
  return (
    <article>
      <h1 className={h1Class}>Int&eacute;gration Fiscale (France): Tax Consolidation for Acquisitions</h1>
      <div className={bodyClass}>
        <p>Int&eacute;gration fiscale is France&apos;s tax consolidation regime, allowing a parent company and its 95%+ owned subsidiaries to file a single consolidated tax return. Established under Articles 223 A through 223 U of the Code G&eacute;n&eacute;ral des Imp&ocirc;ts, the regime is used by over 30,000 French corporate groups. For search fund entrepreneurs acquiring businesses through a <Link href="/learn/sas-vs-sarl-france" className="text-apple-accent hover:underline">holding SAS</Link> in <Link href="/learn/eta-france" className="text-apple-accent hover:underline">France</Link>, this regime is essential for making acquisition debt interest tax-deductible against operating profits.</p>
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
          <li>Annual tax savings: approximately &euro;25,000 (at the current 25% French corporate tax rate on the &euro;100K deduction)</li>
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
          <li><strong>Anti-abuse (Amendement Charasse):</strong> If the holding borrows to acquire shares from a related party, the interest may be partially non-deductible. The DGFiP applies this rule broadly, so any transaction with a shareholder or their family must be carefully structured</li>
          <li><strong>Entry/exit:</strong> Companies joining or leaving the group trigger specific recapture and adjustment mechanisms</li>
          <li><strong>Recent reform:</strong> The 2019 Finance Act modernized the int&eacute;gration fiscale regime to align with the EU Parent-Subsidiary Directive, eliminating some double taxation on cross-border dividends while tightening anti-abuse provisions</li>
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
          <li>The election is irrevocable for 5 years, plan carefully before opting in</li>
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

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>
        How quickly can I set up int&eacute;gration fiscale after acquiring a French company?
      </h3>
      <div className={bodyClass}>
        <p>
          The election must be filed before the start of the first
          consolidated fiscal year, so timing depends on when you close the
          acquisition. If you close mid-year, you may need to wait until
          the following fiscal year to begin consolidation. Work with your
          expert-comptable to align the{" "}
          <Link href="/learn/holding-company-tax" className="text-apple-accent hover:underline">
            holding company
          </Link>{" "}
          and target&rsquo;s fiscal year-ends before filing.
        </p>
      </div>

      <h3 className={h3Class}>
        What happens if I own only 90% of the target company?
      </h3>
      <div className={bodyClass}>
        <p>
          You cannot use int&eacute;gration fiscale. The 95% threshold
          applies to both capital and voting rights. If a seller retains
          more than 5% (for example, through an earn-out or retained
          minority stake), you will not qualify for tax consolidation until
          you acquire the remaining shares. This is a critical consideration
          when structuring deals with minority seller reinvestment.
        </p>
      </div>

      <h3 className={h3Class}>
        Can I break the int&eacute;gration fiscale before the 5-year commitment?
      </h3>
      <div className={bodyClass}>
        <p>
          The election is irrevocable for 5 fiscal years. Early termination
          triggers recapture mechanisms and potential tax adjustments. However,
          if the ownership drops below 95% (for example, through a partial
          sale), the subsidiary automatically exits the group. If you sell
          the entire subsidiary, the remaining group can continue. Consult
          a fiscaliste before making any changes to group composition.
        </p>
      </div>
    </article>
  );
}
