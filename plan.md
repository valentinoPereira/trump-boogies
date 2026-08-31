# Plan — Trump Boogies Archive Expansion

Status of the archive database (`src/_data/lies.json`): total **47 entries**.

| Year | Entries | Status |
|------|---------|--------|
| 2015 | 17      | done   |
| 2016 | 1       | done (light) |
| 2017 | 6       | done (light) |
| 2018 | 2       | done (light) |
| 2019 | 8       | done (ids 32–39) |
| 2020 | 13      | done (ids 40–47 added this pass) |
| 2021 | 0       | missing |
| 2024 | 0       | missing |
| 2025 | 0       | missing |

> Counts confirmed directly from `src/_data/lies.json`. 2021, 2024 and 2025 remain empty.

## Immediate next steps (in order)

1. **Fill 2021** (post-presidency) — next chronological gap. Target a verified batch (8–10).
2. **Fill 2024 and 2025** (second term / current events), noting these overlap with ongoing news.
3. Continue the `id` sequence from **48**.

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

- Continue the `id` sequence (next id is **48**).
- Entries render newest-first automatically via the `sortByDateDesc` filter, so file order does not matter.
- Raise the `lies | length` display count naturally — no hardcoded numbers to update.

## Future ideas (not urgent)

- Add per-source URLs to make the archive more citable.
- Add a verdict/category field and a category filter.
- Set up a deployment pipeline (GitHub Pages/Netlify) — README claims static-host-ready but nothing is wired.
