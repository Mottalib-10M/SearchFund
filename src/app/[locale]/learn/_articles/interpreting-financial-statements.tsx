import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function InterpretingFinancialStatementsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Interpreting Financial Statements for Acquisition Decisions
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          The ability to read and interpret financial statements is the
          single most important skill for any acquisition buyer. Financial
          statements tell you what the business earns, what it owns, and
          how it manages cash &mdash; the three pillars of any investment
          decision. This guide shows you how to read P&amp;L, balance
          sheet, and cash flow statements through the lens of an acquirer.
        </p>

        <h2 className={h2Class}>The three financial statements</h2>

        <h3 className={h3Class}>1. Income statement (P&amp;L)</h3>
        <p>
          Shows revenue, expenses, and profit over a period. As a buyer,
          focus on:
        </p>
        <ul className={ulClass}>
          <li><strong>Revenue:</strong> Total sales. Analyze by customer, product/service line, and month. Look for trends over 3&ndash;5 years</li>
          <li><strong>Cost of Goods Sold (COGS):</strong> Direct costs of delivering products/services. Gross margin = (Revenue &minus; COGS) / Revenue. Compare to industry benchmarks</li>
          <li><strong>Operating expenses:</strong> SGA (selling, general, administrative). Includes salaries, rent, marketing, insurance, and the owner&rsquo;s compensation</li>
          <li><strong>EBITDA:</strong> Earnings Before Interest, Taxes, Depreciation, and Amortization. The standard profitability metric for acquisitions. See{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              adjusted EBITDA
            </Link></li>
          <li><strong>Net income:</strong> Bottom-line profit after all expenses. Less relevant than EBITDA for acquisition analysis because it includes non-cash items and owner-specific expenses</li>
        </ul>

        <h3 className={h3Class}>Key P&amp;L red flags for buyers</h3>
        <ul className={ulClass}>
          <li>Revenue declining for 2+ consecutive years</li>
          <li>Gross margins shrinking (pricing pressure or cost inflation)</li>
          <li>EBITDA margins significantly below industry averages</li>
          <li>Owner compensation well above or below market rate</li>
          <li>Large &ldquo;miscellaneous&rdquo; or &ldquo;other&rdquo; expense categories (hiding personal expenses)</li>
          <li>Revenue spikes from one-time projects or customers</li>
        </ul>

        <h3 className={h3Class}>2. Balance sheet</h3>
        <p>
          Shows what the business owns (assets), owes (liabilities), and
          the owner&rsquo;s equity at a point in time.
        </p>
        <ul className={ulClass}>
          <li><strong>Current assets:</strong> Cash, accounts receivable (AR), inventory, prepaid expenses. These fund daily operations</li>
          <li><strong>Fixed assets:</strong> Equipment, vehicles, property, leasehold improvements. Net of accumulated depreciation</li>
          <li><strong>Current liabilities:</strong> Accounts payable (AP), accrued expenses, current portion of debt. Due within 12 months</li>
          <li><strong>Long-term liabilities:</strong> Term loans, capital leases, deferred rent</li>
          <li><strong>Working capital:</strong> Current assets &minus; current liabilities (excluding cash and current debt). This is the cash the business needs to operate</li>
        </ul>

        <h3 className={h3Class}>Key balance sheet items for buyers</h3>
        <ul className={ulClass}>
          <li><strong>AR quality:</strong> What percentage is current (&lt;30 days) vs. overdue? High aged AR suggests collection problems</li>
          <li><strong>Inventory:</strong> Is it growing faster than revenue? That may indicate obsolescence or slowing sales</li>
          <li><strong>Fixed asset age:</strong> Old, fully depreciated equipment may need replacement soon (deferred capex)</li>
          <li><strong>Off-balance sheet items:</strong> Operating leases, contingent liabilities, personal guarantees</li>
        </ul>

        <h3 className={h3Class}>3. Cash flow statement</h3>
        <p>
          Shows how cash moves through the business. The most important
          statement for an acquirer because cash &mdash; not accounting
          profit &mdash; pays debt service and dividends.
        </p>
        <ul className={ulClass}>
          <li><strong>Operating cash flow:</strong> Cash generated from core operations. Should be positive and growing. If EBITDA is high but operating cash flow is low, investigate</li>
          <li><strong>Capital expenditures (capex):</strong> Cash spent on equipment, vehicles, and property. Split into maintenance capex (required) and growth capex (optional)</li>
          <li><strong>Free cash flow:</strong> Operating cash flow &minus; maintenance capex. This is the cash available for debt service, distributions, and growth investments</li>
          <li><strong>Financing activities:</strong> Debt borrowings and repayments, owner distributions. High owner distributions may explain low reinvestment</li>
        </ul>

        <h2 className={h2Class}>Connecting the three statements</h2>
        <ul className={ulClass}>
          <li><strong>P&amp;L → Balance sheet:</strong> Net income flows into retained earnings (equity). Revenue growth should correlate with AR growth</li>
          <li><strong>P&amp;L → Cash flow:</strong> Start with net income, add back non-cash expenses (depreciation), and adjust for working capital changes</li>
          <li><strong>Balance sheet → Cash flow:</strong> Changes in balance sheet accounts (AR, AP, inventory) explain working capital cash flows</li>
        </ul>

        <h2 className={h2Class}>The buyer&rsquo;s analytical framework</h2>

        <h3 className={h3Class}>Revenue analysis</h3>
        <ul className={ulClass}>
          <li>Request monthly revenue for the trailing 3&ndash;5 years (not just annual)</li>
          <li>Break down by customer to assess{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              concentration risk
            </Link></li>
          <li>Break down by product/service to identify growth and decline areas</li>
          <li>Compare revenue to bank deposits (catches unreported cash revenue)</li>
        </ul>

        <h3 className={h3Class}>Profitability analysis</h3>
        <ul className={ulClass}>
          <li>Calculate{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              adjusted EBITDA
            </Link>{" "}
            independently. Don&rsquo;t rely on the seller&rsquo;s or broker&rsquo;s calculation</li>
          <li>Normalize owner compensation to market-rate CEO salary</li>
          <li>Remove one-time expenses (lawsuit, equipment failure, COVID impacts)</li>
          <li>Add back personal expenses run through the business (vehicles, travel, family employees)</li>
          <li>Compare tax returns to P&amp;L (the single most important cross-check)</li>
        </ul>

        <h3 className={h3Class}>Cash flow analysis</h3>
        <ul className={ulClass}>
          <li>Calculate free cash flow for the trailing 3&ndash;5 years</li>
          <li>Assess working capital trends (increasing NWC absorbs cash; decreasing NWC generates cash)</li>
          <li>Estimate maintenance capex separately from growth capex</li>
          <li>Calculate debt service coverage ratio (DSCR): free cash flow / annual debt payments. Lenders want 1.25x+</li>
        </ul>

        <h2 className={h2Class}>SME-specific accounting issues</h2>
        <ul className={ulClass}>
          <li><strong>Cash vs. accrual:</strong> Many small businesses use cash-basis accounting, which can distort revenue and expense timing. Ask for both if available</li>
          <li><strong>Related-party transactions:</strong> Owner leasing the building from themselves, employing family members, or running personal expenses through the business</li>
          <li><strong>Tax minimization:</strong> SME owners minimize taxable income, making reported profits look lower than true economic earnings. This is why{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              add-backs
            </Link>{" "}
            exist</li>
          <li><strong>Inconsistent categorization:</strong> Expenses may be categorized differently year-to-year. Look at total costs, not just line items</li>
        </ul>

        <p>
          Financial statement analysis is the foundation of{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            financial due diligence
          </Link>.
          For the professional third-party validation, see our{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
            Quality of Earnings
          </Link>{" "}
          guide.
        </p>
      </div>
    </article>
  );
}
