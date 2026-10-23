# Implementation Workflow

Use this page when the user asks for a feature, not just an explanation. The expected outcome is working files or a precise patch, followed by a quick validation pass.

## 1. Classify the Request

Start with `intent-map.md` when the user uses Chinese terms, product words, or a symptom instead of an exact API name. Ordinary EffectSDK requests use this user-level skill; use the MCP bridge only when MCP is explicitly requested.

Map the user's natural-language request to one or more implementation tracks:

- Project setup: Vite, React, TypeScript, cross-origin isolation, SDK loader.
- Input source: still image, camera, existing `MediaStream`, Agora track, Zego stream.
- Output target: `<canvas>`, `<video>`, processed `MediaStream`, RTC publish stream.
- Effect type: built-in beauty/shape, package effect, makeup, segmentation, avatar, AR scene, caption, modular caption, compound caption, sticker.
- Debugging: license, model/data URL, package license, package install, aspect ratio, SharedArrayBuffer, no visible effect.

If the request names a product concept instead of an API, use `recipe-menu.md` first. If the user is confused about words like asset package, AR scene, model URL, detection mode, package license, IndexedDB cache, or localhost license behavior, use `glossary.md` before writing code.

## 2. Choose the Fastest Safe Starting Point

- Existing React project: patch the current app.
- New demo: copy or mirror `assets/react-vite-demo-template`.
- Agora request: combine the React template with `rtc-agora.md`.
- Zego request: combine the React template with `rtc-zego.md`.
- Caption, modular caption, compound caption, or sticker request: combine the React template with `external-effects.md`.
- Makeup, face mesh, video FX, segmentation, avatar, or package request: combine the React template with `effects.md` and `troubleshooting.md`.
- Low-level render request: use `api-map.md` and `demo-recipes.md` before touching `NveEffectContext` directly.

## 3. Resolve API Details

Read the task reference first. If a method signature or enum is uncertain, search:

- `references/source/effectSdk.d.ts` for public types and signatures.
- `references/source/NvEffectSdk.js` for runtime glue behavior and global export names.
- `references/source/docs/effectSDK_base_en/` for scenario examples.
- Chinese docs only when the English docs are incomplete or ambiguous.

Use the `Nve*` API names from the copied type file. Do not generate old `Nv*` names unless the source explicitly exposes them.

## 4. Implement Demo Defaults

For generated demos:

- Use React/Vite/TypeScript by default.
- Do not wrap SDK initialization in React `StrictMode` by default. If the user requires `StrictMode`, isolate SDK initialization so it cannot run twice.
- Use `meishewasmloader`.
- Start local preview on `localhost`.
- Configure `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp`.
- Allow localhost to skip SDK license verification and explain that it will show a watermark.
- Use placeholders for SDK base URL, models, packages, package licenses, RTC app IDs, tokens, and room IDs.
- Keep effect lists in app state or constants so toggles do not accidentally clear unrelated effects.
- Release renderer/external effects and stop media tracks during cleanup.

## 5. Validate

Run `node scripts/validate-demo.mjs <demo-path>` from the skill directory when possible. For a real app, also run the project's type check/build if dependencies are installed.

Manual checklist:

- Uses React/Vite/TypeScript for default demos.
- Uses `NveARSceneRenderer` unless low-level rendering was requested.
- Uses `nveGetEffectContextInstance()` only after WASM load completion.
- Uses `localhost`, not `127.0.0.1` or `0.0.0.0`, for default preview guidance.
- Does not include a fake default SDK license URL.
- Includes COOP/COEP headers.
- Does not wrap the SDK initialization path in React `StrictMode`.
- Cleans up renderer, media tracks, RTC processors, and external effects.
