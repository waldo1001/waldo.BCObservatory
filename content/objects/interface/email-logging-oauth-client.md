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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0eedbacd1630b88971f69b16dc4799594d93c9138742dfc88eb9fdc7c95bbd4f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingOAuthClient.Interface.al
    title: src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingOAuthClient.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
---

# Interface "Email Logging OAuth Client"

> Interface "Email Logging OAuth Client" in EmailLogging (Microsoft.CRM.EmailLoggin). 8 public procedures. Introduced in BC29, still in BC30.

EmailLogging · Microsoft.CRM.EmailLoggin · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingOAuthClient.Interface.al) · facts from BC29

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

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
