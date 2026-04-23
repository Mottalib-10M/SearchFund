import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringConstructionCompanyArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Construction Company: The ETA Playbook
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          The construction industry generates $2T+ in annual US revenue
          with over 3 million businesses &mdash; most owned by aging
          founders approaching retirement. For ETA entrepreneurs who
          can navigate the operational complexity, construction offers
          strong cash flow, tangible assets, and recession-recovery
          dynamics.
        </p>

        <h2 className={h2Class}>Sub-sectors to target</h2>
        <ul className={ulClass}>
          <li><strong>Specialty contractors:</strong> Electrical, plumbing, HVAC, fire protection, roofing. Higher margins (15&ndash;25% EBITDA) and more recurring revenue than general contractors</li>
          <li><strong>General contractors:</strong> Manage projects and subcontractors. Lower margins (5&ndash;10%) but higher revenue</li>
          <li><strong>Civil/infrastructure:</strong> Roads, bridges, utilities. Government contracts provide revenue stability but involve regulatory complexity</li>
          <li><strong>Residential builders:</strong> Custom and tract home construction. Cyclical but strong in growth markets</li>
          <li><strong>Best for ETA:</strong> Specialty contractors with service/maintenance components. See{" "}
            <Link href="/learn/acquiring-hvac-business" className="text-apple-accent hover:underline">
              HVAC playbook
            </Link>{" "}
            for the model vertical</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Specialty contractors:</strong> 3&ndash;6x EBITDA (higher for companies with service/maintenance revenue)</li>
          <li><strong>General contractors:</strong> 2&ndash;4x EBITDA (lower margins, project-based)</li>
          <li><strong>Infrastructure/government:</strong> 3&ndash;5x EBITDA (contract backlog provides visibility)</li>
          <li><strong>Premium factors:</strong> Recurring service contracts, government contract past performance, bonding capacity, skilled workforce retention</li>
          <li><strong>Discount factors:</strong> Owner-dependent estimating/bidding, single large project concentration, equipment condition, safety record</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>
        <ul className={ulClass}>
          <li><strong>Backlog analysis:</strong> Current contracted work pipeline. Healthy backlog = 6&ndash;12 months of revenue</li>
          <li><strong>Job-level profitability:</strong> Review profit/loss by project. Aggregate P&amp;L can mask unprofitable jobs</li>
          <li><strong>Work-in-progress (WIP):</strong> Verify percentage-of-completion accounting. Over-billing or under-billing distorts true financial position</li>
          <li><strong>Bonding capacity:</strong> Surety bonding limits determine maximum project size. Bonding relationships are critical and may not transfer easily</li>
          <li><strong>Equipment:</strong> Detailed inventory with condition assessment. Replacement cost vs. book value</li>
          <li><strong>Safety record:</strong> OSHA incident rates, EMR (Experience Modification Rate), and workers&rsquo; comp history. Poor safety = higher insurance and regulatory risk</li>
          <li><strong>Licenses &amp; permits:</strong> Contractor licenses, bonding, insurance, and specialty certifications. Verify transferability</li>
          <li><strong>Workforce:</strong> Skilled labor availability is the #1 constraint. Assess crew retention, training programs, and union relationships (if applicable)</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>Add service/maintenance:</strong> Converting project-based revenue to recurring service contracts is the highest-value strategy</li>
          <li><strong>Estimating systems:</strong> Professionalize bidding and estimating. Many owner-operators bid from experience (no system). Implementing cost-based estimating improves margins</li>
          <li><strong>Technology:</strong> Construction management software (Procore, Buildertrend), fleet management, and field service automation</li>
          <li><strong>Workforce development:</strong> Apprenticeship programs, competitive benefits, and career paths to address skilled labor shortage</li>
          <li><strong>Geographic expansion:</strong> Acquire specialty contractors in adjacent markets for{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              buy-and-build
            </Link>{" "}
            growth</li>
        </ul>

        <h2 className={h2Class}>Construction-specific risks</h2>
        <ul className={ulClass}>
          <li><strong>Cyclicality:</strong> Commercial and residential construction is sensitive to interest rates and economic cycles</li>
          <li><strong>Project risk:</strong> Cost overruns, delays, and scope changes can wipe out project profitability</li>
          <li><strong>Liability:</strong> Construction defect claims, personal injury, and environmental issues. Insurance and indemnification are critical</li>
          <li><strong>Labor shortage:</strong> 500,000+ unfilled construction jobs in the US. Attracting and retaining skilled workers is the top operational challenge</li>
          <li><strong>Cash flow timing:</strong> Pay subcontractors and suppliers before collecting from clients. Working capital management is essential. See{" "}
            <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">
              working capital guide
            </Link></li>
        </ul>

        <p>
          For related playbooks, see{" "}
          <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">
            home services acquisition
          </Link>{" "}
          and{" "}
          <Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">
            manufacturing acquisition
          </Link>.
        </p>
      </div>
    </article>
  );
}
