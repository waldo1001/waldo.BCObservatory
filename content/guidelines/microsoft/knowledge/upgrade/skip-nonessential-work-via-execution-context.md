---
id: guideline/microsoft/knowledge/upgrade/skip-nonessential-work-via-execution-context
type: guideline
title: Skip non-essential runtime work when `GetExecutionContext() = ExecutionContext::Upgrade`
summary: Runtime procedures (table triggers, install routines, helpers called from many places) sometimes fire during the upgrade window because the upgrade itself touches the data they react to.
tier: official
language: en
tags:
  - get-execution-context
  - execution-context-upgrade
  - skip
  - report-selection
  - runtime-trigger
system: development
review:
  state: derived
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-29T21:29:10.447Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c4558b76314576ebc19a636cebcd7ca9740da081
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/skip-nonessential-work-via-execution-context.md
    title: "microsoft/BCQuality: Skip non-essential runtime work when `GetExecutionContext() = ExecutionContext::Upgrade`"
    date: "2026-09-09"
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
    - change/bcquality/174
repo_path: microsoft/knowledge/upgrade/skip-nonessential-work-via-execution-context.md
layer: microsoft
kind: rule
domain: upgrade
bc_version:
  - all
technologies:
  - al
countries:
  - w1
application_area:
  - all
examples: 2
identifiers: []
---

# Skip non-essential runtime work when `GetExecutionContext() = ExecutionContext::Upgrade`

> Runtime procedures (table triggers, install routines, helpers called from many places) sometimes fire during the upgrade window because the upgrade itself touches the data they react to.

[Rule on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/skip-nonessential-work-via-execution-context.md) · microsoft layer · upgrade · BC all · tier official · derived

## Description

Runtime procedures (table triggers, install routines, helpers called from many places) sometimes fire during the upgrade window because the upgrade itself touches the data they react to. When the work those procedures do is not strictly required for the upgrade to succeed — inserting report-selection entries, seeding optional configuration, sending welcome notifications — they should detect upgrade context with `GetExecutionContext() = ExecutionContext::Upgrade` and exit. This keeps upgrade transactions tight and avoids side effects that the upgrade pipeline did not ask for.

This is the opposite of a load-bearing concern: code that MUST run during the upgrade does not consult execution context. The check is for *optional* side effects that happen to be wired into runtime code paths.

## Best Practice

In a runtime procedure that performs non-essential side effects, guard the side-effect block with `if GetExecutionContext() = ExecutionContext::Upgrade then exit;` and include a brief comment explaining what is being skipped and why.

See sample: [`skip-nonessential-work-via-execution-context.good.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/skip-nonessential-work-via-execution-context.good.al).

## Anti Pattern

Using `GetExecutionContext()` to *enable* upgrade behaviour from outside an upgrade codeunit. Upgrade behaviour belongs in a codeunit with `Subtype = Upgrade`; runtime code should only use the check to *suppress* optional work.

See sample: [`skip-nonessential-work-via-execution-context.bad.al`](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/skip-nonessential-work-via-execution-context.bad.al).

## Examples

- [Good: skip-nonessential-work-via-execution-context.good.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/skip-nonessential-work-via-execution-context.good.al)
- [Bad: skip-nonessential-work-via-execution-context.bad.al](https://github.com/microsoft/BCQuality/blob/main/microsoft/knowledge/upgrade/skip-nonessential-work-via-execution-context.bad.al)

## Changed by

- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md), 2026-09-09

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
