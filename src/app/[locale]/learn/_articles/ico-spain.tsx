import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ICOSpainArticle() {
  return (
    <article>
      <h1 className={h1Class}>ICO Spain: Government Financing for Business Acquisitions</h1>
      <div className={bodyClass}>
        <p>The Instituto de Cr&eacute;dito Oficial (ICO) is Spain&apos;s state-owned development bank, providing financing programs that can be used for business acquisitions. For searchers targeting <Link href="/learn/eta-spain" className="text-apple-accent hover:underline">Spanish acquisitions</Link>, ICO loans offer competitive terms and favorable conditions.</p>
      </div>

      <h2 className={h2Class}>ICO Empresas y Emprendedores</h2>
      <div className={bodyClass}>
        <p>The primary ICO program relevant to business acquisitions:</p>
        <ul className={ulClass}>
          <li><strong>Loan amount:</strong> Up to &euro;12.5 million per client per year</li>
          <li><strong>Term:</strong> 1&ndash;20 years (including grace period)</li>
          <li><strong>Grace period:</strong> Up to 3 years for principal payments</li>
          <li><strong>Interest rate:</strong> Fixed or variable, set by the intermediary bank within ICO-established maximums</li>
          <li><strong>Use of proceeds:</strong> Business acquisitions, productive investments, working capital</li>
          <li><strong>Application:</strong> Through any accredited commercial bank (Santander, BBVA, CaixaBank, etc.)</li>
        </ul>
      </div>

      <h2 className={h2Class}>ENISA (Empresa Nacional de Innovaci&oacute;n)</h2>
      <div className={bodyClass}>
        <p>ENISA provides participative loans (pr&eacute;stamos participativos) &mdash; a uniquely Spanish instrument:</p>
        <ul className={ulClass}>
          <li><strong>Amount:</strong> &euro;25,000&ndash;&euro;1.5 million</li>
          <li><strong>Structure:</strong> Subordinated loan with interest tied to company performance</li>
          <li><strong>No collateral:</strong> No personal guarantees or collateral required</li>
          <li><strong>Counts as equity:</strong> Under Spanish law, participative loans count as net worth for capital adequacy</li>
          <li><strong>Term:</strong> Up to 9 years with up to 7-year grace period</li>
          <li><strong>Best for:</strong> Younger entrepreneurs and innovative business models</li>
        </ul>
      </div>

      <h2 className={h2Class}>CDTI (Centro para el Desarrollo Tecnol&oacute;gico e Industrial)</h2>
      <div className={bodyClass}>
        <p>For technology-related acquisitions, CDTI provides:</p>
        <ul className={ulClass}>
          <li>Loans for R&D and innovation projects</li>
          <li>Favorable terms: low interest rates, long grace periods</li>
          <li>Can fund technology integration post-acquisition</li>
        </ul>
      </div>

      <h2 className={h2Class}>Regional Programs</h2>
      <div className={bodyClass}>
        <p>Spain&apos;s autonomous communities offer additional financing:</p>
        <ul className={ulClass}>
          <li><strong>Catalonia:</strong> IFEM (Institut de Finances de Catalunya) and Av&aacute;lis SGR guarantees</li>
          <li><strong>Basque Country:</strong> SPRI group and Elkargi mutual guarantee society</li>
          <li><strong>Madrid:</strong> Avalmadrid mutual guarantee society</li>
          <li><strong>Andalusia:</strong> Idea Agency programs</li>
          <li><strong>Valencia:</strong> IVF (Institut Valenci&agrave; de Finances)</li>
        </ul>
        <p>Mutual guarantee societies (Sociedades de Garant&iacute;a Rec&iacute;proca or SGRs) are particularly useful &mdash; they provide guarantees to banks, enabling better loan terms for acquisitions.</p>
      </div>

      <h2 className={h2Class}>Typical Spanish Acquisition Structure</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Senior bank debt (ICO-backed): 40&ndash;50% of deal value</li>
          <li>Vendor loan: 15&ndash;25%</li>
          <li>ENISA participative loan: 10&ndash;15%</li>
          <li>Buyer equity: 20&ndash;30%</li>
        </ul>
      </div>

      <h2 className={h2Class}>Tax Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Corporate tax:</strong> 25% standard rate; 15% for the first &euro;300K for new companies in first 2 years</li>
          <li><strong>Goodwill amortization:</strong> Tax-deductible over 20 years (5% annually)</li>
          <li><strong>Interest deductibility:</strong> Limited to 30% of EBITDA</li>
          <li><strong>Transfer tax (ITP):</strong> 1&ndash;6% on share transfers depending on region</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>ICO provides up to &euro;12.5M in acquisition financing through commercial banks</li>
          <li>ENISA participative loans count as equity and require no personal guarantee</li>
          <li>SGRs (mutual guarantee societies) improve bank lending terms significantly</li>
          <li>Goodwill amortization provides meaningful tax benefits for acquirers</li>
          <li>Regional programs add another layer of financing options</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-spain" className="text-apple-accent hover:underline">ETA in Spain: Market Overview</Link></li>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">How to Finance an Acquisition</Link></li>
        <li><Link href="/learn/government-financing-programs-global" className="text-apple-accent hover:underline">Government Financing Programs: Global Overview</Link></li>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions in Europe</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Instituto de Cr&eacute;dito Oficial (ICO), <em>ICO Empresas y Emprendedores Program Guide</em> (2024)</li>
        <li>ENISA, <em>Participative Loans: Terms and Conditions</em> (2024)</li>
        <li>IESE Business School, <em>Search Fund Landscape in Spain</em> (2024)</li>
        <li>CESGAR, <em>Spanish Mutual Guarantee Societies Annual Report</em> (2024)</li>
      </ul>
    </article>
  );
}
