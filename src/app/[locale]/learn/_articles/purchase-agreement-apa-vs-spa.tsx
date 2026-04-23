import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function PurchaseAgreementAPAvsSPAArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Understanding the Purchase Agreement: APA vs. SPA
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          The purchase agreement is the definitive legal document that
          transfers ownership of a business. There are two primary forms:
          Asset Purchase Agreement (APA) and Share Purchase Agreement (SPA).
          This guide covers the key clauses, negotiation points, and
          practical considerations for each. For the tax and structural
          comparison, see our{" "}
          <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
            asset vs. stock purchase guide
          </Link>.
        </p>

        <h2 className={h2Class}>Asset Purchase Agreement (APA)</h2>
        <p>
          In an APA, you buy specific assets and assume specific liabilities.
          The legal entity remains with the seller.
        </p>

        <h3 className={h3Class}>What you&rsquo;re buying</h3>
        <ul className={ulClass}>
          <li><strong>Tangible assets:</strong> Equipment, inventory, vehicles, furniture, fixtures</li>
          <li><strong>Intangible assets:</strong> Customer lists, goodwill, trade names, intellectual property, contracts</li>
          <li><strong>Assumed liabilities:</strong> Specifically enumerated liabilities you agree to take on (e.g., accounts payable, lease obligations)</li>
          <li><strong>Excluded assets:</strong> Cash, receivables (typically), and personal assets of the seller</li>
          <li><strong>Excluded liabilities:</strong> Everything not explicitly assumed stays with the seller&rsquo;s entity</li>
        </ul>

        <h3 className={h3Class}>Key APA clauses</h3>
        <ul className={ulClass}>
          <li><strong>Schedule of assets:</strong> Detailed list of every asset being purchased, often as exhibits</li>
          <li><strong>Schedule of assumed liabilities:</strong> Explicitly enumerate each liability you&rsquo;re taking on</li>
          <li><strong>Bulk sale compliance:</strong> Some states require notice to the seller&rsquo;s creditors before an asset sale</li>
          <li><strong>Assignment of contracts:</strong> Customer and vendor contracts must be individually assigned. Some require counterparty consent</li>
          <li><strong>Employee matters:</strong> You&rsquo;re not acquiring the seller&rsquo;s employees &mdash; you&rsquo;re hiring them as new employees of your entity. Handle benefits, PTO accruals, and employment terms carefully</li>
          <li><strong>Allocation of purchase price:</strong> How the total price is allocated across asset classes (equipment, goodwill, non-compete, etc.) affects tax treatment for both parties</li>
        </ul>

        <h3 className={h3Class}>When to use an APA</h3>
        <ul className={ulClass}>
          <li>You want to cherry-pick assets and leave liabilities behind</li>
          <li>The seller&rsquo;s entity has unknown or contingent liabilities</li>
          <li>You want a step-up in tax basis on acquired assets ({" "}
            <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
              tax benefits
            </Link>)</li>
          <li>The business has pending or historical legal issues</li>
          <li>The target is a sole proprietorship or single-member LLC</li>
        </ul>

        <h2 className={h2Class}>Share Purchase Agreement (SPA)</h2>
        <p>
          In an SPA, you buy the ownership interests (shares/membership units)
          of the legal entity. The entity continues to exist with all its
          assets, liabilities, contracts, and employees intact.
        </p>

        <h3 className={h3Class}>What you&rsquo;re buying</h3>
        <ul className={ulClass}>
          <li><strong>The entity itself:</strong> All assets, all liabilities (known and unknown), all contracts, all employees</li>
          <li><strong>Complete continuity:</strong> Contracts, licenses, permits, and employer relationships remain in place</li>
          <li><strong>Historical liabilities:</strong> You inherit the entity&rsquo;s full legal, tax, and regulatory history</li>
        </ul>

        <h3 className={h3Class}>Key SPA clauses</h3>
        <ul className={ulClass}>
          <li><strong>Representations and warranties:</strong> More extensive than in an APA because you&rsquo;re buying the entire entity. The seller represents the company&rsquo;s condition across 20&ndash;40 categories</li>
          <li><strong>Disclosure schedules:</strong> Detailed exceptions to representations (known liabilities, pending litigation, contract defaults)</li>
          <li><strong>Indemnification:</strong> Seller agrees to compensate buyer for losses from breaches of reps/warranties, typically with caps, baskets, and time limits</li>
          <li><strong>R&amp;W insurance:</strong> For larger deals ($10M+), Representations &amp; Warranties insurance can supplement or replace seller indemnification</li>
          <li><strong>Escrow/holdback:</strong> 10&ndash;15% of purchase price held in escrow for 12&ndash;24 months to cover indemnification claims</li>
        </ul>

        <h3 className={h3Class}>When to use an SPA</h3>
        <ul className={ulClass}>
          <li>The business has non-assignable contracts, licenses, or permits (government contracts, professional licenses)</li>
          <li>Contract assignment would trigger change-of-control provisions with customers or vendors</li>
          <li>The entity holds real estate or other assets that are expensive to transfer</li>
          <li>The seller strongly prefers stock treatment for capital gains tax reasons</li>
          <li>The target is a C-Corporation (seller avoids double taxation)</li>
        </ul>

        <h2 className={h2Class}>Common clauses in both APA and SPA</h2>

        <h3 className={h3Class}>Purchase price and adjustments</h3>
        <ul className={ulClass}>
          <li><strong>Base purchase price:</strong> Fixed amount or formula (e.g., X times trailing EBITDA)</li>
          <li><strong>Working capital adjustment:</strong> Mechanism to adjust price based on actual working capital at closing vs. a target &ldquo;peg&rdquo;</li>
          <li><strong>
            <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
              Earn-out
            </Link>:
          </strong> Contingent consideration tied to post-closing performance</li>
          <li><strong>
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              Seller note
            </Link>:
          </strong> Deferred portion of purchase price paid over time</li>
        </ul>

        <h3 className={h3Class}>Representations and warranties</h3>
        <p>
          The seller certifies the condition of the business. Key categories:
        </p>
        <ul className={ulClass}>
          <li>Organization and authority to sell</li>
          <li>Financial statements accuracy</li>
          <li>No undisclosed liabilities</li>
          <li>Tax compliance</li>
          <li>Material contracts and their status</li>
          <li>Litigation and disputes</li>
          <li>Environmental compliance</li>
          <li>Employee and labor matters</li>
          <li>Intellectual property ownership</li>
          <li>Insurance coverage</li>
        </ul>

        <h3 className={h3Class}>Conditions to closing</h3>
        <ul className={ulClass}>
          <li>Satisfactory completion of{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link></li>
          <li>Financing in place</li>
          <li>Required consents obtained (landlord, key customers, regulators)</li>
          <li>No material adverse change (MAC) between LOI and closing</li>
          <li>Non-compete agreement executed by the seller</li>
          <li>Transition services agreement in place</li>
        </ul>

        <h3 className={h3Class}>Post-closing provisions</h3>
        <ul className={ulClass}>
          <li><strong>Indemnification:</strong> Seller covers losses from breaches of reps/warranties and undisclosed liabilities</li>
          <li><strong>Escrow:</strong> Purchase price holdback to secure indemnification obligations</li>
          <li><strong>Non-compete:</strong> Seller agrees not to compete for 3&ndash;5 years within a defined geography</li>
          <li><strong>Transition assistance:</strong> Seller provides consulting services for 6&ndash;12 months post-closing</li>
        </ul>

        <h2 className={h2Class}>Negotiation tips for buyers</h2>
        <ul className={ulClass}>
          <li><strong>Hire experienced M&amp;A counsel:</strong> The purchase agreement is not the place to save money. Budget $30K&ndash;$75K in legal fees for the buy-side</li>
          <li><strong>Don&rsquo;t negotiate every clause:</strong> Focus on material provisions (price, reps/warranties, indemnification) rather than fighting over boilerplate</li>
          <li><strong>Working capital peg is critical:</strong> Get this right. Disagreements over working capital adjustments are the #1 source of post-closing disputes</li>
          <li><strong>Escrow protects you:</strong> Push for 15&ndash;20% escrow for 18&ndash;24 months, especially in share purchases where you inherit unknown liabilities</li>
          <li><strong>Read disclosure schedules carefully:</strong> The exceptions to reps/warranties are where the risks hide</li>
        </ul>

        <p>
          The purchase agreement is the culmination of your{" "}
          <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">
            negotiation
          </Link>{" "}
          process. For legal risks to investigate before signing, see our{" "}
          <Link href="/learn/legal-due-diligence" className="text-apple-accent hover:underline">
            legal due diligence
          </Link>{" "}
          guide.
        </p>
      </div>
    </article>
  );
}
