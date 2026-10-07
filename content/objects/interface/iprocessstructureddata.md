---
id: object/interface/iprocessstructureddata
type: object
title: Interface "IProcessStructuredData"
summary: Interface "IProcessStructuredData" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 4 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: c1278f11b8ea4cb40141a5f8c683048681b7724b21f97641d2a60b6d55bf2706
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IProcessStructuredData.Interface.al
    title: src/Apps/W1/EDocument/app/src/Processing/Interfaces/IProcessStructuredData.Interface.al (releases/29.x)
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
name: IProcessStructuredData
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
  procedures: 4
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "IProcessStructuredData"

> Interface "IProcessStructuredData" in EDocument (Microsoft.eServices.EDocument.Processing.Interfaces). 4 public procedures. Introduced in BC29, still in BC30.

EDocument · Microsoft.eServices.EDocument.Processing.Interfaces · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/EDocument/app/src/Processing/Interfaces/IProcessStructuredData.Interface.al) · facts from BC29

## Procedures

- `PrepareDraft(EDocument: Record "E-Document"; EDocImportParameters: Record "E-Doc. Import Parameters"): Enum "E-Document Type"`
- `GetVendor(EDocument: Record "E-Document"; Customizations: Enum "E-Doc. Proc. Customizations"): Record Vendor`: Get the vendor for the E-Document
- `OpenDraftPage(var EDocument: Record "E-Document")`: Open the draft page for the E-Document
- `CleanUpDraft(EDocument: Record "E-Document")`: Clean up any custom or scenario specific records using during processing

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "IProcessStructuredData")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "IProcessStructuredData"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
