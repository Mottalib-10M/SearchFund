import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function Stanford2024Article() {
  return (
    <article>
      <h1 className={h1Class}>Stanford 2024 Search Fund Study: Key Takeaways</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          The Stanford Graduate School of Business published its landmark 2024
          Search Fund Study, analyzing data from 681 qualifying search funds
          raised in the United States and Canada since 1984. This study, produced
          by the Center for Entrepreneurial Studies, is the most thorough
          dataset on search fund performance ever compiled. For anyone
          considering a search fund &mdash; whether as a searcher, investor, or
          advisor &mdash; this study is essential reading. Below we break down
          the key findings, compare them to prior editions, and explore what the
          data means in practice.
        </p>

        <h2 className={h2Class}>Record-breaking growth</h2>
        <p>
          A record 94 search funds were launched in 2023 &mdash; the highest number in
          history. This represents a dramatic acceleration from the early days:
          fewer than 20 funds per year were raised before 2010. The surge
          reflects growing awareness of the ETA model, a maturing investor base,
          and the increasing number of MBA programs that teach entrepreneurship
          through acquisition. If you are new to the model, our <Link href="/learn/getting-started" className="text-apple-accent hover:underline">getting started guide</Link> covers the fundamentals.
        </p>
        <p>
          To put this in perspective, the cumulative number of search funds raised
          has more than tripled since 2015. In 2018, the annual launch count
          first crossed 50; by 2022 it exceeded 80. The 2023 figure of 94 funds
          signals that search funds have moved from a niche MBA strategy to a
          recognized institutional asset class. Several large family offices and
          endowments now allocate specifically to search funds, and dedicated
          search fund investor groups have expanded from a handful of individuals
          to organized platforms managing hundreds of millions of dollars.
        </p>

        <h2 className={h2Class}>Headline performance numbers</h2>
        <ul className={ulClass}>
          <li><strong>35.1% aggregate pre-tax IRR</strong> &mdash; across all search funds that have reached a conclusion. For a deeper analysis of how these numbers compare to other asset classes, see our guide to <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">search fund returns and performance data</Link>.</li>
          <li><strong>4.5x aggregate pre-tax ROIC</strong> &mdash; return on invested capital, including both search and acquisition capital.</li>
          <li><strong>63% acquisition rate</strong> &mdash; of search funds that concluded their search, 63% successfully acquired a company.</li>
          <li><strong>20-month average search length</strong> &mdash; reverting to historical norms after a shorter 17-month average during 2020-2021.</li>
          <li><strong>$14.4M median purchase price</strong> &mdash; down slightly from $16.5M in the prior study, likely due to tighter monetary policy.</li>
        </ul>
        <p>
          It is important to note that these aggregate figures are heavily
          influenced by top-performing outliers. The median IRR of approximately
          33% and median MOIC of 5.5x are perhaps more useful benchmarks for
          prospective searchers. Nevertheless, even the median figures far exceed
          typical private equity or venture capital returns over the same
          horizon.
        </p>

        <h2 className={h2Class}>Detailed breakdown of key findings</h2>

        <h3 className={h3Class}>Acquisition size and structure</h3>
        <p>
          The sweet spot for search fund acquisitions remains businesses with
          $2M&ndash;$10M in EBITDA. The median acquisition purchase price of
          $14.4M corresponds to an average acquisition multiple of roughly
          4.5x&ndash;5.5x EBITDA, inclusive of all fees and transaction costs.
          Equity checks from search fund investor groups typically range from
          $5M to $12M, with the remainder financed through SBA loans, seller
          notes, or senior debt from commercial banks.
        </p>
        <p>
          The study notes that median deal sizes grew steadily from 2010 to 2021,
          peaking at $16.5M, before retreating in 2022&ndash;2023 as interest
          rates rose and lending standards tightened. Searchers who closed deals
          during the higher-rate environment reported longer diligence timelines
          and more complex financing structures, including increased use of{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">seller financing</Link>{" "}
          and <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">earn-out structures</Link>.
        </p>

        <h3 className={h3Class}>Hold periods and exit paths</h3>
        <p>
          The median holding period across all concluded search funds is
          approximately five years, though this figure varies significantly by
          era. Funds raised before 2010 had slightly longer holds (6&ndash;7
          years), while more recent vintages show a tighter 4&ndash;6 year
          distribution. The most common exit path remains a strategic sale to a
          larger industry player, accounting for roughly 60% of exits. Sponsor-
          backed recapitalizations and secondary sales to private equity firms
          represent the next-largest category. A small but growing number of
          search fund CEOs pursue <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build strategies</Link>,
          executing multiple add-on acquisitions before exiting the combined
          platform at a premium multiple.
        </p>

        <h3 className={h3Class}>Failure rates by stage</h3>
        <p>
          Understanding where search funds fail is just as important as
          understanding where they succeed. The Stanford data reveals a
          multi-stage funnel:
        </p>
        <ul className={ulClass}>
          <li><strong>37% fail to acquire</strong> &mdash; these searchers return unused capital to investors. The loss is limited to the search-phase capital invested (typically $400K&ndash;$500K per fund).</li>
          <li><strong>~30% of acquisitions underperform</strong> &mdash; among searchers who do acquire, roughly 30% generate returns below 1x invested capital.</li>
          <li><strong>10&ndash;15% result in total loss</strong> &mdash; a subset of acquisitions result in near-total or total loss of acquisition capital, typically due to severe operational issues, customer concentration risk, or industry downturns.</li>
          <li><strong>CEO replacement</strong> &mdash; the study finds that approximately 25&ndash;30% of search fund CEOs are eventually replaced by their boards, often within the first two years of operation. Boards that act decisively on CEO transitions tend to produce better outcomes than those that delay.</li>
        </ul>

        <h3 className={h3Class}>Geographic distribution</h3>
        <p>
          While the Stanford study covers only US and Canadian search funds,
          the geographic distribution within those markets has shifted
          meaningfully. Historically concentrated in major metro areas near
          top MBA programs (Stanford, HBS, Wharton, Booth), search fund
          acquisitions now span all 50 US states. The Southeast and Mountain
          West regions have seen particularly strong growth, driven by
          favorable business climates, lower cost of living for searcher-CEOs,
          and a large base of baby-boomer-owned companies approaching
          succession. Canadian search funds, while smaller in absolute number,
          have grown rapidly, with hubs in Toronto, Vancouver, and Montreal.
        </p>

        <h2 className={h2Class}>Sector concentration</h2>
        <p>
          Since 2014, healthcare and business services companies have accounted
          for roughly half of all search fund acquisitions. Technology and
          software companies represent the next-largest category. The preference
          for recurring-revenue, low-cyclicality businesses remains a defining
          characteristic of the asset class.
        </p>
        <p>
          Within healthcare, the most popular sub-sectors include behavioral
          health clinics, home health agencies, dental and veterinary practice
          groups, and specialty physician practices. In business services,
          common targets include IT managed services, staffing agencies,
          commercial cleaning, facilities management, and niche consulting
          firms. The 2024 study notes a growing interest in{" "}
          <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">SaaS businesses</Link>,
          where recurring subscription revenue and high gross margins align
          well with the search fund model, though valuations in this category
          tend to be higher.
        </p>

        <h2 className={h2Class}>What makes searchers successful?</h2>
        <p>The Stanford data reveals several factors correlated with better outcomes:</p>
        <ul className={ulClass}>
          <li><strong>Industry experience</strong> &mdash; searchers with prior experience in their target sector tend to acquire faster and operate more effectively.</li>
          <li><strong>Geographic focus</strong> &mdash; concentrated geographic searches reduce travel costs and build deeper broker/intermediary networks.</li>
          <li><strong>Investor quality</strong> &mdash; experienced search fund investors provide mentorship, board guidance, and operational support that materially improves outcomes. Learn more about <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">why investors back search funds</Link>.</li>
          <li><strong>Deal discipline</strong> &mdash; the most successful searchers maintain strict acquisition criteria and resist the pressure to close a deal for the sake of completing the search.</li>
          <li><strong>Post-acquisition execution</strong> &mdash; the study emphasizes that operational skill during the hold period is the single biggest determinant of returns. Searchers who invest in professionalizing financial reporting, building management teams, and implementing growth initiatives consistently outperform those who maintain the status quo.</li>
        </ul>

        <h2 className={h2Class}>Trend analysis: 2024 study vs. prior editions</h2>
        <p>
          The Stanford study has been published roughly every two years since
          the early 2000s, and each edition reveals evolving trends in the
          search fund ecosystem. Comparing the 2024 data with the 2020, 2018,
          and 2016 editions highlights several important shifts.
        </p>

        <h3 className={h3Class}>Launch volume and competition</h3>
        <p>
          The 2016 study reported approximately 30&ndash;40 new funds per year.
          By 2018, that figure had risen to 50&ndash;60, and the 2020 study
          captured the first wave above 70 annual launches. The 2024 study&rsquo;s
          record of 94 funds in a single year reflects a market that has roughly
          tripled in size over the past decade. This increased competition has
          important implications: searchers must differentiate themselves more
          effectively, proprietary deal sourcing has become more valuable, and
          the average search duration has crept upward as more searchers compete
          for a finite pool of quality businesses.
        </p>

        <h3 className={h3Class}>Returns over time</h3>
        <p>
          Despite growing competition, aggregate returns have remained
          remarkably stable. The 2016 study reported aggregate IRRs above 30%,
          and each subsequent edition has confirmed returns in the 33&ndash;36%
          range. This durability is partly explained by the growing
          sophistication of searchers and investors, improved operational
          playbooks, and the continued availability of reasonably priced small
          businesses as baby boomers retire. However, some investors have noted
          a slight compression in top-quartile returns in more recent vintages,
          possibly reflecting higher entry multiples and increased competition
          for the best deals.
        </p>

        <h3 className={h3Class}>Searcher demographics</h3>
        <p>
          The profile of the typical searcher has evolved. Earlier editions
          showed a searcher population dominated by graduates of a handful of
          top-ten MBA programs. The 2024 study shows a broader base, with
          searchers emerging from a wider range of business schools, as well as
          a growing cohort of non-MBA searchers with significant industry or
          operating experience. The average age at fund launch has also
          increased slightly, from the late 20s in earlier studies to the
          early-to-mid 30s in 2024, reflecting the growing number of searchers
          who bring five to ten years of professional experience before
          launching their fund. For more on the changing demographics of ETA,
          see our article on{" "}
          <Link href="/learn/women-in-eta" className="text-apple-accent hover:underline">women in ETA</Link>.
        </p>

        <h3 className={h3Class}>Deal structures</h3>
        <p>
          The 2020 and 2024 studies both show a trend toward more complex deal
          structures. Earn-outs, seller financing, and equity rollovers have
          become more common, partly in response to valuation gaps between
          buyers and sellers. The 2024 data shows that approximately 40% of
          acquisitions include some form of seller financing, up from roughly
          25% in the 2016 study. SBA 7(a) loans remain the most popular form
          of debt financing for search fund acquisitions, though conventional
          commercial bank loans have gained share as deal sizes have grown.
        </p>

        <h2 className={h2Class}>Implications for European searchers</h2>
        <p>
          While the Stanford study focuses on US and Canadian funds, its lessons
          are highly relevant to Europe. European search funds benefit from lower
          acquisition multiples (3&ndash;5x EBITDA vs. 4&ndash;7x in the US), less
          competition, and a massive wave of SME succession opportunities. For
          a full overview, read our article on <Link href="/learn/european-search-fund-research" className="text-apple-accent hover:underline">European search fund research from IESE and INSEAD</Link>. The
          IESE International Search Fund Study and INSEAD&apos;s ETA & Search Funds
          Hub provide complementary data for the European market. INSEAD, through
          its Fontainebleau, Singapore, and Abu Dhabi campuses, has become a
          global leader in ETA education, producing research, case studies, and a
          growing alumni network of searchers and investors operating across
          multiple continents.
        </p>
        <p>
          Several data points from the Stanford study are particularly relevant
          for European searchers considering whether to search in the US or
          closer to home:
        </p>
        <ul className={ulClass}>
          <li><strong>Competition levels</strong> &mdash; with 94 US search funds launched in 2023 alone, the US market is substantially more competitive. European markets, even in aggregate, see fewer than 30 traditional search fund launches per year, meaning better access to quality deal flow.</li>
          <li><strong>Valuation arbitrage</strong> &mdash; the Stanford study&rsquo;s median 4.5&ndash;5.5x acquisition multiple compares to 3&ndash;5x in many European markets, particularly in the DACH region, Southern Europe, and the Nordics. This lower entry valuation provides a natural margin of safety.</li>
          <li><strong>Succession dynamics</strong> &mdash; Europe faces an even more acute SME succession crisis than North America. An estimated 2.4 million European SMEs will need to transfer ownership by 2030, many of them family-owned businesses with no internal successor.</li>
          <li><strong>Operational playbooks</strong> &mdash; the operational best practices documented in the Stanford study &mdash; professionalizing finance, building management teams, implementing growth strategies &mdash; translate directly to European acquisitions, where many target companies are even less professionalized than their US counterparts.</li>
        </ul>

        <h2 className={h2Class}>How to use this data when fundraising</h2>
        <p>
          For prospective searchers preparing to raise a search fund, the
          Stanford study is one of the most powerful tools in your arsenal.
          Here is how to use the data effectively in your fundraising
          conversations and investor materials.
        </p>

        <h3 className={h3Class}>Building your Private Placement Memorandum</h3>
        <p>
          Every credible <Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">search fund PPM</Link> includes
          a section on asset class performance. Use the Stanford study&rsquo;s
          aggregate return data &mdash; 35.1% IRR, 4.5x ROIC &mdash; as the
          headline, but go deeper. Sophisticated investors will want to see
          the distribution of returns, not just the mean. Present the median
          figures (33% IRR, 5.5x MOIC) alongside the variance: roughly 75%
          of acquisitions are profitable, but 10&ndash;15% result in a total
          loss. This honest presentation of risk builds credibility.
        </p>

        <h3 className={h3Class}>Addressing investor objections</h3>
        <p>
          Potential investors will raise predictable concerns that the Stanford
          data can help you address:
        </p>
        <ul className={ulClass}>
          <li><strong>&ldquo;Aren&rsquo;t returns declining as the market gets crowded?&rdquo;</strong> &mdash; Point to the stability of aggregate returns across study editions. Despite a tripling in fund launches, returns have held in the 33&ndash;36% IRR range because the pool of eligible businesses is enormous (millions of US SMEs) relative to the number of searchers.</li>
          <li><strong>&ldquo;What if the searcher fails to acquire?&rdquo;</strong> &mdash; The 37% non-acquisition rate is real, but the downside is capped at the search capital invested ($400K&ndash;$500K). This asymmetric risk-return profile &mdash; limited downside with significant upside &mdash; is the core of the search fund investment thesis.</li>
          <li><strong>&ldquo;How do returns compare to my other alternatives?&rdquo;</strong> &mdash; The Stanford data shows search funds outperforming PE (median net IRR of 12&ndash;15%), VC (median net IRR of 15&ndash;20%), and public equities (8&ndash;10% long-run average). The comparison is especially favorable on a risk-adjusted basis when you account for the active management and control position inherent in search fund deals.</li>
        </ul>

        <h3 className={h3Class}>Positioning your unique advantages</h3>
        <p>
          Use the Stanford data as a baseline, then explain why your specific
          search strategy is positioned to outperform the averages. Perhaps you
          have deep industry experience in a sector where the study shows higher
          returns. Perhaps you are targeting a geographic market with less
          competition. Perhaps you have proprietary deal sourcing relationships
          that will help you avoid the lengthening search periods documented in
          the latest study. The data provides the foundation; your differentiation
          provides the narrative.
        </p>

        <h3 className={h3Class}>Setting realistic expectations</h3>
        <p>
          One of the most valuable uses of the Stanford data is setting
          realistic expectations with investors. The study clearly shows that
          search fund investing is a high-variance strategy. While the
          aggregate and median returns are outstanding, individual fund outcomes
          range from total loss to 20x+ returns. Investors should expect to
          build a diversified portfolio of search fund investments (typically
          15&ndash;25 funds) to capture the asset class&rsquo;s statistical
          advantages. For new investors considering their first allocation,
          our guide on{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">finding and approaching search fund investors</Link>{" "}
          provides practical advice on building these relationships.
        </p>

        <h2 className={h2Class}>Limitations of the study</h2>
        <p>
          No dataset is perfect, and the Stanford study has several known
          limitations worth noting. First, it covers only traditional two-year
          search funds; self-funded searchers, accelerators, and search fund
          holding companies are excluded. Second, the study relies on voluntary
          data submission, which may introduce survivorship bias &mdash; funds
          that performed poorly may be less likely to report results. Third,
          the returns are pre-tax and pre-fee, so actual investor returns after
          carried interest, management fees, and taxes will be lower. Finally,
          the study aggregates all vintages from 1984 onward, and performance
          in recent vintages (where competition is highest) may differ from the
          long-run aggregate.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>Are search fund returns declining as the market gets more competitive?</h3>
        <p>
          Despite a tripling in annual search fund launches since 2015 (from roughly 30 to 94 in 2023), aggregate returns have remained remarkably stable. The 2016 study reported aggregate IRRs above 30%, and each subsequent edition has confirmed returns in the 33&ndash;36% range. This durability reflects the enormous size of the addressable market &mdash; there are millions of US SMEs with baby boomer owners approaching retirement, far exceeding the number of active searchers. However, some investors have noted a slight compression in top-quartile returns in more recent vintages, likely reflecting higher entry multiples driven by increased competition for the best deals. The median acquisition multiple has risen from roughly 4x EBITDA in earlier studies to 4.5&ndash;5.5x in the 2024 data, suggesting that searchers must increasingly rely on operational value creation rather than entry valuation alone to generate strong returns.
        </p>

        <h3 className={h3Class}>How do search fund returns compare to traditional private equity and venture capital?</h3>
        <p>
          The Stanford data shows search funds outperforming most alternative asset classes on both an IRR and MOIC basis. The 35.1% aggregate pre-tax IRR and 4.5x ROIC compare favorably to PE (median net IRR of 12&ndash;15% according to Cambridge Associates data), VC (median net IRR of 15&ndash;20%), and public equities (8&ndash;10% long-run average). The comparison is especially favorable on a risk-adjusted basis when accounting for the control position, active management, and downside protection inherent in search fund structures. However, the comparison requires caveats: search fund returns are pre-tax and pre-fee, aggregate figures are skewed by top-performing outliers like Asurion, and the asset class has survivorship bias since underperforming funds are less likely to report data. For a deeper analysis, see our guide to{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">search fund returns and performance data</Link>.
        </p>

        <h3 className={h3Class}>What percentage of search fund CEOs are eventually replaced by their boards?</h3>
        <p>
          The Stanford 2024 Study finds that approximately 25&ndash;30% of search fund CEOs are eventually replaced by their boards, often within the first two years of operation. This is a feature of the model, not a flaw: search fund investor-directors have a fiduciary obligation to ensure the acquired company has the best possible leadership. The study shows that boards that act decisively on CEO transitions tend to produce better investment outcomes than those that delay. Common triggers for CEO replacement include failure to meet operational targets, inability to build a management team, and misalignment with the board on strategic direction. For search fund CEOs, the lesson is clear: proactive{" "}
          <Link href="/learn/investor-relations" className="text-apple-accent hover:underline">investor communication</Link>, transparent reporting, and rapid operational improvement in the first 12&ndash;18 months are critical to building the board confidence necessary to retain the CEO role.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>
            <a href="https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              Stanford Graduate School of Business &mdash; 2024 Search Fund Study (Center for Entrepreneurial Studies)
            </a>
          </li>
          <li>
            <a href="https://www.iese.edu/entrepreneurship/search-funds/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              IESE Business School &mdash; International Search Fund Study (Complementary European Data)
            </a>
          </li>
          <li>
            <a href="https://www.cambridgeassociates.com/private-investment-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              Cambridge Associates &mdash; Private Equity and Venture Capital Benchmark Data
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
