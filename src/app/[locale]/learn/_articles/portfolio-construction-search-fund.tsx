import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function PortfolioConstructionSearchFundArticle() {
  return (
    <article>
      <h1 className={h1Class}>Portfolio Construction for Search Fund Investors</h1>
      <div className={bodyClass}>
        <p>Search fund investing requires a portfolio approach &mdash; returns are driven by a small number of outsized winners while many investments produce modest or negative returns. Effective portfolio construction involves determining allocation size, number of investments, diversification strategy, and capital reserve planning. This guide provides a framework for building and managing a search fund investment portfolio.</p>
      </div>

      <h2 className={h2Class}>Portfolio Size &amp; Diversification</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Minimum portfolio:</strong> 10&ndash;15 search fund investments to achieve meaningful diversification. Returns are lumpy and concentrated.</li>
          <li><strong>Optimal portfolio:</strong> 20&ndash;30+ investments provides better diversification. The top 3&ndash;5 performers typically drive portfolio returns.</li>
          <li><strong>Vintage diversification:</strong> Invest across multiple years (vintages) to reduce timing risk. 3&ndash;5 investments per year over 5+ years.</li>
          <li><strong>Geographic diversification:</strong> Mix US and international search funds. European and Latin American funds offer different risk/return profiles.</li>
          <li><strong>Industry diversification:</strong> Avoid concentrating in one industry. Search fund targets span healthcare, business services, manufacturing, and technology.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Capital Allocation</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Search capital:</strong> $50K&ndash;250K per search fund for the initial search phase. This is the &ldquo;option&rdquo; to invest in the acquisition.</li>
          <li><strong>Acquisition capital:</strong> 2&ndash;5x the search capital commitment when an acquisition is identified. Pro rata rights allow investors to maintain their ownership.</li>
          <li><strong>Total per investment:</strong> $200K&ndash;1M+ total capital deployed per search fund (search + acquisition). Plan for 3&ndash;5x the initial search commitment.</li>
          <li><strong>Reserve ratio:</strong> Reserve 60&ndash;70% of total allocated capital for acquisition-phase investments. Do not over-commit at the search stage.</li>
          <li><strong>Portfolio allocation:</strong> Search funds typically represent 5&ndash;20% of an investor&apos;s total alternative investment portfolio.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Return Expectations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Portfolio returns:</strong> Well-constructed portfolios target 2&ndash;3x net MOIC and 20&ndash;30% gross IRR over a 7&ndash;10 year investment horizon.</li>
          <li><strong>Return distribution:</strong> ~25% of search funds don&apos;t complete an acquisition (partial loss). ~15% of acquisitions underperform. ~30% are solid returns. ~15&ndash;20% are home runs (5x+).</li>
          <li><strong>J-curve effect:</strong> Search fund portfolios show negative or flat returns in years 1&ndash;3. Returns materialize in years 4&ndash;8 as acquisitions mature and exit.</li>
          <li><strong>Cash flow timing:</strong> Expect first meaningful distributions in year 4&ndash;5. Full portfolio realization takes 8&ndash;12 years.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Portfolio Management</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Active involvement:</strong> Search fund investors who provide mentorship, board service, and operational support generate better portfolio returns.</li>
          <li><strong>Follow-on decisions:</strong> Deciding whether to exercise pro rata rights for each acquisition is the most important portfolio management decision.</li>
          <li><strong>Information flow:</strong> Expect quarterly updates from searchers (search phase) and monthly/quarterly financials post-acquisition.</li>
          <li><strong>Board service:</strong> Serving on 2&ndash;4 portfolio company boards provides oversight and value-add but requires significant time commitment.</li>
          <li><strong>Network leverage:</strong> The search fund investor community is small. Co-investing with experienced investors provides deal flow and due diligence support.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Build a portfolio of 20&ndash;30+ search fund investments across vintages, geographies, and industries for meaningful diversification</li>
          <li>Reserve 60&ndash;70% of total capital for acquisition-phase investments &mdash; don&apos;t over-commit at the search stage</li>
          <li>Expect a J-curve: flat or negative returns in years 1&ndash;3, with meaningful distributions starting in years 4&ndash;5</li>
          <li>The top 3&ndash;5 investments in a portfolio typically drive overall returns &mdash; the portfolio approach is essential</li>
          <li>Active involvement (board service, mentorship) correlates with better portfolio-level returns</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/is-search-fund-good-investment" className="text-apple-accent hover:underline">Is a Search Fund a Good Investment?</Link></li>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns</Link></li>
        <li><Link href="/learn/evaluate-searcher" className="text-apple-accent hover:underline">How to Evaluate a Searcher</Link></li>
        <li><Link href="/learn/risk-factors-search-fund" className="text-apple-accent hover:underline">Risk Factors in Search Fund Investing</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study: Investor Returns Analysis</em> (2024)</li>
        <li>Pacific Lake Partners, <em>Search Fund Portfolio Construction Guide</em> (2024)</li>
        <li>IESE Business School, <em>International Search Fund Study</em> (2024)</li>
      </ul>
    </article>
  );
}
