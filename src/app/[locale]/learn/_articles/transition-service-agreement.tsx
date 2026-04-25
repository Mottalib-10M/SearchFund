import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function TransitionServiceAgreementArticle() {
  return (
    <article>
      <h1 className={h1Class}>Transition Service Agreements (TSAs) in Business Acquisitions</h1>

      <div className={bodyClass}>
        <p>
          When a buyer acquires a business, operational continuity rarely happens automatically. The
          seller&apos;s IT systems, back-office processes, vendor relationships, and institutional
          knowledge don&apos;t simply transfer at closing. A Transition Service Agreement (TSA) bridges
          this gap by contractually obligating the seller to continue providing specified services to
          the buyer for a defined period after the deal closes.
        </p>
        <p>
          TSAs are especially common in carve-out transactions - where a division or product line is
          separated from a larger parent company - but they also arise in full-company acquisitions when
          the buyer lacks the infrastructure to absorb certain functions immediately. A well-structured
          TSA protects the buyer from Day One operational disruptions while giving both parties a clear
          roadmap toward full separation.
        </p>
        <p>
          This guide covers when TSAs are necessary, what provisions they should include, how to negotiate
          them effectively, and the pitfalls that catch first-time acquirers off guard.
        </p>
      </div>

      <h2 className={h2Class}>What Is a Transition Service Agreement?</h2>

      <div className={bodyClass}>
        <p>
          A Transition Service Agreement is a contract between a buyer and seller in which the seller
          (or in some cases, the buyer) agrees to provide certain operational services for a specified
          duration after the transaction closes. The agreement defines the scope, quality, duration,
          and cost of each service, creating accountability and measurability during the transition period.
        </p>
        <p>
          TSAs typically cover functions that the acquired business relied on from the seller&apos;s
          broader corporate infrastructure. Common examples include payroll processing, IT hosting and
          support, human resources administration, accounting and financial reporting, procurement
          systems, and facilities management. Without a TSA in place, the buyer would need to replicate
          or replace all of these functions before closing - an unrealistic expectation in most deals.
        </p>
        <p>
          The TSA is generally negotiated alongside the{" "}
          <Link href="/learn/closing-process" className="text-apple-accent hover:underline">
            purchase agreement and closing documents
          </Link>, though it may be executed as a separate agreement at closing. In practice, the TSA
          is one of the most detail-intensive documents in the entire transaction because it must
          accurately describe operational processes that may have evolved informally over many years.
        </p>
      </div>

      <h2 className={h2Class}>When Is a TSA Needed?</h2>

      <div className={bodyClass}>
        <p>
          Not every acquisition requires a TSA, but certain deal structures and circumstances make them
          essential. Understanding when a TSA adds value helps buyers plan their transition strategy
          during{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>{" "}
          rather than scrambling after closing.
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Carve-out transactions:</strong> When a division is separated from a parent company,
            the division almost certainly shares corporate systems and services. The parent&apos;s ERP,
            email platform, payroll provider, benefits administration, and IT infrastructure must
            continue supporting the carved-out entity until the buyer establishes independent systems.
          </li>
          <li>
            <strong>Platform acquisitions by search funds:</strong> First-time acquirers, including{" "}
            <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
              search fund entrepreneurs
            </Link>, often need the seller to continue managing certain back-office functions while the
            new owner focuses on learning the core business operations.
          </li>
          <li>
            <strong>Complex IT environments:</strong> When the target business runs on proprietary or
            heavily customized technology that cannot be migrated quickly, a TSA ensures system continuity
            while the buyer plans a technology transition.
          </li>
          <li>
            <strong>Regulatory or licensing dependencies:</strong> Certain industries require licenses,
            permits, or certifications that are held by the seller entity. The TSA may cover the seller
            continuing to operate under those licenses until the buyer obtains its own.
          </li>
          <li>
            <strong>Shared facilities:</strong> When the acquired business operates in space owned or
            leased by the seller, a TSA (or a separate short-term lease) provides occupancy continuity.
          </li>
        </ul>

        <p>
          Conversely, TSAs are less common in straightforward asset purchases of small businesses where
          the buyer steps directly into the owner-operator role and assumes all vendor relationships
          independently.
        </p>
      </div>

      <h2 className={h2Class}>Key Provisions of a TSA</h2>

      <div className={bodyClass}>
        <p>
          A strong TSA addresses dozens of operational details. The following provisions form the backbone
          of most agreements and should be carefully tailored to the specific transaction.
        </p>
      </div>

      <h3 className={h3Class}>Services Covered</h3>

      <div className={bodyClass}>
        <p>
          The TSA should include a detailed schedule (often called a Service Schedule or Exhibit A)
          listing every service the seller will provide. Each service entry should specify:
        </p>

        <ul className={ulClass}>
          <li>A clear description of the service and its scope</li>
          <li>The personnel or department responsible for delivery</li>
          <li>Hours of availability (e.g., business hours only vs. 24/7)</li>
          <li>Any tools, systems, or platforms involved</li>
          <li>Dependencies on the buyer&apos;s cooperation or data access</li>
        </ul>

        <p>
          Common service categories include information technology (hosting, help desk, network
          administration), finance and accounting (AP/AR processing, monthly close, tax compliance),
          human resources (payroll, benefits administration, recruiting support), procurement (vendor
          management, purchase order processing), and facilities (building access, maintenance, security).
          Vague descriptions invite disputes - aim for specificity comparable to a third-party vendor
          contract.
        </p>
      </div>

      <h3 className={h3Class}>Duration and Extension Rights</h3>

      <div className={bodyClass}>
        <p>
          TSA terms typically range from three to twenty-four months, depending on the complexity of the
          services and the buyer&apos;s readiness to assume them. Best practices include:
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Staggered end dates:</strong> Different services may have different durations. Payroll
            migration might take three months, while ERP transition could take twelve.
          </li>
          <li>
            <strong>Extension options:</strong> The buyer should negotiate the right to extend individual
            services (typically in 30- or 90-day increments) at a pre-agreed rate, subject to reasonable
            advance notice.
          </li>
          <li>
            <strong>Early termination rights:</strong> The buyer should be able to terminate individual
            services early (with notice) as it completes migration, avoiding unnecessary costs.
          </li>
          <li>
            <strong>Maximum duration caps:</strong> Sellers often insist on a hard stop date - commonly
            eighteen to twenty-four months - after which no extensions are available regardless of the
            buyer&apos;s readiness.
          </li>
        </ul>
      </div>

      <h3 className={h3Class}>Pricing and Payment</h3>

      <div className={bodyClass}>
        <p>
          TSA pricing generally follows one of three models:
        </p>

        <ol className={olClass}>
          <li>
            <strong>Cost-plus:</strong> The seller charges its actual cost of providing the service plus
            a markup (commonly five to fifteen percent). This is the most common approach and aligns with
            the principle that the seller should not profit excessively but also should not subsidize the
            buyer&apos;s transition.
          </li>
          <li>
            <strong>Flat fee:</strong> A fixed monthly fee for each service, regardless of usage volume.
            Simpler to administer but may not reflect actual costs if usage fluctuates.
          </li>
          <li>
            <strong>Usage-based:</strong> Pricing tied to measurable metrics - per-employee for HR
            services, per-transaction for IT, per-square-foot for facilities. More complex to track but
            fairer when service volumes are uncertain.
          </li>
        </ol>

        <p>
          Pricing should also address cost escalation for extensions. Many agreements include a step-up
          (an additional ten to twenty-five percent above the base rate) for service extensions beyond
          the initial term, incentivizing the buyer to complete migration on schedule.
        </p>
      </div>

      <h3 className={h3Class}>Service Level Agreements (SLAs)</h3>

      <div className={bodyClass}>
        <p>
          SLAs define the quality and performance standards the seller must meet. At a minimum, the TSA
          should require the seller to provide services at the same level of quality, timeliness, and
          priority that existed before the transaction. Specific SLA provisions might include:
        </p>

        <ul className={ulClass}>
          <li>Response time requirements for IT helpdesk tickets</li>
          <li>Uptime guarantees for hosted systems</li>
          <li>Processing deadlines for payroll and accounts payable</li>
          <li>Accuracy standards for financial reporting</li>
          <li>Remediation procedures and escalation paths when SLAs are missed</li>
        </ul>

        <p>
          The baseline standard - &quot;same level of service as provided prior to closing&quot; - is
          important because it prevents the seller from deprioritizing the buyer&apos;s needs after the
          deal closes.
        </p>
      </div>

      <h3 className={h3Class}>Exit Triggers and Migration Support</h3>

      <div className={bodyClass}>
        <p>
          The TSA should include provisions that facilitate the buyer&apos;s eventual independence:
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Knowledge transfer obligations:</strong> The seller must provide documentation,
            training, and reasonable access to personnel to help the buyer build internal capabilities.
          </li>
          <li>
            <strong>Data migration support:</strong> The seller must cooperate in extracting and
            transferring data from its systems to the buyer&apos;s new platforms.
          </li>
          <li>
            <strong>Parallel run periods:</strong> For critical systems, the agreement may require a
            period where both the old and new systems operate simultaneously to verify data integrity.
          </li>
          <li>
            <strong>Post-expiration cooperation:</strong> Even after a service ends, the seller should
            remain available for reasonable questions and issue resolution for a limited period.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Negotiation Strategies</h2>

      <div className={bodyClass}>
        <p>
          TSA negotiations often happen late in the deal process when both parties are focused on
          closing. This creates pressure to accept vague terms - a mistake that invariably leads to
          post-closing friction. Here are strategies for both sides:
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Start early in due diligence:</strong> Identify TSA-dependent services during your{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence review
            </Link>{" "}
            and begin drafting the service schedule before the purchase agreement is finalized.
          </li>
          <li>
            <strong>Map every dependency:</strong> Walk through daily, weekly, monthly, and annual
            operational processes to identify every point where the target business depends on the
            seller&apos;s infrastructure or personnel.
          </li>
          <li>
            <strong>Price realistically:</strong> Buyers should accept that TSA services have a cost. Low-balling
            the pricing creates resentment and reduces the seller&apos;s motivation to provide quality service.
          </li>
          <li>
            <strong>Include governance mechanisms:</strong> Establish a joint transition committee with
            regular meetings, escalation paths, and defined decision-making authority.
          </li>
          <li>
            <strong>Build in flexibility:</strong> Neither party can predict every transition challenge.
            Include change-order procedures for adding, modifying, or removing services as circumstances evolve.
          </li>
          <li>
            <strong>Align incentives:</strong> Step-up pricing for extensions and early-termination rights
            give the buyer financial motivation to migrate quickly while protecting the seller from
            indefinite obligations.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Common Pitfalls</h2>

      <div className={bodyClass}>
        <p>
          Even experienced acquirers encounter TSA-related problems. The most frequent pitfalls include:
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Underestimating transition timelines:</strong> Buyers routinely assume they can
            migrate off TSA services faster than reality allows. IT system migrations, in particular,
            almost always take longer than planned. Build in at least fifty percent buffer beyond your
            initial estimates.
          </li>
          <li>
            <strong>Insufficient service descriptions:</strong> Vague language like &quot;IT support&quot;
            or &quot;accounting services&quot; invites different interpretations. Every service should be
            described with enough specificity that a neutral third party could determine whether the
            obligation has been met.
          </li>
          <li>
            <strong>Ignoring seller motivation:</strong> After closing, the seller has limited incentive
            to prioritize the buyer&apos;s needs. SLAs with teeth (financial penalties for missed
            deadlines) and positive incentive structures (bonuses for successful migration support) help
            maintain alignment.
          </li>
          <li>
            <strong>Failing to plan for Day One:</strong> Some functions - payroll, customer-facing
            systems, regulatory reporting - cannot tolerate any gap. Identify these &quot;Day One
            critical&quot; services early and ensure the TSA provides seamless continuity.
          </li>
          <li>
            <strong>No dispute resolution mechanism:</strong> Without a defined escalation and dispute
            process, disagreements about service quality or scope can fester and damage the post-closing
            relationship. Include mediation or arbitration provisions.
          </li>
          <li>
            <strong>Data access and privacy gaps:</strong> The TSA must address how the seller handles
            the buyer&apos;s data during the transition, including confidentiality obligations, data
            security standards, and return/destruction of data upon service termination.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>TSA vs. Reverse TSA</h2>

      <div className={bodyClass}>
        <p>
          While a standard TSA involves the seller providing services to the buyer, a <strong>reverse
          TSA</strong> works in the opposite direction: the buyer provides services to the seller.
          Reverse TSAs arise in specific circumstances:
        </p>

        <ul className={ulClass}>
          <li>
            <strong>When the buyer acquires key infrastructure:</strong> If the acquired business owned
            shared systems or facilities that the seller&apos;s remaining operations depend on, the buyer
            may need to continue providing those services to the seller temporarily.
          </li>
          <li>
            <strong>In partial acquisitions:</strong> When the buyer acquires a controlling interest but
            the seller retains a minority stake and continues operating related businesses that share
            infrastructure with the acquired entity.
          </li>
          <li>
            <strong>When the acquired entity served as shared services center:</strong> The target
            business may have provided centralized services (IT, accounting, HR) to the seller&apos;s
            other divisions. Those services don&apos;t disappear at closing.
          </li>
        </ul>

        <p>
          Reverse TSAs require additional care because the buyer is now in the unfamiliar position of
          being a service provider. The buyer must staff appropriately, maintain service quality for
          an entity it doesn&apos;t control, and manage the complexity of supporting an outside
          organization while simultaneously integrating the acquired business.
        </p>
        <p>
          In deals involving both a TSA and a reverse TSA, the agreements are often cross-referenced,
          with netting provisions that offset fees owed by each party.
        </p>
      </div>

      <h2 className={h2Class}>Building Your TSA Exit Plan</h2>

      <div className={bodyClass}>
        <p>
          The best TSA is one that ends on time - or early. A disciplined exit plan, developed before
          closing and refined during{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            post-acquisition integration
          </Link>, is essential for achieving clean separation.
        </p>

        <ol className={olClass}>
          <li>
            <strong>Prioritize by risk and complexity:</strong> Rank TSA services by operational risk
            (what happens if this service fails?) and migration complexity (how long will replacement
            take?). Address high-risk, high-complexity services first.
          </li>
          <li>
            <strong>Assign internal ownership:</strong> Each TSA service should have a designated
            internal owner responsible for planning, executing, and verifying the migration.
          </li>
          <li>
            <strong>Select replacement solutions early:</strong> Don&apos;t wait until month six of a
            twelve-month TSA to evaluate replacement vendors. Begin vendor selection during due diligence
            or immediately after closing.
          </li>
          <li>
            <strong>Run parallel systems:</strong> For critical functions, operate both the TSA service
            and the replacement system simultaneously for at least thirty days before cutting over.
          </li>
          <li>
            <strong>Document everything:</strong> Capture process documentation, configuration settings,
            data formats, and tribal knowledge from the seller&apos;s team throughout the TSA period.
          </li>
          <li>
            <strong>Conduct formal cutover reviews:</strong> Before terminating each service, conduct a
            readiness review confirming that the replacement system is fully operational and tested.
          </li>
        </ol>
      </div>

      <h2 className={h2Class}>TSA Governance and Management</h2>

      <div className={bodyClass}>
        <p>
          Active management of the TSA relationship is critical to a successful transition. Key governance
          elements include:
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Joint steering committee:</strong> Senior representatives from both parties meeting
            regularly (weekly or biweekly) to review service delivery, address issues, and track
            migration progress.
          </li>
          <li>
            <strong>Service delivery reports:</strong> The seller should provide regular reports
            documenting service performance against SLAs, any incidents, and resolution status.
          </li>
          <li>
            <strong>Change management process:</strong> A formal procedure for requesting changes to
            service scope, adding new services, or modifying SLAs, including cost implications and
            approval requirements.
          </li>
          <li>
            <strong>Escalation procedures:</strong> Clear escalation paths - from operational contacts
            to service managers to executive sponsors - ensuring issues are resolved promptly.
          </li>
          <li>
            <strong>Financial tracking:</strong> Regular reconciliation of TSA invoices against agreed
            pricing, with dispute resolution for billing disagreements.
          </li>
        </ul>

        <p>
          Effective governance keeps the TSA on track and preserves the post-closing relationship between
          buyer and seller - a relationship that often matters beyond the TSA itself, particularly when
          the{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            deal includes earnout provisions or seller financing
          </Link>{" "}
          that create ongoing interdependency.
        </p>
      </div>

      <h2 className={h2Class}>Related Resources</h2>

      <ul className={ulClass}>
        <li>
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            Post-Acquisition Integration Playbook
          </Link>{" "} - Building your 100-day plan for operational independence
        </li>
        <li>
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            Due Diligence Checklist for Business Acquisitions
          </Link>{" "} - Identifying TSA-dependent services during investigation
        </li>
        <li>
          <Link href="/learn/closing-process" className="text-apple-accent hover:underline">
            The Closing Process: Timeline, Documents & Wire Transfers
          </Link>{" "} - How the TSA fits into the broader closing framework
        </li>
        <li>
          <Link href="/learn/management-transition" className="text-apple-accent hover:underline">
            Management Transition Planning After Acquisition
          </Link>{" "} - Coordinating leadership transition alongside TSA execution
        </li>
        <li>
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            Letter of Intent: How to Draft & Negotiate
          </Link>{" "} - Addressing TSA expectations early in the deal process
        </li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>How long does a typical Transition Service Agreement last?</h3>

      <div className={bodyClass}>
        <p>TSA terms typically range from 3 to 24 months, depending on the complexity of services and the buyer&rsquo;s readiness to assume them. According to Deloitte&rsquo;s research on carve-out transactions, the median TSA duration is 12 months, with IT-related services often requiring the longest transition periods (12-18 months) due to the complexity of system migration. Payroll and HR functions typically transition in 3-6 months, while accounting and financial reporting may need 6-12 months. Best practice is to use staggered end dates for different services rather than a single expiration, with extension options available in 30- or 90-day increments at pre-agreed rates. Most sellers insist on a hard stop date of 18-24 months after which no extensions are available, creating urgency for the buyer to complete migration on schedule.</p>
      </div>

      <h3 className={h3Class}>How much does a TSA typically cost?</h3>

      <div className={bodyClass}>
        <p>TSA pricing most commonly follows a cost-plus model, where the seller charges actual cost of service delivery plus a 5-15% markup. PwC&rsquo;s research on TSA management reports that the total cost of a TSA typically represents 2-5% of the annual revenue of the acquired business. Pricing should address cost escalation for extensions, many agreements include a 10-25% step-up above the base rate for service extensions beyond the initial term, incentivizing the buyer to complete migration on schedule. Alternative pricing models include flat monthly fees (simpler to administer but may not reflect actual costs) and usage-based pricing tied to measurable metrics such as per-employee for HR services or per-transaction for IT. The buyer should also budget for the cost of building replacement systems in parallel with TSA services, which Ernst &amp; Young estimates at 1.5-3x the annual TSA cost for full separation.</p>
      </div>

      <h3 className={h3Class}>What is the most common mistake buyers make with TSAs?</h3>

      <div className={bodyClass}>
        <p>The most frequent and costly mistake is underestimating transition timelines. McKinsey &amp; Company&rsquo;s research on separation management shows that buyers routinely assume they can migrate off TSA services 30-50% faster than reality allows, particularly for IT system migrations. This optimism leads to costly extensions at step-up rates and, in worst cases, service disruptions when TSAs expire before replacement systems are fully operational. The second most common mistake is insufficient service descriptions, vague language like &ldquo;IT support&rdquo; or &ldquo;accounting services&rdquo; invites different interpretations and post-closing disputes. Every service should be described with enough specificity that a neutral third party could determine whether the obligation has been met. Building at least 50% buffer beyond initial timeline estimates and investing in detailed service schedules during negotiation prevents both problems.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>

      <ul className={ulClass}>
        <li>Deloitte, <em>Transition Service Agreements: A Framework for Carve-Out Success</em> (2023)</li>
        <li>McKinsey & Company, <em>Getting Carve-Outs Right: Best Practices in Separation Management</em> (2022)</li>
        <li>American Bar Association, <em>Model Asset Purchase Agreement with Commentary</em> (3rd ed., 2020)</li>
        <li>PwC, <em>Deals: Managing Transition Service Agreements</em> (2023)</li>
        <li>Ernst & Young, <em>Carve-Out Transactions: Strategies for Achieving Clean Separation</em> (2022)</li>
        <li>Harvard Business Review, <em>The Art of the Carve-Out</em> (2021)</li>
      </ul>
    </article>
  );
}
