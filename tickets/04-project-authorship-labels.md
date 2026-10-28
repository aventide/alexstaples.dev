---
status: todo
owner: pair
size: S
prereqs: []
agent: Claude (Opus)
---
# 04 · Consider labeling projects as hand-crafted, AI-coded, or hybrid

**Why:** The projects range from fully hand-written to largely AI-built, and the Meteor Blocks description already spells out which parts were which. Reviewers increasingly want to know how much of a portfolio the candidate wrote, and the user is positioned as both a strong hand coder and the go-to engineer for AI-assisted development. A consistent, honest label on every project could answer that at a glance, and show that he uses AI deliberately.

**Done when:**
- [ ] Decided whether labels help or hurt: does an "AI-coded" badge read as good judgment or as less effort, and does it invite more scrutiny than it's worth? Decide with a mockup of the real Projects page, not in the abstract
- [ ] If yes, the categories are defined in one plain sentence each, so a label always means the same thing. For example, hand-crafted means the user wrote the code, AI-coded means an AI agent wrote most of it under his direction, and hybrid means a clear split, like a hand-written core with AI-built parts
- [ ] The user labels each project. Only he knows the split, so an agent doesn't guess. For hybrid projects, the card says in a few words which part was which, as Meteor Blocks does now
- [ ] Built: an optional field on each project in `src/data/projects.js` (for example `authorship: "hand" | "ai" | "hybrid"`), shown as a small badge on the card, with a short legend or tooltip explaining the three labels. A project without the field shows no badge
- [ ] Descriptions don't repeat the badge. Meteor Blocks's sentence about the engine and the AI-built demo is reworded to fit with a hybrid badge
- [ ] Checked: Home and Projects at desktop and phone widths, with the user approving the look and every label

**Notes:** Requested by the user on 10-27-2026. Labels must be accurate above all. The Meteor Blocks wording was tightened for this reason: "left the engine untouched" was dropped, because the demo branch's notes record small engine changes for per-world settings. Apply the same care to every label. If ticket 01 (site look) changes the card design, build the badge to match the new design.
