---
id: object/interface/ipdfdocumenthandler
type: object
title: Interface "IPdfDocumentHandler"
summary: Interface "IPdfDocumentHandler" in Base Application (Microsoft.EServices.EDocument). 1 public procedures. Introduced in BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "28"
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
  input_hash: 54f878a537d7f16629203857870d4d0a8301bf9c1ab8510e95f6df288b3f0917
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/eServices/EDocument/IPdfDocumentHandler.Interface.al
    title: src/Layers/W1/BaseApp/eServices/EDocument/IPdfDocumentHandler.Interface.al (releases/29.x)
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
name: IPdfDocumentHandler
namespace: Microsoft.EServices.EDocument
app: Base Application
extends: null
first_version: "28"
last_version: "30"
present_in:
  - "28"
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

# Interface "IPdfDocumentHandler"

> Interface "IPdfDocumentHandler" in Base Application (Microsoft.EServices.EDocument). 1 public procedures. Introduced in BC28, still in BC30.

Base Application · Microsoft.EServices.EDocument · BC28-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/eServices/EDocument/IPdfDocumentHandler.Interface.al) · facts from BC29

## Procedures

- `GeneratePdfBlobWithDocumentType(DocumentId: Guid; DocumentType: Enum "Attachment Entity Buffer Document Type"; var TempAttachmentEntityBuffer: Record "Attachment Entity Buffer" temporary): Boolean`

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "IPdfDocumentHandler")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "IPdfDocumentHandler"`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
