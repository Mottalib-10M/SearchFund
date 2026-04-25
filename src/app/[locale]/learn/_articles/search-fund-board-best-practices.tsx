import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SearchFundBoardBestPracticesArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund Board Best Practices</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          A well-functioning board of directors is one of the most powerful
          assets a search fund CEO can have, and one of the most
          underutilized. Search fund boards occupy a distinctive middle
          ground: investors hold the majority of seats, the CEO is a
          first-time operator, and the stakes are intensely personal for
          everyone involved. Getting the board relationship right
          accelerates decision-making, unlocks investor networks, and
          builds trust that sustains you through the inevitable rough
          patches. Getting it wrong creates friction, erodes confidence,
          and can ultimately cost you the CEO role.
        </p>

        <h2 className={h2Class}>Board composition: who belongs at the table</h2>
        <p>
          Board composition is typically negotiated during the acquisition
          enshrined in the shareholders&rsquo; agreement alongside{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">cap table and equity terms</Link>.
          Negotiating intelligently requires understanding what makes a
          board effective, not just what satisfies governance requirements.
        </p>

        <h3 className={h3Class}>Investor seats</h3>
        <p>
          In a traditional search fund with ten to twenty investors, only
          two or three take board seats, typically the lead investors
          who committed the largest checks. The best investor directors
          bring operating experience in addition to financial acumen.
          Advocate for investor directors who have managed a P&amp;L rather
          than those who have only managed a portfolio.
        </p>
        <ul className={ulClass}>
          <li>Prioritize investors with direct operating experience, ideally in your industry or an adjacent one.</li>
          <li>Assess availability honestly. An investor managing thirty portfolio companies will not have time to take your calls between meetings.</li>
          <li>Look for investors who have served on other search fund boards and understand the dynamics of a first-time CEO leading a newly-acquired SME.</li>
          <li>Consider chemistry. You will work with these people for five to seven years. Mutual respect and trust are prerequisites, not aspirations.</li>
        </ul>

        <h3 className={h3Class}>Independent directors</h3>
        <p>
          An independent director, someone unaffiliated with any
          investor group, brings objectivity, industry-specific
          expertise, and a perspective unclouded by return expectations.
          Many search fund CEOs recruit independent directors from their{" "}
          <Link href="/learn/advisory-board" className="text-apple-accent hover:underline">advisory board</Link>,
          elevating an advisor who has demonstrated value into a formal
          governance role. Independent directors are especially valuable
          when CEO-investor dynamics become strained: they serve as a
          bridge between the CEO&rsquo;s operational reality and
          investors&rsquo; financial expectations. Compensation typically
          ranges from $5K-$15K annually in cash or a small equity
          grant of 0.25%-1.0%.
        </p>

        <h3 className={h3Class}>Industry experts</h3>
        <p>
          Consider whether your board needs a member with specific industry
          or functional expertise that no current member provides. If you
          acquired a healthcare services company and none of your investor
          directors have healthcare experience, adding a board member who
          understands regulatory compliance, reimbursement dynamics, and
          clinical operations can be transformative. The same principle
          applies to technology, manufacturing, or any industry with
          specialized knowledge requirements.
        </p>

        <h2 className={h2Class}>Board meeting cadence and structure</h2>
        <p>
          Meeting cadence should match the stage and risk profile of the
          business. More frequent meetings during the critical{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">first 100 days</Link>{" "}
          provide tighter oversight; less frequent meetings later signal
          trust and allow more operational autonomy.
        </p>

        <h3 className={h3Class}>Recommended cadence</h3>
        <ul className={ulClass}>
          <li><strong>Year one post-acquisition:</strong> monthly board meetings. The first year is the riskiest, management transition, employee retention, and operational stabilization all require close oversight.</li>
          <li><strong>Year two and beyond:</strong> quarterly board meetings supplemented by monthly written investor updates and ad hoc calls as needed.</li>
          <li><strong>Crisis periods:</strong> return to monthly or biweekly meetings during material events, key customer loss, acquisition integration, financial underperformance, or exit preparation.</li>
        </ul>

        <h3 className={h3Class}>Meeting structure (2-3 hours)</h3>
        <p>
          A common mistake is spending 80% of the meeting reviewing
          financials and 20% on strategy. The best boards flip this ratio.
        </p>
        <ol className={olClass}>
          <li><strong>Consent agenda (5 min):</strong> approve prior meeting minutes, routine resolutions, and committee reports distributed in advance.</li>
          <li><strong>CEO narrative update (20-30 min):</strong> high-level overview of performance, key wins, challenges, and priorities. Tell a story, do not recite numbers.</li>
          <li><strong>Financial review (20-30 min):</strong> walk through key metrics, budget variances, and cash flow. Focus on exceptions and trends, not line-by-line details.</li>
          <li><strong>Strategic deep dive (45-60 min):</strong> the heart of the meeting. One strategic topic, pricing strategy, add-on evaluation, technology investment, organizational design, or exit planning. Rotate each meeting.</li>
          <li><strong>Decision items (15-20 min):</strong> specific decisions framed clearly: situation, options, recommendation.</li>
          <li><strong>Executive session (15 min):</strong> board members meet without the CEO. Standard practice, not adversarial.</li>
        </ol>

        <h2 className={h2Class}>Board materials and deck best practices</h2>
        <p>
          Your board package is the foundation of a productive meeting.
          Distribute it three to five business days in advance so directors
          arrive prepared with thoughtful questions.
        </p>
        <ul className={ulClass}>
          <li><strong>Financial statements:</strong> monthly P&amp;L, balance sheet, and cash flow with budget variances. Include trailing twelve-month trends and year-over-year comparisons.</li>
          <li><strong>KPI dashboard:</strong> five to ten key metrics, both financial (revenue growth, gross margin, EBITDA margin, cash conversion) and operational (customer retention, employee turnover, NPS, pipeline).</li>
          <li><strong>CEO narrative memo:</strong> a two-to-three page memo summarizing the state of the business, key developments, and the CEO&rsquo;s assessment of risks and opportunities.</li>
          <li><strong>Deep dive materials:</strong> background reading and analysis for the strategic topic, including data, options, and your preliminary recommendation.</li>
          <li><strong>Decision items:</strong> clearly framed proposals with context, alternatives, and the CEO&rsquo;s recommendation. Directors should never make decisions without adequate preparation time.</li>
        </ul>
        <p>
          Keep slides concise, no more than 15-20 for the
          entire meeting. Lead with the headline on each slide. Use
          appendix slides for detailed backup and reference them when
          questions arise. Never circulate the deck the morning of the
          meeting.
        </p>

        <h2 className={h2Class}>Managing board dynamics</h2>
        <p>
          You are a first-time CEO reporting to investors who funded your
          search, approved the acquisition, and hold the majority of
          equity. Navigating this power dynamic requires transparency,
          political awareness, and proactive relationship management.
        </p>

        <h3 className={h3Class}>The no-surprises rule</h3>
        <p>
          The cardinal rule of{" "}
          <Link href="/learn/investor-relations" className="text-apple-accent hover:underline">investor relations</Link>{" "}
          applies doubly to board management. If something material happens
         , positive or negative, communicate it immediately,
          not at the next meeting. Bad news does not improve with age. A
          director who learns about a significant problem for the first
          time in a board meeting will feel blindsided, and blindsided
          directors lose trust rapidly.
        </p>

        <h3 className={h3Class}>Building individual relationships</h3>
        <p>
          Do not rely solely on board meetings for communication. Call each
          board member individually once a month between meetings. Share
          updates, ask for advice, and build the personal relationship.
          These calls keep directors informed, give you access to their
          expertise, and ensure that when you need support on a contentious
          issue you have already laid the groundwork. Board meetings should
          contain no surprises precisely because you have socialized every
          important topic one-on-one.
        </p>

        <h3 className={h3Class}>Framing decisions effectively</h3>
        <p>
          Come to the board with a clear recommendation, not an open-ended
          question. &ldquo;I recommend we invest $200K in a new ERP system
          because our current system cannot support post-acquisition
          volume&rdquo; is far more effective than &ldquo;What should we do
          about our technology stack?&rdquo; Directors want to
          pressure-test your thinking, not do your thinking for you.
        </p>

        <h2 className={h2Class}>Strategic vs. operational oversight</h2>
        <p>
          A common source of tension is the boundary between strategic
          oversight (the board&rsquo;s domain) and operational management
          (the CEO&rsquo;s domain). When directors cross from strategy into
          operations, questioning individual hiring decisions or
          inserting themselves into customer relationships, the CEO
          feels micromanaged and the board becomes a drag on execution.
        </p>
        <p>
          Define clear decision-making authority early, ideally documented
          in the shareholders&rsquo; agreement:
        </p>
        <ul className={ulClass}>
          <li><strong>CEO authority:</strong> hiring and firing below VP level, capital expenditures under $50K, operational decisions within approved budget, pricing within defined bands.</li>
          <li><strong>Board notification:</strong> senior management changes, capex of $50K-$200K, customer or vendor concentration changes, competitive threats, material litigation.</li>
          <li><strong>Board approval required:</strong> annual budget, CEO compensation, acquisitions or divestitures, capex above $200K, new debt or equity issuance, changes to corporate structure,{" "}
            <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">equity grants</Link>{" "}
            or option pool changes.</li>
        </ul>
        <p>
          If a director drifts into operational territory, redirect
          diplomatically: acknowledge the insight, then steer back to the
          strategic question at hand. Consistently doing this trains
          directors to engage at the right altitude.
        </p>

        <h2 className={h2Class}>Board committees</h2>
        <p>
          Most search fund companies are too small for formal committees
          early on. As the business grows past $5M EBITDA or approaches
          exit, committees improve governance quality.
        </p>
        <ul className={ulClass}>
          <li><strong>Compensation committee:</strong> reviews CEO compensation, bonus structures, and equity incentive plans. Should consist of investor directors only. Even informally, designating two directors for compensation discussions keeps them structured and fair.</li>
          <li><strong>Audit committee:</strong> oversees financial reporting, internal controls, and external auditor relationships. More relevant as complexity increases or when audited financials are needed for exit.</li>
          <li><strong>M&amp;A committee:</strong> evaluates add-on acquisition opportunities. A dedicated committee accelerates deal evaluation without requiring full-board review of early-stage targets.</li>
          <li><strong>Exit committee:</strong> formed when actively exploring exit options. Reviews banker selection, manages the sale process, and ensures alignment on timing and valuation expectations.</li>
        </ul>

        <h2 className={h2Class}>Executive sessions</h2>
        <p>
          An executive session is a portion of the board meeting where
          directors meet without the CEO. Every meeting should include one
          typically 10-15 minutes at the end. Its absence
          signals naivety about{" "}
          <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board governance</Link>{" "}
          or a CEO uncomfortable with candid evaluation.
        </p>
        <ul className={ulClass}>
          <li><strong>Purpose:</strong> discuss CEO performance, compensation, succession planning, and concerns about business or leadership without the CEO in the room.</li>
          <li><strong>Feedback loop:</strong> after the session, the board chair should debrief the CEO on actionable feedback. Without this loop, the CEO is left guessing, and guessing erodes trust.</li>
          <li><strong>Do not take it personally:</strong> reframe executive sessions as an opportunity. They give your board a safe space to align, which produces clearer guidance for you.</li>
        </ul>

        <h2 className={h2Class}>Working with your board chair</h2>
        <p>
          The board chair is your most important governance relationship.
          In most search fund structures, the chair is the lead investor or
          the most experienced board member. They set the agenda, moderate
          discussions, manage director dynamics, and serve as your primary
          contact between meetings.
        </p>
        <ul className={ulClass}>
          <li><strong>Regular check-ins:</strong> speak with your chair weekly or biweekly, not just before board meetings. Test ideas and get early reads on how the board might react to proposals.</li>
          <li><strong>Co-create the agenda:</strong> develop each meeting agenda collaboratively. The chair knows what topics other directors care about and can help you prioritize discussion time.</li>
          <li><strong>Use their network:</strong> experienced chairs have deep networks of potential customers, hires, and acquisition targets. Be explicit about what introductions would be valuable.</li>
          <li><strong>Accept coaching:</strong> the best chairs function as executive coaches. Embrace their candid feedback on your leadership, communication style, and strategic thinking.</li>
        </ul>
        <p>
          If the chair relationship is not working, too hands-off or
          too controlling, address it directly. A dysfunctional
          CEO-chair relationship poisons the entire board dynamic.
        </p>

        <h2 className={h2Class}>Common mistakes new CEOs make with boards</h2>
        <p>
          First-time CEOs tend to make predictable mistakes. The board
          members who{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">invested in your search fund</Link>{" "}
          expect problems, they do not expect to be kept in the dark
          about them.
        </p>

        <h3 className={h3Class}>Treating the board as an audience</h3>
        <p>
          Many new CEOs approach meetings as presentations, polished
          decks, rehearsed delivery, focus on impressing rather than
          engaging. The result is a one-way information dump that wastes
          the board&rsquo;s collective expertise. The best CEOs present
          problems alongside successes, ask specific questions, and create
          space for genuine debate.
        </p>

        <h3 className={h3Class}>Hiding bad news</h3>
        <p>
          The instinct to downplay problems is understandable but
          destructive. When bad news surfaces, and it always does
          the cover-up damages trust far more than the original
          problem. Report honestly; investors can handle setbacks.
        </p>

        <h3 className={h3Class}>Skipping executive sessions</h3>
        <p>
          Some CEOs treat executive sessions as an afterthought, leaving no
          time for them. Others avoid them entirely. Both are mistakes.
          Proactively schedule them and use the pre-meeting chair
          conversation to anticipate topics.
        </p>

        <h3 className={h3Class}>Ignoring dynamics between meetings</h3>
        <p>
          Board governance does not happen four times a year in a
          conference room. It happens continuously through individual
          relationships and the trust you build between meetings. CEOs who
          engage directors only at formal meetings miss the chance to
          surface concerns early and make meetings productive rather than
          performative.
        </p>

        <h3 className={h3Class}>Resisting feedback</h3>
        <p>
          First-time CEOs often interpret pushback as lack of confidence
          rather than constructive challenge. Directors who push back are
          engaged directors, far preferable to those who nod along
          and lose confidence quietly. Respond with data and logic,
          acknowledge valid concerns, and demonstrate you can incorporate
          feedback without losing direction.
        </p>

        <h2 className={h2Class}>Evolving governance as the company grows</h2>
        <p>
          The governance structure for a $2M EBITDA platform acquisition is
          not what you need at $10M EBITDA. Plan for the board to evolve.
        </p>
        <ul className={ulClass}>
          <li><strong>$1M-$3M EBITDA:</strong> three-member board (CEO plus two investors). Monthly meetings, informal governance, minimal committee structure.</li>
          <li><strong>$3M-$6M EBITDA:</strong> add an independent director with industry expertise. Formalize a compensation committee. Move to quarterly meetings with strong written updates.</li>
          <li><strong>$6M-$10M+ EBITDA:</strong> expand to five members. Add a second independent or a director with M&amp;A experience. Formalize audit and exit committees.</li>
        </ul>

        <p>
          Effective board governance is not about compliance or control
          it is about building a trusted partnership that produces
          better decisions, faster growth, and stronger returns. The search
          fund CEOs who manage their boards most effectively treat directors
          as partners rather than overseers, communicate proactively rather
          than reactively, and invest in the individual relationships that
          transform a governance obligation into a genuine strategic
          advantage. Your board is not a hurdle to clear, it is a
          resource to deploy.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How many board members should a search fund company have, and how does this change over time?</h3>
        <p>
          At the platform acquisition stage ($1M-$3M EBITDA), most search fund companies operate with a three-member board: the CEO and two investor directors who represent the lead investors. According to the{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">Stanford 2024 Search Fund Study</Link>, this lean structure works well during the critical first year when monthly meetings and informal governance are appropriate. As the company grows past $3M EBITDA, adding an independent director with industry expertise improves decision quality and provides an objective voice. At $6M-$10M+ EBITDA, expanding to five members and formalizing audit, compensation, and exit committees aligns governance with the complexity of a larger organization. The Stanford data also shows that approximately 25-30% of search fund CEOs are eventually replaced by their boards, making the composition and dynamics of the board a critical factor in the CEO&rsquo;s own tenure.
        </p>

        <h3 className={h3Class}>What should I do if my board is micromanaging operational decisions?</h3>
        <p>
          Board micromanagement is one of the most common friction points in search fund governance. The root cause is typically unclear decision-making authority. The most effective solution is to proactively define and document three tiers of authority in the shareholders&rsquo; agreement or a board charter: decisions the CEO can make unilaterally (hiring below VP level, capital expenditures under $50K, pricing within defined bands), decisions requiring board notification (senior management changes, capex of $50K-$200K), and decisions requiring formal board approval (annual budget, acquisitions, new debt or equity). When a director drifts into operational territory during a meeting, redirect diplomatically by acknowledging the insight and steering back to the strategic question. Between meetings, build individual relationships with each director through monthly one-on-one calls, directors who feel well-informed are far less likely to micromanage during formal sessions. For more on managing{" "}
          <Link href="/learn/investor-relations" className="text-apple-accent hover:underline">investor relations</Link>{" "}
          effectively, see our dedicated guide.
        </p>

        <h3 className={h3Class}>How should I handle the executive session where the board meets without me?</h3>
        <p>
          Executive sessions, where directors meet without the CEO, are standard governance practice, not a sign of distrust. Every board meeting should include a 10-15 minute executive session at the end. According to governance best practices documented by the National Association of Corporate Directors (NACD), the executive session serves three purposes: discussing CEO performance and compensation, airing concerns that directors may not feel comfortable raising in front of management, and aligning the board on strategic priorities. The critical element is the feedback loop: after each session, the board chair should debrief you on actionable feedback. Without this loop, you are left guessing, which erodes trust. Proactively schedule executive sessions, prepare for them by pre-socializing important topics with your chair, and reframe them as an opportunity for your board to align, which produces clearer, more consistent guidance for you as CEO.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>
            <a href="https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              Stanford Graduate School of Business, 2024 Search Fund Study
            </a>
          </li>
          <li>
            <a href="https://www.nacdonline.org/insights/publications" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              National Association of Corporate Directors (NACD), Board Governance Best Practices
            </a>
          </li>
          <li>
            <a href="https://www.hbs.edu/faculty/Pages/item.aspx?num=41308" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              Harvard Business School, Search Fund Primer (Board Governance Section)
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
