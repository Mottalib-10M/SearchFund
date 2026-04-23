import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function TaxFriendliestCountriesArticle() {
  return (
    <article>
      <h1 className={h1Class}>Tax-Friendliest Countries for Business Acquisitions</h1>
      <div className={bodyClass}>
        <p>Tax treatment can significantly impact the returns on a search fund acquisition. From corporate tax rates to <Link href="/learn/goodwill-amortization-tax" className="text-apple-accent hover:underline">goodwill amortization</Link>, <Link href="/learn/step-up-in-basis" className="text-apple-accent hover:underline">step-up in basis</Link> rules, and capital gains taxation, the country where you acquire matters. This guide ranks key jurisdictions by their overall tax-friendliness for business acquirers.</p>
      </div>

      <h2 className={h2Class}>Top Tax-Friendly Jurisdictions for Acquisitions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>1. Ireland (12.5% Corporate Tax)</h3>
        <ul className={ulClass}>
          <li>12.5% corporate tax rate on trading income (one of the lowest in the OECD)</li>
          <li>Generous R&amp;D tax credits (25%)</li>
          <li>Participation exemption on disposal of qualifying subsidiaries</li>
          <li>Entrepreneur relief: 10% CGT rate on first &euro;1M of qualifying gains</li>
        </ul>

        <h3 className={h3Class}>2. Switzerland (11&ndash;21% effective rate)</h3>
        <ul className={ulClass}>
          <li>Combined federal/cantonal corporate tax rates vary by canton (Zug: ~11%, Geneva: ~14%, Zurich: ~19%)</li>
          <li>Participation deduction reduces effective rate on qualifying dividends and capital gains</li>
          <li>No federal capital gains tax on sale of qualifying shareholdings</li>
          <li>Attractive <Link href="/learn/holding-company-tax" className="text-apple-accent hover:underline">holding company</Link> regimes</li>
        </ul>

        <h3 className={h3Class}>3. United Kingdom (25% with generous reliefs)</h3>
        <ul className={ulClass}>
          <li>25% corporate tax (19% for profits under &pound;50K, marginal relief to &pound;250K)</li>
          <li>Goodwill amortization available for asset deals on most intangible assets</li>
          <li>Business Asset Disposal Relief: 10% CGT on first &pound;1M of qualifying gains</li>
          <li>EMI share options: tax-efficient equity incentives for employees</li>
        </ul>

        <h3 className={h3Class}>4. Netherlands (25.8%)</h3>
        <ul className={ulClass}>
          <li>Participation exemption: 0% tax on dividends and capital gains from qualifying subsidiaries</li>
          <li>Innovation Box: 9% effective rate on qualifying IP income</li>
          <li>Extensive <Link href="/learn/double-taxation-treaties" className="text-apple-accent hover:underline">tax treaty</Link> network</li>
          <li>Favorable <Link href="/learn/bv-vs-nv-netherlands" className="text-apple-accent hover:underline">BV structure</Link> for acquisitions</li>
        </ul>

        <h3 className={h3Class}>5. United States (21% federal + state)</h3>
        <ul className={ulClass}>
          <li>Effective combined rate: 25&ndash;30% depending on state</li>
          <li>Generous goodwill amortization (15-year straight-line for asset purchases)</li>
          <li><Link href="/learn/338h10-election" className="text-apple-accent hover:underline">338(h)(10) elections</Link> allow step-up in basis even in stock deals</li>
          <li>Section 1202 QSBS exclusion: potential exclusion of up to $10M in capital gains</li>
          <li>Bonus depreciation and Section 179 for equipment-heavy businesses</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Tax Factors for Acquisition Returns</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Corporate tax rate:</strong> Lower rates mean more after-tax cash flow during ownership</li>
          <li><strong>Goodwill amortization:</strong> Tax-deductible goodwill reduces taxable income for years post-acquisition</li>
          <li><strong>Capital gains on exit:</strong> Lower CGT rates or exemptions improve net proceeds at exit</li>
          <li><strong>Holding company structures:</strong> Jurisdictions with participation exemptions enable tax-efficient group structures</li>
          <li><strong>Interest deductibility:</strong> Rules on deducting acquisition debt interest vary significantly</li>
          <li><strong>Transfer pricing:</strong> Cross-border structures require compliance with transfer pricing rules</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Ireland, Switzerland, and the UK offer the most tax-friendly environments for business acquisitions in Europe</li>
          <li>The US has higher headline rates but generous goodwill amortization and QSBS exclusions that improve effective returns</li>
          <li>The Netherlands and Luxembourg excel as holding company jurisdictions for multi-country structures</li>
          <li>Tax should inform but not drive acquisition decisions &mdash; operational factors matter more</li>
          <li>Always work with local tax advisors: tax law changes frequently and varies by specific circumstances</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/goodwill-amortization-tax" className="text-apple-accent hover:underline">Goodwill Amortization &amp; Tax</Link></li>
        <li><Link href="/learn/step-up-in-basis" className="text-apple-accent hover:underline">Step-Up in Basis</Link></li>
        <li><Link href="/learn/holding-company-tax" className="text-apple-accent hover:underline">Holding Company Tax Strategies</Link></li>
        <li><Link href="/learn/double-taxation-treaties" className="text-apple-accent hover:underline">Double Taxation Treaties</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>OECD, <em>Tax Policy Reforms: OECD and Selected Partner Economies</em> (2024)</li>
        <li>KPMG, <em>Global Corporate Tax Rates Table</em> (2024)</li>
        <li>PwC, <em>Worldwide Tax Summaries</em> (2024)</li>
      </ul>
    </article>
  );
}
