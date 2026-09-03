---
title: "Phase 7: Verification"
status: todo
---

# Phase 7: Verification

## Outcome

Prove the implemented profile works as a real bilingual, accessible, responsive EmDash site before deployment.

## Required checks

### Content and privacy

- Every identity/contact/title claim matches the approved profile brief.
- Every case-study claim and image matches the publication matrix.
- No placeholder, private path, private client detail, or archived stale contact value ships.

### Build and contracts

- `pnpm typecheck`
- `pnpm build`
- focused changed-contract tests
- generated EmDash types current

### Runtime routes

- `/`, `/en/`
- `/work`, `/en/work`
- every selected case in both locales
- `/practice`, `/en/practice`
- `/about`, `/en/about`
- `/contact`, `/en/contact`
- posts, search, category, tag, and RSS

### Browser behavior

- desktop and mobile visual verification
- keyboard-only navigation
- Operating Atlas pointer, keyboard, touch, reduced-motion, and no-JavaScript paths
- no horizontal overflow at target breakpoints
- image loading, alt text, focus states, contrast, and form labels
- article three-column desktop layout preserved

### Performance

- avoid unnecessary client JavaScript and image downloads
- no animation loop when hidden or reduced-motion is active
- verify responsive images and prevent layout shift

## Evidence

Use real browser screenshots, route responses, and build output. Generate the repository-standard verification report/artifacts if post-verify workflow is invoked.

## Success criteria

- [ ] All named commands pass.
- [ ] All named routes exercise successfully.
- [ ] No privacy/content discrepancy remains.
- [ ] Operating Atlas remains understandable without motion or JavaScript.
- [ ] No critical accessibility or responsive defect remains.
- [ ] Reviewer confirms the result matches the Phase 1–4 contracts.
