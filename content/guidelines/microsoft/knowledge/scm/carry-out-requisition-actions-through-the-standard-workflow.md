---
id: guideline/microsoft/knowledge/scm/carry-out-requisition-actions-through-the-standard-workflow
type: guideline
title: Carry out requisition actions through the standard workflow
summary: A requisition/planning line is a pending change to a supply/demand network, not just a template for a purchase line.
tier: official
language: en
tags:
  - requisition-line
  - action-message
  - accept-action-message
  - req-wksh-make-order
  - carryoutbatchaction
  - demand-order-no
  - planning-flexibility
system: inventory
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:28:01.653Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 88f68bdf32c033a5391c396872f88e828054700d
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/carry-out-requisition-actions-through-the-standard-workflow.md
    title: "microsoft/BCQuality: Carry out requisition actions through the standard workflow"
    date: "2026-09-21"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
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
    - change/bcquality/192
    - change/bcquality/57
  related:
    - to: object/codeunit/333
      title: codeunit 333 "Req. Wksh.-Make Order"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/99000813
      title: codeunit 99000813 "Carry Out Action"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/246
      title: table 246 "Requisition Line"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/knowledge/scm/carry-out-requisition-actions-through-the-standard-workflow.md
layer: microsoft
kind: rule
domain: scm
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers:
  - CarryOutBatchAction
---

# Carry out requisition actions through the standard workflow

> A requisition/planning line is a pending change to a supply/demand network, not just a template for a purchase line.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/carry-out-requisition-actions-through-the-standard-workflow.md) · microsoft layer · scm · BC all · tier official · derived

## Description

A requisition/planning line is a pending change to a supply/demand network, not just a template for a purchase line. Carry-out interprets New, change-quantity, reschedule, and cancel actions, preserves referenced supply and planning flexibility, and moves reservation/tracking ownership before finalizing the proposal. Creating a plausible purchase order and deleting the requisition line can leave new supply unrelated to the demand that caused it.

## Best Practice

Requisition batch carry-out initializes `"Req. Wksh.-Make Order"` with `Set` and invokes `CarryOutBatchAction` on the intended accepted lines. Order/posting/receipt defaults are separate from the ending-order-date cutoff, and worksheet/batch/line filters define the selection. A plain `Run` or a single order-line insertion helper is not a replacement for this batch initialization and finalization.

The standard `"Carry Out Action"` dispatch handles broader planning output and its configured purchase, transfer, assembly, or manufacturing choices. Each action's supply change and source-specific reservation transfer precede proposal finalization; not every action creates a new purchase order.

Ordinary manual purchase creation that does not consume planning output is outside this rule. Users may reject or delete unwanted proposals without creating supply; temporary planning simulations, pre-carry-out enrichment, and engine-owned cleanup are also legitimate. `Delete(true)` on a requisition line is not intrinsically a defect.

The samples select an existing accepted New/Purchase item proposal with sales-demand context. Dates are explicit, the source selection remains bounded, and the clean sample leaves order creation and reservation handoff to the standard workflow; it is not a complete planning-run generator.

See sample: [`carry-out-requisition-actions-through-the-standard-workflow.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/carry-out-requisition-actions-through-the-standard-workflow.good.al).

## Anti Pattern

Manually creating or changing supply from a subset of an accepted persistent `"Requisition Line"`, then deleting or marking that proposal handled, skips the standard carry-out/source-reservation handoff. Purchase-field validation and the requisition delete trigger do not first move the proposal's demand links to the new purchase line.

Deleting an unwanted suggestion or creating an ordinary purchase order without consuming planning output is a separate operation. The standard carry-out engine's own insert/delete sequence participates in the source handoff rather than replacing it.

See sample: [`carry-out-requisition-actions-through-the-standard-workflow.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/carry-out-requisition-actions-through-the-standard-workflow.bad.al).

## References

- [Perform planning action messages](https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-to-run-mps-and-mrp#to-perform-action-messages)
- [Planning functionality](https://learn.microsoft.com/en-us/dynamics365/business-central/production-about-planning-functionality)
- [Reservation, order tracking, and action messaging](https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-reservation-order-tracking-and-action-messaging)
- [BaseApp carry-out caller and date defaults](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Inventory/Requisition/CarryOutActionMsgReq.Report.al#L116-L133)
- [Batch initialization and selection](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Inventory/Requisition/ReqWkshMakeOrder.Codeunit.al#L116-L215)
- [Reservation handoff before supply finalization](https://github.com/microsoft/BCApps/blob/8f7a04cb0db8aa96cb97e055c45c61aead49e280/src/Layers/W1/BaseApp/Inventory/Requisition/ReqWkshMakeOrder.Codeunit.al#L663-L743)

## Examples

- [Good: carry-out-requisition-actions-through-the-standard-workflow.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/carry-out-requisition-actions-through-the-standard-workflow.good.al)
- [Bad: carry-out-requisition-actions-through-the-standard-workflow.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/scm/carry-out-requisition-actions-through-the-standard-workflow.bad.al)

## Names

- [codeunit 333 "Req. Wksh.-Make Order"](../../../../objects/codeunit/333.md) (possibly related: a code span names it)
- [codeunit 99000813 "Carry Out Action"](../../../../objects/codeunit/99000813.md) (possibly related: a code span names it)
- [table 246 "Requisition Line"](../../../../objects/table/246.md) (possibly related: a code span names it)

## Changed by

- [#192 Add SCM functional knowledge domain](../../../../changes/bcquality/192.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
