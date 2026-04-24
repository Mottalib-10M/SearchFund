import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function NegotiatingBankDebtArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Negotiate Debt Terms for Your Acquisition</h1>
      <div className={bodyClass}>
        <p>Bank debt is typically the largest component of your <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">capital stack</Link>, often representing 50&ndash;65% of the total acquisition price. According to the{" "}
          <a href="https://bschool.pepperdine.edu/institutes-centers/centers/private-capital-markets-project/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Pepperdine Private Capital Markets Report (2024)</a>, senior debt terms in the lower middle market have tightened since 2022, with median spreads widening by 50&ndash;75 basis points. The terms you negotiate &mdash; interest rate, amortization, covenants, prepayment, and collateral &mdash; directly impact your cash flow, operational flexibility, and personal risk for years after closing.</p>
      </div>

      <h2 className={h2Class}>Key Terms to Negotiate</h2>
      <h3 className={h3Class}>Interest Rate</h3>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Fixed vs. variable:</strong> Fixed rates provide certainty; variable rates (SOFR + spread) start lower but carry interest rate risk</li>
          <li><strong>Typical spreads:</strong> SOFR + 2.5&ndash;4.5% for conventional; SBA rates are capped at SOFR + 2.75% for loans over $50K</li>
          <li><strong>Rate locks:</strong> If choosing fixed, negotiate a rate lock period during closing to protect against rate increases</li>
          <li><strong>Interest rate swaps:</strong> For larger loans ($5M+), you may be able to swap variable for fixed at favorable terms</li>
        </ul>
      </div>

      <h3 className={h3Class}>Amortization Schedule</h3>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Standard:</strong> 10-year amortization for business assets; 25-year for real estate</li>
          <li><strong>Interest-only period:</strong> Negotiate 6&ndash;12 months of interest-only payments to preserve cash during transition</li>
          <li><strong>Seasonal adjustments:</strong> If the business is seasonal, negotiate lower payments during off-peak months</li>
          <li><strong>Balloon payments:</strong> Avoid balloon structures when possible &mdash; they create refinancing risk</li>
        </ul>
      </div>

      <h3 className={h3Class}>Financial Covenants</h3>
      <div className={bodyClass}>
        <p>Covenants are financial tests you must pass regularly. Common covenants:</p>
        <ul className={ulClass}>
          <li><strong>Debt Service Coverage Ratio (DSCR):</strong> Typically 1.20&ndash;1.50x. EBITDA (or cash flow) divided by total debt payments. The most important covenant.</li>
          <li><strong>Leverage ratio:</strong> Total debt / EBITDA, typically capped at 3.0&ndash;4.5x</li>
          <li><strong>Fixed charge coverage:</strong> Similar to DSCR but includes all fixed obligations (rent, insurance, etc.)</li>
          <li><strong>Minimum EBITDA:</strong> Absolute floor for earnings &mdash; negotiate this as low as reasonable</li>
        </ul>
        <p>Negotiate: covenant-lite structures, cure periods (30 days to remedy), equity cure rights (ability to inject cash to fix a breach), and holiday periods (first 6&ndash;12 months covenant-free while you stabilize).</p>
      </div>

      <h3 className={h3Class}>Prepayment Terms</h3>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>SBA loans:</strong> Prepayment penalty of 5% in year 1, 3% in year 2, 1% in year 3, then none</li>
          <li><strong>Conventional loans:</strong> Negotiate no prepayment penalty or declining penalties</li>
          <li><strong>Mandatory prepayment:</strong> Some lenders require excess cash flow sweeps (50&ndash;75% of excess cash). Negotiate these down or out.</li>
        </ul>
      </div>

      <h3 className={h3Class}>Collateral and Security</h3>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Blanket lien:</strong> Standard &mdash; lender gets security interest in all business assets</li>
          <li><strong>Real property:</strong> If real estate is involved, expect a mortgage/deed of trust</li>
          <li><strong>Personal guarantee:</strong> See our <Link href="/learn/personal-guarantees-acquisition" className="text-apple-accent hover:underline">personal guarantees guide</Link></li>
          <li><strong>Life insurance:</strong> Lenders often require key-person life insurance assigned to the bank</li>
        </ul>
      </div>

      <h2 className={h2Class}>Choosing the Right Lender</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>SBA Preferred Lenders (PLPs):</strong> Faster approvals, more acquisition experience. Best for deals under $5M.</li>
          <li><strong>Regional/community banks:</strong> More flexible, relationship-oriented, willing to structure creatively</li>
          <li><strong>National banks:</strong> Competitive rates but less flexibility and harder to build relationships</li>
          <li><strong>Credit unions:</strong> Often competitive on rates, especially for smaller deals</li>
          <li><strong>Non-bank lenders:</strong> Alternative lenders, BDCs &mdash; faster but typically more expensive. For subordinated capital layers, see our <Link href="/learn/mezzanine-financing" className="text-apple-accent hover:underline">mezzanine financing guide</Link></li>
        </ul>
        <p>Talk to 3&ndash;5 lenders minimum. Use competing term sheets as leverage in negotiations. The{" "}
          <a href="https://www.aba.com/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">ABA Banking Journal</a>{" "}
          notes that community and regional banks close over 60% of acquisition loans under $10M, making them the most active lenders for search fund deals.</p>
      </div>

      <h2 className={h2Class}>The Term Sheet Process</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Initial inquiry:</strong> Share deal overview, CIM summary, and your background with 3&ndash;5 lenders</li>
          <li><strong>Preliminary term sheets:</strong> Lenders provide indicative terms (non-binding)</li>
          <li><strong>Negotiate and select:</strong> Use competing offers to improve terms, select preferred lender</li>
          <li><strong>Commitment letter:</strong> Lender issues binding commitment with final terms and conditions</li>
          <li><strong>Loan documentation:</strong> Attorneys draft loan agreement, security documents, and intercreditor agreements</li>
          <li><strong>Closing:</strong> Loan funds at acquisition closing</li>
        </ol>
        <p>Start the lender process early &mdash; ideally when you sign the LOI. Financing delays are a top cause of closing delays.</p>
      </div>

      <h2 className={h2Class}>Red Flags in Loan Terms</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Material adverse change (MAC) clause:</strong> Allows lender to pull financing before closing. Negotiate narrow, specific triggers.</li>
          <li><strong>Cross-default provisions:</strong> Default on any debt triggers default on bank loan. Understand the scope.</li>
          <li><strong>Change of control provisions:</strong> Restrictions on selling or restructuring. Ensure your exit strategy is viable.</li>
          <li><strong>Excessive cash flow sweeps:</strong> Mandatory excess cash flow prepayment above 50% is aggressive.</li>
          <li><strong>Tight covenant levels:</strong> Covenants set too close to current performance leave no room for normal variation.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Get 3&ndash;5 competing term sheets and use them as leverage</li>
          <li>Focus negotiations on covenants, prepayment, and personal guarantee terms &mdash; not just interest rate</li>
          <li>Negotiate interest-only periods and covenant holidays for the transition period</li>
          <li>Start the lender process at LOI signing to avoid closing delays</li>
          <li>Regional and community banks often offer the best flexibility for SME acquisitions</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">How to Finance a Search Fund Acquisition</Link></li>
        <li><Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">SBA 7(a) Loans: Complete Guide</Link></li>
        <li><Link href="/learn/personal-guarantees-acquisition" className="text-apple-accent hover:underline">Personal Guarantees in Acquisitions</Link></li>
        <li><Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">The Capital Stack Explained</Link></li>
        <li><Link href="/learn/debt-structure-optimization" className="text-apple-accent hover:underline">Debt Structure Optimization</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>How many lenders should I approach for an acquisition loan?</h3>
      <div className={bodyClass}>
        <p>
          Approach 3&ndash;5 lenders minimum. Having multiple term sheets creates competitive tension and gives you leverage to negotiate better rates, covenants, and prepayment terms. Include a mix of SBA Preferred Lenders, regional banks, and at least one credit union. Start the process when you sign the LOI &mdash; financing delays are the number one cause of failed closings in SME acquisitions.
        </p>
      </div>

      <h3 className={h3Class}>What is the most important loan term to negotiate beyond interest rate?</h3>
      <div className={bodyClass}>
        <p>
          Financial covenants. Most borrowers focus on interest rate, but covenants determine whether you keep control of your business. A tight DSCR covenant (e.g., 1.50x) with no cure rights can put you in technical default during a normal business downturn. Negotiate for covenant holidays during the first 6&ndash;12 months, equity cure rights, and 30-day remedy periods. These provisions give you breathing room during the critical post-acquisition transition.
        </p>
      </div>

      <h3 className={h3Class}>Should I choose a fixed or variable interest rate?</h3>
      <div className={bodyClass}>
        <p>
          It depends on your risk tolerance and the rate environment. Fixed rates provide payment certainty, which is valuable during the uncertain post-acquisition period. Variable rates (SOFR + spread) typically start lower but expose you to interest rate increases. For loans over $5M, consider an interest rate swap that converts variable to fixed at favorable terms. SBA 7(a) rates are capped at SOFR + 2.75% for loans over $50K, making them attractive in high-rate environments.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>SBA, <em>Standard Operating Procedure 50 10 &mdash; Loan Terms and Conditions</em> (2024)</li>
        <li>Pepperdine University, <em>Private Capital Markets Report &mdash; Senior Lending</em> (2024)</li>
        <li>ABA Banking Journal, <em>Best Practices in Acquisition Lending</em> (2023)</li>
        <li>Thomson Reuters Practical Law, <em>Negotiating Bank Loan Agreements</em> (2023)</li>
      </ul>
    </article>
  );
}
