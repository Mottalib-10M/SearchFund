import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ETAVsLowerMiddleMarketPEArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA vs. Lower Middle-Market Private Equity</h1>
      <div className={bodyClass}>
        <p>Lower middle-market private equity (LMMPE) &mdash; firms targeting acquisitions in the $10&ndash;100M enterprise value range &mdash; operates in a space that increasingly overlaps with search funds. Both models acquire profitable, established businesses and improve them operationally, but they differ in fund structure, deal size, operator involvement, and return expectations. This comparison helps aspiring acquirers and investors understand where ETA ends and PE begins.</p>
      </div>

      <h2 className={h2Class}>Structural Differences</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA fund structure:</strong> Individual raises search capital ($400&ndash;600K) from 15&ndash;25 investors. Acquires one company. Searcher becomes CEO.</li>
          <li><strong>LMMPE fund structure:</strong> GP raises a committed fund ($50&ndash;500M+) from LPs. Acquires 5&ndash;15 portfolio companies. Hires or retains management.</li>
          <li><strong>ETA deal size:</strong> $5&ndash;30M enterprise value. Single acquisition. Searcher invests alongside investors.</li>
          <li><strong>LMMPE deal size:</strong> $10&ndash;100M enterprise value. Platform + add-on acquisitions. GP co-invests 1&ndash;5% of fund.</li>
          <li><strong>ETA timeline:</strong> 2-year search + 5&ndash;7 year hold. Single investment cycle per searcher.</li>
          <li><strong>LMMPE timeline:</strong> 3&ndash;5 year investment period + 3&ndash;5 year hold. Multiple fund vintages over a career.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Operator Model</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA operator:</strong> Searcher becomes full-time CEO. Lives in the market. Deeply embedded in daily operations.</li>
          <li><strong>LMMPE operator:</strong> PE firm installs or retains management. Deal team provides board-level oversight, not daily management.</li>
          <li><strong>ETA alignment:</strong> Searcher has significant personal equity at stake (20&ndash;30% of company). High alignment with investors.</li>
          <li><strong>LMMPE alignment:</strong> Management team typically receives 10&ndash;20% equity pool. GP economics come primarily from fund-level carry (20%).</li>
          <li><strong>ETA autonomy:</strong> Searcher-CEO has operational autonomy with board oversight. Strategic decisions involve investor consultation.</li>
          <li><strong>LMMPE control:</strong> PE firm controls board, major decisions, and exit timing. Management operates within PE firm&apos;s strategic framework.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Return Comparison</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA returns:</strong> Median 2.5&ndash;4x equity return. 25&ndash;35% gross IRR. Returns driven by operational improvement and organic growth.</li>
          <li><strong>LMMPE returns:</strong> Target 2&ndash;3x net MOIC. 15&ndash;25% net IRR. Returns from operational improvement, multiple expansion, and leverage.</li>
          <li><strong>ETA value creation:</strong> Revenue growth, margin improvement, and modest leverage. Less financial engineering.</li>
          <li><strong>LMMPE value creation:</strong> Revenue growth + margin improvement + buy-and-build + multiple arbitrage + leverage optimization.</li>
          <li><strong>Fee impact:</strong> ETA has no management fee drag. LMMPE charges 2% management fee + 20% carry, reducing net returns to LPs.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Career Path Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA career:</strong> Become a CEO immediately post-MBA. Build operational expertise. Exit options include serial ETA, PE operating partner, or board roles.</li>
          <li><strong>LMMPE career:</strong> Start as associate/VP. Progress to principal/partner over 8&ndash;15 years. Build deal-making and portfolio management expertise.</li>
          <li><strong>ETA risk:</strong> ~25% of searches don&apos;t result in acquisition. Career risk is concentrated in a single bet.</li>
          <li><strong>LMMPE risk:</strong> Employment risk (firm performance, fundraising cycles) but diversified across multiple deals and fund vintages.</li>
          <li><strong>ETA-to-PE pipeline:</strong> Successful ETA operators increasingly join LMMPE firms as operating partners or found their own PE firms.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>ETA and LMMPE both target profitable SMEs but differ in fund structure, deal size, and operator involvement</li>
          <li>ETA offers hands-on CEO experience and higher personal equity (20&ndash;30%); LMMPE offers portfolio diversification and institutional infrastructure</li>
          <li>ETA returns (25&ndash;35% gross IRR) compare favorably to LMMPE (15&ndash;25% net IRR), partly because ETA has no management fee drag</li>
          <li>LMMPE firms increasingly recruit ETA alumni as operating partners, creating a natural career progression</li>
          <li>For aspiring operators, ETA is the faster path to CEO; for aspiring investors, LMMPE offers a more structured career trajectory</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-vs-private-equity" className="text-apple-accent hover:underline">ETA vs. Private Equity</Link></li>
        <li><Link href="/learn/eta-vs-independent-sponsor" className="text-apple-accent hover:underline">ETA vs. Independent Sponsor</Link></li>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns</Link></li>
        <li><Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">Self-Funded vs. Traditional Search</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study</em> (2024)</li>
        <li>Pitchbook, <em>Lower Middle Market PE Report</em> (2024)</li>
        <li>Bain &amp; Company, <em>Global Private Equity Report</em> (2024)</li>
      </ul>
    </article>
  );
}
