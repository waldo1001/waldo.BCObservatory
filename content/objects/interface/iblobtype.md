---
id: object/interface/iblobtype
type: object
title: Interface "IBlobType"
summary: Interface "IBlobType" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 3 public procedures. Introduced in BC29, still in BC30. Obsolete (Pending since 26.0).
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e910150e1241f1504e6635dc83ae78ee58de93a84d12c5b5770b70a6688c7cd7
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IBlobType.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Interfaces/IBlobType.Interface.al (releases/29.x)
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
name: IBlobType
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
  reason: Use IEDocFileFormat and IStructureReceivedEDocument instead.
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 3
  events: 0
  subscribers: 0
---

# Interface "IBlobType"

> Interface "IBlobType" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 3 public procedures. Introduced in BC29, still in BC30. Obsolete (Pending since 26.0).

EDocument · Microsoft.eServices.EDocument.Processing.Interfaces · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IBlobType.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| ObsoleteState | Pending |
| ObsoleteTag | 26.0 |
| ObsoleteReason | Use IEDocFileFormat and IStructureReceivedEDocument instead. |

## Procedures

- `IsStructured(): Boolean`: Check if the blob type is structured
- `HasConverter(): Boolean`: Check if the blob type has a converter to convert its content to structured data
- `GetStructuredDataConverter(): Interface IBlobToStructuredDataConverter`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none
- Obsolete: Pending since 26.0, "Use IEDocFileFormat and IStructureReceivedEDocument instead."

## Deprecations

- object: Pending 26.0 (#if not CLEAN26), "Use IEDocFileFormat and IStructureReceivedEDocument instead."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
