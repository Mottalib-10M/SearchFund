import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function LBOForSMEsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        How to Structure a Leveraged Buyout (LBO) for SMEs
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          A leveraged buyout uses the target company&rsquo;s own cash flow
          to service the debt used to acquire it. While associated with
          Wall Street mega-deals, LBO principles are the backbone of
          search fund and self-funded acquisitions. According to the
          Pepperdine Private Capital Markets Report, approximately 70% of
          SME acquisitions use some form of used structure. This
          guide adapts LBO structuring for SME acquisitions with practical
          examples.
        </p>

        <h2 className={h2Class}>LBO fundamentals for SMEs</h2>
        <p>
          The core principle: acquire a business using primarily debt
          (used), with the business&rsquo;s cash flow servicing
          that debt. As debt is paid down, equity value increases
          &mdash; even without any operational improvement.
        </p>
        <ul className={ulClass}>
          <li><strong>Debt component:</strong> 60&ndash;80% of purchase price ({" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA
            </Link>, bank debt,{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller notes
            </Link>)</li>
          <li><strong>Equity component:</strong> 20&ndash;40% ({" "}
            <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
              search fund investors
            </Link>{" "}
            + personal capital)</li>
          <li><strong>Cash flow requirement:</strong> Free cash flow must exceed annual debt service by 1.25x+ (DSCR requirement)</li>
          <li><strong>Value creation:</strong> Debt paydown + operational improvement + revenue growth + multiple expansion at exit</li>
        </ul>

        <h2 className={h2Class}>The SME capital stack</h2>
        <p>
          See our{" "}
          <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
            capital stack guide
          </Link>{" "}
          for the full framework. Typical layers for an SME LBO:
        </p>

        <h3 className={h3Class}>Layer 1: Senior secured debt (50&ndash;70%)</h3>
        <ul className={ulClass}>
          <li><strong>SBA 7(a):</strong> Up to $5M, 10&ndash;25 year term, Prime + 2.25&ndash;2.75% per SBA underwriting standards. The most favorable terms available for SME acquisitions</li>
          <li><strong>Conventional bank debt:</strong> 2.5&ndash;3.5x EBITDA use, 5&ndash;7 year term, variable rate</li>
          <li><strong>Collateral:</strong> Secured by business assets + personal guarantee (typically required)</li>
          <li><strong>Covenants:</strong> DSCR minimum (1.25x), leverage ratio maximum, capex limits</li>
        </ul>

        <h3 className={h3Class}>Layer 2: Subordinated debt (10&ndash;20%)</h3>
        <ul className={ulClass}>
          <li><strong>Seller note:</strong> Most common subordinated debt in SME deals. 5&ndash;7% interest, 3&ndash;7 year term</li>
          <li><strong>Mezzanine debt:</strong> For larger deals ($10M+). 12&ndash;18% total yield (interest + warrants)</li>
          <li><strong>Standby provision:</strong> SBA requires seller notes to be on &ldquo;full standby&rdquo; (no payments) for minimum 2 years</li>
        </ul>

        <h3 className={h3Class}>Layer 3: Equity (15&ndash;30%)</h3>
        <ul className={ulClass}>
          <li><strong>Search fund investor equity:</strong> Traditional model &mdash; investors fund the equity at acquisition</li>
          <li><strong>Personal equity:</strong> Self-funded model &mdash; buyer contributes personal capital</li>
          <li><strong>Rollover equity:</strong> Seller retains 5&ndash;20% ownership in the recapitalized business</li>
        </ul>

        <h2 className={h2Class}>LBO modeling for SMEs: worked example</h2>
        <p>
          Scenario: Acquiring a $2M EBITDA business at 4.5x = $9M purchase price.
        </p>

        <h3 className={h3Class}>Sources of funds</h3>
        <ul className={ulClass}>
          <li>SBA 7(a) loan: $5M (55% of purchase price, 2.5x EBITDA)</li>
          <li>Seller note: $1.5M (17%, 6% interest, 5-year term, 2-year standby)</li>
          <li>Equity: $2.5M (28%)</li>
          <li><strong>Total sources: $9M</strong></li>
        </ul>

        <h3 className={h3Class}>Year 1 cash flow</h3>
        <ul className={ulClass}>
          <li>EBITDA: $2M</li>
          <li>SBA debt service (P+I, 10-year): ($660K)</li>
          <li>Seller note (interest only, standby): $0</li>
          <li>Maintenance capex: ($150K)</li>
          <li>Taxes (estimated): ($250K)</li>
          <li>CEO salary (incremental vs. seller): ($100K)</li>
          <li><strong>Free cash flow to equity: ~$840K</strong></li>
          <li><strong>DSCR: $840K / $660K = 1.27x</strong> (above 1.25x minimum)</li>
        </ul>

        <h3 className={h3Class}>5-year value creation</h3>
        <ul className={ulClass}>
          <li>EBITDA growth to $3M (8% annual growth)</li>
          <li>Debt paydown: SBA balance reduced from $5M to $2.5M; seller note fully repaid</li>
          <li>Exit at 5.5x EBITDA = $16.5M enterprise value</li>
          <li>Net to equity: $16.5M &minus; $2.5M remaining debt = $14M</li>
          <li><strong>Equity return: $14M / $2.5M invested = 5.6x MOIC, ~41% IRR</strong></li>
        </ul>

        <h2 className={h2Class}>Value creation levers in an LBO</h2>
        <ul className={ulClass}>
          <li><strong>Debt paydown (leveraged return):</strong> Even with zero growth, paying down $4M in debt over 5 years creates $4M in equity value. This is the &ldquo;free&rdquo; return from leverage</li>
          <li><strong>EBITDA growth:</strong> Each $1 of EBITDA growth is worth $4&ndash;6 at exit (depending on multiple). Growing from $2M to $3M EBITDA = $4&ndash;6M in value creation</li>
          <li><strong>Multiple expansion:</strong> Growing above $3M+ EBITDA often commands 1&ndash;2 higher turn multiples at exit (PE buyers pay more for larger platforms)</li>
          <li><strong>
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              Buy-and-build
            </Link>:
          </strong> Add-on acquisitions at 3&ndash;4x EBITDA that exit at 6&ndash;8x &mdash; multiple arbitrage is the most powerful value creation lever in SME LBOs</li>
        </ul>

        <h2 className={h2Class}>Sensitivity analysis: what can go wrong</h2>
        <ul className={ulClass}>
          <li><strong>Revenue decline:</strong> A 10% revenue drop may reduce EBITDA by 15&ndash;25% (operating leverage works both ways). Model the downside</li>
          <li><strong>Interest rate risk:</strong> SBA and bank loans are typically variable rate. A 200bp rate increase on $5M debt = $100K additional annual expense</li>
          <li><strong>Working capital surprise:</strong> If the business needs more working capital than expected, free cash flow suffers</li>
          <li><strong>Deferred capex:</strong> Equipment or technology that needs immediate replacement drains cash</li>
          <li><strong>Key customer loss:</strong>{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              Concentrated revenue
            </Link>{" "}
            makes the LBO fragile. Losing a 20% customer devastates debt service coverage</li>
        </ul>

        <h2 className={h2Class}>LBO red flags</h2>
        <ul className={ulClass}>
          <li><strong>DSCR below 1.2x:</strong> No margin of safety. Any revenue softness triggers a debt crisis</li>
          <li><strong>Total use above 4x EBITDA:</strong> Aggressive for SMEs. Most lenders cap at 3&ndash;3.5x for a reason</li>
          <li><strong>Cyclical revenue:</strong> LBOs need stable, predictable cash flow to service debt. Project-based or cyclical businesses are poor LBO candidates</li>
          <li><strong>High maintenance capex:</strong> If the business requires heavy capital reinvestment, free cash flow for debt service may be inadequate</li>
          <li><strong>Grow-into-the-multiple:</strong> If the deal only works with aggressive growth assumptions, it&rsquo;s probably too expensive. See{" "}
            <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
              why search funds fail
            </Link></li>
        </ul>

        <h2 className={h2Class}>Tax considerations in SME LBOs</h2>
        <p>
          The tax treatment of an LBO can significantly impact returns. Interest
          on acquisition debt is generally tax-deductible, creating a &ldquo;tax
          shield&rdquo; that reduces the effective cost of debt. For a $5M SBA
          loan at 7% interest, the annual interest expense of $350K generates
          approximately $85K in tax savings (assuming a 24% effective rate).
          Over a 5-year hold period, this tax shield can add meaningful value.
          See our guide to{" "}
          <Link href="/learn/deal-structure-optimization" className="text-apple-accent hover:underline">
            deal structure optimization
          </Link>{" "}
          for asset vs. stock purchase tax implications.
        </p>

        <p>
          For the complete financing framework, see our{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            acquisition financing
          </Link>{" "}
          and{" "}
          <Link href="/learn/creative-financing" className="text-apple-accent hover:underline">
            creative financing
          </Link>{" "}
          guides.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What DSCR do lenders require for SME LBOs?</h3>
        <p>
          Most SBA preferred lenders require a minimum debt service coverage
          ratio (DSCR) of 1.25x, meaning the business must generate $1.25 in
          free cash flow for every $1 of annual debt payments. Conventional
          bank lenders may require 1.30x&ndash;1.50x for non-SBA deals. In
          practice, prudent buyers should target 1.5x+ DSCR at acquisition
          to provide sufficient cushion for revenue dips, working capital
          surprises, or unexpected capital expenditures. A DSCR below 1.2x
          at acquisition provides no margin of safety and should prompt a
          renegotiation of the purchase price or capital structure.
        </p>

        <h3 className={h3Class}>How much personal equity do I need for an SME LBO?</h3>
        <p>
          For SBA-financed deals, the minimum buyer equity injection is
          typically 10&ndash;15% of the total project cost (including
          working capital and closing costs). With a seller note on
          standby, this can be reduced further. For traditional search
          fund acquisitions, the equity comes from committed investors,
          and the searcher contributes &ldquo;sweat equity&rdquo; in
          exchange for a carried interest (typically 20&ndash;30% of
          upside). Self-funded searchers should expect to contribute
          $100K&ndash;$500K personally, depending on deal size.
        </p>

        <h3 className={h3Class}>What types of businesses are poor LBO candidates?</h3>
        <p>
          Businesses with cyclical or project-based revenue, high capital
          expenditure requirements, thin margins, or heavy customer
          concentration make poor LBO candidates. The LBO model depends
          on predictable, stable cash flow to service debt. Businesses that
          experience 20%+ revenue swings between years cannot reliably
          cover fixed debt payments. Similarly, capital-intensive businesses
          (manufacturing, heavy equipment) may have maintenance capex that
          consumes most of the free cash flow, leaving insufficient cushion
          for debt service.
        </p>
      </div>
    </article>
  );
}
