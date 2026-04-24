import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringDentalPracticeArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Dental Practice: The DSO Model &amp; ETA Playbook
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Dental practice acquisitions are one of the fastest-growing
          segments in healthcare ETA. According to the American Dental
          Association (ADA), there are over 200,000 dental practices in
          the US. With aging dentist demographics and proven{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            buy-and-build
          </Link>{" "}
          strategies through the Dental Service Organization (DSO) model,
          dental offers a compelling combination of recurring revenue,
          defensive economics, and clear consolidation opportunities.
        </p>

        <h2 className={h2Class}>Why dental practices?</h2>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> Patients return every 6 months for cleanings. Insurance-driven demand creates predictable revenue</li>
          <li><strong>Recession-resistant:</strong> Dental spending is relatively stable through economic cycles. People continue routine dental care</li>
          <li><strong>Massive fragmentation:</strong> 200,000+ practices, 80% are solo or small group practices. The Association of Dental Support Organizations (ADSO) estimates DSOs represent only about 10% of the market</li>
          <li><strong>Succession wave:</strong> ADA Health Policy Institute data shows the average dentist age is 55+. Thousands of practices will need new ownership in the next decade</li>
          <li><strong>High margins:</strong> Well-run practices generate 25&ndash;40% EBITDA margins</li>
        </ul>

        <h2 className={h2Class}>The DSO model</h2>
        <ul className={ulClass}>
          <li><strong>What is a DSO?</strong> A Dental Service Organization provides business management services (billing, HR, marketing, procurement) to dental practices while the dentist retains clinical autonomy</li>
          <li><strong>Why DSO?</strong> Most states require a licensed dentist to own a dental practice. The DSO structure allows a non-dentist investor/operator to manage the business side</li>
          <li><strong>Structure:</strong> The DSO enters a management services agreement (MSA) with the clinical entity. The DSO receives a management fee (typically 15&ndash;25% of collections)</li>
          <li><strong>Regulatory note:</strong> DSO regulations vary by state. Some states restrict corporate practice of dentistry. Work with healthcare attorneys</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Single practice:</strong> 4&ndash;7x EBITDA (or 60&ndash;80% of annual collections for practices with typical margins)</li>
          <li><strong>Multi-location DSO:</strong> 8&ndash;12x+ EBITDA for platforms with 5+ locations and proven management</li>
          <li><strong>Premium factors:</strong> Multiple dentists (not owner-dependent), insurance mix (more fee-for-service = more valuable), modern equipment, strong hygiene program</li>
          <li><strong>Discount factors:</strong> Single-dentist dependency, Medicaid-heavy payer mix, aging equipment, declining patient count</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>

        <h3 className={h3Class}>Revenue analysis</h3>
        <ul className={ulClass}>
          <li><strong>Collections vs. production:</strong> Healthy practices collect 95%+ of production. Low collection rates signal billing or insurance issues</li>
          <li><strong>Payer mix:</strong> Fee-for-service (highest revenue per procedure), PPO insurance, HMO/DHMO (lowest), Medicaid. More fee-for-service = better</li>
          <li><strong>Hygiene production:</strong> Should be 30&ndash;35% of total production. Strong hygiene = healthy recurring revenue base</li>
          <li><strong>New patient flow:</strong> 20&ndash;40 new patients/month per dentist is healthy. Declining new patients is a red flag</li>
        </ul>

        <h3 className={h3Class}>Clinical assessment</h3>
        <ul className={ulClass}>
          <li><strong>Equipment condition:</strong> Digital X-rays, CBCT scanner, intraoral cameras, modern chairs. Replacement costs can be $200K+ per operatory</li>
          <li><strong>Treatment mix:</strong> Diversified mix (preventive, restorative, cosmetic, implants, ortho) is more valuable than single-specialty</li>
          <li><strong>Chart audit:</strong> Review a sample of patient charts for documentation quality and treatment planning consistency</li>
          <li><strong>Infection control:</strong> Verify compliance with OSHA, EPA, and state dental board regulations</li>
        </ul>

        <h3 className={h3Class}>Team &amp; operations</h3>
        <ul className={ulClass}>
          <li><strong>Associate dentists:</strong> Practices with employed associates are more valuable (not owner-dependent). See{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              key person risk
            </Link></li>
          <li><strong>Staff retention:</strong> Long-tenured hygienists and front desk staff are critical. High turnover signals culture or compensation issues</li>
          <li><strong>Practice management software:</strong> Dentrix, Eaglesoft, Open Dental. Evaluate data quality and reporting capabilities</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition growth strategies</h2>
        <ul className={ulClass}>
          <li><strong>Extended hours:</strong> Adding evening and Saturday appointments can increase production 15&ndash;25%</li>
          <li><strong>Fee schedule optimization:</strong> Many practices haven&rsquo;t raised fees in years.{" "}
            <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">
              Pricing optimization
            </Link>{" "}
            is the fastest path to profit growth</li>
          <li><strong>Add specialties:</strong> Adding implants, Invisalign, or sedation dentistry to a general practice increases revenue per patient</li>
          <li><strong>Marketing:</strong> Digital marketing (Google Ads, SEO) for new patient acquisition. Most solo dentists underinvest in marketing</li>
          <li><strong>DSO roll-up:</strong> Acquire 3&ndash;10 practices within a geography. Centralize billing, marketing, procurement, and HR for 20&ndash;30% cost savings</li>
        </ul>

        <h2 className={h2Class}>Dental-specific risks</h2>
        <ul className={ulClass}>
          <li><strong>Dentist retention:</strong> If the selling dentist leaves and takes patients, revenue drops 30&ndash;50%. Retention agreements and non-competes are essential</li>
          <li><strong>Regulatory risk:</strong> State dental boards, HIPAA, OSHA, EPA regulations. Compliance failures can result in fines and practice closure</li>
          <li><strong>Insurance reimbursement:</strong> Insurance companies periodically reduce reimbursement rates. Medicaid-heavy practices are most vulnerable</li>
          <li><strong>Corporate practice restrictions:</strong> State laws may limit non-dentist ownership. DSO structure must comply with local regulations</li>
        </ul>

        <h2 className={h2Class}>Structuring the deal</h2>
        <p>
          Most dental practice acquisitions are structured as asset purchases,
          with the primary acquired assets being patient records, equipment,
          leasehold improvements, and goodwill. The DSO model adds a layer of
          complexity: the clinical entity (owned by a licensed dentist) is
          separate from the management company (the DSO), which can be owned by
          non-dentists. Typical deal structures include 60&ndash;70% at
          closing, 15&ndash;25% in seller financing over 3&ndash;5 years, and
          10&ndash;20% in a retention-based earnout tied to patient retention
          and production milestones at 12 and 24 months.
        </p>
        <p>
          SBA 7(a) loans are commonly used for dental acquisitions under $5M.
          The predictable patient flow and high margins make dental practices
          attractive to lenders. However, SBA lenders will scrutinize the deal
          structure carefully when a DSO is involved, so work with a lender
          experienced in healthcare transactions. For a deeper dive into
          acquisition financing, see our{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            seller financing guide
          </Link>.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          How much is a dental practice worth?
        </h3>
        <p>
          Single dental practices typically sell for 4&ndash;7x EBITDA, or
          60&ndash;80% of annual collections for practices with typical
          margins. Multi-location DSO platforms with 5+ locations and proven
          management command 8&ndash;12x EBITDA or higher. Premium factors
          include multiple dentists (reduces key-person risk), a high
          fee-for-service payer mix, modern equipment, and a strong hygiene
          program producing 30&ndash;35% of total production.
        </p>

        <h3 className={h3Class}>
          Can a non-dentist buy a dental practice?
        </h3>
        <p>
          Most states restrict non-dentist ownership of dental practices
          through corporate practice of dentistry laws. The DSO model is the
          primary workaround: a management services agreement allows a
          non-dentist operator to run the business side while a licensed
          dentist maintains clinical ownership and autonomy. DSO regulations
          vary significantly by state &mdash; some are more permissive than
          others. Engaging a healthcare attorney with DSO experience is
          essential before structuring the deal.
        </p>

        <h3 className={h3Class}>
          What is the DSO model and why does it matter for ETA?
        </h3>
        <p>
          A Dental Service Organization provides business management services
          &mdash; billing, HR, marketing, procurement &mdash; to dental
          practices while dentists retain full clinical autonomy. The DSO
          receives a management fee, typically 15&ndash;25% of collections.
          This structure lets non-dentist investors and operators manage the
          business side, making dental one of the few healthcare verticals
          accessible to search fund entrepreneurs. The DSO model also unlocks{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            buy-and-build strategies
          </Link>{" "}
          where centralized management creates 20&ndash;30% cost savings
          across multiple locations.
        </p>

        <p>
          For broader healthcare acquisition guidance, see{" "}
          <Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">
            healthcare acquisition playbook
          </Link>. For financing options, see{" "}
          <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
            SBA 7(a) guide
          </Link>.
        </p>
      </div>
    </article>
  );
}
