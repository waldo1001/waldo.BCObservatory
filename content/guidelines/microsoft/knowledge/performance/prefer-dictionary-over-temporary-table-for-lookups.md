---
id: guideline/microsoft/knowledge/performance/prefer-dictionary-over-temporary-table-for-lookups
type: guideline
title: Prefer a Dictionary over a temporary table for pure lookups
summary: An AL Dictionary directly models an unordered unique key-to-value collection. A temporary table models records and supports keys, filters, validation, and ordered iteration in Business Central Server memory.
tier: official
language: en
tags:
  - dictionary
  - temporary-table
  - lookup
  - o-of-1
  - key-lookup
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:23.399Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: fea22d8e8ba1998ac79434b453b0f347504029ed
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-dictionary-over-temporary-table-for-lookups.md
    title: "microsoft/BCQuality: Prefer a Dictionary over a temporary table for pure lookups"
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
    - change/bcquality/94
repo_path: microsoft/knowledge/performance/prefer-dictionary-over-temporary-table-for-lookups.md
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
examples: 0
identifiers: []
---

# Prefer a Dictionary over a temporary table for pure lookups

> An AL Dictionary directly models an unordered unique key-to-value collection. A temporary table models records and supports keys, filters, validation, and ordered iteration in Business Central Server memory.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/prefer-dictionary-over-temporary-table-for-lookups.md) · microsoft layer · performance · BC all · tier official · derived

## Description

An AL `Dictionary` directly models an unordered unique key-to-value collection. A temporary table models records and supports keys, filters, validation, and ordered iteration in Business Central Server memory. For a pure lookup map, the dictionary avoids repeatedly configuring and searching a temporary record and makes the intended access pattern explicit.

## Best Practice

Use `Dictionary of [Key, Value]` when the operation is add-or-replace, contains-key, and get-value by one supported key type. Use a temporary table when the value is a record, or when the code needs filters, ordered iteration, multiple fields, multiple keys, or table behavior. Both structures consume service-tier memory and still need volume analysis.

## Anti Pattern

A temporary record used only through `SetRange(KeyField, X); FindFirst()` to retrieve one scalar value, with no record semantics that justify the table. The opposite mistake is replacing a temporary table that needs filtering or ordered iteration with a dictionary.

## Changed by

- [#94 Correct performance knowledge guidance](../../../../changes/bcquality/94.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
