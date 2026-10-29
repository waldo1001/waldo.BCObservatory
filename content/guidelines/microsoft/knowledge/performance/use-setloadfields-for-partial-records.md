---
id: guideline/microsoft/knowledge/performance/use-setloadfields-for-partial-records
type: guideline
title: Use SetLoadFields to load only the fields the code reads
summary: SetLoadFields(...) declares the subset of normal fields the next read should materialize. Microsoft's partial-record guidance explains how loading fewer fields reduces work, particularly for read loops and tables with extensions.
tier: official
language: en
tags:
  - setloadfields
  - partial-record
  - normal-field
  - flowfield
  - get
  - findset
  - statement-order
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:44.301Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5bd9bb794a3770ea25aaf8c096384b4c32049491
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-setloadfields-for-partial-records.md
    title: "microsoft/BCQuality: Use SetLoadFields to load only the fields the code reads"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/198
    - change/bcquality/176
    - change/bcquality/174
    - change/bcquality/130
repo_path: microsoft/knowledge/performance/use-setloadfields-for-partial-records.md
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
  - SystemId
  - SetRange
  - SetFilter
  - FindSet
  - FindFirst
  - SetLoadFields
  - AddLoadFields
  - OnPreDataItem
---

# Use SetLoadFields to load only the fields the code reads

> SetLoadFields(...) declares the subset of normal fields the next read should materialize. Microsoft's partial-record guidance explains how loading fewer fields reduces work, particularly for read loops and tables with extensions.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-setloadfields-for-partial-records.md) · microsoft layer · performance · BC all · tier official · derived

## Description

`SetLoadFields(...)` declares the subset of normal fields the next read should materialize. Microsoft's partial-record guidance explains how loading fewer fields reduces work, particularly for read loops and tables with extensions. Primary-key fields, `SystemId`, system audit fields, and fields being filtered on are loaded automatically; those do not need to appear in the selection. Only `FieldClass = Normal` fields can be selected, not FlowFields or FlowFilters.

Its position relative to `SetRange`/`SetFilter` does not change the projection: filtered fields are included at read time either way. Projection-changing operations are separate: `AddLoadFields(...)` expands the selection, a later `SetLoadFields(...)` or `SetBaseLoadFields()` overwrites it, and `Reset()` or a fieldless `SetLoadFields()` restores all readable normal fields. The Microsoft Learn references below document the selection and reset behavior.

## Best Practice

Before a `Get`, `FindSet`, or `FindFirst` that the complete read path follows by reading only a handful of the table's fields, call `SetLoadFields` listing the normal fields used by the caller **and its helpers**. For example, `SetLoadFields(...); if Record.Get(...) then ...` selects fields before the read. Place the call immediately before the read, after any `SetRange`/`SetFilter`, so a reader can see at a glance which read the selection governs and any projection-changing operation is easy to spot. Check for later `Reset` and for unloaded fields read by a [by-value helper](pass-var-record-to-preserve-partial-load-enumerator.md); a JIT load can be served from cache, so it is not automatically a SQL round trip. Skip `SetLoadFields` when the table has few fields (under ten), when the code reads most of them (above 60 %), when the loop runs ten or fewer iterations, or when the table is exempt for other reasons ([singleton setup tables](singleton-setup-tables-need-no-access-optimization.md), [temporary tables](temporary-tables-have-no-database-cost.md)). The numeric cutoffs are BCQuality review heuristics, not Microsoft platform thresholds. For report dataitems, use `AddLoadFields` in `OnPreDataItem` instead (see [report partial loads](addloadfields-in-report-onpredataitem.md)).

See sample: [`use-setloadfields-for-partial-records.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-setloadfields-for-partial-records.good.al).

## Anti Pattern

Loading a wide table and reading one field per row in a loop. The bytes transferred per row are dominated by the columns the procedure does not touch; the SQL query selects them anyway. The same applies to a single `Get` on a wide table — the platform reads the whole row when a single field would have sufficed.

Statement order is not part of this anti pattern. `SetLoadFields` placed ahead of `SetRange`/`SetFilter` materializes exactly the same columns as the reverse order, so a reviewer reports it as a readability observation at most — never as a performance defect.

See sample: [`use-setloadfields-for-partial-records.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-setloadfields-for-partial-records.bad.al).

## References

- [Record.SetLoadFields remarks](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-setloadfields-method#remarks): automatically loaded fields, normal-field restrictions, and resetting the selection.
- [Using partial records](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-partial-records): performance rationale, load-selection APIs, reset behavior, and report guidance.

## Examples

- [Good: use-setloadfields-for-partial-records.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-setloadfields-for-partial-records.good.al)
- [Bad: use-setloadfields-for-partial-records.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/performance/use-setloadfields-for-partial-records.bad.al)

## Names

- [ErrorInfo.SystemId(\[Guid\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method) (names SystemId)

## Changed by

- [#198 Add BC performance knowledge from OptimAL learnings](../../../../changes/bcquality/198.md), 2026-09-29
- [#176 Complete partner contribution and knowledge consumption guides](../../../../changes/bcquality/176.md), 2026-09-11
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09
- [#130 knowledge(performance): align SetLoadFields placement with AL Guidelines](../../../../changes/bcquality/130.md), 2026-09-02

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
