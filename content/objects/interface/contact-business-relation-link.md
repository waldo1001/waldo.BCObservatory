---
id: object/interface/contact-business-relation-link
type: object
title: Interface "Contact Business Relation Link"
summary: Interface "Contact Business Relation Link" in Base Application (Microsoft.CRM.BusinessRelation). 1 public procedures. Present since at least BC28, still in BC30.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 24e639099ebbd767f671834834f569f08c37c3047699778afe5c8f8fb323f208
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/CRM/BusinessRelation/ContactBusinessRelationLink.Interface.al
    title: src/Layers/W1/BaseApp/CRM/BusinessRelation/ContactBusinessRelationLink.Interface.al (releases/29.x)
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
name: Contact Business Relation Link
namespace: Microsoft.CRM.BusinessRelation
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
---

# Interface "Contact Business Relation Link"

> Interface "Contact Business Relation Link" in Base Application (Microsoft.CRM.BusinessRelation). 1 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.CRM.BusinessRelation · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/CRM/BusinessRelation/ContactBusinessRelationLink.Interface.al) · facts from BC29

## Procedures

- `GetTableAndSystemId(No: Code[20]; var TableId: Integer; var SystemId: Guid): Boolean`

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
