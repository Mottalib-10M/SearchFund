import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function CrossBorderAcquisitionsEuropeArticle() {
  return (
    <article>
      <h1 className={h1Class}>Cross-Border Acquisitions in Europe: A Search Fund Guide</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          One of the most compelling &mdash; and most complex &mdash; strategies
          available to search fund entrepreneurs in{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">Europe</Link>{" "}
          is the cross-border acquisition. Rather than limiting your search to a
          single country, a cross-border approach lets you tap into the full
          breadth of the European SME landscape, accessing deal flow, valuation
          arbitrage, and market dynamics that no single jurisdiction can offer
          on its own. But acquiring a company across borders introduces layers
          of legal, tax, cultural, and operational complexity that demand
          careful planning from the earliest stages of your search.
        </p>

        <h2 className={h2Class}>Why search across borders in Europe?</h2>
        <p>
          Most searchers begin in the country where they live, studied, or hold
          citizenship. But Europe&rsquo;s fragmented landscape means that
          restricting yourself to one market can significantly limit your
          opportunity set.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Wider deal flow:</strong> A searcher focused on France alone
            might screen 300&ndash;500 targets. Adding Belgium, the Netherlands,
            and Luxembourg could double or triple that pipeline without
            requiring a new language.
          </li>
          <li>
            <strong>Valuation arbitrage:</strong> A B2B services company might
            trade at 5&ndash;6x EBITDA in the{" "}
            <Link href="/learn/eta-uk" className="text-apple-accent hover:underline">United Kingdom</Link>{" "}
            but only 3.5&ndash;4.5x in Southern or Eastern Europe.
          </li>
          <li>
            <strong>Sector depth:</strong> Germany leads in precision
            manufacturing, the Netherlands in logistics, the Nordics in SaaS
            and cleantech, Italy in specialty manufacturing. Cross-border
            searching lets you follow the sector rather than the geography.
          </li>
          <li>
            <strong>Reduced competition:</strong> A searcher willing to cross
            borders often faces fewer competitive bidders, particularly in
            smaller markets like Portugal, Austria, or the Baltics.
          </li>
          <li>
            <strong>Buy-and-build potential:</strong> A cross-border platform
            lets you pursue add-on acquisitions in adjacent markets from day
            one.
          </li>
        </ul>

        <h2 className={h2Class}>EU single market advantages</h2>
        <p>
          The EU&rsquo;s single market encompasses 27 member states with a
          combined GDP of approximately EUR 16 trillion. For search fund
          entrepreneurs it provides structural advantages that make cross-border
          acquisitions more feasible than in almost any other region.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Free movement of capital:</strong> You can invest in a
            company in any EU country without exchange controls or restrictions
            on foreign ownership (with limited exceptions in defence and
            critical infrastructure).
          </li>
          <li>
            <strong>Harmonised company law:</strong> EU directives have
            harmonised many aspects of company formation, reporting, and
            governance across member states.
          </li>
          <li>
            <strong>Parent-Subsidiary Directive:</strong> Dividends paid between
            an EU parent and its EU subsidiary are exempt from withholding tax,
            provided certain ownership thresholds are met &mdash; critical for
            cross-border holding structures.
          </li>
          <li>
            <strong>Interest &amp; Royalties Directive:</strong> Intra-group
            interest and royalty payments between associated EU companies are
            exempt from withholding tax, enabling efficient debt push-down
            structures.
          </li>
        </ul>

        <h2 className={h2Class}>Legal considerations: holding structures</h2>
        <p>
          The choice of holding structure determines your tax efficiency,
          liability exposure, governance flexibility, and ease of eventual exit.
          For a broader treatment of entity design, see our{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">legal structure guide</Link>.
          Most experienced cross-border searchers evaluate three approaches.
        </p>

        <h3 className={h3Class}>Direct acquisition from your home country</h3>
        <p>
          Use a holding company in your country of residence to acquire the
          target directly &mdash; for example, a French SAS acquires a Spanish
          SL. This works well for bilateral deals where the holding jurisdiction
          has a favourable treaty with the target country.
        </p>

        <h3 className={h3Class}>Intermediate holding in a tax-efficient jurisdiction</h3>
        <p>
          Many cross-border search funds establish a holding company in the
          Netherlands, Luxembourg, or Ireland. These jurisdictions offer
          participation exemptions, extensive treaty networks, and
          well-understood regimes. A typical structure: Luxembourg S&agrave;rl
          &rarr; French SAS target + German GmbH add-on. The downside is
          higher setup costs and strict substance requirements under EU
          anti-abuse rules.
        </p>

        <h3 className={h3Class}>Target-country acquisition vehicle</h3>
        <p>
          Create a new entity in the target&rsquo;s country (e.g., a new German
          GmbH to acquire the target GmbH). This simplifies local regulatory
          approvals and financing but may not optimise withholding taxes on
          upstream distributions. Regardless of approach, engage a cross-border
          M&amp;A lawyer and tax advisor in both jurisdictions <em>before</em>{" "}
          signing a letter of intent.
        </p>

        <h2 className={h2Class}>Tax planning for cross-border deals</h2>
        <p>
          Tax planning in a cross-border European acquisition is both an
          opportunity and a minefield. Different countries tax income,
          dividends, and capital gains at very different rates, while EU
          directives can eliminate withholding taxes on intra-group flows. But
          anti-avoidance regimes (ATAD I &amp; II, BEPS, DAC6) trigger
          penalties if your structure lacks economic substance.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Corporate tax rate spread:</strong> Rates range from 9% in
            Hungary to 29.9% in{" "}
            <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">Germany</Link>{" "}
            (including trade tax). The target&rsquo;s country determines where
            operating profits are taxed; the holding jurisdiction determines
            how those profits are taxed when distributed upstream.
          </li>
          <li>
            <strong>Participation exemption:</strong> Most EU holding
            jurisdictions eliminate tax on dividends from subsidiaries and on
            capital gains from selling subsidiary shares.
          </li>
          <li>
            <strong>Interest deductibility:</strong> ATAD limits interest
            deductions to 30% of EBITDA (or EUR 3 million, whichever is
            higher) across all member states.
          </li>
          <li>
            <strong>Transfer pricing:</strong> Intra-group charges must be at
            arm&rsquo;s length. Failure to comply can result in double
            taxation.
          </li>
          <li>
            <strong>Exit taxation:</strong> Selling shares of the holding
            company rather than the operating subsidiary can make the capital
            gain fully exempt under a participation exemption.
          </li>
        </ol>
        <p>
          For a deeper dive,{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">our tax optimisation guide</Link>{" "}
          covers asset vs. share purchases, goodwill amortisation, and
          jurisdiction-specific strategies.
        </p>

        <h2 className={h2Class}>Cultural due diligence</h2>
        <p>
          Perhaps the most underestimated risk in cross-border acquisitions is
          cultural mismatch. Culture is not quantifiable &mdash; and yet it
          often determines whether an acquisition succeeds or fails.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Management style:</strong> Is the company hierarchical
            (common in{" "}
            <Link href="/learn/eta-france" className="text-apple-accent hover:underline">France</Link>
            , Germany, Italy) or flat and consensus-driven (typical in the
            Nordics)? Your leadership style must adapt.
          </li>
          <li>
            <strong>Decision-making speed:</strong> In Germany and Scandinavia,
            decisions often require works council consultation. Failing to
            respect these processes triggers resistance and legal disputes.
          </li>
          <li>
            <strong>Customer and supplier relationships:</strong> Many European
            SMEs depend on long-standing personal relationships. A new foreign
            owner who ignores these can see revenue erode quickly.
          </li>
          <li>
            <strong>Attitude toward change:</strong> Assess whether the
            organisation is eager for modernisation or deeply attached to
            &quot;the way things have always been done.&quot;
          </li>
          <li>
            <strong>Work-life balance:</strong> French employees have a 35-hour
            statutory work week. German employees protect personal time
            fiercely. Southern European cultures may involve different daily
            rhythms. None are &quot;wrong&quot; &mdash; they require
            adaptation.
          </li>
        </ul>
        <p>
          Conduct cultural due diligence through multiple on-site visits and
          with a local advisor. For a comprehensive framework, see our{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence checklist</Link>.
        </p>

        <h2 className={h2Class}>Language barriers</h2>
        <p>
          Language affects every aspect of a cross-border acquisition &mdash;
          financial statements, legal contracts, employee management, and
          customer relationships. Assess your capabilities honestly.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Operational language:</strong> If the target&rsquo;s
            employees, customers, and suppliers operate in German, Italian, or
            Portuguese, your inability to communicate creates friction from
            day one.
          </li>
          <li>
            <strong>Documentation:</strong> Contracts and regulatory filings
            will be in the local language. Budget for professional translation
            of all key documents during{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link>{" "}
            and beyond.
          </li>
          <li>
            <strong>Negotiation nuance:</strong> Subtle distinctions in
            contract language can have major consequences. Always use bilingual
            legal counsel.
          </li>
          <li>
            <strong>English as a bridge:</strong> In the Nordics and
            Netherlands, English works well. In France, Germany, Italy, and
            Spain, proficiency varies widely at the SME level.
          </li>
        </ul>

        <h2 className={h2Class}>Cross-border financing</h2>
        <p>
          Financing a cross-border acquisition presents unique challenges. For
          a full treatment, see our{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition financing guide</Link>.
        </p>

        <h3 className={h3Class}>Senior debt</h3>
        <p>
          Most lenders prefer to lend in the country where the target operates.
          A French bank will finance a French company but may balk at a Spanish
          target. Work with a local bank in the target&rsquo;s country and
          begin the relationship before you identify a specific deal.
        </p>

        <h3 className={h3Class}>Seller financing</h3>
        <p>
          Seller financing (typically 15&ndash;30% of the price, subordinated,
          repaid over 2&ndash;5 years) is common in European SME deals and
          aligns the seller&rsquo;s incentives during the transition. In
          cross-border deals, ensure the seller note is governed by a single
          law and denominated in a single currency.
        </p>

        <h3 className={h3Class}>Currency risk</h3>
        <p>
          If the target operates outside the Eurozone (UK, Switzerland, Sweden,
          Poland), currency risk is material. Revenue and costs will be in the
          local currency, but investors may expect euro returns. Consider
          forward contracts and natural hedges through local-currency debt.
        </p>

        <h2 className={h2Class}>Regulatory approvals</h2>
        <ul className={ulClass}>
          <li>
            <strong>FDI screening:</strong> Since 2020 many EU member states
            have strengthened foreign investment screening, particularly in
            defence, energy, telecoms, healthcare, and AI. Screening may apply
            even to EU citizens if their holding company or investors are
            outside the EU.
          </li>
          <li>
            <strong>Employment law:</strong> In{" "}
            <Link href="/learn/eta-france" className="text-apple-accent hover:underline">France</Link>
            , the Hamon Law requires employees be notified of a planned sale
            two months in advance. In Germany, works councils have consultation
            rights. Non-compliance can delay or block a deal.
          </li>
          <li>
            <strong>Industry licences:</strong> Regulated industries (financial
            services, healthcare, transport) may require re-approval of
            operating licences upon change of ownership.
          </li>
          <li>
            <strong>Data protection:</strong> GDPR compliance review is
            essential when the target processes significant personal data.
          </li>
        </ul>

        <h2 className={h2Class}>Post-acquisition integration challenges</h2>

        <h3 className={h3Class}>Governance and reporting</h3>
        <p>
          Establish governance structures that bridge your holding company and
          the operating subsidiary: a board at the holding level, local
          management at the subsidiary level, and clear reporting lines.
          Consolidating financial reporting across jurisdictions may require
          aligning accounting standards (local GAAP vs. IFRS) and reporting
          cycles.
        </p>

        <h3 className={h3Class}>Management retention</h3>
        <p>
          In a cross-border context, the transition period with the outgoing
          owner is even more critical because they hold the key customer and
          supplier relationships. Structure the agreement with clear
          milestones and invest significant time on-site during the early
          months.
        </p>

        <h3 className={h3Class}>HR and employment law</h3>
        <p>
          European employment law is more protective than US law. In many
          jurisdictions, employment contracts transfer automatically to the new
          owner under the EU Acquired Rights Directive. Consult a local
          employment lawyer before making any changes to staffing or
          compensation.
        </p>

        <h2 className={h2Class}>Common mistakes</h2>
        <ol className={olClass}>
          <li>
            <strong>Underestimating complexity:</strong> Budget 20&ndash;40%
            more for legal and tax advisory fees than a domestic deal.
          </li>
          <li>
            <strong>Ignoring substance requirements:</strong> A holding company
            without real employees or decision-making will not survive tax
            audit scrutiny.
          </li>
          <li>
            <strong>Overestimating language skills:</strong> &quot;I studied
            German for two years&quot; is not the same as negotiating an SPA or
            managing a works council in German.
          </li>
          <li>
            <strong>Neglecting local advisors:</strong> You need local counsel,
            a local accountant, and ideally a local M&amp;A advisor in the
            target market.
          </li>
          <li>
            <strong>Rushing post-acquisition changes:</strong> Spend the first
            90&ndash;180 days listening and building trust before making
            significant operational changes.
          </li>
          <li>
            <strong>Failing to plan for FX risk:</strong> Unhedged currency
            exposure can materially impact your IRR. Model FX scenarios and
            build hedging costs into your plan.
          </li>
        </ol>

        <h2 className={h2Class}>Case examples</h2>

        <h3 className={h3Class}>French searcher acquires Belgian B2B services company</h3>
        <p>
          A French MBA graduate expanded his search to francophone Belgium and
          acquired a B2B facility management company in Wallonia (EUR 4M
          revenue, 65-year-old owner). Structured through a French SAS with
          50% Belgian bank debt, 20% seller financing, and 30% search fund
          equity. The shared language eliminated cultural barriers. Within
          three years, revenue grew 40% through organic expansion and a
          Luxembourg add-on.
        </p>

        <h3 className={h3Class}>Spanish searcher acquires Portuguese industrial company</h3>
        <p>
          An IESE-educated searcher targeted the Iberian peninsula and found a
          precision machining company near Porto (EUR 6M revenue). Structured
          through a Spanish SL acquiring the Portuguese Lda. She relocated to
          Porto for 18 months, then opened a Madrid commercial office, growing
          the business 60% over five years.
        </p>

        <h3 className={h3Class}>Dutch-British searcher builds Nordic IT platform</h3>
        <p>
          A self-funded searcher with dual nationality acquired an IT managed
          services company in Sweden (EUR 3M revenue), then executed two
          add-ons in Denmark and Norway over 30 months. The Dutch BV held
          three Nordic subsidiaries. English served as the board language;
          each subsidiary operated locally. The combined group reached EUR 12M
          revenue and generated a 4.2x return at exit after six years.
        </p>

        <h2 className={h2Class}>Practical checklist</h2>
        <ol className={olClass}>
          <li>
            <strong>Language audit:</strong> Map your capabilities honestly.
            Professional proficiency means reading a balance sheet, negotiating
            a contract, and managing an employee dispute in that language.
          </li>
          <li>
            <strong>Legal &amp; tax pre-screening:</strong> Model 2&ndash;3
            holding structures before you begin active searching.
          </li>
          <li>
            <strong>Investor alignment:</strong> Discuss the cross-border
            dimension with investors early. Some prefer single-country
            exposure; others encourage multi-jurisdiction strategies.
          </li>
          <li>
            <strong>Local network development:</strong> Build relationships
            with M&amp;A brokers, accountants, lawyers, and bankers in each
            target country before you need them.
          </li>
          <li>
            <strong>Regulatory mapping:</strong> Identify FDI screening
            requirements, employee consultation obligations, and licence
            transfer rules for each target country.
          </li>
          <li>
            <strong>Integration planning:</strong> Develop a detailed 100-day
            plan covering governance, reporting, key personnel retention,
            customer communication, and your relocation or travel schedule.
          </li>
        </ol>

        <h2 className={h2Class}>Conclusion</h2>
        <p>
          Cross-border acquisitions in Europe offer search fund entrepreneurs
          access to a vastly larger opportunity set, potential valuation
          arbitrage, and the ability to build multi-country platforms. But they
          also introduce complexities that require careful planning, experienced
          advisors, and a willingness to adapt. The most successful cross-border
          searchers combine rigorous structural planning with genuine cultural
          curiosity &mdash; seeing the cross-border dimension not as a hurdle
          but as a competitive advantage.
        </p>
        <p>
          Start with the{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">European ETA overview</Link>,
          explore country guides for{" "}
          <Link href="/learn/eta-france" className="text-apple-accent hover:underline">France</Link>,{" "}
          <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">Germany</Link>,
          and the{" "}
          <Link href="/learn/eta-uk" className="text-apple-accent hover:underline">United Kingdom</Link>,
          and review our guides on{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">tax optimisation</Link>,{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">legal structures</Link>,
          and{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition financing</Link>{" "}
          to build a complete picture of cross-border search fund acquisitions
          in Europe.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How much more do cross-border European acquisitions cost in advisory fees compared to domestic deals?</h3>
        <p>
          Cross-border European acquisitions typically cost 20&ndash;40% more in legal and tax advisory fees than domestic deals. According to IESE research on European search funds, the median cross-border transaction incurs EUR 80K&ndash;150K in advisory costs versus EUR 50K&ndash;100K for a domestic deal of equivalent size. The additional expense covers dual-jurisdiction legal counsel, cross-border tax structuring, holding company formation, and translation services. Searchers should budget for these costs from the outset and factor them into their total acquisition cost model rather than treating them as an afterthought.
        </p>

        <h3 className={h3Class}>Is it possible to run a cross-border European search fund without relocating to the target country?</h3>
        <p>
          While some searchers have successfully acquired businesses across borders without permanent relocation, the evidence strongly favors relocating &mdash; at least for the first 12&ndash;18 months post-acquisition. INSEAD&rsquo;s ETA research shows that search fund operators who relocate to the target company&rsquo;s country achieve significantly better employee retention and customer preservation during the transition. The EU&rsquo;s freedom of movement makes relocation straightforward for EU citizens. For non-EU citizens, most member states offer investor or entrepreneur visa categories that facilitate relocation when linked to a qualifying business acquisition.
        </p>

        <h3 className={h3Class}>Which European holding company jurisdiction is best for a multi-country search fund?</h3>
        <p>
          The Netherlands, Luxembourg, and Ireland are the three most commonly used holding jurisdictions for cross-border European search funds, each with distinct advantages. The Netherlands offers a 100% participation exemption on dividends and capital gains from qualifying subsidiaries, an extensive treaty network, and pragmatic substance requirements. Luxembourg provides the widest range of holding structures (SOPARFI, SCSp) with strong IP protection. Ireland offers a 12.5% corporate tax rate on trading income and excellent access to US investor capital. The choice depends on the target countries, investor domicile, and anticipated exit strategy. The EU Anti-Tax Avoidance Directives (ATAD I and II) require real economic substance regardless of which jurisdiction you choose.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>
            <a href="https://www.iese.edu/faculty-research/search-funds/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              IESE Business School &mdash; International Search Fund Study and European ETA Data
            </a>
          </li>
          <li>
            <a href="https://www.insead.edu/centres/entrepreneurship/search-funds" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              INSEAD &mdash; ETA &amp; Search Funds Research Hub
            </a>
          </li>
          <li>
            <a href="https://taxation-customs.ec.europa.eu/anti-tax-avoidance-directive_en" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              European Commission &mdash; Anti-Tax Avoidance Directives (ATAD I &amp; II)
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
