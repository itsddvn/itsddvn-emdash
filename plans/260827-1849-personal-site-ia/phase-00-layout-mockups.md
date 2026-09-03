---
title: "Phase 0: Layout mockups"
status: todo
---

# Phase 0: Layout mockups

## Context

- User gate: draw layouts, review until OK, **then** code. No `src/` edits before approval.
- Sitemap: [research/sitemap.md](./research/sitemap.md)
- Visual contract: Identity Decoder. Existing earth-neutral and burnt-orange palette; clay orange is the sole signal and iron brown the cinematic field. Source Sans 3 body + Barlow Condensed display. Existing post reading layout stays three-column.
- Mobbin: Visual Electric collage, Adobe Express portrait hero, Portrait identity tiles, and Mistral AI orange field. Sources in [research/sitemap.md](./research/sitemap.md).

## Overview

Self-contained HTML mockups for every new surface. User reviews in a browser. Implementation (phases 1–5) is blocked until this phase is approved.

## Requirements

- Functional: mockups for Home, About, Work index, Work detail, Contact. vi default, verified at 1440px and 375px.
- Functional: chrome shows wordmark + Giới thiệu / Dự án / Ghi chép / Liên hệ.
- Design: Identity Decoder. The portrait is rendered as 12 vertical interactive slices; cursor proximity decodes position and colour. Build / Operate / Write modes change the hero statement and slice pattern. Mobile aligns the portrait and exposes the modes as touch targets. Campaign work, scroll-progress practice, compact Field Notes, and dark contact remain subordinate.
- Home: identity decoder first, selected work second, operating practice third, Field Notes fourth, contact last. Supporting pages retain the coherent Cinematic Profile hierarchy. Blog is supporting evidence rather than the product.
- Output: `plans/260827-1849-personal-site-ia/layouts/` with an `index.html` linker
- Non-functional: mockups open from disk, no build step

## Architecture

Static HTML/CSS/JavaScript using `v7.css` for the shared cinematic system and `v8.css` for the Identity Decoder. Twelve generated image slices respond to cursor proximity; accessible tab controls switch Build / Operate / Write content. Mobile aligns all slices and uses touch controls. `prefers-reduced-motion` removes the decode motion. Placeholder content and images are clearly non-production. Not wired to EmDash.

```text
layouts/
  index.html          gallery + approval checklist
  home.html
  about.html
  work.html
  work-detail.html
  contact.html
  v7.css             cinematic design and responsive behavior
  v8.css             interactive Identity Decoder hero
```

## Related Code Files

- Create: `plans/260827-1849-personal-site-ia/layouts/*.html`, `layouts/v7.css`, `layouts/v8.css`
- Read only: `src/styles/tokens.css`, `src/styles/theme.css`, `src/layouts/Base.astro`
- Do **not** modify `src/pages/**`

## Implementation Steps

1. Derive the mock token set from `theme.css`: earth-neutral canvas, clay-orange signal, and iron-brown inverse. Keep Source Sans 3 / Barlow Condensed for project continuity and Vietnamese support.
2. Use Visual Electric's collage logic and Adobe Express's portrait-led composition as inputs, then implement an original twelve-slice Identity Decoder rather than reproducing either screen.
3. Use Portrait's identity-tile concept to connect Build / Operate / Write to the person, not to a generic AI dashboard.
4. Use Mistral AI's orange field as permission for a bold single-colour signal, without importing its corporate layout.
5. Put selected work immediately after the hero. Use one strong case-study campaign plus two supporting project rows.
6. Explain the working method as a three-step scroll narrative with one progress line; keep all signature interaction inside the hero.
7. Reduce writing to a compact Field Notes rail after work and practice.
8. Apply the same art direction to About, Work, Work detail, and Contact.
9. Document sources and motion behavior in `index.html`; include an approval checklist.
10. Verify every surface at 1440px and 375px, including slice decoding, mode switching, image loading, JavaScript errors, scroll behavior, reduced-motion fallback, and mobile overlap; stop and wait for user approval.

## Todo

- [x] `layouts/index.html` gallery
- [x] Home / About / Work / Work detail / Contact mockups
- [ ] User approval recorded (comment or checkboxes)

## Success Criteria

- [ ] User can open `layouts/index.html` and review every new page
- [ ] Mockups match locked sitemap
- [ ] Explicit go/no-go before any `src/` change

## Risk Assessment

- Coding from memory if mockups skip mobile wrap. Include a 360px note or `@media` in the mockups.
- Drift: implementation must follow these files, not reinvent.

## Security

No production data. Placeholder email/social only.
