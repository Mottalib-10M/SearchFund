import Link from "next/link";
import {
  profileH1,
  profileH2,
  profileH3,
  profileBody,
  profileUl,
  profileQuote,
  profileTable,
  profileTh,
  profileTd,
} from "./shared-styles";

export default function IEBusinessSchoolProfile() {
  return (
    <article>
      <h1 className={profileH1}>
        IE Business School: A Decade of ETA Education in Madrid
      </h1>
      <p className="mt-2 text-sm text-apple-gray-500">12 min read</p>

      {/* ── 1. Opening narrative ─────────────────────────────────── */}
      <div className={profileBody}>
        <p>
          When Eisuke Kobayashi and Mitsuharu Suzaki graduated from IE Business
          School&apos;s MBA program in 2023, they did not follow the
          well-trodden path to consulting or finance in London or New York.
          Instead, they flew home to Japan and launched Japan Bullseye Capital
          GK, the first traditional duo search fund in the country. It was a
          move that no IE alumnus had attempted before, and it worked.
        </p>
        <p>
          The two co-founders raised capital from 17 investors, eventually
          expanding their investor base to 22. In April 2025, they closed
          their acquisition of Gateway Arch Co. Ltd, a jigsaw puzzle company,
          with Kobayashi stepping in as CEO. Their story traces a direct line
          from a classroom in Madrid&apos;s IE Tower to a signed deal in
          Tokyo, illustrating how IE&apos;s ETA program is producing searchers
          who operate well beyond the traditional European and North American
          corridors.
        </p>
        <p>
          IE Business School may not carry the legacy of Stanford or the
          research infrastructure of IESE, but it has been teaching
          entrepreneurial acquisition for over a decade, making it one of the
          longest-running ETA electives in Europe. For anyone{" "}
          <Link
            href="/learn/getting-started"
            className="text-apple-accent hover:underline"
          >
            getting started in ETA
          </Link>{" "}
          and considering a European MBA, IE deserves serious attention.
        </p>
      </div>

      {/* ── 2. Why IE matters ────────────────────────────────────── */}
      <h2 className={profileH2}>
        Why IE matters: the longest-running European ETA elective
      </h2>
      <div className={profileBody}>
        <p>
          IE has offered its Entrepreneurial Acquisition course for more than
          11 consecutive years, making it one of the earliest European business
          schools to embed search fund education into its MBA curriculum. While{" "}
          <Link
            href="/mba/iese"
            className="text-apple-accent hover:underline"
          >
            IESE
          </Link>{" "}
          is widely recognized for its International Search Fund Center and
          research output, and{" "}
          <Link
            href="/mba/london-business-school"
            className="text-apple-accent hover:underline"
          >
            London Business School
          </Link>{" "}
          has grown its ETA activity in recent years, IE was among the first
          European schools to offer a dedicated course taught by a practitioner
          with deep search fund investing experience.
        </p>
        <p>
          The school&apos;s approach to ETA reflects its broader
          entrepreneurial identity. IE has long positioned itself as a school
          for founders and operators, and the search fund model fits naturally
          within that ethos. The Entrepreneurial Acquisition elective is not an
          afterthought bolted onto a finance curriculum. It sits within
          IE&apos;s Entrepreneurship and Innovation Center, which provides
          institutional support, mentorship programs, and a dedicated Search
          Funds Lab that helps students move from classroom learning to live
          search execution.
        </p>
        <p>
          The{" "}
          <Link
            href="/learn/eta-spain"
            className="text-apple-accent hover:underline"
          >
            Spanish ETA ecosystem
          </Link>{" "}
          has grown significantly over the past decade, and IE has contributed
          to that growth by producing searchers who launch funds in Spain and
          across international markets. The Kobayashi and Suzaki story in Japan
          is one example, but IE alumni have also pursued acquisitions across
          Latin America, Southern Europe, and beyond.
        </p>
      </div>

      {/* ── 3. Faculty ───────────────────────────────────────────── */}
      <h2 className={profileH2}>Faculty</h2>
      <div className={profileBody}>
        <p>
          IE&apos;s ETA instruction is led by two adjunct professors who bring
          decades of real-world investing and operating experience to the
          classroom.
        </p>

        <h3 className={profileH3}>Blake Winchell</h3>
        <p>
          Winchell is an Adjunct Professor at IE and the primary instructor
          for the Entrepreneurial Acquisition course. He holds an MBA from
          Stanford GSB (class of 1979) and a bachelor&apos;s degree from
          Dartmouth (1975). His career spans 44 years in private equity,
          including roles at Bain &amp; Company, Fremont Ventures, and Partner
          Ventures, and he has been a serial search fund investor throughout
          that period. At IE, he has earned 15 or more consecutive teaching
          excellence awards, a distinction that reflects both the rigor of his
          instruction and the value students place on learning from someone
          who has spent decades on the investor side of the table. Students
          who want to understand how{" "}
          <Link
            href="/learn/finding-investors"
            className="text-apple-accent hover:underline"
          >
            finding investors
          </Link>{" "}
          works in practice benefit directly from Winchell&apos;s perspective
          as someone who has evaluated and backed searchers for over four
          decades.
        </p>

        <h3 className={profileH3}>Newton M. Campos</h3>
        <p>
          Campos is an Adjunct Professor of Entrepreneurship at IE and the
          founder of Newton Equity Partners. He has invested in 18 search funds
          with a 73% success rate, a track record that gives him practical
          credibility when teaching students about deal sourcing, due
          diligence, and investor relations. His dual role as academic and
          active investor means students receive instruction grounded in
          current market conditions rather than historical case studies alone.
          Campos brings particular expertise in international search fund
          investing, which aligns with IE&apos;s globally diverse student
          body.
        </p>
      </div>

      {/* ── 4. Course offerings ──────────────────────────────────── */}
      <h2 className={profileH2}>Course offerings</h2>
      <div className={profileBody}>
        <p>
          IE&apos;s primary ETA course is Entrepreneurial Acquisition, a
          15-session elective taught by Blake Winchell. The course covers the
          full search fund lifecycle, from understanding the economics of the
          model and raising search capital through deal sourcing, valuation,
          due diligence, and closing an acquisition. For a broader overview of
          how{" "}
          <Link
            href="/learn/mba-and-eta"
            className="text-apple-accent hover:underline"
          >
            MBA programs prepare students for ETA
          </Link>
          , IE&apos;s approach offers a condensed but practitioner-led
          alternative to the multi-course sequences available at larger
          programs.
        </p>
        <div className="overflow-x-auto">
          <table className={profileTable}>
            <thead>
              <tr>
                <th className={profileTh}>Course</th>
                <th className={profileTh}>Sessions</th>
                <th className={profileTh}>Instructor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={profileTd}>Entrepreneurial Acquisition</td>
                <td className={profileTd}>15</td>
                <td className={profileTd}>Blake Winchell</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The 15-session format is more intensive than some comparable European
          electives, giving Winchell enough time to move beyond introductory
          material and into the operational realities of running a search. The
          course draws on his own investment experience, real deal case
          studies, and guest appearances from active searchers and operators.
        </p>
        <p>
          Students considering the difference between{" "}
          <Link
            href="/learn/self-funded-vs-traditional"
            className="text-apple-accent hover:underline"
          >
            self-funded and traditional search funds
          </Link>{" "}
          will find that the course covers both models, though the traditional
          search fund structure receives the deeper treatment given
          Winchell&apos;s background as an institutional investor.
        </p>
      </div>

      {/* ── 5. Alumni spotlight ──────────────────────────────────── */}
      <h2 className={profileH2}>
        Alumni spotlight: Kobayashi and Suzaki bring ETA to Japan
      </h2>
      <div className={profileBody}>
        <h3 className={profileH3}>
          Eisuke Kobayashi (MBA &apos;23, Finance)
        </h3>
        <p>
          Kobayashi co-founded Japan Bullseye Capital GK alongside his
          classmate Mitsuharu Suzaki, creating the first traditional duo
          search fund in Japan. Before their search, Kobayashi served as the
          founding President of the IE Search Fund Club, helping build the
          institutional infrastructure that would support future IE searchers.
          The duo raised capital from 17 investors, later expanding to 22, and
          in April 2025 acquired Gateway Arch Co. Ltd, a jigsaw puzzle
          company. Kobayashi now serves as CEO.
        </p>
        <p>
          The Japan Bullseye Capital story is significant for several reasons.
          It demonstrates that IE&apos;s ETA education can produce searchers
          who operate in markets with no prior search fund tradition. Japan
          has a well-documented small business succession crisis, with hundreds
          of thousands of profitable companies at risk of closing because
          their aging owners have no successors. The search fund model is a
          natural fit for this market, and Kobayashi and Suzaki were among the
          first to apply it there.
        </p>

        <h3 className={profileH3}>Mitsuharu Suzaki (MBA &apos;23)</h3>
        <p>
          Suzaki co-founded Japan Bullseye Capital alongside Kobayashi. The
          duo&apos;s partnership, formed during their time at IE, exemplifies
          the value of the school&apos;s international cohort. Both searchers
          brought complementary skills and a shared conviction that the ETA
          model could work in a market that had never seen a traditional
          search fund. Their successful acquisition validated that thesis.
        </p>
      </div>

      {/* ── 6. IE Search Fund Club and Forum ─────────────────────── */}
      <h2 className={profileH2}>IE Search Fund Club and Forum</h2>
      <div className={profileBody}>
        <p>
          The IE Search Fund Club, founded by Eisuke Kobayashi during his MBA,
          has grown to over 275 LinkedIn followers and serves as the primary
          student-led community for ETA-interested students at IE. The club
          organizes speaker events, investor panels, and networking sessions
          that connect current students with alumni searchers and active
          investors.
        </p>
        <p>
          In November 2023, the club organized the inaugural IE Search Fund
          Forum, held on November 16-17 at IE Tower in Madrid. The event
          attracted significant interest, with over 200 tickets sold and the
          event overbooked with a waitlist. For a school that was still
          building its ETA reputation, the forum demonstrated genuine demand
          among students, alumni, and the broader European search fund
          community. The event featured panels on search fund economics,
          international expansion, and the growing role of ETA in European
          entrepreneurship.
        </p>
        <p>
          The forum&apos;s success is a useful signal for prospective
          applicants. A student-led event that sells out and generates a
          waitlist indicates an active and growing community, not one that
          exists only on paper. For context on how{" "}
          <Link
            href="/learn/european-search-fund-research"
            className="text-apple-accent hover:underline"
          >
            European search fund research
          </Link>{" "}
          is evolving, the IE Forum represents one of several new institutions
          contributing to the ecosystem&apos;s maturation.
        </p>
      </div>

      {/* ── 7. The Search Funds Lab ──────────────────────────────── */}
      <h2 className={profileH2}>The Search Funds Lab</h2>
      <div className={profileBody}>
        <p>
          The Search Funds Lab operates within IE&apos;s Entrepreneurship and
          Innovation Center and offers biannual intakes in January and
          September. Unlike the Entrepreneurial Acquisition course, which
          provides classroom instruction, the Lab is designed to support
          students and recent alumni who are actively preparing to launch a
          search fund.
        </p>
        <p>
          The Lab provides mentorship, access to IE&apos;s investor network,
          and structured guidance on the practical steps required to move from
          the decision to search through fundraising and into active deal
          sourcing. The biannual intake model means students can enter the Lab
          at a point in their MBA that aligns with their personal timeline,
          whether they intend to launch immediately after graduation or need
          additional preparation.
        </p>
        <p>
          This kind of institutional support is not common at European business
          schools. While IESE&apos;s International Search Fund Center focuses
          primarily on research and data collection, IE&apos;s Search Funds
          Lab is more operationally oriented. It functions as an
          accelerator-style program within the school, bridging the gap
          between education and execution.
        </p>
      </div>

      {/* ── 8. Tuition and financial considerations ──────────────── */}
      <h2 className={profileH2}>Tuition and financial considerations</h2>
      <div className={profileBody}>
        <p>
          IE&apos;s MBA tuition for the 2026 intake is EUR 89,900, plus a EUR
          1,200 program fee, bringing the total to EUR 91,100. This positions
          IE below the cost of many US programs but in line with other
          top-tier European schools.
        </p>
        <p>
          For prospective searchers, the financial calculation involves
          weighing the tuition cost against the expected timeline to
          acquisition and the equity upside of a successful search fund. The
          search phase typically lasts 18 to 24 months after graduation, during
          which the searcher receives modest compensation funded by search
          capital. The real financial return comes through equity earned upon
          acquisition and subsequent value creation.
        </p>
        <p>
          IE&apos;s location in Madrid also offers a cost-of-living advantage
          relative to London, Paris, or any major US city. Housing, food, and
          daily expenses are materially lower, which can reduce the total
          financial burden of the MBA. For students considering the full
          financial picture, our analysis of{" "}
          <Link
            href="/learn/best-mba-for-search-fund"
            className="text-apple-accent hover:underline"
          >
            the best MBA programs for search fund careers
          </Link>{" "}
          provides a comparative framework.
        </p>
      </div>

      {/* ── 9. How IE compares ───────────────────────────────────── */}
      <h2 className={profileH2}>How IE compares</h2>
      <div className={profileBody}>
        <p>
          IE occupies a distinctive position in the European ETA landscape.
          It does not have the research output of{" "}
          <Link
            href="/mba/iese"
            className="text-apple-accent hover:underline"
          >
            IESE
          </Link>
          , which tracks over 320 international search funds through its
          International Search Fund Center. It does not have the brand
          recognition in ETA circles that{" "}
          <Link
            href="/mba/london-business-school"
            className="text-apple-accent hover:underline"
          >
            London Business School
          </Link>{" "}
          or{" "}
          <Link
            href="/mba/insead"
            className="text-apple-accent hover:underline"
          >
            INSEAD
          </Link>{" "}
          carry. What IE does have is longevity, practitioner-led instruction,
          and an operational support infrastructure that few European peers can
          match.
        </p>
        <div className="overflow-x-auto">
          <table className={profileTable}>
            <thead>
              <tr>
                <th className={profileTh}>Dimension</th>
                <th className={profileTh}>IE Business School</th>
                <th className={profileTh}>IESE</th>
                <th className={profileTh}>LBS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={profileTd}>ETA elective history</td>
                <td className={profileTd}>11+ years</td>
                <td className={profileTd}>15+ years</td>
                <td className={profileTd}>Growing</td>
              </tr>
              <tr>
                <td className={profileTd}>Dedicated research center</td>
                <td className={profileTd}>Search Funds Lab</td>
                <td className={profileTd}>Intl. SF Center</td>
                <td className={profileTd}>IFE (Wheeler Institute)</td>
              </tr>
              <tr>
                <td className={profileTd}>Faculty with SF investment exp.</td>
                <td className={profileTd}>2 (Winchell, Campos)</td>
                <td className={profileTd}>Multiple</td>
                <td className={profileTd}>Growing</td>
              </tr>
              <tr>
                <td className={profileTd}>Student-led SF event</td>
                <td className={profileTd}>IE SF Forum (200+ tickets)</td>
                <td className={profileTd}>IESE SF Conference</td>
                <td className={profileTd}>LBS PE/SF events</td>
              </tr>
              <tr>
                <td className={profileTd}>Location</td>
                <td className={profileTd}>Madrid</td>
                <td className={profileTd}>Barcelona</td>
                <td className={profileTd}>London</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The comparison is not about which school is objectively better. It
          is about fit. IE&apos;s strengths are most relevant for students who
          value direct practitioner mentorship, want operational launch support
          through the Search Funds Lab, and are drawn to Madrid as a base
          for a European or international search.
        </p>
      </div>

      {/* ── 10. Who should choose IE ─────────────────────────────── */}
      <h2 className={profileH2}>Who should choose IE</h2>
      <div className={profileBody}>
        <p>
          IE is a strong fit for candidates who are already leaning toward
          ETA and want a program that provides both the education and the
          operational infrastructure to launch a search. The school&apos;s
          globally diverse student body is an asset for anyone planning to
          search in a non-US market, as the network spans Latin America,
          Southern Europe, the Middle East, and increasingly East Asia.
        </p>
        <p>
          Candidates who are drawn to the practitioner-led teaching model
          will find IE compelling. Winchell&apos;s 44 years of private equity
          and search fund investing experience, combined with Campos&apos;s
          active portfolio of 18 search fund investments, means students learn
          from people who are still making investment decisions, not
          recounting decisions from a prior career.
        </p>
        <p>
          The Search Funds Lab adds a layer of support that is particularly
          valuable for first-generation searchers who do not have family
          connections to the world of business acquisition. The structured
          biannual intakes and mentorship program lower the barrier to entry,
          making the transition from MBA student to active searcher less
          daunting.
        </p>
        <p>
          IE may be less suitable for candidates who prioritize research depth
          and data access. IESE&apos;s International Search Fund Center
          produces the most comprehensive dataset on international search
          funds, and Stanford&apos;s biennial study remains the gold standard
          for North American data. If your decision-making process depends
          heavily on longitudinal research, those programs may be a better
          fit.
        </p>
      </div>

      {/* ── 11. Related reading ──────────────────────────────────── */}
      <h2 className={profileH2}>Related reading</h2>
      <div className={profileBody}>
        <ul className={profileUl}>
          <li>
            <Link
              href="/learn/getting-started"
              className="text-apple-accent hover:underline"
            >
              Getting started with search funds
            </Link>
          </li>
          <li>
            <Link
              href="/learn/eta-spain"
              className="text-apple-accent hover:underline"
            >
              ETA in Spain: market overview
            </Link>
          </li>
          <li>
            <Link
              href="/learn/mba-and-eta"
              className="text-apple-accent hover:underline"
            >
              MBA and ETA: how business school prepares you
            </Link>
          </li>
          <li>
            <Link
              href="/learn/best-mba-for-search-fund"
              className="text-apple-accent hover:underline"
            >
              Best MBA programs for search fund careers
            </Link>
          </li>
          <li>
            <Link
              href="/learn/finding-investors"
              className="text-apple-accent hover:underline"
            >
              Finding investors for your search fund
            </Link>
          </li>
          <li>
            <Link
              href="/learn/european-search-fund-research"
              className="text-apple-accent hover:underline"
            >
              European search fund research
            </Link>
          </li>
          <li>
            <Link
              href="/learn/self-funded-vs-traditional"
              className="text-apple-accent hover:underline"
            >
              Self-funded vs. traditional search funds
            </Link>
          </li>
          <li>
            <Link
              href="/mba/iese"
              className="text-apple-accent hover:underline"
            >
              IESE Business School profile
            </Link>
          </li>
          <li>
            <Link
              href="/mba/london-business-school"
              className="text-apple-accent hover:underline"
            >
              London Business School profile
            </Link>
          </li>
          <li>
            <Link
              href="/mba/insead"
              className="text-apple-accent hover:underline"
            >
              INSEAD profile
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
