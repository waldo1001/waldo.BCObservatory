---
id: object/interface/email-outlook-api-client-v5
type: object
title: Interface "Email - Outlook API Client v5"
summary: Interface "Email - Outlook API Client v5" in Email - Outlook REST API (System.Email). 9 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - email - outlook rest api
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a89e8ae67d6f2d1ce20db3ad0cfa06b1bdde7b395d594de1ba364ac05bf92fa0
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Email%20-%20Outlook%20REST%20API/app/src/EmailOutlookAPIClientv5.Interface.al
    title: src/Apps/W1/Email - Outlook REST API/app/src/EmailOutlookAPIClientv5.Interface.al (releases/29.x)
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
name: Email - Outlook API Client v5
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
obsolete: null
countries: []
ms_search_form_ids: []
counts:
  fields: 0
  procedures: 9
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Email - Outlook API Client v5"

> Interface "Email - Outlook API Client v5" in Email - Outlook REST API (System.Email). 9 public procedures. Introduced in BC29, still in BC30.

Email - Outlook REST API · System.Email · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Email%20-%20Outlook%20REST%20API/app/src/EmailOutlookAPIClientv5.Interface.al) · facts from BC29

## Procedures

- `GetAccountInformation(AccessToken: SecretText; var Email: Text[250]; var Name: Text[250]): Boolean`
- `SendEmail(AccessToken: SecretText; MessageJson: JsonObject)`: Sends an email via the Outlook API.
- `RetrieveEmails(AccessToken: SecretText; OutlookAccount: Record "Email - Outlook Account"; var Filters: Record "Email Retrieval Filters" temporary): JsonArray`: Retrieves the emails from the Outlook API.
- `RetrieveEmail(AccessToken: SecretText; EmailAddress: Text[250]; ExternalMessageId: Text; var Filters: Record "Email Retrieval Filters" temporary): JsonObject`: Retrieves an email from the Outlook API.
- `CreateDraftReply(AccessToken: SecretText; EmailAddress: Text[250]; ExternalMessageId: Text): Text`: Creates a draft reply to a specific email.
- `ReplyEmail(AccessToken: SecretText; EmailAddress: Text[250]; ExternalMessageId: Text; MessageJsonText: Text)`: Replies to an email.
- `MarkEmailAsRead(AccessToken: SecretText; EmailAddress: Text[250]; ExternalMessageId: Text)`: Marks an email as read.
- `GetMailboxFolders(AccessToken: SecretText; OutlookAccount: Record "Email - Outlook Account"): JsonArray`: Gets mailbox folders from the Outlook API.
- `GetChildMailboxFolders(AccessToken: SecretText; OutlookAccount: Record "Email - Outlook Account"; ParentFolderId: Text): JsonArray`: Gets child mailbox folders from the Outlook API.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
