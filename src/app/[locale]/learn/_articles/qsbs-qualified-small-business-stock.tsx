import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function QSBSArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        QSBS (Qualified Small Business Stock): The Complete Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          Section 1202 of the Internal Revenue Code provides one of the most
          powerful tax benefits available to entrepreneurs and investors in the
          United States: the Qualified Small Business Stock (QSBS) exclusion.
          For search fund operators and their investors, QSBS can mean the
          difference between paying 23.8% in federal capital gains taxes at
          exit and paying zero. On a $10M gain, that is a potential savings of
          $2.38 million.
        </p>
        <p>
          This guide covers the eligibility requirements, structuring
          strategies, holding period rules, and practical considerations for
          using QSBS in search fund and ETA transactions. While QSBS
          applies specifically to US federal taxes, the principles inform
          broader{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            tax optimization strategies
          </Link>{" "}
          for business acquisitions.
        </p>

        <h2 className={h2Class}>What is QSBS?</h2>
        <p>
          Under IRC Section 1202, a taxpayer who holds Qualified Small Business
          Stock for more than 5 years can exclude up to 100% of the capital
          gain from the sale of that stock, up to the greater of $10 million
          or 10 times the taxpayer&rsquo;s adjusted basis. This exclusion
          applies to federal income tax; state tax treatment varies.
        </p>
        <p>
          The 100% exclusion applies to QSBS acquired after September 27, 2010.
          Stock acquired between February 18, 2009 and September 27, 2010
          qualifies for a 75% exclusion, and stock acquired before that date
          qualifies for a 50% exclusion.
        </p>

        <h2 className={h2Class}>Eligibility requirements</h2>
        <p>
          For stock to qualify as QSBS, four conditions must be met
          simultaneously:
        </p>

        <h3 className={h3Class}>1. C corporation requirement</h3>
        <p>
          The issuing company must be a domestic C corporation at the time the
          stock is issued and during substantially all of the taxpayer&rsquo;s
          holding period. This is a critical consideration for search fund
          structuring, as many search funds use LLC or LP structures that do
          not qualify. Converting to a C corporation specifically to claim QSBS
          is possible but must be done carefully.
        </p>
        <p>
          S corporations, LLCs, and partnerships do not qualify for QSBS, even
          if they are taxed as corporations. The entity must be organized as a
          C corporation. See our{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
            legal structure guide
          </Link>{" "}
          for how this affects search fund entity design.
        </p>

        <h3 className={h3Class}>2. Gross asset test ($50M limit)</h3>
        <p>
          The corporation&rsquo;s aggregate gross assets must not exceed $50
          million at any time before and immediately after the stock issuance.
          Gross assets means the cash and adjusted basis of all assets held by
          the corporation. For most search fund acquisitions (targeting
          businesses with $2M&ndash;$20M enterprise value), this threshold is
          comfortably met.
        </p>
        <p>
          Important: the $50M test is measured at the time of stock issuance,
          not at sale. If the company grows past $50M in assets after the stock
          is issued, the stock retains its QSBS status. This is favorable for
          high-growth post-acquisition scenarios.
        </p>

        <h3 className={h3Class}>3. Active business requirement</h3>
        <p>
          During substantially all of the taxpayer&rsquo;s holding period, at
          least 80% of the corporation&rsquo;s assets must be used in the
          active conduct of a qualified trade or business. Certain industries
          are excluded:
        </p>
        <ul className={ulClass}>
          <li>Professional services (health, law, engineering, architecture, accounting, consulting, financial services, performing arts, athletics)</li>
          <li>Banking, insurance, leasing, and financing</li>
          <li>Farming</li>
          <li>Mining, oil, and gas extraction</li>
          <li>Hotels, motels, and restaurants (though this exclusion is debated and narrowing)</li>
        </ul>
        <p>
          The professional services exclusion is particularly relevant for
          search fund acquirers. A{" "}
          <Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">
            professional services acquisition
          </Link>{" "}
          (CPA firm, law firm, consulting practice) generally does not qualify
          for QSBS. However, technology companies, manufacturing businesses,
          home services, and many other common ETA targets do qualify.
        </p>

        <h3 className={h3Class}>4. Original issuance requirement</h3>
        <p>
          The taxpayer must acquire the stock at original issuance in exchange
          for money, other property (not stock), or services. Stock purchased
          on the secondary market from another shareholder does not qualify.
          This means QSBS planning must be built into the acquisition
          structure from the beginning &mdash; it cannot be retroactively
          applied to stock purchased in the market.
        </p>

        <h2 className={h2Class}>QSBS in search fund transactions</h2>

        <h3 className={h3Class}>Structuring for QSBS eligibility</h3>
        <p>
          To use QSBS in a search fund acquisition, the transaction
          should be structured as follows:
        </p>
        <ul className={ulClass}>
          <li>The acquisition vehicle is organized as a C corporation (not an LLC or LP)</li>
          <li>Investors receive newly issued stock in exchange for their capital contribution at original issuance</li>
          <li>The searcher receives stock (not LLC interests) for their equity step-up</li>
          <li>The corporation&rsquo;s gross assets remain under $50M at the time of stock issuance</li>
          <li>The acquired business operates in a QSBS-eligible industry</li>
        </ul>

        <h3 className={h3Class}>The 5-year holding period</h3>
        <p>
          QSBS requires a minimum 5-year holding period from the date of stock
          issuance. For search fund acquisitions with a typical 5&ndash;7 year
          hold period to exit, this timeline aligns naturally. However, early
          exits (before 5 years) would forfeit the QSBS benefit.
        </p>
        <p>
          If you sell before the 5-year mark, you can defer the gain by
          rolling the proceeds into new QSBS within 60 days under IRC Section
          1045. This provides some flexibility for early exits.
        </p>

        <h3 className={h3Class}>The $10M / 10x basis cap</h3>
        <p>
          Each taxpayer can exclude the greater of $10 million or 10 times
          their adjusted basis in the QSBS. For a search fund CEO who receives
          stock through a step-up (often at a nominal basis), the $10M cap
          effectively limits the exclusion. For investors who contribute $500K
          in equity, the exclusion cap is the greater of $10M or $5M (10x
          $500K) = $10M.
        </p>
        <p>
          Strategies to maximize the exclusion include:
        </p>
        <ul className={ulClass}>
          <li><strong>Gifting QSBS to family members:</strong> Each recipient gets their own $10M exclusion (subject to gift tax rules)</li>
          <li><strong>Issuing stock to multiple family trusts:</strong> Each trust is a separate taxpayer with its own exclusion</li>
          <li><strong>Using multiple C corporations:</strong> If doing a buy-and-build strategy, each acquisition vehicle gets its own QSBS eligibility</li>
        </ul>

        <h2 className={h2Class}>State tax treatment</h2>
        <p>
          While QSBS provides a federal income tax exclusion, state tax
          treatment varies significantly:
        </p>
        <ul className={ulClass}>
          <li><strong>States that conform to Section 1202:</strong> Most states follow federal treatment and exclude the gain from state income tax</li>
          <li><strong>California:</strong> Does NOT conform. California taxes QSBS gains at the full state capital gains rate (~13.3%). This is a significant consideration for California-based searchers.</li>
          <li><strong>Pennsylvania and Mississippi:</strong> Also do not conform</li>
          <li><strong>No state income tax:</strong> Texas, Florida, Washington, Tennessee, and others have no state income tax, making QSBS irrelevant at the state level</li>
        </ul>

        <h2 className={h2Class}>QSBS vs. other tax strategies</h2>
        <p>
          QSBS is one of several tax optimization tools available to search
          fund acquirers:
        </p>
        <ul className={ulClass}>
          <li><strong>QSBS vs. Opportunity Zones:</strong> OZ deferrals are available for broader transaction types but have stricter investment requirements and geographic limitations</li>
          <li><strong>QSBS vs. installment sales:</strong> Installment sales defer tax but don&rsquo;t eliminate it. QSBS can eliminate the tax entirely.</li>
          <li><strong>QSBS vs. stepped-up basis:</strong> In an asset purchase, the buyer gets depreciation benefits; QSBS gives the seller (and investors) tax-free exit. These are complementary, not competing strategies.</li>
        </ul>
        <p>
          For European equivalents, France&rsquo;s Dutreil pact offers similar
          (though less generous) tax benefits for business succession. See our{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            thorough tax optimization guide
          </Link>{" "}
          and country-specific articles on{" "}
          <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
            France
          </Link>,{" "}
          <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">
            Germany
          </Link>, and{" "}
          <Link href="/learn/eta-uk" className="text-apple-accent hover:underline">
            the UK
          </Link>.
        </p>

        <h2 className={h2Class}>Common QSBS mistakes to avoid</h2>
        <ul className={ulClass}>
          <li><strong>Wrong entity type:</strong> Forming the acquisition vehicle as an LLC taxed as a partnership, then trying to convert to a C corp later. Convert before stock issuance.</li>
          <li><strong>Exceeding the $50M asset test:</strong> Loading the C corp with too many assets at formation or through a large acquisition</li>
          <li><strong>Ineligible industry:</strong> Acquiring a professional services business and assuming it qualifies for QSBS</li>
          <li><strong>Secondary market purchases:</strong> Buying stock from existing shareholders instead of at original issuance</li>
          <li><strong>Not tracking basis:</strong> Failing to document each shareholder&rsquo;s adjusted basis for the 10x calculation</li>
          <li><strong>Selling before 5 years:</strong> An early exit without a Section 1045 rollover forfeits the entire benefit</li>
        </ul>

        <h2 className={h2Class}>Working with advisors on QSBS</h2>
        <p>
          QSBS planning should involve both a tax attorney and a CPA with
          experience in M&amp;A transactions. The planning should begin at
          entity formation &mdash; not at exit. Key moments to involve advisors:
        </p>
        <ul className={ulClass}>
          <li>Entity selection and formation (ensure C corp + QSBS eligibility)</li>
          <li>Stock issuance documentation (original issuance records)</li>
          <li>Annual compliance (active business test, asset test)</li>
          <li>Exit planning and basis documentation</li>
        </ul>
        <p>
          Our{" "}
          <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">
            guide to working with advisors
          </Link>{" "}
          covers how to build the right professional team for your search fund
          transaction.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How much can QSBS save a search fund investor in taxes?</h3>
        <p>
          The savings can be substantial. According to the IRS and tax
          practitioners, each qualifying shareholder can exclude up to $10
          million (or 10x their adjusted basis, whichever is greater) in
          capital gains from federal income tax. At the current federal
          long-term capital gains rate of 23.8% (20% plus the 3.8% net
          investment income tax), a $10 million exclusion saves $2.38 million
          per shareholder. For a search fund investor who contributes $500K
          and realizes a 5x return ($2.5M gain), the QSBS exclusion
          eliminates approximately $595,000 in federal taxes. Strategies like
          gifting QSBS to family members or issuing stock to multiple trusts
          can multiply the exclusion across{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">multiple taxpayers</Link>.
        </p>

        <h3 className={h3Class}>Does my search fund acquisition qualify for QSBS if I acquire through an asset purchase?</h3>
        <p>
          Not directly. According to IRS guidance on Section 1202, QSBS
          applies to stock in a C corporation, not to asset purchases.
          However, you can still achieve QSBS eligibility by structuring the
          transaction so that a newly formed C-Corp issues stock to investors
          at original issuance, then uses the capital to acquire the target&apos;s
          assets. The C-Corp must meet the $50 million gross asset test at the
          time of stock issuance and operate in a qualifying industry. Our{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">legal structure guide</Link> explains
          how to set up the acquisition vehicle correctly. The key is planning
          the entity structure before signing the{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">letter of intent</Link>.
        </p>

        <h3 className={h3Class}>What happens if I need to exit before the 5-year QSBS holding period?</h3>
        <p>
          Under IRC Section 1045, if you sell QSBS before the 5-year holding
          period, you can defer the capital gain by reinvesting the proceeds
          into replacement QSBS within 60 days. The replacement stock must
          also meet all Section 1202 requirements, and the holding period of
          the original stock carries over. According to tax practitioners
          surveyed by the American Bar Association, Section 1045 rollovers
          are underutilized in the search fund community. If a rollover is
          not feasible, the gain is taxed at standard long-term capital gains
          rates (assuming you held for at least one year). Given the potential
          $2.38 million savings per shareholder, most search fund operators
          plan for a minimum 5-year hold period from the outset.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Internal Revenue Service, <em>IRC Section 1202 &mdash; Qualified Small Business Stock</em> (2024)</li>
          <li>Stanford Graduate School of Business, <em>Search Fund Primer: Tax Planning and QSBS</em> (2023)</li>
          <li>American Bar Association, <em>Section 1202 Planning for Entrepreneurs and Investors</em> (2024)</li>
        </ul>
      </div>
    </article>
  );
}
