import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function HotelHospitalityAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Hotel or Hospitality Business</h1>
      <div className={bodyClass}>
        <p>The US lodging industry generates over $250B annually across 55,000+ hotels with 5.5 million rooms. For search fund entrepreneurs, hospitality acquisitions offer real estate appreciation, operational improvement potential, and brand affiliation options. However, hotels are capital-intensive, cyclical, and operationally complex &mdash; making them better suited for ETA operators with hospitality experience or strong operational partners.</p>
      </div>

      <h2 className={h2Class}>Types of Hospitality Acquisitions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Branded select-service:</strong> Hampton, Holiday Inn Express, Fairfield. Limited food service, lower operating costs, brand demand.</li>
          <li><strong>Independent boutique:</strong> Unique properties without brand affiliation. Higher ADR potential but requires direct marketing.</li>
          <li><strong>Extended-stay:</strong> Residence Inn, Home2, WoodSpring Suites. Higher occupancy, lower housekeeping costs, corporate accounts.</li>
          <li><strong>Full-service:</strong> Hilton, Marriott, Hyatt. Restaurant, meeting space, amenities. Higher revenue but more complex operations.</li>
          <li><strong>Vacation rental management:</strong> Managing short-term rental portfolios (Airbnb, VRBO). Asset-light, management-fee model.</li>
          <li><strong>Bed &amp; breakfast/inn:</strong> Smaller properties with personalized service. Lifestyle businesses with tourism-dependent revenue.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Hotel Metrics</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>RevPAR:</strong> Revenue per available room (ADR &times; occupancy). The single most important metric.</li>
          <li><strong>ADR:</strong> Average daily rate. Pricing power indicator.</li>
          <li><strong>Occupancy:</strong> Percentage of rooms sold. Target 65%+ for profitability.</li>
          <li><strong>GOP margin:</strong> Gross operating profit margin. Measures operational efficiency. Target 35&ndash;45% for select-service.</li>
          <li><strong>NOI:</strong> Net operating income after FF&amp;E reserve. Used for valuation (cap rate method).</li>
          <li><strong>PIP:</strong> Property improvement plan. Franchisor-required renovations that can be a significant capital obligation.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>STR report:</strong> Smith Travel Research competitive set analysis comparing your hotel&apos;s RevPAR to competitors</li>
          <li><strong>Property condition:</strong> PCA (property condition assessment), deferred maintenance, and upcoming PIP requirements</li>
          <li><strong>Franchise agreement:</strong> Remaining term, PIP obligations, performance requirements, and transfer fees</li>
          <li><strong>Market dynamics:</strong> New supply pipeline, demand drivers (corporate, leisure, events), and seasonal patterns</li>
          <li><strong>Revenue mix:</strong> Corporate vs. leisure vs. group. Diversified demand sources reduce cyclicality.</li>
          <li><strong>Labor costs:</strong> Typically 30&ndash;35% of revenue. Union status, turnover, and availability of hospitality workers.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Revenue management:</strong> Dynamic pricing optimization can increase RevPAR 10&ndash;20% at well-run properties</li>
          <li><strong>OTA optimization:</strong> Improve online travel agency listings, reviews, and direct booking incentives</li>
          <li><strong>Renovation/repositioning:</strong> Property upgrades to move up-market or rebrand for higher ADR</li>
          <li><strong>Cost optimization:</strong> Energy management, procurement consolidation, and technology automation</li>
          <li><strong>Brand conversion:</strong> Switch to a more demand-generating brand or flag independent to branded</li>
          <li><strong>Portfolio building:</strong> Acquire additional properties for multi-hotel management scale and efficiencies</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Select-service and extended-stay properties offer the best risk-adjusted returns for ETA operators</li>
          <li>RevPAR relative to your competitive set is the single most important performance metric</li>
          <li>PIP (property improvement plan) obligations can represent millions in required capital investment</li>
          <li>Hotels are capital-intensive and cyclical &mdash; ensure adequate reserves for renovations and downturns</li>
          <li>Valuations: typically 8&ndash;12x NOI (cap rate method) for select-service; real estate value provides a floor</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/franchise-acquisition" className="text-apple-accent hover:underline">Acquiring a Franchise Business</Link></li>
        <li><Link href="/learn/restaurant-acquisition" className="text-apple-accent hover:underline">Acquiring a Restaurant Business</Link></li>
        <li><Link href="/learn/property-management-acquisition" className="text-apple-accent hover:underline">Acquiring a Property Management Company</Link></li>
        <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic Expansion</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>STR (Smith Travel Research), <em>US Hotel Industry Performance</em> (2024)</li>
        <li>American Hotel &amp; Lodging Association, <em>State of the Hotel Industry</em> (2024)</li>
        <li>CBRE Hotels, <em>US Hotel Market Outlook</em> (2024)</li>
      </ul>
    </article>
  );
}
