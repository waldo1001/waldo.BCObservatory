---
id: object/interface/reminder-action
type: object
title: Interface "Reminder Action"
summary: Interface "Reminder Action" in Base Application (Microsoft.Sales.Reminder). 10 public procedures. Introduced in BC24, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "24"
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T23:32:29.863Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6bdd7105e89b7434ca1eb09da0d5c629628d4b364d74b28ddf59eef9a4378e26
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Sales/Reminder/Automation/ReminderAction.Interface.al
    title: src/Layers/W1/BaseApp/Sales/Reminder/Automation/ReminderAction.Interface.al (releases/29.x)
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
name: Reminder Action
namespace: Microsoft.Sales.Reminder
app: Base Application
extends: null
first_version: "24"
last_version: "30"
present_in:
  - "24"
  - "25"
  - "26"
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
  procedures: 10
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

# Interface "Reminder Action"

> Interface "Reminder Action" in Base Application (Microsoft.Sales.Reminder). 10 public procedures. Introduced in BC24, still in BC30.

Base Application · Microsoft.Sales.Reminder · BC24-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Layers/W1/BaseApp/Sales/Reminder/Automation/ReminderAction.Interface.al) · facts from BC29

## Procedures

- `Initialize(ReminderActionSystemId: Guid)`
- `GetSetupRecord(var TableID: Integer; var RecordSystemId: Guid)`: Gets the setup record information for this reminder action.
- `GetReminderActionSystemId(): Guid`: Gets the system ID of this reminder action.
- `GetID(): Code[50]`: Gets the unique identifier code for this action type.
- `GetSummary(): Text`: Gets a summary description of this reminder action's current configuration.
- `CreateNew(ActionCode: Code[50]; ActionGroupCode: Code[50]): Boolean`: Creates a new reminder action with the specified codes.
- `Setup()`: Opens the setup page for configuring this reminder action.
- `Delete()`: Deletes this reminder action and its associated setup.
- `Invoke(var ErrorOccured: Boolean)`: Invokes the reminder action to perform its configured operation.
- `ValidateSetup()`: Validates that the reminder action is properly configured and ready to be invoked.

## Across versions

- Present in: BC24-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Reminder Action")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
