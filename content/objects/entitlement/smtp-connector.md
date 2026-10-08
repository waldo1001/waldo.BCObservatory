---
id: object/entitlement/smtp-connector
type: object
title: Entitlement "SMTP Connector"
summary: Entitlement "SMTP Connector" in Email - SMTP Connector (System.Email). Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - entitlement
  - email - smtp connector
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
  input_hash: 58dd03d3c40ee98df6d3f97e7d83db6e86ca0909756b3f2d247908c1bb6d015b
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/Email%20-%20SMTP%20Connector/app/src/Entitlements/SMTPConnector.entitlement.al
    title: src/Apps/W1/Email - SMTP Connector/app/src/Entitlements/SMTPConnector.entitlement.al (releases/29.x)
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
object_type: entitlement
object_id: null
name: SMTP Connector
namespace: System.Email
app: Email - SMTP Connector
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
  procedures: 0
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
---

# Entitlement "SMTP Connector"

> Entitlement "SMTP Connector" in Email - SMTP Connector (System.Email). Introduced in BC29, still in BC30.

Email - SMTP Connector · System.Email · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/Email%20-%20SMTP%20Connector/app/src/Entitlements/SMTPConnector.entitlement.al) · facts from BC29

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "entitlement", object_name: "SMTP Connector")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
