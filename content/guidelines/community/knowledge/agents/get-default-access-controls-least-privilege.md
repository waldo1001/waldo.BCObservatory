---
id: guideline/community/knowledge/agents/get-default-access-controls-least-privilege
type: guideline
title: Default agent permission sets must exist in AL and stay least privilege
summary: IAgentFactory.GetDefaultAccessControls fills a temporary Access Control Buffer used when an instance is created. Permission sets that exist only as user-created sets in a sandbox are missing in the next environment. Granting D365 BUS FULL ACCESS or SUPER gives the agent a user-sized blast radius.
tier: official
language: en
tags:
  - getdefaultaccesscontrols
  - access-control-buffer
  - permissionset
  - least-privilege
  - iagentfactory
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:17.462Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c82f71af95ff7a37fc71487f34e12e17a3135288
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/get-default-access-controls-least-privilege.md
    title: "microsoft/BCQuality: Default agent permission sets must exist in AL and stay least privilege"
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
    - to: object/permissionset/959
      title: permissionset 959 "D365 BUS FULL ACCESS"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: community/knowledge/agents/get-default-access-controls-least-privilege.md
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
  - GetDefaultAccessControls
---

# Default agent permission sets must exist in AL and stay least privilege

> IAgentFactory.GetDefaultAccessControls fills a temporary Access Control Buffer used when an instance is created. Permission sets that exist only as user-created sets in a sandbox are missing in the next environment. Granting D365 BUS FULL ACCESS or SUPER gives the agent a user-sized blast radius.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/get-default-access-controls-least-privilege.md) · community layer · agents · BC 27.. · tier official · derived

## Description

`IAgentFactory.GetDefaultAccessControls` fills a temporary `Access Control Buffer` used when an instance is created. Permission sets that exist only as user-created sets in a sandbox are missing in the next environment. Granting `D365 BUS FULL ACCESS` or SUPER gives the agent a user-sized blast radius. Effective rights are still the intersection with the assigning user's permissions.

## Best Practice

Insert only the permission sets the agent needs. For an AL `permissionset` object, use `Scope::System` and the ID of the app that defines it. Recreate permission sets that exist only as user-defined configuration in Business Central as AL objects first. Prefer a dedicated permission set over a full-user role.

See sample: [`get-default-access-controls-least-privilege.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/get-default-access-controls-least-privilege.good.al).

## Anti Pattern

Empty `GetDefaultAccessControls`, or inserting `SUPER` / `D365 BUS FULL ACCESS` because it made the demo work. Detection signal: Role ID on the default buffer that is a full-user role, or a set that is not in the app.

See sample: [`get-default-access-controls-least-privilege.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/get-default-access-controls-least-privilege.bad.al).

## See also

`agent-permissions-intersect-with-assigner.md` explains the platform limits that still apply after default access controls are assigned.

## Examples

- [Good: get-default-access-controls-least-privilege.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/get-default-access-controls-least-privilege.good.al)
- [Bad: get-default-access-controls-least-privilege.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/get-default-access-controls-least-privilege.bad.al)

## Names

- [permissionset 959 "D365 BUS FULL ACCESS"](../../../../objects/permissionset/959.md) (possibly related: a code span names it)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
