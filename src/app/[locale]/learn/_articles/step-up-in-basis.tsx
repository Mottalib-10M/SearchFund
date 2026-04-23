import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function StepUpInBasisArticle() {
  return (
    <article>
      <h1 className={h1Class}>Step-Up in Basis: Tax Benefits for Asset Purchases</h1>
      <div className={bodyClass}>
        <p>A step-up in basis is one of the most significant tax advantages of acquiring a business through an <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">asset purchase</Link> rather than a stock purchase. By stepping up the tax basis of acquired assets to their fair market value at the time of acquisition, buyers can generate substantial tax deductions that reduce the effective cost of the acquisition.</p>
      </div>

      <h2 className={h2Class}>What Is a Step-Up in Basis?</h2>
      <div className={bodyClass}>
        <p>When you buy assets at fair market value, your tax basis in those assets is the purchase price. This is the &quot;step-up&quot; &mdash; the acquired assets are recorded at their current value rather than the seller&apos;s historical (often much lower) book value.</p>
        <ul className={ulClass}>
          <li><strong>Tangible assets:</strong> Equipment, vehicles, real estate, inventory are stepped up to FMV</li>
          <li><strong>Intangible assets:</strong> Customer lists, trade names, non-compete agreements, technology are valued and stepped up</li>
          <li><strong>Goodwill:</strong> The excess of purchase price over the FMV of identifiable assets becomes goodwill</li>
          <li><strong>Depreciation/amortization:</strong> All stepped-up values can be depreciated or amortized for tax purposes</li>
        </ul>
      </div>

      <h2 className={h2Class}>The Tax Benefit</h2>
      <div className={bodyClass}>
        <p>Consider a $3M acquisition with the following purchase price allocation:</p>
        <ul className={ulClass}>
          <li>Equipment: $500K (depreciated over 5&ndash;7 years)</li>
          <li>Real estate: $800K (depreciated over 39 years for commercial property)</li>
          <li>Customer relationships: $400K (amortized over 15 years)</li>
          <li>Non-compete agreement: $200K (amortized over the agreement term, typically 3&ndash;5 years)</li>
          <li>Trade name: $300K (amortized over 15 years)</li>
          <li>Goodwill: $800K (amortized over 15 years under Section 197)</li>
        </ul>
        <p>Total annual tax deductions from stepped-up assets can be $200K&ndash;$400K in the early years, saving $50K&ndash;$100K+ in taxes annually at a 25% effective rate.</p>
      </div>

      <h2 className={h2Class}>Step-Up vs. No Step-Up: Stock Purchase Comparison</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Asset purchase:</strong> Full step-up. All assets revalued to FMV. Maximum depreciation/amortization benefits.</li>
          <li><strong>Stock purchase (default):</strong> No step-up. The buyer inherits the seller&apos;s tax basis in the assets, which may be fully depreciated or significantly lower than FMV.</li>
          <li><strong>Stock purchase with 338(h)(10) election:</strong> Treated as an asset purchase for tax purposes. See <Link href="/learn/338h10-election" className="text-apple-accent hover:underline">338(h)(10) Election guide</Link>.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Section 197 Intangibles</h2>
      <div className={bodyClass}>
        <p>Under IRC Section 197, most acquired intangible assets are amortized over 15 years:</p>
        <ul className={ulClass}>
          <li>Goodwill</li>
          <li>Going concern value</li>
          <li>Customer lists and relationships</li>
          <li>Workforce in place</li>
          <li>Trade names and trademarks</li>
          <li>Patents, copyrights, and formulas</li>
          <li>Non-compete agreements (amortized over 15 years regardless of the actual term)</li>
          <li>Government licenses and permits</li>
        </ul>
      </div>

      <h2 className={h2Class}>Purchase Price Allocation (IRC Section 1060)</h2>
      <div className={bodyClass}>
        <p>In asset acquisitions, the purchase price must be allocated across asset classes in a specific order:</p>
        <ol className={olClass}>
          <li><strong>Class I:</strong> Cash and cash equivalents</li>
          <li><strong>Class II:</strong> Actively traded securities, CDs, foreign currency</li>
          <li><strong>Class III:</strong> Accounts receivable, mortgages, credit card receivables</li>
          <li><strong>Class IV:</strong> Inventory</li>
          <li><strong>Class V:</strong> All other tangible and intangible assets not in other classes</li>
          <li><strong>Class VI:</strong> Section 197 intangibles (except goodwill and going concern)</li>
          <li><strong>Class VII:</strong> Goodwill and going concern value (residual)</li>
        </ol>
        <p>Both buyer and seller must report the same allocation on Form 8594 (Asset Acquisition Statement).</p>
      </div>

      <h2 className={h2Class}>Negotiating the Allocation</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Buyer preference:</strong> Allocate more to short-lived assets (equipment, non-competes) for faster deductions</li>
          <li><strong>Seller preference:</strong> Allocate more to goodwill (capital gains rate) and less to non-competes (ordinary income rate)</li>
          <li><strong>Compromise:</strong> The allocation is negotiated as part of the purchase agreement and should be supported by independent appraisals</li>
          <li><strong>IRS scrutiny:</strong> Unreasonable allocations can be challenged; always support with third-party valuations</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Step-up in basis generates significant tax deductions that reduce the after-tax cost of asset purchases</li>
          <li>Annual tax savings of $50K&ndash;$100K+ are common on $3M+ acquisitions</li>
          <li>Section 197 provides 15-year amortization for most intangible assets including goodwill</li>
          <li>Purchase price allocation is negotiable and should be addressed in the purchase agreement</li>
          <li>Consider the 338(h)(10) election for stock purchases where a step-up would be beneficial</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">Asset Purchase vs. Stock Purchase</Link></li>
        <li><Link href="/learn/338h10-election" className="text-apple-accent hover:underline">338(h)(10) Election Guide</Link></li>
        <li><Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">Tax Optimization for Search Fund Acquisitions</Link></li>
        <li><Link href="/learn/business-valuation" className="text-apple-accent hover:underline">How to Value a Small Business</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>IRS, <em>IRC Section 197: Amortization of Goodwill and Certain Other Intangibles</em></li>
        <li>IRS, <em>IRC Section 1060: Special Allocation Rules for Asset Acquisitions</em></li>
        <li>AICPA, <em>Purchase Price Allocation Guide for M&amp;A Transactions</em> (2024)</li>
        <li>Deloitte, <em>Tax Considerations for Business Acquisitions</em> (2024)</li>
      </ul>
    </article>
  );
}
