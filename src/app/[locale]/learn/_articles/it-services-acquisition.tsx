import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ITServicesAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring an IT Services &amp; Consulting Firm</h1>
      <div className={bodyClass}>
        <p>IT services companies &mdash; including managed service providers (MSPs), IT consulting firms, and systems integrators &mdash; are among the most popular search fund targets. The sector offers high recurring revenue through managed services contracts, strong margins, low capital intensity, and a massive consolidation opportunity in a $500B+ global market. For search fund entrepreneurs with technology backgrounds, IT services is often the ideal acquisition vertical.</p>
      </div>

      <h2 className={h2Class}>Why IT Services Businesses Are Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> <Link href="/learn/acquiring-msp-business" className="text-apple-accent hover:underline">Managed service providers</Link> generate 60&ndash;80% recurring revenue through monthly contracts</li>
          <li><strong>High margins:</strong> EBITDA margins of 15&ndash;25% for well-run firms; MSPs can reach 20&ndash;30%</li>
          <li><strong>Low capex:</strong> People-based business with minimal physical infrastructure</li>
          <li><strong>Sticky customers:</strong> Switching IT providers is painful &mdash; retention rates exceed 90% for good MSPs</li>
          <li><strong>Fragmented market:</strong> Thousands of small IT companies with 5&ndash;50 employees</li>
          <li><strong>Growing demand:</strong> SMB IT spending increases 8&ndash;12% annually as technology becomes more critical</li>
        </ul>
      </div>

      <h2 className={h2Class}>Types of IT Services Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Managed Service Provider (MSP):</strong> Monthly contracts for network management, helpdesk, and infrastructure. Highest recurring revenue.</li>
          <li><strong>IT consulting:</strong> Project-based advisory on strategy, cloud migration, ERP implementation. Higher ticket, lower predictability.</li>
          <li><strong>Systems integrator:</strong> Hardware + software deployment for specific vendors (Microsoft, Cisco, AWS). Deal-driven revenue.</li>
          <li><strong>Cybersecurity firm:</strong> MSSP (managed security) and compliance consulting. Growing fastest but specialized talent required.</li>
          <li><strong>Cloud services provider:</strong> AWS/Azure/GCP consulting, migration, and managed cloud. High growth.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Revenue quality:</strong> What percentage is recurring (managed services contracts) vs. project-based? Target 60%+ recurring.</li>
          <li><strong>Customer concentration:</strong> If one client represents 15%+ of revenue, that&apos;s a risk. Diversification is critical.</li>
          <li><strong>Contract terms:</strong> Average contract length, auto-renewal provisions, termination notice periods</li>
          <li><strong>Technical talent:</strong> Certifications (Microsoft, Cisco, AWS), tenure, and bench strength. Knowledge loss is the biggest integration risk.</li>
          <li><strong>PSA/RMM tools:</strong> What professional services automation and remote monitoring tools are in place? ConnectWise, Datto, Kaseya?</li>
          <li><strong>Vendor partnerships:</strong> Microsoft partner status, Cisco certifications, and vendor deal registrations</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Convert project clients to managed services:</strong> Move break-fix customers to monthly contracts</li>
          <li><strong>Add cybersecurity:</strong> MSSP services are the fastest-growing add-on for IT services companies</li>
          <li><strong>Cloud migration services:</strong> Help customers migrate to Azure/AWS with ongoing management</li>
          <li><strong>Compliance consulting:</strong> HIPAA, SOC 2, PCI-DSS compliance services for regulated industries</li>
          <li><strong>Raise prices:</strong> Many MSPs underprice. Benchmark per-user pricing and adjust upward.</li>
          <li><strong>Acquisitive growth:</strong> Roll up smaller MSPs in your region for scale and cross-sell opportunities</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>IT services offer high recurring revenue, strong margins, and excellent consolidation opportunity</li>
          <li>Target MSPs with 60%+ recurring revenue, diverse customer base, and certified technical talent</li>
          <li>Converting project clients to managed services contracts is the #1 post-acquisition lever</li>
          <li>Cybersecurity and cloud services are the highest-growth add-ons</li>
          <li>Technical talent retention is critical &mdash; assess certifications, tenure, and non-compete status</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/acquiring-msp-business" className="text-apple-accent hover:underline">Acquiring a Managed Service Provider (MSP)</Link></li>
        <li><Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">Acquiring a SaaS Business</Link></li>
        <li><Link href="/learn/acquiring-cybersecurity-firm" className="text-apple-accent hover:underline">Acquiring a Cybersecurity Firm</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Gartner, <em>IT Services Market Size and Forecast</em> (2024)</li>
        <li>ConnectWise, <em>MSP Benchmark Report</em> (2024)</li>
        <li>Channel Futures, <em>MSP 501 Annual Survey</em> (2024)</li>
      </ul>
    </article>
  );
}
