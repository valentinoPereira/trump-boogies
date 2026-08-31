# Plan — Trump Boogies Archive Expansion

Status of the archive database (`src/_data/lies.json`):

| Year | Entries | Status |
|------|---------|--------|
| 2015 | 9       | done    |
| 2016 | —       | partial (in-file, see below) |
| 2017 | —       | partial   |
| 2018 | —       | partial   |
| 2019 | 8       | freshly added (ids 32–39) |
| 2020 | a few   | partial   |
| 2021 | 0       | missing   |
| 2024 | 0       | missing   |
| 2025 | 0       | missing   |

> Note: the exact per-year counts for 2016–2018 and 2020 need confirmation before the table is treated as authoritative. The overall total is now **39 entries**.

## Immediate next steps (in order)

1. **Commit the 2019 batch.** The 2019 entries are written, valid JSON, build passes. Get them into version control before moving on.
2. **Fill 2020.** Next chronological year — covers the election, COVID-19, and the impeachment/Ukraine fallout. Target a similar batch of verified entries (8–10).
3. **Fill the remaining gaps year by year:** 2021 (post-presidency), then 2024 and 2025 (the second term, which overlaps with current events).
4. **Confirm existing counts for 2016–2018 and 2020** so the table above is accurate.

## Data-quality rules for every new entry

- **Verbatim quote** — use the exact words Trump said/wrote, pulled from the source.
- **Real date** — the specific day the statement was made, not just the year.
- **Real journalistic sources** — always cite the fact-checking outlet(s) that verified it (The Washington Post Fact Checker, PolitiFact, FactCheck.org, CNN, AP, Reuters, NYT, NBC, ABC…).
- **Fallacy + factual rebuttal** — name the rhetorical/logical fallacy, then give the concrete fact that disproves it.
- **Use web search (exa) to verify** — do not rely on memory for quotes or dates.

## Format

Each entry follows the existing shape in `src/_data/lies.json`:

```json
{
  "id": 40,
  "lie": "The false statement, quoted verbatim.",
  "date": "YYYY-MM-DD",
  "year": 2020,
  "sources": ["The Washington Post", "PolitiFact"],
  "fallacy": "Name of the logical fallacy — short factual explanation."
}
```

- Continue the `id` sequence (next id is **40**).
- Entries render newest-first automatically via the `sortByDateDesc` filter, so file order does not matter.
- Raise the `lies | length` display count naturally — no hardcoded numbers to update.

## Future ideas (not urgent)

- Add per-source URLs to make the archive more citable.
- Add a verdict/category field and a category filter.
- Set up a deployment pipeline (GitHub Pages/Netlify) — README claims static-host-ready but nothing is wired.
