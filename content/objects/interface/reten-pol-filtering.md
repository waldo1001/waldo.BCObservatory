---
id: object/interface/reten-pol-filtering
type: object
title: Interface "Reten. Pol. Filtering"
summary: Interface "Reten. Pol. Filtering" in System Application (System.DataAdministration). 4 public procedures. Present since at least BC28, still in BC30.
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
  at: "2026-10-06T23:56:28.878Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 08119788696cfb2595038491f8ce2f519362d1bb678c443f57cd8efb8b7ae0b6
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Retention%20Policy/src/Apply%20Retention%20Policy/RetenPolFiltering.Interface.al
    title: src/System Application/App/Retention Policy/src/Apply Retention Policy/RetenPolFiltering.Interface.al (releases/29.x)
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
name: Reten. Pol. Filtering
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
  procedures: 4
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "Reten. Pol. Filtering"

> Interface "Reten. Pol. Filtering" in System Application (System.DataAdministration). 4 public procedures. Present since at least BC28, still in BC30.

System Application · System.DataAdministration · BC28-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/System%20Application/App/Retention%20Policy/src/Apply%20Retention%20Policy/RetenPolFiltering.Interface.al) · facts from BC29

## Procedures

- `ApplyRetentionPolicyAllRecordFilters(RetentionPolicySetup: Record "Retention Policy Setup"; var FilterRecordRef: RecordRef; var RetenPolFilteringParam: Record "Reten. Pol. Filtering Param" temporary): Boolean`
- `ApplyRetentionPolicySubSetFilters(RetentionPolicySetup: Record "Retention Policy Setup"; var FilterRecordRef: RecordRef; var RetenPolFilteringParam: Record "Reten. Pol. Filtering Param" temporary): Boolean`: This method is called when the retention policy defines subsets of records. The records in FilterRecordRef must be marked to indicate they are part of the union of all subsets.
- `HasReadPermission(TableId: Integer): Boolean`: This method is used to determine whether the implementation has read permission to the table specified in TableId. The permissions depend on both the user and the implementation codeunit. If the combination of user and implementation codeunit do not have read permission to the table, the retention p...
- `Count(RecordRef: RecordRef): Integer`: This method is to count the records in the table specified in the RecRef. The method is only called when the base code does not have read permission to the table.

## Across versions

- Present in: BC28, BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
