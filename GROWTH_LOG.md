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
- Verification: `npm run verify` pending.

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
