import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function LPGuideSearchFundDDArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        The LP&rsquo;s Guide to Search Fund Due Diligence
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          Search fund due diligence happens in two distinct phases, and
          most LPs only do one of them well. During the search capital
          raise, you are underwriting a person&mdash;their judgment,
          temperament, and operating potential&mdash;with no company to
          analyze. During the acquisition raise, you shift to evaluating
          a specific business, a purchase price, and a capital structure.
          Getting either phase wrong destroys returns. The Stanford 2024
          Search Fund Study shows that the top-quartile funds generate
          5.5x or more on invested capital, while roughly one-third of
          all search fund investments result in partial or total loss.
          The difference between those outcomes hinges largely on the
          quality of LP diligence at both stages.
        </p>
        <p>
          This guide covers a repeatable framework for each
          phase&mdash;what to evaluate, which questions to ask, and where
          experienced LPs consistently see new investors make mistakes.
          If you are still assessing whether the asset class fits your
          portfolio, start with{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">
            why invest in search funds
          </Link>{" "}
          before reading further.
        </p>

        {/* ── H2 1: Why Search Fund DD Is Different ── */}
        <h2 className={h2Class}>
          Why search fund diligence is structurally different
        </h2>
        <p>
          Traditional private equity diligence centers on a target
          company&rsquo;s financial statements, competitive position, and
          management team. Search fund diligence inverts that order.
          At the search capital stage, there is no company. The only
          asset is the searcher. At the acquisition stage, you evaluate
          the company&mdash;but through the lens of whether this
          particular operator can run it successfully.
        </p>
        <p>
          This creates three structural features that LPs must
          internalize:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Two-stage capital commitment.</strong> Search
            capital checks are typically $25K&ndash;$100K per LP.
            If the searcher identifies a target, acquisition capital
            checks run $100K&ndash;$500K or more. You face a binary
            decision at each stage, and the information set changes
            dramatically between them.
          </li>
          <li>
            <strong>Extreme illiquidity.</strong> There is no secondary
            market for search fund LP interests. Capital is locked for
            7&ndash;10 years. This means your diligence must price in
            the full duration risk upfront. See{" "}
            <Link href="/learn/risk-factors-search-fund" className="text-apple-accent hover:underline">
              risk factors in search fund investing
            </Link>{" "}
            for a complete taxonomy.
          </li>
          <li>
            <strong>Portfolio math matters.</strong> With a ~33% loss
            rate across the asset class, no single fund should represent
            a make-or-break position. Institutional search fund LPs
            typically hold 15&ndash;30 funds to capture enough top-quartile
            outcomes. Our{" "}
            <Link href="/learn/portfolio-construction-search-fund" className="text-apple-accent hover:underline">
              portfolio construction guide
            </Link>{" "}
            covers the math in detail.
          </li>
        </ul>

        {/* ── H2 2: Evaluating the Searcher ── */}
        <h2 className={h2Class}>
          Evaluating the searcher: the $25K bet on a person
        </h2>
        <p>
          The searcher is the investment. Everything else&mdash;the
          eventual target, the price paid, the operating plan&mdash;flows
          from this person&rsquo;s judgment. Experienced LPs evaluate
          searchers across five dimensions, each carrying roughly equal
          weight.
        </p>

        <h3 className={h3Class}>Professional background and operating aptitude</h3>
        <p>
          The ideal searcher has 3&ndash;7 years of progressively
          responsible work experience. Consulting, banking, military
          service, and operational roles all produce strong candidates,
          though for different reasons. Consultants bring analytical
          rigor and pattern recognition. Former military officers bring
          leadership under stress. Operations managers bring ground-level
          understanding of how businesses actually run. The Stanford 2024
          data shows no single background dominates top-quartile
          outcomes&mdash;what matters is evidence of increasing
          responsibility and delivering results without close supervision.
        </p>
        <p>
          An MBA from a program with an established ETA track (Stanford,
          HBS, Wharton, IESE, Booth) is positively correlated but not
          sufficient. The MBA signals analytical training and provides a
          built-in investor network, but it does not guarantee the
          temperament or resilience required to search for 18&ndash;24
          months and then operate a company. Our full framework is
          in{" "}
          <Link href="/learn/evaluate-searcher" className="text-apple-accent hover:underline">
            how to evaluate a searcher
          </Link>.
        </p>

        <h3 className={h3Class}>Temperament and coachability</h3>
        <p>
          The searcher will become CEO of a small company with 20&ndash;200
          employees. They will face cash crunches, employee departures,
          customer losses, and operational crises&mdash;often in the
          first year. You are looking for what Pacific Lake Partners
          calls &ldquo;humble confidence&rdquo;: enough conviction to
          make decisions under uncertainty, paired with enough
          self-awareness to seek help when a situation exceeds their
          experience.
        </p>
        <p>
          Red flags include searchers who dismiss investor input, who
          frame every challenge as someone else&rsquo;s fault, or who
          cannot articulate their own weaknesses. Ask directly:
          &ldquo;Tell me about a time you received feedback you
          disagreed with. What did you do?&rdquo; The answer reveals
          more than any financial model.
        </p>

        <h3 className={h3Class}>Industry thesis and search plan specificity</h3>
        <p>
          The best searchers arrive with a defined acquisition thesis:
          target industries, company size ($1M&ndash;$5M EBITDA is the
          sweet spot for traditional search funds), geographic
          willingness, and deal-breaker criteria. A searcher who says
          &ldquo;I&rsquo;m open to anything&rdquo; has not done the
          pre-work.
        </p>
        <p>
          Evaluate the search plan for balance across three sourcing
          channels: intermediaries/brokers, proprietary direct outreach,
          and online deal platforms. Over-reliance on any single channel
          creates deal flow risk. The plan should include monthly KPI
          targets&mdash;companies contacted, NDAs signed, LOIs
          submitted&mdash;and a realistic 18&ndash;24 month timeline
          with budget burn projections.
        </p>

        {/* ── H2 3: PPM Analysis ── */}
        <h2 className={h2Class}>
          PPM analysis: reading between the lines
        </h2>
        <p>
          The Private Placement Memorandum is the searcher&rsquo;s
          formal fundraising document. Experienced LPs read it not just
          for content but for quality of thought. A strong{" "}
          <Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">
            PPM
          </Link>{" "}
          demonstrates analytical rigor, realistic self-assessment, and
          clear communication&mdash;three traits you need in a future CEO.
        </p>
        <p>
          Key sections to scrutinize:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Economics and step-up equity.</strong> The standard
            searcher equity allocation is 20&ndash;25%, typically
            vesting over 3&ndash;5 years. Watch for non-standard
            structures that either over-compensate the searcher
            (reducing LP returns) or under-compensate them (reducing
            motivation). Review the{" "}
            <Link href="/learn/search-fund-term-sheet" className="text-apple-accent hover:underline">
              search fund term sheet
            </Link>{" "}
            norms before forming opinions on specific deal terms.
          </li>
          <li>
            <strong>Timeline and budget.</strong> A search budget of
            $400K&ndash;$600K covering 24 months is standard for a
            solo searcher in the US. Significantly lower budgets risk
            premature search termination; significantly higher budgets
            suggest either an expensive geography or poor financial
            discipline.
          </li>
          <li>
            <strong>Investor rights.</strong> Pro-rata follow-on rights,
            board representation, information rights, and protective
            provisions. Missing or weak investor protections are a
            dealbreaker. Pay particular attention to your right to
            participate in the acquisition equity raise and to{" "}
            <Link href="/learn/co-investment-search-fund" className="text-apple-accent hover:underline">
              co-invest
            </Link>{" "}
            at that stage.
          </li>
          <li>
            <strong>Risk factors disclosure.</strong> Ironically, the
            quality of the risk section tells you a lot about the
            searcher. A generic, copy-pasted risk section signals
            laziness. A thoughtful risk section that identifies
            searcher-specific risks (e.g., &ldquo;I have no prior P&amp;L
            management experience&rdquo;) signals maturity and honesty.
          </li>
        </ul>

        {/* ── H2 4: Reference Checks ── */}
        <h2 className={h2Class}>
          Reference checks: the highest-ROI hour you&rsquo;ll spend
        </h2>
        <p>
          Most LPs under-invest in reference calls. Six calls is a
          minimum; eight to ten is better. The critical insight is
          that reference calls are not about confirming what the
          searcher told you&mdash;they are about surfacing information
          the searcher cannot or will not provide.
        </p>
        <p>
          Structure your calls around three categories:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Former managers and supervisors (2&ndash;3 calls).</strong>{" "}
            Ask: &ldquo;If this person were running a $5M revenue company,
            what would keep you up at night?&rdquo; and &ldquo;How did
            they handle the most stressful situation you observed?&rdquo;
            Former managers see performance under pressure that peers
            miss.
          </li>
          <li>
            <strong>Peers and direct reports (2&ndash;3 calls).</strong>{" "}
            Ask: &ldquo;Would you work for this person?&rdquo; and
            &ldquo;How do they handle conflict with people they
            disagree with?&rdquo; Direct reports reveal leadership
            style. Peers reveal collaboration instincts.
          </li>
          <li>
            <strong>Prior investors or board members (2&ndash;3 calls).</strong>{" "}
            For searchers who have prior entrepreneurial or investor
            relationships, ask: &ldquo;How did they communicate bad
            news?&rdquo; and &ldquo;Would you back them again with your
            own money?&rdquo; If prior investors exist and are not
            re-investing, ask why.
          </li>
        </ol>
        <p>
          The single most revealing question across all categories:
          &ldquo;On a scale of 1&ndash;10, how strongly would you
          recommend this person as a CEO of a small company?&rdquo;
          Anything below an 8 is a red flag. References who hesitate,
          qualify extensively, or give a 7 are telling you something
          important. Listen to what is not said as much as what is.
        </p>

        {/* ── H2 5: Acquisition DD from the LP Perspective ── */}
        <h2 className={h2Class}>
          Acquisition due diligence: evaluating the deal
        </h2>
        <p>
          When the searcher identifies a target, the diligence shifts
          from &ldquo;Is this the right person?&rdquo; to three parallel
          questions: Is this the right company? Is the price right? Is
          the structure sound?
        </p>

        <h3 className={h3Class}>Is this the right company?</h3>
        <p>
          You are looking for businesses with stable, recurring revenues,
          low customer concentration, a defensible market position, and
          a reason the seller is exiting that does not signal underlying
          problems. Request the independent{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
            quality of earnings
          </Link>{" "}
          report and review every material add-back. Common issues
          include aggressive normalization of owner compensation,
          one-time revenue treated as recurring, and deferred
          maintenance capitalized as growth capex.
        </p>
        <p>
          Evaluate the management team below the owner. If the owner is
          also the sole salesperson, sole customer relationship manager,
          and sole strategic thinker, the business has severe key-person
          risk that the searcher must address immediately
          post-acquisition. The best targets have a competent #2 who
          stays through the transition.
        </p>

        <h3 className={h3Class}>Is the price right?</h3>
        <p>
          Search fund acquisitions typically close at 4&ndash;7x adjusted
          EBITDA for businesses in the $1M&ndash;$5M EBITDA range.
          Multiples above 6x require a strong growth thesis to generate
          adequate LP returns. Compare the proposed valuation against
          comparable transactions in the same industry and size bracket.
          Competitive auction dynamics can push searchers to overpay
          &mdash;this is one of the most common value destroyers in
          the asset class.
        </p>
        <p>
          Model the returns from the LP perspective. At a 5x entry
          multiple with 3x use, a business that grows EBITDA at
          8% annually and exits at the same multiple in year 5 generates
          roughly a 3x gross return on equity. Increase the entry
          multiple to 7x with the same assumptions and the return drops
          to ~2x. Price discipline matters enormously. Review{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            cap table and equity structures
          </Link>{" "}
          to understand how returns flow through the waterfall.
        </p>

        <h3 className={h3Class}>Is the structure sound?</h3>
        <p>
          Evaluate the capital stack: senior debt terms (interest rate,
          amortization, covenants), any mezzanine or seller notes, and
          the total equity raise. Total use above 3.5x EBITDA in
          a small company with limited margin for error should prompt
          serious questions. Debt service coverage below 1.5x on
          trailing financials is aggressive for a first-time CEO.
        </p>
        <p>
          Look at the equity structure. What percentage do search fund
          LPs own in aggregate? What is the searcher&rsquo;s fully
          diluted ownership? Are there co-investors coming in at different
          terms? Ensure alignment by confirming that the searcher&rsquo;s
          economics are tied to LP returns, not just deal completion.
        </p>

        {/* ── H2 6: Search Phase Monitoring ── */}
        <h2 className={h2Class}>
          Monitoring during the search phase
        </h2>
        <p>
          Your diligence does not end when you write the search capital
          check. Active monitoring during the search phase provides
          early warning signals and helps you make a more informed
          acquisition-stage decision.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Monthly pipeline updates.</strong> Expect a written
            report covering: companies contacted, NDAs signed, management
            meetings held, LOIs submitted, and LOIs rejected. Look for
            consistent activity levels&mdash;a searcher who goes quiet
            for six weeks is often struggling.
          </li>
          <li>
            <strong>Deal flow quality.</strong> Early deal flow is
            typically broad and unfocused. By months 6&ndash;9, the
            pipeline should narrow toward specific industries and
            company profiles. If the searcher is still looking at
            everything at month 12, the thesis needs recalibration.
          </li>
          <li>
            <strong>Time management.</strong> The search has a finite
            budget. A searcher spending excessive time on conferences,
            networking events, or &ldquo;building the brand&rdquo;
            instead of contacting owners and reviewing CIMs is burning
            capital without generating deal flow. Track the ratio of
            outbound contacts to time elapsed.
          </li>
          <li>
            <strong>Emotional resilience under rejection.</strong> The
            search phase involves hundreds of rejections. Watch for
            signs of discouragement, thesis drift (suddenly pivoting to
            entirely different industries), or desperation (lowering
            standards to close any deal). A searcher who maintains
            discipline through month 15 is a stronger operator than
            one who panics at month 8.
          </li>
        </ul>

        {/* ── H2 7: Common LP Mistakes ── */}
        <h2 className={h2Class}>
          Five mistakes experienced LPs still make
        </h2>
        <ol className={olClass}>
          <li>
            <strong>Over-indexing on pedigree.</strong> An MBA from a
            top-5 program and two years at McKinsey do not guarantee
            operating ability. The Stanford data shows that
            post-acquisition performance correlates more strongly with
            pre-MBA operating experience and leadership evidence than
            with school brand. The best predictor is how the searcher
            performed when they had real responsibility for outcomes,
            not credentials on a resume.
          </li>
          <li>
            <strong>Skipping reference calls.</strong> This is the
            most common and most costly shortcut. LPs who skip
            references or limit themselves to the searcher&rsquo;s
            hand-picked list miss the most important diligence signal.
            Always request back-channel references&mdash;people the
            searcher did not suggest.
          </li>
          <li>
            <strong>Ignoring deal terms.</strong> Not all search fund
            structures are identical. Differences in step-up equity
            percentages, vesting schedules, follow-on rights, and
            governance provisions can materially affect LP returns.
            Read the legal documents, not just the PPM summary.
          </li>
          <li>
            <strong>Falling in love at acquisition.</strong> After
            investing search capital and spending 18 months with the
            searcher, LPs feel social pressure to fund the acquisition.
            This is sunk cost bias. Evaluate the acquisition on its
            own merits. The best LPs pass on 20&ndash;30% of
            acquisition opportunities from searchers they backed.
          </li>
          <li>
            <strong>Under-diversifying.</strong> Backing only 2&ndash;3
            search funds concentrates risk dangerously. With a ~33% loss
            rate, a three-fund portfolio has a meaningful probability of
            producing zero winners. Target 10&ndash;15 funds at minimum
            to capture the asset class&rsquo;s return profile.
          </li>
        </ol>

        {/* ── H2 8: The Co-Investment Decision ── */}
        <h2 className={h2Class}>
          The co-investment decision
        </h2>
        <p>
          When a searcher closes on an acquisition, search capital LPs
          typically have the right to invest additional equity. This{" "}
          <Link href="/learn/co-investment-search-fund" className="text-apple-accent hover:underline">
            co-investment decision
          </Link>{" "}
          is the highest-stakes moment in the LP relationship. The
          amounts are larger&mdash;often 3&ndash;5x the original
          search check&mdash;and you now have more information to work
          with: a real company, real financials, and 12&ndash;24 months
          of observing the searcher.
        </p>
        <p>
          Frame the decision as a fresh investment, not a continuation
          of the search commitment. Would you invest this amount in
          this company, at this price, with this operator, if you had
          no prior relationship? If the answer is yes, co-invest. If
          you need to talk yourself into it, pass. The data suggests
          that disciplined co-investors who decline 25&ndash;35% of
          opportunities outperform those who automatically follow on.
        </p>
        <p>
          Consider your portfolio-level exposure as well. A large
          co-investment in a single deal can concentrate your search
          fund portfolio even if your total number of funds is adequate.
          Size co-investment checks relative to your overall search
          fund allocation, not relative to the opportunity size.
        </p>

        {/* ── FAQ Section ── */}
        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>
          How many reference calls should I make before backing a searcher?
        </h3>
        <p>
          A minimum of six, with eight to ten as the target. Include
          former managers, peers, and direct reports. Always request
          at least two back-channel references&mdash;people the searcher
          did not provide. The marginal call is almost always worth the
          30 minutes.
        </p>

        <h3 className={h3Class}>
          What is the single biggest predictor of searcher success?
        </h3>
        <p>
          Evidence of leadership under real responsibility. This can come
          from managing a team, running a P&amp;L, leading a military
          unit, or building something from scratch. The Stanford 2024
          Study found no single background that dominates top-quartile
          returns, but the common thread among successful
          searcher-operators is a track record of producing results when
          they owned the outcome.
        </p>

        <h3 className={h3Class}>
          Should I always co-invest when my searcher finds a company?
        </h3>
        <p>
          No. Treat the co-investment as a new investment decision, not
          an obligation. Experienced LPs decline 20&ndash;35% of
          co-investment opportunities from searchers they backed,
          typically due to valuation concerns, industry risk, or capital
          structure issues. Sunk cost in the search phase should not
          drive the acquisition decision.
        </p>

        <h3 className={h3Class}>
          How many search funds should I back for adequate diversification?
        </h3>
        <p>
          A minimum of 10&ndash;15, with 20&ndash;30 as the target for
          institutional allocators. Given the ~33% loss rate, a
          concentrated portfolio of fewer than five funds carries
          substantial risk of poor aggregate returns even if
          individual fund selection is strong. Read our{" "}
          <Link href="/learn/portfolio-construction-search-fund" className="text-apple-accent hover:underline">
            portfolio construction analysis
          </Link>{" "}
          for the full statistical breakdown.
        </p>

        <h3 className={h3Class}>
          What are the most common red flags in a search fund PPM?
        </h3>
        <p>
          Vague acquisition criteria (&ldquo;open to any industry&rdquo;),
          non-standard economics that over-compensate the searcher,
          missing or weak investor protections (particularly follow-on
          rights), a generic risk section copied from another PPM, and
          a budget that does not reconcile with the stated search
          timeline. A weak PPM often reflects weak preparation, which
          predicts poor search execution.
        </p>
      </div>
    </article>
  );
}
