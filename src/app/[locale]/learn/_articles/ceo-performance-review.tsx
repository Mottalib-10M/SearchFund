import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function CEOPerformanceReviewArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund CEO Performance Reviews: Board Best Practices</h1>
      <div className={bodyClass}>
        <p>In a search fund structure, the board of directors has a dual role: supporting and overseeing the CEO. Annual performance reviews are a critical governance practice that provides structured feedback, aligns expectations, and ensures accountability. Done well, CEO reviews are a powerful development tool; done poorly (or not at all), they allow misalignment to fester until it becomes a crisis.</p>
      </div>

      <h2 className={h2Class}>Why CEO Reviews Matter in Search Funds</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>First-time CEO:</strong> Most search fund operators are first-time CEOs who benefit enormously from structured feedback</li>
          <li><strong>Investor alignment:</strong> Reviews ensure the CEO and investors are aligned on priorities, timeline, and exit strategy</li>
          <li><strong>Accountability:</strong> Without a formal review, it&apos;s easy for both sides to avoid difficult conversations</li>
          <li><strong>Development:</strong> Identifying CEO strengths and development areas leads to targeted support and mentoring</li>
          <li><strong>Compensation:</strong> Reviews provide the basis for compensation decisions and equity vesting acceleration</li>
        </ul>
      </div>

      <h2 className={h2Class}>Review Framework</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>1. Financial Performance (40%)</h3>
        <ul className={ulClass}>
          <li>Revenue growth vs. budget and prior year</li>
          <li>EBITDA margin expansion</li>
          <li>Free cash flow generation</li>
          <li>Working capital management</li>
          <li>Debt reduction and covenant compliance</li>
        </ul>

        <h3 className={h3Class}>2. Strategic Execution (25%)</h3>
        <ul className={ulClass}>
          <li>Progress on strategic initiatives agreed at the start of the year</li>
          <li>Customer acquisition and retention</li>
          <li>Market positioning and competitive dynamics</li>
          <li>Add-on acquisition pipeline (if applicable)</li>
        </ul>

        <h3 className={h3Class}>3. People &amp; Organization (20%)</h3>
        <ul className={ulClass}>
          <li>Management team development and succession planning</li>
          <li>Employee retention and engagement</li>
          <li>Organizational capability building</li>
          <li>Culture and values alignment</li>
        </ul>

        <h3 className={h3Class}>4. Board &amp; Investor Relations (15%)</h3>
        <ul className={ulClass}>
          <li>Quality and timeliness of board reporting</li>
          <li>Transparency and communication</li>
          <li>Responsiveness to board input and direction</li>
          <li>Investor relationship management</li>
        </ul>
      </div>

      <h2 className={h2Class}>Process Best Practices</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>CEO self-assessment:</strong> The CEO completes a written self-evaluation against agreed-upon goals</li>
          <li><strong>Board feedback:</strong> Each board member provides independent written feedback</li>
          <li><strong>360-degree input:</strong> Optional but valuable &mdash; gather feedback from direct reports and key stakeholders</li>
          <li><strong>Lead director meeting:</strong> The lead director or board chair consolidates feedback and meets with the CEO</li>
          <li><strong>Written summary:</strong> Document agreed-upon strengths, development areas, and goals for the next year</li>
          <li><strong>Compensation discussion:</strong> Separate meeting (not the same day) to discuss compensation implications</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Annual CEO reviews are essential governance practice &mdash; especially for first-time CEOs in search fund companies</li>
          <li>Use a balanced framework: financial performance (40%), strategic execution (25%), people (20%), board relations (15%)</li>
          <li>Start with CEO self-assessment, gather board feedback independently, then consolidate with the lead director</li>
          <li>Separate the performance discussion from the compensation discussion</li>
          <li>Document agreed-upon goals for the next year to create accountability</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/board-governance" className="text-apple-accent hover:underline">Board Governance for Search Fund Companies</Link></li>
        <li><Link href="/learn/investor-relations" className="text-apple-accent hover:underline">Investor Relations & Reporting</Link></li>
        <li><Link href="/learn/monthly-board-package" className="text-apple-accent hover:underline">Monthly Board Package Templates</Link></li>
        <li><Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">Searcher Compensation</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Board Governance in Search Fund Companies</em> (2024)</li>
        <li>Harvard Business Review, <em>CEO Performance Evaluation Best Practices</em> (2024)</li>
        <li>NACD, <em>CEO Evaluation: A Framework for Directors</em> (2024)</li>
      </ul>
    </article>
  );
}
