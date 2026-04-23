import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringVeterinaryPracticeArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Veterinary Practice: The ETA Playbook
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Veterinary medicine is a $60B+ US industry experiencing the
          same consolidation wave as dental &mdash; with corporate
          veterinary organizations (CVOs) rapidly acquiring independent
          practices. For search fund entrepreneurs, veterinary offers
          recurring revenue, emotional customer loyalty, and a proven
          multi-location rollup model.
        </p>

        <h2 className={h2Class}>Why veterinary practices?</h2>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> Annual wellness exams, vaccinations, dental cleanings, and chronic care create predictable revenue streams</li>
          <li><strong>Emotional loyalty:</strong> Pet owners are deeply attached. They rarely switch vets and are less price-sensitive than in human healthcare</li>
          <li><strong>Growing market:</strong> 70% of US households own pets. Pet spending has grown 6%+ annually for a decade</li>
          <li><strong>Fragmented:</strong> 33,000+ veterinary practices in the US, most independently owned</li>
          <li><strong>Succession wave:</strong> Many practice owners are approaching retirement with no transition plan</li>
          <li><strong>PE interest:</strong> Corporate groups (Mars/VCA, NVA, Pathway) have proven the roll-up model, creating strong exit opportunities</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Single practice:</strong> 5&ndash;8x EBITDA (or 70&ndash;100% of annual revenue)</li>
          <li><strong>Multi-location platforms:</strong> 10&ndash;15x+ EBITDA for established CVO platforms</li>
          <li><strong>Premium factors:</strong> Multiple veterinarians, strong associate retention, emergency/specialty services, modern facility and equipment</li>
          <li><strong>Discount factors:</strong> Solo-vet dependence, declining patient count, aging facility, Medicaid-equivalent (low-cost clinics) competition</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>
        <ul className={ulClass}>
          <li><strong>Revenue per DVM:</strong> Healthy benchmark is $600K&ndash;$900K per veterinarian. Below $500K signals underperformance</li>
          <li><strong>New client flow:</strong> 15&ndash;30 new clients per month per DVM is healthy. Declining new clients is a warning</li>
          <li><strong>Average transaction value:</strong> Track by service type. Increasing ATV indicates growing client trust and service utilization</li>
          <li><strong>Associate retention:</strong> Veterinarian turnover is the #1 risk. Review compensation, culture, and work-life balance</li>
          <li><strong>Facility &amp; equipment:</strong> Digital radiography, ultrasound, dental equipment, surgery suite. Equipment replacement can be $200K+</li>
          <li><strong>Practice management software:</strong> Cornerstone, Avimark, eVetPractice. Data quality matters for transitions</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>Fee schedule optimization:</strong> Many practices haven&rsquo;t raised fees in years.{" "}
            <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">
              5&ndash;15% increases
            </Link>{" "}
            are absorbed with minimal client loss in vet</li>
          <li><strong>Add specialty services:</strong> Dentistry, surgery, rehabilitation, dermatology generate higher revenue per visit</li>
          <li><strong>Extended hours:</strong> Evening and weekend appointments increase accessibility and revenue 10&ndash;20%</li>
          <li><strong>Wellness plans:</strong> Monthly subscription plans for preventive care increase retention and smooth revenue</li>
          <li><strong>Multi-location roll-up:</strong> Acquire 3&ndash;8 practices in a metro area. Centralize procurement, marketing, HR, and back-office for 20&ndash;30% cost savings</li>
        </ul>

        <p>
          For related playbooks, see{" "}
          <Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">
            healthcare acquisition
          </Link>{" "}
          and{" "}
          <Link href="/learn/acquiring-dental-practice" className="text-apple-accent hover:underline">
            dental practice acquisition
          </Link>.
        </p>
      </div>
    </article>
  );
}
