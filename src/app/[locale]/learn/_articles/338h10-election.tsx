import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function Election338h10Article() {
  return (
    <article>
      <h1 className={h1Class}>338(h)(10) Election: Treating a Stock Sale as an Asset Sale</h1>
      <div className={bodyClass}>
        <p>The IRC Section 338(h)(10) election allows a buyer and seller to treat a stock purchase as an asset purchase for federal tax purposes while maintaining the legal simplicity of a stock transaction. This election can provide the buyer with a valuable <Link href="/learn/step-up-in-basis" className="text-apple-accent hover:underline">step-up in basis</Link> on the target company&apos;s assets without actually transferring individual assets.</p>
      </div>

      <h2 className={h2Class}>How the 338(h)(10) Election Works</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Legal form:</strong> The buyer purchases 100% of the target company&apos;s stock (legal stock deal)</li>
          <li><strong>Tax treatment:</strong> For federal tax purposes, the target is deemed to sell all its assets at fair market value and then liquidate</li>
          <li><strong>Result:</strong> The buyer gets a new (stepped-up) tax basis in the target&apos;s assets, as if it had purchased them individually</li>
          <li><strong>Joint election:</strong> Both buyer and seller must agree to make the election (both file Form 8023)</li>
          <li><strong>Timing:</strong> Must be filed by the 15th day of the 9th month following the acquisition month</li>
        </ul>
      </div>

      <h2 className={h2Class}>When the 338(h)(10) Is Available</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>S-Corporations:</strong> Most common use case. The election eliminates the double tax issue that would otherwise apply to S-Corp asset sales.</li>
          <li><strong>Corporate subsidiaries:</strong> When the target is a subsidiary of a corporate group (C-Corp parent owns the target)</li>
          <li><strong>Not available for:</strong> Standalone C-Corporations sold by individual shareholders (use Section 336(e) instead in some cases)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Benefits for the Buyer</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Step-up in basis:</strong> All target assets are stepped up to FMV, generating future depreciation and amortization deductions</li>
          <li><strong>Goodwill amortization:</strong> The excess purchase price over identified asset values becomes tax-deductible goodwill (15-year amortization under Section 197)</li>
          <li><strong>Legal simplicity:</strong> No need to transfer individual contracts, licenses, or permits &mdash; you simply bought the stock</li>
          <li><strong>Contract continuity:</strong> Contracts with anti-assignment clauses aren&apos;t triggered (since legal ownership doesn&apos;t change hands)</li>
          <li><strong>No sales tax:</strong> In most states, stock purchases don&apos;t trigger sales tax on transferred assets</li>
        </ul>
      </div>

      <h2 className={h2Class}>Impact on the Seller</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>S-Corp sellers:</strong> The deemed asset sale generates gain allocated to asset categories. Ordinary income on inventory, recaptured depreciation, and non-compete; capital gains on goodwill and other assets. This passes through to the S-Corp shareholders on Schedule K-1.</li>
          <li><strong>Seller concern:</strong> Some asset categories generate ordinary income (higher tax rate) rather than capital gains</li>
          <li><strong>Negotiation point:</strong> Sellers may request a higher price or favorable purchase price allocation to compensate for the tax impact</li>
          <li><strong>State taxes:</strong> State treatment varies; some states don&apos;t conform to the federal 338(h)(10) election</li>
        </ul>
      </div>

      <h2 className={h2Class}>338(h)(10) vs. Straight Asset Purchase</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Same tax result:</strong> Both give the buyer a stepped-up basis in the target&apos;s assets</li>
          <li><strong>Legal difference:</strong> 338(h)(10) is legally a stock purchase, so contracts, licenses, and employer status transfer automatically</li>
          <li><strong>Liability:</strong> In a 338(h)(10) stock deal, the buyer assumes all liabilities (known and unknown). In an asset deal, the buyer can choose which liabilities to assume.</li>
          <li><strong>Recommendation:</strong> If liability risk is manageable and the contract/license transfer benefit is significant, 338(h)(10) is often preferred</li>
        </ul>
      </div>

      <h2 className={h2Class}>Practical Example</h2>
      <div className={bodyClass}>
        <p>Buying an S-Corp for $5M with a 338(h)(10) election:</p>
        <ul className={ulClass}>
          <li>Equipment FMV: $800K (5&ndash;7 year depreciation)</li>
          <li>Customer relationships: $600K (15-year amortization)</li>
          <li>Non-compete: $300K (15-year amortization)</li>
          <li>Real estate: $1.2M (39-year depreciation)</li>
          <li>Goodwill: $2.1M (15-year amortization)</li>
        </ul>
        <p>Annual tax deductions: approximately $360K, saving ~$90K/year in taxes at a 25% rate. Over 15 years, the total tax savings approach $1.35M &mdash; a material reduction in the effective acquisition price.</p>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>The 338(h)(10) election gives buyers the tax benefits of an asset purchase with the legal simplicity of a stock purchase</li>
          <li>Most commonly used for S-Corp acquisitions, which represent a large portion of search fund targets</li>
          <li>Both buyer and seller must agree &mdash; the seller may need a price increase to compensate for their tax impact</li>
          <li>Annual tax savings can be $50K&ndash;$100K+ on typical search fund-sized deals</li>
          <li>Always model the tax impact with your CPA before and after the election to understand the net benefit</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/step-up-in-basis" className="text-apple-accent hover:underline">Step-Up in Basis: Tax Benefits for Asset Purchases</Link></li>
        <li><Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">Asset Purchase vs. Stock Purchase</Link></li>
        <li><Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">Tax Optimization for Search Fund Acquisitions</Link></li>
        <li><Link href="/learn/c-corp-vs-s-corp-llc" className="text-apple-accent hover:underline">C-Corp vs. S-Corp vs. LLC</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>IRS, <em>IRC Section 338(h)(10): Regulations and Guidance</em></li>
        <li>IRS, <em>Form 8023: Elections Under Section 338</em></li>
        <li>AICPA, <em>Section 338 Elections: A Practical Guide</em> (2024)</li>
        <li>PwC, <em>Tax Structuring for SME Acquisitions</em> (2024)</li>
      </ul>
    </article>
  );
}
