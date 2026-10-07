---
id: object/interface/http-response-msg-nemhandel-dk
type: object
title: Interface "Http Response Msg Nemhandel" (DK)
summary: Interface "Http Response Msg Nemhandel" (DK) in the DK country layer (Microsoft.EServices). 6 public procedures. Introduced in BC29, gone after BC29.
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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f3dcd22859a12f8364f08bce08e8879e57132ea08e64dff2334e95dc7843bb56
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/DK/NemhandelNotification/app/src/Interfaces/HttpResponseMsgNemhandel.Interface.al
    title: src/Apps/DK/NemhandelNotification/app/src/Interfaces/HttpResponseMsgNemhandel.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
last_version: "29"
present_in:
  - "29"
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

> Interface "Http Response Msg Nemhandel" (DK) in the DK country layer (Microsoft.EServices). 6 public procedures. Introduced in BC29, gone after BC29.

DK country layer · Microsoft.EServices · BC29 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/DK/NemhandelNotification/app/src/Interfaces/HttpResponseMsgNemhandel.Interface.al) · facts from BC29

An object of the [DK localization](../../localizations/dk.md), not part of W1.

## Procedures

- `IsBlockedByEnvironment(): Boolean`
- `IsSuccessStatusCode(): Boolean`: Returns a value that indicates if the HTTP response was successful.
- `HttpStatusCode(): Integer`: Returns the status code of the HTTP response.
- `ReasonPhrase(): Text`: Returns the reason phrase which typically is sent by servers together with the status code.
- `GetResponseBody(): JsonObject`: Returns the contents of the HTTP response as a Json object.
- `GetResponseBodyAsText(): Text`: Returns the contents of the HTTP response as text.

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
