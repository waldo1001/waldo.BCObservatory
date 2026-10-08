---
id: topic/dev-itpro/integration-with-ai/integrate-ai-using-developer-tools-for-c/extend-copilot-in-business-central/build-copilot-user-experience
type: topic
title: Build Copilot user experience
summary: Building Copilot user experiences in Business Central with the PromptDialog page type. It covers creating the page, designing prompt, generate and content modes, error handling, and launching Copilot features from prompt actions. It answers how-to questions for AL developers.
tier: official
language: en
system: copilot
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:42.483Z"
  flags: []
generated:
  at: "2026-10-08T00:04:31.553Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 5490002d4c282b35bb328697f698dd40d3c818f828cc32e198c06ffd98a3b4be
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

> Building Copilot user experiences in Business Central with the PromptDialog page type. It covers creating the page, designing prompt, generate and content modes, error handling, and launching Copilot features from prompt actions. It answers how-to questions for AL developers.

Path: [Integration with AI](../../../integration-with-ai.md) > [Integrate AI using developer tools for Copilot](../../integrate-ai-using-developer-tools-for-c.md) > [Extend Copilot in Business Central](../extend-copilot-in-business-central.md) > Build Copilot user experience · tier official · system copilot · narrative reviewed (checked by Opus)

## Overview

The PromptDialog page type is the basis for Copilot user interfaces in Business Central. A dialog moves through three modes: prompt mode where the user gives input, generate mode while the AI works, and content mode where the user reviews the result and saves or discards it. System actions such as Generate, Regenerate, OK and Cancel drive these steps.

The pages follow that flow. Start with the overview page, then create the page and set its properties. Next, design the prompt mode and content mode, customize the generate mode caption, and handle errors inline. The last page covers prompt actions that open the dialog from other pages.

Most pages are developer how-tos. Read them in order when building a new Copilot feature, or jump to a single page when changing one mode.

## Key points

- PromptDialog pages have three modes: prompt (input), generate (AI processing) and content (review, save or discard).
- Creating the page sets properties for caption, Extensible, PromptMode and IsPreview.
- Prompt mode supports a prompt area with fields, InstructionalText placeholder text, prompt guides for predefined prompts, a generate action, file attachment and preference options. The prompt mode page refers to 2024 release wave 2.
- Content mode shows AI output and offers regenerate, save and discard actions, caption customization, a proposal history carousel and version history.
- The generate mode caption can be changed with Dialog.Open() or Dialog.Update() to show progress, for example in multi-step Copilots.
- Dialog.Error(), Dialog.Message() and ErrorInfo can display inline in the prompt dialog instead of popups, with multiple messages, error suppression and message truncation (2024 release wave 2).
- Prompt actions on List, Card, Document, ListPart, StandardDialog, ListPlus and Worksheet pages open a PromptDialog from the floating action bar, using RunObject, the Sparkle image, SaaS detection and capability registration (2024 release wave 1, runtime 13 and 14).

## Learn pages

- [Build a Copilot user experience with the PromptDialog page](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-build-experience): Learn how to use PromptDialog page type to create a Copilot experience in the client.
- [Create prompt dialog page for Copilot feature](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-create-promptdialog): Learn the first in designing the Copilot UI.
- [Customize generate mode caption in Copilot](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-customize-generate-mode): Learn how to change the caption progress bar shown in the UI of the prompt dialog page in generate mode.
- [Design content mode of prompt dialog page](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-design-content-mode): Learn how to define the screen of a Copilot prompt dialog page that displays the AI-generated output.
- [Design the prompt mode of prompt dialog page](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-design-prompt-mode): Learn how to define the screen of a Copilot prompt dialog page where users can add input that the AI generation logic uses for producing results.
- [Error handling in prompt dialogs](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-prompt-error-handling): Discover how to manage errors directly within Copilot prompt dialogs in Business Central.
- [Prompting using a floating action bar](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-prompting-floating-actionbar): Learn how to create prompt actions to promote AI capabilities in Business Central

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
