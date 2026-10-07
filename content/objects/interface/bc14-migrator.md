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
  at: "2026-10-07T15:47:18.976Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 83052889738f9b1b4ccde9ecc0b8316ed8f9530fbb43419f10180a3ed01bf5e6
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/HybridBC14/app/src/Migration/BC14Migrator.Interface.al
    title: src/Apps/W1/HybridBC14/app/src/Migration/BC14Migrator.Interface.al (releases/29.x)
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
---

# Interface "BC14 Migrator"

> Interface "BC14 Migrator" in HybridBC14 (Microsoft.DataMigration.BC14Reimplementation). 5 public procedures. Introduced in BC29, still in BC30.

HybridBC14 · Microsoft.DataMigration.BC14Reimplementation · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/HybridBC14/app/src/Migration/BC14Migrator.Interface.al) · facts from BC29

## Procedures

- `GetDisplayName(): Text[250]`
- `RegisterReplicationMappings(CompanyName: Text)`: Registers the source-to-buffer replication table mappings owned by this migrator for the given company. May register zero, one, or multiple mappings (e.g. a Posted document migrator registers both Header and Line). Implementations should call Codeunit "BC14 Migration Setup".InsertPerCompanyMapping f...
- `IsEnabled(): Boolean`: Checks if the migrator is enabled based on current settings.
- `Migrate(): Boolean`: Runs the migration for all source records. Implementations own the record loop and data transfer logic.
- `GetRemainingPercentage(): Integer`: Gets the remaining migration percentage (100 = all remaining, 0 = all migrated). Percentage-based because a single migrator may handle multiple related entities.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "BC14 Migrator")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "BC14 Migrator"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
