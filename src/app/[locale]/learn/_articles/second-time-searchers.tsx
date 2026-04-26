import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SecondTimeSearchersArticle() {
  return (
    <article>
      <h1 className={h1Class}>Second-Time Searchers: Raising Capital for Your Next Acquisition</h1>
      <div className={bodyClass}>
        <p>Serial entrepreneurship through acquisition is an emerging trend in the ETA ecosystem. Whether you successfully exited your first acquisition, are looking to build a multi-company portfolio, or experienced a failed search and want to try again, the dynamics of raising capital as a second-time searcher are fundamentally different from the first time around.</p>
      </div>

      <h2 className={h2Class}>Why Second-Time Searchers Have an Advantage</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Track record:</strong> Even if the first deal didn&apos;t achieve outsized returns, investors value operational experience</li>
          <li><strong>Pattern recognition:</strong> You know what good and bad deals look like, and your search will be more efficient</li>
          <li><strong>Existing relationships:</strong> Previous investors, lenders, and advisors may back you again or refer you</li>
          <li><strong>Operational expertise:</strong> You&apos;ve managed a business and understand post-acquisition challenges</li>
          <li><strong>Fundraising speed:</strong> Second raises typically close 40-60% faster than first-time raises</li>
        </ul>
      </div>

      <h2 className={h2Class}>Common Paths for Second-Time Searchers</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>1. Successful Exit &rarr; New Search</h3>
        <ul className={ulClass}>
          <li>Easiest fundraising path. Investors love backing proven operators.</li>
          <li>Often raise larger funds and target bigger companies (3-5x EBITDA of first deal)</li>
          <li>May shift from traditional search fund to independent sponsor or pledge fund structure</li>
          <li>Can self-fund a portion from exit proceeds, improving economics for all parties</li>
        </ul>

        <h3 className={h3Class}>2. Current Company &rarr; Add-On Acquisition</h3>
        <ul className={ulClass}>
          <li>The <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build strategy</Link>: acquire bolt-on companies to grow your existing platform</li>
          <li>Financing is often simpler, the existing company&apos;s cash flow supports the new debt</li>
          <li>Investors may provide follow-on capital or co-invest in the add-on</li>
        </ul>

        <h3 className={h3Class}>3. Failed Search &rarr; Try Again</h3>
        <ul className={ulClass}>
          <li>More challenging but not impossible. Investors who believe in you personally may reinvest.</li>
          <li>Key question: Why did the first search fail? Clear answers demonstrate self-awareness.</li>
          <li>Consider shifting strategy: different geography, industry, or deal size.</li>
          <li>A self-funded approach may be more appropriate for the second attempt.</li>
        </ul>

        <h3 className={h3Class}>4. Operating CEO &rarr; New Company</h3>
        <ul className={ulClass}>
          <li>After running the acquired company for 5-7 years, some CEOs want a new challenge</li>
          <li>May hire a successor CEO for Company 1 while searching for Company 2</li>
          <li>Can create a holding company structure to manage multiple portfolio companies</li>
        </ul>
      </div>

      <h2 className={h2Class}>Fundraising Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Structure evolution:</strong> Many move from traditional search fund to independent sponsor, pledge fund, or self-funded model</li>
          <li><strong>Economics:</strong> Investors may expect better terms (lower step-up, different carried interest) given lower risk of backing an experienced operator</li>
          <li><strong>Investor mix:</strong> First-time investors are often individual angels; second-time capital frequently includes family offices and institutional allocators</li>
          <li><strong>Fund size:</strong> Second raises are typically 2-3x larger, reflecting larger target companies and reduced search risk</li>
          <li><strong>Personal co-investment:</strong> Investors often expect meaningful personal capital alongside their money</li>
        </ul>
      </div>

      <h2 className={h2Class}>Building the Serial ETA Platform</h2>
      <div className={bodyClass}>
        <p>Some second-time searchers build permanent capital vehicles:</p>
        <ul className={ulClass}>
          <li><strong>Holding company model:</strong> Acquire and hold multiple businesses permanently, paying dividends to investors</li>
          <li><strong>Micro-PE fund:</strong> Raise a fund with 3-5 year deployment period to acquire multiple companies</li>
          <li><strong>Operating group:</strong> Shared services across portfolio companies (finance, HR, IT, marketing)</li>
          <li><strong>Industry-focused platform:</strong> Build expertise in one sector and acquire multiple companies within it</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Second-time searchers raise capital significantly faster thanks to track record and existing relationships</li>
          <li>Most evolve from traditional search fund structure to independent sponsor, pledge fund, or holding company model</li>
          <li>Even failed first searches can lead to successful second attempts if the searcher demonstrates learning and self-awareness</li>
          <li>Buy-and-build is the most common path for serial acquirers still operating their first company</li>
          <li>Investors increasingly expect meaningful personal co-investment from experienced searchers</li>
        </ul>
      </div>

      <h2 className={h2Class}>Frequently asked questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>How much faster do second-time searchers raise capital?</h3>
        <p>
          According to the Stanford GSB 2024 Search Fund Study, second-time
          searchers typically close their fundraise 40-60% faster than
          first-time searchers, often completing the raise in 2-4
          months versus 4-8 months. The acceleration comes from
          existing investor relationships, a proven track record (even if
          the first deal had mixed results), and a more refined search
          thesis that investors find credible.
        </p>

        <h3 className={h3Class}>Can I raise a second search fund after a failed first search?</h3>
        <p>
          Yes, though it requires clear self-awareness about why the first
          search failed. Investors who backed you initially may reinvest if
          you can articulate specific lessons learned and strategic
          adjustments. Common pivots include shifting from traditional to{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            self-funded search
          </Link>,
          targeting a different industry or geography, or adjusting deal
          size criteria. A self-funded approach may be more appropriate for
          the second attempt, as it demonstrates conviction through personal
          capital commitment.
        </p>

        <h3 className={h3Class}>What structure do most second-time searchers use?</h3>
        <p>
          Most second-time searchers evolve beyond the traditional search
          fund model. Common structures include independent sponsor (raising
          capital deal-by-deal rather than during the search phase), pledge
          funds (commitments from investors deployed when a deal is found),
          holding company models (permanent capital for acquiring and
          holding multiple businesses), and micro-PE funds with 3-5
          year deployment periods. The choice depends on the searcher&rsquo;s
          goals: independent sponsors maximize deal-by-deal economics, while
          holding companies build long-term wealth through retained
          ownership.
        </p>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/finding-investors" className="text-apple-accent hover:underline">How to Find Search Fund Investors</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
        <li><Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">Search Fund Investor Economics</Link></li>
        <li><Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">Exit Strategies for Search Fund CEOs</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>2024 Search Fund Study: Serial Searcher Analysis</em> (2024)</li>
        <li>IESE Business School, <em>International Search Fund Study: Second-Time Operators</em> (2024)</li>
        <li>Harvard Business School, <em>Note on Serial Entrepreneurship Through Acquisition</em> (2023)</li>
      </ul>
    </article>
  );
}
