---
id: object/interface/peppol-purchase-tax-info-provider
type: object
title: Interface "PEPPOL Purchase Tax Info Provider"
summary: Interface "PEPPOL Purchase Tax Info Provider" in PEPPOL (Microsoft.Peppol). 2 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - peppol
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
  input_hash: fe37a84e7cb8672d2d1f2602c475e86b95628362d656149bf2e756a22ebf73cb
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseTaxInfoProvider.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseTaxInfoProvider.Interface.al (releases/29.x)
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
name: PEPPOL Purchase Tax Info Provider
namespace: Microsoft.Peppol
app: PEPPOL
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
  procedures: 2
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "PEPPOL Purchase Tax Info Provider"

> Interface "PEPPOL Purchase Tax Info Provider" in PEPPOL (Microsoft.Peppol). 2 public procedures. Introduced in BC29, still in BC30.

PEPPOL · Microsoft.Peppol · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLPurchaseTaxInfoProvider.Interface.al) · facts from BC29

## Procedures

- `GetTaxTotals(PurchaseLine: Record "Purchase Line"; var VATAmtLine: Record "VAT Amount Line")`
- `GetTaxCategories(PurchaseLine: Record "Purchase Line"; var VATProductPostingGroupCategory: Record "VAT Product Posting Group")`: Gets tax categories from the purchase line and populates VAT product posting group category information.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "PEPPOL Purchase Tax Info Provider")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "PEPPOL Purchase Tax Info Provider"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
