---
id: object/interface/imessageresponsehandler
type: object
title: Interface "IMessageResponseHandler"
summary: Interface "IMessageResponseHandler" in EDocument (Microsoft.eServices.EDocument.Integration.Interfaces). 1 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-29T00:18:22.904Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 251af1ae03bc423a36366c15729695c7fdd60784bda88d06cb5df9b963ddb552
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/4c1c1638beb6d5da8540cc1f61889b80c7b3356f/src/Apps/W1/EDocument/app/src/Integration/Interfaces/IMessageResponseHandler.Interface.al
    title: src/Apps/W1/EDocument/app/src/Integration/Interfaces/IMessageResponseHandler.Interface.al (releases/29.x)
    date: null
    commit: 4c1c1638beb6d5da8540cc1f61889b80c7b3356f
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
    - change/bcapps/10437
  related:
    - to: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extend-edocuments
      title: Extending the e-documents functionality
      label: possibly related
      why: E-documents extension framework includes message response handler interfaces for processing.
      by: model
object_type: interface
object_id: null
name: IMessageResponseHandler
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

# Interface "IMessageResponseHandler"

> Interface "IMessageResponseHandler" in EDocument (Microsoft.eServices.EDocument.Integration.Interfaces). 1 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Integration.Interfaces · BC29-30 · [source at 4c1c1638](https://github.com/microsoft/BCApps/blob/4c1c1638beb6d5da8540cc1f61889b80c7b3356f/src/Apps/W1/EDocument/app/src/Integration/Interfaces/IMessageResponseHandler.Interface.al) · facts from BC29

## Procedures

- `GetResponse(var EDocument: Record "E-Document"; var EDocumentService: Record "E-Document Service"; MessageContext: Codeunit "E-Doc. Message Context"): Boolean`

## Recent changes

- 2026-09-15 [#10437 [FR E-Reporting] Add payment and invoice lifecycle messages](../../changes/bcapps/10437.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Extending the e-documents functionality](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extend-edocuments) — possibly related: E-documents extension framework includes message response handler interfaces for processing. (model-linked)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "IMessageResponseHandler")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
