---
id: object/interface/irs-1099-iris-xml-us
type: object
title: Interface "IRS 1099 IRIS Xml" (US)
summary: Interface "IRS 1099 IRIS Xml" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - us layer
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
  input_hash: 98c19c18be874764452072352aa6818554cc29fbac23c067e6548c3597a9255e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISXml.Interface.al
    title: src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISXml.Interface.al (releases/29.x)
    date: null
    commit: 030de38360c4aa828a650300faf93cd09fa139e1
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/us
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: IRS 1099 IRIS Xml
namespace: Microsoft.Finance.VAT.Reporting
app: IRSForms
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
country: US
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

# Interface "IRS 1099 IRIS Xml" (US)

> Interface "IRS 1099 IRIS Xml" (US) in the US country layer (Microsoft.Finance.VAT.Reporting). 3 public procedures. Introduced in BC29, still in BC30.

US country layer · Microsoft.Finance.VAT.Reporting · BC29-30 · [source at 030de383](https://github.com/microsoft/BCApps/blob/030de38360c4aa828a650300faf93cd09fa139e1/src/Apps/US/IRSForms/app/src/Interface/IRS1099IRISXml.Interface.al) · facts from BC29

An object of the [US localization](../../localizations/us.md), not part of W1.

## Procedures

- `CreateTransmissionXmlContent(var Transmission: Record "Transmission IRIS"; TransmissionType: Enum "Transmission Type IRIS"; CorrectionToZeroMode: Boolean; var UniqueTransmissionId: Text[100]; var TempIRS1099FormDocHeader: Record "IRS 1099 Form Doc. Header" temporary; var TempBlob: Codeunit "Temp Blob")`
- `CreateGetStatusRequestXmlContent(SearchParamType: Enum "Search Param Type IRIS"; SearchId: Text; var TempBlob: Codeunit "Temp Blob")`: Creates an XML request to get the status of a previously submitted transmission. Response will contain status only and NOT error details.
- `CreateAcknowledgmentRequestXmlContent(SearchParamType: Enum "Search Param Type IRIS"; SearchId: Text; var TempBlob: Codeunit "Temp Blob")`: Creates an XML request to get the acknowledgment (status and error details) for a previously submitted transmission.

## Ask your agent

Procedure bodies and the full call graph are not stored here (D10). They are in bc-code-atlas, an external MCP server by Stefan Maron (MIT, not hosted here; default corpus w1-28, W1 of BC28), which the bc-observatory plugin connects:

- `bcatlas_resolve_node(object_type: "interface", object_name: "IRS 1099 IRIS Xml")`, then `bcatlas_get_neighbors` or `bcatlas_get_procedure_body` on the returned id.
- CLI: `node bc-code-atlas.js resolve-node interface "IRS 1099 IRIS Xml"`

A US country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
