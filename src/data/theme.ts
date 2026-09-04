import type { ThemeConfig } from "@/types/theme";

// Scavland — V3 dark bunker-survival theme.
// Implemented strictly from /site-launch/tasks/scavland-pro/design/theme-spec.md.
// Single shared theme for every launch locale (en-US); no per-locale token set,
// shell variant, or visual direction exists. Identity is conveyed through
// bunker-charcoal surfaces, aged parchment foreground type, Soviet-blood red
// accents, hazard-amber highlights, and a faint industrial grid motif — never
// through the official logo.

export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#1a1b1f",
    surface1: "#23242a",
    surface2: "#2c2d34",
    surface3: "#363740",
    surfaceInverse: "#ece4cb",
    textPrimary: "#ece4cb",
    textMuted: "#a59c87",
    textInverse: "#1a1b1f",
    textOnAccentPrimary: "#f6efd6",
    textLink: "#6fb6c4",
    focusRing: "#f0b956",
    line: "#3a3b42",
    lineStrong: "#6b5a44",
    accentPrimary: "#9c2f2a",
    accentSecondary: "#5a6975",
    accentBright: "#f0b956",
    statusConfirmed: "#8fbf6a",
    statusCaution: "#e8a847",
    statusUnknown: "#b5ad9b",
  },
  typography: {
    headingFamily: "Oswald, 'Roboto Condensed', 'Helvetica Neue', Arial, sans-serif",
    bodyFamily: "Inter, 'Helvetica Neue', Arial, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "4px",
    borderWidth: "1px",
    shadow: "0 1px 0 0 rgba(0, 0, 0, 0.45)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0.18, position: "top" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "grid", intensity: "low" },
} satisfies ThemeConfig;
