import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SaaSAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a SaaS Business: The Search Fund Playbook</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Software-as-a-Service businesses have become one of the most sought-after
          asset classes in the search fund world, and for good reason. Recurring
          revenue, high gross margins (typically 70-85%), inherent scalability, and
          strong customer retention create a financial profile that is uniquely
          attractive for entrepreneurship through acquisition. But the same
          characteristics that make SaaS appealing also make due diligence more
          nuanced. Overpaying for a SaaS business with hidden churn problems or a
          crumbling codebase can be catastrophic. This guide walks you through the
          key metrics, valuation frameworks, diligence processes, and post-acquisition
          growth levers specific to acquiring a SaaS company through a search fund.
        </p>

        <h2 className={h2Class}>Why SaaS is attractive for search funds</h2>
        <p>
          The search fund model depends on acquiring a business with predictable
          cash flows, defensible market positioning, and room for operational
          improvement. SaaS companies check every box. Recurring subscription
          revenue provides visibility into future cash flows that traditional
          businesses simply cannot match. A well-run SaaS company with 95% gross
          revenue retention effectively &quot;resets&quot; 95% of its revenue base
          each year before a single new customer is acquired.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Recurring revenue:</strong> Monthly or annual subscriptions
            create predictable, compounding revenue streams. A SaaS business with
            $3M ARR and 110% net revenue retention will grow to $3.3M the
            following year from its existing customer base alone.
          </li>
          <li>
            <strong>High gross margins:</strong> Typical SaaS gross margins range
            from 70% to 85%, compared to 30-50% for most service businesses and
            10-25% for manufacturing. This leaves significantly more cash flow for
            debt service, reinvestment, and owner compensation.
          </li>
          <li>
            <strong>Scalability:</strong> The marginal cost of serving an
            additional customer approaches zero. Unlike a services firm that must
            hire proportionally to revenue, a SaaS company can often double its
            customer count without doubling its headcount.
          </li>
          <li>
            <strong>Defensibility:</strong> Once embedded in a customer&apos;s
            workflow, SaaS products become difficult to replace. Switching costs
            include data migration, user retraining, and integration rebuilds.
          </li>
        </ul>

        <h2 className={h2Class}>Key SaaS metrics for due diligence</h2>
        <p>
          SaaS businesses live and die by their metrics. Understanding the
          difference between vanity metrics and real indicators of health is the
          single most important skill for a searcher evaluating a SaaS target.
        </p>

        <h3 className={h3Class}>ARR vs. MRR</h3>
        <p>
          Annual Recurring Revenue (ARR) and Monthly Recurring Revenue (MRR) are
          the foundation of SaaS valuation. ARR represents the annualized value
          of all active subscriptions, while MRR is the monthly equivalent. For
          search fund targets, you&apos;ll typically see companies in the $1M-$10M
          ARR range. Ensure you verify that reported ARR excludes one-time
          implementation fees, professional services revenue, and usage-based
          overages that may not recur. True ARR should only include contracted
          recurring subscription revenue.
        </p>

        <h3 className={h3Class}>Churn rates: gross vs. net</h3>
        <p>
          Churn is the silent killer of SaaS businesses, and it is the most
          commonly manipulated metric you will encounter. Gross revenue churn
          measures the total revenue lost from cancellations and downgrades as a
          percentage of beginning-period revenue. Net revenue churn (or net
          revenue retention) accounts for expansion revenue from existing
          customers. A company might report &quot;negative net churn&quot; while
          losing 15% of customers annually — because its remaining customers are
          expanding fast enough to mask the losses.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Best-in-class gross churn:</strong> Less than 5% annually
            (or less than 0.5% monthly). Enterprise SaaS with annual contracts
            often achieves 3-5% annual gross churn.
          </li>
          <li>
            <strong>Acceptable gross churn:</strong> 5-10% annually. Most SMB
            SaaS products fall in this range.
          </li>
          <li>
            <strong>Red flag:</strong> Greater than 10% annual gross churn. At
            15%+ annual churn, you are replacing nearly your entire customer base
            every five to six years.
          </li>
        </ul>

        <h3 className={h3Class}>Net Revenue Retention (NRR)</h3>
        <p>
          NRR is arguably the single most important SaaS metric. It measures the
          percentage of revenue retained from existing customers after accounting
          for churn, downgrades, and expansion. An NRR of 110% means your
          existing customer cohort is worth 10% more this year than last year,
          before any new customer acquisition. Top-quartile SaaS companies achieve
          NRR of 120%+. For search fund targets in the SMB segment, NRR of
          100-110% is solid, and anything above 110% is exceptional.
        </p>

        <h3 className={h3Class}>LTV/CAC ratio</h3>
        <p>
          The Lifetime Value to Customer Acquisition Cost ratio tells you how
          efficiently the business converts marketing spend into long-term
          revenue. A healthy LTV/CAC ratio is 3:1 or higher, meaning every
          dollar spent acquiring a customer generates at least three dollars in
          lifetime gross profit. Below 3:1, the business is spending too much to
          acquire customers relative to what they&apos;re worth. Above 5:1
          typically indicates the company is underinvesting in growth — which may
          be an opportunity for a new operator.
        </p>

        <h3 className={h3Class}>CAC payback period</h3>
        <p>
          This measures how many months it takes to recover the cost of acquiring
          a customer. For SMB SaaS, a payback period of 12 months or less is
          excellent. 12-18 months is acceptable. Beyond 18 months, the business
          needs significant working capital to fund growth, and cash flow can
          become strained. During due diligence, calculate CAC payback using
          fully loaded costs — include sales salaries, marketing spend, SDR
          costs, and any trial/freemium subsidies.
        </p>

        <h3 className={h3Class}>The Rule of 40</h3>
        <p>
          The Rule of 40 states that the sum of a SaaS company&apos;s revenue
          growth rate and profit margin should exceed 40%. A company growing at
          30% with a 15% profit margin scores 45 and passes the test. A company
          growing at 10% with a 20% margin scores 30 and does not. For search
          fund targets, which are typically in the $2M-$8M ARR range with modest
          growth, the Rule of 40 is less about growth rate and more about
          demonstrating that the business can be profitable while growing. A score
          of 30+ is acceptable for an acquisition; below 20 warrants serious
          scrutiny.
        </p>

        <h2 className={h2Class}>Valuation multiples</h2>
        <p>
          SaaS businesses are typically valued as a multiple of ARR. The range
          for search fund-sized SaaS acquisitions ($1M-$10M ARR) generally falls
          between 3x and 8x ARR, with the specific multiple driven by several
          factors.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>3-4x ARR:</strong> Low growth (less than 10%), moderate churn
            (8-12% annual gross churn), SMB customer base with high logo churn,
            technical debt, or founder dependency.
          </li>
          <li>
            <strong>4-6x ARR:</strong> Moderate growth (10-25%), healthy churn
            (less than 8% annual gross churn), diversified customer base, clean
            codebase, and demonstrated product-market fit.
          </li>
          <li>
            <strong>6-8x ARR:</strong> Strong growth (25%+), low churn (less
            than 5% annual gross churn), NRR above 110%, enterprise customers
            with annual contracts, strong competitive moat, and minimal technical
            debt.
          </li>
        </ul>
        <p>
          Some sellers will attempt to use EBITDA multiples more common in
          traditional businesses (4-7x EBITDA). Because SaaS margins are high,
          EBITDA multiples can sometimes yield a lower purchase price than ARR
          multiples. Run the math both ways and negotiate based on whichever
          framework best represents the business&apos;s value.
        </p>

        <h2 className={h2Class}>SaaS-specific due diligence</h2>

        <h3 className={h3Class}>Codebase quality and technical debt</h3>
        <p>
          A SaaS acquisition is fundamentally a technology acquisition. Hire an
          independent technical advisor (not the seller&apos;s CTO) to conduct a
          thorough code review. Key areas to assess include architecture quality,
          test coverage (aim for 60%+ on critical paths), deployment processes
          (CI/CD pipeline existence and reliability), security practices (SOC 2
          compliance, penetration testing history, encryption standards), and
          infrastructure costs as a percentage of revenue (should be 10-20% for
          well-optimized SaaS). Technical debt that requires a full rewrite can
          easily cost $500K-$2M and 12-18 months, effectively destroying the
          economics of an acquisition.
        </p>

        <h3 className={h3Class}>Customer interviews</h3>
        <p>
          Speak directly with 15-25 customers across different segments, tenure
          lengths, and satisfaction levels. Ask about willingness to pay more,
          switching likelihood, product gaps, competitor alternatives, and Net
          Promoter Score. Customers will tell you things the seller never will.
          Pay particular attention to how customers describe the product&apos;s
          role in their workflow — if it&apos;s &quot;nice to have&quot; rather
          than &quot;mission critical,&quot; churn risk is higher than the
          numbers suggest.
        </p>

        <h3 className={h3Class}>Competitive moat</h3>
        <p>
          Evaluate what prevents customers from switching and what prevents
          competitors from replicating the product. Strong moats include deep
          integrations with other systems, proprietary data assets, network
          effects, regulatory compliance certifications (HIPAA, SOC 2, FedRAMP),
          and years of accumulated domain expertise embedded in the product.
          Weak moats include features that can be replicated in months, brand
          awareness alone, or price competition.
        </p>

        <h2 className={h2Class}>Growth levers post-acquisition</h2>

        <h3 className={h3Class}>Pricing optimization</h3>
        <p>
          Most founder-run SaaS businesses are dramatically underpriced. Many
          founders set pricing at launch and never revisit it. A 20-30% price
          increase implemented carefully (grandfathering existing customers for
          6-12 months, then migrating) typically results in less than 5%
          incremental churn and drops almost entirely to the bottom line. If ARR
          is $4M, a 25% price increase that causes 3% additional churn still
          generates nearly $900K in additional annual revenue.
        </p>

        <h3 className={h3Class}>Upselling and expansion revenue</h3>
        <p>
          Introduce tiered pricing, usage-based components, add-on modules, and
          premium support packages. The goal is to increase NRR by giving
          existing customers reasons to spend more. Companies that successfully
          implement expansion revenue strategies can move NRR from 100% to
          115-120% within 18-24 months.
        </p>

        <h3 className={h3Class}>Reducing churn</h3>
        <p>
          Implement systematic onboarding, customer success programs, health
          scoring, and proactive outreach to at-risk accounts. Many small SaaS
          businesses lose customers not because the product is bad, but because
          customers never fully adopted it. A dedicated customer success function
          can reduce gross churn by 20-40% in the first year.
        </p>

        <h3 className={h3Class}>Expanding TAM</h3>
        <p>
          Look for adjacent verticals, geographic markets, or customer segments
          that the product can serve with minimal modification. A vertical SaaS
          product serving dental practices might expand to veterinary clinics or
          optometry offices. International expansion (particularly EU to US or
          vice versa) can double the addressable market.
        </p>

        <h2 className={h2Class}>Common traps in SaaS acquisitions</h2>
        <ul className={ulClass}>
          <li>
            <strong>Vanity metrics:</strong> Total registered users, website
            traffic, and gross bookings are meaningless if they don&apos;t
            convert to retained, paying customers. Focus exclusively on active
            paying customers and their behavior.
          </li>
          <li>
            <strong>High churn hidden in growth:</strong> A company growing 30%
            annually while churning 20% might appear healthy, but if growth
            slows (as it inevitably does), the churn problem becomes existential.
            Always model a scenario where new customer acquisition drops by 50%.
          </li>
          <li>
            <strong>Customer concentration:</strong> If any single customer
            represents more than 10% of ARR, or the top 5 customers represent
            more than 30%, you have concentration risk. In SaaS, losing a large
            enterprise customer can mean a sudden 10-15% revenue drop.
          </li>
          <li>
            <strong>Founder as product visionary:</strong> If the founder is
            making every product decision and has deep relationships with key
            customers, the business may not survive the transition. Test this by
            asking: who decides what gets built next, and what would happen if
            the founder disappeared for three months?
          </li>
          <li>
            <strong>Overstated ARR:</strong> Watch for inclusion of multi-year
            contracts recognized upfront, expired trials counted as active,
            or &quot;committed&quot; but not yet invoiced revenue. Reconcile ARR
            to actual bank deposits on a monthly basis.
          </li>
        </ul>

        <h2 className={h2Class}>Engineering team retention</h2>
        <p>
          In a SaaS acquisition, the engineering team is arguably the most
          valuable asset. Unlike manufacturing equipment or real estate, software
          cannot operate without ongoing maintenance, bug fixes, security
          patches, and feature development. Losing key engineers post-acquisition
          can set the business back by 12-18 months.
        </p>
        <ul className={ulClass}>
          <li>
            Meet every engineer individually before closing. Understand their
            motivations, concerns, and career aspirations.
          </li>
          <li>
            Implement retention bonuses tied to 12-18 month vesting. Typical
            retention packages range from 25-50% of annual salary.
          </li>
          <li>
            Preserve engineering culture. If the team values autonomy, flexible
            hours, or remote work, changing these immediately will trigger
            departures.
          </li>
          <li>
            Identify the &quot;10x engineer&quot; — the one person who
            understands the entire codebase. This person&apos;s departure is an
            existential risk. Prioritize knowledge documentation and
            cross-training from day one.
          </li>
        </ul>

        <h2 className={h2Class}>The bottom line</h2>
        <p>
          SaaS acquisitions through search funds combine the best attributes of
          technology investing with the hands-on operational approach of ETA.
          The key is rigorous due diligence on the metrics that matter —
          particularly churn, NRR, and codebase quality — combined with a clear
          post-acquisition plan for pricing optimization, churn reduction, and
          expansion revenue. The first 90 days post-acquisition should focus on
          stability over transformation: understand the customer base, build
          relationships with the engineering team, and communicate proactively
          with top accounts to prevent panic-driven churn. Data shows that
          companies that proactively communicate during ownership transitions
          retain 8-12% more customers in the first year. Get the fundamentals
          right, and a SaaS acquisition at 4-6x ARR can generate exceptional
          returns for both the searcher and investors.
        </p>
      </div>
    </article>
  );
}
