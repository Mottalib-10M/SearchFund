import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function HowToEvaluateSearcherArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        How to Evaluate a Searcher: Due Diligence for Investors
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          In search fund investing, the entrepreneur is the investment.
          Unlike PE or VC where you evaluate a business plan or product,
          search fund investors evaluate a person &mdash; their ability to
          find, acquire, and operate a small business. This guide provides
          the framework experienced search fund investors use to
          evaluate searcher candidates.
        </p>

        <h2 className={h2Class}>Why searcher selection matters</h2>
        <ul className={ulClass}>
          <li><strong>Returns concentration:</strong> The Stanford 2024 Search Fund Study shows{" "}
            <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
              search fund returns
            </Link>{" "}
            are driven by the top quartile of operators, with the top 25% generating the vast majority of aggregate investor returns. The median outcome is far less impressive</li>
          <li><strong>Long commitment:</strong> You are backing a 7&ndash;10 year relationship (2 years of search + 5&ndash;8 years of operations)</li>
          <li><strong>Limited diversification:</strong> Each investment is a concentrated single-company bet. The operator is the biggest risk factor</li>
          <li><strong>No recourse:</strong> Once the searcher acquires a business, your capital is locked. There is no exit until the company is sold</li>
        </ul>

        <h2 className={h2Class}>The evaluation framework</h2>

        <h3 className={h3Class}>1. Track record &amp; competence</h3>
        <ul className={ulClass}>
          <li><strong>Work history:</strong> 3&ndash;7 years of progressively responsible positions. Management experience is ideal but not required</li>
          <li><strong>P&amp;L ownership:</strong> Has the candidate managed a budget, team, or business unit? Have they made consequential decisions?</li>
          <li><strong>Industry fit:</strong> Relevant industry experience is a plus but not necessary. General management skills transfer well</li>
          <li><strong>Academic record:</strong> MBA from a top program (Stanford, Harvard, IESE, INSEAD) is common but not required. Intellectual horsepower matters more than pedigree</li>
        </ul>

        <h3 className={h3Class}>2. Character &amp; integrity</h3>
        <ul className={ulClass}>
          <li><strong>Reference checks:</strong> Talk to former managers, colleagues, and direct reports. Ask: &ldquo;Would you work for this person?&rdquo;</li>
          <li><strong>Transparency:</strong> Does the candidate share bad news proactively? Do they acknowledge weaknesses?</li>
          <li><strong>Decision-making under pressure:</strong> Ask for examples of difficult decisions with imperfect information</li>
          <li><strong>Coachability:</strong> Will they listen to board advice? Can they take constructive feedback without defensiveness?</li>
        </ul>

        <h3 className={h3Class}>3. Resilience &amp; grit</h3>
        <ul className={ulClass}>
          <li><strong>Why it matters:</strong> The search process is a 12&ndash;24 month marathon of rejection. 100+ proprietary conversations, dozens of NDAs, and many dead ends before finding the right acquisition</li>
          <li><strong>Past adversity:</strong> How have they handled setbacks? Look for evidence of perseverance through difficult situations</li>
          <li><strong>Realistic expectations:</strong> Do they understand the emotional toll of the search? Are they financially and psychologically prepared?</li>
          <li><strong>Family support:</strong> A supportive partner/family is a material factor in searcher success</li>
        </ul>

        <h3 className={h3Class}>4. Business acumen</h3>
        <ul className={ulClass}>
          <li><strong>Financial literacy:</strong> Can they read and interpret financial statements? Do they understand{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              adjusted EBITDA
            </Link>,{" "}
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
              valuation methods
            </Link>, and deal structuring?</li>
          <li><strong>Search thesis:</strong> Do they have a clear{" "}
            <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
              acquisition thesis
            </Link>{" "}
            with defined criteria? Or are they &ldquo;looking at everything?&rdquo;</li>
          <li><strong>Operational instincts:</strong> When evaluating a business, do they focus on the right things? Can they identify value creation opportunities?</li>
          <li><strong>Risk assessment:</strong> Can they identify{" "}
            <Link href="/learn/red-flags-due-diligence" className="text-apple-accent hover:underline">
              red flags
            </Link>{" "}
            and know when to walk away?</li>
        </ul>

        <h3 className={h3Class}>5. Leadership potential</h3>
        <ul className={ulClass}>
          <li><strong>Team building:</strong> Can they recruit, motivate, and retain employees? Managing a 50-person company requires different skills than managing a 3-person deal team</li>
          <li><strong>Communication:</strong> Clear, honest communication with employees, customers, investors, and advisors</li>
          <li><strong>Decision velocity:</strong> Can they make decisions quickly with imperfect information? Analysis paralysis kills post-acquisition value</li>
          <li><strong>Cultural sensitivity:</strong> Especially for{" "}
            <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">
              cross-border deals
            </Link>, can they adapt to different business cultures?</li>
        </ul>

        <h2 className={h2Class}>Red flags</h2>
        <ul className={ulClass}>
          <li><strong>Overconfidence:</strong> Candidates who believe they will &ldquo;definitely&rdquo; find a deal quickly or can &ldquo;easily&rdquo; grow any business</li>
          <li><strong>Vague thesis:</strong> &ldquo;I&rsquo;m open to anything&rdquo; suggests insufficient preparation</li>
          <li><strong>Financial immaturity:</strong> Personal financial instability creates pressure to close on a bad deal</li>
          <li><strong>Blame shifting:</strong> Candidates who attribute all past failures to others</li>
          <li><strong>Solo flight:</strong> Reluctance to build a board, seek mentors, or accept investor guidance</li>
        </ul>

        <h2 className={h2Class}>The interview process</h2>
        <ul className={ulClass}>
          <li><strong>Multiple meetings:</strong> Pacific Lake Partners recommends spending 4&ndash;6 hours across 2&ndash;3 meetings before committing</li>
          <li><strong>Case discussion:</strong> Walk through a real (anonymized) deal together. How do they evaluate it?</li>
          <li><strong>6+ references:</strong> Talk to former managers, peers, and direct reports. Former direct reports are the most revealing</li>
          <li><strong>Co-investor diligence:</strong> Compare notes with other investors evaluating the same candidate</li>
        </ul>

        <h2 className={h2Class}>Post-investment monitoring</h2>
        <p>
          Evaluating a searcher does not end at the commitment letter. Active
          investors monitor searcher performance throughout the search phase
          to protect their investment and maximize the probability of a
          successful acquisition. Key monitoring touchpoints include monthly
          update calls reviewing deal pipeline and sourcing activity, quarterly
          reviews of search thesis refinement, and milestone-based assessments
          at 6 and 12 months.
        </p>
        <p>
          Watch for early warning signs during the search: a searcher who
          has not submitted an LOI within 12 months may need coaching on
          criteria refinement or deal evaluation. A searcher who submits
          multiple LOIs that fail to close may have valuation discipline
          issues. The best investors act as mentors and sounding boards
          throughout the process, leveraging their experience with{" "}
          <Link href="/learn/portfolio-construction-search-funds" className="text-apple-accent hover:underline">
            portfolio construction
          </Link>{" "}
          to guide searchers toward better outcomes.
        </p>

        <p>
          For the investor perspective on{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            search fund economics
          </Link>{" "}
          and{" "}
          <Link href="/learn/are-search-funds-good-investment" className="text-apple-accent hover:underline">
            whether search funds are a good investment
          </Link>, see our investor guides.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How much weight should investors put on MBA pedigree?</h3>
        <p>
          While most traditional search fund entrepreneurs hold MBAs from
          top programs (Stanford, Harvard, Wharton, IESE, INSEAD), the
          Stanford 2024 Study shows that the specific school matters less
          than the competencies developed there. Investors should focus on
          demonstrated analytical rigor, leadership experience, and
          operational instincts rather than the school name. Some of the
          best-performing searchers have non-traditional backgrounds, and
          the growing self-funded search community has expanded the pool
          beyond the traditional MBA pipeline significantly.
        </p>

        <h3 className={h3Class}>What is the ideal age and experience level for a searcher?</h3>
        <p>
          Most successful searchers have 3&ndash;7 years of post-undergraduate
          work experience, putting them in the 27&ndash;35 age range. Too
          little experience and they lack the management skills needed to
          run a business; too much and they may struggle with the compensation
          reduction and ambiguity of the search process. The ideal candidate
          has held positions with progressively increasing responsibility,
          ideally including some P&amp;L ownership or general management
          experience. Military veterans and former management consultants
          often perform well due to their comfort with ambiguity and
          structured problem-solving.
        </p>

        <h3 className={h3Class}>How many searchers should an investor back per year?</h3>
        <p>
          Active search fund investors typically back 2&ndash;6 new searchers
          per year, balancing diversification with the capacity for meaningful
          engagement. Backing too many searchers dilutes the time available
          for mentorship and deal evaluation, which are critical to returns.
          Most experienced investors report that their best outcomes come from
          searchers with whom they have the closest working relationships.
          See our{" "}
          <Link href="/learn/risk-factors-search-fund-investing" className="text-apple-accent hover:underline">
            risk factors guide
          </Link>{" "}
          for more on portfolio strategy.
        </p>
      </div>
    </article>
  );
}
