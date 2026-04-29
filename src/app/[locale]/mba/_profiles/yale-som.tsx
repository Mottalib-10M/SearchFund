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

export default function YaleSomProfile() {
  return (
    <article>
      <h1 className={profileH1}>
        Yale SOM: The Deepest Academic ETA Program
      </h1>
      <p className="mt-2 text-sm text-apple-gray-500">14 min read</p>

      <div className={profileBody}>
        {/* ── 1. Opening narrative ──────────────────────────────────── */}
        <p>
          In 2020, Georgyi Vekhov graduated from the Yale School of Management
          and returned to Russia to do something no one there had done before:
          launch a traditional search fund. Operating under the name Milestone
          Capital, Vekhov spent two years sourcing deals before acquiring UDP
          Auto, a Moscow-based automotive services company. It was Russia's
          first search fund acquisition, and the playbook that got him there was
          written almost entirely inside Yale SOM classrooms.
        </p>

        <p>
          Vekhov's story is unusual by geography, but the mechanism behind it is
          not. Yale SOM has quietly built the deepest academic ETA program at
          any business school, anchored by a single faculty member who has spent
          over two decades turning{" "}
          <Link
            href="/learn/getting-started"
            className="text-apple-accent hover:underline"
          >
            entrepreneurship through acquisition
          </Link>{" "}
          into a rigorous academic discipline. The result is a curriculum,
          a case library, and an alumni network that punch well above what most
          applicants expect from a program outside the traditional top three.
        </p>

        {/* ── 2. Why Yale SOM matters ──────────────────────────────── */}
        <h2 className={profileH2}>Why Yale SOM matters: the Wasserstein factor</h2>

        <p>
          Every great ETA program is built around a practitioner who decided to
          teach. At{" "}
          <Link
            href="/mba/stanford-gsb"
            className="text-apple-accent hover:underline"
          >
            Stanford GSB
          </Link>
          , that role is shared across six faculty. At{" "}
          <Link
            href="/mba/harvard-business-school"
            className="text-apple-accent hover:underline"
          >
            Harvard Business School
          </Link>
          , the Ruback-Yudkoff partnership carries the load. At Yale, the
          entire ETA ecosystem revolves around one person: A.J. Wasserstein.
        </p>

        <p>
          Wasserstein is the Eugene F. Williams, Jr., Senior Lecturer in the
          Practice of Management at Yale SOM. Before joining the faculty, he
          served as CEO of ArchivesOne, a records management company he grew
          and ultimately sold to Iron Mountain. That operating experience is
          the foundation of everything he teaches, and it shows in the scale of
          his academic output. Over the course of his career at Yale, Wasserstein
          has authored more than 100 case studies on entrepreneurship through
          acquisition, making him the most prolific single author on the subject
          in any business school.
        </p>

        <p>
          Wasserstein has described the ETA model in direct terms. As he told
          Yale SOM News:{" "}
        </p>

        <blockquote className={profileQuote}>
          &ldquo;It&rsquo;s a model that catapults you from classroom to CEO
          within a few years of completing an MBA.&rdquo;
        </blockquote>

        <p>
          He has also noted the accessibility of the approach compared to
          venture-backed startups:
        </p>

        <blockquote className={profileQuote}>
          &ldquo;Since you&rsquo;re buying a business, rather than starting
          one, you don&rsquo;t have to have a brilliant idea.&rdquo;
        </blockquote>

        <p>
          Both quotes come from a 2021 Yale SOM News article profiling the
          program's growing impact. That practical framing captures why Yale
          SOM appeals to a specific kind of MBA candidate: someone who wants to
          run a real business, not pitch a startup, and who values depth of
          preparation over breadth of options.
        </p>

        {/* ── 3. Faculty ───────────────────────────────────────────── */}
        <h2 className={profileH2}>Faculty</h2>

        <p>
          Yale SOM's ETA program is unusual in that it is built around a single
          dedicated faculty member rather than a team. This concentration has
          advantages. Wasserstein teaches all three ETA courses, ensures
          continuity across the curriculum, and personally mentors students
          from their first exposure to ETA through their post-graduation
          searches.
        </p>

        <h3 className={profileH3}>A.J. Wasserstein</h3>
        <ul className={profileUl}>
          <li>
            <strong>Title:</strong> Eugene F. Williams, Jr., Senior Lecturer in
            the Practice of Management
          </li>
          <li>
            <strong>Background:</strong> Former CEO of ArchivesOne, sold to
            Iron Mountain
          </li>
          <li>
            <strong>Academic output:</strong> 100+ ETA case studies, the largest
            collection by any individual academic
          </li>
          <li>
            <strong>Recognition:</strong> Teaching Excellence Award 2022 and
            2024
          </li>
        </ul>

        <p>
          Wasserstein's dual Teaching Excellence Awards underscore a point that
          matters for prospective students: academic depth does not come at the
          expense of teaching quality. His courses are consistently among the
          highest-rated at Yale SOM.
        </p>

        {/* ── 4. Course offerings ──────────────────────────────────── */}
        <h2 className={profileH2}>Course offerings</h2>

        <p>
          Yale SOM offers three dedicated ETA courses, all taught by
          Wasserstein. This is a higher count than most Tier 2 programs and
          matches the three-course offerings at Stanford GSB and HBS. The
          courses form a logical sequence, from foundational ETA concepts
          through post-acquisition operations and advanced deal structures.
        </p>

        <table className={profileTable}>
          <thead>
            <tr>
              <th className={profileTh}>Code</th>
              <th className={profileTh}>Course name</th>
              <th className={profileTh}>Focus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={profileTd}>MGT 671</td>
              <td className={profileTd}>
                Entrepreneurship Through Acquisition
              </td>
              <td className={profileTd}>
                Core ETA course: search process, deal sourcing, due diligence,
                acquisition financing, and transition planning
              </td>
            </tr>
            <tr>
              <td className={profileTd}>MGT 674</td>
              <td className={profileTd}>
                Leading Small and Medium Enterprises
              </td>
              <td className={profileTd}>
                Post-acquisition leadership: managing operations, people, and
                growth in acquired businesses
              </td>
            </tr>
            <tr>
              <td className={profileTd}>MGT 677</td>
              <td className={profileTd}>
                Rollups, Consolidations and Programmatic Acquisitions
              </td>
              <td className={profileTd}>
                Advanced deal structures: multi-unit acquisition strategies,
                platform and add-on models, industry consolidation
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          The third course, MGT 677, is particularly distinctive. Most ETA
          programs focus on the single-acquisition search fund model. By
          covering rollups and programmatic acquisitions, Yale SOM prepares
          students for a broader range of acquisition strategies, including
          those used by{" "}
          <Link
            href="/learn/finding-investors"
            className="text-apple-accent hover:underline"
          >
            investors backing multi-deal platforms
          </Link>
          .
        </p>

        {/* ── 5. Academic depth: the case library ──────────────────── */}
        <h2 className={profileH2}>Academic depth: the case study library</h2>

        <p>
          The centerpiece of Yale SOM's ETA program is not any single course
          but the case library underpinning all three. With over 100 case
          studies authored by Wasserstein, Yale SOM has built the largest
          single-author collection of ETA teaching material at any business
          school.
        </p>

        <p>
          These cases cover the full lifecycle of an acquisition-based
          entrepreneurial journey: sourcing and evaluating targets, structuring
          deals, negotiating with sellers, managing lender relationships,
          navigating the{" "}
          <Link
            href="/learn/first-100-days"
            className="text-apple-accent hover:underline"
          >
            first 100 days as CEO
          </Link>
          , and executing growth plans post-acquisition. The breadth is
          important because it means students encounter dozens of real scenarios
          before they ever write a letter of intent.
        </p>

        <p>
          For students comparing Yale SOM to other programs, the case library
          is the key differentiator. Stanford GSB has the definitive dataset
          (681 tracked funds) and HBS has the most widely assigned textbook.
          Yale SOM has the most granular teaching material, drawn from
          Wasserstein's own operating experience and his decades of engagement
          with ETA practitioners.
        </p>

        {/* ── 6. Alumni spotlight ──────────────────────────────────── */}
        <h2 className={profileH2}>Alumni spotlight</h2>

        <p>
          Yale SOM has produced a growing cohort of verified searchers and
          acquirers. Four alumni profiles illustrate the range of outcomes.
        </p>

        <h3 className={profileH3}>Matt Dittrich (SOM '18) &mdash; Blue Wood Capital LLC</h3>
        <p>
          Dittrich founded the Yale ETA Club during his time at SOM,
          establishing the student-led community that continues to support
          aspiring searchers. After graduating, he launched Blue Wood Capital
          LLC as his search fund vehicle. His decision to build institutional
          ETA infrastructure at Yale before graduating reflects the kind of
          initiative that strengthens a program from the inside.
        </p>

        <h3 className={profileH3}>Ross Butler (SOM '21) &mdash; BPI Information Systems</h3>
        <p>
          Butler stands out for the speed of his path from MBA to CEO. He
          acquired BPI Information Systems while still enrolled as a student at
          Yale SOM, completing the deal before graduation. That timeline is
          rare in ETA and speaks to the intensity of Wasserstein's curriculum:
          students who engage fully can be acquisition-ready before they receive
          their diplomas.
        </p>

        <h3 className={profileH3}>Jose P. Moreno (SOM '17), Pivot Capital Fund</h3>
        <p>
          Moreno took the ETA model international. After graduating from Yale
          SOM, he founded Pivot Capital Fund and acquired a Colombian food
          services company generating $13M in annual revenue. His trajectory
          demonstrates that Yale's ETA training translates to markets far
          beyond the northeastern United States, a theme that connects directly
          to{" "}
          <Link
            href="/learn/search-fund-returns"
            className="text-apple-accent hover:underline"
          >
            the broader data on search fund returns
          </Link>{" "}
          across different geographies.
        </p>

        <h3 className={profileH3}>Georgyi Vekhov (SOM '20), Milestone Capital / UDP Auto</h3>
        <p>
          Vekhov's story opened this profile, and it remains the most striking
          illustration of Yale SOM's international reach. After graduating in
          2020, he returned to Russia, launched Milestone Capital, and acquired
          UDP Auto in Moscow. It was the first traditional search fund
          acquisition in Russia, extending the ETA model into a market with no
          prior infrastructure for it. The fact that Vekhov built his entire
          framework inside Yale SOM's three-course sequence shows how much can
          be accomplished with deep academic preparation and a clear geographic
          thesis.
        </p>

        {/* ── 7. Student community ─────────────────────────────────── */}
        <h2 className={profileH2}>Student community: the Yale ETA Club</h2>

        <p>
          The Yale ETA Club, founded by Matt Dittrich during his MBA, serves as
          the hub for student-led ETA activity at SOM. The club organizes
          speaker events, connects current students with alumni searchers, and
          provides a peer network for students working through the ETA
          curriculum.
        </p>

        <p>
          Student-led ETA clubs matter because they create informal knowledge
          transfer that courses alone cannot provide. A student considering
          whether to raise a traditional search fund or pursue a{" "}
          <Link
            href="/learn/getting-started"
            className="text-apple-accent hover:underline"
          >
            self-funded search
          </Link>{" "}
          benefits from conversations with second-years who have already taken
          all three Wasserstein courses and are actively evaluating deals.
        </p>

        <p>
          Compared to the ETA clubs at programs like{" "}
          <Link
            href="/mba/chicago-booth"
            className="text-apple-accent hover:underline"
          >
            Chicago Booth
          </Link>{" "}
          (which has a Polsky Center-backed Fellows program) or HBS (which hosts
          an annual 1,000-attendee conference), Yale's club operates on a
          smaller scale. That intimacy can be an advantage: students get more
          direct access to Wasserstein and to each other, and the community
          stays focused on serious practitioners rather than casual observers.
        </p>

        {/* ── 8. Tuition and financial considerations ──────────────── */}
        <h2 className={profileH2}>Tuition and financial considerations</h2>

        <p>
          Yale SOM tuition for the 2026-2027 academic year is $91,400 per year
          ($90,900 in tuition plus a $500 fee). Over a two-year MBA, the
          tuition component alone totals approximately $182,800 before living
          expenses.
        </p>

        <p>
          This places Yale SOM at the higher end of US MBA pricing. For
          comparison, Stanford GSB charges approximately $85,755 per year and
          HBS charges $84,760. However, the total cost of an MBA for ETA must
          be weighed against the opportunity it creates. Students considering
          the financial equation should read the full analysis in{" "}
          <Link
            href="/learn/mba-roi-search-fund-career"
            className="text-apple-accent hover:underline"
          >
            MBA ROI for a search fund career
          </Link>
          , which breaks down break-even scenarios and expected outcomes.
        </p>

        <p>
          Prospective students should also evaluate Yale SOM's broader
          financial aid offerings. While Yale SOM does not currently offer an
          ETA-specific fellowship comparable to the HBS Search Fund Fellowship
          ($130K) or the Wharton Perlman Fellowship ($50K), the school does
          provide need-based and merit-based aid that can meaningfully reduce
          total cost.
        </p>

        {/* ── 9. How Yale compares ─────────────────────────────────── */}
        <h2 className={profileH2}>How Yale SOM compares</h2>

        <p>
          Yale SOM occupies a distinctive position in the ETA landscape. It is
          not the birthplace of the search fund model (that is Stanford), nor
          does it have the largest ETA conference (HBS) or the most generous
          fellowship funding (Wharton). What it has is depth: more ETA case
          studies than any other program, a three-course sequence taught by a
          single practitioner-academic, and an alumni record that spans the
          United States, Latin America, and Russia.
        </p>

        <p>
          In the overall ranking of{" "}
          <Link
            href="/learn/best-mba-for-search-fund"
            className="text-apple-accent hover:underline"
          >
            the best MBAs for search fund careers
          </Link>
          , Yale SOM sits in Tier 2 alongside programs like Chicago Booth,
          Kellogg, Wharton, and INSEAD. What distinguishes it within that tier
          is the sheer volume of academic material available. A student at Yale
          SOM will encounter more real-world ETA scenarios in the classroom
          than at almost any other program.
        </p>

        <p>
          The tradeoff is institutional infrastructure. Booth has the Polsky
          Center and a formal ETA Fellows program. Wharton has a $10M
          endowment. Kellogg has the Zell Fellows ETA track. Yale SOM's
          infrastructure is leaner, built more around Wasserstein personally
          than around a center or endowment. For students who value academic
          rigor and close faculty mentorship over programmatic resources, that
          concentration is a feature. For students who want a broader
          institutional safety net, it is a consideration.
        </p>

        {/* ── 10. Who should choose Yale ───────────────────────────── */}
        <h2 className={profileH2}>Who should choose Yale SOM</h2>

        <p>
          Yale SOM is the right choice for a specific kind of ETA candidate.
          The program is best suited for students who want to study acquisition
          entrepreneurship at maximum academic depth: who want to read 100+
          case studies, take three sequential courses, and learn from a
          practitioner who has both operated and taught at the highest level.
        </p>

        <p>
          It is also a strong fit for students with an international thesis.
          Vekhov's Russia acquisition and Moreno's Colombian deal both
          originated in Wasserstein's classroom, which suggests that Yale SOM
          does an unusually good job of preparing students to apply the ETA
          model outside the typical US corridor. Students exploring the
          relationship between{" "}
          <Link
            href="/learn/mba-and-eta"
            className="text-apple-accent hover:underline"
          >
            MBA programs and ETA outcomes
          </Link>{" "}
          will find that Yale SOM offers one of the most compelling academic
          value propositions in the field.
        </p>

        <p>
          Students who prioritize brand-name recognition, large-scale
          networking events, or fellowship funding may find a better fit at
          HBS, Stanford, or Wharton. But for those who want the deepest
          classroom preparation available, Yale SOM has built something that no
          other program can match.
        </p>

        {/* ── 11. Related reading ──────────────────────────────────── */}
        <h2 className={profileH2}>Related reading</h2>

        <ul className={profileUl}>
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
              href="/learn/mba-roi-search-fund-career"
              className="text-apple-accent hover:underline"
            >
              MBA ROI for a search fund career
            </Link>
          </li>
          <li>
            <Link
              href="/learn/mba-and-eta"
              className="text-apple-accent hover:underline"
            >
              MBA programs and ETA
            </Link>
          </li>
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
              href="/learn/search-fund-returns"
              className="text-apple-accent hover:underline"
            >
              Search fund returns
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
              href="/learn/first-100-days"
              className="text-apple-accent hover:underline"
            >
              The first 100 days as CEO
            </Link>
          </li>
          <li>
            <Link
              href="/mba/stanford-gsb"
              className="text-apple-accent hover:underline"
            >
              Stanford GSB: The birthplace of search funds
            </Link>
          </li>
          <li>
            <Link
              href="/mba/harvard-business-school"
              className="text-apple-accent hover:underline"
            >
              Harvard Business School: ETA courses, fellowship, and case studies
            </Link>
          </li>
          <li>
            <Link
              href="/mba/chicago-booth"
              className="text-apple-accent hover:underline"
            >
              Chicago Booth: ETA Fellows, Polsky Center, and conference
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
