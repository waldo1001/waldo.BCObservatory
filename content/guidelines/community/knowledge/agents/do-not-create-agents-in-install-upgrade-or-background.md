---
id: guideline/community/knowledge/agents/do-not-create-agents-in-install-upgrade-or-background
type: guideline
title: Do not create agent instances from install, upgrade, or background sessions
summary: Agent.Create requires an interactive user session. The platform blocks creation from install codeunits, upgrade codeunits, and background sessions (job queue, scheduled tasks). Packaging an agent in an app does not mean spinning up instances at install.
tier: official
language: en
tags:
  - agent-create
  - install
  - upgrade
  - job-queue
  - interactive-session
  - background
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:17.482Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2018de4523d60ea5f74bb86bc415f87ded8d3ebd
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/do-not-create-agents-in-install-upgrade-or-background.md
    title: "microsoft/BCQuality: Do not create agent instances from install, upgrade, or background sessions"
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
repo_path: community/knowledge/agents/do-not-create-agents-in-install-upgrade-or-background.md
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
  - OnInstallAppPerCompany
  - OnUpgradePerCompany
---

# Do not create agent instances from install, upgrade, or background sessions

> Agent.Create requires an interactive user session. The platform blocks creation from install codeunits, upgrade codeunits, and background sessions (job queue, scheduled tasks). Packaging an agent in an app does not mean spinning up instances at install.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/do-not-create-agents-in-install-upgrade-or-background.md) · community layer · agents · BC 27.. · tier official · derived

## Description

`Agent.Create` requires an interactive user session. The platform blocks creation from install codeunits, upgrade codeunits, and background sessions (job queue, scheduled tasks). Packaging an agent in an app does not mean spinning up instances at install. Models still call `Create` from `OnInstallAppPerCompany` to activate the agent.

## Best Practice

Create instances from a setup page, a wizard, or another UI-driven path after the user is in a client session. Apply instructions and `Activate` there. For existing companies after an upgrade, document that an admin must open setup; do not create from the upgrade codeunit.

See sample: [`do-not-create-agents-in-install-upgrade-or-background.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/do-not-create-agents-in-install-upgrade-or-background.good.al).

## Anti Pattern

`Agent.Create` inside `OnInstallAppPerCompany`, `OnUpgradePerCompany`, or a job-queue codeunit. The call fails at runtime even if it compiles. Detection signal: `Agent.Create` in `Subtype = Install`, `Subtype = Upgrade`, or a non-UI session.

See sample: [`do-not-create-agents-in-install-upgrade-or-background.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/do-not-create-agents-in-install-upgrade-or-background.bad.al).

## Examples

- [Good: do-not-create-agents-in-install-upgrade-or-background.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/do-not-create-agents-in-install-upgrade-or-background.good.al)
- [Bad: do-not-create-agents-in-install-upgrade-or-background.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/do-not-create-agents-in-install-upgrade-or-background.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
