---
id: object/interface/http-response-msg-nemhandel-dk
type: object
title: Interface "Http Response Msg Nemhandel" (DK)
summary: Interface "Http Response Msg Nemhandel" (DK) in the DK country layer (Microsoft.EServices). 6 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: 881dd395ab6355a7ba85dd857dafa39b5b71dcea7cff85902dfdde554e73055a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/DK/NemhandelNotification/app/src/Interfaces/HttpResponseMsgNemhandel.Interface.al
    title: src/Apps/DK/NemhandelNotification/app/src/Interfaces/HttpResponseMsgNemhandel.Interface.al (releases/29.x)
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
name: Http Response Msg Nemhandel
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
  procedures: 6
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Http Response Msg Nemhandel" (DK)

> Interface "Http Response Msg Nemhandel" (DK) in the DK country layer (Microsoft.EServices). 6 public procedures. Introduced in BC29, still in BC30.

DK country layer · Microsoft.EServices · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/DK/NemhandelNotification/app/src/Interfaces/HttpResponseMsgNemhandel.Interface.al) · facts from BC29

An object of the [DK localization](../../localizations/dk.md), not part of W1.

## Procedures

- `IsBlockedByEnvironment(): Boolean`
- `IsSuccessStatusCode(): Boolean`: Returns a value that indicates if the HTTP response was successful.
- `HttpStatusCode(): Integer`: Returns the status code of the HTTP response.
- `ReasonPhrase(): Text`: Returns the reason phrase which typically is sent by servers together with the status code.
- `GetResponseBody(): JsonObject`: Returns the contents of the HTTP response as a Json object.
- `GetResponseBodyAsText(): Text`: Returns the contents of the HTTP response as text.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Http Response Msg Nemhandel")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Http Response Msg Nemhandel"`

A DK country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
