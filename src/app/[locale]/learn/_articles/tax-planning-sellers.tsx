import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function TaxPlanningSellersArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Tax Planning for Business Sellers: Minimize Your Tax Bill
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          Selling your business is likely the largest financial transaction
          of your life &mdash; and without proper tax planning, you could
          lose 25&ndash;45% of the proceeds to taxes. The good news: with
          18&ndash;24 months of advance planning, many sellers legally
          reduce their effective tax rate to 10&ndash;20% or even 0%.
          This guide covers the key strategies by country.
        </p>

        <h2 className={h2Class}>United States</h2>

        <h3 className={h3Class}>QSBS (Section 1202)</h3>
        <ul className={ulClass}>
          <li><strong>The most powerful tool:</strong>{" "}
            <Link href="/learn/qsbs-qualified-small-business-stock" className="text-apple-accent hover:underline">
              Qualified Small Business Stock
            </Link>{" "}
            allows up to $10M (or 10x basis) of capital gains tax-free on C-Corp stock held 5+ years</li>
          <li><strong>Effective rate:</strong> 0% federal CGT on qualifying gains</li>
          <li><strong>Planning required:</strong> Must be structured as a C-Corp from inception. S-Corps and LLCs do not qualify</li>
        </ul>

        <h3 className={h3Class}>Asset sale vs. stock sale</h3>
        <ul className={ulClass}>
          <li><strong>Stock sale:</strong> Seller pays capital gains rate (20% federal + 3.8% NIIT + state). Preferred by most sellers</li>
          <li><strong>Asset sale:</strong> Can trigger double taxation for C-Corp sellers (corporate tax + personal tax on distribution). Buyers prefer asset sales for the step-up in basis</li>
          <li><strong>338(h)(10) election:</strong> Treats a stock sale as an asset sale for tax purposes &mdash; giving the buyer the tax benefits while preserving stock sale treatment for the seller</li>
          <li><strong>See:</strong>{" "}
            <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
              APA vs. SPA comparison
            </Link></li>
        </ul>

        <h3 className={h3Class}>Installment sale (Section 453)</h3>
        <ul className={ulClass}>
          <li>Spread the gain over multiple years by receiving payments over time</li>
          <li>Reduces the effective tax rate by keeping income in lower tax brackets each year</li>
          <li>Works well with{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing
            </Link>{" "}
            (seller note payments are taxed as received)</li>
        </ul>

        <h3 className={h3Class}>Opportunity Zone deferral</h3>
        <ul className={ulClass}>
          <li>Invest capital gains into a Qualified Opportunity Fund within 180 days</li>
          <li>Defer tax on the original gain and potentially reduce it by 10&ndash;15%</li>
          <li>Gains on the Opportunity Zone investment held 10+ years are tax-free</li>
        </ul>

        <h2 className={h2Class}>France</h2>
        <ul className={ulClass}>
          <li><strong>Flat tax (PFU):</strong> 30% on capital gains (12.8% income tax + 17.2% social contributions)</li>
          <li><strong>Retirement exemption:</strong> Full CGT exemption for sellers aged 60+ who retire and sell a business worth &lt;&euro;500K</li>
          <li><strong>Dutreil pact:</strong>{" "}
            <Link href="/learn/dutreil-pact" className="text-apple-accent hover:underline">
              75% exemption
            </Link>{" "}
            on business share transfers (primarily for family succession and donations)</li>
          <li><strong>Holding company:</strong> Selling through a holding company triggers only 3.6% effective tax (88% participation exemption). Cash extraction from the holding company is taxed at 30% when distributed to the individual</li>
          <li><strong>Reinvestment deferral:</strong> Capital gains can be deferred if reinvested in another business within 24 months</li>
        </ul>

        <h2 className={h2Class}>Germany</h2>
        <ul className={ulClass}>
          <li><strong>Individual sellers:</strong> 60% of gains taxable (Teileinkünfteverfahren). Effective rate: up to ~27%</li>
          <li><strong>Retirement relief:</strong> &euro;45,000 lifetime exemption for sellers aged 55+ (once per lifetime)</li>
          <li><strong>Corporate sellers:</strong> 95% participation exemption (effective rate: ~1.5%)</li>
          <li><strong>Strategy:</strong> Sell shares (not assets) through a holding GmbH for maximum tax efficiency</li>
        </ul>

        <h2 className={h2Class}>United Kingdom</h2>
        <ul className={ulClass}>
          <li><strong>CGT rates:</strong> 18% (basic rate) or 24% (higher rate)</li>
          <li><strong>Business Asset Disposal Relief (BADR):</strong> 10% rate on the first &pound;1M of qualifying gains</li>
          <li><strong>Strategy:</strong> Ensure BADR qualification (5% ownership, 2+ year holding, trading company). Structure the sale to maximize gains within the &pound;1M BADR limit</li>
        </ul>

        <h2 className={h2Class}>General strategies (all countries)</h2>
        <ul className={ulClass}>
          <li><strong>Start early:</strong> Most tax optimization strategies require 12&ndash;24 months of advance planning</li>
          <li><strong>Entity restructuring:</strong> Moving from one entity type to another (e.g., S-Corp to C-Corp for QSBS, or creating a holding company) takes time and must be done well before the sale</li>
          <li><strong>Charitable giving:</strong> Donating appreciated shares to a donor-advised fund or charity before the sale eliminates CGT on the donated portion and provides a charitable deduction</li>
          <li><strong>Estate planning:</strong> Gifting shares to family members in lower tax brackets before the sale can reduce the overall tax burden</li>
          <li><strong>Timing:</strong> If possible, time the sale to coincide with a year of lower income. Avoid selling in the same year as other large capital events</li>
        </ul>

        <p>
          For country-specific{" "}
          <Link href="/learn/capital-gains-tax-by-country" className="text-apple-accent hover:underline">
            capital gains tax rates
          </Link>{" "}
          and{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            tax optimization strategies
          </Link>{" "}
          for buyers, see our related guides. You should also read our{" "}
          <Link href="/learn/succession-planning-owners" className="text-apple-accent hover:underline">
            succession planning roadmap
          </Link>{" "}
          and{" "}
          <Link href="/learn/prepare-business-for-sale" className="text-apple-accent hover:underline">
            business sale preparation guide
          </Link>{" "}
          to align tax planning with your broader exit strategy.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>How far in advance should I start tax planning before selling my business?</h3>
        <p>
          Ideally 18&ndash;24 months, though some strategies require even
          longer. QSBS (Section 1202) requires a 5-year holding period in
          a C-Corp. The French Dutreil pact requires a 2-year collective
          commitment before transfer. Entity restructuring (e.g., converting
          from an S-Corp to a C-Corp) also takes time and may have tax
          consequences of its own. The earlier you start, the more tools are
          available.
        </p>

        <h3 className={h3Class}>Is an asset sale or stock sale better for the seller?</h3>
        <p>
          In most cases, sellers prefer a stock sale because it is taxed
          entirely at the lower capital gains rate. Asset sales can trigger
          double taxation for C-Corp sellers and often result in a portion
          of the gain being taxed as ordinary income (due to depreciation
          recapture). However, buyers strongly prefer asset sales for the
          tax step-up, so the negotiation often involves the buyer paying
          a higher purchase price to compensate the seller for the
          additional tax burden.
        </p>

        <h3 className={h3Class}>Can seller financing reduce my tax bill?</h3>
        <p>
          Yes. Under Section 453 (installment sale rules in the US), you
          report and pay tax on the gain proportionally as you receive
          payments, rather than all at once. This can keep your income in
          lower tax brackets each year, reducing your effective rate.{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            Seller financing
          </Link>{" "}
          also makes your business more attractive to buyers, potentially
          resulting in a higher overall sale price.
        </p>
      </div>
    </article>
  );
}
