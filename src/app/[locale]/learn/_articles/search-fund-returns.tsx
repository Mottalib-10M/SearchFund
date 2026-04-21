import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SearchFundReturnsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund Returns & Performance Data</h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          Search funds have established themselves as one of the
          highest-performing alternative investment strategies over the past four
          decades. Here we compile the key performance data from major studies
          by Stanford GSB, IESE Business School, INSEAD&apos;s ETA & Search Funds
          Hub, and other leading research institutions. Understanding both the
          upside potential and the downside risks is essential for anyone
          considering this asset class &mdash; whether as a searcher building a{" "}
          <Link href="/learn/fundraising-deck" className="text-apple-accent hover:underline">fundraising deck</Link>{" "}
          or as an investor evaluating an allocation.
        </p>

        <h2 className={h2Class}>Aggregate returns (1984&ndash;2023)</h2>
        <ul className={ulClass}>
          <li><strong>35.1% pre-tax IRR</strong> &mdash; aggregate across all US/Canadian search funds, as documented in the <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">Stanford 2024 Search Fund Study</Link>.</li>
          <li><strong>4.5x pre-tax ROIC</strong> &mdash; aggregate return on all invested capital.</li>
          <li><strong>Outperforms PE and VC</strong> &mdash; search funds have consistently outperformed both private equity and venture capital benchmarks on a risk-adjusted basis. Discover <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">why investors choose search funds</Link> over traditional alternatives.</li>
        </ul>
        <p>
          These aggregate figures represent the combined performance of all
          search funds that have reached a terminal outcome &mdash; whether
          through a successful exit, a wind-down, or a total loss. Because
          they include all outcomes, they provide a useful picture of the asset
          class as a whole, but they can be skewed by a small number of
          exceptional performers. To build a more nuanced understanding, it
          is essential to look at the full distribution of returns.
        </p>

        <h2 className={h2Class}>Return distribution by percentile</h2>
        <p>
          Search fund returns exhibit high variance, which is one of the most
          important characteristics for investors to understand. The following
          breakdown, drawn from Stanford and IESE data, illustrates the range:
        </p>

        <h3 className={h3Class}>Top quartile (75th percentile and above)</h3>
        <ul className={ulClass}>
          <li><strong>IRR:</strong> 50&ndash;100%+ in the best-performing funds.</li>
          <li><strong>MOIC:</strong> 7x&ndash;20x+ return on invested capital.</li>
          <li>These outliers are typically businesses where the searcher-CEO drove substantial revenue growth, expanded margins through operational improvements, and exited at a significantly higher valuation multiple than the purchase price.</li>
          <li>Top-quartile results often involve a combination of organic growth and one or more <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">add-on acquisitions</Link> that transform a single business into a scalable platform.</li>
        </ul>

        <h3 className={h3Class}>Median (50th percentile)</h3>
        <ul className={ulClass}>
          <li><strong>IRR:</strong> approximately 33%.</li>
          <li><strong>MOIC:</strong> approximately 5.5x.</li>
          <li>The median search fund generates a strong return that significantly outperforms most alternative investments. A 33% IRR over a typical five-year hold period means investors roughly quadruple to quintuple their capital.</li>
          <li>Median outcomes typically involve steady operational improvements, modest revenue growth of 5&ndash;15% per year, and an exit at a modestly higher multiple than the entry price.</li>
        </ul>

        <h3 className={h3Class}>Bottom quartile (25th percentile and below)</h3>
        <ul className={ulClass}>
          <li><strong>IRR:</strong> negative to low single digits.</li>
          <li><strong>MOIC:</strong> 0x&ndash;1x, meaning investors lose some or all of their capital.</li>
          <li>Bottom-quartile results often stem from fundamental operational problems: key customer losses, industry downturns, management failures, or deal structures that left insufficient margin for error.</li>
          <li>Within this group, approximately 10&ndash;15% of all acquisitions result in a near-total or total loss of invested capital.</li>
        </ul>

        <h2 className={h2Class}>Risk-adjusted returns vs. other asset classes</h2>
        <p>
          Comparing search fund returns to other asset classes requires
          accounting for differences in risk, liquidity, and time commitment.
          Here is how search funds stack up against the most common
          alternatives:
        </p>
        <ul className={ulClass}>
          <li><strong>Public equities (S&P 500):</strong> long-run average annual return of 8&ndash;10%. Search funds offer roughly 3&ndash;4x this return on a gross basis, though public equities offer daily liquidity and zero management burden.</li>
          <li><strong>Private equity:</strong> top-quartile PE funds generate net IRRs of 15&ndash;20%. Search fund median returns of 33% IRR significantly exceed even top-quartile PE performance. However, PE portfolios offer greater diversification and institutional-grade reporting. See our comparison of <Link href="/learn/eta-vs-private-equity" className="text-apple-accent hover:underline">ETA vs. private equity</Link>.</li>
          <li><strong>Venture capital:</strong> top-quartile VC funds target 20&ndash;25% net IRR, but with extreme variance &mdash; most individual VC investments fail entirely. Search funds offer a more balanced risk profile with a lower total-loss rate than VC. Our <Link href="/learn/eta-vs-venture-capital" className="text-apple-accent hover:underline">ETA vs. venture capital</Link> analysis explores this in detail.</li>
          <li><strong>Real estate:</strong> commercial real estate typically targets 8&ndash;15% annual returns. Search funds outperform on an IRR basis but lack the tangible asset backing and inflation-hedging properties of real estate. Read more in our <Link href="/learn/eta-vs-real-estate" className="text-apple-accent hover:underline">ETA vs. real estate</Link> guide.</li>
        </ul>
        <p>
          On a pure risk-adjusted basis, search funds look particularly
          attractive when held as a portfolio. An investor who backs 15&ndash;25
          search funds over time is likely to see a blended return that captures
          the asset class&rsquo;s strong median performance while diversifying
          away individual fund risk. This portfolio approach is the standard
          strategy among the most experienced search fund investors.
        </p>

        <h2 className={h2Class}>What drives search fund returns?</h2>
        <p>
          Search fund returns are generated through four primary value creation
          levers. The best outcomes typically combine all four.
        </p>

        <h3 className={h3Class}>1. Operational improvements</h3>
        <p>
          Many search fund target companies are founder-managed businesses
          with significant operational inefficiencies. New search fund CEOs
          frequently drive margin expansion through professionalized financial
          management, improved pricing strategies, streamlined operations, and
          upgraded technology systems. A{" "}
          <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">digital transformation</Link>{" "}
          initiative alone can add 3&ndash;5 percentage points of EBITDA margin
          in many SMEs. Operational improvements are the most reliable source
          of returns because they are within the CEO&rsquo;s direct control.
        </p>

        <h3 className={h3Class}>2. Revenue growth</h3>
        <p>
          Organic revenue growth of 5&ndash;15% per year is typical among
          successful search fund acquisitions. Growth drivers include expanding
          into adjacent markets, professionalizing sales and marketing, adding
          new products or services, and geographic expansion. In recurring-
          revenue businesses like{" "}
          <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">SaaS companies</Link>{" "}
          or managed services, even modest improvements in customer retention
          and upselling can compound dramatically over a five-year hold period.
        </p>

        <h3 className={h3Class}>3. Multiple expansion</h3>
        <p>
          Search funds typically acquire businesses at 4&ndash;6x EBITDA and
          exit at 6&ndash;10x EBITDA. This multiple expansion occurs naturally
          as the searcher professionalizes the business, diversifies the
          customer base, builds a management team, and demonstrates several
          years of consistent growth. A business that was valued at 4x EBITDA
          as a small, owner-dependent company may command 8x or more as a
          well-managed, growing platform with institutional-quality reporting
          and a proven management team.
        </p>

        <h3 className={h3Class}>4. Debt paydown</h3>
        <p>
          Most search fund acquisitions include a meaningful debt component
          &mdash; often 50&ndash;60% of the purchase price. As the business
          generates free cash flow, this debt is paid down, directly increasing
          equity value. In a typical five-year hold, a business might pay down
          most or all of its acquisition debt, creating significant returns
          for equity holders even if the business&rsquo;s enterprise value
          remains flat. This &ldquo;leveraged equity&rdquo; effect is a
          structural advantage of the search fund model.
        </p>

        <h2 className={h2Class}>Failure rates and loss scenarios</h2>
        <p>
          Honest analysis of search fund returns must account for the
          downside. The Stanford data provides clear evidence of the risks
          involved at every stage of the search fund lifecycle.
        </p>
        <ul className={ulClass}>
          <li><strong>Search phase failure (37%):</strong> more than one-third of funded searchers never complete an acquisition. In these cases, investors lose some or all of their search-phase capital (typically $400K&ndash;$500K), but the loss is contained. Searchers who fail to acquire typically cite an inability to find businesses that met their criteria at acceptable valuations, often compounded by competitive deal processes.</li>
          <li><strong>Post-acquisition underperformance (~30% of acquisitions):</strong> roughly one-third of completed acquisitions generate returns below 1x ROIC. Common causes include loss of a key customer, failure to retain critical employees during the transition, over-leveraged capital structures, and industry-specific downturns.</li>
          <li><strong>Total loss (10&ndash;15% of acquisitions):</strong> a meaningful minority of acquisitions result in near-total or total loss of invested capital. These outcomes typically involve a catastrophic combination of factors: severe revenue decline, covenant violations leading to lender-forced sales, or fraud discovered after closing. Thorough <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link> and a well-structured <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">quality of earnings analysis</Link> are the best defenses against these scenarios.</li>
          <li><strong>CEO replacement (~25&ndash;30%):</strong> boards replace the founding search fund CEO in roughly one-quarter to one-third of cases. While this can be disruptive, the Stanford data shows that boards that act quickly on CEO transitions often salvage outcomes that would otherwise deteriorate further.</li>
        </ul>

        <h2 className={h2Class}>Timeline: how long to generate returns</h2>
        <p>
          Search fund investing is a long-duration strategy. From the time an
          investor writes a check for the search phase to the time they receive
          exit proceeds, the typical timeline spans seven to nine years:
        </p>
        <ul className={ulClass}>
          <li><strong>Search phase:</strong> 18&ndash;24 months (the 2024 Stanford study reports a 20-month average).</li>
          <li><strong>Acquisition and transition:</strong> 3&ndash;6 months from LOI to close, plus 3&ndash;12 months of intensive transition work with the seller.</li>
          <li><strong>Operating period:</strong> 4&ndash;6 years of active management, growth, and value creation.</li>
          <li><strong>Exit process:</strong> 6&ndash;12 months from engagement of an investment banker to close of sale.</li>
        </ul>
        <p>
          Investors should plan for total capital commitment periods of seven
          to nine years, though some funds exit earlier (as quickly as three
          to four years post-acquisition in the best cases) and some hold
          longer (eight to ten years in slower-growth scenarios). The lack of
          liquidity during this period is a key consideration for investors,
          and it is one of the reasons search fund returns carry a premium
          over more liquid asset classes. For context on how the exit timeline
          works, see our guide to{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">exit strategies for search fund CEOs</Link>.
        </p>

        <h2 className={h2Class}>Vintage year analysis</h2>
        <p>
          Not all search fund vintages perform equally. The Stanford data
          allows analysis by the year a fund was raised, and several patterns
          emerge. Funds raised in the early 2000s &mdash; when the asset class
          was smaller and less competitive &mdash; produced some of the highest
          absolute returns, with aggregate IRRs exceeding 40% for certain
          vintage years. However, these early vintages also had higher variance
          due to smaller sample sizes and less institutional infrastructure.
        </p>
        <p>
          More recent vintages (2015&ndash;2020) show returns that are modestly
          lower in aggregate but with tighter distributions, reflecting a
          maturing ecosystem with better investor support, more refined
          operational playbooks, and improved deal sourcing methodologies.
          Importantly, many post-2020 funds have not yet reached terminal
          outcomes, so the data for the most recent vintages is incomplete
          and should be interpreted with caution.
        </p>

        <h2 className={h2Class}>Portfolio construction for investors</h2>
        <p>
          Given the high variance in individual fund outcomes, sophisticated
          search fund investors build diversified portfolios rather than
          concentrating in a small number of deals. The optimal portfolio
          size depends on the investor&rsquo;s capital base and risk tolerance,
          but most experienced investors target 15&ndash;25 search fund
          investments over a multi-year period.
        </p>
        <ul className={ulClass}>
          <li><strong>Diversification effect:</strong> with a portfolio of 20 funds, an investor is statistically likely to have several top-quartile performers that more than offset the bottom-quartile losses. The portfolio&rsquo;s blended return converges toward the asset class median of 33% IRR and 5.5x MOIC.</li>
          <li><strong>Capital allocation:</strong> most investors allocate $50K&ndash;$200K per search fund in the search phase, with follow-on capital of $200K&ndash;$1M at acquisition. This structure allows investors to deploy capital gradually and concentrate in deals where they have higher conviction after evaluating the specific acquisition target.</li>
          <li><strong>Sector and geographic diversification:</strong> while not always achievable in practice, investors who diversify across sectors and geographies reduce correlation risk. A downturn in healthcare, for example, will not impact a portfolio that also includes business services and technology investments.</li>
        </ul>

        <h2 className={h2Class}>Acquisition success rates</h2>
        <ul className={ulClass}>
          <li>63% of funded searchers successfully acquire a company.</li>
          <li>37% of searchers return remaining capital to investors without completing an acquisition.</li>
          <li>Of those who acquire, approximately 70% generate positive returns for investors.</li>
        </ul>
        <p>
          These success rates have remained remarkably stable over the past
          two decades despite the significant increase in the number of active
          searchers. This stability suggests that the supply of quality
          acquisition targets &mdash; small, profitable, owner-managed
          businesses with succession needs &mdash; continues to grow in
          proportion to demand. The baby-boomer retirement wave, which will
          see an estimated 2.3 million US small businesses change hands over
          the next decade, provides a deep and growing pipeline of potential
          targets.
        </p>

        <h2 className={h2Class}>Typical deal characteristics</h2>
        <ul className={ulClass}>
          <li><strong>Median purchase price:</strong> $14.4M (US/Canada), lower in Europe.</li>
          <li><strong>Typical EBITDA:</strong> $1M&ndash;$3M at acquisition.</li>
          <li><strong>Acquisition multiples:</strong> 3x&ndash;6x EBITDA.</li>
          <li><strong>Holding period:</strong> 5&ndash;7 years before exit.</li>
          <li><strong>Searcher equity:</strong> 20&ndash;30% of the acquired company.</li>
          <li><strong>Debt-to-equity ratio:</strong> typically 50&ndash;60% debt financing at acquisition, declining to 20&ndash;30% by exit through cash flow-driven paydown.</li>
          <li><strong>Exit multiples:</strong> 6&ndash;10x EBITDA for well-managed companies with demonstrated growth, representing 1.5&ndash;2.5x multiple expansion over the entry price.</li>
        </ul>

        <h2 className={h2Class}>Comparison to other asset classes</h2>
        <p>
          Search funds offer a compelling risk-return profile. While individual
          fund outcomes vary widely, the aggregate performance data places
          search funds among the top-performing asset classes in private markets.
          The combination of active management, aligned incentives, and small
          company premiums drives this outperformance. Read about the operators behind the numbers in our <Link href="/learn/search-fund-success-stories" className="text-apple-accent hover:underline">search fund success stories</Link>.
        </p>
        <p>
          The most useful comparison framework accounts for three dimensions:
          absolute return, risk (measured by loss rates and variance), and
          liquidity. Search funds score highest on absolute return, moderately
          on risk (better than VC, roughly comparable to PE), and lowest on
          liquidity (long hold periods with no secondary market). For investors
          who can tolerate the illiquidity, the return premium is substantial.
        </p>

        <h2 className={h2Class}>European performance</h2>
        <p>
          While less data is available for European search funds given their
          shorter history, early results are promising. Lower entry valuations
          and a larger pool of succession-driven transactions suggest that
          European funds may ultimately deliver returns comparable to or better
          than their US counterparts. INSEAD&apos;s ETA & Search Funds Hub is
          actively building the most comprehensive dataset on European search
          fund performance, tracking deals across France, DACH, Benelux, and
          the Nordics &mdash; providing investors with the data they need to support
          European searchers with confidence.
        </p>
        <p>
          Early European vintages have shown aggregate MOIC figures in the
          3&ndash;5x range, which is encouraging given the lower entry multiples
          and less mature investor ecosystem. As the European search fund
          community matures &mdash; with more experienced investors, better
          operational playbooks, and a growing alumni network &mdash; many
          industry observers expect European returns to converge with or
          exceed US benchmarks. For a deeper look at the European landscape,
          see our guide to{" "}
          <Link href="/learn/european-search-fund-research" className="text-apple-accent hover:underline">European search fund research from IESE and INSEAD</Link>.
        </p>
      </div>
    </article>
  );
}
