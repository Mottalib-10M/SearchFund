import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function EnergyServicesAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring an Energy Services or Solar Installation Business</h1>
      <div className={bodyClass}>
        <p>Energy services encompasses a broad range of businesses: solar installation, energy efficiency consulting, electrical infrastructure, HVAC-related energy upgrades, and commercial energy management. The sector is experiencing explosive growth driven by the energy transition, federal tax incentives (IRA/ITC), and rising electricity costs pushing both residential and commercial customers toward renewable energy and efficiency solutions.</p>
      </div>

      <h2 className={h2Class}>Types of Energy Services Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Residential solar installation:</strong> Design and install rooftop solar systems. Revenue per project $20K&ndash;$50K. High growth.</li>
          <li><strong>Commercial solar &amp; energy:</strong> Larger-scale solar, battery storage, and energy management for businesses. $100K&ndash;$1M+ per project.</li>
          <li><strong>Energy efficiency/ESCO:</strong> Energy audits, LED retrofits, building envelope upgrades. Often with utility rebate programs.</li>
          <li><strong>EV charging infrastructure:</strong> Design and installation of electric vehicle charging stations. Emerging and fast-growing.</li>
          <li><strong>Electrical infrastructure:</strong> Power distribution, backup generators, UPS systems for commercial and industrial.</li>
          <li><strong>Energy management/monitoring:</strong> Software and services for building energy optimization. Recurring revenue potential.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Energy Services Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Secular growth:</strong> Solar installations growing 20&ndash;30% annually. Energy efficiency market expanding steadily.</li>
          <li><strong>Federal incentives:</strong> Inflation Reduction Act provides 30% investment tax credit (ITC) for solar through 2032</li>
          <li><strong>Recurring revenue potential:</strong> Maintenance contracts, monitoring services, and performance guarantees</li>
          <li><strong>Fragmented:</strong> Thousands of small solar installers and energy service companies. Top 10 hold under 20% market share.</li>
          <li><strong>Regulatory tailwinds:</strong> State renewable portfolio standards, net metering, and building energy codes drive demand</li>
          <li><strong>Customer demand:</strong> Rising electricity costs and climate awareness create sustained consumer interest</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Revenue model:</strong> Project-based vs. recurring maintenance/monitoring. Target companies with growing recurring revenue.</li>
          <li><strong>Backlog &amp; pipeline:</strong> Contracted projects, proposal pipeline, and conversion rates. Seasonality patterns.</li>
          <li><strong>Licensing &amp; certifications:</strong> Electrical contractor licenses, NABCEP solar certifications, and state-specific requirements</li>
          <li><strong>Warranty obligations:</strong> Solar panels carry 25-year warranties. Understand workmanship warranty duration and claims history.</li>
          <li><strong>Financing partnerships:</strong> Relationships with solar financing companies (Sunrun, Mosaic, GoodLeap) and lease/PPA structures</li>
          <li><strong>Incentive dependency:</strong> How much of the value proposition depends on federal/state incentives that could change?</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Battery storage:</strong> Add energy storage to solar installations for higher project value and recurring monitoring revenue</li>
          <li><strong>EV charging:</strong> Cross-sell EV charger installation to existing solar customers</li>
          <li><strong>Commercial expansion:</strong> If primarily residential, expand to commercial solar for larger project sizes and higher margins</li>
          <li><strong>O&amp;M contracts:</strong> Build operations and maintenance service agreements for installed systems</li>
          <li><strong>Geographic expansion:</strong> Replicate the model in neighboring markets with strong solar economics</li>
          <li><strong>Consolidation:</strong> Roll up smaller installers for scale, purchasing power, and brand recognition</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Energy services is one of the fastest-growing sectors with strong federal incentive tailwinds through 2032+</li>
          <li>Look for companies building recurring revenue through maintenance contracts and monitoring services</li>
          <li>Solar is project-based and capital-intensive &mdash; cash flow management and financing partnerships are critical</li>
          <li>Regulatory and incentive risk is real &mdash; assess how dependent the business model is on specific tax credits</li>
          <li>Typical valuations: 4&ndash;8x EBITDA for established solar companies with diversified revenue and recurring contracts</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/acquiring-electrical-contractor" className="text-apple-accent hover:underline">Acquiring an Electrical Contracting Business</Link></li>
        <li><Link href="/learn/hvac-acquisition" className="text-apple-accent hover:underline">Acquiring an HVAC Business</Link></li>
        <li><Link href="/learn/construction-acquisition" className="text-apple-accent hover:underline">Acquiring a Construction Company</Link></li>
        <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic Expansion</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Solar Energy Industries Association, <em>US Solar Market Insight Report</em> (2024)</li>
        <li>Wood Mackenzie, <em>US Solar Market Forecast</em> (2024)</li>
        <li>US Department of Energy, <em>Solar Energy Technologies Office Annual Report</em> (2024)</li>
      </ul>
    </article>
  );
}
