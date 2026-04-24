import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function KeyPersonRiskArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Key Person Risk in Search Fund Acquisitions: How to Find It, Price It, and Fix It
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          A Stanford GSB study of 401 search fund acquisitions found that
          &ldquo;people risk&rdquo;&mdash;specifically the loss of critical
          employees or over-reliance on the departing owner&mdash;was the single
          most cited reason for post-close underperformance. In smaller
          businesses with $1&ndash;5M EBITDA, three to five individuals often
          control 70&ndash;90% of customer relationships, institutional
          knowledge, and operational continuity. If any of them walks out the
          door, revenue follows. This article gives you a practical system to
          identify key person risk during{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>, quantify its impact on valuation, and neutralize it
          before&mdash;and after&mdash;you close.
        </p>

        {/* ───────────── H2 #1 ───────────── */}
        <h2 className={h2Class}>What Key Person Risk Actually Means in ETA</h2>
        <p>
          Key person risk is the probability that a business suffers material
          harm&mdash;lost revenue, broken processes, customer churn&mdash;when a
          specific individual leaves. Every company has some. But in
          owner-operated small businesses, the concentration is extreme.
        </p>
        <p>
          The typical search fund target was built by a founder who spent 15&ndash;25
          years embedding themselves in every dimension of the business: selling
          to the top accounts, setting prices by gut feel, approving every
          purchase order, and personally resolving the hardest customer
          complaints. That founder is about to leave. You are about to replace
          them. The gap between what they carry in their head and what is written
          down anywhere is the core of your key person risk.
        </p>
        <p>
          But the owner is not the only risk. Key person risk shows up in three
          distinct forms:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Revenue-critical:</strong> A salesperson who personally manages
            40% of billings, or a project manager whose relationships keep the
            three largest contracts renewing every year.
          </li>
          <li>
            <strong>Operations-critical:</strong> A plant manager who is the only
            person who can calibrate the CNC machines, or a scheduler who
            hand-manages the dispatch of 30 field technicians from memory.
          </li>
          <li>
            <strong>Knowledge-critical:</strong> The bookkeeper who knows the
            pricing logic for 4,000 SKUs, the IT contractor who built the
            custom ERP, or the office manager who holds every vendor
            relationship and negotiation history.
          </li>
        </ul>
        <p>
          The rule of thumb: if one person&rsquo;s departure would cause more
          than 10% revenue loss or a multi-week operational disruption, that
          person is a key person. In search fund targets, you will typically
          identify three to seven of them.
        </p>

        {/* ───────────── H2 #2 ───────────── */}
        <h2 className={h2Class}>
          Identifying Key Person Risk During Due Diligence
        </h2>
        <p>
          Most acquirers ask the seller, &ldquo;Who are your most important
          employees?&rdquo; This is the wrong question. Sellers have blind
          spots&mdash;they underestimate their own centrality and overestimate
          their team&rsquo;s autonomy. Instead, use three independent
          detection methods and triangulate.
        </p>

        <h3 className={h3Class}>1. Revenue concentration analysis</h3>
        <p>
          Pull two years of invoicing data and map every dollar of revenue to
          the person who owns the customer relationship. You are looking for
          concentration ratios:
        </p>
        <ul className={ulClass}>
          <li>
            Does any one person (including the owner) control more than 25% of
            total revenue through direct relationships?
          </li>
          <li>
            Do the top three customers represent more than 30% of revenue? If
            so, who manages each of those accounts?
          </li>
          <li>
            Would the customer continue buying from the company if their
            primary contact left? (Call references to find out.)
          </li>
        </ul>
        <p>
          A{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
            quality of earnings analysis
          </Link>{" "}
          can reveal customer concentration, but it won&rsquo;t tell you
          <em> who</em> inside the company is holding those relationships together.
          That requires interviews.
        </p>

        <h3 className={h3Class}>2. The &ldquo;vacation test&rdquo;</h3>
        <p>
          Ask the seller: &ldquo;What happens when [person] takes two weeks
          off?&rdquo; If the answer is &ldquo;they don&rsquo;t take two weeks
          off&rdquo; or &ldquo;things pile up until they get back,&rdquo; you
          have found a key person. Run this test for every manager and every
          person named more than twice in your diligence interviews.
        </p>

        <h3 className={h3Class}>3. Process dependency mapping</h3>
        <p>
          List the 10&ndash;15 processes that keep the business running: sales,
          estimating, billing, scheduling, production, quality control,
          procurement, customer service, HR, and IT. For each one, write down
          who executes it, who can back it up, and where the instructions live
          (if anywhere). Any process with a single executor and no written SOP
          is a key person risk node.
        </p>
        <p>
          Understanding{" "}
          <Link href="/learn/seller-psychology" className="text-apple-accent hover:underline">
            seller psychology
          </Link>{" "}
          helps here. Owners often resist admitting how central they are because
          it threatens the sale. Frame your questions around
          &ldquo;continuity planning&rdquo; rather than &ldquo;risk.&rdquo;
        </p>

        {/* ───────────── H2 #3 ───────────── */}
        <h2 className={h2Class}>
          The Owner-as-Rainmaker Problem
        </h2>
        <p>
          The most dangerous form of key person risk in search fund deals is
          the owner who is also the primary salesperson. IESE&rsquo;s 2022
          International Search Fund Study reported that in 60% of acquired
          businesses, the selling owner was directly responsible for the
          majority of new business development. When they leave, the sales
          pipeline does not just slow&mdash;it stops.
        </p>
        <p>
          Warning signs of the owner-as-rainmaker:
        </p>
        <ul className={ulClass}>
          <li>
            No dedicated sales staff, or sales staff who only handle inbound
            inquiries while the owner does all outbound and relationship selling.
          </li>
          <li>
            Customer contracts, proposals, and pricing decisions all route
            through the owner for final approval.
          </li>
          <li>
            The owner personally attends every major trade show, golf outing,
            and industry event where new business originates.
          </li>
          <li>
            The CRM (if one exists) lives in the owner&rsquo;s head,
            Rolodex, or personal email account.
          </li>
        </ul>
        <p>
          If this describes your target, you must plan for a 6&ndash;18 month
          revenue dip after close. Model it explicitly in your{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            valuation
          </Link>{" "}
          and negotiate deal terms that account for it. Pretending it
          won&rsquo;t happen is how search fund CEOs end up missing their first
          covenant test.
        </p>

        {/* ───────────── H2 #4 ───────────── */}
        <h2 className={h2Class}>
          Quantifying Key Person Risk: A Scoring Framework
        </h2>
        <p>
          Vague statements like &ldquo;this business has high key person
          risk&rdquo; do not help you negotiate or plan. You need a framework
          that produces a number. Here is one that works.
        </p>
        <p>
          For each identified key person, score four dimensions on a 1&ndash;5
          scale:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Impact magnitude (1&ndash;5):</strong> If they left tomorrow,
            how much revenue or operational capacity is at risk? (1 = under 5%;
            5 = over 25%.)
          </li>
          <li>
            <strong>Replaceability (1&ndash;5):</strong> How long to hire and
            train a replacement to 80% effectiveness? (1 = under 30 days;
            5 = over 12 months.)
          </li>
          <li>
            <strong>Flight probability (1&ndash;5):</strong> Given their
            compensation, tenure, personal situation, and attitude toward the
            acquisition, how likely are they to leave within 24 months?
            (1 = very unlikely; 5 = already interviewing.)
          </li>
          <li>
            <strong>Knowledge documentation (1&ndash;5):</strong> How much of
            their critical knowledge is written down, systematized, or shared
            with others? (1 = fully documented; 5 = entirely in their head.)
          </li>
        </ol>
        <p>
          Multiply the four scores. A composite above 100 (out of 625) signals
          urgent risk requiring pre-close mitigation. Above 200, you should
          either restructure the deal or walk away. Aggregate the scores for all
          key persons to produce a total Key Person Risk Index for the business.
        </p>
        <p>
          This framework integrates directly into your{" "}
          <Link href="/learn/deal-structure-optimization" className="text-apple-accent hover:underline">
            deal structure
          </Link>{" "}
          negotiations. A high aggregate score justifies a lower purchase price,
          a longer seller transition, or an earn-out tied to retention metrics.
        </p>

        {/* ───────────── H2 #5 ───────────── */}
        <h2 className={h2Class}>
          Mitigation Before Close: Deal Terms and Transition Design
        </h2>
        <p>
          The best time to mitigate key person risk is before you sign the
          purchase agreement. Once you own the business, your bargaining
          position with both the seller and the key employees changes
          dramatically.
        </p>

        <h3 className={h3Class}>Seller transition agreements</h3>
        <p>
          Negotiate a transition period of 6&ndash;18 months (not the 30&ndash;90
          days sellers prefer). Structure the seller&rsquo;s compensation
          during this period to incentivize genuine knowledge transfer, not
          just physical presence. Tie 30&ndash;50% of the transition payment to
          measurable milestones: customer introductions completed, SOPs written,
          key employee relationships handed off.
        </p>

        <h3 className={h3Class}>Earn-outs and holdbacks</h3>
        <p>
          If the seller is the primary rainmaker, an earn-out pegged to
          post-close revenue retention directly aligns their incentives with
          yours. A 12&ndash;24 month earn-out equal to 15&ndash;30% of the
          purchase price, paid only if revenue stays within 90% of trailing
          twelve months, gives the seller a financial reason to introduce you
          to every customer and ensure a smooth handoff.
        </p>

        <h3 className={h3Class}>Non-compete and non-solicitation agreements</h3>
        <p>
          Non-competes protect you from the seller starting a competing
          business. Non-solicitation clauses prevent them from poaching
          employees or customers. Both should be included in your{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            letter of intent
          </Link>{" "}
          and formalized at closing. Standard terms: 2&ndash;4 year duration,
          geographic scope matching the business&rsquo;s service area, and
          specific enough to be enforceable in the relevant jurisdiction.
        </p>

        <h3 className={h3Class}>Pre-close retention packages</h3>
        <p>
          For non-owner key employees, sign retention agreements before or at
          closing. The typical structure: a stay bonus of 25&ndash;50% of annual
          salary, paid in quarterly installments over 12&ndash;24 months,
          contingent on continued employment. Some acquirers fund these through
          an escrow established at closing. Others negotiate for the seller to
          fund them from the purchase price.
        </p>

        {/* ───────────── H2 #6 ───────────── */}
        <h2 className={h2Class}>
          Mitigation After Close: Retention and Knowledge Transfer
        </h2>
        <p>
          Signing retention agreements is necessary but not sufficient. The
          research from the{" "}
          <Link href="/learn/management-transition" className="text-apple-accent hover:underline">
            management transition
          </Link>{" "}
          literature is clear: the new CEO&rsquo;s personal relationship with
          key employees matters more than the financial incentive. People stay
          for money, but they leave because of the boss.
        </p>

        <h3 className={h3Class}>The first 30 days</h3>
        <p>
          Hold a private, one-on-one conversation with every key person within
          the first two weeks. The agenda: learn their goals, fears, and ideas
          for the business. Do not pitch your vision yet. Listen. The single
          most effective retention tactic, according to McKinsey&rsquo;s 2019
          research on post-merger integration, is making employees feel heard
          by the new leader.
        </p>

        <h3 className={h3Class}>Compensation realignment</h3>
        <p>
          Benchmark every key person&rsquo;s total compensation against market
          data. If anyone is more than 15% below market (common in owner-operated
          businesses where &ldquo;loyalty&rdquo; substituted for fair pay),
          correct it within 60 days. Do not wait for the annual review cycle.
          Under-market pay in the context of new ownership is a ticking bomb.
        </p>

        <h3 className={h3Class}>Long-term incentive plans</h3>
        <p>
          For the top three to five employees, financial handcuffs work. Options
          include phantom equity (3&ndash;5% of total equity value, vesting
          over 4 years), profit-sharing pools (distributing 5&ndash;15% of
          EBITDA growth above a baseline), or deferred compensation plans that
          pay out only after 3&ndash;5 years of service. For a full playbook,
          see our guide on{" "}
          <Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">
            employee retention after acquisition
          </Link>.
        </p>

        <h3 className={h3Class}>Systematic knowledge extraction</h3>
        <p>
          During your{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            first 100 days
          </Link>, run a structured knowledge transfer process for every key
          person. The deliverables: written SOPs for their top 10 recurring
          tasks, documented customer and vendor relationship maps, recorded
          walkthroughs of critical systems, and a trained backup person for
          every function. The goal is not to make key people feel replaceable&mdash;it
          is to make the business resilient. Frame it as &ldquo;building a team
          that can grow&rdquo; rather than &ldquo;reducing dependence on you.&rdquo;
        </p>

        {/* ───────────── H2 #7 ───────────── */}
        <h2 className={h2Class}>
          How Key Person Risk Affects Valuation Multiples
        </h2>
        <p>
          Buyers pay less when key person risk is high. The math is
          straightforward: acquirers discount the expected cash flows by the
          probability of disruption.
        </p>
        <p>
          In practice, key person risk typically affects search fund
          valuations in three ways:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Multiple compression:</strong> A business that would
            otherwise trade at 4.5&ndash;5.5x EBITDA may trade at 3.5&ndash;4.5x
            if the owner is the sole rainmaker with no documented sales process.
            That 1x turn on $2M EBITDA is a $2M price reduction.
          </li>
          <li>
            <strong>Transition cost adjustments:</strong> Buyers add back the
            estimated cost of retention packages, salary adjustments, and
            replacement hiring into the effective purchase price. A $300K
            retention pool funded at closing is $300K less available for the
            seller.
          </li>
          <li>
            <strong>Earn-out structuring:</strong> Instead of paying full price
            at close, buyers shift 15&ndash;30% into contingent payments
            tied to customer retention, employee retention, or revenue
            maintenance. This transfers risk back to the seller.
          </li>
        </ul>
        <p>
          If you are the buyer, quantify key person risk explicitly in your
          valuation model. If you are the seller preparing for a{" "}
          <Link href="/learn/closing-process" className="text-apple-accent hover:underline">
            closing
          </Link>, reducing key person risk before going to market&mdash;by
          hiring a sales manager, documenting processes, and signing key
          employees to contracts&mdash;can add 0.5&ndash;1.0x to your
          effective multiple.
        </p>

        {/* ───────────── H2 #8: FAQ ───────────── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          How much should I budget for key employee retention packages?
        </h3>
        <p>
          Plan for 25&ndash;50% of annual salary per key person, paid over
          12&ndash;24 months. For a business with five key employees earning an
          average of $80K, that is $100K&ndash;$200K in total retention spend.
          Most search fund operators fund this from the acquisition capital
          stack or negotiate seller concessions at closing.
        </p>

        <h3 className={h3Class}>
          Should I buy key man insurance after acquiring a business?
        </h3>
        <p>
          Yes, for any individual whose sudden absence would cause more than
          $500K in economic damage. Key man insurance policies typically cost
          1&ndash;3% of the coverage amount annually. A $1M policy on your top
          salesperson costs $10K&ndash;$30K per year&mdash;cheap relative to the
          risk. The proceeds buy you time to recruit a replacement and cover
          lost revenue during the transition.
        </p>

        <h3 className={h3Class}>
          What if a key employee demands a huge raise right after closing?
        </h3>
        <p>
          This is common and usually a test. If their current pay is below
          market, correct it&mdash;you should have budgeted for this.
          If their demand is above market, negotiate calmly and tie any
          increase to measurable performance targets. Never capitulate out of
          fear. Overpaying one person creates resentment across the
          organization and signals that hostage-taking works.
        </p>

        <h3 className={h3Class}>
          How long does it take to fully de-risk a key person dependency?
        </h3>
        <p>
          For most functions, 12&ndash;18 months of deliberate cross-training,
          documentation, and backup development reduces dependency to a
          manageable level. Revenue relationships take longer&mdash;expect 18&ndash;24
          months before customers are fully comfortable with their new primary
          contact. The process accelerates dramatically if the departing key
          person (especially the seller) actively participates in introductions
          and handoffs.
        </p>

        <h3 className={h3Class}>
          Can I walk away from a deal because of key person risk?
        </h3>
        <p>
          Absolutely, and sometimes you should. If the owner is the sole
          customer relationship, has no interest in a meaningful transition,
          and the business has no documented processes, you are not buying a
          company&mdash;you are buying a job with debt. The search fund model
          depends on acquiring a business that can operate independently.
          Walking away from an over-concentrated deal is not failure; it is
          discipline.
        </p>
      </div>
    </article>
  );
}
