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
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-31T00:48:20.076Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 5d4db4db499442bf28641194dd7c67e26679b2e119a847bdb721744a6a4c6f1a
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/8e740e5061595dd231c4a2d9d453c86c84ec76ae/src/Apps/W1/HybridBaseDeployment/app/src/CustomMigration/Interfaces/CustomMigrationTableMapping.Interface.al
    title: src/Apps/W1/HybridBaseDeployment/app/src/CustomMigration/Interfaces/CustomMigrationTableMapping.Interface.al (releases/29.x)
    date: null
    commit: 8e740e5061595dd231c4a2d9d453c86c84ec76ae
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-custom-migration
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

HybridBaseDeployment · Microsoft.DataMigration · BC29-30 · [source at 8e740e50](https://github.com/microsoft/BCApps/blob/8e740e5061595dd231c4a2d9d453c86c84ec76ae/src/Apps/W1/HybridBaseDeployment/app/src/CustomMigration/Interfaces/CustomMigrationTableMapping.Interface.al) · facts from BC29

## Procedures

- `GetReplicationTableMappingName(): Text`
- `GetMigrationSetupTableMappingName(): Text`: Gets table name of the migration setup table mapping that is used to map the tables from source to destination during cloud migration setup phase. Table name must match the name of the table in SQL database exactly and must have an exact structure as expected by the migration framework, see official...
- `GetCompaniesTableName(): Text`: Returns the table name of the companies table. This table is used to get the list of the companies for the cloud migration. Companies table exists only in the source database. It can have any name, but it must have 2 fields : [Name] [nvarchar] 30, [Display Name] [nvarchar] 250. [Name] must be primar...
- `ShowConfigureMigrationTablesMappingStep(): Boolean`: Indicates whether to show the "Configure Migration Tables Mapping" step in the cloud migration wizard. Default value should be to return false, unless there is a need to allow users to change the values provided by the interfaces above.

## Implemented by

- [Codeunit 40034 "Custom Migration Provider"](../codeunit/40034.md)
- [Codeunit 46850 "BC14 Migration Provider"](../codeunit/46850.md)
- [Enum 4010 "Custom Migration Provider"](../enum/4010.md)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

## Documented on Microsoft Learn

- [Custom migration from any SQL source](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/cloud-migration-custom-migration) (names this object)

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Custom Migration Table Mapping")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
