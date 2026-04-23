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
          <li><strong><Link href="/learn/creative-financing" className="text-apple-accent hover:underline">ENISA</Link> participative loan:</strong> Counts as equity under Spanish law, reducing apparent leverage</li>
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
