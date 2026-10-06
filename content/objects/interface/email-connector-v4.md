---
id: object/interface/email-connector-v4
type: object
title: Interface "Email Connector v4"
summary: Interface "Email Connector v4" in System Application (System.Email). 4 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: null
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
  input_hash: 4cedb7e429d4b34a87f02d923ce953cd8e91eedffdefe70ab854b94499c55564
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Email/src/Connector/EmailConnectorv4.Interface.al
    title: src/System Application/App/Email/src/Connector/EmailConnectorv4.Interface.al (releases/29.x)
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
name: Email Connector v4
namespace: System.Email
app: System Application
extends: null
first_version: "28"
last_version: "30"
present_in:
  - "28"
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

# Interface "Email Connector v4"

> Interface "Email Connector v4" in System Application (System.Email). 4 public procedures. Present since at least BC28, still in BC30.

System Application · System.Email · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Email/src/Connector/EmailConnectorv4.Interface.al) · facts from BC29

## Procedures

- `Reply(var EmailMessage: Codeunit "Email Message"; AccountId: Guid)`
- `RetrieveEmails(AccountId: Guid; var EmailInbox: Record "Email Inbox"; var Filters: Record "Email Retrieval Filters" temporary)`: Read e-mails from the provided account.
- `MarkAsRead(AccountId: Guid; ExternalId: Text)`: Mark an e-mail as read in the provided account.
- `GetEmailFolders(AccountId: Guid; var EmailFolders: Record "Email Folders" temporary)`: Get email folders from the provided account.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
