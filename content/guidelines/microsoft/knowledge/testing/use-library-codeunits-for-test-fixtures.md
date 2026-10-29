---
id: guideline/microsoft/knowledge/testing/use-library-codeunits-for-test-fixtures
type: guideline
title: Build fixtures with the test Library codeunits, not hand-rolled Init/Insert
summary: BC ships a layer of test Library codeunits — LibrarySales, LibraryPurchase, LibraryERM, LibraryInventory, LibraryRandom and many more — whose job is to create valid records.
tier: official
language: en
tags:
  - library-codeunits
  - fixtures
  - test-data
  - number-series
  - prerequisite
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:01.259Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9c8f092ce6c440eecac47bb039baf91f715d9776
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-library-codeunits-for-test-fixtures.md
    title: "microsoft/BCQuality: Build fixtures with the test Library codeunits, not hand-rolled Init/Insert"
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
    - change/bcquality/62
repo_path: microsoft/knowledge/testing/use-library-codeunits-for-test-fixtures.md
layer: microsoft
kind: rule
domain: testing
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
  - LibrarySales
  - LibraryPurchase
  - LibraryERM
  - LibraryInventory
  - LibraryRandom
  - CreateCustomer
  - CreateItem
  - TableRelation
  - CreateSalesLine
  - RandDec
---

# Build fixtures with the test Library codeunits, not hand-rolled Init/Insert

> BC ships a layer of test Library codeunits — LibrarySales, LibraryPurchase, LibraryERM, LibraryInventory, LibraryRandom and many more — whose job is to create valid records.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-library-codeunits-for-test-fixtures.md) · microsoft layer · testing · BC all · tier official · derived

## Description

BC ships a layer of test Library codeunits — `LibrarySales`, `LibraryPurchase`, `LibraryERM`, `LibraryInventory`, `LibraryRandom` and many more — whose job is to create valid records. `CreateCustomer` assigns a number from the customer number series, fills the mandatory fields, and satisfies the table relations the platform enforces; `CreateItem` does the same for items. Hand-rolling `Customer.Init`/`Customer.Insert` with invented values skips the number series and any field a future app version adds as mandatory, so the fixture is invalid the moment it is created and rots silently as the schema evolves. The library codeunits also encode fixture *ordering*: because a `TableRelation` field is checked on `Validate` and `Insert(true)`, every parent a foreign key points to must already exist when the dependent record is built. Assemble fixtures top-down — customer and item before the sales line that references them — or the relation check aborts the test at runtime with a data error rather than an assertion. Prefer the Library codeunits for prerequisite data: they encode the setup the platform requires and are maintained alongside the base app.

## Best Practice

Reach for the matching Library codeunit before writing manual record setup: `LibrarySales.CreateCustomer`, `LibrarySales.CreateSalesHeader`/`CreateSalesLine`, `LibraryInventory.CreateItem`, `LibraryERM.CreateGLAccount`, and `LibraryRandom.RandInt`/`RandDec` for values. Create the prerequisite parents first and reference their primary keys from dependent records, and `Validate` the foreign-key field so the `TableRelation` — and any field-validation logic — runs exactly as it would in production. Pass the records they return into the code under test. The fixtures stay valid across upgrades because the library — not your test — owns the knowledge of what a well-formed record requires.

See sample: [`use-library-codeunits-for-test-fixtures.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-library-codeunits-for-test-fixtures.good.al).

## Anti Pattern

`Customer.Init(); Customer."No." := 'X'; Customer.Insert();` — a record with a hand-picked primary key, no number-series entry, and none of the mandatory fields a real customer needs. It compiles and may even insert, but it bypasses setup the production code assumes, and it breaks the first time the schema gains a required field the test does not know about.

See sample: [`use-library-codeunits-for-test-fixtures.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-library-codeunits-for-test-fixtures.bad.al).

## Examples

- [Good: use-library-codeunits-for-test-fixtures.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-library-codeunits-for-test-fixtures.good.al)
- [Bad: use-library-codeunits-for-test-fixtures.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-library-codeunits-for-test-fixtures.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#62 Add testing knowledge: UI handlers, table relations, asserterror, fixtures (P1+P2)](../../../../changes/bcquality/62.md), 2026-07-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
