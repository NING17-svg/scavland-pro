import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const LAST_REVIEWED = "2026-09-04";

export const sitePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: `${site.gameName} Guides`,
    seoTitle: `${site.gameName} Guides | System References and Walkthroughs`,
    metaDescription:
      "Reserved index page for future walkthrough and system reference coverage. Awaiting substantive walkthrough entries.",
    summary:
      "Reserved index page for future walkthrough and system reference coverage of combat, quests, factions, weapons, and early-access systems.",
    hero: {
      eyebrow: "Guides",
      subtitle:
        "Reserved index for future walkthrough and system reference coverage.",
      ctas: [
        { label: "Release date", href: "/release-date" },
        { label: "Updates", href: "/updates" },
      ],
    },
    quickAnswer:
      "This page is a reserved index for future walkthrough and system reference coverage. It currently lists only the planned scope and is awaiting substantive walkthrough entries on a future revision pass.",
    keyFacts: [
      { label: "Status", value: "Reserved index" },
      { label: "Coverage planned", value: "Walkthroughs and system notes" },
      { label: "V3 contract expectation", value: "Excluded via SYSTEM_TRANSLATION_KEYS" },
    ],
    modules: [
      {
        id: "guides-reserved",
        type: "prose",
        heading: "Reserved index",
        body:
          "This URL is reserved as a future entry point for walkthrough and system reference notes covering combat, quests, factions, weapons, and early-access systems. Substantive entries will be added on a future revision pass; until then, readers can use the launch reference hub for release-date, system requirements, factions, weapons, combat, and quest coverage.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["release-date", "updates"],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About the Scavland Guide: unofficial fan reference covering scope, sourcing rules, editorial principles, and current-game fact boundaries.",
    summary:
      "About the Scavland Guide: an unofficial fan reference for Scavland (AppID 3373500) by NoShadow. Sourced to the Steam store page, the official Scavland site, the Steam Community hub, the official X handle, the official Discord, and the official Patreon.",
    hero: {
      eyebrow: "About",
      subtitle:
        "What the Scavland Guide covers, how launch facts are sourced, and what readers should expect from the unofficial fan reference.",
      ctas: [
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
    quickAnswer:
      `${site.name} is an unofficial fan reference for Scavland (NoShadow / NoShadow + UNSUBSCRIBE, planned Early Access release 2026-09-04 on Steam AppID 3373500). It summarises the Steam store page, the Steam Community hub, the official Scavland site, the official X handle, the official Discord, and the official Patreon as of 2026-09-04, and labels anything that is not yet announced as a dated status statement.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Editorial rule", value: "Official sources first; dated status for gaps" },
      { label: "Scope", value: "Release, demo, system requirements, factions, weapons, combat, quests, multiplayer, Steam Deck, languages, disambiguation" },
      { label: "Last-reviewed date", value: LAST_REVIEWED },
    ],
    modules: [
      {
        id: "about-scope",
        type: "prose",
        heading: "Scope",
        body:
          "This site covers the Steam PC Early Access survival RPG Scavland on AppID 3373500 by developer NoShadow with co-publisher UNSUBSCRIBE. The launch hub frames the Early Access release on Sep 4, 2026; reference pages walk through system requirements, factions, weapons, quests, combat, multiplayer status, Steam Deck compatibility, and the supported languages; community pages list the official Discord invite, Steam Discussions, the official X handle, and the official Patreon; and a disambiguation page distinguishes Scavland from the unrelated Google Play mobile game Scavenger Land.",
      },
      {
        id: "about-sourcing",
        type: "prose",
        heading: "Sourcing rules",
        body:
          "Hard current-game facts come from the Steam store page for AppID 3373500, the Steam Community hub for the same AppID, and the official Scavland site at https://scavland.com/. Editorial coverage from RPGWatch is cited as media/interview, and the Reddit /r/IndieGaming thread is cited as community/video for launch-impression demand signal. The SteamDB AppID 3373500 and SteamDB Demo AppID 3374510 pages are used only as discovery pointers, never as primary fact sources. Anything not directly verifiable on those pages as of 2026-09-04 is labeled \"not announced as of 2026-09-04\" and limited to neighboring confirmed facts.",
      },
      {
        id: "about-editorial-principles",
        type: "prose",
        heading: "Editorial principles",
        body:
          "We do not invent weapons, factions, contracts, traders, or quests beyond what the official sources publish. We do not paraphrase Steam Community news entries; instead we point readers at the hub for the canonical text. We date every status statement so the gap between announcement and reveal is honest. We never quote a Reddit thread or a community clip as a verdict, only as community signal.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: `Contact ${site.name}`,
    seoTitle: `Contact ${site.name}`,
    metaDescription:
      "Contact the Scavland Guide via support@scavland.pro for corrections, official source links, and feedback.",
    summary:
      "Direct mail link for corrections, official source links, and feedback about the Scavland Guide.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Email the maintainer of the Scavland Guide with corrections, official source links, or feedback.",
      ctas: [
        { label: "About", href: "/about" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
    quickAnswer:
      "Email support@scavland.pro for corrections, official source links, or feedback about the Scavland Guide.",
    keyFacts: [
      { label: "Email", value: "support@scavland.pro" },
      { label: "Use for", value: "Corrections, official source links, feedback" },
      { label: "Response time", value: "Not announced" },
    ],
    modules: [
      {
        id: "contact-email",
        type: "prose",
        heading: "Direct email",
        body:
          "Send corrections, official source links, and feedback to support@scavland.pro. Include the page URL and the official source link so the maintainer can verify the change before updating the page. The maintainer is a fan of the game and is not affiliated with NoShadow, UNSUBSCRIBE, Valve, or any other trademark owner associated with Scavland.",
      },
      {
        id: "contact-policy",
        type: "prose",
        heading: "What we accept",
        body:
          "We accept correction requests that cite an official source (the Steam store page, the Steam Community hub, the official Scavland site, the official X handle, the official Discord, or the official Patreon). We accept feedback that improves the reading experience. We do not accept requests to remove accurate status statements or to label unannounced features as confirmed. We may discard abusive messages without notice.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: `Privacy Policy for ${site.name}`,
    seoTitle: `Privacy Policy for ${site.name}`,
    metaDescription:
      "Privacy Policy for the Scavland Guide: site-scoped analytics, no advertising network on this site, contact mailbox only.",
    summary:
      "Privacy Policy for the Scavland Guide. Covers analytics, cookies, third-party services, contact mailbox, and editorial scope.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "How the Scavland Guide handles analytics, cookies, third-party services, and the contact mailbox.",
      ctas: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer:
      "The Scavland Guide runs site-scoped analytics only, does not embed advertising networks, and uses the contact mailbox for direct user messages. The site is an unofficial fan reference and does not collect account information.",
    keyFacts: [
      { label: "Analytics", value: "Site-scoped only" },
      { label: "Advertising", value: "None on this site" },
      { label: "Contact", value: "support@scavland.pro" },
      { label: "Account collection", value: "None" },
    ],
    modules: [
      {
        id: "privacy-analytics",
        type: "prose",
        heading: "Analytics",
        body:
          "The site uses site-scoped analytics to understand which Scavland pages are read and in what order. Analytics do not identify individual readers beyond the rough geographic region and the device class, and they are not used to build advertising profiles.",
      },
      {
        id: "privacy-cookies",
        type: "prose",
        heading: "Cookies",
        body:
          "The site sets the cookies and local storage items required for the search overlay, the locale switcher, and the analytics provider. No third-party advertising cookies are set on this site.",
      },
      {
        id: "privacy-third-party",
        type: "prose",
        heading: "Third-party services",
        body:
          "The site links out to the official Steam store page, the Steam Community hub, the official Scavland site, the official X handle, the official Discord invite, the official Patreon, the SteamDB AppID pages, and the RPGWatch announcement coverage. Those third-party destinations have their own privacy policies and operate under their own terms; this Privacy Policy does not cover them.",
      },
      {
        id: "privacy-contact",
        type: "prose",
        heading: "Contact mailbox",
        body:
          "Messages to support@scavland.pro are used only to respond to corrections, official source links, and feedback. The mailbox is not used for marketing, and the address is never shared with third parties.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: `Terms of Use for ${site.name}`,
    seoTitle: `Terms of Use for ${site.name}`,
    metaDescription:
      "Terms of Use for the Scavland Guide: unofficial fan site, official sources only, no advertising on this site, contact mailbox for corrections.",
    summary:
      "Terms of Use for the Scavland Guide: unofficial fan site, accuracy and acceptable-use rules, contact mailbox.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Terms of Use for the Scavland Guide: unofficial status, accuracy, acceptable use, and changes.",
      ctas: [
        { label: "About", href: "/about" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
    quickAnswer:
      "The Scavland Guide is an unofficial fan reference. It summarises official sources for Scavland on Steam AppID 3373500 and labels anything that is not announced as a dated status statement. Use the contact mailbox for corrections.",
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference" },
      { label: "Trademarks", value: "Belong to respective owners" },
      { label: "Accuracy", value: "Re-reviewed on each substantive content pass" },
      { label: "Contact", value: "support@scavland.pro" },
    ],
    modules: [
      {
        id: "terms-unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "The Scavland Guide is not affiliated with NoShadow, UNSUBSCRIBE, Valve, or any other trademark owner associated with Scavland unless explicitly stated. All game-related trademarks, logos, and brand names are the property of their respective owners and are referenced solely for informational identification.",
      },
      {
        id: "terms-accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. The last-reviewed date on each fixed page reflects the most recent substantive review against the Steam store page for AppID 3373500, the Steam Community hub for the same AppID, the official Scavland site, the official X handle, the official Discord, and the official Patreon. Use official sources for final purchase, platform, and release decisions.",
      },
      {
        id: "terms-acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the Scavland Guide, scrape the site aggressively, interfere with service availability, or submit harmful content through the contact mailbox. The maintainer may block abusive clients and discard abusive messages without notice.",
      },
      {
        id: "terms-changes",
        type: "prose",
        heading: "Changes to these terms",
        body:
          "These terms may be updated alongside the launch content and re-reviewed on each substantive content pass. The last-reviewed date on this page reflects the most recent substantive review as of 2026-09-04.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: `${site.gameName} Wiki`,
    seoTitle: `${site.gameName} Wiki | Facts, Systems, and Starter Notes`,
    metaDescription:
      "Reserved index page for future fact and system reference entries. Awaiting substantive coverage.",
    summary:
      "Reserved index page for future fact and system reference entries covering early-access systems and mechanics.",
    hero: {
      eyebrow: "Wiki",
      subtitle:
        "Reserved index for future fact and system reference entries.",
      ctas: [{ label: "Release date", href: "/release-date" }],
    },
    quickAnswer:
      "This page is a reserved index for future fact and system reference entries. Substantive coverage will be added on a future revision pass.",
    keyFacts: [
      { label: "Status", value: "Reserved index" },
      { label: "Coverage planned", value: "Facts and system notes" },
    ],
    modules: [
      {
        id: "wiki-reserved",
        type: "prose",
        heading: "Reserved index",
        body:
          "This URL is reserved as a future entry point for fact and system reference notes covering early-access systems, mechanics, and progression. Substantive entries will be added on a future revision pass.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["release-date"],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common Questions`,
    metaDescription:
      "Reserved index page for future frequently asked questions coverage. Awaiting substantive entries.",
    summary:
      "Reserved index page for future frequently asked questions coverage of release, demo, system requirements, and early-access topics.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Reserved index for future frequently asked questions coverage.",
      ctas: [{ label: "Release date", href: "/release-date" }],
    },
    quickAnswer:
      "This page is a reserved index for future frequently asked questions coverage. Substantive entries will be added on a future revision pass.",
    keyFacts: [
      { label: "Status", value: "Reserved index" },
      { label: "Coverage planned", value: "Common reader questions" },
    ],
    modules: [
      {
        id: "faq-reserved",
        type: "prose",
        heading: "Reserved index",
        body:
          "This URL is reserved as a future entry point for frequently asked questions covering release date, demo availability, system requirements, multiplayer, and early-access topics. Substantive entries will be added on a future revision pass.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["release-date"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
];
