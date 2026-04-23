import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function OperationalDueDiligenceArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Operational Due Diligence for SME Acquisitions
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Operational due diligence (ODD) assesses how the business
          actually runs &mdash; its people, processes, systems,
          customers, and competitive position. While{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            financial DD
          </Link>{" "}
          tells you what the business earns and{" "}
          <Link href="/learn/legal-due-diligence" className="text-apple-accent hover:underline">
            legal DD
          </Link>{" "}
          identifies liabilities, operational DD tells you whether
          the business can sustain and grow those earnings under new
          ownership.
        </p>

        <h2 className={h2Class}>People and organization</h2>

        <h3 className={h3Class}>Management team assessment</h3>
        <ul className={ulClass}>
          <li><strong>Org chart:</strong> Map the organizational structure. Is there a management layer or does everything report to the owner?</li>
          <li><strong>Key employees:</strong> Identify the 3&ndash;5 people the business cannot function without. Assess retention risk</li>
          <li><strong>Compensation analysis:</strong> Are key employees paid at market rates? Underpaid employees may leave post-acquisition; overpaid employees inflate costs</li>
          <li><strong>Tenure and morale:</strong> Average employee tenure, recent departures, informal culture assessment</li>
          <li><strong>
            <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
              Owner dependency
            </Link>:
          </strong> How dependent is the business on the current owner?</li>
        </ul>

        <h3 className={h3Class}>Workforce analysis</h3>
        <ul className={ulClass}>
          <li>Total headcount and breakdown by department/function</li>
          <li>Full-time vs. part-time vs. contractor mix</li>
          <li>Employee certifications, licenses, and specialized skills</li>
          <li>Turnover rate (last 3 years): industry average is typically 15&ndash;25% for SMEs</li>
          <li>Recruiting pipeline: How does the business attract and hire talent?</li>
        </ul>

        <h2 className={h2Class}>Customers and market</h2>

        <h3 className={h3Class}>Customer analysis</h3>
        <ul className={ulClass}>
          <li><strong>Customer segmentation:</strong> Size, industry, geography, profitability by customer</li>
          <li><strong>
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              Concentration
            </Link>:
          </strong> Top 5, top 10, and top 20 customers as percentage of revenue</li>
          <li><strong>Retention rates:</strong> Gross and net revenue retention by year and by cohort</li>
          <li><strong>Customer satisfaction:</strong> NPS, online reviews, complaint logs, return rates</li>
          <li><strong>Sales pipeline:</strong> Current pipeline, conversion rates, average sales cycle length</li>
          <li><strong>Customer interviews:</strong> Direct conversations with 5&ndash;10 key customers (with seller permission)</li>
        </ul>

        <h3 className={h3Class}>Competitive position</h3>
        <ul className={ulClass}>
          <li>Who are the top 3&ndash;5 competitors? How does the business differentiate?</li>
          <li>What are the barriers to entry? (licenses, relationships, technology, brand)</li>
          <li>Is the market growing, stable, or declining?</li>
          <li>Are there consolidation trends (PE-backed roll-ups entering the space)?</li>
          <li>What threats could disrupt the business model in 3&ndash;5 years?</li>
        </ul>

        <h2 className={h2Class}>Processes and systems</h2>

        <h3 className={h3Class}>Operational processes</h3>
        <ul className={ulClass}>
          <li><strong>Documentation:</strong> Are key processes documented or in the owner&rsquo;s head?</li>
          <li><strong>Quality control:</strong> What QC/QA processes exist? Defect rates, warranty claims, service failures</li>
          <li><strong>Scalability:</strong> Can the business handle 20&ndash;50% revenue growth without fundamental changes?</li>
          <li><strong>Bottlenecks:</strong> Where are the operational constraints? (production capacity, scheduling, key personnel)</li>
        </ul>

        <h3 className={h3Class}>Technology and IT</h3>
        <ul className={ulClass}>
          <li><strong>Core systems:</strong> ERP, CRM, accounting software, industry-specific platforms</li>
          <li><strong>Technology age:</strong> Are systems current or legacy? Replacement cost estimate</li>
          <li><strong>Cybersecurity:</strong> Basic security posture, data backup practices, incident history</li>
          <li><strong>Website and digital presence:</strong> Traffic analytics, SEO performance, online lead generation</li>
          <li><strong>Data ownership:</strong> Who owns the data? Is it in vendor-owned systems or proprietary?</li>
        </ul>

        <h2 className={h2Class}>Suppliers and vendors</h2>
        <ul className={ulClass}>
          <li><strong>Key supplier relationships:</strong> Top 5 suppliers by spend, terms, and reliability</li>
          <li><strong>Supplier concentration:</strong> Does the business depend on a single supplier for critical inputs?</li>
          <li><strong>Contract terms:</strong> Pricing agreements, exclusivity, change-of-control provisions</li>
          <li><strong>Supply chain risk:</strong> Lead times, backup suppliers, geopolitical or shipping risks</li>
        </ul>

        <h2 className={h2Class}>Facilities and assets</h2>
        <ul className={ulClass}>
          <li><strong>Physical inspection:</strong> Visit every facility. Assess condition, capacity utilization, and maintenance</li>
          <li><strong>Equipment:</strong> Age, condition, replacement schedule, and capital budget needed</li>
          <li><strong>Fleet (if applicable):</strong> Vehicle age, condition, GPS tracking, maintenance records</li>
          <li><strong>Inventory:</strong> Physical count vs. book value, obsolescence, storage conditions</li>
          <li><strong>Capacity:</strong> Is the facility at 50%, 80%, or 100% utilization? Is there room to grow?</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition operational plan</h2>
        <p>
          ODD should inform your{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            first 100 days
          </Link>{" "}
          plan. Key questions to answer:
        </p>
        <ul className={ulClass}>
          <li>What operational improvements can be made in the first 6&ndash;12 months?</li>
          <li>What technology investments are needed?</li>
          <li>Which key employees need retention agreements?</li>
          <li>What is the owner transition plan?</li>
          <li>What is the realistic timeline for reducing{" "}
            <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
              owner dependency
            </Link>?</li>
          <li>What quick wins can build credibility with the team?</li>
        </ul>

        <h2 className={h2Class}>ODD timeline and approach</h2>
        <ul className={ulClass}>
          <li><strong>Timeline:</strong> 4&ndash;8 weeks, running in parallel with financial and legal DD</li>
          <li><strong>Site visits:</strong> At least 2&ndash;3 visits during DD (initial visit, deep-dive, and final walk-through)</li>
          <li><strong>Employee meetings:</strong> Meet key managers and frontline staff (with seller&rsquo;s permission and guidance on confidentiality)</li>
          <li><strong>Customer calls:</strong> 5&ndash;10 customer conversations (critical for validating service quality and satisfaction)</li>
          <li><strong>Third-party assessments:</strong> IT audit, environmental assessment, or industry-specific evaluations as needed</li>
        </ul>
        <p>
          Operational DD complements{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            financial
          </Link>{" "}
          and{" "}
          <Link href="/learn/legal-due-diligence" className="text-apple-accent hover:underline">
            legal DD
          </Link>{" "}
          to form a complete picture. For the comprehensive checklist,
          see our{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence checklist
          </Link>.
        </p>
      </div>
    </article>
  );
}
