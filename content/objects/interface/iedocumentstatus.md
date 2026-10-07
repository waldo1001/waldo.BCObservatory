---
id: object/interface/iedocumentstatus
type: object
title: Interface "IEDocumentStatus"
summary: Interface "IEDocumentStatus" in EDocument (Microsoft.eServices.EDocument). 1 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 1e9a8fe7b72b8a38c8ec737ffff52ec28cd73bc5ed88f42ce8040cf80537fddb
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/EDocument/app/src/Document/Interfaces/IEDocumentStatus.Interface.al
    title: src/Apps/W1/EDocument/app/src/Document/Interfaces/IEDocumentStatus.Interface.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
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
name: IEDocumentStatus
namespace: Microsoft.eServices.EDocument
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

# Interface "IEDocumentStatus"

> Interface "IEDocumentStatus" in EDocument (Microsoft.eServices.EDocument). 1 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/EDocument/app/src/Document/Interfaces/IEDocumentStatus.Interface.al) · facts from BC29

## Procedures

- `GetEDocumentStatus(): Enum "E-Document Status"`

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "IEDocumentStatus")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "IEDocumentStatus"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
