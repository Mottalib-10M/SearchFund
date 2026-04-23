import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ConsultingFirmAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Consulting Firm</h1>
      <div className={bodyClass}>
        <p>Management consulting, strategy consulting, and niche advisory firms represent a $300B+ US market with thousands of small and mid-size firms serving corporate, government, and nonprofit clients. For search fund entrepreneurs, consulting firms offer high margins, intellectual capital, and scalable people-based models. The key challenge is key-person risk: consulting revenue is deeply tied to individual consultants&apos; client relationships and expertise.</p>
      </div>

      <h2 className={h2Class}>Types of Consulting Firms</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Management consulting:</strong> Strategy, operations, organizational design for large enterprises. High-value engagements.</li>
          <li><strong>IT consulting:</strong> Technology strategy, digital transformation, systems implementation. Growing fastest.</li>
          <li><strong>HR/talent consulting:</strong> Compensation, benefits, organizational development, executive coaching.</li>
          <li><strong>Regulatory/compliance:</strong> Industry-specific compliance consulting (healthcare, financial services, environmental).</li>
          <li><strong>Niche/industry-specific:</strong> Deep expertise in one sector (healthcare, education, government). Premium fees.</li>
          <li><strong>Implementation consulting:</strong> ERP, CRM, and software implementation services. Project-based but recurring clients.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Consulting Firms Are Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>High margins:</strong> Well-run consulting firms achieve 20&ndash;35% EBITDA margins</li>
          <li><strong>Low capex:</strong> People + laptops. No inventory, equipment, or physical infrastructure.</li>
          <li><strong>Intellectual capital:</strong> Proprietary frameworks, methodologies, and industry knowledge create competitive advantages</li>
          <li><strong>Client relationships:</strong> Deep advisory relationships create recurring project work. 60&ndash;80% of revenue from repeat clients.</li>
          <li><strong>Scalable:</strong> Revenue grows linearly with headcount. Adding consultants doesn&apos;t require capital investment.</li>
          <li><strong>Counter-cyclical opportunities:</strong> Cost reduction and restructuring consulting grows during downturns</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Revenue concentration:</strong> If the founder generates 30%+ of revenue personally, transition risk is extreme.</li>
          <li><strong>Client concentration:</strong> Top 5 clients should represent less than 40% of revenue. Diversification is essential.</li>
          <li><strong>Consultant utilization:</strong> Billable hours as percentage of capacity. Target 65&ndash;75% for senior consultants.</li>
          <li><strong>Bench strength:</strong> How deep is the team beyond the founder? Can engagements run without principal involvement?</li>
          <li><strong>Methodology documentation:</strong> Are consulting frameworks, tools, and deliverables documented and repeatable?</li>
          <li><strong>Employee retention:</strong> Consultant tenure and turnover rates. High turnover means constant recruitment and training costs.</li>
          <li><strong>Pipeline visibility:</strong> Current proposals, win rates, and average deal cycle length</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Productize IP:</strong> Convert proprietary methodologies into repeatable service packages and training programs</li>
          <li><strong>Add retainer revenue:</strong> Offer ongoing advisory retainers instead of project-only work</li>
          <li><strong>Expand service lines:</strong> Add implementation services alongside advisory (strategy + execution)</li>
          <li><strong>Near-shore delivery:</strong> Build delivery teams in lower-cost markets for implementation work</li>
          <li><strong>Thought leadership:</strong> Publish research, speak at conferences, and build digital presence for inbound lead generation</li>
          <li><strong>Acquisitive growth:</strong> Roll up complementary niche firms to build a multi-capability platform</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Consulting firms offer high margins and low capex but carry significant key-person and client concentration risk</li>
          <li>Niche/industry-specific firms command premium valuations due to specialized expertise and defensible positioning</li>
          <li>Methodology documentation and bench strength determine whether the business can survive a founder transition</li>
          <li>Productizing intellectual property (repeatable frameworks, tools, training) is the key to scalable growth</li>
          <li>Typical valuations: 4&ndash;8x EBITDA for firms with diversified consultant base; 2&ndash;4x for founder-dependent practices</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">Acquiring a Professional Services Firm</Link></li>
        <li><Link href="/learn/it-services-acquisition" className="text-apple-accent hover:underline">Acquiring an IT Services Firm</Link></li>
        <li><Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">Key Person Risk</Link></li>
        <li><Link href="/learn/digital-marketing-agency-acquisition" className="text-apple-accent hover:underline">Acquiring a Digital Marketing Agency</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Source Global Research, <em>US Consulting Market Report</em> (2024)</li>
        <li>Kennedy Consulting Research, <em>Global Consulting Index</em> (2024)</li>
        <li>IBISWorld, <em>Management Consulting in the US</em> (2024)</li>
      </ul>
    </article>
  );
}
