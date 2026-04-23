import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function AcquisitionInsuranceRWArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquisition Insurance: R&W, Key Person & D&O</h1>
      <div className={bodyClass}>
        <p>Insurance plays an increasingly important role in business acquisitions, helping bridge gaps between buyer and seller expectations, protect against post-closing risks, and smooth negotiations. Understanding Representations & Warranties (R&W) insurance, key person insurance, and Directors & Officers (D&O) coverage is essential for structuring well-protected deals.</p>
      </div>

      <h2 className={h2Class}>Representations & Warranties (R&W) Insurance</h2>
      <div className={bodyClass}>
        <p>R&W insurance (also called warranty & indemnity insurance in Europe) covers losses arising from breaches of the seller&apos;s <Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">representations and warranties</Link> in the purchase agreement:</p>
        <ul className={ulClass}>
          <li><strong>How it works:</strong> The insurer assumes the financial risk of the seller&apos;s reps being inaccurate (e.g., undisclosed liabilities, tax issues, contract problems)</li>
          <li><strong>Coverage:</strong> Typically 10&ndash;30% of the enterprise value, with a retention (deductible) of 0.5&ndash;1% of deal value</li>
          <li><strong>Premium:</strong> 2&ndash;4% of the coverage limit (so a $2M policy on a $10M deal costs $40K&ndash;$80K)</li>
          <li><strong>Who pays:</strong> Typically the buyer, though sometimes split or negotiated into the deal price</li>
          <li><strong>Policy term:</strong> Usually 3&ndash;6 years, matching the survival period of the reps in the purchase agreement</li>
        </ul>
      </div>

      <h2 className={h2Class}>When R&W Insurance Makes Sense</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Seller wants a clean exit:</strong> The seller can walk away without ongoing indemnification obligations</li>
          <li><strong>Competitive bidding:</strong> Offering R&W insurance makes your bid more attractive to sellers</li>
          <li><strong>Insufficient seller creditworthiness:</strong> If the seller may not be able to fund indemnification claims</li>
          <li><strong>Relationship preservation:</strong> Avoids adversarial post-closing indemnification disputes</li>
          <li><strong>Management sellers:</strong> When the seller continues as an employee, R&W insurance prevents awkward claims between employer and employee</li>
        </ul>
        <p><strong>Note:</strong> R&W insurance was traditionally available only for deals above $25M, but the market has expanded significantly. Some insurers now offer policies for deals as small as $5M&ndash;$10M.</p>
      </div>

      <h2 className={h2Class}>Key Person Insurance</h2>
      <div className={bodyClass}>
        <p>Key person insurance protects against the death or disability of critical individuals:</p>
        <ul className={ulClass}>
          <li><strong>Purpose:</strong> Compensates the business for financial losses if a key person can no longer contribute</li>
          <li><strong>Common in ETA:</strong> Lenders (especially SBA) often require key person insurance on the searcher/CEO</li>
          <li><strong>Coverage amount:</strong> Typically equal to the loan balance or 1&ndash;2x the person&apos;s annual economic contribution</li>
          <li><strong>Beneficiary:</strong> The business (not the person&apos;s family) is the policy beneficiary</li>
          <li><strong>Cost:</strong> $500&ndash;$3,000/year depending on age, health, and coverage amount</li>
          <li><strong>Who to insure:</strong> The new CEO, the departing seller during transition, and any key employees whose loss would materially impact the business</li>
        </ul>
      </div>

      <h2 className={h2Class}>Directors & Officers (D&O) Insurance</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Purpose:</strong> Protects board members and officers against personal liability for decisions made in their roles</li>
          <li><strong>Why important post-acquisition:</strong> Search fund <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board members</Link> (investor representatives and independents) expect D&O coverage</li>
          <li><strong>Coverage areas:</strong> Shareholder suits, regulatory investigations, employment claims, fiduciary duty breaches</li>
          <li><strong>Cost:</strong> $2,000&ndash;$10,000/year for typical search fund-sized companies</li>
          <li><strong>Tail coverage:</strong> When selling the company, purchase &quot;tail&quot; D&O coverage (typically 6 years) to protect against claims arising from the ownership period</li>
        </ul>
      </div>

      <h2 className={h2Class}>Other Acquisition-Related Insurance</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Errors & Omissions (E&O):</strong> Professional liability for service-based businesses. Critical in professional services, IT, and healthcare acquisitions.</li>
          <li><strong>General Liability:</strong> Standard commercial coverage. Verify the existing policy transfers or obtain new coverage at closing.</li>
          <li><strong>Cyber Liability:</strong> Increasingly important, especially for businesses with customer data or online operations.</li>
          <li><strong>Environmental Insurance:</strong> For manufacturing or real estate-intensive acquisitions where <Link href="/learn/environmental-due-diligence" className="text-apple-accent hover:underline">environmental liability</Link> is a concern.</li>
          <li><strong>Tax Liability Insurance:</strong> Covers specific identified tax risks (e.g., uncertain tax positions, transfer pricing risks).</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>R&W insurance is increasingly available for smaller deals ($5&ndash;10M+) and can smooth negotiations significantly</li>
          <li>Key person insurance is typically required by SBA lenders and protects against the loss of critical personnel</li>
          <li>D&O insurance is expected by board members and protects against personal liability for governance decisions</li>
          <li>Budget for insurance costs in your acquisition model &mdash; they are a real but manageable expense</li>
          <li>Work with a commercial insurance broker experienced in M&A to get the right coverage at competitive rates</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">Representations & Warranties in M&A</Link></li>
        <li><Link href="/learn/indemnification-escrow" className="text-apple-accent hover:underline">Indemnification & Escrow</Link></li>
        <li><Link href="/learn/board-governance" className="text-apple-accent hover:underline">Board Governance for Search Fund Companies</Link></li>
        <li><Link href="/learn/closing-process" className="text-apple-accent hover:underline">The Closing Process</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Marsh, <em>Transactional Risk Insurance Market Report</em> (2024)</li>
        <li>AIG, <em>Representations and Warranties Insurance Guide</em> (2024)</li>
        <li>SBA, <em>Life Insurance Requirements for 7(a) Loans</em> (2024)</li>
        <li>Willis Towers Watson, <em>D&O Insurance Market Update</em> (2024)</li>
      </ul>
    </article>
  );
}
