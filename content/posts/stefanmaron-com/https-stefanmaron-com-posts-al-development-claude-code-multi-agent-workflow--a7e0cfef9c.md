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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T12:54:54.417Z"
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
  - integration
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

[Read the post](https://stefanmaron.com/posts/al-development-claude-code-multi-agent-workflow/) · Stefan Maron (Stefan Maron, MVP) · 2026-01-28 · 1252 words · tier community · **unreviewed** (machine-generated)

> AL development with Claude Code works best using a multi-agent workflow where specialized agents handle planning, development, code review, testing, and diagnostics sequentially. This approach keeps context manageable by writing results to files and reading only relevant documents, enabling extended development cycles and consistent output quality.

## Key points

- Sub-agent workflows with document-driven architecture prevent context overflow and allow sessions to resume across days
- Three main commands (/plan, /develop, /test) orchestrate sequential agents with approval gates between planning phases
- The al-compile tool solves AL compiler invocation complexity by auto-detecting VS Code settings and running diagnostics
- Code review agents can identify issues like DRY violations before manual inspection, improving quality before testing
- Multi-hour refactoring tasks (1 hour unattended in demo) produce consistent results by having experienced developers direct agents rather than typing code

## Quotes

- "AL is niche enough that LLMs struggle without guidance, and large refactoring tasks blow up the context window within a few agent calls." (Explains the core problem that multi-agent workflows solve for AL development)
- "My AL knowledge and experience with BC is worth more when I'm directing and reviewing than when I'm physically typing the code." (Expresses the philosophical shift from hands-on coding to strategic direction in AI-assisted development)

## AL objects mentioned

As named in the post; not yet joined to the code pillar.

- other "profile-al-development"
- other "al-compile"
- other "al-smart-compile"

## Context

- Features: sub-agent workflow, plugin system, document-driven development, requirements engineering, solution planning, code review automation, diagnostic fixing, test planning
- Versions: BC v18+

Source: Stefan Maron, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
