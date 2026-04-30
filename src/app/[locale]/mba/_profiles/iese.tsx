import Link from "next/link";
import {
  profileH1,
  profileH2,
  profileH3,
  profileBody,
  profileUl,
  profileTable,
  profileTh,
  profileTd,
} from "./shared-styles";

export default function IESEProfile() {
  return (
    <article>
      <h1 className={profileH1}>
        IESE Business School: Europe&rsquo;s Search Fund Capital
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={profileBody}>
        {/* ── 1. Opening narrative ─────────────────────────────────── */}
        <p>
          In 2019, Yoshiaki Kurosawa walked out of IESE Business School with an
          MBA, a network that spanned four continents, and a conviction that the
          search fund model could work in a country where nobody had tried it.
          Within a year he had raised capital, incorporated JBS Partners GK, and
          begun the painstaking process of sourcing acquisition targets across
          Japan. No playbook existed. No local investor understood the
          traditional search fund structure. Kurosawa built the market from
          scratch, becoming the founder of Japan&rsquo;s first search fund. His
          journey illustrates what makes IESE different from every other
          business school in Europe: IESE does not merely teach the search fund
          model; it exports it to new geographies.
        </p>

        <p>
          Kurosawa&rsquo;s story is not an outlier. More than 60 IESE alumni
          have raised search funds across 20 countries and five continents,
          making Barcelona the unlikely epicenter of the global search fund
          movement. For anyone considering{" "}
          <Link
            href="/learn/getting-started"
            className="text-apple-accent hover:underline"
          >
            getting started with a search fund
          </Link>
          , IESE deserves serious attention.
        </p>

        {/* ── 2. Why IESE matters for international ETA ───────────── */}
        <h2 className={profileH2}>
          Why IESE matters for international ETA
        </h2>
        <p>
          Stanford GSB invented the search fund in 1984. Harvard Business School
          built the deepest case-study library. But when the model crossed the
          Atlantic, it was IESE that caught it and turned Barcelona into the
          academic home of international ETA. Today, IESE occupies a unique
          position: the only European school with a dedicated research center
          for search funds, a biennial study tracking hundreds of international
          funds, and a faculty member whose entire academic appointment revolves
          around the model.
        </p>
        <p>
          The school&rsquo;s influence extends well beyond the classroom. The
          IESE International Search Fund Study is the definitive dataset for
          search funds outside North America, cited by investors, searchers, and
          academics worldwide. When European and Latin American investors
          evaluate a search fund, they benchmark it against IESE data. When a
          searcher in Southeast Asia wants to understand comparable returns, the
          IESE study is where they look. This data authority gives IESE alumni a
          structural advantage: they enter investor conversations already
          speaking the same language. For a broader comparison of top programs,
          see our{" "}
          <Link
            href="/learn/best-mba-for-search-fund"
            className="text-apple-accent hover:underline"
          >
            ranking of the best MBAs for search fund careers
          </Link>
          .
        </p>

        {/* ── 3. The International Search Fund Center ─────────────── */}
        <h2 className={profileH2}>
          The International Search Fund Center
        </h2>
        <p>
          Established in 2011, the IESE International Search Fund (ISF) Center
          was the first institution dedicated to search fund research outside
          North America. The center tracks the full lifecycle of international
          search funds, from initial fundraising through acquisition and exit,
          across every continent where the model has taken root. By the time of
          its 2024 study, the center had catalogued 320 international search
          funds.
        </p>
        <p>
          The ISF Center serves three functions. First, it produces the biennial
          International Search Fund Study, the most comprehensive dataset on
          non-US search fund activity. Second, it connects current MBA students
          with the global community of searchers, investors, and advisors
          through events, mentorship, and deal-flow introductions. Third, it
          acts as an institutional advocate for the search fund model within
          European and international finance, helping to legitimize a path that
          remains unfamiliar to many traditional investors outside the United
          States. For context on Europe&rsquo;s growing role in ETA, see our{" "}
          <Link
            href="/learn/european-search-fund-research"
            className="text-apple-accent hover:underline"
          >
            overview of European search fund research
          </Link>
          .
        </p>

        {/* ── 4. Faculty ──────────────────────────────────────────── */}
        <h2 className={profileH2}>Faculty</h2>
        <p>
          IESE&rsquo;s search fund teaching is led by Jan Simon, Professor of
          Practice and Academic Director of the ISF Center. Simon teaches the
          MBA search fund elective and co-directs the center&rsquo;s research
          agenda. His position as a Professor of Practice means his teaching
          draws directly from the real-world economics of search fund deals
          rather than purely theoretical models. Simon brings operational
          credibility to a field where academic expertise alone is not enough.
        </p>
        <p>
          On the research side, Ann-Sophie Kowalewski, a PhD candidate at IESE,
          serves as lead author of the 2024 International Search Fund Study.
          Kowalewski&rsquo;s work has sharpened the study&rsquo;s methodology
          and expanded its geographic coverage, making the 2024 edition the most
          rigorous to date. The combination of Simon&rsquo;s practitioner lens
          and Kowalewski&rsquo;s research rigor gives IESE a faculty profile
          that few European programs can match.
        </p>

        {/* ── 5. Course offerings ─────────────────────────────────── */}
        <h2 className={profileH2}>Course offerings</h2>
        <p>
          IESE offers two structured pathways into search fund education: an MBA
          elective and an executive education bootcamp.
        </p>

        <h3 className={profileH3}>Search Fund Course (MBA Elective)</h3>
        <p>
          The four-module MBA elective, taught by Jan Simon, walks students
          through the full search fund lifecycle. It covers fundraising
          mechanics, deal sourcing and screening, due diligence, negotiation and
          structuring, post-acquisition operations, and investor relations.
          Students work through real case studies drawn from IESE alumni
          experiences and ISF Center data. The course is designed for students
          who are seriously considering a search fund after graduation, though it
          also attracts those interested in{" "}
          <Link
            href="/learn/finding-investors"
            className="text-apple-accent hover:underline"
          >
            finding investors
          </Link>{" "}
          for other acquisition-driven strategies.
        </p>

        <h3 className={profileH3}>
          Search Fund &amp; Entrepreneurial Acquisitions Bootcamp
        </h3>
        <p>
          The executive education bootcamp is a four-day intensive program
          priced at EUR 4,500. It targets working professionals, career
          changers, and early-stage searchers who want a concentrated
          introduction to the model without committing to a full MBA. The
          bootcamp covers the same strategic framework as the MBA elective but
          compresses it into an immersive format with guest speakers from the
          IESE alumni network. For those weighing the{" "}
          <Link
            href="/learn/mba-and-eta"
            className="text-apple-accent hover:underline"
          >
            MBA-and-ETA decision
          </Link>
          , the bootcamp can serve as a useful trial before a larger commitment.
        </p>

        <table className={profileTable}>
          <thead>
            <tr>
              <th className={profileTh}>Program</th>
              <th className={profileTh}>Format</th>
              <th className={profileTh}>Duration</th>
              <th className={profileTh}>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={profileTd}>Search Fund Course (MBA Elective)</td>
              <td className={profileTd}>MBA curriculum</td>
              <td className={profileTd}>4 modules</td>
              <td className={profileTd}>Included in MBA tuition</td>
            </tr>
            <tr>
              <td className={profileTd}>
                Search Fund &amp; EA Bootcamp (Exec Ed)
              </td>
              <td className={profileTd}>Executive education</td>
              <td className={profileTd}>4 days</td>
              <td className={profileTd}>EUR 4,500</td>
            </tr>
          </tbody>
        </table>

        {/* ── 6. The IESE International SF Study ──────────────────── */}
        <h2 className={profileH2}>
          The IESE International Search Fund Study
        </h2>
        <p>
          The biennial International Search Fund Study is IESE&rsquo;s most
          significant contribution to the field. The 2024 edition, led by
          Ann-Sophie Kowalewski, tracked 320 international search funds and
          documented record-breaking activity: 59 new funds launched in 2023 and
          31 acquisitions completed in the same year, both all-time highs.
        </p>
        <p>
          The headline return metrics tell a story of solid but disciplined
          performance. International search funds have generated an aggregate
          return on investment (ROI) of 2.0x and an internal rate of return
          (IRR) of 18.1%. These figures sit below the North American benchmarks
          published in the Stanford Search Fund Study, which is expected given
          the younger vintage of international funds and the added complexity of
          operating across diverse regulatory environments. Still, 18.1% IRR is
          a compelling risk-adjusted return for an asset class that gives
          operators direct control over value creation.
        </p>

        <table className={profileTable}>
          <thead>
            <tr>
              <th className={profileTh}>Metric</th>
              <th className={profileTh}>Value (2024 Study)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={profileTd}>Total international SFs tracked</td>
              <td className={profileTd}>320</td>
            </tr>
            <tr>
              <td className={profileTd}>New funds launched in 2023</td>
              <td className={profileTd}>59 (record)</td>
            </tr>
            <tr>
              <td className={profileTd}>Acquisitions completed in 2023</td>
              <td className={profileTd}>31 (record)</td>
            </tr>
            <tr>
              <td className={profileTd}>Aggregate ROI</td>
              <td className={profileTd}>2.0x</td>
            </tr>
            <tr>
              <td className={profileTd}>Aggregate IRR</td>
              <td className={profileTd}>18.1%</td>
            </tr>
            <tr>
              <td className={profileTd}>Top country by cumulative funds</td>
              <td className={profileTd}>Spain (67)</td>
            </tr>
            <tr>
              <td className={profileTd}>% of founders with an MBA</td>
              <td className={profileTd}>71%</td>
            </tr>
          </tbody>
        </table>

        <p>
          Spain leads all countries with 67 cumulative search funds, reflecting
          both IESE&rsquo;s Barcelona base and Spain&rsquo;s fragmented SME
          landscape. The study also found that 71% of international search fund
          founders hold an MBA, confirming the degree&rsquo;s continued
          relevance in ETA even as non-MBA pathways expand. For those exploring
          the Spanish market specifically, our guide to{" "}
          <Link
            href="/learn/eta-spain"
            className="text-apple-accent hover:underline"
          >
            ETA in Spain
          </Link>{" "}
          provides additional context.
        </p>

        {/* ── 7. Alumni spotlight ─────────────────────────────────── */}
        <h2 className={profileH2}>Alumni spotlight</h2>

        <h3 className={profileH3}>
          Yoshiaki Kurosawa (MBA &rsquo;19) &ndash; JBS Partners GK
        </h3>
        <p>
          Kurosawa arrived at IESE from Japan with a background in corporate
          finance and a growing interest in entrepreneurship. During the MBA, he
          took the search fund elective and connected with the ISF Center team.
          The experience convinced him that the search fund model could work in
          Japan, a market with tens of thousands of aging business owners
          seeking succession solutions and virtually no awareness of the search
          fund concept. After graduating in 2019, Kurosawa returned to Tokyo,
          raised search capital, and incorporated JBS Partners GK. He became
          the founder of the first search fund in Japan, opening a market that
          has since attracted additional searchers. His story demonstrates
          IESE&rsquo;s unique ability to serve as a launchpad for searchers
          targeting non-traditional geographies.
        </p>

        <h3 className={profileH3}>
          Lenka Kolarova (MBA &rsquo;11) &ndash; Istria Capital
        </h3>
        <p>
          Kolarova graduated from IESE in 2011, the same year the ISF Center
          was established. She went on to become Vice President at Istria
          Capital and co-authored the IESE International Search Fund Studies,
          contributing to the research that has defined the field. Her career
          illustrates a less-discussed pathway: rather than launching a search
          fund as a principal, she became one of the most knowledgeable
          investors and researchers in the international search fund ecosystem.
          For aspiring investors, this path is worth considering alongside the
          searcher role. Our article on{" "}
          <Link
            href="/learn/finding-investors"
            className="text-apple-accent hover:underline"
          >
            finding search fund investors
          </Link>{" "}
          explores the investor perspective in more detail.
        </p>

        {/* ── 8. ETA Conference and community ─────────────────────── */}
        <h2 className={profileH2}>ETA Conference and community</h2>
        <p>
          IESE co-organizes an annual ETA Conference with London Business
          School, HEC Paris, and Cambridge Judge Business School. The 6th Annual
          ETA Conference was held on March 28, 2025, bringing together
          searchers, investors, operators, and faculty from across Europe and
          beyond. The conference functions as the primary annual gathering for
          the European search fund community, serving a similar role to the
          Booth-Kellogg ETA Conference in North America.
        </p>
        <p>
          Beyond the formal conference, IESE&rsquo;s community advantage lies
          in its alumni distribution. With graduates operating search funds
          across 20 countries, an IESE MBA plugs you into a network that is
          genuinely global. A searcher in Colombia can call a classmate in
          Germany; someone launching in Southeast Asia can draw on alumni
          experience in Spain. This breadth of network is difficult to replicate
          at schools with more geographically concentrated alumni bases. For
          comparison, see how{" "}
          <Link
            href="/mba/stanford-gsb"
            className="text-apple-accent hover:underline"
          >
            Stanford GSB
          </Link>{" "}
          and{" "}
          <Link
            href="/mba/harvard-business-school"
            className="text-apple-accent hover:underline"
          >
            Harvard Business School
          </Link>{" "}
          approach community building.
        </p>

        {/* ── 9. Tuition and financial considerations ─────────────── */}
        <h2 className={profileH2}>Tuition and financial considerations</h2>
        <p>
          For the 2026 intake, IESE MBA tuition is EUR 114,000 total, split
          across two years: EUR 47,000 in Year 1 and EUR 57,000 in Year 2. This
          positions IESE in the upper range of European MBA programs but below
          the sticker price of most top US schools when living costs are
          factored in. Barcelona is considerably cheaper than Boston, New York,
          or the San Francisco Bay Area for housing and daily expenses.
        </p>

        <table className={profileTable}>
          <thead>
            <tr>
              <th className={profileTh}>Component</th>
              <th className={profileTh}>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={profileTd}>Year 1 tuition</td>
              <td className={profileTd}>EUR 47,000</td>
            </tr>
            <tr>
              <td className={profileTd}>Year 2 tuition</td>
              <td className={profileTd}>EUR 57,000</td>
            </tr>
            <tr>
              <td className={profileTd}>Total tuition</td>
              <td className={profileTd}>EUR 114,000</td>
            </tr>
          </tbody>
        </table>

        <p>
          The financial calculus for an IESE MBA depends heavily on where you
          plan to search. If you intend to operate in Europe, Latin America, or
          Asia, IESE&rsquo;s network and data authority offer direct returns on
          the tuition investment. If you plan to search exclusively in the
          United States, the alumni network advantage tilts toward Stanford or
          HBS. For a deeper analysis of whether an MBA makes financial sense
          for ETA, see our guide on{" "}
          <Link
            href="/learn/mba-and-eta"
            className="text-apple-accent hover:underline"
          >
            the MBA and ETA decision
          </Link>
          .
        </p>

        {/* ── 10. Who should choose IESE ──────────────────────────── */}
        <h2 className={profileH2}>Who should choose IESE</h2>
        <p>
          IESE is the strongest choice for MBA candidates who meet one or more
          of the following criteria:
        </p>
        <ul className={profileUl}>
          <li>
            You plan to launch a search fund outside the United States and want
            access to the most comprehensive international search fund dataset
            and alumni network.
          </li>
          <li>
            You want to search in Spain, Latin America, or Southern Europe,
            where IESE&rsquo;s alumni density and local reputation provide a
            direct operational advantage.
          </li>
          <li>
            You value a two-year MBA format that gives you time to take the
            search fund elective, build investor relationships, and potentially
            begin sourcing deals before graduation.
          </li>
          <li>
            You are interested in contributing to or building on the ISF
            Center&rsquo;s research, whether as a future academic, investor, or
            informed practitioner.
          </li>
          <li>
            You want the credibility of a Tier 1 ETA program without the cost
            and visa complexity of a US-based MBA.
          </li>
        </ul>
        <p>
          IESE is less ideal if your target geography is exclusively the United
          States, where{" "}
          <Link
            href="/mba/stanford-gsb"
            className="text-apple-accent hover:underline"
          >
            Stanford GSB
          </Link>{" "}
          and{" "}
          <Link
            href="/mba/harvard-business-school"
            className="text-apple-accent hover:underline"
          >
            HBS
          </Link>{" "}
          dominate investor networks. It is also less suitable if you prefer
          the speed of a one-year MBA, since IESE&rsquo;s program runs for 19
          months. For one-year options in Europe, consider{" "}
          <Link
            href="/mba/insead"
            className="text-apple-accent hover:underline"
          >
            INSEAD
          </Link>
          , which completes in 10 months and offers ETA resources across two
          campuses.
        </p>

        {/* ── 11. Related reading ─────────────────────────────────── */}
        <h2 className={profileH2}>Related reading</h2>
        <ul className={profileUl}>
          <li>
            <Link
              href="/learn/getting-started"
              className="text-apple-accent hover:underline"
            >
              What is a Search Fund? Complete Guide
            </Link>
          </li>
          <li>
            <Link
              href="/learn/best-mba-for-search-fund"
              className="text-apple-accent hover:underline"
            >
              Best MBA Programs for Search Fund Careers
            </Link>
          </li>
          <li>
            <Link
              href="/learn/european-search-fund-research"
              className="text-apple-accent hover:underline"
            >
              European Search Fund Research
            </Link>
          </li>
          <li>
            <Link
              href="/learn/eta-spain"
              className="text-apple-accent hover:underline"
            >
              ETA in Spain
            </Link>
          </li>
          <li>
            <Link
              href="/learn/mba-and-eta"
              className="text-apple-accent hover:underline"
            >
              The MBA and ETA Decision
            </Link>
          </li>
          <li>
            <Link
              href="/learn/finding-investors"
              className="text-apple-accent hover:underline"
            >
              Finding Search Fund Investors
            </Link>
          </li>
          <li>
            <Link
              href="/mba/stanford-gsb"
              className="text-apple-accent hover:underline"
            >
              Stanford GSB Profile
            </Link>
          </li>
          <li>
            <Link
              href="/mba/harvard-business-school"
              className="text-apple-accent hover:underline"
            >
              Harvard Business School Profile
            </Link>
          </li>
          <li>
            <Link
              href="/mba/insead"
              className="text-apple-accent hover:underline"
            >
              INSEAD Profile
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
