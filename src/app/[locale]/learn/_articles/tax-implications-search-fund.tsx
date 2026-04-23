import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function TaxImplicationsSearchFundArticle() {
  return (
    <article>
      <h1 className={h1Class}>Tax Implications of Search Fund Investing</h1>
      <div className={bodyClass}>
        <p>Search fund investments have unique tax characteristics that differ from traditional PE, venture capital, and public market investments. Understanding the tax treatment of search capital, acquisition equity, operating distributions, and exit proceeds is essential for investors structuring their search fund portfolios. Tax planning can significantly impact net returns, particularly given the long hold periods and concentrated positions typical of search fund investing.</p>
      </div>

      <h2 className={h2Class}>Search Phase Tax Treatment</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Search capital deductibility:</strong> Search capital invested in the search fund entity is typically treated as a capital contribution, not a current expense.</li>
          <li><strong>Failed search:</strong> If the search fund does not complete an acquisition, investors may claim a capital loss on their search capital investment.</li>
          <li><strong>Conversion to acquisition equity:</strong> Search capital converts to acquisition equity at a step-up (typically 1.5x). The step-up is built into the searcher&apos;s equity split, not a taxable event for investors.</li>
          <li><strong>Entity structure:</strong> Most search funds are structured as LLCs taxed as partnerships. K-1 reporting to investors for their share of income, loss, and deductions.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Operating Phase Tax Treatment</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Pass-through income:</strong> If the acquired company is a pass-through entity (LLC, S-corp), investors receive K-1 income regardless of whether cash is distributed.</li>
          <li><strong>Phantom income:</strong> Investors may owe taxes on allocated income before receiving cash distributions. Important to understand timing differences.</li>
          <li><strong>Distributions:</strong> Cash distributions are generally tax-free returns of capital to the extent of basis, then capital gains above basis.</li>
          <li><strong>Depreciation &amp; amortization:</strong> Acquisition goodwill and asset step-ups create depreciation/amortization deductions that reduce taxable income.</li>
          <li><strong>Section 338(h)(10):</strong> Stock purchases treated as asset purchases for tax purposes. Creates higher amortizable basis but may increase seller&apos;s tax burden.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Exit Tax Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Long-term capital gains:</strong> Investments held for 1+ year qualify for long-term capital gains rates (20% federal + 3.8% NIIT for high earners).</li>
          <li><strong>Qualified small business stock:</strong> Section 1202 QSBS exclusion may apply to C-corp acquisitions, potentially excluding up to $10M or 10x basis from capital gains.</li>
          <li><strong>Installment sales:</strong> Earn-outs and seller financing at exit may allow deferral of capital gains recognition over the payment period.</li>
          <li><strong>Opportunity Zone:</strong> Investing search fund exit proceeds in qualified Opportunity Zone funds can defer and potentially reduce capital gains taxes.</li>
          <li><strong>State taxes:</strong> State income tax treatment varies significantly. Some states have no income tax; others tax capital gains as ordinary income.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Entity Structure Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>LLC vs. C-corp:</strong> LLCs provide pass-through taxation (avoiding double taxation). C-corps enable QSBS treatment but have double taxation on distributions.</li>
          <li><strong>Blocker entities:</strong> Tax-exempt investors (endowments, foundations) may use blocker corporations to avoid UBTI (Unrelated Business Taxable Income).</li>
          <li><strong>International investors:</strong> Non-US investors face withholding tax on US-source income. Treaty benefits may reduce withholding rates.</li>
          <li><strong>IRA/retirement accounts:</strong> Investing through IRAs introduces UBTI concerns for leveraged investments in pass-through entities.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Most search funds are structured as pass-through entities (LLCs), generating K-1 income that flows to investors regardless of cash distributions</li>
          <li>Long-term capital gains treatment (20% + 3.8% NIIT) applies to exits held for 1+ year, significantly lower than ordinary income rates</li>
          <li>Section 1202 QSBS exclusion can potentially eliminate capital gains on C-corp search fund exits up to $10M or 10x basis</li>
          <li>Phantom income from pass-through entities can create tax obligations before cash is distributed &mdash; plan for this cash flow mismatch</li>
          <li>Consult a tax advisor specializing in private equity and search fund structures before investing</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">Search Fund Legal Structure</Link></li>
        <li><Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">Tax Optimization in Acquisitions</Link></li>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns</Link></li>
        <li><Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">Cap Tables & Equity</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>IRS, <em>Partnership Tax Guide (Publication 541)</em> (2024)</li>
        <li>Stanford GSB, <em>Search Fund Study: Tax Structure Analysis</em> (2024)</li>
        <li>PwC, <em>Tax Considerations for Private Equity Investors</em> (2024)</li>
      </ul>
    </article>
  );
}
