import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function FundOfSearchFundsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Fund of Search Funds: Institutional Access to ETA</h1>
      <div className={bodyClass}>
        <p>Fund of search funds (FoSF) vehicles pool capital from institutional investors and family offices to build diversified portfolios of search fund investments. These dedicated funds solve the two biggest challenges of direct search fund investing: the difficulty of sourcing and evaluating individual searchers, and the need for portfolio diversification across 20&ndash;30+ investments. As the search fund asset class matures, FoSF vehicles are becoming the primary channel for institutional capital to access ETA returns.</p>
      </div>

      <h2 className={h2Class}>How Fund of Search Funds Work</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Structure:</strong> Traditional LP/GP structure. GP raises a committed fund ($20&ndash;100M+) and deploys across 20&ndash;40+ individual search fund investments.</li>
          <li><strong>Investment stages:</strong> Deploy capital at both the search phase (initial commitment) and acquisition phase (pro rata + co-investment).</li>
          <li><strong>Fund lifecycle:</strong> 10&ndash;12 year fund life. 3&ndash;4 year investment period, 6&ndash;8 year harvest period. Extended hold for later-vintage investments.</li>
          <li><strong>GP value-add:</strong> Sourcing searchers, due diligence, board service, mentorship, and portfolio management across all investments.</li>
          <li><strong>Minimum investment:</strong> Typically $500K&ndash;5M+ per LP, making search fund exposure accessible to institutional investors.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Benefits of FoSF</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Instant diversification:</strong> Single investment provides exposure to 20&ndash;40+ search funds across vintages, geographies, and industries.</li>
          <li><strong>Professional management:</strong> Experienced GP handles sourcing, evaluation, governance, and portfolio management.</li>
          <li><strong>Access to top searchers:</strong> Established FoSF managers have networks and track records that attract the best searchers.</li>
          <li><strong>Reduced time commitment:</strong> LPs avoid the time burden of evaluating individual searchers and serving on multiple boards.</li>
          <li><strong>Track record data:</strong> Established FoSF managers provide historical performance data and transparent reporting.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Economics</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Management fee:</strong> 1.5&ndash;2% annual management fee on committed capital during investment period, invested capital thereafter.</li>
          <li><strong>Carried interest:</strong> 15&ndash;20% carry above a preferred return hurdle (typically 8%). Net of underlying search fund economics.</li>
          <li><strong>Double layer:</strong> Investors pay FoSF fees plus bear the searcher&apos;s equity share (20&ndash;30%). This &ldquo;double promote&rdquo; reduces net LP returns.</li>
          <li><strong>Net returns:</strong> Target 15&ndash;20% net IRR to LPs (after fees and carry). Lower than direct search fund investing due to fee layers.</li>
          <li><strong>GP commitment:</strong> GPs typically invest 1&ndash;5% of the fund alongside LPs for alignment.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Players</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Pacific Lake Partners:</strong> One of the earliest and largest dedicated search fund investors. Multiple fund vintages.</li>
          <li><strong>Search Fund Partners:</strong> Dedicated FoSF vehicle with deep search fund ecosystem relationships.</li>
          <li><strong>Relay Investments:</strong> Focused on search fund and ETA investments with active board involvement.</li>
          <li><strong>European FoSF:</strong> Istria Capital, ETAG, and others focused on European search fund investing.</li>
          <li><strong>Multi-strategy:</strong> Some family offices and multi-strategy funds allocate a portion to search funds as part of broader alternative portfolios.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Fund of search funds provide instant diversification across 20&ndash;40+ search fund investments with professional management</li>
          <li>FoSF target 15&ndash;20% net IRR to LPs, lower than direct investing due to the &ldquo;double promote&rdquo; fee structure</li>
          <li>Established FoSF managers offer access to top searchers, governance expertise, and portfolio-level risk management</li>
          <li>FoSF are the primary channel for institutional investors and family offices to access the search fund asset class</li>
          <li>The trade-off is clear: lower net returns in exchange for diversification, professional management, and reduced time commitment</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/portfolio-construction-search-fund" className="text-apple-accent hover:underline">Portfolio Construction</Link></li>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns</Link></li>
        <li><Link href="/learn/search-fund-investor-ecosystems" className="text-apple-accent hover:underline">Search Fund Investor Ecosystems</Link></li>
        <li><Link href="/learn/is-search-fund-good-investment" className="text-apple-accent hover:underline">Is a Search Fund a Good Investment?</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study: Institutional Investment Trends</em> (2024)</li>
        <li>Preqin, <em>Fund of Funds in Alternative Assets</em> (2024)</li>
        <li>IESE Business School, <em>Search Fund Ecosystem Growth</em> (2024)</li>
      </ul>
    </article>
  );
}
