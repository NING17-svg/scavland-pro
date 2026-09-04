import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // ============================================================
  // Home page FAQs (4)
  // ============================================================
  {
    id: "home-when-release",
    question: "When does Scavland come out?",
    answer:
      "Scavland release date is planned for Sep 4, 2026 in Steam Early Access on AppID 3373500. The Steam store page for AppID 3373500 and the official Scavland site at https://scavland.com/ both list Sep 4, 2026 as the planned Early Access launch date. Single-player is the planned launch mode; cooperative multiplayer is listed by the developer as a future update rather than a launch feature. Any change to the date will surface first on the Steam store entry, the Steam Community hub at https://steamcommunity.com/app/3373500, the official X handle at https://x.com/Scavland_, the official Discord at https://discord.com/invite/scavland, and the official Patreon at https://www.patreon.com/cw/scavland.",
    pageIds: ["home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-who-develops",
    question: "Who develops Scavland?",
    answer:
      "NoShadow is the developer of record for Scavland, with UNSUBSCRIBE listed as co-publisher on the same Steam store entry. The official site at https://scavland.com/ and the Steam Community hub at https://steamcommunity.com/app/3373500 confirm the developer / co-publisher pairing as of 2026-09-04.",
    pageIds: ["home"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-co-op",
    question: "Does Scavland have co-op at launch?",
    answer:
      "Scavland is planned to launch as a single-player build on Sep 4, 2026. Cooperative multiplayer is listed on the Steam store entry for AppID 3373500 as a planned future update rather than a launch feature, and the activation date is not announced as of 2026-09-04. Track any change to co-op status on the Steam Community hub and the official Discord at https://discord.com/invite/scavland.",
    pageIds: ["home"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-vs-scavenger-land",
    question: "Is Scavland the same as Scavenger Land?",
    answer:
      "No. Scavland is the Steam PC Early Access survival RPG by NoShadow (AppID 3373500), while Scavenger Land is an unrelated Google Play mobile game with package id com.scavengerland.game. They share the word \"Scav\" but have different developers, platforms, genres, release models, and stores. A side-by-side Scavland vs Scavenger Land comparison page breaks the two apart.",
    pageIds: ["home"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // Release Date page FAQs (3)
  // ============================================================
  {
    id: "release-date-when",
    question: "When is the Scavland release date?",
    answer:
      "Scavland release date is Sep 4, 2026 in Steam Early Access on AppID 3373500. The date is sourced from the Steam store entry for AppID 3373500 and the official Scavland site, both checked 2026-09-04.",
    pageIds: ["release-date"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-date-ea-vs-full",
    question: "Is the Sep 4, 2026 release an Early Access or full launch?",
    answer:
      "Sep 4, 2026 is the planned Steam Early Access release date. The Steam store entry describes the launch as Early Access with co-op listed as a planned future update. A full 1.0 exit date is not announced as of 2026-09-04.",
    pageIds: ["release-date"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-date-track-changes",
    question: "Where should I watch for changes to the Scavland release date?",
    answer:
      "Watch the Steam store entry for AppID 3373500 and the Steam Community hub at https://steamcommunity.com/app/3373500, plus the official X handle at https://x.com/Scavland_, the official Discord at https://discord.com/invite/scavland, and the official Patreon at https://www.patreon.com/cw/scavland. The Steam Community hub is the canonical source for any change to the release date.",
    pageIds: ["release-date"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // Demo page FAQs (3)
  // ============================================================
  {
    id: "demo-exists",
    question: "Does a Scavland demo exist?",
    answer:
      "A Scavland demo entry exists on SteamDB as Demo AppID 3374510. Whether that entry is a public, playable demo build is not announced as of 2026-09-04. Check the Steam store page for AppID 3374510 and the Steam Community hub for AppID 3373500 for the latest demo status.",
    pageIds: ["demo"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "demo-coop",
    question: "Does the Scavland demo support co-op?",
    answer:
      "The Scavland demo is expected to mirror the Early Access build, which is planned to launch as single-player on Sep 4, 2026 with cooperative multiplayer listed as a planned future update. Whether the demo entry on Demo AppID 3374510 ships with co-op is not announced as of 2026-09-04.",
    pageIds: ["demo"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "demo-save-carry",
    question: "Does the Scavland demo save carry over to Early Access?",
    answer:
      "Demo save carry-over to the Early Access build is not announced as of 2026-09-04. The demo entry on Demo AppID 3374510 and the main build on AppID 3373500 are listed as separate Steam entries, so players should treat them as independent until the Steam store or the developer confirms carry-over.",
    pageIds: ["demo"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // System Requirements page FAQs (5)
  // ============================================================
  {
    id: "sysreq-min",
    question: "What are the Scavland minimum PC requirements?",
    answer:
      "The Scavland minimum PC spec is Windows 10 64-bit, an Intel 2.77 GHz quad-core CPU, 8 GB of RAM, a dedicated GPU with 2 GB of VRAM and DirectX 11 support, an FMOD-compatible sound card, and approximately 2 GB of storage. Source: Steam store entry for AppID 3373500, as observed 2026-09-04.",
    pageIds: ["system-requirements"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sysreq-ram",
    question: "How much RAM does Scavland need?",
    answer:
      "The Scavland system requirements list 8 GB of RAM as the minimum and 12 GB of RAM as the recommended amount, on Windows 10 64-bit PCs. Recommended RAM rises to 12 GB; the rest of the spec line stays the same as the minimum. Source: Steam store entry for AppID 3373500.",
    pageIds: ["system-requirements"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sysreq-deck",
    question: "Does Scavland run on Steam Deck?",
    answer:
      "The Steam store entry for AppID 3373500 lists Steam Deck compatibility for Scavland. The official Verified, Playable, or Unsupported rating is not yet labeled as of 2026-09-04, so handheld expectations should be treated as provisional until Steam assigns a tier. The minimum PC spec of 8 GB of RAM maps to the Steam Deck's 16 GB of unified memory, and the dedicated GPU requirement is the usual rough check on Deck-grade hardware.",
    pageIds: ["system-requirements", "steam-deck"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sysreq-integrated",
    question: "Can I run Scavland on integrated graphics?",
    answer:
      "The Scavland system requirements list a dedicated GPU with 2 GB of VRAM as the minimum spec; the Steam store entry does not list an integrated graphics tier. Players on integrated graphics should expect to fall short of the minimum spec until a Steam Deck or laptop GPU profile is confirmed.",
    pageIds: ["system-requirements"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "sysreq-disk",
    question: "How much disk space does Scavland need?",
    answer:
      "The Scavland Steam store entry lists approximately 2 GB of available storage as the minimum requirement. Modern SSDs are well above that threshold, and the small footprint makes the storage bar the easiest part of the spec to satisfy.",
    pageIds: ["system-requirements"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // Multiplayer / Co-op page FAQs (3)
  // ============================================================
  {
    id: "multiplayer-at-launch",
    question: "Is Scavland multiplayer at launch?",
    answer:
      "Scavland multiplayer is planned to launch as single-player on Sep 4, 2026 in Steam Early Access on AppID 3373500. Cooperative multiplayer is listed by the developer as planned in future updates, but the activation date is not announced as of 2026-09-04.",
    pageIds: ["multiplayer-coop"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "multiplayer-coop-when",
    question: "When will Scavland co-op be available?",
    answer:
      "The Steam store entry describes cooperative multiplayer as a planned future update for Scavland; the activation date is not announced as of 2026-09-04. Watch the Steam Community hub, the official X handle, and the official Discord for any change to this status.",
    pageIds: ["multiplayer-coop"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "multiplayer-family-sharing",
    question: "Does Scavland support Steam Family Sharing?",
    answer:
      "Yes. Family Sharing is listed as a supported Steam feature for AppID 3373500 and is planned to ship with the Early Access release. Steam Achievements and Steam Cloud are also listed as supported.",
    pageIds: ["multiplayer-coop"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // Discord Community page FAQs (5)
  // ============================================================
  {
    id: "discord-only-channel",
    question: "Is the Scavland Discord the only official chat?",
    answer:
      "The official Scavland Discord at https://discord.com/invite/scavland is the primary chat destination, but it is not the only official channel. The Steam Community hub at https://steamcommunity.com/app/3373500 runs the official Discussions tab, the official X handle at https://x.com/Scavland_ carries short updates, and the official Patreon at https://www.patreon.com/cw/scavland carries long-form devlogs. All four are cross-linked from the Steam store and the official site at https://scavland.com/.",
    pageIds: ["discord-community"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "discord-buy-required",
    question: "Do I need to buy Scavland to join the Discord?",
    answer:
      "No. The official Scavland Discord at https://discord.com/invite/scavland is open to anyone; purchase is not required to read channels or follow announcements.",
    pageIds: ["discord-community"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "discord-patch-notes",
    question: "Where do Scavland patch notes appear?",
    answer:
      "Patch notes appear first on the Steam Community hub at https://steamcommunity.com/app/3373500, then are re-shared on the official Discord at https://discord.com/invite/scavland and the official X handle at https://x.com/Scavland_. The Steam hub is the canonical text; the Discord and X summaries are short-form reposts.",
    pageIds: ["discord-community", "updates"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "discord-family-sharing",
    question: "Can Family Sharing recipients see Scavland Discord updates?",
    answer:
      "Discord membership is independent of Steam purchase, so Family Sharing recipients can follow the official Discord at https://discord.com/invite/scavland without buying the game. They will not see Steam-specific family invites, but the Discord channel and the public Steam Discussions tab at https://steamcommunity.com/app/3373500 are open to anyone.",
    pageIds: ["discord-community"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "discord-bug-report",
    question: "Where should I file Scavland bug reports?",
    answer:
      "File bug reports on the Steam Discussions tab at https://steamcommunity.com/app/3373500 or in the bug-report channel of the official Discord at https://discord.com/invite/scavland. Include reproduction steps, system specs, and a save file reference where relevant.",
    pageIds: ["discord-community"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // Factions page FAQs (5)
  // ============================================================
  {
    id: "factions-how-many",
    question: "How many factions does Scavland have?",
    answer:
      "Scavland has 10 factions per the official Steam store feature list for AppID 3373500. The exact named roster of all ten is not listed on the Steam store page at the time of writing.",
    pageIds: ["factions"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "factions-named-roster",
    question: "What are the names of all 10 Scavland factions?",
    answer:
      "The Steam store entry for AppID 3373500 lists 10 factions with reputation but does not publish a named roster. The exact named list is not announced as of 2026-09-04. In-game discovery and the Steam Community hub news feed are the places to confirm faction names once they ship.",
    pageIds: ["factions"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "factions-combat",
    question: "Can I fight factions in Scavland?",
    answer:
      "Yes. Reputation drives whether a faction is friendly, neutral, or hostile, and hostile factions appear on the dynamic minimap as enemy markers. Specific hostile-event triggers, faction-tier combat thresholds, and named enemy types are not announced as of 2026-09-04.",
    pageIds: ["factions", "combat-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "factions-repair",
    question: "Can I repair my Scavland faction reputation?",
    answer:
      "The Steam store entry lists reputation as a feature and the survival loop supports side quests and contracts as a way to shift standing. The exact reputation tier labels, exact repair actions, and exact standing-cost rules for accepting rival contracts are not announced as of 2026-09-04.",
    pageIds: ["factions"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "factions-in-bunkers",
    question: "Do factions appear inside procedural bunkers?",
    answer:
      "Yes. Procedural underground bunkers include faction banners and signage that mark previous or current holders. The exact per-faction signage set, the exact trap density by faction, and the exact loot tables per faction are not announced as of 2026-09-04.",
    pageIds: ["factions", "combat-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // Weapons & Attachments page FAQs (5)
  // ============================================================
  {
    id: "weapons-how-many",
    question: "How many weapons does Scavland have?",
    answer:
      "The Steam store entry for AppID 3373500 lists 25+ weapons in the Early Access build, spanning firearms and melee tools. Named weapon models and per-weapon stats are not announced as of 2026-09-04.",
    pageIds: ["weapons-attachments"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "weapons-attachments-how-many",
    question: "How many attachments does Scavland have?",
    answer:
      "The Steam store entry for AppID 3373500 lists 300+ attachments that customize the 25+ weapons in the arsenal. Named attachment categories and per-weapon slot counts are not announced as of 2026-09-04.",
    pageIds: ["weapons-attachments"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "weapons-attachments-where",
    question: "Where do I get attachments in Scavland?",
    answer:
      "Attachments come from looting the world map and procedural bunkers, from reputation-gated traders, and from the crafting system. The exact named attachment sources, exact reputation thresholds, and exact crafting recipes are not announced as of 2026-09-04.",
    pageIds: ["weapons-attachments"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "weapons-attachments-combat-impact",
    question: "Do attachments change combat in Scavland?",
    answer:
      "Yes. Attachments modify weapon behavior such as recoil, fire rate, magazine size, and suppression effectiveness, which directly shapes the firearms, melee, stealth, and suppression combat verbs on the combat tips page. Specific stat deltas per attachment are not announced as of 2026-09-04.",
    pageIds: ["weapons-attachments", "combat-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "weapons-categories",
    question: "What categories of weapons does Scavland ship with?",
    answer:
      "The Steam store entry lists firearms and melee as the two broad categories that make up the 25+ weapons. Specific named models and category-specific sub-types are not announced as of 2026-09-04.",
    pageIds: ["weapons-attachments"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // Combat Tips page FAQs (5)
  // ============================================================
  {
    id: "combat-verbs",
    question: "What combat styles does Scavland support?",
    answer:
      "The Steam store entry for AppID 3373500 names four tactical combat verbs: firearms, melee, stealth, and suppression. Each one maps to a different loadout from the 25+ weapon and 300+ attachment arsenal, and each performs differently between day and night against mutants and hostile survivors.",
    pageIds: ["combat-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "combat-coop-now",
    question: "Is co-op combat in Scavland right now?",
    answer:
      "No. Scavland launches as single-player on Sep 4, 2026; cooperative multiplayer is listed as a planned future update. Combat verbs (firearms, melee, stealth, suppression) work in the planned single-player launch; co-op combat activation is not announced as of 2026-09-04.",
    pageIds: ["combat-tips", "multiplayer-coop"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "combat-night",
    question: "How does night change Scavland combat?",
    answer:
      "The official feature list includes a day and night cycle, which changes engagement profiles. Specific enemy-type behavior shifts between day and night, exact detection rules, and exact aggression modifiers are not announced as of 2026-09-04. Treat night as a meaningful shift toward melee, stealth, and close-quarters loadouts without quoting named multipliers.",
    pageIds: ["combat-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "combat-bunkers",
    question: "How dangerous are procedural bunkers in Scavland?",
    answer:
      "Procedural underground bunkers combine tight corridors, low light, and trap density that resets per run because the bunkers are procedurally generated. The exact trap categories, exact per-faction trap density, and exact loot tables per bunker are not announced as of 2026-09-04.",
    pageIds: ["combat-tips"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "combat-factions",
    question: "Do factions change how I fight?",
    answer:
      "Yes. Reputation with the 10 factions determines whether a faction is friendly, neutral, or hostile, which changes patrol density, attack thresholds, and trader inventory at settlements. Specific per-faction combat modifiers, named enemy types, and any boss archetypes are not announced as of 2026-09-04.",
    pageIds: ["combat-tips", "factions"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // Quests & Contracts page FAQs (5)
  // ============================================================
  {
    id: "quests-vs-contracts",
    question: "What is the difference between Scavland quests and contracts?",
    answer:
      "The Steam store entry for AppID 3373500 names main quests, side quests, traders, and contracts as separate but connected systems. Main quests drive the story arc; side quests are the optional reputation-grind layer; contracts are repeatable jobs posted by traders on settlement contract boards. All four are tracked through the in-game journal.",
    pageIds: ["quests-contracts"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "quests-journal-track",
    question: "Does Scavland have a journal?",
    answer:
      "Yes. The Steam store entry lists a journal that tracks quest and contract progress alongside map and crafting context. Specific journal tab labels and exact failure rules are not announced as of 2026-09-04.",
    pageIds: ["quests-contracts"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "quests-factions-gate",
    question: "Do factions gate Scavland quests?",
    answer:
      "Yes. Reputation with the 10 factions determines which side quests, which contracts, and which trader tiers are reachable. Exact faction-tier unlock rules and exact reputation thresholds are not announced as of 2026-09-04.",
    pageIds: ["quests-contracts", "factions"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "quests-can-fail",
    question: "Can I fail a Scavland quest or contract?",
    answer:
      "Specific quest-failure rules, timer rules, and side-effect rules are not announced as of 2026-09-04. Treat all accepted quests and contracts as completable while you stay alive, and watch the journal for any failure flag once Early Access opens.",
    pageIds: ["quests-contracts"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "quests-patch-summary",
    question: "Where do I read the latest Scavland quest changes?",
    answer:
      "Read the latest Scavland quest changes on the Steam Community hub at https://steamcommunity.com/app/3373500 and the Scavland updates page. The Steam hub is the canonical source for any change to quest or contract systems.",
    pageIds: ["quests-contracts", "updates"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // Updates / Roadmap page FAQs (3)
  // ============================================================
  {
    id: "updates-last",
    question: "What is the latest Scavland update?",
    answer:
      "The latest individual Scavland update entry is whatever the Steam Community hub at https://steamcommunity.com/app/3373500 most recently lists at the time you open it. As observed 2026-09-04, the hub shows news and announcements posted by NoShadow and UNSUBSCRIBE in the lead-up to Early Access.",
    pageIds: ["updates"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "updates-coop-enabled",
    question: "Has Scavland co-op been enabled by an update yet?",
    answer:
      "As observed 2026-09-04, no Scavland update has enabled cooperative multiplayer. The Steam store page describes co-op as a planned future update and the planned Early Access release is single-player. Watch the Steam Community hub and the Scavland multiplayer page for any change.",
    pageIds: ["updates", "multiplayer-coop"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "updates-public-roadmap",
    question: "Is there a public Scavland Early Access roadmap?",
    answer:
      "A public Early Access roadmap for Scavland is not announced as of 2026-09-04. The Steam store page references future updates only in the context of cooperative multiplayer. The earliest reasonable signal will be a Steam Community news post tagged as an Early Access roadmap.",
    pageIds: ["updates"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // Reviews page FAQs (4)
  // ============================================================
  {
    id: "reviews-major-outlets",
    question: "Have major outlets reviewed Scavland yet?",
    answer:
      "Independent outlets beyond RPGWatch have not yet posted full reviews for Scavland as of 2026-09-04. Press impressions will likely land once the planned Early Access release on Sep 4, 2026 has had a few weeks of post-launch updates.",
    pageIds: ["reviews"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "reviews-player-signal",
    question: "What is the player signal for Scavland?",
    answer:
      "Pre-launch player signal includes the RPGWatch announcement at https://rpgwatch.com/news/scavland--announced-59912.html, a Reddit /r/IndieGaming recommendation thread at https://www.reddit.com/r/IndieGaming/comments/1lhzkad/if_you_havent_yet_i_recommend_checking_out_the/, and the Steam store community hub summary on AppID 3373500. These are dated community signals, not critic scores.",
    pageIds: ["reviews"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "reviews-worth-playing",
    question: "Is Scavland worth playing at Early Access launch?",
    answer:
      "Worth-playing is a judgment that depends on your appetite for hardcore survival RPGs and your willingness to play through a planned single-player Early Access window. The Scavland launch hub summarises what the planned Sep 4, 2026 release includes, and the Steam Community hub will carry the first post-launch impressions.",
    pageIds: ["reviews"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "reviews-awards",
    question: "Has Scavland won any awards?",
    answer:
      "Scavland awards are not announced as of 2026-09-04. The available signals are the RPGWatch announcement page, the Reddit /r/IndieGaming recommendation thread, and the Steam store community summary on AppID 3373500; awards and aggregator totals will be added here if they appear.",
    pageIds: ["reviews"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // Steam Deck page FAQs (5)
  // ============================================================
  {
    id: "steam-deck-compatible",
    question: "Is Scavland compatible with Steam Deck?",
    answer:
      "The Steam store entry for AppID 3373500 lists Scavland Steam Deck compatibility as a supported configuration. The official Verified, Playable, or Unsupported rating is not yet labeled as of 2026-09-04, so the compatibility flag is the strongest current confirmation.",
    pageIds: ["steam-deck"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "steam-deck-rating",
    question: "What is the Scavland Steam Deck rating?",
    answer:
      "The Scavland Steam Deck rating is not yet labeled as of 2026-09-04. Steam publishes three tiers (Verified, Playable, Unsupported); Scavland's specific tier is not assigned yet, and this page will refresh the field once Steam assigns a label.",
    pageIds: ["steam-deck"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "steam-deck-keyboard",
    question: "Do I need a keyboard for Scavland on Steam Deck?",
    answer:
      "Controller support is listed on the Steam store entry for Scavland. Whether the Steam Deck build requires keyboard input for any subsystem is not announced as of 2026-09-04; the official rating will determine whether on-screen keyboard prompts are needed.",
    pageIds: ["steam-deck"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "steam-deck-pc-spec",
    question: "Does the Scavland minimum PC spec match Steam Deck hardware?",
    answer:
      "The Scavland minimum PC spec is 8 GB of RAM and a dedicated GPU with 2 GB of VRAM. Steam Deck hardware ships with 16 GB of unified memory and an APU class GPU; whether the APU meets the dedicated GPU requirement is a question the formal rating label will answer once it appears on the Steam store.",
    pageIds: ["steam-deck", "system-requirements"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "steam-deck-oled-hdr",
    question: "Does Scavland support HDR on Steam Deck OLED?",
    answer:
      "Scavland does not list HDR as a feature on its Steam store page. Specific OLED display behavior, including HDR support, is not announced as of 2026-09-04. The Scavland Steam Deck rating, once the label appears, will be the authoritative reference for OLED handheld behavior.",
    pageIds: ["steam-deck"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // Languages page FAQs (5)
  // ============================================================
  {
    id: "languages-how-many",
    question: "How many languages does Scavland support?",
    answer:
      "Scavland supports 11 interface and subtitle locales on Steam: English, French, Italian, German, Spanish (Spain), Japanese, Portuguese (Brazil), Russian, Simplified Chinese, Spanish (Latin America), and Ukrainian.",
    pageIds: ["language-support"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "languages-voice-acting",
    question: "Does Scavland have voice acting in my language?",
    answer:
      "Audio localization per language is not announced as of 2026-09-04; the Steam supported_languages metadata lists interface and subtitle coverage only. Until a Scavland update or a Steam store change names the languages of any spoken dialogue, expect subtitle-driven localization for the 11 supported locales.",
    pageIds: ["language-support"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "languages-korean",
    question: "Is Korean supported in Scavland?",
    answer:
      "Korean is not on the current 11-locale list for Scavland. The Steam store page lists English, French, Italian, German, Spanish (Spain), Japanese, Portuguese (Brazil), Russian, Simplified Chinese, Spanish (Latin America), and Ukrainian as of 2026-09-04.",
    pageIds: ["language-support"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "languages-chinese",
    question: "Does Scavland support Chinese?",
    answer:
      "Simplified Chinese is on the Scavland language list. Traditional Chinese is not on the current 11-locale list as of 2026-09-04. Players who need Traditional Chinese should watch the Steam store language flags for an update.",
    pageIds: ["language-support"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "languages-add-more",
    question: "Will Scavland add more languages during Early Access?",
    answer:
      "Additional Scavland language support during Early Access is not announced as of 2026-09-04. Track any addition through the Steam store language flags and the Steam Community hub news feed at https://steamcommunity.com/app/3373500.",
    pageIds: ["language-support", "updates"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // ============================================================
  // Scavland vs Scavenger Land FAQs (5)
  // ============================================================
  {
    id: "vs-same-game",
    question: "Are Scavland and Scavenger Land the same game?",
    answer:
      "No. Scavland is the Steam PC Early Access survival RPG by NoShadow on AppID 3373500. Scavenger Land is an unrelated Google Play mobile game with package id com.scavengerland.game. The two titles do not share a developer, publisher, engine, store, or release model.",
    pageIds: ["vs-scavenger-land"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "vs-which-steam",
    question: "Which one is the Steam game?",
    answer:
      "Scavland is the Steam game on AppID 3373500 (Demo AppID 3374510). Scavenger Land is on Google Play under the package id com.scavengerland.game, not Steam.",
    pageIds: ["vs-scavenger-land"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "vs-survival-rpg",
    question: "Is Scavland the survival RPG?",
    answer:
      "Yes. Scavland is the hardcore top-down pixel art survival RPG set in a Post-Apocalyptic Soviet world on Steam AppID 3373500. Scavenger Land is an unrelated Google Play mobile game and is not described here as a survival RPG.",
    pageIds: ["vs-scavenger-land"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "vs-shared-developer",
    question: "Do Scavland and Scavenger Land share a developer?",
    answer:
      "No. Scavland is developed by NoShadow with co-publisher UNSUBSCRIBE. Scavenger Land is an unrelated Google Play mobile title under a different developer; the two studios are not connected.",
    pageIds: ["vs-scavenger-land"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "vs-scavland-demo",
    question: "Where is the Scavland demo?",
    answer:
      "The Scavland demo entry is on SteamDB as Demo AppID 3374510, linked from the main page on AppID 3373500. Whether the demo entry is a public, playable demo build is not announced as of 2026-09-04. The main Early Access release is on AppID 3373500 with a planned launch date of Sep 4, 2026.",
    pageIds: ["vs-scavenger-land", "demo"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
