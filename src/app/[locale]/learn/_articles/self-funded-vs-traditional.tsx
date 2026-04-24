import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SelfFundedVsTraditionalArticle() {
  return (
    <article>
      <h1 className={h1Class}>Self-Funded Search vs. Traditional Search Fund</h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          Aspiring <Link href="/learn/getting-started" className="text-apple-accent hover:underline">search fund</Link> entrepreneurs face a fundamental choice: raise
          a traditional search fund with investor capital, or self-fund the search
          from personal resources. Each path has distinct advantages, risks, and
          economics. This guide helps you decide which model is right for you.
        </p>

        <h2 className={h2Class}>Traditional search fund</h2>
        <ul className={ulClass}>
          <li><strong>Search capital:</strong> $400K-$600K raised from 10-20 investors covers salary, expenses, and deal costs for 18-24 months.</li>
          <li><strong>Searcher equity:</strong> Typically 20-25% of the acquired company, vesting over 4-5 years. See our guide on <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">searcher compensation</Link> for more detail.</li>
          <li><strong>Investor support:</strong> Access to experienced board members, mentorship, and a built-in network for acquisition financing. Learn how to <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">find search fund investors</Link>.</li>
          <li><strong>Structure:</strong> Investors have the right of first refusal on the acquisition equity.</li>
          <li><strong>Risk:</strong> Lower personal financial risk. If no acquisition is made, the investor capital is returned (net of expenses).</li>
        </ul>

        <h2 className={h2Class}>Detailed equity structure: traditional model</h2>
        <p>
          The economics of a traditional search fund follow a well-established
          template that has evolved over three decades since the model was
          pioneered at Stanford GSB. Understanding the precise equity mechanics
          is critical before committing to this path.
        </p>
        <p>
          In the search phase, investors purchase &ldquo;units&rdquo; in the search fund
          entity. Each unit typically costs $35,000-$50,000, and the fund
          raises 10-20 units from individual and institutional investors.
          This capital covers the searcher&apos;s salary (typically $80,000-$120,000
          per year), health insurance, travel, legal fees, CRM software, and
          other search expenses over the 18-24 month search window.
        </p>
        <p>
          When an acquisition target is identified, search investors have a
          right of first refusal to invest in the acquisition equity. Their
          search capital converts into acquisition equity at a step-up
          (typically 1.5x), rewarding them for the higher-risk search-phase
          investment. The searcher receives equity in two tranches: the first
          tranche (typically about 8-10% of total equity) vests upon closing
          the acquisition and compensates for the risk taken during the search.
          The second and third tranches (an additional 10-15%) vest over
          4-5 years based on continued employment and/or performance
          milestones, typically measured against investor IRR thresholds
          (commonly 25-35% IRR gates).
        </p>
        <p>
          The total searcher equity of 20-25% is meaningful but substantially
          diluted compared to what a self-funded searcher might retain. However,
          the traditional model compensates for this dilution with lower
          personal risk, a salary during the search, and access to a
          network of experienced operators and investors who can add
          significant value during the acquisition and operating phases.
        </p>

        <h2 className={h2Class}>Self-funded search</h2>
        <ul className={ulClass}>
          <li><strong>Search capital:</strong> Funded from personal savings or part-time work. Typically $50K-$150K in out-of-pocket costs.</li>
          <li><strong>Searcher equity:</strong> Potentially 50-80% of the acquired company, depending on deal structure and investor involvement. See our breakdown of <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">cap tables and equity structures</Link> for both models.</li>
          <li><strong>Flexibility:</strong> No obligation to specific investors. Freedom to pursue any deal size, structure, or timeline.</li>
          <li><strong>Structure:</strong> Acquisition financing raised on a deal-by-deal basis using SBA loans (US), bank debt, and/or investor equity.</li>
          <li><strong>Risk:</strong> Higher personal financial risk. The searcher bears all costs if no deal closes.</li>
        </ul>

        <h2 className={h2Class}>Detailed equity structure: self-funded model</h2>
        <p>
          The self-funded model flips the economics in favor of the searcher
          at the cost of significantly higher personal risk. Because the
          searcher bears all search expenses personally, there is no
          search-phase dilution. The equity structure is negotiated fresh
          for each deal, giving the searcher maximum flexibility.
        </p>
        <p>
          In a typical self-funded acquisition, the searcher retains
          60-100% of the equity, depending on how much outside capital
          is needed for the acquisition itself. A common structure for a
          $2M acquisition might look like this: $1.2M in SBA 7(a) debt
          (60% of purchase price), $400K in seller financing (20%),
          $200K in searcher equity from personal savings or home equity
          (10%), and $200K from a small group of equity co-investors (10%).
          In this scenario, the searcher owns 90% of the business on
          day one - a dramatically different outcome than the 20-25%
          ownership in a traditional model.
        </p>
        <p>
          Even in deals requiring more outside equity, self-funded searchers
          typically retain 50-70% ownership. The key is that equity investors
          in self-funded deals are investing in a specific, identified
          company rather than a blind pool, which reduces their risk and
          justifies a smaller equity share. Many self-funded searchers
          also negotiate preferred return structures (8-10% annual
          preferred return to investors) rather than giving up large
          equity percentages, preserving their upside while still
          compensating investors fairly.
        </p>

        <h2 className={h2Class}>Fundraising timeline differences</h2>
        <p>
          The fundraising processes for each model differ substantially
          in timing, effort, and relationship dynamics.
        </p>

        <h3 className={h3Class}>Traditional fund timeline</h3>
        <p>
          Raising a traditional search fund typically takes 3-6 months of
          dedicated effort. The searcher must develop an investment thesis,
          build a pitch deck, identify potential investors from the
          established search fund investor community, and conduct a
          roadshow of meetings. Most traditional searchers begin this
          process during or immediately after their MBA program, using
          school alumni networks and search fund conferences (Stanford
          Search Fund Conference, IESE, INSEAD) to build relationships
          with investors.
        </p>
        <p>
          The timeline is relatively predictable: 1-2 months of preparation,
          2-3 months of active fundraising meetings, and 1-2 months to
          finalize legal documents and close the fund. After closing,
          the 18-24 month search clock begins, creating a sense of
          urgency that can be both motivating and constraining.
        </p>

        <h3 className={h3Class}>Self-funded timeline</h3>
        <p>
          Self-funded searchers skip the fundraising phase entirely, which
          can save 3-6 months at the front end. However, they face a
          different fundraising challenge: once they identify an
          acquisition target, they must assemble the capital stack
          (bank debt, SBA loan, seller financing, equity co-investors)
          on a deal-specific basis. This deal-level fundraising typically
          takes 60-120 days and introduces execution risk - if financing
          falls through, the searcher may lose the deal.
        </p>
        <p>
          Many experienced self-funded searchers mitigate this risk by
          pre-building relationships with lenders and equity co-investors
          before they find a deal. They obtain SBA pre-qualification,
          establish credit lines with local banks, and cultivate a small
          group of high-net-worth individuals who have expressed interest
          in co-investing. This preparation compresses the deal-level
          fundraising timeline to 30-60 days, bringing it closer to the
          traditional model&apos;s experience of having committed capital ready.
        </p>

        <h2 className={h2Class}>Deal size implications</h2>
        <p>
          The choice between traditional and self-funded search has direct
          implications for the size of business you can pursue.
        </p>

        <h3 className={h3Class}>Traditional: $5M-$30M enterprise value</h3>
        <p>
          Traditional search funds typically target acquisitions in the
          $5M-$30M enterprise value range. The lower bound reflects the
          need for sufficient scale to support a full-time CEO salary,
          a board of directors, and the investor return expectations that
          come with the traditional model. The upper bound is constrained
          by the total equity check that search fund investors are
          comfortable writing.
        </p>
        <p>
          Within this range, the sweet spot for most traditional search
          funds is $8M-$20M. Companies in this band are typically large
          enough to have professional management layers, diversified
          revenue streams, and stable cash flows, but small enough to
          be overlooked by private equity firms seeking larger platforms.
          These businesses commonly generate $1.5M-$5M in annual EBITDA
          and are valued at 4-6x EBITDA depending on the industry and
          growth profile.
        </p>

        <h3 className={h3Class}>Self-funded: $1M-$5M enterprise value</h3>
        <p>
          Self-funded searchers operate in a smaller but often less
          competitive segment. Deal sizes of $1M-$5M are common, with
          SBA 7(a) loans (which cap at $5M) serving as the primary
          financing tool in the US market. These businesses typically
          generate $300K-$1.5M in annual SDE (seller&apos;s discretionary
          earnings) or EBITDA.
        </p>
        <p>
          While smaller, these businesses can still produce excellent
          returns for the searcher due to higher ownership percentages.
          A self-funded searcher who acquires a business generating $500K
          in annual SDE for $1.5M (3x SDE) and owns 80% of the equity is
          earning $400K in annual cash flow on perhaps $200K in personal
          investment - a fundamentally different wealth-building equation
          than a traditional searcher earning 20% of a larger but more
          used entity. The trade-off is that smaller businesses tend
          to be more owner-dependent, less diversified, and more
          vulnerable to single-customer or single-employee risk.
        </p>

        <h2 className={h2Class}>Key differences at a glance</h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-apple-gray-300">
                <th className="text-left py-2 pr-4 text-apple-black font-medium">Factor</th>
                <th className="text-left py-2 pr-4 text-apple-black font-medium">Traditional</th>
                <th className="text-left py-2 text-apple-black font-medium">Self-funded</th>
              </tr>
            </thead>
            <tbody className="text-apple-gray-700">
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Searcher equity</td><td className="py-2 pr-4">20-25%</td><td className="py-2">50-80%</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Personal financial risk</td><td className="py-2 pr-4">Low</td><td className="py-2">High</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Investor support</td><td className="py-2 pr-4">Strong</td><td className="py-2">Variable</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Deal size</td><td className="py-2 pr-4">$5M-$30M</td><td className="py-2">$1M-$10M</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Timeline flexibility</td><td className="py-2 pr-4">18-24 months</td><td className="py-2">Unlimited</td></tr>
              <tr><td className="py-2 pr-4">MBA required?</td><td className="py-2 pr-4">Usually</td><td className="py-2">No</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className={h2Class}>Success rates and performance data</h2>
        <p>
          Data on search fund outcomes provides useful context for
          choosing between models, though it should be interpreted
          carefully given differences in sample sizes and reporting
          methodologies.
        </p>
        <p>
          Stanford GSB&apos;s research on traditional search funds - the most
          thorough dataset available - shows that approximately 70%
          of traditional searchers successfully acquire a business. Of
          those who acquire, roughly 65-70% generate positive returns for
          investors, and the asset class as a whole has produced aggregate
          returns of approximately 30-35% IRR across multiple decades.
          However, these returns are heavily skewed by top performers:
          the median outcome is significantly lower than the mean, and
          roughly a third of acquisitions result in a partial or total
          loss of investor capital.
        </p>
        <p>
          Self-funded search data is less systematically tracked, but
          available evidence from practitioners and communities (such as
          the Searchfunder.com community and ETA conferences) suggests
          similar acquisition success rates for committed searchers.
          The key difference lies in the return profile: self-funded
          searchers who succeed tend to build substantial personal wealth
          more rapidly due to higher ownership stakes, but they also
          bear the full downside when deals go poorly. Some self-funded
          searchers report generating $300K-$500K in annual cash flow
          within 2-3 years of acquisition, a level of income that would
          be unusual in a traditional model where the searcher&apos;s
          compensation is more heavily weighted toward long-term equity
          appreciation.
        </p>

        <h2 className={h2Class}>Hybrid models: the middle ground</h2>
        <p>
          The binary choice between traditional and self-funded is
          increasingly blurred by hybrid approaches that combine elements
          of both models.
        </p>

        <h3 className={h3Class}>Pledge funds</h3>
        <p>
          In a pledge fund structure, the searcher secures soft commitments
          from investors who pledge to invest in a future acquisition but
          do not fund the search itself. The searcher self-funds the search
          phase (bearing that cost personally) but has a group of committed
          investors ready to write equity checks once a deal is found. This
          model gives the searcher higher equity ownership (since there is
          no search-phase dilution) while still providing the comfort of
          pre-committed acquisition capital. The searcher typically retains
          30-50% equity - meaningfully more than the traditional 20-25%
          but less than a fully self-funded acquisition.
        </p>

        <h3 className={h3Class}>Independent sponsors</h3>
        <p>
          The independent sponsor (or &ldquo;fundless sponsor&rdquo;) model
          has gained significant traction, particularly in the lower
          middle market. Independent sponsors source deals without a
          committed fund, then assemble the capital from private equity
          firms, family offices, or high-net-worth individuals on a
          deal-by-deal basis. Unlike self-funded searchers, independent
          sponsors typically target larger deals ($5M-$50M enterprise value)
          and structure economics that include a promote (carried interest
          of 15-25% above a preferred return hurdle), management fees,
          and board seats. The independent sponsor model is closer in
          spirit to private equity but shares the self-funded searcher&apos;s
          need to source deals independently and arrange capital without
          a permanent fund.
        </p>

        <h3 className={h3Class}>Partial-fund models</h3>
        <p>
          Some searchers raise a smaller search fund ($150K-$250K) from
          just 3-5 investors, covering basic expenses for 12-18 months
          without the full salary and support structure of a traditional
          fund. This partial-fund approach reduces personal financial risk
          while keeping dilution lower than the full traditional model.
          The searcher may supplement this with part-time consulting work
          to cover living expenses, extending the effective search runway
          without additional dilution.
        </p>

        <h2 className={h2Class}>Which path is right for you? A decision framework</h2>
        <p>
          Choose the <strong>traditional model</strong> if you value mentorship,
          want to pursue larger deals, and prefer lower personal financial risk.
          Choose the <strong>self-funded model</strong> if you want maximum equity
          retention, flexibility on timing and deal criteria, and are comfortable
          with higher personal risk.
        </p>
        <p>
          Beyond these broad guidelines, consider the following specific
          factors when making your decision:
        </p>
        <ul className={ulClass}>
          <li><strong>Financial runway:</strong> Do you have $100K-$200K in liquid savings or access to capital (home equity, family support) to sustain 12-24 months of searching without income? If not, the traditional model provides essential financial support.</li>
          <li><strong>Network and experience:</strong> Do you have an existing network of lenders, investors, and advisors from a prior career in finance, operations, or entrepreneurship? Self-funded searchers who succeed tend to have strong pre-existing professional networks. First-time professionals benefit more from the traditional model&apos;s built-in network.</li>
          <li><strong>Risk tolerance:</strong> Can you psychologically and financially handle the scenario where you spend 18 months and $150K of personal savings and fail to close a deal? If that outcome would be devastating, the traditional model&apos;s risk-sharing structure is the prudent choice.</li>
          <li><strong>Target deal size:</strong> Are you targeting businesses with $500K-$1.5M in earnings (self-funded territory) or $2M-$5M in EBITDA (traditional territory)? Your target deal size may dictate the model more than personal preference.</li>
          <li><strong>Geographic market:</strong> In the US, SBA 7(a) loans make self-funded search highly viable. In Europe, where government-backed acquisition financing varies by country, the traditional model&apos;s equity base may be more important for deal execution.</li>
          <li><strong>Career stage:</strong> Recent MBA graduates are the natural profile for traditional search funds. Mid-career professionals with industry expertise, savings, and networks are often better suited for self-funded search.</li>
          <li><strong>Control preference:</strong> How important is it to you to have full decision-making authority without a board of investor-directors? Self-funded searchers enjoy near-complete autonomy; traditional searchers operate with active investor oversight.</li>
        </ul>
        <p>
          There is no universally correct answer. Both models have produced
          life-changing outcomes for searchers, and both have resulted in
          failures. The most important factor is honest self-assessment:
          understanding your financial position, risk tolerance, network,
          and goals, and choosing the model that aligns with your personal
          circumstances rather than chasing the one that looks best on paper.
        </p>

        <p>
          For additional context, explore our guides on{" "}
          <Link href="/learn/creating-icp-acquisitions" className="text-apple-accent hover:underline">
            building your ideal company profile
          </Link>{" "}
          and the{" "}
          <Link href="/learn/pledge-fund-model" className="text-apple-accent hover:underline">
            pledge fund model
          </Link>{" "}
          as a hybrid alternative.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>How much does it cost to self-fund a search?</h3>
        <p>
          Most self-funded searchers spend $50K&ndash;$150K out of pocket over
          12&ndash;24 months. This covers living expenses (if not working part-time),
          CRM software, legal fees, travel, and deal evaluation costs. Some
          searchers reduce this by maintaining part-time consulting income or
          working from a home office. Unlike the traditional model, there is no
          salary during the search, so personal financial runway is critical.
        </p>

        <h3 className={h3Class}>Can I switch from self-funded to traditional mid-search?</h3>
        <p>
          It is difficult to switch models once you have started. Traditional
          investors expect to fund the search from day one and receive the
          corresponding equity terms. However, some searchers who begin
          self-funded later bring in equity co-investors for a specific deal
          using a{" "}
          <Link href="/learn/pledge-fund-model" className="text-apple-accent hover:underline">
            pledge fund
          </Link>{" "}
          structure, which offers a practical middle ground.
        </p>

        <h3 className={h3Class}>What role does SBA financing play in self-funded acquisitions?</h3>
        <p>
          SBA 7(a) loans are the backbone of most self-funded deals in the
          United States. They allow up to $5M in financing with a 10-year
          term and relatively low down payments (typically 10&ndash;20%).
          This government-backed debt significantly reduces the equity
          required from the searcher and co-investors, making it possible
          to acquire a business with modest personal capital. Outside the
          US, equivalent programs vary by country.
        </p>
      </div>
    </article>
  );
}
