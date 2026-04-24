import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function CCorpVsSCorpLLCArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        C-Corp vs. S-Corp vs. LLC: Choosing the Right Entity for Your Acquisition
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">18 min read</p>

      <div className={bodyClass}>
        <p>
          The entity structure you choose for a business acquisition directly determines how
          much you pay in taxes&mdash;both during ownership and at exit. For a $3M search fund
          deal, the difference between a C-Corp and an S-Corp can mean $200,000 or more in
          total tax variance over a five-year hold. This guide provides specific tax rates,
          worked numerical examples, and a decision framework so you can make the right
          structural choice before signing an LOI. Every scenario is grounded in current
          federal tax law, including the{" "}
          <a href="https://www.irs.gov/newsroom/qualified-business-income-deduction" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">IRS Section 199A provisions</a>,
          the flat 21% corporate rate, and the updated QSBS rules under the 2025 One Big
          Beautiful Bill Act.
        </p>

        {/* ─── SECTION 1 ─── */}
        <h2 className={h2Class}>The Three Entities at a Glance</h2>
        <p>
          Before diving into acquisition-specific math, here is a quick structural overview.
          Each entity type creates different tax treatment, investor compatibility, and
          operational flexibility&mdash;all of which matter when you are buying a company
          rather than starting one from scratch.
        </p>

        <p><strong>C-Corporation.</strong>{" "}
          A separate taxable entity. The corporation itself pays federal income tax at a flat{" "}
          <a href="https://www.irs.gov/publications/p542" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">21% rate (IRS Publication 542)</a>.
          When profits are distributed as dividends or the stock is sold, shareholders pay tax
          again&mdash;qualified dividends and long-term capital gains are taxed at 0%, 15%, or
          20% depending on income, plus a potential 3.8% net investment income tax (NIIT). This
          &ldquo;double taxation&rdquo; is the defining feature. Unlimited shareholders of any type
          (individuals, institutions, foreign entities, trusts) are permitted, and multiple
          classes of stock (common, preferred) can be issued.
        </p>

        <p><strong>S-Corporation.</strong>{" "}
          A pass-through entity: no corporate-level federal tax. All income and losses flow
          directly to shareholders&rsquo; personal returns. Restrictions apply: maximum 100
          shareholders, all must be U.S. citizens or residents, and only one class of stock is
          allowed. The S-Corp election is made via{" "}
          <a href="https://www.irs.gov/forms-pubs/about-form-2553" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">IRS Form 2553</a>.
        </p>

        <p><strong>LLC (Limited Liability Company).</strong>{" "}
          Not a tax classification itself but a state-law entity that can elect to be taxed as
          a disregarded entity (single member), partnership (multi-member), S-Corp, or C-Corp.
          No restrictions on member types or number. The operating agreement can create complex
          distribution waterfalls, preferred returns, and{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">carried interest structures</Link>{" "}
          without needing multiple stock classes.
        </p>

        {/* ─── SECTION 2 ─── */}
        <h2 className={h2Class}>Worked Example: Tax Impact on a $3M Acquisition</h2>
        <p>
          Consider a searcher acquiring a services business for $3M with $600K in annual
          pre-tax earnings (EBITDA). The deal includes $1.8M of{" "}
          <Link href="/learn/goodwill-amortization-tax" className="text-apple-accent hover:underline">goodwill</Link>{" "}
          (amortized straight-line over 15 years per{" "}
          <a href="https://www.law.cornell.edu/uscode/text/26/197" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">IRC Section 197</a>),
          producing $120K per year in amortization deductions. The owner takes a $150K
          reasonable salary. Let&rsquo;s trace the annual tax bill under each entity.
        </p>

        <h3 className={h3Class}>Scenario A: C-Corp</h3>
        <ol className={olClass}>
          <li>Pre-tax earnings: $600,000</li>
          <li>Less owner salary: &ndash;$150,000</li>
          <li>Less goodwill amortization (only available in an{" "}
            <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">asset purchase</Link>{" "}
            or with a{" "}
            <Link href="/learn/338h10-election" className="text-apple-accent hover:underline">338(h)(10) election</Link>): &ndash;$120,000
          </li>
          <li>Taxable corporate income: $330,000</li>
          <li>Federal corporate tax at 21%: <strong>$69,300</strong></li>
          <li>After-tax corporate profit: $260,700</li>
          <li>If distributed as qualified dividends, shareholder tax at 23.8% (20% + 3.8% NIIT): <strong>$62,047</strong></li>
          <li><strong>Total annual tax if profits are distributed: $131,347</strong></li>
          <li>Effective combined rate on distributed earnings: ~39.8%</li>
        </ol>
        <p>
          However, if the C-Corp retains all profits (no dividends), the annual tax is just
          $69,300&mdash;an effective 21% rate. This is why C-Corps that reinvest aggressively
          can be tax-efficient during the hold period.
        </p>

        <h3 className={h3Class}>Scenario B: S-Corp</h3>
        <ol className={olClass}>
          <li>Pre-tax earnings: $600,000</li>
          <li>Less owner salary (subject to FICA at ~15.3% on first $168,600 for 2025, then 2.9% Medicare above): &ndash;$150,000</li>
          <li>Less goodwill amortization: &ndash;$120,000</li>
          <li>Pass-through income to owner: $330,000</li>
          <li>Section 199A QBI deduction (20% of $330,000): &ndash;$66,000</li>
          <li>Taxable pass-through income: $264,000</li>
          <li>Federal income tax at 37% marginal rate: approximately <strong>$82,400</strong></li>
          <li>FICA on salary ($150K): approximately <strong>$17,900</strong></li>
          <li><strong>Total annual tax: ~$100,300</strong></li>
          <li>Effective rate on total earnings: ~22.3%</li>
        </ol>
        <p>
          The S-Corp saves roughly $31,000 per year compared to a fully-distributed C-Corp in
          this scenario. Over a five-year hold, that is $155,000. The{" "}
          <a href="https://www.irs.gov/newsroom/qualified-business-income-deduction" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Section 199A QBI deduction</a>{" "}
          &mdash;made permanent by the One Big Beautiful Bill Act in 2025&mdash;is a major
          driver of that advantage. The deduction allows owners of pass-through entities to
          deduct 20% of qualified business income, subject to income thresholds of $197,300
          (single) or $394,600 (married filing jointly) for the full deduction in 2025.
        </p>

        <h3 className={h3Class}>Scenario C: LLC Taxed as Partnership</h3>
        <ol className={olClass}>
          <li>Pre-tax earnings: $600,000</li>
          <li>Less goodwill amortization: &ndash;$120,000</li>
          <li>Pass-through income: $480,000</li>
          <li>Section 199A QBI deduction (20%): &ndash;$96,000</li>
          <li>Taxable income: $384,000</li>
          <li>Federal income tax at 37% marginal rate: approximately <strong>$118,100</strong></li>
          <li>Self-employment tax: active members may owe SE tax on their distributive share (up to ~15.3% on $168,600 + 2.9% Medicare above), though this depends on the member&rsquo;s role and state law. Estimated: <strong>$28,000&ndash;$42,000</strong></li>
          <li><strong>Total annual tax: ~$146,100&ndash;$160,100</strong></li>
        </ol>
        <p>
          The LLC-as-partnership structure is the most expensive here because there is no
          salary/distribution split to reduce self-employment tax (unlike the S-Corp). However,
          an LLC can elect S-Corp tax treatment to capture that benefit, or elect C-Corp
          treatment to access QSBS. The LLC is the most flexible chassis; the tax election
          determines the economics.
        </p>

        {/* ─── SECTION 3 ─── */}
        <h2 className={h2Class}>The Exit: Where C-Corps Win on QSBS</h2>
        <p>
          The annual tax comparison tells only half the story. At exit, the C-Corp&rsquo;s{" "}
          <Link href="/learn/qsbs-qualified-small-business-stock" className="text-apple-accent hover:underline">QSBS exclusion under Section 1202</Link>{" "}
          can dwarf any savings from pass-through taxation during the hold period.
        </p>

        <h3 className={h3Class}>QSBS Exit Scenario</h3>
        <p>
          Suppose the $3M acquisition grows to a $9M exit value after five years. The
          owner&rsquo;s original basis in the C-Corp stock is $1M (equity invested). The gain
          is $8M.
        </p>
        <ul className={ulClass}>
          <li><strong>Without QSBS:</strong> Capital gains tax at 23.8% (20% + 3.8% NIIT) on $8M = <strong>$1,904,000</strong></li>
          <li><strong>With QSBS (100% exclusion):</strong> Tax on gain = <strong>$0</strong> (up to the greater of $15M or 10x basis for stock acquired after July 4, 2025, per the{" "}
            <a href="https://www.law.cornell.edu/uscode/text/26/1202" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">updated Section 1202</a>)
          </li>
        </ul>
        <p>
          That is $1.9M in tax savings at exit. Even if the S-Corp saved $31K/year during the
          five-year hold ($155K total), the C-Corp with QSBS comes out ahead by roughly
          $1.75M. This is why traditional search funds with institutional investors almost
          always use C-Corp structures.
        </p>

        <h3 className={h3Class}>Updated QSBS Rules (Post-July 2025)</h3>
        <p>
          The One Big Beautiful Bill Act changed key QSBS parameters for stock issued after
          July 4, 2025:
        </p>
        <ul className={ulClass}>
          <li>Gross asset threshold raised from $50M to $75M</li>
          <li>Exclusion cap raised to $15M (from $10M)</li>
          <li>Tiered holding periods: 50% exclusion at 3 years, 75% at 4 years, 100% at 5 years (previously a flat 5-year requirement)</li>
          <li>Stock must be acquired at original issuance from the C-Corp&mdash;secondary market purchases do not qualify</li>
          <li>The corporation must use at least 80% of assets in an active qualified trade or business</li>
        </ul>
        <p>
          For search fund acquisitions, the key requirement is original issuance: the searcher
          must invest equity directly into a C-Corp (or an LLC that has elected C-Corp tax
          treatment) and use that entity to acquire the target. Buying existing stock from a
          seller does not create QSBS eligibility for the buyer.
        </p>

        {/* ─── SECTION 4 ─── */}
        <h2 className={h2Class}>Deal Structure Interactions: Asset vs. Stock Purchase</h2>
        <p>
          The entity type determines what deal structures are available, which in turn drives
          the buyer&rsquo;s ability to get a{" "}
          <Link href="/learn/step-up-in-basis" className="text-apple-accent hover:underline">step-up in basis</Link>{" "}
          on the acquired assets&mdash;a critical factor for post-acquisition depreciation and
          amortization deductions.
        </p>

        <h3 className={h3Class}>Buying a C-Corp Target</h3>
        <ul className={ulClass}>
          <li><strong>Stock purchase (default):</strong> Buyer inherits the target&rsquo;s existing tax basis in its assets. No step-up. No new amortization deductions on goodwill. This is bad for the buyer but good for the seller, who pays capital gains tax only once on the stock sale.</li>
          <li><strong>Asset purchase:</strong> Buyer gets a full step-up in basis. But the target C-Corp recognizes gain on the deemed sale of assets (taxed at 21%), and then shareholders are taxed again when the corporation distributes the proceeds. This double tax hit makes sellers resist asset deals from C-Corps. The{" "}
            <a href="https://blog.acquire.com/organized-as-a-c-corp-beware-the-tax-implications-of-an-asset-purchase-acquisition/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">double tax on C-Corp asset sales</a>{" "}
            can consume 40%+ of the proceeds.
          </li>
          <li><strong>338(h)(10) election:</strong> Not available for C-Corp targets. This election is exclusively for S-Corps and members of consolidated groups.</li>
        </ul>

        <h3 className={h3Class}>Buying an S-Corp Target</h3>
        <ul className={ulClass}>
          <li><strong>Stock purchase with 338(h)(10) election:</strong> The buyer purchases stock but the transaction is treated as an asset purchase for tax purposes. The buyer gets a full{" "}
            <Link href="/learn/step-up-in-basis" className="text-apple-accent hover:underline">step-up in basis</Link>,
            and because S-Corps are pass-through entities, there is generally only one level of
            tax (at the shareholder level). Research from the{" "}
            <a href="https://www.chicagobooth.edu/review/tax-benefits-acquisitions-privately-held-corporations" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Chicago Booth Review</a>{" "}
            estimates the tax benefits of a 338(h)(10) election at 12&ndash;17% of deal value.
            On a $3M deal, that is $360K&ndash;$510K in present value tax savings to the buyer.
          </li>
          <li><strong>Asset purchase:</strong> Achieves the same step-up result, but requires transferring each asset individually (contracts, licenses, permits), which can be operationally complex. A stock purchase with 338(h)(10) is cleaner because the buyer acquires the legal entity.</li>
        </ul>

        <h3 className={h3Class}>Buying an LLC Target</h3>
        <ul className={ulClass}>
          <li><strong>Multi-member LLC (taxed as partnership):</strong> Buying membership interests is treated as buying partnership interests. The buyer can make a Section 754 election to step up the basis of the LLC&rsquo;s assets. This is the pass-through equivalent of 338(h)(10) and is generally straightforward.</li>
          <li><strong>Single-member LLC:</strong> Treated as a disregarded entity. Buying the membership interest is treated as buying the underlying assets for tax purposes&mdash;automatic step-up.</li>
        </ul>

        {/* ─── SECTION 5 ─── */}
        <h2 className={h2Class}>Entity Choice by Acquisition Type</h2>

        <h3 className={h3Class}>Traditional Search Fund: C-Corp (or LLC Electing C-Corp)</h3>
        <p>
          The traditional search fund model&mdash;where 10&ndash;20 institutional investors
          fund a two-year search and then co-invest in the acquisition&mdash;nearly always uses
          a C-Corp or an LLC electing C-Corp tax treatment. The reasons are structural:
        </p>
        <ul className={ulClass}>
          <li><strong>QSBS eligibility:</strong> The potential to exclude $15M+ in capital gains at exit is the single largest tax advantage available in ETA</li>
          <li><strong>Unlimited investor types:</strong> Institutional funds, foreign LPs, trusts, and other entities can all be shareholders. S-Corps restrict shareholders to 100 U.S. individuals.</li>
          <li><strong>Multiple stock classes:</strong> The typical search fund{" "}
            <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">capital stack</Link>{" "}
            requires preferred stock (for investors) and common stock (for the searcher&rsquo;s step-up equity). S-Corps allow only one class of stock.</li>
          <li><strong>Retained earnings efficiency:</strong> During the hold period, the 21% corporate rate on retained earnings is lower than the top individual rate of 37%, allowing more capital for reinvestment and{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build strategies</Link>.</li>
        </ul>
        <p>
          Using an LLC that elects C-Corp tax treatment provides the same tax advantages while
          offering the flexibility of an operating agreement for complex equity waterfalls. See
          our{" "}
          <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">holding company structures guide</Link>{" "}
          for implementation details.
        </p>

        <h3 className={h3Class}>Self-Funded Search: S-Corp or LLC Electing S-Corp</h3>
        <p>
          When there are no outside institutional investors, the S-Corp restrictions (100 U.S.
          shareholders, one stock class) are irrelevant, and the pass-through benefits become
          dominant:
        </p>
        <ul className={ulClass}>
          <li><strong>Single layer of tax:</strong> No double taxation. All income taxed once at the owner&rsquo;s personal rate.</li>
          <li><strong>QBI deduction:</strong> 20% deduction on qualified business income under Section 199A, reducing the effective top rate from 37% to roughly 29.6%.</li>
          <li><strong>Pass-through losses:</strong> First-year operating losses (common after acquisition due to bonus depreciation and amortization) flow through to the owner&rsquo;s personal return and can offset other income, such as a working spouse&rsquo;s salary.</li>
          <li><strong>FICA savings:</strong> The owner takes a reasonable salary (subject to FICA) and receives remaining profits as distributions (not subject to self-employment tax). On $330K in distributions, that saves roughly $9,500/year in Medicare tax alone.</li>
        </ul>
        <p>
          The trade-off is no QSBS at exit. For smaller deals ($1&ndash;3M) where the exit
          gain is modest, the annual tax savings from pass-through treatment often outweigh the
          foregone QSBS exclusion. For deals with high growth potential, the C-Corp QSBS
          advantage at exit is likely worth the higher annual tax during the hold.
        </p>

        <h3 className={h3Class}>The Breakeven Calculation</h3>
        <p>
          At what exit value does the C-Corp&rsquo;s QSBS advantage overtake the S-Corp&rsquo;s
          annual tax savings? Using the worked example above ($31K/year savings for S-Corp over
          five years = $155K):
        </p>
        <ul className={ulClass}>
          <li>QSBS saves 23.8% of exit gain. To recover $155K in annual tax savings, the exit gain needs to exceed $155K / 0.238 = approximately <strong>$651K</strong>.</li>
          <li>If you invest $1M in equity and the exit gain exceeds ~$651K (i.e., exit value above ~$1.65M), the C-Corp is the better overall structure assuming QSBS qualification.</li>
          <li>For most search fund acquisitions&mdash;where 3&ndash;5x equity returns are the target&mdash;the C-Corp with QSBS wins decisively.</li>
        </ul>

        {/* ─── SECTION 6 ─── */}
        <h2 className={h2Class}>State Tax Considerations</h2>
        <p>
          Federal entity taxation is only part of the equation. State-level rules add another
          layer of complexity that can shift the optimal entity choice.
        </p>
        <ul className={ulClass}>
          <li><strong>California:</strong> Imposes a 1.5% franchise tax on S-Corp net income (in addition to the personal income tax on pass-through earnings) and an $800 annual minimum tax on LLCs. California also does not conform to the federal QSBS exclusion&mdash;C-Corp owners in California owe state capital gains tax on the full exit gain even if federal QSBS applies.</li>
          <li><strong>Texas, Florida, Nevada, Wyoming:</strong> No state income tax. The federal analysis above applies without modification. These states are highly favorable for pass-through entities.</li>
          <li><strong>New York:</strong> Imposes a corporate franchise tax on C-Corps and a pass-through entity tax (PTET) election for S-Corps and partnerships, allowing state tax to be paid at the entity level and deducted against federal income&mdash;a workaround for the $40,000 SALT deduction cap.</li>
          <li><strong>SALT cap:</strong> The 2025 OBBBA raised the state and local tax (SALT) deduction cap from $10,000 to $40,000. For high-income owners in high-tax states, electing PTET at the entity level can bypass this cap for pass-through business income.</li>
        </ul>

        {/* ─── SECTION 7 ─── */}
        <h2 className={h2Class}>Conversion and Restructuring After Acquisition</h2>
        <p>
          Sometimes the target company&rsquo;s existing entity structure doesn&rsquo;t match
          what the buyer wants. Conversions are possible but carry tax consequences.
        </p>

        <h3 className={h3Class}>C-Corp to S-Corp</h3>
        <ul className={ulClass}>
          <li>The corporation elects S-Corp status via Form 2553. Must be filed by March 15 of the tax year (or within 75 days of formation).</li>
          <li><strong>Built-in gains (BIG) tax:</strong> If the C-Corp had appreciated assets at the time of conversion, the corporation owes a 21% tax on any built-in gains recognized within five years of conversion. This is a trap that catches many acquirers. On $1M of built-in gains, the BIG tax is $210,000.</li>
          <li>Accumulated earnings &amp; profits (AE&amp;P) from the C-Corp years continue to exist. Distributions from AE&amp;P are taxed as dividends, not as tax-free return of basis.</li>
        </ul>

        <h3 className={h3Class}>S-Corp to C-Corp</h3>
        <ul className={ulClass}>
          <li>Revoke the S election. No immediate tax consequences (unlike the reverse).</li>
          <li>The corporation becomes subject to the 21% corporate rate going forward.</li>
          <li>QSBS eligibility begins from the date of conversion (the five-year holding period clock starts).</li>
        </ul>

        <h3 className={h3Class}>LLC Conversions</h3>
        <ul className={ulClass}>
          <li>An LLC can change its tax election (partnership to S-Corp or C-Corp) by filing the appropriate IRS forms. No need to change the state-law entity.</li>
          <li>This flexibility is a key advantage of LLCs. A searcher can start as a partnership for pass-through benefits, then elect C-Corp status before exit to access QSBS (though the five-year holding period would start at the election date).</li>
        </ul>

        {/* ─── SECTION 8 ─── */}
        <h2 className={h2Class}>Decision Framework: Choosing Your Entity</h2>
        <p>
          Use this checklist to determine the right entity for your acquisition. The answer
          depends on four variables: investor composition, deal size, growth expectations, and
          state of residence.
        </p>

        <p><strong>Choose C-Corp (or LLC electing C-Corp) if:</strong></p>
        <ul className={ulClass}>
          <li>You have or expect institutional investors, foreign investors, or more than one class of equity</li>
          <li>You expect exit gains exceeding $650K, making QSBS the dominant tax consideration</li>
          <li>You plan to retain and reinvest most earnings during the hold period (21% corporate rate vs. 37% personal rate)</li>
          <li>You want the most recognized legal structure for a future sale to a strategic buyer or PE firm</li>
        </ul>

        <p><strong>Choose S-Corp (or LLC electing S-Corp) if:</strong></p>
        <ul className={ulClass}>
          <li>You are self-funding or have only a small number of U.S. individual investors</li>
          <li>You plan to distribute most earnings annually (avoiding double taxation)</li>
          <li>First-year pass-through losses from amortization and depreciation will offset significant personal income</li>
          <li>The acquisition is smaller ($1&ndash;2M) and the exit gain is expected to be modest</li>
          <li>You want the FICA savings from the salary/distribution split</li>
        </ul>

        <p><strong>Choose LLC (with flexible election) if:</strong></p>
        <ul className={ulClass}>
          <li>You want optionality to change tax treatment as the business evolves</li>
          <li>The equity structure requires complex distribution waterfalls, carried interest, or profits interests</li>
          <li>You may start as a pass-through and convert to C-Corp before exit to access QSBS</li>
          <li>You are creating a{" "}
            <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">holding company structure</Link>{" "}
            to hold multiple portfolio companies</li>
        </ul>

        <p>
          For a comprehensive view of structuring decisions beyond entity choice, see our
          guides on{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">search fund legal structure</Link>{" "}
          and{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">tax optimization strategies</Link>.
        </p>

        {/* ─── FAQ ─── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>Can I use an LLC and still qualify for QSBS?</h3>
        <p>
          Yes, but only if the LLC elects to be taxed as a C-Corp by filing{" "}
          <a href="https://www.irs.gov/forms-pubs/about-form-8832" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">IRS Form 8832</a>.
          Once the LLC is treated as a C-Corp for federal tax purposes, it can issue qualified
          small business stock under Section 1202, provided it meets the gross asset threshold
          ($75M for stock issued after July 4, 2025) and the active business test. The
          five-year holding period begins when the stock is issued. An LLC taxed as a
          partnership or S-Corp does not qualify for QSBS.
        </p>

        <h3 className={h3Class}>What is the 338(h)(10) election and when should I use it?</h3>
        <p>
          The{" "}
          <Link href="/learn/338h10-election" className="text-apple-accent hover:underline">Section 338(h)(10) election</Link>{" "}
          allows a buyer who purchases at least 80% of an S-Corp&rsquo;s stock to treat the
          transaction as an asset purchase for tax purposes. The buyer gets a stepped-up basis
          in all of the target&rsquo;s assets (enabling new depreciation and amortization
          deductions), while the stock sale is ignored for tax purposes. Both buyer and seller
          must agree to the election, and it must be filed by the 15th day of the 9th month
          after the acquisition month. Use it whenever you are acquiring an S-Corp and the
          target has significant goodwill or appreciated intangible assets&mdash;the tax
          savings typically range from 12&ndash;17% of deal value, according to{" "}
          <a href="https://www.chicagobooth.edu/review/tax-benefits-acquisitions-privately-held-corporations" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">research from Chicago Booth</a>.
        </p>

        <h3 className={h3Class}>How does the Section 199A QBI deduction work for acquisition owners?</h3>
        <p>
          Owners of pass-through entities (S-Corps, partnerships, and LLCs taxed as either)
          can deduct up to 20% of their qualified business income, reducing the effective top
          federal rate from 37% to approximately 29.6%. The deduction phases out for specified
          service trades or businesses (consulting, law, accounting, health, and others) above
          income thresholds: $197,300 for single filers and $394,600 for married filing jointly
          in 2025. Most search fund target industries (services, manufacturing, distribution)
          are not specified service trades, so the full deduction applies regardless of income.
          The deduction was made permanent by the{" "}
          <a href="https://www.foster.com/larry-s-tax-law/one-big-beautiful-bill-act-part-4-qualified-business-income-deduction-code-section-199a" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">One Big Beautiful Bill Act in 2025</a>.
        </p>

        <h3 className={h3Class}>Can I convert from S-Corp to C-Corp mid-hold to get QSBS at exit?</h3>
        <p>
          You can revoke the S-Corp election and become a C-Corp at any time, and the
          conversion itself does not trigger an immediate tax event. However, the QSBS
          five-year holding period starts at the date of conversion&mdash;not at the original
          acquisition date. If you acquired the business as an S-Corp in 2025 and converted to
          a C-Corp in 2027, you would need to hold until 2032 to achieve the full 100%
          exclusion (or 2030 for the 50% exclusion under the new tiered rules). Plan
          accordingly: if QSBS is likely to matter at exit, start as a C-Corp from day one.
        </p>

        <h3 className={h3Class}>What entity should I use if I am acquiring a business outside the US?</h3>
        <p>
          Entity choice for cross-border acquisitions involves additional complexity. U.S.
          acquirers buying foreign businesses typically use a U.S. C-Corp or LLC as the
          holding entity, with a foreign subsidiary in the target&rsquo;s jurisdiction. QSBS
          applies only to domestic C-Corps, so the foreign operating company itself will not
          qualify. The tax analysis also involves controlled foreign corporation (CFC) rules,
          GILTI provisions, and foreign tax credits. See our guide on{" "}
          <Link href="/learn/capital-gains-tax-by-country" className="text-apple-accent hover:underline">capital gains tax by country</Link>{" "}
          for jurisdiction-specific details.
        </p>
      </div>
    </article>
  );
}
