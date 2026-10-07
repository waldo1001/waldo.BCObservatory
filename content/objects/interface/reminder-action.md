---
id: object/interface/reminder-action
type: object
title: Interface "Reminder Action"
summary: Interface "Reminder Action" in Base Application (Microsoft.Sales.Reminder). 10 public procedures. Present since at least BC28, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 9a3fb076111f65c73f0dff4e9f0aa096d70418cca107c67951fde37438efc302
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Sales/Reminder/Automation/ReminderAction.Interface.al
    title: src/Layers/W1/BaseApp/Sales/Reminder/Automation/ReminderAction.Interface.al (releases/29.x)
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
name: Reminder Action
namespace: Microsoft.Sales.Reminder
app: Base Application
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
  procedures: 10
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Reminder Action"

> Interface "Reminder Action" in Base Application (Microsoft.Sales.Reminder). 10 public procedures. Present since at least BC28, still in BC30.

Base Application · Microsoft.Sales.Reminder · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Layers/W1/BaseApp/Sales/Reminder/Automation/ReminderAction.Interface.al) · facts from BC29

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

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
