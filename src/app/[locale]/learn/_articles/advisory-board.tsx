import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AdvisoryBoardArticle() {
  return (
    <article>
      <h1 className={h1Class}>Building Your Advisory Board & Support Network</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Becoming CEO through a search fund acquisition means stepping into
          a role with enormous responsibility and - especially in the first
          year - limited experience running that specific business. An
          advisory board bridges that gap. Unlike a formal{" "}
          <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board of directors</Link>{" "}
          (which typically consists of your investors and has fiduciary and
          governance responsibilities), an advisory board is a handpicked
          group of experts who provide counsel, make introductions, and
          serve as a sounding board for the decisions that keep you up at
          night. This guide explains who to recruit, how to compensate
          them, and how to build the broader support network that
          distinguishes the most successful search fund operators.
        </p>

        <h2 className={h2Class}>Why advisory boards matter</h2>
        <p>
          Search fund CEOs face a unique set of challenges. They are
          typically first-time CEOs - especially during the critical{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">first 100 days</Link>{" "}
          - often operating in an industry they
          did not come from, managing a team that is skeptical of the new
          owner, and managing{" "}
          <Link href="/learn/investor-relations" className="text-apple-accent hover:underline">investor relations</Link>{" "}
          with high expectations. An advisory board helps in several concrete ways:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Domain expertise:</strong> Advisors who know the
            industry can help you understand competitive dynamics, pricing
            norms, regulatory risks, and customer expectations - knowledge
            that would take years to develop on your own.
          </li>
          <li>
            <strong>Operational guidance:</strong> Former operators who have
            run similar-sized businesses can advise on hiring, compensation
            structures, vendor negotiations, and the hundred small
            decisions that collectively determine operational performance.
          </li>
          <li>
            <strong>Network access:</strong> Well-connected advisors can
            introduce you to potential customers, strategic partners,
            acquisition targets, and talent - dramatically accelerating
            your growth.
          </li>
          <li>
            <strong>Emotional support:</strong> The CEO role is isolating.
            Having trusted advisors who you can call when facing a
            difficult personnel decision or a business crisis is
            invaluable for your mental health and decision-making quality.
          </li>
        </ul>

        <h2 className={h2Class}>Who to recruit</h2>
        <p>
          The best advisory boards are small (three to five people) and
          deliberately diverse in expertise. Aim to cover these four
          categories:
        </p>

        <h3 className={h3Class}>Industry experts</h3>
        <p>
          Recruit at least one person who has deep experience in your
          acquired company&apos;s industry. This might be a retired
          executive from a larger competitor, a trade association leader,
          or a consultant who specializes in the sector. They should
          understand the market dynamics, customer buying behavior,
          regulatory environment, and technology trends that will shape
          your business over the next five to ten years.
        </p>

        <h3 className={h3Class}>Ex-operators and former CEOs</h3>
        <p>
          Former CEOs of similar-sized businesses - especially those
          who have gone through a transition or turnaround - bring
          practical wisdom about managing people, building culture,
          and managing the inevitable crises of running a company.
          Ex-searchers who have completed the full cycle (search,
          acquisition, operation, exit) are particularly valuable
          because they understand the search fund model&apos;s specific
          dynamics and investor expectations.
        </p>

        <h3 className={h3Class}>Functional specialists</h3>
        <p>
          Depending on your own background and the business&apos;s needs,
          you may want advisors with deep expertise in specific
          functional areas. A CFO-level finance expert can help you
          build financial reporting systems and manage banking
          relationships. A sales and marketing leader can advise on
          go-to-market strategy and CRM implementation. A technology
          advisor can guide digital transformation or IT infrastructure
          decisions. Choose the function where your personal knowledge
          gap is largest.
        </p>

        <h3 className={h3Class}>Local business leaders</h3>
        <p>
          If you relocated for your acquisition - common in ETA - a
          well-connected local business leader can be invaluable. They
          can introduce you to the local business community, help you
          recruit talent, manage municipal regulations, and build
          the relationships that matter in smaller markets where
          business is often done on reputation and personal trust.
        </p>

        <h2 className={h2Class}>Composition of an ideal advisory board</h2>
        <p>
          The most effective advisory boards are deliberately constructed to
          cover a specific set of needs. Rather than recruiting advisors
          opportunistically based on who you happen to know, think about
          the advisory board as a portfolio of complementary skills. A
          well-composed board of three to five members typically includes
          the following roles.
        </p>

        <h3 className={h3Class}>Industry domain expert</h3>
        <p>
          This person has spent a career in your acquired company&apos;s
          industry and understands its competitive dynamics at a granular
          level. They can tell you which competitors are gaining share and
          why, which customer segments are underserved, how pricing typically
          evolves, and what regulatory changes are on the horizon. Ideally,
          this is a retired executive or senior consultant who has both the
          time and the desire to stay connected to the industry without the
          burden of day-to-day operations. Their network within the industry
          is often as valuable as their knowledge - they can introduce you
          to potential customers, suppliers, and even acquisition targets
          for add-on deals.
        </p>

        <h3 className={h3Class}>Financial and accounting advisor</h3>
        <p>
          A CFO-level finance professional or experienced CPA brings
          discipline to your financial reporting, cash management, and
          strategic planning. In the early months of ownership, you will be
          rebuilding financial systems, establishing KPI dashboards, and
          managing banking relationships. A financial advisor who has done
          this before - particularly in small and mid-sized businesses where
          the accounting infrastructure is often rudimentary - can save you
          months of trial and error. They can also help you prepare for
          board meetings with investors, ensuring your financial narrative
          is clear, accurate, and confidence-inspiring.
        </p>

        <h3 className={h3Class}>Legal counsel</h3>
        <p>
          While you will retain outside counsel for major transactions, having
          an attorney on your advisory board provides ongoing guidance on the
          steady stream of legal questions that arise in running a business:
          employment law, contract disputes, intellectual property protection,
          regulatory compliance, and customer or vendor conflicts. A
          business-oriented attorney - someone who sees legal advice as a
          tool for enabling business outcomes rather than simply avoiding
          risk - is far more valuable than a purely defensive legal mind.
        </p>

        <h3 className={h3Class}>Former searcher or operator</h3>
        <p>
          Perhaps the most valuable advisory board member is someone who has
          walked the exact path you are walking. A former search fund CEO
          who has completed the full cycle - fundraising, searching,
          acquiring, operating, and ideally exiting - understands the model&apos;s
          unique dynamics in a way no other advisor can. They know what
          investor expectations feel like from the inside, how to manage the
          psychological transition from searcher to operator, and which
          operational levers actually move the needle in the first year.
          They have made mistakes you can avoid and discovered shortcuts
          you can replicate.
        </p>

        <h2 className={h2Class}>Advisory board vs. board of directors</h2>
        <p>
          Searcher-CEOs often confuse advisory boards with boards of directors,
          but the distinctions are significant and have real legal and
          governance implications.
        </p>
        <p>
          A <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board of directors</Link> is
          a formal governance body with fiduciary duties to the company and
          its shareholders. Directors have a legal obligation to act in the
          best interest of the company, exercise reasonable care in their
          decision-making, and avoid conflicts of interest. In a typical
          search fund structure, the board of directors consists primarily of
          investor representatives who have governance rights specified in
          the shareholders&apos; agreement - including approval rights over
          major capital expenditures, executive hiring and firing, debt
          incurrence, and distributions. Directors carry personal liability
          exposure (mitigated by D&amp;O insurance) and are subject to formal
          governance standards.
        </p>
        <p>
          An advisory board, by contrast, has no formal governance authority.
          Advisors do not vote on company decisions, do not have fiduciary
          duties, and do not bear personal liability for company outcomes.
          Their role is purely consultative. This lack of formality is
          actually a strength - it allows advisors to speak freely, offer
          candid opinions, and provide guidance without the political
          dynamics that can constrain formal board discussions. Many
          searcher-CEOs find that they are more honest and vulnerable with
          their advisory board than with their formal board precisely
          because the stakes are lower.
        </p>

        <h2 className={h2Class}>Compensating advisors effectively</h2>
        <p>
          Getting compensation right is essential to maintaining advisor
          engagement over time. Underpaying advisors leads to disengagement;
          overpaying creates unnecessary dilution or cash burden. The
          right structure depends on the advisor&apos;s profile, your
          company&apos;s financial position, and the expected time commitment.
        </p>

        <h3 className={h3Class}>Equity compensation</h3>
        <p>
          The most common approach for search fund advisory boards is equity
          grants. Typical allocations range from 0.25% to 0.5% per advisor,
          with total advisory board equity rarely exceeding 1.5% to 2.0% of
          the company. Equity should vest over two to four years with
          continued service to ensure sustained engagement. Some searcher-CEOs
          use cliff vesting (nothing vests until the first anniversary) while
          others use monthly or quarterly pro-rata vesting. Equity compensation
          aligns advisors&apos; interests with long-term value creation and
          requires no cash outlay - an important consideration for
          newly-acquired businesses focused on cash flow management.
        </p>

        <h3 className={h3Class}>Fee-for-service and cash retainers</h3>
        <p>
          Some advisors prefer or require cash compensation, particularly
          those whose time has high direct opportunity cost - active
          consultants, practicing attorneys, or functional specialists who
          advise multiple companies. Cash retainers typically range from
          $2,000 to $10,000 per year, or $500 to $2,000 per meeting.
          Fee-for-service arrangements work well for episodic engagements
          where the advisor is called upon for specific projects rather
          than ongoing counsel.
        </p>

        <h3 className={h3Class}>Informal and unpaid arrangements</h3>
        <p>
          Not all advisory relationships require formal compensation. Many
          experienced operators, former searchers, and mentors are willing
          to advise informally because they enjoy the intellectual
          engagement, want to give back to the ETA community, or have a
          personal relationship with the searcher. These informal arrangements
          can be highly effective, but they also carry a risk: without a
          formal commitment, the advisor&apos;s availability may be inconsistent.
          If you rely on unpaid advisors, be especially respectful of their
          time, prepare thoroughly for every interaction, and find ways to
          reciprocate value - introductions, recognition, or assistance
          with their own projects.
        </p>

        <h2 className={h2Class}>Getting real value from your advisors</h2>
        <p>
          Having an advisory board on paper is meaningless if you do not
          extract genuine value from it. The most common failure mode is
          assembling impressive advisors and then failing to engage them
          effectively. The following practices distinguish searcher-CEOs who
          get transformative value from their advisory boards from those who
          merely check the box.
        </p>

        <h3 className={h3Class}>Structured check-ins and meeting cadence</h3>
        <p>
          Establish a regular meeting cadence - quarterly is typical for
          group meetings, with ad hoc one-on-one calls as needed. Send a
          written agenda at least one week before each meeting, including
          financial performance data, key decisions you are facing, and
          specific questions you want the group to address. Advisors cannot
          help you if they do not know what is happening in the business.
          After each meeting, circulate a brief summary of action items and
          follow up on any commitments advisors made.
        </p>

        <h3 className={h3Class}>Making specific asks</h3>
        <p>
          Vague requests like &quot;any thoughts on our growth
          strategy?&quot; yield vague responses. Instead, frame specific,
          actionable questions: &quot;We are considering expanding into
          adjacent market X. Our analysis shows Y total addressable market
          with Z incumbent competitors. What am I missing?&quot; or
          &quot;I need to replace my VP of Sales. What does great look like
          for this role in our industry, and do you know anyone?&quot;
          Specific asks produce specific value and demonstrate that you
          value the advisor&apos;s expertise enough to have done your homework
          before asking for their time.
        </p>

        <h3 className={h3Class}>Using their networks</h3>
        <p>
          One of the highest-value contributions advisors make is
          introductions - to potential customers, talent, partners, and
          add-on acquisition targets. But most advisors will not proactively
          offer introductions unless you ask explicitly. Maintain a running
          list of the types of connections you are seeking and share it with
          your advisory board regularly. When an advisor makes an
          introduction, follow up promptly and report back on the outcome.
          Nothing motivates an advisor to make more introductions than
          hearing that their last one was productive.
        </p>

        <h2 className={h2Class}>When to formalize your advisory board</h2>
        <p>
          Timing matters. During the search phase, most advisors are
          engaged informally - a mentor you call for guidance, an industry
          expert you consult before submitting an LOI, a former searcher
          who reviews your investor updates. Formalizing the advisory board
          too early can feel premature and presumptuous.
        </p>
        <p>
          The natural inflection point for formalization is immediately
          after closing the acquisition. At that point, the specific needs
          of the business become clear, and you can recruit advisors who
          are directly relevant to those needs. Formalize the arrangement
          with a simple advisory agreement that outlines expected time
          commitment (typically four to six meetings per year plus ad hoc
          calls), compensation terms, confidentiality obligations, and term
          length (usually two to three years with annual renewal options).
        </p>
        <p>
          As the business matures and potentially grows through add-on
          acquisitions, you may transition some advisory board members to
          the formal board of directors - particularly if they bring
          governance experience and investor credibility. This transition
          should be deliberate and discussed with your investor board
          members to ensure alignment on governance structure and
          director qualifications.
        </p>

        <h2 className={h2Class}>Compensation models</h2>
        <p>
          Advisory board compensation varies widely, but the key
          principle is that advisors should have meaningful enough
          incentives to stay engaged without creating governance
          complications or excessive dilution.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Equity grants:</strong> The most common compensation
            for search fund advisory boards. Typical grants range from
            0.25% to 1.0% of the company&apos;s equity, vesting over
            two to four years with continued service. Equity aligns
            advisors&apos; interests with long-term value creation and
            does not require cash outlay.
          </li>
          <li>
            <strong>Cash retainers:</strong> Some advisors prefer (or
            require) cash compensation. Typical retainers for SME
            advisory boards range from $2,000 to $10,000 per year,
            depending on the time commitment and the advisor&apos;s
            seniority. Cash retainers are more common for industry
            experts and functional specialists who may not want equity
            exposure.
          </li>
          <li>
            <strong>Hybrid models:</strong> A combination of a modest
            cash retainer plus a smaller equity grant. This approach
            provides immediate compensation while still creating
            long-term alignment.
          </li>
          <li>
            <strong>Per-meeting fees:</strong> Some advisors are
            compensated on a per-meeting basis, typically $500 to
            $2,000 per meeting. This works well for advisors whose
            involvement is more episodic than ongoing.
          </li>
        </ul>

        <h2 className={h2Class}>Formal vs. informal advisory boards</h2>
        <p>
          Advisory boards exist on a spectrum from highly formal to
          completely informal. The right structure depends on your
          needs and the preferences of your advisors.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Formal advisory boards</strong> have a defined
            charter, scheduled meetings (typically quarterly), written
            agendas, and an advisory agreement that outlines
            responsibilities, compensation, confidentiality obligations,
            and term. Formal boards work best when you need structured,
            consistent input and when advisors expect professional-grade
            governance.
          </li>
          <li>
            <strong>Informal advisory relationships</strong> are more
            fluid. You might have three or four people you call
            regularly for advice, take to lunch quarterly, and consult
            on specific issues - without a formal agreement or
            compensation structure. This approach works when advisors
            are motivated by the relationship itself (perhaps they are
            friends, mentors, or fellow alumni) rather than by
            compensation.
          </li>
        </ul>
        <p>
          Many search fund CEOs start with informal advisors during the
          search phase and formalize the arrangement after acquisition,
          once the specific needs of the business become clear.
        </p>

        <h2 className={h2Class}>The broader ETA ecosystem</h2>
        <p>
          Beyond your advisory board, the ETA community offers a rich
          ecosystem of conferences, peer groups, and networks that
          provide support, learning, and deal flow throughout your
          search and operating career.
        </p>

        <h3 className={h3Class}>Conferences and events</h3>
        <ul className={ulClass}>
          <li>
            <strong>INSEAD ETA Conference:</strong> One of the largest
            and most international ETA gatherings, bringing together
            searchers, operators, investors, and academics from across
            Europe, Asia, Africa, and beyond. INSEAD&apos;s ETA & Search
            Funds Hub also hosts regular webinars, workshops, and
            regional events.
          </li>
          <li>
            <strong>IESE Search Fund Conference:</strong> Hosted in
            Barcelona, this is a cornerstone event for the European
            search fund community, with strong representation from
            Spanish and Latin American markets.
          </li>
          <li>
            <strong>Stanford Search Fund CEO Conference:</strong> The
            original and still the largest US-focused event, held
            annually at Stanford GSB.
          </li>
          <li>
            <strong>Regional ETA meetups:</strong> Smaller, more
            frequent gatherings organized by local ETA communities in
            cities like Paris, London, Munich, Madrid, New York, and
            San Francisco.
          </li>
        </ul>

        <h3 className={h3Class}>Peer groups and communities</h3>
        <p>
          Peer groups - small cohorts of 6 to 12 search fund
          entrepreneurs at similar stages - provide some of the most
          valuable support in the ETA world. Members share deal flow,
          compare notes on operational challenges, and hold each other
          accountable. Several organizations facilitate peer groups,
          including search fund accelerators, business school alumni
          networks, and independent communities. The relationships
          formed in peer groups often last well beyond the search and
          become the foundation of a lifelong professional network.
        </p>

        <h3 className={h3Class}>Business school networks</h3>
        <p>
          The ETA model has strong roots in a handful of business
          schools, and these alumni networks remain central to the
          ecosystem. INSEAD&apos;s global alumni network is particularly
          valuable for cross-border deals and for searchers targeting
          markets outside the US. Stanford GSB alumni pioneered the
          model and remain the most densely connected network in the US
          market. IESE&apos;s network is dominant in Spain and Latin
          America. HEC Paris, London Business School, and Wharton also
          have growing ETA communities. Using these networks for
          introductions to sellers, investors, and{" "}
          <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">professional advisors</Link>{" "}
          is one of the highest-ROI activities a searcher can undertake.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How many advisors should be on a search fund advisory board?</h3>
        <p>
          The most effective advisory boards consist of three to five members. According to Stanford GSB&rsquo;s research on search fund governance, boards with fewer than three members lack sufficient diversity of perspective, while boards with more than five become difficult to coordinate and individual advisors receive less engagement time. The optimal composition covers four categories: an industry domain expert, a former operator or search fund CEO, a functional specialist (finance, sales, or technology depending on your gaps), and a local business leader if you relocated for the acquisition. Keeping the board small ensures each advisor feels valued and has sufficient airtime during quarterly meetings.
        </p>

        <h3 className={h3Class}>How much equity should I allocate to advisory board members?</h3>
        <p>
          Typical equity grants for advisory board members range from 0.25% to 0.5% per advisor, with total advisory board equity rarely exceeding 1.5&ndash;2.0% of the company. According to the National Association of Corporate Directors (NACD), equity grants for private company advisory board members should vest over two to four years with continued service to maintain engagement. Some search fund CEOs use a hybrid model: a modest cash retainer of $2,000&ndash;$10,000 per year combined with a smaller equity grant. Discuss the allocation with your{" "}
          <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board of directors</Link>{" "}
          before committing &mdash; investors will want to ensure advisory board equity does not excessively dilute the cap table or create governance complications.
        </p>

        <h3 className={h3Class}>When is the right time to formalize an advisory board?</h3>
        <p>
          The natural inflection point for formalization is immediately after closing the acquisition. During the search phase, advisory relationships are typically informal &mdash; mentors, industry contacts, and fellow searchers you call for guidance. After closing, the specific needs of the business become clear, and you can recruit advisors who are directly relevant to those needs. According to IESE Business School&rsquo;s research on search fund operations, search fund CEOs who formalize their advisory boards within the first 90 days of ownership report higher satisfaction with their support networks and faster time to operational stability. Formalize the arrangement with a simple advisory agreement covering expected time commitment (four to six meetings per year plus ad hoc calls), compensation terms, confidentiality obligations, and a two-to-three-year term with annual renewal options.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford Graduate School of Business &mdash; <em>Search Fund Study: Selected Observations</em>, 2024 edition. Data on advisory board composition, equity allocation benchmarks, and governance best practices.</li>
          <li>National Association of Corporate Directors (NACD) &mdash; <em>Advisory Board Compensation and Governance Guidelines for Private Companies</em>. Standards for advisory board structure, compensation models, and fiduciary considerations.</li>
          <li>IESE Business School &mdash; <em>International Search Fund Study</em>, 2024. Research on the role of advisory boards in search fund success, formalization timing, and cross-border advisory structures.</li>
        </ul>
      </div>
    </article>
  );
}
