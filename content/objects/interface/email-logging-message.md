---
id: object/interface/email-logging-message
type: object
title: Interface "Email Logging Message"
summary: Interface "Email Logging Message" in EmailLogging (Microsoft.CRM.EmailLoggin). 13 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: cf7b147be01df3867aa7dee07c411959331fd3defcc363dbb81d7c7241a0ac9a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingMessage.Interface.al
    title: src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingMessage.Interface.al (releases/29.x)
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
name: Email Logging Message
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
  procedures: 13
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Email Logging Message"

> Interface "Email Logging Message" in EmailLogging (Microsoft.CRM.EmailLoggin). 13 public procedures. Introduced in BC29, still in BC30.

EmailLogging · Microsoft.CRM.EmailLoggin · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/EmailLogging/app/src/interfaces/EmailLoggingMessage.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetId(): Text`
- `GetInternetMessageId(): Text`
- `GetSender(): Text`
- `GetToAndCcRecipients(): List of [Text]`
- `GetToRecipients(): List of [Text]`
- `GetCcRecipients(): List of [Text]`
- `GetSubject(): Text`
- `GetWebLink(): Text`
- `GetSentDateTime(): DateTime`
- `GetReceivedDateTime(): DateTime`
- `GetIsDraft(): Boolean`
- `IsInitialized(): Boolean`
- `Initialize(JsonObject: JsonObject)`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
