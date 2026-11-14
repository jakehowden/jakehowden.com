# jakehowden.com

Personal site: CS2 configs, dev setup and dotfiles, CV and notes. Next.js static export in `apps/web`, plain CSS, posts in MDX (`apps/web/content/notes`).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to apps/web/out
```

Pushing to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`).

The previous CV site lives at the [`v0.1.0` release](https://github.com/jakehowden/jakehowden.com/releases/tag/v0.1.0).
