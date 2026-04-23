import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ETACroatiaSloveniaArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in Croatia &amp; Slovenia</h1>
      <div className={bodyClass}>
        <p>Croatia and Slovenia sit at the crossroads of Central Europe, the Mediterranean, and the Balkans, offering search fund entrepreneurs access to EU markets with attractive valuations and quality of life. Slovenia, with its $65B GDP and Eurozone membership since 2007, is the most developed former Yugoslav economy. Croatia, with its $80B GDP and EU entry in 2013 (Eurozone in 2023), combines a booming tourism sector with a growing services economy. Together they offer a compact but compelling ETA opportunity.</p>
      </div>

      <h2 className={h2Class}>Market Overview</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Slovenia:</strong> $65B GDP, 2.1M population. Most developed ex-Yugoslav economy. Strong manufacturing, pharma, and IT sectors.</li>
          <li><strong>Croatia:</strong> $80B GDP, 3.9M population. Tourism powerhouse (20M+ visitors/year). Growing services and tech sectors.</li>
          <li><strong>EU &amp; Eurozone:</strong> Both are EU and Eurozone members with euro currency. Full access to EU single market.</li>
          <li><strong>Business landscape:</strong> Dominated by SMEs. Post-transition business founders reaching retirement age.</li>
          <li><strong>Valuations:</strong> 3&ndash;6x EBITDA. Discount to Austria and Italy but premium to Bulgaria and Romania.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Tax &amp; Legal Framework</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Slovenia corporate tax:</strong> 22%. Tax incentives for R&amp;D (100% deduction) and investment (40% deduction).</li>
          <li><strong>Croatia corporate tax:</strong> 18% (10% for companies with revenue under &euro;1M).</li>
          <li><strong>Entity types:</strong> d.o.o. (both countries) &mdash; limited liability company, the standard acquisition vehicle</li>
          <li><strong>Dividend tax:</strong> 25% in Slovenia; 10% in Croatia (with DTAA reductions possible)</li>
          <li><strong>Employment:</strong> Strong labor protections in both countries. Minimum notice periods and severance requirements.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Target Industries</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Tourism &amp; hospitality (Croatia):</strong> Hotels, tour operators, yacht charter, adventure tourism. Seasonal but high-margin.</li>
          <li><strong>Manufacturing (Slovenia):</strong> Precision manufacturing, automotive suppliers, pharmaceutical manufacturing. Export-oriented.</li>
          <li><strong>IT &amp; software:</strong> Growing tech scenes in Ljubljana and Zagreb with competitive developer talent</li>
          <li><strong>Food &amp; wine:</strong> Istrian olive oil, Croatian and Slovenian wines, food processing. Premium export potential.</li>
          <li><strong>Healthcare:</strong> Private clinics, dental practices, and medical tourism (especially dental in Croatia)</li>
          <li><strong>Professional services:</strong> Accounting, consulting, and engineering firms serving local and cross-border clients</li>
        </ul>
      </div>

      <h2 className={h2Class}>Challenges</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Small markets:</strong> Combined 6M population. Scale requires exports to Austria, Italy, Germany, or broader EU.</li>
          <li><strong>Seasonality (Croatia):</strong> Tourism-dependent businesses face significant seasonal revenue variations</li>
          <li><strong>Brain drain:</strong> Skilled workers emigrating to Germany, Austria, and Ireland. Rising salaries to retain talent.</li>
          <li><strong>M&amp;A ecosystem:</strong> Limited deal intermediary infrastructure. Proprietary sourcing required.</li>
          <li><strong>Language:</strong> Slovenian and Croatian are similar but distinct. English common in business but local language helps.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Slovenia and Croatia offer EU/Eurozone access with 3&ndash;6x EBITDA valuations and high quality of life</li>
          <li>Slovenia&apos;s manufacturing and pharma sectors offer export-oriented, year-round business opportunities</li>
          <li>Croatia&apos;s tourism sector is booming but seasonal; services and tech are growing year-round alternatives</li>
          <li>Croatia&apos;s 10% corporate tax rate for small companies is among the EU&apos;s most attractive</li>
          <li>Both countries serve as effective platforms for serving the broader DACH and Mediterranean markets</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link></li>
        <li><Link href="/learn/eta-austria" className="text-apple-accent hover:underline">ETA in Austria</Link></li>
        <li><Link href="/learn/eta-italy" className="text-apple-accent hover:underline">ETA in Italy</Link></li>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions in Europe</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>SPIRIT Slovenia, <em>Invest in Slovenia Guide</em> (2024)</li>
        <li>Croatian Chamber of Economy, <em>Business Climate Report</em> (2024)</li>
        <li>European Commission, <em>SBA Fact Sheets: Slovenia &amp; Croatia</em> (2024)</li>
      </ul>
    </article>
  );
}
