import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function DayOneAnnouncementArticle() {
  return (
    <article>
      <h1 className={h1Class}>Day 1 Announcement: Scripts, Templates &amp; Best Practices</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Voluntary turnover spikes to 20% the moment a merger or acquisition is announced, according to{" "}
          <a href="https://www.gallup.com/workplace/267494/stop-losing-talent-merge-acquire.aspx" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Gallup research</a>
          , and the most talented employees are consistently the first to leave. Your Day 1 announcement &mdash; the words you choose, the order you reach each audience, the tone you set &mdash; is the single highest-leverage action you will take as a new owner. This guide gives you the exact scripts, email templates, and stakeholder-by-stakeholder playbook to get it right, drawn from real acquisition handoffs and research-backed communication frameworks.
        </p>
      </div>

      {/* ── Section 1 ────────────────────────────────────────── */}
      <h2 className={h2Class}>Why the First 48 Hours Shape the Next Two Years</h2>
      <div className={bodyClass}>
        <p>
          Employee psychology during ownership transitions follows a predictable pattern. A{" "}
          <a href="https://news.gallup.com/businessjournal/142859/right.aspx" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Gallup study of 10 high-profile M&amp;A transactions</a>{" "}
          found that engagement dropped an average of 14% during the transition period. Acquired firms lose four out of ten managers within the first 24 months &mdash; triple the turnover rate of non-acquired companies. An EY analysis pushed the numbers even higher: 47% average employee turnover in year one, rising to 75% within three years.
        </p>
        <p>
          The root cause is not dissatisfaction with the new owner. It is <strong>uncertainty</strong>. Employees who hear nothing fill the silence with worst-case scenarios: layoffs, pay cuts, culture demolition. Research from the{" "}
          <a href="https://www.researchgate.net/publication/389394880_Employee_Management_During_Mergers_and_Acquisitions_Communication_Challenges_and_Impact_on_Turnover" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">ResearchGate communication-turnover study</a>{" "}
          confirms that most post-acquisition dissatisfaction is caused by uncertainty, not by bad news itself. Transparent, early communication collapses that uncertainty window from weeks to hours.
        </p>
        <p>
          This is why the first 48 hours are disproportionately important. Every hour of silence between the legal close and your first words to the team is an hour of rumor-building. If you are walking into a company where{" "}
          <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">key-person risk</Link>{" "}
          is concentrated in one or two critical employees, that silence can cost you the entire deal thesis.
        </p>
      </div>

      {/* ── Section 2 ────────────────────────────────────────── */}
      <h2 className={h2Class}>Pre-Close Preparation Checklist: 14 Days Before Day 1</h2>
      <div className={bodyClass}>
        <p>
          Experienced acquirers treat Day 1 communication as a project that begins at least two weeks before the legal close. The{" "}
          <a href="https://www.kornferry.com/insights/featured-topics/organizational-transformation/mergers-and-acquisitions-day-one-checklist" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Korn Ferry Day One Readiness Checklist</a>{" "}
          recommends never scheduling Day 1 events on the same day as the legal close &mdash; too many last-minute issues can derail your careful plans. Here is a condensed pre-close communication checklist:
        </p>
        <ol className={olClass}>
          <li><strong>T-14 days: Draft all announcements.</strong> Write your all-hands script, customer letter, vendor email, and social media post. Have your attorney review each for regulatory compliance.</li>
          <li><strong>T-10 days: Coordinate with the seller.</strong> Script the seller&rsquo;s introduction and endorsement. Rehearse the handoff. Agree on who says what, in what order.</li>
          <li><strong>T-7 days: Brief key managers confidentially.</strong> Identify the 2&ndash;4 people whose departure would hurt most (your{" "}
            <Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">employee retention</Link>{" "}
            priority list). Brief them under NDA so they can help manage their teams&rsquo; reactions on Day 1.</li>
          <li><strong>T-3 days: Logistics.</strong> Book a meeting room that fits the entire team. Order catering &mdash; one acquirer described ordering barbecue for everyone before the announcement, per an{" "}
            <a href="https://acquira.com/how-to-announce-the-sale-of-a-company-to-its-employees/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Acquira case study</a>
            . Prepare printed FAQ handouts. Pre-schedule customer emails in your CRM to send the moment the all-hands meeting ends.</li>
          <li><strong>T-1 day: Red-team your plan.</strong> Walk through the full Day 1 schedule minute by minute with your advisor or board member. What if the seller gets emotional? What if an employee asks about layoffs? Script your answers to the five hardest questions.</li>
        </ol>
        <p>
          Completing thorough{" "}
          <Link href="/learn/hr-employee-due-diligence" className="text-apple-accent hover:underline">HR and employee due diligence</Link>{" "}
          before close gives you the knowledge to answer employee questions with confidence on Day 1, rather than deflecting with vague promises.
        </p>
      </div>

      {/* ── Section 3 ────────────────────────────────────────── */}
      <h2 className={h2Class}>The All-Hands Meeting Script: What to Say (and What Not to Say)</h2>
      <div className={bodyClass}>
        <p>
          The in-person all-hands meeting is the centerpiece of Day 1. Every employee should hear the news directly from leadership &mdash; never from a customer, a vendor, or the local newspaper. Below is a structured script based on frameworks from{" "}
          <a href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/communications-in-mergers-the-glue-that-holds-everything-together" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">McKinsey&rsquo;s M&amp;A communications research</a>{" "}
          and real search fund transitions.
        </p>

        <h3 className={h3Class}>Part 1: The Seller&rsquo;s Introduction (3&ndash;5 minutes)</h3>
        <p>
          The departing owner speaks first. Their endorsement carries more weight than anything you can say about yourself. The seller should cover three points:
        </p>
        <ul className={ulClass}>
          <li><strong>Why this buyer:</strong> &ldquo;I turned down several offers because those buyers didn&rsquo;t have the best interest of this company in mind. I chose [Name] because their values align with what we&rsquo;ve built together.&rdquo;</li>
          <li><strong>Confidence in the future:</strong> &ldquo;I would not hand this company to someone I didn&rsquo;t trust to take care of you and our customers.&rdquo;</li>
          <li><strong>Continued presence (if applicable):</strong> &ldquo;I&rsquo;ll be staying on for the next [3&ndash;6] months to make sure the transition is smooth.&rdquo;</li>
        </ul>
        <p>
          If the seller&rsquo;s involvement post-close is unclear, read more about structuring that period in our guide to the{" "}
          <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">owner-dependent business</Link>{" "}
          transition.
        </p>

        <h3 className={h3Class}>Part 2: Your Introduction (5&ndash;7 minutes)</h3>
        <p>
          Keep this personal, not corporate. Employees want to know who you are as a person before they care about your &ldquo;strategic vision.&rdquo; A script outline:
        </p>
        <ul className={ulClass}>
          <li><strong>Who you are:</strong> Share your background in plain language. Where you grew up, your family, what you did before this. Two minutes maximum.</li>
          <li><strong>Why this business:</strong> Be specific. &ldquo;I spent 18 months looking at companies across the country. I chose this one because of your reputation, your team, and the quality of what you deliver.&rdquo;</li>
          <li><strong>The stability commitment:</strong> &ldquo;Your jobs, your pay, your benefits &mdash; nothing is changing today. I&rsquo;m not here to tear things apart. I&rsquo;m here because what you&rsquo;ve built is worth investing in.&rdquo;</li>
          <li><strong>The listening commitment:</strong> &ldquo;My plan for the next 90 days is simple: listen and learn. I need each of you to teach me how this business really works. You are the experts, not me.&rdquo;</li>
          <li><strong>Open door:</strong> &ldquo;My phone number is on the handout. My door is open. If you have a question, a concern, or an idea &mdash; come to me directly.&rdquo;</li>
        </ul>

        <h3 className={h3Class}>Part 3: Open Q&amp;A (10&ndash;15 minutes)</h3>
        <p>
          Actively invite questions. If the room is quiet, the Acquira case study recommends the seller prod people: &ldquo;Come on, I know you have questions &mdash; speak up.&rdquo; After the formal Q&amp;A, break into smaller groups so people can approach you informally. Walk around, shake hands, learn names. This is where real trust begins.
        </p>

        <h3 className={h3Class}>What NOT to Say on Day 1</h3>
        <p>
          Certain statements can do lasting damage, even when well-intentioned. Avoid the following:
        </p>
        <ul className={ulClass}>
          <li><strong>Premature change announcements:</strong> &ldquo;We&rsquo;re implementing a new ERP system next month&rdquo; signals instability. Changes belong in month two or three, not hour one.</li>
          <li><strong>Criticism of past practices:</strong> &ldquo;I can&rsquo;t believe you&rsquo;ve been doing it this way&rdquo; insults the seller and the team in one sentence.</li>
          <li><strong>Absolute promises:</strong> &ldquo;No one will ever be let go&rdquo; is a promise you may not be able to keep, and{" "}
            <a href="https://www.ipmcinc.com/insights/ma-integration-day-one-success/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">IPM research</a>{" "}
            warns that credibility damage from retracted promises is hard to recover from.</li>
          <li><strong>Financial details:</strong> Never share the purchase price or deal terms with employees.</li>
          <li><strong>Your grand vision:</strong> They are not ready to hear about your five-year growth plan. They are still processing the fact that someone new owns the company.</li>
        </ul>
      </div>

      {/* ── Section 4 ────────────────────────────────────────── */}
      <h2 className={h2Class}>Stakeholder-by-Stakeholder Communication Templates</h2>
      <div className={bodyClass}>
        <p>
          Different audiences need different messages, delivered in a specific sequence.{" "}
          <a href="https://www.mckinsey.com/locations/mckinsey-client-capabilities-network/our-work/strategic-and-change-communications/the-communications-exchange/customer-first-communications-five-ways-to-strengthen-relationships-during-m-and-a" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">McKinsey&rsquo;s customer-first communications framework</a>{" "}
          recommends the top 20&ndash;30 revenue-generating customers receive direct, personalized engagement from senior leadership. Below are templates for each audience.
        </p>

        <h3 className={h3Class}>Customer Email Template (Send Within 24 Hours of Close)</h3>
        <p>
          This should be a joint communication from both the seller and buyer. Subject line: &ldquo;An Exciting Update About [Company Name].&rdquo;
        </p>
        <p><em>
          &ldquo;Dear [Customer Name],<br /><br />
          I&rsquo;m writing to share some important news. After [X] years of leading [Company Name], I have transitioned ownership to [New Owner Name]. This was not a decision I made lightly &mdash; I spent considerable time finding someone who shares our commitment to the quality and service you&rsquo;ve come to expect.<br /><br />
          [New Owner Name] brings [brief relevant background]. Their investment in [Company Name] means more resources dedicated to serving you better.<br /><br />
          What this means for you: the same team, the same quality, the same commitment. Your point of contact remains [Name/Role]. If you ever need anything, you can also reach [New Owner] directly at [phone] or [email].<br /><br />
          Thank you for your continued trust.<br /><br />
          [Seller Name] &amp; [New Owner Name]&rdquo;
        </em></p>
        <p>
          For your top 10&ndash;20 accounts, do not rely on this email alone. Call them personally within the first three days or, better, visit in person within the first week. Protecting these relationships is the core of your{" "}
          <Link href="/learn/customer-retention-post-acquisition" className="text-apple-accent hover:underline">customer retention strategy</Link>.
        </p>

        <h3 className={h3Class}>Vendor &amp; Supplier Notification (Send Within 48&ndash;72 Hours)</h3>
        <p><em>
          &ldquo;Dear [Vendor Name],<br /><br />
          I&rsquo;m writing to introduce myself as the new owner of [Company Name], effective [Date]. [Seller Name] has transitioned the business to me, and I want to assure you that our existing agreements, payment terms, and open orders remain unchanged.<br /><br />
          I value the partnership you&rsquo;ve built with [Company Name] and look forward to continuing it. I&rsquo;d welcome the opportunity to meet in person over the coming weeks. In the meantime, please direct any questions to [contact info].<br /><br />
          [New Owner Name]&rdquo;
        </em></p>
        <p>
          If the deal was structured as an asset purchase rather than a stock purchase, you will need to update accounts, billing information, and potentially re-sign contracts. Have your attorney prepare a list of vendor agreements that require formal novation or re-execution.
        </p>

        <h3 className={h3Class}>Partner &amp; Community Announcement</h3>
        <p>
          Industry associations, referral partners, and local business groups should hear from you within the first week. A short LinkedIn post or press release works for the broader community, but close partners deserve a personal call. The tone should mirror the customer letter: continuity, respect for what&rsquo;s been built, and enthusiasm for what&rsquo;s ahead.
        </p>
      </div>

      {/* ── Section 5 ────────────────────────────────────────── */}
      <h2 className={h2Class}>The Seller&rsquo;s Role: Why Their Endorsement Is Non-Negotiable</h2>
      <div className={bodyClass}>
        <p>
          In small-business acquisitions, especially{" "}
          <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">owner-dependent businesses</Link>
          , the seller&rsquo;s endorsement is the single most powerful trust-transfer mechanism available. Employees who have worked for the same owner for 10 or 20 years will not trust a stranger on the strength of a handshake. They will trust their former boss telling them, &ldquo;I vetted this person, and they&rsquo;re the right one.&rdquo;
        </p>
        <p>
          The optimal seller transition involves three elements:
        </p>
        <ol className={olClass}>
          <li><strong>Public endorsement at the all-hands.</strong> The seller speaks first, introduces you, and explicitly states why they chose you over other buyers.</li>
          <li><strong>Joint visibility in the first 2&ndash;4 weeks.</strong> The seller and buyer should be seen together &mdash; in meetings, walking the floor, visiting customers. This visual continuity signals that the change is collaborative, not hostile.</li>
          <li><strong>Gradual withdrawal over 3&ndash;6 months.</strong> The Acquira framework recommends a 3&ndash;6 month seller retention period (up to 12 months for SBA-financed deals). The seller gradually shifts from active operator to advisor to occasional consultant.</li>
        </ol>
        <p>
          Negotiate these transition terms during the deal, not after. If the seller plans to disappear the day after closing, you need to know that before you draft your Day 1 script, because the messaging changes significantly. See our full treatment of{" "}
          <Link href="/learn/culture-integration" className="text-apple-accent hover:underline">culture integration</Link>{" "}
          for strategies when the seller exit is immediate.
        </p>
      </div>

      {/* ── Section 6 ────────────────────────────────────────── */}
      <h2 className={h2Class}>Five Common Mistakes New Owners Make on Day 1</h2>
      <div className={bodyClass}>
        <p>
          After studying dozens of search fund and small-business transitions, these are the recurring errors that undermine even well-prepared acquirers:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Letting employees hear the news from someone else.</strong> If your customer email goes out before your all-hands meeting, employees will find out from clients calling to ask questions. Sequence matters: employees first, always.
          </li>
          <li>
            <strong>Skipping the seller&rsquo;s endorsement.</strong> Some buyers, eager to establish authority, sideline the seller on Day 1. This is a mistake.{" "}
            <a href="https://www.gallup.com/workplace/268307/managers-save-mergers.aspx" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Gallup&rsquo;s manager-engagement research</a>{" "}
            shows that managers account for 70% of the variance in team engagement. In a small company, the departing owner <em>is</em> the manager for most employees. Their endorsement is irreplaceable.
          </li>
          <li>
            <strong>Over-communicating your vision.</strong> New owners often arrive with a 50-slide deck about growth plans, technology upgrades, and market expansion. On Day 1, nobody cares. They care about three things: Is my job safe? Is my boss gone? Is everything about to change? Answer those three questions and stop talking.
          </li>
          <li>
            <strong>Making promises to avoid discomfort.</strong> Saying &ldquo;nothing will ever change&rdquo; feels reassuring in the moment but destroys credibility when you inevitably make changes. The better formulation: &ldquo;Nothing is changing today, and any future changes will be discussed with you before they happen.&rdquo;
          </li>
          <li>
            <strong>Ignoring the emotional dimension.</strong> For long-tenured employees, this transition can feel like a death in the family. The founder they trusted is leaving. Acknowledge the emotion: &ldquo;I know this is a big change, and it&rsquo;s okay to feel uncertain. I would too.&rdquo; That one sentence does more for trust than a 20-minute speech about your qualifications.
          </li>
        </ol>
      </div>

      {/* ── Section 7 ────────────────────────────────────────── */}
      <h2 className={h2Class}>Week 1 Follow-Up Actions: From Announcement to Relationship</h2>
      <div className={bodyClass}>
        <p>
          Day 1 is the opening statement. Week 1 is where you prove you meant it. Here is a day-by-day framework for the first five business days after close.
        </p>

        <p><strong>Day 1 (Announcement Day):</strong></p>
        <ul className={ulClass}>
          <li>All-hands meeting with seller endorsement (morning, before any external communication)</li>
          <li>Customer email blast goes out immediately after the all-hands concludes</li>
          <li>Personal calls to the top 5 customers (afternoon)</li>
          <li>Walk the floor, shake every hand, learn every name</li>
        </ul>

        <p><strong>Day 2:</strong></p>
        <ul className={ulClass}>
          <li>Personal calls to customers 6&ndash;20</li>
          <li>Vendor notification emails sent</li>
          <li>Begin scheduling one-on-one meetings with every employee (aim to complete within 14 days)</li>
          <li>Sit with the seller to review the immediate operational calendar: payroll dates, deliverables due, contracts expiring</li>
        </ul>

        <p><strong>Day 3&ndash;4:</strong></p>
        <ul className={ulClass}>
          <li>Start one-on-one meetings, beginning with the most senior employees and the most anxious (your pre-close manager briefings will tell you who)</li>
          <li>Each one-on-one should cover five questions: What is your role? What works well? What would you change? What do you need? What concerns you about this transition?</li>
          <li>Meet critical vendors in person if geography allows</li>
        </ul>

        <p><strong>Day 5:</strong></p>
        <ul className={ulClass}>
          <li>Send a brief, warm follow-up email to all employees: &ldquo;Thank you for an incredible first week. Here&rsquo;s what I&rsquo;ve learned so far...&rdquo; Share 2&ndash;3 specific positive observations.</li>
          <li>Review the week with the seller: What went well? What concerns surfaced? Who needs extra attention?</li>
          <li>Begin drafting your{" "}
            <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">first 100 days plan</Link>{" "}
            based on everything you have learned</li>
        </ul>

        <p>
          The one-on-one meetings deserve special emphasis. Schedule 30&ndash;60 minutes per person. Do not take a laptop &mdash; bring a notebook and give them your full attention. These conversations are your richest source of operational intelligence, and they signal that you value each person individually. For a deeper framework on these conversations, see our guide on{" "}
          <Link href="/learn/building-trust-teams" className="text-apple-accent hover:underline">building trust with inherited teams</Link>.
        </p>
      </div>

      {/* ── FAQ Section ──────────────────────────────────────── */}
      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Should I announce the acquisition before or after the legal close?</h3>
        <p>
          After. Until the deal is legally closed, too many variables can change. Premature announcements create confusion if the deal falls through or closing is delayed. The{" "}
          <a href="https://www.kornferry.com/insights/featured-topics/organizational-transformation/mergers-and-acquisitions-day-one-checklist" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Korn Ferry readiness checklist</a>{" "}
          recommends planning Day 1 events for the business day following the legal close, giving you a buffer for last-minute closing issues.
        </p>

        <h3 className={h3Class}>What if an employee asks directly whether there will be layoffs?</h3>
        <p>
          Answer honestly. If you have no plans for layoffs, say so: &ldquo;I have no plans to reduce headcount. I bought this business because of the team, and my goal is to grow, not shrink.&rdquo; If restructuring is likely, do not lie: &ldquo;My focus right now is learning the business. I&rsquo;ll be transparent about any changes as decisions are made, and you&rsquo;ll hear it from me directly, not secondhand.&rdquo; Honesty costs less than broken promises.
        </p>

        <h3 className={h3Class}>How do I handle the announcement if the seller has already left?</h3>
        <p>
          If the seller is not available for a joint announcement, use a pre-recorded video message from them, or a signed letter read aloud at the all-hands. The key is that employees hear the seller&rsquo;s endorsement in some form. If even that is impossible, lean heavily on the most trusted senior manager to introduce you and vouch for the transition. This scenario underscores the importance of negotiating seller involvement during deal structuring.
        </p>

        <h3 className={h3Class}>Should I send the customer letter before or after telling employees?</h3>
        <p>
          Always after. The worst outcome is an employee learning about the ownership change from a customer who received your email first. The communication sequence should be: (1) key managers under NDA, (2) all employees at the all-hands, (3) customers and vendors, (4) public announcement. Never deviate from this order.
        </p>

        <h3 className={h3Class}>How much of my background should I share with employees?</h3>
        <p>
          Enough to be a real person, not enough to be a resume. Employees want to know you are competent, but they care more about whether you are trustworthy and decent. Share where you are from, what drew you to this business specifically, and one or two personal details (family, hobbies, how you spend weekends). Skip the MBA bullet points and the list of companies you have worked at. Authenticity matters more than credentials &mdash; a finding consistent with{" "}
          <a href="https://www.sciencedirect.com/science/article/abs/pii/S0363811121000710" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">ScienceDirect research on CEO communication</a>{" "}
          showing that responsive, authentic communication drives stronger employee relationships than assertiveness alone.
        </p>
      </div>
    </article>
  );
}
