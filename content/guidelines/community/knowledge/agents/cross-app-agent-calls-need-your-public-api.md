---
id: guideline/community/knowledge/agents/cross-app-agent-calls-need-your-public-api
type: guideline
title: Other apps cannot call the toolkit APIs on your agent; publish your own API
summary: For isolation, Agent, Agent Task Builder, and related toolkit codeunits error when the target instance belongs to another app. There is no supported way to pass another extension's metadata provider into SetInstructions or Create. Partners who need to enqueue work must call a public API you own.
tier: official
language: en
tags:
  - cross-app
  - public-api
  - agent-create
  - isolation
  - access-public
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:17.442Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7d4469921331c947120ba9bc486aea0b6d146ddf
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/cross-app-agent-calls-need-your-public-api.md
    title: "microsoft/BCQuality: Other apps cannot call the toolkit APIs on your agent; publish your own API"
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
  related:
    - to: object/codeunit/4315
      title: codeunit 4315 "Agent Task Builder"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: community/knowledge/agents/cross-app-agent-calls-need-your-public-api.md
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

# Other apps cannot call the toolkit APIs on your agent; publish your own API

> For isolation, Agent, Agent Task Builder, and related toolkit codeunits error when the target instance belongs to another app. There is no supported way to pass another extension's metadata provider into SetInstructions or Create. Partners who need to enqueue work must call a public API you own.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/cross-app-agent-calls-need-your-public-api.md) · community layer · agents · BC 27.. · tier official · derived

## Description

For isolation, `Agent`, `Agent Task Builder`, and related toolkit codeunits error when the target instance belongs to another app. There is no supported way to pass another extension's metadata provider into `SetInstructions` or `Create`. Partners who need to enqueue work must call a public API you own.

## Best Practice

Expose a public codeunit in the agent app (`Access = Public`) whose procedures take `User Security ID` and forward to `Agent` / `Agent Task Builder`. Document that surface as the integration contract. Keep toolkit calls inside that app.

See sample: [`cross-app-agent-calls-need-your-public-api.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/cross-app-agent-calls-need-your-public-api.good.al).

## Anti Pattern

From app B, calling `Agent.SetDisplayName` or `Agent.Create` with app A's metadata provider. Detection signal: toolkit agent APIs used with an `Agent Metadata Provider` value not declared in the same app.

See sample: [`cross-app-agent-calls-need-your-public-api.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/cross-app-agent-calls-need-your-public-api.bad.al).

## Examples

- [Good: cross-app-agent-calls-need-your-public-api.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/cross-app-agent-calls-need-your-public-api.good.al)
- [Bad: cross-app-agent-calls-need-your-public-api.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/cross-app-agent-calls-need-your-public-api.bad.al)

## Names

- [codeunit 4315 "Agent Task Builder"](../../../../objects/codeunit/4315.md) (possibly related: a code span names it)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
