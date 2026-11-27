---
id: topic/dev-itpro/integration-with-ai/integrate-ai-using-developer-tools-for-c
type: topic
title: Integrate AI using developer tools for Copilot
summary: "Developer tools for Copilot in Business Central: what counts as a Copilot extension, the System.AI module and PromptDialog page type, Azure OpenAI setup and Microsoft-managed resources, preparing app Help, and the transparency note. It answers questions for AL developers and partners building AI features."
tier: official
language: en
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-27T01:05:12.074Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 0c15fee34d4717abf1b834151f3661429855a849df480133842a3e8361fef70d
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-dev-tools-resources
    title: Business Central AI Resources for Copilot Development
    date: "2026-11-25"
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-dev-tools-resources
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-system-app-function-calling
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-dev-tools-get-started
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-and-agents-influence-without-extending
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-prepare-app-help-copilot
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-system-app-token-counting
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-dev-tools-for-copilot
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/developer-tools-for-copilot-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-extend-copilot-overview
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration-with-ai
    - topic/dev-itpro/integration-with-ai/integrate-ai-using-developer-tools-for-c/extend-copilot-in-business-central
  localizations: []
  videos:
    - video/jdevJbGgB-k
    - video/juUBVPfIp8A
    - video/NE7NIjpkX3c
    - video/QCo-uIfPs9g
    - video/RfHVHa_Qiqk
    - video/sv1utmneaXA
  posts:
    - post/aardvarklabs-blog/1609
    - post/aardvarklabs-blog/1891
    - post/aardvarklabs-blog/2467
    - post/aardvarklabs-blog/2663
    - post/aardvarklabs-blog/2759
    - post/demiliani-com/13611
    - post/olofsimren-com/3585
    - post/olofsimren-com/3630
  guidelines: []
  changes:
    - change/al-go/2402
    - change/al-go/2413
    - change/bcapps/10205
    - change/bcapps/11073
    - change/bcapps/12428
    - change/bcquality/246
    - change/bcquality/84
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
  video: 6
  blog: 8
  guideline: 0
bc_forms: []
member_hash: aeabb0e354c64dab6f26c0a75a3b42f75aacb52e074d17031f180db246dc234e
narrative: generated
---

# Integrate AI using developer tools for Copilot

> Developer tools for Copilot in Business Central: what counts as a Copilot extension, the System.AI module and PromptDialog page type, Azure OpenAI setup and Microsoft-managed resources, preparing app Help, and the transparency note. It answers questions for AL developers and partners building AI features.

Path: [Integration with AI](../integration-with-ai.md) > Integrate AI using developer tools for Copilot · tier official · system copilot · narrative **unreviewed** (model text not yet checked)

## Overview

This section is for partners and AL developers who want to add generative AI to Business Central extensions. It starts with concepts: what the developer tools are (the System.AI namespace, the PromptDialog page type, partner key management, Power BI monitoring and responsible AI), and what qualifies as an extension to Copilot (LLM-based, natural language, with human-in-the-loop patterns such as previews and feedback).

The resource pages cover the backend. By default, partners use Microsoft-managed Azure OpenAI resources, with consumption-based customer billing. A bring-your-own Azure OpenAI subscription is an option for specific needs, and the setup page lists the prerequisites for it. Other pages cover making app Help usable by Copilot and influencing Copilot and agents without extending them. The transparency note covers intended use of the tools.

Start with "What are the developer tools for Copilot?" and "What is considered an extension to Copilot?". Then read the AI resources page to choose a resource approach. For hands-on work, move to the subtopic "Extend Copilot in Business Central", which has 15 pages on building capabilities, designing the PromptDialog experience, and testing capabilities and agents.

## Key points

- The developer tools include the System.AI namespace, the PromptDialog page type, partner key management, Power BI monitoring and responsible AI guidance.
- A Copilot extension must be LLM-based, respond to natural language, and manage AI risk with human-in-the-loop patterns such as previews, confidence indication, and undo or discard.
- The default and recommended approach uses Microsoft-managed Azure OpenAI resources with GPT-4.1 and GPT-4.1-mini models and consumption-based customer billing.
- Partners can use their own Azure OpenAI subscription (BYO) for specific needs. The SetManagedResourceAuthorization method and error handling for overconsumption are covered.
- Azure OpenAI setup needs an Azure subscription, verified service access, role-based permissions, a created resource, a model deployment and API key management.
- Copilot and agents can use custom code and content from AL extensions without direct extensibility. Examples are Analyze list, Autofill, Chat, Summarize and Sales Order Agent (2025 wave 1).
- App Help for Copilot (preview) needs public HTTPS English documentation, indexed by Bing and set in the app.json Help property. A favicon adds brand visibility.
- The subtopic Extend Copilot in Business Central has 15 pages on building capabilities, PromptDialog design, and testing capabilities and agents.

## Subtopics

- [Extend Copilot in Business Central](integrate-ai-using-developer-tools-for-c/extend-copilot-in-business-central.md) (15 pages)

## More Learn pages

- [Business Central AI Resources for Copilot Development](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-dev-tools-resources): Learn how to choose between Microsoft-managed Business Central AI resources and your own Azure OpenAI subscription for Copilot in Marketplace extensions.
  - In the observatory: [Codeunit 7770 "AOAI Operation Response"](../../../objects/codeunit/7770.md)
- [Function calling in AI](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-system-app-function-calling): Learn how to call functions in Azure OpenAI.
- [Get set up with Azure OpenAI Service](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-dev-tools-get-started): Learn about the tasks that must be completed so that you can start integrating Azure OpenAI Service in your extensions to create Copilot experiences in Business Central
- [Influence Copilot and agents without extending them](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/copilot-and-agents-influence-without-extending): Learn how to influence Copilot and agents without extending them in Business Central.
- [Prepare your app Help for Copilot (preview)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-prepare-app-help-copilot): Explore how Copilot uses your app's online content as grounding data to deliver precise answers to user queries.
- [Token counting in AI](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-system-app-token-counting): Learn how to count the number of tokens in your input before sending a request to Azure OpenAI
- [Transparency Note Developer Tools for Copilot in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-dev-tools-for-copilot): Developer tools for Copilot in Business Central help you build safer, adaptable AI features. Learn how to use the toolkit and boost productivity.
- [What are the developer tools for Copilot?](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/developer-tools-for-copilot-overview): Get an overview of the toolkit from Business Central for extending Copilot in your extensions.
- [What is considered an extension to Copilot?](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-extend-copilot-overview): Learn whether your AI idea or feature is a match for Copilot in Business Central

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#2402 Move Copilot review engine into AL-Go](../../../changes/al-go/2402.md) (code change): "AL-Go gains a built-in Copilot pull request review"
- [#2413 Only enable automatic Copilot review triggers when opted in](../../../changes/al-go/2413.md) (code change): "Automatic Copilot review workflow triggers now activate only when explicitly opted in"
- [#10205 Deprecate Text Completion API in AI SDK (work item 621038)](../../../changes/bcapps/10205.md) (code change): "Text Completion API in the Azure OpenAI AI module is marked obsolete"
- [#11073 Validate image content before sending to Computer Vision](../../../changes/bcapps/11073.md) (code change): "Image Analysis Management now validates image content before sending to Computer Vision"
- [#12428 Add Copilot feature trial interface](../../../changes/bcapps/12428.md) (code change): "Added a public Copilot feature trial interface to System Application"
- [#246 Expose plan guidance as a preview plugin skill](../../../changes/bcquality/246.md) (code change): "BCQuality now exposes plan guidance as a preview plugin skill"
- [#84 Package BCQuality as an installable plugin (experiment)](../../../changes/bcquality/84.md) (code change): "packages BCQuality as an installable plugin for Copilot CLI"
- [Integrating AI in Business Central: A Step-by-Step Guide](../../../posts/aardvarklabs-blog/1609.md) (community post): "building a custom AI-powered Copilot agent in Business Central that automates customer address extraction"
- [Implementing a Multi-Step Process for AI Recommendations in Business Central](../../../posts/aardvarklabs-blog/1891.md) (community post): "build a multi-step AI-assisted process in Business Central that generates product recommendations"
- [Enhancing Business Central with Address Validation AI](../../../posts/aardvarklabs-blog/2467.md) (community post): "Address validation using Azure OpenAI compares user-entered addresses against existing Business Central address records"
- [Azure OpenAI in Business Central AL: Managed vs Unmanaged](../../../posts/aardvarklabs-blog/2663.md) (community post): "SetAuthorization uses your own Azure OpenAI deployment, which gives you control"
- [Using CoPilot to Upgrade Service Notes for Invoices in Business Central AL](../../../posts/aardvarklabs-blog/2759.md) (community post): "use Copilot to automatically upgrade raw service technician notes into professional"
- [From Chat Completions to Responses API: why Azure OpenAI’s new paradigm changes everything.](../../../posts/demiliani-com/13611.md) (community post): "Business Central's System.AI namespace currently wraps Chat Completions and provides guardrails"
- [Copilot Inventory Queries](../../../posts/olofsimren-com/3585.md) (community post): "Built with the Copilot capability tools Microsoft provides for AL"
- [Copilot in Planning Parameter Worksheet](../../../posts/olofsimren-com/3630.md) (community post): "uses Copilot powered by Azure OpenAI to suggest inventory planning parameters"
- [Business Central Under the Hood episode 1: Developing AI in Business Central](../../../videos/jdevJbGgB-k.md) (video): "Marketing text generation; Chat Copilot for Business Central; AI developer toolkit"
- [What's New: AI Development Toolkit (2026 release wave 1)](../../../videos/juUBVPfIp8A.md) (video): "Content filtering policies; Prompt injection protection"
- [What's New: Prepare Your Copilot Extension - Practical Considerations (2025 release wave 1)](../../../videos/NE7NIjpkX3c.md) (video): "copilot extension; cloud deployment; large language models; prompt engineering"
- [What's New: Extending Copilot in Business Central (2024 Release Wave 2)](../../../videos/QCo-uIfPs9g.md) (video): "Telemetry for Copilot Features; Managed AI Resources; Temperature and Max Tokens"
- [Business Central Under the Hood episode 8: AI Small Language Models and Fine-tuning](../../../videos/RfHVHa_Qiqk.md) (video): "small language models; fine-tuning; model distillation; phi models"
- [Introducing: Extending Copilot Chat with Your App's Documentation (2025 release wave 2)](../../../videos/sv1utmneaXA.md) (video): "Extending Copilot Chat with Your App's Documentation"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
