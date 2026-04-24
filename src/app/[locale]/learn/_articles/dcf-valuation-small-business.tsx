import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export const metadata = {
  slug: "dcf-valuation-small-business",
  title: "DCF Valuation for Small Business Acquisitions",
  description: "Master discounted cash flow analysis for SME acquisitions: projection building, discount rate selection, terminal value calculation, and when DCF outperforms multiples-based valuation.",
  category: "Valuation",
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  sources: [
    {
      title: "Valuation: Measuring and Managing the Value of Companies",
      authors: ["McKinsey & Company", "Tim Koller", "Marc Goedhart", "David Wessels"],
      year: 2020,
      publisher: "Wiley",
    },
    {
      title: "Investment Valuation: Tools and Techniques for Determining the Value of Any Asset",
      authors: ["Aswath Damodaran"],
      year: 2012,
      publisher: "Wiley Finance",
      url: "http://pages.stern.nyu.edu/~adamodar/",
    },
    {
      title: "Valuing Small Businesses and Professional Practices",
      authors: ["Shannon Pratt", "Alina Niculita"],
      year: 2008,
      publisher: "McGraw-Hill",
    },
    {
      title: "Business Valuation: An Integrated Theory",
      authors: ["Z. Christopher Mercer", "Travis W. Harms"],
      year: 2008,
      publisher: "Wiley",
    },
    {
      title: "The Dark Art of Valuation: Valuing Young, Distressed and Complex Businesses",
      authors: ["Aswath Damodaran"],
      year: 2010,
      publisher: "FT Press",
    },
  ],
};

export default function DCFValuationSmallBusinessArticle() {
  return (
    <article>
      <h1 className={h1Class}>{metadata.title}</h1>

      <p className={bodyClass}>
        Discounted Cash Flow (DCF) analysis is one of the most theoretically sound valuation methods available, yet it remains underutilized in small business acquisitions. While most searchers rely on earnings multiples and comparable transactions, DCF offers a more nuanced approach that can uncover value others miss—or reveal overpricing that multiples obscure. This guide shows you how to apply DCF methodology to SME acquisitions with practical examples and real-world adjustments.
      </p>

      <h2 className={h2Class}>Why DCF Matters for Small Business Acquisitions</h2>

      <p className={bodyClass}>
        The fundamental premise of DCF is simple: a business is worth the present value of all future cash flows it will generate. Unlike multiples-based valuation, which relies on market comparables, DCF forces you to build explicit assumptions about revenue growth, margins, capital requirements, and risk. This process provides three critical benefits:
      </p>

      <ul className={ulClass}>
        <li><strong>Transparency:</strong> Every assumption is visible and testable. You can't hide behind "the market says 5x EBITDA" when a DCF shows the business only generates enough cash to justify 3.5x.</li>
        <li><strong>Flexibility:</strong> DCF accommodates businesses with unusual characteristics—rapid growth, declining industries, heavy CapEx requirements—that don't fit neatly into multiple-based frameworks.</li>
        <li><strong>Scenario analysis:</strong> By changing key inputs, you can model best-case, base-case, and worst-case scenarios to understand the range of potential outcomes and make more informed decisions.</li>
      </ul>

      <p className={bodyClass}>
        For search fund acquisitions, where you're committing years of your life and investor capital to a single business, this level of rigor is invaluable. DCF complements multiples-based valuation by providing a sanity check and deeper understanding of value drivers.
      </p>

      <h2 className={h2Class}>When DCF Works Best (and When It Doesn't)</h2>

      <h3 className={h3Class}>Ideal Candidates for DCF Analysis</h3>

      <p className={bodyClass}>
        DCF valuation is most powerful when:
      </p>

      <ul className={ulClass}>
        <li><strong>Cash flows are predictable:</strong> Businesses with recurring revenue, long-term contracts, or stable customer bases allow for more reliable projections. A commercial cleaning company with multi-year contracts is easier to model than a project-based consulting firm.</li>
        <li><strong>Growth differs from peers:</strong> If the target is growing faster (or slower) than industry averages, DCF captures this better than static multiples. A niche software company growing at 30% annually deserves a different valuation than one growing at 5%.</li>
        <li><strong>Capital structure will change:</strong> If you plan to optimize working capital, reduce CapEx, or restructure debt, DCF lets you model the value creation from these operational improvements.</li>
        <li><strong>Exit timing is uncertain:</strong> DCF accommodates longer or shorter hold periods by adjusting the terminal value calculation, whereas multiples implicitly assume a specific exit timeline.</li>
      </ul>

      <h3 className={h3Class}>When to Rely on Multiples Instead</h3>

      <p className={bodyClass}>
        DCF becomes less reliable when:
      </p>

      <ul className={ulClass}>
        <li><strong>Cash flows are erratic:</strong> Early-stage businesses, highly cyclical industries, or companies with lumpy project revenue make projections speculative. In these cases, comparable transactions or revenue multiples may be more appropriate.</li>
        <li><strong>The business is asset-heavy:</strong> Real estate holdings, inventory-intensive operations, or businesses valued primarily for their balance sheet assets are better served by asset-based approaches or liquidation analysis.</li>
        <li><strong>You lack operating data:</strong> If the seller won't provide detailed financials until later in the process, start with multiples and refine with DCF during due diligence.</li>
        <li><strong>Time is limited:</strong> Building a proper DCF model takes 10-20 hours for a typical SME. If you're screening dozens of opportunities, use multiples for initial filtering and DCF for final candidates.</li>
      </ul>

      <p className={bodyClass}>
        In practice, most sophisticated searchers use both methods: multiples for quick screening and market context, DCF for deep analysis of serious candidates. The two approaches should converge—if they don't, investigate why. Learn more about alternative approaches in our guide to <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">business valuation fundamentals</Link>.
      </p>

      <h2 className={h2Class}>Building the Financial Projections</h2>

      <p className={bodyClass}>
        The quality of a DCF model depends entirely on the quality of your projections. For small businesses, this means starting with normalized historical performance and building forward with defensible assumptions.
      </p>

      <h3 className={h3Class}>Step 1: Normalize Historical Financials</h3>

      <p className={bodyClass}>
        Begin by analyzing 3-5 years of historical financials and making adjustments to reflect true economic earnings. This process is covered in depth in our <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">quality of earnings</Link> guide, but key adjustments include:
      </p>

      <ul className={ulClass}>
        <li><strong>Owner compensation:</strong> Replace owner salary and benefits with market-rate compensation for a professional manager. If the current owner takes $250K but market rate is $150K, add back $100K to earnings.</li>
        <li><strong>Non-recurring items:</strong> Remove one-time legal fees, acquisition costs, or extraordinary gains/losses that won't continue under new ownership.</li>
        <li><strong>Personal expenses:</strong> Add back auto expenses, travel, family members on payroll, and other discretionary spending run through the business.</li>
        <li><strong>Rent adjustments:</strong> If the owner also owns the real estate, ensure rent is at market rates. Below-market rent understates expenses; above-market rent overstates them.</li>
      </ul>

      <p className={bodyClass}>
        For example, a manufacturer showing $800K EBITDA might normalize to $950K after adding back $100K excess owner comp, $30K legal fees from a one-time lawsuit, and $20K in personal auto expenses.
      </p>

      <h3 className={h3Class}>Step 2: Project Revenue Growth</h3>

      <p className={bodyClass}>
        Revenue projections should reflect both industry trends and company-specific factors. Build your forecast from the bottom up when possible:
      </p>

      <ul className={ulClass}>
        <li><strong>Unit economics:</strong> For subscription businesses, model customer acquisition, churn, and average revenue per account. If you acquire 100 customers/month at $500 MRR with 5% monthly churn, you can project steady-state revenue mathematically.</li>
        <li><strong>Customer concentration:</strong> Identify which customers are likely to renew, which may grow, and which pose churn risk. A business with 10-year average customer tenure has more predictable revenue than one with 18-month average tenure.</li>
        <li><strong>Market size:</strong> Constrain growth by addressable market. A local HVAC company can't grow 30% annually in a metro area growing 2% annually without taking massive market share or expanding geography.</li>
        <li><strong>Historical growth:</strong> Use past growth as a starting point but adjust for known changes. If revenue grew 15% annually but a key product line is maturing, moderate future expectations.</li>
      </ul>

      <p className={bodyClass}>
        A reasonable approach for most SMEs: project 3-5 years of detailed growth assumptions, then taper to long-term GDP growth (2-3%) for terminal value purposes. Avoid the temptation to project hockey-stick growth unless you have concrete plans and budget to achieve it.
      </p>

      <h3 className={h3Class}>Step 3: Model Operating Margins</h3>

      <p className={bodyClass}>
        Gross margins typically remain stable for established businesses unless you're changing suppliers, pricing, or product mix. Operating margins may improve modestly from:
      </p>

      <ul className={ulClass}>
        <li><strong>Operating leverage:</strong> As revenue grows, fixed costs (rent, insurance, base salaries) represent a smaller percentage of sales, expanding margins. However, this effect is limited in most SMEs—don't assume infinite margin expansion.</li>
        <li><strong>Planned efficiencies:</strong> If you identified specific cost savings during due diligence (renegotiating a supplier contract, eliminating redundant software), model these explicitly with timing assumptions.</li>
        <li><strong>Investment requirements:</strong> If growth requires adding salespeople, expanding facilities, or other upfront costs, margins may compress before expanding. Model the full P&L impact, not just the revenue benefit.</li>
      </ul>

      <p className={bodyClass}>
        Conservative approach: hold margins flat for years 1-2 as you stabilize the business, then assume modest 50-100 basis point annual improvements if supported by specific initiatives. Avoid assuming EBITDA margins will reach best-in-class levels without clear paths to get there.
      </p>

      <h3 className={h3Class}>Step 4: Calculate Free Cash Flow</h3>

      <p className={bodyClass}>
        Free Cash Flow (FCF) is the cash available to all investors (debt and equity holders) after funding operations and necessary investments. The formula:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="font-mono text-sm">
          <strong>Free Cash Flow = EBIT × (1 - Tax Rate)</strong><br />
          &nbsp;&nbsp;+ Depreciation & Amortization<br />
          &nbsp;&nbsp;- Capital Expenditures<br />
          &nbsp;&nbsp;- Increase in Net Working Capital
        </p>
      </div>

      <p className={bodyClass}>
        Key considerations for small businesses:
      </p>

      <ul className={ulClass}>
        <li><strong>Tax rate:</strong> Use the combined federal and state rate for the jurisdiction where the business operates. In the US, this is typically 25-30% for corporations, though flow-through entities may use the buyer's personal rate.</li>
        <li><strong>CapEx:</strong> Distinguish between maintenance CapEx (required to sustain current operations) and growth CapEx (required for expansion). Only maintenance CapEx should be deducted from steady-state FCF. For asset-light businesses, maintenance CapEx may be just 1-3% of revenue; for manufacturers, 4-7%.</li>
        <li><strong>Working capital:</strong> Model changes in accounts receivable, inventory, and accounts payable based on DSO, inventory turns, and DPO. Growing businesses consume cash; declining businesses release it. If you grow revenue 20% and DSO is 45 days, A/R increases proportionally.</li>
        <li><strong>D&A add-back:</strong> Depreciation is a non-cash charge, so add it back to cash flow. However, ensure CapEx assumptions are sufficient to replace assets over time—D&A approximates long-term reinvestment needs.</li>
      </ul>

      <p className={bodyClass}>
        Example: A distribution company projects $1.2M EBIT, has $80K D&A, requires $100K maintenance CapEx, and needs $50K additional working capital to fund growth:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="font-mono text-sm">
          EBIT: $1,200,000<br />
          Less: Taxes @ 28%: ($336,000)<br />
          = NOPAT: $864,000<br />
          Plus: D&A: $80,000<br />
          Less: CapEx: ($100,000)<br />
          Less: Increase in NWC: ($50,000)<br />
          <strong>= Free Cash Flow: $794,000</strong>
        </p>
      </div>

      <p className={bodyClass}>
        Repeat this calculation for each projection year. For more details on building comprehensive financial models, see our guide to <Link href="/learn/financial-modeling-for-acquisitions" className="text-apple-accent hover:underline">financial modeling for acquisitions</Link>.
      </p>

      <h2 className={h2Class}>Selecting the Discount Rate (WACC)</h2>

      <p className={bodyClass}>
        The discount rate reflects the risk-adjusted return investors require to commit capital to your acquisition. For DCF purposes, we use the Weighted Average Cost of Capital (WACC), which blends the cost of debt and equity based on your target capital structure.
      </p>

      <h3 className={h3Class}>The WACC Formula</h3>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="font-mono text-sm">
          <strong>WACC = (E/V × Cost of Equity) + (D/V × Cost of Debt × (1 - Tax Rate))</strong>
        </p>
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          Where:<br />
          E = Market value of equity<br />
          D = Market value of debt<br />
          V = E + D (total enterprise value)<br />
          Tax Rate = Corporate tax rate (debt interest is tax-deductible)
        </p>
      </div>

      <h3 className={h3Class}>Cost of Equity for Small Businesses</h3>

      <p className={bodyClass}>
        The cost of equity represents the return equity investors require. For publicly traded companies, this is typically calculated using the Capital Asset Pricing Model (CAPM):
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="font-mono text-sm">
          <strong>Cost of Equity = Risk-Free Rate + Beta × Equity Risk Premium</strong>
        </p>
      </div>

      <p className={bodyClass}>
        For small businesses, CAPM requires substantial adjustments:
      </p>

      <ul className={ulClass}>
        <li><strong>Risk-free rate:</strong> Use the 10-year Treasury yield as your starting point (historically 4-5%, though this varies with market conditions).</li>
        <li><strong>Beta:</strong> Since small businesses aren't publicly traded, use the average beta for publicly traded companies in the same industry. Find these on Damodaran's website or from beta databases. Technology companies typically have betas around 1.2; stable service businesses around 0.8.</li>
        <li><strong>Equity risk premium:</strong> The historical premium of stocks over bonds, typically 5-6% in developed markets.</li>
        <li><strong>Size premium:</strong> Small businesses are riskier than large public companies due to customer concentration, management depth, and access to capital. Add 3-6% for companies under $50M enterprise value, based on research from Duff & Phelps and Ibbotson.</li>
        <li><strong>Company-specific risk:</strong> Add another 0-5% for unique risks: customer concentration over 25%, single product line, regulatory exposure, management transition risk, or economic sensitivity.</li>
      </ul>

      <p className={bodyClass}>
        Example calculation for a regional IT services company:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="font-mono text-sm">
          Risk-free rate: 4.5%<br />
          Plus: Beta (1.1) × ERP (5.5%): 6.1%<br />
          Plus: Size premium: 4.0%<br />
          Plus: Company-specific risk: 2.0%<br />
          <strong>= Cost of Equity: 16.6%</strong>
        </p>
      </div>

      <h3 className={h3Class}>Cost of Debt</h3>

      <p className={bodyClass}>
        The cost of debt is more straightforward: use the interest rate on the debt you'll use to finance the acquisition. For SBA 7(a) loans, this is typically Prime + 2.75% (around 11% as of 2025). For conventional bank financing, expect 8-10%. For seller financing, negotiate but expect 5-8%.
      </p>

      <p className={bodyClass}>
        Remember to use the after-tax cost of debt in WACC since interest is tax-deductible. At a 28% tax rate, 10% debt costs 7.2% after-tax.
      </p>

      <h3 className={h3Class}>Putting It Together: Sample WACC Calculation</h3>

      <p className={bodyClass}>
        Assume you're acquiring a business for $5M enterprise value with $3M equity and $2M debt at 10% interest, 28% tax rate, and 16.6% cost of equity:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="font-mono text-sm">
          Equity weight: $3M / $5M = 60%<br />
          Debt weight: $2M / $5M = 40%<br />
          After-tax cost of debt: 10% × (1 - 0.28) = 7.2%<br />
          <br />
          <strong>WACC = (60% × 16.6%) + (40% × 7.2%)</strong><br />
          <strong>WACC = 9.96% + 2.88% = 12.84%</strong>
        </p>
      </div>

      <p className={bodyClass}>
        For most search fund acquisitions with 60-70% equity, expect WACC in the 12-18% range. Higher growth, lower risk businesses trend toward 12-14%; slower growth, higher risk businesses toward 16-18%. Understanding valuation fundamentals helps contextualize these ranges—see our overview of <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">business valuation methods</Link>.
      </p>

      <h2 className={h2Class}>Terminal Value Calculation</h2>

      <p className={bodyClass}>
        Terminal value represents the present value of all cash flows beyond your explicit projection period. Since businesses theoretically operate in perpetuity, terminal value often accounts for 60-80% of total enterprise value in a DCF model—getting this right is critical.
      </p>

      <h3 className={h3Class}>Perpetuity Growth Method</h3>

      <p className={bodyClass}>
        The most common approach assumes the business grows at a constant rate forever:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="font-mono text-sm">
          <strong>Terminal Value = Final Year FCF × (1 + g) / (WACC - g)</strong>
        </p>
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          Where g = perpetual growth rate
        </p>
      </div>

      <p className={bodyClass}>
        The perpetual growth rate should not exceed long-term GDP growth (2-3% for developed economies). Using higher rates implies the business will eventually become larger than the entire economy—mathematically impossible. For mature, stable businesses, use 2-2.5%. For businesses in declining industries, use 0-1%.
      </p>

      <p className={bodyClass}>
        Example: If year 5 FCF is $850K, WACC is 13%, and perpetual growth is 2.5%:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="font-mono text-sm">
          Terminal Value = $850,000 × (1.025) / (0.13 - 0.025)<br />
          Terminal Value = $871,250 / 0.105<br />
          <strong>Terminal Value = $8,297,619</strong>
        </p>
      </div>

      <h3 className={h3Class}>Exit Multiple Method</h3>

      <p className={bodyClass}>
        Alternatively, estimate terminal value by applying an exit multiple to final year EBITDA or EBIT:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="font-mono text-sm">
          <strong>Terminal Value = Final Year EBITDA × Exit Multiple</strong>
        </p>
      </div>

      <p className={bodyClass}>
        This method is more intuitive for searchers familiar with transaction multiples. Use multiples from <Link href="/learn/comparable-transactions" className="text-apple-accent hover:underline">comparable transactions</Link> in your industry, typically 4-6x EBITDA for most SMEs. Be conservative—assume lower multiples than current market if you expect multiples to compress or the business to mature.
      </p>

      <p className={bodyClass}>
        If year 5 EBITDA is $1.1M and you assume a 5.0x exit multiple, terminal value is $5.5M. Both methods should yield similar results if assumptions are consistent. If they diverge significantly, revisit your growth rate and multiple assumptions.
      </p>

      <h3 className={h3Class}>Discounting Terminal Value to Present</h3>

      <p className={bodyClass}>
        Once calculated, discount terminal value back to present using WACC. If terminal value is $8.3M in year 5 and WACC is 13%:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="font-mono text-sm">
          PV of Terminal Value = $8,297,619 / (1.13)^5<br />
          <strong>PV of Terminal Value = $4,500,874</strong>
        </p>
      </div>

      <h2 className={h2Class}>Building the Complete DCF Model</h2>

      <p className={bodyClass}>
        Now we combine all components: discounted projection period cash flows plus discounted terminal value equals enterprise value.
      </p>

      <h3 className={h3Class}>Full Example: Regional Manufacturing Company</h3>

      <p className={bodyClass}>
        Let's value a metal fabrication company with the following assumptions:
      </p>

      <ul className={ulClass}>
        <li>Current revenue: $8M, growing 6% Y1-2, 4% Y3-5, then 2.5% perpetually</li>
        <li>EBITDA margin: stable at 18% (improving from 17% historically post-normalization)</li>
        <li>D&A: $200K annually</li>
        <li>CapEx: $250K annually (maintenance level)</li>
        <li>Working capital: increases 2% of revenue growth each year</li>
        <li>Tax rate: 28%</li>
        <li>WACC: 13.5%</li>
      </ul>

      <div className="my-6 overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-600">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left dark:border-gray-600">Year</th>
              <th className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">1</th>
              <th className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">2</th>
              <th className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">3</th>
              <th className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">4</th>
              <th className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">Revenue</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$8,480K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$8,989K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$9,348K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$9,722K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$10,111K</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">EBITDA @ 18%</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,526K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,618K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,683K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,750K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,820K</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">Less: D&A</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($200K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($200K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($200K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($200K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($200K)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">EBIT</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,326K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,418K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,483K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,550K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,620K</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">Less: Tax @ 28%</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($371K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($397K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($415K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($434K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($454K)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">NOPAT</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$955K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,021K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,068K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,116K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,166K</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">Plus: D&A</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$200K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$200K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$200K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$200K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$200K</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">Less: CapEx</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($250K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($250K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($250K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($250K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($250K)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">Less: Δ NWC</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($10K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($10K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($7K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($7K)</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">($8K)</td>
            </tr>
            <tr className="bg-gray-50 font-semibold dark:bg-gray-900">
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">Free Cash Flow</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$895K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$961K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,011K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,059K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$1,108K</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">Discount Factor @ 13.5%</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">0.8811</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">0.7763</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">0.6839</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">0.6024</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">0.5308</td>
            </tr>
            <tr className="bg-gray-50 font-semibold dark:bg-gray-900">
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">Present Value</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$789K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$746K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$691K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$638K</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$588K</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className={bodyClass}>
        <strong>Sum of PV of projection period cash flows: $3,452K</strong>
      </p>

      <p className={bodyClass}>
        Now calculate terminal value using the perpetuity growth method (2.5% growth):
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="font-mono text-sm">
          Year 5 FCF: $1,108K<br />
          Terminal Value = $1,108K × (1.025) / (0.135 - 0.025)<br />
          Terminal Value = $1,136K / 0.11 = $10,327K<br />
          <br />
          PV of Terminal Value = $10,327K × 0.5308<br />
          <strong>PV of Terminal Value = $5,481K</strong>
        </p>
      </div>

      <p className={bodyClass}>
        <strong>Enterprise Value = $3,452K + $5,481K = $8,933K or approximately $8.9M</strong>
      </p>

      <p className={bodyClass}>
        This implies an entry multiple of 5.9x current EBITDA ($1,526K). If comparable transactions trade at 4.5-6.0x, this DCF valuation sits at the high end—reasonable if you have confidence in the growth assumptions, but risky if execution falters.
      </p>

      <h2 className={h2Class}>Sensitivity Analysis: Stress-Testing Your Assumptions</h2>

      <p className={bodyClass}>
        No projection survives contact with reality unchanged. Sensitivity analysis shows how valuation changes if key assumptions differ from your base case. The goal is to understand the range of outcomes and identify which variables matter most.
      </p>

      <h3 className={h3Class}>One-Way Sensitivity Tables</h3>

      <p className={bodyClass}>
        Vary one input at a time while holding others constant. For the example above, test how enterprise value changes with different WACC and perpetual growth assumptions:
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-600">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="border border-gray-300 px-4 py-2 dark:border-gray-600">Perpetual Growth →<br />WACC ↓</th>
              <th className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">1.5%</th>
              <th className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">2.0%</th>
              <th className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">2.5%</th>
              <th className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">3.0%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">12.0%</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$10.2M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$10.8M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$11.5M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$12.5M</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">13.0%</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$9.3M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$9.8M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$10.4M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$11.1M</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">13.5%</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$8.8M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$9.3M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$8.9M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$10.4M</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">14.0%</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$8.4M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$8.8M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$9.3M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$9.9M</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">15.0%</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$7.7M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$8.1M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$8.5M</td>
              <td className="border border-gray-300 px-4 py-2 text-right dark:border-gray-600">$9.0M</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className={bodyClass}>
        This shows valuation is highly sensitive to discount rate and terminal growth assumptions. A 1.5% change in WACC moves enterprise value by $1.5-2.0M—a 17-22% swing. This reinforces the importance of carefully justifying your cost of capital.
      </p>

      <h3 className={h3Class}>Scenario Analysis</h3>

      <p className={bodyClass}>
        Instead of varying one input, build three complete scenarios: Base Case, Upside Case, and Downside Case. Adjust multiple variables simultaneously to create realistic alternative futures:
      </p>

      <ul className={ulClass}>
        <li><strong>Downside:</strong> Revenue grows 2% (major customer lost), EBITDA margins compress to 16% (pricing pressure), and perpetual growth is only 1.5% (market saturation). Result: $6.5M enterprise value.</li>
        <li><strong>Base Case:</strong> As modeled above. Result: $8.9M enterprise value.</li>
        <li><strong>Upside:</strong> Revenue grows 8% Y1-2 (new product line succeeds), margins expand to 19% (operational improvements), and perpetual growth is 3% (market share gains). Result: $11.7M enterprise value.</li>
      </ul>

      <p className={bodyClass}>
        If you're considering a $9M purchase price, the base case barely supports it, downside suggests overpayment, and upside provides a margin of safety. This distribution helps you decide if the risk-reward is attractive given your conviction level.
      </p>

      <h2 className={h2Class}>Common DCF Pitfalls for SME Buyers</h2>

      <p className={bodyClass}>
        Even experienced searchers make mistakes when building DCF models. Watch for these common errors:
      </p>

      <h3 className={h3Class}>1. Overly Optimistic Projections</h3>

      <p className={bodyClass}>
        The temptation to justify a deal price with aggressive assumptions is strong. Resist it. Historical growth rates are the best predictor of future growth for mature businesses. If the company grew 6% annually over the past 5 years, projecting 15% growth requires extraordinary evidence—new products, market expansion, sales team scale-up—backed by detailed execution plans and budgets.
      </p>

      <p className={bodyClass}>
        Reality check: Compare your projections to public company growth in the same industry. If you're projecting 12% growth for a commercial printing company but public printers grow 2-3%, explain why your business is exceptional—or revise downward.
      </p>

      <h3 className={h3Class}>2. Underestimating CapEx and Working Capital</h3>

      <p className={bodyClass}>
        Many sellers defer maintenance CapEx in the years leading up to sale to maximize EBITDA. Your DCF should reflect normalized, sustainable CapEx levels. If the business historically spent 5% of revenue on CapEx but only 2% in the trailing year, use 5% in your projections—or risk equipment failures post-close.
      </p>

      <p className={bodyClass}>
        Similarly, growing businesses consume working capital. If you grow revenue 20% but forget to model the corresponding increase in A/R and inventory, you'll overstate free cash flow and overvalue the business.
      </p>

      <h3 className={h3Class}>3. Mismatching Discount Rate and Cash Flows</h3>

      <p className={bodyClass}>
        Use WACC to discount unlevered free cash flows (cash flow to all investors). If you instead project cash flow to equity (after debt service), discount at the cost of equity, not WACC. Mixing these creates meaningless results.
      </p>

      <p className={bodyClass}>
        For search fund models, unlevered FCF and WACC are simpler and more common. Save equity-level analysis for scenarios where you're modeling specific debt paydown schedules and changing leverage over time.
      </p>

      <h3 className={h3Class}>4. Ignoring Margin Constraints</h3>

      <p className={bodyClass}>
        Don't project EBITDA margins that exceed industry best-in-class without specific, funded initiatives to get there. If peer companies earn 15-18% EBITDA margins and you're projecting 22%, either you've found a structural advantage (proprietary technology, unique market position) or you're being unrealistic.
      </p>

      <h3 className={h3Class}>5. Terminal Value Dominating the Model</h3>

      <p className={bodyClass}>
        If terminal value represents more than 80% of enterprise value, your projection period is too short or your near-term cash flows too low. Extend projections to 7-10 years for high-growth businesses, or question whether the business is really mature enough for DCF (maybe a revenue multiple is more appropriate).
      </p>

      <h3 className={h3Class}>6. Forgetting to Sanity-Check Against Multiples</h3>

      <p className={bodyClass}>
        Always compare your DCF output to market multiples. If comparable businesses trade at 5.0x EBITDA but your DCF implies 7.5x, reconcile the difference. Either your assumptions are too optimistic, the market is mispricing comparables, or there's a specific reason this business deserves a premium. Don't just accept the number—understand why it differs.
      </p>

      <h2 className={h2Class}>From DCF to Offer Price: Bridging the Gap</h2>

      <p className={bodyClass}>
        Your DCF model outputs an enterprise value—the theoretical value of the entire business to all stakeholders. To determine your equity offer, adjust for:
      </p>

      <ul className={ulClass}>
        <li><strong>Net debt:</strong> Subtract interest-bearing debt and add cash on the balance sheet. If enterprise value is $9M and the business has $1M net debt, equity value is $8M.</li>
        <li><strong>Transaction costs:</strong> Deduct legal fees, broker fees, due diligence costs (2-4% of deal size). This reduces the price you can afford to pay for a given return target.</li>
        <li><strong>Required return:</strong> Your DCF shows fair value, but you want a margin of safety. Discounting 10-20% from DCF value provides cushion for execution risk and modeling errors.</li>
        <li><strong>Negotiating room:</strong> Your first offer should be below your maximum, leaving room to increase during negotiation while staying within your value range.</li>
      </ul>

      <p className={bodyClass}>
        Example: DCF shows $8.9M enterprise value, the business has $500K net debt, you want 15% margin of safety, and expect to increase your offer 10% during negotiation:
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="font-mono text-sm">
          DCF Enterprise Value: $8,900K<br />
          Less: Net debt: ($500K)<br />
          = DCF Equity Value: $8,400K<br />
          <br />
          Less: Margin of safety (15%): ($1,260K)<br />
          = Maximum price: $7,140K<br />
          <br />
          Less: Negotiating room (10%): ($714K)<br />
          <strong>= Initial offer: $6,426K or approximately $6.4M</strong>
        </p>
      </div>

      <p className={bodyClass}>
        This disciplined approach ensures you don't overpay even if your projections are optimistic. If the seller's asking price is $9M (implying minimal equity value after debt), you have clear justification for a lower offer based on intrinsic value analysis.
      </p>

      <h2 className={h2Class}>Integrating DCF with Other Valuation Methods</h2>

      <p className={bodyClass}>
        DCF is powerful but works best in combination with other approaches. Use this triangulation framework:
      </p>

      <ul className={ulClass}>
        <li><strong>Comparable transactions:</strong> What did similar businesses sell for recently? This grounds your DCF in market reality. See our guide to <Link href="/learn/comparable-transactions" className="text-apple-accent hover:underline">comparable transactions analysis</Link>.</li>
        <li><strong>EBITDA multiples:</strong> What multiple does your DCF imply? Compare to industry standards. If you're an outlier, justify why or revise assumptions.</li>
        <li><strong>SDE multiples:</strong> For very small businesses (under $2M revenue), sellers often think in terms of Seller's Discretionary Earnings. Understand how your DCF translates to SDE terms for negotiation purposes. Learn more about <Link href="/learn/sde-vs-ebitda" className="text-apple-accent hover:underline">SDE vs EBITDA valuation</Link>.</li>
        <li><strong>Payback period:</strong> How long until cumulative cash flows equal your purchase price? Most searchers target 4-6 year payback. If your DCF shows 8+ years, question your assumptions or price.</li>
      </ul>

      <p className={bodyClass}>
        When all methods point to similar values (say, $8-9M), you have high confidence. When they diverge significantly (DCF says $9M, comps say $6M), dig deeper—one approach is missing something important.
      </p>

      <h2 className={h2Class}>Practical Tips for Building Better DCF Models</h2>

      <p className={bodyClass}>
        After reviewing hundreds of search fund DCF models, here are the practices that separate good models from great ones:
      </p>

      <ul className={ulClass}>
        <li><strong>Link everything:</strong> Build your model so changing one assumption (revenue growth) automatically updates dependent calculations (working capital, taxes). This makes scenario testing effortless.</li>
        <li><strong>Document assumptions:</strong> Create a separate assumptions tab listing every key input with sources and justification. Future you (and your investors) will thank you.</li>
        <li><strong>Use checks and balances:</strong> Add formulas that verify your model is working correctly (e.g., enterprise value should equal debt + equity). Flag errors prominently.</li>
        <li><strong>Separate inputs and calculations:</strong> Keep user inputs in clearly marked cells (often shaded blue), distinct from formulas. This prevents accidental overwrites.</li>
        <li><strong>Build monthly, aggregate to annual:</strong> For businesses with seasonal patterns or you plan rapid changes, model monthly cash flows then sum to annual. This captures working capital timing more accurately.</li>
        <li><strong>Stress-test extremes:</strong> What if revenue grows 0%? What if margins fall 500 bps? Ensure your model handles edge cases without errors.</li>
        <li><strong>Benchmark every assumption:</strong> Don't just guess that CapEx is 3% of revenue—look at historical levels, industry averages, and management plans. Every number needs a source.</li>
      </ul>

      <p className={bodyClass}>
        Building a robust DCF model takes 15-25 hours for a typical SME. Don't rush it. The discipline of building the model forces you to understand the business deeply—that understanding is as valuable as the valuation output.
      </p>

      <h2 className={h2Class}>When DCF Changes Your Mind</h2>

      <p className={bodyClass}>
        The best DCF models are the ones that prevent bad decisions. Here are real examples where DCF analysis revealed problems multiples-based valuation missed:
      </p>

      <ul className={ulClass}>
        <li><strong>The high-growth mirage:</strong> A software company growing 40% annually looked attractive at 6x revenue (in line with SaaS comps). DCF revealed that customer acquisition costs were rising faster than LTV, suggesting growth was unsustainable. The searcher passed, and the company indeed slowed to 10% growth the following year.</li>
        <li><strong>The working capital trap:</strong> A distributor trading at a reasonable 5x EBITDA required massive working capital increases to grow (inventory purchased 90 days before customer payment). DCF showed free cash flow was 40% lower than EBITDA due to working capital consumption, implying actual value was closer to 3x EBITDA.</li>
        <li><strong>The terminal value surprise:</strong> A mature industrial services company seemed cheap at 4x EBITDA. But DCF using conservative 1% terminal growth (reflecting market decline) showed value of only 3.2x. The "bargain" was appropriately priced for a declining business.</li>
        <li><strong>The CapEx reality check:</strong> A manufacturer had attractive 20% EBITDA margins and traded at 5.5x. DCF analysis showed the seller had deferred $1.5M in equipment maintenance. Normalizing CapEx to sustainable levels dropped free cash flow 30% and intrinsic value to 4.2x—right at the asking price with no upside.</li>
      </ul>

      <p className={bodyClass}>
        In each case, buyers who relied only on multiples would have overpaid or misunderstood the investment. DCF provided the clarity to either walk away or negotiate better terms based on economic reality.
      </p>

      <h2 className={h2Class}>Next Steps: Putting DCF into Practice</h2>

      <p className={bodyClass}>
        Start incorporating DCF analysis into your search process with these concrete actions:
      </p>

      <ol className={olClass}>
        <li><strong>Build a template model now:</strong> Create a flexible Excel/Google Sheets DCF model before you need it. Include projection years, WACC calculator, terminal value options, and sensitivity tables. Having the infrastructure ready saves time when opportunities arise.</li>
        <li><strong>Practice on public companies:</strong> Download financials for public companies in your target industries and build DCF models. Compare your output to market values to calibrate your assumptions and see where you're too optimistic or conservative.</li>
        <li><strong>Create your WACC assumptions:</strong> Research appropriate cost of equity components (betas, size premiums) for your target industries now. When you find a deal, you'll just need to make company-specific risk adjustments rather than starting from scratch.</li>
        <li><strong>Study actual deals:</strong> Review search fund acquisition case studies and try to reverse-engineer the DCF. The Stanford Search Fund Study provides returns data—work backward to see what assumptions would have been required.</li>
        <li><strong>Get investor feedback:</strong> Share your DCF models with potential investors before you're under LOI. They'll spot optimistic assumptions and help you build more realistic models for actual acquisitions.</li>
      </ol>

      <p className={bodyClass}>
        DCF valuation is both art and science. The formulas are straightforward, but the judgment required to select appropriate assumptions comes only with practice and exposure to real businesses. Start building models now, and by the time you're evaluating serious acquisition candidates, the methodology will be second nature.
      </p>

      <p className={bodyClass}>
        For related topics that complement DCF analysis, explore our guides on <Link href="/learn/financial-modeling-for-acquisitions" className="text-apple-accent hover:underline">financial modeling for acquisitions</Link>, <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">quality of earnings analysis</Link>, and <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">business valuation fundamentals</Link>.
      </p>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>When should I use DCF instead of EBITDA multiples to value a small business?</h3>

      <p className={bodyClass}>
        DCF valuation is most powerful when the target business has characteristics that don&rsquo;t fit neatly into multiples-based frameworks. According to McKinsey&rsquo;s valuation research, DCF outperforms multiples when cash flows are predictable (recurring revenue, long-term contracts), when growth rates differ significantly from industry peers, when the capital structure will change post-acquisition, or when exit timing is uncertain. Aswath Damodaran&rsquo;s investment valuation framework recommends using DCF for any business where you have 3&ndash;5 years of reliable financial history and can build defensible revenue and margin projections. In practice, most sophisticated searchers use both methods: multiples for quick screening and market context, DCF for deep analysis of serious candidates &mdash; the two approaches should converge, and if they don&rsquo;t, the divergence itself reveals something important about the business.
      </p>

      <h3 className={h3Class}>What discount rate (WACC) is appropriate for small business acquisitions?</h3>

      <p className={bodyClass}>
        For most search fund acquisitions with 60&ndash;70% equity financing, expect WACC in the 12&ndash;18% range. Duff &amp; Phelps (now Kroll) and Ibbotson&rsquo;s research on size premiums shows that small businesses require a 3&ndash;6% additional premium over large-cap cost of equity due to customer concentration, limited management depth, and restricted access to capital. Shannon Pratt&rsquo;s valuation framework for small businesses recommends adding a further 0&ndash;5% company-specific risk premium for factors like customer concentration above 25%, single product lines, regulatory exposure, or management transition risk. The cost of equity for a typical SME acquisition therefore ranges from 14&ndash;22%, which when blended with after-tax debt costs of 7&ndash;8% (SBA 7(a) rates at Prime + 2.75%, tax-adjusted), produces the 12&ndash;18% WACC range common in search fund models.
      </p>

      <h3 className={h3Class}>Why does terminal value often represent 60&ndash;80% of enterprise value, and how do I avoid over-relying on it?</h3>

      <p className={bodyClass}>
        Terminal value captures the present value of all cash flows beyond the explicit projection period, and since businesses theoretically operate in perpetuity, this component naturally dominates in a standard 5-year DCF model. McKinsey&rsquo;s valuation methodology warns that when terminal value exceeds 80% of enterprise value, the projection period is likely too short or near-term cash flows are understated. Damodaran&rsquo;s framework recommends extending projections to 7&ndash;10 years for high-growth businesses to shift more value into the explicit forecast period where assumptions are more transparent. To sanity-check terminal value, always cross-reference the perpetuity growth method (which should use a growth rate no higher than GDP growth of 2&ndash;3%) against the exit multiple method using <Link href="/learn/comparable-transactions" className="text-apple-accent hover:underline">comparable transaction</Link> data &mdash; if the two methods produce materially different results, revisit your growth rate and multiple assumptions until they converge.
      </p>

      <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
        <h2 className={h2Class}>Sources</h2>
        <ul className="space-y-3">
          {metadata.sources?.map((source, index) => (
            <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
              {source.authors?.join(", ")} ({source.year}).{" "}
              <em>{source.title}</em>
              {source.publisher && `, ${source.publisher}`}
              {source.url && (
                <>
                  .{" "}
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-apple-accent hover:underline"
                  >
                    {source.url}
                  </a>
                </>
              )}
            </li>
          ))}
          <li className="text-sm text-gray-700 dark:text-gray-300">
            Ibbotson SBBI Valuation Yearbook (Annual). Duff & Phelps / Kroll.
          </li>
          <li className="text-sm text-gray-700 dark:text-gray-300">
            Stanford Graduate School of Business (2024). <em>2024 Search Fund Study</em>. Stanford, CA: Center for Entrepreneurial Studies.
          </li>
        </ul>
      </div>
    </article>
  );
}
