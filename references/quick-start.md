# Quick Start

Use this file for import, WASM loading, license verification, and browser setup.

## Runtime Shape

Meishe Web EffectSDK is a browser SDK loaded through `NvEffectSdk.js` plus WASM files. The public global API is `Nve*`, with the singleton effect context returned by:

```js
const effectContext = nveGetEffectContextInstance();
```

Do not use `Nvs*` names for this SDK. Those belong to a different SDK surface.

## Import And WASM Loading

The docs show two parts that must use the same SDK base URL:

```html
<script src="<SDK_BASE_URL>/NvEffectSdk.js"></script>
```

```js
import { WASMLoader } from "meishewasmloader";

export function loadEffectSdk() {
  return new Promise((resolve, reject) => {
    const wasmLoader = WASMLoader({
      showLoader(state) {},
      showError(errorText) {
        reject(new Error(errorText || "Failed to load Meishe EffectSDK"));
      },
      loadingFinished() {
        const poll = () => {
          if (
            typeof Module !== "undefined" &&
            Module.Meishe &&
            Module.Meishe.effectContext
          ) {
            resolve();
          } else {
            setTimeout(poll, 500);
          }
        };
        poll();
      },
    });

    wasmLoader.loadEmscriptenModule("<SDK_BASE_URL>/", { effectSdk: true });
  });
}
```

Rules:

- Install `meishewasmloader` with `npm i meishewasmloader --save`.
- Keep the `NvEffectSdk.js` URL and `loadEmscriptenModule` base URL consistent.
- Replace the docs' test CDN with the user's own SDK deployment URL for production.
- Recommend Brotli or gzip compression for WASM-related files.

## License

Localhost can preview effects without SDK license verification and will show a watermark. Non-localhost deployment needs SDK authorization files from Meishe and all effects are ineffective if verification fails.

Use this after WASM loading succeeds:

```js
const ok = await nveGetEffectContextInstance().verifySdkLicenseFileUrl(
  "<LICENSE_URL>"
);

if (!ok) {
  throw new Error("Meishe EffectSDK license verification failed");
}
```

Notes:

- `verifySdkLicenseFile(licenseFilePath)` verifies a file already in the SDK virtual file system.
- `verifySdkLicenseFileUrl(licenseFileUrl)` fetches the license URL, writes it into `FS`, then verifies it.
- Keep real license values out of generated demos; use `<LICENSE_URL>` or `<LICENSE_FILE>`.
- Do not use the docs' `/static/effectsdk.lic` as a default. It is only an example path.
- Use `localhost` for local preview guidance. Do not default to `127.0.0.1`, a LAN IP, or `0.0.0.0`.

## Browser Headers

The SDK uses `SharedArrayBuffer`, so local dev and deployment must be cross-origin isolated:

```txt
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

For Vite:

```js
// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "localhost",
  },
  plugins: [
    {
      name: "configure-response-headers",
      configureServer(server) {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          next();
        });
      },
    },
  ],
});
```

Deployment also needs a secure context, typically HTTPS.

## Minimal Setup Order

1. Add cross-origin isolation headers.
2. Load `NvEffectSdk.js`.
3. Load WASM with `meishewasmloader`.
4. Wait for `Module.Meishe.effectContext`.
5. Verify license for non-localhost.
6. Create and initialize `NveARSceneRenderer` or use `NveEffectContext` directly.
7. Render image data or push a media stream.
8. Release renderer and external effect instances when no longer needed.
