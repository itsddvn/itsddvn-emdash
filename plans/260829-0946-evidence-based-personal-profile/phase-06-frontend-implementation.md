---
title: "Phase 6: Frontend implementation"
status: todo
---

# Phase 6: Frontend implementation

## Outcome

Implement the approved personal profile, Operating Atlas, routes, and bilingual content in Astro/EmDash.

## Requirements

- All content pages remain server-rendered.
- Every content-querying page calls `Astro.cache.set(cacheHint)`.
- Reuse existing EmDash loaders, image component, Portable Text renderer, menus, search, and i18n patterns.
- Visual overrides belong in `src/styles/theme.css`; do not edit `tokens.css` for customization.
- Operating Atlas uses semantic links/buttons and progressive enhancement.
- Reduced-motion and no-JavaScript states expose the same evidence.
- Hide empty optional sections; never render fake data.
- Preserve article three-column desktop layout and readable mobile layout.
- Maintain Vietnamese default and `/en` parity.

## Expected surfaces

- `src/pages/index.astro` and `/en` equivalent
- Work index/detail
- Practice
- About
- Contact
- Navigation/footer labels
- Operating Atlas component and minimal client script
- Existing posts/search/taxonomy/RSS integrations

## Steps

1. Implement shared page chrome and approved theme tokens.
2. Implement identity and connection surfaces.
3. Implement server-side selected-work queries and case routes.
4. Implement Operating Atlas semantic markup and enhanced interaction.
5. Implement Practice and Current Focus.
6. Place three recent Bài Viết entries after proof and practice.
7. Implement About and Contact from approved content.
8. Implement English route parity.
9. Update smallest owning docs for route/content/command changes.
10. Remove all obsolete mock assumptions and placeholder assets.

## Success criteria

- [ ] Homepage follows the approved content order.
- [ ] Operating Atlas links only to real evidence.
- [ ] All routes render real CMS content or cleanly omit optional surfaces.
- [ ] Keyboard and reduced-motion behavior match the prototype contract.
- [ ] Existing blog/search/taxonomy/RSS behavior remains functional.
- [ ] Vietnamese and English routes have equivalent behavior.
