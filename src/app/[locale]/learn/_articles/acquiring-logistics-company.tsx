import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringLogisticsCompanyArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Logistics &amp; Transportation Company
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Logistics and transportation is a $900B+ US industry with
          extreme fragmentation &mdash; over 90% of carriers have fewer
          than 6 trucks. For ETA entrepreneurs targeting asset-heavy
          businesses with strong cash flow, logistics offers compelling
          acquisition opportunities with proven{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            buy-and-build
          </Link>{" "}
          dynamics.
        </p>

        <h2 className={h2Class}>Sub-sectors</h2>
        <ul className={ulClass}>
          <li><strong>Trucking (TL/LTL):</strong> Full truckload and less-than-truckload carriers. Asset-heavy but predictable revenue</li>
          <li><strong>Freight brokerage:</strong> Asset-light intermediaries matching shippers and carriers. Higher margins, scalable</li>
          <li><strong>Last-mile delivery:</strong> Final delivery to consumers. Growing rapidly with e-commerce</li>
          <li><strong>Warehousing &amp; 3PL:</strong> Third-party logistics combining storage, fulfillment, and distribution</li>
          <li><strong>Specialty hauling:</strong> Hazmat, refrigerated, oversized loads. Higher barriers to entry, premium pricing</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Asset-based carriers:</strong> 3&ndash;5x EBITDA plus net asset value (trucks, trailers, real estate)</li>
          <li><strong>Freight brokerages:</strong> 5&ndash;8x EBITDA (asset-light, higher margins)</li>
          <li><strong>3PL/warehousing:</strong> 5&ndash;7x EBITDA depending on contract length and customer mix</li>
          <li><strong>Premium factors:</strong> Dedicated/contract freight (vs. spot market), diversified customers, driver retention, modern fleet</li>
          <li><strong>Discount factors:</strong> Spot-heavy revenue, owner-operator model (no assets), driver shortage exposure, aging fleet</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>
        <ul className={ulClass}>
          <li><strong>Revenue quality:</strong> Contract vs. spot mix. Dedicated contracts (1&ndash;3 years) are far more valuable than spot market revenue</li>
          <li><strong>Fleet condition:</strong> Age, mileage, maintenance history of all trucks and trailers. Replacement costs ($150K+ per truck)</li>
          <li><strong>Driver metrics:</strong> Turnover rate (industry average ~90% for large carriers), driver satisfaction, pay competitiveness</li>
          <li><strong>Safety record:</strong> CSA (Compliance, Safety, Accountability) scores, accident history, DOT inspection results. Poor safety = higher insurance and regulatory risk</li>
          <li><strong>Insurance:</strong> Review insurance costs, claims history, and coverage adequacy. Insurance is 5&ndash;8% of revenue for carriers</li>
          <li><strong>Fuel management:</strong> Fuel hedging strategy, fuel surcharge pass-through effectiveness</li>
          <li><strong>Customer concentration:</strong>{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              Concentration risk
            </Link>{" "}
            is common in trucking. Many small carriers depend on 2&ndash;3 customers</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>Driver recruitment &amp; retention:</strong> Improve pay, benefits, and home time. The driver shortage is the #1 constraint in the industry</li>
          <li><strong>Technology:</strong> TMS (Transportation Management System), ELD compliance, route optimization, customer portal</li>
          <li><strong>Fleet modernization:</strong> Replace aging trucks with fuel-efficient models. Consider electric vehicles for short-haul/last-mile</li>
          <li><strong>Service diversification:</strong> Add warehousing, cross-docking, or brokerage services to existing carrier operations</li>
          <li><strong>Geographic expansion:</strong> Acquire carriers in adjacent regions to build a multi-state network</li>
        </ul>

        <p>
          For related playbooks, see{" "}
          <Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">
            manufacturing acquisitions
          </Link>{" "}
          and the{" "}
          <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">
            working capital management
          </Link>{" "}
          guide.
        </p>
      </div>
    </article>
  );
}
