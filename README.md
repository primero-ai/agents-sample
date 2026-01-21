# agents-sample

Template repo for building a simple Temporal workflow using `@primero.ai/temporal-graph-tools`
and small example activities. Use this as a starting point for your own agent workflows.

## What's inside
- Workflow builder in `src/index.ts` that chains activities and runs a parallel branch
- Example activities in `src/activities/` (hello, query, goodbye, nice-to-meet-you)
- TypeScript build + lint + format scripts

## Quick start
```bash
pnpm install
pnpm build
```

## Project structure
```
src/
  activities/
    goodbye-world.ts
    hello-world.ts
    nice-to-meet-you.ts
    run-query.ts
  index.ts
```

## Scripts
- `pnpm build` - compile TypeScript to `dist/`
- `pnpm type-check` - run `tsc` without emitting
- `pnpm lint` - lint the repo
- `pnpm format` - format with Prettier
- `pnpm clean` - remove `node_modules` and `dist/`

## Customize this template
1. Update the workflow name and steps in `src/index.ts`.
2. Add or replace activities in `src/activities/`.
3. Export your activities from `src/activities/index.ts`.
4. Adjust dependencies in `package.json` as needed.

## Notes
- The `run-query` activity uses `@primero.ai/agents-helpers` and expects your environment to
  provide the required connection details (set via `.env` if needed).

## Requirements
- Node.js `>=18`
- `pnpm` (see `packageManager` in `package.json`)
