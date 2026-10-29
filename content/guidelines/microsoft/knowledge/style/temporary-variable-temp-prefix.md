---
id: guideline/microsoft/knowledge/style/temporary-variable-temp-prefix
type: guideline
title: Prefix temporary record variables with `Temp`
summary: "A Record variable declared with the temporary modifier behaves nothing like a normal record variable: it never touches the database, holds rows only for the lifetime of the variable, and is not visible to filters or queries on the underlying table."
tier: official
language: en
tags:
  - temporary
  - temp
  - prefix
  - record-variable
  - naming
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:59.779Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2df9636903a1a2c7be3d5bb875cc744f3969380e
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/temporary-variable-temp-prefix.md
    title: "microsoft/BCQuality: Prefix temporary record variables with `Temp`"
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
    - change/bcquality/108
repo_path: microsoft/knowledge/style/temporary-variable-temp-prefix.md
layer: microsoft
kind: rule
domain: style
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
  - TempJobWIPBuffer
  - TempSalesLine
  - TempIntegerBuffer
---

# Prefix temporary record variables with `Temp`

> A Record variable declared with the temporary modifier behaves nothing like a normal record variable: it never touches the database, holds rows only for the lifetime of the variable, and is not visible to filters or queries on the underlying table.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/temporary-variable-temp-prefix.md) · microsoft layer · style · BC all · tier official · derived

## Description

A `Record` variable declared with the `temporary` modifier behaves nothing like a normal record variable: it never touches the database, holds rows only for the lifetime of the variable, and is not visible to filters or queries on the underlying table. The BC convention is to make that difference visible at every call site by prefixing the variable name with `Temp` — `TempJobWIPBuffer`, `TempSalesLine`, `TempIntegerBuffer`. The convention is load-bearing for code review: when a reader sees `SalesLine.Insert()`, they expect a database write; when they see `TempSalesLine.Insert()`, they know it is an in-memory buffer.

## Best Practice

Every local or global variable of type `Record X temporary` must start with `Temp`. Ordinary procedure parameters follow the same convention. Event publisher parameters are owned by the events-domain rule `prefix-temporary-record-event-parameters-with-temp.md`; the style leaf must not emit a second finding for the same event parameter.

See sample: [`temporary-variable-temp-prefix.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/temporary-variable-temp-prefix.good.al).

## Anti Pattern

`WIPBuffer: Record "Job WIP Buffer" temporary;` as a local, global, or ordinary procedure parameter reads at the call site as if it were a database operation. Exclude event publisher parameters here so the events leaf remains their single owner.

See sample: [`temporary-variable-temp-prefix.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/temporary-variable-temp-prefix.bad.al).

## Examples

- [Good: temporary-variable-temp-prefix.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/temporary-variable-temp-prefix.good.al)
- [Bad: temporary-variable-temp-prefix.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/style/temporary-variable-temp-prefix.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
