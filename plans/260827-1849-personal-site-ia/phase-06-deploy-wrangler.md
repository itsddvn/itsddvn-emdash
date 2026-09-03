---
title: "Phase 6: Deploy with Wrangler"
status: todo
---

# Phase 6: Deploy with Wrangler

## Context

- User gate: after implementation is done, deploy production with **Wrangler CLI**, not “push and hope GHA”.
- Domain: `itsdd.vn` (CI uses `wrangler deploy --domain itsdd.vn`)
- Script: `pnpm deploy` → `astro build && wrangler deploy` (**no** `--domain`). Prefer the CI-equivalent command.
- Worker: `wrangler.jsonc` name `itsddvn-emdash`, D1 `DB`, R2 `MEDIA`, KV `SESSION`
- Seed does not update live D1. Schema/menus/content on production = admin.

## Overview

Typecheck, build, `wrangler deploy --domain itsdd.vn`, smoke the new IA routes, then apply live CMS schema if `/work` is empty/500.

## Requirements

- Functional: production Worker on `itsdd.vn` serves the new IA
- Functional: `https://itsdd.vn/`, `/en/`, `/about`, `/en/about`, `/work`, `/en/work`, `/contact`, `/en/contact` return 200
- Functional: `/_emdash/api/setup/status` still `needsSetup == false`
- Non-functional: deploy via Wrangler CLI from an authenticated workstation
- Non-functional: `pnpm typecheck` + `pnpm build` green before deploy
- Non-functional: do not deploy if phase 0 was never approved or phases 1–5 unverified

## Architecture

```text
pnpm typecheck
pnpm build
wrangler whoami
wrangler deploy --domain itsdd.vn
curl --fail production routes
admin: projects collection + menus if live DB lacks them
```

GHA on `main` also deploys. CLI deploy here is the required path; a later merge to `main` may redeploy the same Worker. Do not change GHA as part of this phase unless the smoke list is missing new routes (that edit belongs to phase 5).

## Related Code Files

- Run: `wrangler` from repo root (devDependency)
- Modify: none unless deploy fails due to `wrangler.jsonc` (unexpected)
- Admin: live EmDash at `https://itsdd.vn/_emdash/admin`

## Implementation Steps

1. Confirm phase 5 success criteria are checked.
2. `wrangler whoami`. If not logged in: `wrangler login` (user must complete browser auth). Do not embed API tokens in the plan or shell history files.
3. `pnpm typecheck` then `pnpm build`.
4. Deploy:
   ```bash
   pnpm exec wrangler deploy --domain itsdd.vn
   ```
   Do not use a new Worker name. Do not `--dry-run` as the final step.
5. Smoke (fail on non-200):
   ```bash
   for p in / /en/ /about /en/about /work /en/work /contact /en/contact; do
     curl --fail --silent --show-error --retry 5 --retry-all-errors "https://itsdd.vn$p" > /dev/null
   done
   curl --fail --silent --show-error https://itsdd.vn/_emdash/api/setup/status \
     | jq -e '.data.needsSetup == false'
   ```
6. If `/work` 500: live schema missing `projects`. Create collection + fields in admin (phase 1 checklist), redeploy only if code must change.
7. Homepage visual check: identity first, not featured-post hero.
8. Record deploy output (Worker version) in this phase’s todo notes — no secrets.

## Todo

- [ ] `wrangler whoami` ok
- [ ] typecheck + build
- [ ] `wrangler deploy --domain itsdd.vn`
- [ ] curl new routes 200
- [ ] live admin schema/menus if needed
- [ ] `/` is person-first on production

## Success Criteria

- [ ] Production is the new personal-site IA
- [ ] Deploy used Wrangler CLI with `--domain itsdd.vn`
- [ ] Setup status remains not-needed
- [ ] No second Worker / no new D1/R2

## Risk Assessment

- CLI deploy from a feature branch ships unmerged work to production. Signal: git branch ≠ `main`. Response: still allowed (user asked CLI deploy after done); say the SHA/branch in the completion note.
- Token/auth missing. Response: `wrangler login`, do not read `.env` or GitHub secrets from disk.
- Seed vs live DB drift. Response: admin checklist, not a re-seed (re-seed would not overwrite anyway).
- Concurrent GHA deploy. Response: don’t push `main` mid-CLI deploy; wait for CLI smoke first.

## Security

Never print `CLOUDFLARE_API_TOKEN`. Never commit wrangler state. Production D1/R2 IDs stay as in `wrangler.jsonc`; do not recreate bindings.
