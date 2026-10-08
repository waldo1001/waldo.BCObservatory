---
id: object/interface/ismtp-client
type: object
title: Interface "iSMTP Client"
summary: Interface "iSMTP Client" in Email - SMTP API (System.Email). 4 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - email - smtp api
versions:
  introduced: "29"
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
  input_hash: 99aaa855371a95d385c5526ca2489eeb16bcce2fdbfc3f14625cd3bcad4f1b24
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/Email%20-%20SMTP%20API/app/src/ISMTPClient.Interface.al
    title: src/Apps/W1/Email - SMTP API/app/src/ISMTPClient.Interface.al (releases/29.x)
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
name: iSMTP Client
namespace: System.Email
app: Email - SMTP API
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
  procedures: 4
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

# Interface "iSMTP Client"

> Interface "iSMTP Client" in Email - SMTP API (System.Email). 4 public procedures. Introduced in BC29, still in BC30.

Email - SMTP API · System.Email · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/Email%20-%20SMTP%20API/app/src/ISMTPClient.Interface.al) · facts from BC29

## Procedures

- `Connect(Host: Text; Port: Integer; SecureConnection: Boolean): Boolean`
- `Authenticate(Authentication: Enum "SMTP Authentication Types"; var SMTPAuthentication: Codeunit "SMTP Authentication"): Boolean`
- `Send(SMTPMessage: Codeunit "SMTP Message"): Boolean`
- `Disconnect()`

## Implemented by

- [Codeunit 4615 "MailKit Client"](../codeunit/4615.md)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "iSMTP Client")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
