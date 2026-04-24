import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function WhenToLetPeopleGoArticle() {
  return (
    <article>
      <h1 className={h1Class}>When to Let People Go: Making Tough Personnel Decisions</h1>
      <div className={bodyClass}>
        <p>One of the hardest parts of being a new CEO post-acquisition is making personnel changes. The business you acquired comes with its people &mdash; and not all of them will be the right fit for where you need to take the company. Delaying inevitable terminations is one of the most common mistakes new search fund CEOs make, often costing months of productivity and morale.</p>
      </div>

      <h2 className={h2Class}>When It&apos;s Time to Act</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Performance is consistently below standard:</strong> You&apos;ve set clear expectations, provided support, and given reasonable time &mdash; but results aren&apos;t improving</li>
          <li><strong>Cultural toxicity:</strong> An employee is actively undermining your leadership, spreading negativity, or creating a hostile environment</li>
          <li><strong>Resistance to change:</strong> Persistent refusal to adopt new processes, systems, or ways of working after reasonable transition periods</li>
          <li><strong>Integrity issues:</strong> Dishonesty, theft, harassment, or safety violations require immediate action</li>
          <li><strong>Role elimination:</strong> The role itself is no longer needed after restructuring or technology implementation</li>
        </ul>
      </div>

      <h2 className={h2Class}>The Assessment Framework</h2>
      <div className={bodyClass}>
        <p>Before any termination decision, work through this framework:</p>
        <ol className={olClass}>
          <li><strong>Clear expectations:</strong> Does the employee know exactly what&apos;s expected? Have you documented specific, measurable goals?</li>
          <li><strong>Adequate support:</strong> Have you provided training, tools, and resources needed to succeed?</li>
          <li><strong>Reasonable time:</strong> Have you given enough time (typically 30&ndash;90 days) for improvement after feedback?</li>
          <li><strong>Documentation:</strong> Do you have written records of performance issues, feedback given, and improvement plans?</li>
          <li><strong>Legal compliance:</strong> Have you consulted with an employment attorney on proper process?</li>
        </ol>
      </div>

      <h2 className={h2Class}>Common Timing Mistakes</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Acting Too Late (Most Common)</h3>
        <ul className={ulClass}>
          <li>Every search fund CEO interviewed says their biggest people regret was waiting too long</li>
          <li>A toxic or underperforming employee drags down everyone around them</li>
          <li>Other employees are watching &mdash; tolerating poor performance demoralizes your best people</li>
          <li>The cost of delay includes lost productivity, customer issues, and good employees leaving</li>
        </ul>

        <h3 className={h3Class}>Acting Too Fast</h3>
        <ul className={ulClass}>
          <li>Don&apos;t make termination decisions in the first 30 days unless there are integrity issues</li>
          <li>Employees who seem resistant may just need time to adjust to new leadership</li>
          <li>Mass terminations right after acquisition destroy trust and institutional knowledge</li>
          <li>Some &quot;problem employees&quot; identified by the seller are actually strong performers who just challenged the owner</li>
        </ul>
      </div>

      <h2 className={h2Class}>The Performance Improvement Plan (PIP)</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Document specific issues:</strong> Concrete examples of underperformance, not vague generalizations</li>
          <li><strong>Set measurable goals:</strong> What does success look like in 30/60/90 days?</li>
          <li><strong>Provide support:</strong> Training, mentoring, or resources to help them succeed</li>
          <li><strong>Regular check-ins:</strong> Weekly meetings to review progress</li>
          <li><strong>Be honest about stakes:</strong> The employee should understand that continued underperformance leads to termination</li>
        </ul>
        <p>Note: A PIP should be a genuine opportunity for improvement, not just documentation for a predetermined outcome. If you&apos;ve already decided to terminate, a disingenuous PIP wastes everyone&apos;s time and erodes trust.</p>
      </div>

      <h2 className={h2Class}>Conducting the Termination</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Have a witness:</strong> An HR representative or your attorney should be present</li>
          <li><strong>Be direct and brief:</strong> State the decision clearly in the first 30 seconds. Don&apos;t bury it in a long preamble.</li>
          <li><strong>Show respect:</strong> This is someone&apos;s livelihood. Be compassionate while being firm.</li>
          <li><strong>Offer severance:</strong> Typically 2&ndash;4 weeks per year of service. Get a release of claims in exchange.</li>
          <li><strong>Handle logistics:</strong> Return of company property, final paycheck, benefits continuation (COBRA), references</li>
          <li><strong>Communicate to the team:</strong> Brief the remaining team the same day. Be factual and forward-looking.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>The #1 regret of search fund CEOs is waiting too long to make personnel changes</li>
          <li>Don&apos;t act in the first 30 days (unless integrity issues) &mdash; give people a fair chance to adjust</li>
          <li>Use a structured PIP process: clear expectations, measurable goals, documented check-ins</li>
          <li>Tolerating underperformance demoralizes your best people and signals low standards</li>
          <li>Conduct terminations with respect, directness, and proper legal preparation</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">Employee Retention After Acquisition</Link></li>
        <li><Link href="/learn/hiring-executive-team" className="text-apple-accent hover:underline">Hiring Your First Executive Team</Link></li>
        <li><Link href="/learn/building-trust-inherited-teams" className="text-apple-accent hover:underline">Building Trust with Inherited Teams</Link></li>
        <li><Link href="/learn/employment-law-acquisitions" className="text-apple-accent hover:underline">Employment Law in Business Acquisitions</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>How long should you wait before making personnel changes after an acquisition?</h3>
      <div className={bodyClass}>
        <p>The general rule is to avoid making termination decisions in the first 30 days unless there are integrity issues (dishonesty, theft, harassment, or safety violations) that require immediate action. Use the first 30&ndash;60 days to observe, assess, and give employees a fair chance to adjust to new leadership. After that initial assessment period, set clear expectations with a 30&ndash;90 day performance improvement plan for underperformers. According to Stanford GSB research on search fund CEO personnel decision patterns, the #1 regret among experienced operators is waiting too long to act &mdash; not acting too quickly. Every week of delay with a toxic or severely underperforming employee costs you in lost productivity, damaged morale among your best people, and potential customer issues. The recommended framework: assess in months 1&ndash;2, implement PIPs in months 2&ndash;4, and make final decisions by months 4&ndash;6.</p>
      </div>

      <h3 className={h3Class}>What is the proper process for a Performance Improvement Plan (PIP)?</h3>
      <div className={bodyClass}>
        <p>An effective PIP includes five elements: specific documentation of performance issues with concrete examples (not vague generalizations), measurable goals defining what success looks like in 30/60/90 days, support commitments detailing training, mentoring, or resources the company will provide, weekly check-in meetings to review progress, and explicit communication that continued underperformance leads to termination. SHRM&rsquo;s best practices emphasize that a PIP should be a genuine improvement opportunity, not documentation for a predetermined outcome &mdash; if you have already decided to terminate, a disingenuous PIP wastes time and erodes trust with the broader team. Harvard Business Review research shows that approximately 30% of employees on genuine PIPs successfully improve and retain their positions, making the process worthwhile when approached in good faith. Always consult an employment attorney on PIP language and process to ensure legal compliance.</p>
      </div>

      <h3 className={h3Class}>How should you communicate a termination to the remaining team?</h3>
      <div className={bodyClass}>
        <p>Brief the remaining team the same day as the termination, ideally in a brief team meeting or through direct conversations with affected departments. Be factual and forward-looking: explain that the person is no longer with the company, briefly address how their responsibilities will be covered, and express confidence in the team&rsquo;s ability to move forward. Do not share specific details about performance issues or the reasons for termination &mdash; this protects both the departed employee&rsquo;s dignity and the company legally. Stanford GSB research confirms that how you handle terminations sends a powerful signal to remaining employees about the kind of organization you are building. The team is watching: treating departing employees with respect while maintaining clear standards earns trust, while tolerating poor performance or handling exits poorly drives your best people to start looking elsewhere. Offer severance of 2&ndash;4 weeks per year of service in exchange for a release of claims.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund CEO Personnel Decision Patterns</em> (2024)</li>
        <li>Harvard Business Review, <em>The Right Way to Fire Someone</em> (2024)</li>
        <li>SHRM, <em>Termination Best Practices for Small Businesses</em> (2024)</li>
      </ul>
    </article>
  );
}
