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
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 6722386f8aa3c6d24e5ee473c5bc1885a1e105e3e5e92705799436dfbc589e2f
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/HybridBaseDeployment/app/src/CustomMigration/Interfaces/CustomMigrationTableMapping.Interface.al
    title: src/Apps/W1/HybridBaseDeployment/app/src/CustomMigration/Interfaces/CustomMigrationTableMapping.Interface.al (releases/29.x)
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
---

# Interface "Custom Migration Table Mapping"

> Interface "Custom Migration Table Mapping" in HybridBaseDeployment (Microsoft.DataMigration). 4 public procedures. Introduced in BC29, still in BC30.

HybridBaseDeployment · Microsoft.DataMigration · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/HybridBaseDeployment/app/src/CustomMigration/Interfaces/CustomMigrationTableMapping.Interface.al) · facts from BC29

## Procedures

- `GetReplicationTableMappingName(): Text`
- `GetMigrationSetupTableMappingName(): Text`: Gets table name of the migration setup table mapping that is used to map the tables from source to destination during cloud migration setup phase. Table name must match the name of the table in SQL database exactly and must have an exact structure as expected by the migration framework, see official...
- `GetCompaniesTableName(): Text`: Returns the table name of the companies table. This table is used to get the list of the companies for the cloud migration. Companies table exists only in the source database. It can have any name, but it must have 2 fields : [Name] [nvarchar] 30, [Display Name] [nvarchar] 250. [Name] must be primar...
- `ShowConfigureMigrationTablesMappingStep(): Boolean`: Indicates whether to show the "Configure Migration Tables Mapping" step in the cloud migration wizard. Default value should be to return false, unless there is a need to allow users to change the values provided by the interfaces above.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Custom Migration Table Mapping")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Custom Migration Table Mapping"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
