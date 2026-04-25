import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function LeveragedBuyoutSMEArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        How to Structure a Leveraged Buyout (LBO) for SMEs
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          A leveraged buyout (LBO) uses a combination of debt and equity to
          acquire a business, with the target company&rsquo;s cash flow
          servicing the debt. While LBOs are associated with large PE deals,
          the Stanford 2024 Search Fund Study confirms that the same used
          principles apply to SME acquisitions in{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            ETA
          </Link>. Here&rsquo;s how to structure one.
        </p>

        <h2 className={h2Class}>How an LBO works</h2>
        <ol className={olClass}>
          <li><strong>Acquire:</strong> Buy a business using a mix of debt (60-80%) and equity (20-40%)</li>
          <li><strong>Operate:</strong> Use the business&rsquo;s cash flow to service and repay the debt over 5-10 years</li>
          <li><strong>Grow:</strong> Increase EBITDA through organic growth, pricing, and operational improvement</li>
          <li><strong>Exit:</strong> Sell at a higher EBITDA and/or multiple, generating outsized equity returns</li>
        </ol>

        <h2 className={h2Class}>The three return drivers</h2>
        <ul className={ulClass}>
          <li><strong>Debt paydown:</strong> As the business repays debt, equity value increases. At 4x use, paying down 1 turn of debt adds 25% to equity</li>
          <li><strong>EBITDA growth:</strong> Organic and acquisitive growth directly increases enterprise value</li>
          <li><strong>Multiple expansion:</strong> Buy at 4x, sell at 6-8x. The most powerful (and least reliable) return driver</li>
        </ul>

        <h2 className={h2Class}>SME LBO capital structure</h2>

        <h3 className={h3Class}>Typical structure</h3>
        <ul className={ulClass}>
          <li><strong>Senior debt:</strong> 50-70% of purchase price. See{" "}
            <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
              capital stack guide
            </Link></li>
          <li><strong>Seller note:</strong> 10-20%. See{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing
            </Link></li>
          <li><strong>Equity:</strong> 15-35% from buyer and/or{" "}
            <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
              investors
            </Link></li>
        </ul>

        <h3 className={h3Class}>Leverage ratios</h3>
        <ul className={ulClass}>
          <li><strong>Total debt / EBITDA:</strong> 3-4.5x for SMEs (vs. 5-7x for large PE deals), per Pepperdine Private Capital Markets data</li>
          <li><strong>Senior debt / EBITDA:</strong> 2.5-3.5x (SBA or bank)</li>
          <li><strong>DSCR:</strong> Minimum 1.25x, the business generates $1.25 for every $1 in debt payments</li>
          <li><strong>Fixed charge coverage:</strong> 1.1x+ including capex, taxes, and debt service</li>
        </ul>

        <h2 className={h2Class}>LBO modeling for SMEs</h2>

        <h3 className={h3Class}>Key assumptions</h3>
        <ul className={ulClass}>
          <li><strong>Entry multiple:</strong> 3-6x EBITDA. See{" "}
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              multiples by industry
            </Link></li>
          <li><strong>Revenue growth:</strong> 3-8% annually (conservative for planning)</li>
          <li><strong>Margin improvement:</strong> 1-3% EBITDA margin expansion through operational improvement</li>
          <li><strong>Hold period:</strong> 5-7 years (matches debt term and{" "}
            <Link href="/learn/qsbs-qualified-small-business-stock" className="text-apple-accent hover:underline">
              QSBS
            </Link>{" "}
            holding period)</li>
          <li><strong>Exit multiple:</strong> 4-8x EBITDA (conservative: same as entry; optimistic: 1-2 turns higher)</li>
        </ul>

        <h3 className={h3Class}>Example: $5M EBITDA business</h3>
        <ul className={ulClass}>
          <li><strong>Purchase price:</strong> $25M (5x EBITDA)</li>
          <li><strong>Debt:</strong> $17.5M (3.5x EBITDA, 70% of price)</li>
          <li><strong>Equity:</strong> $7.5M (30%)</li>
          <li><strong>After 5 years:</strong> EBITDA grows to $7M, debt paid down to $12M</li>
          <li><strong>Exit at 6x:</strong> $42M enterprise value &minus; $12M debt = $30M equity</li>
          <li><strong>Equity return:</strong> 4x MOIC, ~32% IRR on $7.5M invested</li>
        </ul>

        <h2 className={h2Class}>Debt sources for SME LBOs</h2>
        <ul className={ulClass}>
          <li><strong>SBA 7(a):</strong> Up to $5M, 10-year term. Best for smaller deals. See{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA guide
            </Link></li>
          <li><strong>Commercial banks:</strong> $1M-$25M, 5-7 year terms. Requires strong cash flow</li>
          <li><strong>Private credit:</strong> $5M-$50M+. More flexible on use and covenants</li>
          <li><strong>Mezzanine funds:</strong> $1M-$10M subordinated debt at 12-18% total cost</li>
          <li><strong>Seller notes:</strong> 10-30% of price at 4-8% interest. Subordinated to bank debt</li>
        </ul>

        <h2 className={h2Class}>Key risks in SME LBOs</h2>
        <ul className={ulClass}>
          <li><strong>Revenue decline:</strong> A 10-15% revenue drop can eliminate free cash flow. See{" "}
            <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
              why search funds fail
            </Link></li>
          <li><strong>Interest rate risk:</strong> Variable-rate debt exposes you to rate increases. Consider caps or fixed rates</li>
          <li><strong>Working capital surprises:</strong> Seasonal{" "}
            <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">
              working capital
            </Link>{" "}
            needs create cash crunches in used businesses</li>
          <li><strong>Over-use:</strong> Conservative use (3-3.5x) is safer than aggressive (4.5x+)</li>
          <li><strong>Customer concentration:</strong>{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              Losing a major customer
            </Link>{" "}
            in a used business is existential</li>
        </ul>

        <h2 className={h2Class}>LBO vs. other acquisition models</h2>
        <ul className={ulClass}>
          <li><strong>vs. All-equity:</strong> LBO generates higher returns through use but carries more risk</li>
          <li><strong>vs. Self-funded SBA:</strong> SBA is effectively a small LBO, 80% debt, 10% seller note, 10% equity</li>
          <li><strong>vs. Traditional search fund:</strong> Search funds use moderate use (2-3x) vs. full LBO (3.5-4.5x)</li>
        </ul>

        <h2 className={h2Class}>Building an LBO model: step by step</h2>
        <p>
          Every SME LBO should be modeled in a spreadsheet before
          committing capital. The core components are: (1) sources and
          uses of funds at acquisition, (2) a 5-7 year income
          statement projection, (3) a debt schedule showing amortization
          for each tranche, (4) free cash flow calculation incorporating
          maintenance capex and working capital changes, and (5) an exit
          analysis with sensitivity to exit multiple and EBITDA at exit.
          Run downside scenarios: what happens if revenue declines 10%?
          What if interest rates rise 200 basis points? What if a key
          customer is lost? A strong model identifies the conditions
          under which the deal breaks and helps you set appropriate
          purchase price limits.
        </p>

        <p>
          For related guides, see{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            acquisition financing
          </Link>,{" "}
          <Link href="/learn/creative-financing" className="text-apple-accent hover:underline">
            creative financing
          </Link>,{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            investor economics
          </Link>, and{" "}
          <Link href="/learn/lbo-for-smes" className="text-apple-accent hover:underline">
            our detailed LBO structuring guide
          </Link>.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What is a good IRR target for an SME LBO?</h3>
        <p>
          Most search fund investors target a gross IRR of 25-35%
          on equity invested over a 5-7 year hold period. This
          translates to a 3-5x multiple on invested capital (MOIC).
          Self-funded buyers often target higher returns (35%+) to
          compensate for the personal risk and concentration. The Stanford
          2024 Study reports that the median completed search fund
          acquisition generates approximately 2.9x MOIC, while the top
          quartile exceeds 5x. Returns are driven by the combination of
          debt paydown, EBITDA growth, and multiple expansion at exit.
        </p>

        <h3 className={h3Class}>How do variable interest rates affect SME LBOs?</h3>
        <p>
          Most SBA 7(a) loans and commercial bank acquisition loans carry
          variable rates tied to the Prime rate or SOFR. A 200 basis
          point increase on $5M of debt adds $100K in annual interest
          expense, which directly reduces free cash flow. To mitigate
          this risk, buyers can negotiate interest rate caps (costing
          0.5-2% of the loan amount), choose fixed-rate options
          when available (KfW in Germany, some SBA products), or
          structure the deal with more conservative leverage ratios
          that can absorb rate increases.
        </p>

        <h3 className={h3Class}>What is the difference between an LBO and a management buyout (MBO)?</h3>
        <p>
          An LBO is any acquisition financed primarily with debt. An MBO
          is a specific type of LBO where the existing management team
          purchases the business, often with financial backing from PE
          investors or lenders. In the ETA context, a search fund
          acquisition is technically an LBO (used) but not an MBO
          (the buyer is external). Self-funded ETA acquisitions using SBA
          financing are also LBOs in structure, even though they may not
          use the term. The mechanics, leveraged acquisition with
          cash flow servicing debt, are identical.
        </p>
      </div>
    </article>
  );
}
