import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function OrganicVsAcquisitiveGrowthArticle() {
  return (
    <article>
      <h1 className={h1Class}>Organic Growth vs. Acquisitive Growth: When to Do What</h1>
      <div className={bodyClass}>
        <p>After stabilizing your acquisition, you face a fundamental strategic question: should you grow organically (by investing in sales, marketing, operations, and geographic expansion) or acquisitively (through <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">bolt-on acquisitions</Link>)? The answer depends on your industry, capital structure, management capacity, and timeline to exit. Most successful search fund CEOs use both &mdash; but timing and sequencing matter enormously.</p>
      </div>

      <h2 className={h2Class}>Organic Growth</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Advantages</h3>
        <ul className={ulClass}>
          <li><strong>Lower risk:</strong> Incremental investments that can be scaled up or down</li>
          <li><strong>Culture preservation:</strong> Growth without integration complexity</li>
          <li><strong>Higher margins:</strong> No acquisition premiums or deal costs</li>
          <li><strong>Management development:</strong> Team grows capabilities alongside the business</li>
          <li><strong>Valuation premium:</strong> Organic growth is valued more highly than acquired growth by buyers</li>
        </ul>

        <h3 className={h3Class}>Best Organic Growth Levers</h3>
        <ul className={ulClass}>
          <li><Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">Pricing optimization</Link> &mdash; fastest path to profit growth</li>
          <li><Link href="/learn/sales-team-development" className="text-apple-accent hover:underline">Sales team development</Link> &mdash; build a formal sales function</li>
          <li><Link href="/learn/product-line-extension" className="text-apple-accent hover:underline">Service line extension</Link> &mdash; sell more to existing customers</li>
          <li><Link href="/learn/marketing-strategy-post-acquisition" className="text-apple-accent hover:underline">Marketing strategy</Link> &mdash; generate more leads</li>
          <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic expansion</Link> &mdash; enter adjacent markets organically</li>
        </ul>
      </div>

      <h2 className={h2Class}>Acquisitive Growth (Buy-and-Build)</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Advantages</h3>
        <ul className={ulClass}>
          <li><strong>Speed:</strong> Instant revenue, customer base, and capabilities</li>
          <li><strong>Multiple arbitrage:</strong> Buy small companies at 3&ndash;4x EBITDA and eventually sell the combined platform at 6&ndash;8x</li>
          <li><strong>Market share:</strong> Rapidly consolidate a fragmented market</li>
          <li><strong>Talent acquisition:</strong> Acquire experienced teams, not just revenue</li>
          <li><strong>Revenue diversification:</strong> Reduce customer and geographic concentration</li>
        </ul>

        <h3 className={h3Class}>When Buy-and-Build Works</h3>
        <ul className={ulClass}>
          <li>Your industry is highly fragmented with many small operators</li>
          <li>There are clear synergies (shared overhead, cross-selling, purchasing power)</li>
          <li>Your platform is operationally stable and can absorb integration complexity</li>
          <li>You have access to capital (investor follow-on, bank debt capacity, seller financing)</li>
          <li>Your management team has bandwidth for integration</li>
        </ul>
      </div>

      <h2 className={h2Class}>The Right Sequencing</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Year 1:</strong> Stabilize. Focus entirely on organic improvements: pricing, sales process, operational efficiency, financial reporting.</li>
          <li><strong>Year 2:</strong> Optimize. Build the management team, implement systems, and prove organic growth capability.</li>
          <li><strong>Year 2&ndash;3:</strong> Consider first add-on. Only after the platform is stable and management has capacity for integration.</li>
          <li><strong>Year 3&ndash;5:</strong> Accelerate. Execute 1&ndash;3 add-ons per year if the thesis supports it. Maintain organic growth in parallel.</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Organic growth is lower risk and valued more highly by buyers &mdash; prioritize it first</li>
          <li>Acquisitive growth is faster but requires operational stability and management bandwidth</li>
          <li>Sequence matters: stabilize (year 1), optimize (year 2), then consider add-ons (year 2+)</li>
          <li>The best companies do both: organic growth for margin expansion and acquisitions for scale</li>
          <li>Never do an add-on acquisition to fix a problem in the platform &mdash; fix it organically first</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
        <li><Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">Revenue Growth Playbook</Link></li>
        <li><Link href="/learn/preparing-company-exit" className="text-apple-accent hover:underline">Preparing Your Company for Exit</Link></li>
        <li><Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">Exit Strategies for Search Fund CEOs</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Harvard Business Review, <em>Organic vs. Inorganic Growth: A Framework for Choosing</em> (2024)</li>
        <li>Stanford GSB, <em>Buy-and-Build Strategies in Search Fund Companies</em> (2024)</li>
        <li>Bain &amp; Company, <em>The M&amp;A Growth Playbook for Mid-Market Companies</em> (2024)</li>
      </ul>
    </article>
  );
}
