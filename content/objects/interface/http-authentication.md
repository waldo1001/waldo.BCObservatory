---
id: object/interface/http-authentication
type: object
title: Interface "Http Authentication"
summary: Interface "Http Authentication" in System Application (System.RestClient). 2 public procedures. Present since at least BC23, still in BC30.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0b4f9825ce464e8dbed9cef860739586e70fbbeef347765a6a3222c3c14b9da7
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Rest%20Client/src/Authentication/HttpAuthentication.Interface.al
    title: src/System Application/App/Rest Client/src/Authentication/HttpAuthentication.Interface.al (releases/29.x)
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
name: Http Authentication
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
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 3
---

# Interface "Http Authentication"

> Interface "Http Authentication" in System Application (System.RestClient). 2 public procedures. Present since at least BC23, still in BC30.

System Application · System.RestClient · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Rest%20Client/src/Authentication/HttpAuthentication.Interface.al) · facts from BC29

## Procedures

- `IsAuthenticationRequired(): Boolean`
- `GetAuthorizationHeaders(): Dictionary of [Text, SecretText]`: Gets the authorization headers for the request.

## Implemented by

- [Codeunit 2358 "Http Authentication Anonymous"](../codeunit/2358.md)
- [Codeunit 2359 "Http Authentication Basic"](../codeunit/2359.md)
- [Codeunit 2361 "HttpAuthOAuthClientCredentials"](../codeunit/2361.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Http Authentication")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Http Authentication"`

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
