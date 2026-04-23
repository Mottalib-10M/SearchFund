import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ETAVsPrivateCreditArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA vs. Private Credit: Investment Comparison</h1>
      <div className={bodyClass}>
        <p>Private credit &mdash; direct lending to middle-market companies outside of traditional bank financing &mdash; has grown to $1.7T+ in assets under management and offers an alternative path to deploying capital in small and medium businesses. While ETA involves equity ownership and operational control of a single business, private credit provides debt exposure across a portfolio of companies with contractual returns and downside protection. This comparison helps investors evaluate which approach aligns with their objectives.</p>
      </div>

      <h2 className={h2Class}>How They Work</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA model:</strong> Acquire 100% of a business, become CEO, improve operations, and create equity value over 5&ndash;7 years. Returns from cash flow + exit.</li>
          <li><strong>Private credit model:</strong> Lend money to businesses at fixed or floating rates with contractual repayment terms. Returns from interest income + fees.</li>
          <li><strong>ETA structure:</strong> Equity investment with significant leverage. Searcher contributes 5&ndash;20% equity.</li>
          <li><strong>Private credit structure:</strong> Senior secured, unitranche, or mezzanine debt. First lien security on company assets.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Risk &amp; Return Comparison</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA returns:</strong> Median 2.5&ndash;4x equity return (25&ndash;35% IRR). High variance &mdash; some return 0x, top quartile returns 5&ndash;10x+.</li>
          <li><strong>Private credit returns:</strong> 8&ndash;15% annual yield (current income). Lower variance with contractual cash flows. Capital preservation focus.</li>
          <li><strong>ETA risk:</strong> Equity risk in a single concentrated position. Total loss possible if business fails. Operational execution risk.</li>
          <li><strong>Private credit risk:</strong> Credit risk across a diversified portfolio. First-lien position provides recovery in default (60&ndash;80% typical recovery).</li>
          <li><strong>Liquidity:</strong> Both are illiquid. ETA exits take 5&ndash;7+ years. Private credit terms are typically 3&ndash;7 years with amortization.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Involvement &amp; Expertise</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA involvement:</strong> Full-time CEO role. 50&ndash;60+ hours/week. Complete career commitment for 5&ndash;7+ years.</li>
          <li><strong>Private credit involvement:</strong> Portfolio management and monitoring. Due diligence intensive but not operationally hands-on.</li>
          <li><strong>ETA expertise:</strong> Operational management, leadership, and industry knowledge. Generalist MBA skills applicable.</li>
          <li><strong>Private credit expertise:</strong> Credit analysis, underwriting, structuring, and portfolio monitoring. Finance and banking background typical.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Income Characteristics</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA income:</strong> CEO salary ($150&ndash;300K) + distributions from cash flow + equity appreciation at exit. Total comp is back-end loaded.</li>
          <li><strong>Private credit income:</strong> Regular interest payments (monthly or quarterly). Current yield with predictable cash flow. No operational salary.</li>
          <li><strong>Tax treatment:</strong> ETA exit is typically capital gains. Private credit interest is ordinary income (less tax-efficient).</li>
          <li><strong>Downside protection:</strong> Private credit has structural seniority (paid before equity). ETA equity is first-loss capital.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>ETA offers 25&ndash;35% IRR potential with operational control but concentrated single-asset risk and full-time commitment</li>
          <li>Private credit provides 8&ndash;15% predictable yields with structural downside protection and portfolio diversification</li>
          <li>ETA is for operators who want to build and run a business; private credit is for investors who want contractual returns</li>
          <li>Private credit offers better current income and capital preservation; ETA offers higher total return potential</li>
          <li>Many search fund investors also invest in private credit for income diversification alongside equity positions</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-vs-private-equity" className="text-apple-accent hover:underline">ETA vs. Private Equity</Link></li>
        <li><Link href="/learn/eta-vs-real-estate" className="text-apple-accent hover:underline">ETA vs. Real Estate</Link></li>
        <li><Link href="/learn/mezzanine-financing" className="text-apple-accent hover:underline">Mezzanine Financing</Link></li>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Preqin, <em>Global Private Credit Report</em> (2024)</li>
        <li>Stanford GSB, <em>Search Fund Study</em> (2024)</li>
        <li>Cliffwater, <em>Direct Lending Index Performance</em> (2024)</li>
      </ul>
    </article>
  );
}
