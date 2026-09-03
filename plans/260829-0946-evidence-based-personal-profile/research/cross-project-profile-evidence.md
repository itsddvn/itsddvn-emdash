# Cross-project profile evidence

Research date: 2026-08-29

## Scope and privacy boundary

Corpus:

- 593 Codex threads whose working directory is under `/Users/itsddvn/projects/`
- 240 direct user sessions (`cli` or `vscode`) used for inference
- 1,553 direct user messages across 37 project working directories
- archive range: 2026-05-05 through 2026-08-20
- current `itsddvn-emdash` conversation added as the latest design evidence

Excluded from personality/work-style inference:

- 37 headless `exec` threads
- delegated/subagent threads
- assistant messages, tool output, repository contents, `.env`, credentials, and secrets
- short numeric option selections when their meaning cannot be recovered safely

Method: parse only archived `event_msg.user_message` records; quantify repeated patterns; verify each proposed profile claim against messages from more than one project where possible. This is an observable working-style analysis, not a psychological diagnosis.

## Evidence-backed profile

### Core position

**Builder–operator–codifier of AI-enabled products and systems.**

- **Builder:** repeatedly moves from research and product decisions into working applications, CLIs, landing pages, content systems, integrations, and AI workflows.
- **Operator:** repeatedly asks for permissions, data linkage, auditability, deployment, production behavior, and workflows that remain useful after launch.
- **Codifier:** repeatedly turns project experience into reusable skills, frameworks, reports, handbooks, and training programs.

This is more accurate than “developer”, “blogger”, “AI expert”, or a generic founder portfolio. It describes observable work without claiming unverified success metrics.

### Working-style traits

| Trait | Evidence | Confidence |
|---|---|---|
| Outcome-driven systems thinker | Requires linked data, useful modules, permissions, acceptance conditions, and operational workflows; not isolated screens or features. | High |
| High standards, iterative taste | 194 substantive messages contain refinement/correction language; asks for repeated review until production-quality or no material issue remains. | High |
| Autonomous execution with explicit gates | Delegates classification, review, implementation, and correction; expects the agent to continue independently after scope and acceptance criteria are clear. | High |
| Pragmatic scope control | Uses MVP boundaries, defers interfaces, chooses simpler storage/architecture when sufficient, and reverses earlier choices when better evidence appears. | High |
| Evidence before commitment | Requests research, comparisons, audits, red-team checks, browser/E2E verification, and current code as source of truth. | High |
| Direct, Vietnamese-first communication | Prefers simple, understandable Vietnamese; accepts English technical terms but rejects unnecessary mixed-English phrasing. | High |
| Warm but anti-generic visual taste | Repeats yellow/orange and earth-brown direction, clean layout, friendly modern presentation; rejects output that looks obviously AI-generated, crude, generic, cluttered, or visually empty. | High |
| Product and knowledge multiplier | Builds products, then extracts reusable workflows into skills, frameworks, documentation, handbooks, or training. | High |

### Cited evidence

1. **Voice:** “Dễ hiểu, đời thường, gần gũi… ‘Tôi’… người đi trước chia sẻ kinh nghiệm thật… hiểu sâu bản chất, có framework rõ để áp dụng.”  
   `~/.codex/sessions/2026/05/30/rollout-2026-05-30T00-43-46-019e74d5-c1f5-75e0-b40b-ae3099c75e52.jsonl:244`
2. **Anti-AI-slop:** rejects a document that “nhìn rất AI”; requires clean typography, layout, and a close, quality handbook.  
   Same session, line 2050.
3. **Quality loop:** asks for serious, candid review and autonomous revision until the output is satisfactory, complete, coherent, and valuable.  
   Same session, line 692.
4. **Warm visual system:** specifies yellow and earth-brown, friendly modern design, and useful infographics.  
   Same session, line 1236.
5. **Delivery gates:** requires acceptance conditions before each phase and full verification before moving to the next phase.  
   `~/.codex/sessions/2026/05/21/rollout-2026-05-21T20-05-28-019e4aa4-1872-7753-a0cc-6f2d8cff41c8.jsonl:7`
6. **Production bar:** asks for red-team/fix loops until the application behaves like production.  
   `~/.codex/sessions/2026/05/09/rollout-2026-05-09T18-54-39-019e0c96-f02c-7de2-8aaa-aa067f50a8fb.jsonl:263`
7. **Autonomy:** after choosing the build-new direction, delegates detailed evaluation and taxonomy rather than prescribing every category.  
   `~/.codex/sessions/2026/08/20/rollout-2026-08-20T17-00-49-01a01e9d-be56-71e3-871e-698f9427197f.jsonl:55`
8. **Design before implementation:** explicitly requests research/report, plan, and design before business logic.  
   `~/.codex/sessions/2026/05/06/rollout-2026-05-06T22-15-19-019dfddb-9411-7a60-a2c0-6ac26aec6ca6.jsonl:237`
9. **Pragmatic architecture:** chooses REST for MVP, defers MCP, but preserves a shared service layer for future reuse.  
   `~/.codex/sessions/2026/05/16/rollout-2026-05-16T09-12-32-019e2e8e-8324-7c52-bedc-b14a0e278a48.jsonl:962`
10. **Operational systems:** targets a management and operating system for a software company, with linked data and role-aware modules.  
    `~/.codex/sessions/2026/05/21/rollout-2026-05-21T14-23-14-019e496a-c6ab-7fc0-95c2-3356030c220b.jsonl:67`
11. **Plain language:** asks to simplify explanation and remove excessive mixed English because it is hard to read.  
    `~/.codex/sessions/2026/08/12/rollout-2026-08-12T18-34-01-019ff5c0-3255-78f1-bfd5-8e5a3e11ca28.jsonl:541`
12. **Prior profile intent:** a 2026-05-14 profile brief identifies Nguyễn Trung Đức, CEO/Founder at CPPAI, and a workshop audience needing fast, high-quality connection. Identity, location, title, and contact details are potentially stale and must be reconfirmed before publication.  
    `~/.codex/sessions/2026/05/14/rollout-2026-05-14T10-50-36-019e249b-9535-73a0-be01-16f0c1a1be0a.jsonl:7`

Current-thread evidence adds four hard constraints:

- homepage is personal-first; blog is only one supporting surface
- visual identity must preserve warm orange/yellow and earth-brown
- profile should show the person and real work, not an abstract technology persona
- novelty without coherence is rejected; design must be distinctive because its content and interaction are personal, not because it adds effects

## Profile narrative recommendation

### One-line position

> Tôi xây, vận hành và đóng gói các hệ thống nơi AI, sản phẩm và hoạt động kinh doanh gặp nhau.

English:

> I build, operate, and codify systems where AI, products, and real business operations meet.

### Supporting narrative

1. **Build:** turn unclear problems into usable products and tools.
2. **Operate:** connect data, people, permissions, automation, and feedback into systems that survive launch.
3. **Codify:** turn lessons into reusable skills, frameworks, handbooks, and training.

### Voice

- first person, Vietnamese-first
- direct and plainspoken
- practical, specific, mildly self-aware; no motivational-copy filler
- explain the trade-off and lesson, not only the outcome
- English only for native technical nouns or the English locale

### Claims prohibited without fresh evidence

- revenue, user, customer, employee, project, or adoption metrics
- “AI expert”, “thought leader”, “serial entrepreneur”, or similar prestige labels
- current CEO/founder title, Hanoi location, phone, email, or social handles without reconfirmation
- project success, client outcomes, or testimonials not backed by a publishable source
- private-life, family, financial, or psychological claims

## Content architecture recommendation

### Homepage outcome

Within 60 seconds, a visitor should know:

1. who Đức is now
2. what kind of problems he works on
3. what he has actually built or operated
4. how he works
5. what he is exploring now
6. how to connect

### Homepage order

1. **Identity:** real portrait, current role, one-line position, location/status after confirmation
2. **Operating triad:** Build → Operate → Codify, each linked to real evidence
3. **Selected proof:** three case studies, each demonstrating a different role
4. **Working principles:** evidence, operational usefulness, explicit acceptance gates, pragmatic scope
5. **Current focus:** active experiments or questions; no invented “now” content
6. **Field notes:** maximum three recent posts
7. **Connection:** workshop/social/contact actions using confirmed channels

### Primary navigation

- Home
- Work
- Practice
- Notes
- About
- Contact

### Recommended signature interaction

**Operating Atlas**, not a generic AI animation.

A single interactive map connects real projects to the three modes Build, Operate, and Codify. Selecting a mode changes the visible evidence:

- Build → products, tools, and prototypes
- Operate → workflows, systems, integrations, deployment, and governance
- Codify → skills, frameworks, research, handbooks, and training

Every node must open a real project, artifact, decision, or field note. If real evidence is not publishable, the node does not exist. This makes the interaction unique because the underlying work graph is unique.

## Selected-proof strategy

Choose exactly three cases after the publication audit:

1. **AI/developer tooling:** one representative tool or agent-system project
2. **Operational product system:** one system connecting people, data, workflow, and permissions
3. **Knowledge codification:** one skill/framework/handbook/training system derived from real project work

Optional fourth case: a personal/creative experiment showing warmth and range. Avoid listing every repository.

Each case must answer:

- What changed?
- Why did it matter?
- What role did Đức play?
- What constraint shaped the decision?
- What proof can be shown?
- What was learned or changed next?

## Full archive inventory

| Project working directory | Direct sessions | User messages |
|---|---:|---:|
| `agentkit-product-studio` | 1 | 2 |
| `ailab` | 13 | 98 |
| `beautiFULLshot` | 3 | 17 |
| `cppai-lark` | 3 | 32 |
| `devin-skills` | 1 | 1 |
| `devin-switcher` | 20 | 184 |
| `dewee` | 4 | 7 |
| `ebook-maker` | 10 | 49 |
| `fast-test` | 2 | 5 |
| `idea-validate` | 1 | 2 |
| `itsddvn` | 1 | 1 |
| `labs/remotion.dev` | 1 | 1 |
| `landing-pro` | 5 | 32 |
| `langautrip` | 1 | 112 |
| `live/hoxuandung-healthcare` | 7 | 53 |
| `live/nguyenthanhtung-tour` | 4 | 58 |
| `lvconline/lvc-workspace` | 11 | 30 |
| `mss-academy` | 2 | 11 |
| `my-agents-web` | 15 | 98 |
| `myagents.so` | 3 | 12 |
| `myagents.so/auto-social-hermes` | 5 | 39 |
| `myagents.so/chontruong.myagents.so` | 6 | 59 |
| `myagents.so/my-agents-web` | 2 | 5 |
| `myskills` | 23 | 116 |
| `peacefullife` | 6 | 42 |
| `peacefullife/plc-app` | 8 | 39 |
| `peacefullife/plc-backend` | 46 | 263 |
| `pl-backend` | 4 | 18 |
| `ragflow` | 2 | 4 |
| `research` | 8 | 50 |
| `skills-shared` | 1 | 1 |
| `tools-managers` | 2 | 26 |
| `tte.cpp.ai.vn` | 6 | 25 |
| `tts-talk-to-experts` | 5 | 13 |
| `vmc-recruitment-web` | 6 | 39 |
| `vmcworks` | 1 | 7 |
| `wordpress-ai` | 1 | 2 |

## Unresolved questions

1. Which current public title is correct: CEO/Founder CPPAI, founder-builder, product/AI operator, or another title?
2. Which city/location is publishable now?
3. Which three projects may be shown publicly, with screenshots and outcome evidence?
4. Which portrait and personal photographs are approved?
5. Which contact/social channels remain current and public?
6. Which client/company details must stay private or anonymized?
