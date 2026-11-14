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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-14T00:54:52.162Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b93503be395e8de63dd845f856292f2e00a4f4e4ca71292cbb38ecab2c868582
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/229c71f1927eed3c6f5f2cac1e8701b916c315fb/src/Apps/W1/EDocument/app/src/ControlAddIn/PDFViewer.ControlAddIn.al
    title: src/Apps/W1/EDocument/app/src/ControlAddIn/PDFViewer.ControlAddIn.al (releases/29.x)
    date: null
    commit: 229c71f1927eed3c6f5f2cac1e8701b916c315fb
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
    - change/bcapps/13759
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
  calls: 0
  called_by: 0
  implements: 0
---

# Control add-in "PDF Viewer"

> Control add-in "PDF Viewer" in EDocument. 4 public procedures. Introduced in BC29, still in BC30. Obsolete (Pending since 27.0).

EDocument · BC29-30 · [source at 229c71f1](https://github.com/microsoft/BCApps/blob/229c71f1927eed3c6f5f2cac1e8701b916c315fb/src/Apps/W1/EDocument/app/src/ControlAddIn/PDFViewer.ControlAddIn.al) · facts from BC29

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

## Recent changes

- 2026-11-10 [#13759 [Layers, Apps] Remove CLEAN27 obsolete code](../../changes/bcapps/13759.md) (main, BC30, obsoletion)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none
- Obsolete: Pending since 27.0, "Replaced by platform support"

## Deprecations

- object: Pending 27.0 (#if not CLEAN27), "Replaced by platform support"

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "controladdin", object_name: "PDF Viewer")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
