import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAColombiaChilePeruArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        ETA in Colombia, Chile &amp; Peru: The Andean Opportunity
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          The Andean region is emerging as one of the most compelling frontiers
          for{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            entrepreneurship through acquisition
          </Link>
          . Colombia, Chile, and Peru share common tailwinds, growing
          middle classes, generational succession waves, and maturing private
          equity ecosystems, while each market offers distinct advantages
          for search fund entrepreneurs. With EBITDA multiples typically ranging
          from 3-5x and an expanding network of IESE, IAE, and local
          business school alumni driving deal flow, the Andean corridor represents
          a high-potential, under-penetrated ETA market.
        </p>

        {/* ── Colombia ── */}
        <h2 className={h2Class}>Colombia</h2>

        <h3 className={h3Class}>Market overview</h3>
        <ul className={ulClass}>
          <li><strong>600,000+ formal SMEs</strong> and a total business base of 1.6 million registered companies. SMEs generate roughly 40% of GDP and 80% of employment</li>
          <li><strong>Growing middle class:</strong> Colombia&rsquo;s middle class has more than doubled since 2002, driving domestic demand in consumer services, healthcare, and education</li>
          <li><strong>Succession wave:</strong> Many first-generation founders who built businesses during Colombia&rsquo;s economic opening in the 1990s are now approaching retirement without clear successors</li>
          <li><strong>Attractive multiples:</strong> 3-5x EBITDA for most SMEs, with lower multiples in secondary cities like Medell&iacute;n, Barranquilla, and Cali compared to Bogot&aacute;</li>
        </ul>

        <h3 className={h3Class}>Legal &amp; corporate structure</h3>
        <ul className={ulClass}>
          <li><strong>S.A.S. (Sociedad por Acciones Simplificada):</strong> Colombia&rsquo;s most popular corporate vehicle, introduced in 2008. Highly flexible, allows a single shareholder, no mandatory board, simplified governance, and variable capital. Over 90% of new company registrations use the S.A.S. structure</li>
          <li><strong>S.A. (Sociedad An&oacute;nima):</strong> Traditional corporation requiring at least 5 shareholders and a board. Used by larger businesses and required for certain regulated industries</li>
          <li><strong>Acquisition vehicle:</strong> Most buyers create a new S.A.S. holdco to acquire 100% of the target&rsquo;s shares. The S.A.S. flexibility makes it ideal for search fund structures with multiple investor classes</li>
        </ul>

        <h3 className={h3Class}>Financing</h3>
        <ul className={ulClass}>
          <li><strong>Banc&oacute;ldex:</strong> Colombia&rsquo;s development bank for entrepreneurship and foreign trade. Offers subsidized credit lines, partial credit guarantees, and special programs for SME acquisitions and modernization</li>
          <li><strong>Fondo Nacional de Garant&iacute;as (FNG):</strong> Provides credit guarantees covering up to 50-80% of SME loans, making bank financing more accessible for acquisition transactions</li>
          <li><strong>Commercial banks:</strong> Bancolombia, Davivienda, and Banco de Bogot&aacute; offer acquisition financing, though rates remain high (IBR + 4-8%)</li>
          <li><strong>Seller financing:</strong> Common at 20-40% of deal value, typically structured over 2-4 years. See{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing guide
            </Link></li>
        </ul>

        <h3 className={h3Class}>tax environment</h3>
        <ul className={ulClass}>
          <li><strong>Corporate tax:</strong> 35% on corporate profits (increased from 33% in 2022 tax reform)</li>
          <li><strong>Capital gains:</strong> 15% on capital gains from share sales for both individuals and corporations</li>
          <li><strong>VAT (IVA):</strong> 19% on most goods and services</li>
          <li><strong>Industry &amp; commerce tax (ICA):</strong> Municipal tax of 0.2-1.4% on gross revenue, varying by municipality and economic activity. Often overlooked in{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link></li>
          <li><strong>Free trade zones:</strong> Companies operating in designated zones pay a reduced 20% corporate rate and 0% VAT on exports</li>
        </ul>

        <h3 className={h3Class}>Target industries</h3>
        <ul className={ulClass}>
          <li><strong>Coffee &amp; agriculture services:</strong> Colombia is the world&rsquo;s third-largest coffee producer. Processing, export logistics, and agri-tech services present recurring-revenue acquisition opportunities</li>
          <li><strong>Professional services:</strong> Accounting firms, engineering consultancies, and IT services in Bogot&aacute; and Medell&iacute;n serve both domestic and nearshore clients</li>
          <li><strong>Healthcare:</strong> Private clinics, dental chains, and diagnostic labs. Colombia&rsquo;s healthcare system is ranked among the best in Latin America, and medical tourism is growing</li>
          <li><strong>BPO &amp; technology:</strong> Medell&iacute;n has become a global hub for business process outsourcing and software development, with a bilingual talent pool</li>
        </ul>

        {/* ── Chile ── */}
        <h2 className={h2Class}>Chile</h2>

        <h3 className={h3Class}>Market overview</h3>
        <ul className={ulClass}>
          <li><strong>Most business-friendly country in Latin America:</strong> Consistently ranked #1 in the region by the World Bank&rsquo;s Ease of Doing Business index and the Heritage Foundation&rsquo;s Economic Freedom Index</li>
          <li><strong>Stable institutions:</strong> Strong rule of law, independent judiciary, and transparent regulatory environment. Chile&rsquo;s institutional quality is comparable to many OECD nations</li>
          <li><strong>1.2 million SMEs</strong> representing 98% of all businesses. A well-formalized economy relative to regional peers</li>
          <li><strong>Growing PE ecosystem:</strong> Chilean family offices and institutional investors are increasingly allocating to search fund vehicles, influenced by IESE and Stanford models</li>
        </ul>

        <h3 className={h3Class}>Legal &amp; corporate structure</h3>
        <ul className={ulClass}>
          <li><strong>SpA (Sociedad por Acciones):</strong> Chile&rsquo;s preferred acquisition vehicle. Introduced in 2007, it allows a single shareholder, flexible bylaws, and multiple share classes, ideal for search fund structures with preferred investor returns</li>
          <li><strong>S.A. (Sociedad An&oacute;nima):</strong> Traditional corporation. Open S.A. companies are subject to securities regulation (CMF supervision). Closed S.A. companies have lighter governance requirements</li>
          <li><strong>Acquisition vehicle:</strong> Most search fund buyers create a SpA holdco. The structure&rsquo;s flexibility with share classes (e.g., preferred vs. common) maps naturally to search fund economics</li>
        </ul>

        <h3 className={h3Class}>Financing</h3>
        <ul className={ulClass}>
          <li><strong>CORFO (Corporaci&oacute;n de Fomento de la Producci&oacute;n):</strong> Chile&rsquo;s development agency offers subsidized credit lines, seed capital matching, and guarantee programs (FOGAPE, FOGAIN) that facilitate SME acquisition financing</li>
          <li><strong>Commercial banks:</strong> Banco de Chile, BCI, Santander Chile, and Scotiabank Chile offer acquisition financing at TAB + 3-6%. Chile&rsquo;s lower base rates (vs. Colombia and Peru) make use more viable</li>
          <li><strong>Seller financing:</strong> Common at 20-35% of deal value. Chilean sellers tend to be more sophisticated in deal structuring, often accepting earn-outs tied to performance</li>
          <li><strong>Venture capital &amp; PE funds:</strong> Funds like Austral Capital, CLIN, and family offices provide equity for search fund acquisitions</li>
        </ul>

        <h3 className={h3Class}>tax environment</h3>
        <ul className={ulClass}>
          <li><strong>Corporate tax:</strong> 27% first category tax on corporate profits (the lowest in the Andean group)</li>
          <li><strong>Tax regimes:</strong> Pro-PyME regime for SMEs with revenue below 75,000 UF (&sim;$3M) offers instant expensing, simplified accounting, and preferential rates</li>
          <li><strong>Capital gains:</strong> Taxed as regular income for individuals (up to 40% marginal rate). Certain gains from shares held &gt;1 year may qualify for a preferential 10% rate</li>
          <li><strong>VAT (IVA):</strong> 19% on most goods and services</li>
          <li><strong>Goodwill amortization:</strong> Goodwill from share acquisitions (badwill/goodwill) receives specific treatment under Chilean GAAP and tax rules. Proper structuring can yield tax deductions</li>
        </ul>

        <h3 className={h3Class}>Target industries</h3>
        <ul className={ulClass}>
          <li><strong>Mining services:</strong> Chile produces 27% of the world&rsquo;s copper. Equipment maintenance, environmental consulting, and logistics companies serving the mining sector offer stable, contract-based revenue</li>
          <li><strong>Agribusiness:</strong> Wine, fruit exports (grapes, blueberries, avocados), and salmon farming. Chile is a global agricultural export powerhouse with businesses ripe for professionalization</li>
          <li><strong>Technology &amp; SaaS:</strong> Santiago&rsquo;s growing startup ecosystem has spawned many SME software companies. See{" "}
            <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">
              SaaS acquisition guide
            </Link></li>
          <li><strong>Professional services:</strong> Engineering, architecture, and consulting firms serving mining and infrastructure projects</li>
        </ul>

        {/* ── Peru ── */}
        <h2 className={h2Class}>Peru</h2>

        <h3 className={h3Class}>Market overview</h3>
        <ul className={ulClass}>
          <li><strong>2.3 million MSMEs</strong> (micro, small, and medium enterprises) representing over 99% of all businesses and employing 60% of the workforce</li>
          <li><strong>Consistent GDP growth:</strong> Peru averaged 4.5% annual GDP growth over the past two decades, one of the strongest track records in Latin America. A growing consumer base of 34 million people</li>
          <li><strong>Formalization opportunity:</strong> An estimated 80% of Peruvian businesses operate informally, creating significant opportunity for acquirers who can formalize and professionalize target companies</li>
          <li><strong>Pacific Alliance member:</strong> Along with Chile, Colombia, and Mexico, Peru benefits from the Pacific Alliance&rsquo;s free trade and capital mobility provisions</li>
        </ul>

        <h3 className={h3Class}>Legal &amp; corporate structure</h3>
        <ul className={ulClass}>
          <li><strong>S.A.C. (Sociedad An&oacute;nima Cerrada):</strong> Peru&rsquo;s preferred structure for SME acquisitions. Allows 2-20 shareholders, simpler governance than an open S.A., and pre-emptive rights that can be waived in bylaws</li>
          <li><strong>S.A. (Sociedad An&oacute;nima):</strong> Open corporation for larger companies. Required for publicly listed entities. No shareholder cap</li>
          <li><strong>S.R.L. (Sociedad de Responsabilidad Limitada):</strong> Limited liability company for smaller businesses. Maximum 20 partners. Less flexible than S.A.C. for investor structuring</li>
          <li><strong>Acquisition vehicle:</strong> Most buyers create a new S.A.C. holdco. The structure accommodates multiple share classes with some creativity in bylaw drafting</li>
        </ul>

        <h3 className={h3Class}>Financing</h3>
        <ul className={ulClass}>
          <li><strong>COFIDE (Corporaci&oacute;n Financiera de Desarrollo):</strong> Peru&rsquo;s development bank channels subsidized credit through commercial banks (second-tier lending). Programs like PROPEM and Multisectorial support SME growth and acquisitions</li>
          <li><strong>Commercial banks:</strong> BCP (Banco de Cr&eacute;dito del Per&uacute;), BBVA Per&uacute;, Interbank, and Scotiabank Per&uacute; offer business acquisition loans at TAMN-linked rates. Effective rates of 12-18% are common</li>
          <li><strong>Seller financing:</strong> Essential in Peru given high bank rates. Typically 25-40% of deal value over 2-4 years. Many sellers prefer cash at close, making negotiation important</li>
          <li><strong>Investor equity:</strong> Peru&rsquo;s search fund investor base is smaller than Chile&rsquo;s or Colombia&rsquo;s but growing, anchored by PAD (Universidad de Piura) and IESE alumni</li>
        </ul>

        <h3 className={h3Class}>tax environment</h3>
        <ul className={ulClass}>
          <li><strong>Corporate tax:</strong> 29.5% on corporate profits</li>
          <li><strong>Dividends:</strong> 5% withholding tax on dividend distributions to individuals and non-residents</li>
          <li><strong>Capital gains:</strong> 30% for Peruvian-source capital gains realized by individuals and corporations. Reduced 5% rate for gains on shares traded on the Lima Stock Exchange (BVL)</li>
          <li><strong>VAT (IGV):</strong> 18% (16% IGV + 2% municipal tax) on most goods and services</li>
          <li><strong>MYPE regime:</strong> Simplified tax and labor regime for micro and small enterprises. Reduces labor costs significantly (no CTS, no profit sharing for micro) but imposes revenue caps</li>
          <li><strong>Profit sharing:</strong> Mandatory distribution of 5-10% of pre-tax profits to employees, depending on the industry sector</li>
        </ul>

        <h3 className={h3Class}>Target industries</h3>
        <ul className={ulClass}>
          <li><strong>Mining services:</strong> Peru is the world&rsquo;s second-largest copper and silver producer. Equipment rental, maintenance, drilling, and environmental services companies offer contract-based recurring revenue</li>
          <li><strong>Agribusiness:</strong> Peru&rsquo;s agricultural exports (blueberries, avocados, asparagus, quinoa) have grown 400% in a decade. Processing, cold chain, and export logistics businesses are acquisition targets</li>
          <li><strong>Textiles &amp; apparel:</strong> Peru&rsquo;s high-quality cotton (Pima) and alpaca fibers support a vertically integrated textile industry. Manufacturing and export businesses with established US/EU client bases offer stable revenue</li>
          <li><strong>Healthcare:</strong> Private clinics and diagnostic labs serve a growing middle class dissatisfied with public healthcare. Lima concentrates most of the investable targets</li>
          <li><strong>Gastronomy &amp; food services:</strong> Peru&rsquo;s culinary reputation (ranked among the world&rsquo;s top food destinations) drives a booming restaurant, catering, and food distribution sector</li>
        </ul>

        {/* ── Common themes ── */}
        <h2 className={h2Class}>Common themes across the Andean region</h2>

        <h3 className={h3Class}>Succession &amp; demographics</h3>
        <p>
          All three countries experienced rapid economic growth from the 1990s
          onward, creating a large cohort of first-generation business founders
          who are now in their 60s and 70s. Many built their companies during
          market liberalization and have no family successor willing or able to
          take over. This succession wave is the primary driver of deal flow for
          ETA in the region.
        </p>

        <h3 className={h3Class}>Valuation &amp; deal economics</h3>
        <ul className={ulClass}>
          <li><strong>Multiples:</strong> 3-5x EBITDA is the typical range across all three markets, well below US (5-8x) and European (4-7x) averages. Lower multiples reflect higher country risk, smaller buyer pools, and less auction-driven processes</li>
          <li><strong>Deal size:</strong> Most Andean search fund acquisitions target companies with $500K-$3M EBITDA. Smaller deals face less competition from PE firms</li>
          <li><strong>Value creation:</strong> Professionalization, technology adoption, and geographic expansion drive post-acquisition growth. See{" "}
            <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
              the first 100 days playbook
            </Link></li>
        </ul>

        <h3 className={h3Class}>Growing ecosystem</h3>
        <ul className={ulClass}>
          <li><strong>Business school networks:</strong> IESE (Barcelona) and IAE (Buenos Aires) have produced the majority of Latin American search fund entrepreneurs. Local schools, Universidad de los Andes (Colombia), PUC/UAI (Chile), and PAD/UTEC (Peru), are building dedicated ETA programs</li>
          <li><strong>Investor networks:</strong> Latin American search fund investors (many first-generation successful searchers themselves) are reinvesting in the next generation. Cross-border investor syndicates spanning the Pacific Alliance countries are becoming common</li>
          <li><strong>PE ecosystem:</strong> Private equity penetration in the Andean region is growing rapidly, validating the SME acquisition model and creating future exit opportunities for search fund operators</li>
          <li><strong>Conferences &amp; events:</strong> The IESE Search Fund Conference, LAVCA events, and country-specific ETA meetups in Bogot&aacute;, Santiago, and Lima are building community and deal flow</li>
        </ul>

        <h3 className={h3Class}>Key challenges</h3>
        <ul className={ulClass}>
          <li><strong>Political volatility:</strong> All three countries have experienced political instability in recent years. Peru in particular has seen rapid presidential turnover. Regulatory continuity risk should be factored into deal models</li>
          <li><strong>Informality:</strong> Off-book revenue, informal labor, and incomplete financial records are common across Andean SMEs. Thorough{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link>{" "}
            and a quality of earnings analysis are essential</li>
          <li><strong>Currency risk:</strong> COP, CLP, and PEN all exhibit volatility against USD/EUR. Consider natural hedges (export revenue) or financial instruments to protect returns for international investors</li>
          <li><strong>Talent retention:</strong> Post-acquisition talent management is critical. Key employees may be loyal to the founder, not the company. Retention packages and gradual leadership transitions reduce risk</li>
          <li><strong>Legal enforcement:</strong> While legal frameworks are adequate, court processes can be slow. Arbitration clauses (using chambers of commerce in Bogot&aacute;, Santiago, or Lima) are strongly recommended in SPAs</li>
        </ul>

        <h2 className={h2Class}>Getting started</h2>
        <p>
          The Andean region rewards searchers who invest in local relationships,
          understand cultural nuances, and partner with experienced local advisors.
          Bilingual proficiency (Spanish is essential in all three markets) and
          on-the-ground presence significantly improve deal sourcing outcomes.
          The Pacific Alliance framework, linking Colombia, Chile, Peru,
          and Mexico, creates natural cross-border deal flow and investor
          networks that benefit ETA operators across the region.
        </p>

        <p>
          For the broader Latin American context, see{" "}
          <Link href="/learn/eta-latin-america-overview" className="text-apple-accent hover:underline">
            ETA in Latin America
          </Link>. For country-specific deep dives on the region&rsquo;s largest
          markets, see{" "}
          <Link href="/learn/eta-brazil" className="text-apple-accent hover:underline">
            ETA in Brazil
          </Link>{" "}
          and{" "}
          <Link href="/learn/eta-mexico" className="text-apple-accent hover:underline">
            ETA in Mexico
          </Link>.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>Which Andean country is most accessible for a first-time search fund entrepreneur?</h3>
        <p>
          Chile is generally considered the most accessible market for first-time searchers due to its transparent regulatory environment, the strongest rule of law in the region, and relatively well-formalized business accounting practices. Chile consistently ranks first in Latin America on the World Bank&rsquo;s Ease of Doing Business index and the Heritage Foundation&rsquo;s Economic Freedom Index. CORFO&rsquo;s financing programs and the SpA corporate structure provide familiar frameworks for searchers trained in the US or European models. However, Chile&rsquo;s smaller population (19 million) limits total deal flow compared to Colombia (52 million). For bilingual searchers with higher risk tolerance, Colombia offers deeper deal flow and a more developed local search fund community anchored by Universidad de los Andes.
        </p>

        <h3 className={h3Class}>How do search fund investors view currency risk in Andean acquisitions?</h3>
        <p>
          Currency risk is the single most discussed concern among international investors evaluating Andean search fund opportunities. The Colombian peso (COP), Chilean peso (CLP), and Peruvian sol (PEN) have all experienced 15-30% swings against the US dollar over five-year periods. IESE research on Latin American search funds shows that currency depreciation has reduced dollar-denominated returns by an average of 3-5 percentage points annually over holding periods. Experienced investors mitigate this by targeting businesses with natural currency hedges, export revenues, dollar-linked contracts, or operations serving multinational clients. Some funds also use local-currency acquisition debt to match the currency of cash flows with debt service, creating a partial natural hedge.
        </p>

        <h3 className={h3Class}>What are the most common due diligence red flags in Andean SME acquisitions?</h3>
        <p>
          Three red flags appear consistently across all three markets. First, informality in financial records: an estimated 40-60% of Andean SMEs maintain some degree of off-book revenue or informal labor arrangements, according to OECD studies on Latin American informality. Second, customer concentration: many mid-market businesses depend heavily on government contracts or a single large client, creating revenue vulnerability. Third, tax compliance gaps: the ICA municipal tax in Colombia, the profit-sharing obligation in Peru, and VAT compliance across all three countries are areas where liabilities often surface during{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link>. Searchers should engage local forensic accountants and insist on three years of reconciled tax filings before proceeding.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>
            <a href="https://www.iese.edu/entrepreneurship/search-funds/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              IESE Business School, Latin American Search Fund Study
            </a>
          </li>
          <li>
            <a href="https://www.oecd.org/latin-america/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              OECD, Latin American Economic Outlook and SME Informality Reports
            </a>
          </li>
          <li>
            <a href="https://www.worldbank.org/en/programs/business-enabling-environment" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              World Bank, Business Enabling Environment: Latin America Country Data
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
