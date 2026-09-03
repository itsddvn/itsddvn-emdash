# Project portfolio audit

Research date: 2026-08-29

## Purpose

Identify projects under `~/projects` that can credibly support Nguyễn Trung Đức's public profile as **CEO CPPAI + Builder–Operator–Codifier**. Separate projects initiated from scratch, substantial contributions, light participation, duplicates, and repositories that provide no authorship evidence.

This is a candidate audit, not publication approval. Client names, screenshots, metrics, internal architecture, and outcomes remain private until explicitly cleared.

## Method

- Discovered 50 Git repository roots under `~/projects` while excluding dependency/build directories.
- Inspected each repository's origin, root commit, current/all-ref history, and README or product docs where the project ranked as a candidate.
- Matched only the user-confirmed Git author names `ntduc` and `dcppsw`; overlapping histories were deduplicated by commit hash. `Duc Nguyen` was excluded after the user confirmed that public GoClaw author `@vanducng` is another person.
- Cross-checked project intent against direct user-message evidence from the Codex session archive.
- Treated commit count only as participation evidence. It does not prove ownership, business impact, quality, or current production status.
- Classified duplicate clones/worktrees once. Did not treat upstream Dify/RAGFlow history as Đức's work.

## Strongest public-profile candidates

### 1. MyAgents ecosystem — recommended primary **Build** story

**Why it stands out**

- The public web repository describes an ecosystem landing page, AutoSocial product booking, support tools, PayFS/VietQR reconciliation, authentication, product plans, vouchers, orders, and payment state (`myagents.so/my-agents-web/README.md`).
- Fifteen commits across the local all-ref history have the exact confirmed author name `ntduc`. Authored work includes persisted application state, PayFS hardening, mobile checkout, production Compose fixes, and admin-plan UX. The root author name is ambiguous and is not used as personal evidence.
- Archived decisions show product-level ownership: ecosystem structure, per-product landing pages, admin-owned pricing, booking, deployment, and a reusable platform core.

**Public framing**

> Khởi tạo và dẫn dắt một hệ sinh thái sản phẩm AI từ trang giới thiệu đến booking, thanh toán, vận hành sản phẩm và các workflow chuyên biệt.

**Boundary**

Do not imply sole authorship of AutoSocial core. Present Đức as product initiator/technical operator and name team contribution where appropriate.

### 2. GoClaw / Dewee — recommended primary **contribution** story

**Why it stands out**

- GoClaw is a multi-tenant AI agent platform with agent orchestration, tenant isolation, permission layers, channels, scheduling, and observability (`goclaw/goclaw-core/README.md`).
- 130 unique commits across local all-ref history have the exact confirmed author names `ntduc` or `dcppsw`; most are integration/merge history. Seven non-merge public GoClaw changes are directly attributable.
- Verified public GoClaw changes cover provider-connectivity checks, onboarding placeholders, path-policy exemptions, team-scope crash prevention, active-agent visibility, provider display, and outbound dispatcher startup.
- The Dewee lineage adds 43 exact-author commits across all refs, including 37 non-merge entries covering Zalo OA setup, callback capture, consent flow, webhook transport, tenant pairing/handoff, hooks, tracing, tests, and upstream integration. Its source is not publicly reachable.

**Public framing**

> Đóng góp cho các nền tảng AI agent đa tenant, tập trung vào onboarding, khả năng vận hành, tích hợp kênh, phân quyền và các đường lui an toàn khi hệ thống gặp lỗi.

**Boundary**

Use “contributor”. Link only public commits authored by `ntduc` or `dcppsw`; PR #1048 belongs to another person and is prohibited as personal evidence. Never claim founder, creator, or sole maintainer.

### 3. PeacefulLife platform — strongest long-running **Operate** evidence

**Why it stands out**

- 155 unique commits across local all-ref history have the exact confirmed author names `ntduc` or `dcppsw`; the root author identity is ambiguous, so no from-scratch claim is made.
- Current repository and archived work show a mature operational domain: membership, wallet, benefits, payments, bank accounts, booking, admin workflows, reporting, notifications, permissions, queue/cron, and CI/CD.
- Verified recent authored changes include membership reports, payment/admin flow, secure OTP campaigns, beneficiary workflows, bank-account management, and production support.

**Public framing**

> Đóng góp lâu dài cho một nền tảng nghiệp vụ phức tạp, nơi thanh toán, thành viên, dịch vụ, báo cáo và quản trị phải hoạt động cùng nhau.

**Boundary**

High confidentiality risk. Publish only after the client/company name, screenshots, role, time range, and allowed outcomes are approved. The repository contains sensitive operational material and must never be linked or quoted directly.

### 4. STM — strongest current from-scratch **systems engineering** project

**Why it stands out**

- All 24 commits in current history match `ntduc`; the root commit is also authored by `ntduc`.
- STM is a local-first Tauri/Rust tool manager for developer tools, global AI skills, and MCP bindings (`tools-managers/README.md`).
- The repository documents fail-closed mutation plans, consent, executable identity checks, durable receipts, portable setup, signed catalogs, encrypted MCP backups, updater verification, and cross-platform lifecycle testing.

**Public framing**

> Xây một control plane cục bộ cho công cụ AI: cài đặt có review, bằng chứng sau thao tác, bảo mật credential và khả năng khôi phục thay vì “chạy lệnh rồi hy vọng”.

**Boundary**

Strong technical proof, but recent. Label release status precisely; do not call it broadly adopted or production-proven without evidence.

### 5. BeautyFullShot — strongest independent public product

**Why it stands out**

- Đức authored the root commit as `dcppsw`; 107 of 133 all-ref commits have the exact confirmed author names.
- Public cross-platform Tauri product with screenshot capture, annotation, visual styling, export, native integration, and auto-update (`beautiFULLshot/README.md`).
- Has a public website and visible artifact, making it easier to verify than client systems.

**Public framing**

> Một sản phẩm desktop hoàn chỉnh đi từ trải nghiệm chỉnh ảnh đến native integration, release đa nền tảng và auto-update.

**Boundary**

Good supporting case for range and craft. It is less central to the AI-operations narrative than MyAgents, GoClaw, or STM.

### 6. VMCWorks — substantial marketplace contribution

**Why it stands out**

- Ninety-four commits across local all-ref history have the exact confirmed author names; the root author identity is ambiguous, so no from-scratch claim is made.
- The product connects candidates, companies, and headhunters (`vmc-recruitment-web/README.md`).
- Verified authored evidence includes candidate–job matching, candidate dashboards, matching caches, SEO/privacy safeguards, deployment parity, and durable product documentation.

**Public framing**

> Phát triển một marketplace tuyển dụng nhiều vai trò, bổ sung matching để biến dữ liệu ứng viên–công việc thành luồng hành động cho người dùng và admin.

**Boundary**

Client/company publication approval required.

### 7. myskills + PDM Kit — recommended primary **Codify** story

**Why it stands out**

- `myskills`: 14/14 matched commits. It is the source of truth for reusable agent skills, validation, visibility, isolated tests, safe public mirroring, and installation workflows (`myskills/README.md`).
- `project-docs-management`: 44/44 matched commits. It turns software requirements into a controlled seven-phase technical/legal documentation workflow with templates, validation, and DOCX export (`project-docs-management/README.md`).
- Archived sessions show the same repeated pattern: extract lessons from real delivery, critique the workflow, then package it for reuse.

**Public framing**

> Không dừng ở việc hoàn thành dự án; biến cách làm đã kiểm chứng thành skill, quality gate và hệ thống tài liệu để lần sau làm nhanh hơn nhưng không lỏng hơn.

**Boundary**

Show only skills classified public. Do not expose private catalog names, company metadata, contracts, or client records.

## Recommended homepage proof structure

Do not force every project into equal-size cards.

1. **Featured Build — MyAgents ecosystem**  
   Founder/product-system story: problem → product family → booking/payment → operational feedback loop.
2. **Featured Contribution — GoClaw / Dewee**  
   Specific contribution story: Zalo channels + security + multi-tenant operational safeguards. Clearly label contributor role.
3. **Featured Codification — myskills + PDM Kit**  
   Show how project delivery becomes reusable operating knowledge.
4. **Operating Atlas — all verified operational systems**  
   Smaller evidence nodes for PeacefulLife, CPPAI Lark Company OS, VMCWorks, AI Thực Chiến, Talk to Experts, TVNus, AutoSocial, STM, LVC Workspace, Nexus, and other approved projects. Every node must state role and publication boundary.
5. **Independent products strip**  
   BeautyFullShot, Devin Switcher, STM, Langautrip, and selected live-build experiments demonstrate range without diluting the core narrative.

This replaces the earlier “exactly one Operate case” assumption. The homepage keeps three featured narratives for comprehension, while the Operating Atlas can expose every verified and approved operational project.

## Operating Atlas candidates

| Project/system | Operational evidence | Current publication state |
|---|---|---|
| MyAgents ecosystem | Products, plans, booking, orders, vouchers, PayFS reconciliation, deployment | Candidate; user selected MyAgents as Build proof |
| GoClaw / Dewee | Tenancy, permissions, channels, scheduling, observability, Zalo operations | Candidate; contributor role must be confirmed |
| PeacefulLife | Membership, wallet, payment, booking, admin, reporting, queues, CI/CD | Candidate; client approval required |
| CPPAI Lark Company OS | Sales–Delivery–Finance–People–AI data linkage, permissions, dashboards, audit | Candidate; internal detail must be reduced |
| VMCWorks | Candidate/job marketplace, matching workflows, admin and deployment | Candidate; client approval required |
| AI Thực Chiến | Lead qualification, admin review, email/OTP, CI/CD deployment | Candidate; community/member data stays private |
| Talk to Experts | Accounts, booking, vouchers, expert availability, auth/recovery, deployment | Candidate; product role and public name need confirmation |
| TVNus | Orders, payment, tracking, queues, admin and notification integration | Candidate; business claim and name require approval |
| AutoSocial | Knowledge, AI generation, creator–assistant approval, publish, analytics, admin | Candidate; team attribution required |
| STM | Reviewed tool lifecycle, signed artifacts, receipts, recovery, MCP bindings | Candidate; release status must be exact |
| LVC Workspace | Customer workflow, reporting, invoice integration, delivery review | Candidate; client approval required |
| Nexus | Product/variant catalog, imports, private delivery files, D1/R2 and evidence-led deployment | Candidate; teaching context should be disclosed |
| Devin Switcher | Account isolation, quota probing, selection, retry and rotation | Public supporting node |
| AI Lab / community operations | Qualification, admin approval, email communication, deployment | Candidate; avoid personal applicant data |
| Landing Pro | Product/site management, pricing, orders, voucher, payment and reusable deployment | Prototype/supporting node |
| BeautyFullShot | Release, update, native permissions and cross-platform packaging | Public supporting node |

## Full 50-repository inventory

| Repository | Evidence classification |
|---|---|
| `Build-In-Public-Projects` | Git repository without a readable HEAD; no contribution claim |
| `agent-chatbot` | Git repository without a readable HEAD; no contribution claim |
| `agentkit-product-studio` | External-origin curriculum repository; no matched authored commit in current history; role unproven |
| `ailab` | 15/25 exact confirmed-author commits; product-lead evidence also exists in archived decisions; root identity is ambiguous |
| `auto-marketing` | Root authored by `ntduc`; one planning commit; early concept only |
| `auto-social` | Team product; no exact confirmed-author commit in current local history; product-lead evidence exists only in archived decisions |
| `auto-social-hermes` | Duplicate lineage of MyAgents AutoSocial; no exact confirmed-author commit; do not count separately |
| `beautiFULLshot` | Root authored by `dcppsw`; 107/133 exact confirmed-author commits; strong original project |
| `builder-labs` | Git repository without a readable HEAD; no contribution claim |
| `core-chatbot` | Root authored by `dcppsw`; 9/18 matched commits; original/shared project |
| `cppai-lark` | Root and sole commit authored by `ntduc`; original operating-system documentation project |
| `devin-switcher` | Root authored by `ntduc`; 36/36 matched commits; strong original tool |
| `dewee` | Root authored by another contributor; 43/968 exact confirmed-author commits, including 37 non-merge entries; significant contributor candidate |
| `dewee-pr497` | Duplicate/review checkout of Dewee; exclude from portfolio count |
| `dify` | Upstream clone; no matched contribution; research/reference only |
| `ebook-maker` | Content-rich workspace but Git HEAD unavailable; archived work proves process involvement, not commit authorship |
| `goclaw/goclaw-core` | Root authored by another contributor; 130/2363 exact confirmed-author commits, including seven non-merge public changes; contributor candidate |
| `goclaw/goclaw-deploy` | 90/137 exact confirmed-author commits; root identity is ambiguous; major deployment contribution |
| `goclaw-docker` | Upstream/packaging checkout; not a distinct portfolio story |
| `itsddvn-emdash` | Imported template root plus 5/6 matched commits; current profile implementation, not prior proof |
| `landing-pro` | Root authored by `ntduc`; 2/2 commits; prototype/framework candidate |
| `langautrip` | Root authored by `ntduc`; 31/31 commits; strong independent creative project |
| `live/hoxuandung-healthcare` | Root authored by `ntduc`; 3/3 commits; small client/live-build candidate |
| `live/nguyenthanhtung-tour` | Root authored by `ntduc`; 1/1 commit; small client/live-build candidate |
| `lvconline/lvc-workspace` | Root authored by another contributor; 3/1474 exact confirmed-author commits; light code contribution plus delivery/review involvement |
| `mss-academy` | Root authored by another contributor; no exact confirmed-author commit; delivery involvement requires other evidence |
| `myagents-chatbot` | Git repository without a readable HEAD; no contribution claim |
| `myagents-landing` | Earlier checkout of the MyAgents web lineage; count with `myagents.so/my-agents-web` |
| `myagents.so/auto-social-hermes` | Team project; 2/539 exact confirmed-author commits; product/technical leadership needs attribution evidence |
| `myagents.so/customer-portal` | Team project; no matched commit in current history; no public claim yet |
| `myagents.so/my-agents-web` | 15/46 exact confirmed-author commits; product-lead candidate; root identity is ambiguous |
| `myagents.so/tvnus.myagents.so` | 35/40 exact confirmed-author commits; strong operational product contribution; root identity is ambiguous |
| `myskills` | Root authored by `ntduc`; 14/14 commits; strong original codification system |
| `nexus-handson` | Root authored by `ntduc`; 2/2 commits; complete but recent teaching/operations console |
| `peacefullife/plc-app` | Root authored by another contributor; 4/778 exact confirmed-author commits; supporting mobile contribution |
| `peacefullife/plc-backend` | 155/4296 exact confirmed-author commits; strongest long-running operational contribution; root identity is ambiguous |
| `personal-brand-builder` | Root and sole commit authored by `ntduc`; early codification artifact |
| `pl-backend` | Duplicate checkout of PeacefulLife backend; exclude from portfolio count |
| `project-docs-management` | Root authored by `dcppsw`; 44/44 commits; strong original codification system |
| `ragflow` | Upstream clone; no matched contribution; research/reference only |
| `skills-shared` | 8/9 exact confirmed-author commits; public mirror supporting `myskills`; root identity is ambiguous |
| `skkn-mr-tranvancong` | Git repository without a readable HEAD; document workspace only |
| `social-automation-plugin` | Root authored by another contributor; no matched commit; no public claim |
| `thuviennuskin` | Root authored by `ntduc`; 3/3 commits; small documentation/product setup |
| `tools-managers` | Root authored by `ntduc`; 24/24 commits; strong original systems project |
| `tte.cpp.ai.vn` | 36/275 exact confirmed-author commits; substantial product contribution; root identity is ambiguous |
| `tts-talk-to-experts` | Duplicate/current lineage of the same TTE origin; count once |
| `vmc-recruitment-web` | 94/2685 exact confirmed-author commits; substantial product contribution; root identity is ambiguous |
| `worktrees/dewee-zalo-oa-review-followups` | Worktree of Dewee; exclude from portfolio count |
| `zalo-crm` | Root authored by another contributor; 1/9 matched commits; light contribution |

## Projects not recommended as primary proof

- `dify`, `ragflow`: upstream research clones, not authored work.
- Duplicate worktrees/checkouts: they inflate activity but add no distinct story.
- One-commit planning/landing repositories: useful as range, weak as flagship proof unless the deployed result is verified.
- Repositories with no readable HEAD or no matched authorship: require separate role evidence before use.
- Client systems without explicit publication approval: keep out of public routes even when the technical evidence is strong.

## Evidence gaps to close before publication

1. Confirm the public role wording for GoClaw and Dewee.
2. Confirm which client names may be shown: PeacefulLife, VMCWorks, LVC, Talk to Experts, TVNus, and healthcare/travel builds.
3. Confirm whether `dcppsw` is a public author identity that may be associated with Đức.
4. Supply or approve screenshots, repository links, live URLs, and artifact links for each selected case.
5. Replace README-stated impact metrics with live or documentary proof before publication.
6. Decide whether current unreleased work such as STM should be labeled “đang xây”, “private beta”, or another exact status.
