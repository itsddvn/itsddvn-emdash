---
title: "Phase 1: Schema and identity"
status: todo
---

# Phase 1: Schema and identity

## Context

- Sitemap: [research/sitemap.md](./research/sitemap.md)
- Seed: `seed/seed.json` (applies only to empty DBs)
- Live: `https://itsdd.vn` already seeded — do not assume seed overwrites
- EmDash portfolio field pattern: `building-emdash-site` schema-and-seed

## Overview

CMS contract for a personal site: identity settings, `projects` collection, menus, about/contact pages, owner byline. Templates in later phases tolerate empty work.

## Requirements

- Functional: `projects` collection exists with title, featured_image, summary, content, year, url, featured boolean
- Functional: primary menu items About / Work / Writing / Contact in vi + en
- Functional: `social` menu exists (footer already reads `getMenu("social")`)
- Functional: contact + about CMS pages in both locales
- Non-functional: seed valid; `npx emdash types` regenerates `emdash-env.d.ts` with `projects`
- Non-functional: live D1 path documented (admin schema, not seed)

## Architecture

```text
seed.json  →  empty DB only
admin UI   →  production itsdd.vn schema + menus + copy
settings.title / tagline / social  →  identity
byline (Its'DD)                    →  optional avatar
pages: about, contact              →  long copy
projects                           →  work index/detail
posts                              →  unchanged
```

Homepage intro copy: short bio on the about page (first blocks) **or** an EmDash section `home-intro` if about is too long. Prefer about-page excerpt field if we add `excerpt` to `pages`; otherwise homepage uses `settings.tagline` + first about paragraph.

## Related Code Files

- Modify: `seed/seed.json` — settings, collections, menus, bylines, pages, sample projects
- Modify: `emdash-env.d.ts` — regenerate, do not hand-edit
- Modify: `src/utils/site-identity.ts` — keep resolver; defaults should not stay “My Blog”
- Create: none in `src/pages` this phase

## Implementation Steps

1. Update `settings.title` / `tagline` to live identity (Its'DD / current tagline). Meta author → site owner, not EmDash.
2. Add `projects` collection (drafts, search, seo). Fields: `title` string required searchable, `featured_image` image, `summary` text searchable, `content` portableText searchable, `year` string, `url` string, `featured` boolean.
3. Add `excerpt` text field to `pages` so homepage can pull a short intro without parsing Portable Text.
4. Replace `emdash-editorial` displayName with the site owner (keep id to avoid breaking existing post bylines) **or** add a new byline and retarget seed posts. Prefer retargeting seed posts to a new `itsdd` byline; live posts stay until admin edit.
5. Rewrite primary menus:
   - vi: Giới thiệu `/about`, Dự án `/work`, Bài viết `/posts`, Liên hệ `/contact`
   - en: About `/en/about`, Work `/en/work`, Writing `/en/posts`, Contact `/en/contact`
6. Add `social` menu (GitHub/X/LinkedIn/email as custom URLs — placeholders ok).
7. Expand about copy beyond template blog blurb (placeholder if user bio not supplied). Add contact pages `lien-he` / `contact` with email + form block note.
8. Seed 0–2 featured projects. Empty is valid.
9. On a **fresh** local DB, verify seed applies. On live, list admin steps: create `projects` collection with the same fields, add menu items, create contact page.

## Todo

- [ ] `projects` collection in seed
- [ ] `pages.excerpt` field
- [ ] primary + social menus
- [ ] about + contact entries vi/en
- [ ] owner byline
- [ ] regenerate types
- [ ] production admin checklist in this phase file (done below)

## Production admin checklist

1. Admin → schema → add `projects` with the fields above.
2. Edit primary menu URLs to `/about`, `/work`, `/posts`, `/contact` (and `/en/...`).
3. Create social menu named `social`.
4. Create/publish contact page; paste form via Portable Text `emdash-form` block after a form exists in Forms admin.
5. Update about excerpt + body.

## Success Criteria

- [ ] `emdash-env.d.ts` includes `projects`
- [ ] Fresh seed has new menus and pages
- [ ] Existing `posts` fields unchanged

## Risk Assessment

- Live DB ignores seed. Mitigation: templates hide empty work; admin checklist is required before production looks complete.
- Adding `pages.excerpt` on live needs an admin field add. Homepage must fall back to `settings.tagline` if excerpt missing.

## Security

No new public writes. Forms stay on the existing plugin (phase 3).
