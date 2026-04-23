import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SearchFundDealFlowCRMArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund Deal Flow CRM: Organizing Your Pipeline</h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          A search fund is, at its core, a deal-finding machine. Over 18 to 24
          months you will evaluate hundreds of companies, exchange thousands of
          emails with brokers and owners, and submit a handful of letters of
          intent &mdash; all in pursuit of a single acquisition. Without a
          structured system for tracking every interaction and opportunity, you
          will inevitably lose deals to disorganization: missed follow-ups,
          duplicated outreach, and forgotten commitments that erode your
          credibility. A purpose-built CRM is not optional &mdash; it is the
          backbone of a disciplined{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">deal sourcing strategy</Link>.
        </p>

        <h2 className={h2Class}>Why searchers need a dedicated CRM</h2>
        <p>
          If you are new to{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">entrepreneurship through acquisition</Link>,
          you might assume a spreadsheet or your inbox is enough to manage deal
          flow. But the volume scales fast. The typical searcher contacts 800
          to 1,500 companies, holds 150 to 250 substantive conversations, and
          signs 30 to 60 NDAs. A CRM solves three critical problems: it
          prevents deal leakage &mdash; opportunities that fall through the
          cracks because no one followed up; it produces the pipeline metrics
          your investors expect in monthly updates; and it creates
          institutional memory so you know exactly whom you spoke with, what
          they said, and why you passed when you revisit an industry six
          months later.
        </p>

        <h2 className={h2Class}>Choosing the right CRM platform</h2>
        <p>
          There is no single &ldquo;best&rdquo; CRM for search funds. The
          right choice depends on your technical comfort, budget, and whether
          you are searching solo or with a partner.
        </p>

        <h3 className={h3Class}>HubSpot CRM (free tier)</h3>
        <p>
          HubSpot&rsquo;s free CRM is the most popular choice among
          traditional search fund entrepreneurs. The free tier supports
          unlimited contacts, custom deal stages, email tracking, task
          management, and basic reporting. Create two separate pipelines
          &mdash; one for acquisition targets, one for investor
          relationships. The built-in email integration logs messages
          automatically. Upgrade to the Starter plan ($20/month) when you
          need workflow automation.
        </p>

        <h3 className={h3Class}>Pipedrive</h3>
        <p>
          Pipedrive ($14.90/month) is a visual, kanban-style CRM that many
          searchers prefer for its simplicity. The drag-and-drop pipeline
          view shows exactly where every deal stands at a glance.
          Pipedrive&rsquo;s mobile app is notably superior to most
          competitors &mdash; important when you are updating deal notes
          between seller meetings. It is lighter on reporting than HubSpot
          but faster to set up and easier to maintain for a solo operator.
        </p>

        <h3 className={h3Class}>Airtable</h3>
        <p>
          Airtable occupies a middle ground between a spreadsheet and a
          database. It appeals to searchers who want maximum flexibility:
          custom views, linked tables connecting company records to contacts
          and brokers, and files attached directly to deal records. It excels
          at tracking qualitative details &mdash; industry research notes,
          competitive landscape summaries, and scoring rubrics. The free tier
          is sufficient for most searches.
        </p>

        <h3 className={h3Class}>Custom spreadsheets</h3>
        <p>
          Some searchers &mdash; particularly self-funded searchers with lean
          budgets &mdash; start with Google Sheets or Excel. A spreadsheet
          CRM can work if you update it daily and design it thoughtfully:
          separate tabs for companies, contacts, brokers, and a pipeline
          dashboard. The weakness is that spreadsheets lack automation, email
          integration, and collaborative features, and they become unwieldy
          past 200 to 300 tracked companies. If you start here, plan to
          migrate within three months.
        </p>

        <h2 className={h2Class}>Defining your pipeline stages</h2>
        <p>
          The pipeline is the heart of your CRM. Each stage represents a
          meaningful milestone, and moving a deal forward should require a
          deliberate action and clear criteria. This eight-stage framework
          aligns with what investors expect to see in pipeline reports.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Identified:</strong> A company that fits your acquisition
            criteria based on publicly available information. No contact has
            been made. This is your top-of-funnel holding pen.
          </li>
          <li>
            <strong>Outreach:</strong> You have sent an initial email, letter,
            or LinkedIn message. The clock starts on your follow-up cadence.
            After three to four touches over six weeks with no response, move
            the company to &ldquo;dormant&rdquo; for later re-engagement.
          </li>
          <li>
            <strong>Initial call:</strong> A substantive first conversation
            has taken place with the owner or broker. You have discussed the
            business at a high level and confirmed mutual interest.
          </li>
          <li>
            <strong>NDA signed:</strong> Both parties have executed a
            non-disclosure agreement. This is a critical qualification gate
            &mdash; it signals the seller is serious enough to share real data.
          </li>
          <li>
            <strong>CIM review:</strong> You have received and reviewed the
            Confidential Information Memorandum. You should be building a
            preliminary financial model and identifying key management questions.
          </li>
          <li>
            <strong>LOI:</strong> You have submitted a Letter of Intent. Most
            searchers submit three to six LOIs over the life of a search, so
            this stage should reflect genuine conviction.
          </li>
          <li>
            <strong>Due diligence:</strong> Your LOI has been accepted and you
            are conducting formal{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link>{" "}
            &mdash; financial, legal, commercial, and operational. This is the
            most resource-intensive stage, typically lasting 60 to 90 days.
          </li>
          <li>
            <strong>Closed:</strong> The acquisition is complete. Your CRM
            transitions from a deal-tracking tool to a record of the journey.
          </li>
        </ol>
        <p>
          Create a &ldquo;Passed&rdquo; status with a required field for the
          decline reason: asking price too high, EBITDA too small, customer
          concentration, declining revenue, owner unwilling to transition, or
          industry outside thesis. This data becomes invaluable for refining
          your criteria and reporting to investors.
        </p>

        <h2 className={h2Class}>Tracking the metrics that matter</h2>
        <p>
          A CRM without reporting is just an address book. The metrics you
          track weekly reveal whether your search engine is running efficiently
          and form the backbone of your investor updates.
        </p>

        <h3 className={h3Class}>Activity metrics</h3>
        <ul className={ulClass}>
          <li>
            <strong>Outreach volume:</strong> Target 20 to 40 new outreach
            touches per week across email, LinkedIn, phone, and direct mail.
            Consistent top-of-funnel activity is the strongest predictor of
            search success.
          </li>
          <li>
            <strong>Conversations held:</strong> Target 5 to 10 substantive
            calls or meetings per week. High outreach volume with few
            conversations signals a messaging problem.
          </li>
          <li>
            <strong>NDAs signed:</strong> Target 2 to 4 per month. Fewer
            suggests insufficient interest; significantly more may mean you
            are signing NDAs too liberally and diluting review bandwidth.
          </li>
        </ul>

        <h3 className={h3Class}>Conversion metrics</h3>
        <ul className={ulClass}>
          <li>
            <strong>Response rate:</strong> Benchmark 10%&ndash;20% for cold
            email, 20%&ndash;35% for LinkedIn, 40%&ndash;60% for warm
            introductions. Track by channel so you can allocate time to the
            highest-performing methods.
          </li>
          <li>
            <strong>Conversation-to-NDA rate:</strong> Benchmark 20%&ndash;30%.
            A low rate indicates poor initial qualification &mdash; you are
            spending time on conversations with no real potential.
          </li>
          <li>
            <strong>NDA-to-LOI rate:</strong> Benchmark 5%&ndash;10%. This is
            the stage where analytical rigor and{" "}
            <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">pre-search preparation</Link>{" "}
            pay dividends.
          </li>
          <li>
            <strong>LOI-to-close rate:</strong> The industry average is roughly
            20%&ndash;30%, meaning you should expect to submit three to six
            LOIs before closing.
          </li>
        </ul>

        <h3 className={h3Class}>Pipeline health metrics</h3>
        <ul className={ulClass}>
          <li>
            <strong>Stage distribution:</strong> You want a healthy spread
            &mdash; a large identified pool, meaningful outreach and
            conversation numbers, and at least two to three companies in
            active financial review. An empty mid-funnel is a warning sign.
          </li>
          <li>
            <strong>Average time in stage:</strong> Set maximum dwell times:
            2 weeks for identified, 6 weeks for outreach, 2 weeks for initial
            call follow-up, 3 weeks for CIM review. Deals that linger suggest
            indecision.
          </li>
          <li>
            <strong>Source attribution:</strong> Track every opportunity back
            to its source &mdash; specific broker, platform, outreach campaign,
            or referral &mdash; so you can double down on what works.
          </li>
        </ul>

        <h2 className={h2Class}>Organizing broker relationships</h2>
        <p>
          Brokers are the lifeblood of intermediated deal flow, and your CRM
          should treat them as a distinct relationship category. Create a
          dedicated view with fields for broker name, firm, geographic
          coverage, industry specialization, deal size range, number of deals
          sent, quality rating (A/B/C), last contact date, and next follow-up.
        </p>
        <p>
          Segment brokers into tiers. &ldquo;A-tier&rdquo; brokers &mdash;
          those who consistently send relevant, right-sized deals &mdash;
          deserve personal outreach every three to four weeks. &ldquo;B-tier&rdquo;
          brokers get monthly email updates with your refreshed criteria.
          &ldquo;C-tier&rdquo; brokers receive quarterly touchpoints. The goal
          is to be the first buyer a top broker calls when a new mandate
          comes in. Record every deal a broker sends, even immediate passes
          &mdash; it builds a complete picture of their deal flow profile
          and lets you give constructive feedback. For a deeper look at
          sourcing channels, see our guide on{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">deal sourcing strategies</Link>.
        </p>

        <h2 className={h2Class}>Building a deal scoring framework</h2>
        <p>
          Not all deals deserve equal attention. A scoring framework helps you
          triage quickly and explain your prioritization to investors. Build a
          weighted scorecard with five to eight criteria, each rated
          1&ndash;5.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Financial attractiveness (25%):</strong> Revenue size,
            EBITDA margin, growth trajectory, and asking price relative to
            your target range.
          </li>
          <li>
            <strong>Industry fit (20%):</strong> Recurring revenue, low
            cyclicality, and fragmented competitive landscapes score highest.
          </li>
          <li>
            <strong>Owner transition readiness (15%):</strong> Genuine seller
            motivation and willingness to support a transition period. Owner
            ambivalence is the number-one deal killer.
          </li>
          <li>
            <strong>Customer concentration (15%):</strong> No single customer
            above 10%&ndash;15% of revenue is strongly preferred.
          </li>
          <li>
            <strong>Operational complexity (10%):</strong> Regulatory burden,
            supply chain complexity, and specialized technical requirements
            increase risk for a first-time CEO.
          </li>
          <li>
            <strong>Geographic fit (10%):</strong> Relocation willingness
            should be determined during{" "}
            <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">pre-search preparation</Link>,
            not during diligence.
          </li>
          <li>
            <strong>Growth potential (5%):</strong> Identifiable levers for
            revenue growth, margin expansion, or bolt-on acquisitions
            post-close.
          </li>
        </ul>
        <p>
          Automate scoring within your CRM using custom fields. Deals below
          3.0/5.0 should be passed unless there is a compelling qualitative
          reason to continue. Deals at 4.0 or above warrant accelerated
          review and LOI preparation.
        </p>

        <h2 className={h2Class}>The weekly pipeline review</h2>
        <p>
          A weekly pipeline review is the single most important habit you can
          build. Block 60 to 90 minutes every Monday morning for a structured
          review of your entire pipeline.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Review active deals:</strong> Walk through every deal at
            initial-call stage or beyond. If a deal has been idle for more
            than two weeks without a next step, force a decision: advance or
            pass.
          </li>
          <li>
            <strong>Check follow-up queue:</strong> Have outreach sequences
            been executed on schedule? Identify contacts that need a personal
            touch beyond automated sequences.
          </li>
          <li>
            <strong>Update metrics dashboard:</strong> Calculate this
            week&rsquo;s activity and conversion metrics. Compare against
            targets and the four-week rolling average.
          </li>
          <li>
            <strong>Plan the week ahead:</strong> Set specific goals &mdash;
            companies to identify, messages to send, calls to schedule. Write
            them down.
          </li>
          <li>
            <strong>Prepare investor talking points:</strong> Draft the
            pipeline summary section when data is fresh. A well-organized CRM
            makes investor updates a 30-minute exercise rather than a
            half-day scramble.
          </li>
        </ol>
        <p>
          For partnership searches, conduct the review together to align on
          prioritization and divide follow-up responsibilities.
        </p>

        <h2 className={h2Class}>CRM best practices from experienced searchers</h2>
        <p>
          The{" "}
          <Link href="/learn/searcher-tools" className="text-apple-accent hover:underline">technology stack</Link>{" "}
          you choose matters less than the discipline with which you use it.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Log every interaction within 24 hours:</strong> A call
            that isn&rsquo;t recorded didn&rsquo;t happen. Capture date,
            participants, key points, seller motivation, and next steps. Use
            voice memos after meetings and transcribe them the same day.
          </li>
          <li>
            <strong>Standardize data entry:</strong> Use dropdowns instead of
            free text for industry codes, deal sources, pass reasons, and
            stages. Inconsistent data makes reporting impossible.
          </li>
          <li>
            <strong>Tag deals by thesis:</strong> If you evaluate multiple
            industries, tag each deal with a thesis code to filter your
            pipeline by theme and track which theses generate traction.
          </li>
          <li>
            <strong>Set automated reminders:</strong> Alert yourself when a
            deal exceeds its maximum dwell time at a stage. Stale deals
            consume mental bandwidth without advancing your search.
          </li>
          <li>
            <strong>Back up monthly:</strong> Export your entire CRM to a
            spreadsheet at the start of each month. Your pipeline data is too
            critical to lose to a platform outage.
          </li>
        </ul>

        <h2 className={h2Class}>Common mistakes to avoid</h2>
        <p>
          Two failure modes appear far more often than any others:
          over-engineering and under-documenting. Both are fatal to search
          efficiency.
        </p>

        <h3 className={h3Class}>Over-engineering your CRM</h3>
        <p>
          Some searchers spend weeks building an elaborate Airtable or Notion
          system with dozens of linked tables and beautiful dashboards &mdash;
          before contacting a single company. This is procrastination disguised
          as productivity. Your CRM needs three things on day one: contact
          storage, pipeline stages, and follow-up reminders. Everything else
          can be added incrementally as genuine needs emerge.
        </p>

        <h3 className={h3Class}>Under-documenting your interactions</h3>
        <p>
          The opposite failure is the searcher who treats the CRM as a
          glorified contact list. Names and emails are entered, but
          conversation notes are sparse, deal scores are never assigned, and
          pass reasons read &ldquo;not a fit&rdquo; without detail. Six months
          in, this searcher cannot answer basic questions: How many HVAC
          companies have I reviewed? What did that Dallas broker say? Why did
          I pass on that $3M EBITDA company in February? Thorough
          documentation pays compound returns &mdash; it accelerates weekly
          reviews, strengthens investor updates, and builds the pattern
          recognition that sharpens deal evaluation over time.
        </p>

        <h3 className={h3Class}>Other common pitfalls</h3>
        <ul className={ulClass}>
          <li>
            <strong>Tracking too many &ldquo;maybe&rdquo; deals:</strong> A
            bloated pipeline creates a false sense of activity. Be ruthless
            about passing on deals that don&rsquo;t meet your criteria.
          </li>
          <li>
            <strong>Ignoring dormant leads:</strong> Set a quarterly
            re-engagement cadence. Seller circumstances change &mdash; a
            retirement, a health event, or a bad quarter can turn a
            &ldquo;not now&rdquo; into an eager seller.
          </li>
          <li>
            <strong>Failing to separate broker and deal pipelines:</strong>{" "}
            Your relationship with a broker is ongoing and independent of any
            specific deal. Track brokers in a dedicated view so passing on a
            deal never means losing touch with the broker who sent it.
          </li>
        </ul>

        <h2 className={h2Class}>Putting it all together</h2>
        <p>
          Your CRM is not a chore &mdash; it is a competitive advantage. The
          searcher with a well-organized pipeline, clear metrics, and
          disciplined follow-up habits will find better deals and close faster
          than the searcher who relies on memory and a cluttered inbox. The
          investment pays dividends throughout the search and well into the{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link>{" "}
          phase that follows.
        </p>
        <p>
          Start simple. Choose a platform that matches your workflow. Define
          your pipeline stages on day one. Commit to logging every interaction
          within 24 hours. Review your pipeline every Monday without
          exception. The searchers who build these habits early are the ones
          who close deals &mdash; and the ones who build enduring businesses
          on the other side. If you are still in the planning phase, begin
          with our{" "}
          <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">pre-search preparation</Link>{" "}
          guide to ensure your foundation is solid before filling your
          pipeline.
        </p>
      </div>
    </article>
  );
}
