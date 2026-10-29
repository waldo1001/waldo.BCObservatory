---
id: guideline/community/knowledge/agents/agent-setup-source-table-is-temporary
type: guideline
title: Keep the agent setup page source temporary until Update
summary: "ConfigurationDialog setup is a draft: the user can Cancel without writing. That only works if SourceTableTemporary = true and custom fields stay in memory until Update. Writing the real table in OnValidate or OnOpenPage commits a partial agent when the dialog errors or is cancelled."
tier: official
language: en
tags:
  - sourcetabletemporary
  - configurationdialog
  - savechanges
  - cancel
  - draft
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:16.695Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 539bc0f91c5caa2f16b276640beb90ad2d35f4ca
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-source-table-is-temporary.md
    title: "microsoft/BCQuality: Keep the agent setup page source temporary until Update"
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
repo_path: community/knowledge/agents/agent-setup-source-table-is-temporary.md
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
  - SaveChanges
  - ConfigurationDialog
---

# Keep the agent setup page source temporary until Update

> ConfigurationDialog setup is a draft: the user can Cancel without writing. That only works if SourceTableTemporary = true and custom fields stay in memory until Update. Writing the real table in OnValidate or OnOpenPage commits a partial agent when the dialog errors or is cancelled.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-source-table-is-temporary.md) · community layer · agents · BC 27.. · tier official · derived

## Description

ConfigurationDialog setup is a draft: the user can Cancel without writing. That only works if `SourceTableTemporary = true` and custom fields stay in memory until Update. Writing the real table in OnValidate or OnOpenPage commits a partial agent when the dialog errors or is cancelled.

## Best Practice

Mark the page `SourceTableTemporary = true`. Copy into the temp record on open. Persist the Agent Setup buffer and custom fields only from the close path when the action is not Cancel, using `Agent Setup.GetChangesMade` / `SaveChanges`.

See sample: [`agent-setup-source-table-is-temporary.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-source-table-is-temporary.good.al).

## Anti Pattern

A non-temporary source table, or `Insert`/`Modify` on the persisted setup row from field OnValidate. Detection signal: agent `ConfigurationDialog` without `SourceTableTemporary = true`, or database writes before Update.

See sample: [`agent-setup-source-table-is-temporary.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-source-table-is-temporary.bad.al).

## See also

`agent-setup-page-is-configuration-dialog.md` defines the setup page shape that uses this draft lifecycle.

## Examples

- [Good: agent-setup-source-table-is-temporary.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-source-table-is-temporary.good.al)
- [Bad: agent-setup-source-table-is-temporary.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/agents/agent-setup-source-table-is-temporary.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
