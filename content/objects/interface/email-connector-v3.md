---
id: object/interface/email-connector-v3
type: object
title: Interface "Email Connector v3"
summary: Interface "Email Connector v3" in System Application (System.Email). 3 public procedures. Present since at least BC28, still in BC30. Obsolete (Pending since 28.0).
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: null
  last_changed: null
  deprecated: "28.0"
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 674f92ec3310286f2545a2b604387f48250ac0b13de6c9b23d8041f4eb15adf9
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/Email/src/Connector/EmailConnectorv3.Interface.al
    title: src/System Application/App/Email/src/Connector/EmailConnectorv3.Interface.al (releases/29.x)
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
name: Email Connector v3
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
  tag: "28.0"
  reason: Replaced by "Email Connector v4" which adds the capability for retrieving email folders.
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

# Interface "Email Connector v3"

> Interface "Email Connector v3" in System Application (System.Email). 3 public procedures. Present since at least BC28, still in BC30. Obsolete (Pending since 28.0).

System Application · System.Email · BC28-30 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/System%20Application/App/Email/src/Connector/EmailConnectorv3.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| ObsoleteState | Pending |
| ObsoleteTag | 28.0 |
| ObsoleteReason | Replaced by "Email Connector v4" which adds the capability for retrieving email folders. |

## Procedures

- `Reply(var EmailMessage: Codeunit "Email Message"; AccountId: Guid)`: Reply to an e-mail using the provided account.
- `RetrieveEmails(AccountId: Guid; var EmailInbox: Record "Email Inbox"; var Filters: Record "Email Retrieval Filters" temporary)`: Read e-mails from the provided account.
- `MarkAsRead(AccountId: Guid; ExternalId: Text)`: Mark an e-mail as read in the provided account.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none
- Obsolete: Pending since 28.0, "Replaced by "Email Connector v4" which adds the capability for retrieving email folders."

## Deprecations

- object: Pending 28.0 (#if not CLEAN28), "Replaced by "Email Connector v4" which adds the capability for retrieving email folders."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
