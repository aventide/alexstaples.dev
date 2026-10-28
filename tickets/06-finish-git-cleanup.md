---
status: todo
owner: user
size: S
prereqs: []
agent: none
---
# 06 · Finish the git cleanup

**Why:** `main`'s history was rewritten (same code, reworded commit messages), which left old branches and stashes that no longer connect to `main`. On 10-27-2026 the local side was mostly cleaned up: local `main` now tracks GitHub, and the stray branch, worktree, tag and empty worktree folders are gone. Deleting branches on GitHub and clearing stashes can't be undone, so Claude Code's safety check leaves those steps to the user.

**Done when:**
- [ ] The old local branches are deleted: `git branch -D cover-letter un-dockerize`
- [ ] The old GitHub branches are deleted: `git push origin --delete cover-letter un-dockerize dockerize projects-design wouter`
- [ ] The stashes are cleared: `git stash clear`. That drops `stash@{0}`, an early draft of the October 2026 content work (superseded by what's on `main`), and `stash@{1}`, a 2024 cover letter draft (that page has since been removed)
- [ ] Checked: after `git fetch --prune`, `git branch -a` shows only `main` and `origin/main`, and `git stash list` is empty

**Notes:** Requested by the user on 10-27-2026. All of it in one go, from the repo root:

```
git branch -D cover-letter un-dockerize && git push origin --delete cover-letter un-dockerize dockerize projects-design wouter && git stash clear && git fetch --prune
```

All five branches date from 2024 and come from before the rewrite. Their work is already on `main`: Docker, wouter routing and the projects redesign shipped, and the cover letter page was removed on purpose.
