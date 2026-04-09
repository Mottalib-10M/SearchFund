import { h1Class, h2Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAReadingListArticle() {
  return (
    <article>
      <h1 className={h1Class}>Essential ETA Reading List</h1>
      <p className="text-sm text-apple-gray-500 mt-3">6 min read</p>

      <div className={bodyClass}>
        <p>
          Whether you are just discovering ETA or preparing to launch your
          search, these resources are essential reading for every aspiring search
          fund entrepreneur.
        </p>

        <h2 className={h2Class}>Foundational studies</h2>
        <ul className={ulClass}>
          <li><strong>Stanford Search Fund Primer</strong> — The definitive introduction to the search fund model, published by Stanford&apos;s Center for Entrepreneurial Studies. Covers the benefits, challenges, structure, and execution of a search fund.</li>
          <li><strong>2024 Stanford Search Fund Study</strong> — The most comprehensive dataset on search fund performance, analyzing 681 funds from 1984-2023. Key findings: 35.1% IRR, 4.5x ROIC, 63% acquisition rate.</li>
          <li><strong>IESE International Search Fund Study</strong> — Extends the Stanford data to cover international (primarily European) search funds. Essential for understanding the European ETA landscape.</li>
          <li><strong>INSEAD ETA & Search Funds Hub</strong> — INSEAD&apos;s dedicated research and resource platform for ETA, connecting entrepreneurs, investors, and board members globally.</li>
        </ul>

        <h2 className={h2Class}>Essential books</h2>
        <ul className={ulClass}>
          <li><strong>&ldquo;HBR Guide to Buying a Small Business&rdquo;</strong> by Richard S. Ruback & Royce Yudkoff — Two Harvard professors lay out a practical framework for acquiring a small business. The most widely recommended book for aspiring searchers.</li>
          <li><strong>&ldquo;Buy Then Build&rdquo;</strong> by Walker Deibel — A comprehensive guide to entrepreneurship through acquisition, covering the full lifecycle from search to operations.</li>
          <li><strong>&ldquo;The Search Fund Handbook&rdquo;</strong> — Practical guidance for every phase of the search fund process, from fundraising to exit.</li>
          <li><strong>&ldquo;A Practical Guide to Buying a Business&rdquo;</strong> by Robert Chalfin — Focused on the mechanics of deal structuring, negotiation, and closing.</li>
        </ul>

        <h2 className={h2Class}>Academic research</h2>
        <ul className={ulClass}>
          <li><strong>&ldquo;Entrepreneurship through acquisition: A scoping review&rdquo;</strong> — Published in Management Review Quarterly (Springer), this paper provides a systematic review of academic literature on ETA.</li>
          <li><strong>Yale School of Management</strong> — &ldquo;Evolution of a Search Fund CEO and Company&rdquo; — examines how search fund CEOs develop as leaders over time.</li>
          <li><strong>University of Chicago Booth</strong> — &ldquo;The Evolution of Entrepreneurship Through Acquisition&rdquo; — traces the history and development of the ETA asset class.</li>
        </ul>

        <h2 className={h2Class}>Podcasts & communities</h2>
        <ul className={ulClass}>
          <li><strong>INSEAD ETA and Search Funds Podcast</strong> — Interviews with searchers, operators, and investors from the INSEAD network.</li>
          <li><strong>Think Like an Owner</strong> — Popular podcast featuring interviews with search fund entrepreneurs and small business operators.</li>
          <li><strong>Searchfunder.com</strong> — The largest online community for search fund entrepreneurs, with forums, resources, and deal discussions.</li>
          <li><strong>SearchFundMarket</strong> — Connect with searchers, investors, and sellers across Europe.</li>
        </ul>

        <h2 className={h2Class}>Key conferences</h2>
        <ul className={ulClass}>
          <li><strong>INSEAD ETA Conference</strong> (Fontainebleau) — A leading annual event connecting the global INSEAD ETA community, featuring panels with searchers, investors, and operators from across Europe, Africa, and Asia.</li>
          <li><strong>IESE Search Fund Conference</strong> (Barcelona) — The premier European ETA conference, held annually.</li>
          <li><strong>Stanford Search Fund CEO Conference</strong> (Stanford) — The original and most prestigious search fund gathering.</li>
        </ul>
      </div>
    </article>
  );
}
