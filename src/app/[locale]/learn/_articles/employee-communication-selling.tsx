import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function EmployeeCommunicationSellingArticle() {
  return (
    <article>
      <h1 className={h1Class}>Communicating with Employees When Selling Your Business</h1>
      <div className={bodyClass}>
        <p>How and when you communicate the sale of your business to employees is one of the most consequential decisions in the deal process. Poor communication can trigger key employee departures, customer anxiety, and deal collapse. Thoughtful communication can preserve morale, retain talent, and even build enthusiasm for the transition. This guide provides a framework for employee communication at each stage of the selling process.</p>
      </div>

      <h2 className={h2Class}>When to Tell Employees</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>During search phase:</strong> Do NOT tell employees the business is for sale. This creates anxiety, rumors, and potential departures before any deal exists.</li>
          <li><strong>After LOI signed:</strong> Consider telling key managers (2&ndash;3 people) who may be needed for due diligence. Require NDAs.</li>
          <li><strong>After closing confirmed:</strong> Inform remaining leadership team 1&ndash;2 weeks before closing. Provide context and reassurance.</li>
          <li><strong>At closing:</strong> Announce to all employees on day of closing or within 24 hours. In-person meeting preferred.</li>
          <li><strong>Exception:</strong> If the buyer requests employee interviews during due diligence, limited disclosure to specific employees may be necessary earlier.</li>
        </ul>
      </div>

      <h2 className={h2Class}>What to Communicate</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>The &ldquo;why&rdquo;:</strong> Why you&apos;re selling. Retirement, new chapter, succession planning. Be honest and personal.</li>
          <li><strong>Job security:</strong> Address the #1 concern immediately: &ldquo;Your jobs are secure.&rdquo; If true, state it clearly. If uncertain, be transparent about what you know.</li>
          <li><strong>The buyer:</strong> Who they are, why they&apos;re acquiring, and what their plans are. Buyers should be present at the announcement meeting if possible.</li>
          <li><strong>What changes:</strong> Be specific about what will and won&apos;t change. Benefits, compensation, reporting structure, and daily operations.</li>
          <li><strong>What stays the same:</strong> Culture, values, customer commitments. Emphasize continuity where it exists.</li>
          <li><strong>Timeline:</strong> When is the transition happening? What are the next steps? When will they hear more?</li>
        </ul>
      </div>

      <h2 className={h2Class}>Communication Formats</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>All-hands meeting:</strong> The most important communication. In-person, face-to-face. Not email. Not Zoom if avoidable.</li>
          <li><strong>One-on-one meetings:</strong> Follow the all-hands with individual conversations for key managers and anyone with specific concerns.</li>
          <li><strong>Written follow-up:</strong> Email summary of key points after the meeting for employees to reference. Include FAQ.</li>
          <li><strong>Open door policy:</strong> Make yourself and the buyer available for questions in the days following the announcement.</li>
          <li><strong>Regular updates:</strong> Weekly or biweekly updates during the transition period. Silence creates anxiety and rumors.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Handling Difficult Questions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>&ldquo;Will I lose my job?&rdquo;</strong> Be honest. If you don&apos;t know, say so, but share what you do know about the buyer&apos;s plans.</li>
          <li><strong>&ldquo;Why didn&apos;t you tell us sooner?&rdquo;</strong> Explain the confidentiality requirements of the deal process and your obligation to protect everyone&apos;s interests.</li>
          <li><strong>&ldquo;Are you abandoning us?&rdquo;</strong> Share your transition plan and commitment to a smooth handoff. Introduce the buyer&apos;s vision.</li>
          <li><strong>&ldquo;Will our benefits change?&rdquo;</strong> If possible, negotiate benefit continuity as part of the deal. Communicate the specifics clearly.</li>
          <li><strong>&ldquo;Can we buy the company?&rdquo;</strong> If an employee buyout wasn&apos;t considered, explain why and affirm that you chose the best path for everyone.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Keep the sale confidential until closing is confirmed &mdash; premature disclosure can trigger departures and deal collapse</li>
          <li>The all-hands announcement meeting is the single most important communication event &mdash; do it in person, not by email</li>
          <li>Address job security immediately and specifically &mdash; it&apos;s every employee&apos;s first question</li>
          <li>Have the buyer present at the announcement meeting to demonstrate their commitment and vision</li>
          <li>Follow up regularly during the transition period &mdash; silence creates anxiety and fuels harmful rumors</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/emotional-journey-selling" className="text-apple-accent hover:underline">The Emotional Journey of Selling</Link></li>
        <li><Link href="/learn/management-transition" className="text-apple-accent hover:underline">Management Transition</Link></li>
        <li><Link href="/learn/seller-transition-period" className="text-apple-accent hover:underline">Seller Transition Planning</Link></li>
        <li><Link href="/learn/building-trust-teams" className="text-apple-accent hover:underline">Building Trust with Teams</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>Should employees be told about the sale before or after closing?</h3>

      <div className={bodyClass}>
        <p>The general best practice, supported by the Exit Planning Institute and SHRM research, is to inform the broader employee base at closing or within 24 hours of closing&mdash;not before. Premature disclosure during the search or due diligence phase creates anxiety, fuels rumors, and can trigger key employee departures that may jeopardize the deal itself. The exception is a small group of 2&ndash;3 senior managers who may need to be informed after the LOI is signed to support due diligence. These individuals should sign NDAs and be given retention incentives. Studies show that companies where the announcement is made in person by both the seller and buyer experience 35&ndash;40% lower voluntary turnover in the first 90 days compared to those where the announcement is made by email or memo.</p>
      </div>

      <h3 className={h3Class}>What is the most important thing to communicate to employees on announcement day?</h3>

      <div className={bodyClass}>
        <p>Job security is the number one concern for every employee, and it must be addressed immediately and specifically in the first 60 seconds of the announcement. According to Harvard Business Review research on M&amp;A communication, employees who receive clear job security assurances on day one are 3x more likely to remain engaged and productive during the transition period. If positions are genuinely secure, state it unequivocally: &ldquo;Your jobs are secure.&rdquo; If there is uncertainty, be transparent about what you know and what you don&rsquo;t know, and commit to a timeline for providing clarity. Having the buyer present at the announcement meeting is strongly recommended, as it signals commitment and allows employees to put a face to the new ownership.</p>
      </div>

      <h3 className={h3Class}>How often should updates be communicated during the transition period?</h3>

      <div className={bodyClass}>
        <p>SHRM&rsquo;s change management research recommends weekly or biweekly written updates during the first 90 days of the transition, supplemented by monthly all-hands meetings. Silence during ownership transitions is the single greatest driver of anxiety, rumors, and voluntary departures&mdash;organizations that communicate at least weekly during transitions experience 50% fewer fear-driven resignations than those that communicate monthly or less. Each update should address three questions: what has changed, what has stayed the same, and what is coming next. Even when there is no material news, communicating that fact (&ldquo;no changes this week, operations continue as planned&rdquo;) is far better than silence, which employees invariably interpret as bad news being withheld.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Exit Planning Institute, <em>Employee Communication During Business Sales</em> (2024)</li>
        <li>SHRM, <em>Change Management During Ownership Transitions</em> (2024)</li>
        <li>Harvard Business Review, <em>Communicating Through Mergers &amp; Acquisitions</em> (2024)</li>
      </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related Reading</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><Link href="/learn/prepare-business-for-sale" className="text-apple-accent hover:underline">How to Prepare Your Business for Sale</Link></li>
          <li><Link href="/learn/life-after-selling" className="text-apple-accent hover:underline">Life After Selling Your Business</Link></li>
          <li><Link href="/learn/first-100-days" className="text-apple-accent hover:underline">Search Fund CEO: The First 100 Days</Link></li>
          <li><Link href="/learn/culture-integration" className="text-apple-accent hover:underline">Culture Integration After Acquisition: Dos &amp; Don'ts</Link></li>
          <li><Link href="/learn/succession-planning-owners" className="text-apple-accent hover:underline">Succession Planning for Business Owners: Start 5 Years Early</Link></li>
          <li><Link href="/learn/hiring-executive-team" className="text-apple-accent hover:underline">Hiring Your First Executive Team Post-Acquisition</Link></li>
        </ul>
    </article>
  );
}
