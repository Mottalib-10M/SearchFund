import {
  profileH1,
  profileH2,
  profileBody,
  profileUl,
  profileTable,
  profileTh,
  profileTd,
} from "./shared-styles";
import Link from "next/link";

export default function KelloggProfile() {
  return (
    <article>
      <h1 className={profileH1}>
        Kellogg: Zell Fellows and ETA at Northwestern
      </h1>
      <p className="text-sm text-apple-gray-500 mt-2">12 min read</p>

      <div className={profileBody}>
        <p>
          At most business schools, entrepreneurship through acquisition is a
          single elective on the margins of the curriculum. At the Kellogg School
          of Management, ETA has its own track inside the Larry and Carol Zell
          Fellows Program, one of the most selective entrepreneurship fellowships
          in graduate management education. Since 2013, approximately 20 students
          per year have entered the Zell Fellows ETA track, gaining access to
          dedicated coursework, mentorship from seasoned operators, and a direct
          pipeline into the acquisition entrepreneurship community. For students
          who want to{" "}
          <Link
            href="/learn/getting-started"
            className="text-apple-accent hover:underline"
          >
            get started in ETA
          </Link>{" "}
          with structured institutional support, Kellogg offers a combination of
          resources that few peer programs can match.
        </p>
      </div>

      {/* ── Why Kellogg matters ────────────────────────────────────────── */}
      <h2 className={profileH2}>Why Kellogg matters for ETA</h2>
      <div className={profileBody}>
        <p>
          Kellogg sits in Evanston, Illinois, minutes from Chicago Booth. That
          proximity is not incidental. The two schools co-host the Booth-Kellogg
          ETA Conference, the largest ETA-focused event in the United States, and
          their combined alumni networks create one of the deepest talent pools
          for aspiring searchers in the Midwest. Students at Kellogg can tap into{" "}
          <Link
            href="/mba/chicago-booth"
            className="text-apple-accent hover:underline"
          >
            Chicago Booth&apos;s Polsky Center
          </Link>{" "}
          events and speaker series while benefiting from Kellogg&apos;s own
          entrepreneurship infrastructure.
        </p>
        <p>
          This cross-school synergy distinguishes Kellogg from programs that
          operate in isolation. Where other schools must build their ETA
          ecosystem from scratch, Kellogg shares one with a peer institution that
          has its own ETA Fellows program, dedicated faculty, and course
          offerings. The result is a wider network of investors, operators, and
          alumni than either school could sustain alone. For students weighing the{" "}
          <Link
            href="/learn/mba-and-eta"
            className="text-apple-accent hover:underline"
          >
            MBA-to-ETA pathway
          </Link>
          , this collaborative dynamic is a meaningful differentiator.
        </p>
      </div>

      {/* ── The Zell Fellows ETA track ─────────────────────────────────── */}
      <h2 className={profileH2}>The Zell Fellows ETA track</h2>
      <div className={profileBody}>
        <p>
          The Larry and Carol Zell Fellows Program is Kellogg&apos;s flagship
          entrepreneurship initiative. Within it, the ETA track has operated
          since 2013, selecting roughly 20 students each year who are committed
          to pursuing acquisition entrepreneurship after graduation. Fellows
          receive mentorship from experienced operators and investors, a
          structured curriculum that pairs theory with live deal analysis, and
          membership in a tight-knit cohort of peers on the same career path.
        </p>
        <p>
          The ETA track is not merely an academic exercise. It functions as a
          pre-search incubator, designed to compress the learning curve that
          aspiring searchers face during their first months of independent deal
          sourcing. By the time Zell Fellows graduate, they have already
          evaluated real acquisition targets, modeled transaction structures, and
          engaged with the investor community that funds search vehicles. This
          operational readiness is a core part of what makes the program
          valuable, and it aligns with the broader guidance on{" "}
          <Link
            href="/learn/pre-search-preparation"
            className="text-apple-accent hover:underline"
          >
            pre-search preparation
          </Link>{" "}
          that experienced searchers recommend.
        </p>
        <p>
          The fellowship structure also builds lasting professional
          relationships. Alumni of the Zell Fellows ETA track form a network that
          extends well beyond Kellogg, connecting graduates to deal flow,
          co-investment opportunities, and operational advice long after they
          leave campus.
        </p>
      </div>

      {/* ── Faculty ────────────────────────────────────────────────────── */}
      <h2 className={profileH2}>Faculty</h2>
      <div className={profileBody}>
        <p>
          The ETA curriculum at Kellogg is anchored by{" "}
          <strong>Alex Schneider</strong>, an Adjunct Lecturer who serves as
          Director of the Zell Fellows ETA track. Schneider brings more than 20
          years of experience in private equity and investment banking to the
          classroom, combining institutional finance rigor with the practical
          demands of small-business acquisition. He teaches both of
          Kellogg&apos;s dedicated ETA courses and oversees the mentorship and
          deal evaluation components of the Zell Fellows program.
        </p>
        <p>
          Schneider&apos;s dual role as faculty member and program director
          ensures continuity between what students learn in class and how they
          apply it during the fellowship. Unlike programs where ETA courses are
          taught by rotating adjuncts with limited connection to the broader
          curriculum, Kellogg&apos;s structure concentrates ETA instruction under
          a single practitioner who is deeply embedded in the school&apos;s
          entrepreneurship ecosystem.
        </p>
      </div>

      {/* ── Course offerings ───────────────────────────────────────────── */}
      <h2 className={profileH2}>Course offerings</h2>
      <div className={profileBody}>
        <p>
          Kellogg offers two dedicated ETA courses, both taught by Alex
          Schneider:
        </p>
        <table className={profileTable}>
          <thead>
            <tr>
              <th className={profileTh}>Code</th>
              <th className={profileTh}>Course name</th>
              <th className={profileTh}>Credits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={profileTd}>ENTR-905</td>
              <td className={profileTd}>
                Entrepreneurship Through Acquisition
              </td>
              <td className={profileTd}>0.5 CR</td>
            </tr>
            <tr>
              <td className={profileTd}>ENTR-910</td>
              <td className={profileTd}>
                Acquisition &amp; Management of a Small Business
              </td>
              <td className={profileTd}>1.0 CR</td>
            </tr>
          </tbody>
        </table>
        <p>
          ENTR-905 serves as the entry point, covering the fundamentals of
          search fund formation, deal sourcing, valuation, and investor
          relations. At half a credit, it is designed to be accessible even to
          students who are still exploring whether ETA is the right career path.
          ENTR-910 is the more intensive follow-up, a full-credit course that
          moves into the operational realities of acquiring and managing a small
          business: due diligence, transaction structuring, post-acquisition
          value creation, and the leadership challenges that define the first
          year as an owner-operator.
        </p>
        <p>
          Together, the two courses cover the full lifecycle of an acquisition
          from initial search through post-close management. Students who
          complete both are well-prepared to evaluate whether a{" "}
          <Link
            href="/learn/best-mba-for-search-fund"
            className="text-apple-accent hover:underline"
          >
            search fund career
          </Link>{" "}
          is the right fit and, if so, to launch one with a solid foundation.
        </p>
      </div>

      {/* ── ETA@Kellogg Club ───────────────────────────────────────────── */}
      <h2 className={profileH2}>ETA@Kellogg Club</h2>
      <div className={profileBody}>
        <p>
          Beyond the formal curriculum, the student-led ETA@Kellogg Club serves
          as the social and professional hub for acquisition-minded students. The
          club has over 100 active members, making it one of the largest
          student-run ETA organizations at any business school. Its programming
          includes speaker panels with search fund operators and investors,
          workshops on deal sourcing and financial modeling, and networking events
          that connect current students with Kellogg alumni who have completed
          acquisitions.
        </p>
        <p>
          The club also plays a critical role in connecting students to the
          broader ETA investor community. For aspiring searchers who need to
          understand how{" "}
          <Link
            href="/learn/finding-investors"
            className="text-apple-accent hover:underline"
          >
            finding investors
          </Link>{" "}
          works in practice, ETA@Kellogg provides early exposure to the
          individuals and firms that fund search vehicles. These relationships,
          formed during the MBA, often carry forward into the fundraising process
          after graduation.
        </p>
        <p>
          The club&apos;s scale matters. A 100-member organization generates its
          own internal deal-sharing network, creates accountability structures
          for students who are actively preparing to search, and produces enough
          alumni each year to sustain a growing post-MBA referral network.
        </p>
      </div>

      {/* ── The Booth-Kellogg ETA Conference ───────────────────────────── */}
      <h2 className={profileH2}>The Booth-Kellogg ETA Conference</h2>
      <div className={profileBody}>
        <p>
          The annual Booth-Kellogg ETA Conference is the flagship event for the
          ETA community in the central United States. The 11th edition, held in
          November 2024, drew approximately 1,000 attendees from 13 countries
          and 47 universities. The conference brings together searchers,
          operators, investors, and academics for a day of panels, workshops, and
          structured networking.
        </p>
        <p>
          The conference&apos;s scale and longevity reflect the depth of the
          Chicago-area ETA ecosystem. With two top-10 MBA programs jointly
          organizing the event, the Booth-Kellogg conference attracts a caliber
          of speaker and attendee that standalone school-level events struggle to
          match. For Kellogg students, the conference is both a learning
          opportunity and a relationship-building exercise, offering direct
          access to the investors and operators they will need to engage once
          they begin their own search.
        </p>
        <p>
          The conference also serves as a signal of institutional commitment.
          When a school co-hosts an event that consistently draws 1,000
          participants, it demonstrates that ETA is not a peripheral interest but
          a core part of the entrepreneurship curriculum.
        </p>
      </div>

      {/* ── Tuition and financial considerations ───────────────────────── */}
      <h2 className={profileH2}>Tuition and financial considerations</h2>
      <div className={profileBody}>
        <table className={profileTable}>
          <thead>
            <tr>
              <th className={profileTh}>Program</th>
              <th className={profileTh}>Tuition (2025-2026)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={profileTd}>2-year MBA</td>
              <td className={profileTd}>$86,370/year</td>
            </tr>
            <tr>
              <td className={profileTd}>1-year accelerated MBA</td>
              <td className={profileTd}>$119,996</td>
            </tr>
          </tbody>
        </table>
        <p>
          The 2-year program is the standard path for ETA-focused students, as
          it allows time to complete both dedicated courses, participate fully in
          the Zell Fellows program, and build relationships through the
          ETA@Kellogg Club and the annual conference. At $86,370 per year, the
          total tuition cost for two years is approximately $172,740 before
          living expenses.
        </p>
        <p>
          The 1-year accelerated program, at $119,996, offers a faster path but
          limits the time available for fellowship participation and
          relationship-building. Students considering the 1-year option should
          weigh the cost savings against the reduced access to Kellogg&apos;s
          ETA-specific programming.
        </p>
        <p>
          For a detailed analysis of how MBA tuition costs compare to expected
          search fund outcomes, see the{" "}
          <Link
            href="/learn/mba-roi-search-fund-career"
            className="text-apple-accent hover:underline"
          >
            MBA ROI for search fund careers
          </Link>{" "}
          guide.
        </p>
      </div>

      {/* ── How Kellogg compares ───────────────────────────────────────── */}
      <h2 className={profileH2}>How Kellogg compares</h2>
      <div className={profileBody}>
        <p>
          Among US programs, Kellogg occupies a distinctive position. It does
          not claim the historical lineage of{" "}
          <Link
            href="/mba/stanford-gsb"
            className="text-apple-accent hover:underline"
          >
            Stanford GSB
          </Link>
          , where the search fund model was invented in 1984, nor the case-study
          depth of Harvard Business School. What Kellogg offers is a structured
          fellowship pathway, a collaborative relationship with a peer
          institution, and a conference that draws more attendees than any other
          school-organized ETA event in the country.
        </p>
        <p>
          Compared to{" "}
          <Link
            href="/mba/yale-som"
            className="text-apple-accent hover:underline"
          >
            Yale SOM
          </Link>
          , which excels in academic depth through A.J. Wasserstein&apos;s 100+
          case studies, Kellogg&apos;s strength lies in its programmatic
          infrastructure. The Zell Fellows ETA track provides a level of
          structured support that goes beyond coursework alone, embedding
          students in a fellowship cohort with dedicated mentorship and resources.
        </p>
        <p>
          The Booth-Kellogg relationship is perhaps the single most important
          differentiator. No other pair of top MBA programs collaborates this
          closely on ETA programming. The joint conference, shared speaker
          networks, and overlapping alumni communities give Kellogg students
          access to a broader ecosystem than their tuition alone would suggest.
        </p>
      </div>

      {/* ── Who should choose Kellogg ──────────────────────────────────── */}
      <h2 className={profileH2}>Who should choose Kellogg</h2>
      <div className={profileBody}>
        <p>
          Kellogg is best suited for students who value structured programming
          over pure academic exploration. The Zell Fellows ETA track is designed
          for students who arrive at business school already interested in
          acquisition entrepreneurship and want a defined pathway from classroom
          to search. If you are the type of candidate who thrives in a cohort
          model with clear milestones and mentorship, Kellogg&apos;s approach
          will feel natural.
        </p>
        <ul className={profileUl}>
          <li>
            <strong>Fellowship seekers:</strong> The Zell Fellows program offers
            institutional support that goes beyond a single course or club.
          </li>
          <li>
            <strong>Midwest-oriented searchers:</strong> Kellogg&apos;s location
            provides direct access to the Midwest deal market, where valuations
            tend to be lower and competition less intense than on the coasts.
          </li>
          <li>
            <strong>Network builders:</strong> The 100+ member ETA@Kellogg Club
            and the Booth-Kellogg Conference provide unmatched networking
            density for ETA-focused students.
          </li>
          <li>
            <strong>Collaborative learners:</strong> Kellogg&apos;s
            culture emphasizes teamwork, and the cross-school dynamic with Booth
            extends that collaborative ethos to ETA programming.
          </li>
        </ul>
        <p>
          Students who prefer deeper academic immersion in ETA theory or who want
          the broadest possible case-study library may find that other programs
          are a better fit. But for structured, fellowship-driven preparation
          with strong institutional backing, Kellogg stands among the best
          options in the country.
        </p>
      </div>

      {/* ── Related reading ────────────────────────────────────────────── */}
      <h2 className={profileH2}>Related reading</h2>
      <ul className={profileUl}>
        <li>
          <Link
            href="/learn/getting-started"
            className="text-apple-accent hover:underline"
          >
            Getting Started with ETA
          </Link>
        </li>
        <li>
          <Link
            href="/learn/mba-and-eta"
            className="text-apple-accent hover:underline"
          >
            MBA and ETA: Is Business School Worth It?
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
            href="/learn/mba-roi-search-fund-career"
            className="text-apple-accent hover:underline"
          >
            MBA ROI for Search Fund Entrepreneurs
          </Link>
        </li>
        <li>
          <Link
            href="/mba/chicago-booth"
            className="text-apple-accent hover:underline"
          >
            Chicago Booth: ETA Fellows and Polsky Center
          </Link>
        </li>
        <li>
          <Link
            href="/mba/stanford-gsb"
            className="text-apple-accent hover:underline"
          >
            Stanford GSB: The Birthplace of Search Funds
          </Link>
        </li>
        <li>
          <Link
            href="/mba/yale-som"
            className="text-apple-accent hover:underline"
          >
            Yale SOM: The Deepest Academic ETA Program
          </Link>
        </li>
        <li>
          <Link
            href="/learn/finding-investors"
            className="text-apple-accent hover:underline"
          >
            Finding Investors for Your Search Fund
          </Link>
        </li>
        <li>
          <Link
            href="/learn/pre-search-preparation"
            className="text-apple-accent hover:underline"
          >
            Pre-Search Preparation
          </Link>
        </li>
      </ul>
    </article>
  );
}
