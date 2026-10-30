# Install BC Observatory in Claude

BC Observatory gives Claude checked facts about Microsoft Dynamics 365 Business Central: AL objects, fields, events,
versions, country localizations, Microsoft Learn pages, the roadmap, videos and community posts. It costs nothing,
and you need no extra account and no key.

## Which Claude do you use?

| You use | Follow |
|---|---|
| Claude in the browser (claude.ai), on your phone, or the Claude app | [Claude in the browser or on your phone](#claude-in-the-browser-or-on-your-phone) |
| The Claude Desktop app on Mac or Windows | [Claude Desktop](#claude-desktop) |
| Claude Code, in a terminal or in VS Code | [Claude Code](#claude-code) |
| GitHub Copilot CLI | [GitHub Copilot CLI](#github-copilot-cli) |
| Something else (Cursor, VS Code Copilot Chat, Windsurf, ...) | [the MCP page](https://waldo1001.github.io/waldo.BCObservatory/mcp/#install) |

**What works where, today:**

| | The observatory's own search | The four skills | AL source code (bc-code-atlas) | Microsoft Learn |
|---|---|---|---|---|
| Claude Code, Copilot CLI | yes | yes | yes | yes |
| Claude Desktop | yes, with step B of its guide (one download) | yes | yes | yes |
| Claude in the browser and on your phone | **not yet** | yes | yes | yes |

The observatory's search runs on your own computer, and the browser and phone versions of Claude cannot start
anything on your computer.

**Can Claude install it for me?** No. Claude in a chat cannot add a plugin or a connector for you. Each guide below
takes a few minutes.

---

## Claude in the browser or on your phone

### Before you start

- **Plan:** you need a Claude Pro, Max, Team or Enterprise plan. The Free plan has not been checked.
- **Where to do it:** you set this up once, in the browser. It then works everywhere you sign in to the same account,
  your phone included.
- **Team or Enterprise:** your organization's Owner decides which plugins and connectors you may add. If a button below
  is missing, send your Owner the link to this guide.
- **Time:** about two minutes.

### Steps

1. Open [claude.ai/customize/plugins](https://claude.ai/customize/plugins).

   You should see: a page called **Plugins**.

2. Select **Add**, then **Add marketplace**.

   You should see: a box that asks for a repository.

3. Paste this into the box and confirm:

   ```text
   waldo1001/waldo.BCObservatory
   ```

   You should see: **bc-observatory** in the list of plugins.

4. Select **bc-observatory**, then add it.

   You should see: **bc-observatory** among your plugins, switched on.

5. On the plugin's page, open the **Connectors** tab.

   You should see: three connectors.
   - **bc-code-atlas**, marked **Not added**.
   - **microsoft-learn**, marked **Not added**.
   - **bc-observatory**, marked **Runs in each session**. That one does not work in the browser or on your phone (see
     the table at the top). Leave it.

6. Next to **bc-code-atlas**, select **Add**. There is no sign-in.

   You should see: **bc-code-atlas** marked **Connected**.

7. Next to **microsoft-learn**, select **Add**. There is no sign-in.

   You should see: **microsoft-learn** marked **Connected**.

You now have the four BC Observatory skills, the Business Central source code (bc-code-atlas) and Microsoft Learn.

### Check that it works

Start a new chat and paste:

```text
Use bc-code-atlas: show me the code of the procedure PostInvoice in codeunit 80 "Sales-Post".
```

- **Good:** Claude shows AL code and says it used bc-code-atlas.
- **Bad:** Claude answers from memory and does not mention bc-code-atlas. See the first row of the table below.

### Something went wrong

| What you see | What to do |
|---|---|
| Claude answers but does not use the connector | In the chat, select **+**, then **Connectors**, and switch **bc-code-atlas** and **microsoft-learn** on. Ask again. |
| There is no **Add marketplace** | Your plan or your organization does not allow it. On Team or Enterprise, ask your Owner to add the marketplace `waldo1001/waldo.BCObservatory` for the organization ([Claude's guide for Owners](https://claude.com/docs/plugins/admin)). |
| "Repository not found" | Paste exactly `waldo1001/waldo.BCObservatory`: no spaces, capitals as shown. Or paste the full address, `https://github.com/waldo1001/waldo.BCObservatory`. |
| There is no **Add** next to a connector | On Team or Enterprise only an Owner adds connectors. Ask them to add it, then select **Connect** next to it. |
| Claude says BC Observatory is not available | That is expected in the browser and on your phone. Use [Claude Desktop](#claude-desktop) or [Claude Code](#claude-code) for the observatory's own search. |
| You still see an old version | On **Customize > Plugins**, open the marketplace and select **Check for updates**. |

### Remove it

1. Remove the plugin: **Customize > Plugins** > **bc-observatory** > the menu > **Remove**.
2. Remove each connector: **Customize > Connectors** > the connector > **Remove**.

---

## Claude Desktop

Claude Desktop gets everything, in two parts:
- **A** adds the skills, the source code and Microsoft Learn.
- **B** adds the observatory's own search, which runs on your computer.

You can do B without A.

### Before you start

- **The app:** Claude Desktop on a Mac or on Windows, signed in. If it is not the newest version, update it first:
  open the **Claude** menu and choose **Check for Updates…**.
- **Node.js 22 or newer (the current LTS is fine):** only for the config-file way of part B; the extension does not
  need it (Claude Desktop brings its own). To check:
  - Open a terminal (Mac: **Terminal**; Windows: **Command Prompt**), type `node --version` and press Enter.
  - A version of 22 or higher (for example `v22.23.4`): you have it.
  - "command not found", "not recognized", or a lower version: install it.
    - Windows: `winget install OpenJS.NodeJS.LTS`
    - Mac: `brew install node`, or the installer from [nodejs.org](https://nodejs.org/)
    - Linux: the LTS from [nodejs.org](https://nodejs.org/en/download) (distribution packages are often older)
  - Then quit and restart the app you install into (Claude Desktop, your terminal, VS Code), and check again. An app
    started before the install does not see Node.
- **Plan:** for part A, the same as for [the browser](#claude-in-the-browser-or-on-your-phone).
- **Time:** about five minutes.

### A. The skills, the source code and Microsoft Learn

Follow [steps 1 to 7 for the browser](#steps). You can do them in the browser or in the desktop app: both use the
same account.

### B. The observatory's own search

Two ways. Use one of the two, not both: two entries give Claude Desktop two bc-observatory servers. Either way the
observatory runs on your Mac, so it answers in Desktop chats and in tasks linked to this computer, not in tasks that
run in the cloud.

**The extension (no Node, Mac and Windows)**

1. Download the extension: [bc-observatory.mcpb](https://github.com/waldo1001/waldo.BCObservatory/releases/latest/download/bc-observatory.mcpb).

   You should see: a file called `bc-observatory.mcpb` in your Downloads folder.

2. Double-click the file. Or drag it into the Claude Desktop window, or open **Settings > Extensions > Advanced
   settings > Install Extension** and pick the file.

   You should see: a dialog from Claude Desktop that shows **BC Observatory**.

3. Select **Install**.

   You should see: **BC Observatory** under **Settings > Extensions**, switched on.

Then skip to **Check that it works** below.

**The config file (if you prefer it, or on Linux)**

1. In Claude Desktop, open the **Claude** menu (on a Mac, in the menu bar at the top of the screen; on Windows, the
   menu in the Claude window) and choose **Settings…**.

   You should see: a settings window.

2. In the left column, select **Developer**, then select **Edit Config**.

   You should see: a file called `claude_desktop_config.json`, opened in a text editor or shown in a folder. Open it
   in a text editor (on a Mac, TextEdit; on Windows, Notepad).

3. Look at what is in the file.

   - **If the file is empty, or contains only `{}`:** select everything in it and replace it with:

     ```json
     {
       "mcpServers": {
         "bc-observatory": {
           "command": "npx",
           "args": ["-y", "bc-observatory@latest"]
         }
       }
     }
     ```

   - **If the file already has an `"mcpServers"` section:** add these lines inside it, after the `{` that follows
     `"mcpServers":`:

     ```json
         "bc-observatory": {
           "command": "npx",
           "args": ["-y", "bc-observatory@latest"]
         },
     ```

     Keep the comma at the end. Leave out the comma only if `bc-observatory` is the last entry before the closing `}`.

   You should see: `bc-observatory` in the file, with the same brackets and quotes as above.

4. Save the file and close the editor.

5. Quit Claude Desktop completely, then start it again. Closing the window is not enough.
   - Mac: **Claude** menu > **Quit Claude**.
   - Windows: also quit the Claude icon in the system tray, bottom right near the clock, if it is there.

6. In a new chat, select the **+** at the bottom left of the message box, then **Connectors**.

   You should see: **bc-observatory** in the list, switched on.

### Check that it works

Start a new chat and paste:

```text
What is table 18 in Business Central? Use BC Observatory.
```

- **Good:** the answer says **Customer** and says it came from BC Observatory.
- **The first question can take up to a minute:** the observatory downloads its knowledge base (about 40 MB, then
  once a day) and a small search model (30 MB, once). After that, answers are quick.
- If Claude asks for permission to use a BC Observatory tool, allow it.

### Something went wrong

| What you see | What to do |
|---|---|
| Claude Desktop says the extension cannot be installed | Update Claude Desktop (**Claude** menu > **Check for Updates…**), then try again. Extensions need a recent version. |
| **bc-observatory** is not in the **Connectors** list | Quit Claude Desktop completely (step 5) and start it again. If it is still missing, the file has a typo: open it again (steps 1 and 2) and compare it character by character with step 3. A missing comma or quote is the usual cause. |
| **bc-observatory** is listed but shows an error | Check Node.js: `node --version` must show 22 or higher (see "Before you start"). Install it if needed, then quit and restart Claude Desktop. |
| It still fails on Windows | Replace the two lines `"command": "npx",` and `"args": ["-y", "bc-observatory@latest"]` with `"command": "cmd",` and `"args": ["/c", "npx", "-y", "bc-observatory@latest"]`. Save, then quit and restart Claude Desktop. |
| "Could not download" in the first answer | The observatory needs to reach `waldo1001.github.io`, `registry.npmjs.org` and `huggingface.co`. On a company network, ask IT to allow all three. |
| Claude answers but does not use BC Observatory | In the chat, select **+**, then **Connectors**, and check that **bc-observatory** is on. Ask again. |
| Claude says it cannot reach BC Observatory, "this session runs in the cloud" | You asked in a task that runs in the cloud. Ask in a Desktop chat instead, or link the task to this computer. |
| You want to see what went wrong | The log is in `~/Library/Logs/Claude/` on a Mac and in `%APPDATA%\Claude\logs\` on Windows: `mcp-server-BC Observatory.log` for the extension, `mcp-server-bc-observatory.log` for the config file. |

Updates: with the config file they come by themselves, because every time Claude Desktop starts it fetches the newest
BC Observatory. The extension stays at the version you installed: download the file again and install it over the old
one.

### Remove it

1. For part B, the extension: **Settings > Extensions** > **BC Observatory** > **Uninstall**.
   The config file: open the file again (steps 1 and 2), delete the `bc-observatory` lines you added, save, and quit and
   restart Claude Desktop.
2. For part A: see [Remove it](#remove-it) under the browser guide.

---

## Claude Code

### Before you start

- **Claude Code:** `claude --version` prints a version.
- **Node.js 22 or newer (the current LTS is fine):** the plugin's BC Observatory server runs on it. To check:
  - Open a terminal (Mac: **Terminal**; Windows: **Command Prompt**), type `node --version` and press Enter.
  - A version of 22 or higher (for example `v22.23.4`): you have it.
  - "command not found", "not recognized", or a lower version: install it.
    - Windows: `winget install OpenJS.NodeJS.LTS`
    - Mac: `brew install node`, or the installer from [nodejs.org](https://nodejs.org/)
    - Linux: the LTS from [nodejs.org](https://nodejs.org/en/download) (distribution packages are often older)
  - Then quit and restart the app you install into (Claude Desktop, your terminal, VS Code), and check again. An app
    started before the install does not see Node.
- **Already did the [browser guide](#claude-in-the-browser-or-on-your-phone) with the same account?** Then skip steps
  1 and 2: Claude Code picks the plugin up at its next start.

### Steps

1. Add the marketplace:

   ```bash
   claude plugin marketplace add waldo1001/waldo.BCObservatory
   ```

   You should see: that the marketplace **bc-observatory** was added.

2. Install the plugin:

   ```bash
   claude plugin install bc-observatory@bc-observatory
   ```

   You should see: that **bc-observatory** was installed. Step 1 alone does not install anything.

3. Start Claude Code with `claude`. If it is already running, type `/reload-plugins`.

4. Type `/mcp`.

   You should see: all three connected.
   - `plugin:bc-observatory:bc-observatory`
   - `plugin:bc-observatory:bc-code-atlas`
   - `plugin:bc-observatory:microsoft-learn`

### Check that it works

```bash
claude -p "What is table 18 in Business Central? Use BC Observatory."
```

**Good:** the answer says **Customer**.

### Something went wrong

| What you see | What to do |
|---|---|
| Step 2 says the plugin is not found | Step 1 did not run, or was mistyped. `claude plugin marketplace list` shows **bc-observatory** when step 1 worked. |
| `bc-observatory` failed in `/mcp` | Node.js is missing or too old: Node.js 22 or newer (the current LTS is fine), see "Before you start", then restart Claude Code. An error from a `bc-first.mjs` hook before a web search means the same thing. On a company network, `npx` must reach `registry.npmjs.org`. |
| You see an old version | Run `claude plugin marketplace update bc-observatory`, then restart Claude Code. |

### Remove it

```bash
claude plugin uninstall bc-observatory@bc-observatory
claude plugin marketplace remove bc-observatory
```

---

## GitHub Copilot CLI

### Before you start

- **Copilot CLI:** `copilot --version` prints a version.
- **Node.js 22 or newer (the current LTS is fine):** the plugin's BC Observatory server runs on it. Copilot CLI itself does not need Node, so you may not have it yet. To check:
  - Open a terminal (Mac: **Terminal**; Windows: **Command Prompt**), type `node --version` and press Enter.
  - A version of 22 or higher (for example `v22.23.4`): you have it.
  - "command not found", "not recognized", or a lower version: install it.
    - Windows: `winget install OpenJS.NodeJS.LTS`
    - Mac: `brew install node`, or the installer from [nodejs.org](https://nodejs.org/)
    - Linux: the LTS from [nodejs.org](https://nodejs.org/en/download) (distribution packages are often older)
  - Then quit and restart the app you install into (Claude Desktop, your terminal, VS Code), and check again. An app
    started before the install does not see Node.

### Steps

1. Install the plugin:

   ```bash
   copilot plugin install waldo1001/waldo.BCObservatory:plugin
   ```

2. Check it: `copilot plugin list`.

   You should see: **bc-observatory** in the list.

A plugin installed in Copilot CLI is not available in the VS Code Copilot Chat panel. For VS Code, see the VS Code tab
of [the MCP page](https://waldo1001.github.io/waldo.BCObservatory/mcp/#install-vscode): one click adds the server.

### Check that it works

Ask: `What is table 18 in Business Central? Use BC Observatory.`

**Good:** the answer says **Customer**.

### Something went wrong

| What you see | What to do |
|---|---|
| `copilot plugin list` shows **bc-observatory**, but the agent has no `bc_` tools, or the server shows as failed | Node.js is missing or too old: see "Before you start", then restart Copilot CLI. bc-code-atlas and Microsoft Learn still work without it. |
| The install says the plugin is not found | Check the spelling: `waldo1001/waldo.BCObservatory:plugin`, with `:plugin` at the end. |
| On a company network the server never starts | `npx` must reach `registry.npmjs.org`; ask for it, or set `npm config set registry <your mirror>`. |

### Remove it

```bash
copilot plugin uninstall bc-observatory
```

---

More detail: what each connector does, and what it sends where, is in [plugin/README.md](plugin/README.md).

Something in this guide did not match what you saw? [Open an issue](https://github.com/waldo1001/waldo.BCObservatory/issues/new?title=Install%20guide)
with the step number and what you saw instead.

*Checked against Anthropic's and the Model Context Protocol's documentation on 2026-10-22; Node lines checked
2026-10-27 (D124). Not yet walked through click by click on a fresh account.*
