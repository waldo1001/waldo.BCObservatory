---
id: post/vjeko-com/https-vjeko-com-2026-06-07-from-beep-to-empty-seat-the-six-levels-of-self-driving-code--216cd64368
type: post
title: "From beep to empty seat: the six levels of self-driving code"
summary: The post maps the SAE J3016 six-level autonomy scale from self-driving cars (Level 0 to 5) directly onto software development practices, showing how agentic coding follows the same pattern. It emphasizes that high autonomy (Level 4) requires domain control through testing, clean code, and fast feedback loops rather than relying solely on AI model capability.
tier: community
language: en
tags:
  - agentic coding
  - ai autonomy levels
  - code agents
  - feedback loops
  - domain control
  - testing strategy
  - code quality
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-25T16:55:24.266Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 4ab52363e1eabbb7032bd27447befc558ba3714fb8e05154219b418dd355786f
evidence:
  - kind: blog
    url: https://vjeko.com/2026/06/07/from-beep-to-empty-seat-the-six-levels-of-self-driving-code/
    title: "From beep to empty seat: the six levels of self-driving code"
    date: "2026-06-07"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://vjeko.com/2026/06/07/from-beep-to-empty-seat-the-six-levels-of-self-driving-code/
    title: "From beep to empty seat: the six levels of self-driving code"
    date: "2026-06-07"
    commit: null
    t: null
    quote: Capability gets you to the start line. Control is what lets you actually let go of the wheel.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://vjeko.com/2026/06/07/from-beep-to-empty-seat-the-six-levels-of-self-driving-code/
source_id: vjeko-com
source_name: Vjeko.com
url: https://vjeko.com/2026/06/07/from-beep-to-empty-seat-the-six-levels-of-self-driving-code/
published_at: "2026-06-07T16:37:01.000Z"
author: Vjekoslav Babić
full_text: false
words: 3319
quotes:
  - text: Capability gets you to the start line. Control is what lets you actually let go of the wheel.
    why_it_matters: Clarifies that model intelligence alone is insufficient; domain control and proper scaffolding determine whether agents can operate autonomously
code_objects_mentioned: []
systems:
  - development
  - platform
  - copilot
versions_mentioned: []
---

# From beep to empty seat: the six levels of self-driving code

[Read the post](https://vjeko.com/2026/06/07/from-beep-to-empty-seat-the-six-levels-of-self-driving-code/) · Vjeko.com (Vjekoslav Babić, MVP) · 2026-06-07 · 3319 words · tier community · **unreviewed** (model text not yet checked)

> The post maps the SAE J3016 six-level autonomy scale from self-driving cars (Level 0 to 5) directly onto software development practices, showing how agentic coding follows the same pattern. It emphasizes that high autonomy (Level 4) requires domain control through testing, clean code, and fast feedback loops rather than relying solely on AI model capability.

## Key points

- The six autonomy levels apply equally to cars and code: from warnings only (Level 0) through supervised assistance (Levels 1-2) to full autonomy within bounded domains (Level 4)
- Level 3 (conditional automation with human handoff) is a trap in both domains and fails due to half-attention supervision; successful systems either keep humans fully responsible or fully remove them
- Agentic coding succeeds inside a geofence defined by you: a bounded domain with 100% test coverage, clean small codeunits, and a fast feedback loop that includes multiple reviewer agents for safety and quality
- The agent's level of autonomy depends on how much scaffolding you build (skills, subagents, guardrails) and domain preparation, not on model capability alone
- Level 5 (unrestricted autonomy) doesn't exist in cars or code yet; success at Level 4 requires mapping the codebase terrain first, just as robotaxis require city mapping

## Quotes

- "Capability gets you to the start line. Control is what lets you actually let go of the wheel." (Clarifies that model intelligence alone is insufficient; domain control and proper scaffolding determine whether agents can operate autonomously)

## Context

- Features: agentic feedback loop, agent scaffolding, domain geofencing, reviewer agents, autonomous code generation, conditional automation, supervisor oversight

Source: Vjeko.com, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
