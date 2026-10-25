---
id: post/sshadows-dk/https-sshadows-dk-blog-from-work-item-to-pr-without-me--5ccd693009
type: post
title: I Tag a Work Item. Sometimes I Come Back to a PR.
summary: "An ISV developer outlines a twelve-stage agent pipeline driven by Azure DevOps work item tags: an analyzer triages the item, a planner writes test scenarios before the code change, coding and review loops run until reviewer and CI agree, and a draft PR is produced. Only three stages wait for the human, and agents navigate AL through an LSP running in containers."
tier: community
language: en
tags:
  - ai agents
  - code generation
  - automation
  - azure devops
  - al development
  - code review
  - ci/cd pipeline
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-25T16:50:23.607Z"
  flags: []
generated:
  at: "2026-10-25T16:41:48.094Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 18547721870ca61982a4c80a0f0d7171cf9c406467d2b23b1d2637c58a0f013c
evidence:
  - kind: blog
    url: https://sshadows.dk/blog/from-work-item-to-pr-without-me/
    title: I Tag a Work Item. Sometimes I Come Back to a PR.
    date: "2026-05-18"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://sshadows.dk/blog/from-work-item-to-pr-without-me/
    title: I Tag a Work Item. Sometimes I Come Back to a PR.
    date: "2026-05-18"
    commit: null
    t: null
    quote: Everything else is agents talking to other agents.
  - kind: blog
    url: https://sshadows.dk/blog/from-work-item-to-pr-without-me/
    title: I Tag a Work Item. Sometimes I Come Back to a PR.
    date: "2026-05-18"
    commit: null
    t: null
    quote: The LSP is the difference. The agents navigate AL through documentSymbol, findReferences, and hover.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://sshadows.dk/blog/from-work-item-to-pr-without-me/
source_id: sshadows-dk
source_name: SShadowS
url: https://sshadows.dk/blog/from-work-item-to-pr-without-me/
published_at: "2026-05-18T00:00:00.000Z"
author: Torben Leth
full_text: false
words: 1183
quotes:
  - text: Everything else is agents talking to other agents.
    why_it_matters: Clarifies the core architecture where only three specific stages require human intervention; the system is designed for autonomous agent-to-agent coordination
  - text: The LSP is the difference. The agents navigate AL through documentSymbol, findReferences, and hover.
    why_it_matters: Identifies the critical technical enabler that prevents AI from guessing based on pattern matching and instead uses compiler-level understanding of code
code_objects_mentioned: []
systems:
  - development
  - integration
versions_mentioned: []
preview:
  embeddable: false
  frame_url: null
  image: https://sshadows.dk/images/posts/from-work-item-to-pr-without-me/cover.webp
  image_alt: null
  image_w: null
  image_h: null
  site_name: SShadowS
  favicon: https://sshadows.dk/favicon.svg
  probed_at: "2026-10-25T16:46:41.481Z"
---

# I Tag a Work Item. Sometimes I Come Back to a PR.

[Read the post](https://sshadows.dk/blog/from-work-item-to-pr-without-me/) · SShadowS (Torben Leth) · 2026-05-18 · 1183 words · tier community · reviewed (checked by Opus)

> An ISV developer outlines a twelve-stage agent pipeline driven by Azure DevOps work item tags: an analyzer triages the item, a planner writes test scenarios before the code change, coding and review loops run until reviewer and CI agree, and a draft PR is produced. Only three stages wait for the human, and agents navigate AL through an LSP running in containers.

## Key points

- Multiple specialized reviewer agents focused on narrow briefs outperform a single large reviewer, though a devils-advocate agent can cause infinite loops if not demoted to advisory after repeated blocking
- AL language server protocol (LSP) with documentSymbol, findReferences, and hover enables agents to understand code structure correctly rather than guessing based on grep matches
- The pipeline includes three human touchpoints: plan approval, draft PR review before team PR review, and post-merge monitoring; everything else runs automatically between stages
- Different agents require different model sizes and tool access; the analyzer is the cheapest and most trusted, while cost optimization comes from matching model capability to actual agent needs

## Quotes

- "Everything else is agents talking to other agents." (Clarifies the core architecture where only three specific stages require human intervention; the system is designed for autonomous agent-to-agent coordination)
- "The LSP is the difference. The agents navigate AL through documentSymbol, findReferences, and hover." (Identifies the critical technical enabler that prevents AI from guessing based on pattern matching and instead uses compiler-level understanding of code)

## Context

- Features: work item analysis, test planning, code generation, automated review, PR automation, specialized reviewers, devils-advocate review, LSP integration

Source: SShadowS, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
