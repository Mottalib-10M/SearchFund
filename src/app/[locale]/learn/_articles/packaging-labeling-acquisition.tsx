import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function PackagingLabelingAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Packaging &amp; Labeling Business</h1>
      <div className={bodyClass}>
        <p>Packaging and labeling businesses serve every consumer product and industrial sector in the economy, from food packaging to pharmaceutical labels to e-commerce shipping materials. The US packaging industry generates $200B+ annually, and while major public companies dominate certain segments, the label printing and custom packaging sub-sectors remain highly fragmented with thousands of small operators. For search fund entrepreneurs, packaging businesses offer recurring B2B revenue, high switching costs, and essential demand tied to downstream product sales.</p>
      </div>

      <h2 className={h2Class}>Types of Packaging Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Label printing:</strong> Pressure-sensitive labels, shrink sleeves, flexible packaging. Recurring reorders tied to product sales.</li>
          <li><strong>Corrugated packaging:</strong> Custom boxes, displays, and shipping containers. Tied to e-commerce and retail.</li>
          <li><strong>Flexible packaging:</strong> Pouches, bags, wraps, and films. Growing category replacing rigid packaging.</li>
          <li><strong>Contract packaging (co-packing):</strong> Assembly, kitting, filling, and packaging services for brands. B2B service model.</li>
          <li><strong>Specialty packaging:</strong> Medical device packaging, hazmat containers, temperature-controlled. Regulated, higher margins.</li>
          <li><strong>Sustainable packaging:</strong> Compostable, recyclable, and reduced-plastic solutions. Fastest-growing segment.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Packaging Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> Customers reorder packaging every time they produce product. 80%+ of revenue is repeat business.</li>
          <li><strong>High switching costs:</strong> Custom dies, artwork, regulatory approvals (food/pharma), and qualification processes make switching painful</li>
          <li><strong>Essential:</strong> Every physical product needs packaging. Demand is tied to overall economic activity.</li>
          <li><strong>E-commerce tailwind:</strong> Online retail growth drives demand for shipping and protective packaging</li>
          <li><strong>Fragmented:</strong> Thousands of small label printers and packaging converters. Ideal for consolidation.</li>
          <li><strong>Sustainability trend:</strong> Brand commitments to sustainable packaging create demand for innovative solutions and new orders</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Equipment:</strong> Press age, capabilities (digital vs. flexo), and capacity utilization. Digital presses enable short runs and customization.</li>
          <li><strong>Customer concentration:</strong> Top 10 customers should be under 50% of revenue. Packaging customers are sticky but losing a major one hurts.</li>
          <li><strong>Raw material costs:</strong> Paper, film, ink, and adhesive costs as percentage of COGS. Commodity price pass-through ability.</li>
          <li><strong>Certifications:</strong> FDA-registered for food contact, ISO 9001, BRC packaging, and cGMP for pharmaceutical packaging</li>
          <li><strong>Production efficiency:</strong> Waste rates, changeover times, and schedule adherence. Lean manufacturing metrics.</li>
          <li><strong>Technology:</strong> Digital pre-press capabilities, color management, and automated finishing equipment</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Digital printing:</strong> Add or upgrade digital presses for short runs, versioning, and faster turnaround</li>
          <li><strong>Sustainable options:</strong> Develop compostable and recyclable packaging solutions for brands making sustainability commitments</li>
          <li><strong>Value-added services:</strong> Design, pre-press, inventory management, and just-in-time delivery programs</li>
          <li><strong>Industry specialization:</strong> Focus on regulated industries (food, pharma, medical) for higher margins and barriers</li>
          <li><strong>Sales function:</strong> Most small packaging companies rely on referrals. Adding dedicated sales drives growth.</li>
          <li><strong>Consolidation:</strong> Roll up neighboring packaging companies for broader capabilities and scale efficiencies</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Packaging offers 80%+ repeat revenue with high switching costs &mdash; customers don&apos;t change suppliers for small savings</li>
          <li>Label printing and specialty packaging offer the best margins for search fund-sized acquisitions</li>
          <li>Equipment age and capability (especially digital printing) determine competitive positioning</li>
          <li>Sustainable packaging is the biggest growth opportunity as brands commit to reduced environmental impact</li>
          <li>Typical valuations: 4&ndash;7x EBITDA for label and specialty packaging; 3&ndash;5x for commodity corrugated and flexible</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">Acquiring a Manufacturing Business</Link></li>
        <li><Link href="/learn/food-beverage-manufacturing-acquisition" className="text-apple-accent hover:underline">Acquiring a Food &amp; Beverage Manufacturer</Link></li>
        <li><Link href="/learn/printing-business-acquisition" className="text-apple-accent hover:underline">Acquiring a Printing Business</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>PMMI (Association for Packaging and Processing Technologies), <em>State of the Packaging Industry</em> (2024)</li>
        <li>Smithers, <em>The Future of Packaging: Long-Term Strategic Forecasts</em> (2024)</li>
        <li>IBISWorld, <em>Packaging &amp; Labeling Services in the US</em> (2024)</li>
      </ul>
    </article>
  );
}
