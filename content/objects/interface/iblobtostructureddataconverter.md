---
id: object/interface/iblobtostructureddataconverter
type: object
title: Interface "IBlobToStructuredDataConverter"
summary: Interface "IBlobToStructuredDataConverter" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 1 public procedures. Introduced in BC29, still in BC30. Obsolete (Pending since 26.0).
tier: official
language: en
tags:
  - interface
  - edocument
versions:
  introduced: "29"
  last_changed: null
  deprecated: "26.0"
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b6fd767844a5f87d4a8215acf0056c7214681e77c4d16beaed42e8f735dc984b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IBlobToStructuredDataConverter.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Interfaces/IBlobToStructuredDataConverter.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
name: IBlobToStructuredDataConverter
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
obsolete:
  state: Pending
  tag: "26.0"
  reason: Use IStructureReceivedEDocument instead.
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

# Interface "IBlobToStructuredDataConverter"

> Interface "IBlobToStructuredDataConverter" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 1 public procedures. Introduced in BC29, still in BC30. Obsolete (Pending since 26.0).

EDocument · Microsoft.eServices.EDocument.Processing.Interfaces · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IBlobToStructuredDataConverter.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| ObsoleteState | Pending |
| ObsoleteTag | 26.0 |
| ObsoleteReason | Use IStructureReceivedEDocument instead. |

## Procedures

- `Convert(EDocument: Record "E-Document"; FromTempblob: Codeunit "Temp Blob"; FromType: Integer; var ConvertedType: Integer): Text`: Converts a given blob of data into a structured format (e.g., XML or JSON). This procedure handles the actual conversion logic based on the provided blob and its type.

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none
- Obsolete: Pending since 26.0, "Use IStructureReceivedEDocument instead."

## Deprecations

- object: Pending 26.0 (#if not CLEAN26), "Use IStructureReceivedEDocument instead."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "IBlobToStructuredDataConverter")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
