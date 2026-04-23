import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SearchFundTermSheetArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Search Fund Term Sheet: Key Provisions Explained
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          The search fund term sheet defines the economic and governance
          relationship between the searcher and investors. While templates
          have become somewhat standardized over{" "}
          <Link href="/learn/search-fund-history" className="text-apple-accent hover:underline">
            40 years of search fund history
          </Link>, every provision is negotiable. Here&rsquo;s what each
          clause means and what to negotiate.
        </p>

        <h2 className={h2Class}>Search capital provisions</h2>
        <ul className={ulClass}>
          <li><strong>Total raise:</strong> $400K&ndash;$600K for a 2-year search. Each investor contributes $25K&ndash;$50K (called a &ldquo;unit&rdquo;)</li>
          <li><strong>Number of investors:</strong> 10&ndash;20 investors. More investors = more expertise but also more governance complexity</li>
          <li><strong>Use of funds:</strong> Searcher salary ($100K&ndash;$150K/year), travel, legal, CRM/tools, insurance, and search infrastructure</li>
          <li><strong>Search period:</strong> Typically 24 months with an optional 6-month extension (requires investor vote)</li>
          <li><strong>Monthly burn:</strong> $15K&ndash;$25K/month. Investors expect quarterly budget reports</li>
        </ul>

        <h2 className={h2Class}>The step-up mechanism</h2>
        <ul className={ulClass}>
          <li><strong>How it works:</strong> Search capital converts into acquisition equity at a premium. The standard step-up is 1.5x, meaning $100K of search capital converts to $150K of equity</li>
          <li><strong>Why it exists:</strong> Compensates early investors for the risk of funding the search phase (25% of searches never result in an acquisition)</li>
          <li><strong>Negotiation point:</strong> Some searchers negotiate 1.25x or 1.0x step-ups in exchange for more favorable equity terms elsewhere</li>
          <li><strong>Pro-rata rights:</strong> Search investors typically have the right (but not obligation) to invest their pro-rata share of acquisition equity at the step-up price</li>
        </ul>

        <h2 className={h2Class}>Searcher equity</h2>
        <ul className={ulClass}>
          <li><strong>Total pool:</strong> 20&ndash;30% of the acquired company&rsquo;s equity. See{" "}
            <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">
              searcher compensation
            </Link>{" "}
            for the full economics</li>
          <li><strong>Tranche 1 (at close):</strong> 8&ndash;10% vests immediately upon closing the acquisition</li>
          <li><strong>Tranche 2 (time-based):</strong> 8&ndash;10% vests over 3&ndash;4 years of CEO service</li>
          <li><strong>Tranche 3 (performance-based):</strong> 5&ndash;10% vests upon achieving investor return hurdles (typically 3x MOIC or 25%+ IRR)</li>
          <li><strong>Key negotiation:</strong> The split between time-based and performance-based equity. Searchers prefer more time-based; investors prefer more performance-based</li>
        </ul>

        <h2 className={h2Class}>Governance provisions</h2>
        <ul className={ulClass}>
          <li><strong>Board composition:</strong> Typically 5 seats &mdash; 2 investor-appointed, 1 searcher, 2 independent (mutually agreed)</li>
          <li><strong>Investor approval rights:</strong> Major decisions requiring investor vote: the acquisition itself, additional equity raises, exit/sale, CEO termination, and material capital expenditures</li>
          <li><strong>Information rights:</strong> Monthly financial reports, quarterly board meetings, annual audited financials</li>
          <li><strong>Deal approval:</strong> Typically requires majority (or supermajority) investor approval for the acquisition. Some term sheets give investors the right to decline the deal even after LOI</li>
        </ul>

        <h2 className={h2Class}>Acquisition capital provisions</h2>
        <ul className={ulClass}>
          <li><strong>Follow-on right:</strong> Search investors have the right to invest in the acquisition round. Pro-rata or allocated by the searcher</li>
          <li><strong>Investor economics at acquisition:</strong> Same terms as search capital (preferred equity with 1x liquidation preference) or sometimes common equity alongside the searcher</li>
          <li><strong>Outside investors:</strong> If more capital is needed, new investors can participate &mdash; typically at terms no more favorable than the existing investors</li>
          <li><strong>Debt vs. equity:</strong> The{" "}
            <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
              capital stack
            </Link>{" "}
            (debt, seller notes, investor equity) is determined at acquisition, not in the search term sheet</li>
        </ul>

        <h2 className={h2Class}>Protective provisions</h2>
        <ul className={ulClass}>
          <li><strong>Exclusivity:</strong> Investors invest in one searcher at a time in a given industry/geography (not always enforced)</li>
          <li><strong>Non-compete:</strong> The searcher cannot pursue acquisitions outside the search fund during the search period</li>
          <li><strong>Key person clause:</strong> If the searcher leaves, remaining search capital is returned to investors</li>
          <li><strong>Drag-along:</strong> If investors holding X% approve a sale, all shareholders must participate</li>
          <li><strong>Tag-along:</strong> If the searcher or a major investor sells, other investors can sell on the same terms</li>
        </ul>

        <h2 className={h2Class}>Common negotiation mistakes</h2>
        <ul className={ulClass}>
          <li><strong>Overfocusing on equity %:</strong> The absolute return matters more than the percentage. A 20% stake in a well-financed deal can be worth more than 30% in a cash-starved one</li>
          <li><strong>Ignoring governance:</strong> A board that can fire you without cause or veto reasonable decisions is a structural risk. Negotiate CEO termination provisions carefully</li>
          <li><strong>Too many investors:</strong> 20+ investors creates management complexity. 12&ndash;15 is the sweet spot</li>
          <li><strong>Unclear deal authority:</strong> Ensure the term sheet specifies what happens if investors disagree on a potential acquisition</li>
        </ul>

        <p>
          For related guides, see{" "}
          <Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">
            writing your PPM
          </Link>,{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            cap tables &amp; equity
          </Link>, and{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            investor economics
          </Link>.
        </p>
      </div>
    </article>
  );
}
