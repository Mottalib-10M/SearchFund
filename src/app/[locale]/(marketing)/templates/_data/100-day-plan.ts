import type { TemplateMeta } from "./types";

export const hundredDayPlan: TemplateMeta = {
  slug: "100-day-plan",
  title: "100-Day Plan Template for Post-Acquisition CEOs",
  description:
    "A structured 100-day plan for search fund CEOs and first-time acquirers. Covers pre-Day 1 prep, stakeholder communication, quick wins, strategic initiatives, KPI setup, and board presentation.",
  phase: "operate",
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  sources: [
    {
      name: "Stanford Graduate School of Business - A Primer on Search Funds (2023)",
      url: "https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds/primer",
    },
    {
      name: "Harvard Business Review - The First 90 Days by Michael D. Watkins",
      url: "https://hbr.org/books/watkins",
    },
    {
      name: "IESE Business School - International Search Fund Study (2024)",
      url: "https://www.iese.edu/faculty-research/search-funds/",
    },
    {
      name: "Acquiring Minds Podcast - Lessons from Search Fund CEOs",
      url: "https://acquiringminds.co",
    },
  ],
  relatedArticles: [
    "first-100-days",
    "management-transition",
    "board-governance",
    "employee-retention-acquisition",
    "kpi-dashboard-post-acquisition",
  ],
  targetQueries: [
    "100-day plan post-acquisition",
    "first 100 days after buying a business",
    "search fund CEO transition plan",
    "post-acquisition integration template",
    "new CEO 100-day plan template",
  ],
  content: `
<div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
  <p class="text-xs text-amber-700">
    <strong>Note:</strong> This template is for educational purposes. Adapt it to your specific company, industry, and deal context. Every acquisition is unique.
  </p>
</div>

<h2>Why the First 100 Days Matter</h2>
<p>
  The first 100 days after closing an acquisition set the tone for your entire tenure as CEO. Employees are watching closely, customers are uncertain, and your investors expect a clear plan. Research from Michael Watkins' <em>The First 90 Days</em> shows that transitions are the most challenging periods for any leader, and the actions you take early on have an outsized impact on long-term success.
</p>
<p>
  For search fund CEOs, the stakes are even higher: you are stepping into a company you did not build, leading people who did not choose you, and operating with investor capital that demands returns. This template gives you a structured framework to navigate the transition with confidence.
</p>

<h2>Pre-Day 1: Before You Walk In</h2>
<p>
  Your 100-day plan starts before your first day. Use the period between signing and closing (and the days immediately after closing) to prepare.
</p>

<h3>Organizational Preparation</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Review all due diligence materials one more time with an operator's lens (not a buyer's lens)</li>
    <li><input type="checkbox" disabled /> Build an org chart with names, roles, tenure, compensation, and your initial read on each person</li>
    <li><input type="checkbox" disabled /> Identify the 5-7 people who are most critical to the business (key-person risk list)</li>
    <li><input type="checkbox" disabled /> Prepare your Day 1 announcement message to all employees</li>
    <li><input type="checkbox" disabled /> Draft a separate message for key customers (the seller should introduce you)</li>
    <li><input type="checkbox" disabled /> Set up your email, systems access, and office space</li>
    <li><input type="checkbox" disabled /> Schedule one-on-one meetings with every direct report for Week 1</li>
    <li><input type="checkbox" disabled /> Prepare a short "about me" document for staff (personal background, leadership philosophy, what excites you about this company)</li>
  </ul>
</div>

<h3>Mindset Preparation</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Commit to listening mode for the first 2-4 weeks: ask questions, resist the urge to "fix" things immediately</li>
    <li><input type="checkbox" disabled /> Identify your personal support network (mentor, coach, peer group, investors you trust)</li>
    <li><input type="checkbox" disabled /> Set personal boundaries for work-life balance: the first 100 days are intense, but burnout helps no one</li>
    <li><input type="checkbox" disabled /> Write down your hypotheses about the business (what you think the key levers are) so you can test them</li>
  </ul>
</div>

<h2>Week 1: Listen, Learn, and Be Present</h2>
<p>
  Your only job in Week 1 is to show up, listen, and earn trust. Do not make any changes. Do not reorganize. Do not fire anyone. Just be present and curious.
</p>

<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Deliver your Day 1 message in person (or via video for remote teams). Be authentic, humble, and clear about your intentions</li>
    <li><input type="checkbox" disabled /> Hold one-on-one meetings with all direct reports. Ask each person:
      <ul class="mt-1 ml-4 space-y-1 text-gray-600">
        <li>- "What is working well that I should not change?"</li>
        <li>- "What is the biggest problem you wish someone would fix?"</li>
        <li>- "What would you do differently if you were in my shoes?"</li>
        <li>- "Is there anything you are worried about with this transition?"</li>
      </ul>
    </li>
    <li><input type="checkbox" disabled /> Walk the floor / visit every department. Introduce yourself to everyone, not just leaders</li>
    <li><input type="checkbox" disabled /> Shadow the outgoing owner/seller during their transition period</li>
    <li><input type="checkbox" disabled /> Review the financial dashboard and understand the current cash position, AR/AP aging, and monthly run rate</li>
    <li><input type="checkbox" disabled /> Identify any immediate fires (past-due payables, angry customers, open legal issues)</li>
    <li><input type="checkbox" disabled /> Establish a daily check-in rhythm with the outgoing seller (if still involved)</li>
  </ul>
</div>

<h2>Days 1-30: Stabilize the Foundation</h2>
<p>
  The first month is about understanding reality (not the version you saw in due diligence) and stabilizing the business. Your priority is retention: keep employees, keep customers, keep vendors.
</p>

<h3>People &amp; Culture</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Complete one-on-one meetings with all key employees (not just direct reports)</li>
    <li><input type="checkbox" disabled /> Assess whether any retention bonuses or stay agreements are needed for critical personnel</li>
    <li><input type="checkbox" disabled /> Understand the informal power structure: who do people really go to for answers?</li>
    <li><input type="checkbox" disabled /> Review compensation and benefits for competitiveness. Identify any obvious gaps</li>
    <li><input type="checkbox" disabled /> Establish your weekly meeting cadence (leadership team meeting, all-hands frequency)</li>
    <li><input type="checkbox" disabled /> Communicate clearly that no layoffs are planned (if true) to reduce anxiety</li>
  </ul>
</div>

<h3>Customers &amp; Revenue</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Meet or call the top 10-20 customers. Introduce yourself and ask what they value most about the company</li>
    <li><input type="checkbox" disabled /> Review customer concentration: what % of revenue comes from the top 5 customers?</li>
    <li><input type="checkbox" disabled /> Understand the sales pipeline: what is in progress and what is at risk?</li>
    <li><input type="checkbox" disabled /> Review pricing: when was the last price increase? Is there room to adjust?</li>
    <li><input type="checkbox" disabled /> Identify any at-risk customer relationships and create a retention plan</li>
  </ul>
</div>

<h3>Operations &amp; Finance</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Set up weekly financial reporting (if not already in place)</li>
    <li><input type="checkbox" disabled /> Verify that all banking, insurance, and vendor relationships have been properly transferred</li>
    <li><input type="checkbox" disabled /> Review all contracts expiring in the next 6 months</li>
    <li><input type="checkbox" disabled /> Understand the cash conversion cycle and working capital dynamics</li>
    <li><input type="checkbox" disabled /> Confirm IT systems, passwords, and admin access have been fully transferred</li>
    <li><input type="checkbox" disabled /> Meet with your accountant and bookkeeper to understand the monthly close process</li>
  </ul>
</div>

<h2>Days 30-60: Quick Wins</h2>
<p>
  By day 30, you should have a solid understanding of the business. Now it is time to act, but strategically. Focus on quick wins that build credibility and demonstrate competence without creating unnecessary disruption.
</p>

<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Implement 2-3 visible improvements that employees have been asking for (e.g., fix the broken coffee machine, upgrade outdated software, streamline a frustrating process)</li>
    <li><input type="checkbox" disabled /> Address the "low-hanging fruit" cost savings identified during due diligence</li>
    <li><input type="checkbox" disabled /> Begin building your KPI dashboard with the 5-7 metrics that matter most:
      <ul class="mt-1 ml-4 space-y-1 text-gray-600">
        <li>- Revenue (monthly, trailing 12)</li>
        <li>- Gross margin</li>
        <li>- EBITDA and EBITDA margin</li>
        <li>- Cash balance and free cash flow</li>
        <li>- Customer count and churn (if applicable)</li>
        <li>- Employee headcount and turnover</li>
        <li>- Backlog or pipeline (industry-dependent)</li>
      </ul>
    </li>
    <li><input type="checkbox" disabled /> Implement a price increase if you identified room in your customer conversations (even 3-5% can materially impact margins)</li>
    <li><input type="checkbox" disabled /> Resolve any lingering issues from the ownership transition (vendor re-approvals, lease assignments, license transfers)</li>
    <li><input type="checkbox" disabled /> Hold your first board meeting or investor update. Share your initial assessment honestly</li>
  </ul>
</div>

<h2>Days 60-90: Strategic Initiatives</h2>
<p>
  With the business stabilized and your credibility established through quick wins, you can now turn to larger strategic initiatives. These should be informed by everything you have learned in the first 60 days.
</p>

<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Develop a 12-month operating plan with specific revenue, EBITDA, and cash flow targets</li>
    <li><input type="checkbox" disabled /> Identify 3-5 strategic priorities for the next 12 months. Common areas:
      <ul class="mt-1 ml-4 space-y-1 text-gray-600">
        <li>- Revenue growth: new sales channels, geographic expansion, cross-selling</li>
        <li>- Margin improvement: vendor renegotiation, operational efficiency, pricing optimization</li>
        <li>- Team development: key hires, training, succession planning</li>
        <li>- Technology: systems upgrades, automation, digital capabilities</li>
        <li>- Customer diversification: reducing concentration risk</li>
      </ul>
    </li>
    <li><input type="checkbox" disabled /> Make necessary organizational changes (role adjustments, reporting structure) based on your assessment</li>
    <li><input type="checkbox" disabled /> Evaluate whether any personnel changes are needed. If yes, act decisively but fairly</li>
    <li><input type="checkbox" disabled /> Begin implementing the most impactful strategic initiative</li>
    <li><input type="checkbox" disabled /> Establish a relationship with your banker. Set up a line of credit if not already in place</li>
    <li><input type="checkbox" disabled /> If buy-and-build is part of the thesis, begin identifying potential add-on acquisitions</li>
  </ul>
</div>

<h2>Days 90-100: Board Presentation &amp; Plan Finalization</h2>
<p>
  The 100-day mark is a natural checkpoint. Prepare a comprehensive assessment for your board and investors that demonstrates command of the business and a clear path forward.
</p>

<h3>Board Presentation Outline</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <ol class="space-y-2 list-decimal list-inside">
    <li><strong>State of the Business</strong> - Financial performance vs. underwriting assumptions</li>
    <li><strong>Key Findings</strong> - What you learned that was different from due diligence</li>
    <li><strong>Team Assessment</strong> - Strengths, gaps, and any changes made or planned</li>
    <li><strong>Customer &amp; Market Update</strong> - Customer health, competitive landscape, market trends</li>
    <li><strong>Quick Wins Delivered</strong> - Concrete results achieved in the first 100 days</li>
    <li><strong>Strategic Priorities</strong> - Your 3-5 priorities for the next 12 months</li>
    <li><strong>12-Month Financial Plan</strong> - Revenue, EBITDA, and cash flow projections</li>
    <li><strong>Key Risks &amp; Mitigation</strong> - What keeps you up at night and what you are doing about it</li>
    <li><strong>Support Needed</strong> - Where you need help from the board (introductions, expertise, capital)</li>
  </ol>
</div>

<h3>Self-Assessment</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p class="mb-2">Honestly evaluate yourself on these dimensions:</p>
  <ul class="space-y-2">
    <li><input type="checkbox" disabled /> Do I understand this business as well as the previous owner?</li>
    <li><input type="checkbox" disabled /> Has any key employee or customer left? If so, why, and what did I learn?</li>
    <li><input type="checkbox" disabled /> Am I spending my time on the highest-impact activities?</li>
    <li><input type="checkbox" disabled /> Do I have the right team, or do I need to make changes?</li>
    <li><input type="checkbox" disabled /> Is the business performing at, above, or below my underwriting case?</li>
    <li><input type="checkbox" disabled /> Am I taking care of my own health and relationships?</li>
  </ul>
</div>

<h2>KPI Dashboard Setup</h2>
<p>
  A well-designed KPI dashboard gives you real-time visibility into business health and replaces gut feelings with data. Set this up within the first 30-60 days.
</p>

<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <table class="w-full text-left">
    <thead>
      <tr class="border-b border-gray-300">
        <th class="pb-2 pr-4">Category</th>
        <th class="pb-2 pr-4">Metric</th>
        <th class="pb-2">Frequency</th>
      </tr>
    </thead>
    <tbody class="align-top">
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Revenue</td>
        <td class="py-2 pr-4">Monthly revenue, YoY growth, trailing 12-month trend</td>
        <td class="py-2">Monthly</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Profitability</td>
        <td class="py-2 pr-4">Gross margin, EBITDA, EBITDA margin</td>
        <td class="py-2">Monthly</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Cash</td>
        <td class="py-2 pr-4">Cash balance, free cash flow, days sales outstanding</td>
        <td class="py-2">Weekly</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">Customers</td>
        <td class="py-2 pr-4">Customer count, churn rate, NPS or satisfaction score</td>
        <td class="py-2">Monthly</td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="py-2 pr-4 font-medium">People</td>
        <td class="py-2 pr-4">Headcount, voluntary turnover, open positions</td>
        <td class="py-2">Monthly</td>
      </tr>
      <tr>
        <td class="py-2 pr-4 font-medium">Pipeline</td>
        <td class="py-2 pr-4">Sales pipeline value, conversion rate, average deal size</td>
        <td class="py-2">Weekly</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Communication Plan Templates</h2>
<p>
  Consistent, transparent communication reduces anxiety and builds trust during a transition. Here are templates for each stakeholder group.
</p>

<h3>Employee All-Hands (Monthly)</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p><strong>Format:</strong> 30-minute town hall (in-person or video)</p>
  <p><strong>Agenda:</strong></p>
  <ol class="mt-1 list-decimal list-inside space-y-1">
    <li>Business update: how we performed last month (share key metrics)</li>
    <li>Wins and recognitions: call out specific people and teams</li>
    <li>What we are working on: upcoming initiatives and priorities</li>
    <li>Open Q&amp;A: no topic off limits</li>
  </ol>
  <p class="mt-2 text-gray-600 italic">Tip: The Q&amp;A is the most important part. If people are not asking questions, they are asking them in the hallway instead.</p>
</div>

<h3>Board / Investor Update (Monthly or Quarterly)</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p><strong>Format:</strong> Written memo + optional call</p>
  <p><strong>Structure:</strong></p>
  <ol class="mt-1 list-decimal list-inside space-y-1">
    <li>Financial summary: revenue, EBITDA, cash vs. plan</li>
    <li>Operational highlights: 3-5 bullets on what happened</li>
    <li>Key risks or concerns: be transparent early</li>
    <li>Strategic progress: update on your priorities</li>
    <li>Asks: specific help you need from the board</li>
  </ol>
</div>

<h3>Customer Communication (As Needed)</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p><strong>Key messages to convey:</strong></p>
  <ul class="mt-1 space-y-1">
    <li>- Business continuity: same team, same service, same commitment</li>
    <li>- Investment in growth: new ownership means investment in the business</li>
    <li>- Your door is open: give customers direct access to the new CEO</li>
    <li>- Ask for feedback: what can we do better?</li>
  </ul>
</div>

<h2>Common Pitfalls to Avoid</h2>
<div class="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
  <ul class="space-y-2 text-sm text-red-800">
    <li><strong>Changing too much too fast.</strong> Resist the MBA urge to "optimize" everything in month one. Listen first.</li>
    <li><strong>Ignoring the culture.</strong> The culture existed before you. Understand it before trying to change it.</li>
    <li><strong>Neglecting the seller transition.</strong> The outgoing owner holds institutional knowledge. Extract it systematically.</li>
    <li><strong>Over-communicating strategy, under-communicating stability.</strong> Employees want to know their jobs are safe before they care about your vision.</li>
    <li><strong>Skipping the customer visits.</strong> Nothing substitutes for face-to-face time with your top customers.</li>
    <li><strong>Trying to do everything yourself.</strong> You need to delegate. If you are the bottleneck, the business cannot grow.</li>
  </ul>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-10">
  <p class="text-xs text-amber-700">
    <strong>Note:</strong> This template is for educational purposes. Every acquisition is unique. Adapt this plan to your specific company, industry, team, and deal context.
  </p>
</div>
`,
};
