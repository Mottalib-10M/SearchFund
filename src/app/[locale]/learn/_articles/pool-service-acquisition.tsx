import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function PoolServiceAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Pool Service &amp; Maintenance Business</h1>
      <div className={bodyClass}>
        <p>Pool service businesses are among the most attractive route-based, recurring revenue businesses available for acquisition. With 10.7 million residential pools and 300,000+ commercial pools in the US, the pool maintenance industry generates $6B+ annually. For search fund entrepreneurs, pool service offers weekly recurring revenue from maintenance routes, high customer retention, and a <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">proven consolidation opportunity</Link> in a market dominated by thousands of small, independent operators.</p>
      </div>

      <h2 className={h2Class}>Types of Pool Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Residential maintenance:</strong> Weekly cleaning, chemical balancing, and equipment checks. $100&ndash;250/month per pool. The core recurring revenue model.</li>
          <li><strong>Commercial maintenance:</strong> Hotels, apartments, HOAs, water parks. Higher volume, longer contracts, tighter regulations.</li>
          <li><strong>Repair &amp; equipment:</strong> Pump, filter, heater, and automation system repairs. Higher ticket, variable demand.</li>
          <li><strong>Renovation &amp; remodeling:</strong> Pool resurfacing, tile replacement, and equipment upgrades. Project-based, higher revenue per job ($5K&ndash;50K+).</li>
          <li><strong>Pool construction:</strong> New pool builds. Capital-intensive, project-based. $50K&ndash;200K+ per project.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Pool Service Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> Weekly maintenance creates 80&ndash;90% monthly recurring revenue with annual contracts</li>
          <li><strong>High retention:</strong> Customer retention rates of 90%+. Switching pool service providers is rare once trust is established.</li>
          <li><strong>Route density:</strong> More pools per route = higher margins. Similar economics to <Link href="/learn/waste-management-acquisition" className="text-apple-accent hover:underline">waste management</Link>.</li>
          <li><strong>Low capex:</strong> Truck, chemicals, and basic equipment. $20K&ndash;40K to equip a route technician.</li>
          <li><strong>Fragmented:</strong> Thousands of independent operators, most with fewer than 100 accounts. Ideal for roll-up.</li>
          <li><strong>Growing market:</strong> 100,000+ new pools built annually. COVID accelerated pool installations significantly.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Account count &amp; density:</strong> Total maintenance accounts, geographic concentration, and route efficiency</li>
          <li><strong>Revenue per account:</strong> Monthly revenue per pool. Benchmark varies by region ($100&ndash;250/month residential).</li>
          <li><strong>Customer retention:</strong> Annual churn rate. Target under 10%. High churn suggests service quality issues.</li>
          <li><strong>Seasonality:</strong> Year-round in Sun Belt states; seasonal in northern markets. Year-round is more valuable.</li>
          <li><strong>Technician workforce:</strong> CPO (Certified Pool Operator) certifications, tenure, and vehicle/equipment condition</li>
          <li><strong>Licensing:</strong> Contractor&apos;s license requirements vary by state. Some states require specific pool contractor licenses.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Route acquisition:</strong> Buy routes from retiring one-person operators at 10&ndash;14x monthly billing</li>
          <li><strong>Add repair services:</strong> Upsell equipment repair to existing maintenance customers for higher revenue per account</li>
          <li><strong>Commercial accounts:</strong> Pursue HOA, hotel, and apartment complex contracts for larger, multi-year revenue</li>
          <li><strong>Price increases:</strong> Many small operators underprice. Implement annual CPI-linked increases.</li>
          <li><strong>Technology:</strong> Route optimization software, automated chemical dosing reports, and customer communication platforms</li>
          <li><strong>Renovation upsells:</strong> Identify maintenance customers with aging equipment or surfaces for renovation proposals</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Pool service offers 80&ndash;90% recurring revenue with 90%+ customer retention &mdash; among the best in home services</li>
          <li>Route density is the primary margin driver: more pools per route = more profit per technician</li>
          <li>Sun Belt markets (Florida, Texas, Arizona, California) offer year-round revenue vs. seasonal in northern states</li>
          <li>Tuck-in route acquisitions at 10&ndash;14x monthly billing are the fastest growth lever</li>
          <li>Typical valuations: 2.5&ndash;4x annual SDE for small operators; 5&ndash;8x EBITDA for multi-route platforms</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/pest-control-acquisition" className="text-apple-accent hover:underline">Acquiring a Pest Control Business</Link></li>
        <li><Link href="/learn/landscaping-acquisition" className="text-apple-accent hover:underline">Acquiring a Landscaping Business</Link></li>
        <li><Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">Recurring Revenue Businesses</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Pool &amp; Hot Tub Alliance, <em>US Swimming Pool and Hot Tub Market Report</em> (2024)</li>
        <li>IBISWorld, <em>Swimming Pool Maintenance in the US</em> (2024)</li>
        <li>P.K. Data, <em>US Pool Industry Statistics</em> (2024)</li>
      </ul>
    </article>
  );
}
