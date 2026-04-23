import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function InternationalVsUSReturnsArticle() {
  return (
    <article>
      <h1 className={h1Class}>International vs. US Search Fund Returns</h1>
      <div className={bodyClass}>
        <p>As search funds expand globally &mdash; from Europe and Latin America to Asia and the Middle East &mdash; investors increasingly ask whether international search funds can match the returns of the US market, which has 60+ years of performance data. This analysis compares return profiles, risk factors, and structural differences between US and international search fund investing to help investors allocate capital across geographies.</p>
      </div>

      <h2 className={h2Class}>US Search Fund Returns</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Track record:</strong> 60+ years of data. Stanford GSB publishes the definitive study with hundreds of completed search funds.</li>
          <li><strong>Median returns:</strong> 2.5&ndash;4x MOIC (multiple on invested capital). 25&ndash;35% gross IRR. Strong risk-adjusted returns.</li>
          <li><strong>Acquisition rate:</strong> ~75% of traditional search funds complete an acquisition. Higher for experienced searchers.</li>
          <li><strong>Top quartile:</strong> Best-performing US search funds return 5&ndash;10x+. Power law distribution with a few outsized winners.</li>
          <li><strong>Market depth:</strong> 300+ active investors, deep advisory ecosystem, and abundant deal flow across industries.</li>
        </ul>
      </div>

      <h2 className={h2Class}>International Search Fund Returns</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Track record:</strong> 15&ndash;20 years of data. IESE Business School publishes the leading international study (primarily European data).</li>
          <li><strong>European returns:</strong> Comparable to US returns on a gross basis. 2&ndash;4x MOIC reported by IESE for European search funds.</li>
          <li><strong>Latin American returns:</strong> Emerging data suggests strong returns in Brazil and Mexico, but small sample sizes limit conclusions.</li>
          <li><strong>Asia-Pacific returns:</strong> Nascent market with very limited performance data. Japan and India showing early promise.</li>
          <li><strong>Acquisition rate:</strong> Similar to US (~70&ndash;75%) in mature markets (Spain, France, UK). Lower in emerging ETA markets.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Differences</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Deal size:</strong> International deals tend to be smaller. European search funds typically acquire businesses at &euro;3&ndash;15M enterprise value vs. $5&ndash;30M in the US.</li>
          <li><strong>Leverage availability:</strong> US has deeper acquisition financing market (SBA loans, senior debt). European and LatAm leverage is typically lower.</li>
          <li><strong>Investor ecosystem:</strong> US has 300+ active investors. European market has fewer dedicated search fund investors, creating more competition for capital.</li>
          <li><strong>Currency risk:</strong> International investments expose US-based investors to currency fluctuations that can significantly impact returns.</li>
          <li><strong>Regulatory complexity:</strong> Cross-border deals involve different legal systems, tax regimes, and labor laws that add complexity and cost.</li>
          <li><strong>Exit markets:</strong> US has deeper M&amp;A exit markets. European exits may take longer and involve fewer potential buyers.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Allocation Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Diversification benefit:</strong> International search funds provide geographic diversification and exposure to different economic cycles.</li>
          <li><strong>Entry timing:</strong> International markets are less mature, offering potential first-mover advantages and less competition.</li>
          <li><strong>Due diligence costs:</strong> International investments require more due diligence effort for cultural, legal, and regulatory assessment.</li>
          <li><strong>Recommended allocation:</strong> Experienced search fund investors typically allocate 20&ndash;40% of their search fund portfolio to international investments.</li>
          <li><strong>Country selection:</strong> Focus on markets with established ETA ecosystems (Spain, France, UK, Germany) before expanding to frontier markets.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>European search fund returns are comparable to US returns on a gross basis, with IESE data showing 2&ndash;4x MOIC</li>
          <li>US benefits from deeper data (60+ years), more investors (300+), and more accessible acquisition financing (SBA loans)</li>
          <li>International search funds offer geographic diversification and first-mover advantages in less competitive markets</li>
          <li>Currency risk, regulatory complexity, and shallower exit markets are the primary additional risks for international investing</li>
          <li>A balanced portfolio allocates 20&ndash;40% to international search funds, focusing on established European ETA markets</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns</Link></li>
        <li><Link href="/learn/portfolio-construction-search-fund" className="text-apple-accent hover:underline">Portfolio Construction</Link></li>
        <li><Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link></li>
        <li><Link href="/learn/search-fund-investor-ecosystems" className="text-apple-accent hover:underline">Search Fund Investor Ecosystems</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study</em> (2024)</li>
        <li>IESE Business School, <em>International Search Fund Study</em> (2024)</li>
        <li>Cambridge Associates, <em>Private Equity Geographic Diversification</em> (2024)</li>
      </ul>
    </article>
  );
}
