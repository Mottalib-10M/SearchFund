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
        <li><Link href="/learn/is-search-fund-good-investment" className="text-apple-accent hover:underline">Is a Search Fund a Good Investment?</Link></li>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns</Link></li>
        <li><Link href="/learn/risk-factors-search-fund" className="text-apple-accent hover:underline">Risk Factors in Search Fund Investing</Link></li>
        <li><Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">Writing a PPM</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study: Operator Success Factors</em> (2024)</li>
        <li>IESE Business School, <em>What Makes a Successful Searcher</em> (2024)</li>
        <li>Search Fund Partners, <em>Investor Evaluation Framework</em> (2024)</li>
      </ul>
    </article>
  );
}
