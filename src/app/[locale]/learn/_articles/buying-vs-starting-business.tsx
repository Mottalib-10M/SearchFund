import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function BuyingVsStartingBusinessArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Buying a Business vs. Starting One: Data-Driven Comparison
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Should you acquire an existing business or start one from scratch?
          The data overwhelmingly favors acquisition for most aspiring
          entrepreneurs &mdash; a conclusion reinforced by our{" "}
          <Link href="/learn/sme-acquisition-guide" className="text-apple-accent hover:underline">
            SME acquisition guide
          </Link>.
          Startups have a 90% failure rate; acquired businesses
          with $1M+ revenue have survival rates above 90%. This article
          compares both paths across every dimension that matters.
        </p>

        <h2 className={h2Class}>The survival data</h2>
        <ul className={ulClass}>
          <li><strong>Startups:</strong> 20% survive 5 years. Only 10% reach 10 years. Median revenue at failure: $0. The startup mortality curve is steepest in years 1&ndash;3</li>
          <li><strong>Acquired businesses:</strong> 85&ndash;95% survival rate for established SMEs purchased through search funds. These businesses have existed for 10&ndash;30 years before acquisition</li>
          <li><strong>Search fund returns:</strong> Stanford&rsquo;s 2024 study shows{" "}
            <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
              33% pre-tax IRR
            </Link>{" "}
            across the asset class, with median CEO equity outcomes of $5&ndash;15M</li>
        </ul>

        <h2 className={h2Class}>Financial comparison</h2>

        <h3 className={h3Class}>Revenue from day one</h3>
        <ul className={ulClass}>
          <li><strong>Acquisition:</strong> You own a cash-flowing business on closing day. Revenue, customers, and employees are already in place</li>
          <li><strong>Startup:</strong> Revenue is zero on day one. It takes 12&ndash;36 months for most startups to generate meaningful revenue</li>
        </ul>

        <h3 className={h3Class}>Cash flow timeline</h3>
        <ul className={ulClass}>
          <li><strong>Acquisition:</strong> Positive cash flow from month 1 (after debt service). A $2M EBITDA acquisition with standard leverage generates $500K&ndash;$800K annual free cash flow</li>
          <li><strong>Startup:</strong> Negative cash flow for 18&ndash;48 months. Total cash investment before breakeven: $200K&ndash;$2M+ depending on sector</li>
        </ul>

        <h3 className={h3Class}>Personal income</h3>
        <ul className={ulClass}>
          <li><strong>Acquisition:</strong>{" "}
            <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">
              CEO salary
            </Link>{" "}
            of $150K&ndash;$300K starting day one, plus equity upside of $5&ndash;15M over 5&ndash;7 years</li>
          <li><strong>Startup:</strong> Founders typically pay themselves $0&ndash;$80K in early years. Meaningful income often doesn&rsquo;t materialize until year 3&ndash;5</li>
        </ul>

        <h3 className={h3Class}>Financing</h3>
        <ul className={ulClass}>
          <li><strong>Acquisition:</strong> Well-established{" "}
            <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
              financing structures
            </Link>{" "}
            exist.{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA 7(a) loans
            </Link>{" "}
            cover up to 90% of purchase price. Banks lend against proven cash flow</li>
          <li><strong>Startup:</strong> No bank debt available for pre-revenue companies. Funding options: personal savings, friends/family, angel investors, or VC (which requires giving up significant equity)</li>
        </ul>

        <h2 className={h2Class}>Risk comparison</h2>

        <h3 className={h3Class}>Market risk</h3>
        <ul className={ulClass}>
          <li><strong>Acquisition:</strong> You&rsquo;re buying proven product-market fit. The business has served customers for years. Market risk is minimal</li>
          <li><strong>Startup:</strong> Product-market fit is the #1 startup killer. 42% of startups fail because &ldquo;no market need&rdquo; exists for their product</li>
        </ul>

        <h3 className={h3Class}>Execution risk</h3>
        <ul className={ulClass}>
          <li><strong>Acquisition:</strong> Main risk is the transition &mdash; maintaining the business under new ownership. Systems, processes, and customers already exist. The{" "}
            <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
              first 100 days
            </Link>{" "}
            are critical</li>
          <li><strong>Startup:</strong> You must build everything: product, team, processes, customer base, brand, and culture. Execution risk is high across every dimension simultaneously</li>
        </ul>

        <h3 className={h3Class}>Financial risk</h3>
        <ul className={ulClass}>
          <li><strong>Acquisition:</strong> You take on acquisition debt (leverage). Debt service requires consistent cash flow. Risk is manageable with proper{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link></li>
          <li><strong>Startup:</strong> You invest personal savings or raise equity capital. Total loss is the most common outcome. VC-backed founders often have better downside protection (salary) but give up most of the upside</li>
        </ul>

        <h2 className={h2Class}>Lifestyle comparison</h2>

        <h3 className={h3Class}>Day-to-day work</h3>
        <ul className={ulClass}>
          <li><strong>Acquisition CEO:</strong> General management &mdash; leading teams, improving operations, growing revenue. You&rsquo;re the CEO of a real business from day one</li>
          <li><strong>Startup founder:</strong> Wearing every hat &mdash; coding, selling, supporting customers, bookkeeping. It&rsquo;s exciting but exhausting and often lonely</li>
        </ul>

        <h3 className={h3Class}>Work-life balance</h3>
        <ul className={ulClass}>
          <li><strong>Acquisition:</strong> Demanding but structured. Most acquired businesses operate during normal business hours. CEO hours are 50&ndash;60 per week</li>
          <li><strong>Startup:</strong> All-consuming, especially in the first 2&ndash;3 years. Founder hours are typically 70&ndash;80+ per week. Burnout is endemic</li>
        </ul>

        <h3 className={h3Class}>Industry/location</h3>
        <ul className={ulClass}>
          <li><strong>Acquisition:</strong> You choose the{" "}
            <Link href="/learn/best-industries-search-funds" className="text-apple-accent hover:underline">
              industry
            </Link>{" "}
            and geography. Most acquired businesses are in &ldquo;boring&rdquo; but profitable sectors (HVAC, insurance, staffing, manufacturing)</li>
          <li><strong>Startup:</strong> You build in the industry where your idea lives. Tech startups cluster in expensive metros (SF, NYC, London)</li>
        </ul>

        <h2 className={h2Class}>When a startup makes more sense</h2>
        <ul className={ulClass}>
          <li><strong>You have deep technical expertise</strong> in a field where existing solutions are fundamentally broken</li>
          <li><strong>You have a genuine innovation</strong> &mdash; new technology, business model, or market insight that doesn&rsquo;t exist</li>
          <li><strong>The addressable market is massive</strong> and growing rapidly (10x+ TAM growth expected)</li>
          <li><strong>You want venture-scale outcomes</strong> ($100M+) and are willing to accept a 90% failure rate for that shot</li>
          <li><strong>You&rsquo;re young with no obligations</strong> and the opportunity cost of failure is minimal</li>
        </ul>

        <h2 className={h2Class}>When acquisition makes more sense</h2>
        <ul className={ulClass}>
          <li><strong>You want predictable cash flow</strong> and a CEO salary from day one</li>
          <li><strong>You prefer managing to building</strong> &mdash; you&rsquo;re a better operator than inventor</li>
          <li><strong>You value risk-adjusted returns</strong> &mdash; $5&ndash;15M in personal wealth is a great outcome</li>
          <li><strong>You have financial obligations</strong> (family, mortgage, debt) that preclude zero-income startup risk</li>
          <li><strong>You want to be a CEO now</strong>, not in 5&ndash;10 years after climbing a corporate ladder. Take our{" "}
            <Link href="/learn/is-eta-right-for-you" className="text-apple-accent hover:underline">
              ETA self-assessment
            </Link>{" "}
            to see if you fit the profile</li>
          <li><strong>You&rsquo;re 30&ndash;45</strong> with significant opportunity cost and limited appetite for startup-level risk</li>
          <li><strong>You know{" "}
            <Link href="/learn/what-makes-good-acquisition-target" className="text-apple-accent hover:underline">
              what makes a good target
            </Link></strong>{" "}
            and want to apply systematic criteria rather than chase a startup idea</li>
        </ul>

        <h2 className={h2Class}>The hybrid approaches</h2>

        <h3 className={h3Class}>Buy, then build</h3>
        <p>
          The{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            buy-and-build strategy
          </Link>{" "}
          combines the best of both worlds: acquire a platform business, then
          grow it through operational improvements and add-on acquisitions.
          Many of the most successful search fund CEOs are effectively
          startup builders operating within an acquired framework.
        </p>

        <h3 className={h3Class}>Search fund vs. startup comparison</h3>
        <p>
          For a detailed comparison of ETA with other models, see our guides
          on{" "}
          <Link href="/learn/eta-vs-startups" className="text-apple-accent hover:underline">
            ETA vs. startups
          </Link>,{" "}
          <Link href="/learn/eta-vs-venture-capital" className="text-apple-accent hover:underline">
            ETA vs. venture capital
          </Link>, and{" "}
          <Link href="/learn/eta-vs-private-equity" className="text-apple-accent hover:underline">
            ETA vs. private equity
          </Link>.
        </p>

        <p>
          If acquisition is the right path for you, start with our{" "}
          <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
            complete getting started guide
          </Link>{" "}
          and learn{" "}
          <Link href="/learn/how-much-money-buy-business" className="text-apple-accent hover:underline">
            how much money you need
          </Link>{" "}
          to buy a business.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>What is the failure rate of buying an existing business vs. starting one?</h3>
        <p>
          Startups have an approximately 90% failure rate over 10 years, with the steepest mortality in years 1&ndash;3. Acquired SMEs with established revenue and customers have survival rates of 85&ndash;95%. The key difference is proven product-market fit: an acquired business has already demonstrated that customers will pay for its products or services, eliminating the #1 reason startups fail.
        </p>

        <h3 className={h3Class}>How much money do you need to buy a business vs. starting one?</h3>
        <p>
          To acquire an SME using an SBA loan, you typically need 10&ndash;15% of the purchase price as an equity injection ($50K&ndash;$300K depending on deal size). A traditional search fund requires as little as $0&ndash;$50K personal capital. By contrast, startups require ongoing capital investment during the pre-revenue phase, often $200K&ndash;$2M+ before breakeven, with no guarantee of reaching profitability.
        </p>

        <h3 className={h3Class}>Can you get a salary immediately when buying a business?</h3>
        <p>
          Yes. Acquisition CEOs typically draw a salary of $150K&ndash;$300K from day one, funded by the business&rsquo;s existing cash flow. This is one of the biggest advantages over a startup, where founders commonly pay themselves $0&ndash;$80K in early years. In a search fund structure, you also earn 20&ndash;25% equity in the acquired company, creating significant wealth over a 5&ndash;7 year hold period.
        </p>
      </div>
    </article>
  );
}
