---
id: object/interface/isentdocumentactions
type: object
title: Interface "ISentDocumentActions"
summary: Interface "ISentDocumentActions" in EDocument (Microsoft.eServices.EDocument.Integration.Interfaces). 2 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: 08e8815d812c545e40258bbedc5c337634d3e052e9e9e73b5dacb3365e76b22e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/Integration/Interfaces/ISentDocumentActions.Interface.al
    title: src/Apps/W1/EDocument/app/src/Integration/Interfaces/ISentDocumentActions.Interface.al (releases/29.x)
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
name: ISentDocumentActions
namespace: Microsoft.eServices.EDocument.Integration.Interfaces
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

# Interface "ISentDocumentActions"

> Interface "ISentDocumentActions" in EDocument (Microsoft.eServices.EDocument.Integration.Interfaces). 2 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Integration.Interfaces · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/Integration/Interfaces/ISentDocumentActions.Interface.al) · facts from BC29

## Procedures

- `GetApprovalStatus(var EDocument: Record "E-Document"; var EDocumentService: Record "E-Document Service"; ActionContext: Codeunit ActionContext): Boolean`
- `GetCancellationStatus(var EDocument: Record "E-Document"; var EDocumentService: Record "E-Document Service"; ActionContext: Codeunit ActionContext): Boolean`: Sends an outgoing E-Document cancellation request to the API to check if the sent document was canceled.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
