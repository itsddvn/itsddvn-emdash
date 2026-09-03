---
title: "Evidence-based personal profile"
description: "Rebuild itsdd.vn around verified identity, real proof of work, and an authentic Build–Operate–Codify narrative."
status: in-progress
priority: P1
effort: "epic"
tags: [profile, personal-brand, emdash, astro, i18n, cloudflare]
created: 2026-08-29
---

# Evidence-based personal profile

## Outcome

`itsdd.vn` presents Nguyễn Trung Đức as a **builder–operator–codifier of AI-enabled products and systems**. A visitor can understand the person, real work, working method, current focus, and connection path within 60 seconds. Blog content supports the profile; it does not define the homepage.

## Evidence base

- [Cross-project profile evidence](./research/cross-project-profile-evidence.md)
- [Project portfolio audit](./research/project-portfolio-audit.md)
- Corpus: 240 direct sessions, 1,553 messages, 37 project workspaces, plus the current design thread
- Previous visual exploration: `../260827-1849-personal-site-ia/` is reference-only and superseded as implementation authority

## Hard constraints

- No `src/`, schema, or production content changes before Phase 1 identity/profile contract approval and Phase 4 visual approval.
- No stale contact details, private client information, invented metrics, achievements, testimonials, or prestige labels.
- Vietnamese-first voice. English locale is equivalent content, not mixed-English Vietnamese copy.
- Preserve the approved Founder Operating System direction: dark modular earth-brown surfaces, one CPPAI-inspired orange accent family, and CEO-builder identity.
- Signature interaction must use real work evidence. No generic AI particles, developer-terminal cues, tech-stack clouds, fake dashboards, or motion-only novelty.
- Existing desktop three-column article reading layout remains.
- All CMS content pages stay server-rendered and keep `Astro.cache.set(cacheHint)`.
- Production deploy remains an explicit final phase using Wrangler CLI.

## Goals

| # | Goal | Priority |
|---|---|---|
| 1 | Lock current identity, public boundaries, and evidence-backed narrative | P0 |
| 2 | Publish three featured narratives plus every approved operational project as evidence nodes | P0 |
| 3 | Make the homepage personal-first and understandable within 60 seconds | P0 |
| 4 | Create one signature Operating Atlas interaction backed by real artifacts | P1 |
| 5 | Preserve high-quality writing and the existing reading experience | P1 |
| 6 | Deliver equivalent Vietnamese and English routes | P1 |
| 7 | Verify accessibility, performance, responsive behavior, and production routes | P0 |

## Information architecture

```text
/
├── /work
│   └── /work/:slug
├── /practice
├── /posts
│   └── /posts/:slug
├── /about
├── /contact
├── /search
├── /category/:slug
├── /tag/:slug
└── /rss.xml

/en mirrors every public content route.
```

Homepage order:

1. Identity and current position
2. Build → Operate → Codify operating triad
3. Selected proof of work
4. Working principles
5. Current focus
6. Three recent Bài Viết entries
7. Confirmed contact/social channels

## Signature experience

**Operating Atlas:** one interactive map linking real projects and artifacts to three modes:

- **Build:** products, tools, prototypes
- **Operate:** workflows, systems, integrations, deployment, governance
- **Codify:** skills, frameworks, research, handbooks, training

Every node opens a publishable project, artifact, decision, or note. Missing evidence means no node. Mobile uses a linear evidence sequence; reduced-motion uses the same content without animated transitions.

## Phases

| # | Phase | Status | Gate |
|---|---|---|---|
| 1 | [Profile evidence contract](./phase-01-start.md) | Complete | User approved facts, boundaries, narrative, and Phase 2 unlock |
| 2 | [Authentic content](./phase-02-authentic-content.md) | In progress | Featured narratives, approved Atlas nodes, and approved assets exist |
| 3 | [Information architecture](./phase-03-information-architecture.md) | Pending | Routes and homepage hierarchy approved |
| 4 | [Visual prototypes](./phase-04-visual-prototypes.md) | In progress | Founder landing and portrait approved; project assets, Operating Atlas states, and supporting pages remain |
| 5 | [EmDash content model](./phase-05-emdash-content-model.md) | Pending | Schema and production migration path verified |
| 6 | [Frontend implementation](./phase-06-frontend-implementation.md) | Pending | All routes and i18n behavior implemented |
| 7 | [Verification](./phase-07-verification.md) | Pending | Runtime, a11y, performance, and content checks pass |
| 8 | [Cloudflare deploy](./phase-08-cloudflare-deploy.md) | Pending | Wrangler deploy and production smoke checks pass |

## Success criteria

- [ ] Every public identity/contact/title claim is freshly confirmed.
- [ ] Every selected project has an approved screenshot/artifact and evidence-backed narrative.
- [ ] User approves Operating Atlas desktop and mobile prototypes before code.
- [ ] Homepage order is Identity → Operating triad → Work → Principles → Current focus → Bài Viết → Contact.
- [ ] Bài Viết does not appear before selected work.
- [ ] Vietnamese copy is direct, plain, and free of unnecessary mixed English.
- [ ] English locale has equivalent content and functional route parity.
- [ ] Empty work/current-focus sections disappear cleanly; no placeholder content ships.
- [ ] Existing article reading layout and CMS behavior remain intact.
- [ ] Keyboard, reduced-motion, responsive, contrast, and focus behavior pass verification.
- [ ] `pnpm typecheck`, `pnpm build`, and changed-contract tests pass.
- [ ] Wrangler deploy completes and all named production routes return expected responses.

## Non-goals

- Complete chronological CV
- Public repository dump
- Skill/tag cloud
- Social feed or community features
- Comments or newsletter without a moderation/operations plan
- Invented personal metrics or generic “AI visionary” positioning

## Confirmed decisions

1. Public title: **CEO CPPAI + Builder–Operator–Codifier**
2. Public location: **Thành phố Hồ Chí Minh, Việt Nam**
3. Availability status: intentionally omitted
4. Core narrative: **Xây hệ thống biến AI thành năng lực vận hành**
5. Build proof direction: **MyAgents.so**
6. Operate proof direction: include every verified and approved operational project in the Operating Atlas

## Open decisions

1. Approved portrait and project images
2. Final item-by-item asset approval

The article route decision is closed: header label **Bài Viết** / **Articles**, canonical routes `/posts` and `/en/posts`, with submenu items AI Tools, AI Coding, and AI Working.

<!-- slug: evidence-based-personal-profile -->