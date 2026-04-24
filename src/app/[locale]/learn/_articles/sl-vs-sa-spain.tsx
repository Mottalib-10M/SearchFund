import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SLvsSASpainArticle() {
  return (
    <article>
      <h1 className={h1Class}>SL vs. SA: Spanish Entity Structures for Buyers</h1>
      <div className={bodyClass}>
        <p>When acquiring a business in <Link href="/learn/eta-spain" className="text-apple-accent hover:underline">Spain</Link>, you will almost always encounter a Sociedad Limitada (SL) or a Sociedad An&oacute;nima (SA). The SL is Spain&apos;s most popular corporate form for SMEs, while the SA is used for larger companies. Understanding their differences is essential for structuring your acquisition and planning governance.</p>
      </div>

      <h2 className={h2Class}>SL (Sociedad Limitada)</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Minimum capital:</strong> &euro;3,000</li>
          <li><strong>Ownership units:</strong> Participaciones sociales (ownership interests, not shares)</li>
          <li><strong>Transfer restrictions:</strong> Other partners have a preferential acquisition right (derecho de adquisici&oacute;n preferente). Transfers to third parties require partner approval unless statutes say otherwise.</li>
          <li><strong>Governance:</strong> Managed by one or more Administradores (directors). Can have a sole administrator, joint administrators, or a board.</li>
          <li><strong>Maximum partners:</strong> No legal maximum (previously limited to 50; no longer the case)</li>
          <li><strong>Audit:</strong> Not required unless the company exceeds certain thresholds (assets &gt;&euro;2.85M, revenue &gt;&euro;5.7M, or &gt;50 employees for two consecutive years)</li>
          <li><strong>Transfer tax (ITP):</strong> 1&ndash;6% depending on autonomous community (not subject to securities transfer tax)</li>
        </ul>
      </div>

      <h2 className={h2Class}>SA (Sociedad An&oacute;nima)</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Minimum capital:</strong> &euro;60,000 (at least 25% paid in at formation)</li>
          <li><strong>Ownership units:</strong> Acciones (shares) &mdash; freely transferable by default</li>
          <li><strong>Share classes:</strong> Can create different share classes with varied voting and dividend rights</li>
          <li><strong>Governance:</strong> Board of directors required if more than one administrator. More formal governance requirements.</li>
          <li><strong>Public listing:</strong> Only SAs can be listed on the stock exchange (relevant for future IPO exits)</li>
          <li><strong>Transfer tax:</strong> Share transfers are exempt from ITP (Transfer Tax) and VAT &mdash; significant tax advantage for share deals</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Differences for Acquisitions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Transfer flexibility:</strong> SA shares transfer freely; SL participaciones require partner consent unless waived in statutes</li>
          <li><strong>Transfer tax:</strong> SA share transfers are exempt from ITP; SL transfers face 1&ndash;6% ITP depending on the region</li>
          <li><strong>Investor structures:</strong> SA allows preferred share classes; SL offers less flexibility for investor preference structures</li>
          <li><strong>Cost:</strong> SL requires only &euro;3,000 capital; SA requires &euro;60,000 &mdash; meaningful for holding company setup</li>
          <li><strong>Governance formality:</strong> SA has more rigid governance requirements, including mandatory board of directors for multiple administrators</li>
          <li><strong>Exit planning:</strong> If considering a future sale to a larger buyer or potential listing, SA is more flexible</li>
        </ul>
      </div>

      <h2 className={h2Class}>Typical Spanish Acquisition Structure</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Holding SL or SA:</strong> Create the acquisition vehicle. SL if keeping it simple; SA if investors need preferred shares.</li>
          <li><strong>Financing:</strong> <Link href="/learn/ico-spain" className="text-apple-accent hover:underline">ICO</Link> and <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">commercial bank</Link> loans into the holding entity</li>
          <li><strong><Link href="/learn/creative-financing" className="text-apple-accent hover:underline">ENISA</Link> participative loan:</strong> Counts as equity under Spanish law, reducing apparent use</li>
          <li><strong>Target acquisition:</strong> Purchase the SL or SA shares of the target company</li>
          <li><strong>Tax consolidation:</strong> If the holding owns 75%+ of the target, they can form a consolidated tax group</li>
        </ol>
      </div>

      <h2 className={h2Class}>Tax Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Corporate tax:</strong> 25% standard rate; 15% for new companies in their first two profitable years (first &euro;300K)</li>
          <li><strong>Participation exemption:</strong> Dividends and capital gains from qualifying participations (5%+ ownership held 1+ year) are 95% exempt</li>
          <li><strong>Goodwill amortization:</strong> Tax-deductible over 20 years (5% per year) in asset deals</li>
          <li><strong>Interest deductibility:</strong> Limited to 30% of EBITDA (with &euro;1M minimum deduction)</li>
          <li><strong>Withholding tax:</strong> 19% on dividends to non-residents (reduced by tax treaties)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>SL is Spain&apos;s default SME structure with lower capital requirements (&euro;3K) and simpler governance</li>
          <li>SA offers free share transferability, share classes, and ITP exemption on transfers &mdash; better for investor-backed deals</li>
          <li>ENISA participative loans count as equity under Spanish law, improving the debt-to-equity ratio</li>
          <li>Tax consolidation requires 75%+ ownership, and the participation exemption makes holding structures tax-efficient</li>
          <li>Work with a Spanish abogado mercantilista experienced in M&A for optimal structuring</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-spain" className="text-apple-accent hover:underline">ETA in Spain & Iberia</Link></li>
        <li><Link href="/learn/ico-spain" className="text-apple-accent hover:underline">ICO Spain: Government Financing</Link></li>
        <li><Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">Holding Company Structures for Acquisitions</Link></li>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions in Europe</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>What is the main difference between an SL and an SA in Spain for acquisitions?</h3>
      <div className={bodyClass}>
        <p>The most impactful difference for acquirers is share transfer mechanics and taxation. SA shares (acciones) are freely transferable by default and exempt from ITP (Impuesto sobre Transmisiones Patrimoniales), while SL ownership interests (participaciones sociales) require partner approval for transfers to third parties and face 1&ndash;6% ITP depending on the autonomous community. This makes SA structures significantly more favorable for investor-backed deals where multiple investors will enter and exit the cap table over time. Additionally, SAs can create different share classes with varied voting and dividend rights &mdash; essential for structuring investor preference stacks &mdash; while SLs offer less flexibility. According to IESE Business School&rsquo;s International Search Fund Study, approximately 70% of Spanish search fund acquisitions involve SL targets, though many acquirers convert to SA post-closing when planning future fundraising rounds.</p>
      </div>

      <h3 className={h3Class}>Should I use an SL or SA as my acquisition holding company in Spain?</h3>
      <div className={bodyClass}>
        <p>The choice depends on your investor structure and exit plans. An SL requires only &euro;3,000 minimum capital versus &euro;60,000 for an SA, making it cheaper to set up. For simple structures with few investors and no plans for future equity rounds, the SL is typically sufficient. However, if your investors need preferred share classes, or you anticipate future fundraising, secondary sales, or a potential IPO exit, the SA provides far more flexibility. Garrigues notes that ENISA participative loans &mdash; which count as equity under Spanish law and are a common financing tool for search fund acquisitions in Spain &mdash; can be used with either entity type. The optimal approach for most search fund deals is an SA holding company (for investor flexibility) acquiring an SL target (preserving the existing structure), with potential tax consolidation if the holding owns 75%+ of the target.</p>
      </div>

      <h3 className={h3Class}>How does tax consolidation work between an SL and SA in Spain?</h3>
      <div className={bodyClass}>
        <p>Under Spanish tax law, if a holding company (either SL or SA) owns at least 75% of a subsidiary, they can form a consolidated tax group (grupo de consolidaci&oacute;n fiscal). This allows the group to offset profits and losses between entities, eliminating intercompany dividends from taxable income and enabling more efficient debt interest deduction at the holding level. Spain&rsquo;s standard corporate tax rate is 25%, with a reduced 15% rate for new companies in their first two profitable years on the first &euro;300,000 of profit. The participation exemption makes dividends and capital gains from qualifying subsidiaries (5%+ ownership held for 1+ year) 95% exempt from tax. According to the Ley de Sociedades de Capital, both entity types qualify for these benefits, though the practical mechanics differ slightly in governance requirements for establishing the consolidated group.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Ley de Sociedades de Capital (Real Decreto Legislativo 1/2010)</li>
        <li>IESE Business School, <em>Search Fund Structures in Spain</em> (2024)</li>
        <li>Garrigues, <em>Guide to Spanish Corporate Structures for M&amp;A</em> (2024)</li>
        <li>ENISA, <em>Participative Loans: Legal and Tax Framework</em> (2024)</li>
      </ul>
    </article>
  );
}
