import Link from "next/link";
import { h1Class, h2Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringLandscapingBusinessArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Landscaping &amp; Lawn Care Business
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          The $130B+ US landscaping industry is one of the most
          fragmented service industries in the country &mdash; with
          600,000+ businesses, most generating under $5M in revenue.
          For search fund entrepreneurs, landscaping offers strong
          recurring revenue, proven roll-up economics, and clear
          post-acquisition growth strategies.
        </p>

        <h2 className={h2Class}>Why landscaping?</h2>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> Maintenance contracts (weekly mowing, seasonal services) generate 60&ndash;80% recurring revenue</li>
          <li><strong>Extreme fragmentation:</strong> 600,000+ businesses. Top 10 companies hold &lt;10% market share</li>
          <li><strong>Simple operations:</strong> Compared to construction or manufacturing, landscaping is operationally straightforward</li>
          <li><strong>Roll-up proven:</strong> BrightView, TruGreen, and others have demonstrated the consolidation playbook at scale</li>
          <li><strong>Low capital intensity:</strong> Equipment costs are manageable compared to construction or manufacturing</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Small operators:</strong> 2&ndash;3x SDE for companies with &lt;$1M revenue</li>
          <li><strong>Mid-size companies:</strong> 3&ndash;5x EBITDA for $2&ndash;10M revenue</li>
          <li><strong>Premium factors:</strong> High contract renewal rate (&gt;85%), commercial contracts (HOAs, property managers), irrigation/hardscape capabilities, year-round service offering</li>
          <li><strong>Discount factors:</strong> Residential-only with no contracts, seasonal (mow-only), owner-dependent, high crew turnover</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>
        <ul className={ulClass}>
          <li><strong>Contract base:</strong> Number of active contracts, average contract value, renewal rates, and seasonality pattern</li>
          <li><strong>Crew productivity:</strong> Revenue per crew per day. Healthy benchmark: $1,500&ndash;$2,500 per crew per day</li>
          <li><strong>Customer mix:</strong> Commercial (property managers, HOAs, offices) vs. residential. Commercial contracts are more stable and higher value</li>
          <li><strong>Seasonality:</strong> Northern markets have 4&ndash;6 month core seasons. Southern markets are year-round. Evaluate revenue distribution by month</li>
          <li><strong>Labor:</strong> H-2B visa dependence, wage rates, crew retention, and training programs. Labor is the #1 constraint and cost driver</li>
          <li><strong>Equipment:</strong> Fleet age, maintenance records, replacement schedule. Mowers, trucks, and trailers</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>Add services:</strong> Irrigation, hardscape, tree care, holiday lighting, snow removal (northern markets). Each service increases revenue per customer 20&ndash;50%</li>
          <li><strong>Price increases:</strong> Many landscaping companies haven&rsquo;t raised prices in years. 5&ndash;15% increases with minimal churn for maintenance contracts</li>
          <li><strong>Technology:</strong> Route optimization, GPS fleet tracking, CRM, automated billing. Most landscaping companies are technologically behind</li>
          <li><strong>Commercial development:</strong> Actively pursue property management companies, HOAs, and commercial facilities for higher-value contracts</li>
          <li><strong>Buy-and-build:</strong> Acquire 3&ndash;5 companies in the same metro area. Consolidate back-office, fleet, and equipment purchasing for 20&ndash;30% cost savings</li>
        </ul>

        <p>
          For related playbooks, see{" "}
          <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">
            home services acquisition
          </Link>{" "}
          and{" "}
          <Link href="/learn/acquiring-hvac-business" className="text-apple-accent hover:underline">
            HVAC acquisition
          </Link>.
        </p>
      </div>
    </article>
  );
}
