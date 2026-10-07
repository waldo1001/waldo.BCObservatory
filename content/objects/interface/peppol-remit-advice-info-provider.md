---
id: object/interface/peppol-remit-advice-info-provider
type: object
title: Interface "PEPPOL Remit. Advice Info Provider"
summary: Interface "PEPPOL Remit. Advice Info Provider" in PEPPOL (Microsoft.Peppol). 3 public procedures. Introduced in BC29, still in BC30.
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
  input_hash: 3f6ffbaf7351542beca793c75c4c61d5fd74baebb0ca8efe36db755c2a10e0f3
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLRemitAdviceInfoProvider.Interface.al
    title: src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLRemitAdviceInfoProvider.Interface.al (releases/29.x)
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
  changes:
    - change/bcapps/9578
object_type: interface
object_id: null
name: PEPPOL Remit. Advice Info Provider
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
  procedures: 3
  events: 0
  subscribers: 0
relations:
  out: 0
  referenced_by: 0
  pages: 0
  extended_by: 0
  event_subscribers: 0
---

# Interface "PEPPOL Remit. Advice Info Provider"

> Interface "PEPPOL Remit. Advice Info Provider" in PEPPOL (Microsoft.Peppol). 3 public procedures. Introduced in BC29, still in BC30.

PEPPOL · Microsoft.Peppol · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/W1/PEPPOL/app/src/Interfaces/PEPPOLRemitAdviceInfoProvider.Interface.al) · facts from BC29

## Procedures

- `GetPayeePartyInfo(Vendor: Record Vendor; var PayeeEndpointID: Text; var PayeeSchemeID: Text; var PayeePartyName: Text)`
- `GetPaymentMeansInfo(RemitAdviceBuffer: Record "Remit. Advice Buffer" temporary; var PaymentMeansCode: Text; var PayeeFinancialAccountID: Text)`: Gets payment means information for the PEPPOL remittance advice from the buffer's header row.
- `GetDocumentIdentification(var CustomizationID: Text; var ProfileID: Text)`: Gets the document identification (CustomizationID/ProfileID) for the PEPPOL remittance advice header. No PEPPOL BIS profile exists for remittance advice yet, so the default implementation returns both empty (the elements are omitted); a localization can supply its own values by overriding this metho...

## Recent changes

- 2026-08-11 [#9578 [E-Documents Core] - Enabling remittance advice export via E-Documents (payment journal + posted payments)](../../changes/bcapps/9578.md) (main, BC30, feature, added)

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "PEPPOL Remit. Advice Info Provider")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "PEPPOL Remit. Advice Info Provider"`

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
