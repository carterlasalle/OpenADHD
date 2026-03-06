# OpenADHD Website

OpenADHD is a free-first ADHD support hub built with Next.js.

## What Is Included

- Start Here 60-second chooser (`/start-here`)
- Interactive toolkit (`/tools/*`) with task, time, routine, script, school, and planner generators
- Problem-organized deep guide library (`/library` and `/library/[slug]`)
- Diagnosis and care pathways (`/care` and path subpages)
- Audience portals (`/students`, `/adults`, `/parents-partners`, `/teachers`, `/managers`)
- Script library (`/scripts`)
- Public-good transparency and contribution pages (`/about`, `/about/contribute`)
- Printable templates (`/public/templates/*`)
- Long-form downloadable guides (`/public/guides/*`)

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Regenerate PDF Guides

```bash
node scripts/generate-guides.mjs
```

This writes fresh PDF + TXT guide assets to `public/guides`.

## Notes

- `/resources` redirects to `/library`.
- `/diagnosis` redirects to `/care`.
- Content is educational and not medical advice.
