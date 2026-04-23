import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function RealEstateAcquisitionsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Real Estate Considerations in Business Acquisitions</h1>
      <div className={bodyClass}>
        <p>Real estate is often an overlooked but significant component of business acquisitions. Whether the target business owns its property, leases from the seller, or rents from a third party, the real estate arrangement can materially affect deal value, ongoing costs, and operational flexibility.</p>
      </div>

      <h2 className={h2Class}>Common Real Estate Scenarios</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>1. Seller Owns the Property Personally</h3>
        <ul className={ulClass}>
          <li>Very common in SME acquisitions: the owner holds the real estate in a personal entity or LLC</li>
          <li>The business operates under a lease with the owner&apos;s entity (or with no formal lease at all)</li>
          <li>Options: negotiate to buy the property, negotiate a new arm&apos;s-length lease, or have the seller continue as landlord</li>
          <li><strong>Risk:</strong> If you don&apos;t buy the property, the seller retains leverage as your landlord</li>
        </ul>

        <h3 className={h3Class}>2. Business Owns the Property</h3>
        <ul className={ulClass}>
          <li>The real estate is included in the acquisition price</li>
          <li>Increases the total deal value and may require larger financing</li>
          <li>Benefit: operational control and potential appreciation of the property</li>
          <li>Consider separating the property into a holding entity for liability protection</li>
        </ul>

        <h3 className={h3Class}>3. Third-Party Lease</h3>
        <ul className={ulClass}>
          <li>The business leases from an unrelated landlord</li>
          <li>Review the lease for assignment clauses, change-of-control provisions, and remaining term</li>
          <li>In asset deals, lease assignment typically requires landlord consent</li>
          <li>In stock deals, the lease continues with the same tenant entity</li>
        </ul>
      </div>

      <h2 className={h2Class}>Lease Review Checklist</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Remaining term:</strong> How many years remain? Are there renewal options?</li>
          <li><strong>Rent amount:</strong> Is it at market rate? When does it reset?</li>
          <li><strong>Assignment clause:</strong> Can the lease be transferred to the buyer? What conditions apply?</li>
          <li><strong>Change of control:</strong> Does a change in ownership trigger landlord consent or lease termination?</li>
          <li><strong>Personal guarantee:</strong> Does the seller personally guarantee the lease? Will the buyer need to provide one?</li>
          <li><strong>Triple net vs. gross:</strong> Who pays property taxes, insurance, and maintenance?</li>
          <li><strong>CAM charges:</strong> What are the common area maintenance costs?</li>
          <li><strong>Exclusivity:</strong> Does the lease prevent the landlord from leasing to competitors in the same property?</li>
          <li><strong>Relocation clause:</strong> Can the landlord force a relocation?</li>
        </ul>
      </div>

      <h2 className={h2Class}>When to Buy vs. Lease</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Buy when:</strong> The property is critical to operations (manufacturing, specialized facilities), prices are favorable, you have access to real estate financing, or you want long-term cost certainty</li>
          <li><strong>Lease when:</strong> You want to minimize the total deal size and preserve capital, the business may relocate or resize, or commercial real estate isn&apos;t your core competency</li>
          <li><strong>Hybrid approach:</strong> Buy the property in a separate entity and lease it to the operating company at arm&apos;s length</li>
        </ul>
      </div>

      <h2 className={h2Class}>Sale-Leaseback Strategy</h2>
      <div className={bodyClass}>
        <p>If the target owns its property, a sale-leaseback can unlock capital:</p>
        <ul className={ulClass}>
          <li>Sell the property to a real estate investor at closing</li>
          <li>Simultaneously enter a long-term lease (typically 10&ndash;20 years) with the new owner</li>
          <li>Use the sale proceeds to reduce the total acquisition price or fund post-acquisition growth</li>
          <li><strong>Trade-off:</strong> You lose the property asset but gain cash and operational flexibility</li>
        </ul>
      </div>

      <h2 className={h2Class}>Environmental Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Phase I Environmental Site Assessment for owned or leased industrial properties</li>
          <li><Link href="/learn/environmental-due-diligence" className="text-apple-accent hover:underline">Environmental due diligence</Link> is essential for manufacturing, auto repair, gas stations, and dry cleaning businesses</li>
          <li>Environmental liability can transfer with the property, creating significant financial exposure</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Real estate arrangements significantly affect deal economics, ongoing costs, and operational flexibility</li>
          <li>Always review leases for assignment clauses and change-of-control provisions before closing</li>
          <li>If the seller retains the property, negotiate a long-term lease at market rates with clear renewal options</li>
          <li>Consider separating property ownership from the operating business for liability protection</li>
          <li>Environmental assessments are essential for properties in manufacturing, industrial, or service trades</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">Due Diligence Checklist</Link></li>
        <li><Link href="/learn/environmental-due-diligence" className="text-apple-accent hover:underline">Environmental Due Diligence</Link></li>
        <li><Link href="/learn/closing-process" className="text-apple-accent hover:underline">The Closing Process</Link></li>
        <li><Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">Working Capital Adjustments at Closing</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>CCIM Institute, <em>Commercial Real Estate in Business Acquisitions</em> (2024)</li>
        <li>NAIOP, <em>Lease Assignment and Transfer Guide</em> (2024)</li>
        <li>SBA, <em>Real Property Guidelines for 7(a) and 504 Loans</em> (2024)</li>
        <li>ASTM International, <em>Phase I ESA Standard (E1527-21)</em></li>
      </ul>
    </article>
  );
}
