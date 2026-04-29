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

export default function LondonBusinessSchoolProfile() {
  return (
    <article>
      <h1 className={profileH1}>
        London Business School: Where European Search Funds Began
      </h1>
      <p className="mt-2 text-sm text-apple-gray-500">14 min read</p>

      {/* ── 1. Opening narrative ─────────────────────────────────── */}
      <div className={profileBody}>
        <p>
          In 1992, a London Business School graduate named Simon Webster did
          something no one outside the United States had done before. Inspired by
          the search fund model that H. Irving Grousbeck had pioneered at
          Stanford GSB eight years earlier, Webster raised capital from
          investors, searched for a privately held British company to acquire,
          and bought RSL, a services business with around 50 employees and
          approximately GBP 3.5 million in revenue. Over the following years, he
          grew RSL to 450 employees and GBP 30 million in revenue.
        </p>
        <p>
          That acquisition was the first search fund transaction ever completed
          outside the United States. It demonstrated that the model could work
          beyond Silicon Valley and the American MBA ecosystem, and it opened
          the door for the European search fund movement that followed. Three
          decades later, Webster&apos;s fingerprints remain visible across the
          entire European ETA landscape. He has invested in over 60 search
          funds, chairs the IESE Search Fund Advisory Board, and teaches the ETA
          elective at the school where it all began.
        </p>
        <p>
          For anyone considering{" "}
          <Link
            href="/learn/getting-started"
            className="text-apple-accent hover:underline"
          >
            getting started in ETA
          </Link>{" "}
          with an eye toward the UK or European markets, London Business School
          offers something no other institution can claim: the origin story of
          international search funds, taught by the person who wrote it.
        </p>
      </div>

      {/* ── 2. Why LBS matters ───────────────────────────────────── */}
      <h2 className={profileH2}>Why LBS matters for ETA</h2>
      <div className={profileBody}>
        <p>
          London Business School&apos;s significance in entrepreneurship through
          acquisition rests on three pillars: historical precedent, institutional
          commitment, and geographic advantage.
        </p>
        <p>
          The historical precedent is straightforward. Webster&apos;s 1992
          acquisition of RSL proved that the search fund model, born in the
          American business school tradition, could translate to a different
          legal system, a different financing environment, and a different
          culture of business ownership. Before RSL, search funds were an
          exclusively American phenomenon. After RSL, they became a globally
          replicable strategy.
        </p>
        <p>
          The institutional commitment is visible through LBS&apos;s Institute
          of Entrepreneurship and Private Capital, which houses the ETA elective
          and supports research into entrepreneurial acquisition. The school has
          published dedicated case studies, hosts an annual ETA conference, and
          maintains a formal ETA section on its website. These are not
          peripheral activities. They reflect a decision by the school&apos;s
          leadership to build on its historical connection to the model.
        </p>
        <p>
          The geographic advantage is London itself. As one of the world&apos;s
          deepest capital markets and a hub for cross-border deal-making, London
          provides a natural base for searchers targeting the{" "}
          <Link
            href="/learn/eta-uk"
            className="text-apple-accent hover:underline"
          >
            UK market
          </Link>{" "}
          or broader{" "}
          <Link
            href="/learn/eta-europe"
            className="text-apple-accent hover:underline"
          >
            European ETA opportunities
          </Link>
          . The city&apos;s professional services infrastructure, its
          concentration of private equity and family office capital, and its
          time-zone position bridging the Americas and Asia make it an appealing
          launchpad for internationally minded searchers.
        </p>
      </div>

      {/* ── 3. The Institute of Entrepreneurship & Private Capital ── */}
      <h2 className={profileH2}>
        The Institute of Entrepreneurship and Private Capital
      </h2>
      <div className={profileBody}>
        <p>
          The Institute of Entrepreneurship and Private Capital serves as the
          organizational home for ETA activity at LBS. Led academically by
          Associate Professor Luisa Alemany, the Institute coordinates
          coursework, case study development, events, and community-building
          around entrepreneurial acquisition and related disciplines.
        </p>
        <p>
          Unlike standalone ETA centers at some other business schools, the
          Institute at LBS positions search funds within the broader context of
          private capital. This framing reflects a practical reality: most
          search fund investors come from private equity, family office, or
          angel investing backgrounds. By situating ETA alongside these
          disciplines, the Institute helps students understand where search
          funds fit in the capital structure and how to position themselves when{" "}
          <Link
            href="/learn/finding-investors"
            className="text-apple-accent hover:underline"
          >
            finding investors
          </Link>{" "}
          for their own funds.
        </p>
        <p>
          The Institute also serves as the publishing arm for LBS&apos;s ETA
          case studies, ensuring that the school&apos;s practical knowledge is
          codified and available for classroom use. This combination of
          research, teaching, and community makes the Institute the
          institutional backbone of LBS&apos;s ETA offering.
        </p>
      </div>

      {/* ── 4. Faculty ───────────────────────────────────────────── */}
      <h2 className={profileH2}>Faculty</h2>
      <div className={profileBody}>
        <p>
          LBS&apos;s ETA teaching draws on two faculty members whose backgrounds
          span the practitioner and academic sides of entrepreneurial
          acquisition.
        </p>

        <h3 className={profileH3}>Simon Webster</h3>
        <p>
          Webster serves as a Guest Lecturer and teaches the ETA elective at
          LBS. His credentials in the field are unmatched in Europe. After
          raising the first non-US search fund in 1992, he acquired RSL and
          built it from a GBP 3.5 million revenue business with 50 employees
          into a GBP 30 million revenue operation with 450 employees. Since
          then, he has invested in over 60 search funds and chairs the IESE
          Search Fund Advisory Board, connecting the LBS ecosystem to the
          leading international search fund research center.
        </p>
        <p>
          Webster&apos;s teaching is rooted in three decades of direct
          experience as both an operator and an investor. Students who take the
          ETA elective benefit from his perspective on what makes a search fund
          succeed in European markets, where deal structures, regulatory
          environments, and seller expectations differ meaningfully from the
          American context.
        </p>

        <h3 className={profileH3}>Luisa Alemany</h3>
        <p>
          Alemany is an Associate Professor of Management Practice and serves as
          Academic Director of the Institute of Entrepreneurship and Private
          Capital. She holds a Stanford MBA and a PhD, and her research spans
          venture capital, private equity, and entrepreneurial finance. At LBS,
          she co-authored the Nova Ventures case study, one of the
          school&apos;s two published ETA cases, and provides the academic
          architecture that supports the broader ETA program.
        </p>
        <p>
          While Webster brings the practitioner voice, Alemany brings
          methodological rigor and institutional continuity. Her role ensures
          that ETA at LBS is not solely dependent on a single guest lecturer but
          is embedded in the school&apos;s permanent faculty structure and
          research agenda.
        </p>
      </div>

      {/* ── 5. Course offerings and ETA elective ─────────────────── */}
      <h2 className={profileH2}>Course offerings and the ETA elective</h2>
      <div className={profileBody}>
        <p>
          LBS offers a dedicated ETA elective available to students across three
          of its degree programs: the MBA, the Executive MBA, and the Sloan
          Masters in Leadership and Strategy. This cross-program availability is
          distinctive. It means that the ETA elective attracts not only
          early-career MBA students but also experienced executives who may be
          considering acquisition as a next career step.
        </p>
        <div className="overflow-x-auto">
          <table className={profileTable}>
            <thead>
              <tr>
                <th className={profileTh}>Course</th>
                <th className={profileTh}>Programs</th>
                <th className={profileTh}>Instructor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={profileTd}>ETA Elective</td>
                <td className={profileTd}>MBA, EMBA, Sloan</td>
                <td className={profileTd}>Simon Webster</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The elective covers the full search fund lifecycle: fundraising,
          search strategy, deal evaluation, negotiation, acquisition execution,
          and post-acquisition management. Webster teaches from his own
          experience and from the broader body of European and international
          search fund practice. The course draws on LBS&apos;s published case
          studies and benefits from guest contributions by active searchers and
          investors in the European ecosystem.
        </p>
        <p>
          For students weighing how{" "}
          <Link
            href="/learn/mba-and-eta"
            className="text-apple-accent hover:underline"
          >
            MBA programs prepare students for ETA
          </Link>
          , the LBS elective stands out for its European orientation and its
          accessibility across multiple degree formats. A Sloan participant with
          20 years of operating experience sits alongside a first-year MBA
          student, creating a classroom dynamic that mirrors the diversity of
          backgrounds found in real search fund partnerships.
        </p>
      </div>

      {/* ── 6. Published case studies ─────────────────────────────── */}
      <h2 className={profileH2}>Published case studies</h2>
      <div className={profileBody}>
        <p>
          LBS has published two ETA case studies through its case publishing
          platform, both released in 2023. These cases provide UK-specific
          teaching material that complements the predominantly American case
          libraries at Stanford and Harvard.
        </p>

        <h3 className={profileH3}>
          Nova Ventures: Searching for Gems in the UK
        </h3>
        <p>
          Authored by Luisa Alemany and Ferenc Vasvari (CS-23-003, 10 pages),
          this case examines a search fund operating in the UK market. It
          addresses the specific challenges of sourcing deals in a market where
          business brokerage infrastructure is less developed than in the United
          States and where seller expectations around valuation and deal
          structure can differ significantly.
        </p>

        <h3 className={profileH3}>
          Insearch Ltd: Searching for a Company to Buy
        </h3>
        <p>
          Written by Simon Webster (CS-22-019, 16 pages), this case follows a
          search fund through the process of identifying, evaluating, and
          pursuing acquisition targets. Drawing on Webster&apos;s own experience
          and his extensive network in the UK search fund community, the case
          provides practical insight into the day-to-day reality of running a
          search in the British market.
        </p>
        <p>
          Together, these two cases give LBS students access to UK-specific ETA
          teaching material that is difficult to find elsewhere. For a broader
          perspective on how academic research is shaping the field, see our
          overview of{" "}
          <Link
            href="/learn/european-search-fund-research"
            className="text-apple-accent hover:underline"
          >
            European search fund research
          </Link>
          .
        </p>
      </div>

      {/* ── 7. The Annual ETA Conference ─────────────────────────── */}
      <h2 className={profileH2}>The Annual ETA Conference</h2>
      <div className={profileBody}>
        <p>
          LBS co-organizes an annual ETA Conference alongside{" "}
          <Link
            href="/mba/iese"
            className="text-apple-accent hover:underline"
          >
            IESE
          </Link>
          ,{" "}
          <Link
            href="/mba/hec-paris"
            className="text-apple-accent hover:underline"
          >
            HEC Paris
          </Link>
          , and Cambridge. The 6th Annual ETA Conference was held on March 28,
          2025, bringing together searchers, investors, faculty, and operators
          from across Europe.
        </p>
        <p>
          The conference serves multiple functions. For students, it provides
          exposure to the broader European ETA community and the opportunity to
          meet potential investors and mentors. For faculty, it facilitates the
          exchange of teaching materials and research across institutions. For
          investors, it offers deal flow and visibility into the pipeline of
          emerging searchers.
        </p>
        <p>
          The fact that this conference is co-organized by four leading European
          business schools reflects the collaborative nature of the European ETA
          ecosystem. Unlike the US market, where individual schools tend to host
          their own events, the European model emphasizes cross-institutional
          cooperation. This makes sense given the smaller scale of each
          national market and the cross-border nature of many European search
          fund strategies.
        </p>
      </div>

      {/* ── 8. Webster's legacy and impact ───────────────────────── */}
      <h2 className={profileH2}>Webster&apos;s legacy and impact</h2>
      <div className={profileBody}>
        <p>
          Simon Webster&apos;s influence on European ETA extends well beyond
          London Business School. His 1992 acquisition of RSL was not just the
          first non-US search fund transaction. It was the proof of concept that
          enabled everything that followed in European entrepreneurial
          acquisition.
        </p>
        <p>
          Consider the chain of influence. Webster proved the model worked in
          the UK. European business schools, observing that success, began
          incorporating ETA into their curricula. IESE established its
          International Search Fund Center in 2011. Today, that center tracks
          over 320 international search funds. Webster himself chairs the IESE
          Search Fund Advisory Board, directly connecting the institution that
          first proved the model internationally with the institution that now
          leads international search fund research.
        </p>
        <p>
          His portfolio of over 60 search fund investments means that
          Webster&apos;s practical experience as an investor now rivals his
          pioneering work as an operator. Students at LBS benefit from both
          dimensions: the operator who built RSL and the investor who has
          evaluated hundreds of prospective search fund entrepreneurs and their
          target companies.
        </p>
        <p>
          For a broader view of how the European search fund ecosystem has
          evolved since Webster&apos;s first fund, see our guide to{" "}
          <Link
            href="/learn/eta-europe"
            className="text-apple-accent hover:underline"
          >
            ETA in Europe
          </Link>
          .
        </p>
      </div>

      {/* ── 9. Tuition and financial considerations ──────────────── */}
      <h2 className={profileH2}>Tuition and financial considerations</h2>
      <div className={profileBody}>
        <p>
          London Business School MBA tuition is GBP 123,950 total for the 2026
          intake. The program runs 15 to 21 months, giving students flexibility
          in pacing. Including living expenses in London, which are among the
          highest of any major MBA destination, the total investment typically
          exceeds GBP 150,000.
        </p>
        <div className="overflow-x-auto">
          <table className={profileTable}>
            <thead>
              <tr>
                <th className={profileTh}>Item</th>
                <th className={profileTh}>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={profileTd}>Tuition (total)</td>
                <td className={profileTd}>GBP 123,950</td>
              </tr>
              <tr>
                <td className={profileTd}>Program length</td>
                <td className={profileTd}>15-21 months</td>
              </tr>
              <tr>
                <td className={profileTd}>Intake</td>
                <td className={profileTd}>2026</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The financial equation for a prospective searcher at LBS involves
          weighing this upfront cost against the expected returns of a search
          fund career and the alternative opportunities available to LBS
          graduates in consulting, finance, and private equity. London&apos;s
          position as a global financial center means that the opportunity cost
          of pursuing a search fund, rather than a high-paying finance role, is
          significant.
        </p>
        <p>
          However, LBS graduates who choose the search fund path benefit from
          access to a deep pool of UK and European investors, a curriculum
          taught by the pioneer of the model in Europe, and a brand that carries
          weight with business owners considering a sale. For a framework on
          evaluating whether an MBA justifies the investment for a search fund
          career, see our analysis of{" "}
          <Link
            href="/learn/best-mba-for-search-fund"
            className="text-apple-accent hover:underline"
          >
            the best MBA programs for search fund careers
          </Link>
          .
        </p>
      </div>

      {/* ── 10. Who should choose LBS ────────────────────────────── */}
      <h2 className={profileH2}>Who should choose LBS</h2>
      <div className={profileBody}>
        <p>
          London Business School is the strongest fit for candidates who plan to
          search in the UK or use London as a base for cross-border European
          acquisitions. The school&apos;s ETA offering is not as broad as
          Stanford&apos;s or IESE&apos;s in terms of course count, but it
          compensates with the depth of Webster&apos;s involvement and the
          unique advantage of being taught by the person who originated the
          model outside the United States.
        </p>
        <p>
          LBS is also well-suited for candidates from the EMBA or Sloan
          programs who are exploring ETA as a mid-career transition. The
          availability of the ETA elective across multiple degree formats means
          that experienced professionals can access the curriculum without
          committing to a full-time two-year MBA.
        </p>
        <p>
          Candidates who want a larger ETA ecosystem with more dedicated
          courses, a formal search fund center, and a deeper alumni network of
          searchers should also consider{" "}
          <Link
            href="/mba/iese"
            className="text-apple-accent hover:underline"
          >
            IESE
          </Link>{" "}
          or{" "}
          <Link
            href="/mba/insead"
            className="text-apple-accent hover:underline"
          >
            INSEAD
          </Link>
          . For candidates focused on the US market, the Tier 1 programs at
          Stanford, Harvard, and IESE remain the primary options. But for
          anyone drawn to the UK market, the history of European search funds,
          and the opportunity to learn from the person who started it all, LBS
          stands alone.
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
              href="/learn/eta-uk"
              className="text-apple-accent hover:underline"
            >
              ETA in the United Kingdom
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
              href="/learn/eta-europe"
              className="text-apple-accent hover:underline"
            >
              ETA in Europe
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
              href="/mba/insead"
              className="text-apple-accent hover:underline"
            >
              INSEAD profile
            </Link>
          </li>
          <li>
            <Link
              href="/mba/hec-paris"
              className="text-apple-accent hover:underline"
            >
              HEC Paris profile
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
