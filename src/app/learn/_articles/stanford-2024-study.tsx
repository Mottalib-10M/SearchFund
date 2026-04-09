import { h1Class, h2Class, bodyClass, ulClass } from "./shared-styles";

export default function Stanford2024Article() {
  return (
    <article>
      <h1 className={h1Class}>Stanford 2024 Search Fund Study: Key Takeaways</h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          The Stanford Graduate School of Business published its landmark 2024
          Search Fund Study, analyzing data from 681 qualifying search funds
          raised in the United States and Canada since 1984. This study, produced
          by the Center for Entrepreneurial Studies, is the most comprehensive
          dataset on search fund performance ever compiled.
        </p>

        <h2 className={h2Class}>Record-breaking growth</h2>
        <p>
          A record 94 search funds were launched in 2023 — the highest number in
          history. This represents a dramatic acceleration from the early days:
          fewer than 20 funds per year were raised before 2010. The surge
          reflects growing awareness of the ETA model, a maturing investor base,
          and the increasing number of MBA programs that teach entrepreneurship
          through acquisition.
        </p>

        <h2 className={h2Class}>Headline performance numbers</h2>
        <ul className={ulClass}>
          <li><strong>35.1% aggregate pre-tax IRR</strong> — across all search funds that have reached a conclusion.</li>
          <li><strong>4.5x aggregate pre-tax ROIC</strong> — return on invested capital, including both search and acquisition capital.</li>
          <li><strong>63% acquisition rate</strong> — of search funds that concluded their search, 63% successfully acquired a company.</li>
          <li><strong>20-month average search length</strong> — reverting to historical norms after a shorter 17-month average during 2020-2021.</li>
          <li><strong>$14.4M median purchase price</strong> — down slightly from $16.5M in the prior study, likely due to tighter monetary policy.</li>
        </ul>

        <h2 className={h2Class}>Sector concentration</h2>
        <p>
          Since 2014, healthcare and business services companies have accounted
          for roughly half of all search fund acquisitions. Technology and
          software companies represent the next-largest category. The preference
          for recurring-revenue, low-cyclicality businesses remains a defining
          characteristic of the asset class.
        </p>

        <h2 className={h2Class}>What makes searchers successful?</h2>
        <p>The Stanford data reveals several factors correlated with better outcomes:</p>
        <ul className={ulClass}>
          <li><strong>Industry experience</strong> — searchers with prior experience in their target sector tend to acquire faster and operate more effectively.</li>
          <li><strong>Geographic focus</strong> — concentrated geographic searches reduce travel costs and build deeper broker/intermediary networks.</li>
          <li><strong>Investor quality</strong> — experienced search fund investors provide mentorship, board guidance, and operational support that materially improves outcomes.</li>
          <li><strong>Deal discipline</strong> — the most successful searchers maintain strict acquisition criteria and resist the pressure to close a deal for the sake of completing the search.</li>
        </ul>

        <h2 className={h2Class}>Implications for European searchers</h2>
        <p>
          While the Stanford study focuses on US and Canadian funds, its lessons
          are highly relevant to Europe. European search funds benefit from lower
          acquisition multiples (3-5x EBITDA vs. 4-7x in the US), less
          competition, and a massive wave of SME succession opportunities. The
          IESE International Search Fund Study and INSEAD&apos;s ETA & Search Funds
          Hub provide complementary data for the European market. INSEAD, through
          its Fontainebleau, Singapore, and Abu Dhabi campuses, has become a
          global leader in ETA education, producing research, case studies, and a
          growing alumni network of searchers and investors operating across
          multiple continents.
        </p>

        <h2 className={h2Class}>Source</h2>
        <p>
          The full study is available through the Stanford Graduate School of
          Business Center for Entrepreneurial Studies.
        </p>
      </div>
    </article>
  );
}
