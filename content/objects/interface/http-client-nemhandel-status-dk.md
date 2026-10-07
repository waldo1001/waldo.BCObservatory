---
id: object/interface/http-client-nemhandel-status-dk
type: object
title: Interface "Http Client Nemhandel Status" (DK)
summary: Interface "Http Client Nemhandel Status" (DK) in the DK country layer (Microsoft.EServices). 2 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - dk layer
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 72869d40d5ba8382f3a6a2622a737e6bcd2993c284207b4da500db8cba953816
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/DK/NemhandelNotification/app/src/Interfaces/HttpClientNemhandelStatus.Interface.al
    title: src/Apps/DK/NemhandelNotification/app/src/Interfaces/HttpClientNemhandelStatus.Interface.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/dk
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: Http Client Nemhandel Status
namespace: Microsoft.EServices
app: NemhandelNotification
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
country: DK
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
---

# Interface "Http Client Nemhandel Status" (DK)

> Interface "Http Client Nemhandel Status" (DK) in the DK country layer (Microsoft.EServices). 2 public procedures. Introduced in BC29, still in BC30.

DK country layer · Microsoft.EServices · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/DK/NemhandelNotification/app/src/Interfaces/HttpClientNemhandelStatus.Interface.al) · facts from BC29

An object of the [DK localization](../../localizations/dk.md), not part of W1.

## Procedures

- `SendGetRequest(RequestURI: Text; var RequestMessage: HttpRequestMessage; var ResponseMessage: Interface "Http Response Msg Nemhandel"): Boolean`
- `GetRequestURI(CVRNumber: Text): Text`: Returns the URI from the Nemhandelregisteret API which is used to check if a company is registered in the service.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Http Client Nemhandel Status")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Http Client Nemhandel Status"`

A DK country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
