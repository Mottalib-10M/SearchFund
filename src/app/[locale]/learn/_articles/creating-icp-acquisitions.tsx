import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function CreatingICPAcquisitionsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Creating Your Ideal Company Profile (ICP) for Acquisitions
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Before you begin{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            sourcing deals
          </Link>, you need a clear picture of what you&rsquo;re looking for.
          Your Ideal Company Profile (ICP) is a structured set of criteria
          that defines the type of business you want to acquire. A
          well-defined ICP keeps your search focused, helps brokers
          send you relevant deals, and prevents you from wasting months
          evaluating businesses that don&rsquo;t fit.
        </p>

        <h2 className={h2Class}>Why you need an ICP</h2>
        <ul className={ulClass}>
          <li><strong>Focus:</strong> Without an ICP, you&rsquo;ll review hundreds of irrelevant opportunities. With one, you screen out 80% of deals in under 5 minutes</li>
          <li><strong>Broker communication:</strong>{" "}
            <Link href="/learn/working-with-brokers" className="text-apple-accent hover:underline">
              Brokers
            </Link>{" "}
            need clear criteria to send you relevant deals. &ldquo;I want a good business&rdquo; is not actionable. &ldquo;I want a $1.5-$4M EBITDA B2B services company in the Southeast&rdquo; is</li>
          <li><strong>Investor alignment:</strong> Your{" "}
            <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
              investors
            </Link>{" "}
            want to know what you&rsquo;re targeting. A clear ICP builds confidence in your search process</li>
          <li><strong>Decision speed:</strong> When a new deal arrives, you can evaluate it against your ICP in minutes rather than spending days analyzing a company that doesn&rsquo;t fit</li>
        </ul>

        <h2 className={h2Class}>The 8 ICP dimensions</h2>

        <h3 className={h3Class}>1. Financial profile</h3>
        <ul className={ulClass}>
          <li><strong>Revenue range:</strong> $3M-$30M (varies by ETA model)</li>
          <li><strong>EBITDA/SDE range:</strong> $750K-$5M for most search funds; $500K-$2M for self-funded. See{" "}
            <Link href="/learn/what-size-business-buy" className="text-apple-accent hover:underline">
              what size business to buy
            </Link></li>
          <li><strong>EBITDA margins:</strong> 15%+ (ensures cash flow for debt service and reinvestment)</li>
          <li><strong>Revenue growth:</strong> Stable to growing. Declining revenue is a red flag unless it&rsquo;s a turnaround thesis</li>
          <li><strong>Enterprise value:</strong> $3M-$20M for traditional search; $1M-$5M for self-funded</li>
        </ul>

        <h3 className={h3Class}>2. Industry</h3>
        <ul className={ulClass}>
          <li>Define 2-5 target industries based on your{" "}
            <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
              search thesis
            </Link></li>
          <li>Prefer industries with: fragmentation (many small players), recurring revenue, low technology disruption risk, and{" "}
            <Link href="/learn/best-industries-search-funds" className="text-apple-accent hover:underline">
              proven ETA track record
            </Link></li>
          <li>Define &ldquo;never&rdquo; industries: restaurants, retail, construction (high volatility), agriculture, mining</li>
        </ul>

        <h3 className={h3Class}>3. Geography</h3>
        <ul className={ulClass}>
          <li><strong>Willingness to relocate:</strong> Many searchers limit geography by how far they&rsquo;ll move</li>
          <li><strong>Market size:</strong> Large metro areas have more deal flow. Rural areas have less competition</li>
          <li><strong>Remote-manageable:</strong> Some businesses (SaaS, e-commerce) can be run remotely. Most services businesses require on-site leadership</li>
        </ul>

        <h3 className={h3Class}>4. Business model</h3>
        <ul className={ulClass}>
          <li><strong>Revenue type:</strong>{" "}
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              Recurring revenue
            </Link>{" "}
            (subscriptions, contracts) is ideal. Project-based is acceptable with a strong pipeline. One-time transactions are the riskiest</li>
          <li><strong>B2B vs. B2C:</strong> B2B is generally preferred (larger contracts, more rational buyers, higher switching costs)</li>
          <li><strong>Asset-light vs. asset-heavy:</strong> Asset-light businesses have higher margins and lower capex requirements</li>
        </ul>

        <h3 className={h3Class}>5. Customer profile</h3>
        <ul className={ulClass}>
          <li><strong>Concentration:</strong> No customer above 15-20% of revenue. See{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration risk
            </Link></li>
          <li><strong>Retention:</strong> High customer retention/low churn (85%+ annual retention)</li>
          <li><strong>Contract structure:</strong> Long-term contracts or automatic renewals preferred</li>
        </ul>

        <h3 className={h3Class}>6. Seller motivation</h3>
        <ul className={ulClass}>
          <li><strong>Retirement:</strong>{" "}
            <Link href="/learn/succession-driven-acquisitions" className="text-apple-accent hover:underline">
              Succession-driven sales
            </Link>{" "}
            are the ideal scenario, motivated seller, clean business, reasonable expectations</li>
          <li><strong>Owner age:</strong> 55-70 (approaching retirement but still running the business well)</li>
          <li><strong>Transition willingness:</strong> Seller willing to stay 3-12 months for knowledge transfer</li>
        </ul>

        <h3 className={h3Class}>7. Operations</h3>
        <ul className={ulClass}>
          <li><strong>Management depth:</strong> At least one strong #2 leader below the owner. See{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              key person risk
            </Link></li>
          <li><strong>Employee count:</strong> 10-100 employees (manageable for a first-time CEO)</li>
          <li><strong>Technology dependency:</strong> Understand the{" "}
            <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
              owner dependency
            </Link>{" "}
            level</li>
        </ul>

        <h3 className={h3Class}>8. Growth potential</h3>
        <ul className={ulClass}>
          <li><strong>Organic levers:</strong>{" "}
            <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">
              Pricing optimization
            </Link>, new market entry, product/service expansion</li>
          <li><strong>Add-on potential:</strong> Is there a{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              buy-and-build
            </Link>{" "}
            opportunity?</li>
          <li><strong>Digital upside:</strong> Can{" "}
            <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">
              digital transformation
            </Link>{" "}
            drive efficiency or revenue?</li>
        </ul>

        <h2 className={h2Class}>Building your ICP: step-by-step</h2>
        <ol className={olClass}>
          <li><strong>Define must-haves:</strong> The 3-5 criteria that are non-negotiable (e.g., $1M+ EBITDA, recurring revenue, willing to relocate to specific states)</li>
          <li><strong>Define nice-to-haves:</strong> Preferences that improve the deal but aren&rsquo;t required</li>
          <li><strong>Define deal-breakers:</strong> Characteristics that eliminate a business from consideration regardless of other attributes</li>
          <li><strong>Test against real deals:</strong> Apply your ICP to 20-30 listings on BizBuySell or broker CIMs. If nothing passes, your criteria are too narrow</li>
          <li><strong>Iterate:</strong> Your ICP will evolve as you see more deals. The best ICP at month 12 is different from month 1</li>
        </ol>

        <h2 className={h2Class}>Common ICP mistakes</h2>
        <ul className={ulClass}>
          <li><strong>Too narrow too early:</strong> Requiring a specific sub-industry in a specific city with specific margins eliminates 99% of deal flow</li>
          <li><strong>Ignoring deal-breakers:</strong> Falling in love with a business that violates your core criteria leads to bad acquisitions</li>
          <li><strong>Not sharing with brokers:</strong> Your ICP is a marketing document. Share it with every{" "}
            <Link href="/learn/working-with-brokers" className="text-apple-accent hover:underline">
              broker
            </Link>{" "}
            and referral source</li>
          <li><strong>Never updating:</strong> Revisit your ICP quarterly as you learn what&rsquo;s available and what excites you</li>
        </ul>

        <p>
          Your ICP is the foundation of effective{" "}
          <Link href="/learn/acquisition-target-screening" className="text-apple-accent hover:underline">
            target screening
          </Link>.
          For the full search framework, see our{" "}
          <Link href="/learn/how-to-buy-small-business" className="text-apple-accent hover:underline">
            complete acquisition guide
          </Link>.
          You may also want to review{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            self-funded vs. traditional search fund models
          </Link>{" "}
          to calibrate deal size expectations and our{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence checklist
          </Link>{" "}
          for evaluating targets that pass your ICP filter.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>How narrow should my ICP be when starting a search?</h3>
        <p>
          Start broad and narrow over time. In the first 3 months, define
          3-5 must-haves (e.g., $1M+ EBITDA, B2B, and a geographic range)
          but leave other dimensions flexible. After reviewing 50-100
          opportunities, you will develop sharper intuition about which
          industries, business models, and seller profiles excite you.
          Revisit and tighten your ICP quarterly.
        </p>

        <h3 className={h3Class}>Should I share my ICP with brokers?</h3>
        <p>
          Absolutely. Your ICP is a marketing document. Send a one-page
          summary to every{" "}
          <Link href="/learn/working-with-brokers" className="text-apple-accent hover:underline">
            broker
          </Link>{" "}
          you meet, along with a brief personal introduction. Brokers
          receive hundreds of buyer inquiries; a clear, specific ICP makes
          you memorable and ensures they send you relevant deal flow rather
          than everything on their list.
        </p>

        <h3 className={h3Class}>Can I have multiple ICPs for different deal types?</h3>
        <p>
          Yes, but limit yourself to two or three at most. Some searchers
          maintain a primary ICP for their ideal acquisition and a secondary
          one for opportunistic deals (e.g., a distressed asset at a steep
          discount). Each ICP should have its own clear must-haves and
          deal-breakers so you can evaluate opportunities quickly without
          conflating criteria.
        </p>
      </div>
    </article>
  );
}
