# Featured project asset inventory

Status: candidate inventory; item-by-item user approval still required  
Updated: 2026-08-29

## Asset rules

- Existing does not mean publishable. Ownership, privacy, attribution, and factual relevance must all pass.
- Prefer evidence of Đức's specific role over generic product decoration.
- Do not publish a private repository screenshot, customer record, account name, token, credential, internal URL, or proprietary screen.
- Generated diagrams are allowed only when they faithfully summarize verified public facts and are labeled as explanatory diagrams, not product screenshots.
- A portrait placeholder may appear in prototypes but never in production.

## Portrait

| Asset | State | Decision |
|---|---|---|
| Primary portrait | Missing; Đức will provide | Blocks final visual prototype and production asset approval |

## MyAgents ecosystem

### Existing public destinations

- `https://myagents.so` — publicly reachable; describes an AI-first operations ecosystem.
- Local product source: `~/projects/myagents.so/my-agents-web/`.

### Existing visual candidates

| File | What it proves | Privacy/safety review | Visual verdict |
|---|---|---|---|
| `apps/web/public/products/autosocial/campaign-schedule.png` | Campaign progress, scheduled content slots, approval/published states, and operational controls | Appears to use generic demo content; no obvious customer identity or credential visible | **Primary candidate.** Strongest evidence that MyAgents is about workflow, not just AI generation |
| `apps/web/public/products/autosocial/overview-dashboard.png` | Workspace summary, running campaign, content and knowledge entry points | Contains generic `User` / `Profile1`; no obvious private data | Supporting candidate; crop or replace generic profile labels before final use if possible |
| `apps/web/public/products/autosocial/content-editor-ai-media.png` | AI-assisted content production | Must inspect before approval | Candidate for Build detail, not homepage hero |
| `apps/web/public/products/autosocial/social-connections.png` | Connected-channel operations | Must inspect accounts and handles before approval | Hold until sanitized review |
| `apps/web/public/products/autosocial/ai-generation-progress.png` | Generation state and progress | Must inspect for demo/private content | Supporting candidate only |
| `apps/web/public/landing/*.png` | Brand-level explanation of fragmented operations, self-hosting, and workflow control | Already served publicly by `myagents.so` | Safe as supporting illustration; weaker than a real product screen |
| `apps/web/public/products/autosocial-logo.png` | Product identity | Public-site asset | Safe supporting mark after brand-use approval |

### Recommended case visual set

1. Campaign schedule screenshot — operational proof.
2. One sanitized editor or connection screen — product flow.
3. Compact diagram: knowledge → draft → review → schedule → publish → observe. Build only from verified behavior.
4. Public MyAgents site link.

## GoClaw / Dewee contribution

### Existing public destinations

- `https://github.com/itsddvn/goclaw` — publicly reachable fork/repository.
- Seven public non-merge commits are directly attributable to the user-confirmed author names `ntduc` or `dcppsw`:
  - `53cd9ce91b82` — provider connectivity verification and onboarding placeholders
  - `e1c2a9208e6c` — executable path-policy exemptions
  - `bd158175d064` — team chat-scope crash prevention
  - `19ff0b2a250b` — active-agent visibility in chat
  - `882cfd549ff8` — provider model display
  - `1aa46e0f6a0b` — provider warning in the overview
  - `321a8f28935d` — outbound dispatcher startup ordering
- `https://github.com/nextlevelbuilder/dewee` returned 404 during audit; do not use as a public destination.

### Attribution correction

- The user confirmed public Git identities `@itsddvn` and `dcppsw`, and commit author names `ntduc` and `dcppsw`.
- GoClaw PR #1048 belongs to `@vanducng`, another person. It is prohibited as personal evidence.
- Local Dewee history contains 43 exact confirmed-author commits across all refs, including 37 non-merge entries for Zalo OA setup, callback/consent flows, webhook transport, tenant pairing/handoff, hooks, tracing, tests, and integration. These facts may inform copy, but the private repository cannot be linked.

### Existing visual candidates

| File/source | What it proves | Privacy/safety review | Visual verdict |
|---|---|---|---|
| `_statics/goclaw-logo.svg` | Project identity | Public repository asset | Safe supporting mark with project attribution |
| `_statics/architecture.jpg` | Platform-level architecture | Public repository asset; not specific to Đức's contribution | Use only as context, not personal proof |
| `_statics/agent-teams.jpg` | Shared task board/mailbox orchestration | Public repository asset; generic project capability | Supporting context only |
| `_statics/goclaw_multi_tenant.png` | Multi-tenant platform structure | Public repository asset; generic project capability | Supporting context only |
| Seven verified public commits | Specific attributable GoClaw contribution | Public and authored by confirmed identities | **Primary evidence candidate.** Present as a contribution ledger with links, not a raw activity metric |
| Local `dewee/_statics/*` | Dewee architecture and product identity | Source repository is not publicly reachable; rights/status unclear | Hold; do not publish until explicitly approved |

### Recommended case visual set

1. A contribution ledger for the seven verified public GoClaw commits: problem, intervention, operational effect, and source link.
2. GoClaw logo plus one public architecture diagram for platform context.
3. A sanitized Dewee contribution summary without source links or private assets.
4. No PR #1048 reference, screenshot, or claim.

## myskills + PDM Kit

### Existing public destinations

- `https://github.com/itsddvn/skills-shared` — publicly reachable; contains the public Idea Validator skill and catalog validation tooling.
- `https://github.com/itsddvn/skills` returned 404 during audit; treat the source catalog as private.
- PDM Kit has no configured public origin in the audited checkout.

### Existing visual candidates

| File/source | What it proves | Privacy/safety review | Visual verdict |
|---|---|---|---|
| Public `skills-shared` repository | A maintained public skill, tests, references, assets, and install flow | Public and MIT licensed | **Primary public evidence candidate** |
| `myskills/README.md` workflow | Private source → validate → isolated test → mirror → attest → publish | Private source documentation; can be summarized without exposing catalog inventory | Create a sanitized explanatory diagram |
| `project-docs-management/README.md` | Seven-phase technical docs plus legal generation, validation, and DOCX export | Contains company and project examples; do not reproduce those records | Create a generic seven-phase process visual with no company/client names |
| `myskills/.../feedback-loop.png` | Fixture-level feedback-loop illustration | Not representative enough of the full case | Do not use as featured proof |

### Recommended case visual set

1. Public `skills-shared` repository card linked to the Idea Validator source.
2. Sanitized diagram: field lesson → skill contract → deterministic checks → isolated test → public/private routing → reusable capability.
3. Sanitized PDM workflow: requirements → system design → development → testing → packaging → deployment → release, with validate/export around the flow.
4. No screenshot of the private catalog, company metadata, contract templates, or client folders.

## Supporting public assets

These are not part of the featured trio but can strengthen the Work/Practice surfaces after approval:

| Project | Existing evidence | Suggested use |
|---|---|---|
| BeautyFullShot | Public website, public GitHub identity in README, product screenshots and release history | Independent product/craft strip |
| Devin Switcher | Public npm/GitHub instructions and complete CLI behavior in README | Small developer-tool node |
| STM | Strong local product/release/security evidence; public accessibility not yet verified | Current-focus or “building now” node after status approval |
| Nexus | Complete local teaching console and evidence-led deployment docs | Practice/teaching node with explicit context |

## Assets that must not be used

- any `.env`, credential, token, API key, test account, internal host, or private repository URL
- private client/admin screenshots
- screenshots containing real customer/member/applicant/order data
- local Git statistics rendered as achievement metrics
- Dewee private assets before permission
- private `myskills` catalog contents
- PDM company records, contracts, legal documents, or client directory names
- generated portrait or invented project mockup presented as real evidence

## Approval checklist

- [ ] Portrait received and approved
- [ ] MyAgents campaign schedule approved
- [ ] Secondary MyAgents screenshot selected and sanitized
- [x] `@vanducng` removed from the GoClaw story; user confirmed it is another person
- [ ] Correct seven-commit GoClaw contribution ledger approved
- [ ] Dewee naming/public-link limitation approved
- [ ] skills-shared public repository card approved
- [ ] Sanitized skills workflow diagram approved
- [ ] Sanitized PDM workflow diagram approved
- [ ] Every final asset has alt text, ownership basis, destination, and crop specification
