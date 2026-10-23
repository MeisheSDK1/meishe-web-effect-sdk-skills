\page CreateEffectAndRender.md 创建特效实例和渲染

    const ratio = new NveRational(16, 9);
    const effectInstance = nveGetEffectContextInstance().createVideoEffect('Pinky', ratio, true);
    const result = await nveGetEffectContextInstance().renderEffects([effectInstance],
                                                                    inputImageData,
                                                                    Math.floor(performance.now(),
                                                                    NveRenderFlagEnum.OutputImageBitmap);

\note inputImageData是输入图像数据，格式为[VideoFrame](https://developer.mozilla.org/en-US/docs/Web/API/VideoFrame)或者[ImageData](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData), 
<br>返回值result.imageBitmap是输出图像数据，格式为[ImageBitmap](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageBitmap)。
