---
id: object/interface/email-outlook-api-client-v6
type: object
title: Interface "Email - Outlook API Client v6"
summary: Interface "Email - Outlook API Client v6" in Email - Outlook REST API (System.Email). 12 public procedures. Introduced in BC29, still in BC30.
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
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: e6c0b2b870974289007758c57352e926c55656e7019900aa7c096c4e87ad3628
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Email%20-%20Outlook%20REST%20API/app/src/EmailOutlookAPIClientv6.Interface.al
    title: src/Apps/W1/Email - Outlook REST API/app/src/EmailOutlookAPIClientv6.Interface.al (releases/29.x)
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
name: Email - Outlook API Client v6
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
  procedures: 12
  events: 0
  subscribers: 0
---

# Interface "Email - Outlook API Client v6"

> Interface "Email - Outlook API Client v6" in Email - Outlook REST API (System.Email). 12 public procedures. Introduced in BC29, still in BC30.

Email - Outlook REST API · System.Email · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Email%20-%20Outlook%20REST%20API/app/src/EmailOutlookAPIClientv6.Interface.al) · facts from BC29

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
- `GetEmailCategories(AccessToken: SecretText; OutlookAccount: Record "Email - Outlook Account"): JsonArray`: Gets email categories from the Outlook API.
- `CreateEmailCategory(AccessToken: SecretText; OutlookAccount: Record "Email - Outlook Account"; CategoryDisplayName: Text; CategoryColor: Text): Text`: Creates a new email category in the Outlook API.
- `ApplyEmailCategory(AccessToken: SecretText; OutlookAccount: Record "Email - Outlook Account"; ExternalMessageId: Text; Categories: List of [Text])`: Applies email categories to an email message in the Outlook API.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
