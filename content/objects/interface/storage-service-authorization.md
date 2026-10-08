---
id: object/interface/storage-service-authorization
type: object
title: Interface "Storage Service Authorization"
summary: Interface "Storage Service Authorization" in System Application (System.Azure.Storage). 1 public procedures. Present since at least BC23, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
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
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5dc5479a83900708fc03073f8bd153e3e2df86714da61f010eaf0ac642807377
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/Azure%20Storage%20Services%20Authorization/src/StorageServiceAuthorization.Interface.al
    title: src/System Application/App/Azure Storage Services Authorization/src/StorageServiceAuthorization.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
name: Storage Service Authorization
namespace: System.Azure.Storage
app: System Application
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
  implemented_by: 0
---

# Interface "Storage Service Authorization"

> Interface "Storage Service Authorization" in System Application (System.Azure.Storage). 1 public procedures. Present since at least BC23, still in BC30.

System Application · System.Azure.Storage · BC23-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/Azure%20Storage%20Services%20Authorization/src/StorageServiceAuthorization.Interface.al) · facts from BC29

## Procedures

- `Authorize(var HttpRequest: HttpRequestMessage; StorageAccount: Text)`

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Storage Service Authorization")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
