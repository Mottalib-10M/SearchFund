import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function FinancialModelingForAcquisitionsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Financial Modeling for Search Fund Acquisitions</h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          A well-built financial model is the backbone of every successful search
          fund acquisition. It is the tool you use to evaluate whether a deal
          makes economic sense, stress-test your assumptions under adverse
          scenarios, structure the optimal capital stack, and ultimately convince
          your investors and lenders that the acquisition generates attractive
          risk-adjusted returns. Yet many first-time searchers treat the model as
          an afterthought &mdash; a spreadsheet they throw together the weekend
          before an investor call &mdash; rather than the rigorous analytical
          engine it needs to be.
        </p>

        <p>
          This guide walks through the end-to-end process of building a
          leveraged buyout (LBO) model tailored to SME acquisitions. Unlike the
          mega-cap LBO models taught in investment banking training programs,
          search fund models must account for the unique realities of small
          business acquisitions: thinner management teams, owner-dependent
          revenue, lumpy capital expenditures, and capital structures that blend
          senior bank debt with{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">seller notes and government-backed lending</Link>.
          Whether you are building your model in Excel or Google Sheets, the
          principles remain the same.
        </p>

        <h2 className={h2Class}>Why the LBO framework matters for search funds</h2>
        <p>
          Search fund acquisitions are, at their core, leveraged buyouts. You are
          acquiring a business using a combination of debt and equity, and your
          equity returns are amplified (or destroyed) by the amount of use
          you employ. The LBO model captures this dynamic by projecting cash
          flows over a five-year hold period, scheduling debt repayment,
          and calculating the equity value at exit under different scenarios.
        </p>

        <p>
          Even if you are pursuing a self-funded search with minimal use,
          the LBO framework is indispensable. It forces you to think rigorously
          about cash flow timing, debt service capacity, and the sensitivity of
          your returns to changes in revenue, margins, and exit multiples. Your
          investors &mdash; whether they are committing $50K or $5M &mdash;
          expect to see a model that demonstrates you understand the economics
          of the deal inside and out.
        </p>

        <h2 className={h2Class}>Building the revenue forecast</h2>
        <p>
          The revenue forecast is the single most important input in your model,
          because every other line item flows from it. For SME acquisitions, resist
          the temptation to build a bottom-up model with dozens of assumptions.
          Instead, focus on the two or three drivers that actually matter.
        </p>

        <h3 className={h3Class}>Identifying the right revenue drivers</h3>
        <p>
          Start by understanding how the business generates revenue. For a
          B2B services company, the drivers might be the number of active
          clients, average revenue per client, and client retention rate. For a
          distribution business, it might be order volume and average order
          value. For a subscription business, it is monthly recurring revenue,
          net revenue retention, and new customer acquisition. The key is to
          anchor your forecast in observable, measurable metrics rather than
          top-down growth rate assumptions.
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Historical trend analysis:</strong> Plot 3&ndash;5 years of
            revenue by driver. Look for patterns, seasonality, and inflection
            points. If the business has grown at 5% annually for the past four
            years, a 15% growth assumption requires a compelling narrative.
          </li>
          <li>
            <strong>Customer cohort analysis:</strong> Break revenue into
            existing customers (retention and expansion) versus new customers
            (acquisition). This reveals whether growth is coming from a healthy
            core or from unsustainable new customer acquisition.
          </li>
          <li>
            <strong>Price vs. volume decomposition:</strong> Understand whether
            historical growth came from price increases, volume growth, or both.
            Price-driven growth is generally more sustainable and higher-margin.
          </li>
        </ul>

        <h3 className={h3Class}>Sensitivity analysis on revenue</h3>
        <p>
          Build at least three revenue scenarios: base case, upside, and
          downside. Your base case should reflect what you genuinely believe will
          happen &mdash; not the rosy case you want to show investors and not the
          doomsday scenario either. The upside should capture the value of
          realistic operational improvements you plan to implement. The downside
          should model what happens if the business loses its largest customer,
          experiences a recession, or faces competitive pressure.
        </p>

        <p>
          A practical approach is to set the base case at the company&rsquo;s
          trailing twelve-month revenue growing at the historical compound annual
          growth rate. The upside adds 2&ndash;3 percentage points of growth from
          specific, identified initiatives (price increases, new sales channels,
          geographic expansion). The downside assumes a 10&ndash;15% revenue
          decline in year one followed by a slow recovery. If the deal does not
          work in the downside case &mdash; meaning you cannot service debt and
          your equity is wiped out &mdash; the deal is probably too risky.
        </p>

        <h2 className={h2Class}>EBITDA normalization adjustments</h2>
        <p>
          Before building your pro forma, you must establish a clean baseline.
          The starting point for your model should be normalized EBITDA, not the
          reported figures from the seller&rsquo;s financial statements. A
          rigorous{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">Quality of Earnings analysis</Link>{" "}
          is essential for validating these adjustments, and any competent
          investor will expect to see one before committing capital.
        </p>

        <h3 className={h3Class}>Common normalization categories</h3>
        <ol className={olClass}>
          <li>
            <strong>Owner compensation:</strong> Replace the owner&rsquo;s total
            compensation (salary, bonuses, benefits, personal expenses) with
            market-rate CEO compensation. This is typically the largest single
            adjustment and can swing EBITDA by $100K&ndash;$400K in either
            direction.
          </li>
          <li>
            <strong>Non-recurring items:</strong> Remove one-time revenues and
            expenses &mdash; litigation settlements, PPP loan forgiveness, COVID
            disruptions, insurance proceeds, and restructuring costs. Be
            disciplined: if a &ldquo;one-time&rdquo; expense appears in three of
            the last five years, it is recurring.
          </li>
          <li>
            <strong>Related-party transactions:</strong> Normalize rent paid to
            the owner&rsquo;s real estate holding company, salaries paid to
            family members who will not continue, and any above-market or
            below-market contracts with affiliated entities.
          </li>
          <li>
            <strong>Deferred maintenance and capex:</strong> If the owner has
            been under-investing in equipment, technology, or facilities, you
            need to budget for catch-up spending. This effectively reduces your
            normalized free cash flow even if it does not show up in the
            historical EBITDA.
          </li>
          <li>
            <strong>Revenue quality:</strong> Adjust for any revenue that is not
            sustainable &mdash; a one-time project, a customer that has already
            given notice, or a product line being discontinued.
          </li>
        </ol>

        <p>
          In your model, create a clear bridge from reported EBITDA to
          normalized EBITDA, showing each adjustment with a brief explanation.
          This transparency builds credibility with investors and lenders. It
          also ties directly to the{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">valuation</Link>{" "}
          you agree on in the{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">letter of intent</Link>,
          since the purchase price is typically expressed as a multiple of
          normalized EBITDA.
        </p>

        <h2 className={h2Class}>Debt scheduling: The heart of the LBO model</h2>
        <p>
          The debt schedule is where the LBO model earns its name. For a typical
          search fund acquisition, you will model three to four layers of debt,
          each with different terms, interest rates, and repayment mechanics.
          Understanding how to optimize this structure is critical &mdash; for a
          deeper treatment, see our guide on{" "}
          <Link href="/learn/debt-structure-optimization" className="text-apple-accent hover:underline">debt structure optimization</Link>.
        </p>

        <h3 className={h3Class}>Senior debt</h3>
        <p>
          Senior debt is the cheapest layer of the capital stack and the first to
          be repaid. In your model, you need to capture:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Principal amount:</strong> Typically 2.5x&ndash;4.0x EBITDA,
            or up to 90% of the project cost for SBA 7(a) loans.
          </li>
          <li>
            <strong>Interest rate:</strong> Model both fixed and variable
            scenarios. For variable-rate debt, include a SOFR or Euribor
            forward curve and sensitivity toggles.
          </li>
          <li>
            <strong>Amortization:</strong> Build a full amortization schedule
            showing quarterly or monthly principal payments. SBA loans amortize
            over 10 years (25 years for real estate portions); conventional bank
            loans typically amortize over 5&ndash;7 years.
          </li>
          <li>
            <strong>Covenants:</strong> Model the key financial covenants
            &mdash; debt-to-EBITDA ratio, fixed charge coverage ratio,
            minimum liquidity &mdash; and flag any period where your
            projections breach a covenant. A covenant breach in your base case
            is a deal-killer.
          </li>
        </ul>

        <h3 className={h3Class}>Seller note</h3>
        <p>
          The seller note is typically subordinated to senior debt and carries
          a below-market interest rate (3&ndash;6%). Model the following:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Standby period:</strong> Many senior lenders require that
            the seller note be on full standby (no principal or interest
            payments) for the first 24 months. Build this into your schedule.
          </li>
          <li>
            <strong>Amortization or bullet:</strong> After the standby period,
            the seller note may amortize over 3&ndash;5 years or be due as a
            bullet at maturity. Model both structures to see the cash flow
            impact.
          </li>
          <li>
            <strong>PIK interest option:</strong> Some seller notes accrue
            interest during the standby period (payment-in-kind), which
            increases the outstanding balance. Make sure your model captures
            this compounding effect.
          </li>
        </ul>

        <h3 className={h3Class}>Revolving credit facility</h3>
        <p>
          A revolver provides liquidity for working capital fluctuations and is
          drawn and repaid as needed. In your model:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Commitment amount:</strong> Typically sized at 1.0x&ndash;1.5x
            the business&rsquo;s peak working capital requirement.
          </li>
          <li>
            <strong>Draw mechanics:</strong> Link revolver draws to your working
            capital model. When the business needs cash (seasonal inventory
            build, receivables growth), the revolver is drawn. When cash is
            collected, the revolver is repaid.
          </li>
          <li>
            <strong>Commitment fee:</strong> Model the unused commitment fee
            (typically 0.25&ndash;0.50% of the undrawn balance) as an ongoing
            expense.
          </li>
        </ul>

        <h2 className={h2Class}>Working capital modeling</h2>
        <p>
          Working capital is one of the most underestimated line items in
          acquisition models. A business that is growing will consume working
          capital (more receivables, more inventory), while a stable or
          declining business may release it. Your model must capture this
          dynamic accurately. For a thorough treatment, see our guide on{" "}
          <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">working capital management</Link>.
        </p>

        <h3 className={h3Class}>The balance sheet approach</h3>
        <p>
          Model working capital by projecting each component of the balance sheet:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Accounts receivable:</strong> Project as days sales
            outstanding (DSO) multiplied by daily revenue. Historical DSO
            provides the baseline; adjust for any planned changes to payment
            terms or collections processes.
          </li>
          <li>
            <strong>Inventory:</strong> Project as days inventory outstanding
            (DIO) multiplied by daily cost of goods sold. Be alert to
            seasonality &mdash; a business that builds inventory ahead of its
            peak season will show significant working capital swings.
          </li>
          <li>
            <strong>Accounts payable:</strong> Project as days payable
            outstanding (DPO) multiplied by daily COGS. Extending payables
            releases cash but can strain supplier relationships.
          </li>
          <li>
            <strong>Accrued liabilities and prepaid expenses:</strong> Model as
            a percentage of revenue or as fixed amounts based on historical
            patterns.
          </li>
        </ul>

        <p>
          The change in net working capital from period to period flows directly
          into your free cash flow calculation. A growing business at a company
          with 60 DSO, 45 DIO, and 30 DPO will consume roughly 75 days of
          incremental revenue as working capital for every dollar of revenue
          growth. This cash consumption is real and must be funded &mdash;
          either from operating cash flow, the revolver, or additional equity.
        </p>

        <h2 className={h2Class}>Capital expenditure forecasting</h2>
        <p>
          Capex projections require a detailed understanding of the business.
          Distinguish between two categories:
        </p>

        <h3 className={h3Class}>Maintenance capex</h3>
        <p>
          This is the minimum spending required to keep the business running at
          its current capacity. It includes equipment replacement, vehicle fleet
          maintenance, technology refreshes, and facility upkeep. A common
          benchmark is 2&ndash;5% of revenue for asset-light businesses and
          5&ndash;10% for asset-heavy businesses, but always validate against
          the company&rsquo;s actual historical spending and the condition of
          its existing assets.
        </p>

        <h3 className={h3Class}>Growth capex</h3>
        <p>
          This is discretionary spending intended to expand capacity, enter new
          markets, or launch new products. In your model, growth capex should
          be explicitly tied to your revenue growth assumptions. If you are
          projecting 15% revenue growth but no growth capex, your model has a
          credibility problem. Conversely, if your downside scenario assumes
          flat revenue, growth capex should be zero.
        </p>

        <p>
          <strong>Catch-up capex.</strong> Many small businesses under-invest
          in their final years under the original owner, particularly if the
          owner has been planning a sale. Budget for one-time catch-up spending
          in year one &mdash; technology systems, deferred equipment maintenance,
          facility improvements &mdash; that restores the business to a
          sustainable operating baseline.
        </p>

        <h2 className={h2Class}>Building the 5-year pro forma</h2>
        <p>
          With your revenue forecast, expense structure, working capital model,
          and capex assumptions in place, you can now assemble the complete
          5-year pro forma. The model should flow in a logical sequence:
        </p>

        <ol className={olClass}>
          <li>
            <strong>Income statement:</strong> Revenue, COGS, gross profit,
            operating expenses (broken into fixed and variable), EBITDA,
            depreciation and amortization, interest expense, taxes, and net
            income.
          </li>
          <li>
            <strong>Cash flow statement:</strong> Start with net income, add
            back non-cash charges (D&amp;A, stock-based compensation), subtract
            changes in working capital, subtract capex, and arrive at free cash
            flow to the firm. Then subtract debt service to get free cash flow
            to equity.
          </li>
          <li>
            <strong>Balance sheet:</strong> Project assets (cash, receivables,
            inventory, PP&amp;E, goodwill), liabilities (payables, accrued
            expenses, each layer of debt), and equity (retained earnings). The
            balance sheet must balance in every period &mdash; this is your
            error check.
          </li>
          <li>
            <strong>Debt schedule:</strong> Show the beginning balance, draws,
            mandatory amortization, optional prepayments, interest expense,
            and ending balance for each tranche of debt in every period.
          </li>
          <li>
            <strong>Returns analysis:</strong> Calculate equity value at exit,
            total distributions to equity, IRR, and MOIC under each scenario.
          </li>
        </ol>

        <p>
          <strong>Monthly vs. annual granularity.</strong> Build the first two
          years on a monthly basis and years three through five on an annual
          basis. Monthly granularity in the early years is critical for
          capturing working capital seasonality, debt service timing, and the
          cash flow impact of transition costs. Many deals that look attractive
          on an annual basis reveal cash flow problems when modeled monthly
          &mdash; a January acquisition with a large April tax payment and
          seasonal revenue trough in Q1 can create a liquidity crunch that
          your annual model would never surface.
        </p>

        <h2 className={h2Class}>Returns analysis: IRR and MOIC by scenario</h2>
        <p>
          The returns analysis is the section your investors will scrutinize
          most carefully. Present it as a matrix showing IRR and MOIC across
          scenarios and exit years.
        </p>

        <h3 className={h3Class}>Calculating IRR</h3>
        <p>
          The internal rate of return reflects the time-weighted return on equity.
          For a search fund acquisition, the IRR calculation should include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Initial equity investment</strong> at closing (negative cash
            flow in period zero).
          </li>
          <li>
            <strong>Interim distributions</strong> &mdash; any dividends or
            distributions paid to equity holders during the hold period.
            Many search fund acquisitions reinvest all free cash flow into debt
            paydown, resulting in zero interim distributions.
          </li>
          <li>
            <strong>Exit proceeds</strong> &mdash; the equity value at exit,
            calculated as exit EBITDA multiplied by the exit multiple, minus
            remaining debt, plus excess cash.
          </li>
        </ul>

        <p>
          Present IRR under a 3x3 matrix: three revenue scenarios (base, up,
          down) crossed with three exit multiples (same as entry, 0.5x higher,
          0.5x lower). This gives your investors nine data points that
          bracket the range of plausible outcomes.
        </p>

        <h3 className={h3Class}>Calculating MOIC</h3>
        <p>
          The multiple on invested capital measures absolute return regardless
          of timing. MOIC equals total distributions plus exit proceeds divided
          by total equity invested. Search fund investors typically target a
          3.0x&ndash;5.0x MOIC over a 5&ndash;7 year hold period. A deal that
          generates a 30% IRR but only a 2.0x MOIC may indicate that the hold
          period is too short to build meaningful value, or that too much
          equity was required relative to the opportunity.
        </p>

        <h3 className={h3Class}>What drives returns in the model</h3>
        <p>
          Decompose your equity returns into four sources so investors can
          understand where the value creation comes from:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Revenue growth:</strong> How much of the return comes from
            the business growing its top line?
          </li>
          <li>
            <strong>Margin expansion:</strong> How much comes from improving
            operating margins through cost optimization, pricing discipline, or
            operating leverage?
          </li>
          <li>
            <strong>Debt paydown:</strong> How much comes from using free cash
            flow to retire debt, effectively transferring value from lenders to
            equity holders?
          </li>
          <li>
            <strong>Multiple expansion:</strong> How much relies on selling the
            business at a higher multiple than you paid? This is the riskiest
            source of return and should not be the primary driver in your base
            case.
          </li>
        </ul>

        <h2 className={h2Class}>Common modeling mistakes</h2>
        <p>
          After reviewing hundreds of search fund models, certain errors appear
          with alarming frequency. Avoiding these mistakes will set your model
          apart and build credibility with sophisticated investors.
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Ignoring working capital:</strong> The most common mistake
            by far. Many models project EBITDA growing at 10% annually but
            assume zero change in working capital. In reality, a growing
            business consumes cash as receivables and inventory expand. This
            oversight can overstate free cash flow by 20&ndash;30%.
          </li>
          <li>
            <strong>Hockey-stick revenue projections:</strong> Showing 5%
            historical growth suddenly accelerating to 15% in year one under
            new ownership. Unless you can point to specific, quantified
            initiatives, this strains credibility. Conservative projections
            with upside optionality are more convincing than aggressive base
            cases.
          </li>
          <li>
            <strong>Circular references in the debt schedule:</strong> Interest
            expense depends on the average debt balance, which depends on
            free cash flow, which depends on interest expense. Use an iterative
            calculation toggle in Excel or break the circularity by using the
            beginning-of-period debt balance for interest calculations.
          </li>
          <li>
            <strong>Forgetting transaction costs:</strong> Legal fees, QoE
            analysis, lender fees, title insurance, environmental studies, and
            other closing costs can add 3&ndash;5% to the total project cost.
            These must be funded and should be included in your sources and
            uses.
          </li>
          <li>
            <strong>Mismatched timing:</strong> Modeling annual cash flows but
            using monthly debt service schedules, or assuming revenue is
            collected on day one when the business has 45-day payment terms.
            Ensure all timing assumptions are internally consistent.
          </li>
          <li>
            <strong>No balance sheet:</strong> Some models include only an
            income statement and cash flow projection. Without a balance sheet,
            you cannot verify that your model is internally consistent. If the
            balance sheet does not balance, there is an error somewhere.
          </li>
          <li>
            <strong>Assuming the exit multiple equals the entry multiple:</strong>{" "}
            While this is a reasonable base case assumption, you should also
            model a scenario where the exit multiple compresses by 0.5x&ndash;1.0x.
            If your returns depend entirely on maintaining or expanding the
            multiple, the deal is more speculative than it appears.
          </li>
          <li>
            <strong>Not stress-testing debt covenants:</strong> Your model may
            show comfortable coverage ratios in the base case, but a 10%
            revenue shortfall in year one could trigger a covenant breach. Run
            the downside scenario through every covenant test.
          </li>
        </ul>

        <h2 className={h2Class}>Presenting the model to investors</h2>
        <p>
          Your financial model is a communication tool as much as an analytical
          one. How you present it matters as much as the numbers themselves.
        </p>

        <h3 className={h3Class}>Structure the presentation</h3>
        <p>
          Lead with the investment thesis, not the spreadsheet. Your investor
          presentation should follow this arc:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Executive summary:</strong> One page showing the deal
            overview, purchase price, capital structure, and base case returns
            (IRR and MOIC).
          </li>
          <li>
            <strong>Business overview:</strong> What the company does, its
            competitive position, key financial metrics, and why you are
            excited about it.
          </li>
          <li>
            <strong>Normalized EBITDA bridge:</strong> Show the walk from
            reported to adjusted EBITDA with clear explanations for each
            adjustment.
          </li>
          <li>
            <strong>Sources and uses:</strong> A clean table showing where every
            dollar of capital comes from and where it goes &mdash; purchase
            price, transaction costs, working capital, reserves.
          </li>
          <li>
            <strong>Pro forma projections:</strong> The 5-year income statement,
            cash flow, and balance sheet with assumptions clearly labeled.
          </li>
          <li>
            <strong>Returns matrix:</strong> IRR and MOIC across scenarios and
            exit years, with the base case highlighted.
          </li>
          <li>
            <strong>Key risks and mitigants:</strong> An honest assessment of
            what could go wrong and how you plan to manage each risk.
          </li>
        </ol>

        <h3 className={h3Class}>Investor expectations</h3>
        <p>
          Search fund investors have seen hundreds of models. They are looking for
          several things beyond the raw numbers:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Intellectual honesty:</strong> Does the model acknowledge
            risks, or does it present only the rosy scenario? Investors trust
            searchers who identify problems and present solutions more than
            those who pretend problems do not exist.
          </li>
          <li>
            <strong>Assumption transparency:</strong> Can they trace every
            number back to a clearly stated assumption? Color-code inputs
            (blue for assumptions, black for calculations) so investors can
            quickly identify what they might want to change.
          </li>
          <li>
            <strong>Downside protection:</strong> What happens in the worst
            plausible case? Can the business still service debt? Is the equity
            wiped out, or is there a margin of safety?
          </li>
          <li>
            <strong>Consistency with the{" "}
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">valuation</Link>:</strong>{" "}
            The purchase price implied by your model should be consistent with
            the valuation framework you present. If you are paying 4.5x EBITDA,
            your model should demonstrate why that multiple is justified.
          </li>
        </ul>

        <h2 className={h2Class}>Excel and Google Sheets best practices</h2>
        <p>
          A technically sound model that is poorly organized is nearly as useless
          as a bad model. Follow these conventions to build models that are
          professional, auditable, and easy for others to manage.
        </p>

        <h3 className={h3Class}>Workbook structure</h3>
        <ul className={ulClass}>
          <li>
            <strong>Assumptions tab:</strong> Consolidate all input assumptions
            on a single tab. Revenue growth rates, expense margins, capex
            percentages, interest rates, tax rates, and exit assumptions should
            all live here. Never hard-code an assumption into a formula on
            another tab.
          </li>
          <li>
            <strong>Historical financials tab:</strong> 3&ndash;5 years of
            historical income statements, balance sheets, and cash flows
            formatted consistently with your projection tabs. This allows
            side-by-side comparison of projections versus actuals.
          </li>
          <li>
            <strong>Pro forma tabs:</strong> Separate tabs for the income
            statement, balance sheet, cash flow statement, and debt schedule.
            Each tab should flow logically and reference the assumptions tab.
          </li>
          <li>
            <strong>Returns tab:</strong> A standalone tab showing the sources
            and uses, equity waterfall, IRR and MOIC calculations, and the
            returns sensitivity matrix.
          </li>
          <li>
            <strong>Dashboard tab:</strong> A summary tab at the front of the
            workbook with key metrics, charts, and a scenario toggle that
            lets investors switch between base, upside, and downside cases
            with a single dropdown.
          </li>
        </ul>

        <h3 className={h3Class}>Formatting conventions</h3>
        <ul className={ulClass}>
          <li>
            <strong>Color coding:</strong> Blue font for hard-coded inputs,
            black for formulas, green for links to other tabs. This is the
            industry standard and makes the model immediately navigable for
            anyone with financial modeling experience.
          </li>
          <li>
            <strong>Consistent sign convention:</strong> Decide whether expenses
            are positive or negative and maintain that convention throughout.
            Mixing sign conventions is the fastest way to introduce errors.
          </li>
          <li>
            <strong>Row and column labels:</strong> Every row should have a
            clear label. Every column should have a period header (month, quarter,
            or year). Never leave unlabeled rows or columns.
          </li>
          <li>
            <strong>Units:</strong> Label whether figures are in dollars,
            thousands, or millions. A common convention is to present all
            figures in thousands ($000s) to keep the numbers manageable.
          </li>
          <li>
            <strong>Error checks:</strong> Build automated checks into the
            model &mdash; balance sheet balance check, cash flow reconciliation,
            sources equals uses. Flag errors prominently in red so they are
            impossible to miss.
          </li>
        </ul>

        <h3 className={h3Class}>Google Sheets considerations</h3>
        <p>
          If you are building in Google Sheets rather than Excel, keep these
          limitations in mind:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Performance:</strong> Google Sheets slows down significantly
            with complex formulas across multiple tabs. Keep your model lean
            &mdash; avoid unnecessary array formulas and volatile functions.
          </li>
          <li>
            <strong>Iterative calculations:</strong> Google Sheets supports
            iterative calculations (Settings &rarr; Calculation &rarr; Iterative
            calculation) but handles them less reliably than Excel. Consider
            breaking circular references manually.
          </li>
          <li>
            <strong>Collaboration advantage:</strong> The real-time
            collaboration features of Google Sheets make it easier to work with
            advisors and investors during due diligence. Consider building in
            Google Sheets for the collaborative phase and exporting to Excel
            for the final version.
          </li>
          <li>
            <strong>Data validation:</strong> Use data validation dropdowns for
            scenario selectors and key toggles. This prevents users from
            entering invalid inputs that break the model.
          </li>
        </ul>

        <h2 className={h2Class}>Putting it all together</h2>
        <p>
          A well-built acquisition model is not a one-time exercise. It
          evolves as you move through the deal process &mdash; from a
          preliminary screening model built on the CIM, to a detailed model
          informed by management meetings and data room access, to the final
          model that incorporates QoE findings and negotiated terms. At each
          stage, the model should become more precise as you replace
          assumptions with actual data.
        </p>

        <p>
          Start building your modeling skills before you find a deal. Practice
          with public company data, take an online LBO modeling course, or
          rebuild a completed search fund&rsquo;s actual deal economics from
          their investor materials. The searchers who close the best deals are
          almost always the ones who can build and manipulate a model
          fluently &mdash; not because the model makes the decision, but
          because it gives them the clarity and confidence to make the
          decision themselves.
        </p>

        <p>
          When you are ready to move from modeling to action, the model
          becomes the foundation for your{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">letter of intent</Link>{" "}
          and the negotiation that follows. Every number in the LOI &mdash;
          purchase price, working capital peg, earn-out thresholds, debt
          structure &mdash; should trace back to a cell in your model. That
          traceability is what separates a disciplined acquirer from a hopeful
          one.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What IRR and MOIC targets do search fund investors typically expect?</h3>
        <p>
          According to Stanford GSB's 2024 Search Fund Study, search fund investors typically target a 25-35% net IRR and a 3.0-5.0x MOIC over a 5-7 year hold period. In your model, the base case should show at least a 25% IRR and 3.0x MOIC to be competitive for investor capital. The downside case should demonstrate capital preservation (1.0x+ MOIC) with the business still able to service debt. A deal that generates a 30%+ IRR but only a 2.0x MOIC may indicate the hold period is too short to build meaningful value or that too much equity was required. Conversely, a 5.0x MOIC with only a 15% IRR suggests the timeline is too long. Present returns in a 3x3 matrix crossing three revenue scenarios with three exit multiples.
        </p>

        <h3 className={h3Class}>Should I build my acquisition model in monthly or annual periods?</h3>
        <p>
          Build the first two years on a monthly basis and years three through five on an annual basis. Monthly granularity in the early years is critical for two reasons: it surfaces cash flow timing issues that annual models miss (a January acquisition with a large April tax payment during a seasonal revenue trough can create a liquidity crunch), and it demonstrates modeling sophistication to investors. According to Pepperdine's Private Capital Markets Report, approximately 30-40% of deals that look viable on an annual basis reveal cash flow problems when modeled monthly. The monthly model also helps you negotiate the{" "}
          <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">working capital peg</Link> more effectively by showing seasonal working capital swings.
        </p>

        <h3 className={h3Class}>What is the most common modeling mistake first-time searchers make?</h3>
        <p>
          Ignoring working capital is by far the most common and most costly mistake. Many first-time searchers project EBITDA growing at 10% annually but assume zero change in working capital. In reality, a growing business consumes cash as receivables and inventory expand. A company with 60 days sales outstanding, 45 days inventory, and 30 days payable will consume approximately 75 days of incremental revenue as working capital for every dollar of growth. This oversight can overstate free cash flow by 20-30%, leading to overly optimistic return projections and potential covenant breaches in the early years. Always model working capital using a balance sheet approach with DSO, DIO, and DPO assumptions tied to historical performance.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford Graduate School of Business, <em>2024 Search Fund Study: Selected Observations</em> (2024)</li>
          <li>Pepperdine Graziadio Business School, <em>Private Capital Markets Report</em> (2024)</li>
          <li>Wall Street Prep, <em>LBO Modeling Best Practices for Private Equity</em> (2024)</li>
        </ul>
      </div>
    </article>
  );
}
