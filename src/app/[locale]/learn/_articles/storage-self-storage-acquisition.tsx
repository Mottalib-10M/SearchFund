import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function StorageSelfStorageAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Storage or Self-Storage Facility</h1>
      <div className={bodyClass}>
        <p>Self-storage is one of the most recession-resistant asset classes in commercial real estate, generating $50B+ annually in the US across 60,000+ facilities. The industry thrived during both the 2008 recession and COVID-19, proving its defensive qualities. For search fund entrepreneurs, self-storage offers a unique combination of real estate appreciation, operating business cash flow, and technology-driven growth &mdash; all in a sector where 70% of facilities are still independently owned.</p>
      </div>

      <h2 className={h2Class}>Types of Storage Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Traditional self-storage:</strong> Drive-up units and indoor climate-controlled storage. The core business model.</li>
          <li><strong>Climate-controlled:</strong> Temperature and humidity controlled units. Higher rents ($2&ndash;4/sq ft vs. $0.75&ndash;1.50 for drive-up).</li>
          <li><strong>Boat/RV/vehicle storage:</strong> Outdoor, covered, and enclosed vehicle storage. Lower cost to build, growing demand.</li>
          <li><strong>Portable storage:</strong> Delivered containers (PODS model). Asset-intensive but growing category.</li>
          <li><strong>Wine/art storage:</strong> Specialty climate-controlled storage for valuables. Niche, premium pricing.</li>
          <li><strong>Business/commercial storage:</strong> Document storage, inventory overflow, contractor tool storage. B2B recurring contracts.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Self-Storage Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recession-resistant:</strong> Demand increases during downturns (downsizing, relocations, foreclosures) and booms (moves, renovations)</li>
          <li><strong>High margins:</strong> Operating margins of 40&ndash;60% for stabilized facilities. Minimal labor requirements.</li>
          <li><strong>Sticky tenants:</strong> Average tenant stays 14&ndash;15 months. The hassle of moving stored items creates natural retention.</li>
          <li><strong>Pricing power:</strong> Street rates increase 3&ndash;8% annually. In-place rent increases of 8&ndash;12% annually with minimal move-outs.</li>
          <li><strong>Low maintenance:</strong> Concrete, steel, and minimal mechanical systems. Far simpler than residential or office properties.</li>
          <li><strong>Fragmented:</strong> 70% of facilities are independently owned. REITs and operators actively consolidate.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Physical occupancy vs. economic occupancy:</strong> Physical occupancy (% of units rented) can mask below-market rents. Economic occupancy (actual revenue vs. potential) reveals true performance.</li>
          <li><strong>Rental rate analysis:</strong> Compare in-place rates to street rates and competitors. The gap represents immediate upside.</li>
          <li><strong>Supply pipeline:</strong> New facilities under construction within 3&ndash;5 miles. Oversupply kills pricing power.</li>
          <li><strong>Facility condition:</strong> Roofs, doors, paving, security systems, and drainage. Deferred maintenance adds to total cost.</li>
          <li><strong>Revenue management:</strong> Does the facility use dynamic pricing and ECRI (existing customer rate increases)? Most independents don&apos;t.</li>
          <li><strong>Demographics:</strong> Population density, household income, renter percentage, and residential growth within 3-mile radius</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Revenue management:</strong> Implement dynamic pricing and regular ECRI (existing customer rate increases) for 15&ndash;25% revenue lift</li>
          <li><strong>Online marketing:</strong> SEO, Google Ads, and aggregator listings (SpareFoot) to drive move-ins</li>
          <li><strong>Technology:</strong> Smart locks, kiosks, gate access, and online rental to reduce staffing and improve customer experience</li>
          <li><strong>Conversion/expansion:</strong> Add climate-controlled units, convert unused space, or build additional phases</li>
          <li><strong>Tenant insurance:</strong> Tenant protection plans add $10&ndash;15/unit/month in high-margin ancillary revenue</li>
          <li><strong>Portfolio building:</strong> Acquire additional facilities for operational scale and brand recognition</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Self-storage offers recession-resistant demand with 40&ndash;60% operating margins and real estate appreciation</li>
          <li>Revenue management (dynamic pricing + ECRI) is the single biggest value creation lever for acquired facilities</li>
          <li>New supply within 3&ndash;5 miles is the primary risk factor &mdash; always check the development pipeline</li>
          <li>Technology (smart locks, online rental, automation) reduces labor costs and improves customer experience</li>
          <li>Valuations: typically 6&ndash;9% cap rate for independent facilities; lower for institutional-quality portfolios</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/property-management-acquisition" className="text-apple-accent hover:underline">Acquiring a Property Management Company</Link></li>
        <li><Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">Recurring Revenue Businesses</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
        <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic Expansion</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Self Storage Association, <em>Self Storage Industry Fact Sheet</em> (2024)</li>
        <li>Yardi Matrix, <em>National Self Storage Report</em> (2024)</li>
        <li>Marcus &amp; Millichap, <em>Self-Storage Investment Forecast</em> (2024)</li>
      </ul>
    </article>
  );
}
