---
id: guideline/microsoft/knowledge/upgrade/initvalue-does-not-update-existing-rows
type: guideline
title: "`InitValue` does not back-fill existing rows"
summary: InitValue on a field defines the value the platform assigns when a *new* record is inserted. It does not touch rows that already exist when the field is added.
tier: official
language: en
tags:
  - initvalue
  - new-field
  - existing-rows
  - default-value
  - table-extension
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:09.314Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: bfa0f031504dde4752a6cb4cfdf373cf7743c6f6
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/initvalue-does-not-update-existing-rows.md
    title: "microsoft/BCQuality: `InitValue` does not back-fill existing rows"
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
repo_path: microsoft/knowledge/upgrade/initvalue-does-not-update-existing-rows.md
layer: microsoft
kind: rule
domain: upgrade
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
  - InitValue
---

# `InitValue` does not back-fill existing rows

> InitValue on a field defines the value the platform assigns when a *new* record is inserted. It does not touch rows that already exist when the field is added.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/initvalue-does-not-update-existing-rows.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

`InitValue` on a field defines the value the platform assigns when a *new* record is inserted. It does not touch rows that already exist when the field is added. When a new field is added to an existing table — directly or via a table extension — every pre-existing row receives the datatype default (`false` for Boolean, `0` for numeric, empty for text), not the `InitValue`. If the intended semantics require existing rows to carry the `InitValue`, the change is incomplete without an upgrade routine that sets the field on those rows.

Several legitimate cases do NOT need upgrade code:
- New fields on brand-new tables (no existing rows).
- New `Boolean` fields without `InitValue` where the datatype default `false` is the intended value.
- New fields on configuration / setup tables that have no meaningful "existing data".
- Informational or optional fields (logging, preferences, tracking) where `false` / empty is a valid state.

## Best Practice

When a new field on an existing table has an `InitValue` that matters, ship an upgrade procedure that walks the existing rows and sets the field to the same value — typically via `DataTransfer.AddConstantValue` for performance — guarded by an upgrade tag.

See sample: [`initvalue-does-not-update-existing-rows.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/initvalue-does-not-update-existing-rows.good.al).

## Anti Pattern

Adding a field with `InitValue = true;` (or any non-default `InitValue`) and shipping no upgrade code. Existing rows silently carry the datatype default, leaving the table in two states: rows created before the upgrade with the wrong value, and rows created after with the right one.

See sample: [`initvalue-does-not-update-existing-rows.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/initvalue-does-not-update-existing-rows.bad.al).

## Examples

- [Good: initvalue-does-not-update-existing-rows.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/initvalue-does-not-update-existing-rows.good.al)
- [Bad: initvalue-does-not-update-existing-rows.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/initvalue-does-not-update-existing-rows.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
