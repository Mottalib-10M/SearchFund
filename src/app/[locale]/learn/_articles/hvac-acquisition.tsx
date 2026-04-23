import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function HVACAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring an HVAC Business</h1>
      <div className={bodyClass}>
        <p>HVAC (heating, ventilation, and air conditioning) is one of the most sought-after <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">home services verticals</Link> for search fund acquisitions. The $150B+ US HVAC market is highly fragmented, essential (nobody tolerates a broken furnace in January), and offers a natural path to recurring revenue through maintenance agreements. Many HVAC businesses are owned by technicians who built great companies but lack succession plans.</p>
      </div>

      <h2 className={h2Class}>Why HVAC Is a Top ETA Target</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Essential service:</strong> HVAC isn&apos;t optional &mdash; when it breaks, customers call immediately regardless of economic conditions</li>
          <li><strong>Recurring revenue potential:</strong> Maintenance agreements provide predictable income (target: 30&ndash;50% of revenue)</li>
          <li><strong>High average ticket:</strong> $5K&ndash;15K for system replacements, $150&ndash;500 for service calls</li>
          <li><strong>Fragmented market:</strong> 100,000+ HVAC companies in the US, mostly small operators</li>
          <li><strong>Regulatory tailwinds:</strong> Refrigerant transitions (R-22 to R-410A to R-454B) and energy efficiency mandates drive replacement demand</li>
          <li><strong>Consolidation opportunity:</strong> Clear <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build</Link> thesis with proven multi-location operators</li>
        </ul>
      </div>

      <h2 className={h2Class}>Types of HVAC Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Residential service &amp; replacement:</strong> Highest margin, most recurring. The ideal search fund target.</li>
          <li><strong>Residential new construction:</strong> Lower margin, tied to housing cycles. Less attractive standalone.</li>
          <li><strong>Commercial HVAC:</strong> Larger contracts, more complex systems. Higher revenue per customer.</li>
          <li><strong>Industrial HVAC:</strong> Specialized, capital-intensive. Usually too niche for search funds.</li>
          <li><strong>Combined residential + commercial:</strong> Diversified revenue base. Common in mid-size markets.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Service agreement base:</strong> How many active maintenance agreements? What&apos;s the renewal rate? Target: 2,000+ agreements for a meaningful recurring base.</li>
          <li><strong>Revenue mix:</strong> Service vs. installation vs. new construction. Higher service mix = more predictable revenue.</li>
          <li><strong>Technician workforce:</strong> How many licensed techs? EPA certifications? What&apos;s the average tenure? HVAC techs are extremely hard to recruit.</li>
          <li><strong>Fleet condition:</strong> Trucks, tools, and inventory. A typical HVAC company has $5&ndash;10K invested per truck.</li>
          <li><strong>Manufacturer relationships:</strong> Authorized dealer status (Carrier, Trane, Lennox) provides leads, training, and warranty work.</li>
          <li><strong>Seasonality:</strong> Summer and winter are peak; spring and fall are slow. Cash flow planning is critical.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Playbook</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Build the maintenance base:</strong> Convert every install and service call into a maintenance agreement</li>
          <li><strong>Add complementary services:</strong> <Link href="/learn/plumbing-acquisition" className="text-apple-accent hover:underline">Plumbing</Link>, <Link href="/learn/acquiring-electrical-business" className="text-apple-accent hover:underline">electrical</Link>, indoor air quality, duct cleaning</li>
          <li><strong>Implement service dispatch software:</strong> ServiceTitan, Housecall Pro, or FieldEdge for scheduling, invoicing, and KPI tracking</li>
          <li><strong>Digital marketing:</strong> Google Ads and Local Service Ads for HVAC are among the highest-ROI marketing channels</li>
          <li><strong>Financing programs:</strong> Offer customer financing for system replacements to increase average ticket and close rates</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>HVAC is an essential, fragmented service with strong recurring revenue potential through maintenance agreements</li>
          <li>Target residential service &amp; replacement businesses with an established maintenance agreement base</li>
          <li>Technician recruitment and retention is the #1 operational challenge &mdash; assess workforce deeply</li>
          <li>The playbook is clear: build maintenance base, add complementary services, implement technology, and roll up</li>
          <li>Manufacturer dealer status (Carrier, Trane, Lennox) is a meaningful competitive advantage</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">Acquiring a Home Services Business</Link></li>
        <li><Link href="/learn/plumbing-acquisition" className="text-apple-accent hover:underline">Acquiring a Plumbing Business</Link></li>
        <li><Link href="/learn/acquiring-electrical-business" className="text-apple-accent hover:underline">Acquiring an Electrical Business</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>ACHR News, <em>HVAC Industry Market Size and Trends</em> (2024)</li>
        <li>AHRI, <em>Residential HVAC Equipment Shipment Data</em> (2024)</li>
        <li>ServiceTitan, <em>Home Services Industry Report</em> (2024)</li>
      </ul>
    </article>
  );
}
