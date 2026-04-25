import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function PharmacyAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Pharmacy Business</h1>
      <div className={bodyClass}>
        <p>Independent pharmacies serve 40% of US communities as the primary healthcare access point, generating $90B+ annually across 21,000+ locations. While competing with chain pharmacies (CVS, Walgreens) and PBMs (pharmacy benefit managers) is challenging, independent pharmacies that specialize in compounding, long-term care, specialty medications, or clinical services can build highly profitable, defensible businesses. For search fund entrepreneurs, the key is finding pharmacies with differentiated revenue streams beyond basic prescription filling.</p>
      </div>

      <h2 className={h2Class}>Types of Pharmacy Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Community/retail pharmacy:</strong> Traditional prescription filling + OTC retail. Competing directly with chains on price. Challenging margins.</li>
          <li><strong>Compounding pharmacy:</strong> Custom-made medications. Higher margins (40-60% gross), specialized expertise, and less chain competition.</li>
          <li><strong>Long-term care (LTC):</strong> Serving nursing homes, assisted living, and group homes. Contract-based recurring revenue.</li>
          <li><strong>Specialty pharmacy:</strong> High-cost medications for complex conditions (oncology, autoimmune, HIV). Very high revenue per script.</li>
          <li><strong>340B pharmacy:</strong> Serving federally qualified health centers. Discounted drug purchasing creates higher margins.</li>
          <li><strong>Clinical pharmacy:</strong> Immunizations, MTM (medication therapy management), point-of-care testing. Growing services revenue.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Pharmacy Can Work for ETA</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Essential service:</strong> People always need medications. Prescription volume is largely recession-proof.</li>
          <li><strong>Recurring revenue:</strong> Chronic medication refills create monthly recurring revenue per patient</li>
          <li><strong>Specialty niches:</strong> Compounding, LTC, and specialty pharmacy offer significantly higher margins than retail</li>
          <li><strong>Aging population:</strong> 55+ age group takes 2-3x more prescriptions per capita. Demographics drive volume growth.</li>
          <li><strong>Community ties:</strong> Independent pharmacies have deep patient loyalty and community trust</li>
          <li><strong>Clinical services expansion:</strong> Pharmacists can now provide more clinical services (immunizations, testing, prescribing in some states)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Prescription volume:</strong> Scripts per day (target 150+ for community pharmacy), trend over 24 months, and new vs. refill ratio</li>
          <li><strong>PBM contracts:</strong> Reimbursement rates from major PBMs (Express Scripts, CVS Caremark, OptumRx). DIR fees and clawbacks.</li>
          <li><strong>Revenue mix:</strong> Prescription vs. OTC vs. clinical services vs. specialty. Higher specialty/compounding percentage = better margins.</li>
          <li><strong>Gross margin by category:</strong> Generic prescriptions (60-80% gross margin), brand (10-20%), compounding (40-60%).</li>
          <li><strong>Regulatory compliance:</strong> State pharmacy license, DEA registration, controlled substance records, and any board actions</li>
          <li><strong>Pharmacist staffing:</strong> Licensed pharmacist-in-charge, pharmacist coverage, and technician certifications</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Clinical services:</strong> Immunizations, MTM, point-of-care testing, and chronic disease management programs</li>
          <li><strong>Compounding:</strong> Add or expand compounding capabilities for higher-margin specialty prescriptions</li>
          <li><strong>Delivery &amp; adherence:</strong> Home delivery, blister packaging, and medication synchronization programs</li>
          <li><strong>LTC contracts:</strong> Pursue nursing home and assisted living facility contracts for recurring institutional revenue</li>
          <li><strong>340B participation:</strong> Partner with eligible health centers for discounted drug purchasing programs</li>
          <li><strong>Technology:</strong> Automated dispensing, IVR refill systems, and patient engagement platforms</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Standard retail pharmacy is challenging due to PBM pressure, focus on compounding, LTC, specialty, or clinical services</li>
          <li>Generic prescription margins (60-80%) subsidize low brand margins (10-20%). Generic fill rate is critical.</li>
          <li>PBM contract terms and DIR fee exposure are the most important financial due diligence items</li>
          <li>Clinical services (immunizations, MTM, testing) represent the fastest-growing revenue stream for independent pharmacies</li>
          <li>Typical valuations: 2-4x annual SDE for community pharmacy; 4-7x EBITDA for compounding or specialty pharmacies</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">Acquiring a Healthcare Business</Link></li>
        <li><Link href="/learn/acquiring-dental-practice" className="text-apple-accent hover:underline">Acquiring a Dental Practice</Link></li>
        <li><Link href="/learn/acquiring-home-healthcare" className="text-apple-accent hover:underline">Acquiring a Home Health Agency</Link></li>
        <li><Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">Recurring Revenue Businesses</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>What are the typical valuation multiples for independent pharmacies?</h3>
        <p>
          Independent pharmacy valuations vary significantly by type and revenue mix. Community pharmacies focused primarily on basic prescription filling typically sell at 2-4x annual seller&rsquo;s discretionary earnings (SDE), while compounding pharmacies and specialty pharmacies command 4-7x EBITDA due to their higher margins and more defensible market positions. According to the National Community Pharmacists Association&rsquo;s annual NCPA Digest, the average independent pharmacy generates $4.5-5 million in annual revenue with net profit margins of 3-5% for retail-focused operations, rising to 10-15% for compounding and specialty pharmacies. The most valuable pharmacies combine multiple revenue streams, retail prescriptions, compounding, clinical services, and long-term care contracts, which reduces dependence on any single reimbursement model.
        </p>

        <h3 className={h3Class}>How do PBM contracts affect pharmacy profitability?</h3>
        <p>
          Pharmacy Benefit Manager (PBM) contracts are the single most important determinant of community pharmacy profitability. The three major PBMs, Express Scripts, CVS Caremark, and OptumRx, control approximately 80% of US prescription volume and set reimbursement rates that often fall below the pharmacy&rsquo;s acquisition cost for brand-name drugs. According to the Drug Channels Institute, DIR (Direct and Indirect Remuneration) fees, retroactive clawbacks from PBMs, reduced independent pharmacy margins by an average of $0.50-$1.50 per prescription in 2024. During due diligence, buyers must analyze PBM contract terms, reimbursement rates by drug category, DIR fee exposure, and the pharmacy&rsquo;s generic dispensing rate (higher is better, as generic margins of 60-80% subsidize low brand margins of 10-20%).
        </p>

        <h3 className={h3Class}>Do you need to be a licensed pharmacist to acquire a pharmacy?</h3>
        <p>
          Pharmacy ownership requirements vary by state, and this is a critical due diligence question. Approximately 30 US states allow non-pharmacist ownership of pharmacies, while the remaining states require that at least one owner hold an active pharmacist license. Even in states allowing non-pharmacist ownership, every pharmacy must have a designated pharmacist-in-charge (PIC) who holds an active license and is responsible for regulatory compliance, controlled substance management, and dispensing operations. According to IQVIA&rsquo;s US Prescription Market Overview, the national shortage of licensed pharmacists means that retaining or recruiting a qualified PIC should be addressed early in the acquisition process. Search fund entrepreneurs without pharmacy licenses should verify state ownership requirements, secure a PIC commitment before closing, and budget appropriately for competitive pharmacist compensation.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>National Community Pharmacists Association, <em>NCPA Digest</em> (2024)</li>
        <li>IQVIA, <em>US Prescription Market Overview</em> (2024)</li>
        <li>Drug Channels Institute, <em>Independent Pharmacy Economics</em> (2024)</li>
      </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related Reading</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><Link href="/learn/industry-selection-framework" className="text-apple-accent hover:underline">Industry Selection Framework: Picking Your Vertical</Link></li>
          <li><Link href="/learn/competitive-moat-evaluation" className="text-apple-accent hover:underline">Evaluating Competitive Moats in Acquisition Targets</Link></li>
          <li><Link href="/learn/business-valuation" className="text-apple-accent hover:underline">How to Value a Small Business for Acquisition</Link></li>
          <li><Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">ETA Due Diligence Checklist</Link></li>
          <li><Link href="/learn/regulated-industries" className="text-apple-accent hover:underline">Acquiring Businesses in Regulated Industries</Link></li>
          <li><Link href="/learn/business-licensing-permits" className="text-apple-accent hover:underline">Business Licensing &amp; Permits: What Transfers in an Acquisition?</Link></li>
        </ul>
    </article>
  );
}
