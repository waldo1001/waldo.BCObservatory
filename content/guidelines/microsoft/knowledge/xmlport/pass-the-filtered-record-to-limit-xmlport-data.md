---
id: guideline/microsoft/knowledge/xmlport/pass-the-filtered-record-to-limit-xmlport-data
type: guideline
title: Pass the filtered record to the XMLport call to limit its data
summary: "Xmlport.Export, Xmlport.Import, and Xmlport.Run accept an optional record argument, and the XMLport uses any filters attached to that record. When the argument is omitted, the XMLport is not limited by the caller: for the stream methods, all records in the table are processed."
tier: official
language: en
tags:
  - xmlport
  - xmlport-export
  - xmlport-run
  - record-parameter
  - filter
  - setrange
  - export-scope
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-23T00:15:10.597Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 4bcabd6a8b253bcafe5e26e93f5e4b1ccc449fc2
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/pass-the-filtered-record-to-limit-xmlport-data.md
    title: "microsoft/BCQuality: Pass the filtered record to the XMLport call to limit its data"
    date: "2026-11-19"
    commit: aaaf6c13c219294fcebf644f1662f4d77061e2f7
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
    - change/bcquality/277
repo_path: microsoft/knowledge/xmlport/pass-the-filtered-record-to-limit-xmlport-data.md
layer: microsoft
kind: rule
domain: xmlport
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

# Pass the filtered record to the XMLport call to limit its data

> Xmlport.Export, Xmlport.Import, and Xmlport.Run accept an optional record argument, and the XMLport uses any filters attached to that record. When the argument is omitted, the XMLport is not limited by the caller: for the stream methods, all records in the table are processed.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/pass-the-filtered-record-to-limit-xmlport-data.md) · microsoft layer · xmlport · BC all · tier official · derived

## Description

`Xmlport.Export`, `Xmlport.Import`, and `Xmlport.Run` accept an optional record argument, and the XMLport uses any filters attached to that record. When the argument is omitted, the XMLport is not limited by the caller: for the stream methods, all records in the table are processed. Filters set on a record variable in the calling code have no effect on the XMLport unless that variable is passed in the call.

The failure is silent and the output is plausible. An export meant for one customer group, date range, or document returns every record, which is also a data-exposure problem when the file goes to an external party.

## Best Practice

Set the filters on a record variable and pass that same variable as the record argument of the call. When the scope is fixed by the business purpose of the XMLport rather than by the caller, declare it on the XMLport itself instead, so no call site can forget it.

See sample: [`pass-the-filtered-record-to-limit-xmlport-data.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/pass-the-filtered-record-to-limit-xmlport-data.good.al).

## Anti Pattern

`Customer.SetRange("Salesperson Code", SalespersonCode);` followed by `Xmlport.Export(Xmlport::"Customer Export", OutStr);`. The filter is applied to a variable the XMLport never sees, and the file contains all customers. Reviewer signal: filters set on a record immediately before an XMLport call whose argument list does not include that record.

Do not report an XMLport call without a record argument when no caller-side filter is intended, or when the XMLport restricts its own data.

See sample: [`pass-the-filtered-record-to-limit-xmlport-data.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/pass-the-filtered-record-to-limit-xmlport-data.bad.al).

## References

[Xmlport.Export method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/xmlport/xmlport-export-method), [Xmlport.Import method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/xmlport/xmlport-import-method), and [Xmlport.Run method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/xmlport/xmlport-run-method).

## Examples

- [Good: pass-the-filtered-record-to-limit-xmlport-data.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/pass-the-filtered-record-to-limit-xmlport-data.good.al)
- [Bad: pass-the-filtered-record-to-limit-xmlport-data.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/xmlport/pass-the-filtered-record-to-limit-xmlport-data.bad.al)

## Changed by

- [#277 knowledge: translations, assisted setup, API queries, and a new xmlport domain](../../../../changes/bcquality/277.md), 2026-11-19

---

From microsoft/BCQuality at aaaf6c1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
