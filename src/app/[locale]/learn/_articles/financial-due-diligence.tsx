import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function FinancialDueDiligenceArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Financial Due Diligence for Small Business Acquisitions: The Buyer&rsquo;s Playbook
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">18 min read</p>

      <div className={bodyClass}>
        <p>
          Financial due diligence is the single highest-leverage activity in any small business
          acquisition. It separates buyers who acquire profitable companies from those who inherit
          hidden liabilities.{" "}
          <a href="https://hbr.org/2011/03/the-big-idea-the-new-ma-playbook" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Harvard Business Review</a>{" "}
          research shows that 70&ndash;90% of M&amp;A transactions fail to create value, and
          inadequate due diligence ranks among the top reasons. For search fund operators and
          first-time buyers spending $1M&ndash;$10M on an acquisition, the financial DD process
          is your primary defense against overpaying, inheriting undisclosed debt, or acquiring
          a business whose earnings evaporate after closing. This guide provides a practical,
          step-by-step framework grounded in what experienced M&amp;A advisors actually examine
          &mdash; with specific dollar thresholds, real-world red flags, and the exact documents
          you need to request.
        </p>

        {/* ── Section 1 ── */}
        <h2 className={h2Class}>What Financial Due Diligence Actually Covers (and What It Doesn&rsquo;t)</h2>
        <p>
          Financial due diligence is a systematic investigation of a target company&rsquo;s
          financial records, designed to verify the seller&rsquo;s claims and surface risks that
          could affect the purchase price or deal structure. It is not an audit. The{" "}
          <a href="https://www.aicpa.org/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">AICPA</a>{" "}
          draws a clear distinction: an audit provides reasonable assurance that financial
          statements are free of material misstatement under GAAP, while due diligence is a
          forward-looking risk assessment tailored to the buyer&rsquo;s specific concerns.
        </p>
        <p>
          In practice, financial DD for a small business typically spans 30&ndash;90 days after
          signing a{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">letter of intent</Link>.
          The scope covers five core areas: revenue quality, earnings normalization, working
          capital, balance sheet integrity, and cash flow sustainability. Each area feeds
          directly into{" "}
          <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">adjusted EBITDA</Link>{" "}
          &mdash; the metric that drives both{" "}
          <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">valuation multiples</Link>{" "}
          and lender underwriting decisions.
        </p>
        <p>
          Financial DD does not replace{" "}
          <Link href="/learn/legal-due-diligence" className="text-apple-accent hover:underline">legal due diligence</Link>,{" "}
          <Link href="/learn/operational-due-diligence" className="text-apple-accent hover:underline">operational due diligence</Link>,
          or{" "}
          <Link href="/learn/commercial-due-diligence" className="text-apple-accent hover:underline">commercial due diligence</Link>.
          Those workstreams examine contracts, processes, and market dynamics respectively. Financial
          DD is the quantitative foundation that makes every other workstream actionable.
        </p>

        {/* ── Section 2 ── */}
        <h2 className={h2Class}>The 12 Documents You Must Request Before Spending a Dollar</h2>
        <p>
          Incomplete document requests are one of the most common mistakes first-time buyers make.
          A seller who hesitates to provide any of the items below is signaling a problem. Here is
          the minimum document set for a small business acquisition, organized by priority:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Federal and state tax returns (3&ndash;5 years):</strong> Tax returns are the
            single most reliable financial document because they carry penalties for
            misrepresentation. Compare reported revenue on the return to the P&amp;L &mdash; any
            gap above 5% needs a written explanation.
          </li>
          <li>
            <strong>Profit &amp; loss statements (3&ndash;5 years, monthly):</strong> Annual P&amp;Ls
            hide seasonal swings. A landscaping company might show $1.2M in annual revenue but
            generate 70% of it between April and September, creating severe cash flow pressure in
            winter months.
          </li>
          <li>
            <strong>Balance sheets (3&ndash;5 years, quarterly at minimum):</strong> Look for trends
            in receivables growth outpacing revenue growth &mdash; a classic sign of deteriorating
            collection quality.
          </li>
          <li>
            <strong>Cash flow statements (3&ndash;5 years):</strong> If cash flow from operations
            diverges significantly from net income, dig into accruals. A $200K gap between net
            income and operating cash flow in a $3M revenue business demands investigation.
          </li>
          <li>
            <strong>General ledger detail (trailing 24 months):</strong> Transaction-level data
            reveals what summary financials hide. Look for large journal entries posted near
            year-end, especially reclassifications between expense categories.
          </li>
          <li>
            <strong>Bank statements (24 months, all accounts):</strong> Cross-reference deposits
            against reported revenue. For cash-intensive businesses (restaurants, car washes,
            laundromats), bank deposits are the only reliable revenue verification.
          </li>
          <li>
            <strong>Accounts receivable aging schedule:</strong> Any receivable over 90 days old
            has, on average, less than a 50% chance of collection. Discount these aggressively
            when modeling working capital.
          </li>
          <li>
            <strong>Accounts payable aging schedule:</strong> Rising payables often indicate cash
            flow pressure. If a seller is stretching vendor payments from 30 to 60+ days, the
            business may need more working capital than the financials suggest.
          </li>
          <li>
            <strong>Revenue breakdown by customer and product/service:</strong> This is essential for{" "}
            <Link href="/learn/dd-red-flags" className="text-apple-accent hover:underline">identifying concentration risk</Link>.
            If any single customer represents more than 15&ndash;20% of revenue, the deal economics
            change materially.
          </li>
          <li>
            <strong>Debt schedule:</strong> All outstanding loans, lines of credit, equipment
            leases, merchant cash advances, and personal guarantees. Include maturity dates,
            interest rates, prepayment penalties, and change-of-control provisions.
          </li>
          <li>
            <strong>Payroll records and employee census (24 months):</strong> Headcount trends,
            compensation levels, benefits costs, and any independent contractor arrangements
            that might be reclassified as W-2 employees.
          </li>
          <li>
            <strong>Current-year budget and management projections:</strong> Compare actuals to
            budget. A business that consistently misses its own projections by 20%+ has a
            forecasting credibility problem that will affect your post-acquisition planning.
          </li>
        </ol>

        {/* ── Section 3 ── */}
        <h2 className={h2Class}>Revenue Analysis: Separating Sustainable Income from One-Time Windfalls</h2>
        <p>
          Revenue is the starting point of every valuation, which makes revenue quality the most
          consequential determination in financial DD. A $5M revenue business trading at 4x
          EBITDA might look like a $2M deal &mdash; until you discover that $800K of revenue came
          from a single government contract that ended six months ago.
        </p>
        <p>
          Start by decomposing revenue into three categories: recurring (subscription, contract,
          or repeat purchase), semi-recurring (same customers but no contractual obligation), and
          non-recurring (one-time projects, liquidation sales, pandemic-related spikes). The{" "}
          <a href="https://digitalcommons.pepperdine.edu/gsbm_pcm_pcmr/18/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">2025 Pepperdine Private Capital Markets Report</a>{" "}
          confirms that acquirers consistently pay higher multiples &mdash; often 1&ndash;2x more
          &mdash; for businesses with a high percentage of recurring revenue, reflecting lower
          risk and greater predictability.
        </p>
        <p>
          Customer concentration is the second critical dimension. Pull a revenue-by-customer
          report for the trailing three years and calculate the Herfindahl-Hirschman Index (HHI)
          or simply flag any customer representing 15%+ of total revenue. A manufacturing company
          with 40% of revenue from a single retailer is one purchasing decision away from a
          crisis &mdash; and lenders will discount the business accordingly. According to{" "}
          <a href="https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">SBA lending guidelines</a>,
          customer concentration above 20% often triggers additional underwriting scrutiny for
          SBA 7(a) acquisition loans.
        </p>
        <p>
          Finally, verify revenue against bank deposits. For every dollar of reported revenue,
          you should be able to trace a corresponding bank deposit (adjusted for receivables
          timing). In cash-heavy businesses, discrepancies between reported revenue and bank
          deposits can indicate unreported cash income &mdash; which creates a paradox: the
          seller claims higher earnings, but the tax returns show lower income. You cannot
          pay a multiple on income the IRS has never seen.
        </p>

        {/* ── Section 4 ── */}
        <h2 className={h2Class}>Earnings Normalization: Building the True EBITDA Bridge</h2>
        <p>
          The seller&rsquo;s &ldquo;adjusted EBITDA&rdquo; figure is almost always higher than
          reality. Your job in financial DD is to independently reconstruct earnings from raw
          financial data, then evaluate each add-back the seller proposes. A detailed treatment
          of this process is available in our{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">quality of earnings guide</Link>,
          but the core framework involves three tiers of add-backs.
        </p>
        <p>
          <strong>Tier 1 &mdash; Legitimate add-backs</strong> include owner compensation above
          market rate (if the owner pays themselves $350K but a replacement GM would cost $150K,
          the $200K difference is a valid add-back), one-time legal settlements, non-recurring
          consulting fees for a completed project, and personal expenses run through the business
          (the owner&rsquo;s car lease, health insurance for family members not working in the
          business, personal travel). For businesses below $5M in revenue, the distinction between{" "}
          <Link href="/learn/sde-vs-ebitda" className="text-apple-accent hover:underline">SDE and EBITDA</Link>{" "}
          becomes critical: SDE adds back the full owner salary, while EBITDA assumes a market-rate
          manager is in place.
        </p>
        <p>
          <strong>Tier 2 &mdash; Gray-area add-backs</strong> require scrutiny. These include
          &ldquo;one-time&rdquo; expenses that recur every year (equipment repairs, marketing
          campaigns, employee severance), above-market rent paid to a related party (the owner
          who also owns the building), and cost savings that haven&rsquo;t been implemented yet
          (&ldquo;synergies&rdquo; that exist only on paper). A useful rule: if an expense has
          occurred in two of the last three years, it is not one-time.
        </p>
        <p>
          <strong>Tier 3 &mdash; Red-flag add-backs</strong> should trigger deeper investigation.
          Adding back &ldquo;marketing spend&rdquo; as discretionary when the business depends on
          paid advertising to generate leads, normalizing away customer refunds or warranty claims,
          and excluding cost-of-goods adjustments without supporting documentation all fall into
          this category. Review our{" "}
          <Link href="/learn/red-flags-due-diligence" className="text-apple-accent hover:underline">due diligence red flags guide</Link>{" "}
          for a comprehensive list of warning signs.
        </p>
        <p>
          The acid test: compare your independently calculated adjusted EBITDA to the seller&rsquo;s
          figure. If the gap exceeds 15&ndash;20%, either the seller is being aggressive with
          add-backs or you are being too conservative. A third-party QoE report resolves the
          disagreement with an objective analysis.
        </p>

        {/* ── Section 5 ── */}
        <h2 className={h2Class}>Working Capital: The Hidden Cash Trap That Catches First-Time Buyers</h2>
        <p>
          Working capital is the operational cash a business needs to fund day-to-day operations
          &mdash; inventory on shelves, receivables waiting to be collected, minus payables owed
          to vendors. Many first-time buyers focus exclusively on EBITDA and ignore working
          capital, only to discover post-closing that they need to inject $200K&ndash;$500K of
          additional cash just to keep the business operating normally.
        </p>
        <p>
          The standard approach is to calculate a{" "}
          <Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">net working capital (NWC) peg</Link>{" "}
          &mdash; a normalized level of working capital based on a trailing 12-month average,
          excluding cash and current-portion debt. The purchase agreement should specify that
          the seller delivers the business with NWC at or above the peg; any shortfall results
          in a dollar-for-dollar price reduction at closing.
        </p>
        <p>
          Three metrics tell you whether working capital is healthy or deteriorating:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Days Sales Outstanding (DSO):</strong> The average number of days to collect
            receivables. A DSO of 45 days is typical for B2B services. If DSO has climbed from
            35 to 55 days over two years, customers are either unhappy or financially strained
            &mdash; either way, the business needs more working capital to bridge the gap.
          </li>
          <li>
            <strong>Days Payable Outstanding (DPO):</strong> How long the business takes to pay
            its vendors. A DPO that has expanded from 30 to 60+ days can signal cash flow
            pressure. It can also mean the seller is intentionally stretching payables to inflate
            the cash balance at closing.
          </li>
          <li>
            <strong>Inventory Turnover:</strong> For product-based businesses, slow-moving
            inventory ties up cash and may require write-downs. If inventory has grown 30% while
            revenue has grown 5%, you likely have obsolescence risk.
          </li>
        </ul>

        {/* ── Section 6 ── */}
        <h2 className={h2Class}>Cash Flow and Debt Service: Can the Business Pay for Itself?</h2>
        <p>
          The ultimate test of any leveraged acquisition is whether the business generates enough
          free cash flow to service acquisition debt, fund working capital, maintain equipment,
          and provide a return to the buyer. This is where{" "}
          <Link href="/learn/financial-modeling-for-acquisitions" className="text-apple-accent hover:underline">financial modeling</Link>{" "}
          becomes essential.
        </p>
        <p>
          Start with adjusted EBITDA, then subtract maintenance capital expenditures (the minimum
          spend required to keep equipment and facilities operational), normalize for working
          capital changes, and account for taxes. The result is unlevered free cash flow (UFCF).
          Compare UFCF against projected annual debt service &mdash; principal plus interest on
          the acquisition loan &mdash; to calculate the debt service coverage ratio (DSCR).
        </p>
        <p>
          SBA 7(a) lenders typically require a minimum DSCR of 1.25x, meaning the business must
          generate $1.25 of free cash flow for every $1.00 of debt service. Conventional lenders
          often want 1.5x or higher. If your DSCR is below 1.15x with realistic assumptions, the
          deal is too thinly capitalized &mdash; either the purchase price needs to come down or
          you need more equity in the deal.
        </p>
        <p>
          Pay special attention to <strong>deferred capital expenditures</strong>. Some sellers
          deliberately underinvest in equipment, facilities, or technology during the sale
          process to inflate EBITDA. A $2M EBITDA business that has deferred $300K of necessary
          equipment replacements really generates $1.7M of sustainable cash flow. Cross-reference
          capex levels against the three-to-five-year historical average and ask the seller&rsquo;s
          maintenance team about equipment condition.
        </p>

        {/* ── Section 7 ── */}
        <h2 className={h2Class}>Quality of Earnings Reports: When You Need One and What It Costs</h2>
        <p>
          A Quality of Earnings (QoE) report is a third-party financial analysis performed by an
          independent CPA firm that validates (or adjusts) the seller&rsquo;s reported earnings.
          According to a{" "}
          <a href="https://www2.deloitte.com/us/en/pages/mergers-and-acquisitions/articles/m-a-trends-report.html" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Deloitte M&amp;A Trends Survey</a>,
          43% of corporate executives and 39% of private equity investors consider financial
          due diligence &mdash; anchored by the QoE &mdash; the single most important factor in
          achieving a successful acquisition outcome.
        </p>
        <p>
          For small business acquisitions, QoE reports come in two flavors:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Lite-scope QoE ($5,000&ndash;$15,000, 2&ndash;4 weeks):</strong> Appropriate
            for deals under $2M in enterprise value with clean financials and a single operating
            entity. Covers revenue trending, EBITDA normalization, and working capital analysis
            but typically does not include detailed balance sheet testing or field verification.
          </li>
          <li>
            <strong>Full-scope QoE ($15,000&ndash;$50,000+, 4&ndash;8 weeks):</strong> Required
            for deals above $3M, businesses with complex revenue recognition, multiple entities,
            or significant related-party transactions. Includes detailed{" "}
            <Link href="/learn/interpreting-financial-statements" className="text-apple-accent hover:underline">financial statement analysis</Link>,
            proof-of-cash testing, customer and vendor verification, and a comprehensive
            normalized earnings bridge.
          </li>
        </ul>
        <p>
          The decision matrix is straightforward: if your acquisition loan exceeds $2M, your lender
          will almost certainly require a QoE. If you are self-funding a smaller deal, a lite-scope
          QoE is still the most cost-effective insurance against post-closing surprises. The{" "}
          <a href="https://www.duedilio.com/understanding-financial-due-diligence-in-small-business-acquisitions/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Duedilio due diligence marketplace</a>{" "}
          offers useful benchmarks on scope and pricing by deal size.
        </p>

        {/* ── Section 8 ── */}
        <h2 className={h2Class}>The 7 Most Costly Financial DD Mistakes (and How to Avoid Them)</h2>
        <p>
          After reviewing hundreds of small business transactions, experienced M&amp;A advisors
          consistently see the same errors. Here are the seven that destroy the most value:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Trusting the CIM without verification:</strong> The Confidential Information
            Memorandum is a marketing document prepared by the seller&rsquo;s broker. It is not
            audited, not independently verified, and often presents the most favorable
            interpretation of the financials. Treat every number in the CIM as a hypothesis that
            needs testing.
          </li>
          <li>
            <strong>Reviewing annual financials instead of monthly:</strong> Annual P&amp;Ls
            average out monthly volatility. A business showing $400K of annual EBITDA might have
            generated $500K in the first half and lost $100K in the second &mdash; a trend that
            annual numbers completely obscure.
          </li>
          <li>
            <strong>Ignoring the tax return crosscheck:</strong> Comparing the P&amp;L to tax
            returns is the single most effective fraud detection technique available to buyers.
            If reported revenue on the P&amp;L is $3.2M but the tax return shows $2.8M, someone
            has explaining to do.
          </li>
          <li>
            <strong>Accepting seller add-backs at face value:</strong> Sellers routinely add back
            expenses that should not be added back. In a recent transaction, a seller added back
            $180K of &ldquo;discretionary marketing&rdquo; &mdash; but the business had generated
            zero organic leads in three years. Removing the marketing would have destroyed the
            revenue base.
          </li>
          <li>
            <strong>Overlooking working capital requirements:</strong> A buyer who pays $4M for
            a business based on $1M EBITDA at a 4x multiple, then discovers that the business
            needs $300K of additional working capital post-close, has effectively paid 4.3x.
          </li>
          <li>
            <strong>Starting the QoE engagement too late:</strong> Full-scope QoE reports take
            4&ndash;8 weeks. If your LOI gives you 90 days of exclusivity and you wait until day
            30 to engage a QoE provider, you are compressing the most important analysis into an
            impossibly tight window. Engage QoE firms before signing the LOI so they can start
            immediately.
          </li>
          <li>
            <strong>Failing to model post-acquisition cash flow:</strong> Financial DD is
            backward-looking by nature, but buying a business is a forward-looking decision.
            Build a 3&ndash;5 year{" "}
            <Link href="/learn/financial-modeling-for-acquisitions" className="text-apple-accent hover:underline">financial model</Link>{" "}
            that stress-tests revenue declines of 10&ndash;20%, interest rate increases, and
            customer loss scenarios.
          </li>
        </ol>

        {/* ── Section 9 ── */}
        <h2 className={h2Class}>A 60-Day Financial DD Timeline for Small Business Acquisitions</h2>
        <p>
          Most small business acquisitions complete financial DD within 60&ndash;90 days of LOI
          signing. Here is a practical timeline based on the standard workflow used by search
          fund operators and independent sponsors:
        </p>
        <p>
          <strong>Days 1&ndash;7: Document collection and QoE engagement.</strong> Send the
          full document request list on day one. Simultaneously engage your QoE provider (if
          using one) and brief them on the deal thesis, key risks, and areas of focus. Set up
          the virtual data room and establish a cadence for weekly seller calls.
        </p>
        <p>
          <strong>Days 8&ndash;21: Revenue and earnings deep dive.</strong> Analyze revenue by
          customer, product, and month. Build the EBITDA bridge independently. Identify every
          add-back the seller has proposed and categorize each as Tier 1, 2, or 3. Compare
          P&amp;L figures against tax returns. Flag discrepancies for the management
          presentation.
        </p>
        <p>
          <strong>Days 22&ndash;35: Working capital and balance sheet testing.</strong> Calculate
          the NWC peg. Age receivables and payables. Test inventory against physical counts (if
          applicable). Identify off-balance-sheet obligations: operating leases, contingent
          liabilities, personal guarantees, and unfunded commitments.
        </p>
        <p>
          <strong>Days 36&ndash;50: Cash flow modeling and QoE review.</strong> Build the
          post-acquisition financial model with conservative, base, and optimistic scenarios.
          Review the draft QoE report. Reconcile any differences between your independent
          analysis and the QoE findings. Prepare a list of open items for the seller.
        </p>
        <p>
          <strong>Days 51&ndash;60: Final negotiation and deal structuring.</strong> Use the
          completed financial DD to negotiate final price adjustments, working capital pegs,
          representations and warranties, and any escrow or earnout provisions. Coordinate
          with{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">parallel DD workstreams</Link>{" "}
          (legal, operational, commercial) to ensure all contingencies are resolved.
        </p>

        {/* ── FAQ ── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>How much does financial due diligence cost for a small business acquisition?</h3>
        <p>
          Total financial DD costs depend on whether you hire a QoE provider and the complexity
          of the business. For a straightforward single-entity deal under $2M, expect to spend
          $5,000&ndash;$15,000 on a lite-scope QoE, plus $3,000&ndash;$8,000 in accounting
          advisory fees. For deals between $3M&ndash;$10M, a full-scope QoE runs
          $15,000&ndash;$50,000, with total financial DD costs (including legal review of
          financial representations) reaching $25,000&ndash;$75,000. These costs are a fraction
          of the losses you&rsquo;d incur from acquiring a business with $200K of undisclosed
          liabilities.
        </p>

        <h3 className={h3Class}>Can I do financial due diligence myself without hiring a CPA firm?</h3>
        <p>
          You can and should perform your own preliminary financial analysis before engaging a
          third-party provider. Cross-referencing tax returns against P&amp;L statements,
          analyzing revenue by customer, and calculating basic working capital metrics require
          spreadsheet skills, not a CPA license. However, for any deal above $1M, a professional
          QoE report provides independent verification that lenders require and that protects you
          from seller misrepresentation. Think of it as insurance: $15K&ndash;$30K to validate a
          $3M&ndash;$5M purchase decision is a 0.5&ndash;1% cost that routinely uncovers issues
          worth 5&ndash;15% of the deal value.
        </p>

        <h3 className={h3Class}>What are the biggest red flags in financial due diligence?</h3>
        <p>
          The five most common red flags are: revenue that cannot be verified against bank
          deposits (especially in cash-heavy businesses), a gap of more than 5% between P&amp;L
          revenue and tax return revenue, EBITDA add-backs exceeding 40% of reported EBITDA,
          customer concentration above 20% with no long-term contracts, and declining gross
          margins masked by one-time revenue items. Any of these issues should trigger deeper
          investigation, a price renegotiation, or both. See our{" "}
          <Link href="/learn/red-flags-due-diligence" className="text-apple-accent hover:underline">complete red flags guide</Link>{" "}
          for a detailed breakdown.
        </p>

        <h3 className={h3Class}>How long does financial due diligence take for a small business?</h3>
        <p>
          Most small business acquisitions ($1M&ndash;$10M enterprise value) complete financial
          DD in 45&ndash;90 days. The timeline depends on three variables: how quickly the seller
          provides requested documents, whether a QoE provider is engaged (adding 2&ndash;8
          weeks), and the complexity of the business itself. A single-location service business
          with clean QuickBooks records might wrap in 30&ndash;45 days. A multi-entity
          manufacturing company with inventory, related-party leases, and international
          suppliers could take 90+ days. Build your LOI exclusivity period to accommodate the
          longer end of this range.
        </p>

        <h3 className={h3Class}>Should financial due diligence happen before or after signing the LOI?</h3>
        <p>
          Detailed financial DD begins after the LOI is signed, because the LOI grants exclusivity
          and obligates the seller to open their books. However, smart buyers perform preliminary
          financial analysis before the LOI using publicly available information, broker-provided
          financials, and initial management meetings. This pre-LOI screening helps you avoid
          wasting $15K&ndash;$50K in DD costs on deals with fundamental financial problems. The
          LOI should include specific DD contingencies allowing you to terminate without penalty
          if financial DD reveals material discrepancies from the seller&rsquo;s representations.
        </p>
      </div>
    </article>
  );
}
