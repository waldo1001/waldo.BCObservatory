---
id: object/interface/iedocumentcreatepurchasecreditmemo
type: object
title: Interface "IEDocumentCreatePurchaseCreditMemo"
summary: Interface "IEDocumentCreatePurchaseCreditMemo" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 1 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: 20e22827a3f89be31bc7f99a3474f9b543109256d00b4cf546fac34646a878e5
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocumentCreatePurchaseCreditMemo.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocumentCreatePurchaseCreditMemo.Interface.al (releases/29.x)
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
name: IEDocumentCreatePurchaseCreditMemo
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
  procedures: 1
  events: 0
  subscribers: 0
---

# Interface "IEDocumentCreatePurchaseCreditMemo"

> Interface "IEDocumentCreatePurchaseCreditMemo" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 1 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Processing.Interfaces · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocumentCreatePurchaseCreditMemo.Interface.al) · facts from BC29

## Procedures

- `CreatePurchaseCreditMemo(EDocument: Record "E-Document"): Record "Purchase Header"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
