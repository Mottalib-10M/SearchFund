import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function VeterinaryPracticeAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Veterinary Practice</h1>
      <div className={bodyClass}>
        <p>The veterinary industry is experiencing rapid consolidation, driven by pet humanization trends, veterinarian retirement waves, and strong private equity interest. For search fund entrepreneurs, veterinary practices offer recurring revenue, emotional customer loyalty, and a clear path to value creation through the same DSO-like model being applied in <Link href="/learn/acquiring-dental-practice" className="text-apple-accent hover:underline">dental practices</Link>.</p>
      </div>

      <h2 className={h2Class}>Why Veterinary Practices Are Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Pet economy growth:</strong> US pet spending exceeds $140B annually, with veterinary care the fastest-growing segment</li>
          <li><strong>Recurring revenue:</strong> Annual wellness exams, vaccinations, dental cleanings, and chronic disease management</li>
          <li><strong>Emotional loyalty:</strong> Pet owners develop deep loyalty to their vet &mdash; switching costs are high</li>
          <li><strong>Fragmented market:</strong> 28,000+ veterinary practices in the US, ~25% corporately owned</li>
          <li><strong>Succession crisis:</strong> Many practice-owning vets are nearing retirement with no succession plan</li>
          <li><strong>Consolidation premium:</strong> Solo practices sell at 5&ndash;8x EBITDA; corporate platforms at 12&ndash;18x</li>
        </ul>
      </div>

      <h2 className={h2Class}>Ownership Structure</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Veterinary Practice Act:</strong> Many states require a licensed veterinarian to own the practice. Research your state&apos;s rules.</li>
          <li><strong>Management company model:</strong> Similar to the DSO model &mdash; a management company provides support services while a licensed vet retains clinical ownership</li>
          <li><strong>Friendly states:</strong> Some states allow non-veterinarian ownership (varies widely)</li>
          <li><strong>Partner with a vet:</strong> Many search fund operators partner with a licensed veterinarian who serves as medical director</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Focus Areas</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Revenue per DVM:</strong> Benchmark is $700K&ndash;1M per full-time veterinarian. Below $500K signals operational issues.</li>
          <li><strong>Active client count:</strong> Clients with at least one visit in the trailing 18 months. Track trends.</li>
          <li><strong>Average transaction value:</strong> Benchmark $200&ndash;400 per visit. Higher ATV indicates strong wellness plan adoption and good client communication.</li>
          <li><strong>Staff retention:</strong> Veterinary technician turnover is a major industry challenge. High turnover = operational risk.</li>
          <li><strong>Equipment:</strong> Digital X-ray, ultrasound, dental equipment, surgery suite. Major capex if outdated.</li>
          <li><strong>Revenue mix:</strong> Wellness/preventive (30&ndash;40%), medical (30&ndash;40%), surgery (15&ndash;25%), retail (5&ndash;10%)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth Levers</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Wellness plans:</strong> Monthly subscription plans for preventive care. Increases revenue predictability and client retention.</li>
          <li><strong>Extended hours:</strong> Evening and weekend hours to capture demand from working pet owners</li>
          <li><strong>Specialty services:</strong> Add dentistry, dermatology, rehabilitation, or emergency services</li>
          <li><strong>Digital marketing:</strong> Most vet practices have minimal online presence. Google Ads and SEO drive new client acquisition.</li>
          <li><strong>Practice management software:</strong> Upgrade to modern PIMS (eVetPractice, Cornerstone, AVImark) for better efficiency</li>
          <li><strong>Add-on acquisitions:</strong> Roll up nearby solo practices to build a multi-location platform</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Veterinary practices offer strong recurring revenue, emotional customer loyalty, and significant consolidation opportunity</li>
          <li>Check your state&apos;s Veterinary Practice Act &mdash; non-vet ownership may require a management company structure</li>
          <li>Key DD metrics: revenue per DVM ($700K+ target), active client trends, staff retention, and average transaction value</li>
          <li>Wellness plans are the single highest-impact post-acquisition initiative for revenue predictability</li>
          <li>Consolidation premium is substantial: solo at 5&ndash;8x EBITDA, platforms at 12&ndash;18x</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/acquiring-dental-practice" className="text-apple-accent hover:underline">Acquiring a Dental Practice</Link></li>
        <li><Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">Acquiring a Healthcare Business</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
        <li><Link href="/learn/business-licensing-permits" className="text-apple-accent hover:underline">Business Licensing & Permits</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>AVMA, <em>Veterinary Practice Economic Survey</em> (2024)</li>
        <li>APPA, <em>National Pet Owners Survey</em> (2024)</li>
        <li>Bain &amp; Company, <em>Veterinary Consolidation Market Report</em> (2024)</li>
      </ul>
    </article>
  );
}
