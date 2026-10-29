---
id: guideline/community/knowledge/agents/instructions-describe-work-not-tool-ids
type: guideline
title: Instructions describe outcomes, not page action or tool names
summary: Agent tools are the UI the profile exposes. Action names and tool ids change across pages and versions. Best-practice guidance is to say what to accomplish, not which tool to invoke. Page state is also not fully in history; values needed later must be memorized.
tier: official
language: en
tags:
  - instructions
  - tools
  - invoke-action
  - memorize
  - page-actions
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:18.164Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1487364f7dad218224e1a31de16f97665c5d2af5
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/instructions-describe-work-not-tool-ids.md
    title: "microsoft/BCQuality: Instructions describe outcomes, not page action or tool names"
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
repo_path: community/knowledge/agents/instructions-describe-work-not-tool-ids.md
layer: community
kind: rule
domain: agents
bc_version:
  - 27..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Instructions describe outcomes, not page action or tool names

> Agent tools are the UI the profile exposes. Action names and tool ids change across pages and versions. Best-practice guidance is to say what to accomplish, not which tool to invoke. Page state is also not fully in history; values needed later must be memorized.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/instructions-describe-work-not-tool-ids.md) · community layer · agents · BC 27.. · tier official · derived

## Description

Agent tools are the UI the profile exposes. Action names and tool ids change across pages and versions. Best-practice guidance is to say what to accomplish, not which tool to invoke. Page state is also not fully in history; values needed later must be memorized. Models paste Promoted action names into the prompt.

## Best Practice

Write steps as business outcomes (release the order, set the hold reason). Tell the agent to memorize identifiers it must reuse. Do not hard-code action captions or tool ids.

See sample: [`instructions-describe-work-not-tool-ids.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/instructions-describe-work-not-tool-ids.good.al).

## Anti Pattern

Instructions that say invoke SalesOrder.Post_Promoted or use tool page-42-action-3. Detection signal: instruction text containing Promoted action names or tool identifiers.

See sample: [`instructions-describe-work-not-tool-ids.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/instructions-describe-work-not-tool-ids.bad.al).

## See also

`instruction-structure-is-role-rules-steps.md` defines the containing document structure, and `use-documented-instruction-keywords.md` identifies runtime-recognized phrases.

## Examples

- [Good: instructions-describe-work-not-tool-ids.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/instructions-describe-work-not-tool-ids.good.al)
- [Bad: instructions-describe-work-not-tool-ids.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/instructions-describe-work-not-tool-ids.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
