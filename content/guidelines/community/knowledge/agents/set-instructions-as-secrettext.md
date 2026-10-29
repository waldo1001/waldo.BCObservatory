---
id: guideline/community/knowledge/agents/set-instructions-as-secrettext
type: guideline
title: Set agent instructions as SecretText on the instance
summary: "Instructions are instance data, not an enum caption. Agent.SetInstructions takes SecretText so the payload is not logged or copied as ordinary text. A Label or plaintext Text on the agent type is the wrong store: it leaks into telemetry-friendly strings and cannot vary per instance or company."
tier: official
language: en
tags:
  - setinstructions
  - secrettext
  - instructions
  - per-instance
  - resource
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:18.233Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4c52863d52664839cb1d8228a2f7bdce2d96d9b1
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/set-instructions-as-secrettext.md
    title: "microsoft/BCQuality: Set agent instructions as SecretText on the instance"
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
repo_path: community/knowledge/agents/set-instructions-as-secrettext.md
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
  - SecretText
  - SetInstructions
---

# Set agent instructions as SecretText on the instance

> Instructions are instance data, not an enum caption. Agent.SetInstructions takes SecretText so the payload is not logged or copied as ordinary text. A Label or plaintext Text on the agent type is the wrong store: it leaks into telemetry-friendly strings and cannot vary per instance or company.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/set-instructions-as-secrettext.md) · community layer · agents · BC 27.. · tier official · derived

## Description

Instructions are instance data, not an enum caption. `Agent.SetInstructions` takes `SecretText` so the payload is not logged or copied as ordinary text. A Label or plaintext Text on the agent type is the wrong store: it leaks into telemetry-friendly strings and cannot vary per instance or company.

## Best Practice

Load instruction text from a resource or builder into a `SecretText` variable and call `Agent.SetInstructions(AgentUserSecurityId, Instructions)` after `Create`. Keep one instruction document per instance.

See sample: [`set-instructions-as-secrettext.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/set-instructions-as-secrettext.good.al).

## Anti Pattern

Passing a `Label` or `Text` to `SetInstructions`, storing instructions in a setup Text field without wrapping as `SecretText`, or putting the prompt only in a code comment. Detection signal: `SetInstructions` with a non-`SecretText` argument, or no `SetInstructions` after `Create`.

See sample: [`set-instructions-as-secrettext.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/set-instructions-as-secrettext.bad.al).

## Examples

- [Good: set-instructions-as-secrettext.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/set-instructions-as-secrettext.good.al)
- [Bad: set-instructions-as-secrettext.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/set-instructions-as-secrettext.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
