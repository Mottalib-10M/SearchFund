import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAFranceArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in France: How to Acquire a Business</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          France is one of the most dynamic markets for <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">Entrepreneurship Through
          Acquisition in Europe</Link>. With approximately 700,000 businesses expected
          to change hands in the coming decade and strong government support for
          business transfers, France offers exceptional opportunities for search
          fund entrepreneurs. The presence of top-tier business schools like
          INSEAD in Fontainebleau, HEC Paris, and ESSEC has created a thriving
          ecosystem of searchers, investors, and advisors. INSEAD alumni in
          particular have been at the forefront of ETA in France, leveraging
          the school&apos;s global network to connect with international investors
          while targeting French SMEs.
        </p>

        <h2 className={h2Class}>The French market landscape</h2>
        <p>
          France has over 3.9 million SMEs, representing 99.9% of all companies.
          Many are owned by founders in their late 50s and 60s who have no family
          successor. The French government actively encourages business transfers
          through tax incentives, financing programs (BPI France), and regulatory
          frameworks designed to facilitate ownership transitions.
        </p>
        <p>
          The scale of the opportunity is striking. According to BPCE
          Observatory research, roughly 60,000 to 70,000 businesses change
          hands each year in France, yet the government estimates that an
          additional 30,000 viable companies are shuttered annually simply
          because no buyer comes forward. This gap represents a significant
          white-space for search fund entrepreneurs who can identify, acquire,
          and operate profitable small businesses that would otherwise disappear.
        </p>
        <p>
          Demographically, the wave is accelerating. The baby-boom generation
          of French business owners is reaching retirement age, and unlike
          earlier decades, fewer of their children intend to take over the
          family enterprise. A CCI (Chambre de Commerce et d&apos;Industrie) survey
          found that only 10-15% of business transfers now go to a family
          member, compared to nearly 50% two decades ago. The remaining 85-90%
          must find an external buyer &mdash; precisely the profile of an ETA
          searcher.
        </p>

        <h2 className={h2Class}>Key sectors for ETA in France</h2>
        <p>
          While search fund entrepreneurs can target any sector, several
          industries stand out in the French market for their combination of
          recurring revenue, fragmentation, and succession-driven deal flow.
        </p>

        <h3 className={h3Class}>B2B services</h3>
        <p>
          Business-to-business services represent the most popular sector for
          ETA in France. This includes IT managed services, consulting,
          staffing, facility management, industrial maintenance, and
          professional services firms. These businesses tend to have high
          recurring revenue, low capital expenditure requirements, and sticky
          client relationships. France&apos;s dense network of mid-sized cities
          (Lyon, Nantes, Bordeaux, Toulouse, Lille) each host clusters of B2B
          service companies that serve regional enterprise clients.
        </p>

        <h3 className={h3Class}>Healthcare and medical services</h3>
        <p>
          France&apos;s healthcare system, while predominantly public, relies
          heavily on private laboratories, clinics, veterinary practices, and
          medical device distributors. Many of these are founder-operated
          businesses generating EUR 2-10 million in revenue with strong margins.
          Regulatory barriers to entry provide natural moats, and demographic
          trends (aging population) ensure growing demand.
        </p>

        <h3 className={h3Class}>Specialized manufacturing</h3>
        <p>
          France retains a significant manufacturing base, particularly in
          aerospace (Toulouse corridor), automotive (northern France), luxury
          goods, and food processing. The industrial regions of Auvergne-Rhone-Alpes,
          Hauts-de-France, and Grand Est contain thousands of specialized
          manufacturers with EUR 3-15 million in revenue. These companies
          often hold proprietary processes or certifications (ISO, EN, AS/EN
          for aerospace) that create defensible market positions.
        </p>

        <h3 className={h3Class}>Tech-enabled traditional businesses</h3>
        <p>
          An emerging opportunity lies in acquiring traditional French
          businesses and accelerating their digital transformation. France&apos;s
          &ldquo;French Tech&rdquo; ecosystem has produced world-class engineering talent,
          and searchers with a technology background can create significant
          value by modernizing operations, implementing SaaS tools, and
          building e-commerce channels for companies still reliant on legacy
          systems.
        </p>

        <h2 className={h2Class}>Legal structures for acquisition</h2>
        <p>
          For a general overview of how search funds are typically structured, see our guide to <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">search fund legal structures</Link>.
        </p>

        <h3 className={h3Class}>The French legal landscape: SAS vs. SARL</h3>
        <p>
          Understanding French corporate forms is essential before structuring
          a deal. The two most common legal entities for SMEs in France are the
          SAS (Societe par Actions Simplifiee) and the SARL (Societe a
          Responsabilite Limitee).
        </p>
        <p>
          The <strong>SAS</strong> has become the preferred structure for search
          fund acquisitions. It offers maximum flexibility in drafting bylaws
          (statuts), allows multiple classes of shares with different voting
          and economic rights, and makes it straightforward to implement
          management equity packages (BSPCE, AGA, BSA). The SAS president
          (President) benefits from the social security regime for
          &ldquo;assimiles salaries,&rdquo; providing better social protection
          than the independent worker regime.
        </p>
        <p>
          The <strong>SARL</strong> is simpler and less expensive to administer
          but more rigid. Share transfers require approval from existing
          shareholders (agrement), and there is less flexibility for creating
          complex equity structures. Many target companies &mdash; especially
          older ones &mdash; are structured as SARLs, and buyers often convert
          them to SAS post-acquisition to gain structural flexibility.
        </p>
        <p>
          For searchers acquiring a SARL, be aware that the gerant (managing
          director) who holds more than 50% of shares is classified as a
          travailleur non-salarie (TNS), which carries lower social charges
          but also lower social protection. This distinction has meaningful
          implications for personal insurance and retirement planning.
        </p>

        <h3 className={h3Class}>Share purchase (cession de parts/actions)</h3>
        <p>
          The most common structure in search fund acquisitions. The buyer
          acquires the shares of the existing company, taking over all assets,
          liabilities, contracts, and employees. This provides continuity for
          clients, suppliers, and staff.
        </p>

        <h3 className={h3Class}>Asset purchase (cession de fonds de commerce)</h3>
        <p>
          Less common for search funds but sometimes used for specific situations.
          The buyer acquires the business assets (goodwill, equipment, inventory,
          contracts) but not the corporate entity or its liabilities.
        </p>

        <h3 className={h3Class}>Holding company structure</h3>
        <p>
          Most search fund acquisitions in France are structured through a
          holding company (holding de reprise) that acquires the target. This
          enables tax-efficient debt service through the &ldquo;integration
          fiscale&rdquo; regime and facilitates future add-on acquisitions. Learn more about <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">tax optimization strategies</Link> for search fund structures.
        </p>

        <h2 className={h2Class}>Employment law and the Comite Social et Economique (CSE)</h2>
        <p>
          French employment law is among the most protective in Europe, and
          every searcher must understand its implications before closing a deal.
          Employment contracts (CDI &mdash; contrat a duree indeterminee) transfer
          automatically with the business under Article L.1224-1 of the French
          Labor Code. You cannot selectively terminate employees as part of a
          share acquisition; all contracts, seniority, and benefits carry over.
        </p>
        <p>
          The <strong>Comite Social et Economique (CSE)</strong>, which replaced
          the older comite d&apos;entreprise and delegues du personnel, must be
          established in all companies with 11 or more employees. For
          acquisitions, the CSE has a mandatory consultation right: the seller
          must inform and consult the CSE before finalizing the sale of the
          business. Failure to comply can result in the transaction being
          voided. In companies with fewer than 250 employees, CSE members
          receive a minimum of 10 hours per month of delegation time.
        </p>
        <p>
          For companies with fewer than 11 employees, the &ldquo;loi Hamon&rdquo;
          (2014) requires the seller to inform all employees of the planned
          sale at least two months before closing, giving them the right of
          first refusal to make a competing offer. While employees rarely
          exercise this right, failure to comply can result in a fine of up
          to 2% of the sale price.
        </p>
        <p>
          Practical tip: during due diligence, scrutinize the conventions
          collectives (collective bargaining agreements) that apply to the
          target company. These sector-specific agreements can dictate
          minimum salaries, bonus structures, working hours, and termination
          procedures that may be significantly more generous than the legal
          minimum. The convention collective is determined by the company&apos;s
          primary activity code (code NAF/APE) and can have a material impact
          on operating costs.
        </p>

        <h2 className={h2Class}>Financing an acquisition in France</h2>
        <p>
          For a broader overview of how searchers fund their deals, see our guide to <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition financing</Link>.
        </p>
        <ul className={ulClass}>
          <li><strong>Senior debt:</strong> French banks (BNP, SG, CM-CIC, Banque Populaire) actively finance acquisitions, typically lending 3-4x EBITDA.</li>
          <li><strong>BPI France:</strong> The public investment bank offers co-lending and guarantee programs that reduce risk for commercial banks.</li>
          <li><strong>Seller financing (credit vendeur):</strong> Common in French transactions, typically 15-30% of the price deferred over 2-3 years.</li>
          <li><strong>Search fund investor equity:</strong> The balance is funded by search fund investors through equity.</li>
        </ul>

        <h3 className={h3Class}>BPI France: the searcher&apos;s best friend</h3>
        <p>
          BPI France (Banque Publique d&apos;Investissement) is a critical
          institution for search fund entrepreneurs in France. It operates
          at multiple levels of the capital stack. Its guarantee program
          (Garantie Transmission) covers up to 70% of the bank loan in
          case of default, dramatically reducing the risk for commercial
          banks and making them more willing to lend. BPI also offers
          direct subordinated loans (prets d&apos;honneur) through its network
          of partner organizations (Reseau Entreprendre, Initiative France)
          that provide EUR 30,000-90,000 in interest-free, unsecured
          personal loans to acquirers. These prets d&apos;honneur typically
          unlock 7-10x their value in additional bank financing.
        </p>

        <h3 className={h3Class}>Regional banks and Caisses d&apos;Epargne</h3>
        <p>
          Beyond the large national banks, France&apos;s network of regional
          and mutual banks &mdash; Credit Agricole, Banque Populaire, Caisse
          d&apos;Epargne, Credit Mutuel &mdash; are often more receptive to
          acquisition financing for small businesses. These banks have deep
          local knowledge, existing relationships with target companies,
          and mandates to support regional economic development. A searcher
          targeting businesses in a specific region should build
          relationships with multiple local bankers early in the search
          process, as the branch-level decision-making culture means that
          personal rapport matters significantly.
        </p>

        <h3 className={h3Class}>Private debt and mezzanine financing</h3>
        <p>
          For larger transactions (EUR 5 million and above), private debt
          funds have become increasingly active in the French market.
          Firms such as Tikehau Capital, Eurazeo PME, and various family
          offices offer mezzanine financing with interest rates typically
          ranging from 8-12%. This layer of financing sits between senior
          bank debt and equity, enabling searchers to bridge the gap
          without excessive equity dilution. Mezzanine providers often
          accept payment-in-kind (PIK) interest during the early years,
          preserving cash flow for operations.
        </p>

        <h2 className={h2Class}>Tax considerations for ETA in France</h2>
        <p>
          France&apos;s tax regime, while complex, offers several powerful
          optimization tools for acquisition entrepreneurs when properly
          structured.
        </p>

        <h3 className={h3Class}>The Flat Tax (Prelevement Forfaitaire Unique)</h3>
        <p>
          Since 2018, France applies a flat tax of 30% on capital gains
          and investment income (12.8% income tax + 17.2% social charges).
          This replaced the previous system where capital gains were taxed
          at the individual&apos;s marginal income tax rate, which could reach
          45% plus social charges. For search fund entrepreneurs, this
          means the exit gain on a successful acquisition is taxed at a
          predictable 30%, making France competitive with other European
          jurisdictions. Taxpayers can opt for the progressive scale
          (bareme progressif) if it produces a lower rate, but this is
          rarely beneficial for substantial capital gains.
        </p>

        <h3 className={h3Class}>Holding company optimization: regime mere-fille</h3>
        <p>
          The regime mere-fille (parent-subsidiary regime) is the
          cornerstone of tax-efficient structuring for search fund
          acquisitions in France. When the holding company owns at least
          5% of the operating subsidiary for more than two years, dividends
          received from the subsidiary are 95% exempt from corporate
          income tax (only a 5% quote-part de frais et charges is taxed).
          Combined with the integration fiscale regime &mdash; which allows the
          holding company&apos;s interest expenses on acquisition debt to offset
          the subsidiary&apos;s operating profits &mdash; this structure enables
          highly efficient debt servicing.
        </p>

        <h3 className={h3Class}>PEA and PEA-PME incentives</h3>
        <p>
          The Plan d&apos;Epargne en Actions (PEA) and its SME-focused variant
          (PEA-PME) allow individuals to invest up to EUR 225,000 in
          eligible French and European SME shares with capital gains
          completely exempt from income tax after a five-year holding
          period (only 17.2% social charges apply). For search fund
          investors, this creates a tax-advantaged vehicle to co-invest
          alongside the searcher. Some search fund structures in France
          have been specifically designed to be PEA-PME eligible to
          attract French individual investors.
        </p>

        <h3 className={h3Class}>Pacte Dutreil: reduced gift and inheritance tax</h3>
        <p>
          While primarily designed for family transfers, the Pacte Dutreil
          can be relevant in specific ETA scenarios. It allows a 75%
          exemption on the value of business shares for gift and
          inheritance tax purposes, provided the shares are held for at
          least two years before and six years after the transfer. Some
          sellers structure partial donations to family members combined
          with a sale to the searcher, using Dutreil to optimize the
          overall tax burden of the succession.
        </p>

        <h2 className={h2Class}>The academic ecosystem: ETA programs in France</h2>
        <p>
          France&apos;s concentration of world-class business schools has been
          a catalyst for the growth of ETA in the country. Several
          institutions now offer dedicated programs, courses, or clubs
          focused on search funds and acquisition entrepreneurship.
        </p>

        <h3 className={h3Class}>INSEAD</h3>
        <p>
          INSEAD in Fontainebleau has been the pioneer of ETA education in
          France and arguably in all of Europe. The school&apos;s International
          Search Fund Center, led by professors who have studied the asset
          class for over a decade, publishes biennial studies on search
          fund performance in Europe. INSEAD&apos;s global alumni network is
          one of the largest sources of search fund investors in Europe,
          and the school regularly hosts search fund conferences that
          bring together searchers, investors, and operators from across
          the continent.
        </p>

        <h3 className={h3Class}>HEC Paris</h3>
        <p>
          HEC Paris has developed a strong ETA track within its MBA and
          Grande Ecole programs. The school&apos;s entrepreneurship center
          supports students exploring acquisition paths, and its alumni
          network includes a growing number of successful search fund
          operators in France. HEC&apos;s location near Paris provides easy
          access to the country&apos;s largest pool of target companies and
          financial advisors.
        </p>

        <h3 className={h3Class}>ESSEC, EM Lyon, and others</h3>
        <p>
          ESSEC Business School, EM Lyon, EDHEC, and Sciences Po have all
          begun incorporating ETA content into their curricula or hosting
          dedicated events. EM Lyon, situated in France&apos;s second-largest
          economic region, is particularly well-positioned for searchers
          targeting the Auvergne-Rhone-Alpes industrial base. The growing
          academic interest has helped legitimize ETA as a career path in
          France, attracting students who might previously have defaulted
          to consulting, banking, or startup entrepreneurship.
        </p>

        <h2 className={h2Class}>Key considerations</h2>
        <ul className={ulClass}>
          <li><strong>Labor law:</strong> French labor regulations are protective of employees. All employment contracts transfer automatically with the business.</li>
          <li><strong>Works council (CSE):</strong> Companies with 11+ employees must inform and consult the CSE before a change of ownership.</li>
          <li><strong>Garantie d&apos;actif et de passif (GAP):</strong> The French equivalent of representations and warranties, essential for buyer protection.</li>
          <li><strong>Earn-out clauses:</strong> Common to bridge valuation gaps and ensure a smooth transition period with the seller.</li>
        </ul>

        <h2 className={h2Class}>Cultural considerations for ETA in France</h2>

        <h3 className={h3Class}>Negotiation style and relationship building</h3>
        <p>
          French business culture places enormous importance on personal
          relationships, and this is amplified in SME acquisitions where
          founders are selling their life&apos;s work. Expect a longer
          courtship period than in Anglo-Saxon markets. French sellers
          want to know who you are, understand your motivations, and feel
          confident that you will preserve their legacy, take care of
          their employees, and maintain relationships with long-standing
          clients. Multiple dinners, site visits, and informal
          conversations are the norm before any LOI is signed.
        </p>
        <p>
          Negotiations tend to be more formal and structured than in the
          US or UK. French sellers often rely heavily on their accountant
          (expert-comptable) and legal advisor (avocat) for guidance, and
          these advisors can either accelerate or slow a deal
          significantly. Building rapport with the seller&apos;s trusted
          advisors early in the process is a proven strategy for
          successful searchers.
        </p>

        <h3 className={h3Class}>The language barrier</h3>
        <p>
          Unlike in Nordic countries or the Netherlands, French is the
          default language for virtually all business interactions with
          SME owners. While younger executives in larger companies may
          speak fluent English, the typical SME founder aged 55-65 in a
          regional city conducts all business in French. Financial
          statements, legal documents, contracts, and collective
          bargaining agreements are all in French. Non-French-speaking
          searchers face a significant disadvantage and will typically need
          either a French co-searcher, extensive language training, or a
          willingness to operate in a bilingual mode with translation
          support. The most successful international searchers in France
          have generally reached B2-C1 level proficiency before beginning
          their active search.
        </p>

        <h3 className={h3Class}>Regional identity and decentralization</h3>
        <p>
          France may appear centralized from the outside, but its
          business culture is deeply regional. A company in Lyon operates
          differently from one in Lille, Bordeaux, or Marseille. Regional
          pride matters: sellers want to know that their company will
          maintain its local identity and not be &ldquo;absorbed by Paris.&rdquo;
          Searchers who demonstrate genuine commitment to the region
          &mdash; by relocating there, engaging with local business networks
          (MEDEF, CCI, clubs d&apos;entreprises) &mdash; gain significant credibility
          with sellers and their communities.
        </p>

        <h2 className={h2Class}>Deal sourcing in France</h2>
        <p>
          Successful searchers in France use a combination of <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">deal sourcing strategies</Link> including direct outreach to
          business owners, intermediary networks (brokers, accountants, notaries),
          and online platforms. Key intermediary networks include CRA
          (Cedants et Repreneurs d&apos;Affaires), BPI France&apos;s transmission platform,
          and regional chambers of commerce.
        </p>
        <p>
          The role of the expert-comptable (chartered accountant) deserves
          special emphasis. In France, virtually every SME has a trusted
          accountant who often serves as a de facto business advisor.
          These professionals are frequently the first to know when a
          client is considering retirement and selling. Building a network
          of expert-comptables in your target region is one of the most
          effective proprietary deal sourcing strategies. The Ordre des
          Experts-Comptables organizes regional events that can serve as
          networking opportunities.
        </p>
        <p>
          Online platforms such as Fusacq, Transentreprise (run by CCIs),
          and BPI France Transmission list thousands of businesses for
          sale. While these tend to surface deals that are already broadly
          marketed, they provide excellent market intelligence on pricing,
          sectors, and regional deal flow. Many seasoned searchers use
          these platforms for market mapping while reserving their highest
          effort for proprietary, off-market outreach via direct mail
          campaigns and personal introductions.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How does BPI France support search fund acquisitions?</h3>

        <p>
          BPI France (Banque Publique d&apos;Investissement) is the single most important institutional supporter of business acquisitions in France. Its Garantie Transmission program covers up to 70% of the bank loan in case of default, dramatically reducing risk for commercial lenders and making them more willing to finance first-time acquirers. Beyond guarantees, BPI France facilitates access to pr&ecirc;ts d&apos;honneur&mdash;interest-free, unsecured personal loans of EUR 30,000&ndash;90,000 through partner organizations like R&eacute;seau Entreprendre and Initiative France. These pr&ecirc;ts d&apos;honneur typically unlock 7&ndash;10x their value in additional bank financing, effectively serving as a catalyst for the entire capital structure. BPI France also operates a business transmission platform that lists thousands of businesses for sale across France.
        </p>

        <h3 className={h3Class}>What is the effective tax rate on a successful search fund exit in France?</h3>

        <p>
          Since 2018, France applies a flat tax (Pr&eacute;l&egrave;vement Forfaitaire Unique) of 30% on capital gains&mdash;comprising 12.8% income tax plus 17.2% social charges. This makes France competitive with many other European jurisdictions for exit taxation. Taxpayers can opt for the progressive income tax scale (bar&egrave;me progressif) if it produces a lower rate, though this is rarely beneficial for substantial capital gains. Additionally, the PEA-PME vehicle allows individual investors to benefit from complete income tax exemption on capital gains after a five-year holding period (only the 17.2% social charges apply), which can reduce the effective exit tax rate for qualifying investments to 17.2%. Some search fund structures in France are specifically designed to be PEA-PME eligible to attract French individual investors.
        </p>

        <h3 className={h3Class}>How important is French language fluency for conducting ETA in France?</h3>

        <p>
          French language fluency is virtually non-negotiable for search fund operations in France. Unlike Nordic countries or the Netherlands, French is the default language for virtually all business interactions with SME owners. The typical target seller&mdash;aged 55&ndash;65 in a regional city&mdash;conducts all business in French, and financial statements, legal documents, contracts, and collective bargaining agreements (conventions collectives) are all in French. A CCI (Chambre de Commerce et d&apos;Industrie) survey found that non-French-speaking acquirers face rejection rates 2&ndash;3x higher during initial outreach. The most successful international searchers in France have generally reached B2&ndash;C1 level proficiency before beginning their active search. Non-French speakers should consider partnering with a French co-searcher or investing 6&ndash;12 months in intensive language training before launching.
        </p>

        <h2 className={h2Class}>Sources</h2>

        <ul className={ulClass}>
          <li>BPCE Observatoire, <em>Cession-Transmission des PME en France</em> (2024) &mdash; comprehensive data on French business transfer volumes and demographics</li>
          <li>BPI France, <em>Les PME-ETI et la Transmission d&apos;Entreprise</em> (2024) &mdash; government financing programs and guarantee structures for acquisition entrepreneurs</li>
          <li>INSEAD International Search Fund Center, <em>European Search Fund Study</em> (2024) &mdash; performance data and case studies on French search fund acquisitions</li>
        </ul>
      </div>
    </article>
  );
}
