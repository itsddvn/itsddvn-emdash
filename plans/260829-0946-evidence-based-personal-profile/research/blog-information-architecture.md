# Blog information architecture

Status: approved direction; implementation pending visual/source gates  
Updated: 2026-08-29

## User decision

The header has one parent menu:

- **VI:** Bài Viết
- **EN:** Articles

Its submenu contains exactly these three primary editorial sections:

1. **AI Tools**
2. **AI Coding**
3. **AI Working**

This is a navigation hierarchy, not three independent primary-nav items.

## Route contract

| Locale | Parent | AI Tools | AI Coding | AI Working |
|---|---|---|---|---|
| Vietnamese | `/posts` | `/category/ai-tools` | `/category/ai-coding` | `/category/ai-working` |
| English | `/en/posts` | `/en/category/ai-tools` | `/en/category/ai-coding` | `/en/category/ai-working` |

Keep `/posts` as the canonical article route. Do not introduce `/notes` aliases or redirects unless a later requirement needs them.

## Taxonomy contract

Use the existing EmDash taxonomy name **`category`** exactly. It is already hierarchical in `seed/seed.json`; do not create a second taxonomy such as `categories`, `blog_category`, or `section`.

The three editorial sections are sibling category terms. “Bài Viết” / “Articles” is the menu parent and index route, not another category term.

Recommended bilingual terms:

| Shared concept | English term | Vietnamese term | Slug |
|---|---|---|---|
| Tools | AI Tools | AI Tools | `ai-tools` |
| Coding | AI Coding | AI Coding | `ai-coding` |
| Work | AI Working | AI Working | `ai-working` |

Preserve the exact visible labels requested by the user in both locales. Category descriptions carry the Vietnamese/English explanation.

## Editorial definitions

### AI Tools

**Question:** Công cụ này giúp việc gì, dùng trong workflow nào, và đâu là giới hạn thật?

Includes:

- tool discovery and comparison
- setup, configuration and integration
- practical usage patterns
- tool lifecycle, security and operational constraints
- lessons from building tools such as STM, Devin Switcher or BeautyFullShot

Does not become a feature-list or affiliate-review section. Every article should state the task, context, trade-off and observed limitation.

### AI Coding

**Question:** AI thay đổi cách xây phần mềm như thế nào mà không làm lỏng chất lượng?

Includes:

- coding agents and agent workflows
- architecture and system design with AI assistance
- debugging, testing, review and verification
- context management and multi-agent coordination
- shipping, deployment and production failure modes
- concrete code or contribution lessons from GoClaw, Dewee and other approved systems

Avoid generic prompt lists without a code, runtime or process example.

### AI Working

**Question:** Làm thế nào để AI trở thành năng lực vận hành của một người, đội ngũ hoặc doanh nghiệp?

Includes:

- product and workflow design
- people, roles, permissions and handoffs
- data linkage, automation and feedback loops
- adoption, governance and operational change
- MyAgents and anonymized company-system lessons
- decision frameworks and ways to codify organizational knowledge

This section connects the blog directly to the CEO-first profile narrative.

## Classification rules

1. Every article has one primary category among AI Tools, AI Coding and AI Working.
2. Tags remain cross-cutting descriptors; they do not duplicate the category hierarchy.
3. When an article spans sections, choose the visitor question it answers best and use tags for the secondary angle.
4. Category landing pages explain their editorial question before listing posts.
5. Empty categories remain hidden from production navigation until at least one real published article exists, unless the user explicitly approves an empty-state launch.
6. Existing `development`, `design`, `notes` and translated terms are migration inputs, not automatic aliases. Audit every current post before recategorization.
7. Never reseed production D1 to force taxonomy changes. Apply approved content changes through the supported EmDash admin/CLI path.

## Header interaction contract

### Desktop

- “Bài Viết” / “Articles” links to the full article index.
- A visible disclosure indicator communicates the submenu.
- Submenu opens through pointer and keyboard focus; it is not hover-only.
- `Escape` closes it and restores focus to the parent trigger.
- Focus can move through AI Tools → AI Coding → AI Working in document order.

### Mobile

- The parent remains a direct route to the full article index.
- A separate disclosure control expands/collapses the three child links.
- Expanded state is announced with `aria-expanded`.
- Tapping a child closes the navigation.

### Reduced motion and no JavaScript

- Motion is optional; hierarchy and links remain usable without animation.
- Server-rendered markup exposes all destinations when JavaScript enhancement is unavailable.

## Homepage relationship

- The homepage Bài Viết area remains after selected work, principles and current focus.
- Show at most three recent articles.
- Each card displays its primary section label: AI Tools, AI Coding or AI Working.
- Add one “Xem tất cả Bài Viết” action to `/posts`.
- Do not render three separate article feeds on the homepage.

## Blog index contract

The `/posts` and `/en/posts` pages include:

1. page title and short editorial promise
2. three section entry points
3. latest/all articles list
4. section label on each article
5. optional tag chips as secondary filters

Do not turn the index into a dashboard. The article reading experience remains the existing editorial three-column layout on desktop.

## Proposed index copy

### Vietnamese

**Bài Viết**

Ghi chép từ công việc thật: công cụ tôi dùng và xây, cách AI thay đổi việc phát triển phần mềm, và cách đưa AI vào vận hành của một đội ngũ hoặc doanh nghiệp.

- **AI Tools** — Công cụ, cách dùng, tích hợp và giới hạn thực tế.
- **AI Coding** — Coding agent, kiến trúc, kiểm thử, review và shipping.
- **AI Working** — Sản phẩm, workflow, dữ liệu, con người và vận hành với AI.

### English

**Articles**

Field notes from real work: tools I use and build, how AI changes software development, and how teams turn AI into an operating capability.

- **AI Tools** — Tools, usage, integration, and practical limits.
- **AI Coding** — Coding agents, architecture, testing, review, and shipping.
- **AI Working** — Products, workflows, data, people, and AI-enabled operations.

## Acceptance criteria

- [ ] Header contains one Bài Viết / Articles parent with the three requested submenu items.
- [ ] Parent and child routes work in Vietnamese and English.
- [ ] Existing `category` taxonomy is reused; no parallel classification system appears.
- [ ] Menu is keyboard, touch, reduced-motion and no-JavaScript accessible.
- [ ] Every migrated article has one reviewed primary section.
- [ ] No live D1 content is overwritten by seed.
- [ ] Empty categories do not create placeholder-looking production pages.
