import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SearchFundSalaryArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Search Fund Salary: How Much Do Searchers Earn?
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Search fund compensation varies dramatically by phase (search vs.
          operations), model (traditional vs. self-funded), and geography.
          This guide covers the full{" "}
          <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">
            compensation structure
          </Link>{" "}
          including salary, equity, and total expected value.
        </p>

        <h2 className={h2Class}>During the search phase</h2>

        <h3 className={h3Class}>Traditional search fund</h3>
        <ul className={ulClass}>
          <li><strong>Annual salary:</strong> $80,000&ndash;$120,000 (US), &euro;50,000&ndash;&euro;80,000 (Europe)</li>
          <li><strong>Source:</strong> Paid from the search capital raised from investors</li>
          <li><strong>Duration:</strong> 12&ndash;24 months (typical search period)</li>
          <li><strong>Benefits:</strong> Health insurance (self-purchased), no 401(k) match, no bonus</li>
          <li><strong>Context:</strong> This is a significant pay cut for most searchers coming from consulting ($150K+) or banking ($200K+)</li>
        </ul>

        <h3 className={h3Class}>Self-funded search</h3>
        <ul className={ulClass}>
          <li><strong>Annual salary:</strong> $0 during search &mdash; self-funded searchers pay their own living expenses</li>
          <li><strong>Personal burn:</strong> $3,000&ndash;$10,000/month depending on location and lifestyle</li>
          <li><strong>Total out-of-pocket:</strong> $50K&ndash;$150K for 6&ndash;18 months of search expenses + living costs</li>
          <li><strong>Trade-off:</strong> No salary during search, but significantly more equity at acquisition (50&ndash;100% vs. 20&ndash;30% in traditional model)</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition CEO salary</h2>

        <h3 className={h3Class}>US market</h3>
        <ul className={ulClass}>
          <li><strong>Year 1:</strong> $150,000&ndash;$250,000 (lower end for smaller businesses)</li>
          <li><strong>Year 2&ndash;3:</strong> $200,000&ndash;$350,000 (as the CEO proves competence and the business grows)</li>
          <li><strong>Year 4+:</strong> $250,000&ndash;$400,000+ (scaled with business performance)</li>
          <li><strong>Median (Stanford 2024):</strong> $200,000 in year 1, growing to $275,000 by year 3</li>
        </ul>

        <h3 className={h3Class}>European market</h3>
        <ul className={ulClass}>
          <li><strong>Year 1:</strong> &euro;100,000&ndash;&euro;180,000</li>
          <li><strong>Year 2&ndash;3:</strong> &euro;130,000&ndash;&euro;220,000</li>
          <li><strong>Note:</strong> European CEO salaries are lower but come with stronger social safety nets (healthcare, pension contributions, severance protections)</li>
        </ul>

        <h3 className={h3Class}>How CEO salary is determined</h3>
        <ul className={ulClass}>
          <li>Set by the{" "}
            <Link href="/learn/board-governance" className="text-apple-accent hover:underline">
              board of directors
            </Link>{" "}
            (in a traditional search fund)</li>
          <li>Benchmarked against comparable CEO roles in the industry and geography</li>
          <li>Typically starts below market to preserve cash flow for debt service</li>
          <li>Increases are tied to business performance milestones</li>
          <li>Bonus structures (10&ndash;30% of base) tied to EBITDA growth, revenue targets, or other KPIs</li>
        </ul>

        <h2 className={h2Class}>The equity component: where the real money is</h2>
        <p>
          Salary is secondary to equity in search fund economics.
          See our{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            cap tables &amp; equity guide
          </Link>{" "}
          for the full structure.
        </p>

        <h3 className={h3Class}>Traditional search fund equity</h3>
        <ul className={ulClass}>
          <li><strong>Total equity earned:</strong> 20&ndash;30% of the acquired company&rsquo;s equity</li>
          <li><strong>Vesting:</strong> Typically earned in 3 tranches over 4&ndash;5 years</li>
          <li><strong>Step-up:</strong> Investors convert their search capital into equity at acquisition, typically at a{" "}
            <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
              1.5x step-up
            </Link>{" "}
            (paying $1.50 per unit for shares worth $1.00)</li>
          <li><strong>Expected value:</strong> $5M&ndash;$15M for a median successful outcome over 5&ndash;7 years</li>
        </ul>

        <h3 className={h3Class}>Self-funded search equity</h3>
        <ul className={ulClass}>
          <li><strong>Total equity owned:</strong> 50&ndash;100% of the company&rsquo;s equity</li>
          <li><strong>Personal investment:</strong> $50K&ndash;$300K equity injection into the deal</li>
          <li><strong>No investor dilution:</strong> No step-up, no investor preferred equity</li>
          <li><strong>Expected value:</strong> Higher equity ownership means potentially larger returns, but with more personal risk</li>
        </ul>

        <h2 className={h2Class}>Total compensation: the full picture</h2>

        <h3 className={h3Class}>Traditional search fund (7-year scenario)</h3>
        <ul className={ulClass}>
          <li>Search salary (2 years): $200K</li>
          <li>CEO salary (5 years): $1.25M</li>
          <li>Bonuses (5 years): $200K</li>
          <li>Equity at exit (25% of $30M company): $7.5M</li>
          <li><strong>Total 7-year compensation: ~$9.15M</strong></li>
          <li><strong>Annualized: ~$1.3M/year</strong></li>
        </ul>

        <h3 className={h3Class}>Self-funded search (7-year scenario)</h3>
        <ul className={ulClass}>
          <li>Search salary (1.5 years): $0</li>
          <li>CEO salary (5 years): $1.5M</li>
          <li>Equity at exit (80% of $15M company): $12M</li>
          <li><strong>Total 7-year compensation: ~$13.5M</strong></li>
          <li><strong>Annualized: ~$1.9M/year</strong> (but with $200K+ personal capital at risk)</li>
        </ul>

        <h2 className={h2Class}>How search fund salary compares to alternatives</h2>
        <ul className={ulClass}>
          <li><strong>Management consulting (Partner):</strong> $400K&ndash;$1M/year. Higher and more predictable, but 15&ndash;20 years to reach partner. No equity upside</li>
          <li><strong>Private equity (VP/Principal):</strong> $300K&ndash;$600K/year + carry. Similar equity upside timeline but as a fund employee, not a CEO</li>
          <li><strong>Corporate executive (VP/SVP):</strong> $200K&ndash;$500K/year + RSUs. More predictable but capped upside</li>
          <li><strong>Startup founder:</strong> $0&ndash;$150K/year for 3&ndash;5 years. Higher potential upside ($50M+) but 90%+ failure rate</li>
        </ul>

        <p>
          The ETA path offers the best risk-adjusted return on human capital
          for operators who want to be CEOs. For more on the economics, see{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            search fund returns
          </Link>{" "}
          and{" "}
          <Link href="/learn/search-fund-cost" className="text-apple-accent hover:underline">
            how much does it cost to start a search fund
          </Link>.
        </p>
      </div>
    </article>
  );
}
