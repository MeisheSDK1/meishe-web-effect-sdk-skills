# Meishe Web EffectSDK React Demo

This is a minimal React/Vite demo for Meishe Web EffectSDK. It loads the SDK with `meishewasmloader`, initializes `NveARSceneRenderer`, opens the camera, previews the processed output stream, and demonstrates beauty, makeup, caption, and AR scene effects.

The template loads `NvEffectSdk.js` in `index.html` and loads WASM from the same SDK base URL in `src/Demo.tsx`. If you make the SDK base configurable, dynamically load the matching `NvEffectSdk.js` before calling `loadEmscriptenModule()`.

## Run

```bash
npm install
npm run dev
```

`pnpm install && pnpm dev` is also fine if the generated project keeps the bundled lockfile. Open the Vite URL on `localhost`. The dev server is configured with:

```txt
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

These headers are required by the SDK WASM runtime and `SharedArrayBuffer`.

## License Behavior

Localhost preview can skip SDK license verification, but the rendered output will show a watermark. For non-localhost deployment, obtain a real SDK license file from Meishe and call `nveGetEffectContextInstance().verifySdkLicenseFileUrl("<LICENSE_URL>")` after WASM loading succeeds.

Do not use a fake default license URL. Use the public model and material sample URLs from the skill's `references/default-materials.md` when the demo enables those features, but keep SDK and package license URLs empty or as explicit placeholders unless real values are provided.

## Effect Parameter Source

Built-in beauty and face-shape keys come from `references/effect-parameter-catalog.md`. In particular, mouth corner lift uses `Face Mesh Mouth Corner Lift Degree`, and nose bridge width uses `Face Mesh Nose Bridge Width Degree`; both use slider ranges from `-1` to `1`.

## React Runtime Note

The template intentionally does not wrap the app in React `StrictMode`. Some SDK/WASM initialization paths can fail if development mode runs initialization twice. Keep that default unless you redesign initialization to be idempotent.
