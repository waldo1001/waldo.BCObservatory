---
name: bc-whats-new
description: What is new in Microsoft Dynamics 365 Business Central - recent videos, community posts and roadmap features with status, plus what changed in the code between versions - through the bc-observatory MCP server. Use for "what's new", "what changed in BC29/BC30", release wave questions and roadmap status.
---

# What is new in Business Central

1. `whats_new(since: "YYYY-MM-DD")` lists videos, posts, roadmap features and code changes dated on or after that day and up to today; `type: "feature"` for the roadmap only, `include_future: true` for features scheduled after today (a feature's date is its GA month).
2. For a roadmap feature, `cat("features/<id>")` gives status (ga, preview, announced), wave, dates and the videos and Learn pages that cover it.
3. For code changes, `diff_object(type, id, "29", "30")` per object; when you only know the name, search the exact name or the reference first (`search("Sales Header")`, `search("t36")`), then `diff_object`.

Status words come from the Microsoft 365 roadmap, not from video wording. Say when a status is "announced" or "preview" rather than generally available.
