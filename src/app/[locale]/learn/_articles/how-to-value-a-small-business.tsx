import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function HowToValueASmallBusinessArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        How to Value a Small Business: The Complete Buyer&rsquo;s Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">25 min read</p>

      <div className={bodyClass}>
        <p>
          Business valuation is both art and science. Whether you are a search fund entrepreneur evaluating
          an acquisition target, a self-funded searcher negotiating directly with an owner, or a business
          broker trying to price a listing fairly, getting the valuation right determines whether a deal
          creates or destroys value. According to{" "}
          <a href="https://www.gsb.stanford.edu/faculty-research/case-studies/2024-search-fund-study" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            Stanford GSB&rsquo;s 2024 Search Fund Study
          </a>, the median acquisition price for search fund deals was 5.6x EBITDA, with a range spanning
          3.0x to over 9.0x depending on industry, growth, and risk profile.
        </p>
        <p>
          This guide covers the five primary valuation methods used in small and mid-size business
          transactions, explains when each applies, and provides real-world benchmarks so you can
          develop a defensible valuation for any business with $500K to $10M in annual earnings.
        </p>

        {/* ─── SECTION 1: SDE vs EBITDA ─── */}
        <h2 className={h2Class}>Step 1: Choose the Right Earnings Metric &mdash; SDE vs EBITDA</h2>
        <p>
          Before applying any valuation method, you must determine the correct earnings metric. This
          single decision affects every number that follows. The two dominant metrics in small business
          transactions are{" "}
          <Link href="/learn/sde-vs-ebitda" className="text-apple-accent hover:underline">
            SDE (Seller&rsquo;s Discretionary Earnings) and EBITDA
          </Link>.
        </p>

        <h3 className={h3Class}>When to Use SDE</h3>
        <p>
          SDE works for owner-operated businesses where the owner is the primary manager and decision-maker.
          SDE starts with net income and adds back the owner&rsquo;s total compensation (salary, health
          insurance, retirement contributions, personal vehicle, personal travel), plus interest, taxes,
          depreciation, amortization, and any non-recurring expenses. The result represents the total
          economic benefit available to a single owner-operator.
        </p>
        <p>
          Typical SDE businesses: dental practices, HVAC companies, landscaping firms, independent
          restaurants, owner-operated e-commerce stores, professional services practices with under
          $2M revenue. BizBuySell data shows that 70% of businesses listed for under $1M in revenue
          are marketed using SDE multiples.
        </p>

        <h3 className={h3Class}>When to Use EBITDA</h3>
        <p>
          EBITDA applies when a business has a management team in place and can operate without daily
          owner involvement. The buyer is purchasing a going concern, not a job. EBITDA does <em>not</em>{" "}
          add back the owner&rsquo;s salary because a replacement manager must be paid. For businesses
          with $1M+ in EBITDA and dedicated department heads, EBITDA is the standard metric.
        </p>
        <p>
          Critical adjustment: the{" "}
          <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
            adjusted EBITDA calculation
          </Link>{" "}
          normalizes for non-recurring items (one-time legal fees, COVID impacts, unusual capital
          expenditures), above-market rent paid to a related party, and personal expenses run through the
          business. The{" "}
          <a href="https://digitalcommons.pepperdine.edu/gsbm_pcm_pcmr/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            Pepperdine Private Capital Markets Report
          </a>{" "}
          emphasizes that proper normalization can shift EBITDA by 15-30% in either direction.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
          <p className="font-semibold text-blue-900 mb-2">Quick Rule of Thumb</p>
          <ul className={ulClass}>
            <li><strong>Revenue under $2M, owner is the business:</strong> Use SDE (multiples of 2.0x-4.0x)</li>
            <li><strong>Revenue $2M-$10M, some management layer:</strong> Use EBITDA (multiples of 3.5x-6.0x)</li>
            <li><strong>Revenue $10M+, full management team:</strong> Use EBITDA (multiples of 5.0x-8.0x+)</li>
          </ul>
        </div>

        {/* ─── SECTION 2: Multiples Method ─── */}
        <h2 className={h2Class}>Method 1: Earnings Multiples (Most Common)</h2>
        <p>
          The multiples method is used in 80-90% of small business transactions because it is simple,
          market-based, and easy to benchmark. The formula is straightforward:
        </p>
        <p className="font-semibold text-center text-lg my-4">
          Enterprise Value = Adjusted Earnings &times; Multiple
        </p>
        <p>
          The multiple reflects the market&rsquo;s assessment of risk, growth, and quality. Higher multiples
          signal lower risk and stronger growth. Lower multiples signal higher risk, customer concentration,
          or declining revenue.
        </p>

        <h3 className={h3Class}>EBITDA Multiples by Industry (2024-2025 Data)</h3>
        <p>
          Multiples vary significantly by sector. Based on data from{" "}
          <a href="https://www.ibba.org/resource-center/industry-research/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            IBBA Market Pulse Reports
          </a>,{" "}
          <a href="https://www.gsb.stanford.edu/faculty-research/case-studies/2024-search-fund-study" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            Stanford Search Fund data
          </a>, and{" "}
          <a href="https://www.bizbuysell.com/insight-report/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            BizBuySell transaction reports
          </a>:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">Industry</th>
                <th className="px-4 py-2 text-left font-semibold">SDE Multiple</th>
                <th className="px-4 py-2 text-left font-semibold">EBITDA Multiple</th>
                <th className="px-4 py-2 text-left font-semibold">Key Driver</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr><td className="px-4 py-2">SaaS / Software</td><td className="px-4 py-2">4.0x-6.0x</td><td className="px-4 py-2">6.0x-10.0x</td><td className="px-4 py-2">Recurring revenue, churn rate</td></tr>
              <tr><td className="px-4 py-2">Healthcare / Dental</td><td className="px-4 py-2">3.0x-5.0x</td><td className="px-4 py-2">5.0x-8.0x</td><td className="px-4 py-2">Reimbursement mix, patient count</td></tr>
              <tr><td className="px-4 py-2">Professional Services</td><td className="px-4 py-2">2.5x-4.0x</td><td className="px-4 py-2">4.0x-6.5x</td><td className="px-4 py-2">Client contracts, key-person risk</td></tr>
              <tr><td className="px-4 py-2">Home Services (HVAC, Plumbing)</td><td className="px-4 py-2">2.5x-4.0x</td><td className="px-4 py-2">4.0x-6.0x</td><td className="px-4 py-2">Service agreements, technician count</td></tr>
              <tr><td className="px-4 py-2">Manufacturing</td><td className="px-4 py-2">3.0x-4.5x</td><td className="px-4 py-2">4.5x-7.0x</td><td className="px-4 py-2">Equipment age, customer concentration</td></tr>
              <tr><td className="px-4 py-2">Distribution / Wholesale</td><td className="px-4 py-2">2.5x-3.5x</td><td className="px-4 py-2">4.0x-5.5x</td><td className="px-4 py-2">Margins, supplier relationships</td></tr>
              <tr><td className="px-4 py-2">Restaurants / Food Service</td><td className="px-4 py-2">1.5x-2.5x</td><td className="px-4 py-2">3.0x-4.5x</td><td className="px-4 py-2">Lease terms, brand, concept</td></tr>
              <tr><td className="px-4 py-2">E-commerce / DTC</td><td className="px-4 py-2">2.5x-4.0x</td><td className="px-4 py-2">4.0x-6.0x</td><td className="px-4 py-2">Brand, CAC, repeat purchase rate</td></tr>
              <tr><td className="px-4 py-2">Construction / Contracting</td><td className="px-4 py-2">2.0x-3.5x</td><td className="px-4 py-2">3.5x-5.0x</td><td className="px-4 py-2">Backlog, bonding capacity</td></tr>
              <tr><td className="px-4 py-2">Auto Repair / Automotive</td><td className="px-4 py-2">2.0x-3.0x</td><td className="px-4 py-2">3.5x-5.0x</td><td className="px-4 py-2">Bay count, fleet contracts</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          For a deeper breakdown, see our{" "}
          <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
            EBITDA multiples by industry
          </Link>{" "}
          and{" "}
          <Link href="/learn/ebitda-multiples-by-country" className="text-apple-accent hover:underline">
            EBITDA multiples by country
          </Link>{" "}
          guides, or try our{" "}
          <Link href="/tools/ebitda-multiple-estimator" className="text-apple-accent hover:underline">
            EBITDA Multiple Estimator
          </Link>{" "}
          tool.
        </p>

        <h3 className={h3Class}>What Drives a Multiple Up or Down?</h3>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> Businesses with 60%+ recurring or contracted revenue command 1.0x-2.0x higher multiples than project-based businesses</li>
          <li><strong>Customer concentration:</strong> No single customer above 15% of revenue. Top 10 customers below 50%. High concentration discounts multiples by 0.5x-1.5x</li>
          <li><strong>Revenue growth:</strong> 10%+ annual growth adds 0.5x-1.0x to the multiple. Declining revenue subtracts 1.0x-2.0x</li>
          <li><strong>Owner dependency:</strong> If the owner is the primary salesperson or technician, expect a{" "}
            <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">significant discount</Link>
          </li>
          <li><strong>Industry tailwinds:</strong> Businesses in growing sectors (healthcare IT, cybersecurity, senior care) trade at premium multiples</li>
          <li><strong>Clean financials:</strong> GAAP-compliant or reviewed financials add credibility and 0.5x to the multiple vs tax-return-only businesses</li>
          <li><strong>Transferability:</strong> Documented SOPs, trained staff, and low key-person risk increase multiples</li>
        </ul>

        {/* ─── SECTION 3: DCF ─── */}
        <h2 className={h2Class}>Method 2: Discounted Cash Flow (DCF) Analysis</h2>
        <p>
          The{" "}
          <Link href="/learn/dcf-valuation-small-business" className="text-apple-accent hover:underline">
            DCF method
          </Link>{" "}
          values a business based on the present value of its expected future cash flows. It is more
          theoretically rigorous than the multiples method but requires assumptions about growth rates,
          discount rates, and terminal values that introduce significant uncertainty.
        </p>
        <p>
          The DCF formula: <strong>PV = &sum; [FCF(t) / (1+r)^t] + Terminal Value / (1+r)^n</strong>,
          where FCF is free cash flow, r is the discount rate (typically 20-30% for small businesses
          due to illiquidity and key-person risk), and the terminal value captures value beyond the
          projection period.
        </p>

        <h3 className={h3Class}>When DCF Works Best</h3>
        <ul className={ulClass}>
          <li>Businesses with predictable, contractual cash flows (SaaS, managed services, subscription models)</li>
          <li>Growth-stage companies where current earnings understate future potential</li>
          <li>Businesses undergoing a step-change (new contract, expansion, new product line)</li>
          <li>Validating or challenging a multiples-based valuation</li>
        </ul>

        <h3 className={h3Class}>Common DCF Pitfalls in Small Business Transactions</h3>
        <ul className={ulClass}>
          <li><strong>Overly optimistic growth projections:</strong> Sellers project 20%+ growth; buyers should stress-test at 0%, 5%, and 10%</li>
          <li><strong>Insufficient discount rate:</strong> Using 10-12% (public company WACC) for a small private business drastically overstates value. The{" "}
            <a href="https://digitalcommons.pepperdine.edu/gsbm_pcm_pcmr/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              Pepperdine Private Capital Markets Report
            </a>{" "}
            shows required returns for small business acquisitions range from 20% to 35%
          </li>
          <li><strong>Ignoring capex and working capital:</strong> DCF uses <em>free</em> cash flow, not EBITDA. Deduct maintenance capex and working capital changes</li>
          <li><strong>Terminal value dominance:</strong> If terminal value exceeds 70% of total DCF value, the model is too speculative</li>
        </ul>
        <p>
          Use our{" "}
          <Link href="/tools/valuation-calculator" className="text-apple-accent hover:underline">
            Valuation Calculator
          </Link>{" "}
          to run DCF and multiples analysis side by side.
        </p>

        {/* ─── SECTION 4: Comparable Transactions ─── */}
        <h2 className={h2Class}>Method 3: Comparable Transaction Analysis</h2>
        <p>
          The{" "}
          <Link href="/learn/comparable-transactions" className="text-apple-accent hover:underline">
            comparable transactions method
          </Link>{" "}
          (or &ldquo;comps&rdquo;) derives value by examining what similar businesses have actually
          sold for. This is the most grounded method because it reflects real market prices rather than
          theoretical models.
        </p>
        <p>
          Data sources for small business comps include BizBuySell&rsquo;s transaction database
          (200,000+ completed sales), DealStats by Business Valuation Resources (BVR), the{" "}
          <a href="https://www.ibba.org/resource-center/industry-research/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            IBBA Market Pulse Report
          </a>{" "}
          (quarterly survey of M&amp;A intermediaries), and Pratt&rsquo;s Stats. For search fund-sized
          deals ($5M-$30M enterprise value), data is harder to find because private deals are rarely
          disclosed publicly.
        </p>

        <h3 className={h3Class}>How to Build a Comp Set</h3>
        <ol className={olClass}>
          <li>Identify 5-15 transactions in the same industry and revenue range</li>
          <li>Normalize for deal structure (all-cash vs earnout vs seller financing)</li>
          <li>Adjust for timing (multiples shift with market conditions; use trailing 24 months)</li>
          <li>Exclude outliers (strategic acquisitions by large corporates often pay premiums irrelevant to your deal)</li>
          <li>Calculate the interquartile range (25th to 75th percentile) as your defensible valuation band</li>
        </ol>

        {/* ─── SECTION 5: Asset-Based ─── */}
        <h2 className={h2Class}>Method 4: Asset-Based Valuation</h2>
        <p>
          The asset-based approach values a business by summing the fair market value of all assets
          minus liabilities. This method sets a valuation floor and is relevant for:
        </p>
        <ul className={ulClass}>
          <li><strong>Asset-heavy businesses:</strong> Manufacturing, construction, trucking, where equipment has significant resale value</li>
          <li><strong>Real estate holding companies:</strong> Where property value exceeds the business&rsquo;s earning power</li>
          <li><strong>Distressed businesses:</strong> Where liquidation value is the relevant benchmark</li>
          <li><strong>Break-up scenarios:</strong> When individual assets are worth more sold separately than as a going concern</li>
        </ul>
        <p>
          For most profitable operating businesses, asset-based valuation produces the lowest number.
          It serves as a sanity check: if a multiples-based valuation is below net asset value, something
          is wrong with the earnings or the asset assessment.
        </p>

        {/* ─── SECTION 6: Revenue Multiples ─── */}
        <h2 className={h2Class}>Method 5: Revenue Multiples</h2>
        <p>
          Revenue multiples are used primarily for high-growth, pre-profit, or SaaS businesses where
          EBITDA is negative or misleading. The formula is simply Enterprise Value / Revenue. Typical
          revenue multiples for profitable small businesses range from 0.5x to 2.0x, while high-growth
          SaaS companies can trade at 3.0x to 8.0x revenue.
        </p>
        <p>
          Revenue multiples are also useful for benchmarking within industries where margin structures
          are similar. For example, two HVAC companies with similar margins should have similar
          revenue multiples, making it a quick comparability check.
        </p>
        <p>
          <strong>Warning:</strong> Revenue multiples ignore profitability entirely. A $5M revenue
          business with 5% margins is fundamentally different from one with 25% margins. Always
          pair revenue multiples with earnings-based analysis.
        </p>

        {/* ─── SECTION 7: Case Studies ─── */}
        <h2 className={h2Class}>Real-World Valuation Case Studies</h2>

        <h3 className={h3Class}>Case Study 1: HVAC Company ($3.2M Revenue, $640K EBITDA)</h3>
        <p>
          A search fund entrepreneur evaluated a residential and commercial HVAC business in the
          Southeast US. Key characteristics: 22 years in operation, 3,200 residential service
          agreements generating 45% recurring revenue, 18 technicians, owner transitioning to
          part-time over 12 months. No single customer exceeded 2% of revenue.
        </p>
        <ul className={ulClass}>
          <li><strong>Multiples approach:</strong> 4.5x-5.5x EBITDA = $2.9M-$3.5M enterprise value</li>
          <li><strong>DCF approach (25% discount rate, 5% growth):</strong> $3.1M</li>
          <li><strong>Comps:</strong> Three similar HVAC deals in the region closed at 4.8x-5.2x EBITDA</li>
          <li><strong>Agreed price:</strong> $3.2M (5.0x EBITDA) with $400K seller note at 5%</li>
        </ul>

        <h3 className={h3Class}>Case Study 2: B2B Software Company ($1.8M ARR, $450K EBITDA)</h3>
        <p>
          A vertical SaaS platform serving independent pharmacies with inventory management and
          compliance tools. 180 pharmacy customers paying $800/month average, 3% monthly churn,
          35% YoY growth, 90%+ gross margins. The owner was the sole developer and product manager.
        </p>
        <ul className={ulClass}>
          <li><strong>EBITDA multiples:</strong> 6.0x-8.0x = $2.7M-$3.6M (reflects SaaS premium)</li>
          <li><strong>Revenue multiples:</strong> 2.0x-3.0x ARR = $3.6M-$5.4M (reflects growth)</li>
          <li><strong>DCF (30% discount rate, 25% growth declining to 10%):</strong> $3.9M</li>
          <li><strong>Agreed price:</strong> $3.4M (7.5x EBITDA / 1.9x ARR) with 18-month earnout tied to retention</li>
        </ul>
        <p>
          The owner dependency discount was significant. If the company had a CTO and product team,
          the multiple would likely have been 9.0x-10.0x EBITDA.
        </p>

        <h3 className={h3Class}>Case Study 3: Niche Manufacturing ($6.5M Revenue, $1.3M EBITDA)</h3>
        <p>
          A precision machining shop serving aerospace and defense customers. 40 employees, $2.5M
          in CNC equipment (replacement value $3.8M), AS9100 certification, three primary customers
          representing 65% of revenue. Owner retiring at 68, no succession plan.
        </p>
        <ul className={ulClass}>
          <li><strong>EBITDA multiples:</strong> 4.0x-5.0x = $5.2M-$6.5M (discounted for customer concentration)</li>
          <li><strong>Asset-based:</strong> $3.8M equipment + $800K inventory + $600K receivables - $1.2M debt = $4.0M</li>
          <li><strong>Comps:</strong> Two comparable precision shops sold at 4.5x and 5.1x EBITDA</li>
          <li><strong>Agreed price:</strong> $5.7M (4.4x EBITDA) structured as $4.5M cash + $1.2M earnout over 2 years contingent on customer retention</li>
        </ul>

        {/* ─── SECTION 8: Common Mistakes ─── */}
        <h2 className={h2Class}>The 7 Most Expensive Valuation Mistakes</h2>
        <ol className={olClass}>
          <li><strong>Confusing SDE and EBITDA:</strong> Applying a 5.0x EBITDA multiple to SDE overstates value by 30-50% (the owner&rsquo;s salary gap)</li>
          <li><strong>Ignoring working capital:</strong> The business needs working capital to operate. If the seller strips all cash and receivables, you need to add that requirement to the purchase price</li>
          <li><strong>Accepting seller addbacks at face value:</strong> Sellers routinely add back expenses they claim are discretionary. Verify every addback independently through{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">quality of earnings analysis</Link>
          </li>
          <li><strong>Overlooking deferred maintenance:</strong> A business showing high EBITDA because the owner delayed equipment replacement, facility repairs, or technology upgrades is borrowing from the future</li>
          <li><strong>Ignoring customer concentration risk:</strong> If one customer represents 30%+ of revenue, price as if that customer leaves. The{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence checklist</Link>{" "}
            should flag this early
          </li>
          <li><strong>Using stale comps:</strong> Transaction multiples from 2019 or 2021 (boom periods) may not reflect current market conditions. Use trailing 12-18 months</li>
          <li><strong>Anchoring to asking price:</strong> The seller&rsquo;s asking price is a marketing number, not a valuation. Start from your own independent analysis and work toward the seller, not the reverse</li>
        </ol>

        {/* ─── SECTION 9: Process ─── */}
        <h2 className={h2Class}>The Valuation Process: From First Look to Final Offer</h2>
        <ol className={olClass}>
          <li><strong>Preliminary screen (30 minutes):</strong> Review the{" "}
            <Link href="/learn/reading-a-cim" className="text-apple-accent hover:underline">CIM</Link>{" "}
            or teaser. Back-of-envelope calculation: Revenue &times; industry margin = estimated EBITDA &times; expected multiple = rough enterprise value
          </li>
          <li><strong>Initial analysis (2-4 hours):</strong> Request and analyze 3 years of tax returns and P&amp;L statements. Calculate SDE or adjusted EBITDA. Run multiples and rough DCF</li>
          <li><strong>LOI-stage valuation (1-2 days):</strong> Refine with management interviews, customer concentration analysis, and preliminary comps. Submit{" "}
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">LOI</Link>{" "}
            with price range or fixed price
          </li>
          <li><strong>Diligence validation (30-60 days):</strong> Commission{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">Quality of Earnings</Link>{" "}
            report. Verify every addback. Stress-test DCF assumptions with real customer and market data
          </li>
          <li><strong>Final price negotiation:</strong> Present valuation analysis to seller with supporting data. Negotiate based on findings, not emotions</li>
        </ol>

        {/* ─── SECTION 10: FAQ ─── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>
        <div className="space-y-6 mt-4">
          <div>
            <h3 className="font-semibold text-gray-900">How much is a small business worth on average?</h3>
            <p>According to BizBuySell, the median small business sold for approximately $350,000 in 2024. However, this average is misleading because it includes very small Main Street businesses. Businesses with $1M+ in EBITDA typically sell for $4M-$8M (4x-8x EBITDA), and the median search fund acquisition in 2024 was approximately $14M in enterprise value per the Stanford study.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">What multiple should I pay for a small business?</h3>
            <p>Multiples range from 2x SDE for simple owner-operated businesses to 8x+ EBITDA for high-quality businesses with recurring revenue and strong growth. The right multiple depends on industry, size, growth rate, customer concentration, and owner dependency. See the industry table above for specific ranges.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Is a business worth its annual revenue?</h3>
            <p>Rarely. Most profitable small businesses sell for 0.5x to 2.0x revenue. A business valued at 1x revenue implies margins of roughly 20-25% when applying standard EBITDA multiples. Very high-margin SaaS businesses can exceed 3x revenue, but low-margin businesses (distribution, construction) typically trade at 0.3x-0.7x revenue.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">How do I value a business with no profit?</h3>
            <p>For businesses with zero or negative EBITDA, consider: (1) revenue multiples if there is meaningful revenue, (2) asset-based valuation if there are valuable physical or intellectual assets, (3) DCF with a turnaround plan if you believe profitability is achievable within 12-24 months, or (4) walk away if none of these produce a compelling valuation. See our guide on{" "}
              <Link href="/learn/valuing-unprofitable-business" className="text-apple-accent hover:underline">valuing unprofitable businesses</Link>.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">What is the difference between enterprise value and equity value?</h3>
            <p>Enterprise value (EV) represents the total value of the business (debt + equity). Equity value is what the buyer actually pays the seller: EV minus debt plus excess cash. If a business is valued at $5M EV and has $1M in bank debt, the equity value (seller check) is $4M. Most valuation multiples are applied to enterprise value, not equity value.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Should I pay for a formal business valuation?</h3>
            <p>For transactions above $1M, a formal Quality of Earnings (QoE) report from an accounting firm typically costs $15,000-$50,000 and is well worth the investment. It validates the seller&rsquo;s financials, identifies hidden risks, and gives you negotiating ammunition. For smaller deals, an independent CPA review of tax returns and financials ($2,000-$5,000) provides reasonable assurance.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">How does seller financing affect valuation?</h3>
            <p>Seller financing typically allows a buyer to pay a modestly higher price (5-10% premium) because it reduces deal risk: the seller retains skin in the game and is incentivized to support the transition. A common structure is 70-80% cash at closing with 20-30% as a seller note at 5-7% interest over 3-5 years. See our guide on{" "}
              <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">seller financing structures</Link>.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">How long does it take to value a business?</h3>
            <p>A preliminary screening takes 30 minutes. A more rigorous analysis with financial normalization takes 1-2 days. A full due diligence process including QoE, legal review, and market analysis takes 30-90 days. Most search fund entrepreneurs evaluate 50-100 businesses at a surface level, 10-20 in depth, and complete full diligence on 2-5 before acquiring one.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Do business valuations change over time?</h3>
            <p>Yes. Multiples are cyclical and influenced by interest rates, credit availability, and buyer demand. In 2021 (low rates, high liquidity), median EBITDA multiples for lower middle market deals were 6.5x-7.5x. By 2024 (higher rates), they compressed to 5.0x-6.5x. Industry-specific trends, regulatory changes, and technology disruption also shift valuations over time.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Can I value a business myself or do I need an expert?</h3>
            <p>You can and should perform your own valuation analysis before engaging experts. The methods described in this guide are used by professional acquirers and investment bankers. For deals above $2M, complement your analysis with a QoE report and potentially a formal valuation from a certified business appraiser (CVA or ASA designation). For smaller deals, your own analysis plus a CPA review is sufficient.</p>
          </div>
        </div>

        {/* ─── Sources ─── */}
        <h2 className={h2Class}>Sources</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm text-apple-gray-500">
          <li>
            <a href="https://www.gsb.stanford.edu/faculty-research/case-studies/2024-search-fund-study" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              Stanford GSB - 2024 Search Fund Study
            </a>
          </li>
          <li>
            <a href="https://digitalcommons.pepperdine.edu/gsbm_pcm_pcmr/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              Pepperdine Graziadio - Private Capital Markets Report 2024
            </a>
          </li>
          <li>
            <a href="https://www.ibba.org/resource-center/industry-research/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              IBBA - Market Pulse Report (Quarterly)
            </a>
          </li>
          <li>
            <a href="https://www.bizbuysell.com/insight-report/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              BizBuySell - Insight Report 2025
            </a>
          </li>
          <li>
            <a href="https://www.hbs.edu/faculty/Pages/item.aspx?num=54260" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              Harvard Business School - Search Funds: What Has Changed and What Has Not
            </a>
          </li>
          <li>IESE Business School - International Search Fund Study 2024</li>
          <li>Business Valuation Resources (BVR) - DealStats Transaction Database</li>
        </ul>

        {/* ─── Related Reading ─── */}
        <h2 className={h2Class}>Related Reading</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><Link href="/learn/sde-vs-ebitda" className="text-apple-accent hover:underline">SDE vs EBITDA: Which Metric to Use</Link></li>
          <li><Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">How to Calculate Adjusted EBITDA</Link></li>
          <li><Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">EBITDA Multiples by Industry</Link></li>
          <li><Link href="/learn/dcf-valuation-small-business" className="text-apple-accent hover:underline">DCF Valuation for Small Businesses</Link></li>
          <li><Link href="/learn/comparable-transactions" className="text-apple-accent hover:underline">Comparable Transaction Analysis</Link></li>
          <li><Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">Quality of Earnings Reports</Link></li>
          <li><Link href="/learn/what-is-my-business-worth" className="text-apple-accent hover:underline">What Is My Business Worth?</Link></li>
          <li><Link href="/learn/business-valuation" className="text-apple-accent hover:underline">Business Valuation Fundamentals</Link></li>
        </ul>
      </div>
    </article>
  );
}
