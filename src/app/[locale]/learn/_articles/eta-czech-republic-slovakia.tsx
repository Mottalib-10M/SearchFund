import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ETACzechRepublicSlovakiaArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in Czech Republic &amp; Slovakia</h1>
      <div className={bodyClass}>
        <p>The Czech Republic and Slovakia &mdash; two countries that share deep historical and economic ties &mdash; represent an emerging frontier for entrepreneurship through acquisition in Central Europe. With combined GDP of $400B+, strong manufacturing bases, EU membership, and an aging generation of post-communist business founders, the region offers attractive entry valuations and untapped consolidation potential for search fund entrepreneurs willing to navigate a less-developed advisory ecosystem.</p>
      </div>

      <h2 className={h2Class}>Market Overview</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Czech Republic:</strong> $330B GDP, 10.9M population. Strong industrial economy with automotive, engineering, and IT sectors.</li>
          <li><strong>Slovakia:</strong> $120B GDP, 5.5M population. Major automotive hub (Kia, VW, Stellantis) with growing services sector.</li>
          <li><strong>Succession wave:</strong> First generation of post-1989 entrepreneurs reaching retirement age. Many businesses founded in 1990s need succession solutions.</li>
          <li><strong>EU membership:</strong> Both countries are EU members with euro adoption in Slovakia (2009); Czech Republic retains the crown (CZK).</li>
          <li><strong>Entry valuations:</strong> 3&ndash;6x EBITDA for SMEs, significantly below Western European levels</li>
        </ul>
      </div>

      <h2 className={h2Class}>Legal &amp; Tax Framework</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Czech corporate tax:</strong> 21% (reduced from 19% + solidarity surcharge). Competitive within the EU.</li>
          <li><strong>Slovak corporate tax:</strong> 21% standard rate. 15% for companies with revenue under &euro;49,790.</li>
          <li><strong>Entity types:</strong> s.r.o. (limited liability, similar to GmbH) is the standard acquisition vehicle in both countries</li>
          <li><strong>Share vs. asset deals:</strong> Share deals are more common. Asset deals trigger real estate transfer considerations.</li>
          <li><strong>Employment law:</strong> Strong employee protections similar to other EU countries. Transfer of undertaking rules (TUPE equivalent) apply.</li>
          <li><strong>Foreign ownership:</strong> No restrictions on foreign ownership for EU/EEA nationals. Non-EU investors may need trade licenses.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Target Industries</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Manufacturing &amp; engineering:</strong> Precision components, automotive suppliers, and machine building. Czech Republic has the highest industrial output per capita in the EU.</li>
          <li><strong>IT services &amp; software:</strong> Prague and Bratislava are growing tech hubs with strong talent pools and competitive salaries</li>
          <li><strong>Construction &amp; building materials:</strong> Significant infrastructure investment driven by EU structural funds</li>
          <li><strong>Professional services:</strong> Accounting, consulting, and engineering firms serving local and multinational clients</li>
          <li><strong>Food &amp; beverage:</strong> Local food brands, craft beverages, and agricultural processing</li>
          <li><strong>Healthcare services:</strong> Private clinics and dental practices growing as patients seek alternatives to public healthcare</li>
        </ul>
      </div>

      <h2 className={h2Class}>Challenges &amp; Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Language barrier:</strong> Czech and Slovak are necessary for local business operations. English is common in Prague/Bratislava but less so outside capitals.</li>
          <li><strong>Advisory ecosystem:</strong> M&amp;A advisory and search fund infrastructure is less developed than in Western Europe</li>
          <li><strong>Deal sourcing:</strong> Fewer organized deal platforms. Proprietary deal sourcing through accountants, lawyers, and industry contacts is essential.</li>
          <li><strong>Labor market tightness:</strong> Czech Republic has one of the lowest unemployment rates in the EU (2&ndash;3%), making hiring challenging</li>
          <li><strong>Cultural factors:</strong> Post-communist business culture may involve informal practices. <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">Thorough due diligence</Link> is essential.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Czech Republic and Slovakia offer attractive entry valuations (3&ndash;6x EBITDA) with EU market access</li>
          <li>The post-1989 business founder generation is reaching retirement, creating a growing succession opportunity</li>
          <li>Manufacturing, IT services, and construction are the strongest target sectors</li>
          <li>Proprietary deal sourcing is necessary due to limited M&amp;A intermediary infrastructure</li>
          <li>Language skills (Czech/Slovak) are important for operations outside Prague and Bratislava</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link></li>
        <li><Link href="/learn/eta-poland" className="text-apple-accent hover:underline">ETA in Poland</Link></li>
        <li><Link href="/learn/eta-austria" className="text-apple-accent hover:underline">ETA in Austria</Link></li>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions in Europe</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Czech Statistical Office, <em>Business Demographics Report</em> (2024)</li>
        <li>Slovak Investment and Trade Development Agency, <em>Doing Business in Slovakia</em> (2024)</li>
        <li>European Commission, <em>SBA Fact Sheet: Czech Republic &amp; Slovakia</em> (2024)</li>
      </ul>
    </article>
  );
}
