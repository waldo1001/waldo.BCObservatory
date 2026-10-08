---
id: object/interface/email-logging-oauth-client
type: object
title: Interface "Email Logging OAuth Client"
summary: Interface "Email Logging OAuth Client" in EmailLogging (Microsoft.CRM.EmailLoggin). 8 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - emaillogging
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
  input_hash: a7951052a79b6d77292257f68f140ff3d43b4cb73e17feea81178a41f571e6dd
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingOAuthClient.Interface.al
    title: src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingOAuthClient.Interface.al (releases/29.x)
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
name: Email Logging OAuth Client
namespace: Microsoft.CRM.EmailLoggin
app: EmailLogging
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
  procedures: 8
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

# Interface "Email Logging OAuth Client"

> Interface "Email Logging OAuth Client" in EmailLogging (Microsoft.CRM.EmailLoggin). 8 public procedures. Introduced in BC29, still in BC30.

EmailLogging · Microsoft.CRM.EmailLoggin · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingOAuthClient.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `Initialize()`: Initializes client id, client secret and redirect url with the default values
- `Initialize(ClientId: Text; ClientSecret: SecretText; RedirectUrl: Text)`: Initializes client id, client secret and redirect url with the custom values
- `GetAccessToken(PromptInteraction: Enum "Prompt Interaction"; var AccessToken: SecretText)`: Retrieves the access token to connect to Outlook API.
- `TryGetAccessToken(PromptInteraction: Enum "Prompt Interaction"; var AccessToken: SecretText): Boolean`: Retrieves the access token to connect to Outlook API.
- `GetAccessToken(var AccessToken: SecretText)`: retrieves the access token for the current user to connect to Outlook API.
- `TryGetAccessToken(var AccessToken: SecretText): Boolean`: Retrieves the access Token for the current user to connect to Outlook API.
- `GetApplicationType(): Enum "Email Logging App Type"`: Returns the Type of the application that is used for authentication.
- `GetLastErrorMessage(): Text`: Returns the last authorization error message.

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Email Logging OAuth Client")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
