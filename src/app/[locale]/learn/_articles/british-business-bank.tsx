import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function BritishBusinessBankArticle() {
  return (
    <article>
      <h1 className={h1Class}>British Business Bank & UK Acquisition Financing</h1>
      <div className={bodyClass}>
        <p>The United Kingdom offers a range of government-backed financing options for business acquisitions through the British Business Bank and related programs. For searchers targeting <Link href="/learn/eta-uk" className="text-apple-accent hover:underline">UK-based acquisitions</Link>, understanding these programs can significantly improve deal economics.</p>
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
          <li><strong>Development Bank of Wales:</strong> Comprehensive funding for Welsh businesses</li>
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
        <p>UK deals tend to use less leverage than US deals, partly because there is no UK equivalent to the SBA 7(a) program&apos;s generous terms.</p>
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
          <li>UK deals typically use less leverage (50&ndash;60% debt) compared to US deals</li>
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

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>British Business Bank, <em>Enterprise Finance Guarantee Scheme Guidelines</em> (2024)</li>
        <li>HM Treasury, <em>Financing Growth in UK SMEs</em> (2024)</li>
        <li>BVCA, <em>Private Equity and Venture Capital Report</em> (2024)</li>
        <li>UK Finance, <em>SME Finance Monitor</em> (2024)</li>
      </ul>
    </article>
  );
}
