---
id: guideline/microsoft/knowledge/data-modeling/calcfields-blob-before-reading-its-stream
type: guideline
title: Calculate a BLOB field before reading its stream
summary: Get, Find, FindSet, and Next do not load the content of Blob fields. Until the field is calculated with CalcFields (or loaded through SetAutoCalcFields before the read), the in-memory BLOB is empty.
tier: official
language: en
tags:
  - blob
  - calcfields
  - setautocalcfields
  - createinstream
  - instream
  - empty-stream
  - blob-field
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:15.448Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6f832c3ec75740defd1c28f6d1af0e4a68e69f45
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/calcfields-blob-before-reading-its-stream.md
    title: "microsoft/BCQuality: Calculate a BLOB field before reading its stream"
    date: "2026-10-20"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/228
repo_path: microsoft/knowledge/data-modeling/calcfields-blob-before-reading-its-stream.md
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
  - FindSet
  - CalcFields
  - SetAutoCalcFields
  - CreateInStream
  - MediaSet
  - CreateOutStream
---

# Calculate a BLOB field before reading its stream

> Get, Find, FindSet, and Next do not load the content of Blob fields. Until the field is calculated with CalcFields (or loaded through SetAutoCalcFields before the read), the in-memory BLOB is empty.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/calcfields-blob-before-reading-its-stream.md) · microsoft layer · data-modeling · BC all · tier official · derived

## Description

`Get`, `Find`, `FindSet`, and `Next` do not load the content of `Blob` fields. Until the field is calculated with `CalcFields` (or loaded through `SetAutoCalcFields` before the read), the in-memory BLOB is empty. `CreateInStream` on that field succeeds and returns an empty stream, so code that reads text, JSON, or an image from it gets an empty result and no error. The defect does not surface in tests that fill and read the BLOB in the same record variable.

`Media` and `MediaSet` fields are different types and are not loaded with `CalcFields`; this article covers `Blob` only.

## Best Practice

Call `CalcFields` on the BLOB field after retrieving the record and before `CreateInStream`, or call `SetAutoCalcFields` on the field before a `FindSet` loop that reads the BLOB for every row.

Do not flag code that reads a BLOB it has just written through `CreateOutStream` on the same record variable, a BLOB on a temporary record filled in the same session, or a read preceded by `SetAutoCalcFields` on that field. Writing a BLOB does not require a prior `CalcFields`.

See sample: [`calcfields-blob-before-reading-its-stream.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/calcfields-blob-before-reading-its-stream.good.al).

## Anti Pattern

A record retrieved from the database followed by `<Record>.<BlobField>.CreateInStream(...)` with no `CalcFields` or `SetAutoCalcFields` on that field in between. The reader sees an empty stream and passes empty content on to the parser, export, or HTTP request that consumes it.

See sample: [`calcfields-blob-before-reading-its-stream.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/calcfields-blob-before-reading-its-stream.bad.al).

## References

[Record.CalcFields method](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method) (CalcFields also retrieves BLOBs) and [BigText.Read method](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/bigtext/bigtext-read-method) (a BLOB field must be calculated before it is used in AL).

## Examples

- [Good: calcfields-blob-before-reading-its-stream.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/calcfields-blob-before-reading-its-stream.good.al)
- [Bad: calcfields-blob-before-reading-its-stream.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/data-modeling/calcfields-blob-before-reading-its-stream.bad.al)

## Names

- [Record.CalcFields(Any \[, Any,...\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-calcfields-method) (names CalcFields)

## Changed by

- [#228 Knowledge: isolated events, FilterGroup scope, BLOB CalcFields and stream text encoding](../../../../changes/bcquality/228.md), 2026-10-20

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
