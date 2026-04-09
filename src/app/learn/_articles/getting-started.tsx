import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function GettingStartedArticle() {
  return (
    <article>
      <h1 className={h1Class}>What is a Search Fund? Complete Guide</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          A search fund is an investment vehicle through which an entrepreneur
          (the &ldquo;searcher&rdquo;) raises a pool of capital from investors
          to fund the search for, acquisition of, and operation of a single
          privately held company. The model was pioneered at Stanford Graduate
          School of Business in 1984 and has since grown into a well-established
          path for aspiring CEOs who want to skip the corporate ladder and go
          straight to running their own company.
        </p>

        <h2 className={h2Class}>How the model works</h2>
        <p>
          The search fund model follows a structured, multi-phase lifecycle that
          typically spans five to eight years from inception to exit. Each phase
          has distinct objectives, milestones, and challenges.
        </p>

        <h3 className={h3Class}>Phase 1: Fundraising the search capital</h3>
        <p>
          The entrepreneur begins by raising search capital, typically between
          $400,000 and $600,000 (or the equivalent in euros), from a group of
          10 to 20 investors. These investors each contribute a relatively small
          amount in exchange for the right (but not the obligation) to invest in
          the eventual acquisition. Search capital covers the entrepreneur&apos;s
          salary, travel, deal sourcing, legal costs, and other expenses during
          the search period, which typically lasts 18 to 24 months.
        </p>

        <h3 className={h3Class}>Phase 2: The search</h3>
        <p>
          Once funded, the searcher begins a full-time, systematic search for an
          acquisition target. This involves reviewing hundreds of potential
          companies, reaching out to business owners, brokers, and
          intermediaries, and conducting preliminary due diligence on promising
          leads. Searchers typically evaluate 50 to 100 companies in detail and
          may submit multiple letters of intent before finding the right fit.
        </p>

        <h3 className={h3Class}>Phase 3: Acquisition</h3>
        <p>
          When a suitable target is identified, the searcher negotiates the
          deal, conducts thorough due diligence, and raises acquisition capital.
          Acquisition multiples for search fund deals usually range from
          3x to 6x EBITDA. The searcher typically receives a significant equity
          stake (often 20-30% of the company) as part of the deal economics.
        </p>

        <h3 className={h3Class}>Phase 4: Operations</h3>
        <p>
          After closing the deal, the searcher steps in as CEO and begins
          operating the company. This phase typically lasts four to seven years
          and involves implementing operational improvements, growing revenue,
          and professionalizing the organization.
        </p>

        <h3 className={h3Class}>Phase 5: Exit</h3>
        <p>
          The typical exit occurs five to seven years after the acquisition,
          usually through a sale to a strategic buyer, a private equity fund, or
          another search fund entrepreneur. The most successful search fund
          acquisitions have generated returns of 3x to 10x on invested capital.
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
          retention and flexibility. Self-funded searches have become
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
          <li>Approximately 63% of searchers successfully acquire a company.</li>
          <li>Aggregate pre-tax IRR of 35.1% and 4.5x return on invested capital.</li>
          <li>Average search length: 20 months.</li>
          <li>European search funds have grown from fewer than 10 per year in 2010 to over 80 per year as of 2024.</li>
        </ul>
      </div>
    </article>
  );
}
