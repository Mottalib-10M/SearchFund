import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function OptometryPracticeAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring an Optometry Practice</h1>
      <div className={bodyClass}>
        <p>Optometry practices combine healthcare services (eye exams, disease management) with optical retail (eyeglasses, contact lenses) to create a dual revenue stream that&apos;s both recession-resistant and growing. The US eye care industry generates $45B+ annually, driven by an aging population needing more eye care and increasing screen time accelerating myopia in younger patients. For search fund entrepreneurs, optometry offers predictable patient flow, insurance-backed revenue, and a consolidation-friendly market where 60% of optometrists are solo practitioners.</p>
      </div>

      <h2 className={h2Class}>Revenue Streams</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Professional services:</strong> Comprehensive eye exams, medical eye care (dry eye, glaucoma management), contact lens fittings. Insurance-reimbursed.</li>
          <li><strong>Optical retail:</strong> Eyeglasses, frames, lenses, coatings, and sunglasses. 60&ndash;70% gross margins on premium frames.</li>
          <li><strong>Contact lenses:</strong> Annual supply sales. Moderate margins (20&ndash;30%) but recurring annual purchases.</li>
          <li><strong>Medical eye care:</strong> Dry eye treatment, myopia management, glaucoma co-management. Growing and higher reimbursement.</li>
          <li><strong>Specialty services:</strong> Orthokeratology, vision therapy, low vision. Niche but high-value cash-pay services.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Optometry Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Dual revenue model:</strong> Healthcare services + optical retail creates diversified, high-margin revenue</li>
          <li><strong>Recurring patients:</strong> Annual eye exams, contact lens refills, and ongoing medical care create 70%+ patient retention</li>
          <li><strong>Growing demand:</strong> Aging population + increased screen time = more patients needing eye care services</li>
          <li><strong>Insurance-backed:</strong> Vision insurance and medical insurance coverage provides reliable reimbursement</li>
          <li><strong>Fragmented:</strong> 60% of optometrists are solo practitioners. DSO-style consolidation is well-established.</li>
          <li><strong>High margins:</strong> Well-run practices achieve 25&ndash;35% EBITDA margins with strong optical sales</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Revenue mix:</strong> Professional services vs. optical retail vs. contact lenses. Balanced mix is ideal.</li>
          <li><strong>Patient count:</strong> Active patients, new patient acquisition rate, and exam volume per day. Target 12&ndash;18 exams/day per OD.</li>
          <li><strong>Insurance mix:</strong> VSP, EyeMed, Davis Vision, and medical insurance participation. Over-reliance on one plan is a risk.</li>
          <li><strong>Optical capture rate:</strong> What percentage of exam patients buy glasses or contacts from the practice? Target 60%+.</li>
          <li><strong>Equipment:</strong> Autorefractor, OCT, visual field, retinal camera. Modern diagnostic equipment enables medical billing.</li>
          <li><strong>OD retention:</strong> If the selling OD is leaving, will patients stay? Associate OD(s) and staff continuity are critical.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Medical eye care:</strong> Add dry eye treatment, myopia management, and specialty services for higher reimbursement</li>
          <li><strong>Optical optimization:</strong> Upgrade frame selection, add premium lens options, and improve capture rate</li>
          <li><strong>Extended hours:</strong> Saturday hours and evening appointments to capture working patients</li>
          <li><strong>Marketing:</strong> Google Ads, SEO, and online scheduling to increase new patient acquisition</li>
          <li><strong>Additional locations:</strong> Open satellite offices or acquire practices for geographic coverage</li>
          <li><strong>Associate ODs:</strong> Hire additional optometrists to increase exam capacity and reduce key-person risk</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Optometry offers a dual revenue model (healthcare + retail) with strong margins and recession-resistant demand</li>
          <li>Optical capture rate and medical eye care expansion are the two biggest post-acquisition growth levers</li>
          <li>OD retention is critical &mdash; patients follow their doctor, not the practice name</li>
          <li>Modern diagnostic equipment enables medical billing at higher reimbursement rates than routine vision care</li>
          <li>Typical valuations: 4&ndash;7x EBITDA or 60&ndash;80% of annual revenue for practices with strong optical sales</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/dental-practice-acquisition" className="text-apple-accent hover:underline">Acquiring a Dental Practice (DSO Model)</Link></li>
        <li><Link href="/learn/veterinary-practice-acquisition" className="text-apple-accent hover:underline">Acquiring a Veterinary Practice</Link></li>
        <li><Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">Acquiring a Healthcare Business</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>American Optometric Association, <em>State of the Optometric Profession</em> (2024)</li>
        <li>Vision Monday, <em>US Optical Market Report</em> (2024)</li>
        <li>IBISWorld, <em>Optometrists in the US</em> (2024)</li>
      </ul>
    </article>
  );
}
