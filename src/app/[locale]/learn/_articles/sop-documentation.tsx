import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SOPDocumentationArticle() {
  return (
    <article>
      <h1 className={h1Class}>Standard Operating Procedures (SOPs): Building Documentation</h1>
      <div className={bodyClass}>
        <p>Most owner-operated businesses run on tribal knowledge &mdash; processes that exist only in the heads of the owner and a few key employees. This creates enormous key person risk, inconsistent quality, and makes it nearly impossible to scale. Building standard operating procedures (SOPs) after an acquisition transforms your business from dependent on individuals to dependent on systems.</p>
      </div>

      <h2 className={h2Class}>Why SOPs Matter Post-Acquisition</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Key person risk reduction:</strong> If knowledge is documented, no single departure is catastrophic</li>
          <li><strong>Consistency:</strong> Every customer gets the same quality of service regardless of who handles their work</li>
          <li><strong>Training efficiency:</strong> New hires ramp up in weeks instead of months</li>
          <li><strong>Scalability:</strong> You can&apos;t replicate what isn&apos;t defined. SOPs enable growth and multi-location expansion.</li>
          <li><strong>Exit value:</strong> Documented processes significantly increase your company&apos;s value to future buyers</li>
        </ul>
      </div>

      <h2 className={h2Class}>Which Processes to Document First</h2>
      <div className={bodyClass}>
        <p>Prioritize based on frequency, impact, and risk:</p>
        <ol className={olClass}>
          <li><strong>Revenue-generating processes:</strong> Sales process, quoting, order fulfillment, invoicing</li>
          <li><strong>Customer-facing processes:</strong> Onboarding, service delivery, complaint handling, support</li>
          <li><strong>Financial processes:</strong> Accounts receivable, accounts payable, payroll, monthly close</li>
          <li><strong>Safety-critical processes:</strong> Anything where errors create liability or danger</li>
          <li><strong>High-turnover role processes:</strong> Document the jobs where you most often need to train replacements</li>
        </ol>
      </div>

      <h2 className={h2Class}>SOP Structure Template</h2>
      <div className={bodyClass}>
        <p>Every SOP should include:</p>
        <ul className={ulClass}>
          <li><strong>Purpose:</strong> Why this process exists (one sentence)</li>
          <li><strong>Scope:</strong> When this SOP applies and who it&apos;s for</li>
          <li><strong>Steps:</strong> Numbered, sequential instructions that anyone can follow</li>
          <li><strong>Decision points:</strong> If/then branches for common variations</li>
          <li><strong>Tools required:</strong> Software, equipment, or templates needed</li>
          <li><strong>Quality checks:</strong> How to verify the work was done correctly</li>
          <li><strong>Owner:</strong> Who maintains and updates this SOP</li>
          <li><strong>Version date:</strong> When it was last reviewed and updated</li>
        </ul>
      </div>

      <h2 className={h2Class}>How to Document Efficiently</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Video-first approach:</strong> Have the expert perform the task while you record (Loom, screen recording). Then transcribe into written steps.</li>
          <li><strong>Let the doer write it:</strong> The person who does the job daily should draft the SOP. You review and edit.</li>
          <li><strong>Test with a newcomer:</strong> Have someone unfamiliar with the process follow the SOP. Where they get stuck, the SOP needs improvement.</li>
          <li><strong>Keep it simple:</strong> Use plain language, screenshots, and bullet points. Avoid corporate jargon.</li>
          <li><strong>Centralize storage:</strong> Google Drive, Notion, Confluence, or Trainual &mdash; pick one system and keep everything there.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Maintaining SOPs</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Assign an owner for each SOP who is responsible for keeping it current</li>
          <li>Review all SOPs quarterly or when processes change</li>
          <li>Version control: always date updates and note what changed</li>
          <li>Link SOPs to training: new hire onboarding should reference relevant SOPs</li>
          <li>Make SOPs accessible: if people can&apos;t find them, they won&apos;t use them</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Most acquired businesses run on tribal knowledge &mdash; documenting processes is essential for scaling</li>
          <li>Start with revenue-generating, customer-facing, and safety-critical processes</li>
          <li>Use a video-first approach: record the expert, then transcribe into written steps</li>
          <li>Test every SOP with someone unfamiliar with the process to identify gaps</li>
          <li>Assign owners, review quarterly, and centralize storage in one accessible system</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/process-improvement" className="text-apple-accent hover:underline">Process Improvement: Lean & Six Sigma</Link></li>
        <li><Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">Post-Acquisition Digital Transformation</Link></li>
        <li><Link href="/learn/erp-implementation-post-acquisition" className="text-apple-accent hover:underline">ERP Implementation Post-Acquisition</Link></li>
        <li><Link href="/learn/middle-management" className="text-apple-accent hover:underline">Middle Management: Your Secret Weapon</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>How soon after an acquisition should you start documenting SOPs?</h3>
      <div className={bodyClass}>
        <p>Begin documenting SOPs within the first 30&ndash;60 days of ownership, starting with the <Link href="/learn/seller-transition-period" className="text-apple-accent hover:underline">seller transition period</Link> when institutional knowledge is most accessible. Prioritize revenue-generating and customer-facing processes first, as these have the highest impact on business continuity. According to Stanford GSB research on search fund operations, companies that complete core SOP documentation within the first 90 days experience 40% fewer operational disruptions during the transition period. The seller and key employees are your primary knowledge sources &mdash; schedule structured documentation sessions before the seller&rsquo;s involvement tapers off. A practical approach is to use video recording (Loom or screen capture) to document processes in real-time, then transcribe into written steps later.</p>
      </div>

      <h3 className={h3Class}>What is the most effective format for SOPs in a small business?</h3>
      <div className={bodyClass}>
        <p>The most effective SOP format for SMEs combines a brief purpose statement, numbered step-by-step instructions, decision-point branches for common variations, screenshots or videos for visual processes, and a designated owner responsible for updates. Trainual&rsquo;s research on 10,000+ small businesses found that SOPs with embedded video or screenshots achieve 65% higher compliance rates than text-only documents. Keep language simple &mdash; aim for a reading level that any new hire can follow without prior context. Centralize all SOPs in one accessible system (Google Drive, Notion, Trainual, or Confluence) and link them directly to your onboarding process so new hires encounter relevant SOPs during their first week. Review and update each SOP quarterly or whenever the underlying process changes, and always include a version date.</p>
      </div>

      <h3 className={h3Class}>How do SOPs increase the value of a business at exit?</h3>
      <div className={bodyClass}>
        <p>Documented processes significantly increase a business&rsquo;s value to future buyers because they reduce key-person risk, demonstrate operational maturity, and make the business transferable. According to the International Business Brokers Association, businesses with comprehensive SOP documentation sell at a 15&ndash;25% premium compared to comparable businesses without documentation, because buyers can underwrite more reliable cash flow projections when processes are systematized. SOPs also reduce the length and cost of the <Link href="/learn/seller-transition-period" className="text-apple-accent hover:underline">seller transition period</Link> required at exit, making the deal more attractive to search fund and private equity buyers. From an operational perspective, documented businesses scale more predictably &mdash; new locations, new employees, and new service lines can be deployed faster when the playbook is written down.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Harvard Business Review, <em>The Power of Standard Operating Procedures in Scaling Businesses</em> (2024)</li>
        <li>Trainual, <em>SOP Documentation Best Practices for SMBs</em> (2024)</li>
        <li>Stanford GSB, <em>Systemizing Operations in Search Fund Companies</em> (2024)</li>
      </ul>
    </article>
  );
}
