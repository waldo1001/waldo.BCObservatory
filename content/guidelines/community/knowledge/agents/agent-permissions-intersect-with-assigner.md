---
id: guideline/community/knowledge/agents/agent-permissions-intersect-with-assigner
type: guideline
title: Agent permissions intersect the assigner's; agents cannot configure users
summary: An agent is a user, but it cannot configure users or other agents, and it cannot open sensitive pages such as user cards or permission-set assignment. Effective rights are the intersection of the assigning user's permissions and the agent's permission sets.
tier: official
language: en
tags:
  - permissions
  - assigner
  - intersection
  - user-card
  - least-privilege
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:16.626Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 7c85a5b692ece3cce888b362685bc84c3fdb5931
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-permissions-intersect-with-assigner.md
    title: "microsoft/BCQuality: Agent permissions intersect the assigner's; agents cannot configure users"
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
repo_path: community/knowledge/agents/agent-permissions-intersect-with-assigner.md
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

# Agent permissions intersect the assigner's; agents cannot configure users

> An agent is a user, but it cannot configure users or other agents, and it cannot open sensitive pages such as user cards or permission-set assignment. Effective rights are the intersection of the assigning user's permissions and the agent's permission sets.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-permissions-intersect-with-assigner.md) · community layer · agents · BC 27.. · tier official · derived

## Description

An agent is a user, but it cannot configure users or other agents, and it cannot open sensitive pages such as user cards or permission-set assignment. Effective rights are the intersection of the assigning user's permissions and the agent's permission sets. Granting the agent a wide set does not bypass the assigner's limits, and a wide assigner still cannot give the agent user-admin powers the platform forbids.

## Best Practice

Document that intersection. Give the agent only the table and page rights its tasks need. Do not add user-setup or permission-assignment pages to the agent profile or permission sets; those operations will fail by design.

See sample: [`agent-permissions-intersect-with-assigner.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-permissions-intersect-with-assigner.good.al).

## Anti Pattern

Permission sets or profiles that include User card, Permission Set Assignment, or agent-admin pages, or comments that the agent runs as SUPER regardless of who assigned it. Detection signal: default access controls or profile including user-administration objects.

See sample: [`agent-permissions-intersect-with-assigner.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-permissions-intersect-with-assigner.bad.al).

## See also

`get-default-access-controls-least-privilege.md` covers the permission sets assigned when an agent instance is created.

## Examples

- [Good: agent-permissions-intersect-with-assigner.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-permissions-intersect-with-assigner.good.al)
- [Bad: agent-permissions-intersect-with-assigner.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-permissions-intersect-with-assigner.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
