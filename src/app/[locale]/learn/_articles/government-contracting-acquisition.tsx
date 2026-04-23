import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function GovernmentContractingAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Government Contracting Business</h1>
      <div className={bodyClass}>
        <p>Government contracting businesses &mdash; companies that provide goods, services, or solutions to federal, state, and local government agencies &mdash; offer highly predictable revenue, long contract cycles, and recession-resistant demand. The US federal government alone spends $700B+ annually on contracts, and small businesses receive 23%+ of this spending through set-aside programs. For ETA entrepreneurs, government contractors offer stable cash flows and multiple growth levers through contract expansion, recompetes, and strategic acquisitions.</p>
      </div>

      <h2 className={h2Class}>Types of Government Contractors</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>IT services:</strong> Systems integration, cybersecurity, cloud migration, and managed IT for government agencies. Fastest-growing sector.</li>
          <li><strong>Professional services:</strong> Consulting, program management, training, and staff augmentation for civilian and defense agencies.</li>
          <li><strong>Construction &amp; facilities:</strong> Building construction, facilities maintenance, and environmental remediation for government properties.</li>
          <li><strong>Defense &amp; intelligence:</strong> Technology, logistics, and support services for DoD and intelligence community. Requires security clearances.</li>
          <li><strong>Healthcare:</strong> Medical staffing, health IT, and clinical services for VA, DoD health, and civilian agencies.</li>
          <li><strong>Products &amp; supply:</strong> Equipment, supplies, and manufactured goods sold through GSA Schedule or direct contracts.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why GovCon Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Predictable revenue:</strong> Multi-year contracts with defined scope, pricing, and option years. Revenue visibility 3&ndash;5+ years out.</li>
          <li><strong>Recession-resistant:</strong> Government spending is counter-cyclical. Agencies continue spending through economic downturns.</li>
          <li><strong>High switching costs:</strong> Incumbent advantage is enormous. Recompete win rates are 70&ndash;85% for well-performing contractors.</li>
          <li><strong>Small business set-asides:</strong> 23% of federal contracts reserved for small businesses. SBA certifications (8(a), HUBZone, SDVOSB) create protected markets.</li>
          <li><strong>Barriers to entry:</strong> Past performance requirements, security clearances, and certifications create significant moats.</li>
          <li><strong>Strong cash flow:</strong> Government is the most reliable payer. Net-30 payment terms with virtually zero bad debt.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Contract backlog:</strong> Total funded and unfunded backlog. Option years remaining. Pipeline of upcoming opportunities.</li>
          <li><strong>Recompete schedule:</strong> When do current contracts expire? What is the historical recompete win rate?</li>
          <li><strong>Customer concentration:</strong> Revenue distribution across agencies and contracts. Single-contract dependence is high risk.</li>
          <li><strong>SBA certifications:</strong> Size standard eligibility, 8(a) status and graduation timeline, HUBZone or SDVOSB status. Certification transfer rules.</li>
          <li><strong>Security clearances:</strong> Facility clearance level and cleared personnel. Clearances are extremely valuable and hard to replace.</li>
          <li><strong>Past performance:</strong> CPARs (Contractor Performance Assessment Reports) ratings. Past performance is the most weighted evaluation factor.</li>
          <li><strong>Key personnel:</strong> Named key personnel on contracts. Departure of key staff can trigger contract modifications or recompetes.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Expand existing contracts:</strong> Task order growth, option year exercises, and contract ceiling increases.</li>
          <li><strong>New agency penetration:</strong> Leverage past performance to win contracts at new agencies.</li>
          <li><strong>Subcontractor to prime:</strong> Transition from subcontractor to prime contractor roles on larger opportunities.</li>
          <li><strong>Tuck-in acquisitions:</strong> Acquire companies with complementary contracts, clearances, or certifications.</li>
          <li><strong>Certification leverage:</strong> Use 8(a) or other set-aside certifications to access protected contract vehicles.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Government contracting offers 3&ndash;5+ year revenue visibility with recession-resistant demand and zero bad debt</li>
          <li>Incumbent advantage (70&ndash;85% recompete win rates) and clearance requirements create strong competitive moats</li>
          <li>SBA small business certifications (8(a), HUBZone, SDVOSB) provide access to protected markets worth $160B+ annually</li>
          <li>Contract backlog, recompete timing, and key personnel are the most critical due diligence areas</li>
          <li>Typical valuations: 1&ndash;2x revenue or 6&ndash;12x EBITDA for services contractors with diversified contract portfolios</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/it-services-acquisition" className="text-apple-accent hover:underline">Acquiring an IT Services Firm</Link></li>
        <li><Link href="/learn/consulting-firm-acquisition" className="text-apple-accent hover:underline">Acquiring a Consulting Firm</Link></li>
        <li><Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">Recurring Revenue Businesses</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>USAspending.gov, <em>Federal Contract Spending Data</em> (2024)</li>
        <li>SBA, <em>Small Business Procurement Scorecard</em> (2024)</li>
        <li>Bloomberg Government, <em>GovCon Market Analysis</em> (2024)</li>
      </ul>
    </article>
  );
}
