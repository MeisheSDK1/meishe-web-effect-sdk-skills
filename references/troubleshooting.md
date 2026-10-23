# Troubleshooting

Use this file to debug common Meishe Web EffectSDK failures.

## SDK Not Ready

Symptoms:

- `nveGetEffectContextInstance` is undefined.
- `Module.Meishe.effectContext` is missing.
- Calls fail immediately after WASM load.

Checks:

- `NvEffectSdk.js` script URL is loaded before API calls.
- `meishewasmloader` called `loadEmscriptenModule("<SDK_BASE_URL>/", { effectSdk: true })`.
- The script URL and WASM base URL come from the same SDK version/base path.
- Code waits for `Module.Meishe.effectContext` after `loadingFinished`.

## SharedArrayBuffer Or Browser Isolation Failure

Symptoms:

- SDK or WASM initialization fails in browser.
- Browser complains about `SharedArrayBuffer`.

Fix:

```txt
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Use HTTPS or another secure context for deployment.

## License Failure

Symptoms:

- Effects do not render outside localhost.
- `verifySdkLicenseFileUrl` returns false.

Checks:

- Localhost can preview without license; non-localhost needs SDK authorization files.
- Verify license only after WASM loading is complete.
- License URL is reachable by browser.
- The SDK license enables the requested effect features.
- Do not expose real license content in generated code or logs.
- Localhost preview without license is expected to show a watermark.
- Do not rely on `/static/effectsdk.lic` unless the user explicitly provides that real file.

## Effects Ineffective

Common causes:

- Effect aspect ratio does not match input image/video ratio.
- Required model URL is missing or failed to load.
- Required data URL is missing or failed to load.
- Package install failed.
- SDK license or package license lacks permission.
- Avatar effect needs continuous frames or a specific expression/action.

Fixes:

- Set `ratio: new NveRational(16, 9)` or `new NveRational(9, 16)` to match input.
- For single images, set:

```js
detectionMode:
  NveHumanDetectionFeatureEnum.SemiImageMode |
  NveHumanDetectionFeatureEnum.MultiThread,
workingInRealtimeMode: false,
```

- For beauty/shape/makeup, provide `faceModelUrl`, `faceCommonDataUrl`, and relevant `makeupDataUrl` or `advancedBeautyDataUrl`.
- For segmentation, provide `segmentationModelUrl`.
- For avatar, provide `avatarModelUrl`.

## Single Image Avatar Ineffective

Most avatar effects need continuous input frames. For one image, use non-realtime rendering mode:

```js
await arSceneRenderer.init({
  faceModelUrl: "<FACE_MODEL_URL>",
  avatarModelUrl: "<AVATAR_MODEL_URL>",
  detectionMode:
    NveHumanDetectionFeatureEnum.SemiImageMode |
    NveHumanDetectionFeatureEnum.MultiThread,
  workingInRealtimeMode: false,
});
```

Even with this, some avatar packages require facial actions or expressions.

## Package Installation Failed

Checks:

- URL is correct and browser can fetch it.
- Package file name and package license file name were not renamed.
- Package type matches extension.
- Package license URL is correct for non-localhost or licensed deployments.
- SDK license includes the feature.
- Path in `FS.writeFile` starts with `/`.

Common extension mapping:

- `.videofx` -> `VideoFx`
- `.captionstyle` -> `CaptionStyle`
- `.animatedsticker` -> `AnimatedSticker`
- `.videotransition` -> `VideoTransition`
- `.makeup` -> `Makeup`
- `.facemesh` -> `FaceMesh`
- `.arscene` -> `ARScene`
- `.compoundcaption` -> `CompoundCaption`

## Output Stream Is Empty

Checks:

- `pushMediaStream` or `startupCamera` was called before `getOutputStream`.
- Input stream has a video track.
- Browser camera permission was granted.
- For preview video elements, set `video.srcObject = arSceneRenderer.getOutputStream()`, `video.muted = true`, `video.playsInline = true`, and call `video.play()`.
- `release()` was not called too early.

## Rendering Queue Drops Frames

The effect context schedules render tasks asynchronously. If too many render tasks are queued, new tasks can drop unless `NveRenderFlagEnum.DontDropFrame` is set. For real-time demos, dropped frames can be acceptable. For still image demos, avoid submitting new render calls until the previous promise settles.

## IndexedDB Cache

`NveARSceneRenderer` caches downloaded data by default in database `nveffectcache`, stores `asset` and `lic`. If cache is stale or too large:

```js
await arSceneRenderer.clearCacheOnIndexedDB();
```

Or disable cache during debugging:

```js
await arSceneRenderer.init({
  faceModelUrl: "<FACE_MODEL_URL>",
  cacheOnIndexedDB: false,
});
```
