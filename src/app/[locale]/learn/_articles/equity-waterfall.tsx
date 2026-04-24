import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function EquityWaterfallArticle() {
  return (
    <article>
      <h1 className={h1Class}>Equity Waterfall & Distribution Mechanics in Search Funds</h1>

      <div className={bodyClass}>
        <p>
          The equity waterfall determines how returns are distributed between search fund investors and the searcher/CEO. Understanding waterfall mechanics is essential for both sides &mdash; it directly impacts how much each party takes home at exit. According to the Stanford GSB 2024 Search Fund Study, the median search fund generates a 2.9x gross return to investors, but the actual distribution between investors and the searcher depends entirely on how the waterfall is structured. The IESE International Search Fund Study confirms that international search funds increasingly follow the same waterfall conventions established by US programs, though regional variations exist in preferred return rates and vesting schedules.
        </p>
      </div>

      <h2 className={h2Class}>How the Search Fund Waterfall Works</h2>
      <div className={bodyClass}>
        <p>The typical search fund distribution waterfall has four tiers:</p>
        <ol className={olClass}>
          <li><strong>Return of capital:</strong> Investors receive back their total invested capital (search + acquisition)</li>
          <li><strong>Preferred return:</strong> Investors receive 8&ndash;10% annual preferred return on invested capital</li>
          <li><strong>Catch-up:</strong> Searcher/CEO receives distributions until their total equals their earned equity percentage</li>
          <li><strong>Residual split:</strong> Remaining proceeds split per the operating agreement (typically 70/30 investor/searcher)</li>
        </ol>
      </div>

      <h2 className={h2Class}>The Step-Up Mechanism</h2>
      <div className={bodyClass}>
        <p>
          Search funds use a unique two-stage capital raise that creates the &quot;step-up&quot;:
        </p>
        <ul className={ulClass}>
          <li><strong>Search capital:</strong> $400K&ndash;$600K raised from 10&ndash;20 investors to fund the 18&ndash;24 month search</li>
          <li><strong>Acquisition capital:</strong> $2M&ndash;$10M+ raised (often from the same investors) to fund the equity portion of the acquisition</li>
          <li><strong>The 1.5x step-up:</strong> Each dollar of search capital converts into 1.5x its value in acquisition equity &mdash; rewarding early investors for the additional risk</li>
        </ul>
        <p>
          <strong>Example:</strong> An investor puts in $50K of search capital. At acquisition, they have the right to invest additional acquisition capital. Their $50K of search capital converts to $75K worth of acquisition equity (1.5x step-up).
        </p>
      </div>

      <h2 className={h2Class}>Searcher Equity: The 20&ndash;30% Carry</h2>
      <div className={bodyClass}>
        <p>The searcher typically earns 20&ndash;30% of the total equity, vesting over time:</p>
        <ul className={ulClass}>
          <li><strong>First tranche (1/3):</strong> Vests at closing of the acquisition</li>
          <li><strong>Second tranche (1/3):</strong> Vests over 3&ndash;4 years on a monthly or annual basis</li>
          <li><strong>Third tranche (1/3):</strong> Performance-based, tied to investor return thresholds (e.g., vests when investors achieve 3x or higher return)</li>
        </ul>
        <p>
          This structure ensures the searcher is rewarded for finding and closing a deal (first tranche), staying committed (time vesting), and delivering exceptional returns (performance vesting).
        </p>
      </div>

      <h2 className={h2Class}>Worked Example: $10M Acquisition</h2>
      <div className={bodyClass}>
        <p><strong>Capital structure:</strong></p>
        <ul className={ulClass}>
          <li>Senior debt: $6M</li>
          <li>Search capital: $500K (from 15 investors) &rarr; converts to $750K at 1.5x step-up</li>
          <li>Acquisition equity: $3.5M (from investors) &mdash; total investor equity: $4.25M ($750K + $3.5M)</li>
          <li>Searcher equity: 25% of total (vesting as described above)</li>
        </ul>
        <p><strong>Exit at $20M (after 5 years), debt repaid to $3M:</strong></p>
        <ol className={olClass}>
          <li>Repay remaining debt: $3M &rarr; $17M to equity holders</li>
          <li>Return of capital to investors: $4.25M &rarr; $12.75M remaining</li>
          <li>Preferred return (8% annual for 5 years): ~$2.1M &rarr; $10.65M remaining</li>
          <li>Catch-up to searcher: distributions until searcher has 25% of total</li>
          <li>Residual split: remaining proceeds split 75/25 investor/searcher</li>
        </ol>
        <p>In this scenario, investors achieve approximately 3.5x return ($14.8M on $4.25M) and the searcher receives approximately $2.2M &mdash; a strong outcome for both sides.</p>
      </div>

      <h2 className={h2Class}>Preferred Return Mechanics</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Rate:</strong> 8&ndash;10% annual preferred return is standard in search funds</li>
          <li><strong>Compounding:</strong> Usually compounds annually (not simple interest)</li>
          <li><strong>Cumulative vs. non-cumulative:</strong> Almost always cumulative &mdash; unpaid preferred return accrues</li>
          <li><strong>Interim distributions:</strong> If the company pays dividends, they typically satisfy preferred return first</li>
        </ul>
      </div>

      <h2 className={h2Class}>Catch-Up Provisions</h2>
      <div className={bodyClass}>
        <p>
          The catch-up provision ensures the searcher reaches their target ownership percentage. After investors receive their return of capital and preferred return, 100% of the next distributions go to the searcher until their total distributions equal their earned equity percentage of all distributions made.
        </p>
        <p>
          <strong>Full catch-up (most common):</strong> 100% of proceeds go to the searcher until they reach their earned percentage. <strong>Partial catch-up:</strong> A portion (e.g., 80%) goes to the searcher, with the remainder to investors, until the target split is achieved.
        </p>
      </div>

      <h2 className={h2Class}>Clawback Provisions</h2>
      <div className={bodyClass}>
        <p>
          Clawback provisions protect investors if interim distributions turn out to have been excessive:
        </p>
        <ul className={ulClass}>
          <li><strong>Searcher clawback:</strong> If the searcher receives distributions and the business subsequently declines, investors can &quot;claw back&quot; the searcher&apos;s excess distributions</li>
          <li><strong>True-up at exit:</strong> Final distributions are calculated based on total returns, and any overpayments are reconciled</li>
          <li><strong>Escrow:</strong> Some agreements require the searcher to hold a portion of interim distributions in escrow until exit</li>
        </ul>
      </div>

      <h2 className={h2Class}>Variations by Deal Type</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Traditional search fund:</strong> Standard waterfall as described above. 20&ndash;25% searcher equity with 1.5x step-up. This is the dominant model tracked by both the Stanford and IESE studies.</li>
          <li><strong><Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">Self-funded search</Link>:</strong> No search capital stage, so no step-up. Searcher typically takes larger equity stake (30&ndash;50%) since they bear the search cost personally.</li>
          <li><strong><Link href="/learn/pledge-fund-model" className="text-apple-accent hover:underline">Pledge fund</Link>:</strong> Similar to traditional but investors commit capital upfront for both search and acquisition. Waterfall terms may be slightly less favorable to the searcher.</li>
          <li><strong><Link href="/learn/search-fund-vs-independent-sponsor" className="text-apple-accent hover:underline">Independent sponsor</Link>:</strong> Deal-by-deal fundraising. Promoted interest (carried interest) of 15&ndash;25% with no search capital stage.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Negotiation Tips</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>For searchers:</strong> Focus on the performance vesting threshold &mdash; ensure it&apos;s achievable. Negotiate for full catch-up rather than partial.</li>
          <li><strong>For investors:</strong> The preferred return protects your downside. Ensure vesting has meaningful time and performance components.</li>
          <li><strong>Both sides:</strong> Model the waterfall at multiple exit scenarios (1x, 2x, 3x, 5x) to understand actual economics before signing.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>The waterfall has four tiers: return of capital, preferred return, catch-up, and residual split</li>
          <li>The 1.5x step-up rewards early search capital investors</li>
          <li>Searcher equity (20&ndash;30%) vests in three tranches: closing, time, and performance</li>
          <li>Model the waterfall at multiple exit multiples before agreeing to terms</li>
          <li>Self-funded and independent sponsor waterfalls differ significantly from traditional search funds</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">Cap Tables & Equity in Search Funds</Link></li>
        <li><Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">Search Fund Investor Economics</Link></li>
        <li><Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">Searcher Compensation: Salary, Equity & Economics</Link></li>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns: Historical Data & Analysis</Link></li>
        <li><Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">Exit Strategies for Search Fund CEOs</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>What happens to the searcher&apos;s equity if the search fund does not find an acquisition?</h3>
      <div className={bodyClass}>
        <p>If the search fund winds down without completing an acquisition, the searcher earns no equity. Search capital is returned to investors (minus expenses), and the searcher&apos;s sweat equity is worthless. According to the Stanford 2024 study, approximately 25&ndash;30% of funded searches do not result in an acquisition. This risk is a fundamental feature of the model: the searcher takes significant personal career risk in exchange for the potential for substantial equity upside if an acquisition succeeds.</p>
      </div>

      <h3 className={h3Class}>How is the searcher&apos;s equity taxed at exit?</h3>
      <div className={bodyClass}>
        <p>In the US, the searcher&apos;s equity is typically structured as common stock or profits interest, with the goal of qualifying for long-term capital gains treatment (currently 20% federal rate plus 3.8% net investment income tax). The first tranche that vests at closing may be subject to Section 83(b) elections to lock in a low tax basis. Time-vested and performance-vested tranches are taxed as ordinary income on vesting unless properly structured. For international search funds, the tax treatment varies by jurisdiction &mdash; see our <Link href="/learn/capital-gains-tax-by-country" className="text-apple-accent hover:underline">capital gains tax by country</Link> guide.</p>
      </div>

      <h3 className={h3Class}>Can the waterfall terms be renegotiated after the search fund is formed?</h3>
      <div className={bodyClass}>
        <p>Technically yes, but practically it is rare and risky. The waterfall terms are established in the Limited Partnership Agreement (LPA) during the search capital raise. Renegotiating terms after investors have committed capital can damage trust and relationships. The most common scenario for modification is at the acquisition stage, when some investors may negotiate different terms for their acquisition equity. The best practice is to model the waterfall thoroughly at multiple exit scenarios before finalizing the LPA, ensuring both parties are comfortable with the economics across all outcomes.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford Graduate School of Business, <em>A Primer on Search Funds</em> (2024)</li>
        <li>Stanford Graduate School of Business, <em>2024 Search Fund Study</em> (2024)</li>
        <li>IESE Business School, <em>International Search Fund Study</em> (2024)</li>
        <li>Harvard Business School, <em>Note on Search Funds</em> (2023)</li>
        <li>Jim Southern & Peter Kelly, <em>Search Fund Economics</em> (Stanford GSB Case Study, 2022)</li>
      </ul>
    </article>
  );
}
