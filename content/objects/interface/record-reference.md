---
id: object/interface/record-reference
type: object
title: Interface "Record Reference"
summary: Interface "Record Reference" in System Application (System.Reflection). 28 public procedures. Present since at least BC28, still in BC30.
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
  input_hash: d0f833096b1c9e0dad77c170a26f145cf246b6fe63b511caf3d6db4083abf84c
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Record%20Reference/src/RecordReference.Interface.al
    title: src/System Application/App/Record Reference/src/RecordReference.Interface.al (releases/29.x)
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
name: Record Reference
namespace: System.Reflection
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
  procedures: 28
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Record Reference"

> Interface "Record Reference" in System Application (System.Reflection). 28 public procedures. Present since at least BC28, still in BC30.

System Application · System.Reflection · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Record%20Reference/src/RecordReference.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `ReadPermission(RecordRef: RecordRef): Boolean`: Determines if you can read from a table.
- `WritePermission(RecordRef: RecordRef): Boolean`: Determines if you can write to a table.
- `Count(RecordRef: RecordRef): Integer`: Counts the number of records that are in the filters that are currently applied to the table referred to by the RecordRef.
- `CountApprox(RecordRef: RecordRef): Integer`: Gets an approximate count of the number of records in the table
- `IsEmpty(RecordRef: RecordRef): Boolean`: Determines whether any records exist in a filtered set of records in a table.
- `Find(RecordRef: RecordRef; Which: Text)`: Finds a record in a table based on the values stored in the key fields.
- `Find(RecordRef: RecordRef; Which: Text; UseReturnValue: Boolean): Boolean`: Finds a record in a table based on the values stored in the key fields.
- `FindLast(RecordRef: RecordRef)`: Finds the last record in a table based on the current key and filter.
- `FindLast(RecordRef: RecordRef; UseReturnValue: Boolean): Boolean`: Finds the last record in a table based on the current key and filter.
- `FindFirst(RecordRef: RecordRef)`: Finds the first record in a table based on the current key and filter.
- `FindFirst(RecordRef: RecordRef; UseReturnValue: Boolean): Boolean`: Finds the first record in a table based on the current key and filter.
- `FindSet(RecordRef: RecordRef)`: Finds a set of records in a table based on the current key and filter. FINDSET can only retrieve records in ascending order.
- `FindSet(RecordRef: RecordRef; UseReturnValue: Boolean): Boolean`: Finds a set of records in a table based on the current key and filter. FINDSET can only retrieve records in ascending order.
- `FindSet(RecordRef: RecordRef; ForUpdate: Boolean; UpdateKey: Boolean; UseReturnValue: Boolean): Boolean`: Finds a set of records in a table based on the current key and filter. FINDSET can only retrieve records in ascending order.
- `Next(RecordRef: RecordRef; Steps: Integer): Integer`: Steps through a specified number of records and retrieves a record.
- `Next(RecordRef: RecordRef): Integer`: Steps through a specified number of records and retrieves a record.
- `Get(RecordRef: RecordRef; RecordId: RecordId)`: Gets a record based on the ID of the record.
- `Get(RecordRef: RecordRef; RecordId: RecordId; UseReturnValue: Boolean): Boolean`: Gets a record based on the ID of the record.
- `GetBySystemId(RecordRef: RecordRef; SystemId: Guid)`: Gets a record based on the ID of the record. The RecordRef must already be opened.
- `GetBySystemId(RecordRef: RecordRef; SystemId: Guid; UseReturnValue: Boolean): Boolean`: Gets a record based on the ID of the record. The RecordRef must already be opened.
- `Insert(RecordRef: RecordRef; RunTrigger: Boolean)`: Inserts a record into a table.
- `Insert(RecordRef: RecordRef; RunTrigger: Boolean; UseReturnValue: Boolean): Boolean`: Inserts a record into a table.
- `Insert(RecordRef: RecordRef; RunTrigger: Boolean; InsertWithSystemId: Boolean; UseReturnValue: Boolean): Boolean`: Inserts a record into a table.
- `Modify(RecordRef: RecordRef; RunTrigger: Boolean)`: Modifies a record in a table.
- `Modify(RecordRef: RecordRef; RunTrigger: Boolean; UseReturnValue: Boolean): Boolean`: Modifies a record in a table.
- `Delete(RecordRef: RecordRef; RunTrigger: Boolean)`: Deletes a record in a table.
- `Delete(RecordRef: RecordRef; RunTrigger: Boolean; UseReturnValue: Boolean): Boolean`: Deletes a record in a table.
- `DeleteAll(RecordRef: RecordRef; RunTrigger: Boolean)`: Deletes all records in a table that fall within a specified range.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
