import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Scavland",
  brandMark: "Scav",
  gameName: "Scavland",
  domain: "scavland.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://scavland.pro").replace(/\/$/, ""),
  description:
    "Scavland guide hub — release date, demo, system requirements, factions, weapons, combat, quests, multiplayer status, Steam Deck playability, and the Steam Early Access survival RPG by NoShadow on AppID 3373500.",
  tagline: "Hardcore top-down pixel art survival RPG reference hub for Scavland on Steam.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Scavland Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Steam store page for Scavland",
      href: "https://store.steampowered.com/app/3373500/Scavland/",
      description: "Official Steam store listing for Scavland AppID 3373500 by developer NoShadow.",
    },
  ],
  disclaimer:
    "Unofficial community guide. All hard current-game facts are sourced from the official Steam store page and the developer's official channels.",
};
