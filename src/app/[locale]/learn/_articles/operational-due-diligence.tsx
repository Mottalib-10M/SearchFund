import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function OperationalDueDiligenceArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Operational Due Diligence for SME Acquisitions
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          Operational due diligence (ODD) answers the question financial
          statements cannot: will this business keep running, and
          grow, once the current owner walks away? A{" "}
          <a
            href="https://www.mckinsey.com/capabilities/m-and-a/how-we-help-clients/m-and-a-strategy-due-diligence"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            McKinsey analysis
          </a>{" "}
          found that 42% of pre-deal due diligence failed to produce an
          adequate roadmap for capturing synergies and creating value.
          The gap almost always sits in operations: undocumented
          processes, hidden vendor dependencies, key-person bottlenecks,
          and aging technology that no balance sheet reveals. This guide
          provides a structured framework for evaluating every
          operational layer of a small or mid-sized business before you
          sign.
        </p>

        {/* ================================================
            H2 #1 - What ODD Covers (vs Financial & Legal)
        ================================================= */}
        <h2 className={h2Class}>
          What Operational DD Covers That Financial and Legal DD Cannot
        </h2>
        <p>
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            Financial due diligence
          </Link>{" "}
          is backward-looking: it validates reported earnings, adjusts
          EBITDA, and stress-tests the income statement. Legal DD flags
          pending litigation, regulatory exposure, and contract
          liabilities. Operational DD is forward-looking. It examines
          whether the machinery behind those earnings, people,
          processes, systems, vendors, and physical assets, can
          sustain and scale performance under new ownership.
        </p>
        <p>
          According to{" "}
          <a
            href="https://alphafmc.com/blog/2024/07/29/operations-due-diligence/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Alpha FMC
          </a>,
          ODD serves four purposes during a deal: it provides confidence
          on the cost base (feeding Quality of Earnings adjustments),
          validates the business&rsquo;s ability to scale, identifies
          value-creation opportunities, and assesses the extent of
          operational risk. When financial DD tells you <em>what</em> a
          business earns, operational DD tells you <em>how</em> it earns
          it, and whether that &ldquo;how&rdquo; is fragile or
          strong.
        </p>
        <p>
          A practical way to think about the three workstreams:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Financial DD:</strong> &ldquo;Are the numbers
            accurate?&rdquo;
          </li>
          <li>
            <strong>Legal DD:</strong> &ldquo;What liabilities are
            hidden?&rdquo;
          </li>
          <li>
            <strong>Operational DD:</strong> &ldquo;Can the business
            deliver these numbers next year without the current
            owner?&rdquo;
          </li>
        </ul>
        <p>
          For the full picture across all three pillars, our{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence checklist
          </Link>{" "}
          consolidates every request item into a single working
          document.
        </p>

        {/* ================================================
            H2 #2 - Processes and Systems
        ================================================= */}
        <h2 className={h2Class}>
          Process and Systems Assessment: The Engine Room
        </h2>
        <p>
          Undocumented processes are one of the highest-risk findings in
          SME acquisitions. If key workflows live exclusively in the
          owner&rsquo;s head, you are buying a job, not a business. The
          goal of this workstream is to determine whether operations
          are <em>documented, repeatable, and transferable</em>.
        </p>

        <h3 className={h3Class}>Core process documentation audit</h3>
        <p>
          Request written standard operating procedures (SOPs) for
          the five to ten most important workflows, order
          fulfillment, customer onboarding, invoicing, quality control,
          and escalation handling. Rate each on a simple maturity scale:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Undocumented:</strong> Process exists only as tribal
            knowledge.
          </li>
          <li>
            <strong>Informally documented:</strong> Notes or checklists
            exist but are incomplete or outdated.
          </li>
          <li>
            <strong>Formally documented:</strong> SOPs are current, used
            by staff, and reviewed periodically.
          </li>
          <li>
            <strong>Measured and improved:</strong> KPIs are tracked and
            the process is subject to continuous{" "}
            <Link href="/learn/process-improvement" className="text-apple-accent hover:underline">
              process improvement
            </Link>.
          </li>
        </ol>
        <p>
          Most SMEs sit at levels 1-2. That is not necessarily a
          dealbreaker, but it directly affects your post-close workload
          and integration budget.
        </p>

        <h3 className={h3Class}>Scalability and bottleneck mapping</h3>
        <p>
          Ask the seller: &ldquo;If revenue increased 30% in six
          months, what would break first?&rdquo; The answer reveals the
          binding constraint, production capacity, scheduling
          software, warehouse space, or a single overworked manager.
          Map these bottlenecks against your growth thesis. If your plan
          calls for 20-50% top-line growth, every bottleneck
          becomes a capital expenditure line item in your post-close
          budget.
        </p>

        <h3 className={h3Class}>Quality control metrics</h3>
        <p>
          Collect at least three years of defect rates, warranty claims,
          service-failure logs, and customer return percentages. A
          rising defect trend may signal that the business has been
          cutting corners to preserve margins, a red flag that
          financial DD alone would not catch.
        </p>

        {/* ================================================
            H2 #3 - Technology and IT Infrastructure
        ================================================= */}
        <h2 className={h2Class}>
          Technology and IT Infrastructure Review
        </h2>
        <p>
          A{" "}
          <a
            href="https://beyond-ma.com/10-must-know-statistics-about-tech-due-diligence/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Beyond M&amp;A study
          </a>{" "}
          reported that 76% of technology acquisitions fail to meet
          financial objectives, yet companies that perform technology
          due diligence are 2.8 times more likely to achieve a
          successful outcome. Even if you are buying a plumbing company,
          the technology stack matters: scheduling software, CRM,
          invoicing, fleet GPS, and customer-facing portals all affect
          operating margins.
        </p>

        <h3 className={h3Class}>System inventory checklist</h3>
        <ul className={ulClass}>
          <li>
            <strong>Core platforms:</strong> ERP, CRM, accounting
            (QuickBooks, Xero, Sage), and any industry-specific
            software.
          </li>
          <li>
            <strong>Age and support status:</strong> Is the software
            vendor still issuing updates? End-of-life systems carry
            security and compatibility risk.
          </li>
          <li>
            <strong>Integration:</strong> Do systems talk to each other,
            or does data move via manual re-entry and spreadsheets?
          </li>
          <li>
            <strong>Data ownership:</strong> Confirm that customer data,
            historical records, and intellectual property reside on
            company-owned infrastructure, not locked inside a
            vendor&rsquo;s proprietary platform.
          </li>
          <li>
            <strong>Cybersecurity posture:</strong> Backup frequency and
            testing, password policies, multi-factor authentication,
            and incident history. A single ransomware event can halt
            operations for weeks.
          </li>
        </ul>
        <p>
          Budget for a third-party IT audit if annual revenue exceeds
          &euro;2-3M or if the business handles sensitive
          customer data (healthcare, financial services). For guidance
          on modernization opportunities, see our article on{" "}
          <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">
            digital transformation
          </Link>{" "}
          after acquisition.
        </p>

        {/* ================================================
            H2 #4 - Supply Chain and Vendor Dependencies
        ================================================= */}
        <h2 className={h2Class}>
          Supply Chain and Vendor Dependency Analysis
        </h2>
        <p>
          A{" "}
          <a
            href="https://www.moodys.com/web/en/us/kyc/resources/insights/three-things-to-know-performing-supplier-due-diligence.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Moody&rsquo;s report
          </a>{" "}
          found that 72% of organizations have experienced at least one
          significant disruption as the result of a third-party
          relationship. For SMEs, where backup suppliers are rare and
          negotiating power is low, a single vendor failure can be
          existential.
        </p>

        <h3 className={h3Class}>Vendor risk tiering</h3>
        <p>
          Classify every vendor relationship into three tiers based on
          operational criticality and spend concentration:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Tier 1: Critical:</strong> Single-source
            suppliers, vendors providing &gt;15% of inputs, or
            technology platforms the business cannot operate without.
            These require deep diligence.
          </li>
          <li>
            <strong>Tier 2: Important:</strong> Suppliers with
            ready alternatives but meaningful switching costs or lead
            times. Review contract terms and pricing agreements.
          </li>
          <li>
            <strong>Tier 3: Commodity:</strong> Easily
            replaceable suppliers. A quick terms review is sufficient.
          </li>
        </ul>

        <h3 className={h3Class}>Critical contract review</h3>
        <p>
          For every Tier 1 vendor, extract the following from
          existing contracts:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Change-of-control clauses:</strong> Can the vendor
            terminate or renegotiate upon ownership transfer?
          </li>
          <li>
            <strong>Pricing lock-ins and escalation terms:</strong> Are
            current input costs protected, or subject to annual
            increases?
          </li>
          <li>
            <strong>Exclusivity provisions:</strong> Does the contract
            prevent the business from sourcing from competitors?
          </li>
          <li>
            <strong>Lead times and minimums:</strong> Document current
            lead times and minimum order quantities to gauge flexibility.
          </li>
        </ul>
        <p>
          If a single supplier accounts for more than 40% of cost of
          goods sold, treat it as a material deal risk. Build
          alternative-sourcing scenarios into your financial model.
        </p>

        {/* ================================================
            H2 #5 - Workforce and Organizational Health
        ================================================= */}
        <h2 className={h2Class}>
          Workforce and Organizational Assessment
        </h2>
        <p>
          People risk is the most underpriced factor in SME
          acquisitions. Research compiled by{" "}
          <a
            href="https://mnacommunity.com/insights/employee-retention-after-acquisition/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            M&amp;A Community
          </a>{" "}
          shows that nearly 50% of key employees leave within the first
          year after a deal closes, climbing to 75% within three years.
          Replacing a skilled employee costs 50-200% of their
          annual salary when you factor in recruiting, training, and
          lost productivity.
        </p>

        <h3 className={h3Class}>
          Owner dependency and key-person risk
        </h3>
        <p>
          Start by mapping the{" "}
          <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
            owner-dependent business
          </Link>{" "}
          profile. Shadow the current owner for a full working day:
          who do they speak with, what decisions do they make, and
          what would happen if they stopped showing up tomorrow? Then
          identify the 3-5 non-owner employees the business
          cannot function without, the classic{" "}
          <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
            key-person risk
          </Link>{" "}
          scenario. For each key person, assess:
        </p>
        <ul className={ulClass}>
          <li>
            Whether their compensation is at, above, or below market
            rate.
          </li>
          <li>
            What institutional knowledge they hold that is not
            documented.
          </li>
          <li>
            Their likely reaction to an ownership change (interview them
            directly if the seller permits).
          </li>
          <li>
            Whether a retention bonus or stay agreement is warranted
            as a deal condition.
          </li>
        </ul>

        <h3 className={h3Class}>Workforce data collection</h3>
        <p>
          Request the following data points for the last three years
          at minimum:
        </p>
        <ul className={ulClass}>
          <li>
            Headcount by department, with full-time, part-time, and
            contractor breakdown.
          </li>
          <li>
            Annual turnover rate. The SME benchmark is typically
            15-25%; anything above 30% warrants investigation.
          </li>
          <li>
            Average tenure by role. Short average tenure in
            revenue-generating roles (sales, project managers) suggests
            a retention problem.
          </li>
          <li>
            Employee certifications, licenses, and specialized training
            that are legally required to operate.
          </li>
          <li>
            Open positions and recruiting pipeline status, chronic
            vacancies signal either labor-market difficulty or
            cultural issues.
          </li>
        </ul>
        <p>
          According to a{" "}
          <a
            href="https://www.corporate.marsh.com/assets/insights/publications/2020/october/gl-mergers-and-acquisitions-people-risks-report-mercer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Mercer-Marsh report
          </a>,
          roughly 30% of M&amp;A retention failures stem from cultural
          mismatches rather than compensation gaps. Schedule informal
          conversations with frontline staff, not just
          management, to gauge morale, communication quality, and
          attitudes toward the ownership transition.
        </p>

        {/* ================================================
            H2 #6 - Facilities, Equipment, and Physical Assets
        ================================================= */}
        <h2 className={h2Class}>
          Facilities, Equipment, and Physical Asset Inspection
        </h2>
        <p>
          Walk every facility yourself, photographs and reports are
          not substitutes for direct observation. Allocate at least two
          site visits during the DD window: an initial tour and a
          deep-dive inspection.
        </p>

        <h3 className={h3Class}>Facility evaluation framework</h3>
        <ul className={ulClass}>
          <li>
            <strong>Lease terms:</strong> Remaining term, renewal
            options, rent escalation clauses, and any change-of-control
            provisions. A lease expiring within 12 months of close is a
            material risk if renewal is uncertain.
          </li>
          <li>
            <strong>Capacity utilization:</strong> Estimate current
            utilization as a percentage. A facility at 90%+ utilization
            means growth requires either capital expansion or a second
            location.
          </li>
          <li>
            <strong>Deferred maintenance:</strong> Look for peeling
            paint, aging HVAC, leaking roofs, and outdated electrical
            systems. These become immediate post-close capital expenses.
          </li>
          <li>
            <strong>Environmental compliance:</strong> For
            manufacturing, automotive, or chemical-adjacent businesses,
            request Phase I environmental site assessments.
          </li>
        </ul>

        <h3 className={h3Class}>Equipment and asset register</h3>
        <p>
          Build a complete asset register covering every piece of
          equipment valued above &euro;5,000:
        </p>
        <ul className={ulClass}>
          <li>
            Purchase date, expected useful life, and current condition
            (rated 1-5).
          </li>
          <li>
            Maintenance history and outstanding repair needs.
          </li>
          <li>
            Replacement cost estimate at current market prices.
          </li>
          <li>
            Whether the asset is owned, leased, or financed, and
            transferability of any lease or loan.
          </li>
        </ul>
        <p>
          Sum the deferred capex into a single number and subtract it
          from your enterprise-value calculation. Sellers often defer
          maintenance in the years before a sale to inflate reported
          cash flow.
        </p>

        {/* ================================================
            H2 #7 - Customer Operations and Revenue Durability
        ================================================= */}
        <h2 className={h2Class}>
          Customer Operations and Revenue Durability
        </h2>
        <p>
          Revenue that disappears when the owner leaves is not revenue
          you are buying, it is goodwill you are overpaying for.
          Validate the durability of the income stream through three
          lenses: concentration, retention, and satisfaction.
        </p>

        <h3 className={h3Class}>Concentration thresholds</h3>
        <p>
          As{" "}
          <a
            href="https://www.security-banks.com/blog/due-diligence-checklist-for-small-business-acquisitions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Security Bank&rsquo;s acquisition guide
          </a>{" "}
          frames it: any single customer representing more than 20% of
          revenue is high risk, and if the top three customers account
          for more than 50%, the risk is extreme. Build a revenue
          waterfall showing each customer&rsquo;s contribution over the
          past three years. Flag any customer whose revenue share is
          trending upward while total revenue is flat, that
          signals growing dependence, not growth.
        </p>

        <h3 className={h3Class}>Retention and satisfaction audit</h3>
        <ul className={ulClass}>
          <li>
            <strong>Gross and net revenue retention:</strong> Calculate
            by cohort and by year. Net retention above 100% means
            existing customers are spending more over time.
          </li>
          <li>
            <strong>Churn analysis:</strong> Identify the top five
            customer losses in each of the last three years and the
            reasons behind each departure.
          </li>
          <li>
            <strong>NPS or satisfaction proxies:</strong> If no formal
            NPS exists, use online review scores, complaint logs, and
            return/refund rates.
          </li>
          <li>
            <strong>Direct customer interviews:</strong> Speak with
            5-10 customers (with seller permission). Ask three
            questions: Why do you buy from this company? Have you
            considered switching? What would make you leave?
          </li>
        </ul>

        {/* ================================================
            H2 #8 - Post-Acquisition Operations Plan
        ================================================= */}
        <h2 className={h2Class}>
          Building a Post-Acquisition Operations Plan
        </h2>
        <p>
          Operational DD is not a pass/fail exercise. Every finding
          should feed directly into your{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            first 100 days
          </Link>{" "}
          integration plan. Structure the plan around three time
          horizons:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Days 1-30 (Stabilize):</strong> Secure
            retention agreements for key employees, confirm all vendor
            contracts transfer cleanly, establish your presence without
            disrupting day-to-day operations, and complete any
            deferred-maintenance items that pose safety or compliance
            risk.
          </li>
          <li>
            <strong>Days 31-90 (Assess and Quick Wins):</strong>{" "}
            Document the top five undocumented processes, implement
            basic KPI dashboards (daily revenue, weekly cash, monthly
            customer metrics), resolve the most obvious bottleneck
            identified during DD, and conduct a full technology-stack
            review with upgrade recommendations.
          </li>
          <li>
            <strong>Days 91-180 (Build):</strong> Begin{" "}
            <Link href="/learn/process-improvement" className="text-apple-accent hover:underline">
              process improvement
            </Link>{" "}
            initiatives informed by DD findings, launch any
            technology migration or{" "}
            <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">
              digital transformation
            </Link>{" "}
            projects, start reducing owner dependency by transferring
            relationships and decision authority, and add backup
            suppliers for all Tier 1 vendor relationships.
          </li>
        </ol>
        <p>
          The best operational DD produces a prioritized punch list
          with estimated costs attached. That list becomes both your
          integration roadmap and a negotiating tool: quantified
          operational risks can justify purchase-price adjustments or
          escrow holdbacks in the purchase agreement.
        </p>

        {/* ================================================
            FAQ Section
        ================================================= */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          How long does operational due diligence take for an SME?
        </h3>
        <p>
          Most SME operational DD processes run 4-8 weeks in
          parallel with financial and legal workstreams. Plan for at
          least two site visits (initial tour plus a deep-dive
          inspection), 5-10 customer conversations, and meetings
          with key managers and frontline employees. Businesses with
          multiple locations, complex supply chains, or
          compliance-heavy industries (healthcare, food production) may
          require 8-12 weeks and third-party specialist audits.
        </p>

        <h3 className={h3Class}>
          What is the single biggest operational red flag in a small
          business acquisition?
        </h3>
        <p>
          Extreme owner dependency. If the owner personally manages
          every major customer relationship, makes all pricing
          decisions, and has no documented processes, earnings are
          likely to decline the moment they leave. Shadow the owner for
          a full day and count how many decisions only they can
          make, if the answer is more than a handful, build a
          12-18 month owner-transition period into the deal
          structure or walk away.
        </p>

        <h3 className={h3Class}>
          Should I hire a consultant for operational DD, or can I do it
          myself?
        </h3>
        <p>
          First-time acquirers benefit from hiring an operations-focused
          advisor for at least the IT audit and facility inspection
          portions. A{" "}
          <a
            href="https://www.duedilio.com/operational-due-diligence-for-business-acquisitions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            DueDilio analysis
          </a>{" "}
          recommends that a typical DD team include a financial
          professional, an attorney, a tax specialist, and an
          operations or HR expert. For deals under &euro;1M, a
          generalist M&amp;A advisor may cover operations adequately.
          Above &euro;3M, dedicated IT and operational specialists
          typically pay for themselves through the risks they uncover.
        </p>

        <h3 className={h3Class}>
          How does operational DD affect the purchase price?
        </h3>
        <p>
          Quantified operational findings translate directly into
          negotiating use. Deferred maintenance estimates,
          technology-replacement budgets, and key-employee retention
          costs can all justify reductions to the headline price or
          structured holdbacks. If DD reveals &euro;150,000 in
          deferred capital expenditures and &euro;50,000 in necessary
          retention bonuses, that &euro;200,000 becomes a concrete
          basis for price adjustment rather than an abstract request
          for a discount.
        </p>

        <h3 className={h3Class}>
          What happens if I skip operational DD entirely?
        </h3>
        <p>
          You risk joining the majority. According to{" "}
          <a
            href="https://mnacommunity.com/insights/why-mergers-and-acquisitions-often-fail/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            M&amp;A Community research
          </a>,
          62% of acquisitions fail to meet their financial objectives,
          with poor due diligence cited as a primary cause. Skipping
          ODD means discovering process gaps, staffing risks, and
          infrastructure decay only after you have wired the funds. At
          that point, every operational fix comes out of your pocket
          rather than being priced into the deal.
        </p>
      </div>
    </article>
  );
}
