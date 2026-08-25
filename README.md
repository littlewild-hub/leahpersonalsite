# Leah Personal Site

**Tagline:** for the love of our neighbors.

A public portfolio for Leah Buzek's growing body of work across public service, relational ethics, caregiver trauma, civic infrastructure, research, policy design, speaking, and public writing.

## Stack

- Next.js 15
- React 19
- Vercel Analytics
- Vercel Speed Insights
- Vercel deployment

## Project structure

- `app/` — App Router pages, route metadata, and page-level styles
- `components/` — shared site chrome, interface icons, and reusable visual elements
- `data/` — public work catalog and structured content
- `lib/` — metadata and external-writing helpers
- `public/` — machine-readable public indexes and static assets
- `AGENTS.md` — repository instructions for design-aware coding agents
- `DESIGN_OPERATING_LAYER.md` — project integration of UI/UX Pro Max and Impeccable design criteria

The site deliberately treats the work as a connected corpus rather than a conventional chronological portfolio. Its visual language is editorial and civic, using a midnight/linen palette, copper-peach accents, serif display typography, and constellation/network geometry.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

The canonical production domain is `https://www.leahbuzek.com`.
