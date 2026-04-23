import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function BDCCanadaArticle() {
  return (
    <article>
      <h1 className={h1Class}>BDC Canada: Business Development Bank Acquisition Financing</h1>
      <div className={bodyClass}>
        <p>The Business Development Bank of Canada (BDC) is a Crown corporation dedicated to supporting Canadian entrepreneurs and SMEs. For searchers targeting <Link href="/learn/eta-canada" className="text-apple-accent hover:underline">Canadian acquisitions</Link>, BDC provides a range of financing programs that complement traditional bank lending and can significantly improve deal structures.</p>
      </div>

      <h2 className={h2Class}>BDC Business Acquisition Loan</h2>
      <div className={bodyClass}>
        <p>BDC&apos;s flagship product for business acquisitions:</p>
        <ul className={ulClass}>
          <li><strong>Loan amount:</strong> CAD 100,000 to CAD 10 million+</li>
          <li><strong>Term:</strong> Up to 15 years for business acquisitions</li>
          <li><strong>Interest rate:</strong> Floating or fixed, typically BDC prime + 1&ndash;4%</li>
          <li><strong>Down payment:</strong> Typically requires 10&ndash;20% buyer equity</li>
          <li><strong>Grace period:</strong> Up to 12 months for principal payments</li>
          <li><strong>Flexible repayment:</strong> Seasonal payment schedules available for cyclical businesses</li>
          <li><strong>Subordinated to banks:</strong> BDC often takes a subordinated position, allowing commercial bank senior debt alongside</li>
        </ul>
      </div>

      <h2 className={h2Class}>BDC Subordinate Financing</h2>
      <div className={bodyClass}>
        <p>For larger deals needing mezzanine-style capital:</p>
        <ul className={ulClass}>
          <li><strong>Amount:</strong> CAD 250,000 to CAD 15 million</li>
          <li><strong>Quasi-equity:</strong> Subordinated debt with flexible terms and equity-like features</li>
          <li><strong>No dilution:</strong> Unlike equity investors, BDC subordinate financing doesn&apos;t take ownership</li>
          <li><strong>Patient capital:</strong> Longer repayment terms with interest-only periods</li>
          <li><strong>No personal guarantee required:</strong> For qualifying deals, BDC may waive PG on the subordinated portion</li>
        </ul>
      </div>

      <h2 className={h2Class}>Canada Small Business Financing Program (CSBFP)</h2>
      <div className={bodyClass}>
        <p>The CSBFP is Canada&apos;s equivalent of the US SBA loan program:</p>
        <ul className={ulClass}>
          <li><strong>Government guarantee:</strong> 85% of net eligible losses guaranteed by the federal government</li>
          <li><strong>Maximum loan:</strong> CAD 1.15 million total (CAD 500,000 for equipment/leasehold, CAD 150,000 for intangibles, CAD 500,000 for real property)</li>
          <li><strong>Interest rate:</strong> Prime + up to 3% (variable) or 5-year conventional mortgage rate + 3% (fixed)</li>
          <li><strong>Term:</strong> Up to 15 years for real property, 10 years for equipment</li>
          <li><strong>Use for acquisitions:</strong> Can finance equipment, real property, and intangible assets (including goodwill) in acquisitions</li>
          <li><strong>Eligibility:</strong> Businesses with annual revenues under CAD 10 million</li>
          <li><strong>Application:</strong> Through any Canadian chartered bank or credit union</li>
        </ul>
      </div>

      <h2 className={h2Class}>Provincial Programs</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Investissement Québec:</strong> Extensive acquisition financing programs including subordinated debt, equity, and loan guarantees for Quebec-based businesses</li>
          <li><strong>Ontario Business Growth Fund:</strong> Available for established Ontario businesses requiring growth or succession capital</li>
          <li><strong>Alberta Enterprise Corporation:</strong> Growth capital for Alberta-based technology and innovation businesses</li>
          <li><strong>BC Renaissance Capital Fund:</strong> For British Columbia acquisitions in technology and clean tech sectors</li>
          <li><strong>Community Futures Development Corporations:</strong> 267 CFDCs across rural Canada providing small business loans up to CAD 150,000 for acquisitions</li>
          <li><strong>Futurpreneur Canada:</strong> Loans up to CAD 60,000 with mentoring for entrepreneurs 18&ndash;39</li>
        </ul>
      </div>

      <h2 className={h2Class}>Canadian Commercial Banks for Acquisitions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>RBC Royal Bank:</strong> Largest commercial lender. Dedicated SME acquisition teams in major markets.</li>
          <li><strong>TD Bank:</strong> Strong small business lending with dedicated acquisition financing specialists.</li>
          <li><strong>BMO:</strong> Active in mid-market acquisition finance, strong in Ontario and Western Canada.</li>
          <li><strong>Scotiabank:</strong> Growing acquisition lending platform, particularly for businesses with international operations.</li>
          <li><strong>National Bank:</strong> Dominant in Quebec, with strong expertise in local business succession.</li>
          <li><strong>Desjardins:</strong> Cooperative financial group (mainly Quebec) with dedicated business transfer programs.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Typical Canadian Acquisition Structure</h2>
      <div className={bodyClass}>
        <p>A typical CAD 3M Canadian acquisition might be structured as:</p>
        <ul className={ulClass}>
          <li>Senior bank debt (CSBFP-backed): 35&ndash;45%</li>
          <li>BDC subordinate financing: 15&ndash;25%</li>
          <li>Vendor take-back: 15&ndash;20%</li>
          <li>Buyer equity: 15&ndash;25%</li>
        </ul>
      </div>

      <h2 className={h2Class}>Canadian Tax Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Small Business Deduction:</strong> 9% federal rate on first CAD 500,000 of active business income (combined federal/provincial: 10&ndash;13.5%)</li>
          <li><strong>General corporate rate:</strong> 15% federal + 8&ndash;16% provincial = 23&ndash;31% combined</li>
          <li><strong>Lifetime Capital Gains Exemption (LCGE):</strong> CAD 1,016,836 (2024) tax-free capital gains on qualifying small business shares</li>
          <li><strong>Goodwill (eligible capital property):</strong> 75% deductible on declining balance basis at 5% per year</li>
          <li><strong>Interest deductibility:</strong> Acquisition debt interest generally deductible against business income</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>BDC provides both senior and subordinated acquisition financing up to CAD 10M+, with patient repayment terms</li>
          <li>The CSBFP offers 85% government guarantee on loans up to CAD 1.15M, including goodwill financing</li>
          <li>BDC subordinate financing doesn&apos;t require equity dilution, making it ideal for search fund structures</li>
          <li>Provincial programs (especially Investissement Québec and Community Futures) add additional financing layers</li>
          <li>Canada&apos;s Small Business Deduction creates a 9% federal tax rate on the first CAD 500K of income</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-canada" className="text-apple-accent hover:underline">ETA in Canada: Acquiring a Canadian Business</Link></li>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">How to Finance an Acquisition</Link></li>
        <li><Link href="/learn/government-financing-programs-global" className="text-apple-accent hover:underline">Government Financing Programs: Global Overview</Link></li>
        <li><Link href="/learn/mezzanine-financing" className="text-apple-accent hover:underline">Mezzanine Financing for Business Acquisitions</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>BDC (Business Development Bank of Canada), <em>Business Acquisition Financing Programs</em> (2024)</li>
        <li>Innovation, Science and Economic Development Canada, <em>Canada Small Business Financing Program Guide</em> (2024)</li>
        <li>BDC, <em>Annual Report and Impact Assessment</em> (2024)</li>
        <li>Canadian Federation of Independent Business (CFIB), <em>SME Succession Survey</em> (2024)</li>
        <li>Ivey Business School, <em>Search Fund Activity in Canada</em> (2024)</li>
      </ul>
    </article>
  );
}
