import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AdjustedEBITDAArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Adjusted EBITDA: Add-Backs, Normalizations &amp; Red Flags
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Adjusted EBITDA is the single most important number in any
          business acquisition. It&rsquo;s the foundation for{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            valuation
          </Link>,
          the basis for{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            financing
          </Link>{" "}
          (lenders size loans as a multiple of EBITDA), and the number
          that determines whether the deal economics work. Getting this
          number right &mdash; or wrong &mdash; can make or break your
          acquisition.
        </p>
        <p>
          This guide explains how adjusted EBITDA is calculated, which
          add-backs are legitimate, which are red flags, and how to
          validate the seller&rsquo;s adjusted EBITDA through a{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
            quality of earnings (QoE) analysis
          </Link>.
        </p>

        <h2 className={h2Class}>What is adjusted EBITDA?</h2>
        <p>
          EBITDA stands for Earnings Before Interest, Taxes, Depreciation,
          and Amortization. It approximates the cash earnings of a
          business independent of its capital structure, tax situation,
          and accounting choices.
        </p>
        <p>
          <strong>Adjusted EBITDA</strong> takes this further by adding
          back or subtracting items that are non-recurring, non-operational,
          or specific to the current owner. The goal is to show the
          &ldquo;normalized&rdquo; cash earnings that a new owner could
          expect to generate.
        </p>

        <h3 className={h3Class}>The formula</h3>
        <p>
          Net Income + Interest + Taxes + Depreciation + Amortization
          = EBITDA
        </p>
        <p>
          EBITDA + Legitimate Add-Backs &minus; Required Deductions
          = Adjusted EBITDA
        </p>

        <h2 className={h2Class}>Legitimate add-backs</h2>
        <p>
          These adjustments are generally accepted by buyers, lenders,
          and QoE providers:
        </p>

        <h3 className={h3Class}>Owner-related adjustments</h3>
        <ul className={ulClass}>
          <li><strong>Above-market owner compensation:</strong> If the owner pays themselves $300K but the market rate for a replacement CEO is $150K, the $150K difference is a legitimate add-back</li>
          <li><strong>Owner perks and personal expenses:</strong> Car payments, country club dues, personal travel, family member salaries for no-show positions &mdash; if run through the business</li>
          <li><strong>Owner health insurance and benefits:</strong> Above-market benefits specific to the owner</li>
          <li><strong>Related-party rent:</strong> If the owner charges the business above-market rent for property they own personally</li>
        </ul>

        <h3 className={h3Class}>Non-recurring items</h3>
        <ul className={ulClass}>
          <li><strong>One-time legal expenses:</strong> Litigation, regulatory fines, or legal fees not expected to recur</li>
          <li><strong>Natural disaster or pandemic impacts:</strong> Business interruption from truly one-time events</li>
          <li><strong>One-time professional fees:</strong> Consulting projects, system implementations, accounting restructuring</li>
          <li><strong>Severance/restructuring costs:</strong> One-time costs related to employee terminations or restructuring</li>
        </ul>

        <h3 className={h3Class}>Accounting adjustments</h3>
        <ul className={ulClass}>
          <li><strong>Stock-based compensation:</strong> Non-cash expense added back</li>
          <li><strong>Non-cash charges:</strong> Goodwill impairment, asset write-downs</li>
          <li><strong>Changes in accounting methodology:</strong> If accounting methods changed mid-period, normalize for comparison</li>
        </ul>

        <h2 className={h2Class}>Gray-area add-backs (scrutinize carefully)</h2>
        <ul className={ulClass}>
          <li><strong>Pro-forma revenue adjustments:</strong> &ldquo;We just signed a contract worth $500K annually&rdquo; &mdash; the contract may be real, but normalized earnings should reflect actual historical performance</li>
          <li><strong>Cost savings the buyer will realize:</strong> &ldquo;You can save $200K by renegotiating vendor contracts&rdquo; &mdash; these are buyer synergies, not seller add-backs</li>
          <li><strong>&ldquo;Discretionary&rdquo; marketing spend:</strong> The seller may call marketing discretionary, but you might need to maintain it to sustain revenue</li>
          <li><strong>Under-market employee compensation:</strong> If key employees are underpaid (will need raises post-acquisition), EBITDA should be adjusted downward, not upward</li>
          <li><strong>Deferred maintenance:</strong> If the seller has been cutting capex to inflate EBITDA, you&rsquo;ll need to spend more post-close &mdash; this is an implicit deduction</li>
        </ul>

        <h2 className={h2Class}>Red flag add-backs</h2>
        <p>
          When the seller or broker presents these add-backs, your
          diligence alarm should go off:
        </p>
        <ul className={ulClass}>
          <li><strong>Add-backs exceeding 30&ndash;40% of stated EBITDA:</strong> If the adjusted EBITDA is 2x the reported EBITDA, the &ldquo;adjustments&rdquo; are doing more work than the business itself</li>
          <li><strong>Revenue normalization:</strong> Claiming COVID was an anomaly (in 2020&ndash;2021) while also claiming the 2022&ndash;2023 boom was &ldquo;normal&rdquo;</li>
          <li><strong>&ldquo;Synergy&rdquo; adjustments:</strong> Projected cost savings that the buyer will realize &mdash; these should not be added to the seller&rsquo;s EBITDA</li>
          <li><strong>Vague &ldquo;one-time&rdquo; expenses:</strong> If &ldquo;one-time&rdquo; expenses show up every year, they&rsquo;re not one-time</li>
          <li><strong>Related-party manipulation:</strong> Complex related-party transactions that obscure the true economics</li>
          <li><strong>Cash vs. accrual inconsistencies:</strong> Businesses that switch between cash and accrual accounting to present the best picture</li>
        </ul>

        <h2 className={h2Class}>SDE vs. EBITDA</h2>
        <p>
          For small businesses (typically under $1&ndash;2M in revenue),
          <strong> Seller&rsquo;s Discretionary Earnings (SDE)</strong> is
          often used instead of EBITDA:
        </p>
        <ul className={ulClass}>
          <li>SDE = EBITDA + total owner compensation (salary + benefits + perks)</li>
          <li>SDE assumes the buyer will be an owner-operator who replaces the seller</li>
          <li>SDE is typically 1.2&ndash;2x EBITDA for owner-operated businesses</li>
          <li>Businesses valued on SDE trade at lower multiples (2&ndash;4x SDE) than those valued on EBITDA (4&ndash;6x)</li>
        </ul>
        <p>
          For{" "}
          <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
            EBITDA multiples by industry
          </Link>,
          see our benchmarking guide.
        </p>

        <h2 className={h2Class}>How to validate: the QoE report</h2>
        <p>
          A{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
            Quality of Earnings (QoE) report
          </Link>{" "}
          is a third-party financial analysis that validates (or refutes)
          the seller&rsquo;s adjusted EBITDA. Key elements:
        </p>
        <ul className={ulClass}>
          <li><strong>Revenue quality:</strong> Is revenue recurring, contractual, or one-time? What&rsquo;s the retention rate?</li>
          <li><strong>Earnings sustainability:</strong> Are the adjusted earnings repeatable under new ownership?</li>
          <li><strong>Working capital analysis:</strong> Is the business generating or consuming cash beyond EBITDA?</li>
          <li><strong>Add-back validation:</strong> Independent assessment of each seller add-back &mdash; accepted, partially accepted, or rejected</li>
          <li><strong>Normalized run-rate:</strong> The QoE provider&rsquo;s independent estimate of sustainable EBITDA</li>
        </ul>
        <p>
          QoE reports typically cost $20K&ndash;$80K depending on deal
          size and complexity. They are not optional for serious
          acquisitions &mdash; they are the single most important piece
          of{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>.
        </p>

        <h2 className={h2Class}>Common EBITDA manipulation techniques</h2>
        <p>
          Be aware of these tactics some sellers use to inflate EBITDA:
        </p>
        <ul className={ulClass}>
          <li><strong>Channel stuffing:</strong> Pulling forward sales from future periods to inflate current-period revenue. A thorough{" "}
            <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
              financial due diligence
            </Link>{" "}
            process will catch this by analyzing monthly revenue trends</li>
          <li><strong>Deferred maintenance:</strong> Cutting necessary maintenance and capex to boost short-term EBITDA</li>
          <li><strong>Inventory manipulation:</strong> Understating COGS by not writing down obsolete inventory</li>
          <li><strong>Capitalizing expenses:</strong> Treating operating expenses as capital expenditures to keep them off the P&amp;L</li>
          <li><strong>Timing games:</strong> Accelerating revenue recognition or delaying expense recognition around period-end</li>
          <li><strong>Related-party transactions:</strong> Paying above-market prices to entities owned by the seller (or vice versa)</li>
        </ul>

        <h2 className={h2Class}>Practical tips for buyers</h2>
        <ul className={ulClass}>
          <li><strong>Always calculate your own EBITDA</strong> from the raw{" "}
            <Link href="/learn/interpreting-financial-statements" className="text-apple-accent hover:underline">
              financial statements
            </Link>{" "}
            before looking at the seller&rsquo;s adjusted figures</li>
          <li><strong>Compare tax returns to P&amp;L:</strong> Tax returns are harder to manipulate. If reported income on tax returns is materially lower than the seller&rsquo;s stated EBITDA, investigate</li>
          <li><strong>Look at 3&ndash;5 years of data:</strong> One good year doesn&rsquo;t make a trend. Normalize across the full period</li>
          <li><strong>Understand capex requirements:</strong> EBITDA is meaningless if the business requires heavy reinvestment. Calculate free cash flow (EBITDA &minus; capex &minus; working capital changes)</li>
          <li><strong>Hire a QoE provider early:</strong> Don&rsquo;t wait until the end of diligence. Engage QoE as soon as the LOI is signed</li>
          <li><strong>Negotiate based on verified EBITDA:</strong> Use the QoE-adjusted EBITDA as the basis for your final purchase price in the{" "}
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              LOI
            </Link>{" "}
            and purchase agreement, not the seller&rsquo;s original claims</li>
        </ul>
        <p>
          For a complete overview of how EBITDA drives deal pricing
          and structures, see our{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            business valuation guide
          </Link>{" "}
          and{" "}
          <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">
            negotiation tactics
          </Link>.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>What is the difference between EBITDA and adjusted EBITDA?</h3>
        <p>
          Standard EBITDA is calculated by adding back interest, taxes, depreciation,
          and amortization to net income. Adjusted EBITDA goes further by normalizing
          for items specific to the current owner &mdash; above-market owner
          compensation, personal expenses run through the business, one-time legal
          costs, and non-recurring items. Adjusted EBITDA represents the sustainable
          cash earnings a new owner can expect and is the number used for valuation
          and debt sizing in acquisitions.
        </p>

        <h3 className={h3Class}>How many add-backs are too many in adjusted EBITDA?</h3>
        <p>
          As a rule of thumb, if total add-backs exceed 30&ndash;40% of the stated
          EBITDA, treat the adjustments with heavy skepticism. At that level, the
          &ldquo;adjustments&rdquo; are doing more work than the business itself.
          Two to four clearly documented, objectively verifiable add-backs (such as
          above-market owner compensation and a one-time legal settlement) are normal.
          Ten or more add-backs covering everything from marketing to travel is a
          red flag.
        </p>

        <h3 className={h3Class}>Why is a Quality of Earnings report necessary?</h3>
        <p>
          A QoE report is a third-party financial analysis that independently validates
          or refutes the seller&rsquo;s adjusted EBITDA. Lenders require it to size
          the loan, and it typically catches 10&ndash;30% of claimed add-backs as
          unsupported or inflated. The $20K&ndash;$80K cost is a fraction of the
          overpayment risk it prevents. Engage a QoE provider as soon as the LOI is
          signed &mdash; do not treat it as optional.
        </p>
      </div>
    </article>
  );
}
