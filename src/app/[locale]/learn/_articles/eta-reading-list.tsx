import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function ETAReadingListArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        The Essential ETA Reading List: Books, Papers &amp; Resources Every
        Searcher Needs
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Entrepreneurship through acquisition rewards the well-prepared. The
          difference between a searcher who raises capital in weeks and one who
          stalls for months often comes down to how deeply they&rsquo;ve studied
          the model before launching. This curated reading list compiles the
          books, academic papers, podcasts, and communities that experienced
          search fund investors and operators consistently recommend. Whether
          you&rsquo;re evaluating{" "}
          <Link
            href="/learn/is-eta-right-for-you"
            className="text-apple-accent hover:underline"
          >
            whether ETA is right for you
          </Link>{" "}
          or already sourcing deals, these resources will sharpen your judgment
          at every stage of the search fund journey.
        </p>

        {/* ────────────────────────────────────────── */}
        <h2 className={h2Class}>
          Foundational Books: Learning the Search Fund Model
        </h2>
        <p>
          Before you commit two years and investor capital to a search, you need
          a clear mental model of how{" "}
          <Link
            href="/learn/what-is-eta"
            className="text-apple-accent hover:underline"
          >
            entrepreneurship through acquisition
          </Link>{" "}
          actually works&mdash;from fundraising through exit. These three books
          are where nearly every successful searcher begins.
        </p>

        <p>
          <strong>
            &ldquo;HBR Guide to Buying a Small Business&rdquo; by Richard S.
            Ruback &amp; Royce Yudkoff
          </strong>{" "}
          &mdash; Harvard Business School professors Ruback and Yudkoff wrote
          what the search fund community treats as its founding text. The book
          walks through each stage of the acquisition process: deciding whether
          the path fits your goals, raising capital, screening targets,
          performing due diligence, negotiating a letter of intent, and closing.
          What makes it essential is its specificity&mdash;the authors draw on
          decades of teaching HBS&rsquo;s &ldquo;Entrepreneurship through
          Acquisition&rdquo; course and real student deal outcomes. If you read
          only one book before launching a search, this is the one. Published by{" "}
          <a
            href="https://store.hbr.org/product/hbr-guide-to-buying-a-small-business/10090"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Harvard Business Review Press
          </a>
          , it remains the single most-cited title in ETA circles.
        </p>

        <p>
          <strong>
            &ldquo;Buy Then Build: How Acquisition Entrepreneurs Outsmart the
            Startup Game&rdquo; by Walker Deibel
          </strong>{" "}
          &mdash; While Ruback and Yudkoff focus on the traditional search fund
          model, Deibel broadens the lens to all forms of acquisition
          entrepreneurship&mdash;self-funded searches, independent sponsors, and
          small-business buyouts. His nine-step framework covers deal sourcing,
          valuation, financing structures, and post-acquisition growth. The book
          is particularly useful for searchers weighing a{" "}
          <Link
            href="/learn/search-fund-economics"
            className="text-apple-accent hover:underline"
          >
            self-funded search versus a traditional fund
          </Link>
          , because Deibel explains the trade-offs in ownership dilution,
          timeline, and risk with concrete numbers.
        </p>

        <p>
          <strong>
            &ldquo;Search Funds &amp; Entrepreneurial Acquisitions&rdquo; by Jan
            Simon
          </strong>{" "}
          &mdash; Simon, a managing partner at Vonzeo Capital and an academic
          director at{" "}
          <a
            href="https://www.iese.edu/entrepreneurship/search-funds/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            IESE Business School
          </a>
          , wrote the most data-driven book on the search fund model. Drawing on
          both the Stanford and IESE datasets, he traces the movement from its
          mid-1980s Harvard and Stanford MBA origins through to a global asset
          class that, as he documents, has turned &ldquo;$1.4 billion of
          investments into $8.7 billion.&rdquo; The book covers fundraising,
          investor relations, deal sourcing, due diligence, financing, and
          post-acquisition management&mdash;making it especially strong for
          searchers planning to raise a traditional fund with institutional
          investors.
        </p>

        {/* ────────────────────────────────────────── */}
        <h2 className={h2Class}>
          Academic Papers: The Data Behind Search Fund Returns
        </h2>
        <p>
          Search funds are one of the few entrepreneurial models with decades of
          rigorous academic tracking. These studies are not optional
          reading&mdash;they are the empirical backbone of every investor pitch
          and every serious feasibility analysis. Understanding{" "}
          <Link
            href="/learn/search-fund-history"
            className="text-apple-accent hover:underline"
          >
            the history of search funds
          </Link>{" "}
          means understanding the data these papers contain.
        </p>

        <p>
          <strong>Stanford Search Fund Studies (1996&ndash;present)</strong>{" "}
          &mdash; Published by{" "}
          <a
            href="https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Stanford&rsquo;s Center for Entrepreneurial Studies
          </a>
          , these biennial reports are the gold standard for search fund
          performance data. The{" "}
          <Link
            href="/learn/stanford-2024-study"
            className="text-apple-accent hover:underline"
          >
            2024 study
          </Link>{" "}
          analyzed 681 funds formed between 1984 and 2023, reporting a 35.1%
          aggregate pre-tax IRR, 4.5x return on invested capital, and a 63%
          acquisition rate. Researchers Sara Heston and Peter Kelly assemble each
          edition through standardized surveys of searchers and investors. Every
          searcher should study the latest release cover to cover&mdash;it
          reveals which industries, deal sizes, and fund structures correlate
          with the strongest outcomes.
        </p>

        <p>
          <strong>
            IESE International Search Fund Study (2016&ndash;present)
          </strong>{" "}
          &mdash; While Stanford tracks primarily U.S. and Canadian funds, IESE
          fills the gap for the rest of the world. The{" "}
          <a
            href="https://www.iese.edu/media/research/pdfs/ST-0658-E"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            2024 IESE report
          </a>{" "}
          covers 320 international search funds across 40 countries, documenting
          an 18.1% aggregate IRR and a 2.0x return on investment. A record 59
          new international funds launched in 2023 alone, with the model debuting
          in six new markets including the Netherlands, South Africa, and
          Vietnam. If you&rsquo;re considering a cross-border search or a
          European target, this study is indispensable for benchmarking deal
          size, EBITDA margins, and fund structure norms internationally.
        </p>

        <p>
          <strong>
            &ldquo;Entrepreneurship through Acquisition: A Scoping Review&rdquo;
            (Management Review Quarterly, Springer)
          </strong>{" "}
          &mdash; Published in{" "}
          <a
            href="https://link.springer.com/article/10.1007/s11301-023-00352-6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Management Review Quarterly
          </a>
          , this systematic review maps the entire market of ETA academic
          literature&mdash;identifying research gaps, methodological approaches,
          and the evolving definition of acquisition entrepreneurship. It is the
          best single source for understanding what scholars have and have not
          yet studied about search funds.
        </p>

        <p>
          <strong>Stanford Search Fund Primer</strong> &mdash; Distinct from the
          biennial data studies, the{" "}
          <a
            href="https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds/primer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Stanford Primer
          </a>{" "}
          is a free, narrative guide that answers the most common questions new
          searchers ask: How do I structure a search fund? How much capital do I
          need? What do investors expect? It synthesizes operational and
          execution tips from prior search fund entrepreneurs, making it the
          ideal companion to the quantitative studies above.
        </p>

        {/* ────────────────────────────────────────── */}
        <h2 className={h2Class}>
          Deal Execution: Finance, Valuation &amp; Due Diligence
        </h2>
        <p>
          Once you&rsquo;ve identified a target, the search shifts from research
          to execution. These books build the financial literacy and analytical
          rigor required to evaluate businesses, structure deals, and close
          without costly mistakes. A solid understanding of{" "}
          <Link
            href="/learn/financial-due-diligence"
            className="text-apple-accent hover:underline"
          >
            financial due diligence
          </Link>{" "}
          separates capable searchers from those who overpay or miss fatal flaws.
        </p>

        <p>
          <strong>
            &ldquo;Financial Intelligence for Entrepreneurs&rdquo; by Karen
            Berman &amp; Joe Knight
          </strong>{" "}
          &mdash; Many searchers come from consulting, banking, or engineering
          backgrounds&mdash;strong on strategy, weaker on the accounting
          fundamentals they&rsquo;ll need to interrogate a target&rsquo;s
          financials. Berman and Knight break down income statements, balance
          sheets, cash-flow statements, and financial ratios in plain language.
          Their core insight&mdash;what they call the &ldquo;art of
          finance&rdquo;&mdash;is that financial statements reflect decisions,
          assumptions, and estimates, not objective truth. For a searcher
          evaluating a small business with owner-adjusted EBITDA, that
          perspective is critical. Published by{" "}
          <a
            href="https://store.hbr.org/product/financial-intelligence-for-entrepreneurs-what-you-really-need-to-know-about-the-numbers/1915"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Harvard Business Review Press
          </a>
          .
        </p>

        <p>
          <strong>
            &ldquo;A Practical Guide to Buying a Business&rdquo; by Robert
            Chalfin
          </strong>{" "}
          &mdash; Chalfin&rsquo;s book focuses squarely on the mechanics that
          trip up first-time acquirers: structuring letters of intent,
          negotiating seller financing, understanding earn-outs, and navigating
          the gap between signing and closing. It includes sample term sheets,
          checklists, and agreement templates&mdash;the kind of practical
          scaffolding that theoretical books leave out. Particularly valuable for
          self-funded searchers who lack the institutional support of a
          traditional fund.
        </p>

        <p>
          <strong>
            &ldquo;The Messy Marketplace&rdquo; by Brent Beshore
          </strong>{" "}
          &mdash; Written from the perspective of a buyer who has completed
          hundreds of small-business evaluations, Beshore explains why the lower
          middle market is chaotic: sellers have emotional attachments,
          information is incomplete, and deal processes rarely follow textbook
          timelines. By understanding the seller&rsquo;s psychology, searchers
          learn to build rapport, frame offers more effectively, and avoid the
          adversarial dynamics that kill deals. This is the book that teaches you
          how real transactions actually feel.
        </p>

        <p>
          <strong>
            &ldquo;Value: The Four Cornerstones of Corporate Finance&rdquo; by
            McKinsey &amp; Company (Koller, Goedhart &amp; Wessels)
          </strong>{" "}
          &mdash; When you need to build a discounted cash flow model, justify a
          purchase price to your investor group, or compare a target to public
          market comparables, this is the reference text. Dense and technical, it
          is not a cover-to-cover read&mdash;but having it on your desk during
          due diligence will save hours of second-guessing your valuation
          assumptions.
        </p>

        {/* ────────────────────────────────────────── */}
        <h2 className={h2Class}>
          Post-Acquisition Operations: Leading the Business You Bought
        </h2>
        <p>
          Acquiring a company is the midpoint of the ETA journey, not the
          destination. The first year as CEO determines whether you create value
          or destroy it. The books below address the operational challenges that
          search fund CEOs face from day one&mdash;challenges that are distinct
          from those covered in our guide to the{" "}
          <Link
            href="/learn/first-100-days"
            className="text-apple-accent hover:underline"
          >
            first 100 days after acquisition
          </Link>
          .
        </p>

        <p>
          <strong>
            &ldquo;The First 90 Days&rdquo; by Michael D. Watkins
          </strong>{" "}
          &mdash; Watkins wrote the definitive playbook for leaders transitioning
          into new roles, and search fund CEOs face one of the most complex
          transitions imaginable: stepping into a company you&rsquo;ve never
          worked at, managing employees who may be skeptical of the new owner,
          and proving to investors that you can execute your thesis. The
          book&rsquo;s frameworks for diagnosing organizational culture,
          identifying early wins, and building credibility are directly
          applicable. Many search fund investors recommend it as required
          pre-closing reading.
        </p>

        <p>
          <strong>&ldquo;Traction&rdquo; by Gino Wickman</strong> &mdash;
          Wickman&rsquo;s Entrepreneurial Operating System (EOS) provides a
          step-by-step framework for running a small-to-midsize business:
          setting a clear vision, building accountability, establishing meeting
          rhythms, and tracking a handful of key metrics. For a search fund CEO
          inheriting a business that may lack formal management systems, EOS is
          one of the fastest paths to operational clarity. The{" "}
          <a
            href="https://www.newtonequity.com/search-fund-library"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Search Fund Institute
          </a>{" "}
          includes Wickman&rsquo;s work in its recommended resources for
          post-acquisition operators.
        </p>

        <p>
          <strong>
            &ldquo;Good to Great&rdquo; by Jim Collins
          </strong>{" "}
          &mdash; Collins&rsquo;s research identified the patterns that separate
          companies with sustained excellence from those that plateau. His
          concept of Level 5 Leadership&mdash;leaders who combine personal
          humility with professional will&mdash;resonates deeply in the search
          fund context, where CEOs must earn authority rather than inherit it.
          The Hedgehog Concept (finding the intersection of what you can be best
          at, what drives your economic engine, and what you are passionate
          about) gives search fund operators a strategic lens for focusing
          limited resources. It is not a tactical manual, but it shapes the
          mindset that distinguishes transformative search fund CEOs from merely
          adequate ones.
        </p>

        <p>
          <strong>
            &ldquo;The E-Myth Revisited&rdquo; by Michael E. Gerber
          </strong>{" "}
          &mdash; Gerber&rsquo;s central argument&mdash;that most small
          businesses are run by technicians who got trapped in management roles,
          not entrepreneurs who built scalable systems&mdash;describes the exact
          condition of many search fund acquisition targets. The book teaches you
          to see a business as a set of repeatable processes rather than a
          collection of tribal knowledge, which is precisely the perspective a
          new CEO needs when documenting, standardizing, and improving the
          operations of a company that has been run by its founder for twenty
          years.
        </p>

        {/* ────────────────────────────────────────── */}
        <h2 className={h2Class}>
          Podcasts &amp; Communities: Learning from Active Practitioners
        </h2>
        <p>
          Books and papers provide theory and data. Podcasts and communities
          provide real-time pattern recognition from people actively doing deals.
          The search fund world is small enough that relationships formed in
          these communities often lead directly to co-investment opportunities,
          deal referrals, and mentorship.
        </p>

        <p>
          <strong>Think Like an Owner</strong> &mdash; Hosted by Alex Rumble,
          this{" "}
          <a
            href="https://tlaopodcast.com/podcasts/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            podcast
          </a>{" "}
          features in-depth interviews with search fund entrepreneurs, small
          company operators, and micro-PE investors. Episodes range from
          searchers describing their deal sourcing process to CEOs reflecting on
          their first year running an acquired business. The Stanford Search Fund
          Study episode with Sara Heston and Peter Kelly is particularly worth
          listening to for anyone evaluating{" "}
          <Link
            href="/learn/search-fund-returns"
            className="text-apple-accent hover:underline"
          >
            search fund return profiles
          </Link>
          .
        </p>

        <p>
          <strong>INSEAD ETA and Search Funds Podcast</strong> &mdash;
          INSEAD&rsquo;s podcast draws from its global network of searchers,
          operators, and investors, with a strong focus on European and
          international ETA. Episodes frequently cover topics underrepresented in
          U.S.-centric resources: cross-border deal structures, cultural
          dynamics in Continental European acquisitions, and the role of
          partnerships in international search funds (which, per IESE data, make
          up 40% of funds outside North America).
        </p>

        <p>
          <strong>Searchfunder.com</strong> &mdash; The largest online community
          dedicated to search funds, co-founded by MIT graduates Luke Tatone and
          Mark Yuan.{" "}
          <a
            href="https://www.searchfunder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Searchfunder
          </a>{" "}
          hosts active forums where searchers share deal flow strategies, compare
          investor terms, and discuss operational challenges
          post-acquisition. Its value lies in the specificity of the
          conversations&mdash;real numbers, real deal structures, real lessons
          from people in the middle of their searches. For those exploring{" "}
          <Link
            href="/learn/search-fund-accelerators"
            className="text-apple-accent hover:underline"
          >
            search fund accelerators
          </Link>{" "}
          and programs, the community threads are among the most candid sources
          of feedback on different platforms.
        </p>

        {/* ────────────────────────────────────────── */}
        <h2 className={h2Class}>
          Conferences: Where Relationships and Deals Get Made
        </h2>
        <p>
          The search fund ecosystem runs on trust, and trust is built in person.
          These three conferences are where searchers meet their future
          investors, where investors compare notes on fund performance, and where
          operators share lessons that never make it into published case studies.
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Stanford Search Fund CEO Conference</strong> (Stanford, CA)
            &mdash; The original and most prestigious search fund gathering,
            hosted by Stanford&rsquo;s Center for Entrepreneurial Studies. It
            attracts the densest concentration of experienced search fund
            investors in one room. Attending as a pre-search candidate signals
            seriousness and opens doors to capital.
          </li>
          <li>
            <strong>IESE Search Fund Conference</strong> (Barcelona) &mdash; The
            premier European ETA event, held annually at IESE Business School.
            With international search funds growing at a record pace&mdash;59
            new funds in 2023 alone&mdash;this conference has become the primary
            networking hub for European and Latin American searchers and their
            investor base.
          </li>
          <li>
            <strong>INSEAD ETA Conference</strong> (Fontainebleau) &mdash; INSEAD
            has built a dedicated ETA research and resource platform connecting
            entrepreneurs, investors, and board members from across Europe,
            Africa, and Asia. The annual conference features panels with
            operators and investors and is particularly strong for searchers
            interested in francophone and emerging-market acquisitions.
          </li>
        </ul>

        {/* ────────────────────────────────────────── */}
        <h2 className={h2Class}>
          How to Build Your Own Reading Sequence
        </h2>
        <p>
          Not every book on this list belongs in your pre-search phase. The most
          effective approach is to match your reading to your stage:
        </p>

        <ol className={olClass}>
          <li>
            <strong>Exploring ETA (months 1&ndash;3):</strong> Start with the
            HBR Guide, the Stanford Primer, and the latest Stanford and IESE
            studies. This gives you the conceptual framework and the data to
            decide whether the model fits your goals and risk tolerance.
          </li>
          <li>
            <strong>Pre-search preparation (months 3&ndash;6):</strong> Add
            &ldquo;Buy Then Build,&rdquo; Jan Simon&rsquo;s book, and
            &ldquo;Financial Intelligence for Entrepreneurs.&rdquo; Begin
            listening to Think Like an Owner and join Searchfunder.com. Attend a
            conference if timing allows.
          </li>
          <li>
            <strong>Active search and deal execution:</strong> Reach for
            Chalfin&rsquo;s &ldquo;Practical Guide,&rdquo; &ldquo;The Messy
            Marketplace,&rdquo; and the McKinsey valuation text as reference
            works when you&rsquo;re screening targets, building models, and
            negotiating LOIs.
          </li>
          <li>
            <strong>Post-acquisition (first 100 days and beyond):</strong>{" "}
            &ldquo;The First 90 Days,&rdquo; &ldquo;Traction,&rdquo; &ldquo;The
            E-Myth Revisited,&rdquo; and &ldquo;Good to Great&rdquo; become your
            operational playbooks. Revisit the Stanford studies annually to
            benchmark your performance against the broader search fund dataset.
          </li>
        </ol>

        <p>
          The single biggest mistake aspiring searchers make is reading too
          broadly and acting too late. Pick five titles from this list that match
          your current stage, finish them within thirty days, and then start
          conversations with investors and operators. The reading is preparation,
          not a substitute for action.
        </p>

        {/* ────────────────────────────────────────── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          What is the single best book for someone new to ETA?
        </h3>
        <p>
          The &ldquo;HBR Guide to Buying a Small Business&rdquo; by Ruback and
          Yudkoff is the most universally recommended starting point. It covers
          the full acquisition lifecycle in under 200 pages, written by the two
          professors who built Harvard&rsquo;s ETA curriculum. Pair it with the
          free Stanford Search Fund Primer for a complete introduction to both
          the practical and academic sides of the model.
        </p>

        <h3 className={h3Class}>
          Are the Stanford and IESE search fund studies available for free?
        </h3>
        <p>
          Yes. Both the{" "}
          <a
            href="https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Stanford Search Fund Studies
          </a>{" "}
          and the{" "}
          <a
            href="https://www.iese.edu/entrepreneurship/search-funds/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            IESE International Search Fund Studies
          </a>{" "}
          are published as free PDFs by their respective business schools.
          Stanford publishes a new edition every two years (even years), while
          IESE publishes on a similar biennial cycle. They are the most important
          free resources in the search fund ecosystem.
        </p>

        <h3 className={h3Class}>
          Should I focus on books about search funds specifically, or general
          business acquisition books?
        </h3>
        <p>
          Both. Search-fund-specific books (Ruback &amp; Yudkoff, Jan Simon)
          teach you the unique structural elements of ETA: investor
          relationships, search fund economics, and the two-phase capital raise.
          General acquisition books (Chalfin, Beshore, Berman &amp; Knight) fill
          in the operational skills&mdash;financial analysis, negotiation, due
          diligence mechanics&mdash;that are universal across deal types. A
          well-rounded searcher reads both categories.
        </p>

        <h3 className={h3Class}>
          How important are podcasts and communities compared to books?
        </h3>
        <p>
          Books give you frameworks; communities give you pattern recognition.
          Platforms like Searchfunder.com expose you to dozens of real deal
          experiences that no single book could capture&mdash;including failures,
          broken deals, and lessons about specific industries or geographies.
          Podcasts like Think Like an Owner compress years of operator experience
          into hour-long conversations. The most successful searchers
          combine structured book learning with active community participation
          from the earliest stages of their exploration.
        </p>

        <h3 className={h3Class}>
          What should I read to understand search fund returns and investor
          expectations?
        </h3>
        <p>
          Start with the latest Stanford Search Fund Study for hard return
          data&mdash;the 2024 edition reports 35.1% aggregate IRR and 4.5x ROIC
          across 681 funds. Then read Jan Simon&rsquo;s book for the
          investor&rsquo;s perspective on fund structure and economics. For a
          broader context on how search fund returns compare to other asset
          classes, explore our detailed analysis of{" "}
          <Link
            href="/learn/search-fund-returns"
            className="text-apple-accent hover:underline"
          >
            historical search fund returns
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
