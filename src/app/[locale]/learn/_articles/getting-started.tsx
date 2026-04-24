import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function GettingStartedArticle() {
  return (
    <article>
      <h1 className={h1Class}>What is a Search Fund? Complete Guide</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          A search fund is an investment vehicle through which an entrepreneur
          (the &ldquo;searcher&rdquo;) raises a pool of capital from investors
          to fund the search for, acquisition of, and operation of a single
          privately held company. The model was pioneered at Stanford Graduate
          School of Business in 1984 and has since grown into a well-established
          path for aspiring CEOs who want to skip the corporate ladder and go
          straight to running their own company. For a broader overview of the
          acquisition landscape, see our guide on{" "}
          <Link href="/learn/how-to-buy-small-business" className="text-apple-accent hover:underline">
            how to buy a small business
          </Link>.
        </p>

        <p>
          Unlike venture capital or private equity, where professional fund
          managers deploy capital across a portfolio of companies, a search fund
          exists to find and acquire just one business. The searcher is not merely
          a financial sponsor — they become the full-time CEO and operator of the
          company they acquire. This hands-on, owner-operator model is what makes
          search funds unique in the world of entrepreneurship through acquisition
          (ETA), and it is why the model continues to attract ambitious
          professionals who want direct ownership and operating responsibility
          from day one.
        </p>

        <h2 className={h2Class}>How the model works</h2>
        <p>
          The search fund model follows a structured, multi-phase lifecycle that
          typically spans five to eight years from inception to exit. Each phase
          has distinct objectives, milestones, and challenges.
        </p>

        <h2 className={h2Class}>The search fund lifecycle in detail</h2>

        <h3 className={h3Class}>Phase 1: Preparation</h3>
        <p>
          Before raising a single dollar or euro, the aspiring searcher spends
          three to six months in preparation. This phase involves building the
          intellectual foundation for the entire journey. Searchers study the
          search fund model extensively, reading case studies from Stanford, IESE,
          and INSEAD. They develop their investment thesis — the industries,
          geographies, company sizes, and business characteristics they plan to
          target. They also begin networking with experienced searchers, search
          fund investors, and mentors who can provide guidance throughout the
          process.
        </p>
        <p>
          Preparation also includes the practical aspects of launching a search:
          incorporating a legal entity, drafting initial legal documents, building
          financial models, and assembling a personal budget that accounts for the
          reduced (or absent) income during the search period. Many searchers
          underestimate the importance of this phase. Those who skip preparation
          and rush into fundraising often find themselves with poorly defined
          criteria, weak investor pitches, and a search that meanders without
          direction. Our guide to{" "}
          <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">pre-search preparation</Link>{" "}
          covers this phase in depth.
        </p>

        <h3 className={h3Class}>Phase 2: Fundraising the search capital</h3>
        <p>
          The entrepreneur begins by raising search capital, typically between
          $400,000 and $600,000 (or the equivalent in euros), from a group of
          10 to 20 investors. These investors each contribute a relatively small
          amount in exchange for the right (but not the obligation) to invest in
          the eventual acquisition. Search capital covers the entrepreneur&apos;s
          salary, travel, deal sourcing, legal costs, and other expenses during
          the search period, which typically lasts 18 to 24 months.
        </p>
        <p>
          Fundraising itself usually takes two to four months. The searcher
          prepares a private placement memorandum (PPM) that describes their
          background, investment thesis, target criteria, search budget, and the
          legal and economic terms of the fund. They then pitch this to
          prospective investors — typically high-net-worth individuals, family
          offices, and institutional search fund investors who specialize in the
          asset class. Building a strong investor group is about more than just
          capital: the best search fund investors bring industry expertise,
          acquisition experience, board-level governance skills, and a network of
          contacts that can accelerate every phase of the process.
        </p>

        <h3 className={h3Class}>Phase 3: The search</h3>
        <p>
          Once funded, the searcher begins a full-time, systematic search for an
          acquisition target. This involves developing effective <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">deal sourcing strategies</Link>, reviewing hundreds of potential
          companies, reaching out to business owners, brokers, and
          intermediaries, and conducting preliminary due diligence on promising
          leads. Searchers typically evaluate 50 to 100 companies in detail and
          may submit multiple letters of intent before finding the right fit.
        </p>
        <p>
          The search phase is often the most psychologically demanding part of the
          journey. Searchers face months of rejection, dead-end conversations,
          and deals that fall apart at the last minute. Maintaining discipline,
          following a consistent sourcing process, and keeping investors informed
          through regular updates are all essential to staying on track. The most
          successful searchers treat the search like a sales funnel: they track
          every lead, measure conversion rates between stages, and continuously
          refine their outreach and evaluation criteria based on what they learn
          in the field.
        </p>

        <h3 className={h3Class}>Phase 4: Acquisition</h3>
        <p>
          When a suitable target is identified, the searcher negotiates the
          deal, conducts thorough due diligence, and raises acquisition capital.
          Acquisition multiples for search fund deals usually range from
          3x to 6x EBITDA. The searcher typically receives a significant equity
          stake (often 20-30% of the company) as part of the <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">deal economics and cap table structure</Link>.
        </p>
        <p>
          The acquisition phase typically lasts three to six months from signed
          letter of intent to closing. During this period, the searcher conducts
          a comprehensive quality of earnings analysis, legal review, customer
          and vendor diligence, and operational assessment. They also negotiate
          the definitive purchase agreement, arrange debt financing (often SBA
          loans in the US or bank financing in Europe), and coordinate the equity
          raise among their investor group. This is the most technically demanding
          phase of the process, and experienced legal counsel and a strong
          financial advisor are indispensable.
        </p>

        <h3 className={h3Class}>Phase 5: Operations</h3>
        <p>
          After closing the deal, the searcher steps in as CEO and begins
          operating the company. The <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">first 100 days</Link> are critical for setting the tone. This phase typically lasts four to seven years
          and involves implementing operational improvements, growing revenue,
          and professionalizing the organization.
        </p>
        <p>
          Operating the acquired company is where the searcher transitions from
          dealmaker to leader. Common early priorities include building trust
          with the existing management team, understanding the day-to-day
          operations intimately, identifying quick wins that improve profitability,
          and establishing reporting cadences with the board of directors. Over
          the medium term, successful search fund CEOs typically focus on
          professionalizing sales and marketing, implementing modern technology
          systems, building a leadership team, and pursuing organic and
          inorganic growth initiatives. The operating phase is where the
          searcher creates the bulk of the value that ultimately drives investor
          returns.
        </p>

        <h3 className={h3Class}>Phase 6: Exit</h3>
        <p>
          The typical exit occurs five to seven years after the acquisition,
          usually through a sale to a strategic buyer, a private equity fund, or
          another search fund entrepreneur. The most successful search fund
          acquisitions have generated returns of 3x to 10x on invested capital.
        </p>
        <p>
          Exit planning should begin well before the actual sale process. Smart
          search fund CEOs start preparing for exit two to three years in advance
          by cleaning up financial reporting, reducing customer concentration,
          documenting key processes, and building a management team that can
          operate without the founder. When the time comes to sell, the company
          should be positioned as a well-run, growing, and transferable business
          that commands a premium multiple. Common exit routes include strategic
          sales to larger industry players, sales to private equity firms looking
          for platform investments, management buyouts, and increasingly,
          sales to other search fund entrepreneurs who want to acquire a larger
          or more established business.
        </p>

        <h2 className={h2Class}>Who becomes a searcher?</h2>
        <p>
          The typical search fund entrepreneur is between 28 and 38 years old,
          though successful searchers have ranged from their mid-twenties to
          their early fifties. Most come from professional backgrounds in
          management consulting, investment banking, private equity, corporate
          strategy, or general management. An MBA from a top business school has
          historically been the most common credential, with Stanford, Harvard,
          Wharton, IESE, INSEAD, and HEC Paris producing the largest number of
          searchers. However, the model has increasingly attracted professionals
          without MBAs who bring deep operating experience in specific industries.
        </p>
        <p>
          What unites successful searchers is not a specific resume but a
          particular combination of traits: intellectual curiosity, resilience
          in the face of prolonged uncertainty, strong interpersonal skills for
          building relationships with sellers and brokers, financial literacy
          sufficient to evaluate businesses and structure deals, and the
          leadership ability to step into a CEO role and earn the trust of an
          existing team from day one. Searchers also tend to be people who are
          drawn to ownership and autonomy — they want to build something
          meaningful, and they are willing to accept the personal risk and the
          intense workload that come with acquiring and running a company.
        </p>
        <p>
          Motivations vary. Some searchers are drawn by the financial upside: a
          successful search fund can generate significant personal wealth through
          the carried interest structure. Others are motivated by the desire to
          be CEO without spending twenty years climbing the corporate ladder. Many
          are attracted by the lifestyle of running a small to mid-size business
          in a specific community — a stark contrast to the travel-heavy,
          client-driven schedules of consulting and banking. And some are simply
          entrepreneurs at heart who prefer the lower risk profile of acquiring
          an established, cash-flowing business over the binary outcomes of a
          startup.
        </p>

        <h2 className={h2Class}>The economics of a traditional search fund</h2>
        <p>
          Understanding the unit economics of a traditional search fund is
          essential for both aspiring searchers and prospective investors. The
          financial model is designed to align incentives: investors take early
          risk by funding the search phase, and in return they receive preferential
          rights and a significant share of the acquisition equity. The searcher
          contributes sweat equity and receives carried interest that rewards
          successful acquisition and value creation.
        </p>
        <p>
          Search capital is raised in units, typically priced between $35,000 and
          $50,000 per unit. A standard fund sells 10 to 20 units, resulting in a
          total search capital raise of $400,000 to $600,000. This capital is
          budgeted to cover the searcher&apos;s salary (typically $80,000 to
          $120,000 per year), travel expenses, legal and accounting fees, deal
          sourcing tools and databases, and a modest reserve. The search period
          is funded for 18 to 24 months, though some searchers extend if they have
          strong investor support and a promising pipeline.
        </p>
        <p>
          During the search, investors receive regular updates — typically monthly
          — on the searcher&apos;s activity, pipeline, and any deals under
          consideration. When an acquisition is identified, the search capital
          converts into acquisition equity at a step-up of 1.5x to 2.0x,
          compensating early investors for the higher risk of the pre-deal
          phase. Search investors also receive the right of first refusal to
          participate in the acquisition equity raise, ensuring they can maintain
          or increase their exposure to deals they find attractive. The searcher
          receives 20% to 30% of the total equity as carried interest, typically
          vesting in three tranches tied to closing, tenure, and performance
          targets. For a complete breakdown, see our guide to{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">cap tables and equity</Link>.
        </p>

        <h2 className={h2Class}>History and origins</h2>
        <p>
          The search fund concept was created in 1984 by H. Irving Grousbeck, a
          professor at Stanford Graduate School of Business, as an alternative
          path for MBA graduates who wanted to become CEOs. The concept crossed the
          Atlantic in the early 2010s, when MBA graduates from IESE, INSEAD, HEC
          Paris, and London Business School began raising search funds focused on
          European markets. INSEAD has played a pivotal role in this expansion,
          establishing its dedicated ETA & Search Funds Hub — one of the most
          comprehensive platforms for ETA research, education, and community building
          in Europe and globally. Today, INSEAD alumni are among the most active
          search fund entrepreneurs and investors in Europe, Africa, and Asia.
        </p>

        <h2 className={h2Class}>Types of search funds</h2>

        <h3 className={h3Class}>Traditional search fund</h3>
        <p>
          The classic model: the searcher raises search capital from a group of
          investors, spends 18 to 24 months searching, and those investors have
          the right of first refusal on the acquisition financing.
        </p>

        <h3 className={h3Class}>Self-funded search</h3>
        <p>
          The entrepreneur finances the search period out of personal savings or
          by working part-time while searching. The advantage is greater equity
          retention and flexibility. Learn more about the tradeoffs in our guide to <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">self-funded vs. traditional search funds</Link>. Self-funded searches have become
          increasingly popular in Europe.
        </p>

        <h3 className={h3Class}>Search fund accelerator</h3>
        <p>
          Accelerator programs provide structured support, mentorship, a
          community of peers, and sometimes search capital in exchange for a
          share of the deal economics. These programs have helped lower the
          barrier to entry for first-time searchers.
        </p>

        <h2 className={h2Class}>Key statistics</h2>
        <ul className={ulClass}>
          <li>Over 680 search funds have been raised globally since 1984.</li>
          <li>A record 94 search funds launched in 2023 alone.</li>
          <li>Roughly 70% of searchers successfully acquire a company.</li>
          <li>Aggregate pre-tax IRR of ~33% and 5.5x multiple on invested capital (MOIC), according to the <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">2024 Stanford Search Fund Study</Link>.</li>
          <li>Average search length: 20 months.</li>
          <li>European search funds have grown from fewer than 10 per year in 2010 to over 80 per year as of 2024.</li>
        </ul>
        <p>
          The Stanford GSB 2024 study — the most comprehensive longitudinal
          dataset on search fund performance — reports an aggregate return of
          approximately 33% IRR and 5.5x multiple on invested capital (MOIC)
          across all funds in the dataset. Roughly 70% of searchers successfully
          acquire a company, and the median acquisition occurs within 20 months
          of launching the search. Among those who acquire, the median company
          has revenue between $5 million and $20 million, EBITDA margins of
          15% to 25%, and employs 30 to 150 people. These statistics have been
          remarkably consistent over the past decade, reinforcing the
          attractiveness of the model as an asset class.
        </p>
        <p>
          It is worth noting, however, that the aggregate statistics are
          significantly skewed by a small number of highly successful outcomes.
          The median search fund return is lower than the mean, and approximately
          30% of search funds result in a partial or total loss of capital. As
          with all entrepreneurial endeavors, the distribution of outcomes is
          wide, and past performance does not guarantee future results.
        </p>

        <h2 className={h2Class}>Why ETA is growing in Europe</h2>
        <p>
          Europe is experiencing a once-in-a-generation succession crisis. An
          estimated 2.4 million small and medium enterprises across the European
          Union will need to transition ownership in the coming decade, as
          founders born in the baby boomer generation retire without an obvious
          successor. Unlike in the United States, where the market for small
          business acquisitions is mature and highly intermediated, many European
          markets still lack the broker networks, online marketplaces, and
          standardized deal processes that facilitate efficient ownership
          transitions. This creates a significant opportunity for search fund
          entrepreneurs who are willing to do the work of identifying, reaching,
          and building relationships with business owners directly.
        </p>
        <p>
          Several additional factors make Europe particularly attractive for
          search fund activity. Valuations for profitable small businesses tend
          to be lower in Europe than in the United States, with acquisition
          multiples of 3x to 5x EBITDA common in many markets compared to 4x to
          7x in the US. Competition is also less intense: the number of search
          funds per capita remains far lower in most European countries than in
          the US, meaning searchers face fewer competing buyers for the same
          pool of quality businesses. Government-backed lending programs in
          countries such as France, Spain, Germany, and the Netherlands provide
          favorable debt financing for acquisitions, reducing the equity check
          and improving returns for both searchers and investors.
        </p>
        <p>
          Academic support for the model has also expanded rapidly. IESE
          Business School in Barcelona was the first European institution to
          build a dedicated search fund program, and it has produced more
          European search fund entrepreneurs than any other school. INSEAD, HEC
          Paris, London Business School, and IE Business School have all
          developed ETA-focused courses, clubs, and research centers. This
          growing ecosystem of education, alumni networks, and institutional
          investor support is creating a virtuous cycle that continues to draw
          talented professionals into the European search fund community.
        </p>

        <h2 className={h2Class}>Common misconceptions about search funds</h2>

        <h3 className={h3Class}>Myth: You need to be wealthy to start a search fund</h3>
        <p>
          The traditional search fund model is specifically designed to be
          accessible to entrepreneurs who do not have significant personal
          capital. Search capital from investors covers the searcher&apos;s salary
          and all expenses during the search phase, and the acquisition is
          financed by investor equity and debt. The searcher&apos;s primary
          contribution is time, effort, and expertise — not money. While
          self-funded searches do require personal savings, even these typically
          require only $50,000 to $150,000, well within reach for experienced
          professionals who have been working for several years.
        </p>

        <h3 className={h3Class}>Myth: You need an MBA from a top school</h3>
        <p>
          While many searchers do hold MBAs, the model is increasingly open to
          professionals from diverse educational backgrounds. What matters far
          more than a specific degree is the ability to evaluate businesses
          financially, build relationships with sellers and brokers, lead a team,
          and manage the complex process of acquiring and operating a company.
          Many successful searchers come from non-MBA backgrounds in engineering,
          law, military service, and industry operations. Investors evaluate
          searchers on their skills, character, and work ethic — not their
          diploma.
        </p>

        <h3 className={h3Class}>Myth: Search funds are too risky</h3>
        <p>
          Compared to startups, search funds are a lower-risk path to
          entrepreneurship. The searcher acquires an existing business with
          established revenue, customers, employees, and cash flow — there is no
          product-market fit risk, no need to build a team from scratch, and no
          extended period of pre-revenue operations. The primary risks are
          paying too much for the company, failing to execute operational
          improvements, or encountering unforeseen issues in the business post-
          acquisition. These are real risks, but they are fundamentally different
          from the existential risks of a startup, and they can be significantly
          mitigated through rigorous due diligence, conservative deal structuring,
          and the support of experienced investors and board members.
        </p>

        <h3 className={h3Class}>Myth: You need deep industry experience in your target sector</h3>
        <p>
          Most successful search fund CEOs acquire companies in industries where
          they had no prior experience. The skills that matter most in operating
          a small to mid-size business — leadership, financial management, sales
          management, process improvement, and strategic thinking — are broadly
          transferable. In fact, an outsider&apos;s perspective can be an
          advantage: new CEOs who are not anchored to industry conventions are
          often better positioned to identify inefficiencies, challenge
          assumptions, and drive change. That said, searchers should develop a
          solid understanding of their target industry during the diligence
          process, and they should surround themselves with advisors and board
          members who do have deep domain expertise.
        </p>

        <h3 className={h3Class}>Myth: The search fund model only works in the United States</h3>
        <p>
          While the model originated in the US, it has been successfully adapted
          to markets across Europe, Latin America, Africa, and Asia. Each market
          has its own nuances — different legal frameworks, tax structures, deal
          customs, and financing options — but the core logic of the model is
          universal: talented operators acquire established businesses, improve
          them, and create value for all stakeholders. The growth of search
          fund activity outside the US over the past decade demonstrates that the
          model is portable and adaptable, and the European market in particular
          offers compelling structural advantages for searchers and investors
          alike. The{" "}
          <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
            baby boomer succession wave
          </Link>{" "}
          is creating deal flow at an unprecedented scale across both continents.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>What is the difference between a search fund and private equity?</h3>
        <p>
          A search fund acquires a single company in the $2M to $20M
          enterprise value range, with the searcher becoming the full-time
          CEO. Private equity firms manage diversified portfolios of much
          larger companies ($100M+) and install professional management
          teams. Search funds also use a step-up equity model rather than
          the 2-and-20 fee structure common in PE. For a deeper comparison,
          see our article on{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            entrepreneurship through acquisition
          </Link>.
        </p>

        <h3 className={h3Class}>How do search fund investors make money?</h3>
        <p>
          Investors contribute search capital ($30K to $50K per unit) and
          then have the right to co-invest in the acquisition. Their search
          capital converts at a 1.5x to 2.0x step-up, and they share in the
          value created when the company is eventually sold, typically five
          to seven years after acquisition. The asset class has generated a
          35 percent aggregate IRR over 40 years. Learn more in our{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">
            investor guide
          </Link>.
        </p>

        <h3 className={h3Class}>Can you start a search fund outside the United States?</h3>
        <p>
          Yes. The search fund model has been successfully adapted across
          Europe, Latin America, and Asia. European search funds have grown
          from fewer than 10 per year in 2010 to over 80 per year as of
          2024, with particularly strong activity in France, Germany, Spain,
          and the United Kingdom. Business schools like IESE, INSEAD, and
          HEC Paris have built dedicated ETA programs that support
          searchers in local markets.
        </p>
      </div>
    </article>
  );
}
