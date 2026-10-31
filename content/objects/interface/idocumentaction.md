---
id: object/interface/idocumentaction
type: object
title: Interface "IDocumentAction"
summary: Interface "IDocumentAction" in EDocument (Microsoft.eServices.EDocument.Integration.Interfaces). 1 public procedures. Introduced in BC29, still in BC30.
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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-31T00:48:20.076Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8759eb59c99cd23f56af17ea9a26680745f494df41e2490944e305de933985ec
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/8e740e5061595dd231c4a2d9d453c86c84ec76ae/src/Apps/W1/EDocument/app/src/Integration/Interfaces/IDocumentAction.Interface.al
    title: src/Apps/W1/EDocument/app/src/Integration/Interfaces/IDocumentAction.Interface.al (releases/29.x)
    date: null
    commit: 8e740e5061595dd231c4a2d9d453c86c84ec76ae
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extend-edocuments
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: IDocumentAction
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
  procedures: 1
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
  implemented_by: 0
---

# Interface "IDocumentAction"

> Interface "IDocumentAction" in EDocument (Microsoft.eServices.EDocument.Integration.Interfaces). 1 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Integration.Interfaces · BC29-30 · [source at 8e740e50](https://github.com/microsoft/BCApps/blob/8e740e5061595dd231c4a2d9d453c86c84ec76ae/src/Apps/W1/EDocument/app/src/Integration/Interfaces/IDocumentAction.Interface.al) · facts from BC29

## Procedures

- `InvokeAction(var EDocument: Record "E-Document"; var EDocumentService: Record "E-Document Service"; ActionContext: Codeunit ActionContext): Boolean`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Documented on Microsoft Learn

- [Extending the e-documents functionality](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extend-edocuments) (names this object)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "IDocumentAction")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
