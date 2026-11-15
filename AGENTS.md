# AGENTS.md

Browser extension for Mountain Project, built with [WXT](https://wxt.dev/) (v0.19). See `README.md` for what it does.

## Commands

- `pnpm dev`: run with hot reload (opens a browser with the extension loaded)
- `pnpm build`: build to `dist/chrome-mv3`
- `pnpm zip`: package for the Chrome Web Store
- `pnpm test`: run tests (Vitest)
- `pnpm lint`, `pnpm compile`: lint and type-check

## WXT

- WXT generates the manifest from `wxt.config.ts` and `src/entrypoints/`. Don't write a `manifest.json` by hand.
- Docs for agents: https://wxt.dev/llms.txt (index) or https://wxt.dev/llms-full.txt (everything in one file).

## Skills

Skills live in `.agents/skills/` and are managed with `npx skills` (tracked in `skills-lock.json`).

- `chrome-extensions` (from `GoogleChrome/modern-web-guidance`): Manifest V3 and Chrome Web Store guidance. It doesn't cover WXT, so follow the WXT conventions above when they differ.

## Testing in the browser

Use [`chrome-devtools-mcp`](https://developer.chrome.com/docs/devtools/agents/extensions) with `--categoryExtensions`. It can install, reload, and trigger the extension and read console messages.

1. Enable remote debugging at `chrome://inspect/#remote-debugging` (once per browser session).
2. `pnpm build`, then load `dist/chrome-mv3` with the MCP's `install_extension` (absolute path).
3. Open a route page, e.g. https://www.mountainproject.com/route/105732422/epinephrine

## Publishing

See `docs/publishing.md`.
