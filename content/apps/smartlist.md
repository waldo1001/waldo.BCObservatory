---
id: app/smartlist
type: app
title: SmartList
summary: "SmartList: 47 objects in BC29-30 (45 queries, 2 codeunits); no Learn hub documents its objects yet."
tier: official
language: en
tags:
  - first-party app
  - development
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T16:25:37.512Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c69eaff0a370adec18cd0de3b8f061b358b350f43b299d97b2a54b602806be47
evidence:
  - kind: code
    url: https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/SmartList/app
    title: src/Apps/W1/SmartList/app (main)
    date: null
    commit: 9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa
    t: null
    quote: null
links:
  learn: []
  objects:
    - object/codeunit/2480
    - object/codeunit/2481
    - object/query/2400
    - object/query/2401
    - object/query/2402
    - object/query/2403
    - object/query/2450
    - object/query/2451
    - object/query/2452
    - object/query/2453
    - object/query/2454
    - object/query/2455
    - object/query/2456
    - object/query/2457
    - object/query/2458
    - object/query/2459
    - object/query/2460
    - object/query/2461
    - object/query/2462
    - object/query/2463
    - object/query/2464
    - object/query/2465
    - object/query/2467
    - object/query/2468
    - object/query/2469
    - object/query/2470
    - object/query/2471
    - object/query/2500
    - object/query/2501
    - object/query/2502
    - object/query/2504
    - object/query/2506
    - object/query/2507
    - object/query/2508
    - object/query/2510
    - object/query/2511
    - object/query/2512
    - object/query/2513
    - object/query/2514
    - object/query/2515
    - object/query/2550
    - object/query/2552
    - object/query/2553
    - object/query/2554
    - object/query/2556
    - object/query/2557
    - object/query/2558
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
app: SmartList
namespace_root: null
present_in:
  - "29"
  - "30"
counts:
  objects: 47
  by_type:
    query: 45
    codeunit: 2
  hubs: 0
  videos: 0
  posts: 0
---

# SmartList

> SmartList: 47 objects in BC29-30 (45 queries, 2 codeunits); no Learn hub documents its objects yet.

First-party app · folder `src/Apps/W1/SmartList/app` · BC29-30 · system development · facts from the code pillar and the joins, nothing machine-written

## Objects

47 objects, by type.

### Codeunits (2)

| Id | Name | Caption |
|---|---|---|
| 2480 | [SmartList Install](../objects/codeunit/2480.md) |  |
| 2481 | [SmartList Upgrade](../objects/codeunit/2481.md) |  |

### Queries (45)

| Id | Name | Caption |
|---|---|---|
| 2400 | [Account Summary](../objects/query/2400.md) |  |
| 2401 | [General Ledger Entries](../objects/query/2401.md) |  |
| 2402 | [Bank Acct Ledger Entries](../objects/query/2402.md) | Bank Account Ledger Entries |
| 2403 | [GL Entries with Dimensions](../objects/query/2403.md) | General Ledger Entries with Dimensions |
| 2450 | [Customer Ship To Addresses](../objects/query/2450.md) |  |
| 2451 | [CustomerAndSalesperson](../objects/query/2451.md) | Customer and Salesperson |
| 2452 | [Blocked Customers](../objects/query/2452.md) |  |
| 2453 | [CustomersWithCreditLimit](../objects/query/2453.md) | Customers with credit limits |
| 2454 | [Unposted Sales Trx Quotes](../objects/query/2454.md) | Unposted Sales Transactions (Quotes) |
| 2455 | [Unposted Sales Trx Orders](../objects/query/2455.md) | Unposted Sales Transactions (Orders) |
| 2456 | [Unposted Sales Trx Invoices](../objects/query/2456.md) | Unposted Sales Transactions (Invoices) |
| 2457 | [Unposted Sales Trx Returns](../objects/query/2457.md) | Unposted Sales Transactions (Returns) |
| 2458 | [Unposted Sales Trx Credit Memo](../objects/query/2458.md) | Unposted Sales Transactions (Credit Memos) |
| 2459 | [Unposted Sales Trx Blnkt Ordr](../objects/query/2459.md) | Unposted Sales Transactions (Blanket Sales Orders) |
| 2460 | [Posted Sales Invoices](../objects/query/2460.md) |  |
| 2461 | [Posted Sales Credit Memos](../objects/query/2461.md) |  |
| 2462 | [Unposted Sales Line Quotes](../objects/query/2462.md) | Unposted Sales Line Items (Quotes) |
| 2463 | [Posted Sales I Line Item](../objects/query/2463.md) | Posted Sales Invoice Line Items |
| 2464 | [Posted Sales C Memo Line Item](../objects/query/2464.md) | Posted Sales Credit Memo Line Items |
| 2465 | [Customer And Contact](../objects/query/2465.md) |  |
| 2467 | [Unposted Sales Line Orders](../objects/query/2467.md) | Unposted Sales Line Items (Orders) |
| 2468 | [Unposted Sales Line Invoices](../objects/query/2468.md) | Unposted Sales Line Items (Invoices) |
| 2469 | [Unposted Sales Line Returns](../objects/query/2469.md) | Unposted Sales Line Items (Returns) |
| 2470 | [Unposted Sales Line Crdt Memo](../objects/query/2470.md) | Unposted Sales Line Items (Credit Memos) |
| 2471 | [Unposted Sales Line Blkt Ordr](../objects/query/2471.md) | Unposted Sales Line Items (Blanket Sales Orders) |
| 2500 | [Vendor Order Addresses](../objects/query/2500.md) |  |
| 2501 | [Vendor And Purchaser](../objects/query/2501.md) | Vendor and Purchaser |
| 2502 | [Blocked Vendors](../objects/query/2502.md) |  |
| 2504 | [Vendor Balance](../objects/query/2504.md) |  |
| 2506 | [Purchasing Rcpt Line Items](../objects/query/2506.md) | Posted Purchasing Receipt Line Items |
| 2507 | [Purchase Orders](../objects/query/2507.md) |  |
| 2508 | [Purchase Order Line Items](../objects/query/2508.md) |  |
| 2510 | [Purchasing Trx Invoices](../objects/query/2510.md) | Posted Purchasing Transactions Invoices |
| 2511 | [Purchasing Trx Crdt Memos](../objects/query/2511.md) | Posted Purchasing Transactions Credit Memos |
| 2512 | [Blanket Purchase Orders](../objects/query/2512.md) |  |
| 2513 | [Blanket Purchase Order Lines](../objects/query/2513.md) |  |
| 2514 | [Purchasing Inv Line Items](../objects/query/2514.md) | Posted Purchasing Invoice Line Items |
| 2515 | [Purchasing Cr Memo Line Items](../objects/query/2515.md) | Posted Purchasing Credit Memo Line Items |
| 2550 | [Items](../objects/query/2550.md) | Blocked Items |
| 2552 | [Item Quantities](../objects/query/2552.md) |  |
| 2553 | [Item Purchase Receipts](../objects/query/2553.md) |  |
| 2554 | [Items By Location](../objects/query/2554.md) |  |
| 2556 | [Negative Quantity Items](../objects/query/2556.md) |  |
| 2557 | [Items Overdue For Count](../objects/query/2557.md) |  |
| 2558 | [Items Due For Count](../objects/query/2558.md) |  |

Source: [src/Apps/W1/SmartList/app](https://github.com/microsoft/BCApps/tree/9df55025ee6eb2a1346ddad3a8a55d1ba1ff75aa/src/Apps/W1/SmartList/app); objects from data/code/, hubs from data/index/docs-objects.json through the object pages.
