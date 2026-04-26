import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function CoInvestmentSearchFundArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Co-Investment in Search Funds: Mechanics, Economics, and LP Strategy
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Co-investment is the single largest lever a search fund LP has to
          concentrate capital into their highest-conviction deals. When a
          searcher closes an acquisition, existing investors can deploy capital
          well beyond their pro-rata share, often 2x to 10x their
          original search commitment, into a specific company they have
          personally underwritten. The{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
            2024 Stanford Search Fund Study
          </Link>{" "}
          reports that the median acquisition attracts 16 investors, with four
          new participants joining at the deal stage, signaling that co-investment
          demand routinely exceeds what the original syndicate can absorb. This
          guide breaks down exactly how co-investment works, what it pays, and
          how to avoid the pitfalls that trip up even experienced LPs.
        </p>

        {/* ── Section 1 ── */}
        <h2 className={h2Class}>
          When co-investment triggers and how the process works
        </h2>
        <p>
          Co-investment is not available during the search phase. It only
          activates once a searcher identifies a target company and begins
          raising acquisition equity. A typical search fund raises $400,000 to
          $550,000 in initial search capital from 10 to 14 investors, each
          contributing $25,000 to $75,000, according to data tracked by Stanford
          GSB across 681 qualifying funds formed since 1984. That search capital
          converts into acquisition equity at a 1.5x step-up, a $50,000
          search contribution becomes $75,000 of equity at closing, but
          rarely covers the full equity requirement.
        </p>
        <p>
          The median acquisition purchase price sits at $14.4 million, per the
          2024 Stanford study, with the{" "}
          <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
            capital stack
          </Link>{" "}
          typically composed of 30-40% senior debt, 10-20% seller
          notes, and 50-60% investor equity. That equity slice can
          easily reach $7 million to $9 million, far more than the
          $550,000 of converted search capital covers. The gap is filled
          through co-investment.
        </p>
        <p>
          The allocation process follows a standard sequence:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Pro-rata offering:</strong> Every original search investor
            receives a right of first refusal to invest their pro-rata share of
            the acquisition equity. If an LP held one unit out of ten total
            search units, they can fund 10% of the acquisition equity at the
            same terms.
          </li>
          <li>
            <strong>Co-investment offering:</strong> If the total equity need
            exceeds what pro-rata commitments cover, which it almost
            always does, the searcher offers additional allocation to
            existing investors who want to increase exposure.
          </li>
          <li>
            <strong>New investor allocation:</strong> Any remaining equity is
            offered to new investors. The Stanford data shows roughly four new
            investors typically join at the acquisition stage, bringing fresh
            capital and often sector-specific expertise.
          </li>
          <li>
            <strong>Closing:</strong> Co-investors wire funds within a tight
            window, usually 10 to 30 days of the final capital call. Speed
            matters, searchers prioritize investors who can commit
            quickly and without extensive re-negotiation.
          </li>
        </ol>

        {/* ── Section 2 ── */}
        <h2 className={h2Class}>
          Co-investment economics: why LPs chase these allocations
        </h2>
        <p>
          The financial case for co-investment rests on three structural
          advantages that compound together.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>No incremental fees or carry:</strong> In traditional PE
            fund-of-funds structures, LPs pay 2% management fees and 20% carried
            interest on committed capital. Co-investment capital in a search fund
            typically carries zero management fees and zero carry, because it
            invests directly alongside the fund on identical terms. Adams Street
            Partners, which has tracked co-investment performance across 270+
            funds since 2006, notes that eliminating these fee layers can add
            300 to 500 basis points of net return annually.
          </li>
          <li>
            <strong>Deal-specific underwriting:</strong> Unlike the initial
            search commitment, where you bet on a person before they
            have identified a target, co-investment lets you evaluate a
            real business with audited financials, customer concentration data,
            and a concrete operating plan. You can apply the same{" "}
            <Link href="/learn/lp-guide-search-fund-dd" className="text-apple-accent hover:underline">
              due diligence framework
            </Link>{" "}
            you would use for any direct investment.
          </li>
          <li>
            <strong>Concentrated upside in a high-return asset class:</strong>
            {" "}The aggregate pre-tax IRR for search funds stands at 35.1% with
            a 4.5x return on invested capital, per the 2024 Stanford study.
            Exited deals performed even better, posting a 42.9% IRR driven by
            several high-return exits in 2022-2023. Co-investment lets
            you shift portfolio weight toward the specific deals you believe
            will land in that top quartile. Explore the full{" "}
            <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
              search fund returns dataset
            </Link>{" "}
            to understand the distribution.
          </li>
        </ul>
        <p>
          A concrete example: an LP who commits $50,000 to a search fund during
          the search phase, exercises their pro-rata right for $150,000 at
          acquisition, and adds a $300,000 co-investment has $500,000 deployed
          into a single deal. If that company exits at 5x equity , 
          roughly the median outcome per Stanford, the LP receives $2.5
          million. The co-investment portion alone accounts for $1.5 million of
          that return, with no carry paid on it.
        </p>

        {/* ── Section 3 ── */}
        <h2 className={h2Class}>
          Typical co-investment structures and terms
        </h2>
        <p>
          Co-investment in search funds is structurally simpler than PE
          co-investment because there is only one deal, not a portfolio. The
          most common structures include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Same-class equity:</strong> The majority of search fund
            co-investments place capital into the same participating preferred
            stock that pro-rata investors hold. This preferred typically carries
            a 6-8% cumulative coupon and participates in common equity
            upside after the preference is repaid. The simplicity benefits
            everyone, one cap table, one class of economic rights, no
            inter-creditor disputes at exit.
          </li>
          <li>
            <strong>Side-car SPV:</strong> For larger co-investments, some
            syndicates form a special-purpose vehicle that aggregates multiple
            co-investors into a single line on the{" "}
            <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
              cap table
            </Link>. This is common when the co-investment pool involves more
            than five or six participants and the searcher wants to simplify
            governance.
          </li>
          <li>
            <strong>Subordinated notes with equity kickers:</strong> A less
            common but growing structure, particularly for deals with higher
            use. The co-investor provides a subordinated loan (often at
            10-14% interest) with warrants or conversion rights that
            provide equity upside. This structure offers downside protection
            through the debt coupon while retaining upside through the equity
            component.
          </li>
        </ul>
        <p>
          The critical term to negotiate is information rights. Co-investors
          deploying $250,000 or more should secure quarterly financial
          reporting, board observer seats (if not a full board seat), and
          standard protective provisions such as consent rights on major capital
          expenditures, additional debt, or changes to the{" "}
          <Link href="/learn/search-fund-term-sheet" className="text-apple-accent hover:underline">
            term sheet
          </Link>{" "}
          structure.
        </p>

        {/* ── Section 4 ── */}
        <h2 className={h2Class}>
          How search fund co-investment differs from PE co-investment
        </h2>
        <p>
          LPs who have co-invested alongside buyout funds often assume search
          fund co-investment works the same way. It does not. The differences
          are structural, not cosmetic.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Single-asset exposure vs. portfolio allocation:</strong>
            {" "}A PE co-investment supplements a diversified fund portfolio. A
            search fund co-investment is the portfolio, there is only
            one company. This makes individual deal selection far more
            consequential. See{" "}
            <Link href="/learn/risk-factors-search-fund-investing" className="text-apple-accent hover:underline">
              risk factors in search fund investing
            </Link>{" "}
            for a full taxonomy of what can go wrong.
          </li>
          <li>
            <strong>Operator quality as the primary variable:</strong> In PE,
            the GP manages a portfolio and installs professional management
            teams. In a search fund, the searcher becomes the CEO. Your
            co-investment return depends almost entirely on one person&rsquo;s
            ability to operate a business they have never run before. This makes
            searcher evaluation the most important element of the decision.
          </li>
          <li>
            <strong>No GP fee economics to create misalignment:</strong> PE
            co-investment has historically raised adverse selection concerns
            the fear that GPs offer co-investment on their weakest
            deals because they earn no carry on co-invested capital. Research by
            Braun, Jenkinson, and Schemmerl published in the{" "}
            <em>Journal of Financial Economics</em> (2020) found no systematic
            evidence of adverse selection in PE co-investments. In search funds,
            the concern is even less relevant: the searcher has no separate fee
            stream to protect. Their 20-25% equity stake vests only if
            the company succeeds, creating direct alignment with every dollar
            of co-investment capital.
          </li>
          <li>
            <strong>Smaller check sizes, faster decisions:</strong> PE
            co-investments can range from $10 million to $100 million+. Search
            fund co-investments typically range from $100,000 to $2 million per
            LP, with decision timelines measured in weeks rather than months.
            Family offices and high-net-worth individuals, not
            institutional LPs, are the primary participants. Learn how{" "}
            <Link href="/learn/family-offices-search-funds" className="text-apple-accent hover:underline">
              family offices approach search funds
            </Link>{" "}
            for a deeper look at this investor segment.
          </li>
        </ul>

        {/* ── Section 5 ── */}
        <h2 className={h2Class}>
          Risks LPs must underwrite before co-investing
        </h2>
        <p>
          Co-investment amplifies both upside and downside. The Stanford data
          shows that roughly 33% of search fund investments result in partial
          or total loss. A co-investment that doubles your exposure to a losing
          deal doubles the absolute loss. Three specific risks deserve careful
          evaluation.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Concentration risk:</strong> An LP who commits $50,000 to
            ten search funds has $500,000 spread across ten operators, ten
            industries, and ten geographies. An LP who co-invests $300,000 into
            a single deal has 60% of their search fund capital riding on one
            outcome. The{" "}
            <Link href="/learn/portfolio-construction-search-funds" className="text-apple-accent hover:underline">
              portfolio construction math
            </Link>{" "}
            is unforgiving: fewer than eight positions creates excessive
            concentration, and a large co-investment can effectively reduce your
            diversification to a single bet.
          </li>
          <li>
            <strong>Information asymmetry at speed:</strong> Co-investment
            decisions happen during a compressed acquisition timeline. The
            searcher has spent months evaluating the target; you may have weeks.
            Quality of earnings reports, customer interviews, and management
            references take time to process. Rushing the decision to meet a
            closing deadline is the most common mistake co-investors make.
          </li>
          <li>
            <strong>Illiquidity and long hold periods:</strong> Search fund
            acquisitions have no fixed exit timeline, unlike PE funds that
            typically target exits within three to seven years. Co-invested
            capital may be locked up for five to ten years with no secondary
            market. Invest only capital you can afford to have illiquid for a
            decade.
          </li>
        </ol>

        {/* ── Section 6 ── */}
        <h2 className={h2Class}>
          A decision framework for evaluating co-investment opportunities
        </h2>
        <p>
          Experienced search fund investors, firms like Pacific Lake
          Partners, Relay Investments, and Search Fund Partners, use
          systematic frameworks rather than gut feel. The following checklist
          synthesizes common practices across the most active search fund
          investor networks.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Evaluate the business independently:</strong> Request the
            confidential information memorandum (CIM), quality of earnings (QoE)
            report, and at least three years of audited financials. Look for
            recurring revenue above 70%, customer concentration below 15% for
            any single client, and EBITDA margins of 15%+ with expansion
            potential.
          </li>
          <li>
            <strong>Stress-test the valuation:</strong> The median search fund
            acquisition closes at 7.0x EBITDA per the 2024 Stanford study.
            If the deal is priced above 8x, the business needs to demonstrate
            clear margin expansion or organic growth that justifies the premium.
            Model downside scenarios at 5x exit multiples with flat revenue.
          </li>
          <li>
            <strong>Assess the searcher&rsquo;s operating plan:</strong> A
            co-investment is a bet on execution. Does the searcher have relevant
            industry experience? Have they identified specific, measurable
            value-creation levers (pricing optimization, sales team expansion,
            technology integration)? Generic &ldquo;grow the business&rdquo;
            plans are red flags.
          </li>
          <li>
            <strong>Review the investor syndicate:</strong> Who else is
            co-investing? Experienced co-investors like Jim Ellis at Stanford,
            the IESE ETA community, or dedicated search fund vehicles provide
            validation. A deal where experienced investors pass should prompt
            serious pause.
          </li>
          <li>
            <strong>Size the position relative to your portfolio:</strong> A
            common rule among seasoned LPs: no single co-investment should
            exceed 15-20% of your total search fund allocation. This
            ensures that even a total loss on one co-investment does not
            materially impair the portfolio.
          </li>
        </ol>

        {/* ── Section 7 ── */}
        <h2 className={h2Class}>
          Co-investment from the searcher&rsquo;s perspective
        </h2>
        <p>
          Searchers benefit from co-investment in ways that go beyond simply
          filling the equity gap. When existing investors choose to put more
          capital into a specific deal, it sends a strong signal to lenders,
          sellers, and new investors. A searcher who can tell a seller &ldquo;my
          existing investor base is committing an additional $3 million because
          they believe in this business&rdquo; has a competitive advantage in a
          process where seller confidence matters.
        </p>
        <p>
          Co-investment also enables searchers to pursue larger, higher-quality
          targets. A searcher with $550,000 in search capital and a syndicate
          willing to co-invest up to $5 million can realistically target
          companies priced at $10 million to $20 million. Without co-investment
          capacity, that same searcher is limited to businesses under $5 million
          a segment with thinner margins, less professional management
          infrastructure, and higher operating risk.
        </p>
        <p>
          The trade-off for searchers is governance complexity. More co-investors
          means more board members, more reporting obligations, and more voices
          in strategic decisions. Smart searchers negotiate clear{" "}
          <Link href="/learn/search-fund-governance-investor" className="text-apple-accent hover:underline">
            governance frameworks
          </Link>{" "}
          before closing, including defined board composition, reserved matters
          requiring investor consent, and information-sharing cadences.
        </p>

        {/* ── FAQ Section ── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          What is the typical co-investment size in a search fund acquisition?
        </h3>
        <p>
          Individual co-investment checks typically range from $100,000 to $2
          million, depending on the LP&rsquo;s capacity and the total equity
          requirement. For a median-priced acquisition at $14.4 million with
          50-60% equity, the total co-investment pool across all investors
          can reach $5 million to $7 million. Family offices at the larger end
          of the spectrum may deploy $1 million to $5 million in a single
          co-investment, per data from dedicated search fund investor networks.
        </p>

        <h3 className={h3Class}>
          Do co-investors receive the same terms as pro-rata investors?
        </h3>
        <p>
          In most traditional search fund structures, yes. Co-investment capital
          enters the same participating preferred equity class as pro-rata
          capital, with identical liquidation preferences, dividend rights, and
          participation in common equity upside. Some searchers offer co-investment
          through side-car SPVs that aggregate smaller checks, but the underlying
          economics are typically the same. The key exception is when co-investors
          provide capital as subordinated debt with equity kickers, a
          structure that trades some upside for downside protection through
          interest payments.
        </p>

        <h3 className={h3Class}>
          How do I avoid concentration risk when co-investing?
        </h3>
        <p>
          The most effective guardrail is a hard cap on position size. Experienced
          LPs limit any single co-investment to 15-20% of their total
          search fund allocation. If your total search fund portfolio is $1
          million across ten funds, cap individual co-investments at $150,000 to
          $200,000. This preserves the{" "}
          <Link href="/learn/portfolio-construction-search-funds" className="text-apple-accent hover:underline">
            diversification benefits
          </Link>{" "}
          of a multi-fund strategy while still allowing meaningful concentrated
          bets. Track your aggregate exposure by sector and geography as well
          two co-investments in HVAC businesses in the same region
          creates correlated risk even if the position sizes are modest.
        </p>

        <h3 className={h3Class}>
          Is adverse selection a real concern in search fund co-investment?
        </h3>
        <p>
          Less than in traditional PE. The adverse selection hypothesis , 
          that GPs offer co-investment on their weakest deals, relies on
          a fee structure where the GP earns carry on fund capital but not on
          co-invested capital. Search fund operators hold 20-25% equity
          that vests based on company performance, meaning their incentives are
          fully aligned regardless of where the capital comes from. Empirical
          research supports this: Adams Street Partners analyzed co-investment
          performance across 270+ funds and found that co-investment deals
          performed comparably to the broader portfolio, with a median
          outperformance of approximately 10%.
        </p>

        <h3 className={h3Class}>
          Can new investors participate in co-investment, or is it reserved for
          existing LPs?
        </h3>
        <p>
          Both can participate, but existing LPs have priority. The standard
          process gives original search investors right of first refusal on
          their pro-rata share, then offers excess capacity to existing
          investors as co-investment, and finally opens remaining allocation to
          new investors. The 2024 Stanford study found that the median
          acquisition syndicate includes four new investors who join specifically
          at the acquisition stage, evidence that co-investment
          capacity regularly exceeds what the original search syndicate can
          absorb. New investors who want access to{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
            search fund deal flow
          </Link>{" "}
          often build relationships with active searchers and existing investor
          networks well before specific deals materialize.
        </p>
      </div>
    </article>
  );
}
