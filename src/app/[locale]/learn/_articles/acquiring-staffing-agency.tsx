import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringStaffingAgencyArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Staffing &amp; Recruiting Agency: The ETA Playbook
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          The $200B+ US staffing industry is one of the most fragmented
          sectors in professional services &mdash; with 25,000+ agencies,
          most generating $1&ndash;10M in revenue. Aging owners, high
          recurring revenue, and proven{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            roll-up economics
          </Link>{" "}
          make staffing agencies attractive acquisition targets for
          search fund entrepreneurs.
        </p>

        <h2 className={h2Class}>Why staffing agencies?</h2>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> Temp staffing generates weekly billings from ongoing client placements. Contract staffing can run for months or years</li>
          <li><strong>Massive market:</strong> $200B+ in the US, $500B+ globally. Fragmented with thousands of sub-$10M agencies</li>
          <li><strong>Low capex:</strong> Asset-light model. Primary assets are client relationships, recruiters, and candidate databases</li>
          <li><strong>Succession opportunity:</strong> Aging owners who built agencies in the 1990s&ndash;2000s are approaching retirement</li>
          <li><strong>Roll-up potential:</strong> Geography and specialty consolidation creates significant value. Back-office synergies of 15&ndash;25%</li>
        </ul>

        <h2 className={h2Class}>Staffing agency models</h2>

        <h3 className={h3Class}>Temporary staffing</h3>
        <ul className={ulClass}>
          <li><strong>Model:</strong> Agency employs workers and places them at client sites on an hourly bill rate</li>
          <li><strong>Margins:</strong> 15&ndash;25% gross margin on billings (bill rate minus pay rate)</li>
          <li><strong>Revenue characteristics:</strong> High revenue volume, lower margins, more predictable (weekly billings)</li>
          <li><strong>Working capital:</strong> High working capital needs (pay employees weekly, bill clients net 30&ndash;45)</li>
        </ul>

        <h3 className={h3Class}>Direct hire / permanent placement</h3>
        <ul className={ulClass}>
          <li><strong>Model:</strong> Agency earns a fee (20&ndash;30% of first-year salary) for placing a candidate in a permanent role</li>
          <li><strong>Margins:</strong> 60&ndash;80%+ gross margin (no ongoing payroll obligation)</li>
          <li><strong>Revenue characteristics:</strong> Lumpy, project-based, highly variable. Sensitive to economic cycles</li>
        </ul>

        <h3 className={h3Class}>Contract / professional staffing</h3>
        <ul className={ulClass}>
          <li><strong>Model:</strong> Place specialized professionals (IT, engineering, accounting) on long-term contracts</li>
          <li><strong>Margins:</strong> 25&ndash;40% gross margin</li>
          <li><strong>Revenue characteristics:</strong> Best of both worlds &mdash; recurring revenue with higher margins than temp staffing</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Temp-heavy agencies:</strong> 3&ndash;5x EBITDA (lower margins, higher revenue)</li>
          <li><strong>Perm-heavy agencies:</strong> 2&ndash;4x EBITDA (higher margins but volatile revenue)</li>
          <li><strong>Contract/professional:</strong> 4&ndash;6x EBITDA (recurring + higher margins)</li>
          <li><strong>Premium factors:</strong> Niche specialization, MSP/VMS relationships, technology-enabled platform, diversified client base</li>
          <li><strong>Discount factors:</strong> Owner-dependent sales,{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration
            </Link>, declining revenue trend, undifferentiated service</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>
        <ul className={ulClass}>
          <li><strong>Bill rate analysis:</strong> Trend in average bill rates and spreads (bill minus pay). Declining spreads signal pricing pressure</li>
          <li><strong>Client retention:</strong> Revenue retention rate by client. Top-10 client tenure and contract status</li>
          <li><strong>Recruiter productivity:</strong> Revenue per recruiter per year. Best-in-class: $250K&ndash;$500K+ per recruiter</li>
          <li><strong>Workers&rsquo; compensation:</strong> Review experience modification rate (EMR) and claims history. High EMR = higher insurance costs and potential liability</li>
          <li><strong>Employment practices:</strong> Verify compliance with labor laws, independent contractor classification, and employment documentation</li>
          <li><strong>Technology platform:</strong> ATS (applicant tracking system), CRM, payroll/billing software. Modern tech stack = scalable operations</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition growth strategies</h2>
        <ul className={ulClass}>
          <li><strong>Niche specialization:</strong> Generalist agencies trade at 3x. Specialist agencies (healthcare, IT, accounting) trade at 5&ndash;6x. Specializing is the fastest path to value creation</li>
          <li><strong>Technology investment:</strong> ATS/CRM upgrade, AI-powered candidate matching, automation of back-office functions</li>
          <li><strong>Geographic expansion:</strong> Open satellite offices or acquire agencies in adjacent markets</li>
          <li><strong>Add contract staffing:</strong> Convert temp placements to longer-term contracts for higher margins and revenue stability</li>
          <li><strong>MSP/VMS relationships:</strong> Becoming a preferred vendor in Managed Service Provider and Vendor Management Systems opens enterprise-level clients</li>
        </ul>

        <h2 className={h2Class}>Staffing-specific risks</h2>
        <ul className={ulClass}>
          <li><strong>Recruiter retention:</strong> Top recruiters generate disproportionate revenue. Losing 2&ndash;3 key recruiters post-acquisition can devastate the business</li>
          <li><strong>Working capital intensity:</strong> Temp staffing requires significant working capital. Ensure financing covers the cash conversion cycle</li>
          <li><strong>Economic sensitivity:</strong> Temp staffing is among the first expenses companies cut in a downturn. Revenue can decline 20&ndash;30% in a recession</li>
          <li><strong>Regulatory:</strong> Employment law, ACA compliance, workers&rsquo; compensation, and independent contractor rules</li>
        </ul>

        <p>
          For broader services acquisition guidance, see{" "}
          <Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">
            professional services playbook
          </Link>. For{" "}
          <Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">
            employee retention strategies
          </Link>, see our post-acquisition guides.
        </p>
      </div>
    </article>
  );
}
