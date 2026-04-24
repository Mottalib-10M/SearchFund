import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AreSearchFundsGoodInvestmentArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Are Search Funds a Good Investment? Returns Analyzed
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Search funds have generated a 33% aggregate pre-tax IRR across
          681+ funds since 1984, making them one of the highest-returning
          alternative asset classes. But averages mask significant
          dispersion &mdash; about a third of investments lose money.
          This article analyzes the data investors need to evaluate search
          fund allocations.
        </p>

        <h2 className={h2Class}>Historical returns</h2>
        <p>
          Based on the{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
            Stanford GSB 2024 study
          </Link>{" "}
          and IESE&rsquo;s international data:
        </p>

        <h3 className={h3Class}>US search funds (Stanford 2024)</h3>
        <ul className={ulClass}>
          <li><strong>Aggregate pre-tax IRR:</strong> 33.0% (all funds 1984&ndash;2022)</li>
          <li><strong>Aggregate MOIC:</strong> 5.5x invested capital</li>
          <li><strong>Median pre-tax IRR:</strong> 18.7% (important: the median is much lower than the mean)</li>
          <li><strong>Median MOIC:</strong> 2.4x</li>
          <li><strong>Return on search capital only:</strong> ~11% of search investments return 10x+, driving overall returns</li>
        </ul>

        <h3 className={h3Class}>International search funds (IESE 2024)</h3>
        <ul className={ulClass}>
          <li><strong>Aggregate pre-tax IRR:</strong> 26.7%</li>
          <li><strong>Growing rapidly:</strong> International funds have grown from &lt;5% to 40%+ of new fund formation</li>
          <li><strong>Regional variation:</strong> Europe, Latin America, and Canada each show different return profiles</li>
        </ul>

        <h2 className={h2Class}>Return distribution: the J-curve of outcomes</h2>
        <ul className={ulClass}>
          <li><strong>~33% lose money:</strong> These investments return less than 1.0x, including total losses</li>
          <li><strong>~33% return 1&ndash;3x:</strong> Modest returns, roughly comparable to public equities</li>
          <li><strong>~33% return 3x+:</strong> The home runs that drive aggregate returns, with top decile returning 10x+</li>
        </ul>
        <p>
          This power-law distribution means portfolio construction matters.
          Single-fund investing carries significant risk; diversified
          search fund portfolios (10+ investments) more reliably capture
          the asset class returns. According to Cambridge Associates&rsquo;
          2024 benchmark data, a portfolio of 15+ search fund investments
          has historically converged on the asset class average, reducing
          the probability of a below-1x portfolio return to under 5%.
        </p>

        <h2 className={h2Class}>Comparison to other asset classes</h2>
        <ul className={ulClass}>
          <li><strong>S&amp;P 500:</strong> ~10% annualized returns. Search funds deliver 3x this return with significant illiquidity premium</li>
          <li><strong>Private equity (buyout):</strong> 15&ndash;20% net IRR for top-quartile funds. Search funds outperform on IRR but with smaller absolute check sizes</li>
          <li><strong>Venture capital:</strong> 20&ndash;30% for top-quartile funds. Similar return profile but search funds invest in profitable businesses, not pre-revenue startups</li>
          <li><strong>Real estate:</strong> 8&ndash;15% total returns. Lower risk, lower return, more liquid. See{" "}
            <Link href="/learn/eta-vs-real-estate" className="text-apple-accent hover:underline">
              ETA vs. real estate
            </Link></li>
        </ul>

        <h2 className={h2Class}>What drives search fund returns?</h2>

        <h3 className={h3Class}>The searcher</h3>
        <ul className={ulClass}>
          <li>The single most important factor. The quality, drive, and judgment of the CEO/searcher determines outcomes</li>
          <li>Investor evaluation of the searcher is the primary investment decision</li>
          <li>Track record of the searcher&rsquo;s pre-ETA career is a leading indicator</li>
        </ul>

        <h3 className={h3Class}>The business acquired</h3>
        <ul className={ulClass}>
          <li><strong>
            <Link href="/learn/what-makes-good-acquisition-target" className="text-apple-accent hover:underline">
              Target quality
            </Link>:
          </strong> Recurring revenue, low concentration, existing management layer</li>
          <li><strong>Entry valuation:</strong> Overpaying is the #1 cause of{" "}
            <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
              search fund failure
            </Link></li>
          <li><strong>Industry dynamics:</strong> Tailwinds (growing market, succession wave) vs. headwinds (disruption, commoditization)</li>
        </ul>

        <h3 className={h3Class}>Value creation levers</h3>
        <ul className={ulClass}>
          <li><strong>Organic growth:</strong> Revenue growth through sales/marketing investment</li>
          <li><strong>
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              Buy-and-build
            </Link>:
          </strong> Add-on acquisitions to scale the platform (highest-returning strategy when executed well)</li>
          <li><strong>Operational improvement:</strong> Margin expansion through process improvement and technology</li>
          <li><strong>Multiple expansion:</strong> Growing EBITDA above $5M often commands 2&ndash;3 higher turn multiples at exit</li>
        </ul>

        <h2 className={h2Class}>The investor economics</h2>
        <p>
          See our detailed{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            investor economics guide
          </Link>{" "}
          for the full structure:
        </p>
        <ul className={ulClass}>
          <li><strong>Search phase investment:</strong> $30K&ndash;$50K per unit (typically 10&ndash;20 investors contribute $400K&ndash;$600K total)</li>
          <li><strong>Step-up conversion:</strong> At acquisition, search capital converts at 1.5x &mdash; meaning $30K buys $45K worth of acquisition equity</li>
          <li><strong>Pro-rata right:</strong> Investors have the right (not obligation) to invest pro-rata in the acquisition equity</li>
          <li><strong>Preferred return:</strong> Some structures include preferred return provisions before common equity participation</li>
        </ul>

        <h2 className={h2Class}>Risks investors should understand</h2>
        <ul className={ulClass}>
          <li><strong>Search risk (33%):</strong> One-third of searchers never complete an acquisition. Search capital is lost</li>
          <li><strong>Acquisition risk:</strong> Overpaying, missing{" "}
            <Link href="/learn/red-flags-due-diligence" className="text-apple-accent hover:underline">
              DD red flags
            </Link>, or acquiring a{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              concentrated business
            </Link></li>
          <li><strong>Operator risk:</strong> First-time CEO managing through unexpected challenges (recession, key employee departure, customer loss)</li>
          <li><strong>Illiquidity:</strong> 5&ndash;7+ year hold period with no secondary market</li>
          <li><strong>Small check sizes:</strong> $30K&ndash;$50K search investment + $200K&ndash;$500K acquisition equity. For large allocators, deploying meaningful capital requires many investments</li>
        </ul>

        <h2 className={h2Class}>Who should invest in search funds?</h2>
        <ul className={ulClass}>
          <li><strong>Former search fund entrepreneurs:</strong> Know the model, can evaluate searchers, often mentor their investments</li>
          <li><strong>Family offices:</strong> Long-horizon capital, can build diversified search fund portfolios over time</li>
          <li><strong>High-net-worth individuals:</strong> $30K&ndash;$50K per search fund fits angel/venture allocation budgets</li>
          <li><strong>Fund-of-funds:</strong> Specialized vehicles (e.g., Pacific Lake Partners, Relay Investments) that aggregate search fund investments</li>
          <li><strong>MBA school communities:</strong> Stanford, HBS, and other programs have active investor networks</li>
        </ul>

        <p>
          Notably, IESE&rsquo;s 2024 International Search Fund Study
          shows that international search fund investing is growing
          rapidly, with funds outside the US now comprising over 40% of
          new fund formation. Investors with global mandates can diversify
          across geographies while tapping into the{" "}
          <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
            baby boomer succession wave
          </Link>{" "}
          that is creating acquisition opportunities worldwide.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What is the average return on search fund investments?</h3>
        <p>
          The aggregate pre-tax IRR is 33% with a 5.5x MOIC (multiple on
          invested capital), per Stanford&rsquo;s 2024 study. However, the
          median return is much lower at 18.7% IRR and 2.4x MOIC, because
          returns are driven by the top ~10% of investments that return
          10x or more.
        </p>

        <h3 className={h3Class}>How risky are search fund investments?</h3>
        <p>
          Approximately one-third of search fund investments lose money.
          Key risks include search risk (33% of searchers never acquire),
          operator risk (first-time CEO managing through challenges),
          illiquidity (5&ndash;7+ year hold), and small check sizes.
          Diversified portfolios of 10+ investments more reliably capture
          the asset class returns.
        </p>

        <h3 className={h3Class}>How do search fund returns compare to private equity?</h3>
        <p>
          Search funds have outperformed traditional PE buyout funds on an
          IRR basis (33% vs. 15&ndash;20% for top-quartile PE), though with
          smaller absolute check sizes and higher dispersion. Unlike PE,
          search funds invest in profitable businesses at 4&ndash;6x EBITDA
          and rely on operational improvement rather than financial
          engineering for value creation.
        </p>

        <p>
          For more on investing, see{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">
            why invest in search funds
          </Link>,{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            search fund returns analysis
          </Link>, and{" "}
          <Link href="/learn/portfolio-construction-search-funds" className="text-apple-accent hover:underline">
            portfolio construction for search fund investors
          </Link>.
        </p>
      </div>
    </article>
  );
}
