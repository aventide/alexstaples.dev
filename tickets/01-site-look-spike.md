---
status: todo
owner: pair
size: M
prereqs: []
agent: Claude (Opus)
---
# 01 · Spike: should the site get a visual revamp?

**Why:** The site's content was rewritten in October 2026 (new bio, projects and job descriptions), and the user is actively applying to jobs. The look has had incremental updates (headshot, new project cards, card backgrounds removed) but no overall rethink. Decide whether a broader revamp is worth it, and what it would be, before building anything.

**Done when:**
- [ ] A short review of the current site at desktop and phone widths: what works, what looks dated or inconsistent (type scale, spacing, color, card styles, nav and footer), and anything that hurts a recruiter skimming it
- [ ] Two or three directions are mocked up from the real content, for example a refined version of the current dark theme, a lighter editorial look, and something bolder. Static mockups or throwaway branches are fine, shown side by side with the current site
- [ ] Each direction notes what it would take to build: new fonts, a Tailwind theme or daisyUI changes, component rewrites, and new project images if the frame style changes
- [ ] Every direction keeps what matters: fast to load, readable on a phone, accessible contrast, and content still driven by `resume.json` and `projects.js`
- [ ] Checked: the user picks a direction or decides to keep the current look, and any follow-up build tickets are written

**Notes:** Requested by the user on 10-27-2026. A spike, so no production code. Mockups and throwaway branches get deleted once the decision is made. If the revamp changes fonts or colors, ticket 02 (resume style) should probably follow it, so the site and the PDF still look related.
