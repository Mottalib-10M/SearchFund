import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquisitionFinancingArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Finance a Search Fund Acquisition</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Financing is the engine that turns a signed LOI into a closed deal.
          Search fund acquisitions typically combine multiple sources of capital
          &mdash; senior debt, mezzanine financing, seller notes, and equity
          &mdash; into a capital stack that balances cost of capital, risk, and
          repayment capacity. Understanding each layer and how to negotiate it
          is one of the most important skills for an ETA entrepreneur.
        </p>

        <h2 className={h2Class}>The capital stack</h2>
        <p>
          The capital stack describes the hierarchy of claims on the acquired
          company&apos;s cash flows and assets. Capital at the top of the stack
          has the highest priority in repayment (and lowest risk), while equity
          at the bottom absorbs losses first but captures the most upside.
          A typical search fund acquisition is financed as follows:
        </p>

        <h3 className={h3Class}>Senior debt (40-60% of enterprise value)</h3>
        <p>
          Senior debt is the cheapest and most readily available form of
          acquisition financing. It comes from commercial banks or
          government-backed lending programs and is secured by the assets and
          cash flows of the acquired business. Typical terms include:
        </p>
        <ul className={ulClass}>
          <li><strong>Leverage:</strong> 2.5x-4.0x EBITDA, depending on the business quality, industry, and lender appetite.</li>
          <li><strong>Interest rate:</strong> Base rate (SOFR, Euribor) plus 2-4% spread, or fixed rates in the 5-8% range.</li>
          <li><strong>Amortization:</strong> 5-10 year amortization with mandatory quarterly principal payments.</li>
          <li><strong>Covenants:</strong> Financial covenants including debt-to-EBITDA ratio, fixed charge coverage ratio, and minimum liquidity requirements.</li>
          <li><strong>Collateral:</strong> First lien on all business assets, and often a personal guarantee from the buyer (especially for smaller deals).</li>
        </ul>

        <h3 className={h3Class}>Mezzanine debt (10-20% of enterprise value)</h3>
        <p>
          Mezzanine financing fills the gap between senior debt capacity and
          the total capital needed. It is subordinated to senior debt, meaning
          it is repaid only after senior lenders are satisfied. Mezzanine is
          more expensive than senior debt to reflect this higher risk:
        </p>
        <ul className={ulClass}>
          <li><strong>Interest rate:</strong> 12-18% total return, often structured as cash interest plus PIK (payment-in-kind) interest that accrues.</li>
          <li><strong>Warrants:</strong> Mezzanine lenders may require equity warrants (1-5% of equity) as additional compensation.</li>
          <li><strong>Term:</strong> 5-7 years, typically interest-only with a bullet maturity.</li>
          <li><strong>When to use it:</strong> When the deal requires more leverage than a senior lender will provide, but you want to minimize equity dilution.</li>
        </ul>

        <h3 className={h3Class}>Seller notes (10-30% of enterprise value)</h3>
        <p>
          A seller note is deferred purchase price &mdash; the seller agrees to
          receive a portion of the purchase price over time rather than all cash
          at closing. Seller notes are one of the most powerful tools in a
          search fund buyer&apos;s toolkit:
        </p>
        <ul className={ulClass}>
          <li><strong>Interest rate:</strong> Typically 3-6%, well below market rates for subordinated debt, because the seller is motivated to close the deal.</li>
          <li><strong>Term:</strong> 3-7 years with various amortization structures.</li>
          <li><strong>Subordination:</strong> Always subordinated to senior bank debt. Your senior lender will require a standstill agreement that prevents the seller from demanding payment if the senior debt is in distress.</li>
          <li><strong>Alignment:</strong> A seller note aligns the seller&apos;s interest with the buyer&apos;s success post-closing. The seller is incentivized to support the transition because their note depends on the business continuing to perform.</li>
        </ul>

        <h3 className={h3Class}>Equity (30-50% of enterprise value)</h3>
        <p>
          The equity portion comes from search fund investors (with their
          step-up) and new acquisition equity investors. In a traditional
          search fund, existing investors have the right of first refusal on
          the acquisition equity. The equity check is the most expensive layer
          of the capital stack &mdash; investors expect 25-35% IRR &mdash; but
          it provides the cushion that makes lenders comfortable providing debt.
        </p>

        <h2 className={h2Class}>SBA 7(a) loans (US)</h2>
        <p>
          For US-based searchers, the Small Business Administration 7(a) loan
          program is the single most impactful financing tool. SBA 7(a) loans
          are partially guaranteed by the federal government, which reduces
          lender risk and enables more favorable terms:
        </p>
        <ul className={ulClass}>
          <li><strong>Loan amount:</strong> Up to $5M per borrower.</li>
          <li><strong>Leverage:</strong> Up to 90% of the total project cost (purchase price + working capital + closing costs).</li>
          <li><strong>Term:</strong> 10-year term with full amortization (25 years for real estate portion).</li>
          <li><strong>Interest rate:</strong> Prime + 2.25-2.75%, fully variable.</li>
          <li><strong>Personal guarantee:</strong> Required from anyone with 20%+ ownership.</li>
          <li><strong>Equity injection:</strong> Minimum 10% equity injection, which can include seller notes on standby (no payments for the first 2 years).</li>
        </ul>
        <p>
          SBA loans are particularly popular among self-funded searchers because
          they dramatically reduce the equity required. A $5M acquisition
          might require only $500K-$750K of equity with an SBA loan, versus
          $2M+ with conventional financing.
        </p>

        <h2 className={h2Class}>European government-backed programs</h2>
        <p>
          Europe offers several government-backed lending programs that serve a
          similar function to SBA loans, though with different structures and
          eligibility requirements.
        </p>

        <h3 className={h3Class}>BPI France (Bpifrance)</h3>
        <p>
          Bpifrance provides direct loans, loan guarantees, and co-investment
          for SME acquisitions. Key programs include:
        </p>
        <ul className={ulClass}>
          <li><strong>Pr&ecirc;t Transmission:</strong> Unsecured loans of &euro;50K-&euro;500K for business acquisitions, with 7-year terms and no personal guarantee required.</li>
          <li><strong>Garantie Transmission:</strong> Guarantees up to 50-70% of bank acquisition loans, making it easier to obtain senior financing from commercial banks.</li>
          <li><strong>Eligibility:</strong> Available to individuals acquiring SMEs with fewer than 250 employees. The searcher must demonstrate relevant management experience.</li>
        </ul>

        <h3 className={h3Class}>KfW (Germany)</h3>
        <p>
          The KfW (Kreditanstalt f&uuml;r Wiederaufbau) is Germany&apos;s
          state-owned development bank. Its programs for business succession
          include:
        </p>
        <ul className={ulClass}>
          <li><strong>ERP-Gr&uuml;nderkredit &mdash; Universell:</strong> Loans up to &euro;25M for business acquisitions with subsidized interest rates and up to 2 years of repayment deferral.</li>
          <li><strong>ERP-Kapital f&uuml;r Gr&uuml;ndung:</strong> Subordinated loans (mezzanine equivalent) up to &euro;500K that count as equity for bank lending purposes. This is particularly valuable for searchers with limited personal capital.</li>
          <li><strong>Process:</strong> KfW loans are routed through your commercial bank (Hausbank principle). You apply through the bank, and KfW provides the funding and guarantee behind the scenes.</li>
        </ul>

        <h3 className={h3Class}>ICO (Spain)</h3>
        <p>
          The Instituto de Cr&eacute;dito Oficial provides subsidized lending
          through Spanish commercial banks:
        </p>
        <ul className={ulClass}>
          <li><strong>L&iacute;nea ICO Empresas y Emprendedores:</strong> Loans up to &euro;12.5M for business acquisitions and investments, with terms up to 20 years.</li>
          <li><strong>Interest rates:</strong> Subsidized rates below market, typically fixed or capped.</li>
          <li><strong>CERSA guarantees:</strong> The CERSA mutual guarantee system can provide additional credit enhancement for smaller acquisitions.</li>
        </ul>

        <h2 className={h2Class}>Seller financing strategies</h2>
        <p>
          Seller financing is not just a financial tool &mdash; it is a
          negotiation tool. Here are strategies for maximizing its effectiveness:
        </p>
        <ul className={ulClass}>
          <li><strong>Position it as a win-win:</strong> Frame the seller note as tax-efficient for the seller (installment sale treatment) and as evidence of their confidence in the business. Sellers who refuse any seller note may be signaling concerns about business sustainability.</li>
          <li><strong>Start at 20-30%:</strong> Propose a seller note of 20-30% of the purchase price. Even if the seller negotiates it down, you will likely end up with 10-15%, which is meaningful.</li>
          <li><strong>Offer a personal connection:</strong> Regular reporting to the seller during the note period. Quarterly financial statements and an annual call build trust and reduce the seller&apos;s anxiety about repayment.</li>
          <li><strong>Negotiate favorable terms:</strong> Interest-only for the first 1-2 years, then amortizing. This preserves cash flow during the critical transition period.</li>
        </ul>

        <h2 className={h2Class}>Earn-outs</h2>
        <p>
          An earn-out is a portion of the purchase price contingent on the
          business achieving specific performance targets after closing.
          Earn-outs can bridge valuation gaps but are complex to structure:
        </p>
        <ul className={ulClass}>
          <li><strong>Simple metrics:</strong> Use revenue or gross profit rather than EBITDA. EBITDA is too easily manipulated by the new owner through changes in spending, compensation, and accounting policies.</li>
          <li><strong>Short duration:</strong> 1-2 years maximum. Longer earn-outs create ongoing friction and limit the buyer&apos;s operational flexibility.</li>
          <li><strong>Cap the amount:</strong> Set a clear maximum earn-out payment. Uncapped earn-outs create misaligned incentives.</li>
          <li><strong>Define measurement carefully:</strong> Specify the accounting standards, who prepares the calculations, and the dispute resolution mechanism for disagreements.</li>
        </ul>

        <h2 className={h2Class}>Working with banks</h2>
        <p>
          Building relationships with lenders is a critical skill for search
          fund entrepreneurs. Start early &mdash; do not wait until you have a
          signed LOI to introduce yourself to banks.
        </p>
        <ul className={ulClass}>
          <li><strong>Build relationships before you need them:</strong> Meet with 5-10 lenders during your search phase. Explain the search fund model and your criteria. Ask about their appetite for acquisition financing and their typical terms.</li>
          <li><strong>Identify the right lenders:</strong> Look for banks with SME acquisition experience, not just general commercial banking. Credit unions, community banks, and specialized acquisition lenders often offer better terms than large institutions.</li>
          <li><strong>Prepare a professional package:</strong> When you approach lenders with a specific deal, present a complete financing memorandum: company overview, historical financials, adjusted EBITDA analysis, management projections, and your proposed capital structure.</li>
          <li><strong>Get multiple term sheets:</strong> Always solicit offers from at least 3 lenders. Competition improves terms and gives you leverage in negotiations.</li>
        </ul>

        <h2 className={h2Class}>How to present to lenders</h2>
        <p>
          Lenders evaluate acquisition financing differently from equity
          investors. They focus on downside protection, not upside potential.
          Tailor your presentation accordingly:
        </p>
        <ul className={ulClass}>
          <li><strong>Cash flow coverage:</strong> Demonstrate that the business generates sufficient cash flow to service the proposed debt with a comfortable margin. Lenders want to see a fixed charge coverage ratio of 1.25x or higher.</li>
          <li><strong>Adjusted EBITDA quality:</strong> Present a rigorous quality of earnings analysis. Lenders will scrutinize add-backs aggressively &mdash; only include adjustments you can defend with documentation.</li>
          <li><strong>Collateral value:</strong> Inventory the tangible assets available as collateral: real estate, equipment, inventory, receivables. Asset-heavy businesses are easier to finance.</li>
          <li><strong>Management transition plan:</strong> Lenders worry about the risk of a new, inexperienced owner running the business. Present a detailed transition plan showing how you will maintain continuity with employees, customers, and suppliers.</li>
          <li><strong>Downside scenarios:</strong> Show sensitivity analysis with revenue declines of 10-20%. If the business can still service debt in a downturn, lenders gain confidence. Never present only the upside case.</li>
        </ul>

        <h2 className={h2Class}>Putting it all together</h2>
        <p>
          A well-structured capital stack for a &euro;5M acquisition might look
          like this: &euro;2.5M senior bank debt (50%), &euro;750K seller note
          (15%), and &euro;1.75M equity (35%). The senior debt is priced at
          Euribor + 3%, the seller note at 4% over 5 years, and the equity
          investors expect a 30% IRR. Your blended cost of capital is
          significantly lower than an all-equity deal, which magnifies
          returns for equity holders when the business performs well.
        </p>
        <p>
          Start building your financing toolkit early in the search process.
          Understand the programs available in your geography, build lender
          relationships, and model multiple capital structures for different deal
          sizes. When the right acquisition appears, you want to move quickly
          &mdash; financing delays kill more deals than valuation disagreements.
        </p>
      </div>
    </article>
  );
}
