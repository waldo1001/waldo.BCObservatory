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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 82cec45437f4c4f88165f41482fbfb67c59da58ef1ae7e98a4e8693f9dfadeb0
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/EDocument/app/src/Integration/Interfaces/ISentDocumentActions.Interface.al
    title: src/Apps/W1/EDocument/app/src/Integration/Interfaces/ISentDocumentActions.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "ISentDocumentActions"

> Interface "ISentDocumentActions" in EDocument (Microsoft.eServices.EDocument.Integration.Interfaces). 2 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Integration.Interfaces · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/EDocument/app/src/Integration/Interfaces/ISentDocumentActions.Interface.al) · facts from BC29

## Procedures

- `GetApprovalStatus(var EDocument: Record "E-Document"; var EDocumentService: Record "E-Document Service"; ActionContext: Codeunit ActionContext): Boolean`
- `GetCancellationStatus(var EDocument: Record "E-Document"; var EDocumentService: Record "E-Document Service"; ActionContext: Codeunit ActionContext): Boolean`: Sends an outgoing E-Document cancellation request to the API to check if the sent document was canceled.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
