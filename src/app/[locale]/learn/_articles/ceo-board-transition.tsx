import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function CEOBoardTransitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>CEO-to-Board Transition: Life After Exiting Your Acquisition</h1>
      <div className={bodyClass}>
        <p>After spending 5&ndash;7 years building and running your acquired company, the exit closes and you&apos;re no longer the CEO. The transition from operator to... what? This is a moment many search fund entrepreneurs are unprepared for. The identity shift, the loss of daily purpose, and the question of &quot;what next?&quot; can be surprisingly challenging, even amid financial success.</p>
      </div>

      <h2 className={h2Class}>The Emotional Transition</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Identity loss:</strong> You&apos;ve been &quot;the CEO&quot; for years. When that title disappears, so does a significant part of your identity.</li>
          <li><strong>Purpose vacuum:</strong> Daily urgency and responsibility are suddenly gone. The silence can be deafening.</li>
          <li><strong>Team separation:</strong> You&apos;ve built deep relationships with your team. Leaving them is harder than expected.</li>
          <li><strong>Anti-climax:</strong> The exit itself is exhilarating, but the weeks after can feel empty.</li>
          <li><strong>Decision fatigue reversal:</strong> After years of constant decisions, having nothing to decide feels disorienting.</li>
        </ul>
        <p>These feelings are normal. Nearly every exited search fund CEO experiences them. Give yourself permission to process the transition.</p>
      </div>

      <h2 className={h2Class}>Common Post-Exit Paths</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>1. Do It Again</h3>
        <ul className={ulClass}>
          <li>Launch a new search fund or acquire another business independently</li>
          <li>Second-time searchers have a significant advantage: experience, network, and capital</li>
          <li>Typical timeline: 6&ndash;12 months of rest, then begin the next search</li>
        </ul>

        <h3 className={h3Class}>2. Become a Search Fund Investor</h3>
        <ul className={ulClass}>
          <li>Use your capital and experience to back the next generation of search fund entrepreneurs</li>
          <li>Your operational experience makes you an exceptionally valuable investor and mentor</li>
          <li>Many exited CEOs become the most active and engaged search fund investors</li>
        </ul>

        <h3 className={h3Class}>3. Join Boards</h3>
        <ul className={ulClass}>
          <li>Board seats on search fund companies, PE-backed companies, or nonprofits</li>
          <li>Your operational experience is highly valued by board chairs looking for practical advisors</li>
          <li>Flexible time commitment: typically 4&ndash;8 days per quarter per board</li>
        </ul>

        <h3 className={h3Class}>4. Build a Holding Company</h3>
        <ul className={ulClass}>
          <li>Acquire and hold businesses permanently, without investor pressure for exit timelines</li>
          <li>Growing trend among experienced search fund operators</li>
          <li>Requires significant personal capital or a partnership with family offices</li>
        </ul>

        <h3 className={h3Class}>5. Advisory and Consulting</h3>
        <ul className={ulClass}>
          <li>Advise current search fund CEOs, M&amp;A processes, or post-acquisition integration</li>
          <li>Teach at business school ETA programs</li>
          <li>Write, speak, or create content about your experience</li>
        </ul>
      </div>

      <h2 className={h2Class}>Practical Transition Tips</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Take a real break:</strong> At least 3&ndash;6 months before committing to the next thing. Travel, rest, reconnect with family.</li>
          <li><strong>Build your post-exit network:</strong> Connect with other exited CEOs who understand the transition</li>
          <li><strong>Manage your wealth:</strong> Engage a wealth advisor experienced with liquidity events. Don&apos;t make major financial decisions in the first 6 months.</li>
          <li><strong>Stay connected to the ETA community:</strong> Attend conferences, mentor searchers, invest in deals</li>
          <li><strong>Explore before committing:</strong> Try advisory roles, board seats, and investing before diving into another operating role</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>The emotional transition is harder than expected &mdash; identity loss, purpose vacuum, and anti-climax are normal</li>
          <li>Take a real break (3&ndash;6 months minimum) before committing to your next chapter</li>
          <li>Common paths: do another acquisition, invest in search funds, join boards, build a holding company, or advise</li>
          <li>Your operational experience makes you exceptionally valuable as an investor, board member, or mentor</li>
          <li>Connect with other exited CEOs &mdash; they understand the transition in ways others can&apos;t</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">Exit Strategies for Search Fund CEOs</Link></li>
        <li><Link href="/learn/preparing-company-exit" className="text-apple-accent hover:underline">Preparing Your Company for Exit</Link></li>
        <li><Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">Why Invest in Search Funds</Link></li>
        <li><Link href="/learn/second-time-searchers" className="text-apple-accent hover:underline">Second-Time Searchers</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Life After Search Fund: Post-Exit Career Paths</em> (2024)</li>
        <li>Harvard Business Review, <em>The CEO Identity Crisis After Exit</em> (2024)</li>
        <li>IESE, <em>Search Fund Operator Career Trajectories</em> (2024)</li>
      </ul>
    </article>
  );
}
