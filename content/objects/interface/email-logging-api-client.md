---
id: object/interface/email-logging-api-client
type: object
title: Interface "Email Logging API Client"
summary: Interface "Email Logging API Client" in EmailLogging (Microsoft.CRM.EmailLoggin). 3 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 41a3d607ff53eb7bbc5b4b17917bf9ac8bcfb16fbb9db8340e4046ef38e8f67f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingAPIClient.Interface.al
    title: src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingAPIClient.Interface.al (releases/29.x)
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
name: Email Logging API Client
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
  procedures: 3
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Email Logging API Client"

> Interface "Email Logging API Client" in EmailLogging (Microsoft.CRM.EmailLoggin). 3 public procedures. Introduced in BC29, still in BC30.

EmailLogging · Microsoft.CRM.EmailLoggin · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingAPIClient.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetMessages(AccessToken: SecretText; UserEmail: Text; MaxCount: Integer; var MessagesJsonObject: JsonObject)`
- `DeleteMessage(AccessToken: SecretText; UserEmail: Text; MessageId: Text)`
- `ArchiveMessage(AccessToken: SecretText; UserEmail: Text; SourceMessageId: Text; var TargetMessageJsonObject: JsonObject)`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
