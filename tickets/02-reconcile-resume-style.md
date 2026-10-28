---
status: todo
owner: pair
size: M
prereqs: []
agent: Claude (Opus)
---
# 02 · Reconcile the resume style with resume-tailor-raycast

**Why:** Two different resume designs now go out under the user's name. This site renders the generic resume (`src/pages/PDFResume.jsx`). The Raycast extension renders every tailored resume from its own "classic" template, which was ported from the old Resume Tailor app. A recruiter who sees both should recognize them as the same person's resume: same fonts, accent, header and section order.

**Done when:**
- [ ] The two designs are compared side by side as real PDFs from the same content: header (name, title, contact details, links, monogram), column layout, section order and names, fonts and sizes, accent color, bullet style, date format, skills presentation and spacing
- [ ] The user decides which design wins, or a merged design, for each difference
- [ ] This repo's PDF is updated to match. If the extension should change instead, that's a ticket in its own `tickets/` folder, not work done from here
- [ ] Data stays put: `resume.json` keeps feeding both the site and the PDF, and personal details stay out of the extension's repo
- [ ] Still one page, with extractable text in reading order and clickable links
- [ ] Checked: both PDFs downloaded and compared again, and the user approves

**Notes:** Requested by the user on 10-27-2026. Ticket 44 in resume-tailor-raycast (explore a nicer resume template) may change the extension's design. Coordinate with it so the two don't end up reconciled to a design that's about to go away. Known differences to start from: this repo's PDF has no links or monogram and labels its title area with a one-line summary, while the extension's template draws the monogram as shapes and takes identity details from the knowledge base. Both use Figtree and Lato. If ticket 01 (site revamp) changes the site's fonts or accent, decide whether the resume follows.
