import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringAccountingFirmArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring an Accounting or Bookkeeping Firm
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Accounting firms generate some of the highest{" "}
          <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
            recurring revenue
          </Link>{" "}
          in professional services &mdash; with 95%+ annual client
          retention rates. The $150B+ US accounting industry is highly
          fragmented with tens of thousands of small firms, and a
          massive succession wave as baby boomer CPAs retire.
        </p>

        <h2 className={h2Class}>Why accounting firms?</h2>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> 85&ndash;95% of revenue recurs annually. Tax preparation, bookkeeping, and audit services repeat every year</li>
          <li><strong>High retention:</strong> Clients rarely switch accountants. The relationship is built on trust and institutional knowledge</li>
          <li><strong>Succession crisis:</strong> 75% of AICPA members will retire by 2030. Thousands of firms with no succession plan</li>
          <li><strong>Asset-light:</strong> Minimal capital requirements. Primary assets are client relationships and staff expertise</li>
          <li><strong>Fragmented:</strong> Tens of thousands of firms with $500K&ndash;$10M revenue</li>
          <li><strong>Pricing power:</strong> Annual fee increases of 3&ndash;8% are standard and accepted by clients</li>
        </ul>

        <h2 className={h2Class}>Service models</h2>
        <ul className={ulClass}>
          <li><strong>Tax preparation:</strong> Individual and business tax returns. Seasonal (January&ndash;April peak) but highly recurring</li>
          <li><strong>Bookkeeping:</strong> Monthly/quarterly bookkeeping services. Year-round recurring revenue</li>
          <li><strong>Audit &amp; assurance:</strong> Audits, reviews, and compilations. Higher skill requirement, higher fees</li>
          <li><strong>Advisory:</strong> Tax planning, business consulting, M&amp;A advisory. Highest margins, growing segment</li>
          <li><strong>Payroll &amp; HR:</strong> Payroll processing, benefits administration. Sticky, recurring</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Primary metric:</strong> 1&ndash;1.5x annual revenue (or 4&ndash;8x EBITDA)</li>
          <li><strong>Tax-only practices:</strong> 0.8&ndash;1.2x annual revenue</li>
          <li><strong>Full-service firms:</strong> 1.2&ndash;1.5x annual revenue</li>
          <li><strong>Premium factors:</strong> Monthly recurring services (bookkeeping, advisory), cloud-based systems, strong staff (not owner-dependent), commercial clients</li>
          <li><strong>Discount factors:</strong> Tax-season-only revenue, owner-dependent relationships, individual clients (lower revenue per client), outdated technology</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>
        <ul className={ulClass}>
          <li><strong>Client analysis:</strong> Revenue by client (look for{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              concentration
            </Link>), client tenure, and service mix per client</li>
          <li><strong>Staff assessment:</strong> CPA and EA credentials, years of experience, compensation vs. market. Partner/manager departures are the biggest risk. See{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              key person risk
            </Link></li>
          <li><strong>Technology stack:</strong> Accounting software (QuickBooks, Xero, Sage), tax software (Lacerte, UltraTax), practice management, and cloud adoption</li>
          <li><strong>Billing model:</strong> Hourly vs. fixed-fee vs. value pricing. Fixed-fee and value pricing are more profitable and scalable</li>
          <li><strong>Seasonal cash flow:</strong> Understand the revenue seasonality (peak tax season) and how it affects working capital</li>
          <li><strong>Regulatory:</strong> Peer review compliance, state licensing requirements, and professional liability insurance</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>Advisory upsell:</strong> Convert compliance clients into advisory relationships. Advisory services generate 2&ndash;3x the revenue per client</li>
          <li><strong>Cloud migration:</strong> Move to cloud-based systems for efficiency, scalability, and the ability to serve clients remotely</li>
          <li><strong>Pricing optimization:</strong>{" "}
            <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">
              Value-based pricing
            </Link>{" "}
            (vs. hourly billing) typically increases revenue 15&ndash;30% with the same client base</li>
          <li><strong>Offshore/nearshore support:</strong> Leverage bookkeeping and tax preparation talent in lower-cost geographies to improve margins</li>
          <li><strong>Roll-up:</strong> Acquire 3&ndash;5 firms in a metro area. Consolidate technology, training, and administrative functions</li>
        </ul>

        <p>
          For related playbooks, see{" "}
          <Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">
            professional services acquisition
          </Link>{" "}
          and{" "}
          <Link href="/learn/financial-services-acquisition" className="text-apple-accent hover:underline">
            financial services acquisition
          </Link>.
        </p>
      </div>
    </article>
  );
}
