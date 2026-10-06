---
id: topic/dev-itpro/integration-with-ai/integrate-ai-using-developer-tools-for-c/extend-copilot-in-business-central/test-copilot-capability-in-al
type: topic
title: Test Copilot capability in AL
summary: "Testing Copilot capabilities and agents in AL for Business Central: the Evaluation framework (formerly AI Test Toolkit), JSONL and YAML datasets, writing AI tests and agent tests, and best practices for non-determinism, safety, languages and model changes."
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
  input_hash: f86eb4c3e15bf1a87c662ceede104550cdcd95791b43b9eec8176b7f8ed4ba0e
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-bestpractices
    title: Best Practices for Testing the Copilot Capability in AL
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
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-testtool
    title: Evaluation
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
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-bestpractices
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-datasets
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-testtool
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-agent-tests
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-ai-tests
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
  - Test Copilot capability in AL
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration-with-ai/integrate-ai-using-developer-tools-for-c/extend-copilot-in-business-central
children: []
coverage:
  learn: 6
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 50cbc3577c05bf399b5628c1c5e84bf9558f45ed7d048a6f8a918fbc0c5d8869
narrative: generated
---

# Test Copilot capability in AL

> Testing Copilot capabilities and agents in AL for Business Central: the Evaluation framework (formerly AI Test Toolkit), JSONL and YAML datasets, writing AI tests and agent tests, and best practices for non-determinism, safety, languages and model changes.

Path: [Integration with AI](../../../integration-with-ai.md) > [Integrate AI using developer tools for Copilot](../../integrate-ai-using-developer-tools-for-c.md) > [Extend Copilot in Business Central](../extend-copilot-in-business-central.md) > Test Copilot capability in AL · tier official · system copilot · **unreviewed** (machine-generated narrative)

## Overview

This section explains how to test LLM-based Copilot features and agents built in AL. Evaluation (formerly AI Test Toolkit) is the data-driven test automation framework. It organizes test suites, runs them across languages, and tracks Copilot credit consumption, including environment and company credit limits for evaluation runs.

The pages fit together in layers. The overview page introduces why to test (accuracy, consistency, safety) and the AI TEST TOOLKIT permission set. Datasets define input and expected output pairs in JSONL or YAML. "Write AI tests" covers prompt-based Copilot features that run dataset scenarios and compare results. "Write agent tests" covers end-to-end agent scenarios using the AI Test Suite and the Library - Agent codeunit. The best practices page covers strategy.

Start with the overview, then read Evaluation and Datasets for the framework and data format. Move to Write AI tests or Write agent tests depending on what you build, and use the best practices page to design realistic test cases.

## Key points

- Evaluation is the new name for AI Test Toolkit; it is a data-driven framework for validating Copilot features and agents.
- Access requires the AI TEST TOOLKIT permission set.
- Datasets use JSONL or YAML to hold test inputs and expected outputs; YAML supports suite-level setup, per-turn setup, intervention handling and date placeholders.
- AI tests in AL run dataset scenarios and compare outputs to expected results, with internal or external evaluation and test output export.
- Agent tests use the AI Test Suite and Library - Agent codeunit, with a turn loop, intervention declarations and manual task management.
- Evaluation tracks Copilot credit consumption and supports environment-level and company-level credit limits for evaluations.
- Evaluation can be run across languages, and suites carry suite-level metadata.
- Best practices cover non-determinism, scaling with Evaluation, safety, tone, bias and stereotype checks, cross-language compatibility and model version regression testing.

## Learn pages

- [Best Practices for Testing the Copilot Capability in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-bestpractices): Learn about best practices for testing the Copilot capability in AL.
- [Datasets](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-datasets): Learn how to create datasets for AI tests and agent tests in Business Central.
- [Evaluation](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-testtool): Learn how to use Evaluation to test Copilot features and agents in AL.
- [Test the Copilot Capability in AL](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot): Explore testing strategies for Copilot features in AL. Ensure AI-generated outputs are accurate, safe, and user-friendly.
- [Write agent tests](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-agent-tests): Learn how to write AL tests for Business Central agents using the Library - Agent helpers to verify end-to-end agent behavior.
- [Write AI tests](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ai-test-copilot-ai-tests): Learn how to write AL tests for Copilot features using datasets, assertions, and external evaluation.

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
