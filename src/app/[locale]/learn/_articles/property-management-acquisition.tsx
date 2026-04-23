import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function PropertyManagementAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Property Management Company</h1>
      <div className={bodyClass}>
        <p>Property management companies are classic recurring revenue businesses: monthly management fees tied to long-term contracts with property owners. The industry is highly fragmented (over 300,000 property management firms in the US), largely recession-resistant (people always need housing), and offers a clear <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build</Link> consolidation thesis. For search fund entrepreneurs, the model is straightforward: acquire a portfolio of management contracts and grow through operational excellence and acquisitions.</p>
      </div>

      <h2 className={h2Class}>Why Property Management Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> 8&ndash;12% of collected rents, billed monthly. Average contract duration 2&ndash;5 years.</li>
          <li><strong>Recession resilience:</strong> Rental demand increases during economic downturns as homeownership becomes less affordable</li>
          <li><strong>Low capex:</strong> People + software business with minimal physical infrastructure</li>
          <li><strong>Fragmented:</strong> Dominated by small, local operators. Most manage fewer than 500 units.</li>
          <li><strong>Ancillary revenue:</strong> Leasing fees, maintenance markup, tenant screening, and vendor referral commissions</li>
          <li><strong>Asset-light:</strong> You manage the property, not own it. No real estate risk on your balance sheet.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Types of Property Management</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Residential (single-family):</strong> Managing individual rental homes for investors. 8&ndash;10% management fee. Fastest growing segment.</li>
          <li><strong>Residential (multifamily):</strong> Apartment complexes and buildings. 3&ndash;8% management fee (lower % but larger portfolios).</li>
          <li><strong>Commercial:</strong> Office, retail, industrial properties. Higher complexity, higher fees, longer contracts.</li>
          <li><strong>HOA/community management:</strong> Managing homeowner associations. Monthly fee per unit. High retention.</li>
          <li><strong>Short-term rental:</strong> Airbnb/VRBO property management. 15&ndash;25% fee. High growth but more operationally intensive.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Door count and growth trend:</strong> How many units under management? Is the portfolio growing, stable, or shrinking?</li>
          <li><strong>Contract terms:</strong> Average remaining contract duration, termination notice periods, and exclusivity provisions</li>
          <li><strong>Owner retention rate:</strong> What percentage of property owners renew each year? Target: 90%+</li>
          <li><strong>Revenue per door:</strong> Total revenue divided by units managed. Benchmark varies by market ($100&ndash;300/door/month for single-family).</li>
          <li><strong>Maintenance operations:</strong> In-house maintenance team vs. outsourced. In-house creates higher margins but more complexity.</li>
          <li><strong>Technology:</strong> Property management software (AppFolio, Buildium, Yardi), online portals, and automation level</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Sales and marketing:</strong> Most property managers don&apos;t actively sell. Adding a business development function can grow doors 20&ndash;30% annually.</li>
          <li><strong>Ancillary services:</strong> In-house maintenance, tenant placement, insurance, and vendor management create additional margin</li>
          <li><strong>Technology upgrade:</strong> Modern property management software improves efficiency, tenant experience, and owner reporting</li>
          <li><strong>Geographic expansion:</strong> Roll up neighboring property managers to create regional scale</li>
          <li><strong>Add asset classes:</strong> If you manage single-family, add multifamily or HOA to diversify</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Property management offers predictable, recurring revenue tied to essential services (housing)</li>
          <li>Target companies with growing door counts, 90%+ owner retention, and modern technology</li>
          <li>The biggest growth lever is simply adding a sales function &mdash; most property managers don&apos;t actively market</li>
          <li>In-house maintenance teams create higher margins but require operational management capability</li>
          <li>The consolidation thesis is proven: acquire local operators to build regional scale and efficiency</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/real-estate-acquisitions" className="text-apple-accent hover:underline">Real Estate in Acquisitions</Link></li>
        <li><Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">Acquiring a Professional Services Firm</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
        <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic Expansion</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>NARPM, <em>National Association of Residential Property Managers Annual Report</em> (2024)</li>
        <li>IBISWorld, <em>Property Management Industry in the US</em> (2024)</li>
        <li>Buildium, <em>State of the Property Management Industry</em> (2024)</li>
      </ul>
    </article>
  );
}
