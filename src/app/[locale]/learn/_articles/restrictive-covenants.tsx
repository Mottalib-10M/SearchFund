import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function RestrictiveCovenantsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Restrictive Covenants in M&amp;A: Non-Competes, Non-Solicits &amp; More</h1>
      <div className={bodyClass}>
        <p>Restrictive covenants are among the most negotiated and most litigated provisions in M&amp;A transactions. When you acquire a business, you are buying not just its assets and cash flows but its competitive position &mdash; its customers, employees, trade secrets, and market relationships. Without properly drafted restrictive covenants, the seller could walk away with the purchase price and immediately set up a competing business across the street, taking key employees and customers along. For search fund acquirers, who often pay a premium for the goodwill embedded in a small business, restrictive covenants are the legal backstop that protects the value of the acquisition.</p>
        <p>This guide covers the major types of restrictive covenants used in business acquisitions, their enforceability across jurisdictions, the impact of recent regulatory changes, and best practices for drafting covenants that will hold up in court.</p>
      </div>

      <h2 className={h2Class}>Non-Compete Agreements</h2>
      <div className={bodyClass}>
        <p>Non-compete agreements restrict the seller (and sometimes key employees) from engaging in a competing business for a specified period within a defined geographic area after the closing of the transaction. In the context of a business sale, non-competes are generally viewed more favorably by courts than employment-based non-competes because the seller has received substantial consideration (the purchase price) in exchange for the restriction, and the buyer has a legitimate interest in protecting the goodwill it purchased.</p>

        <h3 className={h3Class}>Duration considerations</h3>
        <p>The appropriate duration of a non-compete depends on the industry, the nature of the business, and the jurisdiction. For most small business acquisitions, non-compete periods of 3 to 5 years are standard and generally enforceable. Some transactions, particularly in professional services or industries with long customer relationships, may warrant non-competes of up to 7 years. Courts are more likely to enforce longer non-competes in the sale-of-business context than in the employment context, but excessively long periods (10+ years) may be struck down or reformed even in a sale context.</p>
        <p>When negotiating the duration, consider the target&apos;s customer contract lengths, the typical customer acquisition cycle, and how long it would take a competitor to replicate the business&apos;s market position. The non-compete should last long enough to allow the buyer to solidify relationships with customers and employees &mdash; a critical element of the <Link href="/learn/management-transition" className="text-apple-accent hover:underline">management transition plan</Link>.</p>

        <h3 className={h3Class}>Geographic scope</h3>
        <p>The geographic scope of a non-compete should correspond to the market area in which the target business actually operates. For a local home services business, a 50-mile radius may be appropriate. For a regional professional services firm, the restriction might cover several states. For a business with national or international clients, broader geographic restrictions may be necessary, though courts will scrutinize whether the full scope is reasonable given the actual competitive environment.</p>
        <p>In the digital age, geographic restrictions have become more complex. A SaaS business or e-commerce company may have customers nationwide or globally, making traditional geographic boundaries less meaningful. In these cases, the non-compete may be drafted without geographic limitation but with a narrower activity restriction (e.g., the seller cannot operate or invest in a business that provides competing software in the same vertical).</p>

        <h3 className={h3Class}>Activity restrictions</h3>
        <p>The non-compete should clearly define what constitutes &ldquo;competing&rdquo; activity. Overly broad definitions (&ldquo;the seller shall not engage in any business activity&rdquo;) are likely to be challenged and may be struck down. Specific, tailored definitions (&ldquo;the seller shall not directly or indirectly own, operate, manage, or provide services to any business that offers residential plumbing and HVAC services&rdquo;) are more enforceable because they protect the buyer&apos;s legitimate interest without unreasonably restricting the seller&apos;s ability to earn a livelihood.</p>
      </div>

      <h2 className={h2Class}>Non-Solicitation Clauses</h2>
      <div className={bodyClass}>
        <p>Non-solicitation clauses prevent the seller from actively soliciting the target&apos;s customers, employees, suppliers, or other business relationships after the sale. Non-solicits are often easier to enforce than non-competes because they impose a narrower restriction &mdash; the seller can still work in the same industry, they just cannot target the specific relationships that belong to the acquired business.</p>

        <h3 className={h3Class}>Customer non-solicitation</h3>
        <p>Customer non-solicitation provisions prevent the seller from contacting or soliciting business from the target&apos;s customers for a specified period. The scope may be limited to customers with whom the seller had a personal relationship, customers who were active during the 12&ndash;24 months prior to closing, or all customers listed on a schedule to the purchase agreement. Including a specific customer list as an exhibit to the agreement eliminates ambiguity about which customers are covered.</p>

        <h3 className={h3Class}>Employee non-solicitation</h3>
        <p>Employee non-solicitation provisions prevent the seller from recruiting, hiring, or soliciting the target&apos;s employees. This is critical in search fund acquisitions where the workforce is a primary asset. The typical employee non-solicit period is 2 to 3 years, which aligns with the period during which the buyer is most vulnerable to talent loss. Some provisions also include a &ldquo;no-hire&rdquo; component that prevents the seller from hiring the target&apos;s employees even if the employee approaches the seller without solicitation.</p>
        <p>Employee non-solicits should be drafted broadly enough to cover not just direct hiring but also indirect solicitation through third parties (recruiters, friends, former colleagues). Courts generally enforce employee non-solicits more readily than non-competes because they are viewed as a less restrictive alternative.</p>
      </div>

      <h2 className={h2Class}>Confidentiality Provisions</h2>
      <div className={bodyClass}>
        <p>Confidentiality provisions in the purchase agreement protect the buyer&apos;s investment by restricting the seller from using or disclosing the target&apos;s proprietary information after closing. While standalone non-disclosure agreements (NDAs) are typically signed during the <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">letter of intent</Link> stage, the confidentiality provisions in the definitive agreement are broader and more enduring.</p>
        <p>Post-closing confidentiality obligations typically cover trade secrets, customer lists, pricing information, financial data, employee information, business processes, and strategic plans. Unlike non-compete and non-solicitation provisions, confidentiality obligations can often be made perpetual or indefinite, particularly with respect to trade secrets. Courts recognize that the value of confidential information does not diminish over a fixed time period, and indefinite confidentiality restrictions are generally enforceable as long as the information remains confidential.</p>

        <h3 className={h3Class}>Defining confidential information</h3>
        <p>The definition of &ldquo;confidential information&rdquo; should be thorough but not so broad as to be unenforceable. Best practice is to include both a general definition (any non-public information relating to the business) and a non-exhaustive list of specific categories (customer data, financial records, pricing, formulas, processes, supplier terms, employee compensation). Carve-outs should be included for information that becomes publicly available through no fault of the seller, information independently developed by the seller, and information required to be disclosed by law or court order.</p>
      </div>

      <h2 className={h2Class}>Garden Leave Provisions</h2>
      <div className={bodyClass}>
        <p>Garden leave is a concept borrowed from UK employment law that is increasingly used in US M&amp;A transactions, particularly where the seller is expected to remain involved during a transition period. Under a garden leave provision, the seller remains &ldquo;employed&rdquo; (or engaged as a consultant) and continues to receive compensation, but is not required to (and may not) perform active work. The seller is literally &ldquo;in the garden&rdquo; &mdash; paid to stay home and not compete.</p>
        <p>Garden leave serves as a practical alternative to a traditional non-compete. Because the seller continues to receive compensation during the garden leave period, courts are more willing to enforce the associated restrictions. It also provides a natural cooling-off period that allows the buyer to transition customer and employee relationships without the seller&apos;s active involvement or interference.</p>
        <p>In search fund acquisitions, garden leave is often used for the first 6 to 12 months post-closing, during which the seller receives a consulting fee in exchange for remaining available for questions and knowledge transfer while being prohibited from engaging with competitors, customers, or employees. This aligns with the <Link href="/learn/management-transition" className="text-apple-accent hover:underline">management transition planning</Link> that is critical to search fund success.</p>
      </div>

      <h2 className={h2Class}>Enforceability by Jurisdiction</h2>
      <div className={bodyClass}>
        <p>The enforceability of restrictive covenants varies dramatically by state and country, and understanding the applicable legal framework is essential for drafting provisions that will actually protect the buyer.</p>

        <h3 className={h3Class}>Highly enforceable jurisdictions</h3>
        <p>States like Florida, Texas, Georgia, and Ohio have statutes and case law that are generally favorable to the enforcement of restrictive covenants, particularly in the sale-of-business context. These states typically apply a &ldquo;reasonableness&rdquo; standard and may reform (rather than void) overly broad covenants &mdash; meaning a court will narrow the restriction to what it deems reasonable rather than throwing it out entirely.</p>

        <h3 className={h3Class}>Restrictive jurisdictions</h3>
        <p>California is the most well-known jurisdiction that broadly prohibits non-compete agreements. Under California Business and Professions Code Section 16600, non-competes are generally void and unenforceable, with a narrow exception for non-competes given in connection with the sale of a business or all of its goodwill. This sale-of-business exception is critical for acquirers &mdash; it means non-competes are enforceable in California M&amp;A transactions, but only if properly structured under the statutory requirements. Other states with significant restrictions include Colorado, Minnesota, and Oregon, each with their own nuances.</p>

        <h3 className={h3Class}>The FTC non-compete ban and its implications</h3>
        <p>The Federal Trade Commission proposed a broad ban on non-compete agreements in 2023, which has undergone significant legal challenges. While the rule as proposed would have exempted non-competes entered into in connection with the bona fide sale of a business, the regulatory uncertainty has prompted many M&amp;A practitioners to strengthen non-solicitation and confidentiality provisions as alternative protections. Regardless of the final outcome of the FTC rulemaking, the trend toward restricting employee non-competes is clear. Buyers should ensure their acquisition agreements include strong non-solicitation and confidentiality provisions that provide meaningful protection independent of the non-compete.</p>

        <h3 className={h3Class}>Cross-border considerations</h3>
        <p>For <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">cross-border deals</Link>, restrictive covenant enforceability is even more complex. European Union member states generally impose stricter limitations on non-competes than US jurisdictions. In France, non-competes require financial compensation to be enforceable. In Germany, non-competes exceeding 2 years are typically void. The UK enforces reasonable non-competes but applies strict scrutiny to duration and scope. Understanding local law is essential when drafting restrictive covenants for international acquisitions.</p>
      </div>

      <h2 className={h2Class}>Drafting Best Practices</h2>
      <div className={bodyClass}>
        <p>Effective restrictive covenants require careful drafting that balances the buyer&apos;s protective interests with enforceability considerations. A covenant that is drafted too broadly may be struck down entirely in jurisdictions that do not allow judicial reformation, leaving the buyer with no protection at all.</p>
        <ol className={olClass}>
          <li><strong>Tailor to the specific business:</strong> Avoid generic, boilerplate restrictive covenants. Define the restricted activities, geographic scope, and protected relationships based on the actual competitive dynamics of the target business.</li>
          <li><strong>Include severability and reformation clauses:</strong> A severability clause allows a court to enforce the remaining provisions if one is found to be unenforceable. A reformation clause expressly authorizes the court to modify an overly broad covenant to a reasonable scope, rather than voiding it entirely.</li>
          <li><strong>Specify the governing law:</strong> Choose a jurisdiction whose law is favorable to restrictive covenant enforcement and that has a reasonable connection to the transaction. The choice-of-law provision should be coordinated with the overall dispute resolution framework of the <Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">purchase agreement</Link>.</li>
          <li><strong>Include equitable relief provisions:</strong> Specify that the buyer is entitled to injunctive relief (a court order requiring the seller to stop the prohibited conduct) in addition to monetary damages. Include an acknowledgment that a breach of restrictive covenants would cause irreparable harm for which monetary damages would be inadequate.</li>
          <li><strong>Address indirect competition:</strong> Restrict the seller&apos;s direct and indirect involvement in competing businesses through family members, trusts, holding companies, or advisory roles. Define &ldquo;affiliate&rdquo; broadly to prevent circumvention.</li>
          <li><strong>Consider step-down provisions:</strong> For longer non-compete periods, consider a step-down structure where the geographic scope or activity restriction narrows over time. This can improve enforceability while still providing meaningful near-term protection.</li>
          <li><strong>Document the consideration:</strong> Explicitly tie the restrictive covenant to the purchase consideration. In some jurisdictions, allocating a specific portion of the purchase price to the non-compete improves enforceability and has tax implications for both parties.</li>
        </ol>
      </div>

      <h2 className={h2Class}>Remedies for Breach</h2>
      <div className={bodyClass}>
        <p>When a seller breaches a restrictive covenant, the buyer&apos;s primary remedy is injunctive relief &mdash; a court order requiring the seller to comply with the covenant. Injunctions are the preferred remedy because monetary damages are difficult to calculate and often inadequate (how do you quantify the damage from losing three key customers to the seller&apos;s new business?). The purchase agreement should include provisions that facilitate obtaining injunctive relief, including an acknowledgment of irreparable harm and a waiver of any requirement to post a bond.</p>
        <p>In addition to injunctive relief, the buyer may seek monetary damages for actual losses caused by the breach, disgorgement of profits earned by the seller through the prohibited activity, and in some cases, extension of the restrictive period by the duration of the breach (so-called &ldquo;tolling&rdquo; provisions). Some agreements also include liquidated damages provisions that specify a predetermined amount payable upon breach, which avoids the difficulty of proving actual damages.</p>
        <p>Enforcement of restrictive covenants requires prompt action. Courts may deny injunctive relief if the buyer delays in enforcing its rights, as the delay suggests that the buyer does not view the harm as irreparable. Buyers should monitor the seller&apos;s post-closing activities and act swiftly if they detect potential violations.</p>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/closing-process" className="text-apple-accent hover:underline">The Closing Process</Link></li>
        <li><Link href="/learn/management-transition" className="text-apple-accent hover:underline">Management Transition Plan</Link></li>
        <li><Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">Due Diligence Checklist</Link></li>
        <li><Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">Letter of Intent</Link></li>
        <li><Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">Representations &amp; Warranties</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>How long should a non-compete agreement last in a business sale?</h3>
        <p>
          For most small business acquisitions, non-compete periods of 3&ndash;5 years are standard and generally enforceable across jurisdictions. According to Russell Beck&rsquo;s thorough survey of restrictive covenant law across 50 US jurisdictions, courts consistently uphold 3&ndash;5 year non-competes in the sale-of-business context, where the seller has received substantial consideration (the purchase price) in exchange for the restriction. Professional services firms and businesses with long customer relationship cycles may warrant non-competes of up to 7 years. The duration should correspond to the time needed for the buyer to solidify customer and employee relationships &mdash; typically 2&ndash;3 customer contract cycles or the period during which customer loyalty is most likely to shift. Excessively long periods (10+ years) risk being struck down even in a sale context.
        </p>

        <h3 className={h3Class}>Are non-compete agreements enforceable in California?</h3>
        <p>
          California broadly prohibits non-compete agreements under Business and Professions Code Section 16600, but there is a critical exception for non-competes given in connection with the sale of a business or all of its goodwill. According to the American Bar Association&rsquo;s Model Stock Purchase Agreement commentary, this sale-of-business exception means non-competes are enforceable in California M&amp;A transactions, provided they are properly structured under the statutory requirements (the restriction must be limited to the geographic area in which the sold business was conducted). However, the scope and duration of California non-competes in the sale context are scrutinized more strictly than in business-friendly states like Florida or Texas. Buyers of California businesses should complement their non-compete with strong non-solicitation and confidentiality provisions, which face fewer enforceability challenges.
        </p>

        <h3 className={h3Class}>What happens if a seller violates their non-compete after the sale?</h3>
        <p>
          The buyer&rsquo;s primary remedy is injunctive relief &mdash; a court order requiring the seller to stop the prohibited competitive activity immediately. According to the Harvard Law Review&rsquo;s empirical research on non-compete enforcement, courts grant preliminary injunctions in approximately 60&ndash;70% of sale-of-business non-compete cases where the buyer acts promptly (within weeks of discovering the violation). In addition to injunctions, the buyer may seek monetary damages for lost revenue and profits, disgorgement of profits the seller earned through the prohibited activity, and in some cases, extension (&ldquo;tolling&rdquo;) of the restrictive period by the duration of the breach. Practical Law (Thomson Reuters) notes that the most effective enforcement tool is speed: courts may deny injunctive relief if the buyer delays enforcement, as delay suggests the buyer does not view the harm as irreparable. Purchase agreements should include provisions facilitating injunctive relief, including acknowledgment of irreparable harm and waiver of bond requirements.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>American Bar Association, <em>Model Stock Purchase Agreement with Commentary</em> (2023)</li>
        <li>Federal Trade Commission, <em>Non-Compete Clause Rule: Final Rule</em> (2024)</li>
        <li>Russell Beck, <em>Restrictive Covenants and Trade Secrets in 50 Jurisdictions</em> (2024)</li>
        <li>Practical Law (Thomson Reuters), <em>Restrictive Covenants in M&amp;A Transactions: State Law Survey</em> (2024)</li>
        <li>Harvard Law Review, <em>The Enforceability of Non-Compete Agreements: Empirical Evidence</em> (2023)</li>
      </ul>
    </article>
  );
}
