---
title: "Phase 3: Information architecture"
status: todo
---

# Phase 3: Information architecture

## Outcome

Turn approved content into a route, navigation, and page hierarchy that serves personal connection before content browsing.

## Requirements

- Homepage: Identity → Build/Operate/Codify → Selected Work → Principles → Current Focus → Bài Viết → Contact.
- Primary navigation: Home, Work, Practice, Bài Viết/Articles, About, Contact.
- Bài Viết/Articles is the parent route for a submenu containing AI Tools, AI Coding, and AI Working.
- Preserve `/posts`, search, category, tag, RSS, and article-detail behavior.
- Keep Vietnamese default and equivalent `/en` routes.
- Empty optional sections disappear without fake fallback data.

## Route contract

```text
/
/work
/work/:slug
/practice
/posts
/posts/:slug
/about
/contact
/search
/category/:slug
/tag/:slug
/rss.xml
/en/* equivalent
```

## Steps

1. Map every approved content item to one owning route.
2. Define homepage density and 60-second comprehension sequence.
3. Define Operating Atlas information states and destination links.
4. Define mobile linear alternative and reduced-motion content order.
5. Apply the approved [blog information architecture](./research/blog-information-architecture.md) to navigation and route contracts.
6. Define page titles, descriptions, canonical URLs, and social-preview needs.
7. Test the sitemap against workshop contact, potential client, peer builder, and reader journeys.
8. Stop for user approval.

## Deliverables

- final sitemap
- page-content matrix
- navigation and canonical-route contract
- blog taxonomy and submenu interaction contract

## Success criteria

- [ ] A workshop contact can identify and connect in under 60 seconds.
- [ ] A potential collaborator can find proof and role boundaries without reading posts.
- [ ] A reader can still find articles, search, taxonomy, and RSS.
- [ ] Bài Viết/Articles exposes AI Tools, AI Coding, and AI Working through an accessible submenu and category routes.
- [ ] No content is duplicated without a clear canonical owner.
- [ ] User approves IA before visual prototypes.
