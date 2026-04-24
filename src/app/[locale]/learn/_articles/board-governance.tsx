import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function BoardGovernanceArticle() {
  return (
    <article>
      <h1 className={h1Class}>Board Governance for Search Fund Companies</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          Board governance is a critical but often overlooked dimension of
          search fund success. Unlike startups where boards are advisory at
          best, search fund boards have real power: they approved the
          acquisition, they control the majority of equity, and they can
          replace the CEO. Understanding board dynamics, managing investor
          expectations, and running effective board meetings are essential
          skills for every search fund CEO. This guide covers board
          composition, meeting structure, CEO-board dynamics, and how
          governance should evolve as the company grows.
        </p>

        <h2 className={h2Class}>Board composition</h2>
        <p>
          A typical search fund board consists of three to five members. The
          composition reflects the ownership structure: investors hold the
          majority of equity and therefore the majority of board seats. The
          CEO is almost always a board member but rarely the chair.
        </p>

        <h3 className={h3Class}>Standard board structure</h3>
        <ul className={ulClass}>
          <li>
            <strong>The CEO (1 seat):</strong> you are on the board by virtue
            of your role but are typically outnumbered by investor
            representatives. Your influence comes from your operational
            knowledge and the trust you build over time, not from voting
            power.
          </li>
          <li>
            <strong>Investor representatives (2&ndash;3 seats):</strong> these
            are typically the lead investors who committed the largest checks
            during the search phase and acquisition. They bring deal
            experience, industry knowledge, and networks. In a traditional
            search fund with 10&ndash;20 investors, only two to three will have
            board seats; the rest participate through investor updates.
          </li>
          <li>
            <strong>Independent director (0&ndash;1 seat):</strong> an outside
            director with relevant industry experience — often recruited from your{" "}
            <Link href="/learn/advisory-board" className="text-apple-accent hover:underline">advisory board</Link>{" "}
            — who is not affiliated with any investor group. Independent directors bring objectivity,
            industry-specific expertise, and can serve as a bridge between the
            CEO and investors during disagreements.
          </li>
        </ul>

        <h3 className={h3Class}>Selecting board members</h3>
        <p>
          Not all investors make good board members. The best board members
          bring operating experience (not just financial expertise), are
          available when needed (not just at quarterly meetings), and offer
          constructive guidance without micromanaging. When negotiating board
          composition during the acquisition, advocate for investors who have
          actually operated businesses rather than those who have only invested
          in them.
        </p>
        <ul className={ulClass}>
          <li>
            Prioritize investors with direct operating experience in your
            industry or a closely related one.
          </li>
          <li>
            Look for board members who have served on three to five other
            boards and understand the difference between governance and
            management.
          </li>
          <li>
            Assess availability: a board member who is managing a large
            portfolio may not have time to be helpful between meetings.
          </li>
          <li>
            Consider chemistry. You will be working closely with these people
            for five to seven years. Mutual respect and trust are non-
            negotiable.
          </li>
        </ul>

        <h2 className={h2Class}>Meeting cadence and structure</h2>
        <p>
          Board meeting frequency should match the stage and complexity of the
          business. More frequent meetings early on provide tighter oversight
          during the high-risk transition period, while less frequent meetings
          later allow the CEO more operational autonomy.
        </p>

        <h3 className={h3Class}>Recommended cadence</h3>
        <ul className={ulClass}>
          <li>
            <strong>First year post-acquisition:</strong> monthly board
            meetings. The first year — especially the{" "}
            <Link href="/learn/management-transition" className="text-apple-accent hover:underline">management transition</Link>{" "}
            period — is the riskiest, and monthly
            meetings ensure the board stays close to the business and can
            provide timely guidance.
          </li>
          <li>
            <strong>Year two and beyond:</strong> quarterly board meetings,
            supplemented by monthly investor updates and ad hoc calls as
            needed. By this point, the CEO should have established credibility
            and the business should be stabilized.
          </li>
          <li>
            <strong>Crisis periods:</strong> return to monthly or even
            biweekly meetings during material events (customer loss, key
            employee departure, financial underperformance, add-on
            acquisitions).
          </li>
        </ul>

        <h3 className={h3Class}>Effective meeting structure (2&ndash;3 hours)</h3>
        <p>
          The best board meetings are structured, focused, and leave ample
          time for strategic discussion. A common mistake is spending 80% of
          the meeting reviewing financials and 20% on strategy. Aim for the
          reverse.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Consent agenda (5 minutes):</strong> approve prior meeting
            minutes, routine resolutions, and standard committee reports. These
            items are distributed in advance and approved without discussion
            unless a board member raises an issue.
          </li>
          <li>
            <strong>CEO update (20&ndash;30 minutes):</strong> high-level
            overview of business performance, key wins, challenges, and
            priorities for the next quarter. This should be a narrative, not a
            data dump. Board members should have received the detailed
            financials three to five days before the meeting.
          </li>
          <li>
            <strong>Financial review (20&ndash;30 minutes):</strong> walk
            through key metrics, variances to budget, and cash flow. Focus on
            exceptions and trends rather than line-by-line details. Board
            members should come prepared with questions based on the pre-read
            materials.
          </li>
          <li>
            <strong>Deep dive topic (45&ndash;60 minutes):</strong> dedicate a
            substantial block to one strategic topic that benefits from board
            input. Examples: pricing strategy, add-on acquisition evaluation,
            technology investment, organizational design, competitive response,
            or exit planning. Rotate topics each meeting.
          </li>
          <li>
            <strong>Issues for discussion (15&ndash;20 minutes):</strong>{" "}
            specific decisions or risks the CEO wants board input on. Frame
            these clearly: here is the situation, here are the options, here is
            my recommendation, what does the board think?
          </li>
          <li>
            <strong>Executive session (15 minutes):</strong> board members meet
            without the CEO to discuss CEO performance, compensation, and any
            sensitive topics. This is standard practice and should not be
            interpreted as adversarial.
          </li>
        </ul>

        <h2 className={h2Class}>The board package</h2>
        <p>
          A well-prepared board package is the foundation of a productive
          meeting. Distribute it three to five business days before the meeting
          so board members have time to review and come prepared with
          thoughtful questions.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Financial statements:</strong> monthly P&amp;L, balance
            sheet, and cash flow statement with budget variances. Include
            trailing twelve-month trends and year-over-year comparisons.
          </li>
          <li>
            <strong>KPI dashboard:</strong> five to ten key performance
            indicators tracked monthly. These should include both financial
            metrics (revenue growth, gross margin, EBITDA margin, cash
            conversion) and operational metrics (customer retention, employee
            turnover, NPS, pipeline, utilization).
          </li>
          <li>
            <strong>Strategic update:</strong> progress on key initiatives,
            competitive developments, market trends, and risks or
            opportunities on the horizon.
          </li>
          <li>
            <strong>Issues for discussion:</strong> clearly framed decision
            items with context, options, and the CEO&apos;s recommendation.
          </li>
          <li>
            <strong>Deep dive materials:</strong> background reading and
            analysis for the meeting&apos;s deep dive topic.
          </li>
        </ul>

        <h2 className={h2Class}>CEO-board dynamics</h2>
        <p>
          The relationship between a search fund CEO and their board is unique.
          Unlike a founder-led company where the CEO often controls the board,
          a search fund CEO typically has one vote on a three-to-five member
          board where investors hold the majority. Navigating this dynamic
          requires skill, transparency, and political awareness.
        </p>

        <h3 className={h3Class}>Managing up effectively</h3>
        <ul className={ulClass}>
          <li>
            <strong>No surprises:</strong> the cardinal rule of board
            management — and of{" "}
            <Link href="/learn/investor-relations" className="text-apple-accent hover:underline">investor relations</Link>{" "}
            more broadly. If something material happens &mdash; positive or
            negative &mdash; communicate it to the board immediately, not at
            the next meeting. Bad news does not improve with age.
          </li>
          <li>
            <strong>Build relationships individually:</strong> do not rely
            solely on board meetings for communication. Call each board member
            individually once a month between meetings. Share updates, ask for
            advice, and build the relationship. This ensures that when you need
            support on a contentious issue, you have already laid the
            groundwork.
          </li>
          <li>
            <strong>Frame decisions, do not delegate them:</strong> come to the
            board with a clear recommendation, not an open-ended question.
            &quot;I recommend we invest $200K in a new CRM system because...&quot;
            is more effective than &quot;What should we do about our CRM?&quot;
          </li>
          <li>
            <strong>Accept feedback gracefully:</strong> board members will
            challenge your assumptions, question your decisions, and sometimes
            disagree with your strategy. This is their job. Respond with data
            and logic, not defensiveness.
          </li>
        </ul>

        <h3 className={h3Class}>Decision boundaries</h3>
        <p>
          Establish clear decision-making authority early. Which decisions can
          the CEO make unilaterally, which require board notification, and
          which require board approval? A typical framework:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>CEO authority:</strong> hiring and firing below the VP
            level, capital expenditures under $50K, operational decisions
            within the approved budget, pricing changes within defined bands.
          </li>
          <li>
            <strong>Board notification:</strong> hiring or terminating senior
            managers, capital expenditures of $50K&ndash;$200K, customer or
            vendor concentration changes, competitive threats.
          </li>
          <li>
            <strong>Board approval required:</strong> annual budget,
            compensation changes for the CEO, acquisitions or divestitures,
            capital expenditures above $200K, new debt or equity issuance,
            changes to corporate structure, related-party transactions.
          </li>
        </ul>

        <h2 className={h2Class}>Independent directors</h2>
        <p>
          Adding an independent director can significantly improve board
          effectiveness, particularly when investor board members lack
          industry-specific expertise or when CEO-investor dynamics become
          strained.
        </p>

        <h3 className={h3Class}>When to add an independent director</h3>
        <ul className={ulClass}>
          <li>
            When the business reaches $3M+ EBITDA and the strategic decisions
            become more complex.
          </li>
          <li>
            When the CEO needs an ally on the board who can provide objective
            perspective without an investor agenda.
          </li>
          <li>
            When the company is considering an add-on acquisition and needs
            industry-specific M&amp;A expertise.
          </li>
          <li>
            When preparing for{" "}
            <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">exit</Link>{" "}
            and needing board-level experience with sale processes.
          </li>
        </ul>

        <h3 className={h3Class}>Finding and compensating independent directors</h3>
        <ul className={ulClass}>
          <li>
            Source candidates through your investor network, industry
            associations, executive search firms, and organizations like the
            National Association of Corporate Directors (NACD).
          </li>
          <li>
            Look for recently retired executives from your industry who have
            the time, interest, and expertise to contribute meaningfully.
          </li>
          <li>
            <strong>Compensation:</strong> $5K&ndash;$15K per year in cash, or
            a small equity grant (0.25&ndash;1% of the company). Independent
            directors for search fund companies are not compensated like
            public company directors; the primary motivation should be
            interest in the business and the CEO&apos;s success.
          </li>
          <li>
            Ensure the independent director has D&amp;O insurance coverage
            and understands the fiduciary obligations of the role.
          </li>
        </ul>

        <h2 className={h2Class}>Fiduciary vs. advisory roles</h2>
        <p>
          Board members have fiduciary duties: the duty of care (making
          informed decisions) and the duty of loyalty (acting in the
          company&apos;s best interest, not their own). This is distinct from
          an advisory role, where the advisor offers suggestions without legal
          obligation.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Fiduciary obligations apply to all board members:</strong>{" "}
            investor representatives must act in the company&apos;s interest,
            not solely in their fund&apos;s interest. This can create tension
            when an investor wants a quick exit but the business would benefit
            from a longer hold.
          </li>
          <li>
            <strong>Minutes and documentation matter:</strong> board minutes
            should accurately reflect discussions and decisions. In a dispute,
            minutes are the primary evidence of whether the board exercised its
            fiduciary duties.
          </li>
          <li>
            <strong>Conflicts of interest:</strong> board members should
            disclose any conflicts (personal investments in competitors,
            relationships with potential acquirers) and recuse themselves from
            relevant decisions.
          </li>
        </ul>

        <h2 className={h2Class}>Managing investor expectations</h2>
        <p>
          Search fund investors expect to see a 3&ndash;5x return on their
          investment over a five-to-seven year hold period, with a target IRR
          of 25&ndash;35%. Managing these expectations requires transparent
          communication and realistic goal-setting.
        </p>
        <ul className={ulClass}>
          <li>
            Set realistic expectations during the acquisition phase. If the
            business has 5% organic growth potential, do not present a plan
            that assumes 20% growth.
          </li>
          <li>
            Provide a clear value creation plan: how will you grow EBITDA
            (organic growth, margin improvement, add-ons), and what exit
            multiple is realistic?
          </li>
          <li>
            Report honestly on progress. If you are behind plan, explain why
            and what you are doing about it. Investors can handle bad news;
            they cannot handle surprises.
          </li>
          <li>
            Align on exit timing early. Some investors have fund life
            constraints that create pressure to exit within a specific window.
            Understanding these constraints helps avoid conflicts later.
          </li>
        </ul>

        <h2 className={h2Class}>When board dynamics go wrong</h2>
        <p>
          Dysfunctional boards can derail even the best-performing companies.
          Common problems and how to address them:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Micromanagement:</strong> board members who insert
            themselves into operational decisions. Address by establishing
            clear decision boundaries and redirecting conversations from
            tactics to strategy during meetings.
          </li>
          <li>
            <strong>Conflicting investor agendas:</strong> one investor wants
            to sell now while another wants to hold and grow. The CEO must
            facilitate alignment, often through individual conversations
            outside of board meetings.
          </li>
          <li>
            <strong>Absent board members:</strong> directors who miss meetings,
            do not read the board package, or are unavailable between meetings.
            Address directly; if the problem persists, propose replacing the
            board member.
          </li>
          <li>
            <strong>CEO-board trust breakdown:</strong> if the board loses
            confidence in the CEO, the situation deteriorates quickly. The best
            defense is proactive transparency, consistent performance, and
            regular individual relationship building.
          </li>
        </ul>

        <h2 className={h2Class}>Board evolution as the company grows</h2>
        <p>
          The board that is right for a $2M EBITDA platform acquisition is
          not the same board you need at $10M EBITDA preparing for exit. Plan
          for the board to evolve alongside the business.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>$1M&ndash;$3M EBITDA:</strong> three-member board (CEO
            plus two investors). Focus on stabilization, operational
            improvement, and building management depth.
          </li>
          <li>
            <strong>$3M&ndash;$6M EBITDA:</strong> add an independent director
            with industry expertise. Begin discussing add-on acquisitions and
            long-term strategic direction.
          </li>
          <li>
            <strong>$6M&ndash;$10M+ EBITDA:</strong> expand to five members if
            needed. Add a second independent director or a board member with
            M&amp;A or exit experience. Begin formal exit planning discussions.
          </li>
        </ul>

        <p>
          Effective board governance is not about control &mdash; it is about
          creating a trusted partnership between the CEO and investors that
          drives better decisions, faster growth, and ultimately stronger
          returns. The CEOs who manage their boards most effectively are those
          who treat board members as partners rather than overseers, communicate
          proactively rather than reactively, and build the kind of trust that
          allows for honest, productive dialogue about the most important
          strategic questions facing the business.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How often should a search fund board meet?</h3>
        <p>
          Board meeting frequency should match the stage and risk profile of the business. According to Stanford GSB&rsquo;s research on search fund governance, the recommended cadence is monthly meetings during the first year post-acquisition (the highest-risk period, particularly during the{" "}
          <Link href="/learn/management-transition" className="text-apple-accent hover:underline">management transition</Link>), transitioning to quarterly meetings in year two and beyond. Monthly meetings in year one ensure the board stays close to the business and can provide timely guidance on critical decisions &mdash; pricing, key hires, customer retention, and operational challenges. During crisis periods (major customer loss, key employee departure, financial underperformance), boards should return to monthly or even biweekly cadence regardless of the company&rsquo;s stage.
        </p>

        <h3 className={h3Class}>What decision authority does the CEO have versus the board?</h3>
        <p>
          Decision boundaries should be established early and documented clearly. According to the National Association of Corporate Directors (NACD), the standard framework for search fund companies gives the CEO unilateral authority over hiring below the VP level, capital expenditures under $50K, and operational decisions within the approved budget. Board notification is required for senior management changes and capex of $50K&ndash;$200K. Board approval is required for the annual budget, CEO compensation changes, acquisitions or divestitures, capital expenditures above $200K, new debt or equity issuance, and related-party transactions. The specific thresholds should be tailored to the company&rsquo;s size and documented in the shareholders&rsquo; agreement or{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">corporate governance documents</Link>.
        </p>

        <h3 className={h3Class}>When should I add an independent director to the board?</h3>
        <p>
          An independent director adds the most value when the business reaches $3M+ EBITDA and strategic decisions become more complex. According to IESE Business School&rsquo;s research on search fund governance, boards with at least one independent director report higher CEO satisfaction scores and better alignment on exit timing. Independent directors are particularly valuable when investor board members lack industry-specific expertise, when CEO-investor dynamics become strained, when the company is evaluating add-on acquisitions, or when preparing for exit. Compensation for independent directors in search fund companies typically ranges from $5K&ndash;$15K per year in cash or 0.25&ndash;1.0% equity, well below public company standards &mdash; the primary motivation should be genuine interest in the business and the CEO&rsquo;s success.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford Graduate School of Business &mdash; <em>Search Fund Study: Selected Observations</em>, 2024 edition. Data on board composition, meeting cadence, and governance practices across search fund portfolio companies.</li>
          <li>National Association of Corporate Directors (NACD) &mdash; <em>Private Company Governance Guidelines</em>. Standards for board structure, decision authority frameworks, and fiduciary responsibilities in privately held companies.</li>
          <li>IESE Business School &mdash; <em>International Search Fund Study</em>, 2024. Research on board governance, independent director impact, and CEO-board dynamics in European and global search fund acquisitions.</li>
        </ul>
      </div>
    </article>
  );
}
