import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SearchFundOperatingPartnerArticle() {
  return (
    <article>
      <h1 className={h1Class}>The Search Fund Operating Partner Model</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          The traditional search fund image is that of a solo entrepreneur &mdash; one
          searcher, one acquisition, one CEO. But a growing number of search funds are
          launched by two partners who search together, acquire together, and run the
          company together. This is the operating partner model, and when it works well
          it can be one of the most powerful structures in entrepreneurship through
          acquisition. When it fails, however, the consequences tend to be more damaging
          than a solo search gone wrong.
        </p>
        <p>
          This guide covers everything aspiring partners need to know: when and why to
          consider a partnership, how to structure equity and decision-making, the legal
          agreements that protect both sides, what investors look for in a partner team,
          and the common failure modes you must actively guard against.
        </p>

        <h2 className={h2Class}>What is the operating partner model?</h2>
        <p>
          In a partnered search fund, two individuals jointly raise search capital, conduct
          the search for an acquisition target, and then co-lead the acquired company as
          its senior executives. Rather than a single searcher stepping in as CEO, the
          partner team divides leadership responsibilities between them &mdash; most commonly
          as co-CEOs or as a CEO and COO pairing.
        </p>
        <p>
          The model is distinct from the{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">traditional solo search fund</Link>{" "}
          in several important ways. Partners share the workload of sourcing, evaluating,
          and closing a deal, which can accelerate the search timeline. They bring
          complementary skill sets to the operating phase, covering more ground than a
          single CEO can alone. And they provide each other with a sounding board and
          emotional support through what is often a grueling, multi-year journey.
        </p>
        <p>
          According to Stanford&rsquo;s longitudinal data, roughly 30&ndash;35% of
          traditional search funds have been raised by partner teams. The proportion has
          remained relatively stable over the past two decades, suggesting that the model
          is neither a passing trend nor a dominant one &mdash; it is a legitimate
          alternative that suits certain people and certain situations.
        </p>

        <h2 className={h2Class}>When to consider a partner</h2>
        <p>
          Not every searcher needs a partner, and adding one purely out of fear or
          convenience is a recipe for trouble. The decision should be driven by a clear
          strategic rationale:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Complementary skills:</strong> You have deep financial expertise but
            limited operating experience, and your potential partner is the opposite. The
            combination creates a team that is stronger than either individual.
          </li>
          <li>
            <strong>Larger or more complex targets:</strong> You plan to acquire a business
            that genuinely requires two senior leaders from day one &mdash; for example, a
            company with multiple locations, a complex sales organization, or operations
            that span different geographies.
          </li>
          <li>
            <strong>Risk sharing:</strong> In a{" "}
            <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">self-funded search</Link>,
            splitting the financial burden of the search phase between two people can make
            the model viable for individuals who could not bear the full cost alone.
          </li>
          <li>
            <strong>Emotional resilience:</strong> The search is psychologically demanding.
            Having a committed partner who shares the ups and downs can reduce burnout and
            improve decision-making under stress.
          </li>
          <li>
            <strong>Investor preference:</strong> Some investors actively favor partner
            teams for their redundancy and breadth of skills. If your target investor base
            values partnerships, the model may help you raise capital more efficiently.
          </li>
        </ul>
        <p>
          Conversely, you should <em>not</em> take on a partner simply because you lack
          confidence, because a friend also wants to do a search fund, or because you
          assume two is automatically better than one. A poorly matched partnership creates
          more problems than it solves.
        </p>

        <h2 className={h2Class}>How to structure the partnership</h2>

        <h3 className={h3Class}>Equity split</h3>
        <p>
          In a traditional solo search fund, the searcher typically receives 20&ndash;25%
          of the acquired company&rsquo;s equity, vesting over time. In a partner search,
          the total searcher equity pool remains roughly the same &mdash; 20&ndash;30% &mdash;
          but is split between the two partners. The most common arrangements are:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Equal split (50/50 of the searcher pool):</strong> Each partner receives
            10&ndash;15% of total company equity. This is the default when both partners
            contribute equally to the search and will hold equivalent roles post-acquisition.
          </li>
          <li>
            <strong>Unequal split (60/40 or 55/45):</strong> When one partner brings
            meaningfully more experience, capital, or will take the senior operating role
            (CEO vs. COO), an unequal split can reflect those differences. The key is that
            both parties agree the split is fair <em>before</em> the search begins.
          </li>
        </ul>
        <p>
          For a deeper look at how equity is structured across the full cap table, including
          investor step-ups and vesting schedules, see our guide to{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">cap tables and equity structures</Link>.
        </p>

        <h3 className={h3Class}>Role definition: co-CEO vs. CEO/COO</h3>
        <p>
          How partners divide operational authority after the acquisition is one of the most
          consequential decisions they will make. There are two primary models:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Co-CEO structure:</strong> Both partners hold the CEO title and share
            strategic authority equally. Decisions are made jointly, and neither partner has
            formal authority over the other. This model works when both partners have
            equivalent experience, when the business has natural divisions (e.g., two
            product lines, two geographies) that each partner can own, and when both
            individuals have the temperament for consensus-based leadership.
          </li>
          <li>
            <strong>CEO/COO structure:</strong> One partner serves as CEO with ultimate
            decision-making authority; the other serves as COO (or CFO, CRO, or another
            C-suite title) with ownership of a specific operational domain. This model
            works when one partner is the natural external leader (investor relations,
            board management, strategy) and the other excels at internal operations
            (process improvement, team management, financial controls).
          </li>
        </ol>
        <p>
          The CEO/COO model is generally more sustainable over the long term. Co-CEO
          structures can work in the early years when partners are deeply aligned, but
          they often break down as the business grows and decisions become more complex.
          Employees, customers, and board members prefer knowing who has the final word.
          If you choose the co-CEO model, build an explicit decision-making framework
          (more on this below) to prevent paralysis.
        </p>

        <h3 className={h3Class}>Decision-making framework</h3>
        <p>
          Every partnership needs a clear protocol for resolving disagreements. Without
          one, even minor disputes can escalate into full-blown conflicts that paralyze
          the business. Effective frameworks typically include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Domain authority:</strong> Each partner has final say over decisions
            within their defined area of responsibility. The partner who owns sales decides
            on pricing strategy; the partner who owns operations decides on vendor
            selection.
          </li>
          <li>
            <strong>Escalation protocol:</strong> For decisions that cross domains or
            involve major strategic commitments (acquisitions, large capital expenditures,
            key hires), define a process: discussion, data gathering, a structured debate,
            and if consensus is not reached, a tiebreaker mechanism.
          </li>
          <li>
            <strong>Tiebreaker:</strong> The tiebreaker could be the CEO (in a CEO/COO
            structure), a trusted board member, or a pre-agreed third party. The point is
            that both partners know, before a conflict arises, how it will be resolved.
          </li>
          <li>
            <strong>Board involvement:</strong> For an overview of how boards function in
            search fund governance, see our guide to{" "}
            <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board governance</Link>.
            In a partnership, the board plays an even more important role as a mediating
            body that can help resolve partner disagreements constructively.
          </li>
        </ul>

        <h2 className={h2Class}>Legal agreements: the business prenup</h2>
        <p>
          A search fund partnership without a robust operating agreement is like a marriage
          without a prenup &mdash; everything is fine until it isn&rsquo;t. The legal
          documents that govern a partnership should be drafted at the very beginning of
          the relationship, when goodwill is high and the incentive to be fair is
          strongest. Waiting until a conflict arises to define the rules is a guaranteed
          path to a messy and expensive breakdown.
        </p>

        <h3 className={h3Class}>Key provisions of the operating agreement</h3>
        <ul className={ulClass}>
          <li>
            <strong>Equity allocation and vesting:</strong> How the searcher equity pool
            is split, what vesting schedule applies to each partner, and whether vesting
            accelerates in certain scenarios (e.g., termination without cause).
          </li>
          <li>
            <strong>Roles and responsibilities:</strong> A written description of each
            partner&rsquo;s operational domain, reporting lines, and authority boundaries.
          </li>
          <li>
            <strong>Compensation:</strong> Salary, bonus structure, and any differences
            between partners. For context on standard compensation benchmarks, see our
            guide to{" "}
            <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">searcher compensation</Link>.
          </li>
          <li>
            <strong>Buyout provisions:</strong> If one partner wants to leave or must be
            removed, how is their equity valued and purchased? Common mechanisms include
            fair market value appraisals, formula-based pricing (e.g., a multiple of
            trailing EBITDA), and installment payment terms.
          </li>
          <li>
            <strong>Non-compete and non-solicitation:</strong> What restrictions apply if
            a partner departs? These clauses protect the remaining partner and the
            business from competitive harm.
          </li>
          <li>
            <strong>Dissolution triggers:</strong> Under what circumstances can the
            partnership be dissolved entirely? Common triggers include mutual agreement,
            failure to acquire within a specified timeframe, breach of fiduciary duty,
            or a material change in personal circumstances (e.g., relocation, health
            issues).
          </li>
          <li>
            <strong>Dispute resolution:</strong> Mediation first, then binding
            arbitration if mediation fails. Litigation should be the absolute last resort
            &mdash; it is slow, expensive, and destructive to both the partnership and
            the business.
          </li>
        </ul>
        <p>
          Engage experienced search fund legal counsel to draft these agreements. Generic
          partnership templates are insufficient for the specific complexities of search
          fund economics, investor rights, and vesting structures.
        </p>

        <h2 className={h2Class}>Complementary skill sets: what to look for</h2>
        <p>
          The most successful search fund partnerships are built on genuine
          complementarity &mdash; not on two people who are good at the same things. The
          ideal partner brings strengths where you have gaps, and vice versa. Common
          complementary pairings include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Finance &amp; operations:</strong> One partner with deep financial
            modeling, M&amp;A, and capital markets experience; the other with hands-on
            operating experience in supply chain, manufacturing, or service delivery.
          </li>
          <li>
            <strong>Sales &amp; technology:</strong> One partner who excels at revenue
            generation, customer relationships, and business development; the other who
            can drive digital transformation, systems implementation, and data analytics.
          </li>
          <li>
            <strong>Strategy &amp; execution:</strong> One partner who is a strong
            strategic thinker and external communicator (board management, investor
            relations, M&amp;A); the other who is an exceptional executor and team builder
            (process improvement, talent management, culture development).
          </li>
          <li>
            <strong>Industry expertise &amp; general management:</strong> One partner with
            deep domain knowledge in the target industry; the other with broad
            leadership skills transferable across sectors. This pairing is especially
            valuable when acquiring a technically complex business where credibility with
            the existing team requires sector-specific knowledge.
          </li>
        </ul>
        <p>
          Beyond hard skills, partners should assess their compatibility on work style,
          risk tolerance, time horizon, and personal values. Misalignment on any of these
          dimensions will eventually surface as conflict, typically at the worst possible
          moment.
        </p>

        <h2 className={h2Class}>Managing partner dynamics</h2>
        <p>
          Even the best-structured partnerships require ongoing maintenance. The
          pressures of searching for, acquiring, and operating a business will test any
          relationship. Partners who proactively invest in the health of their working
          relationship tend to outperform those who assume things will take care of
          themselves.
        </p>

        <h3 className={h3Class}>Communication cadence</h3>
        <p>
          Establish a regular rhythm of structured communication that goes beyond the
          daily operational back-and-forth. Many successful partnerships hold a weekly
          one-on-one meeting dedicated exclusively to the partnership itself &mdash; not
          the business, not the deal pipeline, but how the two partners are working
          together. Topics include decision-making friction, workload balance, personal
          stress levels, and any unspoken concerns. This practice prevents small
          irritations from compounding into major rifts.
        </p>

        <h3 className={h3Class}>Transparent financial management</h3>
        <p>
          Both partners should have full visibility into all financial matters &mdash;
          search fund expenses, personal compensation, investor communications, and
          eventually the acquired company&rsquo;s financial performance. Financial
          opacity, even if unintentional, erodes trust faster than almost anything else
          in a partnership.
        </p>

        <h3 className={h3Class}>Adapting roles over time</h3>
        <p>
          The roles that make sense during the search phase may not be the right roles
          during the operating phase. During the search, both partners are typically
          focused on deal sourcing, evaluation, and investor relations. After the
          acquisition, the business may need one partner to focus entirely on sales
          while the other focuses on operations, or one may need to manage a complex
          integration while the other maintains continuity with the existing team.
          Build flexibility into the partnership agreement and revisit role definitions
          at least annually.
        </p>

        <h2 className={h2Class}>The investor perspective on partnerships</h2>
        <p>
          Understanding how{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">search fund investors</Link>{" "}
          evaluate partner teams is essential for anyone considering this model. Investor
          perspectives on partnerships are nuanced and often divided:
        </p>

        <h3 className={h3Class}>What investors like about partnerships</h3>
        <ul className={ulClass}>
          <li>
            <strong>Redundancy:</strong> If one partner faces a personal crisis, health
            issue, or simply burns out, the other can maintain continuity. In a solo
            search, losing the searcher means losing the entire investment.
          </li>
          <li>
            <strong>Broader skill coverage:</strong> A well-matched team can evaluate a
            wider range of deal opportunities and bring a more complete leadership package
            to the acquired company.
          </li>
          <li>
            <strong>Faster search:</strong> Two people sourcing deals, attending
            conferences, and meeting with brokers can compress the search timeline,
            reducing the total search capital burned before an acquisition.
          </li>
          <li>
            <strong>Better governance:</strong> Partners hold each other accountable in
            ways that a solo searcher, who may lack day-to-day peers, cannot replicate.
          </li>
        </ul>

        <h3 className={h3Class}>What investors worry about</h3>
        <ul className={ulClass}>
          <li>
            <strong>Partner conflict:</strong> The single greatest risk of the partner
            model. A partnership breakdown post-acquisition can destabilize the entire
            business, alienate employees, and destroy value.
          </li>
          <li>
            <strong>Diluted economics:</strong> The same equity pool is split two ways,
            meaning each partner has less individual upside. Some investors worry this
            reduces motivation, particularly in the later years of the operating phase
            when the grind of running a small business can wear on both partners.
          </li>
          <li>
            <strong>Decision-making speed:</strong> Partnerships can slow down
            decision-making, particularly in the co-CEO model where every major choice
            requires alignment between two strong personalities.
          </li>
          <li>
            <strong>Higher burn rate:</strong> Two salaries during the search phase mean
            higher search capital requirements or shorter runway with the same amount
            of capital.
          </li>
        </ul>
        <p>
          To win over skeptical investors, partner teams must demonstrate genuine
          complementarity, a proven ability to work together (ideally evidenced by prior
          professional collaboration), and a clear, documented framework for roles,
          decision-making, and conflict resolution.
        </p>

        <h2 className={h2Class}>Common failure modes</h2>
        <p>
          Understanding how partnerships fail is just as important as understanding how
          they succeed. The most common failure patterns include:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Overlapping skills, not complementary ones:</strong> Two former
            investment bankers who both want to focus on deal analysis and neither wants
            to lead operations. The partnership adds capacity but not capability.
          </li>
          <li>
            <strong>Undiscussed expectations:</strong> Partners assume alignment on
            lifestyle preferences (hours worked, travel, relocation), financial goals
            (when to take distributions vs. reinvest), and exit timeline (5 years vs.
            10 years) without explicitly confirming it. These hidden misalignments
            surface painfully during the operating phase.
          </li>
          <li>
            <strong>Ego and title sensitivity:</strong> Both partners want to be CEO, and
            neither is willing to accept the COO role. This signals a deeper problem:
            if neither partner can subordinate their ego for the good of the enterprise,
            the partnership is unlikely to survive the inevitable stresses of running a
            business.
          </li>
          <li>
            <strong>No exit mechanism:</strong> Partners who skip the buyout provisions
            in their operating agreement find themselves trapped in a dysfunctional
            partnership with no clean way out. One partner wants to leave, but there is
            no agreed-upon valuation method, no funding mechanism for a buyout, and no
            process for an orderly transition.
          </li>
          <li>
            <strong>Uneven effort:</strong> One partner works 60-hour weeks while the
            other works 40. One partner relocates to be near the business while the
            other stays in a major city. These imbalances breed resentment over time,
            especially when equity is split equally.
          </li>
          <li>
            <strong>Friendship over function:</strong> Choosing a partner because they
            are your closest friend, your MBA classmate, or your former colleague &mdash;
            rather than because they bring genuinely complementary skills and a
            professional temperament suited to partnership. The best business partner
            and the best friend are rarely the same person.
          </li>
        </ol>

        <h2 className={h2Class}>Co-CEO vs. CEO/COO: a deeper comparison</h2>
        <p>
          The choice between co-CEO and CEO/COO structures deserves careful analysis,
          as it shapes nearly every aspect of how the partnership functions
          post-acquisition.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-apple-gray-300">
                <th className="text-left py-2 pr-4 text-apple-black font-medium">Dimension</th>
                <th className="text-left py-2 pr-4 text-apple-black font-medium">Co-CEO</th>
                <th className="text-left py-2 text-apple-black font-medium">CEO/COO</th>
              </tr>
            </thead>
            <tbody className="text-apple-gray-700">
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">Decision speed</td>
                <td className="py-2 pr-4">Slower &mdash; requires alignment</td>
                <td className="py-2">Faster &mdash; clear authority</td>
              </tr>
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">External clarity</td>
                <td className="py-2 pr-4">Can confuse employees, customers</td>
                <td className="py-2">Clear single point of contact</td>
              </tr>
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">Partner satisfaction</td>
                <td className="py-2 pr-4">Equal status reduces ego friction</td>
                <td className="py-2">Requires COO to accept subordination</td>
              </tr>
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">Investor preference</td>
                <td className="py-2 pr-4">Mixed &mdash; some are skeptical</td>
                <td className="py-2">Generally preferred</td>
              </tr>
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">Scalability</td>
                <td className="py-2 pr-4">Harder as org grows</td>
                <td className="py-2">Scales naturally</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Conflict risk</td>
                <td className="py-2 pr-4">Higher &mdash; ambiguous authority</td>
                <td className="py-2">Lower &mdash; defined hierarchy</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          If you choose the co-CEO model, mitigate its weaknesses by clearly dividing
          the business into domains (e.g., Partner A owns revenue; Partner B owns
          operations and finance), documenting who has final authority on which types
          of decisions, and presenting a unified front to employees and external
          stakeholders at all times.
        </p>

        <h2 className={h2Class}>Case examples: partnerships in practice</h2>

        <h3 className={h3Class}>The complementary duo</h3>
        <p>
          Two MBA classmates &mdash; one with a background in management consulting and
          the other in software engineering &mdash; raised a traditional search fund
          together. They acquired a mid-market B2B services company generating $3M in
          EBITDA. The consulting partner took the CEO role, focusing on client
          relationships, business development, and investor relations. The engineering
          partner took the COO role, leading a digital transformation initiative that
          automated key workflows, built a client-facing dashboard, and reduced
          operational costs by 18% in the first two years. Neither partner could have
          achieved the same results alone. They exited after six years at 4.8x MOIC.
        </p>

        <h3 className={h3Class}>The co-CEO challenge</h3>
        <p>
          Two former private equity associates launched a search fund as equal partners
          with a co-CEO structure. During the search phase, the model worked well: they
          divided deal sourcing by geography and evaluated targets collaboratively. After
          acquiring a healthcare services company, however, the co-CEO structure created
          friction. Employees were confused about reporting lines. Strategic decisions
          stalled when the partners disagreed. After 18 months of mounting tension, their
          board intervened and recommended a restructuring: one partner became CEO, the
          other became CFO with a defined operational domain. Performance improved
          significantly after the transition, but the first 18 months of lost momentum
          cost them at least a year of growth.
        </p>

        <h3 className={h3Class}>The friendship fallout</h3>
        <p>
          Two close friends from their undergraduate years decided to pursue a
          self-funded search together. They had no written operating agreement and split
          responsibilities informally. When they identified a target company, they
          disagreed on valuation: one partner wanted to bid aggressively, the other
          wanted to walk away. Without a decision-making framework or tiebreaker
          mechanism, the dispute escalated into a personal conflict. The partnership
          dissolved before they ever acquired a business, and the friendship did not
          survive either. A formal operating agreement with a dispute resolution clause
          could have saved both the partnership and the friendship.
        </p>

        <h2 className={h2Class}>Building a partnership that lasts</h2>
        <p>
          If you&rsquo;ve decided that the operating partner model is right for you, take
          these steps to maximize your chances of success:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Test the relationship first:</strong> Before committing to a multi-year
            partnership, work together on a smaller project &mdash; a consulting
            engagement, a real estate deal, a detailed business plan. Observe how your
            potential partner handles disagreement, stress, and ambiguity.
          </li>
          <li>
            <strong>Have the hard conversations early:</strong> Discuss compensation
            expectations, work-life balance, relocation willingness, exit timeline, risk
            tolerance, and what happens if one partner wants out. Do this before you
            raise a single dollar of search capital.
          </li>
          <li>
            <strong>Draft the operating agreement before you start:</strong> Engage a
            lawyer experienced in search fund partnerships. Document equity splits,
            roles, decision authority, buyout provisions, and dispute resolution. Refer
            to our guide on{" "}
            <Link href="/learn/getting-started" className="text-apple-accent hover:underline">getting started with search funds</Link>{" "}
            for an overview of the foundational steps.
          </li>
          <li>
            <strong>Define roles clearly:</strong> Decide whether you will operate as
            co-CEOs or CEO/COO. Write down who owns which domain. Revisit this division
            after the acquisition when the actual needs of the business become clear.
          </li>
          <li>
            <strong>Communicate relentlessly:</strong> Schedule dedicated partnership
            check-ins separate from business operations meetings. Address friction
            immediately rather than letting it fester.
          </li>
          <li>
            <strong>Leverage the board:</strong> Give your board of directors an explicit
            role in monitoring the health of the partnership. A trusted board member who
            can mediate disagreements is invaluable.
          </li>
          <li>
            <strong>Plan for evolution:</strong> Accept that roles, contributions, and
            even the partnership itself may need to change as the business grows. Build
            flexibility into your agreements and your mindset.
          </li>
        </ol>

        <h2 className={h2Class}>Is the operating partner model right for you?</h2>
        <p>
          The operating partner model is not inherently better or worse than the solo
          search &mdash; it is different. It suits people who genuinely thrive in
          collaborative leadership, who have identified a partner with truly
          complementary skills, and who are willing to invest the time and legal expense
          to structure the partnership properly from the start.
        </p>
        <p>
          If you are considering this path, start by honestly assessing whether you need
          a partner for strategic reasons or simply want one for emotional comfort. Read
          our guides on{" "}
          <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">searcher compensation</Link>{" "}
          to understand the economic trade-offs of splitting the equity pool, and on{" "}
          <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board governance</Link>{" "}
          to understand how a strong board can support &mdash; or replace &mdash; some
          of the benefits that a partner provides.
        </p>
        <p>
          The best search fund partnerships are intentional, well-structured, and built
          on a foundation of complementary skills, shared values, and mutual respect.
          If you find the right partner and do the hard work of structuring the
          relationship properly, the operating partner model can give you a meaningful
          edge in one of the most challenging and rewarding journeys in entrepreneurship.
        </p>
      </div>
    </article>
  );
}
