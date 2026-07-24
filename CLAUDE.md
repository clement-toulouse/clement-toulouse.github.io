# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page CV/portfolio site for Clément Toulouse (Head of Product). React 19 +
TypeScript + Vite + Tailwind v4, prerendered to static HTML at build time.

**Code comments are in French.** The site is bilingual (French default, English
opt-in via the header selector) — match the language of whichever content file
you're editing.

## Commands

| Command | Effect |
| --- | --- |
| `npm run dev` | Dev server on :5173 |
| `npm run build` | Typecheck → client build → SSR build → prerender injection |
| `npm run preview` | Serve the production build (needed to test the prerendered HTML) |
| `npm run lint` | oxlint |
| `npm run images` | Regenerate portrait + Open Graph image from `Profil.png` |

There is no test suite. `npx tsc --noEmit` typechecks without building.

## Architecture

### Content lives in two mirrored files (i18n)

[`src/data/content.fr.ts`](src/data/content.fr.ts) and
[`src/data/content.en.ts`](src/data/content.en.ts) are the single source of truth
for every string on the site — identity, stats, experiences, AI cards, the Savor
project, skills, education, languages, nav items. Both implement the
[`SiteContent`](src/data/content.types.ts) interface, so TypeScript fails the build
if either file drifts from the other's shape. Components contain no hardcoded
copy — they call `useLanguage()` (from
[`src/i18n/LanguageContext.tsx`](src/i18n/LanguageContext.tsx)) and read `t.*`.
Edit content in the two files, never in the components.

French is the default locale **and** the one prerendered — see the hydration
contract below. `LanguageProvider` starts at `locale: 'fr'` regardless of any
saved preference, then corrects after mount (same `mounted`-flag pattern as
theme). Adding a field: extend `SiteContent` first, then both content files —
the compiler is the checklist.

Share metadata (`og:*`, `canonical`, JSON-LD `Person`) lives in
[`index.html`](index.html), always in French (it's baked into the prerendered
HTML, never regenerated client-side) — update it alongside `content.fr.ts`.

### Prerendering and the hydration contract

`npm run build` runs three stages: `vite build`, then `vite build --ssr
src/entry-server.tsx`, then [`scripts/prerender.mjs`](scripts/prerender.mjs) which
renders the app to HTML and replaces the `<div id="root"><!--app--></div>` marker in
`dist/index.html`. The client **hydrates** that HTML ([`src/main.tsx`](src/main.tsx)
branches on `root.hasChildNodes()`, so dev still uses `createRoot`).

**This constrains every component: the first render must be identical on server and
client.** Two existing patterns exist because of it — follow them rather than
reintroducing state-dependent first renders:

- **Theme** is written to `<html data-theme>` by an inline script in `index.html`
  before first paint. Light is the default; `App` starts at `'light'` and resyncs in
  an effect. The theme toggle renders *both* icons and lets CSS
  (`.only-dark` / `.only-light`) pick one.
- **`SplitHeading`** always starts with `play = false`, even under reduced motion;
  the effect flips it after mount.

Anything reading `localStorage`, `matchMedia`, or `window` during render will break
the build or the hydration. `prefersReducedMotion()` / `canHover()` in
`useMotion.ts` are already SSR-guarded, as is `useIsomorphicLayoutEffect`.

### Animations: CSS owns them, JS only toggles a class

There is **no animation library** (GSAP and Lenis were removed deliberately —
don't reintroduce them without asking). [`src/hooks/useMotion.ts`](src/hooks/useMotion.ts)
uses IntersectionObserver to add `is-in`; all transitions, delays and keyframes are
in the `motion` section of [`src/index.css`](src/index.css).

Stagger is driven by CSS custom properties set in JS or JSX:

- `--i` — index among siblings, set by `useReveal` (`.reveal`)
- `--c` — character index, set by `SplitHeading` (`.split .char`)
- `--d` — hero intro order, set inline in `Hero.tsx` (`.intro-item`)

`useParallax` runs one shared `requestAnimationFrame` loop for the hero auroras and
writes only `transform`. Smooth scrolling is native (`scroll-behavior: smooth`).

`useReveal` adds the `.reveal` class client-side, so the prerendered HTML shows all
content — that is intentional, and the `@media (scripting: none)` and
`prefers-reduced-motion` blocks in `index.css` keep it visible when JS or motion is
off. Any new reveal mechanism must preserve that.

### Design tokens

`--c-*` variables are defined per theme on `:root` / `[data-theme='light']` (the
default, warm off-white) / `[data-theme='dark']` (warm charcoal), then mapped into
Tailwind via `@theme`. Repainting the site means editing those variables, not the
components — aurora halos and AI-card glows reference them via `var(--c-*)` too.

The direction is deliberately sober: one main accent (`--c-iris`, deep indigo) with
teal and amber in support. Accents have **different values per theme** — deep tones
for contrast on light, softened tints on dark. Keep both in sync when changing one,
and keep light ≥ 4.5:1 on white surfaces.

### Images

`Profil.png` at the repo root is the untouched original (not served).
[`scripts/make-images.mjs`](scripts/make-images.mjs) crops it 4:5 on the subject and
emits `public/clement.webp`, `public/clement.jpg` and the 1200×630 `public/og.jpg`.
`Portrait.tsx` falls back to a gradient monogram if the files are missing.

## Gotchas discovered the hard way

- **`vite.config.ts` importing a `src/` file pulls that file's own relative
  imports into `nodenext` resolution.** `tsconfig.node.json` (which governs
  `vite.config.ts`) uses `"module": "nodenext"`, requiring explicit file
  extensions. `tsconfig.app.json` (which governs `src/`) uses `"moduleResolution":
  "bundler"` and doesn't. Plain `tsc --noEmit` won't catch this — only `tsc -b`
  (what `npm run build` runs) walks project references and surfaces it, as
  `TS2307: Cannot find module` on the *imported* file's own extensionless
  imports, not on the import in `vite.config.ts` itself. Fix: add `.ts` to the
  relative imports in the file `vite.config.ts` reaches into (see
  `content.fr.ts` importing `content.types.ts`) — not to the whole `src/` tree.
- **Bare `npx tsc --noEmit` at the repo root silently checks zero files.** The
  root `tsconfig.json` only has `"references"` and `"files": []`; without `-b`
  it's a no-op that exits clean regardless of real errors. Use `npm run build`
  (which runs `tsc -b`) or `npx tsc --noEmit -p tsconfig.app.json` to actually
  typecheck.
- **Never use `background-attachment: fixed`.** Applied to many elements it made
  Chrome fail to paint the entire page — a blank screen with a perfectly healthy DOM.
- **`background-clip: text` does not survive transformed children.** That is why
  gradient headings use the `wipe-up` block reveal instead of per-character splitting.
  Passing `gradient` to `SplitHeading` selects that path; don't combine the two.
- **The in-app Browser pane never fires IntersectionObserver callbacks** (the API
  exists, callbacks never run), and its screenshots go black once the page is
  scrolled. Scroll reveals and counters therefore cannot be verified there. Use a
  real headless Chrome instead:

  ```bash
  npm run preview -- --port 4173 --strictPort
  # then drive http://localhost:4173 with puppeteer-core
  ```

  Point `executablePath` at `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
  and install `puppeteer-core` in the scratchpad, not in this project.

  **Start the server from the project root, and always assert the page really
  loaded.** `cd`-ing to the scratchpad earlier in a compound command leaves the
  shell there, so a bare `npx vite preview` then serves the *scratchpad* and
  answers `404` on every request — Chrome's error page scores a perfect
  accessibility audit, so a check that forgets to assert will report a false pass.
  Begin every run with `await page.waitForSelector('#parcours')` (or curl the URL
  and check for a `200`).

## Deployment

GitHub Pages, driven by `.github/workflows/deploy.yml` — every push to `main` runs
lint, typecheck, build and prerender, then publishes `dist/`.

The `site-config` plugin in `vite.config.ts` substitutes two tokens in
`index.html` at build time, reading `contentFr.profile` (French is the prerendered
locale — see i18n above):

- `__SITE_URL__` → `profile.siteUrl`, the absolute URLs for canonical/`og:*`/JSON-LD.
  **That one field is the only place to change the domain** — don't reintroduce
  hardcoded absolute URLs in `index.html`.
- `__GC_CODE__` → `profile.goatCounterCode`, the GoatCounter analytics code. Empty
  = disabled: the guarded inline script in `index.html` loads nothing (no third-party
  request). Set the field to a code to activate; no cookie, no consent banner.

`base` in `vite.config.ts` is `/` because this is a GitHub *user* site
(`<user>.github.io`). A project repo served from a subfolder needs `base: '/<repo>/'`.
