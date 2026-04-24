import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function ETABrazilArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        ETA in Brazil: Acquiring SMEs in Latin America&rsquo;s $2 Trillion Economy
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Brazil has 20 million small and medium enterprises, a GDP near $2.1 trillion,
          and a founder generation exiting without successors&mdash;58% of family businesses
          lack a succession plan according to the PwC Family Business Survey. Acquisition
          multiples sit at 3&ndash;5x EBITDA, one to two turns below US and European
          comparables. For search fund entrepreneurs who can tolerate tax complexity,
          currency volatility, and dense labor regulation, Brazil offers the highest-volume
          deal pipeline in Latin America at prices that make strong equity returns possible
          even without aggressive financial engineering.
        </p>
        <p>
          This article covers the structural reasons Brazil works for ETA, where deals
          cluster by industry and geography, how legal and tax structures shape acquisition
          mechanics, what financing looks like when the base interest rate runs 10&ndash;14%,
          and the concrete risks that separate successful Brazilian acquisitions from
          expensive lessons.
        </p>

        {/* ───── SECTION 1 ───── */}
        <h2 className={h2Class}>Why Brazil&rsquo;s SME Market Fits the ETA Model</h2>
        <p>
          Brazil&rsquo;s 20 million SMEs represent 99% of all registered businesses and
          employ roughly 54% of the formal workforce, according to SEBRAE (Servi&ccedil;o
          Brasileiro de Apoio &agrave;s Micro e Pequenas Empresas). The sheer scale dwarfs
          every other Latin American market: Mexico has approximately 4.9 million SMEs,
          Colombia 1.6 million, and Chile under 1 million. For a searcher, volume matters
          because it means more companies in any given niche, more sellers willing to
          transact, and less competition per deal.
        </p>
        <p>
          The succession crisis magnifies this advantage. Brazil&rsquo;s entrepreneurial
          boom of the 1970s and 1980s produced millions of owner-operators now in their
          60s and 70s. Their children increasingly prefer professional careers in
          S&atilde;o Paulo or abroad over running a regional distribution business or
          dental clinic chain. The PwC survey found that only 12% of Brazilian family
          firms have a robust, documented succession plan&mdash;far below the global
          average of 30%. This mismatch between aging founders and absent heirs creates
          exactly the conditions where an outsider with capital, operational ambition,
          and a structured acquisition process can step in.
        </p>
        <p>
          Unlike the US, where independent sponsors, fundless sponsors, and lower
          middle-market PE firms create intense competition for any business above $1M
          EBITDA, the Brazilian buy-side remains fragmented. Private equity in Brazil
          focuses overwhelmingly on growth-stage tech and large-cap assets.
          The IESE 2024 International Search Fund Study counted fewer than 50 completed
          search fund acquisitions across all of Latin America&mdash;a fraction of the
          US total. That competitive gap means Brazilian sellers frequently receive only
          one or two serious offers, giving searchers room to negotiate favorable
          structures. For context on how these returns compare globally, see our analysis
          of{" "}
          <Link href="/learn/international-vs-us-returns" className="text-apple-accent hover:underline">
            international versus US search fund returns
          </Link>.
        </p>

        {/* ───── SECTION 2 ───── */}
        <h2 className={h2Class}>Target Industries and Where Deals Happen</h2>
        <p>
          Brazilian ETA deal flow concentrates in sectors with recurring or
          semi-recurring revenue, fragmented ownership, and limited PE interest.
          The strongest verticals:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Healthcare services.</strong> Brazil&rsquo;s public SUS
            (Sistema &Uacute;nico de Sa&uacute;de) system is overwhelmed: 49 million
            Brazilians hold private health insurance (ANS, 2023), and private clinics,
            dental chains, and diagnostic labs are expanding to fill the gap. Dental
            clinic chains in mid-sized cities regularly trade at 3&ndash;4x EBITDA with
            strong cash flow. Multi-site roll-up potential is significant.
          </li>
          <li>
            <strong>Education.</strong> Brazil has one of the largest private education
            markets globally. Language schools (English instruction is a $3 billion+
            industry), K&ndash;12 private schools, and professional certification
            programs offer subscription-like tuition revenue. Enrollment data is
            publicly available through INEP, making pre-acquisition diligence
            straightforward.
          </li>
          <li>
            <strong>Agribusiness services.</strong> Brazil is the world&rsquo;s largest
            exporter of soybeans, coffee, sugar, and beef. Behind those exports sits a
            massive services layer: agricultural input distributors, equipment
            dealerships, precision agriculture technology providers, and veterinary
            chains. These B2B businesses have defensible regional positions and
            EBITDA margins often exceeding 15%.
          </li>
          <li>
            <strong>IT services and managed service providers.</strong> S&atilde;o
            Paulo and Florian&oacute;polis (Brazil&rsquo;s tech hub in Santa Catarina)
            have produced hundreds of MSPs, ERP implementation firms, and
            cybersecurity consultancies. Many were founded in the early 2000s by
            technical entrepreneurs who now want an exit. Recurring managed-services
            contracts provide revenue visibility that supports higher multiples
            (4&ndash;5x EBITDA).
          </li>
          <li>
            <strong>Franchises.</strong> Brazil has the 4th largest franchise market
            globally, with over 3,000 franchise brands and 184,000 franchise units
            (ABF, 2023). Multi-unit franchise acquisitions&mdash;buying 5&ndash;15
            units of a proven brand&mdash;are an established ETA path with lower
            operational risk. Food, beauty, and fitness are the most active categories.
          </li>
          <li>
            <strong>Financial services.</strong> Insurance brokerages, independent
            accounting firms, and payroll processors generate high-margin recurring
            revenue. Regulatory barriers limit new entry, protecting incumbent margins.
          </li>
        </ul>
        <p>
          Geographically, S&atilde;o Paulo state alone accounts for roughly 32% of
          Brazil&rsquo;s GDP and has the densest concentration of acquisition targets.
          But secondary markets&mdash;Minas Gerais, Paran&aacute;, Rio Grande do
          Sul, and the interior of S&atilde;o Paulo state&mdash;often yield better
          multiples because fewer buyers operate there. A searcher based in S&atilde;o
          Paulo can efficiently cover deals within a 500 km radius while accessing
          most of the country&rsquo;s professional services infrastructure. For more on
          building a deal pipeline, see our guide on{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing strategies
          </Link>.
        </p>

        {/* ───── SECTION 3 ───── */}
        <h2 className={h2Class}>Legal Structure: Ltda, S/A, and Acquisition Mechanics</h2>
        <p>
          Understanding Brazilian corporate structures is non-negotiable before
          signing a term sheet. The two entities you will encounter in nearly every
          deal:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Sociedade Limitada (Ltda).</strong> The dominant SME structure,
            analogous to a US LLC. Since 2019, a single-partner Ltda is permitted
            (replacing the older EIRELI form). Partners hold quotas (cotas) rather
            than shares. Limited liability applies, though piercing the corporate veil
            (desconsidera&ccedil;&atilde;o da personalidade jur&iacute;dica) is more
            common in Brazil than in the US, particularly in labor and consumer claims.
          </li>
          <li>
            <strong>Sociedade An&ocirc;nima (S/A).</strong> The corporation structure
            used by larger businesses. Requires a minimum of two shareholders, a board
            structure, and audited financials once revenues exceed certain thresholds.
            More complex governance but offers greater flexibility for equity
            incentive plans and eventual exits.
          </li>
        </ul>
        <p>
          Most ETA buyers create a new Ltda or S/A holding company (holdco) that
          acquires 100% of the target&rsquo;s quotas or shares. This clean structure
          separates personal and operating-company liabilities, simplifies investor
          equity, and facilitates future add-on acquisitions. For a deeper comparison
          of holding structures across jurisdictions, see{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
            search fund legal structures
          </Link>.
        </p>

        <h3 className={h3Class}>Share Deals vs. Asset Deals (Trespasse)</h3>
        <p>
          Share deals dominate Brazilian ETA&mdash;roughly 80&ndash;90% of SME
          acquisitions. The buyer purchases all quotas or shares of the target entity,
          inheriting contracts, employees, and liabilities in one transaction. The
          advantage is simplicity: customer and vendor contracts transfer automatically,
          employees remain under existing employment agreements, and tax attributes
          (including goodwill amortization potential) carry over.
        </p>
        <p>
          The risk is successor liability. Brazilian law holds buyers responsible for
          pre-closing tax debts, labor claims, and consumer liabilities&mdash;even in
          some asset-deal structures. The Consolidation of Labor Laws (CLT) and
          Brazilian Tax Code (C&oacute;digo Tribut&aacute;rio Nacional, Art. 133)
          both establish successor liability rules that can follow the business
          regardless of deal structure. This makes{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            thorough due diligence
          </Link>{" "}
          on labor contingencies, tax debts, and pending litigation not optional but
          existential. Budget 10&ndash;20% of the deal value for an escrow or
          holdback to cover undisclosed liabilities.
        </p>

        {/* ───── SECTION 4 ───── */}
        <h2 className={h2Class}>Valuation and Deal Economics</h2>
        <p>
          Brazilian SMEs in the R$5&ndash;50 million revenue range typically sell at
          3&ndash;5x EBITDA. The discount relative to US multiples (5&ndash;8x for
          comparable businesses) reflects three structural factors: higher country risk
          (Brazil&rsquo;s sovereign credit rating sits at BB, two notches below
          investment grade), fewer organized buyers competing for deals, and the
          difficulty of repatriating returns through a volatile currency. For
          international searchers, this valuation gap is the core opportunity: if you
          can manage Brazil-specific risks, the entry price builds in a margin of safety
          that US deals no longer offer.
        </p>
        <p>
          Key valuation mechanics to understand:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Goodwill amortization.</strong> Brazilian tax law allows acquirers
            to amortize goodwill (more specifically, the intangible asset premium paid
            above book value) for tax purposes over five years. This can reduce the
            effective corporate tax rate by 5&ndash;10 percentage points in the early
            post-acquisition years, materially improving cash-on-cash returns.
          </li>
          <li>
            <strong>Earnouts and seller notes.</strong> Seller financing represents
            20&ndash;40% of total deal value in most Brazilian ETA transactions,
            primarily because commercial bank acquisition debt is prohibitively
            expensive. Structuring 24&ndash;36 month earnouts tied to EBITDA milestones
            protects the buyer while giving the seller upside if the business performs.
          </li>
          <li>
            <strong>Working capital adjustments.</strong> Brazilian SMEs often have
            volatile working capital due to extended payment terms (60&ndash;90 day
            receivables are standard). Negotiate a working capital peg at closing
            and a true-up mechanism within 90 days.
          </li>
        </ul>
        <p>
          For frameworks on pricing SMEs across markets, see our{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            business valuation guide
          </Link>.
        </p>

        {/* ───── SECTION 5 ───── */}
        <h2 className={h2Class}>The Tax Labyrinth: Simples Nacional, Lucro Presumido, and Lucro Real</h2>
        <p>
          Brazil&rsquo;s tax system is the single most frequently cited obstacle
          for foreign acquirers, and for good reason: the World Bank&rsquo;s
          Doing Business report estimated that Brazilian companies spend an average
          of 1,501 hours per year on tax compliance, versus 175 hours in OECD
          countries. There are roughly 5,000 distinct tax obligations across federal,
          state, and municipal levels. Getting the tax regime right at acquisition
          can swing annual cash flow by 10&ndash;15%.
        </p>
        <p>
          The three regimes any buyer must understand:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Simples Nacional.</strong> Available to businesses with annual
            revenue below R$4.8 million (~$960K). Consolidates six federal taxes plus
            ICMS (state) and ISS (municipal) into a single monthly payment. Effective
            rates range from 4% to 33% depending on the activity type and revenue tier.
            If your target qualifies, keeping it on Simples post-acquisition is almost
            always optimal&mdash;but growth beyond the R$4.8M cap forces a regime
            change, which must be modeled in your{" "}
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
              valuation
            </Link>.
          </li>
          <li>
            <strong>Lucro Presumido.</strong> Available for businesses with revenue up to
            R$78 million. The government &quot;presumes&quot; a profit margin (8% for commerce,
            32% for services) and taxes that presumed profit at the standard 34%
            corporate rate (15% IRPJ + 10% surtax + 9% CSLL). Simpler than Lucro Real,
            but penalizes low-margin businesses because you pay tax on presumed
            profit regardless of actual profitability.
          </li>
          <li>
            <strong>Lucro Real.</strong> Mandatory for businesses with revenue above
            R$78 million and optional for any size. Tax is assessed on actual net profit
            at 34%. Allows deduction of all legitimate business expenses, including
            goodwill amortization. More complex accounting requirements, but usually
            the correct choice for acquired businesses undergoing operational changes
            that may temporarily compress margins.
          </li>
        </ol>
        <p>
          Beyond income tax, buyers must account for PIS/COFINS (federal social
          contributions on revenue, 3.65% cumulative or 9.25% non-cumulative),
          ICMS (state VAT equivalent, rates vary from 7&ndash;25% by state and
          product), and ISS (municipal services tax, 2&ndash;5%). Brazil&rsquo;s
          ongoing tax reform (EC 132/2023) will eventually replace PIS, COFINS,
          ICMS, and ISS with a dual VAT system (IBS + CBS), but full implementation
          is not expected before 2033. In the meantime, hire a Brazilian tax advisor
          before closing any deal&mdash;the cost of getting this wrong is measured in
          multiples of their fee.
        </p>

        {/* ───── SECTION 6 ───── */}
        <h2 className={h2Class}>Financing an Acquisition When Interest Rates Run 10&ndash;14%</h2>
        <p>
          The Selic (Brazil&rsquo;s base interest rate) has fluctuated between
          10.5% and 13.75% since 2022. Commercial bank acquisition debt prices at
          CDI (which tracks Selic) plus 3&ndash;8%, meaning all-in borrowing costs
          of 13&ndash;22%. At those rates, the leveraged buyout math that works in
          the US simply does not translate. Brazilian ETA capital structures are
          consequently equity-heavy, with debt rarely exceeding 30&ndash;40% of
          total deal value.
        </p>
        <p>
          The main financing sources:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Search fund investor equity.</strong> The Brazilian search fund
            investor base has grown meaningfully since 2015, anchored by alumni networks
            of Insper (S&atilde;o Paulo&rsquo;s top business school) and FGV
            (Funda&ccedil;&atilde;o Getulio Vargas). The IESE LatAm Search Fund Study
            documented over 30 active investors providing capital to Brazilian searchers.
            International investors also participate, typically denominating commitments
            in USD and accepting BRL conversion risk at closing. For more on building
            an investor base, see{" "}
            <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
              how to find search fund investors
            </Link>.
          </li>
          <li>
            <strong>BNDES.</strong> Brazil&rsquo;s national development bank offers
            subsidized acquisition financing through programs like BNDES
            Autom&aacute;tico and BNDES Finame. Rates are typically TLP (Taxa de Longo
            Prazo, currently near 6%) plus a spread&mdash;significantly below
            commercial bank rates. Qualification requires the target to meet employment
            and revenue thresholds, and approval timelines run 60&ndash;120 days.
          </li>
          <li>
            <strong>Seller financing.</strong> The most common debt component in
            Brazilian ETA deals, typically 20&ndash;40% of total deal value structured
            as promissory notes (notas promiss&oacute;rias) with 24&ndash;36 month
            amortization. Sellers accept below-market rates (often IPCA + 4&ndash;6%)
            because it allows them to close the transaction.
          </li>
          <li>
            <strong>SEBRAE programs.</strong> SEBRAE offers mentorship, subsidized
            consulting, and some financial assistance for business succession.
            While not a direct capital source, SEBRAE programs can offset
            post-acquisition operational costs.
          </li>
        </ul>
        <p>
          The{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            self-funded versus traditional search fund
          </Link>{" "}
          question takes on a different character in Brazil. High interest rates
          make the traditional model&mdash;where investors fund the search phase
          and then co-invest in the acquisition&mdash;more attractive because it
          reduces reliance on expensive local debt. Self-funded searchers need either
          substantial personal capital or strong relationships with angel investors
          willing to write equity checks on deal-specific terms.
        </p>

        {/* ───── SECTION 7 ───── */}
        <h2 className={h2Class}>Labor Law, the CLT, and Post-Acquisition Workforce Management</h2>
        <p>
          Brazil&rsquo;s Consolida&ccedil;&atilde;o das Leis do Trabalho (CLT),
          enacted in 1943 and amended periodically since, is one of the most
          employee-protective labor frameworks in the world. Every ETA buyer must
          internalize its implications before acquiring a Brazilian business.
        </p>
        <p>
          Key CLT provisions that affect deal economics:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>13th salary (d&eacute;cimo terceiro).</strong> Every employee
            receives a mandatory 13th monthly salary, paid in two installments
            (November and December). This effectively adds 8.3% to annual payroll costs.
          </li>
          <li>
            <strong>FGTS (Fundo de Garantia).</strong> Employers deposit 8% of each
            employee&rsquo;s monthly salary into a government-administered severance
            fund. Upon termination without cause, the employer must pay a 40% penalty
            on the accumulated FGTS balance.
          </li>
          <li>
            <strong>Vacation.</strong> 30 calendar days of paid vacation per year,
            plus a &quot;vacation bonus&quot; (abono pecuni&aacute;rio) equal to one-third
            of the monthly salary.
          </li>
          <li>
            <strong>Termination costs.</strong> Dismissing an employee without cause
            requires 30 days&rsquo; advance notice (plus 3 days per year of service,
            up to 90 days), payment of accrued vacation and 13th salary, and the 40%
            FGTS penalty. Total termination cost can reach 3&ndash;6 months&rsquo;
            salary per employee.
          </li>
          <li>
            <strong>Labor court claims (Justi&ccedil;a do Trabalho).</strong> Brazil
            processes approximately 3.5 million new labor cases annually. Claims for
            unpaid overtime, informal employment, and workplace safety violations are
            routine. Pending labor claims against the target must be quantified during
            due diligence and provisioned in the purchase price.
          </li>
        </ul>
        <p>
          The 2017 labor reform (Lei 13.467) introduced some flexibility&mdash;allowing
          individual negotiation of certain terms, enabling intermittent work contracts,
          and limiting &quot;moral damages&quot; claims to a multiple of the employee&rsquo;s
          salary. But the reform did not fundamentally change the high baseline cost of
          employment. Budget total employer cost at 70&ndash;80% above the base salary
          when modeling post-acquisition payroll.
        </p>

        {/* ───── SECTION 8 ───── */}
        <h2 className={h2Class}>Risks: The &ldquo;Custo Brasil&rdquo; and What Can Go Wrong</h2>
        <p>
          The term &ldquo;Custo Brasil&rdquo; (Brazil Cost) captures the cumulative
          burden of doing business in the country: tax compliance that consumes 1,500+
          hours annually, infrastructure bottlenecks that add 15&ndash;20% to logistics
          costs, regulatory approvals that take 2&ndash;5x longer than OECD norms,
          and a judicial system where commercial disputes can take 4&ndash;8 years
          to resolve. These friction costs add an estimated 30&ndash;40% to operating
          expenses compared to OECD averages, according to CNI (Confedera&ccedil;&atilde;o
          Nacional da Ind&uacute;stria) estimates.
        </p>
        <p>
          Specific risks that have derailed Brazilian ETA deals:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Undisclosed tax liabilities.</strong> Many SMEs operate under
            Simples Nacional and have never undergone a tax audit. Upon acquisition,
            the new owner inherits any past tax shortfalls. A full fiscal due diligence
            covering the past five years (the statute of limitations for most federal
            taxes) is mandatory.
          </li>
          <li>
            <strong>Informal employment (informalidade).</strong> IBGE estimates that
            approximately 39% of Brazilian workers are informal. Target companies may
            have employees paid partially or fully &quot;off the books.&quot; This creates
            both labor liability risk and unreliable financial statements. Insist on
            reconciling headcount against eSocial (the government&rsquo;s digital payroll
            reporting system) records.
          </li>
          <li>
            <strong>Currency volatility.</strong> The BRL has fluctuated between 4.7
            and 5.8 per USD in the past three years. For international investors,
            a 20% depreciation can wipe out an entire year&rsquo;s operating profit
            in USD terms. Hedging options exist (NDF contracts through Brazilian banks)
            but are expensive, typically costing 5&ndash;8% annually due to the
            interest rate differential.
          </li>
          <li>
            <strong>Political and regulatory instability.</strong> Tax rules change
            frequently&mdash;Brazil has amended its tax code over 400,000 times since
            1988, according to IBPT (Instituto Brasileiro de Planejamento e
            Tributa&ccedil;&atilde;o). Regulatory shifts in healthcare, education,
            and financial services can alter business economics with limited notice.
          </li>
          <li>
            <strong>Regional variation.</strong> Brazil spans 26 states plus the
            Federal District, each with distinct ICMS rates, environmental regulations,
            and licensing requirements. A business model that works in S&atilde;o
            Paulo may face completely different cost structures in Bahia or
            Amazonas. For ETA operators considering{" "}
            <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
              European markets
            </Link>{" "}
            as a comparison, Brazil&rsquo;s inter-state regulatory variation is
            closer to operating across the entire EU than within a single country.
          </li>
        </ul>

        {/* ───── FAQ SECTION ───── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>What acquisition multiples should I expect for Brazilian SMEs?</h3>
        <p>
          Most Brazilian SMEs in the ETA-relevant range (R$5&ndash;50M revenue) trade
          at 3&ndash;5x EBITDA. Healthcare, IT services, and businesses with strong
          recurring revenue command the higher end; regional distribution businesses,
          construction services, and asset-heavy operations trade at the lower end.
          These multiples are 1&ndash;2 turns below US equivalents for similar
          businesses, reflecting higher country risk and thinner buyer competition.
        </p>

        <h3 className={h3Class}>Do I need to speak Portuguese to do ETA in Brazil?</h3>
        <p>
          Effectively, yes. While financial advisors, lawyers, and accountants in
          S&atilde;o Paulo often speak English, deal sourcing, seller conversations,
          employee management, and government interactions happen almost exclusively
          in Portuguese. Searchers who are not fluent typically partner with a
          Brazilian co-searcher or spend 6&ndash;12 months in-country building
          language skills before launching their search. Legal documents and
          government filings are all in Portuguese, and courts do not accept
          English-language evidence without certified translation.
        </p>

        <h3 className={h3Class}>How long does a typical Brazilian ETA deal take from LOI to close?</h3>
        <p>
          Expect 4&ndash;8 months from signed letter of intent to closing. Due
          diligence in Brazil takes longer than in the US because financial records
          are often less organized, tax reconciliation requires specialist accountants,
          labor contingency analysis involves reviewing individual employee files,
          and BNDES or commercial bank financing approvals add 60&ndash;120 days.
          Government registrations at the Junta Comercial (commercial registry) and
          Receita Federal (federal revenue service) add 2&ndash;4 weeks post-signing.
        </p>

        <h3 className={h3Class}>Can a foreign citizen acquire a business in Brazil?</h3>
        <p>
          Yes, but with conditions. Foreign individuals need a CPF
          (Cadastro de Pessoas F&iacute;sicas, the Brazilian tax ID) and, if they
          will manage the business, a permanent or investor visa (visto de investidor
          estrangeiro), which requires a minimum investment of R$500,000 (~$100K).
          Foreign companies can also acquire Brazilian entities through a local
          subsidiary. There are restrictions on foreign ownership in certain sectors
          (media, aviation, rural land near borders), but most ETA-relevant industries
          have no foreign ownership caps. Register all foreign capital with the Central
          Bank (Banco Central do Brasil) to ensure future profit repatriation rights.
        </p>

        <h3 className={h3Class}>What is the best city to base a Brazilian search fund?</h3>
        <p>
          S&atilde;o Paulo is the default choice for most searchers. The city accounts
          for roughly 11% of national GDP, has the densest concentration of targets,
          advisors, investors, and professional service firms, and provides the best
          connectivity to secondary markets via domestic flights. The Insper and FGV
          alumni networks are both headquartered there. Florian&oacute;polis is an
          alternative for searchers focused on IT services, and Belo Horizonte
          (Minas Gerais) offers strong deal flow in agribusiness services and
          healthcare. The right choice depends on your target industry and whether
          you are willing to operate in a secondary market for better multiples.
        </p>
      </div>
    </article>
  );
}
