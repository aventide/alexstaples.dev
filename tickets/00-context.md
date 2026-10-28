# Context

Shared background every ticket assumes. Tickets link here instead of repeating it.

## What this is

**alexstaples.dev** is Alex Staples's personal portfolio: projects, work history, skills and a downloadable PDF resume. Its main audience right now is recruiters and hiring managers, so it should read well quickly and hold up on a phone.

## Stack

- React 18, Vite 4, Tailwind CSS 3 with daisyUI, wouter for routing. Biome for lint and formatting (`npm run lint`).
- Pages are in `src/pages/` (Home, Projects, Experience at `/experience` and `/resume`, Resume Tailor downloads at `/resume-tailor`). Shared pieces are in `src/components/`.
- Deployed as a Docker container served by nginx on DigitalOcean (`Dockerfile`, `nginx.conf`).

## Content

- `src/assets/text/resume.json` is the one source for work history. Each job's `summary` is the longer description shown on the site, and its `bullets` are the resume lines. Jobs are listed newest first, and Home shows the first three. Skills and education live here too.
- `src/data/projects.js` holds the projects in display order. Home shows the first three. Images are 1200×750 webp files in `src/assets/images/project-screenshots/`, framed on a dark indigo gradient.
- Facts come from the user's career knowledge base (in Obsidian, outside this repo). Never invent experience.

## PDF resume

- `src/pages/PDFResume.jsx` renders the resume with @react-pdf/renderer, from `resume.json`. Fonts are Figtree (headings) and Lato (body), with a red accent bar (#A82623). The layout has two columns: experience on the left (70%), skills, portfolio and education on the right.
- `src/components/ResumeDownloadButton.jsx` loads the PDF library only on click and saves `Alex-Staples-Resume-MMDDYYYY.pdf`, dated the day of download.
- **It must stay on one page.** Keep each bullet to one line, and after any content change, download the PDF and check the page count.

## Writing rules

The user corrected these by hand. Follow them in all copy:

- No first person in job descriptions or resume bullets ("Owned the contact management feature…", not "I built…"). The Home bio is the exception and is written in first person.
- Never name clients from consulting or contract roles (TandemSeven, Motif Software). Describe them by type and stature without undercutting them: "a major U.S. airline", not "an airline".
- Don't mention unreleased products or features.
- Plain, matter-of-fact wording. No dramatic storytelling details, and no labels like "passionate" or "seasoned".
- Resume bullets carry one accomplishment each. When space runs out, drop the weakest item instead of packing two into a line.
- Word achievements as improvements the user drove, never so the user or the team seems to have caused the problem.
- Use a spaced hyphen ( - ) for an aside, never an em dash.

## Related repo

`~/Dev/resume-tailor-raycast` is the user's Raycast extension that tailors a resume to each job post from the same knowledge base. It has its own `tickets/` folder in this same style, and its own resume template.
