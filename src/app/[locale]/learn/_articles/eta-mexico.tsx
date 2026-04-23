import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAMexicoArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        ETA in Mexico: The Growing ETA Ecosystem
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Mexico is one of Latin America&rsquo;s most dynamic{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            ETA
          </Link>{" "}
          markets. With 4.9 million SMEs, proximity to the US, a growing
          middle class, and an active search fund community anchored by IPADE
          and IESE alumni, Mexico offers a unique blend of deal flow,
          favorable demographics, and nearshoring tailwinds.
        </p>

        <h2 className={h2Class}>Why Mexico for ETA?</h2>
        <ul className={ulClass}>
          <li><strong>4.9 million SMEs</strong> (99.8% of all businesses). Second largest Latin American market after Brazil</li>
          <li><strong>Nearshoring boom:</strong> US-China trade tensions are driving manufacturing reshoring to Mexico, creating growth opportunities across industrial services, logistics, and supply chain businesses</li>
          <li><strong>Young population:</strong> Median age 29 (vs. 38 in the US). Growing consumer class driving domestic demand</li>
          <li><strong>USMCA access:</strong> Free trade agreement with the US and Canada provides tariff-free access to a $28 trillion market</li>
          <li><strong>Active ecosystem:</strong> IPADE, IESE Mexico, and EGADE have produced a growing number of search fund entrepreneurs. Several successful exits have validated the model</li>
          <li><strong>Attractive multiples:</strong> 3&ndash;5x EBITDA for most SMEs. Seller expectations are generally reasonable</li>
        </ul>

        <h2 className={h2Class}>Legal structures</h2>

        <h3 className={h3Class}>Entity types</h3>
        <ul className={ulClass}>
          <li><strong>S.A. de C.V. (Sociedad An&oacute;nima de Capital Variable):</strong> The standard corporate structure for acquisitions. Variable capital allows share issuance without bylaw amendments. Minimum 2 shareholders</li>
          <li><strong>S. de R.L. de C.V. (Sociedad de Responsabilidad Limitada):</strong> Limited liability company. Less common for acquisitions but used for smaller deals</li>
          <li><strong>SAPI (Sociedad An&oacute;nima Promotora de Inversi&oacute;n):</strong> Investment promotion company structure with flexible governance provisions, often used by venture-backed and PE-backed companies</li>
          <li><strong>Acquisition vehicle:</strong> Most buyers create a new S.A. de C.V. as the acquisition holdco</li>
        </ul>

        <h3 className={h3Class}>Transaction structures</h3>
        <ul className={ulClass}>
          <li><strong>Share purchase:</strong> Most common. Buyer acquires 100% of shares. Simpler but inherits liabilities. Representations and warranties backed by escrow (10&ndash;15% of price)</li>
          <li><strong>Asset purchase:</strong> Buyer acquires specific assets. Avoids liability inheritance but triggers VAT (16%) on transferred assets and requires contract reassignment</li>
          <li><strong>Merger:</strong> Less common for SME acquisitions. Used in larger deals or PE-backed transactions</li>
        </ul>

        <h2 className={h2Class}>Financing options</h2>
        <ul className={ulClass}>
          <li><strong>Nacional Financiera (NAFIN):</strong> Mexico&rsquo;s development bank offers subsidized loans and guarantees for SME acquisitions through programs like Cr&eacute;dito PyME. Rates significantly below commercial bank rates</li>
          <li><strong>Commercial banks:</strong> BBVA Mexico, Banorte, Santander Mexico, and Citibanamex offer acquisition financing at TIIE + 4&ndash;8%. TIIE has been 10&ndash;12% in recent years</li>
          <li><strong>Seller financing:</strong> Very common (30&ndash;50% of deal value) given high bank interest rates. Often structured as a subordinated note over 3&ndash;5 years</li>
          <li><strong>Private equity/investor equity:</strong> Mexican search fund investors (IPADE network, family offices) provide equity. International investors participate through USD-denominated structures</li>
          <li><strong>INADEM/SE programs:</strong> Government SME support programs offer grants, subsidized training, and some financing for business succession and formalization</li>
        </ul>

        <h2 className={h2Class}>Tax landscape</h2>
        <ul className={ulClass}>
          <li><strong>Corporate tax (ISR):</strong> 30% flat rate on corporate profits. No separate surtax or social contribution (simpler than Brazil)</li>
          <li><strong>PTU (profit sharing):</strong> Companies must distribute 10% of pre-tax profits to employees. A mandatory employee benefit that reduces effective margins</li>
          <li><strong>Capital gains:</strong> Individual sellers pay 10% on gains from share sales on the stock exchange, or the standard progressive rate (up to 35%) for private share sales. Corporate sellers pay at 30%</li>
          <li><strong>VAT (IVA):</strong> 16% on most goods and services. Zero-rated for food, medicine, and exports</li>
          <li><strong>Goodwill:</strong> Not directly amortizable in Mexico. However, certain deal structures (asset purchases) can generate deductible asset step-ups</li>
          <li><strong>RESICO:</strong> Simplified tax regime for small businesses with revenue &lt;MXN$3.5M (&sim;$200K). Very low effective rates. Businesses may lose this benefit upon acquisition</li>
        </ul>

        <h2 className={h2Class}>Target industries</h2>
        <ul className={ulClass}>
          <li><strong>Manufacturing services:</strong> CNC machining, injection molding, and contract manufacturing serving US clients. The nearshoring wave is creating surge demand</li>
          <li><strong>Logistics &amp; transport:</strong> Cross-border logistics, warehousing, and last-mile delivery. US-Mexico trade exceeds $800B annually</li>
          <li><strong>Food &amp; beverage:</strong> Restaurant groups, food processing, and distribution. Mexico&rsquo;s growing middle class drives domestic food service demand</li>
          <li><strong>Healthcare:</strong> Dental clinics, diagnostic labs, and specialty practices. Medical tourism from the US is a growing segment</li>
          <li><strong>Technology services:</strong> Software development, IT outsourcing, and BPO. US time zones and bilingual workforce make Mexico a nearshore tech hub</li>
          <li><strong>Education:</strong> Private schools, universities, and professional training. Mexico&rsquo;s young demographic profile drives education demand</li>
        </ul>

        <h2 className={h2Class}>Key challenges</h2>
        <ul className={ulClass}>
          <li><strong>Informality:</strong> 57% of Mexico&rsquo;s workforce operates in the informal economy. Many SMEs have partial informal operations that complicate valuation and DD</li>
          <li><strong>Security concerns:</strong> Organized crime affects certain regions and industries. Conduct thorough security due diligence and avoid high-risk geographies</li>
          <li><strong>Labor law:</strong> The 2019 labor reform strengthened union rights and employee protections. PTU profit-sharing (10%) and mandatory benefits add to labor costs</li>
          <li><strong>Regulatory complexity:</strong> Federal, state, and municipal regulations overlap. Permits and licenses can be slow and require local expertise</li>
          <li><strong>FX risk:</strong> MXN/USD volatility affects returns for international investors. Consider natural hedges (USD-denominated revenue) or financial hedging</li>
        </ul>

        <h2 className={h2Class}>ETA ecosystem</h2>
        <ul className={ulClass}>
          <li><strong>IPADE:</strong> Mexico&rsquo;s leading business school for ETA. Strong alumni network of searchers and investors. Regular ETA events in Mexico City</li>
          <li><strong>IESE Mexico:</strong> IESE&rsquo;s Spanish-language network extends into Mexico through alumni and investor connections</li>
          <li><strong>Family offices:</strong> Mexican family offices (many second/third generation) are increasingly allocating to search fund investments</li>
          <li><strong>Advisors:</strong> Baker McKenzie, Galicia Abogados, and Creel (law firms) plus KPMG, EY, and local boutiques handle M&amp;A transactions</li>
        </ul>

        <p>
          For the broader Latin American perspective, see{" "}
          <Link href="/learn/eta-latin-america" className="text-apple-accent hover:underline">
            ETA in Latin America
          </Link>{" "}
          and{" "}
          <Link href="/learn/eta-brazil" className="text-apple-accent hover:underline">
            ETA in Brazil
          </Link>.
        </p>
      </div>
    </article>
  );
}
