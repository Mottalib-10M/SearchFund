import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AssetPurchaseVsStockPurchaseArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Asset Purchase vs. Stock Purchase: Comprehensive Comparison
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          One of the most consequential decisions in any business acquisition is
          whether to structure the transaction as an asset purchase or a stock
          purchase (also called a share purchase or equity purchase). This
          structural choice affects taxes, liability exposure, contract
          transferability, and post-acquisition operations. For search fund
          entrepreneurs and self-funded acquirers, understanding the trade-offs
          is essential for negotiating the best deal structure.
        </p>

        <h2 className={h2Class}>What is an asset purchase?</h2>
        <p>
          In an asset purchase, the buyer acquires specific assets and liabilities
          of the business rather than the entity itself. The buyer cherry-picks
          which assets to acquire (equipment, inventory, customer lists,
          intellectual property, real estate) and which liabilities to assume.
          The selling entity continues to exist (at least temporarily) and
          retains any assets and liabilities not transferred to the buyer.
        </p>
        <p>
          Asset purchases are the most common structure for small business
          acquisitions. According to SBA lending data, approximately 70&ndash;80%
          of SBA-financed acquisitions are structured as asset purchases.
        </p>

        <h2 className={h2Class}>What is a stock purchase?</h2>
        <p>
          In a stock purchase, the buyer acquires the ownership interests
          (shares, membership units, or partnership interests) of the selling
          entity. The business entity itself &mdash; including all assets,
          liabilities, contracts, and obligations &mdash; transfers to the new
          owner. Nothing changes about the entity except who owns it.
        </p>
        <p>
          Stock purchases are more common in larger transactions, regulated
          industries (where licenses are entity-specific), and situations where
          contract assignment is problematic.
        </p>

        <h2 className={h2Class}>Key differences</h2>

        <h3 className={h3Class}>Tax implications</h3>
        <p>
          Tax considerations are often the primary driver of the asset vs. stock
          decision, and the interests of buyers and sellers are typically
          opposed:
        </p>
        <p>
          <strong>Buyer prefers asset purchase:</strong> In an asset purchase,
          the buyer gets a &ldquo;stepped-up&rdquo; tax basis in the acquired
          assets, meaning they can depreciate or amortize the full purchase
          price over time. This creates significant tax deductions in the years
          following the acquisition. For a $5M acquisition, the tax savings from
          a stepped-up basis can exceed $500K&ndash;$1M over the depreciation
          period.
        </p>
        <p>
          <strong>Seller prefers stock purchase:</strong> In a stock purchase,
          the seller pays capital gains tax on the difference between their
          basis in the stock and the sale price &mdash; a single level of tax.
          In an asset purchase of a C corporation, the seller faces double
          taxation: the corporation pays tax on the asset sale, then the
          shareholders pay tax again on the liquidating distribution. For
          S corporations, pass-through entities, and LLCs, the impact is less
          severe but still favors stock sales in most cases.
        </p>
        <p>
          For deeper analysis of acquisition tax planning, see our{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            tax optimization guide
          </Link>.
        </p>

        <h3 className={h3Class}>Liability exposure</h3>
        <p>
          <strong>Asset purchase advantage:</strong> The buyer can exclude
          known and unknown liabilities from the transaction. Only the
          specifically assumed liabilities transfer. This protects against
          undisclosed debts, pending litigation, environmental liabilities, and
          tax obligations of the selling entity.
        </p>
        <p>
          <strong>Stock purchase risk:</strong> The buyer acquires the entity
          &ldquo;warts and all,&rdquo; including all liabilities &mdash; even
          those that were unknown at closing. This makes thorough{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>{" "}
          even more critical in stock purchases. Representations, warranties,
          and indemnification provisions in the purchase agreement become the
          primary protection.
        </p>

        <h3 className={h3Class}>Contract and license transferability</h3>
        <p>
          <strong>Asset purchase challenge:</strong> Contracts, leases,
          licenses, and permits often have anti-assignment clauses that require
          counterparty consent for transfer. In an asset purchase, every key
          contract must be individually assigned, which can be time-consuming
          and creates the risk of counterparties renegotiating terms. Government
          permits and industry licenses may not be transferable at all.
        </p>
        <p>
          <strong>Stock purchase advantage:</strong> Because the entity itself
          does not change, contracts remain in place without assignment.
          Customers, suppliers, landlords, and regulators may not even need to
          be notified (though best practice is to inform them). This is
          particularly important in:
        </p>
        <ul className={ulClass}>
          <li><Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">Healthcare</Link> (Medicare/Medicaid provider numbers are entity-specific)</li>
          <li><Link href="/learn/financial-services-acquisition" className="text-apple-accent hover:underline">Financial services</Link> (regulatory licenses are entity-specific)</li>
          <li>Government contracting (contract novation is complex and slow)</li>
          <li>Real estate-heavy businesses (lease assignment can trigger landlord consent)</li>
        </ul>

        <h3 className={h3Class}>Employee considerations</h3>
        <p>
          <strong>Asset purchase:</strong> Employees are technically terminated
          by the selling entity and rehired by the buyer. This resets tenure
          for benefits, PTO accrual, and employment agreements. It also creates
          an opportunity to selectively rehire, but can create anxiety and
          turnover during the transition.
        </p>
        <p>
          <strong>Stock purchase:</strong> Employment continues uninterrupted.
          Employees retain their tenure, benefits, and agreements. This is
          generally better for{" "}
          <Link href="/learn/management-transition" className="text-apple-accent hover:underline">
            management transition
          </Link>{" "}
          and employee retention.
        </p>

        <h2 className={h2Class}>When to use each structure</h2>

        <h3 className={h3Class}>Use an asset purchase when:</h3>
        <ul className={ulClass}>
          <li>Buying a C corporation (to avoid double taxation on the seller&rsquo;s side, negotiate a price adjustment)</li>
          <li>You want the tax benefit of a stepped-up asset basis</li>
          <li>There are known or suspected liabilities you want to exclude</li>
          <li>The business is straightforward with easily transferable contracts</li>
          <li>You are using{" "}
            <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
              SBA financing
            </Link>{" "}
            (SBA lenders generally prefer asset purchases)</li>
          <li>You want a clean start with selective asset and liability assumption</li>
        </ul>

        <h3 className={h3Class}>Use a stock purchase when:</h3>
        <ul className={ulClass}>
          <li>The business has non-transferable licenses, permits, or contracts (regulated industries)</li>
          <li>Contract assignment would be overly complex or risky</li>
          <li>The seller is an S corporation, LLC, or partnership (where double taxation is less of a concern)</li>
          <li>You want to preserve employee continuity and benefit plans</li>
          <li>The business has valuable tax attributes (NOLs, R&amp;D credits) you want to inherit</li>
          <li>Speed is critical and you want to avoid the complexity of individual asset transfers</li>
        </ul>

        <h2 className={h2Class}>The 338(h)(10) election: best of both worlds</h2>
        <p>
          For S corporation acquisitions, the IRC Section 338(h)(10) election
          allows a stock purchase to be treated as an asset purchase for tax
          purposes. The buyer gets the stepped-up basis of an asset purchase
          while maintaining the contract and license continuity of a stock
          purchase. Both buyer and seller must agree to the election, and the
          seller faces tax implications as if they sold assets (not stock).
        </p>
        <p>
          The 338(h)(10) election is increasingly common in search fund
          transactions because it aligns the interests of buyer and seller
          better than a pure asset or stock deal. Your{" "}
          <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">
            tax advisor
          </Link>{" "}
          can model the specific impact for your deal.
        </p>

        <h2 className={h2Class}>Purchase price allocation</h2>
        <p>
          In an asset purchase, the purchase price must be allocated across
          the acquired assets for tax purposes using the &ldquo;residual
          method&rdquo; (IRC Section 1060). The allocation determines the
          depreciation and amortization schedule and has significant tax
          implications for both parties:
        </p>
        <ul className={ulClass}>
          <li><strong>Tangible assets:</strong> Allocated at fair market value and depreciated over their useful lives (5&ndash;39 years depending on asset class)</li>
          <li><strong>Intangible assets:</strong> Customer lists, non-competes, and other identified intangibles are amortized over 15 years</li>
          <li><strong>Goodwill:</strong> The residual amount (purchase price minus fair market value of all identified assets) is also amortized over 15 years</li>
        </ul>
        <p>
          Buyers generally want to allocate more to short-lived assets and
          non-competes (faster depreciation/amortization), while sellers prefer
          allocation to goodwill and capital assets (capital gains rates).
          This is a key{" "}
          <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">
            negotiation point
          </Link>{" "}
          that should be addressed in the{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            LOI
          </Link>{" "}
          or purchase agreement.
        </p>

        <h2 className={h2Class}>European considerations</h2>
        <p>
          The asset vs. stock distinction exists in European jurisdictions but
          with different tax and legal frameworks:
        </p>
        <ul className={ulClass}>
          <li><strong>France:</strong> Share purchases (cession de parts/actions) are more common due to transfer tax advantages. Asset purchases (cession de fonds de commerce) trigger registration duties of 3&ndash;5%. See{" "}
            <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
              ETA in France
            </Link>.</li>
          <li><strong>Germany:</strong> Share deals (Anteilskauf) vs. asset deals (Unternehmenskauf) have different trade tax and VAT implications. See{" "}
            <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">
              ETA in Germany
            </Link>.</li>
          <li><strong>UK:</strong> Share purchases avoid stamp duty land tax on embedded real estate but inherit all liabilities. Asset purchases allow capital allowances. See{" "}
            <Link href="/learn/eta-uk" className="text-apple-accent hover:underline">
              ETA in the UK
            </Link>.</li>
        </ul>

        <h2 className={h2Class}>Practical tips for search fund acquirers</h2>
        <ul className={ulClass}>
          <li>Start with an asset purchase as your default structure and only switch to stock if there is a compelling reason</li>
          <li>Model the tax impact of both structures early in{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link>{" "}
            &mdash; the difference can be hundreds of thousands of dollars</li>
          <li>If the seller insists on a stock deal, negotiate a price adjustment to reflect the buyer&rsquo;s lost tax benefit</li>
          <li>For S corps, always evaluate the 338(h)(10) election as a potential compromise</li>
          <li>Address the structure early in{" "}
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              LOI negotiations
            </Link>{" "}
            &mdash; changing structure after signing creates friction</li>
          <li>Engage tax counsel and your CPA before finalizing the structure</li>
        </ul>
      </div>
    </article>
  );
}
