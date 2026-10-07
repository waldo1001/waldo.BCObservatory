---
id: object/controladdin/pdf-viewer
type: object
title: Control add-in "PDF Viewer"
summary: Control add-in "PDF Viewer" in EDocument. 4 public procedures. Introduced in BC29, still in BC30. Obsolete (Pending since 27.0).
tier: official
language: en
tags:
  - controladdin
  - edocument
versions:
  introduced: "29"
  last_changed: null
  deprecated: "27.0"
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 960c856b1de22090c31887c2b1f79fe3834592a0fbbcee894ac7bdfa3b0712a9
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/ControlAddIn/PDFViewer.ControlAddIn.al
    title: src/Apps/W1/EDocument/app/src/ControlAddIn/PDFViewer.ControlAddIn.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
object_type: controladdin
object_id: null
name: PDF Viewer
namespace: null
app: EDocument
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete:
  state: Pending
  tag: "27.0"
  reason: Replaced by platform support
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 4
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Control add-in "PDF Viewer"

> Control add-in "PDF Viewer" in EDocument. 4 public procedures. Introduced in BC29, still in BC30. Obsolete (Pending since 27.0).

EDocument · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/ControlAddIn/PDFViewer.ControlAddIn.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| ObsoleteState | Pending |
| ObsoleteTag | 27.0 |
| ObsoleteReason | Replaced by platform support |

## Procedures

- `LoadPDF(PDFDocument: Text)`
- `NextPage()`
- `PreviousPage()`
- `SetVisible(IsVisible: Boolean)`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none
- Obsolete: Pending since 27.0, "Replaced by platform support"

## Deprecations

- object: Pending 27.0 (#if not CLEAN27), "Replaced by platform support"

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
