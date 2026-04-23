import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function HowLongSearchFundArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        How Long Does a Search Fund Take? Timeline &amp; Milestones
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          From the decision to pursue ETA to closing your first
          acquisition, the process takes 2&ndash;4 years. This guide
          breaks down the timeline for each phase &mdash; fundraise,
          search, acquisition, and operations &mdash; with benchmarks
          from Stanford GSB data covering{" "}
          <Link href="/learn/search-fund-statistics" className="text-apple-accent hover:underline">
            681 search funds
          </Link>.
        </p>

        <h2 className={h2Class}>Total timeline overview</h2>
        <ul className={ulClass}>
          <li><strong>Pre-search preparation:</strong> 3&ndash;6 months</li>
          <li><strong>Fundraise:</strong> 2&ndash;4 months (traditional) or 0 months (self-funded)</li>
          <li><strong>Search phase:</strong> 12&ndash;24 months (median 18 months)</li>
          <li><strong>Due diligence &amp; close:</strong> 2&ndash;4 months</li>
          <li><strong>Total to acquisition:</strong> 18&ndash;36 months from start</li>
          <li><strong>Operating period:</strong> 3&ndash;7 years (median 5.5 years)</li>
          <li><strong>Full cycle (raise to exit):</strong> 5&ndash;10 years</li>
        </ul>

        <h2 className={h2Class}>Fundraise timeline</h2>

        <h3 className={h3Class}>Traditional search fund</h3>
        <ul className={ulClass}>
          <li><strong>PPM preparation:</strong> 2&ndash;4 weeks to draft your{" "}
            <Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">
              Private Placement Memorandum
            </Link></li>
          <li><strong>Investor meetings:</strong> 6&ndash;12 weeks of pitching to 30&ndash;60 investors</li>
          <li><strong>Legal closing:</strong> 2&ndash;3 weeks for entity formation and subscription agreements</li>
          <li><strong>Total:</strong> 2&ndash;4 months. Best-in-class searchers close in 8 weeks. Others take 4+ months</li>
        </ul>

        <h3 className={h3Class}>Self-funded search</h3>
        <ul className={ulClass}>
          <li>No fundraise required &mdash; you fund the search personally</li>
          <li>Capital is raised at the deal level, often through SBA loans and{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing
            </Link></li>
          <li>Many self-funded searchers begin searching while still employed, extending the timeline but reducing financial risk</li>
        </ul>

        <h2 className={h2Class}>Search phase timeline</h2>
        <ul className={ulClass}>
          <li><strong>Months 1&ndash;3:</strong> Set up infrastructure (CRM, broker relationships, sourcing channels). Review first wave of opportunities. Calibrate screening criteria</li>
          <li><strong>Months 3&ndash;9:</strong> Full-speed sourcing. Review 50&ndash;100+ teasers/month. Visit 5&ndash;10 businesses. Begin submitting{" "}
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              LOIs
            </Link></li>
          <li><strong>Months 9&ndash;18:</strong> Enter exclusivity on best targets. Conduct{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link>. Some processes fall through &mdash; return to sourcing</li>
          <li><strong>Months 18&ndash;24:</strong> If still searching, broaden criteria or extend fundraise. 33% of traditional searchers exhaust their search capital without closing</li>
        </ul>

        <h3 className={h3Class}>What drives timeline variance?</h3>
        <ul className={ulClass}>
          <li><strong>Thesis specificity:</strong> Very narrow criteria (one industry, one geography) extends the search. Broader criteria shortens it</li>
          <li><strong>Market conditions:</strong> Seller&rsquo;s markets are faster. Buyer&rsquo;s markets may see fewer quality listings</li>
          <li><strong>Geographic focus:</strong> Larger markets (US, UK) have more deal flow. Smaller markets ({" "}
            <Link href="/learn/eta-nordics" className="text-apple-accent hover:underline">
              Nordics
            </Link>,{" "}
            <Link href="/learn/eta-benelux" className="text-apple-accent hover:underline">
              Benelux
            </Link>) require more patience</li>
          <li><strong>Search intensity:</strong> Full-time, focused searchers close faster than part-time searchers</li>
          <li><strong>Broker relationships:</strong>{" "}
            <Link href="/learn/working-with-brokers" className="text-apple-accent hover:underline">
              Strong broker relationships
            </Link>{" "}
            accelerate deal flow significantly</li>
        </ul>

        <h2 className={h2Class}>DD &amp; close timeline</h2>
        <ul className={ulClass}>
          <li><strong>LOI to exclusivity:</strong> 1&ndash;2 weeks of negotiation</li>
          <li><strong>Exclusivity period:</strong> 60&ndash;90 days is standard (some sellers grant only 45 days)</li>
          <li><strong>DD activities (in parallel):</strong>{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              QoE report
            </Link>{" "}
            (4&ndash;6 weeks),{" "}
            <Link href="/learn/legal-due-diligence" className="text-apple-accent hover:underline">
              legal DD
            </Link>{" "}
            (3&ndash;4 weeks),{" "}
            <Link href="/learn/operational-due-diligence" className="text-apple-accent hover:underline">
              operational DD
            </Link>{" "}
            (2&ndash;3 weeks), financing commitment (4&ndash;6 weeks)</li>
          <li><strong>Definitive agreement:</strong> 2&ndash;4 weeks of{" "}
            <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">
              negotiation
            </Link>{" "}
            on the purchase agreement</li>
          <li><strong>Close:</strong> 1&ndash;2 weeks for final document execution and fund transfer</li>
        </ul>

        <h2 className={h2Class}>Operating period timeline</h2>
        <ul className={ulClass}>
          <li><strong>First 100 days:</strong> Transition period. See our{" "}
            <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
              first 100 days guide
            </Link></li>
          <li><strong>Year 1:</strong> Stabilize operations, build team trust, capture{" "}
            <Link href="/learn/quick-wins-post-acquisition" className="text-apple-accent hover:underline">
              quick wins
            </Link></li>
          <li><strong>Years 2&ndash;3:</strong> Growth initiatives ({" "}
            <Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">
              revenue growth
            </Link>,{" "}
            <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">
              pricing optimization
            </Link>,{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              add-on acquisitions
            </Link>)</li>
          <li><strong>Years 4&ndash;5:</strong> Optimize for exit. Begin{" "}
            <Link href="/learn/exit-readiness-plan" className="text-apple-accent hover:underline">
              exit preparation
            </Link>{" "}
            18 months before target exit date</li>
          <li><strong>Exit:</strong> Typically year 5&ndash;7. See{" "}
            <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
              exit strategies
            </Link></li>
        </ul>

        <h2 className={h2Class}>Tips for staying on timeline</h2>
        <ul className={ulClass}>
          <li><strong>Start sourcing immediately:</strong> Don&rsquo;t wait for the perfect thesis. Refine as you see more deals</li>
          <li><strong>Pre-qualify financing:</strong> Get SBA pre-qualification or lender relationships in place before you need them</li>
          <li><strong>Build DD team early:</strong> Have your lawyer, accountant, and QoE firm selected before you go under LOI</li>
          <li><strong>Set monthly milestones:</strong> Track deals reviewed, meetings held, LOIs submitted. Treat the search like a job</li>
        </ul>

        <p>
          For the complete lifecycle framework, see{" "}
          <Link href="/learn/search-fund-lifecycle" className="text-apple-accent hover:underline">
            the search fund lifecycle guide
          </Link>{" "}
          and{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            return data by vintage
          </Link>.
        </p>
      </div>
    </article>
  );
}
