import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function First100DaysArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund CEO: The First 100 Days</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          The first 100 days after acquiring a company are critical. How you
          manage this period will set the tone for your entire tenure as CEO.
          Here is a structured approach based on insights from successful search
          fund operators and research from Stanford, IESE, and INSEAD&apos;s ETA &
          Search Funds Hub. Every decision you make, and every decision
          you defer, during these early weeks will shape your
          credibility with employees, your relationship with customers, and
          your ability to execute on the value creation plan you presented to
          investors.
        </p>

        <h2 className={h2Class}>Days 1-30: Listen, learn, and build trust</h2>
        <p>
          The first month is about building a foundation of understanding. You
          are inheriting a living organization with established relationships,
          unwritten rules, and a culture shaped over years or decades by the
          previous owner. Your most important job right now is not to lead
          it is to learn.
        </p>

        <h3 className={h3Class}>Week 1-2: Immersion</h3>
        <ul className={ulClass}>
          <li><strong>Meet everyone.</strong> Hold one-on-one conversations with every employee, key customer, and major supplier. Listen more than you talk. Ask open-ended questions: &ldquo;What works well here?&rdquo; &ldquo;What would you change if you could?&rdquo; &ldquo;What keeps you up at night?&rdquo;</li>
          <li><strong>Shadow the seller.</strong> Spend time with the previous owner understanding daily operations, key relationships, and unwritten rules. A well-planned{" "}
          <Link href="/learn/management-transition" className="text-apple-accent hover:underline">management transition</Link>{" "}
          makes this period far more productive.</li>
          <li><strong>Sit in on every meeting.</strong> Attend sales calls, production meetings, customer service interactions, and vendor negotiations. Observe how decisions are actually made, not just how the org chart says they should be made.</li>
          <li><strong>Review all key documents.</strong> Read every contract, policy manual, employee handbook, and financial report you can find. Pay special attention to any commitments or promises the seller made to employees, customers, or vendors that may not have surfaced during <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link>.</li>
        </ul>

        <h3 className={h3Class}>Week 3-4: Mapping and assessment</h3>
        <ul className={ulClass}>
          <li><strong>Map the organization.</strong> Understand reporting lines, decision-making processes, and informal power structures. In many SMEs, the real power dynamics differ significantly from the formal hierarchy. Identify who the &ldquo;go-to&rdquo; people are, the employees others turn to for advice, institutional knowledge, or problem-solving.</li>
          <li><strong>Don&apos;t make changes yet.</strong> Resist the urge to implement improvements. You need to understand the business deeply before changing anything. Premature changes signal to employees that you don&rsquo;t respect what they&rsquo;ve built.</li>
          <li><strong>Establish a communication rhythm.</strong> Set up regular team meetings and create open channels for feedback. A weekly all-hands meeting, even if brief, establishes transparency and predictability.</li>
          <li><strong>Identify the &ldquo;sacred cows.&rdquo;</strong> Every company has practices, perks, or traditions that are deeply meaningful to employees even if they seem minor to an outsider. These could be anything from a Friday pizza lunch to a specific vacation policy. Touching these too early can erode trust faster than any operational improvement can build it.</li>
        </ul>

        <h2 className={h2Class}>Days 30-60: Diagnose and plan</h2>
        <p>
          By the end of your first month, you should have a solid
          understanding of the business as it operates today. Month two is
          about translating those observations into an actionable plan.
        </p>

        <h3 className={h3Class}>Identifying quick wins</h3>
        <ul className={ulClass}>
          <li><strong>Identify quick wins.</strong> Look for low-risk improvements that will build credibility with the team, fixing broken processes, addressing long-standing frustrations. The best quick wins are things employees have been asking for but the previous owner never prioritized: upgrading outdated equipment, fixing a leaky roof, implementing a tool that saves administrative time.</li>
          <li><strong>Prioritize by impact and visibility.</strong> Quick wins serve two purposes: they create tangible value and they build trust. Choose improvements that are visible to the team, so they see that new ownership brings positive change. Avoid big, disruptive projects at this stage.</li>
        </ul>

        <h3 className={h3Class}>Assessing the management team</h3>
        <ul className={ulClass}>
          <li><strong>Assess the management team.</strong> Determine who your key leaders are, where gaps exist, and who may need additional support or development. Evaluate each manager on two dimensions: performance (are they effective in their current role?) and potential (can they grow into a larger role as the company scales?). This assessment should inform your first critical hiring decisions.</li>
          <li><strong>Identify flight risks.</strong> Some employees may be nervous about new ownership and considering departure. Identify the people you cannot afford to lose and take proactive steps to retain them, whether through compensation adjustments, expanded responsibilities, or simply a direct conversation about their future with the company.</li>
        </ul>

        <h3 className={h3Class}>Financial infrastructure</h3>
        <ul className={ulClass}>
          <li><strong>Review financial controls.</strong> Ensure accurate, timely financial reporting. Many SMEs have weak financial infrastructure, inconsistent bookkeeping, no monthly close process, limited cash flow visibility, and no formal budgeting. Establishing basic financial hygiene is one of the highest-value activities in the first 100 days.</li>
          <li><strong>Set up a board.</strong> Establish a formal{" "}
          <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board with your investors</Link>{" "}
          and independent directors. Use them as a strategic resource. A well-functioning board provides governance, mentorship, and accountability, all of which are especially valuable for a first-time CEO.</li>
          <li><strong>Draft your 100-day plan.</strong> Based on your observations, create a prioritized action plan for the next phase. Share a summary version with your board and management team. Being transparent about your priorities builds alignment.</li>
        </ul>

        <h2 className={h2Class}>Days 60-100: Execute first initiatives</h2>
        <p>
          The final phase of the first 100 days is about translating your plan
          into action while maintaining the trust and goodwill you have built
          over the first two months.
        </p>
        <ul className={ulClass}>
          <li><strong>Implement quick wins.</strong> Start with the highest-impact, lowest-risk improvements you identified. Communicate each change clearly: explain why you are making it, what the expected benefit is, and how it fits into the larger vision.</li>
          <li><strong>Upgrade financial reporting.</strong> Implement monthly management reporting, KPI dashboards, and cash flow forecasting. Consider starting your{" "}
          <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">digital transformation</Link>{" "}
          with these foundational tools. At minimum, you should have a monthly P&L, balance sheet, cash flow statement, and a dashboard tracking 5-10 key operating metrics.</li>
          <li><strong>Address critical hires.</strong> If key positions need to be filled (CFO, sales manager, etc.), begin the recruiting process. In many search fund acquisitions, the first outside hire is a controller or CFO who can professionalize the finance function. This role pays for itself quickly through better visibility, tighter cash management, and improved decision-making.</li>
          <li><strong>Communicate your vision.</strong> Share your strategic direction with the team. Be transparent about your goals and how you plan to achieve them. Strong{" "}
          <Link href="/learn/investor-relations" className="text-apple-accent hover:underline">investor relations</Link>{" "}
          should develop in parallel. A simple, clear strategic narrative, where we are, where we are going, and how we will get there, aligns the entire organization.</li>
          <li><strong>Build your external network.</strong> Join industry associations, attend conferences, and build relationships with potential acquisition targets for future add-ons. Start identifying opportunities for a <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build strategy</Link> early, even if execution is years away.</li>
        </ul>

        <h2 className={h2Class}>What NOT to do: common mistakes new operators make</h2>
        <p>
          The Stanford and IESE data on search fund CEO replacements reveals
          recurring patterns among operators who struggle in their first year.
          Here are the most common and most damaging mistakes to avoid.
        </p>
        <ul className={ulClass}>
          <li><strong>Changing too much too fast.</strong> This is the single most common mistake new search fund CEOs make. You will lose the trust of employees and customers if they feel like the new owner is dismantling what they built. Every change has a cost, even good changes create disruption, uncertainty, and resistance. Pace yourself.</li>
          <li><strong>Ignoring the company culture.</strong> The culture is a key asset you paid for. Many search fund targets are successful precisely because of their culture, loyal employees, strong customer relationships, and a sense of identity. Disrupting the culture carelessly can trigger departures, morale problems, and customer defections that destroy more value than any operational improvement can create.</li>
          <li><strong>Micromanaging.</strong> Empower your team rather than trying to do everything yourself. As a first-time CEO, you may feel pressure to demonstrate competence by being deeply involved in every decision. This approach burns you out and demoralizes capable managers who feel they are no longer trusted.</li>
          <li><strong>Underinvesting in the transition period with the seller.</strong> The seller knows things that are not written down anywhere, customer quirks, supplier relationships, employee dynamics, seasonal patterns. Cutting the seller&rsquo;s transition period short to save money is a false economy that can cost you dearly.</li>
          <li><strong>Neglecting customer relationships.</strong> It is natural to focus on internal operations when you are new, but your customers are watching closely. A leadership change is inherently unsettling for customers, especially in relationship-driven businesses. Proactively reaching out to your top 20 customers in the first 30 days should be non-negotiable.</li>
          <li><strong>Making promises you cannot keep.</strong> In your eagerness to build trust, you may be tempted to promise raises, promotions, new hires, or capital investments before you fully understand the financial picture. Under-promise and over-deliver, especially in the early days.</li>
          <li><strong>Ignoring your own mental health.</strong> The first 100 days are among the most stressful periods in a search fund CEO&rsquo;s career. The learning curve is steep, the stakes are high, and the loneliness of leadership is real. Build a support network, your board, your investors, fellow search fund CEOs, a mentor, or a coach. You will make better decisions when you are not running on adrenaline and caffeine alone.</li>
        </ul>

        <h2 className={h2Class}>Communication strategy: employees, customers, and vendors</h2>
        <p>
          How you communicate during the first 100 days is arguably more
          important than what you decide. Every stakeholder group requires a
          tailored approach.
        </p>

        <h3 className={h3Class}>Employees</h3>
        <p>
          Your employees are your most important audience. They are uncertain
          about their futures, skeptical of the new owner, and watching your
          every move for signals about what kind of leader you will be.
        </p>
        <ul className={ulClass}>
          <li><strong>Day one announcement:</strong> Introduce yourself with humility. Acknowledge the company&rsquo;s history and the team&rsquo;s contributions. Emphasize continuity over change. Your message should be: &ldquo;I am here to learn from you and build on what you have created.&rdquo;</li>
          <li><strong>Regular updates:</strong> Establish a weekly or biweekly communication rhythm, all-hands meetings, email updates, or informal walk-arounds. Consistency builds trust.</li>
          <li><strong>Open-door policy:</strong> Make yourself physically and emotionally accessible. Eat lunch in the break room. Walk the floor. Ask questions. The more present and approachable you are, the faster trust will build.</li>
          <li><strong>Address the elephant in the room:</strong> Employees will worry about layoffs, compensation changes, and cultural shifts. Address these concerns directly and honestly, even if the answer is &ldquo;I do not plan any changes in the near term, and I will communicate with you before anything changes.&rdquo;</li>
        </ul>

        <h3 className={h3Class}>Customers</h3>
        <p>
          Your customers need to feel confident that the quality, service, and
          relationships they valued under the previous owner will continue or
          improve under your leadership.
        </p>
        <ul className={ulClass}>
          <li><strong>Personal outreach to top accounts:</strong> Call or visit your top 10-20 customers within the first two weeks. Introduce yourself, express your commitment to the relationship, and ask what you can do better.</li>
          <li><strong>Written announcement:</strong> Send a professional letter or email to the broader customer base introducing yourself, affirming the company&rsquo;s commitment to quality and service, and providing your direct contact information.</li>
          <li><strong>Listen for pain points:</strong> Customer conversations in the first month often surface issues the seller either did not know about or chose not to address. These insights are gold, they tell you where to focus improvement efforts for maximum impact.</li>
        </ul>

        <h3 className={h3Class}>Vendors and suppliers</h3>
        <ul className={ulClass}>
          <li><strong>Reaffirm existing relationships:</strong> Contact your key suppliers to introduce yourself and confirm that existing arrangements will continue. Vendor relationships are often more fragile than they appear, a change in ownership can trigger renegotiation of terms or credit reviews.</li>
          <li><strong>Review contracts and terms:</strong> Use the ownership transition as an opportunity to review vendor contracts, but resist the urge to renegotiate aggressively in the first few months. Building trust now creates use for better terms later.</li>
        </ul>

        <h2 className={h2Class}>Financial controls to establish immediately</h2>
        <p>
          Regardless of your strategic priorities, there is a baseline set of
          financial controls that every new search fund CEO should establish
          as quickly as possible. These controls protect you, your investors,
          and the business.
        </p>
        <ul className={ulClass}>
          <li><strong>Bank account controls:</strong> Ensure you have full signing authority and visibility into all bank accounts. Establish dual-signature requirements for payments above a defined threshold. Review all automatic payments and recurring charges.</li>
          <li><strong>Cash flow visibility:</strong> Implement a 13-week rolling cash flow forecast. Many SMEs operate without any forward-looking cash management, which means surprises are common. Even a simple spreadsheet-based forecast dramatically improves your ability to anticipate and manage cash needs.</li>
          <li><strong>Monthly close process:</strong> Establish a formal monthly close with a target of producing complete financial statements within 15-20 business days of month-end. Many SMEs do not close their books monthly, which leaves the CEO operating blind.</li>
          <li><strong>Budget and variance analysis:</strong> Create an annual operating budget and compare actual results to budget monthly. This discipline forces management conversations about performance drivers and creates accountability throughout the organization.</li>
          <li><strong>Accounts receivable management:</strong> Review the aging of receivables and establish a systematic collections process. Cash tied up in overdue receivables is one of the most common working capital issues in acquired SMEs. See our guide on{" "}
          <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">working capital management</Link>{" "}
          for a deeper dive.</li>
          <li><strong>Insurance review:</strong> Confirm that all insurance policies are current and adequate. Ownership changes often trigger notification requirements in insurance contracts; failing to notify your carriers can void coverage.</li>
          <li><strong>Debt covenant compliance:</strong> If the acquisition was financed with debt (as most are), establish a monthly process for tracking covenant compliance. Missing a covenant can trigger default provisions and give lenders significant use over the business.</li>
        </ul>

        <h2 className={h2Class}>The seller relationship during transition</h2>
        <p>
          The relationship with the departing seller is one of the most detailed
          and important dynamics in the first 100 days. Handled well, the
          seller becomes an invaluable resource. Handled poorly, the
          transition can become adversarial and damaging.
        </p>
        <ul className={ulClass}>
          <li><strong>Structure the transition formally.</strong> The transition period should be clearly defined in the purchase agreement, duration, responsibilities, compensation, and expectations. Typical transition periods range from three to twelve months, with the seller available full-time in the early weeks and gradually reducing involvement.</li>
          <li><strong>Respect their legacy.</strong> The seller built this company over years or decades. Regardless of what you plan to change, show genuine respect for what they accomplished. This respect is not just good manners, it earns you access to the seller&rsquo;s deepest institutional knowledge, which is invaluable.</li>
          <li><strong>Extract knowledge systematically.</strong> Create a structured process for capturing the seller&rsquo;s knowledge: customer relationship histories, supplier negotiation strategies, seasonal patterns, pricing logic, employee dynamics, and unwritten policies. Do not assume this knowledge will transfer naturally through shadowing alone.</li>
          <li><strong>Manage the power dynamic.</strong> The transition period creates an inherently awkward situation: you are the new CEO, but the seller&rsquo;s relationships and institutional knowledge give them informal authority. Be clear with employees about the reporting structure while being respectful of the seller&rsquo;s role. Confusion about who is in charge will paralyze the organization.</li>
          <li><strong>Plan the seller&rsquo;s departure carefully.</strong> The seller&rsquo;s final day is a significant moment for the company. Help them exit gracefully, with appropriate recognition and celebration of their contribution. How you handle their departure sends a powerful signal to employees about the kind of leader you intend to be.</li>
          <li><strong>Maintain the relationship post-transition.</strong> Many experienced search fund CEOs report that the seller remains a valuable advisor long after the formal transition ends. A quarterly phone call or lunch can preserve access to wisdom that would otherwise be lost. If the deal included an <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">earn-out</Link>, maintaining a constructive relationship with the seller is especially critical.</li>
        </ul>

        <h2 className={h2Class}>Setting yourself up for long-term success</h2>
        <p>
          The first 100 days are not an end in themselves, they are the
          foundation for the three to seven years of value creation that
          follow. As you close out this initial period, take time to reflect
          on what you have learned, recalibrate your assumptions, and refine
          your strategic plan. Share your updated thinking with your board and
          solicit their input. The best search fund CEOs treat their boards as
          genuine partners, not just governance obligations.
        </p>
        <p>
          Finally, remember that the first 100 days are also a period of
          intense personal growth. You are likely stepping into a CEO role for
          the first time, managing a team that did not choose you, and
          managing an industry you may still be learning. Give yourself
          grace. The skills you develop during this period, listening,
          empathy, decisiveness, humility, will serve you for the
          rest of your career.
        </p>
        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What is the single most important thing to accomplish in the first 100 days?</h3>
        <p>
          Building trust with your inherited team is the single most impactful outcome of the first 100 days. Stanford GSB&rsquo;s research on search fund CEO performance found that operators who prioritized relationship building over operational changes in the first 90 days had 2.5x higher retention rates for key employees and significantly better financial performance in years 1-3. Trust is built through listening, following through on commitments, respecting the company&rsquo;s history, and making early wins visible to the team. Without trust, even the best strategic plan will fail because your team won&rsquo;t execute it with conviction.
        </p>

        <h3 className={h3Class}>How quickly should a new search fund CEO make changes to the acquired business?</h3>
        <p>
          The consensus from IESE and Stanford research is to make no significant operational changes in the first 30 days, implement only low-risk quick wins in days 30-60, and begin more substantive initiatives in days 60-100. Data from the 2024 Stanford Search Fund Study shows that CEOs who made major changes in the first month had a 40% higher rate of key employee departures compared to those who waited. The exception is financial controls, implementing basic cash management, monthly reporting, and bank account oversight should happen immediately, as these protect the business without disrupting operations.
        </p>

        <h3 className={h3Class}>What financial controls should be established immediately after closing?</h3>
        <p>
          At minimum, establish these controls within the first two weeks: sole signing authority on all bank accounts with dual-signature requirements above a defined threshold, a 13-week rolling cash flow forecast, review of all automatic payments and recurring charges, and accounts receivable aging analysis. According to INSEAD&rsquo;s ETA research, 30% of newly acquired SMEs discover significant cash management issues within the first 60 days that were not identified during due diligence. A weekly cash position report and monthly close process (targeting day 15 initially) provide the visibility needed to catch problems early and make informed decisions.
        </p>
      </div>
    </article>
  );
}
