# Spire Horizon Online — official website

One-page site for Spire Horizon Online (Vue 3 + Vite + Tailwind) at `sho.mendoka.com`.

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ (also writes dist/404.html so any path falls back to the page)
```

| What | Where |
|---|---|
| Links, trailers, roadmap, gallery, socials | `src/data/site.js` |
| The 25 classes | `src/data/classes.js` |
| Colors and fonts ("Aetheria sky" theme) | `tailwind.config.js` |
| Page sections | `src/components/sections/*.vue` |
| Web images, video and music | `public/media/` |

`src/image`, `src/videos` and `src/sound` hold the original full-size art. The site no longer imports them —
the optimized copies in `public/media/` are what gets published.

Old addresses still work: `/classes`, `/cards`, `/roadmap` and `/copyright` jump to the matching section.

Deploy: `.github/workflows/deploy.yml` publishes `dist/` to GitHub Pages on every push to `main`.
