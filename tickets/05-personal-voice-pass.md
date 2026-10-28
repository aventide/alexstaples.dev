---
status: todo
owner: pair
size: M
prereqs: []
agent: Claude (Opus)
---
# 05 · Make the copy sound like the user, not like AI

**Why:** The October 2026 rewrite made the content accurate and plain, but much of it still reads as AI-written, and a recruiter who reads a lot of AI copy will notice. Meteor Blocks is the clearest case: "which handles block descent, selection, swapping, and launching" and "each with its own art, gravity, and launch goal" are tidy lists that say what the code does but not why it exists or what the user cared about. The copy should sound like a person describing their own work: still professional and matter-of-fact, but with the user's reasons, opinions and specifics.

**Done when:**
- [ ] Every piece of copy is reviewed and marked keep, light edit or rewrite: the seven project descriptions in `src/data/projects.js`, the job `summary` fields and the top-level `summary` in `resume.json`, and the Home bio. Resume bullets are reviewed too, but expect few changes (see Notes)
- [ ] The review names the specific AI tells in each piece, so the rewrite fixes causes instead of swapping synonyms. Patterns seen so far:
  - Lists of three or four in nearly every sentence ("art, gravity, and launch goal", "recordings, downloads, or accounts", "employer, date, metric, or skill")
  - "From X to Y" range constructions ("from tables and dashboards to app initialization and error handling", "from introducing subagent delegation to reworking…")
  - Feature inventories in place of a point of view: what the project does, never why the user made it or what was interesting about it
  - Neat closing clauses that wrap up a sentence ("so the two never drift apart", "and no framework or build step either")
  - The same verb stacked across a paragraph ("Led… Led… led…" in the Trivelta summary)
- [ ] For each project marked rewrite, the user answers a few short questions in their own words before any rewrite is drafted: why they built it, what was hard or fun, and what they'd want a reader to notice. The rewrite starts from those answers, not from the current text
- [ ] Rewrites follow every rule in [00-context.md](00-context.md#writing-rules). Personal doesn't mean dramatic: reasons and opinions are in, storytelling, scene-setting and self-praise are out. Job summaries stay without first person; project descriptions and the bio can use it
- [ ] Rewritten project descriptions stay about the same length as now, so cards on Home and Projects stay balanced
- [ ] Any resume bullet that changes still fits on one line, and the PDF is still one page
- [ ] Checked: the user reads each changed piece aloud or in place on the site, at desktop and phone widths, and approves it. Anything that still sounds generated goes back for another pass

**Notes:** Requested by the user on 10-27-2026. Start with Meteor Blocks, agree on the voice there, then apply it to the rest. Asking an AI to make copy "sound less like AI" tends to produce different AI copy, so the user's own answers and phrasing are the raw material, and the agent's job is mostly trimming and fitting them to the rules. Resume bullets are a terse genre where some stiffness is normal, so only change a bullet when it has a clear tell. Ticket 04 (authorship labels) will also reword Meteor Blocks's sentence about the engine and the AI-built demo. Do Meteor Blocks once, with both tickets in mind, so it isn't rewritten twice.
