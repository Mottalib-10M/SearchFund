import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAvsPrivateEquityArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA vs. Private Equity: Key Differences for Investors</h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          Entrepreneurship Through Acquisition (ETA) and traditional private
          equity (PE) both involve buying and improving businesses, but the
          similarities largely end there. Deal sizes, fee structures, return
          profiles, management involvement, and alignment of interests differ
          in fundamental ways that every investor — and every aspiring
          operator — should understand before allocating capital. This guide
          breaks down the structural differences and helps you decide which
          model fits your investment objectives.
        </p>

        <h2 className={h2Class}>Deal size and market segment</h2>
        <p>
          The most immediate distinction is the size of the companies being
          acquired. Traditional search funds target businesses with $1 million
          to $5 million in EBITDA, translating to enterprise values of roughly
          $3 million to $20 million. Self-funded searchers sometimes go even
          smaller, acquiring businesses with $500,000 to $1.5 million in
          EBITDA. Private equity firms, by contrast, operate across a wide
          spectrum, but the mainstream middle-market and upper-market funds
          target companies with $10 million to $500 million or more in EBITDA,
          implying enterprise values of $100 million to several billion dollars.
        </p>
        <p>
          This size difference has profound implications. The small and
          medium enterprise (SME) market targeted by ETA is vast — there
          are over 6 million employer businesses in the United States alone,
          and roughly 10,000 baby-boomer-owned businesses become available
          for sale every day, according to the U.S. Census Bureau and BizBuySell market data. PE firms compete intensely for a much smaller
          universe of larger, institutionally-ready targets. The fragmented
          nature of the SME market means search fund investors can often
          acquire businesses at lower multiples (3x to 6x EBITDA) compared
          to the 8x to 12x or higher multiples common in PE transactions.
        </p>

        <h2 className={h2Class}>Return profiles</h2>
        <p>
          The return data strongly favors ETA on an IRR basis. The{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">2024
          Stanford Search Fund Study</Link>, which tracks over 500 search funds
          formed since 1984, reports a median pre-tax IRR of approximately
          33% and a mean return on invested capital (ROIC) of 5.2x for
          acquired companies. The top-quartile search funds deliver IRRs
          exceeding 50%. Traditional PE, meanwhile, has delivered median
          net IRRs of approximately 14% to 18% over the past two decades,
          according to Cambridge Associates&apos; Private Equity Index and Preqin&apos;s Global Private Equity &amp; Venture Capital Report. Top-quartile
          PE funds achieve roughly 20% to 25% net IRR. Bain &amp; Company&apos;s
          2024 Global Private Equity Report further notes that PE returns have
          been compressed by rising entry multiples and increased competition
          for quality assets.
        </p>
        <p>
          However, context matters. PE returns are generated on much larger
          capital bases — a 15% IRR on a $5 billion fund produces far more
          absolute wealth than a 35% IRR on a $500,000 search fund investment.
          ETA is a high-IRR strategy but not necessarily a high-absolute-return
          strategy per individual investment. Sophisticated investors often
          allocate to both: PE for large-scale, diversified exposure and ETA
          for concentrated, high-IRR alpha. Learn more about{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">why investors choose search funds</Link>.
        </p>

        <h3 className={h3Class}>The J-curve difference</h3>
        <p>
          PE funds typically exhibit a pronounced J-curve — investors
          experience negative returns in years one through three as management
          fees are drawn and capital is deployed. Returns accelerate in
          years four through eight as portfolio companies are improved and
          exited. Search funds have a different shape. The search phase
          (typically 18 to 24 months) represents a period of modest capital
          deployment ($400,000 to $600,000 in search capital). Once an
          acquisition closes, returns begin almost immediately because the
          acquired business is already cash-flow positive. The J-curve in
          ETA is shallower and shorter, which contributes to the higher IRR.
        </p>

        <h2 className={h2Class}>Fee structures and alignment</h2>
        <p>
          The fee models differ dramatically and directly impact net
          investor returns.
        </p>

        <h3 className={h3Class}>Private equity: the 2/20 model</h3>
        <ul className={ulClass}>
          <li>
            <strong>Management fee:</strong> PE firms charge an annual
            management fee of approximately 1.5% to 2.0% of committed
            capital. On a $1 billion fund, this generates $15 million to
            $20 million per year in fee revenue — regardless of performance.
            Over a ten-year fund life, cumulative management fees can
            consume 15% to 20% of total committed capital.
          </li>
          <li>
            <strong>Carried interest:</strong> GPs earn 20% of profits
            above a hurdle rate (typically 8% preferred return). While
            carry aligns interests on the upside, the management fee
            guarantees substantial GP compensation even in mediocre
            performance scenarios.
          </li>
          <li>
            <strong>Transaction and monitoring fees:</strong> Many PE firms
            charge additional fees for deal sourcing, transaction execution,
            and ongoing portfolio company monitoring. These fees have come
            under increasing LP scrutiny but remain common.
          </li>
        </ul>

        <h3 className={h3Class}>Search funds: the step-up model</h3>
        <ul className={ulClass}>
          <li>
            <strong>Search capital:</strong> Investors contribute $400,000
            to $600,000 to fund the search phase. This capital is at risk —
            if no acquisition is completed, it is typically lost. In return,
            search investors receive the right to invest pro rata in the
            acquisition at a step-up (usually 50%, meaning they receive
            1.5x their acquisition investment in equity).
          </li>
          <li>
            <strong>Searcher equity:</strong> The searcher-CEO typically
            receives 20% to 30% of the acquired company&apos;s equity,
            vesting over four to five years and tied to performance
            milestones. For a deeper look at equity allocation, see our guide to{" "}
            <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">cap tables and equity structures</Link>. This equity is earned entirely through operational
            performance — there are no management fees charged during
            the search or operating phases.
          </li>
          <li>
            <strong>No annual fees:</strong> Unlike PE, there are no
            recurring management fees eroding investor returns. The
            searcher&apos;s compensation comes from a modest salary during
            the search phase and equity upside upon acquisition and exit.
          </li>
        </ul>
        <p>
          The result is tighter alignment. The searcher earns outsized
          returns only when investors earn outsized returns. There is no
          mechanism for the operator to profit substantially from a mediocre
          outcome — unlike PE, where management fees can make even a
          below-average fund quite profitable for the GP.
        </p>

        <h2 className={h2Class}>Control and management involvement</h2>
        <p>
          In ETA, the investor is backing a single operator who becomes
          the full-time CEO of the acquired company. This CEO has day-to-day
          operational control and makes all key decisions — hiring, pricing,
          strategy, capital allocation. Investors provide governance through
          a board of directors but are not involved in daily operations.
          The model is fundamentally a bet on a single individual&apos;s
          ability to lead a specific business.
        </p>
        <p>
          In PE, the GP firm itself is the active manager. PE firms employ
          teams of operating partners, analysts, and functional specialists
          who work with portfolio company management to drive value creation.
          The CEO of a PE-backed company is a hired executive — important,
          but replaceable. The institutional knowledge and operational
          playbook reside within the PE firm, not in any single individual.
        </p>
        <p>
          This difference creates distinct risk profiles. ETA has higher
          key-person risk — if the searcher-CEO underperforms or leaves, the
          investment is severely impaired. PE distributes operational risk
          across a professional team and a diversified portfolio of companies.
        </p>

        <h2 className={h2Class}>Hold periods and exit strategies</h2>
        <p>
          Both ETA and PE typically hold investments for five to seven years,
          but exit dynamics differ significantly.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>PE exits:</strong> Strategic sales to larger companies,
            secondary buyouts (selling to another PE firm), IPOs, and
            dividend recapitalizations. PE firms have sophisticated exit
            processes and dedicated teams managing sale timelines.
          </li>
          <li>
            <strong>ETA exits:</strong> Strategic sales to larger competitors
            or PE firms, management buyouts, and ESOP conversions. Search
            fund exits tend to be simpler transactions — the businesses
            are smaller and the buyer universe includes both strategic
            acquirers and financial sponsors looking for platform investments.
          </li>
        </ul>
        <p>
          The Stanford data shows that the median time from acquisition to
          exit for search funds is approximately six years, closely mirroring
          the typical PE hold period. However, search fund CEOs often have
          more flexibility on timing because there is no fund-life expiration
          forcing a sale. PE funds typically must liquidate all investments
          within their ten-year fund life (plus extensions), which can lead
          to suboptimal exit timing.
        </p>

        <h2 className={h2Class}>Portfolio construction and diversification</h2>
        <p>
          A PE fund might hold 10 to 20 portfolio companies, providing
          meaningful diversification. If one or two investments fail
          entirely, the fund can still deliver acceptable returns from
          the remaining winners. This diversification is a key selling
          point for institutional LPs who need predictable return streams.
        </p>
        <p>
          A search fund investment is, by definition, a single-company
          bet. Investors who want diversification in ETA must build a
          portfolio of search fund investments — typically backing 10 to
          20 searchers to create a diversified &quot;fund of search
          funds&quot; approach. Many sophisticated search fund investors
          follow this strategy, backing multiple searchers per vintage
          year. The 2024 Stanford study found that investors who backed
          five or more search funds had a 97% probability of generating
          positive returns, underscoring the importance of portfolio
          construction in ETA.
        </p>

        <h2 className={h2Class}>Risk comparison</h2>
        <h3 className={h3Class}>ETA-specific risks</h3>
        <ul className={ulClass}>
          <li>
            <strong>Search risk:</strong> Approximately 25% to 30% of
            funded searchers never complete an acquisition, resulting in
            a total loss of search capital. This risk does not exist in PE.
          </li>
          <li>
            <strong>Key-person risk:</strong> The entire investment depends
            on a single, often first-time CEO. PE mitigates this through
            professional management teams and operating partner support.
          </li>
          <li>
            <strong>Concentration risk:</strong> A single business in a
            single industry with a single operator. There is no
            diversification at the individual investment level.
          </li>
          <li>
            <strong>Scale limitations:</strong> SMEs are inherently more
            fragile than larger businesses. They may depend on a few key
            customers, lack management depth, and have limited access to
            capital markets.
          </li>
        </ul>

        <h3 className={h3Class}>PE-specific risks</h3>
        <ul className={ulClass}>
          <li>
            <strong>Leverage risk:</strong> PE transactions typically use
            60% to 70% debt financing. In downturns, highly leveraged
            portfolio companies can face covenant breaches and potential
            bankruptcy. Search fund acquisitions use more moderate leverage
            (typically 50% to 60% of the purchase price).
          </li>
          <li>
            <strong>Multiple compression:</strong> PE often depends on
            buying at one multiple and selling at a higher multiple
            (multiple expansion). If valuation multiples contract — as
            they did in 2022-2023 — PE returns suffer. ETA returns depend
            more on operational improvement and less on financial
            engineering.
          </li>
          <li>
            <strong>Fee drag:</strong> The cumulative impact of management
            fees, transaction fees, and carried interest can reduce net
            returns by 5 to 8 percentage points relative to gross returns.
          </li>
          <li>
            <strong>Vintage year risk:</strong> PE fund performance is
            highly correlated with the economic cycle. Funds that deploy
            capital at peak valuations systematically underperform.
          </li>
        </ul>

        <h2 className={h2Class}>When PE makes more sense</h2>
        <p>
          Private equity is better suited in several scenarios:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Scale requirements:</strong> If you need to deploy
            $50 million or more, PE is the only practical option. The SME
            market cannot absorb large capital allocations efficiently.
          </li>
          <li>
            <strong>Diversification needs:</strong> Institutional investors
            who require diversified exposure to private companies with
            predictable return distributions should favor PE funds.
          </li>
          <li>
            <strong>Operational complexity:</strong> Businesses that require
            sophisticated operational improvements — supply chain
            optimization, international expansion, complex technology
            integration — benefit from the deep bench of a PE firm&apos;s
            operating team.
          </li>
          <li>
            <strong>Liquidity preferences:</strong> While both are illiquid,
            PE fund interests are increasingly tradable on the secondary
            market. Search fund investments have essentially no secondary
            market.
          </li>
        </ul>

        <h2 className={h2Class}>When ETA outperforms</h2>
        <p>
          ETA is likely the superior choice when:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>IRR is the priority:</strong> If you are optimizing
            for the highest possible return per dollar invested, ETA&apos;s
            track record of 33%+ median IRR is difficult to match in any
            asset class. Our analysis of{" "}
            <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">search fund returns</Link> explores
            these numbers in detail.
          </li>
          <li>
            <strong>Alignment matters:</strong> The absence of management
            fees and the searcher&apos;s concentrated equity position create
            near-perfect alignment between operator and investor.
          </li>
          <li>
            <strong>You believe in the operator:</strong> ETA is a bet on
            human capital. If you have conviction in a specific
            individual&apos;s ability to lead and grow a business, ETA
            provides the purest expression of that conviction.
          </li>
          <li>
            <strong>Access to deal flow:</strong> The SME market is
            inefficient and fragmented. Searchers who develop proprietary
            deal flow can acquire businesses at valuations that would be
            impossible in the competitive PE auction process.
          </li>
        </ul>

        <h2 className={h2Class}>Building a blended allocation</h2>
        <p>
          The most sophisticated investors do not choose between ETA and PE —
          they allocate to both. A typical approach for a family office or
          high-net-worth individual might be:
        </p>
        <ul className={ulClass}>
          <li>
            60% to 70% of private equity allocation to traditional PE
            funds for diversified, institutional-quality exposure.
          </li>
          <li>
            20% to 30% allocated across 10 to 20 search fund investments
            per vintage year for concentrated, high-IRR alpha.
          </li>
          <li>
            10% to a search fund accelerator or fund-of-funds for
            diversified ETA exposure with professional portfolio
            management.
          </li>
        </ul>
        <p>
          This blended approach captures the scale and diversification of
          PE while accessing the superior IRR potential and alignment
          advantages of ETA. The low correlation between individual search
          fund outcomes and broader PE market cycles adds genuine
          diversification benefit to the overall private equity portfolio.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>
        <h3 className={h3Class}>How is ETA different from private equity?</h3>
        <p>
          ETA targets smaller deals ($1&ndash;20M enterprise value vs. $100M+ for PE),
          involves a single operator-CEO rather than a professional management team,
          uses step-up equity instead of 2/20 fee structures, and focuses on one
          business at a time. The operator is deeply aligned through personal equity
          and earns outsized returns only when investors earn outsized returns.
          There are no management fees in ETA, whereas PE firms charge 1.5&ndash;2%
          annually regardless of performance. For a deeper understanding of ETA
          mechanics, see our guide on{" "}
          <Link href="/learn/what-is-a-search-fund" className="text-apple-accent hover:underline">what is a search fund</Link>.
        </p>

        <h3 className={h3Class}>Do search funds outperform private equity?</h3>
        <p>
          On an IRR basis, search funds have historically outperformed PE. The
          2024 Stanford study reports median pre-tax IRR of approximately 33%
          for search funds versus 14&ndash;18% median net IRR for traditional PE.
          However, PE offers larger absolute returns per fund, more
          diversification, and greater liquidity. The comparison depends on
          the investor&apos;s portfolio construction goals: PE for scale and
          diversification, ETA for concentrated high-IRR alpha. Many
          sophisticated family offices allocate to both.
        </p>

        <h3 className={h3Class}>Can I invest in both ETA and PE?</h3>
        <p>
          Yes, and many sophisticated investors do exactly that. A typical
          approach allocates 60&ndash;70% of private equity capital to
          traditional PE funds for diversified, institutional-quality
          exposure and 20&ndash;30% across 10&ndash;20 search fund investments
          per vintage year for high-IRR alpha. The low correlation between
          individual search fund outcomes and broader PE market cycles adds
          genuine diversification benefit to the overall portfolio. Learn
          more about building a search fund portfolio in our{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">search fund returns analysis</Link>.
        </p>
      </div>
    </article>
  );
}
