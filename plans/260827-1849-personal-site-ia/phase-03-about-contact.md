---
title: "Phase 3: About and contact"
status: todo
---

# Phase 3: About and contact

## Context

- Pattern: [Epidemic Sound about](https://mobbin.com/sites/sections/03e2b954-3beb-4a8f-af54-060233a4204f), [Feather contact](https://mobbin.com/sites/sections/98f85e8c-3dcf-4f11-a37a-24e43a29ee0c)
- Forms already registered: `formsPlugin()` in `astro.config.mjs`
- Embed: Portable Text block `emdash-form` (plugin admin)
- Existing generic template: `src/pages/pages/[slug].astro`

## Overview

First-class `/about` and `/contact` routes. Keep `/pages/[slug]` for other CMS pages. Redirect old about URLs.

## Requirements

- Functional: `/about` and `/en/about` render the about CMS entry (`gioi-thieu` / `about`)
- Functional: `/contact` and `/en/contact` render the contact CMS entry (`lien-he` / `contact`)
- Functional: `/pages/gioi-thieu` → `/about`, `/pages/about` → `/en/about` (301/redirect)
- Functional: contact page can embed `emdash-form` via Portable Text; no custom form component required
- Design: about = title + optional portrait + Portable Text. Contact = sparse: heading, short line, email/social, form
- Non-functional: `hreflang` via existing `localePaths` on `Base`

## Architecture

Dedicated pages fetch known slugs (same pattern as `pages/[slug].astro`) so layout can differ from generic pages.

```text
src/pages/about.astro          slug gioi-thieu | about
src/pages/contact.astro        slug lien-he | contact
src/pages/en/about.astro       wrapper
src/pages/en/contact.astro     wrapper
```

Do not duplicate Portable Text rendering — extract `src/components/CmsPage.astro` only if about/contact/generic share >80% markup. About may add portrait; contact may add a connect list from `social` menu. Slight divergence is OK.

## Related Code Files

- Create: `src/pages/about.astro`, `src/pages/contact.astro`
- Create: `src/pages/en/about.astro`, `src/pages/en/contact.astro` (copy existing `en/` wrapper pattern)
- Modify: `src/pages/pages/[slug].astro` — redirect about/contact slugs to canonical routes
- Modify: `src/utils/i18n.ts` — contact heading copy if needed
- Footer/nav chrome stays in phase 5

## Implementation Steps

1. Copy `en/*.astro` wrapper style from `src/pages/en/search.astro` (re-export parent page).
2. `about.astro`: `getEmDashEntry("pages", locale === "en" ? "about" : "gioi-thieu")`; 404 redirect if missing.
3. `contact.astro`: same for `contact` / `lien-he`. Render Portable Text (form block included). Above body, list `social` menu + `mailto` if present in settings/social.
4. In `pages/[slug].astro`, if slug is `gioi-thieu`|`about`|`lien-he`|`contact`, redirect to the dedicated path for that locale.
5. `getContentLocalePaths` so language switcher maps `/about` ↔ `/en/about`.
6. Style about/contact with existing page-article tokens; contact tighter, more whitespace (Feather).

## Todo

- [ ] `/about` + `/en/about`
- [ ] `/contact` + `/en/contact`
- [ ] Redirects from `/pages/...` aliases
- [ ] Form embed works when an admin form exists

## Success Criteria

- [ ] About is a person page, not “this is a blog”
- [ ] Contact is reachable from nav and home CTA
- [ ] Old `/pages/gioi-thieu` does not 200 as a duplicate

## Risk Assessment

- Missing contact entry → redirect to 404. Seed/admin must publish it before nav goes live (phase 5 can ship nav after pages exist).
- Form block with no form configured: Portable Text should render nothing or an editor-only message. Do not crash the page.

## Security

Public form POST goes through plugin `submit` (honeypot/turnstile already in plugin). Do not roll a custom endpoint. Do not log submission bodies.
