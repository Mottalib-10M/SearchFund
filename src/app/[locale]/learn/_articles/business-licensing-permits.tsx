import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function BusinessLicensingPermitsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Business Licensing & Permits: What Transfers in an Acquisition?</h1>
      <div className={bodyClass}>
        <p>Licenses and permits are often critical to a business&apos;s ability to operate legally. In many industries, the license IS the business, without it, operations must cease. According to the American Bar Association&apos;s 2024 M&amp;A practice guide, license transfer issues are among the top five causes of post-closing operational disruption in small business acquisitions. Understanding which licenses transfer automatically, which require re-application, and which are non-transferable is essential for avoiding operational disruption during and after your acquisition.</p>
      </div>

      <h2 className={h2Class}>Stock Purchase vs. Asset Purchase Impact</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Stock purchase:</strong> The legal entity holds the licenses. Since the entity doesn&apos;t change, most licenses continue undisturbed. However, some licenses have change-of-control provisions that trigger notification or reapplication.</li>
          <li><strong>Asset purchase:</strong> Licenses generally do NOT transfer with assets. The buyer must apply for new licenses in most cases. This can take weeks to months depending on the industry and jurisdiction.</li>
          <li><strong>Critical implication:</strong> In heavily regulated industries, the need to preserve licenses often drives the choice to structure as a stock purchase.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Common License Types by Industry</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Healthcare</h3>
        <ul className={ulClass}>
          <li>State healthcare facility licenses (typically non-transferable; require new application)</li>
          <li>Medicare/Medicaid provider numbers (may require change of ownership application)</li>
          <li>Professional licenses (physician, nursing, pharmacy, personal to the individual, not the business)</li>
          <li>CLIA certificates for labs</li>
        </ul>

        <h3 className={h3Class}>Financial Services</h3>
        <ul className={ulClass}>
          <li>Insurance licenses (state-specific, often require change-of-control approval)</li>
          <li>Broker-dealer registrations</li>
          <li>Money transmitter licenses</li>
        </ul>

        <h3 className={h3Class}>Construction & Trades</h3>
        <ul className={ulClass}>
          <li>General contractor licenses (often tied to a qualifying individual, not the entity)</li>
          <li>Electrical, plumbing, HVAC licenses (personal to the licensed tradesperson)</li>
          <li>Building permits (typically non-transferable)</li>
        </ul>

        <h3 className={h3Class}>Food & Beverage</h3>
        <ul className={ulClass}>
          <li>Liquor licenses (often the most difficult and time-consuming to transfer; may require new application)</li>
          <li>Health department permits</li>
          <li>Food establishment licenses</li>
        </ul>

        <h3 className={h3Class}>General Business</h3>
        <ul className={ulClass}>
          <li>Business operating licenses (city/county level)</li>
          <li>Zoning permits</li>
          <li>Environmental permits (EPA, state environmental agencies)</li>
          <li>DOT/transportation authority</li>
          <li>FCC licenses (communications)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Steps</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li>Inventory ALL licenses and permits held by the target business</li>
          <li>Determine transferability of each license (automatic, requires approval, or non-transferable)</li>
          <li>Identify renewal dates and any pending applications or compliance issues</li>
          <li>Check for change-of-control notification requirements</li>
          <li>Estimate time and cost for new license applications if required</li>
          <li>Verify that all licensed individuals (if personal licenses) will remain post-acquisition</li>
          <li>Plan for temporary operating arrangements during license transfer periods</li>
        </ol>
      </div>

      <h2 className={h2Class}>Timing and Transition Planning</h2>
      <div className={bodyClass}>
        <p>
          License transfer timelines vary significantly by jurisdiction and industry. Liquor licenses can take 3-6 months to transfer in some states, while Medicare provider number changes may require 60-90 days. The SBA&apos;s 2024 guidelines recommend that acquirers begin the license transfer process as early as the LOI stage, and that purchase agreements include specific conditions around license continuity. In some cases, interim operating arrangements: such as a{" "}
          <Link href="/learn/management-transition" className="text-apple-accent hover:underline">management transition</Link> agreement where the seller continues to operate under their licenses during the transfer period, can prevent any gap in operations.
        </p>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>In stock purchases, most licenses continue with the entity, but check for change-of-control triggers</li>
          <li>In asset purchases, most licenses must be re-applied for, which can take weeks to months</li>
          <li>In regulated industries, license transferability often drives the choice of deal structure</li>
          <li>Personal licenses (contractors, healthcare professionals) don&apos;t transfer, ensure key licensed individuals will stay</li>
          <li>Liquor licenses and healthcare facility licenses are among the most complex to transfer</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">Due Diligence Checklist</Link></li>
        <li><Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">Asset Purchase vs. Stock Purchase</Link></li>
        <li><Link href="/learn/closing-process" className="text-apple-accent hover:underline">The Closing Process</Link></li>
        <li><Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">Acquiring a Healthcare Business</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Do business licenses transfer in a stock purchase?</h3>
        <p>
          In most cases, yes. Because the legal entity remains the same
          in a stock purchase, licenses held by the entity generally
          continue undisturbed. However, some licenses contain
          change-of-control provisions that require notification or
          reapplication when ownership changes hands.
        </p>

        <h3 className={h3Class}>Which licenses are the hardest to transfer?</h3>
        <p>
          Liquor licenses and healthcare facility licenses are among the
          most complex and time-consuming to transfer. Liquor licenses
          may require entirely new applications in some states, with
          processing times of 3-6 months. Medicare and Medicaid
          provider numbers require a formal change-of-ownership
          application that can take 60-90 days.
        </p>

        <h3 className={h3Class}>How does deal structure affect license transferability?</h3>
        <p>
          In asset purchases, most licenses do NOT transfer with the
          assets, the buyer must apply for new licenses, which
          can delay or disrupt operations. In heavily regulated
          industries such as healthcare, insurance, and food service,
          this license continuity requirement often drives the choice
          to structure the deal as a stock purchase.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>SBA, <em>Licenses and Permits Guide for Business Acquisitions</em> (2024)</li>
        <li>ABA, <em>License Transfer Issues in M&amp;A Transactions</em> (2024)</li>
        <li>NAIC, <em>Insurance Company Change of Control Regulations</em> (2024)</li>
      </ul>
    </article>
  );
}
