---
id: guideline/microsoft/knowledge/ui/promoted-action-groups
type: guideline
title: Use Standard Promoted Action Group Names And Placements
summary: Business Central ships a fixed vocabulary of promoted action groups, and users build muscle memory around where each kind of action lives.
tier: official
language: en
tags:
  - action-groups
  - area-promoted
  - actionref
  - showas
  - split-button
  - group-caption
  - navigate-group
  - entity-group
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:18.797Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e2e8883fc49d773f667daaadde9c48346fa7e658
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/promoted-action-groups.md
    title: "microsoft/BCQuality: Use Standard Promoted Action Group Names And Placements"
    date: "2026-07-14"
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
    - change/bcquality/105
repo_path: microsoft/knowledge/ui/promoted-action-groups.md
layer: microsoft
kind: rule
domain: ui
bc_version:
  - 21..
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers: []
---

# Use Standard Promoted Action Group Names And Placements

> Business Central ships a fixed vocabulary of promoted action groups, and users build muscle memory around where each kind of action lives.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/ui/promoted-action-groups.md) · microsoft layer · ui · BC 21.. · tier official · derived

## Description
Business Central ships a fixed vocabulary of promoted action groups, and users build muscle memory around where each kind of action lives. When you define `area(Promoted)` groups, reusing the standard caption and placement for a given action class makes the page feel native; inventing your own caption or putting an action in the wrong group forces every user to relearn your page. Frontier models tend to emit plausible-but-nonstandard captions (`Go To`, `Vendor Actions`, `Related`) instead of the established BC names, which is exactly what breaks cross-page consistency.

## Best Practice
Map each action to its conventional group and use the exact standard caption: `Home`/`Process` for data-modifying and workflow actions (entity/card/document pages use `Home`, lists and worksheets use `Process`); an entity-named group (`Customer`, `Item`, `Order`) for navigation tied to the current record (statistics, ledger entries, dimensions); `Navigate` for related pages that are useful regardless of the selected record; `Report` for printing and analysis; and the workflow groups `Posting`, `Release`, `Approve`, `Request Approval`, and `Prepare` for their respective document lifecycle actions. Standard guidance recommends `ShowAs = SplitButton` for `Posting` (Post / Post and Print / Preview) and `Release` (Release / Reopen), while the other common groups normally render as standard groups. Use a split button elsewhere only for closely related alternatives with an obvious primary action. The first enabled and visible action becomes the primary button, so place the expected default first and remember that extensions or personalization can reorder it. Within a common group keep the same action sequence you see on the matching base-app page (for example, mirror Sales Order for a sales document) so order stays predictable.

## Anti Pattern
Custom captions for what is really a standard group (`Vendor Actions` instead of the `Vendor` entity group, `Go To` instead of `Navigate`), posting or statistics actions dropped into the wrong group, or many tiny one-action groups that fragment the ribbon. The reviewer signal is an `area(Promoted)` block whose `group` captions do not match the base-application names for the same page type, or a split button whose actions are unrelated or lack an obvious primary operation.

## Changed by

- [#105 Promote validated community knowledge](../../../../changes/bcquality/105.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
