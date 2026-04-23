import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringDistributionCompanyArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Distribution or Wholesale Business
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Distribution and wholesale businesses sit at the critical
          junction between manufacturers and end-users. With $6T+ in US
          wholesale trade, massive fragmentation, and aging owners,
          distribution offers strong cash flow, essential-service dynamics,
          and proven{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            roll-up economics
          </Link>{" "}
          for search fund acquirers.
        </p>

        <h2 className={h2Class}>Why distribution?</h2>
        <ul className={ulClass}>
          <li><strong>Essential middle layer:</strong> Manufacturers need distributors for market access. End-users need distributors for product availability, credit, and logistics</li>
          <li><strong>Sticky relationships:</strong> Switching distributors is disruptive. Customers rely on product knowledge, credit terms, delivery reliability, and technical support</li>
          <li><strong>Massive fragmentation:</strong> 400,000+ wholesale businesses in the US. Most serve local/regional markets with $2&ndash;20M revenue</li>
          <li><strong>Recession patterns:</strong> Distributors recover quickly as restocking follows destocking. Essential products (food, medical, industrial) are recession-resistant</li>
          <li><strong>Working capital intensive:</strong> Inventory is the key asset. Good working capital management is a competitive advantage. See{" "}
            <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">
              working capital guide
            </Link></li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>General distribution:</strong> 4&ndash;6x EBITDA</li>
          <li><strong>Specialty/value-added:</strong> 5&ndash;8x EBITDA (technical expertise, custom kitting, value-added services)</li>
          <li><strong>Premium factors:</strong> Exclusive supplier agreements, proprietary product lines, technical sales capability, e-commerce platform</li>
          <li><strong>Discount factors:</strong> Commodity products with no differentiation, customer concentration, declining supplier relationships, excess inventory</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>
        <ul className={ulClass}>
          <li><strong>Supplier analysis:</strong> Review top 10 supplier relationships, contract terms, exclusivity agreements, and margin protection</li>
          <li><strong>Inventory:</strong> Age analysis, slow-moving/obsolete inventory, turnover rates, and write-down history</li>
          <li><strong>Gross margin analysis:</strong> Margin by product line, customer, and channel. Identify margin erosion trends</li>
          <li><strong>Customer retention:</strong> Revenue retention by customer cohort. Distribution customers are sticky &mdash; declining retention signals service issues</li>
          <li><strong>Technology:</strong> ERP system, warehouse management, e-commerce capabilities, and order automation</li>
          <li><strong>Warehouse/logistics:</strong> Facility condition, lease terms, location efficiency, and delivery fleet</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>E-commerce:</strong> Build or improve digital ordering. Many distributors still rely on phone/fax orders</li>
          <li><strong>Value-added services:</strong> Add custom kitting, assembly, labeling, or technical support to increase margins and stickiness</li>
          <li><strong>Product line expansion:</strong> Add adjacent product categories to increase share-of-wallet with existing customers</li>
          <li><strong>Geographic expansion:</strong> Open satellite warehouses or acquire distributors in adjacent territories</li>
          <li><strong>Inventory optimization:</strong> Implement demand forecasting and just-in-time practices to reduce carrying costs</li>
        </ul>

        <p>
          For related playbooks, see{" "}
          <Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">
            manufacturing acquisitions
          </Link>{" "}
          and{" "}
          <Link href="/learn/acquiring-logistics-company" className="text-apple-accent hover:underline">
            logistics acquisitions
          </Link>.
        </p>
      </div>
    </article>
  );
}
