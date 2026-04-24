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
        <li><Link href="/learn/search-fund-good-investment" className="text-apple-accent hover:underline">Is a Search Fund a Good Investment?</Link></li>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns</Link></li>
        <li><Link href="/learn/evaluate-searcher" className="text-apple-accent hover:underline">How to Evaluate a Searcher</Link></li>
        <li><Link href="/learn/risk-factors-search-fund" className="text-apple-accent hover:underline">Risk Factors in Search Fund Investing</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>How many search fund investments do I need for adequate diversification?</h3>
        <p>
          Experienced search fund investors recommend a minimum portfolio of 20&ndash;30 investments across multiple vintages to achieve meaningful diversification. According to the Stanford GSB 2024 Search Fund Study, returns in the asset class are highly concentrated &mdash; the top 10&ndash;15% of investments generate the majority of portfolio returns, while approximately 25% of search funds never complete an acquisition and 15% of completed acquisitions underperform. Pacific Lake Partners&rsquo; portfolio construction research shows that investors with fewer than 15 investments face significant variance in outcomes, with portfolio-level returns ranging from negative to 5x+. By contrast, investors with 25+ investments across 5+ vintage years consistently achieve 2&ndash;3x net MOIC and 20&ndash;30% gross IRR, which represents the asset class&rsquo;s true risk-adjusted return profile.
        </p>

        <h3 className={h3Class}>How much capital should I reserve for acquisition-phase follow-on investments?</h3>
        <p>
          Investors should reserve 60&ndash;70% of their total allocated search fund capital for acquisition-phase follow-on investments. According to the IESE Business School&rsquo;s 2024 International Search Fund Study, the acquisition-phase investment is typically 2&ndash;5x the initial search capital commitment, meaning an investor who commits $100,000 to a search fund should expect to invest an additional $200,000&ndash;$500,000 when an acquisition is identified. Failing to reserve adequate capital for follow-on investments is one of the most common mistakes new search fund investors make &mdash; if you deploy too much capital in search-phase commitments, you may be unable to exercise your pro rata rights on the best acquisition opportunities, which is where the majority of returns are generated.
        </p>

        <h3 className={h3Class}>What is the expected timeline for search fund portfolio returns?</h3>
        <p>
          Search fund portfolios exhibit a pronounced J-curve effect, with negative or flat returns in years 1&ndash;3 and meaningful distributions beginning in years 4&ndash;5. According to Stanford GSB data, the median time from search fund formation to first meaningful distribution is approximately 5&ndash;6 years, with full portfolio realization taking 8&ndash;12 years. The first 2 years are the search phase (capital deployed with no returns), followed by 3&ndash;5 years of post-acquisition value creation, and finally exit events in years 5&ndash;8 that generate cash distributions. Investors should plan their personal liquidity needs accordingly and avoid allocating capital to search funds that they may need within the first 5 years. The long-duration nature of search fund investing is one reason the asset class remains less crowded than other alternative investment categories.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study: Investor Returns Analysis</em> (2024)</li>
        <li>Pacific Lake Partners, <em>Search Fund Portfolio Construction Guide</em> (2024)</li>
        <li>IESE Business School, <em>International Search Fund Study</em> (2024)</li>
      </ul>
    </article>
  );
}
