---
id: object/interface/iedocresponsemessagebuilder
type: object
title: Interface "IEDocResponseMessageBuilder"
summary: Interface "IEDocResponseMessageBuilder" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 1 public procedures. Introduced in BC29, gone after BC29.
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
  at: "2026-10-17T01:04:12.318Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2f7c2dca0eaae3d6507c5b3f8e9b3da71acf19acc73b01772e70fbcb945dea5e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/12dc4a2af219f9ca678ff8b1ccacf749bc8a4f3e/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocResponseMessageBuilder.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocResponseMessageBuilder.Interface.al (releases/29.x)
    date: null
    commit: 12dc4a2af219f9ca678ff8b1ccacf749bc8a4f3e
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
name: IEDocResponseMessageBuilder
namespace: Microsoft.eServices.EDocument.Processing.Interfaces
app: EDocument
extends: null
first_version: "29"
last_version: "29"
present_in:
  - "29"
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

# Interface "IEDocResponseMessageBuilder"

> Interface "IEDocResponseMessageBuilder" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 1 public procedures. Introduced in BC29, gone after BC29.

EDocument · Microsoft.eServices.EDocument.Processing.Interfaces · BC29 · [source at 12dc4a2a](https://github.com/microsoft/BCApps/blob/12dc4a2af219f9ca678ff8b1ccacf749bc8a4f3e/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocResponseMessageBuilder.Interface.al) · facts from BC29

## Procedures

- `BuildResponseMessage(EDocument: Record "E-Document"; RequestedResponseType: Enum "E-Doc. Response Type"; var TempBlob: Codeunit "Temp Blob"): Enum "E-Doc. Response Type"`

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "IEDocResponseMessageBuilder")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
