---
id: object/interface/vat-control-report-export-czl-cz
type: object
title: Interface "VAT Control Report Export CZL" (CZ)
summary: Interface "VAT Control Report Export CZL" (CZ) in the CZ country layer (Microsoft.Finance.VAT.Reporting). 2 public procedures. Introduced in BC29, gone after BC29.
tier: official
language: en
tags:
  - interface
  - cz layer
versions:
  introduced: "29"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2e0767cfab9e09cc574e4d0f2f044da972222ed293d701ac2d969ccdd59c5c46
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/CZ/CoreLocalizationPack/app/Src/Interfaces/VATControlReportExportCZL.Interface.al
    title: src/Apps/CZ/CoreLocalizationPack/app/Src/Interfaces/VATControlReportExportCZL.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/cz
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: VAT Control Report Export CZL
namespace: Microsoft.Finance.VAT.Reporting
app: CoreLocalizationPack
extends: null
first_version: "29"
last_version: "29"
present_in:
  - "29"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
country: CZ
counts:
  fields: 0
  procedures: 2
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "VAT Control Report Export CZL" (CZ)

> Interface "VAT Control Report Export CZL" (CZ) in the CZ country layer (Microsoft.Finance.VAT.Reporting). 2 public procedures. Introduced in BC29, gone after BC29.

CZ country layer · Microsoft.Finance.VAT.Reporting · BC29 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/CZ/CoreLocalizationPack/app/Src/Interfaces/VATControlReportExportCZL.Interface.al) · facts from BC29

An object of the [CZ localization](../../localizations/cz.md), not part of W1.

## Procedures

- `ExportToXMLFile(VATCtrlReportHeaderCZL: Record "VAT Ctrl. Report Header CZL"): Text`
- `ExportToXMLBlob(VATCtrlReportHeaderCZL: Record "VAT Ctrl. Report Header CZL"; var TempBlob: Codeunit "Temp Blob")`: Export VAT Control Report to TempBlob.

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
