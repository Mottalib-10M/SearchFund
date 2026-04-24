import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function EmploymentLawAcquisitionsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Employment Law in Business Acquisitions: TUPE, WARN & More</h1>
      <div className={bodyClass}>
        <p>Employment law is one of the most critical and complex areas of business acquisitions. Whether employees transfer automatically, what notice requirements apply, and how benefits must be handled varies significantly between <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">asset and stock purchases</Link> and across jurisdictions. Getting employment law wrong can result in costly claims, regulatory penalties, and the loss of key employees.</p>
      </div>

      <h2 className={h2Class}>TUPE (Transfer of Undertakings) &mdash; UK & EU</h2>
      <div className={bodyClass}>
        <p>The Transfer of Undertakings (Protection of Employment) Regulations 2006 (as amended in 2014) implement the EU Acquired Rights Directive (2001/23/EC) in the UK. According to the UK Government&apos;s ACAS guidance, TUPE applies to approximately 2,500 business transfers per year in the UK alone. Post-Brexit, the UK retained TUPE as domestic law, and equivalent protections exist across all EU member states under the Directive. For search fund acquirers, TUPE is the single most important employment law consideration in European asset deals:</p>
        <ul className={ulClass}>
          <li><strong>Automatic transfer:</strong> All employees assigned to the transferred business transfer automatically to the buyer on the same terms and conditions</li>
          <li><strong>Protection:</strong> Dismissals solely because of the transfer are automatically unfair</li>
          <li><strong>Terms preservation:</strong> The buyer must maintain existing employment terms (salary, benefits, seniority) indefinitely</li>
          <li><strong>Pension exception:</strong> Occupational pension rights do not automatically transfer (but the buyer must offer a minimum alternative)</li>
          <li><strong>Information/consultation:</strong> Both buyer and seller must inform and consult employee representatives before the transfer</li>
          <li><strong>Applies to:</strong> Asset deals and service provision changes. Does not apply to pure share purchases (employees stay with the same legal entity).</li>
        </ul>
      </div>

      <h2 className={h2Class}>WARN Act &mdash; United States</h2>
      <div className={bodyClass}>
        <p>The Worker Adjustment and Retraining Notification (WARN) Act of 1988, as enforced by the U.S. Department of Labor, applies to employers with 100 or more employees. While most search fund acquisitions involve smaller companies below this threshold, searchers planning post-acquisition <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build strategies</Link> that aggregate multiple businesses may quickly cross the 100-employee mark.</p>
        <ul className={ulClass}>
          <li><strong>Federal WARN:</strong> Requires 60 days&apos; written notice before mass layoffs (50+ employees) or plant closings</li>
          <li><strong>State mini-WARN:</strong> Many states have stricter requirements (e.g., California requires notice for layoffs of 50+ employees regardless of employer size; New York&apos;s mini-WARN covers employers with 50+ employees)</li>
          <li><strong>Acquisition context:</strong> If the buyer plans to reduce headcount after closing, WARN notice requirements must be factored into the timeline</li>
          <li><strong>Penalties:</strong> Up to 60 days&apos; back pay per affected employee for WARN violations, plus $500 per day civil penalty for failure to notify local government</li>
          <li><strong>Successor liability:</strong> In asset purchases, the buyer may inherit WARN obligations if they hire the seller&apos;s employees</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Employment Issues in Acquisitions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Benefits & Compensation</h3>
        <ul className={ulClass}>
          <li><strong>Health insurance:</strong> In asset deals, new enrollment and potential gap in coverage must be managed</li>
          <li><strong>401(k)/pension:</strong> Rollover or termination of plans requires careful coordination</li>
          <li><strong>Paid time off:</strong> Determine whether accrued PTO is assumed by the buyer or paid out by the seller</li>
          <li><strong>Bonus plans:</strong> Outstanding bonus obligations may need to be prorated and allocated between buyer and seller</li>
        </ul>

        <h3 className={h3Class}>Employment Agreements</h3>
        <ul className={ulClass}>
          <li><strong>Key employees:</strong> Negotiate new employment agreements with key personnel before or at closing</li>
          <li><strong>Non-competes:</strong> Existing employee non-compete agreements may or may not transfer to the buyer</li>
          <li><strong>Change of control:</strong> Some agreements contain change-of-control provisions triggering bonus payments or accelerated vesting</li>
          <li><strong>Retention bonuses:</strong> Consider retention agreements for critical employees to ensure stability post-closing</li>
        </ul>
      </div>

      <h2 className={h2Class}>Stock Purchase vs. Asset Purchase: Employment Impact</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Stock purchase:</strong> Employees remain with the same legal entity. No transfer. Existing contracts, benefits, and seniority continue undisturbed.</li>
          <li><strong>Asset purchase:</strong> Employees do not automatically transfer (except under TUPE/EU law). The buyer selectively hires desired employees. New employment agreements, benefits enrollment, and I-9 verification (US) required.</li>
          <li><strong>Practical tip:</strong> In asset deals, provide offer letters to desired employees before closing to ensure continuity.</li>
        </ul>
      </div>

      <h2 className={h2Class}>European Works Councils & Co-Determination</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Germany:</strong> Works council (Betriebsrat) must be consulted on acquisitions. Companies with 500+ employees require employee representation on the supervisory board.</li>
          <li><strong>France:</strong> CSE (Comit&eacute; Social et &Eacute;conomique) must be informed and consulted before any acquisition. The opinion must be rendered before closing.</li>
          <li><strong>Netherlands:</strong> Works council (Ondernemingsraad) has advisory rights on acquisitions and major restructurings.</li>
          <li><strong>Timeline impact:</strong> Employee consultation can add 4&ndash;8 weeks to the acquisition timeline in Europe.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>TUPE (UK/EU) automatically transfers employees in asset deals on their existing terms &mdash; dismissals related to the transfer are unfair</li>
          <li>The US WARN Act requires 60 days&apos; notice for mass layoffs, with stricter state laws in many jurisdictions</li>
          <li>Stock purchases preserve employment continuity; asset purchases require new hiring/onboarding processes</li>
          <li>European works council consultation can add weeks to the acquisition timeline</li>
          <li>Negotiate retention agreements with key employees before closing to secure continuity</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/hr-employee-due-diligence" className="text-apple-accent hover:underline">HR & Employee Due Diligence</Link></li>
        <li><Link href="/learn/management-transition" className="text-apple-accent hover:underline">Management Transition & Employee Communication</Link></li>
        <li><Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">Employee Retention After Acquisition</Link></li>
        <li><Link href="/learn/non-compete-acquisition" className="text-apple-accent hover:underline">Non-Compete Clauses in Acquisitions</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>Does TUPE apply to share purchases?</h3>
      <div className={bodyClass}>
        <p>No. TUPE applies to &ldquo;relevant transfers&rdquo; &mdash; essentially asset deals and business transfers where a business or part of a business changes hands as a going concern. In a share purchase, the employer (the company) remains the same legal entity; only its shareholders change. Therefore TUPE does not apply and employees continue on their existing terms without any transfer mechanism. However, change-of-control clauses in individual employment contracts may be triggered by a share sale, potentially entitling key employees to severance or accelerated vesting.</p>
      </div>

      <h3 className={h3Class}>Can an employer change employee terms and conditions after a TUPE transfer?</h3>
      <div className={bodyClass}>
        <p>Changes to employment terms that are solely or principally because of the TUPE transfer are void under UK law, even if the employee agrees. Changes unconnected to the transfer, or connected to an economic, technical, or organizational (ETO) reason entailing changes in the workforce, may be lawful. In practice, most <Link href="/learn/compensation-incentive-design" className="text-apple-accent hover:underline">compensation restructuring</Link> should wait at least 12&ndash;24 months post-transfer and should be clearly driven by operational business reasons rather than the transfer itself.</p>
      </div>

      <h3 className={h3Class}>What employment due diligence should search fund acquirers prioritize?</h3>
      <div className={bodyClass}>
        <p>Priority items include: (1) employment contracts and any change-of-control provisions, (2) pending or threatened employment claims or litigation, (3) works council or union agreements, (4) pension and benefit obligations (particularly defined benefit plans), (5) independent contractor classifications that may be misclassified employees, (6) restrictive covenant enforceability for key staff, and (7) immigration status of employees requiring work visas. Our <Link href="/learn/hr-employee-due-diligence" className="text-apple-accent hover:underline">HR due diligence guide</Link> covers this in depth.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>UK Government, <em>TUPE: Transfer of Undertakings Guidance</em> (2024)</li>
        <li>ACAS, <em>Handling TUPE Transfers</em> (2024)</li>
        <li>U.S. Department of Labor, <em>WARN Act Compliance Guide</em> (2024)</li>
        <li>European Commission, <em>Acquired Rights Directive (2001/23/EC)</em></li>
        <li>Baker McKenzie, <em>Global Employment Law Guide for M&amp;A</em> (2024)</li>
      </ul>
    </article>
  );
}
