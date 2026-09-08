# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Template Game guide | Find the best entry point | Open Wiki / Browse Guides | Hub | Replace with the configured game's main hub intent. |
| `/wiki` | `src/data/pages/wiki-pages.ts` | Guide | Template Game wiki | Understand confirmed facts | Guides / FAQ | Hub | Keep official fact base and source context here. |
| `/guides` | `src/data/pages/guide-pages.ts` | Guide | Template Game guides | Find guide topics before launch | Wiki / Release Info | Hub | Do not invent walkthroughs before reliable details exist. |
| `/release-date` | `src/data/pages/release-pages.ts` | Guide | Template Game release date | Check release timing and platforms | FAQ / Wiki | Supporting hub | Must stay tied to official or store sources. |
| `/faq` | `src/data/pages/site-pages.ts` | Guide | Template Game FAQ | Get short answers | Release Info / Contact | Answer hub | FAQ schema enabled. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Template Game Guide | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Template Game Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |
| `/death-and-recovery` | `src/data/pages/scavland-pages.ts` | Guide | Scavland death and loot recovery | Understand what a death costs after v0.5.169 and how to get gear back | Updates / Weapons | Supporting hub | Absorbs the v0.5.169 day-one mechanic (keep equipment on death, only some backpack items lost), Explorer mode as the new death-penalty toggle, and the v0.5.169 stamina + campfire + IFAK QoL changes. Beacon-marker decay and the exact dropped-backpack subset remain explicitly unconfirmed. |
| `/vs-zero-sievert` | `src/data/pages/scavland-pages.ts` | Comparison | Scavland vs Zero Sievert | Decide whether Scavland is worth buying | Release / Factions | Supporting hub | Asserts only Scavland-side facts as confirmed; comparison axes follow the developer-pinned Steam Discussions thread. |
| `/purchase-facts` | `src/data/pages/scavland-pages.ts` | Guide | Scavland price and Early Access purchase facts | Decide whether to buy before Sep 11 or wait | Release / Updates | Supporting hub | States the $19.99 base / $17.99 introductory price with the Sep 11, 2026 discount end date, the 12-24 month EA window, NoShadow's price-stability pledge, and the Act I scope post-v0.5.169. Region-specific pricing and post-EA price moves remain unannounced. |
| `/updates` | `src/data/pages/scavland-pages.ts` | Status | Scavland updates, patch notes, and Early Access roadmap | Track v0.5.169 day-one changes, the pending v0.5.121 balance pass, and the We Hear You developer-pinned thread | Release / Death and recovery | Supporting hub | Refreshed to document v0.5.169 (Sep 5, 2026: Explorer mode, doubled stamina, campfire healing, NPC indicator reticles, IFAK stacking up to 3, reduced gun-explosion threshold from 50% to 30%, softened death mechanic); pending v0.5.121 flagged as watch-list; developer-pinned We Hear You - Changes Are Coming thread by Lucasmml surfaced as the canonical next-patch signal. v0.5.121 line items and a versioned public roadmap remain unannounced. |
| `/trader-economy` | `src/data/pages/scavland-pages.ts` | Guide | Scavland trader economy and what to sell | Liquidate loot at the right Act I trader without wasting rare barter goods | Factions / Updates | Supporting hub | Names the 9 Act I traders with location and reputation gate, lists the 4 high-profit barter goods (spark plugs, functional lighters, wire coils, weapon springs), the loot-only Mosin-Nagant, and the -300 hostile / 0 neutral reputation tier framework. Per-trader buy-price table, exact positive-tier labels, and trader map pins remain community-tracked on scavland.wiki rather than posted on the Steam store. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-date`, `/faq`
- Official facts and safe guide structure: `/wiki`, `/guides`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- Wiki should link to guide and release pages.
- Guides should link to wiki and release pages.
- Release Date should link to FAQ and official sources.
- FAQ should include all current high-demand answer pages.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
