---
id: guideline/community/knowledge/agents/instruction-structure-is-role-rules-steps
type: guideline
title: Instruction documents use responsibilities, guidelines, then ordered steps
summary: "The runtime treats instructions as the agent's standing prompt. A one-line goal produces inconsistent navigation. Microsoft's instruction framework is three layers: responsibilities (what the agent owns), guidelines (rules for every task), and instructions (ordered steps per task, with substeps)."
tier: official
language: en
tags:
  - instructions
  - responsibilities
  - guidelines
  - steps
  - setinstructions
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:18.140Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4a928fde84fa04e9c115789ddabd5cbcba6886fa
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/instruction-structure-is-role-rules-steps.md
    title: "microsoft/BCQuality: Instruction documents use responsibilities, guidelines, then ordered steps"
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
repo_path: community/knowledge/agents/instruction-structure-is-role-rules-steps.md
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
identifiers:
  - SetInstructions
---

# Instruction documents use responsibilities, guidelines, then ordered steps

> The runtime treats instructions as the agent's standing prompt. A one-line goal produces inconsistent navigation. Microsoft's instruction framework is three layers: responsibilities (what the agent owns), guidelines (rules for every task), and instructions (ordered steps per task, with substeps).

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/instruction-structure-is-role-rules-steps.md) · community layer · agents · BC 27.. · tier official · derived

## Description

The runtime treats instructions as the agent's standing prompt. A one-line goal produces inconsistent navigation. Microsoft's instruction framework is three layers: responsibilities (what the agent owns), guidelines (rules for every task), and instructions (ordered steps per task, with substeps). That structure is BC-specific, not generic prompt flavour.

## Best Practice

Store a document that states responsibilities, then non-negotiable guidelines (when to request a review, when not to post), then numbered steps for each task. Keep that text in the resource you pass to `SetInstructions`.

See sample: [`instruction-structure-is-role-rules-steps.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/instruction-structure-is-role-rules-steps.good.al).

## Anti Pattern

A single sentence such as Check customer credit for the sales order. Detection signal: instruction resource or `SetInstructions` payload with no responsibilities / guidelines / steps sections.

See sample: [`instruction-structure-is-role-rules-steps.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/instruction-structure-is-role-rules-steps.bad.al).

## See also

`instructions-describe-work-not-tool-ids.md` and `use-documented-instruction-keywords.md` define how to write the steps inside this structure.

## Examples

- [Good: instruction-structure-is-role-rules-steps.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/instruction-structure-is-role-rules-steps.good.al)
- [Bad: instruction-structure-is-role-rules-steps.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/instruction-structure-is-role-rules-steps.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
