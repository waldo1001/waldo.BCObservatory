---
id: guideline/microsoft/knowledge/testing/use-generateguid-for-unique-test-fixture-values
type: guideline
title: Generate unique test fixture values with LibraryUtility helpers, not hardcoded literals
summary: A fixture helper that assigns a hardcoded literal to a primary-key field, or to any field the test relies on as a unique lookup identifier, collides the moment two tests, or two runs of the same test, create that fixture without cleanup — and a literal longer than the field allows raises a…
tier: official
language: en
tags:
  - generateguid
  - library-utility
  - test-fixtures
  - uniqueness
  - generaterandomcode
  - maxstrlen
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:53.401Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e06f738396d6a6cab84771b40ef78d43b143a523
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-generateguid-for-unique-test-fixture-values.md
    title: "microsoft/BCQuality: Generate unique test fixture values with LibraryUtility helpers, not hardcoded literals"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/recordid/recordid-tableno-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/158
repo_path: microsoft/knowledge/testing/use-generateguid-for-unique-test-fixture-values.md
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
  - LibraryUtility
  - RecordRef
  - TableNo
  - CodeLength
  - GenerateRandomCodeWithLength
  - GenerateRandomCode20
  - GenerateRandomCode
  - GenerateGUID
  - GenerateRandomXMLText
---

# Generate unique test fixture values with LibraryUtility helpers, not hardcoded literals

> A fixture helper that assigns a hardcoded literal to a primary-key field, or to any field the test relies on as a unique lookup identifier, collides the moment two tests, or two runs of the same test, create that fixture without cleanup — and a literal longer than the field allows raises a…

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-generateguid-for-unique-test-fixture-values.md) · microsoft layer · testing · BC all · tier official · derived

## Description

A fixture helper that assigns a hardcoded literal to a primary-key field, or to any field the test relies on as a unique lookup identifier, collides the moment two tests, or two runs of the same test, create that fixture without cleanup — and a literal longer than the field allows raises a truncation or insert error. An ordinary descriptive field carries no such constraint: two rows with the same description do not collide on insert, and a deterministic descriptive value is often exactly what an exact-match assertion needs, so none of this applies to it. `LibraryUtility.GenerateGUID()` is not a real GUID — it is a `Code[10]` number-series value (`GU00000000`–`GU99999999`) — and it returns the full 10 characters unshortened. Truncating it yourself with `CopyStr(..., 1, MaxStrLen(ShorterField))` for a field under 10 characters is unsafe: the changing digits sit at the right end and are exactly what gets cut off, so consecutive calls into a short field can produce the same truncated value. `GenerateGUID()` is only safe as-is for a field that holds the full 10 characters.

## Best Practice

For a field that holds the full 10 characters, assign `LibraryUtility.GenerateGUID()` directly. For a shorter field, do not truncate a GUID yourself — but also do not assume every `LibraryUtility` helper verifies uniqueness against the real table, because they don't all behave the same way:

- `GenerateRandomCode(FieldNo, TableNo)` opens the target table as a **temporary** `RecordRef`: the buffer starts and stays empty, so its `repeat...until RecRef.IsEmpty()` loop always exits after one iteration — despite taking `TableNo`, it never checks the real table, and it never retries even within its own call. Its value is the rightmost `FieldRef.Length` characters of `GenerateGUID()`'s sequential `GU00000000`–`GU99999999` series, so for a short field that window of digits cycles: a 1-character field repeats every 10 calls, a 2-character field every 100, and so on. It is a finite short-field namespace with a low collision *chance* within one test run — not a guarantee at any scope, unlike the table-checking helpers below.
- `GenerateRandomCodeWithLength(FieldNo, TableNo, CodeLength)` opens the real (non-temporary) table and loops until the generated value doesn't collide — a genuine verified-unique guarantee — but it returns `Code[10]` regardless of the requested `CodeLength`, so it's only useful for a field of 10 characters or fewer.
- `GenerateRandomCode20(FieldNo, TableNo)` is the same real, verified-against-the-table pattern as `GenerateRandomCodeWithLength`, sized for a `Code[20]` field.
- `GenerateRandomXMLText(Length)` performs no table lookup at all — it's a plain random-text generator, appropriate for a descriptive/incidental field where uniqueness doesn't matter, not for a value that needs to be collision-checked.

Pick `GenerateRandomCodeWithLength`/`GenerateRandomCode20` when the test genuinely needs a code verified unique against the table; use `GenerateRandomCode`/`GenerateGUID`/`GenerateRandomXMLText` for incidental values where a low collision *chance* is enough.

See sample: [`use-generateguid-for-unique-test-fixture-values.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-generateguid-for-unique-test-fixture-values.good.al).

## Anti Pattern

Hardcoding a primary-key or unique-lookup fixture value such as `'TEST001'`, which collides across parallel or repeated test runs — a fixed descriptive value is not this anti-pattern, since the field carries no uniqueness constraint. Equally an anti-pattern: truncating `GenerateGUID()`'s result with `CopyStr(..., 1, MaxStrLen(Field))` for a field shorter than 10 characters — the truncation removes the part of the value that actually varies.

See sample: [`use-generateguid-for-unique-test-fixture-values.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-generateguid-for-unique-test-fixture-values.bad.al).

## Examples

- [Good: use-generateguid-for-unique-test-fixture-values.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-generateguid-for-unique-test-fixture-values.good.al)
- [Bad: use-generateguid-for-unique-test-fixture-values.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/testing/use-generateguid-for-unique-test-fixture-values.bad.al)

## Names

- [RecordId.TableNo() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/recordid/recordid-tableno-method) (names TableNo)

## Changed by

- [#158 3 AL/BC patterns from CURABIS's internal automated-testing training material](../../../../changes/bcquality/158.md), 2026-09-29

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
