# Demo Recipes

Use this file to generate minimal runnable demos. Prefer `NveARSceneRenderer` unless a low-level raw rendering request is explicit.

## Shared Loader

For Vite demos, include the headers from `quick-start.md` and a loader helper like:

```js
import { WASMLoader } from "meishewasmloader";

export function loadEffectSdk() {
  return new Promise((resolve, reject) => {
    const wasmLoader = WASMLoader({
      showLoader() {},
      showError(errorText) {
        reject(new Error(errorText || "Failed to load EffectSDK"));
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

Also add the script tag to `index.html`:

```html
<script src="<SDK_BASE_URL>/NvEffectSdk.js"></script>
```

## Minimal Image Input Demo

Use this when the user asks for image processing, still image render, or a simplest visual proof.

```js
await loadEffectSdk();

if (location.hostname !== "localhost" && "<LICENSE_URL>") {
  const ok = await nveGetEffectContextInstance().verifySdkLicenseFileUrl(
    "<LICENSE_URL>"
  );
  if (!ok) throw new Error("EffectSDK license verification failed");
}

const arSceneRenderer = new NveARSceneRenderer();
await arSceneRenderer.init({
  faceModelUrl: "<FACE_MODEL_URL>",
  faceCommonDataUrl: "<FACE_COMMON_DATA_URL>",
  advancedBeautyDataUrl: "<ADVANCED_BEAUTY_DATA_URL>",
  detectionMode:
    NveHumanDetectionFeatureEnum.SemiImageMode |
    NveHumanDetectionFeatureEnum.MultiThread,
  workingInRealtimeMode: false,
  ratio: new NveRational(16, 9),
});

const image = new Image();
image.crossOrigin = "anonymous";
image.onload = async () => {
  const input = document.createElement("canvas");
  input.width = image.width;
  input.height = image.height;
  const inputCtx = input.getContext("2d", { willReadFrequently: true });
  inputCtx.drawImage(image, 0, 0);

  const imageData = inputCtx.getImageData(0, 0, input.width, input.height);
  const result = await arSceneRenderer.render(
    imageData,
    Math.floor(performance.now())
  );

  const preview = document.querySelector("#preview");
  preview.width = 960;
  preview.height = 540;
  preview.getContext("2d").drawImage(result.imageBitmap, 0, 0, 960, 540);
};
image.src = "<IMAGE_URL>";

window.addEventListener("beforeunload", () => {
  arSceneRenderer.release();
});
```

Notes:

- Use `workingInRealtimeMode: false` and `SemiImageMode | MultiThread` for single image rendering.
- For avatar on a single image, use non-realtime mode; many avatar effects still need continuous frames or facial actions.
- Localhost preview can skip SDK license verification and will show a watermark. Do not invent a default license URL.

## Camera Beauty And Output Stream Demo

Use this when the user asks for camera, webcam, beauty, real-time preview, or output media stream.

```js
await loadEffectSdk();

const arSceneRenderer = new NveARSceneRenderer();
await arSceneRenderer.init({
  faceModelUrl: "<FACE_MODEL_URL>",
  faceCommonDataUrl: "<FACE_COMMON_DATA_URL>",
  advancedBeautyDataUrl: "<ADVANCED_BEAUTY_DATA_URL>",
  beautyIntensity: 1,
  outputStreamFps: 30,
  mirror: true,
});

await arSceneRenderer.startupCamera({
  audio: false,
  video: {
    width: 1280,
    height: 720,
    frameRate: { ideal: 30, max: 60 },
  },
});

const outputStream = arSceneRenderer.getOutputStream();
const video = document.querySelector("#preview");
video.srcObject = outputStream;
video.muted = true;
video.playsInline = true;
await video.play();

window.addEventListener("beforeunload", () => {
  arSceneRenderer.release();
});
```

## External MediaStream Demo

Use this when an app already has a camera/RTC/media stream and wants SDK processing.

```js
await loadEffectSdk();

const arSceneRenderer = new NveARSceneRenderer();
await arSceneRenderer.init({
  faceModelUrl: "<FACE_MODEL_URL>",
  faceCommonDataUrl: "<FACE_COMMON_DATA_URL>",
  outputStreamFps: 30,
  mirror: true,
});

const inputStream = await navigator.mediaDevices.getUserMedia({
  audio: false,
  video: { width: 1280, height: 720 },
});

arSceneRenderer.pushMediaStream(inputStream);
const sdkStream = arSceneRenderer.getOutputStream();
```

Use `startupCamera` when the renderer owns camera acquisition. Use `pushMediaStream` when the host app owns the input stream.

## Low-Level Image Render Demo

Use this only when the user asks for raw `NveEffectContext` usage.

```js
await loadEffectSdk();

const context = nveGetEffectContextInstance();
const ratio = new NveRational(16, 9);
const effect = context.createVideoEffect("Pinky", ratio, true);

const result = await context.renderEffects(
  [effect],
  imageData,
  Math.floor(performance.now()),
  NveRenderFlagEnum.OutputImageBitmap
);

previewContext.drawImage(result.imageBitmap, 0, 0);
effect.release();
```

## RTC, Agora, And Zego Patterns

For generic RTC and Zego integration, the SDK pattern is the same:

1. Initialize the RTC SDK and obtain or publish an input camera stream.
2. Initialize `NveARSceneRenderer`.
3. Call `arSceneRenderer.pushMediaStream(inputStream)`.
4. Get the processed stream with `arSceneRenderer.getOutputStream()`.
5. Publish or preview that processed stream through the RTC SDK.

Skeleton:

```js
const inputStream = await createRtcInputStreamSomehow();

const arSceneRenderer = new NveARSceneRenderer();
await arSceneRenderer.init({
  faceModelUrl: "<FACE_MODEL_URL>",
  faceCommonDataUrl: "<FACE_COMMON_DATA_URL>",
});

arSceneRenderer.pushMediaStream(inputStream);
const sdkStream = arSceneRenderer.getOutputStream();

await publishRtcStreamSomehow(sdkStream);
```

For Zego-specific demos, preserve the user's chosen Zego SDK setup and replace only the source stream with `sdkStream`.

For Agora-specific demos, do not use this generic stream skeleton first. Read `rtc-agora.md` and use `EffectSDKExtension.createProcessor()` with `videoTrack.pipe(effectSDKProcessor).pipe(videoTrack.processorDestination)`.
