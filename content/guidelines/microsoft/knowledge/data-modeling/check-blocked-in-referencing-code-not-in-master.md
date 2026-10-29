---
id: guideline/microsoft/knowledge/data-modeling/check-blocked-in-referencing-code-not-in-master
type: guideline
title: Enforce `Blocked` where the master is used, not in the master itself
summary: The Blocked field on a master record (Item, Customer, Resource, or a custom master) is inert data. The master table holds no logic that acts on it.
tier: official
language: en
tags:
  - blocked-field
  - testfield
  - referencing-code
  - point-of-use
  - enforcement
  - journal-line
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:19.695Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 698980f48bb3e4d42bf5f8ebbf093d328809fd79
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/check-blocked-in-referencing-code-not-in-master.md
    title: "microsoft/BCQuality: Enforce `Blocked` where the master is used, not in the master itself"
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
    - change/bcquality/65
repo_path: microsoft/knowledge/data-modeling/check-blocked-in-referencing-code-not-in-master.md
layer: microsoft
kind: rule
domain: data-modeling
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - OnValidate
  - OnInsert
  - OnModify
---

# Enforce `Blocked` where the master is used, not in the master itself

> The Blocked field on a master record (Item, Customer, Resource, or a custom master) is inert data. The master table holds no logic that acts on it.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/check-blocked-in-referencing-code-not-in-master.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

The `Blocked` field on a master record (`Item`, `Customer`, `Resource`, or a custom master) is inert data. The master table holds **no** logic that acts on it. Enforcement belongs in the **consuming** code: when a journal line, document line, or posting routine references the master by its `No.`, that referencing object tests the flag at the point of use, e.g. `LoyaltyMember.Get("Member No."); LoyaltyMember.TestField(Blocked, false);` in the line's `OnValidate` and again before posting.

Putting the block check inside the master's own `OnInsert`/`OnModify` does nothing to stop transactional use: a blocked master is edited rarely, but it is *referenced* constantly, and those references never touch the master's own triggers. Base BC follows this split — `Item.Blocked` is checked by sales/purchase/journal code, not by the `Item` table. A boolean `Blocked` uses `TestField(Blocked, false)`; an option-style block (e.g. `Sales`/`All`) needs the specific option compared at each relevant path.

## Best Practice

The referencing line validates `Master.TestField(Blocked, false)` in `OnValidate` of the reference field and re-checks before posting. The master table stays logic-free on `Blocked`.

See sample: [`check-blocked-in-referencing-code-not-in-master.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/check-blocked-in-referencing-code-not-in-master.good.al).

## Anti Pattern

The block check sits in the master's own `OnModify`/`OnInsert` (so referencing and posting proceed unchecked), or there is no check at all on the referencing side.

See sample: [`check-blocked-in-referencing-code-not-in-master.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/check-blocked-in-referencing-code-not-in-master.bad.al).

## Examples

- [Good: check-blocked-in-referencing-code-not-in-master.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/check-blocked-in-referencing-code-not-in-master.good.al)
- [Bad: check-blocked-in-referencing-code-not-in-master.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/check-blocked-in-referencing-code-not-in-master.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#65 Add data-modeling and appsource knowledge articles (MICROSOFT layer)](../../../../changes/bcquality/65.md), 2026-07-13

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
