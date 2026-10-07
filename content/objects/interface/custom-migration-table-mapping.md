---
id: object/interface/custom-migration-table-mapping
type: object
title: Interface "Custom Migration Table Mapping"
summary: Interface "Custom Migration Table Mapping" in HybridBaseDeployment (Microsoft.DataMigration). 4 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - hybridbasedeployment
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
  input_hash: ae00124416757ee94d5088d99056e94f201aa69d859ff273d2fbcf713e6006f2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/HybridBaseDeployment/app/src/CustomMigration/Interfaces/CustomMigrationTableMapping.Interface.al
    title: src/Apps/W1/HybridBaseDeployment/app/src/CustomMigration/Interfaces/CustomMigrationTableMapping.Interface.al (releases/29.x)
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
name: Custom Migration Table Mapping
namespace: Microsoft.DataMigration
app: HybridBaseDeployment
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
  implemented_by: 3
---

# Interface "Custom Migration Table Mapping"

> Interface "Custom Migration Table Mapping" in HybridBaseDeployment (Microsoft.DataMigration). 4 public procedures. Introduced in BC29, still in BC30.

HybridBaseDeployment · Microsoft.DataMigration · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/HybridBaseDeployment/app/src/CustomMigration/Interfaces/CustomMigrationTableMapping.Interface.al) · facts from BC29

## Procedures

- `GetReplicationTableMappingName(): Text`
- `GetMigrationSetupTableMappingName(): Text`: Gets table name of the migration setup table mapping that is used to map the tables from source to destination during cloud migration setup phase. Table name must match the name of the table in SQL database exactly and must have an exact structure as expected by the migration framework, see official...
- `GetCompaniesTableName(): Text`: Returns the table name of the companies table. This table is used to get the list of the companies for the cloud migration. Companies table exists only in the source database. It can have any name, but it must have 2 fields : [Name] [nvarchar] 30, [Display Name] [nvarchar] 250. [Name] must be primar...
- `ShowConfigureMigrationTablesMappingStep(): Boolean`: Indicates whether to show the "Configure Migration Tables Mapping" step in the cloud migration wizard. Default value should be to return false, unless there is a need to allow users to change the values provided by the interfaces above.

## Implemented by

- [Codeunit 40034 "Custom Migration Provider"](../codeunit/40034.md)
- [Codeunit 46850 "BC14 Migration Provider"](../codeunit/46850.md)
- [Enum 4010 "Custom Migration Provider"](../enum/4010.md)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Custom Migration Table Mapping")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Custom Migration Table Mapping"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
