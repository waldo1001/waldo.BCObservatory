---
id: object/interface/custom-migration-provider
type: object
title: Interface "Custom Migration Provider"
summary: Interface "Custom Migration Provider" in HybridBaseDeployment (Microsoft.DataMigration). 6 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: d7d4b66d7c32d490856c645341ebabcf2555b3842fdcb9061bf8e62183029685
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/HybridBaseDeployment/app/src/CustomMigration/Interfaces/CustomMigrationProvider.Interface.al
    title: src/Apps/W1/HybridBaseDeployment/app/src/CustomMigration/Interfaces/CustomMigrationProvider.Interface.al (releases/29.x)
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
name: Custom Migration Provider
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
  procedures: 6
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

# Interface "Custom Migration Provider"

> Interface "Custom Migration Provider" in HybridBaseDeployment (Microsoft.DataMigration). 6 public procedures. Introduced in BC29, still in BC30.

HybridBaseDeployment · Microsoft.DataMigration · BC29-30 · [source at fe31a425](https://github.com/microsoft/BCApps/blob/fe31a4253b4aa8fde426364f132f5689d4dfcddf/src/Apps/W1/HybridBaseDeployment/app/src/CustomMigration/Interfaces/CustomMigrationProvider.Interface.al) · facts from BC29

## Procedures

- `GetDisplayName(): Text[250]`
- `GetDescription(): Text`: Gets a description for the migration type. This value is shown in the wizard.
- `GetAppId(): Guid`: Gets the ID of the app that defines the implementation.
- `SetupReplicationTableMappings()`: Sets up the replication table mappings. These mappings are used to move the data during the replication phase. This is the default way to move the data.
- `SetupMigrationSetupTableMappings()`: Sets up the migration setup table mappings. These mappings are used to replicate the data during the setup to SaaS, so the on-premise data can be used to configure the migration. It is recommended to move a small subset of the tables that do not contain large amounts of data, otherwise the setup wil...
- `GetDemoDataType(): Enum "Company Demo Data Type"`: Returns the demo data type that will be used to create the companies in SaaS. Most common types are: "Production - Setup Data Only" - setup data only - this will populate the setup. "Create New - No Data" - empty company. In this case you need to ensure that the setup data is created. This option is...

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "Custom Migration Provider")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "Custom Migration Provider"`

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
