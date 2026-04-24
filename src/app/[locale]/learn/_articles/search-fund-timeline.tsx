import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SearchFundTimelineArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        How Long Does a Search Fund Take? Timeline &amp; Milestones
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          From first investor meeting to exit, a{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            search fund
          </Link>{" "}
          journey typically spans 7&ndash;10 years. Here&rsquo;s a
          phase-by-phase breakdown of what to expect, how long each stage
          takes, and the milestones that matter.
        </p>

        <h2 className={h2Class}>The full timeline at a glance</h2>
        <ul className={ulClass}>
          <li><strong>Fundraise:</strong> 3&ndash;6 months</li>
          <li><strong>Search phase:</strong> 18&ndash;24 months</li>
          <li><strong>Deal execution:</strong> 3&ndash;6 months (LOI to close)</li>
          <li><strong>Operations &amp; growth:</strong> 5&ndash;7 years</li>
          <li><strong>Exit:</strong> 6&ndash;12 months</li>
          <li><strong>Total:</strong> 7&ndash;10 years from fundraise to exit</li>
        </ul>

        <h2 className={h2Class}>Phase 1: Fundraise (3&ndash;6 months)</h2>

        <h3 className={h3Class}>What happens</h3>
        <ul className={ulClass}>
          <li>Write your{" "}
            <Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">
              PPM (Private Placement Memorandum)
            </Link></li>
          <li>Build your investor list (typically 50&ndash;150 targets)</li>
          <li>Hold 30&ndash;60 investor meetings</li>
          <li>Close commitments from 10&ndash;20 investors for $400K&ndash;$600K in search capital</li>
        </ul>

        <h3 className={h3Class}>Key milestones</h3>
        <ul className={ulClass}>
          <li><strong>Month 1:</strong> PPM draft and initial outreach</li>
          <li><strong>Month 2&ndash;3:</strong> Investor meetings and soft commitments</li>
          <li><strong>Month 4&ndash;6:</strong> Final close with legal documents signed</li>
          <li><strong>Self-funded alternative:</strong> Skip the fundraise entirely. Use personal savings and{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA financing
            </Link>{" "}
            at acquisition. See{" "}
            <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
              self-funded vs. traditional
            </Link></li>
        </ul>

        <h2 className={h2Class}>Phase 2: Search (18&ndash;24 months)</h2>

        <h3 className={h3Class}>What happens</h3>
        <ul className={ulClass}>
          <li>Define your{" "}
            <Link href="/learn/good-acquisition-target" className="text-apple-accent hover:underline">
              target criteria
            </Link>{" "}
            and{" "}
            <Link href="/learn/creating-icp-acquisitions" className="text-apple-accent hover:underline">
              ideal company profile
            </Link></li>
          <li>Execute{" "}
            <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
              deal sourcing
            </Link>{" "}
            across multiple channels (brokers, direct outreach, online platforms)</li>
          <li>Screen 200&ndash;500+ opportunities, take 30&ndash;50 through initial meetings, submit 5&ndash;15 LOIs</li>
          <li>Win one deal and proceed to close</li>
        </ul>

        <h3 className={h3Class}>Key milestones</h3>
        <ul className={ulClass}>
          <li><strong>Months 1&ndash;3:</strong> Build deal funnel infrastructure, meet brokers, start outreach</li>
          <li><strong>Months 4&ndash;9:</strong> High-volume screening. Most searchers feel frustrated here &mdash; this is normal</li>
          <li><strong>Months 10&ndash;15:</strong> Deeper engagement with promising targets. First LOI submissions</li>
          <li><strong>Months 16&ndash;24:</strong> LOI accepted. Due diligence and closing begin</li>
          <li><strong>Warning:</strong> If you haven&rsquo;t submitted an LOI by month 18, reassess your criteria. See{" "}
            <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
              why search funds fail
            </Link></li>
        </ul>

        <h3 className={h3Class}>Stanford data on search duration</h3>
        <ul className={ulClass}>
          <li><strong>Median search time:</strong> 21 months (traditional), 12&ndash;18 months (self-funded)</li>
          <li><strong>Optimal window:</strong> Searchers who acquire in 12&ndash;24 months have the best outcomes</li>
          <li><strong>Extended search risk:</strong> After 24 months, investor patience wanes, morale drops, and capital runs low</li>
          <li><strong>No acquisition rate:</strong> ~25% of traditional searchers never close a deal. See{" "}
            <Link href="/learn/search-fund-statistics" className="text-apple-accent hover:underline">
              search fund statistics
            </Link></li>
        </ul>

        <h2 className={h2Class}>Phase 3: Deal execution (3&ndash;6 months)</h2>

        <h3 className={h3Class}>What happens</h3>
        <ul className={ulClass}>
          <li>Submit and negotiate{" "}
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              Letter of Intent (LOI)
            </Link></li>
          <li>Conduct{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link>{" "}
            (financial, legal, operational, commercial)</li>
          <li>Commission a{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              Quality of Earnings
            </Link>{" "}
            report</li>
          <li>Secure{" "}
            <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
              financing
            </Link>{" "}
            (bank debt, seller note, investor equity)</li>
          <li>Negotiate and sign definitive agreements</li>
          <li>Close the acquisition</li>
        </ul>

        <h3 className={h3Class}>Key milestones</h3>
        <ul className={ulClass}>
          <li><strong>Week 1&ndash;2:</strong> LOI signed with exclusivity</li>
          <li><strong>Weeks 3&ndash;8:</strong> Due diligence deep dive</li>
          <li><strong>Weeks 6&ndash;10:</strong> Financing commitment letters</li>
          <li><strong>Weeks 10&ndash;16:</strong> Purchase agreement negotiation</li>
          <li><strong>Weeks 16&ndash;24:</strong> Closing. Wire transfers. Keys handed over</li>
        </ul>

        <h2 className={h2Class}>Phase 4: Operations &amp; growth (5&ndash;7 years)</h2>

        <h3 className={h3Class}>Year 1: Stabilize</h3>
        <ul className={ulClass}>
          <li>Execute your{" "}
            <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
              first 100 days plan
            </Link></li>
          <li>{" "}
            <Link href="/learn/building-trust-inherited-teams" className="text-apple-accent hover:underline">
              Build trust
            </Link>{" "}
            with the inherited team</li>
          <li>Retain key employees and customers. Avoid major changes</li>
          <li>Learn the business from the inside</li>
        </ul>

        <h3 className={h3Class}>Years 2&ndash;3: Optimize</h3>
        <ul className={ulClass}>
          <li>Implement{" "}
            <Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">
              revenue growth
            </Link>{" "}
            and margin improvement initiatives</li>
          <li>Upgrade systems and processes ({" "}
            <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">
              digital transformation
            </Link>)</li>
          <li>Build out the management team</li>
          <li>Consider{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              add-on acquisitions
            </Link></li>
        </ul>

        <h3 className={h3Class}>Years 4&ndash;7: Scale &amp; exit preparation</h3>
        <ul className={ulClass}>
          <li>Scale the business to maximize exit value</li>
          <li>Professionalize{" "}
            <Link href="/learn/board-governance" className="text-apple-accent hover:underline">
              board governance
            </Link>{" "}
            and reporting</li>
          <li>Begin{" "}
            <Link href="/learn/exit-readiness-plan" className="text-apple-accent hover:underline">
              exit preparation
            </Link>{" "}
            18 months before target sale date</li>
          <li>Engage{" "}
            <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">
              M&amp;A advisors
            </Link>{" "}
            and run a sale process</li>
        </ul>

        <h2 className={h2Class}>Phase 5: Exit (6&ndash;12 months)</h2>
        <ul className={ulClass}>
          <li>Prepare the business for sale (CIM, data room, management presentations)</li>
          <li>Run a{" "}
            <Link href="/learn/strategic-vs-financial-sale" className="text-apple-accent hover:underline">
              dual-track process
            </Link>{" "}
            (strategic + financial buyers)</li>
          <li>Negotiate final terms and close</li>
          <li><strong>Median hold period:</strong> 6.2 years (Stanford 2024)</li>
          <li><strong>Median exit outcome:</strong> 6.9x ROI for investors, 33% gross IRR</li>
        </ul>

        <h2 className={h2Class}>Self-funded search timeline</h2>
        <ul className={ulClass}>
          <li><strong>No fundraise phase:</strong> Skip directly to search. Saves 3&ndash;6 months. See our{" "}
            <Link href="/learn/financial-runway-planning" className="text-apple-accent hover:underline">
              financial runway planning
            </Link>{" "}guide</li>
          <li><strong>Faster search:</strong> 12&ndash;18 months vs. 18&ndash;24 (more flexible criteria, SBA-friendly targets)</li>
          <li><strong>Same deal execution:</strong> 3&ndash;6 months LOI to close</li>
          <li><strong>Flexible hold period:</strong> No investor timeline pressure. Hold indefinitely or exit when ready</li>
          <li><strong>Total:</strong> 5&ndash;8+ years from search start to exit</li>
        </ul>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How long does it take to find a business to buy?</h3>
        <p>
          The median search duration is 21 months for traditional search funds
          and 12&ndash;18 months for self-funded searches, according to the
          Stanford 2024 Search Fund Study. The optimal window is 12&ndash;24
          months &mdash; searchers who acquire in this range have the best
          outcomes. After 24 months, investor patience wanes and capital runs
          low. About 25% of traditional searchers never close a deal.
        </p>

        <h3 className={h3Class}>How long does a search fund take from start to exit?</h3>
        <p>
          Total timeline is 7&ndash;10 years: fundraise (3&ndash;6 months),
          search (18&ndash;24 months), deal execution (3&ndash;6 months),
          operations and growth (5&ndash;7 years), and exit process
          (6&ndash;12 months). The median hold period is 6.2 years according
          to Stanford data, with investors earning 33% gross IRR and 6.9x ROI.
        </p>

        <h3 className={h3Class}>What happens if I don&rsquo;t find a business in time?</h3>
        <p>
          If a traditional searcher exhausts the two-year search window without
          closing a deal, investors typically wind down the fund. The searcher
          receives no equity and must pursue other career options. Self-funded
          searchers face no investor deadline but must manage personal financial
          runway. Approximately one in four traditional searches end without an
          acquisition. See{" "}
          <Link href="/learn/search-fund-no-acquisition" className="text-apple-accent hover:underline">
            what happens when a search fund doesn&rsquo;t acquire
          </Link>{" "}
          for more detail.
        </p>

        <h3 className={h3Class}>Is a self-funded search faster than a traditional search fund?</h3>
        <p>
          Generally yes. Self-funded searchers skip the 3&ndash;6 month
          fundraise phase entirely, and their median search duration is
          12&ndash;18 months versus 21 months for traditional searchers.
          However, self-funded searches target smaller businesses and use{" "}
          <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
            SBA financing
          </Link>, which has its own timeline requirements during the closing
          phase.
        </p>

        <p>
          For the complete framework, see{" "}
          <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
            getting started with ETA
          </Link>{" "}
          and{" "}
          <Link href="/learn/search-fund-statistics" className="text-apple-accent hover:underline">
            search fund statistics
          </Link>.
        </p>
      </div>
    </article>
  );
}
