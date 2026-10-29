---
id: post/wingate365-com/https-blog-wingate365-com-2025-10-south-coast-summit-2025-ai-driven-page-html--8f5384bed0
type: post
title: "South Coast Summit 2025 - AI-Driven Page Scripting: Practical Use Cases for Dynamics 365"
summary: A structured approach to using AI for creating and scaling page scripting test automation in Dynamics 365, progressing through Stand (baseline scripts), Walk (prompt systems), Run (variant generation), and Fly (high-volume PowerShell automation) phases. Covers practical implementation with GitHub Copilot, real-world gotchas, and data governance considerations.
tier: community
language: en
tags:
  - page scripting
  - test automation
  - ai adoption
  - prompt engineering
  - copilot
  - task recording
  - structured outputs
system: development
review:
  state: reviewed
  by: opus
  at: "2026-10-29T22:03:33.992Z"
  flags: []
generated:
  at: "2026-10-29T21:55:00.611Z"
  pipeline: 0.2.0
  prompts:
    extract-post: 1
  input_hash: 411e73bf757b5de87f2c8d4ebbe29168cbcf863fd3bf420a0fdf93a40a6980a4
evidence:
  - kind: blog
    url: https://blog.wingate365.com/2025/10/south-coast-summit-2025-ai-driven-page.html
    title: "South Coast Summit 2025 - AI-Driven Page Scripting: Practical Use Cases for Dynamics 365"
    date: "2025-10-18"
    commit: null
    t: null
    quote: null
  - kind: blog
    url: https://blog.wingate365.com/2025/10/south-coast-summit-2025-ai-driven-page.html
    title: "South Coast Summit 2025 - AI-Driven Page Scripting: Practical Use Cases for Dynamics 365"
    date: "2025-10-18"
    commit: null
    t: null
    quote: AI tools are excellent at understanding patterns and generating structured content, but they're not optimised for very high-volume data operations.
  - kind: blog
    url: https://blog.wingate365.com/2025/10/south-coast-summit-2025-ai-driven-page.html
    title: "South Coast Summit 2025 - AI-Driven Page Scripting: Practical Use Cases for Dynamics 365"
    date: "2025-10-18"
    commit: null
    t: null
    quote: Instead of manually creating script after script, you define your variants in structured files and let the AI generate the complete test suite.
  - kind: blog
    url: https://blog.wingate365.com/2025/10/south-coast-summit-2025-ai-driven-page.html
    title: "South Coast Summit 2025 - AI-Driven Page Scripting: Practical Use Cases for Dynamics 365"
    date: "2025-10-18"
    commit: null
    t: null
    quote: The AI won't replace understanding your business processes or knowing how to create good tests. But it absolutely can multiply your ability to execute.
links:
  learn: []
  objects: []
  features: []
  topics: []
  localizations: []
  videos: []
  posts: []
  guidelines: []
post_id: https://blog.wingate365.com/2025/10/south-coast-summit-2025-ai-driven-page.html
source_id: wingate365-com
source_name: Wingate365
url: https://blog.wingate365.com/2025/10/south-coast-summit-2025-ai-driven-page.html
published_at: "2025-10-18T21:12:00.000Z"
author: Andy Wingate
full_text: false
words: 1066
quotes:
  - text: AI tools are excellent at understanding patterns and generating structured content, but they're not optimised for very high-volume data operations.
    why_it_matters: Explains why delegating high-volume generation to PowerShell is necessary to avoid token limits and inefficiency with direct AI generation
  - text: Instead of manually creating script after script, you define your variants in structured files and let the AI generate the complete test suite.
    why_it_matters: Shows the efficiency gain when AI handles repetitive script creation after understanding the pattern from baseline examples
  - text: The AI won't replace understanding your business processes or knowing how to create good tests. But it absolutely can multiply your ability to execute.
    why_it_matters: Sets realistic expectations for AI's role in test automation as an efficiency multiplier rather than a replacement for domain knowledge
code_objects_mentioned: []
systems:
  - development
  - platform
  - integration
versions_mentioned: []
cautions:
  - kind: gotcha
    quote: If you're using SaaS environments, your test-runner account needs MFA disabled or you'll have a bad time
    objects: []
    events: []
    versions: []
  - kind: gotcha
    quote: Make sure your user's default company is set correctly before batch runs
    objects: []
    events: []
    versions: []
  - kind: gotcha
    quote: Test your base script with the actual test-runner account - things like "show more" actions can break scripts if permissions aren't quite right
    objects: []
    events: []
    versions: []
  - kind: warning
    quote: If you're working with sensitive data, use Azure OpenAI models deployed in your own tenant
    objects: []
    events: []
    versions: []
preview:
  embeddable: true
  frame_url: null
  image: null
  image_alt: null
  image_w: null
  image_h: null
  site_name: Wingate365
  favicon: https://blog.wingate365.com/favicon.svg
  probed_at: "2026-10-29T21:59:57.146Z"
---

# South Coast Summit 2025 - AI-Driven Page Scripting: Practical Use Cases for Dynamics 365

[Read the post](https://blog.wingate365.com/2025/10/south-coast-summit-2025-ai-driven-page.html) · Wingate365 (Andy Wingate) · 2025-10-18 · 1066 words · tier community · reviewed (checked by Opus)

> A structured approach to using AI for creating and scaling page scripting test automation in Dynamics 365, progressing through Stand (baseline scripts), Walk (prompt systems), Run (variant generation), and Fly (high-volume PowerShell automation) phases. Covers practical implementation with GitHub Copilot, real-world gotchas, and data governance considerations.

## Key points

- Page scripting baseline creation provides foundation for AI to understand patterns and generate variants at scale
- Using VS Code with GitHub Copilot Pro and Model Context Protocol servers enables multi-file management and integration with Azure DevOps or Jira
- Delegating high-volume generation to PowerShell scripts written by AI avoids token limits while leveraging AI's pattern understanding and scripting capabilities
- Security considerations include using Azure OpenAI in your own tenant for sensitive data, disabling MFA on test accounts, and validating permissions before batch runs
- This approach transfers across multiple ERP systems, working similarly for Business Central and Finance & Operations

## Quotes

- "AI tools are excellent at understanding patterns and generating structured content, but they're not optimised for very high-volume data operations." (Explains why delegating high-volume generation to PowerShell is necessary to avoid token limits and inefficiency with direct AI generation)
- "Instead of manually creating script after script, you define your variants in structured files and let the AI generate the complete test suite." (Shows the efficiency gain when AI handles repetitive script creation after understanding the pattern from baseline examples)
- "The AI won't replace understanding your business processes or knowing how to create good tests. But it absolutely can multiply your ability to execute." (Sets realistic expectations for AI's role in test automation as an efficiency multiplier rather than a replacement for domain knowledge)

## Heads up

- gotcha: "If you're using SaaS environments, your test-runner account needs MFA disabled or you'll have a bad time"
- gotcha: "Make sure your user's default company is set correctly before batch runs"
- gotcha: "Test your base script with the actual test-runner account - things like "show more" actions can break scripts if permissions aren't quite right"
- warning: "If you're working with sensitive data, use Azure OpenAI models deployed in your own tenant"

## Context

- Features: page scripting, task recording, AI-driven variant generation, batch script creation, GitHub Copilot Pro integration, Model Context Protocol, PowerShell automation, YAML scripting

Source: Wingate365, community blog. Summary, key points and quotes are derived (CONTENT-NOTICE.md); read the original for the full text.
