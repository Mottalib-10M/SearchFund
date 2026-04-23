import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function LPGuideSearchFundDDArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        The LP&rsquo;s Guide to Search Fund Due Diligence
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          For family offices, high-net-worth individuals, and
          institutional investors evaluating search fund investments,
          due diligence looks different from traditional PE or VC.
          You are underwriting a person, not a business. This guide
          provides the complete LP due diligence framework for search
          fund investing.
        </p>

        <h2 className={h2Class}>What makes search fund DD different</h2>
        <ul className={ulClass}>
          <li><strong>Person over product:</strong> At the search capital stage, there is no business to evaluate. You are investing in a person&rsquo;s ability to find, evaluate, negotiate, and operate an acquisition</li>
          <li><strong>Two-stage decision:</strong> You invest search capital ($25K&ndash;$100K), then decide whether to invest acquisition capital ($50K&ndash;$500K) once a target is identified</li>
          <li><strong>High conviction required:</strong> Each investment is illiquid for 7&ndash;10 years with no secondary market</li>
          <li><strong>Portfolio approach needed:</strong> Given the ~33% loss rate, you need 15&ndash;25 investments for diversification. See{" "}
            <Link href="/learn/portfolio-construction-search-funds" className="text-apple-accent hover:underline">
              portfolio construction guide
            </Link></li>
        </ul>

        <h2 className={h2Class}>Search capital due diligence</h2>

        <h3 className={h3Class}>1. Searcher evaluation</h3>
        <ul className={ulClass}>
          <li><strong>Full framework:</strong>{" "}
            <Link href="/learn/how-to-evaluate-searcher" className="text-apple-accent hover:underline">
              How to evaluate a searcher
            </Link>{" "}
            &mdash; track record, character, resilience, business acumen, leadership potential</li>
          <li><strong>6+ reference calls:</strong> Former managers, peers, direct reports. Ask: &ldquo;Would you invest $500K in this person?&rdquo;</li>
          <li><strong>Co-investor diligence:</strong> Which other investors are backing this searcher? Experienced search fund investors lend credibility</li>
        </ul>

        <h3 className={h3Class}>2. Search plan review</h3>
        <ul className={ulClass}>
          <li><strong>Acquisition thesis:</strong> Does the searcher have a clear{" "}
            <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
              thesis
            </Link>{" "}
            with defined criteria? Or are they &ldquo;open to anything?&rdquo;</li>
          <li><strong>Deal sourcing strategy:</strong> Balanced approach (brokers + direct outreach + marketplaces)? See{" "}
            <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
              deal sourcing strategies
            </Link></li>
          <li><strong>Geographic focus:</strong> Is the search area realistic? Too narrow limits deal flow; too broad reduces depth</li>
          <li><strong>Timeline and milestones:</strong> Realistic 18&ndash;24 month search plan with measurable KPIs</li>
        </ul>

        <h3 className={h3Class}>3. Legal terms</h3>
        <ul className={ulClass}>
          <li><strong>Step-up equity:</strong> Standard is 20&ndash;25% for the searcher. Evaluate whether the structure incentivizes good behavior</li>
          <li><strong>Vesting schedule:</strong> Typically 3&ndash;5 years. Longer vesting = better alignment</li>
          <li><strong>Board rights:</strong> Investor board seats and governance provisions</li>
          <li><strong>Follow-on rights:</strong> Pro-rata rights to invest at acquisition. Ensure you can maintain your ownership percentage</li>
        </ul>

        <h2 className={h2Class}>Acquisition capital due diligence</h2>

        <h3 className={h3Class}>4. Target business evaluation</h3>
        <ul className={ulClass}>
          <li><strong>Quality of Earnings:</strong> Independent{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              QoE analysis
            </Link>{" "}
            is table stakes. Review add-backs critically</li>
          <li><strong>Valuation reasonableness:</strong> Is the{" "}
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
              valuation
            </Link>{" "}
            in line with comparable transactions? Watch for competitive bidding inflation</li>
          <li><strong>Deal structure:</strong> Leverage level, debt terms, and equity structure. See{" "}
            <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
              capital stack guide
            </Link></li>
          <li><strong>Risk assessment:</strong> Key risk factors including{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration
            </Link>,{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              key person risk
            </Link>, and{" "}
            <Link href="/learn/red-flags-due-diligence" className="text-apple-accent hover:underline">
              red flags
            </Link></li>
        </ul>

        <h3 className={h3Class}>5. Post-acquisition plan</h3>
        <ul className={ulClass}>
          <li><strong>100-day plan:</strong> Does the searcher have a clear{" "}
            <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
              first 100 days
            </Link>{" "}
            plan?</li>
          <li><strong>Value creation thesis:</strong> How will they grow the business? Is it realistic and specific?</li>
          <li><strong>Board composition:</strong> Who will serve on the board? Industry expertise and operating experience are critical</li>
          <li><strong>Reporting cadence:</strong> Monthly financial reporting, quarterly board meetings, and ad-hoc communication for material events</li>
        </ul>

        <h2 className={h2Class}>Risk framework for LPs</h2>
        <ul className={ulClass}>
          <li><strong>Full risk analysis:</strong>{" "}
            <Link href="/learn/risk-factors-search-fund-investing" className="text-apple-accent hover:underline">
              Complete risk factors guide
            </Link></li>
          <li><strong>Loss rate:</strong> ~33% of investments result in partial or total loss</li>
          <li><strong>Illiquidity:</strong> 7&ndash;10 year lockup with no secondary market</li>
          <li><strong>Concentration:</strong> Each investment is a single-company bet. Portfolio construction mitigates this</li>
          <li><strong>Key insight:</strong> Despite the risks, the asset class generates 35%+ median IRR because the winners win big (3&ndash;10x+)</li>
        </ul>

        <p>
          For more on{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            investor economics
          </Link>,{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">
            why invest in search funds
          </Link>, and{" "}
          <Link href="/learn/search-fund-statistics" className="text-apple-accent hover:underline">
            search fund data
          </Link>, see our investor guides.
        </p>
      </div>
    </article>
  );
}
