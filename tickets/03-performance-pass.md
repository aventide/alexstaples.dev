---
status: todo
owner: agent
size: M
prereqs: []
agent: Claude (Opus)
---
# 03 · Performance pass

**Why:** Web performance is one of the user's selling points (his resume leads with a 30% faster initial load), so his own site should be fast on a phone and hold up if a hiring manager runs Lighthouse on it. No one has measured it yet.

**Done when:**
- [ ] Baseline measured on the live site: Lighthouse mobile scores and Core Web Vitals (LCP, CLS, INP) for Home, Projects and Experience, plus JavaScript, image and font transfer sizes. Recorded in this ticket
- [ ] The main bundle is as small as it reasonably can be. Today `index-*.js` is 186 kB (61 kB gzipped). Look at what's in it (for example with `rollup-plugin-visualizer`) and split out anything only one route needs
- [ ] The Vite warning about the 1.35 MB `react-pdf.browser` chunk is dealt with. That chunk is already loaded only when someone downloads the resume, so either confirm it never loads before that and raise `build.chunkSizeWarningLimit` for it with a comment, or find a lighter setup
- [ ] Images: the headshot and project images have width and height or aspect-ratio set (no layout shift), images below the fold are lazy-loaded, and sizes fit how big they're displayed. Consider `srcset` for phones
- [ ] Fonts: web fonts don't block rendering or cause a visible swap (preload, `font-display`, subsetting). The Lato and Figtree TTFs in `src/assets/fonts` are for the PDF only, so confirm they never load on page view
- [ ] Caching checked end to end: `nginx.conf` sets `public, max-age=31536000, immutable` for hashed assets, but on 10-27-2026 the live `/assets/index-*.js` came back as `cache-control: private` through Cloudflare. Find out why and fix it so returning visitors hit the cache
- [ ] Checked: Lighthouse mobile rerun on the deployed site, with before and after numbers in this ticket, and the resume download still works and stays one page

**Notes:** Requested by the user on 10-27-2026. Cloudflare already serves JavaScript compressed (brotli), so compression isn't the problem. Release binaries in `public/downloads/releases/*/` are kept out of the Docker image by `.dockerignore` and served from DigitalOcean Spaces, so they don't affect the site's size. Don't trade away anything visible for a score: if a change makes the site look worse, flag it rather than shipping it.
