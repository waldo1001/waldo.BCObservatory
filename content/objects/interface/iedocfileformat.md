---
id: object/interface/iedocfileformat
type: object
title: Interface "IEDocFileFormat"
summary: Interface "IEDocFileFormat" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 3 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: f7f4a30fcf89fa511fd8a9cf72faa1f56cc0fa8421d6041c10303e65d215ae6e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocFileFormat.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocFileFormat.Interface.al (releases/29.x)
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
name: IEDocFileFormat
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
---

# Interface "IEDocFileFormat"

> Interface "IEDocFileFormat" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 3 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Processing.Interfaces · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IEDocFileFormat.Interface.al) · facts from BC29

## Procedures

- `FileExtension(): Text`
- `PreviewContent(FileName: Text; TempBlob: Codeunit "Temp Blob")`: A method called when we want to preview the content of the file in-client.
- `PreferredStructureDataImplementation(): Enum "Structure Received E-Doc."`: The preferred implementation for processing the file format into structured data. For example, a PDF file may prefer to be processed by ADI, while an XML file is already structured. The final implementation used may depend on the integration importing the E-Document.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
