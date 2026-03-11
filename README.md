# jakehowden.com

Personal portfolio website built with Next.js, React, TypeScript, and Framer Motion. Statically exported and deployed to GitHub Pages.

## Tech Stack

- **Next.js 15** — Static site generation via `output: 'export'`
- **React 18** — UI components
- **TypeScript 5** — Type safety
- **Framer Motion** — Animations and transitions

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the development server       |
| `npm run build` | Build the static site to `out/`    |
| `npm run start` | Serve the production build locally |
| `npm run lint`  | Run ESLint                         |

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds the site and deploys it to GitHub Pages.
