import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function EngineeringArchitectureAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring an Engineering or Architecture Firm</h1>
      <div className={bodyClass}>
        <p>Engineering and architecture firms are classic professional services businesses with high intellectual capital, sticky client relationships, and project backlogs that provide revenue visibility. The US architecture and engineering services industry generates $500B+ annually across tens of thousands of firms. For search fund entrepreneurs, these practices offer strong margins, recession-resistant infrastructure demand, and a massive succession wave as baby boomer principals retire.</p>
      </div>

      <h2 className={h2Class}>Types of Engineering &amp; Architecture Firms</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Civil engineering:</strong> Roads, bridges, water/sewer, site development. Government and municipal clients. Long backlogs.</li>
          <li><strong>Structural engineering:</strong> Building structures, seismic analysis, specialty structures. Tied to construction activity.</li>
          <li><strong>MEP engineering:</strong> Mechanical, electrical, plumbing design for buildings. Recurring work from developers and GCs.</li>
          <li><strong>Environmental engineering:</strong> Remediation, compliance, environmental impact. Regulatory-driven demand.</li>
          <li><strong>Architecture:</strong> Building design from concept to construction documents. Project-based but with repeat clients.</li>
          <li><strong>Surveying &amp; geotechnical:</strong> Land surveying, soil testing, subsurface investigation. Required for every development project.</li>
          <li><strong>Multi-discipline:</strong> Combined A/E firms offering design-build and full-service project delivery.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why A/E Firms Are Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Infrastructure spending:</strong> $1.2T federal infrastructure bill creates decades of government-funded demand</li>
          <li><strong>Professional licensing:</strong> PE (Professional Engineer) and RA (Registered Architect) licenses create barriers to entry</li>
          <li><strong>Recurring relationships:</strong> Top clients return year after year with new projects. 60&ndash;80% of revenue from repeat clients.</li>
          <li><strong>Backlog visibility:</strong> Project backlogs provide 6&ndash;18 months of revenue visibility</li>
          <li><strong>Succession crisis:</strong> Average principal is 55+. Many small firms lack succession plans.</li>
          <li><strong>Fragmented:</strong> Thousands of firms with 5&ndash;50 employees. Top 500 firms represent only 25% of the market.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Backlog quality:</strong> Total contracted backlog, win rate on proposals, and margin by project type. Backlog can include low-margin work.</li>
          <li><strong>Client concentration:</strong> If one client represents 20%+ of revenue, that&apos;s a significant risk. Diversification across public and private sectors is ideal.</li>
          <li><strong>Key personnel:</strong> Licensed professionals (PEs, RAs) are the firm&apos;s core asset. Assess tenure, non-competes, and transition willingness.</li>
          <li><strong>Utilization rate:</strong> Billable hours as a percentage of total hours. Target 60&ndash;70% for technical staff.</li>
          <li><strong>Professional liability:</strong> E&amp;O (errors and omissions) insurance, claims history, and current coverage. Design errors can create significant liability.</li>
          <li><strong>Project delivery:</strong> On-time and on-budget performance history. Change order management and scope creep control.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Add disciplines:</strong> Single-discipline firms can add complementary services (civil adds environmental; architecture adds MEP)</li>
          <li><strong>Government contracts:</strong> Pursue public sector work (DOT, military, municipal) for long-term, funded backlogs</li>
          <li><strong>Design-build:</strong> Offer integrated design-build services for higher project control and margins</li>
          <li><strong>Technology:</strong> BIM (Building Information Modeling), drone surveys, and project management software</li>
          <li><strong>Geographic expansion:</strong> Open satellite offices or acquire firms in new markets to serve regional clients</li>
          <li><strong>Specialization:</strong> Develop expertise in growing sectors (data centers, renewable energy, healthcare) for premium fees</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Infrastructure spending creates decades of demand for civil, environmental, and structural engineering</li>
          <li>Professional licensing (PE, RA) creates real barriers to entry that protect market position</li>
          <li>Key person risk is the #1 concern: licensed professionals are the firm&apos;s core asset and revenue generator</li>
          <li>Multi-discipline firms command premium valuations due to cross-selling and client diversification</li>
          <li>Typical valuations: 4&ndash;8x EBITDA for well-run firms with diverse backlogs and strong key-person retention</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">Acquiring a Professional Services Firm</Link></li>
        <li><Link href="/learn/construction-acquisition" className="text-apple-accent hover:underline">Acquiring a Construction Company</Link></li>
        <li><Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">Key Person Risk</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>American Council of Engineering Companies, <em>Engineering Business Index</em> (2024)</li>
        <li>American Institute of Architects, <em>AIA Firm Survey</em> (2024)</li>
        <li>ENR (Engineering News-Record), <em>Top Design Firms Report</em> (2024)</li>
      </ul>
    </article>
  );
}
