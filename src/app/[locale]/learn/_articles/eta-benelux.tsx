import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETABeneluxArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in the Benelux: Netherlands, Belgium &amp; Luxembourg</h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          The Benelux countries&mdash;the Netherlands, Belgium, and
          Luxembourg&mdash;form a compact but economically powerful region
          at the heart of Europe that offers compelling opportunities for
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">Entrepreneurship Through Acquisition</Link>. With a combined GDP exceeding
          &euro;1.2 trillion, a highly internationalized business culture,
          and a massive wave of business succession needs, the Benelux
          provides search fund entrepreneurs with deep deal flow, sophisticated
          financing options, and strategic geographic positioning for
          pan-European growth. The Netherlands in particular has emerged as
          one of Europe&apos;s most promising ETA markets, combining a
          startup-friendly entrepreneurial culture with the practical needs
          of an aging SME ownership base.
        </p>

        <h2 className={h2Class}>The Dutch market landscape</h2>
        <p>
          The Netherlands is the dominant economy in the Benelux region and
          one of the most attractive ETA markets in Europe. With approximately
          2.1 million businesses and a GDP of roughly &euro;950 billion, the
          Dutch economy punches well above its weight internationally. Dutch
          businesses are known for their global orientation&mdash;the
          Netherlands is the world&apos;s fifth-largest exporter&mdash;and many
          SMEs operate in international niche markets.
        </p>
        <p>
          The succession challenge in the Netherlands is particularly acute.
          Industry estimates suggest that approximately 40% of Dutch
          entrepreneurs are over 55 years old, and a large proportion have
          no identified successor. The Dutch government&apos;s MKB (Midden- en
          Kleinbedrijf, or SME) statistics indicate that tens of thousands
          of businesses will need to transfer ownership in the coming decade.
          This creates substantial deal flow for search fund entrepreneurs.
        </p>

        <h2 className={h2Class}>Legal structures: the Netherlands</h2>
        <p>
          For a general introduction to how search funds are typically organized, see our guide to <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">search fund legal structures</Link>.
        </p>
        <h3 className={h3Class}>Besloten Vennootschap (BV)</h3>
        <p>
          The BV is the Dutch private limited company and the standard
          corporate form for SMEs. Since the Flex-BV reform in 2012, there
          is no minimum capital requirement (previously &euro;18,000), making
          it one of the most flexible corporate forms in Europe. BV shares
          can have different classes with varying voting and economic rights,
          which is useful for structuring search fund investments. Share
          transfers require a notarial deed executed before a Dutch civil-law
          notary (notaris), adding a layer of formality to transactions.
        </p>

        <h3 className={h3Class}>Naamloze Vennootschap (NV)</h3>
        <p>
          The NV is the Dutch public limited company, requiring minimum
          share capital of &euro;45,000. NVs are less common among SMEs
          but are found among larger family businesses and any company
          that has or plans to issue securities to the public. The NV
          structure offers more flexibility for share transfers than the
          BV, as shares can generally be freely transferred unless
          restricted by the articles of association.
        </p>

        <h3 className={h3Class}>Netherlands holding company advantage</h3>
        <p>
          The Netherlands has long been recognized as one of Europe&apos;s
          most attractive jurisdictions for holding company structures.
          The Dutch participation exemption (deelnemingsvrijstelling) fully
          exempts dividends and capital gains received from qualifying
          subsidiaries from Dutch corporate tax. Combined with the
          Netherlands&apos; extensive double tax treaty network (one of the
          largest in the world), this makes Dutch holding structures
          highly efficient for search fund acquisitions with cross-border
          growth ambitions. A Dutch HoldCo can serve as an ideal platform
          for a buy-and-build strategy across Europe.
        </p>

        <h2 className={h2Class}>Legal structures: Belgium</h2>
        <h3 className={h3Class}>Besloten Vennootschap (BV) / Soci&eacute;t&eacute; &agrave; Responsabilit&eacute; Limit&eacute;e (SRL)</h3>
        <p>
          Following Belgium&apos;s major corporate law reform in 2019 (the
          new Code of Companies and Associations), the former BVBA/SPRL
          was replaced by the BV/SRL as the standard private limited company
          form. The reformed BV/SRL has no minimum capital requirement,
          though founders must ensure &ldquo;sufficient initial equity&rdquo;
          based on a financial plan. This flexibility makes the BV/SRL the
          most common vehicle for Belgian SME acquisitions.
        </p>

        <h3 className={h3Class}>Naamloze Vennootschap (NV) / Soci&eacute;t&eacute; Anonyme (SA)</h3>
        <p>
          The Belgian NV/SA requires minimum capital of &euro;61,500 and
          is used for larger businesses. Share transfers in an NV/SA are
          generally unrestricted unless the articles provide otherwise.
          The NV/SA structure is found among larger family businesses and
          is sometimes preferred for acquisitions where the acquirer plans
          to raise capital from multiple investor sources.
        </p>

        <h2 className={h2Class}>Legal structures: Luxembourg</h2>
        <h3 className={h3Class}>Soci&eacute;t&eacute; Anonyme (SA)</h3>
        <p>
          The Luxembourg SA requires minimum share capital of &euro;30,000
          (with at least 25% paid up at incorporation). SAs are common among
          larger businesses and holding companies. Luxembourg&apos;s SA
          structure offers significant flexibility for share transfers and
          corporate governance arrangements.
        </p>

        <h3 className={h3Class}>Soci&eacute;t&eacute; &agrave; Responsabilit&eacute; Limit&eacute;e (SARL)</h3>
        <p>
          The Luxembourg SARL requires minimum capital of &euro;12,000 and
          is the standard form for smaller businesses. Share transfers in a
          SARL require approval from a majority of members representing at
          least three-quarters of the capital, unless the articles provide
          otherwise. The SARL is the most common target for search fund
          acquisitions of Luxembourg-based businesses.
        </p>

        <h2 className={h2Class}>The Dutch succession wave</h2>
        <p>
          The Netherlands faces one of Europe&apos;s most significant
          business succession challenges. With 40% of entrepreneurs over 55,
          the country is approaching a critical inflection point where
          thousands of viable businesses will need new ownership. Several
          factors amplify the opportunity for search fund entrepreneurs.
        </p>
        <ul className={ulClass}>
          <li><strong>Limited family succession:</strong> Dutch culture has become increasingly individualistic, and many children of business owners pursue corporate careers or entrepreneurial ventures of their own rather than taking over the family business.</li>
          <li><strong>MBO limitations:</strong> Management buyouts, while common, are limited by the financial capacity and risk appetite of existing managers. Many potential MBO candidates lack the capital or desire to become owners.</li>
          <li><strong>PE gap:</strong> Private equity firms in the Netherlands generally focus on businesses with EBITDA above &euro;3&ndash;5 million, leaving a large pool of smaller businesses underserved by institutional capital.</li>
          <li><strong>Government awareness:</strong> The Dutch government has recognized business succession as a national economic priority and has introduced programs to facilitate ownership transitions, including tax incentives and advisory support.</li>
        </ul>

        <h2 className={h2Class}>Financing in the Benelux</h2>
        <p>
          For a comprehensive overview of how searchers fund their deals, see our guide to <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition financing</Link>.
        </p>
        <h3 className={h3Class}>MKB financing in the Netherlands</h3>
        <p>
          Dutch banks&mdash;including Rabobank, ING, ABN AMRO, and de
          Volksbank&mdash;all have dedicated MKB (SME) lending divisions
          that actively finance business acquisitions. Rabobank, with its
          deep roots in the Dutch SME community and extensive branch network,
          is particularly well-positioned for search fund transactions.
          Typical leverage for acquisition financing ranges from 3x to 4x
          EBITDA, with interest rates that are generally competitive within
          the European context.
        </p>

        <h3 className={h3Class}>Qredits</h3>
        <p>
          Qredits is a Dutch social-purpose microfinance organization that
          provides loans to entrepreneurs who may not qualify for traditional
          bank financing. Qredits offers business loans of up to &euro;250,000
          with terms of up to ten years, as well as microloans for smaller
          amounts. While the loan sizes may be too small for most search fund
          acquisitions, Qredits can serve as a complementary funding source or
          can finance the initial search phase. The organization also provides
          coaching and mentorship to borrowers.
        </p>

        <h3 className={h3Class}>Regional development banks</h3>
        <p>
          The Netherlands has several regional development organizations
          (Regionale Ontwikkelingsmaatschappijen, or ROMs) that invest in and
          lend to regional businesses. Prominent ROMs include Oost NL (eastern
          Netherlands), BOM (Brabant), and LIOF (Limburg). These organizations
          can provide subordinated loans, equity co-investments, or guarantees
          that complement senior bank debt in acquisition structures. Their
          mandate to support regional economic development makes them natural
          allies for search fund entrepreneurs targeting businesses outside
          the Randstad.
        </p>

        <h3 className={h3Class}>Belgian financing landscape</h3>
        <p>
          Belgian banks such as KBC, BNP Paribas Fortis, Belfius, and ING
          Belgium provide acquisition financing for SME transactions.
          Belgium also has a network of public investment companies
          (investeringsmaatschappijen) at the regional level: PMV in
          Flanders, SRIW/Sogepa in Wallonia, and finance.brussels in
          Brussels. These institutions can provide subordinated loans or
          equity to support business succession transactions.
        </p>

        <h2 className={h2Class}>Cross-border considerations</h2>
        <p>
          The Benelux region&apos;s compact geography and economic integration
          create both opportunities and complexities for search fund
          entrepreneurs. Several cross-border factors deserve attention.
        </p>
        <ul className={ulClass}>
          <li><strong>Language diversity:</strong> The Benelux encompasses Dutch, French, German, and Luxembourgish. In Belgium alone, business may be conducted in Dutch (Flanders), French (Wallonia), or both (Brussels). Searchers targeting the entire region need multilingual capabilities.</li>
          <li><strong>Regulatory differences:</strong> Despite EU harmonization, significant differences exist in company law, labor law, tax, and regulatory requirements across the three countries. Each jurisdiction requires country-specific legal and tax advice.</li>
          <li><strong>Customer overlap:</strong> Many Benelux SMEs serve customers across all three countries, making the region a natural platform for cross-border consolidation strategies.</li>
          <li><strong>Talent mobility:</strong> The Benelux labor market is highly mobile, with many professionals working across borders. This facilitates post-acquisition talent recruitment and management integration.</li>
        </ul>

        <h2 className={h2Class}>Belgium&apos;s three-region complexity</h2>
        <p>
          Belgium&apos;s federal structure divides the country into three
          regions (Flanders, Wallonia, and Brussels-Capital) and three
          linguistic communities (Dutch-speaking, French-speaking, and
          German-speaking). This structure creates a unique set of
          considerations for search fund entrepreneurs.
        </p>
        <ul className={ulClass}>
          <li><strong>Regional economic agencies:</strong> Each region has its own economic development agency and investment programs. Flanders Investment and Trade (FIT), the Walloon Export and Foreign Investment Agency (AWEX), and hub.brussels each operate independently.</li>
          <li><strong>Employment regulations:</strong> While federal labor law applies nationwide, regional and community-level regulations affect aspects of employment, training, and social security.</li>
          <li><strong>Tax incentives:</strong> Certain tax incentives and subsidies are administered at the regional level and vary between Flanders, Wallonia, and Brussels.</li>
          <li><strong>Business culture:</strong> Business culture differs notably between the Dutch-speaking Flanders (more Germanic, direct, consensus-oriented) and French-speaking Wallonia (more Latin, relationship-driven, hierarchical). Understanding these differences is critical for successful deal-making and post-acquisition management.</li>
          <li><strong>Market segmentation:</strong> Some industries are effectively segmented along linguistic lines, with Flemish and Walloon markets operating somewhat independently. This can create both challenges and roll-up opportunities.</li>
        </ul>

        <h2 className={h2Class}>The Netherlands&apos; startup culture applied to ETA</h2>
        <p>
          The Netherlands has one of the most vibrant startup ecosystems in
          Europe, concentrated around Amsterdam, Rotterdam, Eindhoven, and
          Utrecht. This entrepreneurial energy has increasingly been directed
          toward ETA, with a growing number of Dutch entrepreneurs choosing
          acquisition over starting from scratch. Several factors explain
          this trend.
        </p>
        <ul className={ulClass}>
          <li><strong>Risk-adjusted returns:</strong> As the Dutch startup ecosystem has matured, more entrepreneurs recognize that acquiring an existing profitable business offers better risk-adjusted returns than building a startup from zero.</li>
          <li><strong>MBA influence:</strong> RSM Erasmus University, TIAS, and Nyenrode Business University have all introduced ETA-related content into their curricula, exposing Dutch MBA students to the search fund model.</li>
          <li><strong>Investor sophistication:</strong> Dutch angel investors and family offices that previously focused on startups are increasingly allocating capital to search funds, attracted by the lower failure rate and more predictable return profile.</li>
          <li><strong>Ecosystem infrastructure:</strong> The infrastructure developed for the Dutch startup ecosystem&mdash;legal advisors, accountants, investor networks, co-working spaces&mdash;is readily adaptable to support search fund activity.</li>
        </ul>

        <h2 className={h2Class}>Tax-efficient holding structures</h2>
        <p>
          Each Benelux country offers <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">tax-efficient structuring</Link> opportunities
          for search fund acquisitions, though the specifics vary significantly.
        </p>
        <ul className={ulClass}>
          <li><strong>Netherlands participation exemption:</strong> As noted above, the Dutch deelnemingsvrijstelling exempts dividends and capital gains from qualifying subsidiaries. The corporate tax rate is 25.8% (2024) with a lower rate of 19% on the first &euro;200,000 of taxable income.</li>
          <li><strong>Belgium&apos;s innovation income deduction:</strong> Belgium offers an 85% deduction for qualifying innovation income, effectively reducing the tax rate on IP-related profits to approximately 3.75%. For technology-enabled businesses, this can be highly attractive.</li>
          <li><strong>Luxembourg&apos;s SOPARFI:</strong> The Soci&eacute;t&eacute; de Participations Financi&egrave;res (SOPARFI) is a widely used Luxembourg holding structure that benefits from participation exemptions on dividends and capital gains, combined with Luxembourg&apos;s extensive treaty network.</li>
          <li><strong>Interest deductibility:</strong> All three countries allow interest deductions on acquisition debt, subject to limitations. The EU Anti-Tax Avoidance Directive limits net interest deductions to 30% of EBITDA (or &euro;3 million, whichever is higher) across all three jurisdictions.</li>
        </ul>

        <h2 className={h2Class}>Typical deal parameters</h2>
        <ul className={ulClass}>
          <li><strong>Revenue:</strong> &euro;2 million to &euro;20 million annual turnover.</li>
          <li><strong>EBITDA:</strong> &euro;500,000 to &euro;3 million.</li>
          <li><strong>Valuation multiples:</strong> 4x to 7x EBITDA in the Netherlands and Belgium; Luxembourg businesses may command premiums due to the smaller market and higher average quality.</li>
          <li><strong>Sectors:</strong> B2B services, technology-enabled services, specialist manufacturing, logistics, and food and agriculture are popular sectors across the Benelux.</li>
          <li><strong>Financing:</strong> Typical structures involve 50&ndash;60% senior debt, 10&ndash;15% subordinated or government-backed financing, 10&ndash;20% seller financing, and 20&ndash;30% investor equity.</li>
        </ul>

        <h2 className={h2Class}>Practical advice for Benelux searchers</h2>
        <ul className={ulClass}>
          <li><strong>Country focus:</strong> While the Benelux is compact, the legal, tax, and cultural differences between countries are significant. Most searchers benefit from focusing on one country initially and expanding cross-border post-acquisition.</li>
          <li><strong>Notarial system:</strong> Both the Netherlands and Belgium use a civil-law notarial system for corporate transactions. Share transfers, articles of association amendments, and other corporate actions must be executed before a notary, adding cost and formality to the process.</li>
          <li><strong>Works councils:</strong> Dutch companies with 50 or more employees must have a works council (ondernemingsraad) that has advisory rights on major business decisions, including ownership changes. Belgian companies have similar requirements. Engaging with works councils early is essential.</li>
          <li><strong>Professional networks:</strong> Join MKB-Nederland (Dutch SME association), UNIZO or VOKA (Flemish employer organizations), or UCM (Walloon SME association) to access deal flow and build credibility.</li>
          <li><strong>Due diligence standards:</strong> Dutch and Belgian businesses generally maintain high-quality financial records, but pension obligations, environmental liabilities, and labor commitments require careful scrutiny during due diligence.</li>
        </ul>
      </div>
    </article>
  );
}
