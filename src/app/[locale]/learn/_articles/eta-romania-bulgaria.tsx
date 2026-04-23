import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ETARomaniaBulgariaArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in Romania &amp; Bulgaria</h1>
      <div className={bodyClass}>
        <p>Romania and Bulgaria represent the EU&apos;s most affordable markets for business acquisitions, with entry valuations of 2&ndash;5x EBITDA and growing economies that are gradually converging with Western European standards. Combined, these two countries have 26M people, EU membership, and rapidly developing IT and manufacturing sectors. For adventurous search fund entrepreneurs, the region offers the EU&apos;s best value with significant upside as convergence continues.</p>
      </div>

      <h2 className={h2Class}>Market Overview</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Romania:</strong> $350B GDP, 19M population. EU&apos;s 7th largest economy. Strong IT sector (Bucharest, Cluj-Napoca).</li>
          <li><strong>Bulgaria:</strong> $105B GDP, 6.5M population. Lowest labor costs in the EU. Growing outsourcing destination.</li>
          <li><strong>EU membership:</strong> Both are EU members. Romania joined the Eurozone waiting room; Bulgaria adopted the euro in 2024.</li>
          <li><strong>Growth rates:</strong> 3&ndash;5% GDP growth, among the highest in the EU</li>
          <li><strong>Valuations:</strong> 2&ndash;5x EBITDA &mdash; the lowest in the EU. Significant arbitrage vs. Western European multiples.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Tax Framework</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Romania corporate tax:</strong> 16% flat rate (one of the lowest in the EU). 1%/3% micro-company tax for small firms.</li>
          <li><strong>Bulgaria corporate tax:</strong> 10% flat rate &mdash; the lowest in the EU</li>
          <li><strong>Romania dividend tax:</strong> 8% withholding tax</li>
          <li><strong>Bulgaria dividend tax:</strong> 5% withholding tax</li>
          <li><strong>IT sector incentives:</strong> Romania exempts IT employees from income tax, reducing labor costs significantly</li>
        </ul>
      </div>

      <h2 className={h2Class}>Target Industries</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>IT &amp; software (Romania):</strong> Bucharest and Cluj are major European tech hubs. Strong developer talent at 30&ndash;50% of Western costs.</li>
          <li><strong>Outsourcing &amp; BPO (Bulgaria):</strong> Sofia is a growing shared services hub for Western companies. Multilingual workforce.</li>
          <li><strong>Manufacturing:</strong> Automotive components (Romania), textiles, food processing. Access to EU supply chains.</li>
          <li><strong>Agriculture &amp; food:</strong> Romania has the EU&apos;s largest agricultural land area. Food processing with EU export potential.</li>
          <li><strong>Tourism:</strong> Black Sea coast, ski resorts, cultural tourism. Seasonal but growing.</li>
          <li><strong>Healthcare:</strong> Private clinics and dental tourism (especially Romania). Growing medical tourism destination.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Challenges</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Institutional quality:</strong> Corruption indices remain below EU average. Legal system can be unpredictable.</li>
          <li><strong>Infrastructure:</strong> Road and rail infrastructure still developing, especially outside major cities</li>
          <li><strong>Informal economy:</strong> Cash-based transactions and informal practices require careful <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link></li>
          <li><strong>Talent retention:</strong> Brain drain to Western Europe is a persistent challenge. Salaries rising to retain talent.</li>
          <li><strong>Advisory ecosystem:</strong> M&amp;A advisory and search fund infrastructure is minimal. Big Four firms present in capitals.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Romania and Bulgaria offer the EU&apos;s lowest acquisition valuations (2&ndash;5x EBITDA) and tax rates (10&ndash;16%)</li>
          <li>IT/software (Romania) and outsourcing/BPO (Bulgaria) are the most attractive sectors for ETA</li>
          <li>EU convergence creates long-term upside as these economies gradually reach Western European standards</li>
          <li>Institutional and infrastructure challenges require patience and strong local partnerships</li>
          <li>Romania&apos;s IT tax exemption makes it one of Europe&apos;s most competitive tech talent markets</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link></li>
        <li><Link href="/learn/eta-poland" className="text-apple-accent hover:underline">ETA in Poland</Link></li>
        <li><Link href="/learn/eta-czech-republic-slovakia" className="text-apple-accent hover:underline">ETA in Czech Republic &amp; Slovakia</Link></li>
        <li><Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">Best Countries to Buy a Business</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Romanian National Institute of Statistics, <em>Business Demographics Report</em> (2024)</li>
        <li>InvestBulgaria Agency, <em>Investment Guide to Bulgaria</em> (2024)</li>
        <li>European Commission, <em>SBA Fact Sheets: Romania &amp; Bulgaria</em> (2024)</li>
      </ul>
    </article>
  );
}
