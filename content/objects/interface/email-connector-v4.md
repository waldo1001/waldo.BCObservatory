---
id: object/interface/email-connector-v4
type: object
title: Interface "Email Connector v4"
summary: Interface "Email Connector v4" in System Application (System.Email). 4 public procedures. Introduced in BC27, still in BC30.
tier: official
language: en
tags:
  - interface
  - system application
versions:
  introduced: "27"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f9e869cef793739c68330064f28812cdb4edb8825b93d3d70faa795df4180e99
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Email/src/Connector/EmailConnectorv4.Interface.al
    title: src/System Application/App/Email/src/Connector/EmailConnectorv4.Interface.al (releases/29.x)
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
name: Email Connector v4
namespace: System.Email
app: System Application
extends: null
first_version: "27"
last_version: "30"
present_in:
  - "27"
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

# Interface "Email Connector v4"

> Interface "Email Connector v4" in System Application (System.Email). 4 public procedures. Introduced in BC27, still in BC30.

System Application · System.Email · BC27-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Email/src/Connector/EmailConnectorv4.Interface.al) · facts from BC29

## Procedures

- `Reply(var EmailMessage: Codeunit "Email Message"; AccountId: Guid)`
- `RetrieveEmails(AccountId: Guid; var EmailInbox: Record "Email Inbox"; var Filters: Record "Email Retrieval Filters" temporary)`: Read e-mails from the provided account.
- `MarkAsRead(AccountId: Guid; ExternalId: Text)`: Mark an e-mail as read in the provided account.
- `GetEmailFolders(AccountId: Guid; var EmailFolders: Record "Email Folders" temporary)`: Get email folders from the provided account.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Email Connector v4")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Email Connector v4"`

## Across versions

- Present in: BC27-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
