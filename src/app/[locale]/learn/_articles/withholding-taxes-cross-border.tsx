import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function WithholdingTaxesCrossBorderArticle() {
  return (
    <article>
      <h1 className={h1Class}>Withholding Taxes in Cross-Border Acquisitions</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Withholding taxes are one of the most consequential &mdash; and most
          frequently underestimated &mdash; costs in cross-border acquisitions.
          When a company in one country pays dividends, interest, or royalties
          to a recipient in another country, the source country typically
          requires the paying entity to &ldquo;withhold&rdquo; a percentage of
          the payment and remit it directly to the local tax authority. For
          search fund entrepreneurs acquiring businesses across borders, these
          withholding obligations can materially erode returns if they are not
          anticipated and planned for during deal structuring. This guide
          explains how withholding taxes work, how tax treaties reduce or
          eliminate them, and how to structure{" "}
          <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">cross-border acquisitions</Link>{" "}
          to minimize their impact.
        </p>

        <h2 className={h2Class}>What are withholding taxes?</h2>
        <p>
          Withholding taxes are a mechanism by which a country collects tax at
          the source of a payment rather than relying on the foreign recipient
          to self-report and pay tax on income received from that country. The
          payer deducts a specified percentage from the gross payment and
          remits it to the tax authority, with the net amount going to the
          foreign recipient. The recipient may then be able to credit the
          withholding tax against its domestic tax liability, claim a refund
          from the source country, or &mdash; in the worst case &mdash; bear
          the tax as a permanent cost.
        </p>
        <p>
          Withholding taxes apply to three main categories of cross-border
          payments:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Dividends:</strong> Payments from a subsidiary to its
            foreign parent company or shareholders. This is the most relevant
            category for search fund acquirers, because extracting profits from
            an acquired business in another country typically takes the form of
            dividend distributions.
          </li>
          <li>
            <strong>Interest:</strong> Payments on debt owed by a subsidiary to
            a foreign lender or parent company. When acquisition financing is
            structured through intercompany loans &mdash; a common technique in{" "}
            <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">international acquisition financing</Link>{" "}
            &mdash; the interest payments may be subject to withholding in the
            subsidiary&apos;s country.
          </li>
          <li>
            <strong>Royalties:</strong> Payments for the use of intellectual
            property, trademarks, patents, or know-how. While less common in
            typical search fund acquisitions, royalty withholding becomes relevant
            when the acquirer centralizes IP ownership in a holding company and
            charges licensing fees to the operating subsidiary.
          </li>
        </ul>
        <p>
          Statutory withholding rates &mdash; the rates that apply in the absence
          of a tax treaty &mdash; can be significant. Many countries impose
          domestic withholding rates of 15% to 30% on dividends, interest, and
          royalties paid to non-residents. Without treaty relief, these rates
          can dramatically reduce the after-tax return of a cross-border
          acquisition.
        </p>

        <h2 className={h2Class}>How tax treaties reduce withholding</h2>
        <p>
          Bilateral tax treaties (also called double taxation agreements, or
          DTAs) are the primary mechanism for reducing withholding taxes. Most
          industrialized countries have extensive treaty networks &mdash; the
          United States has treaties with over 65 countries, and most Western
          European countries have 70 to 100 treaties each. These treaties
          typically reduce withholding rates on dividends, interest, and
          royalties to rates well below the domestic statutory rates.
        </p>

        <h3 className={h3Class}>Dividend withholding under treaties</h3>
        <p>
          Most tax treaties provide for reduced dividend withholding rates,
          typically distinguishing between portfolio dividends (small
          shareholdings) and participation dividends (substantial
          shareholdings, usually 10% or 25% or more). The participation
          dividend rate is almost always lower, reflecting the economic reality
          that direct investment should be taxed primarily in the investor&apos;s
          home country. Common treaty rates for participation dividends range
          from 0% to 15%, with many modern treaties providing for 5% or even
          0% withholding on dividends paid to corporate parents that hold a
          qualifying percentage of the subsidiary.
        </p>

        <h3 className={h3Class}>Interest withholding under treaties</h3>
        <p>
          Treaty rates on interest payments are generally lower than those on
          dividends, reflecting a policy preference for encouraging cross-border
          lending. Many modern tax treaties provide for 0% withholding on
          interest, particularly within the EU (where the Interest and Royalties
          Directive eliminates withholding between associated EU companies) and
          between OECD member states with close economic ties. Common treaty
          rates range from 0% to 10%.
        </p>

        <h3 className={h3Class}>Royalty withholding under treaties</h3>
        <p>
          Royalty withholding rates under treaties vary more widely. The EU
          Interest and Royalties Directive eliminates withholding on royalties
          between associated EU companies meeting certain ownership and holding
          period requirements. Outside the EU, treaty royalty rates typically
          range from 0% to 15%. Some countries, particularly in Latin America
          and Asia, maintain higher treaty rates on royalties reflecting the
          economic importance of outbound IP payments.
        </p>

        <h2 className={h2Class}>Common withholding rates by country</h2>
        <p>
          Understanding the withholding tax environment in the countries most
          relevant to search fund acquisitions is essential for deal modeling.
          Below is a summary of key jurisdictions and their general approach,
          though specific rates always depend on the applicable treaty.
        </p>

        <h3 className={h3Class}>United States</h3>
        <p>
          The US imposes a statutory withholding rate of 30% on dividends,
          interest, and royalties paid to non-residents. However, the US has one
          of the most extensive treaty networks in the world, and treaty rates
          are typically much lower. Under the US-UK treaty, for example,
          dividend withholding on participation dividends is 5%, and interest
          withholding is 0%. The US-Netherlands treaty provides for 5% dividend
          withholding and 0% interest withholding. Acquirers of US businesses
          who are resident in countries with favorable US treaties can
          significantly reduce withholding costs.
        </p>

        <h3 className={h3Class}>United Kingdom</h3>
        <p>
          The UK does not impose withholding tax on dividends paid to
          non-residents &mdash; a significant advantage for search fund
          acquirers. The UK does impose withholding on interest payments (at a
          statutory rate of 20%), but this is typically reduced to 0% under
          most UK tax treaties and eliminated for payments between EU/EEA
          associated companies. Royalty payments are subject to 20% statutory
          withholding, reduced under treaties.
        </p>

        <h3 className={h3Class}>European Union</h3>
        <p>
          Within the EU, the Parent-Subsidiary Directive eliminates withholding
          tax on dividends paid by a subsidiary in one EU member state to a
          parent company in another, provided certain ownership thresholds
          (typically 10%) and holding periods (usually 12 months) are met. The
          Interest and Royalties Directive does the same for interest and
          royalty payments between associated EU companies. These directives
          make the EU a particularly attractive environment for cross-border
          acquisition structures, as they effectively eliminate intra-EU
          withholding for qualifying corporate groups. For acquirers considering
          where to base their{" "}
          <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">holding company</Link>,
          an EU jurisdiction offers significant advantages.
        </p>

        <h3 className={h3Class}>Switzerland</h3>
        <p>
          Switzerland imposes a 35% statutory withholding tax on dividends,
          which is among the highest in Europe. However, Switzerland has an
          extensive treaty network that reduces this rate, and under the
          Swiss-EU Savings Agreement (and bilateral treaties with individual EU
          states), the rate is typically reduced to 0% or 5% for qualifying
          corporate recipients. Interest and royalty payments from Switzerland
          are generally not subject to withholding tax at the domestic level.
          The high statutory dividend withholding rate means that structuring
          and treaty access are particularly important for acquisitions in{" "}
          <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">Switzerland and other attractive acquisition markets</Link>.
        </p>

        <h2 className={h2Class}>Treaty shopping and anti-avoidance rules</h2>
        <p>
          Treaty shopping refers to the practice of routing investments through
          an intermediary country solely to access a favorable tax treaty with
          the source country. For example, an investor in Country A (which has
          no treaty with Country C) might route their investment through a
          holding company in Country B (which has a favorable treaty with
          Country C) in order to benefit from the lower withholding rates
          under the B-C treaty. While historically common, treaty shopping has
          come under intense regulatory scrutiny and is increasingly restricted.
        </p>

        <h3 className={h3Class}>The OECD&apos;s Multilateral Instrument (MLI)</h3>
        <p>
          The OECD&apos;s Base Erosion and Profit Shifting (BEPS) project has
          led to significant changes in international tax rules, including the
          adoption of the Multilateral Instrument (MLI), which modifies
          existing bilateral tax treaties to include anti-avoidance provisions.
          The most important of these is the Principal Purpose Test (PPT),
          which allows a country to deny treaty benefits if one of the
          principal purposes of an arrangement was to obtain those benefits.
          The PPT has been adopted by most treaty partners and applies to
          hundreds of existing treaties.
        </p>

        <h3 className={h3Class}>Substance requirements</h3>
        <p>
          Even without the MLI, most countries have domestic anti-avoidance
          rules that can deny treaty benefits to entities that lack genuine
          economic substance. A holding company that exists only on paper &mdash;
          with no employees, no office, no decision-making function &mdash; is
          vulnerable to being treated as a conduit and denied treaty benefits.
          For search fund acquirers, this means that any{" "}
          <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">holding company structure</Link>{" "}
          must have real substance: directors who meet and make decisions in the
          jurisdiction, employees who perform genuine functions, and a
          commercial rationale beyond tax optimization.
        </p>

        <h3 className={h3Class}>Beneficial ownership requirements</h3>
        <p>
          Tax treaties typically limit reduced withholding rates to payments
          made to the &ldquo;beneficial owner&rdquo; of the income. If a
          holding company receives a dividend but is contractually obligated to
          pass it through to an entity in another jurisdiction, the holding
          company may not be treated as the beneficial owner, and treaty
          benefits may be denied. The beneficial ownership concept is
          interpreted differently across jurisdictions, and several high-profile
          cases (including the Danish beneficial ownership cases decided by the
          European Court of Justice) have established that the concept requires
          genuine economic ownership, not merely legal receipt.
        </p>

        <h2 className={h2Class}>Permanent establishment considerations</h2>
        <p>
          While withholding taxes apply to specific categories of cross-border
          payments, a related risk in cross-border acquisitions is the
          inadvertent creation of a permanent establishment (PE) for the
          acquirer in the target&apos;s country. A PE arises when a foreign
          entity has a fixed place of business, a dependent agent, or
          significant economic activity in a country, and its creation triggers
          full corporate tax liability in that country &mdash; not just
          withholding on specific payments.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Management PE risk:</strong> If the search fund CEO
            relocates to the target country or spends significant time there
            making management decisions for the holding company, the holding
            company may be deemed to have a PE in that country. This can
            subject the holding company&apos;s worldwide income (or at least
            the PE-attributable income) to local corporate tax.
          </li>
          <li>
            <strong>Service PE risk:</strong> Some modern tax treaties (and the
            OECD&apos;s BEPS-influenced treaty provisions) include service PE
            rules that can create a taxable presence based on the provision of
            services for a sustained period, even without a fixed office.
          </li>
          <li>
            <strong>Planning implications:</strong> Search fund entrepreneurs
            who manage businesses across borders must be mindful of where they
            spend their time and where key decisions are made. Maintaining clear
            records of board meetings, decision-making locations, and management
            activities helps defend against PE assertions.
          </li>
        </ul>

        <h2 className={h2Class}>Planning structures to minimize withholding</h2>
        <p>
          Effective withholding tax planning requires selecting the right
          structure before the acquisition closes. Once a structure is in
          place, restructuring to reduce withholding can be costly (triggering
          transfer taxes, capital gains, and administrative costs) and may
          attract anti-avoidance scrutiny. The key structural decisions
          include:
        </p>

        <h3 className={h3Class}>Holding company jurisdiction</h3>
        <p>
          The choice of holding company jurisdiction is the single most
          important withholding tax planning decision. The ideal holding
          jurisdiction has: (a) an extensive treaty network with favorable
          withholding rates, particularly in the target&apos;s country;
          (b) a participation exemption that eliminates tax on dividends
          received from subsidiaries and capital gains on the sale of
          subsidiaries; (c) no or low domestic withholding on distributions
          to the holding company&apos;s shareholders; and (d) a stable,
          predictable tax environment. Jurisdictions commonly used for holding
          companies in European search fund structures include the Netherlands,
          Luxembourg, the UK, Ireland, and (for non-EU structures) Switzerland.
          For a deeper analysis of holding company considerations, see our
          guide to{" "}
          <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">holding company structures</Link>.
        </p>

        <h3 className={h3Class}>Debt-equity mix</h3>
        <p>
          The mix of debt and equity used to finance the acquisition affects
          withholding tax exposure. Interest payments on intercompany debt may
          be subject to lower withholding rates (or no withholding at all)
          compared to dividend distributions. Additionally, interest payments
          are typically deductible for the subsidiary, reducing its taxable
          income, while dividend payments are not. However, thin capitalization
          rules and earnings-stripping rules in most jurisdictions limit the
          amount of debt that can be used. The OECD recommends limiting
          interest deductions to 30% of EBITDA under its BEPS Action 4
          guidance, and many countries have adopted similar rules. Structuring
          the debt-equity ratio within these limits while maximizing the tax
          efficiency of repatriation requires careful{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">tax planning</Link>.
        </p>

        <h3 className={h3Class}>Hybrid instruments</h3>
        <p>
          Some jurisdictions allow the use of hybrid instruments &mdash;
          financial instruments that are treated as debt in one country and
          equity in another. For example, a preferred equity instrument that
          pays a fixed return might be treated as debt (with deductible interest
          payments) in the subsidiary&apos;s country and as equity (with
          exempt dividend income) in the parent&apos;s country. While hybrid
          instruments have been significantly curtailed by BEPS Action 2 and
          the EU Anti-Tax Avoidance Directives (ATAD I and ATAD II), they
          remain relevant in certain cross-border structures involving non-EU
          jurisdictions.
        </p>

        <h2 className={h2Class}>Withholding tax in the deal model</h2>
        <p>
          Withholding taxes must be explicitly modeled in any cross-border
          acquisition financial model. The key areas where withholding affects
          the economics are:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Cash repatriation costs:</strong> Every dividend
            distribution from the subsidiary to the holding company (and from
            the holding company to investors) may trigger withholding. A 5%
            withholding rate on a EUR 500,000 annual dividend represents
            EUR 25,000 per year in leakage &mdash; over a five-year hold
            period, that is EUR 125,000 in reduced returns.
          </li>
          <li>
            <strong>Interest deductibility and withholding:</strong>
            Intercompany interest payments create a deduction in the
            subsidiary&apos;s country but may trigger withholding. The net
            benefit depends on the subsidiary&apos;s corporate tax rate versus
            the withholding rate.
          </li>
          <li>
            <strong>Exit proceeds:</strong> When the holding company sells the
            subsidiary, the treatment of the capital gain depends on both the
            holding company jurisdiction (does it have a participation
            exemption?) and the target jurisdiction (does it impose withholding
            or capital gains tax on non-resident sellers of shares?).
          </li>
          <li>
            <strong>Treaty access verification:</strong> Before closing, the
            acquirer should confirm that the intended withholding rates are
            available by reviewing the applicable treaty, checking beneficial
            ownership and substance requirements, and if necessary, obtaining
            an advance ruling or certificate of residence from the relevant
            tax authority.
          </li>
        </ul>

        <h2 className={h2Class}>Practical steps for search fund acquirers</h2>
        <p>
          Withholding tax planning is not just for large multinational
          corporations. Even a single cross-border acquisition by a search
          fund requires thoughtful structuring. Here are the practical steps
          to follow:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Map the payment flows:</strong> Before selecting a
            structure, diagram all expected cross-border payments &mdash;
            dividends, interest, management fees, royalties &mdash; and
            identify which withholding taxes apply to each.
          </li>
          <li>
            <strong>Check the treaty network:</strong> For each payment flow,
            identify the applicable treaty (if any) and the treaty withholding
            rate. Pay attention to conditions such as minimum shareholding
            percentages and holding periods.
          </li>
          <li>
            <strong>Evaluate holding company options:</strong> Compare two or
            three potential holding company jurisdictions based on their treaty
            access, participation exemption regimes, and domestic tax costs.
          </li>
          <li>
            <strong>Model the total tax cost:</strong> Build a thorough
            tax model that includes corporate tax in the subsidiary&apos;s
            jurisdiction, withholding on distributions and interest, tax in the
            holding company jurisdiction, and tax on distributions to
            investors.
          </li>
          <li>
            <strong>Engage specialized advisors:</strong> Cross-border tax
            planning requires advisors with expertise in both the source and
            recipient jurisdictions. A local tax advisor in the target country
            and an international tax advisor in the holding company
            jurisdiction should be engaged early in the process.
          </li>
          <li>
            <strong>Maintain substance and compliance:</strong> Once the
            structure is in place, maintain the substance requirements
            (real employees, board meetings, decision-making) that underpin
            treaty access, and comply with all withholding filing and
            reporting obligations in each jurisdiction.
          </li>
        </ol>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How much can withholding taxes reduce cross-border acquisition returns?</h3>
        <p>
          Withholding taxes can materially erode returns if not planned for during deal structuring. A 5% withholding rate on a EUR 500,000 annual dividend represents EUR 25,000 per year in leakage &mdash; over a five-year hold period, that is EUR 125,000 in reduced returns. At higher statutory rates (15&ndash;30% in many countries without treaty relief), the impact is even more severe. According to PwC&rsquo;s Worldwide Tax Summaries, the cumulative effect of dividend withholding, interest withholding on intercompany debt, and capital gains withholding on exit can reduce the IRR of a cross-border acquisition by 200&ndash;500 basis points compared to a domestic deal with equivalent operating performance. This is why selecting the right <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">holding company jurisdiction</Link> with favorable treaty access is the single most important structural decision in cross-border acquisition planning.
        </p>

        <h3 className={h3Class}>How do EU directives eliminate withholding taxes within Europe?</h3>
        <p>
          The EU Parent-Subsidiary Directive eliminates withholding tax on dividends paid by a subsidiary in one EU member state to a parent company in another, provided the parent holds at least 10% of the subsidiary&rsquo;s capital for a minimum 12-month holding period. The Interest and Royalties Directive similarly eliminates withholding on interest and royalty payments between associated EU companies meeting ownership and holding period requirements. Together, these directives make the EU a particularly attractive environment for cross-border acquisition structures, as they effectively eliminate intra-EU withholding for qualifying corporate groups. According to Deloitte&rsquo;s International Tax Treaty Rates analysis, this gives EU holding jurisdictions (Netherlands, Luxembourg, Ireland) a significant advantage over non-EU alternatives for acquiring businesses in EU member states. However, the directives do not apply to payments to or from non-EU countries, where bilateral tax treaties remain the primary mechanism for withholding relief.
        </p>

        <h3 className={h3Class}>What substance requirements must a holding company meet to access treaty benefits?</h3>
        <p>
          Tax authorities worldwide increasingly require genuine economic substance before granting treaty benefits. A holding company must have real employees who perform genuine functions, directors who meet and make decisions in the jurisdiction, actual office space, and a commercial rationale beyond tax optimization. The OECD&rsquo;s Principal Purpose Test (PPT), adopted through the Multilateral Instrument by most treaty partners, allows countries to deny treaty benefits if obtaining those benefits was one of the principal purposes of an arrangement. The European Court of Justice&rsquo;s Danish beneficial ownership cases established that intermediate holding entities must demonstrate genuine economic ownership of income, not merely legal receipt. IBFD&rsquo;s analysis of substance requirements across jurisdictions shows that the minimum acceptable substance level has risen significantly since the BEPS reforms &mdash; a letterbox company with no employees and a registered agent is no longer sufficient to access favorable withholding rates in any major jurisdiction.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>OECD, <em>Model Tax Convention on Income and on Capital</em> (2017, updated 2024)</li>
          <li>OECD, <em>Action 6 &mdash; Prevention of Treaty Abuse (BEPS)</em> (2015)</li>
          <li>OECD, <em>Action 4 &mdash; Limiting Base Erosion Involving Interest Deductions</em> (2015)</li>
          <li>European Commission, <em>Parent-Subsidiary Directive (2011/96/EU)</em></li>
          <li>European Commission, <em>Interest and Royalties Directive (2003/49/EC)</em></li>
          <li>PwC, <em>Worldwide Tax Summaries</em> (annual publication)</li>
          <li>Deloitte, <em>International Tax: Treaty Rates</em> (annual publication)</li>
          <li>IBFD, <em>Tax Treaties Database</em></li>
        </ul>

        <h2 className={h2Class}>Related resources</h2>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">Cross-Border Acquisitions: A Complete Guide</Link>
          </li>
          <li>
            <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">Tax Planning for Acquisitions</Link>
          </li>
          <li>
            <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">Holding Company Structures for Search Funds</Link>
          </li>
          <li>
            <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">International Acquisition Financing</Link>
          </li>
          <li>
            <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">Best Countries to Buy a Business</Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
