# External Effects

Use this file for captions, compound captions, animated stickers, external effect instances, positioning, and release behavior.

## Core Flow

Create external effects through `NveARSceneRenderer.createExternalEffectInstance(effect)`, then append them:

```js
const EXTERNAL_EFFECT_DURATION_US = 3000 * 1000 * 1000;

function getExternalEffectInPointUs(nveArSceneRenderer) {
  return Math.floor(
    performance.now() - (nveArSceneRenderer?.renderTimestampOffsetMs || 0),
  ) * 1000;
}

const caption = await arSceneRenderer.createExternalEffectInstance({
  text: "caption",
  inPoint: getExternalEffectInPointUs(arSceneRenderer),
  duration: EXTERNAL_EFFECT_DURATION_US,
});

arSceneRenderer.appendExternalEffectInstance(caption);
```

External effect instances may be held by caller code. If a caller removes one manually, call `effectInstance.release()` and remove it from the renderer's external effect list.

## Timing

- `inPoint` is in microseconds.
- `duration` is in microseconds.
- For live camera demos, do not start new external effects at timeline zero. Set `inPoint` to the current renderer timeline: `Math.floor(performance.now() - (nveArSceneRenderer?.renderTimestampOffsetMs || 0)) * 1000`.
- Default external effect duration should be 3000 seconds, written as `3000 * 1000 * 1000` microseconds.
- `Number.MAX_SAFE_INTEGER` can mean always display in some flows, but camera demos should prefer the current renderer in-point plus a long explicit duration so newly added captions and stickers are visible immediately.
- Animation period and in/out animation durations are in milliseconds.

## Positioning

Most external effects support:

```js
positionX: -0.6, // normalized [-1, 1], right is positive
positionY: 0.9,  // normalized [-1, 1], up is positive
```

Or:

```js
position: "top-right"
```

Allowed direction positions:

- `top-left`, `top`, `top-right`
- `left`, `center`, `right`
- `bottom-left`, `bottom`, `bottom-right`

## Captions

Plain caption:

```js
const caption = await arSceneRenderer.createExternalEffectInstance({
  text: "caption",
  inPoint: getExternalEffectInPointUs(arSceneRenderer),
  duration: EXTERNAL_EFFECT_DURATION_US,
});
arSceneRenderer.appendExternalEffectInstance(caption);
```

Caption with style:

```js
const caption = await arSceneRenderer.createExternalEffectInstance({
  text: "caption",
  inPoint: getExternalEffectInPointUs(arSceneRenderer),
  duration: EXTERNAL_EFFECT_DURATION_US,
  url: "<CAPTION_STYLE_PACKAGE_URL>.captionstyle",
  licUrl: "<PACKAGE_LICENSE_URL>",
});
arSceneRenderer.appendExternalEffectInstance(caption);
```

Modular caption:

```js
const caption = await arSceneRenderer.createExternalEffectInstance({
  modular: true,
  text: "modularCaption",
  inPoint: getExternalEffectInPointUs(arSceneRenderer),
  duration: EXTERNAL_EFFECT_DURATION_US,
  captionRendererUrl: "<CAPTION_RENDERER_PACKAGE_URL>.captionrenderer",
  captionRendererLicUrl: "<PACKAGE_LICENSE_URL>",
  captionContextUrl: "<CAPTION_CONTEXT_PACKAGE_URL>.captioncontext",
  captionContextLicUrl: "<PACKAGE_LICENSE_URL>",
});
arSceneRenderer.appendExternalEffectInstance(caption);
```

Caption options:

- `modular`: boolean, default false. Only modular captions can use context and animation styles.
- `text`: required string.
- `url`, `licUrl`: general caption style package and license.
- `fontFileUrl`: font file URL. Set this when non-English text may not display correctly.
- `captionRendererUrl`, `captionRendererLicUrl`
- `captionContextUrl`, `captionContextLicUrl`
- `captionAnimationUrl`, `captionAnimationLicUrl`, `animationPeriod`
- `captionInAnimationUrl`, `captionInAnimationLicUrl`, `inAnimationDuration`
- `captionOutAnimationUrl`, `captionOutAnimationLicUrl`, `outAnimationDuration`
- `positionX`, `positionY`, `position`

After creation, returned object is `NveCaption`; use caption methods for styling:

```js
caption.scaleCaption2(0.8);
caption.setUnderline(true);
```

## Compound Captions

```js
const compoundCaption = await arSceneRenderer.createExternalEffectInstance({
  inPoint: getExternalEffectInPointUs(arSceneRenderer),
  duration: EXTERNAL_EFFECT_DURATION_US,
  url: "<COMPOUND_CAPTION_PACKAGE_URL>.compoundcaption",
  licUrl: "<PACKAGE_LICENSE_URL>",
  position: "top-right",
});

compoundCaption.scaleCaption2(0.8);
compoundCaption.setText(0, "caption0");
arSceneRenderer.appendExternalEffectInstance(compoundCaption);
```

Returned object is `NveCompoundCaption`.

## Animated Stickers

Basic sticker:

```js
const sticker = await arSceneRenderer.createExternalEffectInstance({
  inPoint: getExternalEffectInPointUs(arSceneRenderer),
  duration: EXTERNAL_EFFECT_DURATION_US,
  url: "<ANIMATED_STICKER_PACKAGE_URL>.animatedsticker",
  licUrl: "<PACKAGE_LICENSE_URL>",
});
arSceneRenderer.appendExternalEffectInstance(sticker);
```

Sticker with animation:

```js
const sticker = await arSceneRenderer.createExternalEffectInstance({
  inPoint: getExternalEffectInPointUs(arSceneRenderer),
  duration: EXTERNAL_EFFECT_DURATION_US,
  url: "<ANIMATED_STICKER_PACKAGE_URL>.animatedsticker",
  licUrl: "<PACKAGE_LICENSE_URL>",
  animatedStickerAnimationUrl:
    "<STICKER_ANIMATION_PACKAGE_URL>.animatedstickeranimation",
  animatedStickerAnimationLicUrl: "<PACKAGE_LICENSE_URL>",
  animationPeriod: 5000,
});
arSceneRenderer.appendExternalEffectInstance(sticker);
```

Sticker options:

- `animatedStickerAnimationUrl`, `animatedStickerAnimationLicUrl`, `animationPeriod`
- `animatedStickerInAnimationUrl`, `animatedStickerInAnimationLicUrl`, `inAnimationDuration`
- `animatedStickerOutAnimationUrl`, `animatedStickerOutAnimationLicUrl`, `outAnimationDuration`
- `positionX`, `positionY`, `position`

Returned object is `NveAnimatedSticker`; use sticker methods for later changes:

```js
sticker.scaleAnimatedSticker2(0.5);
```

## External Effect List Management

```js
arSceneRenderer.setExternalEffectInstanceList([caption, sticker]);
arSceneRenderer.appendExternalEffectInstance(compoundCaption);
const list = arSceneRenderer.getExternalEffectInstanceList();
```

When removing an external object:

```js
const list = arSceneRenderer
  .getExternalEffectInstanceList()
  .filter((item) => item !== caption);
caption.release();
arSceneRenderer.setExternalEffectInstanceList(list);
```
