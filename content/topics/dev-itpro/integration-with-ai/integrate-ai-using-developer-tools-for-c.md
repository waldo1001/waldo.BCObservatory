---
id: topic/dev-itpro/integration-with-ai/integrate-ai-using-developer-tools-for-c
type: topic
title: Integrate AI using developer tools for Copilot
summary: "Developer tools for Copilot in Business Central: what counts as a Copilot extension, the System.AI module and PromptDialog page type, Azure OpenAI setup and Business Central AI resources, Help preparation, and the transparency note. It answers planning, setup and design questions for partners building generative AI features in AL."
tier: official
language: en
system: copilot
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:16:47.695Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 91c26a4ae44866a51d5b77d00c37dc59649c1c2cfb47065a017ab6a6aa59d1c5
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-bestpractices
    title: Best Practices for Testing the Copilot Capability in AL
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-build-experience
    title: Build a Copilot user experience with the PromptDialog page
    date: "2026-05-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-build-capability-in-al
    title: Build the Copilot capability in AL
    date: "2026-10-02"
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-datasets
    title: Datasets
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-testtool
    title: Evaluation
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-system-app-function-calling
    title: Function calling in AI
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-dev-tools-get-started
    title: Get set up with Azure OpenAI Service
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-and-agents-influence-without-extending
    title: Influence Copilot and agents without extending them
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-build-experience-overview
    title: Introduction to developing generative AI experiences for your extensions
    date: "2025-07-25"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-prepare-app-help-copilot
    title: Prepare your app Help for Copilot (preview)
    date: "2026-05-03"
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
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot
    title: Test the Copilot Capability in AL
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-system-app-token-counting
    title: Token counting in AI
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-dev-tools-for-copilot
    title: Transparency Note Developer Tools for Copilot in Business Central
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-dev-tools-resources
    title: Use developer tools for Copilot in Business Central AI resources
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/developer-tools-for-copilot-overview
    title: What are the developer tools for Copilot?
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-extend-copilot-overview
    title: What is considered an extension to Copilot?
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-agent-tests
    title: Write agent tests
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-ai-tests
    title: Write AI tests
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-system-app-function-calling
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-dev-tools-get-started
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-and-agents-influence-without-extending
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-prepare-app-help-copilot
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-system-app-token-counting
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-dev-tools-for-copilot
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-dev-tools-resources
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/developer-tools-for-copilot-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-extend-copilot-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration-with-ai
    - topic/dev-itpro/integration-with-ai/integrate-ai-using-developer-tools-for-c/extend-copilot-in-business-central
  localizations: []
  videos:
    - video/7SSNcUMFtCw
  posts:
    - post/aardvarklabs-blog/1609
    - post/aardvarklabs-blog/2467
    - post/aardvarklabs-blog/2663
    - post/aardvarklabs-blog/2965
    - post/demiliani-com/13611
    - post/thinkaboutit-be/8204
  guidelines: []
learn_toc_path:
  - Integration with AI
  - Integrate AI using developer tools for Copilot
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration-with-ai
children:
  - topic/dev-itpro/integration-with-ai/integrate-ai-using-developer-tools-for-c/extend-copilot-in-business-central
coverage:
  learn: 24
  code: 0
  video: 1
  blog: 6
  guideline: 0
bc_forms: []
member_hash: aeabb0e354c64dab6f26c0a75a3b42f75aacb52e074d17031f180db246dc234e
narrative: generated
---

# Integrate AI using developer tools for Copilot

> Developer tools for Copilot in Business Central: what counts as a Copilot extension, the System.AI module and PromptDialog page type, Azure OpenAI setup and Business Central AI resources, Help preparation, and the transparency note. It answers planning, setup and design questions for partners building generative AI features in AL.

Path: [Integration with AI](../integration-with-ai.md) > Integrate AI using developer tools for Copilot · tier official · system copilot · narrative reviewed by Opus

## Overview

This section is for partners and AL developers who want to add generative AI to Business Central extensions. It starts with concepts: what the developer tools are (the System.AI namespace, the PromptDialog page type, partner key management, Power BI monitoring, responsible AI) and what is considered an extension to Copilot. An extension must be LLM-based, respond to natural language, and manage risk with human-in-the-loop patterns such as previews, confidence indication, and undo or discard.

The setup pages cover two routes to Azure OpenAI. You can get your own Azure subscription, access, permissions, resource, and deployment. Or you can use Business Central AI resources, which are Microsoft-managed, use GPT-4.1 and GPT-4.1-mini, and bill customers by consumption. Bring-your-own subscription is optional for custom scenarios. The pages also cover how to influence Copilot and agents without extending them, how to prepare app Help for Copilot (preview), and the transparency note.

Start with "What are the developer tools for Copilot?" and "What is considered an extension to Copilot?". Then follow the setup pages for your authorization model. The subtopic "Extend Copilot in Business Central" (15 pages) has the AL how-to detail: building a capability, designing the PromptDialog experience, and testing capabilities and agents.

## Key points

- A Copilot extension must be LLM-based, respond to natural language to help users finish tasks, and manage generative AI risk with human-in-the-loop patterns (preview, confidence level, undo and discard).
- The developer tools include the System.AI namespace, the PromptDialog page type, partner key management, Power BI monitoring, and responsible AI guidance.
- Azure OpenAI prerequisites: an Azure subscription, verified service access, role-based access control permissions, a resource, a model deployment, and API key management.
- Business Central AI resources offer Microsoft-managed Azure OpenAI with GPT-4.1 and GPT-4.1-mini, billed to customers by consumption.
- Use the SetManagedResourceAuthorization method for managed resources and SetAuthorization for your own subscription. Handle errors with AOAI Operation Response.
- Copilot and agents can use content from AL extensions without direct extensibility, for example in Analyze list, Autofill, Chat, Summarize, Sales Order Agent, and bank reconciliation. The page references 2025 wave 1.
- App Help for Copilot (preview) needs public HTTPS English documentation, Bing indexing, the app.json Help property, and a favicon for brand visibility.
- The transparency note covers text and chat completion APIs, prompt dialog UI, embeddings, feature governance, the feedback loop, and the admin screen for managing AI features.

## Subtopics

- [Extend Copilot in Business Central](integrate-ai-using-developer-tools-for-c/extend-copilot-in-business-central.md) (15 pages)

## More Learn pages

- [Function calling in AI](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-system-app-function-calling): Learn how to call functions in Azure OpenAI.
- [Get set up with Azure OpenAI Service](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-dev-tools-get-started): Learn about the tasks that must be completed so that you can start integrating Azure OpenAI Service in your extensions to create Copilot experiences in Business Central
- [Influence Copilot and agents without extending them](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-and-agents-influence-without-extending): Learn how to influence Copilot and agents without extending them in Business Central.
- [Prepare your app Help for Copilot (preview)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-prepare-app-help-copilot): Explore how Copilot uses your app's online content as grounding data to deliver precise answers to user queries.
- [Token counting in AI](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-system-app-token-counting): Learn how to count the number of tokens in your input before sending a request to Azure OpenAI
- [Transparency Note Developer Tools for Copilot in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-dev-tools-for-copilot): Developer tools for Copilot in Business Central help you build safer, adaptable AI features. Learn how to use the toolkit and boost productivity.
- [Use developer tools for Copilot in Business Central AI resources](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-dev-tools-resources): Learn how you can use the developer tools for Copilot in Business Central AI resources in your own Marketplace extensions to create Copilot experiences in Business Central
- [What are the developer tools for Copilot?](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/developer-tools-for-copilot-overview): Get an overview of the toolkit from Business Central for extending Copilot in your extensions.
- [What is considered an extension to Copilot?](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-extend-copilot-overview): Learn whether your AI idea or feature is a match for Copilot in Business Central

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Integrating AI in Business Central: A Step-by-Step Guide](../../../posts/aardvarklabs-blog/1609.md) (community post): "building a custom AI-powered Copilot agent in Business Central that automates customer address extraction"
- [Enhancing Business Central with Address Validation AI](../../../posts/aardvarklabs-blog/2467.md) (community post): "Address validation using Azure OpenAI compares user-entered addresses against existing Business Central address records"
- [Azure OpenAI in Business Central AL: Managed vs Unmanaged](../../../posts/aardvarklabs-blog/2663.md) (community post): "compares two authentication methods for Azure OpenAI in Business Central: unmanaged and managed"
- [Step-by-Step Guide to AI Campaigns in Business Central](../../../posts/aardvarklabs-blog/2965.md) (community post): "Leverages Business Central's managed AI resource with Bing Grounded Search"
- [From Chat Completions to Responses API: why Azure OpenAI’s new paradigm changes everything.](../../../posts/demiliani-com/13611.md) (community post): "System.AI namespace currently wraps Chat Completions and provides guardrails, telemetry"
- [Quick Tip: What’s in Business Central Update 28.5?](../../../posts/thinkaboutit-be/8204.md) (community post): "Microsoft-managed Azure OpenAI resources for Copilot extensions (now generally available)"
- [What's New: Business Central AI Resources (2025 release wave 1)](../../../videos/7SSNcUMFtCw.md) (video): "Bring your own Azure OpenAI subscription; System prompts for AI safety"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
