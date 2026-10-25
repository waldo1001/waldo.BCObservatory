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
  state: reviewed
  by: opus
  at: "2026-10-25T17:03:47.783Z"
  flags: []
generated:
  at: "2026-10-25T16:55:04.528Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 996844b803b7d7d4c0de0a03af8e570a4a78c15136929df4d8e94676c1cb85cb
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
versions_mentioned: []
cautions:
  - kind: gotcha
    quote: the agent didn't fail at all. It was you who just sent it away and forgot to build the road.
    objects: []
    events: []
    versions: []
preview:
  embeddable: false
  frame_url: null
  image: https://vjeko.com/wp-content/uploads/2026/06/3c2716cb-472a-4503-934c-11d5d9e1afe0.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: null
  favicon: https://vjeko.com/wp-content/uploads/2020/12/cropped-Brand-Element-v3-32x32.png
  probed_at: "2026-10-25T17:00:09.431Z"
---

# From beep to empty seat: the six levels of self-driving code

[Read the post](https://vjeko.com/2026/06/07/from-beep-to-empty-seat-the-six-levels-of-self-driving-code/) · Vjeko.com (Vjekoslav Babić, MVP) · 2026-06-07 · 3319 words · tier community · reviewed (checked by Opus)

> The post maps the SAE J3016 six-level autonomy scale from self-driving cars (Level 0 to 5) directly onto software development practices, showing how agentic coding follows the same pattern. It emphasizes that high autonomy (Level 4) requires domain control through testing, clean code, and fast feedback loops rather than relying solely on AI model capability.

## Key points

- The six autonomy levels apply equally to cars and code: from warnings only (Level 0) through supervised assistance (Levels 1-2) to full autonomy within bounded domains (Level 4)
- Level 3 (conditional automation with human handoff) is a trap in both domains and fails due to half-attention supervision; successful systems either keep humans fully responsible or fully remove them
- Agentic coding succeeds inside a geofence defined by you: a bounded domain with 100% test coverage, clean small codeunits, and a fast feedback loop that includes multiple reviewer agents for safety and quality
- The agent's level of autonomy depends on how much scaffolding you build (skills, subagents, guardrails) and domain preparation, not on model capability alone
- Level 5 (unrestricted autonomy) doesn't exist in cars or code yet; success at Level 4 requires mapping the codebase terrain first, just as robotaxis require city mapping

## Quotes

- "Capability gets you to the start line. Control is what lets you actually let go of the wheel." (Clarifies that model intelligence alone is insufficient; domain control and proper scaffolding determine whether agents can operate autonomously)

## Heads up

- gotcha: "the agent didn't fail at all. It was you who just sent it away and forgot to build the road."

## Context

- Features: agentic feedback loop, agent scaffolding, domain geofencing, reviewer agents, autonomous code generation

Source: Vjeko.com, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
