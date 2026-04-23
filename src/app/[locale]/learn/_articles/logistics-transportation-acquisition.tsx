import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function LogisticsTransportationAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Logistics &amp; Transportation Company</h1>
      <div className={bodyClass}>
        <p>Logistics and transportation businesses &mdash; trucking companies, freight brokerages, last-mile delivery, and warehousing operations &mdash; form the backbone of the $1.3 trillion US logistics industry. For search fund entrepreneurs, the sector offers recession-resistant demand, high barriers to entry through fleet assets and carrier relationships, and a massively fragmented market where 97% of trucking companies operate fewer than 20 trucks.</p>
      </div>

      <h2 className={h2Class}>Types of Logistics Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Asset-based trucking:</strong> Own fleet of trucks. Higher capex, higher barriers to entry, and more defensible. Typical margins: 5&ndash;15% EBITDA.</li>
          <li><strong>Freight brokerage:</strong> Match shippers with carriers without owning trucks. Asset-light, scalable, 15&ndash;25% gross margins.</li>
          <li><strong>Last-mile delivery:</strong> Final-mile delivery for e-commerce, medical supplies, appliances. Growing rapidly.</li>
          <li><strong>Warehousing &amp; 3PL:</strong> Third-party logistics including storage, fulfillment, and distribution. Long-term contracts.</li>
          <li><strong>Specialty transport:</strong> Hazmat, oversized loads, refrigerated, auto transport. Higher margins due to specialization.</li>
          <li><strong>Courier &amp; messenger:</strong> Time-sensitive local delivery. Recurring contracts with healthcare, legal, financial firms.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Logistics Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Essential service:</strong> Goods must move regardless of economic conditions. Demand is fundamentally tied to GDP.</li>
          <li><strong>Recurring contracts:</strong> B2B logistics clients sign multi-year agreements, especially in 3PL and dedicated fleet services</li>
          <li><strong>Fragmented:</strong> 97% of trucking companies have fewer than 20 trucks. Enormous consolidation opportunity.</li>
          <li><strong>Barriers to entry:</strong> Operating authority, insurance, equipment, driver recruitment, and customer relationships</li>
          <li><strong>Technology leverage:</strong> TMS (transportation management systems), route optimization, and automation can dramatically improve margins</li>
          <li><strong>E-commerce tailwind:</strong> Last-mile delivery and warehousing growing 15&ndash;20% annually</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Fleet condition:</strong> Average age, maintenance records, and replacement schedule. Deferred maintenance is a hidden liability.</li>
          <li><strong>Driver workforce:</strong> Retention rate, CDL compliance, drug testing records, and average tenure. Driver shortage is the industry&apos;s biggest challenge.</li>
          <li><strong>Insurance &amp; safety:</strong> CSA scores, accident history, insurance premiums, and claims record. Poor safety scores can disqualify you from major shippers.</li>
          <li><strong>Customer concentration:</strong> If one shipper represents 25%+ of revenue, diversification is critical.</li>
          <li><strong>Operating authority:</strong> MC number, DOT compliance, and any pending violations or investigations</li>
          <li><strong>Technology:</strong> TMS, ELD (electronic logging device) compliance, GPS tracking, and back-office systems</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Fleet optimization:</strong> Right-size fleet, implement fuel optimization, and add telematics for efficiency</li>
          <li><strong>Add brokerage:</strong> Layer freight brokerage on top of asset-based operations to fill empty miles</li>
          <li><strong>Geographic expansion:</strong> Add lanes and service areas to serve existing customers&apos; broader needs</li>
          <li><strong>Technology upgrade:</strong> Modern TMS, automated dispatching, and digital freight matching</li>
          <li><strong>Driver recruitment:</strong> Improve compensation, benefits, and home time to attract and retain CDL drivers</li>
          <li><strong>Consolidation:</strong> <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Roll up smaller operators</Link> in your region for scale and contract leverage</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Logistics offers essential, recession-resistant demand with enormous consolidation potential</li>
          <li>Freight brokerage (asset-light) and specialty transport offer the best margins for search fund acquisitions</li>
          <li>Fleet condition, driver retention, and safety scores are the three most critical due diligence areas</li>
          <li>Technology (TMS, telematics, route optimization) is the primary lever for post-acquisition margin improvement</li>
          <li>Typical valuations: 4&ndash;7x EBITDA for asset-light; 3&ndash;5x for asset-heavy trucking companies</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">Acquiring a Manufacturing Business</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
        <li><Link href="/learn/supply-chain-optimization" className="text-apple-accent hover:underline">Supply Chain Optimization</Link></li>
        <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic Expansion</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>American Trucking Associations, <em>Trucking Industry Overview</em> (2024)</li>
        <li>Armstrong &amp; Associates, <em>3PL Market Analysis</em> (2024)</li>
        <li>FreightWaves, <em>State of the Freight Market</em> (2024)</li>
      </ul>
    </article>
  );
}
