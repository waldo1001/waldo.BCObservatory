---
id: object/interface/istructuredformatreader
type: object
title: Interface "IStructuredFormatReader"
summary: Interface "IStructuredFormatReader" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 2 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-07T13:30:58.709Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: acf962f022c0367a5d28ce7a29297cfa744bce820c44964a118eeeef89c4166f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IStructuredFormatReader.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Interfaces/IStructuredFormatReader.Interface.al (releases/29.x)
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
  changes:
    - change/bcapps/8698
object_type: interface
object_id: null
name: IStructuredFormatReader
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
  procedures: 2
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "IStructuredFormatReader"

> Interface "IStructuredFormatReader" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 2 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Processing.Interfaces · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IStructuredFormatReader.Interface.al) · facts from BC29

## Procedures

- `ReadIntoDraft(EDocument: Record "E-Document"; TempBlob: Codeunit "Temp Blob"): Enum "E-Doc. Process Draft"`
- `View(EDocument: Record "E-Document"; TempBlob: Codeunit "Temp Blob")`: Presents a view of the data

## Recent changes

- 2026-07-27 [#8698 [E-Documents Core] [Peppol] - Enabling EDI capabilities with E-Documents. PEPPOL Order Response Message Handling](../../changes/bcapps/8698.md) (main, BC30, feature)

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
