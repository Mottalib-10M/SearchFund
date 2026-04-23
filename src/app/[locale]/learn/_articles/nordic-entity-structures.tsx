import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function NordicEntityStructuresArticle() {
  return (
    <article>
      <h1 className={h1Class}>Nordic Entity Structures for Search Fund Acquisitions</h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          The Nordic countries &mdash; Sweden, Norway, Denmark, and Finland &mdash;
          are among the most attractive markets in Europe for search fund
          acquisitions. Each offers a well-developed SME sector, high-trust
          business culture, strong legal frameworks, and transparent regulatory
          environments. However, each Nordic country has its own corporate
          forms, tax rules, labor law frameworks, and governance requirements
          that search fund entrepreneurs must understand before structuring an
          acquisition. This guide provides a comparative overview of the
          principal entity types in each Nordic jurisdiction, their tax
          regimes, labor law considerations, and the structural planning
          needed for successful acquisitions across the region. For a broader
          overview of the Nordic ETA landscape, see our guide to{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link>.
        </p>

        <h2 className={h2Class}>Swedish entity structures</h2>
        <p>
          Sweden has the largest and most developed search fund ecosystem in
          the Nordics. The primary corporate form used for acquisitions is
          the Aktiebolag (AB), the Swedish limited liability company.
        </p>

        <h3 className={h3Class}>Aktiebolag (AB)</h3>
        <p>
          The Aktiebolag is the standard corporate form for Swedish businesses
          of any meaningful size. Swedish law distinguishes between private
          ABs (privat aktiebolag) and public ABs (publikt aktiebolag), with
          virtually all search fund acquisitions involving private ABs. The
          minimum share capital for a private AB is SEK 25,000 (approximately
          EUR 2,200), which was reduced from SEK 50,000 in 2020 to encourage
          entrepreneurship. Key characteristics include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Limited liability:</strong> Shareholders&apos; liability is
            limited to their capital contribution, provided that statutory
            capital requirements are maintained. However, Swedish law imposes
            personal liability on board members if the company&apos;s equity
            falls below half of the registered share capital and a mandatory
            liquidation procedure is not followed.
          </li>
          <li>
            <strong>Board composition:</strong> A private AB must have at least
            one board member and one deputy, or at least two board members
            without a deputy. There is no legal requirement for the board to
            include employee representatives in companies with fewer than 25
            employees, but companies with 25 or more employees must accommodate
            employee board representation if requested by local trade unions.
          </li>
          <li>
            <strong>Share transfer:</strong> Private ABs can include share
            transfer restrictions in their articles of association, including
            pre-emption rights (f&ouml;rk&ouml;psr&auml;tt), consent clauses
            (samtyckesf&ouml;rbehall), and first refusal rights
            (hembudsf&ouml;rbehall). These restrictions are standard in
            Swedish SMEs and must be carefully reviewed during acquisition
            due diligence.
          </li>
          <li>
            <strong>Auditor requirement:</strong> Private ABs may opt out of
            appointing an auditor if they meet at least two of three criteria:
            average of no more than three employees, net turnover of no more
            than SEK 3 million, and balance sheet total of no more than
            SEK 1.5 million. Most acquisition-sized businesses will require
            an auditor.
          </li>
        </ul>

        <h3 className={h3Class}>Swedish tax regime</h3>
        <p>
          Sweden imposes a corporate income tax of 20.6% on Swedish ABs. This
          rate is competitive within the EU and applies to worldwide income
          for Swedish tax-resident companies. Key tax features for search fund
          acquirers include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Participation exemption:</strong> Capital gains on the sale
            of shares in subsidiaries held for business purposes
            (n&auml;ringsbetingade andelar) are exempt from Swedish corporate
            tax, provided certain conditions are met (typically a holding of
            at least 10% for at least one year). Dividends from such
            subsidiaries are also exempt. This makes Sweden an attractive
            jurisdiction for{" "}
            <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">holding company structures</Link>.
          </li>
          <li>
            <strong>Interest deductibility:</strong> Sweden has strict
            limitations on the deductibility of interest on intra-group debt.
            The general rule limits interest deductions to 30% of EBITDA, with
            additional restrictions on interest payments to related parties in
            low-tax jurisdictions.
          </li>
          <li>
            <strong>Group contributions:</strong> Swedish group companies that
            are part of a fiscal group (koncernbidrag) can make group
            contributions to transfer taxable income between group members.
            This allows a holding company&apos;s interest expenses to be
            offset against the operating subsidiary&apos;s profits, similar
            to fiscal consolidation regimes in other European countries.
          </li>
        </ul>

        <h2 className={h2Class}>Norwegian entity structures</h2>
        <p>
          Norway, while not an EU member, participates in the European
          Economic Area (EEA) and has corporate structures that closely
          parallel those of its Nordic neighbors.
        </p>

        <h3 className={h3Class}>Aksjeselskap (AS)</h3>
        <p>
          The Aksjeselskap is Norway&apos;s private limited liability company
          and the most common form for SME acquisitions. The minimum share
          capital is NOK 30,000 (approximately EUR 2,600). Norwegian
          corporate law was modernized significantly in 2013, simplifying
          formation and governance requirements for smaller companies.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Board requirements:</strong> An AS with share capital
            below NOK 3 million may have a single board member. Companies
            with more than 30 employees must have at least three board
            members, and companies with more than 50 employees must include
            employee representatives on the board.
          </li>
          <li>
            <strong>Share transfer restrictions:</strong> Unless the articles
            of association provide otherwise, shares in a Norwegian AS are
            subject to board approval for transfer and existing shareholders
            have statutory pre-emption rights. These default rules can be
            modified or removed in the articles.
          </li>
          <li>
            <strong>General manager requirement:</strong> Norwegian ASs are
            required to have a general manager (daglig leder) unless the
            articles of association provide otherwise for companies with share
            capital below NOK 3 million. The general manager handles day-to-day
            management and reports to the board.
          </li>
        </ul>

        <h3 className={h3Class}>Norwegian tax regime</h3>
        <p>
          Norway imposes a corporate income tax of 22% on worldwide income of
          Norwegian tax-resident companies. Key features include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Participation exemption (fritaksmetoden):</strong>
            Norway&apos;s exemption method provides that capital gains and
            dividends on qualifying shareholdings (generally 10% or more,
            held for at least two years) within the EEA are exempt from
            corporate tax. A 3% inclusion applies to dividends received
            (creating an effective tax rate of 0.66% on exempt dividends),
            but capital gains remain fully exempt.
          </li>
          <li>
            <strong>Group contribution:</strong> Norwegian companies within
            the same group (more than 90% ownership) can make group
            contributions (konsernbidrag) to transfer taxable income,
            providing a mechanism for offsetting holding company losses
            against operating profits.
          </li>
          <li>
            <strong>Wealth tax:</strong> Norway uniquely imposes a wealth tax
            on individual shareholders, which can affect the after-tax
            returns for Norwegian-resident search fund investors. Corporate
            shareholders are not subject to wealth tax.
          </li>
        </ul>

        <h2 className={h2Class}>Danish entity structures</h2>
        <p>
          Denmark offers two main corporate forms relevant to search fund
          acquisitions: the Anpartsselskab (ApS) and the Aktieselskab (A/S).
        </p>

        <h3 className={h3Class}>Anpartsselskab (ApS)</h3>
        <p>
          The ApS is Denmark&apos;s private limited company and the most
          common form for smaller acquisitions. Since 2014, the minimum
          capital requirement has been DKK 40,000 (approximately EUR 5,400).
          The ApS is characterized by flexible governance rules and relatively
          light administrative requirements, making it well-suited for
          search fund acquisition vehicles.
        </p>

        <h3 className={h3Class}>Aktieselskab (A/S)</h3>
        <p>
          The A/S is Denmark&apos;s public limited company, requiring minimum
          share capital of DKK 400,000 (approximately EUR 54,000). While
          search fund targets may be organized as A/S companies (particularly
          larger, more established businesses), the ApS is more commonly used
          for acquisition holding companies due to its lower capital
          requirements and simpler governance.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Board and management:</strong> An ApS is not required to
            have a board of directors; management can be conducted solely
            by one or more directors (direkt&oslash;r). An A/S must have a
            board of directors with at least three members. Companies with
            35 or more employees must offer employee representation on the
            board.
          </li>
          <li>
            <strong>Share transfer:</strong> ApS shares are freely
            transferable unless the articles of association impose
            restrictions. Common restrictions include pre-emption rights,
            consent requirements, and tag-along/drag-along provisions.
          </li>
          <li>
            <strong>Auditor requirements:</strong> Small ApS companies
            meeting certain thresholds (balance sheet below DKK 4 million,
            revenue below DKK 8 million, fewer than 12 employees) may opt
            out of statutory audit.
          </li>
        </ul>

        <h3 className={h3Class}>Danish tax regime</h3>
        <p>
          Denmark imposes a corporate income tax of 22% on worldwide income.
          Key features include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Participation exemption:</strong> Dividends and capital
            gains on shares in subsidiaries are exempt from Danish corporate
            tax if the parent holds at least 10% of the shares. For
            subsidiaries in non-EU/EEA treaty countries, the exemption is
            subject to additional conditions.
          </li>
          <li>
            <strong>Joint taxation (sambeskatning):</strong> Danish tax law
            requires mandatory joint taxation of all Danish entities in a
            group, meaning that profits and losses of group members are
            automatically consolidated for tax purposes. This is particularly
            beneficial for search fund structures where the holding
            company has interest expenses and the operating company has
            taxable profits.
          </li>
          <li>
            <strong>Interest limitation:</strong> Denmark limits interest
            deductions through a combination of thin capitalization rules
            (debt-to-equity ratio of 4:1) and an EBITDA rule (limiting net
            financing costs to 30% of EBITDA for amounts exceeding
            DKK 22.3 million).
          </li>
        </ul>

        <h2 className={h2Class}>Finnish entity structures</h2>

        <h3 className={h3Class}>Osakeyhti&ouml; (Oy)</h3>
        <p>
          The Osakeyhti&ouml; is Finland&apos;s limited liability company and
          the standard corporate form for SME acquisitions. Finnish corporate
          law distinguishes between private Oy companies and public Oyj
          companies, with search fund acquisitions invariably involving
          private Oy entities. The minimum share capital for a private Oy is
          EUR 2,500, making it the most accessible of the Nordic corporate
          forms in terms of capital requirements.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Board composition:</strong> A private Oy must have at
            least one board member and a deputy, or at least three board
            members. Companies with more than 150 employees must include
            employee representatives on a management body (either the board
            or a supervisory board), though this requirement can be
            negotiated through collective agreements.
          </li>
          <li>
            <strong>Managing director:</strong> The appointment of a managing
            director (toimitusjohtaja) is optional in a private Oy but is
            standard practice in operating businesses of any significant
            size.
          </li>
          <li>
            <strong>Share transfer:</strong> The articles of association of
            a Finnish Oy may include redemption clauses (lunastuslauseke)
            and consent clauses (suostumuslauseke) that restrict share
            transfers. The Finnish Companies Act also provides default
            pre-emption rights that apply unless excluded in the articles.
          </li>
        </ul>

        <h3 className={h3Class}>Finnish tax regime</h3>
        <p>
          Finland imposes a corporate income tax of 20% on worldwide income
          of Finnish tax-resident companies, making it the lowest among the
          Nordic countries. Key features include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Participation exemption:</strong> Capital gains on the
            sale of shares in subsidiaries are exempt from Finnish corporate
            tax if the selling company holds at least 10% of the shares, the
            shares have been held for at least one year, and both the selling
            company and the subsidiary are EU/EEA resident (or resident in a
            treaty country). Dividends from qualifying subsidiaries are
            similarly exempt.
          </li>
          <li>
            <strong>Group contribution:</strong> Finnish group companies
            (with a direct or indirect ownership of at least 90%) can make
            group contributions (konserniavustus) to transfer taxable income
            between group members, subject to the requirement that the
            group relationship has existed for the entire tax year.
          </li>
          <li>
            <strong>Interest limitation:</strong> Finland follows the EU
            ATAD rules on interest deductibility, limiting net interest
            deductions to 25% of EBITDA (with a de minimis exception of
            EUR 500,000 in net interest expenses).
          </li>
        </ul>

        <h2 className={h2Class}>Labor law considerations across the Nordics</h2>
        <p>
          Nordic labor law is characterized by strong employee protections,
          high unionization rates, and the &ldquo;flexicurity&rdquo; model
          that balances labor market flexibility with robust social safety
          nets. For search fund acquirers, understanding labor law is critical
          because employment costs and constraints directly affect
          operational flexibility and profitability.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Collective bargaining agreements:</strong> In all Nordic
            countries, collective bargaining agreements (CBAs) play a central
            role in determining wages, working hours, overtime, and benefits.
            Unlike in many other countries, Nordic CBAs often apply to entire
            industries or sectors rather than individual companies. Acquirers
            must identify which CBAs apply to the target&apos;s workforce and
            understand the cost implications.
          </li>
          <li>
            <strong>Employment protection:</strong> All Nordic countries
            implement the EU&apos;s Transfer of Undertakings (TUPE)
            directive (or equivalent national legislation), which ensures that
            employees&apos; rights and contracts transfer automatically to
            the new owner in a business acquisition. This means that the
            acquirer inherits the existing employment terms, including
            seniority rights, pension obligations, and notice periods.
          </li>
          <li>
            <strong>Termination protections:</strong> Dismissing employees
            in the Nordics requires just cause or objective business reasons,
            and notice periods are significantly longer than in many other
            jurisdictions. In Sweden, notice periods can extend to six months
            for employees with long tenure. In Norway and Denmark, similar
            protections apply, though with somewhat more flexibility for
            employers in certain circumstances.
          </li>
          <li>
            <strong>Co-determination:</strong> Nordic countries have strong
            co-determination traditions that give employees and their unions
            a voice in business decisions. In Sweden, the Co-Determination
            Act (MBL) requires employers to negotiate with unions before
            making significant business changes. Similar requirements exist
            in Norway and Finland, though with varying scope.
          </li>
          <li>
            <strong>Pension obligations:</strong> All Nordic countries have
            mandatory occupational pension systems with employer contributions
            that can represent a significant percentage of salary costs.
            These obligations must be carefully quantified during due
            diligence, as they represent long-term liabilities that affect
            the acquisition valuation.
          </li>
        </ul>

        <h2 className={h2Class}>Cross-Nordic deal structures</h2>
        <p>
          For search fund entrepreneurs considering acquisitions across
          multiple Nordic countries &mdash; either through initial
          acquisitions or subsequent bolt-on deals &mdash; the question of
          how to structure the group across jurisdictions becomes important.
          Key considerations include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Choice of holding jurisdiction:</strong> Each Nordic
            country offers attractive features for holding companies, but
            Sweden&apos;s combination of a broad participation exemption,
            extensive treaty network, and established ETA ecosystem makes
            it the most common choice for Nordic-focused holding structures.
            For an in-depth analysis of holding company options, see our
            guide to{" "}
            <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">holding company structures</Link>.
          </li>
          <li>
            <strong>Tax treaty network:</strong> All Nordic countries have
            extensive tax treaty networks and bilateral treaties with each
            other. The Nordic Tax Treaty (Nordiska skatteavtalet) provides
            a unified framework for cross-Nordic transactions, including
            elimination of withholding tax on inter-corporate dividends
            in most cases.
          </li>
          <li>
            <strong>Transfer pricing:</strong> Cross-Nordic groups must
            comply with transfer pricing rules in each jurisdiction. All
            Nordic countries follow the OECD Transfer Pricing Guidelines and
            require arm&apos;s-length pricing on intercompany transactions.
            Documentation requirements vary by country and by the size of
            the group.
          </li>
          <li>
            <strong>Financing structures:</strong> Intercompany loans
            between Nordic entities are subject to interest deductibility
            limitations in each jurisdiction. Structuring the debt-equity
            mix across the group requires careful{" "}
            <Link href="/learn/tax-planning-acquisitions" className="text-apple-accent hover:underline">tax planning</Link>{" "}
            to optimize the overall effective tax rate.
          </li>
          <li>
            <strong>Exit planning:</strong> The choice of holding
            jurisdiction and group structure affects the tax efficiency of
            the eventual exit. With participation exemptions available in
            all Nordic countries, the sale of subsidiary shares can
            generally be structured to be exempt from corporate tax at the
            holding company level. Understanding the interaction of
            these regimes across{" "}
            <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">cross-border transactions</Link>{" "}
            is essential for maximizing after-tax returns.
          </li>
        </ul>

        <h2 className={h2Class}>Minority shareholder protections</h2>
        <p>
          Nordic corporate law provides strong protections for minority
          shareholders, which search fund acquirers must understand both as
          potential majority owners and as structurers of investor co-investment
          arrangements.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Qualified majority requirements:</strong> All Nordic
            jurisdictions require supermajority votes (typically two-thirds
            of votes cast and shares represented at the general meeting) for
            fundamental corporate changes such as amendments to the articles
            of association, share issues, mergers, and liquidation.
          </li>
          <li>
            <strong>Minority buy-out rights:</strong> In most Nordic
            countries, a shareholder who acquires more than 90% of the shares
            in a company has the right to compulsorily purchase the remaining
            minority shares. Conversely, minority shareholders have the right
            to demand that the majority shareholder buy their shares at fair
            value.
          </li>
          <li>
            <strong>Equal treatment principle:</strong> Nordic corporate
            law emphasizes the equal treatment of shareholders. Transactions
            that benefit the majority shareholder at the expense of the
            minority (related-party transactions, selective dividends,
            unfair share issues) can be challenged by minority shareholders.
          </li>
          <li>
            <strong>Shareholder agreements:</strong> In practice, search
            fund acquisitions in the Nordics rely heavily on shareholder
            agreements (aktie&auml;garavtal in Swedish, aksjeeieravtale in
            Norwegian) to supplement the statutory framework. These
            agreements typically cover governance rights, exit mechanisms,
            drag-along and tag-along rights, non-compete obligations, and
            dividend policy.
          </li>
        </ul>

        <h2 className={h2Class}>Practical recommendations</h2>
        <p>
          For search fund entrepreneurs targeting the Nordic market, the
          following practical steps will help navigate the structural
          complexity:
        </p>
        <ul className={ulClass}>
          <li>
            Engage a local corporate law firm in the target country early
            in the process. Nordic corporate law is well-developed but has
            important nuances that general international counsel may miss.
          </li>
          <li>
            Conduct thorough labor law due diligence, including a review
            of all applicable collective bargaining agreements, individual
            employment contracts, pension obligations, and any pending
            labor disputes.
          </li>
          <li>
            Model the full tax structure including holding company costs,
            group contribution or joint taxation benefits, withholding
            taxes, and exit taxation before selecting the acquisition
            vehicle and jurisdiction.
          </li>
          <li>
            For cross-Nordic acquisitions, consider whether a Swedish
            holding structure provides the optimal combination of tax
            efficiency, treaty access, and operational familiarity. Review
            our guide to{" "}
            <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">the best countries to buy a business</Link>{" "}
            for a broader comparative perspective.
          </li>
          <li>
            Budget for higher professional advisory costs than in some
            other European markets. Nordic professional services are
            high-quality but reflect the region&apos;s overall cost
            structure.
          </li>
        </ul>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Swedish Companies Act (Aktiebolagslagen 2005:551)</li>
          <li>Norwegian Private Limited Liability Companies Act (Aksjeloven, LOV-1997-06-13-44)</li>
          <li>Danish Companies Act (Selskabsloven, Act No. 470/2009)</li>
          <li>Finnish Companies Act (Osakeyhti&ouml;laki 624/2006)</li>
          <li>Nordic Council of Ministers, <em>Nordic Tax Treaty Commentary</em></li>
          <li>PwC, <em>Doing Business in Sweden / Norway / Denmark / Finland</em> (annual publications)</li>
          <li>Deloitte, <em>Taxation and Investment in the Nordic Countries</em></li>
          <li>IESE Business School, <em>International Search Funds &mdash; Selected Observations</em> (2024)</li>
        </ul>

        <h2 className={h2Class}>Related resources</h2>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">Holding Company Structures for Search Funds</Link>
          </li>
          <li>
            <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link>
          </li>
          <li>
            <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">Cross-Border Acquisitions: A Complete Guide</Link>
          </li>
          <li>
            <Link href="/learn/tax-planning-acquisitions" className="text-apple-accent hover:underline">Tax Planning for Acquisitions</Link>
          </li>
          <li>
            <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">Best Countries to Buy a Business</Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
