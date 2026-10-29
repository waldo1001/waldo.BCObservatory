---
id: guideline/microsoft/skills/review/al-web-services-review
type: guideline
title: AL web services review
summary: Reviews AL API surfaces, outbound HTTP integrations, and webhook handlers against web-services guidance from BCQuality.
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
  at: "2026-10-29T21:27:17.577Z"
  pipeline: 0.2.0
  prompts: {}
  input_hash: 310c604d0a397aca92a24fe3c1144a16c5337812
evidence:
  - kind: guideline
    url: https://github.com/microsoft/BCQuality/blob/main/microsoft/skills/review/al-web-services-review.md
    title: "microsoft/BCQuality: AL web services review"
    date: "2026-10-20"
    commit: a4593a1b1585a0fa663efbf39ff02c60f846d851
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/outstream/outstream-writetext-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/instream/instream-readtext-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-copystream-method
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
  changes:
    - change/bcquality/228
    - change/bcquality/196
    - change/bcquality/157
    - change/bcquality/156
    - change/bcquality/179
    - change/bcquality/172
    - change/bcquality/108
    - change/bcquality/54
    - change/bcquality/100
    - change/bcquality/93
  related:
    - to: object/table/472
      title: table 472 "Job Queue Entry"
      label: possibly related
      why: a code span in the rule names it
      by: code
    - to: object/page/810
      title: page 810 "Web Services"
      label: possibly related
      why: a code span in the rule names it
      by: code
repo_path: microsoft/skills/review/al-web-services-review.md
layer: microsoft
kind: skill
domain: null
bc_version:
  - all
technologies:
  - al
  - javascript
countries:
  - w1
application_area:
  - all
examples: 0
identifiers:
  - APIPublisher
  - APIGroup
  - APIVersion
  - EntityName
  - EntitySetName
  - ODataKeyFields
  - SourceTable
  - SourceTableTemporary
  - SubPageLink
  - InsertAllowed
  - ModifyAllowed
  - DeleteAllowed
  - OnOpenPage
  - OnValidate
  - HttpResponseMessage
  - JsonToken
  - JsonValue
  - WriteText
  - ReadText
  - CreateOutStream
  - CreateInStream
  - TextEncoding
  - CopyStream
  - validationToken
  - expirationDateTime
  - SystemId
  - OnAfterGetRecord
  - PageType
  - QueryType
  - ZeroOrOne
  - webhookSupportedResources
  - notificationUrl
  - ServiceEnabled
  - WebServiceActionContext
  - SetActionResponse
  - ReadIsolation
  - IsolationLevel
  - ReadCommitted
  - HttpClient
  - HttpRequestMessage
---

# AL web services review

> Reviews AL API surfaces, outbound HTTP integrations, and webhook handlers against web-services guidance from BCQuality.

[Skill on GitHub](https://github.com/microsoft/BCQuality/blob/main/microsoft/skills/review/al-web-services-review.md) · microsoft layer · review skill · BC all · tier official · derived

Reviews AL source changes against the `web-services` knowledge domain in BCQuality and emits a findings report. This includes inbound API surfaces, outbound HTTP integrations, and webhook lifecycle code. This is a leaf action skill: it invokes no sub-skills. It is one of the skills composed by `al-code-review`.

An orchestrator invokes this skill with a `pr-diff`, `file-path`, or `folder-path`. The skill produces a single JSON document conforming to the DO output contract.

## Source

Use READ's **Bounded retrieval for review skills** workflow with `-Domain web-services`. Consume every catalog page across enabled layers before applying this leaf's Relevance and Worklist; preserve each exact catalog path and open complete bodies only for exact paths selected by the Worklist. If the helper or prepared index is unavailable or invalid, use READ's explicit path-discovery and bounded native-read fallback.

## Relevance

Apply the frontmatter matching rules defined in READ (*Frontmatter matching semantics*) against the task context:

- `bc-version` — the target BC version from the PR branch's `app.json` or the orchestrator-supplied version. If unavailable, the dimension is `unknown`.
- `technologies` — `[al]` or `[javascript]`.
- `countries` — the countries declared in the consuming app's `app.json`. Default to the orchestrator's configured context; if absent, `unknown`.
- `application-area` — the union of application areas declared by the changed objects. Pass the actual set; do not substitute `[all]`. If the area cannot be determined from the changes, the dimension is `unknown`.

Discard files that are not applicable. Retain conditionally applicable files (any dimension `unknown`) only when the orchestrator's configuration permits them; findings derived from those files MUST have `confidence` no higher than `medium`, AND the finding's `message` MUST name the dimension or dimensions that were unknown.

## Worklist

Narrow the relevant files to the subset that applies to the changes under review. For each relevant file, compute overlap against:

- The changed AL object names and types — especially pages declared with `PageType = API`, API page `part` controls, queries declared with `QueryType = API`, and procedures that expose bound actions.
- The changed properties and triggers, weighted toward API page metadata (`APIPublisher`, `APIGroup`, `APIVersion`, `EntityName`, `EntitySetName`, `ODataKeyFields`, `SourceTable`, `SourceTableTemporary`), navigation metadata (`SubPageLink`, `Multiplicity`, and visible singleton or collection semantics), CRUD guards (`InsertAllowed`, `ModifyAllowed`, `DeleteAllowed`, `Editable`), the `OnOpenPage` trigger, and `OnValidate` triggers on exposed fields.
- Outbound HTTP integration code that constructs or sends requests, captures a client method's optional Boolean result, checks an `HttpResponseMessage`, or reads and parses response content.
- Integration code that converts values to or from exchanged text: `Format` or `Evaluate` on a request URL, body, or file line, and `JsonToken`/`JsonValue` conversions of payload properties.
- Integration code that converts exchanged text to or from `Blob` bytes: trace encoding-sensitive operations such as `WriteText`/`ReadText` to `CreateOutStream`/`CreateInStream` with a missing or incompatible `TextEncoding`, relative to the counterpart's expected encoding or the incoming bytes — `set-text-encoding-on-streams-exchanged-externally`. Do not flag mere stream creation, binary content, compatible internal text round-trips, or byte-preserving download/HTTP/upload/`CopyStream` transfers of already encoded data. In particular, an explicit UTF-8 writer followed by a default-encoding InStream used only for download preserves the original bytes.
- Webhook subscriber handlers and subscription lifecycle code, especially code that creates or renews subscriptions, handles `validationToken`, schedules from `expirationDateTime`, or targets resources whose eligibility is visible in the diff.
- An API page (`PageType = API`) is added or changed and its `InsertAllowed`/`ModifyAllowed`/`DeleteAllowed` properties are left at their default `true` (or explicitly set `true`) for an operation the endpoint's stated purpose does not need — `api-page-least-privilege-write-access.md`. The signal is an operation left enabled beyond what the endpoint's own described purpose requires, not the mere presence of these properties; a page that genuinely needs full CRUD and grants it deliberately is not a violation.
- An API page (`PageType = API`) with `InsertAllowed = true` lists a field in `ODataKeyFields` and that same field control sets `Editable = false` — `api-page-key-fields-must-be-editable-on-insert.md`. A system-generated key such as `SystemId` marked read-only is not this anti-pattern.
- An API page exposes a field via `Rec` directly, and that field is a stored value computed from other fields inside an `OnValidate` trigger rather than a FlowField recalculated in `OnAfterGetRecord` — `stored-derived-fields-must-not-be-exposed-directly.md`. Exposing a genuine FlowField, or a value already recalculated in `OnAfterGetRecord`, is not this anti-pattern.
- Tokens extracted from the diff that relate to API surface and behaviour (`PageType`, `QueryType`, `API`, `api-page`, `page-part`, `APIPublisher`, `APIGroup`, `APIVersion`, `EntityName`, `EntitySetName`, `ODataKeyFields`, `SystemId`, `SubPageLink`, `subpagelink`, `Multiplicity`, `multiplicity`, `Many`, `ZeroOrOne`, `SourceTableTemporary`, `Job Queue Entry`, `webhook`, `webhookSupportedResources`, `webhook-supported-resources`, `subscriptions`, `notificationUrl`, `validationToken`, `validationtoken`, `expirationDateTime`, `expirationdatetime`, `ServiceEnabled`, `WebServiceActionContext`, `SetActionResponse`, `ReadIsolation`, `IsolationLevel`, `ReadCommitted`, `InsertAllowed`, `ModifyAllowed`, `DeleteAllowed`, `Editable`, `SourceTable`, `HttpClient`, `HttpRequestMessage`, `HttpResponseMessage`, `Get`, `Post`, `Put`, `Delete`, `Send`, `IsSuccessStatusCode`, `HttpStatusCode`, `Content`, `ReadAs`, `JsonObject`, `JsonToken`, `JsonValue`, `AsValue`, `IsNull`, `SelectToken`, `Format`, `Evaluate`, `XmlDocument`, `TextEncoding`, `CreateOutStream`, `CreateInStream`, `DownloadFromStream`, `UploadIntoStream`).

A file enters the candidate worklist when its `keywords` intersect the extracted tokens or its topic (derived from the index entry's `path`, `title`, and `description`) matches a changed object type. Read an article's full file — its `## Best Practice` / `## Anti Pattern` bodies — only after it makes the worklist; candidate selection uses the index alone.

Once the candidate worklist is known, resolve layer-precedence conflicts per READ. Drop lower-precedence files whose normative guidance (`## Best Practice` or `## Anti Pattern`) directly contradicts a higher-precedence candidate, and record each dropped file in `suppressed` with `reason: "layer-precedence"`. Files that would have been candidates but are hidden because their layer is disabled in consumer configuration are recorded with `reason: "configuration"`. Files that never became candidates are NOT recorded in `suppressed`.

When the post-conflict worklist is empty because no applicable web-services knowledge exists, or because configuration suppressed every candidate, emit `outcome: "no-knowledge"`. When the worklist is empty because no applicable web-services knowledge matched the changes, emit `outcome: "completed"` with an empty `findings` array.

## Action

For each worklist entry, evaluate the diff against the file's `## Best Practice` and `## Anti Pattern` sections. Emit findings as follows:

- When the diff contains a clear match for an Anti Pattern, emit a finding with severity `major` or `blocker`, a message summarizing the anti-pattern, `location` pointing to the offending line or range, and a `references` entry pointing to the knowledge file. Use `blocker` only when the knowledge file states the anti-pattern violates a platform-level guarantee. When the file does not make such a claim, the ceiling is `major`.
- When the diff contains code that contradicts a Best Practice without being a full anti-pattern, emit `minor` with the same reference shape.
- Applicability alone is not a finding. Emit `info` only for a concrete, non-actionable observation the article explicitly defines; otherwise emit nothing when no violation is present.

For API parts whose parent declares `ODataKeyFields = SystemId`, detect a child foreign key linked to a parent business field instead of `Field(SystemId)`. Do not apply the SystemId-link rule to APIs intentionally keyed by another field. Omitted `Multiplicity` is valid and means the documented default 1:N collection; never report omission alone. Report an explicit `ZeroOrOne` only when the visible contract clearly intends a collection or deep insert, and report an explicit `Many` only when it clearly intends a singleton. Singleton metadata requires an explicit `ZeroOrOne`; do not infer singleton intent from naming alone. For webhook eligibility, detect `QueryType = API`, `SourceTableTemporary = true`, composite `ODataKeyFields` (including an omitted property when a visible source primary key is composite), Job Queue Entry, and visible system-table sources; do not infer an unknown table number. For lifecycle code, require both create and renew paths to use a handler that returns the query-string `validationToken` verbatim with `200 OK`, and flag renewal scheduling that assumes subscriptions are permanent instead of using `expirationDateTime`.

For outbound HTTP calls, apply these targeted checks:

- When code captures the optional Boolean result of `HttpClient.Get`, `Post`, `Put`, `Delete`, or `Send`, require the failed branch to stop before status, headers, or content are accessed. Do not report a call that omits the Boolean result: that form intentionally lets the runtime raise an error when the request cannot execute.
- After platform success, require `IsSuccessStatusCode()` or an explicit acceptable `HttpStatusCode()` check before response content is interpreted as a success payload. Do not report code that reads a bounded non-success body solely for diagnostics and keeps it out of the success parsing path.

Do not emit generic HTTP or REST advice beyond applicable knowledge articles.

Set `confidence` to:

- `high` when the detection is based on an unambiguous pattern match (identifier, syntax, object type).
- `medium` when detection relies on heuristics or when any frontmatter dimension was `unknown`.
- `low` when the finding is an advisory derived only from applicability.

After evaluating each worklist entry, also consider whether the diff exhibits a web-services defect the agent recognises from its general AL knowledge that no knowledge file in the worklist covers. Such candidates are agent findings within this skill's domain — emit them with `references: []`, an `id` slug prefixed with `agent:`, `confidence` capped at `medium`, `severity` capped at `minor` (agent findings are advisory and non-gating), and a `message` that is self-contained (describing both the issue and a concrete recommendation, since there is no knowledge-file footer for the consumer to fall back on). Hold every candidate to the precision bar in `skills/do.md` (*Agent findings*): emit only a concrete, material web-services defect a knowledgeable BC reviewer would agree is wrong — steelman it first and drop anything stylistic, speculative, dependent on code outside the diff, or merely a valid alternative; when in doubt, omit. The scope is strictly API pages, outbound HTTP integrations, and other web-service surfaces; defects outside this domain belong to other leaves and MUST NOT be emitted here. Before emitting, check the worklist for a knowledge file that matches the candidate — if one exists, upgrade the candidate to a knowledge-backed finding instead. See `skills/do.md` for the full contract.

For every emitted finding, decide whether the fix is mechanical. A fix is mechanical when it is small, local, and unambiguous from the diff context (for example: set `ODataKeyFields = SystemId`; add the three `*Allowed = false` guards to a read-only page; add the missing `OnOpenPage` isolation assignment). For mechanical findings, emit `findings[].suggested-code` with the literal replacement for the source lines indicated by `location`. The payload must be a verbatim replacement — no diff markers, no fences, no commentary — that the consumer can render as a one-click suggestion. When a `.good.al` companion exists and the diff context matches the `.bad.al` shape, adapt the `.good.al` replacement into `suggested-code`.

Omit `suggested-code` only when the appropriate fix depends on context the skill cannot determine, when multiple defensible replacements exist, or when the fix spans non-contiguous code. If a finding is mechanical-looking but you omit `suggested-code`, set `findings[].suggested-code-omission-reason` to a short explanation. See `skills/do.md` for the full contract.

Outcome selection:

- `completed` — the skill evaluated every worklist item; default when the skill finishes normally, including when the resulting `findings` array is empty.
- `no-knowledge` — no applicable web-services knowledge survived Source, Relevance, configuration filtering, and conflict resolution. `findings` is empty.
- `not-applicable` — the task context contains no AL API surface, outbound AL HTTP integration, AL file or stream text exchange, JavaScript webhook subscription lifecycle code, or JavaScript notification handler, or the `technologies` filter rejected the task.
- `partial` — a time or token budget was hit before the worklist was exhausted. `summary.coverage` reflects the evaluated subset; `outcome-reason` explains the cause.
- `failed` — an unrecoverable error occurred. `outcome-reason` is required.

## Output

Output conforms to the DO output contract. Every finding this skill emits MUST set `findings[].domain` to `"Web Services"`. A populated example:

```json
{
  "skill": { "id": "al-web-services-review", "version": 1 },
  "outcome": "completed",
  "summary": {
    "counts": { "blocker": 0, "major": 0, "minor": 2, "info": 0 },
    "coverage": { "worklist-size": 2, "items-evaluated": 2 }
  },
  "findings": [
    {
      "id": "microsoft/knowledge/web-services/set-required-api-page-properties.md",
      "severity": "minor",
      "message": "This PageType = API page omits APIVersion, so it is exposed under beta by default rather than an explicit stable contract. Declare the intended version, such as APIVersion = 'v1.0'.",
      "location": {
        "file": "src/Api/CustomerApi.Page.al",
        "line": 3,
        "range": { "start-line": 1, "end-line": 8 }
      },
      "references": [
        { "path": "microsoft/knowledge/web-services/set-required-api-page-properties.md" }
      ],
      "confidence": "high",
      "domain": "Web Services"
    },
    {
      "id": "microsoft/knowledge/web-services/expose-systemid-as-the-api-key.md",
      "severity": "minor",
      "message": "This API page sets ODataKeyFields to a renamable business field instead of SystemId, so stored references break when the business key changes. Set ODataKeyFields = SystemId and expose field(id; Rec.SystemId).",
      "location": {
        "file": "src/Api/CustomerApi.Page.al",
        "line": 9
      },
      "references": [
        { "path": "microsoft/knowledge/web-services/expose-systemid-as-the-api-key.md" }
      ],
      "confidence": "high",
      "domain": "Web Services"
    }
  ],
  "suppressed": []
}
```

The empty-corpus case — when no web-services knowledge survives filtering — produces:

```json
{
  "skill": { "id": "al-web-services-review", "version": 1 },
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

- [OutStream.WriteText(\[Text\] \[, Integer\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/outstream/outstream-writetext-method) (names WriteText)
- [InStream.ReadText(var Text \[, Integer\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/instream/instream-readtext-method) (names ReadText)
- [System.CopyStream(OutStream, InStream \[, Integer\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/system/system-copystream-method) (names CopyStream)
- [ErrorInfo.SystemId(\[Guid\]) Method](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/errorinfo/errorinfo-systemid-method) (names SystemId)
- [table 472 "Job Queue Entry"](../../../../objects/table/472.md) (possibly related: a code span names it)
- [page 810 "Web Services"](../../../../objects/page/810.md) (possibly related: a code span names it)

## Changed by

- [#228 Knowledge: isolated events, FilterGroup scope, BLOB CalcFields and stream text encoding](../../../../changes/bcquality/228.md), 2026-10-20
- [#196 Strengthen review contracts and add AL reliability guidance](../../../../changes/bcquality/196.md), 2026-09-29
- [#157 18 more AL/BC patterns: data-modeling, testing, style, security, error-handling, ui, upgrade, web-services, appsource](../../../../changes/bcquality/157.md), 2026-09-29
- [#156 18 AL/BC patterns: style, data-modeling, web-services, appsource, breaking-changes, performance, testing](../../../../changes/bcquality/156.md), 2026-09-29
- [#179 Add bounded knowledge retrieval](../../../../changes/bcquality/179.md), 2026-09-11
- [#172 Support standalone runners and complete app-folder reviews](../../../../changes/bcquality/172.md), 2026-09-09
- [#108 Complete AL review knowledge readiness](../../../../changes/bcquality/108.md), 2026-07-15
- [#54 Emit human-readable domain label on review findings](../../../../changes/bcquality/54.md), 2026-07-15
- [#100 Add P0 integration and control add-in runtime guidance](../../../../changes/bcquality/100.md), 2026-07-14
- [#93 Fix lifecycle compatibility guidance](../../../../changes/bcquality/93.md), 2026-07-14

---

From microsoft/BCQuality at a4593a1, MIT License, Copyright (c) 2026 Microsoft Corporation ([license](../../../LICENSE-BCQuality.txt)).
