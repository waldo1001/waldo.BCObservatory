---
id: object/interface/iedocumentfinishdraft
type: object
title: Interface "IEDocumentFinishDraft"
summary: Interface "IEDocumentFinishDraft" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 2 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - edocument
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
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 03a8f255b3cf67f275940b21957be4946b2d5ed5c6bf9e5d528e36aa1e030ea7
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocumentFinishDraft.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocumentFinishDraft.Interface.al (releases/29.x)
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
object_type: interface
object_id: null
name: IEDocumentFinishDraft
namespace: Microsoft.eServices.EDocument.Processing.Interfaces
app: EDocument
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 2
  events: 0
  subscribers: 0
---

# Interface "IEDocumentFinishDraft"

> Interface "IEDocumentFinishDraft" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 2 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Processing.Interfaces · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocumentFinishDraft.Interface.al) · facts from BC29

## Procedures

- `ApplyDraftToBC(EDocument: Record "E-Document"; EDocImportParameters: Record "E-Doc. Import Parameters"): RecordId`
- `RevertDraftActions(EDocument: Record "E-Document")`: Reverts the actions specified in ApplyDraftToBC.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
