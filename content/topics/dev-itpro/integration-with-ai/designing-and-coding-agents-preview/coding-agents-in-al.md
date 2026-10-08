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
  at: "2026-10-08T06:31:25.130Z"
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
  posts:
    - post/aardvarklabs-blog/3097
    - post/bertverbeek-nl/1272
    - post/demiliani-com/12644
  guidelines: []
  changes:
    - change/bcapps/10007
    - change/bcapps/10008
    - change/bcapps/10017
    - change/bcapps/10020
    - change/bcapps/10022
    - change/bcapps/10031
    - change/bcapps/10036
    - change/bcapps/10084
    - change/bcapps/10101
    - change/bcapps/10155
    - change/bcapps/10232
    - change/bcapps/10238
    - change/bcapps/10253
    - change/bcapps/10287
    - change/bcapps/10294
    - change/bcapps/10308
    - change/bcapps/10312
    - change/bcapps/10346
    - change/bcapps/10411
    - change/bcapps/10418
    - change/bcapps/10432
    - change/bcapps/10515
    - change/bcapps/10519
    - change/bcapps/10542
    - change/bcapps/10564
    - change/bcapps/10567
    - change/bcapps/10568
    - change/bcapps/10603
    - change/bcapps/10825
    - change/bcapps/10829
    - change/bcapps/10842
    - change/bcapps/10890
    - change/bcapps/10914
    - change/bcapps/10956
    - change/bcapps/10965
    - change/bcapps/10986
    - change/bcapps/10990
    - change/bcapps/11004
    - change/bcapps/11007
    - change/bcapps/11021
    - change/bcapps/11027
    - change/bcapps/11068
    - change/bcapps/11207
    - change/bcapps/11213
    - change/bcapps/11290
    - change/bcapps/11333
    - change/bcapps/11375
    - change/bcapps/11381
    - change/bcapps/11383
    - change/bcapps/11420
    - change/bcapps/11425
    - change/bcapps/11431
    - change/bcapps/11441
    - change/bcapps/11481
    - change/bcapps/11541
    - change/bcapps/11593
    - change/bcapps/11595
    - change/bcapps/11628
    - change/bcapps/11639
    - change/bcapps/11770
    - change/bcapps/11813
    - change/bcapps/11832
    - change/bcapps/11889
    - change/bcapps/11970
    - change/bcapps/12074
    - change/bcapps/7546
    - change/bcapps/8875
    - change/bcapps/9310
    - change/bcapps/9364
    - change/bcapps/9365
    - change/bcapps/9541
    - change/bcapps/9606
    - change/bcapps/9635
    - change/bcapps/9693
    - change/bcapps/9708
    - change/bcapps/9805
    - change/bcapps/9859
    - change/bcapps/9904
    - change/bcapps/9988
    - change/bcapps/9989
    - change/bcquality/137
    - change/bcquality/174
    - change/bcquality/176
    - change/bcquality/182
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
  video: 2
  blog: 3
  guideline: 0
bc_forms: []
member_hash: 69eac98ac3509b30b15900079714f9d3546b4ea11aac6d5b7228ce8677ee298c
narrative: generated
---

# Coding agents in AL

> Coding agents in AL (preview) covers building custom Business Central agents in AL: defining and registering them, setup pages, programmatic configuration, task management, model selection, and converting a prototyped agent to code. It answers how-to questions about the interfaces, codeunits and page types involved.

Path: [Integration with AI](../../integration-with-ai.md) > [Designing and coding agents (preview)](../designing-and-coding-agents-preview.md) > Coding agents in AL · tier official · system development · narrative reviewed (checked by Opus)

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

## Videos, posts and code changes

Linked by a Haiku matcher with a grounding quote from the item's summary (link/topics.ts); machine-generated.

- [#10007 [SOA] Ignore item availability when disabled](../../../../changes/bcapps/10007.md) (code change): "The Sales Order Agent now ignores item availability signals when availability checking is disabled"
- [#10008 [MCP] Add codeunit APIs as MCP tools in MCP configuration](../../../../changes/bcapps/10008.md) (code change): "Add codeunit APIs as MCP tools in MCP configuration"
- [#10017 [Master] - Bug 644751 Moving an expense report line to another report wrongly reports a duplicate](../../../../changes/bcapps/10017.md) (code change): "Moving an expense report line to another report wrongly reports a duplicate"
- [#10020 [Master] - Bug 641894: [Expense Agent] [Rules] Mileage expense should not validate require receipt number rule](../../../../changes/bcapps/10020.md) (code change): "Mileage expenses in Expense Agent no longer incorrectly trigger the receipt number mandatory validation"
- [#10022 Known senders table should only be inserted to when the task is coming from an email](../../../../changes/bcapps/10022.md) (code change): "The Known Senders table now only gets populated when tasks arrive from email"
- [#10031 Add AI-assisted policy evaluation backend to Expense Agent](../../../../changes/bcapps/10031.md) (code change): "Add AI-assisted policy evaluation backend to Expense Agent"
- [#10036 [SOA]: Bugbash for releases 28.x - Contact unable to find due to Qasim map to Megan, different names](../../../../changes/bcapps/10036.md) (code change): "Fixes Sales Order Agent contact lookup and reply routing when a sender's email is mapped"
- [#10084 Let the agent update invoice due dates on user instructions](../../../../changes/bcapps/10084.md) (code change): "Let the agent update invoice due dates on user instructions"
- [#10101 [Master] [Expense Agent] Bug 641393 [AT] Recognize International Standard Code 1A as mileage UOM](../../../../changes/bcapps/10101.md) (code change): "Recognize International Standard Code 1A as mileage UOM"
- [#10155 Slice 641293: [Expense Agent] Expense Locations and Per-diem rules in configurationAdded more locations](../../../../changes/bcapps/10155.md) (code change): "Expense Agent now includes comprehensive expense locations for all country/regions"
- [#10232 Block unauthorized Sales Order Agent setup access](../../../../changes/bcapps/10232.md) (code change): "The SOA Setup page now validates user permissions before allowing access to Sales Order Agent configuration"
- [#10238 Remove consumed credits from Payables Agent setup](../../../../changes/bcapps/10238.md) (code change): "Remove consumed credits from Payables Agent setup"
- [#10253 Avoid starting a write transaction under `ShowCanCreateAgent`](../../../../changes/bcapps/10253.md) (code change): "Payables Agent Setup no longer starts a write transaction"
- [#10287 Move SOA item search and attachment extraction to GPT-5.5 deployments](../../../../changes/bcapps/10287.md) (code change): "Sales Order Agent AI operations move to GPT-5.5 chat deployments"
- [#10294 [SOA] Fix missing Agent Task Message read permission in contact search](../../../../changes/bcapps/10294.md) (code change): "Sales Order Agent to complete contact-mapping flows without permission intervention"
- [#10308 Uptake agent archiving in Sales Order Agent (AB#644549)](../../../../changes/bcapps/10308.md) (code change): "Uptake agent archiving in Sales Order Agent"
- [#10312 Update expense VAT specification source](../../../../changes/bcapps/10312.md) (code change): "Expense Agent now sets the Source of VAT specification records"
- [#10346 Fix activity log indirect permissions](../../../../changes/bcapps/10346.md) (code change): "The Expense Agent and Expense Management permission sets now grant indirect permissions"
- [#10411 [SOA] Allow changing or clearing manually selected contacts](../../../../changes/bcapps/10411.md) (code change): "Users can now select, change, or clear manually chosen contacts in the Sales Order Agent"
- [#10418 [SOA] Ignore extended-text lines when editing sales quotes](../../../../changes/bcapps/10418.md) (code change): "Sales Order Agent now filters out extended-text lines from the sales quote view"
- [#10432 [MCP] Change System Tool factbox caption to 'Active System Tools'](../../../../changes/bcapps/10432.md) (code change): "The caption of the MCP System Tool List factbox page has been updated"
- [#10515 [Payables Agent] Fix stale Payables Agent setup save](../../../../changes/bcapps/10515.md) (code change): "Payables Agent Setup now persists instruction updates in a single final modification"
- [#10519 SOA - Try it out : agent activation after closing the page](../../../../changes/bcapps/10519.md) (code change): "Sales Order Agent now activates only after a task is submitted"
- [#10542 [Master] - Slice 638097: [Expense Agent] Enable simple interim approval scenario](../../../../changes/bcapps/10542.md) (code change): "Expense reports now support a two-stage approval flow with interim and final approvers"
- [#10564 Bug 641415: [Expense Agent] Incorrect Payment Method Assignment for Card-Based Expenses](../../../../changes/bcapps/10564.md) (code change): "Payment method descriptions in the Expense Agent setup are now more descriptive"
- [#10567 SOA : Create Task from TaskPane respects review configuration for known senders](../../../../changes/bcapps/10567.md) (code change): "Tasks created manually in the SOA Create Task pane now respect the review configuration"
- [#10568 Send sample invoices from the demo guide directly](../../../../changes/bcapps/10568.md) (code change): "Payables Agent demo guide now sends sample invoices immediately when selecting"
- [#10603 [Expense Agent] Grant policy builder execute permission](../../../../changes/bcapps/10603.md) (code change): "Expense Management roles now have execute permission on the policy builder codeunit"
- [#10825 [Master]-Bug 645041: Expense Agent - Rename Enable approval workflow caption and tooltip](../../../../changes/bcapps/10825.md) (code change): "Expense Agent Setup page renamed the approval workflow toggle"
- [#10829 [29.x][Expense Agent] Backport approval conversation from #10570](../../../../changes/bcapps/10829.md) (code change): "Expense Agent now supports approval conversations, allowing submitters to add comments"
- [#10842 [SOA] Clarify Email 2 contact mapping action](../../../../changes/bcapps/10842.md) (code change): "Sales Order Agent now explicitly clarifies that the sender's email is stored"
- [#10890 [Master] Bug 645040: Expense Agent: BC Approval Workflow - Improve error message when Approval User Setup is missing](../../../../changes/bcapps/10890.md) (code change): "Expense approval workflow now shows a clear, actionable error"
- [#10914 [Expense Agent] Fix setup API language permission](../../../../changes/bcapps/10914.md) (code change): "Expense Agent permission set now grants indirect read access to the Agent table"
- [#10956 [ExpenseAgent] Refactor agent setup for policies](../../../../changes/bcapps/10956.md) (code change): "Expense Agent administrators can now disallow users from running policy checks"
- [#10965 Fix Expense Agent VAT tests](../../../../changes/bcapps/10965.md) (code change): "Fixes the Expense Agent VAT tests"
- [#10986 [29x] Fix Expense Agent VAT tests](../../../../changes/bcapps/10986.md) (code change): "Fixed VAT test failures in the Expense Agent API"
- [#10990 Add-Expense-VAT-settings-to-Contoso-demo-tool](../../../../changes/bcapps/10990.md) (code change): "Expense Agent Contoso demo data now includes expense VAT settings"
- [#11004 Fix Expense Report Reimbursement Currency Code](../../../../changes/bcapps/11004.md) (code change): "reimbursement currency code handling in the Create Expense Report codeunit"
- [#11007 Add Travel Request API lifecycle to Expense Agent](../../../../changes/bcapps/11007.md) (code change): "Travel Request API lifecycle management is integrated into the Expense Agent"
- [#11021 Expense Agent: align legacy submit cleanup with 29.0](../../../../changes/bcapps/11021.md) (code change): "Expense Agent's legacy submit action cleanup lifecycle"
- [#11027 [Master]-Bug 648538: Add mileage setup to Expense Agent wizard](../../../../changes/bcapps/11027.md) (code change): "Expense Agent setup wizard now includes mileage configuration"
- [#11068 SOA: Clear previous search filter](../../../../changes/bcapps/11068.md) (code change): "Fixes search behavior in Sales Order Agent"
- [#11207 [Master]-Bug 648672: [Expense Agent][Translation] Agent name is not localized across setup wizard, avatar, and Agent Card](../../../../changes/bcapps/11207.md) (code change): "The Expense Agent name is now localized across the setup wizard"
- [#11213 Fix sample invoice email when the agent setup is not saved yet](../../../../changes/bcapps/11213.md) (code change): "The payables agent demo guide now receives the setup configuration"
- [#11290 [Bug 640454] Scope Expense Agent Entra permissions by company](../../../../changes/bcapps/11290.md) (code change): "Expense Agent now manages Microsoft Entra permissions scoped to individual companies"
- [#11333 Align travel request APIs with employee travelers and expense report lifecycle](../../../../changes/bcapps/11333.md) (code change): "Expense Agent APIs now align travel request and expense report workflows"
- [#11375 Obsolete GPT-5.5 chat and add GPT-5.6 Ceres deployments](../../../../changes/bcapps/11375.md) (code change): "Sales Order Agent attachment extraction and item search now use them"
- [#11381 Slice 641293: [Expense Agent] Expense Locations and Per-diem rules in configuration - added check for existing country](../../../../changes/bcapps/11381.md) (code change): "Expense Agent setup now skips creating expense locations for country and currency codes that do not exist"
- [#11383 [SOA] Fix "The Order Promising Setup does not exist." crash when setting quote quantity](../../../../changes/bcapps/11383.md) (code change): "The Sales Order Agent now handles missing Order Promising Setup gracefully"
- [#11420 [Master] - [Expense Management] Hide Enable Agent on Expense Agent Setup Page](../../../../changes/bcapps/11420.md) (code change): "Hide Enable Agent on Expense Agent Setup Page"
- [#11425 Bug 650137: [29.x] Expense Locations and Per-diem rules in configuration - Backport](../../../../changes/bcapps/11425.md) (code change): "adds more expense locations and per-diem rules to the Expense Agent's default and demo data"
- [#11431 [Master] - [Expense Management] Move missing Employee Posting Group validation to rule violation](../../../../changes/bcapps/11431.md) (code change): "The Expense Agent now validates Employee Posting Group through rule violations"
- [#11441 Fixes AB#640874: Clarify Expense Agent scheduling permission error](../../../../changes/bcapps/11441.md) (code change): "The Expense Agent scheduler authorization error message is now clearer"
- [#11481 [Master] - Bug 648681: [Expense Agent] Fix Expense Agent KPI report-line drill-down filter](../../../../changes/bcapps/11481.md) (code change): "Expense Agent KPI drill-down filter now correctly shows"
- [#11541 Clarify Expense Agent and expense management setup](../../../../changes/bcapps/11541.md) (code change): "Clarify Expense Agent and expense management setup"
- [#11593 [29.x] - Bug 650481[Expense Agent] Closed travel requests are editable and are missing approver info.](../../../../changes/bcapps/11593.md) (code change): "Travel requests can no longer be edited once closed automatic"
- [#11595 [Master] Bug 650348: [Expense Agent] Closed travel requests are editable and are missing approver info.](../../../../changes/bcapps/11595.md) (code change): "Closed travel requests become read-only to prevent accidental modifications"
- [#11628 Expense Agent: capture submission policy evaluation history](../../../../changes/bcapps/11628.md) (code change): "Expense Agent now captures policy evaluation history at the report level"
- [#11639 [Master] - Slice 640938: [Expense Agent][VENDOR] Adding approval limits (November '26)](../../../../changes/bcapps/11639.md) (code change): "The Expense Agent gains approval limits. New fields on User Setup and Expense User"
- [#11770 [Master] - Bug 650783: [Expense Agent][Demo Data] Posted demo expenses remain Submitted with a dangling Expense Report No.](../../../../changes/bcapps/11770.md) (code change): "Fixes posted Expense Agent demo expenses that stayed in Submitted status"
- [#11813 Bug 633676: Expense Agent - Setup wizard - Cannot clear default approver once saved from assist edit](../../../../changes/bcapps/11813.md) (code change): "The Expense Agent Setup Wizard now allows users to clear the default approver"
- [#11832 [Master] - Bug 651133: [Expense Agent][BugBash] Mileage setup](../../../../changes/bcapps/11832.md) (code change): "Fixes a bug-bash issue with mileage setup in the Expense Agent"
- [#11889 [Master] - Bug 651129: Expense Agent - Distance UOM in Configuration](../../../../changes/bcapps/11889.md) (code change): "Expense Agent setup now includes distance unit of measure configuration"
- [#11970 Allow Azure OpenAI privacy notice in evaluation](../../../../changes/bcapps/11970.md) (code change): "Azure OpenAI privacy notice assumed approved in evaluation"
- [#12074 Expense Agent: travel request expense location, per-traveler reports, activity log and submitter comment](../../../../changes/bcapps/12074.md) (code change): "Expense Agent travel request feature now supports expense location selection using per diem rules"
- [#7546 [Payables Agent] Agent-driven line matching](../../../../changes/bcapps/7546.md) (code change): "Adds agent-driven line matching to the Payables Agent"
- [#8875 [master] SOA: Bugbash for releases 28.x - Select an existing contact, or create a new one - Use another contact always](../../../../changes/bcapps/8875.md) (code change): "Sales Order Agent by adding a commit before opening the contact selection"
- [#9310 SOA: Open Item Availability from Agent panel](../../../../changes/bcapps/9310.md) (code change): "The Sales Order Agent can now open the multi-item availability page"
- [#9364 Slice 622414: [SOA] [Pioneer] Enhancing Sales Order Agent with Item Variant : availability and prices](../../../../changes/bcapps/9364.md) (code change): "The Sales Order Agent now resolves customer requests to a specific item variant"
- [#9365 [SOA] Prevent translated username token and remove dead GetAgent helpers](../../../../changes/bcapps/9365.md) (code change): "Sales Order Agent usernames are now prevented from being translated by marking the label as locked"
- [#9541 [SOA] Bound outbound reply retries](../../../../changes/bcapps/9541.md) (code change): "Outbound replies in the Sales Order Agent now limit retry attempts to five per message"
- [#9606 [SOA] Disable available-items-only search by default](../../../../changes/bcapps/9606.md) (code change): "The Sales Order Agent now initializes the Search Only Available Items setting"
- [#9635 Obsolete MLLM Payables Agent rollout scaffold](../../../../changes/bcapps/9635.md) (code change): "MLLM processing is now the permanent behavior for the Payables Agent feature"
- [#9693 Rename email review option 'Only untrusted senders' to 'Manage per sender'](../../../../changes/bcapps/9693.md) (code change): "Caption of enum option OnlyIfUntrusted changed to 'Manage per sender"
- [#9708 Enable manual task creation for Sales Order Agent](../../../../changes/bcapps/9708.md) (code change): "The Sales Order Agent now allows users to manually create tasks directly"
- [#9805 Update Email Folder tooltip to reference renamed 'Manage per sender' review option](../../../../changes/bcapps/9805.md) (code change): "Payables Agent strings are updated to reference the renamed email review option"
- [#9859 [Master] - Move Expense Agent (Preview) app into BCApps](../../../../changes/bcapps/9859.md) (code change): "The Expense Agent (Preview) app source is moved into BCApps as a W1 app"
- [#9904 Let the agent see and set vendor posting groups and CIF or NIF](../../../../changes/bcapps/9904.md) (code change): "The payables agent can now see and set vendor posting groups"
- [#9988 [Expense Agent] Fix Employee subscriber permissions](../../../../changes/bcapps/9988.md) (code change): "Expense Agent Employee event subscribers so they can sync and delete"
- [#9989 [SOA] Skip Item Selector for exact items without variants](../../../../changes/bcapps/9989.md) (code change): "The Sales Order Agent no longer calls the Item Selector"
- [#137 Add community guidance and review support for Business Central agents](../../../../changes/bcquality/137.md) (code change): "Each rule includes documentation and contrasting AL code examples"
- [#174 Make BCQuality documentation easier for partners to get started](../../../../changes/bcquality/174.md) (code change): "Community Agents review extended with folder-path support"
- [#176 Complete partner contribution and knowledge consumption guides](../../../../changes/bcquality/176.md) (code change): "consuming skills in custom agents, with clarifications on metadata, integration"
- [#182 Add machine-readable review orchestration contract](../../../../changes/bcquality/182.md) (code change): "Enables BC-ALAgents to consume a stable, mechanically-owned orchestration contract"
- [Step-by-Step Guide: Create Agents in AL Code](../../../../posts/aardvarklabs-blog/3097.md) (community post): "Building agents in Business Central AL involves creating setup tables, pages, codeunits"
- [Agents in Business Central – part 5 – Creating agent from code](../../../../posts/bertverbeek-nl/1272.md) (community post): "create, configure, and register agents programmatically in Business Central using AL code"
- [Dynamics 365 Business Central: debugging agent sessions.](../../../../posts/demiliani-com/12644.md) (community post): "AL Language extension runtime 17.0 introduces debugging support for agent sessions in Business Central"
- [What's New: Coding Business Central Agents with AI Development Toolkit](../../../../videos/EwN3xb2q7vE.md) (video): "Coding Business Central Agents with AI Development Toolkit; Agent Type Definition; Agent Factory Interface"
- [Microsoft presents: Building and shipping agents in Business Central](../../../../videos/MNwTt06ZxwY.md) (video): "Building and shipping agents in Business Central; agent configuration; permissions"

Source: Microsoft Learn (CC BY 4.0). Descriptions are Learn's own.
