import type { TemplateMeta } from "./types";

export const dueDiligenceChecklist: TemplateMeta = {
  slug: "due-diligence-checklist",
  title: "Due Diligence Checklist for Small Business Acquisitions",
  description:
    "A thorough due diligence checklist across 8 dimensions - financial, legal, tax, commercial, operational, HR, IT, and ESG - tailored for search fund and SME acquisitions.",
  phase: "acquire",
  datePublished: "2025-03-15",
  dateModified: "2025-06-10",
  sources: [
    {
      name: "Stanford Graduate School of Business - A Primer on Search Funds (2023)",
      url: "https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds/primer",
    },
    {
      name: "AICPA - Quality of Earnings Guidance",
      url: "https://www.aicpa.org",
    },
    {
      name: "Harvard Business Review - Guide to Buying a Small Business (2017)",
      url: "https://hbr.org/product/hbr-guide-to-buying-a-small-business/10103-PBK-ENG",
    },
    {
      name: "Searchfunder.com - Due Diligence Best Practices",
      url: "https://searchfunder.com",
    },
  ],
  relatedArticles: [
    "due-diligence-checklist",
    "financial-due-diligence",
    "quality-of-earnings",
    "dd-red-flags",
    "working-capital-adjustments",
  ],
  targetQueries: [
    "due diligence checklist small business acquisition",
    "DD checklist search fund",
    "acquisition due diligence template",
    "SME due diligence checklist",
  ],
  content: `
<div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
  <p class="text-xs text-amber-700">
    <strong>Disclaimer:</strong> Educational purposes only. Not professional advice. Engage qualified advisors for your specific transaction.
  </p>
</div>

<h2>How to Use This Checklist</h2>
<p>
  This due diligence checklist covers 8 key dimensions that a search fund entrepreneur or SME acquirer should
  investigate before closing an acquisition. Not every item will apply to every deal - adapt the checklist to your
  target company's industry, size, and jurisdiction.
</p>
<p>
  For each dimension, we provide the key questions to ask, the documents to request, and common red flags to
  watch for. Prioritize items based on materiality: a $2M EBITDA services company will have different risk areas
  than a $5M EBITDA manufacturing business.
</p>
<p>
  <strong>Pro tip:</strong> Set up a virtual data room (VDR) early and organize documents by these categories.
  Most deals require 4-8 weeks of diligence. Start with financial DD and the Quality of Earnings analysis, as
  these drive the most deal-critical insights.
</p>

<h2>1. Financial Due Diligence</h2>
<p>
  Financial DD is the foundation of any acquisition. It validates the earnings, cash flow, and balance sheet
  that underpin your valuation.
</p>

<h3>Documents to Request</h3>
<ul>
  <li>Audited or reviewed financial statements (3-5 years)</li>
  <li>Monthly P&amp;L, balance sheet, and cash flow statements (trailing 24 months)</li>
  <li>Tax returns (3-5 years, all entities)</li>
  <li>General ledger and chart of accounts</li>
  <li>Accounts receivable aging report (current + trailing 12 months)</li>
  <li>Accounts payable aging report</li>
  <li>Inventory listing and valuation methodology</li>
  <li>Capital expenditure schedule (historical and planned)</li>
  <li>Debt schedule - all outstanding loans, lines of credit, and leases</li>
  <li>Revenue by customer, product/service, and geography (trailing 3 years)</li>
</ul>

<h3>Key Questions</h3>
<ul>
  <li>What is the normalized EBITDA after adjusting for owner compensation, one-time items, and related-party transactions?</li>
  <li>Is revenue recurring, contractual, or project-based? What is the customer concentration risk?</li>
  <li>Are there any off-balance-sheet liabilities (operating leases, guarantees, pending claims)?</li>
  <li>What is the historical working capital cycle? Are there seasonal patterns?</li>
  <li>Has a Quality of Earnings (QoE) analysis been performed? (If not, commission one.)</li>
  <li>Are there any deferred revenue or prepaid expense items that distort cash flow?</li>
  <li>What is the normalized level of capital expenditure required to maintain the business?</li>
</ul>

<h3>Red Flags</h3>
<ul>
  <li>Revenue concentrated in fewer than 3 customers (>30% of revenue from a single customer)</li>
  <li>Significant discrepancies between tax returns and financial statements</li>
  <li>Declining margins without clear explanation</li>
  <li>Large or growing aged receivables (>90 days)</li>
  <li>Frequent changes in accounting policies or methods</li>
  <li>Owner perks and personal expenses run through the business that are hard to verify</li>
</ul>

<h2>2. Legal Due Diligence</h2>
<p>
  Legal DD identifies liabilities, contractual risks, and structural issues that could affect the
  transaction or create post-closing exposure.
</p>

<h3>Documents to Request</h3>
<ul>
  <li>Corporate formation documents (articles of incorporation, bylaws, operating agreement)</li>
  <li>Shareholder/member agreements and cap table</li>
  <li>All material contracts (customer, vendor, partnership agreements)</li>
  <li>Lease agreements (real estate, equipment)</li>
  <li>Pending or threatened litigation, arbitration, or regulatory proceedings</li>
  <li>Intellectual property registrations (patents, trademarks, copyrights)</li>
  <li>Licensing agreements (inbound and outbound)</li>
  <li>Insurance policies (general liability, D&amp;O, key-man, property)</li>
  <li>Regulatory permits and licenses</li>
  <li>Consent and change-of-control provisions in material contracts</li>
</ul>

<h3>Key Questions</h3>
<ul>
  <li>Are there any change-of-control provisions in key contracts that could be triggered by the acquisition?</li>
  <li>Is the company in good standing in all jurisdictions where it operates?</li>
  <li>Are there any non-compete or non-solicitation agreements with key employees?</li>
  <li>Is the company's IP properly assigned and protected?</li>
  <li>Are there any outstanding or threatened claims, lawsuits, or regulatory actions?</li>
  <li>Do any contracts contain most-favored-nation (MFN) clauses or exclusivity provisions?</li>
</ul>

<h3>Red Flags</h3>
<ul>
  <li>Key customer contracts with 30-day termination clauses</li>
  <li>Unregistered or disputed intellectual property</li>
  <li>Ongoing or recently settled litigation</li>
  <li>Missing or unsigned contracts for major relationships</li>
  <li>Non-compete agreements that could restrict the business post-acquisition</li>
</ul>

<h2>3. Tax Due Diligence</h2>
<p>
  Tax DD ensures there are no hidden liabilities and helps structure the deal tax-efficiently.
</p>

<h3>Documents to Request</h3>
<ul>
  <li>Federal, state, and local tax returns (3-5 years)</li>
  <li>Sales and use tax filings and nexus analysis</li>
  <li>Payroll tax filings (940, 941 in the US)</li>
  <li>Any IRS or tax authority correspondence, audits, or notices</li>
  <li>Transfer pricing documentation (if applicable)</li>
  <li>R&amp;D tax credit documentation</li>
  <li>Property tax assessments</li>
</ul>

<h3>Key Questions</h3>
<ul>
  <li>Has the company been audited by any tax authority in the past 5 years?</li>
  <li>Are there any outstanding tax liabilities or payment plans?</li>
  <li>Does the company have proper sales tax nexus compliance in all states where it operates?</li>
  <li>What is the optimal deal structure from a tax perspective (asset vs. equity purchase)?</li>
  <li>Are there any tax attributes (NOLs, credits) that could be affected by the change in ownership?</li>
  <li>In the UK: Is there potential exposure under IR35 for contractor relationships?</li>
  <li>In France/Germany: Are social security contributions properly calculated and paid?</li>
</ul>

<h3>Red Flags</h3>
<ul>
  <li>Unfiled returns or missing tax documentation</li>
  <li>Aggressive tax positions or questionable deductions</li>
  <li>Multi-state operations without proper nexus analysis</li>
  <li>1099 contractor misclassification risk</li>
</ul>

<h2>4. Commercial Due Diligence</h2>
<p>
  Commercial DD validates the market opportunity, competitive position, and growth prospects
  that underpin your investment thesis.
</p>

<h3>Documents to Request</h3>
<ul>
  <li>Customer list with revenue, tenure, and contract terms</li>
  <li>Sales pipeline and backlog reports</li>
  <li>Marketing materials and brand assets</li>
  <li>Competitor analysis (internal assessments)</li>
  <li>Pricing history and discount schedules</li>
  <li>Customer satisfaction surveys or NPS data</li>
  <li>Sales team compensation plans and performance data</li>
</ul>

<h3>Key Questions</h3>
<ul>
  <li>What is the customer retention rate over the past 3-5 years?</li>
  <li>How does the company win new business? (inbound vs. outbound, referrals vs. marketing)</li>
  <li>What is the competitive environment and the company's sustainable differentiation?</li>
  <li>Are there obvious expansion opportunities (new geographies, products, adjacencies)?</li>
  <li>What would happen to revenue if the owner/founder left?</li>
  <li>Conduct reference calls with 5-10 key customers (with seller permission)</li>
</ul>

<h3>Red Flags</h3>
<ul>
  <li>High customer churn or declining win rates</li>
  <li>Revenue heavily tied to the owner's personal relationships</li>
  <li>Pricing pressure from larger competitors or commoditization trends</li>
  <li>Declining total addressable market (TAM)</li>
</ul>

<h2>5. Operational Due Diligence</h2>
<p>
  Operational DD examines the processes, infrastructure, and assets that deliver the company's
  products or services.
</p>

<h3>Documents to Request</h3>
<ul>
  <li>Organizational chart and headcount by function</li>
  <li>Key vendor and supplier contracts</li>
  <li>Facility layouts, lease terms, and condition reports</li>
  <li>Equipment list with age, condition, and maintenance schedules</li>
  <li>Quality management documentation (ISO certifications, SOPs)</li>
  <li>Supply chain overview and single-source dependencies</li>
  <li>Business continuity and disaster recovery plans</li>
</ul>

<h3>Key Questions</h3>
<ul>
  <li>Are there key-person dependencies in operations? What happens if the plant manager or lead technician leaves?</li>
  <li>Are there deferred maintenance or capital expenditure needs?</li>
  <li>How reliant is the business on a single vendor or supplier?</li>
  <li>Are facilities leased or owned? What are the lease renewal terms and timing?</li>
  <li>Are there any environmental liabilities associated with the facilities?</li>
  <li>What is the capacity utilization? Is there room to grow without significant capex?</li>
</ul>

<h3>Red Flags</h3>
<ul>
  <li>Single-source suppliers with no backup</li>
  <li>Aging equipment requiring near-term replacement</li>
  <li>Facility leases expiring within 12 months of closing</li>
  <li>No documented processes - everything lives in people's heads</li>
</ul>

<h2>6. Human Resources Due Diligence</h2>
<p>
  People are the most important asset in most SME acquisitions. HR DD ensures you understand
  the team, their terms, and the culture.
</p>

<h3>Documents to Request</h3>
<ul>
  <li>Employee roster with roles, tenure, compensation, and bonus structures</li>
  <li>Employment agreements (especially for key employees)</li>
  <li>Non-compete and non-solicitation agreements</li>
  <li>Employee handbook and HR policies</li>
  <li>Benefit plans (health, retirement, equity/profit-sharing)</li>
  <li>Workers' compensation claims history</li>
  <li>EEOC complaints or employment-related litigation</li>
  <li>Turnover data (trailing 3 years)</li>
</ul>

<h3>Key Questions</h3>
<ul>
  <li>Which employees are critical to operations and customer relationships?</li>
  <li>What is the total fully-loaded cost of the workforce (salary + benefits + taxes)?</li>
  <li>Are there any pending or threatened employment claims?</li>
  <li>What is employee turnover, and what are the reasons for recent departures?</li>
  <li>Are compensation levels competitive with the local market?</li>
  <li>How will key employees react to the ownership change? (Plan retention conversations.)</li>
  <li>Are any employees approaching retirement who hold critical knowledge?</li>
</ul>

<h3>Red Flags</h3>
<ul>
  <li>High turnover in key positions</li>
  <li>Underfunded retirement or benefit obligations</li>
  <li>Key employees without non-competes who could leave and compete</li>
  <li>Misclassified independent contractors</li>
  <li>No formal HR policies or documentation</li>
</ul>

<h2>7. IT &amp; Technology Due Diligence</h2>
<p>
  Even in traditional industries, technology infrastructure increasingly drives operational
  efficiency and competitive advantage.
</p>

<h3>Documents to Request</h3>
<ul>
  <li>IT systems inventory (ERP, CRM, accounting software, custom applications)</li>
  <li>Software licensing agreements and subscription costs</li>
  <li>Network architecture and infrastructure documentation</li>
  <li>Cybersecurity policies and incident history</li>
  <li>Data backup and disaster recovery procedures</li>
  <li>Website and domain ownership documentation</li>
  <li>Source code ownership and developer agreements (if proprietary software)</li>
</ul>

<h3>Key Questions</h3>
<ul>
  <li>What is the annual IT spend (hardware, software, support)?</li>
  <li>Are systems current and supported, or are there end-of-life components?</li>
  <li>Has the company experienced any data breaches or cybersecurity incidents?</li>
  <li>Is the company compliant with relevant data protection regulations (GDPR, CCPA)?</li>
  <li>Are there any proprietary systems that are poorly documented or reliant on a single developer?</li>
  <li>What is the tech debt situation? Are there known issues being deferred?</li>
</ul>

<h3>Red Flags</h3>
<ul>
  <li>Critical systems running on unsupported or end-of-life software</li>
  <li>No cybersecurity policies or incident response plan</li>
  <li>Proprietary code written by a single developer with no documentation</li>
  <li>Non-compliant data handling (especially in regulated industries or EU operations)</li>
</ul>

<h2>8. ESG &amp; Sustainability Due Diligence</h2>
<p>
  Increasingly relevant for all sizes of acquisition, ESG DD identifies environmental liabilities,
  social risks, and governance gaps.
</p>

<h3>Documents to Request</h3>
<ul>
  <li>Environmental compliance records and permits</li>
  <li>Phase I/II environmental site assessments (if real estate is involved)</li>
  <li>Health and safety records (OSHA logs in the US, HSE in the UK)</li>
  <li>Sustainability reporting or ESG disclosures (if any)</li>
  <li>Board meeting minutes and governance documentation</li>
  <li>Related-party transaction disclosure</li>
  <li>Anti-bribery and anti-corruption policies</li>
</ul>

<h3>Key Questions</h3>
<ul>
  <li>Are there any known or potential environmental contamination issues?</li>
  <li>Has the company received any environmental violations or fines?</li>
  <li>What is the workplace safety record? Any serious incidents in the past 5 years?</li>
  <li>Are there related-party transactions that should be eliminated post-acquisition?</li>
  <li>For EU acquisitions: Is the company subject to the EU Corporate Sustainability Reporting Directive?</li>
  <li>Does the company have exposure to climate-related risks (supply chain, physical assets)?</li>
</ul>

<h3>Red Flags</h3>
<ul>
  <li>History of environmental violations or unresolved contamination</li>
  <li>Poor safety record or pending OSHA/HSE investigations</li>
  <li>Related-party transactions that benefit the owner at the company's expense</li>
  <li>No governance documentation (minutes, resolutions)</li>
</ul>

<h2>Due Diligence Timeline</h2>
<p>
  A typical DD process for a $1-10M EBITDA acquisition takes 4-8 weeks. Here is a recommended sequencing:
</p>
<ul>
  <li><strong>Week 1-2:</strong> Financial DD and QoE engagement. Begin legal document review. Set up VDR.</li>
  <li><strong>Week 2-3:</strong> Tax DD. Commercial DD (customer calls). HR review.</li>
  <li><strong>Week 3-4:</strong> Operational site visits. IT assessment. Environmental review.</li>
  <li><strong>Week 4-6:</strong> QoE report delivery. Working capital analysis. Final legal review.</li>
  <li><strong>Week 5-8:</strong> Resolve open issues. Negotiate purchase agreement adjustments. Pre-closing preparations.</li>
</ul>

<div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-10">
  <p class="text-xs text-amber-700">
    <strong>Disclaimer:</strong> Educational purposes only. Not professional advice. Engage qualified advisors for your specific transaction.
  </p>
</div>
`,
};
