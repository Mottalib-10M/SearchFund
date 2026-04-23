import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SellerDataRoomArticle() {
  return (
    <article>
      <h1 className={h1Class}>Setting Up a Seller Data Room</h1>
      <div className={bodyClass}>
        <p>A well-organized data room is one of the most impactful things a seller can do to accelerate the deal process and maximize their sale price. The data room &mdash; a secure digital repository of business documents shared with potential buyers during due diligence &mdash; signals professionalism, reduces buyer uncertainty, and demonstrates that the business is well-managed. Poor data room organization, by contrast, creates delays, erodes buyer confidence, and can reduce valuations by 10&ndash;20%.</p>
      </div>

      <h2 className={h2Class}>Data Room Platforms</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Virtual data rooms (VDR):</strong> Dedicated platforms like Intralinks, Merrill Datasite, and Firmex. Best for larger deals with multiple bidders. Robust security and tracking.</li>
          <li><strong>Cloud storage:</strong> Google Drive, Dropbox, or SharePoint with controlled sharing. Adequate for smaller deals with single buyer.</li>
          <li><strong>Key features:</strong> Document access controls, download tracking, watermarking, user activity logs, and Q&amp;A management.</li>
          <li><strong>Cost:</strong> VDR platforms charge $1,500&ndash;10,000+ per month. Cloud storage is essentially free but lacks security features.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Essential Documents</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Financial:</strong> 3&ndash;5 years of tax returns, P&amp;L statements, balance sheets, cash flow statements, AR/AP aging, and bank statements.</li>
          <li><strong>Legal:</strong> Corporate formation documents, operating agreements, shareholder agreements, and any pending litigation.</li>
          <li><strong>Contracts:</strong> Customer contracts, supplier agreements, lease agreements, equipment leases, and any long-term commitments.</li>
          <li><strong>Employees:</strong> Organizational chart, employee roster with compensation, benefits summary, employment agreements, and key person bios.</li>
          <li><strong>Operations:</strong> Standard operating procedures, technology systems, vendor relationships, insurance policies, and permits/licenses.</li>
          <li><strong>Revenue:</strong> Customer list with revenue by customer, revenue concentration analysis, contract renewal dates, and pipeline data.</li>
          <li><strong>Tax:</strong> Federal, state, and local tax returns. Sales tax compliance. Any pending audits or tax disputes.</li>
          <li><strong>IP:</strong> Patents, trademarks, copyrights, trade secrets, domain names, and any IP-related agreements.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Organization Best Practices</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li>Create a clear folder structure with numbered categories (1.0 Financial, 2.0 Legal, 3.0 Contracts, etc.)</li>
          <li>Name files consistently: &ldquo;Category_Document_Year&rdquo; format (e.g., &ldquo;1.1_Income_Statement_2024.pdf&rdquo;)</li>
          <li>Include an index document listing all files with brief descriptions and cross-references</li>
          <li>Upload complete documents &mdash; missing pages or partial files create suspicion and delay</li>
          <li>Start preparing the data room 3&ndash;6 months before going to market. Don&apos;t rush under deal pressure.</li>
          <li>Designate a Q&amp;A coordinator to respond to buyer questions promptly (within 24&ndash;48 hours)</li>
        </ol>
      </div>

      <h2 className={h2Class}>Common Mistakes</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Disorganized documents:</strong> Random file dumps signal poor management. Organized data rooms signal a well-run business.</li>
          <li><strong>Missing documents:</strong> Gaps in financial records or contracts raise red flags and slow due diligence.</li>
          <li><strong>Delayed population:</strong> Adding documents piecemeal as buyers request them creates frustration and suspicion.</li>
          <li><strong>Over-sharing too early:</strong> Share summary documents first. Detailed contracts and customer lists only after LOI is signed.</li>
          <li><strong>No access controls:</strong> All buyers should not have access to the same documents. Stage access by deal phase.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>A well-organized data room signals professionalism and can increase valuations by 10&ndash;20% compared to disorganized document sharing</li>
          <li>Start data room preparation 3&ndash;6 months before going to market to ensure completeness and organization</li>
          <li>Essential documents: 3&ndash;5 years of financials, contracts, employee data, legal documents, and revenue analysis</li>
          <li>Stage document access: summary information pre-LOI, detailed documents post-LOI with confidentiality protections</li>
          <li>Prompt Q&amp;A responses (24&ndash;48 hours) maintain buyer confidence and deal momentum</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">Due Diligence Checklist</Link></li>
        <li><Link href="/learn/emotional-journey-selling" className="text-apple-accent hover:underline">The Emotional Journey of Selling</Link></li>
        <li><Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">Quality of Earnings</Link></li>
        <li><Link href="/learn/seller-transition-planning" className="text-apple-accent hover:underline">Seller Transition Planning</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Axial, <em>Data Room Best Practices for Business Sellers</em> (2024)</li>
        <li>Deloitte, <em>M&amp;A Data Room Checklist</em> (2024)</li>
        <li>Exit Planning Institute, <em>Preparing Your Business for Sale</em> (2024)</li>
      </ul>
    </article>
  );
}
