import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function PhysicalTherapyAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Physical Therapy or Rehabilitation Practice</h1>
      <div className={bodyClass}>
        <p>Physical therapy is a $45B+ US industry with 40,000+ outpatient clinics serving millions of patients recovering from surgery, managing chronic pain, and improving mobility. For search fund entrepreneurs, PT practices offer insurance-backed revenue, predictable patient flow, and a fragmented market where independent practices still represent 40% of the market. The consolidation wave led by platforms like ATI, US Physical Therapy, and private equity-backed groups proves the model works at scale.</p>
      </div>

      <h2 className={h2Class}>Types of PT Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Outpatient orthopedic:</strong> Post-surgical rehab, sports injuries, musculoskeletal conditions. The core PT model. Highest volume.</li>
          <li><strong>Sports medicine/performance:</strong> Athletes and active populations. Premium cash-pay and performance programs.</li>
          <li><strong>Specialty PT:</strong> Pelvic floor, vestibular, hand therapy, pediatric. Niche expertise commands premium reimbursement.</li>
          <li><strong>Occupational therapy:</strong> Upper extremity rehab, work injury recovery, ergonomics. Often combined with PT practices.</li>
          <li><strong>Home health PT:</strong> In-home physical therapy for elderly and post-acute patients. Growing demand from aging population.</li>
          <li><strong>Industrial rehab:</strong> Workers&apos; compensation injury treatment and prevention programs for employers.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why PT Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Insurance-backed revenue:</strong> 85&ndash;90% of PT revenue is insurance-reimbursed. Predictable collection rates.</li>
          <li><strong>Growing demand:</strong> Aging population, increasing surgery volumes, and shift from opioids to physical therapy for pain management</li>
          <li><strong>Recurring patients:</strong> Average treatment plan is 8&ndash;12 visits over 6&ndash;8 weeks. Patients often return for new injuries.</li>
          <li><strong>Direct access:</strong> Most states allow patients to see PT without physician referral, expanding the market</li>
          <li><strong>Fragmented:</strong> 40% of outpatient PT is still independent. Consolidation by PE-backed platforms is ongoing.</li>
          <li><strong>Low capex:</strong> Treatment tables, exercise equipment, and modalities. $50K&ndash;150K to equip a clinic.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Visits per day per PT:</strong> Productivity metric. Target 10&ndash;14 patient visits per full-time PT per day.</li>
          <li><strong>Revenue per visit:</strong> Average reimbursement per visit. Typically $80&ndash;150 depending on payer mix and services.</li>
          <li><strong>Payer mix:</strong> Commercial insurance vs. Medicare vs. Medicaid vs. workers&apos; comp. Commercial pays highest.</li>
          <li><strong>Referral sources:</strong> Physician referral relationships, direct access patients, and marketing channels. Diversification is important.</li>
          <li><strong>Clinician retention:</strong> PTs and PTAs are in high demand. Assess tenure, compensation, and non-compete status.</li>
          <li><strong>Outcomes data:</strong> Patient satisfaction scores, functional outcomes, and discharge statistics</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Add clinicians:</strong> Hire additional PTs/PTAs to increase visit capacity at existing locations</li>
          <li><strong>New locations:</strong> Open satellite clinics in underserved areas or near referring physicians</li>
          <li><strong>Specialty services:</strong> Add pelvic floor, vestibular, dry needling, or aquatic therapy for higher reimbursement</li>
          <li><strong>Cash-pay programs:</strong> Wellness, performance, and prevention programs outside insurance</li>
          <li><strong>Physician partnerships:</strong> Develop relationships with orthopedic surgeons and primary care for steady referrals</li>
          <li><strong>Technology:</strong> Telehealth PT, patient engagement platforms, and outcomes tracking systems</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Physical therapy offers insurance-backed recurring revenue with growing demand from aging demographics</li>
          <li>Visits per day per PT (10&ndash;14) and revenue per visit ($80&ndash;150) are the two most critical performance metrics</li>
          <li>PT clinician retention is the #1 operational challenge &mdash; therapists are in high demand nationwide</li>
          <li>Direct access laws and the shift from opioids to PT create expanding market opportunities</li>
          <li>Typical valuations: 4&ndash;7x EBITDA for multi-clinician practices with diversified referral sources</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">Acquiring a Healthcare Business</Link></li>
        <li><Link href="/learn/dental-practice-acquisition" className="text-apple-accent hover:underline">Acquiring a Dental Practice</Link></li>
        <li><Link href="/learn/home-healthcare-acquisition" className="text-apple-accent hover:underline">Acquiring a Home Health Agency</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>American Physical Therapy Association, <em>Physical Therapy Workforce Analysis</em> (2024)</li>
        <li>IBISWorld, <em>Physical Therapy Clinics in the US</em> (2024)</li>
        <li>WebPT, <em>State of Rehab Therapy Report</em> (2024)</li>
      </ul>
    </article>
  );
}
