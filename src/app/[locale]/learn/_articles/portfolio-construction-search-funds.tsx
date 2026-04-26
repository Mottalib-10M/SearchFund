import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function PortfolioConstructionSearchFundsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Portfolio Construction for Search Fund Investors
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Search fund investing is a high-return, illiquid, concentrated
          asset class. Portfolio construction, how many search funds
          you invest in, at what check sizes, and across what dimensions
          determines whether you capture the asset class&rsquo;s
          exceptional{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            return profile
          </Link>{" "}
          or get burned by its high variance. This guide provides the
          framework experienced LPs use to build search fund portfolios.
        </p>

        <h2 className={h2Class}>The math of search fund portfolio construction</h2>
        <ul className={ulClass}>
          <li><strong>Loss rate:</strong> ~33% of search fund investments result in partial or total loss</li>
          <li><strong>Median outcome:</strong> 1.7x MOIC (more modest than the headline average)</li>
          <li><strong>Top quartile:</strong> 3-10x+ MOIC. These drive the overall asset class returns</li>
          <li><strong>Key insight:</strong> You need enough investments to capture at least 1-2 top-quartile outcomes</li>
        </ul>

        <h2 className={h2Class}>How many search funds?</h2>
        <ul className={ulClass}>
          <li><strong>Minimum viable portfolio:</strong> 10-15 search fund investments to get meaningful diversification</li>
          <li><strong>Optimal range:</strong> 15-25 investments. At this level, the probability of capturing top-quartile outcomes is high</li>
          <li><strong>Institutional portfolios:</strong> 30-50+ investments (Stanford, Pacific Lake Partners, Relay Investments)</li>
          <li><strong>Danger zone:</strong> Fewer than 8 investments creates excessive concentration risk. A single bad outcome can devastate the portfolio</li>
        </ul>

        <h2 className={h2Class}>Investment sizing</h2>
        <ul className={ulClass}>
          <li><strong>Search capital:</strong> Typical individual investor commitment is $25K-$100K per search fund during the search phase</li>
          <li><strong>Acquisition capital:</strong> Follow-on investment at acquisition ranges from $50K-$500K depending on the deal size and investor&rsquo;s portfolio strategy</li>
          <li><strong>Equal weighting:</strong> Most experienced investors use roughly equal check sizes across search fund investments to avoid over-concentrating</li>
          <li><strong>Reserve ratio:</strong> Budget 2-3x your initial commitment per fund to cover acquisition follow-on capital</li>
        </ul>

        <h2 className={h2Class}>Diversification dimensions</h2>

        <h3 className={h3Class}>Vintage year</h3>
        <ul className={ulClass}>
          <li>Invest in 3-5 new search funds per year over 3-5 years</li>
          <li>This smooths exposure across economic cycles and market conditions</li>
          <li>Avoid deploying your entire search fund allocation in one year</li>
        </ul>

        <h3 className={h3Class}>Geography</h3>
        <ul className={ulClass}>
          <li>US search funds have the longest track record and deepest data</li>
          <li>European search funds (IESE, INSEAD networks) offer lower{" "}
            <Link href="/learn/ebitda-multiples-by-country" className="text-apple-accent hover:underline">
              entry multiples
            </Link>{" "}
            but less exit liquidity</li>
          <li>Latin American and Asian search funds are emerging but higher risk</li>
          <li>Consider a 60/30/10 split: US / Europe / Emerging</li>
        </ul>

        <h3 className={h3Class}>Industry</h3>
        <ul className={ulClass}>
          <li>Search funds acquire across many industries (services, healthcare, manufacturing, technology)</li>
          <li>Industry diversification happens naturally if you invest in 15+ funds</li>
          <li>Avoid over-concentrating in a single sector</li>
        </ul>

        <h3 className={h3Class}>Searcher profile</h3>
        <ul className={ulClass}>
          <li>Mix solo and partnered searches</li>
          <li>Mix MBA backgrounds (Stanford, Harvard, IESE, HEC) with non-traditional paths</li>
          <li>Mix first-time and experienced operators</li>
          <li>See{" "}
            <Link href="/learn/how-to-evaluate-searcher" className="text-apple-accent hover:underline">
              how to evaluate a searcher
            </Link></li>
        </ul>

        <h2 className={h2Class}>Search fund allocation in a portfolio</h2>
        <ul className={ulClass}>
          <li><strong>Family offices:</strong> Typically allocate 3-10% of total assets to search funds (within a broader private equity allocation)</li>
          <li><strong>Individual investors:</strong> 5-15% of liquid net worth is a common range for those committed to the asset class</li>
          <li><strong>Institutional investors:</strong> Usually invest through fund-of-funds structures due to the high number of individual investments required</li>
          <li><strong>Liquidity planning:</strong> Search fund capital is locked for 7-10 years. Only invest capital you do not need</li>
        </ul>

        <h2 className={h2Class}>Alternative access methods</h2>
        <ul className={ulClass}>
          <li><strong>Direct investing:</strong> Invest individually in search funds you source and evaluate</li>
          <li><strong>Fund of funds:</strong> Pacific Lake Partners, Relay Investments, and others offer diversified search fund exposure through a single vehicle</li>
          <li><strong>University programs:</strong> Stanford, Harvard, MIT, and IESE facilitate investor-searcher matching</li>
          <li><strong>Search fund networks:</strong> SearchFunder, ETA-focused conferences, and investor syndicates</li>
        </ul>

        <h2 className={h2Class}>Common portfolio mistakes</h2>
        <ul className={ulClass}>
          <li><strong>Too few investments:</strong> A 3-5 fund &ldquo;portfolio&rdquo; is a concentrated bet, not a diversified strategy</li>
          <li><strong>Chasing the hot searcher:</strong> Over-allocating to one candidate based on pedigree alone</li>
          <li><strong>Ignoring follow-on reserves:</strong> Not budgeting for acquisition-stage capital and getting diluted</li>
          <li><strong>No vintage diversification:</strong> Deploying everything in one year</li>
        </ul>

        <p>
          For more on{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            investor economics
          </Link>{" "}
          and{" "}
          <Link href="/learn/search-fund-statistics" className="text-apple-accent hover:underline">
            search fund data
          </Link>, see our investor guides.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How many search funds should I invest in to build a diversified portfolio?</h3>
        <p>
          According to the Stanford GSB Search Fund Study, the minimum viable portfolio is 10-15 search fund investments, with 15-25 being the optimal range. At this level, probabilistic modeling shows a 90%+ chance of capturing at least one top-quartile outcome (3-10x+ MOIC), which drives overall portfolio returns. Institutional investors like Pacific Lake Partners and Relay Investments typically back 30-50+ funds. Investing in fewer than 8 funds creates dangerous concentration risk, with a ~33% loss rate, a small portfolio can be devastated by a few bad outcomes. Diversify across vintage years (3-5 new funds per year), geographies, and <Link href="/learn/how-to-evaluate-searcher" className="text-apple-accent hover:underline">searcher profiles</Link> to maximize your probability of capturing the asset class&rsquo;s strong returns.
        </p>

        <h3 className={h3Class}>How much capital should I reserve for follow-on investments at the acquisition stage?</h3>
        <p>
          Experienced search fund investors budget 2-3x their initial search-phase commitment for acquisition follow-on capital. If you invest $50K during the search phase, plan to invest an additional $100K-$150K when the searcher identifies and closes on a company. According to data from the Stanford Center for Entrepreneurial Studies, investors who do not reserve adequate follow-on capital face significant dilution from new investors brought in at the acquisition stage. Some investors address this by structuring their overall allocation upfront: committing to a total per-fund amount (e.g., $200K) with $50K deployed at search and $150K reserved for acquisition. This ensures you maintain your pro-rata ownership and <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">return potential</Link>.
        </p>

        <h3 className={h3Class}>Should I invest in European search funds or stick to US-based funds?</h3>
        <p>
          IESE Business School research shows that European search funds offer compelling advantages: lower entry multiples (3-5x EBITDA vs. 4-7x in the US), a massive SME succession wave (23 million EU businesses facing ownership transitions), and less competition among buyers. Returns for completed European acquisitions have been comparable to US funds. However, European funds carry additional risks including less exit liquidity, fragmented regulatory environments, and a shorter track record. A balanced approach is a 60/30/10 split between US, European, and emerging market funds. European markets like France, Spain, and Germany are the most mature, with institutional support from IESE, INSEAD, and government programs like Bpifrance. See our guide on <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link> for a deeper analysis.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford Graduate School of Business, <em>Search Fund Study: Selected Observations</em> (2024)</li>
          <li>IESE Business School, <em>International Search Fund Study</em> (2023)</li>
          <li>Pacific Lake Partners, <em>Search Fund Portfolio Construction: Lessons from Two Decades</em> (2024)</li>
        </ul>
      </div>
    </article>
  );
}
