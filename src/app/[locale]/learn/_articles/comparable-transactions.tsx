import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function ComparableTransactionsArticle() {
  return (
    <article className="mx-auto max-w-3xl">
      <h1 className={h1Class}>Comparable Transaction Analysis for SME Acquisitions</h1>

      <p className={bodyClass}>
        <strong>Read time:</strong> 10 min read
      </p>

      <p className={bodyClass}>
        When you're preparing an offer for a business, one of the most challenging questions you'll face is: "What's a fair price?" While financial models and DCF analyses provide theoretical answers, comparable transaction analysis (comp analysis) grounds your valuation in market reality. By examining what buyers have recently paid for similar businesses, you gain critical insight into current market dynamics, industry-specific multiples, and defensible valuation ranges that resonate with both sellers and investors.
      </p>

      <p className={bodyClass}>
        This guide walks through the complete process of conducting comparable transaction analysis for small and medium-sized enterprise (SME) acquisitions, from sourcing reliable data to presenting your findings in negotiations.
      </p>

      <h2 className={h2Class}>What Is Comparable Transaction Analysis</h2>

      <p className={bodyClass}>
        Comparable transaction analysis, often called "comps" or "precedent transactions," is a market-based valuation method that determines a business's value by analyzing prices paid for similar companies in recent transactions. Unlike discounted cash flow analysis, which projects future performance, or asset-based valuations, which focus on balance sheet values, comp analysis relies on actual market transactions as evidence of value.
      </p>

      <p className={bodyClass}>
        The fundamental premise is straightforward: if Business A sold for 4.5x EBITDA last year, and your target company operates in the same industry with similar characteristics, then 4.5x EBITDA provides a reasonable starting point for valuation. Of course, the devil is in the details - no two businesses are identical, and adjustments are always necessary.
      </p>

      <p className={bodyClass}>
        For search funders and ETA entrepreneurs, comp analysis serves multiple critical functions. It validates your internal valuation models, provides negotiating use with sellers who may have unrealistic price expectations, demonstrates market knowledge to investors, and helps establish guardrails that prevent overpaying in competitive situations.
      </p>

      <p className={bodyClass}>
        The method is particularly valuable in the SME space because it captures factors that are difficult to quantify in traditional models - such as the scarcity premium for businesses with strong customer concentration but defensive market positions, or the discount applied to companies in declining industries even if current cash flows remain strong.
      </p>

      <h2 className={h2Class}>Finding Transaction Data</h2>

      <p className={bodyClass}>
        The biggest challenge in SME comp analysis is data availability. Unlike publicly traded companies where M&A transaction details are disclosed through SEC filings, most small business acquisitions remain private. Deal terms, multiples, and even transaction prices are often closely guarded. However, several databases and resources have emerged to fill this gap.
      </p>

      <h3 className={h3Class}>DealStats (formerly Pratt's Stats)</h3>

      <p className={bodyClass}>
        DealStats, maintained by Business Valuation Resources (BVR), is the gold standard for small business transaction data. The database contains over 40,000 private company transactions, with detailed information on deal size, financial metrics, industry classifications, and purchase price multiples. Critically, DealStats includes transactions in the $1M-$50M range that are typical for search fund acquisitions.
      </p>

      <p className={bodyClass}>
        Subscriptions start around $1,000 annually for limited access, with full access costing several thousand dollars. Many searchers negotiate access through their investors, business schools, or valuation advisors. The platform allows filtering by industry (using SIC and NAICS codes), revenue size, EBITDA range, geography, and transaction date, making it possible to build highly relevant comp sets.
      </p>

      <h3 className={h3Class}>BizComps</h3>

      <p className={bodyClass}>
        BizComps is another thorough database focusing on main street and lower middle market transactions. While it contains fewer details than DealStats for each transaction, it covers a broader range of very small businesses (under $5M in value) and includes data from business brokers nationwide. Access is typically through subscription or per-report purchase, with costs ranging from $100-$500 depending on the scope.
      </p>

      <h3 className={h3Class}>PitchBook and CapIQ</h3>

      <p className={bodyClass}>
        For larger acquisitions or businesses backed by private equity, PitchBook and S&P Capital IQ provide extensive M&A databases. These platforms are expensive (often $20,000+ annually) but are standard tools in investment banking and private equity. If your search targets overlap with lower middle market PE activity, you may find highly relevant comps here. Many searchers access these databases through alumni networks, accelerator programs, or by requesting specific searches from advisors with subscriptions.
      </p>

      <h3 className={h3Class}>Industry Brokers and Intermediaries</h3>

      <p className={bodyClass}>
        Business brokers and M&A intermediaries who specialize in specific industries often publish annual market reports with aggregated transaction data. These reports typically include median multiples, transaction volume trends, and qualitative market commentary. While they lack transaction-level detail, they provide valuable context and can help validate database findings.
      </p>

      <p className={bodyClass}>
        For example, brokers specializing in HVAC companies, dental practices, or manufacturing businesses often share market overviews with prospective sellers and buyers. Requesting these reports - or building relationships with brokers in your target industry - can yield insights not available in formal databases.
      </p>

      <h3 className={h3Class}>Your Own Network</h3>

      <p className={bodyClass}>
        Don't underestimate the value of informal data gathering. Other searchers, investors, and entrepreneurs who've recently completed acquisitions can provide valuable perspective on prevailing multiples and deal structures. Search fund conferences, ETA forums, and accelerator cohorts are excellent venues for these conversations. While anecdotal data shouldn't replace systematic comp analysis, it provides important context and can reveal market nuances that databases miss.
      </p>

      <h2 className={h2Class}>Selecting Comparable Transactions</h2>

      <p className={bodyClass}>
        Once you have access to transaction data, the critical work begins: selecting truly comparable transactions. The quality of your comp analysis depends entirely on the relevance of your comp set. Poorly chosen comparables lead to misleading conclusions and undermine your credibility with sellers and investors.
      </p>

      <h3 className={h3Class}>Industry Similarity</h3>

      <p className={bodyClass}>
        Start with industry classification. Ideally, you want transactions in the same narrow industry segment as your target. If you're acquiring a residential HVAC company, comps should be other residential HVAC companies, not generic "home services" businesses. However, practical reality often requires some flexibility. For many niche industries, you simply won't find enough recent transactions in that exact segment.
      </p>

      <p className={bodyClass}>
        When broadening industry scope, think carefully about underlying business economics. Does the business have similar gross margins? Customer acquisition costs? Capital intensity? Recurring revenue characteristics? A commercial refrigeration company may be a better comp for a residential HVAC business than a pest control company, despite the latter being in the same "home services" category, because commercial refrigeration shares more fundamental business drivers with HVAC.
      </p>

      <h3 className={h3Class}>Size Ranges</h3>

      <p className={bodyClass}>
        Size matters enormously in valuation. A $50M revenue business typically commands higher multiples than a $5M revenue business, even in the same industry, due to factors like scalability, management depth, and buyer universe. When building your comp set, focus on businesses within a reasonable range of your target's size - ideally within 50% to 200% of revenue or EBITDA.
      </p>

      <p className={bodyClass}>
        If your target generates $3M in EBITDA, comps should ideally fall between $1.5M and $6M in EBITDA. Stretching beyond this range introduces size-related valuation premiums or discounts that become difficult to adjust for accurately.
      </p>

      <h3 className={h3Class}>Business Model Alignment</h3>

      <p className={bodyClass}>
        Beyond industry labels, consider business model characteristics. Is revenue recurring or project-based? Is the business asset-light or capital-intensive? Does it serve B2B or B2C customers? Are growth rates comparable? A subscription-based software business should not be compared to a custom software development consultancy, even though both fall under "software services."
      </p>

      <p className={bodyClass}>
        Key attributes to match include revenue model (one-time vs. recurring), customer concentration (fragmented vs. concentrated), contract duration, gross margin profile, and competitive position. The more of these characteristics that align, the more reliable your comp will be.
      </p>

      <h3 className={h3Class}>Transaction Recency</h3>

      <p className={bodyClass}>
        Market conditions change rapidly, particularly during credit cycles. Transactions from 2021's frothy M&A market may not reflect 2024 valuations after interest rate increases and credit tightening. As a general rule, focus on transactions within the past 18-24 months. If you must include older transactions, be prepared to adjust for market timing.
      </p>

      <h3 className={h3Class}>Deal Type Considerations</h3>

      <p className={bodyClass}>
        Finally, consider transaction type. Was it a strategic acquisition by a competitor, a financial buyer (like a search funder or PE firm), a management buyout, or a family succession? Strategic buyers often pay premiums for synergies that won't be available to you as a financial buyer. MBOs sometimes transact at discounts due to information asymmetry and relationship factors. Where possible, prioritize comps that match your buyer profile.
      </p>

      <h2 className={h2Class}>Adjusting for Size, Geography and Timing</h2>

      <p className={bodyClass}>
        Even with carefully selected comparables, adjustments are necessary to account for meaningful differences between the comps and your target company.
      </p>

      <h3 className={h3Class}>Size Adjustments</h3>

      <p className={bodyClass}>
        If your comp set includes businesses outside your ideal size range, you may need to adjust multiples to account for size premiums or discounts. Research suggests that EBITDA multiples in the SME space can vary by 0.5x to 1.5x based solely on company size, with larger businesses commanding premium multiples.
      </p>

      <p className={bodyClass}>
        For example, if comparable transactions for $10M EBITDA companies show a median 6.0x multiple, but your target generates $3M EBITDA, you might apply a size discount of 0.5-1.0x, resulting in a 5.0-5.5x multiple range. These adjustments are inherently subjective, so document your reasoning and consider sensitivity analyses.
      </p>

      <h3 className={h3Class}>Geographic Adjustments</h3>

      <p className={bodyClass}>
        Geographic location affects valuation through multiple channels: local market dynamics, cost of living differences that impact labor costs, regulatory environments, and tax considerations. A business in San Francisco may command different multiples than an identical business in Birmingham, Alabama, due to market size, competition, and operating costs.
      </p>

      <p className={bodyClass}>
        For most SME acquisitions, geographic adjustments are less significant than in commercial real estate but still merit consideration. If your target operates in a particularly attractive or challenged market, and your comps are spread across different geographies, a modest 5-10% adjustment may be warranted.
      </p>

      <h3 className={h3Class}>Timing Adjustments</h3>

      <p className={bodyClass}>
        Market conditions change. If you're forced to rely on transactions from 2-3 years ago, consider whether market multiples have expanded or contracted since then. Industry reports from PitchBook, Axial, or EY Capital Confidence Barometer can provide context on market-wide trends.
      </p>

      <p className={bodyClass}>
        During periods of rising multiples, older comps may understate current values; during corrections, they may overstate them. A simple approach is to track a broad market index (like the S&P SmallCap 600 or Russell 2000) and adjust historical comps proportionally to market movement, though this assumes SME private company valuations move in lockstep with public markets - a questionable assumption.
      </p>

      <h2 className={h2Class}>Building a Comp Table</h2>

      <p className={bodyClass}>
        Once you've identified 5-10 strong comparables and determined necessary adjustments, organize your findings in a clear, thorough comp table. This table becomes a core deliverable for your investment committee, deal team, and eventually, your negotiating materials.
      </p>

      <p className={bodyClass}>
        At minimum, your comp table should include:
      </p>

      <ul className={ulClass}>
        <li><strong>Transaction date:</strong> When the deal closed</li>
        <li><strong>Target company description:</strong> Brief industry and business model description</li>
        <li><strong>Revenue:</strong> Most recent annual revenue (or TTM if available)</li>
        <li><strong>EBITDA:</strong> Most recent annual EBITDA (adjusted to remove owner compensation, one-time expenses, etc.)</li>
        <li><strong>Enterprise value:</strong> Total purchase price plus assumed debt, minus cash</li>
        <li><strong>EV/Revenue multiple:</strong> Enterprise value divided by revenue</li>
        <li><strong>EV/EBITDA multiple:</strong> Enterprise value divided by EBITDA</li>
        <li><strong>Geography:</strong> Where the business operates</li>
        <li><strong>Key characteristics:</strong> Notable features (growth rate, customer concentration, recurring revenue %, etc.)</li>
      </ul>

      <p className={bodyClass}>
        Present comps in order of relevance or chronologically. Calculate median, mean, and range statistics for the key multiples. For a $4M EBITDA target company, your summary might look like:
      </p>

      <p className={bodyClass}>
        <em>EV/EBITDA Multiples: Range 3.8x - 6.2x, Median 4.9x, Mean 5.1x</em>
      </p>

      <p className={bodyClass}>
        Include brief commentary on each comp explaining why it's relevant and any notable differences from your target. This narrative context transforms a spreadsheet into an analytical tool.
      </p>

      <h2 className={h2Class}>Common Pitfalls in Comp Analysis</h2>

      <p className={bodyClass}>
        Comp analysis appears straightforward but contains numerous traps for the unwary. Avoiding these common mistakes will strengthen your analysis and credibility.
      </p>

      <h3 className={h3Class}>Confirmation Bias</h3>

      <p className={bodyClass}>
        The most dangerous pitfall is cherry-picking comps that support a predetermined valuation conclusion. If you've already decided a business is worth 5.5x EBITDA, it's tempting to exclude lower-multiple comps as "not truly comparable" while including higher-multiple ones. Resist this impulse. Let the data speak, and if it contradicts your initial instincts, investigate why rather than manipulating the comp set.
      </p>

      <h3 className={h3Class}>Mismatched Metrics</h3>

      <p className={bodyClass}>
        Different databases define EBITDA differently. Some report seller's discretionary earnings (SDE), which includes owner compensation. Others report adjusted EBITDA after normalizing for owner salary. Still others report unadjusted EBITDA. Mixing these metrics without adjustment produces meaningless results.
      </p>

      <p className={bodyClass}>
        Always verify what "EBITDA" means in each data source and normalize to a consistent definition before calculating multiples. For SME transactions, SDE is often more relevant than EBITDA since it captures total economic benefit available to an owner-operator.
      </p>

      <h3 className={h3Class}>Ignoring Deal Structure</h3>

      <p className={bodyClass}>
        A reported purchase price of $10M could mean very different things depending on deal structure. Was it all cash at close? Or $5M cash, $3M seller note, and $2M earnout? The "headline" enterprise value may not reflect actual risk-adjusted value transferred at close.
      </p>

      <p className={bodyClass}>
        Where possible, understand deal structure for your comps and adjust accordingly. Transactions heavily dependent on earnouts should be risk-adjusted downward. Those with significant seller financing may reflect a premium multiple offset by favorable financing terms.
      </p>

      <h3 className={h3Class}>Overreliance on Multiples Alone</h3>

      <p className={bodyClass}>
        Multiples are shorthand, not gospel. A 5.0x EBITDA multiple means nothing if one business has 40% EBITDA margins while another has 15%. The absolute dollar EBITDA is the same, but the underlying business quality differs dramatically. Always consider the context behind the multiples - growth trajectory, margin profile, competitive position, and risk factors.
      </p>

      <h3 className={h3Class}>Insufficient Sample Size</h3>

      <p className={bodyClass}>
        A comp set of two or three transactions is statistically meaningless. Aim for at least five strong comparables, and preferably 7-10. If you can't find that many, your analysis should acknowledge the limited data and incorporate wider valuation ranges to reflect uncertainty.
      </p>

      <h2 className={h2Class}>Using Comps to Support Your Offer Price</h2>

      <p className={bodyClass}>
        Comp analysis doesn't determine your offer price in isolation - it's one of several valuation methods, alongside DCF analysis, asset-based valuation, and return-on-investment modeling. However, it plays a critical role in supporting and defending your pricing decisions.
      </p>

      <h3 className={h3Class}>Triangulation Approach</h3>

      <p className={bodyClass}>
        The most credible valuation approach uses multiple methods and triangulates toward a range. Your DCF analysis might suggest a value of $18M-$22M. Your comp analysis might indicate $19M-$24M based on median multiples. Your return-on-investment requirements might support up to $21M. The overlap - roughly $19M-$21M - becomes your target range.
      </p>

      <p className={bodyClass}>
        When different methods point to widely different values, investigate why. Perhaps your growth assumptions in the DCF are aggressive compared to the comps. Or maybe the comps include strategic buyers paying premiums you can't justify as a financial buyer. Understanding these tensions improves your analysis.
      </p>

      <h3 className={h3Class}>Negotiating with Sellers</h3>

      <p className={bodyClass}>
        Comp data is particularly powerful in seller negotiations. Many business owners have inflated valuation expectations based on anecdotes, outdated market conditions, or wishful thinking. Presenting well-researched comp data - ideally with anonymized deal details from databases like DealStats - grounds the conversation in market reality.
      </p>

      <p className={bodyClass}>
        When a seller insists their $3M EBITDA business should command 7.0x, showing them five recent transactions of similar businesses that traded at 4.5x-5.5x creates productive friction. They may still disagree, but they must now explain why their business deserves a 40% premium over market.
      </p>

      <h3 className={h3Class}>Investor Communications</h3>

      <p className={bodyClass}>
        Search fund investors expect to see comp analysis in your deal materials. It demonstrates market awareness, supports your valuation assumptions, and provides benchmarks for return expectations. When presenting to your board or investment committee, lead with your comp analysis before diving into financial projections. It establishes credibility and context.
      </p>

      <p className={bodyClass}>
        Be transparent about limitations. If your comp set is thin, say so. If adjustments are subjective, acknowledge it. Investors appreciate intellectual honesty more than false precision.
      </p>

      <h2 className={h2Class}>Comps vs Other Valuation Methods</h2>

      <p className={bodyClass}>
        How does comp analysis stack up against other valuation approaches, and when should you rely more heavily on comps versus alternatives?
      </p>

      <h3 className={h3Class}>Comps vs DCF Analysis</h3>

      <p className={bodyClass}>
        DCF analysis is forward-looking and theoretically rigorous, but it depends entirely on assumptions about future growth, margins, and discount rates. Small changes in assumptions can swing values by 30-40%. Comp analysis, by contrast, reflects actual market transactions but may not capture your specific business's unique characteristics or growth potential.
      </p>

      <p className={bodyClass}>
        Use DCF to model upside scenarios and validate that your acquisition thesis generates acceptable returns. Use comps to ensure you're not paying above-market prices and to establish baseline valuation expectations. If your DCF suggests paying a premium to comps, scrutinize your assumptions carefully - you're betting on outperformance that the market hasn't historically rewarded.
      </p>

      <h3 className={h3Class}>Comps vs Asset-Based Valuation</h3>

      <p className={bodyClass}>
        Asset-based valuation (book value or adjusted net asset value) is most relevant for capital-intensive businesses, distressed situations, or holding companies. For operating businesses with healthy cash flows, asset-based approaches typically understate value because they ignore going-concern cash generation and intangibles like customer relationships and brand.
      </p>

      <p className={bodyClass}>
        Comp analysis better captures operating business value. However, asset-based valuation provides a "floor" - the business is worth at least its liquidation value. If your comp analysis suggests a value below adjusted net asset value, investigate whether the business is actually worth operating or is a liquidation candidate.
      </p>

      <h3 className={h3Class}>Comps vs Industry Rules of Thumb</h3>

      <p className={bodyClass}>
        Many industries have traditional "rules of thumb" - dental practices trade at 60-80% of revenue, landscaping companies at 2.5-3.5x SDE, etc. These rules of thumb are essentially comp analysis distilled into simple heuristics. They're useful as quick sanity checks but lack the precision and context of proper comp analysis.
      </p>

      <p className={bodyClass}>
        Treat rules of thumb as starting points, not conclusions. A landscaping company with 100% commercial contracts and recurring maintenance revenue should command a premium over one dependent on one-time residential projects, even if the rule of thumb suggests the same multiple.
      </p>

      <h2 className={h2Class}>Presenting Comps to Sellers and Investors</h2>

      <p className={bodyClass}>
        How you present your comp analysis matters as much as the analysis itself. Clear, professional presentation builds confidence; sloppy presentation undermines credibility regardless of analytical rigor.
      </p>

      <h3 className={h3Class}>Format and Visualization</h3>

      <p className={bodyClass}>
        Create a clean, easy-to-read comp table using Excel or Google Sheets with consistent formatting. Use conditional formatting to highlight median values or your target's position within the range. Consider adding a scatter plot showing revenue/EBITDA on the X-axis and multiples on the Y-axis, with your target company marked distinctly.
      </p>

      <p className={bodyClass}>
        For presentations, summarize key findings in a single PowerPoint slide with the full comp table in an appendix. Your summary slide should show the comp range, median multiple, and your proposed valuation, clearly explaining where you land within the range and why.
      </p>

      <h3 className={h3Class}>Narrative Context</h3>

      <p className={bodyClass}>
        Numbers alone don't persuade. Accompany your comp table with narrative context explaining your selection criteria, key adjustments, and how the target company compares to the comps. Address obvious outliers - if one comp traded at 8.0x while others cluster at 4.5-5.5x, explain why (Was it a strategic acquisition? Exceptional growth? Data error?).
      </p>

      <h3 className={h3Class}>Handling Objections</h3>

      <p className={bodyClass}>
        Sellers frequently challenge comp analysis: "My business is unique." "Those companies aren't really comparable." "The data is old." Anticipate these objections. Explain your methodology proactively. Acknowledge differences between comps and the target, but explain why the comps still provide valuable benchmarks.
      </p>

      <p className={bodyClass}>
        If the seller believes their business deserves a premium, ask them to quantify and justify it. "Your customer concentration is better than the comps - I agree that's worth something. How much premium do you think that justifies, and why?" This shifts the conversation from emotional assertions to analytical discussion.
      </p>

      <h3 className={h3Class}>Confidentiality Considerations</h3>

      <p className={bodyClass}>
        When sharing comps with sellers or brokers, anonymize transaction details. Describe companies generically: "West Coast HVAC company, $3.2M EBITDA, residential focus" rather than naming names. This protects data sources and prevents sellers from contacting comp companies to verify details or argue about comparability.
      </p>

      <p className={bodyClass}>
        With your own investors and deal team, you can be more specific, but still respect database terms of service regarding data redistribution.
      </p>

      <h2 className={h2Class}>Conclusion</h2>

      <p className={bodyClass}>
        Comparable transaction analysis is both art and science. The science lies in rigorous data collection, systematic comp selection, and methodical multiple calculation. The art lies in judgment - knowing which transactions are truly comparable, what adjustments to make, and how to synthesize comp data with other valuation methods into a coherent investment thesis.
      </p>

      <p className={bodyClass}>
        For search funders and ETA entrepreneurs, strong comp analysis delivers multiple benefits: it grounds your valuation in market reality, provides negotiating use with sellers who have unrealistic expectations, builds credibility with investors, and helps prevent overpaying in competitive situations. The investment in database subscriptions, advisor time, and analytical rigor pays dividends throughout your search and acquisition process.
      </p>

      <p className={bodyClass}>
        As you build comp analyses for target companies, remember that the goal isn't to achieve false precision - you're not calculating the "true" value to the dollar. Rather, you're establishing a defensible valuation range supported by market evidence, understanding where your target fits within that range, and arming yourself with data to manage negotiations confidently.
      </p>

      <p className={bodyClass}>
        Start building your comp analysis toolkit early. Gain access to transaction databases, develop relationships with brokers in your target industries, and practice building comp sets for businesses you're tracking. By the time you're negotiating an LOI, comp analysis should feel like second nature - a core competency that sets you apart from less sophisticated buyers and builds trust with sellers who recognize your professionalism.
      </p>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>How many comparable transactions do I need for a reliable comp analysis?</h3>

      <p className={bodyClass}>
        Aim for at least 5 strong comparables, and preferably 7&ndash;10, to produce statistically meaningful results. A comp set of two or three transactions is insufficient because individual deal circumstances (strategic premiums, distressed sales, unusual deal structures) can skew results. DealStats, the gold standard for private company transaction data, contains over 40,000 transactions and allows filtering by industry, revenue size, EBITDA range, and geography to build relevant comp sets. If you cannot find enough transactions in your exact industry niche, expand to adjacent industries with similar business economics (comparable gross margins, capital intensity, and recurring revenue characteristics) while documenting your reasoning.
      </p>

      <h3 className={h3Class}>How do I account for the difference between SDE and EBITDA multiples in comp analysis?</h3>

      <p className={bodyClass}>
        Different databases define earnings differently &mdash; some report seller&rsquo;s discretionary earnings (SDE), which includes full owner compensation, while others report adjusted EBITDA after normalizing for a market-rate manager salary. Mixing these metrics without adjustment produces meaningless results. SDE multiples are typically 0.5&ndash;1.5x lower than EBITDA multiples because SDE includes the cost of management that EBITDA excludes. Always verify what &ldquo;EBITDA&rdquo; means in each data source, normalize all transactions to a consistent definition, and document your adjustments. For SME transactions under $5M, SDE is often more relevant than EBITDA since it captures total economic benefit available to an owner-operator.
      </p>

      <h3 className={h3Class}>Should I rely on comparable transactions or DCF analysis for valuing an acquisition target?</h3>

      <p className={bodyClass}>
        The most credible valuation approach uses both methods and triangulates toward a range. Comparable transactions ground your valuation in market reality &mdash; what buyers have actually paid for similar businesses &mdash; while <Link href="/learn/dcf-valuation-small-business" className="text-apple-accent hover:underline">DCF analysis</Link> forces you to build explicit assumptions about future growth, margins, and risk. According to EY&rsquo;s private equity research, when both methods converge on similar values (e.g., $8&ndash;9M), confidence is high. When they diverge significantly, investigate why: perhaps your DCF growth assumptions are aggressive compared to market precedent, or perhaps the comps include strategic buyers paying premiums you cannot justify as a financial buyer. Stanford&rsquo;s search fund study recommends presenting both methods to investors for maximum credibility.
      </p>

      <h2 className={h2Class}>Sources</h2>

      <ul className={ulClass}>
        <li>
          <a
            href="https://www.bvresources.com/products/dealstats"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            DealStats Database
          </a>
          {" "} - Premier database of private company transactions with detailed financial data and multiples
        </li>
        <li>
          <a
            href="https://www.bizcomps.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            BizComps
          </a>
          {" "} - Transaction database focusing on main street and lower middle market businesses
        </li>
        <li>
          <a
            href="https://pitchbook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            PitchBook
          </a>
          {" "} - M&A and private equity database with extensive middle market coverage
        </li>
        <li>
          <a
            href="https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Stanford Search Fund Study 2024
          </a>
          {" "} - Market data on search fund acquisition multiples and transaction characteristics
        </li>
        <li>
          <a
            href="https://www.ey.com/en_us/private-equity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            EY Private Equity Research
          </a>
          {" "} - Quarterly market reports tracking private equity valuation trends
        </li>
        <li>
          <a
            href="/learn/business-valuation"
            className="text-apple-accent hover:underline"
          >
            Business Valuation Fundamentals
          </a>
          {" "} - Thorough guide to SME valuation methods and frameworks
        </li>
        <li>
          <a
            href="/learn/letter-of-intent"
            className="text-apple-accent hover:underline"
          >
            Letter of Intent Guide
          </a>
          {" "} - How to structure and negotiate acquisition offers using valuation data
        </li>
      </ul>
    
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related Reading</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">Due Diligence Checklist</Link></li>
          <li><Link href="/learn/deal-structure-optimization" className="text-apple-accent hover:underline">Deal Structure</Link></li>
          <li><Link href="/learn/closing-process" className="text-apple-accent hover:underline">Closing Process</Link></li>
          <li><Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">Working with Advisors</Link></li>
          <li><Link href="/learn/reading-a-cim" className="text-apple-accent hover:underline">Reading a CIM</Link></li>
        </ul>
    </article>
  );
}
