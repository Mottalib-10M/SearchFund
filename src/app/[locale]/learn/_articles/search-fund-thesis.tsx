import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SearchFundThesisArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        How to Build Your Search Fund Thesis
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Your acquisition thesis is the strategic framework that guides
          every decision during your search: which industries to target,
          what business characteristics to prioritize, and what your
          value-creation plan will be post-acquisition. A strong thesis
          helps you search efficiently, communicate clearly with{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
            investors
          </Link>,
          and evaluate opportunities systematically.
        </p>

        <h2 className={h2Class}>Why a thesis matters</h2>
        <ul className={ulClass}>
          <li><strong>Search efficiency:</strong> Without a thesis, you&rsquo;ll waste months reviewing businesses that don&rsquo;t fit. A clear thesis narrows 10,000+ potential targets to a manageable pipeline</li>
          <li><strong>Investor confidence:</strong> Investors fund searchers, not deal flow. A thoughtful thesis demonstrates analytical rigor and strategic thinking</li>
          <li><strong>Decision framework:</strong> When a broker calls with a deal that&rsquo;s &ldquo;close but not quite,&rdquo; your thesis tells you whether to pursue it or pass</li>
          <li><strong>Post-acquisition planning:</strong> Your thesis includes a value-creation hypothesis that becomes your operating playbook after closing</li>
        </ul>

        <h2 className={h2Class}>Components of a search fund thesis</h2>

        <h3 className={h3Class}>1. Industry selection</h3>
        <p>
          Pick 2&ndash;4{" "}
          <Link href="/learn/best-industries-search-funds" className="text-apple-accent hover:underline">
            target industries
          </Link>{" "}
          based on:
        </p>
        <ul className={ulClass}>
          <li><strong>Tailwinds:</strong> Aging infrastructure (HVAC), regulatory complexity (healthcare), digital transformation (traditional services), demographic shifts ({" "}
            <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
              boomer succession
            </Link>)</li>
          <li><strong>Fragmentation:</strong> Hundreds of small competitors, no dominant player, consolidation opportunity</li>
          <li><strong>Recurring revenue characteristics:</strong>{" "}
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              Recurring revenue
            </Link>{" "}
            (contracts, subscriptions, maintenance agreements)</li>
          <li><strong>Resistance to disruption:</strong> Low technology disruption risk, essential services, local/relationship-driven sales</li>
          <li><strong>Attractive unit economics:</strong> Healthy margins (15%+ EBITDA), low capex requirements, positive working capital dynamics</li>
        </ul>

        <h3 className={h3Class}>2. Target profile (ICP)</h3>
        <p>
          Define your Ideal Company Profile:
        </p>
        <ul className={ulClass}>
          <li><strong>Revenue range:</strong> $3M&ndash;$20M for traditional search; $1M&ndash;$10M for self-funded</li>
          <li><strong>EBITDA range:</strong> $1M&ndash;$5M for traditional search; $500K&ndash;$2M for self-funded</li>
          <li><strong>EBITDA margin:</strong> 15%+ for services, 10%+ for manufacturing</li>
          <li><strong>Growth rate:</strong> Stable to moderate growth (3&ndash;15% annual). Avoid declining businesses</li>
          <li><strong>Customer concentration:</strong> No customer above 10&ndash;15% of revenue. See{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              concentration risk guide
            </Link></li>
          <li><strong>Owner dependency:</strong> Low to moderate. Existing{" "}
            <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
              management layer
            </Link>{" "}
            preferred</li>
          <li><strong>Geography:</strong> Cities or regions where you&rsquo;re willing to live for 5&ndash;7 years</li>
        </ul>

        <h3 className={h3Class}>3. Value creation hypothesis</h3>
        <p>
          How will you make the business more valuable than when you bought it?
          Common levers:
        </p>
        <ul className={ulClass}>
          <li><strong>Organic growth:</strong> Sales team buildout, marketing investment, new customer channels, pricing optimization</li>
          <li><strong>Operational improvement:</strong> Process standardization, technology upgrades, procurement optimization, capacity utilization</li>
          <li><strong>Add-on acquisitions:</strong>{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              Buy-and-build
            </Link>{" "}
            to reach platform scale, capture synergies, and benefit from multiple arbitrage</li>
          <li><strong>Professional management:</strong> Replace entrepreneurial chaos with systematic management, reporting, and accountability</li>
          <li><strong>Geographic expansion:</strong> Replicate the business model in adjacent markets</li>
          <li><strong>Product/service expansion:</strong> Cross-sell or upsell to existing customers</li>
        </ul>

        <h3 className={h3Class}>4. Acquisition economics</h3>
        <ul className={ulClass}>
          <li><strong>Target multiple:</strong> 3&ndash;6x EBITDA entry ({" "}
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              industry-specific benchmarks
            </Link>)</li>
          <li><strong>
            <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
              Capital structure
            </Link>:
          </strong> 50&ndash;70% senior debt, 10&ndash;20% seller note, 10&ndash;30% equity</li>
          <li><strong>Returns target:</strong> 25%+ IRR for investors, $5M+ CEO equity over 5&ndash;7 years</li>
          <li><strong>Exit strategy:</strong>{" "}
            <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
              Strategic sale, financial sale, or dividend recap
            </Link>{" "}
            in 5&ndash;7 years</li>
        </ul>

        <h2 className={h2Class}>Thesis examples by industry</h2>

        <h3 className={h3Class}>Example 1: Home services roll-up</h3>
        <p>
          &ldquo;Acquire a{" "}
          <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">
            home services
          </Link>{" "}
          platform (HVAC, plumbing, or electrical) with $1.5M+ EBITDA in a
          mid-size US metro. Execute a buy-and-build strategy to reach $5M+
          EBITDA through 3&ndash;5 tuck-in acquisitions. Value creation
          through route density optimization, centralized dispatch, and
          recurring maintenance contracts. Target exit at 7&ndash;9x EBITDA
          to a PE-backed consolidator.&rdquo;
        </p>

        <h3 className={h3Class}>Example 2: B2B SaaS</h3>
        <p>
          &ldquo;Acquire a vertical{" "}
          <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">
            SaaS platform
          </Link>{" "}
          serving a niche industry with $2M+ ARR, 90%+ gross margins, and
          net revenue retention above 100%. Value creation through sales
          team buildout, product investment, and adjacent vertical expansion.
          Target exit at 6&ndash;10x ARR.&rdquo;
        </p>

        <h3 className={h3Class}>Example 3: European industrial services</h3>
        <p>
          &ldquo;Acquire a{" "}
          <Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">
            professional services
          </Link>{" "}
          or industrial services business in{" "}
          <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">
            Germany
          </Link>{" "}
          or{" "}
          <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
            France
          </Link>{" "}
          with &euro;1.5M+ EBITDA. Target Mittelstand businesses facing
          generational succession. Value creation through digitalization,
          operational excellence, and geographic expansion. Exit to trade
          buyer or PE in 5&ndash;7 years.&rdquo;
        </p>

        <h2 className={h2Class}>Testing your thesis</h2>
        <p>
          Before committing to a thesis, validate it:
        </p>
        <ol className={olClass}>
          <li><strong>Deal flow test:</strong> Spend 2 weeks sourcing &mdash; are there enough businesses for sale in your target industries and geographies?</li>
          <li><strong>Investor test:</strong> Present your thesis to 3&ndash;5{" "}
            <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
              search fund investors
            </Link>. Do they find it compelling?</li>
          <li><strong>Expert test:</strong> Talk to 5&ndash;10 industry operators. Do your assumptions about margins, growth, and consolidation hold up?</li>
          <li><strong>Financial test:</strong> Model a representative deal. Does the math work with realistic assumptions on{" "}
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
              valuation
            </Link>,{" "}
            <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
              financing
            </Link>, and growth?</li>
          <li><strong>Personal fit test:</strong> Can you see yourself running this type of business for 5&ndash;7 years? Visit some operations, talk to CEOs in the industry</li>
        </ol>

        <h2 className={h2Class}>Common thesis mistakes</h2>
        <ul className={ulClass}>
          <li><strong>Too narrow:</strong> &ldquo;I only want a SaaS company doing $3M ARR in Austin&rdquo; &mdash; you&rsquo;ll never find it. Expand geography or industry</li>
          <li><strong>Too broad:</strong> &ldquo;I&rsquo;ll buy any profitable business&rdquo; &mdash; you&rsquo;ll waste months on dead ends. Pick 2&ndash;4 industries</li>
          <li><strong>Ignoring deal flow reality:</strong> Your dream industry may have zero businesses for sale. Test supply before committing</li>
          <li><strong>Overweighting passion:</strong> You don&rsquo;t need to love the industry &mdash; you need to love running the business. The best search fund targets are often &ldquo;boring&rdquo; industries</li>
          <li><strong>Thesis rigidity:</strong> Good searchers evolve their thesis as they learn. Your thesis at month 6 should be more refined than at month 1</li>
        </ul>

        <p>
          Ready to start? Begin with{" "}
          <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">
            pre-search preparation
          </Link>{" "}
          and learn about{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing strategies
          </Link>{" "}
          to turn your thesis into a pipeline.
        </p>
      </div>
    </article>
  );
}
