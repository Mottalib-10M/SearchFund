import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ShareholderAgreementsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Shareholder Agreements for Post-Acquisition Governance</h1>
      <div className={bodyClass}>
        <p>The shareholder agreement (SHA) is the document that governs the relationship between the search fund CEO and investors after an acquisition closes. While the <Link href="/learn/search-fund-legal-documents" className="text-apple-accent hover:underline">LPA</Link> covers the search phase, the SHA defines governance, decision-making authority, exit rights, and dispute resolution for the operating company. Getting this right is critical for a productive working relationship.</p>
      </div>

      <h2 className={h2Class}>Core Provisions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Board Composition</h3>
        <ul className={ulClass}>
          <li>Typical search fund board: 3-5 members (CEO + investor seats + independent)</li>
          <li>Investor board seats are usually tied to ownership thresholds</li>
          <li>Independent directors provide expertise and balance</li>
          <li>Board observer rights for smaller investors</li>
        </ul>

        <h3 className={h3Class}>Reserved Matters</h3>
        <p>Decisions requiring board or shareholder approval (not just CEO discretion):</p>
        <ul className={ulClass}>
          <li>Annual budget and material deviations from budget</li>
          <li>New debt above a defined threshold</li>
          <li>Capital expenditures above a defined threshold</li>
          <li>Hiring/firing of C-suite executives</li>
          <li>CEO compensation changes</li>
          <li>Acquisitions or disposals of business units</li>
          <li>Related party transactions</li>
          <li>Dividend declarations</li>
          <li>Changes to the company&apos;s articles of incorporation/bylaws</li>
        </ul>
      </div>

      <h2 className={h2Class}>Transfer Restrictions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Right of first refusal (ROFR):</strong> Existing shareholders have the right to match any third-party offer before shares can be sold outside the group</li>
          <li><strong>Tag-along rights:</strong> Minority shareholders can &quot;tag along&quot; with a majority shareholder&apos;s sale on the same terms, protecting against being left behind in a partial exit</li>
          <li><strong>Drag-along rights:</strong> A qualified majority (typically 67-75%) can force all shareholders to sell in a full exit, preventing minority holdouts from blocking a sale</li>
          <li><strong>Lock-up period:</strong> Shareholders may be restricted from selling for a specified period (typically 2-3 years post-acquisition)</li>
          <li><strong>Pre-emption rights:</strong> Existing shareholders have priority in any new share issuance, maintaining their percentage ownership</li>
        </ul>
      </div>

      <h2 className={h2Class}>CEO/Searcher-Specific Provisions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Equity vesting:</strong> The CEO&apos;s <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">carried interest/equity</Link> typically vests over 4-5 years</li>
          <li><strong>Accelerated vesting:</strong> Provisions for vesting acceleration upon change of control or termination without cause</li>
          <li><strong>Good leaver/bad leaver:</strong> Different treatment for equity if the CEO leaves voluntarily (bad leaver, may forfeit unvested and some vested equity) vs. is terminated without cause (good leaver, retains vested equity)</li>
          <li><strong>Non-compete:</strong> Post-departure non-compete obligations for the CEO (typically 12-24 months)</li>
          <li><strong>Information rights:</strong> Reporting obligations to investors (monthly financials, quarterly board meetings, annual audit)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Exit Provisions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Exit timeline:</strong> Many SHAs include a target exit horizon (typically 5-8 years) with mechanisms to force a sale if the majority desires</li>
          <li><strong>Liquidation preference:</strong> Investors may receive their capital back first before the CEO&apos;s equity participates in proceeds</li>
          <li><strong>Distribution waterfall:</strong> Defines the order and percentages for distributing <Link href="/learn/equity-waterfall" className="text-apple-accent hover:underline">exit proceeds</Link></li>
          <li><strong>Deadlock resolution:</strong> Mechanisms for resolving disagreements (mediation, arbitration, buy-sell provisions)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>The SHA defines the operating rules between CEO and investors, negotiate it carefully before closing</li>
          <li>Balance investor protection (reserved matters, board seats) with CEO operational freedom</li>
          <li>Drag-along and tag-along rights protect both majority and minority shareholders in exit scenarios</li>
          <li>Good leaver/bad leaver provisions have enormous financial implications, understand them thoroughly</li>
          <li>Include clear deadlock resolution mechanisms to prevent governance paralysis</li>
        </ul>
      </div>

      <h2 className={h2Class}>Frequently asked questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>What is the typical equity vesting schedule for a search fund CEO?</h3>
        <p>
          According to Stanford GSB&apos;s Search Fund Study, the standard
          vesting schedule for search fund CEO equity is 4-5 years with
          a 1-year cliff. The CEO typically receives 20-30% of common
          equity through a step-up at acquisition close, with this equity
          vesting linearly over the holding period. Most shareholder agreements
          include accelerated vesting provisions upon a change of control
          (full acceleration) or termination without cause (partial
          acceleration of 50-100% of unvested equity). The{" "}
          <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">searcher compensation guide</Link> covers
          the full range of equity structures. Bad leaver provisions , 
          which can result in forfeiture of both unvested and some vested
          equity, are one of the most financially consequential
          clauses in the entire agreement.
        </p>

        <h3 className={h3Class}>What drag-along and tag-along thresholds are standard in search fund shareholder agreements?</h3>
        <p>
          According to the NVCA Model Legal Documents (adapted for ETA
          contexts), drag-along rights typically require a qualified majority
          of 67-75% of shareholders to compel all other shareholders
          to participate in a full exit. Tag-along rights allow any minority
          shareholder to join a sale on the same terms, price, and conditions
          as the majority. According to Yale SOM&apos;s research on search
          fund governance, approximately 85% of search fund SHAs include both
          drag-along and tag-along provisions. The key negotiation point is
          the drag-along threshold: investors generally push for 67%, while
          CEOs prefer 75% to retain more control over exit timing. Our{" "}
          <Link href="/learn/equity-waterfall" className="text-apple-accent hover:underline">equity waterfall guide</Link> explains
          how proceeds are distributed once a drag-along sale is triggered.
        </p>

        <h3 className={h3Class}>How should deadlock resolution work in a search fund shareholder agreement?</h3>
        <p>
          According to Harvard Business School&apos;s research on SME
          governance, the most effective deadlock resolution mechanisms
          include a tiered approach: first, a mandatory negotiation period
          (30-60 days), then mediation by a mutually agreed neutral
          party, and finally binding arbitration if mediation fails. Some
          SHAs include &quot;shotgun&quot; or &quot;Russian roulette&quot;
          buy-sell provisions where either party can offer to buy the other
          out at a specified price, and the other party must either accept
          or buy at that same price. According to practitioners, the most
          common deadlocks arise around exit timing, additional capital
          calls, and CEO compensation changes. Building clear escalation
          procedures into the SHA prevents governance paralysis and preserves
          the{" "}
          <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board&apos;s ability to govern</Link> effectively.
        </p>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/board-governance" className="text-apple-accent hover:underline">Board Governance for Search Fund Companies</Link></li>
        <li><Link href="/learn/search-fund-legal-documents" className="text-apple-accent hover:underline">Search Fund Legal Documents</Link></li>
        <li><Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">Searcher Compensation</Link></li>
        <li><Link href="/learn/equity-waterfall" className="text-apple-accent hover:underline">Equity Waterfall & Distribution Mechanics</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Yale SOM, <em>Search Fund Operating Agreement Templates</em> (2024)</li>
        <li>Stanford GSB, <em>Search Fund Governance Best Practices</em> (2024)</li>
        <li>NVCA, <em>Model Legal Documents for Venture Capital</em> (adapted for ETA context, 2024)</li>
        <li>Harvard Business School, <em>Note on Shareholder Agreements in SME Acquisitions</em> (2023)</li>
      </ul>
    </article>
  );
}
