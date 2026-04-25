import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SearchFundTermSheetArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Search Fund Term Sheet: Key Provisions Explained
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          A search fund term sheet is the single document that defines
          how risk, reward, and control are split between the entrepreneur
          and a syndicate of investors, before anyone has identified
          a company to buy. Getting these provisions wrong can cripple a
          deal years later: overly aggressive step-ups dilute the searcher
          into mediocrity, loose governance clauses let one dissenting
          investor stall an acquisition, and vague vesting language sparks
          lawsuits at exit. The 2024 Stanford GSB Search Fund Study,
          covering 681 funds formed since 1984, shows that the median
          initial search raise reached $500,000 for the first time in
          2022-2023, with 94 new traditional funds launched in 2023
          alone. The stakes, and the capital, have never been
          higher. This guide walks through every major clause, explains
          what each provision means in practice, and highlights the
          negotiation levers that experienced{" "}
          <Link href="/learn/top-search-fund-investors" className="text-apple-accent hover:underline">
            search fund investors
          </Link>{" "}
          actually care about.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          Search Capital Provisions: Funding the Hunt
        </h2>
        <p>
          Before any acquisition happens, investors fund the search itself.
          This phase is the highest-risk stage of the entire model , 
          roughly 25% of searches never result in a completed acquisition,
          according to longitudinal Stanford data. Search capital provisions
          establish exactly how much is raised, how it is spent, and what
          happens if the clock runs out.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Total raise:</strong> $400,000-$600,000 is the
            standard range for a solo searcher, with a median of roughly
            $500,000-$550,000 as of 2023. Dual-searcher partnerships
            typically raise $700,000-$800,000 to cover two salaries
            and a longer timeline.
          </li>
          <li>
            <strong>Unit structure:</strong> Capital is divided into units
            of $25,000-$50,000 each. Investors sign subscription
            agreements committing to a specific number of units. Each unit
            carries identical economic and governance rights, creating a
            flat syndicate rather than a lead-investor hierarchy.
          </li>
          <li>
            <strong>Syndicate size:</strong> Most term sheets target
            10-20 investors. The sweet spot is 12-15: enough
            diversity of expertise and deal-sourcing networks, but not so
            many that governance becomes unwieldy. Every additional investor
            beyond roughly 15 increases coordination cost without
            proportional benefit.
          </li>
          <li>
            <strong>Permitted use of funds:</strong> The term sheet
            specifies eligible expenses, searcher salary
            ($100,000-$150,000 per year), travel for company visits,
            legal fees, CRM and data subscriptions, D&amp;O insurance, and
            search infrastructure. Most term sheets require quarterly budget
            reporting against a pre-approved annual plan.
          </li>
          <li>
            <strong>Search period:</strong> Typically 24 months, with an
            optional six-month extension requiring an investor vote
            (usually simple majority). Monthly burn rates run
            $15,000-$25,000. If the searcher fails to close an
            acquisition by the end of the term, remaining capital is
            returned to investors and the fund winds down.
          </li>
        </ul>
        <p>
          For a detailed breakdown of how these costs add up, see our{" "}
          <Link href="/learn/search-fund-cost" className="text-apple-accent hover:underline">
            search fund cost analysis
          </Link>.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          The Step-Up Mechanism: Rewarding Early Risk
        </h2>
        <p>
          The step-up is the defining economic feature of the traditional
          search fund model. It compensates investors who funded the
          uncertain search phase by converting their search capital into
          acquisition equity at a premium, typically 1.5x the
          original amount invested. A $50,000 search-phase investment
          becomes $75,000 worth of equity at the closing of the
          acquisition, even though the investor writes no additional check
          for that $25,000 gain.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Standard multiple:</strong> The 1.5x step-up has been
            the industry norm for decades. Some self-funded or
            partially-funded models use step-ups ranging from 1.5x to 2.5x,
            with 2.0x considered standard in self-funded deals where the
            searcher puts in personal capital alongside investors.
          </li>
          <li>
            <strong>Why it exists:</strong> Search capital is
            high-risk capital. If the searcher never closes a deal, investors
            lose most or all of their search investment. The step-up rewards
            them for taking this binary risk and creates an incentive for
            search investors to continue participating in the acquisition
            round.
          </li>
          <li>
            <strong>Pro-rata rights:</strong> Search investors typically
            receive the right, but not the obligation, to
            invest their pro-rata share of acquisition equity at the
            step-up price. This means they can maintain their percentage
            ownership or choose to dilute down if they are not confident
            in the target company.
          </li>
          <li>
            <strong>Negotiation levers:</strong> Some searchers negotiate
            a lower step-up (1.25x or even 1.0x) in exchange for more
            favorable equity vesting terms or a smaller investor syndicate
            with deeper pockets. Others accept a higher step-up to attract
            marquee investors whose operational expertise and networks
            justify the premium.
          </li>
        </ul>
        <p>
          For a deeper look at how the step-up fits into overall investor
          returns, see our guide to{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            search fund investor economics
          </Link>.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          Searcher Equity: The Three-Tranche Vesting Model
        </h2>
        <p>
          The primary incentive for an entrepreneur to spend two years
          searching and then run a small company as CEO is not the salary
          it is a significant equity stake in the acquired business.
          A solo searcher typically earns 20%-25% of common equity;
          a two-person partnership earns up to 30% split between both
          partners. That equity vests in three tranches, each tied to a
          different milestone.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Tranche 1, Acquisition close (one-third):</strong>{" "}
            Roughly 7%-10% of total equity vests immediately when the
            acquisition closes. This rewards the searcher for completing
            the hardest part of the model: finding, diligencing, negotiating,
            and financing a deal that investors approve.
          </li>
          <li>
            <strong>Tranche 2, Time-based vesting (one-third):</strong>{" "}
            Another 7%-10% vests monthly or quarterly over a
            three-to-five-year period, contingent on the searcher remaining
            as CEO. This aligns the searcher with long-term value creation
            and protects investors from a quick exit.
          </li>
          <li>
            <strong>Tranche 3, Performance-based vesting (one-third):</strong>{" "}
            The final 7%-10% vests only when investors achieve
            specified return hurdles, typically measured as a net IRR
            ranging from 20% to 35%. Some term sheets use a single hurdle
            (for instance, 25% net IRR); others use a graduated scale where
            partial vesting begins at 20% IRR and full vesting is reached
            at 35% IRR.
          </li>
        </ol>
        <p>
          The negotiation tension is predictable: searchers prefer more
          weight on time-based vesting (which they can control), while
          investors prefer more weight on performance-based vesting (which
          aligns with returns). For a complete picture of how these economics
          play out in practice, see{" "}
          <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">
            searcher compensation
          </Link>{" "}
          and{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            cap tables &amp; equity structures
          </Link>.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          Governance Provisions: Board, Voting, and Information Rights
        </h2>
        <p>
          Governance provisions determine who makes decisions after the
          acquisition closes. These clauses matter far more than most
          first-time searchers realize, a poorly structured board
          or an ambiguous investor-approval threshold can paralyze
          operations or even allow the searcher to be removed without cause.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Board composition:</strong> The standard structure is
            five seats: two appointed by investors, one held by the
            searcher-CEO, and two independent directors chosen by mutual
            agreement. The independent seats are the swing votes, so
            selecting credible, balanced independents is one of the most
            consequential early decisions after closing.
          </li>
          <li>
            <strong>Investor approval rights:</strong> Major decisions
            require an investor vote, typically majority or
            supermajority of the preferred shareholders. These reserved
            matters almost always include the acquisition itself, additional
            equity raises above a specified threshold, any sale or
            liquidation of the company, CEO termination or replacement,
            and material capital expenditures beyond the approved annual
            budget.
          </li>
          <li>
            <strong>Information rights:</strong> Investors receive monthly
            financial statements, quarterly board packages, and annual
            audited financials. Some term sheets also grant investors the
            right to visit the company and inspect books upon reasonable
            notice.
          </li>
          <li>
            <strong>Deal-approval mechanics:</strong> The term sheet must
            specify the vote threshold required to approve (or reject) a
            proposed acquisition. Some funds use simple majority; others
            require supermajority (typically 67% or 75%). The term sheet
            should also clarify what happens if investors disagree , 
            can the searcher bring the same deal back after modifications,
            or is it permanently declined?
          </li>
        </ul>
        <p>
          Governance is an area where experienced investors add significant
          value. For more on building an effective post-acquisition board,
          see{" "}
          <Link href="/learn/search-fund-board-best-practices" className="text-apple-accent hover:underline">
            search fund board best practices
          </Link>.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          Acquisition Capital Provisions: Financing the Deal
        </h2>
        <p>
          The term sheet governs not just the search phase but also how
          the acquisition itself will be capitalized. These provisions
          establish investor rights during the most capital-intensive
          moment in the entire lifecycle.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Follow-on investment right:</strong> Search investors
            have the right to participate in the acquisition equity round,
            usually on a pro-rata basis. This right is one of the primary
            reasons investors agree to fund the high-risk search phase in
            the first place, it gives them a seat at the table for
            a deal they have watched develop from the earliest stages.
          </li>
          <li>
            <strong>Preferred equity structure:</strong> Acquisition-round
            investors typically receive participating preferred shares with
            a 1x liquidation preference and a preferred dividend coupon of
            6%-8% per annum. The liquidation preference ensures
            investors get their capital back before any common equity
            (including the searcher&rsquo;s stake) participates in
            distributions.
          </li>
          <li>
            <strong>Outside investor protections:</strong> If the
            acquisition requires more equity than the existing syndicate
            can provide, new investors may participate. The term sheet
            typically specifies that outside investors receive terms no
            more favorable than those granted to existing search investors.
          </li>
          <li>
            <strong>Capital stack flexibility:</strong> The actual{" "}
            <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
              capital stack
            </Link>{" "}
            the mix of senior debt (typically 30%-40% of
            enterprise value), investor equity (50%-60%), and seller
            notes (10%-20%), is determined at acquisition,
            not in the search-phase term sheet. However, the term sheet
            may set guardrails, such as maximum leverage ratios or minimum
            debt service coverage requirements.
          </li>
        </ul>
        <p>
          For more on how the acquisition round is structured, see our
          analysis of{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            search fund returns
          </Link>{" "}
          and the{" "}
          <Link href="/learn/pledge-fund-model" className="text-apple-accent hover:underline">
            pledge fund model
          </Link>{" "}
          as an alternative structure.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          Protective Provisions: Safeguards for Both Sides
        </h2>
        <p>
          Protective provisions exist to prevent value destruction or
          misalignment between the searcher and the investor syndicate.
          While they may feel restrictive during negotiation, these
          clauses protect both parties in scenarios where interests diverge.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Key-person clause:</strong> If the searcher leaves or
            is unable to continue, remaining search capital is returned to
            investors and the fund winds down. This protects investors
            from funding a search that has lost its driving force.
          </li>
          <li>
            <strong>Non-compete:</strong> The searcher cannot pursue
            acquisitions outside the search fund during the search period.
            This ensures the investor syndicate has the searcher&rsquo;s
            undivided attention and prevents conflicts of interest.
          </li>
          <li>
            <strong>Exclusivity:</strong> Investors agree not to fund
            another searcher targeting the same industry or geography
            during the search period. In practice, many institutional
            search fund investors back multiple searches simultaneously
            across different sectors, but direct overlap is prohibited.
          </li>
          <li>
            <strong>Drag-along rights:</strong> If investors holding a
            specified percentage (usually 67%-75%) approve a sale,
            all shareholders must participate on the same terms. This
            prevents minority holders from blocking a profitable exit.
          </li>
          <li>
            <strong>Tag-along rights:</strong> If the searcher or a major
            investor sells their stake, other investors have the right to
            sell on identical terms. This protects smaller investors from
            being left behind in a partial exit.
          </li>
          <li>
            <strong>Anti-dilution protection:</strong> If the company
            raises additional equity at a lower valuation than the
            acquisition price, existing investors&rsquo; ownership is
            adjusted upward to compensate for the dilution. Most search
            fund term sheets use broad-based weighted-average anti-dilution,
            which is more founder-friendly than full-ratchet provisions.
          </li>
        </ul>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          How Search Fund Terms Have Evolved Over Four Decades
        </h2>
        <p>
          The search fund model was created at Stanford GSB in 1984 by
          Professor H. Irving Grousbeck, and the term sheet has evolved
          substantially since those early days. Understanding these shifts
          helps searchers and investors calibrate expectations against
          current market norms.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>1984-2000 (pioneer era):</strong> Small investor
            pools of 5-8 individuals, minimal standardization, and
            ad-hoc governance. Step-ups were not yet codified as a standard
            term. Searcher equity allocations varied widely.
          </li>
          <li>
            <strong>2000-2015 (institutionalization):</strong> Stanford
            and IESE began publishing research that codified &ldquo;standard&rdquo;
            terms. The 1.5x step-up, three-tranche vesting, and
            five-seat board structure emerged as defaults during this
            period. The Stanford Search Fund Primer became the de facto
            reference document for new searchers and investors.
          </li>
          <li>
            <strong>2015-2023 (scaling era):</strong> The number of
            funds launched annually grew from roughly 20 to 94 in 2023,
            according to the 2024 Stanford study. Median search capital
            rose to $500,000. Institutional investors (dedicated search
            fund funds, family offices, and former operators) displaced
            individual angels as the primary capital source. Self-funded
            and partially-funded models introduced step-ups of 2.0x-2.5x,
            reflecting the searcher&rsquo;s own capital at risk.
          </li>
          <li>
            <strong>2023-present:</strong> With $682 million of
            investor equity deployed into core search funds and
            search-acquired companies in 2022-2023 combined, the
            asset class has attracted more sophisticated legal and
            financial structuring. Preferred dividend coupons of 6%-8%
            are now standard. Redeemable preferred structures, where
            the company can pay down expensive preferred equity via cash
            flow over time, are becoming more common, preserving
            long-term searcher equity upside.
          </li>
        </ul>
        <p>
          For broader historical context, see our article on{" "}
          <Link href="/learn/search-fund-history" className="text-apple-accent hover:underline">
            search fund history
          </Link>{" "}
          and the{" "}
          <Link href="/learn/search-fund-statistics" className="text-apple-accent hover:underline">
            latest search fund statistics
          </Link>.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>
          Common Negotiation Mistakes and How to Avoid Them
        </h2>
        <p>
          After reviewing hundreds of term sheets across the search fund
          community, several patterns of avoidable errors emerge
          repeatedly.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Fixating on equity percentage over absolute value.</strong>{" "}
            A 20% stake in a well-capitalized acquisition with strong
            debt-service coverage can generate far greater returns than a
            30% stake in an undercapitalized deal where the searcher must
            constantly beg the board for working capital. Negotiate the
            overall structure, not just the headline number.
          </li>
          <li>
            <strong>Ignoring CEO termination provisions.</strong> A board
            that can fire the searcher without cause, and claw back
            unvested equity, creates existential risk. Negotiate
            for &ldquo;good reason&rdquo; protections, severance terms,
            and accelerated vesting on a change-of-control event.
          </li>
          <li>
            <strong>Assembling too large a syndicate.</strong> More than 15
            investors creates coordination overhead that slows every
            decision from deal approval to exit planning. Each additional
            investor should bring demonstrable value, operating
            expertise, industry connections, or follow-on capital capacity
            beyond just a check.
          </li>
          <li>
            <strong>Leaving deal-authority ambiguous.</strong> If the term
            sheet does not specify what happens when investors disagree on
            a proposed acquisition, the searcher risks spending months on
            diligence only to have the deal blocked by a minority of the
            syndicate. Define the approval threshold, the re-submission
            process, and the deadlock resolution mechanism upfront.
          </li>
          <li>
            <strong>Neglecting the extension clause.</strong> Many term
            sheets allow a six-month search extension but do not specify
            how much additional capital is available for the extended
            period or whether the searcher&rsquo;s salary continues at the
            same rate. Spell out the economics of the extension before
            signing, not when time is running out.
          </li>
        </ol>
        <p>
          Preparing a strong{" "}
          <Link href="/learn/fundraising-deck" className="text-apple-accent hover:underline">
            fundraising deck
          </Link>{" "}
          and a well-drafted{" "}
          <Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">
            private placement memorandum (PPM)
          </Link>{" "}
          will help you enter term-sheet negotiations from a position of
          clarity and credibility.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          What is a standard search fund term sheet, and how does it differ
          from a VC term sheet?
        </h3>
        <p>
          A search fund term sheet is a pre-acquisition agreement between
          a searcher and a syndicate of investors that governs the search
          phase, the step-up conversion, searcher equity vesting, and
          governance of the eventual acquisition. Unlike a venture capital
          term sheet, which prices a round based on a company&rsquo;s
          current valuation, a search fund term sheet establishes
          economic rights for a company that does not yet exist in the
          portfolio. The step-up mechanism, the three-tranche equity
          vesting model, and the two-stage capital commitment (search
          capital followed by acquisition capital) are all unique to the
          search fund structure. Venture term sheets also typically
          feature a single lead investor who sets terms; in a search fund,
          all investors receive identical unit-based terms.
        </p>

        <h3 className={h3Class}>
          How much equity should a searcher expect to receive?
        </h3>
        <p>
          A solo searcher typically earns 20%-25% of common equity
          in the acquired company, vesting across three equal tranches
          (at close, over time, and upon achieving IRR hurdles). A
          two-person search team earns up to 30% combined. The exact
          percentage depends on the total capital raised, the step-up
          multiple, and the negotiating use of the searcher , 
          candidates with prior operating experience, an MBA from a top
          program, or a strong pipeline of acquisition targets can push
          toward the higher end. The performance-vesting tranche (roughly
          one-third of total equity) typically requires achieving a net
          investor IRR of 20%-35%, with many term sheets using a
          graduated scale within that range.
        </p>

        <h3 className={h3Class}>
          Can search fund term sheet provisions be customized, or are they
          standardized?
        </h3>
        <p>
          Every provision is negotiable, but the search fund community has
          converged on a set of widely accepted defaults: the 1.5x step-up,
          equal three-tranche vesting, a five-seat board, and 1x
          liquidation preference with a 6%-8% preferred dividend
          coupon. Deviating from these norms is possible but requires a
          clear rationale. For instance, a searcher who co-invests personal
          capital alongside investors may negotiate a lower step-up (1.0x
          or 1.25x) in exchange for a larger equity pool. Similarly, a
          searcher targeting a niche with unusually long deal timelines
          might negotiate a 30-month search period instead of the standard
          24 months. The Stanford Search Fund Primer and publications from
          IESE provide the baseline templates that most law firms use as
          starting points.
        </p>

        <h3 className={h3Class}>
          What happens to the term sheet if the searcher fails to find a
          company?
        </h3>
        <p>
          If the search period expires without a completed acquisition,
          the key-person and wind-down provisions activate. Remaining
          unspent search capital is returned to investors on a pro-rata
          basis. The searcher&rsquo;s salary and expenses already incurred
          are sunk costs and are not recoverable. The searcher receives no
          equity because the vesting never began, the first tranche
          only triggers at acquisition close. According to Stanford data,
          approximately 25% of traditional search funds do not result in
          a completed acquisition, which is why the step-up exists: it
          compensates investors for absorbing this binary search-phase risk
          across their portfolio of search fund investments.
        </p>

        <h3 className={h3Class}>
          How do investors evaluate whether term sheet provisions are fair?
        </h3>
        <p>
          Experienced search fund investors benchmark every provision
          against the Stanford and IESE standard templates, which reflect
          decades of market data. They focus on four dimensions: (1)
          alignment, does the equity structure motivate the searcher
          to create long-term value rather than chase a quick exit;
          (2) downside protection, do the liquidation preference,
          preferred dividend, and anti-dilution provisions adequately
          protect capital in a downside scenario; (3) governance balance
          does the board structure provide oversight without
          micromanaging the CEO; and (4) deal-flow optionality, do
          the follow-on and pro-rata rights give investors meaningful
          access to the acquisition round. Investors who have backed
          multiple search funds, the{" "}
          <Link href="/learn/top-search-fund-investors" className="text-apple-accent hover:underline">
            top search fund investors
          </Link>{" "}
          typically invest in 5-15 searches simultaneously , 
          evaluate each term sheet in the context of their broader
          portfolio, accepting higher risk on individual deals in exchange
          for aggregate returns that have historically averaged 35.1% IRR
          and 4.5x MOIC across the asset class.
        </p>
      </div>
    </article>
  );
}
