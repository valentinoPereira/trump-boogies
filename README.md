# Trump Boogies

> A comprehensive, searchable archive of false statements made during the U.S. presidency of Donald J. Trump.

Trump Boogies is a single-page static website that catalogs statements made during the Trump presidency. Each entry records:

- The statement itself
- The date on which it was made
- The journalistic sources that reported on it
- A brief analysis of the rhetorical or logical fallacy at play

The site is built with [**Eleventy (11ty)**](https://www.11ty.dev/) using the **Nunjucks** templating engine, with plain CSS and a small amount of vanilla JavaScript for the filter UI. The visual theme is inspired by whitehouse.gov: navy-and-white, serif headlines, no images, all text.

## Project Structure

```
trump-boogies/
├── .eleventy.js              # 11ty configuration
├── package.json
├── README.md
└── src/
    ├── index.njk             # Main page template
    ├── _includes/
    │   └── base.njk          # Base HTML layout
    ├── _data/
    │   └── lies.json         # The archive data
    ├── css/
    │   └── styles.css        # The whitehouse.gov-inspired theme
    └── js/
        └── filter.js         # Client-side year + text filtering
```

## Data Format

Each entry in `src/_data/lies.json` has the following shape:

```json
{
  "id": 1,
  "lie": "The false statement, quoted verbatim.",
  "date": "YYYY-MM-DD",
  "year": 2020,
  "sources": ["The Washington Post", "PolitiFact"],
  "fallacy": "Name of the logical fallacy — short explanation."
}
```

Add a new entry by appending a new object to the array. The site will rebuild automatically during development. By default, the list is rendered in **descending order by date** (newest lie first), via the `sortByDateDesc` filter in `.eleventy.js`.

## Getting Started

### Prerequisites

- Node.js 18+ (tested on Node 24)
- npm

### Install dependencies

```sh
npm install
```

### Run the dev server (with live reload)

```sh
npm start
```

Then open <http://localhost:8080>.

### Build the static site for production

```sh
npm run build
```

The output is written to the `_site/` directory. Upload its contents to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, an S3 bucket, etc.).

## Filtering

The page exposes two client-side filters, both in vanilla JavaScript:

- **Year** — dropdown dynamically populated from the unique years in `lies.json`
- **Text search** — matches against the lie text, the sources, and the fallacy analysis

A **Reset** button clears both filters. The "Showing X of N entries" counter is announced to screen readers via `aria-live="polite"`.

## License

MIT — see `LICENSE` if present. Content is presented as an educational public record.
