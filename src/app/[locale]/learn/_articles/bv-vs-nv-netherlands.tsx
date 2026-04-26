import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function BVvsNVNetherlandsArticle() {
  return (
    <article>
      <h1 className={h1Class}>BV vs. NV: Dutch Entity Structures for Acquisitions</h1>
      <div className={bodyClass}>
        <p>When acquiring a business in the <Link href="/learn/eta-benelux" className="text-apple-accent hover:underline">Netherlands</Link>, the two main corporate structures are the BV (Besloten Vennootschap) and the NV (Naamloze Vennootschap). Since the Flex-BV reform of 2012, which was codified in Book 2 of the Dutch Civil Code (Burgerlijk Wetboek), the BV has become even more attractive for SME acquisitions, offering exceptional flexibility combined with the Netherlands&apos; favorable tax environment.</p>
        <p>The Netherlands is one of Europe&apos;s most popular jurisdictions for holding company structures, thanks to its 100% participation exemption on qualifying shareholdings, extensive tax treaty network (90+ countries), and the Flex-BV&apos;s governance flexibility. According to the Belastingdienst (Dutch Tax Authority), the BV accounts for the vast majority of new company formations, with NV structures reserved almost exclusively for listed companies and large financial institutions.</p>
      </div>

      <h2 className={h2Class}>BV (Besloten Vennootschap)</h2>
      <div className={bodyClass}>
        <p>The BV is the standard structure for Dutch SME acquisitions:</p>
        <ul className={ulClass}>
          <li><strong>Minimum capital:</strong> &euro;0.01 (effectively no minimum since the 2012 Flex-BV reform)</li>
          <li><strong>Ownership units:</strong> Aandelen (shares), but transfer restricted by default</li>
          <li><strong>Transfer:</strong> Requires notarial deed (notari&euml;le akte) for all share transfers</li>
          <li><strong>Share classes:</strong> Full flexibility to create multiple classes with different voting rights, dividend preferences, and economic rights</li>
          <li><strong>Governance:</strong> Managed by a Bestuur (management board). Optional Raad van Commissarissen (supervisory board).</li>
          <li><strong>Distribution test:</strong> Before any dividend, the board must perform a balance sheet test and a liquidity test</li>
          <li><strong>Audit:</strong> Required only for larger companies exceeding statutory thresholds</li>
        </ul>
      </div>

      <h2 className={h2Class}>NV (Naamloze Vennootschap)</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Minimum capital:</strong> &euro;45,000 (at least 25% paid in at formation)</li>
          <li><strong>Ownership units:</strong> Aandelen (shares), freely transferable by default (bearer or registered)</li>
          <li><strong>Governance:</strong> More formal requirements. Mandatory management board. Supervisory board required for larger companies.</li>
          <li><strong>Stock exchange:</strong> Only NVs can be listed on Euronext Amsterdam</li>
          <li><strong>Employee participation:</strong> Works council (ondernemingsraad) mandatory for 50+ employees, with advisory rights on acquisitions</li>
          <li><strong>Use case:</strong> Large companies, listed entities, and companies needing public share issuance</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Differences for Acquisitions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Cost of setup:</strong> BV requires essentially no capital; NV requires &euro;45,000</li>
          <li><strong>Flexibility:</strong> Post-2012 Flex-BV reform, the BV offers nearly unlimited flexibility for governance, share classes, and profit distribution</li>
          <li><strong>Transfer process:</strong> Both require notarial deed, but BV share transfers have default restrictions that can be modified in the articles</li>
          <li><strong>Investor structures:</strong> BV fully supports preferred shares, tracking shares, and complex waterfall structures</li>
          <li><strong>Works council:</strong> Required for both BV and NV with 50+ employees; must be consulted on acquisitions</li>
        </ul>
      </div>

      <h2 className={h2Class}>Typical Dutch Acquisition Structure</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Holding BV:</strong> Create a new BV as the acquisition vehicle</li>
          <li><strong>Stichting Administratiekantoor (STAK):</strong> Optional, a foundation structure that separates economic and voting rights, sometimes used for employee participation or governance purposes</li>
          <li><strong>Bank financing:</strong> <Link href="/learn/mkb-financing-netherlands" className="text-apple-accent hover:underline">BMKB-backed</Link> and commercial bank loans into the holding BV</li>
          <li><strong>Target acquisition:</strong> Holding BV acquires 100% of the target BV shares</li>
          <li><strong>Fiscal unity:</strong> Tax consolidation between holding and subsidiary if the holding owns 95%+ of the target</li>
        </ol>
      </div>

      <h2 className={h2Class}>Tax Advantages of Dutch BV Structures</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Corporate tax:</strong> 19% on first &euro;200,000; 25.8% above that</li>
          <li><strong>Participation exemption (deelnemingsvrijstelling):</strong> 100% exemption on dividends and capital gains from qualifying participations (5%+ ownership). This is one of Europe&apos;s most generous participation exemptions.</li>
          <li><strong>Fiscal unity:</strong> Full tax consolidation between 95%+ owned group members, offsetting profits and losses</li>
          <li><strong>Innovation box:</strong> 9% effective tax rate on qualifying IP income</li>
          <li><strong>Goodwill:</strong> Deductible over its useful economic life in asset deals (typically 5-10 years)</li>
          <li><strong>Treaty network:</strong> The Netherlands has one of the world&apos;s most extensive tax treaty networks (90+ treaties)</li>
          <li><strong>30% ruling:</strong> Expatriate employees can receive 30% of their salary tax-free for up to 5 years</li>
        </ul>
        <p>The Dutch participation exemption (deelnemingsvrijstelling) deserves special emphasis for search fund operators. Under this regime, dividends received from qualifying subsidiaries (5%+ ownership) and capital gains on the sale of those subsidiaries are 100% exempt from corporate tax. This means that a holding BV can receive all profits from the operating company tax-free and, upon exit, pay zero corporate tax on the capital gain. This is one of Europe&apos;s most generous participation exemptions and a key reason why the Netherlands is so popular for <Link href="/learn/holding-company-tax" className="text-apple-accent hover:underline">holding company structures</Link> in cross-border acquisitions.</p>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>BV is the clear choice for SME acquisitions: virtually no minimum capital, full governance flexibility, and investor-friendly share class options</li>
          <li>NV is only relevant for large companies or those planning a stock exchange listing</li>
          <li>The Dutch participation exemption (100% on qualifying participations) makes holding BV structures exceptionally tax-efficient</li>
          <li>Fiscal unity allows full tax consolidation for 95%+ owned group members</li>
          <li>Companies with 50+ employees must have a works council that must be consulted on acquisitions</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-benelux" className="text-apple-accent hover:underline">ETA in the Benelux</Link></li>
        <li><Link href="/learn/mkb-financing-netherlands" className="text-apple-accent hover:underline">MKB Financing Netherlands</Link></li>
        <li><Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">Holding Company Structures for Acquisitions</Link></li>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions in Europe</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <h3 className={h3Class}>Should I use a BV or NV for a Dutch acquisition?</h3>
      <div className={bodyClass}>
        <p>For virtually all SME acquisitions, the BV is the correct choice. Since the 2012 Flex-BV reform, the BV offers nearly unlimited flexibility for governance, share classes, and profit distribution, with essentially no minimum capital requirement (&euro;0.01). The NV is only relevant for companies planning a stock exchange listing on Euronext Amsterdam or large financial institutions that need to issue publicly traded shares. The BV fully supports preferred shares, tracking shares, and complex equity waterfall structures used in search fund deals.</p>
      </div>

      <h3 className={h3Class}>What is fiscal unity and how does it benefit acquisition structures?</h3>
      <div className={bodyClass}>
        <p>Fiscal unity (fiscale eenheid) allows a parent BV that owns 95% or more of a subsidiary to consolidate both entities into a single tax filing. The primary benefit is that profits from the operating subsidiary can be offset against interest costs on acquisition debt held at the holding BV level, effectively making acquisition financing tax-deductible. This is a powerful tool for leveraged acquisitions because the <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition debt</Link> sitting in the holding company generates tax deductions that directly reduce the operating company&apos;s tax bill.</p>
      </div>

      <h3 className={h3Class}>Do I need a works council for a Dutch acquisition?</h3>
      <div className={bodyClass}>
        <p>Yes, if the target company has 50 or more employees, it must have a works council (ondernemingsraad), which has advisory rights on acquisitions and other major business decisions under Dutch law. The works council must be consulted before closing, failing to do so can delay or even block the transaction. For companies with 10-50 employees, a personnel representation body (personeelsvertegenwoordiging) may be required with more limited rights. Factor works council consultation into your <Link href="/learn/closing-process" className="text-apple-accent hover:underline">closing timeline</Link>, as it typically adds 4-6 weeks to the process.</p>
      </div>
    </article>
  );
}
