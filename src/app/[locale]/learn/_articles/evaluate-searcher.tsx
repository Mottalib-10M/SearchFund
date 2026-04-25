import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function EvaluateSearcherArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Evaluate a Searcher as an Investor</h1>
      <div className={bodyClass}>
        <p>For search fund investors, the searcher &mdash; the individual who will find, acquire, and operate a business &mdash; is the single most important investment decision. Unlike traditional PE where deals are evaluated primarily on company metrics, search fund investing is fundamentally a bet on the operator. This guide provides a framework for evaluating searchers, identifying the traits that predict success, and conducting effective due diligence on prospective searcher-operators.</p>
      </div>

      <h2 className={h2Class}>Key Evaluation Criteria</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Leadership ability:</strong> Can this person lead a company of 20&ndash;200 employees? Look for evidence of managing people, making difficult decisions, and inspiring teams.</li>
          <li><strong>Intellectual horsepower:</strong> Analytical ability to evaluate businesses, understand financials, and make sound strategic decisions under uncertainty.</li>
          <li><strong>Persistence &amp; resilience:</strong> The search phase involves months of rejection. Post-acquisition will have crises. Look for evidence of perseverance through difficulty.</li>
          <li><strong>Self-awareness:</strong> Does the searcher know their strengths and weaknesses? Are they willing to seek help and hire for gaps?</li>
          <li><strong>Coachability:</strong> Will they listen to investor advice and board input? Searchers who are too independent may miss valuable guidance.</li>
          <li><strong>Integrity:</strong> Trustworthiness in communication, financial reporting, and decision-making. The investor-searcher relationship requires deep trust.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Background &amp; Experience</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>MBA program:</strong> Top MBA programs (Stanford, HBS, Wharton, Booth, IESE) provide training, network, and credibility. Not required but strongly correlated.</li>
          <li><strong>Pre-MBA experience:</strong> 3&ndash;7 years of meaningful work experience. Consulting, banking, military, engineering, and operations backgrounds are common.</li>
          <li><strong>Industry knowledge:</strong> Some industry focus or experience is helpful but not essential. Generalist skills are more important for ETA.</li>
          <li><strong>P&amp;L exposure:</strong> Has the searcher managed a P&amp;L? Even at a small scale, P&amp;L management experience is a strong positive signal.</li>
          <li><strong>Entrepreneurial track record:</strong> Previous entrepreneurial ventures (even failed ones) demonstrate risk tolerance and bias for action.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Red Flags</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Unrealistic expectations:</strong> Searchers who project overly optimistic returns or underestimate the difficulty of operating a business.</li>
          <li><strong>Lack of humility:</strong> Overconfidence in their ability to &ldquo;fix&rdquo; any business. The best searchers are confident but humble.</li>
          <li><strong>Poor communication:</strong> Inability to clearly articulate their thesis, process, or criteria. Communication skills are essential for CEO success.</li>
          <li><strong>Financial motivation only:</strong> Searchers motivated solely by financial returns may lack the resilience needed during difficult periods.</li>
          <li><strong>Unwillingness to relocate:</strong> Geographic flexibility is essential. Searchers who won&apos;t relocate dramatically narrow their deal universe.</li>
          <li><strong>Weak references:</strong> Lukewarm references from former managers, professors, or colleagues are a significant warning sign.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Process</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li>Review the searcher&apos;s PPM (Private Placement Memorandum) for investment thesis, acquisition criteria, and search plan</li>
          <li>Conduct 1&ndash;2 hour in-person or video meeting to assess leadership presence and communication skills</li>
          <li>Check 5&ndash;8 references: former managers, colleagues, professors, and any direct reports</li>
          <li>Evaluate the search plan: is the target market realistic? Are the criteria well-defined? Is the timeline achievable?</li>
          <li>Assess the investor base: who else is investing? Experienced search fund investors provide validation and support.</li>
          <li>Review financial projections: are they reasonable and based on sound assumptions?</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Search fund investing is primarily a bet on the operator &mdash; the searcher is more important than the eventual target company</li>
          <li>Leadership ability, intellectual horsepower, persistence, self-awareness, and integrity are the top evaluation criteria</li>
          <li>Red flags include unrealistic expectations, lack of humility, poor communication, and geographic inflexibility</li>
          <li>Reference checks (5&ndash;8 references) are the most valuable due diligence tool for evaluating searchers</li>
          <li>The best predictor of searcher success is evidence of past leadership, resilience through adversity, and coachability</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/search-fund-good-investment" className="text-apple-accent hover:underline">Is a Search Fund a Good Investment?</Link></li>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns</Link></li>
        <li><Link href="/learn/risk-factors-search-fund" className="text-apple-accent hover:underline">Risk Factors in Search Fund Investing</Link></li>
        <li><Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">Writing a PPM</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>How many references should an investor check when evaluating a searcher?</h3>
      <div className={bodyClass}>
        <p>Experienced search fund investors typically check 5&ndash;8 references, drawing from former managers, direct reports, colleagues, professors, and any previous business partners. According to the Stanford GSB&rsquo;s 2024 Search Fund Study, reference checks are consistently ranked as the single most valuable due diligence tool for evaluating searcher-operators &mdash; more predictive than MBA pedigree, prior work experience, or interview performance alone. The most informative references come from people who managed the searcher directly and can speak to how they performed under pressure, handled failure, and led teams. Investors should ask open-ended questions such as &ldquo;What is this person&rsquo;s biggest weakness?&rdquo; and &ldquo;Would you invest your own money in this person running a company?&rdquo; Lukewarm or evasive responses from references are a significant red flag and should be weighted heavily in the investment decision.</p>
      </div>

      <h3 className={h3Class}>What background or experience best predicts success as a search fund CEO?</h3>
      <div className={bodyClass}>
        <p>Research from both Stanford and IESE indicates that no single background guarantees success, but certain patterns emerge strongly. The most successful searcher-operators typically have 3&ndash;7 years of pre-MBA work experience in consulting, banking, military, engineering, or operations roles that developed analytical rigor and leadership skills. According to the IESE 2024 study, the combination of general management education (MBA) and prior P&amp;L management experience &mdash; even at a small scale &mdash; is the strongest predictor of post-acquisition performance. However, soft traits matter more than credentials: persistence, self-awareness, coachability, and the ability to make decisions under uncertainty are consistently cited by experienced investors as the differentiating factors between top-quartile and bottom-quartile outcomes. Searchers with previous entrepreneurial experience, even unsuccessful ventures, tend to demonstrate the risk tolerance and bias for action that translates well to operating an acquired business.</p>
      </div>

      <h3 className={h3Class}>What are the most common red flags when evaluating a prospective searcher?</h3>
      <div className={bodyClass}>
        <p>The Stanford 2024 study and interviews with experienced search fund investors highlight several recurring red flags. The most concerning is unrealistic expectations &mdash; searchers who project overly optimistic returns (IRRs above 50%) or underestimate the difficulty of operating a small business post-acquisition. A lack of humility, manifested as overconfidence in their ability to &ldquo;fix&rdquo; any business regardless of industry or situation, is another strong negative signal. Geographic inflexibility dramatically narrows the deal universe: investors report that searchers unwilling to relocate eliminate 70&ndash;80% of potential opportunities. Poor communication skills &mdash; inability to clearly articulate their thesis, search criteria, and decision-making framework &mdash; suggest the searcher will struggle in the CEO role, where communication with employees, customers, and the board is constant. Finally, motivation that is purely financial, without genuine interest in building and leading a business, predicts lower resilience during the inevitable difficult periods of both the search and post-acquisition phases.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study: Operator Success Factors</em> (2024)</li>
        <li>IESE Business School, <em>What Makes a Successful Searcher</em> (2024)</li>
        <li>Search Fund Partners, <em>Investor Evaluation Framework</em> (2024)</li>
      </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related Reading</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><Link href="/learn/portfolio-construction-search-fund" className="text-apple-accent hover:underline">Diversifying a Search Fund LP Portfolio: Strategy &amp; Allocation</Link></li>
          <li><Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">Stanford 2024 Search Fund Study: Key Takeaways</Link></li>
          <li><Link href="/learn/search-fund-deal-characteristics" className="text-apple-accent hover:underline">Search Fund Deal Characteristics: What Gets Acquired</Link></li>
          <li><Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">Search Fund Economics: Cap Tables &amp; Equity</Link></li>
          <li><Link href="/learn/eta-vs-private-equity" className="text-apple-accent hover:underline">ETA vs. Private Equity: Key Differences for Investors</Link></li>
          <li><Link href="/learn/finding-investors" className="text-apple-accent hover:underline">How to Find Search Fund Investors</Link></li>
        </ul>
    </article>
  );
}
