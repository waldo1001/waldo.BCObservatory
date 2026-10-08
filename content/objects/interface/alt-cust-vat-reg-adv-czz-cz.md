---
id: object/interface/alt-cust-vat-reg-adv-czz-cz
type: object
title: Interface "Alt. Cust. VAT Reg. Adv. CZZ" (CZ)
summary: Interface "Alt. Cust. VAT Reg. Adv. CZZ" (CZ) in the CZ country layer (Microsoft.Finance.AdvancePayments). 3 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - cz layer
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
  input_hash: a42a463f6f75033dda85556f2f0f6d0cabd981fcef76a86b631dfabb1a57cfa2
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/CZ/AdvancePaymentsLocalization/app/Src/Interfaces/AltCustVATRegAdvCZZ.Interface.al
    title: src/Apps/CZ/AdvancePaymentsLocalization/app/Src/Interfaces/AltCustVATRegAdvCZZ.Interface.al (releases/29.x)
    date: null
    commit: 47ed09ca325f485d61415c1d6926ab8f0518336d
    t: null
    quote: null
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations:
    - localization/cz
  videos: []
  posts: []
  guidelines: []
object_type: interface
object_id: null
name: Alt. Cust. VAT Reg. Adv. CZZ
namespace: Microsoft.Finance.AdvancePayments
app: AdvancePaymentsLocalization
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
country: CZ
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

# Interface "Alt. Cust. VAT Reg. Adv. CZZ" (CZ)

> Interface "Alt. Cust. VAT Reg. Adv. CZZ" (CZ) in the CZ country layer (Microsoft.Finance.AdvancePayments). 3 public procedures. Introduced in BC29, still in BC30.

CZ country layer · Microsoft.Finance.AdvancePayments · BC29-30 · [source at 47ed09ca](https://github.com/microsoft/BCApps/blob/47ed09ca325f485d61415c1d6926ab8f0518336d/src/Apps/CZ/AdvancePaymentsLocalization/app/Src/Interfaces/AltCustVATRegAdvCZZ.Interface.al) · facts from BC29

An object of the [CZ localization](../../localizations/cz.md), not part of W1.

## Properties

| Property | Value |
|---|---|
| Access | Public |

## Procedures

- `Init(var SalesAdvLetterHeaderCZZ: Record "Sales Adv. Letter Header CZZ"; xSalesAdvLetterHeaderCZZ: Record "Sales Adv. Letter Header CZZ")`: Initializes the VAT registration data taken from the alternative customer registration in the sales advance letter header.
- `CopyFromCustomer(var SalesAdvLetterHeaderCZZ: Record "Sales Adv. Letter Header CZZ"; xSalesAdvLetterHeaderCZZ: Record "Sales Adv. Letter Header CZZ")`: Copies the VAT registration data from the customer to the sales advance letter header.
- `UpdateSetupOnVATCountryChangeInSalesAdvLetterHeader(var SalesAdvLetterHeaderCZZ: Record "Sales Adv. Letter Header CZZ"; xSalesAdvLetterHeaderCZZ: Record "Sales Adv. Letter Header CZZ")`: Updates the VAT registration data when the VAT Country/Region Code is changed in the sales advance letter header.

## Across versions

- Present in: BC29-30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).

## Ask your agent

Procedure bodies are not stored here (D10). For a procedure body or the calls of one procedure, ask bc-code-atlas (external, by Stefan Maron, MIT; default corpus w1-28), which the bc-observatory plugin connects: `bcatlas_resolve_node(object_type: "interface", object_name: "Alt. Cust. VAT Reg. Adv. CZZ")`, then `bcatlas_get_procedure_body` or `bcatlas_get_neighbors` on the returned id.

A CZ country object, not part of W1: the default corpus does not have it; `bcatlas_list_countries` shows which countries the atlas has.
