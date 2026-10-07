---
id: object/interface/reten-pol-filtering
type: object
title: Interface "Reten. Pol. Filtering"
summary: Interface "Reten. Pol. Filtering" in System Application (System.DataAdministration). 4 public procedures. Present since at least BC23, still in BC30.
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 29b57ca160ab8006ad9babd118a58f1651e459d7133f06195b766f13ed2a3e63
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Retention%20Policy/src/Apply%20Retention%20Policy/RetenPolFiltering.Interface.al
    title: src/System Application/App/Retention Policy/src/Apply Retention Policy/RetenPolFiltering.Interface.al (releases/29.x)
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
name: Reten. Pol. Filtering
namespace: System.DataAdministration
app: System Application
extends: null
first_version: "23"
last_version: "30"
present_in:
  - "23"
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
  procedures: 4
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

# Interface "Reten. Pol. Filtering"

> Interface "Reten. Pol. Filtering" in System Application (System.DataAdministration). 4 public procedures. Present since at least BC23, still in BC30.

System Application · System.DataAdministration · BC23-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/System%20Application/App/Retention%20Policy/src/Apply%20Retention%20Policy/RetenPolFiltering.Interface.al) · facts from BC29

## Procedures

- `ApplyRetentionPolicyAllRecordFilters(RetentionPolicySetup: Record "Retention Policy Setup"; var FilterRecordRef: RecordRef; var RetenPolFilteringParam: Record "Reten. Pol. Filtering Param" temporary): Boolean`
- `ApplyRetentionPolicySubSetFilters(RetentionPolicySetup: Record "Retention Policy Setup"; var FilterRecordRef: RecordRef; var RetenPolFilteringParam: Record "Reten. Pol. Filtering Param" temporary): Boolean`: This method is called when the retention policy defines subsets of records. The records in FilterRecordRef must be marked to indicate they are part of the union of all subsets.
- `HasReadPermission(TableId: Integer): Boolean`: This method is used to determine whether the implementation has read permission to the table specified in TableId. The permissions depend on both the user and the implementation codeunit. If the combination of user and implementation codeunit do not have read permission to the table, the retention p...
- `Count(RecordRef: RecordRef): Integer`: This method is to count the records in the table specified in the RecRef. The method is only called when the base code does not have read permission to the table.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Reten. Pol. Filtering")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Reten. Pol. Filtering"`

## Across versions

- Present in: BC23-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
