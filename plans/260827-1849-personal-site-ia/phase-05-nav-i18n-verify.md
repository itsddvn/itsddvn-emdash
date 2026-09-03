---
title: "Phase 5: Nav, i18n, verify"
status: todo
---

# Phase 5: Nav, i18n, verify

## Context

- Nav is CMS `primary` menu (`Base.astro` already maps `menu.items`)
- Footer currently: Home, `/posts`, first 3 `pages` entries — will duplicate About if pages still include about/contact
- CI smoke: `.github/workflows/deploy.yml` curls `/` and `/en/` only
- Production: `https://itsdd.vn`

## Overview

Wire IA into chrome, language switcher, search, CI. Verify both locales. Do not restyle the post reading view.

## Requirements

- Functional: primary nav matches sitemap labels/URLs in vi and en
- Functional: language switcher maps `/about`↔`/en/about`, `/work`↔`/en/work`, `/contact`↔`/en/contact`, `/work/:slug` via translations
- Functional: footer Navigate uses canonical routes; do not also dump CMS pages that are now dedicated routes
- Functional: search placeholder/copy covers writing + pages + work
- Non-functional: `pnpm typecheck` green
- Non-functional: CI smoke `/`, `/en/`, `/about`, `/en/about`, `/work`, `/en/work`, `/contact`, `/en/contact`
- Design: header stays one row; 4 links + search + locale. If overflow on small screens, wrap — do not hide Work

## Architecture

Footer navigate list should be explicit (Home, About, Work, Writing, Contact) instead of `pages.slice(0, 3)`. Prevents duplicate About/Contact and missing Work.

`getRouteLocalePaths` already prefixes `/en`. Content routes with different slugs (`gioi-thieu` vs `about`) need `getContentLocalePaths` or dedicated maps on about/contact/work detail.

## Related Code Files

- Modify: `src/layouts/Base.astro` — footer links, search collections
- Modify: `src/utils/i18n.ts` — Writing vs Posts where user-facing (`allPosts` can stay for archive page title)
- Modify: `.github/workflows/deploy.yml` — extra curls
- Modify: `README.md` — page table (user-visible routes)
- Modify: `AGENTS.md` — Pages table so agents stop treating home as blog hero

## Implementation Steps

1. Footer explicit links via `localePath`. Skip listing about/contact from `getEmDashCollection("pages")`.
2. Confirm seed/admin primary menu URLs (phase 1). If live menu still has `/pages/gioi-thieu`, update in admin as part of this phase.
3. About/contact/work detail pass `localePaths` into `Base`.
4. Expand CI verify block with new routes (`--fail` on non-200).
5. Manual pass: `/` identity first; click each nav item vi then en; switcher on each new page; `/posts/:slug` gutter unchanged.
6. `pnpm typecheck`. Local `pnpm dev` smoke if a server is not already bound to 4321.

## Todo

- [ ] Footer canonical IA links
- [ ] Locale maps on new routes
- [ ] CI smokes new paths
- [ ] README + AGENTS pages table
- [ ] Visual pass vi + en

## Success Criteria

- [ ] Nav: About, Work, Writing, Contact
- [ ] `/` is not a featured-post page
- [ ] `/en/` equivalent
- [ ] Old about URL redirects
- [ ] Post layout unchanged
- [ ] Typecheck + CI curls pass

## Risk Assessment

- Four nav items + search + locale may wrap on 320px. Accept wrap; do not drop links.
- Production 404 on `/work` until schema exists. Deploy templates only after phase 1 admin, or accept empty-state 200 with query fallback.

## Security

No new auth surface. Admin remains `/_emdash/admin`.
