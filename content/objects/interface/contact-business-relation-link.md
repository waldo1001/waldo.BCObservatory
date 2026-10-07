---
id: object/interface/contact-business-relation-link
type: object
title: Interface "Contact Business Relation Link"
summary: Interface "Contact Business Relation Link" in Base Application (Microsoft.CRM.BusinessRelation). 1 public procedures. Introduced in BC25, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "25"
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
  input_hash: 7219d555ced415b949d029679280850b7776b374e0e49cce84e938977e324048
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/CRM/BusinessRelation/ContactBusinessRelationLink.Interface.al
    title: src/Layers/W1/BaseApp/CRM/BusinessRelation/ContactBusinessRelationLink.Interface.al (releases/29.x)
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
name: Contact Business Relation Link
namespace: Microsoft.CRM.BusinessRelation
app: Base Application
extends: null
first_version: "25"
last_version: "30"
present_in:
  - "25"
  - "26"
  - "27"
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

# Interface "Contact Business Relation Link"

> Interface "Contact Business Relation Link" in Base Application (Microsoft.CRM.BusinessRelation). 1 public procedures. Introduced in BC25, still in BC30.

Base Application · Microsoft.CRM.BusinessRelation · BC25-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/CRM/BusinessRelation/ContactBusinessRelationLink.Interface.al) · facts from BC29

## Procedures

- `GetTableAndSystemId(No: Code[20]; var TableId: Integer; var SystemId: Guid): Boolean`

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Contact Business Relation Link")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Contact Business Relation Link"`

## Across versions

- Present in: BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
