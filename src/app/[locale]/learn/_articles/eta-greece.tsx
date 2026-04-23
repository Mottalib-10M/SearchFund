import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ETAGreeceArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in Greece: Emerging Opportunity</h1>
      <div className={bodyClass}>
        <p>Greece, after a decade of economic crisis and restructuring, is experiencing a renaissance that creates unique acquisition opportunities. With a $240B GDP, EU membership, and a massive generational transition underway in Greek family businesses, the country offers search fund entrepreneurs attractive valuations, a tourism-driven economy, and growing investor interest in Greek assets. The business environment has improved dramatically since 2019, with simplified corporate structures, digitized government services, and pro-business reforms.</p>
      </div>

      <h2 className={h2Class}>Market Overview</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>GDP:</strong> $240B with 2&ndash;3% growth. Among the fastest-growing economies in the Eurozone since 2021.</li>
          <li><strong>Business landscape:</strong> 99.9% SMEs. Family-owned businesses dominate across all sectors.</li>
          <li><strong>Succession crisis:</strong> 70% of Greek family businesses are first-generation. Many founders are 60&ndash;75 with no succession plan.</li>
          <li><strong>Investment grade:</strong> Greece regained investment-grade credit rating in 2024, unlocking institutional capital</li>
          <li><strong>Valuations:</strong> 3&ndash;5x EBITDA for SMEs. Significant discount to Western European levels.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Legal &amp; Tax Framework</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Corporate tax:</strong> 22% flat rate. Competitive for the region.</li>
          <li><strong>Dividend tax:</strong> 5% withholding on dividends (reduced from 10% in 2020)</li>
          <li><strong>Entity types:</strong> IKE (private company) is the preferred modern entity for acquisitions. AE (SA equivalent) for larger companies.</li>
          <li><strong>Non-dom regime:</strong> Special tax regime for foreign investors and executives relocating to Greece (flat &euro;100K annual tax)</li>
          <li><strong>EU framework:</strong> Full EU membership with euro currency, EU legal framework, and access to EU structural funds</li>
        </ul>
      </div>

      <h2 className={h2Class}>Target Industries</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Tourism &amp; hospitality:</strong> Hotels, tour operators, and tourism services. Greece attracted 33M+ tourists in 2023.</li>
          <li><strong>Food &amp; beverage:</strong> Olive oil, wine, dairy, and specialty food production. Strong export brands.</li>
          <li><strong>Healthcare:</strong> Private clinics, diagnostic centers, and dental practices. Growing private healthcare sector.</li>
          <li><strong>Technology:</strong> Athens is an emerging tech hub with growing startup and IT services ecosystems</li>
          <li><strong>Shipping services:</strong> Greece controls 20% of global merchant shipping. Shore-based services and logistics.</li>
          <li><strong>Renewable energy:</strong> Solar and wind installation and services. Strong resource potential and EU incentives.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Challenges</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Bureaucracy:</strong> Despite reforms, Greek bureaucracy can be slow. Digital government services are improving rapidly.</li>
          <li><strong>Informal economy:</strong> Some businesses have historical cash/unreported revenue. Thorough financial <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link> is essential.</li>
          <li><strong>Banking:</strong> Greek banks are recovering but credit availability for acquisitions is still limited</li>
          <li><strong>Brain drain recovery:</strong> Talent returning after the crisis, but skilled labor in some sectors remains tight</li>
          <li><strong>Language:</strong> Greek language is important for local business operations outside of Athens&apos; international business community</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Greece offers attractive 3&ndash;5x EBITDA valuations with EU market access and euro currency</li>
          <li>The succession crisis in first-generation family businesses creates a growing pipeline of motivated sellers</li>
          <li>Tourism, food &amp; beverage, healthcare, and technology are the most promising sectors</li>
          <li>The non-dom tax regime and improving business environment attract foreign investors</li>
          <li>Due diligence rigor is critical given historical informal economy practices</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link></li>
        <li><Link href="/learn/eta-italy" className="text-apple-accent hover:underline">ETA in Italy</Link></li>
        <li><Link href="/learn/eta-spain" className="text-apple-accent hover:underline">ETA in Spain</Link></li>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions in Europe</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Hellenic Statistical Authority, <em>Business Statistics Annual Report</em> (2024)</li>
        <li>Enterprise Greece, <em>Invest in Greece Guide</em> (2024)</li>
        <li>European Commission, <em>SBA Fact Sheet: Greece</em> (2024)</li>
      </ul>
    </article>
  );
}
