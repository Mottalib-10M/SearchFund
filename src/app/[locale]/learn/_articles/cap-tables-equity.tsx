import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function CapTablesEquityArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund Economics: Cap Tables &amp; Equity</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Understanding <Link href="/learn/getting-started" className="text-apple-accent hover:underline">search fund</Link> economics is critical for both searchers and
          investors. The equity structure determines how value is shared across
          the search, acquisition, and operating phases. This guide breaks down
          the traditional search fund cap table, explains the step-up mechanism,
          walks through a worked example, and compares economics across fund models.
          If you are still exploring whether ETA is the right path, start with
          our <Link href="/learn/is-eta-right-for-you" className="text-apple-accent hover:underline">ETA self-assessment</Link>.
        </p>

        <h2 className={h2Class}>How equity works in a traditional search fund</h2>
        <p>
          A traditional search fund has two distinct capital raises: the search
          phase and the acquisition phase. Each creates a separate layer of equity,
          and the searcher&apos;s economics sit on top as an incentive structure
          designed to align interests with investors.
        </p>

        <h3 className={h3Class}>Search capital</h3>
        <p>
          The initial raise of &euro;400K-&euro;600K funds the searcher&apos;s salary,
          travel, deal expenses, and professional fees for 18-24 months. This
          capital is raised from 10-20 investors who each purchase units
          (typically &euro;30K-&euro;50K per unit). Search capital investors
          receive preferential rights to invest in the acquisition round.
        </p>

        <h3 className={h3Class}>The step-up</h3>
        <p>
          When an acquisition is identified, search capital converts into
          acquisition equity at a step-up, typically 1.5x. This means that for
          every &euro;1 of search capital invested, the investor receives &euro;1.50
          worth of acquisition equity. The step-up compensates search investors
          for the higher risk of funding the pre-deal search phase. For a full
          breakdown of how the step-up is documented, see our <Link href="/learn/search-fund-term-sheet" className="text-apple-accent hover:underline">term sheet guide</Link>. In some
          structures, the step-up is 2.0x, especially in competitive fundraising
          environments.
        </p>

        <h3 className={h3Class}>Acquisition equity</h3>
        <p>
          The equity portion of the acquisition financing is offered first to
          existing search investors (right of first refusal), then to new
          investors. The total equity check depends on the enterprise value and
          use used. Acquisition equity typically represents 30-50% of the
          total purchase price, with the remainder funded by debt.
        </p>

        <h3 className={h3Class}>Searcher equity (carried interest)</h3>
        <p>
          The searcher receives 20-30% of the equity in the acquired company,
          structured as carried interest. For a complete breakdown of salary and equity, see our guide to <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">searcher compensation</Link>. This equity typically vests in three
          tranches:
        </p>
        <ul className={ulClass}>
          <li><strong>Tranche 1 (1/3):</strong> Vests at closing of the acquisition.</li>
          <li><strong>Tranche 2 (1/3):</strong> Vests ratably over 3-4 years of operating the company.</li>
          <li><strong>Tranche 3 (1/3):</strong> Vests upon achieving performance targets (typically a minimum IRR to investors, often 25-35%).</li>
        </ul>
        <p>
          This three-tranche structure ensures the searcher is incentivized to
          find a deal (tranche 1), stay and operate it well (tranche 2), and
          deliver strong returns to investors (tranche 3).
        </p>

        <h2 className={h2Class}>Worked example: Traditional search fund cap table</h2>
        <p>
          Consider a searcher who raises &euro;500K in search capital from 15
          investors, then acquires a company for &euro;6M enterprise value using
          &euro;3.6M of debt and &euro;2.4M of equity. The search capital converts
          at a 1.5x step-up, and the searcher receives 25% carried interest.
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-apple-gray-300">
                <th className="text-left py-2 pr-4 text-apple-black font-medium">Stage</th>
                <th className="text-left py-2 pr-4 text-apple-black font-medium">Investors</th>
                <th className="text-left py-2 pr-4 text-apple-black font-medium">Searcher</th>
                <th className="text-left py-2 text-apple-black font-medium">Notes</th>
              </tr>
            </thead>
            <tbody className="text-apple-gray-700">
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">Search raise</td>
                <td className="py-2 pr-4">&euro;500K (100%)</td>
                <td className="py-2 pr-4">0%</td>
                <td className="py-2">15 investors, ~&euro;33K each</td>
              </tr>
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">Step-up at acquisition</td>
                <td className="py-2 pr-4">&euro;750K equity credit</td>
                <td className="py-2 pr-4">&mdash;</td>
                <td className="py-2">1.5x on &euro;500K search capital</td>
              </tr>
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">New acquisition equity</td>
                <td className="py-2 pr-4">&euro;1,650K additional</td>
                <td className="py-2 pr-4">&mdash;</td>
                <td className="py-2">Total equity = &euro;2.4M</td>
              </tr>
              <tr className="border-b border-apple-gray-100">
                <td className="py-2 pr-4">Post-close ownership</td>
                <td className="py-2 pr-4">75%</td>
                <td className="py-2 pr-4">25%</td>
                <td className="py-2">Searcher equity is carried interest</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">If 5x return (&euro;30M exit)</td>
                <td className="py-2 pr-4">&euro;22.5M</td>
                <td className="py-2 pr-4">&euro;7.5M</td>
                <td className="py-2">~10.5x MOIC for investors</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          In this example, investors deploy a total of &euro;2.15M in cash
          (&euro;500K search + &euro;1.65M acquisition equity) and own 75% of the
          company. The searcher deploys &euro;0 in cash but earns 25% of the
          equity through sweat equity. At a &euro;30M exit (5x enterprise value),
          investors receive &euro;22.5M on &euro;2.15M invested &mdash; a 10.5x
          gross multiple. The searcher receives &euro;7.5M.
        </p>

        <h3 className={h3Class}>Walking through the numbers step by step</h3>
        <p>
          Let us trace each dollar through the cap table to make the mechanics
          concrete. At the search close, the 15 investors collectively contribute
          &euro;500,000 and own 100% of the search fund entity. The searcher owns
          0% at this point - their economics come later through carried interest.
          This &euro;500,000 is the at-risk capital: if the searcher never finds
          a deal, investors lose their entire investment.
        </p>
        <p>
          When the searcher identifies the &euro;6M target company and negotiates
          the acquisition, the search capital converts at a 1.5x step-up. This
          means the &euro;500,000 of search capital is now treated as &euro;750,000
          worth of acquisition equity - a &euro;250,000 &ldquo;bonus&rdquo; that
          compensates search investors for the risk they took before a deal was
          identified. The remaining &euro;1,650,000 of acquisition equity is
          raised from both existing search investors (who have the right of first
          refusal) and potentially new co-investors. The total equity in the deal
          is now &euro;2,400,000, which represents 40% of the &euro;6M enterprise
          value. The other 60% - &euro;3,600,000 - is funded by senior debt.
        </p>
        <p>
          After closing, the searcher&apos;s 25% carried interest is layered on
          top. The investors collectively hold 75% of the company and the searcher
          holds 25%. Importantly, the searcher&apos;s 25% does not dilute the
          investors&apos; cash investment - it is additional equity created to
          incentivize the searcher. If the company grows to &euro;30M in
          enterprise value and is sold, the debt is repaid first, and the
          remaining equity value is split 75/25 between investors and the
          searcher.
        </p>

        <h2 className={h2Class}>How dilution works at each stage</h2>
        <p>
          Dilution is one of the most misunderstood concepts in search fund
          economics. Searchers who fail to model dilution scenarios before
          finalizing their cap table often find themselves with far less equity
          than they expected - or worse, they surprise their investors with
          unexpected ownership changes that erode trust.
        </p>

        <h3 className={h3Class}>Dilution at the search close</h3>
        <p>
          At the search close, no dilution occurs in the traditional sense because
          the searcher does not yet have equity. The investors own 100% of the
          search fund entity. However, the size of the search raise relative to
          the expected acquisition equity determines how much of the acquisition
          cap table will be &ldquo;consumed&rdquo; by the step-up. A larger search
          raise with a higher step-up leaves less room for new acquisition equity,
          which can limit the deal size or require a larger overall equity check.
        </p>

        <h3 className={h3Class}>Dilution at the acquisition close</h3>
        <p>
          The most significant dilution event occurs when the acquisition is
          financed. The searcher&apos;s carried interest (20-30%) is created at
          this point, reducing the investors&apos; economic ownership from 100%
          to 70-80%. New co-investors who participate in the acquisition round
          may also shift the relative ownership among investor groups. Search
          investors who exercise their right of first refusal maintain their
          proportional ownership; those who decline are diluted by the new
          capital coming in.
        </p>

        <h3 className={h3Class}>Management equity pool</h3>
        <p>
          After the acquisition, many search fund CEOs set aside an equity pool
          of 5-10% for key employees. This pool is essential for retaining and
          incentivizing the management team, but it dilutes both the searcher
          and the investors. A 10% management pool, carved from the post-close
          cap table, reduces the searcher&apos;s 25% to an effective 22.5% and
          the investors&apos; 75% to an effective 67.5%. This should be
          discussed and agreed upon with investors before closing the deal, not
          introduced as a surprise afterward.
        </p>

        <h3 className={h3Class}>Follow-on investment</h3>
        <p>
          If the acquired company needs additional capital for growth initiatives,
          bolt-on acquisitions, or to weather an unexpected downturn, a follow-on
          equity raise will dilute all existing shareholders. The terms of the
          follow-on - particularly the valuation at which new equity is issued - 
          determine whether the dilution is accretive or destructive to existing
          holders. Anti-dilution provisions in the original investment documents
          may protect some investors from unfavorable follow-on pricing, but
          these protections vary widely across search fund structures.
        </p>

        <h2 className={h2Class}>Self-funded search economics</h2>
        <p>
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">Self-funded searchers</Link> retain significantly more equity because they
          bear the search risk personally and raise acquisition capital on a
          deal-by-deal basis. A typical self-funded acquisition might look like:
        </p>
        <ul className={ulClass}>
          <li><strong>Search costs:</strong> &euro;50K-&euro;150K funded from personal savings.</li>
          <li><strong>Acquisition equity:</strong> Raised from investors for a specific deal &mdash; no step-up, no preferential rights from a search phase.</li>
          <li><strong>Searcher ownership:</strong> 50-80% depending on how much equity the searcher contributes personally and the negotiated carried interest.</li>
          <li><strong>Use:</strong> Often higher use of SBA loans (US) or government-backed lending (EU) to reduce the equity check.</li>
        </ul>
        <p>
          The tradeoff is clear: self-funded searchers keep more of the upside
          but absorb 100% of the downside risk during the search phase and
          typically have less investor support and mentorship.
        </p>

        <h3 className={h3Class}>Self-funded vs. traditional: A side-by-side cap table</h3>
        <p>
          To illustrate the difference concretely, consider the same &euro;6M
          acquisition completed by a self-funded searcher. The searcher has spent
          &euro;100,000 of personal savings over 18 months searching and now
          raises &euro;2.0M of equity from deal-specific investors, with
          &euro;4.0M funded by bank debt (a higher leverage ratio is possible
          because there is no step-up dilution consuming equity capacity). The
          searcher negotiates a 60% ownership stake in exchange for contributing
          the deal, committing to a full-time CEO role, and co-investing
          &euro;200,000 of personal capital alongside investors.
        </p>
        <p>
          In the traditional model, the searcher owns 25% and investors own 75%.
          In the self-funded model, the searcher owns 60% and investors own 40%.
          At the same &euro;30M exit, the self-funded searcher receives &euro;18M
          versus &euro;7.5M - more than double - while investors receive &euro;12M
          on their &euro;2.0M investment (a 6x return) compared to &euro;22.5M
          on &euro;2.15M (a 10.5x return) in the traditional model. Investors
          earn a lower multiple in the self-funded structure but still achieve
          strong absolute returns, while the searcher captures a much larger
          share of the value they created.
        </p>

        <h2 className={h2Class}>Preferred vs. common equity mechanics</h2>
        <p>
          Most search fund acquisition structures involve at least two classes of
          equity: preferred shares held by investors and common shares held by the
          searcher (and sometimes the management team). Understanding the
          differences between these classes is critical because they determine
          who gets paid first and how much in every exit scenario.
        </p>

        <h3 className={h3Class}>Liquidation preference</h3>
        <p>
          Preferred shareholders typically receive a liquidation preference,
          meaning they are entitled to receive their invested capital back (often
          with a guaranteed return, such as 8% per year) before any proceeds are
          distributed to common shareholders. In a downside scenario where the
          company is sold for less than the total capital invested, the preferred
          holders recover their investment first, and the common shareholders - 
          including the searcher - may receive nothing. This structure protects
          investors from moderate losses while still giving the searcher
          significant upside in successful outcomes.
        </p>

        <h3 className={h3Class}>Participation rights</h3>
        <p>
          Some search fund structures include participating preferred equity,
          which means investors receive their liquidation preference and then
          also participate pro rata in the remaining proceeds alongside common
          shareholders. Participating preferred is more investor-friendly and
          reduces the searcher&apos;s effective ownership in good outcomes. Non-
          participating preferred, where investors choose between their
          liquidation preference or converting to common and sharing pro rata,
          is more searcher-friendly and is the more common structure in the
          search fund world.
        </p>

        <h3 className={h3Class}>Conversion triggers</h3>
        <p>
          Preferred shares typically convert to common shares automatically upon
          certain triggering events, such as an IPO (rare in search funds) or a
          qualified sale above a specified threshold. Voluntary conversion is
          also usually available, allowing investors to convert when the exit
          value is high enough that their pro-rata share of common equity exceeds
          their liquidation preference. Understanding these conversion mechanics
          is essential for accurately modeling exit scenarios and ensuring that
          all parties have aligned expectations about who receives what under
          different outcomes.
        </p>

        <h2 className={h2Class}>Comparison at a glance</h2>
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
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Searcher equity</td><td className="py-2 pr-4">20-30%</td><td className="py-2">50-80%</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Search phase funding</td><td className="py-2 pr-4">Investor-funded</td><td className="py-2">Self-funded</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Step-up</td><td className="py-2 pr-4">1.5-2.0x</td><td className="py-2">N/A</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Investor mentorship</td><td className="py-2 pr-4">Built-in board</td><td className="py-2">Must be sourced</td></tr>
              <tr><td className="py-2 pr-4">Personal risk</td><td className="py-2 pr-4">Low</td><td className="py-2">High</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className={h2Class}>Dilution from acquisition financing</h2>
        <p>
          Even after the initial cap table is set, equity ownership can shift
          during the acquisition financing process. Key dilution sources include:
        </p>
        <ul className={ulClass}>
          <li><strong>Additional equity raises:</strong> If the <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition financing</Link> is larger than initially planned, more equity may be needed, diluting both the searcher and original investors.</li>
          <li><strong>Mezzanine or structured equity:</strong> Convertible notes or preferred equity from mezzanine lenders can dilute common shareholders upon conversion.</li>
          <li><strong>Seller rollover equity:</strong> If the seller retains a stake in the business, this comes out of the total equity pool and dilutes all other shareholders proportionally.</li>
          <li><strong>Management equity pool:</strong> Post-acquisition, you may need to set aside 5-10% for key employee retention, further diluting existing holders.</li>
        </ul>
        <p>
          Smart searchers model these dilution scenarios before finalizing the
          cap table. Build a spreadsheet that shows ownership percentages under
          different deal sizes, use levels, and seller rollover assumptions.
          Share this analysis with investors &mdash; it demonstrates financial
          sophistication and transparency.
        </p>

        <h2 className={h2Class}>Cap table management tools and best practices</h2>
        <p>
          Managing a cap table may seem straightforward when there are only 15 to
          20 shareholders, but complexity grows quickly once you factor in the
          step-up conversion, multiple equity classes, vesting schedules,
          management option pools, and potential follow-on financing rounds. The
          right tools and practices can prevent expensive errors and ensure that
          all parties have a clear, shared understanding of ownership at every
          stage.
        </p>

        <h3 className={h3Class}>Spreadsheets vs. dedicated software</h3>
        <p>
          Most searchers begin with a detailed Excel or Google Sheets cap table
          model during the fundraising and search phases. A well-built
          spreadsheet is sufficient for modeling different deal scenarios,
          showing investors how their ownership changes under various
          assumptions, and tracking the step-up conversion. However, once the
          acquisition closes and the cap table becomes a legal document of
          record, many search fund CEOs transition to dedicated cap table
          management platforms such as Carta, Pulley, or Ledgy (popular in
          Europe). These tools automate equity tracking, generate legal
          certificates, manage vesting schedules, and provide a single source
          of truth that all shareholders can access.
        </p>

        <h3 className={h3Class}>The role of legal counsel</h3>
        <p>
          A good attorney who understands search fund economics is not optional - 
          they are essential. The cap table is ultimately a legal construct, and
          errors in the operating agreement, shareholder agreement, or equity
          grant documents can have costly consequences. Common issues include
          ambiguous vesting language, missing anti-dilution provisions,
          inconsistencies between the cap table spreadsheet and the legal
          documents, and failure to properly document the step-up conversion.
          Invest in an attorney who has closed multiple search fund acquisitions
          and can review your cap table against the governing documents to ensure
          they match precisely.
        </p>

        <h2 className={h2Class}>Common cap table mistakes</h2>

        <h3 className={h3Class}>Not modeling dilution early enough</h3>
        <p>
          Many searchers focus exclusively on their target equity percentage
          (e.g., 25%) without modeling how that percentage will change under
          different deal structures. A management equity pool, seller rollover,
          or additional equity raise can each reduce the searcher&apos;s
          effective ownership by 3-5 percentage points. By the time these are
          layered on, the searcher&apos;s 25% may have become 18%. Build a
          dynamic model that shows ownership under multiple scenarios and update
          it at every stage of the process.
        </p>

        <h3 className={h3Class}>Unclear vesting terms</h3>
        <p>
          Vesting is where economics meet incentives, and ambiguity here can
          lead to disputes. Ensure the vesting schedule is clearly documented:
          what triggers each tranche, what happens if the searcher leaves
          voluntarily versus involuntarily, what constitutes &ldquo;cause&rdquo;
          for termination, and whether unvested shares are forfeited or
          repurchased. Acceleration clauses - which may allow some or all vesting
          to accelerate upon a change of control - should also be explicitly
          addressed.
        </p>

        <h3 className={h3Class}>Missing anti-dilution protections</h3>
        <p>
          Search investors who participate in the initial search raise should
          have some form of anti-dilution protection that preserves their
          economic position if the cap table is restructured in a way that
          disadvantages early investors. Without these protections, a large
          follow-on raise at a low valuation could significantly dilute early
          investors, damaging the relationship and potentially triggering legal
          disputes. Standard protections include weighted-average anti-dilution
          (the most common) and full-ratchet anti-dilution (more investor-
          friendly but rarer in the search fund context).
        </p>

        <h3 className={h3Class}>Failing to communicate changes proactively</h3>
        <p>
          Every time the cap table changes - whether through vesting events,
          new equity issuances, option grants, or ownership transfers - all
          shareholders should be notified promptly with a clear explanation of
          what changed and why. Surprises erode trust. The best search fund
          CEOs send updated cap table summaries as part of their quarterly
          board packages, ensuring that every stakeholder has a current and
          accurate picture of ownership at all times.
        </p>

        <h2 className={h2Class}>Key takeaways</h2>
        <ul className={ulClass}>
          <li>The traditional search fund model is designed to align searcher and investor incentives through the three-tranche vesting structure.</li>
          <li>The step-up rewards early search investors for taking pre-deal risk but dilutes the overall equity pool.</li>
          <li>Self-funded searchers trade investor support for significantly higher equity ownership.</li>
          <li>Always model dilution scenarios before committing to a deal structure &mdash; what looks like 25% equity can shrink quickly with additional financing layers.</li>
          <li>Cap table transparency builds investor trust. Share your models early and update them as the deal evolves.</li>
        </ul>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          What is the difference between fully diluted and basic ownership in a search fund?
        </h3>
        <p>
          Basic ownership counts only the shares currently issued and
          outstanding. Fully diluted ownership includes all shares that could
          be issued - including unvested searcher equity tranches, the
          management option pool, and any convertible instruments. Investors
          always think in fully diluted terms because it reflects the true
          economic picture. When discussing your cap table with investors,
          always present fully diluted numbers to avoid confusion and build
          trust.
        </p>

        <h3 className={h3Class}>
          How does seller rollover equity affect the cap table?
        </h3>
        <p>
          When a seller retains a stake in the business post-acquisition - 
          typically 10 to 20 percent - that equity comes from the total
          equity pool and dilutes both the searcher and the investors
          proportionally. For example, if a seller rolls over 15 percent,
          the searcher&apos;s 25 percent becomes approximately 21 percent
          and investors&apos; 75 percent becomes approximately 64 percent
          on a fully diluted basis. Seller rollover can be a positive signal
          of confidence, but the dilution impact must be modeled and
          discussed with your investor syndicate before signing the LOI.
        </p>

        <h3 className={h3Class}>
          Should I use a cap table management tool during the search phase?
        </h3>
        <p>
          During the search phase, a well-built Excel or Google Sheets model
          is sufficient. You have a simple structure - search units and
          investors - and the primary use is scenario modeling. After the
          acquisition closes, transition to a dedicated platform like Carta,
          Pulley, or Ledgy. These tools manage multiple equity classes,
          automate vesting schedules, generate legal certificates, and give
          all shareholders a self-service portal to view their ownership.
        </p>
      </div>
    </article>
  );
}
