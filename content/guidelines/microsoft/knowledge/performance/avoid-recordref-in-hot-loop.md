---
id: guideline/microsoft/knowledge/performance/avoid-recordref-in-hot-loop
type: guideline
title: Avoid RecordRef / FieldRef in hot loops when a typed record fits
summary: RecordRef and FieldRef are slower than direct typed record access — the platform resolves the table and field at runtime instead of at compile time.
tier: official
language: en
tags:
  - recordref
  - fieldref
  - hot-loop
  - typed-record
  - metadata
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:35.193Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6aae1771a73d932d0d8f0a070cd6617a003b373f
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-recordref-in-hot-loop.md
    title: "microsoft/BCQuality: Avoid RecordRef / FieldRef in hot loops when a typed record fits"
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
repo_path: microsoft/knowledge/performance/avoid-recordref-in-hot-loop.md
layer: microsoft
kind: rule
domain: performance
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
  - RecordRef
  - FieldRef
---

# Avoid RecordRef / FieldRef in hot loops when a typed record fits

> RecordRef and FieldRef are slower than direct typed record access — the platform resolves the table and field at runtime instead of at compile time.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-recordref-in-hot-loop.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`RecordRef` and `FieldRef` are slower than direct typed record access — the platform resolves the table and field at runtime instead of at compile time. The trade-off is intentional: per the upstream guidance, "RecordRef/FieldRef operations are slower than direct record access, but many features REQUIRE them for generic metadata iteration (permission checks, field copying, dynamic field access)." The rule, then, is not "never use them" but "only flag when used inside a clearly unbounded hot loop (10k+ iterations) where a typed alternative exists."

## Best Practice

Use `RecordRef`/`FieldRef` for genuinely generic code — permission checks, field copying, table-agnostic export. When the loop target is known at compile time and the loop iterates a large number of rows, declare the typed record and access fields directly; the saved per-iteration overhead is measurable at the volumes the rule targets.

See sample: [`avoid-recordref-in-hot-loop.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-recordref-in-hot-loop.good.al).

## Anti Pattern

`RecRef.Open(Database::Customer); if RecRef.FindSet() then repeat FldRef := RecRef.Field(Customer.FieldNo(Name)); ProcessName(FldRef.Value); until RecRef.Next() = 0;` — the table is fixed at compile time, the field is fixed at compile time, and the loop pays the dynamic-resolution cost on every iteration. The direct `Customer.Name` form does the same work without the lookup.

See sample: [`avoid-recordref-in-hot-loop.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-recordref-in-hot-loop.bad.al).

## Examples

- [Good: avoid-recordref-in-hot-loop.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-recordref-in-hot-loop.good.al)
- [Bad: avoid-recordref-in-hot-loop.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/avoid-recordref-in-hot-loop.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
