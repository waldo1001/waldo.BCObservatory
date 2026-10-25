---
id: post/sshadows-dk/https-sshadows-dk-blog-from-work-item-to-pr-without-me--5ccd693009
type: post
title: I Tag a Work Item. Sometimes I Come Back to a PR.
summary: An ISV developer describes a 12-stage AI agent pipeline for automating work item analysis, test planning, code generation, and review cycles in Azure DevOps. The system uses specialized reviewer agents, an AL language server protocol integration, and a devils-advocate approach to minimize hallucinations while generating draft PRs automatically.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-25T16:42:05.860Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: f6903420ea3e4a1abebbb8f1f5b09bb3c9b34df2f0739944eef70adc2c9af2de
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
  - platform
versions_mentioned: []
---

# I Tag a Work Item. Sometimes I Come Back to a PR.

[Read the post](https://sshadows.dk/blog/from-work-item-to-pr-without-me/) · SShadowS (Torben Leth) · 2026-05-18 · 1183 words · tier community · **unreviewed** (model text not yet checked)

> An ISV developer describes a 12-stage AI agent pipeline for automating work item analysis, test planning, code generation, and review cycles in Azure DevOps. The system uses specialized reviewer agents, an AL language server protocol integration, and a devils-advocate approach to minimize hallucinations while generating draft PRs automatically.

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
