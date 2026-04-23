import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function PricingOptimizationArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Pricing Optimization: The Fastest Path to Profit Growth
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Pricing is the single most powerful lever for EBITDA growth
          post-acquisition. A 5% price increase drops almost entirely to
          the bottom line, with 90%+ flow-through to EBITDA. Most SME
          owners haven&rsquo;t raised prices strategically in years.
          This guide covers how to identify pricing opportunities,
          implement increases, and build pricing discipline in your
          acquired company.
        </p>

        <h2 className={h2Class}>Why pricing is the #1 lever</h2>
        <ul className={ulClass}>
          <li><strong>Direct EBITDA impact:</strong> A $5M revenue business raising prices 5% generates $250K incremental revenue. With 90%+ drop-through, that&rsquo;s $225K+ to EBITDA</li>
          <li><strong>No additional cost:</strong> Unlike revenue growth through new customers (which requires sales/marketing spend), price increases on existing customers have near-zero incremental cost</li>
          <li><strong>Valuation multiplier:</strong> At a 5x exit multiple, $225K of EBITDA improvement = $1.1M in enterprise value creation</li>
          <li><strong>Underpricing is endemic:</strong> Most SME owners price based on historical rates, not market value. They fear losing customers but rarely test this assumption</li>
        </ul>

        <h2 className={h2Class}>Diagnosing pricing opportunity</h2>

        <h3 className={h3Class}>Signs you&rsquo;re underpriced</h3>
        <ul className={ulClass}>
          <li>No price increase in 2+ years (inflation alone justifies 3&ndash;5% annually)</li>
          <li>Win rate above 80% on proposals/bids (you&rsquo;re leaving money on the table)</li>
          <li>Customers never push back on pricing (no resistance = too cheap)</li>
          <li>Gross margins below industry benchmarks</li>
          <li>Competitors are charging 10&ndash;30% more for comparable services</li>
          <li>Customer churn below 5% (extremely sticky customers can absorb price increases)</li>
        </ul>

        <h3 className={h3Class}>Pricing analysis framework</h3>
        <ol className={olClass}>
          <li><strong>Competitive benchmarking:</strong> Survey 5&ndash;10 competitor prices. Mystery shop if needed. Know where you stand</li>
          <li><strong>Customer profitability analysis:</strong> Rank customers by margin. The bottom 20% may be unprofitable after accounting for service costs</li>
          <li><strong>Price sensitivity testing:</strong> Which customers/segments are most and least price-sensitive?</li>
          <li><strong>Value perception audit:</strong> What do customers value most about your service? Price according to value delivered, not cost incurred</li>
        </ol>

        <h2 className={h2Class}>Implementation strategies</h2>

        <h3 className={h3Class}>Across-the-board increase (simplest)</h3>
        <ul className={ulClass}>
          <li>Raise all prices 3&ndash;8% simultaneously</li>
          <li>Best for: commodity services, menu-based pricing, annual contract renewals</li>
          <li>Communication: &ldquo;Effective [date], our prices will increase by [X]% to reflect increased costs of labor, materials, and continued investment in service quality&rdquo;</li>
          <li>Expected churn: 0&ndash;3% for increases under 5%. If you lose zero customers, you didn&rsquo;t raise enough</li>
        </ul>

        <h3 className={h3Class}>Tiered/segmented increase (most effective)</h3>
        <ul className={ulClass}>
          <li>Different increases for different customer segments based on profitability, price sensitivity, and strategic value</li>
          <li>Premium customers with low alternatives: 8&ndash;15% increase</li>
          <li>Core customers: 5&ndash;8% increase</li>
          <li>Price-sensitive customers: 2&ndash;4% increase or hold flat</li>
          <li>Unprofitable customers: 15&ndash;30% increase (or let them churn)</li>
        </ul>

        <h3 className={h3Class}>Value-based repricing (highest impact)</h3>
        <ul className={ulClass}>
          <li>Introduce good/better/best pricing tiers</li>
          <li>Add premium service packages at higher price points</li>
          <li>Shift from hourly/project pricing to value-based or subscription pricing</li>
          <li>Implement surge/priority pricing for urgent requests</li>
        </ul>

        <h2 className={h2Class}>Communication best practices</h2>
        <ul className={ulClass}>
          <li><strong>Give advance notice:</strong> 30&ndash;60 days for existing customers. Annual contracts: implement at renewal</li>
          <li><strong>Explain the &ldquo;why&rdquo;:</strong> Rising costs (labor, materials, insurance) and continued investment in quality</li>
          <li><strong>Don&rsquo;t apologize:</strong> &ldquo;We&rsquo;re raising prices&rdquo; is more confident than &ldquo;We&rsquo;re sorry but we have to raise prices&rdquo;</li>
          <li><strong>Pair with value:</strong> If possible, announce a small improvement alongside the increase (faster response times, extended hours, new service feature)</li>
          <li><strong>Prepare the team:</strong> Sales staff need talk tracks for customer objections. Role-play the top 5 pushback scenarios</li>
          <li><strong>Handle exceptions strategically:</strong> Have a process for exception requests. Some key accounts may need a reduced increase &mdash; decide in advance which ones</li>
        </ul>

        <h2 className={h2Class}>Ongoing pricing discipline</h2>
        <ul className={ulClass}>
          <li><strong>Annual price reviews:</strong> Review and adjust pricing every January (or at your fiscal year start)</li>
          <li><strong>Inflation floor:</strong> Minimum 3% annual increase to match cost inflation. Build escalation clauses into all contracts</li>
          <li><strong>Win/loss tracking:</strong> Monitor proposal win rates. Target 60&ndash;70% win rate. Above 80% = underpriced; below 50% = overpriced or poor qualification</li>
          <li><strong>Margin monitoring:</strong> Track gross margin by customer, product, and service line monthly. Catch margin erosion early</li>
        </ul>

        <h2 className={h2Class}>Common pricing mistakes</h2>
        <ul className={ulClass}>
          <li><strong>Waiting too long:</strong> Ownership transition is the best time to raise prices. Customers expect changes under new ownership</li>
          <li><strong>Raising too timidly:</strong> A 2% increase barely covers inflation. If you&rsquo;re underpriced by 15&ndash;20%, a 3% increase doesn&rsquo;t solve the problem</li>
          <li><strong>Grandfathering everyone:</strong> Loyal customers who haven&rsquo;t seen a price increase in 5 years are costing you the most</li>
          <li><strong>Racing to the bottom:</strong> Competing on price is a losing strategy for SMEs. Compete on quality, reliability, and relationships</li>
          <li><strong>Ignoring profitable customers:</strong> Focus pricing energy where revenue is concentrated. Don&rsquo;t spend weeks optimizing small accounts</li>
        </ul>

        <p>
          Pricing optimization is part of the broader{" "}
          <Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">
            revenue growth playbook
          </Link>.
          For the complete post-acquisition strategy, see our{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            first 100 days guide
          </Link>{" "}
          and{" "}
          <Link href="/learn/quick-wins-post-acquisition" className="text-apple-accent hover:underline">
            quick wins
          </Link>.
        </p>
      </div>
    </article>
  );
}
