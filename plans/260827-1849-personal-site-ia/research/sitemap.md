# Personal site sitemap — Its'DD

Grounded in Mobbin screens/sections/flows plus live `https://itsdd.vn` (blog-first homepage, identity **Its'DD**, tagline *Góc nhìn về công nghệ, AI và hành trình kinh doanh*).

## Mobbin evidence

Cite only screens actually used. Mobbin search is SaaS-heavy; these are the personal-site hits.
| Pattern | Source | Takeaway |
|---|---|---|
| Personal profile: identity, short bio, tech-stack signals, and blog are distinct modules. | [Hashnode profile](https://mobbin.com/screens/83387cb1-7acb-445e-ae76-4685faae866d) | Homepage identity board informs the top surface. No follower statistics. |
| Personal blog archive: author-led articles in lightweight cards. | [Hashnode blog](https://mobbin.com/screens/d922b22f-ad50-4703-bfe2-b94425ca5064) | Use taxonomy signals selectively. Preserve a lean archive rather than a marketing feed. |
| One featured technical story with category navigation and a clean list below. | [Assembly blog](https://mobbin.com/screens/2ff80227-d048-4a46-954d-97c58ecdb01e) | Home writing section gets one visual feature and two compact reading rows. |
| Technical editorial cards with meaningful illustration and strict text hierarchy. | [Codecademy archive](https://mobbin.com/screens/941b094b-b438-43f2-9764-90b765c02183) | Images carry a story when content exists, not as empty decoration. |
| Chronological title-first archive with sparse image fragments. | [Substack archive](https://mobbin.com/screens/ab559473-d1dd-44d4-8332-9679d2a363a0) | Latest writing can be a low-noise date/title list. |
| Personal technology profile combines projects, technology interests, and a blog. | [Peerlist profile](https://mobbin.com/screens/e15df078-a66f-4a7e-a93e-7c28686ac7c8) | Work and focus areas belong on the personal surface. Do not import jobs/community rails. |
| Large personal bio with image and clear author identification. | [Hashnode author](https://mobbin.com/screens/83387cb1-7acb-445e-ae76-4685faae866d) | About page starts with the person, then context. |
| Giant email contact CTA. | [Wix contact](https://mobbin.com/sites/sections/85eef32e-bec1-464e-a8a7-dcd9c698c9d4) | Email remains the primary contact path. |

| Large personal identity claim with direct social proof/links. | [Polywork creative-technologist profile](https://mobbin.com/screens/8428eb79-2783-4c5e-8dc8-27e6cdd512d3) | The profile cover needs an unmistakable personal statement, not a site-name masthead. |
| Curated visual fragments form a profile, rather than an anonymous gallery. | [Portrait profile](https://mobbin.com/screens/29a2071d-4b24-46bc-b076-a0d08a586f31) | Work needs one strong personal visual composition and fewer, sharper supporting items. |
| Personal intro above selected work. | [Dribbble portfolio](https://mobbin.com/screens/68ad58dc-2800-40d6-86c4-8d31aff1735e) | Keep person-first hierarchy before work. |
| Connected creative workflow visualized as a node canvas. | [Weavy artistic-intelligence canvas](https://mobbin.com/screens/94f6c424-5dd7-470f-b852-92b58e658292) | Use connections as a personal operating map; make the interaction explain focus areas rather than decorate the page. |
| Orange atmospheric field makes an AI proposition feel distinct without default neon. | [Mistral AI frontier field](https://mobbin.com/screens/b840ac19-d0a5-4def-b2e6-ac4343050e35) | Preserve the owner's burnt-orange/earth palette while adding motion and depth. |
| Portrait dominates the hero while identity text crosses the image. | [Adobe Express personal portrait hero](https://mobbin.com/screens/58c7a1f0-c15c-44ed-b444-59cc4a63b5f9) | Use the real portrait as the primary brand asset; keep text and motion subordinate to the face. |
| One central person is surrounded by separated visual fragments and a clear creative workflow. | [Visual Electric creative workflow](https://mobbin.com/screens/7227285b-1e87-4628-b822-ca1adca474e3) | Use fragmentation as the starting point for an original portrait-decoder interaction; keep the rest of the page quiet. |

Rejected: Hashnode purple header and follower UI; Assembly SaaS header; Codecademy’s dense card grid; Peerlist community/jobs sidebar; v1’s generic editorial list; v2’s terminal/brutalist language.

Rejected as IA: Slack/Shopify people grids, Linear changelog, Vercel blog marketing, Portrait social app.

## Locked sitemap

Same path under `vi` (unprefixed) and `en` (`/en/...`). Labels localize; paths do not.

```text
/                         Home — person intro
/about                    About — long bio
/work                     Work index
/work/:slug               Work detail
/posts                    Writing index
/posts/:slug              Post
/category/:slug           Category archive
/tag/:slug                Tag archive
/search                   Search
/contact                  Contact
/rss.xml                  RSS (writing only)
/pages/:slug              Generic CMS pages (keep; redirect about)
/_emdash/admin            Admin
404
```

### Primary nav

Wordmark = site title (Its'DD), not “Trang chủ”.

| vi | en | href |
|---|---|---|
| Giới thiệu | About | `/about` |
| Dự án | Work | `/work` |
| Bài viết | Writing | `/posts` |
| Liên hệ | Contact | `/contact` |

Footer: Home, same four links, RSS, social menu, short about blurb.

### Home sections (top → bottom)

1. **Identity** — name, role/tagline, 2–3 sentence bio, CTAs to Writing / Work / Contact. Portrait only if a byline avatar exists (Curater/Perplexity default; MagicPath optional).
2. **Now** — one line. Hide if empty.
3. **Writing** — 3 latest posts as a text list + “Xem tất cả”. No featured-image hero.
4. **Work** — up to 3 projects, numbered editorial list. Hide if empty.
5. **Contact strip** — email + social. Not a second homepage.

### Page jobs

| Route | Job | Empty state |
|---|---|---|
| `/` | Answer “who is this?” in one screen | Bio still renders; writing/work sections omit |
| `/about` | Longer bio, what I do, principles | CMS required |
| `/work` | Selected projects | One-line empty copy + link to writing |
| `/work/:slug` | Case study | 404 |
| `/posts` | Writing archive (keep current list) | Keep existing empty |
| `/contact` | How to reach me | Email + social required; form optional |

## Out of scope

Now page, Uses, Speaking, Resume PDF, newsletter funnel, comments, second accent, collapsing the post three-column layout, renaming `/posts` URLs.

## Production constraint

`seed/seed.json` applies only to empty DBs. Live D1 at itsdd.vn will not pick up seed edits. Schema/menu/content on production go through admin (or export-seed after). Templates must tolerate empty `projects`.
