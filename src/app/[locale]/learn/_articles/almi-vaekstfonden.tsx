import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function AlmiVaekstfondenArticle() {
  return (
    <article>
      <h1 className={h1Class}>Almi & Væ​kstfonden: Nordic Business Acquisition Financing</h1>
      <div className={bodyClass}>
        <p>The Nordic countries &mdash; Sweden, Denmark, Norway, and Finland &mdash; offer some of Europe&apos;s most attractive SME financing ecosystems for business acquisitions. Government-backed institutions like Almi (Sweden), Væ​kstfonden (Denmark), Innovasjon Norge, and Finnvera provide favorable lending terms that make the <Link href="/learn/eta-nordics" className="text-apple-accent hover:underline">Nordic ETA market</Link> particularly accessible.</p>
      </div>

      <h2 className={h2Class}>Almi Företagspartner (Sweden)</h2>
      <div className={bodyClass}>
        <p>Almi is Sweden&apos;s national business development organization, owned by the Swedish state:</p>
        <ul className={ulClass}>
          <li><strong>Almi Business Loans:</strong> Subordinated loans up to SEK 5 million (approximately &euro;450,000) for business acquisitions</li>
          <li><strong>Interest rate:</strong> Higher than bank rates (typically 5&ndash;8%) since Almi takes more risk, but requires no collateral</li>
          <li><strong>Term:</strong> Up to 10 years with grace periods available</li>
          <li><strong>Subordination:</strong> Almi loans are subordinated to bank debt, effectively serving as quasi-equity</li>
          <li><strong>Regional offices:</strong> 40+ offices across Sweden providing local support and mentoring</li>
          <li><strong>Co-lending:</strong> Typically used alongside commercial bank lending (SEB, Handelsbanken, Nordea, Swedbank)</li>
        </ul>
        <p>Almi is particularly useful for gap financing &mdash; bridging the difference between what banks will lend and the total capital needed for an acquisition.</p>
      </div>

      <h2 className={h2Class}>Almi Invest (Venture Capital Arm)</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Makes equity investments in SMEs alongside private co-investors</li>
          <li>Can invest in acquisition structures where growth capital is needed</li>
          <li>Typically invests SEK 2&ndash;15 million per company</li>
          <li>Active in all stages, including buyouts of established businesses</li>
        </ul>
      </div>

      <h2 className={h2Class}>Væ​kstfonden (Denmark)</h2>
      <div className={bodyClass}>
        <p>Væ​kstfonden (The Danish Growth Fund) is Denmark&apos;s state investment fund supporting SME financing:</p>
        <ul className={ulClass}>
          <li><strong>Guarantee programs:</strong> Guarantees up to 75% of bank loans for business acquisitions</li>
          <li><strong>Direct loans:</strong> Subordinated loans from DKK 2&ndash;30 million (approximately &euro;270K&ndash;&euro;4M)</li>
          <li><strong>Equity investments:</strong> Through fund-of-funds structures and direct investments</li>
          <li><strong>Vækstlån (Growth Loans):</strong> Flexible subordinated financing with repayment tied to company performance</li>
          <li><strong>Application:</strong> Through commercial banks who act as intermediaries</li>
        </ul>
      </div>

      <h2 className={h2Class}>Innovasjon Norge (Norway)</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Startup and growth loans:</strong> Up to NOK 1.5 million (approximately &euro;130,000)</li>
          <li><strong>Innovation loans:</strong> For businesses with growth potential, larger amounts available</li>
          <li><strong>Mentoring services:</strong> Free advisory support for new business owners</li>
          <li><strong>Regional programs:</strong> Additional support for acquisitions outside Oslo/major cities</li>
          <li><strong>Export financing:</strong> Relevant if the acquired business has international operations</li>
        </ul>
        <p>Norway&apos;s higher cost of living and wages mean acquisition targets tend to be priced higher, but strong government support partially offsets this.</p>
      </div>

      <h2 className={h2Class}>Finnvera (Finland)</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Acquisition loans:</strong> Finnvera provides direct loans and guarantees for business acquisitions</li>
          <li><strong>Guarantee:</strong> Up to 80% of bank loan guaranteed by Finnvera</li>
          <li><strong>Entrepreneur loan:</strong> Personal loan to the entrepreneur to finance their equity contribution (up to &euro;100,000)</li>
          <li><strong>Change-of-generation loan:</strong> Specifically designed for business succession, up to &euro;100,000</li>
          <li><strong>Working capital guarantee:</strong> Guarantees for working capital needs post-acquisition</li>
        </ul>
        <p>Finnvera&apos;s &quot;change-of-generation loan&quot; is one of the few European programs specifically designed for business succession financing.</p>
      </div>

      <h2 className={h2Class}>Typical Nordic Acquisition Structure</h2>
      <div className={bodyClass}>
        <p>A typical &euro;1.5M Nordic acquisition might be structured as:</p>
        <ul className={ulClass}>
          <li>Senior bank debt (Finnvera/Væ​kstfonden-guaranteed): 40&ndash;50%</li>
          <li>Almi/Væ​kstfonden subordinated loan: 15&ndash;20%</li>
          <li>Vendor loan: 10&ndash;15%</li>
          <li>Buyer equity: 20&ndash;30%</li>
        </ul>
      </div>

      <h2 className={h2Class}>Nordic Tax Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Sweden:</strong> 20.6% corporate tax. Participation exemption on qualifying share sales.</li>
          <li><strong>Denmark:</strong> 22% corporate tax. Goodwill amortizable over 7 years in asset deals.</li>
          <li><strong>Norway:</strong> 22% corporate tax. Extensive participation exemption system (fritaksmetoden).</li>
          <li><strong>Finland:</strong> 20% corporate tax (lowest in Nordics). Goodwill amortizable in asset deals.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Nordic government agencies provide substantial subordinated financing that fills the gap between bank debt and equity</li>
          <li>Finnvera&apos;s change-of-generation loan is uniquely suited for succession-driven acquisitions</li>
          <li>Almi&apos;s subordinated loans require no collateral, making them accessible for first-time buyers</li>
          <li>Væ​kstfonden&apos;s guarantee program enables better bank lending terms for Danish acquisitions</li>
          <li>Nordic corporate tax rates (20&ndash;22%) are competitive within Europe</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-nordics" className="text-apple-accent hover:underline">ETA in the Nordics: Scandinavia & Finland</Link></li>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">How to Finance an Acquisition</Link></li>
        <li><Link href="/learn/government-financing-programs-global" className="text-apple-accent hover:underline">Government Financing Programs: Global Overview</Link></li>
        <li><Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">The Capital Stack Explained</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Almi Företagspartner, <em>Business Loans and Services Guide</em> (2024)</li>
        <li>Væ​kstfonden, <em>Growth Loans and Guarantee Programs</em> (2024)</li>
        <li>Finnvera, <em>Financing for Business Acquisitions and Change of Generation</em> (2024)</li>
        <li>Innovasjon Norge, <em>Financing Programs for Entrepreneurs</em> (2024)</li>
        <li>Nordic Council of Ministers, <em>SME Financing in the Nordic Countries</em> (2024)</li>
      </ul>
    </article>
  );
}
