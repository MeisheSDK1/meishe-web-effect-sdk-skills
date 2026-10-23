# Source Maintenance

Use this file when refreshing the bundled SDK source, docs, or indexes in this user-level skill.

## What Is Bundled

- `references/source/effectSdk.d.ts` is the public API declaration source of truth.
- `references/source/NvEffectSdk.js` is the runtime glue source of truth.
- `references/source/docs/` contains English and Chinese SDK scenario docs.
- `references/indexes/` contains generated lookup helpers used by the skill.
- `references/effect-parameter-catalog.md` is the generation authority for built-in beauty and face-shape keys, ranges, defaults, and purpose.
- `references/default-materials.md` is the generation authority for documented public SDK, model, material package, font, and background URLs.
- `assets/react-vite-demo-template/types/effectSdk.d.ts` is intentionally kept as a template-local copy so generated demos remain self-contained.

## Refresh Workflow

1. Replace copied SDK source/docs with the new version.
2. Run `node scripts/build-indexes.mjs` from the skill root.
3. Confirm the generated indexes include expected core symbols: `NveARSceneRenderer`, `NveEffectContext`, `nveGetEffectContextInstance`, and `NveAssetPackageManager`.
4. Reconcile `effect-parameter-catalog.md` and `default-materials.md` with any new official parameter or material table before changing demo generation rules.
5. Run `node scripts/validate-demo.mjs` from the skill root.
6. If a template dependency or SDK initialization pattern changes, update `references/react-vite-template.md` and the demo template together.

## Search Hints

Search `effectSdk.d.ts` for signatures and public API names. Search `NvEffectSdk.js` for runtime behavior such as `Module.Meishe`, IndexedDB cache, FS paths, async license loading, `VideoFrame` conversion, and dropped frame handling.

Do not rename package files or package license files in examples unless the source docs say it is safe. Package suffix and license pairing are common failure points.

Older runtime glue snapshots can contain obsolete built-in effect strings. Treat `effect-parameter-catalog.md` as the final demo-generation layer when it differs from raw glue snapshots.
