import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function StaffingAgencyAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Staffing &amp; Recruitment Agency</h1>
      <div className={bodyClass}>
        <p>Staffing agencies offer search fund entrepreneurs a compelling combination of recurring revenue, high margins on permanent placements, and a massive $200B+ US market. The industry is highly fragmented with over 25,000 staffing companies, most under $10M revenue. Specialization in a niche vertical &mdash; healthcare staffing, IT staffing, light industrial &mdash; creates defensible moats and premium valuations.</p>
      </div>

      <h2 className={h2Class}>Types of Staffing Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Temporary staffing:</strong> The agency employs workers and bills clients an hourly rate. 60&ndash;70% of industry revenue. Recurring but low margins (15&ndash;25% gross).</li>
          <li><strong>Permanent placement:</strong> One-time fee (15&ndash;25% of first-year salary) for finding a permanent hire. High margin but lumpy revenue.</li>
          <li><strong>Contract-to-hire:</strong> Temporary assignment that converts to permanent. Combines recurring revenue with placement fees.</li>
          <li><strong>Executive search:</strong> Retained search for senior roles. $50K&ndash;150K per placement. Relationship-driven.</li>
          <li><strong>Specialized staffing:</strong> Healthcare travelers, IT contractors, engineering professionals. Highest margins (25&ndash;40% gross).</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Staffing Is Attractive for ETA</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Revenue predictability:</strong> Temp staffing with long-term client contracts creates recurring revenue</li>
          <li><strong>Low capex:</strong> People business with minimal equipment or inventory</li>
          <li><strong>Fragmented:</strong> Top 10 firms control ~30% of the market; 70% is independents</li>
          <li><strong>Specialization premium:</strong> Niche staffing companies command 5&ndash;8x EBITDA vs. 3&ndash;5x for generalists</li>
          <li><strong>Consolidation opportunity:</strong> Roll up specialists in the same niche for geographic expansion and client diversification</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Revenue quality:</strong> What percentage is ongoing temp/contract vs. one-time placements? Temp revenue at 60%+ is ideal.</li>
          <li><strong>Client concentration:</strong> If one client represents 20%+ of revenue, losing that contract could be devastating</li>
          <li><strong>Gross margin by service:</strong> Temp: 15&ndash;25%, permanent: 90%+, contract-to-hire: 20&ndash;30%. Overall 25%+ is healthy.</li>
          <li><strong>Workers&apos; comp:</strong> Review experience modifier (EMR) and claims history. High-risk industries (construction, manufacturing) have higher costs.</li>
          <li><strong>Key recruiter retention:</strong> Top billers often have personal relationships with clients. Their departure means revenue loss.</li>
          <li><strong>Back-office systems:</strong> ATS (applicant tracking), payroll, time &amp; attendance, and billing systems</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Expand into adjacent specialties:</strong> If you staff nurses, add allied health. If you staff IT developers, add cybersecurity talent.</li>
          <li><strong>Geographic expansion:</strong> Open offices in new markets to serve existing national clients</li>
          <li><strong>Add RPO services:</strong> Recruitment Process Outsourcing for large clients who want to outsource hiring</li>
          <li><strong>Technology upgrade:</strong> Modern ATS, CRM, and AI-powered sourcing tools improve recruiter productivity</li>
          <li><strong>Payrolling/EOR:</strong> Employer of Record services for clients who want to engage contractors without the legal complexity</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Niche staffing agencies offer the best risk-adjusted returns &mdash; specialize in healthcare, IT, or a specific vertical</li>
          <li>Target companies with 60%+ temp/contract revenue, diversified client base, and gross margins above 25%</li>
          <li>Key recruiter retention is critical &mdash; they own the client relationships. Use retention bonuses and equity.</li>
          <li>Workers&apos; compensation is a hidden cost center. Audit claims history and EMR carefully.</li>
          <li>Specialized staffing commands 5&ndash;8x EBITDA vs. 3&ndash;5x for generalists</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">Acquiring a Professional Services Firm</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
        <li><Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">Key Person Risk</Link></li>
        <li><Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">Employee Retention After Acquisition</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>American Staffing Association, <em>Staffing Industry Annual Report</em> (2024)</li>
        <li>SIA (Staffing Industry Analysts), <em>US Staffing Market Forecast</em> (2024)</li>
        <li>IBISWorld, <em>Temporary Staffing Industry in the US</em> (2024)</li>
      </ul>
    </article>
  );
}
