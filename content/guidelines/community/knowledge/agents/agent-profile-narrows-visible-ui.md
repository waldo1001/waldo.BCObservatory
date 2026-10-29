---
id: guideline/community/knowledge/agents/agent-profile-narrows-visible-ui
type: guideline
title: Give the agent a dedicated profile that hides unrelated UI
summary: The agent only sees what its profile shows. Extra actions, views, and Role Center tiles become extra tools and extra tokens. Accuracy and cost both get worse as the UI widens. A human Order Processor profile is usually far too broad.
tier: official
language: en
tags:
  - profile
  - page-customization
  - hidden-actions
  - tooltip
  - role-center
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:16.634Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 914a7778d2971a660ef18208ef945d9fb23dea52
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-profile-narrows-visible-ui.md
    title: "microsoft/BCQuality: Give the agent a dedicated profile that hides unrelated UI"
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
    - to: object/profile/business-manager
      title: profile "BUSINESS MANAGER"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/profile/order-processor
      title: profile "ORDER PROCESSOR"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: community/knowledge/agents/agent-profile-narrows-visible-ui.md
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
  - GetDefaultProfile
---

# Give the agent a dedicated profile that hides unrelated UI

> The agent only sees what its profile shows. Extra actions, views, and Role Center tiles become extra tools and extra tokens. Accuracy and cost both get worse as the UI widens. A human Order Processor profile is usually far too broad.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-profile-narrows-visible-ui.md) · community layer · agents · BC 27.. · tier official · derived

## Description

The agent only sees what its profile shows. Extra actions, views, and Role Center tiles become extra tools and extra tokens. Accuracy and cost both get worse as the UI widens. A human Order Processor profile is usually far too broad. Tooltips on the remaining actions are part of the tool description.

## Best Practice

Ship an agent-specific profile and page customizations: hide unrelated actions, keep descriptive tooltips, add Role Center links to the few pages the agent should open. Prefer fewer navigation hops.

See sample: [`agent-profile-narrows-visible-ui.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-profile-narrows-visible-ui.good.al).

## Anti Pattern

Assigning `BUSINESS MANAGER` or `ORDER PROCESSOR` as `GetDefaultProfile` so the agent can do anything. Detection signal: default profile equal to a full-user role with no agent page customizations.

See sample: [`agent-profile-narrows-visible-ui.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-profile-narrows-visible-ui.bad.al).

## See also

`get-default-profile-lives-in-the-app.md` covers packaging and assigning the profile that this rule narrows.

## Examples

- [Good: agent-profile-narrows-visible-ui.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-profile-narrows-visible-ui.good.al)
- [Bad: agent-profile-narrows-visible-ui.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-profile-narrows-visible-ui.bad.al)

## Names

- [profile "BUSINESS MANAGER"](../../../../objects/profile/business-manager.md) (possibly related: a code span names it)
- [profile "ORDER PROCESSOR"](../../../../objects/profile/order-processor.md) (possibly related: a code span names it)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
