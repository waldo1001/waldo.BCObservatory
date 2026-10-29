---
id: guideline/community/knowledge/agents/wire-all-three-agent-interfaces
type: guideline
title: Wire all three agent interfaces on the metadata provider
summary: An AL agent type is registered by extending Agent Metadata Provider. The platform locates factory, metadata, and task-execution behaviour only through the Implementation property on that enum value.
tier: official
language: en
tags:
  - agent-metadata-provider
  - iagentfactory
  - iagentmetadata
  - iagenttaskexecution
  - enumextension
  - implementation
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:18.905Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 87e859faed4d11bd9f8b560e8375df9716ed7808
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/wire-all-three-agent-interfaces.md
    title: "microsoft/BCQuality: Wire all three agent interfaces on the metadata provider"
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
repo_path: community/knowledge/agents/wire-all-three-agent-interfaces.md
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
  - IAgentFactory
  - IAgentMetadata
  - IAgentTaskExecution
---

# Wire all three agent interfaces on the metadata provider

> An AL agent type is registered by extending Agent Metadata Provider. The platform locates factory, metadata, and task-execution behaviour only through the Implementation property on that enum value.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/wire-all-three-agent-interfaces.md) · community layer · agents · BC 27.. · tier official · derived

## Description

An AL agent type is registered by extending `Agent Metadata Provider`. The platform locates factory, metadata, and task-execution behaviour only through the `Implementation` property on that enum value. Omitting `IAgentFactory`, `IAgentMetadata`, or `IAgentTaskExecution` leaves create, UI identity, or task runs unbound. Models often ship a single codeunit and skip the enum wiring.

## Best Practice

On the enum value, set `Implementation` for all three interfaces, each pointing at a dedicated codeunit. Keep factory (create, defaults, first-time setup), metadata (setup page, summary, annotations), and task execution (message analysis, intervention suggestions) in separate objects.

See sample: [`wire-all-three-agent-interfaces.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/wire-all-three-agent-interfaces.good.al).

## Anti Pattern

An `Agent Metadata Provider` value with no `Implementation`, only one interface mapped, or all three interfaces pointing at one catch-all codeunit that cannot satisfy the contracts. Detection signal: enumextension of `Agent Metadata Provider` whose value does not list `IAgentFactory`, `IAgentMetadata`, and `IAgentTaskExecution`.

See sample: [`wire-all-three-agent-interfaces.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/wire-all-three-agent-interfaces.bad.al).

## See also

`register-copilot-capability-for-the-agent.md` covers the feature capability linked by the factory implementation.

## Examples

- [Good: wire-all-three-agent-interfaces.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/wire-all-three-agent-interfaces.good.al)
- [Bad: wire-all-three-agent-interfaces.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/wire-all-three-agent-interfaces.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
