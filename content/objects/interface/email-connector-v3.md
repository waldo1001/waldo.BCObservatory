---
id: object/interface/email-connector-v3
type: object
title: Interface "Email Connector v3"
summary: Interface "Email Connector v3" in System Application (System.Email). 3 public procedures. Introduced in BC25, still in BC30, changed in BC27. Obsolete (Pending since 28.0).
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: "25"
  last_changed: "27"
  deprecated: "28.0"
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: ba2140e1445479b3ca9e8e7a7dd80e90edd18aa8d5173d52c4eae9f63fcc6f9f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Email/src/Connector/EmailConnectorv3.Interface.al
    title: src/System Application/App/Email/src/Connector/EmailConnectorv3.Interface.al (releases/29.x)
    date: null
    commit: fe31a4253b4aa8fde426364f132f5689d4dfcddf
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
first_version: "25"
last_version: "30"
present_in:
  - "25"
  - "26"
  - "27"
  - "28"
  - "29"
  - "30"
changed_in:
  - "27"
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
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 0
---

# Interface "Email Connector v3"

> Interface "Email Connector v3" in System Application (System.Email). 3 public procedures. Introduced in BC25, still in BC30, changed in BC27. Obsolete (Pending since 28.0).

System Application · System.Email · BC25-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Email/src/Connector/EmailConnectorv3.Interface.al) · facts from BC29

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

- Present in: BC25-30
- Changed (declaration) in: BC27
- Obsolete: Pending since 28.0, "Replaced by "Email Connector v4" which adds the capability for retrieving email folders."

## Deprecations

- object: Pending 28.0 (#if not CLEAN28), "Replaced by "Email Connector v4" which adds the capability for retrieving email folders."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Email Connector v3")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
