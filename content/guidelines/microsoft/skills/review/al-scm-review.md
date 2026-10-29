---
id: guideline/microsoft/skills/review/al-scm-review
type: guideline
title: AL Supply Chain Management review
summary: Reviews SCM inventory costing, item application, reservations, order tracking, item tracking, warehouse, transfer, and planning workflows in AL.
tier: official
language: en
tags:
  - review-skill
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:27:52.871Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 8e22e2c5bf6d2a252f2c36a13471d0be3e049420
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/skills/review/al-scm-review.md
    title: "microsoft/BCQuality: AL Supply Chain Management review"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-applicationarea-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/196
    - change/bcquality/192
    - change/bcquality/57
  related:
    - to: object/table/32
      title: table 32 "Item Ledger Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/5802
      title: table 5802 "Value Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/5832
      title: table 5832 "Capacity Ledger Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/7312
      title: table 7312 "Warehouse Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/379
      title: table 379 "Detailed Cust. Ledg. Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/380
      title: table 380 "Detailed Vendor Ledg. Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/254
      title: table 254 "VAT Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/83
      title: table 83 "Item Journal Line"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/339
      title: table 339 "Item Application Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/337
      title: table 337 "Reservation Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/99000832
      title: codeunit 99000832 "Sales Line-Reserve"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/336
      title: table 336 "Tracking Specification"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/report/7315
      title: report 7315 "Calculate Whse. Adjustment"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/5740
      title: table 5740 "Transfer Header"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/5741
      title: table 5741 "Transfer Line"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/table/246
      title: table 246 "Requisition Line"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/333
      title: codeunit 333 "Req. Wksh.-Make Order"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/skills/review/al-scm-review.md
layer: microsoft
kind: skill
domain: null
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - ApplicationArea
  - RunWithCheck
  - UnApply
  - ReApply
  - RedoApplications
  - CostAdjust
  - CancelReservation
  - TransferSaleLineToSalesLine
  - TransferReservEntry
  - CopyItemTracking
  - CalcQtyAvailableToPromise
  - CarryOutBatchAction
---

# AL Supply Chain Management review

> Reviews SCM inventory costing, item application, reservations, order tracking, item tracking, warehouse, transfer, and planning workflows in AL.

[Skill on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/skills/review/al-scm-review.md) · microsoft layer · review skill · BC all · tier official · derived

Reviews AL source against the `scm` knowledge domain. This leaf invokes no
sub-skills and is composed by `al-code-review`. For a folder, inspect every
relevant AL file; a folder supplies no historical baseline.

## Source

Apply Relevance's source gate before retrieval. For a relevant scope, use READ's
**Bounded retrieval for review skills** with `-Domain scm` and
`-Technologies @('al')`. Consume every catalog page across enabled layers,
preserving exact paths and applicability. Select from metadata, then read only
worklisted complete articles. Entry owns index preparation; the leaf does not
rebuild. Unavailable/invalid helpers or indexes use READ's bounded native-read
fallback, never a success-shaped empty result.

## Relevance

Resolve changed record/codeunit types, source tables, publishers and calls.
Gate on code that mutates or posts inventory, application, reservation,
tracking, warehouse, transfer or planning state, or makes a supply/demand
availability decision. Stock displays and other read-only queries without
that decision do not pass the gate. Names, comments, captions, an `Item`
reference or a broad `ApplicationArea` alone are not signals.
If no SCM surface remains, return `not-applicable` with zero coverage
and no article-body retrieval; in mixed diffs, retain only relevant procedures
and their visible supporting context.

SCM owns `"Item Ledger Entry"`, `"Value Entry"`, `"Capacity Ledger Entry"`,
`"Warehouse Entry"` and inventory posting/application records. Pure `"G/L Entry"`,
`"Cust. Ledger Entry"`, `"Vendor Ledger Entry"`, `"Detailed Cust. Ledg. Entry"`,
`"Detailed Vendor Ledg. Entry"`, `"VAT Entry"` and financial-only posting
mutations belong to Finance. They remain outside SCM even if Finance is absent
or disabled; do not reclaim them as SCM agent findings. Ownership is not a
claim that every owned surface already has a dedicated article.

Apply READ's frontmatter filters using the target BC major version from
application dependency/host context (not the extension version), AL, known
localization and actual task/object application areas. Omitted context stays
unknown, not `[all]`; unknown areas alone do not exclude codeunits/subscribers.
Retain conditional articles only when configured, cap their findings at
`medium`, and name every unknown dimension.

## Worklist

Extract resolved object/type names, quoted fields, methods, enum members and
publishers. Normalize these and catalog keywords by lowercasing invariantly,
replacing punctuation/whitespace runs with one hyphen and trimming hyphens:
`"Item Ledger Entry"` becomes `item-ledger-entry`; `RunWithCheck` becomes
`runwithcheck`. Match whole tokens/phrases, not identifier substrings.

Select matching keywords or catalog topics only for the same source surface
**and operation**. The following cues resolve slugs to actual enabled catalog
paths; they select articles, not findings. Facts and exceptions stay in articles.

| Changed source surface and operation | Article slug |
| --- | --- |
| `"Item Ledger Entry"`/`"Value Entry"` transaction writes, or a standalone item-journal quantity/value posting entry point | `post-item-ledger-changes-through-item-journals` |
| Revaluation `"Item Journal Line"` with `"Inventory Value Per"` or `"Partial Revaluation"`, and its line/batch posting calls | `post-revaluation-through-the-item-journal-batch` |
| `"Item Application Entry"` relationship/quantity mutation, or `UnApply`, `ReApply`, `RedoApplications`, `CostAdjust` in an application-correction flow | `change-item-applications-through-posting-routines` |
| Binding-reservation cancellation: `"Reservation Entry"` status, delete/quantity/source edits, `CancelReservation`, or source reservation-lifecycle calls | `cancel-reservations-through-reservation-management` |
| Tracking source conversion/partial movement: `"Sales Line-Reserve"`, `TransferSaleLineToSalesLine`, `TransferReservEntry`, `CopyItemTracking`, or `"Reservation Entry"`/`"Tracking Specification"` source/quantity writes | `transfer-item-tracking-through-source-reservation-codeunits` |
| Registered warehouse quantity/physical-adjustment synchronization, `"Directed Put-away and Pick"`, `"Adjustment Bin Code"`, `"Warehouse Adjustment"`, or `"Calculate Whse. Adjustment"` and the resulting item-journal posting | `reconcile-warehouse-adjustments-with-the-item-ledger` |
| `"Transfer Header"`/`"Transfer Line"` shipment/receipt completion, transfer posting publishers, in-transit/document-link changes, or item-journal posting presented as transfer-order completion | `post-transfers-through-shipment-and-receipt-codeunits` |
| `Inventory`, `CalcQtyAvailableToPromise`, or stock sums used in a dated supply/demand promise, including changed location/variant/date filters and source-demand context | `use-date-aware-availability-for-promising` |
| Direct assignment to `Quantity`, `"Unit of Measure Code"`, `"Qty. per Unit of Measure"`, or a `(Base)` quantity field on a persisted or posted item journal, sales, purchase, or transfer line, or a line quantity compared with a base-unit inventory value | `derive-base-quantities-through-the-line-unit-of-measure` |
| `"Requisition Line"` action-message execution, accepted planning suggestions, `"Req. Wksh.-Make Order"`, `CarryOutBatchAction`, or linked supply creation/change plus requisition-line deletion | `carry-out-requisition-actions-through-the-standard-workflow` |

Route clean supported calls through the same cues, not just suspicious writes.
Resolve actual normative conflicts per READ, preserving additive layers and
recording `layer-precedence`/`configuration` suppressions, not noncandidates.
Retrieve exact paths in ordinal chunks of at most eight, consume every
continuation, and never impose a top-eight cutoff. Samples use exact READ links.

## Action

Evaluate every opened article's normative facts, scope and exclusions against
visible persistence, caller contract, document state and operation. Emit only
concrete violations with business consequences and supported remediation; a
declaration, valid alternative or unseen caller is not evidence of a defect.

- Use `major` for material SCM defects, `minor` for narrower best-practice
  conflicts, and `blocker` only for an article-established platform guarantee.
  Applicability alone produces no finding. High confidence requires unambiguous
  evidence and known applicability; inference/conditional applicability caps it
  at `medium`.
- Apply DO's single-owner deduplication. Equivalent findings for the same
  inventory-originated posting bypass and correction have one SCM primary
  owner, even when financial records are downstream. Prefer the most specific
  SCM article and retain other applicable references as supporting evidence.
  Distinct independent financial defects remain Finance; do not duplicate them.
- Agent findings stay strictly SCM-scoped under DO's precision bar, with
  `references: []`, an `agent:` id and `minor`/`medium` ceilings. Generic AL and
  other domains' concerns remain outside this leaf.
- Supply literal `suggested-code` only for a complete, local, unambiguous fix,
  not a sample call that omits workflow setup/source identity. Explain omitted
  mechanical-looking fixes with `suggested-code-omission-reason`.

Outcome selection follows DO, including accurate coverage and reasons for
`partial`/`failed`. No surviving applicable corpus is `no-knowledge`; an existing
corpus with no matching operation is `completed` with an empty worklist.

## Output

Output conforms to the DO findings-report contract and shared schema. Every
finding MUST set `domain` to `"Supply Chain Management"`. Knowledge-backed ids
equal the primary opened article's exact catalog path. The coordinator, not
this leaf, sets `from-sub-skill`.

## Names

- [Session.ApplicationArea(\[Text\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/session/session-applicationarea-method) (names ApplicationArea)
- [table 32 "Item Ledger Entry"](../../../../objects/table/32.md) (possibly related: a code span names it)
- [table 5802 "Value Entry"](../../../../objects/table/5802.md) (possibly related: a code span names it)
- [table 5832 "Capacity Ledger Entry"](../../../../objects/table/5832.md) (possibly related: a code span names it)
- [table 7312 "Warehouse Entry"](../../../../objects/table/7312.md) (possibly related: a code span names it)
- [table 379 "Detailed Cust. Ledg. Entry"](../../../../objects/table/379.md) (possibly related: a code span names it)
- [table 380 "Detailed Vendor Ledg. Entry"](../../../../objects/table/380.md) (possibly related: a code span names it)
- [table 254 "VAT Entry"](../../../../objects/table/254.md) (possibly related: a code span names it)
- [table 83 "Item Journal Line"](../../../../objects/table/83.md) (possibly related: a code span names it)
- [table 339 "Item Application Entry"](../../../../objects/table/339.md) (possibly related: a code span names it)
- [table 337 "Reservation Entry"](../../../../objects/table/337.md) (possibly related: a code span names it)
- [codeunit 99000832 "Sales Line-Reserve"](../../../../objects/codeunit/99000832.md) (possibly related: a code span names it)
- [table 336 "Tracking Specification"](../../../../objects/table/336.md) (possibly related: a code span names it)
- [report 7315 "Calculate Whse. Adjustment"](../../../../objects/report/7315.md) (possibly related: a code span names it)
- [table 5740 "Transfer Header"](../../../../objects/table/5740.md) (possibly related: a code span names it)
- [table 5741 "Transfer Line"](../../../../objects/table/5741.md) (possibly related: a code span names it)
- [table 246 "Requisition Line"](../../../../objects/table/246.md) (possibly related: a code span names it)
- [codeunit 333 "Req. Wksh.-Make Order"](../../../../objects/codeunit/333.md) (possibly related: a code span names it)

## Changed by

- [#196 Strengthen review contracts and add AL reliability guidance](../../../../changes/bcquality/196.md), 2026-09-29
- [#192 Add SCM functional knowledge domain](../../../../changes/bcquality/192.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
