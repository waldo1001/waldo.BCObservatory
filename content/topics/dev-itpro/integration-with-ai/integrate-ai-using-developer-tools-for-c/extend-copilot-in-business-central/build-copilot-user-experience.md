---
id: topic/dev-itpro/integration-with-ai/integrate-ai-using-developer-tools-for-c/extend-copilot-in-business-central/build-copilot-user-experience
type: topic
title: Build Copilot user experience
summary: "Building the Copilot user interface in Business Central with PromptDialog pages: prompt mode, generate mode caption, content mode, inline error handling, and prompt actions that launch Copilot from pages. Use it for questions on how to design and wire the Copilot UI in AL."
tier: official
language: en
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-06T13:43:32.763Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 8d255943bc8e398474a3aa6b66b2fa2b0538c3a8bc0bef2d5a4b4993ef71fd44
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-build-experience
    title: Build a Copilot user experience with the PromptDialog page
    date: "2026-05-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-create-promptdialog
    title: Create prompt dialog page for Copilot feature
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-customize-generate-mode
    title: Customize generate mode caption in Copilot
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-design-content-mode
    title: Design content mode of prompt dialog page
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-design-prompt-mode
    title: Design the prompt mode of prompt dialog page
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-prompt-error-handling
    title: Error handling in prompt dialogs
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-prompting-floating-actionbar
    title: Prompting using a floating action bar
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-build-experience
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-create-promptdialog
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-customize-generate-mode
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-design-content-mode
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-design-prompt-mode
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-prompt-error-handling
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-prompting-floating-actionbar
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration-with-ai/integrate-ai-using-developer-tools-for-c/extend-copilot-in-business-central
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integration with AI
  - Integrate AI using developer tools for Copilot
  - Extend Copilot in Business Central
  - Build Copilot user experience
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration-with-ai/integrate-ai-using-developer-tools-for-c/extend-copilot-in-business-central
children: []
coverage:
  learn: 7
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 05c11cb5e253f253062b70830dd000e104c6aa95883c81f71a661f84472ef114
narrative: generated
---

# Build Copilot user experience

> Building the Copilot user interface in Business Central with PromptDialog pages: prompt mode, generate mode caption, content mode, inline error handling, and prompt actions that launch Copilot from pages. Use it for questions on how to design and wire the Copilot UI in AL.

Path: [Integration with AI](../../../integration-with-ai.md) > [Integrate AI using developer tools for Copilot](../../integrate-ai-using-developer-tools-for-c.md) > [Extend Copilot in Business Central](../extend-copilot-in-business-central.md) > Build Copilot user experience · tier official · system copilot · **unreviewed** (machine-generated narrative)

## Overview

This section describes how to build the user-facing part of a Copilot feature. The central object is the PromptDialog page type. It has three display modes: prompt mode, where the user gives input; generate mode, where Copilot shows progress; and content mode, where the user reviews the AI output.

The pages follow that flow. Start with creating the PromptDialog page and its properties (Extensible, PromptMode, IsPreview). Then design the prompt mode (input fields, placeholder text, prompt guides, generate and file attachment actions), customize the generate mode caption, and design the content mode (save, discard, regenerate, proposal history). Error handling in prompt dialogs covers showing errors inline. The last page covers prompt actions in a floating action bar that open the dialog from other pages.

Start with the page on creating the prompt dialog, then follow the modes in order. Read the prompt actions page when you need to make the feature reachable from List, Card, Document and other page types.

## Key points

- A PromptDialog page type is the first step; its properties set caption, extensibility (Extensible), initial mode (PromptMode) and preview status (IsPreview).
- Prompt mode: configure the prompt area with fields, placeholder text via InstructionalText, prompt guides for predefined prompts, and generate and file attachment actions (2024 release wave 2).
- Generate mode caption can be customized with Dialog.Open() or Dialog.Update() to give progress feedback, including for multi-step Copilot.
- Content mode shows AI output and lets users review, regenerate, save or discard proposals; it supports caption customization and a proposal history carousel with version history.
- Errors and messages from Dialog.Error(), Dialog.Message() and ErrorInfo can display inline in the prompt dialog instead of popups, with support for multiple messages, suppression and truncation (2024 release wave 2).
- Prompt actions launch Copilot from List, Card, Document, ListPart, StandardDialog, ListPlus and Worksheet pages, shown in a floating action bar with a Sparkle image.
- Prompt actions open the PromptDialog through the RunObject property and involve SaaS detection and capability registration (2024 release wave 1, runtime 13 and 14).

## Learn pages

- [Build a Copilot user experience with the PromptDialog page](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-build-experience): Learn how to use PromptDialog page type to create a Copilot experience in the client.
- [Create prompt dialog page for Copilot feature](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-create-promptdialog): Learn the first in designing the Copilot UI.
- [Customize generate mode caption in Copilot](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-customize-generate-mode): Learn how to change the caption progress bar shown in the UI of the prompt dialog page in generate mode.
- [Design content mode of prompt dialog page](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-design-content-mode): Learn how to define the screen of a Copilot prompt dialog page that displays the AI-generated output.
- [Design the prompt mode of prompt dialog page](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-design-prompt-mode): Learn how to define the screen of a Copilot prompt dialog page where users can add input that the AI generation logic uses for producing results.
- [Error handling in prompt dialogs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-prompt-error-handling): Discover how to manage errors directly within Copilot prompt dialogs in Business Central.
- [Prompting using a floating action bar](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-prompting-floating-actionbar): Learn how to create prompt actions to promote AI capabilities in Business Central

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
