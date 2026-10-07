---
id: object/interface/email-connector-v2
type: object
title: Interface "Email Connector v2"
summary: Interface "Email Connector v2" in System Application (System.Email). 3 public procedures. Present since at least BC28, still in BC30. Obsolete (Pending since 26.0).
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: null
  last_changed: null
  deprecated: "26.0"
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 19eaa750097e7b352d2df1c2a757993879b155eb90b5c3be5662e74c3e287d67
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Email/src/Connector/EmailConnectorv2.Interface.al
    title: src/System Application/App/Email/src/Connector/EmailConnectorv2.Interface.al (releases/29.x)
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
name: Email Connector v2
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
obsolete:
  state: Pending
  tag: "26.0"
  reason: Replaced by "Email Connector v3" which adds filtering capability for retrieval of emails
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

# Interface "Email Connector v2"

> Interface "Email Connector v2" in System Application (System.Email). 3 public procedures. Present since at least BC28, still in BC30. Obsolete (Pending since 26.0).

System Application · System.Email · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Email/src/Connector/EmailConnectorv2.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| ObsoleteState | Pending |
| ObsoleteTag | 26.0 |
| ObsoleteReason | Replaced by "Email Connector v3" which adds filtering capability for retrieval of emails |

## Procedures

- `Reply(var EmailMessage: Codeunit "Email Message"; AccountId: Guid)`: Reply to an e-mail using the provided account.
- `RetrieveEmails(AccountId: Guid; var EmailInbox: Record "Email Inbox")`: Read e-mails from the provided account.
- `MarkAsRead(AccountId: Guid; ExternalId: Text)`: Mark an e-mail as read in the provided account.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none
- Obsolete: Pending since 26.0, "Replaced by "Email Connector v3" which adds filtering capability for retrieval of emails"

## Deprecations

- object: Pending 26.0 (#if not CLEAN26), "Replaced by "Email Connector v3" which adds filtering capability for retrieval of emails"

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
