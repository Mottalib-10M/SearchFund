import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function MKBFinancingNetherlandsArticle() {
  return (
    <article>
      <h1 className={h1Class}>MKB Financing Netherlands: Dutch Acquisition Loans</h1>
      <div className={bodyClass}>
        <p>The Netherlands offers a sophisticated SME financing ecosystem for business acquisitions, combining traditional bank lending with government-backed programs and alternative finance options. For searchers targeting <Link href="/learn/eta-benelux" className="text-apple-accent hover:underline">Dutch acquisitions</Link>, understanding the MKB (Midden- en Kleinbedrijf) financing landscape is essential for structuring competitive deals.</p>
        <p>According to the KVK (Kamer van Koophandel), more than 20,000 Dutch businesses change ownership each year, and the Rijksdienst voor Ondernemend Nederland (RVO) reports that BMKB-backed lending exceeded &euro;1 billion in guaranteed volume in 2024. These government programs dramatically improve the financing terms available to first-time acquirers who lack a track record with Dutch banks.</p>
      </div>

      <h2 className={h2Class}>BMKB (Borgstelling MKB-kredieten)</h2>
      <div className={bodyClass}>
        <p>The BMKB is the Dutch government&apos;s primary SME credit guarantee scheme:</p>
        <ul className={ulClass}>
          <li><strong>Guarantee:</strong> Government guarantees up to 90% of the loan (67.5% for established businesses)</li>
          <li><strong>Maximum guarantee:</strong> &euro;1.5 million per company</li>
          <li><strong>Eligible uses:</strong> Business acquisitions, working capital, equipment, real estate</li>
          <li><strong>Application:</strong> Through any accredited Dutch bank (ING, ABN AMRO, Rabobank, etc.)</li>
          <li><strong>Premium:</strong> 3.9% one-time guarantee premium to the state</li>
          <li><strong>Term:</strong> Up to 8 years for investments, 4 years for working capital</li>
        </ul>
        <p>The BMKB significantly improves lending conditions for acquisitions where the buyer lacks sufficient collateral. RVO data shows that BMKB-backed loans carry interest rates approximately 0.5&ndash;1.5 percentage points lower than unsecured equivalents, making them especially attractive for <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">leveraged acquisition structures</Link>.</p>
      </div>

      <h2 className={h2Class}>Qredits</h2>
      <div className={bodyClass}>
        <p>Qredits is a Dutch microfinance institution backed by the government and major banks:</p>
        <ul className={ulClass}>
          <li><strong>Business takeover loan:</strong> Up to &euro;250,000 specifically for business acquisitions</li>
          <li><strong>Interest rate:</strong> Typically 5&ndash;9% depending on risk assessment</li>
          <li><strong>Term:</strong> Up to 10 years</li>
          <li><strong>Grace period:</strong> Up to 6 months for principal payments</li>
          <li><strong>Coaching:</strong> Free business coaching included for 1 year after funding</li>
          <li><strong>No bank required:</strong> Qredits lends directly, useful when banks decline</li>
        </ul>
      </div>

      <h2 className={h2Class}>ROMs (Regionale Ontwikkelingsmaatschappijen)</h2>
      <div className={bodyClass}>
        <p>Regional development companies provide equity and mezzanine financing:</p>
        <ul className={ulClass}>
          <li><strong>BOM (Brabant):</strong> Equity and mezzanine investments for Noord-Brabant businesses</li>
          <li><strong>Oost NL (Gelderland/Overijssel):</strong> Growth capital and acquisition financing for eastern Netherlands</li>
          <li><strong>LIOF (Limburg):</strong> Investment fund for Limburg-based businesses</li>
          <li><strong>NOM (Northern Netherlands):</strong> Covering Groningen, Friesland, and Drenthe</li>
          <li><strong>InnovationQuarter (Zuid-Holland):</strong> Growth financing for South Holland businesses</li>
        </ul>
        <p>ROMs typically invest &euro;250K&ndash;&euro;5M and can be valuable co-investors in acquisition structures. Because ROMs are mandated to support regional economic development, they often accept lower return hurdles than private equity, making them patient capital partners well-suited to <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">holding company structures</Link>.</p>
      </div>

      <h2 className={h2Class}>Dutch Commercial Banks for Acquisitions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Rabobank:</strong> Strongest in SME/MKB lending with dedicated acquisition teams. Deep agricultural and food sector expertise.</li>
          <li><strong>ABN AMRO:</strong> Active acquisition finance team, particularly for deals above &euro;2M.</li>
          <li><strong>ING:</strong> Good for larger deals, strong international connectivity.</li>
          <li><strong>De Volksbank (SNS):</strong> More focused on smaller businesses and entrepreneurs.</li>
          <li><strong>Triodos Bank:</strong> For sustainable and impact-focused businesses.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Typical Dutch Acquisition Structure</h2>
      <div className={bodyClass}>
        <p>A typical &euro;2M Dutch acquisition might be structured as:</p>
        <ul className={ulClass}>
          <li>Senior bank debt (BMKB-backed): 40&ndash;50%</li>
          <li>Vendor loan (achtergestelde lening): 15&ndash;25%</li>
          <li>ROM/mezzanine: 10&ndash;15%</li>
          <li>Buyer equity: 20&ndash;30%</li>
        </ul>
      </div>

      <h2 className={h2Class}>Dutch Tax Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Corporate tax:</strong> 19% on first &euro;200,000 profit; 25.8% above that threshold</li>
          <li><strong>Participation exemption:</strong> 100% exemption on qualifying dividends and capital gains (very favorable for holding structures)</li>
          <li><strong>Goodwill amortization:</strong> Deductible over the useful economic life (typically 5&ndash;10 years) in asset deals</li>
          <li><strong>Interest deductibility:</strong> Limited to 20% of EBITDA (ATAD implementation)</li>
          <li><strong>Fiscal unity:</strong> Tax consolidation between parent and 95%+ subsidiaries</li>
          <li><strong>Innovation box:</strong> 9% effective rate on qualifying IP income (relevant for tech acquisitions)</li>
        </ul>
      </div>

      <h2 className={h2Class}>The Succession Opportunity</h2>
      <div className={bodyClass}>
        <p>The Netherlands faces a significant business succession challenge:</p>
        <ul className={ulClass}>
          <li>Approximately 50,000 Dutch business owners will retire in the next 5 years</li>
          <li>Only about 20% of family businesses successfully transfer to the next generation</li>
          <li>The overnamemarkt (acquisition market) is growing as more owners seek external buyers</li>
          <li>Government programs like Bedrijfsopvolgingsregeling (BOR) provide inheritance tax relief for business succession</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>BMKB provides up to 90% government guarantee on acquisition loans, dramatically improving bank willingness to lend</li>
          <li>Qredits offers direct lending up to &euro;250K with coaching support for business takeovers</li>
          <li>Regional development companies (ROMs) provide equity and mezzanine co-investment</li>
          <li>The Dutch participation exemption makes holding company structures very tax-efficient</li>
          <li>With 50,000 business owners retiring soon, the Dutch acquisition pipeline is substantial</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-benelux" className="text-apple-accent hover:underline">ETA in the Benelux: Netherlands, Belgium & Luxembourg</Link></li>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">How to Finance an Acquisition</Link></li>
        <li><Link href="/learn/government-financing-programs-global" className="text-apple-accent hover:underline">Government Financing Programs: Global Overview</Link></li>
        <li><Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">Holding Company Structures for Acquisitions</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>Can a non-Dutch citizen apply for BMKB-backed financing?</h3>
      <div className={bodyClass}>
        <p>Yes. The BMKB program is available to any SME registered and operating in the Netherlands, regardless of the owner&apos;s nationality. However, you must have a valid Dutch company (typically a BV) and the business must qualify as an MKB enterprise (fewer than 250 employees and turnover below &euro;50 million). EU/EEA residents can register a BV quickly; non-EU citizens need a residence permit or use a Dutch co-founder structure.</p>
      </div>

      <h3 className={h3Class}>How long does the BMKB application process take?</h3>
      <div className={bodyClass}>
        <p>The BMKB guarantee is applied for through your bank, not directly with RVO. Once your bank submits the BMKB request, approval typically takes 2&ndash;4 weeks. The overall timeline depends on the bank&apos;s own credit assessment, which can take 4&ndash;8 weeks for a full acquisition loan package. Starting early and having a complete business plan with financial projections significantly accelerates the process.</p>
      </div>

      <h3 className={h3Class}>Is the Dutch participation exemption available from day one after acquisition?</h3>
      <div className={bodyClass}>
        <p>Yes. The Netherlands participation exemption (deelnemingsvrijstelling) applies to qualifying shareholdings of 5% or more from the moment of acquisition, provided the holding is not a &quot;portfolio investment.&quot; This means dividends and capital gains are 100% exempt at the holding level, making the Dutch BV one of the most tax-efficient <Link href="/learn/holding-company-tax" className="text-apple-accent hover:underline">holding company structures</Link> in Europe.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Rijksdienst voor Ondernemend Nederland (RVO), <em>BMKB Program Guidelines</em> (2024)</li>
        <li>Qredits, <em>Business Takeover Financing Guide</em> (2024)</li>
        <li>KVK (Kamer van Koophandel), <em>Bedrijf Overnemen: Financiering</em> (2024)</li>
        <li>CBS Netherlands, <em>Business Demographics and Succession Data</em> (2024)</li>
        <li>Ministry of Economic Affairs, <em>MKB Policy Review</em> (2024)</li>
      </ul>
    </article>
  );
}
