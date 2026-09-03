---
title: "Phase 2: Homepage intro"
status: todo
---

# Phase 2: Homepage intro

## Context

- Depends on phase 1 types (`projects`, `pages.excerpt`)
- Current home: `src/pages/index.astro` featured-image hero + 6-card grid
- References: [Curater](https://mobbin.com/screens/a8abbb37-8bb7-4150-baa7-6be9b2abbd3d), [Perplexity Discover](https://mobbin.com/screens/00fc974e-2367-4479-a8dc-3e0a919604b2), [OFF+BRAND](https://mobbin.com/sites/sections/851e3996-4679-4653-aae6-3b345cab2aba)

## Overview

Replace blog-first homepage with a person-first page. Writing becomes a section. Work section renders only when projects exist.

## Requirements

- Functional: H1 is the person/site name (Its'DD), not a post title
- Functional: short bio + CTAs to `/posts`, `/work`, `/contact`
- Functional: latest 3 posts as a text list (title, date, reading time). No featured image hero
- Functional: up to 3 featured-or-latest projects as a numbered list; omit section if none
- Functional: empty posts still show identity (do not swap the whole page for “create a post”)
- Design: stay on existing tokens (`theme.css` / `tokens.css`). No second accent. Typographic hero; portrait only if byline avatar exists
- i18n: all new strings in `src/utils/i18n.ts`

## Architecture

```text
index.astro
  getSiteSettings()           → name, tagline
  getEmDashEntry("pages", aboutSlug)
  getEmDashCollection("posts", { limit: 3 })
  getEmDashCollection("projects", { limit: 3, orderBy featured/published })
  getBylineBySlug("itsdd")    → optional avatar
```

About slug: `gioi-thieu` (vi) / `about` (en). If entry missing, bio = `settings.tagline`.

Do not fetch 7 posts + lookahead for a featured image.

## Related Code Files

- Modify: `src/pages/index.astro` — rewrite markup + styles
- Modify: `src/pages/en/index.astro` — keep thin locale wrapper
- Modify: `src/utils/i18n.ts` — intro/writing/work/contact CTA copy
- Reuse: `src/components/PostCard.astro` is optional; prefer a simpler list row so home does not look like `/posts`
- Create: `src/components/HomeWritingList.astro` and `src/components/HomeWorkList.astro` only if `index.astro` would exceed ~200 lines of logic+markup. Prefer one file if it stays readable.

## Implementation Steps

1. Drop `featuredPost` / `featured-section` / `posts-grid` on home.
2. Identity block: kicker (`copy.topics`), H1 name, tagline, about excerpt, CTA row.
3. Optional avatar `<img>` from byline; no empty image box.
4. Writing section header “Bài viết” / “Writing” + link to `/posts`. List 3 posts.
5. Work section header “Dự án” / “Work” + link to `/work`. Numbered rows: title, year, summary. Skip if `projects.length === 0`.
6. Contact strip: `copy.connect` + mailto/social if present; else link to `/contact`.
7. Empty-posts CTA (“create first post”) moves under the writing section, not instead of the identity block.
8. Cache: `Astro.cache.set` on combined hints from all queries.

## Todo

- [ ] Rewrite `index.astro` query + markup
- [ ] i18n strings for section titles and CTAs
- [ ] Hide work section when empty
- [ ] Identity visible when zero posts

## Success Criteria

- [ ] `/` H1 is site name
- [ ] No featured-post image hero
- [ ] Writing section links to `/posts`
- [ ] Visual: editorial, one brand color, not a SaaS landing

## Risk Assessment

- `getEmDashCollection("projects")` throws if live schema lacks the collection. Mitigation: phase 1 admin first, **or** catch/guard and treat as []. Prefer guard: if types exist but table missing, page 500 — so production schema must land before deploy, or feature-flag the query behind a try/empty fallback. Use empty fallback if EmDash returns `{ entries: [], error }`.
- About slug mismatch. Mitigation: try locale slug then fallback slug.

## Security

Public read-only queries. No new forms on home.
