---
id: object/interface/email-outlook-api-client-v4
type: object
title: Interface "Email - Outlook API Client v4"
summary: Interface "Email - Outlook API Client v4" in Email - Outlook REST API (System.Email). 5 public procedures. Introduced in BC29, still in BC30. Obsolete (Pending since 28.0).
tier: official
language: en
tags:
  - interface
  - email - outlook rest api
versions:
  introduced: "29"
  last_changed: null
  deprecated: "28.0"
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a8da33b52e6bf2221e249aab545babc1f4a1ed06faf2034d8619461da01dd441
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/Email%20-%20Outlook%20REST%20API/app/src/EmailOutlookAPIClientv4.Interface.al
    title: src/Apps/W1/Email - Outlook REST API/app/src/EmailOutlookAPIClientv4.Interface.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
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
name: Email - Outlook API Client v4
namespace: System.Email
app: Email - Outlook REST API
extends: null
first_version: "29"
last_version: "30"
present_in:
  - "29"
  - "30"
changed_in: []
source_major: "29"
obsolete:
  state: Pending
  tag: "28.0"
  reason: This interface is deprecated. Please use the Email - Outlook API Client v5 interface instead.
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 5
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Email - Outlook API Client v4"

> Interface "Email - Outlook API Client v4" in Email - Outlook REST API (System.Email). 5 public procedures. Introduced in BC29, still in BC30. Obsolete (Pending since 28.0).

Email - Outlook REST API · System.Email · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/Email%20-%20Outlook%20REST%20API/app/src/EmailOutlookAPIClientv4.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| ObsoleteState | Pending |
| ObsoleteTag | 28.0 |
| ObsoleteReason | This interface is deprecated. Please use the Email - Outlook API Client v5 interface instead. |

## Procedures

- `RetrieveEmails(AccessToken: SecretText; OutlookAccount: Record "Email - Outlook Account"; var Filters: Record "Email Retrieval Filters" temporary): JsonArray`: Retrieves the emails from the Outlook API.
- `RetrieveEmail(AccessToken: SecretText; EmailAddress: Text[250]; ExternalMessageId: Text; var Filters: Record "Email Retrieval Filters" temporary): JsonObject`: Retrieves an email from the Outlook API.
- `CreateDraftReply(AccessToken: SecretText; EmailAddress: Text[250]; ExternalMessageId: Text): Text`: Creates a draft reply to a specific email.
- `ReplyEmail(AccessToken: SecretText; EmailAddress: Text[250]; ExternalMessageId: Text; MessageJsonText: Text)`: Replies to an email.
- `MarkEmailAsRead(AccessToken: SecretText; EmailAddress: Text[250]; ExternalMessageId: Text)`: Marks an email as read.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Email - Outlook API Client v4")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Email - Outlook API Client v4"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none
- Obsolete: Pending since 28.0, "This interface is deprecated. Please use the Email - Outlook API Client v5 interface instead."

## Deprecations

- object: Pending 28.0 (#if not CLEAN28), "This interface is deprecated. Please use the Email - Outlook API Client v5 interface instead."

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
