import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAUSArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in the US: The Original Search Fund Market</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          The United States is where the search fund model was born, and after
          more than 40 years of evolution, it remains the world&apos;s deepest,
          most mature, and most institutionalized ETA market. What began as an
          experimental concept at Stanford Graduate School of Business in 1984
          has grown into a well-established asset class with a strong ecosystem
          of investors, advisors, lenders, and educational programs. The US
          market offers searchers unmatched access to capital, deal flow, and
          institutional support &mdash; but also the most competitive environment
          in the world. Understanding the nuances of the American ETA
          ecosystem is essential for anyone considering a search in the US or
          benchmarking their own market against the global standard. If you are new to ETA, start with our <Link href="/learn/getting-started" className="text-apple-accent hover:underline">getting started guide</Link>.
        </p>

        <h2 className={h2Class}>The history and evolution of US search funds</h2>
        <p>
          The search fund concept was pioneered by H. Irving Grousbeck at
          Stanford GSB in 1984. Grousbeck proposed a two-stage model: first,
          raise a small fund to finance the search for a company to acquire;
          then, once a target is identified, raise acquisition capital from
          the same investor group. The first handful of search funds were
          essentially experiments &mdash; MBA graduates testing whether
          they could identify, acquire, and operate small businesses more
          effectively than existing owners.
        </p>
        <p>
          Over the following decades, the model proved remarkably successful.
          Stanford&apos;s Center for Entrepreneurial Studies has tracked
          search fund performance since the 1990s, publishing thorough
          studies &mdash; most recently the <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">Stanford 2024 Search Fund Study</Link> &mdash; that have become the definitive reference for the industry.
          The data has consistently shown that search funds produce attractive
          returns for investors &mdash; historically averaging 30-35% IRR
          and 4-5x return on invested capital &mdash; while providing
          searchers with a path to CEO-level leadership and significant
          personal wealth creation.
        </p>
        <p>
          The US search fund market has grown exponentially, particularly
          since 2010. What was once a niche strategy pursued by a dozen
          graduates per year has expanded to over 100 new search funds
          launched annually in the US alone. This growth has been driven by
          the model&apos;s strong track record, the expansion of ETA
          curricula beyond Stanford to HBS, Wharton, Kellogg, Booth, and
          dozens of other programs, and the emergence of a dedicated
          investor class.
        </p>

        <h2 className={h2Class}>The academic ecosystem</h2>
        <p>
          The US benefits from the world&apos;s most developed academic
          infrastructure for ETA education. This ecosystem is a significant
          competitive advantage for American searchers.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Stanford GSB:</strong> The birthplace of the search fund
            model. Offers dedicated ETA courses, maintains the most
            thorough database of search fund outcomes, and produces the
            biennial Stanford Search Fund Study. The Stanford network remains
            the largest and most influential in US ETA.
          </li>
          <li>
            <strong>Harvard Business School:</strong> Has developed a strong
            ETA program with case studies, dedicated faculty, and a growing
            alumni network of searchers. HBS searchers benefit from the
            school&apos;s enormous alumni base and brand recognition.
          </li>
          <li>
            <strong>Wharton (UPenn):</strong> Strong ETA curriculum with
            particular emphasis on financial modeling and deal structuring.
            The Wharton network is well-represented among search fund
            investors.
          </li>
          <li>
            <strong>Kellogg (Northwestern):</strong> Known for its
            collaborative culture and strong Midwest network, Kellogg
            graduates often target businesses in the less competitive
            Midwest and Southeast markets.
          </li>
          <li>
            <strong>Other programs:</strong> Booth (Chicago), Tuck
            (Dartmouth), Darden (UVA), Fuqua (Duke), and McCombs (UT Austin)
            all have active ETA communities. The proliferation of programs
            has both expanded the talent pool and increased competition for
            deals.
          </li>
        </ul>

        <h2 className={h2Class}>Traditional vs. self-funded search</h2>
        <p>
          The US market has seen a significant evolution in search fund
          structures. Understanding the differences between traditional and
          self-funded models is critical for choosing the right approach.
        </p>

        <h3 className={h3Class}>Traditional search funds</h3>
        <p>
          In the traditional model, the searcher raises a search fund
          (typically $400K-$600K) from 10-20 investors to finance a
          two-year search. These investors receive the right of first refusal
          to invest in the eventual acquisition, typically receiving a
          step-up on their search capital (usually 1.5x). The searcher
          receives a salary during the search phase (typically $80K-$120K)
          and earns up to 25-30% of the equity in the acquired company
          through a vesting schedule tied to performance.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Pros:</strong> Dedicated capital for search, ability to
            search full-time, access to experienced investors as mentors and
            board members, proven model with extensive data on outcomes.
          </li>
          <li>
            <strong>Cons:</strong> Dilution (searcher typically ends up with
            20-30% of equity after investor step-ups and management equity
            pools), investor governance requirements, two-year time pressure,
            geographic and industry constraints imposed by investors.
          </li>
        </ul>

        <h3 className={h3Class}>Self-funded search</h3>
        <p>
          In a self-funded search, the searcher finances the search phase
          personally (or through a small group of close contacts) and then
          raises acquisition capital only when a specific deal is identified.
          This model has grown dramatically in the US, particularly among
          searchers with prior operating experience or personal savings.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Pros:</strong> Greater equity retention (often 50-80%
            of post-acquisition equity), full control over search criteria
            and timeline, flexibility to pursue smaller deals that
            traditional investors might reject, ability to use SBA loans
            for use.
          </li>
          <li>
            <strong>Cons:</strong> Personal financial risk during the search
            phase, limited access to institutional mentorship, narrower
            investor network for acquisition capital, potential for longer
            and more isolating search periods.
          </li>
        </ul>

        <h2 className={h2Class}>SBA 7(a) loans: the American advantage</h2>
        <p>
          One of the most significant structural advantages of the US market
          is the Small Business Administration&apos;s 7(a) loan program.
          This government-guaranteed lending program has become the primary
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition financing</Link> tool for self-funded searchers and a complement to
          investor equity for traditional searchers.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Loan amounts:</strong> Up to $5 million per borrower.
            For acquisitions, lenders typically finance 80-90% of the
            purchase price for qualifying businesses.
          </li>
          <li>
            <strong>Terms:</strong> 10-year terms for business acquisitions,
            25-year terms if commercial real estate is included. Interest
            rates are variable, typically Prime + 1.75% to Prime + 2.75%.
          </li>
          <li>
            <strong>Down payment:</strong> The SBA requires a minimum 10%
            equity injection from the buyer. This can include investor
            equity, personal funds, and in some cases, seller standby notes.
          </li>
          <li>
            <strong>Personal guarantee:</strong> Borrowers must provide a
            personal guarantee, and any individual owning 20% or more of
            the acquiring entity must also guarantee.
          </li>
          <li>
            <strong>Eligibility:</strong> The target business must be a
            for-profit US company, meet SBA size standards (varies by NAICS
            code but typically under $8.5M in average annual revenue or
            under 500 employees), and the acquirer must demonstrate relevant
            management experience.
          </li>
        </ul>
        <p>
          The SBA 7(a) program effectively allows searchers to acquire
          businesses with as little as 10% equity, creating use
          economics that are virtually impossible to replicate in European
          markets. This has fueled the explosive growth of self-funded
          search in the US.
        </p>

        <h2 className={h2Class}>Deal structures: LLC and LP vehicles</h2>
        <p>
          For a general overview of how search funds are typically organized, see our guide to <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">search fund legal structures</Link>.
        </p>

        <h3 className={h3Class}>LLC (Limited Liability Company)</h3>
        <p>
          The LLC is the most common structure for self-funded search
          acquisitions. Its pass-through tax treatment avoids double taxation
          (corporate income tax plus dividend tax), and its flexible operating
          agreement allows for creative equity allocation, profit
          distributions, and governance arrangements. Self-funded searchers
          typically form a single-member or multi-member LLC to acquire the
          target business.
        </p>

        <h3 className={h3Class}>LP (Limited Partnership)</h3>
        <p>
          Traditional search funds typically use an LP structure. The
          searcher serves as the General Partner (GP) with management control,
          while search fund investors are Limited Partners (LPs) with
          economic rights but limited governance participation. The LP
          structure provides clear separation between the manager-operator
          and passive investors, and its tax treatment (pass-through to
          partners) aligns with investor preferences.
        </p>

        <h2 className={h2Class}>Deal sourcing channels</h2>

        <h3 className={h3Class}>Business brokers</h3>
        <p>
          The US has a well-developed network of business brokers and
          intermediaries at every deal size. For search fund-sized
          acquisitions ($3M-$30M enterprise value), key intermediary channels
          include main street brokers (for deals under $5M), lower
          middle-market M&amp;A advisors (for deals of $5M-$30M), and
          industry-specific brokers who focus on particular verticals like
          healthcare, technology, or manufacturing.
        </p>

        <h3 className={h3Class}>Online platforms</h3>
        <p>
          The US offers more online deal sourcing platforms than any other
          market. Key platforms include BizBuySell (the largest marketplace
          for businesses under $5M), Axial (the leading platform for
          lower middle-market deals, connecting searchers with advisors
          and company owners), BizQuest, DealStream, and industry-specific
          platforms. While online platforms generate high volumes of leads,
          the quality is highly variable, and competition from other buyers
          is intense.
        </p>

        <h3 className={h3Class}>Direct outreach</h3>
        <p>
          Many successful US searchers supplement broker and online deal
          flow with proprietary direct outreach campaigns. This typically
          involves identifying potential targets through industry databases
          (Dun &amp; Bradstreet, ZoomInfo, LinkedIn Sales Navigator),
          building targeted lists of business owners, and reaching out via
          personalized letters, emails, or phone calls. Direct outreach
          yields lower response rates (typically 2-5%) but often surfaces
          off-market opportunities with less competition and more favorable
          pricing.
        </p>

        <h2 className={h2Class}>Typical deal sizes and multiples</h2>
        <p>
          The US search fund market spans a wide range of deal sizes, but
          the core market for ETA falls within identifiable ranges.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Self-funded deals:</strong> Typically $1M-$5M enterprise
            value, corresponding to businesses with $300K-$1.5M in SDE
            (Seller&apos;s Discretionary Earnings). Multiples range from
            2.5x to 4.5x SDE, depending on industry, growth, and
            customer concentration.
          </li>
          <li>
            <strong>Traditional search fund deals:</strong> Typically
            $5M-$30M enterprise value, corresponding to $1M-$5M in EBITDA.
            Multiples range from 4x to 7x EBITDA, with premium businesses
            (strong recurring revenue, low customer concentration, secular
            tailwinds) commanding 6-8x.
          </li>
          <li>
            <strong>Industry variations:</strong> SaaS and technology
            businesses command premium multiples (3-8x ARR or 8-15x
            EBITDA). Healthcare services and financial services also trade
            at premium multiples due to recurring revenue and regulatory
            barriers to entry. Manufacturing and distribution businesses
            typically trade at lower multiples (3-5x EBITDA).
          </li>
        </ul>

        <h2 className={h2Class}>Key US investors and networks</h2>
        <p>
          The US has the world&apos;s most developed ecosystem of dedicated
          search fund investors. Understanding the key players and their
          investment preferences is critical for traditional searchers
          seeking capital.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Search Fund Partners:</strong> One of the most active
            and experienced search fund investors, with a track record
            spanning decades. Known for hands-on mentorship and board
            participation.
          </li>
          <li>
            <strong>Pacific Lake Partners:</strong> A dedicated search fund
            investment firm that has backed dozens of searchers. Known for
            a structured approach to searcher selection and portfolio
            support.
          </li>
          <li>
            <strong>Relay Investments:</strong> Focused on partnering with
            searchers to acquire and grow companies, with a reputation for
            providing operational support post-acquisition.
          </li>
          <li>
            <strong>Individual investors:</strong> Many successful former
            searchers have become prolific individual investors in the next
            generation of search funds. This &ldquo;pay-it-forward&rdquo;
            culture is a distinctive feature of the US ETA ecosystem.
          </li>
          <li>
            <strong>Family offices:</strong> An increasing number of US
            family offices are allocating capital to search fund investing,
            attracted by the asset class&apos;s strong returns and
            alignment with their long-term investment horizon.
          </li>
        </ul>

        <h2 className={h2Class}>US vs. Europe comparison</h2>
        <p>
          While the search fund model has spread globally, significant
          differences remain between the US and European markets. US
          searchers benefit from the SBA lending program, a deeper investor
          base, greater standardization of deal terms, and a larger pool
          of potential targets. European searchers, conversely, often face
          less competition, benefit from stronger seller relationships
          (particularly in family business cultures like Italy and Spain),
          and can access attractive targets at lower multiples.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Financing:</strong> SBA loans give US searchers use
            that is difficult to replicate in Europe. European searchers
            rely more on commercial bank lending, seller financing, and
            government programs (BPI France, ICO Spain, KfW Germany).
          </li>
          <li>
            <strong>Deal flow:</strong> The US has more intermediaries,
            platforms, and data sources for deal identification. European
            markets require more relationship-based sourcing.
          </li>
          <li>
            <strong>Valuations:</strong> US multiples tend to be higher
            (4-7x EBITDA) compared to many European markets (3-6x EBITDA),
            reflecting the deeper buyer pool and more established M&amp;A
            infrastructure.
          </li>
          <li>
            <strong>Labor law:</strong> US employment law is generally
            more flexible than European counterparts, making post-acquisition
            organizational changes easier to implement.
          </li>
          <li>
            <strong>Competition:</strong> The US market is significantly
            more competitive, with private equity firms, independent
            sponsors, and other searchers all pursuing similar targets.
          </li>
        </ul>

        <h2 className={h2Class}>Regulatory considerations</h2>
        <p>
          US acquisitions involve several regulatory considerations that
          searchers must manage. Federal securities laws apply to the
          raising of search fund capital (typically structured as a
          Regulation D private placement). State-level regulations vary
          significantly &mdash; some states require business transfer
          notifications, bulk sales compliance, or specific licensing
          approvals. Industry-specific regulations (healthcare, financial
          services, insurance, government contracting) can add complexity
          and cost to the acquisition process. Environmental liabilities
          under CERCLA and state equivalents must be assessed, particularly
          for manufacturing businesses. Engaging experienced legal counsel
          early in the process is essential.
        </p>

        <h2 className={h2Class}>The maturation of the US market</h2>
        <p>
          After four decades, the US ETA market has reached a level of
          maturity that brings both advantages and challenges. The
          advantages are clear: proven model, extensive data, deep investor
          base, strong support infrastructure, and a large population of
          successful alumni who mentor new searchers. The challenges of
          maturity include increased competition for attractive deals,
          higher valuations driven by more buyers, greater sophistication
          among sellers and brokers (who now understand search fund
          economics), and the potential for the market to become
          &ldquo;picked over&rdquo; in popular industries and geographies.
        </p>
        <p>
          Successful US searchers are adapting by targeting underserved
          geographies (rural and secondary markets), developing deep
          industry expertise to identify opportunities others miss,
          pursuing larger or more complex deals that require specialized
          skills, and building proprietary deal flow through direct
          outreach and industry networking. The US search fund market
          continues to evolve, and the searchers who will thrive in the
          next decade are those who can differentiate themselves in an
          increasingly competitive environment while staying true to the
          fundamental principles that have made ETA successful for over
          40 years. When the time comes, having a clear plan for your <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">exit strategy</Link> is essential to realizing that value.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What are the historical returns of US search funds?</h3>

        <p>
          According to the Stanford 2024 Search Fund Study, US search funds have historically achieved aggregate returns of approximately 33% IRR and 5.5x return on invested capital over the four-decade history of the model. These returns place search funds among the highest-performing alternative asset classes. However, the distribution is highly skewed: the top quartile of search funds generates returns above 10x, while approximately 33% of completed acquisitions result in a partial or total loss of capital. The median return is more modest but still attractive at approximately 2.5&ndash;3x. For self-funded searchers who retain more equity, successful exits can generate even higher personal returns, though the personal financial risk during the search phase is also greater.
        </p>

        <h3 className={h3Class}>How does the SBA 7(a) loan program work for business acquisitions?</h3>

        <p>
          The SBA 7(a) program guarantees up to 85% of loans under $150,000 and 75% of loans between $150,000 and $5 million, dramatically reducing lender risk and enabling acquisition financing with as little as 10% equity injection from the buyer. Loan terms are 10 years for business acquisitions (25 years if commercial real estate is included), with variable interest rates typically set at Prime + 1.75% to 2.75%. The borrower must provide a personal guarantee, and the target business must meet SBA size standards (generally under $8.5 million in average annual revenue or under 500 employees). The SBA 7(a) program is unique globally&mdash;no comparable government-backed acquisition lending program exists in Europe or Asia&mdash;and is the primary reason self-funded search has grown explosively in the United States.
        </p>

        <h3 className={h3Class}>Should I pursue a traditional or self-funded search in the US?</h3>

        <p>
          The choice depends on your financial resources, risk tolerance, and acquisition target size. Traditional search funds (raising $400K&ndash;$600K from 10&ndash;20 investors) provide a salary during the search, access to experienced mentors, and established deal networks, but result in significant equity dilution (searchers typically retain 20&ndash;30% of equity). Self-funded searches offer greater equity retention (often 50&ndash;80%) and full control over criteria and timeline, but require personal financial resources to sustain 12&ndash;24 months without income. According to Stanford GSB data, traditional searches tend to target larger deals ($5M&ndash;$30M enterprise value) while self-funded searchers focus on smaller acquisitions ($1M&ndash;$5M) financed primarily through SBA loans. Both models can generate attractive returns, and the best choice depends on your personal circumstances and risk profile.
        </p>

        <h2 className={h2Class}>Sources</h2>

        <ul className={ulClass}>
          <li>Stanford Graduate School of Business, <em>Search Fund Study</em> (2024) &mdash; the definitive dataset on US search fund performance, deal structures, and operator outcomes</li>
          <li>US Small Business Administration, <em>7(a) Loan Program Guide</em> (2024) &mdash; official documentation on SBA lending terms, eligibility, and guarantee structure</li>
          <li>Pacific Lake Partners, <em>Search Fund Best Practices</em> (2024) &mdash; operational guidance from one of the most active dedicated search fund investment firms</li>
        </ul>
      </div>
    </article>
  );
}
