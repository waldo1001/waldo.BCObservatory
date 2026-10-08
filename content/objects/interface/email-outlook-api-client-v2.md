---
id: object/interface/email-outlook-api-client-v2
type: object
title: Interface "Email - Outlook API Client v2"
summary: Interface "Email - Outlook API Client v2" in Email - Outlook REST API (System.Email). 2 public procedures. Introduced in BC29, still in BC30. Obsolete (Pending since 28.0).
tier: official
language: en
tags:
  - interface
  - email - outlook rest api
versions:
  introduced: "29"
  last_changed: null
  deprecated: "28.0"
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 518d28ae78e72db17e132a9011f5320901c3ddffaf125065fcb4f01395034ff7
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/Email%20-%20Outlook%20REST%20API/app/src/EmailOutlookAPIClientv2.Interface.al
    title: src/Apps/W1/Email - Outlook REST API/app/src/EmailOutlookAPIClientv2.Interface.al (releases/29.x)
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
name: Email - Outlook API Client v2
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
obsolete:
  state: Pending
  tag: "28.0"
  reason: This interface is deprecated. Please use the Email - Outlook API Client v5 interface instead.
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
  implemented_by: 0
---

# Interface "Email - Outlook API Client v2"

> Interface "Email - Outlook API Client v2" in Email - Outlook REST API (System.Email). 2 public procedures. Introduced in BC29, still in BC30. Obsolete (Pending since 28.0).

Email - Outlook REST API · System.Email · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/Email%20-%20Outlook%20REST%20API/app/src/EmailOutlookAPIClientv2.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| ObsoleteState | Pending |
| ObsoleteTag | 28.0 |
| ObsoleteReason | This interface is deprecated. Please use the Email - Outlook API Client v5 interface instead. |

## Procedures

- `GetAccountInformation(AccessToken: SecretText; var Email: Text[250]; var Name: Text[250]): Boolean`
- `SendEmail(AccessToken: SecretText; MessageJson: JsonObject)`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none
- Obsolete: Pending since 28.0, "This interface is deprecated. Please use the Email - Outlook API Client v5 interface instead."

## Deprecations

- object: Pending 28.0 (#if not CLEAN28), "This interface is deprecated. Please use the Email - Outlook API Client v5 interface instead."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Email - Outlook API Client v2")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
