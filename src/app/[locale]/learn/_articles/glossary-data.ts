export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedSlug?: string; // links to a learn article
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Acquisition Financing",
    definition:
      "The combination of debt and equity used to fund a business acquisition. Typical search fund capital stacks include senior debt (50-60%), equity (30-40%), and seller financing (10-20%).",
    relatedSlug: "acquisition-financing",
  },
  {
    term: "Add-On Acquisition",
    definition:
      "A smaller, complementary acquisition made after the initial platform purchase to accelerate growth, expand geographic reach, or add capabilities. Also called bolt-on acquisition.",
    relatedSlug: "buy-and-build",
  },
  {
    term: "Adjusted EBITDA",
    definition:
      "EBITDA modified to reflect the true recurring earnings of a business by removing one-time expenses, owner perks, above-market compensation, and non-recurring revenue or costs.",
    relatedSlug: "business-valuation",
  },
  {
    term: "ARR (Annual Recurring Revenue)",
    definition:
      "The annualized value of recurring subscription or contract revenue. A key metric for SaaS and subscription business valuation, typically valued at 3-10x ARR depending on growth and retention.",
    relatedSlug: "saas-acquisition",
  },
  {
    term: "Asset Purchase",
    definition:
      "An acquisition structure where the buyer purchases specific assets and liabilities rather than the corporate entity itself. Offers tax advantages through asset step-up but may require consent for contract transfers.",
  },
  {
    term: "Book of Business",
    definition:
      "The portfolio of client accounts and associated revenue in a financial services or insurance business. Valued based on renewal rates, commission structures, and client demographics.",
    relatedSlug: "financial-services-acquisition",
  },
  {
    term: "Buy-and-Build",
    definition:
      "A growth strategy where a search fund CEO acquires additional companies after the initial platform acquisition to create scale, expand capabilities, and drive multiple arbitrage.",
    relatedSlug: "buy-and-build",
  },
  {
    term: "CAC (Customer Acquisition Cost)",
    definition:
      "The total cost of acquiring a new customer, including marketing, sales, and onboarding expenses. A critical metric for e-commerce and SaaS due diligence.",
    relatedSlug: "ecommerce-acquisition",
  },
  {
    term: "Cap Table",
    definition:
      "A capitalization table showing the ownership structure of a company, including shares outstanding, investor holdings, option pools, and dilution scenarios. Essential for understanding search fund economics.",
    relatedSlug: "cap-tables-equity",
  },
  {
    term: "Cash Conversion Cycle (CCC)",
    definition:
      "The number of days it takes to convert inventory and other resource investments into cash flows from sales. Calculated as DSO + DIO \u2013 DPO. Lower is better.",
    relatedSlug: "working-capital-management",
  },
  {
    term: "Client Concentration",
    definition:
      "The degree to which a business depends on a small number of customers for its revenue. A red flag when any single customer represents more than 15-20% of revenue.",
    relatedSlug: "due-diligence-checklist",
  },
  {
    term: "Contingent Consideration",
    definition:
      "A portion of the purchase price that depends on future performance metrics being achieved. Includes earn-outs, milestone payments, and performance-based adjustments.",
    relatedSlug: "earn-out-structures",
  },
  {
    term: "DCF (Discounted Cash Flow)",
    definition:
      "A valuation method that estimates the present value of future cash flows using a discount rate. Less commonly used for SME acquisitions due to projection uncertainty but standard in larger deals.",
    relatedSlug: "business-valuation",
  },
  {
    term: "Deal Flow",
    definition:
      "The pipeline of potential acquisition opportunities a searcher evaluates. Typical search funds review 100-200 opportunities to close 1 acquisition.",
    relatedSlug: "deal-sourcing-strategies",
  },
  {
    term: "DIO (Days Inventory Outstanding)",
    definition:
      "The average number of days a company holds inventory before selling it. Part of the cash conversion cycle calculation.",
    relatedSlug: "working-capital-management",
  },
  {
    term: "DPO (Days Payable Outstanding)",
    definition:
      "The average number of days a company takes to pay its suppliers. Extending DPO (within reason) improves working capital.",
    relatedSlug: "working-capital-management",
  },
  {
    term: "DSO (Days Sales Outstanding)",
    definition:
      "The average number of days to collect payment after a sale. Reducing DSO is one of the quickest working capital improvements a new CEO can make.",
    relatedSlug: "working-capital-management",
  },
  {
    term: "Due Diligence",
    definition:
      "The comprehensive investigation of a target business before acquisition, covering financial, legal, operational, commercial, and environmental aspects. Typically takes 60-90 days.",
    relatedSlug: "due-diligence-checklist",
  },
  {
    term: "Dutreil Pact",
    definition:
      "A French tax mechanism that can reduce inheritance and gift taxes by up to 75% on business transfers, provided the business is held for a minimum period. Important for structuring French acquisitions.",
    relatedSlug: "tax-optimization",
  },
  {
    term: "Earn-Out",
    definition:
      "A contractual provision where a portion of the purchase price is paid based on the business achieving specified financial targets post-closing. Used to bridge valuation gaps between buyer and seller.",
    relatedSlug: "earn-out-structures",
  },
  {
    term: "EBITDA",
    definition:
      "Earnings Before Interest, Taxes, Depreciation, and Amortization. The standard profitability metric for SME valuation. Search fund targets typically have $1-5M EBITDA.",
    relatedSlug: "business-valuation",
  },
  {
    term: "EIS (Enterprise Investment Scheme)",
    definition:
      "A UK tax relief program offering investors 30% income tax relief on investments up to \u00a31M in qualifying small companies. Relevant for UK search fund structures.",
    relatedSlug: "eta-uk",
  },
  {
    term: "Enterprise Value (EV)",
    definition:
      "The total value of a business, calculated as equity value plus net debt. Search fund acquisitions typically range from $2-30M enterprise value.",
  },
  {
    term: "ETA (Entrepreneurship Through Acquisition)",
    definition:
      "The process of acquiring an existing business to run as CEO, rather than starting one from scratch. Encompasses search funds, self-funded searches, and independent sponsors.",
    relatedSlug: "getting-started",
  },
  {
    term: "Exclusivity Period",
    definition:
      "A binding clause in an LOI that prevents the seller from negotiating with other buyers for a specified period (typically 60-90 days). Critical for protecting the buyer\u2019s due diligence investment.",
    relatedSlug: "letter-of-intent",
  },
  {
    term: "GAP (Garantie d\u2019Actif et de Passif)",
    definition:
      "The French equivalent of representations and warranties in an acquisition agreement. Protects the buyer against undisclosed liabilities discovered after closing.",
    relatedSlug: "eta-france",
  },
  {
    term: "GmbH",
    definition:
      "Gesellschaft mit beschr\u00e4nkter Haftung \u2014 the German limited liability company form, equivalent to an LLC. The most common structure for SME acquisitions in Germany, Austria, and Switzerland.",
    relatedSlug: "eta-germany",
  },
  {
    term: "Holdback",
    definition:
      "A portion of the purchase price (typically 5-15%) retained by the buyer in escrow for a set period to cover potential post-closing adjustments or indemnification claims.",
  },
  {
    term: "Independent Sponsor",
    definition:
      "An acquisition entrepreneur who identifies and negotiates deals before raising capital on a deal-by-deal basis. Similar to self-funded search but with different economics.",
  },
  {
    term: "Integration Fiscale",
    definition:
      "A French tax consolidation regime allowing a holding company to offset the interest on acquisition debt against the operating company\u2019s taxable income. A key structuring tool in French ETA.",
    relatedSlug: "eta-france",
  },
  {
    term: "IRR (Internal Rate of Return)",
    definition:
      "The annualized return on an investment accounting for the timing of cash flows. Search funds have historically delivered ~35% aggregate IRR according to Stanford studies.",
    relatedSlug: "search-fund-returns",
  },
  {
    term: "Key-Person Risk",
    definition:
      "The risk that a business\u2019s value is heavily dependent on one or a few individuals (often the founder). A critical due diligence item, especially in professional services.",
    relatedSlug: "professional-services-acquisition",
  },
  {
    term: "KfW",
    definition:
      "Kreditanstalt f\u00fcr Wiederaufbau \u2014 Germany\u2019s state-owned development bank. Offers favorable lending programs for SME acquisitions including ERP-Gr\u00fcnderkredit and ERP-Kapital f\u00fcr Gr\u00fcndung.",
    relatedSlug: "eta-germany",
  },
  {
    term: "LOI (Letter of Intent)",
    definition:
      "A preliminary agreement outlining the key terms of an acquisition before due diligence begins. Typically non-binding except for exclusivity and confidentiality clauses.",
    relatedSlug: "letter-of-intent",
  },
  {
    term: "LTV (Lifetime Value)",
    definition:
      "The total revenue or profit a business expects to generate from a customer over the entire relationship. LTV/CAC ratio above 3x is generally considered healthy.",
    relatedSlug: "saas-acquisition",
  },
  {
    term: "Management Buyout (MBO)",
    definition:
      "An acquisition where the existing management team purchases the business, often used as an exit strategy for search fund CEOs or as a succession solution for retiring owners.",
    relatedSlug: "exit-strategies",
  },
  {
    term: "Mittelstand",
    definition:
      "German term for the small and medium-sized enterprises that form the backbone of the German economy. Often family-owned, highly specialized, and export-oriented world-market leaders.",
    relatedSlug: "eta-germany",
  },
  {
    term: "Multiple Arbitrage",
    definition:
      "The strategy of buying a business at a lower EBITDA multiple and selling at a higher one, often achieved through scale (buy-and-build), professionalization, or market repositioning.",
    relatedSlug: "buy-and-build",
  },
  {
    term: "Nachfolge",
    definition:
      "German term for business succession. Germany faces a massive Nachfolge crisis with ~190,000 businesses needing successors, creating significant opportunities for ETA.",
    relatedSlug: "eta-germany",
  },
  {
    term: "NDA (Non-Disclosure Agreement)",
    definition:
      "A confidentiality agreement signed before receiving detailed information about a target business. A standard first step in the deal process.",
  },
  {
    term: "Net Revenue Retention (NRR)",
    definition:
      "The percentage of recurring revenue retained from existing customers including expansion, contraction, and churn. NRR above 110% indicates strong product-market fit in SaaS.",
    relatedSlug: "saas-acquisition",
  },
  {
    term: "PPM (Private Placement Memorandum)",
    definition:
      "A legal document provided to prospective investors in a search fund, describing the investment opportunity, risks, terms, and the searcher\u2019s background. Required for SEC compliance in the US.",
    relatedSlug: "writing-a-ppm",
  },
  {
    term: "QSBS (Qualified Small Business Stock)",
    definition:
      "A US tax provision (Section 1202) allowing exclusion of up to 100% of capital gains on qualifying stock held for 5+ years. Can eliminate federal taxes on search fund exits.",
    relatedSlug: "tax-optimization",
  },
  {
    term: "QoE (Quality of Earnings)",
    definition:
      "An independent financial analysis that validates a target\u2019s adjusted EBITDA, identifies risks, and evaluates the sustainability and quality of its earnings. Typically costs $20-60K.",
    relatedSlug: "quality-of-earnings",
  },
  {
    term: "Reps & Warranties",
    definition:
      "Statements of fact made by the seller in the purchase agreement about the business (financial condition, legal compliance, contracts, etc.). Breach of these can trigger indemnification claims.",
  },
  {
    term: "ROIC (Return on Invested Capital)",
    definition:
      "The total return earned on all capital invested in a search fund, including search costs and acquisition equity. The Stanford study reports 4.5x aggregate ROIC for search funds.",
    relatedSlug: "search-fund-returns",
  },
  {
    term: "Roll-Up",
    definition:
      "A consolidation strategy of acquiring multiple small companies in a fragmented industry to create a larger, more valuable combined entity. Common in home services, healthcare, and professional services.",
    relatedSlug: "home-services-acquisition",
  },
  {
    term: "SBA 7(a) Loan",
    definition:
      "A US Small Business Administration loan program providing up to $5M in acquisition financing with favorable terms (10-25 year terms, competitive rates). The most common debt source for US search fund acquisitions.",
    relatedSlug: "eta-us",
  },
  {
    term: "SDE (Seller\u2019s Discretionary Earnings)",
    definition:
      "A measure of a small business\u2019s earnings that adds back the owner\u2019s salary, benefits, and personal expenses to EBITDA. Used for smaller businesses where the owner is also the operator.",
  },
  {
    term: "Search Capital",
    definition:
      "The initial funding raised by a traditional search fund to cover the searcher\u2019s salary, travel, and operating expenses during the 18-24 month search period. Typically $400-500K.",
    relatedSlug: "getting-started",
  },
  {
    term: "Self-Funded Search",
    definition:
      "A search approach where the entrepreneur funds their own search period (from savings or part-time work) rather than raising investor capital. Offers more equity (70-100%) but less support.",
    relatedSlug: "self-funded-vs-traditional",
  },
  {
    term: "Seller Financing",
    definition:
      "A portion of the acquisition price financed by the seller through a promissory note, typically at 4-6% interest over 2-5 years. Common in search fund deals (10-30% of deal value).",
    relatedSlug: "seller-financing",
  },
  {
    term: "Seller Note",
    definition:
      "A promissory note issued to the seller as part of the acquisition consideration. Typically subordinated to senior debt and may include standby provisions during the initial post-closing period.",
    relatedSlug: "seller-financing",
  },
  {
    term: "SRL (Societ\u00e0 a Responsabilit\u00e0 Limitata)",
    definition:
      "The Italian limited liability company form, equivalent to a GmbH or SARL. The most common structure for SME acquisitions in Italy.",
    relatedSlug: "eta-italy",
  },
  {
    term: "Step-Up",
    definition:
      "The conversion of search fund investors\u2019 search capital into equity at a discounted rate (typically 1.5-2x their investment) when an acquisition is completed.",
    relatedSlug: "cap-tables-equity",
  },
  {
    term: "Stock Purchase",
    definition:
      "An acquisition structure where the buyer purchases the shares/ownership interests of the target entity. The company continues as-is with all contracts, liabilities, and tax attributes intact.",
  },
  {
    term: "Subordination Agreement",
    definition:
      "An agreement between a senior lender and a subordinated creditor (often the seller) that defines the priority of claims and restricts the subordinated creditor\u2019s ability to collect during the senior loan term.",
    relatedSlug: "seller-financing",
  },
  {
    term: "Traditional Search Fund",
    definition:
      "The original search fund model where a searcher raises a pool of capital from 10-20 investors to fund a 2-year search, then raises acquisition equity from the same investors. Searcher receives ~25% equity.",
    relatedSlug: "getting-started",
  },
  {
    term: "TUPE",
    definition:
      "Transfer of Undertakings (Protection of Employment) \u2014 UK regulations that automatically transfer employees and their terms to a new employer when a business is acquired.",
    relatedSlug: "eta-uk",
  },
  {
    term: "Utilization Rate",
    definition:
      "The percentage of available billable hours that are actually billed to clients in a professional services firm. Healthy rates are typically 70-85% depending on the subsector.",
    relatedSlug: "professional-services-acquisition",
  },
  {
    term: "Working Capital Adjustment",
    definition:
      "A purchase price adjustment mechanism that ensures the buyer receives a normalized level of working capital at closing. The target is typically set as the trailing 12-month average.",
  },
  {
    term: "Working Capital Peg",
    definition:
      "The agreed-upon target level of net working capital that the seller must deliver at closing. Deviations result in dollar-for-dollar purchase price adjustments.",
  },
];
