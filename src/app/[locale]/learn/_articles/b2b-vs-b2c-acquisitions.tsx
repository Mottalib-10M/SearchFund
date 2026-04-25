import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function B2BVsB2CAcquisitionsArticle() {
  return (
    <article>
      <h1 className={h1Class}>B2B vs. B2C Acquisitions: Key Differences</h1>
      <div className={bodyClass}>
        <p>The distinction between business-to-business (B2B) and business-to-consumer (B2C) companies is one of the most fundamental factors in acquisition analysis. B2B and B2C businesses differ in revenue predictability, customer concentration, sales cycles, marketing channels, and operational complexity. Understanding these differences helps search fund entrepreneurs evaluate targets more effectively and identify which model aligns with their skills and risk tolerance.</p>
      </div>

      <h2 className={h2Class}>Revenue &amp; Cash Flow Differences</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>B2B revenue:</strong> Contracts, recurring agreements, and purchase orders create predictable, forecastable revenue. Longer sales cycles but higher lifetime value.</li>
          <li><strong>B2C revenue:</strong> Transaction-driven, influenced by marketing spend, seasonality, and consumer sentiment. Higher volume, lower predictability.</li>
          <li><strong>B2B pricing:</strong> Negotiated pricing, volume discounts, and long-term agreements. Less price sensitivity but longer procurement processes.</li>
          <li><strong>B2C pricing:</strong> Market-driven pricing with direct competition. More price sensitivity but faster purchasing decisions.</li>
          <li><strong>B2B margins:</strong> Typically higher gross margins (40-70%) due to relationship-based selling and customized solutions.</li>
          <li><strong>B2C margins:</strong> Variable margins depending on industry. Retail (20-40%), services (40-60%), digital (60-80%).</li>
        </ul>
      </div>

      <h2 className={h2Class}>Customer Dynamics</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>B2B concentration:</strong> Fewer customers with larger accounts. Top 10 customers often represent 40-80% of revenue. Concentration risk is the primary concern.</li>
          <li><strong>B2C diversification:</strong> Hundreds or thousands of customers. No single customer is material. Lower concentration risk but harder to predict individual behavior.</li>
          <li><strong>B2B switching costs:</strong> High switching costs due to integration, training, and relationship depth. Annual churn rates of 5-15%.</li>
          <li><strong>B2C switching costs:</strong> Low switching costs for most consumer businesses. Churn rates of 20-50%+ annually without strong brand loyalty.</li>
          <li><strong>B2B relationships:</strong> Personal relationships, account management, and trust drive retention. Relationship continuity during ownership transition is critical.</li>
          <li><strong>B2C relationships:</strong> Brand, convenience, and price drive retention. Less dependent on personal relationships.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Operational Differences</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>B2B sales:</strong> Consultative selling with longer cycles (weeks to months). Requires skilled salespeople and relationship management.</li>
          <li><strong>B2C marketing:</strong> Marketing-driven customer acquisition. Digital advertising, SEO, social media, and brand building.</li>
          <li><strong>B2B complexity:</strong> Customized solutions, complex implementations, and ongoing support. Higher operational complexity per customer.</li>
          <li><strong>B2C scale:</strong> Standardized products/services delivered at volume. Operational efficiency and systems are key.</li>
          <li><strong>B2B staffing:</strong> Higher-skilled employees for sales, implementation, and account management. Higher labor costs but fewer staff.</li>
          <li><strong>B2C staffing:</strong> Often larger teams with more frontline workers. Training and turnover management are key challenges.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Which Is Better for ETA?</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Search funds prefer B2B:</strong> 70%+ of search fund acquisitions are B2B businesses. Predictable revenue, higher margins, and relationship-based retention align with ETA strengths.</li>
          <li><strong>B2B risk:</strong> Customer concentration is the biggest risk. Losing one major client can devastate a small B2B company.</li>
          <li><strong>B2C opportunity:</strong> B2C businesses with recurring revenue models (subscriptions, memberships, maintenance contracts) combine B2C scale with B2B predictability.</li>
          <li><strong>Hybrid models:</strong> Many attractive businesses serve both B2B and B2C customers (e.g., pest control, HVAC, IT services).</li>
          <li><strong>Skills match:</strong> MBA graduates and corporate professionals typically have stronger B2B skills (sales, relationship management, strategic thinking).</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>B2B businesses offer more predictable revenue, higher margins, and stronger retention but carry customer concentration risk</li>
          <li>B2C businesses provide customer diversification and scale but face higher churn, marketing costs, and price sensitivity</li>
          <li>70%+ of search fund acquisitions target B2B businesses for their revenue predictability and relationship-based moats</li>
          <li>B2C businesses with recurring revenue models (subscriptions, contracts) offer the best of both worlds</li>
          <li>Customer concentration analysis is the single most important due diligence step for B2B acquisitions</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">Recurring Revenue Businesses</Link></li>
        <li><Link href="/learn/ideal-acquisition-target" className="text-apple-accent hover:underline">Defining Your Ideal Acquisition Target</Link></li>
        <li><Link href="/learn/industry-selection-framework" className="text-apple-accent hover:underline">Service vs. Product Businesses</Link></li>
        <li><Link href="/learn/asset-light-vs-asset-heavy" className="text-apple-accent hover:underline">Asset-Light vs. Asset-Heavy</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>Why do over 70% of search fund acquisitions target B2B businesses?</h3>
      <div className={bodyClass}>
        <p>Search fund entrepreneurs favor B2B businesses because they offer more predictable revenue, higher margins, and stronger relationship-based retention, all of which reduce post-acquisition risk. B2B companies typically have contracts or purchase orders creating forecastable revenue, annual churn rates of 5-15% (vs. 20-50%+ for B2C), and higher gross margins of 40-70%. According to Stanford GSB&rsquo;s search fund studies, MBA graduates and corporate professionals also tend to have stronger B2B skills in consultative selling, relationship management, and strategic thinking, which aligns well with B2B operating requirements.</p>
      </div>

      <h3 className={h3Class}>What is the biggest risk when acquiring a B2B company?</h3>
      <div className={bodyClass}>
        <p>Customer concentration is the primary risk in B2B acquisitions. The top 10 customers in a B2B company often represent 40-80% of total revenue, making the loss of any major customer a potentially devastating event. Bain &amp; Company research shows that B2B companies with their top customer exceeding 25% of revenue are significantly more likely to experience material revenue decline during ownership transitions. Thorough <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">customer concentration analysis</Link> during due diligence, including customer interviews, contract review, and relationship mapping, is the single most important step for B2B acquisitions.</p>
      </div>

      <h3 className={h3Class}>Are there B2C businesses that work well for search fund acquisitions?</h3>
      <div className={bodyClass}>
        <p>B2C businesses with recurring revenue models, subscriptions, memberships, and maintenance contracts, combine B2C customer diversification with B2B revenue predictability and are attractive for ETA. Examples include gym memberships, pest control contracts, lawn care subscriptions, and home warranty services. McKinsey data shows that recurring-revenue B2C businesses achieve 2-3x higher valuations than transactional B2C businesses because of their predictable cash flows. Hybrid models that serve both B2B and B2C customers, such as HVAC, IT services, and pest control, offer particularly compelling acquisition opportunities.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study: Industry and Business Model Analysis</em> (2024)</li>
        <li>McKinsey, <em>B2B vs. B2C: Growth and Valuation Patterns</em> (2024)</li>
        <li>Bain &amp; Company, <em>Customer Retention in B2B Markets</em> (2024)</li>
      </ul>
    </article>
  );
}
