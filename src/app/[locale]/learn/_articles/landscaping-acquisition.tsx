import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function LandscapingAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Landscaping &amp; Lawn Care Business</h1>
      <div className={bodyClass}>
        <p>Landscaping and lawn care is one of the largest and most fragmented segments within <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">home services</Link>. The $130B+ US market includes over 600,000 businesses, the vast majority owner-operated with fewer than 10 employees. For search fund entrepreneurs, landscaping offers a clear path to building recurring revenue through maintenance contracts, seasonal revenue diversification, and multi-location expansion.</p>
      </div>

      <h2 className={h2Class}>Why Landscaping Is Attractive for ETA</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Highly recurring:</strong> Weekly mowing, monthly maintenance, and seasonal services create predictable revenue streams</li>
          <li><strong>Low barriers to entry, high barriers to scale:</strong> Anyone can start a lawn care business, but building a professional, multi-crew operation is hard &mdash; that&apos;s your opportunity</li>
          <li><strong>Fragmented:</strong> The top 50 companies have less than 5% market share. Enormous room for consolidation.</li>
          <li><strong>Subscription-friendly:</strong> Monthly contracts are the norm in commercial landscaping and becoming standard in residential</li>
          <li><strong>Revenue diversification:</strong> Snow removal (winter), holiday lighting, irrigation, hardscaping, and tree services offset seasonality</li>
          <li><strong>Labor leverage:</strong> Well-managed companies with training programs and H-2B visa expertise have a massive competitive advantage</li>
        </ul>
      </div>

      <h2 className={h2Class}>Types of Landscaping Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Maintenance-focused:</strong> Weekly/biweekly mowing, trimming, and property upkeep. Highest recurring revenue. Best for ETA.</li>
          <li><strong>Design/build:</strong> Landscape design, installation, hardscaping. Higher ticket, project-based. Lower predictability.</li>
          <li><strong>Commercial maintenance:</strong> HOAs, office parks, municipalities. Larger contracts, bid-driven, lower margins.</li>
          <li><strong>Specialty:</strong> Tree care, irrigation, turf management, snow removal. Can be high-margin add-ons.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Focus Areas</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Contract base:</strong> How many recurring maintenance contracts? What&apos;s the retention rate? Annual contract value?</li>
          <li><strong>Revenue mix:</strong> Maintenance vs. project/design-build. Higher maintenance % = more predictable.</li>
          <li><strong>Customer concentration:</strong> If one HOA or commercial client represents 20%+ of revenue, that&apos;s a risk.</li>
          <li><strong>Labor force:</strong> Crew size, tenure, immigration status (H-2B workers), and seasonal labor access</li>
          <li><strong>Equipment:</strong> Trucks, mowers, trailers, hardscaping equipment. Age and maintenance records are critical.</li>
          <li><strong>Seasonality:</strong> Revenue distribution by quarter. Strong businesses have 4-season revenue (snow, holiday lighting).</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Playbook</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Add year-round services:</strong> Snow removal, holiday lighting, and irrigation winterization extend the revenue season</li>
          <li><strong>Raise prices:</strong> Many landscapers haven&apos;t raised prices in years. A 5&ndash;10% increase typically has minimal customer churn.</li>
          <li><strong>Route density:</strong> Optimize crew routes to maximize properties per day. GPS tracking and routing software help.</li>
          <li><strong>Upsell existing customers:</strong> Fertilization, aeration, pest control, and seasonal color add revenue without new customer acquisition</li>
          <li><strong>Technology:</strong> Implement Aspire, LMN, or Service Autopilot for estimating, scheduling, and job costing</li>
          <li><strong>Commercial expansion:</strong> Add HOA and commercial accounts for larger, more stable contracts</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Landscaping offers highly recurring revenue through maintenance contracts and natural seasonal diversification</li>
          <li>Target maintenance-focused businesses with strong contract bases and multi-season revenue</li>
          <li>Labor management (recruitment, training, H-2B visa programs) is the #1 competitive advantage</li>
          <li>Route density optimization and price increases are the fastest paths to margin improvement</li>
          <li>Year-round services (snow, lighting, irrigation) transform a seasonal business into a 12-month operation</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">Acquiring a Home Services Business</Link></li>
        <li><Link href="/learn/acquiring-pest-control-business" className="text-apple-accent hover:underline">Acquiring a Pest Control Business</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
        <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic Expansion</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>NALP, <em>Landscape Industry Market Report</em> (2024)</li>
        <li>IBISWorld, <em>Landscaping Services in the US</em> (2024)</li>
        <li>Aspire Software, <em>Landscape Business Benchmarking Report</em> (2024)</li>
      </ul>
    </article>
  );
}
