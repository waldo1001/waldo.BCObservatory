---
id: topic/dev-itpro/development/programming-in-the-al-language/error-handling
type: topic
title: Error handling
summary: Error handling in AL for Business Central covers error dialogs, try methods, collectible errors, actionable errors with Fix-it and Show-it actions, failure modeling, UX guidelines, and error telemetry. It answers how to raise, catch, collect, present and log errors.
tier: official
language: en
system: development
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-23T00:57:44.197Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 4dd32dc85cb0aa58e805985cae72047c7f17679b4a7e8819d1d5e25698b3b930
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
    title: Analyzing Error Message Vote Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-error-method-trace
    title: Analyzing Error Method Trace Telemetry
    date: "2026-11-17"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/administration/telemetry-permission-error-trace
    title: Analyzing Permission Error Trace Telemetry
    date: "2026-11-17"
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
  videos:
    - video/a3j6JjyWDv0
    - video/RNR4wsFeedI
  posts:
    - post/demiliani-com/14203
    - post/gerardorenteria-blog/12238
    - post/miljan-rs/966
    - post/thatnavguy-com/https-thatnavguy-com-blog-2025-how-to-write-error-messages-that-help--6e1cc8407f
    - post/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-77-testfield-show-record-action--16034e644a
    - post/yzhums-com/66277
    - post/yzhums-com/68174
    - post/yzhums-com/70329
    - post/yzhums-com/75574
  guidelines: []
  changes:
    - change/bcapps/12117
    - change/bcquality/211
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
  video: 2
  blog: 9
  guideline: 0
bc_forms: []
member_hash: 5f28cfcbe8ab1c64bbdc1ec42f2d716b7ab875888435183319b893b988efe312
narrative: generated
---

# Error handling

> Error handling in AL for Business Central covers error dialogs, try methods, collectible errors, actionable errors with Fix-it and Show-it actions, failure modeling, UX guidelines, and error telemetry. It answers how to raise, catch, collect, present and log errors.

Path: [Development](../../development.md) > [Programming in the AL language](../programming-in-the-al-language.md) > Error handling · tier official · system development · narrative **unreviewed** (model text not yet checked)

## Overview

This section explains how to deal with runtime errors in AL code. It starts with the general "AL error handling" page, which lists the main strategies: error dialogs, try methods, error collection, telemetry, the ErrorInfo data type and error message quality. The other pages go deeper on each strategy.

For writing errors, "Actionable errors" and "User experience guidelines for errors" describe how to use ErrorInfo with Fix-it and Show-it actions, and how to word and format messages. For catching and collecting errors, "Handling errors using try methods" and "Collecting Errors" cover the TryFunction attribute and the ErrorBehavior attribute with the error collection API. "Failure modeling and robust coding practices" gives the design principles behind defensive code.

For investigating errors, "Understanding the error dialog" explains the details users can copy, such as the AL call stack and the Application Insights session ID. The Error telemetry subtopic covers logging errors and feature usage to Application Insights. A subtopic with AL language reference pages for errors is also part of the section. Start with "AL error handling", then pick the page that matches your task.

## Key points

- Actionable errors use ErrorInfo objects with up to two actions: Fix-it actions that apply a recommended solution and Show-it actions that navigate the user to relevant information.
- Try methods use the TryFunction attribute, return a boolean, and let you read the error with GetLastErrorText and GetLastErrorObject. They have restrictions on database writes, and the page mentions runtime version 2.0.
- Collectible errors let a procedure gather several validation errors instead of stopping at the first. They use the ErrorBehavior attribute and an error collection API, and you can show the errors in the standard dialog or a custom UI.
- The error dialog has a Copy Details section with the AL call stack and the Application Insights session ID. The page mentions 2022 release wave 2 and 2023 release wave 1.
- Failure modeling rests on six principles: do not trust external code, consumers or the environment; offer graceful degradation; hide internal data structures; and assume improbable events will happen at scale.
- UX guidelines cover error message formatting, voice, validation errors, and best practices for error dialogs.
- Error telemetry covers logging to Application Insights, error message votes, permission errors (RT0031), and using the Telemetry AL module to log feature usage, errors and uptake.

## Subtopics

- [Error telemetry](error-handling/error-telemetry.md) (4 pages)
- [AL language reference (errors)](error-handling/al-language-reference-errors.md) (5 pages)

## More Learn pages

- [Actionable errors](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-actionable-errors): Learn how to write AL code that returns error dialogs where users might unblock themselves.
- [AL error handling](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-al-error-handling): Deal with unexpected situations that occur when code is run in AL for Business Central.
- [Collecting Errors](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-collection): Learn how to write AL code that returns more than one error and presents users with more detailed error information.
  - In the observatory: [Page 700 "Error Messages"](../../../../objects/page/700.md)
- [Failure modeling and robust coding practices](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-robust-coding-practices): Describes how to reason over errors and handle them in code.
- [Handling errors using try methods](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-handling-errors-using-try-methods): Try methods in AL enable you to handle errors that occur in the application during code execution.
- [Understanding the error dialog](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-dialog): Understand the different parts the error dialog to be able to help mitigate issues for users
- [User experience guidelines for errors](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-error-handling-guidelines): Describes how to handle error dialogs in AL code.

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#12117 [Job Queue] Clearer message and attempt number for runs interrupted by the platform](../../../../changes/bcapps/12117.md) (code change): "confusing 'job has stopped' error message with 'run was interrupted' message"
- [#211 knowledge(error-handling): a bare [TryFunction] call propagates its error](../../../../changes/bcquality/211.md) (code change): "bare calls to TryFunction procedures propagate errors rather than suppressing them"
- [#99 Add lifecycle error and privacy knowledge](../../../../changes/bcquality/99.md) (code change): "covering try-function semantics, upgrade phase data writes, install-versus-upgrade dispatch logic, ErrorInfo privacy"
- [Why your Business Central job queue needs idempotent external effects when integrating external systems.](../../../../posts/demiliani-com/14203.md) (community post): "AL transaction rollback does not undo external API calls"
- [🔧 Transforming BC Error Handling with Smart Recommendations 📝](../../../../posts/gerardorenteria-blog/12238.md) (community post): "Event Subscribers intercept Business Central errors, validate tag matches, and invoke the ErrorMessageFix interface"
- [When “Errors” Don’t Stop the Process: A Hidden Risk in Business Central](../../../../posts/miljan-rs/966.md) (community post): "ErrorBehavior::Collect allows code to continue after errors"
- [How to Write Error Messages That Help](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2025-how-to-write-error-messages-that-help--6e1cc8407f.md) (community post): "Error messages significantly impact user experience in enterprise software"
- [BC Friday Tips #77 TestField Show Record Action](../../../../posts/thatnavguy-com/https-thatnavguy-com-blog-2026-bc-friday-tips-77-testfield-show-record-action--16034e644a.md) (community post): "TestField automatically adds a Show Record button to error dialogs"
- [Dynamics 365 Business Central: Regarding the default field name/table name in the error message thrown by Record.TestField Method](../../../../posts/yzhums-com/66277.md) (community post): "Record.TestField Method validates that a field is not empty"
- [Business Central 2025 wave 2 (BC27): App version in “Copy error details”/”Share details via”](../../../../posts/yzhums-com/68174.md) (community post): "Error dialogs now display the extension version number alongside extension name"
- [Dynamics 365 Business Central: View the last known error](../../../../posts/yzhums-com/70329.md) (community post): "Use GetLastErrorCode and GetLastErrorText methods to programmatically access error details"
- [Dynamics 365 Business Central: GetLastErrorCode, GetLastErrorText and GetLastErrorCallStack Methods](../../../../posts/yzhums-com/75574.md) (community post): "GetLastErrorCode retrieves the error classification and is not translated to local language"
- [20261026 - The Rollback That Wasn’t Transaction & Error Handling](../../../../videos/a3j6JjyWDv0.md) (video): "transaction handling; error handling; rollback behavior; commit semantics; try-catch patterns"
- [What's New: Boost Your Productivity with Business Central (2024 release wave 1)](../../../../videos/RNR4wsFeedI.md) (video): "Actions for platform-generated errors; Error sharing via Teams and email"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
