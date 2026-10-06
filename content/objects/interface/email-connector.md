---
id: object/interface/email-connector
type: object
title: Interface "Email Connector"
summary: Interface "Email Connector" in System Application (System.Email). 7 public procedures. Present since at least BC28, still in BC30.
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
  input_hash: 814832343fafc9fb53e6118ca44ad838964939313681120ff1d594dc0ddb61b6
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Email/src/Connector/EmailConnector.Interface.al
    title: src/System Application/App/Email/src/Connector/EmailConnector.Interface.al (releases/29.x)
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
name: Email Connector
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
  procedures: 7
  events: 0
  subscribers: 0
---

# Interface "Email Connector"

> Interface "Email Connector" in System Application (System.Email). 7 public procedures. Present since at least BC28, still in BC30.

System Application · System.Email · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Email/src/Connector/EmailConnector.Interface.al) · facts from BC29

## Procedures

- `Send(EmailMessage: Codeunit "Email Message"; AccountId: Guid)`
- `GetAccounts(var Accounts: Record "Email Account")`: Gets the e-mail accounts registered for the connector.
- `ShowAccountInformation(AccountId: Guid)`: Shows the information for an e-mail account.
- `RegisterAccount(var EmailAccount: Record "Email Account"): Boolean`: Registers an e-mail account for the connector.
- `DeleteAccount(AccountId: Guid): Boolean`: Deletes an e-mail account for the connector.
- `GetLogoAsBase64(): Text`: Provides a custom logo for the connector that shows in the Setup Email Account Guide.
- `GetDescription(): Text[250]`: Provides a more detailed description of the connector.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
