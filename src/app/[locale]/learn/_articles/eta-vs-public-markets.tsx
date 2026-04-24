import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAvsPublicMarketsArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA vs. Public Markets & Hedge Funds</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          For most investors, publicly traded stocks and bonds form the
          core of their portfolio. The S&P 500 is the benchmark against
          which all other strategies are measured. Hedge funds promise
          alpha through sophisticated strategies. Entrepreneurship Through
          Acquisition (ETA) offers something different entirely - direct
          ownership of a private business with active operational
          involvement. This comparison examines how ETA stacks up against
          public equities and hedge funds across returns, risk, liquidity,
          correlation, and portfolio construction.
        </p>

        <h2 className={h2Class}>Return comparison: the core numbers</h2>
        <p>
          The long-term annualized return of the S&P 500, including
          dividends, is approximately 10% to 11% nominal (roughly 7% to
          8% real after inflation). This is the hurdle rate that any
          alternative investment must clear to justify its complexity
          and illiquidity.
        </p>
        <p>
          ETA clears it by a wide margin. The{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">2024 Stanford Search Fund
          Study</Link> reports a median pre-tax IRR of approximately 33% for
          acquired search funds, with a mean return on invested capital
          of 5.2x. Even the bottom quartile of successful search fund
          acquisitions delivers returns that match or exceed public
          market averages. For investors who build diversified portfolios
          of 10 or more search fund investments, the expected portfolio
          IRR of 25% to 35% represents a 15 to 25 percentage point
          premium over public markets. See our full breakdown of{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">search fund returns</Link> for
          more detail.
        </p>

        <h3 className={h3Class}>The hedge fund comparison</h3>
        <p>
          Hedge funds have historically marketed themselves as the
          primary source of alpha relative to public markets. The reality
          has been disappointing. According to data from Hedge Fund
          Research (HFR), the HFRI Fund Weighted Composite Index has
          delivered annualized returns of approximately 6% to 8% over
          the past 15 years - after fees, underperforming the S&P 500
          in most periods. The average hedge fund charges 1.5% management
          fees plus 15% to 20% performance fees (the &quot;2/20&quot;
          model, though actual fees have compressed slightly). After
          these fees, the median hedge fund has struggled to generate
          meaningful alpha.
        </p>
        <p>
          ETA has no management fees, no performance fees layered on top
          of investor returns, and a track record of delivering 3x to
          5x the absolute return of the average hedge fund. The
          structural advantage is clear: in ETA, the operator&apos;s
          compensation comes from equity ownership, not from fees charged
          on assets under management.
        </p>

        <h2 className={h2Class}>Liquidity: the fundamental trade-off</h2>
        <p>
          The single most important difference between ETA and public
          markets is liquidity. Public equities can be sold in seconds
          at transparent market prices. A search fund investment is locked
          up for five to seven years with no secondary market and no
          ability to exit before the operating CEO decides to sell the
          business.
        </p>
        <p>
          This illiquidity is not merely an inconvenience - it is a
          structural feature that creates both risk and opportunity.
          The risk is straightforward: if you need capital during the
          hold period, it is simply unavailable. The opportunity is that
          the illiquidity premium - the excess return investors demand
          for accepting illiquidity - is well-documented in academic
          finance. Studies estimate the illiquidity premium in private
          markets at 3% to 5% annually. ETA&apos;s 20%+ premium over
          public markets substantially exceeds the typical illiquidity
          premium, suggesting that the returns are driven by genuine
          operational value creation, not just compensation for
          illiquidity.
        </p>

        <h3 className={h3Class}>The emotional toll of illiquidity</h3>
        <p>
          The psychological dimension of illiquidity deserves honest
          discussion. Public market investors can check their portfolio
          value daily and sell instantly if they lose confidence. Search
          fund investors receive quarterly financial reports and annual
          valuations but have no exit mechanism. When the underlying
          business hits a rough patch - a key customer loss, a failed
          product launch, an industry downturn - investors must sit with
          uncertainty and trust the CEO to navigate through it. This
          emotional experience is fundamentally different from public
          market investing and is not suitable for every investor
          temperament.
        </p>
        <p>
          Conversely, illiquidity protects investors from their own
          behavioral biases. Public market investors systematically buy
          high and sell low, driven by fear and greed. The average equity
          fund investor underperforms the funds they invest in by 1% to
          2% annually, according to Dalbar&apos;s Quantitative Analysis
          of Investor Behavior. Search fund investors cannot panic-sell
          during a downturn, which forces the patience that long-term
          wealth creation requires.
        </p>

        <h2 className={h2Class}>Correlation and diversification benefits</h2>
        <p>
          One of the most compelling arguments for including ETA in a
          portfolio is its low correlation with public markets. Search
          fund returns are driven primarily by company-specific
          operational factors - the CEO&apos;s ability to grow revenue,
          improve margins, and build organizational capability - rather
          than by macroeconomic variables or market sentiment that drive
          public equity prices.
        </p>
        <p>
          Empirical analysis of search fund returns shows limited
          correlation with the S&P 500 (estimated at 0.2 to 0.3), which
          is significantly lower than the correlation of hedge funds with
          public markets (typically 0.5 to 0.7 for equity-oriented
          strategies). This low correlation means that adding ETA to a
          traditional stock-and-bond portfolio can improve the
          portfolio&apos;s risk-adjusted returns - higher expected returns
          without a proportional increase in volatility.
        </p>

        <h3 className={h3Class}>Sharpe ratio comparison</h3>
        <p>
          The Sharpe ratio measures return per unit of risk (volatility).
          The S&P 500 has historically delivered a Sharpe ratio of
          approximately 0.4 to 0.5. Hedge funds average roughly 0.3 to
          0.5, depending on the strategy. Estimating Sharpe ratios for
          private investments is methodologically challenging because
          valuations are infrequent and potentially smoothed, but
          reasonable estimates for a diversified ETA portfolio suggest
          Sharpe ratios in the range of 0.8 to 1.2 - roughly double
          that of public equities. Even after adjusting for the
          potential smoothing bias in private market valuations, ETA
          offers superior risk-adjusted returns.
        </p>

        <h2 className={h2Class}>Information advantages in the SME market</h2>
        <p>
          Public equity markets are among the most informationally
          efficient markets in the world. Thousands of analysts, quant
          funds, and algorithmic traders process every piece of public
          information within milliseconds. Generating alpha through
          superior information is extraordinarily difficult - even most
          professional fund managers fail to beat their benchmarks
          consistently.
        </p>
        <p>
          The SME market where search funds operate is profoundly
          inefficient. There are no analyst reports, no public financial
          filings, no quarterly earnings calls. Information about
          individual businesses is scarce and fragmented. A diligent
          searcher who conducts thorough industry research, builds
          relationships with brokers, and performs deep due diligence
          has a genuine information advantage. This information
          asymmetry is a durable source of alpha that is not available
          in public markets and is unlikely to be competed away anytime
          soon.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>No public comparables:</strong> SME valuations are
            based on rough EBITDA multiples and comparable transactions,
            not on continuous price discovery. Skilled buyers can identify
            businesses trading at discounts to intrinsic value.
          </li>
          <li>
            <strong>Relationship-driven transactions:</strong> Many SME
            acquisitions occur through personal relationships rather than
            competitive auctions. Sellers often prioritize finding a
            trustworthy buyer who will protect their employees and legacy
            over maximizing the sale price.
          </li>
          <li>
            <strong>Operational improvements:</strong> Even after
            acquisition, the new CEO has proprietary information about
            the business and can identify value-creation opportunities
            invisible to outside observers.
          </li>
        </ul>

        <h2 className={h2Class}>Why family offices allocate to search funds</h2>
        <p>
          Family offices have been among the earliest and most
          enthusiastic institutional adopters of search fund investing - our guide on{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">why investors choose search funds</Link> explores
          their motivations in depth.
          Their reasons illuminate the asset class&apos;s structural
          advantages:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Long time horizons:</strong> Unlike pension funds or
            endowments that must make annual distributions, many family
            offices have perpetual time horizons. They can comfortably
            lock up capital for five to seven years without liquidity
            concerns.
          </li>
          <li>
            <strong>Concentrated conviction:</strong> Family offices are
            often built on the wealth created by a single business. The
            principals understand - viscerally - the value of backing a
            talented operator to run a single company. They are
            comfortable with concentration because it mirrors their own
            wealth-creation experience.
          </li>
          <li>
            <strong>Mentorship opportunity:</strong> Many family office
            principals enjoy mentoring young CEOs. Search fund investing
            provides a structured way to share expertise while earning
            strong returns.
          </li>
          <li>
            <strong>Modest check sizes:</strong> Search fund investments
            ($50,000 to $200,000 per search fund) represent small
            allocations for most family offices, making it easy to build
            diversified portfolios without significant concentration risk.
          </li>
        </ul>

        <h2 className={h2Class}>Portfolio allocation framework</h2>
        <p>
          How much should a well-diversified investor allocate to ETA?
          The answer depends on liquidity needs, time horizon, and
          risk tolerance, but a reasonable framework is:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Conservative allocation (5% to 10%):</strong> For
            investors who need significant liquidity and have limited
            experience with private markets. Even a 5% allocation to
            ETA, earning 30% IRR, adds approximately 1% to 2% to
            overall portfolio returns - meaningful over decades.
          </li>
          <li>
            <strong>Moderate allocation (10% to 20%):</strong> For
            accredited investors with stable income streams who can
            tolerate five-to-seven-year lock-ups. This allocation
            provides meaningful return enhancement while maintaining
            a predominantly liquid portfolio.
          </li>
          <li>
            <strong>Aggressive allocation (20% to 35%):</strong> For
            family offices and ultra-high-net-worth individuals with
            long time horizons and no near-term liquidity needs. At
            this level, ETA becomes a material return driver and a
            genuine diversification tool.
          </li>
        </ul>

        <h3 className={h3Class}>Vintage year diversification</h3>
        <p>
          Just as with PE and VC, ETA investors should diversify across
          vintage years. Rather than committing an entire allocation at
          once, investors should deploy capital across three to five
          years, backing two to four new searchers per year. This
          approach smooths the impact of economic cycles on acquisition
          valuations and provides a steady stream of entry and exit
          points. Over time, a mature ETA portfolio generates a
          continuous flow of distributions as older investments exit
          while newer investments are still in the growth phase.
        </p>

        <h2 className={h2Class}>When public markets are the better choice</h2>
        <p>
          Despite ETA&apos;s compelling return profile, public markets
          remain essential for most investors:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Liquidity needs:</strong> If you may need access to
            your capital within five years, public markets are the only
            appropriate choice.
          </li>
          <li>
            <strong>Simplicity:</strong> Public market investing through
            index funds requires no due diligence, no board
            participation, and no ongoing monitoring. For investors
            who want truly passive exposure, public markets are
            unmatched.
          </li>
          <li>
            <strong>Tax efficiency:</strong> Index funds offer exceptional
            tax efficiency through low turnover and long-term capital
            gains treatment. ETA returns are subject to more complex tax
            treatment depending on deal structure.
          </li>
          <li>
            <strong>Scale:</strong> Public markets can absorb any amount
            of capital instantly. An investor with $100 million to deploy
            can buy an S&P 500 index fund in minutes. Building a
            $100 million ETA portfolio would take years and significant
            sourcing effort.
          </li>
        </ul>
        <p>
          The optimal approach for most sophisticated investors is not
          choosing one over the other but combining both. Public markets
          provide the liquid foundation, while ETA provides the alpha
          engine. Together, they create a portfolio that is both resilient
          and high-performing - offering daily liquidity for near-term
          needs and outsized returns from patient, long-term private
          market investments.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How do search fund returns compare to the S&amp;P 500 after adjusting for risk?</h3>
        <p>
          On a risk-adjusted basis, ETA significantly outperforms public
          equities. The S&amp;P 500 has historically delivered a Sharpe
          ratio of approximately 0.4 to 0.5. Reasonable estimates for a
          diversified ETA portfolio of 10 or more search fund investments
          suggest Sharpe ratios in the range of 0.8 to 1.2 &mdash; roughly
          double that of public markets. Even after adjusting for the
          potential smoothing bias inherent in private market valuations
          (where returns are reported infrequently), ETA offers superior
          risk-adjusted returns. The{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">2024 Stanford Search Fund Study</Link>{" "}
          reports a median pre-tax IRR of approximately 33% for acquired
          funds, with a mean return on invested capital of 5.2x.
        </p>

        <h3 className={h3Class}>Why do family offices allocate to search funds instead of hedge funds?</h3>
        <p>
          Family offices have been among the earliest institutional adopters
          of search fund investing for several reasons. First, ETA delivers
          3x to 5x the absolute return of the average hedge fund without
          management fees or performance fee layers. Second, family office
          principals &mdash; who often built their own wealth through a
          single business &mdash; understand viscerally the value of backing
          a talented operator. Third, modest check sizes ($50,000&ndash;$200,000
          per search fund) allow easy portfolio diversification. Fourth,
          the low correlation between search fund returns and public markets
          (estimated at 0.2&ndash;0.3, vs. 0.5&ndash;0.7 for equity-oriented
          hedge funds) provides genuine diversification benefit. Learn more
          about{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">why investors choose search funds</Link>.
        </p>

        <h3 className={h3Class}>What percentage of a portfolio should be allocated to ETA?</h3>
        <p>
          Allocation depends on liquidity needs, time horizon, and risk
          tolerance. A conservative allocation of 5&ndash;10% suits investors
          who need significant liquidity and have limited private market
          experience. A moderate 10&ndash;20% allocation works for accredited
          investors with stable income who can tolerate five-to-seven-year
          lock-ups. Aggressive allocations of 20&ndash;35% are appropriate
          for family offices and ultra-high-net-worth individuals with long
          time horizons and no near-term liquidity needs. Regardless of
          allocation size, investors should diversify across vintage years,
          deploying capital over three to five years and backing two to four
          new searchers annually.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>
            <strong>Stanford GSB</strong> &mdash; &ldquo;2024 Search Fund Study: Selected Observations,&rdquo; 2024.
          </li>
          <li>
            <strong>S&amp;P Global</strong> &mdash; &ldquo;S&amp;P 500 Historical Returns &amp; Performance Data,&rdquo; 2024.
          </li>
          <li>
            <strong>Hedge Fund Research (HFR)</strong> &mdash; &ldquo;HFRI Fund Weighted Composite Index &mdash; Performance Report,&rdquo; 2024.
          </li>
        </ul>
      </div>
    </article>
  );
}
