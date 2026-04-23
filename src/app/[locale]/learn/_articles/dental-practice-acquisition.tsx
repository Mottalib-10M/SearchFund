import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function DentalPracticeAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Dental Practice (DSO Model)</h1>
      <div className={bodyClass}>
        <p>The dental industry represents one of the most attractive healthcare acquisition opportunities for search fund entrepreneurs. With over 200,000 dental practices in the US alone, an aging dentist population (average age 50+), and growing demand for organized dental service organizations (DSOs), the sector offers strong recurring revenue, high margins, and a clear <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build</Link> thesis.</p>
      </div>

      <h2 className={h2Class}>Why Dental Practices Are Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> Patients visit twice yearly for cleanings; many need ongoing treatment plans</li>
          <li><strong>High margins:</strong> EBITDA margins of 20&ndash;35% for well-run practices</li>
          <li><strong>Fragmented market:</strong> Only ~10% of US dental practices are DSO-affiliated, leaving 90% as independents</li>
          <li><strong>Succession crisis:</strong> 30%+ of dentists plan to retire in the next 10 years</li>
          <li><strong>Recession resilience:</strong> Dental care is essential; demand holds up through economic cycles</li>
          <li><strong>Multiple arbitrage:</strong> Solo practices sell at 4&ndash;6x EBITDA; DSO platforms sell at 8&ndash;14x</li>
        </ul>
      </div>

      <h2 className={h2Class}>The DSO Model</h2>
      <div className={bodyClass}>
        <p>In most states, non-dentists cannot own a dental practice directly. The DSO (Dental Service Organization) model solves this:</p>
        <ul className={ulClass}>
          <li><strong>Management Services Agreement (MSA):</strong> The DSO provides management, marketing, HR, billing, and operations support</li>
          <li><strong>Professional entity:</strong> A licensed dentist owns the clinical entity (the practice)</li>
          <li><strong>Management fee:</strong> The DSO charges a management fee (typically 70&ndash;85% of collections)</li>
          <li><strong>Legal structure:</strong> Requires careful setup with healthcare attorneys experienced in corporate practice of dentistry laws</li>
          <li><strong>State variations:</strong> Each state has different rules on corporate practice of dentistry. Some (TX, FL) are more DSO-friendly.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Essentials</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Revenue mix:</strong> Fee-for-service vs. insurance vs. Medicaid. Higher FFS = higher margins and less administrative burden.</li>
          <li><strong>Active patient count:</strong> Patients seen in the last 18 months. Track trends &mdash; declining active patients is a red flag.</li>
          <li><strong>Provider dependency:</strong> How much revenue depends on the selling dentist? Plan for transition and associating new dentists.</li>
          <li><strong>Hygiene production:</strong> A healthy practice has hygiene revenue at 30&ndash;35% of total revenue</li>
          <li><strong>Equipment age:</strong> X-ray units, chairs, sterilization equipment. Major capital expenditure if aging.</li>
          <li><strong>Lease terms:</strong> Location is critical. Secure a long-term lease with renewal options.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Valuation</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Solo practices:</strong> 60&ndash;80% of annual collections, or 4&ndash;6x EBITDA</li>
          <li><strong>Multi-location groups:</strong> 5&ndash;8x EBITDA depending on size and growth</li>
          <li><strong>Premium factors:</strong> High FFS mix, multiple providers, strong location, modern equipment</li>
          <li><strong>Discount factors:</strong> Heavy Medicaid mix, single-provider dependency, aging equipment, short lease</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Dental practices offer high recurring revenue, strong margins, and a proven DSO rollup model</li>
          <li>Non-dentists must use the DSO/MSA structure &mdash; hire healthcare attorneys experienced in your state&apos;s corporate practice laws</li>
          <li>Focus due diligence on active patient count trends, provider dependency, and revenue mix (FFS vs. insurance)</li>
          <li>Multiple arbitrage is significant: solo practices at 4&ndash;6x, DSO platforms at 8&ndash;14x EBITDA</li>
          <li>Plan for dentist recruitment &mdash; the selling dentist&apos;s transition is the highest-risk element</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">Acquiring a Healthcare Business</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
        <li><Link href="/learn/business-licensing-permits" className="text-apple-accent hover:underline">Business Licensing & Permits</Link></li>
        <li><Link href="/learn/veterinary-practice-acquisition" className="text-apple-accent hover:underline">Acquiring a Veterinary Practice</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>ADA, <em>Dental Practice Survey and Demographics</em> (2024)</li>
        <li>Bain &amp; Company, <em>The DSO Market: Trends and Opportunities</em> (2024)</li>
        <li>Association of Dental Support Organizations, <em>DSO Industry Report</em> (2024)</li>
      </ul>
    </article>
  );
}
