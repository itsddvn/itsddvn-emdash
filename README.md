# itsdd.vn

A dark editorial site for founder notes on AI products, agentic work, and operating systems, built with [EmDash](https://github.com/emdash-cms/emdash) and deployed on Cloudflare Workers with D1 and R2.

## What's Included

- Featured post hero on the homepage
- Post archive with reading time estimates
- Category and tag archives
- Full-text search
- RSS feed
- SEO metadata and JSON-LD
- Semantic typography and shared public UI controls
- Forms plugin and webhook notifier

## Pages

| Page | Route |
|---|---|
| Homepage | `/` |
| All posts | `/posts` |
| Single post | `/posts/:slug` |
| Category archive | `/category/:slug` |
| Tag archive | `/tag/:slug` |
| Search | `/search` |
| Static pages | `/pages/:slug` |
| Contact | `/contact` |
| 404 | fallback |

## Localization

Vietnamese is the default locale and uses unprefixed routes such as `/posts/:slug`.
English uses the same route structure under `/en`, for example
`/en/posts/:slug`. Content, menus, taxonomies, search, RSS, canonical URLs, and
`hreflang` alternates resolve independently per locale.

Editors create and publish translation siblings from the EmDash translation
panel. The admin remains unprefixed at `/_emdash/admin`; do not enable Astro's
`prefixDefaultLocale` or `prefix-always` routing because injected EmDash admin
pages require the canonical unprefixed path.

## Visual System

The public site uses a dark editorial-industrial direction for founder and
AI-operations content. One warm orange accent keeps hierarchy dependent on
typography, spacing, and rules instead of decorative colour. Archivo carries
display roles; Source Sans 3 carries reading and interface copy.

Equivalent elements share semantic roles across localized and CMS-backed
routes. Page-specific styles may own composition, but must not redefine a
shared role's typography or control dimensions. Reuse the nearest existing role
before introducing another shared abstraction.

Executable owners:

- [`src/styles/theme.css`](src/styles/theme.css) owns the palette, geometry, and
  motion tokens.
- [`src/styles/system.css`](src/styles/system.css) owns semantic typography,
  layout, surface, control, and prose roles.
- [`astro.config.mjs`](astro.config.mjs) owns the webfont pipeline and Vietnamese
  font subsets.
- [`src/layouts/Base.astro`](src/layouts/Base.astro) owns global stylesheet
  ordering.
- [`src/styles/founder-home.css`](src/styles/founder-home.css) owns homepage
  composition while consuming the global palette and type roles.

## Infrastructure

- **Runtime:** Cloudflare Workers
- **Database:** D1
- **Storage:** R2
- **Framework:** Astro with `@astrojs/cloudflare`

## Local Development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Deploying

Pushing a commit to `main` triggers `.github/workflows/deploy.yml`. GitHub
Actions installs the locked dependencies, typechecks, builds, deploys the
Cloudflare Worker, and smoke-tests the Vietnamese and English production routes.

```bash
git push origin main
```

For a manual deployment from an authenticated workstation:

```bash
pnpm deploy
```

## Reference

- [EmDash documentation](https://docs.emdashcms.com)
