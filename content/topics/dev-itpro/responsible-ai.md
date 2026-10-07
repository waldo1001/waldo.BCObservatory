---
id: topic/dev-itpro/responsible-ai
type: topic
title: Responsible AI
summary: "Responsible AI in Business Central is a set of transparency notes for three AI areas: developer tools for Copilot, Machine Learning APIs, and Semantic Metadata Search. It answers questions about how each capability works, what it can and cannot do, intended uses, and responsible AI practices for partners."
tier: official
language: en
system: copilot
review:
  state: reviewed
  by: opus
  at: "2026-10-07T05:21:21.306Z"
  flags: []
generated:
  at: "2026-10-07T05:23:51.651Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 1d33aa1ee9f407c0cb981e7f27195c1e8d6eb356cb2e15113b76235575d0d896
evidence:
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-dev-tools-for-copilot
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ml-transparency-note
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-semantic-metadata-search
  objects: []
  features: []
  topics: []
  localizations: []
  videos:
    - video/06vgkq2EXmA
    - video/NE7NIjpkX3c
  posts: []
  guidelines: []
learn_toc_path:
  - Responsible AI
toc_file: dev-itpro/TOC.md
parent: null
children: []
coverage:
  learn: 3
  code: 0
  video: 2
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 88cdf0656fd99d4e1396a8de5a1204ced1bee609ac5f9f7802ff622102fce563
narrative: generated
---

# Responsible AI

> Responsible AI in Business Central is a set of transparency notes for three AI areas: developer tools for Copilot, Machine Learning APIs, and Semantic Metadata Search. It answers questions about how each capability works, what it can and cannot do, intended uses, and responsible AI practices for partners.

Path: Responsible AI · tier official · system copilot · narrative reviewed by Opus

## Overview

This section holds three transparency notes. Each one explains how an AI capability in Business Central works, what it is meant for, where its limits are, and which responsible AI practices apply.

The first note covers developer tools for Copilot. It describes how partners build and deploy generative AI features in extensions with Azure OpenAI Service APIs and in-app UI components. The second covers the Machine Learning APIs, including the Forecasting and Prediction models, for partners building ML features. The third covers Semantic Metadata Search, which matches user queries to application metadata by meaning instead of exact keywords.

The pages are independent, so start with the one that matches your scenario. Partners building generative AI extensions should read the developer tools note. Partners building forecasting or prediction features should read the Machine Learning APIs note. Anyone who wants to know how Tell me and the report explorer find results should read the Semantic Metadata Search note.

## Key points

- Developer tools note: partners build generative AI features in BC extensions using Azure OpenAI Service APIs and in-app UI components.
- Developer tools include APIs for text completion and chat completion, embeddings, a prompt dialog UI, feature governance, a feedback loop, and an admin screen for managing AI features.
- Machine Learning APIs note covers the Forecasting Model and Prediction Model, Azure Machine Learning resources, the Responsible AI Standard, and AI safety guardrails.
- The ML note explains capabilities, limitations, and intended use cases for partners building ML features.
- Semantic Metadata Search matches queries to metadata entities by semantic similarity, with synonym and abbreviation handling.
- Semantic Metadata Search is integrated with Tell me and the report explorer.
- Semantic Metadata Search is limited to application objects, not business data, and its results depend on the quality of the metadata.

## Learn pages

- [Transparency Note Developer Tools for Copilot in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-dev-tools-for-copilot): Developer tools for Copilot in Business Central help you build safer, adaptable AI features. Learn how to use the toolkit and boost productivity.
- [Transparency Note Machine Learning APIs for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ml-transparency-note): Understand how our AI technology works with regards to Machine Learning APIs, the choices system owners can make that influence system performance and behavior, and the importance of thinking about the whole system, including the technology, the people, and the environment
- [Transparency Note Semantic Metadata Search in Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/ai/transparency-note-semantic-metadata-search): Semantic Metadata Search helps you build safer, adaptable AI features. Learn how to use the toolkit and boost productivity.

## Videos and posts

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [Business Central Under the Hood episode 4: How we built Copilot Chat in Business Central](../../videos/06vgkq2EXmA.md) (video): "Jailbreak Prevention; Harmful Input Dataset Testing"
- [What's New: Prepare Your Copilot Extension - Practical Considerations (2025 release wave 1)](../../videos/NE7NIjpkX3c.md) (video): "Hallucinations and Fabrications Management"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
