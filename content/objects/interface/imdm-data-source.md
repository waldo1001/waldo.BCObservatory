---
id: object/interface/imdm-data-source
type: object
title: Interface "IMDM Data Source"
summary: Interface "IMDM Data Source" in MasterDataManagement (Microsoft.Integration.MDM). 5 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - masterdatamanagement
versions:
  introduced: "29"
  last_changed: null
  deprecated: null
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: aee92380d947c5d5983f7d5bf142b67b9dcce795da6db53f93014f6fc9421358
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/MasterDataManagement/app/src/interfaces/IMDMDataSource.Interface.al
    title: src/Apps/W1/MasterDataManagement/app/src/interfaces/IMDMDataSource.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
  changes:
    - change/bcapps/10753
object_type: interface
object_id: null
name: IMDM Data Source
namespace: Microsoft.Integration.MDM
app: MasterDataManagement
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
  procedures: 5
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
  implemented_by: 3
---

# Interface "IMDM Data Source"

> Interface "IMDM Data Source" in MasterDataManagement (Microsoft.Integration.MDM). 5 public procedures. Introduced in BC29, still in BC30.

MasterDataManagement · Microsoft.Integration.MDM · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/MasterDataManagement/app/src/interfaces/IMDMDataSource.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `GetModifiedSet(IntegrationTableMapping: Record "Integration Table Mapping"; TableFilter: Text; var SourceRecordRef: RecordRef): Boolean`: Opens SourceRecordRef on the source integration table for the given mapping and applies the supplied table filter. Returns true if at least one record matches.
- `GetBySystemId(IntegrationTableId: Integer; SystemId: Guid; var SourceRecordRef: RecordRef): Boolean`: Fetches a single source record from the given integration table by its SystemId into SourceRecordRef. Returns true if the record was found.
- `GetById(IntegrationTableMapping: Record "Integration Table Mapping"; ID: Variant; var SourceRecordRef: RecordRef): Boolean`: Fetches a single source integration-table record by its identifier into SourceRecordRef. The identifier is the integration UID field value - for Master Data Management the SystemId - passed as a Guid or its text form. A RecordId is environment-specific and only resolvable by the local same-environme...
- `GetByUidFilter(IntegrationTableMapping: Record "Integration Table Mapping"; UidFilter: Text; var SourceRecordRef: RecordRef): Boolean`: Opens the source integration table and returns the set of records whose integration UID field matches UidFilter (a filter expression, e.g. a list of SystemIds). Returns true if any matched.
- `GetByFilter(IntegrationTableMapping: Record "Integration Table Mapping"; TableFilter: Text; var SourceRecordRef: RecordRef): Boolean`: Opens SourceRecordRef on the source integration table and returns ALL records matching TableFilter (the whole set, not just those modified since the watermark) - used by coupling and uncoupling. Returns true if at least one record matches.

## Implemented by

- [Codeunit 7240 "MDM Local Data Source"](../codeunit/7240.md)
- [Codeunit 7249 "MDM Cross-Env Data Source"](../codeunit/7249.md)
- [Enum 7239 "MDM Data Source Type"](../enum/7239.md)

## Recent changes

- 2026-09-10 [#10753 Cross-environment Master Data synchronization (same tenant)](../../changes/bcapps/10753.md) (main, BC30, feature, added)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "IMDM Data Source")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
