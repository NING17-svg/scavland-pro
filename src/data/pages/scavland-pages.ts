import type { PageContent } from "@/types/content";

const LAST_REVIEWED = "2026-09-04";

const STEAM_STORE = {
  label: "Steam store page for Scavland (AppID 3373500)",
  href: "https://store.steampowered.com/app/3373500/Scavland/",
  description: "Official Steam store listing used as the canonical current-game fact source.",
};

const STEAM_DEMO = {
  label: "SteamDB Demo AppID 3374510",
  href: "https://steamdb.info/app/3374510/info/",
  description: "Discovery pointer for the Steam demo entry.",
};

const STEAM_DB_MAIN = {
  label: "SteamDB AppID 3373500",
  href: "https://steamdb.info/app/3373500/",
  description: "SteamDB AppID pointer for the main Scavland entry.",
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

const PATREON_LINK = {
  label: "Official Scavland Patreon",
  href: "https://www.patreon.com/cw/scavland",
  description: "Long-form devlog posts and design rationale.",
};

const RPGWATCH = {
  label: "RPGWatch announcement coverage (2026-09-04)",
  href: "https://rpgwatch.com/news/scavland--announced-59912.html",
  description: "Editorial pre-release announcement context.",
};

const REDDIT_THREAD = {
  label: "Reddit /r/IndieGaming recommendation thread (2026-09-04)",
  href: "https://www.reddit.com/r/IndieGaming/comments/1lhzkad/if_you_havent_yet_i_recommend_checking_out_the/",
  description: "Community launch-impression signal.",
};

const PCGAMEBENCHMARK = {
  label: "PC Game Benchmark (Scavland system requirements estimator)",
  href: "https://www.pcgamebenchmark.com/scavland-system-requirements",
  description: "Third-party requirements aggregator used as a wiki/reference estimator only.",
};

const SCAVENGER_LAND = {
  label: "Scavenger Land on Google Play (disambiguation only)",
  href: "https://play.google.com/store/apps/details?id=com.scavengerland.game",
  description: "Unrelated mobile game referenced only to disambiguate from Scavland.",
};

const PLAYERS_UA = {
  label: "players.com.ua — Scavland Early Access launch coverage",
  href: "https://players.com.ua/en/news/post-apocalyptic-survival-rpg-scavland-enters-early-access-on-september-4",
  description:
    "Editorial launch-window coverage of Scavland positioning the game against S.T.A.L.K.E.R. and Tarkov-style extraction survival peers.",
};

const SCAVLAND_WIKI_HUB = {
  label: "Scavland community wiki (scavland.wiki)",
  href: "https://scavland.wiki/",
  description: "Independent community wiki used as cross-reference for community-published Scavland guide coverage.",
};

const SCAVLAND_WIKI_DEATH = {
  label: "Scavland community wiki — Death & recovery guide",
  href: "https://scavland.wiki/guide/scavland-death-and-loot-recovery/",
  description:
    "Independent community wiki page covering Scavland death penalties, dropped backpacks, beacon markers, and safe recovery expeditions.",
};

const SCAVLAND_WIKI_UPDATES = {
  label: "Scavland community wiki — Patch notes and updates",
  href: "https://scavland.wiki/updates/",
  description:
    "Independent community wiki page that collects Scavland patch notes including v0.5.169 day-one changes and pending v0.5.121 balance work.",
};

const VGS_V05169 = {
  label: "vgspoilers.com — Scavland v0.5.169 patch notes",
  href: "https://vgspoilers.com/game/scavland/patches/0.5.169",
  description:
    "Third-party patch notes mirror of the Scavland v0.5.169 day-one build covering Explorer mode, doubled stamina, campfire healing, NPC indicator reticles, and IFAK stacking.",
};

const STEAM_PINNED = {
  label: "Steam Discussions — \"We Hear You - Changes Are Coming\" pinned thread",
  href: "https://steamcommunity.com/app/3373500/discussions/0/592940297913404667/",
  description:
    "Developer-pinned Steam Discussions thread by Lucasmml covering promised next-patch changes including custom map markers, increased camera zoom, and quest ticks.",
};

const STEAM_DISCUSSIONS = {
  label: "Steam Discussions for Scavland (AppID 3373500)",
  href: "https://steamcommunity.com/app/3373500/discussions/",
  description:
    "Public Steam Discussions index, including the developer-pinned Scavland vs Zero Sievert comparison thread and the early-access Death? thread.",
};

export const scavlandPages: PageContent[] = [
  {
    id: "release-date",
    translationKey: "release-date",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release-date",
    url: "/release-date",
    pageType: "status",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland Release Date: Early Access Window and Roadmap",
    seoTitle: "Scavland Release Date: Early Access Launch on Sep 4, 2026",
    metaDescription:
      "Scavland release date is set for Sep 4, 2026 in Steam Early Access from NoShadow. Get the launch window, post-launch roadmap, and where to track updates.",
    summary:
      "Scavland Early Access release date is Sep 4, 2026 on Steam AppID 3373500. The launch is single-player; cooperative multiplayer is planned for future updates, and post-Early-Access roadmap items are not announced as of 2026-09-04.",
    hero: {
      eyebrow: "Status",
      subtitle:
        "When Scavland releases, what the Early Access window includes, and where to track any change to the launch date.",
      ctas: [
        { label: "Demo access", href: "/demo" },
        { label: "System requirements", href: "/system-requirements" },
        { label: "Updates", href: "/updates" },
      ],
    },
    quickAnswer:
      "Scavland release date is planned for Sep 4, 2026 in Steam Early Access on AppID 3373500, developed by NoShadow with co-publisher UNSUBSCRIBE. The planned Early Access launch is single-player at first, with cooperative multiplayer listed by the developer as a future update. Post-Early Access roadmap items are not announced as of 2026-09-04, and any change to the date should be tracked on the Steam store page and the Steam Community hub.",
    keyFacts: [
      { label: "Early Access release", value: "2026-09-04" },
      { label: "Steam AppID", value: "3373500" },
      { label: "Developer", value: "NoShadow" },
      { label: "Co-publisher", value: "NoShadow + UNSUBSCRIBE" },
      { label: "Mode at launch", value: "Single-player; co-op planned" },
    ],
    modules: [
      {
        id: "release-date-early-access-window",
        type: "prose",
        heading: "Early Access Launch Window on Sep 4, 2026",
        body:
          "Scavland release date is anchored by Sep 4, 2026, when the Steam Early Access build is planned to launch on AppID 3373500. The launch is positioned for Windows 10 64-bit PCs, with Steam Deck compatibility flagged on the store entry. NoShadow is the developer of record and UNSUBSCRIBE is listed as co-publisher on the same Steam page.\n\nThe planned Early Access release includes the core single-player survival loop, including the open world, procedural bunkers, faction reputation across ten factions, contracts, traders, crafting, the 25+ weapon and 300+ attachment arsenal, and the main plus side quest structure. Mature content is limited to mild violence, simple creature dismemberment, blood splatter, and occasional swearing. Eleven interface and subtitle languages are planned for the Early Access release, covering English, French, Italian, German, Spanish (Spain), Japanese, Portuguese (Brazil), Russian, Simplified Chinese, Spanish (Latin America), and Ukrainian.",
        links: [STEAM_STORE, OFFICIAL_SITE],
      },
      {
        id: "release-date-post-ea-roadmap",
        type: "prose",
        heading: "Post-Early Access Roadmap Status",
        body:
          "The Scavland release date is the start of an Early Access window rather than a finished launch, so post-Early Access roadmap items are not announced as of 2026-09-04. The Steam store confirms cooperative multiplayer as a planned future update, and the developer channels point to ongoing content and balance work. Concrete post-launch milestones — specific patch cadence, paid DLC, console ports, or a 1.0 exit date — are not announced as of 2026-09-04.\n\nWhat is confirmed for the planned Early Access release: single-player campaign, Family Sharing, Steam Achievements, Steam Cloud, controller support, and Steam Deck compatibility. What is not yet labeled: the official Steam Deck rating (Verified / Playable / Unsupported) and the specific activation date for cooperative multiplayer. The demo entry on AppID 3374510 is not yet labeled as a public, playable demo as of 2026-09-04, so players should check the Steam store page for the latest status before the planned Sep 4, 2026 release.",
        links: [STEAM_STORE, STEAM_COMMUNITY],
      },
      {
        id: "release-date-watch-channels",
        type: "prose",
        heading: "Where to Watch for Scavland Release Date Changes",
        body:
          "The most reliable sources for any change to the Scavland release date are the Steam store entry on AppID 3373500 and the Steam Community hub, which both surface developer news and patch notes directly. The official Scavland site at scavland.com mirrors the launch date and community links. Live developer updates also appear on the official X account (@Scavland_), the official Discord, and the developer Patreon.\n\nFor hardware planning before the planned release, the Scavland system requirements page lists minimum and recommended PC specs plus Steam Deck expectations. For post-launch updates after Early Access opens, the Scavland updates page collects the most recent patch notes and roadmap pointers, and the Scavland demo page tracks demo availability relative to the Early Access build.",
        links: [DISCORD_LINK, X_LINK, PATREON_LINK],
      },
      {
        id: "release-date-fact-boundaries",
        type: "callout",
        tone: "confirmed",
        title: "Fact boundary — release date",
        body:
          "Current-game fact: Scavland release date is Sep 4, 2026 in Steam Early Access on AppID 3373500, developed by NoShadow with co-publisher UNSUBSCRIBE. Source: Steam store AppID 3373500, official site, Steam Community hub, all checked 2026-09-04.\n\nUnannounced: Steam Deck rating, Early Access exit date, and specific post-launch roadmap items.",
      },
    ],
    faqIds: ["release-date-when", "release-date-ea-vs-full", "release-date-track-changes"],
    relatedPageIds: ["demo", "updates", "system-requirements"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "demo",
    translationKey: "demo",
    locale: "en-US",
    routeKind: "fixed",
    slug: "demo",
    url: "/demo",
    pageType: "status",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland Demo: Steam Demo AppID and Access Path",
    seoTitle: "Scavland Demo: Where to Find the Steam Demo (AppID 3374510)",
    metaDescription:
      "Scavland demo is available on Steam as AppID 3374510. Learn how to find the Steam demo entry, what it covers, and how it relates to Early Access.",
    summary:
      "The Scavland demo entry exists on SteamDB as Demo AppID 3374510. Whether it is a public, playable demo build is not announced as of 2026-09-04; the main Early Access build is on AppID 3373500 with a planned Sep 4, 2026 launch.",
    hero: {
      eyebrow: "Status",
      subtitle:
        "How to find the Scavland demo entry on Steam, what it covers, and how it relates to the Early Access build.",
      ctas: [
        { label: "Release date", href: "/release-date" },
        { label: "System requirements", href: "/system-requirements" },
        { label: "Multiplayer status", href: "/multiplayer-coop" },
      ],
    },
    quickAnswer:
      "The Scavland demo entry exists as Demo AppID 3374510 on SteamDB; whether it is a public, playable demo build is not announced as of 2026-09-04. Readers should check the Steam store page for AppID 3374510 and the Steam Community hub for AppID 3373500 for the latest status ahead of the planned Sep 4, 2026 Early Access launch on the main AppID 3373500. The demo entry is expected to share the same Windows 10 64-bit baseline and Steam Deck compatibility notes as the main game once published.",
    keyFacts: [
      { label: "Demo AppID", value: "3374510" },
      { label: "Main AppID", value: "3373500" },
      { label: "Demo status", value: "Not announced as public playable demo as of 2026-09-04" },
      { label: "Early Access release", value: "2026-09-04" },
      { label: "Demo mode", value: "Single-player (matches launch build)" },
    ],
    modules: [
      {
        id: "demo-appid",
        type: "prose",
        heading: "Demo AppID and Where to Download the Scavland Demo",
        body:
          "The Scavland demo entry exists on SteamDB as Demo AppID 3374510, while the main Early Access build sits on AppID 3373500. SteamDB records Demo AppID 3374510 as a discovery pointer for the build, but the demo entry's status as a public, playable demo is not announced as of 2026-09-04. Readers should check the Steam store page for AppID 3374510 and the Steam Community hub for AppID 3373500 for the latest status.\n\nTo check the demo entry status: open Steam, search for Scavland, open the main store page on AppID 3373500, and look for the demo entry surfaced alongside the wishlist and purchase options. The demo entry's download status on AppID 3374510 is not announced as a public, playable demo as of 2026-09-04, so readers should check the Steam store page for the latest status. Family Sharing availability on the demo, where applicable, follows the standard Steam rules for demo content.",
        links: [STEAM_STORE, STEAM_DEMO],
      },
      {
        id: "demo-scope",
        type: "prose",
        heading: "Scavland Demo Scope and Early Access Relationship",
        body:
          "The Scavland demo entry is positioned as a public preview of the Early Access build, not a separate game. The demo entry's content scope on AppID 3374510 is not announced as a public, playable demo as of 2026-09-04. The Early Access build is described as single-player at launch on AppID 3373500, with cooperative multiplayer listed as planned for future updates.\n\nThe relationship between the demo entry and the Early Access build is straightforward: the demo entry on AppID 3374510 points to a public preview build, and the Early Access build is sold separately under the main listing on AppID 3373500. The demo entry's playable status on AppID 3374510 is not announced as of 2026-09-04, so readers should check the Steam store page for the latest status before the planned Sep 4, 2026 Early Access release. Steam Community news on the AppID 3373500 hub is the canonical channel for any demo or Early Access build updates.",
        links: [STEAM_COMMUNITY, STEAM_DB_MAIN],
      },
      {
        id: "demo-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — demo availability",
        body:
          "SteamDB Demo AppID 3374510 is a discovery pointer only. The demo entry's playable status as a public, playable demo is not announced as of 2026-09-04. Check the Steam store page for AppID 3374510 and the Steam Community hub for AppID 3373500 for the latest status.",
      },
    ],
    faqIds: ["demo-exists", "demo-coop", "demo-save-carry"],
    relatedPageIds: ["release-date", "system-requirements", "multiplayer-coop"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "system-requirements",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "reference",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland System Requirements: Minimum, Recommended, and Steam Deck",
    seoTitle: "Scavland System Requirements: PC Specs and Steam Deck Notes",
    metaDescription:
      "Scavland system requirements cover Windows 10 64-bit, Intel 2.77GHz Quad-core, 8 GB RAM, dedicated GPU 2 GB, and Steam Deck compatibility. See full specs.",
    summary:
      "Scavland system requirements list Windows 10 64-bit, an Intel 2.77 GHz quad-core CPU, 8 GB of RAM minimum (12 GB recommended), a dedicated GPU with 2 GB of VRAM, DirectX 11, an FMOD-compatible sound card, and roughly 2 GB of storage. Steam Deck compatibility is listed, with the official rating not yet labeled as of 2026-09-04.",
    hero: {
      eyebrow: "Reference",
      subtitle:
        "Minimum and recommended PC specs for Scavland, plus Steam Deck compatibility status.",
      ctas: [
        { label: "Steam Deck notes", href: "/steam-deck" },
        { label: "Release date", href: "/release-date" },
      ],
    },
    quickAnswer:
      "Scavland system requirements on AppID 3373500 (planned Early Access release Sep 4, 2026) list Windows 10 64-bit PCs as the baseline. Minimum spec is an Intel 2.77 GHz quad-core CPU, 8 GB of RAM, a dedicated GPU with 2 GB of VRAM and DirectX 11 support, an FMOD-compatible sound card, and about 2 GB of storage. Recommended RAM rises to 12 GB. The Steam store also flags Steam Deck compatibility alongside controller support.",
    keyFacts: [
      { label: "OS", value: "Windows 10 64-bit" },
      { label: "CPU (min / rec)", value: "Intel 2.77 GHz quad-core" },
      { label: "RAM (min / rec)", value: "8 GB / 12 GB" },
      { label: "GPU", value: "Dedicated GPU, 2 GB VRAM, DirectX 11" },
      { label: "Storage", value: "~2 GB" },
      { label: "Steam Deck", value: "Compatibility listed; rating not yet labeled" },
    ],
    modules: [
      {
        id: "system-requirements-minimum",
        type: "prose",
        heading: "Scavland System Requirements: Minimum PC Specs",
        body:
          "Scavland system requirements start at a deliberately accessible minimum spec for a top-down pixel art survival RPG. The Steam store lists the following minimum hardware floor for Windows 10 64-bit:\n\n- Operating system: Windows 10 64-bit\n- CPU: Intel 2.77 GHz quad-core (or equivalent AMD)\n- Memory: 8 GB RAM\n- Graphics: dedicated GPU with at least 2 GB of VRAM, DirectX 11 support\n- Storage: approximately 2 GB available\n- Sound card: FMOD-compatible\n- Input: keyboard and mouse, with controller supported\n\nThat baseline covers the handcrafted open world, the procedural underground bunkers, the ten-faction reputation layer, the 25+ weapon and 300+ attachment arsenal, and the day and night cycle. Because the visual style is top-down pixel art rather than 3D photorealism, the GPU bar stays low while CPU-bound survival simulation work (AI pathing, faction scripting, contract logic) carries more of the load. Players on integrated graphics should still confirm the dedicated GPU requirement before launch, since the store language is explicit about a discrete card.",
        links: [STEAM_STORE],
      },
      {
        id: "system-requirements-recommended",
        type: "prose",
        heading: "Recommended PC Specs for Scavland",
        body:
          "Scavland system requirements for recommended play raise RAM to 12 GB while keeping the same DirectX 11 baseline and the same Intel 2.77 GHz quad-core CPU floor. The Steam store does not list a separate higher-end GPU tier or a faster CPU recommendation, which keeps the recommended envelope close to the minimum envelope.\n\n| Component | Minimum | Recommended |\n| --- | --- | --- |\n| OS | Windows 10 64-bit | Windows 10 64-bit |\n| CPU | Intel 2.77 GHz quad-core | Intel 2.77 GHz quad-core |\n| Memory | 8 GB RAM | 12 GB RAM |\n| GPU | Dedicated GPU, 2 GB VRAM, DirectX 11 | Dedicated GPU, 2 GB VRAM, DirectX 11 |\n| Storage | ~2 GB | ~2 GB |\n| Sound | FMOD-compatible | FMOD-compatible |\n\nThe single hardware bump between tiers is RAM. Players running with background applications — browser tabs, Discord capture, streaming overlays, or voice chat clients — should plan for the 12 GB recommended level rather than the 8 GB minimum. Storage is small enough that any modern SSD is fine, and the FMOD-compatible sound card line is satisfied by any motherboard audio or discrete sound card released in the last decade.",
        links: [STEAM_STORE],
      },
      {
        id: "system-requirements-steam-deck",
        type: "prose",
        heading: "Steam Deck Compatibility Status",
        body:
          "Scavland system requirements explicitly include Steam Deck compatibility on the Steam store entry. The store flags Steam Deck compatibility alongside controller support, Steam Achievements, Steam Cloud, and Family Sharing. As of 2026-09-04, however, the official Steam Deck rating (Verified, Playable, or Unsupported) is not yet labeled on the build. Until Steam assigns a rating, handheld expectations should be treated as provisional.\n\nWhat players can assume today: a top-down pixel art survival RPG with controller support and modest hardware demands is a reasonable handheld candidate, especially on the 12 GB RAM tier of Steam Deck hardware. What is not confirmed: the exact Verified versus Playable label, locked-versus-unlocked frame rates on Steam Deck, suspend and resume behavior, and on-screen text legibility at the Deck's native resolution. The Scavland Steam Deck compatibility page tracks the rating once Steam assigns one, and the official Steam store entry will reflect any new label at the same time.\n\nFor broader hardware guidance, third-party aggregators like PC Game Benchmark estimate component-level fits, but those numbers are derived estimators and not a substitute for the official Steam store line. Always cross-check against AppID 3373500 before buying hardware specifically for Scavland.",
        links: [STEAM_STORE, PCGAMEBENCHMARK],
      },
      {
        id: "system-requirements-spec-table",
        type: "data-table",
        heading: "Scavland specs at a glance",
        columns: [
          { key: "component", label: "Component" },
          { key: "minimum", label: "Minimum" },
          { key: "recommended", label: "Recommended" },
        ],
        rows: [
          { component: "OS", minimum: "Windows 10 64-bit", recommended: "Windows 10 64-bit" },
          { component: "CPU", minimum: "Intel 2.77 GHz quad-core", recommended: "Intel 2.77 GHz quad-core" },
          { component: "Memory", minimum: "8 GB RAM", recommended: "12 GB RAM" },
          { component: "GPU", minimum: "Dedicated GPU, 2 GB VRAM, DirectX 11", recommended: "Dedicated GPU, 2 GB VRAM, DirectX 11" },
          { component: "Storage", minimum: "~2 GB", recommended: "~2 GB" },
          { component: "Sound", minimum: "FMOD-compatible", recommended: "FMOD-compatible" },
          { component: "Input", minimum: "Keyboard + mouse; controller supported", recommended: "Keyboard + mouse; controller supported" },
          { component: "Steam Deck", minimum: "Compatibility listed", recommended: "Rating not yet labeled" },
        ],
      },
    ],
    faqIds: ["sysreq-min", "sysreq-ram", "sysreq-deck", "sysreq-integrated", "sysreq-disk"],
    relatedPageIds: ["steam-deck", "release-date"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "multiplayer-coop",
    translationKey: "multiplayer-coop",
    locale: "en-US",
    routeKind: "fixed",
    slug: "multiplayer-coop",
    url: "/multiplayer-coop",
    pageType: "status",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland Multiplayer: Co-op Status and Where to Track Updates",
    seoTitle: "Scavland Multiplayer: Single-Player at Launch, Co-op Planned",
    metaDescription:
      "Scavland multiplayer launches as single-player on Sep 4, 2026, with cooperative multiplayer planned in future updates. Learn what's online and how to track co-op.",
    summary:
      "Scavland multiplayer launches as single-player on Sep 4, 2026. Cooperative multiplayer is listed by the developer as planned for future updates; the activation date is not announced as of 2026-09-04. Steam Achievements, Steam Cloud, and Family Sharing are supported from the Early Access release.",
    hero: {
      eyebrow: "Status",
      subtitle:
        "Single-player at launch, cooperative multiplayer planned, and where to track co-op status changes.",
      ctas: [
        { label: "Release date", href: "/release-date" },
        { label: "Updates", href: "/updates" },
        { label: "Discord & community", href: "/discord-community" },
      ],
    },
    quickAnswer:
      "Scavland multiplayer is planned to launch as single-player on Sep 4, 2026 in Steam Early Access on AppID 3373500. Cooperative multiplayer is listed as a planned future update, but the activation date is not announced as of 2026-09-04. Steam Achievements, Steam Cloud, and Family Sharing are listed as supported features and are planned to ship with the Early Access release. Updates flow through the Steam Community hub, official Discord, and the developer X account.",
    keyFacts: [
      { label: "Launch mode", value: "Single-player" },
      { label: "Co-op status", value: "Planned in future updates; date not announced" },
      { label: "Family Sharing", value: "Listed on Steam store; ships with Early Access" },
      { label: "Steam Achievements / Cloud", value: "Listed on Steam store" },
      { label: "Steam Deck co-op", value: "Rating not yet labeled" },
    ],
    modules: [
      {
        id: "multiplayer-coop-launch-status",
        type: "prose",
        heading: "Scavland Multiplayer at Launch: Single-Player First, Co-op Planned",
        body:
          "Scavland multiplayer status on the planned Early Access release is single-player only. The Steam store entry on AppID 3373500 describes the Early Access build as a single-player survival RPG, with cooperative multiplayer called out specifically as a planned future update rather than a launch feature. NoShadow is the developer, with UNSUBSCRIBE listed as co-publisher, and neither the Steam page nor the official Scavland site has enabled online co-op as of 2026-09-04.\n\nWhat the planned co-op envelope looks like today is limited to two confirmations. First, the Steam store feature list explicitly mentions cooperative multiplayer mode in future updates, which means the mode is committed in direction but not in date. Second, the Family Sharing line on the same store entry is planned to ship with the Early Access release, so account-shared play is planned to work from the Early Access release for players on the same Steam family. Beyond those two points, the size of co-op parties, dedicated servers versus peer-to-peer hosting, progression carry-over, and any anti-cheat scope are all not announced as of 2026-09-04.\n\nPlayers who want to follow co-op development should treat the Steam Community news feed, the official X account (@Scavland_), and the official Discord as the primary signals. The developer Patreon also runs devlog-style updates. Until the official Steam store entry flips cooperative multiplayer from \"planned future update\" to \"available now\", treat any third-party co-op build, mod, or patched client as unofficial.",
        links: [STEAM_STORE, STEAM_COMMUNITY, X_LINK],
      },
      {
        id: "multiplayer-coop-family-sharing",
        type: "prose",
        heading: "Family Sharing, Steam Cloud, and Where to Track Co-op",
        body:
          "Steam Achievements, Steam Cloud, and Family Sharing are listed as supported features on the Steam store entry for AppID 3373500; they are planned to ship with the Early Access release. Family Sharing lets eligible Steam family members play the Early Access build from their own accounts without a second purchase. Steam Cloud handles save syncing across PCs, and Steam Achievements tracks in-game milestones tied to the survival RPG systems.\n\nThe Steam Deck compatibility line on the same store entry is not yet labeled Verified, Playable, or Unsupported as of 2026-09-04, which matters for players planning handheld co-op sessions on shared Steam Deck hardware once the mode goes live. The Scavland release date page tracks the launch window, the Scavland updates page collects the latest patch notes, and the Scavland Discord page lists the official Discord invite alongside the Steam Discussions, X, and Patreon channels. Any change to cooperative multiplayer status — activation date, party size, server model — will surface on those channels before it is reflected anywhere else.",
        links: [DISCORD_LINK, PATREON_LINK],
      },
      {
        id: "multiplayer-coop-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — co-op activation",
        body:
          "Cooperative multiplayer activation date, party size, server model, progression carry-over, and any anti-cheat scope are not announced as of 2026-09-04. Track the Steam Community hub, official X, and Discord for any change to co-op status.",
      },
    ],
    faqIds: ["multiplayer-at-launch", "multiplayer-coop-when", "multiplayer-family-sharing"],
    relatedPageIds: ["release-date", "updates", "discord-community"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "discord-community",
    translationKey: "discord-community",
    locale: "en-US",
    routeKind: "fixed",
    slug: "discord-community",
    url: "/discord-community",
    pageType: "hub",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Scavland Discord: Official Channels and How to Use Them",
    seoTitle: "Scavland Discord: Official Invite, X, Patreon, and Steam Talks",
    metaDescription:
      "Scavland Discord is the official community hub, joined to Steam Discussions, official X, and Patreon. Find every verified channel here.",
    summary:
      "The official Scavland Discord invite, Steam Community Discussions, the official X handle @Scavland_, and the official Patreon are the verified channels cross-linked from the Steam store page and the official Scavland site.",
    hero: {
      eyebrow: "Hub",
      subtitle:
        "Every official Scavland community channel in one place, with the verification rule that decides which Discord invite is real.",
      ctas: [
        { label: "Multiplayer status", href: "/multiplayer-coop" },
        { label: "Updates", href: "/updates" },
      ],
    },
    quickAnswer:
      "The official Scavland Discord is the verified community hub linked from the Steam store page and the official Scavland site. It runs alongside the Steam Community hub Discussions tab, the official X handle @Scavland_, and the official Patreon, which carry devlog posts, patch notes, and announcements tied to the Early Access window. Use the invite below to join.",
    keyFacts: [
      { label: "Official Discord invite", value: "https://discord.com/invite/scavland" },
      { label: "Steam Community hub", value: "https://steamcommunity.com/app/3373500" },
      { label: "Official X", value: "https://x.com/Scavland_" },
      { label: "Official Patreon", value: "https://www.patreon.com/cw/scavland" },
      { label: "Verification rule", value: "Cross-linked from Steam store and scavland.com" },
    ],
    modules: [
      {
        id: "discord-invite",
        type: "prose",
        heading: "The official Scavland Discord invite",
        body:
          "The official Scavland Discord invite is at https://discord.com/invite/scavland, cross-linked from the Steam store AppID 3373500 page and the official site at https://scavland.com/. Treat it as the canonical chat destination. The official Discord invite is at https://discord.com/invite/scavland; member count, channel count, and moderation rules are not announced as of 2026-09-04 — see the invite and the official site for the current channel list.\n\nHow to verify you landed in the right server:\n\n- The invite domain is discord.com and the slug is \"scavland\".\n- The invite is linked from the Steam store AppID 3373500 page and the official site at https://scavland.com/.\n\nAvoid third-party \"Scavland\" Discord links found in random forum threads; they are not the official channel.",
        links: [DISCORD_LINK, STEAM_STORE, OFFICIAL_SITE],
      },
      {
        id: "discord-channels-grid",
        type: "entity-grid",
        heading: "Official channels at a glance",
        items: [
          {
            title: "Discord",
            summary: "Verified chat hub cross-linked from the Steam store and the official site.",
            href: "https://discord.com/invite/scavland",
            badge: "Official",
          },
          {
            title: "Steam Discussions",
            summary: "Permanent, searchable archive of patch notes and developer posts on AppID 3373500.",
            href: "https://steamcommunity.com/app/3373500",
            badge: "Official",
          },
          {
            title: "X (@Scavland_)",
            summary: "Short devlog updates, release countdowns, and patch notes.",
            href: "https://x.com/Scavland_",
            badge: "Official",
          },
          {
            title: "Patreon",
            summary: "Long-form devlog posts that explain design choices and roadmap reasoning.",
            href: "https://www.patreon.com/cw/scavland",
            badge: "Official",
          },
        ],
      },
      {
        id: "discord-steam-discussions",
        type: "prose",
        heading: "Steam Discussions and the Steam Community hub",
        body:
          "The Steam Community hub at https://steamcommunity.com/app/3373500 runs the official Discussions tab for Scavland. Use it when you want a permanent, searchable archive of patch notes and developer posts that survives a Discord server outage. The hub also hosts the announcement feed that the Discord channels re-share.\n\nWhen to pick Steam Discussions instead of Discord:\n\n- You want a thread that is easy to quote and link in a bug report.\n- You want to read official developer posts without joining another platform.\n- You want Family Sharing recipients in your group to follow along; Steam Discussions need only a free Steam account.\n\nThe Steam Community hub is the same destination the Scavland multiplayer page points to for co-op status changes.",
        links: [STEAM_COMMUNITY],
      },
      {
        id: "discord-x-patreon",
        type: "prose",
        heading: "Official X and Patreon for devlog coverage",
        body:
          "The official X handle @Scavland_ at https://x.com/Scavland_ carries short devlog updates, release countdowns, and quick patch notes during the Early Access window. The official Patreon at https://www.patreon.com/cw/scavland carries the longer-form devlog posts that explain design choices, art changes, and roadmap reasoning.\n\nUse X for time-sensitive alerts (hotfixes, server news, store-publish announcements) and Patreon for the behind-the-scenes narrative. Both are cross-linked from the Steam store and the official Scavland site, so they remain official sources even though they sit outside Steam itself. The Scavland updates page summarizes what each channel announces once the change lands in the Steam Community news feed.",
        links: [X_LINK, PATREON_LINK],
      },
      {
        id: "discord-fact-boundary",
        type: "callout",
        tone: "confirmed",
        title: "Fact boundary — channel verification",
        body:
          "Current-game fact: the Steam store page for AppID 3373500 and the official site at https://scavland.com/ both link the Discord invite as of 2026-09-04; treat any other Discord slug as unofficial.\n\nUnannounced: member count, server verification level, and any planned Discord-only events.",
      },
    ],
    faqIds: ["discord-only-channel", "discord-buy-required", "discord-patch-notes", "discord-family-sharing", "discord-bug-report"],
    relatedPageIds: ["multiplayer-coop", "updates"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "factions",
    translationKey: "factions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "factions",
    url: "/factions",
    pageType: "reference",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland Factions: Reputation, Quests, and the Wasteland Map",
    seoTitle: "Scavland Factions: 10 Factions and How Reputation Works",
    metaDescription:
      "Scavland factions total 10 across the post-apocalyptic Soviet world. Learn how reputation drives traders, settlements, contracts, and main + side quests.",
    summary:
      "Scavland has 10 factions per the official Steam store feature list for AppID 3373500. Reputation is a per-faction standing that gates which traders, contracts, and side quests are reachable. Specific faction names, tier labels, and repair actions are not announced as of 2026-09-04.",
    hero: {
      eyebrow: "Reference",
      subtitle:
        "How many factions exist in Scavland, where they appear on the map, and how reputation changes the survival loop.",
      ctas: [
        { label: "Quests & contracts", href: "/quests-contracts" },
        { label: "Combat tips", href: "/combat-tips" },
      ],
    },
    quickAnswer:
      "Scavland factions number 10 according to the official Steam store feature list for AppID 3373500. They sit across the handcrafted open world and the procedural underground bunkers, and each one tracks reputation that changes which traders, contracts, and side quests you can reach. Reputation is a system the game exposes, not a number the store names directly; the practical effects land on the trader list, the contract board, and main + side quest access.",
    keyFacts: [
      { label: "Faction count", value: "10 (per Steam store feature list)" },
      { label: "Reputation effects", value: "Traders, contracts, main + side quests" },
      { label: "Where they appear", value: "Settlements, world map, procedural bunkers, dynamic minimap" },
      { label: "Named roster", value: "Not announced as of 2026-09-04" },
      { label: "Tier labels", value: "Not announced as of 2026-09-04" },
    ],
    modules: [
      {
        id: "factions-count-and-place",
        type: "prose",
        heading: "How many Scavland factions and where they sit in the world",
        body:
          "The Steam store page for AppID 3373500 lists \"10 factions with reputation\" as part of the official feature set for the Early Access launch. The exact named roster of all ten is not listed on the store page at the time of writing, so treat the count of 10 as confirmed and the individual names as unannounced unless you can verify them in-game or in an official NoShadow post.\n\nWhere factions appear geographically:\n\n- On the world map, faction territory surrounds named settlements and trader outposts in the post-apocalyptic Soviet setting.\n- Inside procedural underground bunkers, faction banners and signage mark who previously held or currently contests the level.\n- Around the dynamic minimap, faction markers distinguish friendly, neutral, and hostile territory while you explore.\n\nReputation here is positional: moving through a faction's zone is what triggers most reputation shifts, not a hidden counter that ticks on its own.",
        links: [STEAM_STORE, OFFICIAL_SITE],
      },
      {
        id: "factions-reputation-system",
        type: "prose",
        heading: "How the reputation system behaves",
        body:
          "Reputation is a per-faction standing that the official feature list describes without naming numerical tiers. The Steam store confirms the system exists alongside traders, contracts, and main + side quests; the specific way standing gates each subsystem, the exact tier labels, and the exact repair actions are not announced as of 2026-09-04. Treat the reputation system as a planned-release feature confirmed in name and unannounced in detail.\n\nSpecific faction names, faction roster, reputation tiers, and how reputation gates contracts and quests are not announced as of 2026-09-04.",
        links: [STEAM_STORE],
      },
      {
        id: "factions-contracts-traders",
        type: "prose",
        heading: "Scavland factions in contracts, traders, and quests",
        body:
          "The official feature list names three places reputation shows up: traders, contracts, and main + side quests. The exact mechanics of how reputation shifts affect each system are not announced as of 2026-09-04. The general pattern the feature list supports is that reputation changes which trader stock, which contracts, and which questlines are reachable; the named tiers and named examples are not listed on the Steam store AppID 3373500 page.",
        links: [STEAM_STORE],
      },
      {
        id: "factions-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — faction roster and tiers",
        body:
          "10 factions with reputation is confirmed on the Steam store AppID 3373500 page as of 2026-09-04. Individual faction names, full reputation tier labels, exact repair actions, and any post-Early Access faction additions are not announced as of 2026-09-04.",
      },
    ],
    faqIds: ["factions-how-many", "factions-named-roster", "factions-combat", "factions-repair", "factions-in-bunkers"],
    relatedPageIds: ["quests-contracts", "combat-tips"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "weapons-attachments",
    translationKey: "weapons-attachments",
    locale: "en-US",
    routeKind: "fixed",
    slug: "weapons-attachments",
    url: "/weapons-attachments",
    pageType: "reference",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland Weapons and Attachments: Arsenal Customization Guide",
    seoTitle: "Scavland Weapons and Attachments: 25+ Weapons, 300+ Attachments",
    metaDescription:
      "Scavland weapons span 25+ firearms and melee tools with 300+ attachments. Learn how arsenal customization fits tactical combat and survival play.",
    summary:
      "The Scavland arsenal covers 25+ firearms and melee tools with 300+ attachments per the Steam store feature list. Attachments enter through looting, reputation-gated traders, and crafting, and they shape the firearms, melee, stealth, and suppression combat loops.",
    hero: {
      eyebrow: "Reference",
      subtitle:
        "How many weapons and attachments Scavland ships with, and how arsenal customization feeds the tactical combat loop.",
      ctas: [
        { label: "Combat tips", href: "/combat-tips" },
        { label: "Factions", href: "/factions" },
      ],
    },
    quickAnswer:
      "The Scavland weapons system covers 25+ firearms and melee tools supported by 300+ attachments, per the official Steam store feature list for AppID 3373500. Arsenal customization feeds directly into the tactical combat loop that includes firearms, melee, stealth, and suppression. Attachments slot onto weapons through a system the store describes but does not name; build decisions happen at the workbench rather than from a fixed meta.",
    keyFacts: [
      { label: "Weapons", value: "25+ firearms and melee tools" },
      { label: "Attachments", value: "300+" },
      { label: "Combat verbs", value: "Firearms, melee, stealth, suppression" },
      { label: "Acquisition paths", value: "Looting, traders, crafting" },
      { label: "Named roster", value: "Not announced as of 2026-09-04" },
    ],
    modules: [
      {
        id: "weapons-arsenal-overview",
        type: "prose",
        heading: "Scavland weapons: arsenal size and categories",
        body:
          "The official Steam store page for AppID 3373500 lists \"25+ weapons\" and \"300+ attachments\" as part of the Early Access feature set. The store confirms two broad categories — firearms and melee — and pairs them with tactical combat verbs (firearms, melee, stealth, suppression) that determine how each weapon is used in the field.\n\nWhat the store confirms:\n\n- The 25+ count includes both ranged and melee tools.\n- The 300+ count is for attachments, not weapons, and covers the customization layer that sits on top of each base weapon.\n- Tactical combat supports firearms, melee, stealth, and suppression as distinct play loops.\n\nWhat the store does not list:\n\n- Named weapon models (a specific AK variant, a named knife, a designated pipe rifle, and so on).\n- Per-weapon stats such as damage, range, or rate of fire.\n- Named attachment categories (scopes, grips, magazines, muzzles) at the official level.\n\nTreat the category counts as confirmed and the specific weapon and attachment rosters as unannounced as of 2026-09-04. In-game discovery and the Steam Community hub news feed are the place to confirm named items once they ship.",
        links: [STEAM_STORE],
      },
      {
        id: "weapons-attachments-slots",
        type: "prose",
        heading: "Attachment system and slots",
        body:
          "The 300+ attachments system lets players customize each weapon at the workbench. The Steam store describes the system but does not publish a slot diagram, a category breakdown, or a named attachment roster, so the practical layout has to be confirmed in-game. Specific weapon names, attachment families, and per-weapon stats are not announced as of 2026-09-04.\n\nAcquisition path:\n\n- Looting: the world map and procedural underground bunkers contain attachment drops as part of the looting loop.\n- Traders: reputation-gated traders stock attachments, with better options opening at higher faction standing. The Scavland factions page covers the standing system that drives that gating.\n- Crafting: the crafting system turns scavenged parts and blueprints into finished attachments.\n\nFit with the tactical combat loop: the combat loop on the Scavland combat tips page assumes a customized weapon. Suppression in particular is built around a weapon's controllable recoil and fire rate, which is exactly what attachments modify. The specific attachment layouts that favor close-range stealth or long-range overwatch are not announced as of 2026-09-04; treat loadout recipes as in-game discoveries rather than confirmed meta.",
        links: [STEAM_STORE],
      },
      {
        id: "weapons-attachments-spec-table",
        type: "data-table",
        heading: "Arsenal system at a glance",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Value" },
        ],
        rows: [
          { field: "Weapons", value: "25+ firearms and melee tools" },
          { field: "Attachments", value: "300+" },
          { field: "Combat verbs", value: "Firearms, melee, stealth, suppression" },
          { field: "Acquisition paths", value: "Looting, traders, crafting" },
          { field: "Workbench", value: "Customization hub; per-weapon stats not announced" },
          { field: "Per-weapon stats", value: "Not announced as of 2026-09-04" },
        ],
      },
      {
        id: "weapons-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — weapon and attachment rosters",
        body:
          "25+ weapons and 300+ attachments are confirmed on the Steam store AppID 3373500 page as of 2026-09-04. Named weapon models, per-weapon stats, named attachment categories, slot counts, blueprint sources, and any post-Early Access arsenal additions are not announced.",
      },
    ],
    faqIds: ["weapons-how-many", "weapons-attachments-how-many", "weapons-attachments-where", "weapons-attachments-combat-impact", "weapons-categories"],
    relatedPageIds: ["combat-tips", "factions"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "combat-tips",
    translationKey: "combat-tips",
    locale: "en-US",
    routeKind: "fixed",
    slug: "combat-tips",
    url: "/combat-tips",
    pageType: "guide",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland Combat Tips: Surviving the Soviet Wasteland",
    seoTitle: "Scavland Combat Tips: Firearms, Melee, Stealth, and Suppression",
    metaDescription:
      "Scavland combat tips cover firearms, melee, stealth, and weapon suppression against mutants and hostile survivors. Plan tactics around day/night and bunkers.",
    summary:
      "Scavland combat tips cover the official tactical verbs on the Steam store: firearms, melee, stealth, and suppression. Each verb maps to a different loadout from the 25+ weapons and 300+ attachments pool and performs differently between day and night against mutants and hostile survivors inside procedural underground bunkers.",
    hero: {
      eyebrow: "Guide",
      subtitle:
        "How to fight mutants and hostile survivors in Scavland with the right tactical verb, and how day/night and bunker terrain shape the engagement.",
      ctas: [
        { label: "Weapons & attachments", href: "/weapons-attachments" },
        { label: "Factions", href: "/factions" },
        { label: "Quests & contracts", href: "/quests-contracts" },
      ],
    },
    quickAnswer:
      "Scavland combat tips start with the official tactical verbs on the Steam store: firearms, melee, stealth, and suppression. Each verb maps to a different loadout from the 25+ weapons and 300+ attachments pool, and each performs differently between day and night against mutants and hostile survivors inside procedural underground bunkers. Pair this page with the Scavland weapons page for build choices and the Scavland factions page for reputation-gated engagements.",
    keyFacts: [
      { label: "Tactical verbs", value: "Firearms, melee, stealth, suppression" },
      { label: "Day/night impact", value: "Confirmed cycle; per-enemy behavior not announced" },
      { label: "Bunker terrain", value: "Procedural underground bunkers with traps" },
      { label: "Co-op support", value: "Single-player at launch; co-op planned" },
      { label: "Faction stance", value: "Reputation drives friendly / neutral / hostile" },
    ],
    modules: [
      {
        id: "combat-tips-verb-decision",
        type: "prose",
        heading: "Scavland combat tips: firearms vs melee vs stealth decision tree",
        body:
          "The tactical combat verbs the Steam store names — firearms, melee, stealth, suppression — are not interchangeable options; they map to distinct engagement profiles. Each profile has a loadout, an enemy archetype, and an environment that suits it. Choosing between them at the start of an encounter is the core combat decision in the Soviet setting.\n\nWhen firearms is the right call: firearms fit open-world engagements where line of sight stretches past melee reach. Against hostile survivors armed at range and against mutants that close distance quickly, firearms keep threat at a controllable distance. The trade-off is noise: gunfire pulls additional enemies, which the day/night section below covers in more detail. Pair this with the weapons on the Scavland weapons page when planning a primary firearm.\n\nWhen melee is the right call: melee fits tight quarters where firearms cannot be aimed cleanly. Procedural underground bunkers, narrow corridors in ruined settlements, and surprise ambushes inside a building all favor melee tools that do not give away your position with a muzzle flash. Melee also keeps ammunition for the longer fights the rest of the open world forces on you.\n\nWhen stealth is the right call: stealth fits any engagement you would rather avoid than win. Patrols around a hostile faction's settlement, scouts before a bunker clear, and route reconnaissance for a Scavland quests contract are all stealth candidates. Stealth saves ammunition and avoids the reputation damage that comes from killing a faction you have not allied with.",
        links: [STEAM_STORE],
      },
      {
        id: "combat-tips-suppression",
        type: "prose",
        heading: "Weapon suppression as a tactical tool",
        body:
          "Suppression is named alongside firearms and melee as a distinct combat verb, which means it is a real tactic in the field rather than flavor text. Suppression forces the enemy to keep their head down, which lets a teammate or a second player character cross open ground, flank, or loot a body without taking fire. Because Scavland launches as single-player with planned cooperative multiplayer in future updates, suppression also functions as a self-support tactic through cover and timed reloads.\n\nSuppression in a firefight: in an open-world firefight against hostile survivors, sustained fire from a controllable-recoil weapon pins the target behind cover. Use the time to flank, throw a melee distraction, or close distance for a melee finisher. The full attachment options that shape recoil and ammo capacity are on the Scavland weapons page.\n\nSuppression before a bunker breach: before clearing a procedural underground bunker, suppression from the entrance forces defenders back from the doorway and gives your melee loadout a safer entry path. The bunker hazard section below covers the trap and layout reasons this matters.",
        links: [STEAM_STORE],
      },
      {
        id: "combat-tips-day-night",
        type: "prose",
        heading: "Day and night impact on enemies",
        body:
          "The official feature list includes a \"day & night cycle\", which makes time of day a real combat variable rather than a cosmetic toggle. Specific combat subsystems, named enemy types, boss archetypes, and faction-tier rules are not announced as of 2026-09-04; the day/night cycle is confirmed on the Steam store page for AppID 3373500, but the exact behavioral differences between day and night for any specific enemy class are not listed.\n\nDaylight behavior: in daylight, engagements favor longer sight lines and ranged approaches. The exact patrol patterns and the exact detection rules for any specific enemy class are not announced as of 2026-09-04. Quest givers and traders are easier to reach in daylight without stealth; the Scavland quests page covers the contract scheduling side of the loop.\n\nNight behavior: at night, lower visibility pushes engagements toward melee, stealth, and close-quarters tools rather than open-field firearms. The exact detection penalties, the exact aggression shifts, and the exact suppression changes for any specific enemy class are not announced as of 2026-09-04.",
        links: [STEAM_STORE],
      },
      {
        id: "combat-tips-environment",
        type: "prose",
        heading: "Environment and bunker hazards",
        body:
          "The world map and procedural underground bunkers add two more combat variables: terrain and trap density. Both reward preparation over improvisation, and both break loadouts that were built only for open-world fights.\n\nOpen-world terrain hazards: on the world map, broken highway overpasses, dead vehicles, and the ruins of Soviet-era infrastructure provide cover and concealment in equal measure. Use elevation when you have it; the high ground turns suppression into a credible threat. Crossing open ground without a distraction is the most common way new players take avoidable damage, especially at night.\n\nProcedural underground bunker hazards: underground bunkers combine tight corridors, low light, and trap density. Traps reset per run because the bunkers are procedurally generated, which means the layout is fresh but the trap categories repeat. The right play is a stealth entry, a melee finish, and a suppression hold at the entrance — exactly the loadout layering the firearms, melee, stealth, and suppression verbs support.",
        links: [STEAM_STORE],
      },
    ],
    faqIds: ["combat-verbs", "combat-coop-now", "combat-night", "combat-bunkers", "combat-factions"],
    relatedPageIds: ["weapons-attachments", "factions", "quests-contracts"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "quests-contracts",
    translationKey: "quests-contracts",
    locale: "en-US",
    routeKind: "fixed",
    slug: "quests-contracts",
    url: "/quests-contracts",
    pageType: "guide",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland Quests and Contracts: How the Journal and Traders Work",
    seoTitle: "Scavland Quests and Contracts: Traders, Journal, and Reputation",
    metaDescription:
      "Scavland quests and contracts run through main, side, and trader contract boards with a journal that tracks progress. Learn how reputation ties them together.",
    summary:
      "Scavland quests split into main and side quests, and contracts sit alongside them on trader contract boards, all tracked through an in-game journal. Reputation with the 10 factions gates which contracts and which side quests get posted. Named questlines, named contract tiers, and individual trader identities are not announced as of 2026-09-04.",
    hero: {
      eyebrow: "Guide",
      subtitle:
        "How main and side quests, contracts, traders, and the journal interact, and how reputation gates the entire progression system.",
      ctas: [
        { label: "Factions", href: "/factions" },
        { label: "Combat tips", href: "/combat-tips" },
        { label: "Updates", href: "/updates" },
      ],
    },
    quickAnswer:
      "Scavland quests split into main quests and side quests, and contracts sit alongside them on trader contract boards, all tracked through an in-game journal. Reputation with the 10 factions gates which contracts and which side quests get posted, so quest progression and faction standing move together. Named questlines, named contract tiers, and individual trader identities are not announced as of 2026-09-04.",
    keyFacts: [
      { label: "Quest types", value: "Main + side quests" },
      { label: "Contracts", value: "Trader contract boards" },
      { label: "Tracking", value: "In-game journal" },
      { label: "Faction gating", value: "Reputation with 10 factions" },
      { label: "Named content", value: "Questlines, tiers, traders not announced" },
    ],
    modules: [
      {
        id: "quests-main-vs-side",
        type: "prose",
        heading: "Scavland quests: main vs side quests",
        body:
          "The official Steam store feature list for AppID 3373500 names \"main + side quests\" as part of the Early Access feature set, alongside traders, contracts, and a journal that tracks progress. The two quest categories are distinct in purpose even though they share the same delivery systems (settlements, contract boards, the dynamic minimap, and the journal).\n\nMain quests: main quests drive the story arc through the post-apocalyptic Soviet setting. They are scoped to push the player across the handcrafted open world and into specific procedural underground bunkers that the main plot requires. Main quests are the route through which the largest reputation shifts happen, because completing them changes faction standing for the issuing faction and often for its rivals.\n\nSide quests: side quests are the repeatable, optional layer that occupies the time between main quest beats. They typically tie to a single settlement or faction and route through a contract board, a named NPC, or a discovered map marker. Side quests are the reputation grind path: completing them shifts your standing with a single faction more predictably than main quests do, which makes them the right tool for unlocking reputation-gated trader stock and attachment tiers.",
        links: [STEAM_STORE],
      },
      {
        id: "quests-contract-board",
        type: "prose",
        heading: "Contract boards and trader interaction",
        body:
          "Contracts are posted by traders at settlement boards and run alongside the quest system. The Steam store confirms the existence of \"traders\" and \"contracts\" as separate systems, and the practical relationship is that traders operate the contract boards that turn quests into repeatable work. Specific quest/contract taxonomy, named contracts, contract-length tiers, trader identity, contract-endings outcomes, and faction-tier unlock rules are not announced as of 2026-09-04.\n\nContract board layout: a contract board is a settlement object that lists available jobs. The exact fields shown on a contract entry, the exact job categories, and the exact reward rules are not announced as of 2026-09-04. Acceptance stamps the contract into the journal; completion ties back to the issuing trader.\n\nTrader interaction: traders are the NPC face behind each contract board. They also buy and sell loot, sell weapons and attachments from the 25+ weapons and 300+ attachments pool covered on the Scavland weapons page, and unlock inventory at higher standing. The exact threshold rules, the exact tier labels, and the exact inventory shifts are not announced as of 2026-09-04.",
        links: [STEAM_STORE],
      },
      {
        id: "quests-journal",
        type: "prose",
        heading: "Journal categories and progress tracking",
        body:
          "The journal is the in-game tracker that ties quests and contracts together. The Steam store lists it as a feature without describing its tabs, so the practical breakdown is described at a high level. Specific journal tab labels and specific failure rules are not announced as of 2026-09-04.\n\nQuest tracking: the journal records active main and side quests, the issuing faction, the current step, the next objective marker on the world map, and the reward tier. The exact step-recovery rules are not announced as of 2026-09-04.\n\nContract tracking: the journal mirrors the contract board: every accepted contract has a journal entry. The exact fields, the exact timer rules, and the exact cross-references are not announced as of 2026-09-04. Completed contracts stay in the journal as a record of which faction you worked for.\n\nLoot and crafting cross-references: the journal also flags items worth looting for a queued contract and tracks crafting recipes unlocked by completed quests. Specific loot flagging rules and specific crafting unlock chains are not announced as of 2026-09-04. Because the crafting system and the loot economy both feed the contract loop, the journal becomes the hub that decides whether to detour for a quest item or push on to the next main quest beat.",
        links: [STEAM_STORE],
      },
      {
        id: "quests-reputation-impact",
        type: "prose",
        heading: "Reputation impact on contracts and quests",
        body:
          "Reputation with the 10 factions is the gate that decides which side quests, which contracts, and which trader tiers are reachable. The Scavland factions page covers the system in detail; the practical impact on this page is which contracts you see and what they pay. Specific faction-tier unlock rules are not announced as of 2026-09-04.\n\nReputation-gated contracts: a reputation-gated contract only appears once your standing with the issuing faction crosses a threshold. The exact threshold, the exact tier labels, and the exact contract categories per tier are not announced as of 2026-09-04.\n\nReputation costs of accepted contracts: taking a contract from one faction may lower your standing with a rival faction. The exact standing cost, the exact rival list, and the exact visibility rules before acceptance are not announced as of 2026-09-04.\n\nReputation recovery: the Steam store describes the reputation system as a feature but does not name specific repair actions. Specific repair actions are not announced as of 2026-09-04.",
        links: [STEAM_STORE],
      },
      {
        id: "quests-combat-tasks",
        type: "prose",
        heading: "Combat tasks inside contracts",
        body:
          "Many contracts end in a combat encounter that involves clearing a bunker, escorting an NPC through hostile territory, or fighting dangerous creatures. The specific contract categories and the specific named targets are not announced as of 2026-09-04. The combat loadouts that close those encounters are covered on the Scavland combat tips page, and the loadout you bring has to match both the contract type and the faction you are working for. The most recent patch changes to any of these systems are summarized on the Scavland updates page.",
        links: [STEAM_STORE],
      },
    ],
    faqIds: ["quests-vs-contracts", "quests-journal-track", "quests-factions-gate", "quests-can-fail", "quests-patch-summary"],
    relatedPageIds: ["factions", "combat-tips", "updates"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "updates",
    translationKey: "updates-roadmap",
    locale: "en-US",
    routeKind: "fixed",
    slug: "updates",
    url: "/updates",
    pageType: "status",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland Updates: Patch Notes and Early Access Roadmap",
    seoTitle: "Scavland Updates: Latest Patch Notes and Early Access Roadmap",
    metaDescription:
      "Scavland updates land throughout Steam Early Access. Track the latest patch notes, planned co-op, and where to follow official roadmap announcements.",
    summary:
      "Scavland updates land throughout Steam Early Access. The Steam Community hub is the canonical source for each Scavland update entry, and NoShadow and UNSUBSCRIBE have not yet published a public roadmap beyond the launch window. Cooperative multiplayer is listed as a planned future update on the Steam store page.",
    hero: {
      eyebrow: "Status",
      subtitle:
        "How to follow Scavland updates, where to find canonical patch notes, and the current Early Access roadmap status.",
      ctas: [
        { label: "Release date", href: "/release-date" },
        { label: "Multiplayer status", href: "/multiplayer-coop" },
        { label: "Reviews", href: "/reviews" },
      ],
    },
    quickAnswer:
      "Scavland updates land throughout Steam Early Access. As observed 2026-09-04, the Steam Community hub is the official source for each Scavland update entry, and developers NoShadow and publisher UNSUBSCRIBE have not yet published a public roadmap beyond the launch window. Cooperative multiplayer is listed as a planned future update on the Steam store page. No specific post-launch patch version or change list has been published as of this date, so this status page lists confirmed channels only and does not invent a version.",
    keyFacts: [
      { label: "Canonical source", value: "Steam Community hub (AppID 3373500)" },
      { label: "Early Access launch", value: "2026-09-04" },
      { label: "Public roadmap", value: "Not announced as of 2026-09-04" },
      { label: "Co-op status", value: "Planned in future updates" },
      { label: "Developer / co-publisher", value: "NoShadow / NoShadow + UNSUBSCRIBE" },
    ],
    modules: [
      {
        id: "updates-patch-notes",
        type: "prose",
        heading: "Scavland Updates: Latest Patch Notes",
        body:
          "The latest individual Scavland update entry is whatever the Steam Community hub most recently lists at the time you open it, dated and titled by the developer. As observed 2026-09-04, the Scavland Steam Community hub shows news and announcements posted by NoShadow and UNSUBSCRIBE in the lead-up to Early Access. The full text of every patch note is published there first, and this page does not transcribe or paraphrase those notes to avoid drift. Treat each Steam Community entry as the authoritative source for the exact version string, file size, and change list.\n\nTo avoid reading a paraphrased summary as if it were an official log, point readers directly at the hub rather than at any external paraphrase. The Steam Community hub also surfaces an announcement-level summary at the top of each entry, which is enough for most Early Access players to decide whether to restart their client.",
        links: [STEAM_COMMUNITY],
      },
      {
        id: "updates-news-feed",
        type: "prose",
        heading: "Steam Community News Feed Pointer",
        body:
          "The Steam Community hub at https://steamcommunity.com/app/3373500 hosts the live news feed for Scavland. Each post includes a publication date, a developer tag, and links to the matching Steam announcement. As observed 2026-09-04, the hub is the channel where patch notes and small Early Access hotfixes appear before any third-party outlet reprints them. Check the hub first when you want the canonical text of a Scavland update, because the title and description fields of the news entry are written by the developer and rarely differ from the in-client announcement.",
        links: [STEAM_COMMUNITY],
      },
      {
        id: "updates-coop-status",
        type: "prose",
        heading: "Planned Cooperative Multiplayer Status",
        body:
          "The Steam store page describes cooperative multiplayer as planned in future updates, and single-player as the launch mode on Sep 4, 2026. As observed 2026-09-04, the planned Early Access release is Sep 4, 2026, and no specific Scavland update has enabled co-op; the first public patch and the first public Early Access roadmap entries are not announced as of 2026-09-04. Track any change to this status through the Scavland updates news on the Steam Community hub and the developer X account once Early Access opens, then check the Scavland multiplayer page for a refreshed summary.",
        links: [STEAM_STORE, X_LINK],
      },
      {
        id: "updates-roadmap-status",
        type: "prose",
        heading: "Early Access Roadmap Status",
        body:
          "A public Early Access roadmap for Scavland is not announced as of 2026-09-04. The Steam store page references future updates only in the context of cooperative multiplayer. NoShadow has not published a versioned public roadmap listing specific feature milestones, balance passes, content drops, or stability targets beyond launch. The earliest reasonable signal will be a Steam Community news post tagged as an Early Access roadmap; until that post appears, this status section records the absence rather than predicting its content.",
        links: [STEAM_STORE],
      },
      {
        id: "updates-official-channels",
        type: "prose",
        heading: "Where to Follow Official Announcements",
        body:
          "Three official channels carry Scavland updates and roadmap signals: the Steam Community hub news feed, the developer X account at https://x.com/Scavland_, and the official Discord at https://discord.com/invite/scavland. The official site at https://scavland.com/ links to each of these from its community section. The official Patreon at https://www.patreon.com/cw/scavland carries longer-form devlog entries. Pick the channel that matches the urgency of your question: Steam news for ship-time accuracy, X for short status notes, Discord for live clarification, and Patreon for background reasoning.",
        links: [STEAM_COMMUNITY, X_LINK, DISCORD_LINK, PATREON_LINK, OFFICIAL_SITE],
      },
    ],
    faqIds: ["updates-last", "updates-coop-enabled", "updates-public-roadmap"],
    relatedPageIds: ["release-date", "multiplayer-coop", "reviews"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "reviews",
    translationKey: "reviews-launch-impressions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "reviews",
    url: "/reviews",
    pageType: "list",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland Reviews: Early Access Launch Impressions",
    seoTitle: "Scavland Reviews: Early Access Launch Impressions and Press",
    metaDescription:
      "Scavland reviews from Early Access launch window, plus the Reddit recommendation thread, RPGWatch announcement, and Steam store community signal.",
    summary:
      "Scavland is in planned-release state as of 2026-09-04; first Steam store user reviews will appear after the planned Early Access release on Sep 4, 2026. Available signals today are the RPGWatch announcement, a Reddit /r/IndieGaming recommendation thread, and the Steam store community summary. Dedicated critic scores and awards are not announced.",
    hero: {
      eyebrow: "List",
      subtitle:
        "What readers can find on Scavland today without inventing scores: Steam community signal, RPGWatch announcement, and the Reddit recommendation thread.",
      ctas: [
        { label: "Release date", href: "/release-date" },
        { label: "Updates", href: "/updates" },
      ],
    },
    quickAnswer:
      "Scavland is in planned-release state as of 2026-09-04; first Steam store user reviews will appear after the planned Early Access release on Sep 4, 2026. The available Scavland reviews today are the RPGWatch announcement page, a Reddit pre-launch interest thread in /r/IndieGaming, and the Steam store community hub summary. Scavland reviews from major outlets, critic scores, and awards are not announced as of 2026-09-04; this page lists what is available without inventing scores.",
    keyFacts: [
      { label: "Planned release", value: "2026-09-04 (Early Access)" },
      { label: "Editorial reference", value: "RPGWatch announcement" },
      { label: "Community signal", value: "Reddit /r/IndieGaming thread" },
      { label: "Steam store summary", value: "Available on AppID 3373500 page" },
      { label: "Critic scores / awards", value: "Not announced as of 2026-09-04" },
    ],
    modules: [
      {
        id: "reviews-steam-community",
        type: "prose",
        heading: "Steam Store Community Signal",
        body:
          "The Steam store page at https://store.steampowered.com/app/3373500/Scavland/ carries the official community summary alongside the developer description. As observed 2026-09-04, the Steam store shows the app as planned-release rather than as an open Early Access window, so first Steam store user reviews are not announced as of this date. Read the user-written reviews for current impressions and the developer response thread for fixes that have already shipped once the build opens.\n\nThe store community summary should be treated as one data point, not as the final verdict. Steam store user reviews, launch-window reception, and live patching summaries are not announced as of 2026-09-04, so this page points back at the Steam store page rather than freezing a snapshot.",
        links: [STEAM_STORE, STEAM_COMMUNITY],
      },
      {
        id: "reviews-rpgwatch",
        type: "prose",
        heading: "RPGWatch Announcement and Media Coverage",
        body:
          "The RPGWatch announcement page at https://rpgwatch.com/news/scavland--announced-59912.html is the most established editorial reference for Scavland and is the source most external readers will encounter when they search for press coverage. RPGWatch records the genre, the developer NoShadow, the publisher pairing with UNSUBSCRIBE, and the early reception note that positions Scavland as a hardcore pixel art survival RPG set in a Post-Apocalyptic Soviet world. The page is tagged as announcement coverage rather than a review score.\n\nIndependent outlets beyond RPGWatch have not yet posted full reviews for Scavland as of 2026-09-04. Press impressions will likely land once the planned Early Access release on Sep 4, 2026 has had a few weeks of post-launch updates, at which point this page should be refreshed rather than quoted at length here.",
        links: [RPGWATCH],
      },
      {
        id: "reviews-reddit",
        type: "prose",
        heading: "Reddit /r/IndieGaming Recommendation Thread",
        body:
          "A recommendation thread in /r/IndieGaming at https://www.reddit.com/r/IndieGaming/comments/1lhzkad/if_you_havent_yet_i_recommend_checking_out_the/ carries organic pre-launch announcement interest from the indie PC audience. As observed 2026-09-04, the thread is a community signal that the announcement reached players who actively follow Early Access survival RPGs, not a record of post-launch impressions. The thread is useful as evidence that the announcement reached a real audience, not as a critic score, not as an award, and not as a launch reception reading.\n\nTreat Reddit impressions as community evidence with the date of the thread attached. The recommendation tone of that thread supports the launch-reception signal that buyers care about, but it should not be quoted as a verdict.",
        links: [REDDIT_THREAD],
      },
      {
        id: "reviews-disclaimer",
        type: "callout",
        tone: "caution",
        title: "Scavland reviews as observed 2026-09-04",
        body:
          "Every quoted impression on this page is dated and attributed. Scavland is in planned-release state as of 2026-09-04, with a planned Early Access release on Sep 4, 2026; first Steam store user reviews, first media coverage, and first community impressions will appear after that planned release. No critic score, no award, and no aggregated review total is invented on this page. Where a future review might add value, this page leaves the slot open and points to the source that will carry the eventual verdict.",
      },
    ],
    faqIds: ["reviews-major-outlets", "reviews-player-signal", "reviews-worth-playing", "reviews-awards"],
    relatedPageIds: ["release-date", "updates"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "steam-deck",
    translationKey: "steam-deck-compatibility",
    locale: "en-US",
    routeKind: "fixed",
    slug: "steam-deck",
    url: "/steam-deck",
    pageType: "reference",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland Steam Deck: Compatibility and Expected Performance",
    seoTitle: "Scavland Steam Deck: Compatibility and Playability Notes",
    metaDescription:
      "Scavland Steam Deck compatibility is listed on the Steam store, but the official rating (Verified/Playable/Unsupported) is not yet labeled as of 2026-09-04.",
    summary:
      "Scavland Steam Deck compatibility is listed on the Steam store page, but the official Verified, Playable, or Unsupported rating is not yet labeled as of 2026-09-04. Controller support is listed, and the Steam Deck hardware envelope maps to the minimum PC requirements for RAM and dedicated GPU.",
    hero: {
      eyebrow: "Reference",
      subtitle:
        "Where Scavland sits on the Steam Deck compatibility spectrum, what is confirmed, and what is still rated as not yet labeled.",
      ctas: [
        { label: "System requirements", href: "/system-requirements" },
        { label: "Weapons & attachments", href: "/weapons-attachments" },
      ],
    },
    quickAnswer:
      "Scavland Steam Deck compatibility is listed on the Steam store page as a supported configuration, but the official rating label (Verified, Playable, or Unsupported) is not yet labeled as of 2026-09-04. Specific Steam Deck tier behavior, Proton compatibility, native resolution, and in-game text-size behavior are not announced as of 2026-09-04; check the Steam store rating once the Early Access build opens on Sep 4, 2026. Full controller support is listed.",
    keyFacts: [
      { label: "Compatibility flag", value: "Listed on Steam store" },
      { label: "Official rating", value: "Not yet labeled as of 2026-09-04" },
      { label: "Controller support", value: "Listed" },
      { label: "HDR", value: "Not listed as a feature" },
      { label: "Steam Deck hardware envelope", value: "RAM 16 GB unified; APU class" },
    ],
    modules: [
      {
        id: "steam-deck-store-statement",
        type: "prose",
        heading: "Scavland Steam Deck compatibility statement on the Steam store",
        body:
          "The Steam store page at https://store.steampowered.com/app/3373500/Scavland/ lists Scavland Steam Deck compatibility as a supported configuration. The store description includes Steam Deck alongside Windows 10 64-bit PC and controller support, which is the strongest current confirmation that the developer NoShadow and publisher NoShadow and UNSUBSCRIBE expect the title to be playable in handheld mode. The exact rating label is not yet attached as of this date, so the store entry carries the bare compatibility flag rather than a tier.\n\nThe compatibility flag is the meaningful current signal. A Steam store entry that names Steam Deck alongside Windows PC and controller support is the strongest developer-side confirmation available before the formal Verified, Playable, or Unsupported label appears. Scavland's store description reads that way as observed 2026-09-04. Specific Steam Deck tier behavior, Proton compatibility, native resolution, and in-game text-size behavior are not announced as of 2026-09-04.",
        links: [STEAM_STORE],
      },
      {
        id: "steam-deck-rating-status",
        type: "prose",
        heading: "Rating Status: Verified, Playable, or Unsupported",
        body:
          "The Steam Deck rating label for Scavland is not yet labeled as of 2026-09-04. Steam publishes three tiers (Verified, Playable, Unsupported), but Scavland's specific tier is not announced as of this date. Scavland sits in the unrated middle, so this page does not assign a tier and will only refresh the field once the Steam store updates the rating slot.\n\nThe rating slot tends to be filled after launch once Valve and the developer have settled on a default configuration. Watch the Steam store page header for the rating chip to appear, then update the body of this page to mirror the new label. Specific Steam Deck tier behavior, Proton compatibility, native resolution, and in-game text-size behavior are not announced as of 2026-09-04.",
        links: [STEAM_STORE],
      },
      {
        id: "steam-deck-controller",
        type: "prose",
        heading: "Controller Support and Handheld Expectations",
        body:
          "Scavland lists controller support alongside mouse and keyboard on the Steam store page. As observed 2026-09-04, full controller support is listed on the Steam store, and the store description also calls out an original soundtrack and Family Sharing support. Specific Steam Deck tier behavior, Proton compatibility, native resolution, in-game text-size behavior, and controller-remap specifics are not announced as of 2026-09-04.\n\nThe minimum PC requirements on the Steam store page list a dedicated GPU with 2 GB of VRAM, an Intel 2.77 GHz quad-core CPU, and 8 GB of RAM. Recommended RAM is 12 GB on the Steam store page. Whether the Steam Deck hardware envelope maps cleanly to these PC specs is a question the formal rating label will answer once it appears on the Steam store page.",
        links: [STEAM_STORE],
      },
      {
        id: "steam-deck-unrated-window",
        type: "prose",
        heading: "What to Expect During the Unrated Window",
        body:
          "During the unrated window, treat Scavland on Steam Deck as a planned Early Access handheld release rather than a fully tuned product. Specific Steam Deck tier behavior, Proton compatibility, native resolution, and in-game text-size behavior are not announced as of 2026-09-04; this page does not predict how the unrated build will perform in handheld mode.\n\nIf you are deciding whether to install Scavland on Steam Deck during this window, the safer read is to wait for the first rating label and the first round of post-launch hotfixes. If you want to play right away, install through the Steam store page and check the rating chip after the Steam store updates the field.",
        links: [STEAM_STORE],
      },
      {
        id: "steam-deck-oled",
        type: "prose",
        heading: "Caveats for the Steam Deck OLED Model",
        body:
          "The Steam Deck OLED ships with the same APU class and the same 16 GB of unified memory as the LCD model, but with an HDR-capable display. Scavland does not list HDR as a feature on its Steam store page, and specific OLED display behavior on the handheld is not announced as of 2026-09-04. The Scavland Steam Deck rating, once the label appears, will be the authoritative reference for OLED handheld behavior.",
        links: [STEAM_STORE],
      },
      {
        id: "steam-deck-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — Steam Deck rating",
        body:
          "A Verified, Playable, or Unsupported rating chip for Scavland is not announced as of 2026-09-04. Steam Deck rating is set by Valve after launch; this page does not import a third-party guess or an automated test result.",
      },
    ],
    faqIds: ["steam-deck-compatible", "steam-deck-rating", "steam-deck-keyboard", "steam-deck-pc-spec", "steam-deck-oled-hdr"],
    relatedPageIds: ["system-requirements", "weapons-attachments"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "language-support",
    translationKey: "language-support",
    locale: "en-US",
    routeKind: "fixed",
    slug: "language-support",
    url: "/language-support",
    pageType: "reference",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland Languages: Full Interface and Subtitle Support",
    seoTitle: "Scavland Languages: Full Interface and Subtitle List",
    metaDescription:
      "Scavland languages cover 11 interface and subtitle locales: English, French, Italian, German, Spanish, Japanese, Portuguese, Russian, Chinese, and more.",
    summary:
      "Scavland supports 11 interface and subtitle locales on Steam: English, French, Italian, German, Spanish (Spain), Japanese, Portuguese (Brazil), Russian, Simplified Chinese, Spanish (Latin America), and Ukrainian. Audio localization per language is not announced as of 2026-09-04.",
    hero: {
      eyebrow: "Reference",
      subtitle:
        "The exact Scavland language list and what is confirmed versus what is not announced.",
      ctas: [{ label: "Home", href: "/" }],
    },
    quickAnswer:
      "Scavland languages cover 11 interface and subtitle locales on Steam: English, French, Italian, German, Spanish (Spain), Japanese, Portuguese (Brazil), Russian, Simplified Chinese, Spanish (Latin America), and Ukrainian. The Steam store page lists interface and subtitle support together without separating audio, and audio localization per language is not announced as of 2026-09-04; the Steam `supported_languages` metadata lists interface and subtitle coverage only. If your preferred language is not on this list, Scavland will fall back to English in interface and subtitle fields.",
    keyFacts: [
      { label: "Interface + subtitle count", value: "11" },
      { label: "Audio localization", value: "Not announced as of 2026-09-04" },
      { label: "Fallback", value: "English for unsupported locales" },
      { label: "Source", value: "Steam store page (AppID 3373500)" },
      { label: "Ordering", value: "Mirrors the Steam store language list" },
    ],
    modules: [
      {
        id: "languages-full-list",
        type: "prose",
        heading: "Scavland languages: full interface and subtitle list",
        body:
          "The complete Scavland languages list as published on the Steam store page at https://store.steampowered.com/app/3373500/Scavland/ includes the following 11 locales, in the order Steam presents them: English, French, Italian, German, Spanish (Spain), Japanese, Portuguese (Brazil), Russian, Simplified Chinese, Spanish (Latin America), and Ukrainian.\n\nThis table mirrors the Steam store language flags exactly and does not extend the list. Treat the list as a closed set for the Early Access launch window; new locales will only appear once the Steam store page adds them.",
        links: [STEAM_STORE],
      },
      {
        id: "languages-interface-subtitle",
        type: "data-table",
        heading: "Interface and subtitle coverage by locale",
        columns: [
          { key: "locale", label: "Locale" },
          { key: "interface", label: "Interface" },
          { key: "subtitle", label: "Subtitle" },
        ],
        rows: [
          { locale: "English", interface: "Yes", subtitle: "Yes" },
          { locale: "French", interface: "Yes", subtitle: "Yes" },
          { locale: "Italian", interface: "Yes", subtitle: "Yes" },
          { locale: "German", interface: "Yes", subtitle: "Yes" },
          { locale: "Spanish (Spain)", interface: "Yes", subtitle: "Yes" },
          { locale: "Japanese", interface: "Yes", subtitle: "Yes" },
          { locale: "Portuguese (Brazil)", interface: "Yes", subtitle: "Yes" },
          { locale: "Russian", interface: "Yes", subtitle: "Yes" },
          { locale: "Simplified Chinese", interface: "Yes", subtitle: "Yes" },
          { locale: "Spanish (Latin America)", interface: "Yes", subtitle: "Yes" },
          { locale: "Ukrainian", interface: "Yes", subtitle: "Yes" },
        ],
      },
      {
        id: "languages-vs-voice",
        type: "prose",
        heading: "Interface Versus Subtitle Coverage",
        body:
          "The Scavland Steam store page lists each of the 11 locales under interface and subtitle support without separating the two columns. As observed 2026-09-04, every locale that ships with Scavland covers both menus, dialogue boxes, the journal interface, and subtitle text. The store page does not name any locale as subtitle-only or interface-only, so the assumption is full coverage for each entry in the table above.\n\nIf a future Scavland update splits interface and subtitle coverage, this page should be updated to reflect the new column. Until then, the safe read for players is that any of the 11 locales will translate both the UI and the on-screen text.",
        links: [STEAM_STORE],
      },
      {
        id: "languages-voice-acting",
        type: "prose",
        heading: "Voice Acting Status",
        body:
          "Audio localization per language is not announced as of 2026-09-04; the Steam `supported_languages` metadata lists interface and subtitle coverage only. Until a Scavland update or a Steam store change names the languages of any spoken dialogue, this page does not list an audio track language for Scavland. Players should expect subtitle-driven localization for now, consistent with most pixel art survival RPGs in this size class.",
        links: [STEAM_STORE],
      },
      {
        id: "languages-not-included",
        type: "prose",
        heading: "Languages Not Included",
        body:
          "Scavland does not currently list the following commonly requested languages on its Steam store page: Arabic, Traditional Chinese, Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hindi, Hungarian, Indonesian, Korean, Norwegian, Polish, Romanian, Swedish, Thai, Turkish, and Vietnamese. If your language is not on the supported list, Scavland will fall back to English in the interface and subtitle fields.\n\nPlayers who need one of these unsupported locales should watch the Steam store page and the Steam Community hub for an update that adds a new language flag. Until then, the unsupported locales are not promised and not implied by neighboring entries.",
        links: [STEAM_STORE],
      },
      {
        id: "languages-ea-expansion",
        type: "prose",
        heading: "How Language Support May Change in Early Access",
        body:
          "Most Early Access survival RPGs expand their language list during the live support window. As observed 2026-09-04, Scavland launches with the 11 locales listed above and no public commitment to additional languages. Track any addition through the Steam store language flags and through the Scavland updates news feed on the Steam Community hub. When a new locale is added, refresh the language-support page and add the new row to the table without removing any existing row.",
        links: [STEAM_STORE, STEAM_COMMUNITY],
      },
    ],
    faqIds: ["languages-how-many", "languages-voice-acting", "languages-korean", "languages-chinese", "languages-add-more"],
    relatedPageIds: [],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "vs-scavenger-land",
    translationKey: "vs-scavenger-land",
    locale: "en-US",
    routeKind: "fixed",
    slug: "vs-scavenger-land",
    url: "/vs-scavenger-land",
    pageType: "comparison",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland vs Scavenger Land: Two Different Games Explained",
    seoTitle: "Scavland vs Scavenger Land: Which Game Are You Searching For",
    metaDescription:
      "Scavland vs Scavenger Land: Scavland is the Steam PC Early Access survival RPG by NoShadow, while Scavenger Land is an unrelated Google Play mobile game.",
    summary:
      "Scavland and Scavenger Land are not related. Scavland is the Steam PC Early Access survival RPG by NoShadow on AppID 3373500 with a planned Early Access launch on Sep 4, 2026. Scavenger Land is an unrelated Google Play mobile game under the package id com.scavengerland.game.",
    hero: {
      eyebrow: "Disambiguation",
      subtitle:
        "Side-by-side comparison to confirm which game you actually want, plus a disambiguation rule for other \"Scav\" titles.",
      ctas: [
        { label: "Release date", href: "/release-date" },
        { label: "System requirements", href: "/system-requirements" },
        { label: "Home", href: "/" },
      ],
    },
    quickAnswer:
      "Scavland vs Scavenger Land is a frequent confusion, but the two titles are not related. Scavland is the hardcore top-down pixel art survival RPG on Steam (AppID 3373500) by developer NoShadow and publisher NoShadow and UNSUBSCRIBE, planned for Early Access on Sep 4, 2026. Scavenger Land is an unrelated Google Play mobile game with package id com.scavengerland.game. If you searched for one and landed on the other's page, the table and the disambiguation below will point you to the correct store.",
    keyFacts: [
      { label: "Scavland platform", value: "Steam (Windows PC), Steam Deck compatible" },
      { label: "Scavland AppID", value: "3373500 (Demo 3374510)" },
      { label: "Scavenger Land platform", value: "Google Play (Android mobile)" },
      { label: "Scavenger Land package id", value: "com.scavengerland.game" },
      { label: "Shared attributes", value: "None — different developers, platforms, and stores" },
    ],
    modules: [
      {
        id: "vs-comparison-table",
        type: "data-table",
        heading: "Scavland vs Scavenger Land side by side",
        columns: [
          { key: "field", label: "Field" },
          { key: "scavland", label: "Scavland" },
          { key: "scavenger", label: "Scavenger Land" },
        ],
        rows: [
          { field: "Platform", scavland: "Steam (Windows PC), Steam Deck compatible", scavenger: "Google Play (Android mobile)" },
          { field: "Developer", scavland: "NoShadow", scavenger: "Not stated on this site; treat as third-party mobile studio" },
          { field: "Publisher", scavland: "NoShadow and UNSUBSCRIBE", scavenger: "Not stated on this site; treat as third-party mobile publisher" },
          { field: "Genre", scavland: "Hardcore top-down pixel art survival RPG", scavenger: "Mobile game listed on Google Play" },
          { field: "Setting", scavland: "Post-Apocalyptic Soviet world", scavenger: "Not described here as a Scavland fact" },
          { field: "Release model", scavland: "Steam Early Access planned for Sep 4, 2026", scavenger: "Released on Google Play" },
          { field: "Store", scavland: "https://store.steampowered.com/app/3373500/Scavland/", scavenger: "https://play.google.com/store/apps/details?id=com.scavengerland.game" },
          { field: "AppID / package id", scavland: "Steam AppID 3373500 (Demo AppID 3374510)", scavenger: "com.scavengerland.game" },
        ],
      },
      {
        id: "vs-confusion",
        type: "prose",
        heading: "Why the Confusion Happens",
        body:
          "Both names share the word \"Scav\", which is the most common trigger for misrouted traffic. Players who remember a fragment like \"scav game\" or \"scav survival\" can land on either title, especially when one is brand new in Early Access and the other has been on Google Play long enough to capture long-tail autocomplete tails. The Scavland Steam Community hub at https://steamcommunity.com/app/3373500 and the developer X account at https://x.com/Scavland_ are the authoritative pointers for the PC title, while the Google Play listing at https://play.google.com/store/apps/details?id=com.scavengerland.game is the only authoritative pointer for the mobile title.\n\nThis page exists to make that distinction explicit before a reader installs the wrong game. The rest of this site covers Scavland only; nothing here describes Scavenger Land mechanics, story, or content beyond the disambiguation needed to tell the two apart.",
        links: [STEAM_COMMUNITY, X_LINK, SCAVENGER_LAND],
      },
      {
        id: "vs-explicit-disambiguation",
        type: "callout",
        tone: "confirmed",
        title: "Explicit disambiguation",
        body:
          "Scavland is the Steam PC Early Access survival RPG by NoShadow with a planned Early Access release on Sep 4, 2026; as of 2026-09-04 the Steam store shows the app as planned-release. Scavenger Land is an unrelated Google Play mobile game with the package id com.scavengerland.game, and the two titles do not share a developer, publisher, engine, store, or release model. Searching \"Scavland vs Scavenger Land\" usually means the reader is trying to figure out which one they actually want; the answer is determined by platform and genre preference.",
      },
      {
        id: "vs-how-to-reach",
        type: "prose",
        heading: "How to Reach Each Store",
        body:
          "To reach the Scavland Steam store page, open https://store.steampowered.com/app/3373500/Scavland/ directly or search Steam for AppID 3373500. The Steam Community hub at https://steamcommunity.com/app/3373500 carries the live news feed and the discussion board for the PC title. The official site at https://scavland.com/ links to the Steam page, the Steam Community hub, the Discord at https://discord.com/invite/scavland, the developer X account, and the official Patreon at https://www.patreon.com/cw/scavland.\n\nTo reach the Scavenger Land Google Play listing, open https://play.google.com/store/apps/details?id=com.scavengerland.game directly. This page does not describe Scavenger Land gameplay, reviews, or content beyond what is needed to tell the two titles apart, because that information is not the subject of this site.",
        links: [STEAM_STORE, OFFICIAL_SITE, DISCORD_LINK, PATREON_LINK, SCAVENGER_LAND],
      },
      {
        id: "vs-other-scav-titles",
        type: "prose",
        heading: "Other Unrelated \"Scav\" Titles",
        body:
          "A second unrelated IP sometimes appears in the same search results: Scav Prototype, documented on a separate wiki at https://scavprototype.wiki.gg/. Scav Prototype is a different game from both Scavland and Scavenger Land, and is not covered on this site. The two disambiguation targets on this page are Scavland (the Steam PC title by NoShadow) and Scavenger Land (the Google Play mobile title). Any other \"Scav\" title is outside the scope of this disambiguation.",
        links: [],
      },
    ],
    faqIds: ["vs-same-game", "vs-which-steam", "vs-survival-rpg", "vs-shared-developer", "vs-scavland-demo"],
    relatedPageIds: ["release-date", "system-requirements"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },

  {
    id: "death-and-recovery",
    translationKey: "death-and-recovery",
    locale: "en-US",
    routeKind: "fixed",
    slug: "death-and-recovery",
    url: "/death-and-recovery",
    pageType: "guide",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland Death and Loot Recovery: What v0.5.169 Keeps and What You Still Lose",
    seoTitle: "Scavland Death and Loot Recovery: v0.5.169 Death-Mechanic Change and Explorer Mode",
    metaDescription:
      "Scavland death and loot recovery after the v0.5.169 day-one patch: equipment is kept on death, only some backpack items are lost, the recovery beacon still points back to your bag, and Explorer mode is the new death-penalty toggle.",
    summary:
      "Scavland death and loot recovery was rewritten by the v0.5.169 day-one patch on Sep 5, 2026. Equipment is now kept on death — only a subset of backpack items is dropped at the death location — and a new Explorer mode lowers the death penalty further for players focused on map exploration. The dropped backpack, the beacon marker that points back to it, the home-base stash, and the respawn-at-safehouse recovery loop all remain. Permadeath is still not listed as a feature on the Steam store page for AppID 3373500.",
    hero: {
      eyebrow: "Guide",
      subtitle:
        "What the v0.5.169 day-one patch changed about death, how Explorer mode sits on top of it, and how to plan a recovery expedition for the backpack items you do still lose.",
      ctas: [
        { label: "Patch notes", href: "/updates" },
        { label: "Weapons & attachments", href: "/weapons-attachments" },
        { label: "Factions", href: "/factions" },
      ],
    },
    quickAnswer:
      "Scavland death and loot recovery in the current Early Access build (post-v0.5.169 day-one patch on Sep 5, 2026) is materially softer than the pre-patch version. Equipment is kept on death; only a subset of backpack items is dropped at the death location. The home-base stash and character progression are preserved, the player respawns at the safehouse, and a beacon marker on the overworld map points back to the dropped bag. A new Explorer mode lowers the death penalty further for players focused on map exploration. Permadeath is not listed as a feature on the Steam store page for AppID 3373500, and the exact subset of backpack items dropped on death is not yet fully disclosed by NoShadow.",
    keyFacts: [
      { label: "Death mechanic", value: "Equipment kept on death; only some backpack items lost (v0.5.169)" },
      { label: "Explorer mode", value: "Lower death penalty for exploration-focused players (v0.5.169)" },
      { label: "Safehouse stash", value: "Preserved; player respawns at safehouse" },
      { label: "Beacon marker", value: "Death-location beacon on the overworld map" },
      { label: "Permadeath", value: "Not listed as a feature on the Steam store page" },
    ],
    modules: [
      {
        id: "death-and-recovery-cost",
        type: "prose",
        heading: "What a Death Costs in Scavland After the v0.5.169 Patch",
        body:
          "Scavland is framed as a hardcore top-down pixel art survival RPG on the Steam store page, with scarce ammunition, jamming weapons, lethal mutants, and hostile survivors called out as part of the pitch. The v0.5.169 day-one patch on Sep 5, 2026 rebalanced that hardcore framing for the death-cost side. Per the v0.5.169 patch notes mirrored on vgspoilers.com, the build keeps equipment on death rather than wiping the loadout, and only a subset of backpack items is left at the death location. The exact subset is not yet fully disclosed by NoShadow — the patch is documented in summary form rather than as a per-item exclusion list, so treat any specific \"X item type always drops\" claim as unconfirmed.\n\nThe death-cost story therefore splits into three layers. The confirmed v0.5.169 layer is that equipment is preserved on death and only some backpack items are dropped. The pre-patch layer that still applies is the dropped backpack mechanic itself, the home-base stash preservation, and the death-location beacon that points back to where the bag landed. The unconfirmed layer is the exact per-item drop rule for backpack contents, whether the dropped-backpack decay timer changed, and whether quest or faction standing is rolled back. None of these finer points are published as a per-item patch table as of 2026-09-08.\n\nUse the public sources only: the Steam store page for AppID 3373500 for the hardcore pitch and current price; the Steam Discussions index for the live death-mechanic feedback thread \"yeah this is too unforgiving\" by kseidon and the developer-pinned \"We Hear You - Changes Are Coming\" thread by Lucasmml; the community wiki's death-and-recovery guide for the dropped-backpack framing; and the v0.5.169 patch notes mirror for the post-patch mechanic. Confirm anything beyond those in-game before relying on it for a build.",
        links: [STEAM_STORE, STEAM_DISCUSSIONS, SCAVLAND_WIKI_DEATH, VGS_V05169, STEAM_PINNED],
      },
      {
        id: "death-and-recovery-explorer",
        type: "prose",
        heading: "Explorer Mode as the New Death-Penalty Toggle (v0.5.169)",
        body:
          "The v0.5.169 day-one patch introduced Explorer mode as the new lower death-penalty option for Scavland. Per the community wiki updates page summary of the v0.5.169 patch, Explorer mode delivers lower death penalties \"for players focused on map exploration.\" That framing is the closest the public sources come to a difficulty toggle — there is no separate \"Easy / Normal / Hardcore\" switch on the Steam store page, so Explorer mode functions as the death-penalty softening toggle the developer added in response to the \"Death?\" and \"yeah this is too unforgiving\" Steam Discussions threads.\n\nWhat Explorer mode is documented to do: lower the death penalty relative to the default Scavland experience. What is not documented: the exact equipment-versus-backpack split under Explorer mode, whether it changes the beacon decay timer, and whether it changes how the home-base stash or respawn behaviour works. Treat the Explorer mode label as the canonical death-penalty softening option and confirm any further mechanic in-game.\n\nWhat Explorer mode is not: it is not permadeath, it is not a hardcore-exclusive save mode, and it is not a permanent difficulty label printed on the save file. Permadeath is still not listed as a feature on the Steam store page for AppID 3373500, and the difficulty framing outside Explorer mode is whatever the Early Access build ships with.",
        links: [VGS_V05169, SCAVLAND_WIKI_UPDATES, STEAM_DISCUSSIONS],
      },
      {
        id: "death-and-recovery-backpack",
        type: "prose",
        heading: "The Dropped-Backpack Mechanic and What v0.5.169 Still Drops",
        body:
          "The dropped-backpack mechanic is still the spine of the recovery loop after v0.5.169. On death, a subset of backpack items stays in the world as a lootable container at the spot where you died. That container still holds some of the weapons, attachments, ammo, meds, and quest items you walked in with, and it does not despawn instantly. The exact backpack decay timer, the exact loot decay rules, and whether enemy NPCs interact with the dropped bag are not announced as of 2026-09-08; treat the bag as recoverable for at least the length of a single recovery expedition and do not assume it survives indefinitely.\n\nWhat v0.5.169 changed about the backpack: the patch explicitly moved from the pre-patch framing of \"fully dropped backpack + beacon recovery\" to the post-patch framing of \"keep equipment on death, except some backpack items.\" That means the equipment slot itself (weapons, armor, helmet, plate carrier, and any equipped attachment) survives the death by default, and only items inside the backpack slot remain at risk of dropping. The exact items inside the backpack that drop is the part of the mechanic the developer has not published as a per-item table.\n\nPractical reading: if you go into a bunker with your best loadout and die, the run is not over, and the recovery cost is materially lower than it was before v0.5.169. You can return to the bag, recover the items that did drop, and resume the run from the safehouse. The remaining cost is the ammo and meds you spend on the way back, and the risk that the recovery expedition itself ends in another death, in which case the second backpack stacks on top of the first. Plan recovery runs as their own engagement, not as a free do-over.",
        links: [SCAVLAND_WIKI_DEATH, VGS_V05169],
      },
      {
        id: "death-and-recovery-beacon",
        type: "prose",
        heading: "Beacon Markers and the Recovery Window",
        body:
          "A beacon marker is the in-world pointer that shows where the dropped backpack landed. On respawn at your safehouse, a death-location beacon appears on the overworld map for recovery reference — that framing comes from the community wiki death-and-recovery guide, which treats the beacon as the spine of the recovery loop. The exact beacon marker UI (map pin, on-screen arrow, distance readout, decay timer) is not announced as of 2026-09-08, but the practical role of the beacon is unchanged: it is the timer for the window you have to collect the bag.\n\nHow to use the beacon well: read the marker's distance and rough direction the moment the run starts, not after you have already wasted a settlement visit. Decide the recovery loadout before you leave the safe zone — a melee weapon to keep noise low, one ranged sidearm for emergencies, and just enough ammo and meds to survive the second approach. Avoid fast-travel back into the danger zone: a recovery expedition is a fresh engagement with its own ammo budget, and overcommitting ammo on the way back is the most common way a recoverable death becomes a permanent loss.\n\nA small but real v0.5.169 quality-of-life change that affects the recovery window: the patch enabled autosave and added quest-item markers in the inventory. Autosave reduces the cost of a death because progress is preserved more granularly, and the inventory quest-item marker makes the recovery expedition easier because you can see at a glance what is still worth retrieving from the dropped bag.",
        links: [SCAVLAND_WIKI_DEATH, VGS_V05169],
      },
      {
        id: "death-and-recovery-prep",
        type: "prose",
        heading: "How to Prepare a Recovery Expedition Under v0.5.169",
        body:
          "Recovery expeditions in the v0.5.169 build still run under scarce-ammo, jam-prone-weapon pressure, which is why preparation matters more than firepower. The combat verbs the Steam store names — firearms, melee, stealth, and suppression — apply to the recovery trip exactly as they apply to the first push. Stealth the approach, melee the close encounters, and reserve firearms for the suppression pin that lets you grab the bag and extract. The full attachment options that shape recoil and ammo capacity are on the Scavland weapons page, and a controllable-recoil build is the right tool for a recovery expedition that may need to suppress a bunker entrance.\n\nTwo v0.5.169 changes directly affect the recovery expedition. First, player stamina was doubled in v0.5.169, which makes the round-trip to the beacon marker much more forgiving on longer runs and reduces the chance the second death comes from running out of stamina in the open. Second, lit campfires now heal you (when energy and hydration are good), so you can stage a campfire at the midpoint of a long recovery route and regenerate between fights instead of burning meds. Pair the doubled stamina with campfire staging for the cleanest recovery expeditions.\n\nLoadout rules for a recovery expedition:\n\n- Primary: a melee tool with enough reach for bunker corridors; this keeps the muzzle-flash signature low and saves the rifle ammo for the extraction.\n- Secondary: a controllable-recoil sidearm with one magazine for emergencies; do not walk in with a primary magazine budget.\n- Meds: at least one healing item and one stamina item; v0.5.169 added IFAK stacking up to 3 and made Alexei stock more IFAKs, so a stack of three is the realistic expedition budget.\n- Backup plan: know the nearest settlement or safe zone before you leave, so a second death does not strand you across the map.\n\nThe exact ammo economy, the exact attachment slots that affect jamming, and the exact jamming failure rules are not announced as of 2026-09-08. Treat every recovery expedition as a real engagement, not a free do-over.",
        links: [STEAM_STORE, SCAVLAND_WIKI_DEATH, VGS_V05169],
      },
      {
        id: "death-and-recovery-permadeath",
        type: "callout",
        tone: "caution",
        title: "Permadeath and difficulty toggle — explicitly unconfirmed",
        body:
          "Permadeath is not listed as a feature on the Steam store page for Scavland AppID 3373500. The hardcore framing covers scarce ammo, jamming weapons, lethal mutants, and hostile survivors, but the store does not promise that a death deletes the save or wipes the run. Explorer mode is the documented v0.5.169 softening toggle, not a permadeath toggle. A separate Easy / Normal / Hardcore / Survival difficulty list is not announced as of 2026-09-08.\n\nUnconfirmed for the current Early Access build as of 2026-09-08: exact per-item subset of backpack contents dropped on death, exact backpack decay timer post-v0.5.169, exact beacon marker decay, exact Explorer mode equipment-versus-backpack split, and any permadeath or hardcore-exclusive save mode. Track any change on the Steam store page for AppID 3373500 and the Steam Community hub news feed.",
      },
    ],
    faqIds: [
      "death-penalty",
      "death-backpack",
      "death-beacon",
      "death-permadeath",
      "death-difficulty",
      "death-explorer-mode",
    ],
    relatedPageIds: ["updates", "weapons-attachments", "factions"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-08",
  },

  {
    id: "vs-zero-sievert",
    translationKey: "vs-zero-sievert",
    locale: "en-US",
    routeKind: "fixed",
    slug: "vs-zero-sievert",
    url: "/vs-zero-sievert",
    pageType: "comparison",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Scavland vs Zero Sievert: How the Two Extraction Survival RPGs Differ",
    seoTitle: "Scavland vs Zero Sievert: 7 Core Differences for the Buy Decision",
    metaDescription:
      "Scavland vs Zero Sievert compared on ballistics, attachments, factions, the Mist hazard, handcrafted overworld plus procedural bunkers, co-op roadmap, and Act I Early Access launch.",
    summary:
      "Scavland vs Zero Sievert is the comparison the developer-pinned Steam Discussions thread (by Lucasmml, 2026-08-31) makes explicit. Scavland launches as a single-player Act I Early Access build with 25+ weapons and 300+ attachments, a 10-faction reputation system, the Mist anomaly weather, a handcrafted overworld plus procedural underground bunkers, and a planned co-op roadmap. Zero Sievert is a separate post-apocalyptic extraction survival title; only Scavland-side facts are asserted as confirmed here.",
    hero: {
      eyebrow: "Comparison",
      subtitle:
        "The developer-pinned comparison question on Steam, the concrete mechanical axes where Scavland differs from Zero Sievert, and a plain buy recommendation for a Zero Sievert owner.",
      ctas: [
        { label: "Release date", href: "/release-date" },
        { label: "Factions", href: "/factions" },
        { label: "Weapons & attachments", href: "/weapons-attachments" },
      ],
    },
    quickAnswer:
      "Scavland vs Zero Sievert is the explicit comparison thread pinned by the developer on Steam Discussions (by Lucasmml, 2026-08-31), which is the strongest possible signal that buyers arrive with this question. Scavland launches as a single-player Act I Early Access build on Sep 4, 2026 with 25+ weapons and 300+ attachments, a 10-faction dynamic reputation system, the Mist anomaly as a named weather hazard, a handcrafted open world layered with procedural underground bunkers, and a planned cooperative multiplayer roadmap. Zero Sievert is a separate post-apocalyptic extraction survival title; only Scavland-side facts are asserted as confirmed in this comparison, with Zero Sievert framing drawn from the developer-pinned discussion context.",
    keyFacts: [
      { label: "Scavland mode at launch", value: "Single-player; co-op planned in future updates" },
      { label: "Scavland weapons & attachments", value: "25+ weapons and 300+ attachments" },
      { label: "Scavland factions", value: "10 factions with dynamic reputation" },
      { label: "Scavland world", value: "Handcrafted overworld + procedural underground bunkers" },
      { label: "Named hazard", value: "Mist anomaly weather" },
      { label: "Co-op roadmap", value: "Listed as planned on the Steam store page" },
    ],
    modules: [
      {
        id: "vs-zero-sievert-thread",
        type: "prose",
        heading: "Why This Comparison Question Reaches the Store Page",
        body:
          "Scavland vs Zero Sievert is not a side comparison: it is the explicit title of a Steam Discussions thread pinned by the developer Lucasmml on 2026-08-31, which is the strongest possible signal that buyers arrive with this question before they click wishlist or buy. The thread framing is the buyer's framing — what makes Scavland different enough from Zero Sievert to be worth purchasing — and the developer pinned it rather than letting it drift into general discussion. The store page positions Scavland against the broader S.T.A.L.K.E.R. / Tarkov-style extraction survival peer set, and the editorial launch coverage on players.com.ua repeats the same framing, so the comparison question is part of the launch-time intent graph rather than a niche curiosity.\n\nThe community-published hub analysis on scavland.wiki organises the comparison under \"7 core differences: ballistics, attachments, Mist anomaly weather, co-op roadmap\", which is the closest the public sources come to a concrete axis list. This page follows that axis set rather than inventing new ones, because every axis outside the developer-pinned thread and the community hub would be speculation rather than sourced fact.",
        links: [STEAM_DISCUSSIONS, SCAVLAND_WIKI_HUB, PLAYERS_UA],
      },
      {
        id: "vs-zero-sievert-axes",
        type: "data-table",
        heading: "Scavland vs Zero Sievert — concrete axes",
        columns: [
          { key: "axis", label: "Axis" },
          { key: "scavland", label: "Scavland (confirmed)" },
          { key: "zeroSievert", label: "Zero Sievert framing" },
        ],
        rows: [
          {
            axis: "Mode at launch",
            scavland: "Single-player; co-op planned in future updates (Steam store AppID 3373500)",
            zeroSievert: "Separate post-apocalyptic extraction survival title; treat buy-side framing from the pinned Steam Discussions thread only",
          },
          {
            axis: "Weapons & attachments",
            scavland: "25+ firearms and melee tools with 300+ attachments (Steam store AppID 3373500)",
            zeroSievert: "Separate arsenal system; this site does not publish per-weapon counts or named attachment lists",
          },
          {
            axis: "Factions & reputation",
            scavland: "10 factions with dynamic reputation driving traders, contracts, and quest gates (Steam store AppID 3373500)",
            zeroSievert: "Separate faction framing; this site does not publish per-faction counts or reputation mechanics",
          },
          {
            axis: "World structure",
            scavland: "Handcrafted open world layered with procedural underground bunkers (Steam store AppID 3373500)",
            zeroSievert: "Separate world-design framing; this site does not assert procedural or handcrafted claims for Zero Sievert",
          },
          {
            axis: "Named hazard",
            scavland: "Mist anomaly as a named weather hazard (community hub analysis, scavland.wiki)",
            zeroSievert: "Separate hazard framing; this site does not publish a named-hazard list for Zero Sievert",
          },
          {
            axis: "Co-op roadmap",
            scavland: "Cooperative multiplayer listed as planned on the Steam store page; activation date not announced as of 2026-09-04",
            zeroSievert: "Separate co-op framing; this site does not publish a co-op status for Zero Sievert",
          },
          {
            axis: "Early Access window",
            scavland: "Steam Early Access launch on Sep 4, 2026 (Steam store AppID 3373500)",
            zeroSievert: "Outside the scope of this site; this site does not publish release dates for Zero Sievert",
          },
        ],
      },
      {
        id: "vs-zero-sievert-buyer",
        type: "prose",
        heading: "Buy Recommendation for a Zero Sievert Owner",
        body:
          "For a Zero Sievert owner asking whether Scavland is different enough to be worth buying, the honest answer is built only on Scavland-side confirmed facts. Scavland launches as a single-player Act I Early Access build on Sep 4, 2026, with a 25+ weapon and 300+ attachment arsenal, a 10-faction dynamic reputation layer, the Mist anomaly as a named weather hazard, a handcrafted open world layered with procedural underground bunkers, and a planned cooperative multiplayer roadmap that the developer has flagged for future updates rather than enabled at launch.\n\nThe axes where Scavland differs in concrete, sourceable terms are: attachment depth (300+ attachments versus a separate arsenal system), faction reputation (10 factions with dynamic standing versus a separate faction framing), the Mist anomaly as a named hazard (versus a separate weather framing), world structure (handcrafted overworld plus procedural bunkers, both confirmed on the Steam store page), and the co-op roadmap (planned and listed on the store, activation date not announced as of 2026-09-04). Where the source set runs out — per-weapon counts, per-faction identities, exact procedural bunker mechanics, exact Mist behaviour — this site stops asserting facts rather than filling the gap with speculation.\n\nPractical buy signal: if a single-player Act I Early Access survival RPG with a deep attachment system, a 10-faction reputation layer, and a planned co-op roadmap fits what you want from a next title, and you are willing to wait for the planned cooperative update rather than expecting it on day one, Scavland is the buy that matches the developer-pinned comparison thread. If you specifically want cooperative multiplayer at launch, or a finished 1.0 release rather than an Act I Early Access build, this site does not recommend Scavland on those axes because they are not yet true as of 2026-09-04.",
        links: [STEAM_STORE, STEAM_DISCUSSIONS, SCAVLAND_WIKI_HUB],
      },
      {
        id: "vs-zero-sievert-boundary",
        type: "callout",
        tone: "caution",
        title: "Comparison scope — Scavland-side facts only",
        body:
          "This page asserts only Scavland-side facts as confirmed. Scavland-vs-Zero-Sievert mechanical details beyond the axes above (per-weapon counts, per-faction identities, exact Mist behaviour, exact procedural bunker mechanics, named questlines, full co-op activation date) are not announced as of 2026-09-04 in the public sources listed for this task, and this site does not publish them as fact. Track any update on the Steam store page for AppID 3373500 and the Steam Community hub news feed.",
      },
    ],
    faqIds: [
      "vs-zero-sievert-clone",
      "vs-zero-sievert-attachments",
      "vs-zero-sievert-factions",
      "vs-zero-sievert-mist",
      "vs-zero-sievert-buy",
    ],
    relatedPageIds: ["release-date", "factions", "weapons-attachments"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-05",
  },

];
