import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function RiskFactorsSearchFundArticle() {
  return (
    <article>
      <h1 className={h1Class}>Risk Factors in Search Fund Investing</h1>
      <div className={bodyClass}>
        <p>Search fund investing offers attractive risk-adjusted returns, but investors must understand the specific risks inherent in the model. From search-phase failure to post-acquisition operational challenges, each stage of the search fund lifecycle presents distinct risks. This guide catalogs the major risk factors, their likelihood and impact, and mitigation strategies that experienced search fund investors employ.</p>
      </div>

      <h2 className={h2Class}>Search Phase Risks</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>No acquisition (25% probability):</strong> ~25% of traditional search funds do not complete an acquisition. Search capital is partially or fully lost.</li>
          <li><strong>Overpayment:</strong> Pressure to close after 18+ months of searching can lead to paying above fair value. &ldquo;Deal fatigue&rdquo; impairs judgment.</li>
          <li><strong>Criteria drift:</strong> Searchers who broaden criteria excessively may acquire suboptimal businesses outside their competence.</li>
          <li><strong>Incomplete due diligence:</strong> Time pressure and emotional attachment to a deal can lead to insufficient due diligence.</li>
          <li><strong>Search capital depletion:</strong> Running out of search capital before finding a suitable acquisition. Budget management during search is critical.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Acquisition Risks</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Customer concentration:</strong> Top customer representing 20%+ of revenue. Loss of one major customer can devastate the business.</li>
          <li><strong>Key person dependence:</strong> Business value tied to the departing owner. Customers, suppliers, or employees may leave with the seller.</li>
          <li><strong>Undisclosed liabilities:</strong> Tax issues, pending litigation, environmental contamination, or off-balance-sheet obligations discovered post-closing.</li>
          <li><strong>Quality of earnings:</strong> Reported EBITDA may overstate sustainable earnings due to add-backs, one-time revenue, or unsustainable cost cuts.</li>
          <li><strong>Integration failure:</strong> New owner fails to maintain culture, customer relationships, or operational standards during ownership transition.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Operational Risks</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Operator performance:</strong> The searcher-CEO may lack the skills or temperament to run the acquired business effectively.</li>
          <li><strong>Employee turnover:</strong> Key employees departing after ownership change. Institutional knowledge and customer relationships leave with them.</li>
          <li><strong>Market deterioration:</strong> Industry downturn, competitive disruption, or regulatory change that reduces revenue or margins.</li>
          <li><strong>Use risk:</strong> Debt service during revenue decline. Covenant violations triggering lender intervention or default.</li>
          <li><strong>Capital needs:</strong> Unexpected capital expenditure requirements (equipment failure, technology obsolescence, facility issues).</li>
          <li><strong>Growth stagnation:</strong> Inability to grow beyond the seller&apos;s baseline. Organic growth proves harder than projected.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Mitigation Strategies</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Searcher selection:</strong> Invest in searchers with strong leadership, resilience, coachability, and relevant experience.</li>
          <li><strong>Portfolio diversification:</strong> Build a portfolio of 20&ndash;30+ search fund investments across vintages and geographies.</li>
          <li><strong>Active board involvement:</strong> Provide governance oversight, mentorship, and crisis support through board participation.</li>
          <li><strong>Conservative use:</strong> Support reasonable debt levels (2&ndash;3x EBITDA) with covenant headroom. Avoid over-using.</li>
          <li><strong>Thorough due diligence:</strong> Insist on quality of earnings, customer interviews, employee assessments, and thorough legal review.</li>
          <li><strong>Transition planning:</strong> Require seller transition periods, employee retention plans, and customer relationship transfer protocols.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>~25% of search funds fail to acquire a business, making search-phase risk the most quantifiable loss scenario</li>
          <li>Customer concentration and key person dependence are the two highest-impact acquisition risks</li>
          <li>Operator performance is the single most important post-acquisition risk factor &mdash; invest in the best people</li>
          <li>Portfolio diversification (20&ndash;30+ investments) is the most effective risk mitigation strategy</li>
          <li>Active board involvement, conservative use, and thorough due diligence significantly reduce downside risk</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/evaluate-searcher" className="text-apple-accent hover:underline">How to Evaluate a Searcher</Link></li>
        <li><Link href="/learn/portfolio-construction-search-fund" className="text-apple-accent hover:underline">Portfolio Construction</Link></li>
        <li><Link href="/learn/red-flags-due-diligence" className="text-apple-accent hover:underline">Due Diligence Red Flags</Link></li>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>What percentage of search funds fail to complete an acquisition?</h3>
        <p>
          Approximately 25% of traditional search funds do not complete an acquisition, resulting in partial or full loss of search-phase capital. According to the Stanford GSB 2024 Search Fund Study, the primary reasons for search failure include inability to find a suitable target within the search timeline (typically 18&ndash;24 months), failure to agree on valuation with sellers, loss of deals during due diligence, and financing challenges. Self-funded searchers have different failure dynamics &mdash; they face lower search capital at risk but must manage the opportunity cost of their time without investor backing. The IESE Business School&rsquo;s failure analysis shows that searchers who narrow their industry focus early, build strong broker relationships, and maintain disciplined acquisition criteria have significantly higher completion rates (approximately 85%) than those who search broadly across industries (approximately 65%).
        </p>

        <h3 className={h3Class}>What is the most effective risk mitigation strategy for search fund investors?</h3>
        <p>
          Portfolio diversification is the most effective risk mitigation strategy. According to Stanford GSB data, investors with portfolios of 20&ndash;30+ search fund investments across multiple vintages, geographies, and industries consistently achieve returns that approximate the asset class&rsquo;s historical performance (2&ndash;3x net MOIC, 20&ndash;30% gross IRR), while investors with concentrated portfolios of fewer than 10 investments face high variance in outcomes. The second most impactful mitigation strategy is active board involvement &mdash; Search Fund Partners&rsquo; research shows that investors who serve on portfolio company boards and provide regular mentorship, governance oversight, and crisis support achieve 30&ndash;40% better returns than passive investors. Conservative use (2&ndash;3x EBITDA total debt with adequate covenant headroom) and thorough due diligence are also essential.
        </p>

        <h3 className={h3Class}>What are the warning signs that a search fund acquisition is in trouble?</h3>
        <p>
          The earliest warning signs typically include missing revenue or EBITDA targets by more than 10% in the first two quarters post-acquisition, key employee departures (especially in customer-facing or operational leadership roles), loss of one or more top-10 customers, and the CEO becoming overwhelmed by operational demands while neglecting strategic leadership. According to the IESE Business School&rsquo;s search fund failure analysis, the two most common post-acquisition failure modes are operator performance issues (the CEO lacks the skills or temperament to run the business effectively) and revenue decline that strains debt service coverage. Stanford GSB research confirms that early intervention by the board &mdash; ideally within the first 90 days of performance deterioration &mdash; dramatically improves outcomes, with board-initiated corrective actions (coaching, operational support, strategic pivots) resolving approximately 60% of early-stage performance issues before they become existential.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study: Risk and Return Analysis</em> (2024)</li>
        <li>IESE Business School, <em>Search Fund Failure Analysis</em> (2024)</li>
        <li>Search Fund Partners, <em>Risk Management in Search Fund Portfolios</em> (2024)</li>
      </ul>
    </article>
  );
}
