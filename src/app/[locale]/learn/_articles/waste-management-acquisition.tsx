import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function WasteManagementAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Waste Management &amp; Recycling Business</h1>
      <div className={bodyClass}>
        <p>Waste management is one of the most defensive, recession-proof industries in the economy. Trash collection happens regardless of economic conditions, creating highly predictable recurring revenue. The US waste industry generates $100B+ annually, and while dominated by three public companies (Waste Management, Republic Services, GFL), the remaining 40% is fragmented among thousands of small haulers and recyclers. For search fund entrepreneurs, waste businesses offer monthly subscription revenue, route density economics, and a proven <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build</Link> consolidation thesis.</p>
      </div>

      <h2 className={h2Class}>Types of Waste Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Residential collection:</strong> Curbside trash and recycling pickup. Municipal contracts or subscription-based. Highly recurring.</li>
          <li><strong>Commercial collection:</strong> Dumpster service for businesses, restaurants, construction sites. Monthly contracts, higher revenue per stop.</li>
          <li><strong>Roll-off/construction:</strong> Temporary dumpsters for construction and renovation projects. Higher margin, more variable demand.</li>
          <li><strong>Transfer stations:</strong> Consolidation points between collection and landfill. Real estate + infrastructure investment.</li>
          <li><strong>Recycling &amp; processing:</strong> MRFs (materials recovery facilities), scrap metal, electronics recycling. Commodity price exposure.</li>
          <li><strong>Specialty waste:</strong> Medical waste, hazardous materials, electronic waste. Higher regulations, higher margins.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Waste Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recession-proof:</strong> Trash collection is mandatory. Revenue barely declined even during 2008&ndash;2009.</li>
          <li><strong>Recurring revenue:</strong> 90%+ of revenue is subscription/contract-based with monthly billing</li>
          <li><strong>Route density economics:</strong> More customers per route = higher margins. The math improves with every new stop.</li>
          <li><strong>High barriers:</strong> Permits, equipment, disposal access, and municipal contracts create significant moats</li>
          <li><strong>Pricing power:</strong> CPI-linked escalators in contracts. Fuel surcharges pass through cost increases.</li>
          <li><strong>Proven roll-up:</strong> The entire waste industry was built through consolidation. The playbook is well-established.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Route economics:</strong> Revenue per route, stops per route, and route density. Higher density = higher margins.</li>
          <li><strong>Contract terms:</strong> Municipal vs. subscription. Contract duration, renewal provisions, and price escalation clauses.</li>
          <li><strong>Fleet condition:</strong> Truck age, maintenance records, and replacement schedule. Refuse trucks cost $300K&ndash;400K each.</li>
          <li><strong>Disposal costs:</strong> Where does waste go? Landfill fees, transfer station agreements, and tip rates</li>
          <li><strong>Environmental compliance:</strong> Permits, EPA violations, and remediation liabilities. Environmental history is critical.</li>
          <li><strong>Driver workforce:</strong> CDL driver retention, safety records, and labor costs as a percentage of revenue</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Route optimization:</strong> GPS routing software to reduce miles driven and increase stops per route</li>
          <li><strong>Price increases:</strong> Many small haulers underprice. Implement CPI-linked annual escalators.</li>
          <li><strong>Add commercial:</strong> Cross-sell commercial dumpster service to businesses on existing residential routes</li>
          <li><strong>Tuck-in acquisitions:</strong> Buy neighboring haulers to increase route density &mdash; the primary value driver</li>
          <li><strong>Recycling services:</strong> Add single-stream recycling pickup for additional monthly revenue per customer</li>
          <li><strong>Technology:</strong> Automated billing, customer portals, and fleet management systems</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Waste management offers near-perfect recession resistance with 90%+ recurring subscription revenue</li>
          <li>Route density is the primary value driver &mdash; more customers per route means higher margins</li>
          <li>Fleet condition and replacement costs are the biggest capital consideration (refuse trucks: $300K&ndash;400K each)</li>
          <li>Environmental compliance history is essential due diligence &mdash; liabilities can be catastrophic</li>
          <li>Typical valuations: 5&ndash;8x EBITDA for collection businesses; higher for operations with disposal infrastructure</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
        <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic Expansion</Link></li>
        <li><Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">Recurring Revenue Businesses</Link></li>
        <li><Link href="/learn/environmental-due-diligence" className="text-apple-accent hover:underline">Environmental Due Diligence</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Environmental Research &amp; Education Foundation, <em>Analysis of the US Solid Waste Industry</em> (2024)</li>
        <li>Waste360, <em>State of the Waste Industry Report</em> (2024)</li>
        <li>IBISWorld, <em>Waste Collection Services in the US</em> (2024)</li>
      </ul>
    </article>
  );
}
