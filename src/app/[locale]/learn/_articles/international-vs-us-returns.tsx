import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function InternationalVsUSReturnsArticle() {
  return (
    <article>
      <h1 className={h1Class}>International vs. US Search Fund Returns: A Data-Driven Comparison</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          US search funds have generated aggregate returns of 5.2x MOIC and 35%+
          IRR over four decades. International search funds, tracked primarily by
          IESE Business School, report roughly 2.4x aggregate MOIC &mdash; less
          than half the US figure. That gap raises a critical question for
          investors and searchers: is international search fund investing
          structurally inferior, or does the return differential reflect a younger
          market that is steadily closing the distance? This article breaks down
          the data from Stanford&rsquo;s 2024 US study and IESE&rsquo;s 2024
          International Search Fund Study, examines the structural reasons behind
          the gap, and assesses whether international search funds deserve a place
          in a well-constructed portfolio.
        </p>

        <h2 className={h2Class}>The US benchmark: 40 years of data</h2>
        <p>
          The{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">Stanford 2024 Search Fund Study</Link>{" "}
          analyzed 681 qualifying search funds raised in the US and Canada since
          1984. The headline numbers set a high bar: 5.2x aggregate pre-tax MOIC,
          35.1% aggregate pre-tax IRR, and a 63% acquisition rate. Median
          acquisition purchase price was $14.4M, typically at 4.5x&ndash;5.5x
          EBITDA. The top quartile of completed deals returned north of 10x,
          pulling the aggregate figures upward in a classic power-law distribution.
        </p>
        <p>
          Several features of the US market underpin these results. A deep pool of
          300+ active search fund investors provides searchers with capital,
          mentorship, and governance. SBA 7(a) loans offer acquisition financing
          at favorable terms, allowing searchers to apply meaningful use. The
          M&amp;A exit market is the deepest in the world &mdash; strategic
          acquirers, private equity firms, and sponsor-backed recapitalizations
          create multiple exit pathways. And four decades of operational playbooks
          mean that post-acquisition execution is increasingly professionalized.
        </p>
        <p>
          These structural advantages did not appear overnight. The US market spent
          its first 20 years as a tiny niche, with fewer than 10 funds per year.
          Returns in those early vintages were volatile and data was sparse. The
          mature, high-returning asset class that exists today was built over
          decades of institutional learning. That context matters when evaluating
          international markets that are 10&ndash;15 years into the same journey.
        </p>

        <h2 className={h2Class}>The international picture: IESE 2024 data</h2>
        <p>
          IESE Business School&rsquo;s 2024 International Search Fund Study is the
          most authoritative dataset on search funds outside North America. It
          covers approximately 200 search funds raised across Europe, Latin
          America, and other regions since the mid-2000s. The aggregate figures
          tell a more modest story: approximately 2.4x MOIC and an acquisition
          rate of roughly 70&ndash;75% in established markets.
        </p>
        <p>
          The regional breakdown reveals significant variation:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Spain:</strong> The most mature international market, with
            50+ completed search funds. Returns have been competitive with the
            US in the best vintages, driven by low acquisition multiples
            (3&ndash;4.5x EBITDA), a strong IESE alumni network, and a deep
            pool of family-owned SMEs facing succession transitions.
          </li>
          <li>
            <strong>France &amp; DACH region:</strong> Growing ecosystems with
            15&ndash;30 completed funds each. French search funds benefit from
            Europe&rsquo;s second-largest SME market and favorable
            transmission regulations. Germany, Austria, and Switzerland offer
            higher-quality target companies (the{" "}
            <em>Mittelstand</em>) but more complex labor laws and higher
            seller price expectations.
          </li>
          <li>
            <strong>United Kingdom:</strong> A relatively small but
            well-developed market. UK searchers benefit from a
            common-law legal framework familiar to US investors, an active
            M&amp;A advisory market, and English-language operations that
            reduce friction for cross-border investors.
          </li>
          <li>
            <strong>Latin America:</strong> Brazil and Mexico represent the
            largest opportunities, with a massive base of founder-owned
            businesses, lower acquisition multiples (often 2.5&ndash;4x
            EBITDA), and rapidly growing ETA communities. However, currency
            volatility, political risk, and thinner exit markets have
            dampened reported returns. See our regional guides on{" "}
            <Link href="/learn/eta-brazil" className="text-apple-accent hover:underline">ETA in Brazil</Link>{" "}
            and{" "}
            <Link href="/learn/eta-mexico" className="text-apple-accent hover:underline">ETA in Mexico</Link>{" "}
            for more detail.
          </li>
        </ul>

        <h2 className={h2Class}>Why the return gap exists</h2>
        <p>
          A 5.2x vs. 2.4x MOIC gap is substantial. Five structural factors
          explain most of the difference.
        </p>

        <h3 className={h3Class}>1. Vintage effects and sample size</h3>
        <p>
          The US dataset spans 40 years and 681 funds. The international dataset
          covers roughly 15 years and 200 funds. US returns include vintages from
          the 1990s and 2000s when competition was minimal and entry multiples
          were low &mdash; some of the highest-returning vintages in the entire
          dataset. International search funds lack this tail of early,
          low-competition deals. When you compare similar vintages
          (2015&ndash;2023), the gap narrows considerably. IESE&rsquo;s data shows
          recent European cohorts returning 2.5&ndash;4x MOIC, approaching
          US median levels.
        </p>

        <h3 className={h3Class}>2. Exit market depth</h3>
        <p>
          The US has the world&rsquo;s deepest M&amp;A market. Mid-market
          companies with $5M&ndash;$20M in revenue attract multiple strategic and
          financial buyers at exit. European exit markets are fragmented by
          country, language, and regulatory regime. A Spanish company with
          &euro;10M in revenue has a smaller potential buyer universe than
          a comparable US business. Latin American exit markets are thinner still.
          This structural difference suppresses exit multiples and extends hold
          periods, both of which reduce IRR.
        </p>

        <h3 className={h3Class}>3. Use availability</h3>
        <p>
          US searchers routinely use SBA 7(a) loans to finance 60&ndash;70% of
          acquisition cost at favorable rates. No equivalent program exists in
          most international markets. European searchers typically use
          conventional bank financing with lower loan-to-value ratios, or rely
          more heavily on seller financing. Less use means more equity is
          required, which mechanically reduces equity multiples. A deal acquired
          at 4x EBITDA with 3:1 use in the US might return 8x equity on a
          2x enterprise value gain, while the same deal with 1.5:1 use in
          Europe returns 4x equity on the same operational improvement.
        </p>

        <h3 className={h3Class}>4. Investor ecosystem maturity</h3>
        <p>
          The US has 300+ experienced search fund investors who provide more than
          capital: they serve as board members, operational advisors, and
          connectors to exit opportunities. This ecosystem took decades to
          develop. International markets have fewer dedicated search fund
          investors, meaning searchers may work with investors who are less
          familiar with the model&rsquo;s norms around governance, CEO coaching,
          and staged capital deployment. The quality of board-level guidance is a
          meaningful driver of post-acquisition performance, and newer ecosystems
          simply have less accumulated know-how. For more on what makes investor
          backing valuable, see{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">why invest in search funds</Link>.
        </p>

        <h3 className={h3Class}>5. Currency effects</h3>
        <p>
          International returns are typically reported in local currency, but
          US-based LPs experience them in dollars. A European search fund that
          returns 3x in euros over five years delivers a lower dollar-denominated
          return if the euro weakens during the hold period &mdash; which it did
          significantly from 2014 to 2022. Latin American currencies introduce
          even more volatility: the Brazilian real lost roughly 40% of its value
          against the dollar between 2019 and 2023. Currency effects do not
          explain the entire gap, but they add 0.3&ndash;0.7x of drag on reported
          international returns when measured in US dollar terms.
        </p>

        <h2 className={h2Class}>Structural differences in deal economics</h2>
        <p>
          Beyond top-line returns, the mechanics of international deals differ
          from US deals in ways that investors should understand.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Acquisition multiples:</strong> US search fund acquisitions
            price at a median of 4.5&ndash;5.5x EBITDA. European deals
            typically close at 3&ndash;5x, with Southern European and Latin
            American markets at the lower end (2.5&ndash;4x). These lower
            entry multiples provide a margin of safety, but the exit multiple
            expansion that US funds often enjoy is harder to achieve in
            markets with fewer buyers. Accurate{" "}
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">business valuation</Link>{" "}
            and{" "}
            <Link href="/learn/ebitda-adjustments" className="text-apple-accent hover:underline">EBITDA adjustment</Link>{" "}
            practices are especially critical when working with less
            standardized financial reporting.
          </li>
          <li>
            <strong>Deal sizes:</strong> International search fund acquisitions
            tend to be smaller. European deals cluster around
            &euro;3M&ndash;&euro;12M enterprise value vs. $8M&ndash;$25M in
            the US. Smaller deals mean lower absolute returns per fund, even
            when multiples are comparable.
          </li>
          <li>
            <strong>Hold periods:</strong> International exits take longer on
            average. IESE data suggests median hold periods of 6&ndash;8 years
            for international funds vs. 4&ndash;6 years in the US. Longer
            holds compress IRR even when absolute MOIC is similar.
          </li>
          <li>
            <strong>Fund structure:</strong> The standard US search fund
            structure &mdash; a two-year search phase funded by institutional
            investors, followed by equity commitment letters for the
            acquisition &mdash; is well understood. International markets show
            more structural variation: some searchers raise acquisition capital
            concurrently, some use accelerator models, and{" "}
            <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">legal structures</Link>{" "}
            differ across jurisdictions. This variation adds complexity but
            also creates opportunities for searchers who master their local
            market&rsquo;s norms.
          </li>
        </ul>

        <h2 className={h2Class}>Cross-border execution risks</h2>
        <p>
          Investors deploying capital internationally face execution risks that
          do not exist in domestic deals. These risks are real but manageable
          with proper structuring.
        </p>
        <p>
          <strong>Regulatory and legal complexity:</strong> Each country has
          distinct corporate law, employment regulation, tax treatment, and
          M&amp;A procedures. A German <em>GmbH</em> acquisition involves
          different due diligence requirements than a Spanish{" "}
          <em>Sociedad Limitada</em> or a Brazilian <em>Ltda</em>. Investors
          need local counsel in each jurisdiction, which adds cost and slows
          timelines. Labor law differences are particularly material: many
          European jurisdictions have mandatory severance, works councils, and
          employee protections that limit the new CEO&rsquo;s operational
          flexibility.
        </p>
        <p>
          <strong>Cultural and operational factors:</strong> Managing a business
          in a foreign market requires cultural fluency that goes beyond language.
          Negotiation styles, customer relationship norms, vendor management
          practices, and employee expectations differ across countries. The most
          successful international searchers are either native to their target
          market or have spent years living and working there. Parachuting into an
          unfamiliar market is one of the strongest predictors of underperformance
          in the IESE data.
        </p>
        <p>
          <strong>Tax and repatriation:</strong> Extracting returns from
          international investments involves withholding taxes, transfer pricing
          rules, and double-taxation treaties that vary by country pair. A
          US-based LP investing in a French search fund faces a different tax
          profile than the same LP investing in a Brazilian fund. Structuring
          these flows efficiently requires specialized tax counsel and can reduce
          net-of-tax returns by 200&ndash;500 basis points relative to a domestic
          US investment if not planned carefully. Understanding these{" "}
          <Link href="/learn/risk-factors-search-fund" className="text-apple-accent hover:underline">risk factors</Link>{" "}
          is essential before making cross-border commitments.
        </p>

        <h2 className={h2Class}>The convergence thesis</h2>
        <p>
          A growing number of investors and academics argue that international
          search fund returns are converging toward US levels. The evidence for
          this thesis is mixed but directionally encouraging.
        </p>
        <p>
          <strong>Arguments for convergence:</strong> Recent European vintages
          (2018&ndash;2023) show improving returns as ecosystems mature. Spain
          and France now have cohorts of experienced search fund investors who
          provide the same quality of governance and mentorship that US investors
          have offered for decades. Business schools like IESE, INSEAD, and HEC
          have built dedicated ETA programs that produce better-prepared
          searchers. The European private equity market has grown significantly,
          providing more exit options for search fund portfolio companies. And the
          massive SME succession wave in Europe &mdash; an estimated 2.4 million
          businesses needing ownership transitions by 2030 &mdash; creates a
          supply of acquisition targets that may rival the US baby-boomer
          retirement opportunity.
        </p>
        <p>
          <strong>Arguments against full convergence:</strong> Some structural
          disadvantages may persist. The fragmentation of European markets by
          language and regulation is a durable feature, not a temporary phase. The
          absence of an SBA-equivalent lending program limits use across most
          international markets. And the US M&amp;A exit market&rsquo;s depth
          &mdash; driven by the sheer scale of the US economy and its capital
          markets &mdash; is unlikely to be matched by any single European
          country. International returns may approach US levels on a vintage-by-
          vintage basis, but the aggregate dataset will carry the weight of weaker
          early vintages for years to come.
        </p>
        <p>
          For a deeper look at the European opportunity specifically, see our
          guide to{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">entrepreneurship through acquisition in Europe</Link>.
        </p>

        <h2 className={h2Class}>Portfolio allocation: the diversification argument</h2>
        <p>
          Even if international returns trail the US on an absolute basis, there
          is a portfolio-level argument for allocation. Search fund investors who
          concentrate exclusively in US deals face correlated risks: exposure to
          US economic cycles, US interest rate movements, and the specific
          dynamics of the US small-business market. Adding international search
          funds introduces geographic diversification that can reduce overall
          portfolio volatility.
        </p>
        <p>
          The practical question is how much to allocate. Most experienced search
          fund investors who do invest internationally allocate 15&ndash;30% of
          their search fund capital outside the US, concentrating in established
          European markets (Spain, France, UK, Germany) where the ecosystem is
          most developed. Frontier markets &mdash; Latin America, Southeast Asia,
          the Middle East &mdash; receive smaller, more opportunistic allocations
          from investors with specific regional expertise.
        </p>
        <p>
          A well-constructed portfolio of 15&ndash;25 search fund investments
          might include 3&ndash;6 international funds, chosen for geographic
          diversity, experienced local investors, and searchers with deep ties to
          their target market. The goal is not to match US returns on every
          individual deal, but to build a portfolio where international exposure
          adds diversification without meaningfully dragging aggregate
          performance. For detailed thinking on portfolio sizing and
          diversification, see our guide on{" "}
          <Link href="/learn/portfolio-construction-search-fund" className="text-apple-accent hover:underline">portfolio construction for search fund investors</Link>.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>Are international search fund returns catching up to US returns?</h3>
        <p>
          Recent European vintages (2018&ndash;2023) show MOIC figures of
          2.5&ndash;4x, approaching US median levels. The aggregate gap persists
          largely because the international dataset includes weaker early vintages
          when ecosystems were immature. On a vintage-matched basis, the
          difference is narrowing, particularly in Spain and France.
        </p>

        <h3 className={h3Class}>Should US-based investors allocate capital to international search funds?</h3>
        <p>
          For investors with portfolios of 15+ search fund commitments, a
          15&ndash;30% international allocation provides meaningful geographic
          diversification. Focus on established European markets with experienced
          local investor groups. Avoid frontier markets unless you have specific
          regional expertise and relationships.
        </p>

        <h3 className={h3Class}>What is the biggest risk unique to international search fund investing?</h3>
        <p>
          Currency risk and exit market thinness are the two risks that do not
          exist in domestic US deals. A strong operational result can be
          substantially eroded by local currency depreciation, and longer hold
          periods due to fewer exit options compress IRR even when absolute
          multiples are solid.
        </p>

        <h3 className={h3Class}>Which international market has the best search fund track record?</h3>
        <p>
          Spain has the longest track record and the most completed international
          search funds, with 50+ funds and returns that have been competitive
          with US figures in the best cohorts. This reflects IESE&rsquo;s
          pioneering role in promoting the search fund model in Europe, a
          favorable acquisition multiple environment, and a maturing local
          investor base.
        </p>

        <h3 className={h3Class}>Do international search funds pay lower acquisition multiples?</h3>
        <p>
          Yes. European search funds typically acquire at 3&ndash;5x EBITDA vs.
          4.5&ndash;5.5x in the US. Latin American deals often close at
          2.5&ndash;4x. However, lower entry multiples do not automatically
          translate to higher returns because exit multiples and use
          availability are also lower in most international markets.
        </p>
      </div>
    </article>
  );
}
