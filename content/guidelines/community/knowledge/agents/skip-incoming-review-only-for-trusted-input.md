---
id: guideline/community/knowledge/agents/skip-incoming-review-only-for-trusted-input
type: guideline
title: Skip incoming message review only after the caller validated the payload
summary: Incoming task messages default to requiring user approval before the agent runs. From 28.1, Agent Task Message Builder.SetRequiresReview(false) starts the agent immediately. That is safe only for inputs you already validated in AL (your page action, your posting subscriber).
tier: official
language: en
tags:
  - setrequiresreview
  - agent-task-message-builder
  - approval
  - trusted-input
  - skip-review
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:18.858Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ad9140881561fde2d7200eb4d1ccc670a5175130
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/skip-incoming-review-only-for-trusted-input.md
    title: "microsoft/BCQuality: Skip incoming message review only after the caller validated the payload"
    date: "2026-09-09"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/174
    - change/bcquality/137
repo_path: community/knowledge/agents/skip-incoming-review-only-for-trusted-input.md
layer: community
kind: rule
domain: agents
bc_version:
  - 28..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Skip incoming message review only after the caller validated the payload

> Incoming task messages default to requiring user approval before the agent runs. From 28.1, Agent Task Message Builder.SetRequiresReview(false) starts the agent immediately. That is safe only for inputs you already validated in AL (your page action, your posting subscriber).

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/skip-incoming-review-only-for-trusted-input.md) · community layer · agents · BC 28.. · tier official · derived

## Description

Incoming task messages default to requiring user approval before the agent runs. From 28.1, `Agent Task Message Builder.SetRequiresReview(false)` starts the agent immediately. That is safe only for inputs you already validated in AL (your page action, your posting subscriber). External email or partner payloads are not trusted by default. Analysis Warnings still force a review.

## Best Practice

Leave the default review-on for anything that originated outside your extension. Call `SetRequiresReview(false)` only on messages you constructed from already-authorized BC data.

See sample: [`skip-incoming-review-only-for-trusted-input.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/skip-incoming-review-only-for-trusted-input.good.al).

## Anti Pattern

`SetRequiresReview(false)` on simulated email, incoming webhooks, or user-free text. Detection signal: `SetRequiresReview(false)` next to external content with no prior validation.

See sample: [`skip-incoming-review-only-for-trusted-input.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/skip-incoming-review-only-for-trusted-input.bad.al).

## Examples

- [Good: skip-incoming-review-only-for-trusted-input.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/skip-incoming-review-only-for-trusted-input.good.al)
- [Bad: skip-incoming-review-only-for-trusted-input.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/skip-incoming-review-only-for-trusted-input.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
