---
id: object/interface/peppol-purchase-attachment-provider
type: object
title: Interface "PEPPOL Purchase Attachment Provider"
summary: Interface "PEPPOL Purchase Attachment Provider" in PEPPOL (Microsoft.Peppol). 1 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - peppol
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
  input_hash: 83a6e07582e102c6d5c6c895cf4a5ce2c8cc0d32bb72bcbf8a26228a0869f4db
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseAttachmentProvider.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseAttachmentProvider.Interface.al (releases/29.x)
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
name: PEPPOL Purchase Attachment Provider
namespace: Microsoft.Peppol
app: PEPPOL
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
  procedures: 1
  events: 0
  subscribers: 0
---

# Interface "PEPPOL Purchase Attachment Provider"

> Interface "PEPPOL Purchase Attachment Provider" in PEPPOL (Microsoft.Peppol). 1 public procedures. Introduced in BC29, still in BC30.

PEPPOL · Microsoft.Peppol · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseAttachmentProvider.Interface.al) · facts from BC29

## Procedures

- `GeneratePDFAttachmentAsAdditionalDocRef(PurchaseHeader: Record "Purchase Header"; var AdditionalDocumentReferenceID: Text; var AdditionalDocRefDocumentType: Text; var URI: Text; var Filename: Text; var MimeCode: Text; var EmbeddedDocumentBinaryObject: Text)`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
