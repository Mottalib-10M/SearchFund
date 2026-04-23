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
          asset class. Portfolio construction &mdash; how many search funds
          you invest in, at what check sizes, and across what dimensions
          &mdash; determines whether you capture the asset class&rsquo;s
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
          <li><strong>Top quartile:</strong> 3&ndash;10x+ MOIC. These drive the overall asset class returns</li>
          <li><strong>Key insight:</strong> You need enough investments to capture at least 1&ndash;2 top-quartile outcomes</li>
        </ul>

        <h2 className={h2Class}>How many search funds?</h2>
        <ul className={ulClass}>
          <li><strong>Minimum viable portfolio:</strong> 10&ndash;15 search fund investments to get meaningful diversification</li>
          <li><strong>Optimal range:</strong> 15&ndash;25 investments. At this level, the probability of capturing top-quartile outcomes is high</li>
          <li><strong>Institutional portfolios:</strong> 30&ndash;50+ investments (Stanford, Pacific Lake Partners, Relay Investments)</li>
          <li><strong>Danger zone:</strong> Fewer than 8 investments creates excessive concentration risk. A single bad outcome can devastate the portfolio</li>
        </ul>

        <h2 className={h2Class}>Investment sizing</h2>
        <ul className={ulClass}>
          <li><strong>Search capital:</strong> Typical individual investor commitment is $25K&ndash;$100K per search fund during the search phase</li>
          <li><strong>Acquisition capital:</strong> Follow-on investment at acquisition ranges from $50K&ndash;$500K depending on the deal size and investor&rsquo;s portfolio strategy</li>
          <li><strong>Equal weighting:</strong> Most experienced investors use roughly equal check sizes across search fund investments to avoid over-concentrating</li>
          <li><strong>Reserve ratio:</strong> Budget 2&ndash;3x your initial commitment per fund to cover acquisition follow-on capital</li>
        </ul>

        <h2 className={h2Class}>Diversification dimensions</h2>

        <h3 className={h3Class}>Vintage year</h3>
        <ul className={ulClass}>
          <li>Invest in 3&ndash;5 new search funds per year over 3&ndash;5 years</li>
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
          <li><strong>Family offices:</strong> Typically allocate 3&ndash;10% of total assets to search funds (within a broader private equity allocation)</li>
          <li><strong>Individual investors:</strong> 5&ndash;15% of liquid net worth is a common range for those committed to the asset class</li>
          <li><strong>Institutional investors:</strong> Usually invest through fund-of-funds structures due to the high number of individual investments required</li>
          <li><strong>Liquidity planning:</strong> Search fund capital is locked for 7&ndash;10 years. Only invest capital you do not need</li>
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
          <li><strong>Too few investments:</strong> A 3&ndash;5 fund &ldquo;portfolio&rdquo; is a concentrated bet, not a diversified strategy</li>
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
      </div>
    </article>
  );
}
