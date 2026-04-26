import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function GoodAcquisitionTargetArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        What Makes a Good Search Fund Acquisition Target? The 10 Criteria That Matter
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">18 min read</p>

      <div className={bodyClass}>
        <p>
          Search funds that acquire the right company earn a median 35.1% IRR
          and 4.5x return on invested capital, according to the 2024 Stanford
          Search Fund Study. Search funds that acquire the wrong company lose
          everything. The difference almost always traces back to target
          selection, whether the business matched a proven set of
          acquisition criteria before the searcher ever signed a letter of
          intent. This guide breaks down the 10 characteristics that separate
          high-performing search fund acquisitions from costly mistakes, drawn
          from four decades of Stanford data covering 681 funds and reinforced
          by real deal patterns across the{" "}
          <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
            search fund thesis
          </Link>{" "}
          framework.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          Why target selection determines search fund outcomes
        </h2>
        <p>
          Of the 681 search funds tracked since 1984, roughly 63% completed an
          acquisition. Among those that closed deals, 69.5% generated positive
          returns for investors, but 10.5% resulted in a total loss of
          capital. The median purchase price in the 2024 study was $14.4 million
          at a 7.0x EBITDA multiple, with a median company EBITDA of $2.2
          million at the time of acquisition. Those numbers leave almost no room
          for error: overpay by one turn of EBITDA or misjudge the stability of
          cash flows, and the used capital structure collapses.
        </p>
        <p>
          Target selection is the single highest-use decision a searcher
          makes. A rigorous Ideal Company Profile (ICP) prevents two common
          failure modes: acquiring a business that cannot service its debt, and
          acquiring a business the new CEO cannot actually operate. The 10
          criteria below address both risks.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          The 10 characteristics of an ideal search fund target
        </h2>

        <h3 className={h3Class}>1. Recurring or repeatable revenue</h3>
        <p>
          Predictable cash flow is the foundation of every successful search
          fund acquisition. Businesses with contractual or subscription-based
          revenue are more resilient to management transitions, giving a
          first-time CEO time to learn the operation without firefighting a
          collapsing top line.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Ideal:</strong> 60%+ of revenue is contractually recurring
            through subscriptions, maintenance agreements, or multi-year
            contracts. The median EBITDA margin for acquired search fund
            companies is 27%, and recurring revenue businesses consistently
            anchor the upper end of that distribution.
          </li>
          <li>
            <strong>Acceptable:</strong> Strong repeat-purchase behavior with
            annual customer retention above 85%, even without formal contracts.
            Examples include commercial janitorial services, pest control routes,
            and managed IT services.
          </li>
          <li>
            <strong>Avoid:</strong> Project-based businesses where every dollar
            of revenue must be re-sold from scratch each quarter. Construction,
            custom fabrication, and one-time consulting engagements carry revenue
            volatility that compounds under use.
          </li>
          <li>
            See{" "}
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              recurring revenue models
            </Link>{" "}
            for why acquirers pay a 1-3x EBITDA premium for contractual
            revenue streams.
          </li>
        </ul>

        <h3 className={h3Class}>2. Low customer concentration</h3>
        <p>
          Customer concentration is one of the fastest ways to destroy value
          after closing. If a single client represents 25% of revenue and
          decides to leave during the ownership transition, the business may no
          longer cover its debt service.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Ideal:</strong> No single customer exceeds 10% of revenue,
            and the top five customers collectively account for less than 25%.
          </li>
          <li>
            <strong>Acceptable:</strong> Largest customer below 20%, top five
            below 40%, with long-tenured relationships (5+ years) and contracts
            in place.
          </li>
          <li>
            <strong>Avoid:</strong> Any business where one customer exceeds 30%
            of revenue. Even at a steep discount, the binary risk is too high
            for a leveraged acquisition.
          </li>
          <li>
            Review the full framework in our{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration risk
            </Link>{" "}
            guide.
          </li>
        </ul>

        <h3 className={h3Class}>3. Defensible market position</h3>
        <p>
          A good acquisition target does not need to be a monopoly, but it does
          need a reason customers stay. Defensibility protects margins during the
          inevitable learning curve of a new operator.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Switching costs:</strong> The strongest moats come from
            embedded workflows, think ERP integrations, regulatory
            certifications tied to the vendor, or proprietary data that
            customers depend on daily.
          </li>
          <li>
            <strong>Relationship depth:</strong> Long-tenured customer
            relationships (10+ year average tenure) that are tied to the company
            brand rather than the departing owner personally.
          </li>
          <li>
            <strong>Niche expertise:</strong> Specialized capabilities in areas
            like environmental compliance testing, medical device calibration, or
            insurance claims processing that limit the competitive set to a
            handful of players.
          </li>
          <li>
            <strong>Geographic density:</strong> Service businesses with strong
            route density or a dominant share within a defined metro area create
            cost advantages that national competitors cannot easily replicate.
          </li>
        </ul>

        <h3 className={h3Class}>4. Stable EBITDA between $750K and $5M</h3>
        <p>
          The 2024 Stanford study reports a median acquired-company EBITDA of
          $2.2 million. This range exists for structural reasons: below $750K,
          the business cannot simultaneously service acquisition debt, pay a
          CEO salary, and fund reinvestment. Above $5M, the purchase price
          (typically $15M-$35M at prevailing multiples) pushes beyond the
          capital-raising capacity of most traditional search funds.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Minimum EBITDA:</strong> $750K-$1M for self-funded
            searchers; $1.5M+ for traditional search funds.
          </li>
          <li>
            <strong>Sweet spot:</strong> $1.5M-$4M provides enough cash
            flow to absorb the inevitable post-acquisition surprises while
            leaving room for growth investment. See our guide on{" "}
            <Link href="/learn/what-size-business-buy" className="text-apple-accent hover:underline">
              what size business to buy
            </Link>.
          </li>
          <li>
            <strong>Margin floor:</strong> Target 15%+ EBITDA margins. The
            median margin among acquired search fund companies is 27%, and that
            buffer matters when you are servicing 3-4x use.
          </li>
          <li>
            <strong>Trend requirement:</strong> Flat or growing EBITDA over the
            trailing three to five years. A declining trend requires a specific,
            actionable turnaround thesis, and even then, experienced search
            fund investors will push back.
          </li>
        </ul>

        <h3 className={h3Class}>5. Existing management team</h3>
        <p>
          Search fund CEOs are, by definition, first-time operators. The
          business must be able to run without the departing owner from Day 1,
          which means a functional management layer is non-negotiable.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Ideal:</strong> Two to three key managers (operations, sales,
            finance) who have been with the company for 3+ years and can
            maintain daily operations independently.
          </li>
          <li>
            <strong>Key person risk:</strong> Evaluate what knowledge,
            relationships, and decision-making authority leave when the owner
            exits. Our{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              key person risk
            </Link>{" "}
            assessment framework walks through this analysis step by step.
          </li>
          <li>
            <strong>Avoid:</strong> Businesses where the owner is simultaneously
            the top salesperson, lead technician, and sole manager. These{" "}
            <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
              owner-dependent businesses
            </Link>{" "}
            can lose 20-40% of revenue within 12 months of a transition if
            the dependency is not resolved before closing.
          </li>
        </ul>

        <h3 className={h3Class}>6. Low capital expenditure requirements</h3>
        <p>
          Asset-light businesses generate more free cash flow per dollar of
          revenue, providing a larger margin of safety for debt service and a
          faster path to investor distributions.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Ideal:</strong> Maintenance capex below 5% of revenue.
            Services businesses, software companies, and professional firms
            typically meet this threshold.
          </li>
          <li>
            <strong>Acceptable:</strong> Capex between 5% and 10% of revenue
            with predictable, schedulable replacement cycles, for example,
            a fleet of service vehicles replaced on a rolling five-year basis.
          </li>
          <li>
            <strong>Avoid:</strong> Businesses requiring lumpy, large capital
            investments (manufacturing equipment, real estate buildouts,
            technology platform rebuilds) that compete directly with debt service
            for available cash flow.
          </li>
        </ul>

        <h3 className={h3Class}>7. Fragmented industry</h3>
        <p>
          Fragmented industries offer three advantages to search fund operators:
          a larger number of potential acquisition targets during the search
          phase, less sophisticated competition post-acquisition, and a clear
          path to value creation through{" "}
          <Link href="/learn/industry-selection-framework" className="text-apple-accent hover:underline">
            industry consolidation
          </Link>.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Ideal:</strong> No single competitor holds more than 5%
            national market share. The industry is dominated by hundreds or
            thousands of small, independently owned operators.
          </li>
          <li>
            <strong>Why it works:</strong> Fragmentation usually signals that
            the industry rewards local relationships, specialized knowledge, or
            regional density over scale, exactly the conditions where a
            hands-on CEO-operator can win.
          </li>
          <li>
            <strong>Top sectors:</strong> According to the 2024 Stanford data,
            the highest-performing search fund industries include healthcare
            services (25% of acquisitions), business services (25%), software
            and technology (22%), and tech-enabled services (16%).
          </li>
        </ul>

        <h3 className={h3Class}>8. Succession-driven seller</h3>
        <p>
          The seller&rsquo;s motivation shapes every aspect of the deal: price
          expectations, willingness to provide financing, transition support
          duration, and cultural handoff to employees. Succession-driven sellers
          consistently produce the best outcomes for search fund buyers.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>The demographic wave:</strong> Approximately 12 million
            U.S. small businesses are owned by baby boomers, representing
            roughly 40% of all small business ownership. More than 70% of these
            businesses are expected to change hands in the coming decades, yet
            fewer than one-third of owners have a succession plan in place. See{" "}
            <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
              the baby boomer succession crisis
            </Link>.
          </li>
          <li>
            <strong>Best seller profile:</strong> A founder age 60+ with no
            family successor, motivated by legacy preservation and employee
            welfare rather than extracting the last dollar of value.
          </li>
          <li>
            <strong>Deal structure benefits:</strong> Succession-driven sellers
            are far more likely to offer{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing
            </Link>{" "}
            (typically 10-20% of the purchase price) and commit to a
            6-12 month transition period, both of which reduce risk for
            the incoming operator.
          </li>
        </ul>

        <h3 className={h3Class}>9. Identifiable growth levers</h3>
        <p>
          A good acquisition target is not a turnaround, it is a healthy
          business with untapped upside. The best targets have growth potential
          that the current owner has chosen not to pursue, often because they
          are nearing retirement and have stopped reinvesting.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Under-invested sales and marketing:</strong> No digital
            marketing presence, no CRM system, no systematic outbound sales
            process. These gaps are common in founder-led SMBs and represent
            immediate post-acquisition wins.
          </li>
          <li>
            <strong>Pricing upside:</strong>{" "}
            <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">
              Pricing optimization
            </Link>{" "}
            is often the single fastest value-creation lever. Many
            owner-operators have not raised prices in years, leaving 5-15%
            of margin on the table.
          </li>
          <li>
            <strong>Adjacent expansion:</strong> New service lines, new
            geographies, or bolt-on acquisitions in the same fragmented
            industry. The Stanford data shows that search fund CEOs who execute
            add-on acquisitions generate meaningfully higher returns.
          </li>
          <li>
            <strong>Technology and process gaps:</strong>{" "}
            <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">
              Digital transformation
            </Link>{" "}
            initiatives, implementing modern ERP, automating back-office
            workflows, deploying field service management software, can
            improve EBITDA margins by 5-15 percentage points in
            traditionally-run businesses.
          </li>
        </ul>

        <h3 className={h3Class}>10. Reasonable valuation (3-6x EBITDA)</h3>
        <p>
          The 2024 Stanford study reports a median acquisition multiple of 7.0x
          EBITDA, which includes software and tech-enabled service businesses
          that trade at premium valuations. For traditional service and
          industrial businesses, the core of most search fund
          strategies, the target range remains 3-6x EBITDA.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Why discipline matters:</strong> Overpaying is the number-one
            cause of{" "}
            <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
              search fund failure
            </Link>. Every additional turn of EBITDA paid at acquisition reduces
            the margin of safety for debt service and compresses equity returns.
          </li>
          <li>
            <strong>Benchmarking:</strong> Always compare against{" "}
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              EBITDA multiples by industry
            </Link>{" "}
            before submitting an LOI. A 5.5x offer for a HVAC company with
            $2M EBITDA may be competitive; the same multiple for a general
            contractor with project-based revenue would be overpaying.
          </li>
          <li>
            <strong>Valuation levers:</strong> Seller financing, earnouts tied
            to transition milestones, and working capital adjustments can bridge
            valuation gaps without increasing the headline multiple.
          </li>
        </ul>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          Red flags that disqualify a target
        </h2>
        <p>
          Even a business that meets most of the 10 criteria above can be
          disqualified by a single dealbreaker. Watch for these warning signs
          during initial screening and{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Revenue declining more than 5% for two or more consecutive
            years</strong>, indicates a structural problem, not a
            temporary dip.
          </li>
          <li>
            <strong>Single customer above 30% of revenue</strong>, creates
            binary risk that no amount of operational skill can mitigate.
          </li>
          <li>
            <strong>Owner is the sole rainmaker with no second-in-command
            </strong>, customer relationships, vendor terms, and
            institutional knowledge walk out the door at closing.
          </li>
          <li>
            <strong>Pending or probable regulatory change</strong> that could
            fundamentally alter the business model (reimbursement rate cuts,
            licensing requirement changes, environmental mandates).
          </li>
          <li>
            <strong>Technology disruption threatening the core value
            proposition</strong>, if a SaaS tool or AI workflow can
            replace the company&rsquo;s core service within five years, the
            terminal value assumption in your model is unreliable.
          </li>
          <li>
            <strong>Unresolved environmental or legal liabilities
            </strong>, these can exceed the purchase price and are often
            invisible without specialized due diligence.
          </li>
          <li>
            <strong>Seller demanding all-cash at close with no transition
            period</strong>, signals misaligned incentives and eliminates
            the alignment that seller financing provides.
          </li>
        </ul>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          How to build a target scoring rubric
        </h2>
        <p>
          Reviewing dozens of potential targets without a structured framework
          leads to inconsistent decisions and deal fatigue. A weighted scoring
          rubric solves both problems. Nearly 60% of M&amp;A executives report
          that structured scoring systems improved the quality of their
          acquisition decisions.
        </p>

        <p>
          <strong>Step 1: Define your criteria and weights.</strong> Assign each
          of the 10 characteristics a weight based on your{" "}
          <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
            thesis
          </Link>{" "}
          priorities. A typical weighting might allocate 15% each to recurring
          revenue and customer concentration, 15% to EBITDA stability, 10% each
          to defensibility, management depth, capex intensity, and valuation,
          and 5% each to fragmentation, seller motivation, and growth levers.
        </p>
        <p>
          <strong>Step 2: Score each criterion on a 1-5 scale.</strong>
        </p>
        <ul className={ulClass}>
          <li>
            <strong>5 (Excellent):</strong> Meets the &ldquo;Ideal&rdquo;
            threshold described above. Example: 80% recurring revenue under
            multi-year contracts.
          </li>
          <li>
            <strong>4 (Good):</strong> Meets the &ldquo;Acceptable&rdquo;
            threshold. Example: 70% repeat revenue with 90% annual retention
            but no formal contracts.
          </li>
          <li>
            <strong>3 (Neutral):</strong> Neither a strength nor a weakness.
            Requires further diligence.
          </li>
          <li>
            <strong>2 (Concerning):</strong> Below threshold but potentially
            fixable within 12-18 months post-acquisition.
          </li>
          <li>
            <strong>1 (Disqualifying):</strong> Hard red flag. Unless every
            other criterion scores a 5, walk away.
          </li>
        </ul>
        <p>
          <strong>Step 3: Calculate weighted scores and set a cutoff.</strong>{" "}
          Multiply each score by its weight, sum the results, and divide by the
          maximum possible score to get a percentage. Most experienced searchers
          set a minimum threshold of 70%, any target below that threshold
          goes into a &ldquo;pass&rdquo; pile unless a single extraordinary
          factor (such as an unbeatable price) justifies a deeper look.
        </p>
        <p>
          <strong>Step 4: Pressure-test with your investors.</strong> Share
          your top-scoring targets with two or three board members before
          spending money on due diligence. Their pattern recognition across
          dozens of deals will catch blind spots your rubric missed.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          Good target vs. bad target: two scenarios
        </h2>

        <h3 className={h3Class}>Scenario A: Strong target, regional fire protection services</h3>
        <ul className={ulClass}>
          <li>$2.4M EBITDA on $9M revenue (27% margin)</li>
          <li>78% of revenue from recurring inspection and maintenance contracts</li>
          <li>No customer above 6% of revenue; 350+ commercial accounts</li>
          <li>Owner is 64, wants to retire, willing to stay 12 months and carry 15% seller note</li>
          <li>Three managers (operations, sales, admin) with 8+ years tenure each</li>
          <li>Capex is 3% of revenue (service vans replaced on a five-year cycle)</li>
          <li>No website, no CRM, no outbound sales, all growth has been referral-based</li>
          <li>Asking price: 4.8x EBITDA ($11.5M)</li>
          <li><strong>Rubric score: 92%.</strong> Proceed to LOI.</li>
        </ul>

        <h3 className={h3Class}>Scenario B: Risky target, custom metal fabrication shop</h3>
        <ul className={ulClass}>
          <li>$1.8M EBITDA on $12M revenue (15% margin)</li>
          <li>Zero recurring revenue, 100% project-based, re-bid quarterly</li>
          <li>Top customer (a single general contractor) is 35% of revenue</li>
          <li>Owner is the sole estimator, project manager, and client relationship holder</li>
          <li>No middle management, foremen report directly to the owner</li>
          <li>Capex is 12% of revenue (CNC machines, welding equipment, facility maintenance)</li>
          <li>Revenue declined 8% last year due to a lost contract</li>
          <li>Asking price: 5.5x EBITDA ($9.9M)</li>
          <li>
            <strong>Rubric score: 34%.</strong> Pass. Customer concentration,
            owner dependency, capex intensity, and revenue volatility each score
            a 1. No realistic value-creation plan overcomes four simultaneous
            dealbreakers.
          </li>
        </ul>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          Putting it into practice: from criteria to{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal flow
          </Link>
        </h2>
        <p>
          A rubric is only useful if it connects to an active pipeline. Here is
          how to operationalize these 10 criteria during your search:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Encode your ICP in your CRM.</strong> Tag every inbound
            deal with scores for each criterion so you can sort and filter
            your pipeline by rubric score rather than gut feeling.
          </li>
          <li>
            <strong>Brief your broker network.</strong> Share a one-page
            summary of your ICP with every broker you speak to. The more
            specific your criteria, the fewer irrelevant teasers you receive.
          </li>
          <li>
            <strong>Use the rubric as a screening gate.</strong> Before
            requesting a CIM or signing an NDA, run the target through your
            rubric using only the information in the teaser. If it scores below
            60%, pass immediately and protect your time.
          </li>
          <li>
            <strong>Revisit and refine quarterly.</strong> After reviewing 50+
            targets, you will notice which criteria are too strict (eliminating
            good deals) and which are too loose (letting bad deals through).
            Adjust weights and thresholds accordingly.
          </li>
        </ol>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>
          What EBITDA range do most search funds target?
        </h3>
        <p>
          Traditional search funds typically target businesses with $1.5M to
          $5M in EBITDA, while self-funded searchers often look in the $500K to
          $2M range. The 2024 Stanford study reports a median acquired-company
          EBITDA of $2.2 million, with a median purchase price of $14.4 million.
          Below $750K in EBITDA, the business generally cannot support
          acquisition debt, a CEO salary, and reinvestment simultaneously. Above
          $5M, the total purchase price typically exceeds the capital-raising
          capacity of a traditional search fund structure.
        </p>

        <h3 className={h3Class}>
          Can an owner-dependent business still be a good acquisition target?
        </h3>
        <p>
          It depends on the nature of the dependency and your ability to resolve
          it before or immediately after closing. If the owner&rsquo;s primary
          role is strategic and the operational team can maintain day-to-day
          delivery, the transition risk is manageable. If the owner is the sole
          salesperson, the only person who knows the pricing logic, and the
          primary client relationship holder, the business effectively
          disappears when they leave. The key test: can the business operate at
          80%+ of current revenue for 90 days without the owner present? If
          yes, the dependency is manageable. If no, factor in 12-18
          months of transition overlap and price the risk into your offer. See
          our full analysis of{" "}
          <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
            owner-dependent businesses
          </Link>.
        </p>

        <h3 className={h3Class}>
          How many of the 10 criteria does a target need to meet?
        </h3>
        <p>
          There is no magic number, but experienced searchers and investors
          generally agree on a practical rule: a target should score well on at
          least 7 of the 10 criteria, with no more than one score in the
          &ldquo;disqualifying&rdquo; range. Certain criteria are harder to fix
          post-acquisition than others. Customer concentration, capital
          intensity, and industry fragmentation are structural, they rarely
          change within a typical five-to-seven-year hold period. Revenue
          quality, management depth, and growth levers, by contrast, are areas
          where a strong operator can create meaningful improvement. Weight your
          rubric accordingly.
        </p>

        <h3 className={h3Class}>
          Should I only look at businesses that are already for sale?
        </h3>
        <p>
          No. The best search fund acquisitions frequently come from proprietary
          outreach to owners who had not yet listed their business. Among the
          roughly 12 million boomer-owned businesses in the U.S., fewer than a
          third have a formal succession plan, meaning millions of owners
          would consider a sale if the right buyer approached them. Proprietary{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing
          </Link>{" "}
          through direct outreach, industry conferences, and professional
          referral networks often surfaces higher-quality targets at lower
          multiples than the brokered market.
        </p>

        <h3 className={h3Class}>
          What industries produce the best search fund returns?
        </h3>
        <p>
          The 2024 Stanford data shows that healthcare services and business
          services each account for 25% of search fund acquisitions, followed
          by software and technology at 22% and tech-enabled services at 16%.
          Historically, tech-enabled services and healthcare services have
          generated the highest IRRs. However, industry selection should be
          driven by your personal expertise, the availability of targets in
          your geography, and alignment with your{" "}
          <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
            acquisition thesis
          </Link>{" "}
          rather than chasing the sectors with the highest historical returns.
          Use the{" "}
          <Link href="/learn/industry-selection-framework" className="text-apple-accent hover:underline">
            industry selection framework
          </Link>{" "}
          to evaluate sectors systematically.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Start building your target profile today</h2>
        <p>
          The 10 criteria above are not theoretical, they are the
          distillation of 681 search fund outcomes tracked by Stanford over
          four decades. Searchers who internalize these standards before they
          start reviewing deals make faster decisions, waste less time on
          misfit targets, and close on businesses that are structurally set up
          to succeed under new ownership.
        </p>
        <p>
          Begin by defining your{" "}
          <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
            search fund thesis
          </Link>, then build a scoring rubric calibrated to your specific
          strategy. As you develop your pipeline through{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing
          </Link>, apply the rubric to every opportunity and let the data, not
          your excitement, drive your go/no-go decisions.
        </p>
      </div>
    </article>
  );
}
