---
id: guideline/microsoft/skills/review/al-upgrade-review
type: guideline
title: AL upgrade review
summary: Reviews AL source changes against upgrade-code and migration guidance from BCQuality.
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
  at: "2026-10-29T21:27:35.502Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: f2c8b1d6a2dacf576ae8f1467d921fd420cf5020
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/skills/review/al-upgrade-review.md
    title: "microsoft/BCQuality: AL upgrade review"
    date: "2026-10-02"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-copyfields-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/moduleinfo/moduleinfo-appversion-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/moduleinfo/moduleinfo-dataversion-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/fieldref/fieldref-optioncaption-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/210
    - change/bcquality/157
    - change/bcquality/195
    - change/bcquality/57
    - change/bcquality/179
    - change/bcquality/172
    - change/bcquality/132
    - change/bcquality/108
    - change/bcquality/54
    - change/bcquality/99
    - change/bcquality/87
  related:
    - to: object/interface/feature-data-update
      title: interface "Feature Data Update"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/codeunit/9999
      title: codeunit 9999 "Upgrade Tag"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/skills/review/al-upgrade-review.md
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
  - OnCheckPreconditionsPerCompany
  - PerDatabase
  - OnUpgradePerCompany
  - OnValidateUpgradePerCompany
  - OnInstallAppPerCompany
  - OnGetPerCompanyUpgradeTags
  - OnGetPerDatabaseUpgradeTags
  - UpdateData
  - AfterUpdate
  - HasUpgradeTag
  - SetUpgradeTag
  - OnCheckPreconditions
  - OnUpgrade
  - OnValidateUpgrade
  - OnInstallApp
  - DataTransfer
  - CopyFields
  - InitValue
  - ObsoleteState
  - ObsoleteReason
  - ObsoleteTag
  - ModuleInfo
  - AppVersion
  - DataVersion
  - ExecutionContext
  - ChangeCompany
  - PrimaryKey
  - HybridSL
  - HybridGP
  - HybridBC
  - HybridBaseDeployment
  - ModifyAll
  - DeleteAll
  - IsDataUpdateRequired
  - ReviewData
  - ToolTip
  - OptionCaption
  - DataClassification
---

# AL upgrade review

> Reviews AL source changes against upgrade-code and migration guidance from BCQuality.

[Skill on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/skills/review/al-upgrade-review.md) · microsoft layer · review skill · BC all · tier official · derived

Reviews AL source changes against the `upgrade` knowledge domain in BCQuality and emits a findings report. This is a leaf action skill: it invokes no sub-skills. It is one of the skills composed by `al-code-review`.

An orchestrator invokes this skill with a `pr-diff`, `file-path`, or `folder-path`. Upgrade findings are narrow by design — they apply when the review scope contains upgrade codeunits, install codeunits, `Feature Data Update` implementations, table schema, enums, or objects under migration namespaces. The skill returns `not-applicable` when none of those apply.

## Source

Use READ's **Bounded retrieval for review skills** workflow with `-Domain upgrade`. Consume every catalog page across enabled layers before applying this leaf's Relevance and Worklist; preserve each exact catalog path and open complete bodies only for exact paths selected by the Worklist. If the helper or prepared index is unavailable or invalid, use READ's explicit path-discovery and bounded native-read fallback.

## Relevance

Apply the frontmatter matching rules defined in READ (*Frontmatter matching semantics*) against the task context:

- `bc-version` — the target BC version from the PR branch's `app.json` or the orchestrator-supplied version. If unavailable, the dimension is `unknown`.
- `technologies` — `[al]`.
- `countries` — the countries declared in the consuming app's `app.json`. Default to the orchestrator's configured context; if absent, `unknown`.
- `application-area` — the union of application areas declared by the changed objects. Pass the actual set; do not substitute `[all]`. If the area cannot be determined from the changes, the dimension is `unknown`.

Discard files that are not applicable. Retain conditionally applicable files (any dimension `unknown`) only when the orchestrator's configuration permits them; findings derived from those files MUST have `confidence` no higher than `medium`, AND the finding's `message` MUST name the dimension or dimensions that were unknown.

## Worklist

Narrow the relevant files to the subset that applies to the changes under review. For each relevant file, compute overlap against:

- The changed AL object names and types — especially codeunits with `Subtype = Upgrade` or `Subtype = Install`, codeunits implementing `Feature Data Update`, tables and tableextensions adding or changing fields, enums and enumextensions, and objects under `Hybrid*`/`Migration`/`Upgrade` namespaces.
- The changed triggers and procedures, weighted toward `OnCheckPreconditionsPerCompany`/`PerDatabase`, `OnUpgradePerCompany`/`PerDatabase`, `OnValidateUpgradePerCompany`/`PerDatabase`, `OnInstallAppPerCompany`/`PerDatabase`, the `OnGetPerCompanyUpgradeTags`/`OnGetPerDatabaseUpgradeTags` subscribers, the `UpdateData`/`AfterUpdate` methods of `Feature Data Update` implementations, and helper procedures transitively reachable from those entry points.
- Tokens extracted from the diff that relate to upgrade concerns (`Subtype = Upgrade`, `Subtype = Install`, `Upgrade Tag`, `HasUpgradeTag`, `SetUpgradeTag`, `OnCheckPreconditions`, `OnUpgrade`, `OnValidateUpgrade`, `OnInstallApp`, `DataTransfer`, `CopyFields`, `Insert`, `Modify`, `Delete`, `Rename`, `InitValue`, `ObsoleteState`, `ObsoleteReason`, `ObsoleteTag`, `ModuleInfo`, `AppVersion`, `DataVersion`, `NavApp.GetCurrentModuleInfo`, `ExecutionContext`, `ChangeCompany`, `Feature Data Update`, `UpdateData`, `PrimaryKey`, `key(`, `field(`, `value(`, `enum`, `enumextension`, `HybridSL`, `HybridGP`, `HybridBC`, `HybridBaseDeployment`).
- For each `OnCheckPreconditions...` and `OnValidateUpgrade...` trigger, build the best available call graph from surrounding unchanged source as well as changed hunks, tracing resolved calls through reachable local or internal helpers. Worklist the check-only rule when a database write occurs either directly in the trigger or in any helper procedure reachable from it. Writes include `Insert`, `Modify`, `ModifyAll`, `Delete`, `DeleteAll`, `Rename`, and `DataTransfer`. Also perform the reverse check when a PR changes a writing helper body: worklist the rule when that helper is invoked directly or transitively by an unchanged check or validation trigger.
- Treat a direct write or a fully resolved call chain as high-confidence evidence. When cross-object dispatch, unavailable declarations, or an incomplete call graph prevents proving the complete chain, cap confidence at `medium`, name the unresolved edge in the finding, and do not claim a violation without a resolved path from a check or validation trigger to a write.
- Worklist the install-versus-upgrade rule when migration helpers are reachable only from an install codeunit.
- Worklist `install-and-upgrade-codeunits-have-no-order.md` when a change adds multiple install or upgrade codeunits whose same-phase triggers share state or depend on one another.
- Worklist `no-changecompany-in-upgrade.md` when `ChangeCompany` with a company-name argument appears in an upgrade codeunit, in a helper reachable from its upgrade triggers, or in the `UpdateData` or `AfterUpdate` method of a `Feature Data Update` implementation or a helper reachable from them. Trace that reachability with the same call-graph and confidence rules as the check-only rule. Do not worklist it for `ChangeCompany` reachable only from `IsDataUpdateRequired` or `ReviewData`; that read-only preflight is permitted.
- Worklist `appversion-meaning-depends-on-execution-context.md` when install or upgrade code branches on `ModuleInfo.AppVersion()` or confuses it with `DataVersion()`.
- An upgrade tag's existence check (`HasUpgradeTag`) is nested inside another tag's guarded body, or one tagged procedure performs two or more functionally unrelated migrations (different tables, fields, or concerns) under a single tag, or one procedure mixes the gated logic for more than one distinct upgrade tag — `upgrade-tag-logic-must-not-nest-deeply.md`. Do not flag record loops or business-data safety guards (corruption checks, redundant-write checks, or other conditions) that serve the single migration the tag represents, however many `if` levels they take — that is the compliant shape the article explicitly permits.

A file enters the candidate worklist when its `keywords` intersect the extracted tokens or its topic (derived from the index entry's `path`, `title`, and `description`) matches a changed object type. Read an article's full file — its `## Best Practice` / `## Anti Pattern` bodies — only after it makes the worklist; candidate selection uses the index alone. When the diff contains no upgrade-related changes by any of the above signals, return `outcome: "not-applicable"` without evaluating files.

Once the candidate worklist is known, resolve layer-precedence conflicts per READ. Drop lower-precedence files whose normative guidance directly contradicts a higher-precedence candidate, and record each dropped file in `suppressed` with `reason: "layer-precedence"`. Files suppressed by configuration are recorded with `reason: "configuration"`.

When the post-conflict worklist is empty because no applicable upgrade knowledge exists, or because configuration suppressed every candidate, emit `outcome: "no-knowledge"`. When the worklist is empty because no applicable upgrade knowledge matched the changes, emit `outcome: "completed"` with an empty `findings` array.

## Action

For each worklist entry, evaluate the diff against the file's `## Best Practice` and `## Anti Pattern` sections. Emit findings as follows:

- When the diff contains a clear match for an Anti Pattern, emit a finding with severity `major` or `blocker`, a message summarizing the anti-pattern, `location` pointing to the offending line or range, and a `references` entry pointing to the knowledge file. Use `blocker` for irreversible data corruption (enum-ordinal shift, unguarded reads that abort the upgrade) and for changes that would ship to customers without a migration path (new InitValue on an existing table without upgrade code).
- When the diff contains code that contradicts a Best Practice without being a full anti-pattern, emit `minor` with the same reference shape.
- Applicability alone is not a finding. Emit `info` only for a concrete, non-actionable observation the article explicitly defines; otherwise emit nothing when no violation is present.

Set `confidence` to:

- `high` when the detection is based on an unambiguous pattern match and any required helper reachability is fully established.
- `medium` when detection relies on heuristics or when any frontmatter dimension was `unknown`.
- `low` when the finding is an advisory derived only from applicability.

After evaluating each worklist entry, also consider whether the diff exhibits a upgrade defect the agent recognises from its general AL knowledge that no knowledge file in the worklist covers. Such candidates are agent findings within this skill's domain — emit them with `references: []`, an `id` slug prefixed with `agent:`, `confidence` capped at `medium`, `severity` capped at `minor` (agent findings are advisory and non-gating), and a `message` that is self-contained (describing both the issue and a concrete recommendation, since there is no knowledge-file footer for the consumer to fall back on). Hold every candidate to the precision bar in `skills/do.md` (*Agent findings*): emit only a concrete, material upgrade or breaking-change defect a knowledgeable BC reviewer would agree is wrong — steelman it first and drop anything stylistic, speculative, dependent on code outside the diff, or merely a valid alternative; when in doubt, omit. The scope is strictly upgrade; defects outside this domain belong to other leaves and MUST NOT be emitted here. Before emitting, check the worklist for a knowledge file that matches the candidate — if one exists, upgrade the candidate to a knowledge-backed finding instead. See `skills/do.md` for the full contract.

For every emitted finding, decide whether the fix is mechanical. A fix is mechanical when it is small, local, and unambiguous from the diff context (for example: delete unreachable lines; replace `Count() > 0` with `not IsEmpty()`; add a missing `ToolTip`, `OptionCaption`, or `DataClassification`; replace a string-concatenated `Error` with a Label-backed call; change an over-broad permission token; or add an obvious `else`/guard branch). For mechanical findings, emit `findings[].suggested-code` with the literal replacement for the source lines indicated by `location`. The payload must be a verbatim replacement — no diff markers, no fences, no commentary — that the consumer can render as a one-click suggestion. When a `.good.al` companion exists and the diff context matches the `.bad.al` shape, adapt the `.good.al` replacement into `suggested-code`.

Omit `suggested-code` only when the appropriate fix depends on context the skill cannot determine, when multiple defensible replacements exist, or when the fix spans non-contiguous code. If a finding is mechanical-looking but you omit `suggested-code`, set `findings[].suggested-code-omission-reason` to a short explanation. See `skills/do.md` for the full contract.

Outcome selection:

- `completed` — the skill evaluated every worklist item.
- `no-knowledge` — no applicable upgrade knowledge survived filtering.
- `not-applicable` — the diff touches no upgrade, install, feature data update, schema, or enum surface.
- `partial` — a budget was hit before the worklist was exhausted.
- `failed` — an unrecoverable error occurred.

## Output

Output conforms to the DO output contract. Every finding this skill emits MUST set `findings[].domain` to `"Upgrade"`. A populated example:

```json
{
  "skill": { "id": "al-upgrade-review", "version": 1 },
  "outcome": "completed",
  "summary": {
    "counts": { "blocker": 1, "major": 0, "minor": 0, "info": 0 },
    "coverage": { "worklist-size": 1, "items-evaluated": 1 }
  },
  "findings": [
    {
      "id": "microsoft/knowledge/upgrade/enum-values-additive-at-end.md",
      "severity": "blocker",
      "message": "A new enum value was inserted at ordinal 1, shifting every subsequent value by one. Rows that store the old ordinal 1 will silently resolve to the new value. Per the referenced guidance, enum values must be appended at the end.",
      "location": {
        "file": "src/Shared/OrderStatus.Enum.al",
        "line": 7
      },
      "references": [
        { "path": "microsoft/knowledge/upgrade/enum-values-additive-at-end.md" }
      ],
      "confidence": "high",
      "domain": "Upgrade"
    }
  ],
  "suppressed": []
}
```

## Names

- [DataTransfer.CopyFields() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/datatransfer/datatransfer-copyfields-method) (names CopyFields)
- [ModuleInfo.AppVersion() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/moduleinfo/moduleinfo-appversion-method) (names AppVersion)
- [ModuleInfo.DataVersion() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/moduleinfo/moduleinfo-dataversion-method) (names DataVersion)
- [Record.ModifyAll(Any, Any \[, Boolean\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/record/record-modifyall-method) (names ModifyAll)
- [FieldRef.OptionCaption() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/fieldref/fieldref-optioncaption-method) (names OptionCaption)
- [ErrorInfo.DataClassification(\[DataClassification\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-dataclassification-method) (names DataClassification)
- [interface "Feature Data Update"](../../../../objects/interface/feature-data-update.md) (possibly related: a code span names it)
- [codeunit 9999 "Upgrade Tag"](../../../../objects/codeunit/9999.md) (possibly related: a code span names it)

## Changed by

- [#210 knowledge(upgrade): upgrade code must not use ChangeCompany](../../../../changes/bcquality/210.md), 2026-10-02
- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29
- [#195 Add foundational AL developer knowledge](../../../../changes/bcquality/195.md), 2026-09-21
- [#57 Add source-verified Finance knowledge and review domain](../../../../changes/bcquality/57.md), 2026-09-21
- [#179 Add bounded knowledge retrieval](../../../../changes/bcquality/179.md), 2026-09-11
- [#172 Support standalone runners and complete app-folder reviews](../../../../changes/bcquality/172.md), 2026-09-09
- [#132 Refine self-improvement review guidance](../../../../changes/bcquality/132.md), 2026-09-03
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15
- [#54 Emit human-readable domain label on review findings](../../../../changes/bcquality/54.md), 2026-07-15
- [#99 Add lifecycle error and privacy knowledge](../../../../changes/bcquality/99.md), 2026-07-14
- [#87 Fix knowledge corpus integrity issues](../../../../changes/bcquality/87.md), 2026-07-13

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
