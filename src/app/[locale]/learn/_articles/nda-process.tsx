import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function NDAProcessArticle() {
  return (
    <article>
      <h1 className={h1Class}>The NDA Process: Signing, Managing & Best Practices</h1>
      <div className={bodyClass}>
        <p>The Non-Disclosure Agreement (NDA) is usually the first legal document you sign when exploring an acquisition. While NDAs may seem routine, understanding their terms, managing your obligations, and avoiding common pitfalls is essential for maintaining credibility and protecting both parties.</p>
      </div>

      <h2 className={h2Class}>What the NDA Covers</h2>
      <div className={bodyClass}>
        <p>A standard acquisition NDA typically includes:</p>
        <ul className={ulClass}>
          <li><strong>Definition of confidential information:</strong> Financial data, customer lists, employee information, trade secrets, business plans, and any information about the potential sale itself</li>
          <li><strong>Permitted use:</strong> Information can only be used to evaluate the potential acquisition</li>
          <li><strong>Non-disclosure obligations:</strong> You cannot share information with anyone except authorized representatives (attorneys, accountants, lenders)</li>
          <li><strong>Term:</strong> Typically 2&ndash;3 years, though some are perpetual for trade secrets</li>
          <li><strong>Return/destruction of materials:</strong> Obligation to return or destroy confidential materials if the deal doesn&apos;t proceed</li>
          <li><strong>Non-solicitation:</strong> Prohibition on hiring the seller&apos;s employees for a period (typically 12&ndash;24 months)</li>
          <li><strong>Standstill:</strong> In some cases, restrictions on making unsolicited offers or contacting the seller&apos;s stakeholders directly</li>
        </ul>
      </div>

      <h2 className={h2Class}>Types of NDAs</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Unilateral (one-way):</strong> Most common in acquisitions. Only the buyer is bound. The seller shares information; the buyer promises confidentiality.</li>
          <li><strong>Mutual (two-way):</strong> Both parties exchange confidential information. Used when the buyer also shares sensitive data (e.g., financial capacity, investor details).</li>
          <li><strong>Broker-provided:</strong> Standard forms from business brokers. Often adequate but review carefully &mdash; some contain unusual provisions.</li>
          <li><strong>Seller&apos;s counsel-drafted:</strong> May contain aggressive terms. Always have your attorney review.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Provisions to Negotiate</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Definition breadth:</strong> Ensure &quot;confidential information&quot; doesn&apos;t include publicly available information or data you already knew</li>
          <li><strong>Permitted disclosures:</strong> Ensure you can share with your attorneys, accountants, lenders, and investors (under their own confidentiality obligations)</li>
          <li><strong>Non-solicitation scope:</strong> Limit to employees you actually interact with during diligence, not all employees globally</li>
          <li><strong>Term length:</strong> 2 years is standard; push back on indefinite terms (except for true trade secrets)</li>
          <li><strong>Residuals clause:</strong> Some NDAs prohibit using &quot;residual knowledge&quot; &mdash; information retained in your memory. This is nearly impossible to comply with; negotiate it out.</li>
          <li><strong>Damages:</strong> Remove any liquidated damages or penalty provisions; standard remedies should suffice</li>
          <li><strong>Governing law:</strong> Prefer your home jurisdiction if possible</li>
        </ul>
      </div>

      <h2 className={h2Class}>Best Practices for Managing NDAs</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Track all NDAs:</strong> Maintain a spreadsheet of every NDA signed &mdash; date, company, broker, key terms, expiration. Active searchers sign 50&ndash;100+ NDAs.</li>
          <li><strong>Read before signing:</strong> Don&apos;t sign broker NDAs without reviewing. Most are standard, but the one time you don&apos;t read could be costly.</li>
          <li><strong>Limit information sharing:</strong> Only share deal information with authorized representatives on a need-to-know basis.</li>
          <li><strong>Secure storage:</strong> Keep CIMs and financial data in encrypted, password-protected folders. Don&apos;t leave printouts in public spaces.</li>
          <li><strong>Return/destroy promptly:</strong> When you pass on a deal, delete all materials and confirm compliance if requested.</li>
          <li><strong>Don&apos;t discuss deals publicly:</strong> Never mention a potential acquisition (even without naming the company) on social media, in investor updates with broad distribution, or at industry events.</li>
        </ol>
      </div>

      <h2 className={h2Class}>Common Mistakes</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Signing without reading:</strong> Every NDA is different. Unusual provisions can create unexpected obligations.</li>
          <li><strong>Sharing too broadly:</strong> Forwarding a CIM to a friend &quot;to get their opinion&quot; violates most NDAs.</li>
          <li><strong>Using information for competitive purposes:</strong> Even inadvertently applying insights from one company&apos;s confidential data to analyze another is risky.</li>
          <li><strong>Forgetting non-solicitation:</strong> Hiring a key employee from a company you evaluated (even if you didn&apos;t acquire it) can trigger NDA violations.</li>
          <li><strong>Verbal disclosures:</strong> Casually discussing deal details at networking events or with other searchers.</li>
        </ul>
      </div>

      <h2 className={h2Class}>The NDA in Context</h2>
      <div className={bodyClass}>
        <p>The NDA is step one in the acquisition process:</p>
        <ol className={olClass}>
          <li><strong>NDA signed</strong> &rarr; Receive CIM and financial data</li>
          <li><strong>Initial evaluation</strong> &rarr; Decide whether to proceed (see <Link href="/learn/reading-a-cim" className="text-apple-accent hover:underline">Reading a CIM</Link>)</li>
          <li><strong>Management meeting</strong> &rarr; Meet the seller, tour the business</li>
          <li><strong>LOI submission</strong> &rarr; <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">Letter of Intent</Link> with proposed terms</li>
          <li><strong>Due diligence</strong> &rarr; <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">Comprehensive DD</Link></li>
          <li><strong>Purchase agreement &amp; closing</strong></li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Always read NDAs before signing &mdash; even standard broker forms</li>
          <li>Track every NDA in a centralized log with key terms and expiration dates</li>
          <li>Ensure your attorneys, accountants, and lenders are covered as permitted recipients</li>
          <li>Push back on non-solicitation clauses that are too broad or residuals provisions</li>
          <li>Treat confidential information seriously &mdash; your reputation depends on it</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/reading-a-cim" className="text-apple-accent hover:underline">Reading a CIM: What to Look For</Link></li>
        <li><Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">Due Diligence Checklist</Link></li>
        <li><Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">Letter of Intent: How to Draft & Negotiate</Link></li>
        <li><Link href="/learn/working-with-brokers" className="text-apple-accent hover:underline">Working with Business Brokers</Link></li>
        <li><Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">Deal Sourcing Strategies</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>American Bar Association, <em>Model Confidentiality Agreement for M&A Transactions</em> (2023)</li>
        <li>Practical Law (Thomson Reuters), <em>Non-Disclosure Agreements in M&A: Key Issues</em> (2024)</li>
        <li>International Business Brokers Association, <em>Standard NDA Best Practices</em> (2024)</li>
      </ul>
    </article>
  );
}
