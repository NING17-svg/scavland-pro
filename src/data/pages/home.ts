import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const LAST_REVIEWED = "2026-09-04";

const STEAM_STORE = {
  label: "Steam store page for Scavland (AppID 3373500)",
  href: "https://store.steampowered.com/app/3373500/Scavland/",
  description: "Official Steam store listing used as the canonical current-game fact source.",
};

const OFFICIAL_SITE = {
  label: "Official Scavland site (scavland.com)",
  href: "https://scavland.com/",
  description: "Developer NoShadow landing page and community cross-links.",
};

const STEAM_COMMUNITY = {
  label: "Steam Community hub for Scavland (AppID 3373500)",
  href: "https://steamcommunity.com/app/3373500",
  description: "Steam Discussions, news feed, and update announcements.",
};

const DISCORD_LINK = {
  label: "Official Scavland Discord invite",
  href: "https://discord.com/invite/scavland",
  description: "Canonical chat destination cross-linked from the Steam store and official site.",
};

const X_LINK = {
  label: "Official X handle (@Scavland_)",
  href: "https://x.com/Scavland_",
  description: "Short devlog updates, release countdowns, and patch notes.",
};

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "split-panel" },
  h1: "Scavland Game: The Early Access Survival RPG from NoShadow",
  seoTitle: "Scavland Game: Steam Early Access Survival RPG by NoShadow",
  metaDescription:
    "Scavland game launches in Steam Early Access on Sep 4, 2026. Explore the post-apocalyptic Soviet survival RPG from NoShadow, plus release, demo, and factions.",
  summary:
    "Launch hub for Scavland, the hardcore top-down pixel art survival RPG on Steam AppID 3373500 by developer NoShadow. Covers the Early Access release window, demo, system requirements, factions, weapons, quests, multiplayer status, and community channels.",
  hero: {
    eyebrow: "Launch hub",
    subtitle: site.tagline,
    ctas: [
      { label: "Release date", href: "/release-date" },
      { label: "Demo access", href: "/demo" },
      { label: "System requirements", href: "/system-requirements" },
    ],
  },
  quickAnswer:
    "Scavland is a hardcore top-down pixel art survival RPG set in a Post-Apocalyptic Soviet world, developed by NoShadow with co-publisher UNSUBSCRIBE. It is planned to launch in Steam Early Access on Sep 4, 2026 for Windows PC, with Steam Deck compatibility. The demo entry for Scavland (Steam AppID 3374510) is not yet labeled as a public, playable demo as of 2026-09-04 — check the Steam store page and the Steam Community hub for updates. Eleven interface languages are supported.",
  keyFacts: [
    { label: "Early Access release", value: "2026-09-04 (Steam AppID 3373500)" },
    { label: "Developer", value: "NoShadow" },
    { label: "Co-publisher", value: "NoShadow + UNSUBSCRIBE" },
    { label: "Mode at launch", value: "Single-player; co-op planned in future updates" },
    { label: "Supported languages", value: "11 interface + subtitle locales" },
  ],
  modules: [
    {
      id: "home-what-is",
      type: "prose",
      heading: "What Scavland Game Is and Why It Matters",
      body:
        "Scavland is a single-player hardcore survival RPG viewed from a top-down pixel art perspective, set across a handcrafted open world and procedural underground bunkers in a Post-Apocalyptic Soviet setting. NoShadow develops it, with UNSUBSCRIBE listed as co-publisher on the Steam store entry. Survival systems include crafting, looting, traders, contracts, and a faction reputation layer spanning ten in-game factions.\n\nCombat is built around tactical firearms, melee, stealth, and weapon suppression, supported by a 25+ weapon arsenal with 300+ attachments, day and night cycles, and a dynamic minimap tied to a world map and journal. The Steam store describes controller and Steam Deck support, Steam Achievements, Steam Cloud, and Family Sharing, alongside main and side quests and dangerous creatures. Mature content is limited to mild violence, simple creature dismemberment, blood splatter, and occasional swearing.",
      links: [STEAM_STORE, OFFICIAL_SITE],
    },
    {
      id: "home-launch-window",
      type: "prose",
      heading: "What Ships in the Scavland Launch Window",
      body:
        "The Scavland launch window is anchored by Sep 4, 2026, when Early Access is planned to open on Steam. The single-player campaign and core systems are described as playable from the planned Early Access release, while cooperative multiplayer is listed by the developer as planned for future updates rather than enabled at launch. The demo entry on Demo AppID 3374510 is not yet labeled as a public, playable demo as of 2026-09-04, so players should check the Steam store page and the Steam Community hub for the latest status.\n\nPost-launch support is expected to flow through Steam Community news, the official Discord, the official X account, and the developer Patreon. The Steam Deck compatibility line on the store page is not yet labeled Verified, Playable, or Unsupported as of 2026-09-04, so handheld expectations should be treated as provisional until Steam assigns a rating.",
      links: [STEAM_STORE, STEAM_COMMUNITY],
    },
    {
      id: "home-systems-covered",
      type: "prose",
      heading: "Systems Covered Across This Site",
      body:
        "This site breaks Scavland down into focused pages you can jump to from the navigation. The Scavland release date page tracks the Early Access window and roadmap status. The Scavland demo page explains how to reach the demo AppID and how it relates to the full game. The Scavland system requirements page lists minimum and recommended PC specs plus Steam Deck notes.\n\nGameplay systems get dedicated pages too. The Scavland factions page covers the ten-faction reputation layer, and the Scavland weapons page walks through the 25+ weapon and 300+ attachment arsenal. Post-launch updates will be tracked on the Scavland updates page once Early Access opens, while community channels — including the Scavland Discord — are listed on the Discord and community hub.",
      links: [DISCORD_LINK, X_LINK],
    },
    {
      id: "home-disambiguation",
      type: "prose",
      heading: "Scavland vs Scavenger Land",
      body:
        "Scavland is the Steam PC Early Access survival RPG by NoShadow, AppID 3373500. Scavenger Land is an unrelated mobile action game on Google Play under the package name com.scavengerland.game. They share a similar name and a \"scavenger\" theme, but the developer, platform, genre, release model, and store are completely different. If you are searching for the top-down pixel art survival RPG on Steam PC, you are looking for Scavland, not Scavenger Land. A dedicated Scavland vs Scavenger Land comparison page breaks the two apart side by side.",
      links: [STEAM_STORE],
    },
    {
      id: "home-onboarding-cards",
      type: "entity-grid",
      heading: "Where to go next",
      items: [
        {
          title: "Release date",
          summary: "Early Access launch on Sep 4, 2026 and the post-launch roadmap status.",
          href: "/release-date",
          badge: "Status",
        },
        {
          title: "Demo",
          summary: "How to find the Steam demo entry on Demo AppID 3374510.",
          href: "/demo",
          badge: "Status",
        },
        {
          title: "System requirements",
          summary: "Minimum and recommended PC specs plus Steam Deck compatibility.",
          href: "/system-requirements",
          badge: "Reference",
        },
        {
          title: "Factions",
          summary: "Ten factions and the reputation system driving traders, contracts, and quests.",
          href: "/factions",
          badge: "Reference",
        },
        {
          title: "Weapons & Attachments",
          summary: "25+ weapons and 300+ attachments and how arsenal customization works.",
          href: "/weapons-attachments",
          badge: "Reference",
        },
        {
          title: "Updates",
          summary: "v0.5.169 day-one patch (Explorer mode, doubled stamina, campfire healing, IFAK stacking), pending v0.5.121, and the We Hear You developer-pinned thread.",
          href: "/updates",
          badge: "Status",
        },
        {
          title: "Discord & Community",
          summary: "Official Discord invite, Steam Discussions, X, and Patreon channels.",
          href: "/discord-community",
          badge: "Hub",
        },
        {
          title: "Scavland vs Scavenger Land",
          summary: "Side-by-side comparison with the unrelated Google Play mobile game.",
          href: "/vs-scavenger-land",
          badge: "Disambiguation",
        },
        {
          title: "Death and recovery",
          summary: "What the v0.5.169 day-one patch changed about death (keep equipment on death, only some backpack items lost), plus Explorer mode and beacon-marker recovery.",
          href: "/death-and-recovery",
          badge: "Guide",
        },
        {
          title: "Scavland vs Zero Sievert",
          summary: "Seven concrete axes from the developer-pinned Steam Discussions thread, with Scavland-side confirmed facts only.",
          href: "/vs-zero-sievert",
          badge: "Comparison",
        },
        {
          title: "Price and Early Access buy facts",
          summary: "$19.99 base / $17.99 introductory price through Sep 11, 2026, plus the 12-24 month Early Access window and NoShadow's price-stability pledge.",
          href: "/purchase-facts",
          badge: "Guide",
        },
        {
          title: "Trader economy: what to sell",
          summary: "9 named Act I traders, the high-profit barter goods (spark plugs, lighters, wire coils, weapon springs), the loot-only Mosin-Nagant, and the -300 hostile / 0 neutral reputation framework.",
          href: "/trader-economy",
          badge: "Guide",
        },
      ],
    },
  ],
  faqIds: [
    "home-when-release",
    "home-who-develops",
    "home-co-op",
    "home-vs-scavenger-land",
  ],
  relatedPageIds: [
    "release-date",
    "demo",
    "system-requirements",
    "factions",
    "weapons-attachments",
    "updates",
    "discord-community",
    "vs-scavenger-land",
    "death-and-recovery",
    "vs-zero-sievert",
    "purchase-facts",
    "trader-economy",
  ],
  schemaTypes: ["WebSite", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: LAST_REVIEWED,
};
