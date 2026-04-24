import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SearchFundInvestorEconomicsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Search Fund Investor Economics: Step-Up, Carried Interest &amp; Returns
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          Search fund investing is one of the most attractive alternative
          asset classes for accredited investors, with median returns of{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            35% IRR and 5.5x MOIC
          </Link>{" "}
          according to Stanford data. But the economics work differently
          from private equity, venture capital, or other fund structures.
          This guide explains the investor&rsquo;s perspective: how
          capital is deployed, the step-up mechanism, equity alignment,
          and how returns are generated.
        </p>

        <h2 className={h2Class}>Two stages of capital commitment</h2>
        <p>
          Search fund investing involves two distinct capital commitments:
        </p>

        <h3 className={h3Class}>Stage 1: Search capital</h3>
        <ul className={ulClass}>
          <li><strong>Amount per investor:</strong> $25K&ndash;$50K (typically 5% of total search capital)</li>
          <li><strong>Total raised:</strong> $400K&ndash;$600K from 10&ndash;20 investors</li>
          <li><strong>Purpose:</strong> Fund the searcher&rsquo;s salary, travel, legal, and operating expenses during the 18&ndash;24 month search</li>
          <li><strong>Risk:</strong> If no acquisition is completed, this capital is partially or fully lost (search expenses are sunk costs)</li>
          <li><strong>Structure:</strong> Convertible note or preferred equity that converts at acquisition</li>
        </ul>

        <h3 className={h3Class}>Stage 2: Acquisition capital</h3>
        <ul className={ulClass}>
          <li><strong>Amount per investor:</strong> $100K&ndash;$1M+ (depends on deal size and investor allocation)</li>
          <li><strong>Total equity raised:</strong> $2M&ndash;$10M+ (equity component of the acquisition)</li>
          <li><strong>Purpose:</strong> Fund the equity portion of the business acquisition</li>
          <li><strong>Right, not obligation:</strong> Search investors have the right to invest pro-rata in the acquisition, but they can pass</li>
        </ul>

        <h2 className={h2Class}>The step-up mechanism</h2>
        <p>
          The step-up is the defining economic feature of search fund
          investing. Search capital investors receive preferential terms
          when the acquisition is made:
        </p>
        <ul className={ulClass}>
          <li><strong>Standard step-up:</strong> 1.5x - for every $1 of search capital invested, the investor gets $1.50 worth of equity in the acquisition</li>
          <li><strong>Example:</strong> An investor who committed $50K in search capital receives $75K worth of acquisition equity at the acquisition price</li>
          <li><strong>Rationale:</strong> Compensates search investors for the risk of the search phase (where capital can be lost if no deal closes)</li>
          <li><strong>Pro-rata participation:</strong> Search investors typically get the right to invest their pro-rata share (and sometimes more) in the acquisition equity</li>
        </ul>

        <h3 className={h3Class}>Step-up variations</h3>
        <ul className={ulClass}>
          <li><strong>1.5x standard:</strong> Most common in traditional US search funds</li>
          <li><strong>2.0x:</strong> Sometimes used for riskier searches or to compensate for longer search periods</li>
          <li><strong>1.0x (no step-up):</strong> Occasionally used in European or non-traditional structures</li>
          <li><strong>Conversion cap:</strong> Some structures cap the step-up at a maximum equity percentage</li>
        </ul>

        <h2 className={h2Class}>Equity allocation at acquisition</h2>
        <p>
          At the time of acquisition, the equity is typically allocated:
        </p>
        <ul className={ulClass}>
          <li><strong>Searcher/CEO:</strong> 20&ndash;25% (vesting over 4&ndash;5 years)</li>
          <li><strong>Search investors (with step-up):</strong> Their converted search capital + pro-rata acquisition equity</li>
          <li><strong>Acquisition-only investors:</strong> New investors who participate only at the acquisition stage (no step-up)</li>
        </ul>
        <p>
          See our{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            cap tables &amp; equity guide
          </Link>{" "}
          for detailed mechanics and numerical examples.
        </p>

        <h2 className={h2Class}>How returns are generated</h2>

        <h3 className={h3Class}>Value creation levers</h3>
        <ul className={ulClass}>
          <li><strong>Revenue growth:</strong> The CEO grows the business organically through sales, marketing, and customer expansion</li>
          <li><strong>Margin improvement:</strong> Operational improvements, pricing optimization, cost reduction</li>
          <li><strong>Multiple expansion:</strong> A professionally managed, larger business commands a higher{" "}
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              EBITDA multiple
            </Link>{" "}
            at exit than at purchase</li>
          <li><strong>Debt paydown:</strong> Cash flow is used to pay down acquisition debt, increasing equity value</li>
          <li>
            <strong>
              <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
                Add-on acquisitions
              </Link>:
            </strong>{" "}
            Bolt-on businesses acquired at lower multiples than the platform
          </li>
        </ul>

        <h3 className={h3Class}>Return example</h3>
        <p>
          A simplified example with a $15M acquisition at 5x EBITDA:
        </p>
        <ul className={ulClass}>
          <li>EBITDA at acquisition: $3M</li>
          <li>Purchase price: $15M (5x)</li>
          <li>Equity: $5M (33%)</li>
          <li>Debt: $10M (67%)</li>
          <li>After 5 years: EBITDA grows to $5M</li>
          <li>Exit at 6.5x = $32.5M enterprise value</li>
          <li>Debt remaining: $6M (after paydown)</li>
          <li>Equity value: $26.5M (from $5M invested)</li>
          <li><strong>MOIC: 5.3x / IRR: ~40%</strong></li>
        </ul>

        <h2 className={h2Class}>Comparison to other asset classes</h2>
        <ul className={ulClass}>
          <li>
            <strong>vs.{" "}
              <Link href="/learn/eta-vs-private-equity" className="text-apple-accent hover:underline">
                Private equity
              </Link>:
            </strong>{" "}
            Search funds generate higher IRRs (35% vs. 15&ndash;20%) but smaller absolute dollar returns per investment. PE offers more diversification and liquidity
          </li>
          <li>
            <strong>vs.{" "}
              <Link href="/learn/eta-vs-venture-capital" className="text-apple-accent hover:underline">
                Venture capital
              </Link>:
            </strong>{" "}
            Search funds have lower variance (fewer zeros, fewer 100x returns). More consistent cash-flow-based returns vs. VC&rsquo;s power-law distribution
          </li>
          <li>
            <strong>vs.{" "}
              <Link href="/learn/eta-vs-real-estate" className="text-apple-accent hover:underline">
                Real estate
              </Link>:
            </strong>{" "}
            Higher returns but illiquid, concentrated, and manager-dependent. No passive income during the operating period
          </li>
        </ul>

        <h2 className={h2Class}>Portfolio construction</h2>
        <ul className={ulClass}>
          <li><strong>Typical allocation:</strong> Experienced search fund investors back 10&ndash;30+ searchers to build a diversified portfolio</li>
          <li><strong>Search capital at risk:</strong> $250K&ndash;$1.5M across the portfolio (search capital that may be lost if searchers don&rsquo;t acquire)</li>
          <li><strong>Acquisition capital reserved:</strong> $1M&ndash;$10M+ for follow-on investment in the ~67% of searches that complete acquisitions</li>
          <li><strong>Expected losses:</strong> 33% of search investments result in total loss (searcher doesn&rsquo;t acquire). Another ~15&ndash;20% of acquisitions underperform</li>
          <li><strong>Winners pay for losers:</strong> The portfolio model works because the top-quartile performers generate 10x+ returns, more than compensating for losses</li>
        </ul>

        <h2 className={h2Class}>Key investor considerations</h2>
        <ul className={ulClass}>
          <li><strong>Illiquidity:</strong> Capital is locked up for 7&ndash;10 years with no secondary market</li>
          <li><strong>Manager risk:</strong> Each investment is a bet on a single CEO. The searcher&rsquo;s quality is the #1 determinant of returns</li>
          <li><strong>Minimum ticket size:</strong> Typically $25K&ndash;$50K per search (search capital) + $100K+ per acquisition (equity capital)</li>
          <li><strong>Accredited investor:</strong> Most search fund investments require accredited investor status under SEC rules</li>
          <li><strong>Time commitment:</strong> Active investors serve on boards (3&ndash;5 hours/month per company) and provide mentorship</li>
        </ul>
        <p>
          For more on the investor perspective, see{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">
            why invest in search funds
          </Link>{" "}
          and our{" "}
          <Link href="/learn/search-fund-statistics" className="text-apple-accent hover:underline">
            search fund statistics
          </Link>{" "}
          overview.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What is the expected return on search fund investments?</h3>
        <p>
          According to the Stanford GSB 2024 Search Fund Study, the asset class has generated median returns of approximately 35% IRR and 5.5x MOIC across all completed acquisitions. However, returns are highly skewed: the top quartile of acquisitions generates 10x+ returns, while approximately 33% of search investments result in total loss (the searcher never closes an acquisition). Among completed acquisitions, roughly 15&ndash;20% underperform the invested capital. Experienced search fund investors build diversified portfolios of 10&ndash;30+ search commitments to smooth out these outcomes, with portfolio-level returns typically ranging from 25&ndash;40% IRR depending on vintage and manager selection quality.
        </p>

        <h3 className={h3Class}>How does the 1.5x step-up work in practice?</h3>
        <p>
          The step-up compensates early-stage search capital investors for the higher risk they bear during the unfunded search phase. For every $1 invested as search capital, the investor receives $1.50 worth of equity at the acquisition-stage valuation. For example, an investor who commits $50K in search capital receives $75K worth of acquisition equity &mdash; a 50% premium. According to IESE Business School&rsquo;s research on European search funds, the 1.5x step-up has become the global standard, though some European funds use a 1.0x structure (no step-up) to simplify the cap table. The step-up is economically justified because approximately one-third of funded searches never complete an acquisition, making search capital a high-risk investment with binary outcomes at the individual deal level.
        </p>

        <h3 className={h3Class}>How many search funds should an investor back to build a diversified portfolio?</h3>
        <p>
          Stanford GSB research suggests that backing 10&ndash;15 search funds provides meaningful diversification, with portfolios of 20+ commitments approaching optimal risk-adjusted returns. At $25K&ndash;$50K per search commitment, this requires $250K&ndash;$1M in search capital alone, plus $1M&ndash;$10M+ reserved for follow-on{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition equity</Link>{" "}
          in the approximately two-thirds of searches that complete acquisitions. The portfolio model works because top-performing acquisitions generate 10x&ndash;30x returns, which more than compensate for the 33% total loss rate on unfunded searches and the 15&ndash;20% of completed acquisitions that underperform. Investors with fewer than 10 commitments face significant single-manager risk and may experience highly variable outcomes.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford Graduate School of Business &mdash; <em>Search Fund Study: Selected Observations</em>, 2024 edition. Thorough return data, step-up mechanics, and portfolio construction analysis across 500+ search funds.</li>
          <li>IESE Business School &mdash; <em>International Search Fund Study</em>, 2024. European search fund economics, structural variations, and cross-border return comparisons.</li>
          <li>Harvard Business School &mdash; <em>Search Funds: An Overview of the Asset Class</em>, HBS Case Study. Academic analysis of investor economics, portfolio theory, and risk-return characteristics of search fund investing.</li>
        </ul>
      </div>
    </article>
  );
}
