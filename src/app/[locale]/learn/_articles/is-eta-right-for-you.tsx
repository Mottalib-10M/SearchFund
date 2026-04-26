import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function IsETARightForYouArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Is ETA Right for You? A Self-Assessment Framework
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Entrepreneurship Through Acquisition is not for everyone. The
          attrition rate during search is 25-30%, and many who complete
          acquisitions struggle as first-time CEOs.{" "}
          <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
            Why do search funds fail?
          </Link>{" "}
          Often because the searcher wasn&rsquo;t a good fit for the model.
          This self-assessment framework helps you evaluate whether ETA
          aligns with your skills, personality, financial situation, and
          career goals. If you decide ETA is the right fit, you can learn{" "}
          <Link href="/learn/how-much-money-buy-business" className="text-apple-accent hover:underline">
            how much money you need to buy a business
          </Link>.
        </p>

        <h2 className={h2Class}>The ETA personality profile</h2>
        <p>
          Research from Stanford GSB and IESE identifies traits that
          correlate with{" "}
          <Link href="/learn/search-fund-success-stories" className="text-apple-accent hover:underline">
            successful search fund CEOs
          </Link>:
        </p>

        <h3 className={h3Class}>High correlation with success</h3>
        <ul className={ulClass}>
          <li><strong>Bias for action:</strong> You prefer doing over analyzing. ETA rewards decisiveness, you&rsquo;ll review 100+ businesses and need to move quickly on the best ones</li>
          <li><strong>Comfort with ambiguity:</strong> The search phase has no playbook. You wake up every day with no boss, no structure, and no clear path</li>
          <li><strong>Resilience:</strong> You&rsquo;ll hear &ldquo;no&rdquo; hundreds of times from brokers, sellers, and investors. The emotional toll is real</li>
          <li><strong>Intellectual curiosity:</strong> Successful searchers become mini-experts in niche industries (HVAC, waste management, insurance) they never expected to love. Understanding{" "}
            <Link href="/learn/what-makes-good-acquisition-target" className="text-apple-accent hover:underline">
              what makes a good acquisition target
            </Link>{" "}
            requires genuine interest in learning new sectors</li>
          <li><strong>Leadership instinct:</strong> You genuinely want to lead people. The business you acquire will have employees who depend on you</li>
        </ul>

        <h3 className={h3Class}>Mixed signals</h3>
        <ul className={ulClass}>
          <li><strong>Perfectionism:</strong> Useful in DD, harmful during search. No deal is perfect, good searchers know when &ldquo;good enough&rdquo; is good enough</li>
          <li><strong>Risk aversion:</strong> Some caution is healthy, but ETA requires signing personal guarantees and putting your career on hold. If you can&rsquo;t sleep with uncertainty, this isn&rsquo;t for you</li>
          <li><strong>Technical expertise:</strong> Deep domain knowledge can be a double-edged sword. It narrows your search but may cause you to over-index on operational details during evaluation</li>
        </ul>

        <h3 className={h3Class}>Red flags for ETA</h3>
        <ul className={ulClass}>
          <li><strong>Desire for prestige:</strong> Acquired businesses are unsexy, plumbing companies, insurance agencies, staffing firms. If you need a cool company name at dinner parties, this isn&rsquo;t the path</li>
          <li><strong>Impatience with people:</strong> Your employees will be less polished than investment bankers or management consultants. Can you lead diverse teams?</li>
          <li><strong>Need for constant validation:</strong> Search is lonely. There are no quarterly reviews or promotions. You&rsquo;re alone with your deal funnel</li>
          <li><strong>Inability to delegate:</strong> You&rsquo;ll run a company with 20-200 employees. Micromanagers fail spectacularly</li>
        </ul>

        <h2 className={h2Class}>Financial readiness assessment</h2>

        <h3 className={h3Class}>Personal financial runway</h3>
        <p>
          How much{" "}
          <Link href="/learn/search-fund-cost" className="text-apple-accent hover:underline">
            does a search fund cost
          </Link>?{" "}
          Even in a traditional search fund, your personal finances matter:
        </p>
        <ul className={ulClass}>
          <li><strong>12-24 months of living expenses:</strong> Search takes longer than expected. Budget for 18 months minimum</li>
          <li><strong>Emergency fund:</strong> Keep 3-6 months beyond your search budget for unexpected costs</li>
          <li><strong>Debt load:</strong> High monthly obligations (mortgage, student loans) limit flexibility. Consider your all-in monthly burn rate</li>
          <li><strong>Family situation:</strong> Do you have a working spouse/partner? Dependent children? Healthcare through your own plan?</li>
          <li><strong>Opportunity cost:</strong> If you&rsquo;re earning $200K+ in consulting or banking, the financial sacrifice is substantial</li>
        </ul>

        <h3 className={h3Class}>Self-funded vs. traditional</h3>
        <p>
          Your financial situation influences which model fits:{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            self-funded search
          </Link>{" "}
          requires more personal capital but gives you more equity.
          Traditional search fund raises investor capital for{" "}
          <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">
            searcher compensation
          </Link>{" "}
          during search, but dilutes your ownership at acquisition.
        </p>

        <h2 className={h2Class}>Career readiness assessment</h2>

        <h3 className={h3Class}>Ideal pre-ETA experience</h3>
        <ul className={ulClass}>
          <li><strong>2-7 years post-MBA or equivalent:</strong> Enough experience to be credible, young enough to commit 5-10 years as CEO</li>
          <li><strong>P&amp;L exposure:</strong> Even partial P&amp;L responsibility helps you understand business economics</li>
          <li><strong>Cross-functional experience:</strong> Operations, finance, sales, or strategy, you&rsquo;ll touch all functions as a CEO</li>
          <li><strong>Industry knowledge (optional):</strong> Sector expertise helps but isn&rsquo;t required. Most successful searchers acquire in unfamiliar industries</li>
        </ul>

        <h3 className={h3Class}>Skills you&rsquo;ll need as CEO</h3>
        <ul className={ulClass}>
          <li><strong>Financial literacy:</strong> You must read financial statements fluently. Understand{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              EBITDA
            </Link>, working capital, and cash flow</li>
          <li><strong>Selling:</strong> You&rsquo;ll sell to investors, sellers, employees, customers, and lenders. Sales ability is non-negotiable</li>
          <li><strong>People management:</strong> Hiring, firing, coaching, and motivating. This is 60% of the CEO job in an SME</li>
          <li><strong>Decision-making under uncertainty:</strong> You&rsquo;ll make consequential decisions with imperfect information, daily</li>
        </ul>

        <h2 className={h2Class}>The self-assessment scorecard</h2>
        <p>
          Rate yourself honestly (1-5) on each dimension:
        </p>
        <ol className={olClass}>
          <li><strong>Risk tolerance:</strong> Can you handle financial uncertainty for 2+ years? Can you sign a personal guarantee?</li>
          <li><strong>Emotional resilience:</strong> How do you handle rejection, isolation, and self-doubt?</li>
          <li><strong>Leadership drive:</strong> Do you genuinely want to manage 20-200 people, not just strategy?</li>
          <li><strong>Financial runway:</strong> Can you sustain 18+ months without income?</li>
          <li><strong>Family/partner support:</strong> Is your family on board with the risk and time commitment?</li>
          <li><strong>Opportunity cost comfort:</strong> Are you at peace walking away from your current career trajectory?</li>
          <li><strong>Humility:</strong> Can you run a &ldquo;boring&rdquo; business and find meaning in it?</li>
          <li><strong>Tenacity:</strong> Will you push through when deals fall apart (and they will)?</li>
          <li><strong>Communication:</strong> Can you sell yourself to investors, negotiate with sellers, and inspire employees?</li>
          <li><strong>Generalist aptitude:</strong> Are you comfortable being decent at many things rather than expert at one?</li>
        </ol>
        <p>
          <strong>35+ out of 50:</strong> Strong ETA candidate. Start your{" "}
          <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">
            pre-search preparation
          </Link>.
          <br />
          <strong>25-34:</strong> Viable but identify your weak areas and address them before starting.
          <br />
          <strong>Below 25:</strong> ETA may not be the right path. Consider other entrepreneurial models or wait until your situation improves.
        </p>

        <h2 className={h2Class}>Common &ldquo;should I or shouldn&rsquo;t I?&rdquo; scenarios</h2>

        <h3 className={h3Class}>Scenario 1: The golden handcuffs</h3>
        <p>
          You earn $250K in consulting or banking. ETA means giving that up for
          a $100K{" "}
          <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">
            search stipend
          </Link>{" "}
          (traditional) or zero income (self-funded). But the expected value
          of a successful search fund acquisition is $5-15M in personal
          equity over 5-7 years. The math works if you can sustain the
          short-term sacrifice.
        </p>

        <h3 className={h3Class}>Scenario 2: Young and hungry</h3>
        <p>
          You&rsquo;re 26-30, minimal savings, but high energy and low
          obligations. Traditional search fund is ideal, investors fund
          your search and salary. Your youth is an asset: investors want
          searchers with a long runway to build value.
        </p>

        <h3 className={h3Class}>Scenario 3: Experienced operator</h3>
        <p>
          You&rsquo;re 35-45 with significant savings, operational
          experience, and a network.{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            Self-funded search
          </Link>{" "}
          makes more sense: you don&rsquo;t need investor capital to fund
          the search, and you keep more equity. Your experience also makes
          you credible with sellers and lenders.
        </p>

        <h3 className={h3Class}>Scenario 4: International background</h3>
        <p>
          You&rsquo;re based in{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            Europe
          </Link>{" "}
          or want to acquire cross-border. ETA is growing fast internationally.
          Each country has different dynamics, check our regional guides
          for{" "}
          <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
            France
          </Link>,{" "}
          <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">
            Germany
          </Link>,{" "}
          <Link href="/learn/eta-uk" className="text-apple-accent hover:underline">
            UK
          </Link>, and{" "}
          <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">
            best countries to buy a business
          </Link>.
        </p>

        <h2 className={h2Class}>Next steps if ETA is right for you</h2>
        <ol className={olClass}>
          <li>Read the{" "}
            <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
              complete getting started guide
            </Link></li>
          <li>Understand the{" "}
            <Link href="/learn/search-fund-lifecycle" className="text-apple-accent hover:underline">
              search fund lifecycle
            </Link></li>
          <li>Build your{" "}
            <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
              acquisition thesis
            </Link></li>
          <li>Connect with other searchers through ETA communities and conferences</li>
          <li>Start your{" "}
            <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">
              pre-search preparation
            </Link></li>
        </ol>

        <h2 className={h2Class}>Next steps if ETA is not right for you</h2>
        <p>
          If the self-assessment reveals ETA isn&rsquo;t the best fit right now,
          consider these alternatives:
        </p>
        <ul className={ulClass}>
          <li><strong>Angel investing in search funds:</strong> Invest passively in searchers. Learn the model without the CEO commitment</li>
          <li><strong>Join an acquired company:</strong> Many search fund CEOs hire COOs, CFOs, and VPs. Get the operator experience without the risk</li>
          <li><strong>Independent sponsor / fundless sponsor:</strong> Do deals on a one-off basis without raising a search fund. See our{" "}
            <Link href="/learn/search-fund-vs-independent-sponsor" className="text-apple-accent hover:underline">
              comparison guide
            </Link></li>
          <li><strong>Search fund advisory:</strong> Work as an advisor to searchers while maintaining your day job. Our{" "}
            <Link href="/learn/buying-vs-starting-business" className="text-apple-accent hover:underline">
              buying vs. starting a business comparison
            </Link>{" "}
            may also help clarify your entrepreneurial path</li>
          <li><strong>Wait:</strong> ETA isn&rsquo;t going anywhere. The{" "}
            <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
              baby boomer succession wave
            </Link>{" "}
            will create opportunities for the next 15+ years</li>
        </ul>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>What is the ideal age to start a search fund?</h3>
        <p>
          Most successful search fund CEOs start between ages 28 and 35, typically 2-7 years after completing an MBA or gaining equivalent professional experience. Younger searchers (26-30) benefit from low personal obligations and a long runway, making them attractive to investors. Experienced operators (35-45) often prefer self-funded search, where their operational track record and personal capital make them credible with sellers and lenders. There is no hard age limit, but the 5-10 year CEO commitment matters to investors.
        </p>

        <h3 className={h3Class}>Do I need an MBA to pursue ETA?</h3>
        <p>
          No. While many searchers come from MBA programs (especially Stanford, HBS, and IESE), an MBA is not required. What matters is financial literacy, leadership ability, sales skills, and the resilience to endure a long search. Investors evaluate your professional track record, communication skills, and coachability more than your degree. Self-funded searchers, in particular, rely on operational experience and personal capital rather than academic credentials.
        </p>

        <h3 className={h3Class}>How long does the search phase typically last?</h3>
        <p>
          The search phase typically lasts 12-24 months for a traditional search fund. Self-funded searchers may find a target in 6-18 months, depending on how narrowly they define their criteria. About 25-30% of searchers never close a deal, usually because they search too broadly, set unrealistic price expectations, or underestimate the emotional toll. Defining clear acquisition criteria early and building strong broker relationships significantly shortens the timeline.
        </p>
      </div>
    </article>
  );
}
