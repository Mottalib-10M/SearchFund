import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function MetalFabricationAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Metal Fabrication or Machine Shop</h1>
      <div className={bodyClass}>
        <p>Metal fabrication shops and machine shops are the backbone of American manufacturing, producing custom parts, structural components, and precision-machined products for aerospace, automotive, defense, medical, and industrial markets. The sector is highly fragmented with over 55,000 establishments in the US, most with fewer than 20 employees. For search fund entrepreneurs, these businesses offer strong cash flow, high barriers to entry through equipment and skilled labor, and a growing reshoring trend that&apos;s bringing manufacturing work back to the US.</p>
      </div>

      <h2 className={h2Class}>Types of Metal Fabrication Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>General fabrication:</strong> Cutting, welding, bending, and assembling metal components. Job-shop model serving diverse customers.</li>
          <li><strong>CNC machining:</strong> Computer-controlled precision parts. Higher margins, more capital-intensive, and more technical.</li>
          <li><strong>Sheet metal fabrication:</strong> Laser cutting, forming, welding sheet metal. Common in HVAC, enclosures, and industrial applications.</li>
          <li><strong>Structural steel:</strong> Beams, columns, and assemblies for construction. Tied to building activity.</li>
          <li><strong>Aerospace/defense:</strong> AS9100-certified precision manufacturing. Highest margins but longest qualification cycles.</li>
          <li><strong>Contract manufacturing:</strong> Full assembly and sub-assembly for OEMs. Recurring, program-based revenue.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Metal Fabrication Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>High barriers:</strong> Equipment ($500K&ndash;$5M+ per CNC machine), skilled labor, and certifications create strong moats</li>
          <li><strong>Sticky customers:</strong> Qualification processes take months. Once approved, customers rarely switch for small savings.</li>
          <li><strong>Reshoring trend:</strong> Supply chain disruptions and geopolitical risk are driving manufacturing back to the US</li>
          <li><strong>Fragmented:</strong> 55,000+ shops, most family-owned. Baby boomer owners need succession solutions.</li>
          <li><strong>Recurring revenue:</strong> Program-based manufacturing and long-term supply agreements create predictable demand</li>
          <li><strong>Defense spending:</strong> Military and infrastructure spending provides long-term demand tailwinds</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Equipment:</strong> Age, condition, capabilities, and replacement value. CNC equipment has 10&ndash;20 year useful life. Assess deferred maintenance.</li>
          <li><strong>Certifications:</strong> ISO 9001, AS9100 (aerospace), IATF 16949 (automotive), NADCAP. Certifications determine which markets you can serve.</li>
          <li><strong>Workforce:</strong> Skilled machinists and welders are extremely hard to find. Average age, certifications, and cross-training depth.</li>
          <li><strong>Customer concentration:</strong> Many shops depend on 2&ndash;3 large OEMs. Top customer should be under 25% of revenue.</li>
          <li><strong>Capacity utilization:</strong> Current utilization rate and growth capacity. Ideal is 65&ndash;80% with room to add shifts.</li>
          <li><strong>Quoting &amp; estimating:</strong> How accurate is the quoting process? Job-cost analysis reveals pricing discipline.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Sales &amp; marketing:</strong> Most shops don&apos;t market. Adding a salesperson can grow revenue 20&ndash;30% in year one.</li>
          <li><strong>Automation:</strong> Robotic welding, lights-out CNC machining, and automated material handling</li>
          <li><strong>Add value-added services:</strong> Assembly, finishing (powder coating, anodizing, painting), and kitting</li>
          <li><strong>Certifications:</strong> Earn additional certifications (AS9100, IATF) to access higher-margin markets</li>
          <li><strong>Equipment upgrades:</strong> Newer CNC machines with 5-axis capability command premium pricing</li>
          <li><strong>Consolidation:</strong> Roll up neighboring shops for capacity, capabilities, and customer diversification</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Metal fabrication offers high barriers, sticky customers, and a generational succession opportunity</li>
          <li>CNC machining and aerospace-certified shops offer the highest margins (15&ndash;25% EBITDA)</li>
          <li>Skilled labor availability is the industry&apos;s biggest constraint &mdash; assess workforce depth and training programs</li>
          <li>Equipment condition and replacement costs represent significant capex requirements</li>
          <li>Typical valuations: 3&ndash;6x EBITDA depending on equipment, certifications, customer mix, and workforce quality</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">Acquiring a Manufacturing Business</Link></li>
        <li><Link href="/learn/construction-acquisition" className="text-apple-accent hover:underline">Acquiring a Construction Company</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
        <li><Link href="/learn/supply-chain-optimization" className="text-apple-accent hover:underline">Supply Chain Optimization</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>US Census Bureau, <em>Annual Survey of Manufactures: Metal Fabrication</em> (2024)</li>
        <li>Fabricators &amp; Manufacturers Association, <em>Industry Benchmark Report</em> (2024)</li>
        <li>IBISWorld, <em>Metal Stamping &amp; Forging in the US</em> (2024)</li>
      </ul>
    </article>
  );
}
