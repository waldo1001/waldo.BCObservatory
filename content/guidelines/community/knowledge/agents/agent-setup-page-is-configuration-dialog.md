---
id: guideline/community/knowledge/agents/agent-setup-page-is-configuration-dialog
type: guideline
title: Agent setup pages use ConfigurationDialog and the Agent Setup Part
summary: Instance setup is not a Card or StandardDialog. The toolkit expects PageType = ConfigurationDialog so OK and Cancel are system actions, plus the built-in Agent Setup Part for name, display name, state, and access.
tier: official
language: en
tags:
  - configurationdialog
  - agent-setup-part
  - setup-page
  - pagetype
  - system-actions
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:16.653Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 083a83bccbddfa13aea4bc7da560c08c9dcf22c8
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-page-is-configuration-dialog.md
    title: "microsoft/BCQuality: Agent setup pages use ConfigurationDialog and the Agent Setup Part"
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
    - to: object/page/4310
      title: page 4310 "Agent Setup Part"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: community/knowledge/agents/agent-setup-page-is-configuration-dialog.md
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
  - ConfigurationDialog
---

# Agent setup pages use ConfigurationDialog and the Agent Setup Part

> Instance setup is not a Card or StandardDialog. The toolkit expects PageType = ConfigurationDialog so OK and Cancel are system actions, plus the built-in Agent Setup Part for name, display name, state, and access.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-page-is-configuration-dialog.md) · community layer · agents · BC 27.. · tier official · derived

## Description

Instance setup is not a Card or StandardDialog. The toolkit expects `PageType = ConfigurationDialog` so OK and Cancel are system actions, plus the built-in `Agent Setup Part` for name, display name, state, and access. A Card with custom fields only drops those shared controls and the AI-use notices the part carries.

## Best Practice

Declare `PageType = ConfigurationDialog`, host `part(...; "Agent Setup Part")`, and put agent-specific fields in another group. Keep system OK/Cancel. Use a temporary source record and defer persistence until Update, as described in `agent-setup-source-table-is-temporary.md`. Following Microsoft's agent setup samples, set `Extensible = false`.

See sample: [`agent-setup-page-is-configuration-dialog.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-page-is-configuration-dialog.good.al).

## Anti Pattern

A Card or StandardDialog setup page with no `Agent Setup Part`. Detection signal: setup page ID from `IAgentFactory` / `IAgentMetadata` whose page is not `ConfigurationDialog` or has no `Agent Setup Part`.

See sample: [`agent-setup-page-is-configuration-dialog.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-page-is-configuration-dialog.bad.al).

## Examples

- [Good: agent-setup-page-is-configuration-dialog.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-page-is-configuration-dialog.good.al)
- [Bad: agent-setup-page-is-configuration-dialog.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-page-is-configuration-dialog.bad.al)

## Names

- [page 4310 "Agent Setup Part"](../../../../objects/page/4310.md) (possibly related: a code span names it)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
