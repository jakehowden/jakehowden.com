# jakehowden.com

Personal indie web site. npm workspaces + Turborepo monorepo.

- `apps/web` — the Next.js site (static export, deployed to GitHub Pages on push to `main`)
- `packages/ui` — component library built on shadcn/ui (`@workspace/ui`)
- `packages/eslint-config`, `packages/typescript-config` — shared config

The previous CV site lives at the [`v0.1.0` release](https://github.com/jakehowden/jakehowden.com/releases/tag/v0.1.0).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to apps/web/out
npm run lint
npm run typecheck
```

## Adding shadcn components

Run from the repo root; components land in `packages/ui/src/components`:

```bash
npx shadcn@latest add card -c apps/web
```

```tsx
import { Button } from "@workspace/ui/components/button"
```
