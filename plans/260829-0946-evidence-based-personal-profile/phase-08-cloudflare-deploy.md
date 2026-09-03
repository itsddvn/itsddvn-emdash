---
title: "Phase 8: Cloudflare deploy"
status: todo
---

# Phase 8: Cloudflare deploy

## Outcome

Deploy the verified profile to Cloudflare using Wrangler CLI and prove production behavior on `itsdd.vn`.

## Preconditions

- Phase 7 complete
- production D1 schema/content updated through the approved EmDash path
- no seed operation will overwrite live content
- current Wrangler identity and target confirmed
- explicit user approval for the irreversible production deploy

## Commands

```bash
pnpm typecheck
pnpm build
pnpm exec wrangler whoami
pnpm exec wrangler deploy --domain itsdd.vn
```

## Production smoke routes

```text
/
/en/
/work
/en/work
/practice
/en/practice
/about
/en/about
/contact
/en/contact
/search
/rss.xml
```

Also exercise every selected work-detail route and one article route per locale.

## Steps

1. Confirm no stale project server/process owns required local ports.
2. Run final typecheck and build from the deploy revision.
3. Confirm Wrangler account/worker/domain binding.
4. Confirm production content/schema readiness.
5. Obtain explicit user approval.
6. Deploy with `pnpm exec wrangler deploy --domain itsdd.vn`.
7. Smoke-test all named routes and interactions.
8. Inspect Cloudflare logs if any route or asset fails.
9. Record deployed revision, deployment ID, and evidence.

## Rollback

- retain the previous known-good deployment/revision
- if a critical regression appears, redeploy the known-good revision rather than patching live blindly
- content/schema rollback follows the approved D1/EmDash procedure; never restore by reseeding production

## Success criteria

- [ ] Wrangler reports a successful deployment.
- [ ] `itsdd.vn` serves the approved profile and bilingual routes.
- [ ] Selected work, Operating Atlas links, Bài Viết, contact, search, and RSS work in production.
- [ ] Production logs show no new critical error on exercised routes.
- [ ] Deployment evidence and rollback reference are recorded.
