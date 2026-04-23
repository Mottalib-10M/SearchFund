import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SDEvsEBITDAArticle() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <h1 className={h1Class}>
        Seller's Discretionary Earnings (SDE) vs. EBITDA: A Complete Guide for Searchers
      </h1>

      <div className="text-gray-600 mb-8">
        <span>9 min read</span>
      </div>

      <p className={bodyClass}>
        Understanding how to properly value a business is one of the most critical skills for any searcher. Two of the most common profitability metrics used in small and middle-market business acquisitions are Seller's Discretionary Earnings (SDE) and Earnings Before Interest, Taxes, Depreciation, and Amortization (EBITDA). While they may seem similar at first glance, these metrics serve different purposes and are appropriate for different types and sizes of businesses.
      </p>

      <p className={bodyClass}>
        This comprehensive guide will walk you through everything you need to know about SDE and EBITDA, including when to use each metric, how to calculate them, and how they affect business valuations. Whether you're evaluating your first acquisition target or comparing multiple opportunities, mastering these concepts will help you make more informed decisions.
      </p>

      <h2 className={h2Class}>What Is Seller's Discretionary Earnings (SDE)?</h2>

      <p className={bodyClass}>
        Seller's Discretionary Earnings (SDE), sometimes called Seller's Discretionary Cash Flow (SDCF), represents the total financial benefit a single owner-operator receives from owning and operating a business. SDE is designed to show the true earning power of a business for an owner who is actively involved in day-to-day operations.
      </p>

      <p className={bodyClass}>
        The key word here is "discretionary" — SDE includes not just the profit on the income statement, but also the owner's salary, benefits, perks, and any personal expenses that have been run through the business. The metric answers the question: "How much cash does this business generate for the owner to do with as they please?"
      </p>

      <p className={bodyClass}>
        SDE is most commonly used for small businesses where the owner is deeply involved in operations — think of the restaurant owner who also manages the kitchen, the HVAC company owner who still goes out on service calls, or the e-commerce business owner who handles product sourcing and customer service. In these businesses, the owner's compensation and effort are integral to the business model.
      </p>

      <h2 className={h2Class}>What Is EBITDA?</h2>

      <p className={bodyClass}>
        EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and Amortization. It's a measure of a company's operating performance that strips away the effects of financing decisions (interest), tax environments, and accounting decisions (depreciation and amortization). EBITDA represents the earning power of the business operations themselves, independent of capital structure and non-cash accounting items.
      </p>

      <p className={bodyClass}>
        Unlike SDE, EBITDA assumes the business has proper management infrastructure in place and is not dependent on a single owner-operator. It reflects what a business earns after paying market-rate salaries to all employees, including management, but before accounting for how the business is financed or taxed.
      </p>

      <p className={bodyClass}>
        EBITDA is the standard profitability metric for middle-market businesses, typically those generating over $1 million in earnings. It's also the metric preferred by institutional buyers, private equity firms, and most commercial lenders. As businesses grow and professionalize, they naturally transition from being valued on SDE to being valued on EBITDA.
      </p>

      <h2 className={h2Class}>Key Differences Between SDE and EBITDA</h2>

      <p className={bodyClass}>
        While both SDE and EBITDA measure profitability, they differ in several important ways:
      </p>

      <h3 className={h3Class}>Owner Compensation Treatment</h3>

      <p className={bodyClass}>
        The most fundamental difference between SDE and EBITDA is how they treat owner compensation. SDE adds back the owner's salary and benefits because it assumes the new owner will work in the business and wants to know their total economic benefit. EBITDA subtracts a market-rate management salary because it assumes professional management is needed.
      </p>

      <p className={bodyClass}>
        For example, if a business shows a net profit of $300,000 and the owner pays themselves a salary of $150,000, the SDE would be $450,000 (adding back the owner's salary), while EBITDA might only be $350,000 (after deducting a market-rate manager salary of $100,000 and adding back depreciation/amortization).
      </p>

      <h3 className={h3Class}>Business Size and Complexity</h3>

      <p className={bodyClass}>
        SDE is typically used for smaller, simpler businesses where one person can reasonably understand and manage all aspects of the operation. EBITDA is used for larger, more complex businesses that require multiple managers or specialized expertise.
      </p>

      <p className={bodyClass}>
        The transition point is generally around $1 million in earnings, though there's no hard rule. A $800,000 EBITDA software company might be valued on EBITDA if it has a strong management team, while a $1.2 million SDE plumbing business might still be valued on SDE if it's owner-dependent.
      </p>

      <h3 className={h3Class}>Buyer Pool and Valuation Multiples</h3>

      <p className={bodyClass}>
        SDE-valued businesses attract individual buyers and searchers who plan to operate the business themselves. These buyers typically pay 2-4x SDE multiples. EBITDA-valued businesses attract institutional buyers, search funds, and private equity firms who will install professional management. These buyers typically pay 4-8x EBITDA multiples (though the total purchase price may be similar once you account for management salaries).
      </p>

      <h2 className={h2Class}>When to Use SDE</h2>

      <p className={bodyClass}>
        SDE is the appropriate metric when evaluating businesses with the following characteristics:
      </p>

      <ul className={ulClass}>
        <li>Annual earnings under $1 million</li>
        <li>Single owner-operator or small family-owned business</li>
        <li>Owner actively involved in daily operations</li>
        <li>Limited or no middle management layer</li>
        <li>Business model designed around owner's skills and relationships</li>
        <li>Target buyer is an individual or searcher who will work in the business</li>
      </ul>

      <p className={bodyClass}>
        Common business types valued on SDE include local service businesses (HVAC, plumbing, landscaping), small retail stores, restaurants and food service, small e-commerce operations, professional services practices (accounting, law, consulting), and lifestyle businesses that generate income for an owner-operator.
      </p>

      <p className={bodyClass}>
        If you're a searcher planning to operate the business yourself, at least initially, SDE gives you a clearer picture of your total economic benefit. It answers the question: "If I buy this business and work in it, how much money will I make?"
      </p>

      <h2 className={h2Class}>When to Use EBITDA</h2>

      <p className={bodyClass}>
        EBITDA becomes the preferred metric for businesses that have evolved beyond owner-operator status:
      </p>

      <ul className={ulClass}>
        <li>Annual earnings exceeding $1 million</li>
        <li>Established management team in place</li>
        <li>Systems and processes that don't depend on owner involvement</li>
        <li>Multiple locations or revenue streams requiring specialized management</li>
        <li>Business can operate successfully without daily owner involvement</li>
        <li>Target buyer pool includes institutional investors or private equity</li>
      </ul>

      <p className={bodyClass}>
        Businesses valued on EBITDA include manufacturing companies, distribution businesses, software and technology companies with recurring revenue, multi-location service businesses, healthcare practices with multiple providers, and companies with enterprise value above $5 million.
      </p>

      <p className={bodyClass}>
        For searchers pursuing traditional search fund acquisitions, EBITDA is almost always the relevant metric because you're looking for businesses large enough to support professional management and generate institutional-quality returns. Even if you plan to work in the business initially, you're buying based on the business's ability to operate with hired management.
      </p>

      <h2 className={h2Class}>How to Calculate Each Metric</h2>

      <h3 className={h3Class}>Calculating SDE</h3>

      <p className={bodyClass}>
        The SDE calculation starts with net income (or net profit) from the income statement and adds back various owner-related expenses and discretionary items:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-6">
        <p className="font-mono text-sm mb-2">SDE Formula:</p>
        <ol className="font-mono text-sm space-y-1">
          <li>Start with: Net Income (from income statement)</li>
          <li>Add back: Owner's salary and wages</li>
          <li>Add back: Owner's payroll taxes and benefits</li>
          <li>Add back: Owner's personal expenses run through business</li>
          <li>Add back: Interest expense</li>
          <li>Add back: Depreciation and amortization</li>
          <li>Add back: One-time, non-recurring expenses</li>
          <li>Add back: Above-market rent (if owner is landlord)</li>
          <li>Subtract: Below-market rent adjustment (if applicable)</li>
          <li>= Seller's Discretionary Earnings (SDE)</li>
        </ol>
      </div>

      <p className={bodyClass}>
        Example: A small marketing agency shows $180,000 net income. The owner pays themselves $120,000 in W-2 wages plus $20,000 in benefits. They run $15,000 of personal expenses through the business (car, phone, travel). The business has $8,000 in interest expense and $12,000 in depreciation. The SDE would be: $180,000 + $120,000 + $20,000 + $15,000 + $8,000 + $12,000 = $355,000.
      </p>

      <h3 className={h3Class}>Calculating EBITDA</h3>

      <p className={bodyClass}>
        EBITDA starts with net income and adds back interest, taxes, depreciation, and amortization, then adjusts for one-time items:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-6">
        <p className="font-mono text-sm mb-2">EBITDA Formula:</p>
        <ol className="font-mono text-sm space-y-1">
          <li>Start with: Net Income</li>
          <li>Add back: Interest expense</li>
          <li>Add back: Tax expense</li>
          <li>Add back: Depreciation</li>
          <li>Add back: Amortization</li>
          <li>Add back: One-time, non-recurring expenses</li>
          <li>Subtract: Market-rate management salary (if not already included)</li>
          <li>Subtract: One-time, non-recurring income</li>
          <li>= EBITDA</li>
        </ol>
      </div>

      <p className={bodyClass}>
        Example: A software company shows $600,000 net income, $50,000 interest expense, $150,000 in taxes, $30,000 depreciation, and $40,000 amortization. They had a one-time legal settlement expense of $80,000. The EBITDA would be: $600,000 + $50,000 + $150,000 + $30,000 + $40,000 + $80,000 = $950,000.
      </p>

      <h2 className={h2Class}>Common Add-Backs for SDE</h2>

      <p className={bodyClass}>
        When calculating SDE, sellers (and smart buyers) identify "add-backs" — expenses that appear on the income statement but won't continue under new ownership, or that represent owner benefits rather than true business costs. Common legitimate add-backs include:
      </p>

      <h3 className={h3Class}>Owner Compensation and Benefits</h3>

      <ul className={ulClass}>
        <li>Owner's salary, wages, and bonuses</li>
        <li>Owner's payroll taxes (employer portion)</li>
        <li>Health insurance for owner and family</li>
        <li>Retirement contributions (401k, SEP IRA, etc.)</li>
        <li>Life and disability insurance premiums</li>
      </ul>

      <h3 className={h3Class}>Personal Expenses</h3>

      <ul className={ulClass}>
        <li>Personal vehicle expenses (or portion above business use)</li>
        <li>Personal cell phone or phone usage</li>
        <li>Personal travel disguised as business travel</li>
        <li>Country club or entertainment memberships</li>
        <li>Personal meals and entertainment</li>
      </ul>

      <h3 className={h3Class}>Non-Recurring Expenses</h3>

      <ul className={ulClass}>
        <li>One-time legal fees or settlements</li>
        <li>Moving or relocation costs</li>
        <li>Start-up costs for new product lines that failed</li>
        <li>Unusual bad debt write-offs</li>
        <li>Costs related to sale of business (broker fees, legal, etc.)</li>
      </ul>

      <h3 className={h3Class}>Above-Market Expenses</h3>

      <ul className={ulClass}>
        <li>Above-market rent (if owner owns the property)</li>
        <li>Above-market salaries to family members</li>
        <li>Excessive charitable contributions</li>
        <li>Professional fees for personal services</li>
      </ul>

      <p className={bodyClass}>
        Be cautious with add-backs. Aggressive sellers sometimes try to add back legitimate business expenses. Your{" "}
        <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
          quality of earnings analysis
        </Link>{" "}
        should verify every add-back and ensure it's truly discretionary or non-recurring.
      </p>

      <h2 className={h2Class}>SDE Multiples vs. EBITDA Multiples</h2>

      <p className={bodyClass}>
        A common source of confusion for new searchers is why EBITDA multiples appear higher than SDE multiples, yet the actual purchase prices are often similar. The answer lies in what's included in each metric.
      </p>

      <h3 className={h3Class}>Typical Multiple Ranges</h3>

      <p className={bodyClass}>
        SDE multiples typically range from 2.0x to 4.0x, with most main street businesses trading between 2.5x and 3.5x SDE. EBITDA multiples typically range from 4.0x to 8.0x, with lower middle market businesses (the search fund sweet spot) trading between 4.5x and 6.5x EBITDA.
      </p>

      <p className={bodyClass}>
        These ranges vary significantly by industry, growth rate, customer concentration, competitive moat, and market conditions. A mature, slow-growth business might trade at the low end, while a high-growth, scalable business with recurring revenue could command premium multiples.
      </p>

      <h3 className={h3Class}>Why the Apparent Difference?</h3>

      <p className={bodyClass}>
        Consider two identical businesses, each generating $1 million in true economic benefit for the owner. Business A is valued on SDE (owner works in business), while Business B is valued on EBITDA (has general manager):
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-6 space-y-4">
        <div>
          <p className="font-semibold mb-2">Business A (SDE Model):</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Net Income: $400,000</li>
            <li>Owner Salary: $600,000</li>
            <li>SDE: $1,000,000</li>
            <li>Multiple: 3.0x</li>
            <li>Purchase Price: $3,000,000</li>
            <li>Buyer's benefit: $1,000,000/year (works in business)</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Business B (EBITDA Model):</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Net Income: $400,000</li>
            <li>General Manager Salary: $150,000 (already deducted)</li>
            <li>EBITDA: $550,000</li>
            <li>Multiple: 5.5x</li>
            <li>Purchase Price: $3,025,000</li>
            <li>Buyer's benefit: $550,000/year (doesn't work in business)</li>
          </ul>
        </div>
      </div>

      <p className={bodyClass}>
        The purchase prices are nearly identical, but the buyer's involvement and economic benefit differ significantly. The SDE buyer gets more cash but works in the business. The EBITDA buyer gets less cash but has passive ownership.
      </p>

      <h2 className={h2Class}>Transitioning from SDE to EBITDA</h2>

      <p className={bodyClass}>
        As businesses grow and mature, they naturally transition from being valued on SDE to being valued on EBITDA. This transition is both a function of size and organizational maturity. Understanding this progression is valuable for searchers who plan to acquire smaller businesses and grow them into institutional-quality assets.
      </p>

      <h3 className={h3Class}>The Transition Zone ($500K - $1.5M Earnings)</h3>

      <p className={bodyClass}>
        Businesses in this range often exist in a gray area where both metrics might be used. A seller might present SDE to maximize the metric, while sophisticated buyers recalculate using EBITDA to better compare across opportunities. In this zone, the key question is: "Has the business truly evolved beyond owner-dependence?"
      </p>

      <p className={bodyClass}>
        Signs a business is ready for EBITDA valuation include: management team can operate the business without daily owner involvement, documented systems and processes, multiple revenue streams or customer segments, scalability that requires professional management, and buyer pool includes institutional investors.
      </p>

      <h3 className={h3Class}>Building Value Through Professionalization</h3>

      <p className={bodyClass}>
        Smart searchers recognize that transforming an SDE business into an EBITDA business can create enormous value. By hiring management, implementing systems, and reducing owner-dependence, you can often expand both the earnings metric AND the multiple applied to it.
      </p>

      <p className={bodyClass}>
        Example: You acquire a business for 3.0x its $800,000 SDE ($2.4M purchase price). You work in it for two years while hiring and training a general manager ($120K/year). After three years, the business now shows $950,000 EBITDA (growth from $800K SDE minus $120K manager salary plus $270K growth). At 5.0x EBITDA, it's worth $4.75M — you've nearly doubled the value.
      </p>

      <h2 className={h2Class}>Which Metric Do Lenders Prefer?</h2>

      <p className={bodyClass}>
        When it comes to financing your acquisition, understanding how lenders view SDE versus EBITDA is critical. Most commercial lenders and SBA lenders base their lending decisions on debt service coverage ratios, which measure whether the business generates enough cash flow to service the proposed debt.
      </p>

      <h3 className={h3Class}>SBA Lending and SDE</h3>

      <p className={bodyClass}>
        For SBA 7(a) loans (the most common financing vehicle for small business acquisitions under $5M), lenders typically use SDE to calculate debt service coverage. They want to see that SDE can cover the proposed debt payments plus a reasonable salary for the new owner.
      </p>

      <p className={bodyClass}>
        Most SBA lenders require a minimum debt service coverage ratio of 1.15x to 1.25x, meaning the business must generate $1.15 to $1.25 of SDE for every $1.00 of debt service. They'll also want to see that after making debt payments, enough remains for the owner to earn a reasonable living.
      </p>

      <h3 className={h3Class}>Commercial Lending and EBITDA</h3>

      <p className={bodyClass}>
        For larger acquisitions financed through commercial loans, traditional senior debt, or{" "}
        <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
          senior credit facilities
        </Link>, lenders focus on EBITDA. They want to ensure the business can service debt after paying all operating expenses, including market-rate management compensation.
      </p>

      <p className={bodyClass}>
        Commercial lenders typically require debt service coverage ratios of 1.20x to 1.50x EBITDA and evaluate leverage ratios (Total Debt / EBITDA) of 2.0x to 4.0x depending on the business quality, industry, and collateral available.
      </p>

      <h3 className={h3Class}>Watch Out for Metric Mixing</h3>

      <p className={bodyClass}>
        A common mistake is valuing a business on SDE but financing it using EBITDA-based debt service coverage ratios (or vice versa). Always ensure your purchase price multiple, financing structure, and lender underwriting all use compatible metrics. If a seller wants 3.5x SDE but your lender calculates debt service coverage using EBITDA, you need to reconcile these differences early in your analysis.
      </p>

      <h2 className={h2Class}>Practical Examples</h2>

      <h3 className={h3Class}>Example 1: Home Services Company (SDE Valuation)</h3>

      <p className={bodyClass}>
        A plumbing company owned and operated by a single plumber generates the following financials:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-6">
        <p className="font-semibold mb-3">Financial Summary:</p>
        <ul className="space-y-1 text-sm font-mono">
          <li>Revenue: $1,200,000</li>
          <li>Net Income: $150,000</li>
          <li>Owner W-2 Salary: $180,000</li>
          <li>Owner Health Insurance: $18,000</li>
          <li>Personal Vehicle Expenses: $12,000</li>
          <li>Interest Expense: $8,000</li>
          <li>Depreciation: $15,000</li>
          <li>One-time Equipment Repair: $10,000</li>
        </ul>
        <p className="font-semibold mt-4 mb-2">SDE Calculation:</p>
        <ul className="space-y-1 text-sm font-mono">
          <li>$150,000 (net income)</li>
          <li>+ $180,000 (owner salary)</li>
          <li>+ $18,000 (benefits)</li>
          <li>+ $12,000 (personal vehicle)</li>
          <li>+ $8,000 (interest)</li>
          <li>+ $15,000 (depreciation)</li>
          <li>+ $10,000 (one-time repair)</li>
          <li>= $393,000 SDE</li>
        </ul>
        <p className="font-semibold mt-4">At 3.0x SDE: $1,179,000 valuation</p>
      </div>

      <p className={bodyClass}>
        This business is appropriately valued on SDE because the owner-plumber is integral to operations. A buyer would step into the owner's role and receive approximately $393,000 in annual benefit (though they'd need to work full-time in the business).
      </p>

      <h3 className={h3Class}>Example 2: Software Company (EBITDA Valuation)</h3>

      <p className={bodyClass}>
        A SaaS company with a management team in place generates the following:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-6">
        <p className="font-semibold mb-3">Financial Summary:</p>
        <ul className="space-y-1 text-sm font-mono">
          <li>Revenue: $5,000,000</li>
          <li>Net Income: $800,000</li>
          <li>CEO Salary (market-rate): $200,000 (already in expenses)</li>
          <li>Interest Expense: $75,000</li>
          <li>Tax Expense: $250,000</li>
          <li>Depreciation: $40,000</li>
          <li>Amortization: $60,000</li>
          <li>One-time Litigation Settlement: $100,000</li>
        </ul>
        <p className="font-semibold mt-4 mb-2">EBITDA Calculation:</p>
        <ul className="space-y-1 text-sm font-mono">
          <li>$800,000 (net income)</li>
          <li>+ $75,000 (interest)</li>
          <li>+ $250,000 (taxes)</li>
          <li>+ $40,000 (depreciation)</li>
          <li>+ $60,000 (amortization)</li>
          <li>+ $100,000 (litigation)</li>
          <li>= $1,325,000 EBITDA</li>
        </ul>
        <p className="font-semibold mt-4">At 5.5x EBITDA: $7,287,500 valuation</p>
      </div>

      <p className={bodyClass}>
        This business is valued on EBITDA because it has professional management and doesn't require owner involvement. The buyer receives $1,325,000 in annual EBITDA but doesn't need to work in the business (management salary is already deducted).
      </p>

      <h3 className={h3Class}>Example 3: The Transition Case</h3>

      <p className={bodyClass}>
        Consider a marketing agency with $850,000 in SDE. The owner works full-time but has built strong systems and a capable team. A searcher could approach this opportunity two ways:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-6">
        <div className="mb-4">
          <p className="font-semibold mb-2">Option A: SDE Purchase (Owner-Operator)</p>
          <ul className="space-y-1 text-sm">
            <li>Purchase at 3.2x SDE = $2,720,000</li>
            <li>Searcher works in business</li>
            <li>Annual benefit: $850,000</li>
            <li>Exit in 5 years at 3.5x SDE ($1M) = $3,500,000</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Option B: EBITDA Purchase (Professional Management)</p>
          <ul className="space-y-1 text-sm">
            <li>Hire GM at $140K, EBITDA = $710K</li>
            <li>Purchase at 5.0x EBITDA = $3,550,000</li>
            <li>Searcher doesn't work in business</li>
            <li>Annual benefit: $710,000 (passive)</li>
            <li>Exit in 5 years at 5.5x EBITDA ($900K) = $4,950,000</li>
          </ul>
        </div>
      </div>

      <p className={bodyClass}>
        Option A offers lower entry price and higher immediate cash flow but requires working in the business. Option B costs more upfront but offers passive ownership and potentially better exit multiples. The right choice depends on your goals, capital availability, and desire for operational involvement.
      </p>

      <h2 className={h2Class}>Key Takeaways</h2>

      <p className={bodyClass}>
        Understanding SDE versus EBITDA is fundamental to evaluating acquisition opportunities accurately. SDE is appropriate for smaller, owner-operated businesses where you'll work in the company and want to understand your total economic benefit. EBITDA is appropriate for larger businesses with professional management where you're buying the operations independent of owner involvement.
      </p>

      <p className={bodyClass}>
        Don't get caught up in comparing multiples across metrics — a 3x SDE business and a 6x EBITDA business might have identical valuations once you account for management costs. Focus instead on the total purchase price, your required involvement, and the true cash flow available after all necessary expenses.
      </p>

      <p className={bodyClass}>
        As you evaluate targets, always recalculate the seller's presented numbers. Verify add-backs, ensure compensation is reasonable, and adjust for any one-time items. Your{" "}
        <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
          quality of earnings analysis
        </Link>{" "}
        should reconcile both SDE and EBITDA to give you a complete picture.
      </p>

      <p className={bodyClass}>
        Finally, remember that businesses can transition from SDE to EBITDA valuations as they grow and professionalize. This transition represents a significant value creation opportunity for searchers who can successfully reduce owner-dependence and build institutional-quality businesses. Master both metrics, and you'll be better equipped to identify, value, and grow your acquisition target.
      </p>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className={h2Class}>Sources</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="https://www.sba.gov/partners/lenders/7a-loan-program/7a-forms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              SBA 7(a) Loan Program Guidelines
            </a>
            {" — Official SBA guidance on loan underwriting and cash flow analysis"}
          </li>
          <li>
            <a
              href="https://www.gsb.stanford.edu/faculty-research/centers-initiatives/ces/research/search-funds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              Stanford Graduate School of Business: Search Fund Research
            </a>
            {" — Academic research on search fund valuations and returns"}
          </li>
          <li>
            <a
              href="https://www.bizbuysell.com/news/valuation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              BizBuySell Insight Reports
            </a>
            {" — Quarterly data on small business valuations and market multiples"}
          </li>
          <li>
            <a
              href="https://www.investopedia.com/terms/e/ebitda.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              Investopedia: EBITDA Definition and Calculation
            </a>
            {" — Comprehensive explanation of EBITDA methodology"}
          </li>
          <li>
            <a
              href="https://www.ibanet.org/document?id=Business-Valuation-Standards"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              International Business Brokers Association: Business Valuation Standards
            </a>
            {" — Industry standards for business appraisal and earnings normalization"}
          </li>
        </ul>
      </div>
    </article>
  );
}