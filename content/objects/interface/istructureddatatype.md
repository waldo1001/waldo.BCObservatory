---
id: object/interface/istructureddatatype
type: object
title: Interface "IStructuredDataType"
summary: Interface "IStructuredDataType" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 3 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: 03e9fadb9b9d565f7546d5684fa8291cb0d22080898b9e96fe9ff44d405e8bfd
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IStructuredDataType.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Interfaces/IStructuredDataType.Interface.al (releases/29.x)
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
name: IStructuredDataType
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
  procedures: 3
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "IStructuredDataType"

> Interface "IStructuredDataType" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 3 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Processing.Interfaces · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IStructuredDataType.Interface.al) · facts from BC29

## Procedures

- `GetFileFormat(): Enum "E-Doc. File Format"`
- `GetContent(): Text`: Returns the content of the structured data type, such as a JSON string or XML document.
- `GetReadIntoDraftImpl(): Enum "E-Doc. Read into Draft"`: Returns the how the structured data should be "parsed" / read into a draft.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
