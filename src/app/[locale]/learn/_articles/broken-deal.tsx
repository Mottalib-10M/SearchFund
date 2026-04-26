import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function BrokenDealArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Handle a Broken Deal: Lessons & Next Steps</h1>

      <div className={bodyClass}>
        <p>
          You&apos;ve spent months searching, weeks in due diligence, and thousands in professional
          fees - and the deal falls apart. Whether it&apos;s a failed financing, a seller who gets
          cold feet, or due diligence findings that make the acquisition unworkable, broken deals
          are a painful but normal part of the search fund journey.
        </p>
        <p>
          Approximately 40-50% of deals that reach LOI stage in SME acquisitions ultimately fail
          to close. For search fund searchers, experiencing 1-2 broken deals before closing is
          typical. This guide covers how to manage the fallout, extract lessons, and restart your
          search effectively.
        </p>
      </div>

      <h2 className={h2Class}>Why Deals Fall Apart: Common Causes</h2>

      <div className={bodyClass}>
        <p>
          Understanding why deals fail helps you spot warning signs earlier and potentially prevent
          future failures. Here are the most common causes, ranked by frequency:
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Due diligence findings (35% of failures):</strong>{" "}
            <Link href="/learn/dd-red-flags" className="text-apple-accent hover:underline">
              Red flags
            </Link>{" "}
            like quality of earnings issues, undisclosed liabilities, legal problems, customer
            concentration, or environmental concerns. These are actually the &quot;best&quot;
            reasons for a deal to fail - the process worked as designed.
          </li>
          <li>
            <strong>Financing falls through (20%):</strong> Lender pulls commitment, SBA underwriting
            fails, investor backing collapses, or the debt-to-equity structure doesn&apos;t work
            at the negotiated price.
          </li>
          <li>
            <strong>Seller changes mind (15%):</strong> Cold feet, family pressure, health
            improvement, or simply deciding they&apos;re not ready to sell. Often surfaces after
            the emotional reality of selling hits.
          </li>
          <li>
            <strong>Valuation gap widens (15%):</strong> Due diligence reveals the business
            isn&apos;t worth what you initially offered. EBITDA adjustments reduce earnings,
            growth assumptions prove optimistic, or comparable transactions suggest lower multiples.
          </li>
          <li>
            <strong>Key employee departures or customer losses (10%):</strong> Critical personnel
            announce they&apos;re leaving, or a major customer cancels, fundamentally changing
            the investment thesis.
          </li>
          <li>
            <strong>Third-party obstacles (5%):</strong> Landlord refuses to transfer lease,
            regulatory approval denied, or a required consent can&apos;t be obtained.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>The Financial Cost of Broken Deals</h2>

      <div className={bodyClass}>
        <p>
          Broken deals are expensive. Understanding the typical costs helps you budget appropriately
          and manage your financial runway:
        </p>

        <ul className={ulClass}>
          <li><strong>Legal fees:</strong> $15,000-50,000 for due diligence and purchase agreement negotiation</li>
          <li><strong>Quality of Earnings report:</strong> $15,000-40,000 (often the single largest cost)</li>
          <li><strong>Environmental assessments:</strong> $2,000-5,000 for Phase I ESA</li>
          <li><strong>Other diligence costs:</strong> $2,000-10,000 (IT audits, market research, consulting)</li>
          <li><strong>Travel expenses:</strong> $2,000-5,000 for site visits, meetings, and closing preparation</li>
          <li><strong>Opportunity cost:</strong> 2-4 months of time that could have been spent sourcing other deals</li>
        </ul>

        <p>
          <strong>Total typical cost: $35,000-100,000 per broken deal.</strong> This is why managing
          your{" "}
          <Link href="/learn/financial-runway-planning" className="text-apple-accent hover:underline">
            financial runway
          </Link>{" "}
          and staging diligence costs is critical. Don&apos;t spend $40K on a QoE report until
          you&apos;ve resolved the most likely deal-killers.
        </p>
      </div>

      <h2 className={h2Class}>The Emotional Impact</h2>

      <div className={bodyClass}>
        <p>
          The psychological toll of broken deals is often underestimated. Common emotional responses include:
        </p>

        <ul className={ulClass}>
          <li><strong>Grief and loss:</strong> You&apos;ve been mentally picturing yourself as CEO of that business. Losing it feels personal.</li>
          <li><strong>Self-doubt:</strong> &quot;Did I miss something? Am I cut out for this?&quot;</li>
          <li><strong>Frustration with the process:</strong> Feeling like the system is broken or unfair</li>
          <li><strong>Decision paralysis:</strong> Becoming overly cautious on the next deal, finding reasons to say no to everything</li>
          <li><strong>Desperation:</strong> The opposite reaction - rushing into the next deal to avoid &quot;wasting more time&quot;</li>
        </ul>

        <p>
          Both overcorrection responses (paralysis and desperation) are dangerous. Read our guide on{" "}
          <Link href="/learn/searcher-psychology" className="text-apple-accent hover:underline">
            searcher psychology
          </Link>{" "}
          for strategies to manage the emotional toll of the search process.
        </p>
      </div>

      <h2 className={h2Class}>Legal Obligations After Termination</h2>

      <div className={bodyClass}>
        <p>
          When a deal terminates, both parties have continuing obligations:
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Confidentiality:</strong> NDA obligations survive deal termination. You cannot
            use proprietary information learned during diligence for any purpose other than
            evaluating the transaction.
          </li>
          <li>
            <strong>Document destruction/return:</strong> Most NDAs require returning or destroying
            all confidential materials. Comply promptly and document your compliance.
          </li>
          <li>
            <strong>Non-solicitation:</strong> Some NDAs include restrictions on hiring the
            seller&apos;s employees for a period after deal termination.
          </li>
          <li>
            <strong>Deposit recovery:</strong> If you deposited earnest money, review the LOI/purchase
            agreement for refund provisions based on the termination reason.
          </li>
          <li>
            <strong>Expense reimbursement:</strong> Some LOIs allocate certain costs if one party
            terminates without cause. Review your agreements carefully.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Conducting a Post-Mortem</h2>

      <div className={bodyClass}>
        <p>
          Within 1-2 weeks of deal termination, conduct a structured post-mortem analysis.
          The goal is honest assessment, not self-flagellation:
        </p>

        <ol className={olClass}>
          <li><strong>Timeline reconstruction:</strong> Document key dates, decisions, and inflection points</li>
          <li><strong>Red flag inventory:</strong> List all warning signs - both those you caught and those you missed</li>
          <li><strong>Decision analysis:</strong> Evaluate key decisions. Would you make them again with the same information?</li>
          <li><strong>Process assessment:</strong> What worked well in your diligence process? What gaps existed?</li>
          <li><strong>Relationship review:</strong> How did communication with seller, advisors, and investors evolve?</li>
          <li><strong>Financial audit:</strong> Track all costs for future budgeting</li>
          <li><strong>Lesson codification:</strong> Write down 3-5 specific, actionable takeaways</li>
        </ol>
      </div>

      <h3 className={h3Class}>Common Lessons Searchers Learn</h3>

      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>&quot;Trust but verify&quot; seller representations:</strong> Sellers sometimes shade the truth or genuinely misunderstand their own financials. Independent verification is non-negotiable.</li>
          <li><strong>Red flags don&apos;t disappear:</strong> Issues that concern you at initial review will concern you more as diligence progresses. Trust your gut early.</li>
          <li><strong>Seller readiness is invisible:</strong> You can&apos;t determine from a few meetings whether a seller is truly ready to exit.</li>
          <li><strong>Speed kills quality:</strong> Rushing through diligence to meet arbitrary deadlines results in missed issues.</li>
          <li><strong>Complexity compounds risk:</strong> Each additional complicating factor (partnerships, real estate, regulatory) exponentially increases failure probability.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Communicating the Broken Deal</h2>

      <h3 className={h3Class}>To Your Investors</h3>

      <div className={bodyClass}>
        <p>Transparent, proactive communication is critical:</p>

        <ul className={ulClass}>
          <li><strong>Immediate notification:</strong> Tell investors the same day or next day</li>
          <li><strong>Honest explanation:</strong> Provide a clear, factual summary without defensiveness</li>
          <li><strong>Lessons learned:</strong> Share what you learned and how it improves future deal selection</li>
          <li><strong>Forward plan:</strong> Outline next steps and how you&apos;re restarting</li>
          <li><strong>Request feedback:</strong> Ask for their perspective and advice</li>
        </ul>

        <p>
          Investors fund searchers, not deals. They expect broken deals. What they don&apos;t
          expect is poor communication, lack of self-awareness, or repeated identical mistakes.
        </p>
      </div>

      <h3 className={h3Class}>To the Seller</h3>

      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Exit gracefully:</strong> Final communication should be professional and concise</li>
          <li><strong>Avoid blame:</strong> Don&apos;t criticize the seller through broker channels</li>
          <li><strong>Leave the door open:</strong> Sellers who go back to market sometimes prefer buyers they already know</li>
        </ul>
      </div>

      <h3 className={h3Class}>To Brokers and Intermediaries</h3>

      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Debrief honestly:</strong> Share what happened diplomatically</li>
          <li><strong>Pay promptly:</strong> If you owe any fees, pay immediately</li>
          <li><strong>Maintain the relationship:</strong> Express interest in future opportunities</li>
        </ul>

        <p>
          Brokers talk to each other. How you handle one broken deal affects whether other brokers
          will work with you. Build a reputation as a professional, serious buyer who acts in
          good faith.
        </p>
      </div>

      <h2 className={h2Class}>Restarting the Search</h2>

      <h3 className={h3Class}>Taking Strategic Time Off</h3>

      <div className={bodyClass}>
        <p>Don&apos;t immediately jump back into sourcing:</p>

        <ul className={ulClass}>
          <li><strong>1-2 weeks minimum:</strong> Take real time off to recover</li>
          <li><strong>Complete your post-mortem:</strong> Update search criteria before re-engaging the market</li>
          <li><strong>Meet with key investors:</strong> Debrief, realign, and confirm continued support</li>
          <li><strong>Pipeline audit:</strong> Review existing pipeline for opportunities you neglected while focused on the broken deal</li>
        </ul>

        <p>
          Rushing back without processing what happened leads to either pursuing the next deal too
          aggressively (desperation) or passing on good opportunities (overcorrection).
        </p>
      </div>

      <h3 className={h3Class}>Rebuilding Momentum</h3>

      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Recommit to volume:</strong> Get back to 10-15 new outreach calls per day to rebuild your{" "}
            <Link href="/learn/deal-funnel-metrics" className="text-apple-accent hover:underline">
              deal funnel
            </Link>
          </li>
          <li><strong>Start with lower-stakes engagement:</strong> Coffee meetings and preliminary calls to rebuild confidence</li>
          <li><strong>Reactivate your network:</strong> Signal to intermediaries and advisors that you&apos;re back in market</li>
          <li><strong>Refresh materials:</strong> Update outreach templates, LinkedIn, and any marketing materials</li>
          <li><strong>Pursue a quick win:</strong> Complete an industry research project or investor update to generate momentum</li>
        </ol>
      </div>

      <h3 className={h3Class}>Avoiding Overcorrection</h3>

      <div className={bodyClass}>
        <p>Common overcorrections to watch for:</p>

        <ul className={ulClass}>
          <li>If the last deal failed on valuation - don&apos;t lowball every subsequent opportunity</li>
          <li>If the seller backed out - don&apos;t assume every seller is unreliable</li>
          <li>If diligence revealed issues - don&apos;t become paralyzed by every minor concern</li>
          <li>If the deal was too complex - don&apos;t only pursue overly simple businesses that lack growth potential</li>
          <li>If financing fell through - don&apos;t avoid good deals requiring creative capital structures</li>
        </ul>

        <p>
          The right response is detailed adjustment, not binary reversal. Each deal should make
          you slightly more sophisticated, not dramatically more conservative or aggressive.
        </p>
      </div>

      <h2 className={h2Class}>When to Walk Away vs. When to Fight</h2>

      <h3 className={h3Class}>Clear Walk-Away Signals</h3>

      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Material financial misrepresentation:</strong> Seller knowingly provided false financials</li>
          <li><strong>Undisclosed litigation:</strong> Significant legal issues hidden from you</li>
          <li><strong>Critical customer loss:</strong> Top customer (70%+ revenue) signals departure</li>
          <li><strong>Regulatory violations:</strong> Business operating outside compliance with material penalties likely</li>
          <li><strong>Pattern of dishonesty:</strong> Multiple material omissions that destroy trust</li>
          <li><strong>Fundamental thesis break:</strong> Core investment assumptions prove incorrect</li>
        </ul>
      </div>

      <h3 className={h3Class}>Worth Fighting For</h3>

      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Price disagreements within range:</strong> A 10-15% valuation gap is often negotiable with creative structuring</li>
          <li><strong>Seller anxiety:</strong> Cold feet can be resolved with reassurance, extended timelines, or earnout provisions</li>
          <li><strong>Third-party delays:</strong> Consent approvals taking longer but still achievable</li>
          <li><strong>Remediable issues:</strong> Problems found in diligence that can be fixed pre- or post-closing</li>
          <li><strong>Financing structure:</strong> One lender said no, but other paths remain viable</li>
        </ul>

        <p>
          Great deals aren&apos;t perfect - they&apos;re good deals with solvable problems.
          Learning to distinguish solvable from fatal is what separates successful searchers.
        </p>
      </div>

      <h2 className={h2Class}>Statistics: How Many Deals Fail?</h2>

      <div className={bodyClass}>
        <p>
          Context helps normalize the experience:
        </p>

        <ul className={ulClass}>
          <li>Searchers review <strong>80-100+ companies</strong> on average before closing an acquisition</li>
          <li><strong>5-10%</strong> of companies reviewed reach LOI stage</li>
          <li><strong>50-60%</strong> of LOIs result in a closed transaction</li>
          <li>The average successful search takes <strong>18-24 months</strong></li>
          <li><strong>25-30%</strong> of traditional search funds do not complete an acquisition (Stanford GSB, 2024)</li>
        </ul>

        <p>
          If you haven&apos;t closed yet, you&apos;re in good company. The question is whether
          you&apos;re learning and improving with each attempt. For more on managing the scenario
          where search doesn&apos;t lead to acquisition, see our guide on{" "}
          <Link href="/learn/search-fund-no-acquisition" className="text-apple-accent hover:underline">
            what happens if you don&apos;t acquire a company
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>

      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Broken deals are normal:</strong> 40-50% of LOIs don&apos;t close. Budget for it financially and emotionally.</li>
          <li><strong>Stage your diligence costs:</strong> Address likely deal-killers before spending on expensive QoE reports.</li>
          <li><strong>Conduct a post-mortem:</strong> Every broken deal contains lessons. Document them systematically.</li>
          <li><strong>Communicate transparently:</strong> Your reputation with investors, brokers, and sellers depends on how you handle failures.</li>
          <li><strong>Take time to recover:</strong> 1-2 weeks off prevents desperation or paralysis on the next deal.</li>
          <li><strong>Adjust, don&apos;t overcorrect:</strong> Refine your criteria and process based on specific lessons, not emotional reactions.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>

      <ul className={ulClass}>
        <li>
          <Link href="/learn/searcher-psychology" className="text-apple-accent hover:underline">
            Searcher Psychology: Managing Stress, Uncertainty & Isolation
          </Link>{" "}- Mental health strategies for the search journey
        </li>
        <li>
          <Link href="/learn/dd-red-flags" className="text-apple-accent hover:underline">
            Red Flags in Due Diligence: When to Walk Away
          </Link>{" "}- Early warning signs
        </li>
        <li>
          <Link href="/learn/exclusivity-agreement" className="text-apple-accent hover:underline">
            Exclusivity Agreements in M&A
          </Link>{" "}- Managing the exclusivity period effectively
        </li>
        <li>
          <Link href="/learn/deal-funnel-metrics" className="text-apple-accent hover:underline">
            Deal Funnel Metrics: Tracking Your Deal Flow
          </Link>{" "}- Understanding normal conversion rates
        </li>
        <li>
          <Link href="/learn/search-fund-no-acquisition" className="text-apple-accent hover:underline">
            What Happens If You Don&apos;t Acquire a Company?
          </Link>{" "}- Career paths for searchers who don&apos;t close
        </li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>How much should a searcher budget for a broken deal?</h3>
      <p className={bodyClass}>
        Based on data from the Stanford GSB 2024 Search Fund Study and community surveys on Searchfunder.com, a single broken deal typically costs $35,000-$100,000 in direct expenses. The largest line items are legal fees ($15,000-$50,000) and the Quality of Earnings report ($15,000-$40,000). Traditional search funds should budget for 1-2 broken deals during the search phase, implying a reserve of $70,000-$200,000. Self-funded searchers can reduce exposure by staging diligence costs carefully -- resolving likely deal-killers (seller motivation, financing feasibility, major{" "}
        <Link href="/learn/dd-red-flags" className="text-apple-accent hover:underline">red flags</Link>) before commissioning expensive third-party reports.
      </p>

      <h3 className={h3Class}>Should you re-approach a seller after a deal falls apart?</h3>
      <p className={bodyClass}>
        Yes, in many cases. According to IESE's 2024 International Search Fund Study, approximately 10-15% of businesses that return to market after a broken deal eventually sell to a prior interested buyer. The key is timing and approach: wait at least 3-6 months unless the seller initiates contact, maintain a professional relationship through the broker or intermediary, and avoid relitigating the original deal terms. If the deal broke due to financing rather than fundamental business issues, a re-approach with a revised capital structure can succeed. However, if the deal failed due to seller dishonesty or material misrepresentation, it is generally wise to move on permanently.
      </p>

      <h3 className={h3Class}>How do experienced investors view a searcher who has had a broken deal?</h3>
      <p className={bodyClass}>
        Experienced search fund investors generally view one or two broken deals as a normal, even healthy, part of the search process. According to Stanford GSB data, 25-30% of traditional search funds do not complete an acquisition at all, so broken deals are expected. What matters to investors is how you handle the aftermath: transparent communication within 24-48 hours, a structured post-mortem demonstrating self-awareness, and concrete lessons that improve your future deal selection. Investors become concerned when a searcher has three or more broken deals on the same type of issue (e.g., repeated financing failures or repeated QoE problems), as this suggests a pattern rather than bad luck.
      </p>

      <h2 className={h2Class}>Sources</h2>

      <ul className={ulClass}>
        <li>Stanford Graduate School of Business, <em>2024 Search Fund Study: Selected Observations</em> (2024)</li>
        <li>Harvard Business Review, &quot;Why M&A Deals Fail and How to Prevent It&quot; (2023)</li>
        <li>IESE Business School, <em>International Search Fund Study</em> (2024)</li>
        <li>Bain & Company, <em>Global M&A Report</em> (2024)</li>
        <li>Searchfunder.com, <em>Community Survey: Broken Deal Experiences</em> (2023)</li>
      </ul>
    </article>
  );
}
