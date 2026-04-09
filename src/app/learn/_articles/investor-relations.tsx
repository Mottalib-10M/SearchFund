import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function InvestorRelationsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Investor Relations & Reporting Best Practices</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          Strong investor relations are one of the most underappreciated
          competitive advantages in the search fund model. Your investors are
          not just sources of capital — they are mentors, board members,
          connectors, and potential backers of your next deal. How you
          communicate with them, especially during difficult periods,
          determines whether they become lifelong allies or one-time
          participants. This guide covers the cadence, content, tone, and
          mechanics of world-class investor reporting, from the search phase
          through operations and exit.
        </p>

        <h2 className={h2Class}>Monthly investor updates</h2>
        <p>
          Monthly updates are the backbone of search fund investor relations.
          During the search phase, they keep investors informed about deal
          flow, pipeline progress, and market observations. After acquisition,
          they evolve into operational reports on the business. The best
          monthly updates share three qualities: they are <strong>concise</strong>
          (one to two pages), <strong>consistent</strong> (sent on the same
          date each month), and <strong>candid</strong> (they do not hide bad
          news).
        </p>

        <h3 className={h3Class}>Search-phase update template</h3>
        <p>
          During the search, your monthly update should cover:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Pipeline summary:</strong> Number of companies reviewed,
            companies in active evaluation, NDAs signed, and management
            meetings held. Include a simple table or funnel chart showing
            pipeline progression.
          </li>
          <li>
            <strong>Top opportunities:</strong> Brief descriptions (2-3
            sentences each) of the most promising companies you are
            evaluating. Include industry, size (revenue and EBITDA), and
            why the opportunity is interesting.
          </li>
          <li>
            <strong>LOIs and deal activity:</strong> Status of any letters
            of intent submitted, under negotiation, or declined. Explain
            why deals fell through — investors learn from these just as
            much as from wins.
          </li>
          <li>
            <strong>Market observations:</strong> Themes you are seeing in
            deal flow — pricing trends, seller motivations, competitive
            dynamics, sector insights. This demonstrates the depth of your
            search activity.
          </li>
          <li>
            <strong>Search capital status:</strong> Remaining search capital
            balance and projected runway. Investors appreciate transparency
            about burn rate.
          </li>
          <li>
            <strong>Asks:</strong> Specific requests for introductions,
            industry expertise, or advice. Investors want to help — give
            them actionable ways to do so.
          </li>
        </ol>

        <h3 className={h3Class}>Post-acquisition update template</h3>
        <p>
          After closing, the monthly update shifts to an operational report:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Financial highlights:</strong> Revenue, EBITDA, and
            cash flow for the month, with comparisons to budget, prior
            year, and year-to-date figures. Present these as a simple
            table — investors should be able to assess performance in
            under 30 seconds.
          </li>
          <li>
            <strong>Key performance indicators:</strong> Three to five
            KPIs specific to your business (customer churn, new customer
            wins, backlog, utilization rate, etc.). Track these
            consistently every month.
          </li>
          <li>
            <strong>Operational update:</strong> Major initiatives,
            milestones achieved, and challenges encountered. Be specific:
            &ldquo;We hired a VP of Sales who starts March 15&rdquo; is
            better than &ldquo;We are building out the team.&rdquo;
          </li>
          <li>
            <strong>Strategic priorities:</strong> What you are focused on
            for the coming month and quarter. This gives investors context
            for where the business is heading.
          </li>
          <li>
            <strong>Asks:</strong> Continue making specific requests.
            Post-acquisition, these might include introductions to
            potential add-on targets, functional experts (CFO candidates,
            marketing consultants), or customers.
          </li>
        </ol>

        <h2 className={h2Class}>Quarterly board calls</h2>
        <p>
          Most search fund boards meet quarterly, either in person or via
          video call. These meetings are longer and more strategic than
          the monthly written updates. A well-run quarterly board meeting
          typically lasts 60 to 90 minutes and follows this structure:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Financial review (15-20 minutes):</strong> Walk through
            the quarter&apos;s financial performance versus budget and prior
            year. Highlight variances and explain the drivers. Distribute
            the financial package 48 hours before the meeting so board
            members can review in advance.
          </li>
          <li>
            <strong>Operational deep-dive (20-30 minutes):</strong> Pick
            one or two strategic topics to discuss in depth — a new market
            entry, a pricing change, a major hire, or an add-on acquisition
            opportunity. This is where board members add the most value.
          </li>
          <li>
            <strong>People and organization (10-15 minutes):</strong>
            Discuss the leadership team, key hires and departures,
            organizational development, and succession planning.
          </li>
          <li>
            <strong>Risk and governance (10 minutes):</strong> Review any
            legal, regulatory, or compliance issues. Discuss insurance
            coverage, key contract renewals, and potential risks on the
            horizon.
          </li>
          <li>
            <strong>Strategic discussion (15-20 minutes):</strong> Use
            the remaining time for open-ended strategic conversation.
            Present decisions where you genuinely want board input —
            not just rubber-stamp approvals.
          </li>
        </ul>

        <h2 className={h2Class}>Annual meetings</h2>
        <p>
          Once a year, ideally in person, hold a more comprehensive annual
          meeting with all investors. This meeting serves a different
          purpose than the quarterly board calls — it is about
          relationship building, strategic alignment, and celebrating
          (or honestly assessing) the year&apos;s progress. The annual
          meeting typically includes:
        </p>
        <ul className={ulClass}>
          <li>A comprehensive year-in-review presentation covering financial performance, strategic milestones, and organizational development.</li>
          <li>A detailed budget and strategic plan for the coming year.</li>
          <li>If appropriate, a site visit to the business so investors can meet the team and see operations firsthand.</li>
          <li>Time for informal networking and relationship building — dinner or drinks after the formal meeting.</li>
        </ul>

        <h2 className={h2Class}>Transparency about bad news</h2>
        <p>
          The single most important principle in investor relations is
          <strong> never surprising your investors with bad news</strong>.
          If the business is underperforming, a key customer is at risk,
          or a strategic initiative has failed, communicate it immediately
          and proactively — do not wait for the monthly update or
          quarterly call. Investors who have backed dozens of search
          funds understand that every business faces setbacks. What they
          cannot tolerate is being kept in the dark.
        </p>
        <p>
          When delivering bad news, follow this framework:
        </p>
        <ol className={olClass}>
          <li><strong>State the problem clearly.</strong> Do not bury bad news in positive language or euphemisms.</li>
          <li><strong>Explain the root cause.</strong> Show that you understand why the problem occurred.</li>
          <li><strong>Present your plan.</strong> Describe the specific actions you are taking to address the issue.</li>
          <li><strong>Ask for help.</strong> If investors can contribute advice, introductions, or resources, say so explicitly.</li>
        </ol>
        <p>
          Searchers who are transparent about challenges consistently report
          stronger investor relationships than those who only share good
          news. Trust is built in the difficult moments, not the easy ones.
        </p>

        <h2 className={h2Class}>Post-acquisition reporting evolution</h2>
        <p>
          As the business matures and your tenure as CEO progresses, the
          nature and frequency of investor reporting should evolve:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Year 1:</strong> Monthly written updates and quarterly
            board calls. This is the period of highest uncertainty and
            learning, so more frequent communication is essential.
          </li>
          <li>
            <strong>Years 2-3:</strong> Continue monthly updates but begin
            to shift their content from operational details toward
            strategic themes. Board calls may shift from quarterly to
            every other month once the business is stable.
          </li>
          <li>
            <strong>Years 4+:</strong> Monthly updates become more concise
            and dashboard-driven. Board engagement focuses on exit
            planning, add-on acquisitions, and long-term strategy.
          </li>
        </ul>

        <h2 className={h2Class}>Building long-term relationships for future deals</h2>
        <p>
          Many successful search fund entrepreneurs go on to acquire
          additional businesses, launch independent sponsor deals, or
          transition into search fund investing themselves. The investor
          relationships you build during your first deal are the
          foundation for everything that comes next. Investors who had a
          positive experience — not just financially, but in terms of
          communication, transparency, and professionalism — are far more
          likely to back you again or introduce you to their networks.
        </p>
        <p>
          Even after exit, maintain the relationship. Send a final
          comprehensive report summarizing the investment&apos;s lifecycle,
          returns, and key lessons. Stay in touch with periodic updates
          on your career and future plans. The search fund community is
          small and reputation-driven — your track record as a
          communicator and operator follows you permanently.
        </p>
      </div>
    </article>
  );
}
