import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function AcquisitionInsuranceRWArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquisition Insurance: R&W, Key Person & D&O</h1>
      <div className={bodyClass}>
        <p>Insurance plays an increasingly important role in business acquisitions, helping bridge gaps between buyer and seller expectations, protect against post-closing risks, and smooth negotiations. According to Marsh&apos;s 2024 Transactional Risk Insurance Market Report, R&amp;W insurance usage has expanded dramatically in the lower middle market, with policies now available for deals as small as $5 million. Understanding Representations &amp; Warranties (R&amp;W) insurance, key person insurance, and Directors &amp; Officers (D&amp;O) coverage is essential for structuring well-protected deals.</p>
      </div>

      <h2 className={h2Class}>Representations & Warranties (R&W) Insurance</h2>
      <div className={bodyClass}>
        <p>R&W insurance (also called warranty & indemnity insurance in Europe) covers losses arising from breaches of the seller&apos;s <Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">representations and warranties</Link> in the purchase agreement:</p>
        <ul className={ulClass}>
          <li><strong>How it works:</strong> The insurer assumes the financial risk of the seller&apos;s reps being inaccurate (e.g., undisclosed liabilities, tax issues, contract problems)</li>
          <li><strong>Coverage:</strong> Typically 10-30% of the enterprise value, with a retention (deductible) of 0.5-1% of deal value</li>
          <li><strong>Premium:</strong> 2-4% of the coverage limit (so a $2M policy on a $10M deal costs $40K-$80K)</li>
          <li><strong>Who pays:</strong> Typically the buyer, though sometimes split or negotiated into the deal price</li>
          <li><strong>Policy term:</strong> Usually 3-6 years, matching the survival period of the reps in the purchase agreement</li>
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
        <p><strong>Note:</strong> R&amp;W insurance was traditionally available only for deals above $25M, but the market has expanded significantly. AIG, Euclid Transactional, and several Lloyd&apos;s syndicates now offer policies for deals as small as $5M-$10M. For search fund acquisitions, R&amp;W insurance can be especially valuable when the seller is a retiring owner who wants a clean break, it allows them to walk away without multi-year indemnification exposure while giving the buyer strong protection against undisclosed issues.</p>
        <p>When evaluating R&amp;W insurance, pay close attention to the policy exclusions. Standard exclusions typically include known issues identified in <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link>, forward-looking statements, purchase price adjustments, and certain environmental or pension liabilities. The underwriting process itself (which involves a detailed review of your diligence findings) often takes 2-3 weeks and should be factored into your <Link href="/learn/closing-process" className="text-apple-accent hover:underline">closing timeline</Link>.</p>
      </div>

      <h2 className={h2Class}>Key Person Insurance</h2>
      <div className={bodyClass}>
        <p>Key person insurance protects against the death or disability of critical individuals:</p>
        <ul className={ulClass}>
          <li><strong>Purpose:</strong> Compensates the business for financial losses if a key person can no longer contribute</li>
          <li><strong>Common in ETA:</strong> Lenders (especially SBA) often require key person insurance on the searcher/CEO</li>
          <li><strong>Coverage amount:</strong> Typically equal to the loan balance or 1-2x the person&apos;s annual economic contribution</li>
          <li><strong>Beneficiary:</strong> The business (not the person&apos;s family) is the policy beneficiary</li>
          <li><strong>Cost:</strong> $500-$3,000/year depending on age, health, and coverage amount</li>
          <li><strong>Who to insure:</strong> The new CEO, the departing seller during transition, and any key employees whose loss would materially impact the business</li>
        </ul>
      </div>

      <h2 className={h2Class}>Directors & Officers (D&O) Insurance</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Purpose:</strong> Protects board members and officers against personal liability for decisions made in their roles</li>
          <li><strong>Why important post-acquisition:</strong> Search fund <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board members</Link> (investor representatives and independents) expect D&O coverage</li>
          <li><strong>Coverage areas:</strong> Shareholder suits, regulatory investigations, employment claims, fiduciary duty breaches</li>
          <li><strong>Cost:</strong> $2,000-$10,000/year for typical search fund-sized companies</li>
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
          <li>R&W insurance is increasingly available for smaller deals ($5-10M+) and can smooth negotiations significantly</li>
          <li>Key person insurance is typically required by SBA lenders and protects against the loss of critical personnel</li>
          <li>D&O insurance is expected by board members and protects against personal liability for governance decisions</li>
          <li>Budget for insurance costs in your acquisition model, they are a real but manageable expense</li>
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

      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <h3 className={h3Class}>Is R&amp;W insurance worth it for a small search fund deal?</h3>
      <div className={bodyClass}>
        <p>For deals under $5M, R&amp;W insurance is generally not cost-effective because the premium ($40K-$80K+ for a $2M policy) represents a significant percentage of the deal value. For deals in the $5M-$20M range, R&amp;W insurance becomes increasingly valuable, especially when the seller is a retiring owner who wants a clean exit or when the deal is competitive and you want to differentiate your offer. The premium typically represents 2-4% of coverage limits, with a retention (deductible) of 0.5-1% of enterprise value.</p>
      </div>

      <h3 className={h3Class}>What does key person insurance cost and who pays for it?</h3>
      <div className={bodyClass}>
        <p>Key person insurance typically costs $500-$3,000 per year depending on the insured person&apos;s age, health, and coverage amount. The business is both the purchaser and beneficiary of the policy. SBA lenders almost always require key person insurance on the searcher/CEO as a loan condition, with coverage equal to the outstanding loan balance. The cost is a deductible business expense. Beyond the SBA requirement, it&apos;s also wise to insure the departing seller during the transition period and any employees whose loss would materially impact operations.</p>
      </div>

      <h3 className={h3Class}>When should I purchase tail D&amp;O coverage?</h3>
      <div className={bodyClass}>
        <p>Tail D&amp;O coverage (also called &quot;run-off&quot; coverage) should be purchased at the time you sell the company, not when you acquire it. It extends protection for board members and officers for actions taken during the ownership period, typically for 6 years after the sale. Willis Towers Watson estimates tail coverage costs roughly 200-300% of the final annual D&amp;O premium. Factor this cost into your exit planning and <Link href="/learn/preparing-company-exit" className="text-apple-accent hover:underline">sale preparation</Link>. Board members and investor representatives will expect this protection as part of any exit transaction.</p>
      </div>
    </article>
  );
}
