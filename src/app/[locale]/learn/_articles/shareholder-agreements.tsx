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
          <li>Typical search fund board: 3&ndash;5 members (CEO + investor seats + independent)</li>
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
          <li><strong>Tag-along rights:</strong> Minority shareholders can &quot;tag along&quot; with a majority shareholder&apos;s sale on the same terms &mdash; protecting against being left behind in a partial exit</li>
          <li><strong>Drag-along rights:</strong> A qualified majority (typically 67&ndash;75%) can force all shareholders to sell in a full exit &mdash; preventing minority holdouts from blocking a sale</li>
          <li><strong>Lock-up period:</strong> Shareholders may be restricted from selling for a specified period (typically 2&ndash;3 years post-acquisition)</li>
          <li><strong>Pre-emption rights:</strong> Existing shareholders have priority in any new share issuance, maintaining their percentage ownership</li>
        </ul>
      </div>

      <h2 className={h2Class}>CEO/Searcher-Specific Provisions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Equity vesting:</strong> The CEO&apos;s <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">carried interest/equity</Link> typically vests over 4&ndash;5 years</li>
          <li><strong>Accelerated vesting:</strong> Provisions for vesting acceleration upon change of control or termination without cause</li>
          <li><strong>Good leaver/bad leaver:</strong> Different treatment for equity if the CEO leaves voluntarily (bad leaver &mdash; may forfeit unvested and some vested equity) vs. is terminated without cause (good leaver &mdash; retains vested equity)</li>
          <li><strong>Non-compete:</strong> Post-departure non-compete obligations for the CEO (typically 12&ndash;24 months)</li>
          <li><strong>Information rights:</strong> Reporting obligations to investors (monthly financials, quarterly board meetings, annual audit)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Exit Provisions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Exit timeline:</strong> Many SHAs include a target exit horizon (typically 5&ndash;8 years) with mechanisms to force a sale if the majority desires</li>
          <li><strong>Liquidation preference:</strong> Investors may receive their capital back first before the CEO&apos;s equity participates in proceeds</li>
          <li><strong>Distribution waterfall:</strong> Defines the order and percentages for distributing <Link href="/learn/equity-waterfall" className="text-apple-accent hover:underline">exit proceeds</Link></li>
          <li><strong>Deadlock resolution:</strong> Mechanisms for resolving disagreements (mediation, arbitration, buy-sell provisions)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>The SHA defines the operating rules between CEO and investors &mdash; negotiate it carefully before closing</li>
          <li>Balance investor protection (reserved matters, board seats) with CEO operational freedom</li>
          <li>Drag-along and tag-along rights protect both majority and minority shareholders in exit scenarios</li>
          <li>Good leaver/bad leaver provisions have enormous financial implications &mdash; understand them thoroughly</li>
          <li>Include clear deadlock resolution mechanisms to prevent governance paralysis</li>
        </ul>
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
