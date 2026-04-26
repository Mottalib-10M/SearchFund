import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SearchFundNoAcquisitionArticle() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <h1 className={h1Class}>What Happens If a Searcher Doesn&apos;t Find a Company?</h1>

      <p className={bodyClass}>
        Not every search fund story ends with a successful acquisition. While the entrepreneurship through acquisition (ETA) model has produced impressive returns for many searchers and investors, the reality is that a significant portion of search funds never complete an acquisition. Understanding what happens when a search fails is critical for anyone considering the ETA path - whether as a searcher or investor.
      </p>

      <p className={bodyClass}>
        The possibility of not finding a company is one of the defining risks of the search fund model. Unlike traditional employment where compensation is guaranteed, or venture capital where portfolio diversification mitigates individual failures, a searcher who doesn&apos;t acquire a company faces a unique set of challenges. This article explores the statistics, reasons, implications, and outcomes when searches don&apos;t culminate in acquisition.
      </p>

      <h2 className={h2Class}>The Statistics: About One-Third Don&apos;t Acquire</h2>

      <p className={bodyClass}>
        According to Stanford&apos;s 2024 Search Fund Study, approximately 33% of traditional search funds fail to complete an acquisition within their search period. This statistic has remained relatively consistent over the past two decades, representing a fundamental characteristic of the search fund model rather than a temporary anomaly.
      </p>

      <p className={bodyClass}>
        The breakdown is revealing:
      </p>

      <ul className={ulClass}>
        <li>Approximately 67% of traditional search funds successfully acquire a company</li>
        <li>33% wind down without completing an acquisition</li>
        <li>Self-funded searches have a slightly higher success rate (around 70-75%), likely due to greater flexibility in deal terms and timeline</li>
        <li>Searches that raise capital from experienced search fund investors have better acquisition rates than those with first-time investors</li>
        <li>Geographic markets matter - searchers in competitive markets like California and New York face more challenges than those in secondary markets</li>
      </ul>

      <p className={bodyClass}>
        These statistics highlight an important reality: even with strong credentials, dedicated effort, and investor backing, there&apos;s no guarantee of acquisition. The search fund model is inherently risky, and searchers must enter with realistic expectations about the possibility of failure.
      </p>

      <h2 className={h2Class}>Common Reasons Searches Fail</h2>

      <p className={bodyClass}>
        Understanding why searches fail can help prospective searchers assess risks and develop strategies to improve their odds. The most common reasons include:
      </p>

      <h3 className={h3Class}>1. Deal Flow Challenges</h3>

      <p className={bodyClass}>
        Many searchers struggle to generate sufficient quality deal flow. Despite contacting hundreds or thousands of business owners, finding businesses that meet search fund criteria (stable cash flow, growth potential, motivated seller, reasonable valuation) proves more difficult than anticipated. Competitive markets, broker concentration, and the general opacity of the lower middle market all contribute to deal flow challenges. Building a <Link href="/learn/proprietary-deal-flow" className="text-apple-accent hover:underline">proprietary deal sourcing strategy</Link> before launching can significantly improve your odds.
      </p>

      <h3 className={h3Class}>2. Inability to Close Deals</h3>

      <p className={bodyClass}>
        Some searchers generate strong deal flow but struggle to close transactions. Reasons include:
      </p>

      <ul className={ulClass}>
        <li>Valuation gaps - sellers&apos; expectations exceed what the searcher and investors are willing to pay</li>
        <li>Financing contingencies - inability to secure debt financing at favorable terms</li>
        <li>Due diligence discoveries - issues uncovered during diligence that make the deal unviable</li>
        <li>Seller hesitation - owners get cold feet or decide to remain in the business</li>
        <li>Competitive bids - strategic buyers or private equity firms outbid the searcher</li>
      </ul>

      <h3 className={h3Class}>3. Searcher Burnout and Personal Circumstances</h3>

      <p className={bodyClass}>
        The search process is grueling, often lasting 18-24 months or longer. The psychological toll of constant rejection, financial stress from living on a modest stipend, and personal life disruptions (relationship strain, family considerations, opportunity costs) lead some searchers to abandon the search before finding a company. Understanding <Link href="/learn/searcher-psychology" className="text-apple-accent hover:underline">the psychology of being a searcher</Link> and building resilience practices early can help prevent burnout.
      </p>

      <h3 className={h3Class}>4. Market Timing and Economic Conditions</h3>

      <p className={bodyClass}>
        Searchers who begin their search during economic downturns or credit market disruptions face unique challenges. While recessions can create buying opportunities, they also make financing more difficult to obtain and cause sellers to postpone exit plans. Conversely, strong economic conditions can inflate valuations beyond search fund parameters.
      </p>

      <h3 className={h3Class}>5. Investor Dynamics</h3>

      <p className={bodyClass}>
        Conflicts with investors - disagreements over deal quality, valuation, or searcher fit - can derail otherwise viable transactions. Searchers who struggle to maintain investor confidence or who face pressure to close deals that aren&apos;t ideal may find themselves without support at critical moments.
      </p>

      <h3 className={h3Class}>6. Searcher-Market Mismatch</h3>

      <p className={bodyClass}>
        Some searchers discover they&apos;re not well-matched to the industries or geographies they&apos;re targeting. A searcher with limited operational experience may struggle to attract sellers in manufacturing, while those uncomfortable with sales-driven businesses may find their options severely limited.
      </p>

      <h2 className={h2Class}>Financial Implications for the Searcher</h2>

      <p className={bodyClass}>
        When a search fund doesn&apos;t result in an acquisition, the financial consequences for the searcher can be significant but vary based on the search structure.
      </p>

      <h3 className={h3Class}>Traditional Search Fund Model</h3>

      <p className={bodyClass}>
        In a traditional search fund, investors provide capital for the searcher&apos;s salary (typically $60,000-$100,000 annually) and operating expenses. If the search fails:
      </p>

      <ul className={ulClass}>
        <li>The searcher has lived on a modest stipend for 18-30 months, foregoing higher-earning opportunities</li>
        <li>Opportunity cost can easily exceed $200,000-$400,000 in lost income for someone with MBA credentials</li>
        <li>The searcher has no equity stake to show for their efforts</li>
        <li>Professional development may be viewed positively or negatively depending on the searcher&apos;s narrative and next career move</li>
      </ul>

      <h3 className={h3Class}>Self-Funded Search Model</h3>

      <p className={bodyClass}>
        Self-funded searchers face even greater financial exposure:
      </p>

      <ul className={ulClass}>
        <li>Direct out-of-pocket expenses for salary, travel, legal/accounting services, and other costs</li>
        <li>Total expenditure can range from $100,000 to $300,000+ depending on search duration and lifestyle</li>
        <li>No investor capital to cushion the financial impact</li>
        <li>Potential depletion of personal savings or retirement accounts</li>
      </ul>

      <h3 className={h3Class}>Hidden Costs</h3>

      <p className={bodyClass}>
        Beyond direct financial losses, searchers face:
      </p>

      <ul className={ulClass}>
        <li>Resume gap - time away from traditional employment that may be difficult to explain</li>
        <li>Network atrophy - reduced contact with former colleagues and industry connections</li>
        <li>Skill obsolescence - particularly in fast-moving industries like technology</li>
        <li>Psychological toll - the emotional impact of perceived failure</li>
      </ul>

      <h2 className={h2Class}>Impact on Investors</h2>

      <p className={bodyClass}>
        Investors in search funds that don&apos;t acquire a company also face consequences, though the financial impact is typically less severe than for searchers.
      </p>

      <h3 className={h3Class}>Financial Loss</h3>

      <p className={bodyClass}>
        Traditional search fund investors typically contribute $25,000-$75,000 to fund the search phase. When a search fails, this capital is entirely lost. However, for most search fund investors - successful entrepreneurs, executives, and institutional investors - this represents a manageable loss within a diversified portfolio strategy.
      </p>

      <h3 className={h3Class}>Opportunity Cost</h3>

      <p className={bodyClass}>
        The greater cost for investors is opportunity cost. Capital committed to a failed search could have been deployed in successful searches or alternative investments. Time spent mentoring the searcher and evaluating deals yields no return.
      </p>

      <h3 className={h3Class}>Portfolio Effects</h3>

      <p className={bodyClass}>
        Experienced search fund investors build portfolios of 10-20+ search fund investments. The portfolio approach means that failed searches are an expected component of the overall strategy. The key is ensuring that successful investments generate sufficient returns to offset failures - which historically has been the case, with search fund portfolios delivering attractive risk-adjusted returns despite the one-third failure rate.
      </p>

      <h2 className={h2Class}>Career Outcomes for Failed Searchers</h2>

      <p className={bodyClass}>
        The end of an unsuccessful search is not the end of a career. In fact, many searchers who don&apos;t complete acquisitions go on to successful careers, using the skills and experience gained during the search process.
      </p>

      <h3 className={h3Class}>Common Career Paths</h3>

      <p className={bodyClass}>
        Research and anecdotal evidence suggest several common trajectories for searchers who don&apos;t acquire:
      </p>

      <ul className={ulClass}>
        <li><strong>Private Equity/Growth Equity:</strong> Many transition into traditional PE roles, where their deal sourcing and evaluation skills are highly valued. The search experience provides credible evidence of commitment to the investment industry.</li>
        <li><strong>Corporate Development:</strong> Skills in M&amp;A, due diligence, and business evaluation translate well to corporate development roles at larger companies.</li>
        <li><strong>Management Consulting:</strong> Returning to consulting with enhanced operational and deal-making knowledge can be a natural path, particularly for those from consulting backgrounds.</li>
        <li><strong>Operating Partner Roles:</strong> Some failed searchers join portfolio companies of search funds or private equity firms as COOs, CFOs, or general managers - getting operational experience without the acquisition risk.</li>
        <li><strong>Repeat Search:</strong> A small percentage launch new searches, armed with lessons from their first attempt. These second-time searchers often have higher success rates due to improved deal sourcing strategies and investor relationships.</li>
        <li><strong>Traditional Searcher (with modification):</strong> Some join existing search firms or become acquisition entrepreneurs in related models (independent sponsors, search accelerators).</li>
        <li><strong>Entrepreneurship:</strong> Starting or joining startups, using the entrepreneurial mindset developed during the search.</li>
      </ul>

      <h3 className={h3Class}>The Narrative Challenge</h3>

      <p className={bodyClass}>
        A critical factor in post-search career success is how the searcher frames the experience. Those who articulate clear learnings, demonstrate resilience, and position the search as a calculated risk rather than a failure tend to rebound more quickly. The key is emphasizing:
      </p>

      <ul className={ulClass}>
        <li>Skills developed: deal sourcing, negotiation, due diligence, financial modeling, relationship building</li>
        <li>Market knowledge: deep understanding of specific industries or business models</li>
        <li>Entrepreneurial experience: demonstrating initiative and risk tolerance</li>
        <li>Network expansion: relationships with investors, brokers, advisors, and business owners</li>
      </ul>

      <h2 className={h2Class}>Winding Down the Search Fund</h2>

      <p className={bodyClass}>
        When it becomes clear that a search will not result in an acquisition, the searcher must manage the practical and emotional process of winding down the fund.
      </p>

      <h3 className={h3Class}>Making the Decision</h3>

      <p className={bodyClass}>
        The decision to end a search is rarely sudden. Most searchers experience a gradual realization that success is unlikely, triggered by:
      </p>

      <ul className={ulClass}>
        <li>Depletion of search capital with no viable prospects in the pipeline</li>
        <li>Investor feedback indicating unwillingness to extend the search period</li>
        <li>Personal circumstances requiring income stability or geographic certainty</li>
        <li>Psychological exhaustion and loss of motivation</li>
        <li>Recognition that the market or timing isn&apos;t favorable</li>
      </ul>

      <h3 className={h3Class}>Communication with Investors</h3>

      <p className={bodyClass}>
        Transparent communication with investors is essential. This typically involves:
      </p>

      <ul className={ulClass}>
        <li>Candid assessment of the situation and prospects for continuing</li>
        <li>Final investor meeting or call to discuss the decision</li>
        <li>Written communication summarizing the search, lessons learned, and appreciation for investor support</li>
        <li>Accounting for remaining capital and plans for any residual funds</li>
      </ul>

      <h3 className={h3Class}>Legal and Administrative Tasks</h3>

      <p className={bodyClass}>
        Winding down involves several practical steps:
      </p>

      <ul className={ulClass}>
        <li>Dissolving the search fund entity (typically an LLC or similar structure)</li>
        <li>Closing bank accounts and settling outstanding obligations</li>
        <li>Returning any unused search capital to investors (though typically all capital is expended)</li>
        <li>Filing final tax returns for the entity</li>
        <li>Terminating leases, subscriptions, and service agreements</li>
        <li>Archiving deal flow databases and search materials (while respecting confidentiality obligations)</li>
      </ul>

      <h3 className={h3Class}>Emotional Processing</h3>

      <p className={bodyClass}>
        The psychological aspect of ending a search should not be underestimated. Many searchers describe the experience as similar to the stages of grief:
      </p>

      <ul className={ulClass}>
        <li>Denial: "One more month and I&apos;ll find the right deal"</li>
        <li>Anger: Frustration with sellers, brokers, investors, or oneself</li>
        <li>Bargaining: Considering deals that don&apos;t meet criteria just to avoid failure</li>
        <li>Depression: Feeling of wasted time and lost opportunity</li>
        <li>Acceptance: Recognizing the experience as valuable despite the outcome</li>
      </ul>

      <p className={bodyClass}>
        Support from mentors, fellow searchers, and family is critical during this transition. Many searchers benefit from professional coaching or therapy to process the experience and plan next steps.
      </p>

      <h2 className={h2Class}>Lessons Learned from Unsuccessful Searches</h2>

      <p className={bodyClass}>
        Failed searches, while disappointing, offer valuable insights that benefit the broader search fund ecosystem. Common lessons include:
      </p>

      <h3 className={h3Class}>Deal Sourcing is Everything</h3>

      <p className={bodyClass}>
        Searchers consistently cite deal flow quality and quantity as the most critical success factor. Those who invested heavily in proprietary sourcing strategies (direct owner outreach, industry networking, geographic focus) generally fared better than those relying primarily on brokers and online listings.
      </p>

      <h3 className={h3Class}>Geography and Industry Selection Matter</h3>

      <p className={bodyClass}>
        Searchers in saturated markets (major metros, highly competitive industries) faced greater challenges than those in secondary markets or niche industries. The importance of strategic geographic and sector selection cannot be overstated.
      </p>

      <h3 className={h3Class}>Investor Quality Over Quantity</h3>

      <p className={bodyClass}>
        Having experienced search fund investors who provide realistic guidance and support through challenges proves more valuable than simply raising a large search fund from inexperienced investors with unrealistic expectations.
      </p>

      <h3 className={h3Class}>Personal Fit and Commitment</h3>

      <p className={bodyClass}>
        The search process is more demanding than most anticipate. Searchers who weren&apos;t fully committed or who had significant personal constraints (relationship issues, geographic limitations, industry preferences too narrow) struggled more than those with flexibility and total commitment.
      </p>

      <h3 className={h3Class}>Timing and Flexibility</h3>

      <p className={bodyClass}>
        Markets change, and searchers who began during valuation peaks or credit crunches faced systematic headwinds. Those who maintained flexibility in deal parameters and timing (within reason) had better odds of success.
      </p>

      <h2 className={h2Class}>When to Call It Quits</h2>

      <p className={bodyClass}>
        One of the most difficult decisions a searcher faces is determining when to end the search. There&apos;s no universal formula, but several factors should inform the decision:
      </p>

      <h3 className={h3Class}>Financial Indicators</h3>

      <ul className={ulClass}>
        <li>Remaining search capital: Less than 6 months of runway without viable deals in pipeline</li>
        <li>Investor appetite: Unwillingness to extend funding or bridge capital</li>
        <li>Personal financial stress: Depletion of personal savings, family financial strain</li>
      </ul>

      <h3 className={h3Class}>Pipeline Assessment</h3>

      <ul className={ulClass}>
        <li>Quality of current opportunities: No credible LOI-stage or near-LOI deals after 18+ months</li>
        <li>Deal flow velocity: Declining number of initial conversations or quality prospects</li>
        <li>Market feedback: Consistent rejection patterns suggesting structural issues</li>
      </ul>

      <h3 className={h3Class}>Personal Factors</h3>

      <ul className={ulClass}>
        <li>Psychological health: Persistent burnout, depression, or loss of motivation</li>
        <li>Relationship impact: Significant strain on marriage or family relationships</li>
        <li>Opportunity cost: Compelling alternative opportunities that require immediate decision</li>
        <li>Geographic constraints: Need to relocate for family or personal reasons incompatible with search</li>
      </ul>

      <h3 className={h3Class}>The 24-Month Rule</h3>

      <p className={bodyClass}>
        While not absolute, many in the search fund community consider 24 months a reasonable search period. After two years without an acquisition, the probability of success decreases substantially, and the opportunity cost becomes increasingly difficult to justify. Extensions beyond 24 months should be based on clear pipeline strength rather than hope.
      </p>

      <h2 className={h2Class}>Pivoting: Alternative Outcomes</h2>

      <p className={bodyClass}>
        Not all unsuccessful searches end with complete wind-down. Some searchers pivot to alternative models that maintain elements of the original vision while adjusting to reality.
      </p>

      <h3 className={h3Class}>Operating Partner or Executive in Residence</h3>

      <p className={bodyClass}>
        Some searchers transition into operating roles at search fund or private equity portfolio companies. This provides:
      </p>

      <ul className={ulClass}>
        <li>Immediate operational experience without acquisition risk</li>
        <li>Stable compensation with potential equity upside</li>
        <li>Credibility for future acquisition attempts</li>
        <li>Continued relationship with investors and the search community</li>
      </ul>

      <h3 className={h3Class}>Advisory or Consulting</h3>

      <p className={bodyClass}>
        Using industry expertise developed during the search, some searchers establish advisory practices serving the industries they targeted. This generates income while maintaining optionality for future acquisitions.
      </p>

      <h3 className={h3Class}>Joining an Independent Sponsor or Search Firm</h3>

      <p className={bodyClass}>
        Rather than searching solo, some unsuccessful searchers join established search firms or independent sponsor platforms, benefiting from existing infrastructure, deal flow, and investor relationships while pursuing acquisitions. For a comparison of these alternative models, see <Link href="/learn/eta-vs-independent-sponsor" className="text-apple-accent hover:underline">ETA vs. independent sponsors</Link>.
      </p>

      <h3 className={h3Class}>Smaller or Self-Funded Acquisition</h3>

      <p className={bodyClass}>
        Some searchers lower their sights, pursuing smaller acquisitions ($500,000 to $2 million purchase price) with personal capital, SBA loans, or seller financing - essentially transitioning to a "main street" acquisition rather than a traditional search fund deal.
      </p>

      <h2 className={h2Class}>Preventing Search Failure</h2>

      <p className={bodyClass}>
        While no strategy guarantees success, certain practices can improve the probability of completing an acquisition:
      </p>

      <h3 className={h3Class}>Pre-Search Preparation</h3>

      <ul className={ulClass}>
        <li>Thorough self-assessment of commitment, skills, and personal circumstances</li>
        <li>Geographic and industry selection based on data, not preference alone</li>
        <li>Building relationships with experienced search fund investors before launching</li>
        <li>Developing proprietary deal sourcing strategies before the search begins</li>
        <li>Financial planning for extended search periods and personal runway</li>
      </ul>

      <h3 className={h3Class}>During the Search</h3>

      <ul className={ulClass}>
        <li>Maintaining high activity levels: 20+ seller conversations weekly</li>
        <li>Diversified sourcing: Not relying solely on brokers or single channel</li>
        <li>Rapid iteration: Learning from each deal and adjusting strategy</li>
        <li>Regular investor communication: Building trust and alignment</li>
        <li>Flexibility within parameters: Willing to adjust geography, industry, or deal size within reason</li>
        <li>Network cultivation: Building relationships with intermediaries, lenders, and advisors</li>
      </ul>

      <h3 className={h3Class}>Dealing with Adversity</h3>

      <ul className={ulClass}>
        <li>Resilience practices: Exercise, meditation, therapy, peer support</li>
        <li>Relationship maintenance: Prioritizing family and personal relationships</li>
        <li>Realistic expectations: Understanding that rejection is the norm</li>
        <li>Continuous learning: Using failures to refine approach</li>
      </ul>

      <h3 className={h3Class}>Know When to Pivot</h3>

      <ul className={ulClass}>
        <li>Recognizing when fundamental assumptions are flawed</li>
        <li>Willingness to adjust strategy based on market feedback</li>
        <li>Considering alternative models (self-funded, smaller deals, different geographies) when traditional approach isn&apos;t working</li>
      </ul>

      <h2 className={h2Class}>Conclusion</h2>

      <p className={bodyClass}>
        The possibility that a searcher won&apos;t find a company is an inherent feature of the search fund model, not a bug. Understanding this risk - and preparing for it mentally, financially, and strategically - is essential for anyone considering the ETA path.
      </p>

      <p className={bodyClass}>
        While approximately one-third of searches fail to acquire a company, this doesn&apos;t mean these searchers have failed as professionals or entrepreneurs. Many go on to successful careers, using the skills, networks, and experiences gained during their search. The key differentiator is often how searchers process the experience, communicate it to future employers or investors, and apply the lessons learned.
      </p>

      <p className={bodyClass}>
        For prospective searchers, the message is clear: enter the search fund path with eyes wide open. Understand that success is not guaranteed, prepare financially and emotionally for the possibility of not acquiring a company, and develop strategies to maximize your odds while maintaining the resilience to pivot if necessary. The search fund model offers tremendous opportunity, but it demands total commitment, strategic execution, and the maturity to recognize when continuation or conclusion is the right path.
      </p>

      <p className={bodyClass}>
        For investors, the one-third failure rate highlights the importance of portfolio diversification and searcher selection. Backing multiple searches and choosing searchers with the right combination of skills, commitment, and realistic expectations is essential to generating attractive portfolio returns despite inevitable individual failures.
      </p>

      <p className={bodyClass}>
        Ultimately, the search fund model&apos;s transparency about failure rates is a strength, not a weakness. It sets realistic expectations, encourages thoughtful decision-making, and ensures that those who pursue this path do so with full awareness of the risks and rewards. Whether a search ends in acquisition or wind-down, the experience shapes careers and creates value - even if that value isn&apos;t always captured in a single transaction.
      </p>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>Do searchers owe money back to investors if the search fails?</h3>

      <p className={bodyClass}>
        No. In a traditional search fund, the search capital is structured as an investment, not a loan. If no acquisition is completed, the capital that has been spent on salary, travel, and operating expenses is not repaid. Investors understand this risk going in and factor it into their portfolio approach. Any remaining unspent capital is typically returned to investors during the wind-down process.
      </p>

      <h3 className={h3Class}>How long should I search before calling it quits?</h3>

      <p className={bodyClass}>
        Most industry practitioners consider 24 months a reasonable search period. After two years without an acquisition, the probability of success decreases substantially and the opportunity cost becomes increasingly difficult to justify. However, this is not a hard rule. If you have strong deal flow and viable prospects in the pipeline, extending beyond 24 months with investor support can be worthwhile. Conversely, if you have depleted your pipeline and motivation after 18 months, an earlier wind-down may be the right choice.
      </p>

      <h3 className={h3Class}>Can I try a second search after a failed first attempt?</h3>

      <p className={bodyClass}>
        Yes, though it is relatively uncommon. A small percentage of searchers launch second searches armed with lessons from their first attempt. Second-time searchers often have higher success rates because they enter with better deal sourcing strategies, more realistic expectations, and stronger investor relationships. The key is honest reflection on why the first search failed and demonstrating to investors that you have addressed those issues.
      </p>

      <h2 className={h2Class}>Sources</h2>

      <ul className={ulClass}>
        <li>
          <a
            href="https://www.gsb.stanford.edu/faculty-research/centers-initiatives/ces/research/search-funds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Stanford Graduate School of Business - 2024 Search Fund Study
          </a>
        </li>
        <li>
          <a
            href="https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Stanford GSB - Search Funds: 2018 Selected Findings
          </a>
        </li>
        <li>
          <Link href="/learn/searcher-psychology" className="text-apple-accent hover:underline">
            The Psychology of Being a Searcher
          </Link>
          {" - Mental health and emotional challenges during the search process"}
        </li>
        <li>
          <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">
            Pre-Search Preparation: What to Do Before You Start
          </Link>
          {" - Essential preparation to improve search success probability"}
        </li>
        <li>
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            Deal Sourcing Strategies for Search Funds
          </Link>
          {" - Proven approaches to generating quality deal flow"}
        </li>
        <li>
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
            Finding and Selecting Search Fund Investors
          </Link>
          {" - Building the right investor base to support your search"}
        </li>
        <li>
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            Self-Funded vs. Traditional Search Funds
          </Link>
          {" - Comparing different search fund models and their success rates"}
        </li>
      </ul>
    </article>
  );
}
