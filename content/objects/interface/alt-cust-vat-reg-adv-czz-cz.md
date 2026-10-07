---
id: object/interface/alt-cust-vat-reg-adv-czz-cz
type: object
title: Interface "Alt. Cust. VAT Reg. Adv. CZZ" (CZ)
summary: Interface "Alt. Cust. VAT Reg. Adv. CZZ" (CZ) in the CZ country layer (Microsoft.Finance.AdvancePayments). 3 public procedures. Introduced in BC29, gone after BC29.
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
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T09:46:58.909Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: fd86463bde5cac01c57d186e855cd756c3804fba6686f657ff7a2b1834d959bc
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/CZ/AdvancePaymentsLocalization/app/Src/Interfaces/AltCustVATRegAdvCZZ.Interface.al
    title: src/Apps/CZ/AdvancePaymentsLocalization/app/Src/Interfaces/AltCustVATRegAdvCZZ.Interface.al (releases/29.x)
    date: null
    commit: 1d24dd5ee2a734510f0556ccc69342d0e616db2f
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
last_version: "29"
present_in:
  - "29"
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

> Interface "Alt. Cust. VAT Reg. Adv. CZZ" (CZ) in the CZ country layer (Microsoft.Finance.AdvancePayments). 3 public procedures. Introduced in BC29, gone after BC29.

CZ country layer · Microsoft.Finance.AdvancePayments · BC29 · [source at 1d24dd5e](https://github.com/microsoft/BCApps/blob/1d24dd5ee2a734510f0556ccc69342d0e616db2f/src/Apps/CZ/AdvancePaymentsLocalization/app/Src/Interfaces/AltCustVATRegAdvCZZ.Interface.al) · facts from BC29

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

- Present in: BC29
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
