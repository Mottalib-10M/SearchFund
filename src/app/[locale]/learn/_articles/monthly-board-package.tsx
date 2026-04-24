import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function MonthlyBoardPackageArticle() {
  return (
    <article>
      <h1 className={h1Class}>Monthly Board Package: Templates &amp; Best Practices</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Your monthly board package is the single most important communication tool between you and your investors. For search fund CEOs running a newly acquired small business, a well-built board package does three things at once: it proves operational command, surfaces problems before they metastasize, and gives directors enough context to offer genuinely useful advice. According to the{" "}
          <a href="https://www.nacdonline.org/contentassets/7c1738206f984cf8a7fb96474b9a6022/board_packs_elephant_in_the_boardroom.pdf" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">National Association of Corporate Directors (NACD)</a>,
          {" "}poorly structured board packs are &ldquo;the elephant in the boardroom&rdquo; &mdash; too long, too unfocused, and delivered too late to drive productive discussion. This guide gives you a section-by-section template, real KPI examples by business type, and the distribution cadence that top-performing search fund operators follow.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Why Board Reporting Matters for Search Fund CEOs</h2>
      <div className={bodyClass}>
        <p>
          Most first-time CEOs underestimate what a board package actually signals. The numbers matter, but the package itself is a proxy for how tightly you run the business. A{" "}
          <a href="https://www.dfinsolutions.com/knowledge-hub/thought-leadership/knowledge-resources/8-best-practices-board-reporting" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">DFIN analysis of board reporting practices</a>
          {" "}found that organizations with consistent, well-structured reporting spend significantly more meeting time on strategy and less on rehashing basic financials. For search fund operators in particular, the board package serves four distinct functions:
        </p>
        <ol className={olClass}>
          <li><strong>Governance compliance.</strong> Your investors committed capital based on a{" "}
            <Link href="/learn/search-fund-governance-investor" className="text-apple-accent hover:underline">governance structure</Link>
            {" "}that includes regular reporting. Missing or thin packages erode the trust that underpins your operating autonomy.</li>
          <li><strong>Early-warning system.</strong> A disciplined package forces you to confront variances monthly rather than quarterly. A 10% revenue miss in March becomes a solvable problem; three consecutive misses become a crisis.</li>
          <li><strong>Board preparation.</strong> As{" "}
            <a href="https://www.driveninsights.com/small-business-finance-blog/board-packet" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Driven Insights notes</a>,
            {" "}the more prepared directors are before the meeting, the more value you extract from the dialogue and the less time you waste presenting slides everyone should have already read.</li>
          <li><strong>Personal credibility.</strong> Transparent reporting &mdash; especially when news is bad &mdash; builds the kind of trust that gives you room to make bold decisions later. Boards don&rsquo;t punish honesty; they punish surprises.</li>
        </ol>
        <p>
          If you&rsquo;re in your{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">first 100 days post-acquisition</Link>,
          {" "}establishing the board package format early sets the cadence for the entire ownership period. Lock in the template by month two and iterate from there.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>The Ideal Board Package Structure: Section by Section</h2>
      <div className={bodyClass}>
        <p>
          A strong board package for a search fund&ndash;owned small business runs 8&ndash;12 pages. That&rsquo;s not arbitrary &mdash; the NACD&rsquo;s{" "}
          <a href="https://www.nacdonline.org/all-governance/governance-resources/governance-surveys/surveys-benchmarking/2024-private-company-board-practices-and-oversight-survey/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">2024 Private Company Board Practices Survey</a>
          {" "}found that packages exceeding 20 pages correlate with lower director engagement and less productive meetings. Here is the structure, with target page counts for each section:
        </p>
        <ol className={olClass}>
          <li><strong>CEO Commentary</strong> (1&ndash;1.5 pages)</li>
          <li><strong>Financial Summary</strong> (2&ndash;3 pages)</li>
          <li><strong>KPI Dashboard</strong> (1 page)</li>
          <li><strong>Strategic Initiatives Tracker</strong> (1 page)</li>
          <li><strong>People &amp; Organization Update</strong> (0.5&ndash;1 page)</li>
          <li><strong>Board Questions &amp; Agenda Items</strong> (0.5 page)</li>
        </ol>
        <p>
          Total: 6&ndash;8 pages of core content, plus an optional 2&ndash;4 page appendix for detailed schedules (AR aging, debt covenants, detailed P&amp;L). Directors who want to dig deeper can; those who need the summary have it on the first six pages.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Financial Section: The Numbers Your Board Actually Needs</h2>
      <div className={bodyClass}>
        <p>
          The financial section is the backbone of the package. It should answer one question immediately: are we ahead of plan, behind plan, or on plan? Structure it in three sub-sections:
        </p>

        <h3 className={h3Class}>P&amp;L vs. Budget (1 page)</h3>
        <p>
          Present a single-page income statement showing four columns: (1) current month actual, (2) current month budget, (3) year-to-date actual, and (4) year-to-date budget. Include a fifth column for prior-year actuals if you have a full year of ownership. Flag any line item with a variance exceeding 10% and include a one-sentence explanation. For guidance on the metrics that matter most here, see our guide to{" "}
          <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">adjusted EBITDA and add-backs</Link>.
        </p>

        <h3 className={h3Class}>Cash Flow &amp; Liquidity (0.5&ndash;1 page)</h3>
        <p>
          Cash is the lifeblood of a recently acquired small business, especially one carrying acquisition debt. Include three elements: (1) a monthly cash flow statement showing operating, investing, and financing activities; (2) a{" "}
          <a href="https://graphitefinancial.com/blog/why-you-need-13-week-cash-flow-forecast/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">13-week rolling cash flow forecast</a>
          {" "}that projects week-by-week liquidity; and (3) a debt summary showing outstanding balances, covenant compliance ratios, and upcoming maturities or amortization payments. Graphite Financial calls the 13-week forecast &ldquo;the gold standard for short-term liquidity planning,&rdquo; and for good reason &mdash; it gives your board confidence that you see around the next corner.
        </p>

        <h3 className={h3Class}>Balance Sheet Highlights (0.5 page)</h3>
        <p>
          You don&rsquo;t need a full balance sheet every month. Instead, present a summary with five lines: cash position, accounts receivable (with aging buckets: current, 30-day, 60-day, 90+ day), accounts payable, total debt, and working capital. Add trailing 12-month trend arrows for each. If you&rsquo;re upgrading from the seller&rsquo;s legacy systems, our article on{" "}
          <Link href="/learn/financial-reporting-upgrades" className="text-apple-accent hover:underline">financial reporting upgrades post-acquisition</Link>
          {" "}covers how to build this reporting infrastructure from scratch.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Operational KPIs: What to Track by Business Type</h2>
      <div className={bodyClass}>
        <p>
          The KPI dashboard should fit on a single page with 5&ndash;10 metrics, each shown as a current value, trend line (6&ndash;12 months), and a green/yellow/red status indicator. The specific metrics depend entirely on what kind of business you acquired. Here are concrete examples across three common search fund verticals, drawing on frameworks from{" "}
          <a href="https://www.netsuite.com/portal/resource/articles/erp/saas-kpis.shtml" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">NetSuite&rsquo;s KPI benchmarking</a>
          {" "}and operational best practices:
        </p>

        <h3 className={h3Class}>Professional Services (Staffing, IT Services, Consulting)</h3>
        <ul className={ulClass}>
          <li><strong>Billable utilization rate</strong> &mdash; target: 70&ndash;80% for most firms</li>
          <li><strong>Revenue per employee</strong> &mdash; trailing 12-month trend</li>
          <li><strong>Employee turnover rate</strong> &mdash; monthly, annualized</li>
          <li><strong>Backlog / contracted pipeline</strong> &mdash; in dollars and months of coverage</li>
          <li><strong>Average bill rate vs. average cost rate</strong> &mdash; gross margin proxy</li>
          <li><strong>Client concentration</strong> &mdash; top 5 clients as a % of revenue</li>
        </ul>

        <h3 className={h3Class}>Manufacturing / Distribution</h3>
        <ul className={ulClass}>
          <li><strong>On-time delivery rate</strong> &mdash; target: 95%+</li>
          <li><strong>Scrap / rework rate</strong> &mdash; as a % of cost of goods sold</li>
          <li><strong>Inventory turns</strong> &mdash; monthly, with trend</li>
          <li><strong>Capacity utilization</strong> &mdash; actual production hours vs. available hours</li>
          <li><strong>Quote-to-order conversion rate</strong> &mdash; pipeline health indicator</li>
          <li><strong>Average order value</strong> &mdash; trailing 12-month trend</li>
        </ul>

        <h3 className={h3Class}>SaaS / Recurring Revenue</h3>
        <ul className={ulClass}>
          <li><strong>Monthly recurring revenue (MRR)</strong> &mdash; broken into new, expansion, and churned</li>
          <li><strong>Net revenue retention (NRR)</strong> &mdash; target: 100%+ indicates expansion exceeds churn</li>
          <li><strong>Gross churn rate</strong> &mdash; monthly, shown as both % and absolute dollar loss</li>
          <li><strong>Customer acquisition cost (CAC) payback period</strong> &mdash; in months</li>
          <li><strong>LTV:CAC ratio</strong> &mdash; healthy threshold: 3:1 or higher per{" "}
            <a href="https://www.paddle.com/resources/saas-kpis" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Paddle&rsquo;s SaaS benchmarks</a></li>
          <li><strong>Daily/weekly active users</strong> &mdash; engagement leading indicator</li>
        </ul>

        <p>
          For a deeper dive on building these dashboards, see our full guide to{" "}
          <Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI dashboards post-acquisition</Link>.
          {" "}The key principle: every KPI on the board page should connect directly to either revenue, margin, or cash &mdash; if it doesn&rsquo;t, move it to the appendix.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>CEO Commentary: Tone, Length, and What to Include</h2>
      <div className={bodyClass}>
        <p>
          The CEO letter is the most-read section of the board package, and it&rsquo;s where first-time operators either build or erode credibility. Keep it to 1&ndash;1.5 pages. Based on guidance from the{" "}
          <a href="https://www.diligent.com/resources/blog/board-reporting" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Diligent Institute</a>
          {" "}and patterns from experienced search fund board members, the CEO commentary should follow a consistent four-part structure:
        </p>

        <ol className={olClass}>
          <li><strong>Month in one paragraph.</strong> Three to four sentences summarizing the headline: revenue hit/missed plan by X%, a key hire was made, a major customer renewed (or didn&rsquo;t). Lead with the single most important thing that happened.</li>
          <li><strong>What went well (2&ndash;3 bullets).</strong> Specific wins with numbers attached. Not &ldquo;sales were strong&rdquo; but &ldquo;closed $140K in new contracts, 18% above the monthly target, driven by the new outbound campaign launched in February.&rdquo;</li>
          <li><strong>What didn&rsquo;t go well (2&ndash;3 bullets).</strong> This is where trust is built. Name the problem, quantify the impact, and state what you&rsquo;re doing about it. Example: &ldquo;Technician turnover hit 22% annualized this month (target: 15%). Root cause is compensation below market in the Dallas territory. Adjusting pay bands by 8% effective April 1; expect $45K annualized cost increase.&rdquo;</li>
          <li><strong>Top 3 priorities for next month.</strong> Specific, measurable, and time-bound. Your board should be able to ask you about these items 30 days later and get a clear yes/no on whether each was accomplished.</li>
        </ol>

        <p>
          <strong>Tone guidance:</strong> Write as if you&rsquo;re talking to a trusted business partner over coffee &mdash; direct, factual, and unvarnished. Avoid corporate jargon. The{" "}
          <Link href="/learn/investor-update-templates" className="text-apple-accent hover:underline">investor update templates</Link>
          {" "}article covers parallel principles for your broader investor communications, which often draw directly from the CEO commentary in your board package.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Strategic Initiatives Tracker: Projects, Milestones, Status</h2>
      <div className={bodyClass}>
        <p>
          Beyond the monthly financials and KPIs, your board needs visibility into the 3&ndash;5 major initiatives that will drive the business forward over the next 6&ndash;18 months. This section should fit on a single page and use a simple table format:
        </p>

        <ul className={ulClass}>
          <li><strong>Initiative name</strong> &mdash; e.g., &ldquo;ERP Migration,&rdquo; &ldquo;Launch Second Location,&rdquo; &ldquo;Sales Team Buildout&rdquo;</li>
          <li><strong>Owner</strong> &mdash; the person accountable (not always the CEO)</li>
          <li><strong>Status</strong> &mdash; On Track (green), At Risk (yellow), Delayed (red)</li>
          <li><strong>Key milestone this month</strong> &mdash; what was supposed to happen, and did it?</li>
          <li><strong>Next milestone and date</strong> &mdash; what&rsquo;s coming in the next 30&ndash;60 days</li>
          <li><strong>Budget vs. actual spend</strong> &mdash; for capital-intensive initiatives</li>
          <li><strong>Blockers / board input needed</strong> &mdash; specific requests, not vague asks</li>
        </ul>

        <p>
          The initiative tracker is also where you surface opportunities that require board approval &mdash; an add-on acquisition, a significant capital expenditure, or a major pricing change. If you&rsquo;re evaluating bolt-on opportunities, tie this section to the economics framework in our article on{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">search fund investor economics</Link>.
        </p>

        <p>
          A common mistake is listing too many initiatives. If you have more than five active strategic projects, you&rsquo;re probably spreading too thin. Limit the tracker to the projects that materially affect enterprise value over the next 12 months. Operational &ldquo;keep the lights on&rdquo; tasks belong in your internal project management tool, not the board package.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Seven Common Mistakes (and How to Avoid Them)</h2>
      <div className={bodyClass}>
        <p>
          After reviewing dozens of board packages from search fund CEOs and guidance from the{" "}
          <a href="https://www.nacdonline.org/contentassets/7c1738206f984cf8a7fb96474b9a6022/board_packs_elephant_in_the_boardroom.pdf" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">NACD&rsquo;s board pack research</a>,
          {" "}these are the patterns that consistently undermine effective governance:
        </p>

        <ol className={olClass}>
          <li><strong>The 30-page data dump.</strong> Packing in every report you have signals that you don&rsquo;t know what matters. Cap core content at 8 pages; relegate supporting detail to an appendix that directors can optionally review.</li>
          <li><strong>The two-page afterthought.</strong> The opposite extreme &mdash; a package so thin that directors walk into the meeting blind. If your board members spend the first 30 minutes asking basic questions about revenue and cash, your package failed.</li>
          <li><strong>Inconsistent formatting.</strong> Changing the layout, metrics, or structure month to month forces directors to re-orient each time. Lock in a template and stick with it. According to the{" "}
            <a href="https://www.dfinsolutions.com/knowledge-hub/thought-leadership/knowledge-resources/8-best-practices-board-reporting" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">DFIN board reporting guide</a>,
            {" "}consistent formats, colors, and fonts let directors focus on substance rather than navigation.</li>
          <li><strong>Hiding bad news.</strong> Burying a revenue miss in a footnote or omitting a key metric when it trends negatively is the fastest way to lose board trust. When directors eventually discover the problem &mdash; and they will &mdash; your credibility suffers disproportionately. Surface problems early with a plan attached.</li>
          <li><strong>No specific asks.</strong> If you don&rsquo;t tell your board what you need from them, they&rsquo;ll default to asking whatever occurs to them in the moment. Include 2&ndash;3 crisp questions: &ldquo;Should we pursue the $200K equipment lease or purchase outright?&rdquo; is far more productive than &ldquo;Any thoughts on capex?&rdquo;</li>
          <li><strong>Late distribution.</strong> Sending the package the night before (or morning of) the meeting means directors haven&rsquo;t read it. They&rsquo;ll ask basic clarifying questions that eat into strategic discussion time. The standard in{" "}
            <Link href="/learn/board-governance" className="text-apple-accent hover:underline">well-governed boards</Link>
            {" "}is distribution 5&ndash;7 business days before the meeting.</li>
          <li><strong>Confusing the package with the meeting deck.</strong> The board package is pre-reading material &mdash; it&rsquo;s not a slide deck you present live. The meeting itself should focus on discussion, decisions, and the 2&ndash;3 topics where you need real board engagement. If you find yourself reading the package aloud during the meeting, something broke.</li>
        </ol>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Distribution Timing, Format, and Logistics</h2>
      <div className={bodyClass}>
        <p>
          Getting the logistics right is a small detail that makes a large difference. Here is the cadence that experienced search fund operators follow:
        </p>

        <ul className={ulClass}>
          <li><strong>Timing:</strong> Send the package 5&ndash;7 business days before the board meeting. This means your month-end close process needs to finish by the 10th&ndash;12th of the following month at the latest. If your close takes longer than 10 business days, prioritize{" "}
            <Link href="/learn/financial-reporting-upgrades" className="text-apple-accent hover:underline">streamlining your financial close process</Link>
            {" "}&mdash; it&rsquo;s one of the highest-ROI operational improvements you can make.</li>
          <li><strong>Format:</strong> A single PDF is the gold standard. Board members read on laptops, tablets, and phones &mdash; a unified PDF renders reliably everywhere. Avoid sending separate Excel files or linking to live dashboards that require logins. If you use a board portal (e.g., Diligent, BoardEffect), upload the consolidated PDF there.</li>
          <li><strong>Length reminder:</strong> 8&ndash;12 pages for core content, plus an optional appendix up to 4 pages. If you consistently exceed this, ask yourself what you can cut, not what you can shrink to a smaller font.</li>
          <li><strong>Email framing:</strong> The cover email should be 3&ndash;4 sentences, not a second CEO letter. State the meeting date and time, confirm the agenda topics, and note anything in the package that requires a board vote or decision.</li>
          <li><strong>Feedback loop:</strong> Once a year, ask your board chair or lead director: &ldquo;Is there anything in the package that&rsquo;s not useful, or anything missing that you wish we included?&rdquo; This simple question, recommended in the{" "}
            <a href="https://www.nacdonline.org/all-governance/governance-resources/governance-surveys/surveys-benchmarking/2024-private-company-board-practices-and-oversight-survey/board-reporting/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">NACD&rsquo;s 2024 board reporting guidelines</a>,
            {" "}keeps the package evolving with the business.</li>
        </ul>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className={bodyClass}>

        <h3 className={h3Class}>How long should a monthly board package be?</h3>
        <p>
          Target 8&ndash;12 pages of core content. That typically breaks down as 1&ndash;1.5 pages for the CEO letter, 2&ndash;3 pages for financials, 1 page for the KPI dashboard, 1 page for strategic initiatives, and 0.5&ndash;1 page for people and organizational updates. Add an optional appendix of 2&ndash;4 pages for detailed schedules like AR aging or covenant calculations. The NACD&rsquo;s research consistently shows that packages longer than 20 pages reduce director engagement rather than increase it.
        </p>

        <h3 className={h3Class}>When should I send the board package before a meeting?</h3>
        <p>
          Five to seven business days before the meeting is the established best practice. This gives directors enough time to read the package carefully, formulate questions, and arrive prepared for substantive discussion. If your month-end financial close takes too long to hit this window, that&rsquo;s a signal to invest in{" "}
          <Link href="/learn/financial-reporting-upgrades" className="text-apple-accent hover:underline">financial reporting upgrades</Link>
          {" "}that accelerate the close.
        </p>

        <h3 className={h3Class}>Should I include bad news in my board package?</h3>
        <p>
          Always. Transparency about problems is one of the strongest trust-building behaviors a CEO can demonstrate. Frame bad news with three elements: (1) what happened, (2) the quantified impact, and (3) your plan to address it. Directors lose trust when they feel blindsided, not when they see challenges acknowledged and managed. Research on investor communications shows that honest reporting &mdash; even when the news is unfavorable &mdash; correlates with stronger long-term stakeholder relationships.
        </p>

        <h3 className={h3Class}>What is the difference between a board package and a meeting deck?</h3>
        <p>
          The board package is the pre-reading material distributed days before the meeting. It contains all the data, financials, and updates that directors need to come prepared. The meeting itself should not be a walkthrough of the package. Instead, the meeting agenda should focus on the 2&ndash;3 topics where you need real discussion, input, or a decision. If you find yourself reading the board package aloud during the meeting, you&rsquo;re wasting your directors&rsquo; most valuable resource: their time and judgment on strategic questions.
        </p>

        <h3 className={h3Class}>How do I choose which KPIs to include?</h3>
        <p>
          Limit the board-level dashboard to 5&ndash;10 metrics that connect directly to revenue, margin, or cash. A good test: if a KPI moved 20% in either direction, would it change a board-level decision? If not, it belongs in your internal operating dashboard, not the board package. Revisit the KPI selection quarterly as the business evolves. Our{" "}
          <Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI dashboard guide</Link>
          {" "}walks through the full selection and design process.
        </p>
      </div>
    </article>
  );
}
