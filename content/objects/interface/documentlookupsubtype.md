---
id: object/interface/documentlookupsubtype
type: object
title: Interface "DocumentLookupSubType"
summary: Interface "DocumentLookupSubType" in SalesLinesSuggestions (Microsoft.Sales.Document). 1 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - saleslinessuggestions
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
  at: "2026-10-08T06:17:47.117Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 286ef47ca836b699148306c29df52b71363a3f48406db367e954cc45bc252849
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/SalesLinesSuggestions/app/SalesAzureOpenAITools/DocumentLookupImpl/DocumentLookupSubType.Interface.al
    title: src/Apps/W1/SalesLinesSuggestions/app/SalesAzureOpenAITools/DocumentLookupImpl/DocumentLookupSubType.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
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
name: DocumentLookupSubType
namespace: Microsoft.Sales.Document
app: SalesLinesSuggestions
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
  procedures: 1
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
  implemented_by: 6
---

# Interface "DocumentLookupSubType"

> Interface "DocumentLookupSubType" in SalesLinesSuggestions (Microsoft.Sales.Document). 1 public procedures. Introduced in BC29, still in BC30.

SalesLinesSuggestions · Microsoft.Sales.Document · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/W1/SalesLinesSuggestions/app/SalesAzureOpenAITools/DocumentLookupImpl/DocumentLookupSubType.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | Internal |

## Procedures

- `SearchSalesDocument(CustomDimension: Dictionary of [Text, Text]; var TempSalesLineAiSuggestion: Record "Sales Line AI Suggestions" temporary)`: This procedure is used to look up documents, copy the document lines and assign them the temporary Record Sales Line AI Suggestions. -CustomDimension: This can be used to pass contextual information to the function. -TempSalesLineAiSuggestion: This is a temporary record that will be used to return t...

## Implemented by

- [Codeunit 7281 "BlanketSalesOrderLookup"](../codeunit/7281.md)
- [Codeunit 7286 "SalesInvoiceLookup"](../codeunit/7286.md)
- [Codeunit 7287 "SalesOrderLookup"](../codeunit/7287.md)
- [Codeunit 7288 "SalesQuoteLookup"](../codeunit/7288.md)
- [Codeunit 7289 "SalesShipmentLookup"](../codeunit/7289.md)
- [Enum 7279 "Document Lookup Types"](../enum/7279.md)

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). The call sections above are our own, per object, from the BC29 call graph. For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "DocumentLookupSubType")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.
