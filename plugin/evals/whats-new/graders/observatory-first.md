---
type: llm
focus: trace
---

- The agent called at least one bc-observatory tool (a tool whose name contains `bc-observatory` and `bc_`, such as `bc_search`, `bc_whats_new`, `bc_get_object` or `bc_diff_object`).
- The first information-gathering tool call (ignore ToolSearch and Skill) is a bc-observatory tool, not WebSearch or WebFetch.
