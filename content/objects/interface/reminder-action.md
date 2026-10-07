---
id: object/interface/reminder-action
type: object
title: Interface "Reminder Action"
summary: Interface "Reminder Action" in Base Application (Microsoft.Sales.Reminder). 10 public procedures. Introduced in BC25, still in BC30.
tier: official
language: en
tags:
  - interface
  - base application
versions:
  introduced: "25"
  last_changed: null
  deprecated: null
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 530d08e66ae3b38ae4d0a37862b5c268272bb976fcda03ebc833cd7ebe6968cf
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Sales/Reminder/Automation/ReminderAction.Interface.al
    title: src/Layers/W1/BaseApp/Sales/Reminder/Automation/ReminderAction.Interface.al (releases/29.x)
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
name: Reminder Action
namespace: Microsoft.Sales.Reminder
app: Base Application
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

> Interface "Reminder Action" in Base Application (Microsoft.Sales.Reminder). 10 public procedures. Introduced in BC25, still in BC30.

Base Application · Microsoft.Sales.Reminder · BC25-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Layers/W1/BaseApp/Sales/Reminder/Automation/ReminderAction.Interface.al) · facts from BC29

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

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Reminder Action")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Reminder Action"`

## Across versions

- Present in: BC25, BC26, BC27, BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
