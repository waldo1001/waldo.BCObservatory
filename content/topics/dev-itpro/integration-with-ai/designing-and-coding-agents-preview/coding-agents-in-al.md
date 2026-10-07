---
id: topic/dev-itpro/integration-with-ai/designing-and-coding-agents-preview/coding-agents-in-al
type: topic
title: Coding agents in AL
summary: "Coding agents in AL (preview) covers building custom Business Central agents in AL: defining and registering them, setup pages, programmatic configuration, task management, model selection, and converting a prototyped agent to code. It answers how-to questions about the interfaces, codeunits and page types involved."
tier: official
language: en
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-07T02:22:03.754Z"
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 273246acb57d28ec7afd92fa67c6ac10fad1745802d3f9f85bbe8b6cc55a1357
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-models
    title: AI Models for Agents (preview)
    date: "2026-06-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-overview
    title: Coding agents in AL (preview)
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-configuration
    title: Configure agents programmatically (preview)
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-convert-agent
    title: Convert an agent to AL code (preview)
    date: "2026-05-03"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-setup-page
    title: Create agent setup pages (preview)
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-define-register
    title: Define and register an agent programmatically (preview)
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-tasks
    title: Managing agent tasks programmatically (preview)
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-type-configuration-dialog
    title: The ConfigurationDialog Page Type (preview)
    date: "2026-05-03"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-models
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-configuration
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-convert-agent
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-setup-page
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-define-register
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-tasks
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-type-configuration-dialog
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration-with-ai/designing-and-coding-agents-preview
  localizations: []
  videos:
    - video/EwN3xb2q7vE
    - video/MNwTt06ZxwY
    - video/nbGw2g3KMXI
  posts:
    - post/aardvarklabs-blog/3097
    - post/aardvarklabs-blog/3348
    - post/bertverbeek-nl/1219
    - post/bertverbeek-nl/1272
    - post/demiliani-com/12644
    - post/kauffmann-nl/8436
  guidelines: []
learn_toc_path:
  - Integration with AI
  - Designing and coding agents (preview)
  - Coding agents in AL
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration-with-ai/designing-and-coding-agents-preview
children: []
coverage:
  learn: 8
  code: 0
  video: 3
  blog: 6
  guideline: 0
bc_forms: []
member_hash: 69eac98ac3509b30b15900079714f9d3546b4ea11aac6d5b7228ce8677ee298c
narrative: generated
---

# Coding agents in AL

> Coding agents in AL (preview) covers building custom Business Central agents in AL: defining and registering them, setup pages, programmatic configuration, task management, model selection, and converting a prototyped agent to code. It answers how-to questions about the interfaces, codeunits and page types involved.

Path: [Integration with AI](../../integration-with-ai.md) > [Designing and coding agents (preview)](../designing-and-coding-agents-preview.md) > Coding agents in AL · tier official · system development · narrative reviewed by Opus

## Overview

This section is for developers who want to write an agent in AL instead of only using the design experience. It explains the core interfaces (IAgentFactory, IAgentMetadata, IAgentTaskExecution), how to register an agent through the Agent Metadata Provider enum and the Copilot capability, and how to give it a setup experience.

The pages fit together as a build sequence. Start with the overview page, which has a quick-start template. Then define and register the agent, create the setup page with the ConfigurationDialog page type and Agent Setup Part, and configure instances with the Agent codeunit (instructions, display name, profile, localization, archiving). Managing agent tasks covers creating tasks from page actions, business events and email triggers, plus attachments and lifecycle.

If you already prototyped an agent in the design experience, use the convert page to export its settings and package them in an AL app. The AI models page explains model selection and resolution for agents created either way. All pages are marked preview.

## Key points

- Custom agents are built by extending the Agent Metadata Provider enum and implementing IAgentFactory, IAgentMetadata and IAgentTaskExecution, and by registering the Copilot capability.
- The overview page includes a quick-start template and guidance on setup pages, task lifecycle, attachments and cross-agent operations. It mentions versions 27.4 and 28.1.
- Setup pages use the ConfigurationDialog page type, a modal dialog with OK and Cancel system actions, a Content area, temporary data sources and AgentSetupPart.
- Setup pages should make changes reversible, track changes, and persist custom configuration fields.
- The Agent codeunit configures instances programmatically: Archive, IsArchived, SetInstructions, SetDisplayName, SetProfile and UpdateLocalizationSettings.
- Agent tasks can be created from page actions, business events and email triggers, with attachments, message tracking and external ID tracking. The tasks page mentions version 28.1.
- Converting a prototyped agent to AL means exporting its settings, then implementing instructions, permission sets, default profile, agent user settings, localization settings and triggering logic.
- The AI models page covers auto model selection, model lifecycle, and the resolution order between agent-level and task-level models.

## Learn pages

- [AI Models for Agents (preview)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-models): Learn about AI model availability, lifecycle, and how to select models for agents in Dynamics 365 Business Central.
- [Coding agents in AL (preview)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-overview): Learn about the development tools for building AI agents in Dynamics 365 Business Central.
- [Configure agents programmatically (preview)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-configuration): Learn how to configure agent instances, manage lifecycle settings, and update agent instructions programmatically in Dynamics 365 Business Central.
- [Convert an agent to AL code (preview)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-convert-agent): Learn how to convert an agent created in Business Central to an agent defined in AL code for distribution in an AL application.
- [Create agent setup pages (preview)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-setup-page): Learn how to create setup pages for agents in Dynamics 365 Business Central using the ConfigurationDialog page type.
- [Define and register an agent programmatically (preview)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-define-register): Learn how to define and register AI agents programmatically in Dynamics 365 Business Central using the AI development toolkit.
- [Managing agent tasks programmatically (preview)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/ai-agent-sdk-tasks): Learn how to create and manage agent tasks, work with agent sessions, and handle cross-agent operations in Dynamics 365 Business Central.
- [The ConfigurationDialog Page Type (preview)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-page-type-configuration-dialog): Learn how to use the `ConfigurationDialog` page type to create focused configuration dialogs for managing agent settings in Dynamics 365 Business Central.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Step-by-Step Guide: Create Agents in AL Code](../../../../posts/aardvarklabs-blog/3097.md) (community post): "Building agents in Business Central AL involves creating setup tables, pages, codeunits"
- [Step-by-Step Guide to Secure Business Central Agent Implementations in AL](../../../../posts/aardvarklabs-blog/3348.md) (community post): "step-by-step AL code examples to limit what agents can see and do"
- [Agents in Business Central – part 1 – the architecture](../../../../posts/bertverbeek-nl/1219.md) (community post): "Custom agents require enabling the feature, assigning AGENT-ADMIN permissions"
- [Agents in Business Central – part 5 – Creating agent from code](../../../../posts/bertverbeek-nl/1272.md) (community post): "how to create, configure, and register agents programmatically in Business Central using AL code"
- [Dynamics 365 Business Central: debugging agent sessions.](../../../../posts/demiliani-com/12644.md) (community post): "AL Language extension runtime 17.0 introduces debugging support for agent sessions in Business Central"
- [Designing Agents for Business Central](../../../../posts/kauffmann-nl/8436.md) (community post): "Coding agents in AL code, reducing manual conversion time to minutes"
- [What's New: Coding Business Central Agents with AI Development Toolkit](../../../../videos/EwN3xb2q7vE.md) (video): "Coding Business Central Agents with AI Development Toolkit; Agent Type Definition; Agent Factory Interface"
- [Microsoft presents: Building and shipping agents in Business Central](../../../../videos/MNwTt06ZxwY.md) (video): "Building and shipping agents in Business Central; agent configuration; permissions"
- [20260713 - From Zero to Agent Building agents in Business Central](../../../../videos/nbGw2g3KMXI.md) (video): "From Zero to Agent Building agents in Business Central; custom agents; agent building; permissions"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
