import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function GoodwillAmortizationTaxArticle() {
  return (
    <article>
      <h1 className={h1Class}>Goodwill Amortization & Tax Deductions in Acquisitions</h1>
      <div className={bodyClass}>
        <p>Goodwill &mdash; the premium paid above the fair market value of identifiable assets &mdash; represents a significant portion of most acquisition prices. Whether and how you can amortize goodwill for tax purposes varies dramatically by country and deal structure, creating major differences in after-tax returns for acquirers.</p>
      </div>

      <h2 className={h2Class}>What Is Goodwill?</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Definition:</strong> The excess of the purchase price over the fair market value of all identifiable tangible and intangible assets, net of liabilities assumed</li>
          <li><strong>Components:</strong> Brand reputation, customer relationships, assembled workforce, market position, synergies, and going concern value</li>
          <li><strong>Typical percentage:</strong> In SME acquisitions, goodwill often represents 40&ndash;70% of the total purchase price</li>
          <li><strong>Accounting vs. tax:</strong> Under IFRS/US GAAP, goodwill is not amortized (only tested for impairment). For tax purposes, treatment varies by jurisdiction.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Goodwill Tax Treatment by Country</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>United States</h3>
        <ul className={ulClass}>
          <li>Asset purchases: Goodwill amortizable over 15 years under <Link href="/learn/step-up-in-basis" className="text-apple-accent hover:underline">IRC Section 197</Link></li>
          <li>Stock purchases: No amortization unless a <Link href="/learn/338h10-election" className="text-apple-accent hover:underline">338(h)(10) election</Link> is made</li>
          <li>Annual deduction: Purchase price &divide; 15 years = annual tax deduction</li>
        </ul>

        <h3 className={h3Class}>France</h3>
        <ul className={ulClass}>
          <li>Asset purchases (fonds de commerce): Goodwill is not amortizable for tax purposes (but can be impaired)</li>
          <li>Exception: Goodwill acquired by small businesses (as defined by Art. 214-1 PCG) can be amortized over 10 years</li>
          <li>Share purchases: No goodwill step-up available</li>
        </ul>

        <h3 className={h3Class}>Germany</h3>
        <ul className={ulClass}>
          <li>Asset purchases: Goodwill amortizable over 15 years (tax) / useful life for accounting</li>
          <li>Share purchases: No goodwill step-up (unless using a German equivalent restructuring)</li>
          <li>Organschaft: Even with <Link href="/learn/organschaft-germany" className="text-apple-accent hover:underline">tax consolidation</Link>, share deal goodwill remains non-deductible</li>
        </ul>

        <h3 className={h3Class}>United Kingdom</h3>
        <ul className={ulClass}>
          <li>Asset purchases: Goodwill related to assets (customer relationships, IP) may be amortizable if arising from a third-party acquisition</li>
          <li>Post-2015 rules: Goodwill itself is no longer tax-deductible in most cases (only related intangible assets)</li>
          <li>The UK regime is one of the most restrictive for goodwill deductions</li>
        </ul>

        <h3 className={h3Class}>Spain</h3>
        <ul className={ulClass}>
          <li>Asset purchases: Goodwill amortizable over 20 years (5% annually)</li>
          <li>Share purchases: Financial goodwill was previously deductible but has been restricted since EU state aid rulings</li>
        </ul>

        <h3 className={h3Class}>Italy</h3>
        <ul className={ulClass}>
          <li>Asset purchases (avviamento): Goodwill amortizable over 18 years</li>
          <li>Optional step-up: Italy offers periodic &quot;revaluation&quot; opportunities where companies can step up asset values by paying a substitute tax</li>
        </ul>

        <h3 className={h3Class}>Netherlands</h3>
        <ul className={ulClass}>
          <li>Asset purchases: Goodwill amortizable over its useful economic life (typically 5&ndash;10 years)</li>
          <li>The Netherlands offers one of the most favorable goodwill amortization regimes in Europe</li>
        </ul>
      </div>

      <h2 className={h2Class}>Impact on Deal Economics</h2>
      <div className={bodyClass}>
        <p>For a &euro;3M acquisition with &euro;1.8M in goodwill:</p>
        <ul className={ulClass}>
          <li><strong>US (15 years):</strong> &euro;120K annual deduction &rarr; ~&euro;30K annual tax savings</li>
          <li><strong>Netherlands (7 years):</strong> &euro;257K annual deduction &rarr; ~&euro;66K annual tax savings</li>
          <li><strong>Spain (20 years):</strong> &euro;90K annual deduction &rarr; ~&euro;22.5K annual tax savings</li>
          <li><strong>Italy (18 years):</strong> &euro;100K annual deduction &rarr; ~&euro;28K annual tax savings</li>
          <li><strong>UK (no deduction):</strong> &euro;0 &rarr; no tax savings on goodwill</li>
          <li><strong>France (no deduction for most):</strong> &euro;0 &rarr; no tax savings on goodwill</li>
        </ul>
        <p>Over the amortization period, the tax savings on goodwill can represent 5&ndash;15% of the total purchase price in favorable jurisdictions.</p>
      </div>

      <h2 className={h2Class}>Structuring for Maximum Benefit</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Asset deal preference:</strong> In jurisdictions with goodwill amortization, prefer asset deals over share deals</li>
          <li><strong>Purchase price allocation:</strong> Maximize allocation to amortizable intangibles (customer lists, technology, non-competes) in addition to goodwill</li>
          <li><strong>338(h)(10) election (US):</strong> Treat a stock purchase as an asset purchase for tax purposes</li>
          <li><strong>Country selection:</strong> When choosing where to base your holding or operating company, goodwill treatment is a meaningful factor</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Goodwill amortization varies dramatically: 15 years (US/Germany), 18 years (Italy), 20 years (Spain), 5&ndash;10 years (Netherlands), or not at all (UK/France)</li>
          <li>Asset deals generally provide better goodwill deductions than share deals</li>
          <li>In countries without goodwill amortization, focus on allocating purchase price to other deductible intangibles</li>
          <li>The tax savings from goodwill amortization can represent 5&ndash;15% of the purchase price over time</li>
          <li>Always model the after-tax impact of goodwill treatment before choosing your deal structure</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/step-up-in-basis" className="text-apple-accent hover:underline">Step-Up in Basis: Tax Benefits for Asset Purchases</Link></li>
        <li><Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">Asset Purchase vs. Stock Purchase</Link></li>
        <li><Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">Tax Optimization for Acquisitions</Link></li>
        <li><Link href="/learn/holding-company-tax" className="text-apple-accent hover:underline">Holding Company Tax Optimization</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>IRS, <em>IRC Section 197: Amortization of Goodwill</em></li>
        <li>OECD, <em>Tax Treatment of Goodwill in OECD Countries</em> (2024)</li>
        <li>EY, <em>Worldwide Corporate Tax Guide: Goodwill Deductions</em> (2024)</li>
        <li>Deloitte, <em>International Tax: Goodwill Treatment by Jurisdiction</em> (2024)</li>
      </ul>
    </article>
  );
}
