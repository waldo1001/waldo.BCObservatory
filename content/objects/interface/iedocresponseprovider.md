---
id: object/interface/iedocresponseprovider
type: object
title: Interface "IEDocResponseProvider"
summary: Interface "IEDocResponseProvider" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 1 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-28T10:42:34.480Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 60ee3c3d7fbb2ae421d6971fe3ce52c07526742db24f2091787107600dcd9d67
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/4c1c1638beb6d5da8540cc1f61889b80c7b3356f/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocResponseProvider.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocResponseProvider.Interface.al (releases/29.x)
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
    - change/bcapps/8698
  related:
    - to: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extend-edocuments
      title: Extending the e-documents functionality
      label: possibly related
      why: Interface for extending e-documents functionality with custom response providers for service integration.
      by: model
object_type: interface
object_id: null
name: IEDocResponseProvider
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

# Interface "IEDocResponseProvider"

> Interface "IEDocResponseProvider" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 1 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Processing.Interfaces · BC29-30 · [source at 4c1c1638](https://github.com/microsoft/BCApps/blob/4c1c1638beb6d5da8540cc1f61889b80c7b3356f/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocResponseProvider.Interface.al) · facts from BC29

## Procedures

- `GetResponseMessageType(EDocument: Record "E-Document"): Enum "E-Document Message Type"`

## Recent changes

- 2026-07-27 [#8698 [E-Documents Core] [Peppol] - Enabling EDI capabilities with E-Documents. PEPPOL Order Response Message Handling](../../changes/bcapps/8698.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Possibly related

No source states these links: they share an object, a model read them, or a person found the same subject.

- [Extending the e-documents functionality](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-extend-edocuments) — possibly related: Interface for extending e-documents functionality with custom response providers for service integration. (model-linked)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "IEDocResponseProvider")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
