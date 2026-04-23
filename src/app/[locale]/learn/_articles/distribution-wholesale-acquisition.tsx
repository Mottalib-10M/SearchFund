import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function DistributionWholesaleAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Distribution &amp; Wholesale Business</h1>
      <div className={bodyClass}>
        <p>Distribution and wholesale businesses sit at the center of supply chains, connecting manufacturers to retailers, contractors, and end users. The US wholesale distribution market exceeds $6 trillion annually, spanning everything from industrial supplies to food products. For search fund entrepreneurs, distributors offer predictable B2B revenue, long-standing customer relationships, and significant opportunities to add value through technology, logistics optimization, and <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">bolt-on acquisitions</Link>.</p>
      </div>

      <h2 className={h2Class}>Types of Distribution Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Industrial distribution:</strong> MRO supplies, fasteners, safety equipment, electrical supplies. High SKU count, repeat customers.</li>
          <li><strong>Building materials:</strong> Lumber, drywall, roofing, insulation. Tied to construction activity. Regional players.</li>
          <li><strong>Food &amp; beverage:</strong> Broadline or specialty food distribution. Cold chain complexity, thin margins (1&ndash;3% net).</li>
          <li><strong>Medical/dental supplies:</strong> Regulated products, recurring orders, specialized knowledge. Higher margins.</li>
          <li><strong>Specialty chemicals:</strong> Paints, coatings, adhesives, cleaning chemicals. Regulatory barriers create moats.</li>
          <li><strong>Technology products:</strong> IT hardware, networking equipment, AV systems. Value-added reseller (VAR) model.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Distribution Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Sticky customers:</strong> B2B relationships last decades. Switching distributors is disruptive and risky for buyers.</li>
          <li><strong>Recurring orders:</strong> Customers reorder consumable products monthly. 70&ndash;85% of revenue is repeat business.</li>
          <li><strong>Counter-cyclical segments:</strong> MRO and repair supplies increase during downturns as companies maintain rather than replace</li>
          <li><strong>Fragmented:</strong> Thousands of small distributors serving local and regional markets. Ideal for consolidation.</li>
          <li><strong>Technology gap:</strong> Many small distributors run on outdated ERP systems. Technology investment drives margin improvement.</li>
          <li><strong>Value-added services:</strong> Kitting, custom labeling, just-in-time delivery, and technical support create higher margins and stickiness</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Gross margin by product line:</strong> Distribution margins are thin (15&ndash;30% gross). Understand the mix and identify high-margin opportunities.</li>
          <li><strong>Customer concentration:</strong> Top 10 customers should represent less than 40% of revenue. Diversification reduces risk.</li>
          <li><strong>Supplier relationships:</strong> Exclusive or preferred distributor agreements? Manufacturer relationships can be transferred or at risk.</li>
          <li><strong>Inventory management:</strong> Inventory turns, dead stock, and obsolescence risk. Distribution ties up significant working capital in inventory.</li>
          <li><strong>Warehouse operations:</strong> Capacity utilization, lease terms, location, and automation level</li>
          <li><strong>Technology:</strong> ERP system, e-commerce capabilities, and warehouse management system (WMS). Modern tech = competitive advantage.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>E-commerce &amp; digital:</strong> Launch B2B e-commerce for ordering, reordering, and account management</li>
          <li><strong>Value-added services:</strong> Add kitting, assembly, custom labeling, and vendor-managed inventory for higher margins</li>
          <li><strong>Product line expansion:</strong> Add complementary product categories to increase wallet share with existing customers</li>
          <li><strong>Private label:</strong> Develop house brands for higher margins on commodity products</li>
          <li><strong>Geographic expansion:</strong> Open additional warehouse locations to serve broader markets</li>
          <li><strong>Inventory optimization:</strong> Implement demand forecasting and automated replenishment to reduce working capital</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Distribution businesses offer sticky B2B relationships with 70&ndash;85% repeat revenue</li>
          <li>Margins are thin but predictable &mdash; technology and value-added services are the primary improvement levers</li>
          <li>Working capital management (inventory turns, AR collection) is critical to cash flow</li>
          <li>Supplier relationship transferability is a key due diligence concern &mdash; verify manufacturer agreements early</li>
          <li>Typical valuations: 4&ndash;7x EBITDA depending on product type, customer diversification, and growth trajectory</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">Acquiring a Manufacturing Business</Link></li>
        <li><Link href="/learn/logistics-transportation-acquisition" className="text-apple-accent hover:underline">Acquiring a Logistics Company</Link></li>
        <li><Link href="/learn/supply-chain-optimization" className="text-apple-accent hover:underline">Supply Chain Optimization</Link></li>
        <li><Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">Working Capital Management</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>National Association of Wholesaler-Distributors, <em>Facing the Forces of Change Report</em> (2024)</li>
        <li>US Census Bureau, <em>Annual Wholesale Trade Survey</em> (2024)</li>
        <li>McKinsey &amp; Company, <em>The Future of B2B Distribution</em> (2024)</li>
      </ul>
    </article>
  );
}
