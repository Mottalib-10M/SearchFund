import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function AcquiringHomeHealthcareArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Home Healthcare Business: Industry Playbook
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Home healthcare is one of the fastest-growing corners of the
          US healthcare system &mdash; a $150&nbsp;billion-plus market
          expanding at 7&ndash;9% annually, fueled by an aging population
          that overwhelmingly prefers to receive care at home rather than
          in institutional settings. For search fund entrepreneurs, the
          sector combines powerful demographic tailwinds, recurring
          government-reimbursed revenue, and extreme fragmentation into a
          compelling acquisition thesis. Yet home healthcare also carries
          meaningful regulatory complexity, workforce challenges, and
          reimbursement risk that demand specialized diligence. This
          playbook walks through the market environment, deal evaluation,
          valuation benchmarks, and post-acquisition growth levers you
          need to acquire &mdash; and operate &mdash; a home healthcare
          business successfully. If you are still evaluating whether
          entrepreneurship through acquisition is the right path, start
          with our overview of{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            what ETA is and how it works
          </Link>.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>The home healthcare market: size and drivers</h2>
        <p>
          Total US spending on home health services exceeded $150&nbsp;billion
          in 2024, and CMS projects the category will surpass $200&nbsp;billion
          before the end of the decade. Several structural forces underpin
          this growth:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Aging demographics:</strong> The 65-and-over population
            will grow from roughly 58&nbsp;million today to 82&nbsp;million
            by 2050. This cohort consumes 3&ndash;4x more healthcare
            services per capita than younger age groups, and the
            preference for aging in place is nearly universal &mdash; AARP
            surveys consistently show that 90% of seniors want to remain
            in their homes as long as possible.
          </li>
          <li>
            <strong>Cost advantage over institutional care:</strong> A day
            of home health aide service costs $180&ndash;$220, compared
            with $280&ndash;$320 for assisted living and $800+ for a
            skilled nursing facility. Medicare, Medicaid, and commercial
            insurers are all actively steering patients toward lower-cost
            home-based settings, creating a reimbursement tailwind for
            home health providers.
          </li>
          <li>
            <strong>Policy momentum:</strong> CMS&rsquo;s &ldquo;Home Health
            Value-Based Purchasing&rdquo; model, expanded telehealth
            flexibilities, and state Medicaid waiver programs that fund
            home- and community-based services (HCBS) are all shifting
            dollars out of facilities and into the home.
          </li>
          <li>
            <strong>Post-acute care shift:</strong> Hospitals face penalties
            for readmissions within 30&nbsp;days of discharge. Skilled
            home health agencies that reduce readmission rates have become
            essential partners for health systems, locking in referral
            volume.
          </li>
        </ul>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Types of home healthcare businesses</h2>
        <p>
          &ldquo;Home healthcare&rdquo; is an umbrella term that covers
          several distinct service lines, each with its own regulatory
          requirements, reimbursement dynamics, and operating profiles.
          Understanding the differences is critical before you begin
          sourcing deals.
        </p>

        <h3 className={h3Class}>Skilled home health (Medicare-certified)</h3>
        <p>
          Medicare-certified home health agencies (HHAs) provide skilled
          nursing, physical therapy, occupational therapy, speech-language
          pathology, and medical social work under a physician&rsquo;s
          plan of care. These agencies bill Medicare under the Patient-Driven
          Groupings Model (PDGM), which assigns a 30-day payment based on
          clinical characteristics, functional status, and referral source.
          Average Medicare reimbursement per episode is approximately
          $2,000&ndash;$3,500. Skilled home health is the highest-revenue,
          highest-margin, and most heavily regulated segment of the market.
        </p>

        <h3 className={h3Class}>Non-medical / companion care</h3>
        <p>
          Non-medical home care agencies provide assistance with activities
          of daily living (ADLs) &mdash; bathing, dressing, meal preparation,
          medication reminders, light housekeeping, and companionship. These
          services are typically paid out of pocket by the patient or family,
          through long-term care insurance, or via Medicaid waiver programs.
          Non-medical agencies face lighter regulatory requirements (no
          Medicare certification needed) but generally earn lower margins
          and have higher caregiver turnover because the work is lower-skilled
          and lower-paid.
        </p>

        <h3 className={h3Class}>Hospice</h3>
        <p>
          Hospice agencies provide end-of-life care for patients with a
          terminal prognosis of six months or less. Medicare&rsquo;s hospice
          benefit covers room and board, nursing, counseling, pain
          management, and bereavement support under a per-diem rate that
          varies by level of care (routine home care, continuous home care,
          inpatient respite, and general inpatient). Hospice agencies tend
          to have the highest margins in home healthcare &mdash; EBITDA
          margins of 12&ndash;20% are common &mdash; but also face
          heightened regulatory scrutiny and complex billing rules.
        </p>

        <h3 className={h3Class}>Home infusion therapy</h3>
        <p>
          Home infusion companies administer IV medications (antibiotics,
          nutrition, chemotherapy, immunoglobulin) in the patient&rsquo;s
          home. This niche requires specialized pharmacy licensure, nursing
          staff trained in infusion, and cold-chain logistics. Reimbursement
          comes from a mix of Medicare Part B, commercial insurance, and
          specialty pharmacy contracts. Home infusion is capital-intensive
          relative to other home health segments but commands higher per-patient
          revenue and is growing rapidly as biologic and specialty drugs
          proliferate.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Why home healthcare is attractive for ETA</h2>
        <p>
          Beyond the macro tailwinds, home healthcare has several structural
          features that make it particularly well-suited for the search
          fund model:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Recurring, government-backed revenue:</strong> A
            Medicare-certified home health agency derives 60&ndash;80% of
            revenue from Medicare and Medicaid &mdash; payers that are slow
            to change but highly predictable. Reimbursement is not tied to
            advertising spend, consumer sentiment, or economic cycles.
          </li>
          <li>
            <strong>Extreme fragmentation:</strong> There are over 11,000
            Medicare-certified home health agencies in the United States.
            The five largest operators account for less than 15% of the
            market. The vast majority of agencies are single-location
            businesses with $2M&ndash;$20M in revenue &mdash; exactly
            the size range where search funds operate.
          </li>
          <li>
            <strong>Aging ownership base:</strong> Many home health agencies
            were founded in the 1990s and 2000s by clinicians who are now
            approaching retirement without a succession plan, creating a
            steady supply of motivated sellers.
          </li>
          <li>
            <strong>Clear{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              buy-and-build
            </Link>{" "}
            opportunity:</strong> Geographic adjacency, service-line
            expansion, and payer diversification provide natural add-on
            acquisition paths that can transform a single agency into a
            regional platform.
          </li>
          <li>
            <strong>Regulatory moat:</strong> Medicare certification,
            state licensure, Certificate of Need (CON) requirements in
            certain states, and accreditation create barriers to entry
            that protect incumbents from easy disruption.
          </li>
        </ul>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Due diligence: what to examine</h2>
        <p>
          Home healthcare acquisitions require diligence that goes well
          beyond standard financial analysis. The items below are specific
          to the sector and should supplement your general{" "}
          <Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">
            healthcare acquisition guide
          </Link>{" "}
          and standard quality-of-earnings review.
        </p>

        <h3 className={h3Class}>Licenses and certifications</h3>
        <ul className={ulClass}>
          <li>
            <strong>State licensure:</strong> Every state requires home
            health agencies to hold a license issued by the state health
            department. Verify that the license is current, that there are
            no pending complaints or investigations, and that the ownership
            change will not trigger re-licensure.
          </li>
          <li>
            <strong>Medicare / Medicaid certification:</strong> If the
            agency bills Medicare, it must be certified by CMS and pass
            periodic surveys. Request the most recent survey results and
            any Plans of Correction (PoCs). A history of deficiencies &mdash;
            especially &ldquo;condition-level&rdquo; deficiencies &mdash;
            is a serious red flag.
          </li>
          <li>
            <strong>Accreditation:</strong> Many agencies hold voluntary
            accreditation from bodies such as the Joint Commission, ACHC,
            or CHAP. Accreditation is often required by commercial payers
            and can substitute for certain state survey requirements.
            Confirm accreditation status and expiration dates.
          </li>
          <li>
            <strong>Certificate of Need (CON):</strong> Approximately 15
            states require a Certificate of Need to operate a home health
            agency. A CON can take 6&ndash;18 months to obtain, making it
            a significant barrier to entry &mdash; and a valuable asset
            if the target already holds one.
          </li>
        </ul>

        <h3 className={h3Class}>Payer mix analysis</h3>
        <p>
          The payer mix is arguably the single most important financial
          variable in a home health acquisition. Break down revenue by
          payer &mdash; Medicare traditional, Medicare Advantage, Medicaid
          fee-for-service, Medicaid managed care, commercial insurance,
          private pay &mdash; and track the trend over 36&nbsp;months.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Medicare Advantage risk:</strong> Medicare Advantage
            (MA) plans now cover more than half of all Medicare
            beneficiaries, and MA plans reimburse home health at rates
            that are 15&ndash;30% below traditional Medicare. A rapid shift
            from traditional Medicare to MA in the agency&rsquo;s payer
            mix will compress margins even if patient volume holds steady.
          </li>
          <li>
            <strong>Medicaid rates:</strong> Medicaid reimbursement varies
            dramatically by state &mdash; from adequate to barely
            break-even. In states with low Medicaid rates, a heavy
            Medicaid mix can make the agency unprofitable at scale.
          </li>
          <li>
            <strong>Commercial and private-pay upside:</strong> Agencies
            with meaningful commercial and private-pay revenue typically
            command higher valuations because these payers reimburse at
            significantly higher rates.
          </li>
        </ul>

        <h3 className={h3Class}>Compliance history</h3>
        <p>
          Request the complete regulatory file: all CMS survey reports,
          state inspection results, Plans of Correction, any Office of
          Inspector General (OIG) investigations, and False Claims Act
          exposure. Home health has been a consistent focus of federal
          fraud enforcement &mdash; the OIG&rsquo;s annual Work Plan
          regularly targets home health billing practices. Red flags
          include:
        </p>
        <ul className={ulClass}>
          <li>
            Unusually high per-episode costs relative to regional averages
          </li>
          <li>
            High utilization of therapy visits (a historical audit trigger)
          </li>
          <li>
            Prior repayment demands or voluntary refunds to CMS
          </li>
          <li>
            Staff turnover in the compliance officer role
          </li>
          <li>
            Lack of a documented compliance program and training records
          </li>
        </ul>

        <h3 className={h3Class}>Staffing ratios and workforce metrics</h3>
        <p>
          Caregiver supply is the binding constraint in home healthcare.
          Evaluate the following workforce metrics during diligence:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Caregiver-to-patient ratio:</strong> Compare the
            agency&rsquo;s staffing ratios to state minimum requirements
            and industry benchmarks. Understaffing limits the ability to
            accept new referrals and drives overtime costs.
          </li>
          <li>
            <strong>Turnover rate:</strong> The national average annual
            turnover for home health aides exceeds 60%. An agency with
            turnover below 40% is performing well; above 80% signals
            serious compensation, culture, or management issues.
          </li>
          <li>
            <strong>Vacancy rate:</strong> How many open positions does
            the agency have, and how long have they been unfilled? A
            chronically high vacancy rate limits growth capacity.
          </li>
          <li>
            <strong>Contract labor dependency:</strong> Agencies that rely
            heavily on staffing agencies for clinical labor face higher
            costs and lower continuity of care. Transitioning from
            contract to employed staff is a common post-acquisition
            margin improvement lever.
          </li>
          <li>
            <strong>Compensation benchmarks:</strong> Compare nurse and
            aide pay rates to local market data from the Bureau of Labor
            Statistics and industry salary surveys. Below-market pay is
            a predictor of elevated turnover.
          </li>
        </ol>

        <h3 className={h3Class}>Patient census and referral trends</h3>
        <p>
          Track the daily patient census (the number of patients under
          active care) over the trailing 24&ndash;36 months. A stable or
          growing census indicates healthy demand and referral relationships.
          A declining census requires immediate investigation &mdash; it
          may reflect lost referral sources, staffing shortages preventing
          new admissions, or competitive pressure. Identify the top 10
          referral sources (hospitals, physician groups, skilled nursing
          facilities) and assess concentration risk. If a single referral
          source accounts for more than 25% of admissions, this represents
          a meaningful{" "}
          <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
            key-person risk
          </Link>{" "}
          that must be addressed in the acquisition structure.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Valuation benchmarks</h2>
        <p>
          Home healthcare valuations vary significantly based on
          certification status, payer mix, geography, and size. The ranges
          below reflect current market conditions:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Medicare-certified agencies:</strong> 6&ndash;10x
            EBITDA is the prevailing range, with the wide spread driven by
            payer mix quality, census trends, survey history, and
            geographic desirability. Agencies in CON states command a
            premium because the certificate itself is a scarce, protected
            asset.
          </li>
          <li>
            <strong>Non-medical / companion care agencies:</strong>
            3&ndash;5x EBITDA. Lower multiples reflect lighter regulatory
            moats, higher caregiver turnover, and greater exposure to
            private-pay pricing pressure.
          </li>
          <li>
            <strong>Hospice agencies:</strong> 8&ndash;14x EBITDA for
            established agencies with strong compliance records. Hospice
            valuations have been bid up by PE-backed consolidators, making
            this segment more competitive for search fund buyers.
          </li>
          <li>
            <strong>Home infusion:</strong> 8&ndash;12x EBITDA, driven by
            specialty pharmacy revenue and high switching costs.
          </li>
        </ul>
        <p>
          For Medicare-certified agencies, an alternative valuation
          approach uses revenue multiples &mdash; typically 0.8&ndash;1.5x
          trailing twelve-month revenue &mdash; which can be useful for
          agencies with temporarily depressed EBITDA due to investment in
          growth or one-time compliance remediation costs. Regardless of
          the multiple methodology, ensure you normalize EBITDA for
          owner compensation, related-party transactions, and any
          above-market lease payments to related entities.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Deal structure considerations</h2>
        <p>
          The legal structure of a home health acquisition has significant
          operational consequences:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Stock vs. asset purchase:</strong> A stock purchase
            preserves the existing Medicare provider number, avoiding a
            gap in billing. An asset purchase may require the buyer to
            obtain a new provider number &mdash; a process that can take
            60&ndash;120 days, during which the agency cannot bill Medicare.
            For this reason, most home health acquisitions are structured
            as stock or membership-interest purchases.
          </li>
          <li>
            <strong>Change of ownership (CHOW):</strong> CMS requires
            notification and approval for any change of ownership. The
            CHOW process includes review of the new owner&rsquo;s
            qualifications, a potential re-survey, and verification that
            the agency meets all Conditions of Participation. Build 60&ndash;90
            days into your closing timeline for CHOW processing.
          </li>
          <li>
            <strong>Escrow and holdbacks:</strong> Given the compliance
            risks inherent in healthcare, it is standard to hold 10&ndash;15%
            of the purchase price in escrow for 12&ndash;18 months to cover
            potential repayment demands, survey deficiencies, or
            undisclosed liabilities.
          </li>
          <li>
            <strong>Seller transition period:</strong> Clinical leadership
            continuity is critical during ownership transitions. Structure
            a 6&ndash;12 month consulting agreement with the seller to
            maintain referral relationships, staff confidence, and
            regulatory compliance during the{" "}
            <Link href="/learn/management-transition" className="text-apple-accent hover:underline">
              management transition
            </Link>{" "}
            period.
          </li>
        </ul>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Post-acquisition growth levers</h2>
        <p>
          Once you have closed the acquisition and stabilized operations,
          there are several proven strategies for growing a home healthcare
          platform. Our{" "}
          <Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">
            revenue growth playbook
          </Link>{" "}
          covers growth strategies in detail; the following are specific
          to home health.
        </p>

        <h3 className={h3Class}>Geographic expansion</h3>
        <p>
          Home health agencies are licensed by state and operate within
          defined service areas. Expanding into adjacent counties or
          metropolitan areas is the most straightforward growth lever.
          In non-CON states, this may require only a branch office
          notification to the state; in CON states, you may need to
          acquire an existing agency in the target geography or apply for
          a new certificate. Add-on acquisitions in neighboring service
          areas are the fastest path to geographic scale and form the
          backbone of a{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            buy-and-build strategy
          </Link>{" "}
          in this sector.
        </p>

        <h3 className={h3Class}>Adding service lines</h3>
        <p>
          An agency that starts with skilled nursing can add physical
          therapy, occupational therapy, speech therapy, and medical
          social work to increase revenue per patient episode. Moving
          from skilled-only to non-medical companion care (or vice versa)
          creates cross-referral opportunities and deepens relationships
          with referral sources. Each new service line increases the
          agency&rsquo;s value proposition to hospitals and physician
          groups that prefer to work with a single provider for all
          home-based services.
        </p>

        <h3 className={h3Class}>Caregiver recruitment and retention</h3>
        <p>
          Workforce capacity is the primary growth constraint in home
          healthcare. Operators who solve the staffing challenge gain
          market share by accepting referrals that competitors must
          decline. Winning strategies include:
        </p>
        <ul className={ulClass}>
          <li>
            Offering above-market wages and benefits &mdash; even a
            $1&ndash;$2/hour premium over competitors can dramatically
            improve recruitment yield
          </li>
          <li>
            Providing consistent, full-time schedules rather than
            unpredictable per-visit assignments
          </li>
          <li>
            Investing in training and career ladders (CNA to LPN to RN
            programs)
          </li>
          <li>
            Building a culture of recognition, mentorship, and clinical
            support
          </li>
          <li>
            Implementing referral bonuses ($500&ndash;$1,000 per successful
            hire) to use existing staff networks
          </li>
          <li>
            Partnering with local nursing schools and CNA training programs
            for a pipeline of new graduates
          </li>
        </ul>

        <h3 className={h3Class}>Technology and EVV compliance</h3>
        <p>
          The 21st Century Cures Act mandates Electronic Visit Verification
          (EVV) for all Medicaid-funded personal care and home health
          services. EVV systems capture the type of service, the
          individual providing the service, the date and time, the
          location, and the individual receiving the service. Beyond
          regulatory compliance, technology adoption is a meaningful
          operational lever:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Point-of-care documentation:</strong> Mobile
            applications that allow clinicians to complete visit notes,
            capture signatures, and submit documentation in real time
            reduce the lag between service delivery and billing,
            improving cash flow and reducing claim denials.
          </li>
          <li>
            <strong>Scheduling optimization:</strong> Route-optimization
            software reduces drive time between visits, increasing the
            number of visits per clinician per day and lowering mileage
            reimbursement costs.
          </li>
          <li>
            <strong>Remote patient monitoring (RPM):</strong> For
            Medicare-certified agencies, RPM devices (blood pressure
            cuffs, pulse oximeters, weight scales) can generate
            additional billable revenue while improving patient outcomes
            and reducing hospital readmissions.
          </li>
          <li>
            <strong>Integrated EMR and billing:</strong> A modern
            electronic medical record system that integrates clinical
            documentation, OASIS assessments, and billing workflows
            reduces errors, speeds up collections, and improves
            compliance audit readiness.
          </li>
        </ul>

        <h3 className={h3Class}>Payer diversification</h3>
        <p>
          Reducing concentration in any single payer is a strategic
          priority. Agencies that are overly dependent on traditional
          Medicare face margin compression as MA enrollment grows.
          Proactively contracting with Medicare Advantage plans,
          commercial insurers, and Medicaid managed care organizations
          &mdash; even at lower per-visit rates &mdash; diversifies
          revenue and reduces regulatory risk. Building a private-pay
          companion care division alongside a Medicare-certified skilled
          agency creates a blended model that is more resilient across
          reimbursement cycles.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Key risks and mitigants</h2>
        <ul className={ulClass}>
          <li>
            <strong>Reimbursement cuts:</strong> CMS adjusts Medicare home
            health rates annually, and the trend over the past decade has
            been downward in real terms. Mitigant: diversify payer mix,
            improve operational efficiency, and grow volume to offset rate
            compression.
          </li>
          <li>
            <strong>Regulatory enforcement:</strong> The OIG and state
            Medicaid Fraud Control Units actively investigate home health
            billing fraud. Mitigant: invest in a strong compliance
            program, conduct regular internal audits, and engage
            healthcare-specialized legal counsel.
          </li>
          <li>
            <strong>Workforce shortages:</strong> The Bureau of Labor
            Statistics projects a shortage of over 400,000 home health
            aides by 2030. Mitigant: compete on culture and compensation,
            invest in retention, and use technology to maximize the
            productivity of existing staff.
          </li>
          <li>
            <strong>Referral source concentration:</strong> Losing a
            major hospital referral partner can cause a sudden drop in
            admissions. Mitigant: diversify referral relationships, build
            direct-to-consumer marketing capabilities, and maintain
            consistently high patient satisfaction scores that make your
            agency the preferred discharge partner.
          </li>
          <li>
            <strong>Key-person dependency:</strong> In many small
            agencies, the founder holds the primary relationships with
            referral sources and clinical staff. Mitigant: structure a
            meaningful{" "}
            <Link href="/learn/management-transition" className="text-apple-accent hover:underline">
              management transition
            </Link>{" "}
            period and build a leadership bench during the first year of
            ownership.
          </li>
        </ul>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Building a regional platform</h2>
        <p>
          The fragmented nature of home healthcare makes it an ideal
          sector for a multi-location platform strategy. The playbook
          is straightforward:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Acquire a well-run platform agency</strong> with
            strong Medicare certification, clean compliance history, and
            a capable clinical leadership team. Pay 7&ndash;9x EBITDA
            for this foundation.
          </li>
          <li>
            <strong>Build centralized back-office functions</strong>
            &mdash; billing, coding, HR, compliance, IT &mdash; that can
            absorb additional volume without proportional headcount
            increases.
          </li>
          <li>
            <strong>Execute tuck-in acquisitions</strong> of smaller
            agencies in adjacent geographies at 4&ndash;6x EBITDA.
            Integrate them onto the platform&rsquo;s EMR, billing
            system, and compliance infrastructure.
          </li>
          <li>
            <strong>Realize synergies</strong> through centralized
            billing (reducing denials and days in AR), group purchasing
            of medical supplies, shared clinical oversight, and
            elimination of duplicate administrative overhead.
          </li>
          <li>
            <strong>Layer in new service lines</strong> (hospice, home
            infusion, private-duty nursing) across the entire network
            simultaneously, using existing referral relationships
            and patient populations.
          </li>
          <li>
            <strong>Exit at platform multiples</strong> of 10&ndash;14x
            EBITDA to a larger strategic buyer, PE firm, or publicly
            traded home health company. The spread between tuck-in
            acquisition multiples (4&ndash;6x) and platform exit
            multiples (10&ndash;14x) is one of the most attractive
            arbitrage opportunities in ETA.
          </li>
        </ol>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Quality metrics that matter</h2>
        <p>
          CMS publishes Home Health Star Ratings based on quality
          measures that directly affect referral volume and payer
          relationships. The metrics that matter most include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Acute care hospitalization rate:</strong> The
            percentage of patients who are hospitalized during a home
            health episode. Lower is better; top-quartile agencies
            achieve rates below 15%.
          </li>
          <li>
            <strong>Improvement in ambulation:</strong> A core functional
            outcome measure that affects Star Ratings.
          </li>
          <li>
            <strong>Timely initiation of care:</strong> The percentage
            of patients who receive their first skilled visit within
            48&nbsp;hours of referral. Hospitals strongly prefer agencies
            that demonstrate consistent, timely response.
          </li>
          <li>
            <strong>HHCAHPS patient satisfaction:</strong> The
            standardized patient experience survey for home health.
            Agencies with 4&ndash;5 Star Ratings on patient satisfaction
            have a significant competitive advantage in referral
            development.
          </li>
          <li>
            <strong>OASIS accuracy:</strong> The Outcome and Assessment
            Information Set is the clinical assessment tool used to
            determine Medicare reimbursement. Accurate OASIS scoring
            ensures appropriate reimbursement and reduces audit risk.
          </li>
        </ul>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>The bottom line</h2>
        <p>
          Home healthcare sits at the intersection of an unstoppable
          demographic wave and a healthcare system that is actively
          shifting care into the home. For search fund entrepreneurs,
          the opportunity is substantial: acquire a well-run,
          Medicare-certified agency in a fragmented market, stabilize
          operations, and build a regional platform through disciplined
          add-on acquisitions and service-line expansion. The regulatory
          complexity that deters less-prepared buyers is precisely what
          protects your investment and creates a durable competitive
          moat. Success requires assembling the right team &mdash;
          healthcare-specialized legal counsel, an experienced Director
          of Nursing, and a compliance officer who treats regulation as
          a competitive advantage rather than a burden. Get the
          fundamentals right, and home healthcare can deliver the rare
          combination of strong cash flow, downside protection, and
          meaningful long-term growth that every search fund investor
          seeks.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What is the difference between skilled home health and non-medical home care?</h3>
        <p>
          Skilled home health agencies provide clinical services &mdash;
          nursing, physical therapy, occupational therapy, and speech-language
          pathology &mdash; under a physician&rsquo;s plan of care. They bill
          Medicare under the Patient-Driven Groupings Model (PDGM) at
          approximately $2,000&ndash;$3,500 per episode and require Medicare
          certification. Non-medical home care agencies provide assistance with
          activities of daily living (bathing, dressing, meal preparation,
          companionship) and are typically paid out of pocket, through
          long-term care insurance, or via Medicaid waivers. Skilled agencies
          command higher margins and stronger valuations (6&ndash;10x EBITDA vs.
          3&ndash;5x) but face heavier regulatory requirements. Many acquirers
          build platforms that combine both service lines to diversify payer
          mix and create cross-referral opportunities.
        </p>

        <h3 className={h3Class}>How does Medicare Advantage affect home health valuations?</h3>
        <p>
          Medicare Advantage (MA) plans now cover more than half of all Medicare
          beneficiaries, and they reimburse home health at rates 15&ndash;30%
          below traditional Medicare. An agency experiencing a rapid shift from
          traditional Medicare to MA in its payer mix will see margin compression
          even if patient volume holds steady. During{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link>,
          break down revenue by payer &mdash; traditional Medicare, MA, Medicaid,
          commercial, and private pay &mdash; and track the trend over
          36 months. Agencies with diversified payer mixes and strong commercial
          or private-pay revenue command higher valuations because they are less
          exposed to any single reimbursement source.
        </p>

        <h3 className={h3Class}>What are the biggest risks in acquiring a home healthcare agency?</h3>
        <p>
          The primary risks are reimbursement cuts, regulatory enforcement,
          workforce shortages, and referral source concentration. CMS adjusts
          Medicare home health rates annually with a generally downward real
          trend. The OIG actively investigates billing fraud in home health,
          and deficient surveys can trigger provider enrollment holds. The
          Bureau of Labor Statistics projects a shortage of over 400,000 home
          health aides by 2030, making caregiver recruitment the binding
          growth constraint. If a single hospital referral source accounts
          for more than 25% of admissions, losing that relationship can cause
          a sudden census decline. Mitigate through payer diversification,
          strong compliance programs, competitive compensation, and broad
          referral network development.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>
            <strong>Centers for Medicare &amp; Medicaid Services (CMS)</strong> &mdash; &ldquo;Medicare Home Health Data &amp; Patient-Driven Groupings Model (PDGM) Overview,&rdquo; 2024.
          </li>
          <li>
            <strong>IBISWorld</strong> &mdash; &ldquo;Home Care Providers Industry in the US &mdash; Market Research Report,&rdquo; 2024.
          </li>
          <li>
            <strong>Bureau of Labor Statistics</strong> &mdash; &ldquo;Occupational Outlook Handbook: Home Health and Personal Care Aides,&rdquo; 2024.
          </li>
        </ul>
      </div>
    </article>
  );
}
