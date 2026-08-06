# The Codex — a living portfolio

A Next.js portfolio built to be added to rather than rebuilt. The visual
language is a Renaissance notebook: paper ground, iron-gall ink, red-chalk
annotation in the margins, technical construction lines. The palette is yours.

---

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build
npm run typecheck    # tsc --noEmit
```

No credentials are needed. Out of the box it reads from `/content`.

---

## The palette

| Token | Hex | Role |
|---|---|---|
| `paper` | `#FFFFFF` | White — the page |
| `paper-2` / `paper-3` | `#F5F7FA` / `#ECEFF3` | Recessed surface, deepest fold |
| `ink` | `#011936` | Navy — headings and body |
| `ink-soft` | `#33455E` | Secondary text (9.75:1 on paper) |
| `ink-faint` | `#6B7A8F` | Metadata, captions |
| `verdigris` | `#008E89` | Teal — diagrams, rules, large display |
| `verdigris-ink` | `#00706C` | Text-safe teal (5.94:1) — links |
| `sanguine` | `#FF5666` | Bubblegum — chalk marks, fills, active rule |
| `sanguine-ink` | `#C41E36` | Text-safe red (5.86:1) — marginalia, drop caps |
| `blush` | `#FFCCC9` | Blush — highlight wash, selection |
| `wash` | `#C9DDFF` | Periwinkle — tag fills, notices |

**On the two derived colours.** `#008E89` and `#FF5666` measure 4.01:1 and
3.10:1 against the white ground — below the 4.5:1 needed for body text. They are
used for rules, fills, borders, and large display type, where they are correct.
`verdigris-ink` and `sanguine-ink` are darkened siblings for anything small,
so nothing on the site fails contrast while the palette still reads as yours.

Everything is defined once in the `@theme` block of `src/app/globals.css`.

## The type

- **EB Garamond** — headings and the "hand". A Renaissance humanist face; the
  historically right choice for a codex.
- **Crimson Text** — body. Built for long reading.
- **JetBrains Mono** — folio numbers, dates, labels, catalogue marks. The
  `.folio` utility applies it uppercase at wide tracking.

## The notebook utilities

Defined in `globals.css`, usable anywhere:

`.ruled` `.plotted` `.margin-rule` `.folio` `.dropcap` `.drawn-underline`
`.link-ink` `.pinned` / `.pinned-r` `.mirror` `.settle` `.draw-stroke`

Plus the components in `src/components/notebook/`: `Paper`, `Marginalia`,
`Field`, `InkRule`, `VitruvianMark`, `SpiralMark`, `DividersMark`, `Divider`.

`prefers-reduced-motion` disables every animation and straightens the pinned
sheets. There is a print stylesheet — a notebook should print like one.

---

## Adding a folio

Drop a markdown file into `content/projects/`:

```markdown
---
title: "Project title"
summary: "One sentence that makes the claim."
disciplines: ["product-design", "engineering"]
status: published          # published | draft | archived
featured: true
date: "2026-04-18"
client: "Who commissioned it"
role: "What you did"
tools: ["Figma", "TypeScript"]
cover:
  url: "/plate-mechanism.svg"
  alt: "Description for screen readers"
  caption: "Plate I — optional margin caption"
gallery:
  - url: "/plate-proportion.svg"
    alt: "..."
links:
  - label: "Live site"
    href: "https://example.com"
marginalia:
  - "An annotation that sits in the outer margin."
---

Body copy. Blank line between paragraphs. The first one gets a drop cap.
```

Disciplines are declared in `content/disciplines.json`; your details live in
`content/profile.json`. The five seeded projects are scaffolding — replace or
delete them.

The four SVG plates in `public/` are drawn placeholders in your palette, so the
grid never looks broken before you have photography.

---

## Growing into Airtable

This is the part the whole structure exists for. Every page imports `content`
from `@/lib/content` and receives plain domain objects. It has no idea where
they came from.

```
src/lib/content/
  types.ts              the domain model + the ContentProvider contract
  local-provider.ts     reads /content — the default
  airtable-provider.ts  full REST implementation, inert until configured
  index.ts              picks one based on CONTENT_SOURCE
```

Switching is two environment variables. See **`docs/AIRTABLE.md`** for the base
schema, the CRM table, the revalidation webhook, and how to drive it all through
the Airtable MCP connector.

---

## Adding components

The two primitives in `src/components/ui/` follow shadcn/ui conventions, so:

```bash
npx shadcn@latest add dialog
```

works, and anything from **21st.dev** pastes in directly. To make a pasted
component match the notebook, swap its colours for the tokens — `bg-paper`,
`text-ink`, `border-ink-ghost`, `text-verdigris-ink` — and replace `rounded-*`
with square corners. The codex has no rounded rectangles.

---

## Self-hosting the fonts

Fonts load via `<link>` so the project builds in sandboxes without access to
Google Fonts. To self-host instead — no layout shift, no third-party request —
replace the `<head>` block in `src/app/layout.tsx` with:

```tsx
import { EB_Garamond, Crimson_Text, JetBrains_Mono } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400","500","600","700"],
  style: ["normal","italic"], variable: "--font-eb-garamond", display: "swap" });
const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400","600","700"],
  style: ["normal","italic"], variable: "--font-crimson", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400","500"],
  variable: "--font-jetbrains", display: "swap" });
```

Put `className={`${garamond.variable} ${crimson.variable} ${jetbrains.variable}`}`
on `<html>`, drop the `<head>`, and in `globals.css` prepend the CSS variables
to each family: `--font-hand: var(--font-eb-garamond), "EB Garamond", Georgia, serif;`

---

## Deploying

Vercel is the path of least resistance: push to GitHub, import, add the env vars
from `.env.example`. `next build` is the only build step.

## Structure

```
content/                 your writing — markdown + json
docs/AIRTABLE.md         the migration guide
public/                  drawn placeholder plates
src/app/                 routes: /, /work, /work/[slug], /about, /contact
  api/inquiry/           contact form → provider
  api/revalidate/        Airtable webhook → cache flush
  globals.css            the entire design system
src/components/
  notebook/              Paper, Marginalia, ornaments — the codex vocabulary
  site/                  Nav, Footer, ProjectCard, filters, form
  ui/                    shadcn-compatible primitives
src/lib/content/         the provider seam
```
