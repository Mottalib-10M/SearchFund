import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function FundOfSearchFundsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Fund of Search Funds: The LP&rsquo;s Guide to Diversified ETA Exposure</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>
      <div className={bodyClass}>
        <p>
          A single search fund is a binary bet: the searcher either acquires a strong business and compounds value, or the investment returns zero. The{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">2024 Stanford Search Fund Study</Link>
          {" "}reports aggregate returns of 35.1% IRR and 4.5x ROI across 681 tracked funds &mdash; but 31% of completed deals resulted in capital loss, and roughly 37% of searchers never closed an acquisition at all. That skew creates a problem: the asset class delivers exceptional portfolio-level returns, yet any single commitment carries meaningful downside risk. Fund-of-search-funds (FoSF) vehicles exist to solve this exact problem, pooling LP capital across 15&ndash;30+ individual searchers so that one investor&rsquo;s check captures the asset class return profile rather than a coin-flip outcome.
        </p>

        <p>
          This guide explains how FoSF vehicles work, who runs them, what they cost, and whether they make sense compared to{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">direct search fund investing</Link>.
        </p>
      </div>

      <h2 className={h2Class}>How Fund-of-Search-Funds Vehicles Work</h2>
      <div className={bodyClass}>
        <p>
          A fund of search funds follows a conventional LP/GP private equity structure with one key difference: instead of acquiring companies directly, the GP deploys capital into individual search fund commitments. The fund typically raises $20M&ndash;200M from institutional LPs &mdash; endowments, pension funds, family offices, and high-net-worth individuals &mdash; and then invests across two stages of the search fund lifecycle.
        </p>

        <p>
          <strong>Stage 1 &mdash; Search capital.</strong> The FoSF commits $30,000&ndash;50,000 per searcher during the search phase, typically backing 40&ndash;80+ searchers per fund vintage. This initial commitment buys the right (and obligation) to invest pro rata at the acquisition stage. Search capital covers the entrepreneur&rsquo;s salary, travel, deal sourcing tools, and legal expenses during a 20&ndash;24 month search period.
        </p>

        <p>
          <strong>Stage 2 &mdash; Acquisition equity.</strong> When a searcher identifies and closes a deal, the FoSF invests its pro rata share of the equity check &mdash; often $200,000&ndash;1.5M per deal depending on fund size and deal terms. Strong FoSF managers also reserve capacity for{" "}
          <Link href="/learn/co-investment-search-fund" className="text-apple-accent hover:underline">co-investment</Link>
          {" "}in their highest-conviction acquisitions, deploying additional capital beyond pro rata.
        </p>

        <p>
          <strong>Fund lifecycle.</strong> A typical FoSF has a 10&ndash;12 year fund life: a 3&ndash;4 year investment period during which the GP backs new searchers, followed by a 6&ndash;8 year harvest period as portfolio companies mature and exit. Because later-vintage searchers within a fund may not acquire until year 3 or 4, and then hold for 5&ndash;7 years, the GP often negotiates extension options with LPs.
        </p>
      </div>

      <h2 className={h2Class}>Why Diversification Matters: The Math Behind Binary Outcomes</h2>
      <div className={bodyClass}>
        <p>
          The case for a fund-of-funds approach rests on a well-documented statistical reality. According to the Stanford 2024 dataset, the return distribution for individual search fund deals looks roughly like this:
        </p>

        <ul className={ulClass}>
          <li><strong>31% of deals</strong> returned less than 1x invested capital &mdash; a partial or total loss.</li>
          <li><strong>18.5%</strong> returned between 1x and 2x &mdash; modest positive outcomes.</li>
          <li><strong>25.5%</strong> returned between 2x and 5x &mdash; solid private-equity-range returns.</li>
          <li><strong>25%</strong> returned 5x or more &mdash; the outsized winners that pull aggregate returns above 30% IRR.</li>
        </ul>

        <p>
          A 2025 Yale SOM study titled <em>&ldquo;How Are Search Fund Investors Really Faring?&rdquo;</em> analyzed 1,192 observations across 12 institutional investors and 23 funds. The researchers found a weighted average MOIC of 2.5x among their sample &mdash; significantly below Stanford&rsquo;s 4.5x aggregate figure. The difference, they argued, is almost entirely explained by &ldquo;griffin&rdquo; exposure: the Stanford dataset captures every 10x+ winner, but it is &ldquo;extremely difficult for investors to actually participate in all the best outcomes.&rdquo;
        </p>

        <p>
          This is the core value proposition of a diversified FoSF. An investor writing $40,000 checks into 5 individual search funds has roughly a 40% chance of experiencing at least one total loss and only a 25% chance of hitting even one 5x+ outcome. A fund backing 30+ searchers captures enough of the return distribution to smooth individual variance and approximate the asset-class average. The trade-off is real &mdash; the double fee layer compresses net returns &mdash; but for investors who cannot build a 25&ndash;30 fund portfolio on their own, a FoSF is the most efficient way to access{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">search fund returns</Link>.
        </p>
      </div>

      <h2 className={h2Class}>Who Runs Fund-of-Search-Funds: Five Firms to Know</h2>
      <div className={bodyClass}>
        <p>
          The FoSF market has grown from a handful of pioneers to a global ecosystem of dedicated vehicles. Here are the key players shaping the space:
        </p>

        <p>
          <strong>Search Fund Partners (SFP).</strong> Co-founded by Rich Kelley and David Carver in 2004, SFP is widely credited as the first institutional search fund investment vehicle. The firm has invested in more than 175 searches, closed over 100 acquisitions, and raised six funds. Kelley, who has been a search fund investor since 1994, brought decades of operating experience as CFO of Score Learning Centers and CEO of the San Jose Giants. SFP remains one of the most prolific backers of first-time searchers in North America.
        </p>

        <p>
          <strong>Pacific Lake Partners.</strong> Founded in 2009 by Coley Andrews and Jim Southern, Pacific Lake is one of the largest dedicated search fund investors globally. The firm has backed hundreds of search fund entrepreneurs and invested in over 70 acquired companies. Pacific Lake closed its Fund IV at $175 million &mdash; oversubscribed with mostly returning investors &mdash; and launched Fund VI (a 2024 vintage) from its Boston base. The firm is the subject of a Harvard Business School case study on the FoSF model.
        </p>

        <p>
          <strong>Relay Investments.</strong> Founded in 2013 by Sandro Mina, Relay has built one of the most active global search fund portfolios. Through Fund I (closed 2015), Relay invested in 63 search funds and 35 companies. Fund II (closed 2018) expanded to 80+ search funds and 30+ companies. Fund III closed in 2022, bringing total assets under management to approximately $200 million. Relay has a strong international presence and is known for hands-on board involvement.
        </p>

        <p>
          <strong>Istria Capital.</strong> Europe&rsquo;s leading FoSF, founded by Sim&oacute;n Bores and Ignacio Olavarr&iacute;a in Madrid. Istria launched the first European fund of search funds in 2018 with a &euro;20M Fund I, through which they partnered with searchers who acquired 32 operating businesses across 13 countries. Istria closed its oversubscribed Fund II at &euro;50M and now has a portfolio of 50+ operating companies and 150+ search fund partnerships spanning Europe, North America, and Latin America. The firm emphasizes that &ldquo;people and teams typically drive over 50% of the outcome&rdquo; in search fund investing.
        </p>

        <p>
          <strong>Moonbase Capital.</strong> Barcelona-based Moonbase Capital launched its &ldquo;Search Fund Squared&rdquo; fund of funds in 2024, targeting &euro;15M. The firm achieved a first close of &euro;5M within three months, attracting family offices and entrepreneurs from the Middle East and Europe. Moonbase&rsquo;s entrepreneurs are actively searching for SME acquisitions in Spain, France, and Italy, making it a focused vehicle for Southern European ETA exposure.
        </p>
      </div>

      <h2 className={h2Class}>Economics: The Double-Promote Problem</h2>
      <div className={bodyClass}>
        <p>
          The biggest criticism of fund-of-search-funds vehicles is the layered fee structure &mdash; often called the &ldquo;double promote.&rdquo; LPs pay fees at two levels: the FoSF GP takes a management fee and carry, and the underlying searcher takes founder&rsquo;s equity (typically 20&ndash;30% of the acquired company). Here is a typical fee stack:
        </p>

        <ul className={ulClass}>
          <li><strong>FoSF management fee:</strong> 1.5&ndash;2.0% annually on committed capital during the investment period, switching to invested capital thereafter.</li>
          <li><strong>FoSF carried interest:</strong> 15&ndash;20% of profits above a preferred return hurdle, typically 8%.</li>
          <li><strong>GP commitment:</strong> FoSF GPs usually invest 1&ndash;5% of fund capital alongside LPs for alignment.</li>
          <li><strong>Searcher&rsquo;s equity:</strong> At the portfolio company level, the searcher earns 20&ndash;30% of equity through vesting (the &ldquo;step-up&rdquo; in the{" "}
            <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">cap table</Link>), which dilutes all equity investors including the FoSF.
          </li>
        </ul>

        <p>
          <strong>Net return impact.</strong> The aggregate drag of the double promote is significant. If the underlying search fund portfolio generates a gross 35% IRR (consistent with the Stanford aggregate), the searcher&rsquo;s equity share and FoSF fees compress net LP returns to a target range of 15&ndash;22% IRR and roughly 2&ndash;3x net MOIC. That is lower than the 35% headline figure often cited in search fund marketing &mdash; but it is still a compelling return relative to traditional private equity (where median net IRRs cluster around 12&ndash;16%), and it comes with genuine diversification.
        </p>

        <p>
          Some newer FoSF vehicles address this by negotiating lower carry (10&ndash;15%), offering fee discounts for anchor LPs, or structuring co-investment pools with zero additional fees &mdash; giving LPs a path to increase exposure on the best deals without incremental cost.
        </p>
      </div>

      <h2 className={h2Class}>Direct Investing vs. Fund-of-Funds: A Side-by-Side Comparison</h2>
      <div className={bodyClass}>
        <p>
          The right approach depends on your capital base, time budget, and network depth. Here is how the two paths compare across the dimensions that matter most:
        </p>

        <ul className={ulClass}>
          <li><strong>Minimum commitment.</strong> Direct search fund investing requires $300,000&ndash;600,000+ across 15&ndash;25 individual funds to build a diversified portfolio. FoSF minimums range from $500,000 to $5M for a single LP commitment that provides instant diversification.</li>
          <li><strong>Time requirement.</strong> Active direct investors evaluate 20&ndash;40 searcher pitches per year, serve on 3&ndash;8 boards, and spend 200+ hours annually on portfolio management. FoSF LPs delegate sourcing, diligence, and governance to the GP &mdash; a quarterly reporting relationship.</li>
          <li><strong>Deal access.</strong> Top searchers from Stanford GSB, HBS, and Wharton are oversubscribed. Established FoSF managers like Search Fund Partners and Pacific Lake receive preferential deal flow from repeat relationships with MBA career offices. A new direct investor must build these networks from scratch.</li>
          <li><strong>Gross vs. net returns.</strong> Direct investors capture the full equity return (minus only the searcher&rsquo;s promote), targeting 25&ndash;35% gross IRR on a well-constructed portfolio. FoSF LPs receive 15&ndash;22% net IRR after the double fee layer &mdash; still attractive, but meaningfully lower.</li>
          <li><strong>Variance.</strong> A direct investor with 5&ndash;10 positions faces high outcome variance. The Yale study showed that realized MOIC varies dramatically across investors &mdash; from below 1x to well above 5x &mdash; depending on vintage, deal selection, and griffin exposure. A FoSF with 30+ positions substantially narrows this range.</li>
          <li><strong>Value-add.</strong> The best FoSF GPs are former searchers, operators, or long-tenured search fund investors who provide mentoring, deal sourcing support, operational playbooks, and{" "}
            <Link href="/learn/search-fund-governance-investor" className="text-apple-accent hover:underline">board governance</Link>
            {" "}to every portfolio company. Direct investors who lack operating experience may struggle to add value beyond capital.
          </li>
        </ul>

        <p>
          For{" "}
          <Link href="/learn/family-offices-search-funds" className="text-apple-accent hover:underline">family offices</Link>
          {" "}allocating $1&ndash;5M to ETA as part of a broader alternatives portfolio, a FoSF is often the right entry point. Investors with $5M+ to deploy, deep search fund networks, and time to serve on boards may prefer a hybrid approach: a FoSF anchor investment supplemented by direct co-investments in high-conviction deals.
        </p>
      </div>

      <h2 className={h2Class}>How FoSF Managers Add Value Beyond Capital</h2>
      <div className={bodyClass}>
        <p>
          Capital is necessary but not sufficient. The best FoSF GPs differentiate themselves through the support infrastructure they build around their searchers. This value-add directly impacts returns because, as Istria Capital&rsquo;s founding team has argued, people and team quality drive over half of the outcome in search fund investing.
        </p>

        <ul className={ulClass}>
          <li><strong>Searcher sourcing and selection.</strong> Top FoSF managers review hundreds of searcher applications annually and back only a fraction. Pacific Lake, for example, has built relationships with MBA career offices at Stanford, Harvard, Wharton, and Kellogg that generate a steady pipeline of first-time entrepreneurs. This selection filter is itself a source of alpha.</li>
          <li><strong>Mentorship and peer networks.</strong> FoSF managers convene annual CEO summits, pair first-time searchers with experienced operators from earlier fund vintages, and maintain Slack or WhatsApp communities where portfolio CEOs share real-time advice on everything from hiring to pricing.</li>
          <li><strong>Board governance.</strong> FoSF GPs typically take board seats on 10&ndash;20+ portfolio companies simultaneously, giving them pattern recognition across industries and operating environments. This cross-portfolio learning is hard for any individual direct investor to replicate. For investors focused on governance, see our guide on{" "}
            <Link href="/learn/search-fund-governance-investor" className="text-apple-accent hover:underline">search fund board best practices</Link>.
          </li>
          <li><strong>Deal sourcing support.</strong> Some FoSF managers employ dedicated deal sourcing analysts who help searchers identify proprietary acquisition targets, build outreach campaigns, and negotiate LOIs &mdash; effectively extending the searcher&rsquo;s capacity during the time-limited search phase.</li>
          <li><strong>Post-acquisition operations.</strong> Relay Investments and Pacific Lake both maintain networks of functional specialists (CFOs, HR leaders, IT consultants) that portfolio companies can access at reduced rates, accelerating the{" "}
            <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">value creation</Link>
            {" "}playbook.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Minimum Ticket Sizes and LP Eligibility</h2>
      <div className={bodyClass}>
        <p>
          FoSF vehicles are structured as private placement funds, typically requiring investors to be qualified purchasers (US) or professional investors (EU) under applicable securities regulations. Minimum commitments vary by fund:
        </p>

        <ul className={ulClass}>
          <li><strong>Large established FoSFs</strong> (Pacific Lake, Search Fund Partners, Relay): minimums of $1M&ndash;5M per LP. Fund sizes range from $100M&ndash;200M.</li>
          <li><strong>Mid-size and regional FoSFs</strong> (Istria, Moonbase): minimums of &euro;250,000&ndash;1M. Fund sizes of &euro;15M&ndash;50M.</li>
          <li><strong>Emerging managers and first-time funds:</strong> some accept minimums as low as $250,000&ndash;500,000 to build their LP base, though these carry additional manager-selection risk.</li>
        </ul>

        <p>
          Compared to building a diversified direct portfolio &mdash; which requires $300,000&ndash;600,000 across 15&ndash;25 individual searcher commitments, each demanding separate diligence and documentation &mdash; a single FoSF commitment at $500,000&ndash;1M delivers broader diversification with far less administrative burden. For a deeper look at the due diligence process, see our{" "}
          <Link href="/learn/lp-guide-search-fund-dd" className="text-apple-accent hover:underline">LP guide to search fund due diligence</Link>.
        </p>
      </div>

      <h2 className={h2Class}>Risks and Limitations of the FoSF Model</h2>
      <div className={bodyClass}>
        <p>
          FoSF vehicles are not without drawbacks, and prospective LPs should evaluate these carefully alongside the diversification benefits:
        </p>

        <ul className={ulClass}>
          <li><strong>Fee compression on returns.</strong> The double-promote structure creates a meaningful drag. In a scenario where underlying portfolio gross returns are 3.5x MOIC, the combination of searcher equity (25%) and FoSF fees (1.5% management fee + 20% carry) can compress net LP returns to 2.0&ndash;2.5x &mdash; still attractive, but roughly half the headline figure. According to the{" "}
            <Link href="/learn/risk-factors-search-fund-investing" className="text-apple-accent hover:underline">risk factors guide</Link>, fee drag is one of the most underappreciated risks in search fund allocations.
          </li>
          <li><strong>Illiquidity and long lock-up.</strong> A 10&ndash;12 year fund life with limited secondary market liquidity means capital is locked for a decade or more. Extensions are common. LPs should underwrite a 12&ndash;14 year total commitment period.</li>
          <li><strong>Manager selection risk.</strong> A first-time FoSF manager without an established track record may struggle with searcher sourcing, portfolio construction, and governance. The Yale study&rsquo;s finding that realized returns vary dramatically by investor highlights how much the GP&rsquo;s selection skill matters.</li>
          <li><strong>Limited control.</strong> LPs have no say in which searchers the GP backs or which acquisitions receive co-investment capital. Investors who want deal-level discretion should consider direct investing or a hybrid model.</li>
          <li><strong>Concentration risk within the FoSF.</strong> Smaller FoSF vehicles (&euro;15&ndash;20M) may only back 15&ndash;20 searchers, which may be insufficient to smooth the binary outcome distribution. LPs should ask about target portfolio size during diligence.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className={bodyClass}>

        <h3 className={h3Class}>What is the minimum investment in a fund of search funds?</h3>
        <p>
          Minimums range from $250,000 for emerging FoSF managers to $5M+ for established vehicles like Pacific Lake Partners (Fund VI) or Relay Investments (Fund III). Most institutional-grade FoSFs set a floor of $1M per LP. Smaller minimums do exist in European vehicles &mdash; Moonbase Capital&rsquo;s Search Fund Squared, for example, attracted family office commitments starting at &euro;250,000 &mdash; but these tend to be first-time funds with shorter track records.
        </p>

        <h3 className={h3Class}>How do fund-of-search-fund returns compare to direct search fund investing?</h3>
        <p>
          Direct search fund investors who build well-diversified portfolios of 20+ funds can target 25&ndash;35% gross IRR, consistent with the Stanford 2024 aggregate of 35.1%. FoSF LPs should expect 15&ndash;22% net IRR after the double-promote structure (searcher equity + FoSF carry and fees). The Yale 2025 study, however, showed that the median direct investor realizes closer to 2.5x MOIC &mdash; well below the 4.5x Stanford aggregate &mdash; because few investors participate in every top-decile outcome. A FoSF with 30+ positions is better positioned to capture that upper tail.
        </p>

        <h3 className={h3Class}>Are fund-of-search-funds appropriate for individual accredited investors?</h3>
        <p>
          Most FoSF vehicles require investors to be qualified purchasers (not just accredited investors) due to the fund&rsquo;s structure as a 3(c)(7) private fund. The 10&ndash;12 year lock-up and $500K&ndash;5M minimums further narrow the investor base. Individual accredited investors with smaller capital bases may find{" "}
          <Link href="/learn/search-fund-term-sheet" className="text-apple-accent hover:underline">direct search fund investing</Link>
          {" "}at $25,000&ndash;50,000 per searcher more accessible, though this requires significantly more time commitment and carries higher portfolio variance.
        </p>

        <h3 className={h3Class}>How many search funds should a fund-of-funds back to achieve diversification?</h3>
        <p>
          Given that 31% of search fund deals produce losses and returns are driven by a small number of outsized winners, statistical modeling suggests a minimum of 20&ndash;25 search fund commitments to approximate the asset-class average. Most established FoSF managers target 30&ndash;80+ searcher relationships per fund vintage. Pacific Lake and Relay each back 40&ndash;80 searchers per fund, with the expectation that 55&ndash;65% will close acquisitions. Smaller FoSFs backing fewer than 15 searchers face meaningful concentration risk. For a deeper analysis, read our{" "}
          <Link href="/learn/portfolio-construction-search-funds" className="text-apple-accent hover:underline">portfolio construction for search funds</Link>
          {" "}guide.
        </p>

        <h3 className={h3Class}>Can LPs co-invest alongside a fund-of-search-funds into specific deals?</h3>
        <p>
          Many FoSF managers offer co-investment rights to their LPs on select acquisitions. Co-investment typically carries no additional management fee or carry, making it an efficient way to increase exposure to the GP&rsquo;s highest-conviction deals without compounding the double-promote problem. Relay Investments and Istria Capital both actively offer co-investment to LPs. The allocation process is usually pro rata among interested LPs, with anchor investors receiving priority.
        </p>
      </div>
    </article>
  );
}
