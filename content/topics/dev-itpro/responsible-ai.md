---
id: topic/dev-itpro/responsible-ai
type: topic
title: Responsible AI
summary: Responsible AI in Business Central is a set of transparency notes for AI features and developer tools. They cover the AI development toolkit (preview), developer tools for Copilot, Machine Learning APIs and Semantic Metadata Search. They answer questions about capabilities, limitations, intended uses and responsible AI practices.
tier: official
language: en
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-11-11T00:59:22.225Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: ff0b445a7a1d74a551d1c51fff35a3fd461dfe31200ed9b77e384a6aa6e04082
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-ai-development-toolkit
    title: Transparency Note Business Central AI development toolkit (preview)
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ml-transparency-note
    title: Transparency Note Machine Learning APIs for Business Central
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-semantic-metadata-search
    title: Transparency Note Semantic Metadata Search in Business Central
    date: "2026-10-02"
    commit: null
    t: null
    quote: null
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-ai-development-toolkit
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-dev-tools-for-copilot
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ml-transparency-note
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-semantic-metadata-search
  objects: []
  features: []
  topics: []
  localizations: []
  videos:
    - video/7SSNcUMFtCw
    - video/fgWFOMPJd6U
    - video/juUBVPfIp8A
    - video/lNASlydCidI
    - video/qP0id91bIlA
  posts:
    - post/freddysblog/https-freddysblog-com-2026-11-07-directions-emea-2026--4bd603011b
  guidelines: []
learn_toc_path:
  - Responsible AI
toc_file: dev-itpro/TOC.md
parent: null
children: []
coverage:
  learn: 4
  code: 0
  video: 5
  blog: 1
  guideline: 0
bc_forms: []
member_hash: f00a53dec064a6cf7d94c56f8e42b2ead38b97d66a09f079b7acc323527b9ceb
narrative: generated
---

# Responsible AI

> Responsible AI in Business Central is a set of transparency notes for AI features and developer tools. They cover the AI development toolkit (preview), developer tools for Copilot, Machine Learning APIs and Semantic Metadata Search. They answer questions about capabilities, limitations, intended uses and responsible AI practices.

Path: Responsible AI · tier official · system copilot · narrative **unreviewed** (model text not yet checked)

## Overview

This section holds four transparency notes. Each one describes how an AI capability in Business Central works, what it is meant for, where its limits are, and what responsible AI practices apply. Two notes are aimed at partners who build AI features, one covers machine learning APIs, and one covers a search capability used by end users.

The AI development toolkit (preview) note covers a sandbox for prototyping and testing autonomous agents that use Azure OpenAI models. The developer tools for Copilot note covers the APIs and UI components used to add generative AI to extensions. The Machine Learning APIs note covers forecasting and prediction models. The Semantic Metadata Search note covers how queries are matched to application objects.

Start with the note that matches the feature you build or use. Partners building generative AI features should read the Copilot developer tools note first, then the toolkit note if they work with agents.

## Key points

- The AI development toolkit (preview) is a sandbox for partners to prototype and test autonomous agents that automate workflows and reason over BC data with Azure OpenAI models.
- The toolkit note covers agent instructions, configuration, task execution, access and permissions, change control and troubleshooting.
- Developer tools for Copilot provide APIs for text completion and chat completion, plus embeddings, a prompt dialog UI, feature governance and a feedback loop.
- Copilot developer tools include an admin screen for managing AI features.
- The Machine Learning APIs note covers the Forecasting Model and Prediction Model, Azure Machine Learning resources, the Responsible AI Standard and AI safety guardrails.
- Semantic Metadata Search matches queries to metadata entities by semantic similarity, handling synonyms and abbreviations, and integrates with tell me and report explorer.
- Semantic Metadata Search is limited to application objects, not business data, and its results depend on metadata quality.

## Learn pages

- [Transparency Note Business Central AI development toolkit (preview)](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-ai-development-toolkit): Learn how the Business Central AI development toolkit empowers partners to prototype AI-powered agents, automate workflows, and enhance productivity responsibly.
- [Transparency Note Developer Tools for Copilot in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-dev-tools-for-copilot): Developer tools for Copilot in Business Central help you build safer, adaptable AI features. Learn how to use the toolkit and boost productivity.
- [Transparency Note Machine Learning APIs for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ml-transparency-note): Understand how our AI technology works with regards to Machine Learning APIs, the choices system owners can make that influence system performance and behavior, and the importance of thinking about the whole system, including the technology, the people, and the environment
- [Transparency Note Semantic Metadata Search in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-semantic-metadata-search): Semantic Metadata Search helps you build safer, adaptable AI features. Learn how to use the toolkit and boost productivity.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Directions EMEA 2026 Reflections](../../posts/freddysblog/https-freddysblog-com-2026-11-07-directions-emea-2026--4bd603011b.md) (community post): "developers stay responsible for AI-written AL and need ways to verify it"
- [What's New: Business Central AI Resources (2025 release wave 1)](../../videos/7SSNcUMFtCw.md) (video): "content safety; data privacy; billing; responsible ai"
- [Business Central Under the Hood 11: New Data-Driven Copilot Experiences – Summarize with Copilot](../../videos/fgWFOMPJd6U.md) (video): "Harm testing for AI responses; Accuracy and grounding testing"
- [What's New: AI Development Toolkit (2026 release wave 1)](../../videos/juUBVPfIp8A.md) (video): "Prompt injection protection; Copilot credit insights in evaluations"
- [What's New: Designing and Developing Generative AI Experiences for Your Apps (2023 Release Wave 2)](../../videos/lNASlydCidI.md) (video): "Responsible AI Principles and Guidelines; AI-generated Content Disclaimer"
- [What's New: Designing Generative AI Experiences (2024 Release Wave 1)](../../videos/qP0id91bIlA.md) (video): "responsible ai; risk management; preview and undo"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
