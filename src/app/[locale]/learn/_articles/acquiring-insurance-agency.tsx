import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function AcquiringInsuranceAgencyArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring an Insurance Agency: Industry Playbook</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Insurance distribution is one of the most attractive sectors in the
          entire{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">entrepreneurship through acquisition</Link>{" "}
          market. The economics are hard to beat: recurring commissions that
          renew year after year, client retention rates that routinely exceed
          90%, a deeply fragmented market with tens of thousands of agencies
          owned by retiring baby boomers, and a business model that requires
          minimal capital expenditure. Private equity firms have poured billions
          into insurance distribution roll-ups, Hub International,
          Acrisure, and AssuredPartners are among the most prominent examples
          but the vast majority of the market remains untouched by
          institutional capital. For a search fund entrepreneur, an independent
          insurance agency in the $1.5M-$10M revenue range represents a
          compelling platform acquisition with clear paths to organic growth
          and bolt-on expansion.
        </p>

        <h2 className={h2Class}>Insurance agency market overview</h2>
        <p>
          The US insurance distribution market generates over $500 billion in
          annual premiums, intermediated through roughly 36,000 independent
          agencies and brokerages, according to the Independent Insurance
          Agents &amp; Brokers of America (IIABA). The market is remarkably
          fragmented: the top 100 brokerages control less than 30% of total
          premiums placed, leaving the vast majority in the hands of small
          and mid-sized agencies. The industry breaks down into three core segments, each
          with distinct economics.
        </p>

        <h3 className={h3Class}>Property &amp; casualty (P&amp;C)</h3>
        <p>
          P&amp;C is the largest segment and the bread and butter of most
          independent agencies. It includes commercial lines (business
          insurance, workers&rsquo; compensation, commercial auto, general
          liability, professional liability) and personal lines (homeowners,
          auto, umbrella). Commercial lines typically generate higher
          commissions per account, 10-20% of premium versus
          8-15% for personal lines, and have stickier client
          relationships because switching costs are higher. An agency with a
          strong commercial lines book is generally more valuable than one
          that skews heavily toward personal lines.
        </p>

        <h3 className={h3Class}>Life &amp; health</h3>
        <p>
          Life insurance and individual health products generate first-year
          commissions that are substantially higher than renewal commissions.
          A whole life policy might pay 50-100% of first-year premium
          as commission, dropping to 2-5% in renewal years. This
          front-loaded commission structure means life-focused agencies can
          have lumpier revenue, but the renewal tail provides a baseline of
          recurring income. Group health and ancillary benefits (dental,
          vision, disability, life) typically pay 3-8% trailing
          commissions and retain at very high rates, 90%+ for
          employer-sponsored group plans.
        </p>

        <h3 className={h3Class}>Employee benefits</h3>
        <p>
          Benefits brokerage, advising employers on group health,
          retirement plans, and voluntary benefits, is increasingly
          attractive for acquirers. Revenue is highly recurring, retention
          rates of 92-96% are typical, and the complexity of employee
          benefits creates a natural advisory relationship that is difficult
          for clients to replace. Benefits books are often valued at a premium
          to P&amp;C books because of these retention dynamics. Many agencies
          combine P&amp;C and benefits, creating a diversified revenue base
          that is ideal for acquisition.
        </p>

        <h2 className={h2Class}>Why insurance is attractive for ETA</h2>
        <p>
          Insurance agencies check nearly every box on the search fund
          acquisition criteria list. Understanding exactly why the model
          works is essential for evaluating opportunities and communicating
          the thesis to investors.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Recurring revenue:</strong> Insurance commissions renew
            automatically when policies renew. A well-managed P&amp;C book
            will generate 85-95% of the prior year&rsquo;s commission
            revenue without any new sales activity. This predictability makes
            insurance agencies highly bankable and attractive for used
            acquisitions.
          </li>
          <li>
            <strong>High retention rates:</strong> Client retention rates of
            88-95% are standard in commercial lines and benefits.
            Switching insurance agents is disruptive for businesses, requiring
            new applications, coverage reviews, and carrier changes. This
            inertia works strongly in the incumbent agent&rsquo;s favor.
          </li>
          <li>
            <strong>Fragmented market:</strong> According to Reagan
            Consulting&rsquo;s annual survey, the average independent agency
            owner in the US is over 57 years old, and a large cohort of
            owners will retire over the next decade with no internal successor.
            This generational transition creates a steady supply of willing
            sellers at reasonable valuations, a dynamic unlikely to
            change for years.
          </li>
          <li>
            <strong>Low capital intensity:</strong> Insurance agencies are
            asset-light businesses. There is no inventory, no manufacturing
            equipment, and minimal real estate required. Working capital needs
            are modest because commissions are typically paid monthly by
            carriers. This makes the model highly cash-generative and
            well-suited for debt service.
          </li>
          <li>
            <strong>Proven roll-up economics:</strong> The{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build playbook</Link>{" "}
            is exceptionally well-proven in insurance distribution. Individual
            agencies acquired at 6-8x EBITDA can be integrated into a
            platform that trades at 10-15x or higher, creating
            significant multiple arbitrage on top of genuine operational
            synergies.
          </li>
          <li>
            <strong>Organic growth tailwind:</strong> P&amp;C premiums tend to
            rise with inflation and property values, meaning commission
            revenue grows even without adding new clients. During hard
            insurance markets, rate increases of 5-15% flow directly
            into commission income.
          </li>
        </ul>

        <h2 className={h2Class}>Types of insurance agencies</h2>

        <h3 className={h3Class}>Independent vs. captive agencies</h3>
        <p>
          This is the single most important distinction for any acquirer.
          Independent agents represent multiple insurance carriers and , 
          critically, own their book of business. They can move client
          policies between carriers to secure the best terms, and if the agent
          relationship with a carrier ends, the policies stay with the agency.
          Captive agents (e.g., State Farm, Farmers, Allstate exclusive agents)
          represent a single carrier and generally do not own the book , 
          the carrier does. If the agent leaves or the contract is terminated,
          the carrier retains the policies.
        </p>
        <p>
          For search fund purposes, independent agencies are the only
          appropriate targets. Book ownership is the foundational asset you
          are acquiring. Without it, you have no durable economic interest in
          the client relationships. Some captive agency models do allow
          limited book ownership or provide a buyout formula upon departure,
          but these structures are far less favorable for an acquirer than
          true independent ownership.
        </p>

        <h3 className={h3Class}>Personal lines vs. commercial lines</h3>
        <p>
          Personal lines agencies focus on individual consumers, home,
          auto, renters, and umbrella insurance. These books tend to have
          lower revenue per account ($500-$2,000 in annual commission),
          higher policy counts, and somewhat lower retention rates
          (85-90%) because consumers are more price-sensitive. Personal
          lines are increasingly commoditized by direct carriers (GEICO,
          Progressive Direct) and insurtechs, which puts long-term pressure
          on commissions.
        </p>
        <p>
          Commercial lines agencies serve businesses, ranging from small
          contractors to large manufacturers. Revenue per account is
          significantly higher ($2,000-$25,000+ in annual commission),
          retention is stronger (90-95%), and the advisory relationship
          is deeper because business insurance is complex. Most experienced
          acquirers prefer agencies with a strong commercial lines focus,
          though a mixed book with a solid personal lines base can provide
          stable cash flow to fund commercial lines growth.
        </p>

        <h3 className={h3Class}>Niche and specialty agencies</h3>
        <p>
          Some agencies specialize in a particular industry vertical
          (construction, hospitality, healthcare, technology) or coverage
          type (surety bonds, professional liability, cyber insurance). Niche
          agencies often command premium valuations because they possess deep
          domain expertise, specialized carrier relationships, and higher
          barriers to client switching. If you find a niche agency with
          defensible expertise in a growing sector, it can be an
          exceptionally compelling acquisition.
        </p>

        <h2 className={h2Class}>Due diligence for insurance agency acquisitions</h2>
        <p>
          Insurance agency due diligence involves several elements that are
          unique to the industry. Beyond the standard financial, legal, and
          operational review, you must conduct a thorough analysis of the
          book of business, carrier relationships, and commission structures.
        </p>

        <h3 className={h3Class}>Book of business analysis</h3>
        <p>
          The book is the core asset. Request a complete download from the
          agency management system (AMS) and analyze it across multiple
          dimensions:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Revenue concentration:</strong> What percentage of total
            commissions comes from the top 10 accounts? A book where the top
            10 clients represent 30%+ of revenue carries material{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">key-person risk</Link>.
            Ideally, no single account should represent more than 3-5%
            of total commissions.
          </li>
          <li>
            <strong>Line of business mix:</strong> Break down revenue by
            commercial P&amp;C, personal lines, benefits, life, and any
            fee-based consulting. Understand the margin profile and growth
            trajectory of each segment.
          </li>
          <li>
            <strong>Policy count and average premium:</strong> Understand the
            granularity of the book. An agency with 2,000 commercial accounts
            averaging $10,000 in commission each is far more resilient than
            one with 50 large accounts averaging $400,000.
          </li>
          <li>
            <strong>Retention history:</strong> Request 5 years of retention
            data, tracked monthly. Look for trends, declining retention
            may signal service problems, competitive pressure, or an aging
            client base. Investigate any periods where retention dropped
            below 85%.
          </li>
          <li>
            <strong>New business vs. lost business:</strong> Analyze the
            net organic growth rate (new business minus lost business) over
            the past 3-5 years. A flat or declining book suggests the
            agency has stopped investing in growth, which can be an
            opportunity if you plan to reinvigorate sales efforts.
          </li>
        </ul>

        <h3 className={h3Class}>Commission structures</h3>
        <p>
          Not all commission arrangements are created equal. You need to
          understand the full commission picture:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Base commissions:</strong> The standard percentage paid
            on each policy. Verify commission schedules with every carrier
            and check for any recent or pending commission reductions.
          </li>
          <li>
            <strong>Contingent commissions (profit-sharing):</strong> Many
            carriers pay annual bonuses based on the profitability, growth,
            and retention of the book placed with them. Contingent commissions
            can represent 1-5% of total premiums and are a significant
            income source for well-managed agencies. However, they are
            volatile and not guaranteed, a year with heavy losses
            can eliminate the bonus entirely.
          </li>
          <li>
            <strong>Override commissions:</strong> Some agencies receive
            additional commissions through cluster groups or aggregators that
            combine the premium volume of multiple agencies to achieve higher
            commission tiers. Understand whether the agency participates in
            any aggregator programs and what the contractual obligations are.
          </li>
          <li>
            <strong>Fee-based revenue:</strong> Increasingly, agencies charge
            consulting fees for risk management, claims advocacy, or benefits
            administration. Fee revenue is generally more stable and more
            highly valued than commission revenue.
          </li>
        </ul>

        <h3 className={h3Class}>Carrier appointments</h3>
        <p>
          Carrier appointments are the contracts that authorize an agency to
          sell and service a carrier&rsquo;s products. They are essential
          infrastructure.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Appointment transfer:</strong> Most carrier contracts
            include change-of-ownership provisions. Some carriers require
            approval of the new owner before confirming the appointment
            transfer. Start carrier notifications early in the process , 
            losing a major carrier appointment can be devastating.
          </li>
          <li>
            <strong>Carrier concentration:</strong> Analyze what percentage
            of total premium is placed with each carrier. If one carrier
            represents more than 25-30% of the book, you have
            meaningful concentration risk. That carrier has significant
            use over commission rates and appointment terms.
          </li>
          <li>
            <strong>Appointment breadth:</strong> A well-appointed agency
            should have relationships with 8-15 carriers across
            standard, specialty, and excess &amp; surplus lines. Narrow
            appointments limit the agency&rsquo;s ability to find competitive
            markets for clients and can drive attrition.
          </li>
        </ul>

        <h3 className={h3Class}>Loss ratios and claims history</h3>
        <p>
          While the agency does not bear underwriting risk directly, the loss
          ratio of the book it places affects carrier relationships,
          contingent commissions, and the ability to maintain appointments.
          Request loss ratio reports from each major carrier for the past
          5 years. A book with consistently favorable loss ratios
          (below 50-55% for commercial lines) signals a well-managed
          client base and competent risk selection. Deteriorating loss ratios
          can lead to non-renewals by the carrier, forcing the agency to
          remarket accounts, a labor-intensive process that risks
          client attrition.
        </p>

        <h3 className={h3Class}>Producer dependency</h3>
        <p>
          Producers (salespeople) are the revenue engines of an insurance
          agency. Assess who controls client relationships:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Owner-dependent books:</strong> If the selling owner
            personally manages 60%+ of commission revenue, the book carries
            significant transition risk. Plan for a 12-24 month seller
            involvement period with retention-based{" "}
            <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">earn-out structures</Link>{" "}
            tied to client retention milestones.
          </li>
          <li>
            <strong>Producer books vs. house accounts:</strong> Understand
            which accounts are serviced by specific producers (producer books)
            versus which are managed by the agency generally (house accounts).
            Producer books are portable, if a producer leaves, they
            may take clients. Non-compete and non-solicitation agreements are
            critical protections.
          </li>
          <li>
            <strong>Compensation structures:</strong> Review producer
            compensation in detail. The typical commission split ranges from
            30-50% of commissions for new business and 20-35%
            for renewals. Ensure compensation is competitive enough to
            retain talent but not so generous that it impairs profitability.
          </li>
        </ul>

        <h2 className={h2Class}>Valuation of insurance agencies</h2>
        <p>
          Insurance agency valuation has become increasingly sophisticated as
          institutional capital has entered the sector. The two primary
          frameworks are revenue multiples and EBITDA multiples, and
          understanding when each applies is important. For a deeper look
          at general valuation methodology, see our{" "}
          <Link href="/learn/financial-services-acquisition" className="text-apple-accent hover:underline">financial services acquisition guide</Link>.
        </p>

        <h3 className={h3Class}>Revenue multiples</h3>
        <p>
          Smaller agencies ($500K-$3M in revenue) are most commonly
          valued on a revenue multiple basis, which implicitly assumes a
          normalized expense structure. Typical ranges:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Personal lines books:</strong> 1.0-2.0x annual
            commissions, reflecting lower retention, commodity pressure, and
            lower growth prospects.
          </li>
          <li>
            <strong>Commercial lines books:</strong> 1.5-2.8x annual
            commissions, reflecting higher retention, stickier relationships,
            and better margin profiles.
          </li>
          <li>
            <strong>Benefits books:</strong> 1.8-3.0x annual
            commissions, reflecting the highest retention rates and growing
            complexity that cements the advisory relationship.
          </li>
          <li>
            <strong>Blended books:</strong> Weighted average based on the mix.
            An agency with $2M in revenue split evenly between commercial
            and personal lines might trade at 1.5-2.2x overall.
          </li>
        </ul>

        <h3 className={h3Class}>EBITDA multiples</h3>
        <p>
          Larger agencies ($3M+ in revenue) and platform acquisitions are
          more commonly valued on an EBITDA basis, which better captures
          profitability differences across agencies:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Small agencies ($3M-$5M revenue):</strong>
            5-7x EBITDA. These are typical search fund-sized
            acquisitions.
          </li>
          <li>
            <strong>Mid-sized agencies ($5M-$20M revenue):</strong>
            7-10x EBITDA. Agencies in this range attract interest from
            both search funds and private equity-backed platforms.
          </li>
          <li>
            <strong>Large agencies and platforms ($20M+ revenue):</strong>
            10-15x EBITDA. These multiples are driven by institutional
            buyers seeking scale and are the exit multiples that make the
            buy-and-build strategy so compelling.
          </li>
        </ul>

        <h3 className={h3Class}>Factors that adjust multiples</h3>
        <p>
          Several agency-specific factors push valuations above or below
          the benchmark ranges:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Organic growth rate:</strong> An agency growing at 8%+
            organically commands a premium. A flat or declining agency trades
            at a discount.
          </li>
          <li>
            <strong>Retention rate:</strong> Every percentage point of
            retention above 90% adds meaningful value. Retention below 85%
            is a red flag.
          </li>
          <li>
            <strong>Revenue mix:</strong> Higher commercial and benefits mix
            means higher multiples. Heavy personal lines weighting reduces
            the multiple.
          </li>
          <li>
            <strong>Owner dependency:</strong> If the owner is the primary
            producer and relationship manager, expect a discount of
            0.5-1.0x to account for transition risk.
          </li>
          <li>
            <strong>Technology and systems:</strong> Agencies running modern
            AMS platforms (Applied Epic, Vertafore AMS360) with clean data
            are more valuable than those using legacy or paper-based systems.
          </li>
          <li>
            <strong>Geographic market:</strong> Agencies in growing
            metropolitan areas with rising property values and business
            formation rates trade at premium multiples.
          </li>
        </ol>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <p>
          The value creation opportunity in insurance agencies is significant
          but requires disciplined execution across several fronts. The best
          acquirers implement a structured 100-day plan followed by a
          12-24 month transformation roadmap.
        </p>

        <h3 className={h3Class}>Cross-selling and account rounding</h3>
        <p>
          Most agencies leave substantial revenue on the table by not
          systematically cross-selling. A commercial lines client who only
          has a general liability policy should also be offered workers&rsquo;
          compensation, commercial auto, property, umbrella, cyber, and
          employment practices liability coverage. Account rounding , 
          increasing the number of policies per client, is the
          single most capital-efficient growth strategy available.
        </p>
        <ul className={ulClass}>
          <li>
            Run a gap analysis on every account in the book to identify
            missing coverage lines.
          </li>
          <li>
            Set cross-sell targets for each account manager and track
            progress monthly.
          </li>
          <li>
            Multi-policy clients retain at 95%+ versus 85% for single-policy
            clients, so cross-selling simultaneously grows revenue and
            improves retention.
          </li>
        </ul>

        <h3 className={h3Class}>Technology modernization</h3>
        <p>
          Many acquired agencies are running outdated systems that limit
          productivity and data quality. Investing in technology is often the
          highest-ROI post-acquisition initiative:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Agency management system (AMS):</strong> If the agency is
            on a legacy or local-server AMS, migrate to a modern cloud-based
            platform. This improves data accessibility, enables remote work,
            and creates the infrastructure for analytics-driven management.
          </li>
          <li>
            <strong>Comparative rating tools:</strong> Automated quoting
            platforms allow producers to quote across multiple carriers
            simultaneously, reducing the time per quote from 2-3 hours
            to 15-30 minutes for personal lines and small commercial.
          </li>
          <li>
            <strong>Client self-service portals:</strong> Giving clients
            online access to certificates of insurance, policy documents,
            and billing information reduces inbound service calls by
            20-40% and improves the client experience.
          </li>
          <li>
            <strong>Marketing automation:</strong> Implement email campaigns,
            review reminders, and cross-sell nurture sequences using
            CRM-integrated marketing tools. Most small agencies do zero
            systematic marketing, making even basic automation a significant
            uplift.
          </li>
        </ul>

        <h3 className={h3Class}>Producer recruitment and development</h3>
        <p>
          Organic growth in an insurance agency is driven primarily by
          producers. Most acquired agencies have underinvested in sales
          talent, relying on the owner and one or two long-tenured producers.
          Building a sales culture post-acquisition is critical. Follow the
          principles in our{" "}
          <Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">revenue growth playbook</Link>{" "}
          to structure your go-to-market strategy.
        </p>
        <ul className={ulClass}>
          <li>
            Recruit 1-2 experienced producers within the first year.
            Offer a competitive base salary during a ramp period (typically
            18-24 months) plus commission splits that increase as they
            build their book.
          </li>
          <li>
            Implement a structured new business pipeline process with weekly
            activity metrics: calls made, appointments set, proposals
            delivered, and accounts written.
          </li>
          <li>
            Develop a &quot;perpetuation&quot; model where top-performing
            producers can earn equity or phantom equity in the agency,
            aligning long-term incentives with agency growth.
          </li>
        </ul>

        <h3 className={h3Class}>Adding service lines</h3>
        <p>
          One of the most effective ways to grow an acquired agency is to
          add service lines that complement the existing book:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Benefits consulting:</strong> If the agency is P&amp;C
            only, adding an employee benefits practice gives you a second
            relationship with every commercial client. Group health is
            complex enough that employers are reluctant to switch advisors
            once a relationship is established.
          </li>
          <li>
            <strong>Risk management services:</strong> Offering loss control
            surveys, safety training, and claims management deepens the
            advisory relationship and differentiates you from commodity
            agents who only transact policies.
          </li>
          <li>
            <strong>HR consulting and payroll:</strong> Some agencies have
            successfully added HR consulting, payroll, and compliance
            services for small businesses, creating an integrated outsourced
            back-office model. This dramatically increases revenue per client
            and switching costs.
          </li>
          <li>
            <strong>Specialty programs:</strong> Developing expertise in a
            niche market (e.g., construction wrap-ups, cyber insurance for
            technology firms, real estate investor programs) creates
            differentiated positioning and higher margins.
          </li>
        </ul>

        <h2 className={h2Class}>Risks and challenges</h2>

        <h3 className={h3Class}>Carrier concentration risk</h3>
        <p>
          An agency that places 40%+ of its premium with a single carrier
          faces existential risk. That carrier can reduce commissions,
          tighten underwriting appetite, or exit markets entirely. Carriers
          periodically undergo strategic shifts that can leave heavily
          concentrated agencies scrambling to remarket large portions of
          their book. Post-acquisition, set a target of no more than
          20-25% of premium with any single carrier and actively
          diversify.
        </p>

        <h3 className={h3Class}>Regulatory requirements</h3>
        <p>
          Insurance is regulated at the state level in the US, creating a
          patchwork of licensing, continuing education, and compliance
          requirements:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Licensing:</strong> The agency and every individual
            producer must be licensed in each state where they transact
            business. Change-of-ownership events often require license
            transfers or new applications. Non-resident licenses are needed
            for multi-state operations.
          </li>
          <li>
            <strong>Continuing education:</strong> Licensed producers must
            complete 20-40 hours of continuing education per renewal
            period (typically every 2 years). Tracking CE compliance for
            all licensed staff is an ongoing administrative requirement.
          </li>
          <li>
            <strong>Surplus lines regulations:</strong> Agencies placing
            coverage with non-admitted carriers must comply with surplus
            lines filing and tax requirements, which vary by state. Failure
            to properly file surplus lines transactions can result in fines
            and license actions.
          </li>
          <li>
            <strong>Data privacy:</strong> Insurance agencies hold sensitive
            personal and financial information. State data privacy laws
            and the NAIC Insurance Data Security Model Law impose
            cybersecurity and breach notification requirements that agencies
            must comply with.
          </li>
        </ul>

        <h3 className={h3Class}>Errors &amp; omissions (E&amp;O) insurance</h3>
        <p>
          E&amp;O insurance protects the agency against claims arising from
          professional mistakes, a missed renewal, an incorrect
          coverage recommendation, or a failure to procure requested coverage.
          E&amp;O is mandatory for operating an insurance agency, and the
          claims history directly impacts the agency&rsquo;s risk profile.
        </p>
        <ul className={ulClass}>
          <li>
            Review the complete E&amp;O claims history for at least 10 years.
            Patterns of claims may indicate systemic process failures.
          </li>
          <li>
            Ensure adequate limits, most agencies carry $1M-$5M
            in E&amp;O coverage depending on size and risk profile.
          </li>
          <li>
            Budget for tail coverage (extended reporting period) to protect
            against claims arising from pre-acquisition activities. Tail
            premiums are typically 150-250% of the annual premium for
            a 3-year tail.
          </li>
          <li>
            Post-acquisition, implement documented procedures for policy
            checking, renewal processing, and coverage recommendations to
            reduce E&amp;O exposure.
          </li>
        </ul>

        <h3 className={h3Class}>Market cycle risk</h3>
        <p>
          The insurance industry operates in cycles. During soft markets,
          carriers compete aggressively on price, driving premiums down and
          reducing commission income. During hard markets, premiums rise
          sharply, which increases commissions but can cause client
          dissatisfaction and attrition. While the cyclical nature of
          insurance means commission revenue is never perfectly smooth, the
          long-term trend for premiums is upward, and a diversified book
          across multiple lines and carriers provides meaningful
          stabilization.
        </p>

        <h3 className={h3Class}>Technology disruption</h3>
        <p>
          Insurtech companies and direct-to-consumer carriers have disrupted
          personal lines insurance distribution, and some are beginning to
          target small commercial lines. While the impact on mid-market
          commercial insurance has been limited, complex risks still
          require human expertise and carrier relationships, acquirers
          should be thoughtful about the long-term trajectory of any
          personal lines-heavy book. The best defense against disruption is
          to focus on complex, advisory-intensive segments where the agent&rsquo;s
          expertise is genuinely valuable and difficult to replicate with
          technology.
        </p>

        <h2 className={h2Class}>Structuring the acquisition</h2>
        <p>
          Insurance agency acquisitions are typically structured as asset
          purchases, with the book of business, carrier appointments, trade
          name, and customer lists being the primary acquired assets. Stock
          purchases are less common but may be preferred when the agency
          holds carrier appointments that are difficult to transfer or when
          there are tax advantages for the seller.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Purchase price allocation:</strong> A significant portion
            of the purchase price is typically allocated to the customer
            list (amortizable over 15 years under Section 197) and
            non-compete agreements (amortizable over the agreement term).
            Proper allocation creates meaningful tax benefits for the buyer.
          </li>
          <li>
            <strong>Seller financing:</strong> Many insurance agency
            acquisitions include 10-30% seller financing, which aligns
            incentives during the transition period and reduces the equity
            required at closing.
          </li>
          <li>
            <strong>Earn-outs:</strong> Retention-based earn-outs are
            standard in insurance agency transactions. A typical structure
            pays an additional 5-15% of the purchase price if client
            retention exceeds specified thresholds (e.g., 90% at 12 months,
            85% at 24 months). This protects the buyer against post-closing
            attrition.
          </li>
          <li>
            <strong>Non-compete agreements:</strong> A 3-5 year
            non-compete with a radius appropriate to the agency&rsquo;s
            geographic market is essential. Without a strong non-compete,
            the selling owner could open a new agency and actively solicit
            their former clients.
          </li>
        </ul>

        <h2 className={h2Class}>The bottom line</h2>
        <p>
          Insurance agencies represent one of the most well-suited business
          types for entrepreneurship through acquisition. The recurring
          revenue model, high retention rates, fragmented market, and proven
          roll-up economics create an opportunity set that is difficult to
          match in any other sector. The keys to success are rigorous book
          of business analysis during due diligence, a structured transition
          plan that preserves client relationships, disciplined
          post-acquisition investment in technology and sales talent, and a
          long-term vision for building a scaled platform. For searchers
          willing to learn the nuances of insurance distribution, the
          commission structures, carrier dynamics, and regulatory environment
          the sector offers a compelling path to building significant
          enterprise value with relatively modest initial capital.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          How much is an independent insurance agency worth?
        </h3>
        <p>
          Valuations depend on size and revenue mix. Smaller agencies
          ($500K-$3M revenue) typically trade at 1.0-2.8x annual
          commissions, with commercial lines and benefits books commanding
          higher multiples than personal lines. Larger agencies ($3M+ revenue)
          are more commonly valued on an EBITDA basis at 5-10x, with
          platforms exceeding $20M in revenue commanding 10-15x from
          institutional buyers. Key premium factors include organic growth
          rate, retention above 90%, and diversified carrier relationships.
        </p>

        <h3 className={h3Class}>
          What is the biggest risk when acquiring an insurance agency?
        </h3>
        <p>
          Producer and client retention during the ownership transition
          represent the primary risk. If the departing owner personally manages
          a large share of commission revenue, clients may leave with them.
          Mitigate this with a 12-24 month seller involvement period,
          retention-based{" "}
          <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">earn-out structures</Link>,
          and rigorous non-compete agreements. Carrier appointment transfers
          also require attention, losing a major carrier can disrupt
          the ability to service existing clients.
        </p>

        <h3 className={h3Class}>
          Can I use an SBA loan to buy an insurance agency?
        </h3>
        <p>
          Yes. Insurance agencies are excellent candidates for{" "}
          <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">SBA 7(a) financing</Link>{" "}
          because of their recurring revenue, high retention rates, and
          strong free cash flow. Lenders are comfortable underwriting against
          predictable commission income, and buyers can typically acquire
          agencies with 10-20% equity down. Seller financing of
          10-30% is common and further reduces the equity required
          at closing.
        </p>
      </div>
    </article>
  );
}
