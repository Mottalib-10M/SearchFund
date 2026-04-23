import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function RevenueBasedFinancingArticle() {
  return (
    <article>
      <h1 className={h1Class}>Revenue-Based Financing for Post-Acquisition Growth</h1>
      <div className={bodyClass}>
        <p>Revenue-Based Financing (RBF) is an alternative funding model where repayment is tied to a percentage of monthly revenue rather than fixed installments. For search fund CEOs looking to grow their acquired companies without additional equity dilution or rigid bank covenants, RBF offers a flexible middle ground between traditional debt and equity financing.</p>
      </div>

      <h2 className={h2Class}>How Revenue-Based Financing Works</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Capital advance:</strong> You receive a lump sum (typically $100K&ndash;$5M)</li>
          <li><strong>Repayment:</strong> A fixed percentage of monthly gross revenue (typically 2&ndash;8%) until a predetermined cap is reached</li>
          <li><strong>Repayment cap:</strong> Usually 1.3&ndash;2.5x the original advance (the &quot;payback multiple&quot;)</li>
          <li><strong>Timeline:</strong> Repayment typically takes 12&ndash;60 months, depending on revenue growth</li>
          <li><strong>No equity dilution:</strong> RBF is debt, not equity &mdash; you retain full ownership</li>
          <li><strong>No personal guarantee:</strong> Many RBF providers don&apos;t require personal guarantees (though some do)</li>
        </ul>
      </div>

      <h2 className={h2Class}>When RBF Makes Sense Post-Acquisition</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Growth capital:</strong> Funding marketing campaigns, sales hires, or product development after closing the acquisition</li>
          <li><strong>Working capital gaps:</strong> Bridging seasonal revenue fluctuations or customer payment delays</li>
          <li><strong>Technology investment:</strong> Funding <Link href="/learn/erp-implementation-post-acquisition" className="text-apple-accent hover:underline">ERP implementation</Link> or digital transformation projects</li>
          <li><strong>Debt refinancing:</strong> Replacing expensive mezzanine debt with lower-cost RBF</li>
          <li><strong>Add-on acquisition deposits:</strong> Funding earnest money or <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">bolt-on acquisition</Link> costs</li>
        </ul>
      </div>

      <h2 className={h2Class}>RBF vs. Other Financing Options</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>vs. Bank loans:</strong> RBF is faster to obtain, more flexible on repayment, but more expensive. No covenants or fixed maturity dates.</li>
          <li><strong>vs. Equity:</strong> RBF preserves ownership. No board seats, no dilution, no investor approval for decisions.</li>
          <li><strong>vs. Mezzanine:</strong> RBF is simpler to structure, faster to close, and doesn&apos;t require warrants or equity kickers.</li>
          <li><strong>vs. Merchant cash advance:</strong> RBF has more transparent pricing and longer terms. MCAs can carry effective APRs of 50&ndash;100%+.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Terms to Evaluate</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Payback multiple:</strong> The total amount you repay divided by the amount received. Lower is better (1.3x is good; 2.5x is expensive).</li>
          <li><strong>Revenue share percentage:</strong> The monthly percentage of revenue going to repayment. Higher percentages mean faster repayment but more cash flow strain.</li>
          <li><strong>Minimum payment:</strong> Some RBF agreements include a minimum monthly payment regardless of revenue &mdash; this reduces the flexibility benefit.</li>
          <li><strong>Prepayment:</strong> Can you repay early at a discount? Some providers offer this; others don&apos;t.</li>
          <li><strong>Covenants:</strong> RBF typically has fewer covenants than bank debt, but check for revenue floors or operational restrictions.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Notable RBF Providers</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Clearco:</strong> E-commerce and subscription business focused</li>
          <li><strong>Pipe:</strong> Converts recurring revenue streams to upfront capital</li>
          <li><strong>Capchase:</strong> SaaS and subscription business financing</li>
          <li><strong>Lighter Capital:</strong> Tech-focused revenue-based loans up to $4M</li>
          <li><strong>Uncapped:</strong> European RBF provider for digital businesses</li>
          <li><strong>Wayflyer:</strong> E-commerce working capital and growth financing</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>RBF ties repayment to revenue, providing natural protection during slow periods</li>
          <li>Best suited for post-acquisition growth capital, not acquisition financing itself</li>
          <li>Evaluate the payback multiple (1.3&ndash;2.5x) and revenue share percentage (2&ndash;8%) carefully</li>
          <li>Most RBF providers serve SaaS, e-commerce, and subscription businesses; fewer options for traditional SMEs</li>
          <li>RBF is more expensive than bank debt but faster, more flexible, and non-dilutive</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/creative-financing" className="text-apple-accent hover:underline">Creative Financing: 10 Ways to Fund an Acquisition</Link></li>
        <li><Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">Revenue Growth Playbook Post-Acquisition</Link></li>
        <li><Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">Working Capital Management</Link></li>
        <li><Link href="/learn/mezzanine-financing" className="text-apple-accent hover:underline">Mezzanine Financing for Business Acquisitions</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Lighter Capital, <em>Revenue-Based Financing: Market Data and Trends</em> (2024)</li>
        <li>PitchBook, <em>Alternative Lending Market Report</em> (2024)</li>
        <li>Federal Reserve, <em>Small Business Lending Survey: Alternative Finance</em> (2024)</li>
      </ul>
    </article>
  );
}
