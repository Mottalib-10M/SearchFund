import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function DDRedFlagsArticle() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <h1 className={h1Class}>Red Flags in Due Diligence: When to Walk Away</h1>

      <p className={bodyClass}>
        Every searcher dreams of finding that perfect acquisition target. But the most valuable skill in the search fund journey isn't recognizing great opportunities—it's knowing when to walk away from bad ones. Due diligence exists precisely to uncover issues before they become your problems, yet many first-time searchers fall into the trap of trying to rationalize away red flags rather than heeding their warnings.
      </p>

      <p className={bodyClass}>
        This guide explores the critical warning signs that should make you pause, renegotiate, or walk away entirely. Drawing from decades of search fund experience and countless due diligence processes, we'll examine financial, operational, legal, customer, and cultural red flags that separate successful acquisitions from career-defining mistakes.
      </p>

      <div className="bg-gray-50 border-l-4 border-apple-accent p-6 my-8">
        <p className="text-sm font-semibold text-gray-900 mb-2">READING TIME</p>
        <p className="text-2xl font-bold text-apple-accent">11 min read</p>
      </div>

      <h2 className={h2Class}>Why Walking Away Is the Hardest Decision</h2>

      <p className={bodyClass}>
        After months of searching, hundreds of cold calls, and dozens of rejected proposals, finally getting to due diligence feels like a victory. You've built rapport with the seller, assembled your team of advisors, and started imagining yourself running the business. The psychological investment is enormous, and the pressure to close a deal intensifies with every passing month.
      </p>

      <p className={bodyClass}>
        This is exactly when you're most vulnerable to confirmation bias. Your investors are waiting. Your timeline is ticking. Your ego wants to prove you can get a deal done. But the statistics are sobering: searchers who walk away from problematic deals during due diligence have significantly better long-term outcomes than those who proceed with "fixable" red flags.
      </p>

      <p className={bodyClass}>
        The best searchers maintain what one Stanford professor calls "disciplined opportunism"—the ability to pursue opportunities aggressively while maintaining strict quality standards. They understand that walking away from a bad deal isn't failure; it's the most important form of risk management available to them.
      </p>

      <h2 className={h2Class}>Financial Red Flags</h2>

      <h3 className={h3Class}>Declining Revenue Trends</h3>

      <p className={bodyClass}>
        While one bad quarter doesn't necessarily doom a deal, sustained revenue decline demands serious scrutiny. Look beyond the seller's explanations about "temporary" market conditions or "easily reversible" strategic decisions. Ask yourself:
      </p>

      <ul className={ulClass}>
        <li>Has revenue declined for two or more consecutive years?</li>
        <li>Is the decline accelerating rather than stabilizing?</li>
        <li>Are competitors growing while this business shrinks?</li>
        <li>Does the seller's explanation match the data you're seeing?</li>
      </ul>

      <p className={bodyClass}>
        One searcher recalled reviewing a software services firm where revenue had declined 15% annually for three years. The seller attributed it to "natural market consolidation" and priced the business based on historical EBITDA. Post-acquisition, the new owner discovered that a major client had developed in-house capabilities, two others were planning to switch vendors, and the decline was structural, not cyclical. The business never recovered.
      </p>

      <h3 className={h3Class}>Margin Compression</h3>

      <p className={bodyClass}>
        Declining margins often signal deeper problems than declining revenue. Margins compress when a business loses pricing power, faces rising input costs it can't pass through, or experiences operational inefficiencies. Critical questions include:
      </p>

      <ul className={ulClass}>
        <li>Have gross margins declined more than 3-5 percentage points over three years?</li>
        <li>Is the business cutting prices to maintain volume?</li>
        <li>Are customer acquisition costs rising while lifetime value stays flat?</li>
        <li>Has the business stopped investing in efficiency improvements?</li>
      </ul>

      <p className={bodyClass}>
        Margin compression frequently indicates commoditization, competitive pressure, or operational decline. Unless you have a specific, proven playbook to reverse the trend, margin compression should be treated as a serious red flag.
      </p>

      <h3 className={h3Class}>Aggressive Add-Backs</h3>

      <p className={bodyClass}>
        Every seller wants to maximize EBITDA for valuation purposes, leading to "add-backs" of supposedly one-time or non-recurring expenses. Reasonable add-backs might include seller compensation above market rates, one-time legal settlements, or truly discretionary expenses. Aggressive add-backs are warning signs of either seller desperation or financial manipulation.
      </p>

      <p className={bodyClass}>
        Red flags in add-backs include:
      </p>

      <ul className={ulClass}>
        <li>Add-backs exceeding 20% of stated EBITDA</li>
        <li>"One-time" expenses that recur annually with different descriptions</li>
        <li>Add-backs for normal business expenses like marketing, maintenance, or technology</li>
        <li>Vague categories like "non-recurring professional fees" without documentation</li>
        <li>Family member expenses that won't actually disappear post-sale</li>
      </ul>

      <p className={bodyClass}>
        One searcher encountered a manufacturing business where the seller added back $800K on $2.1M of stated EBITDA. The add-backs included "excess" owner compensation (fair), but also equipment maintenance ("one-time catch-up"), IT upgrades ("non-recurring"), and marketing expenses ("discretionary"). Post-close, the new owner discovered that equipment maintenance was actually deferred, IT systems required ongoing investment, and marketing cuts led to immediate customer acquisition problems. Real EBITDA was closer to $1.5M, not $2.1M.
      </p>

      <h3 className={h3Class}>Cash vs. Accrual Discrepancies</h3>

      <p className={bodyClass}>
        Significant differences between cash flow and accrual-based earnings often indicate aggressive revenue recognition, uncollectible receivables, or deferred expenses. When due diligence reveals large gaps, investigate thoroughly:
      </p>

      <ul className={ulClass}>
        <li>Are accounts receivable aging significantly?</li>
        <li>Has the business accelerated revenue recognition?</li>
        <li>Are accounts payable stretching beyond normal terms?</li>
        <li>Is inventory building without corresponding sales?</li>
      </ul>

      <p className={bodyClass}>
        These discrepancies often signal either financial distress (can't collect receivables, delaying payables) or earnings management (recognizing revenue before it's truly earned). Either scenario represents a major red flag.
      </p>

      <h2 className={h2Class}>Operational Red Flags</h2>

      <h3 className={h3Class}>Key Person Dependency</h3>

      <p className={bodyClass}>
        Nearly every small business has some degree of key person risk—after all, you're buying it because the current owner has built something valuable. But extreme dependency on one or two individuals can make a business untransferable, regardless of price or terms.
      </p>

      <p className={bodyClass}>
        Warning signs of dangerous key person dependency:
      </p>

      <ul className={ulClass}>
        <li>The seller personally manages all major customer relationships</li>
        <li>No documented processes for critical business functions</li>
        <li>The management team has no decision-making authority</li>
        <li>Customers explicitly state they work with the business "because of [owner]"</li>
        <li>Key employees indicate they might leave when the owner sells</li>
      </ul>

      <p className={bodyClass}>
        One investor recalled a professional services firm where the founder had every client relationship, personally approved all project work, and made every significant decision. The business had strong financials, but customer interviews revealed that clients valued the owner's specific expertise and relationships. When the searcher asked about transition planning, the seller had no concrete plan beyond "I'll introduce you to everyone." The deal fell apart when the searcher couldn't get comfort that customer relationships would transfer.
      </p>

      <h3 className={h3Class}>Deferred Maintenance</h3>

      <p className={bodyClass}>
        Sellers preparing for exit often defer capital expenditures to maximize short-term cash flow and EBITDA. This creates a hidden liability for buyers who must make these investments immediately post-close. Deferred maintenance appears in various forms:
      </p>

      <ul className={ulClass}>
        <li>Physical assets: outdated equipment, deteriorating facilities, aging vehicle fleets</li>
        <li>Technology: legacy systems, unsupported software, inadequate cybersecurity</li>
        <li>Human capital: no training programs, compensation below market, minimal development</li>
        <li>Marketing: outdated branding, neglected digital presence, stale messaging</li>
      </ul>

      <p className={bodyClass}>
        A manufacturing searcher discovered this red flag the hard way. The target company's financials looked strong, with EBITDA margins above industry average. But the quality of earnings analysis revealed that capital expenditures had dropped from $400K annually to under $100K over the past three years. The machinery inspection found critical equipment near end-of-life, requiring an estimated $1.2M in replacements within 18 months. The seller refused to adjust the purchase price, and the searcher walked away.
      </p>

      <h3 className={h3Class}>High Employee Turnover</h3>

      <p className={bodyClass}>
        Employee turnover data often reveals cultural or operational problems that aren't visible in financial statements. While some industries naturally have higher turnover, significant departures of key employees or consistently high churn rates signal deeper issues:
      </p>

      <ul className={ulClass}>
        <li>Has the business lost multiple senior managers in the past 18 months?</li>
        <li>Is turnover accelerating rather than stabilizing?</li>
        <li>Do exit interviews reveal consistent themes about culture, compensation, or leadership?</li>
        <li>Are employees leaving for competitors or the industry generally?</li>
      </ul>

      <p className={bodyClass}>
        During due diligence, request turnover data by role and tenure. High turnover among long-tenured employees particularly warrants investigation—these departures often indicate that people who knew the business best chose to leave rather than stay through transition.
      </p>

      <h2 className={h2Class}>Legal Red Flags</h2>

      <h3 className={h3Class}>Pending Litigation</h3>

      <p className={bodyClass}>
        Not all litigation represents a deal-killer, but material lawsuits create risk, distraction, and potential financial liability. During due diligence, your legal team should review all pending or threatened litigation, but pay special attention to:
      </p>

      <ul className={ulClass}>
        <li>Customer disputes involving product defects or service failures</li>
        <li>Employment claims, particularly class actions or discrimination cases</li>
        <li>Intellectual property disputes that could affect core operations</li>
        <li>Environmental claims or regulatory enforcement actions</li>
        <li>Partnership or shareholder disputes</li>
      </ul>

      <p className={bodyClass}>
        Evaluate both the potential financial exposure and the signal the litigation sends about business operations. A pattern of customer disputes might indicate quality problems. Employment claims could reveal cultural issues. Environmental violations might signal systematic compliance failures.
      </p>

      <p className={bodyClass}>
        Importantly, assess the seller's willingness to address litigation risk. Are they proposing escrow holdbacks for potential settlements? Providing detailed documentation and legal assessments? Or minimizing the issues and refusing to adjust terms? Their response often matters as much as the litigation itself.
      </p>

      <h3 className={h3Class}>Regulatory Compliance Issues</h3>

      <p className={bodyClass}>
        Businesses in regulated industries face particular scrutiny. Historical compliance violations, ongoing regulatory investigations, or systematic non-compliance represent serious red flags that can result in fines, operating restrictions, or even business closure.
      </p>

      <p className={bodyClass}>
        Critical questions for regulated businesses:
      </p>

      <ul className={ulClass}>
        <li>Are all required licenses, permits, and certifications current and in good standing?</li>
        <li>Has the business received regulatory notices, warnings, or violations?</li>
        <li>Do internal processes ensure ongoing compliance?</li>
        <li>Are there pending regulatory changes that could affect operations?</li>
      </ul>

      <p className={bodyClass}>
        One healthcare services searcher discovered that the target company had received multiple notices from state regulators about documentation deficiencies. The seller characterized these as "administrative issues" that were "completely resolved." Further investigation revealed a pattern of systematic non-compliance, with the business only addressing issues when regulators threatened enforcement. The searcher concluded that fixing the compliance culture would require significant management attention and cost, ultimately walking away from the deal.
      </p>

      <h3 className={h3Class}>Intellectual Property Disputes</h3>

      <p className={bodyClass}>
        For many small businesses, intellectual property represents a core asset—whether patents, trademarks, trade secrets, or proprietary processes. IP disputes or unclear ownership can threaten the entire value proposition.
      </p>

      <p className={bodyClass}>
        Red flags in IP due diligence:
      </p>

      <ul className={ulClass}>
        <li>Disputed ownership of core IP or technology</li>
        <li>Claims that the business infringes others' IP rights</li>
        <li>Employees or contractors who may own work product</li>
        <li>Lack of documentation establishing IP ownership</li>
        <li>Pending patent applications that may not be granted</li>
      </ul>

      <p className={bodyClass}>
        A software company searcher encountered this issue when IP diligence revealed that a key product component had been developed by a contractor without a proper assignment agreement. The contractor claimed partial ownership and threatened litigation if the sale proceeded without compensation. The dispute ultimately required a negotiated settlement that reduced deal value significantly.
      </p>

      <h2 className={h2Class}>Customer Red Flags</h2>

      <h3 className={h3Class}>Customer Concentration Risk</h3>

      <p className={bodyClass}>
        While some degree of customer concentration is normal in small businesses, extreme dependence on one or two customers creates existential risk. The standard threshold is the "20% rule"—if any single customer represents more than 20% of revenue, you have concentration risk that requires mitigation.
      </p>

      <p className={bodyClass}>
        Questions to evaluate concentration risk:
      </p>

      <ul className={ulClass}>
        <li>What percentage of revenue comes from the top customer? Top three? Top ten?</li>
        <li>Are these relationships contractual or at-will?</li>
        <li>How long have these customers been with the business?</li>
        <li>What would happen if the largest customer left?</li>
        <li>Can major customers switch vendors easily?</li>
      </ul>

      <p className={bodyClass}>
        One searcher evaluated a marketing services firm where the largest customer represented 45% of revenue on a month-to-month contract. During customer diligence calls, this client mentioned they were "evaluating options" and "appreciating the current owner's personal involvement." The searcher requested a contractual commitment or price reduction to account for the risk. When the seller refused both, the searcher walked away. Six months later, the searcher learned that the major customer had indeed left, and the business was in distress.
      </p>

      <h3 className={h3Class}>Declining Customer Retention</h3>

      <p className={bodyClass}>
        Customer retention metrics often reveal problems before they appear in financial statements. Declining retention indicates customer satisfaction issues, competitive pressure, or deteriorating value proposition. During due diligence, analyze:
      </p>

      <ul className={ulClass}>
        <li>Annual customer retention rates for the past 3-5 years</li>
        <li>Cohort analysis showing retention by customer vintage</li>
        <li>Reasons for customer departures (price, service, competition, etc.)</li>
        <li>Net revenue retention (are remaining customers buying more or less?)</li>
      </ul>

      <p className={bodyClass}>
        A B2B services searcher discovered that while overall revenue was growing, customer retention had declined from 92% to 78% over three years. New customer acquisition was masking the churn, but the cohort analysis revealed that customer lifetime value was declining significantly. Investigation showed that a new competitor had entered the market with better technology, and the target company's service quality had slipped. The business model was fundamentally deteriorating despite apparent growth.
      </p>

      <h3 className={h3Class}>Contract Non-Renewals and At-Risk Revenue</h3>

      <p className={bodyClass}>
        In businesses with contractual revenue, upcoming renewals represent both opportunity and risk. During due diligence, create a detailed renewal schedule and assess risk for each major contract:
      </p>

      <ul className={ulClass}>
        <li>Which contracts expire in the 12 months post-close?</li>
        <li>What percentage of revenue is up for renewal?</li>
        <li>Have any customers indicated they won't renew?</li>
        <li>Are renewals typically negotiated (opportunity for price increases) or automatic?</li>
      </ul>

      <p className={bodyClass}>
        The worst-case scenario is discovering post-close that major customers were waiting for ownership transition to renegotiate or exit. Insist on customer reference calls during due diligence, and pay attention to any hedging about future commitment. If customers seem lukewarm about continuing the relationship, investigate aggressively.
      </p>

      <h2 className={h2Class}>Cultural Red Flags</h2>

      <p className={bodyClass}>
        Culture doesn't appear on the balance sheet, but it determines whether you can successfully operate the business post-acquisition. Cultural red flags are often subtle but devastating:
      </p>

      <ul className={ulClass}>
        <li><strong>Fear-based culture:</strong> Employees afraid to speak honestly, no constructive disagreement, excessive deference to authority</li>
        <li><strong>Ethical compromises:</strong> Casual discussions of cutting corners, regulatory workarounds, or questionable business practices</li>
        <li><strong>Us vs. them mentality:</strong> Deep divisions between departments, locations, or employee groups</li>
        <li><strong>Resistance to change:</strong> "We've always done it this way" mindset, no process improvement culture</li>
        <li><strong>Gossip and politics:</strong> Employees focused on internal dynamics rather than customers and results</li>
      </ul>

      <p className={bodyClass}>
        One searcher spent time on-site during due diligence and noticed that employees became noticeably quieter when the owner appeared. Private conversations revealed that the owner had an explosive temper and frequently berated employees publicly. While the business had solid financials, the searcher concluded that the toxic culture would require complete management overhaul and likely result in employee departures post-close. The cultural red flag was enough to walk away.
      </p>

      <h2 className={h2Class}>The Sunk Cost Trap</h2>

      <p className={bodyClass}>
        By the time you're deep in due diligence, you've invested significant time, money, and emotional energy. You've paid for quality of earnings analysis, legal reviews, environmental assessments, and industry consultants. You've spent months building relationships and planning your first 100 days. The pressure to justify these investments by closing the deal is enormous.
      </p>

      <p className={bodyClass}>
        This is the sunk cost trap, and it destroys searcher returns more than any other psychological bias. The rational approach is clear: sunk costs are irrelevant to the decision of whether to proceed. The only question that matters is whether this business, at this price and terms, represents a good investment going forward.
      </p>

      <p className={bodyClass}>
        Strategies to avoid the sunk cost trap:
      </p>

      <ul className={ulClass}>
        <li>Establish kill criteria before due diligence begins and commit to honoring them</li>
        <li>Create a pre-mortem: imagine the deal failed spectacularly and list why</li>
        <li>Consult investors and advisors who aren't emotionally invested in this specific deal</li>
        <li>Remember that the cost of a bad acquisition far exceeds due diligence expenses</li>
        <li>View walking away as success—you identified problems before they became yours</li>
      </ul>

      <h2 className={h2Class}>How to Negotiate Through Red Flags vs. Walk Away</h2>

      <p className={bodyClass}>
        Not every red flag requires walking away. Some issues can be negotiated through price adjustments, earnouts, seller financing, or operational fixes. The key is distinguishing between solvable problems and fundamental flaws.
      </p>

      <h3 className={h3Class}>Issues You Can Negotiate</h3>

      <p className={bodyClass}>
        Consider negotiating when red flags are:
      </p>

      <ul className={ulClass}>
        <li><strong>Quantifiable:</strong> Deferred maintenance, working capital shortfalls, or one-time cleanup costs</li>
        <li><strong>Controllable:</strong> Inefficiencies you have specific expertise to fix</li>
        <li><strong>Temporary:</strong> Short-term revenue dips with clear recovery paths</li>
        <li><strong>Mitigatable:</strong> Risks that can be addressed through earnouts, escrows, or seller involvement</li>
      </ul>

      <p className={bodyClass}>
        Negotiation strategies include:
      </p>

      <ol className={olClass}>
        <li><strong>Price adjustment:</strong> Reduce purchase price to reflect true normalized earnings or required near-term investments</li>
        <li><strong>Earnout structure:</strong> Tie a portion of purchase price to future performance, aligning seller incentives with disclosed financials</li>
        <li><strong>Extended seller involvement:</strong> Keep the seller engaged during transition to transfer relationships and address key person risk</li>
        <li><strong>Escrow for known risks:</strong> Hold back funds to cover potential liabilities like pending litigation or warranty claims</li>
        <li><strong>Seller note with performance contingencies:</strong> Structure debt to the seller that can be adjusted if disclosed financials don't materialize</li>
      </ol>

      <h3 className={h3Class}>Issues That Require Walking Away</h3>

      <p className={bodyClass}>
        Walk away when red flags involve:
      </p>

      <ul className={ulClass}>
        <li><strong>Fundamental business model problems:</strong> Structural industry decline, obsolete products, or broken unit economics</li>
        <li><strong>Untransferable customer relationships:</strong> Revenue that exists only because of the seller's personal relationships</li>
        <li><strong>Ethical or legal issues:</strong> Systematic compliance violations, financial manipulation, or questionable business practices</li>
        <li><strong>Cultural toxicity:</strong> Dysfunctional organizations that would require complete rebuilding</li>
        <li><strong>Seller dishonesty:</strong> Material misrepresentations or unwillingness to address legitimate concerns</li>
      </ul>

      <p className={bodyClass}>
        The last point is particularly important. If you catch the seller in significant misrepresentations during due diligence, assume there are more you haven't found. A relationship built on distrust is doomed from the start.
      </p>

      <h2 className={h2Class}>Building Your Kill Criteria</h2>

      <p className={bodyClass}>
        The best time to decide when you'll walk away is before you're emotionally invested in a specific deal. Experienced searchers develop clear "kill criteria"—non-negotiable standards that, if violated, automatically end the pursuit.
      </p>

      <p className={bodyClass}>
        Example kill criteria from successful searchers:
      </p>

      <ul className={ulClass}>
        <li>"Any single customer over 30% of revenue without a 3-year contract"</li>
        <li>"Revenue decline for two consecutive years without compelling growth plan"</li>
        <li>"Quality of earnings finding EBITDA more than 15% below seller representations"</li>
        <li>"Pending material litigation without full escrow for maximum exposure"</li>
        <li>"Any instance of the seller knowingly misrepresenting material facts"</li>
        <li>"Inability to verify 80% or more of claimed revenue through customer calls"</li>
        <li>"Employee interviews revealing systematic cultural or ethical problems"</li>
      </ul>

      <p className={bodyClass}>
        Share your kill criteria with investors and advisors before due diligence begins. This creates accountability and gives you trusted voices who can remind you of your standards when emotion threatens to override judgment.
      </p>

      <h2 className={h2Class}>Post-Walk-Away: Getting Back on Track</h2>

      <p className={bodyClass}>
        Walking away from a deal after significant investment feels like failure, but it's actually one of the most important capabilities separating successful searchers from failed ones. The days after walking away are critical for maintaining momentum and morale.
      </p>

      <p className={bodyClass}>
        Steps to take immediately after walking away:
      </p>

      <ol className={olClass}>
        <li><strong>Document lessons learned:</strong> What red flags did you miss initially? What would you do differently? How can you screen better up front?</li>
        <li><strong>Debrief with investors:</strong> Share your decision and rationale. Good investors respect discipline and will reinforce that you made the right call.</li>
        <li><strong>Review your pipeline:</strong> Re-engage with other opportunities you may have deprioritized during due diligence.</li>
        <li><strong>Refine your screening criteria:</strong> Use what you learned to improve initial evaluation and avoid similar issues.</li>
        <li><strong>Maintain seller relationships:</strong> Even if this deal didn't work, the seller might refer you to others or return with different terms later.</li>
      </ol>

      <p className={bodyClass}>
        One successful searcher walked away from three deals during due diligence before closing on the fourth. Each failed deal taught valuable lessons about screening, due diligence, and negotiation. The business she ultimately acquired performed exceptionally well, and she credits the discipline to walk away from the first three as crucial to her success.
      </p>

      <p className={bodyClass}>
        Remember: your reputation in the search fund community is built not just on the deals you close, but on the judgment you demonstrate throughout the process. Walking away from bad deals, explaining your reasoning clearly, and maintaining high standards earns respect from investors, brokers, and sellers alike.
      </p>

      <div className="bg-gray-50 border-l-4 border-apple-accent p-6 my-8">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Walking away from bad deals is essential to long-term success; don't fall into the sunk cost trap</li>
          <li>• Financial red flags include declining revenue, margin compression, aggressive add-backs, and cash/accrual discrepancies</li>
          <li>• Operational issues like key person dependency, deferred maintenance, and high turnover signal deeper problems</li>
          <li>• Legal red flags—litigation, regulatory issues, IP disputes—create risk beyond financial exposure</li>
          <li>• Customer concentration, declining retention, and at-risk contracts threaten future revenue</li>
          <li>• Cultural toxicity can make an otherwise good business untransferable</li>
          <li>• Establish kill criteria before due diligence to maintain objectivity under pressure</li>
          <li>• Some red flags can be negotiated through price, earnouts, or escrows; others require walking away</li>
          <li>• Seller dishonesty is an automatic disqualifier—assume you haven't found all misrepresentations</li>
          <li>• Document lessons from failed deals to improve screening and avoid repeating mistakes</li>
        </ul>
      </div>

      <h2 className={h2Class}>Sources</h2>

      <ul className={ulClass}>
        <li>
          Stanford Graduate School of Business,{" "}
          <a
            href="https://www.gsb.stanford.edu/faculty-research/centers-initiatives/ces/research/search-funds"
            className="text-apple-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search Fund Research and Primer
          </a>
        </li>
        <li>
          International Business Brokers Association (IBBA),{" "}
          <a
            href="https://www.ibba.org/market-research/"
            className="text-apple-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Market Research and Due Diligence Standards
          </a>
        </li>
        <li>
          Harvard Business Review,{" "}
          <a
            href="https://hbr.org/topic/mergers-and-acquisitions"
            className="text-apple-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            M&A Due Diligence Best Practices
          </a>
        </li>
        <li>
          Pacific Lake Partners,{" "}
          <a
            href="https://www.pacificlakepartners.com/resources"
            className="text-apple-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search Fund Due Diligence Resources
          </a>
        </li>
        <li>
          Search Fund Accelerator,{" "}
          <a
            href="https://searchfundaccelerator.com/"
            className="text-apple-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Due Diligence Training and Materials
          </a>
        </li>
      </ul>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-600 italic">
          Related articles:{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            The Complete Due Diligence Checklist
          </Link>
          ,{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
            Quality of Earnings Analysis
          </Link>
          ,{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            Business Valuation Fundamentals
          </Link>
          , and{" "}
          <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">
            Negotiation Tactics for Searchers
          </Link>
        </p>
      </div>
    </article>
  );
}
