# React/Vite Demo Template

Use `assets/react-vite-demo-template` when creating or patching a default browser demo. It is based on the project-provided React EffectSDK demo and includes:

- React 18 + Vite + TypeScript.
- `meishewasmloader`.
- SDK global type declarations in `types/effectSdk.d.ts`.
- A camera demo using `NveARSceneRenderer`.
- Beauty, shape, makeup, caption, and AR scene examples.
- Vite cross-origin isolation headers.
- No React `StrictMode` wrapper by default, so SDK initialization in `useEffect` does not run twice in development.

Before generating or patching a demo, read:

- `references/effect-parameter-catalog.md` for built-in beauty and face-shape keys, slider ranges, defaults, and parameter purpose.
- `references/default-materials.md` for SDK base URLs, model/data URLs, package material URLs, caption/sticker materials, fonts, and license placeholder rules.

## Template Rules

- Keep preview host as `localhost`.
- Do not require SDK license verification for localhost preview. Mention the watermark.
- Use a real license only when the user provides one or the target is non-localhost.
- Load `NvEffectSdk.js` in `index.html` inside `<head>`.
- Keep the `NvEffectSdk.js` script URL and `loadEmscriptenModule()` SDK base URL on the same SDK release base.
- If the generated demo lets users edit `sdkBaseUrl`, dynamically confirm or load `${sdkBaseUrl}/NvEffectSdk.js` before loading WASM.
- Use documented public default material URLs from `default-materials.md` when a demo enables a feature that needs material, model, font, or background resources.
- Keep SDK license URLs and package license URLs empty or as explicit placeholders unless the user provides real values.
- Keep model URLs grouped in one config object.
- Keep package URLs and license URLs grouped by feature.
- Use built-in effect keys only from `effect-parameter-catalog.md`; do not use legacy mouth-corner or nose-bridge key names seen in older glue snapshots.
- Keep SDK initialization idempotent; do not wrap it in `StrictMode` unless the initialization path is redesigned.
- Release `NveARSceneRenderer` in React cleanup.
- Release or clear external effect instances before replacing captions, stickers, or compound captions.

## Common Patch Targets

- `vite.config.ts`: server host, COOP/COEP headers, port.
- `src/Demo.tsx`: loader, renderer init, camera/stream input, effect toggles.
- `src/Demo.css`: responsive video layout and basic controls.
- `types/effectSdk.d.ts`: copied SDK declarations.
- `README.md`: run command, required placeholders, localhost license behavior.

## Runtime Pattern

1. Create `WASMLoader`.
2. Ensure `NvEffectSdk.js` is loaded from the same SDK base.
3. Call `loadEmscriptenModule(<SDK_BASE_URL>, { effectSdk: true })`.
4. Poll until `Module.Meishe.effectContext` exists.
5. Optionally verify SDK license only when not on localhost and a real `<LICENSE_URL>` is configured.
6. Create `new NveARSceneRenderer()`.
7. Call `renderer.init({ model urls, detectionMode, ratio, mirror })`.
8. Start input:
   - `startupCamera(...)` for direct camera demos.
   - `pushMediaStream(stream)` for existing streams and Zego-style RTC flows.
   - Agora uses `EffectSDKExtension.createProcessor()` instead of direct `pushMediaStream`.
9. Read `renderer.getOutputStream()` for processed media stream output.
10. Apply effects with `enableBeauty`, `setEffectList`, `appendEffectList`, and external effect APIs.
11. Cleanup on unmount.

## Validation Pattern

After copying or mirroring this template, run `node scripts/validate-demo.mjs <demo-path>` from the skill root. If dependencies are installed, also run the generated project's build command. When browser automation is not available, a build plus localhost HTTP/header smoke check is sufficient for a first pass.
