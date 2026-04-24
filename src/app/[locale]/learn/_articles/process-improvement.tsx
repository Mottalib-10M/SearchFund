import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ProcessImprovementArticle() {
  return (
    <article>
      <h1 className={h1Class}>Process Improvement: Lean &amp; Six Sigma for Acquired Companies</h1>
      <div className={bodyClass}>
        <p>Acquired businesses are often goldmines of process improvement opportunity. The previous owner may have tolerated inefficiencies for years &mdash; redundant steps, quality issues, bottlenecks, and waste that accumulated over decades of &quot;we&apos;ve always done it this way.&quot; Applying lean and Six Sigma principles to these businesses can deliver dramatic efficiency gains without requiring major capital investment.</p>
        <p>According to a McKinsey study on operational excellence in acquired companies, systematic process improvement typically yields 10&ndash;25% cost reductions in the first 12&ndash;18 months, with the majority of gains coming from eliminating waste and reducing variation rather than from capital expenditure. For <Link href="/learn/quick-wins-post-acquisition" className="text-apple-accent hover:underline">new owners seeking quick wins</Link>, process improvement is one of the fastest paths to EBITDA expansion.</p>
      </div>

      <h2 className={h2Class}>Why Process Improvement Works So Well Post-Acquisition</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Fresh eyes:</strong> As a new owner, you see inefficiencies that insiders have become blind to</li>
          <li><strong>Low-hanging fruit:</strong> Most small businesses have never had any formal process improvement effort</li>
          <li><strong>Immediate ROI:</strong> Many improvements cost nothing but yield significant time and cost savings</li>
          <li><strong>Change window:</strong> The transition of ownership is a natural moment for process changes</li>
          <li><strong>Margin expansion:</strong> Process efficiency directly improves EBITDA without needing revenue growth</li>
        </ul>
      </div>

      <h2 className={h2Class}>Lean Principles for Small Business</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Value stream mapping:</strong> Map every step in your core process from customer order to delivery. Identify steps that add value vs. waste.</li>
          <li><strong>Eliminate the 8 wastes (TIMWOODS):</strong> Transportation, Inventory, Motion, Waiting, Overproduction, Over-processing, Defects, Skills (underutilized)</li>
          <li><strong>5S workplace organization:</strong> Sort, Set in order, Shine, Standardize, Sustain &mdash; applicable to offices, warehouses, and shops alike</li>
          <li><strong>Kanban boards:</strong> Visual work management to track tasks and identify bottlenecks</li>
          <li><strong>Kaizen events:</strong> Focused 3&ndash;5 day improvement workshops targeting specific processes</li>
        </ul>
      </div>

      <h2 className={h2Class}>Six Sigma for Small Business</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>DMAIC framework:</strong> Define, Measure, Analyze, Improve, Control &mdash; a structured approach to problem-solving</li>
          <li><strong>Root cause analysis:</strong> 5 Whys and fishbone diagrams to identify the true source of problems</li>
          <li><strong>Data-driven decisions:</strong> Measure before and after to prove improvement (not gut feel)</li>
          <li><strong>Process capability:</strong> Understand your process variation and reduce it systematically</li>
          <li><strong>Control charts:</strong> Simple visual tools to monitor process stability over time</li>
        </ul>
        <p>You don&apos;t need Six Sigma certification to apply these tools. Focus on the principles, not the formality. The ASQ (American Society for Quality) notes that small businesses adopting even basic DMAIC methodology see defect reduction rates of 30&ndash;50% within the first improvement cycle. The key is choosing one process, measuring it rigorously, and proving the result before moving to the next.</p>
      </div>

      <h2 className={h2Class}>Quick-Win Process Improvements</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Automate repetitive tasks:</strong> Data entry, invoicing, appointment scheduling, email responses</li>
          <li><strong>Eliminate approval bottlenecks:</strong> If every decision routes through one person, delegate authority</li>
          <li><strong>Reduce handoffs:</strong> Every time work passes from one person to another, errors and delays increase</li>
          <li><strong>Standardize templates:</strong> Quotes, proposals, reports, emails &mdash; create templates for everything recurring</li>
          <li><strong>Batch similar tasks:</strong> Process all invoices on Tuesday instead of one at a time throughout the week</li>
        </ol>
        <p>When implementing these quick wins, involve frontline employees in identifying the changes. The Lean Enterprise Institute emphasizes that sustainable improvement comes from the people who do the work daily, not from top-down mandates. Run a brief <Link href="/learn/building-trust-inherited-teams" className="text-apple-accent hover:underline">team workshop</Link> to crowdsource the biggest pain points &mdash; you will get better ideas and stronger buy-in simultaneously.</p>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Acquired businesses are rich with process improvement opportunity &mdash; start with value stream mapping</li>
          <li>Focus on the 8 wastes (TIMWOODS) to identify inefficiencies hiding in plain sight</li>
          <li>You don&apos;t need certification &mdash; apply lean and Six Sigma principles pragmatically</li>
          <li>Quick wins include automation, eliminating approval bottlenecks, and standardizing templates</li>
          <li>Measure before and after every improvement to prove ROI and build momentum</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/sop-documentation" className="text-apple-accent hover:underline">Standard Operating Procedures (SOPs)</Link></li>
        <li><Link href="/learn/erp-implementation-post-acquisition" className="text-apple-accent hover:underline">ERP Implementation Post-Acquisition</Link></li>
        <li><Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI Dashboard Post-Acquisition</Link></li>
        <li><Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">Post-Acquisition Digital Transformation</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>Do I need to hire a lean or Six Sigma consultant?</h3>
      <div className={bodyClass}>
        <p>For most search fund-sized acquisitions, no. The core tools &mdash; value stream mapping, 5S, DMAIC, and root cause analysis &mdash; can be learned from free resources and applied pragmatically. If you have a complex manufacturing operation or persistent quality defects, a short engagement (2&ndash;4 weeks) with a lean consultant can accelerate results. Otherwise, invest your budget in frontline training and simple measurement tools rather than consulting fees.</p>
      </div>

      <h3 className={h3Class}>How quickly can I expect results from process improvement?</h3>
      <div className={bodyClass}>
        <p>Quick wins like eliminating approval bottlenecks, standardizing templates, and automating repetitive data entry can deliver measurable results within 2&ndash;4 weeks. More structured improvements using value stream mapping and Kaizen events typically show 10&ndash;20% efficiency gains within 60&ndash;90 days. Full lean transformations are longer-term (6&ndash;12 months) but build compounding benefits over time.</p>
      </div>

      <h3 className={h3Class}>How do I get employee buy-in for process changes?</h3>
      <div className={bodyClass}>
        <p>Start by asking employees what frustrates them most about their daily work. When the improvement ideas come from the team rather than being imposed from above, resistance drops dramatically. Frame changes as making their jobs easier, not as criticism of how things were done before. Celebrate early wins publicly and share specific metrics showing the improvement &mdash; for example, &quot;we reduced order processing time from 45 minutes to 15 minutes.&quot;</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Lean Enterprise Institute, <em>Lean Thinking for Small and Mid-Size Manufacturers</em> (2024)</li>
        <li>ASQ, <em>Six Sigma Fundamentals for Small Business</em> (2024)</li>
        <li>McKinsey, <em>Operational Excellence in Acquired Companies</em> (2024)</li>
      </ul>
    </article>
  );
}
