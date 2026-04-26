import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SearchFundAcceleratorsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Search Fund Accelerators &amp; Incubators: Complete Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">18 min read</p>

      <div className={bodyClass}>
        <p>
          Search fund accelerators compress the learning curve of{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            entrepreneurship through acquisition
          </Link>{" "}
          by packaging capital, mentorship, deal-sourcing infrastructure, and
          investor introductions into a single program. According to the Search
          Fund Accelerator (SFA), searchers who go through an accelerator reach
          an 85% acquisition success rate, versus roughly 57-63%
          for the traditional model tracked in the 2024 Stanford GSB study of
          681 search funds. For first-time searchers without top-MBA networks or
          prior M&amp;A experience, accelerators can mean the difference between
          spending two years searching with nothing to show for it, and stepping
          into the CEO seat of a profitable business.
        </p>

        <p>
          This guide covers every major accelerator operating today, explains
          how the accelerator model differs from a{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            traditional or self-funded search
          </Link>, breaks down typical economic terms, and gives you a
          framework for deciding which program, if any, is the
          right fit for your search.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>What Search Fund Accelerators Actually Do</h2>
        <p>
          At their core, accelerators solve the &ldquo;cold start&rdquo; problem
          every new searcher faces. The traditional search fund model asks you to
          raise search capital from investors, build a deal pipeline from
          scratch, learn due diligence on the fly, negotiate your first
          acquisition, and then run a company, all within roughly 24
          months. Most searchers have never done any of these things before. The
          Stanford study found that about 37-43% of searchers fail to
          acquire a company at all, and another 28% acquire a business but
          ultimately earn little or nothing on their equity.
        </p>
        <p>
          Accelerators attack this failure rate by providing:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Structured training:</strong> Boot camps of 2-6 weeks
            covering valuation, financial modeling,{" "}
            <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
              deal sourcing
            </Link>, letter-of-intent drafting, lender relationships, and
            post-acquisition integration. SFA, for example, begins every cohort
            with a three-week intensive before searchers launch their outreach.
          </li>
          <li>
            <strong>Search capital and salary:</strong> Most accelerators pay
            searchers a salary during the search phase and fund operating costs
            (CRM tools, travel, legal fees). This removes the need to
            independently raise $400K-$500K in search capital.
          </li>
          <li>
            <strong>Acquisition equity capital:</strong> When a searcher
            identifies a target, the accelerator provides (or arranges) equity
            financing to complement the senior debt the searcher secures. SFA
            provides 100% of both search capital and equity capital from
            committed funds.
          </li>
          <li>
            <strong>Mentorship from experienced operators:</strong> Cohort
            members are paired with former searchers and CEOs who have completed
            the full cycle, search, acquisition, value creation, and
            exit. At Broadtree Partners, co-founder David Slenzak built the
            program based on the pain points of his own 2010 search fund
            experience.
          </li>
          <li>
            <strong>Peer cohorts:</strong> Groups of 4-8 searchers
            progress together, sharing leads, reviewing deal memos, and holding
            each other accountable. The Brydon Group, for instance, selects
            6-8 CEO-in-Residence executives per annual cohort.
          </li>
          <li>
            <strong>Back-office infrastructure:</strong> Legal templates,
            financial model libraries, CRM setups, data-room management, and
            post-acquisition playbooks, resources that a solo searcher
            would spend months assembling.
          </li>
          <li>
            <strong>Investor and lender introductions:</strong> Accelerators
            maintain relationships with SBA lenders, mezzanine funds, and{" "}
            <Link href="/learn/top-search-fund-investors" className="text-apple-accent hover:underline">
              active search fund investors
            </Link>. Relay Investments, for example, has invested in over 100
            search funds and provides post-acquisition operational coaching
            alongside capital.
          </li>
        </ul>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>
          Major Search Fund Accelerators &amp; Programs
        </h2>
        <p>
          The accelerator market has expanded rapidly since 2015. Below is a
          directory of the most active programs, organized by region.
        </p>

        <h3 className={h3Class}>United States</h3>
        <ul className={ulClass}>
          <li>
            <strong>Search Fund Accelerator (SFA):</strong> Founded in 2015 by
            Timothy Bovard, SFA is the original dedicated ETA accelerator. Now
            in its 10th cohort, SFA has worked with 46 searchers, 27 of whom
            have become equity-owning CEOs after acquiring businesses, a
            roughly 85% success rate among those who have concluded their
            search. SFA provides 100% of search and acquisition capital from
            committed funds and eliminates the traditional 50% step-up on search
            costs. Offices in New Orleans and Denver.
          </li>
          <li>
            <strong>Broadtree Partners:</strong> Founded in 2016 by David
            Slenzak (who completed his own search fund acquisition in 2010 and
            exited in 2016). Broadtree describes itself as &ldquo;halfway
            between a search fund and an operator-centric PE fund.&rdquo;
            Searchers are Broadtree employees during the search period, working
            in cohorts of six to target $1M-$5M EBITDA companies. At
            least 10 acquisitions completed. Based in Charlotte, North Carolina.
          </li>
          <li>
            <strong>The Brydon Group:</strong> Invests $10M-$20M in equity
            per platform and runs a CEO-in-Residence program selecting
            6-8 executives annually. Over 30% of participants come from
            veteran or underrepresented-minority backgrounds. Focuses on
            software, business services, and healthcare services.
          </li>
          <li>
            <strong>GT Entrepreneurs:</strong> Launched in 2017 by Jamie Van
            Buren. Positions itself as a capital provider and mentor with over
            100 years of collective executive-level management experience across
            its team.
          </li>
          <li>
            <strong>NextGen Growth Partners:</strong> Founded in 2016 by Brian
            O&rsquo;Connor. Data-driven model with an internal operational team.
            Strong ties to Chicago Booth and Kellogg alumni networks.
          </li>
          <li>
            <strong>DVG Partners:</strong> Founded in 2019 by Jeff Reamer.
            Specializes in military veteran leaders, with a philosophy built
            around &ldquo;Discipline, Values, and Grit.&rdquo;
          </li>
          <li>
            <strong>Halstatt Legacy Partners:</strong> Based in Naples, Florida.
            Provides 100% equity capital plus senior debt for acquisitions.
            Targets companies with $1M-$5M EBITDA and takes a long-term
            ownership approach.
          </li>
          <li>
            <strong>Majority Search:</strong> Founded in early 2022 by Tim
            Ludwig. Focuses on matching industry experts with target companies
            and providing mentorship throughout the acquisition process.
          </li>
          <li>
            <strong>Spur Acquisitions:</strong> Founded in 2017 by Drew
            Gottenborg. Smaller program with 2 completed acquisitions and 3 CEOs
            in residence.
          </li>
          <li>
            <strong>Sleeping Giant Capital:</strong> Founded by Doug Lepisto and
            Derrick McIver. Focused on Michigan and West Michigan, with 2
            completed acquisitions and 3 CEOs in residence.
          </li>
          <li>
            <strong>Kingsway Financial:</strong> A publicly listed company
            (since 2014) that launched a CEO Accelerator in 2020 targeting
            extended warranty, asset management, and real estate sectors. Owns
            five warranty companies.
          </li>
        </ul>

        <h3 className={h3Class}>Europe</h3>
        <ul className={ulClass}>
          <li>
            <strong>Novastone Capital Advisors:</strong> Founded in 2020 by
            Christian Malek. Originates from a Swiss family office (Novastone
            Capital SA) and operates across Europe and the United States. Team of
            13 core members with 3 active entrepreneurs. Raises capital on a
            searcher-by-searcher and deal-by-deal basis.
          </li>
          <li>
            <strong>Seqos:</strong> Founded in 2022. Focuses on the DACH region
            (Germany, Austria, Switzerland). Structures deals as Management
            Buy-Ins (MBIs) and targets businesses with strong market positions
            and growth potential.
          </li>
          <li>
            <strong>Tembo Search Partners:</strong> Also focused on the DACH
            region. Provides capital, network access, infrastructure, and M&amp;A
            expertise through a structured, transparent acquisition process.
          </li>
          <li>
            <strong>WAD Capital:</strong> Belgian accelerator targeting
            businesses with &euro;1M-&euro;5M EBITDA. Uses a data-driven
            cohort approach with technology-enabled company identification,
            aligned with European legacy businesses.
          </li>
          <li>
            <strong>True North Search:</strong> Focused on Northern Europe.
            Recently launched, with at least 2 entrepreneur operators onboarded.
            Provides capital, expertise, and strategic guidance for SME
            acquisitions.
          </li>
        </ul>

        <h3 className={h3Class}>Asia-Pacific, Latin America &amp; Canada</h3>
        <ul className={ulClass}>
          <li>
            <strong>Japan Search Fund Accelerator:</strong> Founded in 2018 by
            Noriko Shimazu. Partners with Yamaguchi Financial Group and Nomura.
            Provides search guidance, networking, growth strategy, and financial
            support, with 3 active searchers.
          </li>
          <li>
            <strong>Search Fund Japan:</strong> Founded in 2020 by Kimitake Ito,
            a former ETA entrepreneur. Partners with the Development Bank of
            Japan and Nihon M&amp;A Center. Japan&rsquo;s second search fund
            accelerator.
          </li>
          <li>
            <strong>SMEVentures:</strong> The leading ETA platform in the
            Asia-Pacific region. Provides deal-sourcing technology, data-driven
            insights, expert coaching, and access to an investor network.
          </li>
          <li>
            <strong>Second Squared:</strong> Australian accelerator founded by
            Lui Pangiarella and Akram Sabbagh. Offers workshops to determine
            search fit and launched Wayfinder Capital, a fund-of-funds vehicle
            for search fund investors.
          </li>
          <li>
            <strong>Regenerative Capital Group:</strong> Canadian accelerator
            with a &ldquo;Regenerative Leadership&rdquo; philosophy. Over 20
            years of acquisition experience and multiple high-value exits.
            Addresses the 76% of Canadian business owners expected to retire
            over the next decade.
          </li>
          <li>
            <strong>BETA-i:</strong> Canada&rsquo;s first Black-targeted search
            fund accelerator. Non-profit organization focused on expanding ETA
            access to underrepresented communities.
          </li>
        </ul>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>
          Accelerator vs. Traditional Search Fund vs. Self-Funded Search
        </h2>
        <p>
          The three dominant ETA models differ in funding structure, searcher
          economics, and day-to-day autonomy. Understanding these differences is
          critical before committing to any path.
        </p>

        <p>
          <strong>Traditional search fund:</strong> You raise
          $400K-$500K in search capital from 10-20 individual
          investors who receive the right (but not the obligation) to invest in
          your eventual acquisition. You control the search, but you also bear
          the full administrative burden: setting up the entity, managing
          investor communications, and building a deal pipeline from zero. The
          2024 Stanford study found a 57-63% acquisition rate. On a
          successful deal, the searcher typically earns up to 25% of equity
          8% at closing with two additional 8% tranches vesting over
          time and upon achieving return targets. However, investors benefit
          from a portfolio effect across many searchers, while each individual
          searcher has exactly one shot. Learn more in our{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            search fund economics
          </Link>{" "}
          guide.
        </p>

        <p>
          <strong>Accelerator model:</strong> The accelerator provides search
          capital, a salary, infrastructure, and equity capital at closing. SFA,
          for example, gives searchers 25% equity in their acquired business
         , the same ceiling as a traditional search, but removes
          the 50% step-up cost on search capital that traditional investors
          typically charge. In return, SFA asks searchers to contribute a small
          portion of their 25% into a &ldquo;Common Fund,&rdquo; receiving
          equivalent shares in cohort members&rsquo; businesses. This
          effectively gives each searcher diversification across the cohort,
          partially solving the single-bet problem. The trade-off: you follow
          the accelerator&rsquo;s process, timelines, and deal-screening
          criteria rather than operating with full autonomy.
        </p>

        <p>
          <strong>Self-funded search:</strong> You skip external search capital
          entirely, using personal savings or a small commitment from partners
          to fund the search, then finance the acquisition with SBA 7(a) loans,
          seller notes, and minimal outside equity. Self-funded searchers
          typically retain a majority ownership stake, 60-80% or
          more, because they are not diluting across a large investor
          group. The trade-off is personal financial risk during the search
          phase and lower acquisition capital ceilings. See our{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            traditional vs. self-funded comparison
          </Link>{" "}
          for a deeper breakdown.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>
          Typical Accelerator Terms &amp; Economics
        </h2>
        <p>
          While every accelerator structures deals differently, most share a
          common framework:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Searcher salary:</strong> Accelerators pay searchers
            $80K-$120K during the search phase (roughly 12-24
            months). This is funded from the accelerator&rsquo;s committed
            capital, not from a separately raised search fund.
          </li>
          <li>
            <strong>Equity at closing:</strong> Searchers typically receive
            20-30% of equity in the acquired business. SFA offers 25%.
            Broadtree and similar PE-hybrid models may offer less upfront equity
            but provide a salary and infrastructure that reduce personal risk.
          </li>
          <li>
            <strong>Equity contributed to the accelerator:</strong> Some
            programs ask searchers to share a portion of their equity with the
            platform (SFA&rsquo;s Common Fund model) or accept a lower equity
            percentage than a traditional searcher would receive. The Brydon
            Group, which invests $10M-$20M per platform, negotiates equity
            terms closer to a traditional PE co-investment.
          </li>
          <li>
            <strong>No step-up on search costs:</strong> In a traditional search
            fund, investors typically receive a 50% step-up on their search
            capital at closing, meaning $400K in search capital converts
            to $600K of equity credit. Most accelerators eliminate this step-up,
            which preserves more equity for the searcher.
          </li>
          <li>
            <strong>Post-acquisition support:</strong> Accelerators typically
            provide ongoing board involvement, operational coaching, and access
            to their network for 3-5 years after closing. This is a
            significant advantage over the traditional model, where investor
            involvement varies widely.
          </li>
          <li>
            <strong>Employment relationship:</strong> At some accelerators
            (notably Broadtree), searchers are employees during the search
            phase. This has implications for benefits, non-compete clauses, and
            the nature of the relationship. At others (like SFA), searchers
            operate more independently within the accelerator&rsquo;s framework.
          </li>
        </ol>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>
          Pros and Cons of the Accelerator Path
        </h2>

        <h3 className={h3Class}>Advantages</h3>
        <ul className={ulClass}>
          <li>
            <strong>Higher acquisition success rate:</strong> SFA reports 85%
            versus roughly 57-63% in the traditional model. Structured
            training, experienced mentors, and deal-flow infrastructure reduce
            the most common failure modes: poor sourcing discipline, confirmation
            bias during diligence, and inability to close financing.
          </li>
          <li>
            <strong>No independent fundraising required:</strong> You skip the
            3-6 month process of raising search capital from individual
            investors, a process that itself has a meaningful failure
            rate.
          </li>
          <li>
            <strong>Salary during the search:</strong> You are paid while
            searching, reducing the personal financial risk that causes some
            traditional searchers to rush into suboptimal deals.
          </li>
          <li>
            <strong>Cohort diversification:</strong> Programs like SFA&rsquo;s
            Common Fund allow searchers to hold equity across multiple deals,
            partially mitigating the single-deal risk inherent in all search
            fund models.
          </li>
          <li>
            <strong>Faster ramp-up:</strong> Templates, CRM systems, legal
            frameworks, and lender relationships are already in place. First
            outreach can begin within weeks rather than months.
          </li>
          <li>
            <strong>Expanded access:</strong> Accelerators like BETA-i and DVG
            Partners explicitly target underrepresented groups, Black
            entrepreneurs, military veterans, who may face additional
            barriers in the traditional investor-dependent model.
          </li>
        </ul>

        <h3 className={h3Class}>Disadvantages</h3>
        <ul className={ulClass}>
          <li>
            <strong>Less autonomy:</strong> You follow the accelerator&rsquo;s
            process, investment criteria, and timelines. If you want to pursue a
            deal outside their target profile (say, a $15M EBITDA company when
            the accelerator targets $1M-$5M), you may be constrained.
          </li>
          <li>
            <strong>Equity sharing:</strong> Giving up a portion of your equity
            to a Common Fund or accepting lower equity than a traditional
            searcher reduces your upside on a home-run outcome.
          </li>
          <li>
            <strong>Selectivity:</strong> Top accelerators accept a small
            fraction of applicants. SFA has worked with 46 searchers across 10
            cohorts, roughly 4-5 per cohort. Getting in is
            competitive.
          </li>
          <li>
            <strong>Geographic and sector constraints:</strong> Many
            accelerators focus on specific regions (Sleeping Giant in Michigan,
            Seqos in DACH) or sectors (Brydon in software and healthcare). Your
            search must align with the program&rsquo;s mandate.
          </li>
          <li>
            <strong>Reputation risk:</strong> If the accelerator has a poor
            track record or negative reputation among brokers and sellers, that
            reflects on you. Due diligence on the accelerator itself matters.
          </li>
          <li>
            <strong>Employment dynamics:</strong> At programs where searchers
            are employees (like Broadtree), you may face non-competes,
            restrictive covenants, or a power dynamic that differs from the
            traditional searcher-investor relationship.
          </li>
        </ul>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>
          How to Evaluate Which Program Is Right for You
        </h2>
        <p>
          Not all accelerators are equal, and the &ldquo;best&rdquo; program
          depends entirely on your personal situation. Here is a framework for
          evaluating your options:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Track record and transparency:</strong> Ask for specific
            numbers. How many searchers has the program worked with? How many
            acquired a business? What is the median time to close? What were
            the outcomes for searchers who did not acquire? SFA publishes its
            46-searcher, 27-CEO track record openly. Beware of programs that
            deflect these questions.
          </li>
          <li>
            <strong>Economic alignment:</strong> Review the equity structure
            carefully. Does the accelerator make money only when you make money,
            or does it charge management fees regardless of outcome? SFA
            emphasizes that its team &ldquo;only makes money if our investors
            make money, and investors only make money if searchers make
            money.&rdquo; This alignment matters.
          </li>
          <li>
            <strong>Geographic fit:</strong> If you plan to search in Germany,
            a US-based accelerator with no European deal flow is not useful.
            Programs like Novastone (pan-European), Tembo and Seqos (DACH), and
            WAD Capital (Belgium and broader Europe) are better fits for
            European searches.
          </li>
          <li>
            <strong>Sector focus:</strong> Some accelerators specialize.
            Kingsway focuses on warranty and financial services. Brydon targets
            software, business services, and healthcare. If you have a specific
            industry thesis, match it to the program&rsquo;s expertise.
          </li>
          <li>
            <strong>Post-acquisition support quality:</strong> The search is
            only the beginning. Ask detailed questions about what happens after
            closing: board composition, operational coaching frequency, access to
            functional experts (CFO, CTO, HR), and how long active support
            continues.
          </li>
          <li>
            <strong>Cohort composition:</strong> Talk to current and former
            cohort members. The peer network can be as valuable as the formal
            program. Ask about diversity of backgrounds, industries, and
            professional experience within recent cohorts.
          </li>
          <li>
            <strong>Employment vs. partnership:</strong> Clarify whether you
            will be an employee or an independent entrepreneur supported by the
            accelerator. This has legal, financial, and psychological
            implications.
          </li>
          <li>
            <strong>Exit expectations:</strong> Some accelerators (like
            permanent holding companies such as Chenmark and Permanent Equity)
            intend to hold acquired businesses indefinitely. Others expect a
            3-7 year exit. Your own timeline and goals need to match.
          </li>
        </ol>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>
          University Programs &amp; Academic Pipelines
        </h2>
        <p>
          While not accelerators in the strict operational sense, several
          university programs serve as feeders into the accelerator and
          traditional search fund ecosystems. They deserve mention because they
          provide foundational training and investor connections:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Stanford GSB Center for Entrepreneurial Studies:</strong>{" "}
            The birthplace of the search fund model in 1984. Publishes the
            biennial Search Fund Study (most recent: 2024, covering 681 funds)
            and connects students with the deepest investor network in the ETA
            world.
          </li>
          <li>
            <strong>Harvard Business School:</strong> Runs the &ldquo;Think Big,
            Buy Small&rdquo; podcast and has an active ETA club. HBS alumni form
            a significant share of traditional search fund entrepreneurs.
          </li>
          <li>
            <strong>IESE Business School (Barcelona):</strong> Publishes the
            International Search Fund Study and has trained many European and
            Latin American searchers. Strong networks across Spain, France, and
            South America.
          </li>
          <li>
            <strong>Wharton (Penn):</strong> Operates an ETA program through its
            Venture Lab, providing educational resources and connecting students
            with active search fund investors.
          </li>
          <li>
            <strong>Yale SOM ETA Club:</strong> Active student organization that
            hosts speakers, runs case competitions, and publishes research on
            search fund structures.
          </li>
          <li>
            <strong>Chicago Booth and Kellogg:</strong> Strong Midwest ETA
            networks. NextGen Growth Partners, based in Chicago, draws heavily
            from these alumni pools.
          </li>
          <li>
            <strong>MIT Sloan:</strong> Runs ETA programming through its
            Venture Capital and Private Equity Club and connects students with
            search fund investors in the Boston ecosystem.
          </li>
        </ul>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>
          Do You Actually Need an Accelerator?
        </h2>
        <p>
          An accelerator is not the only path, and it is not the right path for
          everyone. Consider whether you need one by honestly assessing three
          dimensions:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>An accelerator is a strong fit if:</strong> You are a
            first-time searcher without an MBA from a target school, you lack
            existing relationships with{" "}
            <Link href="/learn/top-search-fund-investors" className="text-apple-accent hover:underline">
              search fund investors
            </Link>, you benefit from structured accountability and peer
            pressure, or you want to reduce the personal financial risk of a
            solo search. The expanded access programs (BETA-i, DVG Partners)
            also serve searchers from non-traditional backgrounds who may face
            steeper barriers to raising search capital independently.
          </li>
          <li>
            <strong>An accelerator is less necessary if:</strong> You have an
            MBA from Stanford, HBS, or Wharton with embedded investor
            relationships; you have significant prior M&amp;A, operating, or
            consulting experience; or you have a strong personal thesis about a
            specific geography or industry that does not align with any
            existing accelerator&rsquo;s mandate.
          </li>
          <li>
            <strong>Consider{" "}
            <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
              self-funded search
            </Link>{" "}
            instead if:</strong> You want majority ownership, you are targeting
            smaller deals ($500K-$3M enterprise value) that do not fit
            the accelerator&rsquo;s profile, or you have access to SBA 7(a)
            financing and can tolerate the personal guarantee risk. Self-funded
            searchers trade institutional support for greater equity and
            autonomy.
          </li>
        </ul>

        <p>
          Regardless of which path you choose, take our{" "}
          <Link href="/learn/is-eta-right-for-you" className="text-apple-accent hover:underline">
            &ldquo;Is ETA right for you?&rdquo; assessment
          </Link>{" "}
          as a starting point, and read the{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing strategies
          </Link>{" "}
          guide to understand what the search process actually looks like
          day-to-day, whether inside or outside an accelerator.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          How much equity do accelerator searchers give up compared to
          traditional searchers?
        </h3>
        <p>
          In most accelerator programs, searchers receive 20-30% equity
          in their acquired business. SFA offers 25%, the same ceiling
          as a traditional search fund, but without the 50% step-up on
          search costs that traditional investors charge. The key difference is
          that some accelerators ask searchers to contribute a portion of their
          equity to a common pool (giving you diversification across cohort
          deals) or accept a lower percentage in exchange for the salary,
          infrastructure, and higher acquisition probability the program
          provides.
        </p>

        <h3 className={h3Class}>
          What is the success rate of search fund accelerators?
        </h3>
        <p>
          SFA reports an 85% acquisition success rate among searchers who have
          concluded their search, compared to 57-63% for the traditional
          model (per the 2024 Stanford GSB study of 681 funds). However,
          accelerators are selective about who they admit, so their higher
          success rate partially reflects the quality of candidates they
          attract, not just the value of the program. Across the broader
          accelerator market, published success data is limited , 
          always ask a specific program for its numbers before committing.
        </p>

        <h3 className={h3Class}>
          Can I join an accelerator without an MBA?
        </h3>
        <p>
          Yes. Unlike the traditional search fund model, which historically
          draws heavily from top MBA programs, accelerators have explicitly
          broadened the talent pool. SFA states it has worked with searchers
          &ldquo;from a wide variety of professional and educational
          backgrounds.&rdquo; Programs like DVG Partners (military veterans),
          BETA-i (Black entrepreneurs in Canada), and the Brydon Group (over
          30% from veteran or underrepresented-minority backgrounds) are
          designed to serve candidates outside the traditional MBA pipeline.
          What matters more than credentials is demonstrated grit, operational
          aptitude, and a genuine commitment to running a business for the long
          term.
        </p>

        <h3 className={h3Class}>
          How long does the accelerator process take from start to acquisition?
        </h3>
        <p>
          Most accelerator-backed searches take 12-24 months from program
          start to closing an acquisition. The initial boot camp or training
          phase typically runs 2-6 weeks, followed by 10-20 months
          of active search, due diligence, and deal closing. SFA begins each
          cohort with a three-week intensive, while Broadtree and similar
          programs integrate training into the search process more
          continuously. These timelines are comparable to the traditional model
          (average 20-22 months), but accelerator searchers typically
          begin productive outreach sooner because the infrastructure is already
          in place.
        </p>

        <h3 className={h3Class}>
          Are there accelerators outside the United States?
        </h3>
        <p>
          The international accelerator ecosystem has grown significantly since
          2018. Europe is served by Novastone Capital Advisors (pan-European),
          Seqos and Tembo (DACH region), WAD Capital (Belgium), and True North
          Search (Northern Europe). Japan has two accelerators: Japan Search
          Fund Accelerator (founded 2018) and Search Fund Japan (founded 2020),
          both partnered with major financial institutions. Australia has Second
          Squared. Canada has Regenerative Capital Group and BETA-i. As the ETA
          model spreads globally, expect further accelerator launches in Latin
          America, Southeast Asia, and the Middle East over the coming years.
        </p>
      </div>
    </article>
  );
}
