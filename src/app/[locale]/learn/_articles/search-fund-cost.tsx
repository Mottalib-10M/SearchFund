import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SearchFundCostArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        How Much Does It Cost to Start a Search Fund?
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          Starting a search fund requires surprisingly little personal
          capital &mdash; in a traditional search fund, the investors fund
          everything. But that doesn&rsquo;t mean there are no costs.
          This guide breaks down the real expenses at every stage of the{" "}
          <Link href="/learn/search-fund-lifecycle" className="text-apple-accent hover:underline">
            search fund lifecycle
          </Link>,
          from fundraise through acquisition.
        </p>

        <h2 className={h2Class}>Traditional search fund costs</h2>
        <p>
          In a traditional search fund, investors provide $400K&ndash;$600K
          in search capital to fund the search phase. The searcher&rsquo;s
          personal financial contribution is minimal, but the total cost
          structure is important to understand.
        </p>

        <h3 className={h3Class}>Search capital budget (investor-funded)</h3>
        <ul className={ulClass}>
          <li><strong>Searcher salary:</strong> $80K&ndash;$120K per year (typically 18&ndash;24 months = $120K&ndash;$240K total)</li>
          <li><strong>Health insurance:</strong> $10K&ndash;$25K per year</li>
          <li><strong>Legal formation:</strong> $15K&ndash;$40K (entity creation, PPM drafting, subscription agreements)</li>
          <li><strong>Travel:</strong> $15K&ndash;$30K per year (visiting businesses, meeting sellers)</li>
          <li><strong>Office/co-working:</strong> $3K&ndash;$12K per year</li>
          <li><strong>Technology &amp; tools:</strong> $2K&ndash;$5K per year (CRM, databases, research subscriptions)</li>
          <li><strong>Deal expenses:</strong> $5K&ndash;$15K per LOI (legal review, preliminary diligence)</li>
          <li><strong>Accounting:</strong> $5K&ndash;$10K per year (fund accounting, tax prep)</li>
        </ul>
        <p>
          <strong>Total search capital:</strong> $400K&ndash;$600K for an
          18&ndash;24 month search. If the search extends beyond the
          initial runway, additional capital may be raised.
        </p>

        <h3 className={h3Class}>Personal costs (searcher-funded)</h3>
        <ul className={ulClass}>
          <li><strong>Opportunity cost:</strong> The salary you give up from your current job (the biggest &ldquo;cost&rdquo;)</li>
          <li><strong>Income gap:</strong> Search fund salary ($80K&ndash;$120K) is often 30&ndash;50% below what MBA grads could earn in consulting, banking, or tech</li>
          <li><strong>Moving expenses:</strong> If you relocate to the target market</li>
          <li><strong>Networking expenses:</strong> Conferences, dinners, travel not covered by fund</li>
          <li><strong>Personal financial runway:</strong> 3&ndash;6 months of living expenses as a safety net</li>
        </ul>

        <h2 className={h2Class}>Self-funded search costs</h2>
        <p>
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            Self-funded searchers
          </Link>{" "}
          bear all search costs personally. The trade-off: you keep more
          equity (often 50&ndash;100%) but need more personal capital.
        </p>

        <h3 className={h3Class}>Part-time search (while employed)</h3>
        <ul className={ulClass}>
          <li><strong>Monthly cash costs:</strong> $500&ndash;$2,000/month (tools, travel, database subscriptions, broker meals)</li>
          <li><strong>Legal:</strong> $5K&ndash;$15K for entity formation and initial LOI review</li>
          <li><strong>Total over 12&ndash;24 months:</strong> $10K&ndash;$50K personal investment</li>
          <li><strong>Key advantage:</strong> You maintain your salary while searching</li>
        </ul>

        <h3 className={h3Class}>Full-time self-funded search</h3>
        <ul className={ulClass}>
          <li><strong>Living expenses:</strong> 6&ndash;18 months of personal runway ($30K&ndash;$100K+)</li>
          <li><strong>Search expenses:</strong> $15K&ndash;$40K (travel, tools, legal, database access)</li>
          <li><strong>Total personal investment:</strong> $50K&ndash;$150K</li>
          <li><strong>Key advantage:</strong> Full-time focus typically compresses the search by 6&ndash;12 months</li>
        </ul>

        <h2 className={h2Class}>Acquisition costs</h2>
        <p>
          Beyond search costs, the acquisition itself requires
          significant capital:
        </p>

        <h3 className={h3Class}>Due diligence expenses</h3>
        <ul className={ulClass}>
          <li>
            <strong>
              <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
                Quality of Earnings report
              </Link>:
            </strong>{" "}
            $20K&ndash;$80K (the most expensive DD item)
          </li>
          <li><strong>Legal due diligence:</strong> $15K&ndash;$50K (contract review, IP, employment)</li>
          <li><strong>Environmental assessment:</strong> $5K&ndash;$15K (Phase I, if applicable)</li>
          <li><strong>Other specialists:</strong> $5K&ndash;$20K (IT, real estate, insurance review)</li>
        </ul>

        <h3 className={h3Class}>Transaction costs</h3>
        <ul className={ulClass}>
          <li><strong>Legal (purchase agreement):</strong> $30K&ndash;$100K for buyer&rsquo;s counsel</li>
          <li><strong>Lender fees:</strong> 1&ndash;3% of loan amount (SBA guarantee fees, origination)</li>
          <li><strong>Title/escrow:</strong> $2K&ndash;$10K</li>
          <li><strong>R&amp;W insurance (if used):</strong> 2&ndash;4% of coverage limit</li>
        </ul>

        <h3 className={h3Class}>Equity injection</h3>
        <ul className={ulClass}>
          <li>
            <strong>Traditional search fund:</strong> Investors provide
            acquisition equity. Searcher invests $0&ndash;$50K personal
            equity (some investors require &ldquo;skin in the game&rdquo;)
          </li>
          <li>
            <strong>Self-funded with{" "}
              <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
                SBA
              </Link>:
            </strong>{" "}
            10&ndash;15% equity injection required ($50K&ndash;$500K
            depending on deal size). Can come from personal savings,
            investor equity, or{" "}
            <Link href="/learn/buy-business-no-money-down" className="text-apple-accent hover:underline">
              creative structures
            </Link>
          </li>
        </ul>

        <h2 className={h2Class}>Total cost summary</h2>

        <h3 className={h3Class}>Traditional search fund</h3>
        <ul className={ulClass}>
          <li><strong>Personal cash needed:</strong> $0&ndash;$50K</li>
          <li><strong>Investor capital (search):</strong> $400K&ndash;$600K</li>
          <li><strong>Investor capital (acquisition equity):</strong> $2M&ndash;$10M+</li>
          <li><strong>Your cost:</strong> Opportunity cost + income gap for 2&ndash;3 years</li>
        </ul>

        <h3 className={h3Class}>Self-funded (part-time)</h3>
        <ul className={ulClass}>
          <li><strong>Personal cash needed:</strong> $10K&ndash;$50K (search) + $50K&ndash;$200K (equity injection)</li>
          <li><strong>Total personal investment:</strong> $60K&ndash;$250K</li>
          <li><strong>Your reward:</strong> 50&ndash;100% equity ownership</li>
        </ul>

        <h3 className={h3Class}>Self-funded (full-time)</h3>
        <ul className={ulClass}>
          <li><strong>Personal cash needed:</strong> $50K&ndash;$150K (search + living) + $50K&ndash;$200K (equity injection)</li>
          <li><strong>Total personal investment:</strong> $100K&ndash;$350K</li>
          <li><strong>Your reward:</strong> 50&ndash;100% equity ownership + faster timeline</li>
        </ul>

        <h2 className={h2Class}>How to reduce costs</h2>
        <ul className={ulClass}>
          <li><strong>Search part-time initially:</strong> Keep your day job to avoid drawing down personal runway</li>
          <li><strong>Leverage free resources:</strong> SearchFunder community, local ETA meetups, free broker deal flow</li>
          <li><strong>Minimize legal spend early:</strong> Use template LOIs, only engage expensive counsel once you have an accepted LOI</li>
          <li><strong>Negotiate QoE costs:</strong> Get 3 quotes; smaller regional CPA firms charge $20K&ndash;$35K vs. Big 4 at $50K&ndash;$80K</li>
          <li><strong>Use{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing
            </Link>{" "}
            to reduce equity needs:</strong> A 10&ndash;20% seller note reduces your equity injection</li>
          <li><strong>Partnered search:</strong> Split costs with a co-searcher (but also split equity)</li>
        </ul>

        <h2 className={h2Class}>Is it worth it?</h2>
        <p>
          Despite the costs and opportunity cost, the economics of
          search funds are compelling. According to{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            Stanford data
          </Link>,
          the median successful search fund CEO earns $5M&ndash;$15M+
          over the lifecycle of the fund. For self-funded searchers who
          acquire a business at 4&ndash;5x EBITDA and grow it over
          5&ndash;7 years, the personal wealth creation can be
          transformative. See our{" "}
          <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">
            searcher compensation
          </Link>{" "}
          guide for detailed economics, and study the{" "}
          <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
            common mistakes that destroy value
          </Link>{" "}
          so you can protect your investment.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>What is the minimum personal capital needed for a search fund?</h3>
        <p>
          In a traditional search fund, the minimum personal capital is
          effectively $0 &mdash; investors fund the entire search and
          acquisition. Some investors request $10K&ndash;$50K as &ldquo;skin
          in the game,&rdquo; but it is not universal. For self-funded
          searchers using SBA financing, the minimum equity injection is
          typically 10&ndash;15% of the deal size, meaning a $2M acquisition
          requires $200K&ndash;$300K in personal or investor equity.
        </p>

        <h3 className={h3Class}>How do search fund costs compare across different industries?</h3>
        <p>
          Costs vary significantly by sector. SaaS and technology
          acquisitions command higher multiples (4&ndash;8x ARR) but have
          lower ongoing capex. Home services and business services trade at
          lower multiples (3&ndash;6x EBITDA) but may require working capital
          for equipment or vehicles. Our{" "}
          <Link href="/learn/best-industries-search-funds" className="text-apple-accent hover:underline">
            industry ranking guide
          </Link>{" "}
          details typical multiples, margins, and capital requirements for
          each sector.
        </p>

        <h3 className={h3Class}>What hidden costs do first-time search fund entrepreneurs miss?</h3>
        <p>
          The most commonly overlooked costs include working capital
          adjustments at closing ($50K&ndash;$200K), post-acquisition
          technology and system upgrades ($20K&ndash;$100K), key employee
          retention bonuses ($25K&ndash;$75K), and the personal income gap
          during the 2&ndash;3 year search-to-stabilization period. Building
          a realistic{" "}
          <Link href="/learn/how-long-buy-business" className="text-apple-accent hover:underline">
            timeline
          </Link>{" "}
          helps estimate total personal financial exposure before launching
          the search.
        </p>
      </div>
    </article>
  );
}
