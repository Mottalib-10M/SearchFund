import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function EmployeeRetentionAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Employee Retention After Acquisition: A Search Fund CEO&apos;s Playbook
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">18 min read</p>

      <div className={bodyClass}>
        <p>
          You just closed on a small business. The ink is dry, the wire hit, and
          you&apos;re the new owner. Your single biggest operational risk is now
          the people sitting in that building. According to a{" "}
          <a
            href="https://www.gallup.com/workplace/267494/stop-losing-talent-merge-acquire.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Gallup study on M&amp;A talent retention
          </a>
          , 47% of key employees leave within the first year of an acquisition,
          and 75% are gone within three years. For a search fund acquisition
          where the business often has 10&ndash;30 employees and one or two
          irreplaceable people, losing a single critical team member can wipe
          out 20&ndash;40% of the enterprise value you just paid for. This guide
          gives you a week-by-week, month-by-month retention plan built for
          the ETA operator who just walked through the door.
        </p>

        {/* ── Section 1 ── */}
        <h2 className={h2Class}>
          Why Retention Is the #1 Post-Close Risk in Small Business Acquisitions
        </h2>
        <p>
          Large-cap M&amp;A deals lose people at alarming rates, but the damage
          is even more concentrated in smaller companies. A{" "}
          <a
            href="https://www.mercer.com/insights/people-strategy/mergers-and-acquisitions/how-strategic-retention-drives-m-and-a-outcomes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Mercer analysis of over 200 transactions
          </a>{" "}
          found that approximately 40% of critical talent is lost within
          18&ndash;24 months post-close. In a Fortune 500 company, that loss is
          painful but survivable. In a $2M&ndash;$5M EBITDA business with a
          flat org chart, losing the operations manager who knows every
          customer by name or the lead technician who holds certifications the
          business depends on can be existential.
        </p>
        <p>
          Research from{" "}
          <a
            href="https://mitsloan.mit.edu/ideas-made-to-matter/your-acquired-hires-are-leaving-heres-why"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            MIT Sloan
          </a>{" "}
          analyzing 4,000 acquisitions and 350,000 transferred employees found
          that 33% of acquired workers leave within the first year &mdash;
          nearly three times the 12% departure rate of regular hires. The core
          reason: acquired employees didn&apos;t choose the new arrangement.
          They chose to work for the previous owner. You are an unknown, and
          uncertainty is the primary driver of flight.
        </p>
        <p>
          The stakes are clear. If you are assessing{" "}
          <Link
            href="/learn/key-person-risk"
            className="text-apple-accent hover:underline"
          >
            key-person risk
          </Link>{" "}
          during due diligence (and you should be), your retention plan is the
          direct mitigation strategy for what you found.
        </p>

        {/* ── Section 2 ── */}
        <h2 className={h2Class}>
          The Retention Timeline: When Employees Decide to Stay or Leave
        </h2>
        <p>
          Employee departures after an acquisition follow a predictable pattern.
          Understanding the timeline lets you intervene at the right moments
          instead of reacting to resignations.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Week 1&ndash;2 (Shock phase):</strong> Employees are
            stunned and watching. They are not yet job-searching, but they are
            forming first impressions of you that will be difficult to reverse.
            This is the window covered in your{" "}
            <Link
              href="/learn/day-one-announcement"
              className="text-apple-accent hover:underline"
            >
              Day One announcement plan
            </Link>
            .
          </li>
          <li>
            <strong>Month 1&ndash;3 (Evaluation phase):</strong> Employees
            start comparing the new reality to the old one. Recruiters begin
            calling &mdash; word travels fast in local industries. According to{" "}
            <a
              href="https://www.gallup.com/workplace/267494/stop-losing-talent-merge-acquire.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              Gallup research
            </a>
            , 90% of employees decide whether to stay or go within the first
            six months.
          </li>
          <li>
            <strong>Month 3&ndash;6 (Decision phase):</strong> This is peak
            voluntary departure. Employees who were uncertain have now either
            built trust with the new owner or started interviewing.
          </li>
          <li>
            <strong>Month 6&ndash;12 (Settling or exit phase):</strong>{" "}
            Retention bonuses with 12-month cliffs often expire here. Some
            employees collect their bonus and leave. The ones who stay past 12
            months are statistically likely to remain for the long term.
          </li>
          <li>
            <strong>Month 12&ndash;24 (Rebuild phase):</strong> The
            organization has stabilized. Voluntary turnover should return to
            baseline industry rates (typically 15&ndash;20% annually for SMBs).
          </li>
        </ul>

        {/* ── Section 3 ── */}
        <h2 className={h2Class}>
          Pre-Close: Identifying and Securing Critical Talent During Due Diligence
        </h2>
        <p>
          Retention planning starts before you sign the purchase agreement. Your{" "}
          <Link
            href="/learn/hr-employee-due-diligence"
            className="text-apple-accent hover:underline"
          >
            HR and employee due diligence
          </Link>{" "}
          process should produce a ranked list of every employee by retention
          priority.
        </p>

        <h3 className={h3Class}>Build your critical talent map</h3>
        <p>
          For each employee, assess three dimensions: <strong>
          replaceability</strong> (how long would it take to find a
          replacement?), <strong>revenue impact</strong> (what percentage of
          revenue depends on this person&apos;s relationships or skills?), and{" "}
          <strong>flight risk</strong> (are they underpaid, dissatisfied, or
          approached by competitors?).
        </p>
        <p>
          In a typical 15-person SMB, you will find 2&ndash;4 people who are
          truly critical. These might be the GM who runs daily operations, the
          lead salesperson who manages 60% of customer relationships, or the
          senior technician whose certifications take two years to obtain. These
          are the people who need individual retention plans &mdash; not a
          generic company-wide approach.
        </p>
        <p>
          If the business turns out to be heavily dependent on one person
          (often the seller), read our guide on{" "}
          <Link
            href="/learn/owner-dependent-business"
            className="text-apple-accent hover:underline"
          >
            acquiring an owner-dependent business
          </Link>{" "}
          for additional strategies.
        </p>

        <h3 className={h3Class}>Understand compensation gaps before you close</h3>
        <p>
          Many small business employees are underpaid relative to market. Owner-
          operators often set salaries years ago and never adjusted them. Pull
          compensation benchmarks from the Bureau of Labor Statistics or
          industry-specific salary surveys. If your key operations manager
          earns $72,000 and the market rate is $88,000, that $16,000 gap is a
          ticking time bomb. You should plan to close it at or shortly after
          closing.
        </p>

        {/* ── Section 4 ── */}
        <h2 className={h2Class}>
          Retention Bonuses: Structure, Amounts, and What Actually Works
        </h2>
        <p>
          A{" "}
          <a
            href="https://www.wtwco.com/en-us/insights/2024/03/2024-m-and-a-retention-study"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Willis Towers Watson M&amp;A Retention Study
          </a>{" "}
          found that 79% of acquirers who used formal retention plans kept at
          least 80% of targeted employees through the full retention period.
          Without a plan, you are relying on hope. Here is how to structure one
          for a search fund acquisition:
        </p>

        <h3 className={h3Class}>Sizing the retention pool</h3>
        <p>
          Willis Towers Watson data shows the median retention budget is
          approximately 1% of the purchase price. For a $4M acquisition, that
          means roughly $40,000 allocated to retention bonuses. In ETA
          acquisitions, where you are buying smaller companies with thinner
          management layers, consider budgeting 1.5&ndash;2.5% of the purchase
          price &mdash; the concentration risk is higher.
        </p>

        <h3 className={h3Class}>How much per person</h3>
        <p>
          The Willis Towers Watson study found median retention awards of 55%
          of base salary for senior leaders and 31% of base salary for other
          critical employees. For a search fund deal, practical ranges look like
          this:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>General Manager / Ops Manager:</strong> 30&ndash;50% of
            base salary ($25,000&ndash;$45,000 for someone earning $85,000)
          </li>
          <li>
            <strong>Key salesperson:</strong> 20&ndash;40% of base salary, or
            structure as enhanced commission guarantees for 12&ndash;18 months
          </li>
          <li>
            <strong>Senior technician / specialist:</strong> 20&ndash;35% of
            base salary ($12,000&ndash;$25,000 for someone earning $65,000)
          </li>
          <li>
            <strong>Office manager / bookkeeper:</strong> 15&ndash;25% of base
            salary ($8,000&ndash;$15,000)
          </li>
        </ul>

        <h3 className={h3Class}>Payment structure matters</h3>
        <p>
          Never pay retention bonuses in a lump sum at closing. Split the
          payment into installments tied to time and performance milestones:
        </p>
        <ol className={olClass}>
          <li>
            <strong>25% at 90 days</strong> &mdash; rewards surviving the
            transition shock
          </li>
          <li>
            <strong>25% at 6 months</strong> &mdash; bridges the peak
            departure window
          </li>
          <li>
            <strong>50% at 12 months</strong> &mdash; the largest tranche,
            creating a meaningful &ldquo;cost of leaving&rdquo; as the
            anniversary approaches
          </li>
        </ol>
        <p>
          Include a clawback clause: if the employee leaves voluntarily before
          the vesting date, any unpaid portions are forfeited. Most employment
          attorneys can draft a retention agreement for $1,500&ndash;$2,500.{" "}
          <a
            href="https://www.shrm.org/topics-tools/tools/forms/retention-bonus-agreement"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            SHRM provides template retention agreements
          </a>{" "}
          as a starting point.
        </p>

        {/* ── Section 5 ── */}
        <h2 className={h2Class}>
          Week 1: What to Do When You Walk Through the Door
        </h2>
        <p>
          Your first week sets the emotional tone for the entire transition.
          Employees are watching everything: what you wear, what you say, where
          you park, and whether you rearrange the owner&apos;s office. Get
          this right by following the framework in our{" "}
          <Link
            href="/learn/first-100-days"
            className="text-apple-accent hover:underline"
          >
            first 100 days plan
          </Link>
          .
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Hold an all-hands meeting within 48 hours.</strong> Keep it
            short (20 minutes). Introduce yourself, explain why you bought the
            business (you believe in it and its people), and commit to no
            immediate changes. State clearly: &ldquo;Nobody is losing their
            job because of this transaction.&rdquo;
          </li>
          <li>
            <strong>Schedule 1-on-1 meetings with every employee in the first
            5 days.</strong> Yes, every single one. In a 15-person company this
            takes about 8 hours total. Ask three questions: What do you do here
            that nobody else can do? What&apos;s the one thing you&apos;d fix
            if you could? What are you worried about? Then <em>listen</em>.
          </li>
          <li>
            <strong>Be physically present.</strong> Do not work from a remote
            office for the first 90 days. Sit in the building. Eat lunch with
            the team. Gallup&apos;s engagement data shows that only 22% of
            employees strongly agree their leadership has a clear direction
            &mdash; your physical presence signals exactly that.
          </li>
          <li>
            <strong>Honor every existing commitment.</strong> If the previous
            owner promised someone a raise, a vacation, or a schedule change
            &mdash; honor it. Breaking inherited promises is the fastest way to
            destroy trust.
          </li>
        </ul>
        <p>
          For deeper guidance on building credibility with a team that
          didn&apos;t choose you, read{" "}
          <Link
            href="/learn/building-trust-teams"
            className="text-apple-accent hover:underline"
          >
            building trust with your new team
          </Link>
          .
        </p>

        {/* ── Section 6 ── */}
        <h2 className={h2Class}>
          Month 1&ndash;3: Stabilize, Listen, and Close Compensation Gaps
        </h2>
        <p>
          The first quarter is about earning the right to lead. You are not the
          boss yet &mdash; you are the new person who happens to own the company.
          Credibility comes from competence and consistency, not from the title
          on your business card.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Conduct a total compensation audit.</strong> Compare every
            employee&apos;s pay, benefits, and perks to market rates. Identify
            the biggest gaps and close them. A $5,000 raise for a 10-year
            employee who has been underpaid for years is the highest-ROI
            investment you will make.
          </li>
          <li>
            <strong>Upgrade benefits where it&apos;s easy.</strong> Many small
            businesses have minimal benefits. Adding or improving a 401(k)
            match, dental coverage, or PTO policy costs relatively little but
            signals professional management. See our guide on{" "}
            <Link
              href="/learn/compensation-incentive-design"
              className="text-apple-accent hover:underline"
            >
              compensation and incentive design
            </Link>{" "}
            for structures that work.
          </li>
          <li>
            <strong>Do not reorganize.</strong> Resist the MBA urge to
            restructure reporting lines, change job titles, or introduce new
            processes. Every change creates anxiety.{" "}
            <a
              href="https://hbr.org/2024/02/the-challenge-of-retaining-startup-talent-after-an-acquisition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              Harvard Business Review research on post-acquisition retention
            </a>{" "}
            consistently finds that cultural disruption is the top driver of
            departures.
          </li>
          <li>
            <strong>Communicate weekly.</strong> Send a brief weekly update
            (even if there&apos;s nothing to update). Silence breeds rumors. A
            simple &ldquo;Here&apos;s what I&apos;m working on and what&apos;s
            coming next&rdquo; email keeps the team grounded.
          </li>
          <li>
            <strong>Deliver quick wins.</strong> Fix the broken HVAC, replace
            the ancient printer, repave the parking lot. These small
            investments show employees that the new owner invests in the
            business &mdash; and by extension, in them.
          </li>
        </ul>

        {/* ── Section 7 ── */}
        <h2 className={h2Class}>
          Quarter 2&ndash;4: Building Long-Term Loyalty Through Growth and Equity
        </h2>
        <p>
          Once you have stabilized the team and built baseline trust, shift
          from &ldquo;don&apos;t lose people&rdquo; to &ldquo;make people want
          to stay.&rdquo; Retention bonuses buy you 12 months. Culture,
          career paths, and ownership keep people for a decade.
        </p>

        <h3 className={h3Class}>Career development conversations</h3>
        <p>
          Most SMB employees have never had a formal career development
          conversation. The previous owner was focused on running the business,
          not on developing talent. Sit down with each key employee and ask:
          Where do you want to be in 3 years? What skills do you want to build?
          Then create a written plan and fund it. Send your operations manager
          to a leadership program ($3,000&ndash;$5,000). Pay for your
          technician&apos;s next certification ($1,500&ndash;$3,000). These
          investments have massive retention returns because they signal a
          commitment to the <em>person</em>, not just the role.
        </p>

        <h3 className={h3Class}>Phantom equity and profit-sharing</h3>
        <p>
          For your top 2&ndash;4 employees, consider implementing a{" "}
          <Link
            href="/learn/employee-equity-incentives"
            className="text-apple-accent hover:underline"
          >
            phantom equity or profit-sharing plan
          </Link>
          . Phantom equity grants employees a percentage of the company&apos;s
          value appreciation without diluting actual ownership. A typical
          structure for a search fund acquisition:
        </p>
        <ul className={ulClass}>
          <li>
            Allocate 5&ndash;15% of equity value appreciation to a phantom
            equity pool
          </li>
          <li>
            Vest over 3&ndash;4 years with a one-year cliff
          </li>
          <li>
            Pay out upon a future sale of the business or via annual
            distributions tied to EBITDA growth
          </li>
          <li>
            For a $3M EBITDA business that grows to $5M under new management, a
            10% phantom equity pool distributes $200,000 across
            2&ndash;4 key employees &mdash; a life-changing sum that
            costs you nothing out of pocket today
          </li>
        </ul>

        <h3 className={h3Class}>
          Promote from within and expand responsibilities
        </h3>
        <p>
          Giving a long-tenured employee a &ldquo;Director of Operations&rdquo;
          title costs nothing and signals career trajectory. Search fund CEOs
          often underestimate how meaningful a title change and expanded
          responsibilities are to someone who has worked the same role for a
          decade. Pair the title with genuine authority &mdash; let them own
          their budget, hire for their team, and report directly to you. Read
          our guide on{" "}
          <Link
            href="/learn/middle-management"
            className="text-apple-accent hover:underline"
          >
            developing middle management
          </Link>{" "}
          for frameworks on building a leadership layer beneath you.
        </p>

        {/* ── Section 8 ── */}
        <h2 className={h2Class}>
          The Retention Math: Why Spending $50K Saves $500K
        </h2>
        <p>
          Let&apos;s run a concrete example for a $3M EBITDA HVAC company with
          22 employees, acquired for $12M (4x multiple):
        </p>

        <p className="font-semibold mt-4">Retention budget (1.5% of purchase price): $180,000</p>
        <ul className={ulClass}>
          <li>
            <strong>Operations Manager (base: $95K):</strong> $40,000 retention
            bonus (42% of salary) paid over 12 months, plus $10,000 salary
            increase to match market rate. Total year-one cost: $50,000.
          </li>
          <li>
            <strong>Lead Sales Rep (base: $75K + commission):</strong> $25,000
            retention bonus (33% of salary) plus 12-month commission guarantee
            at 110% of trailing average. Total incremental cost: ~$32,000.
          </li>
          <li>
            <strong>Senior Service Technician (base: $68K):</strong> $18,000
            retention bonus (26% of salary) plus $4,000 certification
            reimbursement. Total: $22,000.
          </li>
          <li>
            <strong>Office Manager / AR Lead (base: $52K):</strong> $12,000
            retention bonus (23% of salary) plus benefits upgrade. Total:
            $15,000.
          </li>
          <li>
            <strong>Remaining budget:</strong> $61,000 reserved for
            compensation adjustments, team-wide benefits improvements, and
            contingency.
          </li>
        </ul>

        <p className="mt-4">
          <strong>The downside scenario without retention spending:</strong>{" "}
          If the Operations Manager leaves, recruiting a replacement takes
          4&ndash;6 months, costs $25,000&ndash;$40,000 in recruiter fees, and
          results in $150,000&ndash;$300,000 in productivity loss and customer
          disruption during the vacancy. If the Lead Sales Rep leaves and takes
          even 20% of the customer base, you lose $600K+ in annual revenue. The
          $180,000 retention budget is insurance against a potential $500,000&ndash;
          $1,000,000 in value destruction.
        </p>

        {/* ── Section 9 ── */}
        <h2 className={h2Class}>
          When People Leave Despite Your Best Efforts
        </h2>
        <p>
          Not every departure is a failure. Some turnover is healthy &mdash; an
          underperformer who self-selects out saves you the difficult
          conversation covered in our{" "}
          <Link
            href="/learn/when-to-let-people-go"
            className="text-apple-accent hover:underline"
          >
            guide on when to let people go
          </Link>
          . But when someone critical leaves, you need a response plan:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Conduct an honest exit interview.</strong> Ask: What would
            have made you stay? Was there a specific event that triggered your
            decision? Patterns in exit feedback reveal systemic issues you
            might be blind to.
          </li>
          <li>
            <strong>Cross-train proactively.</strong> For every critical role,
            at least one other employee should know 80% of the job. This is
            non-negotiable.{" "}
            <Link
              href="/learn/customer-concentration-risk"
              className="text-apple-accent hover:underline"
            >
              Customer concentration risk
            </Link>{" "}
            and people concentration risk follow the same logic: diversify
            before you are forced to.
          </li>
          <li>
            <strong>Document institutional knowledge.</strong> Key processes,
            customer preferences, vendor contacts, pricing history, equipment
            quirks &mdash; get it out of people&apos;s heads and into written
            SOPs during the first 90 days, while people are still there.
          </li>
          <li>
            <strong>Build a recruiting pipeline before you need it.</strong>{" "}
            Network with local trade schools, industry associations, and
            recruiters. The worst time to start recruiting is the day someone
            resigns.
          </li>
        </ul>

        {/* ── Section 10: Special Cases ── */}
        <h2 className={h2Class}>
          Special Retention Challenges in Search Fund Acquisitions
        </h2>
        <ul className={ulClass}>
          <li>
            <strong>The seller&apos;s family members.</strong> If the previous
            owner&apos;s children or spouse work in the business, tread
            carefully. They may feel entitlement, resentment, or loyalty
            conflicts. Assess their actual contribution honestly. If they are
            genuinely valuable, treat them like any other critical employee. If
            they are underperforming, handle it only after you have built
            sufficient trust and authority (typically month 6+).
          </li>
          <li>
            <strong>The &ldquo;shadow CEO.&rdquo;</strong> In many SMBs, one
            long-tenured employee &mdash; often someone who has been there 15+
            years &mdash; effectively runs the daily operations. The team
            respects them more than they will respect you initially. This
            person is not a threat; they are your most important ally. Elevate
            them, compensate them generously, and give them genuine authority.
          </li>
          <li>
            <strong>The age-gap dynamic.</strong> Search fund CEOs are often in
            their late 20s or 30s, managing employees who are decades older and
            have decades more industry experience. Do not try to impress them
            with your MBA knowledge. Lead with respect, curiosity, and
            humility. Ask for their opinion before making decisions that affect
            their domain.
          </li>
          <li>
            <strong>Union employees.</strong> If the business has union workers,
            retention is partly governed by the collective bargaining agreement.
            Review the CBA during due diligence and understand what you can and
            cannot change about compensation and working conditions.
          </li>
        </ul>

        {/* ── FAQ ── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          How much should I budget for employee retention after acquiring a
          small business?
        </h3>
        <p>
          Plan for 1.5&ndash;2.5% of the total purchase price as your
          first-year retention budget. For a $4M acquisition, that means
          $60,000&ndash;$100,000 allocated across retention bonuses,
          compensation adjustments, and benefits improvements. The{" "}
          <a
            href="https://www.wtwco.com/en-us/insights/2024/03/2024-m-and-a-retention-study"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            2024 WTW M&amp;A Retention Study
          </a>{" "}
          found the median retention pool across all deal sizes is about 1% of
          purchase price, but small business acquisitions warrant a higher
          percentage because individual employees carry more concentrated risk.
        </p>

        <h3 className={h3Class}>
          When should I tell employees about the acquisition?
        </h3>
        <p>
          In most search fund deals, employees learn about the change of
          ownership at or immediately after closing. The seller typically
          handles the initial announcement with you present. Hold a joint
          meeting where the seller introduces you, endorses you, and explains
          the transition. Follow up with individual 1-on-1 conversations within
          the first week. For a detailed communication playbook, see our guide
          on{" "}
          <Link
            href="/learn/day-one-announcement"
            className="text-apple-accent hover:underline"
          >
            Day One announcements
          </Link>
          .
        </p>

        <h3 className={h3Class}>
          Should I offer retention bonuses to every employee or only key people?
        </h3>
        <p>
          Focus formal retention agreements on your top 3&ndash;5 critical
          employees. Spreading the budget too thin dilutes the impact. For the
          broader team, retention comes through actions: consistent
          communication, honoring commitments, benefits improvements, and
          showing up as a competent, caring leader. A $5,000 retention bonus
          split among 15 people is $333 each &mdash; meaningless. That same
          $5,000 concentrated on one critical technician is a real incentive.
        </p>

        <h3 className={h3Class}>
          What if the best employees leave despite my retention efforts?
        </h3>
        <p>
          First, diagnose why. If multiple key people leave in months 1&ndash;3,
          the problem is likely communication or trust. If departures cluster
          at the 12-month mark, they may be collecting retention bonuses and
          leaving &mdash; which means the bonus bought you time but you failed
          to build a compelling reason to stay beyond the money. Use the time
          that retention bonuses buy you to build culture, career paths, and
          equity participation that create genuine long-term commitment.
        </p>

        <h3 className={h3Class}>
          How do I retain employees when I can&apos;t match big-company
          salaries?
        </h3>
        <p>
          You compete on dimensions that large companies cannot offer:
          proximity to ownership (they work directly with the CEO), speed of
          advancement (promotions in months, not years), autonomy and decision-
          making authority, equity participation through phantom equity or
          profit-sharing, flexibility in schedules and work arrangements, and
          a genuine personal relationship with leadership. Gallup data shows an
          engaged employee needs to be offered{" "}
          <a
            href="https://www.gallup.com/workplace/267494/stop-losing-talent-merge-acquire.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            over 20% more in salary
          </a>{" "}
          to switch jobs. Build engagement, and compensation becomes less of a
          vulnerability.
        </p>

        {/* ── Closing ── */}
        <p>
          Employee retention after an acquisition is not a one-time event &mdash;
          it is an ongoing campaign that starts during{" "}
          <Link
            href="/learn/hr-employee-due-diligence"
            className="text-apple-accent hover:underline"
          >
            HR due diligence
          </Link>{" "}
          and continues through your entire ownership period. Budget for it,
          plan for it, and treat it with the same rigor you applied to the
          deal&apos;s financial model. The people in the building are the
          business. Keep them, and you keep the value you paid for.
        </p>
      </div>
    </article>
  );
}
