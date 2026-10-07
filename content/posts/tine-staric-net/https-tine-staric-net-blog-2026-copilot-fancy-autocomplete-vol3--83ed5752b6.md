---
id: post/tine-staric-net/https-tine-staric-net-blog-2026-copilot-fancy-autocomplete-vol3--83ed5752b6
type: post
title: Copilot is just a fancy autocomplete (vol.3) - Steps towards agentic development
summary: "This post explains five progressive steps toward agentic development: custom agents tailored to specific workflows, skills for reusable task sequences, reflection loops to improve agent instructions, sub-agents for parallel research with isolated context windows, and background agents running in terminals or pipelines without direct supervision."
tier: community
language: en
tags:
  - agentic development
  - copilot agents
  - custom agents
  - skills
  - sub-agents
  - background agents
  - context management
  - workflow automation
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T12:54:54.417Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: ae5d67e51a19b14ab5a5bd115816c184b70ef3ab2f1579c9b29d2bf0e753ca47
evidence:
  - kind: blog
    url: https://tine.staric.net/blog/2026/copilot-fancy-autocomplete-vol3/
    title: Copilot is just a fancy autocomplete (vol.3) - Steps towards agentic development
    date: "2026-07-01"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://tine.staric.net/blog/2026/copilot-fancy-autocomplete-vol3/
    title: Copilot is just a fancy autocomplete (vol.3) - Steps towards agentic development
    date: "2026-07-01"
    commit: null
    t: null
    quote: Fix the agent. Don't fix the code.
  - kind: blog
    url: https://tine.staric.net/blog/2026/copilot-fancy-autocomplete-vol3/
    title: Copilot is just a fancy autocomplete (vol.3) - Steps towards agentic development
    date: "2026-07-01"
    commit: null
    t: null
    quote: Claude Sonnet and Opus, they're the best for AL. Though, I've seen Gemini 3.1 Pro come very close.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://tine.staric.net/blog/2026/copilot-fancy-autocomplete-vol3/
source_id: tine-staric-net
source_name: Tech Adventures in Business Central
url: https://tine.staric.net/blog/2026/copilot-fancy-autocomplete-vol3/
published_at: "2026-07-01T08:00:00.000Z"
author: Tine Staric
full_text: false
words: 2972
quotes:
  - text: Fix the agent. Don't fix the code.
    why_it_matters: "Summarizes the core improvement strategy: agents learn and adapt when instructed on mistakes rather than developers manually fixing the output each time."
  - text: Claude Sonnet and Opus, they're the best for AL. Though, I've seen Gemini 3.1 Pro come very close.
    why_it_matters: Identifies which models perform best for Business Central AL development at the time of writing.
code_objects_mentioned:
  - other AL Symbols MCP
  - other BC Container Helper
  - other TelemetryBuddy
  - other BC Code Intelligence
systems:
  - copilot
  - development
  - integration
versions_mentioned: []
preview:
  embeddable: true
  frame_url: null
  image: https://tine.staric.net/images/fancyautocompletevol3/copilot-main.png
  image_alt: null
  image_w: null
  image_h: null
  site_name: Tech Adventures in Business Central | AL Development & AI Solutions
  favicon: https://tine.staric.net/favicon.ico
  probed_at: "2026-10-07T11:50:18.073Z"
---

# Copilot is just a fancy autocomplete (vol.3) - Steps towards agentic development

[Read the post](https://tine.staric.net/blog/2026/copilot-fancy-autocomplete-vol3/) · Tech Adventures in Business Central (Tine Staric) · 2026-07-01 · 2972 words · tier community · **unreviewed** (machine-generated)

> This post explains five progressive steps toward agentic development: custom agents tailored to specific workflows, skills for reusable task sequences, reflection loops to improve agent instructions, sub-agents for parallel research with isolated context windows, and background agents running in terminals or pipelines without direct supervision.

## Key points

- Move from general-purpose agents to custom agents with scoped tools and personas for specific workflow tasks like planning, coding, testing, or documentation.
- Use skills to avoid agents rediscovering the same procedures repeatedly; skills load progressively to avoid bloating the context window unnecessarily.
- Implement reflection loops by asking agents to revise their instructions and skills based on mistakes they make, so they improve automatically over time.
- Employ sub-agents with isolated context windows to parallelize research tasks, returning condensed summaries to the main agent instead of raw transcripts.
- Run background agents via Copilot CLI in worktree isolation mode for long-running tasks, and integrate agents into terminal scripts and pipelines for true workflow automation.

## Quotes

- "Fix the agent. Don't fix the code." (Summarizes the core improvement strategy: agents learn and adapt when instructed on mistakes rather than developers manually fixing the output each time.)
- "Claude Sonnet and Opus, they're the best for AL. Though, I've seen Gemini 3.1 Pro come very close." (Identifies which models perform best for Business Central AL development at the time of writing.)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- other "AL Symbols MCP"
- other "BC Container Helper"
- other "TelemetryBuddy"
- other "BC Code Intelligence"

## Context

- Features: Custom agents, Agent skills, Reflection loop, Sub-agents, Background agents, GitHub Copilot /create-agent, Copilot CLI, Worktree isolation

Source: Tech Adventures in Business Central, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
