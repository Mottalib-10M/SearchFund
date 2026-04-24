import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function PersonalGuaranteesAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Personal Guarantees in Business Acquisitions: What to Know</h1>

      <div className={bodyClass}>
        <p>
          Personal guarantees (PGs) are one of the most consequential aspects of acquisition financing that many first-time buyers overlook. When you sign a personal guarantee, you&apos;re putting your personal assets on the line &mdash; your home, savings, and investments &mdash; to back the business loan. Understanding when PGs are required, how to negotiate their terms, and how to manage the risk is essential.
        </p>
      </div>

      <h2 className={h2Class}>When Are Personal Guarantees Required?</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>SBA 7(a) loans:</strong> Always required. Anyone with 20%+ ownership must provide unlimited PG</li>
          <li><strong>Conventional bank loans:</strong> Almost always required for SME acquisitions. Banks want personal recourse</li>
          <li><strong>Seller financing:</strong> Sometimes requested, particularly for larger seller notes</li>
          <li><strong>Mezzanine debt:</strong> May require limited PGs or pledges of specific assets</li>
          <li><strong>Equipment financing:</strong> Usually secured by the equipment itself; PG may be limited or waived</li>
        </ul>
        <p>
          For search fund acquisitions under $15M, expect to provide a personal guarantee on virtually all bank debt. According to{" "}
          <a href="https://www.sba.gov/document/sop-50-10-lender-development-company-loan-programs" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">SBA Standard Operating Procedure 50 10</a>, personal guarantees are mandatory for all SBA 7(a) borrowers with 20%+ ownership. The question is not whether you&apos;ll guarantee &mdash; it&apos;s on what terms.
        </p>
      </div>

      <h2 className={h2Class}>SBA Personal Guarantee Requirements</h2>
      <div className={bodyClass}>
        <p>The <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">SBA 7(a)</Link> program has specific PG rules:</p>
        <ul className={ulClass}>
          <li><strong>20% ownership threshold:</strong> Anyone owning 20% or more of the borrowing entity must guarantee</li>
          <li><strong>Unlimited guarantee:</strong> Each guarantor is liable for the full loan amount (not just their ownership share)</li>
          <li><strong>Spousal considerations:</strong> Spouses who co-own significant personal assets may need to guarantee or consent</li>
          <li><strong>No PG fee:</strong> Unlike some commercial loans, SBA doesn&apos;t charge a separate guarantee fee</li>
          <li><strong>SBA guarantee vs. personal guarantee:</strong> The SBA guarantees the lender (75&ndash;85% of loan); your PG guarantees the SBA and lender against your personal assets</li>
        </ul>
      </div>

      <h2 className={h2Class}>Types of Personal Guarantees</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Unlimited guarantee:</strong> You&apos;re liable for the full loan balance, interest, fees, and collection costs. Most common and most onerous.</li>
          <li><strong>Limited guarantee:</strong> Your liability is capped at a specific dollar amount or percentage. Less common but worth negotiating for.</li>
          <li><strong>Several guarantee:</strong> Each guarantor is liable only for their proportionate share. Harder to get but protects you from covering other owners&apos; obligations.</li>
          <li><strong>Joint and several:</strong> The lender can pursue any guarantor for the full amount. Most common structure.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Negotiating PG Terms</h2>
      <div className={bodyClass}>
        <p>While you likely can&apos;t avoid a PG entirely, you can negotiate favorable terms:</p>
        <ul className={ulClass}>
          <li>
            <strong>Burn-off provisions:</strong> The guarantee reduces or terminates as the loan is repaid. Example: PG drops to 50% when loan is below 50% of original balance, and releases entirely at 25%. This is the most valuable negotiation point.
          </li>
          <li>
            <strong>Time-based release:</strong> PG expires after a set period (e.g., 3&ndash;5 years) regardless of loan balance, provided no defaults have occurred.
          </li>
          <li>
            <strong>Financial covenants trigger release:</strong> PG releases when the business maintains certain financial ratios (e.g., DSCR above 1.5x) for consecutive periods.
          </li>
          <li>
            <strong>Collateral limitations:</strong> Negotiate to exclude your primary residence from the guarantee, or cap the home equity exposure.
          </li>
          <li>
            <strong>Cap the guarantee:</strong> Limit your personal exposure to a specific dollar amount rather than the full loan balance.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Spousal Guarantees</h2>
      <div className={bodyClass}>
        <p>
          Spousal guarantees are a sensitive topic. Many lenders require your spouse to guarantee if:
        </p>
        <ul className={ulClass}>
          <li>You own your home jointly (the primary source of personal guarantee collateral)</li>
          <li>The spouse has significant assets that the lender wants access to</li>
          <li>Community property states where marital assets are automatically shared</li>
        </ul>
        <p>
          In some states, you can use a &quot;spousal consent&quot; instead of a full guarantee &mdash; your spouse acknowledges the guarantee and consents to the lien on jointly owned property but doesn&apos;t become a full guarantor. Discuss this with your attorney.
        </p>
      </div>

      <h2 className={h2Class}>PGs in Search Fund Structures</h2>
      <div className={bodyClass}>
        <p>Personal guarantee dynamics differ by search fund model:</p>
        <ul className={ulClass}>
          <li>
            <strong>Traditional search fund:</strong> The searcher/CEO typically provides the PG since they control the company. Investors rarely guarantee. Some search fund agreements include provisions for the fund to indemnify the searcher for PG losses, but this is not universal.
          </li>
          <li>
            <strong>Self-funded search with SBA:</strong> The searcher provides the full PG. This is the most personally risky model &mdash; you&apos;re guaranteeing the entire loan with limited investor backing.
          </li>
          <li>
            <strong>Pledge fund:</strong> Similar to traditional &mdash; the operating CEO guarantees while investors do not.
          </li>
        </ul>
        <p>
          Understanding PG implications is critical when evaluating <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">searcher compensation</Link> &mdash; the personal guarantee is a real cost that should be factored into the overall economics.
        </p>
      </div>

      <h2 className={h2Class}>Risk Management Strategies</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Asset protection planning:</strong> Before signing the PG, consult an asset protection attorney. Some strategies (trusts, entity structuring) can protect certain assets, but they must be implemented before the guarantee &mdash; not after.</li>
          <li><strong>Insurance:</strong> Ensure strong business insurance (general liability, E&O, key person) to prevent claims that could cascade into PG exposure.</li>
          <li><strong>Cash reserves:</strong> Maintain 3&ndash;6 months of personal living expenses separate from business accounts.</li>
          <li><strong>Debt service coverage:</strong> Never take on a loan where the business DSCR is below 1.25x. Higher is better &mdash; aim for 1.5x+.</li>
          <li><strong>Pay down aggressively:</strong> The faster you reduce the loan balance, the faster your PG exposure decreases (especially with burn-off provisions).</li>
          <li><strong>Refinancing strategy:</strong> Plan to refinance to a non-recourse or limited-recourse structure as the business builds a track record under your ownership.</li>
        </ol>
      </div>

      <h2 className={h2Class}>What Happens If You Default</h2>
      <div className={bodyClass}>
        <p>If the business fails and the loan defaults, the typical sequence:</p>
        <ol className={olClass}>
          <li>Lender pursues business assets first (liquidation or sale)</li>
          <li>If business assets don&apos;t cover the loan, lender pursues personal guarantors</li>
          <li>For SBA loans, the SBA pays the lender&apos;s guaranteed portion, then the SBA pursues guarantors for the full amount</li>
          <li>Lender/SBA can garnish wages, seize bank accounts, and place liens on personal property</li>
          <li>Negotiated settlement is common &mdash; the{" "}
            <a href="https://www.americanbar.org/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">American Bar Association</a>{" "}
            notes that guarantors often settle for 50&ndash;80% of the outstanding balance when they engage experienced workout counsel early</li>
          <li>Bankruptcy is an option of last resort that may discharge the PG obligation</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>PGs are unavoidable for most SME acquisition debt &mdash; focus on{" "}
            <Link href="/learn/negotiating-bank-debt" className="text-apple-accent hover:underline">negotiating terms</Link>, not avoidance</li>
          <li>Burn-off provisions are the most valuable PG negotiation point</li>
          <li>SBA loans require unlimited PG from anyone with 20%+ ownership</li>
          <li>Asset protection planning should happen before signing the guarantee</li>
          <li>Maintain strong DSCR (1.5x+) and pay down debt aggressively to reduce exposure</li>
          <li>Factor PG risk into your overall search fund economics and compensation analysis</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">SBA 7(a) Loans: Complete Guide</Link></li>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">How to Finance a Search Fund Acquisition</Link></li>
        <li><Link href="/learn/self-funded-search-sba" className="text-apple-accent hover:underline">Self-Funded Search with SBA Financing</Link></li>
        <li><Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">Searcher Compensation: Salary, Equity & Economics</Link></li>
        <li><Link href="/learn/debt-structure-optimization" className="text-apple-accent hover:underline">Debt Structure Optimization</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>Can I avoid a personal guarantee when buying a business?</h3>
      <div className={bodyClass}>
        <p>
          For most SME acquisitions under $15M, no. Banks and the SBA require personal guarantees from anyone with 20%+ ownership. The rare exceptions are: (1) very large acquisitions ($25M+) with strong collateral and cash flow, where lenders may offer limited or no-recourse terms; (2) deals financed entirely by investors/equity with no bank debt; or (3) asset-heavy businesses where the collateral alone provides sufficient security. Instead of trying to avoid PGs entirely, focus on negotiating favorable terms &mdash; burn-off provisions, caps, and collateral limitations.
        </p>
      </div>

      <h3 className={h3Class}>What is a burn-off provision and why is it important?</h3>
      <div className={bodyClass}>
        <p>
          A burn-off provision reduces or eliminates your personal guarantee as the loan is repaid. For example, the PG might drop to 50% when the loan balance falls below 50% of the original amount, and release entirely at 25%. This is the single most valuable PG negotiation point because it creates a clear path to eliminating your personal risk. Without a burn-off, you remain fully liable for the entire loan term. Always negotiate burn-off provisions before signing &mdash; they are much harder to add after the fact.
        </p>
      </div>

      <h3 className={h3Class}>Does my spouse have to sign the personal guarantee?</h3>
      <div className={bodyClass}>
        <p>
          It depends on your state and asset ownership structure. Many lenders require spousal guarantees when you jointly own your home (the primary PG collateral) or live in a community property state. However, in some states you can use a &ldquo;spousal consent&rdquo; instead of a full guarantee &mdash; your spouse acknowledges the PG and consents to liens on jointly owned property without becoming a full guarantor. Discuss structuring options with both your M&amp;A attorney and a family asset protection specialist before signing.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>SBA, <em>Standard Operating Procedure 50 10 &mdash; Personal Guarantee Requirements</em> (2024)</li>
        <li>American Bar Association, <em>Personal Guarantees in Commercial Lending</em> (2023)</li>
        <li>SCORE, <em>Understanding Personal Guarantees When Buying a Business</em> (2024)</li>
        <li>Nolo, <em>Personal Guarantees: What Small Business Owners Need to Know</em> (2023)</li>
      </ul>
    </article>
  );
}
