---
id: guideline/community/knowledge/agents/show-can-create-agent-does-not-block-code-create
type: guideline
title: ShowCanCreateAgent only hides UI create, not programmatic create
summary: IAgentFactory.ShowCanCreateAgent controls whether the type appears in the in-client create UI. Returning false does not stop Agent.Create from AL. From 28.1, non-admins can discover extension agents unless this method (and agent configuration rights) restrict them.
tier: official
language: en
tags:
  - showcancreateagent
  - agent-discovery
  - agent-create
  - administrator
  - agent-configuration-rights
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:18.332Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7a935e1c309e4713b3451da55e06cbd17874c42e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/show-can-create-agent-does-not-block-code-create.md
    title: "microsoft/BCQuality: ShowCanCreateAgent only hides UI create, not programmatic create"
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
repo_path: community/knowledge/agents/show-can-create-agent-does-not-block-code-create.md
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
identifiers:
  - ShowCanCreateAgent
---

# ShowCanCreateAgent only hides UI create, not programmatic create

> IAgentFactory.ShowCanCreateAgent controls whether the type appears in the in-client create UI. Returning false does not stop Agent.Create from AL. From 28.1, non-admins can discover extension agents unless this method (and agent configuration rights) restrict them.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/show-can-create-agent-does-not-block-code-create.md) · community layer · agents · BC 28.. · tier official · derived

## Description

`IAgentFactory.ShowCanCreateAgent` controls whether the type appears in the in-client create UI. Returning false does not stop `Agent.Create` from AL. From 28.1, non-admins can discover extension agents unless this method (and agent configuration rights) restrict them. Models treat a false return as a hard create lock.

## Best Practice

Use `ShowCanCreateAgent` to decide discovery. If only agent administrators should see the type, return `Agent System Permissions.CurrentUserHasCanManageAllAgentsPermission`. Enforce extra policy inside your own create API. Never assume UI hiding blocks code.

See sample: [`show-can-create-agent-does-not-block-code-create.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/show-can-create-agent-does-not-block-code-create.good.al).

## Anti Pattern

Returning `exit(false)` from `ShowCanCreateAgent` and then documenting that instances cannot be created, while page actions or other apps still call `Agent.Create`. Detection signal: `ShowCanCreateAgent` always false with no matching guard on programmatic create.

See sample: [`show-can-create-agent-does-not-block-code-create.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/show-can-create-agent-does-not-block-code-create.bad.al).

## Examples

- [Good: show-can-create-agent-does-not-block-code-create.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/show-can-create-agent-does-not-block-code-create.good.al)
- [Bad: show-can-create-agent-does-not-block-code-create.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/show-can-create-agent-does-not-block-code-create.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
