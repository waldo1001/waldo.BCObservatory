---
id: object/interface/contract-price-update
type: object
title: Interface "Contract Price Update"
summary: Interface "Contract Price Update" in Subscription Billing (Microsoft.SubscriptionBilling). 4 public procedures. Introduced in BC29, still in BC30.
tier: official
language: en
tags:
  - interface
  - subscription billing
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
  at: "2026-10-06T17:21:46.353Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 0052e5757db66ddac21f7f66c84ef477051a8ab491f74d7bd0bd4d3d80521f5e
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Subscription%20Billing/app/Contract%20Price%20Update/Interfaces/ContractPriceUpdate.Interface.al
    title: src/Apps/W1/Subscription Billing/app/Contract Price Update/Interfaces/ContractPriceUpdate.Interface.al (releases/29.x)
    date: null
    commit: d7c9c667c671da2cda3a0738b18ed99ca4181765
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
name: Contract Price Update
namespace: Microsoft.SubscriptionBilling
app: Subscription Billing
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
---

# Interface "Contract Price Update"

> Interface "Contract Price Update" in Subscription Billing (Microsoft.SubscriptionBilling). 4 public procedures. Introduced in BC29, still in BC30.

Subscription Billing · Microsoft.SubscriptionBilling · BC29-30 · [source at d7c9c667](https://github.com/microsoft/BCApps/blob/d7c9c667c671da2cda3a0738b18ed99ca4181765/src/Apps/W1/Subscription%20Billing/app/Contract%20Price%20Update/Interfaces/ContractPriceUpdate.Interface.al) · facts from BC29

## Properties

| Property | Value |
|---|---|
| Access | internal |

## Procedures

- `SetPriceUpdateParameters(PriceUpdateTemplate: Record "Price Update Template"; IncludeContractLinesUpToDate: Date; PerformUpdateOnDate: Date)`: This method sets minimal needed parameters for updating the contract prices.
- `ApplyFilterOnServiceCommitments()`: The method applies filters on Subscription Lines which should be processed for price update.
- `CreatePriceUpdateProposal()`: The metod creates implemented price update proposal.
- `CalculateNewPrice(UpdatePercentValue: Decimal; var NewContractPriceUpdateLine: Record "Sub. Contr. Price Update Line")`: The method calculates the New Price in Contract Price Update Line parameter based on Update Percent Value.

## Across versions

- Present in: BC29, BC30
- Changed (declaration) in: none

Source: AL metadata extracted from the code (names, ids, signatures, properties); no code bodies (D10).
