---
id: guideline/microsoft/knowledge/upgrade/guard-database-reads
type: guideline
title: Guard every database read in upgrade code with `if`
summary: Inside an upgrade codeunit (or any procedure transitively invoked from OnUpgradePerCompany / OnUpgradePerDatabase), an unguarded Record.Get, Record.FindSet, or Record.FindLast raises a runtime error when the row or set is missing.
tier: official
language: en
tags:
  - get
  - findset
  - findlast
  - guard
  - if-then
  - runtime-error
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:09.242Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 09a99e339582e52d20cab1413c99c426e24bef43
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/guard-database-reads.md
    title: "microsoft/BCQuality: Guard every database read in upgrade code with `if`"
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
repo_path: microsoft/knowledge/upgrade/guard-database-reads.md
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
  - OnUpgradePerCompany
  - OnUpgradePerDatabase
---

# Guard every database read in upgrade code with `if`

> Inside an upgrade codeunit (or any procedure transitively invoked from OnUpgradePerCompany / OnUpgradePerDatabase), an unguarded Record.Get, Record.FindSet, or Record.FindLast raises a runtime error when the row or set is missing.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/guard-database-reads.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

Inside an upgrade codeunit (or any procedure transitively invoked from `OnUpgradePerCompany` / `OnUpgradePerDatabase`), an unguarded `Record.Get`, `Record.FindSet`, or `Record.FindLast` raises a runtime error when the row or set is missing. In upgrade context that error aborts the entire upgrade for the company or database — a far worse outcome than the missing data itself. Records the upgrade reasons about may legitimately not exist on every customer's tenant.

## Best Practice

Wrap every read in an `if`. `if Item.Get(No) then ...`, `if Customer.FindSet() then;`, `if not Vendor.FindLast() then exit;`. The empty-then form `if Customer.FindSet() then;` is the idiomatic way to attempt a read whose only purpose is to position a record, while swallowing the "not found" case.

See sample: [`guard-database-reads.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/guard-database-reads.good.al).

## Anti Pattern

Calling `Item.Get()`, `Customer.FindSet()`, or `Vendor.FindLast()` bare in upgrade code. The first tenant whose data does not match the upgrade's assumptions will fail to upgrade.

See sample: [`guard-database-reads.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/guard-database-reads.bad.al).

## Examples

- [Good: guard-database-reads.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/guard-database-reads.good.al)
- [Bad: guard-database-reads.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/guard-database-reads.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
