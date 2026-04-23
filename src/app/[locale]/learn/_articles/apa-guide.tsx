import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function APAGuideArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Asset Purchase Agreements (APA): What Buyers Need to Know
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          An Asset Purchase Agreement (APA) transfers specific assets
          and liabilities of a business rather than the entity itself.
          In small business acquisitions, APAs are more common than{" "}
          <Link href="/learn/spa-key-clauses" className="text-apple-accent hover:underline">
            SPAs (stock/share purchases)
          </Link>{" "}
          because they give buyers more control over what they acquire
          and offer significant{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            tax advantages
          </Link>. This guide covers the essential APA provisions for
          search fund and self-funded acquirers.
        </p>

        <h2 className={h2Class}>What is an asset purchase?</h2>
        <ul className={ulClass}>
          <li><strong>Definition:</strong> The buyer purchases individual assets (equipment, inventory, IP, contracts, goodwill) rather than the shares/stock of the company</li>
          <li><strong>Entity remains:</strong> The seller&rsquo;s legal entity continues to exist (with any remaining assets and liabilities)</li>
          <li><strong>Cherry-picking:</strong> The buyer can choose which assets to acquire and which liabilities to assume</li>
          <li><strong>New basis:</strong> The buyer receives a &ldquo;stepped-up&rdquo; tax basis in all acquired assets, creating significant depreciation and amortization deductions</li>
        </ul>

        <h2 className={h2Class}>Key APA clauses</h2>

        <h3 className={h3Class}>Purchased assets</h3>
        <ul className={ulClass}>
          <li><strong>Included:</strong> Tangible assets (equipment, vehicles, inventory, furniture), intangible assets (goodwill, IP, trade names, customer lists), contracts, permits/licenses, accounts receivable</li>
          <li><strong>Excluded:</strong> Cash, pre-closing receivables (sometimes), personal assets of the owner, assets not related to the business</li>
          <li><strong>Key clause:</strong> &ldquo;All assets used in or relating to the Business&rdquo; is the broadest language. Narrower definitions risk missing assets</li>
        </ul>

        <h3 className={h3Class}>Assumed liabilities</h3>
        <ul className={ulClass}>
          <li><strong>Assumed:</strong> Only the liabilities explicitly listed in the APA. Typically: assumed contracts, warranty obligations, employee accruals</li>
          <li><strong>Excluded:</strong> Pre-closing debts, tax liabilities, litigation, pension obligations, environmental liabilities</li>
          <li><strong>Key advantage:</strong> In an asset purchase, you do not inherit unknown liabilities (unless successor liability doctrine applies in your state)</li>
        </ul>

        <h3 className={h3Class}>Purchase price allocation</h3>
        <ul className={ulClass}>
          <li>The APA must allocate the purchase price across asset categories per IRS Section 1060 (Form 8594)</li>
          <li><strong>Classes:</strong> Class I (cash), Class II (securities), Class III (receivables), Class IV (inventory), Class V (equipment/furniture), Class VI (intangible assets except goodwill), Class VII (goodwill)</li>
          <li><strong>Tax impact:</strong> Higher allocation to depreciable assets (Class V) = faster tax deductions for the buyer. Higher allocation to goodwill (Class VII) = 15-year amortization</li>
          <li><strong>Negotiate with the seller:</strong> Buyers prefer more allocation to depreciable assets; sellers prefer more to goodwill (capital gains treatment)</li>
        </ul>

        <h3 className={h3Class}>Contract assignment</h3>
        <ul className={ulClass}>
          <li>Unlike a stock purchase, contracts must be individually assigned to the new owner</li>
          <li><strong>Consent required:</strong> Many contracts have anti-assignment clauses requiring third-party consent</li>
          <li><strong>Critical contracts:</strong> Real estate leases, customer contracts, vendor agreements, software licenses, government permits</li>
          <li><strong>Risk:</strong> If a key contract cannot be assigned, the business value may be impaired. Make assignment a closing condition</li>
        </ul>

        <h3 className={h3Class}>Employee matters</h3>
        <ul className={ulClass}>
          <li><strong>No automatic transfer:</strong> In an asset purchase, employees do not automatically transfer (unlike stock purchases in the US, or TUPE in the UK/EU)</li>
          <li><strong>New employment:</strong> The buyer must offer new employment contracts to employees it wants to retain</li>
          <li><strong>Benefit plans:</strong> Existing benefit plans do not transfer. The buyer must establish new plans (health, 401k, PTO)</li>
          <li><strong>See:</strong>{" "}
            <Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">
              employee retention strategies
            </Link></li>
        </ul>

        <h2 className={h2Class}>APA vs. SPA: when to use which</h2>
        <ul className={ulClass}>
          <li><strong>APA preferred when:</strong> Buyer wants liability protection, step-up in tax basis, ability to exclude specific assets/liabilities, and SBA financing (SBA prefers asset purchases)</li>
          <li><strong>SPA preferred when:</strong> Business has non-assignable contracts or permits, many employees (simplifies transfer), or C-Corp entity where stock sale avoids double taxation for the seller</li>
          <li><strong>Full comparison:</strong>{" "}
            <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
              asset purchase vs. stock purchase guide
            </Link></li>
        </ul>

        <h2 className={h2Class}>Tax advantages for buyers</h2>
        <ul className={ulClass}>
          <li><strong>Step-up in basis:</strong> All acquired assets receive a new fair market value basis, creating depreciation and amortization deductions</li>
          <li><strong>Section 197 amortization:</strong> Goodwill and other intangibles amortized over 15 years</li>
          <li><strong>Bonus depreciation:</strong> Tangible assets may qualify for 60&ndash;100% first-year bonus depreciation (depending on current tax law)</li>
          <li><strong>Net effect:</strong> First-year tax deductions of 20&ndash;40% of the purchase price are common, significantly improving cash flow</li>
        </ul>

        <h2 className={h2Class}>Common APA pitfalls</h2>
        <ul className={ulClass}>
          <li><strong>Bulk sales law:</strong> Some states require public notice of an asset sale (bulk transfer/bulk sales acts). Failure to comply can expose the buyer to seller&rsquo;s creditors</li>
          <li><strong>Successor liability:</strong> Even in an asset purchase, buyers can be liable for the seller&rsquo;s obligations under certain doctrines (continuity of enterprise, de facto merger). Negotiate comprehensive indemnification</li>
          <li><strong>Missing assets:</strong> Ensure the asset list is comprehensive. &ldquo;Catch-all&rdquo; language covers assets the parties forgot to list specifically</li>
          <li><strong>Sales tax:</strong> Asset transfers may trigger state sales/use tax on tangible personal property. Plan for this in your closing budget</li>
        </ul>

        <p>
          For the{" "}
          <Link href="/learn/purchase-agreement-apa-vs-spa" className="text-apple-accent hover:underline">
            complete APA vs. SPA comparison
          </Link>{" "}
          and{" "}
          <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">
            negotiation best practices
          </Link>, see our related guides.
        </p>
      </div>
    </article>
  );
}
