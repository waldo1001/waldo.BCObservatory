---
id: post/stefanmaron-com/https-stefanmaron-com-posts-al-development-claude-code-multi-agent-workflow--a7e0cfef9c
type: post
title: "AL Development with Claude Code: A Multi-Agent Workflow"
summary: AL development with Claude Code works best using a multi-agent workflow where specialized agents handle planning, development, code review, testing, and diagnostics sequentially. This approach keeps context manageable by writing results to files and reading only relevant documents, enabling extended development cycles and consistent output quality.
tier: community
language: en
tags:
  - al development
  - claude code
  - multi-agent workflow
  - code review
  - refactoring
  - testing
  - compiler
  - ai-assisted development
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-08T01:57:13.678Z"
  flags: []
generated:
  at: "2026-10-08T01:26:53.141Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: b0b8c2cbf1a9f8fcf42dc1d6c3ec3a4da8bd739ad81320304cb1fa154750a108
evidence:
  - kind: blog
    url: https://stefanmaron.com/posts/al-development-claude-code-multi-agent-workflow/
    title: "AL Development with Claude Code: A Multi-Agent Workflow"
    date: "2026-01-28"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://stefanmaron.com/posts/al-development-claude-code-multi-agent-workflow/
    title: "AL Development with Claude Code: A Multi-Agent Workflow"
    date: "2026-01-28"
    commit: null
    t: null
    quote: AL is niche enough that LLMs struggle without guidance, and large refactoring tasks blow up the context window within a few agent calls.
  - kind: blog
    url: https://stefanmaron.com/posts/al-development-claude-code-multi-agent-workflow/
    title: "AL Development with Claude Code: A Multi-Agent Workflow"
    date: "2026-01-28"
    commit: null
    t: null
    quote: My AL knowledge and experience with BC is worth more when I'm directing and reviewing than when I'm physically typing the code.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://stefanmaron.com/posts/al-development-claude-code-multi-agent-workflow/
source_id: stefanmaron-com
source_name: Stefan Maron
url: https://stefanmaron.com/posts/al-development-claude-code-multi-agent-workflow/
published_at: "2026-01-28T08:00:00.000Z"
author: Stefan Maron
full_text: false
words: 1252
quotes:
  - text: AL is niche enough that LLMs struggle without guidance, and large refactoring tasks blow up the context window within a few agent calls.
    why_it_matters: Explains the core problem that multi-agent workflows solve for AL development
  - text: My AL knowledge and experience with BC is worth more when I'm directing and reviewing than when I'm physically typing the code.
    why_it_matters: Expresses the philosophical shift from hands-on coding to strategic direction in AI-assisted development
code_objects_mentioned:
  - other profile-al-development
  - other al-compile
  - other al-smart-compile
systems:
  - development
  - platform
versions_mentioned:
  - BC v18+
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Stefan Maron
  favicon: https://stefanmaron.com/icons/favicon-32x32.png
  probed_at: "2026-10-07T11:50:45.409Z"
---

# AL Development with Claude Code: A Multi-Agent Workflow

[Read the post](https://stefanmaron.com/posts/al-development-claude-code-multi-agent-workflow/) · Stefan Maron (Stefan Maron, MVP) · 2026-01-28 · 1252 words · tier community · reviewed (checked by Opus)

> AL development with Claude Code works best using a multi-agent workflow where specialized agents handle planning, development, code review, testing, and diagnostics sequentially. This approach keeps context manageable by writing results to files and reading only relevant documents, enabling extended development cycles and consistent output quality.

## Key points

- Sub-agents write their results to files and return only a one-line summary, which keeps the main session's context small and lets work resume later
- The /plan, /develop and /test commands run agents in sequence, with approval gates between the planning steps
- The al-compile tool from al-smart-compile finds the AL compiler, the analyzers and the package cache on its own; a diagnostics agent uses it to fix issues until the build is clean
- A code-review agent working in a fresh context found issues such as DRY violations before the author reviewed the code
- In the demo, about an hour of unattended refactoring touched 42 files and compiled with no errors

## Quotes

- "AL is niche enough that LLMs struggle without guidance, and large refactoring tasks blow up the context window within a few agent calls." (Explains the core problem that multi-agent workflows solve for AL development)
- "My AL knowledge and experience with BC is worth more when I'm directing and reviewing than when I'm physically typing the code." (Expresses the philosophical shift from hands-on coding to strategic direction in AI-assisted development)

## AL objects mentioned

As named in the post. A name that matches one object page by exact type and name links to it; the others stay as named.

- other "profile-al-development"
- other "al-compile"
- other "al-smart-compile"

## Context

- Features: sub-agent workflow, plugin system, document-driven development, requirements engineering, solution planning, code review automation, diagnostic fixing, test planning
- Versions: BC v18+

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
