import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function HoldingCompanyTaxArticle() {
  return (
    <article>
      <h1 className={h1Class}>Holding Company Tax Optimization: Parent-Subsidiary Structures</h1>
      <div className={bodyClass}>
        <p>A well-structured holding company can significantly reduce the tax burden of your acquisition and improve returns for all stakeholders. By placing a <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">holding company</Link> between investors and the operating business, acquirers can access interest deductibility, participation exemptions, tax consolidation, and efficient dividend distributions.</p>
      </div>

      <h2 className={h2Class}>Why Use a Holding Company?</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Interest deductibility:</strong> Acquisition debt sits at the holding level, and interest expenses can be offset against operating profits through tax consolidation</li>
          <li><strong>Liability separation:</strong> The holding company isolates the investors&apos; equity from the operating company&apos;s commercial liabilities</li>
          <li><strong>Tax-efficient distributions:</strong> Dividends from the operating company to the holding benefit from participation exemptions in most jurisdictions</li>
          <li><strong>Multi-company platform:</strong> A holding company enables <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build strategies</Link> by acquiring multiple operating companies under one umbrella</li>
          <li><strong>Exit planning:</strong> Selling shares in the operating subsidiary from the holding company often benefits from preferential capital gains treatment</li>
        </ul>
      </div>

      <h2 className={h2Class}>Interest Deduction Mechanics</h2>
      <div className={bodyClass}>
        <p>The core tax benefit of the holding structure in leveraged acquisitions:</p>
        <ol className={olClass}>
          <li>The holding company borrows to fund the acquisition (e.g., &euro;2M bank debt)</li>
          <li>The operating company generates profits that flow up as dividends (tax-free under participation exemption)</li>
          <li>Through tax consolidation, the holding company&apos;s interest expense offsets the operating company&apos;s taxable income</li>
          <li>Net effect: the acquisition debt interest reduces the group&apos;s total tax bill</li>
        </ol>
        <p><strong>Limitation:</strong> Most jurisdictions cap interest deductibility at 30% of EBITDA (EU ATAD directive implementation). Some have additional thin capitalization rules.</p>
      </div>

      <h2 className={h2Class}>Participation Exemptions by Country</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Netherlands:</strong> 100% exemption on dividends and capital gains (5%+ ownership)</li>
          <li><strong>Luxembourg:</strong> 100% exemption (10%+ ownership or &euro;1.2M+ cost)</li>
          <li><strong>France:</strong> 95% exemption on capital gains; dividends 95% exempt (5% taxed as expenses)</li>
          <li><strong>Germany:</strong> 95% of dividends and capital gains exempt (5% taxed as non-deductible expenses)</li>
          <li><strong>UK:</strong> Substantial Shareholdings Exemption (SSE) &mdash; 100% on capital gains for qualifying disposals</li>
          <li><strong>Italy:</strong> 95% exemption on capital gains (PEX); 95% exemption on dividends</li>
          <li><strong>Spain:</strong> 95% exemption on dividends and capital gains (5%+ ownership, 1+ year holding)</li>
          <li><strong>Belgium:</strong> 100% exemption on dividends (95% before recent reform); 100% capital gains exemption</li>
          <li><strong>Switzerland:</strong> Participation relief reducing effective tax on qualifying dividends and gains</li>
        </ul>
      </div>

      <h2 className={h2Class}>Tax Consolidation Regimes</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>France (int&eacute;gration fiscale):</strong> 95%+ ownership required. Full consolidation of profits and losses. See <Link href="/learn/integration-fiscale-france" className="text-apple-accent hover:underline">detailed guide</Link>.</li>
          <li><strong>Germany (Organschaft):</strong> Requires a profit transfer agreement (Ergebnisabf&uuml;hrungsvertrag). See <Link href="/learn/organschaft-germany" className="text-apple-accent hover:underline">detailed guide</Link>.</li>
          <li><strong>Netherlands (fiscale eenheid):</strong> 95%+ ownership. Full consolidation. One of Europe&apos;s most flexible systems.</li>
          <li><strong>UK (group relief):</strong> 75%+ ownership. Can surrender losses between group members.</li>
          <li><strong>Spain (consolidaci&oacute;n fiscal):</strong> 75%+ ownership (70% for listed companies). Full consolidation.</li>
          <li><strong>Italy (consolidato fiscale):</strong> Majority ownership required. Opt-in regime for 3 years.</li>
          <li><strong>US:</strong> 80%+ ownership. Affiliated group can file a consolidated return.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Common Pitfalls</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Thin capitalization:</strong> Excessive debt-to-equity ratios may trigger interest deduction limitations beyond the standard 30% EBITDA cap</li>
          <li><strong>Anti-abuse rules:</strong> ATAD (EU), GAAR provisions, and specific anti-avoidance rules can challenge aggressive structures</li>
          <li><strong>Transfer pricing:</strong> Management fees, intercompany loans, and service charges between holding and operating companies must be at arm&apos;s length</li>
          <li><strong>Substance requirements:</strong> The holding company must have genuine economic substance (real office, employees, decision-making) to access treaty benefits</li>
          <li><strong>Exit complications:</strong> Unwinding a holding structure can trigger tax events if not planned properly</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>A holding company enables interest deductibility, liability separation, and tax-efficient distributions</li>
          <li>Participation exemptions in most European countries make holding structures very tax-efficient for dividends and exits</li>
          <li>Tax consolidation offsets the holding company&apos;s acquisition debt interest against operating profits</li>
          <li>Interest deductions are typically capped at 30% of EBITDA under ATAD rules</li>
          <li>Always ensure the holding company has genuine substance to avoid anti-abuse challenges</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">Holding Company Structures for Acquisitions</Link></li>
        <li><Link href="/learn/integration-fiscale-france" className="text-apple-accent hover:underline">Intégration Fiscale (France)</Link></li>
        <li><Link href="/learn/organschaft-germany" className="text-apple-accent hover:underline">Organschaft (Germany)</Link></li>
        <li><Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">Tax Optimization for Acquisitions</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>European Commission, <em>Anti-Tax Avoidance Directive (ATAD) Implementation Guide</em> (2024)</li>
        <li>OECD, <em>BEPS Action 4: Interest Deduction Limitations</em> (2024)</li>
        <li>EY, <em>Worldwide Corporate Tax Guide</em> (2024)</li>
        <li>Deloitte, <em>Holding Company Regimes: A Global Comparison</em> (2024)</li>
      </ul>
    </article>
  );
}
