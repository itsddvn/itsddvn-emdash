---
title: "Phase 4: Work pages"
status: todo
---

# Phase 4: Work pages

## Context

- Index pattern: [OFF+BRAND numbered list](https://mobbin.com/sites/sections/851e3996-4679-4653-aae6-3b345cab2aba)
- Detail pattern: [Contra project detail](https://mobbin.com/flows/b388c693-e347-4464-8724-4613fc966222) minus marketplace chrome
- EmDash queries: `getEmDashCollection` / `getEmDashEntry` with `{ locale }`
- Mirror writing routes: `src/pages/posts/index.astro`, `src/pages/posts/[slug].astro`

## Overview

`/work` index and `/work/[slug]` case studies. Editorial list, not a Dribbble grid. Hide nothing with fake projects.

## Requirements

- Functional: `/work` lists published projects, featured first then `published_at` desc
- Functional: `/work/:slug` renders title, year, summary, image, Portable Text, optional external url
- Functional: locale fallback notice like posts
- Functional: empty index shows one sentence + link to `/posts`
- Design: numbered rows on index; detail is a single reading column (not the post 3-column gutter — work is not an article with TOC)
- SEO: `getSeoMeta` like posts
- Search: add `projects` to `LocalizedSearch` collections in `Base.astro`

## Architecture

```text
src/pages/work/index.astro
src/pages/work/[slug].astro
src/pages/en/work/index.astro
src/pages/en/work/[slug].astro
```

Empty `projects` collection: index 200 with empty state. Unknown slug: redirect 404.

Related work on detail: next 2 in the same locale, exclude current. Optional; skip if it needs extra queries and there are <2 projects.

## Related Code Files

- Create: `src/pages/work/index.astro`, `src/pages/work/[slug].astro`
- Create: `src/pages/en/work/` wrappers
- Modify: `src/layouts/Base.astro` — search collections `["posts", "pages", "projects"]`
- Modify: `src/utils/i18n.ts` — work empty copy, year label, visit-project
- Modify: `.github/workflows/deploy.yml` — smoke `/work` and `/en/work` (phase 5 may own this; do it here or there, not both)

## Implementation Steps

1. Index: query `projects` with locale, cacheHint, numbered list linking to `localePath(locale, `/work/${entry.id}`)`.
2. Use `entry.id` for URLs (slug), `entry.data.id` only if an API needs ULID.
3. Detail: `getEmDashEntry("projects", slug, { locale })`. Image via `<Image image={...} />`. External `url` as text link `rel="noopener"` `target="_blank"`.
4. `Astro.cache.set(cacheHint)` on both pages.
5. Empty state: no cards, no skeleton projects.
6. Types: `Project` in generated `emdash-env.d.ts` after phase 1.

## Todo

- [ ] Work index
- [ ] Work detail
- [ ] en wrappers
- [ ] Search includes projects
- [ ] Empty state without fake data

## Success Criteria

- [ ] `/work` 200
- [ ] `/work/:slug` 200 for a published project
- [ ] Unknown slug → 404
- [ ] Index looks like an editorial list, not a gallery

## Risk Assessment

- Collection missing on live → 500. Same fallback as home: treat error as empty list on index; detail 404.
- `featured` field missing on live entries: sort by `published_at` only.

## Security

External project URLs are editor-controlled. Always `rel="noopener noreferrer"` on `target="_blank"`. No open-redirect helper.
