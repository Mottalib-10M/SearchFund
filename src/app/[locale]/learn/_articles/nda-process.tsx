import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function NDAProcessArticle() {
  return (
    <article>
      <h1 className={h1Class}>The NDA Process in Business Acquisitions: Signing, Managing &amp; Best Practices</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          The non-disclosure agreement is the first legal document most buyers sign when
          pursuing an acquisition&mdash;and it sets the tone for everything that follows.
          A well-negotiated NDA protects confidential deal information, establishes trust
          with the seller, and prevents costly legal exposure down the road. Yet many
          searchers treat NDAs as boilerplate. That is a mistake. Active acquirers routinely
          sign 50 to 100+ NDAs during a search, each with different terms, durations, and
          restrictions. This guide breaks down what every clause means, which provisions to
          push back on, how to manage dozens of agreements simultaneously, and what red flags
          should prompt you to involve your attorney before signing.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Why the NDA Matters More Than You Think</h2>
      <div className={bodyClass}>
        <p>
          In an M&amp;A context, the NDA (also called a confidentiality agreement or CA) is a
          legally binding contract that defines what information is confidential and limits how
          the buyer may use the seller&rsquo;s data (
          <a
            href="https://www.faegredrinker.com/en/insights/publications/2018/3/ma-101-key-concepts-in-nondisclosure-agreements"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Faegre Drinker, &ldquo;M&amp;A 101: Key Concepts in NDAs&rdquo;
          </a>
          ). The agreement is typically executed before any substantive discussions or data
          exchanges take place. Once signed, the seller releases the Confidential Information
          Memorandum (CIM), financial statements, customer lists, and other proprietary
          materials through a{" "}
          <Link href="/learn/seller-data-room" className="text-apple-accent hover:underline">
            seller data room
          </Link>.
        </p>
        <p>
          Getting this step wrong has real consequences. Breaching an NDA can expose you to
          injunctive relief&mdash;a court order barring you from using or disclosing
          information&mdash;plus compensatory damages covering lost profits and loss of
          goodwill (
          <a
            href="https://www.sterlingtonlaw.com/key-provisions-of-non-disclosure-agreements-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Sterlington PLLC, &ldquo;NDA Remedies Provision&rdquo;
          </a>
          ). Beyond litigation, a reputation for careless handling of confidential
          information will close doors with brokers and sellers permanently. The lower
          middle market is a small world&mdash;word travels fast.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Types of NDAs You&rsquo;ll Encounter</h2>
      <div className={bodyClass}>
        <p>
          Not all NDAs are structured the same way. The type you sign depends on who drafted
          it, who is sharing information, and whether the agreement has a fixed end date. Here
          are the four most common forms:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Unilateral (one-way) NDA:</strong> The most common form in acquisitions.
            Only the buyer is bound by confidentiality obligations; the seller shares data and
            the buyer promises not to disclose it. Used in roughly 70&ndash;80% of lower
            middle-market deals where the seller controls the information flow.
          </li>
          <li>
            <strong>Mutual (two-way) NDA:</strong> Both parties exchange confidential
            information and owe reciprocal obligations. This structure is appropriate when the
            buyer must also share sensitive data&mdash;such as proof of financial capacity,
            investor commitments, or proprietary operating playbooks&mdash;with the seller.
            According to Exitwise, mutual NDAs &ldquo;demonstrate professionalism and build
            confidence&rdquo; early in negotiations (
            <a
              href="https://exitwise.com/blog/m-a-nda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              Exitwise, &ldquo;M&amp;A NDA Guide&rdquo;
            </a>
            ).
          </li>
          <li>
            <strong>Terminating NDA:</strong> Contains a fixed duration, typically 1 to 5
            years. After expiration, all obligations end and the buyer is released. A 2- to
            3-year term is the most standard range for lower middle-market transactions.
          </li>
          <li>
            <strong>Non-terminating (perpetual) NDA:</strong> The buyer remains bound
            indefinitely. Common for trade secrets or highly sensitive IP. These can be
            legally challenged as unreasonable if the scope is too broad, so review carefully
            before signing.
          </li>
        </ul>
        <p>
          You will also see variations based on who drafts the agreement. Broker-provided NDAs
          tend to follow standardized templates from organizations like the International
          Business Brokers Association (IBBA). NDAs drafted by the seller&rsquo;s counsel
          often include more aggressive terms&mdash;broader non-solicitation clauses, longer
          durations, and restrictions that favor the seller. When you are{" "}
          <Link href="/learn/working-with-brokers" className="text-apple-accent hover:underline">
            working with brokers
          </Link>
          , ask whether the NDA is their standard form or was drafted specifically for the deal.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Key Clauses Explained: What Every Provision Means</h2>
      <div className={bodyClass}>
        <p>
          An acquisition NDA typically contains 8 to 12 substantive clauses. Understanding
          each one is essential because what seems like standard language can create
          obligations that follow you for years.
        </p>

        <h3 className={h3Class}>Definition of Confidential Information</h3>
        <p>
          This clause defines what is protected. Sellers typically seek broad definitions
          covering oral, visual, written, and electronic information&mdash;including data
          not explicitly labeled &ldquo;confidential&rdquo; and any work product derived from
          it (
          <a
            href="https://www.faegredrinker.com/en/insights/publications/2018/3/ma-101-key-concepts-in-nondisclosure-agreements"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Faegre Drinker
          </a>
          ). Standard exclusions apply to information already in your possession before
          signing, information that becomes publicly available through no fault of yours, and
          information received from a third party on a non-confidential basis. Always confirm
          these exclusions are present&mdash;without them, you could be bound by information
          you already knew.
        </p>

        <h3 className={h3Class}>Permitted Use and Purpose</h3>
        <p>
          This restricts your use of confidential information to a single purpose: evaluating
          the potential acquisition. Any other use&mdash;competitive intelligence, market
          research, poaching customers&mdash;constitutes a breach. The language should be
          specific enough that you understand the boundaries but not so narrow that it
          prevents normal due diligence activities. If you plan to pursue a{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            financial due diligence
          </Link>{" "}
          process involving multiple advisors, make sure the purpose clause accommodates
          sharing with your team.
        </p>

        <h3 className={h3Class}>Permitted Disclosures (Representatives)</h3>
        <p>
          This specifies who can see the information beyond you personally. At minimum,
          ensure the NDA permits disclosure to your attorneys, accountants, lenders, and
          investors&mdash;provided they are bound by their own confidentiality obligations.
          Some sellers restrict access only to representatives with a genuine &ldquo;need to
          know,&rdquo; which is reasonable. What is not reasonable is limiting disclosure to
          named individuals, as your advisory team may change during a months-long
          evaluation.
        </p>

        <h3 className={h3Class}>Term and Duration</h3>
        <p>
          Terminating NDAs in the M&amp;A space typically run 1 to 5 years, with 2 to 3 years
          being standard for the lower middle market. Exitwise notes that a 3-year duration
          is a common &ldquo;middle ground when indefinite terms face resistance.&rdquo; Be
          cautious of perpetual terms applied to all information rather than just trade
          secrets. An NDA with an unlimited or excessively long duration&mdash;say 20+
          years&mdash;can be challenged as unreasonable and potentially rendered
          unenforceable (
          <a
            href="https://www.crowleylawllc.com/nda-hidden-risks/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Crowley Law, &ldquo;Hidden Risks of NDAs&rdquo;
          </a>
          ).
        </p>

        <h3 className={h3Class}>Non-Solicitation of Employees</h3>
        <p>
          A non-solicitation clause prohibits you from recruiting the seller&rsquo;s
          employees for a specified period, typically 18 to 24 months according to Faegre
          Drinker&rsquo;s analysis of standard M&amp;A NDA provisions. Two important
          exceptions to negotiate: (1) general solicitations such as job postings that are not
          targeted at the seller&rsquo;s employees, and (2) situations where an employee
          contacts you independently. Without these carve-outs, you could violate the NDA
          simply by posting a job on LinkedIn that one of the seller&rsquo;s employees
          happens to see.
        </p>

        <h3 className={h3Class}>Standstill Provisions</h3>
        <p>
          Common in deals involving publicly traded companies but occasionally appearing in
          private transactions, standstill provisions restrict the buyer from acquiring the
          seller&rsquo;s securities, making unsolicited offers, or soliciting proxies. The
          duration typically ranges from 6 months to 2 years (
          <a
            href="https://dealroom.net/blog/standstill-agreement"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            DealRoom, &ldquo;Standstill Agreements&rdquo;
          </a>
          ). In a search fund context, standstill clauses are less common but may appear in
          seller-drafted NDAs&mdash;particularly when the seller is exploring multiple offers
          and wants to control the pace of the process.
        </p>

        <h3 className={h3Class}>Return or Destruction of Materials</h3>
        <p>
          When you pass on a deal or negotiations end, the NDA will require you to return or
          destroy all confidential materials&mdash;CIMs, financial statements, data room
          downloads&mdash;and certify compliance if requested. Many buyers negotiate the
          right to retain one archival copy held by legal counsel for compliance purposes.
          This is standard and most sellers accept it.
        </p>

        <h3 className={h3Class}>Remedies for Breach</h3>
        <p>
          Most M&amp;A NDAs provide for injunctive relief in addition to all other remedies
          available at law. This means a court can issue an emergency order barring you from
          further disclosure before a full trial even begins. Some agreements include
          liquidated damages&mdash;pre-determined penalty amounts&mdash;though these are more
          common in larger transactions. According to Sterlington PLLC, the purpose of an
          injunctive relief clause is to &ldquo;better safeguard the availability of an
          equitable remedy by setting out the objective understanding of the parties of the
          expected harm from breach.&rdquo;
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Red Flags: When to Push Back or Walk Away</h2>
      <div className={bodyClass}>
        <p>
          Not every NDA deserves your signature. Here are specific provisions that should
          trigger a conversation with your attorney before signing:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Residual knowledge clauses:</strong> Some NDAs prohibit you from using
            &ldquo;residual knowledge&rdquo;&mdash;information retained in your memory after
            reviewing documents. This is nearly impossible to comply with and effectively
            bars you from working in the industry. Conversely, private equity buyers
            sometimes push for broad residual knowledge carve-outs that let them use
            everything they&rsquo;ve learned, which sellers should reject. Either extreme is
            a red flag.
          </li>
          <li>
            <strong>Unfavorable jurisdiction:</strong> An NDA that forces you to litigate
            in a state or country you have no connection to dramatically increases legal costs
            if a dispute arises. Crowley Law notes this can make &ldquo;litigation incredibly
            costly and complex.&rdquo; Negotiate for your home jurisdiction or a neutral
            venue.
          </li>
          <li>
            <strong>Hidden non-compete provisions:</strong> Some NDAs quietly include
            restrictions preventing you from pursuing similar acquisitions in the same
            industry or geography. These provisions belong in a{" "}
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              letter of intent
            </Link>{" "}
            or purchase agreement&mdash;not an NDA you sign just to receive a CIM.
          </li>
          <li>
            <strong>Unlimited duration on all information:</strong> Perpetual terms are
            acceptable for genuine trade secrets but not for general business information
            like revenue figures, organizational charts, or market positioning data. A
            20-year NDA covering all disclosed information may be held unenforceable by a
            court.
          </li>
          <li>
            <strong>Liquidated damages or penalty provisions:</strong> Pre-set damage
            amounts in an NDA&mdash;before any confidential information has even been
            shared&mdash;suggest the seller is more interested in creating use than
            protecting information. Standard contractual remedies (injunctive relief plus
            actual damages) should be sufficient.
          </li>
          <li>
            <strong>Overly broad &ldquo;use&rdquo; clauses:</strong> Ropes &amp; Gray LLP has
            warned about NDAs containing vague &ldquo;use&rdquo; restrictions that extend
            beyond confidentiality into non-circumvention or fee-payment obligations (
            <a
              href="https://www.ropesgray.com/en/insights/alerts/2019/11/avoiding-pitfalls-of-use-clauses-in-ndas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              Ropes &amp; Gray, &ldquo;Avoiding Pitfalls of Use Clauses in NDAs&rdquo;
            </a>
            ). Read the fine print.
          </li>
        </ol>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Managing Multiple NDAs During Your Search</h2>
      <div className={bodyClass}>
        <p>
          A typical search fund entrepreneur evaluates hundreds of opportunities over 18 to
          24 months. If you sign an NDA for even half the deals you look at, you could easily
          accumulate 50 to 100 active agreements with different terms, different expiration
          dates, and different restrictions. Managing this volume requires a system.
        </p>
        <p>
          <strong>Build an NDA tracking spreadsheet or use your deal-flow CRM.</strong>{" "}
          For every NDA you sign, record the following fields: date signed, company name,
          broker or intermediary, NDA type (unilateral vs. mutual), term length, expiration
          date, non-solicitation scope and duration, standstill provisions (yes/no),
          governing law jurisdiction, and any unusual provisions. This log becomes critical if
          you later pursue a{" "}
          <Link href="/learn/proprietary-deal-flow" className="text-apple-accent hover:underline">
            proprietary deal flow
          </Link>{" "}
          strategy where you may be approaching businesses in the same industry, because
          overlapping NDAs could restrict your activities in ways you need to track.
        </p>
        <p>
          <strong>Create a secure information management protocol.</strong> Keep CIMs and
          financial data in encrypted, password-protected folders organized by deal name.
          Never store confidential documents in shared drives accessible to people who are
          not authorized under the NDA. When you pass on a deal, delete all materials
          promptly and document the date you did so. A phased information-release approach,
          where the seller shares increasingly sensitive data as the process progresses, helps
          minimize your exposure to excess confidential material early on.
        </p>
        <p>
          <strong>Brief your advisors on confidentiality obligations.</strong> Your attorney,
          accountant, and potential lenders should understand that information is shared under
          NDA and that they owe the same duty of confidentiality. Some NDAs require
          representatives to sign a separate acknowledgment or addendum.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Common Mistakes That Damage Your Reputation</h2>
      <div className={bodyClass}>
        <p>
          The most frequent NDA violations in the search fund world are not deliberate acts of
          espionage&mdash;they are careless habits that create unnecessary risk.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Signing without reading:</strong> Broker NDAs are often presented as
            routine, but every agreement is different. One unusual clause&mdash;a hidden
            non-compete, an aggressive non-solicitation, or a perpetual term&mdash;can
            create obligations you did not anticipate. Allocate 15 to 20 minutes per NDA
            and flag anything non-standard for your attorney.
          </li>
          <li>
            <strong>Sharing CIMs casually:</strong> Forwarding a CIM to a friend,
            co-searcher, or advisor who is not listed as an authorized representative
            violates virtually every NDA. Even summarizing deal details in a group chat or
            Slack channel could constitute a breach.
          </li>
          <li>
            <strong>Cross-contaminating deal intelligence:</strong> Using insights from
            Company A&rsquo;s confidential data to evaluate Company B is a gray area that
            courts take seriously. Maintain strict mental and physical separation between
            deals. Your{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence checklist
            </Link>{" "}
            for each target should be built from scratch, not borrowed from a prior deal&rsquo;s
            confidential materials.
          </li>
          <li>
            <strong>Verbal disclosures at networking events:</strong> Mentioning that you are
            &ldquo;looking at a landscaping company in the Midwest doing $3M in EBITDA&rdquo;
            at a search fund conference is enough to identify the target and violate your NDA.
            Most agreements explicitly cover oral disclosures.
          </li>
          <li>
            <strong>Forgetting non-solicitation after passing on a deal:</strong> You
            evaluate a company, decide not to proceed, and then six months later hire one
            of their employees through LinkedIn. If your NDA includes an 18-month
            non-solicitation clause, you are in violation&mdash;even though you never
            acquired the business.
          </li>
          <li>
            <strong>Failing to return or destroy materials:</strong> Keeping a CIM
            &ldquo;just in case&rdquo; after passing on a deal means you remain exposed to
            liability. Delete files promptly, empty your trash, and if the seller requests
            certification of destruction, provide it within the specified timeframe.
          </li>
        </ul>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>The NDA in the Acquisition Timeline</h2>
      <div className={bodyClass}>
        <p>
          Understanding where the NDA fits in the broader deal process helps you approach it
          with the right level of seriousness. The NDA is step one&mdash;but it
          creates obligations that persist well beyond closing or deal termination.
        </p>
        <ol className={olClass}>
          <li>
            <strong>NDA signed</strong> &rarr; Seller releases CIM, teaser, and preliminary
            financials through the data room
          </li>
          <li>
            <strong>Initial evaluation</strong> &rarr; Review the CIM, assess fit against
            your acquisition criteria (see{" "}
            <Link href="/learn/reading-a-cim" className="text-apple-accent hover:underline">
              Reading a CIM
            </Link>
            )
          </li>
          <li>
            <strong>Management meeting</strong> &rarr; Meet the seller, tour the business,
            ask operational questions
          </li>
          <li>
            <strong>LOI submission</strong> &rarr; Present a{" "}
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              letter of intent
            </Link>{" "}
            with proposed terms and exclusivity period
          </li>
          <li>
            <strong>Due diligence</strong> &rarr; Conduct thorough{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link>{" "}
            across financial, legal, operational, and commercial dimensions
          </li>
          <li>
            <strong>Purchase agreement &amp; closing</strong> &rarr; NDA obligations
            typically survive closing and continue for the specified term
          </li>
        </ol>
        <p>
          Note that the NDA&rsquo;s non-solicitation and confidentiality obligations do not
          end just because you decided not to acquire the business. They run for the full
          stated term&mdash;typically 2 to 3 years from signing. If you are actively
          searching in a specific industry, this means your earliest NDAs may still be in
          effect when you close your eventual acquisition.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Should I have my attorney review every NDA?</h3>
        <p>
          Ideally, yes&mdash;but practically, the cost of legal review for 50 to 100 NDAs
          can be prohibitive. A common approach: have your attorney review the first 3 to 5
          NDAs you receive to build your understanding of standard terms. After that, you
          can review most broker-provided NDAs yourself, flagging only those with
          non-standard provisions (unusual duration, aggressive non-solicitation, hidden
          non-competes) for attorney review. Any NDA drafted by the seller&rsquo;s
          counsel&mdash;as opposed to a broker template&mdash;warrants a full legal review.
        </p>

        <h3 className={h3Class}>Can I negotiate an NDA, or will the seller walk away?</h3>
        <p>
          Reasonable modifications are expected in the M&amp;A process. Sellers and brokers
          are accustomed to negotiation on term length, non-solicitation scope, permitted
          disclosures, and governing law. What will turn off a seller is excessive redlining
          of a standard agreement or weeks of back-and-forth over minor points. Focus your
          negotiation energy on 2 to 3 provisions that materially affect your risk&mdash;and
          accept the rest if they are within market norms.
        </p>

        <h3 className={h3Class}>What happens if I accidentally breach an NDA?</h3>
        <p>
          Accidental breaches&mdash;such as an advisor forwarding a document to an
          unauthorized person&mdash;should be addressed immediately and transparently.
          Notify your attorney, contain the disclosure (request deletion from the
          unauthorized recipient), and consider whether you need to inform the seller. In
          practice, minor accidental breaches rarely result in litigation if they are caught
          quickly and no damage occurs. But repeated carelessness, or a breach that reaches
          a competitor or the seller&rsquo;s employees, can trigger injunctive relief and
          damages claims.
        </p>

        <h3 className={h3Class}>Do NDAs apply to information I learn verbally during management meetings?</h3>
        <p>
          Yes. Most well-drafted NDAs cover information disclosed in any form, including
          oral and visual disclosures. If a seller shares revenue numbers, customer names, or
          strategic plans during a face-to-face meeting, that information is confidential
          under the agreement. Some NDAs require the disclosing party to confirm verbal
          disclosures in writing within a specified period (often 10 to 30 days), but many
          do not include this requirement&mdash;meaning anything said in a meeting is
          automatically covered.
        </p>

        <h3 className={h3Class}>Can I sign NDAs for competing businesses in the same industry?</h3>
        <p>
          Generally, yes&mdash;unless the NDA contains a non-compete or exclusivity
          provision that restricts you from evaluating competitors. This is uncommon in
          standard NDAs but does appear occasionally in seller-drafted agreements. The
          practical challenge is maintaining information barriers between competing
          evaluations. Keep separate folders, separate notes, and do not use one
          company&rsquo;s proprietary data to benchmark or analyze another. Your NDA
          tracking spreadsheet should flag any agreements with competitive restriction
          clauses so you can avoid inadvertent violations.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 className={h2Class}>Sources</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>
            Faegre Drinker Biddle &amp; Reath LLP,{" "}
            <a
              href="https://www.faegredrinker.com/en/insights/publications/2018/3/ma-101-key-concepts-in-nondisclosure-agreements"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              <em>M&amp;A 101: Key Concepts in Non-Disclosure Agreements</em>
            </a>
          </li>
          <li>
            Exitwise,{" "}
            <a
              href="https://exitwise.com/blog/m-a-nda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              <em>M&amp;A NDA: Benefits, Types, and Negotiation Strategies Explained</em>
            </a>
          </li>
          <li>
            Crowley Law LLC,{" "}
            <a
              href="https://www.crowleylawllc.com/nda-hidden-risks/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              <em>The Hidden Risks of Non-Disclosure Agreements</em>
            </a>
          </li>
          <li>
            DealRoom,{" "}
            <a
              href="https://dealroom.net/blog/standstill-agreement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              <em>Everything You Need to Know About Standstill Agreements</em>
            </a>
          </li>
          <li>
            Ropes &amp; Gray LLP,{" "}
            <a
              href="https://www.ropesgray.com/en/insights/alerts/2019/11/avoiding-pitfalls-of-use-clauses-in-ndas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              <em>Avoiding Pitfalls of &ldquo;Use&rdquo; Clauses in NDAs</em>
            </a>
          </li>
          <li>
            Sterlington PLLC,{" "}
            <a
              href="https://www.sterlingtonlaw.com/key-provisions-of-non-disclosure-agreements-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              <em>Non-Disclosure Agreements: The Ubiquitous Remedies Provision</em>
            </a>
          </li>
          <li>
            International Business Brokers Association,{" "}
            <em>Standard NDA Best Practices</em> (2024)
          </li>
          <li>
            American Bar Association,{" "}
            <em>Model Confidentiality Agreement for M&amp;A Transactions</em> (2023)
          </li>
        </ul>
      </div>
    </article>
  );
}
