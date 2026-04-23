import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function AmazonFBAAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring an Amazon FBA Business</h1>
      <div className={bodyClass}>
        <p>Amazon FBA (Fulfillment by Amazon) businesses have become a popular acquisition target, with aggregators and individual buyers spending billions annually to acquire Amazon brands. For search fund entrepreneurs, FBA businesses offer the appeal of high margins, scalable operations, and Amazon&apos;s massive distribution infrastructure. However, they also come with unique risks: platform dependency, margin compression, and intense competition.</p>
      </div>

      <h2 className={h2Class}>Why Consider an FBA Acquisition</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Built-in distribution:</strong> Amazon handles fulfillment, shipping, customer service, and returns</li>
          <li><strong>High margins:</strong> Well-run FBA brands achieve 20&ndash;40% net margins after all Amazon fees</li>
          <li><strong>Low overhead:</strong> No warehouse, no employees for fulfillment &mdash; Amazon handles it all</li>
          <li><strong>Scalable:</strong> Revenue can scale quickly without proportional cost increases</li>
          <li><strong>Data-rich:</strong> Detailed analytics on sales, reviews, search rankings, and customer behavior</li>
        </ul>
      </div>

      <h2 className={h2Class}>Risks &amp; Challenges</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Platform dependency:</strong> Amazon can change policies, raise fees, or suspend your account at any time</li>
          <li><strong>Margin compression:</strong> Amazon fees have increased steadily. Current all-in fees are typically 30&ndash;45% of sale price.</li>
          <li><strong>Competition:</strong> Low barriers to entry mean copycat products can appear quickly</li>
          <li><strong>Review vulnerability:</strong> Negative reviews or review manipulation by competitors can destroy sales</li>
          <li><strong>Aggregator bust:</strong> Many FBA aggregators (Thrasio model) have struggled, creating cautionary tales</li>
          <li><strong>Supply chain risk:</strong> Most FBA products are manufactured in China. Tariffs, shipping costs, and quality control are ongoing challenges.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence for FBA Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Seller Central access:</strong> Full access to the seller account to verify revenue, margins, and metrics</li>
          <li><strong>Revenue trend:</strong> Monthly revenue for 24+ months. Beware of recent declines or heavy seasonality.</li>
          <li><strong>Product concentration:</strong> How many SKUs? If one product is 70%+ of revenue, that&apos;s a risk.</li>
          <li><strong>Review quality:</strong> Average rating (4.0+ minimum), review count, and review velocity</li>
          <li><strong>Search ranking:</strong> Organic ranking for key terms. PPC dependency ratio (organic vs. paid sales).</li>
          <li><strong>Supplier relationships:</strong> Contracts, pricing, MOQs, and backup suppliers</li>
          <li><strong>Brand registry:</strong> Is the brand registered with Amazon Brand Registry? Trademark registered?</li>
          <li><strong>Account health:</strong> Any policy violations, IP complaints, or listing suspensions?</li>
        </ul>
      </div>

      <h2 className={h2Class}>Valuation</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Typical multiples:</strong> 2.5&ndash;4.5x annual SDE (seller&apos;s discretionary earnings) for FBA businesses</li>
          <li><strong>Premium factors:</strong> Multiple products, strong brand, growing trend, 4.5+ star reviews, diversified traffic</li>
          <li><strong>Discount factors:</strong> Single product dependency, declining trend, platform dependency, Chinese sourcing risk</li>
          <li><strong>Market platforms:</strong> Empire Flippers, Quiet Light, FE International, and Flippa for deal sourcing</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>FBA businesses offer high margins and scalability but carry significant platform dependency risk</li>
          <li>Focus on brands with multiple products, strong reviews (4.0+), and growing organic search rankings</li>
          <li>Verify everything through Seller Central access &mdash; don&apos;t rely on seller-provided screenshots</li>
          <li>Typical valuations: 2.5&ndash;4.5x annual SDE. Premium for diversified, growing brands with strong IP.</li>
          <li>Plan for Amazon fee increases and consider diversifying to DTC, Walmart, and other channels post-acquisition</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/ecommerce-acquisition" className="text-apple-accent hover:underline">Acquiring an E-commerce Business</Link></li>
        <li><Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">Acquiring a SaaS Business</Link></li>
        <li><Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">Due Diligence Checklist</Link></li>
        <li><Link href="/learn/supply-chain-optimization" className="text-apple-accent hover:underline">Supply Chain Optimization</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Marketplace Pulse, <em>Amazon Third-Party Seller Trends</em> (2024)</li>
        <li>Empire Flippers, <em>State of the Industry: FBA Acquisitions</em> (2024)</li>
        <li>Jungle Scout, <em>State of the Amazon Seller</em> (2024)</li>
      </ul>
    </article>
  );
}
