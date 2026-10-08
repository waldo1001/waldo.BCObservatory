---
id: topic/dev-itpro/development/programming-in-the-al-language/error-handling
type: topic
title: Error handling
summary: Error handling in Business Central AL covers how to raise, catch, collect and present runtime errors, and how to design code that fails gracefully. It answers questions about error dialogs, try methods, collectible errors, actionable errors with Fix-it and Show-it actions, UX guidelines, and error telemetry.
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:18:03.133Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4a21c07b148f5af6fe8ac83f95325cee9a2f0e447a81f4aa3bf8a573c9eb78d4
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actionable-errors
    title: Actionable errors
    date: "2026-06-29"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-error-handling
    title: AL error handling
    date: "2024-03-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-message-voting-trace
    title: Analyzing Error Message Vote Telemetry | Microsoft Docs
    date: "2022-03-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace
    title: Analyzing Permission Error Trace Telemetry
    date: "2022-07-27"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-collection-api
    title: Collectible errors API
    date: "2023-12-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-collection
    title: Collecting Errors
    date: "2025-05-19"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/dialog/dialog-error-errorinfo-method
    title: Dialog.Error(ErrorInfo) Method
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/dialog/dialog-error-string-joker-method
    title: Dialog.Error(Text [, Any,...]) Method
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/dialog/dialog-loginternalerror-string-dataclassification-verbosity-method
    title: Dialog.LogInternalError(Text, DataClassification, Verbosity) Method
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/dialog/dialog-loginternalerror-string-string-dataclassification-verbosity-method
    title: Dialog.LogInternalError(Text, Text, DataClassification, Verbosity) Method
    date: "2026-10-01"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-method-trace
    title: Error method trace telemetry
    date: "2023-12-21"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-robust-coding-practices
    title: Failure modeling and robust coding practices
    date: "2024-01-11"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-feature-telemetry
    title: Feature telemetry
    date: "2026-09-22"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-handling-errors-using-try-methods
    title: Handling errors using try methods
    date: "2025-06-18"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-dialog
    title: Understanding the error dialog
    date: "2024-01-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-handling-guidelines
    title: User experience guidelines for errors
    date: "2025-01-21"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actionable-errors
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-error-handling
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-collection
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-robust-coding-practices
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-handling-errors-using-try-methods
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-dialog
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-handling-guidelines
  objects: []
  features: []
  topics:
    - topic/dev-itpro/development/programming-in-the-al-language
    - topic/dev-itpro/development/programming-in-the-al-language/error-handling/error-telemetry
    - topic/dev-itpro/development/programming-in-the-al-language/error-handling/al-language-reference-errors
  localizations: []
  videos: []
  posts:
    - post/gerardorenteria-blog/12238
    - post/thatnavguy-com/https-thatnavguy-com-blog-2025-how-to-write-error-messages-that-help--6e1cc8407f
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-77-testfield-show-record-action--16034e644a
  guidelines: []
  changes:
    - change/bcquality/99
learn_toc_path:
  - Development
  - Programming in the AL language
  - Error handling
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/development/programming-in-the-al-language
children:
  - topic/dev-itpro/development/programming-in-the-al-language/error-handling/error-telemetry
  - topic/dev-itpro/development/programming-in-the-al-language/error-handling/al-language-reference-errors
coverage:
  learn: 16
  code: 0
  video: 0
  blog: 3
  guideline: 0
bc_forms: []
member_hash: 5f28cfcbe8ab1c64bbdc1ec42f2d716b7ab875888435183319b893b988efe312
narrative: generated
---

# Error handling

> Error handling in Business Central AL covers how to raise, catch, collect and present runtime errors, and how to design code that fails gracefully. It answers questions about error dialogs, try methods, collectible errors, actionable errors with Fix-it and Show-it actions, UX guidelines, and error telemetry.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Error handling · tier official · system development · narrative reviewed (checked by Opus)

## Overview

This section explains how AL code deals with errors from design to diagnosis. It starts with an overview of strategies (error dialogs, try methods, error collection, telemetry, the ErrorInfo data type and error message quality), then goes into each technique on its own page.

For writing code, the pages cover try methods with the TryFunction attribute, collectible errors using the ErrorBehavior attribute and the error collection API, and actionable errors built with ErrorInfo. Failure modeling and robust coding practices give the design principles behind these choices. The user experience guidelines page covers wording, voice and dialog best practices.

For diagnosis, the page on the error dialog explains what users see and what they can copy for support, such as the AL call stack and the Application Insights session ID. The Error telemetry subtopic goes further into analyzing error events in Application Insights. A subtopic with AL language reference pages for errors is also part of the section. Start with "AL error handling" for orientation.

## Key points

- Actionable errors use ErrorInfo objects with Fix-it and Show-it actions, up to two actions per error, with consistent button labels and field validation support.
- Try methods use the TryFunction attribute, return a boolean, and can be inspected with GetLastErrorText and GetLastErrorObject; database write restrictions apply, and the page mentions runtime version 2.0.
- Collectible errors (ErrorBehavior attribute and error collection API) let a procedure gather several validation errors and show them together instead of stopping at the first.
- The error dialog has a Copy Details section with the AL call stack and the Application Insights session ID, useful for troubleshooting.
- Failure modeling lists six robust coding principles: do not trust external code, consumers or the environment; offer graceful degradation; hide internal data structures; assume improbable events happen at scale.
- UX guidelines cover actionable messages, message formatting, validation errors and voice for error text.
- Error telemetry covers event IDs, dimensions, KQL analysis, permission errors, user votes on error messages, and logging with the Telemetry AL module.

## Subtopics

- [Error telemetry](error-handling/error-telemetry.md) (4 pages)
- [AL language reference (errors)](error-handling/al-language-reference-errors.md) (5 pages)

## More Learn pages

- [Actionable errors](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actionable-errors): Learn how to write AL code that returns error dialogs where users might unblock themselves.
- [AL error handling](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-error-handling): Deal with unexpected situations that occur when code is run in AL for Business Central.
- [Collecting Errors](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-collection): Learn how to write AL code that returns more than one error and presents users with more detailed error information.
- [Failure modeling and robust coding practices](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-robust-coding-practices): Describes how to reason over errors and handle them in code.
- [Handling errors using try methods](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-handling-errors-using-try-methods): Try methods in AL enable you to handle errors that occur in the application during code execution.
- [Understanding the error dialog](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-dialog): Understand the different parts the error dialog to be able to help mitigate issues for users
- [User experience guidelines for errors](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-handling-guidelines): Describes how to handle error dialogs in AL code.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#99 Add lifecycle error and privacy knowledge](../../../../changes/bcquality/99.md) (code change): "covering try-function semantics, upgrade phase data writes, install-versus-upgrade dispatch logic, ErrorInfo privacy"
- [🔧 Transforming BC Error Handling with Smart Recommendations 📝](../../../../posts/gerardorenteria-blog/12238.md) (community post): "Error Messages with Recommendations extension to transform error messages"
- [How to Write Error Messages That Help](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-how-to-write-error-messages-that-help--6e1cc8407f.md) (community post): "Good error messages are clear about what went wrong"
- [BC Friday Tips #77 TestField Show Record Action](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-77-testfield-show-record-action--16034e644a.md) (community post): "TestField automatically adds a Show Record button to error dialogs"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
