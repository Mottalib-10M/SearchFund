import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function NonCompeteAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Non-Compete & Non-Solicitation Clauses in Acquisitions</h1>

      <div className={bodyClass}>
        <p>
          When you acquire a business, you&apos;re paying for goodwill - customer relationships,
          brand reputation, and market position that the seller built over years. Non-compete and
          non-solicitation clauses protect that investment by preventing the seller from turning
          around and competing against you with the very advantages you just purchased.
        </p>
        <p>
          These restrictive covenants are among the most heavily negotiated provisions in any
          acquisition agreement. Getting them right requires understanding enforceability rules,
          structuring provisions that courts will uphold, and balancing buyer protection against
          seller flexibility.
        </p>
      </div>

      <h2 className={h2Class}>Types of Restrictive Covenants</h2>

      <div className={bodyClass}>
        <p>Acquisition agreements typically include three distinct types of restrictions:</p>

        <ul className={ulClass}>
          <li>
            <strong>Non-compete clause:</strong> Prohibits the seller from owning, operating,
            managing, or being employed by a competing business within a defined geographic area
            and time period
          </li>
          <li>
            <strong>Customer non-solicitation:</strong> Prohibits the seller from soliciting or
            doing business with customers of the acquired company. Often considered more enforceable
            and more practically important than a pure non-compete
          </li>
          <li>
            <strong>Employee non-solicitation:</strong> Prohibits the seller from recruiting or
            hiring employees of the acquired business. Protects against the seller poaching your
            team to start a competing venture
          </li>
        </ul>

        <p>
          Best practice is to include all three as separate, independently enforceable covenants.
          If one is struck down by a court, the others survive.
        </p>
      </div>

      <h2 className={h2Class}>Enforceability: What Courts Look For</h2>

      <div className={bodyClass}>
        <p>
          Non-competes in the context of business sales are generally enforceable across most
          US jurisdictions - even in states that restrict employee non-competes. Courts evaluate
          three key factors:
        </p>
      </div>

      <h3 className={h3Class}>1. Reasonable Duration</h3>

      <div className={bodyClass}>
        <p>Typical enforceable periods for business sale non-competes:</p>

        <ul className={ulClass}>
          <li><strong>2-3 years:</strong> Generally upheld in most jurisdictions</li>
          <li><strong>3-5 years:</strong> Common and enforceable, especially with goodwill allocation</li>
          <li><strong>5-7 years:</strong> May be enforceable for high-value acquisitions with significant goodwill</li>
          <li><strong>7+ years:</strong> Increasingly difficult to enforce; courts may reduce the period</li>
        </ul>

        <p>
          The appropriate duration depends on customer contract cycles, industry dynamics, and
          how long it takes to cement relationships with the acquired customer base.
        </p>
      </div>

      <h3 className={h3Class}>2. Reasonable Geographic Scope</h3>

      <div className={bodyClass}>
        <p>
          The geographic restriction must relate to the actual market area where the business
          operates. A local plumbing company&apos;s non-compete shouldn&apos;t cover the entire
          state; a national SaaS company&apos;s might justifiably be nationwide.
        </p>

        <ul className={ulClass}>
          <li><strong>Local service businesses:</strong> County or metropolitan area</li>
          <li><strong>Regional businesses:</strong> Multi-state region matching actual operations</li>
          <li><strong>National/digital businesses:</strong> Nationwide or even global (for truly global operations)</li>
        </ul>
      </div>

      <h3 className={h3Class}>3. Reasonable Activity Scope</h3>

      <div className={bodyClass}>
        <p>
          Restricted activities must be defined precisely. Courts disfavor vague terms like
          &quot;similar business&quot; or &quot;related services.&quot; Instead, define the specific
          business activities being restricted.
        </p>
        <p>
          <strong>Good:</strong> &quot;Seller shall not own, operate, or manage a residential HVAC
          installation and repair business.&quot;
        </p>
        <p>
          <strong>Bad:</strong> &quot;Seller shall not engage in any business that competes with
          any aspect of the Company&apos;s operations.&quot;
        </p>
      </div>

      <h2 className={h2Class}>The FTC Non-Compete Rule and Business Sales</h2>

      <div className={bodyClass}>
        <p>
          The FTC&apos;s 2024 rule broadly banning non-compete agreements specifically
          <strong> exempts</strong> non-competes arising from the bona fide sale of a business.
          This means:
        </p>

        <ul className={ulClass}>
          <li>Seller non-competes tied to a business acquisition remain fully enforceable under federal law</li>
          <li>The exemption applies when the seller has a substantial ownership stake (typically 25%+) in the business being sold</li>
          <li>Employee non-competes (for retained employees) may be affected by the FTC rule - consult counsel</li>
          <li>State laws still apply and may impose additional restrictions</li>
        </ul>

        <p>
          The legal environment continues to evolve, so always have local counsel review your
          restrictive covenants.
        </p>
      </div>

      <h2 className={h2Class}>State-by-State Considerations</h2>

      <div className={bodyClass}>
        <p>
          Enforceability varies significantly by jurisdiction. Key states to understand:
        </p>

        <ul className={ulClass}>
          <li>
            <strong>California:</strong> Generally prohibits non-competes (Business & Professions
            Code §16600) but has a specific exception for the sale of a business or its goodwill.
            Keep restrictions narrowly tailored.
          </li>
          <li>
            <strong>Texas:</strong> Enforces non-competes if they meet statutory requirements for
            reasonableness (duration, geography, scope). Courts can reform overly broad covenants.
          </li>
          <li>
            <strong>New York:</strong> Enforces reasonable non-competes; courts apply a balancing
            test weighing employer needs against hardship on the restricted party.
          </li>
          <li>
            <strong>Florida:</strong> Statutorily favorable to non-competes; rebuttable presumptions
            that 2-year restrictions are reasonable and 5+ years may be unreasonable.
          </li>
          <li>
            <strong>Massachusetts:</strong> Enforces non-competes in business sales but requires
            garden leave or other consideration for employee non-competes.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>International Considerations</h2>

      <div className={bodyClass}>
        <p>
          For cross-border acquisitions, restrictive covenant rules vary dramatically:
        </p>

        <ul className={ulClass}>
          <li><strong>UK:</strong> Enforceable if reasonable; courts will not modify overly broad covenants (unlike some US states)</li>
          <li><strong>France:</strong> Non-competes must include financial compensation to the restricted party; 2-year maximum is standard</li>
          <li><strong>Germany:</strong> Seller non-competes in business sales generally enforceable; employee non-competes require compensation (50% of prior salary)</li>
          <li><strong>EU generally:</strong> Many jurisdictions require financial compensation for non-compete periods, even in business sale contexts</li>
        </ul>
      </div>

      <h2 className={h2Class}>Drafting Best Practices</h2>

      <div className={bodyClass}>
        <p>Follow these principles to maximize enforceability:</p>

        <ol className={olClass}>
          <li>
            <strong>Separate each restriction:</strong> Draft non-compete, customer non-solicitation,
            and employee non-solicitation as independent covenants with separate severability clauses
          </li>
          <li>
            <strong>Include blue-pencil language:</strong> Ask the court to modify (rather than void)
            overly broad provisions: &quot;If any provision is deemed unreasonable, the court may
            modify it to the minimum extent necessary to make it enforceable.&quot;
          </li>
          <li>
            <strong>Articulate legitimate interests:</strong> Include recitals explaining why
            restrictions are necessary to protect the goodwill being purchased
          </li>
          <li>
            <strong>Allocate purchase price:</strong> Assign a specific portion of the purchase
            price to the non-compete, demonstrating valuable consideration
          </li>
          <li>
            <strong>Include injunctive relief provisions:</strong> State that breaches cause
            irreparable harm and the buyer is entitled to injunctive relief without posting bond
          </li>
          <li>
            <strong>Carve out passive investments:</strong> Allow the seller to hold less than
            5% in public companies (reasonable exception that shows good faith)
          </li>
        </ol>
      </div>

      <h2 className={h2Class}>Negotiation Strategies</h2>

      <h3 className={h3Class}>For Buyers</h3>

      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Start with market terms:</strong> Propose restrictions similar to comparable transactions - overreaching invites pushback</li>
          <li><strong>Focus on what matters most:</strong> If customer relationships drive value, fight hardest for customer non-solicitation</li>
          <li><strong>Tie to seller involvement:</strong> If the seller is staying in a{" "}
            <Link href="/learn/seller-transition-period" className="text-apple-accent hover:underline">
              transition role
            </Link>, argue for longer restrictions since they&apos;ll have ongoing access to relationships
          </li>
          <li><strong>Use earnouts as use:</strong> Make non-compete violations a breach that terminates earnout obligations</li>
          <li><strong>Bundle with financial penalties:</strong> Tie violations to seller note acceleration - more effective than litigation threats alone</li>
        </ul>
      </div>

      <h3 className={h3Class}>For Sellers</h3>

      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Narrow the activity scope:</strong> Don&apos;t accept blanket prohibitions - insist on precise definitions</li>
          <li><strong>Limit geography to actual operations:</strong> A 3-county business shouldn&apos;t warrant a statewide restriction</li>
          <li><strong>Negotiate duration:</strong> Push for shorter periods tied to realistic customer transition timelines</li>
          <li><strong>Carve out future opportunities:</strong> If planning to pursue an adjacent business line, negotiate an explicit exception</li>
          <li><strong>Request additional compensation:</strong> In some jurisdictions (especially Europe), demand payment for non-compete periods</li>
        </ul>
      </div>

      <h3 className={h3Class}>Common Compromises</h3>

      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Stepped restrictions:</strong> Broader non-compete for years 1-2, then only customer non-solicitation for years 3-5</li>
          <li><strong>Geographic zones:</strong> Absolute non-compete in core market, less restrictive covenant in adjacent areas</li>
          <li><strong>Customer-specific restrictions:</strong> Rather than prohibiting all competition, restrict only solicitation of customers active in the last 12-24 months</li>
        </ul>
      </div>

      <h2 className={h2Class}>Enforcement and Remedies</h2>

      <div className={bodyClass}>
        <p>If the seller violates restrictive covenants, you have several options:</p>

        <ol className={olClass}>
          <li><strong>Cease and desist letter:</strong> Formal demand to stop the prohibited activity</li>
          <li><strong>Temporary restraining order (TRO):</strong> Emergency court order to halt ongoing violations</li>
          <li><strong>Preliminary injunction:</strong> Court evaluates likelihood of success and irreparable harm</li>
          <li><strong>Trial on the merits:</strong> Full proceeding to determine enforceability and damages</li>
          <li><strong>Permanent injunction and damages:</strong> Court order barring future violations plus monetary recovery</li>
        </ol>

        <p>
          Consider building financial penalties into the deal structure itself: earnout forfeiture,
          seller note acceleration, and escrow clawback provisions are often more effective
          deterrents than the threat of litigation.
        </p>
      </div>

      <h2 className={h2Class}>Integration with Employee Retention</h2>

      <div className={bodyClass}>
        <p>
          Restrictive covenants are part of a broader strategy to protect value during the transition.
          They buy you time to cement customer and employee relationships, but they&apos;re not a
          substitute for proactive management during the critical{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            first 100 days
          </Link>.
        </p>
        <p>
          Coordinate with your{" "}
          <Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">
            employee retention strategy
          </Link>{" "}
          - ensure key employees sign their own confidentiality and non-solicitation agreements,
          offer retention bonuses, and communicate the transition plan clearly.
        </p>
      </div>

      <h2 className={h2Class}>Practical Checklist</h2>

      <div className={bodyClass}>
        <p>Before finalizing restrictive covenants:</p>

        <ol className={olClass}>
          <li>Research enforceability in the governing jurisdiction</li>
          <li>Verify seller&apos;s ownership stake qualifies for FTC sale-of-business exemption</li>
          <li>Define restricted activities precisely based on actual business operations</li>
          <li>Set geographic scope to match the business&apos;s actual market footprint</li>
          <li>Propose defensible duration given industry norms and customer cycles</li>
          <li>Include separate, independently enforceable non-solicitation provisions</li>
          <li>Add severability and blue-pencil language</li>
          <li>Allocate purchase price portion to covenant not to compete</li>
          <li>Include injunctive relief provisions and financial penalty triggers</li>
          <li>Ensure all selling parties sign identical covenants</li>
          <li>Have local counsel review before signing</li>
        </ol>
      </div>

      <h2 className={h2Class}>Related Resources</h2>

      <ul className={ulClass}>
        <li>
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            Letter of Intent: How to Draft & Negotiate
          </Link>{" "} - Where non-compete terms are first outlined
        </li>
        <li>
          <Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">
            Representations & Warranties in M&A
          </Link>{" "} - Complementary buyer protections
        </li>
        <li>
          <Link href="/learn/seller-transition-period" className="text-apple-accent hover:underline">
            Seller Transition & Handoff Strategy
          </Link>{" "} - Managing the seller&apos;s involvement post-closing
        </li>
        <li>
          <Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">
            Employee Retention in Acquisitions
          </Link>{" "} - Protecting your team from being poached
        </li>
        <li>
          <Link href="/learn/closing-process" className="text-apple-accent hover:underline">
            The Closing Process
          </Link>{" "} - How restrictive covenants fit into closing documentation
        </li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>Does the FTC non-compete ban affect seller non-competes in business acquisitions?</h3>
      <div className={bodyClass}>
        <p>
          No. The FTC&apos;s 2024 rule broadly banning non-compete agreements specifically
          exempts non-competes arising from the bona fide sale of a business. This means
          seller non-competes tied to a business acquisition remain fully enforceable under
          federal law, provided the seller has a substantial ownership stake (typically 25%
          or more) in the business being sold. However, employee non-competes for retained
          employees may be affected by the rule, and state laws impose additional requirements.
          According to Gibson Dunn&apos;s 2024 analysis, the FTC exemption for business sales
          was one of the least contested aspects of the rule, as courts have long recognized
          that protecting purchased goodwill justifies reasonable post-sale restrictions.
        </p>
      </div>

      <h3 className={h3Class}>What is the ideal duration for a seller non-compete clause?</h3>
      <div className={bodyClass}>
        <p>
          For most search fund acquisitions, 3-5 years is the standard and most defensible
          duration. According to the American Bar Association&apos;s 2023 analysis of
          restrictive covenants in M&A, 3-year non-competes are upheld in virtually all US
          jurisdictions, while 5-year terms are enforceable in most states when supported by
          adequate consideration and goodwill allocation. The right duration should match
          customer contract cycles -- if the average customer contract is 2 years, a 4-year
          non-compete gives you two full renewal cycles to cement relationships. In Europe,
          shorter periods (2-3 years) are standard, and many jurisdictions (notably France and
          Germany) require financial compensation for the restricted period, even in business
          sale contexts. A common compromise is a stepped restriction: broader non-compete for
          years 1-3, then only customer{" "}
          <Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">
            non-solicitation
          </Link>{" "}
          for years 4-5.
        </p>
      </div>

      <h3 className={h3Class}>How much of the purchase price should be allocated to the non-compete?</h3>
      <div className={bodyClass}>
        <p>
          Allocating a specific portion of the purchase price to the non-compete covenant
          strengthens enforceability by demonstrating valuable consideration. The typical
          allocation is 5-15% of the total purchase price, though the exact amount should
          be guided by tax strategy. For the seller, amounts allocated to the non-compete
          are taxed as ordinary income (not capital gains), which is less favorable. For the
          buyer, the allocation creates an amortizable intangible asset that can be deducted
          over 15 years under IRC Section 197. According to Beck Reed Riden LLP&apos;s
          50-State Non-Compete Chart, courts are more likely to enforce non-competes when
          the purchase agreement explicitly assigns a dollar value to the covenant and the
          allocation is reasonable relative to the total deal value. Work with your tax
          advisor to balance enforceability with the seller&apos;s after-tax proceeds.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>

      <ul className={ulClass}>
        <li>Federal Trade Commission, <em>Non-Compete Clause Rule - Final Rule</em> (April 2024)</li>
        <li>Beck Reed Riden LLP, <em>50-State Non-Compete Chart</em> (2024)</li>
        <li>American Bar Association, <em>Restrictive Covenants in M&A Transactions</em> (2023)</li>
        <li>Gibson Dunn, <em>Non-Compete Agreements in M&A Transactions</em> (2024)</li>
        <li>Association of Corporate Counsel, <em>Enforceability of Non-Compete Agreements: 50-State Survey</em> (2023)</li>
        <li>California Business & Professions Code § 16600 - Non-Compete Restrictions</li>
        <li>Texas Business & Commerce Code § 15.50 - Covenant Not to Compete</li>
      </ul>
    </article>
  );
}
