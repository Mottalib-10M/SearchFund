import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function DividendRecapitalizationArticle() {
  return (
    <article>
      <h1 className={h1Class}>Dividend Recapitalization: Returning Capital Without Selling</h1>
      <div className={bodyClass}>
        <p>A dividend recapitalization (&quot;dividend recap&quot;) allows a search fund CEO and investors to extract cash from the business without selling it. The company takes on new debt and uses the proceeds to pay a special dividend to shareholders. This strategy lets you return capital to investors, monetize some of your equity, and continue running the business with the potential for additional upside.</p>
      </div>

      <h2 className={h2Class}>How a Dividend Recap Works</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>The company borrows:</strong> Typically from a bank or private credit fund, taking on new senior or mezzanine debt</li>
          <li><strong>Proceeds fund a dividend:</strong> The loan proceeds are distributed to equity holders as a special dividend</li>
          <li><strong>Operations continue:</strong> The CEO continues running the business, now with higher debt service</li>
          <li><strong>Equity holders retain ownership:</strong> Unlike a sale, ownership percentages remain the same</li>
        </ol>
      </div>

      <h2 className={h2Class}>When a Dividend Recap Makes Sense</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Strong cash flow:</strong> The business generates enough free cash flow to comfortably service the new debt (typically 2.0x+ DSCR)</li>
          <li><strong>Investor liquidity needs:</strong> Search fund investors may want partial returns before a full exit</li>
          <li><strong>CEO personal liquidity:</strong> You&apos;ve been earning a CEO salary but have significant paper equity. A recap provides some cash.</li>
          <li><strong>Continued growth potential:</strong> You believe the business will be worth significantly more in 2&ndash;3 years</li>
          <li><strong>No compelling exit opportunity:</strong> Market conditions or business trajectory don&apos;t support an optimal exit now</li>
        </ul>
      </div>

      <h2 className={h2Class}>Typical Structure</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Leverage:</strong> Total debt of 3&ndash;4x EBITDA (including existing debt)</li>
          <li><strong>Dividend size:</strong> Typically 1&ndash;2x EBITDA returned to equity holders</li>
          <li><strong>Debt terms:</strong> 5&ndash;7 year term, amortizing, with rates dependent on credit quality and market conditions</li>
          <li><strong>Lender requirements:</strong> Financial covenants, personal guarantees (sometimes), and restrictions on additional distributions</li>
          <li><strong>Tax treatment:</strong> Dividends are typically taxed as qualified dividends (long-term capital gains rates) if held for more than one year</li>
        </ul>
      </div>

      <h2 className={h2Class}>Risks &amp; Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Increased debt burden:</strong> Higher debt service reduces financial flexibility and margin of safety</li>
          <li><strong>Recession vulnerability:</strong> A leveraged business is more exposed to economic downturns</li>
          <li><strong>Growth constraints:</strong> Debt service may limit capital available for reinvestment and growth</li>
          <li><strong>Covenant risk:</strong> Violating loan covenants can trigger default provisions</li>
          <li><strong>Investor alignment:</strong> Not all investors may want a recap &mdash; some prefer to wait for a full exit at a higher valuation</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>A dividend recap lets you return capital to investors and yourself without selling the business</li>
          <li>Only execute when the business has strong, stable cash flow with 2.0x+ debt service coverage</li>
          <li>Typical structure: 3&ndash;4x total leverage, 1&ndash;2x EBITDA returned as dividend</li>
          <li>The main risk is reduced financial flexibility &mdash; higher debt limits your ability to invest and weather downturns</li>
          <li>Requires alignment with all equity holders and board approval</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">Exit Strategies for Search Fund CEOs</Link></li>
        <li><Link href="/learn/debt-structures-acquisition-finance" className="text-apple-accent hover:underline">Debt Structures in Acquisition Finance</Link></li>
        <li><Link href="/learn/preparing-company-exit" className="text-apple-accent hover:underline">Preparing Your Company for Exit</Link></li>
        <li><Link href="/learn/investor-relations" className="text-apple-accent hover:underline">Investor Relations & Reporting</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Dividend Recapitalizations in Search Fund Companies</em> (2024)</li>
        <li>Harvard Business Review, <em>Recapitalization Strategies for Private Companies</em> (2024)</li>
        <li>Bain &amp; Company, <em>The Economics of Dividend Recaps in Mid-Market M&amp;A</em> (2024)</li>
      </ul>
    </article>
  );
}
