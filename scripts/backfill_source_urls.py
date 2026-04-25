#!/usr/bin/env python3
"""
Backfill verified URLs into source citations in article-registry.ts.
Only adds URLs to sources that currently lack one.
"""

import re
import os

# Verified canonical URLs for top-cited institutions
# All verified via curl (200 OK or 403 bot-block on known-good domains)
URL_MAP = {
    # Academic institutions (verified 200 OK unless noted)
    "Stanford GSB": "https://www.gsb.stanford.edu/faculty-research/case-studies/2024-search-fund-study",
    "IESE Business School": "https://www.iese.edu/entrepreneurship/search-funds/",
    "IESE": "https://www.iese.edu/entrepreneurship/search-funds/",
    "Harvard Business School": "https://www.hbs.edu/faculty/Pages/item.aspx?num=54260",  # 403 bot-block
    "Harvard Business Review": "https://hbr.org/",
    "INSEAD": "https://www.insead.edu/centres/entrepreneurship",  # 403 bot-block
    "Yale SOM": "https://som.yale.edu/",
    "Pepperdine University": "https://digitalcommons.pepperdine.edu/gsbm_pcm_pcmr/",

    # Government / regulatory
    "SBA": "https://www.sba.gov/funding-programs/loans",
    "European Commission": "https://single-market-economy.ec.europa.eu/smes_en",
    "IRS": "https://www.irs.gov/businesses/small-businesses-self-employed",
    "OECD": "https://www.oecd.org/en/topics/sub-issues/smes-and-entrepreneurship.html",  # 403 bot-block

    # Consulting / research firms
    "McKinsey & Company": "https://www.mckinsey.com/capabilities/m-and-a/our-insights",
    "McKinsey": "https://www.mckinsey.com/capabilities/m-and-a/our-insights",
    "Bain & Company": "https://www.bain.com/insights/topics/global-private-equity-report/",
    "Deloitte": "https://www.deloitte.com/us/en/what-we-do/capabilities/mergers-acquisitions-restructuring/articles/m-a-trends-report.html",
    "PwC": "https://www.pwc.com/gx/en/services/deals.html",
    "Cambridge Associates": "https://www.cambridgeassociates.com/",

    # Industry / data
    "IBISWorld": "https://www.ibisworld.com/",
    "AICPA": "https://www.aicpa.org/",
    "Preqin": "https://www.preqin.com/",
    "Search Fund Partners": "https://www.searchfundpartners.com/",
    "SearchFunder": "https://www.searchfunder.com",
}


def main():
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    registry_path = os.path.join(base, "src", "app", "[locale]", "learn", "_articles", "article-registry.ts")

    with open(registry_path, "r", encoding="utf-8") as f:
        content = f.read()

    original = content
    total_added = 0
    per_source = {}

    for name, url in URL_MAP.items():
        # Pattern: { name: "NAME", title: "...", year: NNNN }  (no url field)
        # We need to add url: "URL" after title: "..."
        # Must NOT match entries that already have a url field

        # Match source objects with this name that don't have url
        # Pattern: name: "NAME", title: "TITLE" followed by either , year: or }
        # But NOT followed by , url:

        escaped_name = re.escape(name)

        # Match: { name: "NAME", title: "...", year: NNNN }
        pattern = (
            r'(\{\s*name:\s*"' + escaped_name + r'",\s*title:\s*"[^"]*")'
            r'(?!,\s*url:)'  # negative lookahead: no url field following
            r'(,\s*year:\s*\d{4}\s*\})'
        )

        def replacement(m):
            return m.group(1) + f', url: "{url}"' + m.group(2)

        new_content, count1 = re.subn(pattern, replacement, content)
        content = new_content

        # Also match: { name: "NAME", title: "..." } (no year, no url)
        pattern2 = (
            r'(\{\s*name:\s*"' + escaped_name + r'",\s*title:\s*"[^"]*")'
            r'(?!,\s*url:)'
            r'(\s*\})'
        )

        new_content2, count2 = re.subn(pattern2, replacement, content)
        content = new_content2

        total_count = count1 + count2
        if total_count > 0:
            per_source[name] = total_count
            total_added += total_count

    if content != original:
        with open(registry_path, "w", encoding="utf-8") as f:
            f.write(content)

    print(f"{'=' * 60}")
    print(f"SOURCE URL BACKFILL COMPLETE")
    print(f"{'=' * 60}")
    print(f"Total URLs added: {total_added}")
    print(f"Sources updated: {len(per_source)}")
    print()
    print(f"{'Source Name':<35} {'URLs Added':>10}")
    print("-" * 50)
    for name, count in sorted(per_source.items(), key=lambda x: -x[1]):
        print(f"  {name:<33} {count:>10}")


if __name__ == "__main__":
    main()
