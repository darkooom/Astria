# Design System: Astria

Character: precise and quietly futuristic — a workspace you trust with production data.

## Information hierarchy
- Pattern: layer-cake dashboard; health and KPIs first, operational detail second, history last.
- Primary action: one solid action per page. Secondary actions are neutral; rare actions live in menus.
- Tenant context is persistent because acting in the wrong workspace is the highest-risk failure.

## Color
- `--background` / `--card`: warm graphite in dark mode and warm paper in light mode; avoids sterile blue-gray SaaS defaults.
- `--foreground` / `--muted-foreground`: calibrated neutral contrast for long admin sessions.
- `--accent`: `#6D4AFF` in light and `#8B73FF` in dark; signature violet is reserved for the primary action and active navigation. White on the light accent is 5.15:1; dark foreground on the dark accent exceeds AA.
- `--success`, `--warning`, `--danger`: semantic only and always paired with text or an icon.

## Typography
- Family: Geist Sans for interface clarity; Geist Mono for IDs, usage values, and technical metadata.
- Scale: 12 / 14 / 16 / 20 / 28 / 40; high contrast comes from the 40px dashboard display against 14px body text.
- Weights: 450 body, 560 controls, 650 headings.

## Spacing
- Base unit: 4px; scale: 4 / 8 / 12 / 16 / 24 / 32 / 48.
- Rhythm: dense inside operational groups, generous between dashboard layers.

## Shape & elevation
- Radii: 8px controls, 12px cards, 16px featured surfaces.
- Separation language: technical 1px borders. Shadows are limited to floating overlays.

## Motion
- Durations: 140ms micro-interactions, 180ms overlays; easing `cubic-bezier(.2,.8,.2,1)`.
- Reduced motion removes transforms and non-essential transitions.

## Components
- Button: accent primary, bordered secondary, quiet ghost, semantic destructive.
- Card: border-defined surface, 20px padding; interactive cards gain a stronger border, not a shadow.
- Table: dominant identity column, no more than six visible columns, right-aligned numeric values.
- Status: icon plus text; color never carries meaning alone.
- Input: visible label, 40px minimum height, inline validation and preserved input on failure.

## Voice
- Tone: calm, exact, helpful. Use sentence case and action verbs.
- Errors name the failed object and provide recovery; success messages describe what changed.
