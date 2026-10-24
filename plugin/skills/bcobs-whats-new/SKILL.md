---
name: bcobs-whats-new
description: What is new in Microsoft Dynamics 365 Business Central - recent videos, community posts and roadmap features with status, plus what changed in the code between versions - through the bc-observatory MCP server. Use for "what's new", "what changed in BC29/BC30", release wave questions and roadmap status.
---

# What is new in Business Central

1. `bc_whats_new(since: "YYYY-MM-DD")` lists videos, posts, roadmap features and code changes dated on or after that day and up to today; `type: "feature"` for the roadmap only, `include_future: true` for features scheduled after today (a feature's date is its GA month).
2. For what was published lately about a topic, `bc_search("<words>", type: "post" or "video", sort: "date")` lists the matches newest first; `bc_whats_new` is for everything since a day.
3. For a roadmap feature, `bc_cat("features/<id>")` gives status (ga, preview, announced), wave, dates and the videos and Learn pages that cover it.
4. For code changes, `bc_diff_object(type, id, "29", "30")` per object; when you only know the name, search the exact name or the reference first (`bc_search("Sales Header")`, `bc_search("t36")`), then `bc_diff_object`.

Status words come from the Microsoft 365 roadmap, not from video wording. Say when a status is "announced" or "preview" rather than generally available.
