\page CreateEffectAndRender.md Create Effect & Render

    const ratio = new NveRational(16, 9);
    const effectInstance = nveGetEffectContextInstance().createVideoEffect('Pinky', ratio, true);
    const result = await nveGetEffectContextInstance().renderEffects([effectInstance],
                                                                    inputImageData,
                                                                    Math.floor(performance.now(),
                                                                    NveRenderFlagEnum.OutputImageBitmap);

\note inputImageData format is [VideoFrame](https://developer.mozilla.org/en-US/docs/Web/API/VideoFrame) or [ImageData](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData), 
<br>result.imageBitmap is output image data after rendering, format is [ImageBitmap](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageBitmap).
