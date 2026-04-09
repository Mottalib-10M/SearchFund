import { h1Class, h2Class, bodyClass, ulClass } from "./shared-styles";

export default function DueDiligenceArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA Due Diligence Checklist</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          Due diligence is the most critical phase of any search fund
          acquisition. This comprehensive checklist covers every area you need
          to investigate before signing a purchase agreement.
        </p>

        <h2 className={h2Class}>Financial due diligence</h2>
        <ul className={ulClass}>
          <li>3-5 years of audited financial statements (P&L, balance sheet, cash flow).</li>
          <li>Quality of earnings (QoE) analysis — separate recurring vs. non-recurring items.</li>
          <li>Revenue breakdown by customer, product/service, and geography.</li>
          <li>Customer concentration analysis (top 10 customers as % of revenue).</li>
          <li>Working capital analysis and seasonal patterns.</li>
          <li>Capital expenditure history and future requirements.</li>
          <li>Debt schedule, covenants, and off-balance-sheet liabilities.</li>
          <li>Owner add-backs and normalization adjustments to EBITDA.</li>
          <li>Tax returns and any ongoing disputes with tax authorities.</li>
        </ul>

        <h2 className={h2Class}>Legal due diligence</h2>
        <ul className={ulClass}>
          <li>Corporate formation documents, bylaws, and shareholder agreements.</li>
          <li>All material contracts (customers, suppliers, leases, licenses).</li>
          <li>Intellectual property — patents, trademarks, trade secrets, software licenses.</li>
          <li>Pending or threatened litigation and historical legal disputes.</li>
          <li>Regulatory compliance and industry-specific permits/licenses.</li>
          <li>Environmental liabilities and compliance history.</li>
          <li>Insurance policies and claims history.</li>
        </ul>

        <h2 className={h2Class}>Operational due diligence</h2>
        <ul className={ulClass}>
          <li>Organizational chart and key employee identification.</li>
          <li>Employee contracts, benefits, and compensation structures.</li>
          <li>Key person dependencies — what happens if critical staff leave?</li>
          <li>Technology stack, IT infrastructure, and cybersecurity posture.</li>
          <li>Facilities, equipment condition, and lease terms.</li>
          <li>Supply chain dependencies and vendor relationships.</li>
          <li>Quality management systems and certifications (ISO, etc.).</li>
        </ul>

        <h2 className={h2Class}>Commercial due diligence</h2>
        <ul className={ulClass}>
          <li>Market size, growth trends, and competitive landscape.</li>
          <li>Customer interviews — satisfaction, switching costs, contract renewal rates.</li>
          <li>Sales pipeline and new business development process.</li>
          <li>Pricing power and margin sustainability.</li>
          <li>Competitive moat — what makes this business defensible?</li>
          <li>Growth opportunities — organic expansion, add-on acquisitions, new markets.</li>
        </ul>

        <h2 className={h2Class}>Cultural & transition due diligence</h2>
        <ul className={ulClass}>
          <li>Seller&apos;s motivation and timeline for transition.</li>
          <li>Company culture and employee morale assessment.</li>
          <li>Transition plan — how long will the seller stay to ensure continuity?</li>
          <li>Relationships with key stakeholders (customers, suppliers, community).</li>
          <li>Identify potential risks of ownership change on business relationships.</li>
        </ul>
      </div>
    </article>
  );
}
