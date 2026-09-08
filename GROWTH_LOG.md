# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-08 - Death & recovery absorbed v0.5.169 day-one changes

- Task: Refresh `/death-and-recovery` so the page reflects the post-v0.5.169 day-one build instead of the pre-patch \"fully dropped backpack + beacon recovery\" framing.
- Files changed: `src/data/pages/scavland-pages.ts` (`death-and-recovery` page body, modules, hero CTAs, relatedPageIds, lastReviewed; two new source-link constants `SCAVLAND_WIKI_UPDATES`, `VGS_V05169`, `STEAM_PINNED`; corrected `SCAVLAND_WIKI_DEATH` href to the `/guide/scavland-death-and-loot-recovery/` slug), `src/data/faq.ts` (5 existing death-and-recovery FAQs rewritten for v0.5.169 + 1 new `death-explorer-mode` FAQ), `CONTENT_INDEX.md` (`/death-and-recovery` row updated).
- URLs affected: Existing `/death-and-recovery` URL retained; no new routes. CTA retargeted to `/updates` for the patch-notes path.
- SEO/GEO changed: Page now asserts the post-v0.5.169 mechanic (equipment kept on death; only some backpack items lost) as confirmed, Explorer mode (v0.5.169) as the new death-penalty toggle, and the v0.5.169 stamina / campfire / IFAK QoL trio as confirmed. Per-item backpack drop subset and beacon decay remain explicitly unconfirmed in the fact-boundary callout.
- Source baseline: v0.5.169 patch notes mirror on vgspoilers.com, Steam Discussions developer-pinned \"We Hear You - Changes Are Coming\" thread by Lucasmml, scavland.wiki death-and-recovery guide, scavland.wiki updates page. No factual claims beyond those public sources.
- Verification: `npm run verify` (typecheck, lint, template/content/indexnow validation, build, rendered-SEO) passes locally.

### 2026-09-08 - Added /purchase-facts Early Access buy-decision page

- Task: New Early Access buy-decision answer stating the $19.99 base / $17.99 introductory price, the Sep 11, 2026 discount end date, the 12-24 month Early Access window, NoShadow's price-stability pledge, and the Act I scope post-v0.5.169. Surface from homepage and link to release-date / updates / reviews.
- Files changed: `src/data/pages/scavland-pages.ts` (new `purchase-facts` PageContent entry; reuses existing `STEAM_STORE`, `STEAM_PINNED`, `VGS_V05169` source-link constants), `src/data/faq.ts` (6 new FAQs: `purchase-price`, `purchase-discount-end`, `purchase-ea-length`, `purchase-price-stable`, `purchase-act-i`, `purchase-worth-waiting`), `src/data/pages/home.ts` (added `/purchase-facts` entity-grid card and `relatedPageIds`), `CONTENT_INDEX.md` (new `/purchase-facts` row).
- URLs affected: New `/purchase-facts` (guide, pageType `guide`). No existing URLs changed.
- SEO/GEO changed: New page carries `Article`, `BreadcrumbList`, and `FAQPage` schema, with hero CTAs cross-linking to release-date, updates, and reviews. Page opens with an explicit "fact boundary" callout covering region-specific pricing and post-EA price moves.
- Source baseline: Public sources only — Steam store AppID 3373500 (price, discount window, EA window, price-stability pledge), Steam Discussions developer-pinned "We Hear You - Changes Are Coming" thread, vgspoilers.com v0.5.169 patch notes mirror. No factual claims beyond those public sources.
- Verification: `npm run verify` pending.

### 2026-09-08 - Refreshed /updates with v0.5.169 day-one patch and We Hear You thread

- Task: Post-launch patch-notes and Early Access roadmap refresh. Document v0.5.169 (Sep 5, 2026 day-one patch: Explorer mode, doubled stamina, campfire healing, NPC indicator reticles, IFAK stacking up to 3, gun-explosion threshold reduced from 50% to 30%, softened death mechanic), flag the pending v0.5.121 balance pass as not yet a published Steam release, and surface the developer-pinned We Hear You - Changes Are Coming thread by Lucasmml as the canonical next-change-list signal.
- Files changed: `src/data/pages/scavland-pages.ts` (full refresh of `/updates` entry with v0.5.169 / v0.5.121 / We Hear You modules and a fact-boundary callout; new `SCAVLAND_WIKI_FACTIONS` source-link constant), `src/data/faq.ts` (3 new FAQs: `updates-v05169`, `updates-v05121`, `updates-pinned-thread`; updated `updates-public-roadmap` to point at the pinned thread as the next-change-list signal), `src/data/pages/home.ts` (refreshed Updates entity-grid card summary), `CONTENT_INDEX.md` (new `/updates` row reflecting the refresh).
- URLs affected: Existing `/updates` URL retained. No new routes. Hero CTA retargeted from `/reviews` to `/death-and-recovery` so the patch-notes path cross-links into the death-mechanic refresh.
- SEO/GEO changed: `/updates` now asserts the v0.5.169 day-one change set as confirmed, flags v0.5.121 trader-balance line items (Nadja's daily screw stockpile increase, Mosin-Nagant removed from Sasha's Level 0 stock) as watch-list items until Steam patch notes confirm them, and surfaces the We Hear You pinned thread as the developer-side next-change-list anchor. The fact-boundary callout explicitly marks custom map markers, increased camera zoom, quest ticks, Help With A Quest, Ratmother boss, and tongue monster tuning as watch-list items only.
- Source baseline: scavland.wiki updates page, vgspoilers.com v0.5.169 patch notes mirror, Steam Discussions developer-pinned We Hear You - Changes Are Coming thread by Lucasmml, Steam store page for AppID 3373500. No factual claims beyond those public sources.

### 2026-09-08 - Added /trader-economy Act I sell-decision page

- Task: Trader-economy sell-decision answer naming the 9 Act I traders with location and reputation gate, listing the 4 high-profit barter goods (spark plugs, functional lighters, wire coils, weapon springs) and the loot-only Mosin-Nagant, and explaining the -300 hostile / 0 neutral reputation tier framework plus the Grigory donations and Raisa courier missions as the named reputation-gain routes.
- Files changed: `src/data/pages/scavland-pages.ts` (new `trader-economy` PageContent entry; reuses existing `SCAVLAND_WIKI_FACTIONS`, `SCAVLAND_WIKI_UPDATES`, `STEAM_STORE` source-link constants), `src/data/faq.ts` (5 new FAQs: `trader-how-many`, `trader-reputation-gate`, `trader-what-to-sell`, `trader-gain-rep`, `trader-v05121`), `src/data/pages/home.ts` (added `/trader-economy` entity-grid card and `relatedPageIds`), `CONTENT_INDEX.md` (new `/trader-economy` row).
- URLs affected: New `/trader-economy` (guide, pageType `guide`). No existing URLs changed.
- SEO/GEO changed: New page carries `Article`, `BreadcrumbList`, and `FAQPage` schema, with hero CTAs cross-linking to factions, updates, and weapons & attachments. Page opens with an explicit fact-boundary callout covering per-trader buy-price table, exact positive-tier labels, and trader map pins.
- Source baseline: scavland.wiki factions page, scavland.wiki updates page (for v0.5.121 trader-balance line items), Steam store page for AppID 3373500 (10-faction reputation system confirmation). No factual claims beyond those public sources.

### 2026-09-05 - Death & recovery and Scavland vs Zero Sievert

- Task: Add `/death-and-recovery` covering what a death costs in the Act I Early Access build, the dropped-backpack mechanic, the beacon marker, and recovery-expedition prep under scarce ammo, with explicit unconfirmed markers on death-penalty magnitude, permadeath, and difficulty toggle. Add `/vs-zero-sievert` answering the developer-pinned comparison thread on Steam Discussions with the 7 concrete axes (weapons/attachments, factions, Mist anomaly, world structure, co-op roadmap, mode at launch, Early Access window), asserting only Scavland-side facts as confirmed.
- Files changed: `src/data/pages/scavland-pages.ts` (two new `PageContent` entries plus new source-link constants), `src/data/faq.ts` (10 new FAQ items: 5 death-and-recovery, 5 vs-zero-sievert), `src/data/pages/home.ts` (entity-grid and relatedPageIds), `CONTENT_INDEX.md` (two new rows).
- URLs affected: New `/death-and-recovery` (guide, pageType `guide`) and new `/vs-zero-sievert` (comparison, pageType `comparison`). No existing URLs changed.
- SEO/GEO changed: Two new pages carry `Article`, `BreadcrumbList`, and `FAQPage` schema, with hero CTAs cross-linking to combat, weapons, factions, and release-date hubs. Each page opens with an explicit "facts boundary" callout covering unconfirmed details.
- Source baseline: Public sources only — Steam store AppID 3373500, Steam Discussions (developer-pinned comparison thread and Death? thread), scavland.wiki hub and death-and-recovery guide, players.com.ua launch coverage. No factual claims beyond those public sources.
- Verification: `npm run verify` (typecheck, lint, template/content/indexnow validation, build, rendered-SEO) passes locally.

### 2026-09-04 - Adsterra integration (scavland-pro launch)

- Task: Populate the six fixed Adsterra unit values (Native Banner, 728x90, 468x60, 320x50, 160x600, Smartlink) after launch.
- Files changed: `src/data/ads.ts`.
- URLs affected: None; ad injection reuses the page-shell containers generated at launch.
- Ad baseline: All six fixed Adsterra unit values now resolve to the live placement codes; no template/structural change. The fixed AdSense ownership trio is untouched.
- Verification: `npm run verify` (typecheck, lint, template/content/indexnow validation, build, rendered-SEO) passes locally.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
