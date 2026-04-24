import type { TemplateMeta } from "./types";

export const ppmSearchFund: TemplateMeta = {
  slug: "ppm-search-fund",
  title: "Private Placement Memorandum (PPM) Template for Search Funds",
  description:
    "A section-by-section PPM template for traditional search fund fundraising. Covers executive summary, searcher background, investment thesis, economics, risk factors, and subscription terms.",
  phase: "fundraise",
  datePublished: "2025-03-15",
  dateModified: "2025-06-10",
  sources: [
    {
      name: "Stanford Graduate School of Business — A Primer on Search Funds (2023)",
      url: "https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds/primer",
    },
    {
      name: "IESE Business School — International Search Fund Study (2023)",
      url: "https://www.iese.edu/entrepreneurship/search-funds/",
    },
    {
      name: "Searchfunder.com — PPM and Fundraising Resources",
      url: "https://searchfunder.com",
    },
    {
      name: "SEC — Regulation D: Rules 504, 506(b), 506(c)",
      url: "https://www.sec.gov/education/smallbusiness/exemptofferings/regD",
    },
  ],
  relatedArticles: [
    "writing-a-ppm",
    "finding-investors",
    "cap-tables-equity",
    "search-fund-legal-structure",
    "search-fund-term-sheet",
  ],
  targetQueries: [
    "PPM template search fund",
    "private placement memorandum template",
    "search fund PPM",
    "search fund fundraising document",
  ],
  content: `
<div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
  <p class="text-sm text-amber-800 font-medium">Legal Disclaimer</p>
  <p class="text-sm text-amber-700 mt-1">
    This template is provided for <strong>educational purposes only</strong> and does not constitute legal,
    financial, or investment advice. A Private Placement Memorandum is a securities offering document that
    must comply with applicable securities laws (SEC Regulation D in the US, prospectus regulations in the EU,
    FCA rules in the UK). You <strong>must</strong> engage qualified securities counsel before preparing or
    distributing a PPM. SearchFundMarket accepts no liability for reliance on this template.
  </p>
</div>

<h2>What Is a PPM?</h2>
<p>
  A Private Placement Memorandum (PPM) is the primary fundraising document used by search fund entrepreneurs
  to raise capital from institutional and individual investors. It describes the searcher, the investment
  opportunity, the economics, and the risk factors associated with investing in a search fund.
</p>
<p>
  In the traditional search fund model, the PPM is used to raise "search capital" — typically $400K–$600K —
  from 10–20 investors who each contribute $30K–$50K in exchange for the right (but not the obligation) to
  invest in the eventual acquisition. According to the 2023 Stanford Search Fund Primer, the median search
  fund raises approximately $475K in search capital from 14 investors.
</p>
<p>
  The PPM serves multiple purposes: it is a legal disclosure document (protecting both the searcher and
  investors), a marketing tool (convincing investors of your credibility), and a reference document
  (governing the relationship throughout the search).
</p>

<h2>Template: PPM Sections</h2>
<p class="text-sm italic text-gray-500 mb-4">
  The following outlines the standard sections of a search fund PPM. Bracketed items [like this] should be
  customized for your specific fund. This template follows the structure commonly used in US-based traditional
  search funds and should be adapted for other jurisdictions.
</p>

<h3>I. Executive Summary</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p><strong>Fund Name:</strong> [Search Fund Name] LLC</p>
  <p><strong>Searcher(s):</strong> [Searcher Name(s)]</p>
  <p><strong>Search Capital Raise:</strong> $[Amount] (target), raised in units of $[Amount] per unit</p>
  <p><strong>Number of Investors:</strong> [10–20] (target)</p>
  <p><strong>Search Period:</strong> [18–24] months</p>
  <p><strong>Target Acquisition Profile:</strong></p>
  <ul class="mt-1 space-y-1">
    <li>Revenue: $[X]M – $[Y]M</li>
    <li>EBITDA: $[X]M – $[Y]M</li>
    <li>Industries: [Target industries]</li>
    <li>Geography: [Target geographies]</li>
    <li>Business type: [B2B/B2C, services/manufacturing, etc.]</li>
  </ul>
  <p class="mt-2"><strong>Legal Structure:</strong> [LLC / LP] organized under the laws of [State]</p>
  <p><strong>Securities Exemption:</strong> Regulation D, Rule 506(b) [or 506(c)]</p>
</div>
<p>
  <strong>Guidance:</strong> The executive summary should be concise (1–2 pages) and give investors
  a clear picture of who you are, what you are looking for, and how their capital will be used.
  Lead with your strongest credentials and differentiation.
</p>

<h3>II. Searcher Background &amp; Qualifications</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p><strong>Professional Background</strong></p>
  <p>
    [Provide a detailed professional biography including education, relevant work experience,
    skills that are directly applicable to operating a small business, and any prior entrepreneurial
    or M&amp;A experience. Include specific accomplishments with quantifiable results.]
  </p>
  <p class="mt-3"><strong>Why ETA</strong></p>
  <p>
    [Explain your motivation for pursuing Entrepreneurship Through Acquisition. What led you to
    this path? Why are you the right person to find, acquire, and operate a small business?]
  </p>
  <p class="mt-3"><strong>Relevant Skills</strong></p>
  <ul class="mt-1 space-y-1">
    <li>[Skill 1 with specific examples — e.g., "P&amp;L management for a $10M business unit at [Company]"]</li>
    <li>[Skill 2 — e.g., "M&amp;A transaction experience — evaluated 30+ targets at [PE firm]"]</li>
    <li>[Skill 3 — e.g., "Industry expertise in [sector] from [X] years of experience"]</li>
    <li>[Skill 4 — e.g., "Operational improvement — implemented [system] reducing costs by X%"]</li>
  </ul>
  <p class="mt-3"><strong>References</strong></p>
  <p>[List 2–3 professional references available upon request]</p>
</div>
<p>
  <strong>Guidance:</strong> This is the most important section for investors. Search fund investing
  is a bet on the jockey, not the horse (since the company hasn't been identified yet). Be specific
  about accomplishments. Avoid generic statements. According to the Stanford Primer, the most
  successful searchers tend to have 2–10 years of professional experience, often in consulting,
  private equity, or operational roles.
</p>

<h3>III. Investment Thesis &amp; Search Strategy</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p><strong>Acquisition Criteria</strong></p>
  <ul class="mt-1 space-y-1">
    <li><strong>EBITDA:</strong> $[1–5]M (target range)</li>
    <li><strong>Revenue:</strong> $[3–20]M (target range)</li>
    <li><strong>Industries:</strong> [List target industries with rationale]</li>
    <li><strong>Geography:</strong> [List target markets]</li>
    <li><strong>Business characteristics:</strong> Recurring/contractual revenue, low customer concentration,
        defensible market position, fragmented industry with buy-and-build potential</li>
    <li><strong>Excluded:</strong> [List industries or characteristics you will not pursue]</li>
  </ul>
  <p class="mt-3"><strong>Search Strategy</strong></p>
  <p>
    [Describe your approach to finding acquisition targets: proprietary sourcing (direct outreach to
    business owners), broker relationships, industry networks, geographic focus. Be specific about
    your plan — investors want to see a systematic approach, not just "I'll look for good companies."]
  </p>
  <p class="mt-3"><strong>Value Creation Plan</strong></p>
  <p>
    [Describe the types of improvements you plan to make post-acquisition: operational efficiency,
    digital transformation, sales process optimization, add-on acquisitions, geographic expansion.
    Ground this in your specific skills and experience.]
  </p>
</div>
<p>
  <strong>Guidance:</strong> Be specific but not so narrow that you have a tiny target universe.
  Most successful search funds target businesses with $1–5M EBITDA in fragmented industries with
  high barriers to entry. Your search strategy should demonstrate that you have thought carefully
  about how you will actually find and evaluate deals.
</p>

<h3>IV. Use of Search Capital</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>Search capital of $[Amount] will be allocated approximately as follows:</p>
  <table class="w-full mt-2 text-sm">
    <thead>
      <tr class="border-b border-gray-200">
        <th class="text-left py-2">Category</th>
        <th class="text-right py-2">Amount</th>
        <th class="text-right py-2">% of Total</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-100">
        <td class="py-2">Searcher salary &amp; benefits</td>
        <td class="text-right">$[Amount]</td>
        <td class="text-right">[X]%</td>
      </tr>
      <tr class="border-b border-gray-100">
        <td class="py-2">Travel &amp; deal sourcing expenses</td>
        <td class="text-right">$[Amount]</td>
        <td class="text-right">[X]%</td>
      </tr>
      <tr class="border-b border-gray-100">
        <td class="py-2">Legal &amp; accounting fees</td>
        <td class="text-right">$[Amount]</td>
        <td class="text-right">[X]%</td>
      </tr>
      <tr class="border-b border-gray-100">
        <td class="py-2">Office, technology &amp; overhead</td>
        <td class="text-right">$[Amount]</td>
        <td class="text-right">[X]%</td>
      </tr>
      <tr class="border-b border-gray-100">
        <td class="py-2">Due diligence costs (QoE, environmental, etc.)</td>
        <td class="text-right">$[Amount]</td>
        <td class="text-right">[X]%</td>
      </tr>
      <tr class="font-medium">
        <td class="py-2">Contingency reserve</td>
        <td class="text-right">$[Amount]</td>
        <td class="text-right">[X]%</td>
      </tr>
    </tbody>
  </table>
  <p class="mt-3">
    The Searcher's annual salary during the search phase will be $[Amount], which is below market
    rate for comparable roles, reflecting the Searcher's commitment and alignment of interests.
  </p>
</div>

<h3>V. Economics &amp; Investor Returns</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p><strong>Search Capital Conversion</strong></p>
  <p>
    Each unit of search capital ($[Amount]) entitles the investor to a pro-rata right (but not
    obligation) to invest in the acquisition. Search capital converts into equity in the
    acquisition vehicle at a [1.5x] step-up — meaning each $1 of search capital converts as
    if it were $[1.50] of acquisition equity.
  </p>

  <p class="mt-3"><strong>Acquisition Capital Structure (Illustrative)</strong></p>
  <ul class="mt-1 space-y-1">
    <li>Total enterprise value: $[Amount] ([X.X]x EBITDA)</li>
    <li>Senior debt: $[Amount] ([X]% of TEV)</li>
    <li>Seller note: $[Amount] ([X]% of TEV)</li>
    <li>Equity: $[Amount] ([X]% of TEV)</li>
  </ul>

  <p class="mt-3"><strong>Searcher Equity</strong></p>
  <p>
    The Searcher will receive [20–30]% of the common equity, vesting over [4–5] years, structured
    in [2–3] tranches:
  </p>
  <ul class="mt-1 space-y-1">
    <li>Tranche 1 ([X]%): Vests upon closing of the acquisition</li>
    <li>Tranche 2 ([X]%): Vests over [3–4] years based on continued service</li>
    <li>Tranche 3 ([X]%, if applicable): Vests upon achieving performance targets (e.g., [X]x MOIC)</li>
  </ul>

  <p class="mt-3"><strong>Distribution Waterfall</strong></p>
  <ol class="mt-1 space-y-1">
    <li>1. Return of invested capital to all investors (search + acquisition capital)</li>
    <li>2. Preferred return of [X]% IRR to investors</li>
    <li>3. Remaining proceeds distributed pro-rata between investors and searcher per equity ownership</li>
  </ol>
</div>
<p>
  <strong>Guidance:</strong> Economics are one of the most scrutinized sections. The standard structure
  per the Stanford Primer is: 20–30% common equity to the searcher, 1.5x step-up on search capital,
  and a preferred return (typically 8%) to investors before the searcher participates in distributions.
  Use the Cap Table Simulator tool to model different scenarios.
</p>

<h3>VI. Governance &amp; Investor Rights</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p><strong>Board Composition</strong></p>
  <p>
    The acquisition entity will be governed by a Board of Directors consisting of [3–5] members:
    [1] Searcher/CEO, [1–2] investor representatives, and [1] independent director.
  </p>

  <p class="mt-3"><strong>Investor Protections</strong></p>
  <ul class="mt-1 space-y-1">
    <li>Quarterly financial reporting (P&amp;L, balance sheet, cash flow)</li>
    <li>Annual audited financial statements</li>
    <li>Board approval required for: capital expenditures above $[Amount], new debt, acquisitions,
        changes to searcher compensation, related-party transactions</li>
    <li>Tag-along and drag-along rights</li>
    <li>Anti-dilution protections</li>
    <li>Information rights and facility access</li>
  </ul>

  <p class="mt-3"><strong>Searcher Removal</strong></p>
  <p>
    The Board may remove the Searcher/CEO by [majority/supermajority] vote. Upon removal
    without cause, unvested equity shall be forfeited. Vested equity shall be subject to a
    [call option / buyback right] at fair market value.
  </p>
</div>

<h3>VII. Risk Factors</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>An investment in [Search Fund Name] involves significant risks, including but not limited to:</p>
  <ul class="mt-2 space-y-2">
    <li>
      <strong>No identified acquisition target.</strong> At the time of this offering, no specific
      acquisition target has been identified. There is no guarantee that a suitable acquisition will
      be found during the search period.
    </li>
    <li>
      <strong>Loss of search capital.</strong> If no acquisition is completed, investors will lose
      their entire search capital investment. Based on the 2023 Stanford Primer, approximately 27%
      of search funds do not complete an acquisition.
    </li>
    <li>
      <strong>Reliance on the Searcher.</strong> The success of the fund depends almost entirely on
      the abilities, judgment, and continued involvement of the Searcher.
    </li>
    <li>
      <strong>Small business risks.</strong> Acquired companies are likely to be small, with limited
      management depth, customer concentration, and sensitivity to economic cycles.
    </li>
    <li>
      <strong>Leverage risk.</strong> The acquisition will likely be partially debt-financed, increasing
      the risk of financial distress in adverse scenarios.
    </li>
    <li>
      <strong>Illiquidity.</strong> There is no public market for the securities offered. Investors
      should expect to hold their investment for 5–7 years or longer.
    </li>
    <li>
      <strong>Conflicts of interest.</strong> The Searcher serves in multiple capacities (manager,
      equity holder) which may create conflicts with investor interests.
    </li>
    <li>
      <strong>Regulatory risk.</strong> Changes in tax law, employment law, or industry regulation
      could materially affect the acquired business.
    </li>
  </ul>
</div>
<p>
  <strong>Guidance:</strong> The risk factors section is legally critical. It protects both the
  searcher and investors by ensuring full disclosure. Do not minimize risks — sophisticated investors
  expect and respect thorough risk disclosure. Your securities attorney will help tailor this section.
</p>

<h3>VIII. Subscription Terms</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p><strong>Offering Details</strong></p>
  <ul class="mt-1 space-y-1">
    <li><strong>Securities offered:</strong> [LLC membership interests / LP interests]</li>
    <li><strong>Minimum investment:</strong> $[Amount] per unit</li>
    <li><strong>Maximum units per investor:</strong> [X] units (to ensure diversified investor base)</li>
    <li><strong>Accredited investors only:</strong> This offering is limited to accredited investors
        as defined under SEC Rule 501 of Regulation D</li>
    <li><strong>Subscription deadline:</strong> [Date]</li>
  </ul>

  <p class="mt-3"><strong>Subscription Process</strong></p>
  <ol class="mt-1 space-y-1">
    <li>1. Review this PPM and all accompanying documents</li>
    <li>2. Complete the Subscription Agreement and Accredited Investor Questionnaire</li>
    <li>3. Wire funds to: [Escrow account details — to be provided by counsel]</li>
    <li>4. Receive countersigned agreement and unit certificate</li>
  </ol>

  <p class="mt-3"><strong>Withdrawal &amp; Termination</strong></p>
  <p>
    If the minimum raise of $[Amount] is not achieved by [Date], all subscription funds will be
    returned to investors without interest. The Searcher reserves the right to accept or reject
    any subscription in whole or in part.
  </p>
</div>

<h3>IX. Legal Disclosures</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li>
      <strong>Securities Law Compliance:</strong> This offering is made pursuant to an exemption from
      registration under the Securities Act of 1933, as amended, specifically Regulation D, Rule
      506(b) [or 506(c)]. The securities have not been registered with the SEC or any state
      securities commission and may not be resold without registration or an applicable exemption.
    </li>
    <li>
      <strong>Forward-Looking Statements:</strong> This PPM contains forward-looking statements that
      involve risks and uncertainties. Actual results may differ materially from those projected.
    </li>
    <li>
      <strong>Tax Considerations:</strong> Investors should consult their own tax advisors regarding
      the tax consequences of this investment. [The fund intends to be treated as a partnership for
      US federal income tax purposes.]
    </li>
  </ul>
</div>

<h2>International Considerations</h2>
<h3>European Search Funds</h3>
<p>
  In Europe, the PPM equivalent varies by jurisdiction. In the UK, search funds typically raise under
  the Financial Services and Markets Act 2000 exemptions for high-net-worth individuals and
  sophisticated investors. In France, fundraising often uses the "société en commandite simple" (SCS)
  structure. In Spain, the "sociedad limitada" (SL) is common. The IESE Business School's
  International Search Fund Study tracks European search fund structures and economics.
</p>
<p>
  Key differences from US practice include: different accredited investor definitions, varying
  securities registration requirements, and local corporate governance norms. European search
  funds may also need to navigate cross-border tax implications if the searcher and target are in
  different countries.
</p>

<h3>Key Metric Benchmarks (Stanford 2023)</h3>
<p>
  For context, here are key benchmarks from the 2023 Stanford Search Fund Primer for traditional
  search funds:
</p>
<ul>
  <li>Median search capital raised: $475K</li>
  <li>Median number of investors: 14</li>
  <li>Median acquisition EBITDA: $1.8M</li>
  <li>Median acquisition multiple: 5.6x EBITDA</li>
  <li>Searcher equity: typically 20–25% of common equity</li>
  <li>Acquisition completion rate: approximately 73%</li>
  <li>Median aggregate return to investors: 5.1x MOIC, 32.6% IRR</li>
</ul>

<div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-10">
  <p class="text-sm text-amber-800 font-medium">Legal Disclaimer</p>
  <p class="text-sm text-amber-700 mt-1">
    This template is provided for <strong>educational purposes only</strong>. It is not a substitute for
    qualified legal advice. A PPM is a securities offering document that must comply with applicable
    federal and state securities laws. Preparing or distributing a PPM without proper legal counsel may
    violate securities laws and expose you to significant liability. Always engage a securities attorney
    experienced in private placements before preparing your PPM. SearchFundMarket assumes no
    responsibility for any actions taken based on this template.
  </p>
</div>
`,
};
