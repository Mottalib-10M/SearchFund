import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SwissCantonalBanksArticle() {
  return (
    <article>
      <h1 className={h1Class}>Swiss Cantonal Banks & Acquisition Financing</h1>
      <div className={bodyClass}>
        <p>Switzerland&apos;s unique banking system, anchored by 24 cantonal banks, provides a distinctive financing landscape for business acquisitions. For searchers targeting <Link href="/learn/eta-switzerland" className="text-apple-accent hover:underline">Swiss acquisitions</Link>, understanding how cantonal banks, federal programs, and private institutions work together is critical for structuring deals in one of Europe&apos;s most stable economies.</p>
      </div>

      <h2 className={h2Class}>The Cantonal Bank System</h2>
      <div className={bodyClass}>
        <p>Cantonal banks (Kantonalbanken) are government-owned or government-backed institutions unique to Switzerland:</p>
        <ul className={ulClass}>
          <li><strong>State guarantee:</strong> Most cantonal banks have explicit cantonal government guarantees, resulting in very high credit ratings</li>
          <li><strong>Local mandate:</strong> Required to promote economic development in their canton</li>
          <li><strong>Market share:</strong> Collectively hold approximately 30% of Swiss banking assets</li>
          <li><strong>SME focus:</strong> Cantonal banks are the primary SME lenders in most cantons</li>
          <li><strong>Relationship banking:</strong> Strong local relationships and deep knowledge of regional business landscape</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Cantonal Banks for Acquisitions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Zürcher Kantonalbank (ZKB):</strong> Switzerland&apos;s largest cantonal bank. Active SME financing team, particularly strong in the Greater Zürich area.</li>
          <li><strong>Banque Cantonale Vaudoise (BCV):</strong> Leading bank in Romandie (French-speaking Switzerland). Strong in hospitality and tourism acquisition financing.</li>
          <li><strong>Berner Kantonalbank (BEKB):</strong> Dominant in the Bern region. Very active in succession financing (Nachfolgefinanzierung).</li>
          <li><strong>St. Galler Kantonalbank (SGKB):</strong> Strong in Eastern Switzerland&apos;s manufacturing and industrial SME sector.</li>
          <li><strong>Luzerner Kantonalbank (LUKB):</strong> Active in Central Switzerland with dedicated acquisition finance offerings.</li>
          <li><strong>Basler Kantonalbank (BKB):</strong> Covers the Basel region, strong pharma and life sciences industry knowledge.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Federal Programs</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Bürgschaftsgenossenschaften (Guarantee Cooperatives)</h3>
        <ul className={ulClass}>
          <li>Four federally recognized guarantee cooperatives provide loan guarantees for SME acquisitions</li>
          <li><strong>Maximum guarantee:</strong> CHF 1 million per company (approximately &euro;1.05M)</li>
          <li><strong>Coverage:</strong> Guarantees up to 100% of the bank loan</li>
          <li><strong>Premium:</strong> 1&ndash;1.5% annual guarantee fee</li>
          <li><strong>Application:</strong> Through your commercial bank, which forwards to the cooperative</li>
          <li><strong>Regional cooperatives:</strong> BG Mitte, Bürgschaftsgenossenschaft Ostschweiz, Cautionnement romand, Cooperativa di fideiussione della Svizzera italiana</li>
        </ul>
      </div>

      <h2 className={h2Class}>Additional Financing Sources</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Raiffeisen Switzerland:</strong> Cooperative banking group with 800+ locations. Strong local expertise and SME focus.</li>
          <li><strong>PostFinance:</strong> Switzerland&apos;s postal bank, increasingly active in business lending.</li>
          <li><strong>UBS/Credit Suisse (now UBS):</strong> For larger acquisitions (CHF 5M+), dedicated M&A financing teams.</li>
          <li><strong>Innosuisse:</strong> Swiss innovation agency &mdash; relevant for technology-related acquisitions needing R&D support.</li>
          <li><strong>Cantonal economic promotion agencies:</strong> Each canton has an economic development office that can provide tax incentives and sometimes direct financing.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Typical Swiss Acquisition Structure</h2>
      <div className={bodyClass}>
        <p>A typical CHF 3M Swiss acquisition might be structured as:</p>
        <ul className={ulClass}>
          <li>Senior bank debt (cantonal bank): 40&ndash;50%</li>
          <li>Bürgschaft-backed loan: 10&ndash;15%</li>
          <li>Vendor loan (Verkäuferdarlehen): 15&ndash;20%</li>
          <li>Buyer equity: 25&ndash;35%</li>
        </ul>
        <p>Swiss banks typically require more equity (25&ndash;35%) than other European markets, reflecting the conservative Swiss banking culture.</p>
      </div>

      <h2 className={h2Class}>Swiss Tax Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Federal corporate tax:</strong> 8.5% on profit (effective ~7.83% after deductions)</li>
          <li><strong>Cantonal/municipal tax:</strong> Varies widely by canton, from ~5% (Zug, Nidwalden) to ~15% (Geneva, Basel-Stadt)</li>
          <li><strong>Total effective tax rate:</strong> 11.5%&ndash;21% depending on canton</li>
          <li><strong>Participation relief:</strong> Dividends and capital gains on qualifying participations (10%+ or CHF 1M+) benefit from participation relief</li>
          <li><strong>No goodwill amortization:</strong> In share deals, goodwill is not tax-deductible. In asset deals, goodwill can be amortized over its useful life (typically 5&ndash;20 years).</li>
          <li><strong>No stamp duty on share transfers:</strong> Swiss securities transfer tax (0.15% domestic, 0.30% foreign) applies but is modest</li>
        </ul>
      </div>

      <h2 className={h2Class}>The Nachfolge Opportunity</h2>
      <div className={bodyClass}>
        <p>Switzerland&apos;s business succession (Nachfolge/succession) landscape is compelling:</p>
        <ul className={ulClass}>
          <li>Over 80,000 Swiss SMEs will need succession solutions in the next decade</li>
          <li>Only 40&ndash;50% of family businesses find a family successor</li>
          <li>Swiss business owners are increasingly open to external buyers, including search fund entrepreneurs</li>
          <li>The Swiss Venture Club and various cantonal programs actively promote succession solutions</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Cantonal banks are the primary acquisition financing partners in Switzerland, with deep local expertise and state backing</li>
          <li>Bürgschaftsgenossenschaften provide up to CHF 1M in loan guarantees for acquisition financing</li>
          <li>Swiss banks require higher equity contributions (25&ndash;35%) than other European markets</li>
          <li>Total corporate tax rates vary dramatically by canton (11.5&ndash;21%), making location selection important</li>
          <li>Over 80,000 Swiss SMEs need succession solutions, creating a large acquisition pipeline</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-switzerland" className="text-apple-accent hover:underline">ETA in Switzerland</Link></li>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">How to Finance an Acquisition</Link></li>
        <li><Link href="/learn/government-financing-programs-global" className="text-apple-accent hover:underline">Government Financing Programs: Global Overview</Link></li>
        <li><Link href="/learn/succession-driven-acquisitions" className="text-apple-accent hover:underline">Succession-Driven Acquisitions</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>SECO (State Secretariat for Economic Affairs), <em>SME Policy in Switzerland</em> (2024)</li>
        <li>Verband Schweizerischer Kantonalbanken, <em>Cantonal Banking in Switzerland</em> (2024)</li>
        <li>Bürgschaftsgenossenschaften Schweiz, <em>Guarantee Programs for SMEs</em> (2024)</li>
        <li>University of St. Gallen, <em>Swiss SME Succession Study</em> (2024)</li>
        <li>KPMG Switzerland, <em>Clarity on Swiss Taxes</em> (2024)</li>
      </ul>
    </article>
  );
}
