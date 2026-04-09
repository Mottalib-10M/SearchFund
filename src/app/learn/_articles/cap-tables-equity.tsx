import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function CapTablesEquityArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund Economics: Cap Tables &amp; Equity</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Understanding search fund economics is critical for both searchers and
          investors. The equity structure determines how value is shared across
          the search, acquisition, and operating phases. This guide breaks down
          the traditional search fund cap table, explains the step-up mechanism,
          walks through a worked example, and compares economics across fund models.
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
          for the higher risk of funding the pre-deal search phase. In some
          structures, the step-up is 2.0x, especially in competitive fundraising
          environments.
        </p>

        <h3 className={h3Class}>Acquisition equity</h3>
        <p>
          The equity portion of the acquisition financing is offered first to
          existing search investors (right of first refusal), then to new
          investors. The total equity check depends on the enterprise value and
          leverage used. Acquisition equity typically represents 30-50% of the
          total purchase price, with the remainder funded by debt.
        </p>

        <h3 className={h3Class}>Searcher equity (carried interest)</h3>
        <p>
          The searcher receives 20-30% of the equity in the acquired company,
          structured as carried interest. This equity typically vests in three
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
                <td className="py-2">~9.4x MOIC for investors</td>
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

        <h2 className={h2Class}>Self-funded search economics</h2>
        <p>
          Self-funded searchers retain significantly more equity because they
          bear the search risk personally and raise acquisition capital on a
          deal-by-deal basis. A typical self-funded acquisition might look like:
        </p>
        <ul className={ulClass}>
          <li><strong>Search costs:</strong> &euro;50K-&euro;150K funded from personal savings.</li>
          <li><strong>Acquisition equity:</strong> Raised from investors for a specific deal &mdash; no step-up, no preferential rights from a search phase.</li>
          <li><strong>Searcher ownership:</strong> 50-80% depending on how much equity the searcher contributes personally and the negotiated carried interest.</li>
          <li><strong>Leverage:</strong> Often higher use of SBA loans (US) or government-backed lending (EU) to reduce the equity check.</li>
        </ul>
        <p>
          The tradeoff is clear: self-funded searchers keep more of the upside
          but absorb 100% of the downside risk during the search phase and
          typically have less investor support and mentorship.
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
          <li><strong>Additional equity raises:</strong> If the acquisition is larger than initially planned, more equity may be needed, diluting both the searcher and original investors.</li>
          <li><strong>Mezzanine or structured equity:</strong> Convertible notes or preferred equity from mezzanine lenders can dilute common shareholders upon conversion.</li>
          <li><strong>Seller rollover equity:</strong> If the seller retains a stake in the business, this comes out of the total equity pool and dilutes all other shareholders proportionally.</li>
          <li><strong>Management equity pool:</strong> Post-acquisition, you may need to set aside 5-10% for key employee retention, further diluting existing holders.</li>
        </ul>
        <p>
          Smart searchers model these dilution scenarios before finalizing the
          cap table. Build a spreadsheet that shows ownership percentages under
          different deal sizes, leverage levels, and seller rollover assumptions.
          Share this analysis with investors &mdash; it demonstrates financial
          sophistication and transparency.
        </p>

        <h2 className={h2Class}>Key takeaways</h2>
        <ul className={ulClass}>
          <li>The traditional search fund model is designed to align searcher and investor incentives through the three-tranche vesting structure.</li>
          <li>The step-up rewards early search investors for taking pre-deal risk but dilutes the overall equity pool.</li>
          <li>Self-funded searchers trade investor support for significantly higher equity ownership.</li>
          <li>Always model dilution scenarios before committing to a deal structure &mdash; what looks like 25% equity can shrink quickly with additional financing layers.</li>
          <li>Cap table transparency builds investor trust. Share your models early and update them as the deal evolves.</li>
        </ul>
      </div>
    </article>
  );
}
