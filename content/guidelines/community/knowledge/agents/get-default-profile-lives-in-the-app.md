---
id: guideline/community/knowledge/agents/get-default-profile-lives-in-the-app
type: guideline
title: The default agent profile must be an AL profile in the app
summary: IAgentFactory.GetDefaultProfile assigns the Role Center and page customizations the agent UI-navigates. A profile built only in the client, or page personalization that was never exported, is absent after deploy.
tier: official
language: en
tags:
  - getdefaultprofile
  - profile
  - page-customization
  - populatedefaultprofile
  - role-center
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:17.521Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 89c19fbf06a1425dc11e5333051d794d3ba117b1
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/get-default-profile-lives-in-the-app.md
    title: "microsoft/BCQuality: The default agent profile must be an AL profile in the app"
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
repo_path: community/knowledge/agents/get-default-profile-lives-in-the-app.md
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

# The default agent profile must be an AL profile in the app

> IAgentFactory.GetDefaultProfile assigns the Role Center and page customizations the agent UI-navigates. A profile built only in the client, or page personalization that was never exported, is absent after deploy.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/get-default-profile-lives-in-the-app.md) · community layer · agents · BC 27.. · tier official · derived

## Description

`IAgentFactory.GetDefaultProfile` assigns the Role Center and page customizations the agent UI-navigates. A profile built only in the client, or page personalization that was never exported, is absent after deploy. `Agent.PopulateDefaultProfile` still needs a profile ID that exists in the current module.

## Best Practice

Ship a `profile` object (and page customizations) in the app. In `GetDefaultProfile`, call `Agent.PopulateDefaultProfile` with that profile ID and `NavApp.GetCurrentModuleInfo`. Include UI-exported customizations as AL.

See sample: [`get-default-profile-lives-in-the-app.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/get-default-profile-lives-in-the-app.good.al).

## Anti Pattern

Setting `TempAllProfile."Profile ID"` to a client-only profile, or skipping `GetDefaultProfile`. Detection signal: factory default profile ID with no matching `profile` object in the app.

See sample: [`get-default-profile-lives-in-the-app.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/get-default-profile-lives-in-the-app.bad.al).

## See also

`agent-profile-narrows-visible-ui.md` explains which UI the app-owned profile should expose.

## Examples

- [Good: get-default-profile-lives-in-the-app.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/get-default-profile-lives-in-the-app.good.al)
- [Bad: get-default-profile-lives-in-the-app.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/get-default-profile-lives-in-the-app.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
