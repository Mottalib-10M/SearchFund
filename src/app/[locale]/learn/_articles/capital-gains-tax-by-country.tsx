import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function CapitalGainsTaxByCountryArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Capital Gains Tax on Business Sales by Country
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">18 min read</p>

      <div className={bodyClass}>
        <p>
          When you sell a business, the capital gains tax you owe can range from
          0% in jurisdictions like Singapore and the UAE to over 40% in
          high-tax European countries. For search fund entrepreneurs and
          acquisition-driven buyers, the difference between structuring an exit
          in one country versus another can translate into hundreds of thousands
          &mdash; or millions &mdash; of dollars in after-tax proceeds. This
          guide breaks down the capital gains tax rates, exemptions, and
          planning opportunities in over 20 countries, organized by region, so
          you can factor tax into your{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
            exit strategy
          </Link>{" "}
          from the day you acquire.
        </p>

        {/* ── SECTION 1: NORTH AMERICA ── */}
        <h2 className={h2Class}>North America: United States &amp; Canada</h2>

        <h3 className={h3Class}>United States</h3>
        <p>
          The US taxes long-term capital gains (assets held longer than one year)
          at federal rates of 0%, 15%, or 20%, depending on taxable income. Most
          business sellers fall into the 20% bracket. On top of that, the 3.8%
          Net Investment Income Tax (NIIT) applies to individuals earning above
          $200,000 ($250,000 for married couples filing jointly), pushing the
          effective federal ceiling to 23.8%, according to the{" "}
          <a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            IRS
          </a>.
        </p>
        <p>
          State-level taxes add another layer. California imposes up to 13.3% on
          capital gains (treated as ordinary income), bringing the combined rate
          to roughly 37%. Texas, Florida, Wyoming, and several other states levy
          no state income tax at all, making entity domicile a meaningful
          variable in exit planning.
        </p>
        <p>
          The single most powerful tax tool for US-based searchers is the{" "}
          <Link href="/learn/qsbs-qualified-small-business-stock" className="text-apple-accent hover:underline">
            Qualified Small Business Stock (QSBS) exclusion under Section 1202
          </Link>. For stock issued on or before July 4, 2025, shareholders who
          hold C-corporation stock for at least five years can exclude up to
          $10 million (or 10x their cost basis, whichever is greater) of gain
          from federal tax entirely. For stock issued after July 4, 2025,
          Congress raised the gross-asset cap from $50 million to $75 million
          and the exclusion ceiling to $15 million, as detailed by{" "}
          <a href="https://www.wsgr.com/en/insights/understanding-section-1202-the-qualified-small-business-stock-exemption.html" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            Wilson Sonsini
          </a>. This is why many ETA practitioners choose a{" "}
          <Link href="/learn/c-corp-vs-s-corp-llc" className="text-apple-accent hover:underline">
            C-Corp structure
          </Link>{" "}
          from the outset &mdash; the double-taxation drawback of C-Corps
          becomes irrelevant when the entire gain is excluded at exit.
        </p>
        <p>
          Other US planning levers include installment sales under Section 453,
          which let sellers spread gain recognition over a multi-year payment
          schedule, and the{" "}
          <Link href="/learn/step-up-in-basis" className="text-apple-accent hover:underline">
            step-up in basis
          </Link>{" "}
          that buyers receive in an asset purchase (a benefit for the acquirer,
          but it shapes negotiation dynamics for both sides). Opportunity Zone
          deferrals can also apply if proceeds are reinvested within 180 days
          into a Qualified Opportunity Fund, though this is rarely practical for
          operating-business exits.
        </p>

        <h3 className={h3Class}>Canada</h3>
        <p>
          Canada does not tax capital gains at a separate rate. Instead, 50% of
          the gain is included in the seller&rsquo;s taxable income and taxed at
          their marginal rate (up to 33% federally plus provincial taxes). The
          combined top marginal rate on capital gains therefore reaches roughly
          27% in most provinces. A proposed increase to a two-thirds (66.7%)
          inclusion rate for gains above $250,000 was deferred to 2026,
          according to{" "}
          <a href="https://kpmg.com/us/en/taxnewsflash/news/2025/02/tnf-canada-tax-increase-capital-gains-deferred-2026.html" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            KPMG
          </a>.
        </p>
        <p>
          The Lifetime Capital Gains Exemption (LCGE) is Canada&rsquo;s
          equivalent of QSBS. For 2025 dispositions, the exemption stands at
          $1,250,000 CAD for Qualified Small Business Corporation (QSBC) shares,
          rising to $1,275,000 in 2026 with indexing, as reported by the{" "}
          <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-25400-capital-gains-deduction.html" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            Canada Revenue Agency
          </a>. To qualify, at least 90% of the corporation&rsquo;s assets must
          be used in active business in Canada at the time of sale, the shares
          must have been held for at least 24 months, and more than 50% of
          assets must have been used in active business throughout that holding
          period. For a married couple each holding QSBC shares, this allows up
          to $2.5 million in tax-free gains &mdash; a powerful incentive to
          structure ownership correctly at acquisition.
        </p>

        {/* ── SECTION 2: WESTERN EUROPE ── */}
        <h2 className={h2Class}>Western Europe: UK, France, Germany &amp; the Netherlands</h2>

        <h3 className={h3Class}>United Kingdom</h3>
        <p>
          The UK taxes capital gains at 18% for basic-rate taxpayers and 24% for
          higher and additional-rate taxpayers (as of the 2024/25 tax year).
          Business Asset Disposal Relief (BADR) &mdash; formerly known as
          Entrepreneurs&rsquo; Relief &mdash; reduces the rate on the first
          &pound;1 million of qualifying business gains. However, the BADR rate
          is rising in stages: 10% through April 5, 2025; 14% from April 6,
          2025 to April 5, 2026; and 18% from April 6, 2026 onward, per{" "}
          <a href="https://www.gov.uk/business-asset-disposal-relief" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            GOV.UK
          </a>. Once the BADR rate reaches 18% in April 2026, basic-rate
          taxpayers will receive zero savings from the relief, since it will
          match the standard lower CGT rate.
        </p>
        <p>
          Corporate sellers benefit from the Substantial Shareholding Exemption
          (SSE), which provides a full exemption on gains from disposing of
          shares in a trading company, provided the seller held at least 10% of
          the shares for a continuous 12-month period. The SSE effectively
          creates a 0% rate for qualifying corporate disposals &mdash; a strong
          reason to consider a{" "}
          <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">
            holding company structure
          </Link>{" "}
          when acquiring in the UK.
        </p>

        <h3 className={h3Class}>France</h3>
        <p>
          France applies a flat tax (Pr&eacute;l&egrave;vement Forfaitaire
          Unique, or PFU) of 30% on capital gains from share sales: 12.8%
          income tax plus 17.2% social contributions, as confirmed by{" "}
          <a href="https://taxsummaries.pwc.com/france/individual/other-taxes" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            PwC Tax Summaries
          </a>. Sellers can alternatively elect progressive income tax rates (up
          to 45%) if the math favors it, though the social levies still apply.
          Starting January 1, 2026, the social contribution component increases
          to 18.6%, pushing the effective flat tax to 31.4%.
        </p>
        <p>
          Several targeted exemptions significantly lower the effective rate.
          Retiring business owners who are aged 60 or older and who sell a
          company worth under &euro;500,000 can claim a full CGT exemption. A
          separate &euro;500,000 fixed allowance applies to PME (small and
          medium enterprise) executives upon retirement, available for
          dispositions through December 31, 2031. For corporate sellers, the
          participation exemption renders 88% of gains from subsidiaries held
          for at least two years tax-free. And the{" "}
          <Link href="/learn/dutreil-pact" className="text-apple-accent hover:underline">
            Dutreil pact
          </Link>{" "}
          provides a 75% exemption for business share transfers made via
          donation or inheritance &mdash; a valuable tool for succession-driven
          acquisitions.
        </p>

        <h3 className={h3Class}>Germany</h3>
        <p>
          Germany does not have a separate capital gains tax rate for
          individuals. Gains from selling shares in a corporation (GmbH or AG)
          where the seller holds at least 1% are taxed under the
          Teileinkunfteverfahren (partial income procedure): only 60% of the
          gain is included in taxable income, with the top marginal rate around
          45% plus a 5.5% solidarity surcharge. The effective maximum rate is
          therefore approximately 28.5%, according to{" "}
          <a href="https://www.rosepartner.de/en/german-law-firm-taxation-of-the-sale-of-the-company.html" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            Rose &amp; Partner
          </a>. Sellers aged 55 or older (or permanently disabled) can claim a
          one-time lifetime exemption of &euro;45,000 under the Freibetrag
          provision.
        </p>
        <p>
          Corporate sellers benefit substantially. Under Germany&rsquo;s
          participation exemption, 95% of capital gains from the sale of
          qualifying subsidiaries are tax-exempt, resulting in an effective rate
          of roughly 1.5%. This makes a GmbH holding structure one of the most
          tax-efficient exit vehicles in Europe. Note that asset sales trigger
          tax at both the corporate and shareholder level, so share deals are
          strongly preferred from the seller&rsquo;s perspective.
        </p>

        <h3 className={h3Class}>Netherlands</h3>
        <p>
          The Netherlands offers one of Europe&rsquo;s most attractive
          participation exemptions: a full 100% exemption on gains from
          disposing of a 5% or greater subsidiary holding, provided certain
          conditions are met. This makes the Netherlands a favored jurisdiction
          for holding companies. Individual shareholders with a &ldquo;substantial
          interest&rdquo; (5% or more) in a company are taxed under Box 2 at
          26.9% on realized gains. For holdings below 5%, gains are imputed
          under Box 3 rather than taxed on realization &mdash; a unique Dutch
          approach that creates planning opportunities for smaller stakes.
        </p>

        {/* ── SECTION 3: SOUTHERN EUROPE ── */}
        <h2 className={h2Class}>Southern Europe: Spain, Italy &amp; Portugal</h2>

        <h3 className={h3Class}>Spain</h3>
        <p>
          Spain taxes individual capital gains at progressive rates within the
          savings tax base (base del ahorro): 19% on the first &euro;6,000,
          21% from &euro;6,000 to &euro;50,000, 23% from &euro;50,000 to
          &euro;200,000, 27% from &euro;200,000 to &euro;300,000, and 30% on
          amounts exceeding &euro;300,000 (effective 2025), per{" "}
          <a href="https://taxsummaries.pwc.com/spain/individual/taxes-on-personal-income" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            PwC Spain
          </a>. These rates are uniform across all autonomous communities, unlike
          general income tax. Non-residents from the EU/EEA pay a flat 19%.
        </p>
        <p>
          Corporate sellers can access a 95% participation exemption on gains
          from subsidiaries where they held at least 5% for 12 months or longer,
          reducing the effective corporate rate to approximately 1.25%.
          Reinvestment relief also allows deferral when proceeds are rolled into
          another qualifying business. Spanish{" "}
          <Link href="/learn/rollover-equity" className="text-apple-accent hover:underline">
            rollover equity
          </Link>{" "}
          structures can be particularly effective when combining a partial exit
          with reinvestment in the acquiring entity.
        </p>

        <h3 className={h3Class}>Italy</h3>
        <p>
          Italy applies a flat 26% tax on individual capital gains from share
          sales. The Partecipation Exemption (PEX) regime, however, exempts 95%
          of gains for qualifying corporate sellers, bringing the effective
          rate down to just 1.2% (5% of the gain taxed at the 24% IRES
          corporate rate), as outlined by{" "}
          <a href="https://taxsummaries.pwc.com/italy/corporate/income-determination" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            PwC Italy
          </a>. PEX requires an uninterrupted 12-month holding period, classification
          as a financial fixed asset, tax residence of the investee in a
          non-blacklisted jurisdiction, and genuine commercial activity.
          Starting in 2026, a new threshold requires the participation to
          represent at least 5% of share capital or voting rights.
        </p>
        <p>
          For individual sellers, the partial exemption (Individual PEX) means
          only 49.72% of the gain is taxable at marginal income tax rates,
          producing an effective rate of roughly 13% for higher earners. The
          gap between 1.2% (corporate PEX) and 26% (individual flat rate)
          illustrates why holding structures and{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            tax optimization planning
          </Link>{" "}
          are essential before an Italian acquisition.
        </p>

        <h3 className={h3Class}>Portugal</h3>
        <p>
          Portuguese tax residents pay a flat 28% rate on capital gains from
          the sale of securities. However, a 2024 reform reduced the top rate
          on long-term capital gains to 19.6% for qualifying dispositions.
          Short-term gains (assets held under 365 days) must be aggregated
          with other income if total income reaches &euro;83,696 or more,
          potentially pushing the effective rate to 48%.
        </p>
        <p>
          The original Non-Habitual Resident (NHR) regime &mdash; which exempted
          many forms of foreign-sourced capital gains &mdash; officially closed
          to new applicants in March 2025. Its replacement, the IFICI regime
          (Tax Incentives for Scientific Research and Innovation), still offers
          exemptions on foreign-sourced capital gains for qualifying taxpayers,
          but with narrower eligibility criteria. For search fund entrepreneurs
          considering Portugal as a personal tax base, the window of opportunity
          has tightened significantly.
        </p>

        {/* ── SECTION 4: LATIN AMERICA ── */}
        <h2 className={h2Class}>Latin America: Brazil, Mexico, Colombia &amp; Chile</h2>

        <h3 className={h3Class}>Brazil</h3>
        <p>
          Brazil taxes capital gains at progressive rates based on the size of
          the gain: 15% on gains up to BRL 5 million, 17.5% from BRL 5 million
          to BRL 10 million, 20% from BRL 10 million to BRL 30 million, and
          22.5% on gains exceeding BRL 30 million, according to{" "}
          <a href="https://taxsummaries.pwc.com/brazil/individual/other-taxes" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            PwC Brazil
          </a>. Non-resident sellers pay a flat 15% regardless of gain size,
          which can make cross-border structuring appealing. Corporate capital
          gains are folded into regular taxable income and taxed at the
          standard corporate rate of 34% (25% corporate income tax plus 9%
          social contribution). Learn more about structuring deals in the
          region in our{" "}
          <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">
            cross-border acquisitions guide
          </Link>.
        </p>

        <h3 className={h3Class}>Mexico</h3>
        <p>
          In Mexico, capital gains from selling shares listed on the Mexican
          stock exchange are taxed at a flat 10%. For unlisted shares and
          private business sales, gains are treated as ordinary income and
          taxed at progressive rates up to 35%. Corporate sellers include
          capital gains in taxable income at the 30% corporate rate. Mexico
          has an extensive network of double tax treaties &mdash; including with
          the US, Canada, and most EU countries &mdash; that can reduce or
          eliminate withholding taxes on cross-border transactions.
        </p>

        <h3 className={h3Class}>Colombia</h3>
        <p>
          Colombia taxes capital gains on assets held for two or more years at
          a flat 15% rate (increased from 10% starting in fiscal year 2023).
          Assets held for fewer than two years generate gains taxed as ordinary
          income at rates up to 39%. The corporate income tax rate sits at 35%,
          with capital gains folded into regular corporate income. For
          acquisition entrepreneurs looking at Colombian targets, the two-year
          holding threshold is an especially important variable when planning
          exit timing.
        </p>

        <h3 className={h3Class}>Chile</h3>
        <p>
          Chile does not have a standalone capital gains tax. Gains are generally
          taxed as ordinary income at the corporate rate of 27%. Publicly traded
          shares held by individuals benefit from a preferential 10% rate. A
          temporary 12.5% rate applies for qualifying SMEs during 2025&ndash;2027,
          as described in the{" "}
          <a href="https://practiceguides.chambers.com/practice-guides/corporate-tax-2025/chile" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            Chambers Corporate Tax Guide for Chile
          </a>. Real estate held by individuals for more than one year (or four
          years for buildings) can qualify for a full exemption on gains up to
          8,000 UF (roughly $280,000 USD).
        </p>

        {/* ── SECTION 5: ASIA-PACIFIC ── */}
        <h2 className={h2Class}>Asia-Pacific: Australia, Singapore &amp; Beyond</h2>

        <h3 className={h3Class}>Australia</h3>
        <p>
          Australia taxes capital gains as part of ordinary income but provides
          a 50% CGT discount for individuals and trusts on assets held for 12
          months or longer. A seller in the top 47% bracket therefore pays an
          effective rate of about 23.5% on discounted gains. Small business
          owners can stack additional concessions on top of the general
          discount, as detailed by the{" "}
          <a href="https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/incentives-and-concessions/small-business-cgt-concessions" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            Australian Taxation Office
          </a>.
        </p>
        <p>
          The four small business CGT concessions &mdash; applied in statutory
          order &mdash; are:
        </p>
        <ol className={olClass}>
          <li>
            <strong>15-year exemption:</strong> Full exemption if the asset was
            held continuously for 15 years and the seller is aged 55 or older
            (or permanently incapacitated).
          </li>
          <li>
            <strong>50% active asset reduction:</strong> An additional 50%
            reduction beyond the general CGT discount, potentially reducing
            the taxable gain to just 25% of the original amount.
          </li>
          <li>
            <strong>Retirement exemption:</strong> Up to $500,000 (lifetime cap)
            of gains exempt; amounts must go into superannuation if the seller
            is under 55.
          </li>
          <li>
            <strong>Small business rollover:</strong> Defers the gain for up to
            two years (or longer if reinvested in a replacement active asset).
          </li>
        </ol>
        <p>
          Eligibility requires either aggregated turnover under AUD 2 million or
          maximum net asset value under AUD 6 million. When all concessions are
          combined, an eligible Australian small business owner can reduce
          their effective CGT rate to 0%.
        </p>

        <h3 className={h3Class}>Singapore</h3>
        <p>
          Singapore imposes no capital gains tax. Profits from selling shares,
          businesses, or other capital assets are generally not taxable, as
          confirmed by the{" "}
          <a href="https://taxsummaries.pwc.com/singapore/individual/other-taxes" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            PwC Singapore Tax Summary
          </a>. The one caveat is that the Inland Revenue Authority of Singapore
          (IRAS) may reclassify repeated transactions as trading activity,
          subjecting them to income tax at rates up to 22% (corporate) or 24%
          (individual). For a one-time business exit, however, Singapore
          remains one of the most tax-efficient jurisdictions globally.
        </p>

        <h3 className={h3Class}>Other Asia-Pacific Markets</h3>
        <p>
          Japan taxes individual capital gains from share sales at a flat 20.315%
          (15.315% national tax plus 5% local tax). South Korea applies 20% on
          gains from unlisted shares (or 25% if gains exceed KRW 300 million).
          India taxes long-term capital gains from listed equity above INR
          125,000 at 12.5% and unlisted share gains at 20% with indexation
          benefits.
        </p>

        {/* ── SECTION 6: TAX-ADVANTAGED JURISDICTIONS ── */}
        <h2 className={h2Class}>Tax-Advantaged Jurisdictions: 0% Capital Gains</h2>
        <p>
          Several jurisdictions levy no capital gains tax at all on business
          sales, making them popular for holding structures and personal
          residency planning:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>United Arab Emirates:</strong> No personal capital gains tax.
            Gains from selling shares in UAE-resident companies are exempt from
            the 9% corporate tax (introduced June 2023) without conditions.
            Free Zone companies classified as Qualifying Free Zone Persons
            (QFZPs) can also benefit from 0% corporate tax on qualifying
            income.
          </li>
          <li>
            <strong>Cayman Islands:</strong> No income tax, capital gains tax,
            or corporate tax of any kind. Widely used for fund structures but
            less common for operating businesses.
          </li>
          <li>
            <strong>Switzerland (individuals):</strong> Private investors
            generally pay zero CGT on share disposals. However, the Swiss tax
            authorities may reclassify a seller as a &ldquo;professional
            securities trader&rdquo; (gewerbsm&auml;ssiger
            Wertschriftenh&auml;ndler) if certain criteria are met &mdash;
            such as high trading volume, leverage, or short holding periods
            &mdash; which triggers income tax at rates above 40%. Corporate
            sellers benefit from a participation deduction on holdings of 10%
            or more.
          </li>
          <li>
            <strong>Hong Kong:</strong> No capital gains tax. Profits from
            selling shares or businesses are not taxable unless the seller is
            deemed to be carrying on a trade of dealing in securities.
          </li>
          <li>
            <strong>New Zealand:</strong> No general CGT, although a
            &ldquo;bright-line test&rdquo; applies to certain property
            transactions and the tax authorities can tax gains on assets
            acquired with the intention of resale.
          </li>
        </ul>
        <p>
          It is worth understanding that simply establishing a holding entity
          in a 0% jurisdiction does not automatically shelter gains. Most
          countries apply Controlled Foreign Corporation (CFC) rules, and{" "}
          <Link href="/learn/double-taxation-treaties" className="text-apple-accent hover:underline">
            double tax treaties
          </Link>{" "}
          typically allocate taxing rights based on where the seller resides
          and where the business operates, not just where the holding company
          sits.
        </p>

        {/* ── SECTION 7: CROSS-BORDER ── */}
        <h2 className={h2Class}>Cross-Border Sales: Treaties, Credits &amp; Withholding</h2>
        <p>
          When the buyer, seller, and business are in different countries,
          capital gains taxation becomes multi-layered. Three mechanisms prevent
          (or mitigate) double taxation:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Double tax treaties (DTTs):</strong> Most treaties follow the
            OECD Model Convention, which generally grants exclusive taxing
            rights on capital gains from shares to the seller&rsquo;s country of
            residence &mdash; unless the shares derive more than 50% of their
            value from real property in the source country. The US has treaties
            with over 65 countries; the EU&rsquo;s parent-subsidiary directive
            eliminates withholding on dividends and certain gains between
            member states.
          </li>
          <li>
            <strong>Foreign tax credits:</strong> If a gain is taxed in the
            source country, the seller&rsquo;s home country typically grants a
            credit for the foreign tax paid, up to the domestic tax that would
            be owed on the same income. In the US, unused foreign tax credits
            can be carried forward for 10 years or back one year.
          </li>
          <li>
            <strong>Withholding taxes:</strong> Some countries impose withholding
            on cross-border share sales. Canada withholds 25% on gains from
            &ldquo;taxable Canadian property&rdquo; sold by non-residents
            (reducible by treaty). India withholds 10&ndash;20% on share
            transfers by non-residents. Treaty shopping &mdash; routing a
            transaction through a treaty-favorable jurisdiction &mdash; is
            increasingly scrutinized under BEPS (Base Erosion and Profit
            Shifting) rules.
          </li>
        </ol>
        <p>
          Our{" "}
          <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">
            cross-border acquisitions
          </Link>{" "}
          guide covers the operational and legal dimensions, while the{" "}
          <Link href="/learn/goodwill-amortization-tax" className="text-apple-accent hover:underline">
            goodwill amortization and tax
          </Link>{" "}
          article explains how purchase price allocation affects the
          buyer&rsquo;s tax position in international deals.
        </p>

        {/* ── SECTION 8: PLANNING IMPLICATIONS ── */}
        <h2 className={h2Class}>Strategic Planning: Structure Drives Tax Outcomes</h2>
        <p>
          The capital gains tax rate you pay at exit is largely determined by
          decisions you make at acquisition. Three areas demand early attention:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Entity choice:</strong> In the US, choosing a C-Corp
            unlocks QSBS. In Germany, acquiring through a GmbH holding company
            activates the 95% participation exemption. In the UK, a corporate
            holding structure enables the SSE. The wrong entity on day one can
            cost you an irrecoverable tax advantage at exit.
          </li>
          <li>
            <strong>Holding period discipline:</strong> Nearly every favorable
            regime requires a minimum holding period &mdash; 5 years for QSBS,
            2 years for the French participation exemption, 12 months for
            Italy&rsquo;s PEX and Spain&rsquo;s corporate exemption, 24 months
            for Canada&rsquo;s LCGE. Rushed exits forfeit these benefits
            entirely.
          </li>
          <li>
            <strong>Residency and domicile:</strong> Personal tax residency
            determines which country has primary taxing rights over your
            capital gains. Relocating before a sale can alter the tax equation,
            but most countries impose exit taxes or deem-disposition rules to
            capture unrealized gains at the time of departure.
          </li>
        </ul>
        <p>
          Share sales are almost universally preferred over asset sales from the
          seller&rsquo;s perspective, since they allow access to participation
          exemptions and avoid triggering both corporate and personal tax. From
          the buyer&rsquo;s perspective, asset purchases offer a{" "}
          <Link href="/learn/step-up-in-basis" className="text-apple-accent hover:underline">
            stepped-up tax basis
          </Link>{" "}
          and the ability to amortize{" "}
          <Link href="/learn/goodwill-amortization-tax" className="text-apple-accent hover:underline">
            goodwill
          </Link>{" "}
          &mdash; creating a natural tension in negotiations that the purchase
          price must bridge.
        </p>

        {/* ── FAQ ── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          Which countries have no capital gains tax on business sales?
        </h3>
        <p>
          Singapore, Hong Kong, the UAE (for individuals), the Cayman Islands,
          and New Zealand impose no general capital gains tax. Switzerland
          exempts private individuals from CGT on share disposals as long as
          they are not classified as professional traders. However, residency
          and CFC rules in your home country may still trigger tax liability
          even when selling from a zero-CGT jurisdiction.
        </p>

        <h3 className={h3Class}>
          How does the US QSBS exclusion work for search fund exits?
        </h3>
        <p>
          Under{" "}
          <Link href="/learn/qsbs-qualified-small-business-stock" className="text-apple-accent hover:underline">
            Section 1202
          </Link>, a search fund entrepreneur who acquires through a C-Corp with
          gross assets under $50 million (or $75 million for stock issued after
          July 4, 2025), holds the stock for five years, and meets the active
          business test can exclude up to $10 million (or $15 million for
          post-July 2025 issuances) of gain from federal income tax. At a
          23.8% combined federal rate, that exclusion is worth up to $2.38
          million (or $3.57 million) in tax savings on a single exit. The
          corporation must use at least 80% of its assets in a qualified active
          trade or business, and certain industries &mdash; financial services,
          hospitality, farming &mdash; are excluded.
        </p>

        <h3 className={h3Class}>
          Does a double tax treaty eliminate capital gains tax on a cross-border sale?
        </h3>
        <p>
          Not always. Treaties typically allocate taxing rights rather than
          eliminate tax. Under most OECD-model treaties, the seller&rsquo;s
          country of residence has exclusive taxing rights on gains from share
          sales, meaning the source country cannot tax the gain. But if the
          shares derive more than 50% of their value from real property in the
          source country, both countries may tax the gain, with credits to
          prevent full double taxation. Treaty benefits also require substance
          &mdash; holding companies with no real economic activity may be denied
          treaty access under the Principal Purpose Test (PPT) or Limitation
          on Benefits (LOB) provisions.
        </p>

        <h3 className={h3Class}>
          What is a participation exemption and which countries offer one?
        </h3>
        <p>
          A participation exemption allows a corporate seller to exclude most or
          all capital gains from the sale of a subsidiary. The Netherlands
          offers a 100% exemption, Germany and Italy exempt 95% of gains,
          France exempts 88%, and Spain exempts 95% for qualifying holdings.
          Requirements typically include a minimum ownership threshold (5&ndash;10%),
          a holding period (12&ndash;24 months), and an active business test.
          These exemptions are one of the primary reasons search fund
          operators in Europe use holding company structures for their
          acquisitions.
        </p>

        <h3 className={h3Class}>
          Should I structure my acquisition for tax efficiency at entry or focus on operations?
        </h3>
        <p>
          Both. The entity structure and jurisdiction you choose at acquisition
          set the ceiling on your tax efficiency at exit &mdash; and these
          decisions are often irreversible or prohibitively expensive to
          change later. A C-Corp election in the US, a holding GmbH in
          Germany, or proper QSBC share structuring in Canada should be locked
          in before closing. Operating improvements drive enterprise value;
          structure determines how much of that value you keep after tax. For
          a framework that ties both together, see our{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            tax optimization
          </Link>{" "}
          and{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
            exit strategies
          </Link>{" "}
          guides.
        </p>
      </div>
    </article>
  );
}
