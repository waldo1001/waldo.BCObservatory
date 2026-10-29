---
id: guideline/community/knowledge/agents/agent-setup-table-keyed-by-user-security-id
type: guideline
title: Agent setup tables are keyed by User Security ID
summary: Each agent instance is a user. Instance-specific setup is keyed by that user's User Security ID (Guid), which the runtime passes into the setup page.
tier: official
language: en
tags:
  - user-security-id
  - setup-table
  - primary-key
  - agent-instance
  - guid
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:16.733Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c8a8671267b1cc80583f844865d3d46dfad75e36
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-table-keyed-by-user-security-id.md
    title: "microsoft/BCQuality: Agent setup tables are keyed by User Security ID"
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
repo_path: community/knowledge/agents/agent-setup-table-keyed-by-user-security-id.md
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

# Agent setup tables are keyed by User Security ID

> Each agent instance is a user. Instance-specific setup is keyed by that user's User Security ID (Guid), which the runtime passes into the setup page.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-table-keyed-by-user-security-id.md) · community layer · agents · BC 27.. · tier official · derived

## Description

Each agent instance is a user. Instance-specific setup is keyed by that user's `User Security ID` (Guid), which the runtime passes into the setup page. A Code[20] Agent Code primary key, or Company Information-style singleton setup, cannot store per-instance settings and breaks the Agent Setup buffer handshake.

## Best Practice

Give the setup table a Guid field `User Security ID` as the clustered primary key. Other settings are attributes of that key. When the page opens, `Get` or insert by the Guid the Agent Setup part already holds.

See sample: [`agent-setup-table-keyed-by-user-security-id.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-table-keyed-by-user-security-id.good.al).

## Anti Pattern

A setup table keyed by Code, Integer, or with no Guid user key, then mapping one row to every instance. Detection signal: source table of the agent setup page whose primary key is not `User Security ID`.

See sample: [`agent-setup-table-keyed-by-user-security-id.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-table-keyed-by-user-security-id.bad.al).

## Examples

- [Good: agent-setup-table-keyed-by-user-security-id.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-table-keyed-by-user-security-id.good.al)
- [Bad: agent-setup-table-keyed-by-user-security-id.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-table-keyed-by-user-security-id.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
