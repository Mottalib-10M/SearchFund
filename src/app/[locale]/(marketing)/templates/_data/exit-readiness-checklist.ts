import type { TemplateMeta } from "./types";

export const exitReadinessChecklist: TemplateMeta = {
  slug: "exit-readiness-checklist",
  title: "Exit Readiness Checklist for Search Fund CEOs",
  description:
    "A comprehensive 24-month exit preparation checklist. Covers financial readiness, growth story documentation, management team preparation, data room setup, and investment banker selection.",
  phase: "exit",
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  sources: [
    {
      name: "Stanford Graduate School of Business - A Primer on Search Funds (2023)",
      url: "https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds/primer",
    },
    {
      name: "IESE Business School - International Search Fund Study (2024)",
      url: "https://www.iese.edu/faculty-research/search-funds/",
    },
    {
      name: "Harvard Business Review - Selling Your Company (2021)",
      url: "https://hbr.org/topic/mergers-and-acquisitions",
    },
    {
      name: "Axial - Exit Planning Best Practices for Lower Middle Market",
      url: "https://www.axial.net",
    },
  ],
  relatedArticles: [
    "preparing-company-exit",
    "exit-strategies",
    "dividend-recapitalization",
    "investment-banker-exit",
    "life-after-selling",
  ],
  targetQueries: [
    "exit readiness checklist business",
    "prepare company for sale checklist",
    "search fund exit preparation",
    "sell business checklist template",
    "exit planning template small business",
  ],
  content: `
<div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
  <p class="text-xs text-amber-700">
    <strong>Note:</strong> This checklist is for educational purposes. Exit planning involves complex legal, tax, and financial considerations. Work with qualified advisors throughout the process.
  </p>
</div>

<h2>Why Exit Preparation Takes 12-24 Months</h2>
<p>
  Most search fund CEOs underestimate the time and effort required to prepare a company for sale. A well-prepared exit can yield 20-40% higher valuations compared to a rushed process. Buyers pay premiums for clean financials, a strong management team, diversified revenue, and a compelling growth story.
</p>
<p>
  The Stanford Search Fund Primer reports median holding periods of 6-8 years and median returns of 3.4x for successful exits. The difference between a good exit and a great exit often comes down to preparation.
</p>

<h2>Exit Readiness Self-Assessment</h2>
<p>
  Before diving into the checklist, honestly assess where you stand. Score each area 1-5 (1 = not ready, 5 = fully prepared).
</p>

<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <table class="w-full text-left">
    <thead>
      <tr class="border-b border-gray-300">
        <th class="pb-2 pr-4">Area</th>
        <th class="pb-2 pr-4">Key Question</th>
        <th class="pb-2">Score (1-5)</th>
      </tr>
    </thead>
    <tbody class="align-top">
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Financial readiness</td>
        <td class="py-2 pr-4">Are your financials audit-quality and GAAP-compliant?</td>
        <td class="py-2">___</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Growth story</td>
        <td class="py-2 pr-4">Can you articulate a clear, data-backed growth narrative?</td>
        <td class="py-2">___</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Management team</td>
        <td class="py-2 pr-4">Could the business run for 6 months without you?</td>
        <td class="py-2">___</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Customer quality</td>
        <td class="py-2 pr-4">Is revenue diversified with strong retention rates?</td>
        <td class="py-2">___</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Legal/compliance</td>
        <td class="py-2 pr-4">Are all contracts, licenses, and IP matters clean?</td>
        <td class="py-2">___</td>
      </tr>
      <tr>
        <td class="py-2 pr-4 font-medium">Documentation</td>
        <td class="py-2 pr-4">Could you populate a data room in under two weeks?</td>
        <td class="py-2">___</td>
      </tr>
    </tbody>
  </table>
  <p class="mt-3 text-gray-600 italic">If any area scores below 3, prioritize it in your exit preparation timeline.</p>
</div>

<h2>Financial Preparation</h2>
<p>
  Financial readiness is the single biggest driver of valuation. Buyers and their advisors will scrutinize your numbers. Clean, well-organized financials signal a well-run business.
</p>

<h3>Accounting &amp; Reporting</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Ensure financial statements are GAAP-compliant (or IFRS for international businesses)</li>
    <li><input type="checkbox" disabled /> Engage an audit firm for at least the last 2-3 years of financial statements (reviewed statements at minimum)</li>
    <li><input type="checkbox" disabled /> Prepare monthly financials with consistent, timely close processes (target: close within 15 days of month-end)</li>
    <li><input type="checkbox" disabled /> Document all add-backs and adjustments clearly. Buyers will challenge aggressive add-backs</li>
    <li><input type="checkbox" disabled /> Reconcile all balance sheet accounts and clean up any stale items</li>
    <li><input type="checkbox" disabled /> Separate personal expenses and one-time items from recurring operations</li>
  </ul>
</div>

<h3>Revenue Quality</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Analyze revenue by customer, product/service line, and geography</li>
    <li><input type="checkbox" disabled /> Calculate and document customer retention/churn rates (trailing 12 and 24 months)</li>
    <li><input type="checkbox" disabled /> Identify recurring vs. non-recurring revenue. Buyers pay higher multiples for recurring revenue</li>
    <li><input type="checkbox" disabled /> Reduce customer concentration: no single customer should represent more than 15-20% of revenue</li>
    <li><input type="checkbox" disabled /> Document the sales pipeline and backlog to demonstrate forward visibility</li>
    <li><input type="checkbox" disabled /> Calculate net revenue retention (NRR) if applicable. NRR above 100% is a strong signal</li>
  </ul>
</div>

<h3>EBITDA Optimization</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Review all expenses for optimization opportunities (not cost-cutting that harms the business)</li>
    <li><input type="checkbox" disabled /> Renegotiate vendor contracts, leases, and insurance before exit (savings flow directly to EBITDA)</li>
    <li><input type="checkbox" disabled /> Ensure compensation is at market rates. Overpaying or underpaying yourself creates adjustment issues</li>
    <li><input type="checkbox" disabled /> Eliminate or document all related-party transactions</li>
    <li><input type="checkbox" disabled /> Prepare a detailed adjusted EBITDA bridge with clear documentation for each adjustment</li>
  </ul>
</div>

<h2>Growth Story Documentation</h2>
<p>
  Buyers do not just buy what the business is today. They buy what it can become. Your growth story should be concrete, data-backed, and credible.
</p>

<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Document the value creation journey: where the business was when you acquired it vs. where it is now</li>
    <li><input type="checkbox" disabled /> Prepare a revenue bridge: how much growth came from price increases, new customers, existing customer expansion, and new products/services</li>
    <li><input type="checkbox" disabled /> Quantify the total addressable market (TAM) and your current market share</li>
    <li><input type="checkbox" disabled /> Identify and document 3-5 specific growth levers the next owner can pull:
      <ul class="mt-1 ml-4 space-y-1 text-gray-600">
        <li>- Geographic expansion opportunities</li>
        <li>- New product or service lines</li>
        <li>- Pricing optimization</li>
        <li>- Sales and marketing investment</li>
        <li>- Add-on acquisition targets</li>
      </ul>
    </li>
    <li><input type="checkbox" disabled /> Build a 3-year financial projection that supports the growth story (be realistic, not aspirational)</li>
    <li><input type="checkbox" disabled /> Document competitive advantages and barriers to entry (what makes this business defensible)</li>
  </ul>
</div>

<h2>Management Team Readiness</h2>
<p>
  A strong management team that can operate independently is one of the most valuable assets in a sale. If the business depends entirely on you, it is worth less.
</p>

<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Build a leadership team that can run the business without you for 3-6 months</li>
    <li><input type="checkbox" disabled /> Ensure key roles are filled: operations, finance, sales (at minimum)</li>
    <li><input type="checkbox" disabled /> Implement retention plans for critical employees (stay bonuses, equity incentives, or transaction bonuses)</li>
    <li><input type="checkbox" disabled /> Document succession plans for all key positions</li>
    <li><input type="checkbox" disabled /> Create an org chart with clear roles, responsibilities, and reporting lines</li>
    <li><input type="checkbox" disabled /> Ensure employment agreements are current and include non-compete/non-solicit clauses where appropriate</li>
    <li><input type="checkbox" disabled /> Prepare brief bios for all senior team members (buyers will want to meet them)</li>
  </ul>
</div>

<h2>Legal &amp; Compliance Cleanup</h2>
<p>
  Legal issues discovered during buyer due diligence can delay or kill a deal. Identify and resolve them proactively.
</p>

<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Conduct a "seller's due diligence" on your own company: review everything a buyer would review</li>
    <li><input type="checkbox" disabled /> Ensure all business licenses, permits, and certifications are current</li>
    <li><input type="checkbox" disabled /> Review and organize all material contracts. Identify any change-of-control provisions that require consent</li>
    <li><input type="checkbox" disabled /> Resolve any pending or threatened litigation</li>
    <li><input type="checkbox" disabled /> Confirm intellectual property ownership (trademarks, patents, domain names, software licenses)</li>
    <li><input type="checkbox" disabled /> Ensure compliance with employment laws (employee classification, overtime, benefits)</li>
    <li><input type="checkbox" disabled /> Review environmental compliance (if applicable to your industry)</li>
    <li><input type="checkbox" disabled /> Clean up the corporate minute book and ensure all governance documents are in order</li>
    <li><input type="checkbox" disabled /> Review the capitalization table and ensure all equity ownership is clearly documented</li>
  </ul>
</div>

<h2>Operational Documentation</h2>
<p>
  Well-documented operations reduce perceived risk and make the transition easier for a buyer. This directly impacts valuation.
</p>

<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Document all key business processes (SOPs) for critical operations</li>
    <li><input type="checkbox" disabled /> Create or update an employee handbook</li>
    <li><input type="checkbox" disabled /> Document vendor relationships: who are the critical suppliers and what are the terms?</li>
    <li><input type="checkbox" disabled /> Map all technology systems: software, hardware, integrations, and license terms</li>
    <li><input type="checkbox" disabled /> Document the customer onboarding and service delivery process</li>
    <li><input type="checkbox" disabled /> Prepare a facilities overview: owned vs. leased, lease terms, condition, and capex needs</li>
  </ul>
</div>

<h2>Investment Banker Selection</h2>
<p>
  The right investment banker (or M&amp;A advisor) can significantly impact your exit outcome. For lower-middle-market businesses ($5-50M enterprise value), a specialized boutique advisor often outperforms a large bank.
</p>

<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Interview 3-5 investment bankers or M&amp;A advisors. Evaluate them on:
      <ul class="mt-1 ml-4 space-y-1 text-gray-600">
        <li>- Industry expertise and relevant transaction experience</li>
        <li>- Buyer relationships in your sector</li>
        <li>- Team quality (who will actually work on your deal?)</li>
        <li>- Process and timeline expectations</li>
        <li>- Fee structure (retainer + success fee, minimum fee, tail period)</li>
      </ul>
    </li>
    <li><input type="checkbox" disabled /> Ask for references from recent sell-side clients (call them)</li>
    <li><input type="checkbox" disabled /> Understand their valuation perspective: what multiple range do they think is achievable?</li>
    <li><input type="checkbox" disabled /> Negotiate the engagement letter carefully. Key terms to watch:
      <ul class="mt-1 ml-4 space-y-1 text-gray-600">
        <li>- Success fee percentage (typically 2-5% for deals under $50M)</li>
        <li>- Minimum fee</li>
        <li>- Exclusivity period and termination rights</li>
        <li>- Tail period (typically 12-24 months)</li>
        <li>- Expense reimbursement</li>
      </ul>
    </li>
    <li><input type="checkbox" disabled /> Align on the target buyer universe: strategic buyers, private equity, family offices, or search funds</li>
  </ul>
</div>

<h2>Data Room Preparation</h2>
<p>
  A well-organized virtual data room (VDR) signals professionalism and accelerates due diligence. Start populating it 3-6 months before going to market.
</p>

<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p class="mb-2 font-medium">Standard Data Room Structure:</p>
  <ol class="space-y-2 list-decimal list-inside">
    <li><strong>Corporate Documents</strong> - Articles of incorporation, bylaws, operating agreement, cap table, board minutes</li>
    <li><strong>Financial Information</strong> - 3 years of financial statements, tax returns, monthly reports, budget vs. actual, adjusted EBITDA schedule</li>
    <li><strong>Revenue &amp; Customers</strong> - Customer list with revenue by customer, retention data, top customer contracts, pipeline report</li>
    <li><strong>Human Resources</strong> - Org chart, employee roster, compensation details, benefits summary, employment agreements, handbook</li>
    <li><strong>Legal</strong> - Material contracts, litigation history, IP portfolio, regulatory filings, insurance policies</li>
    <li><strong>Operations</strong> - Facility information, equipment list, technology systems, vendor contracts, SOPs</li>
    <li><strong>Growth Plan</strong> - Strategic plan, market analysis, competitive landscape, financial projections</li>
    <li><strong>Real Estate</strong> - Lease agreements, property appraisals, environmental reports</li>
    <li><strong>Insurance</strong> - All current policies, claims history</li>
    <li><strong>Tax</strong> - Federal and state returns (3 years), sales tax filings, any pending audits or disputes</li>
  </ol>
</div>

<h2>24-Month Exit Countdown</h2>
<p>
  Use this timeline to pace your exit preparation. Starting early gives you time to fix issues and optimize the business before going to market.
</p>

<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <h4 class="font-medium mb-2">Months 24-18: Foundation</h4>
  <ul class="space-y-1 mb-4">
    <li><input type="checkbox" disabled /> Complete the exit readiness self-assessment above</li>
    <li><input type="checkbox" disabled /> Engage a tax advisor to plan the most tax-efficient exit structure</li>
    <li><input type="checkbox" disabled /> Begin upgrading financial reporting to audit quality</li>
    <li><input type="checkbox" disabled /> Start reducing customer concentration if above 20%</li>
    <li><input type="checkbox" disabled /> Assess management team and begin filling gaps</li>
    <li><input type="checkbox" disabled /> Address any deferred maintenance or capex needs</li>
  </ul>

  <h4 class="font-medium mb-2">Months 18-12: Optimization</h4>
  <ul class="space-y-1 mb-4">
    <li><input type="checkbox" disabled /> Implement process improvements that impact EBITDA</li>
    <li><input type="checkbox" disabled /> Renegotiate key vendor contracts and leases</li>
    <li><input type="checkbox" disabled /> Build out the management team to reduce owner dependency</li>
    <li><input type="checkbox" disabled /> Begin documenting SOPs and key processes</li>
    <li><input type="checkbox" disabled /> Resolve any pending legal or compliance issues</li>
    <li><input type="checkbox" disabled /> Consider engaging a Quality of Earnings firm proactively (sell-side QoE)</li>
    <li><input type="checkbox" disabled /> Discuss exit timeline and expectations with your board and investors</li>
  </ul>

  <h4 class="font-medium mb-2">Months 12-6: Preparation</h4>
  <ul class="space-y-1 mb-4">
    <li><input type="checkbox" disabled /> Interview and select an investment banker or M&amp;A advisor</li>
    <li><input type="checkbox" disabled /> Prepare the Confidential Information Memorandum (CIM) with your advisor</li>
    <li><input type="checkbox" disabled /> Build and populate the virtual data room</li>
    <li><input type="checkbox" disabled /> Finalize the growth story and financial projections</li>
    <li><input type="checkbox" disabled /> Implement retention agreements for key employees</li>
    <li><input type="checkbox" disabled /> Identify and brief potential buyer targets with your banker</li>
  </ul>

  <h4 class="font-medium mb-2">Months 6-3: Go to Market</h4>
  <ul class="space-y-1 mb-4">
    <li><input type="checkbox" disabled /> Launch the sale process (broad auction, targeted process, or limited outreach)</li>
    <li><input type="checkbox" disabled /> Manage initial buyer inquiries and NDAs</li>
    <li><input type="checkbox" disabled /> Conduct management presentations with qualified buyers</li>
    <li><input type="checkbox" disabled /> Receive and evaluate indications of interest (IOIs)</li>
    <li><input type="checkbox" disabled /> Select buyers to advance to the LOI stage</li>
    <li><input type="checkbox" disabled /> Maintain business performance (this is critical and harder than it sounds)</li>
  </ul>

  <h4 class="font-medium mb-2">Months 3-0: Execution</h4>
  <ul class="space-y-1">
    <li><input type="checkbox" disabled /> Negotiate and sign the LOI with the preferred buyer</li>
    <li><input type="checkbox" disabled /> Support buyer due diligence (respond to requests within 24-48 hours)</li>
    <li><input type="checkbox" disabled /> Negotiate the definitive purchase agreement</li>
    <li><input type="checkbox" disabled /> Manage the working capital adjustment and closing mechanics</li>
    <li><input type="checkbox" disabled /> Plan the employee and customer communication for closing day</li>
    <li><input type="checkbox" disabled /> Close the transaction and celebrate</li>
  </ul>
</div>

<h2>Exit Strategy Options</h2>
<p>
  Not all exits are full sales. Consider which structure best meets your goals, your investors' expectations, and the business context.
</p>

<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <table class="w-full text-left">
    <thead>
      <tr class="border-b border-gray-300">
        <th class="pb-2 pr-4">Exit Type</th>
        <th class="pb-2 pr-4">Best For</th>
        <th class="pb-2">Considerations</th>
      </tr>
    </thead>
    <tbody class="align-top">
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Full sale to strategic buyer</td>
        <td class="py-2 pr-4">Maximum valuation, synergy-driven premium</td>
        <td class="py-2">Longest process, highest multiples, full exit</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Sale to private equity</td>
        <td class="py-2 pr-4">Partial liquidity, continued involvement</td>
        <td class="py-2">Rollover equity typical, alignment on growth plan needed</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Sale to another search fund / independent sponsor</td>
        <td class="py-2 pr-4">Clean exit, mission alignment</td>
        <td class="py-2">Lower multiples, faster process, cultural fit</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Dividend recapitalization</td>
        <td class="py-2 pr-4">Partial liquidity while retaining ownership</td>
        <td class="py-2">Leverage-dependent, retains upside, returns capital to investors</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Management buyout (MBO)</td>
        <td class="py-2 pr-4">Transition to existing team</td>
        <td class="py-2">Financing can be challenging, seller note often required</td>
      </tr>
      <tr>
        <td class="py-2 pr-4 font-medium">ESOP</td>
        <td class="py-2 pr-4">Tax advantages, employee ownership</td>
        <td class="py-2">Complex setup, works best for companies with $3M+ EBITDA</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Key Metrics Buyers Evaluate</h2>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><strong>Revenue growth rate</strong> - Consistent, organic growth (10-20%+ for premium multiples)</li>
    <li><strong>EBITDA and EBITDA margin</strong> - Margins trending up signal operational excellence</li>
    <li><strong>Customer retention / churn</strong> - High retention = predictable revenue</li>
    <li><strong>Customer concentration</strong> - No single customer above 15-20% of revenue</li>
    <li><strong>Revenue quality</strong> - Recurring > repeat > project-based</li>
    <li><strong>Management depth</strong> - Business runs without the owner</li>
    <li><strong>Capital efficiency</strong> - Low capex requirements, strong free cash flow conversion</li>
    <li><strong>Market position</strong> - Defensible niche, competitive advantages</li>
  </ul>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-10">
  <p class="text-xs text-amber-700">
    <strong>Note:</strong> This checklist is for educational purposes. Exit planning involves complex legal, tax, and financial considerations. Work with qualified M&amp;A advisors, tax professionals, and legal counsel throughout the process.
  </p>
</div>
`,
};
