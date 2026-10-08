---
id: object/interface/contact-business-relation-link
type: object
title: Interface "Contact Business Relation Link"
summary: Interface "Contact Business Relation Link" in Base Application (Microsoft.CRM.BusinessRelation). 1 public procedures. Present since at least BC23, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: null
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6e6419649e87da94215eb17d74ee5fa02937a15253dfeba4b0ae201b6422fd7f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/CRM/BusinessRelation/ContactBusinessRelationLink.Interface.al
    title: src/Layers/W1/BaseApp/CRM/BusinessRelation/ContactBusinessRelationLink.Interface.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
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
first_version: "23"
last_version: "30"
present_in:
  - "23"
  - "24"
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
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 6
---

# Interface "Contact Business Relation Link"

> Interface "Contact Business Relation Link" in Base Application (Microsoft.CRM.BusinessRelation). 1 public procedures. Present since at least BC23, still in BC30.

Base Application · Microsoft.CRM.BusinessRelation · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/CRM/BusinessRelation/ContactBusinessRelationLink.Interface.al) · facts from BC29

## Procedures

- `GetTableAndSystemId(No: Code[20]; var TableId: Integer; var SystemId: Guid): Boolean`

## Implemented by

- [Codeunit 5557 "Contact BRL Default"](../codeunit/5557.md)
- [Codeunit 5558 "Contact BRL Customer"](../codeunit/5558.md)
- [Codeunit 5559 "Contact BRL Vendor"](../codeunit/5559.md)
- [Codeunit 5560 "Contact BRL Employee"](../codeunit/5560.md)
- [Codeunit 5561 "Contact BRL Bank Account"](../codeunit/5561.md)
- [Enum 5057 "Contact Business Relation Link To Table"](../enum/5057.md)

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Contact Business Relation Link")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
