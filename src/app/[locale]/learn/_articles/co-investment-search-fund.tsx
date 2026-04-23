import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function CoInvestmentSearchFundArticle() {
  return (
    <article>
      <h1 className={h1Class}>Co-Investment in Search Funds</h1>
      <div className={bodyClass}>
        <p>Co-investment &mdash; the opportunity for search fund investors to invest additional capital alongside their pro rata commitment in specific acquisitions &mdash; is an increasingly important component of search fund investing. Co-investment rights allow investors to increase exposure to their highest-conviction deals while providing searchers with access to additional acquisition capital. Understanding co-investment mechanics, economics, and decision-making is essential for both investors and searchers.</p>
      </div>

      <h2 className={h2Class}>How Co-Investment Works</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Pro rata rights:</strong> Search fund investors have the right to invest their pro rata share of acquisition equity. Co-investment is capital above this pro rata amount.</li>
          <li><strong>Co-invest sizing:</strong> Typically $500K&ndash;5M+ per investor, depending on deal size and investor capacity. Can be 2&ndash;10x the initial search commitment.</li>
          <li><strong>Allocation process:</strong> When acquisition equity exceeds pro rata capacity, the searcher offers co-investment to existing investors first, then to new investors.</li>
          <li><strong>Terms:</strong> Co-investment typically receives the same economics as pro rata capital (same equity class, same terms). Some structures offer co-invest at slightly different terms.</li>
          <li><strong>Timing:</strong> Co-investment decisions happen during the acquisition phase &mdash; investors must evaluate the specific target company alongside the searcher.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Benefits for Investors</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Increase conviction bets:</strong> Deploy more capital into the deals you believe in most. Concentrate portfolio in highest-quality opportunities.</li>
          <li><strong>No additional fees:</strong> Co-investment capital typically has no management fees or carry, improving net returns vs. fund-level investment.</li>
          <li><strong>Deal-specific underwriting:</strong> Unlike search-phase commitment, co-investment allows evaluation of the specific business being acquired.</li>
          <li><strong>Portfolio construction:</strong> Co-investment allows investors to adjust portfolio weighting based on deal quality rather than fixed allocations.</li>
          <li><strong>Relationship deepening:</strong> Larger investment positions often lead to board seats and deeper involvement in value creation.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Benefits for Searchers</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Access to capital:</strong> Co-investment bridges the gap between pro rata capacity and total equity needed for larger acquisitions.</li>
          <li><strong>Speed of execution:</strong> Existing investor relationships enable faster capital raising vs. approaching new investors for each deal.</li>
          <li><strong>Aligned investors:</strong> Co-investors have already demonstrated confidence in the searcher and the search fund model.</li>
          <li><strong>Larger deal access:</strong> Co-investment capacity allows searchers to pursue larger, higher-quality targets.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Decision Framework for Investors</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li>Evaluate the target business independently: financials, market position, growth potential, and risk factors</li>
          <li>Assess the searcher&apos;s operating plan: is it realistic? Does the searcher have the skills to execute?</li>
          <li>Review the deal terms: valuation, leverage, structure, and downside protection</li>
          <li>Consider portfolio impact: does this co-investment create excessive concentration in one deal or sector?</li>
          <li>Evaluate the investor syndicate: who else is co-investing? Experienced co-investors provide validation.</li>
          <li>Determine your maximum comfortable loss: invest only what you can afford to lose entirely</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Co-investment allows investors to increase exposure to their highest-conviction search fund deals above pro rata commitments</li>
          <li>Co-investment typically has no management fees or carry, improving net returns compared to fund-level investment</li>
          <li>Evaluate co-investment opportunities based on the specific target business, not just confidence in the searcher</li>
          <li>Co-investment bridges capital gaps for searchers pursuing larger acquisitions and enables faster deal execution</li>
          <li>Monitor portfolio concentration &mdash; large co-investments can create excessive exposure to individual deals or sectors</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/portfolio-construction-search-fund" className="text-apple-accent hover:underline">Portfolio Construction</Link></li>
        <li><Link href="/learn/evaluate-searcher" className="text-apple-accent hover:underline">How to Evaluate a Searcher</Link></li>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns</Link></li>
        <li><Link href="/learn/finding-investors" className="text-apple-accent hover:underline">Finding Investors</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study: Co-Investment Patterns</em> (2024)</li>
        <li>Institutional Limited Partners Association, <em>Co-Investment Best Practices</em> (2024)</li>
        <li>Search Fund Partners, <em>Co-Investment Decision Framework</em> (2024)</li>
      </ul>
    </article>
  );
}
