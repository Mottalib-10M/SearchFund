import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ConstructionAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Construction Company</h1>
      <div className={bodyClass}>
        <p>The US construction industry generates over $2 trillion annually, with tens of thousands of small and mid-size general contractors, specialty contractors, and construction services firms. For search fund entrepreneurs, construction companies offer attractive cash flow, high barriers to entry through licensing and bonding, and a fragmented market where succession planning is a critical unmet need &mdash; many owners are aging baby boomers without exit plans.</p>
      </div>

      <h2 className={h2Class}>Types of Construction Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>General contractors (GC):</strong> Manage overall projects, subcontract specialty work. Revenue driven by project volume. Margins: 3&ndash;8% net.</li>
          <li><strong>Specialty contractors:</strong> <Link href="/learn/acquiring-electrical-contractor" className="text-apple-accent hover:underline">Electrical</Link>, <Link href="/learn/plumbing-acquisition" className="text-apple-accent hover:underline">plumbing</Link>, <Link href="/learn/acquiring-hvac-business" className="text-apple-accent hover:underline">HVAC</Link>, concrete, steel. Higher margins (8&ndash;15%) and recurring service revenue.</li>
          <li><strong>Residential builders:</strong> Custom homes and production housing. Cyclical but high revenue per project.</li>
          <li><strong>Commercial construction:</strong> Office, retail, industrial, hospitality. Larger projects, longer timelines, bonding required.</li>
          <li><strong>Infrastructure/civil:</strong> Roads, bridges, utilities, government projects. Long-term backlogs and government-backed revenue.</li>
          <li><strong>Construction services:</strong> Project management, consulting, safety, inspection. Asset-light and higher margin.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Construction Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Massive market:</strong> $2T+ annual US construction spending with consistent long-term growth</li>
          <li><strong>High barriers:</strong> Licensing, bonding capacity, insurance, equipment, and skilled labor create defensible positions</li>
          <li><strong>Succession crisis:</strong> Average construction business owner is 55+. Many lack succession plans, creating motivated sellers.</li>
          <li><strong>Backlog visibility:</strong> Contracted backlogs provide revenue visibility 6&ndash;24 months out</li>
          <li><strong>Infrastructure spending:</strong> $1.2T federal infrastructure bill creates decades of government-funded demand</li>
          <li><strong>Fragmented:</strong> Top 400 firms represent only 30% of the market; 70% is small operators</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Backlog analysis:</strong> Total contracted backlog, conversion rate, and margin by project. Backlog quality matters more than size.</li>
          <li><strong>Bonding capacity:</strong> Surety bond limits and relationship with the surety company. Bonding is the lifeblood of commercial construction.</li>
          <li><strong>Project profitability:</strong> Job-by-job profit analysis. Look for consistency and identify any money-losing projects.</li>
          <li><strong>Claims &amp; litigation:</strong> Pending lawsuits, warranty claims, change order disputes, and defect claims</li>
          <li><strong>Workforce:</strong> Key project managers, estimators, and superintendents. Skilled labor retention is critical.</li>
          <li><strong>Equipment:</strong> Owned vs. leased, maintenance records, and replacement schedule. Deferred maintenance is common.</li>
          <li><strong>Safety record:</strong> OSHA citations, EMR (experience modification rate), and workers&apos; compensation history</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Estimating &amp; bidding:</strong> Improve win rate through better estimating tools and bid management processes</li>
          <li><strong>Service revenue:</strong> Add maintenance contracts and service agreements for recurring revenue</li>
          <li><strong>Specialty expansion:</strong> Add adjacent trades (GC adds self-perform capabilities) to capture more project value</li>
          <li><strong>Technology:</strong> Implement project management software (Procore, BuilderTrend), BIM, and drone surveys</li>
          <li><strong>Geographic expansion:</strong> Expand into neighboring markets with proven project types</li>
          <li><strong>Pre-construction services:</strong> Design-build and pre-construction consulting for higher-margin early involvement</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Construction offers massive market size, high barriers, and a generational succession opportunity</li>
          <li>Specialty contractors offer better margins and recurring service revenue than general contractors</li>
          <li>Bonding capacity, project profitability history, and safety records are the three most critical due diligence areas</li>
          <li>The biggest risk is project concentration and litigation &mdash; diversified backlogs across project types are essential</li>
          <li>Typical valuations: 3&ndash;6x EBITDA for specialty; 2&ndash;4x for general contractors (higher risk)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/acquiring-hvac-business" className="text-apple-accent hover:underline">Acquiring an HVAC Business</Link></li>
        <li><Link href="/learn/plumbing-acquisition" className="text-apple-accent hover:underline">Acquiring a Plumbing Business</Link></li>
        <li><Link href="/learn/acquiring-electrical-contractor" className="text-apple-accent hover:underline">Acquiring an Electrical Contracting Business</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>What makes specialty contractors more attractive acquisition targets than general contractors?</h3>
      <div className={bodyClass}>
        <p>Specialty contractors typically operate at 8&ndash;15% net margins compared to 3&ndash;8% for general contractors, according to FMI Corporation&rsquo;s annual construction industry analysis. The margin advantage stems from several structural factors: specialty trades require specific licensing and certifications that limit competition, skilled labor in trades like <Link href="/learn/acquiring-electrical-contractor" className="text-apple-accent hover:underline">electrical</Link> and <Link href="/learn/acquiring-hvac-business" className="text-apple-accent hover:underline">HVAC</Link> is scarcer and harder to replace, and service/maintenance revenue creates a recurring income stream that general contractors lack. The Associated General Contractors of America reports that specialty contractors with established service agreements can generate 20&ndash;40% of total revenue from recurring maintenance work, which significantly reduces cyclicality and supports higher valuation multiples &mdash; typically 3&ndash;6x EBITDA versus 2&ndash;4x for GCs.</p>
      </div>

      <h3 className={h3Class}>How important is bonding capacity when acquiring a construction company?</h3>
      <div className={bodyClass}>
        <p>Bonding capacity is arguably the single most critical asset in a commercial construction acquisition. Surety bonds guarantee project completion and protect project owners from contractor default, and most public and large private projects require them. The Surety &amp; Fidelity Association of America notes that bonding capacity is based on the contractor&rsquo;s financial strength, track record, and relationship with the surety company &mdash; relationships that can take years to build. During an ownership transition, the surety company reassesses the firm&rsquo;s creditworthiness, and a change in control can temporarily reduce or revoke bonding limits. FMI Corporation recommends engaging the surety company early in the acquisition process, ideally during due diligence, to ensure continuity of bonding capacity and avoid a gap that could prevent the firm from bidding on new projects post-close.</p>
      </div>

      <h3 className={h3Class}>What are the biggest risks specific to construction company acquisitions?</h3>
      <div className={bodyClass}>
        <p>The three primary risks are project concentration, litigation exposure, and workforce retention. US Census Bureau data shows that construction firms with more than 40% of revenue concentrated in a single project type or client face significantly higher revenue volatility during economic downturns. Litigation risk is endemic to the industry &mdash; the American Bar Association estimates that construction disputes account for a disproportionate share of commercial litigation, with claims arising from defects, delays, change orders, and safety incidents. Workforce risk is acute because skilled tradespeople, estimators, and project managers are in short supply; the Associated General Contractors reports that 80% of construction firms struggle to find qualified workers. Losing key superintendents or estimators post-acquisition can directly impair the firm&rsquo;s ability to win and execute projects.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>US Census Bureau, <em>Value of Construction Put in Place Survey</em> (2024)</li>
        <li>Associated General Contractors of America, <em>Construction Industry Overview</em> (2024)</li>
        <li>FMI Corporation, <em>Construction Outlook</em> (2024)</li>
        <li>Surety &amp; Fidelity Association of America, <em>Surety Bond Overview for Contractors</em> (2024)</li>
      </ul>
    </article>
  );
}
