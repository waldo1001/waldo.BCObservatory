---
id: guideline/microsoft/knowledge/performance/use-get-instead-of-findfirst-on-full-primary-key
type: guideline
title: Use Get for primary-key lookups without losing filter conditions
summary: Get(...) retrieves a record by primary key, but ignores normal record filters. Replacing a FindFirst() filtered only by the full primary key with Get expresses the lookup directly.
tier: official
language: en
tags:
  - get
  - findfirst
  - primary-key
  - setrange
  - lookup
  - filters
  - blocked
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:29.986Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 154e01d5b22dcc4b7ae1dc8655cfcc50bd00bcc3
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-get-instead-of-findfirst-on-full-primary-key.md
    title: "microsoft/BCQuality: Use Get for primary-key lookups without losing filter conditions"
    date: "2026-10-02"
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
    - change/bcquality/205
    - change/bcquality/174
repo_path: microsoft/knowledge/performance/use-get-instead-of-findfirst-on-full-primary-key.md
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
  - FindFirst
  - SetRange
---

# Use Get for primary-key lookups without losing filter conditions

> Get(...) retrieves a record by primary key, but ignores normal record filters. Replacing a FindFirst() filtered only by the full primary key with Get expresses the lookup directly.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-get-instead-of-findfirst-on-full-primary-key.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`Get(...)` retrieves a record by primary key, but ignores normal record filters. Replacing a `FindFirst()` filtered only by the full primary key with `Get` expresses the lookup directly. The same replacement is not equivalent when additional filters enforce business conditions, such as requiring an unblocked customer. Security filters are a separate mechanism: their effect on `Get` depends on Security Filter Mode.

## Best Practice

When all primary-key fields are available and no additional normal filter constrains the result, call `Get` with them. Reserve `FindFirst` for filtered searches, including partial keys, secondary fields, or additional business conditions.

Before recommending a replacement, inspect the effective filters at the call site, including filters set by callers or helpers. If additional conditions matter, retain the filtered `FindFirst` or explicitly enforce equivalent conditions after a successful `Get`, before using the record. Do not flag `FindFirst` merely because all primary-key fields are filtered when a non-key filter must also hold. A `SetRange` before `Get` does not enforce that condition.

See sample: [`use-get-instead-of-findfirst-on-full-primary-key.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-get-instead-of-findfirst-on-full-primary-key.good.al).

## Anti Pattern

Composing `SetRange` calls that cover only the full primary key and then calling `FindFirst` obscures a direct key lookup. Do not extend this finding to a lookup with additional business filters unless the proposed correction preserves them.

Replacing a filtered lookup with `Get` while assuming a normal filter still excludes records is a correctness defect: a blocked or otherwise ineligible record can pass the lookup. Recommending that replacement without preserving the condition is also an incorrect review finding.

See sample: [`use-get-instead-of-findfirst-on-full-primary-key.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-get-instead-of-findfirst-on-full-primary-key.bad.al).

## References

- [Record.Get remarks: primary-key lookup and filter semantics](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-get-method).

## Examples

- [Good: use-get-instead-of-findfirst-on-full-primary-key.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-get-instead-of-findfirst-on-full-primary-key.good.al)
- [Bad: use-get-instead-of-findfirst-on-full-primary-key.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-get-instead-of-findfirst-on-full-primary-key.bad.al)

## Changed by

- [#205 Preserve business filters when recommending Record.Get](../../../../changes/bcquality/205.md), 2026-10-02
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
