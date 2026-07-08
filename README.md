# The Bindicator 🗑️

Never miss bin day again. A neighbourhood-shareable bin day checker — shows the next collection with colour-coded bin icons (food waste, recycling & garden, black bin), flags the unconfirmed Christmas period dates, and includes a full browsable calendar through March 2027.

Installable as a PWA — works offline once added to your home screen.

## Structure

- `index.html` — the whole app: markup, styles, and logic in one self-contained file (no build step, no dependencies)
- `manifest.json` — Web App Manifest (name, theme colour, icons) for installability
- `sw.js` — service worker, cache-first for the static shell so it works fully offline once installed
- `icons/` — app icons (192px / 512px, plus maskable variants for Android adaptive icons), derived from the mascot artwork in `graphics/`
- `graphics/mascot-hero.png` — the full mascot illustration (with wordmark), used as the social share preview (`og:image`); the app icons are a cropped, full-bleed, text-free derivative of this same artwork
- `fonts/` — two self-hosted variable fonts (OFL-licensed, see `fonts/OFL-Fredoka.txt` and `fonts/OFL-NunitoSans.txt`): Fredoka for the title/logo (the one thing meant to stand out most) and Nunito Sans for everything else; self-hosted rather than CDN-loaded so it still works offline
- `characters/` — illustrated bin characters (food/recycling/black), each in two forms: a small flat `*-icon.png` used in the bin-tag pills and calendar chips, and a larger detailed `*-full.png` used for the header mascot

## Character

Beyond the raw schedule, the app has a bit of personality: an illustrated bin mascot in the header (click it, it wiggles), a vertical timeline of the next three collections, confetti on bin day, and dark mode support with a manual toggle (the sun/moon button in the header). The toggle defaults to your OS preference and remembers an explicit choice in `localStorage` after that.

The hero card's progress indicator is a straight vertical line — the same dot-and-line visual language as the rest of the timeline, just taller — running from "today" down to the collection-day dot, with a small mascot icon (matching whichever bin is due) travelling down it as the week progresses. It resets to empty at Friday midnight (the day after collection) and reaches full by the end of Thursday (collection day). The line's fill colour doubles as the accent colour (matching the dot/mascot elsewhere), so it communicates both "how close" and "which bins." A small live clock (current date/time, just for reference) sits beside it.

The full calendar table only shows today and future dates, and loads one 3-month page at a time (‹ Earlier / Later ›) rather than the whole future at once, since the schedule itself has no fixed end. A "Jump to date" picker generates whichever window is needed on demand — including years ahead — without preloading anything.

Food waste is collected every week, so it isn't useful as an accent colour — purple is reserved for the food-waste badge itself. The timeline's accent (top bar and dot) instead highlights whichever *extra* bin is due: green for recycling, black for the black bin, a green→black gradient when both are due, and a neutral grey on plain food-only weeks. The header mascot follows the same precedence, swapping between the three illustrated characters (food/recycling/black) to match.

## Running locally

Any static file server works, e.g.:

```
npx serve .
```

Service workers require HTTPS or `localhost`, so opening `index.html` directly via `file://` will skip PWA registration but the page itself still works.

## Deploying

Static hosting only — no backend. GitHub Pages: Settings → Pages → Deploy from branch → `main` / root.

## Updating the schedule

The schedule isn't hardcoded — `index.html` generates it algorithmically from a repeating cycle (`generateSchedule()`, near the top of the `<script>`): collection is every Thursday, recycling & garden falls on odd weeks and the black bin every third week, relative to a confirmed anchor date (`CYCLE_ANCHOR`). This matches the council's published calendar and keeps running correctly forever — no yearly data entry needed for the regular cycle.

The one thing that does need a yearly touch-up is `XMAS_DATES`: the council still confirms the exact Christmas/New Year collection days each December (they occasionally shift), so those dates are flagged with a "may shift" warning even though they follow the normal cycle. Each year once the council confirms, add that December/January's Thursdays to the `XMAS_DATES` set.

## Known limitations

- Schedule is specific to West Berkshire Schedule 1 (Thursday) — check your own council's calendar before assuming this applies to you
- Christmas period dates (24 Dec, 31 Dec, 7 Jan, 14 Jan) are provisional until the council confirms in December

## License

See [LICENSE](LICENSE).
