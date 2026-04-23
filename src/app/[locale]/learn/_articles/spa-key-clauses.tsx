import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SPAKeyClausesArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Share Purchase Agreements (SPA): Key Clauses Explained
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          The Share Purchase Agreement (SPA) is the definitive legal
          document that governs a stock/share acquisition. Unlike an{" "}
          <Link href="/learn/apa-guide" className="text-apple-accent hover:underline">
            Asset Purchase Agreement
          </Link>, the SPA transfers ownership of the entity itself &mdash;
          all assets, liabilities, contracts, and employees come with it.
          Understanding the key clauses is essential for protecting yourself
          as a buyer. This guide covers the 12 most critical SPA provisions.
        </p>

        <h2 className={h2Class}>1. Purchase price &amp; payment mechanics</h2>
        <ul className={ulClass}>
          <li><strong>Enterprise value vs. equity value:</strong> The SPA specifies the equity price (EV minus net debt minus working capital adjustments)</li>
          <li><strong>Cash at close:</strong> Amount paid at closing via wire transfer</li>
          <li><strong>Seller note:</strong>{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              Deferred payment portion
            </Link>{" "}
            with interest rate, term, and subordination terms</li>
          <li><strong>Earn-out:</strong> Contingent price tied to post-closing performance. See{" "}
            <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
              earn-out structures
            </Link></li>
          <li><strong>Escrow/holdback:</strong> 5&ndash;15% of purchase price held in escrow for 12&ndash;24 months to cover post-closing claims</li>
        </ul>

        <h2 className={h2Class}>2. Representations &amp; warranties (R&amp;W)</h2>
        <ul className={ulClass}>
          <li><strong>What they are:</strong> Statements of fact by the seller about the business. If a statement turns out to be false, the buyer can seek indemnification</li>
          <li><strong>Key seller reps:</strong> Financial statements are accurate, no undisclosed liabilities, all material contracts are in force, no pending litigation, tax compliance, employee matters, environmental compliance, IP ownership</li>
          <li><strong>Key buyer reps:</strong> Authority to execute, financing is committed, no conflicts</li>
          <li><strong>Materiality qualifiers:</strong> Reps often qualified by &ldquo;material&rdquo; or &ldquo;to the seller&rsquo;s knowledge.&rdquo; Negotiate to remove as many qualifiers as possible</li>
          <li><strong>Survival period:</strong> Typically 12&ndash;24 months post-closing (longer for tax and environmental reps)</li>
        </ul>

        <h2 className={h2Class}>3. Working capital adjustment</h2>
        <ul className={ulClass}>
          <li>Ensures the business is delivered with a &ldquo;normal&rdquo; level of{" "}
            <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">
              working capital
            </Link></li>
          <li><strong>Target/peg:</strong> Agreed-upon normalized working capital level (based on trailing 12-month average)</li>
          <li><strong>True-up:</strong> Within 60&ndash;90 days post-closing, actual working capital is calculated. Excess above peg goes to seller; deficit below peg reduces purchase price</li>
          <li><strong>Key negotiation point:</strong> The definition of working capital items (which accounts are included/excluded)</li>
        </ul>

        <h2 className={h2Class}>4. Indemnification</h2>
        <ul className={ulClass}>
          <li><strong>Purpose:</strong> Allocates risk for breaches of reps, warranties, and covenants</li>
          <li><strong>Basket/deductible:</strong> Buyer must absorb the first $X of losses before indemnification kicks in (typically 0.5&ndash;1% of purchase price)</li>
          <li><strong>Cap:</strong> Maximum seller liability, typically 10&ndash;30% of purchase price (sometimes up to 100% for fraud)</li>
          <li><strong>Escrow:</strong> Funded from purchase price to cover indemnification claims</li>
          <li><strong>R&amp;W insurance:</strong> For larger deals ($5M+), buyer can purchase R&amp;W insurance to supplement seller indemnification</li>
        </ul>

        <h2 className={h2Class}>5. Closing conditions</h2>
        <ul className={ulClass}>
          <li><strong>Bring-down of reps:</strong> Seller&rsquo;s representations must still be true at closing</li>
          <li><strong>No material adverse change (MAC):</strong> Business has not suffered a material deterioration between signing and closing</li>
          <li><strong>Regulatory approvals:</strong> Any required government approvals have been obtained</li>
          <li><strong>Financing condition:</strong> Buyer has secured committed financing (SBA, bank debt)</li>
          <li><strong>Key employee retention:</strong> Critical employees have signed new employment agreements</li>
        </ul>

        <h2 className={h2Class}>6. Seller covenants</h2>
        <ul className={ulClass}>
          <li><strong>Pre-closing covenants:</strong> Seller must operate the business in the ordinary course between signing and closing &mdash; no major decisions without buyer consent</li>
          <li><strong>Non-compete:</strong> Seller cannot compete in the same industry/geography for 3&ndash;5 years</li>
          <li><strong>Non-solicit:</strong> Seller cannot recruit employees or solicit customers for 2&ndash;5 years</li>
          <li><strong>Transition assistance:</strong> Seller will provide consulting/transition services for X months post-closing (see{" "}
            <Link href="/learn/management-transition" className="text-apple-accent hover:underline">
              management transition
            </Link>)</li>
        </ul>

        <h2 className={h2Class}>7. Disclosure schedules</h2>
        <ul className={ulClass}>
          <li>Attached to the SPA, these schedules list every exception to the seller&rsquo;s representations</li>
          <li><strong>Critical schedules:</strong> Material contracts, pending litigation, customer list, employee list, IP register, real property leases, benefit plans</li>
          <li><strong>Diligence hook:</strong> Review disclosure schedules line by line during{" "}
            <Link href="/learn/legal-due-diligence" className="text-apple-accent hover:underline">
              legal DD
            </Link>{" "}
            &mdash; they reveal what the seller is &ldquo;confessing&rdquo; about the business</li>
        </ul>

        <h2 className={h2Class}>8. Additional critical clauses</h2>
        <ul className={ulClass}>
          <li><strong>Assignment of contracts:</strong> Some contracts require third-party consent to assign. Identify these during DD and make consent a closing condition</li>
          <li><strong>Tax matters:</strong> Allocation of tax responsibility (pre-close vs. post-close), tax returns filing, and{" "}
            <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
              tax election provisions
            </Link></li>
          <li><strong>Dispute resolution:</strong> Arbitration vs. litigation, jurisdiction, governing law</li>
          <li><strong>Termination rights:</strong> Conditions under which either party can walk away (breach, MAC, failure to close by a deadline)</li>
          <li><strong>Confidentiality:</strong> Ongoing obligations after closing regarding business information</li>
        </ul>

        <h2 className={h2Class}>SPA negotiation tips for buyers</h2>
        <ul className={ulClass}>
          <li><strong>Push for broad reps:</strong> More comprehensive seller representations = more protection</li>
          <li><strong>Minimize knowledge qualifiers:</strong> &ldquo;To seller&rsquo;s knowledge&rdquo; limits your recourse. Push for absolute representations where possible</li>
          <li><strong>Longer survival periods:</strong> 18&ndash;24 months for general reps; 3&ndash;5 years for tax reps</li>
          <li><strong>Protect working capital:</strong> Negotiate a tight definition and a true-up mechanism</li>
          <li><strong>Use your{" "}
            <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">
              M&amp;A attorney
            </Link></strong> &mdash; the SPA is not a document to negotiate without experienced legal counsel</li>
        </ul>

        <p>
          For the comparison with asset purchases, see{" "}
          <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
            APA vs. SPA
          </Link>.
          For the LOI that precedes the SPA, see{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            Letter of Intent guide
          </Link>.
        </p>
      </div>
    </article>
  );
}
