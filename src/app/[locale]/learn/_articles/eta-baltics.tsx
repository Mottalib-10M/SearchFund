import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ETABalticsArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in the Baltics: Estonia, Latvia &amp; Lithuania</h1>
      <div className={bodyClass}>
        <p>The Baltic states &mdash; Estonia, Latvia, and Lithuania &mdash; punch far above their weight in business innovation and digital infrastructure. With a combined GDP of $130B, EU and Eurozone membership, and among the most business-friendly environments in Europe, the Baltics offer search fund entrepreneurs a unique combination of digital-first economies, competitive valuations, and access to both EU and Nordic markets.</p>
      </div>

      <h2 className={h2Class}>Market Overview</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Estonia:</strong> $40B GDP, 1.3M population. The world&apos;s most advanced digital society (e-residency, digital ID). Startup nation.</li>
          <li><strong>Latvia:</strong> $45B GDP, 1.8M population. Transit hub between East and West. Growing shared services center.</li>
          <li><strong>Lithuania:</strong> $75B GDP, 2.8M population. Largest Baltic economy. Fintech hub (over 100 licensed fintech firms).</li>
          <li><strong>All three:</strong> EU and Eurozone members with euro currency. NATO membership provides geopolitical stability.</li>
          <li><strong>Valuations:</strong> 3&ndash;6x EBITDA for SMEs. Discount to Nordics (8&ndash;12x) creates arbitrage opportunities.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Tax &amp; Legal Framework</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Estonia:</strong> 0% corporate tax on retained earnings (tax only on distributions at 20%). Unique and entrepreneur-friendly.</li>
          <li><strong>Latvia:</strong> 20% corporate tax on distributed profits (similar to Estonian model since 2018)</li>
          <li><strong>Lithuania:</strong> 15% corporate tax (one of the lowest in the EU). 5% rate for small companies.</li>
          <li><strong>e-Residency (Estonia):</strong> Digital identity allowing foreigners to establish and manage Estonian companies remotely</li>
          <li><strong>Entity type:</strong> O&Uuml; (Estonia), SIA (Latvia), UAB (Lithuania) &mdash; all limited liability company equivalents</li>
        </ul>
      </div>

      <h2 className={h2Class}>Target Industries</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>IT &amp; software:</strong> Strong developer talent at 40&ndash;60% lower cost than Western Europe. SaaS, IT services, and custom development.</li>
          <li><strong>Fintech:</strong> Lithuania is the EU&apos;s leading fintech hub by license count. Payment services and banking technology.</li>
          <li><strong>Logistics &amp; transit:</strong> Strategic location between Scandinavia, Central Europe, and CIS countries.</li>
          <li><strong>Manufacturing:</strong> Wood products, food processing, electronics, and precision manufacturing</li>
          <li><strong>Professional services:</strong> Shared services centers, BPO, and professional services firms serving Nordic and EU clients</li>
          <li><strong>Renewable energy:</strong> Wind and solar development with strong government incentives and EU support</li>
        </ul>
      </div>

      <h2 className={h2Class}>Challenges</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Small market size:</strong> Combined population of 6M. Scale requires serving Nordic/EU export markets.</li>
          <li><strong>Geopolitical risk:</strong> Proximity to Russia. NATO membership mitigates but doesn&apos;t eliminate perceived risk.</li>
          <li><strong>Population decline:</strong> Emigration to Western Europe has shrunk the workforce. Talent competition is intense.</li>
          <li><strong>Limited deal flow:</strong> Fewer M&amp;A intermediaries and organized deal platforms than Western Europe</li>
          <li><strong>Language:</strong> Estonian, Latvian, and Lithuanian are distinct languages. English is widely spoken in business.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>The Baltics offer EU/Eurozone membership with the most business-friendly tax regimes in Europe (especially Estonia&apos;s 0% retained earnings tax)</li>
          <li>IT/software, fintech, and logistics are the strongest sectors with export-oriented growth potential</li>
          <li>Valuations at 3&ndash;6x EBITDA create meaningful arbitrage vs. Nordic (8&ndash;12x) and Western European markets</li>
          <li>Small domestic markets mean businesses must be export-oriented for meaningful scale</li>
          <li>Estonia&apos;s e-Residency program uniquely facilitates foreign ownership and remote business management</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link></li>
        <li><Link href="/learn/eta-nordics" className="text-apple-accent hover:underline">ETA in the Nordics</Link></li>
        <li><Link href="/learn/eta-poland" className="text-apple-accent hover:underline">ETA in Poland</Link></li>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions in Europe</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Invest Lithuania, <em>Doing Business in Lithuania Guide</em> (2024)</li>
        <li>Enterprise Estonia, <em>Business Environment Report</em> (2024)</li>
        <li>European Commission, <em>SBA Fact Sheets: Estonia, Latvia, Lithuania</em> (2024)</li>
      </ul>
    </article>
  );
}
