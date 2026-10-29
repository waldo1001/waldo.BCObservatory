---
id: guideline/microsoft/skills/review/al-appsource-review
type: guideline
title: AL AppSource review
summary: Performs an AL AppSource review against source and app metadata guidance from BCQuality.
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
  at: "2026-10-29T21:27:51.736Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: c12815f5892d917fb16c08ae4b014790da88abd5
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/skills/review/al-appsource-review.md
    title: "microsoft/BCQuality: AL AppSource review"
    date: "2026-09-29"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-currentdatetime-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-guiallowed-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/dialog/dialog-strmenu-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/157
    - change/bcquality/156
    - change/bcquality/142
    - change/bcquality/179
    - change/bcquality/178
    - change/bcquality/172
    - change/bcquality/108
    - change/bcquality/54
    - change/bcquality/105
    - change/bcquality/96
repo_path: microsoft/skills/review/al-appsource-review.md
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
  - DateTime
  - CurrentDateTime
  - UsageCategory
  - PageType
  - ServiceEnabled
  - GuiAllowed
  - StrMenu
  - RunModal
  - ContextSensitiveHelpPage
---

# AL AppSource review

> Performs an AL AppSource review against source and app metadata guidance from BCQuality.

[Skill on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/skills/review/al-appsource-review.md) · microsoft layer · review skill · BC all · tier official · derived

Reviews AL source and app metadata changes against the `appsource` knowledge domain in BCQuality and emits a findings report. This is a leaf action skill: it invokes no sub-skills. It is one of the skills composed by `al-code-review`.

An orchestrator invokes this skill with a `pr-diff`, `file-path`, or `folder-path`. AppSource findings are narrow by design — they apply to Marketplace-facing metadata, complete permission coverage that requires repository context, and contextual AL constructs covered by Marketplace submission requirements. Mechanical compiler and analyzer diagnostics are intentionally outside this skill. The skill returns `not-applicable` when none of those surfaces apply.

## Source

Use READ's **Bounded retrieval for review skills** workflow with `-Domain appsource`. Consume every catalog page across enabled layers before applying this leaf's Relevance and Worklist; preserve each exact catalog path and open complete bodies only for exact paths selected by the Worklist. If the helper or prepared index is unavailable or invalid, use READ's explicit path-discovery and bounded native-read fallback.

## Relevance

Apply the frontmatter matching rules defined in READ (*Frontmatter matching semantics*) against the task context:

- `bc-version` — the target BC version from the PR branch's `app.json` or the orchestrator-supplied version. If unavailable, the dimension is `unknown`.
- `technologies` — `[al]`.
- `countries` — the countries declared in the consuming app's `app.json`. Default to the orchestrator's configured context; if absent, `unknown`.
- `application-area` — the union of application areas declared by the changed objects. Pass the actual set; do not substitute `[all]`. If the area cannot be determined from the changes, the dimension is `unknown`.

Discard files that are not applicable. Retain conditionally applicable files (any dimension `unknown`) only when the orchestrator's configuration permits them; findings derived from those files MUST have `confidence` no higher than `medium`, AND the finding's `message` MUST name the dimension or dimensions that were unknown.

## Worklist

Narrow the relevant files to the subset that applies to the changes under review. For each relevant file, compute overlap against:

- The changed files and AL object types — especially `app.json`, permission-set and profile objects, setup and usage entry points, service-enabled procedures, user-facing pages and reports, and AppSource-facing help metadata.
- Tokens extracted from the diff that relate to AppSource (`permissionset`, `Assignable`, `Permissions`, `SUPER`, `tabledata`, `execute`, `profile`, `Record Profile`, `Evaluate`, `Date`, `DateTime`, `CurrentDateTime`, `UsageCategory`, `PageType`, `addfirst`, `addlast`, `addbefore`, `addafter`, `ServiceEnabled`, `GuiAllowed`, `Message`, `Confirm`, `StrMenu`, `RunModal`, `app.json`, `help`, `ContextSensitiveHelpPage`, `Copilot`, `https`).

A file enters the candidate worklist when its `keywords` intersect the extracted tokens or its topic (derived from the index entry's `path`, `title`, and `description`) matches a changed object type. Read an article's full file — its `## Best Practice` / `## Anti Pattern` bodies — only after it makes the worklist; candidate selection uses the index alone. When the diff contains no AppSource-related source or metadata changes by any of the above signals, return `outcome: "not-applicable"` without evaluating files.

The following targeted checks cover every current `appsource` article across the Microsoft and community layers. Treat each as a candidate-selection cue: when the signal appears in changed code, add the named article to the worklist and evaluate it in Action.

- The app has no assignable permission set covering its setup and usage paths, omits visible object/tabledata grants, or requires `SUPER` for normal operation — `permission-sets-cover-setup-and-usage-without-super`. Require repository-level app context; one isolated permission-set object cannot prove complete coverage.
- Install, upgrade, or setup code provisions an app-owned profile through `Record Profile` and `Insert` instead of declaring a `profile` object — `define-profiles-as-al-objects`.
- A hard-coded or label-backed formatted string is converted to `Date` with `Evaluate` — `use-invariant-date-literals`. Do not select this article for variable external input whose format must be validated at runtime.
- A page extension uses `addbefore` or `addafter` to place a newly added action relative to a specific action owned by another app — `place-page-extension-actions-with-addfirst-or-addlast`. Do not flag those keywords in layouts or placement relative to an action owned by the same extension.
- A page or codeunit web-service entry point, including a `[ServiceEnabled]` procedure, contains or reaches `Message`, `Confirm`, `StrMenu`, `Page.RunModal`, or a confirmation-dialog page without an effective non-GUI guard — `keep-web-service-paths-free-of-ui-calls`. Treat `Message` as suppressed and logged, making it ineffective as a service response; treat the other UI calls as callback-failure risks. Do not treat a controlled `Error` as interactive UI solely because it returns a service fault.
- A page or report that repository context identifies as a direct user entry point omits `UsageCategory` or sets it to `None` — `set-usagecategory-on-searchable-entry-points`. Do not select this article based only on object type; exclude supporting parts, dialogs, API pages, and objects intentionally reached through another page.
- A `DateTime` assignment adds or subtracts a fixed duration to represent an assumed regional offset — `do-not-hard-code-time-zone-offsets`. Require contextual evidence such as an hour-sized constant, offset-oriented name, or time-zone comment; do not flag deadlines, schedules, or elapsed-time calculations.
- For BC v27 or later, `app.json` adds or changes the `help` URL to a path deeper than two levels, or a changed Copilot/context-sensitive help arrangement would ground the app under an overly broad truncated parent — `keep-copilot-help-url-to-two-path-levels`.
- A release/submission pipeline change (`AL-Go-Settings.json`, a publish/release workflow) or an `app.json` version bump is present without the new complete version being strictly greater than the previously submitted one, or the change asserts a hand-edited build/revision or every-merge-is-a-release policy as a universal AppSource rule rather than a project-specific workflow choice — `release-must-update-app-version`. Require repository/pipeline context to know the previously submitted version; a single `app.json` diff cannot prove ordering on its own.
- Changed code declares or calls `File.Open`/`File.Create`/`File.Read`/`File.Write` in an app targeting Business Central Online — `file-datatype-saas`.

Once the candidate worklist is known, resolve layer-precedence conflicts per READ. Drop lower-precedence files whose normative guidance (`## Best Practice` or `## Anti Pattern`) directly contradicts a higher-precedence candidate, and record each dropped file in `suppressed` with `reason: "layer-precedence"`. Files that would have been candidates but are hidden because their layer is disabled in consumer configuration are recorded with `reason: "configuration"`. Files that never became candidates are NOT recorded in `suppressed`.

When the post-conflict worklist is empty because no applicable AppSource knowledge exists, or because configuration suppressed every candidate, emit `outcome: "no-knowledge"`. When the worklist is empty because no applicable AppSource knowledge matched the changes, emit `outcome: "completed"` with an empty `findings` array.

## Action

For each worklist entry, evaluate the diff against the file's `## Best Practice` and `## Anti Pattern` sections. Emit findings as follows:

- When the diff contains a clear match for an Anti Pattern, emit a finding with severity `major` or `blocker`, a message summarizing the anti-pattern, `location` pointing to the offending line or range, and a `references` entry pointing to the knowledge file. Use `blocker` only when the knowledge file states the change violates an AppSource submission requirement; otherwise the ceiling is `major`.
- When the diff contains code that contradicts a Best Practice without being a full anti-pattern, emit `minor` with the same reference shape.
- Applicability alone is not a finding. Emit `info` only for a concrete, non-actionable observation the article explicitly defines; otherwise emit nothing when no violation is present.

Set `confidence` to:

- `high` when the detection is based on an unambiguous pattern match such as URL path depth.
- `medium` when detection relies on heuristics or when any frontmatter dimension was `unknown`.
- `low` when the finding is an advisory derived only from applicability.

After evaluating each worklist entry, also consider whether the diff exhibits an AppSource defect the agent recognises from its general AL knowledge that no knowledge file in the worklist covers. Such candidates are agent findings within this skill's domain — emit them with `references: []`, an `id` slug prefixed with `agent:`, `confidence` capped at `medium`, `severity` capped at `minor` (agent findings are advisory and non-gating), and a `message` that is self-contained (describing both the issue and a concrete recommendation, since there is no knowledge-file footer for the consumer to fall back on). Hold every candidate to the precision bar in `skills/do.md` (*Agent findings*): emit only a concrete, material AppSource defect a knowledgeable BC reviewer would agree is wrong — steelman it first and drop anything stylistic, speculative, dependent on code outside the diff, or merely a valid alternative; when in doubt, omit. The scope is strictly AppSource; defects outside this domain belong to other leaves and MUST NOT be emitted here. Before emitting, check the worklist for a knowledge file that matches the candidate — if one exists, upgrade the candidate to a knowledge-backed finding instead. See `skills/do.md` for the full contract.

For every emitted finding, decide whether the fix is mechanical. A fix is mechanical when it is small, local, and unambiguous from the diff context (for example, replacing a deep help URL with a known two-level canonical URL). For mechanical findings, emit `findings[].suggested-code` with the literal replacement for the source lines indicated by `location`. The payload must be a verbatim replacement — no diff markers, no fences, no commentary — that the consumer can render as a one-click suggestion. When a `.good.al` companion exists and the diff context matches the `.bad.al` shape, adapt the `.good.al` replacement into `suggested-code`.

Omit `suggested-code` only when the appropriate fix depends on context the skill cannot determine, when multiple defensible replacements exist, or when the fix spans non-contiguous code. If a finding is mechanical-looking but you omit `suggested-code`, set `findings[].suggested-code-omission-reason` to a short explanation. See `skills/do.md` for the full contract.

Outcome selection:

- `completed` — the skill evaluated every worklist item.
- `no-knowledge` — no applicable AppSource knowledge survived filtering.
- `not-applicable` — the diff touches no Marketplace-related source, permission, or app-metadata surface.
- `partial` — a budget was hit before the worklist was exhausted.
- `failed` — an unrecoverable error occurred.

## Output

Output conforms to the DO output contract. Every finding this skill emits MUST set `findings[].domain` to `"AppSource"`. A populated example:

```json
{
  "skill": { "id": "al-appsource-review", "version": 1 },
  "outcome": "completed",
  "summary": {
    "counts": { "blocker": 0, "major": 1, "minor": 0, "info": 0 },
    "coverage": { "worklist-size": 1, "items-evaluated": 1 }
  },
  "findings": [
    {
      "id": "microsoft/knowledge/appsource/keep-copilot-help-url-to-two-path-levels.md",
      "severity": "major",
      "message": "The app help URL is deeper than two path levels, so Copilot truncates it and may ground answers on unrelated sibling documentation.",
      "location": {
        "file": "app.json",
        "line": 12
      },
      "references": [
        { "path": "microsoft/knowledge/appsource/keep-copilot-help-url-to-two-path-levels.md" }
      ],
      "confidence": "high",
      "domain": "AppSource",
      "suggested-code": "\"help\": \"https://contoso.com/docs/myapp\""
    }
  ],
  "suppressed": []
}
```

The empty-corpus case produces:

```json
{
  "skill": { "id": "al-appsource-review", "version": 1 },
  "outcome": "no-knowledge",
  "summary": {
    "counts": { "blocker": 0, "major": 0, "minor": 0, "info": 0 },
    "coverage": { "worklist-size": 0, "items-evaluated": 0 }
  },
  "findings": [],
  "suppressed": []
}
```

## Names

- [System.CurrentDateTime() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-currentdatetime-method) (names CurrentDateTime)
- [System.GuiAllowed() Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-guiallowed-method) (names GuiAllowed)
- [Dialog.StrMenu(Text \[, Integer\] \[, Text\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/dialog/dialog-strmenu-method) (names StrMenu)

## Changed by

- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29
- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29
- [#142 Add AL-focused AppSource validation guidance](../../../../changes/bcquality/142.md), 2026-09-14
- [#179 Add bounded knowledge retrieval](../../../../changes/bcquality/179.md), 2026-09-11
- [#178 Separate deterministic analyzer rules from BCQuality](../../../../changes/bcquality/178.md), 2026-09-11
- [#172 Support standalone runners and complete app-folder reviews](../../../../changes/bcquality/172.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15
- [#54 Emit human-readable domain label on review findings](../../../../changes/bcquality/54.md), 2026-07-15
- [#105 Promote validated community knowledge](../../../../changes/bcquality/105.md), 2026-07-14
- [#96 Add missing AL review leaf skills](../../../../changes/bcquality/96.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
