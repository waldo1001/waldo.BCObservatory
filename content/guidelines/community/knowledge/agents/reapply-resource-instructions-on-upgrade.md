---
id: guideline/community/knowledge/agents/reapply-resource-instructions-on-upgrade
type: guideline
title: Reapply resource instructions to existing agent instances on upgrade
summary: Static instructions stored as an app resource are copied onto an instance only when you call SetInstructions. Shipping a new Instructions.txt in version 2.0 does not update agents created under 1.0. Models change the resource and assume running instances pick it up.
tier: official
language: en
tags:
  - upgrade
  - setinstructions
  - navapp-getresourceastext
  - existing-instances
  - upgrade-tag
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:18.189Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: db95258ff720a92cea48b1883b7ba7dcbeceaf6b
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/reapply-resource-instructions-on-upgrade.md
    title: "microsoft/BCQuality: Reapply resource instructions to existing agent instances on upgrade"
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
repo_path: community/knowledge/agents/reapply-resource-instructions-on-upgrade.md
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
  - resourceFolders
---

# Reapply resource instructions to existing agent instances on upgrade

> Static instructions stored as an app resource are copied onto an instance only when you call SetInstructions. Shipping a new Instructions.txt in version 2.0 does not update agents created under 1.0. Models change the resource and assume running instances pick it up.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/reapply-resource-instructions-on-upgrade.md) · community layer · agents · BC 27.. · tier official · derived

## Description

Static instructions stored as an app resource are copied onto an instance only when you call `SetInstructions`. Shipping a new `Instructions.txt` in version 2.0 does not update agents created under 1.0. Models change the resource and assume running instances pick it up.

## Best Practice

In the upgrade codeunit, find existing instances of your metadata provider and call `SetInstructions` again with `NavApp.GetResourceAsText`. Guard with an upgrade tag so the rewrite runs once per version that changes the file.

See sample: [`reapply-resource-instructions-on-upgrade.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/reapply-resource-instructions-on-upgrade.good.al).

## Anti Pattern

Editing only the resource file, or calling `SetInstructions` solely from the first-time setup path. Detection signal: instruction resource in `resourceFolders` with no upgrade procedure that re-applies it.

See sample: [`reapply-resource-instructions-on-upgrade.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/reapply-resource-instructions-on-upgrade.bad.al).

## Examples

- [Good: reapply-resource-instructions-on-upgrade.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/reapply-resource-instructions-on-upgrade.good.al)
- [Bad: reapply-resource-instructions-on-upgrade.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/reapply-resource-instructions-on-upgrade.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
