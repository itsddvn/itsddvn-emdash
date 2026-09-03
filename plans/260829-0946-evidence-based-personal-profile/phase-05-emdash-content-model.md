---
title: "Phase 5: EmDash content model"
status: todo
---

# Phase 5: EmDash content model

## Outcome

Model the approved profile, proof cases, operating modes, current focus, and contact data in EmDash without making seed data the production migration mechanism.

## Requirements

- Extend schema only for approved content requirements.
- Keep `posts` and `pages` contracts compatible unless the approved IA changes them.
- Add a `projects` collection only if project cases require structured queries.
- Model Build, Operate, Codify as a controlled field or taxonomy with exact query names.
- Add explicit fields for role, summary, proof links, year/status, featured order, image, and Portable Text body.
- Image fields remain `{ src, alt }` objects.
- Use `entry.id` for URLs and `entry.data.id` for API calls.
- Seed changes support fresh environments; production D1 content/schema changes use the approved EmDash/admin/CLI path.

## Files

- `seed/seed.json`
- `emdash-env.d.ts` generated through `npx emdash types`
- relevant content query utilities
- production content/migration runbook if needed

## Steps

1. Verify current EmDash APIs and field types against live docs.
2. Draft schema diff from the approved content matrix.
3. Define query and empty-state contracts.
4. Define production D1/admin update sequence separately from seed.
5. Update schema and regenerate types.
6. Add only changed-contract tests where current coverage is insufficient.
7. Populate approved local content; do not invent production records.

## Success criteria

- [ ] Schema represents every approved case and Operating Atlas state.
- [ ] Generated types match the schema.
- [ ] Queries use exact collection/taxonomy names.
- [ ] Production update path does not overwrite live D1 content with seed data.
- [ ] No placeholder personal data is introduced.
