---
id: object/interface/iedocresponsemessagebuilder
type: object
title: Interface "IEDocResponseMessageBuilder"
summary: Interface "IEDocResponseMessageBuilder" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 1 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-23T01:04:01.231Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f6a774959f649bb37962b4ec926e4c8c54f8d79bf35e222b4ebe9450d1c20eaa
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/af1b860dae5aeeb1369d4ed450c2c980e372a161/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocResponseMessageBuilder.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocResponseMessageBuilder.Interface.al (releases/29.x)
    date: null
    commit: af1b860dae5aeeb1369d4ed450c2c980e372a161
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
    - change/bcapps/12148
object_type: interface
object_id: null
name: IEDocResponseMessageBuilder
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

> Interface "IEDocResponseMessageBuilder" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 1 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Processing.Interfaces · BC29-30 · [source at af1b860d](https://github.com/microsoft/BCApps/blob/af1b860dae5aeeb1369d4ed450c2c980e372a161/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocResponseMessageBuilder.Interface.al) · facts from BC29

## Procedures

- `BuildResponseMessage(EDocument: Record "E-Document"; RequestedResponseType: Enum "E-Doc. Response Type"; var TempBlob: Codeunit "Temp Blob"): Enum "E-Doc. Response Type"`

## Recent changes

- 2026-10-16 [#12148 [E-Documents Core] [Peppol] - Make PEPPOL Order Response conformant with BIS 28 (T76) and report the seller's decision](../../changes/bcapps/12148.md) (main, BC30, fix, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "IEDocResponseMessageBuilder")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
