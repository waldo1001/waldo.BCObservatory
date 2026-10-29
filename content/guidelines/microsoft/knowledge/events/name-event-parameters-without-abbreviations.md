---
id: guideline/microsoft/knowledge/events/name-event-parameters-without-abbreviations
type: guideline
title: Name event parameters without abbreviations
summary: Event parameter names are part of the public contract a subscriber codes against, so they must be self-explanatory. Record parameters take the full table name with the spaces removed — SalesHeader for "Sales Header", not SalesHdr or SH.
tier: official
language: en
tags:
  - parameter-naming
  - readability
  - conventions
  - event-parameters
  - no-abbreviations
  - integration-event
  - clarity
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:27.864Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9985ae253ef6a32e587b8dc54f7732f7ac3d74f0
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/name-event-parameters-without-abbreviations.md
    title: "microsoft/BCQuality: Name event parameters without abbreviations"
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
repo_path: microsoft/knowledge/events/name-event-parameters-without-abbreviations.md
layer: microsoft
kind: rule
domain: events
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
  - SalesHeader
  - SalesHdr
  - DocumentNo
  - DocNo
---

# Name event parameters without abbreviations

> Event parameter names are part of the public contract a subscriber codes against, so they must be self-explanatory. Record parameters take the full table name with the spaces removed — SalesHeader for "Sales Header", not SalesHdr or SH.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/name-event-parameters-without-abbreviations.md) · microsoft layer · events · BC all · tier official · derived

## Description

Event parameter names are part of the public contract a subscriber codes against, so they must be self-explanatory. Record parameters take the full table name with the spaces removed — `SalesHeader` for `"Sales Header"`, not `SalesHdr` or `SH`. Simple parameters get a descriptive, spelled-out name — `DocumentNo`, not `DocNo`; `Amount`, not `Amt`. Abbreviated names force every subscriber author to guess intent and tend to be inconsistent across a codebase, where the same concept appears under several contractions. The cost of a clear name is paid once at the publisher; the cost of a cryptic one is paid by every subscriber that has to decode it.

## Best Practice

Use full, unabbreviated names: `(SalesHeader: Record "Sales Header"; DocumentNo: Code[20]; Amount: Decimal)`. Record parameters mirror the table name without spaces, and value parameters read as whole words so the contract is unambiguous.

See sample: [`name-event-parameters-without-abbreviations.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/name-event-parameters-without-abbreviations.good.al).

## Anti Pattern

Abbreviated parameter names (`SalesHdr`, `DocNo`, `Amt`) that obscure meaning and vary across publishers, so subscribers must guess what each one holds. Detection: event parameters whose names are truncated forms of the table name or contracted words rather than the full term.

See sample: [`name-event-parameters-without-abbreviations.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/name-event-parameters-without-abbreviations.bad.al).

## Examples

- [Good: name-event-parameters-without-abbreviations.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/name-event-parameters-without-abbreviations.good.al)
- [Bad: name-event-parameters-without-abbreviations.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/events/name-event-parameters-without-abbreviations.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
