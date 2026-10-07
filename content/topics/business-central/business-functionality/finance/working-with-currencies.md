---
id: topic/business-central/business-functionality/finance/working-with-currencies
type: topic
title: Working with currencies
summary: Working with currencies in Business Central covers setting up currency codes, exchange rates and multi-currency settings, and keeping exchange rates up to date. It answers questions about foreign exchange operations, manual and automatic rate updates, and gains and losses on posted transactions.
tier: official
language: en
system: finance
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:31.746Z"
  flags: []
generated:
  at: "2026-10-07T13:37:30.849Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5c58baa0d58f1d146fa94d9a28fd18ebc371b6af65e8d6e96a33266db050bca6
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-currencies
    title: Currencies in Business Central
    date: "2024-08-09"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/finance-how-update-currencies
    title: Update currency exchange rates
    date: "2026-06-16"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/finance-currencies
    - https://learn.microsoft.com/dynamics365/business-central/finance-how-update-currencies
  objects: []
  features: []
  topics:
    - topic/business-central/business-functionality/finance
  localizations: []
  videos:
    - video/u1oO9MEg9kc
  posts:
    - post/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-1716125815035715885--34eb3d4362
  guidelines: []
  changes:
    - change/bcapps/10216
    - change/bcapps/10459
    - change/bcapps/10717
    - change/bcapps/10808
    - change/bcapps/10893
    - change/bcapps/10969
    - change/bcapps/11163
    - change/bcapps/11632
    - change/bcapps/11635
    - change/bcapps/11727
    - change/bcapps/11848
    - change/bcapps/9254
    - change/bcapps/9349
    - change/bcapps/9405
    - change/bcapps/9686
    - change/bcapps/9943
learn_toc_path:
  - Business functionality
  - Finance
  - Working with currencies
toc_file: business-central/TOC.md
parent: topic/business-central/business-functionality/finance
children: []
coverage:
  learn: 2
  code: 0
  video: 1
  blog: 1
  guideline: 0
bc_forms:
  - 5
  - 118
member_hash: c65681f76488b6d62ac5f7a68a84bf1bdfac78b07d864f8daca0257b69741bc3
narrative: generated
---

# Working with currencies

> Working with currencies in Business Central covers setting up currency codes, exchange rates and multi-currency settings, and keeping exchange rates up to date. It answers questions about foreign exchange operations, manual and automatic rate updates, and gains and losses on posted transactions.

Path: [Business functionality](../../business-functionality.md) > [Finance](../finance.md) > Working with currencies · tier official · system finance · narrative reviewed by Opus

## Overview

This section explains how Business Central handles transactions in more than one currency. It has two pages: one on the basic currency setup, and one on keeping exchange rates current.

Start with "Currencies in Business Central". It describes currency codes, exchange rates (FX rates), how local currency values are calculated, and the additional reporting currency. Then read "Update currency exchange rates". It covers manual and automatic rate updates, adjusting exchange rates for posted transactions, and the currency exchange rate service for external rates.

## Key points

- Currency codes, exchange rates and related settings must be specified before multi-currency transactions can be handled.
- Local currency values are calculated from the exchange rates you set up.
- An additional reporting currency can be used alongside the local currency.
- Exchange rates can be updated manually or automatically.
- A currency exchange rate service can bring in rates from an external source.
- Exchange rates can be adjusted for posted transactions.
- The adjustment process deals with realized and unrealized gains and losses.

## Learn pages

- [Currencies in Business Central](https://learn.microsoft.com/dynamics365/business-central/finance-currencies): Learn how to define your local currency and the foreign currencies that your business uses.
- [Update currency exchange rates](https://learn.microsoft.com/dynamics365/business-central/finance-how-update-currencies): Learn how to use Business Central to adjust exchange rates for amounts in different currencies.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10216 Fix Purchase Journal document amount decimal formatting](../../../../changes/bcapps/10216.md) (code change): "Document Amount field uses Currency Code as its auto-format expression"
- [#10459 Bug 647298: Incorrect currency conversion rates for new currencies](../../../../changes/bcapps/10459.md) (code change): "Currency exchange rates in the Contoso demo dataset were corrected"
- [#10717 Enable amount formatting with currency symbols](../../../../changes/bcapps/10717.md) (code change): "Amount formatting now supports displaying currency symbols or ISO codes"
- [#10808 [master] Adjustment Amount is not accurate in the Exch. Rate Adjmt. Ledger Entries page if an Unrealized Gain gest registered and a second adjustment turns into a Loss.](../../../../changes/bcapps/10808.md) (code change): "correctly calculates adjustment amounts in exchange rate adjustment ledger entries"
- [#10893 Bug 648568: [29.x] Incorrect currency conversion rates for new currencies](../../../../changes/bcapps/10893.md) (code change): "Currency exchange rates in the demo dataset have been corrected to resolve inaccurate conversion values"
- [#10969 [MAIN][All-e]Source Currency Inconsistency for LCY Postings and cash posting on sales documents](../../../../changes/bcapps/10969.md) (code change): "Source currency is now consistently applied to local currency postings and cash posting"
- [#11163 [29.x]Adjustment Amount is not accurate in the Exch. Rate Adjmt. Ledger Entries page if an Unrealized Gain gest registered and a second adjustment turns into a Loss.](../../../../changes/bcapps/11163.md) (code change): "Exchange Rate Adjustment process now correctly calculates individual adjustment amounts"
- [#11632 [29.X]-Source Currency Amount calculation causes discrepancies with Foreign Currency G/L Entries whit Reversal Charge VAT.](../../../../changes/bcapps/11632.md) (code change): "Fixed source currency amount calculation in the General Journal posting"
- [#11635 Bugs/Bug 647818 Source Currency Amount FCY GL Entries Reversal Charged](../../../../changes/bcapps/11635.md) (code change): "source currency amount handling in foreign currency general ledger entries"
- [#11727 Bug 650737: Description for new currencies should be aligned with existing full descriptions](../../../../changes/bcapps/11727.md) (code change): "Currency labels in demo data now include country names"
- [#11848 [main] Report 11564, Foreign Currency Layout: foreign currency opening balance is not included](../../../../changes/bcapps/11848.md) (code change): "foreign currency opening balance is not included. Report 11564"
- [#9254 [Master] Exchange Rate Adjustment filter not working](../../../../changes/bcapps/9254.md) (code change): "Exchange Rate Adjustment filter logic was corrected to properly apply filters"
- [#9349 [master]-[ES][Cartera Bills] Applying a foreign-currency payment to a bill that leads to gain-loss entry cannot be reversed](../../../../changes/bcapps/9349.md) (code change): "Reversal of foreign-currency payments with gain-loss entries now works correctly"
- [#9405 [FI] Delocalize FI Currency Exchange Rate import into FI Core](../../../../changes/bcapps/9405.md) (code change): "Finnish currency exchange rate import functionality moved from the base application"
- [#9686 [Master] Incorrect Payables Account Selected for Unrealized Gain/Loss in Multi-Posting Group FCY Applications.](../../../../changes/bcapps/9686.md) (code change): "Foreign currency unrealized gain/loss posting now selects the correct payables account"
- [#9943 [Master]-Purchase invoice in USD with deferral shows 0 "Amount LCY" in Deferral Schedule View"](../../../../changes/bcapps/9943.md) (code change): "Purchase invoice in USD with deferral shows 0 Amount LCY"
- [How to Add Currency Symbols to Numeric Fields in Business Central.](../../../../posts/sauravdhyani-com/tag-blogger-com-1999-blog-3122193036149030463-post-1716125815035715885--34eb3d4362.md) (community post): "configurable currency symbols on numeric fields to help finance users"
- [What's New: Financial Management - G/L Account Revaluations (2024 release wave 1)](../../../../videos/u1oO9MEg9kc.md) (video): "GL Account Revaluation; currency revaluation; exchange rate adjustments"

## Business Central pages and reports

Learn's ms.search.form names these object ids (not yet joined to the code pillar): 5, 118.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
