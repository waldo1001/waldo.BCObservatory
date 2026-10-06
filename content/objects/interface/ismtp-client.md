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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 3078d67a47032d5883d15ad23892cdc780a0681d911d087a9f85b625fd97f3b1
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Email%20-%20SMTP%20API/app/src/ISMTPClient.Interface.al
    title: src/Apps/W1/Email - SMTP API/app/src/ISMTPClient.Interface.al (releases/29.x)
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
---

# Interface "iSMTP Client"

> Interface "iSMTP Client" in Email - SMTP API (System.Email). 4 public procedures. Introduced in BC29, still in BC30.

Email - SMTP API · System.Email · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Email%20-%20SMTP%20API/app/src/ISMTPClient.Interface.al) · facts from BC29

## Procedures

- `Connect(Host: Text; Port: Integer; SecureConnection: Boolean): Boolean`
- `Authenticate(Authentication: Enum "SMTP Authentication Types"; var SMTPAuthentication: Codeunit "SMTP Authentication"): Boolean`
- `Send(SMTPMessage: Codeunit "SMTP Message"): Boolean`
- `Disconnect()`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
