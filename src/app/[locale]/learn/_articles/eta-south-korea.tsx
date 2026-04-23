import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ETASouthKoreaArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in South Korea: An Emerging Frontier</h1>
      <div className={bodyClass}>
        <p>South Korea, the world&apos;s 13th largest economy at $1.7T GDP, is beginning to see interest in entrepreneurship through acquisition as a growing generation gap threatens the survival of its 3.5 million small and medium enterprises. With a rapidly aging population (median age 44, one of the lowest birth rates globally), South Korea faces a significant business succession challenge that mirrors Japan&apos;s well-documented crisis &mdash; creating potential opportunities for both domestic and foreign acquirers.</p>
      </div>

      <h2 className={h2Class}>Market Overview</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Economy:</strong> $1.7T GDP, 52M population. OECD member. World-class infrastructure and technology.</li>
          <li><strong>SME landscape:</strong> 3.5M SMEs employing 82% of the workforce. Family-owned businesses dominate.</li>
          <li><strong>Demographics:</strong> World&apos;s lowest birth rate. Rapidly aging population creates an accelerating succession crisis.</li>
          <li><strong>Chaebol shadow:</strong> Large conglomerates (Samsung, Hyundai, LG) dominate the economy, but the SME sector is massive and underserved.</li>
          <li><strong>Cultural shift:</strong> Younger generation increasingly uninterested in inheriting family businesses, preferring careers in tech and finance.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Legal &amp; Tax Framework</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Corporate tax:</strong> Progressive rates: 9% on first &#8361;200M, up to 24% on income over &#8361;300B. Effective rate for SMEs: 10&ndash;20%.</li>
          <li><strong>Foreign investment:</strong> Generally open to foreign investment with FIPA (Foreign Investment Promotion Act) protections.</li>
          <li><strong>Entity type:</strong> Yuhan Hoesa (Ltd.) is the standard acquisition vehicle. Chusik Hoesa (Corp.) for larger companies.</li>
          <li><strong>Inheritance tax:</strong> Among the world&apos;s highest (up to 50%, plus 20% surcharge for controlling stakes). This drives succession pressure.</li>
          <li><strong>Tax incentives:</strong> SME succession tax relief expanded in recent years to encourage ownership transfers</li>
        </ul>
      </div>

      <h2 className={h2Class}>Target Industries</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Manufacturing:</strong> Electronics components, automotive parts, precision machining. World-class supply chain integration.</li>
          <li><strong>IT services &amp; software:</strong> Gaming, fintech, e-commerce platforms. Strong developer talent pool.</li>
          <li><strong>Healthcare:</strong> Medical devices, dental, cosmetics. Korea is a global leader in medical tourism.</li>
          <li><strong>F&amp;B and consumer:</strong> K-food, K-beauty, and Korean cultural products have global export potential</li>
          <li><strong>Professional services:</strong> Accounting, consulting, and engineering firms serving Korean and multinational clients</li>
          <li><strong>Education &amp; EdTech:</strong> Massive education spending culture creates demand for tutoring, test prep, and online learning</li>
        </ul>
      </div>

      <h2 className={h2Class}>Challenges</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Language &amp; culture:</strong> Korean language is essential for local business. Hierarchical business culture requires adaptation.</li>
          <li><strong>M&amp;A ecosystem:</strong> Search fund concept is virtually unknown. Deal sourcing requires building relationships with Korean accountants and lawyers.</li>
          <li><strong>Regulatory complexity:</strong> Complex regulatory environment with significant bureaucracy for foreign investors</li>
          <li><strong>Chaebol dominance:</strong> Large conglomerates create competitive pressure in many sectors</li>
          <li><strong>Labor laws:</strong> Strong employee protections make restructuring difficult. Layoffs require significant process.</li>
          <li><strong>Geopolitical risk:</strong> North Korea proximity creates background risk, though Seoul is a thriving global city</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>South Korea&apos;s succession crisis mirrors Japan&apos;s but is 5&ndash;10 years earlier in development, creating first-mover opportunity</li>
          <li>World&apos;s highest inheritance tax rates (50%+) create strong financial incentive for founders to sell rather than transfer to family</li>
          <li>Manufacturing, IT services, healthcare, and K-culture (food, beauty) are the most promising acquisition sectors</li>
          <li>Korean language and cultural fluency are essential &mdash; this is not a market for remote operation</li>
          <li>The M&amp;A ecosystem for search fund-style acquisitions is nascent, creating both challenges and first-mover advantages</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-japan" className="text-apple-accent hover:underline">ETA in Japan</Link></li>
        <li><Link href="/learn/eta-singapore" className="text-apple-accent hover:underline">ETA in Singapore &amp; Southeast Asia</Link></li>
        <li><Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">Best Countries to Buy a Business</Link></li>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Korea Small Business Institute, <em>SME Succession Survey</em> (2024)</li>
        <li>KOTRA (Korea Trade-Investment Promotion Agency), <em>Invest Korea Guide</em> (2024)</li>
        <li>OECD, <em>Korea Economic Survey</em> (2024)</li>
      </ul>
    </article>
  );
}
