---
id: object/interface/email-connector-v2
type: object
title: Interface "Email Connector v2"
summary: Interface "Email Connector v2" in System Application (System.Email). 3 public procedures. Introduced in BC25, still in BC30. Obsolete (Pending since 26.0).
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: "25"
  last_changed: null
  deprecated: "26.0"
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: b34a88e40ce4af7b1bfc56e89892c44eee6dbd1151ab572b7c4feb4cb063f2c2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Email/src/Connector/EmailConnectorv2.Interface.al
    title: src/System Application/App/Email/src/Connector/EmailConnectorv2.Interface.al (releases/29.x)
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
name: Email Connector v2
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
  calls: 0
  called_by: 0
  implements: 0
  implemented_by: 0
---

# Interface "Email Connector v2"

> Interface "Email Connector v2" in System Application (System.Email). 3 public procedures. Introduced in BC25, still in BC30. Obsolete (Pending since 26.0).

System Application · System.Email · BC25-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Email/src/Connector/EmailConnectorv2.Interface.al) · facts from BC29

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

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Email Connector v2")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Email Connector v2"`

## Across versions

- Present in: BC25-30
- Changed (declaration) in: none
- Obsolete: Pending since 26.0, "Replaced by "Email Connector v3" which adds filtering capability for retrieval of emails"

## Deprecations

- object: Pending 26.0 (#if not CLEAN26), "Replaced by "Email Connector v3" which adds filtering capability for retrieval of emails"

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
