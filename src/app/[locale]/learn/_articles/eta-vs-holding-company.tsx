import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ETAVsHoldingCompanyArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA vs. Holding Company Model</h1>
      <div className={bodyClass}>
        <p>The holding company model &mdash; acquiring and operating multiple businesses under a single umbrella &mdash; is an increasingly popular alternative to the traditional search fund&apos;s single-company focus. Inspired by Berkshire Hathaway, Constellation Software, and other serial acquirers, holding companies offer portfolio diversification and perpetual ownership. This comparison examines how the holding company model differs from ETA in structure, risk, returns, and operator lifestyle.</p>
      </div>

      <h2 className={h2Class}>How They Work</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA model:</strong> Acquire one company. Serve as CEO for 5&ndash;7 years. Grow and exit for equity returns. Single-company focus.</li>
          <li><strong>Holding company:</strong> Acquire multiple companies over time. Install operators in each. Hold indefinitely. Portfolio diversification.</li>
          <li><strong>ETA exit:</strong> Sale to strategic buyer, PE firm, or management team. Exit-driven returns model.</li>
          <li><strong>Holding company exit:</strong> Generally &ldquo;buy and hold forever.&rdquo; Returns from cash flow distributions rather than capital gains.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Economics Comparison</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA returns:</strong> Back-end loaded. Modest salary during operations + large equity payout at exit. 2.5&ndash;4x median return.</li>
          <li><strong>Holding company returns:</strong> Cash flow focused. Annual distributions from portfolio companies. Compound growth over decades.</li>
          <li><strong>ETA capital efficiency:</strong> Leverage applied to single acquisition. High concentration but potentially high returns per dollar.</li>
          <li><strong>Holding company capital:</strong> Reinvest cash flow from existing businesses into new acquisitions. Compounding capital deployment.</li>
          <li><strong>ETA tax:</strong> Exit-driven, generating capital gains (favorable tax treatment).</li>
          <li><strong>Holding company tax:</strong> Cash flow distributions taxed as ordinary income. But deferral through reinvestment and depreciation.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Risk &amp; Diversification</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA risk:</strong> All-in on one business. Single-point-of-failure risk. If the business fails, the entire investment is lost.</li>
          <li><strong>Holding company risk:</strong> Diversified across multiple businesses. One failure doesn&apos;t destroy the portfolio. Lower total variance.</li>
          <li><strong>ETA operator risk:</strong> You are the CEO. Your performance directly drives returns. High personal accountability.</li>
          <li><strong>Holding company operator risk:</strong> Distributed across hired operators. CEO of holdco provides strategic oversight, not daily management.</li>
          <li><strong>Holding company complexity:</strong> Managing multiple businesses, operators, and capital allocation decisions. Higher organizational complexity.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Lifestyle &amp; Career</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ETA lifestyle:</strong> Intense CEO role for 5&ndash;7 years. Deep immersion in one industry. Potentially relocate to the business location.</li>
          <li><strong>Holding company lifestyle:</strong> Capital allocator role. Travel between businesses. Strategic oversight rather than daily operations.</li>
          <li><strong>ETA career arc:</strong> Search (2 years) &rarr; operate (5&ndash;7 years) &rarr; exit. Repeat or transition to investing/board roles.</li>
          <li><strong>Holding company career arc:</strong> Build portfolio over decades. No &ldquo;exit&rdquo; &mdash; perpetual ownership. Generational wealth building.</li>
          <li><strong>Scalability:</strong> ETA is limited to one business per searcher. Holding companies can acquire dozens of businesses over time.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>ETA focuses on one company with exit-driven returns; holding companies build portfolios with cash flow-driven returns</li>
          <li>Holding companies offer portfolio diversification and perpetual ownership but require capital allocator skills and organizational management</li>
          <li>ETA is better for hands-on operators who want deep involvement; holding companies suit capital allocators who prefer strategic oversight</li>
          <li>Many successful ETA practitioners transition to the holding company model for their second and subsequent acquisitions</li>
          <li>The holding company model compounds wealth over decades but requires patience &mdash; ETA offers faster, concentrated returns</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
        <li><Link href="/learn/eta-vs-private-equity" className="text-apple-accent hover:underline">ETA vs. Private Equity</Link></li>
        <li><Link href="/learn/eta-vs-independent-sponsor" className="text-apple-accent hover:underline">ETA vs. Independent Sponsor</Link></li>
        <li><Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">Exit Strategies</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Permanent Equity, <em>The Permanent Holding Company Model</em> (2024)</li>
        <li>Constellation Software, <em>Annual Report and Capital Allocation Framework</em> (2024)</li>
        <li>Stanford GSB, <em>Search Fund Study</em> (2024)</li>
      </ul>
    </article>
  );
}
