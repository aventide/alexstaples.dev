# alexstaples.dev

Personal portfolio site for Alex Staples, built with React, Vite, Tailwind CSS, and DaisyUI.

## Development

```sh
npm install
npm run dev
```

`npm run lint` checks formatting and lint rules with Biome; `npm run lint:fix` applies fixes.

## Content

- `src/assets/text/resume.json`: jobs (newest first), skills, and education. Feeds the Home and Experience pages and the downloadable PDF resume.
- `src/data/projects.js`: projects in display order. The Home page shows the first three.

## Deployment

The `Dockerfile` builds the site and serves it with nginx (`nginx.conf`). Resume Tailor release downloads are hosted on DigitalOcean Spaces; see `.env.example` for the manifest URL.
