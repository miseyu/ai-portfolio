# Repository Instructions

## Project Shape

- This is a pnpm workspace for `ai-portfolio`.
- Workspace packages are declared in `pnpm-workspace.yaml`:
  - `apps/web`: Next.js app (`next` 16, React 19).
  - `packages/utils`: shared TypeScript utility functions.
  - `packages/tailwind-config`: shared Tailwind config and CSS theme tokens.
  - `packages/tsconfig`: shared TypeScript configs.
- Node is managed by `mise.toml` and currently targets Node 24.
- The repository also contains local agent assets under `.agents`, `.claude`, `.codex`, and `.github`; avoid modifying those unless the task is explicitly about agent tooling.

## Command Rules

- Always run shell commands through `rtk`, as required by the imported RTK instructions.
- Use `pnpm` for dependency and workspace commands. Do not introduce another package manager lockfile.
- Prefer scoped workspace commands from the repo root:
  - Web app: `rtk pnpm --filter web <script>`
  - Utils package: `rtk pnpm --filter @ai-portfolio/utils <script>`
- The root `package.json` currently has no scripts. Check package-level scripts before assuming a root command exists.

## Development Commands

- Web development server: `rtk pnpm --filter web dev`
- Web build: `rtk pnpm --filter web build`
- Web lint: `rtk pnpm --filter web lint`
- Biome check for the web app: `rtk pnpm --filter web check:biome`
- Biome fix for the web app: `rtk pnpm --filter web check:biome:fix`
- Utils type check: `rtk pnpm --filter @ai-portfolio/utils check-types`
- There is no established test runner yet. If adding tests, add package scripts and document how to run them.

## Coding Style

- Follow `biome.jsonc`.
  - Use space indentation.
  - JavaScript and TypeScript strings are formatted with double quotes.
  - Non-null assertions are disallowed.
  - Floating promises are errors in TypeScript files.
  - Unused variables are errors in TypeScript files.
- Keep TypeScript changes strict-null-safe even where the web app has `strict: false`.
- Prefer small, focused utilities over broad helper modules.
- Preserve existing barrel export patterns:
  - New utility files go under `packages/utils/src/functions/`.
  - Export them from `packages/utils/src/functions/index.ts`.
  - The package root already re-exports `./functions`.

## Frontend Conventions

- The web app uses Next.js with React 19 and `reactStrictMode: true`.
- `apps/web/tsconfig.json` maps `@/*` to `apps/web/src/*`; use that alias for app-local imports once app source files exist.
- Shared Tailwind configuration is imported from `@ai-portfolio/tailwind-config/tailwind.config`.
- Global theme variables live in `packages/tailwind-config/themes.css` and are imported by `apps/web/styles/globals.css`.
- Prefer existing semantic Tailwind color tokens such as `bg-default`, `bg-muted`, `border-default`, `content-default`, and `content-emphasis` over one-off hex values.
- Dark mode is class-based. When adding UI, check both light and dark tokens.
- The project has shadcn tooling configured through `.mcp.json`; if adding shadcn components, keep generated files consistent with the local app structure and Tailwind token system.

## Dependencies

- Keep shared code in `packages/utils` browser-safe unless a file is clearly server-only.
- Do not add runtime dependencies at the workspace root unless they are truly shared tooling.
- Add app-only dependencies to `apps/web/package.json`.
- Add shared utility dependencies to the specific package that imports them.
- Avoid changing package versions opportunistically; update dependencies only when the task requires it.

## Verification

- Before finishing code changes, run the narrowest relevant verification command.
- For web changes, prefer at least:
  - `rtk pnpm --filter web check:biome`
  - `rtk pnpm --filter web build` when behavior, routing, or configuration changed.
- For utility changes, prefer:
  - `rtk pnpm --filter @ai-portfolio/utils check-types`
- If a command cannot run because the repo lacks a script, missing files, or existing dependency issues, report that plainly.

## Generated and Design Assets

- `docs/design/portfolio.pen` is a design artifact. Do not edit it as plain text unless the task explicitly asks for design-file work.
- Do not commit generated build output such as `.next`, `dist`, `build`, coverage, or Playwright reports.

## Git and Safety

- The worktree may contain user changes. Never revert unrelated changes.
- Before editing a file, inspect the surrounding code and follow local patterns.
- Keep changes scoped to the requested task.
- Do not run destructive commands such as `rm`, `git reset`, or checkout-based reverts unless explicitly requested and approved.
