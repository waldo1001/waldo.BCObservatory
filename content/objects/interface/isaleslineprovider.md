---
id: object/interface/isaleslineprovider
type: object
title: Interface "ISalesLineProvider"
summary: Interface "ISalesLineProvider" in EDocument (Microsoft.eServices.EDocument.Processing.Import.Sales). 1 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 2362119744ecf2a967bc9909e34df79140c2d5e6a7fea14b966a323524da276b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/Processing/Import/Sales/ISalesLineProvider.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Import/Sales/ISalesLineProvider.Interface.al (releases/29.x)
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
name: ISalesLineProvider
namespace: Microsoft.eServices.EDocument.Processing.Import.Sales
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
---

# Interface "ISalesLineProvider"

> Interface "ISalesLineProvider" in EDocument (Microsoft.eServices.EDocument.Processing.Import.Sales). 1 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Processing.Import.Sales · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EDocument/app/src/Processing/Import/Sales/ISalesLineProvider.Interface.al) · facts from BC29

## Procedures

- `GetSalesLine(var EDocumentSalesLine: Record "E-Document Sales Line")`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
