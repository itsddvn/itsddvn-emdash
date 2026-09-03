---
title: "Personal site IA and homepage intro"
description: "Turn Its'DD from a blog-first template into a personal site: homepage is the person, writing is one section."
status: superseded
priority: P1
effort: 13h
branch: feat/personal-site-homepage
tags: [feature, frontend]
blockedBy: []
blocks: []
created: 2026-08-27
---

# Personal site IA and homepage intro

> Superseded on 2026-08-29 by [Evidence-based personal profile](../260829-0946-evidence-based-personal-profile/plan.md). The v1–v8 layouts remain design exploration only; they are not approved implementation authority.

## Overview

Live `https://itsdd.vn` is still the EmDash blog template: featured post hero, then a post grid. User wants `/` to introduce **Its'DD**; the blog is one part of a personal site.

Sitemap and section order: [research/sitemap.md](./research/sitemap.md). IA follows [Curater](https://mobbin.com/screens/a8abbb37-8bb7-4150-baa7-6be9b2abbd3d) (Work / About / Journal / Contact) plus [Perplexity Discover](https://mobbin.com/screens/00fc974e-2367-4479-a8dc-3e0a919604b2) (name + bio + writing list).

## Goals

| # | Goal | Priority |
|---|------|----------|
| 1 | `/` answers “who is this?” before any post | P1 |
| 2 | Nav is personal-site IA, bilingual vi/en | P1 |
| 3 | Writing stays at `/posts` with current reading layout | P1 |
| 4 | Work + Contact exist as first-class routes | P2 |

## Sitemap (locked)

```text
/  /about  /work  /work/:slug  /posts  /posts/:slug
/category/:slug  /tag/:slug  /search  /contact  /rss.xml
```

Nav labels: Giới thiệu / Dự án / Bài viết / Liên hệ (en: About / Work / Writing / Contact). Wordmark is the home link.

Home stack: identity → optional now line → 3 writing items (list, not featured hero) → up to 3 work items → contact strip.

## Non-goals

## Cook gate

Phase 0 mockups must be user-approved before any `src/` change. Phase 6 deploys production with Wrangler CLI after phases 1–5 pass.

## Phases

| # | Phase | Status |
|---|-------|--------|
| 0 | [Layout mockups](./phase-00-layout-mockups.md) | Pending — **blocks code** |
| 1 | [Schema and identity](./phase-01-start.md) | Pending |
| 2 | [Homepage intro](./phase-02-homepage-intro.md) | Pending |
| 3 | [About and contact](./phase-03-about-contact.md) | Pending |
| 4 | [Work pages](./phase-04-work-pages.md) | Pending |
| 5 | [Nav, i18n, verify](./phase-05-nav-i18n-verify.md) | Pending |
| 6 | [Deploy with Wrangler](./phase-06-deploy-wrangler.md) | Pending |

## Dependencies

- EmDash `pages` + `posts` collections, `formsPlugin`, vi/en i18n, Cloudflare D1/R2.
- Seed does **not** overwrite live D1. Production schema/menus/content via admin.
- Branch: `feat/personal-site-homepage` from `main`.

## Success Criteria
- [ ] Phase 0 mockups approved before any `src/` change
- [ ] `/` and `/en/` lead with person identity, not a featured post
- [ ] Writing is a homepage section with a link to `/posts`
- [ ] Primary nav: About, Work, Writing, Contact (localized)
- [ ] `/about`, `/work`, `/contact` (and `/en/...`) return 200
- [ ] Existing post, search, RSS, category, tag routes still work
- [ ] `pnpm typecheck` passes
- [ ] Production `itsdd.vn` deployed via `wrangler deploy --domain itsdd.vn`

## Open questions

1. Real bio + optional portrait for the identity block (seed can ship placeholder).
2. 2–3 real projects vs empty Work until you add them in admin.
3. Public contact email / social URLs for the `social` menu.
