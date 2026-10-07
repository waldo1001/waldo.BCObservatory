---
id: topic/dev-itpro/integration-with-ai/develop-ai-with-machine-learning-apis
type: topic
title: Develop AI with machine learning APIs
summary: "Machine learning APIs in Business Central for partners building AI features: the Forecasting (Time Series) API, the Prediction API, and a transparency note on capabilities, limits and responsible AI. It answers which API fits a task, which methods or algorithms it uses, and how to apply it responsibly."
tier: official
language: en
system: copilot
review:
  state: unreviewed
  by: null
  at: null
  flags: []
generated:
  at: "2026-10-07T02:32:59.251Z"
  pipeline: 0.2.0
  prompts:
    hub-topic: 1
  input_hash: 40867722ca21bfce0e75133cad5734e50064dd9b9f0036f75a342d09b7520a88
evidence:
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ml-forecasting-api-overview
    title: Forecasting API overview
    date: "2024-09-13"
    commit: null
    t: null
    quote: null
  - kind: learn
    url: https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ml-prediction-api-overview
    title: Prediction API overview
    date: "2024-09-13"
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
links:
  learn:
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ml-forecasting-api-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ml-prediction-api-overview
    - https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ml-transparency-note
  objects: []
  features: []
  topics:
    - topic/dev-itpro/integration-with-ai
  localizations: []
  videos: []
  posts: []
  guidelines: []
learn_toc_path:
  - Integration with AI
  - Develop AI with machine learning APIs
toc_file: dev-itpro/TOC.md
parent: topic/dev-itpro/integration-with-ai
children: []
coverage:
  learn: 3
  code: 0
  video: 0
  blog: 0
  guideline: 0
bc_forms: []
member_hash: 526ef40bcb5e1ec3825b5eee62b5680bbfdb87b9d278df849362f73bb48cda45
narrative: generated
---

# Develop AI with machine learning APIs

> Machine learning APIs in Business Central for partners building AI features: the Forecasting (Time Series) API, the Prediction API, and a transparency note on capabilities, limits and responsible AI. It answers which API fits a task, which methods or algorithms it uses, and how to apply it responsibly.

Path: [Integration with AI](../integration-with-ai.md) > Develop AI with machine learning APIs · tier official · system copilot · **unreviewed** (machine-generated narrative)

## Overview

This area covers the machine learning APIs that developers can use in Business Central. There are two APIs: the Forecasting API, which predicts future values of business indicators from historical time-ordered data, and the Prediction API, which handles regression and classification tasks such as late payment prediction, customer churn, and quote conversion.

The three pages fit together as two API overviews plus a transparency note. Start with the overview of the API that matches your scenario: forecasting a time series, or predicting an outcome for a record. Then read the Transparency Note for how the models work, their capabilities and limitations, intended use cases, and the responsible AI practices expected of partners building ML features.

## Key points

- The Forecasting API (Time Series API) predicts future values of business indicators from historical time-ordered data.
- Forecasting uses time series algorithms including ARIMA, ETS, STL, and TBATS.
- The Prediction API supports regression and classification, for example late payment prediction, customer churn, and quote conversion.
- Prediction API methods include Initialize, SetRecord, train, predict, evaluate, and plotmodel.
- The Transparency Note covers the Forecasting Model and Prediction Model, including capabilities, limitations, and intended use cases.
- The note describes Azure Machine Learning resources, the Responsible AI Standard, and AI safety guardrails.
- Choose the Forecasting API for time-ordered trends and the Prediction API for record-level outcomes.

## Learn pages

- [Forecasting API overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ml-forecasting-api-overview): Integrate with the Azure Machine Learning web service through the forecasting API in Business Central.
- [Prediction API overview](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ml-prediction-api-overview): Integrate with the Azure Machine Learning web service through the prediction API in Business Central.
- [Transparency Note Machine Learning APIs for Business Central](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/ml-transparency-note): Understand how our AI technology works with regards to Machine Learning APIs, the choices system owners can make that influence system performance and behavior, and the importance of thinking about the whole system, including the technology, the people, and the environment

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
