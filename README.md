# David X. Wu - Academic Website

A minimal academic website built with [Astro](https://astro.build).

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:4321 in your browser.

## Build

```bash
npm run build
```

The static site will be in `dist/`.

## Structure

```
src/
├── content/news/     # News announcements (Markdown)
├── data/             # Publications data (TypeScript)
├── layouts/          # Base layout
└── pages/            # Routes (about, publications, cv)
public/
├── img/              # Profile picture
└── pdf/              # CV and papers
```

## Deployment

Automatically deploys to GitHub Pages on push to `master` via GitHub Actions.
