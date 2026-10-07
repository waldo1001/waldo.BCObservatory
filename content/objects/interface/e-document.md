---
id: object/interface/e-document
type: object
title: Interface "E-Document"
summary: Interface "E-Document" in EDocument (Microsoft.eServices.EDocument). 5 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: e7282406a2f8a87e5e33760f4c3d86bf5902aec02125b12537937aa5b851543e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/EDocument/app/src/Document/Interfaces/EDocument.Interface.al
    title: src/Apps/W1/EDocument/app/src/Document/Interfaces/EDocument.Interface.al (releases/29.x)
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
name: E-Document
namespace: Microsoft.eServices.EDocument
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
  procedures: 5
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "E-Document"

> Interface "E-Document" in EDocument (Microsoft.eServices.EDocument). 5 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/EDocument/app/src/Document/Interfaces/EDocument.Interface.al) · facts from BC29

## Procedures

- `Check(var SourceDocumentHeader: RecordRef; EDocumentService: Record "E-Document Service"; EDocumentProcessingPhase: Enum "E-Document Processing Phase")`
- `Create(EDocumentService: Record "E-Document Service"; var EDocument: Record "E-Document"; var SourceDocumentHeader: RecordRef; var SourceDocumentLines: RecordRef; var TempBlob: Codeunit "Temp Blob")`: Use it to create a blob representing the posted document.
- `CreateBatch(EDocumentService: Record "E-Document Service"; var EDocuments: Record "E-Document"; var SourceDocumentHeaders: RecordRef; var SourceDocumentsLines: RecordRef; var TempBlob: Codeunit "Temp Blob")`: Use it to create a blob representing a batch of posted documents.
- `GetBasicInfoFromReceivedDocument(var EDocument: Record "E-Document"; var TempBlob: Codeunit "Temp Blob")`: Use it to get the basic information of an E-Document from received blob.
- `GetCompleteInfoFromReceivedDocument(var EDocument: Record "E-Document"; var CreatedDocumentHeader: RecordRef; var CreatedDocumentLines: RecordRef; var TempBlob: Codeunit "Temp Blob")`: Use it to create a document from imported blob.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
