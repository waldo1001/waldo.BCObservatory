---
id: guideline/community/knowledge/copilot/save-promptdialog-proposals-only-when-the-user-keeps-them
type: guideline
title: Save PromptDialog proposals only when the user keeps them
summary: A PromptDialog page shows AI-generated content as a proposal. The user reviews it and then chooses Keep it (systemaction(OK)) or Discard (systemaction(Cancel)), and may regenerate it several times before deciding.
tier: official
language: en
tags:
  - promptdialog
  - prompt-dialog
  - generate
  - keep-it
  - discard
  - onqueryclosepage
  - closeaction
  - temporary-proposal
  - responsible-ai
system: copilot
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:18.986Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 46e93a1007dfea2ed35ab702c5cdb3d97fedbc69
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/save-promptdialog-proposals-only-when-the-user-keeps-them.md
    title: "microsoft/BCQuality: Save PromptDialog proposals only when the user keeps them"
    date: "2026-10-20"
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
    - change/bcquality/229
repo_path: community/knowledge/copilot/save-promptdialog-proposals-only-when-the-user-keeps-them.md
layer: community
kind: rule
domain: copilot
bc_version:
  - 23..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - PromptDialog
  - SourceTableTemporary
  - OnQueryClosePage
  - RunModal
  - CloseAction
---

# Save PromptDialog proposals only when the user keeps them

> A PromptDialog page shows AI-generated content as a proposal. The user reviews it and then chooses Keep it (systemaction(OK)) or Discard (systemaction(Cancel)), and may regenerate it several times before deciding.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/save-promptdialog-proposals-only-when-the-user-keeps-them.md) · community layer · copilot · BC 23.. · tier official · derived

## Description

A `PromptDialog` page shows AI-generated content as a proposal. The user reviews it and then chooses **Keep it** (`systemaction(OK)`) or **Discard** (`systemaction(Cancel)`), and may regenerate it several times before deciding. Microsoft's guidance is explicit: do not save an AI-generated proposal to the database until the user chooses to keep it. Writing real records in the `Generate`/`Regenerate` action, or in the procedure it calls, makes Discard and Regenerate leave behind data the user never accepted, such as duplicate lines, half-filled documents, or modified master data.

## Best Practice

Hold the proposal in temporary records (a `SourceTableTemporary` part or temporary record variables) or in page variables while the dialog is open. Persist it in `OnQueryClosePage` when `CloseAction = Action::OK`, or in the caller after `RunModal` returns `Action::OK`, and do it through the normal table triggers and validation. On Discard, do nothing.

See sample: [`save-promptdialog-proposals-only-when-the-user-keeps-them.good.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/save-promptdialog-proposals-only-when-the-user-keeps-them.good.al).

## Anti Pattern

A `PromptDialog` page whose `Generate` or `Regenerate` system action, or the procedure it calls, inserts or modifies non-temporary records with the generated content. Also an `OnQueryClosePage` that saves regardless of `CloseAction`.

Do not flag writes to temporary proposal buffers, or telemetry and usage logging that records that generation happened without saving the generated business content.

See sample: [`save-promptdialog-proposals-only-when-the-user-keeps-them.bad.al`](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/save-promptdialog-proposals-only-when-the-user-keeps-them.bad.al).

## References

[Design content mode of prompt dialog page, Add a save and discard action](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/copilot-design-content-mode#add-a-save-and-discard-action) and [The PromptDialog page type](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-page-type-promptdialog).

## Examples

- [Good: save-promptdialog-proposals-only-when-the-user-keeps-them.good.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/save-promptdialog-proposals-only-when-the-user-keeps-them.good.al)
- [Bad: save-promptdialog-proposals-only-when-the-user-keeps-them.bad.al](https://github.com/microsoft/BCQuality/blob/main/community/knowledge/copilot/save-promptdialog-proposals-only-when-the-user-keeps-them.bad.al)

## Changed by

- [#229 Knowledge: Community Copilot domain (System.AI features) and review skill](../../../../changes/bcquality/229.md), 2026-10-20

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
