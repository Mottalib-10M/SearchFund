import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SearchFundLegalDocumentsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund Legal Documents: LPA, Subscription Agreement & More</h1>
      <div className={bodyClass}>
        <p>Setting up a search fund requires a suite of legal documents that define the relationship between the searcher and investors. Understanding these documents is essential for both parties. Most follow standardized templates (notably from Yale SOM and Stanford GSB), but key provisions deserve careful negotiation. According to the Stanford GSB Search Fund Primer, over 80% of traditional search funds in the United States use document structures derived from these templates, making familiarity with them a prerequisite for any serious searcher.</p>
      </div>

      <h2 className={h2Class}>Limited Partnership Agreement (LPA)</h2>
      <div className={bodyClass}>
        <p>The LPA is the foundational document that governs the search fund. It establishes the legal entity through which investors commit capital and defines every right, obligation, and economic arrangement between the searcher (General Partner) and the investors (Limited Partners). Getting the LPA right is critical because it will govern your relationship with investors for the life of the fund - typically 3 to 7 years including the search period and operating phase. For a detailed breakdown of the economic terms embedded in the LPA, see our guide to the <Link href="/learn/search-fund-term-sheet" className="text-apple-accent hover:underline">search fund term sheet</Link>.</p>
        <ul className={ulClass}>
          <li><strong>Structure:</strong> The search fund is typically organized as a limited partnership (LP) or limited liability company (LLC)</li>
          <li><strong>General Partner (GP):</strong> The searcher, who manages the fund and makes decisions</li>
          <li><strong>Limited Partners (LPs):</strong> The investors, who provide capital but have limited decision-making authority</li>
          <li><strong>Key provisions:</strong></li>
        </ul>
        <ul className={ulClass}>
          <li>Investment period (typically 24 months for the search phase)</li>
          <li>Capital call mechanics and schedule</li>
          <li>Allocation of profits and losses</li>
          <li>Management fees (if any during search phase)</li>
          <li>Carried interest/equity participation for the searcher</li>
          <li>Dissolution provisions if no acquisition is made</li>
          <li>Key person provisions</li>
          <li>Reporting requirements</li>
        </ul>
      </div>

      <h2 className={h2Class}>Subscription Agreement</h2>
      <div className={bodyClass}>
        <p>Each investor signs a subscription agreement committing their capital:</p>
        <ul className={ulClass}>
          <li><strong>Capital commitment:</strong> The amount the investor commits to invest</li>
          <li><strong>Investment tranches:</strong> Typically split between search capital and acquisition capital</li>
          <li><strong>Accredited investor representations:</strong> Confirmation of investor qualification status</li>
          <li><strong>Risk disclosures:</strong> Acknowledgment of the speculative nature of the investment</li>
          <li><strong>Pro-rata rights:</strong> Rights to participate in the acquisition investment proportionally</li>
          <li><strong>Information rights:</strong> Access to financial reports and company updates</li>
        </ul>
      </div>

      <h2 className={h2Class}>Private Placement Memorandum (PPM)</h2>
      <div className={bodyClass}>
        <p>The <Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">PPM</Link> is the primary fundraising document. Yale SOM&apos;s Search Fund Legal Documents Series emphasizes that a well-crafted PPM satisfies SEC Regulation D requirements and serves as the searcher&apos;s most important marketing tool during the fundraising process:</p>
        <ul className={ulClass}>
          <li>Detailed description of the search fund strategy and investment thesis</li>
          <li>Background and qualifications of the searcher</li>
          <li>Terms of the offering (unit economics, step-up, carried interest)</li>
          <li>Risk factors specific to the search fund model</li>
          <li>Use of proceeds (search budget breakdown)</li>
          <li>Tax considerations for investors</li>
          <li>Historical performance data for search funds as an asset class</li>
        </ul>
      </div>

      <h2 className={h2Class}>Investor Side Letter</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Purpose:</strong> Grants specific investors special rights not available to all LPs</li>
          <li><strong>Common provisions:</strong> Most Favored Nation (MFN) clauses, enhanced information rights, board seat commitments, co-investment rights</li>
          <li><strong>When used:</strong> Typically for anchor investors who commit larger amounts or provide strategic value</li>
          <li><strong>Caution:</strong> Too many side letters create administrative complexity; keep them limited</li>
        </ul>
      </div>

      <h2 className={h2Class}>Step-Up & Equity Documents</h2>
      <div className={bodyClass}>
        <p>Documents governing the searcher&apos;s equity participation at acquisition:</p>
        <ul className={ulClass}>
          <li><strong>Step-up conversion:</strong> How search capital converts to acquisition equity (typically at 1.5x, meaning $1 of search capital converts to $1.50 of acquisition equity)</li>
          <li><strong>Searcher equity vesting:</strong> Schedule for the searcher&apos;s <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">carried interest / management equity</Link> (typically 20&ndash;25% over 4&ndash;5 years)</li>
          <li><strong>Equity rollover:</strong> Terms for the searcher to invest personal capital alongside investors</li>
          <li><strong>Accelerated vesting:</strong> Conditions under which vesting accelerates (change of control, termination without cause)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Operating Agreement (Post-Acquisition)</h2>
      <div className={bodyClass}>
        <p>After the acquisition closes, a new operating agreement governs the acquired company:</p>
        <ul className={ulClass}>
          <li><strong>Board composition:</strong> Typically 3&ndash;5 members (searcher + investor representatives + independent)</li>
          <li><strong>Reserved matters:</strong> Decisions requiring board/investor approval (new debt, major capex, hiring/firing executives, dividends)</li>
          <li><strong>Drag-along/tag-along rights:</strong> Sale protections for majority and minority holders</li>
          <li><strong>Anti-dilution provisions:</strong> Protection against value dilution in future financing rounds</li>
          <li><strong>Reporting cadence:</strong> Monthly financials, quarterly board meetings, annual audits</li>
        </ul>
        <p>The operating agreement is where theory meets practice. Harvard Business School&apos;s Note on Search Fund Governance found that search fund CEOs who proactively structured clear reserved-matter thresholds and reporting cadences during acquisition negotiations experienced significantly fewer board conflicts in the first two years of operation. Pay close attention to the materiality thresholds for reserved matters - setting them too low creates operational friction, while setting them too high reduces investor oversight. A common approach is to require board approval for capital expenditures above $50,000, new debt above $100,000, and any hiring or termination of C-suite executives. For more on governance best practices, see our guide to <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board governance in search funds</Link>.</p>
      </div>

      <h2 className={h2Class}>Standard Templates & Resources</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Yale SOM Search Fund Documents:</strong> The most widely used template set in the industry, regularly updated</li>
          <li><strong>Stanford GSB Search Fund Primer:</strong> Includes template documents and term explanations</li>
          <li><strong>IESE International Templates:</strong> Adapted for European and international search fund structures</li>
          <li><strong>SearchFunder.com Document Library:</strong> Community-contributed templates and examples</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>The LPA, subscription agreement, and PPM form the core legal documents for a search fund raise</li>
          <li>Yale SOM and Stanford GSB templates are the industry standard &mdash; use them as your starting point</li>
          <li>Negotiate the step-up ratio, vesting schedule, and reserved matters carefully &mdash; these define your economics</li>
          <li>Side letters should be used sparingly for anchor investors providing outsized value</li>
          <li>Engage an attorney experienced in search fund structures &mdash; generic M&A lawyers may miss industry-specific nuances</li>
        </ul>
      </div>

      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>How much do search fund legal documents cost to prepare?</h3>
        <p>Budget $15,000 to $30,000 for initial document preparation, assuming you start from Yale SOM or Stanford GSB templates. Costs are higher if your fund has an unusual structure (international investors, multiple searchers, non-standard economics) or if you need to negotiate extensive side letters. Using an attorney experienced in search fund structures significantly reduces costs because they can work efficiently from templates rather than drafting from scratch.</p>

        <h3 className={h3Class}>Can I use the same LPA for both the search phase and the acquisition?</h3>
        <p>Most traditional search funds use a single LPA that covers both phases, with provisions for capital calls at different stages. However, some structures - particularly pledge funds - use separate documents for the search phase and acquisition phase. The single-LPA approach is simpler and less expensive to administer. For a comparison of fund structures, see our guide to the <Link href="/learn/pledge-fund-model" className="text-apple-accent hover:underline">pledge fund model</Link>.</p>

        <h3 className={h3Class}>What happens to the legal documents if I do not find an acquisition?</h3>
        <p>The LPA includes dissolution provisions that govern what happens if the search period expires without an acquisition. Typically, any remaining search capital is returned to investors on a pro-rata basis. The searcher has no obligation to repay salary or expenses already incurred. The partnership is dissolved, and the entity is wound down. Some LPAs allow for a one-time extension of 6 to 12 months with investor approval.</p>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">How to Write a PPM</Link></li>
        <li><Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">Search Fund Investor Economics</Link></li>
        <li><Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">Cap Tables & Equity in Search Funds</Link></li>
        <li><Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">Searcher Compensation</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Yale SOM, <em>Search Fund Legal Documents Series</em> (2020&ndash;2024)</li>
        <li>Stanford GSB, <em>Search Fund Primer</em> (2024)</li>
        <li>IESE Business School, <em>International Search Fund Study: Legal Structures</em> (2024)</li>
        <li>Harvard Business School, <em>Note on Search Fund Governance</em> (2023)</li>
      </ul>
    </article>
  );
}
