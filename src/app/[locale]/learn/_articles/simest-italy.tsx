import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SIMESTItalyArticle() {
  return (
    <article>
      <h1 className={h1Class}>SIMEST Italy: Financing for Italian Business Acquisitions</h1>
      <div className={bodyClass}>
        <p>Italy&apos;s business landscape offers significant acquisition opportunities, particularly given the country&apos;s aging SME ownership demographics. SIMEST, together with Invitalia and regional programs, provides a robust framework for financing business acquisitions in <Link href="/learn/eta-italy" className="text-apple-accent hover:underline">Italy</Link>.</p>
      </div>

      <h2 className={h2Class}>SIMEST (Societ&agrave; Italiana per le Imprese all&apos;Estero)</h2>
      <div className={bodyClass}>
        <p>SIMEST, controlled by CDP (Cassa Depositi e Prestiti), primarily supports internationalization but also provides:</p>
        <ul className={ulClass}>
          <li><strong>Subsidized loans:</strong> Below-market rates for business development and expansion</li>
          <li><strong>Equity participation:</strong> SIMEST can take minority equity stakes in Italian companies</li>
          <li><strong>Fondo 394:</strong> Concessional loans for SMEs at very favorable terms (often near 0%)</li>
          <li><strong>Export credit support:</strong> Useful if the acquired business has international operations</li>
        </ul>
      </div>

      <h2 className={h2Class}>Invitalia</h2>
      <div className={bodyClass}>
        <p>Italy&apos;s national development agency offers several programs relevant to business acquisitions:</p>
        <ul className={ulClass}>
          <li><strong>Resto al Sud:</strong> Grants and loans for entrepreneurs under 56 in Southern Italy (Mezzogiorno). Covers up to 100% of investment with 50% as non-repayable grant</li>
          <li><strong>Nuove Imprese a Tasso Zero (NITZ):</strong> Zero-interest loans for young entrepreneurs and women-led businesses. Up to &euro;1.5 million</li>
          <li><strong>Smart&Start Italia:</strong> For innovative and technology businesses, providing subsidized loans covering 80% of investment</li>
          <li><strong>Cultura Crea Plus:</strong> For cultural and creative industry acquisitions in Southern Italy</li>
        </ul>
      </div>

      <h2 className={h2Class}>Mediocredito Centrale (Fondo di Garanzia)</h2>
      <div className={bodyClass}>
        <p>The Fondo di Garanzia is Italy&apos;s central guarantee fund, similar to the SBA program:</p>
        <ul className={ulClass}>
          <li><strong>Guarantee:</strong> Up to 80% of the loan value guaranteed by the state</li>
          <li><strong>Maximum guaranteed amount:</strong> &euro;5 million per company</li>
          <li><strong>No collateral required:</strong> The state guarantee replaces traditional collateral</li>
          <li><strong>Application:</strong> Through any accredited Italian bank</li>
          <li><strong>Use:</strong> Business acquisitions, working capital, equipment, expansion</li>
        </ul>
        <p>This is the single most useful program for financing SME acquisitions in Italy. The state guarantee dramatically improves lending terms and availability.</p>
      </div>

      <h2 className={h2Class}>Regional Programs</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Lombardy:</strong> Finlombarda financing programs and ARTIGIANCASSA for artisan businesses</li>
          <li><strong>Veneto:</strong> Veneto Sviluppo programs supporting business succession</li>
          <li><strong>Emilia-Romagna:</strong> ERVET and regional guarantee consortia (Confidi)</li>
          <li><strong>Tuscany:</strong> Fidi Toscana mutual guarantee programs</li>
          <li><strong>Trentino-Alto Adige:</strong> Specialized programs with very favorable terms due to autonomous status</li>
        </ul>
        <p><strong>Confidi:</strong> Italy&apos;s mutual guarantee consortia (over 300 nationwide) provide additional guarantees to banks, enabling better terms for SME acquisitions.</p>
      </div>

      <h2 className={h2Class}>Typical Italian Acquisition Structure</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Senior bank debt (Fondo di Garanzia-backed): 40&ndash;50%</li>
          <li>Vendor loan (finanziamento venditore): 15&ndash;25%</li>
          <li>Invitalia/SIMEST subsidized loan: 10&ndash;15%</li>
          <li>Buyer equity: 20&ndash;30%</li>
        </ul>
      </div>

      <h2 className={h2Class}>Italian Tax Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>IRES (corporate tax):</strong> 24% + IRAP regional tax of approximately 3.9% = ~28% effective rate</li>
          <li><strong>Goodwill (avviamento):</strong> Tax-deductible amortization over 18 years in asset deals</li>
          <li><strong>Participation exemption:</strong> 95% of capital gains on qualifying shareholdings are tax-exempt</li>
          <li><strong>Interest deductibility:</strong> Limited to 30% of EBITDA</li>
          <li><strong>Registro tax:</strong> 3% on goodwill value in asset deals, &euro;200 flat for share deals</li>
        </ul>
      </div>

      <h2 className={h2Class}>The Succession Opportunity</h2>
      <div className={bodyClass}>
        <p>Italy has one of Europe&apos;s most acute business succession challenges:</p>
        <ul className={ulClass}>
          <li>Over 60% of Italian SME owners are above age 60</li>
          <li>Only 30% of family businesses successfully transition to the next generation</li>
          <li>The passaggio generazionale (generational transition) creates a massive pipeline of acquisition targets</li>
          <li>Government programs increasingly support external acquirers as a solution to the succession crisis</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>The Fondo di Garanzia (up to 80% state guarantee) is the most important tool for Italian acquisition financing</li>
          <li>Invitalia offers grants and zero-interest loans, especially in Southern Italy</li>
          <li>Confidi mutual guarantee consortia provide additional bank lending support</li>
          <li>Italy&apos;s succession crisis creates an exceptional acquisition opportunity</li>
          <li>Asset deals allow goodwill amortization over 18 years for tax benefits</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-italy" className="text-apple-accent hover:underline">ETA in Italy: Market Overview</Link></li>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">How to Finance an Acquisition</Link></li>
        <li><Link href="/learn/government-financing-programs-global" className="text-apple-accent hover:underline">Government Financing Programs: Global Overview</Link></li>
        <li><Link href="/learn/succession-driven-acquisitions" className="text-apple-accent hover:underline">Succession-Driven Acquisitions</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>SIMEST / CDP, <em>Financing Programs for Italian Businesses</em> (2024)</li>
        <li>Invitalia, <em>Incentive Programs Guide</em> (2024)</li>
        <li>Mediocredito Centrale, <em>Fondo di Garanzia: Rules and Procedures</em> (2024)</li>
        <li>CERVED, <em>Italian SME Report: Demographic and Succession Analysis</em> (2024)</li>
        <li>SDA Bocconi, <em>Search Fund Research in Italy</em> (2024)</li>
      </ul>
    </article>
  );
}
