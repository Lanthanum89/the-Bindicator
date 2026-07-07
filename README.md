# The Bindicator 🗑️

Never miss bin day again. A neighbourhood-shareable bin day checker — shows the next collection with colour-coded bin icons (food waste, recycling & garden, black bin), flags the unconfirmed Christmas period dates, and includes a full browsable calendar through March 2027.

Installable as a PWA — works offline once added to your home screen.

## Structure

- `index.html` — the whole app: markup, styles, and logic in one self-contained file (no build step, no dependencies)
- `manifest.json` — Web App Manifest (name, theme colour, icons) for installability
- `sw.js` — service worker, cache-first for the static shell so it works fully offline once installed
- `icons/` — app icons (192px / 512px, plus maskable variants for Android adaptive icons)
- `bindicator-source.ts` — typed reference copy of the schedule data model; not compiled or used at runtime, kept in case this ever moves into a real build pipeline

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
