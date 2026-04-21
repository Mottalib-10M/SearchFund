import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function WorkingWithAdvisorsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Working with Advisors: Lawyers, Accountants &amp; Brokers</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          No searcher acquires a company alone. Behind every successful search
          fund acquisition is a team of professional advisors — transaction
          attorneys, accountants, business brokers, and specialized consultants
          — whose expertise is critical to navigating the legal, financial,
          and operational complexities of buying a business. Yet many first-time
          searchers either hire advisors too late, choose based on price rather
          than fit, or fail to manage the advisory process effectively. This
          guide explains when to engage each type of advisor, how to select the
          right professionals, what to expect in terms of fees, and how to
          manage your advisory team through to a successful closing.
        </p>

        <h2 className={h2Class}>When to hire each type of advisor</h2>

        <h3 className={h3Class}>Transaction attorney</h3>
        <p>
          Engage a transaction attorney no later than the{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">Letter of Intent (LOI)</Link>{" "}
          stage. Ideally, you should have identified your attorney during the
          search phase, well before you find a deal, so that they are ready to
          move quickly when a target emerges. The LOI is a semi-binding legal
          document that establishes the key deal terms — price, structure,
          exclusivity, and conditions. Having an attorney review the LOI before
          you sign it can prevent costly mistakes that are difficult to
          renegotiate later. From LOI through closing, your attorney will draft
          or review the definitive purchase agreement, disclosure schedules,
          employment agreements, non-compete clauses, escrow arrangements, and
          closing documents.
        </p>

        <h3 className={h3Class}>Accountant and financial advisor</h3>
        <p>
          Engage an accountant at two critical points. First, hire a{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">Quality of Earnings (QoE)</Link>{" "}
          provider when you enter{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link>{" "}
          after signing the LOI. The QoE report is the financial backbone of your diligence
          process and will take 3-6 weeks to complete. Second, engage a tax
          advisor early in the deal structuring process — ideally before the LOI
          is signed — to ensure the deal structure (asset purchase vs. stock
          purchase, entity selection, purchase price allocation) is optimized
          for tax efficiency. These may be the same firm or different firms
          depending on expertise.
        </p>

        <h3 className={h3Class}>Business broker or intermediary</h3>
        <p>
          Brokers enter the picture in two ways. Most commonly, the seller has
          engaged a broker to represent them in the sale process — in this case,
          the broker is the seller&apos;s representative and their fiduciary
          duty runs to the seller. Less commonly, a searcher may engage a
          buy-side advisor or intermediary to help source deals, particularly
          in specific industries or geographies. During the search phase,
          building relationships with 20-40 brokers who handle businesses in
          your target size range and industry verticals is one of the most
          effective deal sourcing strategies.
        </p>

        <h2 className={h2Class}>How to select the right advisors</h2>

        <h3 className={h3Class}>Industry experience</h3>
        <p>
          The single most important selection criterion is relevant deal
          experience. A corporate attorney who handles Fortune 500 M&amp;A is
          not the right fit for a $5M search fund acquisition. You need
          advisors who understand the specific dynamics of small business
          acquisitions: SBA lending requirements,{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">seller notes, earn-outs, working capital adjustments</Link>, and the personal nature of small
          business transactions. Ask every potential advisor: how many deals
          in my size range ($2M-$15M enterprise value) have you closed in the
          past two years?
        </p>

        <h3 className={h3Class}>Search fund experience</h3>
        <p>
          Advisors who have worked with search fund entrepreneurs before
          understand the unique dynamics of the model — the investor board,
          the stepped-up equity structure, the importance of speed (you are
          burning through search capital every month), and the typical
          post-acquisition governance structure. A growing number of law firms
          and accounting firms now have dedicated search fund or ETA practices.
          These specialists can be found through the Stanford Search Fund
          community, IESE, INSEAD alumni networks, and the broader ETA
          ecosystem.
        </p>

        <h3 className={h3Class}>Deal size familiarity</h3>
        <p>
          Advisors who typically work on $100M+ transactions will often bring
          unnecessary complexity (and cost) to a $5M acquisition. Conversely,
          advisors who only handle very small transactions (sub-$1M) may lack
          the sophistication needed for a properly structured search fund deal.
          The sweet spot is advisors who regularly handle transactions in the
          $2M-$20M range, which is where most search fund acquisitions fall.
        </p>

        <h3 className={h3Class}>References from other searchers</h3>
        <p>
          The most reliable way to find great advisors is through referrals from
          other search fund entrepreneurs who have recently closed deals. Ask
          for 3-5 references from each potential advisor and actually call them.
          Specific questions to ask references include: Did they hit their
          estimated budget? Were they responsive during crunch periods? Did they
          add value beyond the technical work? Would you hire them again?
        </p>

        <h2 className={h2Class}>Typical fees and cost structures</h2>

        <h3 className={h3Class}>Transaction attorney fees</h3>
        <p>
          For a search fund acquisition in the $3M-$15M range, total legal
          fees typically run $30,000 to $80,000. This covers LOI review, due
          diligence document review, purchase agreement drafting and
          negotiation, ancillary agreements (employment, non-compete, escrow),
          and closing. The range depends on deal complexity, negotiation
          intensity, and geographic market. Most transaction attorneys bill
          hourly at $350-$600 per hour for partners and $200-$400 for
          associates. Some firms offer fixed-fee or capped-fee arrangements
          for standard search fund acquisitions, which can provide cost
          certainty. Always negotiate the fee arrangement before engaging.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>LOI review and negotiation:</strong> $3K-$8K
          </li>
          <li>
            <strong>Due diligence support:</strong> $5K-$15K
          </li>
          <li>
            <strong>Purchase agreement and ancillary documents:</strong> $15K-$40K
          </li>
          <li>
            <strong>Closing and post-closing:</strong> $5K-$15K
          </li>
        </ul>

        <h3 className={h3Class}>Accountant and QoE fees</h3>
        <p>
          A Quality of Earnings report for a company with $2M-$8M in revenue
          typically costs $20,000 to $60,000, with most falling in the
          $25K-$45K range. The QoE provider will analyze 3 years of financial
          statements (plus trailing twelve months), identify EBITDA adjustments,
          assess working capital normalization, evaluate revenue quality and
          sustainability, and flag any financial red flags. Tax advisory for
          deal structuring adds another $5K-$15K. Ongoing tax compliance and
          planning post-acquisition will cost $10K-$30K annually depending on
          entity complexity.
        </p>

        <h3 className={h3Class}>Business broker fees</h3>
        <p>
          When a seller engages a broker, the seller typically pays the
          commission. The standard fee structure follows a modified Lehman
          formula, typically resulting in fees of 8-12% of the transaction
          value for deals under $5M, declining to 4-6% for deals in the
          $5M-$15M range. Some brokers charge a minimum fee of $75K-$150K
          regardless of deal size. For buy-side advisory (less common), fees
          are typically 2-4% of the transaction value, sometimes with a
          retainer of $3K-$5K per month against the success fee.
        </p>

        <h2 className={h2Class}>Managing the advisory team</h2>

        <h3 className={h3Class}>Establish a regular cadence</h3>
        <p>
          During the active due diligence period (typically 60-90 days from
          LOI to closing), establish weekly status calls with your full
          advisory team. These 30-45 minute calls keep everyone aligned on
          timeline, flag emerging issues before they become crises, and prevent
          duplicative work. Create a shared due diligence tracker (a simple
          spreadsheet works) that lists every workstream, responsible party,
          status, and target completion date. Review this tracker on every
          call.
        </p>

        <h3 className={h3Class}>Clear communication and scope management</h3>
        <p>
          Define the scope of each advisor&apos;s engagement in writing before
          work begins. Scope creep is the primary driver of advisory cost
          overruns. When an attorney starts reviewing operational contracts
          that were not in the original scope, or when the QoE provider
          expands their analysis to include a market study, costs escalate
          quickly. Be explicit about what is in-scope and out-of-scope, and
          require approval before any advisor expands their work.
        </p>

        <h3 className={h3Class}>Be the quarterback</h3>
        <p>
          As the searcher, you are the project manager of the acquisition
          process. Your advisors are specialists who execute their respective
          workstreams, but you own the overall timeline, budget, and
          decision-making. Do not abdicate this responsibility. Review every
          major deliverable (QoE report, purchase agreement, tax analysis)
          personally and ensure you understand every material finding and
          recommendation. Your advisors should explain their work in plain
          language — if they cannot, that is a red flag about either their
          communication skills or the quality of their analysis.
        </p>

        <h2 className={h2Class}>Avoiding over-reliance on advisors</h2>
        <p>
          While professional advisors are essential, the searcher must
          understand the fundamentals of every aspect of the deal. You do not
          need to be a lawyer, but you should understand every material term
          in the purchase agreement and why it matters. You do not need to be
          a CPA, but you should be able to read a QoE report and identify the
          key adjustments and their implications. You do not need to be a
          tax expert, but you should understand the difference between an
          asset purchase and a stock purchase and why it matters for both
          buyer and seller.
        </p>
        <p>
          The risk of over-reliance is twofold: you may make decisions without
          fully understanding the trade-offs, and you may miss issues that fall
          between advisory workstreams. As the deal quarterback, these gaps are
          yours to identify and fill.
        </p>

        <h2 className={h2Class}>When advisors disagree</h2>
        <p>
          It is not uncommon for advisors to offer conflicting recommendations.
          Your attorney may advise walking away due to a legal risk that your
          accountant views as quantifiable and manageable. When advisors
          disagree, the searcher must synthesize the different perspectives,
          assess the risk in context, and make the final call. Facilitate a
          direct conversation between the disagreeing advisors — often, the
          disagreement stems from different assumptions rather than
          fundamentally irreconcilable positions.
        </p>

        <h2 className={h2Class}>Building long-term relationships</h2>
        <p>
          The advisors you engage for your acquisition will ideally become
          long-term partners. Your transaction attorney can serve as ongoing
          corporate counsel for the acquired company. Your accountant becomes
          your audit and tax advisor. The broker who sourced your deal may
          source add-on acquisitions. Invest in these relationships beyond the
          transaction — share updates on the business, refer other searchers,
          and pay invoices promptly. The ETA community is small, and your
          reputation as a client matters.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Post-closing legal:</strong> Ongoing corporate counsel
            typically costs $15K-$40K annually.
          </li>
          <li>
            <strong>Post-closing accounting:</strong> Audit, tax compliance,
            and advisory typically costs $20K-$50K annually.
          </li>
          <li>
            <strong>Board participation:</strong> Some advisors may join your
            advisory board, compensated with $5K-$15K annually or a small
            equity stake.
          </li>
        </ul>

        <h2 className={h2Class}>Regional differences: US vs. Europe</h2>
        <p>
          Advisory structures differ meaningfully between the US and European
          markets. In the US, the transaction process is highly standardized —
          purchase agreements follow well-established templates, QoE reports
          are nearly universal, and the role of each advisor is well-defined.
          European acquisitions involve additional complexity.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Legal systems:</strong> Each country has its own framework.
            France (civil law, strong employee protections) differs structurally
            from the UK (common law) and Germany (co-determination rights).
          </li>
          <li>
            <strong>Notarial requirements:</strong> In France, Germany,
            Netherlands, and Belgium, share transfers must be executed before a
            notary, adding $5K-$20K in costs.
          </li>
          <li>
            <strong>Tax advisory:</strong> Cross-border tax planning is more
            complex — budget 20-40% more for European transactions.
          </li>
          <li>
            <strong>Broker landscape:</strong> Less developed than the US. Local
            intermediaries and Chambers of Commerce play a larger role.
          </li>
        </ul>

        <h2 className={h2Class}>Common mistakes with advisors</h2>
        <ul className={ulClass}>
          <li>
            <strong>Hiring too late:</strong> Engaging advisors after critical
            decisions have been made (LOI terms, deal structure) limits their
            ability to add value and fix problems. Build your advisory team
            during the search phase, before you find a deal.
          </li>
          <li>
            <strong>Choosing on price alone:</strong> The cheapest attorney or
            QoE provider is rarely the best value. An experienced advisor who
            costs 30% more but catches a material issue during diligence — or
            negotiates a better deal structure — will pay for the premium many
            times over. A missed liability or poorly structured purchase
            agreement can cost you the entire investment.
          </li>
          <li>
            <strong>Not managing the process:</strong> Assuming advisors will
            coordinate among themselves is a recipe for missed deadlines, scope
            creep, and cost overruns. You must actively manage the process.
          </li>
          <li>
            <strong>Ignoring advisor red flags:</strong> When an experienced
            advisor expresses serious concern, listen carefully. Dismissing
            concerns from someone with 20 years of deal experience because you
            are emotionally committed to a deal is dangerous.
          </li>
          <li>
            <strong>Failing to check references:</strong> Every advisor will
            present their best credentials. Speaking with 3-5 recent clients
            reveals whether they deliver on their promises.
          </li>
          <li>
            <strong>Using generalists for specialized needs:</strong> A general
            practice attorney is not suited for an acquisition. Ensure each
            advisor has specific experience relevant to your transaction.
          </li>
        </ul>

        <h2 className={h2Class}>The bottom line</h2>
        <p>
          Professional advisors are not optional in a search fund acquisition —
          they are essential. Total advisory costs for a typical deal ($30K-$80K
          legal, $20K-$60K accounting, plus any specialty advisors) represent
          a significant but necessary investment, typically 2-5% of the total
          transaction value. The key to maximizing the return on this investment
          is selecting advisors with relevant experience, defining scope clearly,
          managing the process actively, and maintaining enough personal
          knowledge to be a sophisticated consumer of advisory services. Build
          your team early, manage them well, and your advisors will be among
          the most valuable assets in your acquisition journey.
        </p>
      </div>
    </article>
  );
}
