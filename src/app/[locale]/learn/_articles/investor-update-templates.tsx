import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function InvestorUpdateTemplatesArticle() {
  return (
    <article>
      <h1 className={h1Class}>Investor Update Templates for Search Fund CEOs</h1>
      <div className={bodyClass}>
        <p>Regular investor updates are a cornerstone of good <Link href="/learn/investor-relations" className="text-apple-accent hover:underline">investor relations</Link>. Search fund investors are typically your most valuable advisors &mdash; they&apos;ve seen dozens of acquisitions and can provide guidance on everything from hiring to exit strategy. But they can only help if you keep them informed. A structured monthly or quarterly update keeps investors engaged, builds trust, and often surfaces valuable advice.</p>
      </div>

      <h2 className={h2Class}>Update Frequency</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>During the search:</strong> Monthly updates on deal flow, pipeline, and search progress</li>
          <li><strong>Year 1 post-acquisition:</strong> Monthly updates to keep investors close during the critical transition</li>
          <li><strong>Year 2+:</strong> Quarterly updates are typical, with ad hoc communication for significant events</li>
          <li><strong>Always:</strong> Immediate communication for material events (key employee departures, major customer loss, legal issues)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Monthly Update Template</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Subject line:</strong> &quot;[Company Name] &mdash; [Month] Update&quot;</li>
          <li><strong>Opening summary (2&ndash;3 sentences):</strong> The month in one paragraph. High-level performance and key developments.</li>
          <li><strong>Financial highlights:</strong> Revenue, EBITDA, cash position &mdash; actual vs. budget and prior year. Keep it to 5&ndash;7 metrics.</li>
          <li><strong>Key wins:</strong> 2&ndash;3 positive developments (new customers, hires, initiatives completed)</li>
          <li><strong>Challenges:</strong> 1&ndash;2 issues you&apos;re working through. Be transparent &mdash; investors respect honesty.</li>
          <li><strong>Priorities next month:</strong> Top 3 focus areas</li>
          <li><strong>Ask:</strong> One specific request (introduction, advice, expertise). Investors want to help &mdash; give them a way to contribute.</li>
        </ol>
      </div>

      <h2 className={h2Class}>Search Phase Update Template</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Pipeline metrics:</strong> Deals reviewed, NDAs signed, LOIs submitted, IOIs sent</li>
          <li><strong>Active opportunities:</strong> Brief description of deals in advanced stages</li>
          <li><strong>Search strategy:</strong> What&apos;s working, what you&apos;re adjusting</li>
          <li><strong>Timeline:</strong> Expected next milestones and target close window</li>
          <li><strong>Capital status:</strong> Burn rate and remaining runway</li>
          <li><strong>Ask:</strong> Specific industries, geographies, or introductions that would help</li>
        </ol>
      </div>

      <h2 className={h2Class}>Common Mistakes</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Too long:</strong> Keep updates to 1&ndash;2 pages. Investors skim, not study.</li>
          <li><strong>Only good news:</strong> Investors see through rose-colored updates. Share challenges openly.</li>
          <li><strong>Inconsistent timing:</strong> Send on the same date each month. Late or irregular updates signal disorganization.</li>
          <li><strong>No ask:</strong> Every update should include one specific way investors can help.</li>
          <li><strong>Financial data only:</strong> The narrative context (wins, challenges, priorities) is more valuable than raw numbers.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Send monthly updates during the search and first year, quarterly in year 2+</li>
          <li>Keep updates to 1&ndash;2 pages: summary, financials, wins, challenges, priorities, and one ask</li>
          <li>Be transparent about challenges &mdash; investors respect honesty and can often help</li>
          <li>Always include a specific ask: investors want to contribute but need direction</li>
          <li>Consistency matters: same format, same schedule, every time</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/investor-relations" className="text-apple-accent hover:underline">Investor Relations & Reporting</Link></li>
        <li><Link href="/learn/monthly-board-package" className="text-apple-accent hover:underline">Monthly Board Package</Link></li>
        <li><Link href="/learn/board-governance" className="text-apple-accent hover:underline">Board Governance</Link></li>
        <li><Link href="/learn/finding-investors" className="text-apple-accent hover:underline">Finding Investors</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Investor Communication Best Practices for Search Fund CEOs</em> (2024)</li>
        <li>Harvard Business Review, <em>The Art of the Investor Update</em> (2024)</li>
        <li>Y Combinator, <em>Investor Update Best Practices</em> (2024)</li>
      </ul>
    </article>
  );
}
