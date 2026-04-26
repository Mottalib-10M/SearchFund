import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function IndustrySelectionFrameworkArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Industry Selection Framework: A Scoring System for Search Fund Acquisitions
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          The industry you choose determines roughly 70% of your search fund&rsquo;s
          outcome before you ever sign a letter of intent. According to the{" "}
          <strong>2024 Stanford Search Fund Study</strong>, which tracked 681 funds
          formed since 1984, healthcare and business services together accounted for
          half of all acquisitions, and tech-enabled services produced some of
          the highest IRRs. Yet most first-time searchers pick their industry based
          on gut feel rather than a structured framework. This article gives you a
          six-factor scoring model you can apply to any vertical, then benchmarks
          five specific industries against it so you can prioritize your search with
          real data instead of intuition.
        </p>

        {/* ── Section 1 ── */}
        <h2 className={h2Class}>Why Industry Selection Outweighs Deal Selection</h2>
        <p>
          The 2024 Stanford study reported an aggregate pre-tax IRR of 35.1% and a
          4.5x return on invested capital across all search funds through December
          2023. But those returns were not evenly distributed. Nearly 7 in 10
          acquired companies generated positive returns, meaning roughly 30% did
          not, and industry mismatch was a recurring factor in
          underperformance. The IESE 2024 International Search Fund study
          highlighted similar patterns outside North America: funds that targeted
          fragmented, service-oriented industries with recurring revenue
          consistently outperformed those in cyclical or capital-heavy sectors.
        </p>
        <p>
          Choosing the wrong industry creates problems that even excellent
          operators cannot fix: thin{" "}
          <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
            adjusted EBITDA
          </Link>{" "}
          margins leave no room for debt service, low fragmentation means fewer
          targets and higher multiples, and heavy regulation can paralyze a
          first-time CEO. A structured scoring framework forces you to confront
          these constraints before you invest 18 months searching.
        </p>

        {/* ── Section 2 ── */}
        <h2 className={h2Class}>The Six-Factor Industry Scoring Framework</h2>
        <p>
          Score each factor on a 1-5 scale (1 = worst, 5 = best). A maximum
          score is 30. Industries scoring 22 or above are strong candidates;
          15-21 require a specific thesis to justify; below 15, walk away.
        </p>

        <h3 className={h3Class}>Factor 1: Market Fragmentation (Weight: High)</h3>
        <p>
          Fragmented markets mean more{" "}
          <Link href="/learn/good-acquisition-target" className="text-apple-accent hover:underline">
            acquisition targets
          </Link>, less buyer competition, and clearer roll-up paths. The U.S. HVAC
          services market, for example, has thousands of independent contractors in
          every state, with the top five players, Johnson Controls, Carrier,
          Trane Technologies, Comfort Systems USA, and EMCOR Group, holding
          only about 35% combined market share according to PKF O&rsquo;Connor
          Davies&rsquo; 2024 industry update. In pest control, the picture is
          similar: the top four firms (Rollins, Rentokil, Anticimex, ABC Home &amp;
          Commercial) account for roughly 28% of industry sales per Capstone
          Partners&rsquo; 2024 sector update, leaving 78% of the market in private
          hands.
        </p>
        <p>
          <strong>Score 5:</strong> No single player holds more than 5% share (HVAC
          residential, landscaping, pest control).{" "}
          <strong>Score 1:</strong> Top 5 firms control 50%+ of the market.
        </p>

        <h3 className={h3Class}>Factor 2: Recurring Revenue Percentage (Weight: High)</h3>
        <p>
          Recurring revenue compresses risk and inflates multiples. Buyers
          routinely pay 1-2x higher{" "}
          <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
            EBITDA multiples
          </Link>{" "}
          for businesses with contractual or subscription revenue versus
          project-based models. Rollins, the largest publicly traded pest control
          company, derives more than 80% of total revenue from recurring and
          ancillary services, according to its 2025 earnings report. Industry
          benchmarks from Breakwater M&amp;A suggest that pest control companies
          with 65%+ recurring revenue build a solid valuation foundation, while
          those below 50% are penalized significantly.
        </p>
        <p>
          <strong>Score 5:</strong> 80%+ contractual recurring revenue (pest
          control maintenance plans, managed IT, insurance renewals).{" "}
          <strong>Score 1:</strong> Purely project-based or transactional (general
          construction, event planning).
        </p>

        <h3 className={h3Class}>
          Factor 3: Owner-Operator Transition Ease (Weight: Medium-High)
        </h3>
        <p>
          Search fund CEOs are, by definition, first-time operators. Industries
          where the departing owner&rsquo;s personal relationships or technical
          certifications are the business create enormous transition risk. The IESE
          Insight study on search fund failures identified{" "}
          &ldquo;seller interference&rdquo; and &ldquo;team culture mismatch&rdquo;
          as two of the top reasons acquisitions underperform. Industries with
          process-driven operations, documented SOPs, and mid-management layers
          transfer far more smoothly than those built around a single
          rainmaker.
        </p>
        <p>
          <strong>Score 5:</strong> Systematic operations, minimal owner dependence,
          existing middle management (multi-location HVAC, property management).{" "}
          <strong>Score 1:</strong> Owner is the primary revenue generator
          (solo-practitioner consulting, owner-dentist practice with no associates).
        </p>

        <h3 className={h3Class}>Factor 4: Regulatory Barriers (Weight: Medium)</h3>
        <p>
          Regulation cuts both ways. Light regulation means easier entry but also
          more competition. Heavy regulation, HIPAA in healthcare, state
          dental board licensing, SEC compliance in financial services, creates
          moats but adds operational complexity that can overwhelm a first-time
          CEO. The sweet spot is moderate regulation: enough to deter casual
          entrants, not so much that compliance costs consume your margin. Pest
          control licensing, for instance, varies by state but is straightforward
          compared to opening a dental practice, where each state requires specific
          corporate practice of dentistry rules.
        </p>
        <p>
          <strong>Score 5:</strong> Moderate barriers that protect incumbents
          without demanding specialist compliance teams.{" "}
          <strong>Score 1:</strong> Extremely heavy regulatory burden requiring
          dedicated legal or compliance staff.
        </p>

        <h3 className={h3Class}>Factor 5: Technology Disruption Risk (Weight: Medium)</h3>
        <p>
          Stable industries reward steady operators; disrupted industries punish
          slow adapters. Vertical SaaS can be both the disruptor and the
          disrupted, a B2B SaaS product serving a niche may have deep moats,
          but it also faces platform risk if a larger player (Salesforce, HubSpot)
          moves into the niche. By contrast, pest control and HVAC face minimal
          technology displacement risk: software can make these businesses more
          efficient (routing optimization, CRM), but no app replaces a technician
          crawling under a house. For more on tech-enabled acquisitions, see our
          guide to{" "}
          <Link href="/learn/vertical-saas-acquisition" className="text-apple-accent hover:underline">
            vertical SaaS acquisitions
          </Link>.
        </p>
        <p>
          <strong>Score 5:</strong> Service delivered physically; technology
          enhances but cannot replace (HVAC, plumbing, pest control).{" "}
          <strong>Score 1:</strong> Core product easily replicated by larger tech
          platforms or AI.
        </p>

        <h3 className={h3Class}>Factor 6: EBITDA Multiples and Entry Valuation (Weight: Medium)</h3>
        <p>
          Your entry multiple directly determines your return ceiling. According to
          First Page Sage&rsquo;s 2025 valuation reports, midsize HVAC companies
          currently average around 8x EBITDA (up 20% from pre-pandemic levels).
          Residential pest control companies in the $5-10M EBITDA range trade
          at 8.3x. Dental practices range widely: add-on acquisitions at
          5-8x EBITDA, while premium multi-location platforms command
          9-12x per Large Practice Sales&rsquo; 2024 analysis. Property
          management firms are cheaper at 3.8-4.2x EBITDA on average,
          according to Peak Business Valuation. Small SaaS businesses ($1-5M
          ARR) trade at 3-5x revenue for low-growth and 7-10x revenue
          for high-growth, per Breakwater M&amp;A&rsquo;s 2026 report.
        </p>
        <p>
          <strong>Score 5:</strong> Entry multiples of 3-5x EBITDA with clear
          paths to exit at 7-10x (property management, niche services).{" "}
          <strong>Score 1:</strong> Entry above 10x EBITDA with limited multiple
          expansion opportunity.
        </p>

        {/* ── Section 3 ── */}
        <h2 className={h2Class}>
          Scoring Five Industries: HVAC, Pest Control, Dental, SaaS, and Property Management
        </h2>
        <p>
          Below is a side-by-side application of the six-factor framework. Each
          score reflects the data cited above, not subjective opinion. Use this as
          a starting template, then adjust weights based on your own risk
          tolerance, operating background, and{" "}
          <Link href="/learn/what-size-business-buy" className="text-apple-accent hover:underline">
            target business size
          </Link>.
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-apple-gray-200">
                <th className="text-left py-2 pr-4 font-semibold">Factor</th>
                <th className="text-center py-2 px-3 font-semibold">HVAC</th>
                <th className="text-center py-2 px-3 font-semibold">Pest Control</th>
                <th className="text-center py-2 px-3 font-semibold">Dental</th>
                <th className="text-center py-2 px-3 font-semibold">SaaS</th>
                <th className="text-center py-2 px-3 font-semibold">Property Mgmt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">Fragmentation</td>
                <td className="text-center py-2 px-3">5</td>
                <td className="text-center py-2 px-3">5</td>
                <td className="text-center py-2 px-3">4</td>
                <td className="text-center py-2 px-3">4</td>
                <td className="text-center py-2 px-3">5</td>
              </tr>
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">Recurring Revenue</td>
                <td className="text-center py-2 px-3">3</td>
                <td className="text-center py-2 px-3">5</td>
                <td className="text-center py-2 px-3">4</td>
                <td className="text-center py-2 px-3">5</td>
                <td className="text-center py-2 px-3">5</td>
              </tr>
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">Owner Transition Ease</td>
                <td className="text-center py-2 px-3">4</td>
                <td className="text-center py-2 px-3">4</td>
                <td className="text-center py-2 px-3">2</td>
                <td className="text-center py-2 px-3">3</td>
                <td className="text-center py-2 px-3">4</td>
              </tr>
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">Regulatory Barriers</td>
                <td className="text-center py-2 px-3">4</td>
                <td className="text-center py-2 px-3">4</td>
                <td className="text-center py-2 px-3">2</td>
                <td className="text-center py-2 px-3">4</td>
                <td className="text-center py-2 px-3">4</td>
              </tr>
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">Tech Disruption Risk</td>
                <td className="text-center py-2 px-3">5</td>
                <td className="text-center py-2 px-3">5</td>
                <td className="text-center py-2 px-3">4</td>
                <td className="text-center py-2 px-3">2</td>
                <td className="text-center py-2 px-3">4</td>
              </tr>
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">Entry Valuation</td>
                <td className="text-center py-2 px-3">3</td>
                <td className="text-center py-2 px-3">3</td>
                <td className="text-center py-2 px-3">3</td>
                <td className="text-center py-2 px-3">3</td>
                <td className="text-center py-2 px-3">5</td>
              </tr>
              <tr className="border-t-2 border-apple-gray-300 font-semibold">
                <td className="py-2 pr-4">Total (out of 30)</td>
                <td className="text-center py-2 px-3">24</td>
                <td className="text-center py-2 px-3">26</td>
                <td className="text-center py-2 px-3">19</td>
                <td className="text-center py-2 px-3">21</td>
                <td className="text-center py-2 px-3">27</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Section 4 ── */}
        <h2 className={h2Class}>Industry-by-Industry Breakdown</h2>

        <h3 className={h3Class}>HVAC (Score: 24/30)</h3>
        <p>
          HVAC is a proven search fund vertical with strong fragmentation and
          minimal disruption risk. The U.S. HVAC services market features thousands
          of independent contractors per state, and residential all-purpose
          companies command the highest multiples at 6.3-10.8x EBITDA per
          First Page Sage&rsquo;s Q1 2025 data. The weakness is recurring revenue:
          while maintenance contracts are growing, many HVAC businesses still rely
          on break-fix and installation revenue, which is inherently lumpy. The
          best acquisition targets have already built a service-agreement base
          covering 40%+ of revenue. Baby boomer owners (average age 58+) create a
          deep pool of motivated sellers, and PE-backed platforms like Apex Service
          Partners and Wrench Group provide clear exit paths. For a detailed
          playbook, see our guide to{" "}
          <Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">
            recurring revenue businesses
          </Link>.
        </p>

        <h3 className={h3Class}>Pest Control (Score: 26/30)</h3>
        <p>
          Pest control is one of the strongest verticals for acquisition
          entrepreneurs. Rollins (parent of Orkin) derives 80%+ of revenue from
          recurring services, and the broader industry projects an 8.8% CAGR
          through the mid-2020s with a path to exceeding $15 billion in U.S.
          revenue by 2030, per Capstone Partners. Residential companies with strong
          contract bases trade at 8.3x EBITDA in the $5-10M range, while
          smaller firms ($500K-1M EBITDA) can be acquired at 5.7x, a
          significant arbitrage opportunity for a roll-up strategy. Customer
          retention rates for top performers hit 85%+ on the residential side and
          88-90% commercial, per industry benchmarks. State licensing
          requirements are manageable (typically a certified applicator on staff),
          and the service is inherently recession-resistant: pests do not disappear
          during downturns.
        </p>

        <h3 className={h3Class}>Dental Practices (Score: 19/30)</h3>
        <p>
          Dental is attractive on paper, recurring patient visits, aging
          practitioners (33% of dentist-owners plan to retire within six years per
          the ADA), and proven DSO roll-up models. But the challenges are
          significant for a search fund operator. Only about 16-22% of U.S.
          dentists are currently affiliated with a DSO, meaning the market is
          fragmented but also heavily regulated at the state level through corporate
          practice of dentistry rules. Owner transition is the biggest hurdle:
          solo-practitioner dental offices derive the majority of their revenue from
          the owner-dentist&rsquo;s clinical work, and patients often leave when
          the dentist does. Premium multi-location platforms can command 9-12x
          EBITDA, but add-ons are more reasonably priced at 5-8x. Unless you
          have healthcare operating experience or plan to hire an experienced
          integrator, dental scores below the threshold for most first-time
          searchers.
        </p>

        <h3 className={h3Class}>Vertical SaaS (Score: 21/30)</h3>
        <p>
          The 2024 Stanford study noted that software companies represented roughly
          22% of all search fund acquisitions, making it the third-most-targeted
          sector. Vertical SaaS offers high recurring revenue (typically 90%+ for
          subscription models) and excellent margins (often 20-40% EBITDA for
          mature products). The challenge is twofold: entry valuations are steep
          (low-growth SaaS at $1-5M ARR trades at 3-5x revenue, which
          translates to 15-25x EBITDA for a 20%-margin business), and
          technology disruption risk is real. A niche product serving, say, yoga
          studios or dental labs may have strong retention today but faces platform
          risk if a horizontal player enters the niche. Searchers targeting SaaS
          should bring technical fluency and focus on products with high switching
          costs and deep workflow integration. For more on this vertical, see
          our{" "}
          <Link href="/learn/vertical-saas-acquisition" className="text-apple-accent hover:underline">
            vertical SaaS acquisition guide
          </Link>.
        </p>

        <h3 className={h3Class}>Property Management (Score: 27/30)</h3>
        <p>
          Property management is arguably the most underappreciated search fund
          vertical. Entry multiples are the lowest of any service business at
          3.8-4.2x EBITDA on average, per Peak Business Valuation, while
          revenue is almost entirely recurring (monthly management fees, lease
          renewals, ancillary service charges). The industry is deeply fragmented,
          with thousands of small operators managing 100-500 doors.
          Technology enhances but does not replace the service, property
          management software (AppFolio, Buildium) improves efficiency, but tenants
          still need a person to call when a pipe bursts. The primary risk is
          margin: property management companies often operate on 15-25%
          EBITDA margins, and client churn can spike if a key landlord sells their
          portfolio. The opportunity lies in building density within a metro,
          adding ancillary services (maintenance coordination, tenant screening),
          and selling to a regional consolidator at 5-7x. For a deeper dive,
          see our{" "}
          <Link href="/learn/property-management-acquisition" className="text-apple-accent hover:underline">
            property management acquisition playbook
          </Link>.
        </p>

        {/* ── Section 5 ── */}
        <h2 className={h2Class}>How to Customize the Framework for Your Search</h2>
        <p>
          The six-factor model is a starting point, not a final verdict. Adjust it
          based on three personal variables:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Your operating background.</strong> A searcher with 5 years at
            a SaaS company should weight technology disruption risk lower for
            software targets because they can manage that risk. A former management
            consultant with no industry expertise should weight owner-transition
            ease higher.
          </li>
          <li>
            <strong>Your financing strategy.</strong> If you plan to use{" "}
            <Link href="/learn/sba-7a-loans" className="text-apple-accent hover:underline">
              SBA 7(a) loans
            </Link>, you need to target industries with stable cash flows and
            tangible assets that satisfy lender requirements. SBA financing
            effectively caps your entry multiple at 4-6x EBITDA for most
            service businesses, which rules out premium SaaS and dental platform
            deals but aligns well with HVAC, pest control, and property management.
          </li>
          <li>
            <strong>Your exit timeline.</strong> If you plan a 5-7 year hold
            with a roll-up strategy, industries with active PE platforms (HVAC,
            pest control, dental DSOs, MSPs) provide clearer exit paths. If
            you plan to hold indefinitely, margin and cash-flow stability matter
            more than exit optionality.
          </li>
        </ol>

        {/* ── Section 6 ── */}
        <h2 className={h2Class}>
          The Stanford Data: What Actually Produces the Best Returns
        </h2>
        <p>
          While the 2024 Stanford study does not publish IRR by industry in
          granular detail, several patterns emerge from the aggregate data across
          681 funds:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Healthcare and business services</strong> have accounted for
            50% of all acquisitions since 2014, signaling that experienced
            searchers and their investors consistently view these sectors as the
            highest-probability targets.
          </li>
          <li>
            <strong>Tech-enabled services</strong> (a category that includes
            vertical SaaS, MSPs, and software-augmented service businesses) have
            produced some of the highest IRRs, though with wider variance, the
            upside is large, but so is the downside.
          </li>
          <li>
            <strong>The 2017-2020 cohort</strong> has exceeded 50% IRR after
            44% of funds in that group have exited, suggesting that the industries
            targeted during that period (which skewed toward services and
            technology) were particularly well-chosen.
          </li>
          <li>
            <strong>The median purchase price</strong> declined to $14.4 million in
            the 2024 study, indicating a shift toward smaller, more affordable
            targets, exactly the size range where fragmented service
            industries offer the deepest deal flow.
          </li>
        </ul>
        <p>
          The takeaway is not that one industry guarantees success. It is that
          industries scoring well on fragmentation, recurring revenue, and
          transition ease produce the most consistent positive outcomes. For a
          broader perspective on the evolution of the asset class, see our{" "}
          <Link href="/learn/search-fund-history" className="text-apple-accent hover:underline">
            history of search funds
          </Link>.
        </p>

        {/* ── Section 7 ── */}
        <h2 className={h2Class}>Applying the Framework: A Step-by-Step Process</h2>
        <ol className={olClass}>
          <li>
            <strong>List 8-12 candidate industries</strong> based on your
            background, geographic focus, and deal-size target. Cast a wide net
            initially.
          </li>
          <li>
            <strong>Score each industry</strong> against the six factors using
            public data: IBISWorld for fragmentation, industry association reports
            for recurring revenue percentages, First Page Sage or BizBuySell for
            current multiples.
          </li>
          <li>
            <strong>Eliminate anything below 15.</strong> Industries that score
            poorly on multiple factors will drain your search time without producing
            viable deals.
          </li>
          <li>
            <strong>Deep-dive the top 3.</strong> Conduct{" "}
            <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
              financial due diligence
            </Link>{" "}
            on the industry itself: interview 5-10 operators, attend an
            industry trade show, talk to brokers who specialize in the space.
          </li>
          <li>
            <strong>Commit to 1-2 industries</strong> for your active search.
            Developing true industry expertise, knowing the metrics, the
            players, and the lingo, is what generates{" "}
            <Link href="/learn/proprietary-deal-flow" className="text-apple-accent hover:underline">
              proprietary deal flow
            </Link>{" "}
            and differentiates you from other buyers.
          </li>
        </ol>

        {/* ── FAQ Section ── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          Should I focus on one industry or search across multiple verticals?
        </h3>
        <p>
          Focused searchers find better deals. The Hadley Capital team has noted
          that developing industry expertise helps in two domains: quickly
          evaluating acquisition candidates and differentiating yourself in
          competitive processes. That said, most successful searchers narrow from
          2-3 industries to one over the first 6 months of their search,
          rather than committing on day one. Start with your top-scoring
          industries and let early deal flow and operator conversations guide your
          final commitment.
        </p>

        <h3 className={h3Class}>
          What if a high-scoring industry has too much PE competition?
        </h3>
        <p>
          PE activity is a double-edged sword. In pest control, for example,
          Rollins, Rentokil, and Anticimex have driven up platform-level
          valuations, but they have also created a predictable exit market for
          smaller operators who build to $2-5M EBITDA. The key is to buy at
          the small end (sub-$2M EBITDA) where PE firms rarely compete directly,
          then build to a size that attracts their attention. Search funds that
          acquire at 5-6x and sell to a PE platform at 8-10x capture
          significant multiple arbitrage. For sourcing strategies that avoid
          head-to-head PE competition, see our guide to{" "}
          <Link href="/learn/working-with-brokers" className="text-apple-accent hover:underline">
            working with business brokers
          </Link>.
        </p>

        <h3 className={h3Class}>
          How much does geography matter relative to industry selection?
        </h3>
        <p>
          Geography is the second filter after industry. A pest control company in
          Phoenix operates very differently from one in Minneapolis (seasonality,
          pest types, competitive density). Within your chosen industry, focus on
          metro areas with population growth, limited seasonal disruption, and a
          healthy density of small operators. The 2024 Stanford study found a
          record 94 core search funds launched in 2023, which means geographic
          concentration is increasing in popular markets like Texas, Florida, and
          the Southeast. Less saturated geographies can offer better deal terms
          even in competitive industries.
        </p>

        <h3 className={h3Class}>
          Can this framework be applied to international search funds?
        </h3>
        <p>
          Yes, with adjustments. The IESE 2024 International Search Fund study
          confirmed that fragmentation and recurring revenue remain the two
          strongest predictors of positive outcomes across geographies. However,
          regulatory barriers vary enormously by country (labor law in France,
          corporate structure requirements in Brazil, licensing in the UK), so
          Factor 4 needs to be scored against local conditions. Entry multiples
          also differ: service businesses in Southern Europe and Latin America
          often trade at 3-5x EBITDA versus 5-8x in the U.S. for
          comparable quality, which can offset higher operational complexity.
        </p>

        <h3 className={h3Class}>
          What is the single most important factor in the framework?
        </h3>
        <p>
          If forced to choose one factor, recurring revenue percentage is the
          strongest predictor of both acquisition success and exit value. A
          business with 80%+ recurring revenue is easier to finance (lenders love
          predictable cash flow), easier to operate (you are not starting from
          zero revenue each month), and easier to sell (buyers pay premium
          multiples). When the 2024 Stanford study highlights that healthcare and
          business services dominate search fund acquisitions, the common thread
          is contractual or habitual recurring relationships. Start your scoring
          there, and let the other factors serve as tiebreakers.
        </p>
      </div>
    </article>
  );
}
