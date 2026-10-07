---
id: object/interface/bc14-migrator
type: object
title: Interface "BC14 Migrator"
summary: Interface "BC14 Migrator" in HybridBC14 (Microsoft.DataMigration.BC14Reimplementation). 5 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - hybridbc14
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
  at: "2026-10-07T21:07:03.029Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: a4f066da33ef0c0f8c83fc329ffdfa88308292c74f4dfafe07377ff0e34fe778
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/HybridBC14/app/src/Migration/BC14Migrator.Interface.al
    title: src/Apps/W1/HybridBC14/app/src/Migration/BC14Migrator.Interface.al (releases/29.x)
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
name: BC14 Migrator
namespace: Microsoft.DataMigration.BC14Reimplementation
app: HybridBC14
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
  implemented_by: 63
---

# Interface "BC14 Migrator"

> Interface "BC14 Migrator" in HybridBC14 (Microsoft.DataMigration.BC14Reimplementation). 5 public procedures. Introduced in BC29, still in BC30.

HybridBC14 · Microsoft.DataMigration.BC14Reimplementation · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/HybridBC14/app/src/Migration/BC14Migrator.Interface.al) · facts from BC29

## Procedures

- `GetDisplayName(): Text[250]`
- `RegisterReplicationMappings(CompanyName: Text)`: Registers the source-to-buffer replication table mappings owned by this migrator for the given company. May register zero, one, or multiple mappings (e.g. a Posted document migrator registers both Header and Line). Implementations should call Codeunit "BC14 Migration Setup".InsertPerCompanyMapping f...
- `IsEnabled(): Boolean`: Checks if the migrator is enabled based on current settings.
- `Migrate(): Boolean`: Runs the migration for all source records. Implementations own the record loop and data transfer logic.
- `GetRemainingPercentage(): Integer`: Gets the remaining migration percentage (100 = all remaining, 0 = all migrated). Percentage-based because a single migrator may handle multiple related entities.

## Implemented by

- [Codeunit 46865 "BC14 Customer Migrator"](../codeunit/46865.md)
- [Codeunit 46867 "BC14 Vendor Migrator"](../codeunit/46867.md)
- [Codeunit 46869 "BC14 GL Account Migrator"](../codeunit/46869.md)
- [Codeunit 46870 "BC14 Item Migrator"](../codeunit/46870.md)
- [Codeunit 46880 "BC14 Posted Sales Inv Migr."](../codeunit/46880.md)
- [Codeunit 46881 "BC14 Old G/L Entry Migr."](../codeunit/46881.md)
- [Codeunit 46887 "BC14 Dim. Value Migrator"](../codeunit/46887.md)
- [Codeunit 46888 "BC14 G/L Entry Migrator"](../codeunit/46888.md)
- [Codeunit 46890 "BC14 Dimension Migrator"](../codeunit/46890.md)
- [Codeunit 46891 "BC14 Payment Terms Migrator"](../codeunit/46891.md)
- [Codeunit 46892 "BC14 Payment Method Migrator"](../codeunit/46892.md)
- [Codeunit 46893 "BC14 Currency Migrator"](../codeunit/46893.md)
- [Codeunit 46894 "BC14 Curr. Exch. Rate Migrator"](../codeunit/46894.md)
- [Codeunit 46895 "BC14 Acct. Period Migrator"](../codeunit/46895.md)
- [Codeunit 46897 "BC14 Inv. Post. Group Migrator"](../codeunit/46897.md)
- [Codeunit 46898 "BC14 Inv. Post. Setup Migrator"](../codeunit/46898.md)
- [Codeunit 46900 "BC14 Country/Region Migrator"](../codeunit/46900.md)
- [Codeunit 46901 "BC14 Post Code Migrator"](../codeunit/46901.md)
- [Codeunit 46902 "BC14 Language Migrator"](../codeunit/46902.md)
- [Codeunit 46903 "BC14 Unit of Measure Migrator"](../codeunit/46903.md)
- [Codeunit 46904 "BC14 Cust. Post. Grp. Migrator"](../codeunit/46904.md)
- [Codeunit 46905 "BC14 Vend. Post. Grp. Migrator"](../codeunit/46905.md)
- [Codeunit 46906 "BC14 GenBus PG Migrator"](../codeunit/46906.md)
- [Codeunit 46907 "BC14 GenProd PG Migrator"](../codeunit/46907.md)
- [Codeunit 46908 "BC14 VATBus PG Migrator"](../codeunit/46908.md)
- [Codeunit 46909 "BC14 VATProd PG Migrator"](../codeunit/46909.md)
- [Codeunit 46910 "BC14 Gen. Post. Setup Migrator"](../codeunit/46910.md)
- [Codeunit 46911 "BC14 VAT Post. Setup Migrator"](../codeunit/46911.md)
- [Codeunit 46912 "BC14 Salesp./Purch. Migrator"](../codeunit/46912.md)
- [Codeunit 46913 "BC14 Shipment Method Migrator"](../codeunit/46913.md)
- [Codeunit 46914 "BC14 Territory Migrator"](../codeunit/46914.md)
- [Codeunit 46915 "BC14 Item Category Migrator"](../codeunit/46915.md)
- [Codeunit 46916 "BC14 Item Trk. Code Migrator"](../codeunit/46916.md)
- [Codeunit 46917 "BC14 Tariff Number Migrator"](../codeunit/46917.md)
- [Codeunit 46918 "BC14 Location Migrator"](../codeunit/46918.md)
- [Codeunit 46919 "BC14 Reason Code Migrator"](../codeunit/46919.md)
- [Codeunit 46920 "BC14 Source Code Migrator"](../codeunit/46920.md)
- [Codeunit 46921 "BC14 Cust. Price Grp. Migrator"](../codeunit/46921.md)
- [Codeunit 46922 "BC14 Cust. Disc. Grp. Migrator"](../codeunit/46922.md)
- [Codeunit 46923 "BC14 Item Disc. Grp. Migrator"](../codeunit/46923.md)
- [Codeunit 46924 "BC14 Fin. Chrg. Terms Migrator"](../codeunit/46924.md)
- [Codeunit 46925 "BC14 Reminder Terms Migrator"](../codeunit/46925.md)
- [Codeunit 46926 "BC14 Reminder Level Migrator"](../codeunit/46926.md)
- [Codeunit 46927 "BC14 Reminder Text Migrator"](../codeunit/46927.md)
- [Codeunit 46928 "BC14 No. Series Migrator"](../codeunit/46928.md)
- [Codeunit 46929 "BC14 No. Series Line Migrator"](../codeunit/46929.md)
- [Codeunit 46930 "BC14 Item Attribute Migrator"](../codeunit/46930.md)
- [Codeunit 46931 "BC14 Item Attr. Value Migrator"](../codeunit/46931.md)
- [Codeunit 46932 "BC14 Cust. Bank Acct. Migrator"](../codeunit/46932.md)
- [Codeunit 46933 "BC14 Vend. Bank Acct. Migrator"](../codeunit/46933.md)
- and 13 more: data/code/graph/29/calls.json

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "BC14 Migrator")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "BC14 Migrator"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
