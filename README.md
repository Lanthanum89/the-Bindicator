# The Bindicator 🗑️

Never miss bin day again. A neighbourhood-shareable bin day checker — shows the next collection with colour-coded bin icons (food waste, recycling & garden, black bin), flags the unconfirmed Christmas period dates, and includes a full browsable calendar through March 2027.

Installable as a PWA — works offline once added to your home screen.

## Structure

- `index.html` — the whole app: markup, styles, and logic in one self-contained file (no build step, no dependencies)
- `manifest.json` — Web App Manifest (name, theme colour, icons) for installability
- `sw.js` — service worker, cache-first for the static shell so it works fully offline once installed
- `icons/` — app icons (192px / 512px, plus maskable variants for Android adaptive icons), derived from the mascot artwork in `graphics/`
- `graphics/mascot-hero.png` — the full mascot illustration (with wordmark), used as the social share preview (`og:image`); the app icons are a cropped, full-bleed, text-free derivative of this same artwork
- `fonts/` — self-hosted Quicksand variable font (OFL-licensed, see `fonts/OFL.txt`) used for headings and accents; self-hosted rather than CDN-loaded so it still works offline
- `bindicator-source.ts` — typed reference copy of the schedule data model; not compiled or used at runtime, kept in case this ever moves into a real build pipeline

## Character

Beyond the raw schedule, the app has a bit of personality: a googly-eyed bin mascot (click it, it wiggles), a vertical timeline of the next three collections, a rotating tagline (click to reroll), confetti + a party hat on bin day, and dark mode support.

Food waste is collected every week, so it isn't useful as an accent colour — purple is reserved for the food-waste badge itself. The timeline's accent (top bar, dot, mascot gradient) instead highlights whichever *extra* bins are due: green for recycling, black for the black bin, a green→black gradient when both are due, and a neutral grey on plain food-only weeks.

## Running locally

Any static file server works, e.g.:

```
npx serve .
```

Service workers require HTTPS or `localhost`, so opening `index.html` directly via `file://` will skip PWA registration but the page itself still works.

## Deploying

Static hosting only — no backend. GitHub Pages: Settings → Pages → Deploy from branch → `main` / root.

## Updating the schedule

Collection dates are hardcoded in `index.html` (the `data` array) — there's no admin panel or dynamic fetch, which is a deliberate simplicity trade-off. When the council publishes changes (e.g. the still-provisional Christmas/New Year dates), update the array by hand and redeploy.

## Known limitations

- Schedule is specific to West Berkshire Schedule 1 (Thursday) — check your own council's calendar before assuming this applies to you
- Christmas period dates (24 Dec, 31 Dec, 7 Jan, 14 Jan) are provisional until the council confirms in December

## License

See [LICENSE](LICENSE).
