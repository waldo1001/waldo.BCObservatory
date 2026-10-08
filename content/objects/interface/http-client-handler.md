---
id: object/interface/http-client-handler
type: object
title: Interface "Http Client Handler"
summary: Interface "Http Client Handler" in System Application (System.RestClient). 1 public procedures. Present since at least BC23, still in BC30, changed in BC26.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: null
  last_changed: "26"
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
  input_hash: da3cf7c2bb12bbaeee1b23d26ae60fc03e805040df59512787dbcfda55faacdd
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/Rest%20Client/src/HttpClientHandler/HttpClientHandler.Interface.al
    title: src/System Application/App/Rest Client/src/HttpClientHandler/HttpClientHandler.Interface.al (releases/29.x)
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
name: Http Client Handler
namespace: System.RestClient
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
changed_in:
  - "26"
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

# Interface "Http Client Handler"

> Interface "Http Client Handler" in System Application (System.RestClient). 1 public procedures. Present since at least BC23, still in BC30, changed in BC26.

System Application · System.RestClient · BC23-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/System%20Application/App/Rest%20Client/src/HttpClientHandler/HttpClientHandler.Interface.al) · facts from BC29

## Procedures

- `Send(CurrHttpClientInstance: HttpClient; HttpRequestMessage: Codeunit "Http Request Message"; var HttpResponseMessage: Codeunit "Http Response Message"): Boolean`

## Across versions

- Present in: BC23-30
- Changed (declaration) in: BC26

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Http Client Handler")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
