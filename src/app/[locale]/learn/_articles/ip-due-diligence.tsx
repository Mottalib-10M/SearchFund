import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function IPDueDiligenceArticle() {
  return (
    <article>
      <h1 className={h1Class}>Intellectual Property Due Diligence & Transfer</h1>
      <div className={bodyClass}>
        <p>Intellectual property (IP) can represent a significant portion of a business&apos;s value, particularly in technology, professional services, and branded consumer businesses. According to WIPO (the World Intellectual Property Organization), intangible assets including IP now account for over 90% of the market value of S&amp;P 500 companies, a proportion that has grown steadily over the past two decades. Thorough IP <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link> protects the buyer from acquiring disputed, improperly protected, or non-transferable IP assets.</p>
      </div>

      <h2 className={h2Class}>Types of IP in Business Acquisitions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Trademarks:</strong> Brand names, logos, taglines, and trade dress. Verify registration status, renewal dates, and any oppositions or cancellation proceedings.</li>
          <li><strong>Patents:</strong> Utility patents, design patents, and provisional applications. Check validity, remaining term, and any litigation or licensing commitments.</li>
          <li><strong>Copyrights:</strong> Software code, marketing materials, training content, and creative works. Verify ownership (especially for work created by contractors).</li>
          <li><strong>Trade secrets:</strong> Proprietary processes, customer data, pricing algorithms, and know-how. Assess protective measures (NDAs, access controls).</li>
          <li><strong>Domain names:</strong> Web domains, social media handles, and digital properties. Verify ownership and transfer process.</li>
          <li><strong>Software licenses:</strong> Third-party software licenses that may have transfer restrictions or change-of-control provisions.</li>
        </ul>
      </div>

      <h2 className={h2Class}>IP Due Diligence Checklist</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Ownership verification:</strong> Confirm the seller (not employees, contractors, or third parties) actually owns all claimed IP</li>
          <li><strong>Registration status:</strong> Check trademark/patent registrations, renewal dates, and any pending applications</li>
          <li><strong>Assignment agreements:</strong> Verify that all employee and contractor IP assignments are properly documented</li>
          <li><strong>License review:</strong> Identify all inbound and outbound licenses, their terms, and any change-of-control provisions</li>
          <li><strong>Litigation search:</strong> Check for any pending or threatened IP disputes, infringement claims, or challenges</li>
          <li><strong>Open source audit:</strong> For software companies, audit open-source components and their license obligations</li>
          <li><strong>Trade secret protection:</strong> Review NDAs, access controls, and employee confidentiality agreements</li>
          <li><strong>Third-party IP:</strong> Identify any IP that the business uses but does not own (licensed technology, white-label products)</li>
        </ol>
      </div>

      <h2 className={h2Class}>IP Transfer in Asset vs. Stock Deals</h2>
      <div className={bodyClass}>
        <p>The deal structure, whether a{" "}
          <Link href="/learn/purchase-agreement-apa-vs-spa" className="text-apple-accent hover:underline">stock purchase or asset purchase</Link>{" "}
          fundamentally changes how IP transfers and what risks you inherit:
        </p>
        <ul className={ulClass}>
          <li><strong>Stock purchase:</strong> IP stays with the company entity. No transfer needed. But verify there are no change-of-control triggers in licenses.</li>
          <li><strong>Asset purchase:</strong> IP must be explicitly assigned to the buyer. Requires written assignment agreements for each IP asset.</li>
          <li><strong>Trademark assignment:</strong> Must be recorded with the relevant trademark office (USPTO, EUIPO, etc.).</li>
          <li><strong>Patent assignment:</strong> Must be recorded with the patent office. Check for any prior security interests.</li>
          <li><strong>Domain transfer:</strong> Process varies by registrar; allow adequate time for transfer completion.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Common IP Red Flags</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Missing assignments:</strong> Contractor-created IP without proper assignment agreements (the contractor may own it)</li>
          <li><strong>Lapsed registrations:</strong> Expired trademark or patent registrations that reduce protection</li>
          <li><strong>Open-source contamination:</strong> Copyleft open-source licenses (GPL) that could require disclosure of proprietary code. The Open Source Initiative tracks over 100 approved licenses, but GPL and AGPL carry the most significant risk in M&amp;A contexts</li>
          <li><strong>Shared IP:</strong> IP developed jointly with another party, creating co-ownership complications</li>
          <li><strong>Key person dependency:</strong> Trade secrets that exist only in one person&apos;s head, with no documentation</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Verify that the seller actually owns all claimed IP, missing contractor assignments are the most common issue</li>
          <li>In asset deals, every IP asset must be explicitly assigned in writing and recorded with relevant authorities</li>
          <li>Review all third-party licenses for change-of-control provisions that could be triggered by the acquisition</li>
          <li>For software businesses, conduct an open-source audit to identify copyleft license risks</li>
          <li>Include thorough IP{" "}
            <Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">
              representations and warranties
            </Link>{" "}
            in the purchase agreement</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">Due Diligence Checklist</Link></li>
        <li><Link href="/learn/post-acquisition-technology-audit" className="text-apple-accent hover:underline">Technology Audit Post-Acquisition</Link></li>
        <li><Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">Representations & Warranties in M&A</Link></li>
        <li><Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">Acquiring a SaaS Business</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>
        What is the most common IP issue found during acquisition due diligence?
      </h3>
      <div className={bodyClass}>
        <p>
          Missing contractor IP assignments are the single most common issue.
          When a business hires freelancers or agencies to create software,
          designs, or marketing content without proper IP assignment
          agreements, the contractor may legally own that work. Fixing this
          post-acquisition can be expensive or impossible if the contractor
          is uncooperative. Always verify that written assignment agreements
          exist for every piece of contractor-created IP.
        </p>
      </div>

      <h3 className={h3Class}>
        How does IP transfer differently in an asset deal vs. a stock deal?
      </h3>
      <div className={bodyClass}>
        <p>
          In a stock deal, the company entity remains the same, so IP
          ownership does not change hands, but you must check for
          change-of-control triggers in third-party licenses. In an asset
          deal, every IP asset must be explicitly assigned to the buyer in
          writing, and assignments must be recorded with relevant
          authorities (USPTO for patents and trademarks, EUIPO for EU
          trademarks, etc.). Domain names require separate transfer
          processes through each registrar. Allow 2-4 weeks for
          patent and trademark assignment recordings.
        </p>
      </div>

      <h3 className={h3Class}>
        Should I hire a specialist for IP due diligence?
      </h3>
      <div className={bodyClass}>
        <p>
          For any business where IP is a material driver of value (software,
          branded products, proprietary processes), engaging an IP attorney
          is strongly recommended. Typical costs are $5K-$20K for a
          focused IP audit. For software businesses, add $3K-$10K for
          an open-source license audit using tools like Black Duck or FOSSA.
          These costs are small relative to the risk of acquiring impaired
          or contaminated IP assets.
        </p>
      </div>
    </article>
  );
}
