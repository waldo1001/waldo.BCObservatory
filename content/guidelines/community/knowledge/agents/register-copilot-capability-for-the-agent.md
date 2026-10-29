---
id: guideline/community/knowledge/agents/register-copilot-capability-for-the-agent
type: guideline
title: Register a Copilot capability for the agent on install
summary: Each agent type needs a Copilot Capability enum value that the factory links as the feature switch and billing surface. The capability is invisible on Copilot and agent capabilities until an install codeunit calls RegisterCapability when it is not already registered.
tier: official
language: en
tags:
  - copilot-capability
  - registercapability
  - install
  - feature-switch
  - enumextension
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:18.280Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 59171cccdc8f25d829abb93d339abc9dc04307ee
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/register-copilot-capability-for-the-agent.md
    title: "microsoft/BCQuality: Register a Copilot capability for the agent on install"
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
    - to: object/codeunit/7773
      title: codeunit 7773 "Copilot Capability"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: community/knowledge/agents/register-copilot-capability-for-the-agent.md
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
  - RegisterCapability
  - OnInstallAppPerDatabase
  - IAgentFactory
---

# Register a Copilot capability for the agent on install

> Each agent type needs a Copilot Capability enum value that the factory links as the feature switch and billing surface. The capability is invisible on Copilot and agent capabilities until an install codeunit calls RegisterCapability when it is not already registered.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/register-copilot-capability-for-the-agent.md) · community layer · agents · BC 27.. · tier official · derived

## Description

Each agent type needs a `Copilot Capability` enum value that the factory links as the feature switch and billing surface. The capability is invisible on Copilot and agent capabilities until an install codeunit calls `RegisterCapability` when it is not already registered. Unique ordinals matter across installed apps. Models often extend `Agent Metadata Provider` and never register the capability.

## Best Practice

Extend `Copilot Capability` with a unique value. In `OnInstallAppPerDatabase`, call `Copilot Capability.IsCapabilityRegistered` and, if false, `RegisterCapability` with availability, billing type, and a learn-more URL. Point `IAgentFactory` at that capability.

See sample: [`register-copilot-capability-for-the-agent.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/register-copilot-capability-for-the-agent.good.al).

## Anti Pattern

Shipping the agent enum without a `Copilot Capability` value, or adding the enum but never calling `RegisterCapability`. Duplicate ordinals across extensions also collide. Detection signal: agent metadata provider with no matching capability registration in an install codeunit.

See sample: [`register-copilot-capability-for-the-agent.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/register-copilot-capability-for-the-agent.bad.al).

## See also

`wire-all-three-agent-interfaces.md` covers registration of the provider implementation that references this capability.

## Examples

- [Good: register-copilot-capability-for-the-agent.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/register-copilot-capability-for-the-agent.good.al)
- [Bad: register-copilot-capability-for-the-agent.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/register-copilot-capability-for-the-agent.bad.al)

## Names

- [codeunit 7773 "Copilot Capability"](../../../../objects/codeunit/7773.md) (possibly related: a code span names it)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
