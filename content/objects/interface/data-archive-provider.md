---
id: object/interface/data-archive-provider
type: object
title: Interface "Data Archive Provider"
summary: Interface "Data Archive Provider" in System Application (System.DataAdministration). 12 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-07T01:08:41.552Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 94a528483eb04a4ef01cd24218c389758f345ba06b5246ff6f539c8dd414dec0
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Data%20Archive/src/DataArchiveProvider.Interface.al
    title: src/System Application/App/Data Archive/src/DataArchiveProvider.Interface.al (releases/29.x)
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
name: Data Archive Provider
namespace: System.DataAdministration
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
  procedures: 12
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Data Archive Provider"

> Interface "Data Archive Provider" in System Application (System.DataAdministration). 12 public procedures. Present since at least BC28, still in BC30.

System Application · System.DataAdministration · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Data%20Archive/src/DataArchiveProvider.Interface.al) · facts from BC29

## Procedures

- `Create(Description: Text): Integer`
- `Open(ID: Integer)`: Opens an existing archive entry.
- `Save()`: Saves and closes the currently open archive entry.
- `DiscardChanges()`: Discards any additions and closes the currently open archive entry.
- `SaveRecord(var RecordRef: RecordRef)`: Saves the supplied record to the currently open archive entry.
- `SaveRecord(RecordVar: Variant)`: Saves the supplied record to the currently open archive entry.
- `SaveRecords(var RecordRef: RecordRef)`: Saves all records within the filters to the currently open archive entry.
- `StartSubscriptionToDelete()`: Starts subscription to the OnDatabaseDelete trigger and calls SaveRecord with any deleted record.
- `StartSubscriptionToDelete(ResetSession: Boolean)`: Starts subscription to the OnDatabaseDelete trigger and calls SaveRecord with any deleted record.
- `StopSubscriptionToDelete()`: Stops the subscription to the OnDatabaseDelete trigger.
- `DataArchiveProviderExists(): Boolean`: Informs the consumer app whether there is a provider for this interface.
- `SetDataArchiveProvider(var NewDataArchiveProvider: Interface "Data Archive Provider")`: Sets the instance of the provider. Needed for self-reference.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
