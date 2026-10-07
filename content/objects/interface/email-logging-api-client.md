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
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: eb4d595914cb0c1e63a8d5992ccf1ea0fe08598ac103cba7d4ee3a3c929bfd8e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingAPIClient.Interface.al
    title: src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingAPIClient.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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

EmailLogging · Microsoft.CRM.EmailLoggin · BC29-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingAPIClient.Interface.al) · facts from BC29

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
