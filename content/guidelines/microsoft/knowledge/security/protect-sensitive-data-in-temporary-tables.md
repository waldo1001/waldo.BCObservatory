---
id: guideline/microsoft/knowledge/security/protect-sensitive-data-in-temporary-tables
type: guideline
title: Protect sensitive data in temporary tables
summary: A temporary record copies data out of the source table into session memory.
tier: official
language: en
tags:
  - temporary-table
  - data-protection
  - permission
  - cleanup
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:52.667Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5f501564e2f3ab551429b81708c32e0851e86509
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/protect-sensitive-data-in-temporary-tables.md
    title: "microsoft/BCQuality: Protect sensitive data in temporary tables"
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
    - change/bcquality/49
repo_path: microsoft/knowledge/security/protect-sensitive-data-in-temporary-tables.md
layer: microsoft
kind: rule
domain: security
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Protect sensitive data in temporary tables

> A temporary record copies data out of the source table into session memory.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/protect-sensitive-data-in-temporary-tables.md) · microsoft layer · security · BC all · tier official · derived

## Description

A temporary record copies data out of the source table into session memory. The platform does not automatically enforce the source table's permission model on the copy, and a value written to a temporary buffer can outlive the procedure that put it there if the buffer is a global or is passed upward. Code that places sensitive rows into a temporary table is therefore responsible for the checks and cleanup the source table would otherwise provide.

## Best Practice

Validate the caller's read permission on the source table before populating the temporary buffer. Keep the buffer's lifetime as short as the work requires, and prefer local temporary variables over globals for anything carrying sensitive data — a local buffer's contents are discarded automatically when the procedure returns. When a buffer must be global or is passed back to callers, delete its contents on every exit path — including error paths — so sensitive values do not linger.

See sample: [`protect-sensitive-data-in-temporary-tables.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/protect-sensitive-data-in-temporary-tables.good.al).

## Anti Pattern

Copying records into a temporary buffer without a preceding permission check, and relying on procedure-exit to clean up. An exception before the explicit cleanup leaves the data in the buffer; a global or var-parameter buffer carries the data back to callers that may have no right to see it.

See sample: [`protect-sensitive-data-in-temporary-tables.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/protect-sensitive-data-in-temporary-tables.bad.al).

## Examples

- [Good: protect-sensitive-data-in-temporary-tables.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/protect-sensitive-data-in-temporary-tables.good.al)
- [Bad: protect-sensitive-data-in-temporary-tables.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/security/protect-sensitive-data-in-temporary-tables.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#49 Promote security knowledge from community to Microsoft layer](../../../../changes/bcquality/49.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
