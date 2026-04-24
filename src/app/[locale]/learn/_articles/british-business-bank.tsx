import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function BritishBusinessBankArticle() {
  return (
    <article>
      <h1 className={h1Class}>British Business Bank & UK Acquisition Financing</h1>
      <div className={bodyClass}>
        <p>The United Kingdom offers a range of government-backed financing options for business acquisitions through the British Business Bank and related programs. According to the British Business Bank&apos;s own annual report, the institution has facilitated over &pound;12 billion in financing to more than 100,000 smaller businesses across the UK. For searchers targeting <Link href="/learn/eta-uk" className="text-apple-accent hover:underline">UK-based acquisitions</Link>, understanding these programs can significantly improve deal economics.</p>
        <p>The UK succession opportunity is substantial. UK Finance&apos;s SME Finance Monitor reports that over 5.5 million SMEs operate in the UK, many founded during the 1980s and 1990s economic expansion. With a wave of retirements underway, the British Private Equity &amp; Venture Capital Association (BVCA) estimates that thousands of profitable businesses need new ownership each year &mdash; but deal structures tend to be more conservative than in the US, with higher equity requirements and less government-supported use.</p>
      </div>

      <h2 className={h2Class}>The British Business Bank</h2>
      <div className={bodyClass}>
        <p>The British Business Bank (BBB) is a government-owned economic development bank that doesn&apos;t lend directly but provides guarantees and capital to accredited lenders, increasing their willingness to finance business acquisitions.</p>
      </div>

      <h2 className={h2Class}>Enterprise Finance Guarantee (EFG)</h2>
      <div className={bodyClass}>
        <p>The EFG is the UK&apos;s primary government-backed lending scheme for SME acquisitions:</p>
        <ul className={ulClass}>
          <li><strong>Guarantee:</strong> Government guarantees 75% of the loan to the lender</li>
          <li><strong>Loan size:</strong> &pound;25,000 to &pound;1.2 million</li>
          <li><strong>Term:</strong> Up to 10 years</li>
          <li><strong>Eligibility:</strong> UK-based businesses with turnover up to &pound;41 million</li>
          <li><strong>Use of proceeds:</strong> Business acquisitions, working capital, equipment</li>
          <li><strong>Premium:</strong> Borrower pays 2% annual guarantee premium to the government</li>
          <li><strong>Personal guarantee:</strong> No personal guarantee required for the government-guaranteed portion</li>
        </ul>
      </div>

      <h2 className={h2Class}>Start Up Loans</h2>
      <div className={bodyClass}>
        <p>While primarily for startups, these government-backed personal loans can supplement acquisition financing:</p>
        <ul className={ulClass}>
          <li>Up to &pound;25,000 per person (up to &pound;100,000 for partnerships)</li>
          <li>Fixed 6% interest rate</li>
          <li>1&ndash;5 year term</li>
          <li>Free mentoring and support</li>
          <li>Best used for initial working capital alongside other acquisition financing</li>
        </ul>
      </div>

      <h2 className={h2Class}>Regional Growth Funds</h2>
      <div className={bodyClass}>
        <p>Various regional funds provide additional capital for acquisitions:</p>
        <ul className={ulClass}>
          <li><strong>Northern Powerhouse Investment Fund:</strong> Debt and equity for businesses in Northern England</li>
          <li><strong>Midlands Engine Investment Fund:</strong> Similar coverage for the Midlands region</li>
          <li><strong>Cornwall and Isles of Scilly Investment Fund:</strong> Focused on the South West</li>
          <li><strong>Scottish Enterprise / Highlands and Islands Enterprise:</strong> Scotland-specific programs</li>
          <li><strong>Development Bank of Wales:</strong> Thorough funding for Welsh businesses</li>
        </ul>
      </div>

      <h2 className={h2Class}>Private Sector Acquisition Lenders</h2>
      <div className={bodyClass}>
        <p>Beyond government programs, key private lenders for UK acquisitions include:</p>
        <ul className={ulClass}>
          <li><strong>High street banks:</strong> HSBC, Barclays, NatWest, Lloyds &mdash; offer acquisition finance teams for deals over &pound;500K</li>
          <li><strong>Challenger banks:</strong> OakNorth, Shawbrook &mdash; more flexible, faster decisions</li>
          <li><strong>Asset-based lenders:</strong> Close Brothers, Bibby Financial Services &mdash; lending against receivables and inventory</li>
          <li><strong>PE-backed lenders:</strong> ThinCats, Funding Circle &mdash; alternative lending platforms</li>
        </ul>
      </div>

      <h2 className={h2Class}>Typical UK Acquisition Structure</h2>
      <div className={bodyClass}>
        <p>A typical &pound;2M UK acquisition might be structured as:</p>
        <ul className={ulClass}>
          <li>Senior bank debt (EFG-backed): &pound;1.0M (50%)</li>
          <li>Vendor loan (deferred consideration): &pound;400K (20%)</li>
          <li>Buyer equity: &pound;600K (30%)</li>
        </ul>
        <p>UK deals tend to use less use than US deals, partly because there is no UK equivalent to the SBA 7(a) program&apos;s generous terms. The EFG&apos;s &pound;1.2M cap and 75% guarantee are less generous than the US <Link href="/learn/sba-7a-loans-acquisition" className="text-apple-accent hover:underline">SBA 7(a)&apos;s $5M cap and 75&ndash;85% guarantee</Link>. As a result, UK searchers typically need to contribute 30%+ equity compared to 10&ndash;15% in SBA-backed US deals. <Link href="/learn/vendor-take-back-financing" className="text-apple-accent hover:underline">Vendor financing</Link> (called &quot;deferred consideration&quot; in UK parlance) is critical for bridging this gap.</p>
      </div>

      <h2 className={h2Class}>Tax Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Entrepreneurs&apos; Relief (now Business Asset Disposal Relief):</strong> 10% CGT rate on first &pound;1M of qualifying gains</li>
          <li><strong>Interest deductibility:</strong> Acquisition debt interest is generally deductible against business profits</li>
          <li><strong>Stamp duty:</strong> 0.5% on share purchases (no stamp duty on asset purchases)</li>
          <li><strong>VAT:</strong> Business transfers as going concerns are generally VAT-exempt</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>The EFG scheme provides up to &pound;1.2M government-guaranteed lending for acquisitions</li>
          <li>Regional funds offer additional capital, especially outside London</li>
          <li>UK deals typically use less use (50&ndash;60% debt) compared to US deals</li>
          <li>Challenger banks and asset-based lenders provide alternatives to high street banks</li>
          <li>Business Asset Disposal Relief provides favorable CGT rates for sellers</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-uk" className="text-apple-accent hover:underline">ETA in the United Kingdom</Link></li>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">How to Finance an Acquisition</Link></li>
        <li><Link href="/learn/government-financing-programs-global" className="text-apple-accent hover:underline">Government Financing Programs: Global Overview</Link></li>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions in Europe</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <h3 className={h3Class}>What is the UK equivalent of SBA loans?</h3>
      <div className={bodyClass}>
        <p>The Enterprise Finance Guarantee (EFG) is the closest UK equivalent. The government guarantees 75% of the loan (vs. SBA&apos;s 75&ndash;85%), with loans up to &pound;1.2 million and terms up to 10 years. However, the EFG is less generous than SBA: lower maximum amounts, shorter terms, and a 2% annual guarantee premium. UK deals typically use less use (50&ndash;60% debt) than US deals, with the buyer providing 30%+ equity. The lack of a goodwill financing program comparable to the US SBA means UK searchers need to be more creative with deal structure.</p>
      </div>

      <h3 className={h3Class}>Are there specific programs for acquisitions outside London?</h3>
      <div className={bodyClass}>
        <p>Yes, several regional growth funds specifically target acquisitions outside London. The Northern Powerhouse Investment Fund covers the North of England, the Midlands Engine Investment Fund covers the Midlands, and the Development Bank of Wales provides thorough business acquisition financing for Welsh businesses. Scottish Enterprise offers programs for Scottish acquisitions. These regional funds often provide more favorable terms than national programs because they are specifically designed to encourage investment and business ownership in economically developing regions. For search fund entrepreneurs, targeting regional businesses can unlock both better financing and lower competition from PE firms.</p>
      </div>

      <h3 className={h3Class}>How does Business Asset Disposal Relief affect seller negotiations?</h3>
      <div className={bodyClass}>
        <p>Business Asset Disposal Relief (formerly Entrepreneurs&apos; Relief) provides a 10% capital gains tax rate on the first &pound;1 million of qualifying gains from the disposal of business assets or shares. This is significantly lower than the standard 20% CGT rate. For sellers, this creates a strong incentive to structure deals as share sales rather than asset sales. For buyers, understanding BADR&apos;s impact on the seller&apos;s net proceeds can help negotiate deal structure and pricing &mdash; sellers receiving favorable tax treatment may be more flexible on price or willing to provide <Link href="/learn/vendor-take-back-financing" className="text-apple-accent hover:underline">deferred consideration</Link>.</p>
      </div>
    </article>
  );
}
