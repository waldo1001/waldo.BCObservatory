---
id: object/interface/email-oauth-client-v2
type: object
title: Interface "Email - OAuth Client v2"
summary: Interface "Email - OAuth Client v2" in Email - Outlook REST API (System.Email). 2 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - email - outlook rest api
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
  input_hash: 1cf7deb802cb872d468a60f59b8757af46836b3f1251f86dd05a505672ebbbdb
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/Email%20-%20Outlook%20REST%20API/app/src/EmailOAuthClientv2.Interface.al
    title: src/Apps/W1/Email - Outlook REST API/app/src/EmailOAuthClientv2.Interface.al (releases/29.x)
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
name: Email - OAuth Client v2
namespace: System.Email
app: Email - Outlook REST API
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
  implemented_by: 1
---

# Interface "Email - OAuth Client v2"

> Interface "Email - OAuth Client v2" in Email - Outlook REST API (System.Email). 2 public procedures. Introduced in BC29, still in BC30.

Email - Outlook REST API · System.Email · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/Email%20-%20Outlook%20REST%20API/app/src/EmailOAuthClientv2.Interface.al) · facts from BC29

## Procedures

- `GetAccessToken(var AccessToken: SecretText)`
- `TryGetAccessToken(var AccessToken: SecretText): Boolean`: Retrieves the Access token for the current user to connect to Outlook API.

## Implemented by

- [Codeunit 4507 "Email - OAuth Client"](../codeunit/4507.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Email - OAuth Client v2")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Email - OAuth Client v2"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
