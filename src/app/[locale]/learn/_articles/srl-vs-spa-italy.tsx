import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SRLvsSPAItalyArticle() {
  return (
    <article>
      <h1 className={h1Class}>SRL vs. SPA: Italian Entity Structures for Acquisitions</h1>
      <div className={bodyClass}>
        <p>When acquiring a business in <Link href="/learn/eta-italy" className="text-apple-accent hover:underline">Italy</Link>, the two primary corporate structures are the SRL (Societ&agrave; a Responsabilit&agrave; Limitata) and the SPA (Societ&agrave; per Azioni). The SRL dominates the Italian SME landscape, while the SPA is used for larger companies. Understanding their differences is critical for structuring your deal, managing governance, and planning for exit.</p>
      </div>

      <h2 className={h2Class}>SRL (Societ&agrave; a Responsabilit&agrave; Limitata)</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Minimum capital:</strong> &euro;10,000 (or &euro;1 for SRLS &mdash; simplified SRL)</li>
          <li><strong>Ownership units:</strong> Quote di partecipazione (ownership quotas), not shares</li>
          <li><strong>Transfer:</strong> Requires notarial deed or certified digital signature through the Chamber of Commerce</li>
          <li><strong>Governance:</strong> Managed by one or more Amministratori (directors). Can have a sole administrator or a board (Consiglio di Amministrazione).</li>
          <li><strong>Audit:</strong> Required only if exceeding certain thresholds (revenue &gt;&euro;4M, assets &gt;&euro;4M, or &gt;20 employees) or if legally mandated by specific conditions</li>
          <li><strong>Flexibility:</strong> Since the 2003 reform, SRLs offer significant statutory flexibility for governance and profit distribution</li>
          <li><strong>Registro imprese:</strong> Registration with the local Camera di Commercio (Chamber of Commerce) is mandatory</li>
        </ul>
      </div>

      <h2 className={h2Class}>SRLS (SRL Semplificata)</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Minimum capital:</strong> &euro;1 (maximum &euro;9,999)</li>
          <li><strong>Founders:</strong> Only natural persons (no companies as shareholders)</li>
          <li><strong>Standard statutes:</strong> Must use a standardized bylaws template set by ministerial decree</li>
          <li><strong>No notary fees:</strong> Formation costs are reduced since notary fees are waived</li>
          <li><strong>Limitations:</strong> Cannot customize governance extensively; less suitable for investor-backed structures</li>
          <li><strong>Conversion:</strong> Can convert to a regular SRL once capital exceeds &euro;10,000</li>
        </ul>
      </div>

      <h2 className={h2Class}>SPA (Societ&agrave; per Azioni)</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Minimum capital:</strong> &euro;50,000 (at least 25% paid in at formation)</li>
          <li><strong>Ownership units:</strong> Azioni (shares) &mdash; freely transferable unless restricted by statutes</li>
          <li><strong>Share classes:</strong> Can issue ordinary shares, preferred shares, savings shares, and other categories</li>
          <li><strong>Governance models:</strong> Three options: (1) Traditional (board + statutory auditors), (2) One-tier (board with audit committee), (3) Two-tier (supervisory board + management board)</li>
          <li><strong>Audit:</strong> Always mandatory. Must appoint a Collegio Sindacale (board of statutory auditors) or a single statutory auditor.</li>
          <li><strong>Bonds:</strong> Can issue bonds (obbligazioni) to raise debt capital &mdash; SRLs are limited in this area</li>
          <li><strong>Listed potential:</strong> Only SPAs can be listed on Borsa Italiana</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Differences for Acquisitions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Transfer tax:</strong> SPA share transfers: &euro;200 flat registration tax. SRL quota transfers: &euro;200 flat registration tax + notary/digital signature costs.</li>
          <li><strong>Investor structures:</strong> SPA allows multiple share classes with different rights; SRL can create some differentiation through the bylaws but with more constraints.</li>
          <li><strong>Cost:</strong> SRL requires &euro;10K capital; SPA requires &euro;50K &mdash; significant difference for holding company setup.</li>
          <li><strong>Governance complexity:</strong> SPA has mandatory governance bodies (Collegio Sindacale); SRL governance is simpler and cheaper to maintain.</li>
          <li><strong>Market perception:</strong> SPA carries more prestige with banks, suppliers, and large customers.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Typical Italian Acquisition Structure</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Holding SRL:</strong> Most common for search fund-sized deals. Lower capital and simpler governance.</li>
          <li><strong>Bank financing:</strong> <Link href="/learn/simest-italy" className="text-apple-accent hover:underline">Fondo di Garanzia-backed</Link> loans into the holding SRL</li>
          <li><strong>Target acquisition:</strong> The holding SRL acquires 100% of the target company&apos;s quotas or shares</li>
          <li><strong>Consolidato fiscale:</strong> Tax consolidation available if the holding owns the majority of the target</li>
        </ol>
      </div>

      <h2 className={h2Class}>Tax Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>IRES (corporate tax):</strong> 24% flat rate</li>
          <li><strong>IRAP (regional tax):</strong> ~3.9% on value added (varies by region)</li>
          <li><strong>Total effective rate:</strong> ~27.9% combined</li>
          <li><strong>Participation exemption (PEX):</strong> 95% of capital gains on qualifying participations are tax-exempt (effective rate ~1.2%)</li>
          <li><strong>Goodwill (avviamento):</strong> Amortizable over 18 years in asset deals (tax-deductible)</li>
          <li><strong>Interest deductibility:</strong> Limited to 30% of EBITDA</li>
          <li><strong>Registro tax:</strong> Asset deals: 3% on goodwill. Share deals: &euro;200 flat.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>SRL is the standard for Italian SME acquisitions: lower capital (&euro;10K), simpler governance, and adequate flexibility</li>
          <li>SPA is better for larger deals needing multiple share classes, bond issuance, or future listing potential</li>
          <li>Italy&apos;s participation exemption (PEX) makes holding structures very tax-efficient for exits</li>
          <li>The &euro;200 flat registration tax on share/quota transfers makes Italy one of the cheapest European countries for share deals</li>
          <li>Engage a commercialista (Italian tax advisor) and avvocato experienced in M&A for optimal structuring</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-italy" className="text-apple-accent hover:underline">ETA in Italy</Link></li>
        <li><Link href="/learn/simest-italy" className="text-apple-accent hover:underline">SIMEST Italy: Financing Programs</Link></li>
        <li><Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">Holding Company Structures for Acquisitions</Link></li>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions in Europe</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Codice Civile Italiano, <em>Libro V: SRL &amp; SPA Provisions</em></li>
        <li>SDA Bocconi, <em>Italian Corporate Structures for Acquisitions</em> (2024)</li>
        <li>Assonime, <em>Guide to Italian Company Law for Foreign Investors</em> (2024)</li>
        <li>Agenzia delle Entrate, <em>Tax Guide for Business Transfers</em> (2024)</li>
      </ul>
    </article>
  );
}
