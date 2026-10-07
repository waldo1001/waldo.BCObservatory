---
id: object/interface/http-client-nemhandel-status-dk
type: object
title: Interface "Http Client Nemhandel Status" (DK)
summary: Interface "Http Client Nemhandel Status" (DK) in the DK country layer (Microsoft.EServices). 2 public procedures. Introduced in BC29, gone after BC29.
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
  input_hash: 837a0991fce839ad3c2d0471635c3d007f9c3c052038544a3545f09b6291b6c7
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/DK/NemhandelNotification/app/src/Interfaces/HttpClientNemhandelStatus.Interface.al
    title: src/Apps/DK/NemhandelNotification/app/src/Interfaces/HttpClientNemhandelStatus.Interface.al (releases/29.x)
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
name: Http Client Nemhandel Status
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

> Interface "Http Client Nemhandel Status" (DK) in the DK country layer (Microsoft.EServices). 2 public procedures. Introduced in BC29, gone after BC29.

DK country layer · Microsoft.EServices · BC29 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/DK/NemhandelNotification/app/src/Interfaces/HttpClientNemhandelStatus.Interface.al) · facts from BC29

An object of the [DK localization](../../localizations/dk.md), not part of W1.

## Procedures

- `SendGetRequest(RequestURI: Text; var RequestMessage: HttpRequestMessage; var ResponseMessage: Interface "Http Response Msg Nemhandel"): Boolean`
- `GetRequestURI(CVRNumber: Text): Text`: Returns the URI from the Nemhandelregisteret API which is used to check if a company is registered in the service.

## Across versions

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
