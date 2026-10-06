---
id: video/tzX0qB9tiBs
type: video
title: "What's New in Manufacturing: Reverse Production Order Transactions (2025 release wave 1)"
summary: "Reversing production order transactions in Business Central manufacturing (2025 release wave 1): reversing output and consumption, reopening finished orders, undoing subcontracting receipts, and finishing orders without output. Demonstrated in a 4-minute walkthrough."
tier: official
language: en
tags:
  - reverse production order transactions
  - production order reopening
  - output reversal
  - consumption reversal
  - capacity ledger
  - work in progress writeoff
  - subcontracting reversal
  - item ledger entries
  - inventory cost adjustment
system: manufacturing
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T18:38:26.565Z"
  pipeline: 0.2.0
  prompts:
    extract-video: 1
    summarize-video: 2
  input_hash: 71b9a7a9c8c1a79eccfaa432c414df398c937bb67a1345513209ac31cdc37438
evidence:
  - kind: video
    url: https://www.youtube.com/watch?v=tzX0qB9tiBs&t=6s
    title: "What's New in Manufacturing: Reverse Production Order Transactions (2025 release wave 1)"
    date: "2025-04-01T15:01:14.000Z"
    commit: null
    t: 6
    quote: in this release we are adding capability to revert output or consumption transactions return unused raw materials back to the warehouse
  - kind: video
    url: https://www.youtube.com/watch?v=tzX0qB9tiBs&t=23s
    title: "What's New in Manufacturing: Reverse Production Order Transactions (2025 release wave 1)"
    date: "2025-04-01T15:01:14.000Z"
    commit: null
    t: 23
    quote: you can reopen finished production order and make necessary adjustment and then finish it again
  - kind: video
    url: https://www.youtube.com/watch?v=tzX0qB9tiBs&t=73s
    title: "What's New in Manufacturing: Reverse Production Order Transactions (2025 release wave 1)"
    date: "2025-04-01T15:01:14.000Z"
    commit: null
    t: 73
    quote: choose the reverse production order transaction which will generate a transaction with a negative quantity and populate all other relevant Fields
  - kind: video
    url: https://www.youtube.com/watch?v=tzX0qB9tiBs&t=99s
    title: "What's New in Manufacturing: Reverse Production Order Transactions (2025 release wave 1)"
    date: "2025-04-01T15:01:14.000Z"
    commit: null
    t: 99
    quote: we cancel consumption and we got raw materials back on the stock and there is an application between these two so cost is properly
  - kind: video
    url: https://www.youtube.com/watch?v=tzX0qB9tiBs&t=162s
    title: "What's New in Manufacturing: Reverse Production Order Transactions (2025 release wave 1)"
    date: "2025-04-01T15:01:14.000Z"
    commit: null
    t: 162
    quote: navigate to the purchase order and open the receipt select both lines linked to the production order and choose undo
  - kind: video
    url: https://www.youtube.com/watch?v=tzX0qB9tiBs&t=213s
    title: "What's New in Manufacturing: Reverse Production Order Transactions (2025 release wave 1)"
    date: "2025-04-01T15:01:14.000Z"
    commit: null
    t: 213
    quote: enable the ability to finish production orders without output in the manufacturing setup page
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
video_id: tzX0qB9tiBs
channel: yt-microsoft
source_name: Microsoft Dynamics 365 Business Central (YouTube)
url: https://www.youtube.com/watch?v=tzX0qB9tiBs
published_at: "2025-04-01T15:01:14.000Z"
duration_s: 262
captions: full
audience:
  - functional consultant
  - end user
  - administrator
chapters:
  - t: 0
    title: Overview of reverse production order transactions
  - t: 43
    title: "Demo setup: finished production order issues"
  - t: 73
    title: Reversing output and consumption transactions
  - t: 127
    title: Reopening and correcting finished orders
  - t: 162
    title: Handling subcontracting reversal and work in progress
  - t: 213
    title: Finishing orders without output and ledger entries
features:
  - name: Revert output or consumption transactions
    status: unclear
    t: 6
    verified: false
    status_source: video
  - name: Reopen finished production orders
    status: unclear
    t: 23
    verified: false
    status_source: video
  - name: Reverse production order transaction action
    status: unclear
    t: 73
    verified: false
    status_source: video
  - name: Undo receipt for subcontracting orders
    status: unclear
    t: 162
    verified: false
    status_source: video
  - name: Finish production orders without output
    status: unclear
    t: 193
    verified: false
    status_source: video
objects_mentioned:
  - table Capacity Ledger Entry
  - table Item Ledger Entry
  - page Manufacturing Setup
quotes:
  - t: 6
    text: in this release we are adding capability to revert output or consumption transactions return unused raw materials back to the warehouse
    check: exact
  - t: 23
    text: you can reopen finished production order and make necessary adjustment and then finish it again
    check: exact
  - t: 73
    text: choose the reverse production order transaction which will generate a transaction with a negative quantity and populate all other relevant Fields
    check: exact
  - t: 99
    text: we cancel consumption and we got raw materials back on the stock and there is an application between these two so cost is properly
    check: exact
  - t: 162
    text: navigate to the purchase order and open the receipt select both lines linked to the production order and choose undo
    check: fuzzy
  - t: 213
    text: enable the ability to finish production orders without output in the manufacturing setup page
    check: exact
---

# What's New in Manufacturing: Reverse Production Order Transactions (2025 release wave 1)

> Reversing production order transactions in Business Central manufacturing (2025 release wave 1): reversing output and consumption, reopening finished orders, undoing subcontracting receipts, and finishing orders without output. Demonstrated in a 4-minute walkthrough.

[Watch on YouTube](https://www.youtube.com/watch?v=tzX0qB9tiBs) · Microsoft Dynamics 365 Business Central (YouTube) · 2025-04-01 · 4:22 · tier official · **unreviewed** (machine-generated)

## Overview

The video covers new ways to correct mistakes in production orders. Output or consumption transactions can be reverted, unused raw materials can be returned to the warehouse, and errors in capacity ledger entries can be corrected. Finished production orders can be reopened, adjusted and finished again.

The demo shows the reverse production order transaction action, which creates a transaction with a negative quantity and fills in the other relevant fields. It then covers subcontracting, where the purchase receipt is undone to revert output, and finishing orders that have consumption or capacity but no output, with work in progress written off.

## Key points

- The reverse production order transaction action generates a transaction with a negative quantity and populates the other relevant fields.
- Reversed consumption puts raw materials back in stock and is applied against the original entry, so cost is handled correctly.
- Finished production orders can be reopened to make adjustments, then finished again.
- For subcontracting, open the purchase order receipt, select both lines linked to the production order and choose Undo to revert output.
- After undoing a subcontracting receipt, consumption stays unchanged and must be canceled manually.
- Finishing a production order without output requires enabling it in Manufacturing Setup; work in progress amounts are then written off.

## Chapters

- [0:00](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=0s) Overview of reverse production order transactions
- [0:43](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=43s) Demo setup: finished production order issues
- [1:13](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=73s) Reversing output and consumption transactions
- [2:07](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=127s) Reopening and correcting finished orders
- [2:42](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=162s) Handling subcontracting reversal and work in progress
- [3:33](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=213s) Finishing orders without output and ledger entries

## Features

| Feature | Status | At | Evidence |
|---|---|---|---|
| Revert output or consumption transactions | status not stated, demoed | [0:06](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=6s) |  |
| Reopen finished production orders | status not stated, demoed | [0:23](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=23s) |  |
| Reverse production order transaction action | status not stated, demoed | [1:13](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=73s) |  |
| Undo receipt for subcontracting orders | status not stated, demoed | [2:42](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=162s) |  |
| Finish production orders without output | status not stated, demoed | [3:13](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=193s) |  |

## AL objects mentioned

As heard in the captions; not yet verified against the code pillar.

- table "Capacity Ledger Entry" at [0:43](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=43s)
- table "Item Ledger Entry" at [1:39](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=99s)
- page "Manufacturing Setup" at [3:33](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=213s)

## Quotes

- [0:06](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=6s) "in this release we are adding capability to revert output or consumption transactions return unused raw materials back to the warehouse"
- [0:23](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=23s) "you can reopen finished production order and make necessary adjustment and then finish it again"
- [1:13](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=73s) "choose the reverse production order transaction which will generate a transaction with a negative quantity and populate all other relevant Fields"
- [1:39](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=99s) "we cancel consumption and we got raw materials back on the stock and there is an application between these two so cost is properly"
- [2:42](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=162s) "navigate to the purchase order and open the receipt select both lines linked to the production order and choose undo"
- [3:33](https://www.youtube.com/watch?v=tzX0qB9tiBs&t=213s) "enable the ability to finish production orders without output in the manufacturing setup page"
