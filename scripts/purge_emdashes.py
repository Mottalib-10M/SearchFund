#!/usr/bin/env python3
"""
Em-dash purge script for SearchFundMarket articles.
Replaces em-dashes (—, &mdash;) and en-dashes (&ndash;) with appropriate alternatives.

Rules:
  - &ndash; between digits/amounts → hyphen (e.g., 3&ndash;4x → 3-4x)
  - &ndash; with spaces → " - "
  - Paired &mdash; (parenthetical) → commas
  - Single &mdash;/— as clause separator → comma
  - &mdash;/— before list intro (including, such as, etc.) → colon

Exclusion zones (preserved):
  - Source citation lines: "Institution &mdash; <em>Title</em>"
  - Quote attribution: "— Name, Role"
"""

import re
import os
import sys
import glob
import json

# Stats
total_files_modified = 0
total_removed = 0
total_preserved = 0
files_report = []


def is_source_citation(line):
    """Check if line is a source citation: 'Name &mdash; <em>Title</em>'"""
    # Pattern: word(s) &mdash; <em>...</em>
    if re.search(r'&mdash;\s*<em>', line):
        return True
    # Pattern: word(s) — <em>...</em>
    if re.search(r'—\s*<em>', line):
        return True
    return False


def is_quote_attribution(line):
    """Check if line contains a real quote attribution (after closing quotation mark)."""
    # Only match: closing-quote followed by em-dash and a short name (1-4 words)
    # e.g., '..." — Warren Buffett' or '...&rdquo; &mdash; Jim Sharpe'
    if re.search(r'["\u201D]\s*—\s+[A-Z][a-z]+(\s+[A-Z][a-z]+){0,3}\s*$', line.strip()):
        return True
    if re.search(r'&rdquo;\s*&mdash;\s*[A-Z][a-z]+(\s+[A-Z][a-z]+){0,3}\s*$', line.strip()):
        return True
    return False


def count_dashes(line):
    """Count em-dash and en-dash occurrences in a line."""
    return line.count('\u2014') + line.count('&mdash;') + line.count('&ndash;') + line.count('\u2013')


def replace_dashes_in_line(line):
    """Replace em-dashes and en-dashes contextually in a single line."""
    original = line
    original_count = count_dashes(line)

    if original_count == 0:
        return line, 0, 0

    # EXCLUSION: Source citations
    if is_source_citation(line):
        return line, 0, original_count

    # EXCLUSION: Quote attributions
    if is_quote_attribution(line):
        return line, 0, original_count

    # === EN-DASHES ===

    # &ndash; between digits (number ranges): 3&ndash;4 → 3-4
    line = re.sub(r'(\d)&ndash;(\d)', r'\1-\2', line)
    # &ndash; between dollar amounts: $500K&ndash;$3M → $500K-$3M
    line = re.sub(r'(\$[\d,.]+[KMBkmb]?)&ndash;(\$[\d,.]+[KMBkmb]?)', r'\1-\2', line)
    # &ndash; between percentages: 80&ndash;90% → 80-90%
    line = re.sub(r'(\d+)&ndash;(\d+%)', r'\1-\2', line)
    # &ndash; with spaces (clause separator)
    line = re.sub(r'\s&ndash;\s', ' - ', line)
    # Any remaining &ndash;
    line = re.sub(r'&ndash;', '-', line)

    # Literal en-dash character (–)
    line = re.sub(r'(\d)\u2013(\d)', r'\1-\2', line)
    line = re.sub(r'\s\u2013\s', ' - ', line)
    line = re.sub(r'\u2013', '-', line)

    # === EM-DASHES ===

    # Step 1: Paired &mdash; (parenthetical) → commas
    # Pattern: text &mdash; inner &mdash; text
    line = re.sub(r'\s&mdash;\s(.+?)\s&mdash;\s', r', \1, ', line)

    # Step 2: &mdash; before list-intro words → colon
    line = re.sub(
        r'(\w)\s&mdash;\s(including |such as |namely |specifically |for example |e\.g\.,? |i\.e\.,? )',
        r'\1: \2', line
    )

    # Step 3: Label/tier/class separator: "Tier 1 &mdash;" or "</strong> &mdash;" → colon
    line = re.sub(r'(Tier \d+)\s&mdash;\s', r'\1: ', line)
    line = re.sub(r'(Class [IVX]+)\s&mdash;\s', r'\1: ', line)
    line = re.sub(r'</strong>\s*&mdash;\s', r'</strong>: ', line)

    # Step 4: Line-initial &mdash; (description continuation) → remove
    line = re.sub(r'^(\s*)&mdash;\s+', r'\1', line)

    # Step 5: Remaining &mdash; with spaces → comma
    line = re.sub(r'\s&mdash;\s', ', ', line)

    # Step 6: &mdash; without proper spacing
    line = re.sub(r'(\w)&mdash;\s', r'\1, ', line)
    line = re.sub(r'\s&mdash;(\w)', r', \1', line)
    line = re.sub(r'&mdash;', ', ', line)

    # === LITERAL EM-DASH CHARACTER (—) ===

    # Step 1: Paired — (parenthetical) → commas
    line = re.sub(r'\s\u2014\s(.+?)\s\u2014\s', r', \1, ', line)

    # Step 2: — before list-intro words → colon
    line = re.sub(
        r'(\w)\s\u2014\s(including |such as |namely |specifically |for example |e\.g\.,? |i\.e\.,? )',
        r'\1: \2', line
    )

    # Step 3: Remaining — with spaces → comma
    line = re.sub(r'\s\u2014\s', ', ', line)

    # Step 4: — without proper spacing
    line = re.sub(r'(\w)\u2014(\w)', r'\1, \2', line)
    line = re.sub(r'(\w)\u2014\s', r'\1, ', line)
    line = re.sub(r'\s\u2014(\w)', r', \1', line)
    line = re.sub(r'\u2014', ', ', line)

    new_count = count_dashes(line)
    removed = original_count - new_count
    return line, removed, new_count


def process_file(filepath):
    """Process a single file, replacing em-dashes."""
    global total_files_modified, total_removed, total_preserved

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if not any(c in content for c in ['\u2014', '\u2013']) and '&mdash;' not in content and '&ndash;' not in content:
        return

    lines = content.split('\n')
    new_lines = []
    file_removed = 0
    file_preserved = 0

    for line in lines:
        new_line, removed, preserved = replace_dashes_in_line(line)
        new_lines.append(new_line)
        file_removed += removed
        file_preserved += preserved

    new_content = '\n'.join(new_lines)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        total_files_modified += 1
        total_removed += file_removed
        total_preserved += file_preserved
        rel = os.path.relpath(filepath)
        files_report.append(f"  {rel}: {file_removed} removed, {file_preserved} preserved")
    elif file_preserved > 0:
        total_preserved += file_preserved
        rel = os.path.relpath(filepath)
        files_report.append(f"  {rel}: 0 removed, {file_preserved} preserved (citations only)")


def process_json_file(filepath):
    """Process a JSON message file."""
    global total_files_modified, total_removed

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    # In JSON, replace literal em-dashes with " - "
    content = content.replace('\u2014', ' - ')
    content = content.replace('\u2013', '-')

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        count = original.count('\u2014') + original.count('\u2013')
        total_files_modified += 1
        total_removed += count
        rel = os.path.relpath(filepath)
        files_report.append(f"  {rel}: {count} removed")


def main():
    global total_files_modified, total_removed, total_preserved

    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(base)

    # Note: [locale] must be escaped for Python glob (it treats [] as character class)
    locale_dir = 'src/app/[locale]'

    # 1. EN articles
    articles_dir = os.path.join(locale_dir, 'learn', '_articles')
    en_articles = sorted([
        os.path.join(articles_dir, f)
        for f in os.listdir(articles_dir)
        if f.endswith('.tsx') and not os.path.isdir(os.path.join(articles_dir, f))
    ])
    print(f"Processing {len(en_articles)} EN articles...")
    for f in en_articles:
        process_file(f)

    # 2. FR articles
    fr_dir = os.path.join(articles_dir, 'fr')
    if os.path.isdir(fr_dir):
        fr_articles = sorted([
            os.path.join(fr_dir, f)
            for f in os.listdir(fr_dir)
            if f.endswith('.tsx')
        ])
        print(f"Processing {len(fr_articles)} FR articles...")
        for f in fr_articles:
            process_file(f)

    # 3. Template data files
    templates_dir = os.path.join(locale_dir, '(marketing)', 'templates', '_data')
    if os.path.isdir(templates_dir):
        template_files = sorted([
            os.path.join(templates_dir, f)
            for f in os.listdir(templates_dir)
            if f.endswith('.ts')
        ])
        print(f"Processing {len(template_files)} template files...")
        for f in template_files:
            process_file(f)

    # 4. Journey data
    journey_file = 'src/data/journey-phases.ts'
    if os.path.exists(journey_file):
        print("Processing journey-phases.ts...")
        process_file(journey_file)

    # 5. Message files
    msg_files = sorted(glob.glob('messages/*.json'))
    print(f"Processing {len(msg_files)} message files...")
    for f in msg_files:
        process_json_file(f)

    # 6. News articles data
    news_file = os.path.join(locale_dir, '(marketing)', 'news', '_data', 'articles.ts')
    if os.path.exists(news_file):
        print("Processing news articles...")
        process_file(news_file)

    # Report
    print(f"\n{'='*60}")
    print(f"EM-DASH PURGE COMPLETE")
    print(f"{'='*60}")
    print(f"Files modified: {total_files_modified}")
    print(f"Em-dashes removed: {total_removed}")
    print(f"Em-dashes preserved (citations/attributions): {total_preserved}")
    print(f"\nModified files:")
    for line in sorted(files_report):
        print(line)


if __name__ == '__main__':
    main()
