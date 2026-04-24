import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function MezzanineFinancingArticle() {
  return (
    <article>
      <h1 className={h1Class}>Mezzanine Financing for Business Acquisitions</h1>

      <div className={bodyClass}>
        <p>
          Mezzanine financing occupies a unique position in the{" "}
          <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
            capital stack
          </Link>{" "}
          &mdash; sitting between senior debt and equity. For acquisition entrepreneurs who need more leverage than banks will provide but want to minimize equity dilution, mezzanine debt can be the missing piece that makes a deal work.
        </p>
      </div>

      <h2 className={h2Class}>What Is Mezzanine Financing?</h2>

      <div className={bodyClass}>
        <p>
          Mezzanine debt is a hybrid financing instrument that combines characteristics of both debt and equity. It&apos;s subordinated debt &mdash; ranking below senior bank debt in the repayment hierarchy but above equity holders.
        </p>
        <p>According to the{" "}
          <a href="https://bschool.pepperdine.edu/institutes-centers/centers/private-capital-markets-project/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Pepperdine Private Capital Markets Report (2024)</a>, mezzanine debt accounts for approximately 10&ndash;15% of the capital structure in middle-market acquisitions, with total deployment exceeding $30 billion annually in the US alone.
        </p>
        <p>In a typical acquisition capital stack:</p>
        <ol className={olClass}>
          <li><strong>Senior secured debt (50&ndash;65%):</strong> Bank loans, SBA &mdash; lowest cost, first in line</li>
          <li><strong>Mezzanine debt (10&ndash;20%):</strong> Subordinated, higher cost, may include equity kickers</li>
          <li><strong>Equity (20&ndash;35%):</strong> Investor and searcher capital &mdash; highest risk, highest return</li>
        </ol>
      </div>

      <h2 className={h2Class}>Typical Mezzanine Terms</h2>

      <h3 className={h3Class}>Interest Rates</h3>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Cash interest:</strong> 8&ndash;14% per annum, paid current</li>
          <li><strong>PIK interest:</strong> 2&ndash;6% additional interest that accrues and compounds</li>
          <li><strong>Total coupon:</strong> 12&ndash;20% all-in, combining cash and PIK</li>
        </ul>
        <p>For comparison, senior bank debt typically runs 7&ndash;10%, while equity investors target 25&ndash;35%+ IRR.</p>
      </div>

      <h3 className={h3Class}>Equity Kickers (Warrants)</h3>
      <div className={bodyClass}>
        <p>
          Most mezzanine lenders receive equity warrants &mdash; the right to purchase 1&ndash;5% ownership at a nominal price. For a $5M acquisition with 15% mezz ($750K), warrants for 2&ndash;3% equity are typical with 7&ndash;10 year exercise periods.
        </p>
      </div>

      <h3 className={h3Class}>PIK (Payment-in-Kind) Interest</h3>
      <div className={bodyClass}>
        <p>
          PIK interest is added to the principal balance rather than requiring cash payments. This preserves cash flow &mdash; particularly valuable in early post-acquisition years.
        </p>
        <p>
          <strong>Example:</strong> $500K mezz at 10% cash + 4% PIK over 5 years. You pay $50K/year in cash interest, while the PIK balance grows from $500K to approximately $608K at maturity.
        </p>
      </div>

      <h3 className={h3Class}>Term and Repayment</h3>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Term:</strong> 5&ndash;7 years, typically 1&ndash;2 years longer than senior debt</li>
          <li><strong>Amortization:</strong> Usually interest-only with bullet repayment at maturity</li>
          <li><strong>Prepayment:</strong> Callable after 2&ndash;3 years with declining premiums (3%, 2%, 1%)</li>
          <li><strong>Covenants:</strong> Fewer than senior debt; may include leverage ratio tests</li>
        </ul>
      </div>

      <h2 className={h2Class}>When to Use Mezzanine Financing</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Bridging the gap:</strong> Senior lender funds 60% but you want only 25% equity &mdash; mezz covers the 15%</li>
          <li><strong>Minimizing dilution:</strong> At 15% coupon, mezz is expensive but cheaper than equity at 30%+ IRR</li>
          <li><strong>Higher leverage acquisitions:</strong> Businesses with strong, predictable cash flows supporting 4&ndash;5x total leverage</li>
          <li><strong>Add-on acquisitions:</strong> <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-build</Link> strategies needing capital without new equity rounds</li>
          <li><strong>Seller financing gap:</strong> When <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">seller financing</Link> is insufficient</li>
        </ul>
      </div>

      <h2 className={h2Class}>Mezzanine vs. Other Capital Sources</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Mezz vs. senior debt:</strong> More expensive (12&ndash;20% vs 7&ndash;10%), but provides additional leverage with fewer covenants</li>
          <li><strong>Mezz vs. equity:</strong> Cheaper (15% vs 25&ndash;35% IRR), less dilutive, but requires cash payments and has fixed maturity</li>
          <li><strong>Mezz vs. seller financing:</strong> Seller notes are cheaper (4&ndash;8%) and more flexible. Always maximize seller financing first</li>
          <li><strong>Mezz vs. SBA:</strong> SBA 7(a) loans typically don&apos;t allow subordinated debt without approval &mdash; usually incompatible</li>
        </ul>
      </div>

      <h2 className={h2Class}>Subordination Agreements</h2>
      <div className={bodyClass}>
        <p>The intercreditor agreement between senior and mezz lender is heavily negotiated:</p>
        <ul className={ulClass}>
          <li><strong>Payment subordination:</strong> Senior debt gets paid first; mezz payments blocked during senior default</li>
          <li><strong>Lien subordination:</strong> Senior lender has first priority on all collateral</li>
          <li><strong>Standstill period:</strong> Mezz lender waits 90&ndash;180 days before exercising remedies</li>
          <li><strong>Buyout right:</strong> Mezz may purchase senior debt at par to gain control</li>
          <li><strong>Amendment restrictions:</strong> Neither party can amend loan docs without consent</li>
        </ul>
      </div>

      <h2 className={h2Class}>Finding Mezzanine Lenders for SME Deals</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>SBICs:</strong> SBA-licensed funds investing in small businesses &mdash; can invest as little as $500K. According to the{" "}
            <a href="https://www.sba.gov/funding-programs/investment-capital/sbic" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">SBA SBIC program data (2024)</a>, over 300 active SBICs manage $30+ billion in combined capital</li>
          <li><strong>BDCs:</strong> Business Development Companies (Gladstone Capital, Saratoga Investment, Prospect Capital)</li>
          <li><strong>Family offices:</strong> Flexible mandates, may provide mezz-like structures at smaller sizes</li>
          <li><strong>Search fund investors:</strong> Some provide structured subordinated notes alongside equity</li>
          <li><strong>Regional mezz funds:</strong> Geographically focused funds specializing in lower middle market</li>
        </ul>
      </div>

      <h2 className={h2Class}>Example Deal Structure</h2>
      <div className={bodyClass}>
        <p><strong>$10M acquisition (at $1M EBITDA):</strong></p>
        <ul className={ulClass}>
          <li>Senior bank debt: $5.5M (55%) &mdash; 5-year, 8%, amortizing</li>
          <li>Seller note: $1.5M (15%) &mdash; 5-year, 6%, subordinated</li>
          <li>Mezzanine: $1.0M (10%) &mdash; 6-year, 14% (10% cash + 4% PIK), 2% warrants</li>
          <li>Equity: $2.0M (20%) &mdash; search fund investor capital</li>
        </ul>
        <p>Total leverage: 8.0x EBITDA. The key question: can the business generate enough free cash flow to service all three debt layers?</p>
      </div>

      <h2 className={h2Class}>Mezzanine in Search Fund Deals</h2>
      <div className={bodyClass}>
        <p>Mezz is relatively uncommon in traditional search fund acquisitions because:</p>
        <ul className={ulClass}>
          <li>Deal sizes ($5&ndash;15M) are at the low end of most mezz fund minimums</li>
          <li>Search fund investors prefer to provide all equity capital themselves</li>
          <li>SBA financing (common in self-funded searches) is typically incompatible</li>
        </ul>
        <p>Mezz becomes more relevant for larger acquisitions ($15M+), self-funded deals without SBA, and add-on acquisitions in buy-and-build strategies. When structuring a deal with both senior and mezzanine debt, understanding how to{" "}
          <Link href="/learn/negotiating-bank-debt" className="text-apple-accent hover:underline">negotiate bank debt terms</Link>{" "}
          is critical since the senior lender&apos;s covenants and intercreditor requirements directly constrain the mezz layer.
        </p>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Mezzanine fills the gap between senior debt and equity at 12&ndash;20% total cost</li>
          <li>Best for deals over $10M needing higher leverage with less equity dilution</li>
          <li>Always maximize cheaper capital sources (senior debt, seller financing) first</li>
          <li>SBICs and BDCs are the best sources for SME-sized mezzanine</li>
          <li>Subordination agreements are critical &mdash; get experienced M&A counsel</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">How to Finance a Search Fund Acquisition</Link></li>
        <li><Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">The Capital Stack Explained</Link></li>
        <li><Link href="/learn/leveraged-buyout-sme" className="text-apple-accent hover:underline">How to Structure an LBO for SMEs</Link></li>
        <li><Link href="/learn/seller-financing" className="text-apple-accent hover:underline">Seller Financing: Structures & Terms</Link></li>
        <li><Link href="/learn/debt-structure-optimization" className="text-apple-accent hover:underline">Debt Structure Optimization</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>What is the minimum deal size for mezzanine financing?</h3>
      <div className={bodyClass}>
        <p>
          Most institutional mezzanine lenders require a minimum investment of $2M&ndash;$5M, which typically corresponds to acquisition values of $15M+. For smaller deals, SBICs (Small Business Investment Companies) offer the most accessible mezz-like capital, with some investing as little as $500K. BDCs (Business Development Companies) occasionally go below $2M. Family offices and individual investors may provide flexible subordinated debt at even smaller sizes, though terms vary widely.
        </p>
      </div>

      <h3 className={h3Class}>Can you combine mezzanine debt with an SBA loan?</h3>
      <div className={bodyClass}>
        <p>
          Generally no. The SBA 7(a) program typically does not allow subordinated debt in the capital stack without explicit SBA approval, which is rarely granted for traditional mezzanine. However, seller financing is an exception &mdash; the SBA permits seller notes on standby (no payments for the first 2 years). If you need additional leverage beyond what SBA provides, consider maximizing the seller note before exploring mezz alternatives outside the SBA structure.
        </p>
      </div>

      <h3 className={h3Class}>How does PIK interest affect my total cost of capital?</h3>
      <div className={bodyClass}>
        <p>
          PIK (payment-in-kind) interest compounds the principal balance, meaning you pay interest on interest. A $500K mezzanine note at 10% cash + 4% PIK grows to approximately $608K over 5 years, increasing your effective annual cost above the stated 14% coupon. While PIK preserves cash flow in early years, you must plan for the larger balloon payment at maturity. Model the total dollar cost including PIK compounding when comparing mezzanine to equity or other financing alternatives.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Pepperdine University, <em>Private Capital Markets Report</em> (2024)</li>
        <li>Allied Capital / Ares Capital, <em>The Handbook of Mezzanine Finance</em> (Wiley, 2020)</li>
        <li>SBA, <em>SBIC Program Overview and Performance Data</em> (2024)</li>
        <li>Preqin, <em>Private Debt Quarterly Update &mdash; Mezzanine Segment</em> (Q4 2024)</li>
      </ul>
    </article>
  );
}
