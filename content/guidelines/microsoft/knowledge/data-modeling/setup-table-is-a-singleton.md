---
id: guideline/microsoft/knowledge/data-modeling/setup-table-is-a-singleton
type: guideline
title: "A setup table is a singleton: one blank-keyed row, no insert or delete"
summary: An application-area setup table (Sales & Receivables Setup, Inventory Setup, and any custom * Setup) holds exactly one record per company. Its primary key is a single Code[10] field named Primary Key, and the row's value is left blank. Nothing else identifies the row — there is only ever one.
tier: official
language: en
tags:
  - setup-table
  - insertallowed
  - deleteallowed
  - getrecordonce
  - primary-key
  - card-page
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:24.789Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0a7ac8bf2814c9f5f0472fb20117d7a1dd039d71
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/setup-table-is-a-singleton.md
    title: "microsoft/BCQuality: A setup table is a singleton: one blank-keyed row, no insert or delete"
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
  related:
    - to: object/table/311
      title: table 311 "Sales & Receivables Setup"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/data-modeling/setup-table-is-a-singleton.md
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
  - OnOpenPage
  - GetRecordOnce
  - AutoIncrement
---

# A setup table is a singleton: one blank-keyed row, no insert or delete

> An application-area setup table (Sales & Receivables Setup, Inventory Setup, and any custom * Setup) holds exactly one record per company. Its primary key is a single Code[10] field named Primary Key, and the row's value is left blank. Nothing else identifies the row — there is only ever one.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/setup-table-is-a-singleton.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

An application-area setup table (`Sales & Receivables Setup`, `Inventory Setup`, and any custom `* Setup`) holds exactly one record per company. Its primary key is a single `Code[10]` field named `Primary Key`, and the row's value is left blank. Nothing else identifies the row — there is only ever one.

The setup **card** page enforces the singleton: `InsertAllowed = false` and `DeleteAllowed = false` stop a second row or an empty table, and the page guarantees the row exists on first open — typically `OnOpenPage` with `if not Rec.Get() then begin Rec.Init(); Rec.Insert(); end;`, or a `GetRecordOnce` helper on the table. Consuming code then reads it with a plain `Get()`. The read side needs no access optimization — see `singleton-setup-tables-need-no-access-optimization.md`.

## Best Practice

`Primary Key` `Code[10]` is the sole key; the setup is surfaced through a Card page with `InsertAllowed = false`, `DeleteAllowed = false`, and an open-time guard that inserts the blank row if it is missing.

See sample: [`setup-table-is-a-singleton.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/setup-table-is-a-singleton.good.al).

## Anti Pattern

An `Integer` / `AutoIncrement` key, a page that allows insert or delete, or a List page over the setup table. Any of these lets the table hold zero or many rows, so "the setup" becomes ambiguous and `Get()` may fail or read the wrong record.

See sample: [`setup-table-is-a-singleton.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/setup-table-is-a-singleton.bad.al).

## Examples

- [Good: setup-table-is-a-singleton.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/setup-table-is-a-singleton.good.al)
- [Bad: setup-table-is-a-singleton.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/setup-table-is-a-singleton.bad.al)

## Names

- [table 311 "Sales & Receivables Setup"](../../../../objects/table/311.md) (possibly related: a code span names it)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#65 Add data-modeling and appsource knowledge articles (MICROSOFT layer)](../../../../changes/bcquality/65.md), 2026-07-13

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
